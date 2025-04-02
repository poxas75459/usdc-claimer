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
    "3gWHJUawpBTnE4xWs1KxDBn3ctKUzJaGESUP6YZov6V6rHWdp2nNBo1Cuto2PcUCLHVmbMtnTGKeaxnh6CXKDgo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JbiPi4c9ayuTW1r9cER1rXqKMoYZXrCB7ryF2MicwXXqkKvVkFASYMYg2UU56gjTpDggCjNBT6riyzy3GDM7yxH",
  "key1": "5yFdLJMeaxMkDjU2GcSD9wdJjeYS4VgN9C1Vhb9RR2VQH1nqas3DqNghtTDW2k6jtyMW681HP7v3drvxbDuWRe6Q",
  "key2": "3crZazv9tUybZbQf1FfuajUeHaecLjgncu1SwJLKepu9Fjvo68oRz9QrMUPCM8JkvwrgCYPQzji9G6cyBmW5DF8",
  "key3": "4UySTtKzg97wtBh3oV6aNLbhJRjPXXqvNiEMW9ndAjjUvMGqDmEip8TBzwBg2sQ2n2BQFmzB5g5h2XZa8XaDQ8CG",
  "key4": "3SHvQbAUXZNXRom8aXweBXDRqGA9HLeCb9NExEyFEw2nenmUsMLKnURQ1GRpe2PHHxZdd2Xm74ZQmNBoiPuD1b1S",
  "key5": "5ELqhahiRLhghdkXfSfaWCXyLMk3Roix2Nstb4JGeayA1fxQo3CbvpgbJmCxgmXatnkNpuVtY39nDLaM5BgQPiC2",
  "key6": "98kjyv8JUubx6B1zzrYDhhxhsPjX4b69oyyS2Yfk33H2K1LyJrrr8SnnCKi3CSrEXpoDCi5fpcVGyR5dRNyzdFR",
  "key7": "2Y14KvBsgZaCo84ghkt9De5pa4QSRKxmqQvsKPuqFwjjEy3AzU3aLsLMCuMuHk28GQtaN23qv2rnZDpCx7GeVAbg",
  "key8": "5xHLR5Ja2iWqN9x76EGEEjiDMb5nLzfATcX8MKz6aMJz8eed94qwJfF6eFYcUddxjQhKrcxAGAdKTVL9oCipVQe1",
  "key9": "3RVoK43PpyAy5x8nK9PQhpd8pMBqqmrewrAGT1G5heuBgGkp7ePv3CNz7u9VkAULe7xda9yxCfRvdTKMkm5WCckj",
  "key10": "2d4FXmqrZxerUwyKukMHZpvvbLVvsi4UUDJ2yHSpCg3d5PARy19rUPoL6BGVupNvzWc3egsm3KkJwEAsd4n6dWss",
  "key11": "5kiR1ho7aB3Qarpo55zdLnf2s8PFjMBwq2kmkEY68MhXdEiYSYWfUF7VZFytczqE2xLYChuu5CXSXr12tYmiUdXP",
  "key12": "PNr17pn3V586FXRj9k4Kj7aKehrtcXaKZTrSJx7JZyT4fFoKWUhWyaKL3xTj8iBsXTzsinpKbjheq7V5j8TSZeY",
  "key13": "2SUiKAi6z98LrVofjGaZSkWtJwRTSveXsQLUxDw9niTTQK2x1x1FmdGbvsw8CjAiKv8sa6gywzm1maM4VxkKCYkY",
  "key14": "5QV7XJZDufCp1GFngbEABMTSYkdYjXrc6TEgdHn4DJNMsCaNtZeq75Xpb5i5GGCEm54xQeSiQEsSX9NRNyZ4iM88",
  "key15": "4qjpgKvaxJ9NRcBiud3CpBn5zocYsu5zokq4zK9t3mPgSqpsAF2StXHe8HX18HaJtYG3fSpyrRUCsFXGhV3Zsa1e",
  "key16": "23nXFofS6n3Cd6u9VMSbBtyW721ThP7MJ6LM7en4SqgPUoV5EFuYJdD3x7oy4Egknkg4L2EFunwCsDmaNUfUz2Dw",
  "key17": "gr9BQk4PNnadazMBtUaW1e3LfFXBjSn78arE1pYkj2ZTBbeaAgzHZJLRNq7BF9aGExP5E1X9dPSQUEGyR6vKT48",
  "key18": "2A554jA7DNPaunfkaMzKUXEGFU8nuHFB4KTFDC4NeGZtd2TwSLSS9HoTkfcSJvX3McLxA22QmMrcCkXNXec8Ca13",
  "key19": "4zKejpdJadSN11EuFoMN1bgb3gZ5kjSazUX4U3XY4kamZr9sjFsfB7nJtFJDgwdPaYZaX1GbTdzUtpSR3Qe9chR3",
  "key20": "2nBCE2UZFbiGW6LNJZCCAGoyvhvXTFxcW8px5beftMjwFmDtSzASNq7a6R4YK9QyGcMiRCpvQGamQ4JaGabSSGWh",
  "key21": "2X7TKn7Bvy7J9UqVw21J3cnFeNH2SbYHqhntz9xgK5CFm7zGArPvBPku8UQGwnmwK3JyopxbuCLC4ZjmLnFKcQ58",
  "key22": "JnXK6Had6sDbPK2zGsoVgQssA1PC1xVMxr74s2uXGN1ka4j1z45cMMysYYYj7aa6Epd2qDJ5VCYhrmF3mzFZURb",
  "key23": "5k4FtqXWk1vJ2KRuk6YbbiDRvBDVXHiYHYqjq6zhqQMoeWzexpMgbSLtuyBvPukHAMmMjxqv1jQq6Kh9DB8tH71P",
  "key24": "5995yJuw3LGNdcFBAfyPj1RRRExvmBY4SNyktryWBeX4iaTpMgQSpGQUeiCkUjW6QfAWhGRE1p5WZPfvDbZE4ybX",
  "key25": "TJmQcqa4LbGnWtLw8Hyth7nDoAtPYdUSBniBGSubF9EAZTQtut6kxDF3BTJ2nwmRY4CMoquYYz4qanf9QPX21H9",
  "key26": "5p8z8X57v6eePw1X3cYGZS1FjaYuPpdHufm9THwsApH5DSk9QkXJXBjqGXH4angoy1RyYAYyDq3t7GdYT3zBBhH",
  "key27": "4J6qo2DHoFSC15rmcNgDbegtmnKusHPBV3u5fW1Z6f5Zte6y7sZdafUuWFZGxvNBNmiAQ9n5ZEsoU5NuY3vvt67Y",
  "key28": "8Z979a93APzfYAnH2gx4dA1SFHitm7XTBefQJYZhmmWP9y9AApN7nmFZxP4PUgaNoBjUueZTkhpcd9ouWDLfc23",
  "key29": "2GKrqkM8sJfi8M4E36UCCWwwaHdrQKWMghqq9SdFwMF42xFAKJ3uvwTsFD5njvDPzd6H3MuJJ6JWA9BhY33fA2b2"
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
