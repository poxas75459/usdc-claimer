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
    "4W3JQ9DSd2ye6FSS7XhB2n7haLSFK5PgLyLAazuC9jMHcTjtiJTHABdNJp3QWz2hy9erDnH59sjMuhzR9sJprTAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ngp2VvmgoyCkPYuBpGsSCdzfcK1jB5CxaXy5tu9HBKoq9mC6DUmecG4gxkKKN1dSDQi9DnkyQYMKczi57VUApKL",
  "key1": "3ZL12539xqhpT8ipK7WdDBXw2WkE4XUsfLHMgnDjRGBQSTaxmA9g2NLpg2az6U5NxHxvmXMHDMLobVvxAPiU7K1S",
  "key2": "2zyzXw4cSqHcxKxwiTpeUnBVxjcMcQGnkLLMmuPwnLq933YyUhFKWjbZT6yzcEC7pZ8AMnk545vK41j8C2qELpJd",
  "key3": "5V78niHdhHA3xTA94nhMxV2RuNX4z9R5suC5VZcD1Kp8BBA1F8X1fRAMQza9DVgUgrK3KMipnK3Hd2untDGbvg1A",
  "key4": "fJPYisKcTyXVm8vnTEDfZW8FSVRZZGspFcW78p63XrMdXy3139hapjvP87oX51RnvGmebcjfgNLj7hw5ewbZh1H",
  "key5": "3ooaW1PaAxpm6VpDXk5nEbQERbCdtDZDHdwQxU3QtRkxu6ArEyedeVVPKhq7q3VRT8fLmJMDCSoyjt27DeXywFDA",
  "key6": "5ZpvjDncHQcnoRf7stMJtANG2YYC1tvURBiVrenHeqAnHGhdZsMJaxVvZj3kT2HyTFgfSub1w64Qt2q95QVcMcwU",
  "key7": "3CAtQxPJJSf7wXDsUbPKqWg3uj54MMFisg92VZhSWm8KpFxjYhJ4EmSEa3TvfrN5om5ARtMDtv78y9Rw5uwpFyfG",
  "key8": "5ddVJEQHG1MgaaDiAcuECC5G49FfLfNYVkcM8LsNyz8sMR4LnXchWVRAoUKimycT9ayjD4TZg3H3bJ36qb2A9uJL",
  "key9": "3J2f73jVucFnKTGcC9736VP49p6YN2qH1mJgF7eoobYyazdMLsx2qjpib2CnxVagcweHRKZGLuH4dSXKK5VrFuVd",
  "key10": "5FvBmyAfmgWc6cxWVfHR8yctAvLeRX3pZ6zcTuY1S2hAiv2gjaLvA4bDS18PD6B98vcn93qZLNE3QPdcaEEtKn4x",
  "key11": "2fQDRJSg6xF5tL9d2k6hWHuAS2bYz9gGGQpLaGL1wHDfMAB4SYLWUW3z9VViHfQEc8awUvcxsGQVDCpfcRFYMhZA",
  "key12": "4sGz1MuJUX7TDDb6cV76cuq4ueSjZ4GKuuW6CRdaWzhKmVXBQcSR3QvMabkz5U35oe66RAWwrCpwfz81nQtxmjtD",
  "key13": "2HhpPNZ4zFHsB1uHkmwGYKFiqnjn79Y9X1tDMGRPP1ohdF7znAQF4XEzMTMQnB5k3NFW4tZMJ9SQFXriynCd65zB",
  "key14": "5G3b6AoyQJZP6nQeTcU2hq1Fgw8PYxxykyhCsckiCBqwpNbv2MCX1bNWhPpEZF69rNNf3qGWGky9TvtaUtL2AAXP",
  "key15": "5ggHDdQrHZK55QNzhMscvQnPLq8AxioACZUcvqKP7T9i9hjV8abp55o7pYPYbUfyJmxhV1aA2e6xbXYChBuPzGPR",
  "key16": "2jTJ97hHnMVpPgCct9pGziFdJwTFKRqDnAwURZ3oUkvidS5RFbURyApLXE5wv96vxC77W73iq1NyKWm1WaoR2V98",
  "key17": "QHAwq6qEyNJ7jweZbNnPcE2C8yTZ9KpciWPfbUShRwEzKJLoWtES3c5mf4CbMMLitVak5wXBRDbD1bf3C2kf8pG",
  "key18": "3jK5d6pvYYrpS1xj8Y8E2tP9bbWxYq7DbyAZaWDUQk4zink8UjWubMnxbknBBwo5z8HZpjmp2bwFuneCJ8UHoH5h",
  "key19": "4ffD7GzRjBSKUrGXpRf8EXmLaDqYLhHMwKudwWahWy5hLPDejUKVaTSyZ4j5Ee9CoFF9YnsE5bp2qRnCh84nANJC",
  "key20": "58yN7doJ3m4ocqvPMdnKEDPe4hCZgjupo9zfNBe5YkMAyTER3JYTgC9nvn1xbEMtLADsnSKt6rLXHwqiTxEsdigT",
  "key21": "smxVEjr1nFd4rmvJ1SwqSW438hLiysEnNZfHHArUgnvEZCZwoPf64F4uW1K52RgUuBbQ9orcywkbrua7uMAvsrv",
  "key22": "21cBdZccxKfcg8QRSGSM1pADvutR8Nfkm2ikQyC2XijFmj7S2PN8jGQ6jXrdQyGt1zvoXRDyyZ2nWnKFjbsRz5e1",
  "key23": "24i2d27TMzcQWzvWQ569tpxWSWb48jsynbEyfGMVVrYrEXWhV9kJuKxDUJMQPPeD1aLuWRhZaZknaCG4XidnYeRs",
  "key24": "nZFMiGquyjghFzW5NCLUEfJRiW8gvGydTsX48rQSLCndASX6hcrDHbz2L97TYAP8zSdeWo7jjC2Z5VpEXnVfdb6",
  "key25": "2ZaUrc3gj9BXDtGMd6sA6Z5PgCNxB6ABGJugbKmx87FsNG9Ttg6ZrxrLuuWJLZr4RzS3pNxWi3EzhuhzCkLmDWAa",
  "key26": "4a2MbfyChrMY15G31RX7RSPrNR4c6t893BDYsrpWtYgPNArJPQFZKLBNXkYrmoRp5xw3tiAasreMm2gfbL5MWYAY",
  "key27": "H5MDb9DgD6s4UCjdETC9uwcGJP15ErZcinsvKz1oQDEQAub3GKdLNvk5yHH4D5cimax2BY1Z2tktnzX67A4XmX8"
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
