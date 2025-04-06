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
    "52v7AiFpnqEw8cHAanaeCzsb3FdtA4w555YjLotuvvncPw4xcMt6gJ8p32mGLC4EwbJjNFoELkqosC8NmZa4NHqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H95krMHFqMD3LBjoHrzbpFLKvTkxELegVptkCFGuqpRdGHCneoBrbG9AqKsM3BaJxMfmC87eGj82yVxz5oVFsri",
  "key1": "2z5SyC15J9uNqBQF9u64oXRE31AWsEG7RMkPFKVxcx8oKeAfy7o1cyYbbcX7wPRUXrfeXgUeL1CF8bPqTxJJpcoV",
  "key2": "3x1rgvsYPdtu17y1H43xWs7JrCYmdBD2YEDAnXQ5KbdPYwA2eDJgpiqHMcfPBfu4M8wqgKGQrPiTp7XSHdrTJre2",
  "key3": "2h1cT76Ddn8kyXUfoNwGvHm5yV9HDAmvEKrgRmELvb6xGHBCA9kFyDtZznR948VNDPrpbqHMgLXCocfP2e1mGCDG",
  "key4": "4JMXpuR5TNi6q18jW5b6sUQSPAfg4kv6Np4bKbs4AQPRdZUz3jDhwSf4dnoaEFSKQ7VsU8HaV1ySqdnsh59vqxGV",
  "key5": "2pQuc8rswCLSSQW2UVXbHgw8MfFemXi8VZnQNbhKqdU68HyY5RwXv866CqUgureN5NDyR3pAiXF8tnq8PnhYCQCQ",
  "key6": "45C58j2txzHtFUqeTJq3jqLLJ2TzbabB1WqboR8Ba5iEmABYmSKcx7G4SwmEmKLch73bdJzUkCqmhfEnLPRNo3z1",
  "key7": "578H3ZWSZdRSH1HwyGFgHoHkuXNmu8TmQnkc92E28Y6BvBhoh7RSZhu4PQuK45jnJVSkfcjauCzP2FrYq9g3xfXV",
  "key8": "5rVV7ubgAgXfecb3mfjUAPeENemiVgsHsVx3SxZ51PRFVi3umqproYJV9LunaeFuh5euKzLpXjemk7k46Qjuz6no",
  "key9": "2XnWQG5VUuW87M5ziu8osqRBqr566zRubCD9nd2dBXoHQGFMJ7RotnEnin6M3DyTo6AhxsyHmMEhdFHEhSRKzeXu",
  "key10": "5a7E1uuDEoJCRW7vUT99cUyFkif9josu9TrrJxfLzHDyb5KzUBvbxqakj4j8JoyaBKb2RSXJMzkQPQtadFdMi8b9",
  "key11": "2DW7E2ZmkVoW9jQ3xkcYgJLD1ipqcafY7HibTAQbwWc7HGkx9idutvNbzPNjMJsCobuQXVjLinALCMtDdHoTGeDd",
  "key12": "63VfG1C7TkAKfbSY5ysJdEqKjsHTTUACNfiQNm8S9wmGcKLE5NjZ4q3XN1F8FmnAGpHbmWKzXKSMYjh95Z5eEamw",
  "key13": "yMepYPnv2397MrHD2suGGhkFmr9HKgeQA4v1b9gBtQszuoBTbDrLK4X2ThhbyWkJV1h1sZkQR1voxe8mGDr5QBx",
  "key14": "66ExX7Qr13RVsRyQDupZQWCFQDGyoSWMVE117RGQZErVhe5Xyg4sLdFdUTndcJREGN5UP9BDx3iUwJ4b4jsN1gHa",
  "key15": "5RiqyHcYwCM4AXgEySxeDqEFmn7XE1nYnZRJ7XQk6Aypt1bPWvQn83qNYAH7JkoqJ2KNirMW63Z4YNUnX53NB3E5",
  "key16": "TpgxvkYyvMFmAYsBTpJ2nNE3rraQxsXFsEjvYNLd9dXAFsZhRJoxFSzHUWH1ACdWS8hM6PptDG5LknmEZAfmRGA",
  "key17": "29hW2XdUHQu4AdLcEDfrcnZ6bmxBcHDwffPvmjERqXur9YC2YHtjBKXovnhBaLsvkxZAXrw4tjQQJMFK85pQYnop",
  "key18": "3eFZ7WZQoEgxCADinUKnknvW4TeK3TNkf6kVUJkGt1cjbvxKpeBHamyDTTZX8X5BSZn2HN7GYEH1jzdvbpxhYL2z",
  "key19": "5YVczgdpLpjzaebxxdzMh1fR5mj48xT6pXZyfwEH5Ex7NtGy4crxA5LNCkHQTKh9iW63gLhuc6A34RanqELJp9HY",
  "key20": "5LL9Xyrn39tL5hqocgQChQZ4ZCgqdGQRwDXEXzjAZn9e8EwVoi7JAnMwnXq7MZJ3dzAMZASKKD9JjzbinpSu5Cnu",
  "key21": "31pXBoTB3AzDn8MtBaBKaAaPUumDPWgWkw5kaooCxWkgqBfKd7SYSSY27A7qKUnb1eGDMsuPTxLtYwZyzJQSnBfC",
  "key22": "5tRTiYV9bnDWzAEpjAHiAntZg5jTojxkg2X28zgR5gEZqURkzZ2qcB6mXsAkw5S57HwTNYLB1fmWTPyaTWWP5zh7",
  "key23": "J6FCd12bzWWYg9W53ZEY1Wb6dsYLP4Z7PTWvGCVYGdwL6brxSpjWPv9fqX3hxK1rSoxZS4jRNQE6YGfaHjRkG3n",
  "key24": "5Zdr1JW4d56rFGUKmBqKvKLafz3AYGHPi2pej46noEETodxXtUJLULt1HdDvoLFFJ2gEtfDJ9cNBu2esAFw5Ljeg",
  "key25": "2jjDywskGp581LnVA2L8EufDrksjeVohHPLWkNnkjUHoc5nEgoafxn4HZP9cceWWws46zEjFnWtCo6x1Rp8SigFo",
  "key26": "3VPZ22YNjJgiToQ2TCQbyiJ9PWGDEpNKq2PC1iAKBBVNvbtspmcwVCY3WBPUDbid57DUHYgZid5Rqo6s14H55iap",
  "key27": "3YwWpEuGcAj6cRCMp56SmHX1ngL8JvcFJdSkrGjBbc8U34iH1oLjJuaGeJ3HrWfQYMJajsUS3JrNVMEziNhRAeJe",
  "key28": "4vK4ea2J9VjWUD4uuU5sUjnRfRUFpLCfoD1G59sc47oyCGukLkC8N3si9upXxjuewyQpU1a9wutEBrnRRPm52J2c",
  "key29": "63q4VVK7PV9woWTjYyX7UStQhLjWqu2qKH7brojjSwJ6iwmnWSXo5hTvNdniG3qEAYbrtWeashVS2XSK1d9EeELT",
  "key30": "3NsRpj3bevug58qhAyuSX1gvvfoZUYgo9oLgGwVAj2xDRoY4veoptLF2hwRJtbuQ5zGMD71VhXSACP4jSjQn7vE1",
  "key31": "5U6wVSkyRykyTduH9r3QkTRUkSBrmjmhhHSNwE9qogzM9mP7PzCQoSj1mvyuQqwawL2ocx9kVFUAyjfxF5E11aCy",
  "key32": "5qfEan9vPPPYZ565d3Zai4p4jtaw7vjjzTVQDR7AFAoYcGFhRAVcWT7Gn6MHDJRLrg8j5jVqCPckzSXJhtCnXRj5",
  "key33": "2RZRx4PFVFC4MYMvzGvcWBJMKStox8bjE5zPcvop7QzHRpVLudL1EZXeim5ti9EyTVMmGk3jd7UK3tsYpQLkpvWn",
  "key34": "2DTSWqBWhcg33eZ3y8vu9agN6pTvXmJib45vEBuBx1PaojK9DrU2Ww5bjwihfNzCRerL4L97b3tbxEcJB51T3DGV",
  "key35": "3agicw6vEmZuAmvpW65vawy1fs2hL5QFQRYskrsu7Mfjz95KPaMc2UHZDxwFKt6fSVA9w8DU11qpXhHJoMeadc4Z",
  "key36": "4NhWwZnihDPqFp6MVJmRTa1ek7mdaGEpLeWqgbvTm8avj4hYUFHWxHmTvCV72D56xy6b5MnKkYkYwvRXAQ8mvhZG",
  "key37": "Hp2bfcb6LEN9VGs8G1Ev3FpeyyqgPbsr1wSmz8eyVyZAyJX5qTo126HvTwZ3WWNyGTnoJvvFZ6T3uftWjkz4yCo",
  "key38": "5Xk8LQPrm4zXZFxxAHuo2qkN2SkCvpwcdPbP7uZafeMWYhWpk4A8KU66WqCdgFUbNqL5NMyWEjKCuUeb2h45PXwk",
  "key39": "ctkQkyJoSd4VnVLTjxEuSVoLXhh4uQLpCggfnWndSEAjBCdYotw66xZX9PySyYNriDuT26LjZo8nBdStD57zxxh",
  "key40": "58hF5mzJcZ5FdX67uWbH7GemUuj7ZsKKTfx9bkonMhbY2PydgMCC6KL79dzk24K3DzZ54Nu8bZsP4Bf63YzHWuoG"
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
