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
    "bhbbEB71sv52SYt8HrWedzhCg6Cf2nqAiUxcYJRiArnGR7tVBkigzkupaY4c7DEU1MpGwkag957mGQRg5h5r1Rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TCS2ZMdMmnMSpbQ4omPSP8PpMYaiXnfkG7ykqWCA6ktCLtWpUYArFQaMCNapWvCbMJNqmywsGFGmpXVrkpPt9QX",
  "key1": "5iufHiTNxLg9sr6WeQ8kvbWSE9Z8je35gH4zyofiDXMAQEvgprZfnaqKTE48wuF7dUZrFXY9A1sLpq4M4w6PzxcL",
  "key2": "4oqaw4mR9PQENMyzKdNfiQ4wjsyH3BWadqwhAHGNUFo52XaoCQhYVhxaKSopJjidGkRDfjArerDFUb9whLHDMwFv",
  "key3": "CEEw5nT5pbuL8ZKoqs3QGLhZAAjhNsws1Lm34uiXs2U9TvHzZGCeqx92QX2XUUoCqvd6zU4JFm6dn45mB4aoEvg",
  "key4": "5gfMV9bpaJ3scHtARZGtXoxbiYk9UW2mpprDWgKre3W7nkFhqcEDH6vtzRxYDPxQvBRPAKU1WxJqA6Y7rGavFnow",
  "key5": "59agELxAxex2covoqXtgc2nFenkzmWGfCX2LtZeLnKb57tviVbspGcR6yDk9CUAsrUWsjxEyD3jgucGaz1Hi2egj",
  "key6": "4gWokSLeQfHk3gCHUuzAAbHS8VbtoFJGShTpgciuqD5rMTmAyVNMs8ynSz3s9UT4rRSAbLfGcCQ3enb4Rahoymgn",
  "key7": "4yfb9B52Pd1Z1bBZrZztzjwVENXnCF6FhpCmPxeM3oc7mWFT7a2tZ95RpXyzkeD9Vf14j5ZpewShCqLA7rGhtbsH",
  "key8": "9g5SdeShBFqQJ82fPzWxYF2cqxTDpkPs8YJiiXM5dexxoQrzqLLkDzjP42yG8V194oNMEbPZiFyHxUXsnDvPvy4",
  "key9": "2RnpSJX7jGhrAMTm27j4qu2UpAR62qobhV6bPsBFaKF4qNssUpzvmyGRX2jCedaF7BmVGP81qmgKfgVAdnWRP8s7",
  "key10": "3WWjBCDbnuupUPPAaajrxta1c5UZRADzmSFjjGpSaj1iQoCnGHh4VTMcjiWaHbyxWdsvrA72e7xCS7sbwgyJpdYg",
  "key11": "2t7sE2pn6YaBhhiuEZTrSwhQr3dc551Ydh59qMhvABcADVoDUpDAkoBTYYESuHVrv2yMuhEDJVXm6sErKJ7bAshH",
  "key12": "5DLLKTTzytJeMi2GczcsWEbsTiCy4kBypPLn5qFtCS2rViK6YB7aQjn9M3UB4qRhyDtLdihnL3Q91ibrHM781Yc9",
  "key13": "2nSH6ad3C8a34nwfiRwQ69k18ga6AR3sAsBXDmZxg8TZfWEy3zLiSom13xVnuHfdiZ8V6UywMxNub7ywBJsDL8mn",
  "key14": "661ggn1Y4XXHsh9yEyy2WZs3jgxZVgTAkAVZgSBjxp7wh9i2YGAHoXoMxy6oTHSxjk1HsLTcywjGfy9L9GpQtoFB",
  "key15": "4xzPG6XiCfSvCYsdB8c3qyhx4qoTApfpJqrqfWHzGgak3XFtMhuS5mCwfc8F6a4TV7qf522ZG2UwSX1z53cLEQDZ",
  "key16": "53AKjaGnGMFrMr3mUMq3BDFyaEXckYbQ59vNLMe8bYoGvoanrChcUxZSjTPLwHVJAMSvPARyTsp6DzHzJhZyDCRo",
  "key17": "2mZTyrZyw2cLkH82nrTaZsxsz13n3vH1sRD7EmxeghFG3uuAiWRnM2gEkQFRFZ1GxnoTxpU8ffQzZBt1xrTRAt6v",
  "key18": "2i7PHAkayXPNjXgo8Bf9AvCgUAKQnUtZVcWSjVSkPNFBBEHkX1Gtf1VWz2RAdLPRJvg7PDeDCFuLzWZUGXhh3xsn",
  "key19": "62LWmdU7aTipWVdRXqRWcTikDDpJYyXAzHiGuQQJZ3fvQFywSGW6zP13kEXN6ohRsbrUbMPWso8jaPmsCM8FVWti",
  "key20": "2Lo5rUrKbbJ3bDmsKatSC55xYXLzh3J9N6k6yH7aSJ9842PX44G2iCWup3WWjmXzZ5Ty5WQ8vujXNgkineNjVfR9",
  "key21": "4EBWbPuYEXpQqrZDhGfj5aRtvCkqeEKgPsvL3Nr4ucGG4wqM6PddMXJc4eeNk6b48zH4uR4MNTuGP7gWUYUfw49V",
  "key22": "62KTCLhyQKNJHDciL9qkxZTbdVBkgu1Y843JMCxuiz2xgsEc1tCmfXffYJDKqU8a5jZyYL8LBwCxVsifpsbnt1kJ",
  "key23": "5hfpTJvn3ijSsxLoFmHTYtDkjPV8V7vJEdMSpjnBhuMT4bzF68UCP8atSHXLQNd5QL6XW4kdZVgexoerU9FnJRPL",
  "key24": "5C86zdPafQLvLUH6TKhYtgFT9R8LGY8PbXWSQZ8LNdcKCSwWoqxGujL67UEgyxTxQfKbLLw441WtmBHr2tbGcxq1",
  "key25": "65kZNwFpuJFV58tkishVawdZKvvujnRi4JtQDpFtpSGauCZFKj7PwsGgzkhE6KQBYoPL4ANZZ5p9ALtFTdXyzXsJ",
  "key26": "YhreCKnMRKtDYE98QUbcC1Xhfwwz3XUgRuATqDtfnB2b8WAtvbcYq97H2naJSxiDvzY3BwXDcuWsH63xKcxe46Z",
  "key27": "5Bo9djfeUSwp8mmSmFnvXdDHsnw6WgnTx2Rwjbw7o4h5K4MGYmuVCjQ97GAU3X5FCmG9R9P4izV1XAmpKZ89ATZG",
  "key28": "5bR577dykarrrubxkAHvXoLekWbnrqmAY2a5qHVi5Tfxn8aR78B5HwMEuVN2Q8mL3j35LfCcA88cTqBs2CRzPDpc",
  "key29": "kYkqMq63GMS2syyMRw1Z8ZEaJB3tWWucJSimYYxryaUXSb9NCksU2rHBbxyxgaqpRb2zjutB7jvwRzBuoENzr1p",
  "key30": "5eAecWbT6WxsHZ8qb2X8ZXb3GT2JTjQVHNTJR9BoMv3xuiXKiMX1b8psg6EAeGmFTVvcupME73QkUTrTxrVQ6WbK",
  "key31": "2q7PCJHq6S4rJdjxDM4H9Nf7YhBbjHkdqxxvrFFa9rJNoCSkFX5LS48p9am7RRbWa6CwqUZH5R1nc2ruQ8XA8LXc",
  "key32": "22rz2B2mBYdryN56qmWsCwzr9LSBhZSLVVzpc7wtmUZBXiX1VJ32EaqegToT21Q76FvJKPAcNC32USAcN7272GTA",
  "key33": "5HFfYssugVLfUxVLw7vK1HS3dmfYDp28QN3tPqqVZm7e2Do86ifofzvTTRgXfarqW5sxFXoSoPaqZPHZLbcESkm2",
  "key34": "VKKCfCt1nAY2Ws86pGboJfsLf2Hg1T3JrLcSSA825YHfSq4H2HQ62KZZPkhUNsYJ3x9sy9rtLMBcWcSmqM8xbsG",
  "key35": "4Ud7MmCDsPn4zCFSTviB68uqMQwpvDoevb89BoZXMEkEJz144zyjMFm2TR6Z5k8dAEUWuwMYSXaLSWG1WYXqYBb",
  "key36": "3wGeyWgjtHk8ffbbbTb92DvxFkYwfRtkTYQJ8zvpsNUjBpMatpBcWVGB29UFkVyNwVVgAmN6jvbTsqNRH1MJnhbD",
  "key37": "ewzRdsyPHYsqKUV7P9k25Xq2L14QQ7p4CscWH6o4hpAooPY84bBPY4PmJ8HWURz2MUGCd2vRR268FotzvUHkosj",
  "key38": "3u58vtYrCL5engbq7KVpEm1NAVu7dMcsY1LNSTFDaynft1ahuVtQvxmh3F39wGRaFmzn3jUbc6NUMN9dLk4ae8ZQ",
  "key39": "4FbQ191Ump5n44moQGohaKfKZasSrw9ygKrUqr3PVkqkcG5en9B7j9FYKGGw7quZvz9vz8kFFrxmRy3iyGtx7Eho",
  "key40": "2fE9GHjaLK4FAv6PfZwB78yxTDWaK7YGmCde7oFTsoFSswoet11mhvBjKLTta6G674s9rNwSVCZSSUFL5qkqVGgT",
  "key41": "5vik2pGZ4mSrWCSn2pLCpnGmhBPg4uphv8NXhuopsJhNzcbsKgkjFawLbF5jpf6zPbi2UgENYVt5PT8SxJFhCeHw",
  "key42": "3fCMmAm15r2Ln2KRgM3LrFUQoVDinksTpSaMXs5oNURDSH4BvmCqqpfbPRNT7HxqgdGz9Zx2Bz4Wac21gfVb1sNu",
  "key43": "617oQdQt4uayWgo8G55DYaTzk7PYGxvUbMPDaJ1BJa3UY259EHHebzwhBNjJ6BY2GDFC3Uzbr2RRbL3GeJ8zYUys",
  "key44": "2Mp5JMxyHNK5t5b4osP21e5nyX7iC2nMUU5LmaB6nFNy3zm9rH79WPhEoZGwGNdb1y6rE3c4cWN5xDfsTegJyKWr",
  "key45": "35qJaCVLtLP2LuxDtFsDhpaeL6Sd9yAEn7sLWuzv2RSQvoTRFVXdSPAE3zdRMwgKXgdVgHegNQSCmngAvufCwq7o",
  "key46": "39R59XbTbuAJC43dEAvT6mEdauA9oNCbaasp8Kvr8MwZ5E7SvngUZxtntTZzMxkNzQyqtfVfgmaEsNjsAfpjgt9x",
  "key47": "3wjxw8TPNaU8UJxDjoE3Z4avBt2hwCdnviBeb5yXx7eM8JndKNZAyMXK4tuf8pxpqwp5CVwzYiAz7HhhdUQMij8G",
  "key48": "63BxRk9nDgrENF72zcjTjJr3kKZX5uFgqRQjWkab7yY2hXit1TTY1ZoJP4bTSC4X4LngD12fMzdLkDAtpp64Cqb5"
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
