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
    "2tczwf6YnCFy3kG4cZU4ujaPD1RKak4SSwG5b2hHMs1qGRGM2EXba1wJwRyEY6jJVmk8NnnZJt7yztb2mR2fwwAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XiqWUgXqJ3Jpz9fTSgfFAoRFbtbvsbR3NveLJDqsixaRoRwUcvJbqkPr6VoufsdENDykhuCNKnsqgSfn93dkiBh",
  "key1": "4uwMjBK9a9XCCijny9bvp4FiQPFp3ZBgkXS4Rx7z18jN1AQiakgUFyzVRiGKL1icLCWRU9JMBS6cfkxe1QU219iX",
  "key2": "3Q7yeRsoArpT7CT3q9sXfmzkZKuRtDgAN6WNoikNBu3tdcXmUjgdE4sGhByrkdwpimEzcjSdG3WvPapLbCk8Dd4W",
  "key3": "5t3XW3MenoX6z92re5HQSZ72vLkwyPVpbMdEdT1AFwPdC2yBkfFrwdLTx2qXf5p8Fe9yMeAPes2VwHu2symUCBXZ",
  "key4": "jfP4Tf6Z9WAUfw4fwAdpunjH1MaEp79TqfAoPkGkvSxCAcouTkHmPu95o6ALMiFfXySrhfvXvvZp9komM7Fr1yi",
  "key5": "2hXmjnLsAbGSZ9owzi3SXLTGzoovtXA8BazzpRdwradgVx98SD3PR7Z9A36fPGz6ppMDrBERtGHw4aci8nsvp77y",
  "key6": "GCUYudTZt2TURxjyHDrWjaNpEGZmDYTTBpzvfSExvBrhHxuakCjYHXFaqh4NdnvZ9QXpWYgjVPN9fYCexf7hwAm",
  "key7": "2QSd4hRT9bkuV3jUeLLEzjUqGTtYkFz5sWeUoAzTcFccEpjgcNH5fxfX8i3RaVyZxcsC7XSsN92Gzp4ytB52QnBE",
  "key8": "N29N6uDkGGLC5VaoZVdms6iwrFEQskRhV7ULq9bzLDwaheYyBFNhpK3o25SC43CaE6nBDWmLzv6xLswhqMTSUee",
  "key9": "VyYAnHqsNTb3BUaUeNJpdnQu7PR2ZfpvzttEP4KkedLzL3D2BWmLvib1vZFsucDNmNu38EK3yAtHfQ41bzCjqWK",
  "key10": "4YK89qoNNzo3gjVvbAUv1zS1mkFKZUp8z6kQUCco5VdrxqqkGuHMfA3LR3Pakg8XCrjFcZ4LyAAkSoxGGWNChnaG",
  "key11": "38WcXAECepkWqQPiQoGS1VJCg23es37WUfKtkdXo4GoQSALUj9f3SL1p8YoAKEkuMmhwSLa8XUf5ZekJ446PPjbV",
  "key12": "XrAhzbWDnsTDtJnqxqz87C3iitA8Dpi62uHDmnF6E1WDv7RZLV3yotwcTKW4HYTz2aAqaC6rzwnTgZsXWBwDS5U",
  "key13": "4dNPZpHhiNGaUrwPs1hZi6XyfNQP3jBjoLiV4xCc5tr24tSTSYuQwEQQ865YrK7zBUUSLCz6LVdr6RQUA18joQga",
  "key14": "496b5s5ABx6VdeN4AjEvsqcPmeXyWxsDesfXPGWRS39bxF8KdfYpndoWnxw2CDoEkXCr6Wqwyr2UFsEnquKXemrv",
  "key15": "SDCCHz8YRCuwu2aEWe4cR9EPcFBDXqg9ZET6maDPQ3iZZBL33w79J2S6rQ9aRZZ5i5jTCwu53zxfn98mEjged3v",
  "key16": "47nD9Aga7Qy2KyEh1JvSd3aaSuGmDbZYFmkRiVMvyzsyMgYiNYRnBS1ukef7TU2QuXF84MWnA65B1YuZexeJWidR",
  "key17": "4jrWshFNwih6QGAJxUjLSkoNUS3J9z8e3GYR3uW8Eiayir9t8sNDUK551novoN31hgBxQAu1qW7zffhjkm6ny5m",
  "key18": "61GWx66fQxaKt4JtTxztj4jcXGdgyfcJWs1YBvaoc8ryUjnWbvLXZ2vo5LECgHxyG7r1aU71opxZ1Tvf5i35nigH",
  "key19": "3pcwgMqRqvSVmNSixk2d1MoeHzBQahgtyF8QGWDTcbMBu3NcWcMyD5TExUS9RgbE4VYUa12QyMgGcyYy6uzXcgLp",
  "key20": "5DDnwT8ApbuJSvSqxjaAceAX1Jtihn84cjJPciYde86GMay7pKyYjW4iuAe644Rs26QX46LrG1bMx6HUjdSP1kFp",
  "key21": "4KY2gi77tBunkAU9DFWqsSRmbuY7FeDXwoJBSDwTJQprVWKFjbAp3e1hdoC4eUMom4syx7hdLwzNzE68QisbkAGf",
  "key22": "AZubiGeuAZLrsEysbmUbkRraB38EJkbmQ82A2h5j16T2zBnjzK3Ea9GNp8gN5SVf1KiGvk7UkaSWJWoYM9SonJT",
  "key23": "cmiehfN3EuS2x7e4mCvJUVYBDJoyTJmnzGNV7NEGoNr925HydV2FVaXVsMzowZ5PdQe821V2ThpLShj8UMSRwpE",
  "key24": "5egByTwTx6eqYSm3Uxdi2z8FkYAAGgrJNUdkPFpxs4S5R55W5LZRwpvUDA7cXZArHvaz1dBCKjtm2og8zkL3AGne",
  "key25": "5tZU97RuszWb8U9j7wqSDYJ9GvSjs7NYoy6NMfK4h5PvCfCo1Yo8Jj5ogLs21dTBy2SfEbmMxKGLUwHLpHEv9vBe",
  "key26": "2yFUadVmV9JjgZHgngeTrn11cxWzponx8qzD9dYbzy17adrrExBAPcvkEGdyZcJwjJd3j3y13cenMxy6XSZ9N8VS",
  "key27": "wJUst2eXU7NyL2gvFzh3NbXQ74th6dckHuLsLF6y9Xc4Sk8a62fd6AxfdJiMfNdFq8m24ojaBCPgB6VpQzsooN8",
  "key28": "2k5Pt9MdCRr6tR5XKMzz8NHfvHFR3VxEUY1HbGeUzNrkBxkNGPBRyU6iVDYXFcUrBoANeDz2TNTHM9P1QdebKMAN"
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
