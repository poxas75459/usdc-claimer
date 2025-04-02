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
    "51QsdYutqq1bEjCJofn5V3wos7vjaW7h9XjCbqStEY1Q1hXJRj2UnE2aQe5PAotWL4mguHNqB1a34uwzps4JzDaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZgqWw2f4VSJKTgGexEJmVrRaU51eAEd4gBndPKqPZQDG7FDsEzxUDF4WdJsNrYjDwxcmNXLT3oaRMQ6Zg5wWe9W",
  "key1": "5Fu8NgTCySqVtDLE2ZY5jLqHVQcv3ueboSx1kiaMiuNjxRWPu4Bx4q967FSEdUXF7h6g8xZanBhGGqtHgJfqrw3K",
  "key2": "4QznzUinpHXeGtTJRt8AZbzsTD8gmeLJjJByWQhNe3Fc7iszrC5PfTdG8ySbE8MY336xTQ9ZfqWKsFD7T7GfUY7j",
  "key3": "GKYKpL5rgWtf3tWs6yYYLp4tAPwyZmoGu5srdgpvvcyrjcW9x64oXybnALp3qjt1Dthz6v5ctvNescYQTN8LAcZ",
  "key4": "kCMkv1pDHY1j5vDyDdgrpVK5SqDz9GWvKsMERSXodxxciPmKYJMtJ8gtWP2CPmXCjZcL8uRUXPVnG6A6xzmqcwM",
  "key5": "32As8U2x7iFPQhxo8fbhoTGxaqXT2NBfqqdugpdbDBWKRy2pLFoGopR25X5XimtCMSLXvEbE4MB1Z4iWYZGncMuj",
  "key6": "2PS1QVnLmdDP2iGPpeYch4GjqHXkaGvn1TR8CsehF8M2L9x79wMpraivgLUSLV6g4EuzicpY8GMK5c3HfWNjE88H",
  "key7": "3FuM433FAW9gaDLBcQubNQjv2wQR93uuxisZtKUAixw7xAiEyQtRCwkMFQj1hfU63kTBuZDdFk2swVYF3DYZcUHS",
  "key8": "3DTqjQcJBUPg8R4rYmF7WRaCnjS3wLRitQMZte1A5oGyyKD9Qz7YzVaGmJXu5GBJ5ScppWaqvZDnYREX4wRWSyn1",
  "key9": "3K9L7xYUaLWGraQeRHfofEKDTCGKTe1ZDNv4J8e8fhA4EzPG4U6JNiPjSjfR3xJPSRMnB6xvnytW9xnEJMoPomh1",
  "key10": "2HPb6r9F9cmUhGYbxJwfvbHXpmQ5krNNKSRmvM7YaQSbfiH9CN1uDGe9vC86epG8M3gsKaAPnm5uJ74YbRrDd3Ly",
  "key11": "219uuvsSPVfffxgLNXHjwmCQYbaPJwunFg9goa1wTN7FeX93HY1BjvLP34ZXqaQP7Yzm6h2bGwU6wPf1k3s7kJds",
  "key12": "4vK9SSH73aAdfn7kYFuAjFP6u9L3W6eojDPLER2pLDDcymDBvx12X2TWoCCR5mmrb6CKY9fNQDYbKj3VSHfxkLK4",
  "key13": "2HcSP2LoAdZYeUhr5XS94Tsyjgm133YzFZ9CXSfCiyc6WJbaK1v2ThyRXEtHcjjrwibka4JTCS5HLTaLFeuAvxkj",
  "key14": "bGqRGKJukF3YEXxd4EjCJxWzLqHmVcRJe5vNm2hqfcmx5SohMfvUiA9ejUC4umF7RWaRofwAkY3mmivWPCsrBDp",
  "key15": "2MqegCXFFiyLts1oG4fdirWhCAZrQSSkYtSriN8Ltmuo3U8do3SX5qNHdwCE58etL24WuHDrTN55Wqx7WMXxZCma",
  "key16": "4gHePiwKt74gmMr5yoyoWEX3cZ2eGoE23ZvH6Rv5Hy3F5zwoGBXZGADpSYqgCQXDiK4fMSXHQCzs6ojVGrHmB8Ac",
  "key17": "3wvH7PusmmFCVGpuheN7w1DYAX8seGBQNQGTY9PZ738rS241yipHatAM6z43Pwqt8eeygKiqete7XYNGT2L68amf",
  "key18": "5aRQS5SLY645BSat7f4FiuW2gtTvPCpQf2L5pxqpcfMBrnBRwaR2qhW7hCLCsQbHJhm8dg595XV4V5TagHcQQdzm",
  "key19": "kcRqL5TDxMmuN5oG8ChDnzNFZm5tZ3pcFyWqc5CcHDajnBSVJN1a4m5UNLVrkLtB4Z4CrAt9bZz7cBj9UVDpmAV",
  "key20": "3N9adgzec6s9rGXJREuw52RG513VnC1jFmLj8QvF8jPAQoAXqnsgJjyqzBG6hipsC31z6WsLxsLbAhZ9Dw8rRUGi",
  "key21": "hMuyNjC2HA5Bpcobk7jSZXyc6niga2dduXGFtM13fahr948o3kpmeYQQ7MZmz7RX9rtaTwR7uoTkdiNw2UuvaoM",
  "key22": "3FUPgeHCFxP3u2eeQFXCPhRRcPNbX6uFW3zhDhukYQa8AeGv3a4hrfijARitkR7G3vpQ2kfeAEXJ9wfLgEMkNmdG",
  "key23": "4rNgXxbAkt1pvh9tsQL6Wmzj7SUoqzCLvJX9QJ384xRxtJWEm78X4Tz2ZxyYVitWgvKbFziWJMJKFmH8AEFkyWLm",
  "key24": "tTSytVwxSnMiVkM1C5Pepi88CgJ3fsm2cgdYNk2HiEhRBYBiHKrQpUgZZtdNT2Zk5JuAS3QSYWA3ksFgHFf4K32",
  "key25": "51uZdJ5ieyEAqjCiVXymwGctf7JfE6VeDLNuFGBXDcTu6Un97cMoBdTuVAZLtfFB4kPszo24V3HSd9g2aqcGNwU9",
  "key26": "2XK3e2F2HhHqqc8qv4CSgwfkg1jhPe9AmrjxmZKLoy56gWaRnFzS5rQfRcZkQ9BzrmmJMGnQerr7MHSZN2U5TgYz",
  "key27": "4bBvQb67VZVZmMXTEdFjzwZNTybzdRGSgFpmH6eTtVeu3RqyZyAzqvAq73kbPDZ8AJ88KsYAthyUJcVvRD8DPHWj",
  "key28": "4dEYXM5R99CkE1Y1BkaaDNu3hqhNbSS43h9UDn2qtFKVn9Ee7yiZEnFZVExEu38nZ6t9AiSGotyT1TiVrtp6nEpG",
  "key29": "avzTDcA6tGR3BMeFKDuAcnRTNwaDLZzHsqbhQVTHn63TPwue1Af6SwYeHpAXgrVFTn7cMnw4iByYfpHTNEhws4q",
  "key30": "KPMCpYtpXnsH33rYa5qQu3eAqVio4XDFoeefTB4arKR97okaxtT8NcHQiKaGaj6QZibQeU72LGepcZQdfV4GPwm"
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
