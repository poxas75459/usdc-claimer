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
    "Frq1JBxQHcsSxDRvovBEVoXGG6AZhferDJZboYskA2juhN2Rw5ezBWKRFY77LYb6jvt6yrs2sDTyiWZoM7kkyxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V8fFKiH3pG1ATZ686ZzeFcaeD92BrM556cvP7p5MxCMxzBJhPXVxZNHThDk3fwZCVjPR3wiUpUWhHun58tcmBHW",
  "key1": "5hDd6eqF4GCBfrnzSuc9LNY8WnsEnkoS1p728zj1W5ghnWMdyF4yW2jMdfSnPwgYBN71BQMvm81SzCVm56be7nco",
  "key2": "5rjfCpRAk7GAcn4dzaqTX5diYTveUygyVHDJpqp8VjoDE1eacSymEbpwRs3r3Mhx3xpWNLBeKycNtQXijrd86zi6",
  "key3": "5jZJfGryxjGHQhqrVPWJtcDUkM1BbUbjSSZJ4G4wzXrgyvHMTbe7CJrZZo5omjyNy6wvons8bYcmLqPk75EHtVcD",
  "key4": "ZdEAgvEk3pWk95mDkfgtASPb4BnhTgpwqWZZkux1p3rw7Ne6RFzyuDfsvSYeCxUw7He2hyF74w5ipUTMYP4onMi",
  "key5": "5DPwr3LuugnwxGQNqQUfQUC5jVkuYAq5efwY2JhphUspC1bn9AJ8w2gerUkkXxaeG8amF3DQZWCBZcRYr7fwJBuM",
  "key6": "3DiwRPJZQLNunztqwPwt2K17imRsYduQ64kiE3K746urmLw6bGr8TLm4TPVfZ6AqG5LXSwubi8ib5SJd1S8Eu6tW",
  "key7": "4U1A99XM4f2mgwVnZJoysuSqzoUyfDhesx4fVWbADus46qDPNehSE3qUEjTKjtMouwtPCpzC8DExwmroZ3wuHhZX",
  "key8": "5C31JteUu13u2KepNqresJAdLxmgLqBHjGsUHgF2qkMdrEsj4iChnKgtfs2KuByLEQnKD7UE6JcCshUucZSWxhkn",
  "key9": "4dLwoueAscFbF9bN7Pob4wJE66srNSYZ2tnbECpnrA6NRpoKsEMKtphRbPAzFKBFxQdtqEciBQrcD6XPna5WRAKo",
  "key10": "67B3q8H9T1Pj1iMw4YLcGMsevTmXQ5DgD9sAGjDqWNvZ4HSPzRuWA8KTxWGaGkv8DMeqWFfDthEgEptLJWcytT4b",
  "key11": "dRrZge2nLiNwMqcvVhy5z1ejzsSwBLjJ9tDnKYhQcpfNwDqW3dujfbuz9Jvdde1Wumaq1v3wTQMnfMUStMM5Gmh",
  "key12": "4PTBWYZGSYXTaCUh6jCorGLqVfH47aL5UAYLYRq5t3tKQFwxex3qz83AQtapxHnom88Vqxqg6Ukhfgf2hZYj1Tva",
  "key13": "41BXN81MF7tTs4EdWW35JbJznD4aeLTUtSZy9VWvgfuy3vrovvtztC1z9DeEGYEehH2dsBxe4WCShknoeuucEyW7",
  "key14": "WjiwKsXaD1KF9TiV3tphsrfqsiTkuvY5UVgbr2V1WtfGLLq6Zwg6eB5aHSB1FcXULVkbkqjXSUrEUbaLW3iVsEH",
  "key15": "3MRqBYgfHzXg72PQnbt6xoQ5aQG9VAtx9vZmW7j2hucHP5tudGraB6xXbrTTmzCVgCxjbZ3e11ZJKCLpHpFFtihS",
  "key16": "2LUQU5Aw8FNbFr9RrWauVM87jPmPRBio2LM3iG7dir52ZxE3LZDb84K6sLJtJhAV34DnsNKRcFa62ESAx3RgWDmo",
  "key17": "b55fcnD8Bdi6FRHd7ZqJjjQKyiPGn4RZLdLRwX2xN1uTjxkJoPBB6Wek2zWCCdVMqus6sFevnmC36EfQnihU22Z",
  "key18": "4nuuakCJRm3eSyjmwrhdbTpLP9ZLbkdHiVdsvtVqgLXfrUntvSX8m4rovdvgSdHTj8h88Fgb2ZXeSwXT3kLRVTp1",
  "key19": "4aKyuLg72BtKfDWb8B3tKDC7hdRQSiRJ4722vYPVZUPMVU6voUneGazQGZvJYPUJLfRrHJGo6Wn7ouG21gHzozFB",
  "key20": "5KN9tyoPqbkqkAUfFWPKntPaxUPFFMfFR55SiZ3q4UzzciWigDCcQjTCAnKLufAQfRq6pEprdyeXgKhaDQ1yFN8M",
  "key21": "5eNTPJ44fVnbBbARqKuo5vzpBqRUkvy4HsTsvCoemviSG82bCGhjSyekUS4vNoScboRuNGhZ3y93ircHWe4EP4EW",
  "key22": "4SXZxvpVb9daLmqjw1rbV4UnRtiGm2Luczw83R4YHZDPPWfuMuRiGrt1RFFjmaccASqw4zvuhXnPztMyAPM5QmYn",
  "key23": "3o45uXiktZK2jH63PdDM59h5C9t9b8JBTiWRprm6va6QBLsBVCkDNtmyYZqjrqE52bu7C65nRnT7BRuxxz2zBkHR",
  "key24": "5MEWpoFV1PyyB6Fvp6gT1FSGrrqgMYKXQ24pWAvnDAQaBPYU9j3EWHcairwhsViduErYaERnNVB5VGsDYiLLWTn9",
  "key25": "Leg6sgp3xqyBHV5cM9KdZyDycaVKcD9SCDvqNPuqFkj26VixndAuxat3Jiojhyw5Cg233PcwTVXV41gjYm71wPj",
  "key26": "42KtdrXUYwT7wbRfp5o3rP7Uws5Yf2vjCtQu9UDemkZ2UPWqHXY8Qbuv83cXXa6kRUGwTuJoKW1ynVvCbYoxvXog",
  "key27": "5nJj4ifySxmwMmq1tEhRyjTaNoAN8c3jCcNsV1LKZ3MNj11SD1HcN6hy7NCB2pVrg3Fi5gF7YPA3Ep4zY4bvsuwQ",
  "key28": "2uTmbo7beeSJ8QHtUPmf64nnnYiLq4uPebckU1Jv9PXsYHbwogFd23R8ELynKEiqMZgyXu1VvTxHBX7SHpZD6kNg",
  "key29": "3qKkYBZicke8bNj41d5noPAAvzf8uF2BjzwztJu47uKZYtMFMcFTvnRYsV25AiD3BpKefjK7APrrcKYceWcBaub9",
  "key30": "5hED8cA3xRbJneuCbpkUikPtqPYmmtvGiYZrgojVh3hMxK26hTLrExFT3VmcNGbHBM4L5xC5owYAZLmKjKSsgHHZ",
  "key31": "3YmRLHZEkaQhUj9hptHfadVq4Rg664TJyx3LYc8PQDerq4Y3McHUcVaxkcj4dDNNmDJPsXMnLBFiZHmNx3krzMkX",
  "key32": "5GyXYwDTEbgRvMeksaDtxjLZ5wnihYvxbQU39mxxbR1LvKJdiPep3dAfX6PDT7YcG3DrssRBvv2P42qXn1u7LNDf"
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
