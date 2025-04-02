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
    "5xPtNK4D9EcdKAUSXPAqgSMPfSbA3YdEEzsKGKUUtu6REcgUWhoYQ9deeaiM1wK4Lkz9XmCFaPSSHgjQqVXzrHqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nvJm4MvzZMa8qi1euCQRWHrDNvWu7saVyQ7Pk2S2hP3vbw1fDi9tuLZ7e3v39YZe5Lx5pvFmfrLvJoQRJgDVsSb",
  "key1": "KsUMc95EHeYcJFv1EEvBr4YW1pAWL4VwMuVnMw8fDbPEftcXQc3omkqthyX2vZdbiBLrxZvJp1LgN3oVjZWpEUr",
  "key2": "59edSERpSUYu7AEM8oBppBmtxP5C7yEFKwXYJN2cL9MU6xkzCCzfBk3LhHmJVyUj8N3dqwgUc3KJr8na9UoBTmSx",
  "key3": "YyzwdfxkX2mrk37Xr3rNNqp6oRLq5sTMfqqTFLSfA3JuLgdg1sSuyJSDjQQB4MLhEwHV2bVj7rFfjjWXzs8STg6",
  "key4": "a9jxKtWrBYNaC3EKkgkGWrRZiKCmvBamRMecztx8BUuKnuwKmk7wDTmkwSdosnPqUzgBKpeuoSgdQCC8X7gtppF",
  "key5": "2zYD8i3jwv8Rmd3esShGSXgCaQNDvNcaq2guGmXHi4sTixy6paV6r3nPJ2kypdum6j7Aj7FjaomzH9NA1HSdHoWk",
  "key6": "5Ms8ab4Q4TSi73shdsZBuwbGSczUS26TAmDxL273zzJxH9KzBEKbcsaw7Bpvuz1d3LYvJnmMHUVCYPf7ffEP1sbG",
  "key7": "VEBguyadjPm45qGUYv3W3Rnd4htsUcPK18Doquxx9Ngtue8f1NHzFNusRDpQ73DJWFtW85DQ3oEfAoWiNYhe7pA",
  "key8": "4Hx9E5WBctJY9TyiVciWfAeM8QnqmRQoFV5uXMi4SbfXUUQRrpNCQHsZ187ekFeuRaLgGBVSQAKALF19vUYrtdKy",
  "key9": "5XSMsQ55KDwmNb6kmm2rHrPVp2vV1ZThraoBGhjd3e2uR9Wk4aLSSVxZUvTQoExAaumRUuCdNBFKDWxqaqsLW1wf",
  "key10": "AA3FaVEpgnF64mmTzSGDbUSw11XfvpStQ7odQeYciC5yKhqpTEaeEkiTKqDUKQGarK8SJxRURabwp4iYevbUMuA",
  "key11": "2RGk9QA49CdpVF3hCuqDEk5sCr5xq4etx3sqpG78C8WgHL45aZnLv7w1TFTH8tJU6737ym1msJo4XiQbDopFzT5Z",
  "key12": "31Ku5gYW8vdKycu2H443sjCiHZUcm2M53bYiApdcZM7uY2D4AEQYKjxYijzzRNeR15fMmjcS3mNwof2psdt4sDDg",
  "key13": "4nFrjjjWmULbrbEQQBxiVKjGmTWiKFjthKHpQyML2M9T3DPd1CSoB5QnNg2qV4aBX2gCRsE1rJojB14Yb5GsdVVE",
  "key14": "vq2Udj97VrMqQ1U6CcA6hCicQVTHQXBtkc3DiMMRtpmpuRvWjcf3vLkGWXxUuz2hNa7UZJ5jjJhExSVYugdpDHc",
  "key15": "4WNJsWtj3XrRFHQXP6nANXwYXAWLfKMwycr2ogBnedEeWGed7aMqKiBJ62dGAx8nX3uMbvY2if3wLHrogKWXmVmf",
  "key16": "2SP75qjQTab1GFQtiqqBZ5HHGJR3ub8tKnCqPXyVmQLqDEu5LDJqzdqkXjbqqRShnDAfqDRHSNRs7X96vEWuh5GS",
  "key17": "58FnjaaPjSZ2P5bEKGGTNaM8tDV26qZQoPLEdwwfZVAfVodHtgiM8T1zqvMBkTeNtrfJtii26zUYZtbWXWdci37i",
  "key18": "31umzZa9zHpLRPz4AAHGr58vFD3ckoPZVUZ4rh39d2yPpmhsgaudnuTXenR7s9sRzavKUiKgg52P9YUW3VJuyLm3",
  "key19": "sAbTgxi51spgrx1kEuX5pYWUC2nKHmCeceT8vcJwnXjevohxaDw73jgiZoCjasYK38bSxzsKCr69TTpwN4RkJAT",
  "key20": "3iQGU3js6NBse1vc2h6wUQ3E6CdS1rFkdzKaMAgu2VsdL3dSmud5gNhKo3PjvVUo8AWdpMo1vHo7i5rQqaXJkeGv",
  "key21": "JRLVhnxNDy9XnD7Lm1cbz5tZU5JykkbkedDYrU9G9iQbefHjdtuTgXAbgzFgoynpeGBsWsbaAASkzZq1m4Spsis",
  "key22": "61b2fcZ4XYpBXmERM5rN3xPfdj8jm1PuSAXx3fPmLgzmGpHWm2XHLwdduYAiZbow7Le1W7owYBDcGjn6w5fTY7Un",
  "key23": "33Sjrh1ZL6wqvbJ4JVVwA9qdHGyh2zD4zyWcCqEe4CypNScRuWLs7snySz8CqfKWHX8hCLc5UwJDNEKVySpnxCmJ",
  "key24": "PU7tW6MSmMnq2Tq7m61XXWh3o1RUKeXmYMfc9HtKxhggBNKa8kFmn61mQFaaPs6auU8YHTr5Mdbtjzx8SPTFT8p",
  "key25": "wzQEjtK7n7jP8ro38C6ffCSpTbYJFNZjwq3R3f5xZou6o6GQ3QqvFeHwGPf5mKywXGVMsQPBZtpFDEgZPx3yQKb",
  "key26": "4634m46WYpZEHarFoxMgMeHPP5TXGjxPySqESCbouHHfSwwBkMpfFr3NfwNX8WKrNqMDNxtPf9cgJRjQLtht7BVL",
  "key27": "z8ZNrP7ZvHdnAgX38BQr2W6UuHCkuTEvMuSJUmaoh4RiDHFArLWnQSyuYBHfLzkdMpTsC9XZv3W6ydXvxjSaHPz"
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
