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
    "5VjESjUwZrGq8nFKMiGHk5mmGskK1UkoZ1Zg8BntMjT9HG9E1TzvKkfD4Yo5QZERJrpce1J3YFvcufbkjDWYpGXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uzELW59SnosiJSP3uJpds6JTVHgnQDnCzyGrkd4xy8CDgJTEuk8Am3Bs47xuvD4A4T2zpoVSFtvyjdBtrzNHxCZ",
  "key1": "5pK599YdrnChs98fvLoG9iQ9QtZjJu3VRdbg93gPydbGnt4dA79CuBMJTLut4Q4vXeZhZVVPwgPu5y4RJQRNLMLA",
  "key2": "21nWvzuxkcpSaAxhLP882Xk52kdHq1UYsCoGYozJxsodKChG1rZYaiSfBVWypKKT3EZrRc768CLB5zteMKQQ245k",
  "key3": "4xWNeuoBdM9dBFAt26wEpbBShSBiSfApx3TRm3W1NRoovLYH84ErMHdvjMTRH7HRqHe6NkVGGAVcpSA2ha5dMZMq",
  "key4": "4DvD5Er4M7k9uxghiGFJz3ofS9E1Q4om97gLGcbr1sh5dSYXTaon74GDefmDcTVMRGAGviX11FkfL4AzvGGwYB1z",
  "key5": "zHpLJ7cQb391tF5ZkNMqTXqvS6K1eiRFeET2nnw44kKbF28a3a3aXKg8krtAPHVeZtoXBt5JUNci488N5UdDr3A",
  "key6": "3cNqfCi45jYMDJzLQrkmp8kP3vapWFR2CCDZnmkPbPTsz1hjYjCki9wqLvA7pVnMww5GVj2ruMtbnyqJsATx7jYL",
  "key7": "4kE8TwyhguotWneHrav4g4VH8T9wSwtiLoE9xxYD2BVsrqv1kDsQA459UrRMuGzcq9Wm5crzbvvzSwfKSU6znDtY",
  "key8": "3DnMYjT7WN84QuNG9sRBqXqmCjiPeZ37hwLGQ1i6bzT8Uonv6Lq3vEUapfXjsXieUWXSvoGoQV3Q4Q9f7Wz4jSe9",
  "key9": "5rVNzrTYt4o1AGZ6tejnYs88Scs7eSor2L5i24A8u91EACLqyDPNjU14rgBKm1zfiKRF6XKNRJqJbsKm6SaJLNRj",
  "key10": "SjEWQPp2LKucYs3x2eMwuM1D6Y7DtqZGsDYPXsRjV9hNANk1RSHpXPVQSdR9E6pH71cQa96X3YpDSv8CdVVZNDC",
  "key11": "3eXkwJn6xwxrGn6SdPLb6QSnJYdGrdm119kpFYh5CYSsWTB4gMrCaNXgD1QoELE7aPmej2ky5cQtUwEqs8AuM99k",
  "key12": "2fXS2YNtbi3KGzMrz7CWzLYgr5DJ5TjvTSgqzU2deEyBPB5zjUof8jc1LqqPeu74koxufbJ59WpMcSRVGdvgUfd8",
  "key13": "2vDVjYvmheDx3J3BnQEyAn2y2w52V4M21jGNCTk5MwgzdjTPKyEYENiFZH4o31ejReTAgKvk3mMZ2YgLJ7LvkKnm",
  "key14": "5NaCQiN2RZNx3QmuJ8PWQCcNPoQHBhy2w9Nr7J2Ty1Lwtyf6AnrV77VEMZSjDKrWYZwQMn5hP6LbaqYkbY4N7Nfd",
  "key15": "4NoYrKzGB22zUhNfFP63WzaiFsCC87gKSxUCMmyTTavqYhtv3CNpyUTCAWjGb9VP756jEKyiTbdGtCm9PpScNnyW",
  "key16": "2waTsGLmd7zLggzAxnG2DpTXzPY5j7ZMRAWPpAhAVuTuq18XpnmU1ipY148TQYnpGRz4YpyWkvwxUYzZqmoZfS3u",
  "key17": "2Nd9MvrcCH1BRCYgmmCiBDyUDhov6sk9hKn4GPZkMQiQvEWMFtWbHqAgCsAYEyidfAWwh2KWfCbx82LC2eK2RwW",
  "key18": "2EaXoh466GyCETHhPTeDLy5AqUHsiTwtrMTvfjXEGg4D9Yje2iKnnhs2yCYkAGJo8v9PbSXY6jWKpGSvo9KrXn9G",
  "key19": "3sedF16dxXoCd5Q3KMWKdyC4yhYPWGw6W9R46AL2nyLSuRB8whkt4bQK5qscSJPg5DSovDkxCoFZpS9qXrDtUEG6",
  "key20": "5KkyMSbVRzVWxzMD6izHpGCc8B2XEqvberWYnn7y4RwJz2bBwZ6EKvDmD1PQCwbeh6ETaGHtJoGH9Ed8bciEfwDv",
  "key21": "47MmWLnZaR1XtqLY6hy2EEP88FWudaFJoFXbzts646517ptqiRJaTjsPtiMGNUQVaADMxaWWXXHc3h26pZaa9gkM",
  "key22": "4e4WB8Mj3Cr7YNA4CjiiTUcGEko5LnC3hBeF5scWB6dE2HnPscuMSNLm6KW6UX7LGuWhAdLMnHNAU9txFB6bywVo",
  "key23": "GkLWNo1J71ruNj3yZ6jcPJzhngxmyLYgFsvqrCVwrdtAR4MJSw77ikNsnN3nGhgN2mj1RtXui5cgFrX27pBtaST",
  "key24": "5rqF1aBjV6oM5yMd2x6WSH3djBFFyGdZpCYaAM6ZNbjBbAidxjFc8pVE2YywFkMC3Qi3yTyppzyNUa1LVivAkqia",
  "key25": "nwd1oKZgnXBXU96kKeNb6hWRhmEiGimaJDvnrWCDLuGvPo7K5Qcdw6JtekKSTUD2m8jyc8Ak2ou9J9U6VjgBLxR",
  "key26": "34vmK6phvrh72AbYPPEbZ1gBFmAsDWXm3fqyfApZPp4yZgmoBcevSuc6CYS7S6vvLLcFQpKjy4TuneZAsCpJzFSP",
  "key27": "45BXjSD2zsjtF4W3k2xe3uued26RwWtmosTNsZMg6EAZ45qMaMkro3mLCXvY3R4CbgNYXLNx5QpnJbaQ9qi2KuY9",
  "key28": "4aMxXSzR7bW1AuZVpWVqHkmTKcDdw2d1VispQaU4QGMSLymPzeHfWEAxg2R6DdQ8aeqKpeVcWUmMpsps9tAYAXC9",
  "key29": "5rkzbNFLx5a2kL5xhyV16mbzcvGvfHkAY927j2qd5kfmRRDBmYc3jhurEsAKKTtCSJt1S2NgwmstJV1NETp21KpX",
  "key30": "fuFwogims2oghsJGk8n23qJJLXVrRr2yMu97cq1iv9WsWUswMDutLkL1QCmqLzezhA5mHivRX36zcyQCBCQr8sD",
  "key31": "33jxo4UDdeRvT8mpG1bTkfhXJrbTYVE8JYQs38Kty55Xaa8Lxrg4iAC18Ld3XbkuUctevWGeJMFeEbE3iPsXEEpU",
  "key32": "2b79GZ6phiG9y63V4G6uw2AiMag8HoPvA3RfzUdVBzESaJJMgBsTqrg38cU7QbE2kWKTm6ssymu71XRGvtE6DEEg",
  "key33": "2ubqsMf2vuLkHKwiJR2rtDLRDMFVxfVoETaZdzh56A7fbmpKPWDDwMNYmWLPcdQLJGUaPasnJmaiRb2Fa22XNgAS"
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
