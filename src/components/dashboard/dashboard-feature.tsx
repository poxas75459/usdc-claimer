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
    "3v4ko1xeeGSSy3JS9iySoV3F8uUkVH8CPqr4UDh7YPs3QfFjxoFZbDWFzGb3tf3SaBtjRFw2dfFdN4y4hx789Tye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bJasHymKLD9VxNbwkRwxujNx5BC51ZdPJ1haSp15jQAbi8wGDvWQCeBaf6gYbnFmbrc7wo97gSWm6WJ5865iCwq",
  "key1": "5i1CVcJGGGyW3QRkT4mcvR7fZiQV8ZYT6zGhBPCCNLRsTFGRCkgsPB6iT2wxRPmUGJKrQF5dvUTfqtmBfoocEZbP",
  "key2": "2aW2UrcRp3i8dyt6S1gsZi4xN6aw5UcTkztTyioUt4dbkDyZWJLveTPV9ecFUeoVfpYHzZbqYcWQBhmyvcxJbH68",
  "key3": "JQ48yPNLoGh3Nn5bEJHJP376oWWKxAaQjP6pyAito14rATDkkm9QWmrQTRrosG8mFvH9P8ypzft1YDPzDrFQ2eY",
  "key4": "3umHg3mpXqFmYLph5k2Kbu7wVuSx6hLwmT6SonzNTuTRAb9oaMgYhoT1ijf2LRmyxzck4oRYy5daLgbzhV4LG9eo",
  "key5": "dGLQPWgn4YQQfxrwhXi3jUXSe7txJGDyKzDKpzTXbjF4AXFVSPTRK8gPrc5uJkJjF9E1mDjwvrK94DJLfVbookf",
  "key6": "2v6tdBTBynGNoWThwKJXxMH4VxcJ8vGsU779eeY5nLsuhcyZWtQndEEnp9hURUdhHYT799ZwGFthVYRGDdK6dBQE",
  "key7": "3Vwjk8miDvxni1VH4FZ4z5xq6RkmEHeqNGFcW8NBaoP3yEmkTTL4886KvKgiZ1qfC5b3as8fUPc15ANCiW63atcZ",
  "key8": "3f2ZxELhswGKVgVKd6wMuD8yb9hs8ge5GAUge3jcPPPvXrtf7Z8L4iCVYL5NefRpMWgk3SoiD2jrTRJJmFfN6VRT",
  "key9": "2aV9Xdm86Ad8EGZdLZVRKgbNWpteigmmFyahedE1Jbc6X2bMgAJRNjGjLvVyskVrDZh95Txn9M98EtBiFp7sKRxo",
  "key10": "2vgPsZnFsWrVJsCy1rk9NXJfWLh3ksQD5QFKkt2TLkggQviZ1SxTvHUmxvMMdAdg7tudscmxvUDoiUA7St1desj4",
  "key11": "q4BbLTFirt8syxEBnjc51CHcTkSALazxB7PB8rtySwttU1DQqSW1Qqii7h1NUQwfNy9WDkSotfPt5iUEZUk8rwp",
  "key12": "teA87N2o3q28z7HhUDwWt8dkTVziXRmw5RttWoqLbU1eSKGVnJh7vm1shR63XRrhFkrAbT8JzbwKh5f9FqawJhL",
  "key13": "4FMjYcb9HA6x42HL9McqxSkXyXYX8A676BJE1AMkkziXMhpcGr77GZAEa5yre7KMepSGgdNbRWBmErPtM6sfgEz7",
  "key14": "3kLZAqsvuf6W5DB9isktJUYvy2B5AedbPQatwtgGyx5xJi5dPMsV1ufegJabfub2f1Z7dzbvnGch814ARE7YkKAR",
  "key15": "5B92sfpnrm1XoNGHnVv7KMyvMGmEMaeqocf28Vn6Nu3VKp6bGQnh8yLKBB2x4MgMeZow3MyLsQdFM1KpPfiV1PZR",
  "key16": "JM99ry3QyrmSiv6ZEQCbpQhwn5vcpppVPrNwU8wxZ5zyPjG5V8LNuYCraxvQBHA8bPpiQ8XAthArNpzXCBm1RgP",
  "key17": "4UCMmsZ1eMEtHFx1F7X9NJPveF8GDPsvvqsoH6fghFVe2kHCwk2Js1QfdzEDxVkz6FsgHJHTdHn5PEV7AMhTByfR",
  "key18": "38qWVesWyJWuBWQp563BZPCG8JKPMZpH1vnY2L2Co7rEby15toJhS1xpQwhpGwRhigg9vH3yL8sbwqm8PvbgvCnz",
  "key19": "3X8QbrpyxCqXQJWZoAzLyLavQcLT5L8smhWJhF61F3nwrZ1biDD3tFJumXFodsfJjjyUjfaUscHsnYPvhkEjgn7q",
  "key20": "2VTkjKH6Dz19pR42Bs6nt72P8kf7PNRu2cd4o2AXH4PcwTQ4dJX71zHKNXV2KhY7CfYYsDrL8Bv6hH9tHEFGZChA",
  "key21": "B4XzLQrAVvrWdeQNQGeyHFGfby94rfeVrPg9ePbgFd3U1FMb5jc6BQKK9RsHw9MuRu9xM2DbpzD4mX9aEUZFrtq",
  "key22": "3eUk5JDFucfSR8BX4RdcqpvxDUw4CNsrsu5q1Y2tAFDsm7fRhmhKqqnu1JDdDNWHrkmwReAwkTSxFBFeUtHkdAAa",
  "key23": "25HGWmc7kWUFLnbhzvw9AZGUyYi1a5nc1S1M85XPMz7GjQhFbFkCf8ooRLii5mH3YmBxrBnXq1nzAUtQzGEvkh7m",
  "key24": "24mGvkSEQbXxVJJuYKWzT6f2noRR71uCGVsXTgUhibKVEXcrXvvdyNfhBeGZsxJyAKWoEuVgnXENHojXWZJSgSvL",
  "key25": "5Kp7NQJgR6M3jsBZEuEMaqctGru1spRJe9b37vn9fxXdqfnx4DrqPbpydZRL9aFypSnH2va9xthn8PSg7ewnu4ca",
  "key26": "2dwYKmm61Av4b2seoWVei2n4ntsHyt4GgoCrBdN8BnUmrVW7jXnDYdZdHQT71fLhawuxN5PjfYm5cRMLtqc5JcAm",
  "key27": "2rawXYb7VyuY7DgaLKgJgALjnYD3PzmEL2enVu4ChoVHmbTME9DsVbKdV4FFKdw8gqek4dpRfGzhHHpQPdpCdwdk",
  "key28": "hufRT6sT4PdU4qUZct9HJ5qBcj536M9jK5er2dKWNNEJsdXhMt2TYf6stDgxEz469p2DXkxdR6yXAvP1Czb4VFZ",
  "key29": "39RbZZ4XH7hRh8EZ4SaYD5T9fRRgykKEUAVRFoVsFxSjAnNRzGWJ41zTWVDZWPRL3ESjFkVMReFSMabmpro5rimC",
  "key30": "3ujmBsnByHo27Y78dGH1MGgriDhvSD8pHuxfaWwVwiFAyQNZ8GEoKV5pY8c75kFx8wd3DcKysZVVic92youneKPV",
  "key31": "3iHx97XFW3XJZTJ131wAT9GekyDrUkMTdfiNWBuUANAsVztU2NGn2UwinsfcxR2QFNUHwaYkqgAayac5eY1tuCrV",
  "key32": "3qWYwLvAnr64WjyfogbpnXu9FzMqYKvmMaiyf6JJUvqLsH9fp4S8YkvMeAg7HPqKEMMEdAaAwNqGQXtUGbCS7LMA",
  "key33": "5WrFAZqGRDVLLqMCBoqfTuxqpKTFLetCK2hCp3tJDv9LeuR1Cet7YzuotmVxcAMiJSP1BauKx2rvavGY6iy2g7DT",
  "key34": "4VZqrRqzzoCSUTbPzxPgpSx6V1FryLB4XJVaeYajbYqUAC6oHjdJUQjmEEBcNtwfDX2hRSfWBjSTLsPBXuh9ocdj",
  "key35": "3HMWWW6FVaueyVR8oT7tDraFZpns7C3CBiX3Sy5HaejLgBQYzHQLGbniKQcKCNTjCDHJPzxHBXov2njoXxqc5afP",
  "key36": "33UyMbdYTK8i4qxsfGAtzcuFLxEfgDyfXnePs5FEeLsTrX2Dj9szzfjNWimKzfUNw8j4R5htaNJzBa2x8xtnqUw1",
  "key37": "5dGWrvMZJcpW4F5azfRKyrjHkSUvGAzSfaWcWPrgoubPmHCUA7M8Hw9q8bm6D5sB8cf5JP7hK1LfZYunWkybSNCx",
  "key38": "gM2Le5SJGyG5FBkdveHobupCFfofkzt99ZbeR5Jr1TujeqYxLmkYoxb93NnnaSXVe8zqfA2G8BuFnUQyjdLeXN7",
  "key39": "4VGeArSYcXG5YmLwrqmFwfDzqGDy6P26e74erwxQg4R7RE1zk33BcN8tGxtsAmoi6W5C22hjgBNSmvUYyVxoAps1",
  "key40": "5zot844SWdHCcbt7wDKS9ZvgUWmvN6DH5igYaWLBrS4mwyqNwSykNVGvETARiCnUZr5Tsw4diG3JUeZwQbGA8Ls5"
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
