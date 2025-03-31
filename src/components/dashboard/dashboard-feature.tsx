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
    "3GAMHcbak86kPmPqwpvrSSqRCB7MYBk4zKHQTvFvEcQsrS9X5gFmi27rX8UQwniTqRLemQcCDCwSRFWCygrcPrwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xv1dVsoyhW5TPmatfDgctdAmJgnN3xY4AsJexCgRCf9fNW3nqfKmx9kNBj7gC7Z3BF9hzKwpzNezjVAxvhHaNKM",
  "key1": "3nrHmbpsQE9QjXry6DZjtMPbA9rdutTPQ7eeK2RZp4G6PA9iVgC1u2tXGGc7gzDScDX1pKV6vVpJXmV8PXhVoCvJ",
  "key2": "4A23ThHa2o8ae8QGYvd1ooMCZZk3vip9jMu821MohFjSkF7i19oi4bEtSHkgigZpMoooUr54mg4BkHvrcWQcrXvA",
  "key3": "4BKokkndwSaj6mPVnCnSyX857RUkeNbh5Upz18JFCoY8KKR7qt2vtGuNzko9Q1kRMLEfcmUcmz92pjJ5hNNn4Z2E",
  "key4": "2GL9YuG67hhEfTe31syP5AwacbRvN1yJhPx6vTeEnL7enZTkN2ZhYogPd2HpqpGnsSoBKAR3yqexsK6N5zX8EoXU",
  "key5": "3W1HuUqPALrYyki1o24WZZ4L5guCq7zaKAKRtUe4EqdJQ7VKhmZDYJjogihDanCRvF8UvLmA8LZGT7TGXzdURBKi",
  "key6": "5Ewkmwt9HjTdvf3xWy4mVW9KEkdWCpf4N6scNQUudi8jcoSw5dUjXP9P8ZpJGucVHuhEndpp5sDvTULBYnyLhpVd",
  "key7": "2DoHufc9hWuu9V67ku1zjSgmjtHVBbJZEgUyfFMo2VEsSRPmLDKbEJiFwcsdKYdj7kTgtSfhwxi9JDEmd2C23QV8",
  "key8": "61VCxcshNzDbqg5S41LhWWnZpbYpuRbrViSjGXUgbDoVHgLgv4z22hqaQfN7Uvi1Q4jtfrpKsmkbtkfRuaMeKBgp",
  "key9": "3bbMoPSttrMiRhadnKrRDexeMyE9SEz71BZTmc3x2n8P2QP8R1zshtN3PMzUtQrpE1PRAZQ6zbSymPeF4mMJ9WJQ",
  "key10": "qfSJDRiGDF9GeqHDnCbEu1uahSEadatV3MXChWZzBHWVCiYWFsfsf4xuznhFGFUNVx32DmyyMt5yLPuvQG8dpgy",
  "key11": "37vXUzpKt9977RKMHfs96L81D4cMJ7RSqVB1bAeHv5f8nSqJp3ddjseLSrGUydrGuEWLT3YGTYerKx9pGLd2apex",
  "key12": "3TzNGFipLMMB1BSR92AuNdD6kXQZ2rkJ8jvbbjffsQKetQuuiYN9wf3Ej3pT5cfC8Cn5VDprf8NzghzsxGmGyTor",
  "key13": "56x4kNsSaHx7Vb44ryfTQ1PfLBApvp41JVAxWB8s6vsRaDThGr173W9GEgVT5iT9HwSh6nxoZvrnpAtfxGWe7r8v",
  "key14": "425JpGFFtqpZ8EaM3jQDNc5iokDZmborGKhZYHZpeUHqeEKy5pQTmUeTqLWDjmseZET2tx4wwnxuR7FmUfYzZBg8",
  "key15": "xvzxF3pBLu9oRQHaCGRXppZusHxnE3jYAi9oqGndYjnq5cXcnDhJ5PZCXGMsWpsXitMWaY6hyBygYLTXeUHMtjg",
  "key16": "mmBoKcTCxefGBinoc5UmokdvCZ89bmttyLUEx5aZLemcDvsCUeZR1M6TgVFbG99nQKgpYjzKZKXzqTFKmjyTPAF",
  "key17": "28kVJEa2joFpZzmEdHfNWw79pKwsdiM5J5j5yARQ9hu4PXhfQLzMZXcASbNgqcjL6bKErr7ELiejNcDngoHBxGwH",
  "key18": "QnYm1faCbFfNgvREfyakK7EygTuRuPUEKcFZicQjgHH1cvxdMyitKW4biqmzSz5MmqP28gcEJ4ydHQSUjLrpUAf",
  "key19": "2nMVt9P4B9UvrsiT143NF6ujYbSizH5UtTn7s5A8Lk961AZu4ojdo1kpw1vJzRA8m77B4xJJC5rwHbyFkvRk5eV1",
  "key20": "3n9cJD8rQXTieBq2mApgqWP5JRV3B9Cd1bC4SkQRMnmG32Ftinayy9nUNNsUHgj56Hhgk1dx7parVAkd7ChyxtRc",
  "key21": "3eWFxWfGuG7eGNu7Ywx1KF2so8QbzLETJnQiFExdTSGtKpqpKitgn91SEPsQeuGcn3bVyLuMBghvMGJYDdwzZTzS",
  "key22": "3xxyrQR8abKqoxmCtk3jT35AX6mrfErGB7GeHvryp6yH8Gisn9dzzaXrYjc9KvGprEEhXPpEZgvvL56eKFeJ9ZUp",
  "key23": "4EHF63Po3qPvKPWmbL7zbBwX1XHP9EUHYDVBnxpfcJPa1vG2ri55MPGj4SZcvgFmFWEZa471JXhxP5QZsWxQE2E9",
  "key24": "5eRKTxiY9FcSG6yUupWF5Q4xcYNW68brY86bYwGArkH7aUBXGxAjwhFSv8R1SCWTdeZn71YHoXt8zPMw7jJh5YfM",
  "key25": "25G1JKSLd2opG8Z3brSWWcihAX2V369QFkhecNJn9TEd2xgZMwKKtesA9qvVEAGb3DoMakSrbRxoCjzYWPdjyzP6",
  "key26": "33Gf9L5gtRWcKXiSLBvbeYCK1KXncQh4QjoEFFDa2FxM1uppJg1wQxPMhEEAzrqq6csz5XbKn6ndiJ6XFsBmjVpp",
  "key27": "5rPCZN2LwHvtofEcZNoKvwLR3rNZt5NDzN2SURAuLxTGPDeRuD2mcc91RDfbar5kx98Vhf9ZKSUF9ybGYfHiLSLn",
  "key28": "3zstVRN8zFgj2iH8mKoZb6rWP4bt4JkqcUt7uVbb8LA2cRH5aoWFW7artFFytJ2NkqgGuN8xxFjg8Vu6hfnLTBQw",
  "key29": "49HGdrcMxxSMwLcQePfTyu6Jx8sWUs6ciAkpTG8CttamV9xVYtMbyE1yUo1MZsigR6RZS1tpNSWaFXzU1Wx6Jawn",
  "key30": "2dVjznFpNFK2ApjFhJGgosanbgc2eo5TDjRZSn7paZxECX9xVHBfsGiJofCmRicTCFVvRWGNvcaVDMJy2R3krvAR"
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
