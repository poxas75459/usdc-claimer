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
    "5a22bxssmcdbtMqX2hUt8BWarfWJkqWzjn9sxdJhyceLYuYyUQJ3wAHnALUZkrc3C9yoDeCeVarmaSn168MSqiru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yYKm4EPe4inD7qv9rxynUJckoqWXz7WVHMJBYUAuxBy3DET7LHo7Xw535rNGLRV2geveVpREF77mkc1873ah2x3",
  "key1": "5XPWH2jUhyWZwdnPWAcrySnz4mjtEPiGzQw5QysECvCqfdd7ome995aZnVUAwce8GWY4iMfDecafFk8h7a7oVAFk",
  "key2": "q4vWGXS3ZaQWdDDLnzvvAtCrXbpym1tEQExvsY7wLt8x5TEdPQYMj1vmo6P8qjVYGPSYvi9eBQYCfyNwyqpjo1j",
  "key3": "4MutcfyDuaFC2VoPkaEV7Z2S2qV8X7izD8RGKdU9rTdgPC6V9R9APCFCGudaSpqBTjpNjGjFJbPrvCreWriGCeFw",
  "key4": "2hF1Ehdg3mFWfWcNJ4Ku4AmggkVDkiDtWtRm8BQUCQYe35qXM2E1Dm3uhu6vcY1dhcdiESDiV4qsquejGMmbxEnN",
  "key5": "4cXc2vryoHchxUDZKW7idm14Yf2iuHYeyfDDySaW4HoDqd2wdC73ZixT7ToY5A7mT3eqv71ky8uipZPjciRco1cr",
  "key6": "2Dp4kXCBsLZefteq6fZehUx8HPjepKdTxaCNFTF2x4FdnMQW4Dz4jk1nxhJ8XHzs2g3cLmDdmXMas39qtkhyA8Ji",
  "key7": "27p9MTTvgNb4nQ3DLebE8gbDUZrdvouaSXj3PQ9qW28HU5y8xcnF7p5pBn8sRpqvSgcUsBBeVLxZuKs4og4swMak",
  "key8": "sgpkhBmoB3K9zXkbs6K362FKXjnaMfEfyvkREpYH3LKKJrDQfJT3qM6z3jdTezJhX5H4MbF39cmXeaWMY2Q98pv",
  "key9": "3RP4DTJ9cQs9CKVGy6LCxiHdWP9Dur8s57JcxQkvDmvKzYRJ2oux8s34CUcQhatma1UX2ahcFgEiEQBtjUX3ntXf",
  "key10": "4Qs11XHhtNCWXXgisYCG6TFxZVE6TqXY5M6b7j5LS86fBvP95LrMfXHpgi6y25CVurNCBTXrKspPxf4Nwc5c6LAm",
  "key11": "5LP9MXYUXUCxeV3ydaYve6fM9ZGQ5KKooEU2uAqnw3iQ2zusMLFQMoF8pNJgy1MDc1hgCkPXojt82XkiEcAkeDeS",
  "key12": "23NzaX753ayCuqwF3Qcv1L1mwLVGVvvtpAEKbjXkXzP3U5S6S15iYVsCZptQvXdCRwSaDFqQkZp8K1DwhrE1gP8F",
  "key13": "3dinz16bdJ3FpjD6yVxRLQB5WseemC4T1WN86g96z3c73NiXxnDsDjfcpURmrpQ29YTa8EEMDuz9Aqmc1UCZuv3E",
  "key14": "5kXUQ8sKVwcRhbwwJwf7RLpu6FGjDCRNJSPEW4ppoJwHr92tX4dJqMbWYdXHGpmhVuHitvnsW26qMXjwjvGYY1gT",
  "key15": "6272yR49QCrXjoh4f1CJfUrKhD6UQ2c4ayseydyoejc7wKXt4HfFiVmQJEaifAtDZPcube2y9Zf6mLJm2D9buZxr",
  "key16": "3NHuVyQ5KT4U4k2kAhii6SW3ozZRUtDJmXZwosh9KkS1pUo4L6MS9iRE5x18YG7nEgjeCh4hHVcPYMvA4q2F2Uuj",
  "key17": "3n3TZmQdsZrWrnt45p8H9EjiinM7H4BmExEziVmF1KYAJ5hX78zCwjfUvBjtHECsyxxzjYXQ5GcAHwhMoAEqRhV",
  "key18": "4Vn8rRGqoD1fR5bdZAwXxzdgqUVS5KBZLWRPGuubiwpifFCVSLPvxaVrqvneT2bEnLtLuDw3pL12g8oPtRjBxpkT",
  "key19": "2o5r56XdRASocYz4R27ueXKAUyg1zq4GXNXZhPn75KyrvFed4aPFPhWnZUZ5xyzwMYH2XgDb97qeJavQ3qQRgnF9",
  "key20": "3DQBEy9duwK233wU4bWYP5L1CfSB9NoHMhA3NHpnJuzDpuxhdGwti3mBHELV4X5Jd4zvUcBH4t7gjjH2QfSzf4p2",
  "key21": "5Uu7v6GC133Lqg2MY7gceKmKyMCmq5NyHJ8L1YVQeefPnQ8cvTA36gdi3CscQLAsyUhyzVt7LrEptGNHkWqNsm9Y",
  "key22": "4yNvNcCZh5AndY2BZBHforREYL3XJzuF5ebmsUGB9zXrhYcTuyxBrUbfhstQnsKfzUGFcPtiMSnZt4Korwejs2GJ",
  "key23": "4tyAjfAb9eRbjWK3kAzJLwHfhHMnK8Gd4frUYRyPvgpJ7DHF6PFnWGHPqdMFqnFjfpbWLW4aPLcwUjTWvBgkbDH6",
  "key24": "4g9ybF1opUiPtHQnzSTSxdFZmoBYY4eAMiomTPzctbcc7PiN9eLi4HfZMHLKE1DwWk4WmbmSW4EbCf25xCAJnyfH",
  "key25": "LeSosSJpWNsWFnJp6uj4KhHnoCaSf1TAYQwAyAKzFxcyLDyjHxvXvFRd9g6Pf1EzSQrsJob8vLGWD91ni5sifTp",
  "key26": "5SNk8LtwD6EPF9GJqZAzx5TvLicf23PAttKFccQZetCFbz2V2kZtunvgqnwTSeT1vd6uHUWNQYyv5T75VbouSkqS",
  "key27": "4ZQekaCaKFWisRrx9uiQukVEgT4mX4F6VVKJszBrvB9T15SRvwvqfuz7Kmrpfne9NgUgXAh1M1b66AZTxtoRXSYh",
  "key28": "4tcCa2ZHg2u1txBzW8shHgosyvXZN2PGCMevdDdwy5Ub5sU2MWqkxQg4eSfdXCPsPfDRHnF7fNJenZYWPvuWQTv8",
  "key29": "44KWtqMfQfe6vE9XWiA8JKHbcZTVUd953zrrqi6oFHS3YFUe972YLa1jyhQGdQ28uPkT9GfD4gJahrC7PE4XVWoh",
  "key30": "3aCHLvU34gQWqgCGNFcCE3u18UA47mv8nPuvs5AFtCdqoJneL3d59gpKxp9viGFY2NHLAgfigRVzZyX28BDQov3m",
  "key31": "3Mb9aEcip3nEq9ievArmgmEBFkr7uUp4Pdn4gswhUjjir7EHs7QZJ3GSzMotRhP5z9qe1UUF5Qaq6jcnZm8UfwZe",
  "key32": "pvtxsNxnawdceBP5hFf35CFoaeTApbWsWbSg9ZKMemqULoUzn516bvwE5mBzX7M4B2PDwz2kCJzTkezeG5X3wrM",
  "key33": "JhFBkeoee9HLP4ceWY8WnKFcXjLmyJ5fCbvvsBXF3ezmzaMFnkth3LLrjXh9V3so7pemotkCidXn27TPQZksSQ7",
  "key34": "4hxprUqXqNbfDSXCt4ShmseWbDYLKm4t7SqVhbxFRamFKXv31ZJaf9gQhU6psiTUeq6tqTP8NbjJWjhs7REFrsRE",
  "key35": "5hp5pxc1LWe6SUsYotzwaVAA7FNG9jZnq9hyQGS9A2QuhQZkC2fzaUZDPSRkyBofwrA3iRCHU6EhwtYQytjz3EXg",
  "key36": "9Ua7F77t8hu4MSsnssts8S6DWfaVXii7HasWyqTV7zxaPpUqZSRt1i9ouxkwKcLnmLwRhmNnHCmqJwHVjWHfhZx",
  "key37": "5oP45b61r7rctp5y4FVJyrEmz4Jd51LdaVnF5ztU4TEo5euoQdQFKP76cukX79uZwYYUV2QD4LX21tQGTZXRN7Js",
  "key38": "hiNnqGm3u9efhCi4L3eEbeC3U35TUTGXDjtcYyt1LPB1ESJbo5u5xYQsR4rdcwitbJ7e3wYjd6yEjC9BmztBHY1",
  "key39": "4PV9Nt6F2JZ5J99EsWv88iJmkX7SAHo5551EAVTHJgWjK2VA8K52khc9eHQxxzFFA9NYGVkiNJimFiv7jECWTSoe",
  "key40": "4h4d88KnQNB8UotVCW4UE5gn6SBRAmURmVeT8zFEA4FMRsJzAhEJpjkizPzftUNLxU6fJAmhWYGd2xGxovseLjCK",
  "key41": "3cKiGDesRi4v2q8xczd5U9KJ57tYzy9cDdLRu9W5B9PxVKyu8hFB8JMr9ANgr1sdJLzmuYGaA45e5KmBtXEzVyk5",
  "key42": "2VB69GjXgaYLEPUUx3aBrLTcKpgfkh6CfbTp7Sjy8CmeqFWKKUFqeLL9WDGzjm6BPm6wZEVp3wpBLZpyaJA2Vq54"
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
