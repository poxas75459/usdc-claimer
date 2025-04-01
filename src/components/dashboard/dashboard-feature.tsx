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
    "jbsPorkWoZyby7A5HUSg6oGqE9B9f9TTtv7NHDd5xoS8aosCDW2oZCXoECqVNJUcdkmwyJ78mxFw6mSfAP37roL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rh8EGW7SY46EyJbCUWin9B1J4Biszu2rVziVSsRbs1fPk4rYS9ia3WUxqEFeEmpPqktQheNdkZd2NNtyZz9G1y4",
  "key1": "5BD8svJGtZSpgNnwA3Z5N62mfoPdQRVGN5reVrzXq8RwBekwYKWnNGMa3eNTDKqRuuXduNBQ5c35CAaUgZutmkwi",
  "key2": "5obNzGgm84uwjRx2is7p7mGNsksn59oTeRLaheozjz1ksoYmehrq9jtLimKepN5tP5GtoMDWwTbQ1m8Jmy3DKV2w",
  "key3": "2TYbrkG8jFLb3FHQcq5cETisqfVFMXioPcFh6FLovq2eBh6pLYgykMb6v6p9CoyXSC9HQhup2bnDkZogcBeD9TMd",
  "key4": "rXBn3UsmnBPwwtyg7AcsnTMvXYVwJKEW8itrDHR1iJYoFbcCyxz7duiCuHtEFpxwg6dPZ5xPa1nGChjj6Mv5t5L",
  "key5": "5dwuPCKSpsgkbVKNZe9zQ1Bto1WCKMfgLeLmLBmycCdwBU3VEuV6mFcqZ4n4jvBEqcrJ155e5WyNjB2gDHVGjimY",
  "key6": "Xx8f8pYt2NjJfvSUP9unAJtNG4woxs7L8Z1rsynh9hmEZt26BqUuiARZA8grReWJiFKRGjZfmd7V2KBXKzomQnj",
  "key7": "3F3r35uvucSd3RoMFHMVEE5HSfzF1qybihEAPLsDBbvPRFz5To9qLvhAMCZVZNnNDixzjqiwo7ELCLrDPikmTMgr",
  "key8": "QEG2jojVjPQHknrcsxXkEc1wwTEmQHQz4avtMJ3YWAvhr6Epmu8pGHpGne44sHv6RbgBwAVRy62rmXsireFkkkg",
  "key9": "3F6sdTLJVShkKte99px1W6dQ6jYG7FaLS94NretkeAefj27WeX89wC3bfXW4kq1DtDh5j46LoBXPojerXXnL8fnH",
  "key10": "4AnZdRQjk8nGJUnXY8wYHW83gTkYVwJcYgRD3DaJeiw91yb6p9vhBFGBtBFqpmBdSht3F15Ae77R2szjGck487k9",
  "key11": "2ewfFtFRtAsutC2McJXTwSzYJ2kwu866g63A6NySGucYRhAEQpKeoqXJTWcqmEbdVopdLAZ4bVbChrSyspRLUAMX",
  "key12": "5umTYpxxbMhJS8eYAk4k37EmQHnLXbPhgamzm362C4MBrdfkVpdWMZ7XgZrtLpyb5ofyhtYJCXi9kh9YjCp6u8hh",
  "key13": "2Vk1vz3Saxg9kcuqm8T2Mck8rroBTQrW1671PdYfi7SqAJ2hG7eNYH9VZR4TEx24nEaEiEos4B6LmSE8oCRp6LfR",
  "key14": "5DvnGd7QgiZzCD6EnEH3jBZ4PJgH9QuT13F3f3ZAefZV1WQgVWGCSbykWPX8yTEeo7CVN6WWqyZ2c9crm7x11r39",
  "key15": "473sQf9PqTp2EjHLuoRMRU96f3UcwtAJp4oFG5j1oy6uouexeSDDnGiARXpHK6qiWyXK2jxHK4TbUUvuodNdJxg6",
  "key16": "5zDmrJPCSqvds37Ri9ozJ4nX6RnkVEKG494TooCSQTbQ4E4Xe9suJSqjT5gsUzs7udwa9h65sPjSceq85KH3yuPS",
  "key17": "2gCp6iyUEP9YouaqfkX77YtyA3zdvb1B6cd6RCkXiRD5Zrt5fEWS65K3S7hLqAt5ydFuePYLwpbWTF1dayVpy4C",
  "key18": "3GjMEdxZvL9gu7shH9oBtXpPedFDauRs3xDXiVydz2tnmGorU8SAirbQJ1bBbYAWatoyRtQNJXL87atKPKrQxtf5",
  "key19": "2qhi1Qfra3DAjfX5hYFgbv1SuVwVNaGZiqJZUM6cxuqHSdmXfLLNd33fitG8tT7FdUCuwVkr3Syheh9v2rQT3zyp",
  "key20": "5WgrCUc3A9XqHHmdhaHU6GG9Wy74QVHXkNMseUPf6oXCZCkERAzhN3GucbY98DZ6KdkYKcziZ1uM6W5fkJ2DxNyW",
  "key21": "4yx4BQ36bHBfBXPZzGb2J6HWghTHpajrFmkEfrieZjW7DZ9SuQZZUZoQuNfMVNWSHZHWbdL36XT4MU9pa7ww2TqQ",
  "key22": "5GSVZUGFMSYL1c8S4tRz61hzx34uEKzwFnpEpMzHuKfCCX26URuEqqkSYWLvjUwTHzBMb2Xc2dhxEq1ryVqog97S",
  "key23": "2Gy9kNBE85choyA7hoEcq2tPkXivbvcKYk9JGwk9ZH7TAJ3kRXocmJwqZefHYNHh7dFmrPKBcjGt6JrAjwiYSfHG",
  "key24": "2DqrCzQbroZM65RiNkgdY1zJQ6LoxgXx9w9nKCwNF9xmMsV2QWwBURi2RXTfUqGfCqW7vEsyPtPyb69cVg8HZnvp",
  "key25": "5qDcxc99xUvy4i6Lf8fhvH2aZiy23iY3UvgYkFocZprPgxTsfVxATntvjwgww85gixPD9Mg5mdCC4FdUcZcPLCZB",
  "key26": "26j51uHoaPAEcJt31Hw1EdLpAVYwQhjWPSGKrph4oSC5ictafXQtJiVwodzFsfpfeTcv6YAKzx4fwodwodFC71g9",
  "key27": "25XXW4tie3SxfE3kGZGxWea1XmYx7AETQiMQ9395qPZJZAGbEGXKf5uXTcJB6MVoGYHzFLeHu9iVsBDSd89sp5K8",
  "key28": "hWk9B8r95Wqi7HNBKaHnDRikVe9cqDBVyKBf79P1nicTPwj4MW9pK5tRLLTwQfXk8ZL8KVhQpidRdR4TM23a3Q1",
  "key29": "4VD55aYZ9dJndf459Gp3X2f6oG6idu34C9UM2AA5UsnwUJaRvQZZUnPpjtTkxm3HYycSUMYdoVdksbPm9Ji1duaj",
  "key30": "5yfWkXu2HYpg59yj3iPb9wDfVVhnVBGoVVWCCC8sgt7WjRomExK9BFzVYxHyp1fp5jbrVYzPBJGchfemEfGaBAed",
  "key31": "LpT1pwg3jPvWFYbG22QAvmUL12aKsJF1gDYYGehK7GxnrHYAkiGfAFWsuWujHEx6nL9Skrs7NhGiDLt8qsmRcwB",
  "key32": "9kNBfb6QHewkXgwffx1S8r2QfGu1JKKQrtciBfFqr2C4breaPFue9Y2VURjRBsEwVg1r792antrGu9o2U9k6JwG",
  "key33": "SmZQi9d7eyYkHkcR2xy2EERtrWAxot3i1DBGBxZuRFCV8LeECykYQ6V2Xk6wVgJDFD4TZiDR6oVPaLdWLo1NjHr",
  "key34": "58pfsAr4so5Q1rogJqC2oTn1FzDVCEHoeBAC8L3yvNkbnG8m4cBe1y1vGi9afFcFmfGLwMZt3fdYh6KVti1ds9Zx",
  "key35": "3XcLtYLLrdmaxARzzMdJ832EiWP5dmBAucigwcLV3D413QSvPnZnChS4kNapEwishUwo1kJ9aMgQCYHmBvQmPxxp"
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
