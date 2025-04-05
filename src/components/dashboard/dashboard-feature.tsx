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
    "4hYYnTeeYeWjc9QreN536z6W4NqaRkyQUHJdKorPtnDqxH4QzL4ge389o5v956ihMjbDTrKKBhcXAcZLTdmPwJyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KFYPZDUJMEnRXUudnhXhLrkcAroKLrpjxHDJ8k2HWB3yehFLhcS5qysyAGJXuR1MFT3x1qmjFwmQAn7JrrfqgmB",
  "key1": "3FPzb2q6WpuEozbXYKCuQSmcrZ6oG5uH1QqHaErDGvWLjBccwBdjBqFsEcUukWtLGFc5ZYvWQphfbDDkpDF2RcHU",
  "key2": "4L4dSD3bsJiVRf74ELcyge8sxnpFSS8pUrzX5DeibHgo4okBgaWvQNkTApWvg3C2rMRqeG2rQEZ6Kycadzi2eUii",
  "key3": "oZfc7Wb8caHbmcjKCNkcWxQdvQSbqk8ChNDhJ3iJ47kYy3qHN3RYg8R9yYWE9pEs4ESHCAq3vzq3Z57isSmYRuJ",
  "key4": "ZA9H8Mj4zPepf5ampCjndKNi6deBdzLXVFHxiHqmtC9MNrwkXtxY3HWcbsVZrpap9x3UXmimLBfsZux7Yezwjdc",
  "key5": "2As3FuUApRhCAzmzGLU8cvTjTwxufnjCHBRLM3ya3eRPFtnPoGFh9877DbESGSzNaj3v5g15as5g72hHdoLKNJZL",
  "key6": "3mJDQQJ8tbjqF4i9nDo2SPP8hgZ44cLZdBBKZDS9SczMawSunXc9CYoieA8yff234Ec1QV7ygL4JBTxC4QP3zd8f",
  "key7": "2jAfo2sfBZdAgcgdJHv7okTUQwTJ5pCnXtQ3fxocMzL1Vw4rgskAv5r54uuM8PnPBoGJ9kQUrXxUXyHno34CD6fs",
  "key8": "4doLQ7Xwi67R3Hwm6E8fFW3c1yWaeyvYghcevZcP2czUyMnFqN37cngTbZ32BaPVALtC4SvUyCBfszDk5SDLoPbG",
  "key9": "3eEAygs4eKDbEyXNdNxhed94YjbYpcHokH47dzJxALZ2Yty7fYf2VobganeAyseHugRhVr6QWa2GtqzahiwWhhbK",
  "key10": "3Qj8xge5crNn5nbaeUp3quDoLb9cypqAR2D7eWqaZFeHNM17udsN4RY79Q4VFk71HQCEX7mMj581A3AXN7doTEDV",
  "key11": "2p8N6R4mZWwKfo4mftYcipDznJbgeW1ro92ni758vYE7JvWWj5gbjXcKyR423G27ZecHeuq1Y3xvWHyJhV6xjTcZ",
  "key12": "5k7c2bjaSTAUqUeH8P5PPjr9Ra7J2SFgDFxUAZyDkugnNLPFvCbdL9Vn4u5Xtoebge8jBxU9WA4EjKhDRNoid5VU",
  "key13": "5Pj97GfBdoshH15DraxQ6xaY8Ugg8aX1GcWs5kbTSvzjxVPxrm3u3L6XkXyVdWcs3Po18vTps8mPykzmXC1YKgoK",
  "key14": "3NAesDDhbVT9A8LhnuVdfbXamp7DqAuDZwJCHSHU3TutTpzyLPXhWAREeThJ7w92gTv2KqrvgyhU5sEbA9wYirJM",
  "key15": "2T6AnCGpM1itzVCKc8JHmMVFdaq685Fvqg5LSXP5ZoXD5n3rpg2vm8oNZvHi5eXcosRCigQq58sJpR7YhgxJMmSa",
  "key16": "2nRtRNvMnih7GRG3fA4rTUur5PwiEowHsA6h9tJn953SukvoLCCHBXgz6cBCKWBXqWc5h5amqW5YVdAcrrB5EChq",
  "key17": "3TUsMSXV8y57nh2yr3D4aH5wpQiYVBYAuJryDmwWRnHAfRgQ35VAyjFxrUUwrhSuKCoLyyhx2RbJyxxMz1WHjHnJ",
  "key18": "RUV8EwzyHMm4PdjpAvTPyFWNhE1M2rXcPcoLTRBgRp79qo5hrMPYSLZ2bWtiB3bAFj7G1D4RycMDoKHTJkiwG7z",
  "key19": "2i3knnh2YRD9NLbn6C4ZJqaNjz9Py1SsvT4LupCkeHC15bSq7w3UW8qVcj5rAASagFGTrfRQTRrqTBE61AGCVJ8E",
  "key20": "3ntotHyVnfJFTSaq5UT9rE3NCB6Y4jsXWBdqSoTbRDMFKHwG4agPmdhNoQgTXXMgodNRxZfXS2TFnGY2QiKKb191",
  "key21": "5GA7bNt6BvbPNczGwhDiCUnjBvuexc6CBiH59d7mnx4DYjLnjrKZNiArpasV342FkRrN4g1558kfX7ZeqMvuBjri",
  "key22": "4ibnWRUnwiWktmzXW1ZGMBZg2e4sKf5TDx4z7WYCTK2woWMmFfkKU9kAo3o12F7TGQ3v3B6pKc1e6sp9K3aTUJz5",
  "key23": "52v9X6fpN38mbamDN2DLMREaEbuWUbCbcMz5KasL7Xf3gxezMPUmrDW2NHjddECsAeGm7Bkr2hvG49noxtvZSE6V",
  "key24": "2rKouMLrKa6HBo6kSSsBt83QdWbWJ4e6rVFZ9qGBg6d7HALEWPD5R24Kn8mPQ7LbDUQLGraHR2zFQp88WDoboLdF",
  "key25": "9mtwivVjpgg3e9TxuUAAyRxrJcSGE3zsuuN5pxavHSycTBSf5ZitXovot8suwEqrrnGiPFUsRvLzm7wmkdY8Jw3",
  "key26": "5XK1U6g3PJ6YVZWSXrcu7vnynhsTs6Y4pRxHfmnuZ33wZTrbsHwcN78WZAJKsi4uzmSUqjU4TRXSBcE8695CdcEL",
  "key27": "GhzmqLChCUL5y8UyBoDDdLkpSzAHvEkQQTqPfRujFMB4Bnbftq2rDYh3LwztCJDnyFQcReBrYydG2YJRzP7fHLo",
  "key28": "2M9vv3iXjjeUcAoSLSadqYPgfsV36K29sSiQmxoYXdvDTf4vnqAmrN2Jp6s7vkBpwGUhC912X7X85e7zbXuo3i2K",
  "key29": "2Jt7MD3Mpx3Zsyf1AbWPirsf4bxVeMkucvtXSLxQpN12EKGXuxGdvQGAwGy35uKmyE4MQx9MRpV9e2FmY1EEbb8J"
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
