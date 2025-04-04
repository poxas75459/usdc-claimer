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
    "5wqvXHM8n4F6za99mFe6axNzLL821FJZUSrWKecae82SemAQfQq7zaLi93dELa3Z5dvRVkAoHD2mMtA9o82mzpzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31awW97AuMu1BWxVTT4uZcsyaLfw3EcEte61SVHUHJemQVhJVBjckAXL5HFvKZaxTnPwGp1DqCHRpEDwaXdx8Srg",
  "key1": "2oiapkX7dn2wsEiNEVCVQjLjfgYv1MzaScUiiQopUyPJVF2cvaHi2BS1RXDVCs55nsJCn5aaXKo4koj562xM8jxa",
  "key2": "usv4gVbCbRJeFAG2ZKBkoFYqUM5cA7DrTQ7MnAwaqg3esdd8uZpgaBskpFg6pR5Qvzo6okpCYcYiKv7HNULKjGc",
  "key3": "4cfhovTx4pcPmqBN4GyheErK4yad18tVJ1Vh3cej5D6fHgboX6Z5c4RSgYMCWyomRVihEjfAPB6Aqacx71xyTLce",
  "key4": "5p5veYAbtNRZgMcfkhg8dUingUrvQFk1N2zBxRC8YPGt2Kjz5asRFRCQJNtRwfkNqM9zqwVV2ec5iUbqAs8hWVg7",
  "key5": "5wAndhUeGc6dws6btsaNjsE9pryURRAwqhxAJRWcTnSuV5HDUPfRqqRxMMrQNLWFKoM5Ju1jCs4jncNWx4siThNY",
  "key6": "3gBbghVHvFzUTv3JCMpGLrgMWdYza7hndC4wi8VRcMTCurfUJKtraTSMeHhxP3XgmAKSKEdDo94GVCe3jWDeRQ23",
  "key7": "3CbTt24n8dF5bJRoFM7SmsSwT2SXtFoQBZKGXV13tHYt4bHenpTSqCE2xJyrUTcXckiZBWyQTFxH3HGnsJ57jKNX",
  "key8": "5DM8MB4RrSabRvCW6d3R5SfkUhSr13Vm5pKmPUSuZYfCwxtQvEmH57yA1CLkRxFGus6Ln1G3E8Xe6Co8GzDJJEKu",
  "key9": "4Lz2FtWrzXq86eg7WZQQbTHYQhvYFNN2kBvskVUGuCtSosDCUvZy9LMQMka1pUmtCevAm7QdsicbVHXDAgwdGe1t",
  "key10": "53BBACWV3PRshk8WxM9Sn7BzrYXVLZSfBZNnxF34fW8Cur3MAvvvPF6TQdMSVwpBo9fasYjQNRPeQD2fH9qHEGTN",
  "key11": "4vzWwKcbfz4PhGWc2cQXAMd2TyR5KF9gwUFzB9GDLbGycCZs2WqvaUgVivAdEBpDGV8Q38uDpKFeUjG8aU8DSzGX",
  "key12": "65K4ffoFX7CVqYCBE29QYt4q42wJ237Dhu9NouRfNJRgVL4NQShAQyDrinjHRUbPWk1ekjnk92cU5gGDK9xA2crj",
  "key13": "2uc2YgUazqJK9gd6u4n85FFHqTwkQwEbPHEbYGdqr8mgcmUCgKoknkNp8wqJc99a29RJB4jHJ7qd8jS1QrPJ2WaK",
  "key14": "4yZnSGeXzex4s9aTfyUekudQGkuBU1W55ZPXJxbXRzCVHeTpsEVdotUiNFEBng1wygjzhUnB8EMfRuCp8LytVejB",
  "key15": "448E6tsaebf6sxUBvTKSWUXbd1HBB1eRLfyhYrREUyipH3Ykn8VAqYA1mS9nK7xvA7PqnLx3tYGityea2HHiV1PF",
  "key16": "2ddMo3WKZRDNLEELvr2QMcNrMNNHb4xtQXutwSSBmJxGiWhsCHkmxhC5iCNkS5kC5i2trFtrKAon3Wnj5XP4EYTN",
  "key17": "5o4R3YkAGgXcojgeAtcV6fVrx9PbedBdbUmpwaFaBzC9kRgbLeF8Jo4pyuuG3nzEkxQWpHYjycvAmGCG7XRSxRuH",
  "key18": "2uynWE2wehtSYqdTxRmadQP1Bt67DuWGmLd59nYaKLzNekB1ynwnM8T7NdiPrvoqVqjLMHDjEvCkT1jxFgZy799o",
  "key19": "3PnM4crwnH5jYdgWiFHDynVD2Tcxu3c6mzKec6NWQWwY8Zbo2uSVwWSMzwXQWrSQyjr9jwqoQz571Bu3HQVKSyaH",
  "key20": "5hjL7HmJopyomoC8FyEtVtXfEjL7nwjWwRXmr4AuWKzogVHfT7Xf8BGm26FEj12UHsJRM5DBqXLbxPEb4iFYXJi",
  "key21": "4tfs61fa9TwCwJdyEkUBLppXTP3sVYCnLmpreKTJ51rAVtuUTAK87t7a8gNBnGc1MMd1Y3CGQMpD9GWmwA5TKVqj",
  "key22": "2UCJAq7Ge3z4tCXAAqDvWJCXE1wbEiYj13km6pBt8YnSVQhiqPpmnKkbwbnzKExVMX9ftDjYt2KBszJ98d7H1Jaz",
  "key23": "4k6ySdBKAh1i9msZw4mPvKhBE5rsFzcWH2pt8igcCUik7wCErBtTyadFj6i6ArSmq4YBBZ7K1daGmzurCWFQ2JE5",
  "key24": "5LLuTaDmgHZGefzZYbBU95sLZRpSds72FeufnKLC28sp3FVUuobVgoBLPN5T9hNBWTeYgaQ7rgEAmv1og5ee9cPv",
  "key25": "RAmEtdzBCExqkBP9vR4M6zuJcVXn1SFGHTQ11FfvhRumcmbyfDBVBGA41MT7jvMR84qZ67D2w8iuvyx7hSVCSob",
  "key26": "54ZAA21jCEzdVSPL7BZwmP4MeS1uRqB11X32kX4aBnvdpezatoBwvJUABfkp3owRAW5PDTCjAFHWRPE2doxNCWKy",
  "key27": "2cFGjHeNoVsacinGv6K4wJKBkPiLM2gtvtHp4tiT7fc7K4zik48dea5Z6fcShGzzyK81JksrU35bk4LRQRS58sat",
  "key28": "4oLowgZDTshuVhZpxRhkj2PXeWZzKcEvzkcmkyvsZx3gLFJakbv2aLMsnLiyCa7fhCjWAu9gxjmnMo62nEPhTqa",
  "key29": "em2tjaNZ4CSBDr6FvmVm2VmkcSZFBgDtbSqBTLv5BBpzaoPhqNnL4aN3eAn2TuLkuo3sBMDJ9HTzmUuuSbMNS8i",
  "key30": "3M7HXpqrfrtzDYofG1ynVxmwF57iAVESxZk6AND74eGQPJz9fPCQ3oA3p5xuHsojvEmciit1pScovDDgEsCxvQ6e",
  "key31": "51eB6dBRa3QLEZoFw5WipXu1ZMwnXNCN6ADbdQPjg6vqh249UvUKes7DojPctL8Qgbx1uwfDvvPAxQme9k2pRvQk",
  "key32": "5oad6suTx9KzDaY8ws2oLJjrf1KxQtviUyDVPcukhaJEzerqKrgxDb23d2m92cRc97oWgb6nPaiNmDtofQMPsXkm",
  "key33": "5Le88RtWNVHpxAX1XsPFHvD5cYSBxW29yFfgHss41CQcRFZyLE3V9gn8sQhAgvXBHNW1aiphUEoJfhXC6jZLFQJr",
  "key34": "21V45gCN3L6i7urw4RxooZuqwGKgLNV5MLvHg44pPMyJndXeYcwW9SZiPB3T1CJbYLNnnxbBWiTqYKjdLB7manzm",
  "key35": "GriHeWnzZtVyT8S5vb4LJNmite2jg22BmsZbFQBCoYgouA95DyoFhwwdFSk5wpEnrgA9V8dbzqikTa2H7tfUX6V",
  "key36": "nNb5bhLEqAhjX7Sf67YCPEpysXzctgVp1LegP5TN49kwCnFhzoTw48UNsq9sAbWkSMuNyWS7KGHoizT6o3vtGH4",
  "key37": "43q3ou8b7MruYCvgzYUDrXbk9NPiUpUJfQ6maVagpMoLZbgqt27UkiQ3FoV1EDm9xrtDD8RRqQPzkm984ad8EBrJ",
  "key38": "56Q47vP1nFoevmP5KFK6bWRL3ajwi4U3vxd3X1TaAatwCvT265ZUxj5Y4g1GJpX7iMdEXTTVsBbf27J2phudPxLH",
  "key39": "38RFHSuGmjjjtS3ZnpE2mvLKKCfucUxNqaLbFLYGBte3typNAJQ8GXFFwSf6pfPZvRSgE7GYTgocLDk4StHynMKK",
  "key40": "erzMuTL4JMaAxMvDEsuVaH8AVmgkkkmsSxd4sifPmgH2We7u398LhzdSfy625V6DDWbPJDvmGpojnqAvrynkg3u",
  "key41": "3PNUjoYHqxXXqgJFWSLpouNLRC13sWNJ4tydDgcSz7gDTTUvCeLXutQZQjssAuyZa9Mc78idgDvTsepZmhaPexco",
  "key42": "4yX7WTxhWmhS3upHsRdm6bCKGfmCu7jnd7aGDXMDMgUha1jUad5TNbycCtb2wvFKuEHVsPHhdtsB1sk6NHfiB5np",
  "key43": "3q1xoe11LzpYPT1cTMj24ZG2m6z6wPvByRuAk3HpEUGwf1QfjSWRRTShM27NLcVrhf8jiyyfPSHgpdUXZBm6NyzA",
  "key44": "4SArC7fx2iHT7QmPeGKPaQYeDDCcXUEPWYwD6hYFZ49JyjaiZsXxrmYfh241M1ivHZCpgdM8W4RvJe8TRKi1SgBp",
  "key45": "4T9WGWHVUZ9Xrnjhr6jZ7BhqyhKQVAHLsT6sq8SQc2bMq6YveQyzA3C7acWndvrSCx2jyKWeK21UjQJetvqdizio",
  "key46": "DX8f4tA5fDS7BoADRgBQ8vCLHZfKnCSF3Jb7GM4EhqWG8PRtbKE6ewBHYxcnpZujXDsNRBWejcDwyF8xou2vbJY",
  "key47": "5GaCBubf8smEe3dSWVV1qfZ3d6SatzPqwBdJxJWg3gt6bhbLUJ5T1qwuo3gz2u4yk5TJZsFY57k6U7DSvnc122bw"
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
