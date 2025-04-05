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
    "4TovbXF14LXv8x1dXXZMXsgstpJ4UXTNZwfHrg3DjCGEczhiNiJVWJKmgt8Z4tZBm4wzsxMB7x8TzwmWtBnp8PHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DmtdLncq1rDxSSU1LkEoJRhXh3HigXJGSyRb3Eyt7DCASGH2iFCPjpgeUd4ZnnMEW2Ko17wgRN435VzWS5grGif",
  "key1": "58uSWcCtxtFJsxJmKXu7ewDsDLLCT3uWkGDEFMJ7eJdd2CcpQ8s8dTzphRTRWxWVJbuGbvenReUNTDvtK9GWxoJq",
  "key2": "45M6uMVLr2Up4rxeA8mKjHFpF9uejWjnoSSyo1eSk75UTn8yTm7pfzngkimmsHxN6d1XNu17nXcfc1iFGMPoQ7kM",
  "key3": "4iBL4GeVnYR3JyRjKDPQcYWG2E7K92uHR8yeQDAUkqVtfxKcPddgr8TVrj3MTphLbYjAHoHKUukf23HmJfnE2zqZ",
  "key4": "3ghDY5DFmEisH8ZfJNuyAawdbk4nerzSfcujpttEPyESKbC2NWi8UyWgGrMJovoavVTei1q61P6VqMomwfT3Ze1H",
  "key5": "5rwqn4CaMJTzVVcb1RLHQJWeFSZX48DgRupBZRmv33hHgfekuYqC8iWWdPQhZAQY7XQdcZ7LZnS34ctX35CATAvn",
  "key6": "3Th6gduLZGbJnXLr119cvuEsh9MYkAEFTYt8qxSjXpU8VQRT1K8W1SUQFxG8Di5J7fVFT5aL7ifXZnK4uoEqjoHL",
  "key7": "3MAiD86dXynzkQme1yb3zHXXfenjCum73AcTf8pswJEQgxqHJ3WCWNpAcYHswcoLXxtLqevYAfd3Nc6gvYctQWoG",
  "key8": "3wiPXjh7DqhgQWNLv5xoGWw9CACjbnNd3vYJDLp63FumPVZyHbhB3htsPRey8pqK1vnVEGpNHY7M6xF7w1vWPWVR",
  "key9": "2rC6y61GAJFDqMDoE4N1J2VWVcAVqAgtS4KeGdb9GfyoRs22X4b8dn3kuZcFzXx4QLcmcH4xZKZfYyzghqmaGgCk",
  "key10": "4y66i9ZZ6fA8zpQn3ojnmEnRRWZ8E4HAxMXQ9Kc4hi9Hitj8dNxaTQzn2rQFj7vSdjKa823A5SUc3mThPfnbxgri",
  "key11": "Jw1n9uo19pt2Dn7LQtMhjt4rHQ9CPa61N9QnPi2PSGJi86NuWeHVge2sXe3r8wdp7FL2wyhNa2yh2NLq19i5n47",
  "key12": "8QK5WQwQdP9cULkwkBsny162msn25S9WTKo1D8F6dPT42VG5MsPyrqUPxXuuJfZxxwk8iB43Zj64AQbbvHWX6ik",
  "key13": "4cnyPYVWcXdgpoUfu9Jj1JsoYweoqb8BEs8HeDgYVJL2TVkyL7k9yCdQ1Ahw3d5CmsUmmv8JzABuEuRAggbbyGCo",
  "key14": "39tiQv5HEvswYVnzHXMFqBjpuJHb8KGNiftKdtaguAHbaSoREbRnkG7jcCSo1xwa3Mu7JyQoZNNK6vV3GRj3LU1N",
  "key15": "3nHp6mZqxisoPJD7b5Dxht3TSkSAyE76PwPjzhWhsab7nyS98ai6cE9eRcQkNAeF1a9cqysFoHQdeaxSi9Ya95Gj",
  "key16": "3jHAYjkLVvUitMDVQopEYzTa3jFWyrHDo3xSupqxsddtTLrRC5EPQ2Lk43Xbp2oQZ4Sj7LAfVZjndjjLrmEEbKJf",
  "key17": "Ufa3JFkzLy6oSos51XS8C2qYLDQLUtWh2TPZnLwhuLeRFZDNDNhsHAhdn75FmHmhHCM6mFoyyCHvHw81bEomgyz",
  "key18": "43XRAs6L3SG2Y8bs3Z4Wu79NeVfXKrJk12x2BkdKb5NwuH6a1RFxMUJycHgwm2PU9T823bmr32CJjQagBw39TXFs",
  "key19": "Pg15irEtao58jgd3NUzcApCgHKUWdvZJSvy347rFoyP3P4A7T1a77W83MDK4fxAqi2yA7ZHJ47Kwnz1C8MukkVT",
  "key20": "5qgonqEr6Vrko5LhKhPb2Coqcx9Qdi49iUFjPwqTP4b2KGGuqtWxvESAvn2a6Yj64UG3S48fHyoiaSvaHrDEtzSZ",
  "key21": "5nYWTzdPZwEgYqNHNj1GASNSu9jSgYrkH1uKnJcZxbc47qAvDAv2quQZnUZU5mwHSuXMPaPvWgLNRgV2SdbvFkLH",
  "key22": "48rUXQnR59afsJpzdKszsjFyVw4y6RwFwPi9HPRLSDax3Q7QUhSbkv6zQ1NXKmVFU8PdLngpGSEsxV2ivpjTb6ks",
  "key23": "3XC2zNsTotqriBGbEJrRcibpEAdsCFZszMsGuTu3EXsmJL3vyaNEmrrAz9oCL4r4st39VkCTpyfdcbSjs9FyrnjM",
  "key24": "4RovTz8kVZixTCWStBTe72kUWhmg19FhMutt35jkZdzHAcYP1urqmGjD2RKNz6PHU4CRsBY2bgFtePZPjqqeTd41",
  "key25": "vsBC2hXyU6uLD9V8LSFqKz3Yte4L6rDoxjYoPo6c5dv8VvwzhEoGVaWfDCz85pHPS7WaXTw1iAcM8w2qdU8QeW8",
  "key26": "5Fm7NcsN8nZaDR1LeGY1e4o6gM5wfNmWjcz1A86oWZUajUnK3UTRWZWLhaYgZqJZRm6Bd3FrMUkM153LSyK8orND",
  "key27": "3w7GC6qqdZzfhrpgRowsXDgYTzxj92US7JdkZvmYtBNh7Hm1LcX3kK6hK9TAMs6c4kcM5yZWMewsL8Cutm4k6qcB",
  "key28": "5H3PssykEsW11HedeKmxkRz9ndT4bzm7TaWULjmd9g5jkEtGnDuaknnqor2fYcjHnbG6saKkrAWidoF87KiKvL1o",
  "key29": "4YoX3UfFgG5RNYvKScnXUwKmcym4zJNYC9GXJgXoGA18tS2gz7Up1DjfLmxFsBRs1CRVgSXhQL21ew7nYJtvY98h",
  "key30": "2GwwBpun4aJxRmotaBL1evQbEJ6Jr3d6MVo3So4CdTbzT5Pexe5R9tchTMYTmncrJeXMndDzs3UEETeYvFmbGUNj"
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
