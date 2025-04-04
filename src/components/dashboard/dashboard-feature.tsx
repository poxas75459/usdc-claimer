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
    "4fygXMGEGGttCBrwAKjYNxMvAMw6CP97TUyFMStNr7pP8WwywgQXE56yaov6P2UZkjzApuFjFLwEBghNGi2oCSXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zU2nEWhHoTzBaQMJKXPQkQQsAbn8FuGTJJjdxfn3scXxGRj8psi4wxwh6xRyCUk5HYrDg5bdNnHYDKEzfz6Vu7D",
  "key1": "2HyDPa8HwHwiNX79bfPt673JHpVbdsLYcNuGrA78eCkmUpwUNfzwQX1818WuXaWD5X8iasp5MyMrbaEZuH2GPAjJ",
  "key2": "5gdVr8apyxv18qe9Argv1pBqFKELg1kBrsiwLjFtdrptsp1C3cUmLmiWQHLEAhaWT258coXr4VWRdinLTd5z942e",
  "key3": "4xRNbzRR6HLmwy9WjoSLSBNvUeqn4J3Q41eEeztBmPKfNmCe7oRSCgvpN31jN9oFUszyd7h5FQFovXFDyqm4DERa",
  "key4": "2P5iBYtvy41AbPbZk9kXXjjzdiiGSiY48KLP5xWnDfczeXdoNzb3eNWgfnb6dc2Rx1CqtVBAx9pFqDm8amuw7sKW",
  "key5": "4FdjSkHpeKX4vj2ZJzTX9ExXHD1Xtt7bc9i33d7rgfpLtijS16RdGjXmuW9e5vxt1Gg4RnTW2a8zVz5DURL4LHaF",
  "key6": "5KnoN8eeHfzr6r91mKKjsXoXkgD3z3UT9ZmCUAAaUwTeVcRFJLVNEkgc4FwD2PKHmFcwXQKZ4ARPJn3JAbV9FvyR",
  "key7": "4hmETcerDYEWYUYtmiAXF89D4w6eZZk6V2AueNfSnnGD2ZmYYqdL2vi7goyxkJkgSAVjytC1zNjydUkS8v6t9cQD",
  "key8": "4GYq2igVDGGRHVZGckZ1UfbAYnGc6Bh5vtZq11pwZUd3Lo1ABUfHPomJxzBa9hFsx2Sh7Ut87E7v9zmUGVqbBHa4",
  "key9": "53hy2uUsUhhetzJcjzgTFYqptAYyoYY5CPHYEspyV3kjdKcvKfcQooW43kF1QK6CWA68cntkHnZSsthxAMHUmW32",
  "key10": "5RHDQGs9aCCaRctND3PzLKnPRg89mDcxFJRvY5x2QdiS2qsiwHMkeM9wUB7qJUdr4ebfTBYumNDdy6JHN4cg7MzC",
  "key11": "5zJLj1MaXJVDtnD9Ao8Gb377Uo31VUw9v1jYhzVgBZVCxhDamhbKxetSSwGdaw3Disme57w5vzoBgmJcvfDtWPNG",
  "key12": "NAxZuSwNWgpPH6LB4TPBKYz8wBM2T5DpMxk3mS5mRdmER8XtzVGisYMEH1qaCm8j7scLzfcTmZ1gdXJh1HAvvr7",
  "key13": "4S1NJLXoEhsniVV4hQFUaAhqiHkJDfKeJH9kAAXbw2iA1v5P9EAuoeUDJDLAM65d7P2zCJ3hD2C5dETWiAArxpud",
  "key14": "eQ7TnSVsnh589exjMaBF8extGhghA2gnzmU39oNgrk9YupmBnNaNTnFUS7mzj8AVzvQVfZPN8qS645GeuFHaG5J",
  "key15": "3JMigiZ6USRBmXf4oRnSTNPXC5u9yiL4TEcWEBwPnciGdtHq14Lab53RMSiaEhPXSMpA41bJSqo4SJ3UpPkBEwXf",
  "key16": "32nqtXqG381x18pVi89H6ZKnihBTPrRCXxNBnJ9JWoJjgq9puQ6xzdTzibSM23sgLkp4hD3YBxa9hpA6CFCAy2H9",
  "key17": "3LS9fdQ4yxGuMY6k9pi6f4TAcMVJgdLZbXVGfW2L74NAgAfvzUQE4wg7EkJWg27Wt8CTrHVxXnQD5sq9LDbe96KN",
  "key18": "2LX5ngisqtpoS98DM1fs6xJJPRdm2N6pZkHsYViMsB8M7BzdvQYAdoPkAetZULE6qPnKWym8GuxkjgfbKwu8uCAV",
  "key19": "5m48JFKV7DxHU4tfjMw26amqDnAiPYrnNhjexkd4cR9pgcUkjn7TnS9NePWsLwYTr6BmgXuY96a9rPkcqUyXSnv5",
  "key20": "3vCqWbrF4P2dazdmA1mUgv81QqWzK28bwrekR165Lhb7ceoMEzBQaQxKY9pSr6CbzrhUMitTsUeL9DoZn3bDZBQh",
  "key21": "2Yp1L14GTg2eNn4bw1vNy7uBpxJuHRfxFpJR798tfNUwygjiAC1rpTzfx1brc8PqVDba3mQxeSvhL9ojZ2etsFeX",
  "key22": "58M6VSSvzLzjmY6LtSJvWwxzRp2g5vSCgNtc7aXnE2na1WAHkJoNSM5ix5WyaUPrmE4Er9ccQxm4D2mKBKo3SsAD",
  "key23": "2edz8bFsw9UqY4YaG6GXJiCNhf4e5fGxCKoggCe7L5d2uyAzb8uABpz5YrZx3DS48LVPhLnsL3Ld5SifwgCETwUh",
  "key24": "3iw8FqczDrwvVeZuWbbyZbgMqNPbufC5zUH4PCtiqbzsXaYJ3Bkhq1Ppx2qcgivbcsJXJRAnw3kbGHpFkGqjsnnh",
  "key25": "2uourfLQbiXfYDbdXNffj3XGScgbzYsLHrFifMa2LEeaNZpqv8nXuZ84xU59xFP2wQCJvwv6ezKWPSBkrYkgf1aF",
  "key26": "3hjMStusX4tjjbNNi4YLfCt23nkxkEvhV24Y8ZmYW8fmNgukM4MGwmWaHyFj9XmZkcJVgbMqMAt3k7ftPp6Hvi2S",
  "key27": "5TEMNWjzcawFvpNmtqdtzUiCcrmLJ5d95RnZ8rDAndAdbuxTQDoDengmn1cLdGTLK5uNSFm1dFGK9mUicw3Sg91L",
  "key28": "62CAAmP35QWybTFrxrAYNW4H6Jc2D3Dg42WjXcZzAihyqjZSqw2tTfdjdvHZx4qG4Yt1uivTf8Cxej22eTxt3PrE",
  "key29": "5zhZQPBNwaKmuqMY9v6tkpJWfuNjTPeJuQH238P3EweyLJgbLJHeSgBAAUd4owvSh2agWRN1Kt63k2PjC1bdBXnu",
  "key30": "5PG598eJJxRLc4QCie3JG1AyBt8a6UfxnAS1i4PFVnqfWypzjEJk5gZam3sHxn5hykBigGC4rKrEMTdRsiopFeP9",
  "key31": "4CH7MtbyPpEoFMWifatZowUeJt4j4FHRrLyqWweDcRM2CoaLpUUWhuUydos1snmQ87RQqg64oHTEsbyqxwMzJdSK",
  "key32": "4EeHk6sj6FHGgLGSdvHNDTHqj8EqVSq4v1Hp79omo8u8XJSEzMQ1PUWnNd6AizFaLMzFiRXY3bLoY7ad5v6mSeCZ",
  "key33": "3RHipCC97Mzyu2LaZCxFZcFNdQVo2hdvu1RXKfGgSzZrEKj8YUsem6Hpc8bhZ2DrUvUmwN4KtNbNdCwowZnjgEW1",
  "key34": "4hh1FinALNdzgQat3u1GfcDpfmBFRe2M3et6q1h13YxnvBThPwUFL81eWS2usAAQ3YUMd3gEfibmnTX5fWX1rgLk",
  "key35": "54RUNV3PDhaP8jKuazqtPxe6Xi64jkiX8ae6gxT4CznnNZm5WHuKbXHNMVCiJA5oPyRZ4TF7EHQmWRe5Ps44mUbc",
  "key36": "k523h1BfPS333wZaic3RhiLCzhfFKwpYEivcTcnApiSC87nB71pGLXumitE9a8anTJKoQQqoJ9cvTvCZBEVkdEr",
  "key37": "2zCr9WgUWugKzV8fe1zkNZ6FLyNyB3rfAXxbPYRg9nFuKKczYGJJchYKtG2Nvdgq2tNHiBQQpaFeM8PwnPWku8pq",
  "key38": "VL44KgWQrpqR4cjyw143Msta5ErfF9uYVemGrZp8qpFVkvcjxb71H8jXf6ubSVavh6piXRfBFXNL4BJG8BHGyux",
  "key39": "5UKgPynhDdsYPiSoDTjFiHkWgAJ4fbQNvusAu6oZTL9T6BRZ9xdzZoFksEYkLQrLpo7XvV9xD8xahM6gUeLhKvbK",
  "key40": "4XY1GYw1ueDKZKKsATVDENtmLvRuK3du8VNhdbLLH9pR7wfu66mcEtddfxNfgPFhosvrcXzTCjjZgwWi173CMZhq",
  "key41": "5DMN58igN8b4FppLmvwVbFuijhBr9Li6TrdPgGswYu849uxQ5YWXWyk9vS3mnnJi2cPDjiujqz1tRHArpmLWYtEb",
  "key42": "4qAj6M3gLyiexpy8SkHMeBYMtSHXf9D45H796DrZ419VmVUiJQdX9DJjQGiBSAgiArjiqJ9yVUETv7hMThmgYbeA",
  "key43": "3sg393CzTapo7f7i88akZVX3iW7bBCGWXsjgwUAnoC8WU2LD9XMgZBLzzEHxhjbgQ1WshWsQKbXFfb2zdnBsxt8V",
  "key44": "5MZx4BEe9f7PA6y9hY1e1Xu4wPr9AvmYaMxX5Ezoi9YAcJWhpcGefbCGcYvpWfArj84AYtgnTB6Q3nX6U5CgzjRo",
  "key45": "1PhArRtefRAxjJP56JzJMWpsPzaf4d6bnAMFXCfBCDuNcRuKs4CGD5R5afih8kNbhTWXJ2CXAtTCK4vLJpGePcP"
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
