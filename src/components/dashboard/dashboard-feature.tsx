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
    "3a6rzTNLEeL51yruvX1oYkSWcrDmANPoHjGsA4RZd7EhwJRQMVn7SwZaJKJybbRvSSZMMbdqYeYN6xDEzttM4Yxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GUdjNgxTzc8ndcunmqnkj4GyHnt4VTDRNwYzGJvF6SDiyniVsyqEqbp6zmZm2rpEMFmKBVWz7QoPne4i15fVVAF",
  "key1": "5uDBAzsC5nU33qVfYWXzvnL43ENW6HokPWEf5iU4WfbQSQnwGxcs8QwBpeL5HbG1wpmBMntXzq4HWw6SZ7tFR51L",
  "key2": "qYc9FEnBQy1itHn5n2YXHq85hfWzX6eVZUt2CaMSNX1D1L4u171R6f262ebP4vJiqafUDQqHGz78Pp9uQpvbTFk",
  "key3": "61XAB17hbiNh36kzdj9choXLuHxbtaUWjjCouMBfMhkW1dCTqYz4VLDUXkZMUhQr1WiUt7YnWDwY74WRLAMRjuYP",
  "key4": "3XwBxBXQjJ5fQBW7wwPcPPHcRwsvWs4U7ThLAbisx7gvFjhPNns9EWLktGyZcod2w97qLoDCHkzr4WDBx62mYEga",
  "key5": "bN1jemTYFkX6H6LeRvi3TmF3jRPMsuuYe49wPcD2L4ocMfBNPZEvWZ8zGbHKU1H79txQg4PiSyexzfsQgp3ghcE",
  "key6": "3edjUu6fvTc8KsL8ThBQcKT8dGrVRV4PjCkat3DQ6JeTXat5rbfmcPCQZPC9HfrThVRP7HnF2jy8W6VSQeTjHXYG",
  "key7": "4VFn38w6q4rEaauWAvM1haFtnWtVvEDjQB3HeF8RjJKhvw9RZTrcY3Rc4nwVuP4jFHiLbfeexzwzJH4x1zHx8L4d",
  "key8": "32dh1Yf2vE4NXwUvpFxBRbdPGdJ62oqfwo2RR1aH9T8gi9RLJMbVJM6VJ9yCNkriy6kUsaxsSZT7Vdp7Z12BM7Hi",
  "key9": "3ExtrY8xYtSJrwUVqPHt2onj6VFrFqhZ5svza68pD3ggv4t75NRwCtmGMmAXCay2hqGRgHq4b6gaSDRU4KFZdHWr",
  "key10": "2fWvwbPYMSREs3Yn94NdCtVeZktvFoxDrWaqJsLmciFhgvHgoxfLkgkc5hbD46AuBaQW6fUnkpcnmSCudN6GRQ26",
  "key11": "63cg4jw9SQSyEXLCxUgB2gdmraaMNyLdAgbdVDdobPdymKHfvnjT3xb2qUFLaTiELeZs4LTNxM3bU2scgxA2AdT7",
  "key12": "4zfjveuH66irYnGic7pgF3SywRPVVucbk4LioVNZrodkFswC56ZLsW1Nn9CXNJ87qAmFXe2CvartkicMFaYnhJXP",
  "key13": "Y21dPurLi8MhrsPViiG3L8DPVCaZ9SWb25i8dqH3BjppUhAqGWb46GYRanutz7rmix1ZKPmJMhvZiiqhNjGLAMk",
  "key14": "4KVuPSqQt3hn7KoNA8w2DDb4ecb9nwiShLb3Hs9sNfKUu5nAVYaq2gMb6vqdE2zDm1eAEe7pnhz79jSXkx96MQFA",
  "key15": "e34JXq2gfLFMcLM4k4SrfFBjSubf2QRSsWkCwDmayK3wc7fNzdqGgxNegG4Afmgh4iS3ug4YnCMpStoeFVMUz5g",
  "key16": "3ECyv5zKbUfy2PT95VZ6SfkXDL4y1uVbhdf7dk2MxuHVLKZER5B53RhRiTjxtLfHjq1HKv4hp5o7SKC5d7uKgZpP",
  "key17": "4m3b8hqRjAcNuKJknGfJ8v7Fra8JN2YskZWpxjxHejTSwPkH1d9dm5qRcLHwyRacUQs64Y2qEFHYTgkk26EuTrxf",
  "key18": "4pwUP94fbCZoyk8DxfJL9o5hmkA3Rt2QC9mr452PWcgqVf9NbKsCATDYiJ8GP82ddr6WLDeYBnEBaoPhgQbMdXUj",
  "key19": "5Uy9pG129Qkkuv249cEHjUGpMiZRVnwR1zLdqRpypvhpMGLATmLCmkatXvjzFmGC5KyKfHyXqNiuywnqU96Qeueq",
  "key20": "i2i8F3sc1bCh5MxeZ36KiEVn81AwQhrsymjP5nGqPXgyR8wQp4QEsDuNKxXvcBy8mEzFTwZU3NPXdnave96rtY5",
  "key21": "2MzMCmDkgd5TvqY35KjwjyXCcKLkaXfPyvGQ96ZCTPMEhvDWpEJxaLmiAhdoCAq4Lf7N4vghQFMiNmMMoEDNYi54",
  "key22": "b2wt6DFSsZbhy2VBYMXB2Qnw7WJ8CMSSGmvSLZ58L3U84wCPYuMBHYnSCRmp45QG9yyVvHtZHjABvCXs8b1WG9c",
  "key23": "3McdCCmBWLffhSAj66bNzbJPK3bgZz3zKySeDC35Tk7EwesCSvoJbFN1v9EeaLKJhtb3EGzZTqUGFW2KXU7awciA",
  "key24": "5o61jdwBEjBSLcBQC9XhuZChLxMmntsePod8P4phF7MGSpkXbtdGgjAdVK96zD5MbnQWgpZYJW1xWBk8jLYURyZk",
  "key25": "6n3DiA2aMWGn6i9SeJ7Zb9K4Q7ovDP9gHNFLPPCBvGM2tsxCfxF3BPjHkKw38qMNw6CaCANKBS5rHAdzUNLTKFe",
  "key26": "3iuVjQXdvDvQ9sinT5rz2cV5mvyNdDKnxzUKGzveqdas7s1XPA7XLiyGBRSkNZ2JEXZiSU5bJWZRjmL5ehau2xCZ",
  "key27": "4u6Hh11dXMSjUF1yCpcujQ4Ab3BDaQzSyyvATvabZSB1iWU7T14bzBdQtT5duS1UVMNVjHXRCBLr43Mi6EvPhze9"
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
