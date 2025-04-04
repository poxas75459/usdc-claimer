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
    "2LC9nPE9GxzHiCMDCEuRCgMwnbDQgoEmYjjazAKpWVK19apN5K9BGegpjZ6o9rjsgmEoX5XQ6RSkTduXQhh5L9LF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vjEHmNmrKPbghtZofmryo79ELHa9EsTnFf9aefGoQ5a3qpJzDKPffCxUR4rDn69Phund9zKeATtUk4V3cfEGmVF",
  "key1": "3HUUrFzTxfn915oiQTW7jLqa9RXYaScvaQgZUr8pjJdEVQgeKVXUppYeQfghp47QymJCbYkXpPBArbE4Uc8A8yR8",
  "key2": "67Jhu6PnnAMLKy9ges8URt4MUHr8AuEFmHihXYkN3Lnp7aZDsSzv42tpDFbxZF6Rr6Dv5aY84TgSPiqCD7Pb8Hhm",
  "key3": "4g8SMuv6rDRMzrXLvixwjEwQPhom5WonsUdRY74LsRMfuCALvo3XVFeNUufx5vQDGVfP8ThJJbwzHex2y9eXe5Fg",
  "key4": "ubshXEofWohHYTPt27mLxhxnTzCnjnS2JuYjWcSPDQWixgZQt5MJPGnsAd4Hf5CDtWaQ93jYtR7VBXrrbMCTGT5",
  "key5": "dHu7zGNadcdG85XvQ2Qxwr12eveJbAHq1zvZozzwDonGj98oViGP1qhxoJwaU7s857xkkWHrKvJZHuWcRNfv6fq",
  "key6": "2aAsAnNENpSH6j4wWdFZ76Ju3F3vNT1DcWhQMRV7YfAGjZHP4hWz3VcvdWg99NQnzkhtb26xyTb6KLGj7Fg2jcix",
  "key7": "vPtSZGByaKSWtKi4xsB9wArTbQBf7YzY5hLCMQDdvazFDn4qUxpEN8msLZPce3zeHij2X4t4GunC8Lpjiw9HBtT",
  "key8": "5vJjkpa1AbNiP9wX3EkyVGZh5LGFtETu5jno7fjnkfQ6te7ac8jo2eg25ax71AsWRoTbo3KeXUVrzRxp3eAgt6de",
  "key9": "2pn9d3Yqukd8Bapd2sSfaFTyUeJr4czdBr9uhJ7mYgr2kcgtRffGxVAfe4YXrw3rvWqoGZqzLrmwNQeYibBzNr13",
  "key10": "51onFrXcGcMdvp8XYFFzngeDcsLUPbwuZK6ZdgDDrUS7uMrSCHcppiTvCu3qjo8kbCX5Q81xJvGMRFqhHXzh62H6",
  "key11": "4ADfqcj8iUnzX3B36utRjZomQod4emCDA4HC7JUad9co5h735vGCEpbD5pcU7YQrMMEksJ8B5veTwNXwKsXbvpjq",
  "key12": "4SmTKe6VFG3Un9A82gig3UETerUj2BsrizqAocPyBA3jrFTpdgG1r8t5YHYszaAtDYqvRVoCeAJdcSstZhmoSAfJ",
  "key13": "229zqP3RUNMuzcxXbBD15g5D2X19VvQ66SvnuzmZKgSJbfDw6vEiw4HZBVfsGLPPz3BtPEjsTAhQk2wqWhGGqghH",
  "key14": "3hPgh9t7MtagPZNc37ZZoyp9jy7ZbATnvZoEpDWwRyCZCjDrVFNbB2vtcM7RMaejyBF6NX8CEKk5dPWdXCjyYYNL",
  "key15": "bCdUE6YnAbPvozmZ4tbNrPXzh4riR33xvABB7W3Ubso5DPPM49CUzNivnF4n7ErdnEobpuAUmg18QyVP4k5LTBt",
  "key16": "5KBcmr52ERYHrpdB8pwAVwLxojWSDnxMGC2GquJEB1MjpmnGeLDyg7R2Q9gux5ndtPQm8w5g3FvENMTAgyzxJPqX",
  "key17": "3C9FL28D82UmbYiQBXneGkKc3yFRwaPLoZm1FLF6Uu4cUWpCRDuwXrBAcBcRpF5QUTRZH5gbVvnZ3y7cbKMsKYh9",
  "key18": "592md5QTFeDN9FCPPcoNFT6eudbuk82Jkk4ZLXEP3to47JdmiPq94jJcen3JKTy9t8bJ5RwbQBH5hLfBkKqny5uk",
  "key19": "2QszLMuWi41p2ChRRxZwuXizHqc2NCZPhYGPUH1mXCpxtVkisAnSjPzAucGYFWDbitW8W8NsEnWg38YKuQiYhpJV",
  "key20": "3ZRxwxc1HXfwgYBNcXc7TbfMKHchm8FjwGdudza97FtqfKWf1tSv3Gd9WfmoSrgvirWoVWUanapyXeZ8CLxT7kTM",
  "key21": "5KShMghguNYt1fkM6ABBge4nXjqzCMmTWkfDsmfPvuANzDuQcHRjFBoPQjAGX5eYR2iU7ejE61EqZkEzpYgZ4oje",
  "key22": "51YS3tSPvAnQ2fMh4Y5RMAXBBjCJhTQBZgLQ2voyvmoEPM4wp8sBpW3nQiFqbJEbGCCtk4EAABYnf4EghRNGNqB9",
  "key23": "4ue56L9873Cg6CQGMQ2BgEZUdyE8HW81VcLa62P7b1U3Kfsa9mkbNByovGKcrXVFidc9JwNc62zCYsQMepYux1Cc",
  "key24": "2oXcSuJJXNd1NEgTotiQvAtU8kknBE9aPeSbRQYxgMrHm4Bkuv9nYQ9GxJ7kfVsL3KmfZ8rUaCtyaGXpASQo3vb",
  "key25": "2cfHaWVQdgk5tYrcA77r4C9RZ4NCEZQaAvPGj1kB9ZWAER3JsSvUUdQ2i5jibdibQd9yd9yTHw4V321Cda76854e",
  "key26": "5gbyKWrAmeDK2rycy7TBLhqtThewRLN8MNT9DYS4w9BDV77ZZbfpBrd3ny1uobQz73CAQXuRWbrDWMLbQ4v2w8Cx",
  "key27": "29HWaU6qj4vQD3vZbNzAbcVy6AGVgZjSUgJGjaXsLxmGtLVrpo8uhXNdJTRHrj8MpyM22cjYVZvvnMTwGyvwzuXY",
  "key28": "4Qj4GfJf76gs2PdMLmHzjUPsvRhtAh8LhzaDVk5BA2RpfszFVq856QdCQctirb3BDH5GiZrpbctM29fSQdvPH6yY",
  "key29": "2HnfVnSxtu7JSWiyWV9Db4HhdAaMpgHaZqnBwVgsiVp7djktgJTLGtf7dzPs1wuKsbomgEwGK3apUbJiC9QV6Wio",
  "key30": "4WwsGp8n2zw1e2TJVTRaJsHTBg53ZHRXKotFboCFJ46Xvbu6N83Bjxb6V6GxyoFCZDvMP5VA4Zx4bwhKVcFZPwfa",
  "key31": "3mXib5Pw429AyiY3yjzh1jRAoHLsCuv4XbQFnMHqqDN3efsADJVPc4zirdZAeCQnJYrVQUYFyt19omUwnAySwb4b",
  "key32": "2R92eZcgw5iz3psYQjyZHAbsQQJNu1d3spFXBBtkJFA8kHKfco5f28fFi31L4wQG27sETF2H8Sv8YTGzBufo8VDi",
  "key33": "5mbEtFMDpMBrm9WDSQkJMDBzw8CQ5X7dFfyoNZGUNNsTxEAnigS4XBV7bX75hb1ayLEdv6KCLuHm4b9Tc8VANGba",
  "key34": "4chAg2oPBb5H9MAYjUWBxtVyX16tBTSgCYbeuGnx95DjpNHZ4YMd3QG2Sh7WdVZkgBi2ANNu1xrkZUDbWKQthHVW",
  "key35": "45FzF7NzMHVLr59keeeV2pzkd79nvP6sJtw6qeg4nZvh6AhCVao2Du9UHCTWu4gqxngCukmKnDvZCJYLnSVW2PBx",
  "key36": "3FaUPCMe9ya8cwDBne1tFwxUpdhuosVPdUJdtQLb6ZUnhhRjqU913ReiNVC6hyFwSMbhd91cFZmJz9g71ys2ZMu1",
  "key37": "3Ns9HCnEaffgGxhzA7HfvZhXYcij8HEQkWAGZd9KnAvTUKNwZKQ16koYgFPfLVUpGmNhSLZhNTxkTxHVaHYvPcgd",
  "key38": "3VL4KXQrwpYEW5U9ZR33FZvREAKHgtLsUcLiPptfhNfaSgxu9dxVGj5ZNT8vDLXuzGDHGjLuWLaF7tHkLSZwmYfH",
  "key39": "2ugQZHaZMtocE94yBsTVqZ1v5fN7CcCfTNgYJzysqEsC2gsRr5kmwYgvHAJ13S9AiF6RNmA5W33BUViGZ7NARB4x",
  "key40": "22Fqy9UouL87neKow4sADrkhVSA58wjDbeddMQp7PAueYbR3t1KugkUKSxPtJd53XPQdtAFPfUkdZLtH77wCg4zV",
  "key41": "2LmcLAVKWMgsiuetrDY5J6KQuaVaiH69DGXXu4jh26b7ptmDTD1gccRaun7h6yPDyhHZGtsY9mduvpt4LEUWE6LF",
  "key42": "5UpwJQ9e78s3oUF7deoAZii3rW9ZDkTmSpe3xdhU5rs8dz61uQfePjCf7ngcAuFP8eCrHS5uQSttrcsaDyaqd2wp",
  "key43": "2V12c33v8V4VUwhHRr9DjgVHAYWUi2v5FvEzPphLU3Y4yCskPP6FAM3HgfzcvMtpEckGZZytEj1MEcpWaoBUoveW",
  "key44": "4c94BrfKD7FbtPPNdKdfbpNnD8QEHLjrkod3pJmeoxa2AYd3B5AbQANqdATeQh3DmJfWzsHZF11BwtBAApNyrXnQ",
  "key45": "2Wo62RBEoYEutkacHV7jVizAod8XQ7bn2jRsB8FYW2zEKE537BVQJPJeeBe6qnSrJSkgiTHWidp6aPz6DqGoKaN2"
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
