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
    "88SXEk6pF9eFBBDZ2izWj4QGKQ4u2XNEWtt6sDd2Q4QpAaXKxH1zhhqHdC9WakvbvbVbK3Cv1tjqceUmh9UuGWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wJ3su3SYifBEFZSetXDs23WUgnvazF9RsgkWL7ViFsQpMUz3EFpTNVBFgkCW7WCGCxERDbbpi15tEfGznXBzsmc",
  "key1": "4wyQQU95jakadqnv8QptEQXJ5hiuB8zvA3w5MDVbzxWEKmQvcwpBYNfKgVfo6TkozFweoK1nTMzsnLPA2X7TjSfS",
  "key2": "5EFd4nNK9UFLG3vySFUtSUL49iAug3jPHUsrijV8ACTuiZJmzPZJ9WLaavEXLXrdH4rfwrG1rBcVxfbHxnTCiB6x",
  "key3": "3pG5a44qahmUoudhXdKm7KS5djC19MEwAKzn4K9Y4oRvc3pnZsRPNdeTu1DANaHyAYSD9fDdMdYRNyHbg5vZhzEk",
  "key4": "3DGLWLb86ayL1GjiQ8QpPUSyMyvaeu28DKKHygmq5vvfnwH3n8Y943GJ67hCMYrBfp2yqet3pGj9V9wzRNYxFcXg",
  "key5": "4dahGXGk1aZzKsv4Q9evKcshDBUNxHU3hFgh3izCm7ZNEGx8bJM6mNx4h2182YWJU6dPBGS15uqQ4NrQpf3pyJoc",
  "key6": "2XBf7MnAt7bYWY8vVoGxTrTqKsvS2XzPWVxKbsKJdK5mjr647HgmDjCm8PjUsRi2uC8wR3UyV6ey4Qk4vKG44vXm",
  "key7": "5f3ACSfwDmxyMqSRTwPrMivPN21rDhKRindujcogsJp1ybcSJeFbnBihqciDxJSYSbQde41GazP94FWDseJiHfvN",
  "key8": "CyndUbdoHjQJk36QbcmPdM4FWTjQzyGznWu1JcKybW4Lcv188JuqAZh7Ky6yMQdP9tHdRUT38ajkKkznKDt1aWi",
  "key9": "3CYvV1Ab97c9PBZ57Rd9t4RJEVbRAHskcxdL7bDNq4b54NHiVXXmkkUhQDqeGgUjzomDE6cfpSME8tgDCFy6kU6N",
  "key10": "4mfAHgRKB177QPG7YHuzdiawYmeR6qP7A2vVymy3Yt52MWySUVRtiKCbLTKE3PrdGgnqZefKz8Wpoys4iVJWu4xB",
  "key11": "fVHdTdmPiib9FX3xYf45M2FTgHQ9LX2HCm8qaRmfAZ6bm3eSK8vHTwZF9kWEcq2zX4xj8jYGEsKkZ7MtQ7XKNci",
  "key12": "579ku3Yv2QvjtWa6WdM5Uw5Lk3DXCVrJbidntfTq12WhCC1c44D7cj9hstRy3fnCZBa4f3d5nepqURxJvWkJvNxn",
  "key13": "2cimJk1HiCFjTy1LAsfZFGgr4y7nfX5exmm2Z83HB7godrNuyoGSfmaXNQmTbVALvtwohDiXWJerKuVaeVKzCexP",
  "key14": "41Py5k8R9dJ1HP8MCYJuU59MkBXVXzZvRTUCfEnd9DpV3sYbxBbh2WUigLmaFj9C9uBTFn1n2Y3G7DtGHbq5V9xe",
  "key15": "4ZPctYAyre3XdswSLhLvtMJP5SLAdV2eRdeH9unuaR5ta82w9RR5Gx8CoffLrx2qJtiRtigFdyWsCjEtqSRWY8Wd",
  "key16": "4rtczQgDq5619d4CZ7p94vBJgKdiGZcZbNZVyx9K1S8v24nahfEXeYjxYJCHZSmY3AvK3KianmhWhUbJjCC7rcHE",
  "key17": "sx1FXVH6CEbfsQpi7mZXXeTkEv7LNr7W3WeHkRj5QJt9T8mTWUUkaA9NhLivZvBnC85QHpKezK8RFhkWNEmgyiT",
  "key18": "3WJLSyYRLh4gHUt57FbHb4EMFmFvctWKN71FnrpzncKrEXnbg5eqVETYQW1yRdzMKaAczb3AK28LntKD7CYUihsV",
  "key19": "5CtoASL5udErSDNAcRKBjxmdja4xvMhkVXjdqQU8itKJKwwHFDAVx3t4XmEdiSRkL981bfKxNbL9gKevKz3Hr6LH",
  "key20": "4AbPfbAH4B2pDKa3bj1N5HZ2PuJNVxp2pnJNzTd2LZ7E8DVrCT2kfJRZWjXt4AF3upZrTiKMydWH125QqtSMxyyG",
  "key21": "4PtMysTf8nfaFoZZHpX7tqLPNL6ipiMNxoPHoLUFeUDzU94YtQ8Sm9HY14BJu5NrFJY5qDhHeP7pgaz2SyNJcFg3",
  "key22": "53xebgAFbyagjUQk8Fzufmw8ezxJMw5yyPAHN7caksxdK3xfMz1RjEPPNqjAZXGR1VsRNKsc6v2dZWfwzg7hhSPE",
  "key23": "mRMfhF5epbWVewpPAZg2pESQh8PGsiCHp4rBAfD2NRuUaFixorEAYPsKfEPYJccMGjiRmfo2eHp8EwzLfjvg127",
  "key24": "24t4zUZCsTiRyUFaiLWqXNN7rjSihawnh64KNQ8k5GwcysrcY8yhoF4gD9YM5pbX3Sx7RJDgJ5xxc7gbK2aQjR2r",
  "key25": "XTEabiNH1js86VtPxsaoSVPXz3szAACnqGqx3jnKTJX5QahdWCUGTrLGQhaimfxKYLw2JzYFuPSDwmvcmt9FasM",
  "key26": "287kNbL2vS6n2dbm72ComrAnB2pkxK2yyLTXcFVJNvtCsbtwU5yC6NNiJs9TMuTyQZXAgvVgCXNox9EgoxAKCvQA",
  "key27": "3w5QaaWhof9Fbkqjwovm4PJYF83ubfafnFgV3sS8sGa7gEyctsyR7zwTTzwaWiQcfVpWKMUkS1jobJtEziYr12gT",
  "key28": "3fD7DDPaQWj42wZLoqEAh4Jdg1m9syZnddzbeiuV7Dy9RkrfKWtjXnnqNwwX2mzVw88dDGnoyjzupkwaSdASs76w",
  "key29": "2Zwv3TeD2mqpQ5bZ8Bb9x2Na7N4pVB3G1Hr91MaYTR4C7mZx1ajuKXtxMb9HwTq4vF2mdTuTtP1EMqcFyZbCxxZX",
  "key30": "4CwXYx6DfVfbFYmqJxicxpg7ex3jkfJL5rH2GD1bNT4Pv2pGZv4CPmu5cLu1v2a7DprM3mGPTJ7JvftiGVCzD2Ha",
  "key31": "4WDUaRCHVTzoiryrjx8vyYFdoG5ZTR2RgN7W2aVwEPYETBj1kkdQWDgGKXa2KaDcu3kXF21JzmRYRU9v35s5tqwq",
  "key32": "2vhnSAwc69U7TmbJrkL33Q5rmFKHqMXcs33pfC9xf6Tr1y3VYP9rvq15h3YYRkDYo92wP754rgZctF1V83KCQEzE",
  "key33": "3jxcMjjqwhBd3cYrkwFxkmnc7prFBTemS5KQiAsASDkf3hftEAc1WvppbuJwAdEoTP8Mvtt1dKc48JkGi4hKke8j",
  "key34": "4qEWgkL54EKP2i8sMb5iSCxJh2s2RPd1cnpMyMHte2e7FTyLfDAr2v4FgjStyGwGJ51VLwqzw9QZ4sjgGu5D3Nwq",
  "key35": "5ya1w5tQVvx4G1cPRkyqiBJ3Pit9ZxxoYErjHZB29hNy4EizfthrnkBeJQ2nvjG4NvLkniW8RQgJpDmn6MGToCmt",
  "key36": "fDAHYnaxHDtNiyfXaR4tFy1n3RtNJ22yw2vHbiaEYG1fGzKFUdq5bWt8D27ZHa3eFaQYDwFggYmuXVj5cVAADzP",
  "key37": "2tC7X1433QUW2t5zrm7jFGZHA61iUVdgSWqo3sfPBgF6G9L4xWfSReNufaZ4QHfA1ionAQXLqetsgXTWVJ6khyAG",
  "key38": "5uQv7T2M4zzgTXPrKXTzUQewJLiRspR7HEP8iiR3LPGo6tA66Hx22txd5137KaRGv2fuX6CCpuUD49xSYfbQjEN",
  "key39": "5fMsphiDzWUjrFwACES11Wp6u2zYrQYvJfh3FpK5zJeuUMqDDaRkjDQdg3xt5ehTa6197tNVzXWesU86Y5kvzeYg",
  "key40": "3RoSA5GeZqmNNz2BKwLw5Sjigp8qtJ3u6q9AhHdSukzFjce1C8C2qATiWpkyGnv3mhnFFJfoMHJLkfHKjCrEwjsm",
  "key41": "X7xmmS78SRfQCoBtzJmrWK58TvgarzUqnuXqCPnPgxvPEBLbDhhGuhxPANpUPjgHdLn3XymYHGv7HvQtsW2nzNG",
  "key42": "4zuuR5Biuo5SkCKaq9KiHWbbrrma3cM4pbv4qiGar3cjT3NGFkdNwprJGwjcnYpQFtrkj7L6y5y44o7XUpsyiYud",
  "key43": "2Ht4vYQqPiNvHJUR9Ntw3fAA5kh6iwSGch4bt8waYTi2viqHiBv7YPU8YQgEkPJ4C11tJYVQq9NaK5TMjrNV9dqN",
  "key44": "4qQnrPhW8KmXoMuVEffyeGjtRLacsFJTo8PP1VL5nTgfbra12j7kU69yaDTU468iAxbj26XXZPta2iBmzcMnxYLu",
  "key45": "5ngi3Gr8ZXyuPPaRwTQqQzRT8veo7V16qCuccBhzz7B7pZEA39dXkiw3UkG6QPmEyDHNdKievTucPyKpWV6kwWeb",
  "key46": "65cBJM2hBHth7dmnj6ksumKr9o8iRmxN2KPPfNEZ4JZ8b8ebE8txP5dUa7FUgiaSNRc6S2KUJn9oCoZAyn8FfyWb",
  "key47": "NwvVS4mzZ7rqN95HAogYSb2MgJZnYaMtywYzApjAD1f69PDQViY3zNLfKw1CGpLwXfVPUXuQUAWkwSxgGvUZWtM",
  "key48": "5ZtfGVA9JuTdkJtd8n9TcRfVPKxo37pj5gV6UcjQAgatjSReZYTmHFjdqhp44LBMTJZipqwR7E69kmgH7eDfQza9",
  "key49": "GbtuHwEk1DMzNC3GLuRdjFsZTtcdxtPsRntmF7cU6sWC7uQpSwhxsZKRMm1qP47oX58XxYS4urBkboHNWQDbdbF"
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
