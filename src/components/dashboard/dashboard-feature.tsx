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
    "4mHv91jnswjE3qXZY735hYUGmgtESRowYp5rRaWUiFVSaQ4fjmidqmPfjpAkLxfDMnrwTXRabLbEm6eXb3pPB2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25orA9VNHNPmE4dTZF8ejRbKPkbuu4McidnJMiP7LbRGjcF8wjK3VYmJXUearbLk1mkru1XsMPKgxkzmNDU75RHs",
  "key1": "qeicNaJdECpCBCBVLrCqQFG37Ckxui7oRGDXHw57NyXdCEWhS9NhRF8pVWMsEwkYyAqh9ybQ3ukJagbZEzxDc3Y",
  "key2": "3itAFCDrMdXG6fV7rrEdeSHv5ZnN8fkKUnzRpk43NUzaw1fyx5DfgHXk2yFH8CDExwDzgNNECnBFNNwxeznhcp5B",
  "key3": "4XDrorKZZJyf6uKUR4YpQYAYaCvQsM8zKjvMtaHKDtXUYBxQasjRR1P8yPW6MJYmerAZoA2MjTYY98uRzyEzaGJz",
  "key4": "4oGKD4PBSAAXz185ZqGxB5nVQeadzb3Ab9PYAz5YCvrBZ9Cyb8R9vwwv1rDjQ2s4guHygyc25hoGqVsm3pTwZMZp",
  "key5": "61jjPA4V79WtVsxAbLFpuyZLqsjv3XsGpoh9Pp2kYYavK8EQnKjFpf89JzeoNVvyGLkCSsBpxtcERS5L96QK48az",
  "key6": "2MtyuGxYuWCNMuiSsLdTprwiEbjq4LTCrJ8GBKqw7QfSFRJtHQgTrGgeSYEeBnYqRrBfRSk15A9AAUn2JC6nrKv7",
  "key7": "pqjWa3AjLh1MRPc8e51myHtEEbFHmVzAM94XX5VqtFF1VGFswNAvHb6ZcUmPAf2wWLtDgPBpZ5uPTYF5jvaJpAr",
  "key8": "4xJ67NT7Jt1tBcffBpNG38PndWafRAwdbFtrhaGX2L5expSgNKtrh3dDgNGHW792qNqb3uEue5bpnudnvRrbg7hb",
  "key9": "3HABqkAvamkdjeC6SemdbCZcSV95j387tUJwDBbPKP5VGPw5APkVgbwEG3WAzE5APLHodt5eYUN18zU53qFg54sC",
  "key10": "5vHtqjXi7qLAQunuMxwU7RfmVTrdajtmVQHmUTGhf3fFJqxnizJ5RtbXW1HejjbTqixP5WKAv6dLttJ373kY8QAR",
  "key11": "fAZ2QZTZAnxpekTnrkvQJqdtWPcZCAePafaTCowrjB4nSWPRzkN6fSdntWvG7xfpvp1g9nUfJJSukH5qUVUUVR2",
  "key12": "5NPmuBX916W97Q7rZoa1RxTHgXSJFapT9qcpAMH8aJtL7NB2dGAZGmYh1WJY8r8eYSXfgYWQoEeZ4wWzQAuzN1iT",
  "key13": "3udppVfhXFjcQ7nRkbd67FJGKX6L78GjsBtZ9UuKx75zxmNqQXYgi5sW5bE2hCMQx3FYx16arSKQ3tQUfpbTnu55",
  "key14": "2wtpfHYRV5CGNBodEpzzMnTSexyVbwPF9ZT89LL8x3xMB5Y9TAbc9MLkkgTf2K4G4DhbRJsHriqwXt99yVPnGYYV",
  "key15": "3K4HWtRw1pF9AsE32tYmGYESk8QrQoPEUKk3Dqqpfky5ayYZNZdx5WYqjkMYFX8xdTg4fa6nTpMnCHTXUN2pkixX",
  "key16": "38jxNVQ5DiwaEGcMfptDUXPAcfAucsWL9QexULizgysdizsgy6GneKD23QGKC1sMWyEFmFcNvhUpXfCEMqBn1eQf",
  "key17": "5YQ21V2SZ76V83HN5fx1j4Po6UC8NhBqwGVG1e4mVVW99PhprE6k4KofdezVS19PsMhuVwkRdS1bKLL7AZFj9ruk",
  "key18": "3nQ5Q26r2G7zKaGAznDaz17bbk88arjvFzmaFNNpArHpJL8bWN96454b7ZSL1acJJyu5CYvBkK2xkjPMrVByiJ7T",
  "key19": "RzZm55Gw3ye4gkNs7qaoGzN6vKxr4z9YMYL8AqiM2GgS9cdUsWDVmNhAFpxqu9fXYBDNw3chNTTZAUehUNc7V6T",
  "key20": "5J6pa9nKZyLo6gfb41zxkm6qZhg48YEh6PDobZNkWap89mZsx5GJqHCQTktzLSBNDGKWche9a9S8c8d6zLqKh6hJ",
  "key21": "5K4uSLmeri9S3Jt9DBKi26sn5beD6FkRgZ9dZjXETFmYefGTkfDvWZhfWEscnoyfXAsCdeXfSrYEDQsB1m4c2GLF",
  "key22": "5Kuwdw3m6ng45jgJroaXeWW2FybbFR3XFbtHPtQM5HeQnmuMBSNtpR9ApWx1vp9kyrEUi4FANJhNof3cLJBjjEfp",
  "key23": "5W7pq4LsZQPzD44mwzDo1VSEQRT1h9NP5Fp6MM6c1sid3fUb6j2wH1cZibz8b97bsoSghixeYbX6TM1thb1rFG9M",
  "key24": "4hQGmUbfdBaWj1UD7co3Zewnpps5CAcVpBAXvuwT5YzfZW5ZGMa3yPALEv8uiZskKRs3mScpnegrowdzr7r4hYYz",
  "key25": "pHwhoJKCz9ZqpaLH8t8TjeomamFN59vgHQb8HfF7uyWjTEB6XMdHdMhdAsarcwTVtNS2pmNDKJ1KueWsJCYH239",
  "key26": "5YaubVcNShaH9NPEH193wbQk1vxhmx19n1Z5EZPHiFWNFcxPmcfMR9iid1fyu9RpCdfeFAP6KU93Ki9XzDvi7ftZ",
  "key27": "4szVYnYDuNrYD9ZUtAts5LFF3UVnXCZBZk7wzDUAYgfp1p4ctkFpPabrirQdb62PabhtZGcYvRx34w6PyTYhYUP6"
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
