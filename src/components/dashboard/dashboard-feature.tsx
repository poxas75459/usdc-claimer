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
    "4qfiKUyY3puNU6MUKEYvzWJiZwvTkZqBz5DAo38KRuCVHFFkP5qVerSNiMRam12avhptXR1JVN3PzqcApBRHJTnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2adfTjjFxpEqt2ob1DPsSP6AyNfVUxJN1hngbVmJg2di73Tjt76YFUFxYPAKtShj12sSja215RLLnKan7NJFaidj",
  "key1": "21Z4grB4vVwc2sZZAj8GXdM1Fh4PQCFUPdJbx8fZRFoxr32vuNdfyfmQLGFsQAau41oQicrPmW8Svwjd66u65UFU",
  "key2": "4o87y7DB1FBPrxdUvmWUb55VZ6GWt7waW5veJcZRq1tnRXePqmHkJpqV8hAC4Mn76HmXC8oNvnWqGiF9dz1PRbFL",
  "key3": "4bDFahQJ9z7QKNgjhwcvEtERqsW7yjAEwAePeTf2euQWprkTGCc78axCiCRQfQo7QuRMRKd54QmohPPsD83JXq9A",
  "key4": "4yMmms1dxudNwVGzHu7YJhcvoawv8G4BnqNpTXh6L2vp1gSThMyJTwyfooiexMiLp3NPc6JYgMp7NJ4whx9Uahmt",
  "key5": "9sZcVKskWyB5JoEof6WeQUjzB4mS3127ykWRrWi9dQJjkgqNd2t8m6H5HzvQsbAYgDDPCXjrHMMcAwqSbT9SjjV",
  "key6": "5bXQfpPVfMG7A1QX1kF2Qv7GTJKFkiHyM2qAt3iYo5fCstQfwFXBPeMCZazhAeUnEWFRwFzpxzydNjSWGCN2fmGS",
  "key7": "226YtzpyqfugNGm2urrAZyfmybvyW9EyoxXZyFdttrPb6Vsq3fZvViCytPLP6oYGnJcBvsGmvyrcdsx3Zg5EfkF1",
  "key8": "5z7qdC19DHWcqd7tqTPKVzZGfDxyeqcmjRuLRwDCMDaCGA9fh8cKbM9p4FSxVw6rc3QxzfqyEKbUJt6PgLenSC1N",
  "key9": "2DLpb3oPimng3yNoCER4jZtrjmiC4AkAe3R1oHCPZ2EaxjAT1DLra4T2db6XuNcVTcVj7ViLRfAQEWYcmYuoPd4K",
  "key10": "3dMEXBzTSPcvmz6fojH7JcabxYwjk2hB8nzh7vNPYXXGvgny98m32aQZRjSgc4A6AssxTfYj8289givss5KJqJ4Y",
  "key11": "3gpc6PKmhKvp8drBJerydDp45tJCsktshD3vVUdyAy8pKGGMpECAJ69u2PsDLQxoiTToPbj7FGN6xciGCRUXsQwk",
  "key12": "4KwvcHEmfeRiwcb9avRPhSnCWaUqBScdcG5Cv3vaSeyeoGsynaVX3FszaqwQMUzC1BePLmtPNdmxfAT7igYsCrPd",
  "key13": "42LrWwPQ9Y2zzNP3NncZT6PWMXTAjDamZGQzcKxbncqsk9qd5oAQCDQRBa7rKEZihZo53gN5X4e6mvrBjkL47ENk",
  "key14": "trgBibsA3X2A2CkoHy214YBzUPsUAeYbJ5JHTESLZzWKAdpjsw856UUznvAAun9NhF41teK7WmqNZnkexzbiuiD",
  "key15": "4NybZ5EcgFXKswuhJ6mMymkAGY7BthrbHQm7W8UgbXS3Kd9pKC3eP8D7TXhaVCqqTi9Bioa6x2JRCHdmyJnubkgC",
  "key16": "2k9jgXUBgxrLxpojva2yjQdrPZzJUYsp4n8V1eA7P8qZW9bdWSZRrp8gZ8Lrwgzn1XpjYNy6ERQFHwgWs1ifFhMY",
  "key17": "5SvVLJfF1CsjeSGTAUnKs5x4VC3pe6Uro37v4aavwhmRidENLaPbNSGaAiA1yrvpDgTq133KtV5YH4TzmewMddeJ",
  "key18": "2MDjd7QVPonopBXuvmQGmQTd5sE9VjAAFNpon2qdzrb1SJToxS8caCtBATZ8ojW5zz2X2pGTyg9sRfiLThjU8dzr",
  "key19": "2N5xNUNTd5NreWEwjSoGc56BXE13H4C3o59Csuu5YxAzBHY46XEj7YSFhcZaEd3D55MJ1aTRxkTdbk1HGNQQw1c5",
  "key20": "5CftJ9tQ7Wh3M9rfmpVYhSsgpiBZxMHGoXRtbmcSuJNspiwjmxgiRATJ92zXM9bCBGawuge7QhZM5dASSbfHn2NN",
  "key21": "3t9z9GS7e8eVBuyQosyav8CGhgd9m41WtV7rB7Trjdyr1Mts8PFRzZUhGsJGURiCYuggv5JckM32qSmSThbAFZDj",
  "key22": "3SZpSn3HCg1zoCYnP1PnNWcCuAT1DGJcg6VDyetVS5t7PDpGqxjjSVeEHPXQ4JydcVhR5ssgj6pJG9hngvT9dWS9",
  "key23": "5zGgWdWA5hFBmCQH3GeXHCmqoD9cjVFuGPLo2ZxmLsiUgqCk2G14aXebb6g9ZgfFHaJiKovU1jKMjKSvXr9ziiFb",
  "key24": "5dJzURsj84M6fPgoupdb2sYA8ngpKjn1vDJjdAmcYisPYfMaSPKCSZZYsF8fmob1SzZWBRshcqYHu5nFYg3YebVe",
  "key25": "4aph646bhHcL6TiWSfV8eWGYX93pVKmh6Zq7hWHDbSnX6m9Durk7WXsHkfeB3wLmdkVFTDwadhj4VDUyqnenRZCM",
  "key26": "25k1qQTdFbQn9SA5noEvtR2q6m9EQM4yfDaB8YYZ6kWLP3TDAioMZRP3HSncdBJK3cyZSh4YvzEpoBHTwBaAqzDT",
  "key27": "3HSHGpBLBQFEieUYJEucwz7m7WTgTgcjG7DVUszrveKXEsmSGdJzfJPm87NrDNVydTtJtbdVpKwPZTkwQFAjmLLY",
  "key28": "2MTCPza3LFtCPiGPGVL71RHXHd4m6mXuUWSnTgxB48Z8tQ2oxLEHrLipEpSZM9Qh6fBF38r9uNzK6hynxLgc8FT9",
  "key29": "4HSmvBuhQLm3hqKTZKxEyiPENu8xcqMqk3vf1nWw3SHkdSt1szru3A1oxcjxPQxmnanocgwR43BJvjfApQHPRiku",
  "key30": "a8fdchvmVz1T8YVUJufQLCEFX1DJXoircpwNz9UgNqhtsZLC9BD7aC5wGnG2bNfkyb621SuGJ8PxGwrqHi1AYMH",
  "key31": "4P7DFbK5ts25MbZwo1X8HxMB5RBS61JSXv7yhoNx3wo18SgbCXPvwzm2YghYFzqFaheHyg9yidPoHSWRTJtAYEQq",
  "key32": "64NR6B782uVNjddsefU2VxazWRgGyFMBWqeJHWh4RQuzWLN5caJFeAFfqk6TMXpBM6qd2eEcQQ12rw9A5BDZVMvv"
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
