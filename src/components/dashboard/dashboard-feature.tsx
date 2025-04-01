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
    "yp7YrsFnMhiZc574uWDzYiLKTeqvVnzTX4zTW6mdzeeFFBQSntKGNa4bpwRQNCx8zp3J4pRfr3AWnaB9At1ARmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AdyAWheZARHj1teHtULaEkaFWr1L68UaRwuj5xJhrNHbA9RwgktdgonBQvJxM4fNbmpVJH9Tk9tXj24tXCBmL8W",
  "key1": "2B6wPiSSL3CuzihiBgKsnxZ3dMtGKV882GhYQZDjBWey5D3TbEPkTxDuSzesSjxx8uvWADpvPnMukeAhWQatoG2R",
  "key2": "2Kb1HQBgGhNMmNYmajx13Ma5Gz4rZvkP9i49Q1pb8j6ungN14uttQ2RbW57oT17h13iZTi8EpppJmQU6ntXhzmQi",
  "key3": "2YrHAzx9rG5nw56iGySXWKV5tuBDPRiGfjpSgcT1bu2ooSktFQznQ3feuqsze2ucuBkJebaNeqexsBmDU3HsAXda",
  "key4": "2ZkjR9JuE95d15jDxPNdeLPgQjGtqtVpiFWVQvKVgWZoDNKqYnHmm7jSYPwsusdRnTNEcenLhwDnnKkNd5jY6nx3",
  "key5": "kZfMmJA6wgPcvLRxUjNLLZpa7UD93WA8UALLnHTBuMZ5VHmhKs1Ur6KSmoNVWSiVKUzTYAPpLg9XFYR7wiR27kd",
  "key6": "2wzhknbHAcgcnF729vx8m1P45kczCgJyvkUij4TUp4DVQcTbDvxrWmtazyMyUgvqDr7oXAS8D2piX2rKoZHJMC4H",
  "key7": "St4VVzcFHG46ov3FRGsv7gtwUL5Uk67GgrGzjfjF7451UGbbwdaC9MpoPRWqMKEfTPQkkMFMRfmjEbwSTz2XnwN",
  "key8": "3r1Eub6BNj2PKSStYTQdmK8BjgSssaY6YytDBjvsKAY2CU1eYWuusrAXSDkFN5BoeDWrq1LrKqxaJSEsfFkShLXB",
  "key9": "AhSbvVsUvYVSr62BV5Y3yjs4USHNNAvP6kYQyGXw6ciVjEK2eQXuw92CoYoQQEw3tzQA9PRL2HXwgBvm8KjsJfx",
  "key10": "mVC7ccpYeskxj8oRfPTskb8vy6GhQE1R1cs4xy42P6PwzGdjZnDDvDKA2naJ2CmkAPTr71YV9oDfMT1zg1xkryJ",
  "key11": "3v57R8M6542Z7dm9FHfzXHo7Gw17mXZS9UU6FhTRyB9zWaTm7RGYRxeMuYpDxACweUt4ZGQ9JcJLhNCgaf6C4Psv",
  "key12": "63ejnVYPjrNu8AzAZZszASRn79TSo7rvYHcvwGGVVHnJaEaHA1T5M4QVuAZSjaMHnrmSVD9SGAhb6BpC4N8nGNoF",
  "key13": "3weGWtCgniy95UdtWX8zVipe2PodWbUt3toAbQPLBc2fnB8weY6ynH7PrSvS5F67iyg11Ls8tTwg11dL9NixpwDQ",
  "key14": "3Lees18PNgigZzUDMUL68YyiMvSstaKgTDd3UW5XKaiJfMAHixs6d7fJPzjhCpWVFhoNckw68dJDMJwKpeRmUkmo",
  "key15": "3VEA6GTpafxkdGbkFK4mJSvmKrYCt2c556zhiAjLHvPowvagM36yMgX7Vi7HHzw8jZFdzdipXJQPJuVokXeE7YVK",
  "key16": "J3Ekan6H4CA2NztNhpLxPxso8uM9kwt2ZzmvvmLdMHceo5eLMfYErjDvPFgaDuyeRSto96aP7Ww9D1fzbFHNvuJ",
  "key17": "2urEGaxZPDvKEt1RUg2paWUEYz4RqUbaFbBzA83JvLGpdyD42VBzFquF1nFnpZRrQ1ZcwQ2wiceDtyjq7w2TKWeQ",
  "key18": "5tRRYXqcHffiJUATcXSSokUFGwJo7s3DjnqafdR1orw5C2hncMrUSsG6wfrGxprkFb9dpSRPXhMFThMmoWrexxJz",
  "key19": "3kPfgTNCiKkfZUmHjjgE81tA3N7zAx8re5FhoZ2eJyDWifqxRqvdCXNTmyQSL5vqTY6GiSs73FATCduQoyVxjkNm",
  "key20": "3u3HeQMpND6ohHRD3w8um15tvp1LYXET5eZKojocPBoQ23z4wUV5NC12Xr6etQeZFxwJ4jfaxAVBJTUJvYSaZ9yy",
  "key21": "gGbF5wqcDmwa1DDpaMrQS1KN4tycgso2pbQMqz1Z4Wy6bfi1p3AJzjqmC7QDcdghSyRKKUVaN7symicCi7GkGkv",
  "key22": "3qhKmsb6smW4ArHXTWJ3oSzXNuPzqdAEVFTFKDF3qsFghqBDVJyicCFqZj9yeHweWEqzrcc9an6xgzxaG7BKwrYL",
  "key23": "8D5Twd3aYLPjTF1Au3ofY1aWcHzNFTxkjPxHAoi7z6Ra8KGNMBc7PP9rzshG1Yq7qWbrKRHuLebQbpdEY1DaQh2",
  "key24": "2mftEPrXpMWvtiBos84qN8GDxfbfXoqC9UgKsPH9dxSVVT3beuYwiRUokyRnH5VwYC1YKpzFspDnjhVE9PAEsW5E",
  "key25": "gaSJ39K2tFDQDFm17pKUhS5dMie5xtqBuY5Pjpy81QVsKbSS7E5sXhHh8yxz7SDTzGivvLj6NcThkKVwzBDwhkX",
  "key26": "3x8viGwzjh4U7DBJfoQtMaiva7FLeGTiLmX1PTSDXrcvaTNMB15yrCQgPxMLdDkZMG4hNa3miBKrtSnD9h4pZLzo",
  "key27": "3FmV7cXtK9JyfW4pzgWEvaFkBWGNLVmfxe44xCogMYG1HXN7mDSoKRDwbRYgB9g58N5usY5Uz6jcMs9PDkbiQCNK",
  "key28": "mbTMep82hFJ1NDEdvb8wGz4DpjB8yoRdXv2NQMBhNcp5dYk5wmXQzd89dcjwZQ8VYZLreaD2LQPTwWV7PvkDzNy",
  "key29": "52ciBMHiW4h9EgTQEDLpPmXWWGQsemNHhgNAYeuqRLRySpYHbUcpGpfDWii71uCbPVJsroyWSSkt2txHfvjeSG9u",
  "key30": "HTeWizPFcQWUKkMniT2Zq4bj5GJc3AtM7iPDRSUvwE3Vi4ms71uRoCmYNUT73NMSDkzRTd7mpFMEzRh9cWfCLeR",
  "key31": "64HGyf5SXYGBUWry69mSTjRDW8yf8addd52bMfTSxPgpCQmgMcFyeQAA1BmMZd47jCUh4iGDzZPz4JWDtJsncAgV",
  "key32": "3ZSzYeLGabbr42p84rGEpK9oV9u9Minw1msS6ZtzG19gGrSNHiBLBRQWLnJwHnKudnKf9873FwmJ6xJQzncBfUJh"
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
