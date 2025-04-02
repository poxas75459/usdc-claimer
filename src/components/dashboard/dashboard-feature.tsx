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
    "38nzVixCaFBDypdU36dph74DUteNpuSfW4R1AfH3hRN87FV8JhQ4gRJFH9ctFioke1Gb33pHkgcA3MYVurhxEADS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DuPMuXHuGshBUXynRhariTwNsmyxVGgJxAronVARWJ5aPH2PPeF47dFLK4LiSCDWhjCocWMZxYQrgGwxZaid2Qz",
  "key1": "31qQ9LRphiQZHrCe72HDiWAPpdHDSx3RP3p9R41StdZWFrDEeSM3j3S2w3e4PEG1k1rdJ3e5EUdU2FcwGWiPhiyJ",
  "key2": "4PZUFbE4uP5cPi5fjzveVpGqMzBQ1VL8BvfCpskezY5Sm57mYgFTfjh6jYFYMbUVGrCJWWu5ZJ1nTfRXFYbVp7cw",
  "key3": "BmyibkrpJnBbipjHH3x5dmiTQtsw8mrQjAVPRLSeEg5zz8UK3xv7v63N5woKuGF2TTuc4mFszkEw4nvLCji3hgs",
  "key4": "3wKWKYErN8QC5RN5ECsnye34z739TNCcajn7PMReNsmFc85HZ5yau5qwxmmtDBMCbrL1jG39AgzfZZhtgcrbuAbb",
  "key5": "4MQC4qsn3aoSkkE1fNPTTBRwKv9rfNpq4mNJVLwPoM6utnVyFo6MPK8ENLA139yRcohmpGnvjF9s2KCgtdtDT6Dt",
  "key6": "5dWYqCvjw8rTrPWGirQim5huPxZQf1Cm2Xs7MhSf7GvAwpyQF1zjmPMz5Tbgs8E22h1evpNLHurp2W1Gz6Ln8nmA",
  "key7": "4ZkHSUCaYQ1L4PxvMjkYWJojbfbLEwWr2Kp1Yfk5CU1PMqHogXeD6XovHc6qFakVeRPt7sLFonhghn4dVS2Zu4gA",
  "key8": "4mHGKyxV4Dr7pLsQiojUGzo29YGeoHCLjPCuDcEiJPE1rouYKtppEqP9BpKGqJjEzNo2qyFxcKAANJFLKmWaeA7Y",
  "key9": "3ZotQu1aq3LF5iwYTgByTCNVsegh8KSAyNTbuKjbcf39KJaXMbYaMfwih77npoM1s3nAXge8J9q23TYnEihEZ1fA",
  "key10": "2hvgFpR8EeGTR1cW25Ks8ZVFsvrmLhHCM1bh3B4EJMwGyRHh3L3iGk54pLJAXDvZiJA1NRvPCMRWeTU4Pwg9pRNn",
  "key11": "4tw1eUMPKLX2WkzHsVTgRhzwe5dsAYmz8EDV5DzoxtDiv4cKUy6pF2nAvR4ZYajMuQDhEJSKHHeR4sbxpWTpJPPE",
  "key12": "4mH9aXphXUbz1FudJQuhouKZVDnPZRBVRdP6KQrzsPgkQyckphvbgbruCXYxuCqBkPt2CedZbUtRYLfdryW7KQBQ",
  "key13": "3hgoUr5rGagiiCuP8VMQmRhezwFVLnFnnVAK7Xx8MgyMYSCid63F3EACngXzF877FbskqbkqRTBempuNkBnGZ2yZ",
  "key14": "35TkMpHrGtdj9WJ4bF6gidYKGTAYTgkYVvnoDbdLS3993FNowbiMvhoFdHtPDDEpHMKBchXV36a3Qa8nq4FTxUQV",
  "key15": "2NhCqK5A8wA9RdS9QKSVYSgVESkH3yvXjm5FxrfV3rvyQQ3mbEZfYjJ6tcXtG3EDzNN3L82VtTRCyMW5EwtQbxTo",
  "key16": "3uU6eobVhDQci94ZhapD9k9eRpdtiVNYGwc56KhGNxKYb2h5zvY9K4wwAQDicmvEmQVxABM6SRdoLNiPS7fegFS4",
  "key17": "49pDKo8tk1f1GHDJQBCkDYWJdqo71EzxjUpLnDVaVeqDKzbwNBezEjzhYamYUKDXE18qgTyVoEnruivRFSpuMD11",
  "key18": "2WKcqboWss9Jf97yD96Sed13bssQvEeiAkwMdmWTErYnQQfzsnZKbXSfUc28y92JtqVB7B89djNKMxscuN7c6rrd",
  "key19": "7KuZUSphJCtUjZcWbT5bY8qS9LGGTPoN6UtUqUHGnmYjG9meJ5H2Xwsu857f72SHXPxmCbxBRwV3gz3cXFWNy3o",
  "key20": "3Ju2sWqGgikJzadkhTndJtbNU2wUEKTTJGo4sNRcfqYibJJfcaSmTWGtF8tYRuX2au6x9yHeXKaSGWfTRWsBoh74",
  "key21": "2qUmdxSCeFrj9Z7hhNvnwSVtZDLA1ntKzhbPc1mtctR61A4j1iR8s5hbcyYEnGggpUwqXicztCXLgUeRpnLkCMRd",
  "key22": "MswgNzox6D871E6sEcRD4xL2KmCUc1S3gthJ4ZRfuwHNRtu11j4PzRw4ZaZ79hFr5u8ebUQSPPYtERLUk6U2p24",
  "key23": "31tXuN9fyXxmNqcPY56Ryk8eKQpcAkqHuFQKogGu4qwS6SddXoEfJNfRXhvMKaxXZv7a1JaMMtaRo4bKN7MerUKs",
  "key24": "UnBK3gBwm1r7ZwzWd7f91jFkuAYf1wY56Qufe5RrxVjox1q91fQkSB8bMcazyJkm8FhqigAZVADC6hpT2HLAv1p",
  "key25": "3zf423btmdka9qQNSxycFzbmAGQEJVCGk6FtRdMfR6wML3vYHwj8evHZEZLVCW7CmqPQZYZrHTyfnapSNxpvUMTL",
  "key26": "o7TaRgj75McZf99tVcsVnG63WGLCN1u7YdKLyHEZWdXATQPRR265K8bkoCDFvsADVqy5ChiwFc2v8q3KrAePyb6",
  "key27": "2q87TwFVdCWsPyU6FYNCCdRDSsJVsu3Q8Vhxy6joJeSRCRzDSLcStx8aNgbPmQCBVa9PwACRaz2G29tqWS4wb3pQ",
  "key28": "4PdLBVVXAFZpYshxvnugKAE9SZ67EambdU44L5Ttno3dCqZFjBSEdcqE98d5a8XNwdYnACpiSJkScXK8PAQxoGLq",
  "key29": "3SJg3iYyzMJyK1MB2SufVAc14UsZ5yt6fhXaBRenHLZHJqoc3Ng7z1hQS6pKzgFgfqVhhvEDdSVdBkScPg69qMyn",
  "key30": "2oC1dKUhEvbuvtGUBKg8rDnTk5gwGqSFaTm2XnyE6x1cFjkELJ8CoU6JTkrpDc9oC6iqytptyweqA2BJE5GE9oD4",
  "key31": "AvuNuJWw79C8rjeqttvNXgUriV68E2xNnCR2GYXnoFTvjxy6FpmRVeRcL5Udwc9pt5MNRehgQRMLAwYzarkehjJ",
  "key32": "3XeyXLPVcbKZ8r35W2WieDaVgMnEh1NQ6y2yktVA7TgqkA1UAFsBeVqwk41BG6j5ff2A5yRBt8gFHx4qGySC6Gfw",
  "key33": "43ZLBjBaACQ933TSEkFK5p7u9Li3Pbrq126vwbE7G9yVUzGaeqdRbrwy7NoxTD2KJFTdW2v9URUnv9BNqBKDZBpW",
  "key34": "5GDWnrvR91HZJUgToHzsjnh1HWQmDkoupi9JY3y3qn8oChxEuFXTi8wy4crt3TtgQh5NajBwHy2yeTGSFj7E2ryk",
  "key35": "5tbpV62ya4akXkY6L5AJPDgtTGoJYhF59tx9ofxkHReqyjbvX2wmGbwxQ81zLUAyS9kyM6ya8frdJhvCTf8BmCPB",
  "key36": "2vzreev4biCgJ3VDTXspb5tdh2VdxYuejWkz4W5Z3Mot7NH4uobfwn3i4QdckYFxL8EVs3DfC4AhH6ifa39RrRmB",
  "key37": "2eWGJ8oCR2jmoSr3kwY3rYTbgt5u5byQq7MHhvfGaAtmYSTuJpqC9x3FptuVky4CeCb83eYffg3SA6MaYHpESjdA",
  "key38": "2gb8FFxxxAqZYowMyxZdKvf7Bq949kb8QAyK2QGtVey21XRorkYud63WYB5QG3kEKs4EnXjfVhA6eiyuSMPgchec",
  "key39": "5L3Nj14kLAKYdemJqnJuVdqmVAKoWvsHQSHNj2KcBF5dnY13QvZVNdZZxcPkEx5mezS6qGrUQaqKjfVJ78HkhuvT",
  "key40": "2kwZoruHTLf3EfLjruSVvzgQf7QsxxVuNqWfof4WnjAyEgJvNz8pGpAwQNzzsudH17o54B3hb7Jg43DpkgS97koJ",
  "key41": "5dPAqFZ4yi69NsAmxTdZCRFzKLzSJnBbSELQTwpSQ9oByJD2tF7Yb73NwLczpbCN5Q2UYwU8vz7pQv2t5LZjYRp1"
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
