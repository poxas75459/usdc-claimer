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
    "NzofwbYHfmLVsqYtrp6q9exeiz1wPKSZdsJqFBasRe7bLtzKn1iEmx8TPvA9kGSW5FQrd1rfUxbi6pDRk62MR3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54skGzh6SdGRmiBVBMV6jhNUXeNo8cgMPQWb5sn6MMMgFxT8ef15Fsv8pLjhFoT4cxvm4JceizaJpizDnx2WQAeU",
  "key1": "Xxn8FBF29YFVqJiYqn54Wixpanw9LPXW66eLVmxb2VQD3QkSR6SNqznKRcubXPpvcQQnv2KewXj6mq3A9LnrSbr",
  "key2": "3G6dXjzNwq3jg9hRJuhtZoo7eaeEfaWpdsMNQBJxkW5cJ7Qi4Jgcjx3qXTokACVS5SqRLuve6bmX8E83bVsouUD1",
  "key3": "4ysVW1CRewyTc1RmVdcQP5P6dDvv4D3ackrni1w7jJgRm4LnowFHrzHtDU2tE8ptnJ9G2gzx8SnWdtb9f9rUwQug",
  "key4": "5ohtCKQPP2NLo9KeNoxmgyFAtpEtsu4tSSF7tTwhimjnvTNRUfhVKjd158YAcAKyBuvv4jQ993AjL5sARA8vW2Pz",
  "key5": "aTnCo8uAaMVqA1trfvUa7m6iXMA46FvTN7Ua2zgYoWSKN1nutna4qB5nKwdAmqAWm8UutMrmyx2m4HsLQgGmVFu",
  "key6": "2S93x8aZ8ZFP5RA1MrtLN6dZ6i1wVoJDZXTRJRg5yzgSn1MAmYNSb3YAX95Gr3KfqhmAM7FGrHADoUQfgZX7KaZy",
  "key7": "4HqJM7tzEk4ZztzqZ4abf2Ni6MRVpLYWw8heSm1A6hzUGjus1DFaZs5xN2ifUh5CUzi3X2secCMaJWACEiWPSLLH",
  "key8": "5T24pTTUpYZLfgynrt4cqEYhty2J2xP69E78wUQDDQ4MdabyMXBgdRFBRWX1bRj9NC43F8NGKH2cU19U9wSWfp3X",
  "key9": "31rHGPK4YHVzwnEzve6rQPRGJMvHG7b6MsFhSF8Yeo1rHJwVY15NmSSrVrmYUcwL5zQPZzDKEsCVw4hQPuC6esF1",
  "key10": "8mu5EhojEoMqcwgRauFfMqW6kUusxpGGzgJqUhszEqLRGkGy7nBVZK5qrQD9sH1zdASRBqpEqAptdfaWkdy2Nek",
  "key11": "4exjkFLxkGXbhuxprjSUaJ5CNKRYZWyCuVKcdPj7aJfj5757W8h2Zj84QX4pBRdj6g6tGCW9gN93jzDZUfHwx3wY",
  "key12": "4pNSQuBXmQyCAmkJxmHy4DHbKQfXB3v3r4ZXh7QRC1ernqerkoMmG9vC5yW785ywUmqZxqgjaPgfStaY1CUH6nZW",
  "key13": "4JUwipCfqmqao4z79WNd1Rq2zH4EAexHKo8u2PHYxYKTLEXZ5bStoM6ePMU1Gg75kAj3F9eFBqg8MtdEoP2yiXki",
  "key14": "2NSiKjWemiLGje5XP26H6y2KbShScS88tix8fMtoP4kuLjiaQrW2zoKbQN6scMreHCmYVvtbmgpq3u231HJqqWfR",
  "key15": "536U2anGhVXwS67h4hXTHDEBjPe7Wru7R65Pax2pu2LnnU1oQmrtTXvy19gm47SLQZFdo645KRQ4YHxotipVuKXK",
  "key16": "Pnr6HeXXVCGWeHN5rXozpgkw6Ym5DwzdcoXQz9e2rko1xLZNVRjahhFkKvcQQiPPJgn32adonYbHq3az2f7n6HZ",
  "key17": "5b4LtHzM91aGRsSLNCgdjEFQAJ8QZJxdaqMhVbn2UMF3Wj7QUfHptoPpiQDQcka4iGJxx4rziVek8jx5r3jJdEXb",
  "key18": "5vAt6qLAR4pj3iCfXRjTPGkW2Vnf5hEoA5f1cggbAHcFfxgS8XGnrWnZTDnhZ9BgMofa6nyXYkP3aFL3vXDJouHL",
  "key19": "3ANLU9oRxujN76Fs3PYRPH2o9U2PX3hz7wgsBnyxcsmZAUih3paKD2C8hXFmv1b3gLbWqTXGTw9FL6xYpkkVpqYw",
  "key20": "3du3fbVSZP17vx4TczUeswN1qtdp5VvuGsH85rp24ZhrCp8SQvmZzRfdpKqJBqciNXfuUqyw9TKoRMErQUqyRxT9",
  "key21": "3j6TCiAsCasdWdSrZftWWQaFt7ktUnBuXVz1GwrR8pdWP23yEp6pjcjTDxxeofUdqsUF6g7MA9zt7jkScWtF1MHn",
  "key22": "4pr6cqjRWibY8iLHWY4GGxPWyBo1z4DMKX7qxoDa2nNmM5MXGiLHMwPRgGQG3KEP5Lz4h7y35C4a5gR1aB3zw77N",
  "key23": "5CsKiB8irytmJqEDip6prPaF73qjrG1mfkgV1uRGci26c8hiHStZ3pyRYnKoTPYpVRx8kk7FMim77fuJuqpCg4Uj",
  "key24": "2hVghgvuyuXTsdLuahhVnDXkx9JSKY33URJBBcVvW1v3EGrgP14tmggHrR5WkMhfeeFvuXKbviWU4c4StaKr3ezy",
  "key25": "4V19uTqKdFAGbFbtqgoUYUQ4eWyUBURa3Woeqson41bSRWXMJYCB2HDS76rT9qrELmBfu29DL8RYnVYXg2tzwo2V",
  "key26": "5MHbrCuyY1hGfA2LfBw6t1qj9VQu5L5XvfwEPzTuxfmv5herXgREtHaNxTxkf8zsmchZ8AjQzQ4JhPtxzFfEiubD",
  "key27": "5H8gomxm6MvxkfpYmWRWLRqyFgENQURuDzCExrgupcN8yaXz821hvrXTYzHTiSNHhsKsThnhTsB94PQ3jeP3SQp5",
  "key28": "3G51arpAWAcfGxoeZ3C1Fj3v6QMvEYH3rsxrU1b7i1o2DW9j8szVyyCZAw9UNyQxnj8sM56Sr6SRysmpBQ8Uz8Jp",
  "key29": "3RYXWV5b14uchvDfMBu1i654setKsdpUWsjFpo7VFXdB4GDfZ8XsvmHjDKHacrDRd32e8Duy6BrkXi8MRRSyQ6oG",
  "key30": "54YGQFQiq1HwaMRLagZzSogCZzLV96gWFmQ4ysLcudVXGdC8SioiRz8guYbxShiM1TX3yziGiywcMb3SSYUw9Hy3",
  "key31": "2TyTiXKNdaBEKv2gSnvTJeKqt9TBhoraFKtbyx9s7hMG1RN9VfQD5cyAZicqBWFoXZqvEjnrCKhLdp2xNQe5WkFd",
  "key32": "5KdZqJDk2xbjeeojaTL8x1VUPYBNPqZCmqLZmVZQ7213NBDLkBKnVGTr77vhgDkep53bNTXcFwY6XKqyhci4FE1u",
  "key33": "5rzi2eBfVH7ewvcSkXvTqRVCWHhUxdxkjzs69t2uX1hTxcsY2ttBs2jwUTrKPFKYq5pyXBuNkouVsBABYBqxB9nV",
  "key34": "31L6PaZTqEXvoyw1mcuP2ucmx2fxpn7hrMvNnX6fYv6qXQ9FvvzohoJ9yHVYjXzJWVrXTw3VT6v6DVFvK1Ncacth",
  "key35": "45cUKj11RduyS8TRgGbAVx3gzeBCbP9HCBnp4bTQPJzLi4dWpS5jsU6VAfjvCvnYjxV4MAdGu5xRmNvT8HPHZfhs",
  "key36": "3LVegNVVupV5WBUnZ1iyP9NGDvGSAjAhSi2ViTev4Gg26dD7ha5CEw5a9PPAvs2X7QTySbTvNtS7ivTMnuEVnsCy",
  "key37": "573Fv44i2yZdWCfWnE8RUykgZhkGfCHQ34Fv3g88zd4b6BPwbP21qBqo6z6GAswP1wKtzzbqbxLuzmd5x4mrrV9P",
  "key38": "5CFhVgn9b41PLkPtWTgoLCKPMtXPzhmQcEXtD65n4juLvEmHQC5N3qGCGexKmdvJDcAiSfKjEJ8zSjiVnJPC1bi4",
  "key39": "4tJzESAi5dFsLQF118B4qwWHeTner7SigmJtZ2HkKYHoPLgjaqN3fPFbDFWxAEx25JXc19jLhEXkKpe67oVk1ZMf",
  "key40": "33mNE19j767KKj7GaepEyzABPP9BTQmyC3TBE4eYFJWBK7DXacCR15Dt6GebEQtbwBzvUzcyj9MNipK2WC93kCkf",
  "key41": "2WBBxEEfGracxUs8FT1oQNq48FjgCdRTy2XC8UrffLSEKTx48CDM8BdT6aweDRk8wn1aumBBRsRaS8hKidfze2bP",
  "key42": "5rUTE2iYk3D4Z6JmUNzTT1kHxAoYzedekzJoNSBYxupWiFo5Fd9Ne7rKPcTR6BaH6vAaJE8BXX6G9kbJmfBQB5Nf",
  "key43": "2hLCKffSAgVoDkqBTzJxm48r7bjJsBYH2mKVZjBVPffEWWRoAumZj1Ze99fDJuinXqKkVSviWNZHqXA76o4uVTGa",
  "key44": "3XFvezBuxuEZx5zw3AdGjWxDwQVxE8zSXpP5ZqenCBm8yyhACeyM7ihkYsdSW27z9TL3GbKrsnWV8YzEHfoPo39a"
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
