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
    "bia6kac1CMayjP4bqiRa6zKK831vbrtqryUGePMmScVqnjnSDvpshZSoWkdNS3pVUMrSmWArox4eq9sR6aTjWAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51RX3CCGKZEsUuC25fxvDpySAackkMufC7pB66pHQw3WKtwEj4srwJ28LXxR4gHM6tZJnQKDGP7R1BoFZaYBDa85",
  "key1": "2dECXz1DdB4eHKWU3kZNyUUhz2qJ9vAJg7oYjfKZidBibfUPjCumHaMpUDAGbNZ9zCmC7PFPjrVdZCozB53SxxGM",
  "key2": "63UAZi6RbhJ6HH3wG3pCPj2cjCwJuJsWLaayngqNjWFfUbY8wxC5dgi6qRYAThyJaAmP7aCoU2bjEGPkwBcTnzNw",
  "key3": "2ZWdoEULMJxS6ETvfHJfwrtw66TM5uDrtdLM8pD57MG8wTCYmZAAsfYMkSefVBFD71c15SKp9ofJ97pvmJKHoCKx",
  "key4": "5VvxB2UXKzrWZjh1svYAyrsYYHQnixr1yfqZjVkt62M9JsR5iz76MEYRJPiy7Z6jbEYZzLvhe2AJUFwW1sBEQwQP",
  "key5": "3CYS7GKwbNS8Yf5nkwWvT73up8wBjGv2BX8eXgSenUqmxPEQFN61UNSwyu47AJjzjSaGwnq9E8mHehP9r2Z7qrKc",
  "key6": "1dC3G2Piamm1REw6pxnAvzKcEWFH7fQQzUeF6tnZ6vTPvg8qDT6926iBihGHurqYTtzwvj5K7hS8hSCE7EGV38S",
  "key7": "4LHsFgJMNNrbhK4af5JbUYDawyaGfGx3muR4f2RjrWrcMZ26fE9EmHebqxtoRKsf2duiA3cS3nCMiUZ9VcdsWpoB",
  "key8": "3Ltw9ZsXxEFmEHntx8BDPF22nkrnpkUtM7Gbz7RbP2YEMNawNNL8Mi6yFmmjEuZiS4f5MHAnkWZ4vaUZucsthor7",
  "key9": "24kQ4tfDZ4nBbV8U2M4t65YkwP7kZt9d4iAy2rYHVT6wERQN34jm1xR9omewXzke6BfZ72epBKWom1kV43Um3wxP",
  "key10": "2P4WWTSeU3RU3LHUhE94wfyzuGNdCpe6ZpQp4dqrYSx4xeRKfNrKJzKGox6VMuSQpybZL2nFEL9SppW6C7g6ZQpa",
  "key11": "4gxDpZp5Rm1p4w6ZJAqHuPrFGiMW6XiYmNmDk4gLDvFm9DW7sdRdzWqD74HxAy1bQmyhFucmjUx3seP4Bh6XZBkX",
  "key12": "5pQnoFLHFC6PuPq8QkBdFmzor1rTxBbssseoBkqSx99RQMnccAA5YbHV25YyNDdXCdMEYbCwxeHKTkJavX6ii5eh",
  "key13": "5eXuToLHKq1Dmz3Bf4AY84XCsNss4ssPKgeA8koVoyvsB3ngb5hQTY6R4WqfE29oGBz3FZZK3nAk9TDSxHpgSs9V",
  "key14": "3ZgnZ6hfYtGXA5UaY8EFK4LCxxavEEyJUiM21D9agmcWQVrgPp2fywa8mPhiyuTzytRiowrmziipDCtpapBU5Zob",
  "key15": "312uUEnsR3x2dvSAKfstmyJYXtYPEwivCgpkCWTet81GqRhbH3SYYBZDRySjTkJ99nP6G61wiosMbu1EhvN9ojp6",
  "key16": "2agQMMXaPYSdzLUJ2LDoqjtSrNHiR9fg7CThssiHdAz73PLsANcpgDkt1won7bTmmNR4jQ124CSoiJBjFgZtVgK9",
  "key17": "4KW8bahH2gKnjN6zL7165u2yd4qeaNQaqcRhVxcqDe39u28sdLPFUggzXcGUmM2xuq2ak51ySXG6EXyM48JurMzn",
  "key18": "fo2pJ6MS58gLzvNyo49NWA1YYrGrcWnScjPeXLkajBFunvXFZrmMu7NdU9EpC82d5EAYvDt13etrD287jEHNiUo",
  "key19": "2pncJ2pTVYLxx5WGptnpu2z4s8KHVP4zuJ9gixYtfqGtSL5wf6tctdxCeNoSmskvZunVrWB1iVwuCpAWJ2XbwAwM",
  "key20": "2Gn1FmqjAwRjBZuuCSuVoEUeaDbVY6VXMN1HJenrgk6oAQspXvBxfqYDnPeHwWn61DoVPbk6LbTPcMeNkkWkkSAQ",
  "key21": "6Mx6TMPjzcZBi2rV4C9EPLHkHJK4N452tN5hs1wpgjt7ih2DV12hVWxis319ii4o9zGLADJ3L8J5qrvCxJAwuVg",
  "key22": "5vUVF4MP9tWjHzxcLtp2BTRuC3rf7jNRjgHDnQzuvNWjpQ5mDT7pUXTKANdr81HQXP6cfpmXADu8TvjKEA1cuD24",
  "key23": "2h1G2cdLiEDw6BBNrW3Aanhx295PqQZGAXoZ4mgGQRv2nYwqFVmdXkVxEDcT4AJTx1UbCgPcPjRXn665ifjCQmTX",
  "key24": "45RKSDuj57Xy9mJNMcLgAbRCy5JCMSd7b6VtTyrog79eSbpLhnUyQ8tJTfNww3ij6D6fBCyy9qahinEnRB9fQotz",
  "key25": "66JWi55AUf5dWXWrPXyA72ruSSAxSo9UMcsEFBewVsG8eeMZH2yZQdfBi9vseXGV6PL3QD4te4TFJV83jVJ2skFp",
  "key26": "5z5nvsGgrgDGGWFTZAQYbFfTcb4wLXrYmoJQfGgwe1Q4vaFZe6CEdhRcTdMjfRVZsr2Q5rga7GjEkFzeDpxwbtRc",
  "key27": "4hJbKpZdA916535xkaGYBw7PLvSy64aj5JGvf3HzwnSPTDhWFEXnQ4Yww43ioa6vSJL4WeyJ8w8x7p31FbCp4Yei",
  "key28": "38W8Pt8MqsnBpaCCA5UDhE4REYozRHP4yPF5c1ukCyppbxhqbYg9noMZfCoiySWCo491jSJgYFCXP7VEDRpYNCxs",
  "key29": "4QgN8FY2ZJuYh5QiHZ7YGUMZasNnDMF8TnyJBA46VzsvNK3bderTpgUCA1YhCJpeLk7wzm2Tv1AttyubCcRBxTJD",
  "key30": "2w6dXazP5dR4dLgD8K6XcEN8otxPCHf6rHS19KoAArFqSDeVdxzon5WsRvZ4ZVFuJy6YzaRvDqhWVQNWoB937aSH",
  "key31": "wW8zqMkVu1Wcmt1TNr221891STVnQwJ4VHFWQMGiM8brk41KReCquopo9NWbAtqM3medTWPXhtQorzn5EwfHenB",
  "key32": "28PNFQdK4r6cME2PVZ63vP5s1xM3tZA3neCi23hK2chNz6yAQAnsrFHLSu3c7jXCAHU9G1zoppF2rY5Jg2bZvSoZ",
  "key33": "BCBRzcG2UDNyXGf88bKfsn1dmVgvvHCAYGAPSE4Gr8YDMQxMCxc1Que74DLacEGgNdZ34ER29vYyCA11iLJ1j1Q",
  "key34": "2kEMMD2tyuUNy7do8oxxwyQmUgzmxUNZ2AD233T7gTALFz7nWFHixnyjkgztuQjBBQwhpZLyrmJLCfYPmP81L96a",
  "key35": "4QA2Argt4nvzr9TWjtpsbWA1Rozoq5TB6dif2iUqk3tessmswNSsNm9BRyLHs8UYDbFLo35pLk7q1uD9KDnhfGRy",
  "key36": "2b6ch8oygTPZ1fEk8tieRsuU7RYX3Mbmt1uMFLVPFjjx8duBhRgRFaG6RDUqMzJUmTKxa4ByJweVBqBZvqKgYHkB",
  "key37": "zvuNacLhWjBMRW38qhiDrE4v3eagyiFxuCSkQKBTvSJMhLv2P37onDcrFkNHqiXUSc3G12yFivx1WbYKZtmwt5d",
  "key38": "2hWpUUWt2tkppaWMFtWdoPfpCbounCxb7y9AnNk1dTUMpwDxYhq6pS3JGbCRTntxAVRRTL8NSdQs6KSoy3DdgAi5",
  "key39": "4vh2UdziPQCXLWNtFPUvEmYBmtumKfMbEghznwktRuLiGBWgpwTKQG254MYQDxpg2D4G9hT8aW71FR2QgRie6TLq",
  "key40": "PJBgCfBmDKxdYJjiZeMNkohhTZzeBWiS6hedAoDWTHsCbuL3BGN1oFkBanCu8aFN8XM6S5q7dydA8LYYYfL4csL",
  "key41": "52c7hzbFUva8NpAMMxcgCaXRE96P4ntNAEYYXFUyQFGeVmoV1zfS4eLjS9emsnrh2atf59f7xfuWt44hfwen52j6",
  "key42": "3d3LUCiyjnM3W4z4oCmD5HUtJv3C42TUsoRZ1uJGmcWvvUCcv13w6jW7EXSPernris5sXxbjfdBhAK54ygq14U1W",
  "key43": "AyfmUcT65fWGpQ3VnXxdashmrFH7D2u3WZq2eq54q3hSESnq8AaG2RX1n6PS3SjFR3EVkwyEir4Q2msemLVezFR",
  "key44": "3g8H29xrCtMPeNEpxxdPcnzTNq4SSTv2z8hGXjCvgatNQQdWte4tmqTAfLp7fvtjxaMHXpMmF4hWpoXfA3rmC6fS",
  "key45": "5wLGnrGFzqKS7aqZfbSpSmAdzscwuzKA2qDUoJw4D81kmyPq21Pyn4sGauL17BJCLEjkF19t91D4QpJHtZf55kSZ"
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
