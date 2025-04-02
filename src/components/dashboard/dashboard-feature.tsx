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
    "4aUrXio6J1Uae5iBYgMovF2eaTu7vgsXGgG7wRJuzfndfZneRuc5To4feNHH7zHg19Z19E9xhydfLaXxiTLmXEJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F86hwUqqUbBfdfiNwikwBp9Y3DmeX3dDCYuxcZf4Pc3DP4LyHauomCMbUhnMp7nVDZ2Hqk5NB5PPKrV2zF3syaY",
  "key1": "2dhCKJHdfYxUVe1hxmfTanCsRzP4fmboirokpDHDE29bJACv6sUD1jkBpxhFJt59cq1E9jW3zw3KQaUYpmUJ4ZxP",
  "key2": "4ZvLk4rGdauEUs6Vm3wLJkCzNeQAt2wWqVyCvZmcR9hvZdLctFrjk7GiEyeCKR1zNHxbesFT1J8QfTHDSTj3v93x",
  "key3": "3kQVfAWm8kimkVqqWWRToanHLUTsfjGU96Z6J8t68Mvon9Sw513Fao9P8RrfXZNQRGEFDMdZD2vcrBNb36qnLe3H",
  "key4": "5YB41AvXsAVXrkWoH8tjMqK8QjJsLzRFHJba9Vg3cZ4Am2oxBetMVUHjjbTCtPkB3xVbJtdcWTJzQwj12HJuKfBF",
  "key5": "5n7XBZa6kn3K2DYUpdTatAZuiSropzNkHCh5AYuQRrS5UxFomd1xArfHeDp7epNcznufymKByfmTgkGC7ojtMM5J",
  "key6": "5gxingZQGQ4dK3Qj9vZZe6aYDJ6PerT7DF8ef3zcHhCF3VcWuTLsMVrMbzADUAzXEAxHHJm46gFnHgLseDY5y7tG",
  "key7": "5wFcDvj7vG4bsAzKNftze4jaZiwU5UCky6FgVnjye6SKFu1yACQgdJbB78qttot1GT5x7CgYcSSx2PQSD4TDgzsm",
  "key8": "iAR2ZajWH5hGznZqM9EdK9GmcDaBC7Xpyv2Tq7UTJbDBs7Xtytohsmc1i8jFBSCTTLQf6jEygVhSpX2nr5bfBFd",
  "key9": "4oyB7oPXkwzC9Kp9iRD6nQ83JRnD9iAenYbRHZV2npEqh239fzB65gb7xkvpGSW5aGMbGcggnKX24aCG3AXFetCy",
  "key10": "4sbzKoFaNFAhAtJPhjhU83RvqkD5LL3FuM7FHWtGLRJjkgLtGFaPqAFqmNikr6vdtFnUQ5Ry14Pa8McrWY53uwQp",
  "key11": "5jyCNnLHhDMEoChR2PKm2D3p86haAq6JygqkET3UUNUKTUbCN72yEZWHSBBeHrGtzt2oHsk4nE38oyhBbjCkPttE",
  "key12": "bnDjVjxVfgXBmBv5fXZDDnBvXvJAFFFoPPizeoP7WDDDxMFyTP7PKoLpgYUnLLNuiHVJcmAcKP3NSpYzU46fNx9",
  "key13": "4XS51Py7oQmXNkRUd44Tc5izntK9AQekmoScYQ34h1p1Vm5MPo3C3BwXyQCoSK9Nb1puih3EbnKKcidC4tStmKRz",
  "key14": "3ZAeWyNp9ddjGDt7B8vu9sxn6M8H28q3RxzypxvxXa31EwCrC5EC7rtScBPgiPtqr6k6d8xpDRpDL4shh8EsuZYp",
  "key15": "3FjsRicqyRgthE1Jq6NYdAzKuoDZTrAtrUCSUjhJRNEZZigvhNYxAGHZEGQgcpKzqYmy3JmMbELoMyuJAj53Q1C5",
  "key16": "bZT5tBjxq9opHFu3XVYL7xoSooqgCEbfGocpSPmzQNTWrAZZZBLsChdfXziZsUVszj1GQLzdDh9FxjUH1AiZgzJ",
  "key17": "31KokBwY1cgGNhdHRN3TbKx1RBNxS4cfomucBciAcX2kcRozy2MmVPVujuTcFcXGrYL4wAJi8r7K9mY4en9vvt8K",
  "key18": "x8PkQfLRDxETqCv7oh5CxwU7SoAN1u95e2GyEqXxoZPQmJDpqkDzjMbAQ8EBVh7KJS2WTaQ29u8V9SKv7xgHeeK",
  "key19": "4fxGATznBhEN4ibxQVBeTatJSKc3MXV4vY1X7eWYJh392VZy89FMLmFhbvGkMriCKEjE65J16nKmQQ7NcnmgjyHv",
  "key20": "56D1QGvau1UwiiYftbEsabZbVu7Qw3XJzwsjrA7M841FbxQUhQuciuDSQbG3HzVRrasiKjnjrWx4GEY1hjHLoXC5",
  "key21": "3QrjfHSuE7yAFaXTwtNzsJUaE2FBrA9aNqVmq6CGmuqDyAk24hgEt6fsgtzfkEfefdhyyEsQ2eEc369TZFefg6nU",
  "key22": "3Dyrtjy6zTQNKPw5cfAHRcqj6QRD7pRnWHAzozXW5U3fUpjaN8GWmpFmbdqK6qxwzyVvr3SUPKESVoiWfYYSSF1N",
  "key23": "2dHpinNVSjeFxxCcNFbAXwueg1AL9GDYgVv82FTo6V1zE5gvoUC74mXcVhCMtdmz77P4vQThxDkbokUrao14naNu",
  "key24": "5HHwvyYBPeLTVMvZ75WR6KnrAgNvk8TydGZoSVeGTZGd4pvJiNtbL87CESKcokeiyRjn3ecZEcQ5V7A4iKjeFpTa",
  "key25": "iqG6ahEpN43ESt6f7fK9jipDByeEne1CrkEeDXYgrg5PLi7j7FAvgdrmMBNNLbb6JMNUrM773spBLAvaJciUNGz",
  "key26": "5kguKJVMmBdQR699jGKdvep1vcvGiuxRdSBcdE1LZTiGzopSgqffjtTqZSJvM6yf3JtbErBeFuctrsod6pB9EbL5",
  "key27": "58yerMPoHwGuMchE3Pj9mKuTiD2WGcrEnres7CuJaFEwxtSzgbLicvGevDbWepfYbkWzScLcQ7tTJ5Jv94kbh7JN",
  "key28": "cDMPAGB4Whvf5rfxJNFZcLCP3x2NULKmx5njEx6Y95FcQE3o156wTUDLrwaYD4tMhTc8rTYus5skozbkMPjpnjm"
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
