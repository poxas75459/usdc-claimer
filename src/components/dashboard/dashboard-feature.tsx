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
    "5JhARyREJHZk2nMPnJREYUicHdX3JTt4sedWe8ftgyhjnJ8eULSi7U7kAY6sPD4Z5N1brbrMiCLMsioTfsTZ5WpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ek5x9vqtNtUS8HASokSJaPEyWSNkAArm8iTbxd95NxgacqNknxdpUnapwAZAkJzxNtyQAUrQRfF2EHr5BuJKFyP",
  "key1": "5ozRoFQB1DQPSudsyfMzAFfBWxxv9twpv9YReorkyo1Qy6iwbfcHrmu8PEhkoAencZGkCN3mqVnCTBPBfDg33k4X",
  "key2": "LEDTteJDSXW8Pnd7J3DqnjTakh7uztkuCCkbwWVtZooYDqwqtPDm7DhPo3m2KNcvxev9nt7CEwjXdJWKVVsBQPt",
  "key3": "2rnYQ2kJpsQcFmmKp3j7oQJJhEb9ZFUgDEc85Nvi8cvLFBZjJjGCMppSDrwdYhiCEDgC5ProudZYYjZVyzAjXs3u",
  "key4": "4h8BgGrnJFVvXZqzq5Ga65UFpudrGe1Wm7wDScWonVD1rrHodmkbYwqjGemkgoy3Yv4NVX1KsybaQxFRPc19sAgZ",
  "key5": "64wnNiz5G3vhFkhnbSKhkS4u5RzX6tvNuMvKjWJsDghA9J1RiNeQmmzE3X489o2xVcPSZF4i1rWf6cMQ5w9yesFQ",
  "key6": "3KCCFD1bxgQzqg8EcMJuT8xZs7qz6mDKBe4tr9qpm7GvhbtGhJWvozjbqcRQaXfH6RkV5nqGAy4vN45zx9m82v7F",
  "key7": "4qHeKAqhWJYTEtudgFPu1mMHb68VtuvGX1qNN98hf8bZU9b6xUGzkXCZNrmpMZzu6oWbWvfpwdAkSt5jBnunr4nx",
  "key8": "45DM5nG9BU1FRurfYgvJLdR15wBSBwL3MVNodwM4y9cQnK84kYAAAZbVqatG9ginKtWRPMcxqviJ6HfprPZ2nLXh",
  "key9": "2Ustk8pA9XzxyeFmNzionDRWahqRPQBbgp2VTxgePdimn15iKQ473GfL3zbmcq8zUCyJ8gV7jdDyaVTWMEqDUpQb",
  "key10": "2MRHWM5YmC9fUj3QZRhe6dqCRNX2XmygNwiHbWsu7eM7gbnhy7gFYbDitid9QewseTLMotASGnEdVDzHKoGwuded",
  "key11": "4kui3EsAXpdNchfWzBqHsDu9kgRCVpN6EZUPpCzrsR8Ea1jUWM7aJw83PhCGQHTVxzxEnhi2wxMUWqr8y24M4xKy",
  "key12": "299iL4ftYM2TSiPArpd4Um76HHDM9cZe4tBxcwgPmMkZSAz7GuMHfu8rsqR1WSEKMkAX2neyJrMwfAEMC5LuvTi1",
  "key13": "67As1PNvHaD99XDvQrvZ4BRzvZgtShbK19Tf1a1yT2dAn3jKdbKXttU3E1BqzVdKu1Xfg2baDMjWRvSkNoAZQSwi",
  "key14": "5ipktpWfvS8cAfPmWonhF22fSknAE2887teWzYegsR5Pb1uuBk8TWcosf5wihRmi5r7iLs2ZDi1noRSQoB3WPmky",
  "key15": "XetJ1hHNAf6FZUpcTAYDfTG8p648UBordshf9PvbaTCxNkbtwDgY8XU3Da3ujZqyvpqMnCmoAoMU4EzkJtTkzSH",
  "key16": "eSS19mxxgDLeZ2t2pG1yx5eWjP9jczggq9PQcZdrFWP1Wdn1WMFa43Gr1WLKo6LNyd3tgXkNdUCwktzoU4uByBX",
  "key17": "5BXEq2vadcaPVvxJDREPFe2jaZqgie2TaZvroFQocYKTJ1AybN57CWrw4hU73jnc6enee7FCg5EiDrz8daHjiWB8",
  "key18": "CxXLnCZCUGuNsUeh4YcyngND2Qa4Fzt3LsFCKqg3661d2V6u38F4wdZ2ieKuCfD5KrJrUR4KvDqPZYrnP91m16P",
  "key19": "59PBJakauRKynLKUUH1z15ZdKTnZY7ctyC1AJFdrNwAWx4dNjfn4uou1gWxRfGinqvqhxfom11Tino9j37Vecmcj",
  "key20": "2gEVmHXuLoKKexrTqp6JFKmCEyjVCAFoqqZ9N1wfvqp6nApaay7nPcgikEP4g4Hpoyiu9exCJotWineeNtYUwT4v",
  "key21": "2xjoMHuVN4Dzh37wCWUZ3FJNSjW41tCVpd5GHe6Dq8kH1Bg46vVgw95V6XeatF8EfeyWaoL9uZf2LonCdjRzKkMd",
  "key22": "2burfjQgk2Z4mnaWcRdF8cV3JDsxxRbZeKdu2Z8chzkHsD5e7erT8H73QEE9CLsnSZBHSaRx2EbKxyoEPvvUCs2E",
  "key23": "3b6bGyASUwJ7DRhBMHt3NzMNtdNvY5cx9ZeX8WqTwZML4TPsW8NNJf8B2MUdH7z9WwM94xsV143KnDsKmtHE7CXe",
  "key24": "3YtnorcovU8UDjWjWTreXtYTz9jZ1xiqgxBh7mUnaaoDX4p2eCQWzjEkFBSReXgDCwGNRwA6dkHQAS8tvRFBTcpg",
  "key25": "4CR5oZSeidm4ns8HBTfLHFS6HuqE1THpQGUGe9uFMEbnAagFhv47KV9zEx2Bj6akw2nRiFQdEjdCZV5LBJ8ZphyZ",
  "key26": "AmPEAnhmMFo7GiRQ7S7zKPVNVxWwg1N7NbpwakK6hhrCNBsJQqPaBqJgDXAwgBBXruUikq1YhfLyBZMdTwmJVr6",
  "key27": "rJ1w5vikT1QsF7TV6rD773rStENAEf1nnMLnQEeQdvQJG34ZQAhTcBE1tTyu8JLXUX9XrThoqgAeo2f4i1TpQb5",
  "key28": "fyMj7zNCEBBj5r9Y4iR6MZJutTLo2wxDa5bMHScjmZge1rgDuHHtCJeJPcYKTZD8gqYw462V6fungcyDhXbFT8g",
  "key29": "3ZUF3NhWQ5pJDuyM1rqSrVvE8qVYLVkP2WwhrXJdUWgodpRxy9dADYSojBVenFaytFQ9ZEBwrjhhGxidjJQRmoV8",
  "key30": "2LzT8SeApV9JCQ2UuGvhbVX4PLYCtEL8pVAFaEoSXfSYNnaxVVCmvRZJwiBn4rYWTYW5A3e3HthskgR66WssVTxp",
  "key31": "2q9HLtNMeap5qT8WPDd1DdhcieHStKCQCXjLgPQTVpqRkZ2Pqc353DUgzurUbyB3CRmQH6DAe5XDcoMuDEq9W4DW",
  "key32": "4Vrfvx4cghAWG5FUVWdLJWeGZcL33VR4ePagpBHZLYvwBgKhQrvjyhq9QVUU1WCDjz4NBV2ZxS5hdncSDqidhmPs",
  "key33": "5z4VHD4x1n9y9dkmn7bxKNZr7wAcMBtJFd2Kd8fjaKFD6H1WvmZ5m8eJzkQHGHojufxqwqyURKmdrfWQuaF5zcJR",
  "key34": "SWWFsRV3oSzA47sx5iWYZxd2CD3VKYJNmjgUks6YydLUMQDyyaVGMvG4jybk5HCb4tshjQh839EnEFae2bAX5Mh",
  "key35": "3FzG4uoX42sUm5XqVCYKVqaQm2ucqeBefG127d92DY6DLnEn6uv5bt8TrHaWbo6daFjJXAa2AMkuhL9poGBmDKxw",
  "key36": "4zf6sD3X8W4DyH8zFaYx34ch8txk4oWSxujmNiEXZ5zJMcCK1cs47N3kkTAFNTitvSQzXNDR1bKxvV8ULCwcAwRf",
  "key37": "2XBfESRqASPw6ZDHtGikevShshGR3bQ2g2fzAb4oJLwJZitNwvDWvndCHRe61MAkd6Y6WvagbnqJUQAL12pnbMxb",
  "key38": "58yXHRZYQPLXweGkUi4w3w6FEmYCRxHinpWKhdgcaUn14p99NEZcXEvDMY5Wipik96gamxh6kVMzAa5jzWPpdWjN"
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
