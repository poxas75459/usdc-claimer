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
    "4m5dDafwELvz53tTe6du8ErmMR5DWyZ8TXvLMtXb1CxXLrnTgrvxLs59zYgkCxGNULp8sUvwDARmhvyMHi7uPqCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LWz6wmWFPu9tX8gzmxogb8Zsyt1MwXqhetWMLw1LHvkHBX51hRA8K2B6qhbmJvf6uJDtaCwBU6WyPP6gK7Hjy2a",
  "key1": "2iopca6JTeKpQmLyAmYr53W4dPLtpLoYaJxWqmBPkRfHSjRrjV4nBBFYvywoR4GVcZYUrNUYEUeBUV4c6CAunB43",
  "key2": "3TBEeEncshwGSvUo35MY1om7ywcM5uHaa5yt3izqf59W2tNVSufuw9ngD3SUrxuJP1f6yNJGXv6nXXsVpXP1qxVN",
  "key3": "5B9i3pPpVok6C6hoAecM96hRRfD34enTxo2ZF7A31sHD6RLfpmNF4f2EiF8HcodqopmwkEC4qYu1z8TyWuo3GHyP",
  "key4": "sHS2dJfLpxFJ8D4kY3V6vqedoda9Ctjyd8wGDuhepbBCF5nLsykT5nJnMn8DUm762wFhRrXazx3Vbq1WAxHAVuo",
  "key5": "3Bo1pWvkVH9TwWrKhW2xhowTDE6R3f1gLoHdyMKaxTYJgpjhj4ywsWutGzybXRGQLikfk1KxTp1Cd2DEaJ5Qmf9B",
  "key6": "2hQkZCRtNj2vZGBbXq9HoAebLhuwLtSs1iRk7UW6Fwu3mHgBwnUuqx7Q6HPUTuwUry6rbpaDoqnVWPM1Y3Uojim4",
  "key7": "8AqGXpjtogJVArECG5Ngxh8dKWZG3kRehisr4SNPF8AD4qTAFuNYaEBijuXpLzyBCSeQS1se1hrCDupyTzmYmjQ",
  "key8": "5oiF6BR32v6QLAFw5kuh7wBctVSezvEBvUNdTiqAMWu84tHQGR1SAbbNNMJRoPdrEUVJVBLBo5fAHg2G8bWPGciD",
  "key9": "tDoT1DTFodyynkEbozcscxWHaxmRn51naPuFHWbPGsuXz96v87YX8UuKPpURUZNehpo41BSpLcoEncDib7Z3U5r",
  "key10": "5qWjEFM9eTRhSsjxLavtiTWwQMxAKHZrAWd5CZUfNRggUn2dN7efics5iyfjgFfYn6CpmLY6ACUD2E3khpmBenmE",
  "key11": "8E3gPezpvxW3wXGoFaNAPcBZFThT38AtjfrAMUH5McNLo1AoifTV1gCvGn2R4JEc6JyYkKxBKm9rU8E6Rheohwd",
  "key12": "o8LGTPVh41JqdfvStUkPy7yVVCMK1e5uFa1ZGfwq2ZcdfY8RNnEreLYJzcHFaQye6rq3YfV9rVcomd2pJ1Ehsf1",
  "key13": "2mVif3d1Hb1adJXVoqaUfpQy2zCk9BArTGiUF7QHJBhfYQ2rfMQDddDAhzMRPT69yifqFE7Bc1sDjbQhM2fQVHCz",
  "key14": "VeCoEArBwqGZ2WwgedkaA1F7raRf1Yyyvso19tdBQyeXrYkSiZKebA1sq5UuaH8wsPVGGUze88D4FWG9tPtb5DE",
  "key15": "3YfkzQmBatWyhN99kz2xS6K9sEDdMgNxVk47ooqsqd89f4QihF6w9W9wXVoYxC7Ns7vRcWsyCvRvijrvYDu3FU3A",
  "key16": "3seoAVZbahzdNk4jkmqHMD2eJNu87hmxcoWcFW78Yuj5Rx2x7a6uHHvwqDFWHCJBRA7p5Hx47ExsgC7ZzoKeMbqZ",
  "key17": "3JT9dPa89MmxobdmSbCjwupurX7s77P7hmBuRUzPEb9uEaTMEQMozq27g98KBhCitgV4ZDHokdxSncAUK2Eo2qxJ",
  "key18": "5Fbv6f4ggGkGaSJY9vuVtBK8aQJwyD7xf7ad26TQGJcU5xcZzqVeVrzYjPg2Adrf443JrEsjm5tLjdtUVWNFKUDX",
  "key19": "uYr4i2mtuF9KyCNbez9WhuRQXi8Dv125Bi28whQj86herZKkqXyMLAYB4jb8DJn8hSnLMwZJCWdZhJLVNANqn3F",
  "key20": "621du8rpcmDUJsNSvcTYpm6zdraC2dHewCwt2MuN4N52yy5eoLybHzf8AJREa1eHmefFrXQGnqqPZYBjGBS4SLKu",
  "key21": "2T9FUoJfaW1faCnVvt8qLPvvY4qSyRZZNxuheoumgP1dK37Rx58s2VxXpNbTkNbXVHoQ1LkBWNgZbGitzj1qV2rL",
  "key22": "5fKzGpc45HeBkuCnpwV49f8cT1887FBmzAgLaCCtPUhowJR7RfeRumc7a5z1kU9LxF8H3ugHVBJmCCBLAVWGxxUp",
  "key23": "Xg82tMm3w8g3QYJCBvCk3H9xu2c4Qzqrc6Kb8iB3NQqF7dgVm3rfPdeFP47yUpFmSRtyGeZSz8iQmeVamZLvMUr",
  "key24": "59CRwKit1SUNhdgoLYgxsvzhDtKEM9vYnb4NGHfUo6VN9EpHMpoMutgRZSg1Ld3BD3AznKxtXXQ6f4BFVTxwWk1d",
  "key25": "d1i71dLuYQSL7RjiEmeuKQUuDXWYyRzmeLzGKMnRAttNEwKvAdMmbie7qVHrHTrpYBRh3KJ8gAU8y28b3uUissU",
  "key26": "f8YjNPBLEmKKVVusZPY27wkpXfTkRRMUNBwpqTSfis7akrNTsER3PV2PJSkMnyfMogQeF4QM3na9JmdFAJtHa1U",
  "key27": "3a7Y7GDR1PQ8HBn6Nk99ZmEBjQwNSgxfMMp9nLf7Pivxakcb8bUnBVSUFb9pM91kV1sQ2g8qjpnNXpDxMTziRbRz",
  "key28": "67d5YgXNVe1PRKUwLDeuBMB1Z6EZFEsV5oJb1GE9tHs8G4S8jY6aoqeQWBiafLXjj4APnsN2YdV1FGCyRzjmgYZ9",
  "key29": "5ZcjtVe5PhTVVEDKd3S5C5MRABceVo2Je2xSYqf28PqMSJg2bvv8YhRg3oTqiG37hGbSaLfU1wvnNcozihV9nuEx",
  "key30": "tt6NcYK7Yojkr6naTThktngefQfjdfTNY9vMYydWWvjfsN23unxkN2v26R5bwTRgTyicXeYCEiZULyYqJKZKz86",
  "key31": "4PCWKxRDgwceJKSoHVL3oA72fSPYTtQQhZBTZY5iEZiA57K4jZLsTDWSsY6rh9y69ZR3wFBqtULeesTEsnVkMYjg",
  "key32": "VWbii3XmopoCD8MacW75sWSK5EfjCWWPWJg4AQjSptQ1VnudAah4KaociZqZj7ETL8hRAKhYumE57x2mSGxWMJZ",
  "key33": "3HZ6DAbs5q9gem1vLpyV9gNvGKwj9Apybq4t8ZY4QVybnk8pQBRTFqCKb5T6gAy4t1DQWd3F763PzCSsC96uQ2yK",
  "key34": "5Lxk8X5aboewXCA7CcqZi2dV1zSsC1JYex17GjwbBt1Gfu5bsumo6NBo2DTWTKLJHFivJqinsRi5WzUv2pJrNAaL",
  "key35": "3DxpubTdPB1quc3pxY36U5n4n41SWLvpnWG3x1GuyKBMCUawfuJ8Ms6LVMWfU7426gDnyUWLK9gcDYnLQmhu2yS5",
  "key36": "4kQSaJVBT5aP5NGibYUX8qNAvnNeWkDCLzZXJwbUSzYMr7aGDRdf6Dt5Ae8YH9YzkZzBWfQLtAgVa1woYNbffA6d",
  "key37": "3EYDcyMre5nzrnu8MS1gbA8rsYavftfXCPS7u5tnAWH4ayvJv9MZrbLvtqGweZMJXTKGTow7hJK9h6oC6iSEXAgJ",
  "key38": "2TaN7HTfVLCYsJZa2oDaPoSiRiGsz4wWnTFzBXpC9xaFMnCQV9LwWDSxBe789ecF2B1nM6u8KeLHWYohMcd4u8bp",
  "key39": "2ymtYrDSzo87vMrqqeKHj9fUjYuoKf6fKLVYZZWQahNrgPLhcLukj9ziAEtGe7yHxJ9ngy7xj68M5K2SChs975dc",
  "key40": "2761AaT2kfBvFz3LHuQ1HdCbt2QKAZvvQ2M97DtGnchzLF242JuDht93FgWbHV4173HH9Jnr8Qn1iZYkkkREvtMA",
  "key41": "5UywY1EGPiT7uKcaNXndrEGvfbffAzPccdLBRudu4zfqYc8e7nhp84bhgyi2Q64VB9bFGBjMZERFJojtfXiozuK8",
  "key42": "2PTjQx6kAraRc1tfF1QafTxSu3JpJxoYj5mqUj1qYjZjx13RGPQDPrJj7RYHoZX45U7c2gE58HgWF32nTFCtryna",
  "key43": "4D1zYmupYbAReJJqsooJf3RwHa5CTwuxDArMXT7iRg3J94vJpDeVXE8nwkZt4GYDsGqnsRYhNn2LZSK3af5WaYVD",
  "key44": "4ZDh395ziDDCRWgkNuZ1XDMeYQDNZSDTSmXAredy82NFR1bENX1rSh6Yv2S9ysakhQKfhjyUzf3H7yVKoPXBD772",
  "key45": "5BVQeD8iorpk883ewNSPCK9AcAGN5iftwsuggcrbqJQacspzHtYZpurTYVokvCeMUdyh1yadmFgu2jM3Fm3LjhKh",
  "key46": "jd4Va1VXQr6EFFre4QtdUX3xV9BfQ7qoRGHdHmYBcsegi4rxPemnakWXY7E2XQftXrJZ2UDNr8ZLk3fmEGGY6KQ",
  "key47": "4rCD4N8a55e8CSKGTcS9QbG1HiMGUvy9M4j5ReAfZ2Jhfowa77PAHr9x4zfbiT4cyqu32Z3A53ceCkZpqgyEmuuG"
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
