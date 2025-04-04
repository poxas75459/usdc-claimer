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
    "6KNcQbPTbxftTm5CWjeJoNtK1FNCSaDnqhLit4wHcw1HU7z9TtJUWCqJKTe8dFnqwTGACuPMB5CgaAHptDaKHX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49jNqLi1MUCFUisGHrAMTQSi59t3SYgVuovoYYzoRdxD8EGnatsJBDWXuZVALT3Hg9s3pMT1Hb2CSCsdWBoJxgQD",
  "key1": "2ws6nhtsKa8W5oSAyqkD3dRq3NGs1mLW5KFGYkMWA5WgvG47Lq5U2xFoaZWSCuS11JWfjqyNJFKX5woo9k57abLx",
  "key2": "45ZR5jntRXRZwRb6LuEYjMgXSnaj5gt6VYeeYFnFLSwcZs4EjQE6oUsJVxkYanZiDGT4Mia8zUg1XPgThDN7Z4HD",
  "key3": "2MDL3mzffjpRn4kSLQwYuih5RS5WBShBSzLYBG1uCbaGsUBnXsKXR6GhWKGL7inP7SukhRRiRBrwv1odUPekDPoB",
  "key4": "bi7JjFfnEiURS1F5rrd3TxFiFFtp6DEHbAhRPo4EPxzX7VFpZRRnP966ZVVodryvZVq57e5PPZdMpha4qNEcpND",
  "key5": "4TXV3u7XKWCwfWixEBYQ9AdJpg8g5f8ZzgvSaHaGuwmenQ6842n9CDWauMUAb3uR1E9rxiosUqP9st5mb6VuA89K",
  "key6": "chv42M6yxWhGKbJQApPHJLMajnwrmA8Rkazp38pR112FH2ZYMdcnUxatCqLqNWQhVvMcqRzAj9tDVRwvrKnpusa",
  "key7": "2ckaWuJfWTbEu6Z1qg4CWP8EXFdhmYwN1nDqk27sEqyshVSQxp2cPg9dKT96pwyeDtYE53rqUG96auhD5NcovRDz",
  "key8": "4Wzt7NbGAmw9XcpVEncCMQ7W3BFKfQy4nEzQ9dscdXKenDvMWMbkqpNRrxfFzi2RFur9fjnQGMmvb8SN5ogH6CSg",
  "key9": "36Q54W8exNGHtNCH1D13DaxG9fmFTSmfqao7KsW3m8YAd56QEk6PCC2JjP8yy6Ls1LZVfAS4T2RNaoNHjKfJnCDb",
  "key10": "5fi1bxUbgXFWQiufdDThmtu2PgVTiPEJdTtgiRSM4xLs6JRK9tSfyKQZZJM5hNfU4TRhRbqdBj84A1LWAYtDo4oc",
  "key11": "5nzcq82HNKtsFFqM5dwh6cXruN253opiBKJkNAXz8qTSuC7E5cjCqQu1MYqVxX4StwxzBGqEjz44xf5kYDuL67Kv",
  "key12": "3LN8nBr4Mgx8uJPQ7N4cUxod4yGsD4hG4wB8haBFS3XmRNDYoG2G4mcS24iz8x3aXuG7h5FZ9BMhf4AqFse6QgKN",
  "key13": "StWmV3noF5uecsdRYvBxGz5ukzHUD3hebS2QLbKscEw4HJgYFMP9es6TSkcun9pEnTAJjyQs4nxdBpGKfC2Q3eu",
  "key14": "4rceqsAK1LLJ3UukpwZn918VQ4n6dDXHX8GtV9vww88LqCmWps2PuvrjB9z4miyGc5RPJhepNgZZtUUEbchsYZTC",
  "key15": "MXPiqrxrEQgRCaxrhKrLHgurXsK72ChKaXNdtJFtDGkdeLWJXCnMPGnRdgmoZwxgVxUSEwQAgAzdTfrLwUNR4jF",
  "key16": "UTKR5e7K8iGiMZZrJ2gQ4CeDMDXMSfMekygC32RatohCbf8itiSEUEYU9pgkZWzagBXJp7CciokMt9GLQYWAqmn",
  "key17": "4zHRLn8ab4zLbDBWsDNd61F67MJBudk2Fpq3Dx5fWJVBfJWhMPy5TL5gTfqf1n8HtjZ8nkxNPPhTnov3u3ZuGWpF",
  "key18": "3PQ8gSNAy9YtBWyvhnRLtDXraWMDgjF6WdHwkvFdYYgvXA4CgvbaiAL9AD1SqyhBDFNsnPvu3pQv18TE6rU2jwZA",
  "key19": "5ESXXeFw2xf3yPF4SxqvC9TMz8c7Tim456md9kU3rMQhPQdqQ8NqNRK3KS81GiLvuHVqvDtYAKWhdhSRDtauaMZW",
  "key20": "3fgiHGbyFV18tZ3MqPNCLKw5cWVMS47oNs1okS8d4CDWvD8aM4LW159PMHqL4u4L3Z7uie6qjAqSd9jPi1r5kK83",
  "key21": "3xMC1WcSmXnzJxHvDx7fGytkpvvUDudJ7B6MGzeDotyL7c2AtyX6vGzSJhh1oKA4DmMF1C1eNzJKXHdTeBu1fuUE",
  "key22": "4CsDmv9y5GZVydKd5chSteUnkmk41jLmL2TN9uRSjtRdmfApv7KabF6t9pwZb1oQDUdqPG43LrpqicY9y8gWmmWC",
  "key23": "5ASEELdL63ujc5M1m58zXYsPVwRPHgdB2Zm78FFaja84uAXfUQY817PLb15SNRLpKLHG8kAy4NTA7FskSrPvcJoZ",
  "key24": "4YpkSx4UAFkfD83X9RwPne1Z4yPVeckQCHj2XFoXBHFVfKENKa7oK6r3jqjxeUzkhBYC4XHrUSf6JBa6RHR75xFv",
  "key25": "5DkkigkA9CSpZ5AvVtMWdvczfyHm1NGcg4Ss22vrHkoLRgGJdFP2jVGJSY9Dh8FBTufqo9xmSi5N8prRFsj3rR3X",
  "key26": "37QQtz9D8AtgK2V6mLFTsPgrvgTsLMDJ6ZPc8Rdux4AtuPHYtibdnZLHmAGmJL3VFj9wMfbgYgB21gGPzmxTJ9ax",
  "key27": "5rmucTGSD9GJZTMC2atP1Sdoqk53qLax3Y483iRRsJdVShfn8ARSJ3ZzeMJiCnCpoJA39vLMw7agefLZkHiuMFm9",
  "key28": "gXEqXL6kCjsi6pgAjmyrLLNKTYNn48dPCaLbfCNoVN5uPmDhbFZu93XQUbaTJGcR7cq2bRKEEVdJrert3uCihhe",
  "key29": "3FVBxXMG2jkYLkcqGqNR1BEekajDSg8JGvbvmWYXarq75yMhcQVabYw9DFhjLXkWy2PDZW3Af3iCWEgQRap1hkqG",
  "key30": "42ik7tMAzu1DNEFLgMxu2NhvLrpB3yXPaF5hJuyUkcdPwey9AL9y4xqF4PTXDNLMPevMD8HTsUzjbjR6J2C2f41x",
  "key31": "5Uiaz3mFMjCapkEc8RNWSMYGRNENN96jYLs6SHTZXXr9v6ndqBPANh4dYFrhdLVgoz9i7dKE7FYno7HLNLVbRFCS",
  "key32": "eHgcxCByVTdmNvavNdCPxnKfqQui35i1QdGbBXGLMS1CfrumiL3AkMWwehDoNg7XZTjdeZL3s8XB98BfaZMF79V",
  "key33": "4tC31FRn7ovdHtouSSrgPqkhfpGj8sGXbWLTAxsuFBr86fnyTBJJj8Jh4VMvo4kXYvJHgTVWokuEXi2Dz1FXzRJg",
  "key34": "aTdCdMWwUjM6y4k1wf9EqtuGHfZBtGX8r3qk8qwin1sSQm2MrE5qSewexV8LNNdwdbiREa5VpdXnf4iYbvCKayV",
  "key35": "3cejb4oNVR2eXXcjqSrYvvwvKgVxtVCM3KTq5F4eziNaDquNu3dS6BkxzAzp7zwsTrsGaqSE5YoeVu9YhdvnN5j8",
  "key36": "5jJDLTaF6N7FYrgsCm7cW3WmobAWK2SjeCxSZ6S9gAunKs47T3PEgLadUzRURSDQALL4adnd96To3EMsXh9ojguB",
  "key37": "4XaKTJzFxsULVxdzBa8gJ4pc5Rd1q2Hs26oqJCDguY2XV3c2iRqXAwYFFEy4HjZRN3U1dRZ2ueAHptf6UBCYQqbT",
  "key38": "S1u44LLhBRviixRwVzPt5ZrNwaqsQNbxZkJDsSu8tEu1CqXUUBAc8tC1z8rJQwLxvPRPnMtnoqdGjrNUkKbE6du",
  "key39": "5NQoZpnK94js9ZT5Cn9yTjP6yPTytyTapmJextszxoKQkWJ2wwkuf8qjbnpEdyDP1YhU2Pqiw5Kxno5dau2gwizC",
  "key40": "tiwUMekgaoG1Rh9Hx1k4WKzm6Yp7KgmcdWxQtgMgbEeRaguPbSyUXiM1e5EJ8Doh3qFqqQ3uoNjauFmr932MELc",
  "key41": "3jZeucY3a78Sis3WkSjM7pXsCmuKWegnS2VfGg6cGKUgRkApqAw3wk9C8kjSYXckT1CY39jL26i6RfZZFSUnCGqX",
  "key42": "49A1SqWrV1QZPLYnobY5cVjC9zRMN7VToXFqgRY5XjaaLzUedw9dgcJpMswhSgktbsgmmzTjWNFEbfrjZmpta1xZ",
  "key43": "2HHVtCaU6GijKR4DCLPsg2PMaKN25uJcqcqcxjCtHHcb7KkmuCwc79nFrwi3BTHKbdZbACnGQoMUaUQoha3qn9Ur",
  "key44": "2jVtRMbXLwPLBWLLkCgYPXqALAHRE21bjZ5D3R6ZwRaZrnXnsgGahKkt5XJhk7j5HUzh4fiWHxLbGRNG1v6N1Nev",
  "key45": "2KjovBPYJ1DskroVkuvHGR9Jz13nTHRSK4vsTjEcfoL6h7iHLLSJK4LYpy2zTRxp4R1aNXb8bupbBvNn4y5nQuXP",
  "key46": "gp7A4KwELQGkmUKZTipe9qZqho2nRdUSzVM8kqsr4ar5CLAfxHj1Ndfs5uX5ZmzFxYKDQukEFsojKofU65z2T8y",
  "key47": "2iMRxWHWiKWG3fLH3pqLgZGYSr9oCHy6McZcqTYiSoiAgtrNh3SzDm138PkjME9bcY3FN6xygdGv28EUbjZDsiZo"
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
