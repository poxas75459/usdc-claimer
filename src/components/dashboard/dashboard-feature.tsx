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
    "2bNcDKiuzx3L1WtZsvwfCQVqH4hSyhgCCBhg18iHUnSD4A6E1eJDxhu4m22aV1QtpYJHh3wkCphgD3X3sgb53Y9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38sX6S33fyjPQ5UT1DfTmRXMnFoFzad1X4GAKHY4ZJ6SzZGxGUEq9S4NY8jt5HLurgArBY8JmiKW4NwkAtu8Va4L",
  "key1": "2WEDdibmpAiUpQnb4rgR89BiRuX6Z7ewkqiSQZpHMAzkAvAnYo4hPrNrrwShy9N8SDdkRLvSdGcxCua53prQt297",
  "key2": "VwNprUW8BeUQhanLSXewKSx6fksSd1LLEkMGD89mPWGhKwmUGvRkoYzNYxjSiZ7qLEZTKVREn4FKXU89YBGnKMV",
  "key3": "43JeWvRWT3g8CbtgHSGrtgzudUd7EqgnTqb53x6LDZKZgnqFAvuUni6fHcbPWRPAZ2M6qpWSWHvk5nxExvM9rKCH",
  "key4": "5WW7Ts8cYd2NdbL4KTWSTZyt9AcFUFAmLHH7xuJbNZQbK9x45p4k4L9FTZDm4gRE5LuiBdWU2n65NFHH4V5Bcsw6",
  "key5": "3aroNNDHSCHmX1MPGMTNyMwbwdoWDDx8WvLR7tPUEHGqEmeZR2X7oxeWU9PCBYd669HjBBLJBszjzP7p5aEJGPwX",
  "key6": "4whZr1xKWSVkrGd5i96tqpZpNFNoFqeU7dXZLsLGTipYqGMf7rBWHPD7FzHnMGD7VYi7cDhJzeUyTgZHX717PJfr",
  "key7": "2SKWomLfkN9QyFMrW7YqpMLzwzskVUkeqfMyfgYynSsJm1c5e349ogWm4kXDavAHFrxgHVpRaHukauwKBo41SXY1",
  "key8": "3Zt9GkctsEMeZzukUoqnVa9L6DjhMMQ7kNmRRCXaxag3GFcQn35ZE9utZsVxjt6LYqaL6vzDjex8Rx2fVC5S1jAP",
  "key9": "4vBa8vcntGpeRS5xsAMGR6RGhSFmbtWfWR5nsveiPSrMUqJsgvtpfasbAaXgLy8PTNckknL33sGnvo5ivDuZYph9",
  "key10": "2gaX7VA9gxrdTHPHa77fPPFEmgtqJaMDUZqam5YRcJUnGHKRCGyxNNpr37GP45mHPSK7bcnr8EAtpyve8XtALo5a",
  "key11": "eWgPLxczgbCPgW3DvW1M82e5PfTwKgcg7rkNxqtMmnXLgsqZsngZFSawRCGXvCxLY5fRNrSfL113n9bcTGZn9Cg",
  "key12": "67nVG9ErN3hK46HMnzCKDEFavkmmDEp92Wf2QX8uhqfMX2Ey9nmJ6jg9Vfbjv9FkGBnFkqs9o3LXckcibd12yUzk",
  "key13": "3AyzgB5rLbAcmUsA75fxCoC4P5yb1dDSX6sSKZmmvj63AhACCPNaKPiVSkFwKBg38eMSE53CPH1VdU9y1TbYXQt7",
  "key14": "5pTUxhVREumyVrQ2zZEht2kN8seeGqdSKS1pfqEiGi3xVHw5bucj29DDKZrTaU6omq7L7uN6FX5sC29dnhxZeJCe",
  "key15": "3URg9QjiCH6B7NS2tLE3jFwfe2Xh2NudjpkNDG7uU9QfREwNZapSdi4PwD8nbiyiTej2FFGgcJTWzsbmVdKzpUde",
  "key16": "5nPYDiuAeS3FJ3pdBrfmmKw7VgdemxsQ3oiJbKxXNzvxuh3JtbUimKgnNqCTTiZt6hXVncTAEZEvPg4kGB5Sm6NN",
  "key17": "5CiCeuw7qtLSKjYQTuY3hFghFMmykQDkqXR4JXhD8Bzrjf8HdFgi8xSTFTD5deAhyXNaip5cfL6z3wXakcUDuBjU",
  "key18": "4sU4uM9SMFsFDhqwi2fsgLSphzo3AQk3MsP6U7qQRoUPBCLnvff3MGNkJSBcW63JVS7JgTfxE9envbQeajDZqVRu",
  "key19": "Q1PCMeKUCdcHoVAJG6KndV1qYAtzAmUScwvRtKRPsNUUqA4ahdST24LPMQGBaKMoE1yQiBqHTem37RU73pCbhi6",
  "key20": "4EDqfxsgJdnEFzQmFQtkwKCh1MbG1ipQyEusJA4N16JXXQyicnTGM12bGodsvp45MSLV72arkvpKbUF6wD65Hbsr",
  "key21": "DiuozzVRYYJPSm6F9vuZpyL97ZjoTq32e6cizYKayUCpB4vza4My7srVCcrTz2G3YRkHqU1a6MYkhwzwUmeHRAr",
  "key22": "2HhsTsEVf2zkEmkZyzQdbRyLZbys8RSYLTVZTkEv5hytDEMVxq3Rej695qAXE5GdsirPrAj44ZdPC3sLFbvfqbcx",
  "key23": "2roHEnEV1k1qfQAckFwdDYuVcy73igux1ZnfQiMXudahzrXJDHB6amapt26DU9mA9deTKKSskzpie9SybzGHu2Ve",
  "key24": "5baHqBxB11WmcenjGQnLMgM9g7zUt5mzGNpx4brDEt3FqsuhDnGGZne8nSGxKbj3gMywEh8o3LT4MQAAkBDWUftq",
  "key25": "2xXPfqALTJ3FxsvyUfuAqRdNCA4Lf9a31ixaJ4Bk1E7eiMPmbH961Aco6PE2vSrcvjS4vxKbpXRP43DGLgqtnKLi",
  "key26": "5gvoRt1EWSHyiAaUtv2LmZNXMb2zqLSZCJaeHai6RtV9WeMYyt6YiNhLpds4ADQYnyZuX8ZFRc3b9vaNpS3TsXAK",
  "key27": "Nn8UNKyyHYm9dkWfzQHRH2rxFx8WXz3oVRqdR9Sx3ASHpWqnoykV3YMRfsJcxbkrjtXdD5Z9wa4HbwH19wJ8vaP",
  "key28": "4YB9W74oRcg4Sf7SBsLNC4aPfjpWxEeYvCoFz23quEfpTBn7TE3mdTUry5arcRvLShMWrd3PQXGhVJ8nKerDdEXF"
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
