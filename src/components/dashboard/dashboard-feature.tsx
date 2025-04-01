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
    "2FyyaJ8LFDNPHPQYNxJDiPQxPfy6UZMjC41my6JY7MDDC5RFgRBSL4iXG5ZK33kvDW2gtxTCQU7Mk9zULKyGJ3Gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ab8eJ3xY7LaCKbyMEKXWXtnZhMkeP1rZMFsSMGo1ria1PzhUnn4teDJDTzjZtrBsXn1YvikEgF9QFu5zrhc8JCh",
  "key1": "R6Kq4cc9PJGttty2DEWQUSAvzGb3F264Gin947KanSqZ7Dz5eZquMaSwGJVdUdKnL75MpaTTMMefLsuicqUpxcs",
  "key2": "3iBVKqgxXCUw34zW8sdYxds1mXu5LXG8qEanSkh1fbtQ1bN3UP9zo17PDptJJVjTmnJTBCWBR9yJZg9kE1Wi46Hu",
  "key3": "yy4FtBPp8X28R4RocxzED1N94QntgPCyx5wie1akcZMFVS3xP3PPkPmPdivnL1ABorJ3W5Khg1zG9Ndspdb7vnB",
  "key4": "2kktmXvScPxJUq6T9FtiRd846RxQLFMmB59gxv2Q4LXcxdegCuM3GCkFkzRCk6HEA9AsLzruu6kSMhqRcR1mhSet",
  "key5": "5EvFiFWmDrTYFLdMkt8TZCxTGpVBYipe3NvpG5R3fesNPUMfBMMWm9yYiBafrXFcLKzwuvMxbWVxr2zTp56dATiy",
  "key6": "2cn6eC3HUQEd2RHpYDcQTtB4K2yB3jsKqFyBTSkZDZyjt15xKGRP7W1uyAL48As8YDPz4H8QTdFoXjBg5AHi45Qx",
  "key7": "K8mgQnk2fWWU99NNphnB8dTasaHyDSB64srYC5wrZDZtFWEmgawwLe7YXdDnLujCQEodeNyL7VWoxr8d7r3v4w9",
  "key8": "45bjpR1hu8YnEdycb2QZnY9pkaH4QMUgg36cSKqJ7t89csUZgv87pGe6KQComkqZftHbh35NEVhzxgGortgsedVu",
  "key9": "125djoW41vHFz1ec5hJmYXvHCtTq4KaKS41ExYZepaZPGduj4H68EUm8CZ5fvksKqigP1cxkvacckM9g3ErFJDFm",
  "key10": "XnFJgkiGbfgwGbZVFXJ6HBSdSrJwDVgwsTd23o6vSCAPZvcMgMsAC1LnK567ciVGRvR2TAi2HYhxXwX8DQiU9HR",
  "key11": "3MQ9gpAM8FqaMRYVMZpq3oGezxuYxEMevfPGWvSJmw61dFrSXyrffLhGNfsk5BfVMAmEkf63acMEg4QnoJJVHLEN",
  "key12": "4nXQSUNaAQZCH7vYTzivnhKPqGeUekwcUqf5xqDMHWMfq9mymzzm8YFfVhpTToiopTmVuDFCs7yWfPrg77fpEEb7",
  "key13": "2GNFz74qSuPhtDaiiSJKKdzgAPmYvdniremN59mRd67gxtLmPPE5knaTZhZ3VUTKyBJ1hdafsZchQtaHdPwdMVmX",
  "key14": "5cm6ow8X3yAu5WmR5EAHasfaN4CADeD9JSZJzDihN17bLXL12c1ibsuk6kFXCvR5uGvEjcMQxbJXbTBUz4b61LDn",
  "key15": "63YYB1HhXM5567jSgNG8bD3aqVC3cL5nJ6whLiYYsDyj7TJmLDtDtTovPHZNifsJ7if4781KFY6bvbRBxkN1tkpS",
  "key16": "JHXhYos3MMWotsSQRFNbShZY56LiE8TufhxxdqNsTKWsKnfFfY4dPLobs8wv6YJSvRbHLacXAjzY2Aqrq7QJnCe",
  "key17": "2bx4N7DNS6yewnUVc3jfuXz8FPQ1Nb9nWkvbn1xh5QeUCNvVt41boFFNKuNZz1ti3YSdJnocsAscZySibGgnVcNf",
  "key18": "1Hc24PMZctbLKmAsShgBVm7jNRvo7Z7hdmbCqaCViFd9fxDvYFKxWSmYm4R9eJ3HsN7fPjYaJRfNd7pA1PAb62N",
  "key19": "2e3X446o4pWRZHwMSLm1eeHGUkhwdkcStczzW4YphK8VjzmmifHgAfA9DwQqC879e3uaZic71X9Hu75K8h8U8ApW",
  "key20": "2LhooTowYoFuvVM6Q218oZ4w9rYnUBFKzcKcCUXgnteC69RRh2YoiFb9J1T2sutYHJrrgnipNpLp9mrGwF6boP9d",
  "key21": "4Ev5z5NBL4USC8m79jks4vhPyjaNdZftGMFuDvR4MiPdBvMvTKcdYRCCr82xnfjMPncHfW8eQn9NqUd4N4K3dsPP",
  "key22": "428MQLNBawcYfcTph2TPP62Bbzdrf1EWqJR3Muvk6nR5eNanGh9NJD7vgVCJzXKpUpZH9YTVHv7BFZc2HRedwJMu",
  "key23": "imA9W4R9TdC8mjUQVxvMR1BUam9DyoUEWsHFcRCA9ZF8FwrXRxD2VoC91syCLWP5Vq2vqHqN4h267oY8ktBQ5xC",
  "key24": "5cb9gQ6YDcSZ5Z2xjtoETn4TkXnPJBPUCvYrnwddwgiGh6rbwWTPaRc8fPKfWHfukLY1sJBo196mUi462uKX3Q9u",
  "key25": "4unxsmSFoGKKp75cEkyWaryR9tGJZE6ySc8vqyqQ851vTQjpUx5FgojdFbY5A1kT8exUAEiu9FHqRX7q5sJCoen8",
  "key26": "2X9hEwJV3QxMHpN96hmreXj31L43WMPo1VoVhr957p24WX8Bo7GAGfp5YW2C3Jimwuv5QiEMCMBMN5v9nvSpcpou",
  "key27": "5kgPKdzPXuT1s6R7HWYkWPbdwp5ToWbDznQ8oJ2jQgxVGfdXYzQMaQN9tbctjsevn1hWHoXuZK4HRVb3VWQS3i7m",
  "key28": "A9fAxkFEeK4zZ2dJfydm4Gm5QKXk7iNcztVitsX7Z1WBjjXTK6XQgTARABXHh5f8M46Q6G2HXNCRwKEcp3uyuaj",
  "key29": "3kjA6fGSvTDiE5vvWvMbvf4iFyNJQ6U1AZ8Yqa9zofcSb8TtV4TNiu5vX9khfqd7B4ZPsu4u2C6DfXvL64SjoRkT",
  "key30": "8Cu69FaAJCSdDkgdyQEypxj5mkKTBBP3zv3qSVWLJZUrt9JY8FUFMuAByJf16RQ4dwJyGNVY4esCbJaeb5ZJefx",
  "key31": "J3tEN4mzb6KQw5AEevuBLrV5wkzSxEi8WgFJ35eCLUdi5qAJMv62GwKM3bCoexco7M57sXWyrxfPdptzBqatDVo",
  "key32": "3jpC3wvs4ufdy3JeGJQvSnQeTZ3DY2UNHQS9gHc5rJnpzLK3EVtvZmSVp5rEn8LCqeV6XnKbembCMjkbBtbd65oz",
  "key33": "5HLTnWLtChCzkA4kLa4D2KJaCdxDLbjyqpWYHyWrcnoonxXnD9iusqgYkdZVNkjUrZQHHM5ng1YZgQ79dHG3bdWB",
  "key34": "3KtHrdNf6turK1BQuKc1a4zoLSU86fdcptATXbP1DLEDGQdc2aJ96pVHN31kXpybPEnqGkvNTtz6Xo56xvcNgLBB",
  "key35": "5pd7yxcNyiH5yXNufwkhkvM37Zmdszia9toYL4Wv3bwFffySAS4UBkAB838oz1z9EKwtQuxPt4fMEsz9r3mQosYX",
  "key36": "3W9Gw3HF7b6yYh8fYb8YKC3vZTPzj1FZgpYfDKjzd88ULJPP127eNH4ixYNLfkaJHiCb3n259BFhpK4wqVSYXPE1",
  "key37": "2mccGMCBKJrcVJf3Kjr9ACcTwyYk4JV37xTs5PdsHChKdpNykQbTCXRqh93Y3d2gMSQkwdPjodLvTeCqTPUutDNi",
  "key38": "Qq13jU8uUWysjdqqCmTwindYCYtG91KTdwrbiV4dfAkQiMHKV85BXNGdDJJA8XQiEkiLC452rkp924qBGMckWvq",
  "key39": "2X3AXadpBJ2rGjXesnDnTXwaQfdd9qP2UTDVvLMBRoyjsHV8FCpw2QbuDjCnJ2G8HxqdKmedGjProUraMErXy3Hx",
  "key40": "23BsLx1nMJc4Gt41upqdGha5xGNWF44R7ZKNStvP56HpFnQg8mZJNcgXNXEady2wiAmsuS4tWqquCcvQ2zNh3n54",
  "key41": "4MqL6aAJtvoCRUZDHow3SubMHws5iDMm2V759MAE3VB9DebPMdK1VU6sutcPX4mnw3hVnBdDspHrcczt1jwxPPED",
  "key42": "tMcQQnfLdMRMZat2sWz9Ez91N2puX9LBqqjuRsjx6nuakp7ya4ojeseZRynpiF9k9fFcSkjhu5J8W81MuxM5RhE"
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
