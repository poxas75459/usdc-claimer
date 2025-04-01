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
    "4LESQXEi8yDPjStHTHDRywCpcuPWMc1pH7f8foEy3pSDH2984cAetPSnhCzomwHbBbA6VnwxFbA7vrtXw56gbREh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52NBw17vzhpRyaMM4rURTb7JNbZiym8dQ5unPMx9jcgomPkeBKnrkMKcdCsKucpLSPo1DQ8FK2Td5369WwdXEFoT",
  "key1": "5iFxSpnTv7hYZBoDuaFhDXr43auPanNZzDLa1vLj1WfpyitF73hnqfoBGRXkv1KjFkjZeXDyJnYAWj5EnoQuGd8R",
  "key2": "5uVzWpxk7yaTyC8Tm6EGMJE7EvcgqEQxsiaDqYsSvepf5Sb14C94Ed3EbrKKd7i2xxqjr9gBNw1WqZ1jhu1BMu6",
  "key3": "CMXekva18djyM4HLZmcMuBtNZTspvZ6rxjxd2gvSYN3CGPDQXw1cJx7GM6RUCSDmvCyLkWvGrHgApbv92eMBGdJ",
  "key4": "3rt29f2kpd8qXYB4WQpuxGR9U5dwcASAxKaEXBUg233K6sKDKQCvHeHfq3nqKCr5NSCYKymGtTYr7ts7b3iGMz93",
  "key5": "617BxbLSyTN3dSCbKDRjxGZTZwkdrKkuAStZ5DmboUQtd5jDxFqt89NKipJ29KeQSqGMgqFK34jHxb26raaQvCUo",
  "key6": "4Pt2CNyE1FZrQWQYpUu5Vn4Pga42WkAidBxHHejknPuPaRA8cNzzJcDkA3TLy737QLHENqNpE2imALVGhjDy6Y4g",
  "key7": "59yPwHtNH8r6v846xnbvdH5v1hQm2FX3hbjUFmg9Hzd1Xx1C5qCT391PsPcn5op5fUHYHTf5Uhpy36hU3LFL3t8h",
  "key8": "5Q7fYUSU4dGyL9ivygqGS2CgBnd65EkCt6qByimKGgT6FQsbZKJjLXMaewpk2u1nVirLPTmq8EU1ATSPoeB3gegC",
  "key9": "5A91HjzR5tMdY787LMowydM3cHJUhkVEs8ZyJPi7Pew3GkwHa8Ry1rtuiVAHvGjUZ3oDgrK9t1M3xsMjLG5Wgy6w",
  "key10": "5zZjLksWN2LaCaWNfBL8MVdzgPx4Fn8LHVPu8YPqU8faEsxAPADm5AQJyLYpz2KiWfo76WgrAg56zh6Zv6LPW2XW",
  "key11": "2uJi7LxPSW3S4HBKrpU7aLFXYR7UyCwBBZUSZodiEwAbpv6zBhaCfRDTJKoH4uQBX5Tjcnx3kZxrKhRs6tKk5QuS",
  "key12": "2a5PJHLwV9EqHGaxAVYrVJ12j9fei4LC8LSj9qurGrJ7y76xdFixA6cfzNtctdvPw3ZMYNkMBsgu4NhcXziDQhFb",
  "key13": "638gQnV14eZyv7bh6JPzKbkzVLMN9yeaWTaK5q2X7mUDM9R5Tv9in9xx7fpWDZLpxU6JCvAWTSfWPR4piA13BFqH",
  "key14": "468SGQCJPzF6quuT2M7rH86GsjnmC44fz9T5KdC6A68wwkThUg3hNPg3eUGB8La9VqfHejVXkKyLz3fELfdZWPqA",
  "key15": "4e9obVj3WwdeVdqUeWS554QEaqVxomEs68Pye2YyuJPEtEvwpPyoWf9UEhc1rBg7rVZPEMovXUtqe44LnkFfsSzo",
  "key16": "47ovgvW1emgNaGaAbb4qNsRheX7SyZgdTvK7zSDWUjM3iDXsMv6Umu66JT7exsZgsPA35sbqzZoCo5vpjTjVSGjq",
  "key17": "2n38jM45gi1kgjnSLRi8GLvgA77Rr38Lgo88uXbShUK87AgrrqSzeXsg2z6RjRViX2RVjdUCjedaxtvqzMJLsqhX",
  "key18": "2VdiQPgh7zHChq1xSuGb1wpgoBfHtkeP5GcJo6tUKbH3xRv3DTumRP5avtRYFE6uvTomvx22Q8VzrAPkSRH6E8fL",
  "key19": "5nUoNRzrAMnKAqpAkT8rBH4md4aEz7AUWyEBZZHRhscwsgDvQ4rL5aC5CkwdD7RBHWR3hLs8YJeT34VSMow8f4M2",
  "key20": "5rcvr8Kn7RywKyf4NjSu6aFE69xRLMSv1E2RjkdZ9muD38TsFXL8a8oyxw93a8hzvNwC2b8MVnD77o1B1EXm55NR",
  "key21": "gfob3xoPpxPx4X6E22siCLLCcBZoyShEF2rJuor1QanH3kRAVsri7xtUmieeLGrA2juZ5BwDiL3Mh7ThZWyeg2K",
  "key22": "2t53Mi4LboLq5QvLAXpVbvSzV8Xe4FvcR2aLphj7U1UNGGFFuie9bNYKUZs8DxCdhdVQt6mftCiwjWRYKQaRXaao",
  "key23": "4pyymqnNDRQrwEvfnZbbMZwZaFtR8jeeAvfmjcLX6cEdwquF1fD1QSNLfg2pGDsZ6A7zTL141krpb4eCAFDSn9Bq",
  "key24": "25aU6uEKPyjz8LRwqUaraVhLxEXkhjkZeb3an4nvmH8GoDy2KoTeov5AxfVc2n7pQxumBqJZiPFKkZqiZRa5WbYw",
  "key25": "3QM4QxpwGAzEwANGmQLQRyiqciwheMHiR7N9ByKZf2DXodUaDDLjBEinDJhvCxA5nNCBkvpMqF7rHpBRtf4qzkbj",
  "key26": "2ckmxYEBPxU9cX7r82AbytiMtit8Nxm8Xb5yGjTHTYiqToPwwUyRkmtZ66H6nVivkhAbtNaq6cnD4cWuBhth13qs",
  "key27": "3tyP1ZAPTDJjvwiCMoNNXsZg83qM1xZcUwiWhyxqzMEE3yvmewnxrqD8jByCMsotsJhVdKK5URmfxsDKiw2wyYzA",
  "key28": "5CvqpBGXuaTmHdVWaxX85M1AzYdMo4JsfdxrnAdA6EMUVK126o13VFyqWPyBBXxy2pG8GSu28SwZsxL1962LuSHW",
  "key29": "3898ujcX2CrNizMJ5LSU9KkwRZ9qY1yobvuy3VGkzsD2nDjbzmLh3DzvBxbeHvV5tETZm7zZC7nFBboMTg1JYnTC",
  "key30": "3Db2LfXkM9J61zhktu3J6GqoXWj2tse7HKumoKX7vqzzyovUGWQ7FpxfA9URe6XtxhPtkbzoMa7yHig69D25A7RZ",
  "key31": "5scXX4qsbmRNWyhFoHojnsCEnkLupyzafC83cEtFQmaKdbyBj562Z16VuChFPK9BWfWcRZ1RV8dTxYDfWZ4ucuYP",
  "key32": "4etY6vHZ9Z3Vd2YTBBVVs5FPtBnwgKAExxhBS67XD8TDpE9MgNU6gq84wre4hsbRoy8Fbp4r59T3MUKw4FwqY84w",
  "key33": "2221XM6BGX7ngKkAAhdsqKxjB6Lsvs8goRxkRG9trMZZjWWm6zogDktcPV52btdEXqRUCBcZPBa8b15thcq585Sf",
  "key34": "Ekcax4pbhe7KhxjibRT84N5xXa4MzRVcdkbr4FKiUidoepmhipPmvFdbdnpUExTYnEmfegmqk1VwwBMsCJEHwD9",
  "key35": "4Th4297TXrm3iurkUyKLRTwAawPtMytEDARRjkemJ9Qs9xzafEaVmn9QDvPSQWRuneTaT7Q49nMq1fzF48JRddQg",
  "key36": "46QNQoQARLw9vB7jCzRucGSduNp6v7xDi4Cf7HqjJkJcvAKB6BkNTAwvGAFHCYyaFZFXZJf6jMScMWR6WFo23uN7",
  "key37": "5MurJv4JACeyiN4Ktj57xN3jKzp7NyP9uJruWHArwa6jf6wTxJTnN1cofZNxNARntEYq3kGWYQNe5sZGsAiBiKLj",
  "key38": "27tsgqNHYHcBpVNuLLw5gmUWXoKCXn24hfWoJrqJhWSn72sAYgnJbPX2iArvV6nUVNoHQsoTbq5FFpzhVuDr2FAr",
  "key39": "WSZnGS8hF8cshW3kr6MSNPbxeejNL6bwyUViUmJPt9szjPLHvAJUGfoNi6iyW2zwPMF44e6MCaQANCiXsBJdxqw",
  "key40": "4vz5q9ByAo7uA9TTWbAx9Kmqwc5PZJz9twqUa1ppfDS7S88qrdkaQDAuwhvQsUywH65SfZGvq5DQVTzFtcUhjV5R",
  "key41": "39WpKruSjRS35r8Ay2kfpRnJtnxvqVpY8zTQCeJa3q7GbUvdk37psorPVwKX8WLGb8EGxaAb4S2uEFygoZpcGeEV",
  "key42": "vx7RJyphSG4XDdCDTMhUPUDBQQGGtahLcZG9hEdayCxDdkFLe2jAEUbfkQRzfHR3RPjpA6ZGBfEaXyjxU34eQKo",
  "key43": "58Uu9hVrgTSNoZhsPm871qaTNCFaznreqthN8yYGJNKGdgjjhf3KyH5h6k9v7tM9KxLaSci5LuoMuwXnhukRkrHB",
  "key44": "dwoXoFzYH5uYYbhEBtRFJJLz59VkPwtYgYKi4hjrXv7iPLcLmYZjwV6md17b573nbjYPm4WqjeRebwqec3WNJWy"
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
