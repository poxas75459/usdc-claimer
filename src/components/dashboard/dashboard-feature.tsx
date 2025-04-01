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
    "3tZC8Yg84qkvHWXsyPA25gRKZNHGrwnkSiMFfuDegWLN6guEDdBLLpP9iSjmHy7o5TVYCCyxd6otUuSk3dJmHqzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AmiGcgAtuXDamDUcZRgF5X56xSHXDTXG3MdSMRDTyzZda4yuo8jTD8EMEAdoHqk4SjakMcLhbetJZkXPyR5DYzK",
  "key1": "5WydEy4K6HPtmKufcxPapf3NSdtmGHvyBs5pa8WnTv4JAwfPqYWzd9QxDkSHj3wiPLHh8zmbAHFgyfyozEJugqi6",
  "key2": "61vRc9FULthFZcCVk3nUjEkc6Pq3c4rsV9QCpFovA5RupoMPZpC7e92BqzomvrQQVDzSHkK2M2S2EiaDP3nwM7wr",
  "key3": "5BmgTwjRSuQqULfYwrMzUjbRgxJMvWGx1u9yazEVtAbqcQfs6reUgkkpD3grvpqn2FBEBStcjiG5jTAxqgQ67GQt",
  "key4": "23VCbtr7DbxEA5XvAcpbYYHnwT6Cfthr7nfFJopXMDZVAQGcaNQdXaFP61WQiLNFMCT1hLNiLNsHHKak4CVeQ4Ra",
  "key5": "4Wk4Rf2Q9FsXhAd84cpvxJvogNTg7DCb4anKSh6b45joxcdvdoDnBFWm4qKLgcpFh5pcqFDvP4yTtHe84DiNaf9q",
  "key6": "2Qnez5D82JLgn4QKKUFKh8kpRPLKxW5fF2hTvxpj8vGSirAFGd3GV7rXytAwX5CrScRwPMSAGHBzCLp2fR3ucLGt",
  "key7": "3gg8t8JUv5ZsMytGdUrTMrPjaJfLFmYxFNySQjWpQDCmRR1cK2xX6ZQ4vteEE5DDRk53acqXETZRbzySFbndQ6Tf",
  "key8": "umZSqjfwAbFj6u6GRbtrsEySMMpsD3Y6RGtVDVMW6iVhPUa1hhAmmmFS26peYyLtxjRbe7x5J28LcKjcpuFWqdU",
  "key9": "3n3Vu2g5EHKx4wHxKXL3ZjHdugsvVEY9UE88PSkpbmLdwQmQuHPYwqWiV8HJMXcMRezhfDHtPitDr8GcCzWL3CfL",
  "key10": "2i46THrv5bH2ZAQJJfMsNKEtZ8p2hfzayxUy5KEoFowLAKBE6pPuaNvaf6zPAz1AvotDeB5cmKyu4hFGyEjRKGhq",
  "key11": "2u4bBTQ5nK25pAvPVKPSwWqhvhraMGMLLUQ9hu1DKBtb5MRWFudaw9v66dnGdqfHZLU3zHgbT8W8dwfCHmiiBb2e",
  "key12": "41tYdVj6BQ7rypw7QwrQt8BTUuj3dNqdNLzrMAGgKScLjwpDgPKgVf3uXQA1hpWN8No45R4qo5pr2w2Kru718GPV",
  "key13": "2tHFpDs4jTjuHLgMu8XQDx8QecumGjZcMxM5PrRsSFBqPcynL9SA3HFx5KaZeaZZQYtgFQspxDQQGpCZGEEDsoE4",
  "key14": "5Lb96urwm3ZSMtc5k4znD6XCTJwboVCYKyUgt2J92NGDbQRdh9TrDwUwDkJyba2SUjbQ2dEb27CuHMLYvtDtSqGQ",
  "key15": "2rX5FHrTBKFp9sLyPiBxdRCfzdKuSczaHWj4KCHBPtNnmHrxAibbyFJXmkK1pASj61Y3zm8D3NeeRyULQXouM9hJ",
  "key16": "cxKWxg1LsgYU4x8xVJQuahW91wZtDu98CW9kxMP5VUQmhKCMEFYNEpFGcuot3jxn7tCgGSfHSo9bN3pHwTLeJfa",
  "key17": "4ahjJuSRXbCecu7WjMmHyH9s6jk6eZG2HJXuYhnViBLS5xh8vS1BiXeXyN4hDsKjgP4Dc8J5MUHC8EMPCUE2gNF2",
  "key18": "4PTLBgTE5oCnbobM4PqSfFS3ERx9U3iJB4aNwTJ6EtqZANogTnDQhxGhw95mUuK11P1oRQ9JcLhECG1K9A47kKF6",
  "key19": "3tUd7YhzhcMyYCRNYsMNmrjhwFsFFXYs9DJtwZBvSy1VsLRApvC7o46nkcBA5nn1aXuEcTHwQE7g2mEcoi7wHJGE",
  "key20": "2sg5FsPTiUVSpcDhddq4SyeQZxARxcTQdXDe1oytEcoA7wYCnWx6pnHenEV4NebavxcEeFgV7vmtuqmYgnqMChxW",
  "key21": "4DQHr8NkMqT84o1oFNQygCwo9DiAmZXzSVzHACtN7bnrnsXYKrMoFov7aAUf1RoHkFCj9RQv9upMiEumxPU2Mrbc",
  "key22": "2XnkJ47pxjy3CYo6vUacSqVdGwrdcBKMedGS1BWYuJmTwVQdp8ZUbBmVTb2rfnepBFKBKAtdrFL5bc1P4m22uxFR",
  "key23": "3PLQUTRmgEBcUTrPWsJP3Z37tiad4UyLVw4bwbmUvpKeUom6LWnpf7J2Kcwyfwhtbng1MnYynbc2qoQgvkDXRwWS",
  "key24": "4C19uaqnbsKZZ9c6LWAgonECUHBJiWfuShQKBVVw1S9RnB8xLJwiFcgDCTc8CebDojmDvh2ex2fYTFvU9UAuzfso",
  "key25": "55VtqPQhFtH2tSZb8kKqLWzZfa4W6X4WTHs5zMT7DTeMcnz6V2aa9pEgf6jLAdLXZoyGo4RyhwYsf9VRgRGF1uM5",
  "key26": "4R7vaf91iZ4VbLXH7ATAodjwg6mRvjEzTbjmDmgmNQtkAtZREzUQAwGzrdbEMKmneHuGkWYvJCZsQEHbBWbC1R6i"
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
