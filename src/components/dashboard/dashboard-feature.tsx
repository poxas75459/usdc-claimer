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
    "2coCWSsgD48vdv9rShvpHTenR3SiMVQvBS6NMZzUS7p9QRdp9DXGFjjmB2kTSmff1UdeFuLovi2fjzFDGkuGRqxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R6ao4RBFrks966eK6PYS2BdwNkRzf7dqXtjYMF2zeZrHpETbfq3m8Z11HMd9vksF9SASQK1q31Q6CKCoMoem5QE",
  "key1": "3RjqWRGw7UjgbF26Rjid66URNoj9PpXmCkaG1o2RP4k3BW4myaJWBy2p6qBbhCKTCAXsLNVwZNH3WLSBByuMU98k",
  "key2": "27hrikAGeHjGjVKjinpoj4sYDxzFauck6rZFBrRCivNeuhXA7gfrbuVYcZDqEfnPYvpixAU5kJKdSrmqNDwhhH8a",
  "key3": "3qTiV6Bbhh5CUux1ZF7nvJB5pczzotg3Lx7DYaFRDi8dgcSqB8LmwZ6vqDiBZnXJuk6WSrcM8KVAmFXtn95WJGQQ",
  "key4": "asgp6vwtdZmwZKp7uHcnPWeeenZJR6WPxwoVATERtZgbZdV9b5LSPMRABzdN9By4wTGMrNyw999v2am6ntHU3gA",
  "key5": "37xKiB9vPyJsTarxwupUV35JUdHDHUPckwVVxwCcNVkJayLUVePgfG7zfu5JC4bon3ForEdb5QAyWYHydS1odfCg",
  "key6": "5taAHkkxcGeNWich7eAdQXEYsGVDLhf9dcLXWfeG3brpMQi5kBdDxsUuWq4exhyyZBH95QBoQMAWBpdsfY9fC98m",
  "key7": "2Yjd7FTgMN46zfSr3RDrabTd2Kzm36kKupBsqdFip4xarjkVkBVxgBBFAaTCBaNpipKgFc5dtpHewqfKh6tpMdEh",
  "key8": "3hXZaSFS9tMZHDNHupkVAony97WB2ZxxNiXoWRLerWW1aQzSy5modVyFhHWgc6o1kPUVxpCpPGwfVkdLquMTi7pT",
  "key9": "smcyWHi1ir9qWBazuM2W5ihvyDctFF6HdyFxbm7cRpzrjtfidusEsNMkJ2s8im7rx4ZRWCkm7hLXcuiqby2ZWcr",
  "key10": "T4jfWMFzBu6q6Fp9BNpPpyiwtGPPXcra3YA3c5hhb2j84uRWNJMjo95HEr13Q7RBTvsngcZzojEVdqSwV6qXRV7",
  "key11": "3vqz5HBGiZAGkuTLEcDAcsAZMdcC1j4rU2aGoLCgSKUJWKsBhao2pq1sJCey29sqUiUjc8kXwRa73awoozHDwRWf",
  "key12": "5Puefw9aQHKnatXajLyWcAsQtaWZCNuDYiYTmuroF8dGaGMPV8sRV8wkMS4XhS7vaWgVC2xEAYUo18F9wQ7D5FtL",
  "key13": "24WtxM3UvSMYyiBZm9WwNEj8qEkQeUvRAEyhngL7dWGqJXRzgN8q3zTMjUXyWsvDPrBw8hgVbitcnYgqXBiYvgoe",
  "key14": "f98euytdVthFBjTjkegwexWQQYrADVAnNvuouWGhQtwtbQFfpGfqrjmq3XzeWuTHwqLXyrjkQUyg36QizBVp9Uo",
  "key15": "3R37a29yq2SsxDZEniKr8eFxwu1835TobfQwFSko85yKgchLZMLY8w8HeZmx82CeYpeXEDKLrsx6tcC6kspX13fb",
  "key16": "4HofrSA3QYFaZKHBHCyTo2sVdnudXsEXrwvyqEoRLYxiunPp9t7XzriTndueoBXbxWPqwkxWuocuMRCFwBYQ3i18",
  "key17": "G7Eu1wzHSay1U4Ghqu2PdSG36Qp6DitHznXvBPb2BoQPjPazbmiXGMLw1q3LTZ4NwHXLzcmKYPtTfMm2W5bZLUJ",
  "key18": "3Q5Wa9R9LnhtBPQhUBCmqjfz92mQJBy2iwHFksCYZ95AqGSfMhwCFaEh4D7jWLP8kH1rGYfvpXAryqJW4ouodb3H",
  "key19": "59ibqaizk1B3oiLm1AcCWbQT1cFQfHX7qau7jQUH3aUP1ZQmXCs2GTQNPSzL5jV1taMTuEkGsLbw7wbw66qX8MVa",
  "key20": "Ec289Hi2EeyrxdoPzni4GvCKyPrJQKsvUD6FeHUv7XjZQhUWKUXU78Wo5RWFdSucpVUGEjDXGTSMzxcCBsDFPVW",
  "key21": "34zkvz5L3RK37N1TLUpijrixtt347JZkLqoBpva5SJNt3WybzH1UWkNmVuWhCmsMUY5ZZT3v83j8Y3uGgqNikLj5",
  "key22": "bZzK1FZWbPTiSekSytP1HvqSHBLp3SWFyWVccKsG7b9zgU5eAEpTWCTgGDgJLztM3Fzv5z2Mhtcc7bUs4V4nNck",
  "key23": "5R2mjezv74cL4BxjhcwQ2nWDW2hThHAHbBy6748F3fRHSppZTyibyuE6V2jd15Y5RPxMZ37rSNwuHFUyp3C21jC",
  "key24": "3HCT7U6xRPmhRwFw7W5fR5mU2tq2ijmSYBkrucEHAKSuKw5st79i3QwDx8adnPHvAQ3L7AZx19dqTXa1hK2xij3R",
  "key25": "35S9Qq7wPEfzTyNyEWvzGEQJxvpBQEgs4Nn6JhU3oEYveTYDauJgsc86fhuxZxHbEf7paRzk6YqiNy433zmLriE1",
  "key26": "3PkjmEzaAtmYLMaFRTmGsW8H3TfdhqTAP6G4gDjmGaN1YLgCPyQnZHPZxLagXnjR3nEU4cG48B98UCsfo2QvyYiz",
  "key27": "5cRm88u3o6FWkADQ4Xgum82kdnwFCZFnzKkfV6vaXjEa7Es8wx6QUhFuMT3hiksEo2fbnqPF4oBS8V2z33mXhNBE",
  "key28": "3k2vHLrQPXeM4BErS8ozQhn8EESu8xBBuJffKMFZyu5vuncPLYQAK56cFpRh9UB8CUUtzCNQLG7BUvPuCj6kCf2y",
  "key29": "3jfFf9DHa4UPRmcVp4rAi78mPSSZyMqZo1X3ZGA1T56jCaB9Q7FdbJbTRnK8qBPBnfvvV588iTLXMS5sQNNGuobA",
  "key30": "Mj3guxsb1YBLujX6zemSkxuAyUD1nWnR7SQVNDHb34n12Ttg3RLP3mN5aHP3hUQPno3pGocA6BfSUjoqWaLFriK",
  "key31": "5Hjzcrj8AGq3ekFcNK6AfJUVXnB1y9fz9giomumBiVRgHXhz42dC62e15JhVotxHkPcrCEtM94ViWAFdaCihw5NG",
  "key32": "28KDVccQifwmNEpWATQopxAZYptHCjK6wTAWsFCDGSrzdUJtBPrhpQ6fuW5KHgwaghvCsDun3FWcsFK65MKUY7mo",
  "key33": "43qLyoxaWxHss2UPHqguhVSMrwfif2LGAQwHULGGcifD8ioPvdMDcYWNqSdepa5Zfs67NY3WjuMYMyf4mCidSZTc",
  "key34": "5Ck7a4sWSrbQj2XZjsVSCR7FNvTFak3ztH4ZUYUMh654UAKrcrJ3dMjn3EHiAyVxzuLCXg2dHGV93wAKeu6FEe4w"
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
