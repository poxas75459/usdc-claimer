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
    "4khRyGcYGLCWDfAyX4BpkfAfv5LdhppRbFoNyPZxSbjZKGQsXB9YijvWyQcq7JJ7f9YPb28KkV9no8PjBAsNQ7nS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26KdzXPzE8tKQ99fJJZNSfCcd3ypoYbFXACp7f73QfzXBbAFrDh7q9tEwXfdV24oL4UvA2BhLWBPAjtt8bR9J2BB",
  "key1": "3zY1HX1VtGZ9vb4jXteGzLXDneC3vncefPceLh6GL4iLXLxnPq8yB9EE6h8W8amW1wkujJpeUCSQmrEZ15tXn2ot",
  "key2": "zSdySHs7rWThcLUh7f7BG9Zz2i5LBb73wDG6XVGPZHpp4X5FieNjULzmn6ZWZ6FVz8XB8oC2rN8m6Sof6SkeFaH",
  "key3": "3b5sLxRLVjkxgACTdyw1L3iUt1BYJwmL4ZUf2dAPwhkCccSd7zH7W5gSZqSonycNeRUoeGhznTSUwTGgMco2tzTi",
  "key4": "r19BR7nQL72yrbTEKTuzhCX5BgiyYCvn3G8j1AeiWfyqjGYmvqJtCmmadiZMqH48UYz16bEUYoUzyEg94yJi37A",
  "key5": "66BMvDatThGvyWrc4TbZQBT32HETWyMDuTUQWFcoRYeYx7whaViE33zKfUhVH4dWHPheg9Lh7iFaMisKf5Nx2eAL",
  "key6": "5C5WozLqDRJvQ645NTJLqzkbFXjkqf7xPeXg6sXU3bDPh8yArPBhJ8jL56RKRjmnfcDevUZgbpF6UC976nFyEHhM",
  "key7": "662ERdB8T6mHuAcUPkrzj2mswuUaNv3k6CGZs4gmNrHbhTXRuQoLEwnDLDGfG9HaEpAm4uWsoMjALtD3KwUEiecZ",
  "key8": "3CqYkuwSJaVBEk2jCcQUp89nicZdvyNmQpNt1p5jC4CpEeygeKkPEynXKxgm3mxBQ9EVLNT7A1t48kt5TVUczift",
  "key9": "3BVhFqSSZHcQbQxswaJJrqeMRPvCwMcQsjLsm7CmKgx85b1jpNEW3DxMkprrDCVSRcU8V21iU2BW3SVtyRnKVLbX",
  "key10": "2n4QvdNZTK2QTAmPejD8YUJB85NGR17SdQANcHYrJRTrNhsWzconFJjYVL23oCthCUSfp1RErai48GrkG5r4SisZ",
  "key11": "2Unys2F29Zy5WVgwzpa2Jr2m3x8VkesLzFQqxMxXgmSqMjhV5NZiY3Sn6qtVhSCPyfZDC6QXkm4QzV945o7atA56",
  "key12": "42AnAyx62gMrqQxGL6QmVp73bom6sxqpRr9L167DtUvUTE584qP4pHGthNcZTsTA64LnbXqvgA474PVqMsZFBsfa",
  "key13": "3tEFUaMvDi7UTY7vj3Y9rnhevHVvGp4mdEFrDYNY5TEBNwFdQJ2gkMPkYze9QwQLHjDVaeGHGD8ku71ZsAfQS39i",
  "key14": "R65ViRDMXhPVNngfRi1e4ZJoTaU8w9ct5tFPh6jDCuv1AXk2BZ2WqaFqUhV6FtazE7Lv7F8X3SzKhWcS4xjNZug",
  "key15": "3JbgJJteTqyGxs5XfVQKnk9dpCeujMMLjRw5uoBKvWNKdKgmKFzMjErNoucB1w5bjZyabuhMikgo4kgwaX4Wrtzy",
  "key16": "31kYzToT4Yn9GWRt21BumvWDhK3d9vqU81x9LfoyLsBZbZMi6WenjgfkiyMMLL3m9px1qte7dNdzaeD9Sgqb79Yj",
  "key17": "J9s4vMAQkyBLxQxUiQYRWDGTKHstJtbwGMscg1M6g6RwX9c9Q9uKAVfjteVUo3E27DHHUufu2xBP2JkTNBaBgvY",
  "key18": "4cQLpjDiHoDTFPgVANbzNAkJdA3m6hVEhDzLdBbL3SapVjcm6jiBcgSYFKxPSvERmzDTsFucG2mf26fDpm1X7sED",
  "key19": "2wsci5N2rpXSXs1xP5mdiWJR1ZYmyyLfukbbAAEqcim5A6XFd7UYeKw4Qc4j4rZCDkxzCQXTAWY11tU8d8qJkM17",
  "key20": "FdgBmDZxpPeQLbH84CxuWPxJUvecpfQiwgtHbY1uqgY6WKDqNzWwy9hZVyKF5pVZnFox3f6o5HQnV9wYPt6wtDt",
  "key21": "4jem33zaSSHiCSSL7FWSNMXvKFiSTDiNQicZxbhrBp11NocQG2nFBaqmWV4jwGKfYW6FvYArjqVzTNfyVcbRLZH6",
  "key22": "2uZtEHZ7aHJYfca8RhWerZBnbdEfje4uf2dw9tZNeHNHrNs76Wf939JdprmKjEwT3AerjgE85gahpjSCR456yR5J",
  "key23": "5dEimHKBcHT6cBcgr6GCSyBsUtoiJBR3osqydax8A3sqim8cQMs3Myvt8jEdS2TkQqRZ8YFp8ezNDgsaZk2LDeL7",
  "key24": "4ChSADFteyghrk4UAxjV8r1fGi8PePQjrwUYKiJLGFTHjVUMgXCEZUtL2ujXo7bpFPyUwLDE9yS4vHPaHCr9rHHq",
  "key25": "zuCLL8sdkukmo4cKXJ5BF9ZUKzymiq3dr3yLox88f64Py6fPh1FYHT94JZRpiJu8uGdN7fqA4s7JEHgWJpLQ5Fq",
  "key26": "2UBrkwt5KydejyGKuTvVWRmPu6sitkKp1RK35NFRu638nWLnK2jjC9kgDxbnp5MBqckyvJvQPSEhWreiiGW3MN3K",
  "key27": "wbhLuPNqpmYfJdUsKjykcffK3S9JYU46EjPu95VDPVMni3Sjbo4YFLQxEjnfE6kqM9YizYyeShjgGkhHG2aUaxC",
  "key28": "2YaxXijGJvNUuMij7KpdY7zAzJPnoZLDHFKXJJCoKr564wuzDZ2SHEy9BQ8ZwifFbih5BSCRTA6mLKYhmVRHxaLU",
  "key29": "5sFte1aNYNgcej8z74mB2HmgB5ghxX1bLuKfENXMuvCmKCabkWyrGaCJ8pAHdzhWCiaYZjojjJM1aruV7H5yKnQL",
  "key30": "322jsMcAiQ9Fm1ggYUfWqwbWcuTmYMaEyJvbarDjYPe8LrHNjHDVuwcG6FCZp9oJdzJyC6JAAzoGJQFNMGPp8D3q",
  "key31": "5PhyA8comrwyEzn6tjJYV2HBnw5ir16QEBeks1Suxf3mNKKwY6BTKwvUaR2ZZNvTNNBZEdPEwbXzQJdH5J3R42Tc",
  "key32": "4d676Mzbqecvt62GDNX72qcmt9StU1zMqwtNVAXgev6hkaXuBi3nQ6muhf3AWZ1sTWqQW1yGP6JXzSCo4E8rpzsP",
  "key33": "uwacnp1VRDfYaybn7ZaUfzSJcieoRSpJonGsXTCn6DTxT2eoyCp31GmjE134SjjzeQBUCcrEwCuYP9pS51Asomm",
  "key34": "5pK6iztca4pXvb3syVbKx9Ug3XyKckEvnfF6cTWAfoueJmWsqCf11SxNvYtfdAhrbsEB2j6BtHnSKQDfeAHuuexT"
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
