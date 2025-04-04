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
    "BqQBbpAkQ3coZyPWpDvZXrvvPEWDP4GHdbk9NX2Y4kMTQvrLh3NrNkbgZgUdCh2dVPztVLXcMu5yDiavsr5PV1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67ADU3kJHep7YTconUZXDH32A3iuLKcJ4iWsQamvT67mXd6vaejeVKmzCWqiCQB59Bpi4KBwRbTwn8g1otZVnjUB",
  "key1": "2KWtmizynBPYVcHsH8cEmXRwBA31Md5jY6gAZAqJX4DfnwBrNmTZiDAWJ6XnP4nusKK2VHKXatXDZ3KXPpwFUkVf",
  "key2": "3VBqC26n83McU3nxTtvFRDurXzGHnEpRP1zyfaGScnH7WeRCxeghL5a63XNzpSZy1Fd2sH1Vifow4tEsJT2zoVtp",
  "key3": "5JTkNaDGK8RdSwfRC5Ndkcnz7KJZv87nakPPFNV1ui6CboMfheVzsBQQjKFausN577ETNGACr74ZR415Lq4iwqpm",
  "key4": "5QtiQuCfb41N8aQbKBAQ5g61hq81GCFhf11rA9vjHz1JxW6FSVdG5C9y6kjBcDryqzn44Kj6ujvwVsTr1onMVtE7",
  "key5": "4Bpgxdouy1CzMcjFgCha8rwYM4q3zXoP2vyXWpzVpsgE86ucL3pCS3Tx2PJDK4msENoRxVy51UAf5Lejx3TXGxts",
  "key6": "3rBFwfET2B8PLXyZBXv7pxY8dZ9TP5qAxDbdNtgXKLTLBGJN2KP6jCSJLJj3Dm5w18Gde5UaMUSE5hN73oJyacqe",
  "key7": "kWpMt7EhTa5ikMy4yH5XaDhBhyMke7tpxwha6xAP6t2dCwBmjUvoGju5SJ49KfmVDqJLNH3gqiUu4jaw4QyR2ir",
  "key8": "5jzVEU1uswS51jqnAEBGxbpR69sDMYAoiJrrbhFeKobvNeDFrm3S8PtqopMhhcC7xdczMEC5kp7CNnaejT8Zb6xM",
  "key9": "3nFWek1Lw92to98y4azSwEKsqae7QJegZPDHo7rBgpqs95YvpYqTrZRkZyB4yBMANm3eqMBoTMddREQDKzqsdX3C",
  "key10": "2ACF9F4evdzdehTva4LPeaW8eLczkKSM1m8kWFSbZaku2F78WkFNB2aCanqAkLCx7vKtQ79W8YeXF3yfrYif1AbT",
  "key11": "2w5q6iThVEne3Wr14dugZjePiYPcMvUjmdKo137eraKfBUhn4H2bV4G2XrgkL2CNxYFoVpsQDpatyQujEnYzmuFW",
  "key12": "317TGzPqPiERMKoeJG5XZYBroSBnVQBzDytzT7sbwaCQSWJAVSEWiUmc4hdJCyEtEQv2kg3R2Cqw4hxtFZwc6q6o",
  "key13": "3YMyzY1gBLhLdAuuYNwhR289EaRFjekXL3sQ3ANJBRfKhM73KxeE4p5cb3iXg7wtWoCJVMVsrDmjLezEg5D3qQd9",
  "key14": "3vCr5MMxSKJMf6As84D4kSobwzYkxsp7tfBT8QS2hxuiMh161m1oK1CYjhyFC3yYBnjGw9tEGyxccnFo1g9hVj1n",
  "key15": "4vipTk5HXTYxoWnSQuPVFMXp9XvDKRT1MkLA1dpFiXXEJaHsSYVGRm67p8UpvmE5QfgjzUiUyYbd6oRL7wA4YGiZ",
  "key16": "2W9mYLL3D5HmUGXMfcExZSX4sbsCtHFmbv5iBwECtCYvvsreCE4c5HyXP9WieMHiB7pmgeH8HBGnJiyj65kjxu82",
  "key17": "53s8NAA4BQe9MYbg5Yb3vU1FBUBa4H8UVrXuP6ZHY1w1gp7WZLNkGZDUngJmtrYym5RjYZavymo2L5Jtt825SaHh",
  "key18": "43A9QYdGiWMwoGeGg5DsehCw22FCgLZuhd1bqNdnNJMGShkv8NtK5Yoaj3MLkhmob26D9D17uSktvPieYhPjgr6h",
  "key19": "msSEoHszNbvaTgRP1Hnfq3GaEWKWnLZGKHwwcV67frknMNawH6cDnW5kiN54fewzTAPbWKqaJFygQiR2d2ZxeWd",
  "key20": "4fQ6xfjwqpiYoe8qUcFPQ3gioF9Ws95QLBPtR6ckPTzLUoNoCTg83i6zLM5tvBqjCFR3nCzWLJNibNT2mJPAiVJN",
  "key21": "4fY5TWjqN7C8p61sdej7fUhMTSGKLUuAdQ2wL7EAn83eCYEXJYfubN2YFe2vEPXZk6qiuiR4PT9DtxnHpD8uy2na",
  "key22": "2d4sB9PXftHSnULmai4LsfWsjEGKjKE6ZBwubf5tQFCBcM1CmwyBPjfwUYy6iEzBBZjjHrTLXmwCJya7vJ2k5goS",
  "key23": "DZtMsuNVkcXpEJ3Zs73MNnwCneJX9WCty4KRnBZDZCaTCEfeB8zDyi4Y47Bg28qNPBkA3Yyr3c8cDMzFsn6fvGD",
  "key24": "2m53Zcv13aVCxZcTxrhgBGqfv5qA9t6xfxCcGDSPciwxZeFJtm7a9NyWYchhxuXqzLud5thBzgNriSAH5AQzYynh",
  "key25": "3wxGZX7LrvXtQ7TkyWtFYrj5XVUbySFVGbYPe1KdEg2e29tQ7ourkeSmuqjADnsZYBUFWastRNs3tjSLQg45yVDV"
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
