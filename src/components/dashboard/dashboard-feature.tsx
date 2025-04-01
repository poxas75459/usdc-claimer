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
    "4Me8ohmNNTFpsNm6ZM52P8UbStf58bM7kNm65wHimxUMn4szP6HCkwVxH18nivENz1JutDbe5Gxmg1C1qeoYdCt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vp8T7oNRh1szitq1sjzNKXcLHYNqXxSybYUkiAiK2QZJrdscHDjYjHJe1r2xayU9EeVQuMgb1D6et9hE2hpjc1s",
  "key1": "4CMQZJfCZJijDkQf2mMsZeAd2xcfxBNYPGzzWxAe6ECaCnsDDPEt53AadUjq4wes7WQfyGTQJsUWij53j9d7iLA8",
  "key2": "3XFMZLDf6mJDhQ7hJtjCZwuH1recMrcJgcpaoq2WiaVopWw3qny2eXKTMauojb6Bx99mUxxxFSs4wxnw2vt5aaCU",
  "key3": "Nm67FC9WuP6Qttk5Egq2G7wVq7sGUPj6YLeJN2XBfLXpCFJdcV2DcxpTgBYUUfxJzebSf6qay1bcjMiDZ3f31DU",
  "key4": "4aUxKvaNYnx9TFwP5Mb9YHKhMV9fNH9Dry3n37j473eMAgJsYLBagvKJr26W5UTtStbFxWrgV8QQrNk5DjAjz1cQ",
  "key5": "FEaaarHMjiB293jat5SFeWEiWh4MNhYUJdRHHpfo3qDjjH6K7arBejLwkLeZkJuQCVD3R1nYJeQwJKpWeoKygKG",
  "key6": "4a9T7o1Q2663LWYr1Y6fPHXMH1CcT961g8q1hwcNdB2cA3eq1CpXqMwTMiE4ifgNeDaU73ust5XaEnSpbDagYyZD",
  "key7": "3LutFGUn5H2tCWyzxMBakULVxR6BbsKxFudz58qR3HBndyqZ1eDaAaod5uLKrHocdpvTPG92kGnUsxFL7Pd79NjR",
  "key8": "3j4H4iqtnHfoqYuQHTve5pHeo4fwAWphchFzjD6HRpsfadkuiT7j5pnAvYmvrtVif7CEwogpixHKkEdKTBbU4PU8",
  "key9": "2ztxCsQLF5o6ChNyMtD6xg6Ch5K23FaGQFwsHFjZxkKRhg1MWDGeiWtNgnRoRrqUu48zYeyNuFMjcqNVpQggUQRL",
  "key10": "2tEuEFepm7QepWr5mhsqru4DqvgnFdgHTBAWK1gWHAyqAuQauDUM2mMVx7JJjKzr3d1Sts3wq4Ltu32HkJsRajbV",
  "key11": "5Wbxjg7uEoTrm56vjLCEZQsok9w86g8UMGdVH47dBzAy1hwKLxJEuLxBM9CY2RUUg2HRDzxuwDcU3Jr5dQHwJGkP",
  "key12": "4RGUYAm7J5PjbDeFK7AuBX69iS5REtL2MehUX7Cu38SLc9HzbxMi5BCYUbAMChhvVtiwjDQdePHymUgVfj7ZkLzy",
  "key13": "4baH1mr1Wj9dPwtToDnU1eRGecn7SPejmpaUdZ5Z5LbUHUEqgqi57LQ8NeUsPVfjvLAVPLv27UDSy1TJNCHA7GLQ",
  "key14": "3kBcq6iiD6E1My6KkxPZTdykqdwetknqoRTMj93VLcKxCeyEFMmX43terrrbjtrKkWtNV26AnwDaS3VdnjYQz41X",
  "key15": "DYaSknwXGKzYe3mF2LsouywFpQMtXgvLaiDncbZJHngUzr3iaTfQBKN9qtwgDTjQLTGu59yLuEcpD5UsaTDZecV",
  "key16": "4Y1s8HXY7DmjoNgq1ASBysbwbgMR5QmcmMfabfAPtCJanTroFN85jH4nDMX6MHNBo3wNSefHtccntKQ6hoHZk9g7",
  "key17": "5zFsKTEYBQRYocxaS5x8ogaBAr9CgL5tVASi9A3W9LNjE3WK3UThvZbyP8SAxk3UZ9Ui4ANkFwyCxzbCuTzFNBQx",
  "key18": "61Q7vsFBJ1xuy5nArzB4dumXgm4DbAGvdhR9JjSz3Qgok8VkociyMcxR3A1X573p3MASD56L2HS8Zx2Kr144QmFD",
  "key19": "27sDTpknVsqDR3XhEezN3WcatrAUW5hDST3YfrYX9Eu7eZtHXbrnQv3n5o51cjUWCEnx7FjMva2msnEaQmq6o8xn",
  "key20": "491rVNWENA1Zz7afGEHQ7RdyzgiSZp8Tdo349K8GzUnM1CKyXosu3nnC5Ki7yhNsM7vmQmREyQyYsrcYYpbas1xL",
  "key21": "2JyDRSM8xthhgntRU85USyFZNUfBHMFA7J55F3jZAF3BzbPHu9RyZJLkNTdA3WshdjYHHgkdVfzJTrmnoZex4E4t",
  "key22": "53ML5A16dEQgj2xk8yP17WpTL7RLtUGDkZDcSSoknAvUGoWtzy65qXuipwW4T279Hq6NVMvqiYfKM2Q83j7UZrgF",
  "key23": "3j495FAQBeyhQuvM6pxyM6rwb7KxEn9nefGRgxyTprz9ovofJJ24LDQckaBKWkindkUUSvNuFfd7vkbpbZwDq68N",
  "key24": "4xyE2abv3M2P7aXiMFut1CcUiEEEmsfLBL1NZpu7Vz8FNdG7mN8cFYY84aaYZSPrNG36Ams1LWDp7BGeVHuiXuP9",
  "key25": "4QVjrDTRVkCnPUdayurBKADGW68oSHEW4sGzQBtES9DvtqPfCHnFjzuZfoBUmWY63HRpHpGcgF3JkueT4RhUhXP2",
  "key26": "ZCCtZ5ph5YfFcLAU6h1Y3Pkz36eUKkm9NNEbYgUkd3UgaPisHCqpouDfYJesuhBemypfPAtDHM3i8cxPpVa3c8x",
  "key27": "5gCPnGrFzb5sT3QxHFeZ7Ta8sULt4sJGRL263J2nFoKPRCVR7Yp2DzXoQRj3VDvCFaG2vhZC4mnyvvmyS7wexEn4",
  "key28": "4m19wFzivuP6c8jPrVqCHnvc7HQjT6Tvszx7BoFtwAhJWTkUBL1ZihxU63JtsEdQDEMbovjwoqgagx9N8WBV7gvK",
  "key29": "MDTeViFfsxWtJr8WhWJhEtUSkggce72yVkKrVdgmgLrd5vtE4PaF6L6KJtwj1AfppLTF9scS2zENUbt4HGYgktM",
  "key30": "3Bqqvcy8opVQV9SU2uQzoHj5EAeVUB9ku5yqP2NMDrFju7QZfB7XQMuDJbrQVHUGnEM115qF9W6tahuuVQcaqus3"
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
