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
    "3PPL3irBRPTVbQ3YDwbU7vKT1aMfzzyniPMEqYDVqqQByasHXfjD2WSanAfX138DmPxgUGxCKvWL5WERukGKjuEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RQwWHTp7VFUn8j6aFYM42NZE2z6pMx5VCiZPa8EN5sAix337EFqMLrUzbwiiQBX8n4ZTqw3dWwSSW5Krn4dTJW9",
  "key1": "3UjivNynsMFoQCQWfAhEyc9RW9jqpCLsMMcZp6mczscEcqPphEwyufnVKbuLescNReyM7RxftcMbi6JLSKnN7yeg",
  "key2": "39f3eV1ea6nVCnFjavDDLaUDB9FjALNeZyvh7voWT9TuQ3wga1PQ4BigWUHs18D9AbMG5AiX8opZ8PnV2fVwaxrA",
  "key3": "5PFDS1cmi3if91ENm9QZsPsKEoDYPQADHtKoQFA8NBL146HzkoUA9G5KRAWLZHvHtT7U34PHtWpuqzWu7LjfuKfB",
  "key4": "4Bq9RkPZxxGEZm9d5uPTXLP8SjVmXkUcQsoUVCaefXh7NtVynuw6rMqEgKQCNS9NztnmCPqCwobS5xtbWKk5upfz",
  "key5": "2A8nEkiPs32iwSvte5Rqf7CyPc5XLysLnrup5Ncaz1R2BNjvNhUA16musSk8Weipx4Ek3PHk5NKN9kqRxUHDJmkH",
  "key6": "8XcbYAcz81S1q4T8VXers8WgUkq8fXCpbSsAsJ3W4wFXxWcmre38sTiFjKmLYVVAG9tGv9cn35hTetAnbKbf3GW",
  "key7": "2PMmJ1QUX55vxbM4dLEMC5nc1xrSYBoARaTG2o8BunUoXdwQHzcauaXi16ihhPtKqxyhqDg5AoXqkruqNHYEzFSs",
  "key8": "2mRJipWWmGkzkcPJ9LQsw9h5urtmQfD8nP1fCDoHqC3Da7fKsMSpCqJdP8zekY4eGy74Tt9gcvJDWuGjvFwhWJM6",
  "key9": "2BDWUp5JG69f1zSJdHoQeEs6qkG5NHkqGhA7b7vUzSE1TQ3NvonnfMWrM4VKNKQC7x9UqFTiJD5c6Nfh1WwD2Pep",
  "key10": "3WZ7vKEAuYeEFrxLcajwFSdAdtrWxix1rSHzQe6YbdAE1dW7L57CRyTKwnqUPEN9xihsKuPXTDur4WEqwwkJEXAY",
  "key11": "3nXe4fPobSmDWR5AKwEHJfYdnsPBUfuVDPJfhmRPVQZ1LWVQpyDbN1Sn95ViMmgEGTnmnSzDvKsQUoVeZLyogNzd",
  "key12": "5JJrDAq1ycUs2LZNTsPjUAmbcaKZq6EEZ8EAVX5SZHwTcUDf5rH1HQjtLsWawaid7hzifxPQFofnp5JNwN86QWXW",
  "key13": "5wMtsJ2JnPDDxiCmrtdmhhNketth4xaMYPBQRYq1QrCw8arFTsvGoM1RNvho2GkUixHnHq4YPi4GhFn9mC8vXMtp",
  "key14": "4Pw73BvGRqzfSZjuQs5nAtR6RXSLopVWC1ieUvkEVt4FM2jPBa5e4N6q9VpqBwm4UxYXdpSCWvUmfpnn9krQGTMP",
  "key15": "4TrftBGv92dETJ4ZJQoTMsZz9ypWuETmbEEnUarocvdoho8ZHvyd3MLxb96XrxWDtZ7qLAYF4TMhaxudA48SsBBf",
  "key16": "o4QwKZHfTbcu1G5emnToN29PsxPkv2QUqB9vx2YiEeGRcjGJ6KsJMDNBgyJwVdzK6XUKmj1bGDpQDVENzXRqbNQ",
  "key17": "kwoiqs5YiFpS8GpjiKxswyQUJq85rGbcj9NWJFy6Tm7NfV63C8JbGHagGUuNNHpgBqdQ1o3sde5woRtvCxSyXqB",
  "key18": "22deMyDQvLk7XQh4oRwjxRJBa3Esf3cCkzUBNmXLHE9MQEWzWLETV8SHKvhFdCxmS8pTUPE2YMM6vVc69Qn7oUU2",
  "key19": "55ZzKK7gTadHEs3P75naNDEkjAAX2c6FJJvBnc8qAaeHFXRN4FDpHb2haE1SUFz2RSWzhmbWeaZHXKsRu1fbeR3J",
  "key20": "5b4yd7UGHm5PPpkAXZqturc9zTdkBnKDxG9o2R2h4FCNRpnE1TAgi5NoGZCRT89z8Gsqq1cdteER8rHroEiZcZQe",
  "key21": "4yTV1cJvUA9ifLBGVr9vTAib4ZQ1Jztk2pfz2Z9yNNV3nB1Qu3tD53o1gfZdv9rsYrqbWJhZdpYsqumjuWioF4MW",
  "key22": "2JjbgBoqfXMS8LUsxFdtT8M7nYQts3Pf7fqezQ3eoM33GT6EPYHKzEjmVW1UtArGhLs9L42JhH1EMiALexb1ouZa",
  "key23": "5zVPFitUpW8nxfxrEMGcrUFbGDCFRt5huEbWqSUT3pqdHdtQyuto72bWqoME8N8UDeK5rsgpekBumpBDaYJbW54t",
  "key24": "5NzSQQZQ6wCDuoN2wVJ3ef4EeibfYv3nZWYQ95MBtUFw69dnPoTG1J9PLyUsHQ38MFqAF2jQtqfBTPZFx97utBW4",
  "key25": "47TWUyL7W5GuZJNq47qzgiTwi11TijjU9e46979oVLiR2U6DbxQPdn7wxaTpc6Xt8BUnjknq1oPXDe1PqZ9uCb2w",
  "key26": "2paqwRpFSKcvVUVKGLHwzUSvCZaDiMyrGs6wui1nDKysvShXsssBECxusTjNHNu7SoVSY6N3TiN5oYQLt3aMZYJY",
  "key27": "3SENZzfcdiSahRz6Mt4r54cEkMHPD2b18srBXbugteX9NSRMYpAqZaJrYYpepDjtPZN8UNGvtyp4AMSqeViqQqPg",
  "key28": "4Z5r33DkTFiTXu5W7dQYxKSh5eVctBTBJ7e1ELfybBZ8iBHeERn47KCtNKW83snsmiR3gj5h7YF8Mg2ikbJxnbTE",
  "key29": "31s8hPPvDsbyaeZcqnw2UCj1BnkXbzRbD8LMHRrL9EQL7C2qKi1NTPtyp8nhnyBJY39EGmoWksyYmtwBWYqJzrEF",
  "key30": "38VnXy2ufzXk1VDHG3F5W3hHoGsge2xqRaeMKouFktUr3oQiYBfwkk92GHPx8FTeBn9vziwPG2niBKN4Z2AexQDt",
  "key31": "4TZ3gpyjFKVPu2CuoQTbFGuWnk1yr4ThCV6ZNHzarJ8NLxEoriSmbqG7sfSY71MPivHLmuHLcRbFJL5NZCJJofMt",
  "key32": "2MjcRtYapu6q2RQ3CP8Nz2ZS5dB8tBsmMJpdtYTy1yDbrfkGbwqKWdLkew7NEGFR1kEawiPJnLWfDnDe7iPCrKYD",
  "key33": "jmbqychGPnhKgqCp857e9JqCY1QKvWqSX16ap6xQVNHnKs5xL3h69oLmZYxWh7iZ2XZ5zG6XoeAHjzExxvWdpXp",
  "key34": "5vULtfaBcrfyAWUT3CBtzBF4jrzyHkhnz6FrvNjtcTmSBs47kNQ2LS9aK4QqW92NQptXE3MyN3tjsRDdJhZrPKAk",
  "key35": "5Dxs9DdhDzD6Y8DHswBUVpsux8tyZn9Kd2z1EG8ZSqEBBHdjU9YtQM3TyhMkGCga3SfhHVpkhmUqYncYZr8gtVyT",
  "key36": "3aaNhTB9QG4xYCqJKdPXAhDGZam4iHjnNpTJvtCKywFyJEAKZK7n6Ac14NRhC2cD3JcvpaWXLd5QN6xprccAe5Ma",
  "key37": "52r8hxBUFMFW7cBDMtAxaHwC8ot165UXfNeJDDEHwgjFL3dBdSjF5nKfcW3tnUTTscTKR8xDEA2Sk9gNj8427HQn",
  "key38": "4181AJ2CAF6QcyZYFNnPuzm4zwbNzANSdXb7uurMXakvf1BhSMRZpovS3C5YHTEjqtujSPSVJkawhnGo1JzcFM9n",
  "key39": "5gditCE3vPW9kLBqLpDmsnk192jsmNv4s3HhSz1NcheNJsap8Fh7xKDsbuZ1zj8KxLTHS7mKZ9NW85ZeajB5KnzN",
  "key40": "2iedmFDicCYVUfb1S1SkNcF9DxtZDxCtuqbVFbdEC6JBdT1GLovqugp4QaJQ5Vg8HdRKYLEcBqNrfFCGGRTZPR1d",
  "key41": "uHY5v3nwHjqFNXveUyHrG2K2Znv4qRpPwQspwFVN4VE2Y1SSjd7fmkCoS2y29u1nEGjbVYcg7NanepcA1rJsuu4",
  "key42": "4eYVnFfytYaxphFU81Xp5xY98XwSxBUWjMfRPnszYwSkpTYNhG1Yu8Md8D47XxiTq8FtzSKM34PHBa7mKmpwZMpv",
  "key43": "5tCyMUJ2UBLB3Ds7rUA217EUmU5rkVf4JinpyT9DgKVBwU17CC6bU59jDHPpZErRwGaWXVVtBa2DyAU9ecijLqZS",
  "key44": "2TZxXbafgdqh4MWUypWLJYN5EcBJcwUARkKmt3JXXz57hUE94Hq6QRyvomPL4KRH1ohfiySKYd65Vh9qQGdpQ8RF"
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
