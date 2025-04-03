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
    "JECpendyZej7c5yQQPrKSXv9ubFuXDkEzCGv958gSeZcTPHycr3AToNcukJS8EhUUobcj7ci2qM7Z2hfQvT4z7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "496UUnNVG7f5tKVSWs9hdDR5oqY1szJSvJo5GUfWmdfxLDP3uevg5FkZv3GUWUHx6mfnhmMHhStC6LhTxdGvk4wn",
  "key1": "3S8erQUyHZCzYVCBgYqWrkQwM4cK5Mpt2FNh24vRPwPrm7ztfgX4LdWvijzriAiaWkV9ivEPT67vVYJFbyVG21UK",
  "key2": "25g4go4GpM8hWSgVmohoJcknTFkszaJPCQU5TQTtuCnLZSY7BRs8H3AVDzWmN6M1MwEasSkL7DsnwjtcibrVJSLP",
  "key3": "3c5yXoRoBgHk6JdbHKJrbKWUPW5YAxBNKAwYPUZ1AHLTwJi8bzP6wPv5a9ArV5SvqmQPxA8Zvkmj3vSLURRLUU3r",
  "key4": "4B82mDZ2G49mxu1e2oBKcMXB5gMgnjquQGsCtntT6QYWhpEVYgVDYGebLhMK1oqxonbHkwarjy4RHVPKFkjWYn4K",
  "key5": "3mjAEfPTEBrGcmkmgc6RdGjmxfScbcAP9iipUBxZd11SL9vV63GMjZvewMoBG3aTZijCHMb1Ft1cvbMucApeKW7",
  "key6": "VfAiEmttsk8RVm1GEDiSKvbZjhZGLXEYZ5B9CNb64QMkPXaKJLRCt5p9TisfTLnhtiUXJX4GcaUmCCaNC3ekvar",
  "key7": "5zCq9UyWwHANmwJrL6SKYSfS17XRbYeozz3i16R4ubnnQvyzdT4mpdM9rTxHooVnJRPxUpHCeuQZQ4MsYjZ4z3Ph",
  "key8": "FNLbNU4JbBLJWR9Jd9Rha5Yfi5zjxfHV3SCMv2PkFUSyL11F8oPEbNiDCpbb4X7PeWzpoQpKsvkp6xi22J6wAwE",
  "key9": "5sVonhddr8BqKhpAqkxGi5y5o2CLNfLcrmRNfm2c7LaYC2EY9NufffQiqkQ7hSbvNgDyGxEwd7w1ASmZqzuZyB81",
  "key10": "44NGyDZKuMgHsQ5RGRWyXVT66Qr1t6Ms15i5d4hZ7NbF8eY3j1k3vXoVnZfgx5ndAJNB8pe6bfhFbsDiXbXRjvxV",
  "key11": "56oPreY9PA4bfjd4NZEPRzn7DuqF4HL7k4FwFY6GG8emC4iJL2WkybwLaCXKpCYXkj4DUrkSSFXnrjs4W6YRdEFh",
  "key12": "4Dd6MdjjT99rKMoreUTh2EuHcaEBZeuQazHedEpc6euDH5z9rm2wxZjrQE69t8Mieo3cBPdA8LZu2gsfLzjMzSeQ",
  "key13": "4Smzhxzf3evSnCZ9FLunzWh8pXyeGBzJkpsPnq3Gjc8PN6JmcT2BDGrLk77d1y6qYtRBg8fULdjYVTwERNJXCtDk",
  "key14": "5cx8ua2oZUtjw9u4J8figo3EgUCYkq9DosoUt9uoYfHosDeWuXgi5vzDX37Po7RQEaaujd9WVv1B7SCNvhLMpNsA",
  "key15": "bgUhqGeMSL1VMx5aVCetT9gvxEKfwyMbaiqExCffcKVURvz5qCRDdYvZtMXF4mr5VpGfqPwsmLUTrCMTBYfbAhE",
  "key16": "58Hk5LryxdRm1wuvyX5wG8ejnWp83pZ2sFdHnpXcAdr2M7GdTJjeD8pCQ819vp8NDZLGGFEeCbZeyAo8oKfc9qug",
  "key17": "YSGLCxCH644ig8RDU6ptvUDkebpUgtuLwrghbdFsWDZzEfPgTtSZqK9uArWxCNKUYhJw7qztAmqxcbcsarYqnK2",
  "key18": "4fFj4wY9CVoiPSGJW4Xk16sxuNsFAyWTZ3srvFK5y5N2mnsaBiXbPSKXUwSHXo8wfUJz4eZgNrkzZN6bAxe8Vxy2",
  "key19": "49PsT7yPZmHpFWfEZJEdoP6BFX8dBWvmHpihkzphy6YJWcpw3gBJrbMbLSbumNDKd1QZgTynx78jvnDRzrqrSbWF",
  "key20": "Z63jysFL2tpr1TToRNfX4eBg2yQofpPFsVgnQcXkw4unyw1pjwDYEWWEv1oubLQqdo2fVD9DgB2gr4TrAo9PWkJ",
  "key21": "3UsS7p43RAUQonfn2PceVnYP2pdD28tGEz9SfSF1PbvVNofEAUQDEn7rVyF3Mu5oCpfQpmY76MNq6RaUVk84cYJV",
  "key22": "5sSrHaDjTNwmPLzCUKEsPkYg8ng74NPAYYoYrANaeGMQWpZp4i2ju5YmxNkoaYX6bmGuUenqZd7uyeCQJQD9p5Fh",
  "key23": "5LBVhCuhdHJbJK8TNyYX5xUH9uU6PFPuSeE73YC2MgxdsmD9aqmsEHqanSTmyxfAJJeqPTzmdFf1mkn62ygFMMCe",
  "key24": "2dTMnLmtFbibxqxbUDHo3itqDc44Hs5KhGL9QuGGDKmjmJ1B9huQSVsXKuiA1iQXnjVYjvZbBcqWYEeaFgzkWE6t",
  "key25": "5hy4w8ARBksfe2JwWZhWvFpRTR224k5UpniBGLjHXjdG28MxwLSBAp6NmNQNMeCEN9L8qfvk6yWgft3BytQzmM4v",
  "key26": "4Q1aYqFPUBpkAzYA8NuGrJi2iPUwp2jmSaqQ8eurF4pugQWQg2fJuk34HVVbcWX15TbJbbnGbWkrawaKtcHXvRBT"
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
