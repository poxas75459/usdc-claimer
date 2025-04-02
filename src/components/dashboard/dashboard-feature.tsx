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
    "5F5Eqt2VCYpMD7dRJELDPQycLPXP8ykqMSFyE3haUCPeCvrNjyYDbNvx7CBDyJuVfwA52LgZQzQxaF3HeeLXNWxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JiCLz57yeZxZeyY3vnz7DCMFQYCyY1k1mGjhu17AqBr5hsxxZp9Yd7C6PMiWWRJcJZdQT8xyT8NGtjnvfP1i2A3",
  "key1": "58sSaE3qXKYXtGfU1Vde9BWudEhD3tKrhjJg1s3Ut8WrfJBifoKEknLZYm1tAoSfQtoR1gRiUj5N5haWgbA1m31",
  "key2": "25j8e38yBCepSoArmyYQvhpHhBTrXNosA143XxXrq3NVtHd8Gicqjih4x1FpTgPpByXYGsQz6Zu2cwVwMegW7CAg",
  "key3": "4drZQZQTb7nZMRumQWiPJ6dfM5dFpSim9LM2T8aKVfNq3oEDqYx88YezpPQi4K8fFWRRegBh8nBmYhNiLe7P8JjQ",
  "key4": "4f5uBRafqo94td7jecsxZrJ1qpZbhB7Xv7KtwWtufiEGctqNBbQndHgfiht6FMSU6iL5F2x89hAfmEsN8N8Ueqqe",
  "key5": "3FGUf5e2pm8LTyJhsVSZ54cQL8vCvRer6q6ZxAaNKaDQevpG8zMz8ugewLSJJZZ3jK3RATdDZAN5iETd8xt2w1aw",
  "key6": "5xrG9xF2xd7RTHDmZRBMKLvhdUMa6jueVqiKu9WVUJ9Fbo31Prhfgbw9p7dZC8zACREw1EJYUe4wjQNRFu2brS46",
  "key7": "oUhS2gUAsm8HZyx8hvaGLAyo3ikfLshb1Tfukob3GdBPE3rLEUNjFXoSCDUf6cinZxbrvXD7N8Q9yXEgZTkbDcG",
  "key8": "5XRNhpsZJJU6Nnh8LcdVVAp5zybWPfcYFW6pCSas8mY8hEWMWhevRxDo5tASzcG7gYXRknZi5LjhRQMPQa16eMRr",
  "key9": "5Kk6nVtZN861Q2CeSMuaR3jcybsSAeRU7Up3Sn4KWeiFzMU5buGU6jGNxhqHYxshiA9GFFhytx5kfLbZnaAH2VRE",
  "key10": "43a1t388oChumieRVWLw32FtLgz6W9gMFHMisegYY3YjFCqtQxKm6NQj4nUNJpr6bqvrKvfX4rRcRAnQZue5gnHL",
  "key11": "8bScCo4pEgYchd4QLeaTBSkSMXytMfLgr5tTSqPjSpxymRPurARtMYnGCVceEXnLCuNiPAnKHkQiPpq2ydUb3pL",
  "key12": "4tu7yZK7T7EKuz9WmQoMgyhq5TJYS9kpNPr8nvH3RihnTJZpL7tuaMBFjWFwCbYtYzjm7ftSt6hAWhrs6M3VMJdy",
  "key13": "5GA17NzKHX8Ux8QdpWFKPQwqdXsx8M3NKETdN8srkoZcQXSYNUQcuBkXAeN2Z548ZPQ16kSJSqYVNU3T3tmCQN7B",
  "key14": "4ptjQ2CjxzVK4MjZj5iksYcTkFnSRnef4zrYd5Ey38krUWj8KYC9rS7ZYTRCyyv6ypmZ6NBaK8RK2fnKRrxFDFDb",
  "key15": "3hbQfKMJSmwhtAyLs47uRcUjweCGc3WA4Hw42kVu7L4PnKerZoJ7p5G7j96Vac9MgYGA4ufLcsYfgh77TLud1vot",
  "key16": "3ZkNp3sFnRxe3mzJymibt4uFMqEg3qh9rvUofpefKQUxiPN33MAZAaAhWNxKtD1zYGYzNb3vwELJLrJcVfRm4n2a",
  "key17": "3pBVhLAUV9RP2yHrj3PzDqyHJEm8yUMjwZkV3i8XT7KdHe77tRqpseohhmPBDnVSbeU89rjPWFBfZRdocDLMYERM",
  "key18": "fUxR8sfXPFWkfP7Pf3DdJy8nTQEQe8w3mwcksdqSbjcFhRdqN3fxPMZKBhpi9HkFCdt8QxN8vZGdJPNqz8HVLPT",
  "key19": "5Rhfi3a4jCHPCiyZ7KYnYxHQg3ihe6YapfSVRp6oMKMEX5KfFz33tZJmQEwimKdTBJGN2oQBoNDmRR3Ymgi2VAJK",
  "key20": "GoLkfD2Lr4DYvvDFCroEBhDFooZSuNbAvkrDDzdEpvVLWJCMtZR7zYihJhWtxhvDPycDg5V4MdWkVWbPoUMKJzD",
  "key21": "D7haVBoCr6qf51nWjWCYp7K22WRxAMLMmnhFxbuip7yxHfEVhjZg1th8ThxXBy1VvSNDk3EzjmKCn1YBFj1n38r",
  "key22": "3Kr1ubc53eNckCfFzEZN2LME2Kc8jeBtqENq6yKqKb1kxHnrFBJaBLjre2TAypM18WaxuWXSrDehT8u1X2iWf3FT",
  "key23": "26WfA9h7V96SGtQmjtwuAGYKg2XLVc2EzXE26tcSajgv9egUDfiC4BR5RAsafcCpAGrmrXCoEQBn8AJtbC1JL1dZ",
  "key24": "T6ZLJkmEsvngUTZDpSGeZgg2JQqfjRQ1JwkkLgnhD745vusbXEmbGkQs13jn4wb5GkggJWzyNvTerrXzoZ9AW3q",
  "key25": "4LM2tge6UtmcFEjomvyw1hAmHbER7FDqLUPk8tvAX3weKujQw7HRX28nYEoQEm3g4prcX42gdqoyER6wo1fH8HX2",
  "key26": "5otqZVyi192K5yNDKsHrGFUk6sKycussgphrj1vvVgKQgzJekoawc4ov8hiEVCRRsPAu42mCz1sWzPLxkcaGFZD3",
  "key27": "3eCxuQXgg1F4XFtMn2v65L9L9ELSs7emRxZNTt5J1iCR6G8fW7BnoFLvLymBqeD7QvDX3SfaDtkQwkoMNgtdo6MW",
  "key28": "2h1MWCbzhJcjzCofs4xrvXq6GeG3gkKn98KzB9a3AYPHnSaqwS4nfwaNo8hpgTHB8woJeEjrkPoFFpkUmY5K2moX",
  "key29": "3vNmPKRqkwRg1DALJ8j52xgXvYy2eE48EfeWENpimedD4HwfdnKTfkAV1t4waLfsHzQ6AaZXmXjL4FbQihFm3kSn",
  "key30": "5Q1AkqaqQbX8Xb1LpfDwxPhbo5eL3GxtjZx21FcSAQBLrhjQeZWRrt7qQ6j4B34K1iv1P3t7X5s3cVNTBm9ncpFN",
  "key31": "4XpmaQuCd652cxs6rhpGxLzR4DejVfD97SwL2CHLW9QkeLMCzNKbqQmsu7CzPbSjjHMVMRXYg1mUP6DuHEv19QZh",
  "key32": "5pixbdSLwMJ7GgvkYDehFyDe46873KyzAGmZBiScbXZcdxzgUfjto6sTNGeWw1qq7RtNsuw5EsPDh46yZXdvwH3s",
  "key33": "wJ6sBoXWvZdKmQanMLagVhbqE4UfgoL5BswvrpKiCeHFp1DZJwBqjm4zanxm4RuMcRHAecNaEukvJgg7VoaCJ5z",
  "key34": "X6veGViZk18DAVZ7jm9eBwuMjoM42sUJvKeBfMZ6f8RzHdKShbCAhCzjykYveJGDUYTkR6gyyoL1TTJvG7Piaki",
  "key35": "2v2ZS4foRhKqdfBTjJPL68NQpErX2mrsdLViaaFgK4ZGarWpM6Yytuz7wNRNAh3xjaYhrT5EG1HCivsJvi9tB8MA",
  "key36": "bswtVptkuH7bWs7JreKLXpPJx61rB59N3pnVaFtPvfFDyfM17cD8fzc629yP9TGoMML8zUZBxJXyKbzeduhhtuL",
  "key37": "3RHh4mEENjPUsysi6nMbHDYpg8FLhcaycXVVGYxNJ9BUNU59CQEDRTVk6y3crPnvNDowMCREhnwKyosxSKrhKXnY",
  "key38": "pvK8Ttqprirf4sFuPRZBTADcJFqWWrXB3Pe9ssZNyLskcAGuAhVw27EksmAMkwNRbzDJdDEzWE3bMY6oTZXLLsC",
  "key39": "2Hhr7JKsrJ6uab8GQwSUH9yeYEWdRZ79QjdQRPzGRjNT6waeJGNR8FQmQTUjfUxMu5NkUAsVJ9qYQxmL4iH2GhAE",
  "key40": "5nfER1cj33g89PKcRxXoLjp3CFHXD1sqHgV4jRyUDGh7LJUZveekedJreBPZ6LDezk693qAmNCEe2QuemyuYfA69"
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
