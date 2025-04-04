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
    "4gu5MzFnwUJukJ3hPf8hscgDCxQ7RrDJz5QF7xg8MC1FcL9RAdtsSz6v6oG8fwj8rd3zEwSrfYbv3yHW1eUg6LTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ybsTswFTvEiHTixtCJPPtALBKjKa8JCMuV38ApWXVBcXDeQhsrXgSD6PFtT8gFs6pBaw4eWKZ6a17tUPFEg7Z56",
  "key1": "2euaia6DwyUvrqAJaVBEuF66HaChaDbtBWQggy3rdKWXTujZV3n96EC1daY3R24WiXdLiYpfZgWMHXoybG7ancMR",
  "key2": "2Lq9MW1eYfU9qCBVmrMP3DsVJE3Qx37DDztV89DAzFfPfspLWsCZ1CZh8jyyaGsD6iVEj4Nm8XRUa5GVaVpuoysp",
  "key3": "2wmTEom9ZskDAo3wTQhXf3uSnQKyiV5U9c2SDE2x4u5BvaLpiAvLCpgCCmsgy6y6JSiwML3Vgf8vGFutXYSPpUWr",
  "key4": "5zUMxw9Qf3rzkYHmdR2HmrkShKFYuJtRPAeeEYYaZeAk21n68ymLSoJRn28sF254c4tXGW9zn1fsDHWMok2rgpdb",
  "key5": "3RV8ZgQvCrcZex7rA9p1xHHsyRavstB8ejGZnh4h15LAjFfxWKuVyCK7BnQhaZTEy7R79N8VQ1RS53CUk4gr3Uyk",
  "key6": "2yiXdCrafLhC1khFV9PzgXe8nqJ3vTtsqC3GF2kojVrY4VBeTGFr95W15AZ5Xh5jiucFYA6QcUsSrUfNwPyYCKVS",
  "key7": "4zrbJ9CKX8x5woFLJp9gFNVb9vqeAmFoNkYZiiMzLR5V6ufDDFWSiNyEEzpR8dc3Zky1wBLvkxHDGg6o4sjTZwJi",
  "key8": "3kWt4sskDbZhfhCFiXCfB1nDKDuogmXh1GGMXgQkJxtLKhVHFSZCHFTvT2JMZKgqj19Rtzo2QEsfQ2tUYcj8LoAz",
  "key9": "5KPQyjBnNWzK67w2TZJdPQFytxahLELgrLwJ7xaN4nRbngS5k5MP9g6HTGc5a3mHFxa3ac4jAiVTPKzVjT2SgKwW",
  "key10": "3dGBa673nPFWsg9KXxC3jCc2LXypC5g3NARQgnssdehvJPmC3JVY4pkHmiV2dVwLSJHMUCvUCePYfGzWK7Uj4BCW",
  "key11": "VFRWNHPxWJLA3KchBkbzpJToH5Ap7T7tVFugNXdE9ywCZZYCWJvzKaVMVQAtD42ffnPyRwDgsaBxuGnJWa8PqaL",
  "key12": "4jK2JJpQ9tN9u2JEsLSigZTgpCRMDxb7ohQW8kGRLr5ywMv2vAY6xYmKvTHqnyk4pebLbukqLGbfjcK6gm96wYV6",
  "key13": "qeUUpVYWpnWt7s6YKdSazQJLSVU4ybfWkAKeUUBqXF6YEdZKtZcGbzZRiwtMgyauePtGHTn5dM6jcvU4RNPRiw4",
  "key14": "4P5jyetKyNyt9bZsv3BmJyswqNETSh4vy5X5Ko2XU4RBE2veRXAXAzDfMivxtVTF9iGW8a9HdtGHYQHdpBqpMzT8",
  "key15": "2119BE4edwEbqHMGY8nJmrp73TGEfxqqS9UTXg2QZ795g4gVVvYiMEXwtNkue1HUiVgdx4RLymtzXvoo52gq5srL",
  "key16": "4niFad3qMkQjBy5bv445kedBTXgAyWD2duUVuLj4XprMeBWubtDXVNLo9kjrVW3eiW8Fx3KU1w2B7hg25zwemkqQ",
  "key17": "8GBCanGGvBCaaRqgWLhRBN5yGrYgAsNEyPnZzgtTmCAMtTcm6ayH4JoBhXT6fK9saiKaS2qTTFRv4qUqWpZpxtm",
  "key18": "5Jp3NSvdwTNzy7VaDxXbvsqNEnBf4KpapFyeaq2VggAsR9zKp98XCWeza3vck6u86Wx7rLRXbHoZm8wnhSwqsFqt",
  "key19": "9vsZebn733QpBcdBu99nXPwLR2UggmaZHhfEY5XBJt1uH7HDiwYFrnSwkgaEbCpTpEwLj2fUA5J8AHJa8CQgY36",
  "key20": "4JUeh7W11UYV3BcWxqQyRAHdjAKonmPLpXKBkn799b1aiM3gDH3CqG8yJptTwqAEeYmamepz4nGWKx579C4MakdL",
  "key21": "2vA7kQnPUSn3YYGz4qyj3AFNLu1xd7ijcvtvCjxVMwnK7UC4kwUwV3ookAS8PGgLruRteA34Xph4txAswp7y3NsP",
  "key22": "2uedAHzpwXE3Q5UnauqdFvT5Pp8gTtuPmk4WkbSU1QUNv6hiraakGYHzQ7hNELjZ2bP343V8bAeNQeWW5icP96G6",
  "key23": "3tZ8PB8v7nzHX37GrKwpiJAKf7aJqnw8i67ykp94eXoV4igLgt6KcCzVF6B9Bj7VNihksUJBZ61wFFBbu8heGyCP",
  "key24": "5efT4Cs8Ne1WopKUCBkH18YBff22Y8KV3UFs6CUYCX8gDYT4ZTKvTm7N4BEGHDnHeEYBtofAmSax9JVRUEK6QoyH",
  "key25": "2Lh9TCcgpA9rAUFd1k97ZCGQjMEat7BJeFjfqrebSEWi3jEsTygKY2FeoecUGsU9QgV7Py82XN1b9SefwQhnGZ7g"
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
