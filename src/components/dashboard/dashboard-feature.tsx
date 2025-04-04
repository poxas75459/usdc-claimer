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
    "BD2qaC9DQAg85DpcDVFbkbrPwXETKbGG8HwEhGnFwngftPRsXY9YqV5tEhnGT4YGV6uo4K6ctvGyfNBnQnehAJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vnzaa2uUt54EYqB6YwKFgDFSFYM4aSTpJQpveDkYNit23fXpksuwLHF1h5x91chzUDPMTpovvUUwfn3Q4hZK4Pp",
  "key1": "r8snSSqmMbdmBeKP85eh5rW8agHTaxiwrXwwntD8m1zH36VSNUZEZGwcNAVxVqeZkL3Z6qatJsK587WB5KNLv6D",
  "key2": "gihoiejQebKNiw5GKNEySL3Eewmk3PuaEJkd9FnQceJu3LHYsYuT6Usib7q379EWD1naMAjyRpaC7i1AmtzNkjT",
  "key3": "4ek41nJAqHLBqmuo69A31QaYGNaPpwhmLr8V4Ef2NLq4MqkEubL9mW5daSFHCGmG8zC1wZAN8h5qfLEMtZN7aftL",
  "key4": "5JAZCM5EXvjwKVXUZ1rFRAt6Jzj48HWXiUHN1nLSk2MYrw8dFPJ1vN35k64hZwXG3eAZvGa1SZX4RFye1vtHB8h1",
  "key5": "38JXtfcTHqsZzsRLEkWCoS8BqrpLiVtdnJMQJaC6hdZB9PkVRpc2YHh53bxEziTzm25evB8AuxmGCXp3taVm3y2z",
  "key6": "3usa3r95EKh4fdTbrHaiNyh67m1EdCsxkGwHSjwoak8XKsDnpRF9bJRRNpVfmSJubEV3sd73dQNfAtWvWtViJN3F",
  "key7": "2UVVBZ5zaVSCkYvx4duXVn9Vmehwx7Vd13oYXYSc7kAa4AsFy9UxgYnbbNGnfiya2cuwPPMEEVc7Wm2wekPjBWEY",
  "key8": "3fizvSkUGfU2TSXUsCEPC4rgGSeNmkv8shiFV9LBUAzKi7iATvfKQLJNouiLzytxizgoVRV5FC2RsGJK1zo9QK3",
  "key9": "4whCYADGH1f9aVrXPBPMTQydVxQ3xYqGt8nGv7ZPLUjsYorawH5S3rCbTeDbUemVzFWfwFKsshGxD3a7d9q3C7T4",
  "key10": "gpftLWn133DDFfrykgoRaK2L66g6mDtuzgiHJJB2WUdGLVYkECDB84UZ6V2MzjvCdRBHLUBp8nywzBo9WP7iD14",
  "key11": "2hDqWoWPxadL7Vsd4SkZGBuTkX9XCPKGmYBu9VpiLunKP6LVaCAbzDUDFQpLS7gXtSwVMtg5tH1fRba6nASbLmQX",
  "key12": "2RKAaBYv5hUfpQmwGrviWVutxAEFRQ2ijrfCc4KjLQcDnSUpmW6Ch5AF3tLoSE4jNiEdfUk3TLNLDiEpAXbwQR3u",
  "key13": "RVohkoGJuyUDksLkSYtyFe4j3jJLeFAyPkqBSyoJWTBbWSB7wLDCisVjADZKFnDiK5Low86NjpR4UbbLRYT3KUV",
  "key14": "5wFFEwQBGGxFaivL57kXyB5A8f4WrLvoqbrfc4S2cNP1ETFvoxWZ4W3w3nhXKuwC6xe1X1xq6V92FR24xAH9H3hU",
  "key15": "2a3JhjX7TFHim6mZDPEstPmLgfTA6qHN39vkxhhm8mo6HzMqQvb9sPPFCD6kRVS21xBu4tTHWgfx1W5bp4stTPTa",
  "key16": "iWPZTrvQcaNcfXauXXfsLyMyjVzdhsCBDbo2uze3LCuHL4oVt6BBgfCuvqXvG1PQhdbJ6mgmNfuKxghDB4q4uRG",
  "key17": "WtUdhot5Eg1scGyA5wMVYXB4H14JgbcjgGRmuyTjbTh8QsWRpW1QWCBGcR5rx1BjgN3RuatEkmbNr669AA4Xeck",
  "key18": "3uBFP124Enj8Ej9o68fM8puQ2yAjjnu3RLeAuo1eT2Aeq2snPogMbTtffcKKX38cYWhvVVVCeXvLGk9kdeaPyoVf",
  "key19": "2Ho4NXg2Zuk7bDWzPZfaKs3DdWsm3Ku66QZgrrTyr117oasbuEtcE7DLk9eC7zT8BrhQDb5NeRpxu8wD3gf4aQDW",
  "key20": "5FXGojpbhTmbuX5FJmxov9rUGS8iNCc28LgfQ1KydsSZ5WrdZNP49zonDFdGey3JvLMWUaaHmtuyp7ACEnq5vmri",
  "key21": "679BZupgarLy2UVzEdZjDc742RTYf6yvzBGnmg1wkUuxWChh8LKpiYNeCWnJkG5ddMX94HppvfRmWuhv4jupVFLu",
  "key22": "4S5wc6JWK558MQoeHuYmu8SEBpXeU64zBMJK63xFZK6fM7WqtD2Agg7dHg3bdAyt9DSaZhJpwvBY6ELAcz7zdXwv",
  "key23": "5DXqRANZEm9fGBqXcTWq1HAbbjWrhDfT2rU5K8GJN7hJ8w7hK5xJ2goZZc5aHeUg6ByL6K5XT4sER53cKc6tJA45",
  "key24": "4aVHbZoJ2ByrQEpSPn6852jYhMqWKJQrMYzdsscSCAvBAAZUuLtseDr8ZMGjVHDxfJkq7LFKTUfhNJ1gMJuEiswj",
  "key25": "379nMgrVwZGajneLbpB1gqTkMFjBpNsfiBpZDYaqQJSKsBrYNvoSW7ZSiCg7TYpGPiAFAJos1HyCLiEZG1Lh3ZDC",
  "key26": "W4ed1Q5SqMAKeL4N1FE4kgJjxwCH27YQjonvqmhC5WrJ1BSMcm8JZgT6yvcM6gAK5oGLH7ok8TvQChifzxJSdVn",
  "key27": "ZQAhVCyV9ZMXB3hRw9VvgsfaTRWVsWDjxYCXRpY5QbKZSd9UmLncd1RKpZxKP1wPJw1CZLWaH4zVxDFwuK1acFy",
  "key28": "LdyuuTaGV23mR2HqZKbEaHhMZuTpXH3pkMQQTLVe7uUrCLAbgDYb3jYEJy2RCvwD7tFydzvtpJnVboGbqySBjQ5",
  "key29": "4utoQRYkUwLqDUmkCKLrNDneKzr7jq3L9gsbuFLTBE6RroL9LYxgSTt5jb94w1RZZ532JWQXP9LQ6wA69sHXzGsv",
  "key30": "3G5urNYgV3PSeHh1Bx6vuUzTLJ5srYKoYL3N4GmoQkHv7m3HFzQFuKsiLRkgos8sTXYPdNrBTGJ3hrd43uMVffP4",
  "key31": "B72uEiuchBVU5tLMi4kNiTRPphbNZEqpApxFhPGYZfBWZasBeejzzrK5UiZbe5a7Zmk5vGJ83Pzu46V9ikohnzB"
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
