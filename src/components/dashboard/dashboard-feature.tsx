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
    "2Bqd75NTWaEXNAGkcroDA2md3wVvQ4h3DF3VYrGxjWJRZcq96qA24wDvftzummXTPfBGJHR4XKneyaqvVWfZEmLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F5enRGETtsg2xW3WKkFMQvQUG1j5wQ8SgrLtb7YsvnWgkonCnzDBRab5PfwsYCsaQq4E1JgtnGnze2tKQfiRGNj",
  "key1": "mu91Ba3teKjCeDCXG1GubXNYAVWNrrEgvQgGmtt8E4HaewaQhXBPFj97BGRhjaaihURYHxbSXxegMsPoAmfzF3z",
  "key2": "2qjwuEhxPM5uey4ZaVEtyoKTEdPqM9ZB35pb6kqEuL7k9MkEX7JkxMD88JakgqN4xdbxyT7ZQVxie1HUuzMp7pkm",
  "key3": "5diykHZ7Ei4AYAjXAgUZp7pABshvHQg9YF5Rzz7wymjUznAysTR5YUFfJNdDXnZzxTjdKr9RUBD2oX2Q6GXa6Epc",
  "key4": "4eZNpwbJpzKJFxXFyN6pw7Wge1bAy17Gbh9TjtZhjZRiWnFbnkkq2BqwYqxSHgpjDwW53KkrZSvmyoSeo7AppYW",
  "key5": "3pgyHYNSKpNZYe3YnZQL91PckHPkz9z2XXjYtUrEJxkc2fCfQXxhMpKpWoi4xQ7sJEBNq4MCVkV3U3e7uTZm9qnt",
  "key6": "4xvaApFjcLqQE9MXxnt54iqjKFj9nGS9ABPdMb482ZFsD5DSAdgEzXkt6bnBgfsn17Cf6mh6cgoVVDLxRY6avrJM",
  "key7": "4QtrYDRhMXPQBnNus9tUy5Ed9A8bh3fjRRABE2YpkmCzW4XprLBcRKNidxL5vVZUoYj5ZjGFSNt8Q37CEHkfEvrU",
  "key8": "3GFDhUPzexDsP9GK847rxyZe94uZoTm2QffZgEHZsVYWaPoCmoY2AuQcccCWtMcV8UTdwx9fk5QJPqJ8pad2fxNy",
  "key9": "3JJb4WsSEchgK4RWFNTWuF71MoveYhkqzBjxWQo4msTFjv6nt8GNWQ4ZwTT2uHHtFjihNFEvTvezKZRyMxZVZM77",
  "key10": "5xB9nsjtmwLAqNLshCX539UMughCX1WBJ92TgwZDYT2Hozt3mD7iE2ZSkaWVirc5eSGm1eEmxhsWSUKL8gSaBnPK",
  "key11": "3pTM87pioFfUyUCuGtV7bruv9H2r6fxffpXhXZSVDKuT7cN95zTCcXdt8r1VbfehLasQneG9VxAiYZjHC5yaEW3B",
  "key12": "BUEtt65GXUfxuRKfeomxAQ38TTrEhBtRVtrqojKgEnUjn9vFeu7fSAXdRSDou7hBgQXP2owf1yjG4Fj8rWGU8dg",
  "key13": "2wMa26yaijVKG59kPoK4FbnQU1btztvYundBhAa9sYUcG5KKgkvpK7SeUEdaa2yoU49aTNjpKugZ3omiYp9V9hED",
  "key14": "5gqrKx7Js1w1NLSBSHDh7hKqN7XuUkUYuLoHSrDyxfhevBWHXuP93jVftrazPxTTuAWhspBWJuAEngQthqPZcMAH",
  "key15": "3cAshUA42QzoX6j28GVnQMi4rnnfJtFrzSVSnuuSkGpgmJG4yhF2uDpStLeUELHopRC1XxhRSWEUbd5PamY16cG3",
  "key16": "3S5mbSkd2YTTsdC2wx3Secn918voz2ZJ3WL3KwsVhRBrN4BMBz6UtsT9jBAvyJ8tZWx2DaJREiyknEHJXtviSnpN",
  "key17": "3nnC2XxLQD7qvYY5p32VKLLyVSsUtXrV433yadvR2xhnZ6SHR159se5LC5a38mvn1YTAMvzLsuKY5GQ8qR17DjL6",
  "key18": "3Bk3j7Mbw1RuCfvj7ajHoYx2LdMLQoauGe5nt5c4dH1bAqD2FJ3W9g78yLeGpm2UvJWzJjVKRB5jLhGjPnZhHhbj",
  "key19": "5vMRsccsZorSggrnVc7vCJ6GTuAwYktUytG3fhrFJT2DezTy8ENiuYmCADzRMWGF7nkaiByAGbU6fzEYqCxxvit4",
  "key20": "5Kec2RJ34BkPjWfFB6CKF4hRcaPiYUesi5vFFe4ty1CPwuo8GtUZ8UwwP3WQfhM2UAnZreqxVdrSugXAf1JdnvcT",
  "key21": "3PEjQspegq1CTwwQ69yvT6QPRMCBWHWx46uSPWMZsMW6AWAxZsGdGJ4oVBuieG33WoBZX8TtpmzhLQmyVphcz9Zq",
  "key22": "5ZkYmdag3TLZ2wegaqUq5GfwnnrGAy8atVVXygNunfyneQ5EtAYpB3c1ccyCm9PotQaCCKzyYQLdFuYaBYNKYD1K",
  "key23": "hBmgZKQz4zro8SyrGC6kagGu44jb2pJZyj9XrkWuhWBgh1TFKb8xd9ByHSbyRKA7n2XiB9j11PjGW6cT1WWqAse",
  "key24": "2TGfc9J3EvrRxomyEPicMAAZBYQKxEhbqqUBaprx4sJRd3we7Rf9B4q4wHdhqK3diWooFkZE18Nb8kcXoBbDUSAz",
  "key25": "5SwiM1wufn9Ghpi667UT2q77UiuNqN2o3ViTpPgjURVtxjGxG5XSvFSgVRHYadVrmGt8tw1XrVV8D8VQHgxqpA3h",
  "key26": "TJ3TaAS2jvXAUXyC5hCxEi6x52irYQfzDWRveuHuAypkVVuJPj232vcGc5CPtUvHmYDz4Xsv6vWqWiEwDvw9Lu6",
  "key27": "44oBKADdjAnKvouCTBkb1K91WASDcJPS7PBvvydi9eygJhob7b5KyyuVey2egco8oogDHhJLVoJUsRZKCpPYJSYc",
  "key28": "eByCdRzC9i2FGKT2mH1WVjVcevdXaupAByDKCRVYEPQsHJqptpirFd553eVcwDEYBYHB3HhNUELx4MHhJqMGETK",
  "key29": "5brgHwN6V6Mk2hhJLym8Ua9PaXkFGFU5GiJKdkKTGQNarApzJFF967tCP1HVcCrGFhQcVd5wyM2g7T48VE1N36QR",
  "key30": "sZJd6hZdP7AoQftAp7QYRG5FX2sYhNgtW8fSCHCH5LM3yB5jYuiVHm4gAG7dtQBzpDreJfqpiYzSE3giBVhtwM2",
  "key31": "4arfFh4JR9Q5KGLZPyaBdwJcponqpu5wSGDVpB1mGB1EQFUJsdUoALqAmjyVudQ2m9CpVBfPqywvysD9jqrJYwis",
  "key32": "3Z2JFnL4zcPwb9XTxgeEfntm2H1fJ9JgdGJacSnqTN11YEBXqSPvy9zRdQQpkZ3g1ohfvre8StkqUxRdgMdQQAs6",
  "key33": "4o4etAnhGJJ8rTgzfjXvvw1jLTd74kGhjM3u2VqmjTTDa7QrTEFDXwDJFxDqcEaMrXob7T89hWjRG2ftWizhJ5nn",
  "key34": "4b2rgDk3Sa5Wexf6BR1BCmtyppYnx8Rh5WoT1a5x8uBXacE6MYaPrP5uozBfqMtcaUkJ2N5C4ca4NFynnouqnmxC",
  "key35": "2ZmroE3hrTLEXHmC3ep52eUnB2hrzcyYugWKg2wcNGcnq9kHMosAnajNzt8GEvPNz9meGYspyY8eKVsnWjLzXTFu",
  "key36": "4ywodHyFjYKcyh1iFMeKRjsfr8sf8obvBJRThABTM3V3h81SPNfbBEtRe4vjw2DhRpNjFkuhaja3dKXKP1Br1FRM",
  "key37": "4axYxLNCqZJDrGyj4AX5H4UFK2rfZ5oWUSHkEiHADXZ93ASNJLK9tnJ8tt92N55HP66PTFTRvyEgSfCjpMkQ2SYn",
  "key38": "3zMTgysKMh7WiwVzZAH9Pbp9yi7uvb2UUU13QE2vxr4tF97YapEHJ5Jp36fEMbS56GJ8xJ9V99cnnT9VjU5fZ8dY",
  "key39": "3t4eVEn57vGcEuKaa5NzQHLRJ1qNBAyRq6uLY9b2gsUJ6TXeX8MDrrrpTGjGsywxNHhGKnR3rQuEcbJQF4La8VGW"
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
