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
    "477dineM57QpCPW336TkSRK2RhQDpMrM6YfuzZhnqUqZ3rQqF6J3pLbAy3RWcXokG7V8M8GTnmTRfKxurEb4ecyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sf9jccaMbuU9iWJk2y7txM98XLj2vj431xT6FtzaVVmLznUDBHbamVnQ9uq6cRRYakjY5gtq39Ct73nGssio5MW",
  "key1": "3bhKU2MWp8wGTzteifYyPSbGfV7EraxpyRcFXjBkEPLTeQz4GFDRS7W3GemWDT69tCetzcBpavahmHih7R2YX8uJ",
  "key2": "47kekGg8Ud7Mrd5c1C17fP6eq49udvy2JyiEoz71D8MKJoPnzxGvX11Ar1KsxTRUjw4NJzpXJYQij4XNB8nmdqpm",
  "key3": "4Lvnrs8JL224it6S9VUFWC9Vhf8Dh91iBa8UL3fXD5NJmqinwssBD13UdPoUjNgkqXh2EHHZeE1JSyLsdY2bCqDE",
  "key4": "FQEZ1oNN5xjoQeosfeLE3siDnx9xFTDzFqSksuM4DVcGNdMDFyw1wRvYT9S2J8qVoVuzdpo443LFb7R1s3GbDSD",
  "key5": "247rWMR3SzNwtihQRRMpkpaPzW4i3c4HuDC8X3fSRTpA3FQ43rA1Z91QaUDA33qRTEnz9Z9xwuJPowBKy9j6qXFs",
  "key6": "5Emgb2YstYdxvipu1D6ykc3QBomCEukdCj9JM8UnUC8i3y4mEVu4FJe8mGX5HWkRkrqkynnnnGfWcvX1GdTsH5k3",
  "key7": "3zMfuSFtC9XDSsq1qor7aADozPvAqYTAUUSwkyyXZAWzEpmcP1k98X3YBYkuxWHxEtAkyN64NZuWUZhVqT8CfzpL",
  "key8": "2R4WGfGvs57tMEkbsivrdyFxPi7aVKGJAbstykNACw7g8Wh5HgYtdHt9r2S8ZoC1gWRJurXr5gWKGD9xt6Uza8R6",
  "key9": "4Qkrb25AzFUdyykPp5h3cQ7ZFaayQry4QMoVGczXCAmGYn8UX8jTSmB8P6fXJoFAT2dbG8TMTU9QgZrbhoZK9nPS",
  "key10": "5VF8Akd3gitv3m3d7kKpjVUdYMeffvYNqVzfj1RvkECMZHNr27SaAFciMf9CzjDkWxfPNBzV8bLLqEUZuAABynD5",
  "key11": "4m2RA6Qd1DNduiBRHikBt4yqfVsMtpf2itE1MSLNQLTAffK7a4nuTpZSxx1twmL8DqpCMgcv5kTekH1XCDzJ7bh4",
  "key12": "48VVqtbrhDPZ3ypgXH4GT6S3ujDEtUB2prY7PQCzgHMPyaXp59RXkhDu6wpAyvGzNEdRzTZhLQah9CPSSQwqaQQQ",
  "key13": "DrShsx3B7616Sp3XDFQj1GiNLF6FyQsNoHptPUfRad8rcjWBAKe8M7EvFxdFL6F4NfPHLJmxX1E1W2t5yeeLEd4",
  "key14": "4ccNuTrqkgztwEPNku35zRifyMD8GABSsUWfQLSX44vtjqy3bq8hcfBz3nDK1wkawjDNkaovnVZU8ykqcZNsrCAp",
  "key15": "3acEiJedY4NCZncqm91HKnbuim9SdzJ4egMkFi96PDaxdYUHAF9pUKLzzhoFFpM6orFuGoXDdXKuGNW2YrehoAoP",
  "key16": "3Ne9EmEtfQRaMhgTCZyBaeGnoWdEfD1Dyq7sbTGHHPvwAxyFMuBz8xNYVx1dSaPWHQUYfJSNy36VUnG2PwbCErKz",
  "key17": "R7rYGmuBLhaGmCSHhFLPn5X2niog1xXjssBHBUURN81XZrATLmSL9wZ4Th3W7H9zqRLuetWj3Lreo2EwWHduW6L",
  "key18": "3hmtVajvsX9HPWBEh5pFh9QKN3RjCeYrtSLUYR5DK7EKJKh8RVWhFsGZLSdqgE3w7C8a7TLjvGRcbCNgzRdRm4kL",
  "key19": "3oQkNTKPUTfbi14kXDxQY78ZpxkV2P3FdT2vmzWqX1EW9Dw5LVXa8qTrGRVdkyKBjVTphEAKAYZuaWSszvu8ehsK",
  "key20": "61v7GtxAARSmvVdPfk3oQAherHfAPnkKHiPuukfQNgiQrfinftvYktFR4Nha2jvDBt8nEU4ynXUbeNCXdAGrVogi",
  "key21": "2KgG6KF85jRR9RtoYMoBn6g8JQb5rwUXr58oQcnYmX854fJXU8PaKFLo3UHKBFWGAbL8gPe947U8HWiXYU4RwVG8",
  "key22": "4b5yuWu5J2pGburDKFBnwrKL3SYiWCUuLouDFHBbDxinDybv85eGXjPvdejtXog5sKTYSmXkzc7nzuUipisFgR7q",
  "key23": "4RjQxiPob5zUsk9RbbN5w3cenEyhSnjRna82NvpShNDH2RxLK7jKSLononoZhzNcCDuhQEtCKNsLhYMhusaCd5RJ",
  "key24": "3kpzyqzGTgssMb3rNCEk7v7AUiwQpQFvyVN2ak8okRwUehjQCKTehd3w6Yvo7SHR8ibkhFgx3C4f5rTpptq6mbF7",
  "key25": "4QadeQ5gQF4LrHcCMTRQjUuwhiB6MpF5MAAVic8uXD1TyCTveCdSV9QLtw4PuCNre226YySgHkKY6fUaubiWMvae",
  "key26": "36dfn5UBEA99MrYY38NNcD3ryNhZw7pWrA2PvPSKXeDNBchsM37ozZ2qwJGEd7zajiC3CLLEeZDGWDaLWWZHnFHL",
  "key27": "2yzgetmVcqgiPBEAtwwBijqYsLhZgvrWgL3cZwFw81isz7FiqLHpGRK6i61N1W6rDWaPgc49aU3ATqVuwvjXM6qB",
  "key28": "2yRqA6R8U3G4Khg9TErEQnhJ3AhmY2LFeY6b7K4wTPnEbssp6EhGYrVA9cFVUQs2ciZv7g5dbiSLH8Gr7V7Zu1PL",
  "key29": "5qtpnbFJoeTzkBSwgxpymtrb1EDB2LUq3HYnhiqE6FV4DN4vTBCbDwYovw2udNeZjtifJkrSCMNHw49mauoxm2Qr",
  "key30": "2rANJFqvtiJp5ZojTwz1ZnjCuCg2snyAqLeXExC6xwCTZpgHSDoCRWrZZXxGNSfuPHpp87EmDm7JqsEPTisaUSCw",
  "key31": "3nQukdR5okLD8A8GDYPRqT8vLyvAq9WGLV5Ev82AUCM8DEqGxh26UXS7QEus3LE4zrgKbVWUjJVji1iknHFA1nn2",
  "key32": "2br49PbTedkgF8ikS7pVwFLG4iCJwrhjdV1wbmzgDNEFcXJn2mbaa5D7vRu7Dp6SeFh1j9J69a2tzgtXrYRuKwVP",
  "key33": "TTGzMK7pd6J1atPktTrAM2iUyvhpqZUxN6dM7WH6xWiSSMKrHPDoowKg8p9Qi1YtoN4td5Tnho7QWpv5rTFowye",
  "key34": "44b8cTNj1EbQb9Xxe9FJJduFK7RQSG4VkDAbgWH4hP9EK5CyD5ed5KWopVv9Gf11WFcTgL3BGWb1Ch9LwhYrpwN7",
  "key35": "77LpViy4GiEdeNHQT4RWKnXCiFvojgbJMEQQmiWL2wdobWv9C6KBN15zW9pEiemZ4VZKExtiB9d6qFosGCZx6PM",
  "key36": "5i7EywGP9gdizZr6f2jjt54ZYynuph9F1j9LUa1uHSRPcBHJF87zxRa4DEAKty1V8k91i3fv1Yuk63tQpxYsaa4t",
  "key37": "j3DDEKewx2HcLGAesz5Ca3bA8DzJj7mdyrJRX9kj4vANdgppQvkSausgkPKwjKC5CqfBa5sTP9VE4fV1evWkRVG",
  "key38": "4fKh6YuP5iVdvmsbSnbHJpXdKZFtoUNsi664SXGTRBZJWczm5RKNqYxpW42dr7g2bmhtwMUMsXWXJMCgd2oDX4yx",
  "key39": "2EwNsE883r74tKFiJhkdQzTwLSq43pyBzzcDDtFaWpMaFxYqZ2NqEjvpq4M8nHgXpn9u3ouxwh2Jx2F8oVJhMKbJ",
  "key40": "4eq3QbnNoxASfTqESEQLQXvAQgXVGebhLuP7aafS4kHgeBiK2b9wUwm34Kx3zkpWxm1v6heDMPmXBFbAv8HLumZF",
  "key41": "4LwjAfEEiBfNH4VDKE4e119HkUPBTmSSc347uJDmCvghacvCsD3bhM866PHRyDSuKScS4kj91xwKTQ5XKhLaM24t",
  "key42": "2Ae7z83STr1fkqZDT6U6wDjXc4TD2UDVRhfqTbwn4Ud3CqGyxKhy9nBj1giG9nLUSc2un8o96B8JDCH63cuWZbua",
  "key43": "5eMvyPuZeo4JZm54S3tDFwoBq7PFps3CUMh67n5435CFC2sMLqNzo3WhMP9uQg63rGNNRfcRhj9S23sZx7GZjdio",
  "key44": "4YFtm7ij2g8z8ix9snmyPQtEgspKd3TeJcYJU5BYJgFGGgKhYJog9XQaSLH1hMKJTVjCr6UoXZutg4kfcc3Frgf3",
  "key45": "Hpzds3nYcZWeERNK8JLGNsFFGgreVAMrcwivCBpAbTH57QYgxncM1yJDSwoA1a9uchVbNBMMdrN8BRB3Qapg2Zk",
  "key46": "4tS9aBwMHhRmmNy4ct9mqKjMPJZaaTCa5afQtpgTz8pfQH4U9QjUsKY8PHjqnhd7TcVe4NZwsk5pbQGLFre134wp"
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
