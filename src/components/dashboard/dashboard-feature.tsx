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
    "4buYW8TvrVrcABNgjTBKB1BzjrccFH6TQzFmvUS8nmZRNQV4it1qnQJt5RS9n79HSHd77EdbpaYEcoz9mvHEVjHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4184txEWPGzWwE5LDo7oY2HnNy2wCy6kvAE6E1Gopar4MKjAwyDdGtaeKQXwzmfBA4UY6HX26pWq4WoMBoAoUiRi",
  "key1": "2kosTWQg5mKaZtAnD28sDg9bx6Rdtw4E9WeaJZ7XwvApHaAniEHKUKA5aQPTunduVgNpaRt71b236CtGHtut13wE",
  "key2": "gffupox7hwQ4PZaeQpvEArawE8Ueyz2tFGmnqDknm9LqUeUtWHuRdPfheMP9sEkGWDcuP8aCKC1hb98qzuUPpZt",
  "key3": "Ne1x5A8UNRQVH1RCCFESfns56H1hqUiCmxJ5eGxgnZ68UJFBKZ9fXSZtsENCjLVTeLNwtJPHa41vzGdZHXyGGvv",
  "key4": "4rAWnMZG7oTpaBDMEKoSGRgvzXduBPNd96DhCHrqr9MZgLa1984qxREucCWio4H9nuL1LHpk3FVmH7wYFjqTb1dt",
  "key5": "9tZb59CqNT2ctbtsDBzL3eJ8N2Axgt3pobwmV12ge1mV5csEH4HQ1dpJ5QPRtj3vj27iCKmjeN89mjaKaNUy6Rs",
  "key6": "3M44VKJNAqAgfGT38YEh7zPdzRb47rTogJU3u81jzS7VfjgQFyhvziAXCiEtpEuTaunPLTAjeHvfyHxfcP8zZ39E",
  "key7": "aKkQJwaafaYjgnCRbk2xsB7MEyqVqjmCGbDjjvxVXUkjusAN6HVPVyXGahsh6eL8D4UZv7qNZNTbuWAVH3Rb9vF",
  "key8": "DJm5psbFbiRZVaRWZa3uNA8AQnxCrgDtF3KHgCdHgY7vL3uZ5FpevbwPxgzqNddu27LQybdeux4g24uGoXPyTUS",
  "key9": "4PoFqPnHXWez4TZbYZrNhCA8jCn7EiVPT17gSPAaP9StQyQK9pDDkJWE1kJyJxkBSpX2E2UwUYCYx75DUABzEwvc",
  "key10": "5kiDBZ9zWAebTq7AizmrjAma2iixnx8GHw4BDJEyS9R3c1vQqZm5NdE4hNTu2TmyEc7RcKfch7wsyhX9xMJJsaSc",
  "key11": "67Fd2hYMyy6Nra3PThz3QkGB6Zm59kMVwcd8NtiJBPZjisQQDeX74HPCzwqLPxkwcmq2QUJDG7CgzHsJr2KgwsSf",
  "key12": "4UcGiSz6c7WbzXoZdbb4wuSKaow4KXFjSpgDgVkp1DBqpZmERCKfsikFuJbDXoX72Cgh24xn6k8TUdEuAc5SrLqh",
  "key13": "2zhnwymM3qYHJaopEoJGHgMHSBUu71bDvS5kuiT6av5ErAFH3DRArLyESANLVUMBLvqiopfcjnaDgBYs5aP3Ho5x",
  "key14": "5BMdj1w4ysVyYg1XLdYFufZLA8RwWvXp51zXeDB2Fzk7pg5Tw5ibmashhx9TruQuqMHXxidCc7QrGo8odmPHkdEw",
  "key15": "xVADwXjNu4wUKJNLNFUebJF7RAomXcMfz5pvUJnRWj1Q7q1wVebkLLKhLf5xRtJ5Sp2jatUDCshAv7AWibchi8r",
  "key16": "66qQRfLqQ8gkYCntqL76WKTpRcAftxqj3dVEDpuAcuSPLRsjii575unEi8Q8TjH5ibLtNmTGBztxW9RkEd5f9gUP",
  "key17": "4zcAFNCm9F35WrQXFjZBpzoFhLEA6u893e3NXCY1o66xbBWMWWmr6EA3fTwPhivE52FWoXRU9ShfdzCMm1DgdKm1",
  "key18": "5hYfqfLUCYmBqZi8k4NZsfD2iSBYFMTCsRuXmvoG6tcpkSY1g1CtGMMJPrAQEsRNTNwETT7mYxxSAsZWsTGzT9GJ",
  "key19": "DHgxGs5MULY3dcUujL96yhSbFxYsTu4wSd7YMJYXddiVwXQWju9XTpQQsUsWRWXfaC3GVg7y2kABFo58r7pqc9D",
  "key20": "5BHY3R4Z26mz15RFyPivEzFTXWmYEZe7qSYqdAmLETBJztQ6w3366wx9xbzjVR95kVgiwp6V434zz2r7pyNkxF3J",
  "key21": "3Mz1AYeXayKuzZnBwKy9y9iuSM5YoqVGRdLg17gs37y8xeR96Hgob2Nhtqv4yS2weqhNLWy4yfe9fS4CLZVdNaPY",
  "key22": "52uRi747Ut44nQnVSXXZdWSKRTNrkJeo7eDtyZo1AD4ThhMKJf3VHtuqXsTkp6cd8BRm9YUhMYR8gQdJZhrFCBaC",
  "key23": "61bmEYTjgarNd4yFGG2pdXnMxno6vZjJed3AdbuiAxQTG8mTF2RQiDPhR7PJg5vXp8kKypbJ7ZBnibrucZ4wwuFT",
  "key24": "537k54nsSnUHyGgw9AqKqnrG7SFTQxmWPCknBRULQHVNT1HuG7ZPQYaDEhkyKvNmDR9NqAxq38ue1vMt2mT1NRtn",
  "key25": "38mHpdi1ChG3SZeDs2Rxx4RJ9zVcDNX8TsNgEk3GSJ1tcGDXaa1YmWuqZYQJyE9LsCXbD5Au2sBzWP5nyDQPgkmA",
  "key26": "5HgLQa35cpvsngBsXbLXjD4jXzdDy5auZ2xggQUjj4iqew8CtL9NwtXFaevGwn64rQyujWmxVPG7NvgQNhWzyERx"
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
