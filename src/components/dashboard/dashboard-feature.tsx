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
    "a3Fc6yUwYrBwZ9x9S1Nivjo99bhFYCR4Qw8NwBFYN9D8ASsKSqYT5vv1jqN2Uomxc4bjZk5AyHq9jSAzHaE6pj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bZ552EXFf2H3j5YvLZBbibJq48MK4zPaNVuxPez2vfTuBGCn4DJHiBPYwGmLBFbBjAW1DhKjL9PUGJ36okCBqfW",
  "key1": "4fuuJAMcD6c4SLrrq9x24rDUyFaFVgWtBGGJj5p9fLNePziACcci4X1DdxcDWHDqqPA5zPmCa92MwKbp49rTaAnF",
  "key2": "3WNrgadUFi72pDvdjd2xqHUefyqieuLZqtM8PpymGPXsKMbnaJpxQQaVazKo1rFKtEJHz82mVnec8ie5JtQW91zW",
  "key3": "5XqqsiYr7LSTyAGb7LcN4M5Lnv4Uvnsc1cuJzNuXytMFAjtoMJ5D6gfhag8mX4f5G5SUjWvvE3wicRa5Yi3Vv6iX",
  "key4": "2HfChyXMgg3JRBvP9SWoRuVvbp6N298rF4fvksh3woBBACYC2fJEmgGjaojtw7ErDZ8AcVXsuz5RafpmKLd8ceyq",
  "key5": "5RCadA75MzmwmkaUuiUcX4fq7jDFjiAFoQhQdXfssRpvdnb5GQRwrEno7KY2mpG58fUJ7AeAdngo1qgDrX1GvpGW",
  "key6": "2UKBpy46gQwXYCv43wiDbw5EEJPBcNQvKNxfJDZerbjMzUHAfaYwQwkWJbeoWWJgP9ayCnyZEmtcmwsW5mUUPe8c",
  "key7": "4bCGXaFJVv61ZXSe6CrJ9SGNtuiHQs5r8PQMJFZfaFFWFNoRUBQqsjZRU3suwbWZ8G1haePXDfymnvwXxJ8rfphm",
  "key8": "4g78Ta9cDpzr392BGLtYgrHxBSgcv4LGjCUdgPEw3G6nc1kYu9YxqdNa8Nn19S5CE865Sgg3qkdbZcgUxtYuggrN",
  "key9": "2bTE55PP8XRiWJwGTe2E2yths1zjsyFu1ZodquqjpyTnUqXceks5uinuB3AaHSCJ98yYzWQDk5eqNyJuq6K67cwH",
  "key10": "5EGWiN537WiCpFXD5ANL6iZ5WM5D62rv5K8naRmwMFcqtXRmAscn3mmMdGHbn7m8h9ZytbqbjdNLtwhrMXdiCjqM",
  "key11": "EffDSLzisRXb9k3752vAPFCSRoXt4XdjeVvgMQLCqUW1HAdGoj1axsRYbHbnd1uxaZu7fhLCjA3PXxF7Z7uwqTK",
  "key12": "2gjMXoUVLs15SfrYJja4rFaBzqp2wtJqBrziNJKYGNd8WdHBpudUU2yfCo8i9DzHd8vzbJueuySKZ1EgC8je1eXi",
  "key13": "bwEtM8hVCYv6KSRB22T3B11Lq9Zhqhf9iYvWPHqHw9vbAYkuKVSPAnrkQKMqoYBhqgU5t4EsRqGMymC5gVC9DtW",
  "key14": "5HS26qVBdu6mo5SDWhVv9p33wVdy4E33PmjmhfZ2ZU25uZcZpyDdNYRfJTz3EAdQxRM7WF3GAPCBDbdCZotqSueH",
  "key15": "5fCPfXAX8M2GPw6NRZsaxhk48KVe8R6NypGDocFSrSKVQt7dUX7SsywEXEFHiMJ9o5SnZNjWM1HdtatSFKC7bUQs",
  "key16": "3pTUp2eUKP4tzUw5oyrSVZhuHDKQUrTJWsbrsFQnnXHdLFwmPZWi1xaDC7d2WbUz8WYbpLxMSgDnV8fxxU6NWkAp",
  "key17": "2bde2QVmbrEnJ2HgKFLD7x8KsufziBd3KstWwbGvJJFbNRcJQuALiv8wAK8tw8FmvfZSLAjFYRX78qQLyNFcGCH1",
  "key18": "5jhZWuG8eDasxEKwJ3tzekVPt458SBiSBw6PR5s57Ce12Ut5xHg5T6Gz6UJuiFoFHunAGTym6WUtLYGiA5jRYE2v",
  "key19": "BYDhu31iAPaoVmrgMg7obr8tJeTRLKUQVW9rvpFdpw4m7onUj5gEfkZJnS8SbH88caDJhtgvUTFrKcgikBLwfiC",
  "key20": "YerCfqV7FkqXLBMDLawhQNiyFHUAYwB1sx4z6cP8XGbyZeMEwoooAqq256uY5XuASEviR3WgXGpn6Dz1qPn9yQo",
  "key21": "3C48RcoVpG6gRpFeVjcKfU2tfUSohQdor79yQoyFzsmfwrgk2DQy9oYhvLHRLFrSFPioM8vbhjTAJULNkG8KWoaP",
  "key22": "3nZw71tbG93KsAUtv3AYocu71YGjhQNEFvrUPWSgEnHC5NxWVJBzkSDPdm7Pb8HdQYDvyN9f1RdGsxNTbk6diS3e",
  "key23": "3Fnb9jvZAX4HHS8kr7tcWZZjCJZmhtdD6ncb4E1kmNTDdkGe6wNFktgDSSkypTgrk8CSMhhRHfhftomR7JsJGGR7",
  "key24": "3K7oUz3Ur91Q3paif7k5SfvGA37TGGjtrELaZZ9ofmHZFRUtEcGsnr9qCGwQaAwngkpdk4icmyrHirrwrD56fPbU",
  "key25": "5QguaqXCAz4RcteuR3YoPZL3ZCji3aKRZpbFnDqUtaae1MSjVrsiKgpPpejebhtyRHrmxnCzG8bYEuaCBnHDphG7",
  "key26": "4exF5c92EYk9EcuXYbaWpZyduDRDwWobAPh7XnZjcgiKCPekbmMNuBcCLamniquQEGyxFq4zohaoEWWYVECs6yoF",
  "key27": "2Cbu8uyAfiCPYLrNVZM4xyE3NtjSNn2V7EyVubPDJfgFCzRzxuw5RFcTG6m5LjxApzYCNNyi7ojVxvxt9SUBDTMy",
  "key28": "3dx6Vtgg6DYjb99htk8hspytmjPMaYS8ZZBgwdqjqfwmqKaRC42PrDSeKLsdDyX9WkkM3vfyGDHRQkCtCLiXcLVC",
  "key29": "3nuFR9nfKQjWTXcs3poV8z1dg8WEGnffh53H4ij9R6eiJEQm31Q9LMA2bgw8ncYrGwTcPbu2tC164hbkqLFteaWZ",
  "key30": "4zNWV11634BG5kWZicwMvFedhgtMFvEMHy669mMHzTzay6oRrDRts8zw4EnE2XrmorQKvTfKQYT6kLP2Wrt8dVYp",
  "key31": "5AcwhhCMDQF39yNycZaDwpuVrWj92E1PMs359Csh89kPgqhBRJVfXK1NX5T4VadwdhnzAn87zrk5aN2HiFnkpdYg",
  "key32": "2wQ5zsD81CQf778RgphhEAqFi1vExkSVva7vqrY48uJYNPDZ4Bz9vBktDVzgQoLa3KtCSAYnF6dkcaAPtwvAYnT5",
  "key33": "32qE7Eysx2bVGpVBfAxLbvr2TJKwqD1NdjDxT8gicA9Jpckb3scohKf9hkXnwJ8TCURGQxxyLW3SbKuPaDUceWyd",
  "key34": "661HxRK9GfMKDvqLD3sdKK32QZLxo7N7bvEQyYBKS3qSQq32dAvZKkuLXpUX1EVsijDFLkRULr8qKtFcXGTPfcFs",
  "key35": "5eL2siYyF7ZUn77s3npMz7FTvZ2CsUUaiYeRyN6G6FmbjGPojZ5Gsmj2rTCTUSf2iaLjbxPGLKtJtchD5pCLd6z4",
  "key36": "3iDezNwB95xEgo3CPmRjctPyEMX36C6ieso1FEeAjEUe6NcmbBMgtAX8zcKf9qWTrtxw1LFhpUkstgwitQLone8L",
  "key37": "56KkxaYYcYJiS89Wy3pexX827ZmQgdU81yLjx42SujmQurPJS71faCKkVZUJdVLQ5wmLj3bnEUcdme8UkALxLDsP",
  "key38": "sNDun4NPdoKtW6Gq34FMzWjn4vHtYFQbkxmLFZpz1NajK68RraFGJDU7S58oLLYE1bfVWMTCe82ENUSWU5sVKYf",
  "key39": "3z4MULw1FTD6SkiyNBoHDEGDZF7zpm9WwvxrM5XVfMBcx2NB1LqAug6bA7Fa6Ar8cd2L3Sr2Wzm1s8wiZ1aEGC41",
  "key40": "3tHw6s8npkspLfZNjNJSfo6ftYccZmGr5nSoxDuofk6j6pYXieKCcjzEXmdE1rvWZGjQAQZ3Ec4zL4BxYkDCpdZR",
  "key41": "5R6WhrwfmZMPt6wVLv3syeYzw3vhaeJoRejY9UqhaPk4jn7D8aTTsCJgrNEe2zC2YXhqtrcPMqFwcAeey3KYPViw",
  "key42": "29Mqz1FNFMeKaVuFu6zrChjGVyBamn9bocSTBu5h7iMicPyLA1nNTuijLgnXLCU4qDdP9LxDKWwkZUDKVBmLwH7E",
  "key43": "2F58aDmZcCTohUScy47kTjSnhuZMb7DbdZsLpRHBq8AstXXUhRVLxiM3X7y2J5tVDz1d443pqBAs7KGKg5WnuxiG",
  "key44": "BocVJmPFNUvG6CDDFuLujJEKp9SMCN32hstz2MWQhqHEcmRbL16wBU7d5BQyKURNKbWodTNPEPbM2gxy9TjRHb1",
  "key45": "3n7UPzvmj5khAaeLZba2sSZrw9GkAAfbFoMFt24CamjbEkR6ASkSs4YzBhQRgEqGr4yzH9AoA4f7aLLBYeE5bVqb",
  "key46": "2N3jR4zeWx5XK3LQajSbL28dzBvRr2f6HG4nBFBc6nVJBHAwDcgbSDj2ECxeAAubJDkuHSxC58JySuh3tqWoicJb",
  "key47": "5qyy7qs7evXjp4kRMVqQRp2izQjCwGK2dyxqHejd4XGb2jzuw39kXvQ79uHixqwWmvXUs9CCbUYKAWDGZ7BXhkUt",
  "key48": "3KiNQFxBatP6Y7HaRjwrdhMdgWhYrczWazB5KXy5eS4emHTYDzCYizSdzcwsewqq46mmABSMCKdyR4KgpdsmCVoj",
  "key49": "456ruiMxtF3g8D1RmoYFWZhjjq5d1iL73KkRZNQj97qiX7YxtYNDU3z9kFE2YkNZNaS4BAbeycKCfcRV4z5y49qU"
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
