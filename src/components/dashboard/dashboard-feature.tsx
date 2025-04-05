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
    "5g6pFzcZzUmQJGR8HVfxuARky79XD1w3xR7xgy2zarMh5ngSnkjwJKW9jxNeZ4xZSNFWnRoqC2brQALvJYaxC83B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "497WLVC6qh69jjXYpcp5yhGRSsHXrrW1SU9PnEmQWNoFHxRhpWLUdprsSBhHjmP1YaF2aN6uWMmKbGYyGo95RyTE",
  "key1": "Dx8xaMjP7PHpHXBFzWrqj3qRebxwiKtsr5UdhiWg8jyAYUpZy46WtCYX6p9XB8L9QVsrc4H5dx2Cn8A9m84i8G3",
  "key2": "38NNLVfZ2T5aCQmiGe4Z9BeosXRfm18cPgB2MRg86coERDsHaRTRLoomgu9BYPyUpkK8SZGyrRHQDMYCJXPfGUWS",
  "key3": "2zxSdtPJ5DT9HfZmHGaqkXytfB7WPBXXCHDxfSchGw5XbkRDNHxvGzFXoDbnvkuBX32geNnMLVLPjMTKvjt76kti",
  "key4": "2V4zxE7mdfzsX6AFWT4zjKfNAJpMeBcZsFcGyE8Eda6fV24wLtv6vnoSvnENZkDt4aGSEeSpo8FAtDXFMXWk2M24",
  "key5": "5HYsQmvzBKzbmq2CfRc8qP5yFrCht1PsUb8WP8SQQH5WBPbF8Bu4E8HQmien8DqgLitaK3RvHGdc3ikD3zfquAPW",
  "key6": "4Cax4taN7NPrf5fBwacAWjzQPvFkAwS7UhgfghU2oqUrz4KXZDuhsvR9Zp4fqCMfjwcjEkczxftR1VkFnNDFR8hn",
  "key7": "2rS9X6acMrp1Fk4xbSdWmkmagBpd5nCbccdTBt723AWAfK4KNRNpwqwyrzrinMEYryd8DMY6C5dcNufxfYE7UXg7",
  "key8": "4exJX6APbaKJReFqc5vPAD61V4qXzYt5KwUHsMuNbJRbFnPeDKZVPC3w5eQzmh8g1dHr2z1UTwfDFSef9UKBfkbd",
  "key9": "3t7scD6859nUErSPgEwoLug9iZHxttJ9P5rkZTaNvUfC1LNg3LKLxzJLFuC63B3SMd7Nu4K9L7ThvGXVkxp4vcn7",
  "key10": "2YnTbwu774C3LiJAnVpjpEp56o4h1rhhfRZPpfbVMraaFfLeNQgTJ4fT22NMHf8eAu7U5BiYDeGhxgNxH1ysWuFP",
  "key11": "2zgU3T7z55mNRrsc6W5uiTz4uGm4R5aKDxaXTrxmwHXt85XiSxegUUKnqxiJD4thWYFP5ynaewuwzWM2UaJAm6ou",
  "key12": "3fhEjimr7WYZSwnTbz9HsJAF9qe8bbUKzM5LaNP2yKPQQqx4t5WxHAeGECWBL53tAvLBhUg9d4sdmGbKrE5pSKKv",
  "key13": "4Y7GK4648kK1uwSam1MSeFbNvFuJTNp1648sWyhypoYqRWrrtejy1W3NE3z5aVNTsePgrcS4t6PpGJXPmH5DDWKD",
  "key14": "2Ms2fc4G2K93wd2vjSNHagFBhKGJkt9rEZUNLoTQM5DKTngJdfP5jxe424pV6ya61mUJxePebE8DQxjfGaC1BNy6",
  "key15": "Rr6Gzn99qwYVWdTBtYyPW8GFUKGHeeDinUcCq93LB5R1ThcRmv3UKwPmPy2PS6TyNi6shdBzfD1hckaee65Ef3f",
  "key16": "Jf7bTWVPbohX9wQB8MpnrNZq2acyu1zchEDjMf5zJbcttms1SwX42tgZUBRAqQFnovcPNs2SvpEKXK4MqTQsZpV",
  "key17": "QzMH8kxns9usbt6GyU723ZeR9UVesorrQFteyLicmLjM9k7bVuWudRzZS6cg5iabDgESd1ToZ8wH5Giobeo3ddG",
  "key18": "3o2op2LbwDH4mKqmY3pQbxHydGsMwP7uDJoDcX5gH1HPob8gwrQR448kkEts9t9BEfjJpeBQE8sYX696GaNgsWn8",
  "key19": "27AyERJKhZMTQ8GDPEi4giCoDf229JRGcRNHVh3P6kUy6ppxNrNKXoD5x9csTpcADfYAh4jaSKnCgRAi2P2Sx18U",
  "key20": "59AFHTVzMxLXYgk1N7BMPHCKE6ANYC91KcNW9h7DsAeRZ8kfx5EeMRti6yVnFpaZ5jcWTCrgTL5DUFmpDDRkNg65",
  "key21": "2JpxKaZtC5wrgfKpS1yydWW3GqtYPC2JvGr1pZBn21xsNhozDMQHbUd6Yy4DtPvmYBNUnTUjbDPCRRe75iEUaSva",
  "key22": "ALB67BnRrsJEfL1s1EPvyB3Cmt4G2WxUaF9H12KZSg5a1TsGJfty6YTt7Fd1btFfqBiDj6GEcdA7ka2Yf7CEhNh",
  "key23": "2FhX57AkdeZAaLoypws4stta5phPnq4A3MFrec3V1wwzX2Q5kUaJmJU5jwm157wgmfpmYNzoyLpxXYYxm1LHgPbu",
  "key24": "5UKCE3di7CqA8nwRjbgyEtpsfXY685QAUxXtL88Y6hyvbwxNF7LHmxdiroTJ9bgbh3nt6kBPhqjm6BYVeU8QSpKq",
  "key25": "2xtiwWQWPYnQgYgy9m4iBsZeZhA4ouLCmfrRf5ut17nZZehxqprdDHrGX14E1MsDfH9ZZaGqoWcPez2M3JViuR1Z",
  "key26": "CBCByERwr4jmzLs35Y3s9xB7L9n17btw8Yyp1wdLZ8hBT8PhkK5fW2qnaFztw721rgrBah3nqLvhdkkw1qFGYfQ",
  "key27": "3FX1QLvEuhT3Padtfg8bwE5RSTzWu4cbJLvCihUmDrBkPhjLDKvSFxGrxWtmLM8mjnPQRbfqFn9P7Beq1pbjvEi8",
  "key28": "p2qfEquJ757xvzdjJJp9ufJUTqUeqN2sU3JWiTgpKpWvGcNz2KhhRXmSqjuMXpdHBLeGBcS3suFheGtK7zsjJhh",
  "key29": "38iBPVTDX7VMpjUJBgYrL7K5GXh4K9YDz9XHneP7Woes9M653vXDJPytEMr3ni8u6sjzU7U1bZxHRijBGCTwhNUM",
  "key30": "4epd12FMMFAzMzBSQ8FzGfpbgu9VXFPBnGsJ2JdoLMpEUCA1ft4E9PgQtPx3MSh2pLW8ZBa9kAD9A9UfhzqbGBFZ",
  "key31": "SFTP4iuMS9TNjEty879QVwz6FMqPcXXQe3MPdxcTcqbLzPL5w1PgZpW67ifTqvwyCuV7krRqL1j5nCKrGgvy735",
  "key32": "4KBsYGjvqoW7osPgQbLnx8oDzJJYfQuPfNVnLR5qqwPbZXuyaHnJxWo4RMrQPQeSNNaBbusLT4vdiZrBaFUDQkfY",
  "key33": "3U8VzizAbmKv7mvbfVN18CrWQMFJPTgzQs1NZcAxiw6RPyHrBfFea4Wsp4wTDLsVbfWU3RpT2Fvqcdf6xup1muVt",
  "key34": "ToKp6M48jNWkoZiLuAVX9GYcCTKVGQgtT8qYxzWiu4HbfHdF1U5s5hZEp9sJa3cqCJ3Gx5tWe3DTW7JALZv6hgo",
  "key35": "3rhUfYtQYVWxxakMLyghoLXy45KgiPZsLzTkAH3QSiS9fJUCiPFq7La3C2L8DWoyANYpdLgRsiVh1SdjbkbkMT2Q",
  "key36": "4JqqwxzAXx4WJJxj3Liy9hmg3o1DByHb6ZsLsqEaS5nixrxhJU1io1enT23sYvGVqPPCdWWjQDuDrDTVaoD2TDX8",
  "key37": "5aujQGJfSxQLzoxuxdJejvJoUcjiusK8Ezxx3CkUEYwdWoKgteZS4kY83RRYfm8844kDwXoUoffxG552GreAsXPs",
  "key38": "R8SVdeiJeuAPxeKM8jHfSBv9Xr9fZTNphDGqGNFQQ5tfdufJHn5186K6jgez1dCmLrzv1sZmTEjbBMWTVVneref",
  "key39": "3teEgc1RpajbEMmvQHEN6sr4U55WYApAoCeyEmXBKtDagxJA8rjWmV9hYxtB5UK2Wdj3uKCvKw7XPuFDbU1nejZz"
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
