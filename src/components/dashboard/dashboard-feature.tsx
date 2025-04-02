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
    "PgQez63VKgdRjYi7qmQW8wXwdzYWYxXeTmefmUVQ93BKy88S4ShwTF6xkjfPXj4dmoBbXtZYPdZxDbQhS8kfdBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wtXM3WNfhft7w8p8A8iFz2gPZacKkLaNa3XaGcVj6WzggTsHQEvCMSULSi6DSa9M8kfqrtQTzCim6d5CfuGTHzd",
  "key1": "5URjJmPvAqBmpSGrKC23WR3YEzUMxRJPwB3RfLspQ1aFTditFNj9EiYfyK1BgBq7g4i29dNcBmxY4mNunnFQpE6j",
  "key2": "2XWEhUUF5ffNLzxApPqrR4sR5gwAYT1KA4JRxiK1ej4QWmGP3vRhizL6dQ3AQwiMqQftVd57o53VwuSdRL7sf7FK",
  "key3": "mAS14WSQvn7fQTLa5qJwJV7Ebo2Mg548WyAVMzapqdxjemc8eamGJaBiehwG4u5uQ28g1qqEqBKaky9z2aCcfR2",
  "key4": "4VxVKrNZH4D76PQYtBH9L8pHtkCuAoPq3NKNrRm7tW2C6gsS7FdgUmuzQXdhHNbV6rsEAHB6Ck9VJ6X7Gp7ziyBq",
  "key5": "3sWDqPTkHJw6aRgC9UFuiViesmeqMYY81GDBkh3DRw1f5ihXKNBtkMoLNbKjSbun471gUXyUiNSMRTSrWKvBrWFZ",
  "key6": "2LgoaaPDf2P5MdFee3wf8Ubhxv84c7QeNpVfxcDUBmikoJXA5pm7CpCE3zzPWBwcRopNf26vq1npEEKhsAVuEkZm",
  "key7": "rxuGuoiCRRbEFNhCrXYRf3pcvQ9ypdMvhauFzU1uy3zPwGzwW4nwKnfWqKKKYXv7vQzLhahNVWpQGrhdSxGWgME",
  "key8": "62cRvsMCQaTm8SYVopVgdjUMR45qRX3esgba4PENyToqG5R91NoHx6W3gJMs95awEgUt2FNqtSHofD5ar7xZDx3G",
  "key9": "38soVp1FRkk1Z56Vu58R51dkFmHfEF4RPWdwy8umaLHPfeZsxKptZDj2YcbXizrbYFfZMbrvUM3uL64H7uHyJGwy",
  "key10": "3kisJnoax1PfHqVaQDCufEwEsptd2YfFKqLavoGPwWfQJ2shK7h8JhHfZv6vURjTv9Z3EcNG6PhM4XTqtbPBYcVB",
  "key11": "65MrcU1AtyW5HnnoecGTfQY8GXNRRYEQ1XT8VCAruJkkcEFcog4eFhuLQ6ZmxbwGARfn5TDXDYS9nwGyTEPuiW2c",
  "key12": "TC8iN1yAbwJU2Goqx96d6rXubLAfvpHzezHJ3eMW1wXeszuK2J2itxMtAFu8WZuJprJsosb2vArZG6yYqoRXVPf",
  "key13": "7EU3WMC4PiGwJgTrEJicrzJvmcu5g1ibLp4rgSGgAj2mrBZ7XuqLFVutcQx3Ze4AHPhaDt7mLsCL7VmnCbc4pA4",
  "key14": "3ZRzKEvi5V7jqEuJ6fRVVWZ9f49g61iuZHWjKtubKxLmxiNg2JZ1y33sq6ZCKYTkNMXd5E7BXEHNHvkVMio6bPCR",
  "key15": "2sYAeVRbSqeQ2HN4vx47L9TJ49C1d9tf3QJzNoNiwQkMY2gFUUNrFrG3hcA9rvrfjFFjHiovGGo8rUe1qB9cHZaG",
  "key16": "4z4W29JWBbJknVeNQCAiA6NRupfxiXj8k4Pf6PPCmqfTJobBxWFS2BurJbwQ5Ngrf1fkeaywQiTPeXbr4QZxFUfx",
  "key17": "2Cxf1FPdNhwbFtG8uCDft4Ak1wv5cXACT5DXqVtcvy9BcgwtJ4PUGkqhMVX4VhvG1EZ3VJGoDcy2fUWsyyZxmxXE",
  "key18": "5Tq2mZRXRzeRAHh2J3nimtHxQXRL2DMVTT1MrJHTZ1BabAmL1SDpwfivQTi2bTAU5y9CycP7yVx1iZe79yQ7q3dS",
  "key19": "25kH9XUYouyMab9E8zzUUcXPQvHGtLbPrAgv9zgFKUzyBMt6Bq1r3SHKDUs9myV4rWWt7gm3a1BRTDbN6QqYiduS",
  "key20": "EEZznKtMQ6gjVrAwn5eAvEP7Q31AU9cZQjmuF56iTggBsZ37HAqBXSjcPWAaU4cwpuWGQpMa2X1QUBR2E7gc5u9",
  "key21": "41ZGD4xS52bEec7G1HsLcugxsVRfLM3VTGpUECwwyYQy6txNqRvvmSqTsvU8v88MT9gV3q7QB91YxvSiwwbqjXUd",
  "key22": "2uJBAuXQUfw7K3PdbQNB9ZUyPgWdwBvEsWRbmZvd5bR9YNhRNnGcrdaWcFaqjEd6b5hbuLVaqz4MaG5TkPpac8mm",
  "key23": "62vpZLfTy4oFaoEHLKjjwAivcZ63UcF1s2P8BXFT9ZVFWZhw2zgYZ2YL2WQLetC5Qhx3W5q1q5eS99yJt9Y9jKpJ",
  "key24": "493peikM7ySTayiCgABm9tVVHUqaRdGju3kEQmWtrYXUEFyemYVmBhuxSg7Qoht2CuFpR1rDLSdrUP92PHYdgRFm",
  "key25": "GgA69CYEywLEV4vN1wWG3fM5b7hPYzLcfYbvawfjRP6re3CiALXVX8T6TNv67U3CE4zvFToFCW8buVYGgWLXkRw",
  "key26": "ZqkqGeN5hcAvRnvdmuikRgAmXKgNrDrEPa96zymdtXfjpjSS5Nx1uTstNf9E3zfvmGgTbPwt5C6S1ii8H5Hz7MH",
  "key27": "2SFZkyJUiHRVjFGVF3me8dr73vdPGRyTsTQ6oKfdbh8exx7gUZH4jZtpPqi9yimrdzr5HVqz8keCkQvczK8oFhr2",
  "key28": "2i2bgHJgquz48Zmok5jAcpv6pCQW62zjE6FKCyN44nvpSJzZvY6QAtTj29JcEX4iyM7pdyYbqNbCagqJb2B58DNR",
  "key29": "3r6uKBgEmkJPbfXbFy2NrppuCpjHBoZhGriC2snkkgax2MaDSiconwvuZcTNhHJfdhQeDGeSkP2JhwGS475qhitT",
  "key30": "32wFpJziGgN7RfN8ef6LWq4QZ3ikihsa1tXJL9BwSfz8vMXrfSwMmQgFVGXyVyrbEPES19Y5xQ15c7wcs9GXvf1i",
  "key31": "SUJK63TjGZfojpN2uDaNvVHRWs6SgYdbbEaVH3SddPK9xRrMWMwGc7J8abybufS3wuvpmzwrGikwN3vronnK1XJ",
  "key32": "4T8CYSkh2QSTRrwW27ACw9q7BWVeqUgTNn754bRq7WQzgkmJ16eoDmQMWHzVYJcVZXjtGUbttgqPW11avnirKg45",
  "key33": "65AVLYcQDoDTdS34Y7TKUobgwM71LVCsBvgEdKzci4Ni12PUGKjVm2AQtAUHR75LkReMh8FMHpkz95HVwkE1i3fb",
  "key34": "m59Fnv3j2sMqv9VWLM1RxbRwnMYAL7xeXPfngSAJT8zitaqMT9Gj57A77jjPo5oKiQWLT8kjseLY4TZn47CN1aQ",
  "key35": "3dQi7LSXBd2JivQuZb8xy7rCKnfeJP13EcBVCvJttEHSeC6QBvGBCzLNS1RkncWFWG3tTwQPWyrKwuwvdh98p6ym",
  "key36": "3UykEtXo9HyUHkMSSh4zDQzKYJ36yxjcv8riSv8gicdFb4rcu3LrRysMssymgYrw7Wfs7sapsYRCBxzU7PswkFiR",
  "key37": "2oHSiyRWQKxHJMM5vNHru7oZpYkPsswjT2HejikHfXDqDJtKHZFF4r1ifCnvm1z4nNmiDNHhA6KqaKmh7euF3qno",
  "key38": "5KLH7N3xBqsjMRUmBjVcuSWKdVddbKXRG2HbxGNQs8Nh4BpwpCSSkMJT7zmFA2yV33c6Ti34CxLXCM2RgPMYrCfh",
  "key39": "uaeMkGXMHHXzmf8cH2TFzPQFJNphZb6yNYryJKx6iEU7PFzUS1sZ6To4s8APK2imNfgDyqvED1iDY2gS3SwprYH"
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
