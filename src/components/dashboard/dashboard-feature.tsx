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
    "5YDBK8MSp6wiB54uJVGqFviUd3zxeLXJoANfZjxMtibDuzMguypMwr6TU6xZUXUgPL4yjTnmFY6XD7uix17iUNDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P8MV1SyKmU9Uc9zt6u1p3t12aDRbLwHvJLifcoVFLe1ho8YxhE65GqGkadhJwuecENn4P4LnxsqnLyqzqkNPZAN",
  "key1": "64XThvrNVo4qh2q2gqTNfuVeaQFyFTB5PzcBUMyzgpa2ECtSst61q2RaAbHfUuN7Rh3NxohAYjiNEDt3cCf2RqSF",
  "key2": "2K9W85TbC9c157QBiBgB8TJrt79HkCmynVwWxYUq3mf5cRym3MhUE3sFu3tkZ1aFvHUzMm6K4ZHPFdEgMpj1MSHn",
  "key3": "fKTBtXq5DD5z9DvyadGvXFbZrBCj55v41Dzni8vxzL9pAsnLmtrGnUysy2YheXVn7PNqQVTFHeTEbVhVdikdJre",
  "key4": "3etuECv85Q32pBPDnTsTdoCsHv1XdVyGLwF1LfLAjHwejSDoRzdLnQ35czYt8e6MsE9FrTXq9ECAxLn1dzCwT42E",
  "key5": "zfpto7eV68Z2Fg3LGiNBzRozYLXVG2aGm2UJPrrMrRDxnPJqft7WUwtkQDBDnMsSY1RwN7T2kj9JNR4Cna6bH2g",
  "key6": "3mqDHtLxpM4uCqH2J8jhye4Dj39H1HsoTRMdPKpnehiT3h4on9g14hK3hdR5QAbUTRGePozq5eyXpsCtF73eHKrd",
  "key7": "2NnP7RfXaXCeWYET54mfozTu4Rknwj3gHAGzgPFGaxmERo8EC9GvEpzNSRcUpV3ZUugVctrHQCZ7FrZ3kzc73gGH",
  "key8": "5apquQBcob2aHQPPqZ6s3kGV9hBsQjeirNNS8sEcgfXDSD2yrMyz7v9KQQ9LKKBJnPUdmHRxwo3mv9H2jt5BHvh8",
  "key9": "5aJWyFn7RHLQC66w8x9gLjufbdWC98iB482gCsz6S4Qc4crQn2eBGL8AHFjamnLcsBta71nAVajWRpm8xgr1MPYL",
  "key10": "HUukRunsB3otgoTuns8isoSaqap5VFqfs7Xz3bwZhiRPdjBeCZAKgHUHgsxERWVB3VUkKpTymny5u191Uhr2yut",
  "key11": "3N4PVPfiMszrcvEjrqAVN4qd23GX48wkZgQrgA1v5KvYSAQJT7FkciQpxuxK4k17PD5pHm4FRDHacfpuHjmVJFKB",
  "key12": "3wdwwdBtrRtyaxtLhZQKbpHNxgA6eSkJUcL1qy2Vi7f6XwpXoMUeDd9wJJMCH9D3vvy8Z2WXnWzZHsKqe2BEWY7q",
  "key13": "4f1L8XXZZCxQHSjb4GD366baUuRSVgRmebMmBLo3ZAVMnodLW6o3PnjGhQAHjKkkJV8pYVFTBEwYkSQHUrZabhMV",
  "key14": "5LYjoWHaBff2qVW7Ca1TbzkLhPaLigUPAzwWH5WYrEyt7TbPW9Xyen6HiNqXi9nT5dqUbVAUUQkV2nVGKFfvsyJf",
  "key15": "1Qk8bhSaPdVz5UEyiXUVLhrDCN6MbXWndXSdwB6TF1i7DnDC7C7n7ktKAURppFsw2YusA9aMeA2jN7gG1CNSc7H",
  "key16": "YrEmazmKrq2e9ur1QQRaWQ2ASY5SzkbbMp8686oZ7Au6DTZdL7fpRFntcqnyeLfLJ5hpMZvfxHi8UoAsrHdH3ph",
  "key17": "32nBoGp1fWU15UjkusFF1YcXQxDNV3z356Z6gE6EW1KTWtu4TvwNToEVq7wRPXeFX8fRT76ZCwmdzi9DHTCBuHHE",
  "key18": "4pGRrexmLz24FiG6SG7qUrZ45KJhF35mN3A12e8vnJMJtpNipTieAqmzc5ymmevuvE2f7Tcpj4eHhh4xNN2Dmz3u",
  "key19": "2WhrCSi2BWX5VZgpJAydcDySWycEL7NXs36PXWbbwa5NksMtbQJoyTTCzXAo4WxgCmqjNkhK6MxHqd1YhBB5o8b1",
  "key20": "Yqa26vvr5EWw679S7ZHLTEX6Wzi93i9XXdtjYfTTwTRPH6G7STG2wTeoh6XptWKAEAP7oPSQo6DErmRxhh26Ktj",
  "key21": "24uUFQSokAJt5ugWNDG96C7Syh92Qe9o7ZMxReTZvbxNVYdgFAgCAPaY4LLwhLmpN4cgmSoeRT2fH7WyDuhHkaSZ",
  "key22": "4AcSG711Dzxd4NMi1KjotCtnws4mziQH1bh9N117YpmhwpuxKoYwW2ZjngyATrmbn9rHGXHVPfPEQ4Z2GNUpuBSR",
  "key23": "5vba413SbvMpx5gf6jX2E9UyFV1HWPxsLnPPwvsz84nmPGK4AuKfprbpAznf7Tei8UrRWuYgxsMZkxTBU4gJq4Vp",
  "key24": "4L9BdBsX6Zv9WwTtUesd7W16NjuCThMgQUxySFfcgyWYJ64rHNFqah2U9S9oahHx6uuYauyEyMsYo989VGosbKuL",
  "key25": "4VV6rtrif8c4ZTaMTmShhkgXCGtpkggy8iLgeqwgC3cD9f14Q6T5Ujnk8QR6X9f3n8vSeW24oxYhAWRswS5iuN3Z",
  "key26": "3X2PXTcZ1QWtcXZvAzaSWbkaDi6FMbUhSiMjGjgp3nKTZaqSH1nN13gSQcEiazumvQyp8DMbEros1erFzsTdEuTK",
  "key27": "5p5EwfSPRqjPpL3hm76ogTKNcLASmeGu6YDHx92MM8ZPofCyM34fAhP9juXLb5i2A1bPxSvCJgwoUvPwDZsYa2Hc",
  "key28": "2uZ995braHFD4Sne6SpCVcCvFr1wEdum8vdvjC8mPgRRj9kSJjGgvMwTVpwu8w6WPqKwu2B23rrsjyf2u6i8zkrc",
  "key29": "4ShAAGsQHE29QpYtxyLewcJGo5y2VcZRRPC9HdA9FuPphbnsz6RSk216VoQfoX7b2ginnTTQFkXEWeXeaLv1K115",
  "key30": "2hZT3uA2Uo9ehL55qZq85QZzWuAYhZFy6tiqxeswMwDxU14vMXpkyEY3uQnC3dvgvReor26e7M8N4g56TAWjouHq",
  "key31": "3Puyktw3svAbxsRYEPWgvbEwERXMzEKuJofnVskK9xWqjvy5vntx79crG5smgPBExcAphjcBC3EJTsYc414JAxQx",
  "key32": "3FqK2CC798WzcDiSnBWh2qyEotwEbcqbMHypDaudUGjo6D1yHLUMT6wb8eeS6AiMHb6jV86kD3owHyKQuxZ4rp17",
  "key33": "3bZLV6gpFqoGy1c53U6mrLtGbuqaBmrktuSu9Ag3oFWR82HB81TdxMpPfYHMA3Wjt9mYa7VE1DhXuNNaYfesZ6Ng",
  "key34": "f3BMo5JRHcWVgD5JhGMmqx5aCuRorzNuL4599S97rTcnsfgNCvEVi3aiV74A1yYcgw6HEy1usXhNkazkJtzTLSb",
  "key35": "4UNLYAkU6bRxJPCeS9UNaE3WcNNwW2xQW8KCfYpCJnfxB8PKeQqMpiXbke3uZdH73mkLnAd23KyXNWi3vnzQtVEq",
  "key36": "59YX36rG5dafaCf8TLysBFrFZYhqdjFiAdfYQW7quxiqVsKBrQFFpcNjWMXBTih954xacqMnNHhycbHSVMq2QCRE",
  "key37": "4o1zZtSNrJZDyr5jyYwvNR6ZZx7JKrmAFRCBzZnmLiVqqGx2x4AeRaTVYPawXCNtuUkPgsgL1w3ZjcQFrVwnTtV9",
  "key38": "5s9V3UK7ZKk1YguUaTZXDNyvqAdTPRiMzWGc79tAGnURK6DM5Y55hZY8meGSeNDSFqZMd9yVNffkEHNhR4ZCXqAy",
  "key39": "5b1UyKABZkeqMo7aTeuCWAjv1T8cQRRH8ow7jxPnPPf9E8Rv7gWmLwDARUCwJAo5SLdoAiRaMiVHbAf4myyFfj5B",
  "key40": "n5mmHm4gMgxDpSDBiyTTmtWLymwpv786nYjj1uVKSux1wnLcHwAUyC3jqx63egxQaoPGR5zABHvUqAVbpxyX7Gj",
  "key41": "3hFY4LtjaR79KcF2GTi7kAjoouLzC2rx5Ymqvc1Xkwr7MstzBSUPcjq4vwwLLDUv7c28nBFfWNkDp1ozhA6VBx9K",
  "key42": "52A6xgpHgGYHp8D7BV8FA2kpXohax76j4ShWs2fAzzMzhthfz1gwSkhcoUn78KSSmfmUQwo9NDjm2vjcD1hFDTVv",
  "key43": "67NJHzSFSqpAghHb6d2S44w2P8D7byHxsVc4j1zkHHey827KkFYQ6AQykXY6AFQbkduB1XQkCo7zfvpp1zCBwG9q",
  "key44": "oedCV6nMaGz9LhUPzYB4z8QcgZxyeu1mTHd3ueaNn3ffiDFUo8yzxvSaeKE4xj5gxWp1Yn3SauQjs5W2ZnreG1v",
  "key45": "Zy5ViENrN9xbYPKktU2SBtG34KKLEd4ypX4Wuj9qYAeU4o5Bzzgq1HXYEZNMv19KsAZQEhQkJi1C3CCXpRjP8RL",
  "key46": "4eq69pZKrcyzWd7vQSp4BrRLnxTe8V7HwJRapSfkHPAc5JQFGGJu7FYDP8CcsGTpJSNa1egz2SMVSCzZrp23V6BL",
  "key47": "GD5q2VQ8xMD2nYV6FZUpyyQy4FctYoLee1DaJvGaFkjdRQEs2hWZAzVfDhvGJa4jyY4HU77d3wpiEKRqutdLApV",
  "key48": "2GnyDifuQL2gGPdPfYTPZwGiSG7Qj8ymzBv5r28hr1AgRy9bykV4fDFSWv3jXE1AMpuE4vGpTtx5cufahJ82hYBt"
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
