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
    "7MTfQ7Z9kTD1L5ECpD4TTKB99w8ruVzGB3nUM283fHxKX4zTGFpYjUYjy9FUZgJCequVWMChPSPpvvrhzx9iZnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mzyf89MGj8fWwRrt58d6yZjqUwNShiCUz3brgnvTo14eGKLxdbfmDo62xwUELbExGd1uKvdjqbxmjtwr26h3Ggx",
  "key1": "2rA3Zq3T9gm74CZgE1DQ5SKCTLKUp6SyAgA8vuyFoLRRGL9HCRQK4iB4dvcpRpmsLJiL4LkVdcArvxMd9qjvGrCY",
  "key2": "5NHP8xGDobAGCWjrosHhQmk1zCHKwX6HCdHzEr8fsUqyiJP8bYF1baTiRm9gyyNVBzuvf7E8Kniv8CicUm4PQPUv",
  "key3": "3BhXcCykqk3a81Hc5wYZz5Y1jpA4xpQ6S7LZZVkg1hrBgiUjA8WSTqK5296ixRqT9Cro4thpw842RLAF8q6mMGqy",
  "key4": "4x7iEtkxaQcQ5jTWbcnYUMrsV8tpDdp3ZrPb4RYRDQKYUyNQsf9WMgjo9ctAFEcoLzwr4JsuwfvWY2r1sctU1cV6",
  "key5": "3d6BvWRrjeJ4BLLjFL43drb85dc8S6ShMZUcv4BYUpU9y1DeCnrBUJMPEpVDqwtF41TSHN52xTrYgUvH9Pp5cA5U",
  "key6": "yvCTDFoJnySYvWpv1Kgh1dF2MopKWVuSZ31AAkYEMtd3XsoFSfPuSmT6sj3wfTiUxk7guSLNECMLgQRKcWboffC",
  "key7": "2zPfnRbqYpmDDvhtkBZ2bivjJwAnJo6c7wMsi5Q2aERRpWEYbK1UKSebA7Fzs3asovrKF91JPqGthiMNvZLm8NRM",
  "key8": "35sGq4KK5NqRqrdsGgD9PcKpovH8oWjhYABNqMBrsxf6ehzy8Mcp96oJb93nX6jbgoJwE2STMi9U2j7YAyNQTzrF",
  "key9": "3WcKmrjcYLa38TJodjtPuV5vfNZmBw4N7xGnhzmUpxvwy7i49mvraq4KCkpwUNJb85vgQGLkiVPVSxRwppegsumq",
  "key10": "52ZkdYnNcsSjg5GGUNc2SCZbdFtFyCpAj5DmX7JF8bFbXwf9AA7ayb6EwN51jd4rMDtPhGauzJnVFfrj62J2dTKe",
  "key11": "3YixNBQMy2G1HiLgrA8Lai2x8Rjq2Nbc1D6XZo9EkijVCPgs3NkHrDdPHV7CHrbUBVUKtsj5Tayh3SzTiBV6Cf7Z",
  "key12": "3P7ktKxtKT6ZJUrusfQG8ewT3WViucLmCH8dsPv1gnGi3EWAuMAyHZrQy6fMnnAQr3QmDp4M7XKvF27TxujFmRuJ",
  "key13": "2qYXEV3v3sKoTdMivBfDSNyQbRv5obdk6U54EJUZTnYaa8xupCFYP22aBhQBTApHfXvCv9xXNcukAjhuTAbk4DN",
  "key14": "4YACy3uT8ZNKp53cqcF4MCFv8oKoi3dDC4h5tG8WRZbCLKtXHRxKLrafBYWuD8rPHeSir8iZ4HBrAch7JWcJ1vbR",
  "key15": "GFyFCeaFvQNZdx9Liax7WU9H9mV7CFMbQ85PMp35P7ieQC9tisXSki51vq9ekdgtPdhZQCJ4AU8CqygUKoaLTj5",
  "key16": "ugDL5rMxAonwUPvhzJZcwPPARbyKpw66GykMGK4j1qGBQ4zfKe56FABqrdLfrdUPhtGCepuVyfgAfJcXmfK889q",
  "key17": "2vQqUqDe1fmMySvpzvXPiLMXjVabacfHgZzvpZci1aicB8TgpbrD3az4PCxG9bTm5VBh1fJ4fCZMfLCC3kPKzQaS",
  "key18": "5tPekS3FGFW5ATzznmvffd9DcaE5B514FUDyLYcA575Ydi2Q3ACSAw1yA3o9JADbqFnPV6HQzUiHFP9ftwukx8pt",
  "key19": "QXZDFd3vuKKbspXT7YEqFbxwnfGZyEA2hXzMCpiFTT5KCpUGLBBUViaFxDkKQMaxqn8SZcdzjta3JMtR1HvHN3N",
  "key20": "2QA4ZMwx3xfh7rJwRRiheGDhY2x9Za9i9TuZGshEDt4rVpRUqBrgZwwHaEgwKgjA6uCFFk2JJ24SyUVhZYMxRLTX",
  "key21": "2Xp1qBGKRHWTKmauaKBHBujBGM9WKMmA4bC8LXgGhPNK7RHNbnufeGNaw4zV5kLrXkpUnQkxrgZ9GyM9Zut7Pa11",
  "key22": "2627rpfEXKFfQW9gk2wgPZ6X7AU3ddmGQiianRGyAR5pp32B3xrmeyixDVRMZ46rF31bhzrQgSjjCo3Mqocb3K7H",
  "key23": "4jV7DDwR29TUNmFzv3G9UKvjzXZscffPQhht4SELSAjrEcS7iN6f76Nto9FsevzLHtAJqwyFVftLkDZFnaiBXX7",
  "key24": "2QUsCkGWWCXdhvybDeTWabdXmz3fnL7pdTorTw16zq7xFHY2UpTtNGJXnCckybtJQGK6M6WKLSThrQT8WKoVeFok",
  "key25": "5C15rv7hCnqGimsCncZ8qfAtzEkQUQ9mirMnimB9zCHAVXx51mvZjKTAdEJLUpbwcHRKtfkc3PQaEtoLCbnWCeyv",
  "key26": "4njjhfedijFFeC7JpRDbmuQgvCDSYD7yazw5Dyy9i5iWpyzTYtNj9HSaWVvieeB2RwXJmrtwJioYropkJJzvieqY",
  "key27": "477wLGvBdA9gtPmoS1ERbJUWRtYGqUwiRkwiuWZEnCkHJHG1pxZtH9rrMAXfG1aQWrPsz9Jq9PB9aEyiAQbWxpQ7",
  "key28": "brCkP1FYQBjA8fG1Xi9WytAPYoUc8LFfeeSoxTtT2vuVGHsDCAyupVDHhyEotdDmZfpN4FCyFqU6RKngVr6RZjz",
  "key29": "3kXgPJ6fUc4ivN2wRZmdTsG5XeRm9sMyRhrh6KZkmeasqLEE9TQnRcGEDJEV2LVzG1LKFuybiw4oMrdKRS8jyCvv",
  "key30": "2iL9HS8KzGARDRHs3pnNW4v6xv2Zgj4JXWCUsin7iwLjLvi7rSkBT3k7cmXKzJ4vWZhCPByhe1SWq17CggFnkDZH",
  "key31": "29xZNj4hfjL3QQTrYks9HeySYB9uRQGqHwmwjVTffCxb5sB6nR2VhroGug2ze9u1EXQfU5pveTD5wgmNuFLwjYv7"
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
