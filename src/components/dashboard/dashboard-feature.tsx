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
    "5kqv1qXxEwAWd9y22fZ6aiyGkwYuPs7Nq1uDTtR3eQYD9an1d5gCRbSb6XUDpedYz2naXU1C1dCtofBAQX4pkaGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38nTBhg947q8rJ7jKouDFB1vm37sFqxLaHHmXj8JCPjYo6nVVzYmT4GhBTmg73zmSVp8mJk27Q3kCQzghKka3YFi",
  "key1": "2eJCnBbsZXqr9ReHVKXEGAgPud8iW3wTGGYoevJctmSWaGq1cHBv3HLZaGdT1vjBmXSiL4nZD8W9RUDXsckKgSZ3",
  "key2": "419mPKzSS9LiCUCH3YnYaZwKu4MYxLVrvcW158ib3VoXCQwComAW3h36r1KQv5xDNgkGJTQmnEf3Jvkwht2eQH3G",
  "key3": "jvrTAFhJQjtRtRX2ooSXUSbNPZJKSjGMZZXs8j3bYjhk9HMNrBRWhqrDHPkufJeNGJwQiTu6muqrGpk82V6cscV",
  "key4": "3AJHs9nqptgJSJP4gyTcGGat7GHktZyngLCLaoa2qrWYu95zutG8nr1soqqJdmYeTeWVo5a32uVV5ivvoAeictro",
  "key5": "3j8VEVwgVc4ySdg4VT9DSQxs6cQZkGeL4YBierxGJrraNSuYgtsUvDsNiKs6SJomfYNpZyjyzqJvoMaED6YcJrhz",
  "key6": "4mRfWf8PSMyeV4AJtEd6CYcqsaMuzvEAA6ve8J87sZsGwb87oc2wP8jKwgMSowzZCPGmVUoag1A8owgVaifnDmhQ",
  "key7": "5cnUB8mP63vW5u9CJDag4mxSpNb9YDrPf4aDqima7J16ikbWH4CdsvARYLGysA9ndstUtAntT2NF6nyePneGNUQt",
  "key8": "3inE8DSDWgkHSDfrn2F8Ly3CuUwB2cG5aCi7KPLpD66WDjvG6xYCWEWzRHjDJHNmAtZB7QVT1K7dv3VgNo9TgfRV",
  "key9": "5pxZinGJpcQQ1hVNYhiddyKECSNJ95S5Jb2LS1nWXDUQyD4j5BAex6ewuU3uWMZJDdF3HYc5dZmH8uJq4rwR7ygd",
  "key10": "3h5EkqyLGJx633BDL3gXaB2LFFpctYVVrm9dsc6mu52Xqa7MqYRL2pkoKXiKfTPzG84JVaSthZDKtpEMQPswmhWz",
  "key11": "5pfgeGaqUYMq5QpEfQTXRYc6mSqg8oiqN9fp6dWoCvZggSyq85nSDknZncHfPgGtYkTd9z6iNmSxzbydEyPbv9tN",
  "key12": "4Wcd7GFS557WKquySJ8buEodZQdct2JE3NNnyoiNfYxMVwNFL19VcimmhT5v3inq2KEgQavBUhokSdNLeMfDT5DD",
  "key13": "8swLeFsFoVKczXbmxZvtnTCEvG49L2zmGtr1tjwr8Rq5MaLaVPcpcucswaB95WBBV1MB1W5dLgMcivpecnadZk1",
  "key14": "5kf3sTk1QoP4Ge646ho1SHMKt69QKGAQsfpMLEg9eD1doF23u7PBVudXARpA693p95UFg9vQ5vZgpxjbtASzor9s",
  "key15": "2srKoAWGdfNdyC6FLg7nKCop6fxArHFpn5LFmSS5kgzvEFHdkm1WkdgfHuiGYaMBFDoqTc6e966oFu5TaU2PfsWF",
  "key16": "5a4HYn61wiTDPUTwunz9h9daLbU2zxxvF4QRwhQBHeKMg73j6sq1rxATVsjgWabfkEj6GjmL9gLWvnUvGqDqtmUU",
  "key17": "4KFBUK1vmfjz7S6Gvgx2AFTtVNdRgX9JBTujUEkBWMtUdy6RSpH5QfvVSgs8fE5JJVSwhp1Fgn3keAFjtAW1y4Wc",
  "key18": "2PSJj5HM2QGKiVNUDRawVDKoA5vKoKDZQz29USnh7Hrojj6HugbwK72KYgp9E93qBLpNB33hQW5mXnRf4hUMhTR4",
  "key19": "fj7T4vtEKi1ZdTmsv9GKa2DP3WZy7KuHgaaVMmDhZLsQX57XvVvc9eVwo3XL9oG9oEVeyACgDwpCcdewh8VbTFX",
  "key20": "5g2yuMQrz6V3DPdyApdhrUHRxMg8sbtYL1zkaDUFfLGGks6opQnqap1k6V69shoibhZAHQR1g9T4msEzGcy6iLut",
  "key21": "3JzEpVSwBA8GfbwcGevBw7WJmFCyNi8HK2qWKnzvDZN4MaPcfWjP4F2ZshQodyxd6XBc4njoaLHuvr4W91pFB1rG",
  "key22": "5vXNBDLQgDegYctdKhgKAa4dSPdH49vEiFrrnrNGQzJGoMQd4hkKz9s56GyqELbEo5VLDkGjVzgzaDeAM5p98dva",
  "key23": "hj4XFijAXSZuYsDXuDQJkZQnmc5D4swNaf6C59vXpDt6xyrmTThZ4hd5BMNbsaqG7XSm1JqwwgPFXmBhxPB1mU2",
  "key24": "4eCmn7i3jq4uhWhYdgyvbeZNbbSikKTenC6JSUJWQGfdmmSaMnT5JgLkLFzxy1FTPx5YsRLLUgKwnEXNqK6ak9Q4",
  "key25": "4hmQwPgEASvAk3doNXodncQtCAQL2gWgzBrFDLj6hdW2oBw3tDdrxyGzsXVKVfV2NVk6psswK7uHBwQD3KAzLAKE",
  "key26": "5rwYew2vQVqRRBbuoZfJvGHn98Ev8AZzjhBRzk3tyAZjQiVWRaSSq2F4npoeY13Dby8YVWsXtS2rDheGCiY3JtyJ",
  "key27": "2KPQVC298A93APjMd8uxRgMao7JiFUSo3sueyTkFjmsakLDPqXRrFuf5Grd25ToVLUUa2cYguGu55NwFuEH15hWX",
  "key28": "FJcqPGtTHhg53Auv2hid5JEReFcapDjEYhH8hK1EPRXWtHrKwm9te8jW6jkvGG6U5CciYqGgQTs7xeM8Eia16uY",
  "key29": "2vDcD9BhM2fTzBaDmbgYd3cBsXLsnfDYNyFsFzfbeKqaBuJTRJUAzKsn9Y1nZu3k7EfTQHqXL4xgWPGfVqR2ZLZG",
  "key30": "4Ayrr9znvx6ftg7XKbAXZz3miH9fPLgBANgCU7n8ZHFTqWawJHbWuFvoLAzc85s6M8tWAoArpAyaJttvj9PmknNh",
  "key31": "25eURAo6Y5PjuEKab86ApbJXifebgDdHozQMVyfWVfpkYC4LwjQTqFFSGGTF4ZwegaG6VDRbBggRBnxSSuv5meXn",
  "key32": "4HAHemr3nR3QxKiLgZkXkkDjGVjzzDBQBKupfnf2FzmcehCQPbEMK1GBJMRr3GnCm1vtm8cRcjUR5kTpLbKh5nha",
  "key33": "5idStW2gjdPQcZFjLDqCe26TFtsPLB6H9jpxQMi8gj3fWT3dKq7LQ9FdwhiAEvtTBbYWorNsLgjQz4zPtdzdvQq8",
  "key34": "37YDZ4hsdqFNW4S6zNzfYWJAd8Xy6TaMDzLVHmNmFN91mJm1uiFnNDKV6EuJXdBYqVkyYeZunTpgG93QjkbrBeGk",
  "key35": "27H3qZZkrvAw5tDft3ZSShYRGYRFokDqsggbKf9NGFKNQfNbHjax5aQWwaXdjdta8cYhDeEX7EFJxF2Fq3qQEmHw",
  "key36": "4pa1bLk6QwYrbTfKhA4TTJtb6TFW4VnSqgMg2V1GjSJBJDtucCAzrHTBi3sLp1rTABq351M2W4648CJGq15Lmx87",
  "key37": "2mPDjM594ZNYr44Er3rSh4Xx2a1v2pMovs4jZ6VoYx6mLVyp8zmyp6teCrkV1mCReYFbw34DuFtvytCT74hHr9Jo",
  "key38": "4FvDJgaDumQ6WLZbu2kX4uDr4YXEhR5Co84wdp2NtH7RevenFA1wdKKzxsVCFzzxQaiJu3WKQB4F4Q8YrvpVzdhC"
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
