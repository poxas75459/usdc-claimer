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
    "4pwZt1dUQbmkqjdQBpYhYTxFauk6aVrWAKn2DDv1upzWt3s22s7c2Ejy9Fwff9xcrPNCoyesLUbn44VL7WbJjjjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U81TFkPTyM571uJxaWmEfgWSh8rxoTJ58fjpkUuUvN4cbkKztKkURcs2HGrCRjpvP1FjNmAUAh9MrvfqTZCEcH3",
  "key1": "XJ8qr4QVTE5Lan6Mk4NVBASwUoHyi2Dnfb5HrP35CfFropZunwK33txZGHNEExZQTiFzZ13TGWFSBoyzAqEfHpY",
  "key2": "3CQW8k9CSRmEB6S9CbWNzT3BXBTBwB1SaxTsiZvshq96QoD81QxDN9CkXaW98zseyzNxrVbU8ZHp2FDqbCRLr3WG",
  "key3": "dH4p32yFweywcFCDCAhe3RG2fQYuEUp8mFeFiqEyaVrB2XmxWNfUZDbjuZS9ETxERoQXWMFn8bZYqJEHLrT8qEB",
  "key4": "3Eoo4NKdZrHYXv19vuBPopXefnKFMpU8rk9NkFR8Vy66cqRe7s3uanAVgiiXPwRUmZ9MENJTvntBFFJ7Nns7XxBL",
  "key5": "2ECcsD647Y1RM3H6hVWDDHXkWPiTicLCiQKnZLTkJaXmR5gNYi5T9Ai2waU5gnLGjukYE1YxeSMJje7XLCtG9pPu",
  "key6": "5rYut7SpnvtMAqAArAUuLy9XXzTAkt1DmbvTPUU6F2qxFbNcDNQBHQ79rdsGiSgzF5kzFruZ2U3PYodrqbTdu7vK",
  "key7": "3SDf2grHGLriYiDUyj1hx7XRzBRUeHPnS9NaQjffUkLRkaZFaJFyqjydX7ExNCcwvR2rp2UQzfx9BDQWBnwRtbXx",
  "key8": "57s8A9t3WETukZXNK1i9XEVq3qtEMrT1eLkSDANZQsn26NJ8ibrdH2kW7m2yJgvEpworxMMEjfn2b6sPTGkG669k",
  "key9": "cMy85AEzKDGeAN6k1LXGykTKx1YuKHapfyHPWtLwDFujzyK1yT2xoZzYUQZDovFgKkJt3kiJWDUfSPiAGzAUeh9",
  "key10": "4M7ZUJXYntTMSMxrAbKHEiLUH8APC3KhokrQg8Xrme27n8DDGNbMdAE3juqddLXXY61CtnhLzNUtoJBXMjzkMi9a",
  "key11": "LF19pdxzAQQ5gqdPqvdnVwGP9XQTbrvmDWBFjsKhrsDXiBkNH4LUhp3GNBHRucid5T229LdeWSTjM3ZfrjvSjXu",
  "key12": "65ip6c3i9dZx6m4R3f7Dthc2LbPDPNUB6c18bY3cX1BSsfvqo4ng7YbBLbnkFvdCKWikfqe8BUm8s227aErSx1UD",
  "key13": "42X894PVEYtbuED3dc25BYG9PBjSwh6RmogruVWT8SrU5uSTLhJuwXg4CbsEp1i5oUoFNzyhYcDVUaWwbhCMgfP2",
  "key14": "3zGBUEbxHCmTWv3NfbCbghWexypwfkHWj8wrwFnNWdMSxfgfa9BhDLHRp4wZ3UXhEX8U9Ri6zKtYcSCvvBjcadfa",
  "key15": "oRMKyfekv3kvLc6KmWvvZQsgjTJKD46gFR9MjvjsqeT65AzhKWYEginzXH7Wdzk8CGRSZdVEjGF5pphjdTFb4dT",
  "key16": "FwDHqXEfibWLC4a5U5UFYogVMuUJGqmFR82RcNwGzXBT6ZB1zEsf739bgmsNEgMBJyDvKhX96ygqc7XiUeEiPbX",
  "key17": "394HzZbQkaPRd6eNrJ7DesAPyYbGYPJJxfDKqx4FS2cycsqLKdr7Ded9ap2U1bHX6BgYBduiNMSCk9ArrjQUfRKm",
  "key18": "pcf7g1fcVGdkZagaicFrxTu4Zb9LTmFZk9J3gNejG76PucC7tv5tCHXpkAkEcAeP3KYCHvVau6kCoouvGgh9XWj",
  "key19": "MFfpr8eL2aGkKU1oLhHHNLRsdHHpFp8tBzUEg5EdNc1QomvUeX6U1YuyTX2EnFGMqzi1Q8JdH3atUfigs7ttPNe",
  "key20": "3o8b2SnXeP5V4R1MNFbmbbWhxspF1CApjBuK3Mt3HLV7RYBWgELb9z15crASBXGAo6RLWciLkWLSFAmy6isxwfCT",
  "key21": "rPSQC22GybzLdczeCVoUJW3W7LLiBGkizuN5ebMebb6wd2j4cdTgGMiYhTqfBvHHeLJs8p2rrM8E4U4b8ooPJo7",
  "key22": "3RMD6reiRKorMyXzvcPsZzmU9EaTS8B5QLXqmfJoM4UPJVvh2E8ZKQNK9YE99B9YtrA3YrCLbLCgMff8WnTapJb8",
  "key23": "27R3G7DJYSFR1TEKLvCq7CLHUcdKEEhK36UfPwDENDk5KhMJjRLrLg6eyn7HfGbEwgnk64WqL6DsdZKuzVmXoyHk",
  "key24": "53qNMHWP9sRXQV6zRx3kdCtMpNky8kqkx3ai6QJF56euh7bixGJyDR3EWrq7m92mfQLsi1PMnhpKY3VM8Gvij9cd",
  "key25": "5SEHN5JGTmJUxBJTypwgZn3d2op1AaA7wzBZ36Dd8kaoUxHFnD6imhu3fRwMSScJqadQZezZ23LtgebH4AZzyzaC",
  "key26": "5UYVjRQrPNNHdPbJM4X4K25tsgPZ2g4boWxjU8HkK92vVZscths61DW2tAKbC7TApv5jRVF9QYJ1n7LBXyp33LQA",
  "key27": "4gccrLVYmaC3zghF59g8uSs6pkhggkmn8HnDJus5ygpVcqWAAMfRAun5Xk62thSMfV48FJM3Q5ZfiWBfMN8KQBmw",
  "key28": "4BaYcwsCCemaWyeCE6ygAn9pv4v2eQoTJdtQobVhSv6Kpy9PmCmdLoGmYRFYynzkb7hzzc3CR6UHaLTAwTavYawe",
  "key29": "2iEVdDGC3NBSyDQdEdeXEKHpuSoNCJQQpPUUNWAUzy1ZjXRaExeu48BmCDyLA5Pmx9E4ADchumgNotP9RLWWfsrw",
  "key30": "3U8Bs5iUmKe6Ek3LYACj5UQiG2g2FDZvjrpF1kmMCS8fv4npvqpJYTYAX12GH6dWGcynngyxFageVLqmSbkQUFBL",
  "key31": "3Dcch5wHBu9ENZL6XANavbXu9b5spvRuJLchzz2TgRX1JAuM9AscNEHfxpQ2QDJRSMpB7bS5rTcQmHfHTzkyTtaG",
  "key32": "4qCTdmZNrfr6UJPnvVwmK6WoQQvMnGasqqJTjCfbLKBBAd1agRGrLn74uSBBaWMYQDPNmywRbxLtdvZpZJ3RQfkx"
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
