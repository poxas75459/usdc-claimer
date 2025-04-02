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
    "649WFhWTL8zypyEQGNYixCrJh5qxWgoWETReaK477FawsXbVL2WpiTvjLcX5yMKS9ybLhoSHugCD7b4wFnsPwHyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BMESZ783JTyhGYxcZbQ45JLKYDhQ6m2fiXwJTJyvDbQCVYqCPZuNW2sd8forn7Rj5ovobwoBFVTdtLP1zQqAQC7",
  "key1": "29Ki2aZJ6iaHPQJWkZ5sFsKCGEjHpBQPfHp25xsUUUyfRVSWLeKC4mcjZze91kFLunqPL2JNhJYRTvSoDA1EXumE",
  "key2": "3jcJDGULoCnRtnvw2jBaMnFyUqa7CHaYwyxAN3xnXive7JrmuSsLzckUQbE63jNtM74pM2v87gaNtHq8smmHJhy6",
  "key3": "2v46bXL7ejHq4JnDR3xmnR8EJDBarftVahtgfUkAyVLLnGaLRoxRKhqwPVvQeo8wzcN1cSzDFwNpexUw6c4sDKrn",
  "key4": "5D68L1ppfogZy8Zff8tiViUpqj9U4ukXpiw6mZdLAAWpwExNWzuzGqsRa67n5nN4oQUQtsdvX2Cic8DQxSzKRAjg",
  "key5": "3PrHxo9wHmgV5iSHPywh7DrtiYFdQQsqLtCyUS9dJuqDNiU4wQqMswS6EL17hmNPGM5886EfDbD131FdwH8ahLkb",
  "key6": "4Cgrjhv4s289hsvmn43NJ3SMgtiWtMbgK3Q5cwLHbtU8fVn2L1FuSadM8FApuL4TdgR1GUbEoyNNH8EYDF5CdyD7",
  "key7": "2FbKtvCJgU78AYUYjmvnodamRhSQqXxKMJEqw3fc1uCewhmbKLYLYk4KKgvbPBbKDkeZ3SMhEQ3vPe2ZFYMDtx4q",
  "key8": "2KwSPnGXFY3zrqSYVJFDCe37kRDPZqfWLTJTqLHtAUG8MykZFbDBba7fkXKAYWaKE1RBR2LYHFqgdsEBZF4mj5qa",
  "key9": "5BoZQVppXPjnJb88mxEYpkXYsyZcTkKqrgCmzoM9gFXvBX8o92gpYqXL4JqwTFLZgjC1qS4ZJSyVkQ9fTSMuoeJR",
  "key10": "4Gefktb4YK1jMeJ1oPPhnutY1qj6eY2jxBK6FZ5VeXLS46T3jTn8K3GQwFG3nCPwpUqVE4HqTzgJ14WbjbSuSa5D",
  "key11": "uyaoFivh7mpuemQa82jFRPtk3684JwTgT1bYXHJqkMuZPr5HraGGFTAdeKyh71Q2GXP2XtD33a9qf9h8rQjQtUD",
  "key12": "TrxvQBYHN7ZAL4X145Cub4hL5csediHz68rkw5YXysJXcPUSkvoWiyWNaUmu42eUrs9sLs71vWWKZExk7eHqLEd",
  "key13": "4QWZxgS53TST4Q29me9VXq21itbWosJSuXbf6YMQJBvH7z99bo1wDknMEPN8TSnVTMC5QtKdHbuqACvfSi3KFXDQ",
  "key14": "4V9aqmrxPy5bZRBamVi32wqkFmhzKF1ogk2HSu5cKs4b2zGGhqQD5S8DoB6vM22jyXUyr7P3z99dVKDnKLzpKt1G",
  "key15": "1M5mhyHqefhP8kLtDieNyRsANjJmeKNfKm6gtcfV7L3zzJrdU9ynZ96Uc5hxcvBvVZ1BYrbccAaZbCmchn46S4n",
  "key16": "2Vvfuee3f9ihTMLPdhTnV6vaxcRz3cdVaCM6mye8pGmfRxbj89DrfhysJjEZBNZG8vGKXVEDUzDYTD9otHNbrgEi",
  "key17": "8UX73QmzLvXeaQq6AGNHqVtXYh9DCNmGmTQnCPWPDsEzY3ZEHtCqGdkj1DadwgMLB8BdKgWPYRyZMjZn2gmkpUs",
  "key18": "Fs9rWy3MFpuLYdpZos4HJC37W8hiNChvHBYdBLK4CAF8vWoTJ6DctwTsZz6BA6vCKt7oNLHXBoyhKPAKPuiYs9N",
  "key19": "4Aw2dL8S4SofLBWgGpuUNnDxwxH43mdccqyUyF2pJu1qUPyqUXFnNFGBWqtx3fjE4cqGrNCA95n4S81wMGvoQ54k",
  "key20": "4ayAifMGbExEgL4nz5FGiNAQoHH7LzciL23WczzXHq8rVj8pu5iULhFxAGfShJn9wiR1YZTUJKXQhJ3PiCau3Noe",
  "key21": "2jrwkiE2EU53ZXHVFhaCsW3qU8kfyNaTGTNuFm38tLDbtXJfPVmoYvANaetbLDy12wAd9Bfp2bkJ7yA5C4VzYdwg",
  "key22": "2JNaTMXhaJYhDszQYZK2Rd5oPYbqDdyFSxdXz7T6LtyT8MvW7d5WNumnvtVkCseQND7qotG9jJJCYwHfd2ye1rB9",
  "key23": "wG52WMpgjAJYKggGmgGBqUUddzZw25k5pPembtP2bdjGZMgv8K29PQv1wcuAEz3ShBkPErEjFjCPJxy6u95ZEbt",
  "key24": "KupMNMwSqjWxjmrRdh8UPbJFzuCLFPyhD8aqa3t8mgfQP8aAmP5Q66BxpWVU87ofN1XSnUcUM13Gcg6ygDSd4dD",
  "key25": "bw2q7zH6ezpLw5DG3XJpMLJ3DgjJA5FkjRefwNn8rrptp7dSVJXxvv26KFtYQYThGYRqzWdwSSMApMesgdy5oWW",
  "key26": "2ySxUcupbsim2LSQrvNM3Ss53apCUwtRKA6TR81FC18w5ms4QHwG7a9E4CqH5GuXosqFVeueHd73aSqouTkQ3ivq",
  "key27": "hVwriM7rz8NXdaMhF4wcmdByyMAT778JWvgMXTTCN3gydZMF4SseCngbDMjXjNFrnyKU18Fxo19AiFEet4hCApi",
  "key28": "5kFPrrhCavtSwGBwFgaHqjYitpPSCCL1g37hqoyP8qxPkx48t8uGSGERiSCatzvqcbMYCzGQexhQQY3VTG7xbKMp",
  "key29": "CXvfxBkDjP5V1HqHfp56YpKAY8FG5LtJU9B6fYbAh6TfVRJCgV7fqBoysHfNygbbVWKsef1W7pKBCc9kKqGzfW1",
  "key30": "QCxADb6Bb94JmEDuFtBBJgJjUSetq7dVAeDVbJhUVZKeK9vtRxUydHe6gNQLyP9P7xhwHtBfGEJ8bLvwajvrCQR",
  "key31": "3JhCXdJEumjMFfTbPsRAPEkZtswmRsrc1kG991j8RjzDcbGx1CrgkZqXkBLkGR1eCEV42ysRAqbP4iKPyGbk8FLB",
  "key32": "4n7fDMQSu8qdVa6mYcRzaXhbGMyq3SUQ1yN8msUoAJu7yq5HsqZJAtJUdJ6vWCcHHLcjRbvnxMbsScHdUaV3qZLB",
  "key33": "2Y4G5ecy3UTD774ttfohKa7ZLLBDSxMfsUwtGf2BHnUEH7v8QVA2x2BdWjLceX2BCQwbupFdZbfeh4VznnYKXTEv",
  "key34": "3VaSNtycx39UVTMqrK1NBqb3JLfrrB8w4sYXEH2is8WKUgrjHKPBDnuebiNg3GbrWiG74A3QYKA8Q5QWqj2MwYCv",
  "key35": "3ooWkddVfAStSVUVUf8q45QqkmRhH5gnc1Uak2zWYyzybkQhuRZNBQDXTwK4xUVHYDQ6i1zk4xyL9JVS8HWyE89J",
  "key36": "X3mnov12foxMD2K93T6jS5jMXewmppAqLXQxJs6cPMJhQk4nqWwCH2pwq65daS6X7Rg7eTH8m3Bt4WGL1zYjk6s",
  "key37": "5QTf95UWPSDLLdFKwqngnJ85JgysW2Tcr2Q7AoQ6bY1LeZy9Lej6A7L9oZJmDnheHa2ZmzJkJRjwC1KcWVN9FBXZ",
  "key38": "kLYt37TtNKU98dnvZXNrWboz1w61NZXRgM1vwTdbJvabWYZFrZgGHYvarW5fdZiMBpGokRvHCNLUXUJqAtfXb5C",
  "key39": "4yZRdvQJGKehytLAigCsVbVdTHABZZSbdoimKMGwVUMGgi1HsciHb93W4keoBHWFHwzomaxgTE17k2UcQfd9wXLQ",
  "key40": "5pnytTTp2d1VAKoUguVLQmA5icXcKpFeRbXRGJA6cYbzGrLmFerg2nmiMsoUehiX1YxuHudDBMUwtVEBT3w9VcV4",
  "key41": "3HxhTzQ6zQap64uLV4pxTbxCcQ7haQAJBVE5gouoMimzYuPiCjbf1P5eAh5ckBQ3THYCSF8wu5cLxyAsD5tCGjnQ",
  "key42": "4ZaTes1K7RM54Hm9prnHmHrh3TzW79vZpqUQszN9J4zspRNd4vUySJ4EzRmsZSyERseHcnmHs8CVQ5mBS6CjHqtJ",
  "key43": "54Vn7gKhcPEsfb6eH9DtpdMHCbo2FJ1ojfsC34LZ4p9fv7ay4g7gtrFpESciYSs7ae84kZT68Nry3B6wBRABKXes",
  "key44": "66USqH13bpFkpxchjxULbG2txN8r15ZB7xMiY3anEuC6LFfKrnd3qTUMnxeoarhxNfgkaF4YnNpgUuWkpprkcctQ"
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
