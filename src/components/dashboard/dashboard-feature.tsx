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
    "2kdKuvYnxSZcdK6Th735kZmkPhHdyUcsarL26hRRASKvRMMofea5eu9jGqThNnvZqkbptqxrHqBLakYTQoxZCniJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UQm8k2Tnu7rUcPuAJbyWArHSpeqmgVRLqhRPc81udkMp5D3GEqYvsBh2V7naespigV5fPt93eHU4HBPtug5QuSw",
  "key1": "4f1DouPo3ox2HvgiqaCMPsUzwsS4ByH8i1fCEZTj8QELdTMxAEeXkzaa8qre33DJqq4ogTdYRnm8wdtcaWqw3oZJ",
  "key2": "5aRinYqUPbuJyvRojzFywasn9gLDTioQtZUNWpHanoduyhUpxMaRJSuTFc9BZhnzayvCykEHHCBzexLKfrBJsAaa",
  "key3": "61GrykMD5rV4w5Vshbp8nKK3B2zr1iRbHJbhmjDMi14QeNN7uxCMAxkRtn2zRCGFE45icGWLXN74Cn7SA3iscZG",
  "key4": "4btCZ8YsK8rTp35Ln2iFMnQSPMAvGArExc5xCsPUxEcruQPpzhnaciF5hTNz5nkeMuKGVpqRRrNeGhwd1wfpfEMz",
  "key5": "M5RFvXR3qE1Mn8vS5F11Sj5q8CKSmHPRFE8euBYGiG4qdDvq2CFRayYdxV2oUbgAwKyZhQShyutnMiThKQz6LB1",
  "key6": "3LWoEBapUkEcDDbYMCjwaQtf2LAUdmF7ikAD7SBW5sjdXvEj8j4WnAeJT1ansm7tjg7bqzi6sgEiYuYSYtZtx9Lf",
  "key7": "4NBTVEc3Lrdak7Gjnad4HhmNKZwm2gMfWduXRosivo9sJuhMwSPWR2Q8ZxX8cQM6SeVozh8igxm7NL9Co7FZz9VA",
  "key8": "2ioyGzzqmboK9vYUnVcmy5qCWSoMsayJeaYxdhsuV1fnP5EjNigwj1ftBZUZ5rLuTPkkWvo9GF9gxht9JFBtwUEi",
  "key9": "2BpcWYa5SzsbNP4boNVe3ZkHq63RgeFSsVLf6n71AD8ye2fbptQXHSVRzQBbDneQn5cguN2wLB25kFCv1biBxfaM",
  "key10": "4kN1EqihpyM4eYdQuHZ4yRGgmAeTqB3Y7XsGi3Zq95hpFfaqgU2TrmkX7yKwvmESEuDerpr6FhowxnxxqYeCTaJu",
  "key11": "xLYpWYjqUheXHoQJaQGDARMwev2cvz4E9yzgiVDPp4iYa18VbGT2QePE57eX1E94ayp5ChoJxG4V5tA1Px3ejin",
  "key12": "46nwAmqRXXcPa4o9t7fpW1qSjBoPxhoqtRGsFZU3VLuhFNSdAGk9jp2Kta4f5EqBbLdfa2iSiVr79eSHUtGzUvjA",
  "key13": "CFGQUW9gpqXC52pVd5BAs4MnZh6wrypMXJpFopBSSX6qXeMDj3Dk8VYQyRne4LVVHJ6y5pH133bQdoCvAa8Hd9N",
  "key14": "2rN1x3C8MbaYgWwGC7z8bMuV8aNctnZJniymCPNF8xpnUfXPkdXviDuggHmYyf3sbusziZAhKLQv2TvY49JW2sjT",
  "key15": "4jvoHCcFbK5ACrXf5j1dQgp2S9qCyMvEZCDpushbnL2PuFchaBPZDGYiR2oYZaeG3FLE68Nz8z3T3C7WUXJes21X",
  "key16": "4CTKHCP922dGr1Ckwgy7zf8Rzrevj9jGBaHjv3Kdphy2ykxeA3CMjjMV1jEcNwDoYQtrQtpEJRUQbaWmPJAzQsgq",
  "key17": "HRViva5fL2TSpZE6SM1B9SWV6cN7e5v7rmwc6h7oww3m1yVRx7j5GwaZBrZWpK1nxw7te6g2UFPBcW8Ea32ebHJ",
  "key18": "53KF7vP2ypaoEcsTSqm8zq9cxZj1xunAndiDASvqdNKheBZ9CCxhtQTdxgbBPTQPdeXzvc7PVrSExVuDisrj6gVY",
  "key19": "4VU2jyfqYwwctNzL8DnhzEbBR5i1noHR6WEai8Lx1UP7g2R9Xv3CxftFPei77kvD6HhpA34PufxKoDgU2PHKasSp",
  "key20": "44pry12kV4KZ65UMLzBiDL66LjHJcYYCnd5rP96y4qiivKjX1vHeDizVQ3ALPus3PNU8SnXKX4vgq5CfbGHaY7yr",
  "key21": "5TSU4sTpzF2o7kXw42NJ4gCUDbjp1eExqybcwyncs7uPNLn4wKWve3Equh9P8cE9jLU1kQK9QDopb2V1B3VUFxtd",
  "key22": "43gFBN2dQVrcGkWg4U9aCkrbSNqh5pa66HJEvA7kh8tVyNJp3SxtbffyCDG95XmkaWZwbhoyLWHuxbJ7cBJhutBV",
  "key23": "31TFtDt9sfuaPvjrdpe1wUPd9LdRTy1GFeGqh14AfyH8tUxvTQUqUCkZjGBQ2oV4uwd3AQKDZC7on85X3DGww48h",
  "key24": "3jCBuNK7HNiCxnzf6yvkvmCHysRQhnWiCga8XYMC3HSFAqH1DURqx83Zgd5Q4ytt7oiaQmSgywu2BhtC2izRYyCW",
  "key25": "4itRaLNkZL1Lo2Uswo6Gz3JodW2VSpeT8VekjNesQSe1tEgzucKAbEhnjLh3PVk4pBuXBJabcPfbNzvbR2aEC5Ue"
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
