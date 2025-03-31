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
    "3uJGb72NcHvCq4NQwY4p2fLA5LPfLBbs1fCN4MyvJJLLxUr9iUiuQna8mQvxGPuNtJn7FZH7wHkLo3AGcGi7gTsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gHSH9SBEfiNGbh6HDNNn6g84Mv6hQfAjyYfmtd9H8bcYoFdqsEFCnzG7XhgVMcRi1nKvsL3tyLyWoWm2jovJBdm",
  "key1": "591AcyZsuu59viKvzN15NWxiLWb9Tzf5yK1y53DqrZibeaHYmgcCCcTKaWzj6NvWSdhp8S8dSD6UbNFbXPXN4ijc",
  "key2": "2vnVZkdLNtpx1jtZoWPDnh6XPKiPicgvGsqxNhnprnGhfwUkrUUFXrr29Sc8ZLo6Ff9yzR1FaR65PGePHtz2NEEw",
  "key3": "5jscyf4QXyZU7mTYAdpeQc58J721NDikj5g8vZN8QaJ3XCKT4DJQmswvnRggThmPHiUQ8FmeQP6nnvH2gopruJKy",
  "key4": "sJbcFoocMwD98bYXYXyHxiHak5MmDcpHNZJWdUkZQGJkeqP7JSqBP6BCwZQBX4t9KVszSUeArDnV85bQYVn8u76",
  "key5": "5N6UKV2p1YBtk4f6aCFZFHQQnVSnVdiTDQAaVp4MVg3PWbXbvncVrGd6QfKvHePxw12w7PpgYxcMxiFnVcstYSmJ",
  "key6": "4KdD1hhvZfdYmG3g1foJBJ3jbVVZn174mwUJD2SeV1k11qaP8jtS5B9MpQaZDDTAxJb556p2zR8hC3MAPLKKZMzq",
  "key7": "46pwSBV8a2GxAtoWbn3zTd6ujXqehwLr3XCWVapVvNuaxou3nRvrEhvmDbNeGWR7GPbUQWZ4o45k8HQYSbdEKnMY",
  "key8": "4bV7B2rJ63YBATgjWsurkyDyoQB2Ms922mWpwXDGTM8HPG5VBfY1VFvs4m44qFFQX5fr2gezNJP1JRbnx7h7BR21",
  "key9": "2p7EtjZYcVdB7NbUaeCTZqu79CQh19XV2MqqKg5oyDCqCe7kZVQkkBKCMzgxXCbWQeqjCtrdifZM1sbNz9Kc958g",
  "key10": "34hfySiAdw7qNEiFy2RKLo4sBtLkSQzM12SnCH67JRnN5NKpFCbUoUyQXtUJEp6Xn6EkBYKo1sGiXeMT6BEM243C",
  "key11": "Cs6vi8mPHPPZvmabjhPKGH4pwLSwYgGDKmspf86uUEKL5TLGmtKjtkhTtAso4TkHNPT9ezMbEP6op22dfUx4gu9",
  "key12": "1aTxBXQY8iEzy9ZibSKd3Cp44E3nGn16UH6jEW8kGfBuCym6ukCMiihxYZbKExRi9gP3QkWtJFtxsZso2xdRPGH",
  "key13": "n4MXPJiS8GWHRLcGtMtV3GNuhf6yYT64W5e9QRE6ex7udU4viFibew1Um1nEuGtb5uaB1khqrLya9NRoMYS6zoT",
  "key14": "4Jt6CJxdMFYzerfUnaHPvpm4K5GQdPcsaK5c2GUpp5QqXNLQPVhZBDDeLzUnEU3cGCKLrB7u7qLdUaD8bYu1PC4L",
  "key15": "i6UCpvReq3aUdd62krDu6gAX3gcBiZKVxA8wzKo2bPJn84jy1AoEwEh66CihTyCBP8fdv3tX7L6XdDt5pFCKBV9",
  "key16": "4X4fu9B4389TAPf4FgUMBhP2KtuQqi888FbQLiAdxwCwB6qeFHSUwik68J9H2TCAHTmsGtN27UQKpuB4ZCYn5yvn",
  "key17": "tUfiUkFTjZJVwW56EbqYTJmPE4fzwdmiHhupR4ZiuAYUdmnDubkYmxYB4bheFizubXVPvmGJNBQjnySNSFRp9Vk",
  "key18": "miHtAvgQTKh47fLRTnLnixeheFt7K7UATmivestyuDCLswRdW1cCcDtqxK5djzbDQfNfTvASHJVf3nx98mj9qwR",
  "key19": "2H2gWwbgYZcwHEvi78795rTzXk6rWMCxNxPtDYT1RLhgcqEs5cVnMpqs3FpMcK2XaAheq5voMvHCXZbhMDxjQdAG",
  "key20": "2zSLhfVdyeLmwqgCqqGcurCn7qay8rYgMr1qs5no97hpVAZELNZxwL1hTrJgbR24d1KitSLg3AGAt4XmmeTDAJaj",
  "key21": "2RmY21vCUPbZeBNmuzAK1ZWRFNbQF969N2xMJe6wWoc8CNLgBJFmaccwQoo4yio84zKnJySiVk443SRC3qLoptP5",
  "key22": "5FNTHY3QvxKfMC3fyshAf3U28eqTuPHo2tMexLEZaLygteDPmsLbwoH8g27G3qkDQgJ3kBFqtGkgoeCRn1mWtdG7",
  "key23": "4XiPW8wKiVfCURvGV5eiotfrKmSFgjewBViqYnWPEu1rZyjbMvtzPFRwUCnZGJfKy6oLnu6Umth49wh9mUqrU5Ue",
  "key24": "2x2mapnbuNFNUVTmZWExWbi3aRHWeJSdUg1hzaKM2stCiND4yZcX4ZqihYLCKUVzd1oiQg2DwQv9aGerE6UGKFaD"
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
