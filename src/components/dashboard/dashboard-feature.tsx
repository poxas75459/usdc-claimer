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
    "265Bzr4iSznVgorbocUosgddWLSA4KEpzPn8ihrmyXq7ztR8M4yoaug9RSv8tWMfJ6FtDrFaDAASzKTb6KV1f1v7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rqw3iav77ANMTG7euezyitiABqa2ih4AjWa4nZLuGRLHeXub7STsBLSDHxz9FJbu1hS12xKvsdfKegDKLABpwdZ",
  "key1": "27yKdVMckyGTtQ3MGqANp7gKHoAGVpg3sYBdofwrizcUyV6kkWodDgefYYxCr7jkgKSjMhMXW9JbvBcriczPN2gb",
  "key2": "56vyMevWvkbMyDfUTGChgERHoyc2k1B28i7G1fhN9tFYPbvryivhdVtpLkEBf5GyBkkFvzyWoe3QuJDgfAtJe861",
  "key3": "4mHxDfSKxCAMAtpBzaHGRhH85swqTzPCxqbqYNF6M1jnG1iw1D9k2BJewyeo9LmAH8ApyxhZW1BXqxTZLcGn3nrT",
  "key4": "2fNF2oWqBUBtz66ygVGoZHQTiG2spdPd9HMhaWur6XwHR4p4wYHXr9B2TcZnbcewrWtaEhkasJ1Yg8kWfMrJKvYJ",
  "key5": "5347aecB2b3GqPCqM1HejZrXTLpyuX7RTeP8hpawknVm8PMu3YoTRoGQFHHs3mqFwfhptTz9VPGgWVDfLEuGbrHb",
  "key6": "4kdjDDoWcbJPtz5LMYspCgFUgNTJexFoitaSfSSJuzFWm1bWJStP2VpcXyEH9r8vgaRzZKUtqd3YeumYdFh9H6Sm",
  "key7": "4SnLjkXac1DFZV52QugCkM8JAzNZm224uLsVjPypqKLzJBP1GAzusvRBcgqM3GuzJW1WPnr7a6dcUCM2qHJACFAs",
  "key8": "2VmEervFGTB54eDr1PA7TSuzjcGLj5mQqVD3mUN9NbQEXV7dHXkMgQJG2tbNE9qHCeAPr5V3C26ta1GxVNGSiPiY",
  "key9": "moaLM8DaLECtWkctYQBwBiS1pq6jcKAegSn5Wb6TWBv7kKFMahVDfzmXq2NuCGYXuTmmNMkg4fsZdciCWXaD6vm",
  "key10": "5pxWJUp4EdWeaANXAHXTV4oH9bLjkgk3cTGA73U5jqzkswtLRb9LaX6cUN2zLN7CEV2DNrppVGsZ8pusnkn95faT",
  "key11": "5kFNVVb1aLKkyZxism7mjSNBu1XvVZd7Y5xBaJtNz8DV5236rAnqYAmamJn7Yr7mkbmu5SgMNKnHhcaE9AeB6Haz",
  "key12": "43NHMEfUYDuH8pNoegKyTNsfKMZUw4ZXCYRksEjY8HnxGBu4Upk1NJL3ngJtLznBssFwenaEtVrR2a46EZnQBEVq",
  "key13": "23rT3VuEq86e1XR4nhUp8ySwcMbgFr8cA5oGbLkHLvX5jXHPA6EEzoK2fc6Qndhpr1X4pB7P1RbXn8FxzCTXqtsp",
  "key14": "3mJ4qinbJ7h1xU6BKquCUY1tmtfkBULeiscu6FBtUVJ9zzSnHUKat5KzFZLR94DXRq7uHx4oi4HNUCx712ASbEZn",
  "key15": "5bnrgVWvvqxV25545vKW3HSgrrFvaZz3ampYkQVfXxhWA4NLFd4ZD6GYSGrujqS5bWL3216xRR8PcmVxNpj5QiYz",
  "key16": "5UdDNUdre3648qq2eW5Td2n9gqEsLXfiK5vLykyFUuBVHDJ2m3hYVsugtg6Zgf3yVXo2H4MWLdSiDB5v5231sbKX",
  "key17": "63FD7TnxxYbi3RFAaC6t1miTzjvPL4VTCPgGHBFTVuYWJHecAygwUcVhU5unXo1MJzWNGmkMMcSehcQ4stJ2sfs3",
  "key18": "3yGfswKAJs28ckKXcyrpRtDjMkHveFAneUjiRb2TV71Q4BdQEDo73i4oL99ozMeSzYEFfRpncsGyWBDPBAx7yPek",
  "key19": "2xHQjdhrtYWsQzxcUGUNuJTMjuCVJeKWQknomsmdgLJvgk6hF199fUopxCy7LgtMnaSEukEagY42vtntmaevRyJd",
  "key20": "5iHdyk7PDZkFHPctqzBV53TT1f1F3zHkJifBeDZ3qUK9itjvn3GyoXHtCUuBU2XDGzF3DwiZfnfHsdfwDzP3VDc7",
  "key21": "3sJJ4DQBuZSbd1bkgArDdDjJzRkA3RK9ZWAGETKCX4oChnAChUUbqeApnD89Kg76F5nZFphyvTWf86DDKWXf3f2R",
  "key22": "57T95ScR6Sq2HmhrEhyR7mXoDraGvyoshN9f6LqTG57TjX58v28vRvqZZwXykGb6C4tQSKBES6TinXV18p37twyo",
  "key23": "3UY4hzEghPrSG7ANtqykmg7ChvH6WF3tY4QihmjRCtvFWiGiDNmdAXAcZT6Dqmskc8NMn3UoMnxTARf6eo5dWQuP",
  "key24": "3WTL8RBADk3PWTGrSevpDvDMfLapGFLCZaQjshW1G963YuVXaAT2LrCBX47wjoEnULB7f1XbdkdbDCpU5uL1zY2B",
  "key25": "2eeie94rWdxUib6iM23cY92s4nT32ezJM1Cz7GTypafkcLtVonQXqCQBXiovYRya2Juq3P3pUMeHtsPmtgqxLuWU",
  "key26": "3v7JJ2CmwdFTAkjSNmoVFagh9TtZyAf4M4gz2Ne4ZKvhHmMasqNKFYfPrUCjKLNXS39r7HtKLXWm7yn1h1Zf78U3",
  "key27": "3FcTQtTCGm51dspjXVhHYTcmm7A6C6mXT1GCMHbHrkzKwW8e4VJWR9RATvda2A1VK5c5QEpWBSzinQCfcA19ZFoM",
  "key28": "2GXxCttB82DP36vGfEJo2MddMXSQn7exujcEQQ9yEvXBStLzZnuJq3zqWgm6YANs4kKQtjVJNU78ja94CKvcS8aQ"
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
