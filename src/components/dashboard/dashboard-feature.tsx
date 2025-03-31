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
    "4BFTSH5XVKjpYPpEbKSfJWA6YSnqZGuzgtbWg1L9U7pDVnvV641MttfALfjGDrQtAVCQFb4XQq6r9N1SGuTBa4c3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wxzm1tMdZALYsk99sMNxkkrgU6BDPWteWum7qE8btg5e6YCQsdqjs6JbVbrKtCYzrVUfEN4KZ7jVvv1zdq3QdDt",
  "key1": "1JvsMQXuuNpMY3M4J3Y7YHJiR2ybZCHwxgUsyLM2N9pTv2mropzDLwki6LM88Gt7ivQSXvXEohjBxTBhScWMnaR",
  "key2": "2Qed22RVYLJ2RHNy8f33EPJ4GT68eykrNNxpkoH8XectSTbtgEPY4R8q7xTAFmTV6A5rXcy4xQTSk5k5tWkaYXFY",
  "key3": "SkTdpsxWFzgrENAV15L2QFDEDwz5Ep8mw7zbSXp3o3RArsuP2Y8xbZXbEGsteQe5QSZMunKvUQiaE1HvWUX5ECa",
  "key4": "3WcPqJ7jacpREwAmhzgjs3itmti5EcKQpQ6r43MygVpi2xaAxiBZHwBMA57E53zoiE3S69qi3muTEUkn8Mgqgtvx",
  "key5": "3by5SywHzdh1vpKgQdufY1B19tT6LeEdXrCN1y5NtLgPL5ReQ7mn7Bcz4k8NsuWUNVGHJ3QPw5e2U9ADYAbRMSN6",
  "key6": "59JFtXPEmdZC7PaxiJm3swy15ooPbXgUYrM8S7YZfY7iDer7xWa8kJGiJXaq8W4kHqEth5BntmXvSHZ3714KyLC6",
  "key7": "4U4etKGwKXiikgnMdqfnTMbyCXde7va1dEJ7g4GWWBDRNGcfcPqS1YUJvFRepru1oY6cnMxVVZHHbjpRzoCvkRoc",
  "key8": "5pkt96Z7mHPerXbC8eugUTVL9yjNriPRnCQ49b9FHpXWSEQugpkkZgHkaoVy9YpoLUJ8XF7kBxwdbWAqzZxQfnx8",
  "key9": "4GuRyrmTSo9eNK54pT8Ms9YueK2VjvgH1dvEioX39Cp21ksPAj2Wqhei8ZUTdjVwaVzpqPiucuoH1GHkjkTdA2J2",
  "key10": "2rtpuVE9zaJhfvQq1zXLJpt8avCWU7Mi1dHAbdyc51fnqK2aJ9XBgAbxmnWJFBC9U13hw6qSL7nktWvonTzoVKm",
  "key11": "3CzxkFyi8jvTF2PfqUWWXXMvDPvTytAZD4hsLfQPqTLLRHsv2cYkJGGio7et8qvZHCzo62Sx7tXnyfBYsmWZRBKW",
  "key12": "5EKgk2MEAB1a35MtNVXk3ncNAMocJ4bXH1bb3F7W4ZCSFdN2J4KugCabFZZ4FFzkFaSAZtN7hzFrh6Ecn9A2kdSQ",
  "key13": "2NTDcnMmg52RKARoCh8xze2wbWh7bXq8oXL8T68iRafR6g3kXrR6xV4DwQ9tDabYDQkZhiKpQGchCjW3ioM4PJyH",
  "key14": "2Aq2bJBb8s7FrwTC5ECVBpHwgcS3n9Dk7yntX5zFzdFPYNDK8FCL8kUTUXuZm36PQnSPKMqL3r1x4x9e918WdxZT",
  "key15": "4F9WMG2LThi9sYacmP6h2DdV81B5i5ZpYqbDSHqGZjhLwkGzCuvJuR9FBxTuBsMca5mqAikK4qFADqhxC5USwzxK",
  "key16": "4AGodwst55Gq6HfTTFh9xZVr3qKhGZcpt1sicfndoFdwky8yiuqvDwT9Mb5JThJMoaLNA4GkYfxvho7emouW8ZTk",
  "key17": "28fGUbY6aoTRWFRcFG2j8JmnHMhfGnUmZi4PrDKbzo56BtgxWNomLF2d7GALKYyU4e7dUHqsajz93Wsm8y3UAMPr",
  "key18": "iLGB24g6dUpkw7mwW6fFUt8vLpXA2BsNKPsV188zSkzcJMxxV291rzYoNqtP5caDyM4ZHa2sZpRhtgWaLh9F2Mh",
  "key19": "5ErFgSTHpPGVu5HNkoz5xGQDLBUY6t8Jzexwwia6t52Ar7BPBkAgDaenVuX6rNPbFz2rhJmuTy9JB1Tjzd9476kV",
  "key20": "4VM59JnhCcH4DUkh6PZKVmZNUuj1Cdxk4GfRWbiktFJngEDXTML7xWDHXN9fB1brw68LN5Az1gkKLYGvkXHaKHWr",
  "key21": "3bDhezLFCv9F4nZKZWFPoxfG6WoJj63uZ53PY4D8q51F3zy2MxyjrjvdV3CPapBGvuDjG4hm8kURe67zUaqM1Nh8",
  "key22": "2VB7iYpyyS1hc3PrR8ugfWvXWnnfNRJWUpbL7FH7pPtNGeggkhZHegDFnh8TeM2DgrHKVmPU8rGB1mYDvHdNWJG3",
  "key23": "3gr9bnJrX93HQoVepmtybPFxuKuWiYR6Vdmz4qvdbKptYDpnL6pwtduZgJQa5qAx3fNGf5n6oCWxzAqWEmsAaw5j",
  "key24": "4aCgUoEbzAvQgScPwcAZ1Jfq4mJDwWjJPT3T9FVC9ZpGWkMa95cCAw4KzDwHhwZbB6J6RspKdY9zPrTQM22znYnG",
  "key25": "uyNBRZMLix5xJfVzs4gc47F1h9csgK5MVNrUvTGsK3BAaBaRgMZksfrZ86J1QKKXhhjwHmgrhjy4GqXuqFac9Vn",
  "key26": "3wDHgwGCG36dkcsVbzUCwSGFYTTpiHPnnBChJo1ypWpzZLyxhdhGhT4RhP6UvbPdd33fr7KXChs6WiaRxZ2xRDKS",
  "key27": "5CMZ6mLSUBHHwirPdfr3mSN6HLjmhfTErZKpj4iC6cPMfsUCBkViDmswFosXCQFQsTFq6ZXaZm36YymYiomrkgaH",
  "key28": "49WWsfT84fsmBjEbE1qdrYERKrHwjJYNCYgHWQVSGubbPWZZoCaTcKbjoG2RUnHfUBY7vdkhpALbEt5NFHoqxukw",
  "key29": "ZA6yTLDXt7L8TjiG4DaKSejv1D3NoRxTkcJUF6AkSz7jAxbe9ywLvcToXXSfadudx1dTFw8LJybJ96njpToVYa9",
  "key30": "4kNRuTqGyAgYwLLuUCDzgawAaYMGqqo2ochKQRbEKsjbaxkWd4rAry52mibyrn4ApfdmxhDdbVdY46hFaA3duuhh",
  "key31": "54TxkvTnjNQdxe71Btt5tcew1mQoUbVkjQYHHuPXq7Yb413EP3ury63HRjqtYQJHr7to39v99UY8Qzn9XhyCJWeX",
  "key32": "3KK5TRwt9FDWMMGQpn3HgJmX5w1UYsib2Jz6EK3vao9dPoYHQmPxYisBDBSJ6qHfkCK3zL7nixZPwwmpiYWLSdx6",
  "key33": "MfHSon2dXCXnsZHxUvEo5eZmW5peia7pddzeQmyBkcbQaWkENuB58JGHeqh2udC2kjQ3mZMjWzXhurzK6EzoqQf",
  "key34": "3husMn69u6CCZXoCyDCnwpzMjmErTnGNZm2YqxKeEPZrBKNwjFGKwMEU2uoRzoXP9NhMezMCS1ii9cEhjdcRfQ53",
  "key35": "2JBVtzA2Fos9SKaGcukhUTzzV54nxXSYZnXdNKvQALuiaYdZzZG2fdmkcsK88Bx7YxTKvLZ88onN4t4jn5uCCXQS",
  "key36": "RsFWf6k32YWzSXTbrNgZH939Sb3eRekt3X3N5hyogwrv2YmeJNMZdXUoUeH7jpik2EsQFU9HH4GGB6q2VgniRh1",
  "key37": "4CXCWFN5GqdtW5Wqp6yMMSoeQQ44EYijCEwBhiKASJRW7Gq5VjGYcUwF5d1YZx3mQRnqWENnxRg9Bvooh3vyRzqc",
  "key38": "4NbW2UggN5zFcxXfJQxxkDGiGXgGpKmfbVufxcLjbj6bSSVHeKB1StCHhFXrdTwTgzCnH1mF3swVqS3EK3ijfRkH",
  "key39": "5e3dhVsuF5rGSyuez9ke4mJLMiTigxhJ6Kbq3JYuc5PjizbfGkfKBCAqkFUWh2j33KtzWRwboFwrgBUz6Lh5svEh",
  "key40": "nWXBLB95B5GrA5aYVGyudRWSBLAox42sn5SbK8CMzqGyV7FjsydFipj1UXajg3BMJqWwmF3S7gJunUEUTzJCxrt",
  "key41": "3WudrCG6FBjUfBhc73JwMmusahvdMvw2eQaYNEV8o8Y9WAEfbQf4VsEDZpx2hDyVKpR9JtJ3ueNUs2sZ5B6Ak31j"
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
