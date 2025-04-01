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
    "2Q3Szj5EA1BL1XGDkoPaeseyUou2gBeUyM55zFgJRhcqMAb6EU12jf31Etz5hfZMa75xJtuPsChfPDjkokgy8YAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ise2zo6ZAhutnFGrCUR7ZeJJwH6RFX3x4C9c7TBxGhWnvj7iiudNr7aYetcSwWBg6HidLXCgpctz5e7h4xrwWS",
  "key1": "2L7YKmLNWQaQCm1wmDYL2G7Hc1LDCAeEms6Hq5abV5anxKqA9snYKynmJxPGB7ogFPhiwhowjimLpqnVKxNfSk88",
  "key2": "4nDebzzzDK2LdYrBVkERwRFs61hxGSL2Z2xext3hBCVKumQYYpeV5D2r5gWNYRjiDcWh5iuh4aMcxfpBrnDCqkzF",
  "key3": "4fCW7ae4NgUPRAfA4hDCKgFUCNMDt5xXSrMVB9ceKzZGBWCWAsjBiTwdjoCzN9tsXt65ZQ9ZYbg97ksBV2nDvoWm",
  "key4": "4A6D2DSnL9dZpCYT7tm4M83JczBNQorBkrLYV2HcrU2Thy2jSTTKoPMqakKYwrKYahSDLMybpkd4XrwdgSNZ9d6J",
  "key5": "EWHhDFEcZEkJWyPUC25JtEwF8uyn25oJvxsiasBS86mKB4PBjVNVvcEArdunt5gnY8Bsxm3AqscnEabrnA9hVsV",
  "key6": "T1j5RNPScBZyrsfPe1tWGGtyrXo5dMyZViLpmwGvcQ8oimtxqKpnCokNs3xCTNzeQZqJyWXRXb4oQHE8WzKvYSt",
  "key7": "56YGoMY5ud6Fxg4LymQe5JhecPxwXDtyMgtkigcbo49THQ3j4ysiRpbdN3qFsn9Zb79Ckhj6zyDcVpCMnnKRkUms",
  "key8": "5y4KDgcvv3TjB4WhTxsULea5ibRwUNCbYH25LMheTQxRS48pBAh7mKcd98ZHbYxaBzGhH5aPsen7tzk333Q1xk1x",
  "key9": "3T6NvCwncUa5iJWtnifafVD92qDRVvwGREEKtSB22weGEgeFZ6LaoNjayLaqwi1yc1nFS8J6JpzFYtYGnsGXCwK6",
  "key10": "538vzGwmBpBCAAnCt8PrVoEQYQ46NbqP2gTurNXFPjNWhiNsS28pGbGEJ7aPkXtEFggvTCcjwJ4WiXKGrRCb7BTR",
  "key11": "3uWmvS2vF6NW5apQCFCeGanfi3SEark5FEKmyQAzRRPsuEzsvHDvAJr5XahvHcNJ1tfGJer8fjVMJTbKPudPv8KX",
  "key12": "3itTYiBCTA59VVPwG7nm4Wm59GYASrTpLUSrRanxs4XC9PXdehA4Pmdwt6SSMSCEZHn9ngbV3ARJpd1RcGLEZ2Aq",
  "key13": "3Cbg4kNkvCGzxHKrFV9TNDJs246v9ZSzQxtMaAyzwFWL9puiF63QtQ5hnqGmTkdwTwjvXEFMPKBS98PJtSWTR9Ey",
  "key14": "2aY3nq8JL9pUon4489MnfkafGVoNYxfE8AVTuhFnRt8fyAVhG9UALkV5LM4taD67ef8V8SA2GuFsLvTGSvKRH9qP",
  "key15": "3ftfyfXixkKhPbSMDYo3JvM5x3bRu7iD1fKzmhayLg79Kuxen4XXzAvtEMpB441xBasoFehR7tj5NKdao63ooQUX",
  "key16": "2n7qH8jwnxa7Y8XnnYuvcXwSmUjnX6dbooP1knrjWdfXF3iCPxL4QHcqpniQnyfsRdXnmWaxQWXBED8Z5b9FLyfA",
  "key17": "3mNz1AaqczYcUzLUmBqwgDkJ9g9R1G8fYFGaqtyumygVUhg7As2bnhAnif9LutDp4uWLgqADLnaQPU38ksUx1aqz",
  "key18": "4hn3uNS5rCBknXFy9GTodQCe5S2bXm9XjnibpnJweH7NLwAVX8LUrAMiu6G5n6XQ8weUChN289ubu24yefYHB8QR",
  "key19": "XpGr399UT2EYa9nGf3iawApwWDqSwWmM9u4jWCFZ5RYXZMC4gGjfVgAA8NiG7uuS1ykDyYFccS6Uxd3ztyYjoDp",
  "key20": "2qyJGSTmSP8hyGKw3CwM7QKphm8qcaoGjusZjVQrShhWXK5CEGcmhWB2pD3Be1Yi961NSWtf8V1CJntrQnagdLZe",
  "key21": "5u8n2BAmx8mjvpui9ndogNPcVZYDEdFKRh6LAbBdbB7R8A88DpBxQ5SYCrsxyMF2DPPRB5hTzY7Pr4FVPj22aHiw",
  "key22": "3ri746XbvGa55YN8Jfua7gVwSWH7RA5R7GHkUQ6KY15UasaUUxsuaoWWasKPWX8vQvEMiBzcynfu1XuQ1ANtCQjt",
  "key23": "4zrMza4A4A4g83a8TXwUsZv1WDsTgP2vPaRrUaJk6nLWtCE4Rc9UCQcUmEUztpZ3nQ36HjwPQnKhnWaYvyYEcF7X",
  "key24": "3WXLK8DrRTqRduQeMnaG2x621zp2AXEu7mFispVir9AhKCL4GJAhDdUd3itrCksxAnerB6y9pziy9s4hGgCqdmJn",
  "key25": "4LYRW28AP6ZoJrczwVUZbnAcYXw2K32wWG51o6JQghnWu96RxZ1Ug5LGFNZ9imu2afgxDbsspGGwXdLg3XgdQk3W",
  "key26": "5SMeVNySSoAeF4vnoaXYcYTWxmGjLbaoyTx7Goj6axaDZrYLSr1VUpu2ivk6wGPGNtF8FBkPhESzccsFDiQ5fiaL",
  "key27": "4hooqohV233FSDGEURyu9xnoSgdouHjVsw8BkQYtUTiRhrQb4gXdU9j9XPk56hXdztPD56JyZLEfBWV8r7HgXjUa",
  "key28": "121xyLGni5MCvAaY7dF5QRULvU84tR1r6sgeoWsmhxpa82EHGMiqgfnP6X8umiRssq163qFJkEBhjgRLgH7V6Eqb",
  "key29": "4sJJwyzKPefy3pZ7gF1FnAH5CDxjFYf4hiaBP7Uyf11MwawMDwTb6pE2sTxx5jDGTDcUkEYNVvBBsvvKczXrqmqv",
  "key30": "xQhnQw6igaSRHxns2XZaarpxujGEPFqjvmvenjCQvGmcBJnDBHhQuE68NCtkJrbvPnt4fFPQyDyYp6f5WYZiheq",
  "key31": "2gTYLwioibsnHKx5vAKf5Qy3s3BKA5PgjvuAGeEj529XTnNDnHNjrQvuNG3GPwZdgPBXADMRFmTUH1B2kyxxTTuk",
  "key32": "6uzvbLbZ3T5AEKujiTvt1wzSVAr64jNxMvdYxjgizWJa5w33kY6Q3UehK5YLoC32TqEzAFACgEfGpYvrSFerwfj",
  "key33": "4eCYEN657baR551tMSYUwPs3QiGfu2JPJNKGtuc1SbuwoJavYvVCzn352m154D95Gh5PCdopYnmaG1zqA47MuqF6"
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
