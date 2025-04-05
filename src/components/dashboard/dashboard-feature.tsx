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
    "sr9t7A3Cao2Gu9ojYYTzynb3kn7mJUMvRoPi7uZyRUystEDg4As5yNNszffDYiCiZSp19v4Rz99XFs8SDQMd4m4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mc8mEAzMHq37iSPqsQv7vV59u1KgLTAMZQNiGvfBpwAheDQPm1uBZuUhSStFVAZZ7QZEPPcnShePBbhEKQ7JZYE",
  "key1": "3U4TfKH77vCAfkq4PoWy5kgoE4oPJewNaDqiqWmSRUXiFnNKjeSM7SqhY4iAT3WxwKz76D5uAf358JJDAcKVfiSA",
  "key2": "47nnWtEPSSZJkPWBLHLAQxobVdQNkJ9gZ1xXExqLjxPq5Ltng38LrLFVnzn6sJzJn6RQBEczQbsc8kWgRAkYikN2",
  "key3": "sMiLocYm4Mo18FDNsW5BLTVqRBTT4jP1giTg9E5jzLPs9zTiQyTzgQ3peSGwNht5WYZPqHkonz9f7R6Hp7XkmJB",
  "key4": "5mHSoohiy4JofivQWqLy8nXq54Noa28GLnd3pExk9ehTCYjbXF8SsfmMXBDVGNWVHQh3AwDet5ahMsrXJXTgzuwU",
  "key5": "5cwVcJigjmDbRop98KDFHHctuodN4aitAz6AxKx64nKz3rqpHDg1WVoWLRkam6GpkucAu9PYusgMDAvQh5Z85L4j",
  "key6": "61qjGKAzWPrGETbKXpQ8thArgowKoYP5YWnmJQyWcNdZZ3YqGFF1qLHWD4SFD55ganLGnbV1eB2At41nfDPKC8qX",
  "key7": "5564Z5Zo6ZR6ckS71UaWMjAqtvRsYASbZD9mFDkZTfbcwx18oYorHZLRirFHGgsKJParNQ1SbiD1XK76snfjH5az",
  "key8": "2VJMACd38ESfXVkzm4xqpssjBVEUTzuwz2N6nfPZXcf1EMGzy85BFXUvmvmbi1add22sKiSqrsiZL4NTkBHvzhN3",
  "key9": "2icN8TdNRWEV931wfxcGPGSCyQrD7XRqRdrs819TQue2sZyAV2oSd7K5fm3WyKYWMazkZ3ZizvBL3BXLXfsadTjq",
  "key10": "2ZCy7nZZLvGe6p89KvfxK53BXMXxW91z74JbuWMJBjmWkwAhaHR4kfP9t3BVSuNGxpXWVeFEQUEGVsyjwHnJnMLr",
  "key11": "fAnEgKRs5JWGDBZNuvLk9YNf5Z3uNWb3eQx5c9GxXMYQcvNrbFfP8gyt3n2Rm77wTw1DCGXwWZypgTPk58PMNW8",
  "key12": "94fzZhcDGqfpDBWUUWpyRnoUz9E74EEtLRrxcckQmVcufgyyzj13WHckE4q8G7nu4pFSg7A28rci6gR5FPjYJQD",
  "key13": "TUbU7kcDHgRx25aZDJxfm7vJHfe3TeCC6hdwLHyJQhotZDpkfcv5DkejNuGxJYf3gWWvPRYbpCVjQRn9UVBzXHg",
  "key14": "4TCqQX2ZEJQHfMZVH16m2aTDDGTiWG2gViGeVaEghkYwKRHEi1V5whX5bSDrs2TUnQahChRFhY9K9m9mDnEzfwTN",
  "key15": "tjdbo2ETsRgpbcycR4LxJwUXoashFk5df362n5Gi3nYQHausjBCsLvTSYCss2VV2MD4sNqRf4LDidjwGiurysn3",
  "key16": "CsehTDztAd8hQUeMx2QM8vCyi78JhHuhhiE69zTc1eZvB9NgqbMaNexxKHB51mnqwczAz2gNwPwdJnMcfMnTCQS",
  "key17": "5SmNugiGT5ehuAoFxNcfCFrEHEaNwbLWv4xihZ1CU5d55zGqv7CqzJiz6tPRhXbfJX9BmTHBCYToqwh4o46av3R5",
  "key18": "FbxCZbgtdkU1HHfA6K6eTZQC3ijRnc54ydtdQQoZ6eBW3iB4yZ8VfHGEwMpo1nXZA5PDm138HU2UW1WnLUsx9nf",
  "key19": "5fgKTufdbGzp2BjxCopenMH2XFaezwm6Ke7WsMb9NXTstFs2THey6ECFZxf2NS5dRmir1MHCxtBqJGsdFHrkGQbc",
  "key20": "4hFdBvrRvVLfpaaeH3Bame8NcqaHy7NfrekobzPx6DDxKcjUUW3MaAGaXYwKdR7EAHLToqmXesVD1GDpBdQkCcUr",
  "key21": "2sJ7Eo8ETGb9CEnBX1EmgNN8nm3q8mkN77JK7Nz6dqPckSucsPeiwiiJ6EewC1JKZUkf3yWYhpc6rivjuhKUzNyd",
  "key22": "4avG2xj2fhpaVKmktBo3o6bAadMKJqBSC6fYhThenFmbrcCWze1Fk9SeRVzUCrgGztM98a3CyrmCrH85gRT3Ujy8",
  "key23": "2xi5w764mqcwHWUevbRQeJXn1MRV6fd5DD9DvdyruYyf2C1sBYu4WsdkSKHSjEmSZK13DsULdePMkMdSDVsQdQef",
  "key24": "5pmpf3bhnojc31Mx398ZioEEoW1D6rTHVqibgBFyynpYzZ4MEuU1erSn5XV7GHYR3d8HT7M2AEq94wVAga2dix3n"
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
