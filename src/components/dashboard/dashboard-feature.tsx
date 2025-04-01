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
    "Vd7wzwLw9SaYhdEo3mEwyHB1RFMNGdyDMsxHL6YYdiKXZUCtRFcGsLhV72VsJ1n7t9FsyxvB5DUfNPqdXFnuCCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fNsMpt42RyWFZL1pVtqnVB7oE8KTS9CMcoEdvCyxFVzPeyGeFKVANGBZSeDmPSumtTEetCQysn7v6XF6QNZLk2X",
  "key1": "imhF3LPYaMsZAShr5xaQ3cdmHK45Z95CHPEvmR3bBtn4wCZq4gUNSdXRZ7fuQhfsWDsMTexxBLjkvYWq6H6LwfV",
  "key2": "5ua8BpCmgKVgmxz1ncuC8Bn85GgoHv52fQkeYKe5K1ghqqa7ZXnuMvKwnAiHsrMM2DzEXU1ewKdFtAot6gUbZsEX",
  "key3": "3oqDZtgF3Z9fuCTEfkKV5dcodJENXmH99Rp9c6P66UF2wn5WiSuAzVwd1aAu2C7qG32uBbzTXGX2JL3GW1U6ufiY",
  "key4": "8bqV7p3Q6brYn54wXUfDCF59PR4TULREYEeLBovS3v5AiQbqsBjRNeiaXfFdTieU4isgrSVHS3raSLqppDfS1Ze",
  "key5": "2Eo6AmTiams5h2rZZAwmzxa5qTrj5uXY14CHvr6FqLsjAZDHdZqEBt3KEWsuYjbhj6zzhFSPj29MArSFSj3icZTS",
  "key6": "4gyxS5JtWdETSMvu1uLnhXtLn29otmMw375MM1vHuVMsJ5GopZdFAZNcruDnGdgFx9FPYsmr7iB7tr1K1g1gp5m5",
  "key7": "5A2LL644GG7zgso1wD93v3Eujk4TNy58pugsP8G6xGKtjkPksRbpPT4Q9v4io48pUDLJoK1zSwnsfZ6awE8diL9M",
  "key8": "21o16ZyKSBxERGwxMXsDqHg1c1zsaV4VyZrNFf3z3po3gDnXZ7vQ1D8zDWeu7wpWtT8F7hwSfA4fzhAfauVtkxbG",
  "key9": "2VQQ3mykzoMfkAdakNz8YVG8LwVEYTuTSPJdXw8Yxxs7z32DQBpiZq573tHoRmS3NVxuVmg7aqV7cJ23K3nR3Hhx",
  "key10": "53BuHvA9AqcaYZdECMjZzzEHdKcYN2ThaRXeiGWqXEdotfNCj1FtKtZfpPDwKz5exwMLPMxTTujtVZQ9BLgE49vR",
  "key11": "vwngEtwvQKEGGp2kbFQVE2jKRDenKs4XEhb9j7DhvR2nXLb48QMaLjHYs3bfKyfgqL9y3h1rDq1aq1piR9KpxPz",
  "key12": "2jqP62pmBZ3v6LGbUvMZh1VFUkk2inTBa8BE95r8aRga3fzjpTdjZ7rgDLRxBdoa5aVZvHZip3zQiK8wv14GsuX8",
  "key13": "2QBY4kXhWKQiVs6dQJWBs7gx5shurH7fWE9Zoyk3hCcFtof6i5LpjNodz4wuZv48ru7SXSMPxZ7aZviEz7FJshe",
  "key14": "3aEFe7yHkfXxWfbQRrLGQ3uZZ5TqV4gd4uM6h4Cv949z3WfL9UaTirX68VokVhuSN7QNCAkmaQjvpXZwyvYvmEUR",
  "key15": "5WqhfSioQoRyDqAXejAPqFvT6n7gMeyg53uvRKoAg6APGRCSGCGpXzNP4YWtsHoAF4wvzpxiWMPNkxjU8xU1TE1K",
  "key16": "27vvxBknEv2PcS2GY4BPr6eJ2MGJkt3EBrgx39BMqLJ8YXTJuAW5MQPfLLRPsBPWHaePKRXeXJWU6eWESFxrKtbF",
  "key17": "SBLnUBwpm4UBrzfZ1CQ29UFtKt8dEZUaW7L2aie9Mvb53RBJdCrNuhW9HRiYgExEdcYKQdv6bXFTA35ewoz15dx",
  "key18": "4mDQgWJTTm8e31BLBk8gnn1uaw7dmDysyh8bv7EkAJm3XK1B9iRQzThAZFcZGDEiLBCdGngFgeHmF8FFo2uYVW8j",
  "key19": "ZTETihnyutBfGHsHHXbnezVfwXgKHKzdaAws4mvc63hdehdTdNiv6VVbPtRjRrcma6AiDpWB8AbyuwY6FAE2BVo",
  "key20": "66ZWR7kTqLv2cerZqH29JRe9JnybttGBdUPGQM9dUZb5LVQqMrbZNapLcedNcKFf2MjL9cdBbCEQbBhkv88Uj2Ck",
  "key21": "XCEvrUhekobk7w3TEpnGntDjFqQqMsf5zD9kUe6odbQdYXF4D3Norayxr5XjqUHQ3GzJ8Yc9DJgopbUuAriR8uV",
  "key22": "4NrS8SUt2Ufd5HEku7RtvqD9v9JHK4eh3hGG1EL3kWc1LsjPZSNZa35n7eBLiy5tax6froyV2nQue6hgh8kdiatj",
  "key23": "3SMfYAEEAtnkrdmH7ZzitNSB3QiDvj7HwcVRQMv8LRfHXwhTSASvpGmJ6MB1CqobjeZ7EGLkozVAgNv68JzpSKfY",
  "key24": "5wb1abqZJbNGXE3RT5YXrXYcQg5qjxYuUXg58Ayfa56sw8X7eAGN8RgkPg2rvocRZyeRDgwgfqPZMM8fEBLBdimJ",
  "key25": "5Z65iZiwzThkKfgN9ZEyLYmeJxYwL2H4nfvsh3SzKUPdCWAwXPaqUNvkBYweEiuW8HEhyQFD44iyp41X3cvnpsdD",
  "key26": "4MzNpGzrudxvyuP1CVokPiunCAF69DMdUycg6yUrAFvaDD8SuSwr2b2afaxm872CKomojgua6oqQWmZoVDnYnWUM",
  "key27": "4146uxvGZwBy9fvCXCDPWHhPxDZmYq4ps4PVtTr3p1z8JWyh1o4dkQErsMXqXaKwHLtVWuBxkkfbnKQrZpFvqkwz",
  "key28": "2cmtqh6vekCx9A16ecS7NUPQnYHBHgmCoUtc5gZbAcCNGMebQARWes9SKr2wjKgmj1RqQJYVbGfpEr3gyBDbzXng",
  "key29": "4Y62Z5VwuhUGJtYsTsrYnfMAjHmuio2sXTYrCtcsqqkwDMuwHTUTkxCxC4dEm3rw4qnpZWKd8DGfRzT4CEK5qTGP",
  "key30": "32GkZ7H9PWzu5eK3P6ewmvMG58Bn3uyUacAHPBPndEBka9BixXHRKrGg1DXYpmyvNwstjHwDqRhAy798B4pQMtG",
  "key31": "33PYZ3aQzHC3PJGFT2acjEk2RepUjC5oPGct9iqqa4fXFjxkpFVYEyKHcQcPgsgPukks9ZCr77YCAoBLYLoq3Hqw",
  "key32": "yNi5AZwDndTxhXrZYsc9Mk95B1A7Kkzcviw7rMT6ipzKExP6JwABbHS8rDTy8gdhVmmXkoq9oQJoK4qTr1BTMCz",
  "key33": "4zQ8wLa2RvHUatQ7baQaUQ4v3sJhchvFJnsKSiY3A5i18NLeM9QcXQ7ctKqX2EekunrNGJhGhztaSkLLnmhBBaWf"
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
