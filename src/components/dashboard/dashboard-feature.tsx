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
    "46o9yHG8frk1eEyp3Q28Z2ukLEXHQ6HACNBywc8iHGMsYgmBrrVVv6XbNibXvmZecabNbyWvMtSQCkFnVBM7FmbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PVhfHgUPq5H42QkfnfDs3vFt3Emm24gkdE5ehRMKRigUJiVVr9oWie89gupuuhHrAFRqCf5t49t6cknSpzeGRyY",
  "key1": "2jsFHPX2mutUJ5UhQUAQjLfRcsyfmTFghvGfDzpwTnzEaHLPkLEXTxkAkVt523pCnB9GZGvuVZA3NM3EuGCtiNop",
  "key2": "3YkVV2tc7ZSMAfqBzawMFKg1izvgsEjNvMiHXVf4m9oT7jEPvcJceZzbcSFQYQMhddorifmViXA321EvnP1EeWX2",
  "key3": "5GCQiwB6V57swPkwNo3GtYvzJEygcJPUXyzyV2eCd3HgChctZuji1r3ZjsUFeHLsteBLPppQt4QnNFRYwkNokxNM",
  "key4": "3QRgyV6MBbXF54YZiw6RXJJnXdAACFFEGosRidexqgUoyg4oUXV1iwqEKGvo6RP9gy9YRwy87RdLDEjuRs8HdHaZ",
  "key5": "4EJ7f1JkqNwbEXYZBmLuRAB4kYM4hFuSVFVSgcz6B7t5rhn9DBeAatPg93cvo7RRihK2VizMcQLCCLSPguvQHC4R",
  "key6": "32mpt8mSttPHxGDtNHY513MLrLmTFQevs72V89Y57ffixvKgQ4tw2uzNipDwrC8yAnkhpZTWo1xm7c54XfnMmiZs",
  "key7": "3ASnZFhEVTL6WFiRJ3NB46oQBYZymk2ZFuXcqacaD5xXZvei4L9Rh19ZNAtLm274Gr4oJ9UwakA8yjLc8RTJFPWi",
  "key8": "2eXZAvDFXsk31TQDJCADsqWsZsuWygqcChZUSMChqYD1RWU3e3ojAHngHGcxqvmnzsUPcBkq5g1vNfvgruTGfQSp",
  "key9": "599vVH5kWqQZ3uGcbPm3U8LvRZgxCxxgyW728JGGtrmRPcxGqtyPSCJt4npfuQWc4iY7EP14ELtufdfexzbuMbdA",
  "key10": "3XQy7wnRkEB9AKrDDZrcygtSzSCiFBNYuwAyPkoPQ3Y2cMLiTtJULia8i6x3ekXHvHPZfdADYotoXxBmSR9pSaYr",
  "key11": "3mfN9c2TWjR1M3eBVH123D8YEEUJYs1xKYW2ndioG8VznKpki2E5ZfWrvnJLGsWwLpVasE3Pft5NQa49JceRFJf1",
  "key12": "4nPwxn2kd54mSkrihjfszmomngBcWYPMRh5yrCCQ6pDs3EaJ8WEaWZJRbnvcn9hTc2wNMcDybVvJbiaeBnusmgCH",
  "key13": "3T37J7rVfNRjNWpL1k25wAtgHvSH15WxB796JNHXfxvWfwRDFZC1ad9mQG5tKydxJVhpw35cGc5B2whJgTMP7mqL",
  "key14": "4NhS3NCcuHRufrMhsFVtnxbyKd4dRPWnhip51q8uqTuXHJwjqBj8nUx59ddGbsy3AEsLBrmhh6wnS4hzVPYAbvBk",
  "key15": "3GBsZxMp4bTnGe6g3e7pd4GraqHw6QiXnkb65ToowwuUUk4DDBzRHay2MB19r3EokpLN7Bgn7eXcNhtRGjyCHr8Y",
  "key16": "Ev9SDG6HXNYULYjMjZxq6icJuQ9oZwV1ADMyrh9RMWZYaS9unzassZ1gKCiSYyJWWZH2iCj1cPhuZi17fo97Gtc",
  "key17": "5dVbRsdTStN7gfJWKfmrvt8rGh5nHD7TDjxtFwUg1QkVs81mRRrLvYuYx4SMbxL3VrYcosoRm4QSjj6ywo97zbUm",
  "key18": "5mAQxLQHGHwUEKcmmYwqmvu1WPdFgGu2iH5BAt9zNxoBXsmLQ3UsLjGe86EDCyH4H1UrdmJWF7Yhfhbs7NdGJQBN",
  "key19": "5NW9MZhkgfCfA3ugFwxssBk4euWbpWVaWy1XVLpt9HwohmVMR6CrFrdCMk1igFUADhN1BVAeYkTDd8YWubusUKGJ",
  "key20": "3D7GsCdzrcF554KeucoFosmxX5X74psfP4N93m1KMmVd11kPe4vRpJWMUreZcJBRZDct8KoN171m2RWeW1iUY6Gi",
  "key21": "358u9d917GDQoQ3n3aLMp5ReStTzSGtdxUQdMo1U1v8MEKEj5EcHDUCdQqpmgULXFT5j7q1K1q8eKBszQUoVfxhq",
  "key22": "61s8gNGxrE6y7q5gD8RAsGXdWYSZzFZpdBKYtHL4EqJPjJPhTBkuJdeFKcuSvk2i1eenMmFZXiyTWjjXu3d6wwtk",
  "key23": "34QKHisXRBJTsL8Jyevm2y7AhkeinpEamAU1ANXBzoxLzkaLPRecCiGQp2pjF5APNqURvbCyRwUHSdNGDdfw6ihz",
  "key24": "2eUf4ogAQ11YuWzt7Rm5QzPKbeGvYdYbkfVA5fAaaW4yqr41Ua8187eG8BTPR67iUPoxfdj4MZoa81DgMD37Nnwu",
  "key25": "C9nnnoT97v4zLxR5gDH4uYQmn1i1jRvPbB8nPQCkRq5W2SuqC9STWXZK2msM852pNgr46Vy1ewsA4d7mwviG6KH",
  "key26": "NVBA7UTqjWrrDd5ZBQ1wXt8EWq3jQnPqAZ9Tj334jctDD2PxUqfnPp784B9BMYUM11uCG8RKRMoEvjmPZN5HoMs",
  "key27": "zQEVyaihUnhtxdKaMWQqwVoe75jEX6wu9dkzWLoaLsnQeNX5U9tu1NVoDHzQZ6WyMaXhWHZexxTBeZ7EfC2HKwg",
  "key28": "S5nwKUSNRfn1ZaM3AioXdGYAw5rN1aemkzvitihrBhL8Cv7kv4eR5egTgEPpMFYn5hWFywUC6tjPp7MNXVxAfJY",
  "key29": "3UMX4F1vL6ebL9cuLoTpGmzaLrUQoGQ1iWvKrMu2Gq6d268bPGPgEfC57ezDqMtJgFEir1SJTPKWwYUKr2AhWVd5",
  "key30": "4GNBc91J6nC8ro9UtpDasgYL3WJTefHtaw38GEAbMZu1gPTELVJTwDfvjTrsLGM3mySK8gz4rbFjCejHiqpGgdLe",
  "key31": "3fDdM6MQVfftgpQXYmFk92vJmCKE2soo8mig8PSKU9pVWCee3H2X4WRkHx2kSWfNR4eaGu2nbUHZiDBHE3FeohS3",
  "key32": "5D6XZcHhW7vAYvDnFW41taBtP55BsbL14XWQ9ZPEUQYLVoBHVzDFaeU8bDtoGK7D4tahiLQUYaUfoEm47ux129H1",
  "key33": "vNfeX23FKG6n1qZNPA9pDNuqEWcGNC62uZ1mkyyiuLQg91ahL3oWDyQZSNevbZnjexbSS7LM5yajTR77eSeaXrG",
  "key34": "5RcosRSdqoqGpgMZcKqBieW5H5qpNtJpZscNZftjepJgovw8jQniukVtqy44wZZDpe2J1QHvgQh3nzLAVkqBkz3y",
  "key35": "43et4XSKoBvahXAqo8v8cyQdUHTfiG5kSfQY8vt3Wue1AphfEy1gqAsKf2ZFtoCvoWtTpTyTRJcMbNG2zZVQb4oS",
  "key36": "26wuZ37pyfCQABDtrbLnf5Tmao5vYFFLvF8TTNFparExRCPQ1GekYwJXgAwoCtK7MpgXAUPPkUXzVv3MducMnzFv",
  "key37": "5bMLEaPAYQmnrp7ao3p5X6AhMuLY9GCaxsePvkVSvoutx9r7K6X3dgpUaBRaVDDFaeYekVsBS8muQoaTgKQBKyCV",
  "key38": "32AUqN7yf9d3HcqqztSZeQb6owYWpMP5HXFmMm6buNsYNgmQh9rpxr1h6BeQzED9AWhV9fiLhhKpxxmhUZBYr4Pb",
  "key39": "5VBU78oJbP8fW1cb1bEGLJwbJAVKia6ZnuuXSThAEqwAUrmd953DkRnz3YhZR2jVnrGYfxKi5Enbrai3zUaUimYr",
  "key40": "2Bk9CHTePhvn5q7uUfjrocDLtsRaDWuJFYFgJhN5tPuFx3qys7rcsBnzs21iQMxWmKuxsmLRjAkeDQBZYKRGKbLp",
  "key41": "2V9rKdkKkGBXiuQnEBrBpaSMMUmswX9451s19PvGrMcXu5sNTRM2xJuTR3kR1ShPTLFYVUqgMbV9pdZmiif4MKhw",
  "key42": "61xkqHQjM8jF5Xr7RqXe2VEpCT49EDNLpbNbsvpWhYdpiVmVipA8VPY3ZvC9fPPgbXaaTUDh2aHphtMLfWBZpYQk",
  "key43": "44hV26PU8f7gxtXyPsbHKFNwQTX4diNMsvgCEXYi7TiHu9hoEGV41pSMieGRKUn5J1tiWQnwfnajgu4cxRNsuEBd",
  "key44": "5886dAxHqdEyKv8CnX9hLFLFZo15pBD8dqGg7UCgB7aMo9pLcuiAp6GS9fP6n5Ar7znXiVj7kiQVGjvYZdFk3fCr",
  "key45": "5a336BoaFUdmWhvRpiLtZApxdkHcf7nynEnxKnHxqiaRCQ8FcrfgTzpmQz2iWzJAWo8mLtaJ91YrnE8E812GHAbT",
  "key46": "5DxVyDHLvXuHWYc46PPvTDA7foNrPoFq8H2bckyqrHQJ5pmwo2iPdehmraP1MbdSwdQSCP3jDkcTvMtCuzLsPeVm",
  "key47": "3jgjoqZfjgDepmvDF9UMA9z6jCbpzZJzM5Vh26gyoPfVcmz27esdQwVDsez7Ss1nDfBntKLNQTDAUEt8R3EBqSGR"
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
