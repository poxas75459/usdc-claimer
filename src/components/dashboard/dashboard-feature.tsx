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
    "4iV6vHGcqgpaaXctPZjdoRYXD9vMBFj7qW5oujsMzmnaKh3PintNKN7RkroJWMs9r737U6cbcL83J9LekQsHdaa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53dGhVfsgi6dpQtR3R2YpwLN3Q4Rm6BQSZ4zmGUXEBrEEKS9u4ca1GVzKNYEPybG5GUp5cjtfp9JqFgCUBRwo2Cq",
  "key1": "4aZVbHRum5aMgi2jC6dMArRyoeXaG2GL63g8wzAZ4Xy9bwbSJCzYnMyENx7euPVbLKAGhLsdmzsLoTyFhTJ8BEYR",
  "key2": "64ym6uCFGejWuRsr3VEAtK2bKTsMSDY2zZDTQ9T6YLMaDNz4nAzxPu3cz15XTMuiABCUKRVR44UvTRBKR5hYCeFU",
  "key3": "EMgewsV7F2b8qXYiD7a4aqbreqJUPsZNA6bYkUTCBoy7UHubHvaG8geSkmee98wgkc4MoK3mNDEEVJQ2StusXcb",
  "key4": "9dX73Q5tyLj2dNAGbdgFNBErvux4snd4hsHcQ8nAGr3Acf1dpHaGfkJ3ncghgYJczce6wDM9B5CuuSqNm7oCJoq",
  "key5": "3Z2JwuAviwaGpodZtSsR9V2LGujW4fiBGtvvL6yNK1WGWz4tvNBSTyBgm8tEJDWwKYTCTKGdrphsFV2HaEUgczBM",
  "key6": "4GoBwTodhf5Br1vNpYanNYiosniJqW4SX91cp4qCTyCmdgciyARWHHCiHtAJoKiYVaUr6Tx3puMA7VZRvsT8uc4g",
  "key7": "htY2HctKqaPTcQ6FdLu1rcQwegpEVY3NiPza2xdSwoa9NJnELQeDCZMLvntHxysYjCpDJBJscTAV8UZRNmN1bHM",
  "key8": "3Ygozww5GLdLydbp3gqePZ6NEtf5fbp2ZHP8NtyWRC8hPhhRBtVN5ZrtZYNJRfTa2NUnkteGFCEmEpnU1bVkxFr7",
  "key9": "maBb2y9poQRxBMhoNXcVphgeRWHDhyjJQ2nkUWwX7zeye9AxMY3UUsCj9RnAjThawhKhjRaoCUVs5K4wEPWKxaC",
  "key10": "JpNm9oNHdTP5cMcTDMUh6uUi2UM1coMcSbVvasM1ZowcQJAP6wmUkWUhKxXuCYbtEHxjfE7Xr4ydnVRkPEXRnxw",
  "key11": "CJ4YCvTHYe1FsdiKUcmMUv2FjYaH3KAFVcGJVfTfE1j2vcKEzkgDcwTqgfvYVba4v6owkeSHkxgGb2YKWgXV5Cs",
  "key12": "5Ddp59USRNKG35yg8Uom9urHB64ZrAHGSSQfeG7Vs4endtxvJFmFhKQRcpCcWT5L8ErsdqFVpRtvncMqJG3938R2",
  "key13": "2G7RfisWDX6LPXro9jscKDtcsWxbmoRCML3kGioqBjiKbtyUViEFSX98G1fNyVmofv3mdAGSZVV8Gy7H8xkic35Q",
  "key14": "65gGpb34Sjw4AGAicMzDFNLGd4Gmb9dkHwzSWBxJWLQL1sCdYP9CgjvwY7XmtMm5fynWV3LkhaLsW2dByNPn5Rgp",
  "key15": "3zX9XpE48YyfpCDXhWa79LNjiuGQni7twxLQsgsDdpVMxKQQCdKjXJ8SWJGNZpjqK4qJ2TnPaRamHaVR8RZFC6eE",
  "key16": "3k3ArdCvyHPcEbyfxjoTQZK27hWPMhukSNDCSPVhPKbhVpowQYA7JobRy8dJnQrNcnmAsnAwUDAYRhaoQmuWJUHG",
  "key17": "5SyDQiFDQQph4Mf6AMeE9hExVTqibiomcBeu8pWXMD1mvXNB18VNioUKDVAaQPqTv7o18pby41K5dHZAGD7HCzLu",
  "key18": "N2r9jLpyfcUm9Sd87qvB2A9NwESaDzaboFFdUKDdHvGk3GBSgumDQpSwdrBZSdMVtcpKEkteXAZ3Uo69g7MpTBs",
  "key19": "rP69VJRued7Ve3bUimmRYQaccU3aopuhDFwmSVmK1RVsGH8LgKymMREvt6dW3zojtMwVyGpMoRpUj9XoTCPVwT9",
  "key20": "64D3qJ9tzdC3Ngws6LYhDSziZXhiWds7F4Aut92vykanVw9UzJ8WJetGQ8hUFgbpktqYfNjUaXEziJPU9HFSwEcj",
  "key21": "kEq8VMfJuBZ3sb742QdLkxZKsn2xTST9uiuyJzVxJevyeRmaHV6eAKLSfFJxWyryvoffwXtrA5gMYUj4aECLmcK",
  "key22": "XDuGDckr4nn21XkyebLkZR2EkMvrFhTPk7yghX6ruwb4jvxEdLbq5w7VebQ94hoBfkrTnF4Ur5KJoKnKw1MFH9w",
  "key23": "GpaEu6hFjnnZjHM568bHuyPBuf8TGhjbkoEs6xvaNcv9ETeoguDnBS4Mymmcd9qDiBCupdFa74WQVPTSbKSJ1US",
  "key24": "5RGwLEdvxoaaatRn2frsmNTWo8DnKQx3hgT1WCAydkyW8oPLjn7WkNgm3GnoKY37G5sXfSFhxriWNDSFA66tVUbu",
  "key25": "31p96pCxsF21U9WSiHz6S7q3UQuzoMBf4sxLHMt8Qou8UFrZQ3imDK3tVpd2J57jDPVrVKErwnMYajy4ygwuMSHT",
  "key26": "3zEf7ukyAUFGje5imjJTb5FRMTeicxGZDxnNyjuim2CAfpwzV5tnbrQG41CvfUpSsp1Rb6R5GoCoWAZWBtZx4rBA",
  "key27": "3HFyjtm8XAov5AD9yBnJB8Sd5HgVgvC84eThUu1ZTCkFJyRWB68GBUt3FUL9AXMa6DBpsqNPMN4CK3NfVeWzuVVJ",
  "key28": "2TEzkt3xt4gZ4G1XXHnnGyE66YDYDXBLfZyRpMavkcy7Me41KiNkqUWwMYDFui9YVPzKLoawuxebAWy2Eo34jNFu",
  "key29": "N4t6QamisdZykYZN4XQYpKWQnvqgZiw1DC6TmNrqP8478P53epPBZcMk8ojqYY8zHwfipQygkYA8YH4ms6Y5cqN",
  "key30": "3kDX4DPD5YkG78HtwtruNL8Dwv2GXYFmQbXid1Kse8ND61BTTHuvgms6Sj7RaZvRYWhisMP55oHpDTgSaR1tWZuH",
  "key31": "2eTtw6zmvtSoCJ8nWj7MCcfwMLoQjPKVagB48PJMMAugd79GVWVUNao2cUkyKuHHL5AifvZ5L6oi3VMxW3b2GS3e",
  "key32": "WiR7yZtNQjXmGzQpFB6ZqMQiWsPSkQFWfenP85xVsrwgbncHtdwXQ3gfzTMLcafXUbm66YZbE5SkgpArx9y7K29",
  "key33": "3DXytz9aoWD3Bm5exPtkkEmqjo2msdYV8T3VXm7eC5aVoaWQ9TjFbhfmCx6q9aw7SHubx52STzwP5agaSo8wJ2XD",
  "key34": "36cMxkzyHkWjJKABnQJfusi6FKC12jcHizB5bXtkHFBxKnF9dq3QmMtC9ZfTZ3DjpqjjQnjKLKdRheNxKntxCc5u",
  "key35": "4apQWgRg61BgPZkchfA5XPXChfnh1jBm5qoXxyYT6gmsqfT4rpNEZsQV4D541cFfhCYwvMnpHjMcPcf2VYjSqQKA",
  "key36": "35dYLxaby9RVWXavYZGkefx5fKLxGErqmvwcMhUW1xutJ3XYs4g8iHFg81MtY3PBwKdF9hSPb1RGMNWpToDcQe1K",
  "key37": "3jjU8FEdKgAdvwTT6rQdZzFAaGarhvgkNNnamBYkQdnyDY951zKhv7tSuttBmkqwMrWbcQqGS9VvASEXe6mNEhV",
  "key38": "26ri1SdiZ7PqdweZ54sNMviM2YCzzbWW61Mx59F2VE5xZDHtrE62fMoFXuAEqvzqsmvDdJMxZE63bZkiHEoB983y",
  "key39": "5B95QP1HfHtuAkKf4h2pXHRFf8nV7k85RPFCRk4PnBy88hoLL7PaJsPrRDogdhDv9gRZzPGaRaEz3oQvPHjppb9k",
  "key40": "5b3fetqjp71Redq6cq8CQnf7xD7Pf9bVEkLDdLkhqK5xGPLiqq7ruNxYdryZ216d7GwJ5PihefuBuSYY5CAAEGTA",
  "key41": "5SVP4WoY5UGd2Ks8L9pAefhGGsL6DxyZjiiC27hnrX7S4a15QgP5RqyYGRTZyDR5Yt9JcjvihUUEP9yfkyFHrGTW",
  "key42": "2c7kgD47A2fcMsKjCCfR3sxp1cvRaLDY4t9KMa4z6FBF2WWKu9fg9Ho5hPPtYmZvTEmrfJVU8CyDn3Wf41xKixNj",
  "key43": "2Hd5VWD75mKofzPHc44SkKz9sGbmsD2qKCqTFyA1AdXG6cSECfckkUWHkgg78bHnNeMsGeyC1GDoVrHvxQVu84Yy",
  "key44": "569wJrS4jMuLMR4UMU4q8UcfRiARqc1GZQAU6X8Frt8o2KjAxu7FcuJv8TCunLSBtoxgtAE6kmC9JDJDBZUA7Ld5",
  "key45": "Sin6JswybXZLzqhMkU6qs2aBT1LkRK8uFdu25zdDFUn6ErrRwYGgUNioaRtNxaEdgx7XFhpiG6gJEjc29AvHXEH"
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
