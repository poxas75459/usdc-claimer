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
    "3gTp9w6d2e58uUEM1K3cuJpAcgZoDArYLw8QqL7pWeTZhhPsbbtTSq3Uuz2meXpstvPSrf8JTpCYBj8AakN2Nx9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pY1Ey1qsjyN7Az32AttV1VSfLUkwfhamyrYuaEwDyc5iUYgfHTWGNzP6oAbpYv3bo7TCK3aEpfBEp9hLKXjcBXY",
  "key1": "3dCke2MVPQWiMcj3DrfJuPTHubHc9XhaGBHXUyXALdLXwFw1T3CrdHfwu6DHZqDJkeaM6ZAxRkReWrURv7DZuAQu",
  "key2": "5Ye8QKnRipc9pjDuvjZWubeTRw47PFVx1HHUzeDHNnStVb6z5GrbLhkiCcpJLRMu1WFa43Zwsdt9KRNF2F3T2R9h",
  "key3": "2XdUUhS8T7y5iSoXnFjBmGDWiXyLtgJqm9oADy6FnmP6VM7UfccTF1XtKFFSRP6zjnUC2kyBfs8DBXENBD87BiQb",
  "key4": "7LYEk4qcSNCiLcHj1Rww3NL4WwGUsSdnrr1vpZTU5FTYYuhXN5pCRgevxw3atULfyrfMnq1EKww5ZZfdFwEXScF",
  "key5": "4fvwuBkLoLPAGEgdHgasNjSgEC9SWuueY9JDp2hmhSjwFyCKno22pxcqZRPBQtsug2n9KbXpX9NC96QPvkpFdcGh",
  "key6": "679KNeza5grq9TJR2GgYmDf3ibVhGCeQXaavRKY2vpxP1SxyxWkyM636ML9PwWfJnhpS5Y3CjU7GLy1Hdc1CnZAi",
  "key7": "4eogJQN2pxmANs5d2Ah95t4Jgp7zZ62XdXktrEDpPeP1msavk7gXu8opYgPxyDvzANGmFtguxQEGSRJFeEQdTwN",
  "key8": "Wxd6zMppMeywTu4GodV8Q44bfaDvEtaqzkEjhe7P3W1UFAJYrN7Z1ihrE5bPgRKXPBzwhvx4R1V4setFoH7hmqL",
  "key9": "RDHzk8xrueEKiVVtwPzcnW17sz8H9RKAz9RuodsvjmFpC3GPGMPMzGjxy4cmj52HJLYdNrQHiT7Rvffycs1o7DP",
  "key10": "2dwn7ckV1N3b6481u6xqKtzDkGGM83vFDvgF5Xr7KEjU8x9frTSFpCNihCtzzwPDLYKv8jbQJ2Vpin8Wba8WUgBQ",
  "key11": "2UBSYqGxMnqzTFSbitWyFhp2VNh6mAZyKJeUo6iNUsfCruqGgegSiMyDoNUyx17A7BZ8EaK6y3PapummWK9C1YmY",
  "key12": "4QWS5S5UKTEJimgvW6USXwDifEpsbcAquux4QLjqJmauruFz1vgnpsTAuxEr5uBn9wASjdrizv6kFNd2aacZpVMp",
  "key13": "2xKRFNti9Mc2cTJemHUD3Ur9Y8iWv8NiQmVZgwrorXwq5DWtfXsgZWbjLwibexMGLrATS1N2iiuTHKztz3XgcFdm",
  "key14": "DTEZxmSChstnzcfPjs5qusPREhwdQguaocgQVrmfuCum8buEEn4y7zjZaLTNu7rQRFcbpBVthzh6FKntGFvXTmc",
  "key15": "4H8PxVCPebFf6PNMrGZj9gcrKXjihStUgfmiGNimmdBK7k3DYhSRYMfoV5wxUgfUUv5e9DNAPeDAMP83BsdyNat6",
  "key16": "67P2TTqKGLgFaEk2zV8UToSLKjgdRWXPaRKbmAzFnmTqZgVkTebNvrNP6i5jGKeZPR3gbEqqM46CjTeFFwARS3yW",
  "key17": "53GBjQbNhnjHcXZoekd4CLbyL5cdEbD4sbtbgcc7TcKN5baweQ1Zy3rawpWohv5zAhE5JaVKVUKwMchyNZWQ96Sk",
  "key18": "672MrzKyEZSbCHdcG3XQE4CPGqaKkRpieXfzEx9x78t8AP5sU1d2bxsy7fmf2AcVb45JPTNXJBqNgP3K4yfF7owF",
  "key19": "2Gg3Bp5Q1JarNXkHwBq1XpaBdBnXaZUrU82id87L5dXzufEcu6EaUbzCm5GVss447UGSxgkxtQuU4amAtS266gTh",
  "key20": "44iyMYiFDeWBbPGgYfDfi89MmSGCSa1LZ84xd3QjYT3uyt3HdzJ3kALYk7XYoTMVPQst8bdPSofrUP2dz8oJceib",
  "key21": "461adxaPKdByaSrFuP5M31cMLfMH81emJdCoFz6fM5JeLj9y1gHR7Tu2BFV15FRUhceqUQXRfWFxLGoSNd6EPRGm",
  "key22": "5VY7GK8snEWdTRpW8Egg9UDqNj2igiv8XiDdJjdXYEVzGbD2L7phfjfB933uXBvKL9HGJBsC4yBXec5dDbbMTRhR",
  "key23": "5oearJiUpcKsnA7YXwjAXpwVTM5P5ALKRvLtEVcZPhVE6RRxJj6i2gQBzcZYCqS7nMd6MrMCZ9aUM8exKMmhMa7z",
  "key24": "2GHqd97ym8DR9rdXnzHwxdB84cfNVxJJkSafaBE5S3nJJ2E4tdcUZHXxtUo26TX9xD5LYqZpgoxtc7LVXQHR6vdi",
  "key25": "4ufo1t4FoiJSYey8cNUUDYqbEPVTEfntS6ywcZPn1m571mDYoaVV1AF3KcMMDMaym4ELUtgqcHPSxUqZ81PtLf88",
  "key26": "4A46KHPnh7fKStTK988dJmWmaJ8QJFdxG2caZ4344mjqAS2bqtPhE16YiVpDmJjnXgJvKadCTonah1f3aqyu85L3",
  "key27": "4NiJkhk5P7DNZmmSYBvtQrsHcGr9qonKD1cVCaaSDUevfScme9GoQaZPoiiFWD8Dxcdg69y9DjsCB4uc1if61cwT",
  "key28": "4ji3eMxyf9nsZojs2BR5gm79r3Yzc61hXqnyWpocWnw8JCzg6xw8wfHw7BqKotDarCsFWjDo2JUiAGLfs5TCNYAC",
  "key29": "PPjTgotYprxDaWTg6y7MSxiFvWgvCngawEnmtz9tqADhyHoF9C1pNGE4upWvyh9suLGGmmNmtkwDRiGN21U5HGa",
  "key30": "3CCE8n9G88iu7fXA2aygTE1ZEbTqXqeAaA6RpuDPs38jczkY67UPXE2fCVJtFxLdnD5eo7uBpweyuXsYA4X4U4Ty",
  "key31": "46E5Q889Jb89LjnY4hSPH5kdE6VG7YPxhMjKMupVFMpuipcFiDFeynHBXdKoV4oVnX9kzVHfmGs4kCuJ5qUjnPjq",
  "key32": "4uXeYgFXDKNGg4kdJQH6AGThpQ3a6wzFkqCQ6cG8Xj9Lij7tQhs559erhscDpnuYVsWQeexHKsduWrx8CT3bctTT",
  "key33": "5cG7s3zbkwWe3iaerVD8iyMmbULEnrWoCrLb8SsGscFGKp3UCr2Kg3bb7nK9vTUQ3aaMFfskuijgadBfTBkuJtDo",
  "key34": "3q5WMnMve5L8HRn2kTNbaN9dNEuEpxFnXDxHpEbvsqA2zzts69HuKeKwpE1aDHPC9fMjBB4br3e5r14GdxPEAT81",
  "key35": "31CstpMbf78SVNiEVYfo5skRAShFhJwCryRVxdkKT45ZC6bcmLPiBPVmkcn5NgeWuQ1HrpZ1AS8E6nh2L1gRGSi6",
  "key36": "4ZH4KhWF7UHxruTrrMdMuQDDY4VsMADXqHonWVWRDbWZetVxSJNaVdB4iiRFobuzqaZCbJxHbkGTSfxkn6QCPtbY",
  "key37": "4QVnxT6fTF3HtCX2yB92iF32vZK7LSmUiCB7P1FgVAjfnQ2AyqrDzLVEfjcwGi7Zn8mpcteNwNbZKgv5woecMQeF",
  "key38": "5R1Gp4T8EEhpxXXJesUJWJrfGxWr5SrRB82fcbjsGysaMW5LumP9W6TbxptK5R6hxJC7FP1yyTCV3e4C4tZVei6J",
  "key39": "2VwashPk3HUtj4LZ74a6vmWkcuKG9EG75vdRZLmmcQde2hwWcsk3176rw7zibwxikrq1z2FEji9Rsno3RSnx9D8M",
  "key40": "4Q6CKQvRfxQ5vj7UAvcJy7jASVwV7ksxcVksBrm7dKcHkBZdanGWEbmB4iyksS2Vx1AbazY7cLG4ceSGQBwmrw8D",
  "key41": "5dKRZDxQZm2uxJYRUB2cDsju28zai6C9KjCxgWPJcgrE41Zki2NDCTDsPLEzoHjkP6R478DYqrqLJ2GKysEERsX9",
  "key42": "3GqW8cRSUeKokiMUSbzwLLmRcov6zeBB63rPBDWnCvfKoZPw5YiKZdxtiXzFTXVwfT1GfE2h1LDuavPZVM4Q125f",
  "key43": "358cFzBD5i7MJhLKcq7QWSkC61h1p4KyZwAqfLkkCudH2GhjRCSgnHF2K7iXPgdCBNXoDiYuwgGgkibQr7cAJ26B",
  "key44": "3qZMwv41VxSzkvX8W1VoPcvYgfTJmGbqa98How1ADk5k2saZd7Mfi7g6xSbZ6ru4jtbA21fMapUJyJG4QfirUuCV",
  "key45": "2RhLBRDSCBV32DvPABNWoRtaVFNQ8HLyTVoYtaX7E1fb9Tj1K8Uz5A9hH2XekNU6C3hNYZmiqUS8aGEeVSgTmtFM",
  "key46": "2mujRqiaU9oveffLsqjM2NJHTryFrU1EDcnoEryuFD6V4rR26Ddw3R7vC2jKV92G9qmDhLowstTc3JkquMQx3JDC",
  "key47": "5eMR25WN4s9JdABrzjTzQ98DtBAKJjkmuabG49GqNPrWtoXpFTMVs9e5T4KwM3ico17UhT7T6uHsEyGB7gDhXNHj"
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
