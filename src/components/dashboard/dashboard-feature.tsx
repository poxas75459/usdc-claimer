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
    "24QSiugbHhZM3dgb46XmG544cz7yvaxge8xnBsfmDszt2QnXZjb8LLTLVHdp9hgaTAAAt6aGtf2Pc6XLGvhqKEFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q9LhMmTCoiEWWUKwc7GH4gNCcGew6YuvCPXkgbCjXRnAPbc7FK5Lz2vuUBQ2EMqh3fcnxKxXcg2Uq7F6efmQP8n",
  "key1": "2hJFLZAQrsCmX179s1smvU7D11xS3htohCyRuG6ehUMEFARMjGtnqBC3En735evVBRjyt13FcLeQhw7zU6tpXMg8",
  "key2": "3GzR8jjGid7AT3c3hwTorZAWs3v3HWDJogtbXjGakQ9qWLxmTL2GZ3K6XBqoAqBYyZvwMWfzN9kMtwR67gDde7ec",
  "key3": "28eQ2VYjZE93aEYCmdaBzomwyHBqJUAXYm48kfpXXXxjNrKdZAQqHmg2GkJ9JB2C79SFRVK3vhQArDPyyPy3FCQb",
  "key4": "sdfoaY3j8TgByURDsXpzLfK44LyjEUnWgYaFFpVGgZ3PvBJwmJzfApe594NWFP1DQDUECR74CuFkY8VdXyETgqd",
  "key5": "7anXbTxyBx9rxaRoRYCYPEFk6eEdCWka4gMM3pEs4r4gnT2pQp2NP2Syk8BK8FtHXTC6PpLW5FfoUM2mH4SYXL9",
  "key6": "duHH8oCCLQxPMd3EydAe7G9LcBmpgXjmTpx3dBgNw9crqKWWTmi8nTav3iFrhoaDJ3NGzq2K9XB7NVE96sQJ2tu",
  "key7": "BEfn92FNTW6NrgjFv5vaVSgHpUZUKUcavHXFQstDs3TUBDJ61iWT9uvwNE6dsgiojoMYqiQ3fHKXNf8DdbBiyLn",
  "key8": "5T5jpc7paAVViaZao56sgrtmAKhoSugkRYmpxZuRmZ3PHUpG2BkDnPc7cUnHteF4dvbVZ5yryUtEuMfq43F2Hstj",
  "key9": "2rLqooxncrLyfDwJd9jbCZt6siAjhRaSPhhVJ1RzaWTdLWJJPes6PDnTPWrHPTT9KNEZWoxNvuBvQoA1JknERANQ",
  "key10": "35h1kEroKgupTwkQzM8tq3FdPD8Papx2mavGL8T1fdckEmkcwzABH4jHeT8tLt8w2i5h9gHbFPYa5p1B247cRDj5",
  "key11": "eJ3NVhrQJ7emRhkSbNGGxKgG4kz6NCkfPTzr3ehN3foS3TAkVE7FKKHBUzDAcehu4TAoHnviiU9gg6Dp2Lv3Lr8",
  "key12": "tKMG4GNWpfdvouNHDh87ELDaPSQYLk9ypafgztdvpZHSfEW42X5awj3BaUfe7NHJi6KLnXwwhiV2fNspx6oNhZN",
  "key13": "2eHdc5ZESwxXghfBkWKaLc57vXM4skvVXLSX2gyrAaFYayRivVQ6foaw6gvYTuHugR4HxTmwiqJTV35pt1vBcAdu",
  "key14": "4z1ciw5fxoa3aAg9geAbUWcsojiv7wEG3p9YZr9t3G24HtPckQwsVtLh63hSreDvy5P1DUFr4Doa9VvfitNaR7Mm",
  "key15": "4eT5XqTGCcTzGkGGywzEJY8Z8Tr5BtVqTFe4BhidsVYGxjeRmPw472U4h4ddF3ZwazuVW6EXzst3ZZX4SjTe9KeZ",
  "key16": "62Zj3b7kMYBuUR26BiQP2dUE9rYve4MoMQG8diMjAozcF3nKV5oveBQjs1HTNgazYJsL16iN2UF8bEiQoSKquihg",
  "key17": "2EwUrXs4TRn2Dmxj4LJ1eeujWd2mnSQEkBmS8U2fH6rEyLzZQBi6823MfCcRtRewF36nz71EX2U7dpfM7srtgDX8",
  "key18": "3qdxftrFSeFcK69jDMXvNdGqrF7CY5MPcmwoEpQEX97X1VMFDwDyHmaX3kwT8JfsWqKc3HBTGHnpNSSQuNF239ie",
  "key19": "2frybyfLkyz8YSP7oWaoqHgxpJinyyziD4qWa35uHrwy86Q2S6eUJmvQpESxAmcBNbh3mkJpCdp8cwXFPMd7xmbL",
  "key20": "5pi4x3focns4NPPjqsJxQ11qnbxWerMVBKWvt9pcjpxmuDLDQeTmcTv9GUYZjwLE7sSLuhp1J8yYdwbaBQAu9S1k",
  "key21": "25TwW7WSjna8rjCSQtgBSZCVgXrj4qfJURui4vX3KU6MfrqHhTCscwLXPpfxa289kZNuRmsn7dK89EzLiwjryjaG",
  "key22": "onDzhPkeqEt6ea9dRvRxnDHqQbRMfBwzbpVFy3P9sM63wJWCSCYGAp11GEvsDHC5DSATZ3dEbcy3RSWVD5ATgg9",
  "key23": "4Xwj78Bgx29fnnCtGUDsVEMGx6uDtdLHiZG7pJZUkD7wRwFENrwffiiPPPjpAXApKbrgnZ133aAnuBBfDDL51EMQ",
  "key24": "2J9z7ThmvgPRAEzckr6W4yMMMpWUGhRJV9SmnTBM8yCY7xTjru4LAqF8pfMAY7bwEYD2hqF8oj4hvbkY5A94XRvC",
  "key25": "5ra1QLa8cnFfuSL7asbo6jEiw8MrALPrZGicGVXdaRXbso13apkKiUvqB12GSYEW9DdiYPUR97fpdRuaD2jR2z41",
  "key26": "3vDSaG74yt1PZN2UZMTVYnuBXyg1J8CZAdFs5vXxzjpM9SRqmAmSmjEhwYPMNfchwu7irQuFDUP1HxoSDGnsMs7X",
  "key27": "4AqtuAV2ijAFhpSg2vNz9xUgDzrZwYvhGwAQyiF6E8tfqkV4WMkSbHxqgaCT8j4vkRKvSTgbLzeaZBfd1dh8byw7",
  "key28": "4oEJRCiomTXGrN9i6hz5b3eu6MRXzY3e3ju4t4YQTq3QrDNPfmfkQwGtVVFCmyvsSKVGhTxhrtin2DkVDZeimRb8",
  "key29": "gAWJMitTnjqz2RKbRt8KJ8Zes6AZziCNbQDedfQU3tUsvavp1RtkU5WowqokjwqeuaqxZoz6QH2x3w8yipGQEXX",
  "key30": "4g6UCQ3zCwG57kffM69qRmebMijZV39FBRPxN79asiishfPtFtE7CHEw6novnSDNCjRexqruSUaUoj24dCDEndCs",
  "key31": "5swLZujYpqajYcfHDmGfAcfAXo1MNtgFzEXXjVZT1yxGcFnoQzWMC8PPFXiZf1nhrwtFmRkMLwMfn6SWZo2M4m8b",
  "key32": "5QquV3cSdujop11sYve1xM912Y46J6GThE54q7eNLC3VJ657B86yAfKHSfWSmhCyvzxjdN61VS8xbvdX86BdHern",
  "key33": "5Mh1gJs12CqLuGAtUQdVnaEGWRBnMwbwFRbXvhUkTQ9qXmNY92d1aQRVGXyyYrwVnJSjNMYdN2jHZwgUVvpoHkoA"
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
