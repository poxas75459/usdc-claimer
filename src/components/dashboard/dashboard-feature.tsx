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
    "25wYQZHsh4upQXnRkE9HePzPKyViSCMDdzo7iyeni8JB5m6w6phXsZdYvVLn7zA2kFE8X27kT1hwjYNncoK1mjhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vZLhEuLvp5r3iEFeg8g8iCMVtfR42AGFxc1a6dJwnVy7ypkC7sXQomxoj8X1CBmaG1QYpNUMiSwiLvZcPBYe2YY",
  "key1": "66TbyocpmbcTwHBsFNAhE9bqoGsMaCqYcQKJPDheUZxjmEyPun1XtaFXiPrdzsWHJ5YPNFunYNbrFAm5ES22AmSZ",
  "key2": "is3mbgfZF6qjtuQgqs1kSmQDfvjH2mjomSLJsuWiFxKcbpdqbFdxny2zifn56AEntPvLWwvthULk7uH3bTN6xPe",
  "key3": "5rd82qe8Dgdk9nHrAmFgYHFuXRXqn3Z7V9sH1N9yZmbpdw4U64PWG5tqU54YSVXnwgyZMHAdpYBYzzrC8bfTeMKc",
  "key4": "5H6yfhdsNxPptui7jYEDPRhBW2BRmWZYSJavkXicCEhmK1ntsbAmq523XjYWCSi9AA788XcyWDu6XUKtxq58wX5A",
  "key5": "35uzD2akLfrLq4HVkc5VgEpHLrikQgab1THXee354JZqAFpDG3GWmxc6vVMjTqrCguYgfHM6wQs6aP2FX2MEuLBv",
  "key6": "4xt5aqpEcX4uCd6CueXd99askWJCXdRXtEUzv6c6WuiPFgRBkHzzDwsgpr7VkS7n5MKbKwKtccAUEniZX1838wWk",
  "key7": "4xLxxFfqHjTUbekS7Cgz2G7N7AST6mwWfQ87A5KP7HJwVNWUv2JvbKUJCEyar4dWxzJQZTwBg4PVP62m5wyonToX",
  "key8": "5eHkT5wgVqN4uyRqMbyhX42xDpkHAHRPqEE2ULvEpJ6tiSq4d7pMTUTskQ4tYycdpYZAMrxSUSYPC4PjDUkfc9AM",
  "key9": "mTNVECEZjEztE3mDccZhVmpq3vThK8AaC1yNmMG83PcSzzoM34qnGo3VEhyUubBhhbwgfFXfr8QCkeAVXodNDj3",
  "key10": "5NYQhgc16PtZ5CgszB3QwxcbCvNQHvez9sZGifmeafV5txg7go3suSE8LfRsVX1aHbxmJ6gMeTR1eYKcFtzcKmpf",
  "key11": "2jewtfwm4md8J8cdhnYU4yvYijnFQSM8T2NRrmXSWxSGvAFQXKegaMxMW9ZdTWJK6bVPfomQAqDczmBAtvmjtEKi",
  "key12": "5G2cgmMYkzhs8PDoQTnMfMWeJ9B2CHXDTF1XDF1wXneeLHHtKNH5DxNFQaKre7mZMbxjUxqAUTh2EN7AHSG1U9j9",
  "key13": "5PzEd5rAFZNbYXk3eSUWUTuxnVtqYWXRZduicopcAH6NjCHoGqSihsF6uJqXL78zt7M9bdQHkN7WkpXpEUAC3rDS",
  "key14": "4PqQ272Bgv9CtnpdbnXuPnVKZxZToyStCn9wUJvMngfRUqSCcRh83ak4rcXV8vckSi6m6zaSGJFX73HHbHgugVSB",
  "key15": "2wBDcz3BKCCYnsKFhmQinwoggLgmdYA7QgEM8nWPLK3it89xcCCr7hg3HUhbJxWskY3BQ6EFxwD1oZiei7FjrQoC",
  "key16": "SeE9ZHhFsgfsS8XCCdK33zdfce2cFFpRP6kmRMMvo1oTnTUPBdGAJw7JQBoFAEo3K2J1rmeAf3kvw7bXc8GpuGo",
  "key17": "2DpMpvApxovuhBnCEyX8WyLtCufnXZm71eVTHetFCvDCYWViBb2iNMoWW7mPRGbjZUf5EpVbT991diKMXLNFXGqp",
  "key18": "WQmqjf11dx9MSyw2PS5ZV5hFzaBN59q6dgVxFmhuoKhQgpzpGcKaZ1hNjdFPzLKHTKvCRBAa4AvmsGFncA7RrqE",
  "key19": "Nf1JY5FRbgA2GVHsJMCCQDwDiaNQBcYsL9vbpef4ttir67SC4LjoJCxVs545BWg5iw1NLvZ8KaMykbBvaTZRQEb",
  "key20": "3ZekrNXJUJe8rV1S5XMZMvK69NMnHBG6xQLGQxdi5vMCpF2Tt9wkES1sJ6WZaqALvhL71uRmPwWenobquvfwsPCn",
  "key21": "2dgTfZhFCg6wUbUmT1GunWDELonezAypMc7LVtKzuCh5ZCGxhrqnuf84pu7LVERHyqtKgzeyNVwysVGNvNLfhAgx",
  "key22": "xcdCmado8gugi8JtPMDJ7Sh3UStasGwtPmYSBw2Hr5N8vAiVCZd87Sf8TsGQAs1ZVAdvQegTh4zEkw9jMegAQx7",
  "key23": "5oETzzTfnxSTDWAG6buNkCVBFH5x3PPrmdWY5Nsp4dr2VVVtTHVtcuiV8XKAC6JY7Ya9qc3E44ur2xLykqMjtSGP",
  "key24": "Y5tXnVZbKsghCWtfGgYRafxvTPqwt3T8SYEpscvdmLo7zrwvy9LdmUExpNyCJ2E2FVFsPnYZoy9eL6yH3g8noFW",
  "key25": "4v9SVq1vhLtBR8DBn8RYoxvdo3eEZnfpw1QhwNTZEcWg8sFYUY7rypbxCu687TcSC3ZzvF31bFMXe6RPY213N89G",
  "key26": "3Gm2rKtRUSGhasFAd5TaPFVRzNFDjHWhWKAY6C2gk9sKuCCa3Le3NFZpp8awob9ooxKvUeo9kRLXivKQSrzSqyqG",
  "key27": "4hEySDdTqRmkqDXCkzJFHJ3BKwPa4vsLe8kMAU7UN2mEpH5C2GV69NaxTgYhL7TTJ6B31zsSgxLLNXVQmT5rKCmA",
  "key28": "3mWY8LLCr4J876GFLwZzAwBY89tiX6LrShTLmdCHvmgH7xTMcMsfSWzAPjVgo6ygfTWWx7K8HeZvoLgt1UNnymoG",
  "key29": "3rAQkHskKdXMnh1NhC8MSNSxgTQoHAcxatqtpLAsQ6AEUo5GY3piU3ujw2Ufp6MtGgJC5VBDNmaxeybtcgNBBw6T",
  "key30": "5vMVaxfFT1LD1DJ1VC6KYoW8NKBf1TfCfCiH6SLd1SAC37qCNLqDz4HjSKNzfe1kjn2nybLmE8PX6or1Z3rxCrrh",
  "key31": "59nXVtnpuCEQkTdocEyLMqJgHpbje2X2qua4ZXhjY8Leixpxv2SjtAk2ysMsgeQSpkHXvk6wFeRXaJzxrDh9oA2a",
  "key32": "3G7B69Ldy4quBtPLHoiNA7JW9pwpgEzSw3beFbVAgmTzVTL96tqSzJFBBt2PswtNKQvT841UtgTC5C5s55v9WgVw",
  "key33": "trN8Mr5NQoz84SxpSjLL1JiioEDvntDULWwzgRYRPuZPXonm23zRjr2S9nPpSYzjgGxG7aton5Nx5uxawdWAdn6"
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
