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
    "2eQEr6YwnB1g9CHgwdBmqYzaxijr9uwAtbbxTwZrNAucfhubRgFtCHKCp7KmKe7H5sBY1Xq4eDGKSMagPh9bVqHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iA4Mv5UWh7UdNpF1XMVzf2nXAEC6Mr7bKJhFBGGAN7iZgE2s1yTysKRiwmpTDMD8CyJoox8LBMWPFiXoFssG7kT",
  "key1": "2661yQG9HGjtQRCKgfJRwKXKo34LezLNuR6frAVWV6ZuwDvmewg1RvF4gW7xsav96AXyDKWjUBQ8XccEcT8hUfNx",
  "key2": "2tUr6FT2oPfLxCiQD6dhZ24ACsrgXNqBRzUdr2j41SKFEDVKPaaAbX17TzBDqNb5o5VdV5ixWGuHKQnT8u5tQKGw",
  "key3": "3ASEZpGe8JTZaoRraw2MPUbebvswQYGFFRZRGgi4SWWqAMT5JhaMam949vf8UWP2yKWyioRB5FZ5VdgB2DFn8FNR",
  "key4": "NWAQGXjLc82Uh7wzHHyon81JphrCvr8JhBsoPFAiF4qAxMGR34bsNgXQPJQGBZebwswcZfU6U1oLEQVvpss5n7y",
  "key5": "yRziXDp6Bt6bUdQuVK1RZoMXc5KdYsTCNkZjT79M2aVto9RPHF4VjC3Ris4H52a9jTdocwrBrg76S77UMHqAQai",
  "key6": "5AiaFQoZsHowUYZNDh5H5UYu59d2iMe8h6kKkdKTM7CM7sBekMyyAF2d94WioSzAx5BTpA4skU9GhK2L7rjgHCux",
  "key7": "2iHvTR6cyDgXX1Kt9bDdwSPAwTVJYhR2Fb5zYobUG6cYH7WGVnmLxVqe6pz55Jb1qMN39acDQ54sVQbi9oM6kiwL",
  "key8": "3oeuZyuAwCJgdBnpHbUL5c2XsxsvNnqSceTn1RSfNaNBMUVZUNL57FeCLuLTE4r2Eb4c3kuGPFEa9zAy1ne2ucLn",
  "key9": "4oXpZ3zHDdNZWt47EDT6yC3r6bJY6ULXSA6W8emQynRquoqC9pFJ66ccUoGkDhpUbSLV7yAJaBAKhtj3TbBWWNA2",
  "key10": "3bQ17rKjkxaQ2si3agraHNgZbk89hPZAH5wKsqCMinyjhvcEELV5D4u4bqPnukCeAqcvebrFmVpjYiEmEDVfZhJE",
  "key11": "5tDwJ8fWPbLNcPxkmenU2DGc9WNQ6McK4tzZC7KibjPfWqteCrxXM1biEiZ5ZhL2U3L8VBpay9Su4uUnF22eQFhL",
  "key12": "4Z91KewM9sM5n92i6MbZwuAYEK1r2cDbEscQendokwZYJGCwhzgndCqcMYdb71CV71RHrcc3e41aARgdKs5ha9iT",
  "key13": "3smvRhN5boCqqxty3GFAYtYuy6pt4v51vuCgwwxN73zEwQi7WFbrCmD8uhVVmP83ZbyzEoQn9CtGiJGhmyY8ejXL",
  "key14": "5RsLa8Hqskpapr64i8bh1NA86oj6iW9zy5YXTnqZ5W7EkLhmxg1ZAiu9NJRvEyLHB2UycJKvyVXqj5f3b6ikdnxb",
  "key15": "3m9tcRMUjaYkp5wB8XyiSkdUR8ZebBbeY54k8y7H3mpk8zV6T29RP4QWyNXKtAvZdruwFSTCXTSKrLhhd9xAKf5r",
  "key16": "38HZ5ZFjjKTowJQyaVsit9Ez2Scy9wSeFULA7PfYGtdx8DoEbhz1F5yDQb8P7kzyrdoyBobCTvgsSWfudbN3ZjFU",
  "key17": "8A3QybHUn5mMfDWn8AWE1fgZQkqBXBzihiHJZE8BztvSmMhPk22Y1Kfy7Ch4mkKW33B56AhpF8pxVsDgo9vTEfn",
  "key18": "2nfaLJFriWKit8GtrvnAxvGJBMKDaU3QCSUzqZYWXcNWLWjmYj9XL1aVLSxgKnaJfB7kURZ3Z53GpRxPF2tMWMgv",
  "key19": "5ArqAUZ2pR2mMVxh9ScqWALSKPm4SJh291WgaxkkkTKQAw1g3VAzPu1RLkeZ41anBhAMPLMG1fp1VX5UQn9XNo5P",
  "key20": "ryr94ScsGpB73AciTGMRhemGA9BNAvjAr7aFzrDZRgtLX5LVJ31xSJjHwNe7AjfugE9MfnTGcQR3oHo6Hf5HA6q",
  "key21": "2wLtxReM1FsdEcvLsoeqQk38taXcnLBh2whs7GZQGK5cgaJYpU7pShEiJknJyXFejMihUnwFxxgUaySTxDPf9SzC",
  "key22": "21bno7Dtu1mNpjgbkw45a5tZ8NWRhyJMWJcG6sr4VKiMzEvApxJe9mGm3VEjJkwCW3Yg7eBh95H2Xikietjsg2PG",
  "key23": "4ibgEHVWZ7hjEBBMAUHxYMJBwzCJ95EBUnTAX8QsRmKeJ8gtPXhpeYo3scGDb3V3BNnGifFybRMpwmSrtnf4K9Cn",
  "key24": "4xhY9KGadnbSaRfJyqkHdgrbo3W8TSBm5QLT2QhEDRbfUwXzoZxvnvoxJokJmw38MwWi7NEE7knBxpiNWpqM76xs",
  "key25": "46LiLvp8KwpJEXacb2GVhwcGGRXDwdEtusgxLLStooscGXBj74noaQMo4H6MgxxAnECRDiBGi3sfnVJ2AAaheBJF",
  "key26": "4aDGd9J9JNTHXbPj36remduVyFypwksWobreAa8YFztxATV4PKisaxu8BQJb1tgcxrFeta9Hfm4gWieYgxEgaTAQ",
  "key27": "22s6x1h9RWwqVy83yz4mhSeS1hXrtASvxtAX2U8BtQAydMyxY6HDqJcJ2hiCX6P7B4PiYqF2RDcohRwUFpudXekU",
  "key28": "3bEUeB4CuZU7qAoSVRFkwPx4HiyR9AHmNc2LtYho86VzHh1bd9fQsMDHQg51iPWQYvvpBhM5AJQMXoXoG4TqPiG9",
  "key29": "Xcd9tjLpj7S4J11YBAqHAEusYDjxqYKtiXyjGLFUyoZz4Q6oUQ4KHHz4UCxF3EX5xCTLTfR2fuxEcoPswRzYtfr",
  "key30": "3vMJsaVs2C4zYyHngXTK6M2NzFnEUKjoC6DSYeXn62cHAp7DaurvgXw6cCouguweVxhQoPV4Ak2YfkUB9A7L3LAr",
  "key31": "3RK2hco1vVVoGpnzJJy5zFiAYJpuKBigyNstgyoK5sEfmemAAtDbj68y3gPYn5ibp7yKRu2x1VtPs9yu2kqGJ44M",
  "key32": "t6adx4pQbuxjqxrbEzZmeXYd4rp42z6yJqQDvKqqka2EDJvU9guhh1Yn5L6CNR1eF38N6aJjthN9utyh45NHjvg",
  "key33": "3AM2FNmnZD8n9BiGJR8LfyWP3FyvthmfsX2Z9W3HruCBJZgYEnM6E2hCKK7fNFh5W1XhTPpyetibohSDrTs2Y5pa",
  "key34": "4ADzv1cQNVXLeMqgvc1cYNcfN7FqnbztP2M9pDLqxyKY6zAX2qSMgj7c1CdDcaRFCBnywigXtuBwXpyR8N9VVHF4",
  "key35": "4kfvhE8q8iU6T4twmnTYerJXrnm5WWcACQhsGtiPvqTiMqNcfmZxChZWwQhm4j711Rq2QJQZa3qtprcMBdgebnoT",
  "key36": "4PSmHnrhHsZdpzusJ3DmGTmxSsr7pFSYr1ruGJXpj9brr1SfarcNKJVjnAP4TBMDCLrSgZo8H5g3QYAqfTdgfqN8",
  "key37": "57EXx5A421FdryvCXujJo7EouLkxJM6AFdWs14n7ByoiWGv4dkUJJUt6mxBa7ZqPSUYRsqDVxAmfmYADVoDkv42a",
  "key38": "toP8azVSzcavnegd1xZVuF8LnEALdbTzs8g8tE3qvfUQx7sJCXgQAh4s3t1EqeeqQANHu4hFn9X6tRDqbx9FHbB",
  "key39": "2DGzgYQn2WWUk6WKchJErQUpXwE5cdYt6G7UVJzvS4tFamj5xJV6dTmcKov5xsPihTArMVwYuUP1B1q321yR5uPk",
  "key40": "3Ji8dKhYNbpn2XTMCqgm6BjsXQDHgVzh5gwJ4zzV3AP7iXSeP5bmjp4nDqFZrmkQdyfbwiNKP3WnK698jSf4FjBq",
  "key41": "5dE5x5LeaaWop4VSoA8thYGDnrDuUof96QcSQzqs6yJ8Knir1xq1QJAdWiwpt76CWCp19P62MHNi4TgEMfS2iXrD"
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
