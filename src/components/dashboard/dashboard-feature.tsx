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
    "2W4xeHQJefDYNanYjZ4QXFRj7vn6FhyXx2vVe7VDvsDYW3Fa8pym6wToHBrvdv6bhdQsPVcTvaiQsEFB8oGsedwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SGVUyMXrNiBeDYcQPdiitRQfvcYJxHYyyLr17GoJtQEvDPNum2E6VBpBXGeTR2qvJrkdPPw9SFpmB6aJw1xB6xb",
  "key1": "2G5DfJmvWCaChk6tfBzkESo69irtbLfAM5tEDXV4JWnM6k9GsitccwuV6qEW8iSGdLkHx3gAzRsXpXo6LQrS8Jpw",
  "key2": "4v2M5JYZC6RnY4CKv47kARJrR1PR1Yr8dYiErFQEpjm46hNoPuVNBw4Fu38dcdc2j3ofQSV7G2ykfo9AMsAGXb14",
  "key3": "PZ25Mv96ZLDDRftkUznTVtrdBtDjNJoGERh6UioBH6aHkwqzz6GHQZzeFdMZqAoWE51FM7U9AJoPNZxjVoPPUNZ",
  "key4": "2hGRyUi8UiUfmmLW6HjTjgWZ9umpU6rocfcJJcTDDGthJdys4Ru8v612sce1KMKoLrFFL6RCVpSfZhSRQCv7xwaN",
  "key5": "223CvekJHLrPqiEF2F29mPMzDirXdCjZ1vaTcxTNzffeHfDfSCmD6n19w7aN4YnbN6XkwYJesk9yFXQPXpVsz85C",
  "key6": "3RGMbE2wAPKiSngeZcHVEYwyZejWAp6SuLARS8jzZVPwesUosekuqTGJpXDj2Qa1QGsDBdWzQ8Udck3Y24zdqN5F",
  "key7": "36soxrS3Y9znRbFXKpagrozpVL8WkL87FnxDAuXabeMZ9BwE6Za2v5qLy8SpqVRjFMgxKwWdergCwfHsVQiFakBA",
  "key8": "3Mmobkp682Nferf2KrveHKLGThSuU3ud5har5TY14jMiKLx6QcJatcYqu5UGtrCYfkMWDjXuobseskbthxQMUD5N",
  "key9": "52R2bFeC44YVaptZzTbbqvYyBvrnFQE3AyW9xmZKsBNBk4sFJrhi791R5NqWzXmcmg5HvDCiS4M58wSLhKKTuqaG",
  "key10": "5CE4G6nKf4mEC3Mqv4evYBQh4TSMvJswdZotjYNhCkLb4it3CVaKb5iyC9G9EBSp5GJgNL8NPCYU998vbAp2P32q",
  "key11": "3GoBbWsfZWgrvGfJaPEdL41ZbnmqHGcio52TddCAzLWZxMGawTiKi62iiUmYHEKaEWJiVMJp4spD5tG55M1g5Uxm",
  "key12": "3JpyHNGd5TeyeGQYmiV74tqfyU7kcJqFRQ6gBzkm2dXdqyf8ZZXLC4KikiJrHiy15PQKgxZLU47LPoZr132k7DZK",
  "key13": "3n1dcFbUgTHunkW579rN9qk4dDf6LBqLHhe2NeUT7CqHR9F5cE3zgKnujgUufJFgCsoWRGvdkuGcrXNmHPvkz3wp",
  "key14": "5sKuGUyLR2Z77HTz6fAXrcLZbVcA3K8Ur3QodPteAHVYiMetifq3zNaUFz2yCoPiLL6emkYMfAW2TTbV3B1ag29C",
  "key15": "u3SeapY1pNYDMSzntVnAWTSh2xDY115AYWsqgdt1zNDLUVDscdF5rsktvsvevSe5EoLPoiLRprEAVnprDTH5h6x",
  "key16": "3UjHmPTVfHXVzMsp8ZG2GUZybfZM9Dbu5H6xeJUUnuHBLSckj1VqviGRfMjCey715i4qMgF2tLRi8ffQdjGub56i",
  "key17": "GWjGNXUvP6PZwWfyp6PLJmBxFGYX6yrSeUUWMXKdvz9yHQFDK41iXEKrWK95o7doVdmCNd9z4M8jEbJfgW1o3YS",
  "key18": "dWnrqkyatUWJjdRJZWKWbox9Fkjw6cqa5KsumuC4rfPqdfKMGmh5Kb6qxEMNi93gSdG1PnAyJM7CxpHSWXCG4KU",
  "key19": "5JHB91LzXqYS9RrFVxWaEpbmKeFTHGneJvDiURcY1h86Q8BmNHPVSo7GugQCyasHxbcYezTdxF6Tqrdrs2Q4U9pH",
  "key20": "5jEuhkkpBeZN8tW3Ftq9jrWWvQ2KL19dLHVxXHbuwM86mCwp1ZeKg7a4dJaTKEE8cju1pJ3MGNq5NM5BVd1TfAyr",
  "key21": "5y1BmEC1f5NFMDz4ern92XmB2SVGfeaerj4ZM2HkRv2q8dG5FKeufje2aD1Kj7Hsdaf7T2rVe17Wi251hsULR6qi",
  "key22": "4UJT9pj4qRkSBiejfwaLh5V5wL5DTRtzqPcMfjJeBM6WcHABQLYmsRCuFcDspJVKia6KJjf5qav8ko7wfGvr9XA7",
  "key23": "2sgKv2h4cPFDuzdocFjvUMoospgbBzwvYwa2Fu9S8jhRkytGzbu7GWF4Ts1cv195UVseiS2BqXLbrH1oDN9fi5Bt",
  "key24": "5NMxL47SFD59UTtiWd7Uj5HxbyWx5Amhff9SfZPivFYSDbCVPFhbERqbeNgzn5nq8fDTSYawKLsHmZ4sHYk95ebC",
  "key25": "4hyvTzceMXWgiGd8wqUVobBreYVJ1iLCJsHbMNgwk7xLgU9zbHfPWri44N98cBZn6LhgfZWMwLYNkaERarqXS5Pz",
  "key26": "2tJEtvfbUBP5nNrruwMTuqcTKUaH6dbgAGuTZE9H33J4AG8EVDZRYsiVfi5BHFkgJh7A54dmHpTfkCQyCEJkVcGQ",
  "key27": "5TPFqTn9dUcm83WwARnacSbgkTJMz8vTVzRXXrwSkZexRQWYsTZtFimUMcD9FsEKTfnYAqNdPan24kSY9adwwAfT",
  "key28": "5EMuJvkzQ94TJnpchkJ3zzhFESGQKaGjTH6LdwrFKChk4cKGLKPdB35sxHWn2iYH7uyaS7vvSx9owMcoKGvo5yYw",
  "key29": "4S2A1Y7oz4yMzxcb2mHpnJcQf61Fp6s9A5n1DNRMxn1Q8rw4hZeFA5sKfoHYj2XDXt7dZRk1wdHsm7azDABBCJSn",
  "key30": "W6t6xA5iAgW68TZV8cSGoJgtEKX6ApChxcRoc1whtACsAUjziC752gXYBf5jNKRDhM6qSr2fhWx6tVAm5XjpZrE",
  "key31": "3CUesPiUQkNdNr2ijbNCCQAAWSsRo26FLXoXXhq7zQPa6E3gFM5K4cGz3haZ7QQwMNM2JZd48oViMAzNpGNteAPT",
  "key32": "zgBQp7DJ9VRbdoKjqeLuM9hiVhLgmhanF2ehUWeFambpXEurVCuE2KZ2mGPJL1AmMc6DgfneRSjpRhiTji9hNic",
  "key33": "3kzc53PqswdMaXm5Y24rCx6SZevnBxYLBt47moqo2zXRsPBb6WKW129jgHSYCF7yfTWYu2f3nyWfT2qr6kXazfz2",
  "key34": "31USkqphfKxUpZkzVBXhg8jLP2RDYKp99DzPmAfNM6jhrTJPHpvQ7bAtvkMr3wxsGUQUnrnpFgLJiDjvw2Wytvne",
  "key35": "51c9PFKmvHcjTVtyZaXZeAGCQ2tP2voPmnrMVbLqZnh9HTQ5DMFPgWgu4kVfGSBGyFojAXQYHtQvXSKatc4d2QHm",
  "key36": "2kB21Zm4RJjjAytydfNqmnFWGxUXSF95oH76nAC7Jj2eR9kn4EbuAutEV4ZjDCG9GL44ASs6L4PP8o19AGEW2Hfe",
  "key37": "4Radn6AFGN3Zy22U2A63CQZfLXt9YDoHkQq52xK3skv7eBR1Ph4xJir8UWrLaLH611Uhy4YNCzb9mg36svAxGFws",
  "key38": "2i8FkypmZmEYbxbeS4bCpAjY4ceMSTXNxJiRyADsLQ32TW7i2F2JXNRLAK7qY8bQFwNjdtmgWgRMDLQT2apKYd2C",
  "key39": "PVeoRo2X2DzLQgWRf6AHh6XXzwJA1rQwpumFD7XtvjXku37xPzDSQb3Y5Ux8YdAepgutNFHApXB21KMpFhWNt7i",
  "key40": "2Pu5S6Ztr6YUPfoo44sTANZxE1LjfzTHVgVt3AkUepnzkPWpsXSdpaSYjt6nqGkc1TbH63fBJLUBEDkVWr3QpMAA",
  "key41": "3eaLGp3buXTN8P2m4bDtDTo6NSCND1EV3ohNhZQfwzDPAAiipeJiPExb9A8zw5FPRShpzrCssnC2CCXggTsP4tAr",
  "key42": "2bPx1e4AyyzDqiAcHyxoHYF2MoNCU4UFe83ko5FXhWqKtQRPpUgG3dXTy9dKbh3npwHpM8CGZ6CrM8WF99RXX2JE",
  "key43": "3BYK9jyfehbrCwHojZgg4kvQui77V8gj81yjFtxZ8iqwyhVsRc9cZzG3ZbtXJ7Jnw9eYunZEjAUgovr8v5g1s6nc",
  "key44": "2QR93g6f62pJ8jQ7enNrKSurPcLtXrmU7ExvKCeRAMVdj3x4qoShZJYpza8p1n1RnJ9FyKpLAb8WLAsQtiMGU949",
  "key45": "3t5bS1x5vX7KWo4wsZ9kvQqaqkZQy5Gq8qgPqyMEw3SBX4kvxXAPyrbvfYdH2cC4sZTuwyZ4DiBFsy1nN5mdePef",
  "key46": "2izbzpZDRaxsVxfpx7U62TBbV6ZwgURaFwE1YhwUdLgpLwGXUv4jJ4dk3Tv1RpKfF5cDLteiS88eig6k9cETZmeD"
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
