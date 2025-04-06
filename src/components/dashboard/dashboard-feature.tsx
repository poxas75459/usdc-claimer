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
    "3UrMJ24fJdpcB8eesUT8wMnCfNQpaSPg4Dc9zNJcJ1Yig9zKRfp2fS2hdtB6nai1NrK1EpjuYiWDUuz8efwRRQ6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yZPAwGDx4pUSgbZDUfyUUwk1ZMVdnB8f6NXEsWry6L7CUfrLRD7zzeaM9eAVAxqSZF5FHq1Vd4PLuMKENEAkNxg",
  "key1": "2UifLAyDT2UXUJhQEmHy9d1ByCaqm1WHNcZMsoSHeQPgxfAzTd6e4GDsqbwzjU3kiWJg6E6QqPuF1ei8pyF35cQG",
  "key2": "3wUAQonsM5VkRBtBDMmyhznogUy8FWbq53L6fGiH3caxbfeD5SFd6QA1YoS4F8piaQtDFqVFHRUjo97mrSN2HdQx",
  "key3": "5TaodV6AeQ3V9tkL6sVFn9uavdDFwmaqAsu87r31cKF2U5hRRVjLwR7hhHGfgPu2hmWUkNzkqD98SBTD6Ex1GqzQ",
  "key4": "TWeRLXrPpkCfazhsPKPYotMpysCp5aPUUb2pjPyZWpJXd2SS4qyajVTYCQwh3FBhoudP4gDRQDSkPfnhwUHvYaV",
  "key5": "5GRP4VyTQorUY9XuSzx7thK9yB9a7ncG7jHazMNDHi8XJ1BifPY8ZnepWyPXALqedaoKXreAzRgaEmJup5MrrVEz",
  "key6": "4XNJcYHN2Cccy3hjoRjo2RAMHH1NbEwCqUu8JnPrGXvpJVHT9P6mrqvXokyaYiE6wURGmF3Gy63QZLvrE55X64qo",
  "key7": "4412fJgpWocMGUDag6mQoAA6CrviASTHNQQNsT8wZf3cxW1zpV86MvcWM4k7WkN63nYE1HpB6s2sEp9bmAPficWW",
  "key8": "4XGybJF5vvgZzRMv7XjZYExDnz7iuewRvMQiqiQz3gYPZp3WdXhr8T9kEYN82up3E8Dqn4bV3ctoy5sXmWSyXXbv",
  "key9": "3aCe9VYJJiAmA6HC3S8WtdU5BmYuvZoYWPSMGVt7BQeUDPgK6vgjhozRHoXXZF9VgCsK5GqwMMGpFLTmv5f4b55G",
  "key10": "4X7vgfkJLdkpeDr8JKwMUorgKfYsFweoCNKWzLwPciE5XCDk63buGEF3htjBfs7Bwy8TiY7AuRovByJUeXFuJ9Zv",
  "key11": "3tocWyTwQzejq1VqEeJeffp6U4xnGBBCeV6zRDpfis9N1QppNXMzGBwZZ4YF5athNckEsXG65knyoyHras3ct2WG",
  "key12": "2SVQP7V42AxrYbgNkEHmsirSYc9d47tosSM6xrym2feU2KMMqRZdnXWBsD1FvyHATFQuEdg9reNac8CJmDQM8JUB",
  "key13": "3KVkFLAsDi4vRCF83uH5XLzi5nTv266AdKacmMuC2gunvNyPEKms2x8LpiNpr9jfZoJ2aLGcpxoDPtNy8NTGwvqo",
  "key14": "3asc1vmARbQ868qh3wzZEAesmeRmzE3qyJCimHB9vYojFHU21KJivfwyCrJaG6G5mfKRMbwXbq4vje8gWN9yRQAc",
  "key15": "5xWPAsLzDGHXofVgnwX6qFFN9uZunFMjaQ2bkyzdngk3sgZUygnjhYGqUewfxfe3GJuAJn4ULuK8uH4F4TBSNP27",
  "key16": "3UPhZ1mb9aQDztgXdFQtMjXopsWSVQj8CYwzMZDLxRAfMGEgVwqVsqEwaTeGevgbL38pRBsePgig3wrZSDbo61Nr",
  "key17": "3N6GQ7BjvcRsm3Wsy8FF2XPAvFhDyefRodoYoWsDLvb7VXajrriCSCEVA6x7TZcjPiHHzcTvoJYVAgNw8NUQ7ie9",
  "key18": "3haporL9LtAemyehFuQeoqMiyU8MLx5tv4hqWxFbP4RLSPFdvwZhz2CMLbxUjwi6hvyu21n2U94LfqByVSEcyEMm",
  "key19": "2ehYL8KNiAszTrLKLigVGVcxnyKuDQ489DFqEMhVWKG7uDLutKHxLYmEQBj9cGgdazamdM2eJ7JxF5jV9LYqxGBo",
  "key20": "5Kh2nCzRZiAKVtJ9fy8HXNv7dc36VFZck81cJBzDPhUzmcubxEB6zton5gTg3m6Y5szFB5DQUg7zLQ7vqf9WAQJH",
  "key21": "4HRorGi5tS1eWVRE7Y4KRYbUVS1JWNai279Ger1Bo628zKAYzkQXMhanSngj7s6jyVkD4aufz6sJyx85t71cjMFX",
  "key22": "4dxkX1DU8tG6LNBamPCRGNx2pw3MpoUvejc8DTYax6dV4KZThoS24kBLr2G4kWti7jJX4Ld9h2tYMGbB1cRMV7ge",
  "key23": "5KUk4DF2NmF7ft2QdT5SpqnNN41zuQnc6BCSJV2VoYabHFaLXqmExTPoo1PbMMST9weLRjkBkRQeCwrxDeNsthHF",
  "key24": "3g28k8k8bqs6kG7nfVkWZfmgBxzDj7BYaBCvQ3tNZZwmUBTo3CbxR6RfR9cDpH8xhPDGQJqEsMrYPmdY6rg4y1H7",
  "key25": "3mb6U9cwcMBtxwfH85FF3ut5Ycd826YfyuRmai1WRF1vjHV2PCaPYi7oyUu7HiLQTg1SMpuTPF7ZyLMTktQcUkod",
  "key26": "5kRX4VXjT1zNP7R2N69MKWtqjNR29W6ZvYuZHyrna2zAdBYj1Mmf5p5VLhtRYKPD9TfsaBXSt4TEnimviQXE6WFP",
  "key27": "8yQby9dCHjFzN9LESdgwZ6f1V5e6pmG3uSNvBjxxkRZ7WbgsydPmbiVJSQ313SPkfCi3z39L33SLGSUkk5dcdok",
  "key28": "4UkTYXeGkscr5bd8fYvW7dqWbprnuEjku5soDwrc3pwWE9gSPJSYW1W2HQmGYS1tpxHmK7PDZ17uoMSYhu8fhgHp",
  "key29": "2swJNCKCBnTFHQ9eXrG8LxaPob2SXPLSNafT5z8XGrj2p5w2WhQh7N32X8dkD5FgNyyzHoCMVUGnTyfqVNmum33d",
  "key30": "3HbKFRN8GxKSG5kZYWM4w2j49cChQJWX9fkc87RFsG4EHaVRiBMNPmHudVV28p4HWm8GqsJmBZSkZsiiK7QZ7sKj",
  "key31": "378RibX1awjLB58DNNnLtEgy4L6WkGM5TPRDJaMgoey5P23MXBcWWn6kopCvJGz2wWiR2qjW6c4mgmnSnDmgoeHL",
  "key32": "3fnhacDzmnnUD9QCiRQJeTtdrV66YbUCW7eCohRviTRZXw1FN3SXBV7gfD13atu6sgZbJLz4WwvGsScegFnbKuJH",
  "key33": "K5iwxgPVwWcMbJD1QQJqL6jxBFM7JbzG3kNMXtjaRbJzyfRw5VbKZ4TqcUgvzLv6hJHDGVyF3pV5baPmzGdeNjs",
  "key34": "46RJrFw5xmdgZmdnoQmfZKmJ1gbWeJDep1k1o2YaY1pGkKCYJ2h8QKCek2MNzpfN1X3HH5tGb8p5AJ6UFSddkXWK",
  "key35": "5QDajn9qWmk7jEFmSmZH1eDvJa4UjNfMD3g6XpUykKPQmjMEoqucZCUAa8UvDWfq5nRZ2V5CoMK9MkgeWNd8vgpB"
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
