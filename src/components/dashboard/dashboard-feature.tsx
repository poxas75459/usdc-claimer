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
    "2ZzqMRnSbVNDfP9qPAVLnubxw97WbMGsWZee3AHwup8wzFpmpBBGTPPJR4s4uFRG5stxBksSpaMXw2N91wyxBRsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6487vkXSVahvLWJcuskYLo9DAA6jZK114WUdCWxHmjPxPPBobez4Qenh3281b435qWS9uR1VpMz4nBeZivcEQQ9Y",
  "key1": "FANedAjPBFDcfwCBe11wNTdVrCTB4Z7FXW88Ecx6GJryRDjioVWeE4YPYYCe9aNF5D2KFYa78nisTF32YyoqyQd",
  "key2": "4Z2eNDAg1wvzQrDbZdGhh5nksVfdj1xMFFuyFrhvfphv81S7pLh7zZFJMPEhkAK7YrM7qcBiNz4qBXhxcGSx1xY9",
  "key3": "2S5FpVEc8L145HLLdgtW4yQdoGpevgB7jv2fiB2uMdHRAV1YM7eWHZwfwNc7fp1Hixstr3sFeZKFM5C5M2fXuLaZ",
  "key4": "61AUAjnb9SWyWnjo2G6K4Lwuw7NZVeo2hprkuUhALk4ehb8ZL4o13b3uZ9ztWU3sSttEEPKzkmUe26uktsmXtM5E",
  "key5": "4ASMiv8A1mB1Wj6AGSFdEQi5AeVWeD8ZAXTXUV7RBww45BU5hXvGSQ3yqFxbmh6TNaKCaB2BbK6fkSFpHrWRMv3F",
  "key6": "8BGb4nfH5EMAxsWG6ouxK8Wb9N3ib7GCWDC9uvGJAXTGXQ5MtrYYdr8mGgBHZkHQJ8xwQgPXDqMNPxvCSFZJer8",
  "key7": "3GVb3QsdUoGKFmNouaK1VvbCSJP3D75GChW4yGbLR4geFZMDezEVH1Cyf8ddnaTN6SJgm8drvU8wrgcoCRxQU452",
  "key8": "41v1LbTs8h3F9aG6dhgDRKiutYb48uaeS7cvJrHCnq6cFUvWYc1Y2yCreqZP36dwithfbs3dQUiiTnJ94T4T5dNL",
  "key9": "3fDbSMD2uyvnTwibNiasZPMhtE6PSD4UTc83PBokDrRzfCVU2qYojscojgMoHw7NXJYBRmBTiRzG9Y19XjxcHQ6m",
  "key10": "2Qg771RoncxAuzCRAv7d8nffmQYT1UZBUNGNRZXTUECa8Zo6iSgfQHRv8ajKGrKDhQP7qQdY5cGLHofzrYJW3cwd",
  "key11": "3sfKtr1hduyNDbPjZbYqPjFWXmVfGS9XYqAmSQGce7fpHKNwhAWHFzTidEHvNJ8Gz1LhCDHQ6x6KvYgxsXsRcqMX",
  "key12": "5FTvWNKoR7k92HRWGsW98ewHHvgXmHhTr5ZJHtmSwcFYAu12WjqkmJmxgma7SXAcDBxxpoFEarsYs8hHruGJDZZU",
  "key13": "4ignGgSVGWHT3GUQCLf5KbiFKHZuZfieizyLJkLMHPXfRMSKPaXBEFAScNfd7vXMuwY3zVgDwUw7zFSLbyz1sfJb",
  "key14": "38bxXiPQ3mrfcKiKHGW8VoKdZh1SKEtb5MDdrki6Ak65e4DG4ZDoeYmxDjN1T9Kb7ZNHJib4juWgNybPyeK9xnxm",
  "key15": "3oMuJnfiD9Tu1CzkLw4q4WDr7YfG1rZvvgg52UrsVy4E1mFnzPVxrEkC9YQw7KnuYFMV9kmVyrbLrPcfYaK1zVGi",
  "key16": "4mkkAf7rornRTYmPzD65yDHXB91VpTSpsBZv89rSjJ4Xa11xSCCRhG4qmXWL5GCLqwmpesEm46ybh7PwHiYgDz1Y",
  "key17": "5LmBs23UP3jV1LU8F8EZeG3nodqA7vEhp3Rs3pSQa4KYBuwk8ZZ7oPCnwoAuMCnW62WCNiEkP9Cd1FLK5fZ6h5Hz",
  "key18": "5z8xTtc5e6Kd6bM1Xtuqvg7mGrgibXduf73K8Jk6qNXu9xSn4spYWvBTnep5ofsWpsGftzJB4fDSxPpGwU4BAE66",
  "key19": "4afigwNyfRqMb9CVFoU3oSx11SanSfY14ZVJ2rFhMHnu2mJvduqWboP6jUNR8zREph5Vpsazm1bia7DbCwWyTrUg",
  "key20": "3DAVHR1UxwdQRY5ygmuYroWoHdhdV9dQREz3peUdq7joG7cr1BfP5Mn1wMaMbFNCyiiGhdHjTTDB62k1aDU88NqQ",
  "key21": "33vUF2cU4VoUgcM9t5wrTLAAfCntTsY8qNraaXZoKFupTGTtQcNijZ2RzSh4TJ476kGoTCbMF4kSDvxaHzGD3UP5",
  "key22": "3vpC4TDwynx3Ktp3n1XyNnPwDFrM6jUaYpaoYVk22ZALNJeiwW12Rtc5Ry5PJUfVfcW5RFx3KyWWx2C7GQhJB4jy",
  "key23": "JNQJW4WrNVsKose9a6CeUX73aSFup1UTgr6XT5S2oFQ7rdK9MrX4P8LfyGtrUifPmAdMBuE9AtXkUbjJTYuyyW8",
  "key24": "5FBHv7QsZLog85xdTDM3kPgpqCU94HoquP7kzUAaWXurM25cMT7bAvs3MnEbzj37rBwa5VpG8Vg6hoTtYVQoqLUc",
  "key25": "2GTT4xiEmkp6tk8yN22qFo82pacZtdZBgp5gQK1VWJyrUngib9MbHG4cVwzxsS6dgEiKyR1MW33ErU8FKNw4EzVE",
  "key26": "2qccuaNWaHEdBX9XPV5XKqP7N6TKgxXycEaqTv1VNXYh1S8H2qitij3hCA8DgHubBqx1LJqQb1jsBzBHRcGAjFDS",
  "key27": "4ahFm4KubKP4eEnKG2gjxXpe8dJeyHQX1TshhHwcytsBGi31xy39cMQJiGiKx5mDRRKfGkWtRKt5SLjiwTYGAfEM"
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
