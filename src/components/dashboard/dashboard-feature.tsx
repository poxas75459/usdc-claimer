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
    "C4HvudH4T7MLSyEiF5r6AKRxhjo492KL3B3fKS56pfyJJ4GvbGAdFxYzJwVeErV6XNA1s3saDycU4iApSJapZpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zhtsJo72FkaJnTjX1FpwzgLMasBNixWWpvFkTgpJGf9Z1npUyryGrQ7QRkSkfbsGefa38EnBp9qR1QXzFZAwr7A",
  "key1": "4iFiUMUTvUnNCuCVRDojHpQTaoDPEAv7ZusRiNasdv3XjWcA284fh5yaADH9XzEg2dbT2f8npsL5UBA27S3woNAS",
  "key2": "4PCxgxENMGr4aGRSyxG8JotufWspecUstQwGtTKL7MAHibqDjh7hDG25ASwaTkR4ZuV4FQVidUevn3DR8exCE68y",
  "key3": "YCN8tvM21wZ5nUKbvyGC3LGfjdgeJkYPpHdFDyks5T8ZhndKjPcNxCLcA4TYWhz7dVFHzDkEpeec7DZoGN6LCm8",
  "key4": "5U1k519mMytTkhY31qSor5dESDRxmYkk1Kafe2b7fmTQB791KeJqHwJD7Tg5iMgLioDpvyj85DU1kkhdfpjH8Kv6",
  "key5": "2k7aCJwjPVQ5JrxT6EwL6osAptfVn32STmakdwrCNG8qJZ2sinjTGLTGJfiogGtFN98xUq7fowWCnaBTxCqoiQji",
  "key6": "4trwEnNCALYJRHBZUuvEYbjh3HTCgZkhbt1NyGbSQ8TDXoAMm4677K7bu66hBJrirb4VmA6ZY4AYWq3DB1keMPLz",
  "key7": "2hgHWajPDSSfKwJXnnbxMX429Z13owCyQz97tnwhej6d34UnTnqtxUGM8pBafnVYnkdtk6hJLJnDq8fUEVkYToRt",
  "key8": "4KBweoLwfEYNc2AGFEd4YsQAhrtcXaZFBgpLbT5d1KZfT3Z4xcNwFJvgpyNHemEAE23sSfFhDyYVdu6aYaHGBqmZ",
  "key9": "65nM9KBcjTERrXN295EbnvASHYBnwXVGxCkqyCzHuim8UHrhC9oebDPD8XwagQw35V17o5qmnu9r8WdrUATdq5qE",
  "key10": "3wgC8XHYxQqTtrPoVevB9zh1HKWJ4EaDLA2DKUQhnshjpYUxxyvTkDvm211UziUD49AT64yH36ybAd8rvTYCoNwK",
  "key11": "3WgA5eo1pyf8Z62d4Tw3Bous38DwRLtkfuxfuFAgNQum1N1L2bcB5NkWzzSWmrapdS8BcUNGJpYp1ZLotpmHMUGM",
  "key12": "4wK5XA7LGZmQQj7wmdSNoVxxayxeqXnNb98HSYQTQ1KNu7LNCo8gTUgzxW9ZKoYLGTWR3nXUxGbFv46cRdTwwpKc",
  "key13": "38m9pTNXFzzaiTvmAMNP4fJdGStBAartUEYSxBKsHUWnWRJYFJods1VGSBPA5G9JKaM8BKrGb5dS361fokcnZv2q",
  "key14": "2ESQghF4AQQJ8WHaK6kWJeWgP9rwGiNK3UCLLyp3Ts1gZ14newaprtCTFr1DkmVqHRbuav6M34H9XUQiVguqmYW1",
  "key15": "4iid67rn7sHaKnS5oV3qrvPr7Sp7sCGmF5hoEhpjJnHVpQrKaMro7iLqgXarJS1eWQcBt3BXFCweKsJGfkXYuJgi",
  "key16": "2CAsFppTBsj2qMgq8WcFqxQPRFUVBJprg1DxHuxP4LtgkFuUVGGZ93iFWNk4T5mzCfRzQX36m44anD3rWhcdE1Fq",
  "key17": "3KgJ5LNdGyBVfSaBHmGaMMQsKYgwE8a5S85cP3bybMfggCXv6yjUCgJ94qYEnMx7kThjzm4Nx9xSkieXDD6dMRrx",
  "key18": "5ZMhKabF114LoxdTFroy3biSroBypKFo4T5xG1joQZLkFvxLhX8QVcDQR6yjN3X7PnUa8riXtL7WCDHf1PG4LJcv",
  "key19": "2VBUv1Fs1aSPdf4HFEBqHWXFFHF5jk6Lvk79jxq3AT9tHgGu3CGVqwbaoCyRy3Ka2kXwzRjorTmyrANQzKGEam6B",
  "key20": "4ZRPcefeTyiH2vc8xguQ5mc6PLaCaq3eGdbyoQQo18tGtW6zRE7oFxnAPix2Kp8pvgoFZKPdSZU3Ad9KSpgYd6Qe",
  "key21": "4uEGAGBvoK7V4ArzaL4T9fMrzxvn1vNJeNHgwdZXY4e2NDyLa1WAdC7CwavJQbAwkmMxSo3yNeowzqocQtgaWcLR",
  "key22": "3acv9isnVAYrn9Tx37XKYkxzwqQakkMCwwmoCkHkysBADs7JT6DAkRSkff2aHHwRB2sv2hiKtZ6WFcnoiaKLRpoY",
  "key23": "5LwrrHwmsfvYykvfub5m23W1WpfdLqboCnvUf7qyUxJHeF4sstgzdb7Ee1oCg5XfsfhQvn79JodmmhnSf55Bki41",
  "key24": "62BCi1djuKTyEHBduHZojbDQisSiMj4NJxKYd2FdGJTdH2zRucHLJfbAxcVwZ5g1BLt3FynV43ctUM5ezH2qqYjF",
  "key25": "2Uz6dDPsSNYDk1cehNbVyhH6QYKorvyPKUAmCNURjFLXj9DzTZGNVvAdgaPBAxgG7kLGdHeayervfSRAZdz8J8fx",
  "key26": "2PU8j9oeoLEwYRxEiezMBiPEvYiXPQMG6om965Q92LrYmq5uzEbtUh1CAUt9JVsUgFwSCzDatuBq5zHRDVW3gWaB",
  "key27": "4XnPDS5uH9vtez8J8VWyiFMDUCGsndxgxJLNV3m88h87CVBYfBXwTCDWkhNE3A6ypk8NK8R99oYCk3jwQymcki3S",
  "key28": "2FzJa779LiESFneZpqDqtfVsaSSCG7bYGPWNsQu1hz8KXag94ChN1iXuBNfj61JErmzbhomp6TrN4MUgV1KwooQt",
  "key29": "2HXwRhvy8mpQqBpWHP1iVhMBmqFH8HRd9NL7nU3niDzHUPxLagiNJkvPSVybL4nYwVSu9rDDKVE1aaHRi47Tcqto",
  "key30": "5BMM7MR9n5aUXgzuQci3XwfYPL6sdLwBkKLhjGdR5A9HiLtjzsLYxVfxro2yDN81nSGqTVGEocde1EoKyRS4po8p",
  "key31": "5rG1Ue4S33SAv9bQ4efSWSSVTaLBuCSwbLP4MARFBoqCVthr3dcMBzp9rVjCcCHFgnAqFFCwjqVibJxP4Lxezk6Z",
  "key32": "3bgb21nu2pY9r8PiSP9HjQqawbMkt1N4AFigRPUkmXmjVjjgj9omTVKRSXymNGPVkyyBEaoDM8HYGtVQSET2zVyP",
  "key33": "5KoiUVjjHrUdNB2i9x9bq6RRhr6BnqpEdmrQE1koxLsWumYpkJKkdgFQotTpewTDuKRxNqjVDSVpfq2ydVyLuBKs",
  "key34": "2DiFeKoJtGtKWwiKCPnU8p3YzmkDm9um7uSMLoFzyFjwHebK9AWoFyd7NQN5HnrHYx5GZb9Vop1Ci3AXWbwPhWKD",
  "key35": "4BrJxUHEFXraSJDPbbDFptUf73W3YE3kWFWxu4Kqwe5HBK6qAMxn1DLxjVMpvkf52pV7uEn4HQVCRnSaxkg13tca",
  "key36": "4bm7fpN2QewnJeWRFZcKFskT2DZNE8MVS8uqxQ31Zpw1T5zu3JeYRid3vanN18nLXgokBesQ2AgsFAnKWHnXyFqE",
  "key37": "4azQwkERwGtetzPUcnQVnBwPftj47mxwqsZwJbMjZt45PeMHREBnoqAPFfo9UjQLdGEEAKTRkLfjHi3qtZ5bZFox",
  "key38": "3cp5nbHBLnaKRTRcCdPBFscXW1WEhCrikKz4f4L8RyeQSnfTvHLy5ujCh3cK1kWhP8vhzSmhWbxvdjSAyhJ33MM9",
  "key39": "4KViYWpe8YBJvfxQzroTf861wHgRoSfg3rAvNPvUt9SURTsjxe3FpzphgXBYJ5D28PVgLvQiDyFwQfJQwiRZEL1H",
  "key40": "5g8x9VBTxBFtJMH6oS1y6FNwYsc7tgBwPiQgBGJQjjKw6GqToRmDx5ozdKk7DwWW8CumD8JZT2tAPUVoyaqT8eME",
  "key41": "5ms5UBFQDyGoanatZs7PuWp9f5C9gZZZWeEtpooe4x3YnLB9rvXQF2wLpF8yuEbHnuKyg9hmrrJ4GQjDbPU3dFcF",
  "key42": "3EgjhmcVMHFvyT3nC3iHMNK42K1aN5jpXHLEUjZ96gS3pGVmGYKHhsXLjSkG12smo9W1J9fX629rTvMRm36V8M6Z",
  "key43": "395oxBSFtHyZsx8yuBwiBKqSB7iTxjLoFfYaAhsfo7RbN3R5csHQPD4CKAML9naBMT5K5vCgzz1ab8xw8GLRtt5m",
  "key44": "3FiYozs3omJwQnVA2C81xst11jZw6RXSody7HThRLrm1aZS65hK8Wz3Mq2LhAwQQYx3MDwZJJJ89MWUAKDR8bex2",
  "key45": "5L74pUWB7WqR1bP5Le3H5qm4DZa4FPENHuRq7d3PrF2E9nExJCpVpL2vfbb8oQYASuyuFMTTm4DMQQxMebQcUz9D"
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
