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
    "3Yj9f9LFvnCMgWkb2pP1iWMCnzxPAyZPi1h94ncCR33CVPaVFQp8RCdcWQV6rx9jgp9fFeXA9YEvaqqyY9EfqSLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CoC9zpok7W2TcQyWzLrwKZqArh3wWSNMTWQcRGg2uXsVLbgYsZ4UWZWMytczYKnGQP4HoMrNfHFeusycZPbEZMv",
  "key1": "2zfH6LGiChuf5yRFCRyTdvgemjjaKWKYDrssVRZttYySKDU1vnZVUVWhCAi8aQu6SVxHkK9hmn4VshDot5LwpkMB",
  "key2": "3vXBKdCyP1CkrFHxfQQAcwnXZ6CeDJdiXjFWFDyBeW6oeWCX9VyDvsiqxLxnyWNPwEe5cMQ1D47r1tERGxv74L7w",
  "key3": "3TF4nWiajE4kmjbaJwdT14VCYsTLkYrpCwx7cr8gEnLnuE2o4kJFceEWqWQx71QN3ch5tS3UKqJwFiQ4ciLyU3yh",
  "key4": "2j714oh9zuQPPgUQKHwfgA2swdAeALwvvDvyr8Ag6NsiP6zFghuSegzUSCN9L2pjYKnRrC4BryeQLzGj7HPWyffj",
  "key5": "4szWiDoS7ZHiQAd5geB4hB5SczdU7xBcBRwGSp4394jiMti13phZVyoeDC8ES9Nirmjyuec2xsmW9yfWrRNG39VH",
  "key6": "2CguxwmmDtNNCPGUHnEcARWKVq8Kdcgka4LoSBZ9UMJnVerKvHRc7KAimXrf9iSvs833SNBMQCFqFUq3HxBZkDj3",
  "key7": "5dkxgixm7EgsYBs9gjhbqz1vDo8HrRS1ohimGB3Ry6Z2R54a1pG2VYZ7d9yxLaL2Gc1vSfoCEzheRLqC5282HxED",
  "key8": "5TxUyTv2QNgeYzngvBgcYMcQggFMCAJLh2KEVSXs7N3se25Q6SSiXSzSiQvjkCRWMpJE8sVhFyYW3bS4PiBt4ZET",
  "key9": "5FwwdiXr2DNCtJzccMe5RYExWMKhGTk5hFAzzP5fJvPUNPuwifkvxX9uXPNk5n1LVVoqFmDM7VWMpqg7Bm2C4egs",
  "key10": "5HqzBw8Hh1EdGNpkZZ9WBpcnu621vzGApTQnfehCmgjypjGq2YNExVbpRhb7zXxW1BTK95khhque4PUpoawcBGE7",
  "key11": "2cXZCTBkcb5bsPGvffkYfvcLUtEavsUzdJZrCLRhQQJRVawSBebvdDDFVtSxbDuyyQ7Neuf5SqohXWpfJb4Hkffs",
  "key12": "4WrJsDE6teyMCEjUbw8RrxYuj8h5uEhKQ3LufKcKH5USfChZFsF19oYgYqUZ6KBBMRcyhXuZRB1Fym3f5juct7ow",
  "key13": "jCSKt9evFkH1w3iyCCQo2G6jvoiJDAXeqSurrn1Z1KevWXuUAoooG4avGucNb2ijdP75sLoUqgSVPDGe1qf9fUj",
  "key14": "wg7DjaDyhKn4peqXXUuJeLxY28R3ddrhL6MSgt4JbAmBAFpWM9MTw8or7BzV6R8q6B4Y6NPpMma9ui3bUyAiRvN",
  "key15": "4wdNaVHdYENpkK3sCvXSJ2rAgwB8EiMmm2RA12wNu9trx9fUmuX1888Woa4D2nqd3EwhRt5YbhQWTz4gpgGhB4aQ",
  "key16": "67AtN22g9aRz8su4fa4Fbh2UrzuTUYrsWTJWiCiYV2PeYMTaqk4wtxt7FfrYu6dqS1nL1BMoacgDizaE2aXjfZxo",
  "key17": "5GHJgjqGWNqnQA2aUou6Ec2NJeZzYiCL2Hg9jmaYz6eEZs6necDXj3f2rczFi99qqV5XNSqJsXAky69rYZBzEAju",
  "key18": "7hqNvbXHWfWkGFmiebGFYzx8dMRpDXi7GXeJXzKPRB51Hjxayqk3qwtc5Uataovr3mTSM7qqFLCAk7kZVFSQw7Z",
  "key19": "3M5pDcgsjfTBKonUVVqeM7iDU1fyVUK9D2yLRmZ7D34Fp1TwbCXDizk2DjZjpT1Kgyh64uYWWg9HhYNSgxBm27dG",
  "key20": "5Nj7HtaHRSbi99borULYmNDhbMPQvzZ8634WvBBkcJCJbmCFB6CmJkRNPRQNBtk47pFMZnP7f86vJJ8CFjZX5fBR",
  "key21": "3bSsdBVL57DHyqKMPFtEkezewe1NH2xYUCtxL3JSDkWNKFP3CSRtBD9vKJPMEwF4dmoj8uAduJ9uRcfR6x18YXbq",
  "key22": "5CiUzEFWnp87p7dYEiaeFPMZpBpYjtdAziAACA6MN9AUfHMpu8UUstZr6K5wP91VBxYsM6K5L6AHfFL8EKbdR4aM",
  "key23": "3dvcVL2FLepNNcsRTszpZJLkR1XgoWsgqmwHJffJamZVE2wAV6MauXLSsGRG32coQCX7GJXXUoywLboaXyYhtqhz",
  "key24": "4f58KLmw4XcytntDkA1LgkT4UNMRzrEvp9g4Q237FR1n42uNB9Gyx6S7eGEekXLgAND9CZYc9Y38diGLLCBndWX5",
  "key25": "4QPGDfLon45tdrVpFytcnG7WCriKXWmtHzQuUBcDJsNTqnHKq3ATkP54fcYJn7citb4395mGgk6UeErL5baL3SKy",
  "key26": "rJUrEUSkAXeDNR7Aw5DptD5LEbmWMUi22qWQzDvvX5bFqyrvwBQQFKdUp21oNDzBGqnAQmxvHi2aEViyHxBpHmv",
  "key27": "3ETzEhfxPFYL9k9pkpQWFw2fwBbDKEoGNUEVNwAnSrdfTXhknbEG4eUAunUSQtiiLxfG1YXW7Q3zaN2TsD1LGmko",
  "key28": "4D8y8Ex8GG6o9dH7Kz9SmzrfdHzx8ipVJEF8AZxi1cwm6BaUi2LBZNotyw27eXG9WiwGcCwZ7tFh3w6cEMJWgoNb",
  "key29": "3Ld4kZAMZpsnvzYNMEtsew5V9rqSeQUEW6CiwiFyM34hPuQCV1KVv3hmfpc1WMNXEYMPMFk8A5b2XPZdHw8Q7pEL"
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
