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
    "2dsuz4yy8jUv17dScGo2LtmUyG3T1RcfBCD2jZYZbwHeu78iBcs5MkTzmNc7q8tX9soH1UvHDwfvvqxUXoSj9eXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pmAyN1E5ZkCXsf3MjqKNJyNH1JJXUd7FGB8phXqvGY18SKonjmxb1XK91PuaemedvnGJKVmrHMLfRFofAZg8Pve",
  "key1": "2LFhS9etz3TmZutkHtSGrMZJAhPfJPGT6ioC3fHXmEyRotB7PC6B4xw61c847LEbB7Dm9gAUSFwXUgX6FckBZDud",
  "key2": "28pNnAZbj78h1gmQ1asxmLFVfcU857t3J5HtphhqzDQEBRDhbuqgnedyPCWa8mtJyWFjiKaZ9rcCHnLrt34VoGx6",
  "key3": "297jRqpwQpWTkD1L9jw2CznAX3jm8stBAo6ei9vpx3EhRBtMP5GCU5K85YvqXdgQ2Js3DGaGkp6hYf7d4FnfnzJc",
  "key4": "61oMn9Qoe4v31b8cuvTcM5evevVeYLujnHJyk9vFDrfVoHeGqZLZjurtohaBeZk64gCtfH46h9BtDbvPSCC5k88b",
  "key5": "n8VKw5DVNUXoruXgfedihKCHPoYG4Z1dQrUB2kzafbhvFvThLuvi4xhZPErifiAhh6qBJpssHrjmBiE5DtSQHma",
  "key6": "JCCSAZcvvqCuCh1uoW22kFuaw5Mp618m9zKYFNpiXN9tnWDb8LsZC6apBDemEesFaGKDeiSLm1BD6NocdQyzJLE",
  "key7": "27RovhZuBXXKpz9NJtzUtzPdWHZ6RXYhgM7qkqmd2m5xhZbuGf5fRJEcLQeK9hSRkXEo4ztCmwVMmdveSMvv8Uoh",
  "key8": "3w4PvJgCMmx2JMNxD24gN5QcVNQDBc6HhVBuL9GGasxj1wXifYJHxzx43cbnNGpYUs6XaP1qJzZqUx7tQpHrjFLa",
  "key9": "24DmdpjnSy8LB5oZMyaqR1SxT7SnWA6Bdxh65NwYcgPAyXgtJwjYtzRbPBUxAkJPEfm3ouZEXXQfErP6avnohFa4",
  "key10": "PXb9ZnXcy42vAdppRRt35VECVTbBb4e8x7QrJGTs65S61k7EUdsqLrrXbJmqcVuScDWVMp8WEegWNSDgNjbFDqR",
  "key11": "5smB2g94Z7QcXFsrfhF9JSr5rKJ9Ee5vtSGibKv2WSL9kFZwk6x3vfXdw9BsFZ6ZtNDDn3MaeGVyhQEi7pgc9FZY",
  "key12": "5GyQDzeEwDGsvkSJcdGGTMJKFVC3fMqrG65u2ji2EcXKAxpZawKGnxSWVaaZKgR3U9BbsTeqQbW7fjGpFnzSTiPw",
  "key13": "J9gmTxLiTipvFNXHmFhGbbKoxuVp3KRT9L5B6Lb4eSgrqdCSwSaj9SiTtrzzRsMHemo1UKhfk5vnrDMZhXiK9C7",
  "key14": "DxpGmSJaiUrpczpdQXbrThNFxHU6yes9KGtnXfUb1CA49Jds1tYJfWB3LezFE3qKU6QtPKgg6zjyQjUd1uj6FVC",
  "key15": "sV8fbtMwjrf5TgduB3E3uqkZo8we4V8gs5Ympg3KLfpvM36JHJcKjfhWt4dRrV4iSjL9TPMZthzxeDXJD4VP9hT",
  "key16": "jrxmwJ7Ghavsx5TqWAzH6gJ8EuwNW3kqgm2CYqHXZoKop39DosXgEYFEHm69HMFiCN4ifDzRFpsEEPJ5GgfRQ98",
  "key17": "4fdgiUxyyXhAG4JPRMzaNPWzX3z7z9Czbfx6kyBCyuuh2cqH7DwwbvCwYNNvqeWucxRxiK2kJWhed1XLCKK8PyY3",
  "key18": "WVZNcKWZ1Vg3UV3LZWLJVbw8wDUDsxMQ2VckBc7S7545erf6887RrNtxrYAEgexXUkT8FLYGXyQi7uNTwWZZ5Vp",
  "key19": "2UWrZz3L4f3HRVo8Ym8zWCUysuiwDmevnMeuVVa7SwWvXeSeAN81b9EKxT6wbVum6gV6dMXGpwXj6smECQi3reKy",
  "key20": "2XQfTVQBuHWWzuGJiUW6CvosDbBNeM71iYWZrdJhizetgkKs1EXLCC7j6MxVZaeQRLyczWHs1zEJ2y3YnFrhaS5V",
  "key21": "3jf6MqdHpU89rjftWRXZf5o1zB8pqQqgmcrpCQA1cLkDKEQ2Eu4HF141HZoWEMbncdf7ixGkgCiyS9je9QiotmZ6",
  "key22": "47izd8vj7a3V83Fdux8L2JpSHhWjNcgKGFibb1wdNe8bQfrjoVH1y1E7ZNP4DbuJWFvWrquYhSt3rnC8F8T74SSW",
  "key23": "PwPUjatZ4TWNEqDZbvCUu3sBUGYuBmi9uo1Trv8QxsqyW8oDhwZH4R4JjPeeeFtY6wbQXqa6Ksyq39zVKpTpeoC",
  "key24": "SupY9XHvCzZTDj5TMmQ4zZTgw6krpEQVWAN7MHjPGkLt7oehUfkvKYVSX987docaoGf3bqmMqA8LZVUW7CquBRW",
  "key25": "3Nivm3LvTjrg8VhhwCLr7Xt59aymL74V4991nSqzQCqLcpPos19Zikz9mRiDbRp4p4qXKtMc2bpSyeEzABtGtzPC",
  "key26": "3NvW39b1JBcQxiYxwynkndX7TQ4dndjv2LiSXakhZ7NVu6zKuGocsdKzz6vrJ9DjXgDUfkr99isZyf1uuY46aSSF",
  "key27": "5BUBN9n6FfH7QXJM6HofuEa4NMZzQgS8FbPeuRC6CDNyL4z6tmqgbNfJf55AjNcJP488kv1BbMnT5wTfeV8BtyMF",
  "key28": "2aELynUYA9CBfVFrnoMF6TXzacNqNcgjHpDxxTZussKwY2GRhkRZWDeyWZfBBoqVfVM1GtByFXsomP5zUtMdyoHu",
  "key29": "5A2qJLq3JoVH2EoDBXhJqyknsEApuXZiznCjj5Jbt533S1bhkTwu2Ldzcrz6tW54RLkLE6eShigyKNdMSWv28Lxt",
  "key30": "5ihCQVt4Jhvabvc49k4FCDL6Fb5HGGHFKp66oEciwN18QV8yT2hL1MwhVjwKDvfk11SgPHAikar2X4xw5WUK8U5U",
  "key31": "5V3GqAhqP2rRmu5oqSYQeXFz3hStwyhKZFFU3CyhS5R5gs8qCWwDhP1dhmubTso3TkLjiDyjH926ixPisExPuyv6",
  "key32": "3yy8vbgoYLa32oh2J9TiLVw2hrd5uwKoJX6dpkg6sDFfP6gTjbf94QiH4yA15b9adn3cJEQ2kAoR6qM3CorSvmhs",
  "key33": "2WE7J55tuF8SrprgK2LPSMPCnteMwiuGh7Mc86yfk5kg1gbtJ8n3kxzXw522561EQ6Nqq7wTY5SwuN1dSAvnu7AF",
  "key34": "5HyfSyo2TZiGMvfa7cEKDUSEv3kfP7WUHWY8XdTn3bmDVT1U4iHnx3zgLoWbxciTrgQWz88xUzSxfCbVMnjMnGeo",
  "key35": "45ZRj6gXXEN4QVSn16E1LsqR3e2joWYW81o9LTmHiYqycFdudYPbMF2FT4uxTnmpZFpnKSv2LPGG1h8iDUHkrhrN",
  "key36": "4RnwJVN7eLFfkRCvd29vrBtXbwQGWKG44RRXee8AkTDTv8Yv5AmHcTLNmkwmpfGh9CFZAEXUsZ6bN6rgZt83dVbS",
  "key37": "4oA71cw4G9KM2CzGk2LxNcXu7bUjxdiLfFM2Ra2oH9AQXyA48uSEyXrZZnpSArx8GpmH4U5Ajtvv8rJLh2hrYtCL",
  "key38": "f4K8wYnB6nnF6tkQRbq72K55VEdGAGvtA85VZm9WSKCNZmdV6z2A4wTMH8DntaNDYP991xiHDfsB3yZKHNCrzzN",
  "key39": "2p4PXuhhEJQrfBFnkZfMaXFte8UHJFKh8yQGpd4eQQPBKupjodT1WfiRK2JGoEZ6NwtNyAaUfx95SwEpWTyx7VfR",
  "key40": "pKP69B8AWLJfQeUiWAwNAKqRjFVRXFUr12zBEr4BWz3K56qUZ7WMTNL1ZQ6FhY2M6k2KEGtqiZHknsiBZ5XVNLi",
  "key41": "5Vf5PzoovxQbLaP4kX3uG4BKxS3epw5u6uRqiutpQymZeBwPpvWBT2hFrtpzii5gPVM6cDGEmENAbXAN6gBJ7c1b",
  "key42": "4J8AYyfoZPQddMX7sPmWyo7Kqzzg939TzLHgSZ6gyYcLnjKFYeknan4FrwyxHT53xwT2kkVXADHF4r79c441khWu",
  "key43": "4kgTfzHtXuH3SFYP7RiznrWJNtc4QdPn69v9GywJYZm2LGaaRdPxtqNHHSQFh7ZH64KLwEvkhbKSPXCP4wd1Djoj",
  "key44": "NKM7GTbtaYCWhwydXXG3WhfEbWoBk47KTrZW6a5c8FAjr5SbZxxCRQPy5hDHGh5nBgbraCuyEvaoymcq8ecyWmR",
  "key45": "2eJ5chKWVv1xMBMSwGMBkmZohUaKGmNeToCcc1WgrZobuZ5vHWJLXW6VaDZNb8JheBpmaPf7D7XJggzXQwXfLG7u"
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
