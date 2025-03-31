/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5U58VcxZkJNqw868n5N9nfeL7zsMJShvW4qDiA38zRtsbpk7S48LM5sQMmRn2Ffmosx3dAen4UtCqgSGdA3prGx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hQ3YL2B5sMeNTrPmrvhfECXHfUrmYxe4NFi1x15NDSCwUT1fSRBozxsGF9MCryk8DSRfJ5S1yq4jPRfWKidnp95",
  "key1": "2G7etM4Ly6QzBjx5pXGm1t1o7TZYzgRBNUPgD1rkdduBMmScdFB91Ay8iD4LWRK5iyUeUBVz3s3L4evBCxYmUDmP",
  "key2": "3KLcBCpnTnS4kAiWEHVeKz2KLaTpC3JyzZTviaB2THyoMZDwv5h32rJ7V8NsnFNcu2f2cEAq37EHddVqPuuzqVaK",
  "key3": "jV74X42oGTtNjH3vzd7zX7Qd4RzwRV8GEQoAQsWneWLuomiU3HohkAhFh1hGCaBNiLznSX1tBxp59zk3Yo1CX6i",
  "key4": "3RJS7m3YLgeCoUd1KujmiBAirdevEiVQSGHrMARxnLPAnt9qcCSXAT2cC9FBBUCSmuNbWQN2f8iruPQFjJBdmCn6",
  "key5": "52wHXcVc9p9P819S5jupcny3JEyjehEXnCt2x5ZBpCSPHScipG3L6psbwFju2uf32xeuT5tEz9aM2XJoJhkM1emR",
  "key6": "36Ak4oUyN2yQ8Mrzn4xRAfzBECGWLhySd7CNh8wfhxKZ4Wyo1ddZ7QVaUKAbwYUikcHuXxYxSGJCw9Ks3Gw19Xxb",
  "key7": "37uWwScdgLoDppK447Z1Zkjk9yp8w7VYm6qYv8qU6AWhJAH9SNVgRCZ6zfNXxLFeSZfWLSZ7uahUntwnPemxVbCd",
  "key8": "2ad54Ug8HnjKK1wRAbKDY8aNG39SNUqTznm8mrz4y6fTyzsQkNYMaHwe8U9JzEvrkKm2f9F5sfbBa2CSXi3GUtxU",
  "key9": "5zXUCdP2vaEhfxLrqZvyC6P6oT9YuRCXbpKT3QuP6SEqFaK4RhNe6W9kyqaB6VUeCYg5cKLJ83v2Cn2w8LUUMRPy",
  "key10": "4vRNeUJN8Eas7VgG6V6Na3eNksFzAhAGR2KYcuRyYarbZwavSW44NmoFywxx8sXXjHubJmRfatxe2xGSFoEfSMK4",
  "key11": "32JfK1iyednT86py7rkUs4gh1ZmWR4QZmx5HaKzse13uQnXVv3QLef6Ke9X84UuTqa9Su97xsYDUfZZuKKMcKuXp",
  "key12": "2KJ8mJ2aU1UpeubhBoUh7QfuUyQ6EuqJD8y9ngxHaaMdUKgLRXurkBGW7qN7kUMX1HkMzHwHeQ5CkhR1XTuApGqH",
  "key13": "38TYadnbJucHryEdWrB7n2XZqkz8ejyNkhSUPVG1Kc1v592aE46176dHfUMoKixrDSoxPHfxVh4HafD1dev611oK",
  "key14": "285bWSyhrHQeaanpqwNJQ2KC9zJ6oT8zAdMBG8dc7qcsbCPFFwjXNXqRBxXeXA3apKabo9869daxrtGfSpAgb8m4",
  "key15": "55YTA2MNtqSSkApGRp9AoaViiJ3ibC3zGH95RmhGuuQxZQPrmU6NBvTuSvXe2u7FYVttTHgscjZ9q9aBMSa2nXUx",
  "key16": "2oBRKjHPcZtS7efnSLNd9LCnzKa7jUV2PJ6Chgah8abReVW9YVKnusGhppnjdkiAYiLgcBsa4deC1mVRQfRMqepg",
  "key17": "2A5WhfP5xiDnRYS73LYVkPsJth22pDPGSCg3WjpDqSsDU9zFrAnzJXkvMS539gD7KyZ1zxnyAsU9vHfD7FvErKsr",
  "key18": "2qWmr3G2nKvYKh1JaKdhxn7eixyje13TH22Ewj96jmEbCYW9iqnn4XpzzhdiszdBsKKZL9Dxj3m2X8GB4UidTPok",
  "key19": "3aCm1RUBXtkvLnSSvWfXGpEu3g8mxLUbiztKbFrLsf6myJuTi85edYkJaQ3gdbe2esQH7vfhiwY1yCJxkof2YPKk",
  "key20": "5yy8VWDCkft8dDiuscPSYnL17i28gAyvAdqNf9YEgX1DLk9YxskLE3JqtQLChgTRkCyiPrMqUKjHnQ6dbV2nyMJA",
  "key21": "2RVxFyafFx5XzUdL788n9JSRbqfVCimYkKAjuFKwmY4af6iP1DX2YQjRikaHbWr8Die4tqbZsuorBdfCyRtKSdfe",
  "key22": "Zo78fzC1G5HZWLu5egKoAVuYeAj86T5Pb1tjpZjhraNuuvqLy449D8KemvWAxUiTqJtVjFMzk9YcXEwA3tVKeCr",
  "key23": "5RdTbyQFHy5J8BogUkMYd4GuZPFFpnhire73iDyJc2zhfhNrWafwoAfNy3t5skguGPaoGWTa827yy6tEYwmzHAYF",
  "key24": "5WnQyKNXtxarfvTWN4JU3aZsbodM75ryMRe3JDKsieKd5y8msfAiF2GWPq3ZNJedQghP5vh1CqHjYexzYttp7yGX"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
