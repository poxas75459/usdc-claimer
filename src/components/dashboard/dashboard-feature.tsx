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
    "5bLT1h72jvDYwgSLKWrY5JHKuLrHCNSyiDYqNpyTEz43xf5YsKEKoK5fxwxyPmXPKXvYrsrhmEBCTzBvxJ8a1mBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xncioGgJowT2u8pnNAzHARzjA77HLFnK1YzwNECPw7R8xaGvm8s4rXpv15Sa3oCJgYBjE2soKNHCrKp7ZtGRktA",
  "key1": "3sZnZgrCJy3p7er2M4F6ZDm9SXxtFnEJ91Kc3XBhaq9WGUvAacCGk8XnYinVPWYgU1eqdBHwUTovE5PvsByPKkUM",
  "key2": "iT1uSFN2PrG9XzoHtatNeAnuLHmaP3J2Hmuf197fsAGS6QtGBXT6DdmYVqwXyR29x2sir7S7jv1yMJA1PTCPHPB",
  "key3": "2M2sLsCDbPwdp68WsKemFaci62rXypBLY7hML8xqo9C91oVbyu2fxT6coovUi47ufGqU4mG5RViDtgo8RwM9zHh6",
  "key4": "4mwR2U1KvUCi8wjA4d6zriMoNxeXMGuXfzwUo9gsbsfu2CkMoP7Q3GmNWJ3jpPa2tcfcwjt12QBCzHpzRzJEcMVi",
  "key5": "5J9mcovsnmVmYjXJKKPxsqXhLZ5HrZwn91UqXzwdEJXUWeetTbCLiL13UJcn77JHp9fBXf6A78ytdtWnQoFNCUL6",
  "key6": "xpSVrRvaKKeyTBAvvRWFXyAyLtyqVQiLwsxR3pXP6FYVASXzNMbFzHggz2RofNR78EjfZ4ca7cHcZroEmeWHNLb",
  "key7": "5QvTrPXVZsKnBpQxuzZsqZkmptJzyKQtVFvni22ReXWcDBFD6PfP2cch9RqWLXKNDCTXPPtKBnoBVGZWRmqeSzsM",
  "key8": "5ZgoBzNpjnFJqyytjeSFnHQDrDpZgj9WVWGJU2dav8mVTmqRqm4quWNDTNT8eC3ZgdiPWrVskZZYY5WWxFHC6zR8",
  "key9": "3zHiNxuYmCy6DqgCUWiKzX3ts3LzQr8AErgEFNhGurKHxPo5s41VE4zhtHPFgUctEFJVZ47RoW8eFnkZtj2vJX2",
  "key10": "5vq9oSn7uSft4Wr29FiP7SJVad4wbcsr4g4W2YemnouLLoW82zhaT1DeqVXLiExiDqwFCf39t3m1ekXVBxteJG7T",
  "key11": "4DfYSYycAZSs4EHzLrJhMZUZmydaGBExcUjXQuSzsXZkwfRGMVw3waV4K66tFWrVLan3DTt2GSADh85URnz56WoA",
  "key12": "4rac6f2aF4j42qp8ZPZMSE6sr9usP67yAa2sgNFqzacMcTqAwAdhC4Cc5yoKS11yp9ZPFBk4HDjhWB1AcexntQMn",
  "key13": "4urZNcD9r3kM868yjTLC6rdgVoY577CqexwhU9ExPKok75kBVVo2UwSRAbroeXAGrGvL9hjTY23hu8DNJqm31A7q",
  "key14": "ND1VnEer9J4L8tA3WamRChcVzXVLgxmK9GsKbqUR832kqVsXbPUhj1ewH2ZdzACNMT3yDdE29itf16dxiZJogbh",
  "key15": "qk9qQN1sRzVAvDcDJtQPHgzvaz9ZRMhvD9ayajhAxiMz14SSYJe2n7KZf1kqewYaTUQTtgmQGmNaW4roJiMfRPz",
  "key16": "5codgjuBdqw44kRJTFuHMTAWaaRZb7mqR8aMYu3ovfDAx9zuTzrzdLmtmbSbqNj1oaE18MVMRhLq3qBU6FTnwApE",
  "key17": "XjR1WkapasHnY6der9UWFYycEgbB2LXoBSXvqE19xWjb3JeJPujrzegwhqpVQNqJXKgNLeKVaCKSpo6LBafE9K2",
  "key18": "diJ57ZxLTDZhg5HL69XZy5LCCLC7KZ9qp7f3YimtpDCWNyYeJ5JF6hT1oyeSTk6pBLeZVT6NTMSybzLowBV1D2W",
  "key19": "65xikygAiNt4yosKZXfj597cqtobN7YQ1VPaajxrHXpPS7m7WCovj7AuUV6jJcMTevVj3BspHNRpHFeQgMycvHbT",
  "key20": "3uLcWiXMbkuJE7shrEpP9RoKy9wMv162Zeavq4yDG4G84JmnXR5CLvuSA1kYRE3BtENKANwvopbKbE4wiGRKetxT",
  "key21": "2dL2oRqcUHxjPYiwLG3cYH48TtMgPoPU5fJSUUUiNbbBgauH1hU2oKjdxpZj8aaUXwWtGi8nzvNjF8RnWrHqceSs",
  "key22": "5PuKSUBjqCuiesQSvVi53xBMFY1bCWroAyDT6UkJpnFPVyABRNt9qPMLo2jEFjP2FvNFbFRz61sSaNnM68m2BnKY",
  "key23": "5muCn1XcXLvtPa5mmP7rQVjzQTgvigtgsGKLsQ8TWfZcbBCt6iC7gSTvP13XCPQ7BdZRYWLvUwNaT9a2KyARPKA3",
  "key24": "2C3aaPGxgGCsWvkBcsZ3YqBy52EQ3w4qCQrx9dUsNQKo9onsDtwE1jLkDe6CjAtdbjsG66oBRNEnqa4Ee1bD29Lw",
  "key25": "5rpJM26nGHZ4bAuYEo82QekUcMa7dk4aQY3ebPRC6ihP1jwBywFy24FXRhBhXfAJwViYv7hBmWtjGVGHxYBXHUTj",
  "key26": "2bEeTh1o8m41Zta9ZtwZsCYnRAHqe59y12FPsUtbcoFnW6ZGzcc8pwYAcn3ak9vdqhdoWzj1Q9jTpLSwPzPGy6Jw",
  "key27": "2kUgCrdfpHPAzfY7rMvLrNJ9Baog7NnjVmDwULz7gwCXQiPKULZe28cAFhgBG6cku4LsvuSrUUiTaCGQgFzFFfM3",
  "key28": "39PJ2CL21WJDJFwLf4zQtkscowCfQDMB5sc4gaRVxPSDMV9qBEVniRXshjauWM9cnPvH3Nar19rf57cqNyZQfmeq",
  "key29": "BPXVsVWqUHGgg7U2ZwAe5AZ7x2gm2J2QAja31BZTcVH5sonNFR1wCkertVdxbpJhXLFoH41iNqhGx7D8kJWzRGR",
  "key30": "3DBcReo4SxPCUzY9Vja88QdcsJmWsqsZEgSS8gQDw3P8Gd87P4qsy1H54TFyiAhUitBZrDPyhnvUryhtgpxBG6UW",
  "key31": "4BtDwLgycc8ZzgMpjxqGrZxWeUygHkDGA8jT8U2n51DiN2wwRPQjWzzL8TfZNWjkQeGeqy2FbvtVV93CZYqj1faN",
  "key32": "5yiMiQNcSpBcmR6jrSerQo4McmYr3dsQ8HHA2cwC8UwE7ZB5UgGKPSFLcWyZuN3mHQFXoZDmgDnkM6j4ApuL2KXT",
  "key33": "3U8CYqZovZLN1fWZxdRbEP4353mTuK3YFCB3gyWrJ3VsQTb4XbtANpbe9CqCMV9Forsd5MaGDL5a3MuaQYBdpQtm",
  "key34": "2MpBV3MYu7GW6DknSjxP4tLsr5WEPgpfXAoVgQcNCkeviafYuZdY2W2EjwNxY7UQLd9K3zxRZky8AWDLZgSW3JXX",
  "key35": "2pp3zyvoFWCid4y5oNqMyEcpfrtUGzveWp3mmvJv94H3dipPuVnnKRgaWZ5CdjQsCaZAEWUmjoTpQYCVdSqRXT9N",
  "key36": "2go2jJZ9LnYmbo4uBqzR8yEusp4zBa4BTtgWQo7MddnHNWE1KcE5SLRb35Py545JrGEEsNGPaT8AeViDUuENrbXg",
  "key37": "5uavwnM6bSWaQpnqLc3rrpbsjoFx5iH1eymkGVNpHGwpCFUHMbswJtVZeMHo7KxMFXR21M7NMYrByTeVMVAfrLev",
  "key38": "JAkegqy1Z71htfxxNQLR8nWwQ7nnwfib94q7ZkBWdVpM1R6hJKX1dehXtL8jfNd1jpb9Vbi3qur7tb3SYcWHFgD",
  "key39": "L5Konhyi3CLQ9tBisQf6hMbZAcS22W4ocx9e9Co2ATaYCW1kXSRLinN51ZdfqErX5orhBZEtLH3u2FNtRQgD8xm",
  "key40": "4goNXtzJn6x9YcrytGX2p1Uxher9gh3Hbwt7KM6YJEXfKebm3UZg2mJSsMjLaDmBzLwwnZqk2bts4Bjefk2Bas7s",
  "key41": "2Vi3vDEfKavGGDQYCGBnfd8qcxE2jiE4dz3KecvWcB9dM2HW9ouYUBzT1tTUp5PGVWNptkSB7PPuRrtaFWWMckPY",
  "key42": "33WwB7d7Qko11FuQyN1R1EQf7WTd5vzULxnSiko8hneGxjPY8swVncYeR8T1TKyUvWAT1YTyJJYQDP2VjEbzF5iN",
  "key43": "3NcHTtb9MWNbpFGZPwx5AfqWZ9dfdaswQY59KUuDca9BMX6Q8bvvrLQXLdxP3njwQDFnB7gXtbVfGyNgV8Hf4M3p"
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
