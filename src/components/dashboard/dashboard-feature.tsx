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
    "3dRKgPhqs9LkZM2ZygtEGYUw8EKTFxdYLEEevtRUky89asa3uvAU95xJFmTr5D4AB9pD27X3G4EdGu5bEmRjxBDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "463wVNYbBR4MznuXCNEY1Ujy6oeWm5WiDHf8YZtyuZnDcNFsT2irkCsxAC1iazrvzLnFee5bY37A3wjomAFo2eVM",
  "key1": "4ZqDZh1JfwahiKA1KKPXnuhiXsLtfZBCLQUTJBzjeWowU68sRMVJc5PD6FcNin2JLThed6sg29pKr9tZFD1iNMkA",
  "key2": "2ppKdecxiJqdtzruv87qU5ahqkvbHRJPUcstqRG8wdBq8qMnEg6RUuQHF3u84L9GwzZuST4SEB8Gj2hUpXKepy8t",
  "key3": "5GRaD7hja8NbobGxoZPk6YwFnWVo9tNRRaQfNkgdTDN8USbUG83CkvYV2HRK4JHH7TT2GyyAg2PQX9UrRxPxJpys",
  "key4": "7XoexcriYRvr8D2y16Bq8qhGDovhWVUWCK4jfVdSKFETz6DBaaUuAoFtD5fHbXcWC9MXg13Ej3bHtLCkmBYUsfn",
  "key5": "5Fn6D4F8GhtJrz8FbGdzPNHSWQ2fyNUD1Adxmq7b37KkvLUtrvphBoewRjy4vN6iS1idpz7dTTnHteVhVddf9fzZ",
  "key6": "4eTweBKcPDpfxbBqmPYsMqvqSm6ixzDy2gkW9BPEoWArHX4FHyzEQP8CUEG63WXEcvguwLFJTZaAAqXrSbVz5DGz",
  "key7": "jokydokMiRWVGdMM29qAXdvZtuDWUgn93LcVMjWDmUBjKBMoMoPTt14Hq8n7hVYvDsqrQfwFcpYY2yrzHAi9toR",
  "key8": "3JrdcVePRgMRdYhbBVLzZdn2pfZpobQyUmzbhkuvn5VCDwd4ti9nS2SZ8NqSrM2CtR73vJzbcjgsUaFzeZKMLkJh",
  "key9": "dGS4FjiouP6B9raMXacGbaNHAzoq2aYX7YxiLVrdy5s69gmxbnpSFhhb4SDQriig9CWjEwGGpEmKHhMFqp7Vyw3",
  "key10": "2xeHvdpDkazWvm8o9NMTLNKYtsUb3HHLhKAYDLpqbfn1AqYudp7waMJQpxnanPbzoNMMkVLrCLDAThCTGCnPYRe",
  "key11": "3xRJUGVL79wVL5rB5bsSxCc5gDRhmXjQjs3duCBXRJJReFJRCoWrV1MaX6YQ7oCjKgBwrw29dUJNvPyRrMcAPdaU",
  "key12": "33tfVTzW1VLubAhtkVtz2T6ZSorLjKvSnguPpF63QHoDmQF3J6x2N8wHmpuQWy8D2E5WCvUgFTmk7XNWEse9QhB",
  "key13": "3m48a2oooSXxWthud7pDAeJFmU8qrH9XZXY1AdsxhwqBeEZr8d3Wb79W46RRoQAtZp5XMZtbVUaAHTHTXuMCnnvh",
  "key14": "kRm44KdDe9aqFzee3eEK91DDnVV6aNJGQ1suKRZM682FmoyghXBvWQWepMP1EUgop8h2R4K4AudpX8tdwgqY21i",
  "key15": "4EfGb4N4muiuvHE2b8ANqXYRHkwfKe9PXnYtrovcgV5gm7jq1pWYnQDAZVXekrdMcawwxrBhwEbGvSxYKtrWERu6",
  "key16": "2L6NASBgQS9mczLF1sxgYEqP1ZWYZjmYU35FLN5UYNnUYC8zdGt9RuKD7onkCbKVwHzKd4MSSpLovpJkH7odmV32",
  "key17": "DLCRSWAGb7DnPM8LeWKfXX8pF4JEwYJP7TPF8Xdv2QvLhPsDEua5qTrkjJzFdCBZ7xkqDTzFj5Eqi3RuZr1UQWH",
  "key18": "4GzNR7XGPFdKCUAokr8vraEj4SXH5HLa83wJoitaSQ8WZ2onF2vbRhBrNWhMVnFjGAAToA1DXSF1CrAPv42Ks8em",
  "key19": "3XVhf2CGEtzmiKpYRKHYG7oUuMULCRN8gxNkbpG7MkzyqqNCaRhG43LJTPMoVDbjhTy4YTzacWSFiaNj1AyAAwWy",
  "key20": "51TqFs4mFghNfhgLgDRw5JbFbB8vQbRw8Qgzr4PMvfGubtRH2YJBQPDDQvHNNFw4r4ZcWT5QgvFTkTzgDXgVyE6",
  "key21": "52tc5MWkobGcEAZvCzWqyVEyckA5Xctegv1F86UUGSUSVrEWhsUsoj9KPScKVW7yqo9dcM5ibJHMQW1CXF1QBds2",
  "key22": "451wQPoUHjzMs7kcKPJwp7Jfu3gUG5ryvujgPuodXS5DSctdcHes8Zq4obKVyzCeiKWP2K9TicALTCgzKasy1d28",
  "key23": "5WnFL53BdGg3HEzJtG7fUUUDLFmNVaNvJVAnZpTgSsYX2BwrTqNJqKW4qUx958A7xino5N86jnVNbVLWCqE4exGU",
  "key24": "5nfsoJ78r9tADw2jP7pwKk78AzvGUqkiCLB2zFvJzRfzpFCRKcg7Mj2q6i7q88v7RERzrTnZk89sj991SKFACcU2",
  "key25": "5CX7PDk6DbqGv6nvFbgDyHLkcefYd1VjiiLXgwxKYg84U3ktC2CQWqSveTYebSoJhq8Y4NF8HbKZyoPUhsouZpdp",
  "key26": "3UMpu5J4nHN9EevhE1x1SYKrEN7fQgHcu8t7VYdZ4jyS7RwVs4KMoz3ziKUbFC1U6qiiYMqvatHSgkvYpfwnQAHT",
  "key27": "5e5HXBhjf2CKBEu5UbcCFHBeygfHRyTajhQnd1rQYugnbxEQwrwgbnySGGiLTk3uSdmpdroQzxELweFFz5dsA2dy"
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
