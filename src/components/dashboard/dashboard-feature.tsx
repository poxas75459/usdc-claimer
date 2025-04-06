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
    "3K3tX6CbeDfXVq9rttQ1WHGmAYxkgdZ8C6AH8u1RwJUZhhFfvY7wbDb9Aa4Dyqvr1mpqAdiH8QL1mdqM7aoZXcbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r6KYHmj5ZxU26mBfTCNphiZ9eWasZcbLvJSkip6mTFzaabhVg1vNKSEMTAA514BaLZAbj1H5n7e18ji6rvYcWZu",
  "key1": "4CQJHn9N8mR84HX51R2JBpjMhoyTZVdGeaCksajZBtQt7sTFtkcwN8N4As49HGrDCH8YkE2x3mx9ZZgv6QMVMdow",
  "key2": "YMMeWEtHZirN34AKdJm2L4HuvRbA5gfHgVrXJDAsc247s9kfkkpLXhsWZ2MqgYMmqC9ZyJgy9NqFV2Zt4Fukz89",
  "key3": "2VCyGt7uRpAC6yeg3Q48XBLAC4mwb8PaG9uKFdSYuJPQ4LeAb1JDwKeH83cah51gokAY5ZYzj4c2YBkEnfjv8MFP",
  "key4": "BhAV5Exus9C6pREnRRcKc5jEoJCzZjGcKPhYSWXNpyPQBeLgFYJC8q5oBJYwDom5NoSzXB2FmaqcLhkJfRdAYPL",
  "key5": "5QQvrEXTXNkGfRaAi7p8FaXDUpymnjuPi6r9cmbcP1aAA7gANXnujpne5pfmwBMEnY5BvDTEuyU8bhHXUvR2ub3z",
  "key6": "5CkhXriu94fmE5rni2dJ7pt3dLAFMTy6pAXRQ6eEVhQ8msTnahtcupih9KR2zSgoXnPMpk4hAjaEeCUHHW6or5KJ",
  "key7": "5U9atQLzcDKgSaBcwVaXR1onc2j8ZZDgDDLAr16T8rnuCgxJPuHp2hJYF9rE3jch7FFTYs1aXApZDZrN84hXumeJ",
  "key8": "67kXHRpexp627pyzeowRWLX6jx67JbNeFmEw4yMtqeVcDvVMRbuA8Kbhduh7kaPv312MaT3USnLV3CfLn7JeNzDg",
  "key9": "4Kj3DVmteJgYXRhauPLqyutEaY1zNWSSzMLyPfdpr8nku3HaExub4NjxPQQCqBDnARVCKSQaH1iBhbEjyuTWKFHv",
  "key10": "4t7qcjL361AcpQDeuzCG5MJrAtMu6TnZmWSYamrHhYZkZcDzJpKVR7eyWjrjWnM83MFk9Qwi6KGuMc57N3gMsfGU",
  "key11": "53onBDHuxEMSLb8d4cy1gmNNDnUf3ujEm2Y9YiCsEVRC2v21VcsUPMstUqdkCFey9mcKC2TgatmQ8JeQ9ShA7wGi",
  "key12": "55DnMy8FS5oLdizgPgDZtJJxhkWKf8WD1h3wEDKWQ73mfUAAKmLnAquL9yVtSjfxVnMHme2fcTohZw4EHsubYjuT",
  "key13": "3Q4K9by6zzFkwoNvXtSyxEVo7t2pTYSMXeP2yk3T9Vj2sqp3Wg45qwPJsZxZ2iUoytJLGr26v1Rb3ctKuCzFJhia",
  "key14": "2DASLAXWEHq1zdRMge9cKcJHBBQ2tbA75EzvdutTwLrCggZL2Sb1e4HvFF7FWGi2qaFcHfPb2NtDCanWTc6D3YdG",
  "key15": "37SvAtHwE7RyPoSAZbWCjVNniU1XjJfJhjUBdx1MDmA7h6NR69fJB68JmWX6qcNRNw7o7Tedm49EvH5gnYzByv5X",
  "key16": "53VCsTo1UehQhvyntrJzLR82uBZ4XkEBMfX99mNervYZFnRktZwGfavVT9fQKTbbeBnHJhJF48ZB58KdKrw6uL93",
  "key17": "4ZSu2aiT6M3TCFymPC2WeLgVryJtncxTbBEeyD1ULcEudKbZT88NjX53n2bC832NriRCTJRVD4TFbxH8w8S8VHcr",
  "key18": "3RgXsq3DMSB4fmVfUE9mqyXZEd1a6faEaiKV3SuE78PSw2MVe9PuZux4mHywGhXxhb5ZRoaycYtastMWpNXH5i7W",
  "key19": "3cU9oLVK52mqDBDcrDMMoJrMeQ7m5huCSajtWcJDSLtUuyyKs38ki4hibFZdGiq6Dnm1utHhUDw4xPzmAApRNJcV",
  "key20": "26pKDUttBpG8b6v6egidgdNDKx9vztzqKckw19ACvogFHfWH79QzcLEiEhCJj4zA5ynznAqgHSYaqGZ3JTPV3Aps",
  "key21": "26GTiaTv3x369Ee41xdMEzmsuD9DcE7KTZa2hbJBSZUPGefc8BwHtSw81r9WrW5uUu2P3LReKRs3nKJu5bRpwqV5",
  "key22": "4ieadgtPxLEsrX6YVB8iAP57XVjNwua3f4zDFQdR8vC1NdXFxFWqAJpA1Z6wc8YVpWJvouBnxmYPL3oKYkLKpQwN",
  "key23": "DgTHLAivabqRoQ9BCaKj7JQxwWFfGjaEHY56sPiVrymn7fksDk3pEgmVdWY8utUGW2bsETC1Ey1FEUZhdp5rBoj",
  "key24": "4Ngh4g87AGgsibeWop26LAtM96yu9jeBLXeSCLidbB68JZpfenw4TbHvgxSf2EiZTjmfoyY6imLKt3hrC7U268ux",
  "key25": "493rhxT8J6v5pasgTVPcnYYxGsLNpu8DXj2Kvi7xyuXNRffUiq6WmGXarpXLTXADi19oJPNobnffLEpBLkiBDNRv",
  "key26": "46iyF8VhBkpZ39D32MLoo7cTNxf4cVgw1Z8mEeFEeF58GU374MwUmnYqNupSKeDEkohqQx34bcWwRYDpBwknW1x9",
  "key27": "2P6Hj5cWAQGmsBHY4mtHVA5r4PPCCC1QMoWQs7ww8e8qTX9pMnbKZZcLPRG1zZnkp7i7Wqqi362qertcQPrtZ7P4",
  "key28": "4B1x6B6bZpnsEMrdcxigoL4vQdDnN7uwyPbtdwik1WZfmeXZou8XbQ792iXr6Rwefjb7gQehSifufcdxXCLHRyLP",
  "key29": "48CuyoGSynowg8FETGT6NMMgyeHHYYbXcKCgqL8EnbKWy3kqHnxykZbg85ANcq4zkbYXxYuy9Y4FXCiNcggHu22",
  "key30": "dQUfF7pcUHxm4TSaRKvjpk84PhkMeaVpQL1bg8tZdSV9WB85UiteFM5SevWuujq4FQEGvfpT5oMhz2f9pVPZ7c9",
  "key31": "5QWQRVuUnnoZ4S9z9NdYDYeJfKenriCsjumWqQUJq3DPySmTWRe2gBcz1df5SgVUZ1BLWMzvEVHycemD9u4Hz8TK",
  "key32": "4YWkeyWXbcvD4YeqPPTHRDDxuWSWJuaAAFE3dm6Aq2ZpSGVNdFXbpatvyAfHyT6DirUoc8N6vY6xhWfLaMEENcTH",
  "key33": "4V77MTxgFLigAY1xXrDwxiLLAM4pLLfRaT8SYhTaB4v33kAe5Lf4swbcJwSPsfRLFXbxBpPG4ANLixmPgLcvtuL6",
  "key34": "35a4tppbRqrkVLdwyT1keUpx4x2bHJnPfSCZ2bZVzf6LdYJXzkoYNgErrZZHo6DfACCM5YYUtATvWHPvqdnBZvFd",
  "key35": "3RGHegQuSqmdUoSVrTxAyoUvy4QvxjWjJmBF42ey2Q9fKDo7jQLQv3AvE1Qx6Q17JGx9fxAZ1KnChfgq8m5LVRDm",
  "key36": "5LPQizqxPpo4hUUHfj3dnyYZi2aSzSYRFmKPtKdJYb1JYCXVuWFMBf7qit7to1Vx126Yk7jYWZQUM5Fy7eqgZEsB",
  "key37": "3f41ynvnXJdNzsb1Be12LK77UuCjeesYQ1pjMfHwwiXoXgzjA6HrdQgj88ScWaK8cx23vRn9wqpPaAmHxzcjihRS"
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
