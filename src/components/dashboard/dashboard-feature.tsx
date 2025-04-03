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
    "3eBj35M8anyMW3jEpts6iaVAdDB2vLAtQgJ5ZGuUzEYFEtRdYDKqnZSGMu3KdW7PLU29ZStR7LUL5U5XWFWWpRt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46y67Ggds5zQaSYdbEArc4tjeLCdqvyoz5krzwM79CruLAXYiGySQ6XBASnA1MQH64QxznP9zFoTonicpNi3P8QH",
  "key1": "2bYGGw9DdSc6G4DWQ42y8cMbYPNumr2RYh5MiMCGj3NghniRCkzUkNizEkcFKdTFLzx6ACBDid2enCfcytzeQajz",
  "key2": "4XL1NK8yPudCV4UKmK6rk5AnDwhuyFwPiQsvCagSjzTdy8KdV9jr9XwvefTwFwi9KtiuHEHJVEF5Z7ymmz9yeAb8",
  "key3": "dd7uRMPzNdXgYvMfLPwEwP1b7EumE5cnJeW9EhhPMiyvq2yKBN3tBsDt9ki9fK8zCBYuqaQH7jkSEnpStEoV485",
  "key4": "5fsBKATviTYchAFLpoKfmppDENdRzQ8X2o3PRbF4riFPVT3iyxQeiTF84DwMeFpjacfqijAAR12w6iGoFhixe2Fr",
  "key5": "5F566WkJpcXtQaShjNDn8Fo5AiftVe8sGuawWmRhJpdEq1g2iLHscw7xAuVhC1KZ2GQByT9dhnoRj1RW3b984ks9",
  "key6": "3BFLvX3PQ6n4VLZr3MxE7njanDuLNaxmQGP5zby82ArwZXVfKgTpi4AkXUR8hXDXn4YGGVT9zTe5KunsnHfN5zSR",
  "key7": "3Q72MFDgkCSqFjVVKitMG4dKdu6cg3xV8F6euMpjKb4VhaVQ63wYZ5CVyWGmzacMsopCHMwir4BQHTQo5vRcionh",
  "key8": "3WVMRtaPPsqfMcEXrLKCRr4qfekbFnBda9Eq2pXTeJBrjzAzzaMy7u9ckfmZLq6fghCxurmgvozLpWjZdh84kUHB",
  "key9": "3XCWuq98FHbMA9C9cLm58yuLS3Sy5cGyF2cN3a3VAd5mEijDR5TBPCfFenD8UQRBtbNdEgxT6JqS7QsDuSztWfzE",
  "key10": "3h1dXqkzDmCzvs2WhYWdc8cPE5CtSZjCCt6meMYDx5b41VHkr6VTx758xSxBWqQ74gcFjXPrkxQt3mYjEhs44muu",
  "key11": "34UAj6vZkP1qjneNGVRu3FPWFZa1pijiXkga9qbkMguYmJiEMjbjLQfJfbkis15G2BhGf1oE7sCjNWWsxN4mKLp1",
  "key12": "3woHu18E4MXYkWiJmiuWidQnpWg9pb3zFbsbFYsSWt49Gy2nZm6UACA2nzyhxuPSY6RS9tyXisc6CZvbABnCaQCu",
  "key13": "5FJpdhga5aMsKcM8BsDi64zGwA2B3rosSa1PNPcUQSXq7TFMvnyg7jGDCMEJdSj4YVSZ3HBAczTsQNoqn5S4S7EJ",
  "key14": "h8qR25FyPUMpUbKPNAhLTHahekbdDJKQbN2bYrzRp8m2c2DouuPfeQmWhGWo1xfCNAR3TcfqJo35WvDUuZQ5RKX",
  "key15": "3TRkk3pTMqrbUqTuWMMK9NecbeRXm6WcT5ptQxx7AyK7gRiPqMkXaHKYD8w5vmDYwYHtAxH4xfQVFu3rTRhqDLqa",
  "key16": "3kYn7ngGXHybzbKrV2eRT7eTQT7MbNLiM7XJZtdFe3K78svWhfnwnft6am5VZ1ZqxenHymYBkL6dun4U8Z23wbLc",
  "key17": "4sbUxoMHih6gGd4TyBo7YbaDLrnMVAZbcXK2XAQGrEExLVnZNFT1vwFgpXCQqLwFwbysasmYcZNJsAhtQ6Cz1skn",
  "key18": "5CAHwypDUgNM5azCDY7ni6Gigw21VTCUmPRjP7qwXN6E2rv97vJ31qhvyzcYxy6uLXFscuWnUSMXkR3jDQpGvTtn",
  "key19": "3uVi7pUEtDgVMursL3Ts9M1rcgxJd5aBuTwRNDrvqCK8kGecNa3f59JmmEutj24q7cwiz9M9n1UvEJPzCufuHkU2",
  "key20": "4VCvrxamvNW1Byzrbs7xyVy3GpCHv8hawtBkppNBdvVoj4YUQZMBM6Y34SsMax9JCieJNWTdLr54oEG3uVFFdevq",
  "key21": "438FL1ZecDDvc3fzMmUUh1R1safznTvPC3tuMDf4SMGcQ5SNZDcnNxN261LqRKPS5Jz4HP4qntMyc3pnE16v95yS",
  "key22": "USjvim7si5DNS6ZqdcK5sXfo3KAzoyagqEEBms95S1nqJR315u9gYTsw55gAXbiZEEKgQAYcFF2eR6nvAs7gKLJ",
  "key23": "61G12q4iHJSvsLsY7GEnZqytaX4t9WfVYoqzbvwK3p5tQjUkz9PNjueQTTLPzqFMMQZKzzYbEJT3XUkBd2GV76BU",
  "key24": "3wYTprzusB3McQq6HEzbYEp7sgPUc4zPk2TUybHnQ5cVkuHH8sc9gM52SmEebZxTZaZBBcCP2KXNVgPS51ejFWBd",
  "key25": "25fMGfkqwk9HytxJNFVojmvPu9c1XpubaHqyNq4vewwzmypeKDHMiYUFPCJddgc7K8J2AqrxsL8g3dsoVEUc1WFD",
  "key26": "ziWT97PYj6LxN2RVx6wJwDnhHFyzp8wn2W3vCW7KEt7kUX7VEK9nEo1kdPKi7r87aWYTFheeVcf3Mj95DsQpEdc",
  "key27": "4VUYgSzV8RbSaD4gBdTZCH6kd1c8JFmB1DSbk3B2YqPnMbzsMdpWJ7y6jqota4oggPRSGogCG4x8PtquRGAPUJ6m",
  "key28": "3QxHqQDbxGo57WTR5cETjLooXe8aCM2ycYZd4VTpp6fMHJQTFVjcEy4KhyFfWCxEDdFWVr4hppEJNVn68TuSzjpo",
  "key29": "4G4eNsjr7MNAVrRXnNmLK3gsmvVt5QqE88cxEygGGuFAvKFnBjwSsmLZWhemeD87dvmA2jfvNuueJKJf2jsk115G",
  "key30": "2bsxx2CqYqDF7SunznXSFm49WrRNY5AuxsoWBanJeXBvsYDpFzewJWzXMcDJkzSjujVxGSGCKkZrJ19EQrZXvQES",
  "key31": "5rNvjQSuPWdjmRR1YGUPu1Z4UDejJGNwSNnG8Q2sm118sv7G55iJRAkNhrivofJyXYdKnXYaAWi8BsDrr7GaXu7w",
  "key32": "43vp2fFmPFncxXBYs9rVSBwUUTv6aRm2T3CtQYi5Lq9BH5gtbJgW3Z3kGY5AwJ9pDoPFJUPWgXcA5ZYqus65zEws"
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
