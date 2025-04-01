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
    "4PJ6pntMSjPzQzXZpFr9HVHbymsfBTph8KWcgEbPipbdCkge6y1vVcryBoJVE2fa49Xgy4qBuzewoBaZsBkJxdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D3VwvEYjETKmNRcSktktsjhfzakyD9Fa2EubYapUi29hBbP5HvcLrstMue4oA4ZfaAZjSQfTSpPLcvCHt3owEG5",
  "key1": "3Q6AhAPQTHa7eeV1bs3AorPbmZPXjJLGuuzEx1AdYyoDWmf2rSw4GzSpAWKJ17QnAsS2QWU11RpJEnfR5rQr6zSj",
  "key2": "64Zt5mm6go1Wv5UkmsiFpJw3j7SxdR2LRRHGBHxZXG26yJyxqCwC7UqDLHHLyefowuRn3CZcb8a8KENSwshf54C2",
  "key3": "65R9yVKVEnxpZsXQrKWtYtG8qp8EpWufmFFRgntoTr21tWRk55hwTNcH5cQumeXv5Y3WXENK8Qfawy4oerRvsZZH",
  "key4": "45mFwGkr4xPXU2LA88MFHfFWcpNb4MMxUKSxUmcnHzN459gJdwSvs9tQWcF1ziiGuAu69x8SdgDNKC9UwBrrBaWz",
  "key5": "3g1nrHa6BbDoZfSHhgZJjK8oKdWVdq2Es2izKzHsLbLmL8okVFybFpLbt5ohwYdyWmamiMNtBZ71oo5mWYsJU9pg",
  "key6": "2isshf25vLC6RrS8LX1GssM89cFysh3Whr79rTQuB1gZTFCwUid1eRMu8HFo88VsQS8fkh6Mj41EuhhEAcvzeMH",
  "key7": "v4tr1LA2DL8Wwgbb513A9zts92ANv2usQXDpdPZRYfxAfEfJGwPa1vbBLfYbsL4dQmjhrKT92xPYLMaQws6iza8",
  "key8": "4kjaSfRAd24EWPuAQEtXamwdujWyNbPuvaApJ5UCr2d7DrVh4cxKjNWwd2zidfSSa9n2g27aM2p2PhpR4RCqZoPi",
  "key9": "4VPjL5dp7PXXDz4KGDyY4ZBr12vNC1K5McaVMzfb7wnBioBXeN7SvBVKribcpEynWrQeZQiMKDrnA6r8mhnfp12Z",
  "key10": "5vvgd3ebQKBoCR6ooWrNLZ5jbaRv2p6yL2Q215BPKr451GiBGUCcSy5HFuV1zZaSKr6LEAAhtToALToFBycRsEWF",
  "key11": "3yXzeCh5EcwoQvnWWLRmXoYQCcCJ1YLXsT5WEejLjvcCBTtDEaCQM6v3b7QbciMwaD7f2V3UozakiKt3dt31qKWC",
  "key12": "399SjAEDPbJoJLrmTpjscA9K687k334qr2YnWcsizL7wBYcGDLAJMu9xE2rX89VAFKgYAw1gt93LcwTurn9R8itR",
  "key13": "2Dc7UWQwWpAivMcA8UdwRhKnMY6jtjmdA2BQL7rkqPkMwZBDx57NPSs1fpZjBJi7UH5AWzEBMADQP3ovXATHyDM1",
  "key14": "26JWBhfHDjxxxeqbHb7x3tp8yNfoLrjBwJMgxDQNbzaLWDVhaKkh8RQ2AMUHRxexKVKK6rm2THWgD7nfzo1Xs1rQ",
  "key15": "3B4oXUKDh3fijiZaQekrZkaWQ8WcvT1TZKmTAk4WF2SNdGFEqiU6z1wLYRZCZbT8p9PU7QTzME84Hh4SQnthhybj",
  "key16": "3wGmqQdemXKKJ6yMEYcX1Gss3Qf5GaHPhBia1ost1LuzMHu3gn1ZF5fbcpvoaziArSqUdk6duetwoe6rx7mC2QcT",
  "key17": "LfqaM2PcsPADbXwRoeDJrRBbs6wuuDSWbMHnnjkkChF5Tw5j7PqKJW472QoPgNDVVCxaKv65KHLsKubeq8B6raA",
  "key18": "5zYcY9SCtEGE8BN6GkWPWtT6x2XmbWjK678KebboNPNd68cb5vJydHUik2tjCEUXzV6JkyEzJcdgEg7y1db9wf7G",
  "key19": "57RxENzWMhjTRJ5g5pxTQT831YN7YqkQ1RDNjJRiX9SZoo8wVmzxJAFj84Jx7SttheybJEkLsnfiJQGRmTzatzfs",
  "key20": "4fJBj1K5XQi6ShDPHjzEm4gDTMRTeJMT5sw14eLLFXbQfcM49fh27Y1nyXseGmRjU85Lig3SwsU5snJAwVdazAwX",
  "key21": "2E3MoFXCJzsepehqE95fsfS8WDRHFiGMUd928gKaDpSxJEruuefvjZtDoX8ZyU3gQ1AXhn9UM2HkYPRqSSaAKDhM",
  "key22": "EU9VGt8K1TGcq8ptzpYKh3ENmhV1DkaM51FKykJh4JFyJoX8Vp9693mwLKaR13kSaZuf7tGhqmq8J6Yh6BZGDjC",
  "key23": "21J1ZVwfqnaQTfPyAcJe7B5yj1srY3p7Mzs6nG4pUAmKLxuchPietju4HU5DN9SXZYAeH3xGvfmfJUXNJeLFS74R",
  "key24": "F5Q2PNXy6octw8VUpCLdcdsrqverp8TaFkYtPw5m7nQS4QsCqKSgXHnMT6yjuqnnLV2LHZcRE92i79t1LQpBh2t",
  "key25": "nf8vGQU1aEJY1uCZG38m1jGMFfhSJYCWnfM56VPVKshp7GMX5Z35SPsSWMfYQo3URSj9pfmUxDq6W7SaFgAKwQB",
  "key26": "29VstcbVBHMmadNvccQxJR5Ra9ATWzDFsdgrrozVrW2PDhYQzDQAGJo4myqX1nt3CPLMwjHUdWTxbcEVPE6ndSBM",
  "key27": "51h1EZBCiXJJFEXsqyUNnWkukUvMidSPK8NyxjSoAa76PRr3UDq3rG4gndRA4PsctMBEoXe8jxsVtpuSUnJVJ7GX",
  "key28": "5NPLuSgCqJTN2eKsTqfshiRBqyWCe6KeKiHp6iHqgF3D2LwMi841wWYH3uj2fedAghUxadSygb9MNidFpYKdggiQ",
  "key29": "qy5ZEJd5FoDkfhEQ6fibqURfj1QTmDEZi9jnWQA9w3pbTSbh37aZbLFiyfrUi9BiYWw34j3XXthE4wN9mbxDrdZ",
  "key30": "arLy9VE1AKavYpnadJYsqJyGiK6SZpsootH1nmhqWuT4XSXyWNgVbDty9JofkFWfCgySJtAL9kMTbeshbWmfCFK",
  "key31": "2jq7n8txLWiQPYVwXYHnnTQzspxoRVGJUm4i5yitZrFoaf1k67ahDRnmaHotBnevE39SL9LSbQiLNb9XiEj3zi7V",
  "key32": "5qoHowkbSTXUsW9ZnRSqtnPj5DGksyT9RJb6EjqMNZLnhjNUhpUDVbSGKrBUh4rzJWecjLMeykYPYYALz49zu3cq",
  "key33": "2RoTWCw3RYFcQeyr3cSp4oVXWoYxdnUtVHXQoJ6uuerbX3u7tUSqznJwAG5PXB8Uvgc4wXLhBvgm9CQ6z1mbDzzi"
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
