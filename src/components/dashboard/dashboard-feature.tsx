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
    "3iwonFABSqqEz4aruJtmw6Hh8H2A6s7nBkh6SZzQQ5mrCh5XewzZYGcvAxb5kjc4NGQJCvM5bWWemzSSAbjdmbah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gzEuiZBcSk43o3KsDECsyQMMcHKH5uuhW5YvEp5bvue75LJFMVQzpaRo4Gm61hG5HSYCiNRUkZYu46G3gc4DHEr",
  "key1": "4cvEDvMAD28wzSV1XihgfSMYwX2bJCuXmj98hLPNMbiCsmcfhoYFJe97oYDeiNYFCZLMK4omPZVSXEzog572AeYf",
  "key2": "3qnyZw1C42p7EcPv6UacTNCoo7w3mu5i2p3XZgZ3p5ARaC7HYHbdqxdFozV6yHkwD3khX4sp4ATFib9YL2kzmbqA",
  "key3": "52bZyMxaKXK7F12aL3fvVUuJyYHDHbX9gQ4b8Wjen6n7um7aJ5L1qxuJE3nVPe8m3E2phMTCx8bZzwuYiCmrz7hX",
  "key4": "55J1bu9gBeWYgWQFmcv2ZzXArM6hnTkRnrqaMkMeEUaiGAEzQYn1Gw9HmYJiHgAkAFEnK7h56YK9YWLppX4pJnRG",
  "key5": "2QYiCUqFaG3Em3eEj6tooxkSXAzETht5VrLMccVkyQyDmr3kqorpFJhfB9nv7txDquEpPiP9Ztuvpj3EBnhHXLT2",
  "key6": "iFJ6yq7VcuYJ9bm7ze2BNsXLGD8eMDxmVWmyBJSYFCyejXmNvVJXKPUVAWvFsnmirPXGks8pqgk56BiuzMvuptV",
  "key7": "3UN5AjrkAsjfvzQQmKHQqnhoHf6nUPmB513Eb3DqkeR5rZPR8ZYLHcarRxKcoNNcihKJWtTewK6nuNaUJ2Dyu4YN",
  "key8": "2NmdTMY7JwnkzTytSb8GKSkfxFKYgmarAn13wDYrscUwtNm8hgqFKYwoNKkPkPs49Vum6YNjCE4drjvPy1nJNudv",
  "key9": "5Ma2oXF49prN81xXkxXxUuzBkeubVijVdCJ37qV3T3THoj61WFwsJPckCHN2LcBhv7WvSXRfosSDJE33d81ZaGBw",
  "key10": "4v6bVPzgDNjqQun1RqsKhSrECwEbQrszW4oDRhZzyMzwvDcUSn4pm18JHPvhw2n4CPP8e2qD3cCp1P9rxzPX1zBx",
  "key11": "1FbZYSWTxTvUyuwTguCHo18SRqqw9PR2bRg7Nc75fPaMYXA4Vfv25yjY3eLJPrAiRfS7HjRkj2Ehx3n7htyyt5q",
  "key12": "BcFwaBewyUxaSgXvjR97zy1GxGHVGnrLj2aAyHatPxp6d6XmJAsLaCkh8mWftERnnZJxtmJRpoFEPHD34KC3kJz",
  "key13": "GFrhX5Kaqm9yxyhCGejppPsWRvJWwUQdM6eH8ZcmDAqeGDrBC5G7iHV3ogwq48Gv1yu6YBV6ZCGRSwmngvGeAAz",
  "key14": "2iGicRuYmTuWLBQvavD4npma2fQXrjBeDrGzEBYFA5Qhas8rYHmPZE9sgssU9VeAmX3XRjpaxkfMiXdxxdFygfzo",
  "key15": "vjXorqQCKg7AsccxPSRSQnvWpgXbYPdJXBMZL318WRcqi7rtqgd3e87DYt2M3QiydNwNjC5QQWZRTD8cDGYDpWA",
  "key16": "31J379Wb47y2bJodiFXXZ3Nja8F7qQr83VAJTYLtmzrsGmtgMtWMHwqRDFapFoCb4hfT49TBqqtVHH3urE3ZqBHi",
  "key17": "3PmKipFY5FzodhZer5YyBVSgfYQ4nVYcqA4GRhQLCtrZhQYzN4gHgxLGdaq1jc6syPGGqPZm1bDKvNDWfvFv1A1k",
  "key18": "5QeL41nFBw5XQHTLadK6mrr3X4qyW8HYQvLdj58xeq96oXeUG2geGigXUwB97dRwsGTDLPvGEfLBNiZfLGz94pjU",
  "key19": "53ekwPgkrRrTAbYDf43AhR9Qc2GBvBQPwvUFUfyjByL6wCnNgcZ9pRhgfMF4hG2CdQRJF8gktoAvsPQABSYVzsZx",
  "key20": "5uowEFXATzyNqSNvKLp7uzmcW9zvNNnr6G2wK9NbGkKa2EY7MdWtvRQ2u4nw1gz9WPEDb1NgijMkUBNxb4JYADJX",
  "key21": "5d6PbXqUFWhTF4w21SCTzPDCzwrJfLPdBUxPCRJnNt69Ur7LW4r1tKeTdGwtF5Kfw1Z5jv4Jux7KPrmR7YnT9Agb",
  "key22": "3aFBkDpA8N9xvet5cNpq9W97UzN1PHLCek8JvBNEAwKZfwmJeNh9De6hJsf85FAbVMLgHF53K7Rv8582Tqs2ic3v",
  "key23": "4KLFgYpNZBZ2JEaHC5XvBY1cJbxZyciEDLBnAM4B1vZTZaee1uCvq8BcVhsGX6THNTwexSmf37DXVNfWAmAcNNQu",
  "key24": "61zuuyVQdnGKfZM2vVFtru1fQ3tQomWnMkcEiYsz5RZbst7GfGdvrnTPKFKfCgPveqQzLePjjkUi9bu2m9mKskry",
  "key25": "5ZELXPDNpY7u7HZuHyoh2zuMLpJykuq1qN2GP6oLQ4qi3Lx3LqoVug1WwzMnYMSVkxNvSmb4QHsz49EScuonTM2n",
  "key26": "5c99AZ6L24zufVm5crBCf68yk6YZBVveH5gmNogGUqTkVwJYHfRY5MGPYkNxMWkPTimHWTqmqZJsrY5apBMC8azj",
  "key27": "4BhhPxm58hYjWkTXwr8ZKZgmtppsJTCJtkUwZT3QjcKF9wLSu5A2Ct9yVUy2q4ijUgpLWJyofScWnHDZYf42BXPF",
  "key28": "5rjv3vA81S4DD7ePQ7JRwBySX9JduhBfcC7ktE8SCzeeo1LNpeLKF2VksvKNF94zPdP973ycyYgiCFygG2ZeecgD"
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
