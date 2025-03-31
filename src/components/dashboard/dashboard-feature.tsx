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
    "5wjDtU9yTbGQqXsspSfi7moF721UeMk8vnUE9kuUDQfrVsTR24Z3Qw2qLReN2BH5uFM5rWGBp5vReunE7wjxc9ju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ljme69KAq9SXRFWFanQA2BWpqCjzWuCCQEC8gRCAFpnMyCTvTSrR48kqTtvP5afKp7dg5PQyEnvCZEP96UQi2Xu",
  "key1": "3d7cRWGzWWQw31Cmhdo7Kzj3G4W7Dh5hHRED7rb87xvx23J1QuH8MJ5X9JjjNp69m5xh47Wczp8Hwo4NpMNAeT7v",
  "key2": "6DuT6wZFP2hWQxyBV3mWDbone7hkHa4pR3CJYDbPwLmvAdRvDGgj668Q7J6cxJiED5rVxQChYktpbXBrQDZS4Xp",
  "key3": "4s5BsTpQpQFscMgCp49p47vjjYuAtQ6dsM6Wtk5ES15r2ik86tac5t4Xzx5htA2w23YjjyLuF4JPpNU3umzg4j1q",
  "key4": "4Dy16gq5jJzkVY17KrteNJcTDbSZqnihbEV6gWDNvGfUT6csCfBRtpyogeDwEzMbD9TRmxwdGdHPsPPt1RN9Znw8",
  "key5": "5SsCrNzJwcEpeQmJwraUCFnnMygVxVH91kbqSxDqUYhxQwSAvEirbsecuZFhJoakcMX9MJZLo1YU7f5YMcK6wiuV",
  "key6": "3L1HpJ6g4d9W4bzEoH75fySg34nDhjkWzMz52SkGSXiKeNrnbEJqyb6ZJHLSwbaK6Y7HSAdHo6w3aZKETeXcoNE4",
  "key7": "4QTGCRDMjkSzcAjrJhBUYCKuN4hJXrDXMRDgzGV8j2gqEemukRRdWaHfqtbCrYytmnvUaRyWqW8HkYVi9khVSCxb",
  "key8": "2uXEEmSyUsKdJEgVNsD1GK4Y746ojBUCAobtzEfAW15YVhf41nJB6Xa6njRmxxbnfJy8AF5rsgh5cvhwLVo8hw2R",
  "key9": "2SgHjomZHK4rWtNYidcM9HEN45bLkC689AH4VGXWcNm5X4PcRvJhiVGRRRaZ8h979fvNvPLAy3Ymi52Ke46o69o9",
  "key10": "5xZXLF19A1Cp6eDuZdX3WPuD6eEZRWZ8nPFFQ4qufXhUEThCcd1T77sk3hXc6UAUvjEWHEKvsmrsUxv4ZbUtpPiu",
  "key11": "3Aq6AiB8G5U7i6gevPuoodPuNrmnr1dGDYK7V6xHbezXcaEs52YpLmRiq4jxvz7fPgk1Gzn8wPF7di726iunChkN",
  "key12": "4Mzio8XCuRLjA5EAwjVpSdVfX3FAyWSx8mLKrJNhLvPMEhKhjB8p8hpuF4qFyLieNUZtgcXeWiSyYyajNPcUovL",
  "key13": "3JJQFMkisjMBVnqJ2UCqoWYpASkdasKeVUBvrVRK1r5WY9DifgVWbW9kH8USX6ZpCNTgHhrJbLKXYMabBhZHhr5g",
  "key14": "5VZVnpUT9oi5sW2ZvgfMpbKxEjYWUnJLe7vNbcsqbifgb8VTLfD4QKUzyobWa4zcqtLgvnjDUY5EzVrBGChcRvab",
  "key15": "2UrPz6t4AuBQ5XNisyZRdPJenMQJ125VjBDzYskCwuMaPLkjJPCNe4t6T6Y9Wh6qpNySaTdo1Ue84sWKBgWCYGEZ",
  "key16": "44ZUvnh67Xd5bLa9RbcqdrSsfJEVpeAA1YgZ1FPm1G4nzabVwXtxuEc59iY4DwCkJNpV1hqPwKvAERLYvjDJiyHN",
  "key17": "WWk2augGu2ymudPBJHcQgXKe2txS3LMioopQAQwhu8so687TqLqyL4tZo4KE2dRDyktyDFdb79ZpSxWEvzXUfx8",
  "key18": "4ZLCqxuRCu5upuM3TncprJr4ib3vXXsCGdqzUom4TeA6jJtbrwSDr9ngLGRXwAnHcNPWFdGMWDL6BwBLR6LvRxvw",
  "key19": "ZoTauCY7JGcLWjMzjq5RJ1iDGZVxPSZbrZAkweDSwF87HavYe9XengaQtGHBq6QHR7rGaES5FdEKb9RzhJQ6CGW",
  "key20": "66q8AEoHJ3tktRFZG43c7SqS9Vzd3eWa79Qxd76ycWof579Zn3cpoaG9PnqWi6is4hyKcxdQopTgizjsR9yEVYHZ",
  "key21": "24rRqJApSSeUqndUswqs1uxz5XcaFqVCagk5MvKJf6N3aUkUuUVSPCzWBxDG8jqENF32XPahts2okNbh2HGfLszp",
  "key22": "8xuBLq4BwZVBk1hJeZE3E65pNtHspeZMzHM8WW6nTMoxytH6jNvd6SXciQyHSDSLC4vg2MS4CcxQcg6MZYaVuGZ",
  "key23": "3Zq9TrZVgCaaGzVGfswhWd7dWiwNwLdHpJebu2xuJuPgVMn31B65RPPAinrHmb6DUcdp2pYdGKKZB6trmZTSNRDh",
  "key24": "kAQZGJduVY857d1RZoSLeAgHxyrGD2CNc5eAuUk9qPdKmvJBwXJf5JSvvniKQtYkRqk56Te5pbE2pWv5d9Nv8yJ",
  "key25": "4fNjgwuZ7aZ25CHTfvbSavUjbciuFxytQH6f73n2Ffenp1M59T1BhxCZn586qbZN1JnLMDZd3qF3R9Jyamwypow6",
  "key26": "2qF6FxLvsbLvicv3em8BCYPUXLBdeKZ2ni2DThz3xYN1VajcwKcNqxf67daZF4n8unMgBBjyGpX3WhD5tQMQFwK1",
  "key27": "5HSfJ5PxkrkJrtA12SjmMDiFYT9W78YbCYygwKtarM84c39t1ngypNmyN9j1bXa9CVFhRQGSpzzXt8eTaQ1vFT2t"
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
