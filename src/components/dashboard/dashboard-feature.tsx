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
    "iQETg6kkWhi8MCouzvw2pvW4ye2nKjjaA9t73VJn8qSJ5DbW7nQ7i68fcHXMRdCSRm7FUGRWbpafGCmB1wzLXwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nYgZKAEsF5Nv3qBMAripLJYQZrMLpWs6SAbrLUxxh4Yz6aviSPwaXA9TfWv6bntFwQgzxvoGizRFBq4xHNK7Fx8",
  "key1": "odvyLn8Kqz32syRtp2b6fkT8xDbYJQWpDPaVqZTb8HhobE1vBDnKG3iM4pEX13Pu3e4FtvCP51Wg8xJG3gJMRrT",
  "key2": "3HmUdEMJ7c3Ege7Looz1ssiAbR5gnzKxqSro9BgtuAPmgitvMNTPAPjmATdnyxsJu6pxNkxQAsdH9gzwsYBrch5N",
  "key3": "4Qv6AXF95X936ArS29eaVFZyceLEW1rmaZif76BWdZabtuY6zR9SXgwuwWBYskrPagWtVGVNLbxTPzW1ZtCnkJDm",
  "key4": "3zPUvhMars57au1rio2jTiosFskLr2dchFBsULVGSRa6eZ6S25ag3wo7KU7PQBVH8W7yNH5d9ihToXLFZhVCDEzt",
  "key5": "2KPHxJwrv19T6T7xjktq5xAR9yKxcX28cg2on4FjHsj3MEHi6jeLtSaMZd1svZS7DHJ4JD6HXtTwqTYr11xHGq2D",
  "key6": "367xTzr4zv7RykMnDxurKV8KyPhkqndchxmfCd3AF3YhPy4c5Vz13A8TrqzKWkjcfxirLeQfrd95b8HiqzFtf6ds",
  "key7": "5wzdWUPNs7f1XsQxYtWpedW7RafPdxDn28GCJW5CopdnJnPNQ5tUBF5mRx1hod2XU2aCSnbgqKvv3onZPZNsDXBM",
  "key8": "A4v8Xw8nNT6eyV1XKMcJQor85Q1Efe92XNJZ3sqDWMysDtjusJKNQsmcQHsiJSQzFitHhrA6TNCUM22MXdb9JYa",
  "key9": "79xk6min8EERVZSVLeB11No4wbgyJGc8G9kdJCWHVpgLBeucE5dUoAPiaC4ufUn2ccTZJU3ek7hrd2vnrRPxX3Y",
  "key10": "2n7AZvGgXojYehZrYY8HZKFk9YnWtFoSnUJn2WizVRe1ZU6VC84Dkk5LuQJLx9Pm1fmpT1B34TPXzbnVckDeKQQu",
  "key11": "2iuhWAokNPJg95q6v99wrZBG9JVuzEcPnvY5VNWypfHn8uvQrtBw5E3DsKTsBpHKoWGzjSGHaNPJVXdHcsGnAFNj",
  "key12": "2FshCZkSzQVK2aC4uwPuaaASdQDiaUVeC5hWieJAzksQ1umEHLosjWeap4dtoQKypvV1hmPMbZSX782HxQSEzM4p",
  "key13": "2JygZuVWzyP3Wf1rTKEzXGSvM8RJzVPSrmAqCSmdLUVuJPfL2SqFkiANNZj8DAfsBSgdJvWTyFhSHBT2MguENX4U",
  "key14": "er63VvqGEesR3bdsP9M7XfkQ99YoKiXT9HpZQFXhEmG3kzUMdGVHhT3STAxTqPAYx2z66hS3cRMn91tS7foyEo3",
  "key15": "2ifLbiJS8wxkrC9DyBUa4eFE7NHggxqS8DkgLBNtDFe9mv832E6zgCj2dUA37xqWAbjmdLSDtoeJqTQ7rTkUSSYc",
  "key16": "4nkrbnuiHn2iSTpRBEP4utG23p9B2Eracp3eLAVoJ2BnAiiowBMVpfk1vrg6mKR5b9tqWUHrmoqPbcZWqNgSZe5U",
  "key17": "5MriQL9csusSLQNppQNPGWttwWA86NcSaXF21uZyfPfCCW6FyjSwtyPNHndeaJXaTyjMxoBo6xCGqFXXPWmEtTFg",
  "key18": "2kCm6orJnL7S3Gqq3tAn9HHasj9ic2bYjVjFdxHtPfeSbY85BSxe5427sNpv98S6Ep7wDkBiPAKpWWSpcbv5urvm",
  "key19": "5TQe7Lybu3ScFeLpqmCT437Eyoy53SoCZEXRrnaSS3Ka3CsHStg41kc77EenJjFDHvmPy98NTPAtXX2N6GwrTvnK",
  "key20": "3HGTNBa6kWehXudx8HJ9Y9nLZBUBPLaBvLX9zGCG5TXMcFDCerNejfgqHvBc9tmBvDA9Uw6rTjmUgVH5u1aA6Qpm",
  "key21": "3swGZT4CroNwNh2ztqyuLDKipC2SjEq1ezyNkWnXgfoEvugnYrYVGMGqVBnPvG2yGhPgeq5XcrdCZVvQZKXnY7FE",
  "key22": "4D9Nyq9K8b6DxmGA2Di8zARTX2bLWjAfBsomgVovXahf15EGsukrJaoe5psCYM6sBa3bhGioCMbB9duA6HfvkSqE",
  "key23": "57qBXV5XRHtPh7xLGsw2dT2fF9wZ1RxhHSmYwh83Ln34YNy89E1AbH3oFHGKW32GffLFQogASEdwn1iwEJtCD8iH",
  "key24": "34TNSC1RgVEJi3GRBfHzE3Axmj6JcxcuVoQ8q3713VuMFhNu9wjiumsfAENptfMZFoU2Hi8ZXbTGDJxR68viCxUV",
  "key25": "2Mktw6AazTfgU152msC6NGgKYnKaBqJG8wdCLDkQvDuRULwjDg9FwapqthSqkKx1ownmcxfZU7kRgJVXz4BJUnGD",
  "key26": "WmMEDxzzMJoiirpmos1Eehy9mgJWjJdnZDMkLyi5FALurxq5oMY6NY8HnzoCT1TPvXaEBtBzXN2Ugi4YtSZxuE8",
  "key27": "7En7LiVmi38nNFRCS4qmwtCzrYwccH3k3fEPkhVFUNzRhHqGEU4AYXgKtjctMkS5uq3DbV36RLYaGQx4EHGtLS5",
  "key28": "56zmiPadezASRv4FbCyzuc2WeswBvEnkUVEoHDQmN616d6EVAfBsaV22tkViCLJynTSjGvQqAACtQdBHb6AA7Yn2",
  "key29": "wqB2N4fsZsPZJimv8rT2qHDewmCUpmJaESXLjd9z6FY3iUr3oy59kETPRtkKaBc5oxBVjEZkDrJCrQ7qoSu63nd",
  "key30": "3rgMWeNoBu2otpUvo5GNG5v5peR9L6DiRRpp55k6vzq11usiNGwHSLhak5RAXARLq9JaCoEpvaMnPqSQfycEgNz9",
  "key31": "36hbTvJgdUZXfMm8ekUmUUfpPPPUA4geUeNkEinAa4Zx2DfLP9JXh2aFQ7wYyZQLqeL9CV7uhotARMTtjSFf4DvR",
  "key32": "5h2vdbgPEfjTRUjcBoDH7snu5c9piV9vKW1EZTCDuaSntNJHomcbFSWZsnkt4vMXnsHvs6eEDtWjSZzZhpvyp6yD",
  "key33": "5pN8jGegbaK2TAh78x2gVYgcKVLjVffMD2k9kCtKWzE6SBATr2WkDkadYzca6VDSBLLR13e7Eh1QUQEzAU72QDCY",
  "key34": "4jsVUM1indKNTVQ4bKhN8cy63eiiqYzDXT1n7Lf23ErGQ9YaCbBAXireAqzq8ZuLQ9BoZEvgQDxYrfCJMWHseRqQ",
  "key35": "5W4gfvAG1j7MGXPpUwAUc1R2Kt3Hx3y97YWVqJLZaQgWh5XGzNGuxPwtpW8ZLBbaHFWica8azP4zwAy4R5FsFts7",
  "key36": "3aKriHRfpgiKLC8wzQqMi8QTwxS1x8ZtKZAbTNBJY8XhwSXNxMAQPtU147BXocTjXZQZbF5PmFQRyUjWuBLxdetS",
  "key37": "2epUvL2u3PqroTnMCRM77XrpyyBKFniwNyNsbJVsjEcBnkVpdfgfcR9F5eUTLFAXEte8ysjYC7mLDfhg3uPC2jWG",
  "key38": "2JkEfTZcB3VTqJGXJtX3CJQu3eVCfm1mYc2LiRUs3LfS5iYWGVRTgddvJGCuW2Gk1Re76GbwYB6rDRhXxCBqb6wi",
  "key39": "3iyoTPo9RcggF2qx2nYpo5SSratGBiyFpkAt33qqS9fwm9N2jB1Y4ULis2fr9EN2MEyNuv91R2vXJ25wgQNAqBaV",
  "key40": "2hpgBLPYpAHnCSXKN2N2xqxQvfWnxRY1sdcQtpGPVotmGYRsHyJXgpSXXPLdbMg7TDQYB8KHkYBFT3C71Y3GpSwt",
  "key41": "39uvGq3NrcaJd54hNwQDsA5r29yPDbHwvAn3kEZj9nY1A241dzvpZYk22sMhCBPpgY37nYpbF4aBG8RRMyALK57Z",
  "key42": "2UQEQTF1mBuu55gqFjjZg8JSupQka2jYhUUuqkF8A8xjJLyzaG8C1LhKd6K77Yc7vGHmwvXnduVzgtk79qvPQFPo",
  "key43": "4QQF8DiGVZ4C5GebaGBR7WmxrWxfYUhgoMqUrcDf4c7yM28gMmvSeWBNi7bHbKLmz7PM9vpJ56Er6ze9B5Nww5rU",
  "key44": "4JRhX3KDJX5LTbGmcHmZ4ZB9ycGXhHHkkKtABCNvTt1q829hkSL9Jfiohuw8UwtxsM9pu3pGQ81wgvdrdUBKANpz",
  "key45": "2BSDGRiKP9ApDFmGkSmJcDdaKDhBmUrQsuGWrraxnz112kWKTqVW5aWuC3v9FUKEgNX8Mw6q7Qdyv2J8AuJWZn73"
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
