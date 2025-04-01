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
    "4CREGhPWMixWXSNwwrggsauuDWBSd53HUrtNShyzAB6r2juvpMEkQJPLyebkspGNnNnjMgpJ96fBULQfQdnXeuEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vQrncdQgyc6E42nxANvGnG3nFLrQ9SDnXhJvzuTVd4rKjrZHaKNsYmc5WoggGzWrjaYUe5MHDEvHT4VMwUCEq4f",
  "key1": "w4q8e4Cv2kiP8GkFyYH2cRcKPK7qAswMvB6kNpJuaQensDQ85pftkp9XTEDEFuVVqEMxf99cLzwygGRvfLVLmSH",
  "key2": "2YsYdk3vBKR6qZqTFB74q45WM7WtNLeG6ZEws3uSxWzjBcYYuBaporNrE3HscbckWMW6oiNfTQYFgiVCMXBrdMkD",
  "key3": "2BGkeEuSEEdn4z3wWNgGiSNeZQr2T5xjHP6rHjKhDaiycQXJToXnXQW6FYoyb4bvbJXH5mzn7T2qnnCbuoPeFuKk",
  "key4": "22RrJwyBjPgxFH7xL8dsuL23y6WRmBBcU5P8NEVWP7hPJmD6UwC1Dz58Xb8AyZi9VbSUE35cNecRZaBAgaCQgAbc",
  "key5": "4M46Ackrga21XQD1DU3XxqpuM5KeeKNC3vfVb2iLGRgdXAPwTTk7xpsPusUHDvVx4pBm6RXqHaFCBMMyiZbCpPe9",
  "key6": "5j52P2FwcbRym7D9twMwKP4zq8tVonW9ZLV8zhRkeKC1GBqW21AVX6QZsBBsCLBBbRnc1g6nrTDm4Q9MDHLYzqrF",
  "key7": "5R2ejdnRS3kjRZg9rokrsHRBUYT7LFnaD6bpSbqcWwBBH3zHocdSb3f1yqp7dkaUbQXzYquYWL71pdbQi7h2uH4W",
  "key8": "5YScvZLXetwuS9duJS3kUFvsk1UkJnwGEXPRgXbvR3pPtPQx8ADZsEJLdwSzcHJMRPDHK6eakXV6Xg9jwFKjRhFp",
  "key9": "23SwQrixMYSB2Tya3YZMp7ec7DVvRZgoAuSj14zys2x8KbNbcGNZ5JFmWjzw6Pw9YEAzQwaLhtXKDvhbai5RM8UU",
  "key10": "2rxitq5vuEmdyhiMCEWZAk6WyWhphEgNvMLnsjbYCKvF18ontjGCLAnRKJrnK4EgRqxQMemGwcyx7Dgj4chNoCi5",
  "key11": "3cUmvntxftV3AaPD4zjqB4dht8RV9HySrf7cDWwryJ6cheia14bMBDKeAWxH1m1kUHqh1fhHzg14hmBfp3nZvYo7",
  "key12": "4G5cyAApyKa2e7NPoY7ZKAKkXVat5t99vZkYZnNPPhoYApYziqDEZwYsSSoZVAs7zQPKDVFKb6PtM9mdRMbn5nyo",
  "key13": "3WYiEMF6hZfQPxVjPUujvKikqG1CC4QLkQHb1X9ZRviWscXLYMAqcTcxvkc5pisdm9bHRcbiyS5D8FUzqESMiVAz",
  "key14": "4Jw8PiUt5pctyxWdeWPBp79WW1zYWkgpU1fS8CA3aGZKA3ZNVEKYT2tu4imc3YLazRhDxujcr8a2dXzAo4V2W8Ni",
  "key15": "4WnbNUQU1pk3jgJXxeRhPAFmNSDjDfuEVraqmikh38nZtMFMbihKzvTjGpWuPpG9TSxxHYxd2jC6R7PFahMLt6Ro",
  "key16": "4y88cBvt6SaErtZSHxa9rFH5TgmSry5JSV86noCoSS8zgWAGA7te74DGD3aSgoY5EVQQPDwr6mCG6DMupSats58F",
  "key17": "4G7ji647o2EcFhu9TLR8heUNqkhGuL4fXuadF9bbNo7fF19Wo7qB7hFdkjFB2hx9sENZvc8N1BcTi1mWQ7rAYz14",
  "key18": "5Gus6gvQVPRyfcyp84AbvSpC3e4dZsRhBZmPeW8TFfcR4oZyjM1JQLK1K1VVXEkmVnVV6nxheedwDXV5yLngUn79",
  "key19": "3x9cqxfC8h4w9V4h7osLuBVpb6mGbfzCX1mBNKxKdvn2hpgg4hAiX5EJyq7sZ4VctcyHVh94Z6YvWpGEzpoLQhPq",
  "key20": "29Qmudx1bwV3cEyTHpZauribZXW2CjGMMf1YkUzgUkUBe453bnTd3AaJxU1Fnf2jx8Hn1dWTiUpdUfnLyJGJyN2x",
  "key21": "2JUZaRHixkQgSqntLoWsZGQParNnXYs5Rd2QBdY15oyth8Lu2dEJRABfwMeK23tZPByXzy4LoZsu2Jy6kaXfFXeN",
  "key22": "3tPFeNyZgvqd8VEBRWSTM2n7TkBbsrgU32iVeqRhxuAj5ge2ZRGqAcH6Aybf8rJ4qqiTp2BfACQrDRMxKHRUduqp",
  "key23": "5jscMFn1yWeHuBPVDLtkJCSKi1N67EyuGJrRcvj8VLmn3YetLcmztPaNsEapaVPcy5amSReKm6KMNUK6CaMTRwNh",
  "key24": "2UMpdGcZqMa2noRM3yYydxTnwoQx9ZPoTyDhTpSMGcsM7GB9vECooNkKU6dNxzHv36wbGtMoBWQMBgKweZHxCdgw",
  "key25": "3hCDkVoVZAcn6WQ4UbBDzZWuH78g5jAe8QjqvFQfoisUmRejiDTAV8yegYLQPUnwTxooCohBzc7CxVz6Rnu4QBB9",
  "key26": "37Tk1huY7MN91Sj97CkkKgpUBGjnk3dRje5EHGnxeRwAC3oxFzwvbZKqBmV7YjLx1RquR3G8tEtJLQkU3H9XG3rG",
  "key27": "39gPz8xtbPQ4GZa7tgy1yuz7cwTEaCbNCG5e4KNxnupthi8QC1VzkVqMNyTwX2iK32CyZ5MStdgjH3NFZNQacC97",
  "key28": "4dsRK9u8bVkoyaP9ushQPDxtLLR7cpMuWP5VcseFrdA2jQac52C9ui35gPvzVAEkkgRkUe2Uh8dtBaeiPPcbgjr5",
  "key29": "5K54xKj517fSW6RtKoxZ3Ri8RCvwgZvRhomipdJk9h4r84FcFA3npAcskisSpPoF3ryRkjhrmR2TVjCVPXaT5pcN",
  "key30": "MgCdfPhLdAo7Tth8ntgycDoj8ih5hS2Ud86DDboCtw9Pkxxto5yPTxqW96LKSA5rXqvE6PJkRaXygZa1J916A69",
  "key31": "3aC7JEsWV6bonJefdpG98XDtM6idtVMCsvCue27nBCnsgWuf68goLMfENE4yAfqYFtwo3XWYhsiVd4KSXHypuY79",
  "key32": "3J93P8AeEq1MbSr3H9RSLA4En4yc4MYL2DEmJEem7uDDjuneJU7bnYmitwvmShDEdSJvBrJvxvF7FCdvqQjp2WB4",
  "key33": "49Gqoq8Q3dRu7uBCXJ73x6Wqx9AdNTbnkcoBYDLVqRBVPbnAFuSWa3J2uHitPC6eumEu6ZECEzjNJQStyMNfjgLt",
  "key34": "4sPVpqKwYbhUb1egaE47ea76AdtEyN62uK49MoQnBS723pFjVtmQqCJkrfKLp8Mta8b9WJhDzi9UwFVSQds8Gs5Z",
  "key35": "5K9Y7TFKftU8mgsonLN2M3QgehgBDoFhmm86VMuCQSdudzDm4Aj6i9PdSPUPMp4Gbvx7qFyTgJPmHWxyYXwaRpoA",
  "key36": "3E6Wvp7hGYcLoXZZ4N6mQ4FJvLjASyfBAUPG75sNCQhQ7aKi4275BAASbppLD1JKQVi3TKK8CUeWxko3GUmYQTzC",
  "key37": "4Tptntkk6xJEfATXXukCAfNep8q5vyPxv64tMYNmFTwQMUt8FYfxsUurha4spt8K2oKADzd1CCcNTDyFk5KYzJ8",
  "key38": "56ugTeMX6StDBy3NDZpDFAU7zxVy1R6NtXPU27c5X55rgLH2mKsCAj1nFTY9wmB2AbYfhCvAp69QzCt9Hmpb23ed",
  "key39": "4hvzQGwzyNxndeW72hWJwpvzho7PkXSB9ndsxEDNhcij5byauwqY6qCnFX69guX9nT2neubrxjJfoecAFArae4Tf",
  "key40": "4XcQYY43UzDMdx2A8Zn9g8PYjcxRgeqqhg1urX19cb2ckdLBfeT6UzfVQt5UFHVrTXeHfSGZiQ4Cjk8KU4uD9Xjm",
  "key41": "pAUoEDe7uGT7JR1fqpeTe3mrPmSaaUT2JLjsuRghH2Gm2peBSnyfm66xyu7txL8ZtccxPxZF3XZQhnoUckEa7Qi",
  "key42": "35WDbmhHLHT3R2xfWUHRFdqb1KVKcy4wwm1anmwDjfrMeCc7XNF4j5aHjVwnwEhcJDSvL4qKqg92r82kKh3pqJwQ",
  "key43": "3SqjjimwT4RqJGYJPmic6AyXa7EevzmH49YgEVcYVDDzX7jZCttjNCMMSnLjSuz9d425M8upoaNzFVdufCWp7bia",
  "key44": "5YA2iLdVeVUz8TDP3VP9BZZdLEJQddwKReg8yDr8DoWAPfTgjWUTkRsKuuHTNKbyjsGn4hmbtHgBft3gVUL6pfQj",
  "key45": "3RmQNQqC3LvDDr5afkKNhrQsuqgiCNSs3eHg8TbmKGritqwUcHX8wV1KgScpCfsouXTZEBS5kipaPSPQesF9o8pu",
  "key46": "41qB6hTDR9LtB8NbfPYez8Rq5Wfms89WVK7iKVZuHFDuCF7CfzaxTCoPFMBzSQQWz75piYYPKBHaAqtdYoPKaRG9",
  "key47": "qgr4surcQqLVWJsN7GMUVQrg1NY3L8Cb3qhAN7UJze23krFm6Q2HWNgCn5WoDkQkJ5e4PQh4Y4v39x4jNLXJVpw",
  "key48": "3E4MBtkbmf5dN4KSbtrfLYRbUM2yvQ9VgjdyUUzQPZpuNrgAZ2Kubu5TZX3fReACdfNfnd5iuoV1Mb5DWXhxWcpC"
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
