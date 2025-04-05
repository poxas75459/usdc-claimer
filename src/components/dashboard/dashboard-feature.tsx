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
    "z3vohX5d3aWKZmoX6xENzXoMGw4ddhBvGhkNKDeLyNKxmJpPCkmNY3nHCeAN1hdPcufbovMQYrt3piiyLKKccG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qRZ88Hvn23pWn8bX3QAAcBPqNXPbZfMfxL42bgLNVYkJ1C76mue2UubEQ8h9onjv4JUanMe2bisHbgqb8UskF59",
  "key1": "5D7J2xtDj2cd9MpMGuo5QCYrkhupyEqJ6a6kMY8zYqxbf8xuNZ8j2aw8dgnGGU7hLinQ33tSL2i262SFZgyqWnYs",
  "key2": "4gLH5DbnyK77AFzhHBUC5tdhe8VgHpVT38shcfFZ4akKKkXHhNnAGXegUFMqAZ9D196h91khiEsSAUdZd94BoKoc",
  "key3": "21wak2yXZVRjuBBrHmcey3J6AQHjgqYtLXJhXj9ybJPaq4Nav4Dduxw2WMAXxQDzvBSxnUkedV9tb7FSWjS5iMzL",
  "key4": "4fnjB993MZaFuw9zJrFSbCWfeJkHNcGkvQ5w1MU18p6fNRvW7jC1XfvzeJGrfax2u3Xi7kWcBaY49pbSsDdhe4x8",
  "key5": "5yTiY2Qc7nMYiWXayGkvwcYh2cUJypVYFcTC4S1CLzhXeybRE11BjeiRMMgbV6MMtFj6iHZwsnfHSkuagcSgaghA",
  "key6": "59aE9dpF9mZebwKJ6JBsWK9gHsQG5CgieWx45zvoFSdtYzRaz1tPzKue5na6DLJLvAJGjMreMbf3uRqhyXZKfQYe",
  "key7": "3MhqZmUKcZxZfQbThkVbnmv2ZCAeFWogYNWrRbzRmW6RtiQmaXLp2NkLwUXsohevu8pEiWYmxTarbDLqJhTcJfEi",
  "key8": "3DYAhjwZNf45jBALWEMtJhqMfX4g2958h8e2oS4GyNGkpj8UsJ6jkizSvUYYJytNraz5ZTnRVMytHabKNbQiT2H4",
  "key9": "5eLToACf5U3UKVTPb2Ejm97dbgneMdd4azQk6qAZ7LMf3HHrsus1uaT1BgxiPe8uBkt8QwSUVLyhiHZeJ8pxnDpw",
  "key10": "4Si8NHNFHeFQpGCvKff7NLAkfXJKBPixDEUDHko6ANxwb53tCsQtDPfFWUkVMVekza8Z9P7gob5kmQ1BXrU3EwQc",
  "key11": "4Yb3fNX7p32NAbeYBUbdxW4YsFKCixocGjQGauCyg5dECV9tHoPUiqF6BgmT8FUfTQA4jT218x8CmviLLFC4m2v6",
  "key12": "2mnfxRtAysp1pFTxP6LuAfmbwCGoYjrWvf8AktJui7JjVhiuDnDn85MSGgMyDGBcUmPqKN9ev2XbSW6PqFoppoyd",
  "key13": "4oakYEbcSbP8P7KNsm9D6LBn5e2zoAahGmgxED8axTJbGf6ULovztJ6nV3RjUFPUtXwzKwNvmafqFzTnfnbRCery",
  "key14": "2KrnMdjzeL9jqMbcQmhNDjynadJz7kEe7VyCpF5jZ7AzGL7SK21ExfrJFrV7YAtghJ9BoR94bkKmTsuec5U3m1jx",
  "key15": "3J47aEV3osposumSmKkTb5QjpB4oB7vbu8qJMW5T5jTAFZHzLvNzWaikM2o3FGoo9jHN3Sq5ecTiZxsYZAqAsmqH",
  "key16": "595xV5cJjcq9UzXJNd5wxJd3UDTwZDyc9zTbauDCgeyQpbnrPdFoT7zHK4Ug3dWdFwssgfmBcXF7fxtZsQyyetQs",
  "key17": "2cTv8zt8DhMHk3cFG6Eac7teF6vcWZ3RKZira2EbvxRZ6ZAPyhNk7X5m6kAANCT5fxwWaiMfrgvnpW8Cjqz15VVN",
  "key18": "4zGR41ehN6xig7f6kxuFjEXcPxeamiPHPZDCj9R4CaoHbnwvQqpePdFbCbZsVLShVxU2hrQq5Sq8NUQvhFakVt75",
  "key19": "55da6cRQ8c2tx18KBcSzj26gTAgwV5Sb8Dz2qVc9CZRjJ3GQTsUBdwMZ5EVes7EZ8bhtLXmsiTcgVhqaBvtgzLWu",
  "key20": "2518UFUZ2NBfLerXC2jzA4Bxt4EQAEbjRmTHMKMQZ1hkEMw7KPuF5rrmoEoTSgbDriHJkHPbAmYE9sndAq8TFVXM",
  "key21": "2pKvdae6e5axUzLFpPjdcyRsGeuFerNL8M7WVRGjwX372Unj57dbqALvpiw4BgXbT5Mbx1B5NTYgGN8ujaitk2Fb",
  "key22": "4L1YVgr3PphsLo5oYp4SBvsT6pN6GypUvG2eo4AXuyD6U3HKQEvTaivUBxXXPx8FA8NmbwH6DjmwhKWemvresQvu",
  "key23": "2sKwgzVofC8iPNJ3v9t1VJbbfbd42UsW6F5x3nvzTE8ZQa8Z3xv65TfFHHTDmy5AN8rmowjfVDAJ3xZ2dtxZfLuA",
  "key24": "3giXXz7fXHkHzMHTLfbhEHMJg42E5ro1uB7HwJuFKTWyEyNjpxGs2keAtGn3gj3gNkjdMqx9pfcx4Ftav1Lj122s",
  "key25": "2AKhPPLsBizFDbZxCjMN72gkTpwknwg5TjNJj9ZcDkkEfFEBh8ia43H4vuLCGgMUhtk1SVAnF1dq1hmPcSspfc3w",
  "key26": "3oEsYxqV2M4Vgmmrw3ujwmyj98Z7LdfwQSAtSGLrAVX1hYtVpBusHtKaLvPZX3VQRJQT7Hwniv2yq7MFXzp2q8ry",
  "key27": "2PezMQuYzrbFx2GfuofeDmFXN6D7tHSX6VDpz3RMuNbdBAezHX2cruod71aYUmqvpnqhyX6j9G3Jo9v6D259UXgR",
  "key28": "3CCEQKHYVZ48nvJLG1W3ZRgx788Qq4ANzmBigfnhESaZqUpha5jWtfuXtjnEwc8cgVfsQCFz6RVG8j8DDGcF53kN",
  "key29": "4dotD8akSrwZa2ZHH4EaLaCEqMvFtqRShGRRLVJ8UU9w6yLksNxnPH8CtwtyFYLV2urEzcbdXZGsV9FPTgjfjauH",
  "key30": "3Xvwjmqu6K6VoFRCsPgaf3b3UXyPDwJ9nvDX46SbdZojZW6k5AvGSNrbcuePyz7gL2q2bpbJ5M1Yjh63UnroMtzc",
  "key31": "25T28WcedtszMJsvcAq9qPfyJr7dQk9J9vbBDx5VV9RZb7WkRJSL56sykTxpz8EvMEpVhGPuLQkXv3HetgErnBeR",
  "key32": "2AkDK5jj6pUURwfs2v3QXhF3V2zLjx23VVF28wdF5k5sm3BXskmJmH1DwBn9jTgLwC7Z3NSfrsFwaxqzuAgrrqyG",
  "key33": "3v3Dbj4Gu4sbAAUt5u94DcbXejMKmnXvYMqLGzYXp1fYwGa1G33t5yK6MY7RLTde118RroKXnLCvM7XhVSjp5qyC",
  "key34": "2DrxeLEb8TLeWF1tSBrNWccCkPogUQVKc8TbwQwZrdKqYt1FK7GHxSPjjgA7vXikxMiYmdtmu9tKLhj7yBVrkdAN"
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
