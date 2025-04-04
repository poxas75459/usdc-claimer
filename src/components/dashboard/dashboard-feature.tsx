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
    "KaWWHYhpcXJpwaMFBvPvame4hgHw4CMQpywsBebmi4CkgvwVZxE8CwVvi5d3MwvpicHad8bR94jTfyG7jVVnqoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tACsLY3wA5EkHJKoQnsizVtGkvRQhk49GTQZSTeDieytzRre3k2NYcXc8SZzkzVMxDqvvbgoCMnrK5ZVAJGpDrA",
  "key1": "5vq4NC8ewoEJew2Rkw3c2RGUfucKxpcJ2N5fZpTR6r2yvgAq3FYvPjXNWXD4SxyMDN7TGnNtBqDUEzC8nJP5LWh",
  "key2": "M9N7ucYDiwq2WJQSguibKBZKWxDSdH5epMByFgXifpXYekdetXV4kuTKmnn9cAF3MMidSaBxgoD21hG6uqvWzZt",
  "key3": "2qF8WSY4gcDEVzhvHhamAS7E7RKFmDKU7at6EKNdQDBhaUf26U92aj8SFbBo5RjGrgDtJAnZUxFcAxxwmXbjLFEf",
  "key4": "a8HmuevnsqirsmSvpfF418pwEBJ9iR4jzpdgn39QubUvAeinkahRetbajfFMpJiGeHFvGSat2teERUwKsBMbadd",
  "key5": "5oiDkDsHW8GBZpmLEwyYz6aiMPnCsoHZyth5xXhqAAUXKPZY2Q4UVEYLthtDzbSt1TpSrsJNReTvGRFkCsFuyvSG",
  "key6": "44ZjUUpYte3ShkZHVY7AWkyRG6FA76EKiFr6aSWg3iEBdtoXrFFFxiUL486AWU2FDsafvZuv25mUo4YDNsU4kMUP",
  "key7": "78dzLg7wxJnNt72jHGc3Xfz7mTi9YTPDjkyufk5a9B1oy5VC7JuADxWaGL91BJwyy4UfbxjgDV5jTTBsPoZRRRT",
  "key8": "3tz5rpSE6FCDudSrTJ9hS4d5Apjhxay2tLYVaPB64z34fJAmMUdE7F6hoxmMrE2cRapb9SffZfSt3px7cVtbzBV6",
  "key9": "3xHm3XT3LNV8mQbNqxDuumbxeVtZQzTEUEphfky1z14499P4vXZdRconwwQL2Uoshozn8ckQzFYMsgwv5j4g1Drx",
  "key10": "4LnPLRfNPp8WKqi5NKAJmcB8K3Uim4Z1J5vrrRBxsWm56EzR3t2G9dPfLrhVvu1e7kcnnisZjtkg3CH5tfWqqjir",
  "key11": "49WAHs9udLFkUSNbqVzJususqBmFUBPUNGBBK1BaRRsQhtQakVbyPVzvCVRQ3H2Kf2rzfmc4LsLS8MT9nSzZ9NRS",
  "key12": "66byCJoNHS62dbZM5UgPCXHCNqXKGEHaZCwHq5bFUz8XSVDTeabz85yWi6qV17JukCGm182Ut7JDD9G273bcCNou",
  "key13": "2AW38F2sRZcsmXnsARKEMwNDvogAPb1S46uzLwusgvTofZiRXstYTg3K1GoVPLoQnx4WZDtCcKuq3J6ysEaMbk2x",
  "key14": "2BNLkTbLyGw9tfmyfRYFB7TQpeZWsREbH1tAbW6Ky87AxVMm8nzHfHd3PJQbzkvz5BScJtRRXgfzy8vZLk7ypGs",
  "key15": "4B5AGs93KzGRP58naqCyiNgmkAjTNvqVgnB1g2KJ9cQkackDnpFcWWUURqReZbjcvibtyF8aCsvwn1a2thXYiEMw",
  "key16": "3AXhyWSMSU27aRxos2wrtRtQHrbsCVAaL7CNBCbfNqK6UeaG94TpawyftRBcKt55ELDNoUdC4iCjx776BvjJEuQX",
  "key17": "24xfY7WZ2ayXXD3MRFWsJm5Y4cfSv7Gre2yPUKeQt58VA9gVH4Yx4aFx61T148YT1cQP4XF7s5sgAUZERD5trCMJ",
  "key18": "dvUaqr7jasiQvEWBUkPivCywAHcQ1NaWkCKtw3bB1tLaVHRJbJFk3B57FqjQ4dCPaKzKZ21sSCEYjGtf1Df1o65",
  "key19": "2rgcMS8SAC8wQtmDUBmwpeC2nB47GRny7pm5why6aRUL6dsFY71rFfGojCiRpHegvBmPd3ATU3waFXnQZLiNLz7x",
  "key20": "3byTZW5EYTAvtcP4nNfwuS9sU7c7gXiJdNRgvqzMPN4bW9GjQvH47ee89E5HEuEf6SnezXLUdG29QpwtL2qJHvBE",
  "key21": "4fKsSyLdK9NZNi7rU3iiYpii2SVWMH7mrmrs33ttkyn5uh8UyTui3CoVX7kgTeQ26tP73KZiGxW2fPdTHAoKTEG5",
  "key22": "5d6zGgJDHRowYCR7HCLf9afZWWDtGRfeUcNbqHZa3p7XVSGvqcGb54RKSQL4zUwjL8JXqjkax6jGziTWXCWTyqJu",
  "key23": "2Xd1dQrMMEsqDQ82nhGXtEPUo5xTzbc2sBsNgbAaPkNyd7USXi3kVBa8MUMkh4QHnc8d5GSjpXLUsrNm2w5wWjAZ",
  "key24": "4gZa213p919w5L7mNQwcDwbSMLiHxbiZ5E1Nge6CxiLPNLBJyavoipVtbm9JvNtoVLxbtBdXbEzHewiT2T6iJMsK",
  "key25": "2UHZcyheBg55oYbGrN1tELZo2xUKSHqzPT84pdqwWdx8QSbnu4jkvSZTzTVRzZRKDZ63j7bsjCrivntAqFKnwNre",
  "key26": "oaoGc68Lhqz75Gdm36AxBFbUVLKXQKok2atsvm1RH1gvxicSUQ4arMv3iXd9jm4iraH7Q1v4K86775sJcmGEUsA",
  "key27": "34jUAnhZYCSx2uyEaKYTiH1p5WPNTmaicuj8ivcreUE8fzT8FdDa2XRjDceKyBXzmydk4YBX7PSWqXEe8d1TghL9",
  "key28": "5y9LvMVEh9pSjQFmuhnFQTUovm5K3X3o8xFx1CoKoiU4q7LEakrqmpExkvJVCkHDumkCA2jrRLwpLBQ4MoQ7Spw7"
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
