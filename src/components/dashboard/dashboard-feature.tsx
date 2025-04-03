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
    "2nmcTsF3iKsUcTgMqu1R6AdgSrohuUdXXi53ctzyWPbqGFAopNLU4MGY68sbVfqLpV7ctpXzcRWjLnQ4SkAPXw6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SGR72258WkM4duXPoakVtgLfsTyQtxm4fQM25vuAFXJR1f9tG7BZd59q7QCVW4ofXbfRgnHv4MT6bF8cveuZj7j",
  "key1": "4mLoNvgtysc99kPkjmLPtSfNwZporDBEjxaWPWazvcSjf16pK83jJiFVPWr1w8tXvfDpTeP7VKrVxUVs3feuJnsW",
  "key2": "3GzEaCnUFAu2jtVuWN7yhJUPXrovm4KYAmraq5WQxEhDmKsR8wVQCtUctuSZB2aUnD7GgFhLLawbW6zYzgEs835M",
  "key3": "jhhLt9WFW2obvWiH1ZC73kZGEj8FzufdGvtP8M3FhjeTWQdUKQJhqZpem7JnkrMhUTNtii7QbPBhweFaiaW66dJ",
  "key4": "3eWdg6FoNhBFB1sZqgo49NBiMp6sxRmXko4j5pP71DV6BPYPShyUvwHGaaACum4amMwCzaJDg8a78Fi7VcezKa3Z",
  "key5": "3nivkxgHECsmRhXH6MQjfgh3ESFTr3MqSY9sdGwmm3jba5V5GpDqHCmTkWyLoGQ2GsRFyDCjYhVaB2yrN2maDBCw",
  "key6": "fL8EqwBUkTxNLf6kgKxVvv8B3F58djLyuCaULXcbujwgfArWT3XjVwavq9JW1qZN3pT5XNMVcSRdx9Bbwaagijx",
  "key7": "5EYdzke1Qs7yeak5DEvyneJ5CQsYQ8JUp3CgyKFjTLCinURKrbEGAYCeZqAj5JM9khjvfehLaPNDi9nTQMgg9P6s",
  "key8": "2b3zJb98zajQ9by8erGkwLqz332EPvJC7V8sPRchsULiaFzRmSD42JApUuyUiADFHh3eXhf4CibGmGzQik6QymBg",
  "key9": "3cLyFjA5XAU55PfHgYG7CUxAeR5L7thmpXBDodWhGicdKeaJUNbdfxR38HEoeBY4bmgc643j4ss9C1XW4JnkBuPX",
  "key10": "2QtgSWEiVQswBwi15mpaKaU3j5H7wUZ5sVFbE3UQj7ra8mvrqVAdCHMmJRyWsW5uecYG2yqBhzeaDMnfuBGnUE8",
  "key11": "JB9rpZbCCPF6uCaKwU65zxffB2srbiBDeA1G1HbSoG3uvNSCuFCRVTJoLDnsa2xE2DoXtvqQr3QLjVRLFuVKcFK",
  "key12": "N6EH5Y23hDRLn8kPdD8Q4RsCU8WZecxPVHXP7p9Ss5c1ZAnSVSPnhKg891VnpSEqAXU6JA9tH6G6SoX3gQoquYY",
  "key13": "3a25MK3CskyJBow3vM3HL2UQSh9se5hW27Z5aKgpaw6eoJkad9MhKcnzpGcsNXC6v7xw8E5Acj5fipbjPm8yh5jX",
  "key14": "cK8dKBDuvDT4yyQJNt1hhxjGjD2aBD62A2ZFyZpjHvQm2F4WmvyZqm8MHsJDoj1mCKAFak7cbZYLxRkmnu5nepH",
  "key15": "x27VmQF4CYp6Q9jQ2r4AaGrxEyC8xEtSdKaswncePZY57jvXGTx4PnFjaDUPZmCNpdd9CzfsZKnTDpfGVJAHQGL",
  "key16": "3wWyqtTwYYHbiMyZhKziQnhaj18j9UAQFrdFyHxU5FVZQsxz6EgG3WVKwpBfsbm5KGoM4mZcCx6ZxqPRvtFGYBsv",
  "key17": "4eHWUfjzPeXruWoFsvZQLDUx1A82WHAixqRsJq7VEgxbFrCe5PaW2ucPxCLMd9f1Yaj7f2SP3cYRaWj8j7iBwJ7T",
  "key18": "2gYLQr483VFBVVBmMwmZkPiZyUuZxpHUXg6ewyxmiCzWg7dbBvrQpTGKEWi2uzAAUetNog4JMeUXfo1MvYyfVQ1Y",
  "key19": "361SV6tieBj8gpUiwMwi2YhcrCHekkLDxnRW9WFktTnnpzPscPXySXz98SH1qvK5eW8vnMqJGVq9gmN8P1t9b2ci",
  "key20": "57vUH8edpiT7vfhfBFczSzJYgdPuWPU7q32bTCWKpKx1PotxaMj2eDP1vPPVkoJqfWH1wF9z4Mp9rQSaUHwwe3wk",
  "key21": "3VnhwKU4ekEfkXikjUaGtmvwttTzDq4w46bHku7muevhn8smeFJNMa7obFrcfXvw6SuSdif6x7hDNHu8j5fZy3F7",
  "key22": "2hK5DnHrd2hrzGzK391Wpugo9Wdfb47adUL1rsBroyg75J8TLASmtk3pTboTH7T875VfWGui1BX3xZLnKKUCWJv6",
  "key23": "2CFohaeaSRjxvg1gnsXQeQvpgb4bpR6H4Tiy3CkiXtnFAtkeLaRUMmZSSthFAUuQCrqxqNpujCfzJshXGsK6BoMW",
  "key24": "5QucyiPm6abAEFGhFnnGVvJNZtf8QwZMxDVwewgCtjkBFNm289zvsXTb4eh9vMwSmVrVqRo4SvMUUgJM1k28naho",
  "key25": "uKZDGZxHWR5Gp4Crxik67osKdbZtDBHiVd7DbDEYJVtPXQwEvJ46HGMyX3sa2BYSGoWe2gwXRoJ56a88D6Sds8S",
  "key26": "xGfYZBnu9TLWJ6tvqyz5B2vvDxvHZSCChgNpra3jnLYk59AkBGg6f7MTmkxXRJiWTrvCYtXpsK7dDKqmn6HNUnp",
  "key27": "4NXvryMELaiSQVi7w3GtnBHEoWQX34uuwpiRW2nSYjTrYNiRNYhaq8ApE7ieUBHCa2anmP7oGgb3jK4T17DDk36B",
  "key28": "4FcwgBgsHx6t95A2vQJWmK7RnMMcDkGdN3hTNJbQyLMT2hHZfc2sKgfkpGNn9XRrJRjFKfVUJCTZwMc58mZMdKgk",
  "key29": "Qy8m3k9KyP6gCmDJbHgpZoLPxzXj1CwacsHbQoGC96CMNXo7UTmC1WQ9TxXFp8syypxsL2souizGYs3L5qP91mN",
  "key30": "4oFjpFusR9D4d1xnRigL4YFh3g135nNke71ePMNThjAvVLozHBHVXoen4B3DC6SG42N5YB5Z54f9wU6kbruJjDc5",
  "key31": "2sSHWEPUn7HfA7bmKCEjyFUNo1epK5SokVParPDU6CyHre5ZzzoJR51pAKSD2q5VQCxuAVSTUP2wMf8BtJMSQF2Q",
  "key32": "5uskfVbv3S8gPrBiZvaxPD1A4ads7V4aNedPks8AQ55GxH9FNunviyWvQvcUR3n3ZxnSEzKKcLxYy7sJHZ2nmSkN",
  "key33": "4jrHzAYyyny9ptGuxcpSNdq5qQxsB4rNyKeD71Q4QTqDBUeKT6TU8UVELFUyn6i1SqVUQFo3AnfsaiVBhJ3BdGh8",
  "key34": "4S9y5z1bUFnT5HrfJYXCdfSzXdYiHkiiJAdBAM1EZ7s8iQbKWY4eSgi1L99LUVm2syMxWJNUNhGGRqPsCJ64VbBD",
  "key35": "5j1m4YgCQPhhGzq43gpF6jCRc1RFGEjcSDTtKvt6Ub3Yt821MAb6cE6B6Pp4YWNSRaefcG7SpMckAELKLBj11BH3"
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
