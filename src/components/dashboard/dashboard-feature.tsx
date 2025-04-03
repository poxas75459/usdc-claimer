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
    "2vsmEuiBc6wCiwrUPJFWk7jet3Yaw1FPHnZa7T1MvjNgf9kTabmfo78EgU7zBamxJobdtgS2vurUWErPVa8Jsydy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GuXQtpV5tSYNPCwPeu81kwYSRePd1sdFwryMronPCfgVXwKUP51bSNumcjnUns2JU55gxNLq4GoLy4Lv1tvzHD3",
  "key1": "ECZ3dEgQzA4SdvNmDJdpMtLeu8fSjAdHECvyj5LWFpMqbAq3SVs6YaQEoNHrQVdwyvy62vZtefEoq6jX6JVpTVg",
  "key2": "3wz9b3FCiAVMozJqn24q4DkbDwqVtjoYfSsNv45bg4rFtJxMaA3bnNKxckqDNsvQhMFNNgWR27nokzpWETmcjKut",
  "key3": "5NSAsyQsJ444DuiyD7YbMyVKsUxR6nA7MfWLEFrvxCgjP93hawf1HUeHsSi4uujL9Yp8ZXy6AifJZ6AcqJukFiUX",
  "key4": "5FJXG1JE8JVUHBHdDz1UQhPS3TFztbeVpcD58q9soX17YTK5vH1YTxW7JtrY4izK2QYqFNUCxZK8MWKmNZ1YZNby",
  "key5": "5ikdmWCjsQMU5H39XJWSfnvEaLm6H5xxi22rRg2sEJH9pPpZC3D7LEySC4S6QKYi7dBubqqwmzVhiVjpEC6qGAxv",
  "key6": "5ETC9fGfQ56czjQS5sBKgi499om26tPBJYjETguadLTK3ATDiBidSLud58QphwqEQqNs5fXcPYdebGLKJHesnKZ",
  "key7": "3d43i7WcAvXiGhqYv96nhzsA2JgYwhZD6ENP218L27JXPDDUmErShhxrBxb42envwbPxiNf69Cy6BDzuwXn4MNuW",
  "key8": "4Dx2nJJix9VUDjT3uTUjVhfcvQ8v1Wr1FRpbX3C9kbKJs5aTQfTQPdMUVxykECw1kQ6JYbJfm3sqdQRHU6RFscCz",
  "key9": "SrSbFVXmjpbuqqfGrUxEdLsXEnnN11T6A6A3nRcqBEo1wjCoMoH36T3JUbTkDdABWJXdUKcgNCVqzrA9TS37KAk",
  "key10": "4x3AZ3TQN4GmZ1wUEr9VX6Yb6yXbbq8sVW7Mf9fBV9qw5W3wKqFcLzQPXKxw2shCvBcTDFPUw3SKra9b1aZE6jLL",
  "key11": "2bf86y9pPFfQBUHpSNDo7AedTmg84o2X5p2ozM1ahFgN4EDYnh5h5qZqz8JzMUyineoVRU2gNA6fNSMSLGefKyTq",
  "key12": "2sYSRC3WEfDjq3AhGbo63ABYyXLrX82m7krSsemSfN6ku2cxgHpxu3ZFuErRf4ZAamxEQwZ5iHxqqeK7c7wYSTcc",
  "key13": "5L5TmQgX1vFXBgcEjCXhkaC4TZv7N1x4j3zicfEHS7VS72dkwwYq298cVAymBtWVth22RHWcYPhNE1PgcsuHEGcW",
  "key14": "3ceoCsJD99biVQYjCSp7wh3BdZnBsvziD23ohDc5p1Fo3cYbYFDYhF5hUURSPZs2Y4ZyKsKDurPX4RJ6h8dhjeF6",
  "key15": "5D58WS9d8ymX7jCH3JQpVBFWBC3cYEw4XdQqWqRHpCYKrgZHNdnsZbp7etGcaJfCc1tJ5ND7sB4AKpYUu6uvrvy9",
  "key16": "51GtmQCQW4SRKUFhGwvQkciMS15g9oJnkU5b7en4Ch8YiZU1Ar4ptWuDKRdfvTHTU3VjeqoXZGUVdzLgFedsiqwJ",
  "key17": "32c4TpJoee77U6Vddg7LUX1gaP4BTf5x2W6FjXUqti1bCcB5dYubQ3VWVhknfaLqSWGzc8ncgk9BBnYGAj6KuwE1",
  "key18": "5oRyxqF59WQGZiFicSmjoyqLmGBBGwmVnKjLeNZ3mFBgyFSMhUkZ1yQFB6bPDFYwSF87CyrPcJq9WL91AKLrJC9q",
  "key19": "4yLW9WbFsUir2ts6oPpD1PqacceKjj58sRjB4KkuVjSx3AkM25e1oTpyDTmV8oEdsG9vpa3SVP3VBhWMPuTUz8TS",
  "key20": "KBy2k4hvngZSL9udCue2R2rUdBLQsvKmp3Fa98oynPAw6qVK4Ed2EuEBowYdvBBwH1cTHFpMoWwbwnp7Jn7Cz2k",
  "key21": "gbGZMGdFqKwusbLrTjmfefG7NhngMYv9QRo4nxAi6c6HjzJaUj8aFbGNQFdd9pMK9c1U5KgxYtUxsLJ2ka6QGvG",
  "key22": "oRKYKPm1nakg1hsEUTcErNvEQYLdGQELBB9YY9xv13GGAtTQsMGMg3FwKWis5WvY9qZhkv1b7bPLAbzRbQAhKbj",
  "key23": "4n4dqrB8wRZo98dxy6ChK3cFarQXPgxvnVuUoSdU2sRD4u7tr8YMm39eWRHs2oepRX63X8goViK58XTq2Lfza1yB",
  "key24": "2i5rXFmK9CWt8vpHJeT4zdHR2CN3Ppu4W8kdkwmRT461z6Ef2uY1hjuCBsqdsqeTnmUABjNcDzQgHHdiBxEN9Mju",
  "key25": "36SF8Razf9YYV4s22YF2b454qmVN3X9KQ6kFgVrzNPk3wRirDrQSQFjfrzoiyt4BcCTQkELfbBpaRztSbwcBENyW",
  "key26": "3J6FHNT5VRZQ7dfjke8hgZzV5MBCi5iuqf4mQQdc1mchbo5oz3M5L9gyjb6CLn9yphUs88oNzYophAADvz9TpxLS",
  "key27": "52ADgHEcE5qCbvkYB2oqzw49TsUQUUD4GNkxuHqpX4aQdZadZkTkRexsPh8PrZ1NHgnB9W4wowCc4vc8GiS9ngmt",
  "key28": "2yfDgobx6K8jQmSnUUZfsQ7Hk5JTjK8Z8RqFk18XmzHhY7AMzW63C9hYdQc9vsjBf7vBWjAk6an5YeLb6TpgpZZD",
  "key29": "3CAsyQkSVckDPn2nsVQKXH1udkp7167rhGR7UjJRT7A883PuZURetUvTggX7TKsbR9nYcR8VYb9TBfaLTPTQtAb",
  "key30": "57Ekr5kQU424xSVfLWQBsCFgPbrXu99XpFky2rBBguZJoZ93g3Uw1DWU969aeo4TfFne7QAjgFQKEvKnyLwNAWJT",
  "key31": "KonjerwQx7JEYtRUz8svhj6qP9Qnx7nhtf4Xi14WabyL4shb886tE7ZQST73JNCP33P45xbUn346kguZ1NBKyeX",
  "key32": "2oBV6q6XgRJ4xFWfqCmigcP81LG7jy4tfghYe2F1csZi5cwdeeRkNcBgtQiKA1fx56jG3zmWd2KoF7FkvjnyfEV7",
  "key33": "ZRnVBCEGK5eBEJ28FMnUzjcCXVtK3WsHX3HA7YHXap7kqxxhhziM2btrF4C8W87Aw2whHbwD7oTcS1Kh6CuBFvP",
  "key34": "38Lnpwb7JDh5wrqhApGAV9B1NsjqZgFcJxt8fXEesDnHEFZxaRQRYB87dLdq3jspCoF7zaJzfba3arGitJUu7nWX",
  "key35": "4xpzcgR5tWGFgoEXv4FzDWb7ULUxvdEo3M2J675Qd52MjkwSPKAExF9UaympW7xvM2rFHXR581s5xWE9myPZSpgk",
  "key36": "3ssyg34JAQShGYfYbUv8Csvfv9trMZ5zFWEd88KLbkTPuqfqMu5QSm9NQW1nsMVxy6gEvtzgY65QqAscYv3pE3QJ",
  "key37": "26BLNPjWwTbXNBfnG5aJzx4bQT4qjqpUD4GDp3YRrtN3tfDzhXp18Tbo46QAUALsfgrySZrYr5FUUcUKqruqh35t",
  "key38": "2HADK9FxYePr1jAyJN5kwJ7FbrjVj8RpLroLzfJ6aFdpStbwSsqVn24tDQYZ6UoCv3NHTiVBoUr1yenGuZgut1MS",
  "key39": "5DFWu5QGonPRdnnjq5VrFYLAgfYZqiGDY8eEWvm7m8paa83WRb4r8txBHYTHE8RhL5vcWB2LwsNRYmwCsQThXqLM",
  "key40": "n6WeM8RqCQcuKzVZ7exgKF5GR3Fy9BtZrEwgncPGy5JtiitEFG3Mg1pCyTJRKP3ZxmyFBiXB8nybBNQxHS9WFh2",
  "key41": "5ugQvWFakjVVg4txX5Wvev4wzG3KdytdbNgs7q6NGVjhdkrtJcYjD2YkcgnanXh7rm92bcscCBjoBovfekhoCvpH"
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
