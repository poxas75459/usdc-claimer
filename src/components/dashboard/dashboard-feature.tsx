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
    "4EKF9hkAo9hedkyfDXMVFrvvCJ9iYLd9pCRZmqdmgnei6SR8gDdtqg2eKtTdGS1zi5pZVtWMadqzdVQkiZstE9G8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JmWweDFo3sJZ7uCRgumJZbSUdEE7gB3VJewJ6g7s9MMpK7agjRf5gULJDDPd28ro6SWvjtxTVhvyTcVmc6K25xv",
  "key1": "5EbcDjxnY1FZaDQe1DoQXqLVdoxgfFMohEzSghwdDhLMvWCYKfK84sUfoo5Hd1hwL3CU2hkuwa2tr4KTigEH1kC9",
  "key2": "2aVPJATpQayEmwoZesKcSiAcyf9CaEKGwiEsfF4ynUA8DPjizQaRqbWadLtFEHGb62ndYAx7kZE8SwYLAYtQkEwb",
  "key3": "2emS6X4HV9VKrcWA9T3zBBs5wVki3AaQiHwVYkw5xvsx8HNC7bo4h9J8QkP5LSncHVvw8o1GhbFLrGNaM549Z8xo",
  "key4": "56V4z1iwxr2jM6kRPJDSFSHMuJXvNsuJhDFmEiMp45CoKTLDZjpVBacU93yuxWXuqcU4st9uRi3wK3kzFkGQhAxa",
  "key5": "3yF3BBAbkYQpLcRcxQ97U8EMUCHYv79vF27XG5cMamwZWSdwxro6Ma2dLJAnmZZGwCP2cpxuYdHQJJW8M5kpyZNs",
  "key6": "2rgiWzNo7K88qGutHDn2Yiahvm2Esq7xmbKRXTxJGwa3So9pyVVHofWkyD9BPn5x9TaKTaJBd5PwL62HsNeQKvng",
  "key7": "5xcdaSVpyHSQMjJULXdKhBr4cS3bijuFKVwCNNzFmCwwjhpkqBgYMrKo9H3cjwtYiGnAmqwU4r5XnR5NYVYuQAJ",
  "key8": "AqNDYFC8Lwbqr6wrxjufwU7fypX1JTs6jpCHbifcVaR11PzhfBFfhuqxSxXtiATexTrZdKw87gvAKZcEedffY8b",
  "key9": "4oAT7fzBdG4XcHq9tuvyBEMFkxjVNNPDkyq9GDtbBRuW4pEe4aseUWzg5gRpJBYumWnXCxyFoHe5mgMKt5PxKKpy",
  "key10": "2Mu9Q5ti38Fb5My1cjuSJYu3W1fFMHi5oodrXaAT42NKATifEp1qr6Y4RuxFknVUV8WMwmB58rYTJ9VgJkXXxXBW",
  "key11": "2AyGB5cZGNhvzPwFuptrsFGBGsGWicDjrzDpU8As8QNPoXz136b3xNJyAqnDhLXZHVGyHn3v2KCoDu167TpUWNxx",
  "key12": "5RWAfG8UQ5tzEVA6L5gHJXxYbdXc7N8qxyKC6ED4U7XhPPDAEUdEeg9Dqg8LRXd4QSAq5ySFLpXpnPQxxLxSxkbQ",
  "key13": "21pXwnxV2zAwibEHSLn4CLfwwsQ264L76KbDvK6AY9oYranKRQV1KxudqeqkBAx1WMG2TUHVcHWUWs7E4a731epn",
  "key14": "wPp6nZ6YudvQM5M8dU8saMu1faMgSzEbfJrDF93NGAsvseAJL8QT4CyuhAc1xaQcSCYExUgBLZL8C1sKs9TGSgb",
  "key15": "4vC4BXXv1pvuyjua8pb2oaMbs251fQYxi35tqKAnbaHeaUocBZQQ6q8xj3FYvbiLvsjzAcJrw42pszMi7xCRXiht",
  "key16": "2pMT6gJb8thzLHEG4dH5Z6Mhbab4eN5PgE4GQMm5Ggo8kfmZ4hyEigD5sUopZAtgTRkod9u4kgNUeCwB5aD5ccNw",
  "key17": "jdzHtd4UzmwPrLVN4F9QFSMDwYkS2tLt2c7hLJyLH6HEsrZP5FvCZGLnfgpG9R7DhQNRdBqzAHyG8sDQpt6dnGs",
  "key18": "3uSWX4id5DQU4irpaggGqz2xQAw51WKvNzstBz5tCEZoGhjRTY1NBZHXZRMP5f3G5LgUyKUT1DHjzDiAbSyZyLa1",
  "key19": "4JvgW7jx4xNPuo1LABxoUPGbeeJcmVerF4wdtESE41oSJyvxvKuCPASpugh4JpcV1joPHPPUxp5XaksEYboUfoEf",
  "key20": "5S1hgCCknTW5Z7xcPBYq3wrcHb3sfmqbPCq5DR3bhE7yCDkpsVtJNsyP2otqGCiUAk7yrCgpYWLA2F3fwGWfT6Av",
  "key21": "2rMzyHJJCqCA7NY6aWJEhQRK8kt26U39J6e3EXefgMGrSPeqLiivduKFPG7ebVLF4vyTBE6jvcxyEQVcAW9htw6Q",
  "key22": "4XcGm9pRQEagLxWJa4wBgUmL4gRVYEwBaGNqpFUsHp7FSAfHCxUWPDXJi57qyrmZvmKoVH9ikwaDcoKAfHFRgVkG",
  "key23": "3fCh8AtXtJPJf4JS4mjLB2uXLLde9Zp4ktrZfM2HPLvQrfofLCRsnA7H1AD1W6imCu1dd5CwHoH8wzo5dAsTTbFJ",
  "key24": "MHXqpstTVX1HRG5K6rvWERJueKd9ToVwDuw1kDm9FtMtHgBCCCEJrjYXyB2n53fapQodMLzkrQpFf33UNYqQNsu",
  "key25": "5cPJPtNz3pnPMZJbFULVHqVzWnppjgS8qk3vEEDkfPKzVyocEgidt6Q2ZHfDUNrmCSchmUmzY1aSPeAL3HKqEvgi",
  "key26": "5hvJL9Jjd95M8UQ4TY8BcZpoxm9TazPfi49US6xR9H8h6SKJftd5C2tYKK9wzdX89sNYQNXXkuvnC1CUiQ3w3xnv",
  "key27": "5KcmxE7q1bQU2vURmqW5skpxSUkcPrwmphL6SzpNcEKfVcZ7gmg1vxPiDj7WaG82g7RonyENvzBKFKqAKbSChJuJ",
  "key28": "43gG4KMC925GL82yYW17tuLkFEa3XM3a7bdf6QCgzZF1srtKk69vNVSPLXn8zYxLupcCmU9e67S6ao8rxRZpBFj9",
  "key29": "Aj7ZRXmwhrFG1MK6pJva9THKMB6apmGVuvqvihTKh7PYnAZyYUmUbGESwWRbPAVWM9e7evq9CdpmwxM6qPYMQCT",
  "key30": "2N3yHCPVhhw6XDuxYhQtJigxyKnt72eMBJE2VDHMhdyk282G3NaP1M9NMMc7CZ92TYZjPouxWxFxQGGAYZg1c52D",
  "key31": "3kUsuR9zGDiL2ryktyBFui3okSZvPLJzeVHgXhXEp1TfFCJpt1VK8gTpMaJZ9X8g4rAxbLVwcfCS3RiZoBApqtGS",
  "key32": "2F6QPpTv3mw1R8Da8UqtKYeFY61CJrCuHNrkuMKFmfvsd5oqwmboVVMx4ZcsrZzGRkNJrDQUdCJVW1i5PECNovWw",
  "key33": "4GHiB7NN4XQmGPy8779VxaQwSSHc8jnRprrLwTkiG88z6zfZ7mXR6FGsWMBFoQsvjqG57t41tyjyA4G5t6tQ2NuL",
  "key34": "5346rfHLAbnzUFB2NxfUsuiG5NEuYgTSbMRDxSPzt5SKgpCoXF4TD8fBYXQGNohZtoyZ59PaVhYzoaE34yWcvnWa",
  "key35": "iv7PPYfF86Wrw2sCW6Rt8cgEtG7CZWw7Mcdh1gHeJwG4brWgPFwEDfN1dQHwaTusz1Rtn6G73gvpeyUoEpC6nf6",
  "key36": "4F1EmDnJczWcDzYXeSmeUDhLLnLnMWLD3HTS9hxWfaduT2TPSPQtiMtuZCuFFXdwEBXX5BtwmH8X4ECRAKRNZGsd"
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
