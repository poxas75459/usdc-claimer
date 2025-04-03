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
    "5KSXYNQJWPK3xEG7JPhS5NSwgzsk8YEM2Ttjy4hEtmqzNVYytBKwEzzjWKZH5dbNntcrUtzG5L5uj1buq31j59w5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FSJFhrr8rFcJQyD3HJijx2oUweTfA7WHVYCBy3cy8VEVk3o46zNYBqRxxNbKH9na4PiEqS5W6vHEt8thwrphV6C",
  "key1": "4kEkJdnobcixxQMfo3gumvgspNuSJsT4GLnrBtGtho2uqDkCsts9kUa8YZjEKRspPMvzutVTtffNKUs87PyMhMeh",
  "key2": "2RmL42YHfv68PKMdWbYqkwaD6ajJSz9cMTz1iEpbWU9qruT6X6chGe52nqhDVL9CghbiF3JRzKW2Bse498xBRRoC",
  "key3": "4joLEyrtRXkgR9WyEY6TU34TbNB8UhCJd99bXGS6N9ucjUp3MzAgXuVbyzA86ktT3FLjEwAjqf7kduM9r96wA1rL",
  "key4": "nUGBXPoMrm8chNzMfEFrJ6WdPdf8Y8vZxgv56BMbFMkTpsMK7kcPNutm15xSLqVfMRbqMPyGwskAFo4MmvGR5sf",
  "key5": "NL4E13qtEDE5hDAeeHAGGQqPL87C62AdW9obgFC9A8dkM7aR9hW1ozipK3JbZU1aWejqcFsrEp26VWXuaqi4K4s",
  "key6": "18CGy4UFYJv2YxQymc2ECzpUy64KaQvtsTC8xBFuAF1YrTTH39QNEHrKg1VEKR6q3QPM9btNyh4mDxTejxDfNUr",
  "key7": "5AGjgyq8zzAaSmFE227EVTACL6Uo6ND8a9XWEyUVM1BqgFr8upkf7VrCmCYo7iG3FgVw1WK5RZRCT2DUmG1iYyy6",
  "key8": "D8E1jzZaKgtC1Ha2FbRoa7Xb5SiUo7GoceQCcP3K4aoMqL3NjqvDpkwtYTWcy9mWzH8hppyupi2p3TMMMepv4mM",
  "key9": "4wapku5fzWddhWHddvP2qRQxHfUNUmyqYvAk2LwiSC25mxnmxtHgo9sH8YHRU3NpFNAqZKGiwF3ngcqDZ9kJ5A84",
  "key10": "q2WrCBAHkyGb6E5uELoXVUQ84fJa4kV9RubfSw9ZBLDTCDDVRTmc2aEcvWeMRBfFJEEGSEG7Pd1m9a1m7wFDiPt",
  "key11": "5RSZ4Q31sVmnDaWvVB1cPGM1YjT1kiNZEcZETgc5LSvR3F2LaaThtj3ncPjBi6fUKtVRH2XyGYmxrBoWZFtH3HwE",
  "key12": "LWmvRSB4HtjLAUdFXiZ6v7j9hJR9JSsLdcEnADFeNhFRj77XNYJDQbeqfAoSyCAjJTT5uoTHGmQEnxoqtKEqwwC",
  "key13": "3D5KzfPwAiMWeHzNeoZnVBYaJdzAxYAJmRu1oLsumbv6S5xZzaPXAC6CRkxoGnemsBBtWDbyUuxpKXX4VYNET11b",
  "key14": "pzbxZ9RiSKpa7VRBge34jSba4Vjn7bKZQeNjkhyACbzxJYTJRFDoTg3uoadYnD442UeY5LXN8QSrqQ9S73xBJ2E",
  "key15": "6Ryg1LWYXoLRe3a168gmLc9JmPG3Ya972jNQH5znygLosi5z1TqSbYsJi5LZACEegSJ3QhVYmxiFWtyhypF1T1B",
  "key16": "5eciXWar5En2BppTBK4Leb7inpzJgnqNj8i3PH2LS5uDnbQt5WwJAgUngJuc7cahQtrpEDytERCrZeJjcQAXEzq4",
  "key17": "39KvtBtJ61tpVs6vNpfazkhQUDS9faJdPNEn4B8hENdz7fiRpJbBEZRy57DSFhiaajx6othGa8bcwmc11eZaBpjr",
  "key18": "fX83LFQUew3Y4aGemjimAGFPSKkiqsQu25ThD8gK7d4ckZzXQ3ksEFweVTareF8hx3GefBEyS7umqYpCN5rA2Za",
  "key19": "Gtx1pcfEDvpnpb9WLe2LHxRbHYiUGJMnJkVcBNLZDBEUtHSBMFyUPF5CXSTAkeLcSXvYwu7rASsGTGQMpqiiHJK",
  "key20": "4jKxqMq6kWE7hCud7MDUp1Sb7wDpkujTV47qcUanLtt1ZzmUHoWA5xGGSn3KraiGaaVKUZpRsk2EXZcWiwbdRjPm",
  "key21": "BS51peamqGU6odNyTvWFEFf1UTszbAYSD3e4aou4b3WbPEsn2wu4L3RfnoSUke56eyb7PxZzFc7Ymcz5D8nvaNf",
  "key22": "2P3SkDc8KWcRMBbY61oCqqrPeF6dxNvCj7GiiA2esWV8277EG6V2jLExXaD41t6Vt8w34JWWvPaREdjcYcFdiHjt",
  "key23": "3X7QBSYaQT5F7pF39XExo24RmuR9gqFXq3WsyiGVR2bzw1ZLHMv3mLdEvYcUMF4EAeCqkjpbeCF3WegKee79XAy6",
  "key24": "4H5Sj6MEU3j1ERL3mDcTn1dgnnvr1kfpnfYKWZB2s6yXHvgeEqeghABGyBecu2pLELuzXh9Hb94tA5Vsiu1L5kxk",
  "key25": "2NXEAN1ChaXkjdPoWB6qRCsNrZohdrdNnFihz1Qra9k72DJYKekcvHHiBXkRwcGU9tSJaVhQEo82sGpBYyxDcaaW",
  "key26": "3t4Timg67TFWTdsKnCeRvHTt5uYqy4jPCz4Yicf9jD6VRvpHFXmiYNbvkGDRoU1u4mLXnqjjbAbEs3E71StTQQmM",
  "key27": "3RHrJXqFQLCQW8SXFQxfxPL8rWLsxXSMtxXLxzX4R1YNmWYUZYygaKanpmfwXBGqJGieHqCbeS1rJfaGxkUPPKd7",
  "key28": "3SMTgJKuscUvRMA5ntkKiY6vHtxYxHz3myLhCGX962U7wqkPBGMytuTV7NNAVcJMWxRa7sq4RtVFYn368gchJGtx",
  "key29": "2CDmCPoWxXsKyemM1XyRka7kr85emnm6NGKqvkmwqb579axD1sstC61ytSjafvewGLQ7iRn21Z72D6EgoRQNypcY",
  "key30": "26n2kbqscu1UvDNnyucSTBKU3WAQAdPf9yY3VWna8Uaq33d8Dpbbz21DF66kVs1gM5Re31MPQeBHUHUZQ46UdPuw",
  "key31": "39PgBrQxcBmvehtt9ncLNjb3uXez4VWvsDiMqYgPjZJRvyPxiiAteECAWqVfW1e2ynX2N6i5AZPmKVe68Arz4h6U",
  "key32": "5FYtjSDewjWcURVsSCAg48hz6EAvXA6MQkPEb1M2hS1Zzu9AZ1gZfL6uPDHgbka533VZVbWAc7RVocdF31E51mRP",
  "key33": "4uGZJ2iQopTQApxbbBXsD6VRtpV2sq1tNBEUVwSKtd2QVUyPx7QbLSd228y2qBCVaPCeXFAmafXFQrin3X1vEviY",
  "key34": "2wNvXqj47yCL9cV69YXyexrj2AkdCQPwXmEdYv1MrpobkvQFfWedy5SbHgbvaMsDAxbezKFWvZgXmyV7YAAq3fU2"
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
