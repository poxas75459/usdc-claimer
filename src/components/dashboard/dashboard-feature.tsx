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
    "5p581WsQ6n9vZNkgmLN7x3KKSSjgdJjAdg7Lr3571nHPnfCoYBksyT7L6yhUKjZU82BQngZ9i8swAGq4gzsgGiTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kYC1TZ8BtgDnwDuonKvEHeMbRWch8zjkZNMe6uy4qxdgCEAo9o5zDTK3THwmS7ZHxEZ2aQUA2wa8dpRs7LtZa6C",
  "key1": "5suuskf54PcfDcFt2y7Y8Qv9BYeL8bsd7c8EG1nN9cHinYoDvVGNx8BVvpoahnG6hQC3pw8Xzeq37BZG1EEn3e9d",
  "key2": "3GU7FFA8vfVJUEFmGk4NFMVsQBbS1K2S4nphAr9ufnAWkm9QgxT6J9H77bhV3mXmph4Rjd3Q8ySoG2a3azNaqgXS",
  "key3": "5LNiT41qjrETnLSpVojdmGoDuhTD6zQigJ2pyrMGj2jwUCNyN1DmzueLsRv2pgsomcx9dCqFHRC4qFBFYkaySGak",
  "key4": "5vh64cZdhjbuW15Vc7PetLmP6DL9QZqftw6mCzFLnCgTGWNce3nFb8b2eH1Weev5cjPEDhDkaLMFExtRQe3ksR17",
  "key5": "2dGRrKD1RuTWGE4iUWevpWy169XjdnFGNF5DvJf3fifqxjMEqHtKEC9t9XCZftE8R2fmKTdGgttDpVSsGqAFng7P",
  "key6": "3wgwSf5Za4tHjecCWhP2i6pjkvXoTgRwEL3VdqkRHfSn5wUKamkNnAWMKg2uNpUqvNrFoAjyKNoWJYrexxPvTdXs",
  "key7": "yrWjNGpkbzEtgejNxALfPHRUkYK7gpbrqseN1Rq6HyUzCXARnyNiyiUUFmdR2HsWJRaWzfnLB6DEYENoS8179zJ",
  "key8": "3FpRxwKt8LMAeSYXHUe46zYXRouzA378FwAFH4axa9oxL2NX1TretRUCwo27YzVZKWsfTr8T4QTQL5486pcx9eTW",
  "key9": "36TxyUVQn57hBtP3jyqNuZNdbqJa2yceUBCPYwVckhaY5qSbehMhWPJiwmmc5PfBaaoEvS8r4neciKpDdDbm3Dan",
  "key10": "2eTqSFkh1MACzjyBD5bm4GFVB613W5QcSGUy1U9KHvLcgee97FUjQbPf6TJ9nvWoosEymWwCU4gDqADGwd2up4Mw",
  "key11": "uvwREfbbRE87ut8fv2w44TXrR9FzsJkej3YdkptZAFh8Cen9Y1jxFTRh3pd8e4sbidrdVNb2oaqTgRqfxFa7vfM",
  "key12": "4jSxnsR1aoqTjEkLHNfsdSd5x8YJbzjiLxfcEpo33dLZsQTUnmuvfuLRcijaqk2tUFutafnpaTvyu1vmeki9mJZR",
  "key13": "stgU8tVK7b3dZapKkEa9EZ49mDKEXAHer7ji9weySErm6r6WFNZEEVLkBpnqSEWmnHVjDZuC83CvganY1V64U16",
  "key14": "3tGuWiigyJvrM6QLCHKZEerWyc11NjGzVrNWiVHYnDuGLo1gENaGsmxtdXwMFkfRm2QoF5ycFdjY1SK6LweDKoT",
  "key15": "5GwrByRb9Q1oFcvNGhHu3prhgP8bMnpadKyxFi1cBbLHyRJ5RJPWD7hkSVEdZkQkZuPJG74SXRT95V4XpASjCaeE",
  "key16": "4vASeW2RUX9dTSBG2Ynxd1RnfuW4PiCbe1dkLJAfZLQQkYE4hBdfhresHr9HDM8nhoCUf9tttbG5DSAjDwAf9Wd9",
  "key17": "4Q51SLaBT4obemcV81P5FpWY6RgzFT3FrTkB9Esk8UWPz146PZtVfZHzHRPJpf8XXfrmxrwce29948VSXuDiRnq1",
  "key18": "3zGPQGg9MioE5pEspbr5u25AWFTASJm4L8Ug2AxeiMcpXtWUhMWB6uyzgmvLZ4ThRSrw2fBKe1wWgZQhfcfStL8h",
  "key19": "25SG8etmSq8TxtepRKU4GmXjEMFmvRv2BSJ7GfGWwKm8ajcu9721FGBpwnXFaLBuBYLkawVcWfgwQB5W87JVL63F",
  "key20": "KVYsKD66PfB1DvWycq52rNNY1htKtAiCdde7N6Yo4ttF2XUnzQxNDaeSLSEMWfbEy1yszqmiyh5JgeDAK1zEHxG",
  "key21": "2hWaTpcDkpiwjQzMrVEgGwV5yJGgqZuPWjwKiPfRpj9HFqJFskoBE4s2WUecimK4MGsyJrn14tG3RLtYd1iwqUd6",
  "key22": "UQRzXmWVUKzkqEwpbmXVLCFYo4H1q5zzNKKZT79WwoTzaSuojA9hZSRXs3EmbyPW2GJDDpYHyFjJdFYZnuzAWLL",
  "key23": "2hPWxc1qJ6CDA1aFURZQ2DHs4bzobwTwAaFgxdk6g8BcCw5FxcCRjCucWBUmx8GMq2Fpk2YdMmjU3tWoJoD4WyWh",
  "key24": "5XxQzfjxbVm9j5yX44vAb1A9oM1yxRYnJU7HQkEUK36Yd7AQa5aN2d42kZP5WoasewAnFCwYzxTFb32FHTcEbAm5",
  "key25": "4EBpi5Ghu5LK66QvN7CaP4ucAhXeydPXRsZJo8DURxELnvdsmEZuwhyYhppZ9LH8G9ubvzv389YWUHyHTBW5AZTo",
  "key26": "4Wqg1X26hDJFqtmjD4aXdQ3XChqHgeYca9YyQHTHbfYHvaYTqWC3BhwEfyWYoyKBLpCtxxmaFn4KS9WmdmPwi6PH",
  "key27": "2PxywXBsCEKULaxmgAuQ4VdysjrGZ9gynFHDu7eiHecvu5SrTMajKPJ5FAZfmr4r3WbYVfUCWYXq1pVA9bA6Thv6",
  "key28": "2ghdrmEEzPJXsK1Go9CD3eLj7Ejoyw2CbqE4L25bA23p1hFHNtCM4dnQQ3BiPssTmAL8j53x7LxXuDYkGNkBSAef",
  "key29": "2su89k3NoqpwSPS6yPKAZrpZtRdaSMUdGd7F79a7ehRC2Sa2GkFoemPcC91Gmrq6SHHmwXUHGCaRaj3LtQrT6vZh",
  "key30": "4B5wfwGCcNwHT8FpfXfwyWz51gcnFCDu7fEaXvpRUk6Bye77Nsuv5hU8BnaKpf8hPk8qtKLNwoT4VgnX7A7bvRM5",
  "key31": "3UUFUQGYJNWGhVmUEJGKjevUP4iQzj8Eh5jm1C7XK1PaTu7ByXp96UtmN1GPqMiKW7Szeo5dGrXKCywCx1pqFtFm",
  "key32": "RakvSeTa8LMGU129DCWhRRE57L5chgMwaxoUqZwim5rK2bDUAkA9bkRkweX6zstP1R9JqJSk4aGJYab246ft9jS",
  "key33": "47oyJbWx2N9uY8echkXqBs4LigmneTGkGDBV7FFd5411BtMVPHrVgnqFuyhtTknTTsb8GbCjNfXPi2AF2FsfHkFb",
  "key34": "4NdsQ9hLfwGQAYtLw6HM635ETSmKNYp2JqhafBZeASG1RyBLRNP9dNdCoUskGo5r2CmFcvN9Af6Qj9KpsBMvF1bC",
  "key35": "JEhPHkMUuz9YeotGcnzEiXLoVgAAkvhco5gCmUtvBYyda9muTL6tLGP5Muaxar7s2qejzJNHE97voa5djTsvpBu",
  "key36": "5Rj2iyAuJLfVhmCUmGrzwWXXVeDQnprCVVPrsdZaxWMRGVS5V1FkDkLrdydhesdhcsaTonCUbXEEP4dFN3uv86j6",
  "key37": "5h5rmajAbq9AXMkpshheAkPxTxJbQQt4eLDrb1CSCRnHJAhMc4BAH4mxKNkYD4RXHG5y72Zw183eUwDuAPcsCtrQ",
  "key38": "2v8V9QNxVZaNGnMiC2D2YNewiU2guMeNQhW1EjJAk4ZLuybHkfTkfh3bYxNk8mxoqtPtTJTz7VN3Eb6aW4FG1X48",
  "key39": "3oWnaSpX1Uyff4SnjDHGADrsSxBAV6ry1CstxGzs92ee7bJDFHFLQWQiQC8ZiMzr31Qus6tcbdF4sVEd4NXEN1PW",
  "key40": "5P9js9u4zMcETCZgGPUxMYWfgoovQ5645yYa3pCz5zfmQQoUtATHrN1NpiKzsF3xcWXvJSSn1MaugyW9go58rMJP",
  "key41": "3YEtQEGHYAZXRuD3NSiPBUyD7wu89MkBd5yU5rqRTvDAEuuXtq8Wt1ni18LQU4BkrMdFc35haLhYhMWbXx1r1Zvo",
  "key42": "3Z7KJs3Q7YRnzXmeHdTzeDT8R8YbD3fJKtQFg2Sbo4vKnjqKJATBPBtCTJGu7b7D4qPdzHzAGumfVSCSv2QyzqfG",
  "key43": "2Dprwcs9pTW2UTr8v1jpbECc1pH6b8872Ma4aHJaYSJvvLLniM6mWM64DypVKvCXNZmtfywUksYwTUZU7Qv6MSs7",
  "key44": "qDM54haxaXz38ZtqacQd9Lo3dM2ChNzYKm3yofaKPn7zKfVbtSc2h6yxRSx4qaFtVzp88KGUXhQkif8Ytsq1yVC",
  "key45": "2ZBQTUiLtqxkzxc2edC7KqbfHsB7EPSKHRSBrEHPdimnszSCgWE6BzjMbKaN5rgmSpAEwq1Cj4XM5rpArbsa8QD9",
  "key46": "4dEVS4W2drvsjU9gGCrroauseucDTVqW2wkTiwYxbU6XtuKBnfMJmFNMdD1p82QeGV1r4uwVwbMxSfDyafunCp5u",
  "key47": "4AV9562CMtLB6jDQwEkyjBAQ6QrsUD5fDd888NaUaL7SjXwmA9tz7e7udZWvzEcuvkvrCCDCmg9wu5mQ5jLWRfKw",
  "key48": "22ZEtCyHX3GwVJKRyaoFHU1WpztLeX9FZHoQCNq1ZwnM95PHU1VfBxypZ2zZeJMn3G2KVNMffmG1AkeUdJtDZzER"
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
