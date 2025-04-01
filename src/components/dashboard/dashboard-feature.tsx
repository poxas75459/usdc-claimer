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
    "4RUEXdcQXCWhayHZ2R4gH92sZFrjhKK2tQpZnYzoNUqzam7hgzvXBHy1VRMikPxLJqWAGUyNHwYoyEmzAKSk4R73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1XjVdz69YmYHo5ztuBGvyYGnxCj1nFcqSLU9g48Xa5XjY6yGMe3DFGNDHDkD94q9i3HFnVX1raK2zboQLVqx8Zb",
  "key1": "3ezEVVWou3d9ofTTdRtteN2neCT5hdLGV4A2HKbJMRrP2LdzAA6hcTwHvgQ1xoXXQyLidW6uk2YaQD8FUXpQJmfW",
  "key2": "2sdEHf71RN5KezmcLjoifXp22hH41BYrKY73WURrkC5Mmfviw53FQLdTTtrcxmyPi4tUFW5ASDdyELfz4tv3Hdqg",
  "key3": "4yVH4PgxzpxkSoibhD4xjVPU7zYUb6bmjCtDrM8RZWMSKgfGXE22jHLUJHLmVc6Y9LjRsppC4cq4FLarv1QhuRKS",
  "key4": "32hpjJQL1Anx5YdqS3BUhWwgxtTrAyjWBUPFu6hSBR75dXDyAP5wVvePYf2i755fBrKFfGUwSNyjmYJbL99rcUdp",
  "key5": "5JNwHUKixcuaMAWVrP5WqM7x5KwLmwN3mzk5P4eAzds9ffd5JEFj1j6ryGNn39XcZvEFS4YG6yfvBE9QC1PL2uub",
  "key6": "5mHtWnF2scwHBuUTkv6rwjQqi3Bg4mcRg7Exb8FjjvXp1viYRKBeEpWhFLKSQX2zrwBaPdpugkc8Wr4ohAWMH6V4",
  "key7": "3CDgYTvNZAEhvVMB95F5AZWe7AzyTZw2JyTt6XzMftTBPwkq4WrvYRSYsyZNpPCRQzC4SFZs271mHpm4hWPNYhHE",
  "key8": "67bRfMBG147pcEj2eVdCPwMHAN8FtLyvmesm1rx4AyzRKkVAFbYEaLXDwiqoT1uBgGPFhYD33HFFjb4iEwpJuVwy",
  "key9": "VU1NogEMWb8cGZBshqMvaBhy9d7LNaaSk4L31fwHqNf1ALDATdLTST8wmJyCxHtf8K8KtQHczGv2YJR7n41AY3z",
  "key10": "2QS7uAARZ4YmukpNgWtMneMdYfScgKhyX6gfY9ysL3CN4GCphXw3YCW2DyysAUfU7TuJy7MFdUHK9eRuzNre3KEx",
  "key11": "fxELtFHvRAUhaBYzZmnY7NMbPqqJuy85LTgEaHqF6YcXoWb8zbE5V9J7AaWnSQkYKqA3dUjtM1V4YUUs2qwhE1U",
  "key12": "ow9sj9PNCyVrfSnjnUN7ArBGJm2XfJqtYkKhvqMzjjdRvijXJRHeBFqj3Fjy4JdQoQmuNYK5AsoPa8PqL4kJEvN",
  "key13": "6J1d97Rr3WsmFpUBcrLEivfkBjAuZuzvbQdmeoNHcxHeyxXzhqtXfuj2wyEa7KJsAt1BRYMDvA3ZVTQdncudeWH",
  "key14": "3ZPa2xmsdeYknTtXPFFKqPuQHxU7bb89bFYuBUeMFUbYQnKQThny5UddBjgV3q3ebtWNsKGYSWPmece6gVv5STDo",
  "key15": "4Mff15vXNjrUhUJcm5KajKiEC6zB3DhkSMCuFF3gZDNaKhUubxhe9duFqony3tJtkarrpzr3qv5kJ7dmEoCQUx5N",
  "key16": "4bKmsbS4Aypv3Nhd3h8w7XgVnuQdDFGXHv3NMSMVD3qJtCoFsozpSs4Xo778tBbQpoSBFhN4BkjFVwWVWYRjDDWe",
  "key17": "5mboWavLV7921U4WSpq1A7vhaC497UMF19VjoYoHUKgcxXD4uXUNDDNWhNcxokDZZUuBRTZJ129pQpQqYoRCPDYw",
  "key18": "3bA71Z1NWfRqWC4dLrVEeN9YSrXxni3PuXnZ61zYcS2k5ReQfheCymLZ3dqHP3HnRjDjjwM9JMtgHEsibFx8WSn1",
  "key19": "2oSEx68cedejD1kn1LQ9a4ePMmPfqNNyyhYaAcMrfDqAF2bz6n1bnaBNrfPnBUjpu9bkYurEzstzXxnzniLCQnFf",
  "key20": "tmibv9EFrw9WoJobe9LHEeqNWCuZndbPFjq5ZML1wi5d4LEozvQ9z4YQAy31UXqrStjjRh4tK95vNWVofqqNADh",
  "key21": "3F1Du5Bg4bURiq9EweofwnJjrkTHp4rnmzzLJcbi35SxLA7ZLt3E4kYK32iTJQoELVdq6nRHD1buBf5PPrPi9jJf",
  "key22": "2aoMWPgHRu6qLFW3gpNzQihEYTepG5GHsR1dfMi4ci6NQf4yycrPcAAKMYvzPsFxnhsEW8ry8wzpjrCudptzTqZg",
  "key23": "5DWyaW1iTDYDnz3dzRDJqimzDYcy3rvWVm12D34LviwZTX1duLevkBc3Wc3sMDsSGHbQYgGvPTFnsTqqfpnj93aK",
  "key24": "63MHycepcS9oucJiq4GDXwSQ6aRYaUm8a7H34QynGKDwhEbS5r8SdnwdSQtiVh9CQeqpXd87cQvMshwazVAqErvt",
  "key25": "YDqHuHMyJRVMZ8YMHW88PdTWKRop1kSJrpADHAiX5mncLA2vMoAsAoewRPQoqjEUPEEaQq5vEYgQUrzE1PoSqM1",
  "key26": "5GmHqSPoA6D683EPbcr2SKYu1LUm6pbR7sNMNm7q8HBMBR13GeP8xGRqbx8Der6JTAMTmVBLr7Wz1djGBRgiVZCR",
  "key27": "5TuUpZuxeyaeGdvVTV5s5noj9CQ71K2V6i7CfTRFyynGVYceZAsUZpqVBuQykVWU94eyzSAqgQC3M8dWSYjHMaN3",
  "key28": "2QphEBGs6hW1hTibYRkUHqfDyETvz1Q8FXRLfP3LTVkkkDrgjQq81Xg9hTCBtjaJF7B2XrrqqY6KS9ejHVpPCkH5",
  "key29": "4uakW33xTH2ZNiZYKf1bG3MpnonRcQsNCAe3wjZ3Ax9vJhNpEcMLM8EyG8LEEFCrHozumyafhGTA9qQtJG7fwp6r",
  "key30": "L3Axp4jpRRsTLTmHG2zZA4WdsahyQhAfDGhzbtEkDVaJAwASxSBSZspo7ojNbzr3YPWH4F8ZcEdiQM3NPffWr9o",
  "key31": "y9R5cm6aSiZg7wseX85mbuP22xH5svPPpqx5FZiKUbsLVXvGv44npjzRW7Q62NFsvkswt9cZy6EkSh3nJKbV9yL",
  "key32": "2d8XpqWjfThFByZTPNsHd48UDMwf3d27GiaLrRg18p51ERwbxo1Wc1x3Uz5Rai9o1UwB1NogUFaKemHKnkqaztjP",
  "key33": "2i9nuWeBNUhP6kqWHJDrHUTqmJyqFJSobeiU3ewrwkVKUy7oHaumc1xrAMX97ko4oaZEVG1Aw8gzwGEuVYJ94UVm",
  "key34": "5SxT2e5MQ5GKxR6jNGPphvKKKYBu96zJ6soLWQqojf1fGgN3WvZ3FLFz98Lft3YoF3Wyqhwpd9yZMj9JRPiNGPrs",
  "key35": "2HjYGjGZdyBN6UAi8BYRQH4MNhmKWnWp8v3gFrMD5k7ainhby8d4GU9dxmrAg7R7w3gN2Ma7Z57rQVHJseKEbGBy",
  "key36": "5JCrKf9NKDaJFfGJLGkHHqja5AcFg9m6GBNN7ms4uMHERAnqQGcwaWaxrmDyZHfP83hS1KjYGotHpyrxXbd42esE",
  "key37": "dcwawrcBkDWFxv4nAPKQESH7icXP5xwnT1tSSqxM8eLZ5qEwZgLWR8UE7WjfbyLqAgiSRbA1wnsgyyXPKXTyEx4",
  "key38": "5P5qihZ3F7X9e1J91TiR4fY1vB5eXR5QdiXhv3iWpYMxGXFFp5Wbi9fEi5qSpSaSfgfSGMN1t2owFvR6ia5w2Z6Y",
  "key39": "3EAPPAfPEt5Srzjc2TVq7MHx8BxrktYTYxibPcNdCyQnGvxT6tCTcYLp3vLRU2JuVy2gGde14v1acxQJT5Qi4q2e",
  "key40": "bXQMbdFor1CWC5yGX8adKG6tzM6cRNEh6roswhAXhXh8U45MGXurdLiavF8FBb1pb63p8s1SSXz1zKVnvFeriMQ",
  "key41": "23CvNs5p1eG7N4L2UAkhd3xSKWPwvEGKf4ABmm3bR9VYnWoJn6dJM5kAEFWkEdQtbP8MSxjBUn5Ao9rTnBufFY9E",
  "key42": "2KX8Qeoefxb4SJpSDF283opGgPgYUvnftcCwRc3Fxf9FUQgvcLJW3P1g1u6zdiYz2opamQFVC2gXdTEVP7Sd2d9v"
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
