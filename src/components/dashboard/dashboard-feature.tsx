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
    "4cxRpUpvfjzEjj6LrU2mUiWBvMmvNkfuBHFUiNMzN5KyxT5jSiLz7MYZvCy9m9xPxxQQvKZ3R41Xxhgjjz7qA48V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hkc3Sf9cwctzG6EQBAvqqDSrqqmZhwSJkmu75DGjCDFomCW65nLhyGujwtquybKSxsNtCsoYMDPpDU7v2DAaK3Q",
  "key1": "22TodvYdmQFkYckiRmWK3RbgU4QLAfYKhFNuaLYaTbrcyDQCLzGHauVi3gqoH1Fz6rjpX2BNN1MLVoVcSs31DEfb",
  "key2": "2SU7SZEsHELym2qpPPMyLDLFDbUydZBewjWDx46ape9p5vrvzzYKNmcTcputHauM8shdPQJxxnWe7MZxo6ZATrmT",
  "key3": "dp8DJqoGpwarUHKoWvSM5sWuMqfKTFVPyq7dryqpccnKXTSEiGJ8uvC8dqu7TpH5ZUgJhdJHeCWXxS6zWiajAei",
  "key4": "2sfsHX3apmdsPynn7FA92defbBi7NuTt9JsMuEyFi8nNb64CvmgQtVi2NUmB5hY4GTpUx4qok7KQ1R4qX5NYyxM6",
  "key5": "21KAJ6JQxMGWiMwXow3qwwneixznvA2yecso3XCcEiaVdiYpJihq4twyqxjvU72qziwCTtYFa4WwP4iYKB2E7DYp",
  "key6": "3z9xsDw3iXKfmxjWMA1AcLHg468isi4tYTLqem2NyECR5VHN48LRZUHuzDwVGDjyan5wHuba555gZe8pNJ3pmyvx",
  "key7": "4gAMETdR8mFyyA6egKsDenjWmmA57qnw6pVHowFR4F1shedMwJZetc5QfA38brHqC3sfiDdCUSTkkuYhhmXdUV1S",
  "key8": "2QM68Q4zEWzfAVze5ijcyRU2LFauAVKbfBbMFKRdiJuip1BPopF9u48EqedmWrQ21NBH7aoVPs7CxiPcEHSZgQm4",
  "key9": "ZVtubf1rY8rbSs14R8uGqTKA2mpdH19Kunmdrh3bWpKK6EKgLTRGgiomRMRua9rgLLYDFbuZmJLmefNAJ7Xk9v7",
  "key10": "5J8SEZfyED5znXQEWzd1ojz5FghMHmECvAWpak4XAoUJfLzYsUz87RpD8Y7RDbHMcV43nsupK73B5rF4QLVN4Zax",
  "key11": "4t5JeiEnpGiVEdnt8mc93vNAb4psTgWyuqB96EmBT6o9362sZCPKP6aFcXLWPrjHDpsyqvnNQDSxvWfnZ66m8kJm",
  "key12": "2ivM8Fb7DHQiJn3XJ3WYGgCJRZjfYQS7fuCbyCyqKruAhxm63hJ3wSe5HWbDzztTmC7erz6GY8m8ywSKNvpoM8eS",
  "key13": "5pLfycSZWf6ApraWmPnv6howhsfGm4M21vEhgnQqDkUyxhKgk8w7iJ2huR7AW76cizLJKh81Gd7YjqYcT4mqcQ3V",
  "key14": "3RZjbyemZpbumkN4QAPSoztE9UJotnEwegvKsUw75V6AMtAuULNPmWXXB385qjr6vqdTzzLbXkdzcLR7ohwLY6kD",
  "key15": "3ZWpLV6cEmQpWuWUxYbF2UKhq8MBFH6fUZsH3t6HPtHLfeeGGQfeZwtDdKhRodMS5ga7NdxTVc4Dz82wGD5LcFSW",
  "key16": "4MF7cdLN2XqH5PvFBayYxc4wz4XfxXCRHsJGZN3H9uEoGcxYHQU9ZCZURvSzCjZYZDULGGJqWR2tk69ePE6zoRU1",
  "key17": "5mk6fmchmhYsTodsn2qrm9xfcbX4Py3q4agbv5grrMHDKr3scrE5fn3STjiWF1dBf3zG8vFL47BacE2LnUn29zTE",
  "key18": "3cXzV3rbCTLWecf88cSAT3Ue7Vp5jigFiqVokrFM4Vt36untxAQR1B5AKbDvV9DAzTToQyajfZwn1AYTBQa2v57R",
  "key19": "2V9PNiuiUL2USUST2Dea9e9wtJaeqMtXJFp297evVJvbSRtEAGTa3t6DM3eN56DUmnUg7w8aKxceNohtkJNu5HJr",
  "key20": "42rEHLADZH2unuJsVgNkPQ6iD8YtPRMUGHLFLbBDskYrbRPYJjNKh3TBWUGXEDCvb2YJcAsyitKtvUsdxr9bJQw7",
  "key21": "2ZYBp3fGD8hKUprGazQ211VQnN6seCJnmtmp6GEZ9fdtajdqhFrsCZfKzgEGVFkPqfYTWq2ihoicyvNFSAFwt1qz",
  "key22": "4E1nJdDqPkScELL6gC5msDk9sMw81beEjodZ3axdoqBJd2yq6oDTgU13JA4CGQB78BEtAu12eH7oqqXWHZbF94hL",
  "key23": "3Fr2GjZG3hVHFT7k7zdqwqa8suu7mqu6bvhzxumwUrXzoewsDXYwtNUCLqQLVcYWB2fnniuW9KnRHLdi2kCdWxUz",
  "key24": "17S4MDVvyFbb1AG5J2Auno51DAi4H4xaKcCHzL5Ga6DPn2xCrfXWiLRg4BJsAwSdu6atrhYurpPc5ZbpUuu42VW",
  "key25": "3wPYmHgGzS14SrWxxvNHxJCeWVFh9iXcHFzhQhDYhCwvnGoF6ktxZL1KhFmiUyZaaBM3SjxiSHchtTVjWRWrETMe",
  "key26": "5U4f7gQMFxfad8197ZtFyghf9rZmzCtRMRf86ove3os1oddBpLq3jA6WwhCsYqbKYrguiUNP1NPK54Chp7JBG6Lp",
  "key27": "66xtdX5r4kypBZWbRmc8MooECmww3jP4iSnHTERqHHFUZPkjL73DspUX7TyWNAd5MfbHfNGuaWiXb54ngjJkD58q",
  "key28": "5m6eqvgdxLqrDswkULR6DFVLoNwTZ8qa5PYVNyVTbiTBRH6apC2SSrFL8NoaSoerdrskvkUb1FdJuiHdNRWh1CcF",
  "key29": "3XFyfSyAR6RL6kwJ7hH2Pvz8iVmf5pz29yA1u94dmanGTrNGLhWra6dKvtYkFXjWvXPYafNGYLNkLSZZYvJTPR7b",
  "key30": "4YbMeXuSyLEvRZ4k8dSRMmaw4vuHBLJ9Sftjvikvg4mgD3r9SSuRRrX4UkTRP9qzxfFSVxD523LtfzL5GqUogxXt",
  "key31": "5mpNd6GWeeJmVUT1VwkMSrx5dY7fYvGcz8DRqG1BbojXwJHpaiHS97wQr18gZeZnbwEySNdA19PW36vANT33heV9",
  "key32": "3BvqyMmh39AiGkVLkB9cimc77qxsqwfxxRS6UboatgM3ixuEubkAXpVv489356jN8yCqQEUr3ZBFHHb1kYb87zLr",
  "key33": "GgRknxY6X8igt91qrKSLkvTjes4Y6qX4VCSD4iVZV5AdKCXhZJQRYwfYd6HwyciRQ5ub852xXFADzRiszfzTr3Y",
  "key34": "QNU9Cj3cEbfTCFkdC75yh76xQxhuNfsAK6ddkx7qddnXbKxVN6REDVa2EB2YT7VrAXP6T1rHFxMToG9xNWYukrR",
  "key35": "2hPefAtjLYpeKeXexyCx1k9raVfusoEZvDHwHvYgNw9FVjks1FhsWG3LY6gXgMHVonPTkcFYjk2wN2AJEsQ1qXf9",
  "key36": "R6ppRVrVUXpNzhFDMRCCU4XigP1DAn5e2gTrZ8B5Jd6xekoFShgkMF3987dUDqF7B4EMy1zuthH66WTK4xaqut7",
  "key37": "2Wyr1kwwWZ1uSuGheFUHnikoPTgBRAXTWQRfLPawfqXKJxdu7GaJohMjhN6riX4ATMTjVY72HX5dTrP5oSjdNk92",
  "key38": "5vFSfNavWguy1hFQuLGSkku8ejuaHSTkdW9oh33e7gBcVm5AFfGdsmDLxjtw1DqmKHvGxkLwNyuQn2keS1fNyPSq"
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
