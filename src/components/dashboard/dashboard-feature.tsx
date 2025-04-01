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
    "MPgugg2XnX9HmY4Ckjhx1K4LfqsMq4eQqNjKanEMg2oNRz5PmAMvmRvSBtoxoxstiFdfD9pw6HskfeGW6hHphVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zznoJgSN53U5PcGVC9dL6EHQHDdixvnGBdVJo57zThaNRfJnNH4pkzAkbj3MCDeaBFQwALnFrv6o6GyaV37jhAL",
  "key1": "41Hjd95PfjeNfjDoRvJcPFRV2Twue1SyNgvct5X12yqdiEuHvF4c8vZ3KoM2F3KGYQgMX2LFVeuV61U9puKULHas",
  "key2": "45qKpnwcJeYzSRgnrYwABchdBrLbwN4RdzP38Jsq5iRL9BQbe9rzY9NAPEV7PJcnRU7vBEcPPRTL8qb4TB9aryuC",
  "key3": "43XagzQLZBmbYvqfL1xQNXrytmBnzHFjA73g8QP4ASj2RQASNqLfd2Nn8UWvx88BEP9eJSyvQUxynuRZSmjd1r2u",
  "key4": "5161GD9ABnksKhP12Hk3yh5pX9CN9t8suarxJ31eLehnRtFwrYW2Rswmu63wvNnED1wnkPdAqJTFnv5cHmzdhaZY",
  "key5": "5YUon1YkQijAd3r86qYu5nf9i3isa4t21zLTKTPMVdnMHPK5Sm4SA5PLNtET2Nh8WDYg4UkxrsZzUwxcVFLoDowP",
  "key6": "jzT12jLaT3VdBQgMBp2qxSc1CoZUaGbxYkdrAQ8T6SLNw6YuW8Gjbbqbv5PKFWnJoTNXDPWkNrzeYaZAzSf4jyH",
  "key7": "3dRphnB9A97uoPLmU7Xdo7td4vwmWHjwuNSn3JknnHCp14ACq6ff5gtktDp9x5EZNFoxqW8MQXsYa4iFcSbfwutX",
  "key8": "3yVRssZhqWrX8LKGfH9xZxUf3MSxee5yDMXw4wVerPDApcCQEkcSBWPUwGcEAak4rdCY5ZemhZ9TEeMnhsZdtSRV",
  "key9": "3JDmkEEm1hnuMdrozDFDKkvrSR8nfxUfaiyWPNAi4HVHgWi6nPKPHG9Zg6nDn2rpdt1ea4wGeSNaBcdvzsJx9XUa",
  "key10": "21kAiKr949k9J8ZtDjqPcqib2u3pe1Z6VeZTgUUux9cWpzDvVbzvqS48j4Nb7LUeKKuHdG3sce3vBWmwv33pjP7a",
  "key11": "2DQbbxBGkMUTAmvnevKDt6EwL6bgZ5t9w75ZJwniH5vVGnPkE2X2WKMbvD2kcKHscCA4RZmMZmk4pkdd6DHTU2kt",
  "key12": "2YujKnLc2nHdox6nSWVmAMeGd2wMiPuhuUFr52VX2x1xPuKXF5Fg82T4jdjQTtvvDVuXCmBpQYCQcPzEqrFHvtsQ",
  "key13": "eSgYim4euyCwvypKyNdTa9BC528nD5mvrPomM8Hxw5LsFFk46wcKuFZ47JyHLNk9q8bPJJbSLh42fcHsM4YzvXA",
  "key14": "3L6yJRbsfzKPU2qrAwbFiQCgbFTQLqpUuhQF8rsenUgnV5SAtdkbCZg6EEwH1k7rN9k9pmz21ADocGMRxmFfUr7T",
  "key15": "2CLHYmGVaufiwZCxYZCji9U4sdr4DCsRq4qznr7qBzVoD4fuvXFT69LB6WVTmswStCuSLyoF8fUsqUMSVJ5c2LRf",
  "key16": "2sDBWni9zqrCPRNWtECTL9ktUiiqkXvh8hE3XWTcNG2yXRKinDKwtK6ZssoyQU7iYfGFxbCxqaiceuDWuaXfbb6L",
  "key17": "2gK8mG2Knh53vzjN6VHdYZKyfHxcntV5268DHCRxpscHVtZu6HedUjZNGbj3PUHziMyqxaMwc1joKjEEShEKkgAj",
  "key18": "4kzpkNDWv2PhbU2k3wzQKb11W5qAktYBURLgdNhbjRVLZ38NYu2uCgwvMeRWhZL7oNKoJKvphWA3yJ7kUu2U6jXp",
  "key19": "5Jy5VEMMKJhyMXW616kLr5SbfcLUqXca2TYXB1HoZo9txGZKtbQguiwwmUJA9WjpQTtRfTWixNkiEkqaQwGcrQ1b",
  "key20": "2rTXfFwTmE1JNumwmEiFdX69McZcTGHJA3iMLX4FQrpLfJuPF8NBJ9itFBnVjGE8AGfNAoJfkexKK9prVeJNLJLq",
  "key21": "2AMLvQXPp58G7ogRH6SC1Nu14RY6xTQeJDFjMRd7oQNZSi6EScwRWqB7eDA15TWvLuoRCw3djSdmnbzWUeBkStGp",
  "key22": "586eskz5ayGLVxMWDoDcjbb1re233VShfmUefAdoSSSqk7ximqGH9ZHC8Xxrnmmmu433Wr6E7PA3zzHEA5wSrY4Z",
  "key23": "9ranmsJN63gaWLsqy9jgxrQNQzfbHCqr9hGoA9EUE7FbyNPMZNmEqbN617h37VmtAhBjUjRRCcP6RLSHTEzyTqx",
  "key24": "5A3jnN9DfCwi5FFTb6qCkxHwPRUUKV2o3FTDnWa7xrY4dnT8hgA1Zhvof3DMJ9oQdJZpyod253s4XCtkdL1mACcG",
  "key25": "4MbkK7nz56Fx7MkwY2NUnBH2kHHRrkEYiZaLaoqLXuoeB8wZFYLxyL3Su5Pac1cJL3rpMRUPmES2HBd7xKP7b84G",
  "key26": "4JuuEFT9L1236djWa3eCBcxcAgAUYC1B39d9vT9t3kzD7wfVux5Xh8aGpkmEqreGJcDgkgQKmSK5cb2YSuHXmNmu",
  "key27": "47QuZuyPvi91AahXs1Hj91zdMT27AG7txHnNxxSCB8QqNJxzPXyLWkLFGCbM6pwQCPK7mJnmXcHKKmVn5qgXbq1W",
  "key28": "2as7Ya1Wbqcb1U7rWM1tZXjFw48NLL4KzyaNdKwtX5UmMUXhA7ti2B6UneQq4PjrpzmVyocBHyiNK9fCbA4ZCmKa",
  "key29": "QzyrYaAPUTz2xUuLNfmYJHB9Ab41RHDCcT3UKYuX2NoFNexh8RkDXnXFQeMV6YPmpoLRSL7xdoGbS8LU3VDGn1Z",
  "key30": "VqH4bHiCKLsNd3u9zhVzTwEET2gKMY9jD3dgTTWpKAmqHUKvJ8yxY4XjNJECbzPmM67TKXeuxpiXzFHhw4rMpfe",
  "key31": "cKATVGY3jj1L54RUNBJ7kYoeF8qi2rVpmghyuiRba57AGYpdVjEfz8ZZTMpmSuKxnw9gtc3DcD4f7LMQrJsh7YW",
  "key32": "3hyoerHRcLyxsroLAWyszphwPSptc38cdCHpAHSWzQdo8oGBDa5HCzEpFCaMT6mvj4g2bXfCbdR4KdVQfYEuMF2P"
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
