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
    "5iDm1ixh2ahcirhC4FoDXsR58mkmvcztR1kx2yS6pd1ZVJND2Tin33VoyBFN6czCJEyKPMBBCuLye9BqWtgC3T5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e5CJAkXGSdsHatCQTxu4pdQT7tcMjnf8qEZCdrP39uytKM97bhP6tarCDz3niJPT1LbwENZ4XsKNe1dmfBR5LwX",
  "key1": "24bHQ4E2hKpUR4EmU3KP4apQef9HY5tJQNAbXewWy1jt8xV1rR79wtExKhAXqH4Uhx2o77YZ4ig2gCupAK3xjdnR",
  "key2": "4NAWCnNErN2r8UAeHDv1S8bHS4GMrUGBaxhSDcRTEgyXqdUBNgzAd4KmEhN9gaKWdttaTtQmuNtfsAFEi8mGUb83",
  "key3": "5oeEcXgbidV3K6cPRNFbyYEkQmxX3FMkuVyJ7TnePcjria9NaidbA49x3f8ztBxozjHFgYFMU8qqb5aXKw4ZPvSc",
  "key4": "6FCDJdmtMsvJD9JAZ5faqhgjSLVfvhN2fHxDF8EbNSJMd9xz6Lsb5mxdjSVS9iqJdbNP9Qy4DFt8BbaXYSTDdG6",
  "key5": "xvpr3CnqzCrEVcdLxZzEkShHZ9env42eR6PXK734wmhJPBY9bFv3Yr2XRTQHnYxZXerPWh9wS9ndcDewABVeZQ1",
  "key6": "2cVt9X8asqhobTtCXiLFgiT3Y9xkFJUHNhjQSyBcJrHDirNwXuzx9WzDJgi8yFLD2XUB6mVF95R1BBBckXTnmh53",
  "key7": "3hzhqqMWYaoFJfqdkErjneyaSubw6xKVQ49ckKi9T4fPkcw1n4DtqTbmn1d7G3MwtBHAiBp5M1gxUuEDYWcCLWtk",
  "key8": "5j8hFxvkcjpSYZ83YsKFcUZPjL9yyjnLWpsnoQVj7NEhY1WnrDWjFjQxDfxTMA7Ai3CZkCkpwFUb3eHDdbvrn2Zk",
  "key9": "3D6asUBDLHR3YtHNAjMtokBQEecvGkaW9fgWdU4EaJCGp5ZsouKHbnbuWDVHuePCmTvZ8BH68Ntk7hwpgh8oCBhF",
  "key10": "4oB4WTt2TCeaTTwkxCddzoqaLv5BWvEboZfzPimdQMFeCCf9TWEYiT3Avniq1jhb2ZcFQ4FWzKa2w9iePkc126As",
  "key11": "kQWmhJK7C8acyWnqEzrwjxkoiPdu94FjPPFSHuzkHW1FyjU2G8zUzo7PzHGepb79NyGVEmHmyfnRWmWeEQHYMyD",
  "key12": "vtSvbvYBqsFYzPTnLz6oXBCnNqK97767XF6yDNkbdANHEVa1uoK8MLwPU4SuJQPDU9cBePgwAGf3kfoNdB3LB73",
  "key13": "xE65JW7Nws5zHiW99opkDtNiwVnbcyg3xXSM2EWJa2X4URp52MmY337mV4kW85M5trswNTbvvvtXaDSMebjMPix",
  "key14": "3CCNZM9LpYExWBjAVbxL5PimdeGzUCuuUs8oDcJ8GnHCJCXZduPgVXqhfWCBm8eQX8BvtBU3A9iCGvRBrmfwq4om",
  "key15": "RmjhZCRc2jwmu6WiUEtYuLa1eeRebDKDkafgNTgDXQ1nSd3S1C9hCqXcmkrpyqTz54ZyGfcrHLXNJPuXzzEh7fj",
  "key16": "62XknJ63FmjdsH6d32YbciqZbyyBKk5kiS2Ww9xFqhvZjLcTXVZ5EfTQbUBRGbdBJY7tEwKFGVT4C97mRsXsvLTg",
  "key17": "3DW85zLjXY2gFDxqShfbEZ7xFUi2VgsmJJoGpAhRGz2srKm8vp5qGRjhHjRJ2h72EJjEMbyKXnEAX777SWEwBGaN",
  "key18": "5rPkLumrGG8cHMiMtgMLu76igf31vZNtYEihTDxmwrHG3QmufKbvyX8JzXiErEp6YCrg7MHqhgscR9nmz9LxxYds",
  "key19": "4FTiQ81cdEsY4q85CEyy4nqpWmyYRAAMAaADggtosFDER55qndB6bkRB5x4LgcLkQz3oa587haXHYGJ6eWXUDue2",
  "key20": "BeAbAj5TDV8yW7LPXqiX8zLTV37H8FxPKXdiPbqPGfTgjbTNLpDzQyPJd66ic3vTSL3aJs6BNJgzCk4Ax9Swu14",
  "key21": "43PShKDisABYLye8inKZroWZyMZgrViz8wSypHiyakqk53PJ1xUpAmcMfNBWTehUn9k5yHBJLygwwAXP2s76tPuq",
  "key22": "3rAkcTBWuUhVddpo8pFg8wnpra49PXAo4BeUiwYSHsQoZg7CPchQLxtTZA7jzYCBM1bCuxpPtyHEiMX9oPe2EwDc",
  "key23": "25mynfqEYMi12VW8R36FHaJaVRRXMkUqB1ePDe7awZ8keQm84FAdEmPNXQXy1MZJyPvA7tkNJQxvitSFd53fni89",
  "key24": "Q9sXCkZsdj78E5WEYHnDP6BGcQ8hwN38m7GcvVXPuwawBZ1pvLL4d8owJua5wAkHCtbaiNXd74pe8RqVENPfWTS",
  "key25": "66HJso54xpqUhJgcyj4F4YHiP2XwHUMbt1wXiXP2Zc9uvdpZi4cq3kt9EhQGgCQnwdV6AceZ12a7jm5b6E2Q3JxE",
  "key26": "FQcV6zGbpPjpST6RFj2ewatJkXnFnKwNJsCVnEmL4DFLxhBjgo8JY1nAKUEpinLShgNYCi3C1esq7H2T6DbintX",
  "key27": "49vgvHrWc8sE8GrjpNaEp611tvoBiUHmtVgBRt8QAmQmE3eKKkEAA9FwaF82BgJ4mZkF7XXWZXrG7D6tkn4fRCUS",
  "key28": "5mkczhebwJ2d94kKLiy4b47jnfzVjvruT6XseU193TUcNEV9CPztX57vHSrTSE9Z6Kx6QDgu5JNENTAnpPkvGLjt",
  "key29": "2zBqc4QzECxofUVMEX2rDJvywsMd3Utg5F1KtR2z2U1V4o3cfwYydmXwjdx1SJbRhGPsXYaQ82n3CaN2EfvJedtu",
  "key30": "4brq6wbSiKdvhZzo5CjC4aSRauEvwAo7Y7RghwEzH4kiEsw4cwmw9UUc2ZscAyzo4LEMiDiiFj9MKyRdKtJ9kx2N",
  "key31": "5M47fhKAr8758fzJa4U2T3b8QrHRzeNRcMnRTrLUs51fDCDB6ywRBnUsanUJakAxjnDm8DEPExGsjZoPW8cNimbr",
  "key32": "5Fxbi22xwNitfNcoHoupr5rpZg7ffpYyXLNbq33ciTqyw4uyEk9D8bGvv9EMwEZKcpaj4CCdQfXrPe9oFLTZSqkA",
  "key33": "3V7y5yHV3fZJQtuyJq2y4DsgZdobNWoRT4oso5Z41mRQVEq2ejm66JXEtcq6Wzudfu2h1WNNk8ppvw4FDqAjDQUc",
  "key34": "5k3Mq3bkJu1updsJAFkLYyzJXAJK7jMHw5Thy1Fana1Ee5WFyuxcXUaQ2viawggWygg1Xi4mPjiQNSKY4bAww6xi",
  "key35": "4MidtuZSmttCPnXAR7Exo9uvanvgaTygXnBEL2DFMsKtfc7eT4turYKBsmgQPQnpaPwcsbRKJgMxCoFUG8KvcDnZ",
  "key36": "31ueTyaB4YXa9B8AsepKwq6DzJnJqWp1zuu3aa65Y62pt7jMW8nqsBms9zagjB9MwNAWrT1zZsLhP9mfFsbaE5Rf",
  "key37": "2m5ezXEmGgb2DGbvK2WsKMYJP38m471QS28afDd6UeaSR3zmCFpGQmK7rgqDECdssNuJecV6tBBVCjvHBVyzNLFo",
  "key38": "3Sc3yLozMa6VsR9Phz1EPu1aa9BtcVqBJXaDWcpsJg8mgEBw8oDdbr7RXzkzPj6R3CAszMP3N1jPGAizhWHLSkAR"
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
