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
    "3dnBRNzKnemgSvhYXFenuMwq1cHXNZ4YA3k8EFyXs7WUAPSGicg8iXxTDyNmPRnBV8wYfHzYy6mfGFWWzERkNj4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xHp4fwJC7k6tNyuR4RVvAwjDYwkz7J5qsd1nvqjiX4ZpCcqZcZk1cJhN38LxsnUnYjnqy5dEGfTcRSq3PPJ8j7T",
  "key1": "y9zNWa45PZjNVLJtmHRgHDbxqRjtYp8KvcM7HfVYY22G7QayFZZfmDXGRuL9VbJAEJDmriVwkacpWVZDKTU15Hb",
  "key2": "5mU5XoNjtbLCWz7Tdr6GA52a1bvr2GgJq9VH2SteZHzHi3Lipj3MB9F53PC6e8mnniQLbv1qzzCgMYFjDeEM3D5D",
  "key3": "5a7suGwTUNAehxdXhrtKotyMwB3hYM6yrtbFBDw2qou1DQsTxup6nnHLbQ1sEc4KvUbJQiU8nB5vYsyFVrXKFsxV",
  "key4": "s52zodufWzSpZNcCxYMsyix5eyUw4BuLutapzS85DApraGSJzHmfuFbbLTme7ek2MWggqoGBJSFxFujFNmYVa1M",
  "key5": "3TsWeM3RY9jbo8Dah9morJRJHPE7WMwsEJoJygvaBKBBYQ6dS1gzgBwKkKqZy3yaB9xRMEQvNv9xgbzmyKxJ3qZv",
  "key6": "4c1zPoxKxc2sU9WhJuT3rd77nNNTTckWcoKJ4xvuovxPUJEM8mBkRqQ3J3nBG1yR9SGzCRmwfqU1b9LeRzRFLvgV",
  "key7": "UNAKztNFTEaiFn6ZiKPjAYpZmQPrxjK364qioDSCPwdPzQapX9iQMrgpo4r9CvBfTN3GzqgbYgyrhnxoezaCoGJ",
  "key8": "2qxWCDdX2DVSArEyiB13ikEb3fJaW6LnF5BJna54gFDJnTZjTnSV66HeayrV987p9HMye4QYqorhg2ZVgmqB5q66",
  "key9": "2wVnjs2G6mLzrAj8d9V6EpNvdUsmBRMn9XNRgwrfnDiaqtzxdtxVzprkBkn3guctXVZTotuge4VRCtEJ5dRyDEDy",
  "key10": "4uwoCTeNUZgbUUohK4DmvZG3xLfR2g1uxqBj8jwnXa4EReWKcau9majsNuD6x44UHjDt1FEsroi7RJhCDVDN4g1N",
  "key11": "3uYteHu9voJ9TD9C1EeRXGGGFTpfAfhiEcKgKshVX7jrJq2iKAYXBwvsUX7unQbFhNq6bzDrLEJgz7q4JywYgKw8",
  "key12": "2yE9UgTbnJ3Bzc98yn2jrQevPTXBUeCLyoEykDN259Lx4bXXm8kmVs7fEqj69KcQs1jqy9NhYNFXFnNUapEENVrc",
  "key13": "3GicScDScceHew9WhC3xtpoxR2RNPEe9wZptvMVU4hF9ZDZq3YN2c2WQSpxf7XjJPKZPB5nC9R2USs4gw3cRXc1k",
  "key14": "4nYxBV6LxKmgeKGKZzEZmftQqguevZ3LogCvimMajbFaTjix3GTgb9tuGS55xynyELvGLQbbWCvCteemExwM2puH",
  "key15": "ty6NrWLuzKEJ4hqBoznmwquEshEkACjFyLZqFfyzx1w1MXwfWha4Fadao8yVihfSEtrpsje3JzreNdF7ZF6e5oV",
  "key16": "5fmN79HAoYZuwUj6Ak7RbfK1ZzZL6cvTUtKeJRtBU1hgrjrKGCYZNN38E3ZjMn7tniit3qDoeMMXx1p38gTgJ6zS",
  "key17": "P87HpHoCCXVj6xtGquRs5F2EWciTmRGzExoBBGfLAfR2idJHkbhvZxFYjcuamygLX6hXWncyNqsRcT4ZErSTCnn",
  "key18": "4btMeCKzggFgBq4AKcoSdt1Gh5z2sL9gPhByRtRk3JBnPomWQfHxpHUBb9vztsPjwCks8VqR4gzYv4g9myVWPkgG",
  "key19": "auYG9tq2eyFd46THfQnUfgYkPVR8QWgiT7WXviqUPzeUSihqtW6qJoqZVE8WXXo8J5XkbPGkebVcyj5592d6tye",
  "key20": "5c1AZ6TmCD9eN5NRxvRBeQWBdqTNfLBhm3iPyN9d8JFKqudGb6CpBr7sozjppWk9isP4zsQ3GyoErMcib5rdnTK6",
  "key21": "5KfyitTiaUaG8SzUvEDjoWecv76jthS6RPdmGB6UjW9pLnLjtH8tSTyYfMhB4Mjy3Fa1qo8hAeaQjEKP822ZseXv",
  "key22": "2zzr9wV3hyBLpcviMe2TK2bTaAr4xHsgTT58da1L4S6tMgWeRNGRJbetcSkodeYLPqcuwqC4SaUeSUNmGXFd7Ya2",
  "key23": "5YhdNjntAwxKT5ABLMJBkGmw9KZ538rjYTd3EF24EcbQ3jqjJKRNNzLD3ceVAb3mE6vZPdAotWb8y6eJuA1iHkBN",
  "key24": "2h2h9cEUG4ucptwx2nvpgDV5Q2EGKHEqJ9s5tCsGjfxnCXuqtgw6qttCxzXx3SDx54sQmpmdkERwRqJjZ4aos4an",
  "key25": "4kexvAZ6TYUfdxH2NgcZwfWezPXvjXMesKm83rTUtoJ5pnUAW3ZWgScfFTPJ14TQHwbGUXee4E4DkBj9zVy8MprU",
  "key26": "4ZHn6d3sjZfpMPttZ7gyKfmMRsVr4jLpJCDHZrCZR9pBsWFPnEEkpUABT1hAhMLHgvtELw86BCWg8bRJPeffykUs",
  "key27": "YgZYaciQhuuKTUz6ksbt5VVGHxwnfot2aBiqSkEqzLEEZnkv8GPfPkt99DfNSqS3FqRV5sgUNXrrHRuUPrjBndZ",
  "key28": "4hG2c7oXhbXeacJ7LtMPdeGhWkn4ZqmA1Kj3hWNiHh9EVCHBpNbgyYQEEeYEVqPrA8VNVwDL34nePnu62oKHY9eF",
  "key29": "59x1qBtk4CsMXAFbVr7NKLjZtQKpUiomsZUe5upVqJde7K5PqErueHTXHQx8ZC9FqXfGGBTy7UNc6a6ZjYv3zhfn",
  "key30": "FMDmMQEb8JAjso5gq1UucXQiiXYfxXgLWzK1SQmXZAMVWYSGAm9gyLoP2zctaX9E2gfSPShabdq7dvQfjf3EUiY",
  "key31": "2unA7f9PMjwiY2TEFtZ3efP19CQZKSwbCp9f9cJEdLq86snUKZUxSNy5Vc3izdGX7rZ6MV612jzJ86bo4D8MTcme",
  "key32": "3aafJWcgUZwripqVppNJc2C7AKuvUCkUHtP9AVhpuguWsNL3pcMJA8HCcBdHLRQ7sAC67bmrRXw6rTJzaEPNr48C",
  "key33": "2muYhM63vhxa9fLyGzinnBrywbi7dSxyZVmScJPy79aS6eRg9q1VxPZW3zP5xuhAtcLwbomkhkGuuq6TbGmF74rY",
  "key34": "25r5X6h91hrBe2cWDgx3S4mbS1dxshqB95RaFip9YUn5o4FaTezhk8472XWfrFX8PLeZTKqBpvnCDczw1zhM1kMH",
  "key35": "4JhVTBqt8S28k1BFmrXEK56UJHvmZFfiYPdr4xcM1g9NCqxMxwPecvkKE3e6RRFUzTdQJNVsRi5UzaiYLU48qm48",
  "key36": "PuehS1PdF2ofMYChmMXq11svsw64RtS9PaQUe4UaVx9Lq26xHoJzdmd3mF8PNvyascqxqwg1WpFzsSUoaNj7eD6",
  "key37": "5xDQyNjwoXF5auzXv65N96ppDAAvpMhJuu9NYGtY22WeTCKGzE7yd47VG5Xxx8PP76P3oUK8b6gZgoaGQgbCDVkv",
  "key38": "3bmxYUJijjHjfwYHua3Buh3XVGbM7UR5D5ctcSviTrYhRa5DXZnp37mzY9utJTHaDgKXBveCB13Xt1YKnZ3CetaZ",
  "key39": "27WLHQ74mdc8mkRiTXWwpDgVqKTpqQH8mkGtkh8LZcFb9nrB4LhdLNLeDPXkDAfdAYdaECWq2Zo4YjWbTvp2FQjm",
  "key40": "2DYdb8uF1MPnWpq1ay6cLcfdSvXXqRttYCsSp1KcvaCdNV4i3g1fgwCgp1V5EHgD87kivQUD3NVQBKVniiNwp6XL",
  "key41": "5NJftxAW8N2HR8B5H2uYUX9op6PKuF1CG1LSkV9CsKEo4Jn88oLBkQq1AeKbSeBL52Z5N9R2DCPEZ4FxucRqFWHb",
  "key42": "29QJZFEqoWJDiSbg8KmjN4m4YdcP7iVGFTFRkpyyQTwiXyGbuBHYP4oWCqLCKNXwEcwo8roJwCwY8ECbvr1jrVxc",
  "key43": "XdVLFoUqBpyW2DfbA2EfCuYeb9pGCHT27soTX7FKeePSNqG3ULERPgAToCHLxupkpKfJxhxDCPA35og5siekNWj"
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
