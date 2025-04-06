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
    "5ahWW3FbEftnjss3Ck5bQNsj8AdSV2D83BtMLL8tkkNiYtKG4ww318C41qMv57gfvQAXNH9W87ufZHzTF3isiC2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wGPsABsugKq5JBVXsoWpWba7m1EK9fcHTWihdyECvHgcL1gt6vWSk1DxPUYkErMDuaTZccjRCth8G3HE9Ugewkw",
  "key1": "4gCrCbgQ4JuoTiEwpv63NU7gFAFTB8aidjJ8uMi28N31ntQmHzSWum34orBpReUEDK2hQi5DFZVGvwXHn4bMQLdr",
  "key2": "3ELKxqGxB8eosghTW59PhK1NcdcAQxxbJMWZMLa9VShwsqb2gz5WeZ2hF1asyYgZ7Shn4j9ELnE8SVH1squjGAkF",
  "key3": "7TKbd9GpxH1pSPa65wPdoRf5jcEjyGCe8CyHRi1L6xUPqPdx2wPnG5iCPkVaX9TrVyhe5UQLS5PUxxHe7ka83pP",
  "key4": "4CHd8nbQVnJtbR9HGsNi3CpxqkKiKG7FcDxgb1q7nhRMWg3EvtD3jJEG3wqsfRE3W62d8mqBP9ajb8qwKVrA9tZD",
  "key5": "2Br3sQphodZeKv4kzNVHtLwayAgjX6U5KQS21b4MnAbAQd6ZK3WuKb11xaP1xX2UbaUCcre2mPUTZhqercaGVhWX",
  "key6": "Fh1N9fZiW4eNvKhRRqk15qNdWaZndAswZ5u2ZJcd672pAnhUwEkK79GfxkC5a3k7zdeSwLS8jBBT41w9i3vy5Wd",
  "key7": "aQm1JHafUHbTj94E8HHPArY6zTvCQt5TykqUmVj6DaXCRb6fpGWSWXuQxDTpNkHT6MZfbViSq4xPU3ChibRCvov",
  "key8": "2Txh3xUPRdPXdppXtPUhA2kK4v1YwnCFDs8e6UA3AaNRcPi6Zrdik4JzDQewkTSiRTiGxtKfDZcQzSEZ3WM2Ywiz",
  "key9": "6713ebhnczWNicoCdCAyXri8rmC3MobZ4JKCfAHqk3cGYsDKBRj9NnK1bw5WGU4AZofqsJjDrSSRBoovvCiLKALv",
  "key10": "4aPqMdojTasfiN6RwupwXHWBtmAnfwAV5ZP1BdrMBNPHnVx5Ss7rbzti4xrhaL3qovq1tPKoCAWZDrMHYkMTEXDc",
  "key11": "YyzLhVuju8W4yDBJfxHJQzyf24NTUXivcxxA3E6LUM3VD1irxukLYeRoPirgd3ZsVJkGHJkHNanHCb48we88BXc",
  "key12": "5Em9kfeojqGHtdHQsk2FTomrQTBTwKb2dtFoWfxTNEJiJNDuP6CY7Vz1PtG4fCQRiN7kubbiNDgc26BPEGcgk8cL",
  "key13": "4VxAXEU91cSn4gHnZ8hzyrhw9ii3PrQMVCBPbkreuDj31WYiQ8v7pHWAqN8jJALB2s191pUfLPwUYmLY8H56Mo31",
  "key14": "2qQmKzqfSQg5dWoeTmfGEaTTdBLBBjUpvq8cdGw64MTHYooPD4VQ353tp6MRpPHVbxZnsmnxv151YCKsnZhEMTQF",
  "key15": "KdW2JhYUAZBez5LkmMQwgqm8biNhTpeg1cbuLt1jxZAA6Le3j3oyjyF6QVvmmN4vFYbRem1NKR7NeN4VzZgetmb",
  "key16": "4xETZSxN6GQD7iYj4sFwcncbw6AP53D4W5x48v3t87zS3BqfMFkMeutvcuqDHX5VWu9q74cnweVWZ2eEfW1jeKN2",
  "key17": "5F2bi2CfU8UbmCffKhDVoMFf1dmmfypDkN5HasECEW13gDXfnPHDEb5ainJtdEwARTkj8vRQaKx23FcwUDRVK6wC",
  "key18": "54x8LGPvnDEMp9FcuMQAumCG22oKErijfDkMKqSeVH6PLS7vkYwS5r12sm9hUmgfRQRahMD9bxqFxZ5uH46hoR8a",
  "key19": "4dWhp48wXnMdxF8vqF87CzHA6cxvwkQnFcTwfSyk1jfhq6Zg87bDbD4jk2cdqiTjy4msQo6JzRWHTyutENF3qKzu",
  "key20": "35QhdQn43v7UoGHn8xQ7ae9eSubKJ9bcz6kSXuAX47gvb3wgiTEnytCPFUVZrKUsEBt7DrcywJaNXe8Hmzvd7USP",
  "key21": "47Xi4zgF71go87j7fMui4kbpxhxHjU3QefRgDpRjYRY8GDNNPjMauJTj89Cn5tFi9NwETZ18hW9KQcEDUbczSrL",
  "key22": "2TXe11nRpbHMnyBykzGeZHUTAiv5N6nJYopjbANy6NiMKzAc58jCo7qnoE4NW3YubDuLvkocwcmCZHfmCiqyswNJ",
  "key23": "2Ar5Wh5Hsj51od4vgDKqv68Z5Y7tkwJBpK9WELrE5V9id8B4RVEQuLjTwqhja1F7UZGPLETg37t2LzdaCe1bx5Pu",
  "key24": "2iSVZ4zDQnoNnN1jxorzhrNigGphq2qtPnHmo4Qz34eMQprEz2popp5QNLhgohZNpcpPVy8YC7EKAQA5L5ZRM4YK",
  "key25": "BrfUDFJBTmLuk3TN33nXRTXiFRY443srXCZ6uPdnFJCvdD7UZTdnes7GrmeJEsGGiATCjRsRyjgdeUGerm6KYZN",
  "key26": "LSpec5CAQWaXFQNXafmgL4cBm7XNJsvpuzamNneJumB3oSavFAYwVM2ScjZ5FDKp9BRayphofsBDeXBHcPeaz35",
  "key27": "235naKAWgFzbMDwwp9LvtULpeMexNQNBKhGdNvwdnm7oLhJQKADPGsLesVA57CPve7n78z7sKUo9XY8Vdyd2mzor",
  "key28": "UYW9kZwG2PQ4YxuPb7PCboeBYPErWqE2jhhjPmZepYZXSV6qhM5QFXe6L1HRCi881bA4LnV9xDoiAGCCH5M9hCd",
  "key29": "5v2gYwrb8cZwwb3CrXR8bHnPasmpDxxBGp5Luaz5Z7xUUSNBbPDb2eLh2jpZRhiWZoFxyF5v3E9RdCWYX1EDio6E",
  "key30": "fRaw4Xqxbudnh7aKMFoKhrJ1zLRfCxSP9AgwoL342e6WGh1YycAoC7TwKHgAND26ZYCvqLQe1VUwyupHSEwqyES",
  "key31": "62iUY6BHws4FWa7qsxpdNB9SU74qUJaHGZmLZKmTAdpthU55XTDwqx1szxNYgxq1gZXm3rmbn5kaemX258bEBvoH",
  "key32": "3j8F9xuUHXCToViBCf5TBrjCnGoSvPTeEukqtewqdkwRqiDb5PaeTx3fLjtW53q7JtoVQA2L1aFi2ngAAenYWJzC",
  "key33": "2p8Jp2iyd8BB4Ybb5M7BJmay1AjqcMh4ZywKYk9QwwpdifQJvskghonxqwYpovrpytz94hML7xPR3TJP5iC7sdoJ",
  "key34": "5zhtso6zEzQyahBgksK811HASYAbs7vn1NMk1CsMLHuERhnjV5S7WiJSgLKhdfNK69xzt5Bu96NsVpzAd4wLFkKq",
  "key35": "3VYFLymCNSbaTb9TqQ26N4uLWanBwHkzD7sMKPi5mEGq8TqLRqNR1xLQ7hmhXCAy5WdviPtezM36FKLSigDrELgp",
  "key36": "B8N2iptnotzziWWqHMpjV9zBtk5jmpFQbkBpQ3TXRKpzEsQWbmMf68R5RV6uDEqGVuYJND8ivARW3dDuRFyzedG",
  "key37": "2VvsnwuAYKCZA37t1EoLWDxFSVnTbsDJU1dFwTuWC53KWyDAo6RgvNMJHVR7c4zbX9rsadVJS7gmULbyDat2UgR2",
  "key38": "3oyzqwLLUbRBVu6QPEATCx6bPELcyQW1hQv8u2Ri6G3dwVcgqRKkyBb35eW9rWcVtVG91W8kDiFcxqhsCLoixVB2",
  "key39": "3Wv2M2V6f1g4z4fKsptmfr7odhunzmEuBtpjDhiCvYaK1Wjfi7fSWraoUMjR78b3qtQqeztaFtjByPAr24jCy6Aj",
  "key40": "35j9vvsaLVpyT2wcX1HH4hUjP1raLvM4TNSmELRaBm9iyAXjqHvqWpK4hem45EdJz9u94WYwjj5HgfQuxEXvisSW",
  "key41": "5CsdjH7y9b5cJeCif6J5h997fVmpGvcoXvbYRb9R7vPvP1w75WbQCqF2sZx45A6u8mDExoofDfxoj9S21yC39Kzk",
  "key42": "2roavUMkZyqXgN86vfj3EeLesFjeArFCxBnsML5AWxxFgk4bsEZg6y7XKQmM8AmxFoCTc9t7ubw3myNHDXQe8hkq"
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
