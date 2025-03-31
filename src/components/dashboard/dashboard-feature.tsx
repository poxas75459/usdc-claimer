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
    "hobB1CbjxtJBg1pc2NC5dCLf5f1aWBLcMLG4hKs7CH9xS2Re7bkeNHHK36gv4mcmcG4hwg4biu1ZKrPjiquTvPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kYmLMevDXsGXSunpWRepPmdQ7Nx7ZMFXgWQhBjN5iNA4YUhQa2euupPbmRzeZ9HReDZ4Z7xC1U7eVFec2juP2Du",
  "key1": "giEUJQNgLSzVT2YU8Ee4TiVWpGH66fHP4e6UrbQ9GDRXQADFw2zVn2T7AMvQtmSBboyDBJEZsmjRczxNf2zixv8",
  "key2": "4gg81Rj174RAkFMWnjbRkpLhp6TDFZb11G7EkYPFaE4gKEvZoJJi2r9cH1UBcRi1qEvifikCzL8ypsJd5Ydy81CB",
  "key3": "21WtWwWQGqiApix8i3gRK6dJjcRDwQyNzWph5tPD5wCUaWLPJgWVNeML4gJ1xgqDNsg3FsszcNa4con4Y3oYo1y4",
  "key4": "4Pi6M9trEjJbK772CAuTV1CUBhQBzBaY4rFFsZDF7d2zkJ2kEiMp3tYQpRMCdufpZCthrbY1egcdqpCNkENTvf4Z",
  "key5": "4GUNtEcnxrQXG6gWnzCE5Dr63mHd4tg1tLMZtPkohzfeoDoHqDeZLuh785D4SVGtwdrWJ5ySFNmbxyn1PetJjiwx",
  "key6": "3z3YP8LHHsk4mkrCzeoM6STecQiejFmLpxfvAhned6yMKvMzaNQXPrDucdrUcFCreUREGkQxnzNhmctdySdjxq9w",
  "key7": "VzANKkVdhdyK3ufbQDheZ7WFCYsvKg2CaLYMPHWe8yHLibjLhJEsn2bsvGCcBrPGXDzkPpthJkjRWXA7fQJHdAg",
  "key8": "2ovvBDDF5bhXwJAZ6nLAzwSVv2rEoLDppjZiYqxNYbLR7Bi9gemYJH4sUuXMDqCizpuwhugBuSyNXWkm3JsZ3Dr6",
  "key9": "f5M2jXNfEmkxAVNHcF7LCoqGRrus4KDBLGHnSb1PEvH84Wo33Y2kcjfifutVcJWGen62Cw2cHR2SHeLMBqsBcxF",
  "key10": "5PBEp85KeeYBx4oG6a9LdFJkmM8jxJphRXeEMtQ24atcuMwWLwJavpK7Kag24waTyoEqxB6gUpyhDKEoucESkB6k",
  "key11": "3UTfcniunB7yaspL6E21zGiRpEH3NsUUqiau9boDFnxHmRgDyK6Ua6yQGSk91tjLr71FvM7mzRnKC7AJjMhr1Xj8",
  "key12": "23KHqhRqjsC3n3gyqQrvpKEEAu2esf3bJ8iSYb2FKpXqLDixGu8nR25RWYjf2ydWU2SiBD5gmDBby1WKaHMAgT8z",
  "key13": "4UhrxX473efnPmPLLEJ5EJ1txXdiL4u7LoX54644RnS9Rsq56PrGMRfcwg9JP5rYAwHor1YXr3XyGfGHx3diskqp",
  "key14": "5kogs4ydkKhbCtnpjS1sqTvdbFcYwKjBbmPS4GFeJhBkfvUZAL8GkDWGzsH9oXetEWw4jyAEc5yYCeGWSDpygVQw",
  "key15": "3PkAvmE2xncFRSmSUM7MyeQET7cjqjTQjZTmoiTZTW82rgqEnunWY6EXkbFYb88tk8WhEwJ7uJm3fp6JGJCmpqXG",
  "key16": "4rtR1Wc7X9AwuhC2hvuJ9bzwKL7SdPg3U4XzPe5ggEUV21MXc71xaer5EgFu9oGLaKBbviokQze2Kw3kzsK7UthR",
  "key17": "4oC8hiKUXq9dXEN4H6r393WTd3DMjaT9REmA4y19Czm2JTjgtL4LLxNQvN38G6i4sgenoeACKU2SPGpvufRnx9yC",
  "key18": "47fdP7o4odnHNfytP8b4WntEetWFvzg3BkTbwk6wFazyjTuWT2kTfZyPvAbaD9faKz1SwmXhoZS52acxJkvhE7eF",
  "key19": "3vTNdEh26EsoCwAGjBZiV56krsD8j622KZ5mVhLY6YRSgNYpLgRPSSTbdUqQY3XxXT3knqsSNaB6CnQqLeBtziob",
  "key20": "5zSm9bCat6JYSEDkFhwTpTRZvxmQR4HM9wxfQhKMgeNA1ctoqnV3moH6NT6oJ3oPaofKgPJzGH3e8Q9Rhshkzhwn",
  "key21": "RYKCyTvYRmGh55zbw18wBhm942vGR4gUS7sniHCjTdh1fCUtHvBb8p9dtvin1TKbsrSVFgqi4WQr3YFVxWjsjvn",
  "key22": "4MKVdYRVVx9DSxoEFHgtfX97BEjhDjE4YicghBRxrGWRMPqi7VoL6kZeias9RBcL5h4mLWnm6T84Ev4r975Um5nY",
  "key23": "42nE3ugtMQ2VoE5xtsGRYMVxwSniNBMjsbkKQqsWJujAAKDrpHDEG9vBCviiDP63wt22UvVKupURbkAJWD5epSNt",
  "key24": "8pBzzU1miiKwTM1fn4ppQeB8LHrJLrbcxf3Ngmc21NggQhYsaTbZ5Z1UR8inYF2Lt7eCLS9AVM38Cr7oBtUsjug",
  "key25": "3SFpKNfa6whiHCyNT12VcKKDLQpymLbcANLGFeacYqiJsMQHc75uP2TuXbsWsK8oXTYadmntZrExrWAURaPvokG6",
  "key26": "4vRAWuo1cMgtQpJmfSx1MJ3RMCf5gQTW4TmWJLuH6X9nrYLU7zbDPKowGgwAh5Qx2fujaQwSXxqa1LmvxLdgStQL",
  "key27": "gkyK5hkuP5iUJKP4tXemLKnqqJQRQ1H384LkH4ivvRw4Au1s8ABHazTxPALFkp5CR6XySKZgoZiP6sgtBHqfp6v",
  "key28": "2tdTUxKvTfM8FXYmbkcXS5wTKzfYR7jCB1xf6bh2w8qNpFFapPtg21MVCMdAQz5SKcgNxYKmqH2DeHRVJUS5Vn9v",
  "key29": "5KM2nwBB86jsruGBBUbnWmsBYWMdPPEF9RqEQ8Et6xQKnTmWvYws12h4DVQMPodWmDW4Jcskk2BxdyuHZ8qtuyMz",
  "key30": "3BE617UL6VPozgNxfJyodqYJmxhg36RjQ7kKKUc3VhV39UekvDCHQUbNHNSrHNyTT2hWmTKkAJXTgNVohuRyzE8i",
  "key31": "3W8FdjDss1aCtVeHGuymuVtEJPWZLkBWijqw4vcSc5GoVhCsj2UeDt5RYHeHHfyAcddi89RPcFZvv4Jde4dpRf2K",
  "key32": "2wsgGQH8KTxUiuRfa6MEjqJcbYCzXc5H5jGqA15v2dsZy8kGkPfVaMrKRBtLJKQusUHskxqXTQuXpZiqnafgTuo5",
  "key33": "2cP4duTLy9nSGWi6N3mGe4hFMKrEyj2ZLa6RjEQEH9peoH5YVqQ3YXUScENLMKNdqqihHSCtMnRctmYHi2NkhNex",
  "key34": "4Gnu6UPgKGKBQtTjX99GJdngoJ2sy1VHUNPVApSdtBMYx82fXX5TyAp8KN9KyNGVU63r6UBXWBH35vTiuV78t7w",
  "key35": "tK3wVGHAJK53QztyjDWk458xSX6qzCC3wHRjVr7MKR34WFa3SRGjKABMqc7wHo9XePfiwLAE5p6wve4zH9gvmuh",
  "key36": "275v7geabYn8SpdqqswieZK8SRsmYdYcfKZbQhzQqkBZv29FVi8grJu8sK69r1HJbbFxXc4ubk8vVYU2WzBYZsXE",
  "key37": "3MPY98oUEMvoErFcbT7Gn6inaQF4rGrvQQCoPGiBK3eDXXcw8TZYfTppQaKModA2Anby5xiFBpffRZzUrLvk859G",
  "key38": "4DHppgqB5VfKe1L7HFDwo5D2pz6cBfyZ5a7W4iHC5HZ8SRvztdxn4wH3NjiwiggGamJ6UT4Uak1ZqmfXWHtaeKqF",
  "key39": "35zWVHMsughVzdSGMDkZe7XfUedxaL4WEvWs2ghptpkqJAfNgt6boFE3fEFs7tMX19ioNUQrMEHAEmL9PrdZi8cm",
  "key40": "47qyTJhX5aWdBTWNjnPDgUgetT4MNzG1U68UCgh5BuD37kCq8RT6mRZgTF9qzg2C8qSQCgZnfCwK5aHTi7hFLMyG",
  "key41": "3npZSyVyW3WDi4w7MeoTi6h97fvi9tWqr73XyHxq26Cpg3BdYYXYBqzHYSTxZkoSroTBoqnFeMqvBC33FDifFMcg",
  "key42": "3GWiNYbQbH8w9C9e28KqVzNceRRzBmmNif7XC1Cvb9skMbrPjAUeKQ6SnNLKCQMgDestknmWrfV5HbqhBPtffc7w",
  "key43": "ccD485QSnBcNFQr5Ze3AC7kBGNp9zh1UyL5koakHcBe9WcghMRFTVeXmFiy1SJDVja2S8ex7RX5jh3Hvano8Y4r",
  "key44": "4UNTbhEH6YeVwzPmNt1piddhLQSP5ENsQtrvdsCssbzV4Rc1C8HUhCmZrkJ5cn1KPX63WwY85Ht7bsvLwCi2dmmg",
  "key45": "DEL989idgAGKLqqQNFi4Rrxgnk2WgXx4rHKUWdKzFnJXgcAAtMcDGSSe7c7WmNpHQLWfByCKAPVvS35CoACm5Qe"
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
