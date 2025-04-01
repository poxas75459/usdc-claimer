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
    "62kmrJjcn5FxqXUhCgXhmhEmBK7TEEwji78UP6Q7RiWmuz4bLi73FquMZZri3pnN9WyWcawZ54U6DbLsgQGvWfgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x3Nexd5c2WVjo9jzANqDT6ESYheUgKhKBPhQpd5vfjo5PTuFDeaDKPX43Mhsz9BGk7c9cq13KVzFyg3JdgWNApF",
  "key1": "2UoHkKLL4fzHKx5PegbSDDgdjtXpDmhXJBf8cHwvyEp9BrfnrGmotgRs3k4XLZN1nAiozsfNqC63n5Pfm5AA9M3s",
  "key2": "5vKr2WhPdYt7wgLsMHpfrvah26K8GySJq6VWsh8CPg1XKZ3o2EyhVQVsmxSFYrMzYVhcdnCdj5zEEMo74XChjL3k",
  "key3": "2jByfff7vL7FH68ykrNZT6YCivU6teV5B5SwEi8VpMKKX9BWNBMq3No5zDnfiQmycj8Xqf3f1cyRSsqFbrM3pWPj",
  "key4": "XV76oajSqHMCtfMYYqR3ua3dWB96nZngkQ8ZghJ9eKisfXkH2MgxVnQkaVveQhHZshVZ57XRcNEQDXNMFWZRJv4",
  "key5": "4Ud7Q7PNyQrhHemGmw81a95CvP9L9Pd6uHMUsZQGHAFV4YvoBDrVhw8TwzBAnMDXVK3hx3rsaXx4hpkjuDzbCbAR",
  "key6": "48psUP74RpyKa2hii3bpHMQ5sWmsJt5e3gT573uqfuRUx941YkMNYzn5Lv4CHBtMf4oXknPVgvKY82rac8Kg1qrG",
  "key7": "4Dm3CA5H1EQaf43WeUCgTRZV1djdPDSRbnT4LjWHeQzwvkorsRYAAwzkLvPeNTDjkjPyMEEaMH4jygoFBBJ87eR9",
  "key8": "64s8e4BCcaghjUMoTZPG718jBQ8xYho9rjGuAvycGkb6eCcoRBNoHFdVHYzktcFmJeaLeuK81pAsFnJY4SZLoW65",
  "key9": "rmgDLTnBrLHe5rUaNSAGqfSwwYKTFqWeu4jMjLb6sAKUbRZkPTzQ56US79mSmuEuRBpyT4Md2Q5gxziJS1MdfVt",
  "key10": "ikGfa3S4Pd7KUuUmmkZBojYRH81HuBdKa4WL4NWmPmau7pR7pyMPB4xY3xnbvZe4FP67hZGn9h1PKSWiyeLkGQP",
  "key11": "3VHbMoemtPMqZafdM3JzYr4yntS8Ne3oqeidhaSrCPf8yvvwbAB1hU3DHhkSEc3NEhxi4uWNqaeBucYTz8s7KpJ7",
  "key12": "2PiCor3E9FtgXtrHEbgRw7TGs4zx1aL52Rb7pq7tFKziSQUhkxiqEa4Abng6X8f6F4REipgnfJNamDnRW3i9bfT2",
  "key13": "5svq5tVMixizh2MQQLjNz7PewWjNQMLmAdfKwyKiEK976ErrwCFWFuA9FXgGnYjFjDhGiJqfxTS3dHegsbWtPndR",
  "key14": "5RkFyye8YVN1jomaBAEkATLcro5g8TkZo1WTpRRG2yHzhgNcCVRk3ThKQbdJ6GWveRMJckdQ37xLX5ETomhRwpCR",
  "key15": "5zkXXvVVUKf4FJKhsp8YoapcSvodGk8RGhtuU4CLJQCmBNtnbBGssV6XPcfTqnrcfDgXvVGKzNAX83Ci3fxw6BHm",
  "key16": "46zYg8wgz8QhP8o9CUmZPBtfqaj5rdR4HAU9RL8EM3gZzL2wSfEhi2rDhLLY5PETREr3RiS1U3Gf2iyxvptBdyLe",
  "key17": "373BGF9dwkF5iysaTCEuKmjW5rEA7vKYS1BgbCssbzgpD5wymskjE24eHjoNRmWsqyoBgcZLkKoW8n9tanjNwLF2",
  "key18": "4ySV3vAXYqLHUxUFkPPeGtecaDNWFu2GWyPEh7oSEzBqDGooNHGj9BNpSLCPB6TMEuhoac99w2jwaPPx7P3eBYii",
  "key19": "3Bn8FhEi6gMKKpeu87zV4dYHpo3Y7CUgjV2w2yCciKcrFFCjPBzEumkbD4DsUht1WQVmYz7SKthysCtAjVnJZs63",
  "key20": "4Znz4JtDzFw3acvcx3JgqoGhtmCgsQKEFGTkpW8QJLBshYBJcdXZW2YHrSf9BY9RdpUhakf9eJcB8f45iPQCLqc1",
  "key21": "2cRWHcni2tzxrPCabKTByuYrWbaZKge85brEZnmj338BE1xQgnyJA1LqqESEP4wu4Pw55f3UzshD9EuaKcv9XVzd",
  "key22": "3FbDMx3sh5UEw3Xren2kdMNzaXBVCbhoMPWChrctCT6g7vmwfP8XkXrN6DAXB7XPuzuVMsRLsbbTfCyyNQVGDFMh",
  "key23": "3ULs67KVqMMgRgKgaFrMuFdZhUKErX2Pxx4PSUboUaL7BR77RVzBHhxkK1qmsx2XPcjcfJxSmCaBDFnyMFQQJHdV",
  "key24": "3cwh6rQEWpx5XCgNZszSMgj7y4cn8QVAPFeYSA4cHzRSF8UcdvBEBoExtukMQnJQYusodeDhayeb7TU2pe5uUNmx",
  "key25": "2ozJ1afGpufKzjUST65RrdnAmDBo6g1QEjKaTCPRGtKz2qgM1dfJX6o6rD1hanm1zmnD7x8MjxHMrocDXbj9jKU8"
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
