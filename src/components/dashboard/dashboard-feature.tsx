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
    "2QJuLxqYbZoHsWfbz1rqzHsgG8TZ1484U5aJvqm3dRQZuexBqVmBUy3xHEFhHDHg4Bum8E6C45nrsrHbe1LUgkMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c6f5W3WSJbkqEsbiK7uhjowP1SV5rh1NBd5LYpAMEvmTwS3VowHJXZ8Evcfi3A1QTz5pm4cQVLE1zjk9xaVU8eo",
  "key1": "5Q7eZsrjgpgH8x9MjEzRE545YfDGetAKqP8xSnc8yMr2MexFtYmQtiHbWxkLXSMKeLKtDzG9tkujk2HjmmvhUeQ7",
  "key2": "2WHYqqa5H7j849jSXCJfYtPeQVz3i11FaFQDYj8SBe5MdwPv2QndFbk8QeqC7pFXoBtcDjsnYuTDQhbYpBUfwDLW",
  "key3": "2ALjsH7RX7ZGMVzWDv45ZTBVURGr3s9GjA6RiPE9qJ4FUATPt7E6rYrTKmAsombG1SQ55Sr6vjwaavLiHjpt1zhc",
  "key4": "AH3YMaz42p3gLgcHyqJao24j9hcMuCyRCY8eNHsPpJ7E2v9mKkSJrvr8GJhy2scVYLf1UfuKiXFr9SE7hNZUsk2",
  "key5": "SDWT2wNtZczddW2wAQf81UqabYxuzcNMAu5e5Sq1igmF5kpAviXcuoUsuCduVHuoyVDd5YDqx4V9Srj9ma6i2pD",
  "key6": "4DwSNSy24UcFEnYXv2nfjBvVhuBRRDrqg5RPLp2Sy1ESDX1zZgEMhAZoVB8n4F3cXupxxnKvfVYnCh55ekn1Ucq3",
  "key7": "4NVofKHPmKoRChv2YZzimznbVzABKiCeujBBLeQWp1v8erTXLbXTVVCJj9bGswUbQtfigC4HExiF31n9K859zUHB",
  "key8": "2TVLw1rvJGonVcaJpwoeRt22sCSFBHVF7Eds9tqt5rbKuAAEEe829nDPfLsHesqur7WGRLzQxfh3CT4ux7J5zaSP",
  "key9": "2U8FG9VcS4768cSNKmfTA7Kfp3pFxMY5PGyisqNVYXTUgWBRaXbntWn4UA3H8W4DeKMWGGHStSjhxPwGwJZFHD23",
  "key10": "2oDWxynTCzHuH3uLPWUzyYHFqXGYdRyJ9MbsbRhW9szZ8vZP4F9vcjygCHJVqDjxzmV6UqDnwng18UuiWNLezsDM",
  "key11": "dK6WBKk6SSPL4x4WqmSUdahrcEP35C3ShaK1rz982VEzX2k8jxtfGE9uf9tebQBTK3a2kwfWspgPnScPhG5Kh4D",
  "key12": "4HxYnY4banbXhAE27i2Xjo3cBDkJFN221yoJxAfURdUFUZ7BRjPjH64DLYPTM2jaCGq9W1yLFCCpCHZz66LfMyeK",
  "key13": "4BPDcNDtPeyjnaFz6Lct3jYknc3bQA5MFzgaNqTeYQhknhLJkeo9JMyuxjjWxpNwcA1aVQ4RhYrwDKBUF9dmhahq",
  "key14": "qdwhMtKNfHefU1e2iRuqGMuBYoZ3Cw26vmA9BsUD9mownyavki5JNrQjJt4MRSLU4vrTEPQm23zz9YdbTLbztx4",
  "key15": "29PGrXVp6MLYM8T7ddaZsLCb7riWdRXZHJpRp7YWKpCSC8NhjC2XcrRg3yidwGTsQ2x5Wk6P6yEcJzPDJMUo1pRM",
  "key16": "QaMpzx36zQtp9WqiYMtJfFojnL4hA1QybqQrAqoU7E3LWJqdvZeX9w1kP25FrQpXAvGvaFQXHzMnUBLRtaEm3on",
  "key17": "4p4z55KsaBPh7EAuKGQgpz3gsWBMJN7SeA2uiuSiPQ15A8uiaTKK8LhbgT2XBgrPLqaTKoWxyKewCZ1s37BLn3yh",
  "key18": "5hyhZyNXLZhi14b7VYSW4JYsCHGmPCdWj4UWeedPLCDgWuUFUfeeCHxVnxZCSmSmT2YJ3pMJdwwh5cDkBSrF1Xvw",
  "key19": "3swh4BXKJXkHXFeYwwZb8SiRJHpZSB46GjSuY1qw5tiMJRbUX6qo5W9trGMjZpDRbkMVU3PpipgwyxQJCsq4Ay4x",
  "key20": "2SN2VcZkpBqB5F5UwvZsnpAYATpCJYRvAgbAtoHee21hSU4JjN2ke8ruyp9AuCanaGYMRN1Zm1Yo7VvCo8ViPL9m",
  "key21": "kwGuisc7tPwcB8vuPe2XGB9BZmrByVTKtmTZeUarEc1VR2Y8oSM3MCzVrceyfB1XeVZDq1DDxSQ7Bf6vJR6sY6T",
  "key22": "4RwF1g875626A6obtNmRzMrbuoJPoC2qynHg1ELyMsC8r7wpViwFGwHnHpKDHXpTGGMnmzRpTWKCyKfHi8yyjsh5",
  "key23": "2ouHjgHxWjT26wpjJrDA9NVeEBkJCs8xN13Ja79oCEJV5zk8UGbbPmpusTf88GhGp4PRGEiFwavstFU7fGVU2SZr",
  "key24": "5UyEPt47JyfqZidsoBucnL6FTRLWQNutDPKHLJdPsd31U8jwHMdML2scszS3xzeCGhaWQdPzdYEAVWgkFcCwoQxv",
  "key25": "5yx4BtKCndJ9etSooUejvauaJo1Pa8sURs42QnSzq4vuxd4TgqBFBzgFJf4TiEnaWcD3DhVyUMsTuFt4qm4ZmuNT",
  "key26": "4rc4ijvFPLKBi9D3xK2KQdqDbxf5begjsrmnkUkeWT6zN4c2cnN8DPwoXyAeFBrtLoQJEhQsKPe3BkHvRUTgzqE2",
  "key27": "3EGKVWjKZuH52phYNSHgs7G7CtJmN7XEYbjJcN5G3PLahUedk7p5Vqj6LgJwy6Zn4A7EHnzTSJNmMSMcJv1D767z",
  "key28": "2v9XvaHUQqCC1BfxUhfAA2piM4Acjhi8r9hAQgHaAztWVDCa6iBXrwd6MHezae73mH5Vm1rh8ta3bEJPZJ96Mn18",
  "key29": "2sUp4ExEDP4yhhwJGuBSMS4JdCPogcWfxkLuHHEPEqVXmD5DWWexMeBwf4qCvoTRHid7tnr1hvv66dDhjx33sU28",
  "key30": "5L5b8pT3yyd4Mexaoc3enna9VayM4enJsBxi1wpHZhp5dbGja6t7FYYmfy9bn1nwWWbyeC6khGA8MKfY19uYeViq",
  "key31": "4RRoLFv1YtZ9GPjrRSPDcpMFSjSwrDtPgjLeCmoLLmv13QUbYQVitqC8wetrnGwpbFyT8RKddRuCPP2oGkrTqPeP",
  "key32": "3H8vWymyfVE81XUXiE3h4S4tZmw1nPnweQiB7CR8pr764D8bYKapBV46wwfVeDRopkwTjeni3hDxrNux4YQBe9gi",
  "key33": "5pWvSvygWLsWNdirDhG7J5R5Rkq6sUwm7QHKDkYC3hJ922sLqNpRkoW4XRQhhBpmPNAxqkZT2U3wYEk7N7B4cEbq",
  "key34": "53EQthF3PMFWbtecPUfht77VJVgu7DbcsC1y2dijb1F7SLLQzBo7yHbD2LRgaN3sX1eYSCa7xyWvyuJBvzvvFB3B",
  "key35": "3waa9eJUFuV66z812mvuUhLsXZ2WK1QBqcxGAGngs7shao32nTvqUFynfEw8XKBZLTZzyNVsn8Hninwo9JL1EBoe",
  "key36": "581ZKzz1kcPzWsvXNqU5MzoMKZJEbQK9iARWC1n9vc7Sc8SWCWsjGtaZ6KPwequaGXqKo1LQCwmg4hdJ8PMAZJXu",
  "key37": "4KN99KvLbt4UDCD3yGZMimcBAcWP9SJpXEGJUKqCQ5QSd998xMQhuxssL1iRXC4yADUbfPwoSJQYf8KY1u9aLkkB",
  "key38": "2HNeQNHX8enRXPibmk2K3m5MSCU66UHgqn8kMWH7cnVmSPUhXym4aRPhQTKUXnt52niWCQXrwcEHdvVc56bMLmZd",
  "key39": "5FDaTcQxVyoMTmmz8jnfTYTdBGfj8iRjy46wCdmWVcyJs53yDUnppmLYYMWaKJ4A9Li2S4Nzoh3r9kCaaonzPBs",
  "key40": "3Q9ParuW5s9EijEqvUnYT6tUFBr829e1EdahwrkkfebVGUWSQbQUDpHfczv1MczUycaf63dwrYfLvrCzFJo61Usn"
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
