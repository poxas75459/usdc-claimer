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
    "3tvEDvTwTbZvkpRzidHUxSNzUUsGEAscYmEmkeu35Q9piFAaKJ5hX35hnzi3ea51BSaWvno8DA1HRXrcog4hVJ1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5roAbd8FsWtnHXVeWF8v6c5xuXvMYUj28fzxsQWNxbGBAYkwpf52uM9TvKmPPousZVURU44bW5oWPVwLmF8hf4eH",
  "key1": "VxMPzUGW4fAEun4c1ztnffkqW9MQ8F8uadQocTtCYeaJkv6oJMNwLobpERps897prstRVw3nMErc1BtVEL2f1Lu",
  "key2": "4F8UFPv4hPmmYVbjF9GwTMm4TcCsejkG1qvXK7EMcsBYAmNxWWAu3MBdvntnibFA28TvQ79TQ2fwpu49VLkAjuGi",
  "key3": "2fVB9rPHjLxhUn3d2e9AXhWPvG8fRyqh9YWHEDMfWb88dp3DTatXEAdWFhBfwKwfghJng5KhjBum2bf8EBkW3a5B",
  "key4": "ERJATR19zPseXC2T6bXczh83kqnAr6XJA3HVvPnbYVX5yjXpJwxUmp858pGSXRRPCFYnjKzhrwVQAfyfFuL4XLE",
  "key5": "3ATxYo58PxkMp8VR2ExUxHQuqPDGfBtgg1jGYHDByqTspmh95p6wcKeWCAA43LArHzPPgYAEZanPN2JT7ccZPfv5",
  "key6": "5kJi3sZdboZigtbf4Z33VvURecGsPRAtKeNb2PJhxLFtUNm2uuFE6y9hg9G45WsHBkAoQnkPk9isZXc8Auxi9ATX",
  "key7": "2gLDE7TTbWS41TH5MVocQryFP9QbEMTdZe6WWjnSKKutkfwVeMFjdLgJsJRbj7LhfWSv34u4E57JnpL29w6E9Qp5",
  "key8": "26neNzPb7tUjWCfvP6Wtmr9grP5dJMwXqbRW3HnrYU11wJvFvQvcA7Rn2LJcC495VqraGR2VFp7qsaGGmsLXdrdc",
  "key9": "3FomrTMqpD8YrP2Hkjdbr6ASefnWM4tPDacAu4fBb8oRzdqvzRdgPSAd6fxkv5Kmrp5x7roTXyfym9f33Tu1VrZj",
  "key10": "43onokGaXYmcpv3ZAmoKge9vU7nWGtKjhg1Tk8GLTdNzUA5wM6XVLqJhvF9GMhnmmEtfBSEmfcyoBQNBdjBa1RSt",
  "key11": "2oYSjkMyVddPnoxFDynYUD7YbzsFsqL3vjcSMyfix6jrMEtcb1vcVDrk7Ck1uW9FXjUY1LyYz3xVV1BTZn3pXHqj",
  "key12": "36CQbDQy4CDaRKDUZvEdkGN5DrgwvZ3BQKJd1LiT1xuhMCPvbinX8qD5QEQLAHqqBnYprHrDPJBqu3mvznEqiTVe",
  "key13": "5AB5S631HkH7E84L4xeLjKF9moebXg5FDRJ3nvym6Rnuo1xZwZRbPrs3y7SSfQQrdHHRSnwMHuof9K6Wy6P8bdm1",
  "key14": "NTCXdrXc1Xid1Hd1XUggg4UkE2WTBL9Vpaud23NUEmQia3nbcttYdEerdtT8LGRnsHDsVmJB3vw7Khi88CjA8tj",
  "key15": "3eX6EBY9Wfs4oaaDG7miqAu677JJkbdRYdJzAHwB2XgFWtEL2tqibniTFSWgtLiso543FWHGbuyRBd6CLFycnKpL",
  "key16": "4JZNYNKQkTn3yphsoAm5NhzswDA8QTcCF3cZCSRx2xQVexi1e8RU2Bbpc7ixEWN8yvWDGbvxB3f4vNxmXAz6kjBm",
  "key17": "5ZHDXN24BCGLsxQ4n2QiwZWaDPh7WQrZXAWoB7RUmHPQ9tybjUot32Ziy2bwCZsRSbJ3qJeAYi7ugmK2HLHvQ2si",
  "key18": "5ENmvmgJsK48NHEfJMVRKxKEJpVV583HKrFVCEqi7sTLXKZdn5azJ5Bo7byDqkWJRA5v4TEDyMKrg8zq2PaPAvGy",
  "key19": "5pkeUDibug7z3E4sBddir5fHCMQ23RjYu7xEWPiHxRoAj6e7u2sjRc7emisvDDV9mddxzXJ7vUxBMCUmQZFxj27z",
  "key20": "VbF6Xcm7bVyuujJR8MM3cxu6dwxVbJfE58FGRHuJar2uT2DkCXkaiHtFL4LSdz4DptTV1aMst7meU8sNC51Lb6j",
  "key21": "2KKduX1DtR4kPkEfNTaZrYE6tsFEEQeXz9b7BYGav1tBhRhv4zsYki3PeRqmkrsUE5xLWdKMvxhtcRWDH3a25mE5",
  "key22": "4be3AKCoGSK3FBfzZHcU1o1ssoTUjG63PCBsnyEYEhFWVCmqc8fBjUQybriQi1qPFLiA9nqQgd3JqhvHgzNPs8th",
  "key23": "5epPcWJgfsFMY3FTKsfoctGPDmRJjT1ti5pLaDo3CfVZdVtFTWhKaeHgNfY9RqS15ps6r6xHcHa7UKD3qbgk6SPt",
  "key24": "2fAniz3RwYT7yDL4QiFafE5vcEmwpHmxYVqxCpSAAEeypgVNnd543QYDtQEFR48ycouJZ1C9aiTLveoLsg4VRagV",
  "key25": "7da86CP2Tst7rrSvYNFmwsCpCk6Wu2kADXBoz7MkW9gAZuoEr9QUeUbMHxBpFG45WLdPDqJeMZdC697WeUjgpEb",
  "key26": "TuJ6rrSZnaZUsue851aa1niHFDSjoSxhc8uEpTaQs4KbkBJjoK6Bte26nTjvSSbQ5MWdShfdNZtam6SLDgUtyn2",
  "key27": "31snzHA9yWh8q2PcRAweE2T9U8hvz9pJ1oZ9iH8gkiBRhijzz1wcsLj9jzFJE7rZqPxZddNDVxeDPLSKXR4t1dGi",
  "key28": "548PrqUrhMZMen7LkhMGAfUdydbdSj6ifh4KV1H8qENdFsiqcg1p8PA4uXmJQ3fe96PMQe9DfFhftez3P674A1zw",
  "key29": "tixTq4YYq7ExA4MKEbHeSZ56eHQBiDZM5EyWgfKJupeoayeB86D3LkfTdCt8TYpFj4F2vhqbNv7FMEEUiT7PFVp",
  "key30": "5PgpRrXDjeBwcNo44K5EC2NXMQGJ5MihCweD42jKhg1pMHxAkgpuALxg5bqypsH6hq8yd5c9ChDppe9zraYC5tRk",
  "key31": "2MC865HFAvC8Xk72o8sd6ZZqWo6eGhpys3eTp1VA5PZMwpsdPxFUi7QjhXjgehXTYhgLD4cTqWYFpvagT1WqWPKf",
  "key32": "32WGxnq5W8QQjSQutBAN9BJPa1fzRhMTL1XFJqFZhRFNvbHUCVeuvjmSfXpn5BdB1uBRChXKKwQLaAFzj33iyv3o",
  "key33": "4CGMTzvrTNymGs2TVtKGxAcA9NHuwXZXPGwwzmNfDDpiJFa8stRaNjznMQE7b9hDSV3L1JeXfu3PFtw1KuA1LauE",
  "key34": "4VwNavB84zADWG2ViHeQKQfm4Zs3yDmKMYmSXrXnAFnoiw95dfFfS1ak8Tz4rbHd15GPQGC9LgSwiaVfaCxn7AV",
  "key35": "4dFV2CZSURqCiBhVxcQ1UW8uG6Mvok86qdX5g3G1uDMZu15x75Wn4vgYkGb3gcddQSRdHLz7bcPWxqTSu28BYCGZ",
  "key36": "5aqRNazWjq39XmKHMbxdSntvSjzyvABgCPkc7aVPU8gGERAA9ZQrm4zKKJEuUeCYKa8WTepumdZ4VmbPZoUWcfN8",
  "key37": "23JQccpzjRYkGJFDPMz3HEUeNvhmCSVY2SCWcaYa4WzKLCrH82otf4oQTvHx6QZ8MR4oz5L832JkGnY7qRBP4bGS",
  "key38": "Qjt6s3jvn6Mfqnqz4UEXArt5gFcNQHG6sZAyV2H9pFXx9eWML2DWr4K9jeqkerT94cyULEkkzibBhVWKy7xpDG6",
  "key39": "2EidyJSkfXjS93wgdBze1S1nWsfd4fqXfhdYvCaGSUvFhcAXKs9QgcZz4iP68BV9FJfeKWWsqJSzuC6Xj7q8zapU",
  "key40": "58xD6gNxNCUdFHaEPYS2fgCa2szk6Gmd1eq5hYaVTuYAGzhrTxjMkbehHPaFVcSADRUbLDJGfVtPyPxMtz7TcMgf",
  "key41": "4PE4p9VbUhpT2TofE3sh4TtYwnsudUmNDbCn5dGJZJGT6gdeRLGreSsoDdMK6hZp4e9pXd6jS1aY4uzTEr8Eoqr1",
  "key42": "33ocerdX9xHDCASGRfa4QL1RdZvvyiZY934cTD8tf3ZGRudmJ8mVLwkG93MQFCtPGf6sthUhAhZ2RWvVXjiPy3Cv",
  "key43": "5A9YibYbnjvX3XYvduYaEVVVi8DuQp3DicGyWStxPRhm13p1mQfQrvdz3y6DzCCzAQt7yX9NsLspePc16WbgFEGF",
  "key44": "5nBhW83aKM5rkjuH5F4HqqaVCTjLfAupMcowRWiTAcb2gmoH9TZYuCTEK2qKA3Hq1QW8xMvARPQq82W7uMLeC7Lj",
  "key45": "2zdvwEoViidgSCDiyvPYr5qJ53heqn1QchvuW3yZfuDYUUNvXF5kdWo42FcoybfRPxyuxXCvnGC3FG1MSATuXau1",
  "key46": "223xTcubc8zswXipACprqkpBDQFzshCknyPbLL1JywQp4PZW13tdzVnfsC8E4anqx8YCXS9MUqxZ3ygRawHDT73S",
  "key47": "5eYD7i5NzXQYZsnj2iGWEMBXS8EPQtSWX2Rp54XppRg4ai3j9nocWjafyUadADXbP9jiQTbo3k3Mjc6xZv9cSrPD",
  "key48": "5CPHH9DNuuBTkVUUGF8kizeswUH2htixu3cTkYis9Z68QFn5gyiJBtMa7M9fACqJvQJa2Qhqrau6qck2k75Cok9z"
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
