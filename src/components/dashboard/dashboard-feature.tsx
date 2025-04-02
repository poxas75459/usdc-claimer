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
    "2Fj3pmVCq1744AMsuwNQrobjgnC9iEzJyw6EyLD2PhBQmYzLX7t8R7f39EWeN24u1bP8eWh9fPwJEUxz94uoQX4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aPVPhdGhE1efdcvTaFXzo3eqRPE1WdFVznBcwz6pAEQTyQr15F5FvMznxj5uQDkQiJ6dvd987uHRSJcSSHBBNB4",
  "key1": "4tvEdUu9P1UBxN2LQfEYhiPJ86RzZahhBEZCnFkUWZP9tFNvsBKvMLsp7R6mRCRp3J3iRXD1WGu56BD2CMxt5iXn",
  "key2": "4uqKA7SSqeYBBgYaJFDCzz6B8YNys1MJxj9TVCBQwST2zpPrps4fEVgJymFgWhCfzN6Ee9ds8nJ72NjVkGfirXw1",
  "key3": "EEcXKen9NrBntW9PtrzAa5SQDaNK36H4DYLuKeD4Cj6KPrzF5sSmcVwNZdFcqFgWAsxFXQJFhJP7bi1DiA52YWV",
  "key4": "2PfRpaSLk6tPPHKCuJhh26YU9Sd8fNyof7gu6qA1Ca6qWW6e88P28RigYorJiK6cbtwCZQKiBjjQisi8Z4VMLPFm",
  "key5": "3PttDLdz3GZTAKcpLuVaW7UqFGnLuZMwXi8eHoFpCQjZoaVLSQ8z3M4wUCwJWz4pwDZHFrUUwKyFhACQPouyA1eW",
  "key6": "2f43dYtpT3BzKnnMHRnKvjkj83SG85ZdvSpQEwvxsWcwX3GLwDTsP93t2GKuQJsjqwa7sgePfqvFbsFH1EDTGASL",
  "key7": "2ALyotcyEqAsiHkxJ3gd6McFG7rJ3KpT8kXdHWr1U65FBHNFL3jpPGEPcXh2RtcsMwfTNzjT18iZ8Ha5o2Dg7ZQb",
  "key8": "8UAh3711wz4LssEbvVSzT1FdtLxdTXBx2hvBsoGQvg2MD5WwYBkoc4QEZatm6WNvRoLpMzjkHoMQTWdvxvP11qF",
  "key9": "2CyKK4wj3sqTqP2dZ8Nycq2vj1tPy51ASyWQcDwQgtXkeYS3xSpaKbqzgTP78WcmWom8bEawbE4B9s41eVzCxYB1",
  "key10": "5wcpMSVXwwWEUkyUFn1BfnJ8nd5E9nSYRGYnsUhM5yKbwTWi32M6mZkoge3iBZVmubHRB66R5NFPgKCwoFEfc5Fo",
  "key11": "67H1Q8DZ7NyGJZ1NMkCrMXrB4DJmPF1SzBmsm6UozF8hXreyf4ixhS2snTvuRTvmD4jw4og1z3eaQwLBG1iAagtc",
  "key12": "5NP6ueYsjqnnstzmyCzj9TS4K9EF4xYQvjbfXnDf3yuhdGNmbtomusHkogHpHv4wJaSsPn6pQDkE7JL5vGKWEhFb",
  "key13": "2VgwDHvFETQfVn7Lmca2Pq6V7n3zaqqPJVJesCYc1YtbsnhyeDdYYVWV2msY8gX3yvKCY99fkDaMiuzpaumBjmYu",
  "key14": "adsUho73KtJkDdNxMUvEvTSE1129y43S8aG4MmKq3eQCZDFd2k67zy3LxRNC56hkmECCaqve8k9XpTZz2yYeWvJ",
  "key15": "5NrviMRAn8J1LZU7UTxDQnwKhCxNt6SiamBMxvoC9TYMM6pVyVSsaZSnX3MLDJTde8hCf8MxNZKYjG6jgBfH32QC",
  "key16": "4v4YfGh7unatpSTKjr9W7GnTqrm1W61SHYoShMLLCRvGAMm2gHfYmdyayjvZy5UcoHMUASxSVBqegnuNZHcx2qq3",
  "key17": "3wEjpShh2mpsE3EXEPk27xJdBBxqEz3TVo5K7MtR2b82fZhhqJVwpVvzVqKHSqQyvUFW8KxUno1TZNwhcewVCNnD",
  "key18": "28K4ZGbCDxpQFhTmmn3Cikh2DiiucdTWPJj8ZG6xVD8ex9v2tcLiav7Q5JgfomjEmmCtgYeK1rxj4e6J136iSm7J",
  "key19": "3Kx4ZCCPbrija1PBnxc2m3JeeKL2ih6cM9rAYKyTcRUpN6Dmi9K1jEnaZyJHfktGgEzjLDuq1mXSGxRR7V74jKSa",
  "key20": "4ZNNqMG1dE3LdELtJWkprip4VJ9MZVoLFv5fXxo1h2BXmgHcnduapnZ2tJKnVU9v7aSaCo5dig7ks9fespRHmtp2",
  "key21": "3eZMrhvnN3tKPsuzXGBmoEte7WTiKNXtsQcFKjmDZdvFxvafHYj5r9mt7qDvF2eTCdQfc1ReBqhFKDHbCM1xHir8",
  "key22": "27mGTjBHf4M2tbyU56EtyAoxyAA3JmU3Dv8sWYNYhZXmsGp91nNjhrt9ERn3dx41xhRqwXBTqYRcpSCWC2Lde2zi",
  "key23": "D9bt47Kxh9bYxvq8CLVpdPjrNBt86kePUWtr7W5UgzrzCgVnYRaTZap4xXDsbhfeq8DuQ9JGrWVXtmm2hRmC1fB",
  "key24": "2vxiMzHgT4Dph1ZZRjk9WEEfJAvtXygNQbQYEapgJqnjBq5iHFBwX6GKTUuLoMHKYRi74oA78MvheRLXpQSJnxkB",
  "key25": "4a77m9VSvZojJRes3hA2eHfJXLsopBroxdqRpWaxhCfWyECn2Ec8dGLEpmcEwZziCUqbYFpDFZ3Ax1Gv8RnyhRdb",
  "key26": "5jTrxqeLWxmGbx5TgNPP5A2zFqu1QhYEhhDPin6d5asWPqEcRUDG4nvzN2g7JpcZ3uHxCa7eNQJ5kkzepLDXNco1",
  "key27": "5QG23HpkAhRn453HTkWNL5PxWzvTXP8ZVXy1wLLG6yptnAfmoyxXsRbKbyxDXogmPouaeNMiF4j8qu1mHSDZA8mH",
  "key28": "2oNuv59PHyNstCYrDGPpQBFVN2Z8HC44C8o6WTAoeVhu5GPq7XGusL8wX3AVpnVx2Yd3dpXGvSEX3TzVa4WgosBc"
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
