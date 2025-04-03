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
    "8XgTKQmwyEHwSFVKzaupHRt2awCsYKu2zfgUXAKoeZwVmdLhMvJL5TzLGWwUMywzuQwNJUiZvDxeLSVJQSwH1fV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LYJvMxJYyX5QmxuVFvCCrXisxYxJ8BRxbPCAT7JRPysvTbRG1gdaRJcbDoAXH34tSPnTWWp5vPkhiXXFEeWxcN9",
  "key1": "xGnpsutQNaGpDJAoe6EbFDWe8rLZYU5awngYSoFh8F6QL19tVjkh7v8XEktbq2fhtHhoruDVTCsHKKQwjFWV4hK",
  "key2": "2FZWo5p3QTkBB4qRsrEKeRihMT3CKwg8WBYhVxritjt3gfnwc6GHFRyTAGyS3KbAwy3n2tq31EDk9LNfeM67rUh7",
  "key3": "5mQ8WMCESf7yGUVZWxv45c4SAukaWj77Pe8DqcRcXWKiagPGboCf5J91UQLSZ9GRmKVWVwU4g8jMQMRLciWYtYQ9",
  "key4": "5FsCmyQg6gTA5taVNPx8gFsyxwp1Z2oKqC37TVpTMJYa7D2B3YxDUR215EkRndubZ8UGVcs1uQ9ELWvCUamivxj1",
  "key5": "5miX4JkmMrLSeeNm24FJtjojwFEgMT4UyjGWXksXWy54NQQr2VLokfeY2ZrhkycMTx4RNU3ne8jjxxCFcRCBwtTj",
  "key6": "5aZuPv4V7cxAT8bsmU9U27SfVT73qXZH7A7J9cBBYi9zLtha5ZTW8TsdW7SK7HcpctunRqp3N1jQUe1SNsi7Jp2Q",
  "key7": "2MmDvTBCBQpuShXDgiCUajcufBpQ6VKk8Z8UJHQn4Q1PGyP89fmAiJFARwP8hREjNnjD24XETAMPfPcHsSH6HgEQ",
  "key8": "HT2sXP5Xc3rcd8n4C9ahvuZbNLg5TY8p8xaWxTAbYXfe1V8oGDFMDQE72Du6xA29d3BBJc81a1Q2VgmhvQg8mVr",
  "key9": "5GEa99HSv8UZ8KusKjcM4ahKB5RWMB7kPjAR5cwYtVtzCNqZKAsF6fKJ1JsKgyUh9VAz5DUPy7DWPM1dw9giUoPj",
  "key10": "2jBJmTs2KS97rkUeoyfdpDSPVUYbK4D7XfHU5r2FxA4153JkJjyzs9upaoL9srnVN6NETcBQ92cgbuVrgE5Uhwdh",
  "key11": "2JdcRnKVjncqUinXogRmjn87wTBmSr1rzk73SG6KDA1ZNFDZbcKZWY3piLGRDCtHFTX2wUVhDvbsupWh9TSdNbW4",
  "key12": "58957tgBSrhRDfEVcRRcpyWBawkc6TmV8SETQShE6HRLNy9mdxTJsQLK4ysDCoBq4ST2WjHCCHDRpV6b5HSKvU37",
  "key13": "4VyvMsj9Kn7eWyVUVSJGQPoStJn3YmRVBvoHbjChjbwCZPg5w9ZB9FFa7deTNwWMmG5CSxJqQfjeWFFMDxZbGVVT",
  "key14": "ZBwzehzDKMdL3e2Lboaz6NqnArzedpU2ZKJHNisLLtxQY2RLvKAGMZhHsEJSq2E9EwDr811cVw3gSqdYPSwzhJC",
  "key15": "4VBrPxHeURwr9nYspDYVg5XqFLvA9yEa34rjjhinnd2bqQ2s5anxzdbDNASsiwrvpHcP42YYEUscpzv17jw8GHuL",
  "key16": "jfP7CpzZcwRZkE6q2bRD5fKp8BDXoBv48yEBsFGYAFeQcM3Mtuc4yJwk2H4wq31EokGP1SLHp3C61T2zLQsTzdV",
  "key17": "iPEdfj6tem9SeuwKDpABhhwrAcuyUseWqv3YtZkb6LhL1TdorkkZSCWj6Av34TpSZZJhgMiDYfYUgy2T4ds1czZ",
  "key18": "XqAA7iGCEkDfh6nWzAgzVcdU5skcpRctpYg9Aa3xuwPWovbR4iHWvMpEB5pMAPgShz6M4q7UsxQw4xWo415R8bc",
  "key19": "AFbzSBw7FEagrELJ62d9gAMbW1pYmaZ3DEt3xmXzmMpUaRqeAGVchWkUCaBWnKD7pFy62XH6geUFN9Fxxa11Cvq",
  "key20": "5hhSyxTwqdeLmMg8JraAi8gc6BcWUh68Zpq4UFryfmhrtTNUUGEZ6zACDc34ugpzFjp9pBqaGKY3dnMmLdZHaweA",
  "key21": "4F8PLx8vpexyQw7SFbrGJdiSNNyaVbLXAUqnESvEJGGvsg6hZ72kTtxUxV9x51XN7JB7fwJrpEzeL9tnd2fMu53Q",
  "key22": "5LHbyGW7jf6DyEG2tJaMzvr2X8s1QqQE5FCqN2KM9pt8R8zqB4vWrANuByG9PyhqDPE1dU2SmtyagiEBAbDAJqiY",
  "key23": "5RSfymZ9QSTdWvbp9hVb97zcfEqC5ReFh8mZ3in8CkhkTaDW4GHo7nfZLPpxLkPg2ByunMMS2VqvvQL4uQNJAjQd",
  "key24": "3eMYvQ9yj8jNMeRJGEncsMKsn1FV8RVjRQVV7rEG2feANYaPGUuJMQqEMZjgq5f76BimZUFs7ftczokx6sQojQGh",
  "key25": "3J6X3xQ2R2HyyBmfEcXn9kxMz3zZi4ZMwqUkBc5yo91wvLTGiPS8Gyr9FAAiXyBVYtY88aYuFhgbLkLeuk7zJ51S",
  "key26": "2qRi6mqefHQJoUWDoinpa7Dc3PWgcXghGJMnGGUUZuH8pTUdnfZ6S81TVYzfEEfeAmfkyibP6a2kt3225VSNiRMv",
  "key27": "4iYyj2UtjQ6bGXNVC9kNcbqunxKxFgsQ7HNcuTiSQm8fg8gH1iwHgHqPdUosrFUgS8Y3D4jMVmYPw7mABdZTBejn",
  "key28": "2s9Xut3FVJCVwDVP7Ti8QxeVpAHznznDqa3FmMfXGUJWdbzoiZ9SpjgySBaiYLiqryyGrWUA86s9fLyNr1dBvLUP",
  "key29": "cL5KJLv2Yg3rjBQQjGN8sJLVUdDB3coxiv8GYqdcCRVL7k8eS46eSmtsx2qyghQSUVvAtZ81WWz3MPap2k4eEus",
  "key30": "5RM1qWHtArqUkP9QtHsd2rPLpqjMeN2owobzfW8tbj8ADhmA13vstZ4Vqau6UgQeNWEL4JY4ecqsC6erMFvLV6YU",
  "key31": "ETbxkvDjJMMhHhJnaK5Tag8RguAycWmDm69UXnB654LnzFLyNTauAEAvNYUgB8UxKsxRSuBbxMJtJvA1MwvTS7r",
  "key32": "4x7jQxKhtW75vN2z9baCDFhyhHaqxMHwWK9Y2sL1w7pb5aKARfZnsd1e8mo1a4q9MawPK5KC23t6CmRV4GeufRDT",
  "key33": "28nELUXqSBrnS4gFovKtdYPYCQNwASYejDz1mJESFT4yD7jGfw5W3C1bzjEGApEVWaTJzS5tidKhN8cy6iTuPe8A",
  "key34": "3SzEQJrLENa7by1EjtzLbZKJA7sQduUkGET67jbLCf2EmeAzpbSpDW8WvsosMTxnXPXarysUyQj8U2diYYhkZvQ3",
  "key35": "5XL5KusQSNqqsun542kcqACc3PkuVBEJFQL22JqVwzkLvo2ZgJox86JKx8vLS9o1vZBWk5omAk9cNHdF8CkxtXzJ",
  "key36": "cKZeoReY8XgSnKuQ5HJH3N8ccTnJxtTYr4spNdy8NYnKL1emK4AsHD2gaQQpv4yfDW6oKTsF9RWKacdATBtoVsV",
  "key37": "cgkFZ15e5MJTkpS9YwviWxFmf2ySVeW1j85pLTwaxmuTVQdYcif4wVTzDAMvv5SD9dD4nAdUQefBQvAbLBujNfG",
  "key38": "2DzyTBkSrK7pSzyf1CPQSzdoMP1qjzMBf1Ff6XtWFoWH2MAM2P9zbLyqrYkitaScVLDcXj3kqBCNnoT6gufXjowJ",
  "key39": "4ojZcyC49AXtg2sGjg7xW6F4xdaKvRboin1sBEm5vyEXJ4YvtqaaVt9itLDWS2bMdcQ3WC4Bb4LAp1BiYF5HsG5T",
  "key40": "pRfyNES1zm3MiwZmEbeW4oJ8MRD3cktbKsFtvpScqYdzQXi6fX2HGhQFo1psyFuWcEmKd8agDzyGCpkS2HqdiD5",
  "key41": "tQ1dp33hHa2CUgF3xDVvKtL8QmYvB4yHc8v8ZEFMeAbmUcToemGuV6xiwpi2vycPseRFQLEVAf5d5NKvcqft5SY",
  "key42": "7QUZoAiZaDwv5uMzwMMrA2tgScraABhabjmnrQG45WfK8zABuqSMtjKmHQ4tdP7fyiCoSdjscmiNHbETjfQcby1",
  "key43": "2iPvE7To856MMrTwBShoanpSPy65vNyaNAPKHSFkrf1BpCjC2Me1j1z4FdjcokA2wV3G2Tu8thB6WGwQW7Lp6b5L",
  "key44": "58Es9kfBnWwViKiZxFyAgqrHhMegsVUDbsb3Xe6DYrG57UoQJFNAYW76QaG6NDY5ZkCUQGUHYs1rqYEsoyYtJtEq",
  "key45": "2XVdLjG4RWBPZSoAM2eUVhvoPYuhGFTHXKVT14wAsLqwKffyBaX5GqeMBEmCr8KhveDE37rv5jC8SV52nvvVBAW4",
  "key46": "2St3ECr1DHU8f4hDeeux4pEisXs6k5r1y1W66UQSjmmBeYvLppdpfv9eZnHE6UAnyb9rPzBjhqngadKHZaJnuBYB",
  "key47": "2vdSApP3cqRquxRJin7NoC7dKqK1coqbZ8bt9jDgexvEA565fdfFGhuzLwbzi5TGcuQK5aeAvaXcjTU4pbRhmDe6",
  "key48": "2g7krH2QVjCkC25kfEfm7NdfpBnkeLQKGB4JSojQRm41GvBMz6zAWenfigMJLh9zz5o2kc1GGmmnMQnQ2dCw5Shw",
  "key49": "3kPgRCYY4LYETMc2JRnhrqYHEK85qvQmhG2wN3CmBa4AXQxw5KN5qLy473u7tSUyrPr3YqJUwZuTMzoCY4GgyuVz"
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
