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
    "23h5WcBoF9PTegGJsq56Tr4ADoMtkdHjMWG7hUY75fPVypGeiPieYHXhaZ4KV5fuVmDC19Ph6qkK18VWrwC8VYF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sPtKUFdkoQtCUjhyfMmUzaCbGSttDH4NnSWjmyi9we41wXtZauYgS8EgqVcvEymWsbefTzZcHuhUfrSkvWfwQBP",
  "key1": "3ZiEiEfhwCaGLm3GqY2HaTK4viis6dujYCvwCwKksTvH7eL1aSsqCqhGbFZCTjejMpFddXKKRUic7gJ8PiUskwFX",
  "key2": "3jf2DyShQjbZA3fRZxrd74vsUjvFyuMe4EG7huGMYgQyBaHD4QzMAt7zi4krBqmV4Ks1TnXoymUGiN4hQirdbKQp",
  "key3": "5u7Q8cyaqqNd2a1STFexWCoMrJrJiKf12Wde1yT4HqoTXKPHfJVGL73yRNictUARrZzhQNPBnStXBb2siSAuL3Pq",
  "key4": "4PEAwqoRjnHxtHDBtzAZm2yp23ycW4dYKPuSp24ubpnwQJAcVK5c89wH3YwYH6yupVd27ovgM6ZRR3YUyQ1gVhfz",
  "key5": "49iQJtnqabPdN7oidAPKNhz8UcjtPqtXxn4ewPEYTKSySduAZ3GoJefQbt4ngpjFyaW3oK5U4CzqdXpmM7XaarAh",
  "key6": "2NouKCaAaHVZxTSoesJGYSy1xc81KwXajVGqwaTg3ywjvgyutgamxjjq3fAqE297bdUCzYW3GwCTnTqvr6jf4hBY",
  "key7": "Fibr59fd8SofaZrwpatHYkpX4Wi3CxmUa4Sdda5Up5a9WjjFs392CrmDaAjnyerm4nP9V6mXbaztXYQUNEbmKsR",
  "key8": "BMBrWoY7waPN6t7WpNwGsrsyBzpPucoBKH6ecmMvMrAdbHZPE8MdPWX5GUvSed5GWcKC5L3hCCgukQY1HRCFBXQ",
  "key9": "5LksbTiNP4NDHSL1YKYMQjJfUSimLTZxN6ZbdSqEb5yRdeUhnJ78JkCk565PkmrM7Ku5RfkGoZSrK3baBkqKB987",
  "key10": "Rz3vi8GCxoiqgLXPVQRTbpLB6688FpsCfMxfT62wNF9nwBhg6mkXc3VxMsE1EHKhBXh99kGCu42SH2CcYP1yDur",
  "key11": "5HXNPxLbJcz13dw7f4v6r2uk2Sp58zjeKP3GZMTP2nENThNjySeu3HQMnnDE4tnW9YRho1Cv57ShB3CWRYRmk8PJ",
  "key12": "YVWPoffuPvinYJzbwSD7CYdZXegsFz7Byp4F2wHDBB2xMLziWGLS116cLH4cDrMBJPoDeM4N1poCKmTi9coCxzy",
  "key13": "2UEDMDjbATYR3kwkeVEV92c3HC8YkicrsjRFQgeWnuWMP26qV1wCMMz7G87RkKwjKmmw9EgZShYACbvtdd8KAupP",
  "key14": "3VedMViEEPf5b5MwH8jQUAho2ZLV8TuitDL1daJvFyNadgUJoDCDZGsQoQUx4JtuDwQUikcLKGzeqAWgNh8Dwb7J",
  "key15": "7L6X4nk1XL1jP8ApbsQmJZx8WrtuxDsLEfHoYr3zqMqdasdeMmPomT2xxsoV3MuyLxkxqPaoY6HvxvzKYx7N9Xp",
  "key16": "43Uk3MTX1QUtYzjxgdZBE4KqJCiSJBkvuPuj5pSSvG5rp3JcWSSoVRXBqYdT29bPCGC18PTzEY3qPMivgysh8zwr",
  "key17": "2b7wcjghHSNYKndc6htk9hkvqifDCnQpMWMxi6bnStxNzGnFykVj39wTSAhZboWSs8PB3KED58JDzpTn3gd9vUyk",
  "key18": "4Vhuf4AsYujFkhYgSusd3mY33pSk18avxeE7Mc9nbGX4P943sV6LfBU7J6qqX1qUfnGcDQwWYw9sTXFt735CaCp8",
  "key19": "2S8hRdbdjvvgtFhBcdJ2T97CabtgGCJbjYoKP7VF5Bv2eqqnnCig5QQ95DP5Wev9NAhtbA6evZi822akmWnKy7S",
  "key20": "4hH9ZGvVwhyZdn9hDTzW2KNxnPGX3ASJWi9Mq79T5U6CZFcRi7AKVyekef6ZtPsfZvzZoosefmNnsEmEHA4bgvzK",
  "key21": "3TBVF39Z8VUrEooFy4q4SqYL2fsrJR1vHE2kxpCrpTMRamX1ixmig9TRMjVCPeFzabrFkr3VwdVKbZnywzMYAFhL",
  "key22": "3mWxLaRzs4Kx6eNu1CV1KTYN1qPrQ8s8wHDA2zrkS1H4Qy2Dn3mJdAsTYrwxB9aq7hecE6Q2H36WGFLrsNx63hM3",
  "key23": "ccWxBktG3FB3Dhhtesy4am5Vyh3dFmWpPdiCnTfV1Ris34JKM57Bi6gfqxf6dVv645YweuvoNjHMcK4uBb1YUcN",
  "key24": "216eqWH3j4NzGmDVyBJAh2PWKK8sLP2zuM3rJ6y5nADAFH8QBfFp1qLk1iCmbTQfiZ2ZXte4urSgmPad72oB6DSW",
  "key25": "3T85KjywsrR8sovRRkquQVXPzdkbkit9tHnkRyUyDQ5VbGzqfxDJtwYiGAoCmFobsvcGt5pPh1U6b4MwjN48xChX",
  "key26": "5WNdu7ZRcc4bn5HwWuX75KKH9MpqkcUD3etU4h4kQcy8vXuf691dD8oTRrtv2w3t44YWjLCCU6H6NUAJiRYYuYj8",
  "key27": "5xNmiK93bypJj95xVCNYxSAqmJHVpt7fmtkFDhemX9hsLMsgrKCJHyTH84KrE767yaZT3RQxRXfu2Wyc4gYSFvd2",
  "key28": "5td4dcg6caXEPwiF2aEgPnFPjRZTmfEcNF5BnkLzWWkAe78u92AG41jMjHP9B26bkGuUEus27U8gGTQWQryPxjo2",
  "key29": "h8BwAx2zbVpnGRRMxaav6CeoFHgpyYyw2V4SdRW5iFX6ZG1LiPZtgZDdTgnx1nsiJYTUabDkPPemC5eoDcVPHgF",
  "key30": "2x7F9Zg1qmfHknFECpf2H4HJR3egMxwFQuof3BQ4tUFs7Wy5dqzoQh9c2f4DFR79FKQifaV81vMWoCZfuqiP4rJ5",
  "key31": "tVdMALLnk7FDmKAmzzewMzs3nV7rsB7dxcwCgfYeA4o3psZ46sHByzvTUYeLnH7a161DVQQxXcX5YZ9YeTZ9DwB",
  "key32": "2nnto9F9npjZj9oSvd728S4mBHGUDJj6w8VevYEpnnDSNvnGo5fZJKegDsfx6arBhaPTYnMte2MqKYQ4hevWw5Vc",
  "key33": "4ZFs2ctQsgRJ6udL8Du5moR4crYLeDmsd3WKUGLDApkym3LPoad2jv6P8eguKfefG65ZdstiQsdZ2PJpGphRcGe3",
  "key34": "cmTraMD2QX9NYjqRLhHqFKJ3z8GUeUFavwm9J15bdChxAYZngTDyCr5cDuq7kwhZm5vD4CaHEfrmeRmifAxAdiE",
  "key35": "1hQCuKr73sedKLcMMUXiJpAqo9vY4RNxViqi74Y6WawH4Fq5EvnuKdmtYCrksJkQoxbRBiVJWG1KVMLK2G7tkKD",
  "key36": "2Sr3D7Q4RfvoqKFztbbYh2JxmvUXMJwtwgBd5ggFTMfuw5G21vD3iuPQN4PQYFp9qQKkyxsf5j4GFoN6rNNZV7XV",
  "key37": "bJpS2UVnNoAUakYFGzK46TRtKpeGNVD9pzpGr9Agr3yF4RktjCFbkgcx6315YmeL993nFVAQxa9DzD4KGCdANC5",
  "key38": "3q9u1hFNQwo5Q5ifUsRZuxC8yt3M1TAoSwZV28vcTWiotk3FTsk6CpaK9tBwqyP18av85Tm9DwkBpEGi3sH4cCCH",
  "key39": "3eu3krxQffAn6xKh1V7AD82TiyF1kihm2R7nCC44vvoNAi2P3o1vzE7uszg7me1GLeMRYNjeBFMYnvWCWmaMTRFr",
  "key40": "5xcjkXzfzqcrK3E1oTUpFnRVBdpZRtSHnofMFDjyGbYNHiQtvC6gHgRaBywdmqiAqQd9TuHP3Nzrn56QMo8b3dw3",
  "key41": "MUA1zkFNhepJ7vbKcB8akJAkYXbXSidyhNymaWCL6ZzyHUa2udKoNnx78mfeR2upXcpmqEG56CUdoPhrN4B4DrA",
  "key42": "2Rgu9jZeeuSkzFBMdrgkQZNDAPVJNLKeKcz3fh7R6dgVYBR2xPYZXkJs23zp3DscZ9V3euWSWbxD3qDLiXp3FbZw",
  "key43": "c2EyCezLuNJ3U2JKzSvi2uPeUxTn19Xd1k3hw6EiGZzUee4KyxGcBaUEHTRmfbSBjRTaEXWUswQ2zNhrBnK5MBx",
  "key44": "4wacPy3rGPARh1vAGyYtrt3ARJra1MEoNRMiM8jNGAf8aQjdUsh38kge8bDne7rmRMkvUJBXpskHWLQ1AP1oHUBZ",
  "key45": "AZJemKZnnyWojizxUd9yGQnDPiKRbdHv2fV4TLEVFKukHhQj4EiwxoSvCr79Xegdcn239GjEgA2XhnBoBZC3fFp",
  "key46": "5Sbo1o7oq27heAcgyq4vPN9y9D2fa2KXwF5Tns5pk3ty7VjYpdasPmyxCPau72duqA9w4LvnAxQTom1vsXc942V9",
  "key47": "5KG14HHYsLpgCi8oMSy8aEHUAL8yx2MJRQNDCBNVnfXK1nB3nSXvRMyZMtbLz5CZdqnUDMSMoWTe8Hqb4E1JuLi9",
  "key48": "56AE9YDKYJD61D4rL76PgigUvJCNYcgovLEf1oiNkUCarPQwnDCMzbE2hdJXRJiVErSEa6CbDSc27H4bNu6qXVc6",
  "key49": "521zvHEUJpgZaCPJBmVXypsmoYJcJfpQmAFsJKNBUuMxgKNpSuDDGCpfyrmeqdkkJsrhxMFeoz8mDE65cZCrGnZN"
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
