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
    "4PMUYaoovtWv2QPLwr718B2Lzsa3knAHmtmpDmuSRSQHBxL5veRYADXkgv6QaepUvNiJMgYAmUn8nnbyiAVvWZow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fQYtfoYke1ZnTa2y4ZDSoz3PrgUnKgYk1wwqoqCrEuT3W1ehAVqe7mkDrGx5u1nPm3e9Zk6vdV6JE1Sa5ohfKAq",
  "key1": "4nw6cKVEiYT436ysoBUcKXprPMzBG7pSZUULek5ec62VuyX262X8zuTrzLd3M3emy7mVRyw7cEvF57rT9LmZQXGJ",
  "key2": "2qNTE64t8C9EmrMCQQCiNMAZN7CS69qADz9T9RHTfnSdycrHxW1NuqEz75xVuMsPvUNvdDZQmWxZLc1uwrhwqSD7",
  "key3": "5JuV8DF2HUNCuwf9hbLWxY7swfuNHkBEn2uVZ2ezjCUdtdtoPxdxQBwz65U5kAggNjiwvJn7BMf8jkcUEo5mhApv",
  "key4": "3qGwXeBnrYa4gTLSGWGX5pmP5inLaXWhskQNHGZY3DXhmPGASC9wCsTRGgDzBf7ddf6Pbpj1iLbiUivsZqF1LTRq",
  "key5": "21P1Xv4vqBYjD1Z7qazStZKk9sZ4B8yAZaycXcrf74NW8n1vr3XXY9EFNRDi3a5W4LvzEfuxkLQ8STkffMR9tjZf",
  "key6": "5HdK8X2gEqAjpgnV8K9oG412ZuCVhdSMett4tPKax13d57B7WnYhMDeDGBaTDH8Yo5uRaBVzrLeeVRp19FFFbuYt",
  "key7": "2kJJmpmRX4yo4ko18PqZYR35GjDqrhKSEUwzyV7eXt2k3tocisAjwQqmL4mCdcncmx1ZmMsT2VQtKKJqh2sxZ3od",
  "key8": "LEVzbBFnnQPBURyQwgKBt24CymNVktUqV1pc6aP3T2AJuDv6fWRk25iBut1yEdroh5a7Vq9jopjMos5YDYP989T",
  "key9": "5mFF2NpmANTLgF5FxmqxDF4D6n6j4kf8EXDkdyCU9zhjfaMQXngHQHdHr5xxjJoqQqkPwCFdQexubSSpebkbLiWk",
  "key10": "2wusLi2fm2ZGHuGPwUP68cfNga3qYmsXHXjeeJE5aZjKQktZTbnymsgBRqR8D1ZfsUKwnvuF6HhXC9BuHuVfbdhu",
  "key11": "gXtDoP74yU9CBk6466Kg6vNJkqN49Mnjj2WWFQVEvXEHc7LxSCqqMh9DZLysgtyB2Ry6DzfU6KgWp4yLhRzp6EW",
  "key12": "3jftLaFmijRWyVC4YsxGjGFnQXD2QmPQ3wc2BBc9N6h6A4GTMBNRYXfAJyThRbwniFqVqCWax6XkgHzJUcZ7gyXN",
  "key13": "2TayPQZNmBAD9eZpFvZesBNQ1aQ4riAEvWAHtUzZbGw5KvVuHg1rXCtHzQsgwxrCqVPBaVaaMhe9uk2QGjkq291b",
  "key14": "4aEFQiLxXFy59dkUotLkV4M7sP4XhTumktm1Z5YVRwmPoqcqXN9GGHGcGbaMjxfhyDc7V8QQrs2iZNf9uCVDieeW",
  "key15": "3VzHG3mgVRHNR7wAGNZqK8naxiJpFkGFAvhMfAcRahSM8Dje9gMBCGJy7Qk5NNUMU1v8MQ3mo1Et295t3nux1GoG",
  "key16": "4eaSXLL51U7WAyPE5sLN6enVk3yep7KfsMmoYffqqyrNoMWMwekjiZcppD3PQNKtZJ4jfDE5qZNCPg32QVtYUSdp",
  "key17": "49waBdpF1Bam8bbAA8G4LcqToGwr16Zbd1rTVT5y3i6XRhAJHmbV1QuS8Bmh7dyNj9emNKXQAaYUXnPLZZAg1LAj",
  "key18": "zm235MTYE5D7nvo5T4QCWmYFL2iw3wUmymrM8NGCRJ8gtWZg63a4ixXNyPTvjVJEdQASL1UfKCarpuNiLEwxPR8",
  "key19": "2cSqsh4SQyvJXp9r6hxVAKNbLxgYtAmvmyAkoqCPTYSiRPHZNbPWjajx6215mTb4vdm2txb4iaT152fyuCCGMLXD",
  "key20": "3SWfGHVQUMEQiVS3Upq2EGEbyjMvCLTA9QSJZeAWchNaZsv4SwHHQdRMJ97WSvjJDaBe9x7mq8WjViaasd1kTMeb",
  "key21": "2K9CTsfU6wwH8Yi3W6e49gmtrG3tX1KddW9WGSecc8dJSiuRpAZRngzyTHxxapGM7zqsqSY7Qm3CSHwt4EGyK6MF",
  "key22": "2yKTbTeRL1tXB91g69bvqc1UWT2e7fWjdQJwBGa1qDruVbiqBeyiNQJb4d84sY6e7xC8tU5gdcEdM9pUnU6M8GPz",
  "key23": "3J52N3CRZE8u7x4VkgHc6QKnUM1NKYdmkrV57nys4intMuaETCtumG3A8JvnFqpVv3KTqqdD1dHQgLmC4L1wY7zT",
  "key24": "dXVHXRZY9FaM8Ac1Mvuway2aHCEp9EHeY4yuMDDGr6KKMYfrRkxjDyfdZvtPsKs4rjKcsXGPQvjp6bAnFmVGngi",
  "key25": "5eqaQhC2VPDqeENHPNAaXmtbdCNVwQQN81eT9sRt6ruoQe6YoMyVFQQ8UhbajACjkqNkT3Ex53t2CfxS5Ao26NZP",
  "key26": "t3rcibXadt7eMJXzkTkbyfLY9XGFqbY6ex3LzouRzt8r1V8qMn18XJ5EK5UKETaprmPgTgcX8QzQh564TJQmtEZ",
  "key27": "3TJaE5yn4QMaFU8qeB5jVJVjFmvcDQ3rfGocjS2vKAguWBNpMYW86vbnEo1WQKFGzfsccQb6Bkz2ek62DjJBacZC",
  "key28": "59C3ARtBwTEmXkVinGKGA2dyyQjLpxR5G9dDxjcZXD6DM4SPu6poJ4wgcmBPa8rSgdgSdbfrXfy1UtsLXEnNajJK",
  "key29": "66RCS2EnbDTdAgo1zsQuBbu2oFtCxoZPkQ2w6RYkV9pNutkLSNEPpWww8dkKHJCPw5Z7yCBkw7ixnEwCXpPmZBRX",
  "key30": "3cd8frFb7RNKFNFaCTTSmkoQojhssjLYaj9tgtdK24vzFTpefLuikKnnqWASkoZyXzPuUE7Q4hhy1TknkF5iLHub",
  "key31": "2aAQTtLjJnnEFE7Edy47ejnoTyxNodaC7gktiy2ugw7igyaAnDq6n3NZsWmwJA5FzKpPoAwTxsnzCqJaHHqr5V3z"
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
