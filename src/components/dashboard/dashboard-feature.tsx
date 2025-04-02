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
    "2U9X5xBky9MKH8ZgjKvNZATDPipRd65cuQ4d3NW8eoFDsKLC2nqepgSCTCyTaz5zGsDN6bejKuEUwhXDx2PhNx1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qe93otN2USXEVZ56pW1ba4xEhPzZsCYtoVu3g1ZukMhyN5dFL5vZf8DzcSHB4S2unpZKhH2ju2P1ZSEdp5E6LCW",
  "key1": "4kLpUM6obqSRSbgzjvKF7aBvjm6fuWhYdrNDvJBK69ApFAfEJcgWtLrAT2ysZcjnyYBhPbJZxVnJSqG9YrBhW862",
  "key2": "us4X1Jcugro179poifinLkmASBB63f5yb9UqgCgqCEmsVNmeWQtFBMrZB9Fva4wGMxvQQchoPFFuxe9hsj2Fc2P",
  "key3": "4NfZ5yXUrYKyfLjurDiwAmxWae7Db1dPJcmvppNGufyxYLLptgsJ9xs3JVEByayadNiLbCeSYpduKVEz6EpS7NbY",
  "key4": "3WWr3h7N4MGP7W6Gg6EhXvJTU7otEqJp7cYA8JcqJPAcHC49WweA6721R4gJb2iFNysq4yxfM9X6UZamdG8E4CiH",
  "key5": "5itntkqo16CKfUERPHVPWb3HHAEErRq7q2iRqnrqZfnYokKoRzHemkRNxxnotYArt9bTGCii5tAbEdWUfrTJBqr5",
  "key6": "36LapMiYrsjrU1ujyo7xbn8SBNV4BZYTK33WWQoY1yj9oPpyBCyrEkhcX3pW85zFh22heqxuafQZbvfsYLDsqQzZ",
  "key7": "4AE18cxPwRsxjWDUyXuJz87wdtoiugkd5hr8nDjKs9UYLSvTubYGWkAorRXi6dR72Q3zF1DF95kcwWYMdDWWLXoM",
  "key8": "3LmL3US7uCbVUq3MzBdoazqDvkg2hhbkd2QoELCRNDc6rhcxCPRjbVHHVynQj84HxnxM8LmhvVXiBbqPFwUbcBPu",
  "key9": "5VxDUrmFbmkx81rA6h2JUvy1nFWiPmrkdvxWbwqxr6ckfErQW9JvphcYJYDiRX45xz7ntpEgbZQqWS6jtCpS9o1k",
  "key10": "35iF5VanZZcRnaTPdWoQrw7xPVuSh8Y3iNWzAACLPzgVd32YKX1PZ6sT8JF99bvG3uzCtCEwh9fmeWzjfKZDsaMv",
  "key11": "iTKuiseibFCaZ3xzU11WZvcHAGC5KSn9wxs2WNkRczaqFLNum46AaiC5nAwQXBTwNJ5bvC3mRLpxb3ujLPDhTFG",
  "key12": "27jEQ6LE9DGj8MAh1NeThHQ8Zdy6zh1NpeL1KPNTbXyJP4zqcdDq4fpWHFJBnNKYtNu4X8bqC4dKANovNvoVWNuK",
  "key13": "4onNqncqkHS5xmdZTnowNvXmyeo9Uhwh6yRAZd2anHJz941Y71rr7jeBrpjAAjz86xNxfHZee7ifzfJyA6AccJWo",
  "key14": "3zSppMuE8gR19MRyqHK2CVu317Ewke4MiHaY3gFuNsR4cJuUiP6fMPBTSqFHN8rYED7T3TPZWkqTwncvkooNRTcB",
  "key15": "2j1e5Xjs1n7udSkt67uzBBMqMJxSBv3JCzCNAm4vUvueVWF4osZHTSCUNN2AaXFW2RMPFNieJebdfFL48nMgRZYR",
  "key16": "4G1oZ8RQKNXrJCapx8ShpNKM2R1VKUquLqnyRSnhMDbhiK7vcx4zWpXrEniVvG87oLX1oWq8vgmAc9qvfTJQzFQW",
  "key17": "4LFWrMASye8aNMhPzaNmWkNLvULwmUX3874wPn6Nf1zBs7xxpy5c2YVEri66kw4LtdhnnwQtqGxd94DpGyyMCwGi",
  "key18": "RpTRdm64EQgngn8KwB6QuDyv3XRL12cb3s9LNYLkrjdt8H8SGEaypcThDaogu3dCvhUBw3KQJRaVqFrNaXTFNop",
  "key19": "2Chw9eBYpRn2aFKs1cq4N3ThTxPdK9ux2aYoy89tfW9C27VyyCRYRu9ankXwEhNT7rArr9UL5UBAB8Gt56pFpmNV",
  "key20": "5LBsDBotyXVm439k68zo5UoFffgeztCfnKrXQtTqq5J2dfwfzZSW4Atv5btPPmjLFnuWhtcYHtm5ZnufdJpKcQ4R",
  "key21": "4nKwQX6tEMexwCTqXAXNWxCth694om6JgVBby37G1gtWdcsaaDUYGBgZ69jSXgjgbHkkaTqmiW77A1MNfSqUWAJc",
  "key22": "3Ue39Jm3BGiuAhxMrLebfFssuUtsAjdrmNdsjmqpnV9nEu7qwT1BvgkuRFGAopd3WfjzAf2VcYY4FYNZ5Z3DRmpy",
  "key23": "4vyzFBGVfSNvggpNnzHhp8okKS7xUpNPvHMz1mShCtu58vpKu8XPvG8CxMXPgKfvLVtg8SehVtWHsE8o1UGFwpKn",
  "key24": "NLY26Y7jQosFSNScKwnemh5YrQLnnAUYj5pbj5M27msZA35SvAeGMFkZE5x8A7qhauR8gNBmeNFdnFQtiuoaTSX",
  "key25": "3PjPThqfWFkWY5Rwki1793Uh4Md9ijR8DV56GdRLVGnPnABRSriVvVawQeMyihyqmPrahHNSKx6GioL8bsTCDYoF",
  "key26": "4CS6EZzaEm7pUMLAVfNkxVpcGrqmL63SBNfsmiK1DCWfAURRhrseXgVAkjZknocjNjeHKM1mn8B8upBkncjcGG49",
  "key27": "4sVWQAtpopaxnBHJH1KncRKCEMKY3C5CmCsnEz783ttshYD9XTFKgup56vBQFPNz2ByStsTqvdjjCarQahKtBtZx",
  "key28": "w8jfAKLeZ7ng5YJqtWYFi3rxxW82oHBcF9hgZjWi8cXAbyRy3iofMV3sZaCG592FABN2BwwCi63DnLtZ5pLVEUR",
  "key29": "4h6312NED9MQxZgHSDoF5rsbgt4NHQN5ZP27TkZm57s7neCHbMxfFF9LMnW1WRkDWTL22tE4AngsvbgkpttW8wK9",
  "key30": "28D1uGiDLZ2PqBgHAoaBUziyKJqkTMmGMF13MHjBduBbbWAqCGvo3VQWpFR9jEVELEx4XsmUu1jCkvd5DkFSPTQf",
  "key31": "4zjF32LyE3ycEDbS9PwmG9w7caZUANForPSt5o6ty94P7FdEkMxA55mPepPjDCiH2JuqVAAJCHPth4XVrcfmH4bv",
  "key32": "3Gcr1Egn4FAQPhpN4iHLdBKvoNebXeDQspYfYLFncjHDW2JcuRiqeDWmQT9hY6r3mpN7iznUYB2ruvGcMLu6dVNm",
  "key33": "3ttaqGK6FGvB7jue9P4oKxZ8CudoUz2L6br6g4n3yzzoKxrdroX6kg1WN9tYrRfcqLbu9NgWeXJnMfxYbDviv5Rh",
  "key34": "3zx3M4HMx52a3xDeL4UgGCrXxpKzH3c3DPfiwPxUsFRRmPQ7oiUj4G9hFh2wdMDPcDmGNCnL35fjnCn46pP7uvKV",
  "key35": "SvRMTKjbtErY65CEwG79qiuU5H82DeZp2hkX1xh1chqsMr9xxtYKQ4jzfyLmhxm2NDA4XSibKkghFWfPun9LpiF",
  "key36": "cJY1NnKWUeWDB223BEH2KwKrtRSNF2gqkfBeC7SDZybujqQJkTH33mYkNUocEqDJ4d3mLbSv5Jr7Mp5QCx2Hg6S",
  "key37": "4xCG1fAsfErTobwB8pUa9JWvHhpWnsdb2RVp3biMeFckuxV9tVQaDKmBLL8SjLbna1QqMUrWX17qRZJ7mcb1wVjk",
  "key38": "r2GyrfdDW1BvHM1Cc1MTNnPjabo94oYhPVdp1hDgntXzoCmwN1qgU4nDNk7UBT5jGgX7y67iwhuBbyquw53AFsN",
  "key39": "1MKow3wxcfzjymvVWSjDhRffcApv4DHQFq73MnowP9x5n6SruefAxN5GA9zDtj2ZqszbypJ5MmZDiM7tVTdSZAv",
  "key40": "4DLpgBCe8aXQTaE36KLjmAwiudspfnjDNZCPqCLoRX4VQ9YKc7snywFJNjZJf9CRCX7Fi727PJNxt6sFbf6KizNo",
  "key41": "KXRzHcQdyWF1rgZo2qCtLHsq2SSe4hR2F3oB4ikLPytqA1Ld2DSgPfo519mtjuKcc8r5eb2MAiuHXibWMkv2JAP",
  "key42": "49NrgWYA3z7nAHXGwyE74kM1SfNZpLkFXqo2ytsvz6iEmiUuwhhD9zUCWrNZ4JkVswcH997qbNEQAxULR7FLZLhK",
  "key43": "hRuDf3Map89P4xkw8JcgzgtX5eELeLCH7pTqGrVNcNwxU57eqVMiLEgLiH8zKuQM19sXq52AV8nMaZhi5mZnoTH",
  "key44": "3eUGMzRJhZYwQzDzYYkio4t3o5fiAyFBxA1WaJTiozDeRdx75CpPRZuEsozEXb2sQpPXcDfAtqTwVvM7eDzTRJWW",
  "key45": "2nNf8xt1XbySbSSGL74cVJZPrmHHPhgvTwPRDizDbBEYCtTcGWvzg8fGVBEemEwMrJJev7uLTWnLhyZ8JvtEQBqm",
  "key46": "5vkAK99s9NNPEzzn84iQq8ZJysWMKpsTXgY8S13ScDd6qr2XPuqBdsUJZS1crCfjtvNjWUuRMMUFn2su5Uq4YejZ",
  "key47": "4zzW3fhh15P7xRGw6Pttvje9mjCHAUmsEUWWSD31d5VwtY4aTjSFxG1QjZrqm1tEFakdySKb7FTZ3AFEXrsER9v2",
  "key48": "4kJSVmaCUWGJjG7DrVjptAH76u1UwATH8njnZU46QNH84rM9H4dTA7Z3qo4G9LChKyJPo3gShQas5jF8sZEeikxP",
  "key49": "61CzZYPxi4SrJDZUYurwGQCuUqntmG2FxeRDAk5fJnuhDiHGUG4YYUNRNNeZHruDvvDU7PMco27JSnnpLkdrSUqM"
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
