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
    "3vXQyhYGD3UzgN6m8hKbpBfkEg5UHwhZG6DpzX6tYaQUGbVMjPY1yTY2MLqKUxSzaA2vfBB569uF45D6ZGev7QTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wCiPzg158R8GqwG6hkf34SzaCezXR5fDEnw4xPkNLvDqgSVubkshePsc9XUxPzUkmx3bBhrNa8caLvraK2fyeGF",
  "key1": "428jbwtdDUEj7Y29hEXSVqE9k6StSLtT5Lt7WqASNAtZ49CDJAYgz1d7yz6XSntk2EkZtT1aUNC1SXBmc29NWopB",
  "key2": "2yREVC5Pq8fJ73dkVdwveV9fewaHAtD6zcGb1u1HPGgbAPmQNAn6TdUjDCeR5sU2cmb4BKMsm1MTuwx49Xvn6Tz3",
  "key3": "42Yu761T9rTdBX2LefUYq1Ap3KaHdgHBdAEmTC5mfyKLSX6YtLrxSyZqR1PrKsX419mWbABHZe4UGiCft8jGCseq",
  "key4": "mrRAE2Awpi3Qf3537VDnEsKmjpV7dx3QENyuRk24nnRGiN5nSJbsu5Vw3HgATMDDqK8Zx8WFP5wm9UbqvjhkKqW",
  "key5": "2DjbF4B6uBWorDXuPvitBgu3PwE3USKbY3PHSsi8vRGwpsVb986phfeiB98rBYhiGiaPE94fa5sTEhkYHCHTGQQy",
  "key6": "3Qx8WKLc2cR6XQKPiVYi6AAA2btLMsVu4VRVAozyAZq8iC3rnrQhYBFc8ALUCj2PVtD1L1pyAi8CEAi2cxm1bGdT",
  "key7": "3QpZpVHrw5YREyPBz9mSgFTB3rWG1DAAqBdkMdryi7gqLNWYfgrGA4ASoZh1kEuuJqkmX3UbYoEW6y6Tnzr4BxvM",
  "key8": "3phSKpHsFgKMhqTBAZmsEheTPFWmcBEsG84SMcaPnFK9PwfModV8TWMzMsEkenFNaJcgK1GyAMFmoYdryugCbVwM",
  "key9": "5G19m6fyNMRdzEpRoZBxUt5N1HGgVyGsgKLooe2Q4y5vdri19bFdqjhKtLvxiHNAwJBXr4X5wp92amCGUR1KkPxW",
  "key10": "5qtcVZPTMdzFFaDaVahbVoSwRhVfcy3LQ1PSJaJzpYKpe6dowV7HQHrxcTURdNbUe3CZu83aV7ZRUR5Byp1snMKJ",
  "key11": "5ZMRaF3aNLazcgbtjo2iaruAHdJgtWvcGtYj7MMK9GPfS5X3pi8vCYZFgSx7jf1C2raYBXxPeQarYKhUyyDU2XWZ",
  "key12": "2CNnKMFUr3pMdRbaspuYJ7A9sCUBHFaGjV4s6kk8Cgcb3WXtbKpyxw6FrgRM5arQqyi8ZkSyBBfrSGiKkCzG1hnN",
  "key13": "2ceirLygX2jxiARbNDd1mernBUBxDn2NfAgerXwM1goomjgj4aDg5xEThhNbXDsqcUBAnSwA6NCRuRBx6PBvycy2",
  "key14": "5yoGEmxwvvBMRtBU1Sm9fwuvid9edQ8WPoLrMgseUJs3QQ5zrx3EKUeAUqo8dCWsJDmDs6SDyzmWCTm9t3CzUg7k",
  "key15": "38BbUpUuAaJfGiGhMTqd3EW3FAKnGTpvxRibHE9VRfcfacUGv7dgw7mh54fRAutrhBxecpS1Yvb1DMJLdVyCEYB5",
  "key16": "2bvS6MU9pWdrFGwbbyVNcdcnKRhGssWstiFjm66Mh5FPfEmS7kNxdE7pL2Dt5NcafDd8ZwTdqaz5gn9ehmr4XSXo",
  "key17": "3PV1oLd6TXzvGYL5B4t16uVNqsRDECKE6MfCrQMEzgTeafdY9Ddjo4JdBgLgELeMDrQAqbNyT7Y41hpJQJ9m7som",
  "key18": "3t1mDfrNYaRreTq5QwKtsrRDu1zWHLj3VKpCVNnmm5tg9i1JvmULjLfH4GYwgtDaLuH2Q4CqLPpMLV88nRcL3MWv",
  "key19": "FUBaXi7j5R3paWce93ThwvQesiMnN8wGC2HpXRwqSQdYYLbFtJ9kM7BiGrqgMXEEcJWvo9MMMyvUK5dkmP4WkkV",
  "key20": "2GRNTZif1QH3ZaR9HPbcK5VW6Z34hiCP24o1hequ7Gy53hzhqy87NaRe8uwQW8MMCFBudA4m7L4Cvv6Bm5auHrSf",
  "key21": "yiT6Gvc2VSUxrrYmv4gzPvzZT56fqjcTAQzrSpsp8592hqhmLaHFiR7AEspj6mYvgZk2GscH6N8xrUouMK7mvpf",
  "key22": "5W71Rb7vwm8qaRxwQTi6v5UxGPkZg3oMUZW4LLgRXcJK9N4AReZSmC35WopvXTAuvp2KifXHascszDdNUd2oLfxX",
  "key23": "44F4LPcvDsDu6WnDFhrkBYwmJHHeQZeUTKwBnLEVY9fvcC1vjDFUdqbJYJ1hKhzG1XbnwdsNEpt2Kh9ecxPKzX7V",
  "key24": "23rwurEwSGFPerujcJixaipfhnRh5raPg4JXxKqHHt2xApvh2wjn1vbwbn6YKEhRCTsm8byvYV9k21oESw3KdDvK",
  "key25": "fSoF8PjysPcLNE8p4gJU1ThpWNFL58P4cD8e58F2tesgbZQKC4uX2X4gymJpPu2B4EVJjz3Z5Tgv8KEQB2Z1GpR",
  "key26": "3fKQ5ap4MM6BHtXsxC6mkFvHhg7Ku7BUhfDPt5DV1UrV98hQGcyQQZsWT2UypnpjxemwaD5RT7RMP8TC4r3YCRNh",
  "key27": "3kACgAVQiYvzjf5crqZt3CBZosuLo8YxbuQg9vpeTpsuf8BL9XDDfDwPLLbMCV5y4ZZzrxswJjaCD5ptwQSiqCvw",
  "key28": "HxhsazXAAkZrffXH2i8uJz9sgKdgyDjhQa673ifuk8Svqdm7PTekmNWHXqc8ZV9yyrwNi74UrrNCXDPeQWnJ2t2",
  "key29": "5jVP6fJHC4u8CVE7zUGqBffwXja6xti1SqCAvaLU7yAekipGWRjjGpjp1MuS3ag1qaJkSju4pnjhfHKbYNxKzuGT",
  "key30": "52np1XaGDTpLK2vSQcT4uYPkoys5PmkaCsbtZu8xu11QAbRzAKCiYwgHQm8xxKAXfn5PPrUznau99SHaASarGpqw",
  "key31": "2ZbFDb6xuqV3DS8bbavBCRfzURhS2SB8Pgd1L8m2GPXggSUycxLoGBsvs8UDBYvbXvH9VsnXG9yXR2BRmCnZ91fq",
  "key32": "3vmTTmF1aF4Y8ZiejvA1Vbv5A1eR9KaWHzJnmNUjuZtoVhBReGtAxPkD9Lr5BDNBcerea1pjGgkR8bLzqXZXsiTX",
  "key33": "8kzX7pWq3PnUjCRGPF9pbDywJhaceQf4k4tNMWy2uVzrbSd5yTwbYFDkrP7uQd9ppj8FAtuT5oV7mkWzZZ9DZge",
  "key34": "3caz64co3bjaK1xLmMHkAcjANbJvGzaVPF596M5oqmaBfjT9VvPrnezW1sJ6epW5J16qGPx9sTNEsBUjp2hWMZ57",
  "key35": "51GXDHeFpAw4W7oeknKAP5AVh4tV8ZuXdjGSAYrD2q5bJB5j7sHFEwTQJauvqP1V6LH4RYBcA1Uas1Hu68rrUFuv",
  "key36": "2emPeuXNinPJ3VcsvKT88Ktz4BS6v1StYus7DWDtnWcU1ggigoUCsXahHHDGUZELgU6tKGoaqsn8TNs41GYCp2mM",
  "key37": "62FofhPmsjuQ4uVfDKuUvHnxzkq7Ckh9o2bkYQMTCgt89Xi7XxBKAR3y5wtWFDiuRVTjKtYHdYSkYyabuejq6iv8",
  "key38": "3EL9pzFHT3qRnrYoNiUqMDumKaj4Bzy55x26ewcr3rPYptmLwFTGd34q2kwBZCXvvfXj8TRDjfm1whvpUtJzjRtU",
  "key39": "4CeETjbQvUGQgQ7w867WjEUb5TKyfstUL3CwBVP9uYVo2YskwanNpbnTbr47CzxshJp7aYrwpusq4zcyHLjSQXdK",
  "key40": "57AwC5H2mht56JdMTiLJbmnCZdKzpeg1RxR5GXrjQiZk2S6DFcXZuyNtvVSLXEoe4J4HXEoaoYgpz7q9XpbXTsfQ",
  "key41": "659z5v9DFrgXUbF3Y7QaFAVFHSaxH1wxYHuppstuZ1xdhDnqjffh4BHbUM6m9aFq4GnCGE6XaXF1MWSwx5GabAba",
  "key42": "59DRZd3Hz3GukXsi8G7ENAvkCDFZoMTzaBDfkoX4YNRrrgHsfjq5E3vgHmY7FDEvD8ZZwimsXiKB2JX7F5QpK4GX",
  "key43": "3agqWM6u1HJ9HJpH5pQtvrAZ9o9nWfC54vDGea3Ve65K8potY3E4jn1C8LHr3d53Wb2PBpM2dn5KVxWYSUN32hzC",
  "key44": "jn4x8756PXJeyv6z5mUXgCEZ65wK39sYTcbTmTdRajtmew9omqBgb84cdh9gs45dJGShWqBkhku6pGqRrLNGJeG",
  "key45": "2s1Rj6v48tnSrqw1co6GKAQ9u9cyWtA2vAkEorF6oPBrYqVHhw75yJXUQ8GoxEY3gh76SRprjawejBk1Ngruxsov",
  "key46": "2CyrgrXJaZRoab4pTqeVzQ9ajvKpRUND1JEQZuGmevMpT6YZtzsMkFrmqh6GkuF3x2xem9XAF1NviDRbsxigRWvc",
  "key47": "2C5wZ6ZCHHPZEGqfTd8jUegn8qGrTBmsFqH3mcPKwScpuLrCrorg2cBrkrYsdxVvoEsHRanpefzqf13pkQwv6Ex6",
  "key48": "3HXiL4jjAxGJPx8FQXKmzyeXkDHbh8QCdUoEspV9he5ye2fTtVwjej9LBLLVbWveUKj4fXXXiPbw2WUacvtYT6QG",
  "key49": "3nHfHK5to9CYz1Tci2wgUxYFnDUzz9GpnwUWtAioQUUG3NzQzEt2eS2vro3o8GCc7DEcLBnJRCzcRtXZgWMda7eL"
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
