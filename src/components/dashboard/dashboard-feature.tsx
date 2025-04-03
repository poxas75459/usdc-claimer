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
    "GmuShgV8UvWpbmcW3Zj3PayvmuCWEcRgrqmGBhUpgf8QHXnn9SQcJWyyDewygU4iUKKm8etumsH2mxqisVG15QY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t9JRUjct31MUCXCtzqU67jeRTH5LT1D49hyn2nT59Bz3UDLEFs8mQxLLmxp9qjfKXrKnFMHEKhQjGRf5fauxBEE",
  "key1": "61E8YimyxEUZ87pxyH1AQAPU6FeRwJsCdXG6CKxmbMJ2NrpCNBMGuLGmHPqfTNXpuVzJHQjBxgptfk3VbVgVpuVE",
  "key2": "2kTQJJNxjCFYuocsyNL6dv9gvJepLgoQTLQSYf9rddKNxWuat3gomCgoCW8Ro9z4AVR3yzF2xdht4kVPqjj49eFU",
  "key3": "7gAEE9oEDixuZeh6tPVpbaR84H91DgMLokc3m3N3Ha5AHGaAwqcu6DZH147dWxpquPBim283EeoSKAwacuzgR9p",
  "key4": "38Y6rhcVTR7D5sAN5ow7ywYDrPyyXodMAam79KUqYPo8d7N8ejGKbTctyAEpJAxyiSpFQtjA7SyuMWy9kqPcsoAc",
  "key5": "3ve29ZcAiBzBh6rm46Z8DPSh1zxPQyDy1Vn3QqifN8sW7vZi36RJviihhmwk8Daw3eeEsBgGfJNccghyMzMVhp4K",
  "key6": "x7a1waKo9cq67wVfxG2RDaYHELTgtiQxCMQW6PXxDgtCivXMFSbdhLfu9gsqJqHMWrzZWWaLvdGn4Qd6iw1YFRZ",
  "key7": "2mxJBNJuMfXphmXV7mF4UiFQDdofKYkF3eudz6GTPsDTqcM6NSa7JpsoE852agNq42TYxXRkCKBuVhL8tRdAbEUT",
  "key8": "5v726U9ZMm2Vzc1FNieVf7VvDgTaSqFnntpfwwS9Mpd8MLFMZiPiYTsLdDpbspWNubhrpiTK2w5V4cUTYLhYVMZT",
  "key9": "4Pq4L73iTr3NkvZhT1ZCvEjjAt4NRfv4kPug9f3ErQfwgUKXBcvXYXyy6ZEpQG6cWFWhTjaAKmtANunhaFtDJfTV",
  "key10": "3iEaj2pdAjkCw2wuC4K3NoBcGhBGtH5ipsRXHyYMvSw4X83xHnU8cSftJY4dpNYwEgq6P4ybb8oJXADdwtG4EijT",
  "key11": "5xZ9sEHktxPhv4X6XT64G52RhmNwLS5XBi5NCuBNRkfNgRU3Sr5J6xN7QZui8JGPvdqtNQtgp1a2ANMtdxwR6ykL",
  "key12": "48dPsWmhcN47QqFE8V5rmPi7Wzrv2SwPxCqXJYMvzJQcRnCnQPRAMmzdn23ER7uKa6AHmb6gdoPTR2xMjyKotzbj",
  "key13": "ULeLPa2fVgs3KhJ6r3RGsEwkuX6QKZqESBmNsnDFyenabE74Xady8STmNGUx92vAmEqVygtrTc3Q4qcTXDtj9xg",
  "key14": "62KrSF4RUk4tYu1CC87Ch1HeYqhyg3AtmVe64tNiYsUJP26jAXNG87B2aj7viVAxy1x7upezXjpQe1wbe27PYixa",
  "key15": "tovBnawfsHeaQRQQegYGroD4a6JboQuXATe6Qs7L3Zps3TQTQSzqYgcuR3ys5QYYPGLe7q51LBCgnrPC2xC7w9u",
  "key16": "4fLTZHj8kWMhVkuE6VkB6z5uDJeJT2Xpqx2QCJCwcAistemRk5AeFvMx7ZyNNypKo97HaedgKnSUro8WBz6GFtm7",
  "key17": "4x4xxq9zPrf1Ddb4WWj4bkAbeJ71rqQya2qVraAuWsRNo87h15kukFn3YP295NyGfeDtfx1Jg9ohqo5bwkqihoU4",
  "key18": "3drm8LDRn8k9o5WnMjd5GyVAMbYsB6kxYoCRnaUAnv551V9YoyvoGVGDrV1yE2GEFZjMS1VWVS6kmftEw8qbmRLt",
  "key19": "4Kv9q7ovdcMJnGv6jYqyoarpdvmRhDU9ya4p5ja9j59bZ6evKHBJTpym4zutPBAPPHaEm7tQTSZU8FucUy15Tk65",
  "key20": "sPJr1qpsccVKsUqKKxkE98mNrkBKNxk19rT7YngzZ2iJMo4QndoMXKHYwRcRqnNvbG4FURSotEL6r8Nj81sZoxU",
  "key21": "4CC8qGZSm7uqp815h4Yk8YCM21G7uNSnHB42wyQj89gCmQKBzLh2gFpdjvhZaoL93frEBNJ5gcdZnqhBwhQ3XZz6",
  "key22": "5FGFYm3WTpcSkc56sv1u49cKFGtgt5WyRBsfKjo4emj1wJuhiuctGwCzcJqFWh4HqEiiXp9wBgJVF14q835PVVMW",
  "key23": "3TAKf1NKtSYi5XiB1J1AN9eA25Hpen6SvsuQ5ehF2VtTLWjMQyHp8TDcggvf65RQrmjzL9yLY6aXs4oWDQEWvtdg",
  "key24": "264XdeY8oPiy1rZGfEkHMYu6kT8Bw3brWwjFAftRnh8Kes3AR1s6p1bse59W82PTmiNnCKJSZAwzkq7Ah2aQvcuM",
  "key25": "3CbhNyKCc7K9RBkTJmm1HLzCnw9GtHb6kAQHS1xZcehQsGY1oLaKxWJxsKmNySNSWhC2DLvL9NR36aTAc2mhNNsf",
  "key26": "4jVMbjAuvu3y9TE2ZQ5kjpabLUrYKMzx87o2CUbdcenq6514RNKqf1e7Beh99vDAGbgJDtofrAFMtZ2qn2ahiCC5",
  "key27": "292Ce5yG5oQCsSaJfgNfzo88iyJqYYt2HfefmZcEgL9Rd8aPDR3R3oEuYft46VRwsVZgHSziThNJqMUkYNw7Wuq4",
  "key28": "ZNFyBxfY4gqTN3VgLY4axBST2fv14i3N9yh6vX1mbJhRiSjf1pygJNrspHuqCvQ3DM18MhKWGvGHNcATYBSbjTm",
  "key29": "5pVcxexWSGQgZmHW6XtoMN3DuzP74ByDiqik4ugZfyAbUA9JB3qEQAn8fJW7VdWmW7CZ4aFJP7S5ahY2k3UnDmyS",
  "key30": "38GhpdeUugCe9hrRA3F75vkaRQsDnSeAFoTdzBqUeXz36TjAXcVUywHg9BWcN8LmpD6kkjKLhSbfeRmZsox2QqtK",
  "key31": "2npHsnKUZJvXRgCbiChWihHwZEsFAq8UYsx9vASYWboGpSR4EWpVhahQk9h7YbzVQoxNe32gsKducWkDpfq6QhBZ",
  "key32": "5QhySfGLxCfu3UFZfpDagvtMHzmBfZMMmR9n6bqdWa1aTPmDLYaKKsH74tC7zDiKEQkimkkPruhFMAwXXpxyJYw",
  "key33": "5AsNat8m5foMHbG38GQFD2r37k1Hpz8NpnkmVegEEuBQB9wRr2Jyp63cZKs6hFJ7eJd4Ka3tgm5m6nXTn2wtCZxx",
  "key34": "3WaBjDDeQbz2UziA47KSK5oqyxDXvVyi5dG2pwcX2cenfFi93LU6oqwgT3v6L9gU5ozxMDRcptDTE8iJfhbBishd",
  "key35": "uGknYEEp2M2nA6iF2QMhHSWvPyVFCi22CfNgibkhiBSJmdP7QUiVsVkQEXnH9KBrSXnQcrNn6YEw7J3obXpDGWB",
  "key36": "2RtPSK3m1JTm8kLokFQkWuPYtYMbrCELH9HnAjYKHm485t6wkcpnrvEeTeFXCRh46SwsT4DZU4siHCGCDc6wTAXX",
  "key37": "5TpUK2gnig9b3XC9XgvqfsgSJKz46HyCDNNdjTVQVaommaJfdMZc9GseSz7s261doFeXWUXcio62SzsNtS7wG18A",
  "key38": "5gx4xv6BGBuyxKdqn1QfZK1fnrFsR2TrbRfKjNwJdhuZjNsnAGqYa5MuwjSdWogopf5JHGbTyK95LGMrF82pUmt1",
  "key39": "3i8Ffzbu53Pot6SpScoMqdzcxeMYFP9doN3aJ55PazEWi35Evu2h8oF8H4nwyJj4Vum3uv1R5p2KyGrLofJVZBpN",
  "key40": "5qxCkbtXTU9Rqdgcahyfb6JYRZdVn9BVNTeAoAhztAvhqWXqHfPK2i7btPgK5gT1KmoiXxvj1kDC6Uxn3DH74vRp",
  "key41": "58ByJhHKpNukoPeWuZWNoAggUWUv7y8EM4XFWdhiYKHMVLjxmaDucireZaUhn9hDHPks1rrBCpTysMHNtZDp7cUn"
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
