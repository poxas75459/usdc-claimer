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
    "3jrCXjSR2NRCwaHRPzEbT5i4SSsKgntVrvmBojkchjpgDCphspSuzAR3vN6aScDyBNSXAx2ufNhQDmDjnZ2Sk4st"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mYVjWmQHKpW1NFEUhDCEx5PZKsu2VxzDRdofeMYvm24YrBgNYPEjjoWYtho1q4CjoXh6MfAb15sHeTXhB2g7ksM",
  "key1": "5BDe2xwTu78VNGggnRsZsQsgzQTKxc31kKjJH2qBMKdviVoVTFUvJC3vPUhbj7mL119U4dQayn5GA8Vgt43BaVVe",
  "key2": "4CvLRXzU342kAYXcYdsHmJyAsCsmXURjyoPWguPwbaYYDECxJomjBXyW4gwU6MNbX2SAtv1BzDx8KB5Q3ByYvUhP",
  "key3": "EU6MJ62upeCiMxdnMSdxpMM6rsFhMbW1BG7iK9wEjNmNK7xzePVhxqzCHXYr7oaBFcTX6iEQsHGqiG5ozjEsJW9",
  "key4": "4sYkS94i9eQoHy3MevLjFLJyusgNwFtz1VUcrfVErgkqFN7hC5L4qL852YzLtjBWBCJULwmBaM6Sjn2PSSgWD3FA",
  "key5": "5TZxK8kb4KP6QHXLvMrTQkYDuCiQ5pbZJhZ5e1uRY3NCYKdBabdZ4HTDJM5fd4qYRgUNTJbwL5Tv7iepYjSuPLsi",
  "key6": "3G4DFYV4uSBwWpxsYbB8Vrf8bZL7RaYjstRzZd3XiXq4t5gB6EgsSQGJJ5Pys6g84Xd4hTqctLPrsULBb1MYUhnr",
  "key7": "3ZWb2KkHjzbNzy5iT6kK4VN5aMP2u34dxH716rwPFuzxYgeHyQj1rru48mbL2tjXBssdmSKzKsTQayxKnxbpkFzk",
  "key8": "5Vp3Nm1fH9t1PgK75JFoiTVhWwsKCenCiHyPHhw82hNdfFSSsAF7vi5asfttZGfdmBDc6vAid5pEs2Un1gWbSoMT",
  "key9": "3KiNJWYujdrbkh33xN1Ti9Bwv1UuwXixW12ktAgXJwDVvPxs2Kd2VrFtjupq7x9ZUrVHiiomTtHXQryscy9Tp7de",
  "key10": "5mbPsL49EYdyC7HBiBP2EHhwBHmrUpvcKBFSaF5Wr2j7eeRxSfW1ZwbdQfmSuNsGKiV7B7BdtWizyJe86Zdkpk3t",
  "key11": "2A2pFkv7mGYKxHSbiZ8N8DRB2bQiewBpQj1iFoFUduFT1cdEgvsrgqGDUtz4JXiF8SD1fKtTMMDYfZJinzSvwvew",
  "key12": "qdam1eh3up2pQby8gpSBcTKYts3ZnmUgo6xhAp4jQTs2UbFnNCvr7ESLEu9fSSCR4fbW6euWdh3YWdr4HKiC1n9",
  "key13": "3p21c597ssdEGYBrtwjdB35FfsVfSutScuNJ84S7ARiSYW2fXncjphQdLdqSFLrNLBqpL4f3E7DaNg8cvhVgCYRP",
  "key14": "RDTY93WP1fnvLt1Y84YLupsAGJiQpvHGCaAJuvqqA3Zo64zWP9os7RDHjPyQhrwZUBs8pxad2vyecJTkTkAiP9E",
  "key15": "2F8hNX9zeMqeHMGDeNXGE7tiGT8kDM1Cj7zzrXRUT1vaVzp26LnLx6xdR2LDHgBthGuZgjpampuZnRhetiNsYbnJ",
  "key16": "emY6amAs35cc1Dv34mf3tMFvYLtKo4YNc9jQAa6a5Zu7hNupKUz9oVYQiF6jxpJBTBQgALT3pmW6hwGwpjF752w",
  "key17": "5yL9nDWbhLHKxv8W5zGdvcfFQPBBm3hFDobitJVJpsTmpvnMTaEKxC19sssjHzS7VaNcP8V5WcSAXZ9abEqvcJzo",
  "key18": "3n35s5m5vC7Y1NZKmRCw3SH4XAVYVAiZUyuGHBtiHqLpZVRUcbAbekECFi48drQdZS6pd8ed8wnKVrJerPYT6Cpk",
  "key19": "411E6aFmnCRy8P7uomjwnZWW63o2cpNuBpWKM1NguMXLDBQzXxvFx6c8LmeRGA2eEzBGug6aGjUB4K4gw2Pq8FKA",
  "key20": "4vLApDb18gyZPkSCAxAk8yN6nFUo9EQjKUCUyhwcP1Zg8KyetVgRFiSE6djW4kRL3bP92B5zLnqqVzMKZNhaJzCQ",
  "key21": "2EsnqwTnj8ShLKo76NMPqg6VfhuMXWAN6oHiyZucL1NDXZcyY5raCTcS4q8SFL1MTRFCUfNK3JUiLLFuXa37W5Pm",
  "key22": "2dXX2sTRTUgHS9dauei3orcYBNCgtt2WTY4XUUwprEifcHTEJMp1bDvDRiX1ozXhNNdqBK9qPfyrYDGsqynZZZWU",
  "key23": "3yzgLeAgSf7FEsjW2axNSsuM97csHzbv97fxZhWLCfZ4pi3GM9LW5vYMx48TXnCGgc9gC7vzKNprbxaDtzQ7Jc6c",
  "key24": "3NAXdC634peH9RX6zY7y1fj9Np9S3g7eMrEQTX4R2p8XXbLjv1B845bidb7DJbaThFC6JX67TMcrwGJyzn8Fi7Zp",
  "key25": "VoM1TZXYRZTkZec2Lnhbt1TNnWehXf7sQDMh9pscwRueoQp5QjUg4nzHw6sjxfEtSQ3bJqkCdi4sFYzd9YYe1rn",
  "key26": "2C8GnNxE8D3HVBiqfhJ5u6JZLQBw9UNjW6mCFUSFM9z3dcGr8Y1rK617tgc24gH1X7kWysdKtaLE9Vt8aqisUNqh",
  "key27": "4D5u39rdKm4VsshQbRYPTcVuYSg9nLnkTssU49B6UMF7DTJfaNSa3NzG1DD3aP5jtYnWJFALkJapbxePdLz41Pt2",
  "key28": "PEfeuhmvP5eaSPLnUqrzrj9Mu1fQbr1RoekowzUWTBFfb96RXBk5KvwxrbjXsWipibkTWR2SwHq997AvMHERB6B",
  "key29": "A7fnPzs2SRnZ7R93dc6RdYTjHM5PaFTn5C4452WVAryTcMLP7V7s2dBDi4SX2qxLawfrRWgBhQ1Lbr6UUuPRdZ5",
  "key30": "3i3xq312zHeXBWXxtRvofkkxMUcQVPeF5PdJzd1LZ8AAH4tB4BryoJyFzk6MkNZJ117VoYHFerUnRAcoMBy3x51Q"
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
