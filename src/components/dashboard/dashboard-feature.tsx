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
    "48HyMcuSRfK3iby6Ejr2e1YS7QhMojoN6fXnT19JCqmJmsYwkfaCJZere2pUHFgvDEe5Sb8n3YSUku2crWnCstRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wW3drKrvXc5jxgKEngtc667Gy2uYt5DUcPogBnaWpL2WGgNFcjFeVoZmCnQuC6hgH7bz3KwN17tR4TogmxHnyqQ",
  "key1": "3GMgMVgDAQvbACFswEnorDNbLVVar63Y2yvkZADa5dArc1KZyugnd2ZZ8FnFtRiSisEi2FtcF4dtAGnxkSb2hqxW",
  "key2": "4M51wrxeP7EGVpa1utRJBXS5HSih1snAvYQ88pudv3ptjM1HAbTd5Kbk7zUYchR8h2uLHvvqcGnVCmpXBNmEAno9",
  "key3": "5MjZMUDu5ppDGznZySuugWiTCeZGV1GTfrxLxh6gVGkuyujV985Pbf6dFkRVL514P2kowCDz3yRcve4iEz4BNGHB",
  "key4": "4DMMtcccqSYNtq49bPgL5DUea6RT3MAdyTPcc7VoMAfihprfM3Ervb7ubDsDfRpEomyoi91V26gTH6Q1mH2PQ8Vw",
  "key5": "48kaHAVE2ZxAJgrnXN1WhTbFyYugEzkiobiQLcHRo73bPiCzPscoCb25Biraix6RYKquKvmM6qHxozutka1wMXfm",
  "key6": "4kpp9tHGM4nKc5NuLRkDEwmzuheNGshNcX7fV6VzM81dDdRE1veaHpyyemashumczwSkzjDHxieVxLGRTKhfKKhi",
  "key7": "461tU1cboD4i1s9JxdKoziNWq1uGNSNZhAGm7r1ZCnCJcEPjSvjuCG3FJcqpA2T6k1roLZeWBywc2iiyDfR6RpX6",
  "key8": "KQR6iB1nc4uxkENdZuvL6frUxQbbxoq6RVZKjqZLmsQwASEUb6nFYpsgKELkCnY5aMDNh2mewvRpCL5iTKhR4nv",
  "key9": "XHunD2jx8vFgF4nVfk9eLoz8zm1iB5YNQaGP6XGSnpgrLEpP5TchzYHUnx64fBrJbTHqMUjE4ZJBy93TWR4MNze",
  "key10": "22ywvsZLZLiXhJfJVdy8dTG3uwWZ4ZRmBZ4Lbq2qLmFwoVouH59d4CmuhadgjUktcbmcwAzrxbBJThfZBG2uJ2wH",
  "key11": "4zmTcwYR7vVXghftfciKmqmcxq4PqyHteghHcpUgct5dNq96hNcdh8cE11yPnY7GPSLUXFd7yH4BjTbWq88B8pmD",
  "key12": "2mMfZ8yVyfazzVdnqPBihdDFiyA3cVox2pccAPrKkVpbNUKHM1vBtDcytCJuFRugc1Te77iT6t96rPD7qh2KXHGH",
  "key13": "3SRuky1oMeM1CnT1UgiW5SGfknqmTvpR4b9LdAqaPiDKqXWTYz1kzjch9BCbKcZVt9WFLsTLRP885imRbMknBrMo",
  "key14": "4KXGqvuPRFnxjaxbt1r1mbeaCvmisMfcYRRCrW9Pbyu6LxrzysQJQy6yEU3pDqs68LgMka7ycjDnP9SzBPPQzg4i",
  "key15": "585gA7eKMmW3UaJV2RZnLkUy5S9p83DjFm7T273xtzNskDgS9bo8ZkuFzeeUeyFFS7RUGfw3He6dyX5zHv142fnB",
  "key16": "BWSmddYhqcGdk37co43oEAjsou9nFhrd46PzYRKEAuxvSqRa9qKGS8nnSgb6vSehTDL8EoTqpZv6dAat6zqYm3c",
  "key17": "5GT1k3g4L2n5LbeK4JBfMd3VDnwytA9TkQqo43UsG8k3sKXdUzhptSchtFSmT92eApEgt9nJbfam5raJdmm6VGYT",
  "key18": "2ykqmuNSHFnP1WWQ4Y6JznSLjx7NAKkzFNtgs5Dgz9SWNWfFtm8NffeyF9mUrH8THVEbj7wwRGJrHT79gzXuMbnh",
  "key19": "3gC8FhVcyWSVVLBkQE47uoXWmL8jLWwiWCZNUwppHgSUvZx2c3vGBZzVVEZGgDShGbtsiXJkEnCtTYSGeqjyfo8m",
  "key20": "5GwFAUG9hcWokxcqNeYho1SJDzWUkTBbHsTPixnwAjmy8ZWCHqD9eZHDdpokTawsmVhw3iKTavHNMUniS98E4Dqh",
  "key21": "65TBVPbtkL5dYRWm6G2Dr3BNh6YnbT7hvNWnJB7sV5nBLxJTfF5v4F1sGCn2GHajp9jE4cmQE1TmSpYcjjyLTfR1",
  "key22": "4BMiJHs9gRJrhk6YG2mX6NQzev9BxsLyekboYWJuE43pAkv57d2NnjFUio4wW33f4Y2ULgfVECBCejy5A28kwBPw",
  "key23": "5gpFLbpDqw263Ms7F9JCAy4jcW4zVFv2SE74EQBAhDSfzA73sFy6A1qm12wv428EV71pUwZ5iPcHAZ6W95MHmQNn",
  "key24": "4xgxcNgL4aj3aAAoLZxGPmNtEHDtQawgSFY4ehSwMormgRjZJijfK59kahxAy4HVvA9AvAHnzRNXoQUd81Hr4S95",
  "key25": "3DSopJApYiukJFRCmK17prrmgtw36mi1wNXSDz6LjtMHG9QuoDjMo57Wxiri6EKDkCokLYKQH6BAHUGxwWbkkVHT",
  "key26": "3YzYEXJ8SB45C5nBycQjp3dPT7LwdApNB2Tn11hQjCE7fnKdpZp7dMwRQhcmYbNRh5kz898n1Wx35iXucHLMnZkw",
  "key27": "2MdxUJoaUvZsm6S3gz9yEczUafHE121XTxa4hX77kyN6z957GxaaTTUqkADarXTZ7qdrz2ywD2qcFV8KJjgvHoos",
  "key28": "5gZyjBp7DqEJ3Af1j1b5dii4NcssiUdWmqdVuedHjADvmXWUXsD4MBy7n7QANeSWAoPdQuETXWZfkp7t2cz83EMC",
  "key29": "3mBKc1mwoPPpQQK9txEkdyWw8Qr4Q7VVH8hD1tzi8hCkNWjyzx2YWiCJQh1mCH4K9QRZQAxjXfkEdKCfmGQpTGnN",
  "key30": "3JZ3CfUgWNZuBY2skMAAv11bx7zScxeyNRUAxzcVQNZZSUraRdBDcxVE91qUpXjaF2pF4tzQ86SSETYLQmo5ZcNS",
  "key31": "47gVh3WXUrzstdzvK4UboSu5fHqFCghznuzhfcPXwgRCYGyYWkNAsAG6mAoAqZ2RqMFDDvra14oLDDHhiNQiJWwd",
  "key32": "4nxDByx7BvTtwgYK2ZDh2QXVfpmFj11D9UoEWucUEEF1TzPQj89eCNJ2J49RPDCudsMiWfW2DhpJfUELZFA2CBNE",
  "key33": "46ttWHVQdQm7icnmLF247NGjRF99hBZqzjWgTdaPNW5Tgm8yjRaXSLPKycRjYcSyZP4ZinHVWNqiVCQRBHJh9q9U",
  "key34": "4R5agcZSdGQRqwdtBZoA8yGDpEJTFzfjwUXnjt3JWUcvcugn7AKVWHDoivBu7LgR9bF5oB2Jot92NLiwGgZbbb6h",
  "key35": "4VyeXortWDiQNeDZEFVk2KQmAFFNQy4qPTUQLaQyagpb1G7yZMqinFi7YopVGzquNeiPpaRXahKxxzbz6abZeCDM",
  "key36": "3AkLC84ZFszsJnrNJ38YyMexaFoC2BpyBX27kVfLU9V485j6XgZ27aSNefwKDcrPPkxtbu22hZNXuq1VrEVUxuKa",
  "key37": "2avuGM2RvNjgYePyiCgBbv78UahcHQB5DZiMPATchxGGBGJ4Xd9XKZZKjHo1YLqtAtUxzs4Aj5rBCZugaHjzQ8xm",
  "key38": "37zW124f3bQzeMF8WdFPg7d25e77x6VcHEJ9ArQ7ppwmimcLYpbLtXeXg9wxQuH8UWcfmjrhLANSAZNZ4rP2gMdd",
  "key39": "3X5ymJNgLSoXR1uyrjgbBFMqY9LqJTqh7CkaPyhemn1pkH4h1kUh48EkodgsvhV7aqE5mYL8BbrDy7FZijaAqaCA",
  "key40": "41atCDwQWRR1xSedFEgBYc9scgzqTc7SSAtRgjE3Fo4guVfe4jakpX7qBLsCDpdNrDux4Ns6Ef72mJehWCtnCyti",
  "key41": "4E6zfBsbPTXVzJbGT4Ka6JAJwTArtqJzLt9yvGVNFXS12hfsABQHDY4FPA2G1oMhPzU8voa3yqXno6yRbcur4Qm7",
  "key42": "nNMfCc8Vev4D2Z3zueLUc9wCYnkqpS17iZSCxKckfp7owAL9BNzMLnipJD26vFsKxoEhGpbBxvNfHjSTrjutdZN",
  "key43": "2D2QbfhHFvaRZyDHsaSgT5x6LLbvcPHCLxbGJAaan2KJf5JTWcWhLxwVhYbwMfkLTxxnJvc5rEpMhKCrgS8Axm2U",
  "key44": "3nLZ27ekCgAurYQQLYBWimqZkQrY4MngfD5bvHfmFfRrueF5SkmvFSwv7F1zTvAvt2v6tFD8uqUgB9jA7u896Qre"
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
