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
    "3VvYUhnuFEvYff4bFMSkG6GphJGFZk7GLzRkSmWLgfJ5k7SSYRT8RQxYopbuby4F1hMXUpt1kkwhbXNhxJhZL8ZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c71CwT8mMrUiDDFtP11VA29hjptfRkUL119J5k3XgJcgTUdvxt8hzVKyuwmGorTpSFCg1LNgAanogZLqb9LaC9o",
  "key1": "5QtH3Sxi2c6SXFuSCtKwYWCm6jEyoZZAiCrGhYL4GYvaTXDqCk1Dwpyfbow7nDMtcuw8SWkuurFLPnE7Hw68VXAM",
  "key2": "4wXkBgjYk9GL6ZrTWQSU24STdMW1d3V51sYzdQtiHFcrT12y4QzudLy1Xba774zYx4BJnw1TyCXor2dEyvmTq6C6",
  "key3": "2uWGgdgJtwjNJWkXX2ff4RAPafccuRArTrpZcHdeF71TXTLQieAj8PRto8qnk93G52jEiHcdFxVbYHM86dbFYMox",
  "key4": "27XDo1JsVwinZ2qEQJwkmhBLXVU24AFFqYhHSjRJG9bK1ELwDNHPojh977iEpy2a77GBqD47AMFq2F1PieszGgcj",
  "key5": "46xBvxJtcCkHYBoSaihvhUWK9bUDTNKLWwdGYsKmhUU4G6RsbNmF9tAAe1rvnqVtwCbtS7yoD77bCUgW9z91rStf",
  "key6": "2Z3674725hY6RDwCBj4tGKzWUUDQEoeZFc69xSuYsXsoYRYRXoa56EaUbuTDpbqpbx9oRT1JoCoWz3QVxLSkZpzi",
  "key7": "57gUGzoGCvx3qRXQWZTPceg53JZRSbXVsDeqMBqj81HBYrSV5Ddn2n1GUYpFoY3T6m7kkQhs9pinmq8TKLMzRGp",
  "key8": "373sUAXMS23doPxX92KTWBFBoGCG3mynC1WhsQ4d4ZPbm47ANSgun44cgig87qS7Vcn2kvL43ETs8wMggqMyfnzm",
  "key9": "5F1WbM8C5z5ZvizHmM1wDLY6gu9pdzeCmvtY5wwcji1YfgX6NVLuWsHxKdEQBwc3sPEQGgQahT8UBnSoQTapnKKx",
  "key10": "6c5hUKGa82t6wzhRMph7iW4iou4zsWr8mUEFBkfVNmA1LZGNEFaZPtc9pMdzWBb1pqLat88JAT6ie58SsUr1spt",
  "key11": "57oYMuULjwjg26wt1pvLgvTFuU77XooKEJKhfaLPM7cVSMZDoyAju8VhDVxwmbVseUwPTY6yWhtZGUVWPrPt8Fw1",
  "key12": "sh7LYP6XELbx2iMe8hCJwkuQSuUGBA3ryigAbf5doQ2tWHCAq8RwQHjCuuM9fsaTFDxqE26DeFQ8XJRC5GDxezr",
  "key13": "3pHSLTJbNPSgD2kbJXQC1HUVGsw8bczybSbDKboYS2CUcnQcAajJvgQhWW2ktw5LBGQLvrvzY1ZgbmnH4pB99fiX",
  "key14": "Zx7s2ssiLxERXxts6k9ftvq5a2cJx16STxX8pdDeQ488dR9K7cWukfj6Hko2omwH4Ha5TTNBY8ZjnfeqkgeXHuq",
  "key15": "59UHMEQq5psP1Nztps29NzvHsSKZqNHhikzTbDkGN2rHCU6gQRfDFGVW2ZwvALkyjhGSBrAftGMNJMX1TcPeXyuH",
  "key16": "4wGJMu521vHwrrUSmYpj3EX8tdtUBvQ1pxGSLmhLJ4C5ULDSUCroFud8BZ7fgBxuK7tfGcBKo1UWpdfNU7TWGmP9",
  "key17": "4BAs2Z3UXcJt4kTwWZPHCHHVc93nUTbbcfLBdTuxEYRy6BKGHsKq3AgNzGnAKv7DUS3q146qSTKMjazfVgXdgkn3",
  "key18": "5cKuyTFW9EbfTeGdK5dxtpek1eV6VTpR11vNkHqm3GLqzceMkQSrztL8ptRTKe54gyNgFD4TkQkFHYfxauYZD1cB",
  "key19": "3J3j4qNha4R5Kcqx1iiBtYfRTAapwiMdixhSWsvWsUGNBPkthdoDVbEGSjKBQKaF3ATKTMmGymAt7pNvYeFMApKb",
  "key20": "64a53Qog1kRx7eHPVtZxtWxRUHPrWYtiVoRtKvEqfEmyx47VLLDbFPTdLPd6hR81pKcQ7zfP7kNasmgUHCMS1RK4",
  "key21": "2TWRrAipywf5EGnC6ts31DnxqR1XEhPSq6JS9HdDhGdVRKAnMhc4fFPD39x33PXY8jdgWgfGzDmsxRxkFTyyxmzR",
  "key22": "4tKtTtTMA5n2VdsxwNppEhp2qVMtke1S6EDLmc35QoifWJnkJr11mxRzyhedATWWMKFZPvRiwLeawy9Hpu9JTnt5",
  "key23": "2zBdtyaoQTzrfuJtsqstt9RvYH6X3gyRvYkcRsrpUAkaw9sJ2MFjGhvkzqGbqqXky3K2ETQhL4QwHirtzK6geHz5",
  "key24": "UJhL7517QvRdgpBj2GNmGRsqhXBv3tFjDFsBMUi9bSY4k3B1AfaiwrS9GTA6PWyk6xKaLNZpVNsy297najh57Rf",
  "key25": "437q7byhNaFGa6dtSRRj7TenrhKdtJzfr8EUCVAoHH13mCr5kac3dNjRzuxbgsZ8QwrRNhXHG59wZZ3veuUuT5PA",
  "key26": "ZBK8CTh46QUF6NwyNK7Zoc9CEH5Fqx43PUh2VB7TxqYCNmyiY1QBX1iyDjGDaeFbhpYPan1TWVCB5y4VSdFBAMe",
  "key27": "2TaMXEBtLGjqd5RUKnqdSEC5yzkEzFhCTTR7rEEGKUdfcuvYdb3UZBgsx1pzHpWsDXsV7fFUHhnNnhkb8tjWcTHB",
  "key28": "3CVYMn2AkhZXEEHv7s1GXhiArKHuZ8reKP4H1BTSsYoKUyavTxNb8LLcTEUe3DFUhNWPhdw461fvxLAaS9CRXARu",
  "key29": "3YHii3Y4LoEnkQC16eDnsagPf6X7p6rP2rLGrtbJ6uRHkywLCKkdGtSN2RLhDC3u5diicMpQKDECjnbXQ9Th8xBG",
  "key30": "4bwim2rx4Cyf8TRdQs7KZpdz4p7aPPK3FtiHFmNCsjMe39obMZRvc9i6yGcwif7es6516zNaadUZYcD6VxMS8TrB",
  "key31": "4BjTHKoiWQ6qv8xwrjCvVQFAjqFeqN3bK1h63aXW1CuEuATQNpdSj9uE9JHZJL6aBuwfqktEkHTyjsbQRMM7K9Cr",
  "key32": "e95unPBT993qEBu3bbAWbdeUDovgiNxAj77MkqJ1iooZKxub68WfbZ8dKWshSeSYbmEcoEvCZ2EJibuJBCBVVzu",
  "key33": "4eqCpyVcCRL4weJbFg2A2N4JgZb38b2p7ZabE6H3cozvhbbJbdxA1EFGGtK8dmZvHGEmbJk3oxznW1GiNp5yQnv9",
  "key34": "3fAh5XT6cPBEJUSANFaeFu2P12yZkk6pdanUVm2v6bZHL4V4H7UMudFG1ppFKTwYk1hwTZ1mpE6XceEwwu4SZdaa",
  "key35": "CVxaPAZ67vuXfKATevuSJVrhin7nNsqy8VaoJa696Zk8yMRshT3yQsJyvD4saygmkKXRyD7iV9khfsdeWQpn9VJ",
  "key36": "3x77ir9oSVJM5pqFMsTnnoA1MABQSVkmDY1BkY8pZAZthkgzVLT9LUdMFAMyTVPKogbJbwGbjp7fjhDK6CdLJeGJ",
  "key37": "5GpouRshVby7N7QMa4rxNGGUk5u3Qguqs3XsXCMnyLsxrys3gXQPrCS4zeE19acGqjKuFTjzfNVaPsPi3shRHeHX",
  "key38": "zc2e9RM8WD5at68CFuCXYzzmSr4Rnanf5EHQhz3BN3Y3uE981DLcHy5fKntBxgTQD1kGKsNbkx7555NH5XH7TNA",
  "key39": "27ynQ31we6iB1b1MVYD83phmueyynfXHebAjeKFj4hoWzXYYGLauUvLHkJ7C4tF1TTZRmAwLWkUTBimWaVYiCzDW",
  "key40": "4vEJc2qnXwBbDVLW2QnTkWf5ic9KSCbYedgfrKXMSLNT9M39gn94QnazscBQ11Gxh122ThFFPJ9yWMywa4b6E1rg",
  "key41": "2sCipeJxo2p29tvbVMhdwj8s6k7BvEJPJwNZhCoSzMCUcL8Gbm61YLgFMpaR5NC6tU1sNSZyz4XjHhXyuiZTSeHG",
  "key42": "5veUxxop4WgBF3EYGmYrRMLvUUhDuS1Nuqq8W7Qon3SNpUrxdqmDvMmjCK2M9983v6f35yyf4nRSYFNGxA8uKohV",
  "key43": "vYkbrU2rioM7BDXw9wCc1uKmkzewozXinJopPLKYz852TX2UopZCNzWU4VpNCwYo4HFjSBtTrDDmaaEcGh2f2GT"
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
