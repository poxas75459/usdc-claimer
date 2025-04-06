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
    "28q81r63qRMBy3FNDZUm2rZkhKkvNEFBi6FW6XwtrYuQDF7Mequgp9B7kwVs8R3hPwE2by79WSzBDUG15pRKBEzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cpkkUZ1LTZNioM5HpzQVq4CJ4SfYuSfXcSCY8fupBpKkBzz8ByggVrF3e2WxmMz4Attcw5AzUtHghS9rsMUDKY5",
  "key1": "3Z7DfkWg1gX8ZcyzwCYRfsfDx11gp9T8gyyYdeNEH5YLUpZN1C5HaL5VzCF7XjRwSSxKKJwdHwFzqxCK7ev112zg",
  "key2": "4kcAzLHA9L4SjSZdT3dU9hJ7rmXBZYYAtjsHDLWmpYBhfZMoCFRB9LBcamSN2qVfP3WyyRpWGR2grT3eup7wprgz",
  "key3": "2q6u88qtF2KgDKvbLuZzsdQydu8Y4jejRjdthUX9AicWx1B1L5YGcYv8R9kcFQFXp5XLKUGodpSNc2ygLJMKbFcR",
  "key4": "fjKWQnNbnAaJRjhCw665tuBmbo5CHrwRtM3FE4pnpGTsfSMoiZY8Xn9p8z4P94haqaEfPBxL9jDmtHQeFcL2a2P",
  "key5": "5jQYAr2goMw2vgEoBaK58JTjnhS84cvkGx97rvnUFBHHdaaA2r2z2Fn4NyUrYePVveJTXtubEbvYRz2eYLhSzkq2",
  "key6": "SxWB3A5NT7J1ciuLHKJwvxNX9hAnvi4TuRqBWijigaGYjfjmWuZ4otu2iATMaW356uVbjdD3bSbGUoGePXA6RCV",
  "key7": "5VTV4imaDoc4CP9StSTDnoc4KNyj7vDFvUiL1R4cr6WWSJt94xeu2Uj6fY6YZ6LFanVnhYTQhHKTu4617wziVvjn",
  "key8": "4Nkvjp87FnKEce2SFPaRJtLPhpa8GsCu71UaEEUG3QAR18wESkdmdoGTY6KRKrtY7QbgQdJ9Q18Gq56bhrsD92Nd",
  "key9": "5hYuSKZFyzHQbLjkaeKVtkfWHemt1xYH2oMqL7vMdBUJDMgmHz5Fexdu1LmnWXDnK3y9nVq8WadSsrSncysinMiL",
  "key10": "3c3Z63BbgPgXdENT7vvARBj2R8QmoeaU7yWb5z4manELp1CqWR8tMQkPSeLwKEF4T5hG27j2yKgb5oFHojSNN6Kv",
  "key11": "5o6vdSufvQFAHeNkjMhWrZ1DE79Nkh1Dduz3HPbyasAJhhJmAVSyeE8221qQ4r2cjAtTLh6oz7SqJ1v5E4pWYWaN",
  "key12": "5j2WeZXnQ2eZ954erqi3zp1vs1BuhBf9Kuosry74ahCs5yeaoWAirKY6a4XmXhM3785jmZmby2GRk225U9XxYSyC",
  "key13": "5n19kNVkEJGVNTB5bd4gjWAS7EVJBFCjMWGGm9jiW9GsuBbTbXFn2w9C9awWfibZgw7t4ZcdvU73fFTJ9VPKnwBS",
  "key14": "38K9nkw6zChaKuQxWSNiDcM9gE4qg21mi7eEPFPPcp2rKnpQqQiyKZdwojEbnpYWWtRHBGwYkbWXGazQqWeEWW5a",
  "key15": "2RpPEBuj2APx3ShXipqGtps1934KfpTLEMXEdEd8Fibg6GfV1peekFp3AeaH5pU5bzmvvVGRfJVGLMhmcYiR53ef",
  "key16": "45DRDW9nN1zUKnzi9g7wFA3bVBeyPoWEsGJu4xZP6tbMqF1C6z8ffGewpah8h9Cv3SeHbVzJAHmpBj7WfCh5YpAq",
  "key17": "3AuTe6Y3YTKpDiAv68k9viWDcaZn3h6DntEFZQTybby3WHPFxkoCBWNsn6cLud6d51c7PHcrRdYowbZU4RumftYd",
  "key18": "5RTAV1Y1DCes99kD2shoiT87T5jdgZQrapniZ3iv9hspZrZY5JWH3m6QGePK5vDmyQzV4jGKyTTnkoWV2hTtmKp4",
  "key19": "3MAC2jtB49mgwjo1aY7GaWYqUGntW3EbRj6yV7zTnkWuf822PxoqaWsA9zYrhBSB9YtNhjRVbDbqE9Rs2zDvVN9e",
  "key20": "5weNefN9WYj8mbGQzds3GgAtL3yV7Duf1evvRbftGedwfmMVAPA4oC6gd3tMmagncuYSPPFa37JhmnZFv8uMZ3Vc",
  "key21": "21H716oqBBTCMm75baoHRZhPH2etK6WpHK4jLxWTCBSxqPW5P3LzBixPLzCjXy43ZnftyCbpu5Vp6gr26gV3XKkR",
  "key22": "5eAbQ53KQBKdZUVGjfpjEq2GowXsbV8raxzE1oBQ2LRzWMSyJTASJhq3nky1wwtYQCbfyu1PifaKMNbue6Dq4wQr",
  "key23": "41TBGnDis5HyNPLAMT6judqZifH84qe6J2Ghd7gSeoAzYMUzDSZGot91GdcKVkyXYSobC4cernGRFJKci86tCiKR",
  "key24": "3y4ZWAhHyURdHZWoNYc9dRYwQMZZsATsMBjwttr4gSWGNja2ZFL9JMAdtgNAuXmocJ2Rg3nQqDPb94B1uifK912L",
  "key25": "E7CevxqgbDDa21uhbFvbTZRgeXjC43kmx1sH9X6tZE2LeczmJ88c3LXSfsKX2JicK1bXVqk7PmcBFpNcVNAhYcL",
  "key26": "4UEo9V9CxRV35N8Hnwjbmc6khkWbfKykc4fPLhZQford7ZeZzHhAJpwbitkkSZy2y5ZxRcKjdTPu1FBNjomWbTw",
  "key27": "5kqL4jCX37BZbJCURn5bD2XfjZ3qBp8Ri5b5eRJcUb1RzoDc6vkCv5ubJ1iqsNiKPkEPQKkzaE9e9x34pEfUna1F",
  "key28": "4gdjPs98tjzxxj9sVF7dnigzec2Y9EPdoCZ6BbbLwLcecbiGs9nZKX5B7m6DuzXu7nivYEA7yTaU6mDt3R5TAWhW",
  "key29": "4hhDqRXQFt5GQ5nTqxTDWqJwzn5REXYXxw6RZdFfqqaSX6QbftUJ6qHjvjZsgZsjH2FiEa57762yG3utPgk9tX3j",
  "key30": "4ao5yxNZHty97su9pX4ugafULMDN8Ds3kMyFU2rKX7xV4FssPMhaTPX2oQGrp3HvEka98yrfVQM4tDBsrLiGhNHt",
  "key31": "3vkDmyhirRiYMroyU8WuJVgMdUaAijEgDaNoM8HvyeMjb8jTz7zEnTYJAxVts1JQQWSwrjLrUtZafaRaeVSfMwbq",
  "key32": "48oqS8d4t6ZFNYmL9M13D98J4WqvTwQedEv9DsvevxDsc3Xgm9rC7wKo4gRFxcYTiHNNFx6Bm8UbaRQxqWb4EMeU",
  "key33": "2aS5Cg4o3DPCJzhsCLMPe98GkBxjqonqAyK8EBpPgqKrscxKejqQLxPgS7GPdVJK2pUJfrDMrVV1dAfSHAesuPhX",
  "key34": "4s6HUnqDMf3JJJXaP3LAVifw9zqpQiAyhe3jCrTp3gPjZpkGEfY2ZvzBspzcMajkHQEdvJ9edkRhD2fjQtjeBw2v",
  "key35": "5MYPkMVXyMAAU2axHJs5n91CY6ozmdEYZhyPuSjS1Hkzk5xKZjKWFPAGTvjMyTfJ8My7WTTChZnnjxn8rTeCq9c7",
  "key36": "2VuRfsYKybs59h17dPYnTeYtY9gg13Z1GBbbPMmt77an13cQXExX543mtsZ7UjjmePFwwg7nQBiHSPSTvc4dfbSh",
  "key37": "9dRUJ1ccQ7GSYPAzn4SSqcf7XXBRLB6DQuEUt4YxYi4kues88a5wkUTry3KndNqfNQGWSyy5oRRuSAZmoMwPXEK",
  "key38": "4uWYYfpNzvuFPBkHBTGTcV78w3RNWMGrTEHkswkLcFiFpk76qM7WUMy3UaqQmYJwZUfoSZQZq658aBNxoWwWNi3n",
  "key39": "3y1mjTLA2H6XmwJFmd1QHHyMexo9CjbvkvM4d9b7WSp1L5Z25LP1w1TmkrMuNhmCXdh5CoYDp7PGT9BtXkGLocmf"
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
