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
    "5RSLuCxwJJUjkSgyfs4oqLSh3PihdRQawD6jnfqx98GBQfh28V59MXEuCvCpYT8GaHaivXJdceyzccg68Z1gHTeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mHYqHtDn3iKDe5GLpQy6wZtSS9GFMZmPrimkXYjp3Ctzg8KUQurVazTe6XbppwvP2mzJ2gzMWA4jXiWtLdT2ep2",
  "key1": "33QVyphmCyNZrJbqMKbZQoiT2uUsyFcYuSFWqnaaLQJTyp1XDJs3sRoKEwi7xWWxN1UCFtLTxp4hHeSWCwb51U7c",
  "key2": "4BSk7XToTN4Hd2zt1DR4VjmaC9Mjb16VbaMJZqHy6hjKMkTk2pHzgdk5fJGLrGzSPKHUPkUN4GYJaoPMczMZnz8L",
  "key3": "5ofMjYFtcHCz7NoSNrBXrfVHdREMVqK28EmwGgRTCiT5vw1naJu5AyLPKd3af8bGKRse9hgxcsK1ncwPX8FyKwXS",
  "key4": "666LVWuqwwrS65PiCG9UZBFCFNGSDN6fHwgr6qQmRazKhUATUHWVurb1aitfAsDJMfU1kew6sWTxoSvkFhVSkjfd",
  "key5": "3tFMF9pm2QFsCwPHYzNjgfQcTsaBvSHVKH3cmvfpmoph3a9baEdr3gEvTmqBKiCZZ3T1RhXdutf41xDiowqKj6gn",
  "key6": "ERK5qsnQoGuEeHEKGX1qkmvVbzz5WQt2rzDgepUmiY1GybcCx5EHg2xRxzTyax8i1Gh7b1DezUDHMvJs3P76JJb",
  "key7": "SWfiUdvJNoy5kzWBPVCyfZtmeA8fSctrQsTKvizgphavJvmVQk3nGiANMeVwFm9hkLdoB9bHWeNSsek13V1vTQw",
  "key8": "2nnTeXhnv32Mdc1ayiDnvo1CzGHMRYhRp5WpjySExWoMCj83DaWT5X38qayMxUvrFYuQJXuma1MKvoypZuv1TB1B",
  "key9": "3hUdFRh4tNi9yYuK5JRxsLuvgh2RZUBqaFBLsESCxkFAgbxiPNzCzEShsakGgkcguEd5CJJvo35qPnJgohBvMs6D",
  "key10": "kAc1iL8MNyQu1FuDvuwsTNrzqKnrQSZcue1GgJEmBwMZ6Cs4hyA7NBALK5mp7ckNHDgZ4PoCQxvFeceKDe5v221",
  "key11": "5Vv79K9TepSXyzWvNVRspjcKjpRXrBBVRuruJ2KhwUpN2pLpNM6ncUSrmgqJTk8wHBbwfbJMMa9vpmYH3rKh85xo",
  "key12": "5SuFbDjshKVy7SA7hkn2jvuDsWrUczJpcMMiA8XeW9yMfNASbaFrXX8BRPqLAD8LHj6XqEk1qw77aQJiJkhmSE1t",
  "key13": "2fyHxkSgttEkrH9n76Sy8debNzFwJHm8Aoj776d3uRQ6kMvCNp5TqyGrLbkUuZMcVmURqNE1MwxC8K78Y46wxT3d",
  "key14": "4dru3fT1hP9dvB4NRNkSduoxbnWGtzznjjCn4TXrV5azRhfrRUr17ufk1pnjJBhMLwQ2gmeRkR73w4w7tJgzD9EE",
  "key15": "SXoQ8Gk8sLMHQ8kKJTV3h9xHkXMyYUaCsKmT93o6QQxfrDVYzQgkqMvWDQM9vumrUuGLqdnN4NDmn7f8Wjovz8N",
  "key16": "4x2LsGP7PWmZJ54JzcbbrAe7nemEtVYoPZuX2DEBvgNaQ6hmLjFc2PhCaj3rPyDVwrHdGEMmgwdWZpbwaotvpTFr",
  "key17": "2dSKECcbtQLWTEpvms9y6a2tSk6rEtyR6xDuz1ZHWW82VCnvuPjWjaXiMh3anzjyUW2oCbqpMeKDHEbskFNLTj6M",
  "key18": "2fPbVQMYSu5NGxaAeNTBsT4Viiua7UhdAfpiPuVpjdfzvS2BeAmxuSC8iHohJ8ym1JwzzspTVLoCGNFa1HXhsqHy",
  "key19": "4soox9HFTkuThXy5yBUih5m3mM6Ztb3A4ngdSYbnJ2sm8eswjyepu5BvAhxLV7qMJgg4t5gQFoUDyWb4kcZRdGM4",
  "key20": "4tsd81pTqzC8G3j6AVw8bgfWx6Hrmp6Mh5L7GkbWhbWAXjr5dfssicgSyr3UajZN1859UQv5dERqat8E4MxGGMCZ",
  "key21": "2RRjiaZWDrVPmZkBnhtqkCVT4NaFdzAuXXCSHoZ4iHAGeTajFs1abrpGj2CjZCj4eWPdordFdWeYFu8t8q38iijs",
  "key22": "3maV2teVPpGmDdF7GfnTUZh7SkQ7zjAvpPbPuWau2cGUVSG6PtbqGb4YLVrDsEfidA6CGmSMJzisdnNaKZPoUQEL",
  "key23": "3zff2kqRCSz3QXo2ZLSVUDCUfrZ5WK7kLE1haMc8QagWDtSMWouxxq12NTJDBkpoSZygJNPpAbm1WW6QivUq8tiJ",
  "key24": "5UdMmr8p7Q4ccPnivmXUVRKTpzSxTHi8YyQ9CMyCVSVWjMR1Xw2F6Py4FnbpJ4S6k8D4ACsd1NyfDYp44G4mtWMS",
  "key25": "2NrAtgg4pQztSgPJQ2UwdD1ASZhjM6GbGoWbdXmx992mbmjBS9oLiKJz1xjGnyc1iU2kZbDERjeHTCibFK5mdbKS",
  "key26": "Cqoyn57eCZcPscsfkQMXjqHNxWeUy2nYnAk3VTqxppRR5Bu3jgrt3bqU4fdLJ2kXsvEqELLNetv2M9wq8zz4tg1",
  "key27": "5zRREQ29QSPK5gNmji6zRQ31cvmZfCund1NgVvFzUAeQyikNyph7kKpJ4DWqt5BeHeiRv5eN3LDSSTEV373sLY1X",
  "key28": "3PmXJTRHGkb4EkCTUp9Tv5MEWniDJkZR33rB4gZzWWCTFCt85hhB3GVjZRdGBXbm6wmVaHhH5e2zHGhpG2EhDXNE",
  "key29": "5CVyewGSxa8u3zGtMu78wYJN9J1uBLrDdrvr8bxGYyuPZKLiFwLbb4Qouky2UWXjygafLhpZ9xuKYknWJ8oUL5Nj",
  "key30": "3YeojXb9XAg569Y5kWmcVLAJWFzdX15nqL5N4UP6sUA34mnSjDCw7BKtfhdAf9aRvvVFJds12jKsZ4Wixte9H9BN",
  "key31": "5USaZdTHAZpnYF8A3BnhZJNcN7EM1YHL5k9VyFmEhtugCQ9qJS6fam5AJRYf9sMqnCjy3hM5XzNV9jCUVEKbVgkF",
  "key32": "FTXWyWXyJERiVFenyAko4zjiujtVChx8EJRy6MH3uUe5VbLQ6sXi8eiCZTSk4iK22Q6rAFB7jpY9qcq3NrxEjWE",
  "key33": "2FzkFSQEVQW7tU13eQmiGNb6wh1upkHsM4QGsMHQEc7bKofzgMerss8ppdCVj67fBHUDTDLHoK6MqRjq9scbR8vN",
  "key34": "3o2qCZUyppGjX5fc9gz8v7kfvcFUy6qxkrDVnkAwjHgBYhTytLVNhja4xnDPRXNynXJ2Pa9P7kTHMvXKHDin1wH3",
  "key35": "29j2PCJCEupcCigCna2iPFiDKqyC2s86ydpA3uZunVxSV8wFMXo8tyCehn9zoZY46fhZeZtndXNHbUo49hyh6H4X",
  "key36": "fgVxkYWcieQRCnisr4932Sjomw3zdKmGgJfrRZCuBVZCU69uo5A9rHH59HcHC63dVfgREu9n1R58h4CgERGgfKh",
  "key37": "65BDHBpTirKioS5fdHZVHXcMPsSM17tqdXRpPvh265BKjPe5qUHXWwKW7FtnLUqbbZWUKT9uPK3HUHRfTwksF2tc",
  "key38": "4iTD56D4qnGgezqHiTafqJWQEEfXtXHxZWWdZfJtuWs1FXZTE5HrMN2HEtdRdQh7YFiamPQbJRksduyZomoyr2Jr",
  "key39": "o1pqxwyLf5nY24DvCHmK4GiVrbLH59uWEwwZDahmZt4CW9dAEiB1JxYnchsXX2o1PCFXJLzrexCv8ChfZjKLSPi",
  "key40": "3j1fnVeAVKCTFfUp5q7SZkQJwubere46e8LdbQLeKWu1J8CEPUFYzymR7kCbP9KpCwYLwXr342eCAbbNNhQZoQrn",
  "key41": "2JBfNZimb4724HyQeE5dqgrQ4PUag87SBFLaJB4nVQpguULBya6jnvNmwAs1dHWN3vmLt3wrMwr4zfAX6yhdyg4p",
  "key42": "4vKDNsiVXraaRNqYUfRdK1R68nR9HshMo7J7Rh6hMASSJZtFnP8rstaXSgqkzyy9CGSnYQZSdPm4hdymrLvrsnMK"
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
