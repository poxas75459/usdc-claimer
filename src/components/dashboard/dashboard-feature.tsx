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
    "4pZ5VEGk344gyJEyMq6WEJDDjMea41PBHMCnfggJqAnNfb4R81cNXN5imX4ACt1LMBHX9LQbjmnnWMoT4FK4Gn1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cpibHmMwbVJgy9DrW4XDX9jC7aFr5xaV5ouJ1FwLZdiXK4vJLorfBFJ6F33YWhzUJoBexoFW1FDdy7gAS8vVg7k",
  "key1": "3xo7Snns926XumQcL2vswGwPhEsaXo1eJJgFQzyKbEM2H4ck6E4u5W6Y45344ohq2KeBEnUbPdWsKoMWrrWVicZe",
  "key2": "4MrymAfZh4U2CKLHBPEcRTnTJZ3C22KeFUPMixTVRarSF1KoHofQWaA8yT4BhZHX7mdpbqoBpaw5Nd4mt8jXXKy1",
  "key3": "2SYF6NzppDf4gQEoyYkgn4azDAioCDCDEb8xhrow5qAJBECM1tKWmnFhQpJMxJiyk9Tq91B1RxhQUCGyCD79zHra",
  "key4": "4UiH6oFtyADsQdXUQAV8kiDc865N5UkrBo96X66Dpv8DCKEgR7saiuwp1vATnwAtAJQz4U8yC7sHoNfh1njs33A",
  "key5": "5RoMd38BxcwfsCzwytS3fQeiRKXqsafSUVgFv4iBxTHatcFbZvbkCsBH6xvPKsAyCQtve9j6joJdvHnMJJb5YFpE",
  "key6": "4X9rX96u8sV7DkRFA4wLGDDcqAZzhGjj3SgxSFyNibFLGPqCLwgjvvMGuzkJh6hNTCEd6UaUAvb6MjPrK1KP4Z3i",
  "key7": "2YvrnXvajgzujjNjzvhtyfZwNxnFVStPFLG8m7zGnc61bRQbyPdj19S64Lqmzkh5qqcZcNxDnJL7fXieNPYQqu9w",
  "key8": "HtaeJGPFqBcHD6PQtWSXaYKFMBS2kiEWbpDyyp2D2rdm2F75uWi6HFA4Xjwx4iki1x2ELbhiWRkibMePDaY7Gux",
  "key9": "2iMhPZSbmVzant8yFqs582NQfwoEZCfXLY1aR89uuGASyMDZ2f9VTwtJvgqnPvVNQdq2q8XGkcA92rNV7h8h89Vc",
  "key10": "4VPF6iB217GFi2KeKsnAgNwAwPy7dkxCaq2sxC13rF4PbSoBwGBunm1oXKP3eGk7WqotyerVGgn4Y9Pa7Dq6oz6t",
  "key11": "21LeETP8xgZGtcHPyPcFTjTVhe4UkFz15A8HcuSTtsV3hMkkg6JdQAS1knJNy59oZNEVvoVPtPcnADizDUGckKpp",
  "key12": "U3Km1kvmQGHyZYRENk7N9bKEH9FrCWYmfHoecUcYhTCBwqwC7dGMm5aHGi7Vj9BoXKLpgzR1pu79MTmNgub2tKS",
  "key13": "2hZRHX3A5SUaobQrNWLeB8x8riQALf2tuVUYj8KJ6rt6feNf4zje4mgJuY7zAimtCwuanNS9vDYBiErdeQTxofZK",
  "key14": "5LiDi3VFLQQhucNWSfohbygmbGXnjguxPbkEFuDeDDt2Tzi2ASKNWer5ZKwEZNcpk4dRjju19sdqCLbBFG916bUw",
  "key15": "6AEDUfE59hPM98DCWsJHoAtVZ4gmyYSFhDf2jTCstY7m9hHrNFv2mLFxpiSwoUk7rV39Q3enmjfZd43Ydjxqf5S",
  "key16": "2VPF4ZXrDqPa9qpE6fw894HqaihuMa5TTFvgoGF5UVBNEmxHJxGwu3MkkqMyyUmQCdasBPtngCMjAouxPaQ1oUpq",
  "key17": "3uTY77oBiLruaEVPT6Mn5MnCeP5aeDJDcT9UZ83EThRDSjtMwnGS6E3YwD8NrtQcrfdXTDjUAZdR4sWv2BTevBtK",
  "key18": "3VsjAGhGpTzdY2qMzoZkzdkLfPcZm5BWUajcem7UrM3pAJfgoRFxNKohhBJPSkciyHZHHQheKSohLCyCugdVegcv",
  "key19": "4PAusej6RvEjLYbJB3TaUpEDSWBp9ijqNXroT7kjz3688r84pLWGZbUt92Hwk4Foy5V2k2fKne1odzN5Ycntw44z",
  "key20": "79GDSLn8Ms7LE6CmsSD8B3R44mBp2FNgnTrAUtkUxWzhvpJsXyUuYNKi2g4EMmYxQT2peswa6vywhiDCNNihPgS",
  "key21": "3UXcKw2K1eMwkLsui5KfC9xQnDm4mv2o6vSjg7EamCdaRhAYVcQwFXsYFg79uJcZTgLTAiQdBXgxPCrnTdjTjMXA",
  "key22": "5zT3VgEip92zduX9vRKR99uesYBKG8JaeSZFJQqcq9REwrVwXfa5TuyBEhXUELu71bjygteqbE2Zb1Lk5pWh7Yug",
  "key23": "3kwcvcpAA6w6GrmZ7xsniy1A46QxoCXsj9tyfNDWh12sjCgfBwtnnjhHShPfd94tXETBh9A8BQzCLmGUeDaNNnfZ",
  "key24": "2eAUHscWhuUTTN9qago4y6x5jYZkxP3EaAQVApgZUVtineAFxFNrDF5RcDATSe2R4ButUULYnKbh7fWyEJESqtiu",
  "key25": "2LbsS7bM5CmvQgoU7TgJLHBSV62V2aGncEdNoceWEgc85H2RzH93iYDDbdp3esVdNzQjRNfTHAyMYfkurh5Vio7n",
  "key26": "5de7qpc59JvEBHpCE48rVH1FkKeg88oUxEcr7oCi6UUW2gScc8fFJttTiZiCoo6u9Z6eJc4pTDSBvtLx8H9UHU7U",
  "key27": "2R65GHLHcwEWfF6eKqDiV6RvfeyKSZBfT2nbZq31zTBwLJeoH7K1nzyoJsisyvqyzNpb5SfUMuj7Uyifh6vqSTdn",
  "key28": "bRm2WtJMF4FU3vBnugagcvVB5a6o7JZj53zjS9FbjHMrfZMvjTCavPvjHjYVian2fzqH8wnsLxiiVBXzMnJpAxY",
  "key29": "4K25vQgqyMLVUi1gdj5EFcghJckKXv5R6D3ZTKTa9aGg3JuA5XbY8qkNqfTyicCe9QDbPLakau7ogLMTka6iQgT1",
  "key30": "E1K2WcvCduy6kUxWPhWKjN1UFobd5axjWqxQKGFKXkwjtdXVjjgBDknbcvX3HP5ZJKWDWRmkY5hJsbBLogrTdLH",
  "key31": "mPciWsH1tZhC4TbMHB2xZqxc24cX6aoXb7qRTnZbPW97VToVPn3rfVb3dyYf8cs5YQwsX7bkkJMowAeFhaXGyFg",
  "key32": "2qepepKN5BtzoJMS1A1FXbxrnYwRj22kTNpc3bhhLR7J1uuX1i8BctziRV5BYviZNzBjMP5f8AYVpKmDHKxdxr5q",
  "key33": "BSp45EaXTN3CcPBCeWo2sRpGW31anWop7YAXsfJAyaPL8XgJiTaMFcTs4kZ7e4FdP4CuhDWrF5xXMaJHveb8mhU",
  "key34": "1oXxjpSkozEAut49EkEGty4sG9mL3xdYe1ezVrEA6aK3xN1USqadnsdGGg6VYh2oespJwaSB1Y8P1ht54UPzzB7",
  "key35": "3ktZu7H2xJeffJfjdVs2YG6fgUHqpLfWD1sd8CdoHGhpd9CSpXkreM15YGsaRCftEm1CXcucZS3VmqaDjb4Da98B",
  "key36": "5JCRNCzTnbmeSDkcZzduwTsaKydqiPUjwPdJZqSwgsfET4BCXcYoM6dLtWNYst7RVXF17bE4gMHr3BCXfvmgViwx",
  "key37": "357tVpgzdhcHFzDdTzmAfh41NDgqSsm6qZGta8PywzWGsT8EEi2fspxBLa2zGJpypEoGwLA5JejdPMvvKFcC7572",
  "key38": "5LPh3EFvE9HWXhmSe5DumavyhiJAgGdQicM8VHRDZ6V9ZEjVcVGozvZKizXVgEb85nF9bf1gTe6adCLC7xqu2uLe",
  "key39": "5r98sZb87hF72RuUGTi7d55gVUKWqhzADxvrcPUUghaX2YGf3VzBY36XRXPRUZyT8o8ku4Cq9dCkUC3vx3dgRnZ2",
  "key40": "4ZrAr9Sofnj3GXHSDpJ2BZXVgv3m3Hh3uLn1SPV4tv6DnpNbqeUHgMCUT9j2jMZYwwVHVPzZkFcXsGsCEzMvr2gq",
  "key41": "4f75p7vEX4s9uYdDu8ck5qRqN9y7zsTfsy4VCccwfvQB9xcBnoNbMA2zzEMosd1Qajz7RPqt94SWRfM1gztX1a7o",
  "key42": "39n1wmoq54sWqp8ABchoVgpcSiwjsStbwMgk1ozsgpYbtR19mgYu7g8jMeJZJduHYPoTwTJgR2MnhzyAZbwahRj8"
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
