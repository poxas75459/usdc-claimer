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
    "2rr9KkT3cw78ZuBgMyeRouFt6Zu8XEc3ESRb5o2xpesxc15XHRZLfZsjs89QadtfquxHn9t3wbb4m6tN8NR6csnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RP4sXCNBjmY8hAcjwVQR761DkUgTovJ6xRocVhLNPYVU3xapxgLf35Ua1gD7rm7RgMzFKYscvM88CiTWVnt2W2R",
  "key1": "64UecmU3rEVwEvNb7wwu3cgx3jQouKYwgqvDk1YZ1aWwKBbaccTVpAv3hBBnw7yLCKJD8ousf8pujkvDwytKi9iX",
  "key2": "3H9LkUUtEjM7gkBepEtfL6P7yd3LKA1UWtQni221ttfhiVrtkSCtCjxztrdtbjfSpLRFfEFpbXQYsUE1U2jP5Ve9",
  "key3": "uUMDN9BH7bD7AA49RYBF1Y2oxZVek87u8wvACgFUKcH3rgtesC5um2BgfFfgNJP5ARk1ezPvWNwLZyPwqHUiCrc",
  "key4": "3pxZSzeVXVFkpgr3rYmrFpQzdiTRLepz38EZUWGAx2QX5S1aM61nrLyDMsEsvgodcmfTaQJL1cBZW2K9qxHjENJ",
  "key5": "5bLjjEsLrWc4A2FDrrw2zZzPuyaLLQ35jqcX8cyF2cvqtmRkbJK41YPTj8ueTMstTw8wG6KWvnrqggmV1whzp83R",
  "key6": "4SCcWNRbKAyKHjbV4xJu2teEennfdjoWhDt7Rh9oCNf1ZNmm4cEH3aiH12ffieQ8SkcCsFMzXEwgm8vHciRJ9dbA",
  "key7": "3ooxyEmwuud8tumuX9X5TqnZTmJdfftMTJFtSaTkGPE4E5UPzjkyK63CYbc7Tzfg2LSHyjX8wx3Go9jNwTy6Ympz",
  "key8": "5zrQpJ956qJ4qXLcA73LSQhgGMuL8zykxKFzfZDfEuP3geUaUKYeAEeL6ME2stFRHNWjMU2P5PHk7WjsUWEER5yg",
  "key9": "4Vp161oc2NV19R3JUdPjCfXUBTd2QHwLZtmAuzj6ZSvWJGBWtD4Ry3qapH2kMus8kGzs3H5qX46P57HWig9RJ7pR",
  "key10": "5NEo4UCB8aDusUZGhj9r5825Kt5yzhAG2mjY9JREhQzTdmihajL6GaC4zAXRVxe6w2tnTAg3s3kAgS7Dux3GSRLp",
  "key11": "HqNPTPnR3vqVK8WTwNZgDQabmFS2dPz6XFZEtNT9Q1JthhszrBjvCXbAQDeZKcz2cm2ygSMvYSDs2PCZR6vRnVN",
  "key12": "5dBR3r5mwFsV9mL6Ss4c7kcwRrbLbnsyRd4A6QFRSSQhHDTnNhXQcDyEg47595Y7PzHzmJz2LABqduXsn3j98LG1",
  "key13": "2G1jDoLFuAFVSFZv4zqRxfBtMK3kYodVWdwVL4ZJxKpHMcSabM6rCgMYbKeR2ToZFn1d6wa9gdUhHqRzisutusu3",
  "key14": "QMW29KSFAMNfXHqB2MCkXs526Un6JCntPtNjcpS5mCo3eBXbKuSoj9Eu5feqmfBHZV6jdHjLujef8ifGvXk2iLT",
  "key15": "AUzh4GcD5mK9JtGNowa5JQkDKXDVJzjm7zo2tDEqJka9fVhor7HmPmXdqB5fg9tkoL5fr7MRKc8Ri6SpUz75Wcq",
  "key16": "4hGFrkS6JNE18XBKKwkvDKTLEi9ZLiNvjsKgDdEa359CW3tKp6uHajiUyipVK2hQ3ZQAXcGuH4ZMnj7uDK17pmKo",
  "key17": "5xbyHnT25Woo9nivN3TDqA2693kxBPw6yRpBHvJZLQpRjrDw7FtnDNrjkWbp7heXqB2jnoPVGXW4bapP2MP5K2K6",
  "key18": "WiubeZnNjNmune8JZGEraX7kHCs9q7fsnZijRZZAM3mhtYq8SCz2ku1y8vH96WLWWhk5pPDFvvrr9SJ8KDe4d2K",
  "key19": "5p1LYDqkZtupp5KuwKTmqZnXzhj2LQs38v5Ym6jmSwfvuHZudcnzbhjzYmEU5V4wJ71NjRy6uKmQaN1pxjMoRo1g",
  "key20": "5iR8G4GyJtrW9F9GufVa4tHJRjQ88TDzCpcEYrsfRoeYpGGKLXs8sLMtKKbnoK5GspmXJCFqwkD6jjR9gh9jXUnv",
  "key21": "28GH9scbbnB5kqwoyvD7P3JDNPWxMWVmKX4XPHMxbUY3rigjGFGrdMSkppfaYUFHLgLVictmbgSegPYbZ98W8kCE",
  "key22": "5P7yhtJftecSgjwy4o7itW5tZeR6z1WVoNhVFiiZYUs7owkgZ1G8XsEuSYJCtfALkTVa1rpMr8TEb28d5p574axR",
  "key23": "24WS4mSif2nPi89HESH8dhMgAETMCGq6Ck1CkeGpJ4hm4YHS57Ym82wNZDTwuPbogz2ynwTgMWj8yCQ6o5Reo6pf",
  "key24": "2jyegtpkij6zCMCdrFxKGWQNDRhzikzx2wXFEvgVvtv3QHMuanaykqJUSTifQ4CPUBQzoZpTLCQV4KhzkhY6w1HW",
  "key25": "5zybXvrFXM2QBKcXoEM2hsBpYAfAqnFeZfcRSo3K6CULdw9aK1wh9oWC9nFi9N71jEZGeWMmtnjr3JDqBkKKNumT",
  "key26": "2dnfxd4ABzf6RXUUTwwVz1RQLbiZUbCYApsVCzNyiYZh5krZXZgnPtuMU8kdQ9WTeZSMEk3oHpnnGoLTcQendic6",
  "key27": "2bCj5C25yZSL3A81ikA8MQjfW5oN8RiCzG639BJMYAxrrcwpnFkRMq1Yqc1R1pydu3tJmRs1ApBhpFGDwBN3hnuw",
  "key28": "3Q8YePgb1RDEWQMetLgGngSSbtTBpBJpTyPYBraUwGJwvQ7RP8oLBa2XzWdUmwP2ETevHDSW38aWQ3SnMhZZL32F",
  "key29": "5jwAcLBMsDYV3DyBom4HKSxj8wck5SfG5APjhcrCo56rVRQVUXCb7fACfmxAhyrLqcktaNzYBCrUu61tpP23BVLJ",
  "key30": "5YyMAyqtuz4PsoDrqmjBg2R4ezWo5CffyeMv1KwZ8aceRTDTHj2EJfjChR2tNfwcVEbV2QdwSmp2jrMJuDmo4d4F",
  "key31": "43tTu9Tr8kJGgvGB5MppUD7YQn8ES9LwqhpLTc15NjtuVmqjwuvAcHuaoMppCQpBevvswVh3rd96WzBuSZKvSCMH",
  "key32": "5ZAQaFKQWcNCEbFCqVTMC6XuUfEV3JZ9TGybs9JYLj4aXoFkdt8swYyeCKcyGpVS2mmdagAcqJ8FgWWEozdVTnLQ"
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
