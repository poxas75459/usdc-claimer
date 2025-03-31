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
    "5oYS7t1AUKUsGCMRZ8B1BVniYpCbJvdE949wQKLxs2zJg4RKYLXtXsuPv3SNXHyD4mEEK9FtFBvK1jpqahNAhWAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52kjBy7nJAiA73a4AWf9UgvueZdmj3t5b7LmZxjmoNTkgpMMEoF72XMj4BtHZu517vzwGhPd1dbXXoxcYuNsXxXx",
  "key1": "3V6R9TnuYPWerQrcjdMRVaYn5fXgkXBgqGXGrNfZfJ6sfmmGuN3N2P8Asy4fArAfoYepeFECTLqnaQFzFGQjnckD",
  "key2": "29wtm2Byocn749Nma7EQesaH4sPPzHZhoY3cW27AuHct8eR1VfGESW6zM7oSSQHCFbeMyBiFjuU7QRar1DNsQxQH",
  "key3": "2QmEejcTCPGQx9aTiefZ6bmkBLqLXLnEb5cLcxUbNpDTw4QbfscL3iQ17Beum8U3BPdKDHH3CWZazTYuaALPiQHY",
  "key4": "4UAfNqDvVLhyBWUGJBCLbu4NhhfPizuWnqihddZ2pPLxC1y58UatGzLvNMZimSZYP94Qe47vyAthcsEAe4g8gcdW",
  "key5": "4bDk6qCk69MfewmtVajK8d9LjSy8MzURXYVVcjWDGSN7ye5HgHwsrAWc9TSBzkCkJaVfmHF4EcxBhgn9LRSRg7Wz",
  "key6": "4fXuBuaSNKg6e9ENA9aEfFbuGepwrSkt4nxaiCdbKVptn9Z9dM5P3eTtR7C8ZN4ebfT2EpgZMcFpcUwUMWeCM3Ad",
  "key7": "4WijypBo87EvJ4bmwT6yYUFNMtZJejksoTdwUykDcyyjMijqNNBnpbrfzDd1piT2p9vJHBXn1emEv5C6d8GJkhqr",
  "key8": "5KDvPdZ5eHCd5cavS6SagkXErcL2Sg5S3r9FMz4FZbZwqfJbxcddtxsRVf4hmePcMan9tCA9Jqvys18iW9e9m3Zg",
  "key9": "5Z6mL8HxfVW3jT4xdZNbjT7Yw2ccmCEAeJWS58i2s8mPKvxREmegRYGyVvpeWHjzBss6vwCQJbR19fEvm8NRSDpm",
  "key10": "5EyZqAu4gUuNVp9Hv8rVDM5AA2cD4WGUwGapziKHYMsMaMPfixTit8P4TapexT5RuwDzkkrYzUQNXGn1yh3jFYBU",
  "key11": "2HGgSx9dDjPChsa4ZETBQyXX7ECXdg2JkQptWCX5s5T6fZdc1THte5UypjRbMRGuxgXJygpvBaJK8AaRixT19VV5",
  "key12": "4bRDFP5RNzTZXCS7DHHLc8ongM4AGc9zobBWWuSCXbsMZ3ZV8T4bodNSF9zeKLQxLHCbnKM5JbJqjxt62NX6Tjb5",
  "key13": "NXbr15FUYjZDfRA1SQNnhvHpc5Rw5Y9avPRSynUszR4yihcZrjrWUn5zBJyg8BTqDCGyjCDbx8YhX379GvjjZ2D",
  "key14": "2QLPzQFtWHuUVBjLioAwU5EHnfpkx9LDYrZEkCCfVnJrYd5ScuWEGYcZyr822ka3RyeE31APKw6pweyXZrYMd5Qc",
  "key15": "ja2ZaHniaV9eySQP3ViL82kihMVyC6VjiEDCEaKSgV7kFGRmNjUVxDRMkcbSG6sA7NDuWwyhjduwDgwc2APiidT",
  "key16": "35FV1tVXbAVveBXEbqA33zxnLj9uRshVUbvjFeCGQ9X7fi9BopMB9ES5ZzG37Q5TBdH7HubpXLp7x3j31qwj1PDu",
  "key17": "tS4KoNEsMBdcoGBpUHc9HqH2nVnsDagzt9WDyT4NW5YdT8rNhCr5E5AiBx2wsbki5fx6hosjhGr1TzggEKXnt1k",
  "key18": "Vy3xZKuob2HxZDhUqNPMnA9y7XhQoW51bukvPuiEt2K8AVLY4HE7NVGSzoBUu4bJ6M3qm7zKUyjoQTarwt3nxpW",
  "key19": "58nHAg1WMjpQEdi9c8r3wXB7Vo5sca95kbnTACGrB45piSTzuwXxcewnxtgvCZw8cTJgC92xWoVcp88Hr2X29qSG",
  "key20": "5kpLzng6JmZnnjhRqioEVSwUjY43YLKQnUKWfmBTLKvNWcPKS7PhNzM7qvRWSNnaUV7vwXVR8Na2WHqcU3ppB7un",
  "key21": "2SCBsqp3v2Du1x4HKU58oiY9GBeMW4koJbKNr4Jv3RGEAU3U4Aw892hAb9wwZs7XbNt7UwYYdcSUXG3PoEjaEKgL",
  "key22": "2KnP7uAXuNXuJQ3PgZXSrUXN6Crmq7uxVtzSNJhdu8dzwnNjDgADHFTHu6T4ggvQQE2oE6Ezy6vA3695r8DZDuPv",
  "key23": "3V4dYpYjEcK1AD4arBiLD5rZgB5cjvVgx9DpU53jftrJ2Dkp8e4zo5Fko8y1i7VLa8qX2wVPYREXTdAb9Z9THezV",
  "key24": "2Aq1G2DEWQXdyjoMkmsNkp2bdETH34rsFmJuFdnvxRG2vU4M9D2cjFMNSK6wwyVsyusV6eV6cfZoT11s6w3TAXbd",
  "key25": "4FkEXDnXGC8wHcKNdbvRduubidnBV26AoGQvKtQTVxM95fhy9Ri92yc1iYWC1AKbHgtM8jNy9VTzWmB84K77sXMz",
  "key26": "44noMn9dKcVsQs3E2xEmnxhwQyDkoh2PR9iKfK2kV43bifqvMEoxMFJn3expeJg6sohPPQwdmknAR6R2r3vfaLK5",
  "key27": "61Aw7zUupDMGHBX6E7p7ihAkdHZQXHGqwsXGwhUtbqQdd8kxjo6mJzd25ddVFBX59dGwD4wiw4ZrDaNqUxkSZUAS"
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
