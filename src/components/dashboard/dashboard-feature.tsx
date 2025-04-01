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
    "3taW9KfpbwrBzLsi86DkyzaniFBzwLwjvEz1AwwyiUikJ9XnfhpoNscSybSuDY8weifKhrhdP9pbzFkVenUuSFZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V9M2pTTQjMfdp7uaHVgNPgUjDgJ5hYDVh6en5YJFJCyVdBns3HnkZBSHnvechZ6n5ANy9PWHjm3TafBEvYbqL1b",
  "key1": "3rP4YhmDch9oCg5Wh8bZyb2pD84q93Fvz9A6ydjZNSt5TUTai84cp57GYv7ABiNRMEFBK6pz63PpKEty9196hPdk",
  "key2": "44mxiDxY2nuj2n4eZp69qc5fvaUtsCtoGhU3LbYySaUVU1oxULtSXUBrBNd3AAfaARcaKqmqCKJbshaE6hUUy3Ug",
  "key3": "xG9QmnaigKWpgt5utKuGK9iPsHbe83BvkgwM65D4aEsTfYrwiBLyvXEiRAFRC3n7TzokkGHL2Hz1ZRt5Jsu1tUr",
  "key4": "5ckzRgb7dwhbUhZYj1f1657vaEK27hvgJB7bQwAzH1Z1DBDwUPgqoLgjFCsyK8rY5mS5BdV1CrufgFgdPnoU9d33",
  "key5": "4dHFkQ2R4vZ1puCBs8rRZDhEhdABKeND1qthv561j71KWupanA3egUZRzQHaDed9fnTCeA3JSXK1tdVrdq8B6AUC",
  "key6": "34fQUN5M3fDaAFq31kGzMneDAkxT4Z52QLhrRqwK91EaxzKTVycM4pV2ZEqXJT3N79PdzV98itNV2gF6Dbm1TMeq",
  "key7": "5o3zoHVTt1DrNQx8KAA4mzN9eaWHtwUcDDgRKHzwnZbLfrojFNqAgRRTLHaXpry2nsrspQp9oGWEjxXsgzA48osr",
  "key8": "3mYrdn3jgXUq6yuTa4yLVCZGvV5WmTt2K5zubpMjgekFeyvdn8VmumDYDRvTH1kavKAUMXEjwLGGJv36VTt468f8",
  "key9": "maihq7vTacm1UnVq8KDVHZTHJd23DSTKxJx4kvuUc5V9Vnv5RL5R2QxCKLxqWZvf7EQMjB46xoYv6PUjk55sjaH",
  "key10": "2BQTwGvZ72JyrNmBRZ1BLjznB1K1SXc9ktNmShbXc8CbAithC4dpz3kR9FJ7UvYkgxFpNn5yiCUGUnmCwR52tuXX",
  "key11": "4VHNNyCAtE57KKBUHzW9Vzkbogev9WasCv4KJxsfL8XM75A1nvJmyN3q9BiNydhsiZyz1E32Bi77KntzPYBv5GTB",
  "key12": "38k11mRvPHGz5hnxvgVRFcWccKQdAg1zmehTAywLzxZSGj6CBXXpPfTZpxLZUXNpkDr5JZQxrT7Du6yNX6i4dAy2",
  "key13": "3pn6erF6nffLBthXvoXjuGxEUc1RCATbHekFWjR3xbcwagKKMkTn9CBMw7vBzZGdSyAk17mHTefvbATfHFQj4U39",
  "key14": "4svFmw8S9XRSaxPGLQnjhbYDbTHrodbX5bG3Kf7KLYbQGaAHx2Fs2BQrNrBf2zDUpY3aUesRdYS6typS4Lb7goRM",
  "key15": "5y5xKV5rmzU7T2LczLV523PEVXMT3TJgrJ8HezoqnwwJnF9jYRWoQVrV24vMmuoQaeXUF25FmSprnfM6ATgZhQ1R",
  "key16": "3cW36fphMK8JDgHcfmugvNn5G8styexD5zsKzFHx5Fro5rMC8A2sQgjCMd1827twr1uBnHRK3uji99ZqDgQ7eiFz",
  "key17": "2qczoa1D72GfjfNaRJNsc9qhPrhWyLc6t5HL5F5UgWWb9ohd6hXcnj3XVcfcQYWZ8FphUKMmyEcf4B1rF1WjNFF5",
  "key18": "27BupRpFusoLaJoT462uJcyVBBWvSfELYgpHWHhrHfjDCwbLeJH5xrR7pi3vJziphUexcw9NWvKQ2afx7iMwds1G",
  "key19": "4ELxWsHwMugVUtLmxXtgDsyz8ARKEg1ofbHDdCBe3u8m7aLVP1xaeUKzP3jX4erSruTX1grsN3SMEQS53LupddsY",
  "key20": "2kGZG5nX9ttB9rKBDXdJyaZuyHQChUy8xNyvdMciDqmnyephRAeKJw1XDH6SNaRf6cAUKqBUCDjogatchqNptLxk",
  "key21": "UyE4pHjuzUUYswQzbWkUzck3VwwF6cU4wNSp9RaNRcphxJxgaEt3gC8z4yVRDrg1EzGwVrf1S72NXQLtpEsZr9W",
  "key22": "CovW2mh1vRB723bBHEPf7CVtSvHkfDo97PWA8Pnn4ndqd6eaTURfKumCh82nrGJ1Xq6MyrKZL3ahHyRvdVuND4B",
  "key23": "5Dvuj9n1nzUBbZreMDU3bVtDDD4azv3zm84i9YWgRWZTV3jhSwvoxhPgkVZ9m98KsDnErGUS7LwqmhjiAwcvhXMF",
  "key24": "2kKsdHeTU4NNcbYvqhr5EZiGPtmhjKBStpSVrdVcFHfTMwLS8uhQxhycpJdmTMbyZ88Zjxkv3ufcb4zsukHVrGi8",
  "key25": "2gKWE2LRRB3ACCwowokcd8qrEwj875mdRCYyQushyjw7Cpsn8vPw6s8k6XKz85u2yfKUMf45amJ7ZQuPJ5BRa24A",
  "key26": "djnkey5vNm9GpCBSXVS3v5MoRKaVEa1qhbqQwXdZVWXwoqBCuQHCpLwEpdZ34QAPdNNrGo4ReVLrNc42tKrEzBN"
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
