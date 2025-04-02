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
    "5USMc3t2V2DGKMi4zC5nHbeJ5sbz3UtsmkLmpLvNi5ZPheuADgzHUURVNmQ8CvR5mqsyyYvc6e9vdsFcWc2USrNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EgkYqTxvcKaKLvCj7nzP4PFFxCNsAidHgapd196PRaobaWqX1MQUGJdsQmFmFDiBQMd3fHZ1STrR8q8nUukJ3L8",
  "key1": "4t6DGdq19EAQ3Ub7awvU9YgfnkQLHLFrHkLXmErGC8H816tkffuKFGpBTbjH9f36aA4x87UdRbqGX4gHNtF3a2uE",
  "key2": "6F9UbyGqeSQ18YKffb2S5DATBzb9eLNGSABX3E7tnm2gZg26S1aCAKThZgGeKVHzw8CAMrB199oXYi5g1vy5eoP",
  "key3": "2kksvXSZFbuV19u1fkEwNvV9nNqVR6dyJbRgPeK1hGZwTyC6YMmTE9eerbuxKhkQJySGbAZSoMTDbdBH1xFySTva",
  "key4": "5ap38gy7d5PxReokLBKmREZ7726ZsGNpiqnVubCmroq9teA3eFu2zEjn9qkXYuECJm523vxfSBvKh1DG3oP5LDeL",
  "key5": "2Y2pKyEjNwY2ZS9XbMwbb3UayouhqVubDWKm3zkxQ8k5FewtHrQm5uKVtQ2iMvTMucMtWSTXkH223cijJ8fYAU8Q",
  "key6": "P5epLWiiqNLewGXKE6ARYqqHgsK7JMQZRLFjFcYrMgzgEquyea4Z9ZCDXS5SEsG5GUfG3jsbDL4umBZMf9op8bE",
  "key7": "5oz8q8P6P6QVXdvvGBdeWx1bDeC4b7LK5hyb8PYFZXhgZ9QSy556wJzuyGaoN5aqpjAteAccVtXYpZMwJLP8hf3n",
  "key8": "3n1gcvqWEL2S7aojmo3b6GSREN8z8c6EQCNz6mcpzSqLbv1wb2kiW459iQnSDEt7s4jLR1vTrmCCiTyCvNmxC9wg",
  "key9": "3udt27u24KeRYuhevGAwn88UNNJLZqLVrdkntHfYyPB7ZmXTXia8DcdATYs6HbQnbemNeLCcv3nqLDEjRNppffhC",
  "key10": "2oMruypF2CrUqMZWawFrEa1YrkuFhdH8bV6W8jh8okit6bqKHAFbs3dL32EgbcYXLtGbXxxbM5scqXR8vUKEM19f",
  "key11": "4HzazHbVPFtKSJMDHubgj5pG4rB5TaMapukohYNH5f7ddo5CgbYwKxQgz11WeZd33cz2v9M7DYK4wu5DKfZUsmWv",
  "key12": "PwWrFcaETixmyHwtgrxEtQgpNBSEPNJNo5JEJQ5yqcCMk1QHsotq7wVyfVnGNcrfcYBwg3LKzQbZpaJkxS9Yr4L",
  "key13": "6HahYfvKP3oFMzZSXfZuBgVdNmoFLnQKLnwNCS5dbaMytKsi1yF5z61qfoew45bYDydsmDaJbZ81P9KtRdncazq",
  "key14": "637TntrKAQ1RnBkqrkkfGjS6Wxg3EDDXD51ikCAKbLjPTLDr2UrCv1ppATQyEfiDRjftEdw41cph76j8GSocGi4K",
  "key15": "4mxMh9HdcND3MF1xkxz3sGJrWDqd7cZHZt51APxULAAfb4iPEZ4mPDNDuhxA4LJPm24CVbz7augYWQwBBqJTLKcV",
  "key16": "58mRdK4MXjX7veUnhqu9T1pEFSztxrKXHFgRWvgcmWxyQTarN6na4bmWrjJqiTHoZZQUaznoa98E1D1gApSDysnq",
  "key17": "2vRaBNUg4sRM5SAepcLjW9L3ga4WsnxekKeUgqgSqQN6rwM6j92bXh6ZpXVBEFeW2ZiQXD52LKPdsyrVtTWM78zv",
  "key18": "SVUaxCGnZhRFEM9a8ttx7XYrKxqLAgTrwBXak7rUawzcg9VCDoW8awyQb5dZNLtefDnySwHoavvQeoom1aKAhtN",
  "key19": "3tBbaAyCSZvxpxzgi4BNUgGBVsqg95RKLACsRpzeQZmd2qrRP3oKHGNnX87JnwCnyb7mEUKRNYuYdY8NUSN4zPot",
  "key20": "5QTXnFJdiH9xj6hK3DSHd8NnXKbQp7Z2WpmQ15bhp1LeT9eSHromZRYPyvmcuQDgACg67WyBP8MYWBERQXQy98WX",
  "key21": "3sjezbVRWH3vjT376DUz7jWZB6nvEHPWxvkmUugu7fxVLREvwxf3TJh3bu3e4HyihwdAXnj73Lm5rckoCWhfpShN",
  "key22": "42XASVA69cLsvzFyqda5R2jhGFtRdLrYv7HkfoAjGAtMr5vmgWLRAmuKnZPc6qXaAnkRqgzNDqgDSRNFS7Rt6mFY",
  "key23": "wZhtEn4kThapA5uoENLsFUPLcTarYqqBVTCLfiGYh7KsedsDKR1ATd8zfD9C4UixxemabH1foiaJGiAsrhocJzo",
  "key24": "5ySkp8XY1UhByHZPF4dnSd3bGvzFoQgFrxJMq6GBYdq4W39wpEZkVLkJc5jNHUYPpdLjdARhG5WvnwfG9D9AsDcz",
  "key25": "569U4ERUqHEQPTGb57iKhWq4pQFYfJ1qPSBhxrtkFZcNXYoQnVhcuPdx6LEsCVbhmrQPQ3cQgSxM8bcAM5X9sSo4",
  "key26": "B86GNUs7h9uQLcTmc3m3sGG4ZAVT92xK6joMY2T9AFscgXBmEA8N7E8b8DBNfyWU4Y7b777ASwijLVtRNBV1uFw",
  "key27": "5fuvYHjz6mPmjt9SoRKnRhp9ekodLAfpddF5pF8chk9KQroiaKekxDoMmjQuBgqmUDQsNHp9U1uV5pYACU3Nkwyd",
  "key28": "4AKWAorGfiWEedGJEvJMRUvMSGEBSY2BZRRNwxTSjv1mqgct4cxE27WQxQd1WAn7pxJPcFeY3depZZ1zdTwRzyFT",
  "key29": "2NfbVgPURMM7D53SivwJUGwQMA714gTdZC8beRsSLF7c5FiepY2uuo3A3EwU5FruanBXHw9eRvGTmRMMi5XHtQdK",
  "key30": "4SMYCemAhFKmEyJCiWKkWuGCAaWnFmmdtYDmJwxXAaEeTpRBE8ES6CgU6gKxyhgQpLRY2U2eUvcncBVtY3QQfSnv",
  "key31": "21BXUQ2BnHALWMVEQrg93NQwWaJmU3Li5f7ccQBfW2dSfgRqnbrhGKPTTXX69GPXrzanro77L9SM7tHQ8iJgpDmh",
  "key32": "2f9jz5qHYmeMVbfAEoBe81iZUvuNSLzgCBz8nxJy2cwCFM2XrE4nKxvRFZcfcRGg5YgKiA9V8Bzmw8FfY9Xe17mS",
  "key33": "4DkTNv2pYw9N21reMXAZa5YNn8N1HQMhrmuYji8TBmu9GgdThm3S8C8UnrXEpThSoy3Q9GWTiM3Q1J9QNwc8DS7r",
  "key34": "2z1yYzVsCUirmfwte398wVdjDj7TipygqZCwxGmb8H5PdKi7Nqzpfi1PpdSqYeYQTgpD1sbwXs63sg9W7GTM32Vf",
  "key35": "4WjZJj1Yyc766QgXyLQ8cHyBhKL5vLaPU3bjJnPDZoS9FixbBrZQP5iVNz3i3XYbxNWMfq3bUzvzsnGKkZChQjfS",
  "key36": "5jWH5ddNVGasNu6WV38r5No1QAbnubeGN9L72j3gVi6zqRnAgzjLuthCWp6gP8JvU9WqxgAuypnH8kTW3dohe6Wx",
  "key37": "4Vfm6E6cZeUtHafqQRHN17HSpn8oHHc57xc8p2VKqrDHNh5zHZHQBg2N6g7TUHELjzXgj7Whskt8DTdnJ4xBmQ55",
  "key38": "51ixt1pvxHHxve7C88tK2PMcxgmhUbRSktUSJiudtALnXxhqxyJWFCWi3rt8pnJnKNDENSpRKn9nh3nZ6FgVR8bc",
  "key39": "3ueYHruQYq44yQtNocc3E8orwZUiaUTtL5cb2PvBpyynp36bXUpKCsadBvAW8azv2MPGmKmmnh4mvZ6jRyUFHrhG",
  "key40": "z4wWzk3Rce1ibp8bNigALszJ6BRFw3uiF2eKB5pozACY99NhW4u3C3dojQ8DuhRrBCUCfs54MLkhvA9qk8PqtdJ",
  "key41": "2qM2up3eN6iJoJmgs447uUdtczc4kw3t7gzjaFsQuQhFkW4tDjVmrEew8wxQEvoYyGoMrhPjCGTtpyWDSujxc4uH",
  "key42": "2bXPeF45fMSyNXRMBQA38D3fuNb5iS65R6Rj1JEmEnmD7WUMzxfkZ95qZoykPAHrjsqrVV2P6RW4oo8q3sbrAG4w",
  "key43": "36VJYNdvd8sTv62fkoqi4KZC1wruNLEQzoYoePMrwW3gpc1UqeWyeyTGFwLxtWffyduXEY6sCoumsr5msneSXtMk",
  "key44": "5FTDiXAwY6rxQkuN36tdQ3vBwfeTQwt3DVv78bXtt7g8jSgBm4WQBhfxw6gg5AnWoeMY9pyTTbnfuyxqknESfFWe",
  "key45": "3A8KHWTyC3j5T3AYv4JnPqZWCU9a33H5qUoufK8AiRNaBgrw8kNC3GFkwwJZZi76aj7GDXKTvacNp7c4JA9YPCbD",
  "key46": "2GDKxQqBLf7akeKAB9bcXjMjiaQCftiPVtYrgc2EZVAHwkteXJgfm5L4qyNdAyxkWNJR9Zs8wekgGNVLAnGHS9zE"
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
