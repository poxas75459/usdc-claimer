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
    "4oFbVnJL6Jay8NDCxmEKRka8vZBEyBQDpSzK1EPiLHqaovk41qMfGz8G4kBk4TFNUPHF6NEwBQN9SFoGRqQkcZFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ccaQMDgMYdwCrZiQ37g4XFxcdTM8XhrburwS6DCWxwK7AGtGBfk5dbUzaTszQ5pk3x27dTtts6oipGmLYbdMYqA",
  "key1": "4ci619KeHA6HN1ysEtAnW1VP11Ppz4vU9AXyUr9hegRcT2TbSjMq5Y2frH8e8RwbM3cc692UgVsdKjjj3PP32Foh",
  "key2": "39RE5DGLVh69Ehv6uXJqdC4KyNrADawxURMPbMtDHahjx7cfZRE6wrTF43DAeBiFHW6qwdCQREW87h8SuwMRS3eW",
  "key3": "5QZPyx1QqhMqp67YRyMmQyuDwyipLLw3DJb8NTwzGXEkXGzXZKjEYAKpgP3AVuVx4qMfA3trEWPTf5AoLauTPG1W",
  "key4": "5y7C8TPMQd6sHtoPEoMBLce7gc1F7Gc9mbYd5ME4M1eFYpXn1StJ9n3o5F9LVWFLynNxujqyBfBctLiHZHqdvorB",
  "key5": "4ypigkFJCkAzJeh2bxM3GjC7jss5ePSAVTYRen9jWCTgeiQi86VpdUPQwrpR4NcHTDyVzbrTpYjWr5iXjPR8YYrT",
  "key6": "2f5ysWm3BK2dpvMNxD9k3aU1ZnDiwKMFU8iuamG6wgQAtsKj6HaEAT18GnPhGVefouRBizsgnRPTv7cUyMAQYCRx",
  "key7": "3szScT5wHbcBCeE5dbVviGRJkBXS2gBYZArqXJjuUZETKaJRfqk2yBiFGpv6QzhJm7b7vw4dgKAKkNHD6FqE9Jbr",
  "key8": "2RG5kCuYY5NK62eCxSMkVGqXaR1T9cVx3shH2FnZWV3NEP4GitmGT2cknkr7JPjGanCU25BfYrLLUjF7rG4qi4iW",
  "key9": "3ByHYHARcAFYAWT3FeTXdAwq2C1YGQeC9nZekveWJn8F8uXNC11gZcM1qYiVG2UEC35HTxgNEmTsMutmfYsyJLES",
  "key10": "51JDXK8yXe4sQMgm4T9XFVnMfaeEgkSjutR5aoMiT8y3GXjjNcGSyAJvSvcgc5Psy7LA4ND2GQfHBwUKTmEDfKpT",
  "key11": "VY12JR5dzGz9oREbigAr6rymsVstvU7V7rKBLBcaz2HqC6CsPBj97jsyNgphyGNZHN4YAoFy4RwCw8ST9FFXVV1",
  "key12": "3wqhoX3xQnTZnLoCKBt4PaoGiwhgoQ9nPGqC96aUi3kTCuTQ6maEZtvhwuwKHrDD23fcZCj7qX4E1u7fGU7bZ8ho",
  "key13": "29YJ9bRF5yVGFW3fJe6AMdmyQah4X7o9NSu1859K56UzwRo6WxSmuf1Pfa9B4so7ttXXJKyhzTvGBsB2MFhVJWad",
  "key14": "48KYYnZ65WccX6cqSqr5JnHWNCn92bFWxrQaBhJPbHbBop3JsqekhRTS9ixviisDuM2CXYxHs9EE54ovdVU5bRRy",
  "key15": "2pfzU9cr3VQWcjdTkigAeDgXn6YBFRYmWnVaW4NowzjQSDEZr4Krk8LbXAFepgqt452Zj17xY4Hrcq9khyEXrwfH",
  "key16": "5uGeRo5VXcqpCLcdQrW5wFStHb6ma92V4yh6Jyif9Q7JAXy6zHzFFKzX6MsLvFks7rbL8TCdPZD2F38KdLtPm1AG",
  "key17": "635BuGE3wLLfyCTHoQZDXa6p9VzBoPCVC7ER5Z7qDFpCNTea2EiiCJUSoCKhhajFVbvzCDctpw1uX3g8b1GA3SyF",
  "key18": "3oVqU9h8QfiLrggyHSt8SxnBHkNus4Zed5hrY6W7KeHGhDQKxwdRkbSeQmue8ZfR1P5yWWHj1C7f9QCLAKdhLiRo",
  "key19": "24iwSrNePMLh5ujfXvsBzmh8V2yXgToKSNX1U8EnAquAQJVXsByKPtYRLECKT2hhZLYe2xMM8h9SL5i7SYi4mTEq",
  "key20": "qd3Zz3AQDijGSfBK7sh2y8XdnjFvPizoPQXPtJM8jT3Q7fa5ibMXo7SVbmdHfsn4AYmyCspuGLLRiq8CED3yQ77",
  "key21": "2BMg2UQLD7u2nPFayuWwXah4KHp9ZghDYh4q7XydsA8FqsNB8P1CaxDsMFx2o8jCfsRgQ3dSX162SKru64zxHrzB",
  "key22": "539vMSNn3RoRkR4xLhaeTUfiaiGq8bNE8V5bJr43Pp9VwNGSS9EzbgfJSupfNa1fap8yJM2Pru8akDrD4fCu65QR",
  "key23": "5raCDRYHvy1y7xbCjgzfZYjhLeH1WsZVWBJyAiK2HAhYfbQFy92vQGEyb3Fu12wdiwiQXrA8SXuG7xmwc9PVS96L",
  "key24": "4VfxNgLfwHLNz4eqHGPyZ1MnmbybSg5hfcaaRzHERFNscXfEzhEGRhiRh9dtPEvYmGDohFCva2mFWWZEhLJTqDP",
  "key25": "2dTaskXfq1EACCsSuHTPfVyWHsxEt84YMczQXcxd3J1sJ4TZcnhkycmrHB6db6zdXrzACs9oZDGPevmrx1b8Y874",
  "key26": "4VjxQafPjsztc2dfijHozTDs2yy9ZkaCa2QpEqdU3xuGTvWsh5o4XjmmtbbRxEmcLzynTpViDVTiPx6PnwxMEjr1",
  "key27": "3PANkzGxUth5FLVDYPN2aYYZZemNoH4Z1ntvbEXui3bv9BovQNiEGPU78tbgNbDBbAJyC6eWLUNtgqmiWLo6Rh5N",
  "key28": "3EBJRBrUXXn3KF5PUBGAVovWgYvivD5pftPrjmHeb2PaJ7Y4Wvr1LhqPRHqrmUiRzT8AQyYyaRiRSeqzeHugzatD",
  "key29": "1Mjie5Gfsjqophv5f5RZ3gUfR8cLMSUWTQptPaPgvuQz9ohsPQmgEa1yUfifndD4jBGHg9pLkmG9RnHdrefmtrv",
  "key30": "585e4xT34fMK8TGB2so2DNokqtMjwLj7HbUwKqGWk39aPjRPZCc5U4fLJtCKpYgAjxEgDkYcfFQNxvzUrA8YYiM8",
  "key31": "QLZK8buExyrMdUceZewGt5wd8bXeH4HhGX8GtfVNpLa8PS8aatehAnnLgtLRiZtgJR5phJ4x5hboxT31qcHtbAF",
  "key32": "4pANt5PhzrNsjWXuRseVEgKWdGThdH4zbTTc8ZRZrv7vKSGsK6Rn7cTQZWDrejkF4dygyyjtYdPc1YymutaVfTA5",
  "key33": "4TwKKqiKdzMi2Ec962jkQgjLuF1vDDwmVUXgf4Luv5QxeoWggTWiVAz4RTLoDbgf2GgCR9A2pbPq9Dry772UNXDm"
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
