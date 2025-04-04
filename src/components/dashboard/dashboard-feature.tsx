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
    "2q5RqgHA1BCoci7x6GsU9YbBWdMZk4BHNVXT9Va5xiaLVVVgGNVKcpaic9itJXSRnK2S3y1uvyr3SNY2YaZ13Qdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yhTfdiczVb7Eqa2p64RVjdu6GGmbbc4hmvUv3wgBQXebfeyKtc57bMQ8mXEi6fKGwiWHPxGkpm3Jgynx4XDC6LJ",
  "key1": "3Rkco1X9ZPEtzxD1k34hLTpFXHnjKGC8MP94nqV3YKb2TT5sFeF1CVM7tzb68er2rV31BbtxUPfTfRxU6AJiPda8",
  "key2": "5J7Rk6smPfrmrmxTCu7vRhpH3kWVF9E3bokHR4XVkWy6f5ziXxJpGZxLomRVyRp93FgaxX6irX3aJn4ggsYgTGPN",
  "key3": "4qDNetS7feBNRiKkKVHBmPfjSBpRz8jNSkXFzgNeLTWBdVVyFBS67s4n6JnauLg6aVPdtJSU1MsAfZZHWLb2zBVx",
  "key4": "3oDAmPMmuK7UhR5Jq6zX2cnp29N7fCZSM1p6d8duPMTe5CUrWDUdxBHsLjEhGfKi1z8XA2j1UAs4Hp4Cnw3JuTpm",
  "key5": "3hAPM85myNKJ3npLGyxukup6YAtBSjuFyMFeteL34eMLYXuT2v1P8ERfhtoCJGrU1ShFmkxsvhRrT5G3zpUnmmRw",
  "key6": "5ceo5KWPaTQvXLif1Dinkuu6VPf38XwwinrJCU5WrnLEJGAp2DSm2ExMTHKJQQnNA5uwvpTSKophkDoXkRfo8sdL",
  "key7": "4yTz7dWzxUw5kEp34DxVnkhhkPF7MrrFLyqsVa7f1wTjKjj6c1DWZZKAwwq5DWesWqxUZ6YvQsctgEgdpUkGx55w",
  "key8": "4uDD5R3TjVke1MHTTJBVwRnJB6EESrci17yvniDzUxXBAS2XwCuisHA7rLUkwt1EW3eDp6q5jQGct2fktZG1SEen",
  "key9": "3nfEnz1zvNz7nbGo6kQfCqQcAdeS4CWHFcZUo7Dvn7RbNc1xAv7Z7XAasvPv7Zmn17Dxvhvg1TsNXpuwYq8RmFGw",
  "key10": "3DFFS6mJCmV3BQNxxLiYYbNym9aZqs4ND6ecNEg1ToqUeigE5eFwWYnfiVpN6MdnjrFwfbvkytJuD6pGp4XDjueR",
  "key11": "2NAHuD941GsBq2Zu1rvenWRtZNvTdkqZ5RX9u8xzjnx2f2zqHpHZsAUxYNjfFKxfvYJMsFD8ik5nu9Aj24wtZAxi",
  "key12": "2SYze5RtXGiT1pvHdcsdguN5BhcMB2Z5a2SaHPLGvXvivrhTFd8J2QWzdPPcDoJTipgvXKYzi3UQPDvYxV5GWkh6",
  "key13": "3oJc7EUmtofHNtMPT2F6AiE9mjh3QkHJrpxq1HhHyNe7JTRUAiYE74QuDbuCtmd78jowiDrftmCAz2BX1dBmumdf",
  "key14": "3NnDXyGCWYnfbtV1LycvQ6prSZZu72sMjkhzGHoB7FP7teqYDfJBVtH4MRyx5Z7woFtZ5QGJeaJmQdmKSa532DoK",
  "key15": "4FtHEhzuYLbKgCixxhTk8nicsBbv2oH87XoHgViPa2mr4Rsr4U1cr8JsqXd3Q716VEKCfuA6LcZv5p2PFfWBQJ1g",
  "key16": "2ZdeVgYbgzbNsQN6V3xWDd1tLU59dCZWF7LtJeWpsWuSGakUdRFLbGtEuYBtiMBvcpGVUEPsKEZ3emGhwGWjHU4b",
  "key17": "ydnHyY7PMkhwmXFZZaGwxpN56xeGGzzYkUTsMEZF1Mj6yBghYL8TgrgcntmLpW3snzS1su5A1dEr3TbwwqcXY3Y",
  "key18": "5U5YCyPboNRQ6tYqMfLZ5S7PRQGmEhyeqBVwtod4F6XtowL8oqt6ZnRSQRUbDvcrdGV738ysEF7ymdrLawhbfwti",
  "key19": "4Rojr9EMcax2bykVc1oRHn9p2wtqwCWsrvUNSygcdmjhuYgQEzjCjeFdjtfEwwJGCRacDZZ3CyqrwZi7KcGRCrS7",
  "key20": "3hwrCG8w7q4uB4rSivJAkoYJK9V1kjYsUEdipdENjTDCVrbBBzXLaPmvv4GquML1fbTLowJV5eVsePyB6v85j9CZ",
  "key21": "4KHDyKv4cr9Z4HhjVmccsWij6EG1npajyixVbQ9najHBL64SU8bPaeEEZbxNCXebXx4Hoypz11G8ocZEpzCdmtKU",
  "key22": "3eLtHbrMMiFr9F9Mj7sfqvB3YLeAoTvTHsLbWTX1nyU5CGhpxwoGoiwzoFADvUExz8fvbqGBX92R5pw5QzWfXSQe",
  "key23": "2q5ogGR8BhEtPohtEzJGu5Qq2JGe5LZauNovZ2RNRK8NSyRCPqJvP8FETJrUnb18vU5AWAV6e2NJVJQ3KGphwdws",
  "key24": "9Py1WmvvqpyBABwMFNHDAssRQ8ZMFdA72FWJK1MwtzTPV4CaBsAbrNrhLtYq6Cc22JMCQkdPQTjL7JVStMLDByG",
  "key25": "3qLoPFe4LDpnRP5dVTpr1PLVq6mQoU3ETSJT5MDyrphQLLH3Jsiqzn8KUKN6Naptj8gVSVTSKJVPzajvdkP4uZEd",
  "key26": "5DjFeA7KxZDKbnCJt26G3wTtcZ8DnFWECbcHzpj7MBZJimish1tnBYeGjzUh1yG9eway3fbYFqTBnfStdsze1rJC",
  "key27": "3FTpwyTN3YyWen13TSvevajC7QKwnb3JzC8RqxTU1CCCBTDz37tVri2Lo6jk525kT5bwS7m2UHYPEperAjQMzPgH",
  "key28": "5kbD32qUMThVWNqmohmpznHtNWuYsCwQiWaETsg8woKeSThi3sNcYV7auTaCN4tbDhkSKiahaFf21PDqMz2te7Eu",
  "key29": "4RwL2GkKFe6KVqPj9Wz6eT68LTyu7AbVWKKHX2dTHMH4HG9a15gJfhbEjMzS7ZD9Z8Nee24mGJQb95vr3WorBk8j",
  "key30": "3TtDgcjFd3oqXYxvBhiYX9MLQKpXu216DxCAL2Z5Rq1wXCUFzBnxXBBTmHRd5FAHfcaCjZMV3XLs5rGMjvMurYRd",
  "key31": "2WKG7w7FXApKpxKwGjgtgr1493FcYYGjiobMd8yAvRbbegt3eLnexWRXx4YucLWH82h6bHTSEwLdaKVHAi3sZzF6",
  "key32": "63Q4fadFJwKm9zoj65fppxKGYrB3NJTnmtMdsKnBRNY86eBHd5Qf1mbTpEdhqZJFiovY8YeiY1epF1uaVSrdfifx",
  "key33": "5zukUfYL4NSpUyc3rxauxVrZvH2fnp1C1KsxfyRyBqjaGd2D23TDtt1Ydvfy35kXW3LQhcv5Ww9gPNhYYuxU5yhb"
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
