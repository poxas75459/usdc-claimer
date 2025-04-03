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
    "3PuCnTw17e7ENeKEc3hm23328zZwz1V9FWNDQ7q4sXy1jFyquNtJhkLw58TDnKCGJeNi3cJC4JPL5atZDFkceVPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nvvatXkTNdwM17w3SGMVwg6Q2XTpgEn4kggUhjzTJv414phpKekohQKBLQkJreTbTTv3E9gUPyBuAaj58nBbTxT",
  "key1": "5xiCtSYjpJGV7QutCZQHSHkmP9HjziQK8q7XzsyooTMLYgWKbjmtT8t8Pt11md5gH9RkRJEyDfaeuzhNuYuyJFR2",
  "key2": "3suwMUyF9WMo8kexsFZCV1PSMgQcD7PtA5FxGCaBwk84QssCXN335nZAKmwU6E37Vu4DRkv5a3PGJSVfHSt5tQ4u",
  "key3": "4n2rxJFFEDpSGA2e24cMUgicwxTX7UTHic9pThVXYY1xuepfaXAJNScVLoLuVHeppkbyr1vefeyyZWJALeFcpswt",
  "key4": "3zB2CqHukcoNn6C4wsbo5s6rFd4RJQEQFZ54vMhG2pC66ZqCUXtbeKRHZ6tmGfcve22cC2mT5PCwVxZ2S4BMAWLM",
  "key5": "5V5zcDb7LhW3mKThkd5xUevSayy6i68d8HWZ2Z1Fz1iWSgnK8KFZvEbWfS7YTuGatuePn57GwnNGb2GrjCbgxRE4",
  "key6": "5nsLK9Tqg64K7DqMreeV1UiwjddufHwEnMkq7WZg4sci5SYi1oM1Zkk4QzSHr9DgowKAgwuKjFikWHKh69TdS4ez",
  "key7": "47AxFovAF9So9PH4VnknrSo5iFprhCYaxEgotXpkobcdFX2U2VxQMjynDdgjHhtZKkDEti6gryE6kkX6FLF9wYZn",
  "key8": "49ueQcRa5k3ZA6f8cybTryBNCetwGhhewzk4qdWheBCbm48GZDn3jtktMnrfa72NSKTYpynjA2RUJu3Dh16g6Nax",
  "key9": "2Bzjmjguz5NBXsj6sAiHMJcn6rEpk5yLyGNLmey2PU6MDNVhaHaW5oKwK8sh4QPdAJ4bgooSgJLBnqa4stjeMo72",
  "key10": "5zh52EmqhTk62VcyrUrL4M95BLjXgCEo8ZsiJsZ6rHyvQzuYvKfoEFBrhr1qkdU4RmmCYvPmzGbTJziLsnUrjy4F",
  "key11": "5FxRMN5uvdhSxUoSMLbUHpGRuAiFV7gGYDWspACzQtWE7zBN4aM5uNLhXqvjvv52zGjSRjr96qTpPfV2JK457bYb",
  "key12": "3E75JddGEtryywcrWnHXVjMHqN4dYYa2itutncJg4QFX7QLFEvquKgRTJ7GZLY7yx9qCoqg6KWq48725GwBvTBzi",
  "key13": "2EAWDZifsdfokkDXiLhPw1i9F33nStb33AxJ2jk8opFtLzvtxvLp9ZsYAs1Ngure71QiFZAFv2k7sQxZ7UzBf527",
  "key14": "59EwaXkccZ6g8TPVgRx6oLBwZuFRKBKQgLcwSsgZ64bJx9KEhqgwUWN8M1J3uMxZMHxN1pki9kkJRHEqdschyghC",
  "key15": "uP6Yr5UP4DTs9EzV5LrUUXNmXz1odrLcRUkb5AgoxC1X6o8R5uu1EwLerveSCTHsEZex6C6SdQ3VLHXSZRSJA7h",
  "key16": "i4fCzrwtUwfP2z5XuLwrzimmFge2LMtGrZLxautPuqkerQd3M1ACmQr8UAWSsFaXRPZfeae1SEUarmxvtjrhafX",
  "key17": "3irhz3nJBG2szPnvsJCeBUjXZiaCdak7UvFG8c9SBZAhAeFF737qKAt6kURvYms9RScVjPxSijyjKNrpZATeAANB",
  "key18": "29AZW4uPYbtpVxX1HpwhuGBN5TZoEHi784cUvFWx71JZFmwV3y1MFWx9y8im4uF1By1D35dW5AiQHYfhthDPy79E",
  "key19": "2x47PZBPSHXSU7dq2fx6etbY3iXUk3ykBsLWcPuDDjjw8gBF7FdkFCoQASN1wNq1QMLd4uVNAD5bkxS2Q9qnbJnm",
  "key20": "9Q4cQe86GXeiq1EWFXZusTqq8opRp6QZWpL1i8CF422LYLR5L2Cp9NRc9zDGAAjd73Spmj36udpz8GYwbRrm977",
  "key21": "5pu7Jx2UTCmomRnSAwrufUEJiSYBPTyqDHvPo3Yw7CEsLvM9T7h2g2cipmMDbqXQajiTA6s5zaB3idg2pDWowXXd",
  "key22": "34TZppaYCobe5h3PhzdsSrnWch7ETD6XEpzqfYiweVg17xvBG84Uj8KKfTK1vVtUfHVXJCw6Dj8JoHinGG4TmB8Q",
  "key23": "2nmqafLooMhUcy49p6iv7Dvrq3nmUSjSjDjp9HNc6cRTE4Meu9Yw1M6yuPt7RdtPheJi4yNVxKfsmFjhPoB6U4oh",
  "key24": "277CUcNRrp9yKQRSD3doJxmebBRfwRjJC5NDqbKiVm5mZhmYV8hwqC4iYGLWXi24pb7YDzrRswax7J3kmovu43pX",
  "key25": "5zQSM9c8AfgQ5j6mzzSZ4mC72tn7hWnMXEUJ9naxjYrSJuP4QRYsz9pJJxwxzgGvq85kiEcwB45vgYztZiAVbiHV",
  "key26": "614t3pLcudTxzc5mt8LXrhBVw33KiroEGBJeK4QDdojTkFztVYsMbPL2uVgE2B41zMUdJjUEUUdWbkSikWPTG2s2",
  "key27": "3sbHyY4ZugDYfDZnYgzLQShzKmc56b4V1FomHv55DJDvdXk1pL2cCxDmKvhj8ZcTgN79M3xbGqgtusCjNvRg4Pts",
  "key28": "WomZYJeSRXDjZujsQfyxRKKXE1tDLq5heVxHpLmNwLf7zbSX8kkLh9Q71sXB1bzB2w3EkAcnspBW9AtD4vH16XG",
  "key29": "3DksQLrHob5aFA5hdoEdYbXnRxcYK5i26WJ71A1JTK119nQhoYKta9zLYHqf532Ttzmdu3yXsGWCaBgsyD7EyDtj",
  "key30": "4QNeeqonavLoBYeqKpAEE8o95pVX2LzLHU2gM4qMciqnVWayfDfnxwkXeyTBRHvFFM9G4SNs7YFJCKuTeSLunBrX",
  "key31": "5ELvn61qdQrqRz7EYpiY5s5YXhHFuM7B6ZMVfyRC77fQdPMGUeHUXkZTVzaLAigQXFhDHbCEivMv3BQHYJn4dvkm",
  "key32": "3nPQKyr9TZijc2pzE2YZJ7Vi1d3Kmtibao5iZ3fVNxhmA6fHPbDoS3i95hno4qGdBCWTE1BkCef772aH5WJRLNLV",
  "key33": "2pZrVS7nuybFRrRyfgMhWn7VpuDN3Y3bGQjPEzGkQtDu9Ghp2p2eJyVooXj7uSw7Ar6fUj7TEkwckTaJkaV8fnEp",
  "key34": "5UHx5xaA9WNdP4QacS7T7JdB73hrJkVVgbfNTPTigKFdg8eRiH5MqrPzF9aiEg9rnJ2kFpQGdLwA8NQPsxDa9NS7",
  "key35": "3AkDfEcMPhyWn32N3HD9LYdVLcQxrS9Ea2pLnTtDhquESLA6QeJdhRzjgDaxi6QKrWpSAsWAbLP1uSMz4MStJy8F",
  "key36": "3GQQX7JtsWNP9WDSHarYV17rHMPiokhf62NehRdiVMSsKKGxAMA9nj66H697GnwVoEkzaS4sh2CZhbYwm47TYyP2",
  "key37": "RATwFUpVYA6c29veNX4ktYZeCVFDg3aVx8ThCYN1woimRvbnYEJcVwaWx26iejVrpYDJXUMQZh942ikGFfug9pN",
  "key38": "2R2YR146Qr4cQczGKiM3e7Y7wUCVKPNVycsCgXx8UYsGMSzJxYtAuZYZ1FJdrWKMQ2HgkV27MNvwAHbCPhwKBiTS"
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
