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
    "4iMiVcyyLgeKsTUH96gkBMqDCGKJkuoYaF6vQsv5Bw8AAYQQgjK6mWSznhdS4JG18CBXiB3UkqAtq8tfsJi71fme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FokwaYYfPJ5P7g3Q3dnLPmPqRV8Ho47fco7Eza8AVq3q7Edv2ZexgepU9QfuegdWGNBwNNW7BfLSBH1jXWQ3qGg",
  "key1": "43vMmWoED1nRmGK3MaamaMpLHQVZGyCLQ7rUq2LoSvmyg4kkXVsPyhkPgFfuf6U5AVNmZNTi3Se3hRfV4Nqocd7j",
  "key2": "HgN6Vn66TiEc2W6k1k4su1M2ibaUXZtDXkvihEVnFgS14j1sGZPBD1BDJUjETPbDCuBE9R7TmBwVok7Gr7szstB",
  "key3": "4J8NCYKA33dFrbJgzhEpPmXe558R2XaBchLHwr8uWG4jHwNtV7ZakqjXBixabuDzJerSDVQNwmxhB895ZnNX5Y6R",
  "key4": "44q47rSxnEYB2kSAcXm455yyHg6hmMdPnhtFKqWc9XWJTKcGEi8oUNTnordLWpdGitEwdaYpRL8Aogd2WCN9kWiR",
  "key5": "3PXvuqLUJjNWySoU2HFVyCzGer1JFPe2aEwmwXrPdqpX9dWFGWuW1HiBvWD4J57r3ZaCJmcTvvb8GJajqxGszJbu",
  "key6": "2cVAsfgGNVo3iX24NxB7qM8Shx4bbYdeBuyS4D73bT3ocA4GDuuN24mPSaFZvoKjqib2FDi4ctMKysb8JGuBGWXp",
  "key7": "4RaJtXTu4ACRZWLtDWQPnaSKG2Bhn18RSLHhJaGvJPiWicahHp9p34aFCwBPYv3Q3Qb2jpCgZjLM1YfY96Y5fnc8",
  "key8": "3XTD7aTmvCKmBXftKEV47ZrpX3vAgFGMt3e5xYWvNciywTtiyrUoZ1F2imCsjExymuzSrcYFhWnSagySdB67EJzN",
  "key9": "4y4vUHLGwshdtQViYmjrUDuMwT5beKGrsJY9rQfsXqZihXmNBFTKKRrRMZW4EPwabLjyTJtxjmPvsi7hPKcgxSmU",
  "key10": "Kn8ckHegA6ZQ2LCKAVAebha6dNYeU1iUyeQ1kat7oWjrYzJLtNvjJSHdo3UxQTZCTCYtZwNpUFQer9eFKS5aEMC",
  "key11": "31wDXdWiTqz6orFjau25ggwg5FD15HkZHgu9bD7yMZL2czCxh2MbamUbxECXLk5sSp6qb8o8EHwv68jNDcm8FW9a",
  "key12": "eNSxCNaGusnAAmrbjEaWBjNB7XKe1d9F5EsajyxvrZ9cDRsDPYYW1uCwhuCSYw7CnufaVEznTNviF6ejUoQA3i7",
  "key13": "xmNvLK6iksagQNcUqbdAoEWDHGYXyxwMGmiaHCF9twvkoSYAtyyJyBcd4ystCt8cUz51c3GS2u8PMfedWnwcMRk",
  "key14": "Jzbjh2cheGQU6788qGMzbxCdSGgfc81EUCqjbBpTMiKRqtyizuCeAkdYiETPBgiARRxwTmS1GqqGbShBRDGGNpk",
  "key15": "2h8jdKG32vyk2AMfQCVt5Z94t2oKLzfbK11hBUDS7r2R7cpGwWFr3bfSYyLbPMMXykiGUGYYPcesTR78nAQgh1SF",
  "key16": "4WutKP2vNJzBTjtnBnKioLVEHfn5p5tZXDHz4c3oL5s7k9PYogqrFmeFqMAFRQP6itcCYhLJq8cKZytBPJnNsiQn",
  "key17": "2xsDHAm4N7NimB7XS3AekR3nEtfSjmuFnwaTjLGAXeJnwBrzHx3Phyfwcum5SMi2NaxLY4potBhYgVUNckwJJH4L",
  "key18": "5wfjQbGsFxJ6f39Y7Dmtb4MMX2xVMahoXeLkn8dsLdBFpKcVVHc6u36TWBDZS3voSN3ZW5un7bSbHqD1No3NHENs",
  "key19": "3SF8GC8D9rRGGmrcqGq4ZJraNEFRG14DSDGsmnJvJJJmh6Rq3orXb6MiY1QkaUFaDT8C7UnRCZkA1DdXetgxKQrQ",
  "key20": "24CDx28facRY33EogZ2QE9AksUYGwohzZ8u4K48zMwT8WTEbSuWvdqi1udZ2hgWfYwWy4yxQYLJtX8ZiL37h85LZ",
  "key21": "62JHifGadQBpmyhZvXnJLgJtfbfXGFuXzXFVRQ6Rbb1F4T7E78HvANdzD7xPnH6Eqh3Mj3n1k4ehJCiuprMPLtbW",
  "key22": "33DbkD9NigzdZkj42HynwK7vKFnVAjd6yUWmj7XTgcoJ2D3eM5pDndAy5Fy33RbT8Mt5SoLkpxyyRTGWxDNvWi3N",
  "key23": "2YAdKjhvg78R362AgHEVMpurJoyz1jZP67hro3e8cuPgUbXP7wAVRcoGg9TkyJB9dhiSpqRE6Mk5u33XfepcSFFQ",
  "key24": "3STBGX3tsiBqZvg84h1DrN6j9mxRJrdVqsriAV6Go4Ka4rtas9XRDnnuyFM9P1jtq6zepRPdWwNTu5ND9rWC9G69",
  "key25": "49rvSVcoztXMbG6MtaCqBW9VTfAq73wBT9oYFjC2mr88dHNkwhzUVGUkyBFy4tSXmksiQ3WcgrjTkcfx5LaiMjEq",
  "key26": "P7knf1a4dGhtKdhjZtAcKWZQyqAXq7bESn24LpTVYYkqqDUjimwNc9koyvgoeqpJ3g4ojEooH6bMC8i8jgNc4T3",
  "key27": "5sAoaZndsYY1qsb19x3RbnaYYvhyzJBK4Yf2APRdNyGwJM7vTuXLHPZJujBi8hGGNQngAW22M6XTb2mdf84SCUcx",
  "key28": "2KQdGSg1XM2KFhotaFuRmJcZuVUxfwm7xCG2LTGn83mZ6AohF2Me6XowgFBt6ckimYnaXgKd3hNr66nWNfqJBVvt",
  "key29": "24KSFrnSRL92VptWxrQm54wxaRvWznfsHgdn5epaUWREs7sihFLwYjcduqDX4HG92b63inCzEAap9HB7oDVFhH4U",
  "key30": "5zhgM2RFoT4zkCKSUjJDAdscEyGbTTE6ezQ5gc5Ejc1AWQkAmzBeeKK4Aox5FWSB9xpPv7Tw63Wg8wiE31LcEYNa",
  "key31": "3iu1gVkjhcva6Td4SkxZbEAxAKdeefTzBTEvYgHSSgZdoEBoZQsJvLNrWPpdCWdKC9X7e3RcPtgbC7YjtKfZmbRf",
  "key32": "3nMhpsS2soAi2xnVeqyVzcF3FWTBme1y7QKZrYAjF5Qnr3nXKm3LYwsn3z6J1mE4mkyMgCUWu1KEVqaFXxUMcq8M",
  "key33": "H1YK6wi4UwXEYUvNMRZm3ZYVdxgX6oyocLAXHiDGj2J9ioNBdbRxXjGRKwraWksrmMvXYP3ePfhhCoo7P2njr3U",
  "key34": "5uGp392AMeGgAxqv1vyMYTSfbvnR4x46CbngYcsyvhmnTwzARjWQ2YkAqXp6CjgFPtmj5vPzL6E4cUnsSMNxJi2T",
  "key35": "3jwvp498ZehDki2hwLD8isVuaAxD1QunHM225hg3jqKipFgVFZWqd3fjmKazcxSV2rwsJYKbabaqDCdt7wipCsiL",
  "key36": "4eUB7WiEgQZQbnDPzZmKU1EFBRQUMuAtLX1UEstC5F5CsCBXseeAZMMCz3qqBDC5b5K1UtfBnPWD9tCB6KPaaqP9",
  "key37": "2JD51h1K3tLuxjkVssxAyoDZDbs2vawmTMCp7ALrijTX9ZdU89x5gnJkVydhM7voVKFmXQaVwe2XJLETw2EFuozr",
  "key38": "4hX71T1sFGHAUrDg1HxXxgmCF2jyF1LgDWDu3F3pNuAvL4NBSYEyGoMXdJ84VqcTTfLWz7H3DhSSeGm11T91g1Ua",
  "key39": "5F8C2VBnS2dv6ysgbWGAMozhG8vETwZp1eCYHhQWjbuMhJkDxCKRttK1BCkdX4VfR9oSekDkk6e5t3ZzKJXmKUEv",
  "key40": "5dhEe3c7zbdhoPuD9SLfKvyTp3e9rJKiNhNHMXccd6YnLeKpotyLL4rWVyt1wGqqBGTkYx3LCnF12pTfBhojX8YN",
  "key41": "57WBCkTkQk34RygLyqaEskuHWbzDNRshScFqtJQT13CGRobh7RwMbRvWdoFgoniqn8srabKDRLavL4Mke2gab6VL",
  "key42": "3UFoeDurzEVbR7X46nG74Rq3fdnXDx5oKUs4LATHN9y53M1PMaMPtfXVzSTvMmxaU56YSbhpsYs8xrxkJhwjY8Fx",
  "key43": "4xhDht3mWNM8AY7rRWpuRcKUB42L5sasTjEsP4JbLVzaSxzE2L9Cw1mNdp4YhHrG1yGp1TvyCWb9cmb2a1ckFMPA",
  "key44": "5iLJPhhY9HhKZBpcJvqPKoCCo4x1m8PK7A7FxakPipJFgZY3ToSYtQmMzwXRMaJcJo7svD2cuD4WZT2wcxwFARtQ",
  "key45": "F2n1BQAzGNeEM6emEBawopuchiwiG6tewTKwNwy1drpLzkTM72MxZ8AvM6zRUYfHGCAE3fygUqDKxC6btnejrPe"
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
