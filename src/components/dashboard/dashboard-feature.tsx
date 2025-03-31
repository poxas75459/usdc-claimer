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
    "2Gffv7oKREEFk8f39Es9gy7JDXG8HCcK5PyR2NAnPwczUFcX1uKmmxgERscqYVToat1hVDqSdjrrZuYwvsbJktsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CcBkDsU9Ro32wNoSRZNKoQHjbie7kDuJewub1Fn4eTnvMrcKPrZFfKfoRjrGJFjCjADJaATm1cMPq2gQrgbLzhh",
  "key1": "4sLz2Dg5z6r6QwFuDnny6WgVdLbZsRoafxZJ3RoFUvhYouMbCovbsPq7oEwn6WWtnJkLUCDnfzShGkHuEFDDX4mr",
  "key2": "3dqjwtb6aFTgoLZh6g21t2RicPo5UMdbBFML3G8v5X6re4HDsoTteJ45FuGQhcKujrQNar58jNteMCyTSURXXpkQ",
  "key3": "32AQA4SMNj7k9gLevggmp4vbnCm5agZbvLsGY1e78sXKRi3VtMPJJLSujqSBRz9zModEHCbGzYtA3Y98ats6HXYT",
  "key4": "3NQBXopeeDcYDZsVPhDcFxQRKbXZXpRCxWuRUENHxBBLcVvYWEjdhV2d84MEck3VWZ1zWMQ4xmK8WVL2B5aZ5pQm",
  "key5": "KdYcFnzmZN1bcqUEmxSJKePtrmxRf2GamBhtksjjJFAFWYXhhaxXAPX5ErYNPGpo5YiBFqPex9pTruVQ3eLppD1",
  "key6": "DMcRznEW2qH6A3jwEWM25yXQDGeKvEQfzvcXQk4FPELrsDqqfaUgBBkS71MyNXjgQwt2d5mHGWmTKHwPpoyx6LD",
  "key7": "kZEpprRPUT8uS5icHXSJxsdnbqiR52qjXitdaFeLk9ii3P14fTc1VYJaQmB3WRukNBH8UmtCkbJqPFnrt9JqBFD",
  "key8": "3oMn24XLAsbHCiuxC4PH7xdVPV87rXtdi3D5YagQGc68VsRTESSLNsM6Aj9ZnvPUuyVc4yAgQRkBw7B8aEZqQxX3",
  "key9": "4x63gaRFdxkPH59PAfaMMDuEuTpEZ9a1jvWVdEbR1wQq7WhVB6JgKgzABstGjhuYkyYUxsCTj1ZU9Facyxw9Z3s9",
  "key10": "Tc7PoczrbNY4jPiYz3gcS9yUGi3Lh9hWbw9nzuNRmLPAseGDwywHFNgAQSZjizuwHM25BEuTq56wgCj1P8PCA5S",
  "key11": "2U5nEnJ4xtdrtNrM5Gw7JmSW8me9VEfNizVqooAVcx8VD9zmNdDDnNiHsWd2bXiQXxghf5fv8o1eupgtSwegjqpE",
  "key12": "3NfLUbNzsi2UERFg5QBXoWDyApnjJNrcouXeTyDf4KkVznZkVpYJobqENxWCReX3WbDTnK7Y1vvbQkduiJ2S31vU",
  "key13": "29LxeGMhFCcjM12VCLiwacT4pgBBcbmLgHfNWMTdmCntFsGupp9zgBRmSqjpHRi2Bt6mTAA5bAz13MQNnXJLaiRj",
  "key14": "2mNgvNUb1xZGqxJnSDdMs1nMPQhk3vHy37S1TpFdvfHfgJarj4XghHBegFDZE7DT4BSqyDwKAf9BeBRMssPA8muC",
  "key15": "56q2wM6weWHxoNUR6WaXWiZEmVK7AeVMENwQsBDmJmoPYpJXefn3PvwRnHXKgnCMtQmSDiJhdtTGnCbC4eFRutF9",
  "key16": "3RQwKooQ6fN5wLiRYLz94sGsLpXDw4oGdTE2nKtrymYJBpaWAD3xHtYCpdHwc1ZeaDjRstKgnX9v9gdNK1NyK9ug",
  "key17": "2oPeXipCkwUuRUBZuFygKdFdk87e61CEg2uQSvxDf9DiTnUt6PT7UpcJjZidFeZ72mA1dAbXNhcchtUPNDeQgdG9",
  "key18": "49YFWM75DSXNB8ADkXdZKLD3sxKUu3Ve3aR4NqyoY91XxbK6JXXSdRnLVCcmu5zL4hdwE4YT6TjVGp6aTnTywtj5",
  "key19": "59LGGppGvUfUHt5oYY3b4bsDd9zQx9ZeQbWKYFkQSb6v93mkEQ2zM26mchzHSMVD2yd79YfFTnjneNp6Qjut63wi",
  "key20": "4r6rSy9EbdGtxbpS7ptvQJgePK4yw2rL45eDyv4ZgR1rguDZvh4pvvtC1GkbsPTrNr8QrHPte7ZrYF5YYL9y6BKg",
  "key21": "3iufnspwrRifZKTZQ4ix8aLKdQFHQCjZPCfg1kRe1Rpi2NU8w9Ld8kSyexgcsrckhvZ3g3DgMWadqQ3qHTbTag5Y",
  "key22": "5xsXnchwWdi3DZJdcgDrHEkFWn4PKZLvtzbYjXBZWaK96BrvMpSpUqw1eihweggoLgMExaEynE9PK6kf7VyNnxAL",
  "key23": "R4UD27xH58C3G7S1PRk6VWaUFxTw7XXNSLUBvbqJNH3yHohotPQHKTZBTjPY5ugWzy1a3eU6rU8tv8oZQ6ifd9Q",
  "key24": "6dpoNxqTVxuhJp3CZZ9B9m7b1Fh5u5zDiYFbXLrRQpKTzqWvqKC4axPdHcYiLNxePzVcXztVRr3999dmx3u5TKo",
  "key25": "2SxSddvajneii59VYQA7ruZAdqJPCoaeU2Fo8RcoANExYJwLYH2agmbtNE8XWASqXGTPSQgwJPVhTawxYatKo4Y4",
  "key26": "gh5GTSnLQEaqQPsEgUgFe7mbLmLmhe7igA9vWTDDpKfeYAxPys6nfThyy87p3ho79umbqvMiAcdm2VBcKe5hrHb",
  "key27": "LGtP55Zp2UZqtf5qfFuf1yupsRs26r6DvbHHzLpg594iTetRV325jpP2Cy3tEzpXLftX9x1sBJBofPmRg1cLKAY",
  "key28": "4QYczXvFgFjPbAk2MU5LvAiwSMirZo8GZ2R6Mwd2Yhkjk9aW3ESxXtSDin5gmhKPPhet4gaeBbcLte5fYXFTncMz",
  "key29": "2NUfaNioWtjXNgSCkmG6JyGSn5ziYoQ2j9CNSGLgTVezsfkjUu4MTmmmofao4XVR6n6LXNcTpKCGzpZW5FbecwKa"
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
