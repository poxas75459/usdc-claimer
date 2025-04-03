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
    "D91roMmAAoY8fS7UAwsJWWvwBWbCittS2qEUXkWGkty7L2PzMx9wdNyZigJYgiK3oiNwTTdthQ6mrugPaTyYmrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nyM6wpkFbpmtaGGL7ouvbdPtZo84REmUBxyZ3dqY9aF8zaSoTo4BsASvsKhuc6U6d4Uw8TgyVR1eyuB3k2BfE7s",
  "key1": "4Y5ZPwcwTDVgPgkhSLfBoTx9trMtozejxyXjWpQ4d3fYZ49tJkS3cS1gfFcHFKrwtcmJRLdfUPBz6jWRZHiixu7c",
  "key2": "6kYDnBBg4EgnhgKzQpnZWyMWeb7cwhCiuM7PZYw6V8LQFCsqGj9TVE89yoAN4R7jqM19NUVkTi1d82Ds2hp7tFT",
  "key3": "4CyBmatVgZJRjVUWNNRULmjiUPCLHXrjAZ2xCRZCXSjHH2rzKiUkABMtC6M7dYMi1cpTgqKHFXjarZCCG114BzYV",
  "key4": "31s8ye4qAHJFF7aMPNmp7D8UP6FfLoAFV8qh6T6hfmVAo1ogkNZcACizJUvTgUEgZer64EMQ6dJGoshYG7K8S3Zh",
  "key5": "EG79AbaroCyJrthnEtq42X8nNmfvAViTDyzeczkPmvNCKQHKYMPyN6mkRy82KaopxFhewD2WA6QstdLRAPn94vZ",
  "key6": "2NhFPmibTz3YHWnh6S7zpwSz9ov5a2jqGTuGnYaXbpP72SAiK9e9y4q8pQTau9PT7Zzn3YGip596NB9Gdots8NVX",
  "key7": "3Pv2e39wL5XCKQGrvyEEHzHbMGj6GroTbYDNgnNEbLjFv3bQfYuNLCBttWqARMgCDG7LUL5txPr9GmT7Vgn442dr",
  "key8": "4Y41hMwm3EQmYTnE2TeV5EiFdja1Wv9G1KHLjdpyhqf4dMkzf4RPymPGKta5raR5JkTTqQVZ5LEse1yq2Peh8era",
  "key9": "5qdV7t1HD4WNWYbQzQUppUpaK4E3yM9Hnyv5XnbMwsVnDtAq3G34Tj85GWJGdXiRqL1sNQT8mhSxAgcSWpgvCEaZ",
  "key10": "xrfxv5reZ6w2PiVh3BwDnT8PPMyrpL5tcmntzYXDoJEdA1WNgu7kSUDi5A4yn4E1cc96Ej2MqCKpbkp9WSx9M2q",
  "key11": "4nXxFTUNSQQ2UPcdTX7JbwmCz2eVuyfBeGxhXjMP2aiWf3iGYxJu5Hk3NLbLpYWvERyBphrAZB5Nar1fTzrKPhhQ",
  "key12": "3QiQ7ea8MuMgJhxCA7qdh8U4ajhBGbPnEiBNdPsM1LoMm1YXHWupKh9BB8upkpq7G5CiHBYkiej1WXGVkFwxegSr",
  "key13": "3UfXFKQgUV5dL5m5hjKbcPq7hGURwE612VJdWLyT5uA9QVAXUB5D3TKB6sfyqmuUrrEE2cc1QrXy4dbZhDc2auDz",
  "key14": "35vwFHXE5YbGHqLarswpZVrjh57drJYfaYxyLYQPfxr5B8m8AsTuXKw1Xguskqpzr3mrqqGgibLLiRh2mb2iVEBU",
  "key15": "3N3ivwMuWd4rztUTaGYe1tuvYMyXsDGm1aWjiWh37PHLKHVkV3dCi6tyLoFjFh4ofgLiVhnZhNKvFathj9KxMWgh",
  "key16": "4RtGHefKwHnX1a2Gi2ZuN7jgax1ewhX549TXztdeRxPAZkmQtiFHjVtGaczhamM3eY75Cb5DGATxWSZ1adBkS9nA",
  "key17": "5BgfUkrZzonKL2UBmrFMA55UEBZNDLYHRPksJNhL9pXHR8EmcbM8dSnPD4cKKjihrV7PnZJfhq28YAtt1ZnqMDz5",
  "key18": "4k3P7TzVYxpQgFqGCnShQjUaAs8vRhEYRoymdwqzzneSdwoCJDo6SaKzhLimAmoaNQRv2ygVwVpPinc5wgoJ6SNA",
  "key19": "YDKX9GyNJpPMhL9DNEWFn7NjBqWqR4P4ySWrj5N8ieKQ9wzb9is4BojaZQq4pTh7rHoESbF4KKS91m2q8dKHdwg",
  "key20": "4pnR7N4u7jzLnQstqAgWXVrJT9Djoeao8j4e2yfeZ1voxhdMnzBGwSD6TgwSFvP2VBXnFfbSXjQB9qyiMgCKEvMr",
  "key21": "dUj5C8V2iADHxso2eD55Ydt5zjExi9k5tLyHD1CKw8EgyzdVVRGDoMDfYz1bbhCeJd17XD6K2zuLB1YN6DXpcF9",
  "key22": "BnSiji9DPLVMPZff5kKRgYAUk2pzvy2eK7yRfXjgH63ee9N9KSrUBQRzXfivUhyStkDDqzaJpKUMHVgMT5sCJMp",
  "key23": "27btRFjvFU1GuL7gv595vZr6E8xei6Avotdo2bgSSWRYu8yr5gagrL12AvjzeMDRXaLAPaXk9AUicvXKsW6NB62w",
  "key24": "4rrKukicJ9pvRRitLXXSnrBNcmWg5hipUt8FHS24uTjHDfnecLdKEyxJBtCAkkDae4v3zXsEAqNeN3WWvB9itaxg",
  "key25": "3odNeZeGBf3UXzXBB7Tdecj3RaPq3NZ1Qq1sT9PFNSNpqEpa2uRJ8wX6wX47HPFsUUSKihwLtkWWuXVUSQfzboUp",
  "key26": "ifccyvWf1SF5fwG9iVdbZZourYamKRtMEWESVY2s4YZN2bpzb2y1EX9yq6YvUe48wyBsPWza2srL58kQoffWEBv",
  "key27": "4gYeAHNLZ6eBJhutSakcLevvquZpBR9NhAAfSHkatc1jqh9HcxaxJ3zL2VsMB1cdxe3dyEKQdtq2FFpDchfNz1yF",
  "key28": "3Bxa1eUn4ks5E31AwRkvFPdSbGfVNvWQgvNB1oEJJGSLg197V9nwLbPq5DLc6PZB8vcEqfoWmkofJDKdTWjVBANV",
  "key29": "2zDXSTV3WjAa7aFsaQxWherp34zVyBRbiWHTFdHN7aCrAELHyJHAtQP9em2EcQiFDnufENRy5qDPoArYsJciw9kf",
  "key30": "59FknnaTV8xw9iEZVz82Patqe8XfhCptT28Xk7SQfNoN2Gsw9foo9XF5o1GSHHSWonjNnF1V5eWyRRbhBdixSczr"
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
