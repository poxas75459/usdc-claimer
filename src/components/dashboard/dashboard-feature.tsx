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
    "5EfpAogSxzqGRArZSgjo8X6E1pnhdRwuevsFaSW4ZdZnGGmc3VjiaidLdAHTT68hz4BsVu523bu4antBu5XY7fzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "puyuzFEG3yEQZuu1GYTJNuBr9VX98nnXzE4BbUgc8j2FqFBsjp4XFjg1i7eZPptCNJQyxxiszioNQnuvE2aQDkD",
  "key1": "2uugDPcp6Xga61uqMNtwocu1szKYEQ3Su14G3DEzfHvMt9m8a7ibPMuza7zvWej2Q63S7WPqHjNapjaKM7YM2ihc",
  "key2": "5ke7BWQjLssSU2C9aSetCbYatqrfAkWeNYHimycicCLQMAqV62dMSRCVvdYhsF71nPbeEcJHCiZGTSFBWyEBybGP",
  "key3": "4SYY4CcN3bQAZ8SRpGCjEYemmPsR6nHufwd1UbXwFHpK1tPgchMEft2Cz2tsuEP5jJx3M6Wo6cYuKPMV17yzfVqE",
  "key4": "4QybwWyG3s7Tn4jsAUfUCTj6Ycotr1akzXT2AT1D9GbdhMqNqbsp9mB6miAX1KaT1DjoTZ9X6sCZBoHhMU8Aajqy",
  "key5": "rEU6Ds4zPaYP9qMp2Chy4kpNXbUpbwQCsJYVC8wrDuHXxVPRVuGJ5hhMt1RfxrFeCVRNi3h7xRAeYLsrdM7fBRi",
  "key6": "qTLNwL6WFGY2FLR94EsB8bA37skNYfYEP5LsDDnwqhPPHmKH7utdhbpF7eKkdpbVE9agDdBwYkXtJiz1PVefVbX",
  "key7": "3pvu3Q4QFcJaThwiBHytCGELjADdwRrTPDAkgHvcq5tZRVQhbG5oLAFvmETXy83SHnY2hyHMR2mUUewcEm9ce3xC",
  "key8": "2LC6F2XqS5MNJdNWmUojodXpHfwJ5hEqPMPr6G9tTKVZswM7XPBe67LdLaps8pooEdr6vnRnJX7ygegsWyRptZ3J",
  "key9": "A9TXVnPEhrTHCoa26By3q3DNg8yeEvUf7GHnjm5Kn88CWN7jppW4Xa7d3NToq1S9SbTLBWBpgST3euwrhvSFqcc",
  "key10": "5gDfkGCuQ9tGLT4otDe4ibw89wKiF99fVxs9YcTzA2TZGAUmJgJhbsiMuLdRhwCF4SkfG627rmMYmN9vs6nf4QxB",
  "key11": "4wJDVXKx43QzAhCnVeq2ZaDcf7NxybsaRri62LRagkxhypMV4k7TLEsnVJGDvCPBmm1fhaXiBTf8b4FfoCNNHodC",
  "key12": "52VcuMCoEh3JvfACuHszy2tjyug5o8UqjY6oSaTdLPF2stTkXt7QwxEJUg18AhKunu24mHHZoM4AMJ7j65a7pa7r",
  "key13": "43yQx5PZJisMASfMgUfBeSYnM9YgiKbmpqHuPfCyF7NjyubZUVMexieSLWZ43fU7tPVG7ys2xvNUCKiEvuHgbRKL",
  "key14": "5UDRgHmi3JU8zoxzrwpUZfVXoMUsKZeKP4p4ZGBWojTgtyArixXvf6jwF2r7N8Uhg9ZL12Kyf6vF4asYgfvUDRi2",
  "key15": "3jcXj7LCwGeMHbcnSDeuvjvkfoA7ZWao4yQpLCNiamywMEEz9G1Lb4apS1RT7N4cWTZjyGh1D9EQcuUeuQnV5fnT",
  "key16": "qaPSrpo5UBfkgGxVK7h3epgRoNGHmMg4YRshUwuoeRpZDeau3H6sRZLMUecUPYqRg1yNGKHYbZYcsCNC8e3a2Mz",
  "key17": "3CZQ9TUUJnoBfVFsqbZXjePAYHEanqGLGF4DaatRW1mwCbgJGhYBh6esMVonnK88ZhQAbSZznSm5GJs8S5Nh5Kch",
  "key18": "3a6Aa7TgGVWGvveymQ23YBRjSPJpeDu26fUjbU26PSPtWM9qwAjE8dYW4PUCVccwa2cC5YtWCpsnwfS6f1xtZwgj",
  "key19": "3c8EEgt9CMujLMeHMYCAT2pZpMkz2FDm2CGeicYpsnqGjnWjfkDQrCcfRaWKmLyA2koRk4JYUve2utAZTLPmYun4",
  "key20": "5WsNNieSwNHrLDRn7yZBhgyD99B5kcfU1ws6m39p2hAemEUWG54f1k4tAmDguxLYbPfQn4Za8pAqTv2YdwgX9gTK",
  "key21": "4vhMMDRJNh1hWBxgXtRnSCMiqepV4Mpcr82c3SucqfDizSiDJ8UqztM4H2mZQr4uHwYaRHzyLf7jNsd4KRN4GRa7",
  "key22": "4Yei2h5Gg6rH9VvsewCCt1VEztyHbMpfR1SS2aw1ESPgZiTDjposgegZwvqT3qycrPTv6sTmcoA7BX3tkhUTFAei",
  "key23": "5Cbe8nWSPVzXn8gzr2uFYUqjjxkkQ6eP3KYZof3KwituKGbWRgsX7mVhixDVtMaeVpfsRLeU9DksE34PMayEbCKf",
  "key24": "4ehBaQEJKzwrZTx2ZyVcN4pkVVBPW4co4Z9JR5DDjy5aAiojTH5bi9cSgjMzdxkW3MAXmp52K6moUbVkF1iKRaam",
  "key25": "5L2oRQyCgJXxR9NBoa59UcigiStQZFs9Qj2hYmgTP1nd4ZDPDXYDQLqC28KZP8arciWmZs9h7m71SGAJb6eCM3hD",
  "key26": "2mEt3Jmn4MUGyNwRsj7VNpW24LADVdyayg2fRpg5LPUXMzyhXJYwWuQE8prX4wUBWHKmg9XXpUKbLSmfQ9wCrmes"
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
