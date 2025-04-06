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
    "4ofo6gnrSVhPmUjbYcQmjZMJQNvegPp2NEAYQi9tm7qzWRMa1RYsmUX3o3HyWz4vgsBJT6nWZbNqdgN1Z2T8UsSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ykQoZ4uJBERytgEBQgxM1rftdc237ABBoknWiFCQmopbJQEaRsV3Yixk2SwFhUUVFQHohtX4P2XSHYT4rLas7s",
  "key1": "3vLxkGNty8tEMLfvWF9GWu5DYGvCXEdzi8SVAbyFdy6KzujZLEFuNpFXVJdjcUvjDrw1zXWXaPfYkDZcwggBfRzr",
  "key2": "5jAqD1Ti6P329rGJrQVRpE4tcTuW7Ho8kSrSmmsdhuyaEzmyHX7rGj3E7tVzQUtYxMAQWzVKn5K4XqCSa4VuBMsE",
  "key3": "2GFz3MvA58qgoavPSDwcscavLoF3LvY9VrVhNmzh6NfpLgyg8KPYgr6oze5SHnCYX9YSgkWNCHkpxGqVjtGGotgk",
  "key4": "3v6XBa37qBRwN43NRBzz6PemUvNhWfEiEUjY3MvD8VhnX2h9iVzQpboRMmgHGNxFRug1opynoFo7RAX3tcGjakPY",
  "key5": "2PJcN3j8Rh1XVua4kBdVT1g7tcRPJ3NJrDfT8KeP8yuotVLPDxmqB9Kgsy9xXQQjS9bCqbvEP3kttYSCQXBEPXws",
  "key6": "2ko4T56qjkrHcwZZtnA7Pmj9PnaLm5sFD2NVY9exdNRUQBU59CCazr6agfxr6V8BApPF7ywqjJde43E968zkGjmJ",
  "key7": "hkrYvNPAMLVjPL6v4BCZq7BEWPnKPqWfrcdtxYPcoYnAs7rfCkwf6BMiyuxdngFQ4m7aquUaDugniX2rsmuvTpJ",
  "key8": "2pF9UuVcG7cc6pfRx3uMMR7UQrs1mAk7qmTBgd5qM2z3FkrD8rBY4sExdSNug7WPF7TMLjgr8GoRGjiwdnZnQCNK",
  "key9": "5ikqjNMY1NgF22D3cXK1hPenLPR9A2yKrifPdjkjsAxY8iihq93MDg4bdErEa2ToLpYa8aBxWFMoMDBNuh3eJGqz",
  "key10": "5KX944fpvviw9ESAiGMQTWKTDmjJTmE66yErVqmuhmAq6xPs69HAcZkz2PJUJKdajXCMPZ3j2fphKqpFvcx5UwgU",
  "key11": "489qSh1zFguMLgjxJpVebkcxT7k3A7JzDrGwHBS5Ui118ymKeA188SiC2fXQAaZieGkf8P7QundaB7YWEj1omzKd",
  "key12": "66K9NXpEH7tn726fGU1dBJp7BNimWC7dash6tHcLTQbkT5gGbPW5vUWeG1w3tXWGbC3q1thoUDMhXABUNyGQkrCU",
  "key13": "PXPVkmBNL7ky1SVDp57NyWpPjEryQYkHaJjXg56C2TzPC94uoGW4DZU7pSNpTX6bKNPPfYYXbN8RpUPhJ2GhZDv",
  "key14": "4PQcf1n93pDGCNfYimW55DkNKXsdJ7FcpocNNEBuR6fXzGNowyK62hvFostWZwmvNNxXSUzhMbVDu7JjncqeWuJm",
  "key15": "5bkVoAsSoy9RrAoVdqh9YgK9ZXoCaSzKdzUzWnMyHZCxMH4u9RapKqgYBLL15422gXRNZnP249WJwbx1f4vBmy3m",
  "key16": "4b9Tx9YXqKCct3LTpXnVznqZjXrEiC4yPEFZmq59KuZ3WMB7f84RbgMBJ3noP1hpVFFw2FnbtRYu9Fd5JDgGKiJN",
  "key17": "Ckt5aPa9mDRtz5Yse4zvLb9PsF4BW2B5wKdpBuQ2QvePqZbf3gjStaUekFV6sF4j6rRBPZeza9bYCsWYvQTvNv1",
  "key18": "2R2TpcoNnsznejdPGkhCenqnzovMB5fHt1v8x3HyVxKsfeqstNadjYXeAggvhEukXtoebHNZJpt6tuceuvFSgPuM",
  "key19": "3zQuxTxC8p67XxnncftVkyXgL2hYx1viB3kTvKr2rveV7J83LsyboRU2xh9YDM2iwQ5W5Kmsrr3WPNXGQF9wsYRQ",
  "key20": "5kXSMjqnHgJADcPWiqiYn22ALp1GvdpwTFAfXuiHtXRaKug7NkCEfceyHWyqfhrjnyVUm4zKnAgMiCstQc7onEcz",
  "key21": "5NNou9eRnPetCqeTyJQC1oZ6ENU2zaxKBNRKqF9n66zsv5oXHBt3Dubk46zvzjaV8FTb9CJReLsg51CgV5evhYa3",
  "key22": "4ujwZFPRk1DkAUfiJbJNwT8vr89VFyvH5GFna2tHKzJjzzXEbvg2E9P1H2bcxSpDqJrWRmLzAhoivrbpNDRkMR5m",
  "key23": "3BWcjy7gU9Sona6qohV7kVDJT3in5McTvv4Bqi759pxU4ZuqBdiuhhk1eTYjUPvcXbf4KGySVfNRAc7Y9wBygQ6V",
  "key24": "2dbnAL1U2tvBYWGpPkgGdhkn9edtW5ctDuDCRxbCzj74HnnimYYgxrKNAtxvVauBq9t3bYWdF3mQ1ZhKJhzJPxwd",
  "key25": "5W36hYenowbdXtS8sDhQr4UKJGWkVhQRVVrEcyrNk4TN4kmU6iAD6VN8HnpemPuKJWLEGPGHvfpKA37mB1qewr2M",
  "key26": "4r9PBtGun4B5L4MNGY9KH8Di9N3PNpWhx41TzTen7Gm3VH5xJSzBMqzczVcvJ3749boWEy65YsMuFKydxo1vJ6Yc",
  "key27": "XjSpxr4Bfb4Ggz5v4EhpMjmiXAtwwvioSbvGwimjpry53inuzD82BkRS2uZwfNQxdjThN2fZByRCrpAqPWrhdyH",
  "key28": "qPrAbssNDG5dgv3g2nAkUYjYknvjRQFUMPVYRX8aHQSzUC3mf1oKS8Qn9WZbuhQPetAyyY9nTXMKLxvdD89LT12",
  "key29": "4B8rBx4GLXveCTKG2zHkMPy9YDbGHRpZJoL8ezTxeAeKeg4BWvnZS2pdhDrAcn9zhRAesevxnMjda3JdMLUd2QeA",
  "key30": "2wcwGXUftNnsrcL5BxZw2TJYFAfuqbL2SUPBNGqotVkymyAUozdbd8jSqmD7n4KpBv49uf97jUxfe7okCXBNGwNJ",
  "key31": "21VkGpphp4iu3QD8YCtYjKYzttdKikatmQ3KndsiKQJ6HvHUFFs22Gdd1yeytCDiskPAoDa8iFfN2n23SLgKzNRr",
  "key32": "2tpyavpa67e15d9wX4TzEWWqvEnH3G3NKiDJzqgzcjimPzMhLBBdVBJwvJEo6NmSaPG56tubXX7m5KmuvrKz3Dmc",
  "key33": "2PEW9FuFnmeDbngrCfYhjGVkUYfzsXovbRmar1LWEN5XQpAvi3Wro8G79FDydM6wStS7b2oonwRDHmW7ztpyB5R8",
  "key34": "4bn64uoCymbKdSLTjrNX7qTWgFbcMbiN5tSZT2o3HeA1dUAuxnYgykNqGM1cuErgrepQcS2FY5qse8HNTJHXoyGt",
  "key35": "5z3qceKnKcz1yvrP748k7YpXz1NfJ99ggM7j2SPyjMZgJMr758NyVsAFzjdC4ChWqhxZLGzcKSQjNFeAKPP43Hnd",
  "key36": "2Jv4tKBD1CndHEsGLqRc1e5Be4gZDVo26XK1W9G7yXidqAbXAbBZnu69dpgG8RuDUKz979A1kUFHNQ3uJtiBuUtP",
  "key37": "5Q63C9xdzcTQGZTnfnjLcoXtrr1WrjpzcrVHNg8e3EgByTDd2CJwQd8cusCuB8H4tdLaT1afRZMgvModEEQ2oZ5M",
  "key38": "5Atn2x3iNdesQ7Z4LCXZWxw6CoZscWNsiGCriPYrZKunjZ1NFUimbqUeG2JpcfkRtWy97pnchNtSuKyJzbobm4j4"
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
