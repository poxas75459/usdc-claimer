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
    "4giWzt5SoYrriVeAse1Jgg332GdFLxiZxdgB1W3UTi5vyqFDWTe5f7JN24N2NLXXjMxuLnDvYJiK1YBXUUKj4r1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DJs78RoEPN68rNJ2W6J74SLZ66VLSYxwJqP7uhcWcSUMgStu5sNTTVYvzjMbdkTpDBeWeJtjX35Ygd3fzSs95Ap",
  "key1": "Sye7x2PKXwJENAeBVM7N5B9mwvN9KEr9XYdyewrN5k94jrneuAG84p3R61f7R1CQRviRxMfX7UEdwAEBceYxWR4",
  "key2": "5Q5Ai5LXrA1QgXeLjtjiMyWS4J1c2kXzb32BZD7kufZQQgMrndxVTwycJ5k2jqYRHt7j5RvkUnpyvYB3D2z7HG93",
  "key3": "3PubSphCALrTGKYKJNZ7g8kfRDS9BG2fF9Qs3Cq5D9fXjDhD12egrpMb5Cj7dxPK5GNV5AWvHMGcYwCGoifGPUxZ",
  "key4": "5rpu1suJH9zCgjbywUts64x9c74zePJj24qroJSoJNgVUWdzUnBKcNkYdaDAk1ZXQaTAEB8FLXYd5Mn8DZ4NoNdF",
  "key5": "2sM4v5r7RRHUbqYdxJMkAWiqqccS8hkEebM49zdoWfZ6KQhHSbExRAfm1XB8qBdothgDQokg3YJwjnqtfMyvf2dk",
  "key6": "Mgi2yp2ktrAyZHkhGfR1oTbJ9ZqSCPnR9pebnx687YnHnzc2nUDGHia5JB2oPCSqXJngt4VPztR8CE7iUPuyvb3",
  "key7": "46aGL7YrrpunEQwW2Wcgenv7UtmQsDU7uNDFQUXLAch4EQx2LVwgRnPgnQBrhVTjB6PcGrxonn61aCw1j317nWFS",
  "key8": "228YX3QrktxAcxJG6JaNyZSLi1dKUc2Kn7YWxxYnamSeESP9rJoTw9ovpc2o5oZAVy28K39MRARrzGNFkhSdJmJ7",
  "key9": "5M5jHb5Bk2VUWfhken2gzgX1fqgbGhtcfBw3UqVvvECoARviNn8TfmbbtwcADhbnaDbPq1rYAAb5xYJEdeug8sz8",
  "key10": "44T7aTNhdwxt99djyLax8ghRtNVkrsn94bf8XioMMbcCqPEfLX5SxEtcv9fHEbbA8uzBUomRLLyE5hknHzz2WjDE",
  "key11": "TPRDa8sjAj1Ubv5bdBTT4p1Dzx4Tyt9dakVbvXbcd3LV3HfhmY6DfDzt2Qq4EqoZ2o8hgDmEeHCGYV2bsrigtb8",
  "key12": "rh787KUBGwVDcVXBBd1T63MmmQpWCMc1xxN384tbHmCrBgM82FzB5CPwVUin4CK8XGD8eGx1xHo1KZK59uhTB6X",
  "key13": "3Y69yVDP2YvWchDHzegvojTdY1pN79dfotjyFi9dPuXCNjeDkPkbZe3h9FASDA69HXw7xE9W1oeME7ViYdgVuByS",
  "key14": "4nq9GctsABRRJmqFLC7XMRgRJBE1hii2qtSNWPhVRbhxovXKKpXu1G7tTZX8ctPYMExhbDYqNdhhRzM6qiuW86zd",
  "key15": "2ErcxZRf6h2oTkTdD3JQcCjrNAe7vQBMEAigmDrYWpphwktSEySKPiwT1vcmazCPfFaYi6hSL7mXEYEFseK6MrhG",
  "key16": "5Fkx8vmvdb8M1dM87bJhELfBSP43AiPMrh3j5UvmSSidpHM4TKMvWmsE1vJdRc1p1jqdy8MZpasmiag2gXCE1v5x",
  "key17": "4USUPtWfGXj9eSkEDPKEqHWbVSQRFZdptsAXisGqkKFzxbhEtSiLKNSafzrtmbFsmkGmRzEYzKxh7SULWejFiSSW",
  "key18": "3m8xCiFzgcoonH3qrbTCj4pA3riAQhZieBQ1rPUkN4UPVMhxDWbPukENq9CWuB1ADYSAXkbZQ2RgEs1Qtp4j1FGj",
  "key19": "2sYD5WAWFmBH7Yh3eYKBU6KjQ9w6mvn6P8HHUrQNCuMLcRpiDEU6Kd3MYFM3Bcwm1iA6Le13vkh5Wm67UfLoPUcv",
  "key20": "4yNcHnZwej9RQ5WpVQfCBMCvV11662z79WDsybjucj8DsGizPiTxTJWnR2UaFNW3eEXD1AjpPJfxU4C4meLTPioK",
  "key21": "55TyhBESb4ooXYnUDAHSrhcZBi6NUGWF3NNBmMu4D2h7nv1cWB7bVbSyycG1hP1W3UBHQsEQj9oFFJDjMWCTbHPo",
  "key22": "5fEDjiqkscZhJJGz78J5yXDTi2VqtyeajjjL4EUUbAoJV9XZ66sucZEQvsS6gnh5w2DYZMfe5zYkbK6pY3adqkhx",
  "key23": "a3CxhwTtK36vc9NQhXDwNTg8a1RpDhCAxwS8XHWmnminhV214suzs7SNZEx51jjcYzEVZwhxGtUFB3cAEFKE1sJ",
  "key24": "J4GBNqpXHxWYMZX4hKLZLfeD4AYjhwTgGmHqsG5qNTTob4YQRaBz3mjGtmPnG2eWfAD8o6yhcCnXLnSdsjjizq3",
  "key25": "63HFqAuRFoQFSqDgbC1kpGn2Y6TkUNm34pBDpw3tJ7QmCSxLKfTLALabTEvbBbFUNGHkbPfeELCEdf7aLT9JoK3q",
  "key26": "258jrojfZP632NTFnAF2rV3E1LjnS2i8oixdxy3fnHq5atkdLFEj5wMmUTZdXv3Yhhf9kxg5FijfdMVoTg1YFxA1",
  "key27": "55tfFNzZXkkgiy9uXFcveBf4Ug8CyNbjvZsdU5CFu4HWxtxs6eAiYoaUE7xhUYE2nPKWWU2MdnvX4PPc72JWJkFj",
  "key28": "41oJRpEnyAfe7YhcBW7a8E2qxBTViKvQ6n7HJWypoqarY61R39Hm3moh6nZEyNaBiUoXT9MNuzEWSTK5B5FENgAL"
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
