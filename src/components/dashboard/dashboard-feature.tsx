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
    "3B33QWrXYrjfPh4RKPr9ySrmytEMsHbUsWYEQnAoJohA4LHZ8VsE3kw2fDQjbhUxGmj6LkP1v4NMkJ7yoFXBvHyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jpjv3wukRWW37QAFvGxX7TkxkFQHfMTM5uxKT6H6fMPdNgKpU8tyEGDZ7K8tzRSLhpuPMdoL8nbwtF24xDfyE4U",
  "key1": "2zSR6WPRZqM5LgPr6LdU73NW1BMPMENS7oQT19E4zvkkbi6qvuMPHDcq4t5yQaZL4qpRFDwAfEnEdQProoesBRDd",
  "key2": "drx75Zja7WgQGRyWVLqv2ZmSBettcPL6YBST3WtbWBHQDLt2X6BpxmgH3nrGAjpyGEhwehddRhVjVirgCMipxLJ",
  "key3": "veio2HdGRdkK3ZLDujKfhTdHURXvrYCmxxjxAgpXuK5mSevyq3BzWypiKLaLzXaLoALwQTLjBoTcusw6Aq9tk1a",
  "key4": "3KGEuBFV5jiuzJtrq6HatGwnFc3P7Eqx7uKa7R5rncdZKJCAG7KEQL4HqaXm6zL9DCM5ZL1i5Sj5HrjSQwgkDv2S",
  "key5": "5C2GRgaRT3NLsexdFWCWA9BnC3Gj6ptYiMVNPBFceaLFQBgcHUSPP7H2EGzNcEMyFNh7jJxXhLP6gmDBtgt5LMo4",
  "key6": "5EknNNnUKFUprR9BWSBZUQRHmLGTX5r3CCwyDPRca8GrHPMYWprYcxJbTgDP3c9Tf8BjKTAuEWtVrWFfkwaJnGjH",
  "key7": "5rGdEKVMiUUeDCEthpPoBMpVXomUxRfMaD9TqhHckGJq5P7VifUCNP2ddEi7SSVzkNrjmzXgZ7FqddMohavSRMAB",
  "key8": "GheWEJeLoYWV4XfYcm3S8Vjz6PPSQky87ZbC8zVFR9eNaJSWCTT3m1WZjDsdLKLscyoMKBtpyxL4oqZravSEXh6",
  "key9": "3L2XdEWdn37bzZz9hAnDL8dVygFccbNicoDehAdb3P9sLZCLKdkioMnYMyoex1NVw9vUZyG9tNLKPYmp9txu9tkA",
  "key10": "4y4u38Yx3h84KkcbPSxvnmtHtxuEKHJvAVvWBC8fsMQ8cis68zGymt3ETwNWGjkf2Bs8FTgPdpPW3DtwRNxmLgPu",
  "key11": "2q94zMUmW1vRRBHd6U7LyVVTz9FwK4coFNowAXZndtDXEVnKx4LT9qdCD8NqopVQMj9wJvQ1CXYuCiWPQHH7H3Je",
  "key12": "DNc5cAVoxq7U5a6FrFtHMWJU5eo9W4YT7DXiJN1D1E82kagJ8jdrH2scnzCrSgjkptpZupqmgLxDRG5LKNiqEJK",
  "key13": "fo58Bw1SC8V7BtKvhc7J7AFfhiqjpRp86un2w6QrrQR8oYaGRHEoA9vNLV4CWp7V86NhdNX36LYiSbcEx4sWYtN",
  "key14": "5rHCjuGpLxY8XtxQFnc58hDz1t2NT3jcYPyRGtRrW8Jnpe8TdUUp87mqAqXfctAQhpiDK4qqC8BSgE3moNGaV2bS",
  "key15": "4rHe7n7GMEieT1TtMZxsJcnuEGyi7zNhGFNHMetGDWLNercWapMo8EZME4qX4rUNHXmsgEcE3rmAfUefyeLZHrKr",
  "key16": "2rWa9wVrY9ipXeAWEqTd3NQaasx3uoDVwhBfot1Rqd4fS9TLqo3iaUPjSvyAXDHuxNGsbYY6fsAstfd9RnXcsgwz",
  "key17": "3Qi9d1PQWjghgUcp8acdRApfpMuXHZ232LAn3dj7qwCpWjytr4WkQRDsf8dA5qt6tiiEKtGGuVhsNGDZQQu3t51z",
  "key18": "nDBUKuj3PaYT6D6xra54EafQPcVDRRtv5Tib3jnx5ha3Thi9RcUuw1PMHojeijMYNuW2NrsWBciF3Z4NpFFYfa5",
  "key19": "2QrcHcr1yUY49dgyTaVxi3BfAawezntoiKcy6hffkKF7ABnaUHB2rBKs4qs1wFkw6YVUf1R3KFBiX2wZdf9LRfc2",
  "key20": "2h9Dv8KG3LrJgso5bssmxTV8K5Kw5Rujvf6EKFrEbya8eEtRBKY2iUjZHU2ecD4SXLEyiMLYog9XCtXptgWBHaz7",
  "key21": "FnFZTBDf3HCQwPsBg4LX35We4FsAq5SLb1UeqvWGtWYb1dq53v2vwb8L5fwaV5enz7gkDrSftz65dXxRwRirbjE",
  "key22": "2Z9dqm23A8XWSew1Ci8p5g5f6NjD6mfUJn6BNfeeLTQtqt6hYwrak45jYFNXHicYD9vMDQ3w67exiYSDLEpjvgS8",
  "key23": "38RKHhbrbuCriSZDpkrGZdPDA4HHpXCJ9AKf9vLukGsssoT6UgHphMC8sZsTWrfAVT19mZrWdz2Zwf7MbcsYtB9v",
  "key24": "3KCiYagsazbZ1SpfWVeCQZtJxtk2LsGANCFw673GHYFbRYvQX68C7nXBkosNdSevAqZ48QhikWYzrKFDq4Ei3EaR",
  "key25": "4NhiB6eZVo75LxvSX77AS6EihvQTkmFBHTGdmFBDM9htcdkE2K7hrrnMxR5nFkFcngjCRKaCqHURsm9zbTdMqxW6",
  "key26": "3a2qajPpoYgqGpFthT9Wq2B7LRd9bFcCq9JKZ4jL9oNEAtwzR5AjRfs9cLGk3c4C5u4yAG1nvyhSEnmsAUHmGMTp",
  "key27": "4CbTwDSLDrB6WiubgKN52cqb5MKj8jHXsncTRL1rwA9uTvxm6zU5GXsk65xLzMNbzceGmPdLS6xHzqPTkj6ToBvu",
  "key28": "56hfBYons6nk66dRC8VXVo6Wi3W2s67Xvxhu3Vrrb5YKnxr3YC4fDh8CyWhqbBze7RUsXNT292VxBsdbwbjHdwGL",
  "key29": "3rPcu4BEbcLGHXWdsyD4crrjauWXhZSiUrGpRAPgVMBjqBUqnvxuYn6MeZdfQYkb7fEiwHPQJ39PcFrUauSnfqAX",
  "key30": "GdTSTcoo2JFyErYLKvgnxEQCSdaV3KDPQyKNpWEpb6qrjoxnfL6THzRZfLeZd9L6hUuoEqfSFNqhfekmQ1wgGY1",
  "key31": "5oYMwAYpp1UMBzmjvMSWw6d1bXAaTaEK5KzQNJ791EERHhYsW43HMPueVQLQHduLiEMqUAh1GZCdUeMCF8kBJRir",
  "key32": "Dp1FvcWnDo8M6EqhTfeXh9AV1NpRmDNdYqEvsV6McF5G3nNyf4G5pjZwPkQhmJZ6abAkaX6x8M1qr6W1B4CDts3",
  "key33": "4yYByHVTTAZDGhKXj4jVVpptnhCv1XDwPMVMdnNbTkA5vy3uVQMrxzPtShm3KES2petd7DteEJz181JRAY2eNSbt"
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
