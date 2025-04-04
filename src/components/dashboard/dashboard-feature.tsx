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
    "4cmcPvKzFuEhSbZWHwXPq979Lk6PfX5wXt4QKAyJARrs4MC7yC8Z9i1bzpzamGSFWnbGDc3dQNqP3wmzJcZbmsAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42eH12C67E1tRcxEfmwc1144PUosN6Nzgmo5UdudyXSKKaCog4DFQ4SLzNHkN7rCyLZw23yUgfAeqCsAsx3L9U1Z",
  "key1": "4NT2kz8VkmkGZzK3zTyjgiMA1CF9HmsN7kZ8vG1TpW6AJ57td9QJ1JGXsX9ke1B5iFhfZif4z3s46jhtVAzXHGKC",
  "key2": "4sQeM3AgW5NgtDDoNB9J4J4wadwNAj8b5CVbZyXwxxEYNbGcfg7qVCFeiHXrECSiaiRsXDfE1tFQK1ftpAirJfGp",
  "key3": "2n9mo4J4T23H8WvBp2qK96zV2zAWz8FAyADrZD5xHToYxhhKacHmGvs4XtRaUCGwvvsne1idDdHYjMUob782yHqb",
  "key4": "53x487xRA69bQwvaKoonHZ3ciVgwiNYJK45jwV84tWKPz1b3MEdDE7cgDyhsUNSyC2sVsUuBJoB7wcAKcM1mUMvR",
  "key5": "2g4BtGutZpvN4QYTuesWCMbiDypsx7CYVA6LTgJePGtk3X58Lxe22efY6GVgkKKUM1idyyd1AA2ShN8FSBRgBeRH",
  "key6": "433nLbwEM6ZSHqDd9EUmkL4ixfZ3BQoibPfsks9SK7gRH3KqXAEkGVh75JJhg5VssqyiN9RkV3iXjnQokJTrsff5",
  "key7": "2Fh6LhNA82JVNvm8NwbsoVLniEERRJEe1TkgF6f2w5fCzjWRk5qE4yhAfMc2U7LFqBUfEaFdMfXstY1tzrN6LaNg",
  "key8": "4Ned9qaQarRRCBA7bzcwCWexDokxzEcZba581LKfu4yx2omm5BU9BswQcUwyvYHLeWL8Wm4jZ7X4zNG7tekLsW7L",
  "key9": "RRzBMxH7gqLy8hbkr5rWZeJatSzJQdYS34j1Kw9xwMFcfPvNGaibujMPsaLoJo41adg5aNGecUDC21oRMgp5udz",
  "key10": "56Eu8VyYvEvgnNYTRXjiA2mdQAy6iKax6pGnWXF1GqhmRdbdHkQsNF3QPpxTGMauUoZ2L2hgziCkPbFDt8THj9VZ",
  "key11": "8KRK767Cz56SNL1r1zgsxC6fNB8KcA433Xa81cPEcE5quYHF8pVKq7rWYqquTGbH6j1NCknigABe2CW6ojbQ64p",
  "key12": "3n3zUFh3ji7Lfj3zS3T67tbUQHnyzfSYjDi6NFPwUDuudUWYBySX5YwqyNzdXdAPGCqGEz8GLxM8HNKnHbTUS5uJ",
  "key13": "4vUkvVsoPGWZexPo1VAt7Gd2updD4uU2uMnQ1L844G1G4SQmCWGU7H34jAimTjjBAUDZzZJQQ9AnLeD1yy5NcFjS",
  "key14": "4pjYPHoWiARAsQjmDCtNX9VQAtL5ZpMJ9qaanqLocMDoS6spwVyaPrjqnAMM4qG5rReV7rJwm7fnd15miNRSirUT",
  "key15": "2anrGHVVFYm9YsfnW85HpmjAn3JTWZahVYfSsFJEnAJ3iTw6zZ2wodyLZZkykBZqe1o9quHGkbMyBr171phLFqVR",
  "key16": "5KZJeBt9MHwQqNe6JvaTb3oVS9Zqn1Qtja9nZZo88ynQLt6tBUj3YyM2ro1bfikuAaDchMuyMnpft5VnDp6gByxa",
  "key17": "21VtFs42s8YxcS3z9vRgVo7uT2iv8Ffiyw3NZzTAFJEv1awUojqYfvmrZWCFG3Zz9s6TApw67FWZUn2HzxDvEkHo",
  "key18": "2SJkHruuidgUusD7Lj2n1ZZt4tMkdbVVHoCW7NpFUQUuu87jC2SUU2e1sazNUYyhJ8uBjFjW41Sm2ij4PDwbxNCq",
  "key19": "4cmTPLHdWpWKSqttFfEFDUEDd1KmDdMDVrXk2tLBYFexMvhNQTP5qc7FaBfYTZ4TWpBx84Yz2MJ5SSyGxkHqhRca",
  "key20": "2e5zmSSCAJyRCxk2D4bWwUy9GdvRfjiRGiQ4uacuTPS1ydapUHacrTKr9xSVFfye2gKT6Qg86YBJgPVdcAJa1ynC",
  "key21": "5ZifbxvM5RKC1yckmJjHqhMaVJchKqC8TKLk22nNgspHYXMYs6wmTw5iQu8MypaYiyhAiVvoZPFxLitUjb7cm1dL",
  "key22": "Cxs4F73mw6aFG6HEiLnsFQEh9KhUGHcpbsFFvYmiNaTumYCQxb3sCaNirTJdDXXcYZE6SBPtYwLKhUiH3J8JMHM",
  "key23": "LxHzxKd5acaANwmZ5P4ZtNSpBn3vP5izz2k21WjAjiCQsEurXRp6jmu5441JKcM8DRWbD4t3hULbBVyuvMjqU2D",
  "key24": "57mkeTqCZzFZ2fY5enqzdyyEnkUL3tuoJVDC2R9Toqwb3dau2nV2gnxFrm3g9jopwY8PVG1aKUprAh4qxr8wu1sC"
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
