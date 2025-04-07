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
    "5Tz5A73Pz6CVtS26QY5YkYB8UaRwZ9TVHQbDNA2899Ky3onErpce6FKw72VWUhjvzAYQdBqqZQwiMLx3xSxARBED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bv2vVwuZvhU6UsooRMLKbUinmz7fQfa3JiMsyrru4ey6jQRWRNrAryYCPwXF3oxfDTFjg6N2FC6iuY4oWkhGaLM",
  "key1": "2LUDiGNYHbX6kXXSnKE358MBk2wfA6DqHHWpAJbiQZyqts3pTFn7EFteGD4MVDRYboeFUTQVwrVSRA4t4e3PkfcH",
  "key2": "2e6XchzpB8sS3JFamwXDLhWaVLsvZ3zLKp7nojFQ7dWCPSSG4sXNMPmzqFhqyJdmPnLREvBwgKvAnPjF7mSYVUp3",
  "key3": "3BAiG4JzaFgcoX6kufFUG7pZ2kTwX5UBMurHZeCgek8CeJhbMtoWrfWfS1cM2EKSk6NKEzaraeddocwd9huySzEd",
  "key4": "3mtTRSBWw2BQSkUroG6E22GvNZs1ieWDoQSBc4fjXxr5nxgvvKjrLjKZVNUZAwrSByChCW2nZuYkuMpzKsYnBXQY",
  "key5": "5oADCDKs3MfqorWt7P1rJNAoRH35prSybuEqvfBiAYBzXpDtWHCNwg92JRRm7XZbugCLmTy9KFxQcBrCRgcP3tYK",
  "key6": "3GDbQXfxNwjLLvrhZW89wazCNotoYHKqGofKc8UxgirG6KPtCgk8gpSy7TSJmANyzrcnTL5h6iuA7DSLrpApmhxQ",
  "key7": "y8rjrvQFZi8GEjvPHjrY9fzoSxySK3VQEYu32krZrH75swWcnvv4SzFrn1weuZ7CfaeKc3Fno2FAJH9jTVtXot4",
  "key8": "4B64zZdMnMN6qHM1Rr2jakLm1XKQBWDcLbeZUd2Z3RsWWnL5fXDq2JAkRc1MkYdsB7NoMMqmcr5VNHDAbbtDZrMj",
  "key9": "63ytL98wpiBnZFegTYSnocTfEM6c6gRRksMQZUwW1nFG77HLbNhvVJs9gDva2hDPJefYhzXkkpCZZMjSERKEA7Hh",
  "key10": "5hFmfZJ7j3qGdKcMEYHy6iygcZDPK9dtMJ5pmHahkGbEGGBk8BAdK4gWHDEsY1tvoSPRFpqnaZzCSBPPv6qWHz7y",
  "key11": "38kahMcL5TTG4WajdSemmsu5ccAdNEAx28N5rJrfBG2bcK5eEhQeVsiEZyuciSzFf3LkEeb9ysBMegEJekVpceFe",
  "key12": "59qWBgr5Z4jQ6ejSVQWABnasPxeS55HfTHJpL4hNF4ZU65FSML8BakG6nQDns9qr9PvC9jmd5MqXCU2sQKd5os1A",
  "key13": "3k5JbwKvuBhyYgtqzyALWxxfwN3U5btS6AADhcLC2A6e1V4wmknRCHMXVBcbqXLybYhwhZyyNt8UUB4dBNBAZ1FV",
  "key14": "aaqXSiNeUJEDRwCBHrpmD6ccDxFSy9dEBHxbS3qYaQmZTajYjafMXRn68fvi1pMtYukySatQbcyr4ffqE2b1Rho",
  "key15": "Cxgd3BmyBFsKCJUnfnpUbbN8wCeVrcytYPdpbgJGaCQaMffk6drra6qDatd9iQXkSrZMw3uK35iBGXj47UJaTSw",
  "key16": "2ez6Gj6zxmWUkz635jdzYh2ArAduR4EyGN4UD5awcrvi7BWEG6azcyG149rmhcaeKiG4yKNr4woSKDwPsWGBjffy",
  "key17": "5tPuGKMCfcRuBwmGUx9wT7sxYrYP8r9rZ5rCSj8rvPmUgj7kKJASx9JMvS5W4J5oATMutW5J1eRtrsViUH2xMj6o",
  "key18": "2FczS3kexsvgRmUJSXF1pDKFqYLcktXkAiELvhEVPxGvEv3Dx3oaPScmE9WkpDjJcdDU4nHw51vhDYNBvkxT8Gjt",
  "key19": "HUf8dzmFXojwMGqCWDsz5CGqFpZ3VPVAgsRSafXuiWYyX5baXBjJJzQ4ZDwe4NNCrGSjAhEYJ2P7mqT4PRJ6UAe",
  "key20": "u3PkrXXmG7xwkCrgqNvpuDGBE45vhgSYKWbB58K2hbn4CFKMzpmzfYL714mqHnkM3JQEXbLVt8Cr42qJNfwL1sD",
  "key21": "2ZRhoj74DQjmeohSQnNgeeqeZtGzyBT9ekN78PPuUwb5F4i8rkkQ1tcrZBXAtodfxB9jo6iK4Bxv8QBFBb5oCAbp",
  "key22": "y6Cqnk1os7VDbjAuKY4BxnFi5bWKCtcr6Wa9D2yXTkn1owwEQ2V7TZSQAqisbbhZ7q6DrrrrZxyMWPoqxQRbg7w",
  "key23": "47ZcDXcMaf5mnkPi2UWqxWTocUcfqEaPyFYfY98Je2ssLRu3g3ugy4hK2Zc3vc5QzUq4bBBhVmbF57Ud3AvBXufH",
  "key24": "61wVyw7kokqc3c44DjLLvHgSBKeZfwvbxvGsQgACrPATZFTRavzMHa8iCb45Jc5jX9zoXCYq9mYpZ4C2tTs8g9FH",
  "key25": "5fvL3XyE6jGsFnnd9zESU57uvKq73BzdVwQNE1tNnhnMfvudBxrihDyfyjSnp4sqoqoGccqDbxmoABHqSVjSwJx3",
  "key26": "5jt8VbuDygwavAHFdnuarkz6MENHVqLAKGjCD22HxNMtkcVcbRDHmZGKmzLc6xeiiEifcEb97D8im3SQ1DiY1PvC",
  "key27": "CDQ2EuA78nh84FtfBdjSNxQLFzeQYfh2w2y5yLrseTbKpuje5q9m3SJJZu5B3TQ57EXgb2AdxzN9HdUwh3cZDWU",
  "key28": "4kWFTccXNZzA15pqztjHxecp92iBKaMPtFYatmzhVefQe9E6uxRLQ3SU7k11fjNTaMPs65tCKPd2usgdQTrc3ufq",
  "key29": "rD2pzxkzkGmcgQXdewMQ7y1h4Foea5MXNofBHZ8uZ1tYtR6GDUWmzcBEBx52Kv4uK2NLav1sgfWmhUBNEPFWRXS",
  "key30": "BseKuE8MJw92VjcJdZpX4ZUhFcrvQvKTLyuGZgi9Kr77riaH8b97jLwGWgCVZNRLxiMwPgHYffbYzt9i7QepQsn",
  "key31": "5R8VCojpjXZ2WmCLTVYZVD3ZMbAzpH6HqTzzo65YmzCMxeTrPuBegdUcpBbYLHqBtr2UsfhT813C4BaTtwTZCwMQ",
  "key32": "5QKxpDKdP3BBX1LxJmA82CZPxzHYHcEQwatDmKQb6i5gg6Yo9kEWGBJc8wiAJ2kSCRVp9DFjM77uJEQgkbkBPRKn",
  "key33": "2SiUyRCfNaosNrs3rFtiKT2RMSViaWVPaDfNwMVMkosYFLCSDMzSvuaUdK6MTSS7wHrLVPQQYHrVp51VywdaY5zX",
  "key34": "61RB3NxzEiK8ajd2oiyjiVbiL9qxdgo4roRnwLjBifykju3G4wimeKfKnPiqY2CxZfQ9EHUEJXAx2FZL9pabwKED",
  "key35": "3buAS6GYA5eRhM7pDzsrD9vDGFY9S1WGzAtkZaCEaK8xirwneHGG9rFZHkrvcNVfNBNqnVcnR9bo8h1ZsZzhu2bi",
  "key36": "2NZ7Pdmvq9wXiBbRYF3aaUjF3eQhopoP4Du8tTLMAv9NHt1oP76TLfueZZFNm5HgTr232fQHiDu99DRUbvEPkdqy",
  "key37": "4G4gUqo451PG6ddwXd6mwwWHfKHT8Aj8jxpmRCvmhMhY5d5bps2jCUX37MSRgwJTqiZEXGar8BrxZRgrE2qNNTc8",
  "key38": "5cvuJQbFYvumJ9wU95u8g8nPXdbAjsckgC2H5huxqh8AfR7s2xacrJPrL9bvA5JvTfrsnGcyjfJnvwXHizhxTY21",
  "key39": "47VQdfmMt8jb5a6sgvzAvpBzScZjvFGcsw3qKRnFsDWpdjRmerMn2e7zimWoDimvhTimsoQw7AnnYykqvzA4Fzwz",
  "key40": "4DEt2Z7DxiyiXXoGaofefmSuvygErKgbzprNoP55D2heUgc9X6dUY4GwRDXjjgwHahWVSWziw653hA9sY2yn7Ltg",
  "key41": "BKz9ffBfKPUzPJaNd7t7Z2sLYskkQpaN9h9pkcbmfwQPSAvAjkBfje9zwCBksqJGaTQNN822fTvg7LmRu1HdGqM",
  "key42": "5HVWvwwj91mtSpAaNqsaFCFGWAUUxXsFZAe5uRa536qszGkzXo98HqfrYU3Fvysyx8w7w39nnGfEj9EGwkvAwcYw",
  "key43": "eKAAiqKnndNJndiffsUJDmmGNh3D9szZMs7VTCrK8FS2Po2BGzHtC75iuRoM2mPEDYB53kMpNEjbCnvKZsD8xCA",
  "key44": "494yjbPEmHvJMvnNbRFrEF696mFsm51zGHxutMd9Lx4r1tfzL3EmMuxuPezX5yMsCE22qMWEpktg5poM9gs1zyBc",
  "key45": "2wnd4EZfwLyux5V7eu4xFuiH6VbVrMWX2BZLFKWvEYLEyD7Pbdi31tARackEHL8BCGAxLaem8M9XkdB4LoNMSfS2",
  "key46": "5Eon5K8X3RTAxbdBYroRWU7PCB4wb3CgvWxMZT5XZMAp2oxkdufydEW2q7stUQbZaoG3essBPzjpSvfT7CobiPmA",
  "key47": "54tc8BmzEw9VCGHaKWSoch4nNedEVoy4tmefmyYs7JNhgp4Pb9zhFoTXWqvhao1jWc4DAxNhaW8RWpxbEPfRCBWj",
  "key48": "5GAbHYpKUYDbmsHXPSEDL8EmTTS76TWzztMwCnnA4HcHsCkYQudV2ogv8jNMmYqg1BSPMK9JJvDzE4iMRLGnJfoA"
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
