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
    "2HGj9Uq4jAbPCCCmVJeo9ePBcPHLgHrUwkkF244fQJ8dV2fZJtZG2Fr6Cb92Ese87hrJPBPgZznb6R1kLEp6VRjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WfTQr2WxSHCPyqTKUcJ8dJdy3UMoRUii3Kcy5sYs7NpsUmA1j8nDFwYbi4asVvnZtmq9GwxXQzVPHxn1qFPocCb",
  "key1": "4TqnTZkKwf2NnEAyQY1Vv1Rm4Tx2Q2cWXmYEvYQnBP8X7de17HsqsURBY85FU7ajA8LspdCLy6b4BrUkt1cRafcC",
  "key2": "48jy5z5yDgNnGveeYgp59PEtapaNySe3X77xWWb78wAaf62oZ5PoMnG96WteW5NZkYvd5QXmkGUoLvKm8tZ5KbAP",
  "key3": "dUyLopk6BVKWQtfgxhHEmu4XoKHoVEE6uwTxLpuacTmjpyziqad51GLSxdDBwnFaRuGcEczvovrn2KTq2irc4tR",
  "key4": "26nLiHFVcBC9g4YYYXeRo9Fag37mTZSCVMXuyexTKeKAu4ft7bjPcwJeUqHDsBF18wR1QRzkqKxazFExjYCMNGaQ",
  "key5": "5tgqjUZ7eTpSXhm5hvSxx4npcWZQ6yyDxf75h7XEK2Wz936nZgCVadnu6orEopS6SrZq149FpYjqCsQKfR5WxU8Y",
  "key6": "21MC5TD2xMjtjZVhPZ3n8jkcbdBbWzj5ABmTRwo2KVATmpQE91LagExmzPVAeUvwZ8Q6Ygg4Gpt8QsujQogQFgPd",
  "key7": "4SJ9CdXXcxgmJAF2846oacxkKRz35mGB56xSGBz657GK2rW8t7exQHXxGfqcBfD1RNS67D7MqorWBJv8gPLhzg3V",
  "key8": "5Kp71ydPUSmffyDiQ5osDvcj5D9S8EWEFNcawC2vNqK7z14WMNWU6kRnoLT59Bak3nJzwwnZQ4SMVECeHPaj14t1",
  "key9": "66U4GFmxa2uoMUtcTuRd7yA1zB76bmThSDR3t3vTtEp9XNb4RqByFZAhwm55NUDgCmRxMekMZXTqbgZjkMn3FkMj",
  "key10": "4CNKsJ418i91PKwPKYGu2ZVvr4p2R4Su2mS7H4BtP768ZMz3uEz6FUcqSKZSgxGYfSW4bDpGF1yu5iTbgBBnbK4e",
  "key11": "39Ed4XCE85mmmhEEwYuSo7TjTD34nrkPzDN8bH18bP1UMnyMPV6rxMtudZLZesEWi2tm7268HEaYEkaDLWuygsrV",
  "key12": "zatoZo61uatwXivzikKuxvrBpr5hpHsizsmeLsMcBrw6Tq3brFkLZnSrsDo4R2Z6aGR9QnX4HQ29hwRuAZVVC41",
  "key13": "2VbK9y2ymgUv7LzhYzQtPs9zFHKCDZoN7onoLjQQcxtMFszsnJNpACKrTkTiAzcLbYcQbTvcbiqRcHojbA7e384C",
  "key14": "5rwMFRzcx1UUgcrKUPpuuxiiinQigo9e4A5W9iSaD4y6pZCrEQGJfE4Vtc44qT2WB5E1E21HY5Xo4XPNqF2yUbW8",
  "key15": "5PJdBZTiLnKwgH3Y7MNT76aV7xZmFDEsZVr6mFTaBkJpfgpBBmP2azK2g2zWrN93sKRcufERVMXp352bStVEueZ3",
  "key16": "5DjKv8HztTb7ri7TdiBnxHk4DzArVt5eZYezUZAid7J1gvypBmutrKKCmCjhCAbUxS2vhmXPEm1pJUHzWvaX4H7X",
  "key17": "2MCWTGbozLW7FiNKkCXk2jbNM711kE7U2XmG8vu2v9BjbUMLeaySGz9Vs89UtsJ7WfNUBhkTuBa7hF7v7onaE5yS",
  "key18": "MkRJ5MgWA6dJJcxssMzXeJpFefXc7ZR42wGnhq83UWVN7cjvs8mk1UnL1DsRpY8Zu8rHem9QWhuiPXiqm3Y4EBz",
  "key19": "5hTA4NBsMQuVLTuzXfnTkW62gC2VoTGX32DdGKo87Sx1ZwmVuMHDrBR8eecmz6qqttDVqx4gtwtoMPnVKyxwcAip",
  "key20": "4FQfcKEsG6qV66bSdQKgzFjgyWau6f8GRZizupQqvfGjuvX6aTht7K8E2kPZzEyh5gMJRAMaWTfTjVVQyNPjy4dT",
  "key21": "4g7XFhuQTZZm1S1edjVjCquZ26TveQfVkB1jYbe72d9GKuimKYLyAib2ijoX77NFCN9awytHTHaT5fJCvk3SGBtX",
  "key22": "eEpyewb14rkqndJCdhcW253hkBFi6daES7tL61G5hPZqgpZyGYXf3vgQ2aM2gQUnZaudpL4SjKUQgFh9AYgqfBb",
  "key23": "2sTWhnzwffcCQQkNPzy2JtKqCQZAcAdnkrd1sfq9cTiqJ24nGC5TZgGX9M3cVzLAK8ReDCdwcSjMZUHwLKoMmthb",
  "key24": "TNLmbfHhCxCC7Rkw22GwC8SiQHyRT6iEHcVdtHUFLfTcJr6TxBoMdLGfstVU48bCzZmp3LHSUWiGs8LjGTSLyPN",
  "key25": "p5jkPJvDLycYkiXyTtWFfqQcJN7DmMbNif2HofwSjXL3fGKQu8F44nM8uQ3VtvYp5TP38iWj1YnXr4NcnXqf4GX",
  "key26": "A7sVftW3finWDRTQu2JuEGQUQ2pD6gFQagBqEiAa9qPVNvG5MuChyA1AHDeCu1YsBykXaaxgSUythJnyDB62uz8",
  "key27": "2epzJpybLoTFa8or4oLX5FvF6ExuG5vfh31ui3KyjLQ8oDfsST7qbfxCBRUjep4XK267tvvWCMAyPZpUjRJEN5Mz",
  "key28": "2qRdjA8w3E4mRxe9xN2BuxHMi6xKj37MDt7tPcY6c6dJSN4iujBxZTzqUrNkLLsmz4rBsULutvz7EfmMEYcpoamX",
  "key29": "twrSVyV2exrMPTo4n2x8S74ykm3ebdmPu3garq9Qd5gydyTNADMioo51zoPZECZ8f57ERkDay1QcWX7RscyEtp1",
  "key30": "23WcEfxFfZpqPrzwkNPwK3nAEaf3AyY9AQizJ8jeMqGViEEbaGhxBUkVSiFEMLZfGB4N8jktK7ztZWG2iN7HCN6V",
  "key31": "2yRNfUjc8dQsaVVqEVhxi1NcCeRRRKWwPQJNP7HhkNK8keVYCrrunPmnR2tN3gqyvNkcV9xZbQzYk8AggPtG1xR9",
  "key32": "62qQcSJkVzMVFe37PxLRDuu9UsYXVJL8erQhpkehF2racTLm12957kvFidEBA6tKA1w7Lm566PczV2gFTwuKNbAW",
  "key33": "64rFz8GZnDKiwduwZ1ijaG8wfvWrpdJwPDmSaQ5RxpppwrvzfhF8egYS3pLzVXCyHCd3hWtN9XnN4XcqGHEeTstG",
  "key34": "21Aex6K3P3fNqGg8GBU4qJWpYiWqZYJRAVjczSh1zqETSSb8ceu3zAew5SqFVduWfJWe6BdfiojYoKzJy7UrsgU9",
  "key35": "3fGstB75qwbQhW6M5rT8v2YPnrLgjnCqgRt51gEWghS439TKDj9ENCcgLp5EZcWJ1ZQ3EeWu6Qtk9Nd4bEDecVtx",
  "key36": "3HJy8B8XSBwYvGCYrz8zaegjHReUtGyVpf4e57ZoqU2U3GfgNPG8iywzCErWXGYrLz7AEMoNvPM5XAsjQyB56Uxn",
  "key37": "3s22zn9Ed7Te4CorCu6J3DhqSH6yHnHPkod8db8F7k7oM8hvxarsbZ143Wy8TiZpv7WfqmRqUf8stRRumVCwrAw3",
  "key38": "BVjr9YeP9yGyQX8AaWnzUzb3oL9MfdNcZopw7ba11GMv66jtNu5UmQTAdnH1K2LySviAJst1kE2vzHdCeQA9qgJ",
  "key39": "3u2avHobLzPBJYDSzr62x7qkrjgpq9dHTDuzq54jkVURejHUrcgpq56prZQvCFACXWHvHHi9U38RBmPG94NVDZLt"
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
