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
    "42d49KtJRQiz1nkJRQSHyMMfuaqsfn9ehkKzFtnmGV6DpJLFG1dcAoKCoARcZGrmvDFkVf3HmVPUpjBcMr6t3yW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KhniyoBSyc7qotZX73Ji22erBMzKaKxzgRBvecPJZzqgLEnReTwwNZSMtgGuAUDBaGaVWNm96NSQNj8x7oBYeNk",
  "key1": "36EgjST1GaQse9u7R3UkWMvHH4HvgYqhw9fnKx4fzSGbeYvio7Jb5tmGL7jxSumcC5fPjdeXZHD8TKas6qGNYojR",
  "key2": "Msss2KhrevRE55URKnngoM9SbswAPYbiCuSckvgHtWCCFzQSVkyGQ4kDFVRUiqT4PJxPsCjehQmrkbR2Bh63iLB",
  "key3": "3N1KppiVFNv4ycEqK8RLB6mLRzYkLREwnbsNeF59nNNjimyJkKoSus7aEHRp2Hcbc1RHxnnmYWyKpKw36qxLX8BQ",
  "key4": "3PniNzCJgQBSCuK1h3JbBPxsttyQQCW7CB2iRGG3Qj6DPKnsHkP5f53Ps4vMrwz911tVoH5spFGipnvqeve5oyAP",
  "key5": "3QjiH4TeMEKoP2oNovett4mGAqscikBm7M9abe2PDYryiQ5rSr7S6DycV4PyfM95a7WGqp27NJH3J2FSbGzhtRJK",
  "key6": "QgMgYu4haJ88R8BTkft2La6zmmrrB3n8XC56eF3fbHwNaZHEGPj8z17Q3VAMcvifpW8qE2G2UrWitRE23oqSjNU",
  "key7": "5N8QC42njySwJbTeJPjLBvKBzVcpfufaH2eEaa3DUtCCVdv19sLBRkNyXPpeyeH1gK5WPcadaf8HdeDUBfqmyv7n",
  "key8": "2nJWiE3uwCQU7CFihn35nShxAoxYkyDNq4JZ8pLzMGWMbpV49YwKWAKFDwDt28J4toFvJEKTNGgHq1joXGgxJAc3",
  "key9": "4XqiLGUPH2jtQ24Q9kPXLzDXJz6rBkS6xhokGuAWLELFehV9BjKRwKsZefKmDXjcBQ8jouFH3hmDkps73Vziuxm4",
  "key10": "5uXRm97ArE2RjwbRWJ9KCXuDAMDtpvphaQskNB45Bz8seHxJGZ2FTbjWbaB8oqY1KovftjWJbYf2RGvFYzrNcgbh",
  "key11": "5RXzL1Nizkxgss6bfdwNbJJwhyJ72oYvD9heNtzNuMRjQMLpzFNwACQ1jbekVp6NcLkfm1Abzeip3UeoSA5JApK7",
  "key12": "3kdoqMUMCjmdjLU6DhBcKN9huc7D95SatJ8uahWLMbwt1k95zV4aZPHafVXc4bxqabMeLLqn3NDdzsKc3SysVTF",
  "key13": "3L6PkAxPUKHEDaiceggUA2osMEuCpeAaPLH2cYvYNue2FFJ6nkfQZg5HCV7sdjuMXcyQ69ttHCAHJrHhzmXWsj3A",
  "key14": "4KaiE5mPeeJcNDrXZBahyi5t4w8v71e7atvBei9cGKYu75YMnPXm2eidCQB9aoSRzifdN9SazZicMT9X7oRuAmAK",
  "key15": "66RBsTJDwf8kcUhG2FVx5mnPj4gy7383dcazqxCg7FeH7yn9PNfbFnfPRvjupoGSo5bgTEUMYdJbS61biowuHNds",
  "key16": "4od8u38xZrfuD5NFX8cgamPzffKKv5ievFSRDtPxHbwy7xsUr5KtrsSKPu2gcPnmWFEsEpQcYycycyoNF2Qxm1uQ",
  "key17": "5RpTPySDWGewJKgpZu9rmFXThrJMUd3BY26DyKq8U7fMdkdjyULj5WMJ4jM7UuJ3LqqYtpKXas69uUN7taN86K1X",
  "key18": "5BoPWp8Jnww5y56KA6tDEZ94x9gQfq9srXAy51kVHn6eQord66uHoeoA8SSb91YwCqDWhur2q7zNUyXK2sUsFMnR",
  "key19": "28xu8Z5rYViGwTSw6rL56a8PKSWv3dNaZLDGH55Ck7dzqvqbeDm8zCf6NYBiP1mYUSxqdSmyQSkEL9iRKGh1b2D2",
  "key20": "2TZLwXADimFD6hK18HzFh7xAN4sZTTYzUapfFr4dwtJn4ybsu4t8NxT3irwLJyjgt9Dz7XPvXritRwBEdPkvE1dW",
  "key21": "5m9pe8cwAbWegZRccrgkfTUVZB3KFcwymRJFE9jd3iRTHj7zVn1nkaxwr45mDbkFCCZEQ3sFpCSPWhzEZbLBqxXK",
  "key22": "5JUwzgYD63YMNMDWPDpcRabSztDRehjF8yFA9kvJ7LCMk4rE9b5WjQ9LwDPtW9Nx3k4UJNS9XUjB8NzXrAphsFEu",
  "key23": "2UuPaVB3evem83mdedVXF4zxkRZoB8oN2tc4HiVQXXCq5LPVYC4RBe9NhW3inZgdQ74gqRcHq3dVtze2frPdqn1M",
  "key24": "5MGdibaZo7BsNaqynak8o9eaBAw9SeJcn3UbMWDU3BgWBFtvS6QY7y4VZumDPpFfmPP5Xp4YiTfSoXtLRXKFzNHY",
  "key25": "57hFKzR8nwBUzNM6SaMaZPitLcPxwBDaaYMgeNTWcCUa6c4KWwGuJBoJk46VddZqMa7DwYrEybxqTHHKsDmL8M8S",
  "key26": "3XSXBm2ohfgUhehRkTxrPrv49jbfFKYsTN2EGWkGW7tLfxQHehP5i7X3y471nJWEyV8iXUq3bC8DPKMjuWL9xDf5",
  "key27": "2divCNKkGdbbLTMLbJTufJD68rWGs8T3m1a9dz5hdyjpcE5PDnW1kQean3i4Ro9ooaR1nYrYThAjJPPSzgDXc22P",
  "key28": "3MvAxazcwU8BdomHrJywBu2a4GCAPfVAmRwdPJNSK6mnBB7QM9nxNCCEge7RKHxPqB6NRvdDHufU2UjYmXKvB6HG",
  "key29": "MGXAzVUvHvSK89xd7sJ9YihRARPGEbL1rLPBTTGPdXQBkhkdpuNFxe894huGi2J9wy6w6pqyy8tN1Z3zANCdx8W",
  "key30": "Gm6JNUCmthGuDah43VbC9X5fFQoyDod8ZhStJnb6Cdw5WsrqFfRZLdqBXnmXpbBb2PT4r4xKHLAApMjWKJgnG6W",
  "key31": "WBP5hbD3CosSNwV1mW5GPzdX3oDWZCXfhaH8SGE8nyRiiemQvQ8redATQWRfqupiEtzcaTsMGusCuZ1nCco7F7W",
  "key32": "24BoitEiu2wawve5WxhaqF7A3J26T9Z2w2gj5CZFdGHYGCYmZerxYEyi2stcJzBHyhSXNZsB2CP52wuXX979BsYb",
  "key33": "4D7EwUeP77WaN2dkDGRKZdRduw1ia5ZQV1azXEQMiDm2BJUrDqRzCx23oEyuX6ca7Hiqivx71aDovBK8i2smDtqS",
  "key34": "k1bfgBcpmU4grtaN2kThq8124vvRA2893e9KK9m3NABMkb92Rv1EZYtHCAHESNhpwddhFXL7XFZbWek9CtCJUFg",
  "key35": "4UwNvGUA7gMoPFp68NyZLyaReNXCKSAhDtozLJJMXrrtUX8FmwKGSy8zDzwHnfnWS4BmTxJcaPL6svokPoQqmuoQ",
  "key36": "4BR55vg22ccLXAe963GbqP69X4adUTrTtio4djWMEoCn3k4cxrXg7jN4wwuuAr5FHvACgnnYtp1TRjs45g5XEgfC",
  "key37": "3JJs18wYixCF4d4N5qVyy7WRrmBgNopJqkn5pyQKehLM3CsofLVquxXqSQCCLpEUe9UnEHnhnUc1q9y1CKRyrfqb",
  "key38": "5ZkNLre9PdqHTQRo2oYUAMizLuyeSijaKW54p8KTcNdeqGgFVo4Le9z5mDCj3UvMP7x4SuMdZSa5iDz1ofWtUEXY",
  "key39": "3W8nFpN2zxZ3g3GZHYE7UpsLqB9FGfgF1GS1AGkhQnQN2CFShxcHp5sbQCpJBR538SG7EUh5ZXhQPNcNc1MhQ8R",
  "key40": "2vyaHFWeQHwJUaCYH4Fpn2ZKfHue33ci3q7esomh3e7vbuLfnXk2bQYsrGWJ2iVPU45pWGkwZcNujGoq5cBATq7W",
  "key41": "5HFZJTNZ7FT8cEczxDxGmKPyfG8wfkzcbtxcbLC3zUiqaxmtgcnpLDNyRreQWSc9XGn9afHCoE3DeChwmVtRW5G7",
  "key42": "23kJxSF5bmSn29HU6mcxZZdsFD7iYEYb6rHyH4mJ378BY78bWMdWjZjsgHXg7fBLMYXgkdFy6DPajoPUToMeNUi4",
  "key43": "3d1XvcmPTQxuS3og2H8iiGPHdnPX3jFGFv2KFRQkj46ReHUKgdd8BmstjPuA1xuzLcqvfK4GWy7nk4fBhxLMTSQD",
  "key44": "5Nc5nAFrkJmHrYZvFhy2vJNhvHYAwRpb7bADjKCQP6meK5LB51YeW358mej6sCE3AZ2N161n1jVVV5HZQtmsLUj4",
  "key45": "2Ro9wEQcjJXdWDikUw9p9qxSVUfqr1NavstpZkb2tWmQLt76uX2vExLumjDgy574pECh5ipDFVvKvQa7vSyxcWxE",
  "key46": "3YXBueBuMJ1vE3kSMVM4o5PZKC3EkWbDYcjsSfu8dFyzbt8pSQutFDis3AqBtbsYviLSuLVvsX9X7hs9VaWY5kky",
  "key47": "35rq9RJbWMP6bqDhBdrnUq37dnJPi9DZb3vS8zxrjjqYQacRna8rqqbkkUiQjYoTF2B4sXQxnsKiYQuiL4Vc7RHD"
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
