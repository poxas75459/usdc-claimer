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
    "3JzppqXi4L7MqrKTpd8HVpzGksxXw1fyFjSxayFe8xj5pPrzudHwj6DSDu5eUXyn96gHdnHYkouYXFeNwdB1CtnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QeSMxqaV5Qxj7CTdED2UGM2xaodGuvburQVDg83qXkNsgxvD5cnn4fMdw95MxXhAwHSe23ejXi3gFyaAzYrQ2Sn",
  "key1": "3z1CKG34NFCp1Jcwrjg6YhmpFnspwgU9heLEGX53T6HCiQt6MP5r16e1Db4Q7fjRsPXxeHWzUjeS2zuaKuBak2DW",
  "key2": "4DNVip26xeDBzpRBxZWmD7psKT8t283gyJzsbxeQSPqv7qbdU9odPFb6tscQLShSnGS5BN71w7jh3e6CPCKheWsb",
  "key3": "2iVs524twJcnoRdQVh1VMBje4qGW5Aw75rpG8EMYroffRRYbKZ7arJHgCmzHU8gyQtik4TnutsyoDDAme7AjRfH6",
  "key4": "56FTzrL6qv8p3APz5vknWnMfBGRnGBiC7729GmCPzZkLi2pN3XjmFgxjwqpZwGeqVUtiEfRcCknXUmEBWVAouFLw",
  "key5": "4UbtfYLnr29cRxXfTbZsjZPQrZcH7BdJcEEceYUBhrdycGtpjkfgrSMXfszCTEUVZ4Zp8PJF8q4y8n8Yp9Rry66",
  "key6": "4CB88vt7vUc4bw3okDzEZTXQQDHm1THBpfBAbCZywewSCv2UA95XZxXWUW3WTrFHSxNg9mkBvoSEcY8hxYqe7yD9",
  "key7": "e3ohEHuHNKxKp7cbuJJMeRzVkP8cytz4pzzQDZBUwggjaeXCEadqtoD1GCYmEZWR3t7NFkBJDnwbc37WAdtb9HD",
  "key8": "5zmrzd3jo8kTWhyWrciHChDDUj6zihdNucdHkEp9tqSrEHbyH7WVNS2QLcznFmGA3cWCX97vwQnQjXDCNQwyi745",
  "key9": "2scmZb44zcqTQMhyLxWGN9wq9Sck53duWz56JsK4AJMZAKeGhB3t8FbCYJEyGU72WtV6njXp7WProvvwbCovE8DT",
  "key10": "2He8L9mtXXqzcqGboSo49xXbzcbNvAaVkxuEv9dwb4xZCZPeqPc8jd2umn5wAoBdFsqtWJkt4YnqNJdTQhECR6vF",
  "key11": "4oFDjS46GfebVMabGFCWiwtHBnL4HEnNazS9zmpEkMbWuuTrEWoWUYLYzvDqo5rj8JCeZ4xmuj1ByT2biUS6HMPL",
  "key12": "4BX2WF9LZ93BnmEGja1T5fXfe9iYVFcQwCsXJA73ULtmH3qfHrfxLE3jbsCPnzkqwD58gWirryq48qYMYYzLsecp",
  "key13": "7zG238RyLkBDKRdnZ4X2wem4E9HTK4YL8Eer8jKqf2Tc1y7wAsBxgEVWPmFx6YtuTtXSSbyhHKpCNYZr1eC34DH",
  "key14": "3xf7qPUERkyGYkJZFNQATpGmuuwrCaprKTJmzfxoMnScWeQCvr8EQa4QdMN6oSaikyLkL9Hn6zKJPrbHcPpu2Nio",
  "key15": "3JLPUNCGu6KJhT1s1QahU95j4mwE3KjZSY4bJeHyA1ccqppagyX9Nz3AbFrS9XdNwncXoQjcj6HDMZCUxWTxAHJd",
  "key16": "2qqGr1bdQEWEKRLkNxZgcaexCeM25CkzxgHzPmHALtnEs9q8HpKhLqfV5Y2Se89QRH4KobvQL7L48dz9Vafu3CR5",
  "key17": "2pozkXGAJCQ6xWNv5Zx3N2Bc1h3VrqH4fa6hcKLAUzvsUyxGENopRGwbFCvdmMqdm4m3zhdRA8Rg9EEzMYdFLi1R",
  "key18": "zwcf6nwHK3aHbG7tHjN3gDvrfGax1bBKmoTLHGsx6k4AphooA5mdSXmriKTeGNP7VcLKtN4hi7SpzhWddudDpJq",
  "key19": "49tbJohiiGMvjnfGd4fXFsWcY3DrVtcpzn1PJK6kd7Pur5nPJLspafkdgW56eMYXGLvuTKNAN2ifvFAzYHdPQfha",
  "key20": "59WiQCLN9AQMN7aKaEywbEwFU4i2gSbuKieCFPueXBP2W1uNmnnKfD1xVe7LdhUzdUcsAjD37xeaibmJDa1UWsCo",
  "key21": "5YxZLWzipCuwgCyXFwEUQMcY6eQkn3P44XBpekAn4CuugobhTuAgLqwpTwo8GyeabnYE94B2bvVFK5RkYZUPi8vp",
  "key22": "5ehjfb383GMyNjLDMAEZAbXHnm6fStNutosbhiTGveWUzS1UshKpvibMWz1VBi6beaVppCgvhPBuMMBcquMrwMWA",
  "key23": "Pj33oNep55aszw8sadTpx62PUzB7RRZ2Zy7f2qhAecKqxDCgKDZB656h3GZ51wZcjhbvAWqgjj9eP5oxemDjaKg",
  "key24": "haenotbRyUoePuyDLVJVeVt51TCZz5VkofqrxC8ezgac4vKJFR8CKSkerssJjsXREA3ehHoLSunr1JzmbmBcthL",
  "key25": "WRADmg4twm2TrGLenfMgkcpz9cZMX4k8Ksc8MnRyA8fSEfupRAvENVHPVndKatYRcMpVoufuWtx55vzdMHkaYQd",
  "key26": "2aBhwEJfL3Sk6VjxD1DnsHu7bfcPX4nTpDqaciueTFCxiFMBFTZ7u3cqFS5q271ZS15vuJZeuwe75fKmuvmKfSo3",
  "key27": "7rWJ9et5kdRcgkE49FyfENJ8RXmzTgRsBN1Hz87Moxv9PmE7EgNqKwPNmnq7RqthBVQEb96ercUqWkz15X8sKoZ",
  "key28": "TNczVwPcfLpzpzLUQpC2QPwPS1uCef3NnzLjoQTw2YaQ4Ld57KQwg6XSBWrasyWYZdpzwEK6Uw8pdEPm9m3Gjpu",
  "key29": "44zEGtmppyur7XGrRAhw9TLTwa5jHBM5DrdzJUSbK7gP3PruVSyn987mxSrHyxVJSURNbtUtAETmoaUiDvUyuXmV",
  "key30": "2h6J84RGGYimEjRWTGzhvtcqjKisj59VXhib4jKdCjUjXEX1hP3AKYVmsXfskdA8zvUe1kEvBUE13VcdaFxqmuUn",
  "key31": "5i1u1zYhn3QmwPGiyUQa9bYBubQZYpERhmb1SNrqRsXFCNwkavPcoKQQv19gvyd4XfxELhPZCwLQ4Wybkm6CUznw",
  "key32": "5ugZRMy3kXKqJBRWGUa5R2jb4JKj5JvsJA4Wdfy3NqwwBfnWaduNnh1KTKjQawDaXgrxTuiX5ERWZvFHbymmsieZ"
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
