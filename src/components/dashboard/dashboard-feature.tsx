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
    "4zDQKo7KD4HybCqWov4ny8JBH1nCdnqCFx86n1bgtBDtD2Mcv4uGP25HXgLUaYJHL8V6Tq1BGCRDPMeQvxAWy5Un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eT1DqiNzu4eMw3tXk56tjmEQ12wj91c86L1ggwj11EP5Lpv8Bs5y8PeUrkDHGdvSMSfKGm3nJ4iUyiAQFSavBQT",
  "key1": "2RPq9kRDefak5P4geWcqdTb52kdUrvkC2nhJ1orHYwMLzA7hFBXXRREsxzNKFezn7MPSZoWHwzuUZfiLzKk1sBbD",
  "key2": "T2uTjYCcCpYiHQ34kUBPSgAhz4XSh7Q9MH2hsisiqqsHiaEz4SnfrUZX6ZubdhHw7syHGBRqnZyPUnT5Nggavt6",
  "key3": "2k1zqgETxkDXQCmie8JLfpNJyRyp8GSpViLuwg9WNSzsReCJUhqYidFUsYf3qd3yqVWmX8EsfdQasyGC4gXD75nu",
  "key4": "2w7icFvahE4sGQcdwXgpqJpeoQoffKpNDQskJhtstxXsbpdRHfJqEPVjrqyC8uadLUFeAxgM34ebtjo9brEzCUmR",
  "key5": "PJEpb2uM8acuip12zvyrm6PTWudGR3N6FzRoiQgVUGTsZecuxE6MKnUU1z38YqohNLA2hooh1KQKrjbgaaFBnPa",
  "key6": "212s1c2UNxb8qvU7qNm5smHBirEDdQ3eHKwRAyr2hWE87anFswsXcrkxH2twgu9WKBz3KKBXsYueAHKyV5SRiVHU",
  "key7": "259s1pssmx4vsgQvM3d4j5KFNcSpZZqHzRWV5piHaK8enmsVffgHCTAWxsjwrRSRUAPt5K9ez6qy1pD8jFLadpUA",
  "key8": "4q3J3XhDy7swAherzPkUC6DRn7Uum4htiiVh61NBYTNWTnHARFawGHe8fpgGFpgvprhaUVVv9dMSoPyKwik27ys7",
  "key9": "27afVEzz29ZM8hicfFsXwy6Qaj5oUvQxtJae4ci4XkLnMwfKFfTasWYrnUAeBjmVucwNhGkUXQfbYWJjCPkrMznT",
  "key10": "3VKYQA1zL6BUGRHs3uVTi1etoEjVM6TtKQoF1gxt4xD5LQAMdpqb8AMNqsS27nnfi2kR1YCw4AeCL2Q4cEJSg9zG",
  "key11": "5kMkrr4CGoMQoP2ZZTQ7JN3FV7rPVyNxfzqKQydvyi4gCSKf4REEedU6zyRwYf9QzsuiS8e2PwHm4r9GZztnJrcp",
  "key12": "55GM6teX75Za6Hh851eWUqDmhPT5WCzzgi97bmkrXWdviqLEAPDARbeTmNp7KSsRyCGcEHb7bapn5AmwpZQQmYzv",
  "key13": "2LeasravmeFKcMVrvz6MxSAsuGHKPG3gmmU7vwSTDaThhggdsrNk9MqD1QQMQfGKM7PJb1azGEvVVMS5ot2mFYDp",
  "key14": "2yjWRYHhY7KzLnbfwHHFB5EvuqCoHYa4vouU6MX3vSkeTRVwhCbYaoR7nF9BCRn9kXmA8AF3x1fP7mmJJRzVW1Qw",
  "key15": "NGxTsw6qPAtAcoQ14RVSr881GvhR6D27UjAsaBARqAcbGjhp8SBApTas1fgvpKtnLP5quUiEsS3dPPQ282r6kQm",
  "key16": "CEUWfCTPW2LrmykhaUdn2aN1M3adEkJRim78MHZWAhiSaoXaLRnW9W6o4umK13Cbnpxangjq6gpVTrWGLDN2VZa",
  "key17": "43z1eSrqswjWjyc8pKjAVbxQReFKyXfxJL5idE6MHbsa8YDdKJvVpw8QSpexUrzyDGvec8hCPKt962bE9xXuMFgQ",
  "key18": "4Zpc59mx894NdEaqdxwzewKQWZvwtKJptCV5Auft7ce1o6Fsa2TmdXx5cdHHWUtSf71NSGBmz3Xvf4MTkXASCCs1",
  "key19": "jEWcRpCvvDr23B3jC7x4LxAJ3Xgm8qdYauCi2DrE8zcqp8wwaSB6e8StFB48gb189DJmSoCjjpAa3QaAjfHMesN",
  "key20": "2be6gQ4g5V66wk1PTzfAPSHnk7v7rPdid7oJdKKB99usTYXutQgYdmJoi1ybKba6paLdqTACHdRfw6PfBNrqmeQR",
  "key21": "5erKtY7EPGFL5kYiVs7XWp28u9SRA2nkiaskBgFQPWi6Ma1ibU59PiEKvzppjKy48xB1nHKCuVjV2kqdifT26iFA",
  "key22": "KcQpkNnPa28SDAK1YMAbrVDnB3it72LyuFu4avnN1w2VVZPqbuP2D6hhtxEneiARbaTuFmcxuzyqBUqji94WZT9",
  "key23": "2LMiRq85tCoY4TDLWxiFLe8JSP6QX3KTXZAaonzAeqfeXLwGUe5HkvjydhrAw2ecmyerMf3pfqvLtHAa8Ra5sQPV",
  "key24": "21Yi4vKKJUeGRVaUyn65oLZtJysefSPCNKQn5YRvFFgPZ3Ayxu7mPNhfH6YPHHvrFLHkCyQ56M1JzAXpcgBVfTiU",
  "key25": "5TZm7exHnpdf2q5bTuiTR3qC8V9CQDp3JeGRLReg781N7G2jY25tRRbrmbTXGA9LyMJZTRXoyYuLTPrPPSrBsZX4",
  "key26": "5qdrLc22p9h3wqgKhMxpeJGzchpvGwFMciJTbE87xksUiW92QHP6QsxoiXZ4EbaGFYDS2AkPQNHpwdg8zNY6ZDXn"
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
