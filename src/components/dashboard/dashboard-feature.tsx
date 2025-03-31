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
    "4r3pTVCsx6EzcqHLxthkm6nURpwFxM1zEaDa1reQFFQQ9HVrqMZnpzd6nDkGtSTPwyABJ2JfjxmtrAxHAG6MAtgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XnjqP6QHQoeAjsxoEzHGyBZjfwNvXu22SfYiTfm8c2SyEdTnCuu2pT1UZoAdYauFFD7LT5ES1oaJguUUZA4FWwQ",
  "key1": "5jSSZCt7wfrUQTgtJ179tTQbqCTLAnNjGnZ5RRTNMr9uLZWQKEZKxgaGwRGs7ivR4kTabETXqhQuQGqHwGPFy3xj",
  "key2": "4eetkzDukaYETLxJ2dESLEtxkq4ScHphF7TEGJAE1fSwdVXWMugzpgNyKfvk1GfVbFpuxiSxiy3UqSdEpdGqUqiV",
  "key3": "3qphksFzGXVuNuMwxE1HNJxi8hqFuUR5kesohkwhi3Y7yjYvXDoXUitgZmBM9yvtVPWQK3FBoNJPgvn6Ku9ToqnB",
  "key4": "34GVN81UHy7WBSLDYvjPQha3TwEVYfTjwgEMBfa38e8MoYoxPEDrJbX7DaNez9RxzH5hq5VcPbZEwPJA3v41b6jT",
  "key5": "5dFwWxLmFWJtrVstX6tRZMxct3zQuiBXNAhCskhbSC3P7Ae6BTuBUChCgZWkaFxjBAbKDnxH8WA4WBG7fSkKF3Gg",
  "key6": "22NzFumUgjyStcuWEBV8rrQyzWqGy1Xod56xV167531TXprvt2JDKGHCti2Ny68LvzX2wjjoxbvbdsksUwSyMS3N",
  "key7": "Xnx2yZ5UYQCAfacu6GDNSw3YM1ptx38fE4gUVbe4san3GyPW5P1HGvHBD48CpGhfwzq2C3VT5tGipGjQCVqmxQA",
  "key8": "674yTkaxwfinsM1fipgUttCVQBzUtxpwanicnu1cnX45MiJLZRCv52FYHfPLxgTMxCjGMRwQGxKLpMmLzqbAMY9T",
  "key9": "Gcv43jHwk34Rp6Gq4T6QHP5D1MHBW5s3hLAnVbRMMpPjnV7Qjy3wJegPdxjZqzcbRNqTH31Sh5S1uUVbr4w86uV",
  "key10": "4vFuXsAzHoqUpa3cKmGwAvjqH1krGNRkDMs6jZJz7TiFSW5ebMVDew2tze3Gt6FhGLYKg8NA3cTYrr8uvXgiP1rv",
  "key11": "497Tu43bLbXusG2k8QXfWgiGBh9mcS8tRLuNdf8e2g5awE8Fq35UhQa85g3gdWXtGkxCavManJhWWXak2KwuJCQZ",
  "key12": "427DNxqJbsgVdA1xrhFWWXiLQeSWyfxhZkCtD4sJEjprqaeNCAGa3xDuZecDSqbLvu1JpTmx5X2VHUnDkQSPVRA6",
  "key13": "Sbqyv7wzCqFxSpU8PEN72n3JcwrSqxjRjLZypKatnhMc2ukeQaPAthvXtGWNUUY4DkZEaNfAN3XLMQaTWNzG5oG",
  "key14": "26DnXZ4Pz9XrvvH8FRS748Uzb1g1fK7Cbrrqpz6DtPp6H6fbW1QaJvWmmoeRBkQaQpzNFayJSSiuEs6mJv4q6mWL",
  "key15": "2stjBtrvweKEyLNQs99sGMVM46f9St1bjGUoMN9A9aPsXC22at6554RJbMLk8Fy1cwQ7SgeNmhBmo6vRurieNrV1",
  "key16": "2VZFMFG1ruSkPxe1YhThxGrViRc4ZiFmQSpBVTck945M25qUhoCrAZrTqKeqCPpRY7nc3d6m9jCAtw9tDEBfxpm8",
  "key17": "5VF5MCDkXyZ9DVcozMU6xi4a9NwsDbaKdc1eXvF6cfLVYvUXP5LWVZPUbtCsVanQXnV756cEwn2uTW6y3WesGRyG",
  "key18": "4Caug9AceT42AmFZTpsSADhaF9jYjKCvXWqJ7ijAZ1d6VcFBEQxCs6SiUk277i6QUSe821gWWufLJ6N6eJN4Mrae",
  "key19": "24bLyPTdQwUr9YsKtrzvZLKSzFetYgsNxP4EHyquHg4E6tXDHKAFXjva8BLWo6H9NVsgtgKC9GfRFoVqyuzkahck",
  "key20": "Wy2brX1Yf3NuMUTkWxLwp5fUrAsAbBK4UPKDMfmZFLFEk61RqUAZFNW8wawTBUE8xiByR6AQ2CNo9UZ5E8QtxYx",
  "key21": "66aWy6kvWweLKTWpe6B8S3QTSPAzv7uWAyaW7WtGmbrJSSBdYpSwEpgq1Ee8QXv1MsLFvSWFyMh5VZQzePRFZYxw",
  "key22": "3ZjMkeEjagJH7UErXNaba2vJr9xjHv6zCBYrzBP9f5wEEwkUfKArtHfgXT9ycwkNLcWDR3vKkmESsRy8RtS1E2hw",
  "key23": "2cik8JpeHPyfKUd6HzVY6F1D8HHVduPhN3dxw6YQ4ZH4YqeSmLFheffbhjRYb84pUMiN38o2oNaB7P4fJpbYzfq6",
  "key24": "34heYFTmUWyRvH4m6TfAGEaK194i98i897Fr1jcZpK9qyftWsi2bicH6oeEPSpVhvKmNbtdfH5rvxxtRoSfTS1qn",
  "key25": "Gdyags4comy9rmyDNhYhMdT4pU26BaS2qRkA36xvLm9jCfd6f2yzCRMM24CVHBxxMNBEXiBJmjzJHbwC8ZT9FKZ",
  "key26": "5oXuy1Sxeg5DY4vz3JjBHqotrKaJV7u8Jdog4pXeyxNhDjvrfikfuV399h6jNQkWdFxmP96SDGqfB1bJwSj6gpvu"
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
