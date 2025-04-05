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
    "4uTXb9PzQn7RxoB6MbaZ9H6SRv7dcu4hA6JuFgTZqt9mGSqUNJ8WNHY1mrnpKF6N62RkTMWChp4wmHctRPaEWBr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wSnrUT1fG4MvPKk1i5wae19tN34V6KadZT5QEJBjbKxWVNMH5iSYkt6R5Rdibx82aLZaMHQb1m75LK3RRMvbqKG",
  "key1": "3KWuTjH8Fk95o4qvV6Nbj4pbsb7eV1HVnhS2xLCtLdJKkf29CVbUPQkqTj85WUQBrwJia3BkjCed7gtEnjo9dh4p",
  "key2": "4UsUxP2kzerQm9GCWoXapSgFKrd6ox4hT2q7idYkDeicf5wMTVuf5RcDYgzBao57jJQejFLVxzRvoubkqpptpwbv",
  "key3": "5im9zZVpEMnbJwxLZdFFpyp1hs9PwuZHtEjvj2bWrQq9sARCWPfTKhCmi4qu44yKJTQTGkxdXCNrc7zbEfAjPBMh",
  "key4": "25jEpXjBySvNw6nGgXLdrtgfX1ktTidZkzxusM7eZZax7FaFX9eXrejbn1SdFKPpAYM8nTx15w61iYCVogZEDYUw",
  "key5": "61AesrQT3GhpTkpBFUSuntTWQFmHHZo8DK2apchRWSKv7EUHpVcFYmEBMp3Y7vfXL26jmCFyd89bG3iMgwfuAW2R",
  "key6": "2Cz26ytDRztqhp81hXpCJyARH1TYTkDpfpeXxyurhR3pmKYsooKXDqXdcGL3fR6RNtLnYMPYPjz3Tq5uxbRQqKko",
  "key7": "Lr5ar6GVattcRGrR4z8n6359NLsnMrf2qjBVoXeKEhnUPXZtChegmm4YLGvuvmcB16gCc2oRRDzHgSwsfAA6M9k",
  "key8": "4kQyzS6reZRvAwQwpEfszkqKkJtJFbtn9G3998TDwvwxit84vJ5bbt3hkHfd3yZ35n8KgdQaB36Po8KeT5gkzXo1",
  "key9": "4Dgm6a1nXPDgkGhhutS2qtBjACvvKHcEzGQUzUrWyTNxHaEqC26oyuo9MBBCwspvcNjfRQRXFz7c6bB1dpx2uZnv",
  "key10": "4AQd73njCxGw89JT4UnrHvXssWH2KekJww7EKEavPfgpnuTmy7GdYdjnr4Wmr5PHtSxoF6A3Ug9eonStntny3ee4",
  "key11": "4NL6NDounyythSqUm5DhA3uCEgiLpTsoFSCw2RF7TLEVDNoYikZ27qTogoqVBJQDnFwTBPVnH9TMJGCsag7ofog4",
  "key12": "53oxQ52pQySLhhYVxzEyvxMvQp9Dp3UwmXS8asSGdbZoE5294ve1fbjLYrWxvcEA8C3Bh1BMbn81PmQGqLvFqDga",
  "key13": "4cnmEWbDsjMfrhnXGGDJ57SXcMEj4MBev5m6a66AdRjgGdRnMAME3iAgpjQfmo2G1ct5mDfa7GCkm2nmoFE7KM6R",
  "key14": "4yfeK3xHEAj3PTVBJa88KU9QwC476yXBAn4H7WRMhEtHjr9P6prHu3D3YMqgGsC95H1gYDokrMzrXLm5mfouiKQT",
  "key15": "4RCBhRVAByu1f1q5TZJvNEAuK4M7gqtvhV2U9Bkd4mUyUpD4R6PMtQJrhRtnsfyW1MMrYK1BJCkpY2VsxU19ttii",
  "key16": "2bcTem1ikjf1utRVTcm3ME16mbpSu6qAxzs7snMqS4VnsSnG4oY61piCnBMmHjMs6v5c7PZawXAAyxa6JSmUqT1k",
  "key17": "ngFymFQVS3QSSsXjsA9ZkvRCGweput7mA2CAsjfA9ABWmeooQz3tw9bdsraFNVif3FX7xE1NZUhANXojBmvnbuu",
  "key18": "6MSdqdjxbTcVjeX7pk7dGW4RKQHXkXMcJScJyMpRvDmGyHBWZ1bUx42hnY3roUFEJNJRm5Sr5rCLvY9wsxKsDLG",
  "key19": "5M2Xzwu6D7kPgiYA2vXgprB38i8gVNSCypfQ8Qqe1GQTQ14wMzntFU3vdwBJrx8NDJL2Bd55JpeD7tXdafnw96Rj",
  "key20": "3NpDRP3c2Mutj5dMXm7QFjvTbL8DqRMnubN6eUnJ8eWnnVdY4VpK3sKuE7NuSwAAwMEVZXyu3izs9ztAtYNwJpJ9",
  "key21": "4FKoBiSZUX2k23CTheNLBuHBxPv1hybdQVkeBVM4Nm3C3x87VEmJRGTnxcwQTD7Lvg4fuVtpWFpTm5ds9jvDajDA",
  "key22": "2kihNT7noWfxX4ni6gN8jRu64DJD1AT6mdp9p8DprP4d9gKbUg6Tv12aTrpqYyohwyimBCkS8jYWgAeMX2yrjte2",
  "key23": "MyFUosQqhGDfmqBRptnFcR7f69jKMPRo17DZR7GXFXdVu2TGk8QA5dUy3Jd1jYhB9oS2KEMkfGcNX37XY1iyqkk",
  "key24": "2PBJCinGHdLoyawhFDoJEoyWdob6t5fDCTN4Tz5S9eFJ4cakPZCQYWR999Gb3SenNANdAmY2YJJkfqa9KytJpseA",
  "key25": "3rTGCWyFxA1hFwXGsHomv7Q9KhXnbgaHP2AtR2DEXkGiRXEAbCGSReGTN9zWpBgV2Y6u3viciFquSdeUvz384cW",
  "key26": "25tzPCmX1K3ypEMfqRev4zc9XBphbqTXXBJCqvHZ8UhmS9wnpM5zpQEukmyhZFYJ27TPR4LBefZAaA55ditRfu36",
  "key27": "58gqF9qhM6vaJiEBJ7UCXm9vwxuLMUL4bVYS8hkmmBWJB6EU5sFF8dKmTUQzG8NDsHBt7Wydyhz3txF6yCTi71g4",
  "key28": "5CZ9EPKYK79yE9DbAdtC7Bz4ZkorBpdG3cR9QLWr1d3A2kUnGYNFt64WiyNbTgRgVrh3bvPwxM8gmsnEZiezb2xh",
  "key29": "2vgRvg6kSua8f3P9Bzbj66bNPPddW1DfNbGCxJEhoWDdNMbdcxBYLo6V3Df72obzm6MMcxwtzxCuUmpngdGwXmcs",
  "key30": "2vQG6pCuiucouDUxwqi3r6R2mgzj2c6iQJM6TpWSqGhh4aZWS9i9uzD85YKAxZQRpnMBieDSUrBSZaUpXSWHkQ4z",
  "key31": "5SjjjNTzmFLMTdajnzKnRrBxyiXL3ganZ8ZCU4rFfHJDNUc115TJzrME9UBE5XvQCGGxV1TB3bLQiNgyvAiJi3Fa"
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
