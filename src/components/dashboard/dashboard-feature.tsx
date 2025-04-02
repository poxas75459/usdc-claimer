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
    "GHPVU92C7Mwdi6qLWR6wRDeUnE9Tdfyu3GuwMDFE3LJ4ZjEbZyqcf2tTimwJwJ5EBMGSUQKaUMxJevY1ur5nDfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jmuNwwnfWGbLb8C8dU9yvhS1ojre8DVEvcc2HxJRvK3yt5MrUKLcPYsGVbg6LaMBEzy8YePj5SwFBDsV9EXSMJX",
  "key1": "3EL2WrYWSEDDqkfPYnzobnfYevxBMGVXTYdruFDLtLsctar3UEQdJgo7krT8stSBshBuwBkatFAuf1jW5dNKixpf",
  "key2": "4jBQ3KQGpzjccP4YyyUUp9M6gM59Psa451x2Xh4JvMczA9W5JojdqgkXewHUFBTBhg7EWdsjZ7pBERit15E8zEH2",
  "key3": "2p4yzXc2NcqQcgWcuxFBNNe4haNV4bWwiVsdnbo2AHTZgE4XJRZRfZ9qsz6vkiUycgMmbwSCrH96okJKXcWwmPXU",
  "key4": "RjzJF55PxmqggbQK91VP2PJjbUUqHPSXFa9nbkuV6WeXD3nyPyBsV9WCCqmND9AAgM8DnLDcsc7X9DKUsLkkJfw",
  "key5": "sk3S5gHHNpDhe7W9nTCDiJkuQc29SzuWCwgY7XztTTmXzzoK6xdbzrouhUFUSKgYHXZDQ45SWaxYNshrPbuybeg",
  "key6": "2DPbVdK25PX3sxQKhRxxBPTWfPZmNM42dXpJvTRgg3mNYn2ndAMuE9RiXcYsmhjM6QGYru3A972L45DoWM9Y5N6M",
  "key7": "4jqYwNJNHRG9tNX6Z3n1vcDoKK8aq3KEoHhjwtpGtxFL6QzEug6KvpycQd3VmWDtSp18xjS8ZKbDiX4ZBMRYw8AY",
  "key8": "4iy33A5M5dbTG4T4MoPeHpnYB3NFNL3oSgs8du9opU7ZGe7hDQVAQoN4y7bdtDSH7JCCpSdc58Xbn5XFPYN8pomn",
  "key9": "3meR21Jt1MZQqFtBkSRUD4uXuE7rhgyhmJYsKWfoHsikdP3raojRJzTjNzaX4yAL61HqHb3GDhZ87zhwgh3HbRnV",
  "key10": "HV4SJdegygFY9NjSjVqfP6VJwypxYPcJyFfJUNVScfaRvNQ9HnjsN2Md91iCRCqrYQnTNieTExi1CWJPRTLLVCY",
  "key11": "5nzBVFFAqAXrhnLBQ9bdLGgQDWbTto82FMDbMkGKhCF6nmqs6Mo5uD28QCBydeyeZDujbkpAwc6K4Jh5uey1kdsB",
  "key12": "2fenNstCEYReMs2vbTDnfy1wfXDQuHQxRqEgnoDQkBnD3RZnprYXrfXy8iDkRNk5oQKkk2YdXQ7NmLTio8xQaeMF",
  "key13": "57o8T4eUqwQdgjGaJetoXidkuyzoDavmgqbfuTBKe7fofwQ23jrmbsmQpxMYjHMdsMdhqwNNiDPTE7iiBp9WXqV6",
  "key14": "o2AshrJrEM8SSzYSRUCQUStFdQ3nYHG7HAQrwezjh8ARcYQrf6c7SczY91mJnURYBBeeEup4fiyc6xFm4SrMdmL",
  "key15": "3gVtjE2Ww4TXdewvxiGrN8hN7WXMaGyRZ3QpL9NCvNXaJWzt6eDarhuMvpmpP649vuCXXtYkFcX27yh1QtFjfJg2",
  "key16": "4ZhJL4SCtkAjsqJneWEWQD1KMUJNFGQ1wxXLH6rYusQKZdRFaB7bd4XMWsWmUnFef9Lt2baQdRdiXJmrFZsVaBb4",
  "key17": "2vAFy1C9KqKzMowyWM44uBZLTYvmLBwDJSymf1FDtxpkQwswpUGnV4W45sLMVXHC7vnuDw55QYXNrtMFoszdD7S3",
  "key18": "2gNQ7He9qg4SojFMfjJbYgzRaAFQrJLaE3mk3Ztt6JVKaWV7oifhwMUPpjdibZpqkF9otBoMX9oLBDCm4RVwzxha",
  "key19": "27umwK2HiPsWgZjHgvgym69SnbUXW13zCS4vrXPP47aLSv7CiDpUZfj5ePEuwE96yK9Mgqiyai87TnonUXjqrotb",
  "key20": "4gszzysDrQtB8F3fLfPn9ExcuFqXcNUezmeskoi7HcCkYpPRTttp4NVFKiEbqdwE4wMeuRiossGyPyUqbAN9zqhn",
  "key21": "wzgQMD735hBNKYj7Mk25M55TPMygHfu4owh1FjBB8iTd1dgoPdgoDCSWxCvsbe5ZJWWCE3aFswNfhwZrDoDF6YR",
  "key22": "4yz6QuNUNETjawxhnYGZq7cgj2yV7W5qKpoKHqcPDDTdrkKXdjqHYnGzyAfmt4iPG1ZaSShbWJk2Hr1NSu6kNESd",
  "key23": "5GQgAXkX8WqitRrpnjC4ibaLtDq26d5xLQZeaYBLNhvXZgtS87YUXxyVYbuTvpwX7B4xNQte2hEPxE5tPYaT5s9G",
  "key24": "Xb2HCu14HMAgPBTCiAfd2TbxV9K62LsZXZ21sGGyckwYtbaRGDoqhFLMN1nSz3YhKToFcuBhHTy2QBEgsnfJYfo",
  "key25": "35knmgtsEUtL1mXLMJPU1dfX2qfR9QCJ9PDEJyEbtiwNt4C8hcrmHkK2aQ49wYYpxjVXdGygH3mZeiFwfsUNJEtQ",
  "key26": "2LQzuge4xjmNJNdSxfxnz4osT27BwU2kmixTeoQpPsk4CbDqzErGmvAGAX7muw2RwGNHCdSPzAH6Lhk3joCxQevY",
  "key27": "2zeUSUQhS6wjCsBNwRhTEcrf2WcUHeDMagHcpUESyJ5jQemLsGnhBKxk1PWa4bgBxD3tMaUvaxEwa1fZyD47Qn4e",
  "key28": "66UUNou2CpvAhsww2wRuXkWbZCLcjRXUDJQHHppXxerwDXidLhQUZihJc7PzYAuG36fDfRwPYiZ6AvGf5FNvPY8x",
  "key29": "d9zsk23gAs5rEyGm5UMoJF6UthbcXXg6sUnpJ8TGVcWtK8cKCBSwL46Tcnkph4HphoQsVZBuRC6PSMZPDGt6EHV",
  "key30": "2Vc767McxxY4wnyyvURXjijaPFSEBVWWAUx71SoiPhhErmDgXfsgW7yhZA2UJ9m4Lom5cC2p2hebqzu2uhPw4mB1",
  "key31": "3YJNM1BfuHiZikQeQyAYy1CzwCpFEYvXdFfXYS9BSGY7Xh9jhqvDKecQDV6mHM6ff6ZcXabe6uqXrJXp3Sv41f8y",
  "key32": "hpB7EQyqyhNKGZ9jE1x6Ntc7xJ9ctj5g1TYdCDhyH4LGP8TdMarPdSfc1rcq2byxWQHVUhphvJPYbVcvyixyEG3",
  "key33": "4g4gqwNxcisKbcGqpQVDnD6Bo7kGiSLLEoozALTYQndSgzYbCw9JjnQeNMqkzsUaLBKAvejJW3oyUC9RyUqEgvnU",
  "key34": "3nWUSPLF6d43J91HnZq4mKZLGeuKMNdFyYWad3LFRQHMnQ4un5tMjDKj9k9B2ag52CK2izSBYytdp2JePW38g4JZ",
  "key35": "56cdiw9hsgbjpRK3atKqEUVFKrmw4RVGdMBBWsy5tUPsnGgYkhBbGPUJCPKnDHFFSNCTdCkfXC4y3z2D8yBUj77c",
  "key36": "4NcviUVpQhE55wovk4SKNnKdRznnZzwG89pCvCE8jphLAtN3DgGUTrbY3GrLn9CtRXeaez2Rvp8tM5gDEZzTBTxf",
  "key37": "3Ukt83dNewMEr5oRZMMAM7wJE1EUiTGiJ8qXeKCdXTwE1Gfxb5R5EX34uBuGwjtVdUTirQfUaLPqP72FhQT7mYQ7",
  "key38": "2Gt6SXHzt7k5mQZ4u3DYA2ouYo5rieKsC6JSmY4LBJPB15bZGVUbRissh5sE64eh1vFWLyqYWWm8R96s3yE8eTiE",
  "key39": "2ctdiYD3KdaUbnaPad7XNWs2CZTZRdrr2KciitLc4qiVtS8goUrTEKLER6npYgfxL4G7KLgtUF8WzJqp6MEsQz9p",
  "key40": "43gTH7WuEKjC6xhh8qPDLiEJhgUhpdTq2DBaaZr3TrD1CDfGHZ4MRLBM85kvDCBGgt8LNH3Re8gyMvtuKGMukdDk",
  "key41": "4iN4VRVGN49QA345gJJrhtg9fWEBvGcoc3WywnRPEPSZXoqz6AzgLzzMDg31TS4XrsCsifNKabPS7G6nYxEfdDmP",
  "key42": "2YYiudjhpWeWw8PMYLHshLqNTwf8225m8kqR4Pk7eSbXdoVdxSpiJCcwGPxnMKtBKpN6MPiSDkQrwE2ivX7cCcKg",
  "key43": "5TtkdHXBpHWQDZLWsJGSbxEGWe2ufPM7Rr9t7rEhDvriakpkuwv3uDAhtDNA2iBUVc3VKF1g5LxmQfFDGbReAw88",
  "key44": "4PQW57QStx6w6Xh9FDNCSqEQbSbBQxSgu7d39A3UchoaipCCyNDTnvj3Fxi7dLmxdibKH6RqkobhyEv7dRWYRqn7",
  "key45": "4Qo9uqDmqyGatDXNA6YtY1pk4xvy9eyt3ssJBXFXViYzdu6s5J9wKhG12dxoRpETf1NR13rq2nG4KMcgprGiBNNb"
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
