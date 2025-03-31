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
    "2R3j3N34Xt8kj8edy8JKqYzuXxWPfd9atVDXMLN1Nm53t3oUHQDdXTsWEX4xeUk21mXrTa4aPrnJSiPucsVZMa4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r54DCNvXdQb8SGETvitrqghRCwenwT3jv3V7Mbo24MXnDxmneMu5z3DwxzHwHeTxBhByNoJDJc7Rp5HWvgVdWPM",
  "key1": "5ZS3h9fv5QaApS1VBbS5cErH3HsscmwUgRC9G9dZ1ZUjyJ9SU9QiFpCxkZNeBHXtf6wuazLQrGp3orqhyp5Z9EQP",
  "key2": "2PFR3UyEK9s6RUV7WTnt7y4ufrZCGXuugTXYe4XBou6wc1LGcJbR3ESbDf3T9s8ffuXqDjD3Xaq43nTHjMApUfqo",
  "key3": "3Xdf5fJZYhv8DCb15WhB7ytibqUq6Qdfxs4ZbHi8Hre1iuK5PGX4vrfEgUF3AHt2BmAqcpkE99Zsp57jvLJCUsU6",
  "key4": "63srL6KQf5oxpySeKs3YWq5uYMUGVLTJELwDV4ZLYT9NoyRe6Z186RHoWbe62JV1wUJWBZrhm7Z7kxMZtyBKMUm4",
  "key5": "4BTcy5XeRZUStQekX15KqyaqukrebpUWLnLS1DQ5gCe8q3bEaheGtNXtWeddZ2CysFSi4fcY8HtEouqsA1FxXCVo",
  "key6": "4wMDK2YezapEpgm1KBTgyCXJHi2fpJFVPqGhiEKJjPnVTyTRcz7m4sRk8L2GoWejV5XZQmb2Q98oRSeMe3Zp53M1",
  "key7": "nv2TLdQWGyEUHDf5BPg5s1Gy9PS4KKK5gDGNPytWjHruvRLGsi9i4sy3XYBKkEW3ew5W1koE5jB6Y8y3xuQdSWz",
  "key8": "5gDnssSntpKzbFfzvXwQde1dsTc2MUsiN4bZHY6BrSZC2XDuA3uhFuZ8aGwR8K4obJXcBpiuuu5J43FJRYmu8i3F",
  "key9": "5DFXPApFjBHUdRPvWir17oPvPPJEu7uKjHwvQrmas4QSjJzzcEQSdBS3bkDGtktpWEv2Uoy5Ny4E6PfbzxvR5Yjs",
  "key10": "4mvD8jkEWHi9Gbvg8wtmbESAEAHuiAWogWsUfUBDHR57DCwKMcmP6RwsAdiAcjjQ11DAQZHA2mGMXUCJzdgfbPjq",
  "key11": "dnS2ifWmoUgL3dwmGjahyrJpZ7CwbezwEH4aVk2hTix5t6Jp6YgqtKbxao3GNmh1dU7HdteFd9ndhBtdKmdD1hr",
  "key12": "5FHKhChn5wLUeeJFhyuKPePtaViEj7sGCGUTE1am8Y5HcJus3UbEyQ6Q4MJyfqWLUzev38u7npVa1wJvr8qzLjoS",
  "key13": "fhepYMtfucvKWJu8CWReUvEgNrXxkZuTDWvDaDCsqUmAbYg4xpvfgg2CMBZzCKjQ12TatNm9yZyhHrHLAuLd1zF",
  "key14": "2nkfBAL9Ezh9mBvgqYVKxV31DtESugAGFAdr3fKhpy1hqWBETniEEQzpLm3vM7p2kEcq4DU2yNL5FCfcD6bmGXCa",
  "key15": "3qZRBum3ukei8eGyso2vJ8i5X2qGdj5XsJPtVhTvD4uT7zeEmSepLixx7V9QAWew4qcmfueV4RQTfxbLbFCxKJGh",
  "key16": "QZkZ7Z4QBn8TJLUrGsn9xvc8EQcyXmJu9SpMVM8SEHrKHRSJf2vyh3Qye8r8Wnj19WtHMiG7pKYqdb5NSJBF68F",
  "key17": "3yFXWowz5ujNEd4tNkWf15hWtdWoSUfKQoKP8xeMK78fJ1M9qdHxvJdjEfQSEyKxmjXFZHBjWimb3eFXt8C6xtW",
  "key18": "VjmCjdUpfTpdc3G1oUs6JnPyFMJAnSkCHNrGAXUmPaxFQDshiL4rj6ijZ1w4zshu9PDdcv9MPzngjY2JmbYeEe3",
  "key19": "2QSJzzsAUEcdJVk4WDa4qgfJMadfzBYM89tTY4TfUYakEG1YsMp5QKpnLQHSv5UacWouCZAKdVcrY57wVgmrs5Dq",
  "key20": "4sh7CriGbhjgFmQJcGxXi1oQyPakE3nbfq1kUTpesKULaHnXEGJAKbBukZe3S7m43HKbpMi7epxm4Nu5FViFahBj",
  "key21": "5jv4KQdGgVtWmAoWiC7Ag7Mm6RNTESfsqSnFmpp8eQkhyELyXKt3kPCyyYhFCK32wJNfDQWMeTTfNtSadhLEzScx",
  "key22": "2URZTtQdUJmjwN7pPPuic7yLYL4fSmxmTevQ8eyZHzJAqNL9J6LzaVhMMa4FBxT1YJQXpyxeoxYhGk5JcMHbzZPe",
  "key23": "34c3pqt9ZM7CjW767aSyAynqhoiUYdePVJsyzmfxSxkWTZ294PA26gvdeJ58jLqYPmSv8zvPuLme6yjdyY3xhpTZ",
  "key24": "4rgXyVoBX7vFpaKNghquuoAmiKq2jjWCNRwWdQtuiRmwFii4DUeMQDyopgNycyUUBfRMsWL7iLeKmHXDQ4EhhV4Y",
  "key25": "4rXzS4disdL4de1Mkg6vyaUDiF7Asmpi5rDP11nYM1nVg6XdCnfRfLY2oTD2TdysQn7xVWipY1iLXwt1BBGKJowc",
  "key26": "puJneY6Cori3XDx6uqnoKkSpKXCLPrtWspcQ3D9P4613pN5E8ejGDaeiEJTxhXeKotvwfZNC4Yht6ymZojYQks2",
  "key27": "4oB6HD8qkuzXiBbCFHMCTPXRy3TvhRe4LnwUTMysVJaqCqxjkLFwN7oD4MZndk4iYbkc7z4rEecrYBgJGDyby73g",
  "key28": "3zDurFMzkFqjvVmFLU46XwU6spRVQKnjohHxDWuTPg6UnC5m6pUmApU1zYdgBEB4yYF7TYCJRRHDbTjuF3JPocwi",
  "key29": "NfyqWLWGX6sZRjUezfqSBN3oe7sUUdrj1oJVzLaU5Dbi5dmLye9p3wL8GWpeBSkpabZUuMaaoZtfAFGL7UyVeuQ",
  "key30": "CUL8DJnXEjgqPN3EAt7LhUzDfeibNy2B4tQJeENR7CGfZDxTom3ri7J7usBqBjRP584Her7wYGntDJRh8Qfm7Xb",
  "key31": "2oW4WmD42P8uu3trkK81cSL81hK64Xza9BV5q5SPPisz7srZGch3Pea8DpcJrHWtiFcuysnStLfBiKPgbTuEVPQ5",
  "key32": "3NrgTF5UxVunCaB7rubssPaVWQEs68DJydyzpcpdirCCPNstW93qXAU5jp7hoocR583tvJ75ceHjNUuZTAx7D7DW",
  "key33": "aD5Sn81NxuW93LdAQG7ZxghNUELvuGbBMw1v5Y3yNV8zuKaLDxNAj1KrAN67gNEF4vvSgDmb6upXgZyWKYATXqn",
  "key34": "cqFk1kiv4viCykQYjyqkagriiBYDhg82PtSDFAmkvwsku2wsNQ6PitX6vzfiNaPhrHfCjDwpxhbyRiAXFf7LuVK",
  "key35": "63Ym4xP6WtEVijyidb6svvACinAsiqG6RJ8n7m6gQC9KvN5hnuRoWwAJv1vo4d8v7ySQJfiFvH6Yv8JVjC8FD3oP",
  "key36": "51ZxyAFiB1Z8nMsB2em3VRx3DMEE2GPGtpmDKn4q6wTovH4SNuWYo5URhPdGSQNqhZtENbzfGA5HSKB4WxJqYEMy",
  "key37": "5ekMBU8a6hFr4kCj69gccSrxFKe6BCqT6qzSiWW1nf4scfe2y7iGTAtaSiNnsKdACsQuyoT5m5NFhExPaWC5mmfq"
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
