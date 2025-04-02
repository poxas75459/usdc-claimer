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
    "5zbqAQ4JJhKG5CBfDcuLLvYeBeQmJzs73mdx7FK9TzX7WqooTiQ5BXWQqVy3v87NjoZ3LXDX9T3cebnuwQAn3KpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21hHrkBjTRbfPtijgVDCuCrq6NfhGwVpXYy1yXuPW2cj7WeB9JefN4w6SYvj3qzqXgLtWMPG2MzVvxAHGBdPKqPc",
  "key1": "5EJKbeUEj6YtyCcZu3cLF4FjvFVGCszgANTgKmVfaijZWaEQt2Ah9MvSaGw5CPj9KvN5yDw4t7ah4RZtw53Z8MuR",
  "key2": "4XQAx8qEyYXDMi6SKQoJtX7P7RCs3dfpnZWAqCZS9tqnSHCkJkP8YqFGciBTLQzKz3uW3d9JnjBscACi61XHa96k",
  "key3": "2RdpmgcsJroUJmrN9zqJoLFgBWnYogJJj9SQhoB5efmxmrtcVSitfBhKqScHLCFXihQoPdozRD73cvbtooENAUNB",
  "key4": "26fkfXdFifZuSMW4AXgZPoZGWzjUyVwtaBzzFW6MK71aADU4BzbY8qYkUSsMU3bBpch78ZM2db3PaU9Kaaomk77R",
  "key5": "4yThtHuBTmzi5VwnjnxAiC66FTzpZ3JLzET2LopNMjSfbVcSdSZJKA6mk6hirXLppS3y2ReKnUykzampNLxdNUeg",
  "key6": "5DCX19t1TRVZVeKB9HzQ5LBrFVALs37ctc5E3XGBnLqwAcwmWaN1cH78yef6Bzofaywc5RRjn7qi87N8eQyScaTZ",
  "key7": "3Kuq4bF5r2qTNXvcjBH9FbR7GoeHbYaJkWB9SCoUbgk8wDB7DQcYQAdNJhSXesThG7m1uMkBjtBzYEDc7e9Haxsg",
  "key8": "4CSxZHrw9wr9vgDgNTYzah7cRs6mbykHnrWEcvzqzHNENX1vPVzWpxaELP9JztAgfsLEPTSeMZa5S67M3kZBSvjK",
  "key9": "bhqvNX4uiXoVT5Z4T2jwW81f8JRPkwsCmy5iUS1d4gTufLhN5GoYmCoAwHc8xJVhjXjPRH1qUUNqgSRDEZNogSC",
  "key10": "oKsLpRD5b3pnEvV6qU3vgskfn2h1wmAcxMvNeGksFS9f8MRr2HhwedYHVJQHvA1aoxPQBP3MK9g57PSbXm3m9bV",
  "key11": "5mXrwmW345rdKWHQ6LJrnaLvK7WuXpUm6cuNisQGYhcuC9c4m8tKEGV86BLQCVAHK2ZpNniX6b4NPTMgjNKRoaLp",
  "key12": "3XEKoNe843c8UF8Pj1d6xVgAjgdaw1cKUzArYj73NPFbYjd9vD89tLWvN5WXNXKECnNKLVz9RGyp1cZVBLKDKTGN",
  "key13": "5e4UtR7tJw4FYzQrNpCaHfbfQ1Zdx6dP1KtR3mdF2rShgPfUntEkP43n2KX5zftfwJLvrRWFwa56bgWeWLtHZrxZ",
  "key14": "3fiAjtLPt94VcZiLjBi7GcAnzxMXtcj7eSW34bn3UV4kyTaT5qWCepzf4S3Gzwgpdwe9gLk2f9GoYY4VvfgH24qo",
  "key15": "3NTBUWUqyohNLFeza2cti7xMxZaoAeaStexzL92gxizKZFBRQN4NN3JDx7p36oo7noxoesr5T9qt3AJ2tVH51ht3",
  "key16": "3utPebRwa189x9fRELD1errsKuQxeddQSJgXS2DqK1dzhCqP9g1P1hPj8cxzWqFGqqB6BcH5SnfzDppkre6r8d5m",
  "key17": "4fuGESU4k87EfpNBUjAzdYuLCSsmbg4VabZo76vENEFukXqoZBorYBWA27YcCJ3qagsNoHCfSrdvEzRjdMndEXXz",
  "key18": "31kjoVQemcXDbqu6i37R4HwDLW37mbV61Vcwwfxf9GKG5AJBjXGfEpZcwTZgmQ81Bvc5Yt4cYb4X7rFrBxVLcD7v",
  "key19": "3SaCTs7bnqXX71kHyNKVKHHP17wEjmAmKhgv8BS45TrF9dRz44HBGvZsZ51RPbGZSA51gjRzLheekgEWNmZXSZ5c",
  "key20": "3UiHPBkzededpfWLaBHYoT8MT4BCiVJdUdS2HYS4ZcWouCcKqU1ka8bWHJpNTVVaTSkscaZJwRmCqRDcYcY3qNXf",
  "key21": "23DqZ4oSMunGe4XHndY8uyboQnfoLeMVDZatxDK5D7u7axX97E4wRArJNa8zPTGRcewydduAmfgqxsVEHQLAzKGK",
  "key22": "YoP6NkhxfRDGKdSxaTTWBhCeVFtCk6WCDH7h8Nni9kr78yehHufWjX9mAySmFpzRe1u5vUt3H7YA8ehet2oo7Pf",
  "key23": "42ySyZrXPh18RLw3edwGJPKgeXoi4aw5aZoMHhpMD94B9skSmuG5qp6bXmcr8NTGEzTG6ZzvVYj1N4SHo4nrSFau",
  "key24": "3tTi5x8a62mafc31TvpoffhisnQrLFz4NYd7sFUhBih3LJSDT3yYbQ94Z4z9XKo2NrxwTT3nDrQyrYu1Grs6vxBw",
  "key25": "5xYEPYPeesknc5HHdxx6X7A9tPLKpyyMKbJb1MZpoA37upiXG445rXa6b36cfVi8vpo8R9ZoXz2fHMaNxReXmbjn"
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
