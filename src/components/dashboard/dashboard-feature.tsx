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
    "pow4YgrC7KmupJfatetCLPBchrYQZk5twFrAXmGr1RXK9481ikrKx7QHSj8aCf9hpAJgQ3FCTmkjXavm6jypdUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o4Koudp53jAgNw7TKQgPzQ5yjmPohpJ5c5yNT6MhkKQJnN3uQTABMCuJpZAGbJmWP2tqiVvxhKi1BC1J8M8E1aP",
  "key1": "3nm96YkGku6YzmXrRMVG3SnwYcMbKQ6u5e1qyuTAaPNn2AqRA8BsBoYKMHDsvFhwtNCVTW5N5NagfLAheBEKMK9R",
  "key2": "56Kt3DcZo4tXrEoVXWJtDMXnSE2tGkaAE2K7dA6vMqRD7PzTm1YYcCcgNrYMy5izkV2i9DB842L273Jzdx9eRvUu",
  "key3": "2QJNMx6KRZDCkUnH56ueb9qG2ewdQC2kA2tqhJwEW2LchAS64GghrCjEYnNKGxynJaMBPgZ5Cigg4fJauQXGhKXi",
  "key4": "5Kf8J59UpTHXYg9owUaTMpjE2WEJ2pubKcg2QqtRXMU5CdphQPeeg3XqapgewYt3M6yjewkXPc2MMwQW7JavVmH9",
  "key5": "55H64NqUXmiuMDfMLzy1U44QYh5GQbjY4iGCfzxbz6yB6KPKWwFw2mjyV81Cf3A5bMYzPqhCshXz3Xv2Bcw68EQE",
  "key6": "439XYaqTmJDK1suq8pCXfjJpGhtgXvLLWiGsJ8As5PLLEAUoEmiy7Ncjkf2JQUVEYKjaNcD4CPfAQ7eLu2f8aikE",
  "key7": "9zKCsdJvjGDezGJFSZWkQEFPwgrtg5vghAn9bQpCx4WwFjitGRBdFupBRtq2WG9gB1R2A9KvidfH773pF4Xt5Yv",
  "key8": "5UewhbcxxQSuUe5wQWneCTmdATemyug2WSCM2gnxuCsWjJh9uiGfmiB1kHFg9dmd3q1ivFMwZnzr9n6ntQKTgsd3",
  "key9": "exNeHXuyk3uQwU5skpkMuZtKopmB28se1GNHJficV9Docf6wmqJXJXgCHJcrP3sVEueFXjrs4wUopuqAYKR3pyU",
  "key10": "41MpscrtWbxTQsBvSp6xAJP6WuicMZMKKzofVFYav7iNuMeNZmaKUqJZWb9yF6XeAvKCv2Ws1cu2APywHLgdedgK",
  "key11": "4PR7Nn2WQdaZxQDW8ByD8Sx41DCm9mW9pZMPKoxF3rHCXkMY2bnRL7xojPL22hm2QqkDK9rRVMJsc1puKJsq2dsk",
  "key12": "78KNYfMr48HTXyFE4jGteD4rbuymCt7mZzgJqzjHZM7WQRqqR8TqY9AjwZAZUSJPRsNHBPQkqw8PQcFbCaEVzKu",
  "key13": "31pGpUSzwdn5PKHHmVhELf2AcXSaT6enMyd1tydbhNgHJp8pEMU6eh3WzJ1HyGD8drWs3e4HTsfTCGK5pXzuKAGF",
  "key14": "5x37X2MEycU4bUVJ8UDoMrGERcVBqAud74XYebY95zZq85AwPT8qdsp1XjXQz6Ky4rjY79wnzB7xnLHVDFu9fVU3",
  "key15": "2j4NBJf7tmf6aHHxcHiFZmrt7mZP17QKyTgj2PzhHAu8Lu9rTad2uu3f5WrdRHJmSrpN1udxZGEEkGYjSTfRpGei",
  "key16": "449jkB1kL1AJR8FuXNJbzfPmzyXupfiGu7NXE3MBnJKVtFUH8hxe6vCHPSj1ZcDRUU98EPxHje9VNQYahnyCrnSp",
  "key17": "cMiGvgJ6bJ7UPgh71QHKKmfirP2ASctMsed7bdbGj5jKrUzy79862mnuTJgwLXod4feemQU43MJeNxZM46yPCLN",
  "key18": "5ifaDs8wStkGBMPvXR2Ca9daKhoCWtjvDT2BpgTNmpjB5jSib9Gx4JSeaRyd9BLNShWu6E8JHxJnwruJocqn4c5T",
  "key19": "3PVkyBWqgM6Vy42x5uewRCCk6cziN6iYQauFAqUBQSrMM3qNPoJj2zn4LMfAjRRwvyMBAecLs28Znqk1iTc9jD8r",
  "key20": "23U181cABCPXjpyY6JNeKfs1PgbxhMaxJ2dFsjhwFN6CMhf9r14pA9PaeAgamD32oEpJNzZU4mP7q1m8WQuyr5us",
  "key21": "5a9T4LN18vGEGrJ7CVYi98DDgNr5RFZufDL8RT1sAdp26Pb73f3J85ndp7UThZQeNaxY3eYN8FWeLD8URYtTVTrN",
  "key22": "Q1YUKPKzw71vg7YUYgdasCBdvFL7dPbPTgiSysn8nT7hS4j6GiYJdDdqa9AUXNPCwcaqwTVdQafxFZCVPaa8cg2",
  "key23": "3zoguSX2dHtv6hf45K4VETcsMJyG6gQukE7oRHr7pprN45tNwovY7MLzR7owwsSQ8zCXevkospdEFvQVeQsyEgKX",
  "key24": "49V9o5CHD8TR5yVb5Zens3wuVzNUV2JWLoF7tvwvBiJxv1Zh5wGVGLd1PWWQjL62ruRR6VJVUSAc1DqqZb2DS6Ny",
  "key25": "gN8Sr5hLmWTs8YXYerNTuBoiwttrq28zDAcEsmpCRa3SUyMhR3zdphDMmcDwzh8KiAVUMzRVm6dinoigB7Q9h4m",
  "key26": "GMKn1h44G5CZwe9AebpPmCStUcphRhxeqgPstAmEBpGpJu4EsEDpGXnqfGBqcCg9RiRKovQa7M3dbJXCJctVCDp",
  "key27": "4MKvQQPe8TyKsMksUSDq1V8YgxkGQrfQ5E6TXhVyDKsgBUzGTByoPh3iv3V68KJLGyCY47aFtABh3gMjo1kQCzzL",
  "key28": "3ThqWBt2A9uFe4qF2qpyUKP3JiC4eaPhH4nA9693KtC33ax6TwxX6qCsNzRf5wKArDY5UcG98FbxbiaHJfRMZXVc",
  "key29": "2uwyWa1tC94mRvpvKXJ7Bdh3SvQRKzrySjii4aFCpNtQEVK9EyAk5xJUvN62XEThQHe6fy3LqxRg6s7bg6wQkfXC",
  "key30": "4k4Tnrpey2gpBGmZ1YQhbZG4gfEuzkutZYUh3KbKvYgavPydEcxqsra5V1JVWi8q7YwCiAkxSsNqnetmWtQKo1rZ",
  "key31": "46XXpqbuPpntXr8gEzUyx5mvqGiRWRbMtv7REZMdJRSXuvVg4t98n7kdC1WJpwrYJoFXRuXuZmNMFw11RJ6Teb32",
  "key32": "pNaazYbVtfEc7WWefXj9RCCKAjD1hcCWdHftt469GYLdJvfxMpZJA4r4U8YbPjye6BL13QiKH2RXdCcc7eT68tQ"
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
