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
    "5pYQnUV1j1r4FKynZps1Jw24YC1h4gyumC8zhr2HTi3ySoES1pABzm4Y2N1aRwKc8pEfhat2QBHCVxXcWrpaKpSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SGFvarZyjjLUFYLR8mVcgG56tB9vps4xYmSDz5V8xMvJoHUHDpLHsJ6r11mb7AkcLbwTcoKGmDgNA8byuVste92",
  "key1": "4FvJ8VFyXbWYjJRB3mopZUUdrvxziRXJqz3bkJyFBCHzYAQswnB2CXkdvTPQZg38aWgN86uhCCh4XiLMyDDFEq7w",
  "key2": "5fqA5BkkqZMF8vZQeEnVYUyvLVQon5wDUFYX5ChGbU44JBZWZppVRtB86z2NWNFdoE7kxpqfCc8Zdtn65C5cbcuJ",
  "key3": "3oJgW8UzmwHAdLHSPyEimMUyXAwYD4iPHtYuqCp6bVF5Bt1vcK2j891EHQyxnHkUFBn4ESBBb854yU6cvKqQNBth",
  "key4": "5uHq31vWmADHPSCoDED9cwEHbbgS1bXU4UM9FuYqfhaVPD5tZuxuXjwvU4GeMPBVgMFFkD31Va6CG6gw9gTKPuZU",
  "key5": "2GPV9wvQ86bm4dr2SaGz6cMPVJr7Z9LPBbyowsmVDrWaKCfDgL587vHsNnTLB6ihQ88WoeHNAx5nkYQBhWNisiHM",
  "key6": "45W1wXPWqhmAXJvszTS1rmX3iHmiFYbRcjU99Kv4sVZofhSEc9QFEYYxqqh3JyEP4CicodASiHRLPN6Lvve7Kb7W",
  "key7": "3ptjExCFTh7gjwVkoScc9CnMnbH8sSfPj98ky4fSPvBtxDVNVmNmsi7PNRRQFPeVwdUhhsxrZiYvukDxTCxTzz3J",
  "key8": "4WG7Bb6meSvt1qD1qRB4cFFWQ1sAsQLM9vQ23733tQv34hhrBfLD4Gmruj8oV8MU6trDuD6WaYBGfXeaD53cNSpi",
  "key9": "24XD6jeiGqrSaFKfqZz4GY9aknn5jGfGNWh1kCZF6iDqA7TYWXpFsDtbaPvF7A8RpRLYdvGDAdjT1MrZobHQAUYs",
  "key10": "DnCXdivHAkPdC3Mo6hJXp3E1PUFg1RiH2qwVKbZJKmhkvRsQiBkv7J6NttmPCsuvcuLn2EuR9BNw4W3CDDizYcq",
  "key11": "2eju2rmwHySAmHG7HYwU9kBPkcGpStBB1L65BKmqESMBV4SKph2uU1JPeqERK7qHJ49jXnL6eVMsNyi9q6ZdxxQ6",
  "key12": "7sZ94VU43DPhT7gE2oeugP5hvennHK9wKntbg9FSTpoSazaWwSpkfejhbQjxSytstDrGUzCsiWG8W7qJnQdPLyK",
  "key13": "2Nh3G1MNEAi1ZsnfSHuQSLJ46X9NjsJvMNMH8Kk1hAyX6X5tDfQYJe6TjP2J35znPD5RJw99nDfLZWB7rhbLVcuH",
  "key14": "23qmJNf7SDfdQVPyCjK2MDRQoLQFt1RsqWHCDaArFaYeWC2xh5v9i1F29PeR1hr8GVYhSkV2LCAZeQ1PdXt16Ghc",
  "key15": "5ofTFqQeRdtgmdj4TUECSh6tGDXymRTLpUmrmdirURPkbDwfz1gZ7ucFaeamXa5dtiJSTjrQnnUvsPqGetTjErn8",
  "key16": "j5pbKJZPqKtztCUamR3QRABpQNmdAUZLSECtyYuhSU9KFNV2BynQQ6BMEGeCTikRU4NXEJQXFuw5M8HyieeJ9hs",
  "key17": "59Noxg6cZ187TMXR8PE5uiGAisiMYxye5MEWjcPVipgZ94TzMbAvHpkghFke9F86d7WgG9tjS5Ln3yuDfacmvD1s",
  "key18": "3tXds1QXyBorwJt1vNSWBfCUtj88MeidKeDxg5VHMguRAZeas68mRRQWyhabNiriuBknZJvfzCAiqUJSjPf2wgSF",
  "key19": "3hSigWdEk7wGEx65zVssWFquRYgzGoaJjN1TtopvfYwRAn4dH4pskoMC3ixgWGiUp8cM3DQpeUGgxw8CYumdmBu6",
  "key20": "2gFtUhwSEerbbXNSmTo7ipamRjKP8tUMWe1Thu3euHskHkhyL3sh3NvXBuS2dM3opUwwK3e22uUk3UtjPkNNHEMp",
  "key21": "2wi7MnKAN8qjgo9T1kAEA7Y8qnTd9x38tWLvEXjwkuofhKZLLWVmTebDam18MPfLJYp3Z4Lpz5nQKv9XsARAz9cM",
  "key22": "2GfjqLzTNohqpYdxUDUqeK8agdjzCcFcydBkoViaqmXYivr5M6g4Td3tNKZuffPfek7uqG2d5t2xtv77FXjX98pL",
  "key23": "2dpheCikMpyQWetgTmxuQxchNAXovDr9xS86CC3rP8s5EFU4Dsv5cCDxA334v9wPCbpoPHycTexgdNaFFVxuiobk",
  "key24": "49d3tr9ZfRtc1AAYdJGF1sjgsJj9ybArtem2XUEGjcs79bAgq17yfa8HC39sTLSYFLLdD1HqQDnbdKVnsLcNxBAi",
  "key25": "4pgmeihXY3w838nPE5HNVLsQhbb5a3UdNPw7fKY1PgQBSbrNRKrhTGP6K83fSxzfaZAHQjHiQALfSSbKMSnP9iHn",
  "key26": "54qWUApyjiKY1GbedsE9PJZqNA8886fcbGuNy9ujP7hUHhRx3fPjWsywrYKD8Vgt619e5fW3yn7dAxx9taTW1cXg",
  "key27": "2YT71fQ4ULqUrR15EbAZiwKrWQ77boiEsV7trbXeXhhq7C6v9Ad1bT5sC9rxJZkU2fZWcv27MxJk4LfZ7xjgBJSw",
  "key28": "3pkVdhZj1N4K1vmEYu4ujiBYWaojHAsDVdG7aqPUzwbvYviMKN2DijTDxm2TV7DFrhhTJ2FYzvErfeMLWWbHkzHY",
  "key29": "3GbuDuDidSxWmxivdDkNGGzEaZRKcCw3aaybamdEq1r1knkjnu5fFFc1idQQNaW61Niqt6Ys3WpQdSArr5deajoL",
  "key30": "3T1a2mfHBNQdKYtndFmwQVcH3LBgwBzn6spWXre2yh68BCEXQECW3yQnvNEH3ZeLX7spyDxHCsizgScnnmADrgsL",
  "key31": "4BgDwur9vFGWJKj78QrfRoBU8GtKxX4nUAuoEa9Cv58fT9i8ZkwLxb9yC3Q13jRTSxiQxFrxNoyhgg59KZ2bJAku",
  "key32": "5bE88BXBsdJ3QfknH2uhj6NsiSQu67EXb2exZdXQt2QcSZaDQ2sLvczt8WxaznK97fs51HhkvEPdzFrKBDjbGBjk",
  "key33": "5Ai75bFHncgsHK82VBuvXyPzaerRFythbBzR9PiWMb3cfqgbXjSXGPdJHgQ3pS61fuqeinWrFrV8k4ERrbQidRrW",
  "key34": "3aZPGa6R2yFWJrWKX4A9pZ75abuvpTSgug3M5enKCqAgoVrJ9bGgRy4Wcvkm6am2FXybkTC35idEqwASSeY5y5c",
  "key35": "2ixhJR2SHnC2fCuENBgoUxLaERkstMpphn7q8zXq2oUvTaJs8zsdmL4JSgMygaB9bXRrhd33XYjDNG3SdqqoLWrd",
  "key36": "4XTMkY2ndxwzpD74uWaZghagwLweMk3AaJrwQWNEwcFqUjNQ5WcA7Cma7qAPjJZGw6URx3feya2M9dfrsSYK8MtF",
  "key37": "4EL7Fe5yeLEgUc3v1hY4GXp9FV87uJ2PmvAkmsjJ9ghNubbUC7nahamk6r7n7PivxKhANGPWPteuU9YaU8wAbwx",
  "key38": "UJDEnvL9gPRKT1FWyXwTRYCFUhEjE9C9U7WhFYfRG11qheSx9bS7j7t4ZHBUabVxTC5H9ZzuMaVMqFokjA695z3",
  "key39": "2tiUcPJJEe4kjkofRWX97mgaHiSKG5Zifhcv7xRJutVSQfzRH6BthtBHgvtpVDdYmJBSXQ1hD7FPyiQyLH8uYo8G",
  "key40": "39mSj5DrEDpbw4whkJTUW7tPUTPw6axZsxdKa8ifHN2961s1LbGERkFQ5zotE4hm4k7F9QrE34SaQiBTyj5yxyqM",
  "key41": "2aGETw2MzR9aD9qtaYgeyaSXiuyWqCqNuhz5YDVVoruuReS2hHwPFEHcUUNVDSkVwZXsdttEcjCF3EmcEWqJVpQ5",
  "key42": "4TzLye8hemyUsSfFiFo3nzrQqpUVWu43jSSbY57Hze6DohmnwDXTHT92xv1byBZjscCSBw2rRXoRBVgXRJuHBzZm",
  "key43": "4bMsApQt2giXhbKqSrV8wiMMSb6iAWDzbxw7Z8gXB3drjsLUy9Swotkrukg2WSENq2tGR3kgMyhCsW9ZnwW7kJKX",
  "key44": "4sGrs5BiHiMcfjdzVKEX2cfhRNAiSErgZPB3uwNqSk4aeBNabYotro1yHF4kmppZU5TvrsLQw94uf2M5cep3zk8N",
  "key45": "3NS4NwLYn1TWc4uqhkJGwhhJq8hSppiJTGUfeQxhnbJcooJfqi8oZGXXt2hDbhBZERwHgks8xmQgecW48ryVgtv2",
  "key46": "2AsNfKbS5QP595sWRTi8FrNH5fDC7uf2e1LBJRVsLfV88smSqkQTHg6u8m3fLFz4e7nGox3sUsaUTyBgVxabaVyG"
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
