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
    "4GVEuZwNfapBojwjE6SXKRgsteygLSd4ikZmuf3PNn5C97yiqUU3YXRf5nK8DKRyw5b9MXEuDVutPWB52YaAwutd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wAJP29SaM3AdFH1HAPKjUo5maf8Kby5EAV9edqxK21vCehWd2p6C8fG58DUdBuVwincCvrat8qzBxCYiTGPtMYV",
  "key1": "z5E1AmcUaAC3dujPTZegvChrLZEVeM4sfToub5HQKAb2SCbDbb9apxe8FXLHaNNNZ9V3wP83XrxmVRtbqR3JhAC",
  "key2": "fQBfExCpD9AJYxHgwqUFWMHPCwdt2Kep4oZQZkqhJSztA5hmEkR77jFYP1Jp2xVVBsAiQb2UjMK2aGBY1HaU2MA",
  "key3": "xcib4vugC7QvN958nuhrL6fJF7P81FgRzSFzQnrFR6RvHpqswq22REaCD4FMbMZrQ1fCiiW1rA3oUyjhhpomcEJ",
  "key4": "4UaCxE1jj3Rr8c8rKBFZJzZzLfgX6PWzzpAQGTZLkQZdJs3TRxHMXoGKiQdh8Th4zEeuKisv7E6ZeH8YYyKBjpWe",
  "key5": "2tjuZ8SzUMgcsHJFf2KzYkvdGJ1yb8Dc2xKwuGE6SZdqnmL2SmnkmC3SG1jhHCv3KR5s2UPsmroQRmdqtxMnYmPU",
  "key6": "611PF3XCKzVAWfrqa66yhgb26LsgfvKnjt6Zsb5ZYEnb4u7uomXGM1Xguq3KYa77iwZdC3nYdkNhzZ8Ht29LtV5y",
  "key7": "v2qVdCe8Np1hp8jnCG4NgnRwnrYH5z3TwxsfBqUgMYUXbfgtnyBTwhDTX7viSpHBZ8Q9wAq2vQC4uAowYiHdJm3",
  "key8": "4EhovbjhDw38niVyJnB9FhYS4huExAbm6ydHvX5ANnwEg78aERXh5hGvrSPoqQLKwWXTfpdrGy1QqW7Gxmy8owHX",
  "key9": "56XH7TikmQYGvKNaVfCUPNKsXwoYmXxqBepqkBzcSdjPtwQo7mb58Kd89CoGwG9J6m2GjCRFSCdetEmKWPQkQkGt",
  "key10": "3rZQ1Q5N3bf5zviQxo5kFdYw4M2s1thQit9tedCqbJZR5BnrfAHBwJ2R3AD3RfS2Dm3VpWmDGFDCoHvYePhhNUxy",
  "key11": "33ncq9kkbsN7zbEMaQsLG25o3Mbwc2QGGvXCaGXpth2B9jdkUhNHL9YxLwPSWr7akAXCgwdAhFR5BpR4wCoQJhMz",
  "key12": "3TMeixwyULpymunym2QFXicXSoYuvJscMh2cRfYCD6xxDy5NRh36SaL81jA5tg9tUKq5CtVZLdZwGRHt5W7ZF8Cu",
  "key13": "2B7rPF67DejDXXUm7mGAEKSyinLBmpypCtcpgGRXqgzuuaigrGahiFarqT2VUYich6LR7XuMUP75ZBHH25vGoAca",
  "key14": "4kWRL7MwUTP24jD72UpWgcuXqmHdU7ShgjAhyXbcamx4iTpLSDjT2fZdMWYqfQUmXnnuyR464e8GwhsgPELWsD3s",
  "key15": "513gS1tMkm6JdkuDN6ocCfCotE6GvRESwPrsWGTzXP4ggsFUEVG9SzsmzfYAfKzgKAcdQxubH6YR8Vz4kbJfFSnw",
  "key16": "3cRYhHemzAWAhjmZtxXQCrYGanQBx7h1ooUdY8iCKELLp5BoztJnGLyCWQV96iJntMprhAgvQSywTLboucRfKX34",
  "key17": "55cc8nPo3hQ5ENfaHJQQ5xi6y24fY9d61pt5NPNdXM44puSh59NvuDyGWRgwiFWhtvRj5EYL4qxwWuDdw7RAVg9X",
  "key18": "3E7riLs1yDgvZRb1nZZ2ABddaziEQirPNV1WPrpaAAGCSsMqXF5NFMZWkMmP7oNxpKbMJ9dreMXCsTnjz4MUV5Fv",
  "key19": "2LdzGerHeLX1FB8PPvqJWetfboHALA9G2WGPhhd1QVN7jCc1UyBowAb2YnEAQnXM3MFjErghxm7jEPraPYKn319N",
  "key20": "e4GTfLEyPLryWiyDJ8Ni3RyaYDWRBAjXqcNyc9E9Fd4r2NxzwvMdA7m89LUtxDt9LHzgX2UTab6nHawah2gGAi1",
  "key21": "2RKSVSMn3kxM21MY2u2F9D5SWjHKpHPK6cgw57ZPWxzcwMvgK5Hhs1kkrndDQNiFfKEU7QzpUXcccE5yBPayB2vt",
  "key22": "2oW59gPq7bHTh5S6qg2yHcrZs5PJ6UQUKZg53fnoxqf57fRN6CuCv8XfoTmSBjzQv42bseZ7HhvGkbGx1TRe7V68",
  "key23": "3CDRTfbJ6W1KFoSZ9AxhsCidV34ZPpJf4m1TfpP4gz5y4HwMCzMXVbqPNdLAmvF9aWUkuk6fPUKf6M2ttxHQ949g",
  "key24": "5NLxMbKreZj2NJrvJotmRw75qjDEodc2ByCUui3z77DqhuukhtAd1Y8bqTWfcKq161DuncciqwQkpkGx1MpfWeA1",
  "key25": "5gfq23FhpwZKwn14i3bYsq1BoPCvV9oyfFyv1v8xMzVMGuBCk7cXxXSxGZNWedqhPnZqfDWx5kpkqrCMXwooobfJ",
  "key26": "5YDGQJgbPkqZyweghgKqpn52HWwAWhH5dP1pFtpBt6yvooxR9ZbhDDgz6QCYyPzmcM5eA2sfWjoxAGCTUss9Bbj"
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
