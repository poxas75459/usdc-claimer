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
    "26LTJLRSfFUXvV9YzonmwK9AumS4enYG21E7XDgerqQeotuYwvGEiXAHtNXHyawV4mtsMPf1bwKqTtpbUSN8s2rF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FQzcs5zSE6NgGxAZ7U7HxrT8mox5fsViKugQdzFo6m1mytDycJJqT2TaeaTim3AKrHwnhBX4obixZSFXFV79U2f",
  "key1": "5NG6iUeqvMR1iCsYVsgHVDoUjGUa55ppqFMVvV9Ljusj3DZZLniYfoXvUKQJzGPCsb1TzA55X2dFivxGPk1bk4Mx",
  "key2": "3aQ5zEoi3Y4iFPSNX9fK7BP3Rwm61CTneEhi8AtwrvdZ8NkS1Z6Xoxe2oGZL4LuBhZQoLZTD72NEtjQYMPiLEtmt",
  "key3": "ttidzkAaz5HpPhntDcMz5qcka32UXUxzFUGQGWUnvJc2ag9soT9YSqL2z6iijGGxWLcgwtoEtam1tfbJG2h8hmH",
  "key4": "3AiLFQoPMFPgQXptUa5zLoAeJeA92svhJkyN6iHebb42sK4C4acf8enH2sUrVLvSFbvkPQsp5ABCaeVgs2UV6EJr",
  "key5": "2EcLWGziPx8iGK39U78oKEWtjRt9Cz69asT47V8i4Pf8VMTJqW8UgHfvwJhXCro1tH1mhsxqz1XN6QDnyEqmZA1w",
  "key6": "64j4Wj7mCf9vxxZ2radqnHd5C37rfmWRqkdZh1CbTJ1UELwYTPQ8QMrFGsHUm7Dfa9GXzUpiJkrJ2VJPZBmvLjth",
  "key7": "21vnZ1cDhPRB78n6N4z7D5bskHawcho7UEWmiDvuQzQbTM12pGGm7QMUm7v9V2PPoS2YXg8hiyn1tJeLHT7aoCB3",
  "key8": "NM5zWLad2RJMSxqFHG2ZCjLFY53dBeF6hZtFPMwxkQUQUtHpHX7XZW1Ynf2Qjm5Dowq7RU289613Sd39v2KfNti",
  "key9": "32qtnwAf8ndoeKELkCv2iK7BojvUqRYqmrn1Lwsj9M6RbQSxLtHE9piq5Bv2fqwPLiyzavVryJ4qFiRFv1tkJkHV",
  "key10": "8Ve3YcCqHNyyp4pbMqFziWaRzBCoPqMA5mWDNuuFoVjBv6kLSHjSuLBeSpZT9zp2q63yH35X5JgogxHJ5oFQ9Bf",
  "key11": "2amDTFfiN6yiykuBNb5rBrjXSP7vL4QqYikZjVsZkQGXGrJrFaNzhCh38UTPcphJpYgCWEf24rTFRqxQhs92PQMz",
  "key12": "5sD4o5gSNoUoobzZPpF9yv6LpQ2veqqArRHtG2zRjKA9NfZ2fNuqzB123hD1GAAogxzgxPgtua3ae7zUFUkgTfv2",
  "key13": "39dja3YqnZTWFQcMG7DLY1aaFZRYLAGsiqGGWZRV1BS1N4ktbCrA51pZxR7rRN5yWeuUNj4JcsuRN3J98gCL1xwd",
  "key14": "3obLwwx6nGstmQAjMrQKL8rcrRhDa6AC8qvRinrws5go5tkFjQeBy34X4MbUFEqWoi2VZZ2G4jtvdQ3ynjN28jLT",
  "key15": "2yE4FgHgdXmwg5eVtYmNwWQAuhYgkRorRipmk1SiXgpZ6KZyboxMNjNWmetU5oUfX4BW8Xqu8mpL47ZoRPdqhx3J",
  "key16": "eTZpYZacB5PG9yzHKMiAykhCLs968DPiN3TmKE2ZfGLfMUi53qUafxpoYGU3coi534yg7AY4EWCjMXBqXu8pDpj",
  "key17": "3zRmLtqQG8RxXoH6L3Nb9pzGXXU8QXLDhTMQ3GpXwwYvW79EJf6cMhNhcDVUKZxFUe3CsVowYAathbVdZkCncQz4",
  "key18": "m5z4cbbdKsvJ2vaadRUko3s6ZyAqH3F5aBN64TNb9k11j7Qja69Zvm43XduYUJyjZQELtNDYynqLTMGpM9fxM2j",
  "key19": "5Lv9YDtoukoYsQDsy1NwMrcVdb2GN194kCkM76F8m6JtsufWmWyqHS4ZZezYmC3CdD7FjrgehuQabsuZ1QoutkWR",
  "key20": "3g8hhS6LZmT6Q3xDQPjL1m15AhSGd8LSSMSTqgRMVVDHcWUfys9iiYYVJXf2duBUYJ3BoyCqdiCrBbLX8w9VTPfp",
  "key21": "5MeUy9z5Yjsh6dPpM8U1bX63hbXaeJMcsBBNKeP5hVSe5vf8qDzjkPijQDb3yAzVMT4ykUbx9aP92hBYKbhEGASs",
  "key22": "2SNTz51JQLUbtgBk2LFVopfRC2YChZVCun5L4EhLfbZRkpevtoqc1YNn6rLJmdy9rE7uNFJ7gpyf6CcK8ugzLkGr",
  "key23": "2Kvf5v4Sec3YG4k7eLrrnmnEftdyHpfp56QnkJt9z1fBWii8cuFcoiieiomy9BwA2QZmb1ZKAm8qcw9ULCk7sUHU",
  "key24": "2nXC3HprtSNAjfabV8Yc2jrZGr1uaN5FxdJPovSYq4QpT2DuWRZYfoShvc5RDiQnVaVaF22uGcEZRdnxDCd1uQ6B",
  "key25": "3mD6VTFexA1dLTfXU8kosYDFBqUHfYj88wXAiRyH3LZFVtBFRj1KtgPx2gpADt86tWFHnGbRoxhjFyuy3Bjm7vT9",
  "key26": "5sbhkbtBtPyKaT4uJkDgTcZmSCkXF92ZfU33kxeXWcGQkRQk1s168P5bLqSyzM3QZsgcpX8dCkgW5FgUHSaac1kp",
  "key27": "PN3kZMazaFPb5MrXTyE8pgVs2LhHFVkJiszX6LngqUdcngd7MwmUYfmUku6JiBFchnYqkdRY6Ey7LBaz14St2Ly",
  "key28": "DDSXzcr4LcdZtVG5P9UhAD2hW5A7Xy7HxbSig9z8W3rBF7NZfe7ZnDdxinxoxwnP5TePr4NPGxef7qgxWmxvMwZ",
  "key29": "2FpVMW8bQPzkKtQeSnYu1egtqWKepq7DL76WrG19aL5VePJsveJZwk4S3AFULU7z71b7C8GRjZA7vHL6KvLsJPuy",
  "key30": "ANZKUCDhztkG5bqdpA11FtmR3ogjLWo75ovCMnoEfNin1o3UnAo4pMDZY4yct5o6CnD8cWKhxCbFzDPnkEhzoBH",
  "key31": "4w41QVjwGGNtkq71VkTJ2BRwTkptNwRQjmNrTb8DEXYLP2XYfJPo2ykDLkiZKZMgmFndyUHVNzheKeEgc9iHrR1d",
  "key32": "yon2GEJxHjDzbPwgcPMhYRkboD8nyEWerpQbQ1xZkDAPKLaHQM7HSkUWogPCE6HJ79NGvR7WpvuV5LWvdL23iE6",
  "key33": "4crpw4jqBqA6b5Q25Gce3kHi7PcyYXRzUdGtob8jqKkRDrEetnPiseVZfGN1RwNnPNQ8oKBVq1BwTkLMR1Qfxmdb",
  "key34": "4YUiJxVj7vi8qZw9Cwh9EexPLMdz19swPw8T4WjE3Z9p3hbT5oKid3UA5nWpWYRXe8VVjDPEDD2rBrDSrZAkmACb",
  "key35": "5htZMyUG6XWghywSh3AW9BtB3x7NkeoLvKsdUkwz5VtxJ1HTT3qfL3FB6mDfmwrP9skRZyoaJ1H9Dd7H9DWRYF7e",
  "key36": "5pVqToPVZ34Yb5pwbdwqMEc4CYJb2bwtTAb7bokvCDgg5vMjx9URc6JtqPBcqQBiDq1Dsd7GeY2LtoK4znRviqcS",
  "key37": "565aVoSaaHhi1NyqV11CyeGR5WetHYZvnTtpEdjJLCPDUzkRrnfa5ukpiQ4xG6d7nJRkM1eM8mswWg86J4quvt8B",
  "key38": "5t8RSu6WeaYhAFudamWjZj2ctquFDxGt6GtEYGw1sGmjLLzNU32QS9YGw6wKBaCFSg7kb5fZHxJKeLXLuf9vVTnE",
  "key39": "3cB7v169yyefZ8Dwb9QpuxedYwjBXodFETSfHMby8rFF4eSdGiN4xJowDD1YuA1c9kDFd63tQ5eaDTTYNgfyGiXN",
  "key40": "4Pay14Y4fyBwj3ngXTBGJgRQdsqSCiWKpnDQWAnCwYBNjGSU5ettB9uww4zLsiqY6HCBniKxqTGdJHyYtDz8dtNu",
  "key41": "5JMBx4ENyGd88HLYxnJsR4Jn7ssGHZCJ1XEfyDCvea46SfcR9TLX2r5ZVo8KpSBgeAAheTNECCn2BbSQUC3tmTjq",
  "key42": "5fAzHcW5eLNJKwuKJJ3YxXgNw35o9LjN3xuiRDNzpNXnfBbegYawk8suoBDawVeu53H8oTGwfKXAcknLmvnjdPAS",
  "key43": "3sNYSvBwXGvfuWC4S6cr1Qf3YT1MEBmJFkXkJWJGtWTt37Z6YTjQ5wWfDUzBVmL959dfDXiaxrPzkigY77qEpEBo",
  "key44": "3CyRkcvA6jpY3HbWMhqZifQBjx6bTSZJeB8K4ugK7uDUTJCtqrRtN79mur4FhzmQxcpcq5XdAfS6aQNHBHX2hrii",
  "key45": "5chZBXRWfyfWu89TmuLFMgUBGZ6EABhdtpcwqnnLZ3otymAXf2t1DE5Zhe5a8BpU6RryrEmrtkxCM4qCSxdp3jfQ",
  "key46": "PurGcNK7xESgADbi8df9d1E75yeq3dsTLhStCCHPqUPDVsnU3KKuBpySKKyouTW69MJ9tJUkXSEYYNM8dXNBkmi"
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
