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
    "KM7HewMUrzBCJvgxCCz96FqKFpvTScCt1Fi45T9zB1mA5FwbyTHQRnqumgT4zhRESooCj8ZWz3nYS3CWKG1Z6AY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xQfAvckKjCjLeYPHVShsBSPsBMeR2Y3QGWoSgU6Yio7GBichVjgB8sBn5HNeE9rTqHLTqZnMGFk8CYNBCPwrT3Q",
  "key1": "5SvgFfhdPwnsbEe9RPR7fAjzEJDUzSjCzQLxjNNXVtAA778tzb9s8vD3eQMbMkNjdSPFS1URdigtA3TtdDBxSuDD",
  "key2": "3eTQNyKZSixLcWcY1H9U7uSHYQXkWQ8bBRWdL5b96R9qPSenKLR9YMTeHtFNLRpvSbLMssbRPZ1qnkC6x6Aozmnh",
  "key3": "Q3htSjmM2fbzPK3Wjp7BeLpSwTA6FCvdTW513WEuSkjeNRsWfzarUhJdd84bLLKxD6ZcnsWvDF4ewNVUwLUMhi6",
  "key4": "2GSHeRDvGdNuA1A8E4ozsf74pp7NESnksK3NsPQRHanG8HrJhHbWV5SdPvZVW9EoNqEtfrin6XLVBdvMdvoBgnxf",
  "key5": "4SKrhQ3xaa3oBXs2VHRwerkcKNedZbGeHmcKNBsWU5u6BqxLtSP8dabtwgbBqPXYzKMFAWJttVoc9bvUSVehPLKn",
  "key6": "2LnDyCqeSRFNeFZHoHCSFxUTuh7T1JA4ggGVnp9asG9NthTdHM8SNZS7k4aMftJgMLX4Ef8g3mW7kwDmsSRALWhj",
  "key7": "4ER7myLuGBRdrCwjUjxgc3omxWv2fivwJBjYiMxHMteFyrcnnJXcupJRvmd5BjCgEUwaNMi7HnR3GFpqiXvGMjB5",
  "key8": "4cAKkNytM6t3Gq9J8h4vd1qWHLtgezqww7drwPhweNTZsVUeQSzGxgVUNRmCiKRZSpudFrjUCdnVXvnU6gxdVghu",
  "key9": "A4YxJjMov2RX4p5meE4LjssJfhWk771fjFL2JEePnZHDttQiyyK2s1d3RCSsns9wb48sJkK57yhL647yREvxFMD",
  "key10": "4FrZpyyYphmuFLiBXiCwATNrzgs3Yv3YHGHvFSo2XhiiX2Y5357Pgtatcx5gD6rXYigbmyBSjwunEMbtM984dnYS",
  "key11": "663EozrzLXrAXnVy1tZaG5PH9fq8NMCovcs53TA5dzxAwyVaBE1JXXyUDi2VWXrcbKHB2kLNoaHULZQ4ubxNiuB1",
  "key12": "gmRkoqqRtuaZvFsW12wTPbk5hahwqWiWficYroeW83tbgXDJwCSJRQgLmgcmmsVujgchgdVVUSAh1wMM3wXCzgx",
  "key13": "34mLP6SXq7gWZwH58WuyFPYsCPAudS3PdL7b99Y189vkcnJBKKyy8sYf37sJVxS4JSTMME1QZjXA74q6zkjHQHc9",
  "key14": "2JCpZTzKzSpB8dty4AimxJpRhA12zmuA7wqkkpXzvAWTdtRHjqdvVpEm1wGJw3g92Y6B3T3k99uHgpa59bczqkg8",
  "key15": "3JXezctbzLv9fobQgC1SGarhP8hYuX5yLKwpEJ8x6cteq8GwAReUxJECoKNXRzKvFfZSgHafadjsoC14LanPg8HH",
  "key16": "5j7LrB85BeU2cgdDAJSMaJWNvQA7VEps5q5K8Ghaxwc5js6voKuk5TdrKD3vAZAvwUd81dDkVp3ZKw98RdCpLMb4",
  "key17": "5f5HWUCJw6XZC3AuGxfiKVjAKHg62G8Y4d8k3icNH2Jy6n5MnKTy1qWkEpRkrPvFH8w2n1h6TVUb5ei9JxUijDUa",
  "key18": "2Qcf86WDJ1xuTqn2FwRih3brcmAwz5CpsEZmrhyYQow839s3oPxoKgR6yVGskrxVh9whBB3t4c2DJPd8utTJEHAX",
  "key19": "ggivQh1QK8W9ZtpEURxy2pSHUTLuruGM1tTxCd1WkkPZnP6G23doX6uSV9qoCtZFxTbjgtfdo6jyfqeTvophtpF",
  "key20": "HDmLDatUBasLYFj32TKppG8PMVDpaQPLZKwE7jSNowHCnvjcRDWF4cgFzupmtVi1YKmqkgonAVahWhMWujm6B66",
  "key21": "4wdoEevSuyXmHCKHVgnoKSvM5HUyZPqwrqkb7xdQVm16MuNFqQN7K72EyB36y9bJSd2pCjh46FvrqjGV7c7re4vA",
  "key22": "4GAfGZdZummt1Zn8XprjojbTyVv3WBABmejFBaJXs2upbx7qi2PHau2YFvrPDUD6k1hWo5qYp5pJ8fGPNsdnhszz",
  "key23": "4nMtQpAtPmRi5va7T1fgWXsRVRqcKt8uqwbQLoCapSw4PE9DPqWUVKbyCpc1rmB1Kehr6CQ8gTk5XbRqPQwb7x3Q",
  "key24": "3p8Dt7tjyRLy2Bdu4VoyLt3yG59WLH9oPrBUrBFgYatdpuC3pcyoKToxXHnA56898JhLNGRfeuVpyYKWtSF4Rb1M",
  "key25": "25ikQScT9z5cdew7Br7kzKrgaAxanmyA19m29DNXH1jj93Qwey5gZY4BN9E9Uoz77DaU5TUjrLCjNJX4GShG953v"
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
