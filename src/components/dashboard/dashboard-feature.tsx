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
    "3t2DKwSN8JsvPu4AnsTaTgjXTPxUp3dduGxFdaTBpeppk5dVxM3ShWsiCChySWUf7QSSHyScr8q8Y8uNPUHz5BAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bJFH8DhTbWap4sBKHNht7GcMMxFFL68fobZRxRmnfgUqgXf7gFymUrWppyge3FAjyhTRG61yrBBvyaUCqcyZS3u",
  "key1": "3Y2WivUuVyuNkaAPzd2fJqAE3VAtQ4w3ZmpWTJWkvjaHPtZayZXBkvhst2QUVjH376pepp5r2fPeLRYQZvDLYkWT",
  "key2": "3Vz1FGLNzGqCUh1TU7Zbs7KEBiZrAdDsYoWLW8Rawz9kZFdMgXmkqbQrKA4iKYmpVLLPwPVgQ7tE8cBS2E18z4Sr",
  "key3": "3FB3UUAxK5WGCxHNedmRcBRjp1maqfcxo2vWJ5asG238so5RSS5WDyYXH7YnKKss5tYoZSjbQFui3sVpSZFNJc7",
  "key4": "4uWowYe736PsSvDJNqo1giZJVDW4Y4fhD67Ee3yrnvo7JwbwCXs5GCvLuGP52nsGwnnQNykrCtqooLNkrZAQ6wWT",
  "key5": "5aC9WjaqHgMm2b3Pyb11GwSGi7oxzQi7iMtDZjSGaNQwhr8yjGRcxJzGN6KczC2TdV6t5tZiUSKWbcwyiUMu173a",
  "key6": "2C1Lqz6f9f9yA14BeiFzM7vNmnYrkAXCsiuR3hQFiHcYqodRUJvMQEpdQ1VeAdpokxsVrsrrfBDng3gzgi4ydVib",
  "key7": "29TAs7dDDp2ZFdqPQhLYjgQZxQNcwTQ6ocXbT5PbqTVfPeH7NakLFiHGLRF8MGRygeVyxcTXzdmFteykvrJDggpg",
  "key8": "1gFZdFLcXDzdB9hkuoS2esHPVFXDwmATyhU92qBtAvf4d4FWNmy8q8db8PNWnZJek8zNLf1KweXPaNQva6KiYXV",
  "key9": "37XGjvTw13RC98gLGBYdcG4edH2VauhxmisiqQhKBB46f2uZfnHvgsURrqDNZJs6eRXDpn112HFFZcYZXMgCLe18",
  "key10": "jy1rExBaAhkMjQuqZ4v2fKeJYNrdB1TpwaexS33ntXP9SvDfXrkH35roWE6hU5qFdHTTdM9HpKNLmYJ5ynvE367",
  "key11": "2Z8tDVTuVeYs3NtEL2moHaDESvu6Th2QHHwmL1rg5BnhSSjNma8pcLBournMjfqxeBZqhmJYrHmAKo6mjMSg8Ru9",
  "key12": "4qKP42kkRwLetpZDjzQYap8qYYn9w7iqKEEfAuddY2CNyaSh4Qf64Q9BsBk3tGAnNy8tWM77mSjp66R673ADbP7Z",
  "key13": "3qDHkpAGBqvSaWN8hSEpYwjRFAFWoRC2uAqwqmtenXAmXA5bGtNjD9vs6R4DMn84CVGBDBHuZYBz5PPcj1NHJR9T",
  "key14": "5YVRHhroxW64sfv8ynnc1UrPchDp8h1owddqWQuiD5y8HRDNWWF5HcEDY1R4oZfsQ8CP9AogTU5MAe9t9Pi6kKNz",
  "key15": "5TSykD9g5rveDG2Vy1EnKgUu4Ace8AEQWSiuSaduFt5Lnw7rzZfTCzinC2VBLGzZBzvf9mujziW6wLGcbnoCERsM",
  "key16": "2oo3HYhhhtd9gc29Vro9W6n23APjBVt3qoGziZuu4Vv8Y4yUaC47R9mA4mH8V55Un8yaye9eeAQ5Rkdr2Jv3VNjR",
  "key17": "37j2uvMCzgk9NZsDdSLYv1rvPeRrNjJtu5gmVgTsXojvdVS2fajgbVhi97vwqJByB2mqWSPCTPkogVzHqXGBTvSK",
  "key18": "3NPde6xGPejmkk4ANVby3h2ohNzS24c9vUmGjpRemftSSzVrbe4g6ewTsLNYKNtmehqNKP52jx8ohPRq2U2cpw46",
  "key19": "5mDms7PLDzH4PaJzxkeh3swi2qh4DhiLcyT9Ey8KYP3pciDSpnxfU9tnrFw24jWy9DB5zDTza4fMBZwGaA51NBj1",
  "key20": "5AtgLoSCyeX8X429fSrbU5SwPP2d4vY6jDoSmZSrFFhN9TWvbzyZw85fmKMRkPXURj1KZYdo9a5bDzRvcMfPS9MB",
  "key21": "5gChRpsYy9mzJDhT7A2kU3PCz3QTZpdsCRiJ6Xcrkae1jgoDWDvZDQKrEXbNm4gMDxAyn39gNLzwJtLbFsMy5oGn",
  "key22": "5jPyemwLSai28F3QKSTYihPFyKWEKP3HEfQf43mG6oRoJqrKyLKcKyjnnCLTWmgmQc5UHG62nKhvaCR1ZWrjKbR7",
  "key23": "4J8X5YF1Wy4wXiT83ZsAjNBz2EKeTLuXsujRmU89rdHRw3secfYRc88BmE9vYqsbavBBU78HAiezDxqetktZejim",
  "key24": "2fyFPFBLTxw9pXAnTnVQa9GH14q29dJw4qKrcov6xxJReveRUYJXYaebHSFmWFG9dCK18JiKx1gsrrNr5YVtfemB"
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
