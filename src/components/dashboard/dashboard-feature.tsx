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
    "62rrdKcqEyvpoRhzX5CQioRmS5ixCQeDZCf1Ja9xwoybBq1An9A76Zh6EJGStbEXGhfh33vs5sfBRhW9xcobLeF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RQpKwVDkDgX6tETxqLu131Q5mJmWST3wPy7MZxSdm2d3yN9HybxjvGJNt9nLuopVqzasHEKghF3dqfg8LeXZKCm",
  "key1": "65nks4qnG7jJvNE4mhqPWWhHkvt4qVqMk7HEjMbn6SVnhehqGauBfUDYdsSubFKSGPnH1WwjvbxFQPH3RmSnzViE",
  "key2": "sA5eSekrKx6hRpVMNwjPM8e3Tn6yUEtC6tcoHwgKgSSp4USe4epL8zN9n26uGHyArD8Dux3rb6cqNRUzBwgPnnc",
  "key3": "4taQXDW4bJ4ZJ5t1u57HV4ZyFLNCHf7NWbGJsg78yVmF91yHMn89PMDUDNe4oduZHqF78L853Gt14pK7GMNZTXcP",
  "key4": "57p9b1WcYHRdM75LuXZMs4cbthLKwQaW1QzP1rz3RhE6zN6cXofrMppTJrkvnsMHdis2PVECm4KdB2ppDQHAXwWX",
  "key5": "3ZJut9bqB6azU5CnTxUrbW1UjYAJ7yugpLbEZ6mf4Z2wZv1CKhnQDckhQY1kK26uE9u3UHx748ua2xUBhu6mhW3s",
  "key6": "Q96xicWHo17AZS23oUi8SpK3SByoiAbeUmqYu5dsuhkcKStw5CHsawh9ysPfiEW7HWCE3whbVDunGP7NruEKSz3",
  "key7": "51ho9dtkBoKD1gDpCFa4obrEwD2WnZ5XamCRL7ao9s2Ntdt3EDzhc5CLqZxtsGbh43f8Tgsn7ACvfxboFy4jiexc",
  "key8": "3BYbRAtARYyoG3dxunRbVLQV5eYe6t3KotWxsHKS2AQttftFpknRunAQ8R1x7XgzxAWiwJjUkVQV6joAg7gZC2rU",
  "key9": "3GBGXd1hTfozvEWh8KRuB5DDnPLm8np7bNqSsjirJ2GaKmnp4mk4UZfnbw8usTxK99EKEgg3vRmTBtTyP2f1qqSt",
  "key10": "wgLCvmRV4nvtXNxsNNAuAK5gDfT4rkbgoxHpnZu6sqxfzhx3dWGqtBwXZ2ii7DxDKsWZuKahXkS1vKDNkEaDFz8",
  "key11": "4DvU8Cqjqa5b6mxVkrTB2YUPm1jWTi8rrTrTsG4cRSvcNssBvkFwZUPmv6XLAyUa5rtd5WBBa9dSRirJ7Gz1BTtY",
  "key12": "2x4CXRLyUWayzNnJrFRRtQ9FAFgbHWWbHb7VZz3UDvX4VjeL4AdTxhDxi4DQFB8WGwrrwXJsECaebCKxMkURxCi6",
  "key13": "3N5ehZyF3R54rnJ8CUNEC3znGkPR1rahAJ6ZnXcGELukRa4wEZNxZomV7A5iuxwnSHKK7Yu1igVHQFWkmivV7oh4",
  "key14": "2myC384K191QTkezznNpaYnci3uoSyVfT1rLu6ohFEH2yP3422zMgpb9C6eiNHVS8RaaGM31d1aTPQPmzpGRV4Zg",
  "key15": "KqCbqZbuyj2kPxfCtEJkGHktfCJGoxgaFubhzp5BV3LJysYwqoygmBWaNto6ic8oKTrP6LC7cUpYknE4z9R3cHk",
  "key16": "3PcRWqcvAFm8oy3N4oZEJ7xPLHV7LVDu3H6oXHiz2t6MxpZtW787FQ95A3JTxRWDhvYM6rMBzjjZmq5sXSERPBaC",
  "key17": "5d6gbVP3zYKW6dRvPZkocuvYmR7fR9Eyh9D589h7fvCGgNM9dd6NCAJzsY61go6At673NXNibWfHkXGTrytCqq8h",
  "key18": "2aXmx7KzXkaqDkYXGiENrcpaZTZzo4HquBsayuReHsWm6JkKgmSRK3qu3tE4rtPfeYvYtVe7FJEGMXJdnnHmhpHP",
  "key19": "4fNYAWgbR56mjrbw7CxAnvLscAL7v8NxBi84a78TqJr2w6e5iYRB6vtN4VnPaFXCbjovrFPi5CBBh6EaysM5qp9J",
  "key20": "2jWEvMxvwKxdaptN4u2tLxLqCS4XMWM22yep6WDy7WfNGDd8MMpMqZ4qsyXwhHg9jmXoTCFk3HaCcqVWbi5EktGM",
  "key21": "4ywvwBHNVtnrBBuMWHxShU7CLKHiEPv1cNXCWLA3AH239Sv4wZohAeqb9uBr27dHWrUuvceabKtUU331camFa9MV",
  "key22": "HCP8WnoX77brKZ2Ekbuo2K3WfckvhuZYT4Wtf62ZH89xNiS4kS4gMEDd2RVPsFdvyr8Lixbq5ZxqVo53A9CooR9",
  "key23": "2QMeChpRUV83ZQ8QRQrP3177cuYadwmnnWNsTWPNFMNjmbE6JgHusvg9R36HGPYSEY5rMF9ZwGrEsWrpsAqFHwFK",
  "key24": "b5cxCiu5DriNoyktbW6D4do3oJiQThMdscRLEeJ2vBXWyybYWjg9BF9N9PqaxjCts6aWSLdapf4rei8UBVF8z4j",
  "key25": "2p9XPXjfQnnEqaPTWfkU3QgUSws7qgx6ygEkH9ubdqKwZP2w7iUE8Rwukqnd7EwdrmNjYfE2ZJfUYHsLrs4oChq1",
  "key26": "2hmeS1vqMmLbnm6yVQBb8NVjV2qb2PJreqqmLTb6JYBQXqZv4pT2ktRsvqqSv4mdUQqt3gX7zVXhRGpgQiwjdcxB",
  "key27": "4kvHfcF4A8RkefHDbD79oubnNna1FdQJEStk2yYQyvdJKXekFe5rdqbnWfJYpWcsjUeXSSNqbYZUfZiVMTnVvU1M",
  "key28": "3KJTHFwPiiAryBHiBJziV9Z5ApeXWBbfttL2eW66aHhs2DakZa6Gv59cj7RCWevgSLinJEm2MpuNxiiw9udP5xe2",
  "key29": "2kaS2Ad2RxprKxY4G1XLPHpS8kpsJ7pATqiWRMfUJD52rNtmAcGe8fmaoP8aA8Qv9c1iG2SfF5aSb8wW7UdvExTP",
  "key30": "5STbmbphCA8S7uvyGNXdXAHd8NC1wE7q458aaHTZy6g7PNEScACtdRuoHfAdZkxbURxCbo37KDVnkvxuWPCbcgQF",
  "key31": "2bGCt9eLPHYbZ2jZ29bR3vpVfyfnpE1NAhVThxY5rumCTKr6nPiXTLsXiKzhxPaaWWfaesTB1qbH6KG4zpjAfvPz"
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
