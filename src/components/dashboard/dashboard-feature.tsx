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
    "478ZeWNrYqfHMAUJbVsANBidSM9BnAHTmMSR2DySfiok6EJCLRpBUhJf4AuQXKg3TzDz8HkgXFJaNF41bLgLiiBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r5ncMErjrhfn6wgoK4Up2SpziPHFZ7WQQ8Vs7CFBMdjCfZNrZ5cbJtQDyQAfggwjoZe2DVpztSKAxqF6rP9JaY4",
  "key1": "3RBPuR6zSKwR6XAk7FMmvVeqqbzwgXiLC9N8iwQhNN12njTvWaFD7GHbx5XJVNj5VXyBVLdUfTsqsxHB36bN4Ntu",
  "key2": "WFsGFXeTMZPGh6hjeCkqbn2s5ySMLWc8ECZyaVGNVRbryPerCdK2EkyDZbixQ497HrURuhvVzW3Pg5yr6DeNxWM",
  "key3": "jAqGBbrFkMD2M7gnPshbR21Zp5MLE76sGzGX7XxaH9hZjA6d5jfgknDahTP6Der8vcxn33U66kDS2Xwr8XYSFgU",
  "key4": "3DVnyX6nA9m7o9w9YkWwfUGhSxjzDuYQUojt7ebPVox5apdNYKKHs8RhsDTJ3BRe9BUsnx9rHvjWvg1v1csL1RL3",
  "key5": "3wDLm9qwe3EFd7izqo3uHmMcJuY6Z3wuLS4oZRUSxB97rFuezkpdn61VXKxFHn69aCYfaQRKaz36gyuWdvkygvr3",
  "key6": "3aQJs6tVYLDWe5Ejcxj2FmCWGLPP3b53UQo7weimvetBe9y42vVxuHrYEScrgK3ujqzDyeUyWBTvWyMayP1Memj6",
  "key7": "22WKHvdVYarKu4GoTNAioM6X2KWVuzSUUizzxYRPe1uJxQzqkNahTvb8jdBB37pXxEfVu9d48zyqBSxoF9V2mrj8",
  "key8": "5ScnGJ4eHy68vtG7EGSoa9aQtAAEigEgxX65hWhmTZbsUQFvbAz8ChDDACoHip9bgtwksoLZn3YjYTk4xMRL1zyq",
  "key9": "62rcSLWYGgxHQBpwr788a3wsqjbUfbABEbAwReDjQuxxu8Ho5548MiZv2XNYB1uuXgiuxyTQoDEbCgJoUE2bnmcb",
  "key10": "51vJ7KQxv1gdT41nEehf6JBjYa6AUYxDM4euogL3SfXteoWUr7QL23GAZMwUCfD1QNZ6fXtnY7kTBnS4U1YSZoKM",
  "key11": "3nEK23hDqckfvGPAvPGhzdSbU7aBL3uF7DzHKa6oFXkMsPhL2qJ3zbvRFbGp8RvPFBdvVC98hdHHb4ZhiUfkGgxi",
  "key12": "5W3Ai6UcqcpXrUQx9DH7cpd1hghcJmtWkv1UkSbB6JPHfyrtQ7magDdNvhr6t3UazBi3xBvDV2euqsZ2YaZ5kaZ3",
  "key13": "2FUnP7sAw5h8CCNVpQYHJbj5X6SFRHcGTGKkWjhimxJRAL1UUjfKumz23JxCHTUnkCfh3dWC97VH2XaSE7Cxb5FU",
  "key14": "2k8JRwQejMaU6D78dGwxXgT6FsbFidqk7eBakjfmniGjaXDCk1Y2o8yNEBmSyix9S6zh9ALPP3zEoij11WMsGoCd",
  "key15": "5PMpNn6GayST2YyTd3nsJf9qQwv8YWhQ4aAqDyZsWHh3PEEueofAP6Nwb3dZSmhByNhBBqiLHeAYgQmiVUWTfC18",
  "key16": "iyrBrjbTjLNm4BhwG3Emn3oLFDacs11gaqKcZh424Ug4XWzsEw2GndTiRiVx6vZkBH9tmdTH3XYMSf2SJqVKzNm",
  "key17": "2gyVt7k4d3yGKB9JmDKjcyqEZmzNKVbAAJ6wVntaK2avsuCg1Z36pAiwFTgVKUm1NMwXdU1xCRPSBrXuueuu6VnQ",
  "key18": "5CNWHRGaRXVH2nyfF88Mj1pDPv7jiUtUGK8zPgk9ZwZ77QKMmMUjdPaqvHUtQSmAkppTKvDYW5QTCJed6D5sy1qC",
  "key19": "2KFuSC2k8MPobrpTT9yduLeamsB5Msif28G7LXJ5NKE4EcpuYwqrCNk6jWFfHpGZ19Lqaf5FSHfjyCSCsgXNFPip",
  "key20": "4a14qbAdxaVceWF3eTvP4qRdHsnSePLi2TVp9UGezLU6itimJFdcrMY7LzF8ZegHaxabGuQsCPSNsiFhG13nC8nm",
  "key21": "2TKdVuDPPxQWWhDopZ94GrjrnmBd5sN5YsTCDCejhbrVVEHvJmHa6QxMr6Pcz4dke3HC1pjQPzgytTxRwda2EYL1",
  "key22": "4YvzsdobN1GG966bMKK6qUzBiAvKxmsTbA3rrWHid6aSravM8qntpStVkh3ALf69Qm8DcM9y9uoiaNXzybp62fQD",
  "key23": "zfXt4phQQrxt9NDq6fqxe92B7grkzFggNE93EeaSKAw9o6Cr1kdp34HcTsx69f5eMhdN6PJy5BKdaCvUhfyfeK6",
  "key24": "k47ntXyavFzEzRJY5SPz88c5Y1jPQVBvG4PScKejsFGjDQ2NdTi2i3fsEQEJvcRbiM294mugjiiZ9cDiaduqFKx",
  "key25": "485TZPtFEUfSKR9paTLWfynhZrybCUJQRvhDmPzWE3ZhJJW1MoxUogEwGD2ES8zdwV4bbcdV7eJnovLS4zf4gyj1",
  "key26": "4wQNZY1xNZCkZLzz7ApVwKDjzfV4qv62AGsyCZ16mpZXeAmiYh9vY4tDuQup8de2ZmABAyP2cGx9HLehDPCSCJuR",
  "key27": "2aLKW2q2F4C1g65sweonZC38YYMAY9WN6Dqs2zsg3qePQmirYtd6HJoKdVvCnWjQZFaPE7GEy8hjteYqrDpNEqqf",
  "key28": "5YSNNj392F3PTgYzB6yktTGFWMoJvUVZPrvGBwXA6teYHHBkRUc3RTufZqA7k2h1kZrSTf6wucwUqa8Rq8DuX6aL",
  "key29": "9krd7M7ixLX74UAVTiLzytexZMUYPV9mBgkMW6p4vuLu3xcTzivcbMG8Nzv7xkWrtUSxixFZFs2y5Yff5zN4pFc",
  "key30": "2RQKTTUtd5S1BSwzHNVUFpqHFCW5uUsGnNEHqRAJYMae8s9vW7WGq6rF478s9obDVgQU7DpX9w3YT5UmLfgC4rs7",
  "key31": "8qU7YF3QsF9KRmYkdNa3vAkPTWbfJWKbFYH2NYXNBj6XTTWmJ3ZC1DjoT9HWFYNGKojKUE73vsQW24LZpiJA1wQ",
  "key32": "5a66UEcX1YaYdKipHRvhDN3wZMWCYh2dJ19gKcgbu75Ad5PxxzhkpCybX3LP4WcLg18PGWeMV5gCmnTqv5vUjJqn",
  "key33": "H5KYSaJVhynd6cPa6wp3RuL1oioroLqHMQL8R3W5MAr1WHsrDs7GMwNagcNRtXeL7UA6qV5bAiymZTnTVxHZuCE",
  "key34": "eZuTcnkX3J7rRxkwXZnpmWRDKNpLjwDSQGfW8rXze72H8WUwTz5BmfvGWaGqpetviVMMrYiQqcaAv8YATG6tBgn",
  "key35": "33xnQBuwbxknWMagfbgZFmCStZooDUSACufZFdcvoQo61MWjJKz4QMtADThgFzBcdBmDgyby1aKXTeM9a3bi4hBj",
  "key36": "56tNaHXWRmrrcb4zp3pMm6Zq1HDMPruvBviW12u5HjxB73cF1VjEVwZrYLs7eEQiPUXuBxjuEpNNEQWdMGFBh3Lf",
  "key37": "53UjyDAyUqLqWszrYSxMJhWSoUyAUTno85eGaYAHqqD4eVdx1io8tyAvYY7jBPer8ayPPrgGDBpWWxsntv4ehgwj",
  "key38": "2tDmd4RM3GN5q7FUwydVyV1rshQS2Wx4Quwd77Lwbp7VHhzBW2WmVsmLJSAutDandyrKKq6csBj3ipMugqddoHQe",
  "key39": "2RnuwmQx2qc8ULeY6e3pyAebx9rkaQmZafTe9AxSAxQDXhjRHvPTMVFs8688ZJ7TKUCmbF2rEv1gwP8yrnEPUNZ6",
  "key40": "3Ln3URbp9edouCndgS42D6SND6WwyWu4S2a5Ng3FKoCkLok5beynwvdhn9kxfF7qS6TV8WYa1eFU641F95qNHKJv",
  "key41": "3YUaPUBHqCBJYcAjh9wiFg4DNuFRegytLcWfhC5B6B7xgm4VDtTpQM32MdSBjT6Xu9saCoGfbkEpTWbqeNXUbpkb",
  "key42": "5VX9LREEHsV2A4mbn77y5pZAUzDK1qwFNUYcLgGmHFvwyZmVSwkjuJj3pPx6JTmnabSr67rVn6NHmZfofhfLmcdx",
  "key43": "5gNzgiGC5ccwwBgAH6CTsV8rBUDJ6nV6UGnsF3QvZkupUxhsCB4Lt3c1esLtD6moudeo2vqKgMh9qUJV7p4cJnrM",
  "key44": "5VttASMwPBDqdmhQtqZQqTrYumytRAT4drVZ5mhPGadQpmbiaoNpSDfnQFAioJ2NazuWNw95GUkTEfXyx5ctEndU",
  "key45": "289Tbk17ftBfESVeLoufRGqkGnsXV4iXmHigfSjJf4ZJdGXd3nR66y46HLZ3zqXe1xGjJwNC32B1CviTPHvgpMi7",
  "key46": "52FhnHSJXT5CYNwLGWsB8m4snJbQwihPC7JXktxxkbhYmftPv5uQD4qsJrmdSMdeRjDb7FtBJhD1CiNY7f6wGzFs",
  "key47": "NmjJYgznsw2w4ZhHLhSyWEshjPq2vebdCkpPCSDHXksL19vyYNJhRz3Lavqr4RkivV56dff3zbuYxWJowVxGJpW",
  "key48": "57k5uEhx1skYu8PjoTKKbs66BePjRU8JzYG5GJLfzfG7HCNkpQMVGS3RkMc99wVtW9T1muMAEPApCkUQYo9LNPuW"
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
