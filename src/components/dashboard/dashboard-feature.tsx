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
    "57WeAQN6cK9sYwQvoa6Ns3tpA9b9EaCAXTyhDU84pqv5gsVAYi82xmfL24qWsgwMLcNaYfFQq9f2gZ5azjvvifVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mkwuc67WCaNwvq9rjSSaQkfz2FLjVBH6AurhVH7y2EZpDgkv9SSdif5B2XMYv2mrh8cESLADbuAN4TaAkpaTR2v",
  "key1": "2uxA2wmvMsNxqMHYqoYnAUns9GudHyXhMBiReWdXf3ZfzXxKzt38L6u2GvKyyWd6VY9cq58evBrom7PeCBD3wvui",
  "key2": "3qnneyhUn88b7a4KjittfByLunE9AkkKND8PchJnZaLZHDTCMrGyDmMWgZXS5CAPWFCDNDnV5KQgV6TheUhEJEiL",
  "key3": "uueFxEXi5X5Ec6hZXT2FZ9asSAjRsGyxGa64omoPvYTpvZEpdeR9bNRzS8nSaJbjzBYvnU7hrRZEYrXERHdRTXf",
  "key4": "7EEA3jUhoP1PaMa1ihhfaEwNwoYTtaRXpibfpnUHxjeaAm7DodpXKBqTyt4tkRaDWe8yjPPGYtk2y1iWBMWf1xH",
  "key5": "2WxVKxPdZmWn4V78LgpF3G7M2Db7dn4tFde91xzKV1WEArempsBYLXuMfk1QYCcxd6GeaAfAgV918Auc1TZwxKsd",
  "key6": "129ijbDr7su1vjgAdeyh5ss3jqoYuxgK5GiSJzACX23oCbBtCmnSz7C9MvwUmVNsrb7Wft5Bi4nTq51MoxNZNKdj",
  "key7": "woWQ8D3cbkiD5vrcii27bVfnWwVCLe6CH15WZfjmaGVftJnnhmXGbJwNKqL9yboibqzuQ6YhuG65DSu83zV9Nwf",
  "key8": "5LcbggKLVE2AhmT4s3Ns1ofkisCMEide5YpRNm5AfsAQbjLfaLr9QTqUGpavkrLibLLJf6nST1ciHSkQByXzrczt",
  "key9": "4PPXcHJCbj8R9nRzonrPPA345Ur5fvDD5GRoVgwRoR11Y4eQw7BUC6HVeXsXjPPg9FgTNXSSCrTMcWybe3kFY314",
  "key10": "3fEHpUxuT44DBRzhDdxkeTTqaYaQJirDotzj8Ez7baTLAh9zrgVi4cLvp3z8edqjEHTkmpCzMbFL5noXnwsqHtzd",
  "key11": "4BxXXjaHWANojUzc31gEGXDq2e7Tx3ZUKu8bAcmFDAqvpHKMHsycjCDEc1rneKF1RivgHRFtvSHnGkVJsaKx6a2b",
  "key12": "5up8yWgBMxVdYdQmxXb6ckQ6XdPRQEh5Tu47aP1bWuZJR6veRdiaw8uJmRzvhqgsuECFQFPaBjT9e9cdig4prP4H",
  "key13": "2HAkW1xrbviDgBooKCYQDqmE3mj7iqAJt1JhapwCDcWAEsB53BTpgfB8DnPRDiGbB3zFx2okdDXa2KrYMEkHMdBa",
  "key14": "4ySDPZLg2itYPNPV8yyBvDGneNqvR4LwMSAZjtUmf2BJdsvDevXzPbwwnnpyEemBduHVTJuNuGyD9p2gqy88ckBp",
  "key15": "3icApvMwM2XvmrZ4o9hfGknSyH6Vg8EJ9Vh3UYGQhKMkGiv7PMqArzLmeGvdo4twzauSFgm6KJCb63MY75omkys7",
  "key16": "4a22AP6hU4DsTv3zcYLSm9hKHsZw2UvYkDgVV3QrFnq4eM1T6xeYi2txsJUvayJykipkoWLF8UjU9KRCy6rgMQJt",
  "key17": "2pdx38Vb9joseNeB1Nhi5sSHcg6WE5cfGK572qznTts9W6KHkWNR25C1Jnz8J4CVaoGNrJb6vW4MN9RFact4Zh62",
  "key18": "65J4SVZ7WQ8st6rfrBf7caTN7c18Q3tWQcsBKeN9DYePoBU2XhTFB5FbHbgG5HkexKuYoMscHhMFJN6dtUnPMKsV",
  "key19": "YBGHNmbtZWrokSyLNEjtDi1txC7PQyhDb1bSGsS2imh3XPTV29uUX1GQHwnb19WBkLV9i2AKpJtnVuh6yP2UPye",
  "key20": "4fUtZAnC7cE1fuQ2S3AAmmzV2MU21yF9U7cybBhNba2wmnMCsLcquW3dYDM3eyjMZE95LN7jBXc5hcyouLkegTK9",
  "key21": "Mh8zv4G4Y4gQfffhM5nAB4i2mbEquWKexb4yYJGeSHoH4hBpX5HYzHaP9bWd1sfEfSYdoBZczTiwcCQpLfwkDyt",
  "key22": "yaq9xTpwwJZUvQmLEuBvsxKGMN3CSAXz9nxJnqh9EMwc5W2hC4CHyCKWsRHPSjU9oyXRCWFvuLm5T31fadZn27v",
  "key23": "3zscKm9n2nvxRemkhQYZPYbmbtJv9EK8UF7zKzYJr6RKQtz3QSRuymLCCB3MKxmgdx4BpnYkjQ1mwYVxKaxzNuxM",
  "key24": "5idzCS6x45xGgJj1ricTTpoSmmzxxo9G1kdPdhAHorPanRKhcC1YZoTMZLaHR6MBumodyoEAY3dAN8qsXZx55n2D",
  "key25": "3zhaq8ZcPfi6U8SFMVFyGNXkU6eACtnpH9aEVYrNCwfJ5XHsFRsLdh7TwAKzo6fgf6hY93koHvU6DNnp1U9Lbn5w",
  "key26": "4QXgDj4ci9v61gPeky1oLffRTADtC9JPhgKc9qLLxifkB3HonaTYLeHgPpx546C9ZWnaN7pARDwMAgEoSBG3p1Gc",
  "key27": "41LF9SZzxupbFQxE9Mz5XLTJ3gjwWjCMxUJuyvtkkTY91BQBiZQNyhYNeg7MJq4TNkN4GpJKEvkhfRieT9W2wrvU",
  "key28": "c8yMFWbM56XkkGvunQCpenCj6ZAdteAe4fDrNqke5Msz6dgZ4N5vB1pcb3aqFKHeWGxhqChHe3UG8Vua5wrPwJY",
  "key29": "3wWP1Vx8qUC66xHdh8SRKDdTzsoHyYsK6Dn42pgtCYuDm39fGZF2SH7oo5wZNGCgW74S18TWfLfQZEmDVLr7ANhm",
  "key30": "4caV9cVgqN4V5nTRGRspBPPvtwFsf9Qwjyu3hbNZWjo46dmP9foLXkEEjjVomYK9rppaFihAnZni4kwuKoCXyN8U",
  "key31": "2qtt73seVqcGSPauvQH8vgjJa4BvDzfHUCLLSSeZ1MAjMHnEqefDYLQPF6xxT4JZGdcWBucg9rbMeY4rri4Mpq8f",
  "key32": "3WQUSxYZZB2XdakWE4Nv3cN4eEqztt8us5f9ooCc5DZ1pkhZUHBzoPjSzimyaZXyh31d8DGjBdJyL8UmcP28fqez",
  "key33": "2iU1J5fYhRLTAzWcZCE8LF5ABeXD2QjRWWjrFtrqq5y7L5jg9A4C2boP7pzbYV35KCgjZ1s7Z6TDGNDNCSs72Jmh",
  "key34": "5DdZwDg5h6BFfVg8VwCwjFqAHaX2WXfWHGDYjxBeJuyzwerDYbwMwTDU5G45ZAtUoNT24DKk9jnKwgiywqs3LTjr"
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
