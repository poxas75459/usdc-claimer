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
    "aEuGzfRC2Ua6GGtyYhnAUZgS3Wa3ggGtSr7Aq8CHv6aaCyzVrXbu1DDnMUsJQYTdmaPJ4QjPCxy5TqLit8q73CS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rsG8pu4bhFPUvX9hNMnzzQAQqH5VyvcQhS1Ap719kGrX2MzQCDNH5RL6XcndLvqJ5QwDmkecZuqHGo14gmbpNLG",
  "key1": "63U3TCjYk6zts9N9aM7dAEAdY5XUQcGLJtufHFAs8p8oqMkKhdLRWMya3KE8GceBVmRaePwgwvjcKDPKGG7UVZ95",
  "key2": "5ALV1cM6c2V7h2R81qV3wJTrth4aUt9kvgfi7mdoC1n5MbCx2P8N4Em7KjCRtDV8A86jucu1Sxm6TWMWGuKyJ2go",
  "key3": "2Loep65HVrFCCC13sSP6B4mBuMsCwbxex2ooKgWH2YwJpYJdW6Nk9RWbFZPLYc9uMQzqdMLiTbp2Txc16g18cpVW",
  "key4": "ntdfaeQakXp8QyB1gqZUTDCTBghNhM1ohyHtwqqRYgTqwL8M3ZSfzBY7rdDxCmyb7RqjfqCpxSdXkHyKj8e1cgq",
  "key5": "4eEDRSAzfg4HyXfaszu1uLDXTkHq9e2EQYLVGHYGXs4eYqicpzqEpafUTExf38CWNsCwkbJGPb2QGq1wBLxeVdkp",
  "key6": "3kZ4uWtEzifcaGH7Q5qKRRx9YBFM13Vya4DQMFtXJjFzYYkfrPCjrXcTnRefnfonMRFaQ9aKSheeYz2Bm2S8Y489",
  "key7": "54kVLidzAiR99yLz3h4qeni8Jdi3U13W3aKZaz7vJtDavH7A4Y9aR2WfNa9ZyTkoh3JB2ZV7TPgTyCDswdkcJsrC",
  "key8": "3z5AdVkgXhJfQPcFgPC2qS2guY3iknrkzmP5BMHXaxa21FkaxgjCCLtvWu2LXGfQTtPgww15HXZNFrnkUNM5HFfv",
  "key9": "2RQuwudWE5fTq2PHYRyfDowS5rg5QhEQbLhwT343kvo4DHCbuMExsXxTnitd1oJ2mFjcnSCN29YkTmN6vcDEnrM",
  "key10": "33Tm252UFt3E343iQZukvHrAankwaqFWVKZXrtn4eHLsFzSjLQTYakVvcf6NDHSxk1H7bpgZBR61Bg4oqfBMpYFU",
  "key11": "3D1DmGvtvt93i4f881kdvi1QSa4SqPL7B34ojUoVBhe3Gvq99jh853RPuLKrKF9gydXqSCpbBhk9kjTVSRSp3q3i",
  "key12": "3jiLiLzoSUXMX3kq22ittGYjvF34k8oihFeczbqrFD6ir4tZPuJy2hwpnd5qqXT8s7uPNQdvWXwPAWugYSbybyir",
  "key13": "2oMMFJnn8QpCQtPpFCBm1ffEc4MTcf7QH7EYzfsRkE5ao3QDUNVFGutsridEX78jMJL4pqu5qeaes4jpUYFAxJuT",
  "key14": "G9tiBBQUdpfVBKjbdvBLqtJy3nP63n6EiasvBkqeH2JAbA6KxYWB8CGy3kofFa7Y27Wy332rBvRZ5c35AFK9Lbq",
  "key15": "BTaB37GvB9taB8R4iSj3hHRu9AivH168vGWQ16Zdcjxqoxj8PpFtGLy63B7R1PUDRwJipTcMkoqtYQpGggPkZtP",
  "key16": "2s8KrB9nNVsuYc2jVp22ChZNKgxKVvVPqYShjmevAqnwwudHnn6QNskNbEdXoowV5uwBFhgBdcn1m6CtZUqvhA4d",
  "key17": "4q6d6Uw2nyjVK18DLTPStBgiyyqVoDkdaoEyCNuHWP7aFjtxcguLFyaWZbhvj2T1bVtoQn1SMMxEN1V1wDbu9LgG",
  "key18": "22eUgAFKvPwAAoDCN71SVpgVQJofLQNKSRWBMgWgQ35aJGmPXT94PHmYHM4So5g5Lpb1CnLn51rv1fdJCgwEdciF",
  "key19": "V7sK8BPWuPjYdahKKbYURgoz9pL92pkrxy1zkaVZ6HyiazJa4vD4gzKjL5QWchgALbUs4D47PuEBPMx3R3i3yTY",
  "key20": "LeXoNMRCX9kqzQr4AUX4Rnd369gEs1dygJMSU6HthMqxP9STPhoVXXQucLUpAqpxbdscXR3zqVHK6UvvwAnsJvG",
  "key21": "3YnAP4BXNZpgrsRMLNQqbCMNw594iUydqHdqMosThHo7Yz8MPotigSMPWQttzVhNibE1eYWP5gpdFb6Yuzf5umU8",
  "key22": "5CseGPojQ3zKHuDUzzvHKjs18CBVXNdMvbrTY4EkfBtqQV3sHMdx9Mkq19neSmcbhSFQMzfYafgJTYykNNCZCwYz",
  "key23": "5qqXpcijDNzjH87Y7QdmzBRSJ4hmNbGpEWjmpXTMA5XLJctj6gqd11ZDNkpzrDjeDFi5yFBvQCbHHZY1tBe11jf2",
  "key24": "2fLej8T73hsvWKizyDmSTeYFHvHBXY2SCh6njAP4DVMXtUYji4P7JG9LBjHV96Ny85Jyh2KdJEvLnHvp7Qdw2XZS",
  "key25": "3KV5TqDhgUQLZxKJM6Q2eTYNVYQ7PWUGaxN4TRdU1seYet9wYRcoTwPFYcpYPjXKpzVvtUXweJ77DAXnW1y6ZKGp",
  "key26": "sKNiFJmWu3HBMswYHhZePZaC8FVqYHnWj8RKLEugciMPEkTtvBYP7UwXbnqMkCnEHa5tarkA9JGn6CdchXiE6ec",
  "key27": "51FTcvxHd16XMkDi85SC2MBWN4ShQuRJYt7Pw15zVXmFXWbzTY1PAPJ19fCSPzsEP9cmaPC8U9QZtuCUjEeLSLsx",
  "key28": "35263MVCNwwsJr8XommcRmQ9vYv2nXe13JKs5Fyoxf8rMjhXfHUgHQhgTpZLGVBd3vbEESSdHAtdmb9fNNRVXcF1",
  "key29": "yCwDH4sG3tuLXVCSsQkqTnxzfZucAQsLgdUBTTjxvEk9kFVp2499kZd65w3CZ5zLky2MVSBK9zAVe5Z7oQYcYyH",
  "key30": "2bzD9ETUfCVJtRdrHwLxFbDZ9RcvKEAorN4uXhvhcNtAwdxfKjaYUba5PrasmQiBTCWuHn5DqnuQikhAhKpPhpcb",
  "key31": "HhzABWKpugSEogRR5m25Ure1pjQ2NWKqtbac6CT4J48L6fxbMFEjbzwpnY29XhFyfCE9bdo1MAjumtkmcczq21k",
  "key32": "4yWmdxeea9UECECkcFbbvDMdxkW1Pnf2CnfWy7REbtQm7wZijrLPani5hhYDWQUFE9NPpHfU4FAirTycBrNQY52c",
  "key33": "2U9FdwyiHHn2NwGxp2Rrrptkg15o71W2ufTH8H1MJCvLQuiHhsEmQUT8n5vKCava75vS9SjhTvUwnUxnTqvwvUTw",
  "key34": "3KL3H3NSuR9TVrPtEWwaqosPVXAmB6ph3BKeVB5vo4DGts9jYMwujeMjEQmePDnZLvN3eSTYZktVXgKSSxG3Mcxb",
  "key35": "2tgRY62sLCN6rn4Kq5StWcW4EqEGDXRST3VH7QWdqi7WpZEk46rh2CLWEa9eUcQHyhWhWXaG9C8BpFysSBkPrqLA",
  "key36": "5DQkXSWp187ULzXTp1NDJxAi6tCRcawwTMeZjh93pTvRxC16Eav4Tj86FpUjfhET7zTUGZAooM95zS1mtNgzWyYw",
  "key37": "2RRfTAcmWeTBkcKu6EyHuo4XgKFfE7ti6jfWRomxHJDv2sn7uYJC5Vv8XnJ1AWXVRSZYSh9gWnJVjh4a63VUhEgz",
  "key38": "3UY2FrfTb5hG4D73eLrmBLWDPJz5jvDEbD42KaNe3PKtj3fGw1ujbhMcCrC28gePdAzXe7qJP3ZHWWBhQ7SJS5my",
  "key39": "5RGy6EF6udd9jBb47c2duaVFWDReGRprkc2BGVcwEGS9VK6uwr1aqasmJsXqAcZEfWnUKpT1ivnXeKNFGp6KSmVc",
  "key40": "4LrCdFwpWdMMdYGWhF1kcjVY7ZZ99Cr8Cwz61aec9aUuKpBzzKAryRkY94ruxji41HSWAjvzqRbQy34V3sdjRw1o",
  "key41": "5MySomtiVBQu9EwZiqy11DJXWCBfYngAHF5tGV5yEGe2VgKC19JaJAxiZPuRyhrgYAi34t3aCpvFq4PP9TQWh4ZA",
  "key42": "3bji88nJsvb59nmbx3AJHjFEBspUtUrR8FaBG7VBbQatJQozHAiwD1QqV3dxzXYXFBrbSrFCKzHtYeXiMRE2qwby",
  "key43": "4fc8Gk1kgnyvnVWwH51ZaNVhZZK1QRQC5KzjJ2aBZSLtUM82mXNV6nwKSMmadwu9WZtFMxdHt8at2zFBNCVvpvF9"
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
