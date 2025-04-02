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
    "mvTzGYFu4ZKeELYsUV5ej9KrUNN4etCPGeU1KsnJ9xFiYcid5m9FMoJfuipFihah3CkhQnN9EEcPgjRpdnyFTKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VKXpAcHySqMnaibtLAiRS1L9XkTZk9ToZiXLPYNUCMjeDL7nC6mXwxJNtqSnje1Z9neuaiskTfbeURZqrDXMXgd",
  "key1": "41RSJkSTkFfBLjttdCiPzCwpV7zjyyc8ScUBj44avfr75HcrvpcbRRSLoWz8gTaBTqkzw9B3YN9CyzCwCBa5BnMU",
  "key2": "325MnouZsgteaPTJivkMimuzv1y3XbMWRdTj8o55Bbj9r7bp7NnXhJBke7F8gGrHeW2fkeqeHeCXdGMRGjCtHC5N",
  "key3": "jy4c2XgcpeL9kKCK2XVJYCrgLFtogUfrfvme8UoHDjQhiTS6bABTnoZ9L9MYGdcibXtbY3hDMzfQtbA6VscNmFJ",
  "key4": "5RZaz6y5zq3uaSRhrPAtEE5STfQNDWBBeHcXDEHfHYUNwkhd2DcL8mtnLXJoF1EuXN1jQSLuVdpWU5m3vnUJp8zp",
  "key5": "3Z8QNeFwi2kNhoWbDA2SwaSngqvWs9PvBCmywLLJvvpC5E8J9FVnebyVFz4qRMCmURzUsC3Tp8Fju2WwRQHUAbb3",
  "key6": "5eBKijLMr5dwb7SKaL8WrxK9rue14GcGSLWFbgQF5fd8Vn7zjmC36H3bF7MBi1m42vvhEYHwYPsV3Gtp6Fk5WBB3",
  "key7": "p6Safzjqj8JLsPTXhcPPni8RGviec4BWGNDir2yJKws1UYk22KuC7gMF3VhALKTX47foprZsntpztq9T1RAaUub",
  "key8": "4BtVRibRRaA5NMFVfdPFvqdsyJJDgqtNcuJY9G8qpDswcCSo4bXgzAZZRoXMEiRysbRH4ZofR4F41j88YC49h2K2",
  "key9": "5JkdQKt2Hd6hN7DFD6Pd4z4cB4stpcKmL35tNXhV7XSfr6LoDCSNtDgEmkDnu1RxqwDKuDC8ZeLSM8qHfgqR24Ae",
  "key10": "5hdQetf8Aknf3UjCPTqB8AwAZVZeszi5RMZsdQgZCJVYotPSSkf4X1LP61N8EQZrSR2cgUTHmC9KEM4PiXXvFYTW",
  "key11": "4KT3fDZ7Zem2QmCLqdE2ZxQrM9o16KM9stcw81zSD7meWC6N4Mm4UUnsqFBJpiiowjTgv1HNcAkq3YEXjHRTfU5o",
  "key12": "4Foy6UppfErd3VHATfx67sDh8seeXL3BQ4QCgXM2cJ7wJvqR7iuhmR41tJTjBShtRmFsrBY9fNmFaZJBWHvM593",
  "key13": "24JYN84vWergBeP2iV4xhNXEF7o7Vi77k5ZexoBDo8wPJUruN8WK7NLudD81Lei2g3Zze2wN2D3QEvNB6fxW3vfp",
  "key14": "5FiygFCpcAhBTvP6vRa63dgRf5bYgvUdatBjua4NKmkfrsn5RSrg8R3xh2pyRfQbv48Jm99Cjt1keVaQhvvAqebs",
  "key15": "5ZK4BK2P2NVg1dnmNPeNYBzGQX4vQ7f74yieickASoaHKGdvYemhw8AWBx6xhttMvYDTjWZigW1zcFkr86RTvVsn",
  "key16": "5MxLZjdEkVzhbbR5qnAAPfkK19TLyJbUgUXbx8ijJwP9wUxtgTxJFQa4MVpXCNPZPV4L4yUWF62oFKZf8NV4Ax31",
  "key17": "4HgjnpVJWTvLXwcYG3h9Z5UVA9sPvc3LjTb6Joz1xbJR1t2ndoyu7R87vhFLU8jDuBdTmZMqPtQsg41MbFtnUXU9",
  "key18": "5rBm6b8BC7hnb4fEL5F36KNT7xwYJewyviMwBvepYZdYkDErTtTF9ZrzWE2VVfP4T6A6YoJKjD5znpeZ4XBQejrz",
  "key19": "sm7keEp7q3vZRre9paAAJ6ERb8gGcTLw8pi9qPfFCfP25Aj8LrZm8f8sHYRJdgKD8T3bRGZPQPcoxDAXF4UKKmb",
  "key20": "4dD6hjs1SnMVqYPu8KGycnv5YJrX4fT4zvC75FV9Hrowx68bnq39C1Le9gUv3d6cLCRwxWKgYVCKyvdpC3pi5n6k",
  "key21": "5PBq5R7U2Z3YvdWReVdB6dJyYs8ZZ5Q6E6Y4mjbsmRpY8Myv4x4Tmf27KJww78tPGPFTBagWbdieWTivZrvsbb8m",
  "key22": "iZXzp6EuqNycSj5h32Z6rQNS88V5fUXUDhg7xa66kKE6ZfzNSNZfgFCpPH92JWfChSacoczYUc5zVFuACPVp4AD",
  "key23": "2v775P9LcRoeBwgmkVa7BzWwMXTjhhEKmxWYAPDEQjTsoyP38CLC4u3jUp7gi5wPuhzNki1jBTkphTJ7LPchnmXr",
  "key24": "248MZuzqYgL43nW1pPQCMYJ7nASPps6wKgtbNv6ksXp3DDpHK5mkwHS1MRbK1WHZGPzBALaN85E2RqzDfV9JVsLS",
  "key25": "163agvswqdvqcX9BxsYaoCF9pAjeG3baN1Lrv8dhGVB7QQbxSq4TFKYYjRMAvdoAcCHCLjkRrE3XuWhFSfnpFyJ",
  "key26": "4oEkkXk2j7tDWQLfcKpg1rp3g5MioRV9AXeHhHhqzpSVKXyJPUrrQgTTdkiWFPg8V7VVzaa8BspJDZ2WYm8HyEFk",
  "key27": "8yXraGkEdWrC4hQV2joK7RgutFmHXZsC8AsZGMRkD8deVUi8KDZSaj9Na2i2DTFU5PQafFYuCtibd3n8QZKKyw1",
  "key28": "3QR5CC8YBvHDV2x1VuoxtMvcDoXRMYZ7VwLdjj5Wc4Rmfkm4sUbPd7jWzbaRR322zHiYcj2pcS4Qt1P7x6Kmb935",
  "key29": "4ePjXuzNHW5iKG5JqANeeUhJkw3dCZyYj8qvCBTrhshGApabhZjziMe6uNmFPaYP8ZmKQn3HbXgn3Zs7iLYXaUmv",
  "key30": "2yxyFGesdfYmD37aNC1Zd2yDfa9wfaagLY8Jp2LP22HHQLctLxN7dLf4o41synfAw4PftCdwok5kojUgciXLctmq",
  "key31": "3oXUBp5JxZoDo3Rb6Cmx5ZAjHmzHYsU3oxkHw6UucDMt2njpExXTSUj4zPP9cmPT3XC4ahNup83nkojUmWPKEJsx",
  "key32": "49W5LoCVXoojPECjSs4jd9vGtQFvRhPGdGjtuFpn5RP4PYpagUwc2biqFyJaXd2FigfQM4AvA3AtXJptKBRhRRT",
  "key33": "3kkzS4yXDPDiXbErxsWDDBYV3voAc9gVpKJhN4tbrv3w6DQpS6H8yor9TsQzQCsDfHRNCzqrgErivCUadXkQr6ZL",
  "key34": "4qHXCBA458RfYJ7YE21eiDTDXiDrUM297A21i11GYMwagccuu3NRfnpWRR3yGfnEsTHPf9WPV5eqaqz5z3W6Vf1Z",
  "key35": "4xzhmEqB453LS3HJ8NiW6uJTsEHTTEDHwod8QLSzyXKJWpF2RsxTTHjX5TZTBihB2rF8NA7jESs3sCUvoKLFaP4X",
  "key36": "4AxgXXVe3k1VwqiRKBZzw51bY2jAaHB1DZSV7oqmPudGY6tHBn67zi7hjZGVNvjhs4SdN3uwzGWWqTg7xSU2tYgW",
  "key37": "2GbMDVuRDvQQVmehbnYJA5noNyawoCFhBWmrwD23m1wrHw8S6zj82S4MJKgd2XpPBr5RnbiCcTRekBSqg16y1xph"
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
