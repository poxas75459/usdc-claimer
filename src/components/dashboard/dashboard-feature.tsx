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
    "3qM9MNx9vSeeH971tAVMUyrfVeTwiB4scC3GtYbxFFMxGe5PgrEzeRd3erXeWvopZEQ3hbThQ4mNmg2oAWwcpiYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YazqTctdWKKs5cwQsDzv1aYEcnyQctqcgxTJnMzRvMT2DQxpmZM5yn3gXQAxaA2PnSbL5TveVzP3nk3J6gyJSvF",
  "key1": "3pw7zFbUta3V44etw77UW7fMYzsq4QxLvQnCC7zWfqMGRbLwLR8UpQuZZizL2XdPc8exWx6r6uQ2PimRowXu6J15",
  "key2": "22FtYZ1gBQ3xiM76Y7uqt8PSYkB6h3JEGTmbYLvyjGvjiup2827oxhYeXELaJkzCfYUwY91E1urcdhkDDBo6LtHu",
  "key3": "2ieVttAbvpgqZHHM2iKXxTmnPrppe7WoVBsWBKKSviqSRsMWzMg9H6pXTwujkYa8CvNtyNHoHMcXsFx2qtJXByM3",
  "key4": "5LwM3d7dm2EZPRJMu8GVG4LFt3KyVhaeJN1NCNSU4GgRFP6tsqDfLV9QK5BGdYoWDDcxXcfXrGpaydWYbRJLKvxt",
  "key5": "2kWpQMSEaSsLBJf5NshJAuCrYDpdZNjhXU4jYJBTvVj1zE9eFTbAT9EFopPReBP9ZdnT3kMMDGpe516LtPVitMqR",
  "key6": "62WgqmFahsemkBwBubviwmyd75wXCTisTixMA5ffgHbvxjwzCJW4RcEqyqYf359cqzJHNbWFXGtDeDaqpwKv6a4Q",
  "key7": "VmZ41PdU7b9cxoSTKJRkz67s7iftkjMjgJjpuqMo73mESjBB6dEhznMn4yG6Hzrv8nmEBzdYWAtHFcmWzdccd1g",
  "key8": "47JcHpAh4XMJUvTHWe5nEV8mcFSnKCTtueF4Yt8Yydk8zu2W9eQatPBDFHzFGz1N9aFaNYEqf97fynji1zgFQi5J",
  "key9": "3zoctJFdMkp8cspfESsbi9pAuHcarX45HGGzCZzbVxdqPSwdj8gdFDZHTarPnYq5yypu9pW3YncjWVvVmY3oeown",
  "key10": "2s4efV8V4HEMxSLcjxSzWJF9FMeDz7WytyP8KrE4RJMdq2zsZ1ggh8QvYvYiRR6QgyuSpYYxZupX6G1m17d7Pcoc",
  "key11": "5ezfrqmSbmSK43r753KtWtE6Ydhfsfg6aBfzfqiFHkuiq6h9PURNkaaDAosNvZQfvDa9rwz8J1jQtcjKx6qTS6D1",
  "key12": "xgjr5M8Z2gKvz8tfcpQHKeWrg5xzWAuqFZ2xCYdWrXYoc2jJNkMTnVxMcTjCGyPGn9VXXfAfHCCCfTRyRpabRK4",
  "key13": "2GyZ8jTxc7N6BMXMkQ9vXRt28HAMjKDSo7Wazts2DbTY1H6WsYHe4CVRZna5MtdP9aVPWoAcLvnYKVne7FjwSv8C",
  "key14": "2q4Sy3Kf6UummAaK9ba8Nrz8wP55NEmkhtpWutKtAV9tEYowYoL2mFNwyHBdyMgMKo9jDtRADZxbCuMZFAzssVdC",
  "key15": "2zZwzSRhyKCryqMLTQLyh5zMr2dTzMA4FhbDaUAum7E97XgchNoXxqmMYA71bTjZApnJY54p5imhXw9xadS2hqrP",
  "key16": "4HJWtvaTkc2fV7xmCPdfN7WVm7yeDDsHpG136cd1GCzxiNYuYMMqgXBmKyFaqWRq94cs3Tiz6zJoJ7DLVqppiPKo",
  "key17": "4nLVk7MNGX12yX5wuFZehYwsEiJJQWLhxoAvnhcQLdEcroG6QLqeCE49PRSp1j4nUVRqWuZ8qasAc3t6YLvcAtFS",
  "key18": "4YGYeJCGN7xKcaEgWLDWij6zkLpqpPQBPUV6CiV8x3H4mhABF7JR15AfZ9VBGDnxscypzRskfTatZjnWPHzMWWFk",
  "key19": "64QBGtEoTULzgMPNLUkmiHCwDkTrtwAkKBqjjLisbVpe315XDzB46JGhwB1b5ce9FftrAkfWJ8s7mevDu2h9GSzr",
  "key20": "5zDPDJVdfgaxbTKSzEBiVyjHKZZuFUpwwVKnben858dYWdLyVzpo18MuUVJDWjPfoTP2XbvUJzT3HhcWXhc7fvYY",
  "key21": "3mBsf5xP3wN82bp61BikLDVBc3H8h5r64kLMMd7nTCeNg92GQHtzopUwUYPQxEZMBmh4wSFCWjsdErhJ6viVYkLn",
  "key22": "59RM1Pp3fXCtAFKDFnfvPCBZqoZKb3SmLc7DxvX9pnCqgBezQAPdnYyPCaHPR4UKxcGSLPpv7q7Drk3mNtnbsR4G",
  "key23": "2oXq7iHArgRRAdYvVbNxLibF1ZJkmPU5eYB3BFGSwNbjSvLcXm5AoV6bf3sPisbbcJvSw1yc45fMa9GAVQbbzofy",
  "key24": "3X6UDxJqNn2LW97GrdXte8KKp3xDUfNBt9nYdrPPuAHqXMPFw61yEePjY9H1r9EwYNRRBFvKtwZ9W51gqUaYWMoz",
  "key25": "5bgVury6tAMd1WxP1UX39YHy5uii9fxw3UHitQb8FcYBKtXyzk5JFXHCzhTU5DXCvux6JjqTiUjj1FQkp9RJgTsJ",
  "key26": "5fBsLhyoN8cGkTVwugKieoinDVYrnL7Wwv5hU7gysishAJnnmrC3HoFxmPkixTXe8ErwNYxgM9SLHcieKFj8RUtG",
  "key27": "3N7i3FY9UGCMeCiF98YgbjGCwEhwzevxDXVdLeF4HsmKWKxRU5VML4nDE5vsuRT3TwyYsGyPb2QUiPXg9CEjZ9kK",
  "key28": "4S8W869DYdnyxEZmTYMhoFbNV9T4b5fiJGFT3i1ziCUzF7fEY6TXzXhrrRW7eXzN9DYPQ1XZJwwtHJdzohpg7oAh",
  "key29": "4cXQNpHJ6N3kG12D7G5iakfRgxZf794EvNnvL6yDS4fZi7WuXpX3GJk5XEhJkwZNmgNa3hzsAAUa3GvsWTMpsuND",
  "key30": "5VaAa4XkcJQg8mxTeWRmW9Rg7APen49CCxx8x8Tw5FuySjsTPhtUBjNTbkGoMZeft9SaHpciEuuNfLPGGbjkLCcj",
  "key31": "5M2XEDDS1ycUQtJs5FFFTk5wJBwCga7AYM5PDsEcFiWmxw8L5PRABUe5snrtrBchkKuhSaAS1AHtW6oMtEaZksaN",
  "key32": "4To8W1USReVC8T3TuxjvjLjoA6iruVEyjVT5eAt94oFqzbW5JokYSjnjYe898SqmnfPhgnvYXdYTCeWZLpw67Sfz",
  "key33": "3FLg6piL8T1rwtkMG7TUh94yR75ZAhHveFPjUDHT7YVAovd26dmQbBKXmrsy7WmDUtU8HvrJPKAjyt37yUXtBkgV",
  "key34": "4XcTtAwgg94tR4UC5AEuSCwogVf1NwbrqmNG9bd4PiJfLLDZERe75C46bJDpGMr4DdEw7rfjuNfm6v4WMzKMoNKB",
  "key35": "4Akq9CkVfa6NLmCn2A6a6RTcG4bdSN7soN6kKVTKtEa97NMUurM8RnNgrbJ9hN6vufDVmLgrdaJvkVns5yWH6gYK",
  "key36": "jB8aeDb7ViaXNfxXiypdVMcZ2ePEHj8tDSue4R5RDzsPptM39DuXqtZ8G5E6ufcE7ZiL4BjX4LnGxbcpADD6PdM",
  "key37": "37RNkZvvMMwDmU7UK4vrYWhhSfAFQvUb9Te62RFdMBiCiK5NpzhoFKjiX7rsM8Au4jGXjPBKTy26Mhy1QhVUXTRH",
  "key38": "5d2eVKPJAWELb9wchDca4qKU5Qzi35v24sUDg4RFSAiXqEuUgdVe2euxXGETV8DDcze7StvtpfkcpeoySt3XP3H8",
  "key39": "3ZoEyPoPYv4PruyYjgbXLuLNaUbsfXERvbB2XXL8GpyYSjF1UWV8gLPkac7UGg9UHU1Kz5EMTnd5nWqtcb41Nhv3",
  "key40": "2vqYHjWPGGV2ZSTFe8heSiHFH3o48wHzcwi1W3Gi9QCv1bedniuN373pZUwZUoWQ4b2pqkgDnPPrgJMbduP86hor",
  "key41": "8f6Q2cT8G4KGeDTCH13VUaEMoLk5GUG83S89TjUzmb7gVUbXGX9RyeVjkhFYmhPBsqLz94yCwhgPQhRY4ukVdrw",
  "key42": "5ZAA8Ux6cx9T9ir9LjBfURvrcXLE3mTfsZqdTDmanGqraTtR6Xx7KBx63KLafsjFxyumo85NzgDqiAX9VieRrXkL",
  "key43": "3siPpCnfgT9AqA5KFmXv25bLPfkxCpPBE7bkcXpgUJ9dacW8eVs99ewJhPEwubcuVmbc4NofuNUfc3G8vxmqjWwD",
  "key44": "4zXj2Lo5d4xWRYtCjZNd6dUkfphW53NS2hnUxzCqaMgB3msAF1qcGPvnBV2jKEVjhRz3NpHJdNC6VZLe3KFrj13z",
  "key45": "56uWKr2rzRwHkvYsvXoG4kLKXLJN4hpDQjJtxMbkBNQG2aQf9SUKZGRD6xpUpaEhHjCXo5Zp4rsDfFCTU1FE9nCZ"
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
