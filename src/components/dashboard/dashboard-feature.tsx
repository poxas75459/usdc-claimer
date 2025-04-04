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
    "41msZGD863FKmt9ZpKfvBJqtx4KdSXVyMw6StRMvmekQsj3w3S8XXsj69Vvzc7H3hbrrWvDv81k7mnjprtX53FxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35TNcjNnVrVTtS6qs245YmGvtAcKRvq3HeAVtgyt8kpp6HB82eQkqAZAZE2Jm7gen4NW6VNEC2Za4xVoNjdsTdar",
  "key1": "Xpu9FnZeCb6iRJpT46wLinRRm31pDfJu49YSuHtUT5HyYBpJFg3m6M8HSryqtks9LNxQwchMTgEg8kQQT59rotu",
  "key2": "5egi3rFSh29zYxieyQ3xdjKoxqfJLpVoJrTUVwVPimbxDQVSErKjYS6hmtdYFjedx8K8STG8PaKNuq2PFwmRb2nz",
  "key3": "3T2xsHu2eN8aeBLqHkFX7ooLc74LQwDH75S85VhsVyLgYibm7Bw4tc3H6D17jVWCpUqVVFCiguGS5JcmAWAfFCkP",
  "key4": "42rCpF6mrmyuju5C7au1Gp1E4CQExhuQsjW2JknJAijV4W99AXPRFyJKmjLeLX7RELK5juFCRWULxHo59N7sydEB",
  "key5": "51sW1Wwc7H1jQtGqmBc9YoRsqUfqy7hoSVeDu4zdycZrc2wH7qJgJRkBy4wNWMaszkCxhaHzSyu2ed5yzGRUyk55",
  "key6": "jPayE1jPAj2biUnS99zcWTKqqUz863bFc9mhcght3X571VP559VSxpMpVPXmMrjHQk1v84y6rhUnapDBHHKhFRK",
  "key7": "2MYB6pkUZH8BDrLeMtbN8hzcjQBbVRjmu2oSEd8UwGNKpy3QmmtWwjJ3SdGk2qu6qxBCBrZggjwPqWom3qnq2DFU",
  "key8": "26yXGK2dTsHE1SxmvYExoyHNtEBdV3QPmJmuYP27DzcfrcpLjcFnqayv78EVVAoB9og9aeFUYpYTiqBAMr8Yohih",
  "key9": "4bYWg3DP7izZYu6ZvssZUSzX7XF2pfBVpyF7FQVtwZusNQp622UoGpVFgc94n5cbMPhvDDPvAijfUYuHEJyk3Ww5",
  "key10": "3vtFBwFYSHJXkYKem4YpRaH14s3vYh6T79iJ7vnrAofDdcsV23d35UmSQSofR5UbPg2Mu7ujm7ZXkPoY4fFYTPxA",
  "key11": "4ZEmb7EaXVwhoHyY79tx8C8XFxSWqwGqqY5rRDCzqeNBpfX238khdQHfm3QaVRQbkcbtPmBYcRjtJVnRegwT8NuH",
  "key12": "52ZLZxwkwHntHgjFogMXJv9qAy9fNVngmig2nr51iZg61MTMM621S5CYH5G5Tit71fq8pdMDomBPYMJmNwNizRK",
  "key13": "26MpUduHMob5cBheonnvTfZYzgUjeXaMF9DvXNJFPSQZNxSEWDchBbpdfD6BGLTHqpiyhpbEEF9VkWGC84ZmwNpK",
  "key14": "3j2pZvJ9LmL7Gq8v18hXSsPGSTfM6xXRxH9oc6vy7RihbCf19u3MKv6HVb6WmKXac4ibtE1fogiLhjftfEsU8grh",
  "key15": "5dZWQwXwZGpJmH2goavDoRvkfoXU33dP9QS7qcxKGoum7V4hZZzDfMvNQwgeaScVBwHuAYwqvhZ3j2w7c3wgvVU",
  "key16": "5j8BrfSu6LW3cFgpnhaG5bH1waBRE9PtjXexEoTZ9xArqzeya5JMoDyny44QCd1zVzBY2MHstyA9p43RSmBgkg2Z",
  "key17": "4f2RG5TVy9Vp2iPzRBcBXivp5i17VKAGqCmBdDdY6tvvzLfLXMSunEjXnv8r7nm4rNEZJvV35f1LWXcHvMJrEfhX",
  "key18": "3bpu8s464mKcURoAqoaVCue47r1o4EJDjcpe9NiAXFNLTEgegK9hgoxzomS5RPL8XQXoh4k1rw7ogywn1i6GU8qj",
  "key19": "2V63k6NdspHUFBPupE7445Vqtxt2rDFJToFowaqYoFEQrmTxa7tehQvxomQmChhy5qhrWEQUTixpJfJ59Xza4XXh",
  "key20": "eLnKXyMUrqNRMmweCJTNWCecRNLxR6SNzBuik2BFHSFtRd69DfWWjgBSJdDHzUneX7P4S1Lb2EBscYt6dFsAPgF",
  "key21": "KdBn6AwkgeP2jkVd6XyVyJmEwW3o8XddGXvytmBb95ehyBMmVUTFixrf5hz2FNDcSifrLAj3aMR5RXarzqpZkpm",
  "key22": "4YkgibbY3dUpE1MgiQsiC1CSFLNBEwT4hyi1KToCakxZUz8cEn6mkfah2ycPw3AUGRPi41JedXS52fryZvjn6nXc",
  "key23": "Ksn96xuLRPwzGv3C75boD1utZAgis46TKRDz1CDFbrLWMRnxoKgDgW1vxNxXRoUHfEx12AaxMcVupmx8VjxKMLH",
  "key24": "5rFkJ5FDWa9F7j6EzpoaHBmKthANbmE5yN6rzREDFDGxzoYGuX8JhyWuiHgFc2bBNEmNGYToWDKfuJxJykrWrAba",
  "key25": "2vobaz2LHyF5AK2WkQVP5HDcm61Kije7zVt6eMzZd8ArjxHHAoxmiUUSV6aSzdCcKLFDGqkqFD4qro5DineRQbGk",
  "key26": "3QAadoqA4gjeFExXQ2H9Vf2tYhtE5r6kziBb1CNFSqtn3XEfFtnWGok1Zeey9FRvftV6PYFHxaQv29F81TYmmBqc",
  "key27": "255fmR8EpFv9nmjY24FuFoSRhEkJD5tyNXt3XxzwVdaZj5VS6JmjwcbwkBTLyeHC9ufCsRj1hmWzmsKWaA5fHs3R",
  "key28": "41RYMV6Sc25K3StRZm3HnZbWu2undxkhR96i9BXhmpePneSgWW7RckEQXDVFiqNr8fKFqpvLtnMWMQHMNYHhtY6j",
  "key29": "5ZC4XmVb6VuSAbADy4PjkRvhkLAkUV2gHLS71fdn2Qa1DQpBvbPL5efd8B1ryV9B9bUUdsWebKod6J6Ppvr2q2sA",
  "key30": "4SFdGFqDa6nvSo6z5XmJBejptXxnJLz8RHQWN5WT767p4BCGMfEDRmASYxzHPVSazXUWrX1hyPBUWrpG9rJ1Diok",
  "key31": "5137WwwhKHw7TmprSvAyTKrQs7MSx5MWFEAtxgAX5HqnEhGhQiku1LGbVnU6Q7jtasJxhQhL8RuirozTZgmBmtSq",
  "key32": "5K1RB1k35RDFDJquR6e8cZC88xBfJgGYXnKijWHwE1tfeW1hgVG8YxTE9jHBFfrz4ycTdC3CTcoEEHsJ62pZYyNQ",
  "key33": "48bycVpZHRMKFwFt9dG7TMJjU3QbZ864WwNDEAfdefJCQmWFFMeNSEXKCTCcHbDXatWAjLgbKzPWg3N7i3n2L5Sz",
  "key34": "4BkKTFJ54ofdqbMA349f557m27o2957dkfqjTneaZZiukZBctBaLN2rrsKGgJnMmJ81ZUfR96zBZusVQH1Le92Rp",
  "key35": "2YN9A9TdV9SLtahbyQqP1sC4mVY2xNjbFwEf9x7zuCuAnwaMbjFQMopSMzwWesWiPYtCUK3TpNrxrT7b6pLF6Xc5",
  "key36": "4uYRAgTGTVQU49xyMRCZqz8SAahWHtG2EuYEVapmcvoumbFehb3o7uvLYdDG2YMqywddYs2256AEvV577RutDwJk",
  "key37": "nskg6Dpag1DHkbi4aSswbmdZbATYM4vpNM4RoTZwWBfHGL6UkYRfKgQfKsTFDC5hBXDxSAKHj6DUd7yqgPdiKz8"
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
