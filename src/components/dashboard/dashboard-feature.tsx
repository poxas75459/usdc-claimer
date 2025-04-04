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
    "4vgwfVRKXuwMVXhAzPJQTXb57UrKZy8TP5uv29KqEFE2V18YdWErdHqf4XRJQPXd61xpms7AfxKY3eAo8BiVUEXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ecc7bHJKa7tyAXHXQ3UmzFAKgQAQzkWtYodxhnC4F1hV9KVJtLunvbHspGkpiurpXruQYhDpMoXunAyjoAGaD6G",
  "key1": "4QFU5SJHTL6hTPGFXofkNyxqj9C24pfa3of57y9gpGoPeADSzpzc6EhruwDwptA9UHUPyJ2t7N9VGwexK9n7Tubj",
  "key2": "diWhvSCt7ajuDPdsDADJfUyfVBM57QYyTFJjuprw5dNUJV3dGpYvXZrdTEXprh2LcBKvSS648vbHu73mDddKVWh",
  "key3": "2xcQr67BdfcUVYBZBmos8GVK6g9VKNYyoepJX1hzmGgw4DoDLWo9LLpU9779AffviF5x5uqnZ1ovYPucxBsAceE",
  "key4": "2BTAyvJwmnmE5Dz1PnNACQht8XyAMYjFzJsaaJre2EUcVFqmf47f9NHsCgfjowVDjRmBRKd87e31veSRLAKVXfoG",
  "key5": "4UGEsSURrz6rgwJ3nzB5eEfNua8frY7w1PeaAJjAabMTwJFq5xsxumGY9K1toZ9BK1CMznhivJdVaF9UqtdcwNub",
  "key6": "Dp6QPiXBryk4tAe8fEFL8BR9ZMhTxD5irp1nNbi9kJFMkgzLqpwKF8bRThjDu82ZJLpDyZde2mWqBVQEZhDvavt",
  "key7": "5s2xcU4VJj5Qj4VJq9vZVR3ztNes3oP2F5aWNygNZK1UEV3k8S9TcdidUz2q6VEa2ZQvyHmEeuX7dErqyoq2v3Nm",
  "key8": "4GoTD1ZohQ1hrMAZD71rRVaCyVUV78hFNfoiwMKm8GPrATJa6X2zBHTyHuGSwAwPQKngh6Ko34SDTvwNdCbJnyU1",
  "key9": "2AbcTUD2HyUpPXpcE9C8uppFuLNuY8ym5vyR5kFYr6Q1vAWuUSnX9bGeVHJ2gScBamp1gNPdzUzLu1ZFbRXgDd7K",
  "key10": "4aVdbKzVa148UMTYBaD7ZCwudAmBdd7CSTpv4AxKVWpahjBhbG4QXbqgD5KU8Lgk7xtNRQ9KiM1ozPWoMQhhrfXH",
  "key11": "2PwnkU8jjBB85MLXjhSRU87rBvpU3hd1tfBtLfjLpsotvaSoJ85MFkrubVbZFryKs67HLCraXYEfArhdts6pDeto",
  "key12": "avcBVdXhuG72moM6RP1WmBuBHnLH1qzm6zqpvSMGUQXrrfwrRjatxiAxqvM4zoeafh1p9ind7yArxdG1wnUJDWT",
  "key13": "4YxekQEWfxSe2L91eeawJ1avcqkuqc6GzEyXLmzeMGhsDcpDoGogi7JkpAytyP7gekTQUbwKXSFnsCUH5aHq6R6a",
  "key14": "3qpb8oN2uHmKLuuwRcLRx85zRWU2Vk412Be3PQuoMn38UqnDksokry9rgXZLW8FUWav6bXLoFKinFykNgsW3N2vt",
  "key15": "263DMQBCdGadPcVFyHVNT8HoUtaSVsTd22ZPVdokSKg6vTy1iiVUuTh23oB4o4iwTxBb5bLHGdQhFEYA3LhKjyvj",
  "key16": "31544KkzMAfYS3bBBsKGTUaUU8dHPFNxxMoXgkqAjHbaLiUTqgKkfwshpaf3z3LdNGhTSagZJaWypYaHQDT7KtvY",
  "key17": "574nY53CV9kSqzJPyQ3Z3GNP9tBimPdVFqKXxBdBuz7a3kyL11HNNPNeazLAq7weXeXEvHyFKxnuhAJXTs9C4LZY",
  "key18": "HZZJDcpGzyQtnk3epTSrM54zX6jYwsmdn876S5MnAtA6sagNzYkcdaUmYkCpHqiuxfd6nEVh1Kt1gSoEBqHvB5d",
  "key19": "2x82JYFqjDP516mqEpKF8BEUbK5bZjFTggpybupUg6DJuMwBmbPbwNEfRzJJwsxTQEtvz6nQGST7TdXRgaQY74PS",
  "key20": "2akizTL3KN1UgsBsTaAXokon3fy1LwWAz4PbKEjb88hmwP53hbMLMXz5T9rnZekxTJMev18V5hLBBUsHAdbTnppr",
  "key21": "5rFB1TvtgXqKSKLTSDa1m4w8FjVedRNVHcSiyp9GLvV3Hk6ye78ETanYrzvk74DZqwqLBYiqcQzbeaj3974HxEvy",
  "key22": "3ybw8f3JH6G74DiyCRfT1DohhocfFwmmZe5xX7fS4HdYLc3JVPaY2tqBFSWMZse7M8MSLYNL4iZ8xFR1Wj2W6Jdi",
  "key23": "58mqC4LBW1XXfrScHPA7GDU3eJVMtBSx2Zo3ae84WTvAxGgSoUGBx1agNvuUVjFoJSZNzQMpES9pkeZ3LTbHbvUR",
  "key24": "3kJbzxzz6nT8FpxDLxpaipXysHow4h1m9mT4xo6syzcQWD9UxgiQBssBqT9fuzyBLHaKxzi9dR9AAhBw9P5SF4Ji",
  "key25": "3pGSPxR4wwdDcprfgNmpFRvgFcTFX7Rx7k8ZpSv6iz51ioL8ykZvWntgSoQKBKsxpUtz4UEbgX512foWh4DAYj6v",
  "key26": "3HzvaoZBiuVvYEzFiYquAm7CG5MvBwWvMM9sPEBbidSc2gKhTDfM9bypKwd7imSMtSYdFpmssLK6P2GsaHH3EUdR",
  "key27": "5YdFJHefnUUqA2zEm3pZp4DoTzjEEujo8dfNXSwUayebR9FKxd1nzAswmWa9zNd9r6JbcXWHTgvU9dyRxoPT96Ew",
  "key28": "3zR53U9AH8FMpnMyLgPxq5e51W1shGUDpPeBe6vstSj6P4YF1KeTs8j5uUMyZiG28ayboa4qUvN8BFY71WrpTJrY",
  "key29": "o9huJxPQkdLYFx29eQeLtedWfgyWvsZTsSTzBU4WQDEfFkbYCbkhB2P41uWBbdgzem4UhmzvhbbZR4Zp3gRNMRS",
  "key30": "3w5MoqExocZdxA2qJu16RYQFfso1iWr1H1xcfmuFqTmWdKtxiqD19rdoxXjpUyJoDtYERr9ko86zHj39TDG5gDdb",
  "key31": "ixaxR8HT7bUi3hZveqs5wrBPJNVMYFqSMDmdufnNkjE1QJ7cixHcLioxWQdicJrpgjTz9v1TJV9ZP1Z8DsGJGqj"
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
