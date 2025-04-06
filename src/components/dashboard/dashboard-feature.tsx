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
    "51pjvBB8pBcLzSvVwrBuoJEo5LRugpmyVDA5wD4JpMhp54WHTor1Z9fiK5ZGLGGruVq49YP3SLBzBpyQz6ECayTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JHWbD7zoRAD8BbEwiyZNYpP8YTajXEpsPqQ8ZjnGhBZLfXBWFrBKxUw6X2VQZzKY3KrJfGBTdM1ZrDYvJRramNx",
  "key1": "2zScFXfm451eLVNcZupJZfhSBNH8YrETdLbZPtLesUHJxdy4cFMzbmGwL9tQBgQF9zYuKsHjQw1NwEgG3Wk97NXe",
  "key2": "39xb9cpB6nJ2oRhcPJQcLfvbGxw8JNVouZYbYtTwNooiw1X2NjAxWFgc2UsciT7ocQTbYoeRZUC2o7HVqxFjngLv",
  "key3": "7KjFYddwNHdgV32ZY4QYSwTLq4vbMJGFQrkjemks7KH36Kat8Mno5imdBvxzfC1JCeqcvCiaAarLUhzzdJ1JZh2",
  "key4": "2YuJtW3K6Gmv1rYwmPiLViSQ3BHThctYkpuQRKxNhyvFGyfWPrJVrXgG1qiJqss7vF7hY4YHKuQcz5C435mbUDWw",
  "key5": "43ux4fiEmQeXmKhmZbC88uj7dkc62pwweuB4fD55nVbkhP2gjgnL6fijAGyHFN1aAZa75Mq5Gkhv2r8rvS3aQJaB",
  "key6": "yVqv3FdC74BCRKGPaJqD9zAUBn4n3KmHuX3fnSY7MVb39ciJD1BSAsHs2x4ufkFs4N11n9wmThNpqNoKDEwjPvf",
  "key7": "5JLqqiecuHk5n8Z73eaR9MYoHGxGCZiBNvhxWTeQz76zxe1hzNcg7gsHRjz9rcFvW56SS6wQ76Kmi11sEN6z1Uz3",
  "key8": "3PgGtfJsSybPD7875TjYMLKxAcrJjFr9BDAKHeso52sohpEL2jLHtZZ775VrKBcGZs8u3bpcsatSkqB4v1KFQKEs",
  "key9": "5Dom7to3n6wzP7vGsnaVRSipvP8JhttkYVxhUboYGeEM9W4v5yDZopgUdkLx6H8PXrvwBEHZ247zKAaoiqD5sjos",
  "key10": "4ExJMhXEGYa78oRbJ9Uuh7RviQ5U4DxwsVFj4HBiGCWrroscnP8duPKvHucoNXZbfrQ4b8X35F8q8fQU82CjD3dZ",
  "key11": "3J4adRJrPobxwzdacT5LCsWa7sdjDZVXV9gpBvZgeW4RdyLh9wDjUoAtGBgYsNa5HTj1ZedcSby1DLBBj6BYSTCH",
  "key12": "zNZyCBg55P1aVDPB3vghwS9zfeWL8nnXj6wLRL6FMnEbokSfh6sr3upAaSoPPv6Bah6o3eHbcfHtnAb9vHyJ4v8",
  "key13": "4iiqYCAUQWFZJTsPbGGYMURdfeYVxxuyU2jGXHRuB3wX9Z3zkeTng2xHjMQRmrvWXmCRVTtL3XtaZHsW77ypXk7c",
  "key14": "2PCeaopYzUybimBt3231jSy4PJdxm5H3v4cn5pEbsVTivrh3jDiBsChuE1iwNkojtgnLz6iqUXSgfmKWNvB751eM",
  "key15": "5zFuGv1CD2CJH2jj4jjZwWBZnTUJeZnKroSKH16hb53WzTrdEsvcv6L5BbXhbhsGBv7Ux8HE17zdkrpJZBUjjn8c",
  "key16": "4sCSJW2H1j6CZKT4wf9dV7A1eYcqoSRqcsY6x45Kna6BdFw18sLDssCQv2hMQaXi5nsQoqP4V2W9bwT8LZst9wh3",
  "key17": "5qk95MjcRjnBABQWF5eNZb8sQ1oPPPFe9oUoZFEdfUQ1yXKF52BL3nX4x3rM5CXLW9HZqntFcvWisFMoimbGU9W6",
  "key18": "3k5EbYqdVagK4D6SoeoV8sdJDSMzNqGvH12HYsM3rfXbYXtVV8nBaDksMFg6NVnSHZ4mwNi8QeBQfGw6rJYqYRby",
  "key19": "4XA3ojdLKgXqJa4TXmX83ARFSrt41cM4sMbihJajiTFS4AdJr4pau2b8xcpZDZ7TyDXqxiGNAxFEQs3oTwAwJgyt",
  "key20": "4G25iaDWV8LUznfwfvPbjmRSLrEdygnLFFY6SyiSKxvWti9attGYViboBKgeJugVSSCTp8KYDa8TiThLH9Ps5ikE",
  "key21": "2Ub1tY6L1dRdKZdhoEajVrzCvaMGkRqCzxtbGyCK3eFf2g5mXHwJx9YvUkw2f9HowCgQ841kWhuzrWU32tcFmask",
  "key22": "3w1c77rLw71Jec8ZQ3NDAszNfGr55YQ3ZNohsxNHxo5dsSy3mNWjeU5jSTcwhEBdnPmQhkt1eTGMmi9pNtjDGd4F",
  "key23": "65yuyhbMjn88Q5p2vUdpxPFdEjyAhMscdQcRb7kgE28m4dcuQ7BKpaEkfxTfNWJk8h8efz67xFxkXLxmUCxZ9y6b",
  "key24": "4qPBCKmvazbg2NumdbAbatNonYmUfJUU5WrUiSDWrHUiNjZyH6W5aqEL8pwYcXqdbH5duc9LFCRH5999VBAyCusx",
  "key25": "28F7uAikZKbWRxgvZqMpFjVZGqDteNwomdD1BPmHnM6VDYM8qp6NxH22WoX6BpeSNM73uKJSH3qWsSygDbCrv3Qk",
  "key26": "2ivBpUhj5EMqiBJfUuULj6M6Yw2CWuVjWUDS4adW9bdojjNtDZmUu3UgZxgsYRvWNH2qSPdZAUyDBK2Lz2yhJz9f",
  "key27": "5YrLt6qtDY7PoHu3VeHLVEQH8HFTNdgLhtTkVeSgv17Rggwhy4apM2REDwf12QCyLxsMLx8EvxvXkVTGN5gURRGc",
  "key28": "3yvMeRSt3kxXHt6t4BcUJaoZRsHLMQ99aBWSZBiSXWXLpuuy6HyyAiFgLv7sjMN8NVHCsyaJET5saAnDhtk9SVbj",
  "key29": "3BLrUwsS7F2UbbkVnnxumbcmzSgh5PQMoVA3DM9k4mmyXakJmyEErtJ6V2weaKidUYdgMHUVM5QTtG73HvrgFiEY",
  "key30": "3s9LSn6puAXWf7NF6Pxg2vXi6SSJDgE8zf9qrhUhQjmk45QwJ7Y1MQxQJN54bH7VtfBmpHxc1WQ6W1WkqdqPH2v8",
  "key31": "32naMuVSwb8XjmU4YJKPNoL5dXJw37mFZ69sZm2zFkohQiTybmCpfK3f7o9uHju3D9jvirwRwFmr1PcqZhRuTnue",
  "key32": "2Eoh9W94x1Hcti31PZKaYWhBxD9uDdmiCKPwV9ZkchKDAzxMFGYjNP4nQpjv7VujyTQqvy9pFHunRAFk5DFE11pb",
  "key33": "3Q4Ar46A7KCsE9aw9FioMQHr9fqHiNdwuscymCEfQDZgEqwndEXMKwFkjz7EZu7VSSGRKorXiWUxTHPfZP6CJDxY",
  "key34": "2XTSump1JvEhyrwkyDxefNeSFNbhio9T3ugQje1UgYqJPURYG9qFZpHAw2hKJzTaM4t8YStvSX2zSfmQGTGCabKL",
  "key35": "e9PWZ8RCjXkwVYB3HfPXkkd61Hv7bMUPgN7hUBfrAkQwJvzThGwTprK8oanqeLcZbJ6jK34Kmg2asDPvKtUcSLj",
  "key36": "5goWKqZSm8i42Hr6ZAPLPvTAPWceVbtmy5SyTj2SdiGNcvkTv8eZvoqUDZs8XkfRZvBUeyp3toV7kEt4zzkxDSyD"
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
