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
    "21QS677EFq2DSntAXxJ8es5KhjE68pmg4XusERQhuczhtQiC1RZvXFxGkdVs7DeQN1Unj4QgKkYbc4AKGZ1LkVRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v5ofHiKy9TNsiWNZ9zmrzZAG7FMZQmyTpyyfnZvSS9QHHpyErq6KHo3y6VZEhsC7eaAmk7ap4LZTz8eRFHdC92R",
  "key1": "34oVqTtsQBtK8ubjrTuqAz2VLAZaPxZvBRLewBTiVhG42qwnzRvpkLWrLw2bZ1RPE3XuCNJLECBSAxaQLuin6ud3",
  "key2": "5H39cQGtCUuKQSv24qNGMQhVZK8ghS7MNbzs67CJeAJeJzUzAs6LQv7vtxNeQ8UyTPfNhV9meV5YPDJdexQvKJpz",
  "key3": "4HLqB7m6r2KUaVpro7mwM444fDbkVoCJPSxUbrf3feA2vrJ4bS1bj9ui41sbeCGGy6aMZytcapzKAwKSCQxoEtjo",
  "key4": "2XK9Upir25L5TeMsKCChv9WDJASRtf6WSXs6nMP8BGnPYzm6Wp6EnDSTu5UYBbHyM5ntXbbfJGdnzW3FmCz4iCRA",
  "key5": "2ynVUn7Gd3HReYxKjTkwrawvJsffnqi6FVeQ2gxZfQjCidQxZ8aEod4ogbuuEFwaixcK7mN5AzYZFnvegQPY1P2x",
  "key6": "2gE8QRPzfaGMkMPq2698NsogaCJTCo4xXnwGJfbNamuAoBsCXQqcHe1gmJzzYkrpxD7irYHHSd2WMJP2oE5ACdig",
  "key7": "2sh9vhmFcgLwxeXeRXdtzydtwjUU2jGygo7BtTzLq8fdhHLiQMbYmAvqXk46Vgvwiz9NFn3WiJ83iD9UoX9nVhWS",
  "key8": "4gCU61yK2MNh2KNPVjHGhuSSiWWFMtPTjMPsfLX66msT1BAhC2mHZzyoLSmN1RfFtXifDde5rSsVvfdJsbJGJ4UB",
  "key9": "4aKURBm87VXzQzSTWQ2eNA9MPGursBcWnATsQr8PF9MaDvWrozcUH3fWAt1pbdUR5WgEHahFwqmQdXTa9n4dNozy",
  "key10": "3xSAfekJUvUybmgyaDtQKqE1teGQm81GhiK7k3qZyRfQfLQtDFmf2TP9ey3Ht72gNgMqF95MaMYAekEitaHCtBNU",
  "key11": "49TZG49jWH7eZYG3wQmbkDZjaPiR9jvny6TF1thTnbmfVt8tTToM3vT5zZHjSCmoXXULrQ8rCLQVR6Q41xCpX6De",
  "key12": "3p9bu4fXoPYnpnaM2KEq53nrG1r4JNd9BQYPRvc2KwkNfeUGgJxviJ11gycgqM1BXP9xkH99fJu41PxfQxaJJcAJ",
  "key13": "4JmvfzxvhRgiUXqtXwUENR1gcMU6zQasVX7TfhEPks4fPBLEyPxerSmvyiz9HkBq47YTCD8cqDq7V5LCykvCMvUp",
  "key14": "2FdsJwMQNHixsAHHaA1p819o2PKJoFgf9fQwnbNDtGqubZpBtD3VE46BX81QAfQwxAyxhtHvPohbd2c34ZawVHEa",
  "key15": "5PfCJ8owCzvAZGLjqkfwGFtnw8pCjtqSi7hnTgjFntwPPQk7ZKaxVoHzXz4Phm6DMoRHNyJtHZtfFb3f7geuJNNs",
  "key16": "3NULdsfpG6uKZ9Kvt9MXzqwrfTbGvz5BNqxCp3B5jJ2mkb3XkFEoD5tERZg48x5sqy6mh9EpH3yXQiLukLsJNtuo",
  "key17": "4Q63ziukECg4ZjxUJxQQDZHtqJV8Z7TH1f5Rfo2S1JjFkEASVnshTVUfEvp5LssFXQcVaqLX4MRCEjL22VB5bmGV",
  "key18": "62moBHXdGEPbNFg5XHBwdv3sWqwLXN1mKjwZMcMajx47bCvPJqw1hghMqTb12p2oioVFzby4No5SEDybeAAEzbBt",
  "key19": "5obxyPPiVnTGEPgX8yMHmhXVQV5PgMJeG43NgBE5odr5QxRpDvAJZr5sMyYnxD5Rji8dZjc5LZyFemEkQNYF6NYY",
  "key20": "4egQQsTUUYhuG26hxW59KTd9uqhhuxDApmmVr1c8dEhG6ZZUDmwNw8jVV7cfUQUuJAxwBojf8gz86AJ8qtduHukB",
  "key21": "2WxQZQvutmuBmtnBz95VATUKJ9LgjL42KoMLXUPF3nhRXUTMrkH8UdVfMSX7T8CciravfBeXyCEJuSi87CwR6PWZ",
  "key22": "Hzji3oLL7bAJKc6ko8vZBuP7bvZ3YyuE3mevHXFxX3Y44ZPSEQDTnHLXAkD3BQ2ZYCrterpP1LmQVDx9iaVVtVm",
  "key23": "23BbESju3xp1yWKwwk8UjSYBNE1uodnKjGhPJpEJPH8GTKKcftw9Xfgav5ZqzVPohcHW654SmgdzRtUE1inPX9SX",
  "key24": "52fPeCKmY96RUs8MaNMQQ46GpeX6GWvKT18H16JRMAGbdr7wvNBoo8fSbEaLk3WwehNBHH1MYJePdKVUayhLY6Kn",
  "key25": "4GoXM2K16y1jLktT5N5EE9SdeM5rgVSGgqJjToiG1cvseciymWNvdVdarMkaaNCboASCBAyHNQykNPSH3XiTbUBw",
  "key26": "37CQEYHBvXTyv674nnHNDEvA158t4ceWkEGZV8VAP7PwzryXsuXy9y1mvfHGJGQJsb9dZYDfqAYfgomzkgRuha3Z",
  "key27": "3t3U82PVz1HAGtJKzMxfg7ptdHj9KrK7437fWdhkA9Q7zzYPuGqB4x9LxDA41ub7DHxA7JzB4qB9AKo8PgyuFrZy",
  "key28": "qoDpjkRPpvHFqTTKjFzZg8reGPq8YywF9r1RCpmKtYr55gXLEhUzTPtit7z7Bph26pxCf7vJ9kWwSFguxjaHPQU",
  "key29": "2w5yDbK3XXrz2dH5qxMv4LjoQ5ECRgXZVvsv21c81MzUMYw7GLknnzSnQW53tTrLbi6PGxkJ1sbcQyvdvLVwkxtJ",
  "key30": "3BXhhE7G1pqybc55TFnkwUQbjyzH8hGPfvWsrZUWHxmR3uPxH96JisAxiwBhZDV3EsNPWo6X1P2qwmC7hnHwahxf",
  "key31": "63pXGwHabhBAbgo1nFxsNytkvwAMGkA8ewZPKBwnobx6SnYttEu6sPW2dJD9SjPih8XT9oB1e9unCt136asUzSNY",
  "key32": "nrHE6hee5eumZBQKskgynouf2Y4Xk8mpWWTg2MFSQc1VUYqR7zVDHsLCcqRXyc47o8sfdMsTA6LxXdWgHY4bcwF",
  "key33": "3gYiThLAGfQmGxo5qL5QHHZbfYvGEYpZ4mFzesJ8XqbZn5cgFLLc54h2MXh37caSnj7256j6ctgvDEXYcd1zguKR"
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
