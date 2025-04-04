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
    "5f2c8wMXtza9ryeqHhjViz88WMUVQaB9bJKzu6UBxE7h8r4zbHTZB86VUCLdLKKJi61G58w7hNVyzFLxczqiajk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5haQn67gNZYPMrDG9npQk6QTGLRniXGbxZC3XYpbrMvJrPHSUDMny1V7rL9ZBFwYak1uJ6nrq3mx4soYwizbmzXq",
  "key1": "SbsAYyt71V3PpTcvJHn3RQd9xcCoh4rUYoHR73iRtkmqcNbDcgdc1suio12KY1jmjqX7kx4G1rQBqKfnksPdgxP",
  "key2": "2petGYid8KFEifZBZRJ6w4PBgjeQyj7jAP2yLnVDtrk15Jau3Y8r35tBqherojPEXp915LSjwsnhH1hzKFyqDifA",
  "key3": "5H5nM8s8NZNstvwL64uyghNkFFbLs38kYdAdv8kZYULGWMJHWS3vsiPRtyoZvSXLeKZrh5tkc46MWeY7hHhApxk2",
  "key4": "bxyjjsL49ft2nuWcccn6U2aobTWBPthRfdd6cMsFYboQYzQ3EejAcN1RnV12kfxhqTsSMSSvg8nk1r31GS49U2C",
  "key5": "3MbwDXLY92b11VRbDRXdgBVYDgzWunPw8dqAggf5kQ9NbTCG6DtUGxmsQHhufnKbUA9bMKjQhiEbpTNNkNzt7h1S",
  "key6": "3c2atVfu7WW434dLQH11LSRSoFFN3box6i4eKMa4asUYJ43CR612pdvu1qzoiazMj2b4kovnPmKfavpoV6dT9cFS",
  "key7": "3qGyDBsGtj8AU1k4pphobQPj3bzQLSXkGmKEQjzcmpUXvbkXy3zDLhBMLaZdtRjQvcZ81teD8vQvXQHaAW1J7CBX",
  "key8": "24CdQHWUp16DUGuFonscKfLmTXzQHAaS4M1HP9akvBAZd8DrL92wkAU5GV3NJoedJKTPWMXbmyMgizKEoZboeHgx",
  "key9": "51tGd6CtQyMq58pd1rqtaSbTmJy6D5tDiJCQCq8iJ3RfbswRVQHcAAuxg2cBfxs759BUdpuuy1nru6FpiJduHoKc",
  "key10": "23p5ncUnAborNwNupXXBgDGGSwmMr6dfia1Kr2aN6X4makjqJW3zGhjTkpP3Xn2vscvZtGcqVw2qXxdAYBeDEj5b",
  "key11": "53JnZE2ibbbMewwbcFApWznAB9UmASByzZUKYgunhm5TKGCS8AHySYF3hep7eMeykmwAm1EgcgwkAmdcHsFQouaB",
  "key12": "3JKn5veg7o2GG5Lw4hFHc3EztHpDSdRGMFtmoH2HZVHa46bnYWpj19EGbmhsf4mzGVbt514QGSZ5gRpmnZquS4ak",
  "key13": "3xXXyc2XNVPiLiyPqxi9bfVP342GnKzzezzrzmw8q2PTi46JmqtpN738MHCoYHxRhL7EiN1VoB286tbbbpWBxZg2",
  "key14": "fLu5yP5oHiTZ1aLubUaS46qFWhibZEX2FgsoNC17Ri6JnxLp5xrB5cRypwG88iXp8uexSScARchnwD3mjsip8Ee",
  "key15": "61jBDPvfqK8qAzziNeNoigndFjjUksKBM2BF4R5TGYEryAzQJo7BwaN2EEPSCgJTTTXGwYMDnHJWfctGoJ9iu44M",
  "key16": "53NxocGJhMiEGbP48HHfEkSj8dteMqHzUckst6VhMT9F6URZH7zaJE2DAfRL8hm4hBukALevfhDyADoHnYRYPBys",
  "key17": "sSoQp1J2W8GveBb1GaUAvtRYpPZkzGWSVAPEA89F6cqPBpMvZpwrfSgoqqH2CPhLEDkve1WKbSy31qPhr8LYaMB",
  "key18": "JNouuyUYpNmqpVRWywXUz6hs5J15hbMoX2mKnPJgSGoMfwd3JnWJYhPWQb3KdADWMAMiwBtVQeNNjJfiK4ZsSBn",
  "key19": "4sXVAQTukSjhUodZBabKtAKoDgcGfUqgkqXh8TS8RJz8Dp1XZoPFMvbJKLdpkPPqDoR5bxgFGX2qnUbDa642nVUe",
  "key20": "MoZkrq925BeTE7VZPYz69dUYuhY3HqXv5HGSayyoEEmRtk32pxqfMPaTAmAXuAEsLE5dSb6hZqMTMNgK6sTTKx1",
  "key21": "2RHd7uaqFrZU988AJEkbsyphWkQ9x9mx9jB4GzZYGPyzTsdLkjKs4WXRPL3qTaSpmGLpGG15am8Tbvg4hjeFQfsH",
  "key22": "4vBUjk7NrqUUTGq4iJLj7HY3AUBWL7JT3PSrHsJbxEA3uTQFMCifFRaA6V68Nu131rMpzs6RRcM1XHi4xnJBkoWA",
  "key23": "4SmTALk7jZB1YpDbhmonHhXfTz6BtwXgLfrPeCmJy6z4z16z5uqLgP9cqLU16Xyr2bzoNMaD7fRHDXModdRubjhd",
  "key24": "5vmPUH4YkHbk99waGrUB8LeV3bGkx8daPU6BCdSDTTnnP5HMHSZRbJr5DbC92vkSr3qHT4R8EWVLcYECY5m3kzy9",
  "key25": "qq3Q4Tgz5SsRGHfPeVSCpw1yNpAXUnyL9n3CEFaM5XdG8ksvRPaRsWWggUQ9hEAmaawShoKnuUJZuSRuqJUtYcP",
  "key26": "5XBJM2Roz8ksyhGjLfXZDBacL52wYYcJ2MD3QA6nzidFMz69Dx78iYvuJUWGTCH9EEnbJnuw8NaPfQFtG6qKU7mf",
  "key27": "2ABkmNBEQQdiuzBWYx1B2LYykKmwawbVq3DKHaeyV8Szjd1tpLdSwHdgW4KFi9Dzte8tuhpoPzGJgFTCa4Gk69ZT",
  "key28": "3Rp5A3J3WTi2pKcdNeFhVvVfdUdZcJygnHogiT7TeZ1L8xVM98KpwNcZitAnhCMtepcLnjuhSQbmkNMggAt2UqMt",
  "key29": "34uGymZmL3zXjx1Hv9rJkaFL7RwKkEsKqreF2rLuS7ALSa5WmjbDJTc7DzW4oc4Nd19vvAWWBLKae7yg2CtkqqLU",
  "key30": "2L5AYaYx5x9QuuRqvsbVEzZiXeSHu41brVjvPSaVDDATTKT7aCHUvmMw5zBWDB1CMoeMaYxbK87j1TzTmHBam82d"
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
