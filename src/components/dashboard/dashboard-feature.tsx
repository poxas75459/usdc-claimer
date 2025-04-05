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
    "8R2pSD3MVAsuiQF7SFjCCbZXwLvatg3zyg9uVpZ7RzLA3Lmpr2LzF9ooLqfBUAfNEzmxp7QGowHjw3Aez2A3BUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sm5W738qrBNu5dyZw9XTBdqTVPq6ZmPtAQePqJAeo2qRWXr4EdZ5qLm5At56T5xCM7fZ9xVdSQzzMUtawYnmzdk",
  "key1": "43mF3RUEtSuuwHhZDfecLcGE6gY1vfqxYgHRQFMFENLrFuxSMnZ7SqqnX8rBcXiPinLCNge3JPdQJCdCijQd84Y6",
  "key2": "2zjUPSxf8XB211a1KPCMhyCDKtNyiFTpswWk6B7QcZoDD7RVXPiPvDJzUqQv6S9zAb4EuzUUPEafFgCpnB3WZz6c",
  "key3": "2GtaEdLpBikP9ud3J87Ziypkyvh4y5QBxFGU7bBkiEeLdZUroKBiU9pm6vF6rRNFXfe6ztWmiLge1HzcGnwfuFZ",
  "key4": "3EfcdDgMuFFnw9yq2Y8G4PwpZsrqgrwYdxdTTkpeu4TXzpNMsG5hxdzkiPxrFyiccvvQCQSDeRwh2t5s6x2Dfe3T",
  "key5": "5y4e7KZH9jBXKFUEhtHjewDdUW2BUay8LyFccQewb6Xz2dagdBZNQ21FSpVjEoDHfF9fC7VxeZt1qAMUHjZoXUpA",
  "key6": "6614V5jqUhZ8VmmkrK4GunpYecmgoH7u9JpvgcG6QWoPK8BnjP542Cb1FtBCfT8vfncUw2efNSj9aDw3AoJ5DaQz",
  "key7": "anPxiXY9N23n9VCV9mctvJuftDLoy7yQHGEQSwtYgqrpqAB9Gp3b23byu1Z1KNjNFw9hYTPkH21ZtsLpmSSdcJa",
  "key8": "3S6yHmsxshrVno52wBGXEYpoMAm5AGVjHJp6YPFK3GBgSxmkm1yZTSzCyGmBfUefXsEJWqPkdb39XM1ZZMBePDR",
  "key9": "4jVho1Uo2sjoDmhxq2azTJef2meS2Y3RzWQ1GcsyPoWngvFr9RPcPZaBaQqRzY6ZwEt9vDmesRFRv32vinF17KAM",
  "key10": "SyvZSwAwmPW75pkMc2Umtbu6JfGByufyC5D61Z3LAt4BZ8ft8FgMFDXjuCPz8uxp9cUpwEo4qqxneq7wjvAwbNW",
  "key11": "LSWjT297112LG6urrqRDHMyf4p2yJxkymFbzvR3Dadizos5oBFUpYy8Svf3Jrf1LTgAdZq9jzKETULCmVaZhz8x",
  "key12": "56ucDyieDUC6FTJESHp1doCNfp9H27Yg9QnwBCRoGJwDgu4GrA1x3CxsyfgJxFb53BxYaqTDuyr4wD5cWmwprrtM",
  "key13": "FnmEqnWcLmYKP8xq8fvhgzv8HqEWPvEwG1dKKB8tjWhxjxknysWN6vWiQmx7Xtu3YMNRUktTUUDqR2jURM8yycW",
  "key14": "4za6cLW856RSPvsJ1Xx1EqyGT2TU9jnuD5YWkwWxgdLDAQFrr3UDtG1qQtfn694PvcBSk9cfbs7kffzyiJEBsGLx",
  "key15": "2YhntkGVLN12hdUjusnJEXtJFsSrt7MKBZ8iZ4CzxqGmSxVsEcG2Kn4cWZTe28VtBat22QQ7hwzRFKVNDBp86uk7",
  "key16": "4HQ7XhbCc1yuCevzRFcTrF7QF1CLJzapipD3DXZzU5gBKzFYUdExWuysXJktjhbmqEwy1PupcWmtwZbaeS7B8dXu",
  "key17": "5VwHrFkwFgWvyULwzVSW34yttujaKuzRUhwKT1PJA6M6GY3nZpjg9gVqYrw7Fh9PeYzmXHtERyRS7MKvJXQs65kn",
  "key18": "icB9onohbaLg2hFigsm5z9AUk2ryQTaJy43YAEA1LAFUqCWzLXj3CbrAn5UVG8UnzL8G4J919LcbCXz92WruvFb",
  "key19": "tqXskZfsf7cSGRq8dBXD9smg6JCa92c32NWUwrDLXmJMQ6bQ5s8gJadrsCus7NtRU8TVyhC97EQnj12Nz4J1FnV",
  "key20": "5SqqMwD3oPmtrMW2obc3zkVC3C4VLbwwGN6B7kX5MVNY5hou1jmhB6hMUXvExa6n93YJMUumZcspnDX5uUa5XKuy",
  "key21": "2xCZmpaLujGeYFAEGfrQbgZGJEX9trqTY9wjZXNE3mtDCdQagZB3oqseJKMETq4GvnDFrNz8pbQVCBjxZShbhC2R",
  "key22": "4Sj9tF3WkrDKrMvcFershbCxmJsY8pyp9L4BgaqjounmqQvx4ByxKdBssjhQAB3Hf5vHbqiJ3L45Z2VUm2bvYkqy",
  "key23": "4reJfXnMrqxKeibQ6k9YaPvgL6uBrsMAxtNxeZ2yX2SqXT3ApiGbjcJuxqtwaWadkYp3HdKEa8E4kYWeJ4NdBjRM",
  "key24": "4NttBW7WLyUAb6PLFYGugZArZGw5MNtJmSXDubfV1AbBBWv3QyibcKEDA4wfY5TH8q1thEPKJ8tdRpEQZ3UcTqvB",
  "key25": "2YndXiZrajesQM1zCNiSJkbFUx5UL9h1atMbWLBrQjWV3XHmkYjqr2QBwpcejTXziQcSHhnhoJJDj8kBvHeovUhD",
  "key26": "5z9z5ZWENGb62YCVDQruM5HoFsBx7dS6daZpZjr9Ascc1N1BV5NS1oaEFniLEtk2KLfKUFZxS7i6NK7KwVg2FMaU",
  "key27": "5tUNfUS8fUpbMDwm7tBeWoAAhSMMNAaMGmGNNddLgtdq8ua7NnCnAaeBdSpmSjy2NMrbZhSRLdJk5y3A6D7e8FZj",
  "key28": "5CwMpAfUi8LGBvNvTCUHUuikq3SiLSQ4CEnJkgWnSd7veZv1ryDYjWkZUK3en2pdZkrrATiP2aHgeew6Y268Fh9z",
  "key29": "5kZok6fQTroxx8DHAVLEdntnxDcdCXofZoP1y3obQuiPgVxEJX3tvgmww88Ckg93Dh2UDQaBcd37DBkK4DCJ5m63",
  "key30": "4E756T9JdS86LJAVMV8x4StNWATmjBLDKgiLNpP2jkLfgZuqZKFL8wchVLcB2jV7RzpqiGsdmvsbXtizh3pHCsEd",
  "key31": "5opYaMWNZHETkjKf4iuuGYHnVz2bT5D3DwSVVP2aHxitfGpyTLdrNZbWU4odcURbcKjjbF6xRtBswSLL2dmUFTub",
  "key32": "4j4y2bgK8CjYAPf95yMFtiDqPFhvMPHP2mZE4KhhGhvSBzVdAot8zMJNBh9UJUU4msLJF36GRnspti8CdPuXA11T",
  "key33": "21AnG5Js4YkBKTfyahC82k5dWYvhWVYtm9RPbB7iKekM5esPzDZ1kUReVTCgNubwyXkp3myUfEw3KVWoqbiCfLVv",
  "key34": "4Vz5UHUbaP3Tbfkt7GSsgTEPxi5ni3Bae4SPsH8ZGLyo12xR8Rpz7HW1V43Hr2H7NedWWvAy5TKKv5DNfkXtmq8s",
  "key35": "mqNLE6a8K4azucCmH8spQwu1wDPXMRHja7m7UVpZorXZGrYCyj1vpVPVZJJPr727kcbhbsrggGi5prr5yWiMQMy",
  "key36": "2Edjcgv55HRLV2WRjxjwtn8as3kXLMKVwKNuhwdUsWNpANq37Y6AHGJyY3TUzCnPpueGnbZJDaSD2UhvRcAyVVVc"
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
