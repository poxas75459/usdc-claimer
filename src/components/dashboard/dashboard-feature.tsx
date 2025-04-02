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
    "42WTqtHphZvyTUU42h9D1aMcaChZ6XcpBPd55TjRLfNghP4MfdMTTL7LeXv8pnCJbaeuoDKRiP9aeytCZDoTGuKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F2yBcupEU411jgmC6LLKJkDNuJ82MoQcY8GHRHWSzBPyYcba6N17YwBLCVDLmrBRYjcC8QoCaFhrpX6RfGTGUYD",
  "key1": "5jKMbomJhcj1DdZLu8kTv2Z1ec85A6SdQjwscWff4RFeEpvaXfH9dE8fzBq28e727FbLgYzmLMe1o3ZbyPeYiUi6",
  "key2": "J7fxyMwj8kGhTrdKEn2ZGb2iTCM2nzzvLyX2ivSPkXx34defjSPeRZzXSwit4QTJLYQLB2Bq8bvTcjByN813cru",
  "key3": "5mNJAh6yGYuFkaQ78QyS4bt5kqbAH2aVUYuVPd5aArUnnnrbcFrCzvXaF5vpd8cmFsiURRzF5fWF9arfgEhhFBDo",
  "key4": "3jqYatv3AF1vtZGbAHCAqdnzm2fTzy5Li7qnXhjqmRkj5AXVJBVZfeWHJ3caAXwvJo4DKEvLJUS5oDV2aaAkx4Bp",
  "key5": "55QrGNrUEYVFTDCinRtNGoqbP4U3iuRsL3bHPQx9XHLVYm5fLRYaJqCJXYpRZe1wJ9erXkpjheu8aR3hGiBnKg1Z",
  "key6": "4QVkED1U1Ca5LzyUYWdyx9PYJ8ToSmXexSmcJJsTVRdNxhP14rF6DFVg3dVGy8opSaVFLqm9VgB6XUasGTskrdZ7",
  "key7": "32pRNZ5xR7Jr9bpn6J6eHuhM4bRPr2NTfU6ntcqPNmRKPLf2V7wwX1HDt5VNvm1YWw98Lq9HzW3Nt4fs4Z2fwxbp",
  "key8": "3dGUwCtUoMrtL1DMQ4pXtU4jrmEaiPVYfJcMCmYct6phKUJoKoN6fEWuj36jFJfYGAH5FZwRcx1T6rxkgxNeBBr2",
  "key9": "24b4CAhqDGkCYLZ237241Vqqzw424K3JTxnNMNvkfiRDVa5kfsuVCQQRgGWqMmy2Jnk9bjMNPVaLYnb4xp32misp",
  "key10": "5asPJZfQHd7Anidzr6Ei47vLziUG2R3Hp62xjoD73ipEyT134y1YcTLybPx1dg7HRqAx72LZiuEbPz5gsfokxWy8",
  "key11": "5jqoNf1Lg3nTNcW4yMgdFX9LEo9j9ezho5BXE917Vu2LxDHqNRyT9Kde5dKmt2eD2Nay2k6KeVSWTjur7QhP5ed1",
  "key12": "2VSHhJPNGQLFjzyvXios9knMNZzVvQKTXvrNq2sx3Dc344rWQCRp9qXjN6U11DpQ98wwfaY67mh8oC4Yk5Kiv2uw",
  "key13": "5q5vJGEK5oJUMurDn9TF13UuJreBgKKSMyNsBRCKiXS46VoxhqjB8f9v4zhUXP8vTjTFQj1b7FhkBsgKe1t2teWs",
  "key14": "5hZ31Rbykkn4XAEnEko4ryqJ5tzBxrJNLpGZZbHRs6CSsbLk1qbovcdFtdwtgJw6kh43iGQLrQw9QqTn26EtpgzM",
  "key15": "22cAhAh6d923coLvnwEZHMs1LVJDYVQ9zz9xEyRqTq8YC9Er1qyCQNLEJzSyR1w7F5drUgsNw2ikJCHSAdn1sHPW",
  "key16": "5af5g2E6MB4h94uQ7sRPPiA1AWQ5zxxCsACJUFchoPa1DvtSNJtkiZL2u9iSEJi482LQQTRyeNgFPZQoYve2BfeV",
  "key17": "2tbAWnYTjKkg6Z8aNp5pwkBM4cgwoZKqCH2RBBJWEBsk77sgvzD7mFMyjNTYjMUWZDNdWR8c3udGjsg1GfiKWL7X",
  "key18": "67J8ta6q26YUee5LAXLGGBembHLV7ZeG9xxumid24UdxWKhJ6NxmYkFGESLBBwUAqzFtPUi3dHumSjBH3nq4MmkA",
  "key19": "JrFFUJsWgK4b7RGwCmXD6M3a6UVkJLWsC8RvoJrGEGRsru3yDogsnxcDeEjwERZrDgDiYrQAM3UpCnb3mrbiMpN",
  "key20": "5Mivfckw9ucjLGKBfhP5RSQ9LfBymLxRhe9YB7tt3kxWRNKD21DoHT4jx2iWHVKcY4dsv12iV8AyvBySMLGXkEWJ",
  "key21": "2Qrr41dyf9vndn3qhFmJHZJhWUeJHkAwJu4Jhv8U2yvAkLGth8ttQZvpcAXKuB9ioNoeR3wVeAuJwadfZ3GQtLMz",
  "key22": "aWcyMfKNumEMNquNXTt3Zryvj9iVb1aLVmQoF3gKyk8jGguDmVXe28Dv5akXUL7wfeBvvPMPvpruBRZsi8sqQph",
  "key23": "2u817h8zWZyQtqAwNJjUsL1Z5dh4DG3Se3cbStpxzxtLpeV8xZPobjy5SvEdHgoYtqvnrGEH7MNcmyxa3Cw7P3np",
  "key24": "2oh4SRXnoN3Af7uhV8BBnm3crtiVZAAspp2WkTLYrRcdF39xz3LkEMhRiQCLgVFqynWMFkda8AHVzG3Me9H9pc1E",
  "key25": "3mjt31bNAhkJ668AcVBfRstzoEAtzQ37zNKpibFBuNCTD5FQZFzVSvW68Er2mau74PsgChZgiQyvHd4hNq18MbMg",
  "key26": "5akfozpBM216qFTrzeZNkwBvpanGWgDnmYPEiZb4Da9HQfXEQJNSNrsKnrk7rar4d5skxKEqmmjPdo53FcK8B14J",
  "key27": "5vbURUY8nRGkEB8jT5bgMijxGUZZXZkgBV5puGA3ZwBLNCxP4pGhakJZGt1EQLsEsmK42qXtSRxS4gD21A9qTzFP",
  "key28": "F9cQzndMn4LJxWX2NzoFdi3kTFMeJNbxdxK19oGDZqj2PYDSq4dqTyD4mogJM2xZL6J8KFCHeVwJSDyESV2EXLh",
  "key29": "36vQ4tFBgq1iNFot2RKLfN2TdCMWk5tUZZSco1d2MTUiHgpDQCHAEcb5M9UvFi3M7s55DSwvuwQeAtbV5zKC1JyE"
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
