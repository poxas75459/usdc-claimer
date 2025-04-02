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
    "3DyigDMmXBJSpPgHVtwQLB7iaGpXx6HFBacpT2Z5tDKVfxeRZcLF796NCoZFGjxAqDYEy6w5zaMrFGhm6UCcJP42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dq97CSbUQuhG1uXgA45hr2rkTfdHUzhfXNyfTAwUFAvN3rswr8qRfaba1D1UnhAYqx4kywtyY6AyxXjrHdY8nVB",
  "key1": "5xjsXTyQci7jWRLxA2eFHwTW2HgWEWjXhrgavKMRDAUdWp9QBENiwPmxiQnZmxge9Nq1rG3rMqrLyZHE4t4zM7z7",
  "key2": "2PKTMPxpApifkaHuetjjbs9GCRnWrAKuCUnz8vb4kW6x1VPPstzZsAGPqd5HFyphVpCURuds7pBQWjMVgrLRRGno",
  "key3": "2FP6RZyN8ZefhrgxVbH8fNv2Dv7B7U6w2mVuuDaMHThdG6zNn6MPifPmPiXKec36UdysiVdnPvu6ZEMQAUe2KQUD",
  "key4": "5wW35hwo4jYcuZE5LKo2w3dyroRteNzskaycyWkVVLUENWcmqKajFjb4GtFVstDVqqZ97etZNPdWixtmA7CaVFNE",
  "key5": "5oW1RhegnWu3bFxFqrFkxGg7gbZgFfkYDyvFnmZZxquyy4iy4aTGwpEpTkegxZHogC6hFuHhJV4n4JzbXkdiJWfs",
  "key6": "5NpZSqVRMiNnJRVskUYB2hFfcNGE65YGvqYu3NDMnnRxRFjej5D6PczGU3ybtxGc44xGK91miusXLCqm8gCJdPz8",
  "key7": "5SLcGU8W1HhZQe284S2K5hTUqqkrC8vMjzhmPjZuwhzNDMEnGERQgDfDaVmTbNDY3MhinCfWe8B6XDbZVuFE5vvN",
  "key8": "4gc3FieWR1VKW1Nc2TJ8kkeQ5u6u8PNzMELFVdbVLu1A9yaJ7jMcVTBQXYvaPEnK4SV8hpvtpADTJ45UFfW1oqya",
  "key9": "29kCZFDcJTnFZpSYSTGp4ZgHVLG3oYANqCCgLGpGoFWRz6ZWA9fmHLGmM3oTbWS8tHA6Vq5RcX7SAfV3Y2fux31t",
  "key10": "4GDUQqLLmJymV1z5Kgi6x3LCcZ4M9nYefke1VZVYury4KgfbHdgujyxRNBXddxRncE7da8Nphd3Yom83Pq3VnnLP",
  "key11": "5crziPXfJjR53z5SGCwPGMUtPNUArcmAXvLStzWGBZm8cmRQ3HSakEAjPhLh5tnaF7xchgdqPujVM44CR8XCwpeZ",
  "key12": "aaKjp7vFuuvpd51QAzrYB2K6FAU1Wrn27gdm7CCfEQxzacbK31Ssun7j1cznFy3do6jZSsMpcZ8HYC9RkvyvFaZ",
  "key13": "28Cn44JrW84qxa3temHcke4rzUnpfemqwN5Dt6g7BgKVfKveAC7zzAkw5CgX9cKEWg5JPSs3FA7D4HsQcRwXDaS3",
  "key14": "3gDhu8Z7cVU3cJw5jNxGbDV9RysutetEZMBGdvKAWmigFr4u54EtWFB87iawLig8AbUDNxRP4pBi3hbUC7nP4Ric",
  "key15": "3ra9e7vTq1isaSNTs9nJzBsHtRuwYgGkZNgSdJTVFqXPs2BfRinxg41k8eHiAxx58bcSA9Z8xmYBRStUSjziZ6o",
  "key16": "4khQgLfPC4VZr9n2tAwHqzEdebgM2y2PgwQWDsfwMv9d1GEmK7mfYwy7HZBXAYcHyWae8E94i1YL9RQkYUJCPiVZ",
  "key17": "nFPtgTBdEwmTR47DTmRpJT7fS8m51FtEDuG4wc6PA5LC4nQXLprW1EgZr5a7JZDNZqRvZeMPrkXo2GiDMtntRf8",
  "key18": "2zr2WN6xHhUoDm6B4xSScydoFDDtHrJ9Rr8u3j5CjoTj9BuX589bubixpbRJ1sNio9bbexmcCJSVhzrf39HWJWUq",
  "key19": "3v8pRBVAtRWfWVgWLCyEFJh2BfkBXbcyehr76tyY91w9jfSVFwedbx19PBu87SSUuHT3jgRm5MUupBQbVuAdxbah",
  "key20": "37w8jVRpYSQEmcDphDa8Wjn63mrMZMEwxAAhNMQHuSU7zMYTgZrqatgZZqd1C6mjSnGE3TykFKtjrvcyjLWQzJA6",
  "key21": "2QmcEubMvSygfbVtDhHJMTYgA8G8vK56pBVLApFnfZHHWdL5UzPw5M4GDufzFc1T94pYwCTKurSDukH7jmQ4RWre",
  "key22": "22YQcYr464pjXXAJRbGbuHYyiYH7Jyn1nTBAbgXmxALgmVxJ7bsdCCYXui4NbcqdD1Sz3qQtWAXqNuQvovEQdHCZ",
  "key23": "48vRjLgHHYdU2861Y9XyT2aH4CvrbwQXBvgf7SatfSigRne6xY2TtYvUfXk3AKi2yscQn18RLvx9gwTCVM8RKTYn",
  "key24": "61k2mUon3BcqwFkBHkGck9M1VriuTnkrK7JbH8TMueGdgsETf1XuX95nGvEtiju9LtA1J7a91o5JREAUk7J254UQ",
  "key25": "52xyWJA3KEbfqYoJJMWZ6gAvwCrVwC5MrKuf5kRzE8yoYrkffh3xSUBYjop1NTR7JADVW3Pv5YMpjc6GWmxtJgzb",
  "key26": "31NAD7hekrXZEtCmaf5epNhqn7EMKWuEqbmLZRrqteUUy4oSJHFDBpWNnkH7bwUXnxS5KCZniZ1Sbk7TMoLL5p4L",
  "key27": "5DFq5eoKknWr4YCiex2aYqbPZQ8xzMx15zs5Uds6a166n4enfkZzY7fm7ESDpfuGxtAg6tfWFXtFcphUz1x71jZ3",
  "key28": "ao6qNCpmXozTJY85BqoQHwP3VB58n2M5r12QgxXyAwUENGA6UmPbLheY92UquYsZ7ZxGgzGNhC9gwKgVrX2m7ei",
  "key29": "5BcPsXBD95fHsRBWG6mY5hw7EyMzK1r6PALn4sE8K1Dk2K4erBqXjXUaFUDqEhyVvqepG4T5jFe7NoEQZ6vDWzTy",
  "key30": "4mVwbb7F2JWS59WyzCm3auJnP9Fv9n3muehtQjZdQb4caktKANPgW6qLZ7ioGhTmUoim1ex4w1S3uS2r2Bw9Tfuo"
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
