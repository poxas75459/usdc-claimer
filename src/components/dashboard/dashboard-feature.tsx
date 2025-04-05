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
    "q2d23gU6yZJQtz3jocfru6MRAcZsVqV6WvqWgw2ntRNLmaaT7AaoeZurcYViQSyJUs4vUoDERBVsXFkVKUTmLrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CZafZqcpyK6gW9hNkt9j45KPS5BHzHipCokMJZCCieY2eH4XJkag11jwca1xLzBqigLpGkfqjmaJ5dUDkQSiuwD",
  "key1": "363tqkWoQy9a8VXKEs5NKXfkxF8SizFRsorECW6m7z5ngH7z6KWqJum3s6Z7RPdhAwJwSd4Cdq16463JJULdypKX",
  "key2": "5AyTdv6wcTQ2BvJ9qm1X7XLmduGnW4TLELzSpJRYbgbCjTHUhpa7AztsFH2wQq1xBytiYtCYFuoJ99xEwM7Cdes9",
  "key3": "ZRVz2NZva9mPDKcupvhnQvzqUqy43S9mZXCM1PKcaGv2yEmQ25ePL5yoA5Km4jKopdLyNWc338iicKXCbvNTgJt",
  "key4": "4Q586QyTJfLQYRUCYDVbnBoX8fkaMxUBuAZvkd4EzHL3fKFVMndDvynCvX3E3XXHURSgarmfKS1y3NP6i5cVHEmA",
  "key5": "2A7LT8Zm1WqDP75U5R958be5Kc23rFib4Ef3WXLbmVD23h1eS5pDjf2qqPBtqa88sQ4auGSrH4VoNmo5yFngLJ7o",
  "key6": "5RK6GWZNbnoCg2PoDoXbb9chC2d4URN5gTdH3g2GaVeW479ymjVxSYRfuVd4ndmvVBW4yUhevwV2AsfG2oFQN3HU",
  "key7": "5GyPhHpFmc8mmmLr19PAoQSJwWykySdXsAByGcBjD8zAmuvyx7ys48ZgG8N3pxmQLQtM2BoCx3eUbzpQXyhK1ay7",
  "key8": "cACbQvRY8LtebWphm6zduUhhZuC1sMmuzwyVrCq5tgkaNtg6y1oTxcPjGknpWARAER2zBQZzxvP5q942qk1shwj",
  "key9": "3by3Jsa4eb6Rciso3ca6vYvpCGEac6u26fB5Fcc17LUPqafEjPzkFEXeH1aQi3xav8VcFF1HWcGn9tbVaVADTEQs",
  "key10": "5MUd1KiiRg9N2m48FPbGzhd2Ez5pLvkfRJRuhSRuR1d8q1Up2xgZkHTBnPRQvFpejgjWDXrPhvhE46pTMQBgov6m",
  "key11": "31Xo1FsfSgc9wYiDHfZyF9wAHUYfJi59ryqh3dVgKLUneqYXx7vy11Rx7KyrqrBQgruyyVZZ7J4DQzTbGVRY5Me5",
  "key12": "jBMoS1bnH73e1j5674fm2WFse8UvBUTbLVKBUyduJ4ipTbY5jgwys6C2rZ1qYZ8fxQR5KwCAA4VwozaZ6davfvN",
  "key13": "2fh8GT13AA1zxwnTi6PPnw6vSDJknxfqXEXM5kWmHU1mW9YsLCD93TwheebaojZKbmphpQWwJujaxUnbubhmkWjp",
  "key14": "4wR772ukBUnxWAoKzLmCYRsXkppqFhhRfWU6YVk4yrNiYdQupeLFdsJ3nep2LKxp6dxNjBp3zCaoriQ6qeo8n5PM",
  "key15": "4RW4yjVxoS3yXiPZVbQMkL1GwPnbH8L33zfTHcPh7N6JFVEXVEKaUpByLjpboV7n1w7B8aCnyjdP8WZJPDLmuvMK",
  "key16": "4Du91SL8oVjRFQaT7LqeMrQFJpWYHC1nFisLgnR8PAtaebZpMYCBR8SBeoue7u9BEJdexcQZ5LFgTsmkYoxUzDiR",
  "key17": "4JBg8691SddxRSfLtkCR7qDVLTHKpY2VEVqwQUTZekxj764PUsMCp4A59q2eS24oq34q5s47aSWM9quytiMeok1N",
  "key18": "4ppXdD361frDoZJc6wLJACDa9DMmwRvc2fud2Wfn6Q9zGLds8SfXmB4LLbeKE1TSeqEKAQuLWLPP5Vnrj2YLKXeC",
  "key19": "4A6EAUyHUghAVWVmkCKAZVBJ6jZ7DYbJKR7kq2V5x2FvNphLdLQmsk9bXAsxGP77shEq9MzeVHnbqTPM8gsWCfrM",
  "key20": "3N8YFhMALKE8ZxdLmv6mKRrP39K1ojGXmmpMYf34EwGQwc27iguPfHVGuSgEWFRMPzkEEcdDjTeULKgQbe67gJEu",
  "key21": "3SGgYRSfTT3cMXAVBPdj2qok62QuwQAxisdTVc2tizgJd6VpwQnxfNTFnxmAQDk55KKDb6VawEWpDB9WF8aj3zZf",
  "key22": "4pPCWPjgiXud1kroubwdAGr6JG7osB5qfiGmRUugoVJybaEa7tVJ6MW9oBKZynqTf9pJfHC2mVpHgHcKpy9ucpr",
  "key23": "2KsDH4MpAGhUzRdJXC83KyZ4pCtZxwCGVm53wUjd3GDP6VPtmBTsCi1yTaDUWZDov7m24pewGzZ8LQwFVtQEFWnA",
  "key24": "4ek1SbvZuKh4qhRQ9mfp5JQLdY6doq6MpCU1yQJN7LnmMVTrq9f3c11mdbBq8BkV8c255PSoabvkLfZZ3pbjde8f",
  "key25": "4Tb8qfd9ipEXSuYwvZgkxYUB7ehkMt3NGcBB9GgV9zTTPA2GcUr9JUVN9NZTmJ5Bg81fQotKBxozckUN83fm9DNh",
  "key26": "4em9HW9DdB4QMcyuDDKEnKKkS1EBvL1yskP6NCv2PdwB1RcS5YpcpAG3zPpzH1qxZ3sJedzHkPPjdnajZV14zL9j",
  "key27": "5yyeqg9JRFVRnVcQ7RMcGunKEpeB8s5EeTX6K5of6ZT7NZJvobbTWVTLV9pvZkYLyJyjcjwPT5dPVm2ybRVPAUpV",
  "key28": "2y6ou7gyiCF1dZFNNFKqr95NVVYevD4KvQw4YYQsDvqwh9fzX7Y5bxp7NFA9azNHvZenz7ovKmr2V3Z1VUgv673N",
  "key29": "5gA4SkpA3oAc4gQr86Ya26X62XpsMKNC6f2nwRX6D6WZWXu7cVWGAYsF3P1CBWc1NEbz91cBFS7U5iUP34Csnjpd",
  "key30": "2fHTEGbPZ62j6uKWmd9FbV6dLvxedVdrBeLkcYsiZSmgasetfdvbbVRb9HCiVoWTA6PypmbkEwsXowCBE6Uzj8ZA",
  "key31": "nnTXp2hFAnDYF1XKLaiXhdQTkz2YrxmgRG5jLCYLmXxMEC2yCePsD8aAMSktpyKuWTbj9ve2CnfPXPjDd7vfLcf",
  "key32": "3VAXCJumQFcniPqDG2c7JmBeDYmptcPaBxcLfJCEzDZKZATojJ6asxSPuj5KWAG8uNyoVPkaa6WH55UJgv1qHJaz",
  "key33": "sTAAKRmErqnMhdzhtrNdnv8n6YVR9UmmFcp7ZiDAUjPxACowa3pk3pGEj7AA95kpBxnNL7saLth2ky2vFThMkhh",
  "key34": "3w5JLa3AC4NqSQbJHRTgLqURvkiL3ir7dtD3yWAy4j8xacp2UKictdbubjc2hcKCzSwUMMyiq9emS5et4LKgDqh9",
  "key35": "2rrMiPGdRPWiHAfg6xeUwS8GWsuQGNjf9ir1sDg6RTzYtFXM95aDsM4qVCegqHuNM5ZBbaEhpo7BijWYENE2zTHH",
  "key36": "4qAawoDreDB1yzHQPkLqNKCFinZKJBzFM38MZjPGZD9rb91n4WQ3Uc4eAdszDX2ynevfo9sBTSNqDYZEVmzymu6d",
  "key37": "2csAi3KyEHyWFzTNjRSo8CARhuUnTHWw6aZ8QMcHNgQMvRJHUUDMBdG1aB2etKPGoSm7BFceBLt4hGi3qithZUfi"
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
