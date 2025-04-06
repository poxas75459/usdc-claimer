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
    "2n15KdsxVsV3iCTzzKB2BvAWLXvbFLusm4LpZe7RTKvoozd3HtQqdZacewk1WfyJynxdh4HENi23ngXS1r7vckK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47s9CD4EGYtDRqo3araZ2558abgCf7hZEYokoiAZzZXESkCKGDzjjA9hHF4LGfE49vt9HXn8vg2KTPZZD89hHS4B",
  "key1": "2udC8XjBXSrbu3Kkbr87p7SJtTBSpGUTCgjk1VeWzC3mvdCUSQNyKp7ruynxxeVucJJAEanTqiHkGAuKYRGoxadq",
  "key2": "4S89JPspdswHqsWFRzvBbsa2LD6sE6T9FXikgp8fF7X4oT5BYnmNHtiLP5cHDqkkjVhWXqtZUWeubMd4YvAhUSfE",
  "key3": "3u9s9B4TJFESjsAauajEcNyG9xvywvXNLFFvdBoQVcFGGpGKYkzyFSrMkL1JTJ5Vf9aKKj3gVgUFTMGmq8cEGXLN",
  "key4": "LiDts6X3CbkBN3geZV5RvpJoKNnvdJsnUXLetY51PW61Decd3Cm47MEeytacViCeFsQ27pWaK5Pnfpf4BQb6o3Q",
  "key5": "WToBz5spBFJT9cJk4EhzLqBTz3ZCdJtrbdhuHAYhBF7FCfQWGMJxxic3aMB2GfWgvBddmqetemYTfZWYV1Kf9v4",
  "key6": "3LLNA1iQdQB5eZAk7B8WZ7GWhVHQvN6p5UQRKZ33soWQh5evoQPUoQucKVLiNjytJsFHHqxkL9sidsq5rANpmsB7",
  "key7": "2MwKHdZaKtfVk7rPZFL731nf4DHwhJRQdBTeP4xirgimxsb4szMQEuCG623FDnkpdB4b6KVFWrxKnaHjhyjkKLpr",
  "key8": "4uafQBrCtSM5zsJCpA7ELbhMSCRkuxFrQpnVspztvbJX7iY6kSaoz55ahmCZJWeEo6MPoGS5tPF5YmXSk4pCc8qg",
  "key9": "2gbxfc2zJUA9KanS8H429QiCKKNss75yuv1zig5BHcCYoN8grhFpRK8JzBss2Nrwu8anBN3XHt7ZEyTpKFaHoDyG",
  "key10": "2uzchmDJUSyJ5NsPaTgkdpnMir84daMcH7K678i5wfBzE6zCknLWw5Z8yzJbDbyX9WARNc6axeR1EzRMaLNi96u6",
  "key11": "31kzPCmQnsPdayuFv15iL5LidWeK4cD7Qshb4xw5jBDoW4nz6iGpFvPsArNFenrNnTuRvFzk2JFsHSpZT3F46XVJ",
  "key12": "46gqFRH3MQfKLytSBjc6hfNdSXrQ5atUeFG5ZZE6PZHzZy8fGeGMgcda9yg3h5i2EDbHCjy5FLqKfxvwsVvyzSNC",
  "key13": "4WvaYFA9fiiKayBye4hPvXycmwbW5pae6nfC68dRj3wWDkUxiHKMDXAGTkeXvQmPe2wmhVt3Fmgrm8wK6SuxxCrY",
  "key14": "PwFer66A4V3hJHpSKt2GEeLzpzuJEabLumDAFB6haXQs8g2caadffeRnTsivU4tkdSebWzpFxw6ryVvPpqgaQqw",
  "key15": "3zEjNcJ9NjVmCg2x1rhxubXUhvwCw4aoXTX74P3dAJpR7LvKFRCKkmLCjSsJJz6U9myGUeUfv8nReacxuZBrJwQH",
  "key16": "8Cnjuxp6a49DaTErQgVoNwfJ87hbaLG9YQqfSAdQGs4K3YBnpFU4hVhx4zrRKEZ3SpjJF2EE2CyegcCB136FQyx",
  "key17": "4hMAPV8CkegzApiKcfMAiGBFyDz5RQeWjoU2V6XWN5uW2wrsBtyviLRY1FKmQFqb8eDCo9t6UbRW2RdxWYkUi6Po",
  "key18": "4fwENdZW1ppAaC7GZF5QrY5B4eLFihp9k3CaEEb89SP6sd3c4tZPQkXVioVhLjgoiHkEN2xgRtRvyXjWASzo1n6b",
  "key19": "2D9DfqwDjat7HMzpoUWKDY237qoZahCA5gCrBJcNnDefwk3WGPUkFJkXNkJr4z57hGs7HoSi1qkFU1jAAtkHGRyB",
  "key20": "3dE4T2iuDjWA1nYuhmNVGmwrpJvRwVg359Sbk3m98QPphS8ZQZ1TAeWJ1ERTfrePwatKD9yKxwbzq9LN2KDD7wn",
  "key21": "wgzu9VmkBNLGkQjm97Lo4wBWZEPzFqHJ5gvQeg2air9HxndLbTZ9x4363wZvht9e779aVhNoD2wco6WgmH18cTg",
  "key22": "McqTHfqaeX24cFWo2SMAsue6jckce1VKKN8Ju2f6G1AoPuu9qekc2u2XjzaPMa4Zit9W5GWKgQisTi9aAeKaNXp",
  "key23": "3PK8BKbBcPAH7EL2mxBtXzWssFGdfkBMSb94uYjLhTfBQWQ2pQY3QcZj9oEmhzKaWHPfNueRfpoBC3jkcEhP2gH9",
  "key24": "2HHDQwvxurvjscXiniLnityTD7SK4d4ELyiE6991PZQUu8AqD5zb9WVe8a5LDW7GpFyi8SxTjasJvc519cgaYBtp",
  "key25": "5wSdwhs24tUYFcFF4YDimzUJKSh7YtQZtppPzmdPRopPV5bgEh81fvWJJccc7k5iokvNVrSmap7uTck9tQdaqDnv",
  "key26": "2EhtbDFhiaB4SWt9ZyRNccxXmEQ7xGHyDjJz7FfvDfrXoXuwauLewuwhuwvvtGU1ueDiqDjVu5rUbmHW89Pzhifw",
  "key27": "5sXYB1Q2crjvxmK9ZBmbCAPVs3dZqw11cL8M9DkH62M8YnBvpKiY6WCnHBqeuaVCKrWqnHqSbxQzEaPWw4Bsfz6s",
  "key28": "N8tqrYjDDutyLzvX3WxKdiUQVdGFXYuoeJ2WJ41q1mQev13SdKAEcKvND8xCunqi4XNeEhww4s34yXdVn2A7KBF",
  "key29": "3iChN35BrF9ycCzygYCzeuHNGBXuXgipkrjr4qKLxSBJd5FxPYZ3pueUcJd8EwBTwfzszyBwXo5VYhY6biVUYcrk",
  "key30": "34g7V9qAK1hXvSoca6WioKQHRReAK67V8sTTmwsstkQtB4cH65fBcomPkierJRhiYypjCUxYAqZSmz1W7bQyJ8V6",
  "key31": "3pzEcd8TcvAhepTBPFby2v4wNHHbk15QBSVbm7JpsqsJsz2jkmobmeymhL9sqLgSz9jGnPBexYbaE7zjBtjP9ss",
  "key32": "2D2vZcpwGeJ33mKC7AvE2FoBTBsuWBtCd6UDcTcYhByh86E3HT4CoVTwsiAxfjWCNJkKVs9ZJyz93TFLFvefxsne",
  "key33": "5jB2iZXV7jqNEMF3Xw7UP6njCqsWxWcHvsN2K6NSf2dSR2zRqaL2XXksnawPeF7RcKgdTYQCAgaKstG635ob3HHL",
  "key34": "1hsGMG7sVvv4h2g39ruV6DNoptsoZFrn883Yr7jQkWJrL4pCp5EDUqMdDA7Aw8qsY2pSpNRYmcgPDHopNX2wvXH",
  "key35": "Qp5MryML2DBwBp4g3A16zSmTqp5PFCLnZSAMCtX49Xup314ffu8sRDLxLCevAChmV9kGpexSeNSjBj8PD13SwGt",
  "key36": "56us92zvmfieNbe4A3uY2fLT5tSj11eeNQ5sdBTiaZNGYHLtWNC7RdpNRpCmpWFSn8iPdhNqzRbFVtMyCm6kAjeg",
  "key37": "53JcM9Kmhf4yK8ZyC4wyL6jrcJPJdcyvQUiasAMHYWkn4zYQGNG9Pf2YCZJrymAQLcWkAxHXyVgZa9fqN7KACeEZ",
  "key38": "UKNpP7yLd42BA9TEPBWqmyEz5BQ2XwvKWP8TiAVMYSVm7vsrjpYtr1YejJ14frsHtJEKmwZnUn7aeQ2MQ3pjjyU",
  "key39": "s17nYkix7WwsfQxovxNjwoBto9gBKiAnBTjaerucX4QLi4bc35hqzxyWgdXNsnVzqMBvJGL2AqR3LZp75CqGtfk",
  "key40": "qsLioKSUaempci1XW9B44k9Ww9XhPv7gq4BiN4sngV7vH6kGscYmK5NndKnSfBpt5mMosCi4deFvKV9UkhNL85u",
  "key41": "27j88UYqwkVj9TF2oABQW8qPADrAReVYRd6SrwCbvUecffw5ZDMby6at8Mhs3DEaLhCguuTssK6se6GdJGrBGzy1",
  "key42": "2mBDuL9TabkFPvX1ppTkPP2sgchKGiwN9uD5XRy6zAvJQ2B8TavB4EHNqsP4qYA5ts1j6ddjSTpjhhhjYsN6Z1jt"
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
