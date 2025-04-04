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
    "vXmNeQrU85sxq4gL3kYfpnTxGHMw7sPooYw46z1NtfohvAYNtJHf5T42owThecNCxEC3gDpwRtBgFFqzxvAF6u2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mpRwpXQkMp9dUqAQaRMjwP74r9DPRXkN8yXFjuuNysjy1QtCUguCBhngiy23HTXUFRDbcttihDBAsKe6WefLSZ8",
  "key1": "2JHvb3Wa8B5Xr9r3Ke6A8ifGpkfTb95LazRWyBEbsN9fbdrBaTPiT5ikF8zQ5T99m85ivtGphvoDf92bCjg5NzkF",
  "key2": "3LoFj22u2FE5bFroHuYQT4oyfUvNNDfqrSvok4MtfbAaqyub1uDAChU4dnbGogBsVM1LW5gFL7J2Nvpvcu19iZBA",
  "key3": "4T2S2zLwFg8NbYy3NmRKkLD2uqc2oKp6tKwVypYFG9rUCaC6gQHS4tiq8P4pDoyfug9ZBFiyS34H8NBzZeYiHGsP",
  "key4": "2tZNeW9NAjEYytfWTmDXDzABQ44kAxnsSDYeCV8UuY8LWq3RmqjLW8T9SiRWr3MPwrQSH46Ncgem8HB7NLa53278",
  "key5": "3WUrx9XwjTZ78pt8mxWGMZjtzWG17nQ5Bd6ZF1mtbe2cqCEY1x45wLLXkwPL3sWwaLkZRgD7mbXHiAvezMvLiNWh",
  "key6": "3MeNJ7GiRrwEAb6SUEiKdP7og33zv66YjhCM5C4BDcmsLCU4nYxvctnxdXVVA9eQY5qmvutiCwAJq5brsN3kW9NA",
  "key7": "4GzMUsDXhDsiKe6d4f26zzLPF7t3U1mnNYFTMziXoXcfWzwtVNPG2AzzsCYhnPcZPAizRyXvuBrGx3KqXKXvmfCV",
  "key8": "52EnBMcwfB4LDzsX6iWQAQgeiAHdSHJXFwWq5vf5GTkX7smsjnwh1EMUFuqn7uiG7hVpJ64kVcVZRvjspa71nN4m",
  "key9": "3HnkitVEi3iiAUHWNUYhqBtkgAibh9qdnj1cvKj6AFMQQ8Vx6gggdktZZNLhmgY5vgW3FBUTFbHKQkbEKLKjFKF6",
  "key10": "2zCB93jraZuX4r6taoQakP6B58P1WwPky81gEMUeD3QRNScqSXzSgctR8TzgtQATiiFFYdgYeR6PNxghFJqkVazT",
  "key11": "5GpXwRuoXqiUB3XeCmTMk9ERUucWh1nS4JHNHHkn9KuoHuah3zFBsTyM8ccwgZBeeLnsBqeRPoFiniR6T18e9tpr",
  "key12": "4SVNubtGyRPfkFE8yHRoAu5BbBKTMMJZ4NYnB6uuVFi6j85nYgW6cEkXiWA2FkE5mA8JBhr2mJBxo3BpDevwK19Z",
  "key13": "1zMxbJnnuaJe7tCmc6xw3tALJvjK8TFtR4sYAavAZWShCX1P5EjiWCjXhdFZ1arT4Tm1Mniv8iSPcPMDLRDRN6M",
  "key14": "4Z68FKX7F3MNpf2HUg5iHfKb57jg1GJ2q42v3rUPT1ogPvBoymeg8HkxmXhF5weYMDzBMYwmJQAwPTM5sv5fYAfF",
  "key15": "4LyzvdQm8ngVsbdePJx7DznxQf7iNgV3wL3idzYXzxRNiHf1xPDVmM16TdrfTDnatZvbZTv4Qw1RXsf7Y2KtCKqd",
  "key16": "5gsmvfHz9FzCfKYxH8y34mPuXjyqDUtH8nksou3kNyvs5KdcManGcfrhtxrmFKmEUiDWjWBbMbaUAM9tri3q4iCA",
  "key17": "52dT2GPviVdDxMVv6sxMDDUNFewbW98SMeJQrxNHDVvr5XVX8oF37GbqrGkyakRDUwHsueqTQmTaLAEMpfdWxzgY",
  "key18": "ShDfJ2b2S251FMxg1GWK8kZvne6rxkrwzhXGZfboZE6ntrr8sb1K55ech1jajzC5cfR92NnWsf9CeX9ybT3DVaX",
  "key19": "2DzEXxSTEc5tJeDQMxByRPbWLWHZisdTQAhYiXwxC1L3X8Mynvp2dxvETUhvbN6Bxp8fFSqNJHLV9V7R2R3B2F3Z",
  "key20": "4QZ6PdaTt9JPs7pFzoaxsSmxLn2FWAVDc62gMGugHphVySG5abY4YvcRMUawTknu7krQ7v8zwX1Dx95H77swvRsf",
  "key21": "wjDcrGYADDqxikcHnt9Am4JKJiNtJg5n91oSswheyPFHkpK8aX3dgEuXnMhAhAHpJDVs7TVY5XDNEijQH1kYiat",
  "key22": "4jgZJUZXR3VUXh16MgcX4V9CtqbqgLwwqYt1NQjaWXfHjvh9Tm4hhJfhFUkci6WQQAJtoyNh7YxSuaDS9JK6kxjV",
  "key23": "5nVAVngZdF8j6FCf5TSvrrx3M3cQ93kXWWQE5sf5u9PqmBFitApQgtRtSS82ZCUtTsypBc4gxX6BMhJs2AJMebE2",
  "key24": "Cz2kNEdBkfdgBoiKQxCivHAbGAJgK7wFk9GyhFmDuW163Wf4FZZc9SaSp6fM8uKhKpz5BPqPiNZ6SCdxkFthK11",
  "key25": "4fmW83Z12TUmPnDYYcD3myVCjju315fjPEWth6m71og1NFx9yAood8yJLFdmwAc1xDMFQkGZ2X9o12xqdUc1PDcw",
  "key26": "43CQx9tL8esysNSjZAxaAxBW8VYw4s3iqGH37uSuAhaUTq9YTxiHTATTXbEx1DNGmqHVnUSyfN8X3aHKmPvrRCBp"
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
