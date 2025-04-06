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
    "4qm3HHyeZkZn1b1NM8k84CArR1xSYChNL5kupGGmCbVzCLdG7WYeu4qTW3kyF2swQKQ6fwkr9WL79RRsXSzSfV53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5opNYUt5KQ9snH5sA8g74X74y6YEfFrsJQRThrKoLf69WqZ4e696YKJWM33zEw42Hjw2VjSWYkWNEmDXCSbJcSt9",
  "key1": "TKD1hemdC1urXWKXWKnHkhaEDmLtT5BGtNVYUd4E1zJJMTRoJLi9kEhVNYvyDRBCRZpr5WxXo6bzwtk3fCpLSAS",
  "key2": "4MrBBu5jxJqctdxVww5d917iGQSqeQDV6Y4Xq2GQM3qcmUgojQZ5UDDwceQeiLmCbn5X8XU4HGqPh9wmNNGEcbjR",
  "key3": "kPLEEwpA6GfMfdcKME4q5yc9SLWhKQKDDKqdtJA46NkkkMxD6T4jaRgDfataoyzXPS4vKHrxdhjuqmXqBRKi13h",
  "key4": "4ReEJEubU93mughRQ8TUcPBNYAw79he2zoDvsP7fCuEkon7k6cvuWeqE67HZB4c7cgexzNCN3rXABbgJ7jjVPDv9",
  "key5": "3EPo1exBwDwsdByDhgGDKSxLp7gyFk3EEWwLYnCsndtaj1c5rA4EdnKyKwwtTv7YAHYGcGof6oQimEE3xHsAZPjH",
  "key6": "4vDHezAUfiK1NT25K25nUfm8oVq37oFFt4vyjY5YqikvHPwKmB13RzdxpUNTQw2MBvLPfsWkW6Cqsg6ssrqywbbR",
  "key7": "3dTGbYtYpC6B3aVv9mHuDxZaNXuapDTcbeBRAz8vmTfqgmbedQVVx7utFxYiZ3HYhFKx6M7B8RADMCRvjKf5XjLu",
  "key8": "62Jn6ZLmbQNJ8gUZjf1dewA1aQBC92UsNN6Z82Sv3GRWJ4A6s5hFUap8PmdeYiqeg5FJFScyAUzz1vmTdgDTWfNW",
  "key9": "3EDSb28ZVnMzLH7oCd9BGCcAvrVScxdxh8mAsB8gYusjkxLjHAm12ApAcWvzXMeJxWUnQDY4kixZCDYeRNGcJRDe",
  "key10": "4NUSVQ8PEkJww47wtShwSfWCaiQ6y9RHQq3hU52caVxWfwzK4xUoPDfjcWgdDj9sFw5srzRpnc4oHiQg9MEERdTu",
  "key11": "5oJVutvVBzi5rdjtjtbaEpYEVAuaGDsFHrRgWodeD29ewewFi32tWYfkRCqVp595N8uW9FgdQsDSPyPYxEsjttGZ",
  "key12": "3yDGze3H46qiTcduzkYMC7mKuyjspLVzm6J6novSFAqqr1dgif3amRCn8t6dJW7DFbUSZDbTht3eLFPd6VvPE4Ck",
  "key13": "41xeyS79pcfupwm7HvGTGt1e6u9fosdT2y1L799H2aQFqs7q71JyjPmMh83v2kqr4QxpBEYcG2WkPYZpmrCU9tt7",
  "key14": "4HMLyUayaMfWbtEhrmk7ZmUv47WQgr1nAxd1Nub2KgC6vDxsqDp4u3PbLJbTLgE2QpDVyG59vE6tjFzaqUV4YoPw",
  "key15": "22Ej1oSPUvdNC4wAzfK9bHczRbqBCdsR33VHU8jZgUStyjmmbs7v2FhLgMcArkPF3E4DBNoHmdy7TcPgfuSLsW6i",
  "key16": "5ce2pyaoPab9javaLVQtTMEiQnnekG1B21VgQ4iNwdmrvH2XF1nFVKUinuUonxD42St5ZB3Hevj1yVcGANRentvT",
  "key17": "3o7WDSChCAwfBKturczMfjjP2eVTJy5JP3cwiXunDcwHE1GN1LhRTapT6rU9hugMaKdjY5ubNeTC3oSNYcuFAQjL",
  "key18": "2wdj8xge3wNGCWDupjeVXH9dNjckYupHK1RntL6dhaTzT6WDtXxb3E5JZpSFYn2hMmxLyd51nxiK8K1h17sHBw5b",
  "key19": "qa6rkRkX9Y2DDjewddjkhrjRSaQx2p4SWjFJs9c3nQYvmtdNCRFZDWCGHSZSSWQanewQPVfuFobsGTGAuhzP2xt",
  "key20": "5UUrGmWMz3ocxsa2Rk3gPCtBxndFjfnahV3nuMxpf4yFeF2ForKyMLUsXnVaaqg86NayFAjLbriWLo5vYCtXeEBW",
  "key21": "qiBTXzZU4dz7ZYdJPZhE5UefBqHdXuct4zBQrQB2kYVXySNNcsV7AZGrnHkqxwzWiXWXhrRD68KoJ6t9EB1k3q1",
  "key22": "5xhZ6Vxn921mEAu7GPjYuMPvpe8suyCU2EM6vTSwo53odxhKjNa43i5CKzbLPJRgUggcSFwR55KJTBxr4CeEmJo4",
  "key23": "p33dNLpJHprdAz5veXLatogdycBcwsMHW4GKnJLCmsqZyyRranoFrZKrsQMJKa4hJdpDZmd8PteumcurZiTpMig",
  "key24": "39t54yZuMcEW8kfLWRQh5QQvhTY6KhdPmsa23CN256ziN4Y87RM5G1bNF5qqKELb9Uk3Pb2JhBpxJsJLxXwpLywL",
  "key25": "56xqwrapArAveb6QLuoFhRt7TabcFjQNq7pCubUCPdDyzEH87FhzGMJbA67vTGo6FhCEHpzdSaSNeW5e3pqJtibw",
  "key26": "2c5zi3Vv6W3xBvKctFpYFf27PaeCk6e7KZbYBmkipJeHD5P8FetNsip1bsCnbVAnGZkik9EfzEB3xDCwyLamTdBd",
  "key27": "VgG9YxBdVgfKAKP3UGguKYiD8UnUv8Zsrzr8tVgwPKeWUB5AEEDs4jX4Fdx48RNMaW8syR1qiUPSzXxGELma2tE",
  "key28": "546sTQMKjam3MV8meGwMKUvHwmugaZYRFevBZouKC6BTCuqnPNx2V2gnrCTFDKtwtNZwv48Qb8bJ9SBS6WpSo8Bq",
  "key29": "cotZXKbNpfZMyFjuRHhBjUxZ4Mr7sgpMcab4BTkVvqbZMBH72WNv8vKZo8hbFvsKijTk3PXvhMsbiiUefoLazG8",
  "key30": "5QRL2cwGzG2ud2CXk7C1Skb7ECsBrfSFq7jWQggiGTbZxJZ2kzCFSnHwUSGChTEUeAaz4n5iZzjYSRnDhYfz125W",
  "key31": "2XY87BV6jhhWufeWL72b7po1US25jSjhcDShgWBVAnbvkKyUtiTEuTcSCv9s7a5jzeSd3arw63wHCiKCGDJosYM6",
  "key32": "oqWHRRXmRyb9heiTgKir94MXYiNQdoszXS7z7NpnVmJ9p7YvkmT6uimjX222zsa2pgjNnw3PEAn6q4y51RrjTeU",
  "key33": "2j7dKCXQ66r3UbMSRbUFjFfRwnm28JKLQ5WCDTEWR4sp85CtVwJ33c4csewGgwD2fpDQThifY6QvTZNjuJJWSWBj",
  "key34": "K47PmiHaPWPqgfkZwUFfnbisb1Ua4gr9Q6BfL2U7a8PCTicQNJdjmjf9C4YoDpmSdywP6nefPYcT3GN1yBQrQ9T",
  "key35": "32eBd1bTMh8ETMs1BrCfWhEughiySg11QMmXRT4tgASg6Zv2Yi8amnQnrvC7NzpUcL2qZEzvYLgn5JAo9hBPgPiT",
  "key36": "GXyzXcQduFRcxHD2b7nvPLLwuYhPmZHzMmgSjYmE86JLv5XHweCoAsoLGxPHLqkywp13AiTV7G94B8aN5PMnuYj",
  "key37": "5MvHTbRuHtsHRPCfaEq9QTK6xADvD9W8U5KwLfPZYBbHAiVHokdxi6giG8busVYuSjkkGjCVBZnoZxCZBcBZ1tMe"
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
