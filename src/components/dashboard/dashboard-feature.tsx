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
    "3LHtUEpkGfwMSmgYqY5aKch8nfaGMbDgF1DRiqq61Dvodqt4g49TagEAGynzm5muZze4VttXVTs8ugMgXgpH2RTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36wrhkYKt4Ry7RJzBTSgDGL3jq81rk9N1ipq8V1tT9qwkgZBfcjRtHRjZ4cCqs2qCKBfAkEYkzXE6UomviBkjmMF",
  "key1": "34tMtVUJUvN5YYgp252Pp7EAeK9cZq5Kee1Szhy9tYyjt4b2qBqFyPMqTv9AeoTqaoyZDTr5U6ESxKXGeJ7bToi4",
  "key2": "67FjE6qgQSGNo2rgJKwXBixN7LhNQTy27SKNj2x93ExNNVfAnpsZVqmTe81j7hGx6RSmyaZsTE8AtnCLvzeSCHPA",
  "key3": "4sX26tWxctDDhBZzYPXCTpcpHRjfGB2kXEFAco6QhyVCeKpAf8857dP5CZxcckFizXutng4YmucKn2M1Zc3gq9c7",
  "key4": "2J3yjw3c8WbNsaU6KDXa3Dwzh1zBLHv4WyGPDXACvh5CuEok4DK5eb4dT2pvYwSeFJk4AmBnJDFXutuUgsJbZkTU",
  "key5": "3weuXK1wGE5PJ4ue8ppz9ufoQqfH4pHQUhxvoXv6g7BS2GDyhbqZtBDCK7ogtpTLKrbjQ7cvapzm5U5ZJWCkZsZN",
  "key6": "3SxMTcgBCTberRH8M2ey2tCA3v9WsAdiziZnJPPSdiEJPEeW9hd9QaFWx7G9ATtn5ggmm7EGUpv7oHjJ3UoLtdK3",
  "key7": "59FW3ZHVqngVytRTtXfc58a3zNpRnrqYqQPoN637kigBs3axjYmCxuuTXvDR159Vbcu6Cuj6pzpsB2rExwvQrB6E",
  "key8": "SyWcrvSCJFddGKV7gCc94ZJPNR9ENo2iZG56Gvk4ipX7GvPc3eLUERY8hdsXrwoWYyAe5RofpB8VSMX5WTK6f3s",
  "key9": "4h679fiAkbFwF5QQmPhs8qgQ3cHxVd1KyqBjf7dTved8MJSgDjLFz6hUkkM8QMJkyuBFRm9nq4rB68mQyWccX7Z",
  "key10": "5sRtrn3QFYbSc7LiCpg9d1AZkersSJ3i6UARrNix37uwFSg8LaDAsxkiSXH1MEzmjdcewKhb7oGDBKv5Mo2VS1Si",
  "key11": "FHXwQg3epNnoJUmFj3AtfxSwpMPErQhoBAbmNy9bTe7nQefgH6LZ9q1yiBvxtvCDEriq92vaLQChxk1GpFDae7c",
  "key12": "22E5ULaoqcfh1dMw6xRA6T8Bq7f75KeACYMKVPW7Ro2HT26PdXXHz7cvbaABX8rB5SmRV6JVHMA7sob3drQNTPNt",
  "key13": "3gHvhxjCbpEENzc5J2ncbRUU8AUDKJhwMVrPTTJr1bqb3hpVqyPBumFC2ZFPvVyhFLTfVH8LG4BdpBTU7eX96rCW",
  "key14": "2Zksn3Pr9pQXGGF7SaKryrwNGhsKhPd9z1dpJqjAqfXss7u9ho4HC4fnxiNzDrKHH82Vji6MvbogAMyiUtZy96U4",
  "key15": "3kNE32s2urQ6VrJS9kMoFRPFYBxh9UEPy8jfFBXkhb17AJSKCAZsNuZfGD8T27YMzESAWhxdQZhGriG5iVekxDbS",
  "key16": "P1WWKb2q5YiR2vRTM6MHJZdLdPYDvBJQoVuh45dpEA3XUm8B8j9iijS3z1LHZySvairG2BEPYxa5JRJkZTjKoCt",
  "key17": "4H3n6GiYSQ8xR6C1g1EcQPygdowRWvnHcchrerTyNxXPs6tQyGSHNKXy8nxjgR19TJwbL9gNbQ9Qw7hr7APMEJSV",
  "key18": "3xGzgqxhGFGNTUPiFUW48HrfsHH5pKWtjizRSMvj6o58q7tyw3wNV9pDrapRTcyoK75ihyFSfDs7KyEeD4z6Kt4T",
  "key19": "F83q8FYts7CgifLY4HqnQayEn4NwEgmHMQ44VPbkCU9nuRmtEtXt3EYfnLimwM4n9D6tgbKSRk8j9wKViczkGq7",
  "key20": "5KEVCziTGpjf4XD9YC8jvWCG6i2UZRinpmX61bYFjYq4wqMZziP4ktSHzBbBog4BsgeAWayvXigC9H7mabreyWT9",
  "key21": "5EwtjfPb6AH1hLox5q7szETgJzZNfLAiFKJ7o536ygA1QCrA23cRMS9CJGMsj7MTzrfoc1fYnxXBBXagLqiTecBu",
  "key22": "EZfzRdTEQLXgiZPtbFf5bBm82UZ7p8fH1W6sJcgZBvTEdXZQSFuBE3uJtLnfnRnVTBZASR2VitsEyNS4oALYoTk",
  "key23": "32bAzaf9W8XHuHd5fvDkZ8Xk38iCHfMTYSjXiibZ5WeW6Xf7JUNbC6cZkNMHZ48sNWj3VjLyB556X28iChSdtEfE",
  "key24": "QSnw3GdYn5quDKpgoSQ5odhCWvKkgzFHDsD7nYHAvda9ApRuPb6NnM8x7ADtJCnxcyqRSR8HYL78gBiwe3iezGE",
  "key25": "2wNvSdaBvskXBpcDuhdmp9PrL3sUKrb6z6A9kn1nVYJJxrhLtLXTFusNwrwD3rZkeo1Vk5VDQAFQ3y5YDCaanQ2m",
  "key26": "4i3bqf1odKmvK5BGD8FaoqhFZHaeErAgz5ZXvPVuKG2HF8M9s5uen4k2UtrURe9ETNzxpu8eKs2jCYVayrPUWGtP",
  "key27": "25uDU2NH5wE8RokNFvdoFV6FgR9QZxP9wZQEgLRUEojabr32F6NMv7yZwwjpri6vpe2y8F8mRBUSgJXrTRQabyfc",
  "key28": "4GBao8FuEEsHnAcEnzxPgMvBTxyaymz9or5qrJTLYugEBhW1wvxeooHREDBUtRDAMKyfedD13XSkpjQBhtfVbE6C",
  "key29": "2k1z8r7vKL523cxMNLbwRT5dvbLMaYzioBmbdEaGac593PNupZegwDnCa3EoLtwmEjLMkBQx1SvCAvS3qMNBoFXJ",
  "key30": "mGNDXYsgu4nAdgPLfqXQfmddnB2uLDwAtmB61Li1GQJJmKtiZajqrDhWnLqQaeseSkSmvas53XkqRZL678aVMzv",
  "key31": "gwftHaMxLmMWympC2ewxU5n6KakvgrZMnAFJEtLesCkAR7BLeVfrzFGGwdMQqYL15utDemTEjd6vwSzgQG8ZiKg",
  "key32": "4tZbmKVDJ6eJ1wVE5FrZAT9UNJhMtTLcAU1KuMTTnFVEKhE84S5cJnwXeMARiSZEdZCMeAW8ziZKCqJogPfcxVQk",
  "key33": "28n27bRpUuxELjChsKK5BqeAibUj62ATgf86TBRs6WzLGKBxwo3CNunN4ycaL8SH7U49fdypu4quXEYbpP5cmSyT",
  "key34": "39RtYTGp6r35r6QuEwvSNrBHsTGTTwrENLuXCS75FXrsJe6hKitw8r1BGgANaZbTYbzEPz4P6qKC8CJ43WJn54Vh",
  "key35": "3sbrPeHQdLqXURh1rcn6QsVa6X2hKBMH4otGuNw7vudHpp5i1Tc84YFNTKRBjRSZqYATMWB2Xnsv3DxdP7Qg9RDH",
  "key36": "4r4M9YrA6vJprzD2gszHwpDc7VgWZiUAeyBaRRazXECC1M2fFQ2aKQSexw7J2PihCY1h4R8ouAwFU7AoAiWxnh6h",
  "key37": "4LVodPNhX8zPPPxJgTHxpuy9WEaAjm47tpuS58ebuRtkLLGh2ahEVg48xRKfE3NAadS7hGhxtVmMWvFcG7aPmVoG",
  "key38": "2pkbtNWM1CFk5KSKGcWGrGiZSN4PekEB3sgPEJR56SVLcUiJcpbPWog3xy93vGQhKtyfHWy5QtnoFxf9MPJfgYXA",
  "key39": "3gpVrV23GhKMGJUVrerU2ha1hKVpuWtQFgwdtss87ikPdTxppAmhZ6hB2dqVPXXkWeDeJTZZaKAGva2SuYSn3SAF",
  "key40": "NQcB7L5W4ZJi9NJnCpvGQENJUMdsmXo7HvK8AzRsRJyKKTL6nEDQn5ZJyNcz7VjBbG9pnjLGrqxXfFEiMyKDXbV",
  "key41": "4sAqtNcVQ6ihR5zovAgWHTT9v91Spg9EQtJSTpkF4Xt3mGb9sV4Zr2PKSuozjd1YyeWi8fu7ZN4tkq34sMiriBzo",
  "key42": "jQC77MimsxxjseAfeD1aZKmFjJ3dY2tK2gDg5mNDpLLAtTpehpA87vU5yUxFArXjRUez8YBejiHtrv3MyDvZkui",
  "key43": "5s6HHQcesW2ZzkE9kTBmdw39qbhHUKtexUDf1CEMPgdo53SSemU3KnuRAbh5mEYVFuUuG3qPBMaNh3CU2Gt8Dn9N",
  "key44": "5u6Wc6wLRJnyCxDedbMVJSRdJJQr7Tay4ecyMCwywMjTY12KzkzMpquUN7adGWqqQUxcsS7YXEADgGwGHrCJA2yH",
  "key45": "5z7dLfGXuH9B5EHFkMMvY1Sc2S7nE115Rfwc4XEgRfzUqjDg1Jpoxo2Gappxx45x8MxUSGzLMusD9bD8p7MDkoQY",
  "key46": "5i52CX3mbfH3Cx3cfyi32Q1hUzcXuRK3k2MS2adEt6vpq4qAHfDUxbunoCG8PP4aGyTaQjjbnjGx3uc8WTeWaGA8",
  "key47": "3rLoPBFcGpHhWhDcxJRqrwyCmRWe4Rca8WYLoGcYqV4ca1xzqFkBkngiLXGKTp121nnVgeFAQUhVpQUCUagkEckT",
  "key48": "5xjZoHi4V9YKEQnTBBjL98N9DaPcG72EiZLKmtbvF3QdrXb7xvPobwg2BYQQC5cytpysuw9GZXSEUK7WhF6GPXy2",
  "key49": "2Vr7TWPht7aB7vM2x1mRHWoTsAKaMpPtzxj44vS1MYWPfifxY8CwtRV2roRaP5qkGkCkrtba1XZmQCMuXyNudkkw"
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
