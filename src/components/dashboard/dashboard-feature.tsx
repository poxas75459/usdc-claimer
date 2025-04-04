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
    "5ZZLvWy7j63MHgzzLTa7teMLgFUEgs33V4H7fGEqKiGs9XcePjanMAFTpcuymVHJRKHFgtAqWHYg9ZWJ1P3FNcv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e2g1vw7UYCwVCAjqHrF1PgWaspacaMqY59qYU663dWLi1gGFh4XvuxygMia9yoWCQgSzjuGLUpNpFHviPvLFQKs",
  "key1": "2wLq4ghQ3F6mBdLrYxEegGA4udqVad19BgQWBb3Tqo5v2oMw5c1fH3TNiGzufESHWUn33kfKThskbfu5oLcqyJNw",
  "key2": "bvYp9ZSBcnWYq4qVC7PgcrTkDMMBue4YBzfpPGjChqjQQ4NhUjohuadk1w8iXUJfzuuLH2LT8Txv4f8DXJSX84d",
  "key3": "5gf9rQVrPKRPas3WLWh2NMc3TaosWasUdBE8Qbba49onWB5Xo3Sn8oSzHMs3yD51znLWZohyBjffwzk7SyDtafcv",
  "key4": "4q3KHY5wTUwf3hMRGTfM9rYardLQUJq1FLS5cBW5c5ZthqjNzTfkgvTKxtQLAPTHFwjueDcn94Z95hPhdv6cMZmc",
  "key5": "3PPK3dHPttqxYckx9J4ZtAZg3zcgiiAZwkGyBjvq8DLzYdmMSWBwP8L9bpexFpxVe2Kj1xEsfxdMAcFznyE3nq1K",
  "key6": "3RQ9YqdkU3Y8MtnW3grmMGaChUtFZVX7MjWuoCjjGQQyfebjMBdzk3dS7j2PNGWnLBinSZZQYo4RfP8RHuAwE8eH",
  "key7": "2xAzM6t3dKS8HmdYKMC5fCXT1Q91th2GJ5PKWaeowt4Rs1bWBRNnSFjrhKPW6FWm3Dvn6jk2s5vRK7j8wMgX8ReF",
  "key8": "2TK4hiAjuqs6KwFFakcLhGTY2oxnvuuG9EiFebhQjyPZLRvmHGdNSRp4eh8K7rXmrPk4UPbgbArEh87opj3An5ef",
  "key9": "3CRdst3veMA4bJS6q11PYCAmxuZw8WoDp8LZLZUutKWPpn1huSH5nPBasxGUf2h38AvyfaBeCN72URdBTii7cd2M",
  "key10": "64yzVotSryYwGD3KrTXWE4fPxkBWa4Akito5mBUN9p9JugKTAs1u71CxKeterCx3zUUc2ybV61Gb1G22uTHitSRa",
  "key11": "4T6NDKX37vvwpBfWpZcPkU1WYHLjMDQ81nLgdxMjY1yCPFFQsqGW2o3jRwSvLcEFSwoDPEphvWUmQUk7LfJ5cqPY",
  "key12": "5am7mnjZQmV8HDYZxSxubj1gjfnXtBAZy86vveXVXk63d9BAw5kRZq6mJWb9EPXptm1ph9sdeJyySJcCTggN6aco",
  "key13": "3fbQPUYBXddDapGJhtpK9WWNvos2KDdv54zrnti93sxSeBLMKPJNK4dk7kbUcfGhoP4AbbCHbZppGBJzF62ZuRwo",
  "key14": "3MX5UhSSmd8e73F3L6vvZT5UZcfRU2Pe1eB3JRCWaKnzt9UZ52zMriuRTyoS6eZaEUPJ6z2RftyuAFs3eJxpmJHo",
  "key15": "5iNXiSNF5d2awtNgJGxvmrAdixrkDAKJyySxrgh68A2N5U5HsJewCD5QSv2vPqaFTePqFhEdTch3Qy4VNGLxbDNe",
  "key16": "3WNvinWTszUQ8KkMEvTq3gdEsd1mmwa4Wke3ZwSovQuSpBA2xmmGsWkkqcwiCwprWcuWv43Qf7ATvgXJdDhD3SXN",
  "key17": "3QL7HB57fC5mCo3hUZUoyLe9vaHBqJX6TR2vkhaCzEY51FMmxCJjQZ7WS4EPdwEn95LvuRPMNMJNdFjNrHmqQe9Y",
  "key18": "5u2BWquxvEpTEUTu42C5hS16twKz6o9wkTiqEV2aMxZbtnnJMCnjGTjZkcSLS5ZEsJEr46uNWx1x2XnhomSsVMxM",
  "key19": "3AqHsCVU4vgrUHV8ggKgRX5zNwYjpnpPWThNiKTEdGYdssMKJgfZqrnLZSqv7Zanx35RtcQkJcN44cvtcbR8ZiCM",
  "key20": "Kyx46qfAyGrBC9tYi4JYd74z1r4nnHjtALSUiurG7ZyW5ce59WdW1A65dSB3s6PBFBmP11uiF9ScxusqR1WBMQY",
  "key21": "SuWMXCYPaBQ2ZkQ4C9SWt5CMXdpsQ461xiJ5SWSwitP5u9DqFEmaFZ4BQ5NhSM1AsVXmmKcFNzxQBjqg5HoMnkR",
  "key22": "5GP7UjCcSSry2gqS1Tx4F3M6txBisqdQrHbJqpBRbtZxJ4nbPgGbfDcPNK34sgHzCm7URV8A5nzWkYwvP24n7Nn5",
  "key23": "5fYqEcVX1HZ9h3AWyikFaQkZNuxCBp2kU8PAzk9BefuAf34kjQVrykqq78QVUNcoYgwTCFBWriJWzXMFrdZPPU8G",
  "key24": "4uWwEh6By4bgAwnUn3yUN4aXws9NPn4f2mrrsrqVN8zCdW7LHrVt6LYqQmQpDAK5LczxkmGSkSPevn65YeSWbGvN",
  "key25": "5txXfkSBV18MT73Hu2SYwf3oKF95oW5STx2iGyeHqLBwWyUsAR3MkXUJgNPUcmndPzEgrWrNuSHvB8dXPgjdVt5v",
  "key26": "LN1bH4tWjwRFmVJYykgGXzdX3HHp1xFzb2HTq13EbczKiTbVRmX82qxGeuPe7i32dyo7EHDzkjeoFgWMM9iAemn",
  "key27": "2qgZz8ofQN7pSqrUcs5SgUSr26CB3TSf3C3bo4eseByGbQytFV3BC2zLdiY3ekBmxuRRfsdfK5B7CVWr922pXPAm",
  "key28": "3iyj7F9x1pUfN1LrN6an4TpQmmQRjMsmFE6Lt3ieVjjnDD54S8XDF2qfMy1FqkcVJ2pvQYoyU9LsQrVPscThYCNG",
  "key29": "2BjXJdu9gdBLPVjfdgQKy72xzrsPJy5v5ksxKsRYe3xz1eKcJrWe81KAXddQyyWQnchDuJ18qqMLqwXstrjQxUt2",
  "key30": "atfs2a2JMbX7ZnoEARD6nr2h1wQSioi7eJkuZX9mc1bd1w8BdQv1EpscPRXmU5UWHyaCyaYm8cj8ohs6f7hm1kh",
  "key31": "Ro4tZRZHRwKisPH7r58wwBy1PRCEaa8guVnZfHY8nWSHr7HyTKEr4b4ZQvaivsBCeKDgSUui7CUfa2HmxSiAZQm",
  "key32": "2j3KveLDUejmfRsCm2qKBApHhtADuXNPY1UQdn9Lga3z7uRJ4cZrsNiUfdUMJ9S74wu1qjEKRjhWh1ApTYjKXnMs",
  "key33": "4ihfaWFBG75fQzxER3rdvwp7YfMHFP4acLrwk1GFD2oetUKvPNKcUAeDQEih7KWej7QbHTo88kgtzSoLjPBkbweu",
  "key34": "292e2KXuxTrAy5MV49F5XhgKavYs9mQ4KLQovqFG6cUnQhq4nrSQBNvFoicnSZ5PxMLvLNM1LScfp8QwqYR59x86",
  "key35": "2BkTAfqqFtQCLS13XEWjqwkQuR926Jyew6FDFbvULjLNZDRN8fXBKQddKjN1CqVSTPrrLiztwfyJjXsr4Pi1AC1b",
  "key36": "3bBLoGzsQCL1pvjAmbkLZHj1U1z5g8qbUnQN7FpfLYCiyAT5EPJkEW9YuFthDUyNDpsSzCan1xDh4KzMijDTgUBt",
  "key37": "2vU1Te52QC8517g2L9z852bZEPAq7RWPD9N9sNu96wYwp2SjkvhfdexZHhDPmAk4cyGSKj4VnpQ74fPgHHKbwm5C",
  "key38": "5F1hz5xncmJ5uBFj22Ras9qT1NjsyqSQfCPdv9kGL9ZibgMzNn6hGTkWssuSo2fU1uMG1bEuzWpHTcbx2pMgnf8x",
  "key39": "ExJdvhfDGSwfd2Hfh3UmF7vPYcNpAqXEWZUo4AQYR3b7SM5vCK8kt1ipiGRCimVsQUnFPAHr5XKipEVdGLDNx6e",
  "key40": "4ZyYWbmdM7SGUyEDCdntL6sgqHTjrr788wggeZYTYzbCCb2yriLJUjvgoBB6jt7dPPprJmCGsW3qqn5431RHXYgt",
  "key41": "2WtuqfKxDboJGKHJrfP4L5ZqqQF5jws2Fx5Y3zLsJJRAP1Gb8VYPgUnZfLxPcKscT8SihDQNa3FDBHmKZNyabJL2",
  "key42": "3eKHbqKp1fLwExo6XbFcLSPoNKs9YtEBbmGR7EqggLNcjiuabFo2Zguk1AUutMgB3UgvegJV2DwCznRZPeVakugT",
  "key43": "LVsWEH1r3jbkUQwW92fJpUoAJfyJS8kWo5AKFhtXb6AvRfyRUa7PXsaqHSeqt9G9CBgYKknN238PQmfWsmVjUui",
  "key44": "2tTD95zexWSjhqUmzG7VhFzNYXjqohPefcvYDkwkdtCkUx5dviYpKALZAuBWPHwy595edW4JMC9u9JFe3FjFgrw2",
  "key45": "4MPLTukZ3qyXFwKthESPhAUqzscNsx8WMRxEcN5xmiyH7o4fNpc5mAXH2C2PqnkgNyAd5Z8iVhvuajndqrXHzbD7",
  "key46": "4yJGM9wRNooXpfqdMEKnatVZrVMEeJB7LHwuJgQSxb11psuAbrzA539mtNEyu2djBW8QtpjV6oJrFpaA6LyVHEW",
  "key47": "qPMPZCafr3gsWATCyLJuVJbtS1fQN1RkwxjWJvw1zSLwFPXFfvLKhtJY3E9YQXD8wWUNLXk1EWu8zupSpQFVsaE",
  "key48": "2VxkbtrTN5ftFwZQUj9dakV8j75NqPNhQZQnuV7pdQB1zivryVdyQv2uwSMUKg1kveux4S4fzKjZHJJneWTFRNGQ"
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
