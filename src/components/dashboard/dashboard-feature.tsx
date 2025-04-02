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
    "5iFdEJfC3x5m56s9B3gLs6eMvMGPAXCSRN9zWUiMmitPeBxUizx4uer9JQtNL7XwfXTT4BxyQtKugSLP8if5XtAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y8j95jF1P1QLrPTTwdBA8oREYFZAUSRPkuisv8uEJtPgysqzuwCkFDHAFY7eX1n7c3SEMd5C3tWxLGSYaWBM9Qn",
  "key1": "32QwTjWWibHYr9wgW6oBvY6erMBq8zahGNdBiPd4zapsBPuDfjezVcbwY1MvZFjoH5dvx88nK1DiyFra8GJLLkAx",
  "key2": "5R9XdRjrMHfSKFccn7Us38KregU4t9YjRbp6z2Y3i2Kh7Z6WQNdepppfEWpVkLxUhkLa67HQDHv3o8xuGmp2m46B",
  "key3": "3WjFxTH4NJWjJTZYFB61wghAFw6Nyf6ttQWydLpqfEiDw3Y9UzTAFp967dNjyphXLtLppWDzS7VJ4vyysjvUDUCA",
  "key4": "4s718q2DqmSbru8MJEGt4VEsrynX7qhQrfWouTZMrBjy3J6vZrTysYn12BQwTt3YXXDRK7M6vK6vEd8JicU9pqNA",
  "key5": "3o5tc3rKTreQreMYRvYdxkeLo2De98oGmwvCvUyfKhGDCCwPadqmwccMt5q5JH9WX57GwKmxJAnEPneqn5L9BNs",
  "key6": "mhuwR5YVev7V2GEPGaP5FrrNbgKQAPk8fbSW3MMHavMmdCM7XgaYwAKsPSfPnJGZx1rnR8ympSsAUDTXCQyhGPS",
  "key7": "2vhAuTmqxJDSz9UkwuBG6Uh5QSx7GHueJ9FYxeHWtgh39BiH2tjZuEQiBfNzz5MutvWB7NG8WzQ4zUcN3SfxfJVp",
  "key8": "4Sc95Mw8HDaPiw1MEvHYbMWmrcFYpAQpVxAAwMqb4NTiEjm7gLML1edgDfRaXz3JUJqg3ywFbJRY9kZUFNH2dGZG",
  "key9": "2RSPRA2NhDc522jYcXzgAQgwZtxhLat8tpdEs5fAM8pcAmHktULjsAaE2VRtoNWMmmWoxhvfABxAuX8ypc4EdbWj",
  "key10": "DvxZcChqCzrxXxedrw38dRmeY2ASASchvc3C5FZzXXQd57V2cLCo7LoXMQA8Cy3sRKS2e7tDnxRiaTztAafxhCu",
  "key11": "422Rc1z1qSsrzhsppE3t3zs8sRFLAhWjbrrziNSTUP85rtLqfLuCgbd3p1B3JATVNcGLybXkQ16QPyamSEKEqtC1",
  "key12": "2Uy7cFGkRZpvDxqsr3SN9yCjzGvqUatozMiDkAjSTwL6RKTK8DACHmK1hBtSa8M2Fk4aJnhiB4vHq1w6cgKPgBsc",
  "key13": "2aiwzFvrxUPUxVtW5zEkCtyQGDswAxaPxFZFiAJGDzETAgqMziobBZzcLj1GwigZQonGxD4EfUBszWiVmXFrPWSK",
  "key14": "5ypyWa4cJWy7gYz2CmTafcnYWg3Crq5EJfjd8195urb8B7Ro67XdHE7GFwmfLJeLQbRqRqsWxq8n9SkXUu6Fgzmr",
  "key15": "4ARpW1iHd7kdqRbtYSpj6Qxp11BHA1qv2rssQjkkrPNzBEvMSVbBQcC2wZrbqc3QcUWPxixwBJ4vAUvnEgv1eo1C",
  "key16": "3DTM5oHKmwTHjt1wHDz7rgGY5Wn7x8ogfPzMnaWac8BHQQJdfw2kxaAjCY5a3ZvPmLBLUB4iawS7SB9YDyjiEPXn",
  "key17": "7B8yqPSsui5atmCts8hzKncvr3zGkcePAip6xuv9kCyKQkPJJbBCMG6pGUq6risvhE2LGbLNtENz5G1pHPRN5vH",
  "key18": "3eapJRXx85MT9taxhTqskWfHTqdGTesNUZNMos46AZbY9A4fyz3Yvn1rjNjrwpY2PeHbWDW2usz3gXonuwUfpDff",
  "key19": "58SowfbpECUexserhC3EKKFttwWKDrV8chswF37Um3ABfQjuoff3adGaWL4CgV31qkjqVK1ZcySwNcVPatJu9H2n",
  "key20": "3irEgZEEJ8N31xknpYdLtxyXzqrFqhyxGzAjUCXiB5ng1bCm6iUjQQ9Rv2kXjd1MfgYpiKYCdSF8FweB9yTtQMDW",
  "key21": "5Bp6MF298NMYLW2Pwv6NKpvieMXbEq7gzvrWc7qDTE5doMCRSoDuZrWgYkigqWjACm9kXTxkrJCib7DzD58uCcQf",
  "key22": "474frHQQXCN3be9UHGUS8k3oNuHrbRNVaDBN5wjHaF92kTe7VnkvwvDXbWAEX9mRnJc6xi33dAQaGgrwxB6Ln9Go",
  "key23": "L1jVPzP35RoYz86rVoANqDHW6RiazUhrjfymuckKuwDNUHW1LdHiBaQ6UgZg8vKyymrHbasxPfSKgxzY8AhWaTq",
  "key24": "5dxfuVYMeETgpXXkVT4m6p4jGLQ37R1qyRtCK7xCbxaSpn35Wpsvrrxo2kP9gR7LaYpxHdWNUezFkLFp5XPirvVz",
  "key25": "2nuKgAjLfQFeL4f1rb1cMWFX3QLuSDwaVqArZHRdgQpKj9pjAgDu3HVS6h7pcBYPbKfh7uWyuYUSTZPDdbMFZNy6",
  "key26": "34GJKmSN8yDA6NJAx5SZqDdfhFM755EtAa2x7RZf1RuC7FhWQ9easWoB9VMEe6qpbtqXDRw7drGhoDCc8zHLkxJb",
  "key27": "zazUkoYmUqFcpvMed1sF6fvbjagDfWhfb85KwVJbiJoTbNyPbF1PveQmWvjiNLmJ3cG7XxmPcjWDBGj3xN4anXJ",
  "key28": "4z4maHPHKMCq1ZPTtXqgbgY4MW8Wvc7cuEHANtCSL62Zzcr84BbUWoPR1YxMY5rwNs9zvnFd7SkkpsC47qQiWV26",
  "key29": "PHN3fXBit3XZPnUuG9QUdTWNXSbyA9UYeCvC41mnreuNFsNNQaF1ARrmCfKMEJZciuWRypj6nbZtZDmZu1pLEdE",
  "key30": "3mFJPknDkJjNC4773VYUEjGZtuM9euN1YjtUSY5FnGngJdg4dTEKcBT3748jCztThd5kiVp7iDiT3jGU4vSAgudH",
  "key31": "3QBsNfrc9JXEkCcrkfjz4d4cHsgHiPhEZ1qRHV1rXVdMN8wYJHtzetVamV3r5prpANdd2Kgv3diEVDkq5m1LUF2U",
  "key32": "37sd1Fk8HewiWJR3LHJu2531fVxaJRdf4QE1Miitr64J3wdM3iWaCfLiLGkaGM39gx7TYShXHkNyANKyM1x5cNoN",
  "key33": "4W9VJjBtanLqTeRiuvrLEKj1qrdq5FmupvL5LtThUxRB4AGYHtE3tp3wEGmxjYeU4THxBuEwkjrtEjoGjYag5DmZ"
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
