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
    "5wChqvC8F3FPJHTjAdftKWxt7SXybYdjkdPn6WentrpM9G2jQ4GLm1RgmbNV52pgZaX6AFHbi7TDZUQMph9ksq17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24xyezEXYc3GwNvQSftYcooiN3VJR3bU6AZnCvPQYwURNn2i7NyAsPiF1RrxtRFZWwx19B8pP1rCcZhf9MED3dzn",
  "key1": "Lzmdz9hNZYjzGyRRN3TbQ238ex56huUvXs3zmJXAeGPv9u536Nh3kSbwS7z5siNY6NusPTEFTdbkvWU6grCpGoo",
  "key2": "BE1yhsVBeZZ38q91LhzVEG1nW5GFb59Lx3F56hp1JgrQc8XpZHMVneNA1ru3MuvVYic2BAAoDRpM4sVcre7esqM",
  "key3": "aRpXmMdz5Qe4HrmpVqmJEahPZrqA2ovQ1h7yyx2i5Hbxj2VkxwiPzqnrE6T1LsBWsBebzMPQySF2camEwBN2zf8",
  "key4": "3Wa8mBzwaP6YdUNoCLsnUh1MNt7fmZmRSr8jr5idoCYXzyRnQzv4qxX98RStHYfdGgWDeRAbFqS49qg8r8oPC6LL",
  "key5": "L18tGeb9crGFsRYb2LwW9dGdM3q1MjspmcPX3YtR5mmDwr3qkTrEProkZx6fjwQbhMBRo9yLYHMtdXzdu5JGSfc",
  "key6": "3whVVuAHrrdbJfC9xiDwEdv6DSSYd5U36TipfpmUfKEBMYr9oNsTy7KNVpKearee72txKPK66qycCw5dEaHLG7QQ",
  "key7": "2hy4trHrtLxHQrcMXFw9VXzP2YSWvbRYcK788qZo2nSWnoXL7RT2APocUR1AsQPZz5RCgkPEfVsmB9i8mWuanET1",
  "key8": "34yTqPMH4Vz1NRuMfVq2tv4ZgxkPVjUAWeaahrJYq5oXnPMeAKyiKBVa8Hssz1FftirJU271PD9kYVTw8SrgmBMe",
  "key9": "3HNN5vjwGX6L9WdEgWW5kTGUEoHXrGwGY7uSr9U1b3rSKGGPXq6XErsmDn34bbDhDpKQFsy9h4XZqxLmxVNzVEZB",
  "key10": "2i5rNefSHEpfqLjpXDwH2b17D44iTs3y49rMcLJA1GY1zXcSwgmQkFFoPN4rnqbu8JteVbDtKz2p2KiRDB5BjHyA",
  "key11": "4e2Dnf5Ucc6gY7rbV2rTWJBdpLZkrfreciRGTxXbWASGPSwtqd2aGgTa1aCwTBtTQJJbCUJHwrkrTJNaQmsevTTv",
  "key12": "4itu3bF7z1RN5jWnX4EvmYdkpnA5zwQrAgopjMtvPpbAScVgb6kmYVehhRvEUKcXvzYHRzdgCsJc7oQwmrevF5kb",
  "key13": "LcV2ZaefLn7R2QQ3qmphyrn9oB8Zk7HRUMFpPsjb4sY2yQn6TxnaFRphEQm6tWMwhreLw1NntwxjXtsttk7LN77",
  "key14": "5oJ3TLdFstCaE5f2RfxFzHUwbWujUWaSkAV6KvPFXAiiFQR1oX9pHEhFdDZVDxZwqKEHJxkEZnbMwjAzs655E4mz",
  "key15": "4eMirvBfJzrTTrD922hTwwDfzfTxZBiTF9nP9o46UGUcUDhLGA1jTqebNwi1vExPX2zjoMSuqgGWBwt1XwzFCDhZ",
  "key16": "vhg1bXKjXWBWcNUVAnnrZTEhAJ81Ut3L49CqpRsKGthN65yesJr2GhYCN4psaMAkc9iePDt4gsuLr3Sk1NePQJh",
  "key17": "56GaTLaVqZ8ghqVGHLxeCBCBj4F5UmDgX1bFabGLmijfofFiVSn2dMx2mH2XNfovJc9sVvYW1LeRyiAJCjf1Fz3M",
  "key18": "3JC9C5R4f8LHKfVtEZ7tEQyxNDTb8xwVJ3dmKbLKL2BoFHcKqEUc4e8dzafBYJfob2j3YtT8V8Hx9E7S2WYWH31x",
  "key19": "aVuSs59m3vYMuUTU65NXkz5iETBEKQQSNBhQXkHxWZ3Ltg2AsYefKkQfzAxrFC2A35Sn6Fde5tonvMFhQf4cRBe",
  "key20": "5j1dRE2XcpA2PDB8CWCVHPe9Y6tLX6eYJA5SshyquyqYPnxnuFDAL47ZSVoPaGFgd1EgH5ZsoUMoroYATA4db2hA",
  "key21": "4RTXWowqD56gqnCRCsWZehVQoYuF2o1HSMSXvKmNGZzGwAVWgvWDKWUqMLizHX4LmEG4CxXnyUHorQz6TZEQTWpS",
  "key22": "RZGEorDi2Yt5vh7bWF7qJKKt1stTEv3uBuFTyME4V6x9t66gm7zk42uRZY3FqbQhjEPPSisYRfUVMFkd2Q7yxm3",
  "key23": "TW9gWZfiVjsU5zorTMW5VERjnhhnm5XG2LerR6MdQFDc8GTj5sMtYCSMfWfFPgm3dw3NJnAmAXmjGWvUnzNm3x3",
  "key24": "J8mW6nsHpmh97dQ3ohKZYYfHuyL9yX6ARQez1r2pYGwKN7LQQzyLxMMvhU99ECDPnn5uSnHNxbQA1f6nUrUERSd"
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
