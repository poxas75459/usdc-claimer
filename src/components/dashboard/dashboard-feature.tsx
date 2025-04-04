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
    "5wpkypCeUUj4nJ5m9KLuK5ABcUkqAo9B1StdvG8SnAMi946PiTSNxhpXotgcK86hFPvJcBMh4waDReWEqRfNan8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GRwCLX3na5ZFj9eqFk7fDBgYPnsHAVkGbaZAJUCtWv7ZMrWFZ4rQc9WQt6fYfNQDGPrCYCSd4KZeFBaJveqtXPU",
  "key1": "7DQLv1oc8YsLxDDnQMmxFUhYGUsd6FNbKU6R1q2fjz4NttkhgphsWJBJa6nCVWpc7C9hQxJxzDi7de5Aes9tWkf",
  "key2": "MxfamNfn8ur5GzXFiCRPk3YkU9VJhuSXvdQ9nHMRPgLnDLkeSRg3wDc51zEbNwfT1KLsybZudFxc762PTe8S9XS",
  "key3": "2NPfCAKdBUShUYUwezFDMuu4MgVxuS1GyAeTZtb2LgVcQRBx7PuCzeULoeC2YSoiaDUWL3QMqCjk3GEHSpoNzY4G",
  "key4": "2tyuJjMduP24fDEBiFij5A4mMffCJBPCkf4CBtwWrWnLA7kxmsinD1XBqYRyZq4Yir5HAsywdNCUR7sDar2Rc29b",
  "key5": "3h7p3kYpcqHDPrrwKQtJDf6951ZH56NXmbu3R7KvwNWE2HRrr75XgCmH8jBfmyk7vtZt8jkDr2ooBoVmWRUMQvAQ",
  "key6": "2GsyctwWgeEoGRM6SVz8cyizZ59QMZQF3i5biPFP6WMttHkWsrbpmF5TwhU8mmDwEDmT5UtNAdWVimj53rcxcmcP",
  "key7": "ZhKPweFJG1YpfHEYtsTX5ADrxX9bPLfbqS3d7stT9bKF6viiJBW6GXXLS5MWWoWPpZDJKGjLCrgcEvU4KY42w64",
  "key8": "5fC4BP4htmPfLSCC5HShxLtginxgNyko6NK81jwPXwzSSW8bPPEjLBQgsXnAzJSydfbaJidAFF9ZUAFPc24cRsYQ",
  "key9": "2HzmKAxgxULpe9fHFzNRiufzB8W9h8v5BPYn1bAq7Pm7RFg9yX45uzc3USUwb7YGM9UTWE7LZKWsDxzPfVsjJYSZ",
  "key10": "2CpDLxUQGNRdpoGj9hBU4Ab6Cp4iRTGHoJbDXxgTGfXzKgBfaCc5rdvAxuMBH7oUctpgvRsU6Uv67Fw4oAaBrEn3",
  "key11": "3LMMx6fzHuBiuyyq6UwPh4BgxvzqSTiK8uDCSQwsRQkvhiAmdkgKSMsxZLNppdvmdCChHx4QDiQnw4xz6XL9qjsw",
  "key12": "aKDePudxtK66DpMyGEJazKSz6J5j8GEuNCKCbUZpXSRU4rFYF5yQXgFnbbGyuMuDNm9AMYesNhHw8GA6sWrnAJm",
  "key13": "4ee58rBUJ1mmVzpV9EwoJo8eDbEdKcWKbM3T4DGpRaQALsNNrQAHbfUNMXGvTGQzbxACsHQYBadFBcDXqVgyJdNr",
  "key14": "2yNUNQSmaPoiwHMq4f38mdHWmVkhoVpeKPVDLi8veEJ9UF5GM9xaos3PHHfNPXe4SsXJPjYLLQJhBXkDWvn56iaG",
  "key15": "2ETR75yfSB8FNHpeQ9umGbh5SKtcy1vfK5gPjAkxSEayVbRVFB2KoocMUoASndDWRm8WCjJf3pn4owbay4oDbD9E",
  "key16": "2mbRfq8eemvcYSd1uW2Db5PGktYyJdcD18NtZDa7PznLDfDuMpkbdLAGpdSCBgSpgbrs84zvyYjxP9hgVHrYQLq1",
  "key17": "4Wz3w5fyhWZKNQFABVDdyFgLKsNaKmsekowiiyd2gub9fh1MrRnBU6h27QY1oKsS9XsV71caqGY1EuFHQMCZHy6M",
  "key18": "4phvae4uWBxSE5cD4nXcPKBFxCENBLMhgMW73GHAFg9Jbx8ue37qvfLRQK9rjdiiQpKz95WD89jtyoK9NQf1VsKL",
  "key19": "4pXr6NguaySg4JySFf27hKN9qhLap6iu6qKesuY8KfAoUa4HQjE1LTJoeH1fCsg6ZU38wpwFXKdiebpfrPNF5UXN",
  "key20": "3CFboKSF7SwzUWXpAuBZ8B8MKabKzp649qF8FqQcoHzocbe6CJou1x9CsV8ST5qcUdFXyDX3PcLo3c4vX6n4PJSm",
  "key21": "66cUgBQJtNj3oLMS14d21qNqNKC41ij9M8EN5qhg69HVLBA9uYVQgjM42jPhPELNHvub7rSUi8c3VBibLGoYR3KB",
  "key22": "ADFMNQx5SwRe3FbrrKd2Th7hc1ge7A8maS3SSkjfDENoGXGDYPaovXvVHJaMck64qH99MSi6ft7x9ki2aJ42K1Q",
  "key23": "4gCbt12HC5k4L1NvJNH8YHAebAji7dnEjt8hvuHuHNAYKuUgizZAyt4XmWD3otovtfMaL1Y2eHG8oGxYZc3pN4HT",
  "key24": "4zZzJBFHi6xKSMNGxxKfXju3owvoJP3KVgRfZANQbSn6xj5wATuExGkJAVuUU4knVDiHUWsmvGaCbWXGPQrNRukW",
  "key25": "5MQo4m3KD6tyANHYMtABx7suBVPzJbds7auoAij72LBPGYWrjxgn9YMqmLAt1EpGJ4diJr2PpmyYp3sjTv6QjA68",
  "key26": "2pBBaSD6cetu8VfWcdXBxuYTNyn4YWGCNwE2sAes3iWcDeg6uJ1j2PTMtcUVXFPb1iidpQmS6rZDE4njgXqssFvG",
  "key27": "5WMtJ4wsyAhC9qxK1nQrMDZdqdqAiyK46QZQqZsQAwh1LZex4BWPnSpVrXHRs7PhrSMrXuDDw5CaGiHsGroy7a93",
  "key28": "64wswN8KzPrnAqzDFcjhsfJCPqqsHrHamRyMU7mJjKzMbfBFps2RxYsktk6BFmczfpkMvn9JFTDQdzAqyXkQNTEN",
  "key29": "5JpEBsd7krpGssnFpAAHDE2mmSnoE3KydNroTukZoVqhLp9PELAM1c58fZUTeCybkp4wrds74hMcBTMvfCR2Ut6",
  "key30": "2Ny6GTjDqdpjWnhuefuZQTX77MUPwsV5nQwoPoKC39aeUhcr5N6re3hQhSrCsmkyFhzm8CUrZv3ZgjBRhK9TPphb",
  "key31": "4zk66fpoBc5ZvvT14oP2nnBPpjHXzCFNam8jkNAB8KsajhouDRRpg7TNdHVFSpt837yEiZiFzXm87KVve2KAbmUV",
  "key32": "yixLwN4fTT43Y1My9K2Dsb7Z4NnNbRMzrUd6SuJW3eWqcgCE7PD9pi9EVYBKHQtKMgoWRdo3jvJUktTSaiH8KFD",
  "key33": "XLmqLn2zPZ9pUmoeQ52fREjJTbidPx7RHJEJtfmsoHVNwszLR5ZYJFTpu9YjczDdFFYrPnuZ4J44mfULsFkkrdp",
  "key34": "5t2EF3D3dAZZYVRJaUPuLxBQNt8T64biHYmuc8KdJmdd3ZC2R4gonZAzGZjvNDdJtF4ujgVBsCMNeQbtmqt3oWqU",
  "key35": "5NBRJBW74QToVhGVd9Q4vSSetb1ikCfPaCrNGQwTBCqk3P8Rn4rSEX6NkF8R2K24whSDazfc7Vk1wS2HFjxByTUM",
  "key36": "55joQ9C6M3RH7pAtniiUgLknztmVdzVcqViupdmz25LWmB3YHtMV6VubzZiHCZrez4AMojKLPQgPBqoozcivvMCq",
  "key37": "4JEHEgF7n7dXJPffaX2K73HPjuDD37nJsH5BLMgSMwxdaHie3CjZnCduc7F7fG3tuqJ2rua6CxzBEEDgFHkSLY5A",
  "key38": "8zadJ54VwctcKWnRxhYKUZ9hQ9dwR72CUc9tW4bt4LACdhoXjc2VeCxhpRppvVciQB4y74jz16UepHY6jRuej6g",
  "key39": "488TezJNDhiR5Nw4SvQzUWEibVEJdca49HCH3h7zhi2KyF6bfm8Jzg86wUAoQsBQ1yjMPXs1EepGEi4Gd9p873j5",
  "key40": "wsFRfMwkgFBeGQQBFgokA9zfYTzQdn1pdQfebEYDn6qdZap26gLPe7t1gqoBhpuBA6Xpo9sjKK6mesMehnq9JPN",
  "key41": "69dUX7kbnG7RDvLiQWdR1ZfdvdsyMY4Ynd9XgWhHmGCqGJe63xyRXogc2dZ2Y2uuVxxfUhLkZzNSxN5whiv2V4R",
  "key42": "6w9JXZF5M98tSWduoSf5U3B4e7MYmSuqPhV6vXpGsEeXRGPghG8fU6GiFvUsism4ZvuBTGNR59biFJx3LtznXb6"
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
