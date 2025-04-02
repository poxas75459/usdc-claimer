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
    "4U6gaqpdAZzdmHmNWAY2onrdLynhUzSMUTDcLrJoaXNPBndq2q29GqqiRgcU6TNHLay4zxw6xSBrbntFsVL1saMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dvpHNZmK7RtjKmtwjK7sVMVv87mXexPtRTLQ7JT5MDjsuBrtZJ4e4ibU61RxKxEsEE1i6qm7ARyb16SevXb6sNi",
  "key1": "459NAK5iAUdFUza4gZ3KDv5q897KXuRF3cLgiGdwu83QMfQMXjxd7t8uh27M1N1fkZeNxvzRpoaaJYZ7ChwAkgPU",
  "key2": "3Xjw219qca9pYjTtaSddQynfYTpKs7ddjc3uvqNrBWyPuspSHeut1ABfddQXNNQmxpSrzTGSBwurfyg26sWoKi8L",
  "key3": "2Ky2igfCcscCR8jomZyro4iGiXJgnxVX7Fc4yKg1vPy93sSP58wFRptVaKZuggK7DBYVSTSjTKHbRrSi6Wytw6zU",
  "key4": "37t5TJyF2CTUUGsgLpmx5sinNc1KgjMk4rPkuc51jUBCwdXGPUj1USNfzqh6G7FHpXaULWrmfHHe4X1NSZzrwofw",
  "key5": "124bTpwAY83XhMfZotgyJQWx4BW4NhsRa8UbFkmxJ5jzMyZW2fLJbvCUVoEEmvti1p2FYWCjKcNmVmVeJ5F7pigd",
  "key6": "2pQnYn1KXG85Le43xpe2re5XTgpPKF5BaughCz2UosK8wdUk9ZJCBb5eKYPNYEfiRkGFd2xLUyPa7uYPmqgJMPKf",
  "key7": "4v7KQHQ47fwVVubPKbaVu4x8kZPhGRJiCHDhcoPE8WnEY8Juhusp7Um9pm9SZNFFAvS6vSKcmHZ3yGYPoYiBZ8XB",
  "key8": "26dtMRwiRsJyYDPbd52vj8AeFy7TxXojPVDVdKQK13GRbAAS2nAN39XD8nYuGdUiMwZyDNw49aVm1mvCZiLbnd4a",
  "key9": "4weB2r68jh9hGZj32cSC6ryqyGhT28pSwBXfuicvyJawuBSCqvruuozZLTqT33MKdBnLrv9bZP7ZijPncage4fc5",
  "key10": "hsXe7HS2KPQFixdZqcteSd6w4yrbMGDfvwzNn77nx8ig3yoSLPtj6JhsF4A33xrQ2i4D4uHaPvrW6Vfg99Nbh5u",
  "key11": "2pRbmbA2KMmhf8itRExCesgmVkRHwvrtYG1apDGX5paXKvrZRsq9gmdtzqHhXPA7qsX8Sf2qsiK4rGLiCWB1ByrK",
  "key12": "xga2k5NiivRzQTMK4tXQYcGr1hEqZYG5fiAjvWMefucU46KbLS59rNHd48vK34Vm7EQ11e1NAsbCfUoQYt5KEFG",
  "key13": "3Ji9oqgwCsj6vFSWZXpfvuKeuPBNhjoVV4Y1A8vTqJFSbbutJNdTdcS3TSqHy6stSoPWd7FVZq8UCsS3ZTb1DAid",
  "key14": "39y1UzNarHv2UcjxnbhEhSxVU1nZAvyVfMAQNriax5sRwHHWztG4UWhm3sicHgoRge5WeVjt4mLAu2V24RbLqy5R",
  "key15": "25ova6KhsZzfSp2zRh9Vz9JXbET4Z5sYx5Dm45kNN8kzQtxNrgDj2xDHeAnAEA1K15tgCj3NGqN2sKQrAAyk1RWj",
  "key16": "3pTrPngaXyvXtovGHRpwjCiGF9jxtFcoRTMKvyxF86B8hMvcfpkGLuZ49GMPJgeZqJmB9Uzo9WFzx1a4ZHzBYv7Y",
  "key17": "4q1BNfukYvi7MLWxy6UyUAqQNApdVnE4SyraGacy4UwbFZ7nP62Pbs4s7ygC4weXLS3AZ59Wd22YyvfJUYNeuFCC",
  "key18": "8kR7S32RqebsQq9PaZc9DhPPjUAf3Jrs87KyJsMsmMoiu2GhHvsiExwVNUeNTtgyhf5gJEnKzD9YUZLEvQ6iAp8",
  "key19": "AYMtzZ2ymAoxZ38Yqo6SQkCyEfuXCB4jCeoesc6GPVdyAMzYFRqeGFA4hAedybEUxiGFMh9KLLnBG74cXhGskCg",
  "key20": "34qYLirs8Xok7n1L2yVrRZ4TkgWebCu11ZYGhM2HY562rDivEG22xf1vcpbUtBrLBT9S327thBfpcfPN2ami9Mrp",
  "key21": "4oX3w8dQCRUjNiEfN4TjepHBL53yxbkYRXeJMkEdGvPRdzbNJdU2fipQybZkkftfXURwTaw5LPsjN1FckmyteFNt",
  "key22": "5qzuZdWQVnCYuArKPYzruedcPaaVr5XdJzorQbLjieZ4G1vbjWSXEvaoN6mHq4UjbhKMz6dut42GnTv1z7PMyJpY",
  "key23": "2EdavKLSd93C2a7pkGn7EaPefFzESGsvf7wHXEbLB2CV8pH7xXYDVcKCscaj2UqQc3SK2Hs7mA7eyvpSnbTQ97FF",
  "key24": "44wmxn98fkeeNWFhSxDW2VktkJKuzwdG4tKMsuCta746nCxBtMYAAntdHs7dtgwTg5BQMM67ra8WmJ88rqR5YNza",
  "key25": "2zA9dcKfhqCzj6n61aU4ruvUvpexnmGt4eshTRxCNodatWEMXQ2CdLYLekgonHKeGAo7Q7o1qFX9ov1SqpsTUJB",
  "key26": "3TLuL3EtbXJCmGT3BWeEUcgCmad2ZuY3NnXYBJLmjyyjBBoYXsaRvDWuaSwwM9yahqfog9SDZXWMrcdzopG5JXaW",
  "key27": "fxcmrkZX5DHrPaeJyvggAswXxsqs37owgsn2XMohxNji2Py5bGhc9HKzNCmT9LtXetm5iS8eX6M3FxZhF2dak8Y",
  "key28": "3KVB3k9EggzvCV7RUSgnhhNeygN4QaGnHyTRdBq2HhwDyW1YAhjd5kDp79rZHbiN6BGsknLWVdTiL6XA9tZVNoKy",
  "key29": "3jFGz8XioofvSm2hKn99WNSjKwUtNZgHCFGMGddaqJ32VaQpY37oH9pv2VRCnv9FYMPysaGWkPNmpcEPyFxLFZVd",
  "key30": "5AMdeNZmEfYjz9rHdAptw6QTt1rsfYiC8k9zvNeVkZQAypDiKaEZTqzXvSpXeunAxRb5Y7iYPEFbiLP7Q9TaekAm",
  "key31": "63PkK5XcnYHBvv521fCh9AM3EJehbyR1LS9LvmhutWjfRhMB6gjowR7ZzRYNyXaEcHLdmozqoKhxmgdw8RMNCS7K",
  "key32": "6psusxVfN7WudHeGMHk3qbXac1GG11oduJFqoSMAf284zW5QgbcrvABGWg6qrf88z6r8fahQYi1t6UUJ9xAX91i",
  "key33": "MXMe262Ke9o5UueN5teTZSMB5pos9FEny8spAWabsLgG2MUvtgxVVZ1pdqc7ifbU5Rg3xmDrujhpNWF26v7PK9w",
  "key34": "3TU5buRjWWZNKoDkuKh8YKwicaF21XVMfowhFbBsqjDofF2n8KP6ayxNwW3LX3V4ChqprAREwMqawBF9P5KKFyjL",
  "key35": "u22yRMtUNaKeJuMQjmbvnfdZxkCSbs3y8W8boLx1TBB8ot1fC3j6mkqxarwnzfduV1vGyDFKTyaN1ErThDjZfoE",
  "key36": "4jPPyUhg1yHVVUbW1s68GyVtJuXDu8N1KrJnBYZyMVc2VEvv1nZrfVj8ZzABW6JVYngK8vwSYG5TTUc89a5R3KM3",
  "key37": "2Cu3juawAzKXXdDa82GJsu7PqyqjkkGHcXC9pL8FcNrJDifjXoZi7EkFQ9tBbvZTrJZEdooXZ3YptRxeeyGcVUBp",
  "key38": "2ws91F9MzJovqHuypjXSGQXytY6a6rKdDEcDh9ao2wCsnuKyEEX8kSGjSMppEE6MeosfjnoAgTbYRcGd2L6JK18X",
  "key39": "5gJpDeJ2znXEpJ5s1pJtsu6NhYHjGzoYYfBVa5DM6qeAFRSSAruKB9d3odQmHmGKKAsrxsud3LiFpYQaix2emD33",
  "key40": "2N3hMUFc9VpP7CayMrGMqxRRXhcLZnTH1HssswqCv3KXz1ta4tHcyFFczbs48hqjE5tDXQRmNaawjnFBVRbCoSXZ",
  "key41": "59D1YLnBBjAbotnVvMQWuqUDihmcFhRug5PvyJ7CzmcRaCGzvgL7UVjqqqompT44B9YesU12tr4NwsR66PFLUgoW"
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
