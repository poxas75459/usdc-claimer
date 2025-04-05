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
    "2dNe7AsnCDfrjyYDfideCUWzJ25eer9RBTjTcCRUw9sQt4NDtTivaeomnnWkkLyDdPhsj6Zrq8s64X8rNuREgNAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bh7KWY6zAu4YHrMpbrMHCXJGg6J9zdjTSDrKuktT6ujHFDGphmMEGDBNrBmSnAxX9shjwVteMuB5hxzVPYbcQg2",
  "key1": "3UW7k9WgoQchp7j1gmXyLtXUoHE2HS9Gkd3BweYbUEMJ7zDw2GU52QKev42wSeJymceQfxFbzKYoEvoKb47CXzoy",
  "key2": "5b7nzYAgKNYrvxCeZiAbHvoYVRr1wLTcJhXH6hujPFWdVVYAnirK1hdmMfxV9Zw1Db7TU6hJNq8xLxuj2QBZn3bQ",
  "key3": "2PiRqunbNcv4YF8QZsQwqwePetj9rXhNNGoPLdWuwMwPEBqugjKcNztjradwZSnvhUTdAHEdnnBhM3baXAuNraw8",
  "key4": "3ak5UAEeGeJYXptwj7awELDtcpD65HbqAvAmQwkVkAGT8K4KFwBEZo9Fu4KR4uCQi2EF9diW22hCdwEE8oMGkWB4",
  "key5": "64fXtK7cCb7NWb5W9ua8iNvMAC3Ctma2K7JKmEsqPtexonQaB365WLeYv7wK4X6A3vg7eFtbJ8tEEkAE8pVZPhLq",
  "key6": "agczGWw1CkCfFXcP54FzNDpUSyFGbvHrRi2AjPFsYfdduQSrmNf2xbkkhCceFSx1AWzzn67oAwvJwxVaS1qM5Fr",
  "key7": "2UrzDDSk5cvz2B76sSzRQwYe5cu4PHCwWWw2qzrXxQjdqJNKTE4kSS9tucJAQu5fJMXCjWmz9o3Ew1xmT5Pk1Q7n",
  "key8": "558GrFhu88dfZ9BkMRh9gv3ocpS12GbWTaSia1293iqJyyc7uTwargXX67qytNf53LisfxZyEPo8cmK6pa2ie2VX",
  "key9": "73Ka9Z4pzvDG6dYqQxjGGntinimxLmui5Bm1dc8peD4W6gbibYtsWyBxmCTbQkeiGa4pWWwmVHHDnGL7uqsJgjn",
  "key10": "3ZSHen5Hm6NSjE1isXRaVaaPktue8YXRtrQogyAPXpSkNTY2y4Htakk9iM1baxxvK8aaRLSM6NdWLJFh9p6Y3pHo",
  "key11": "5rjAfs9bkMCLMjF9CmoDu69NagnLHaNrfGD6PXAATvGrijfoneL9YYYCLCseXjTGCZEHJtpDvrmSVxVatrCGy6aN",
  "key12": "3kJAoWyz7N9J5YKgyCYen4ZQxqwezUgef8pcg8UphQpJkMLGAfKvuZWhG9EU6UCDL39BdJTUZTgS6GPKZNZ5AeXB",
  "key13": "42zjuPKGj7yWrW3zhNqGy6xRcUTRktvfDhn3SG5ZAPaz5iEfgp8sbWmvBrVPJW48YeeXEKsskq79RaC6gVPZZAph",
  "key14": "38pbTKGVfxQk75oiLtZ7tukYXFk9c2UmBddm9iPNH9FYsGLSn2hQTRM5G3vdAHBX1pnnVc3Pekbk8XeqnTXaKX1Y",
  "key15": "iPLHATJ5yHnkNmDZjS1M4oJXsvbmG4V5Kdwdu6G44A1ohFgP34kUfYsNNUQQadfLiVU9kTS2EgdazeGs9TWwnnt",
  "key16": "5mrovLVUo1NLBpbFijM3sbBnEfc5FWX3KhJWxtfD9kZpryj8WKbMqAqChMVzyp6KG1bzuEhNBgacjt9zwMLXtPuS",
  "key17": "21Qj7GfYYjaHJtM6T5LfStqTne5ciKwvFwnu6iykkDwfZMn9VDsfWFh3CNZ7yAKtNzjtkq6Cx7i7yrujo8fvLMJp",
  "key18": "2gXHNFMEbqTR3Bdsn2cpjXQZyStC5RcvaLtg5vpWSezTw4XkH8U25dwwmo52uYzBMeWCqC7K8f94Aax1y7iZU2EX",
  "key19": "3DPNy8ZLAG59EC9edMZwLRmfHYLTTS9vpRqq9pVRtkpRqMpHDCgkr25f4wbVBq9GX5x5RnSDj1GvNoVb2BTFSHiJ",
  "key20": "cpLi4BdHudNDUB9bcHL1FidmaQtEPJVP94MxRwRCSeb64K8KwfKHiFKtn2ArURKeaNP3iemDmzQxoK1XJHuTprR",
  "key21": "2k9RsHFbHy4dUgCgrLcGbNtGSWNBrmfUSCLTr29Lm3jabz2BsAbQCXn9vUErQD1hbzqohvvH6iKPFP5NvSQnMgQz",
  "key22": "5mmDizcQCbAXD6XJWQXeJ1ajWmDtSkTfd3Xcgm2Vpi1wd7WJSAi1veowrdZ8dgG9BFkSfTputwngMskYn6cH67Wg",
  "key23": "2LpJ7X8qkn5JATpCHxmi6mLoeFtFnKdRz1MyaCynN2ZiorLixTBYadErV9VwTx9kfVK98pGHkdB5v1VjPFaqFGwp",
  "key24": "538QYikG4eYWynXhCXoMukXaMuD1QToYrMNuvKDkB7d6CQ6NwsMRuhnCNqozMdnTMqLQ6iKZW9RMjmNoTyweW2Rb",
  "key25": "2sLheaNy7k9ZFaystsoxj3q1NMVGapwccncJrtu9tS2SQoF1frhHLgxF2eJ1xcaNJikZEP29kWKHSd7W4Y4LRjBh",
  "key26": "4eg5yjHPPMZK53TiCa6RdT5myEQvfqUM9daz5VMcAQX1oP7udrbxLGkt9qeik47pbRvEEvUVhUPtScMxcQ6FqNBa",
  "key27": "6RiPqK1nXh1yPfv2DCo2vFuwSNzmsiSFmZYuj3JSUrLKB789rRwhadeaDmcAQYyV8XP6gQ5bRAyWJqgHQYfrKFJ",
  "key28": "2rfX51wvyU5tJ738CPj1nhPpsdKJ7d6DjvmA1rtfvmjQTUkmyjYEbYD6epKUXS9FKY2Y4hssfXBgdJVT1Cxs44cr",
  "key29": "SCA5idM9CzsCww7AuSzvQB6w7KQ1mFUoWf1JhQwi3wVfSfYu8pgnGkiSFGQNNnCmx3kdXLHan4aNEW9sCDKhqWM",
  "key30": "4bGhE9rx8QQvxis39twVFqXyGMKBvnozr4x1jsEzEAGYzqBp9HkrFgaPRwfAD5shzbTDmfz4ur5hTohq2AVTv7n5",
  "key31": "5kz6dfgzdVUn3Wvkv4Br3obgVPU8x889WjmavPUJkXiQrRRJagFp8RumNhxGxMNijmBgRb2SKzXRm5mYEsJbje8Q",
  "key32": "RVeaHUY7EwYEE1Hnvc62RRG7QHCyupEaRh8DVF82jgvmMdysNGAWYv8VFW4fToPh12WdeD11fGR9nn4wbn682um",
  "key33": "5Up46hB52ZeKUJNx85nA2WXbinkwaoxBmX1ZGCR43KXhjZTghigVjdMoUaZLy3BHFNQqzcWx5hZnn3ZHgsQLGdrk",
  "key34": "5ucw2NYmpKF3nUgBXkopb5kgYyB4vF83gwg88WpKgmoYT7A8Q8TamSUjHjiPJo8ZneK4gqWgjwzAezFiYDvaTr5R",
  "key35": "CLosc8LoThzPQB3ZVz9XLh2uuAxpXJjLzE26HBYfSfHvuYKqdX4ZXzbybt1sdLhvJGEyMKb6mjtoB6kwCK65ECK",
  "key36": "36YARZL8yAiy7iJPu1wFyJApuaYN8p6nsBBpFk7joU2giajPzc7FxxSgFjZfkYvKQEuAaCr8r2SBcn3bQPsyaLQd",
  "key37": "2uZ1wQDxHW6oHdYGKignMaKqewkwmQu5MFoPEo5L67ZKuUajh5ycYW7ZmhmZYqiqbbM25AfRFN22rvMcGrCnWkVP",
  "key38": "3U86ncNsPwaPDQP5d5cTj24XCmzbAVL7Xo2Kbxs5Hcu6H2h8ynJKj2ERuaJHoywRKx5eAF26BR978p1fa5whj6fR",
  "key39": "BTX3uLZ7WcdS5BvaX6FwMz3NsU642JksZpY2sbCuGpiEWBu4fXSHWZQXe4zexhms16twa8CTS3KzvYF94jJQqeb",
  "key40": "5RmZ9fNy9iH5gmtDVTYW4nX4xA2DYmxRpyATcyUcVj1qGFQLEzC7AcwZitb6RP3FaKD5yipgVSzSG4Svzu6mpEWV",
  "key41": "2WhnEV4NCYv7fovVKHfEzcH4NiAizgz95AeNZ8k1E7y5oBADmKimsKWN213PK3RETUAnDDmFPRsHUvLbN6u7zASo",
  "key42": "5LKD3pJcfGyPpkYTezbxjEit1pZAZkVceFoTR22e6AhdRzmU2xHPzij9g79aFmYKDbQH7eiSFN97FmUvpYYV4jUa",
  "key43": "5dz5PNBHHk37mdrmDYrztHAVmC6phb4KgDxxg2MVFExSA3oWtdyH4AenJUk1B1gmrBzToiyGKHf2LevcZBsEbM6",
  "key44": "3nMxv8jT4fKCieuZaMZDu7xYNJhzh8owyiygyKt3jV97AvCVYHB5JJpVeULwX2EKsHmGjKDXwg5nAZmVaCU2aXsa",
  "key45": "4onYxTXpoBUR6hzAaGMZBQjAxdMjCwTaFGFWHnD1rGvCnwTSsK9QWmiDJhS7RpGbzPx2p69ZjN3TQ7G6MziTDUzh",
  "key46": "32Q4AT1P2QZ5NJMnYYV9NjEeb1zcC87CyyL4mMMX3G4bWDtYwTh1yTadiPasXBz7g7SqTYxmH7xYM7qPnaAJMj4h",
  "key47": "3oxnCXrxYYuZKLJx87by8ZfC6MRPtirew6hXUqDMSdr1o9axrzCSzuH1atpG1bC34njuiuDEpRKTEqjXv7XzwV5v",
  "key48": "2SHK2Dpsti3VrqbyuEAyjiw132bfhq3fLWjxS8xtPLfpY5a7hLYBXPW2ov7UVChwZTwhKwvHwCMawNkvVJMwavsK"
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
