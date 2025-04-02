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
    "57FHBBnUHeKstaSmXKFb18mA8wFCZWUnKW7VRCkXD8KBsSJtnUbtjdVYbhu6iVUAgt4ar4mwWhEnHrJGwEWeHUDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wVYRwzv4h7Y5v8Vx1eSfJi1Fye94opNpYnLEa3KtCWDkU22ihVUEdcspKGMhiPfNRk9s1EubvJatuWrS72cpzqN",
  "key1": "4eCtcyHNVLh3ivu9YkYYmB74SLFN3NAzcnzc77UVKoX27nMSxoXn8iEMbF4Ey3e29V8zLUvHRDAVoVr73EHLVxmt",
  "key2": "28epfPMdRTCaUNrg7Bp5LnEZfvvgtavfWELiMGkG6f2Uma9g4EJdtziYhLvMavcuAt2RTBX9Epc2aQBix1o5Et4Q",
  "key3": "3zrVtnvRxaQRphMahNJuy8a1iuUuMA8NqckKJsPn2Dt6HS9vzrHnui89rnfkvCXANWXDpYMWXskvaon3SkdaKXoZ",
  "key4": "3D8GbANgA5s6N7eTufjQpy558pEYrhEwgFDSEnJjbof2TDDCj7JLapWNpmaVYjadKbRFz3p4xbjCdugq1bMC9E9e",
  "key5": "7hbTPh3MDqq9pGGaBJhogRtx3jTjMb8cy88BAb16GNawq7SE7wThLXoQJ3nXXJnpsz5A8Ye2RU6T8cukYihJb4j",
  "key6": "4JjqaZtX8m35XUWFgfBY1JqC2JU7pEgnMbp3oi2j9VeGgDQUb3TCDyetWT1eF3vmhYfmiMagQznGLxrGhYR2jc3f",
  "key7": "39jLGePZjup59vSzQtPqpkU4voFmzDG9E58VpFZPdQTTwAsZr92xSVRK2w3ojPkTkwzMmXd89qmc5piCsBW3pRiv",
  "key8": "59MfVuGvuKoKJYw5o3aTHRK1AgEe2W4xTpCSu7BEof9FU1vvBg5pNGBYiNhK3DdBDc2HkKJWNN9kgEXGpVKdH8b1",
  "key9": "5QpXqL2dS4VjJxbFmKinUC6HFW4CRfwVG1y15KvNBF5M1pzE2RBCQRij4UZcAqgJn1LMfd1654txHupMjkYY1XfA",
  "key10": "3wP5ohs2XneV3axAmd7FV6iMEg7sNW8sqJEn2Sdfggz84sWKmXBiQSe4HrrCM3Cy3hUK6xWjHJ2i44mX41xom1XG",
  "key11": "cY1trHZeqkR3ZG7duoaTiiihkXmZfBvouZ3rvsJf6mWrN8VTEFZq6ZwpKYMkApnPff1xGMCQiLBew6SD1jtGvkG",
  "key12": "48pSqmS7Qa89rX3HBrCgR3DV4REws2tjWnXE7kZB1rvedT7FTzmcd5SxtENFU1ZHrtNpSDMUjDnQ1PNiwJNzFRG2",
  "key13": "5SBDHZrTwurW4WPtBxN3WpnCykBpPGcycHCEEsQLb279wNirDTwFhi3JFDaMU93cTkk4a8Hfb8RdecTMJDxRJzwY",
  "key14": "3yoRVKp1dmHsZNasHBvemcNJ4czheHoGfKzFUV8eitDGwKjuvcXkvWbw7oMHYACKjhkdqk1YhmxpmRLnG195Tswm",
  "key15": "5ZuSKnYvC1iHgjjRATXPi3ZizUyx4BGUeZKJYL3eowgZryXKtL92pFNmmdwhdCMACkA63YyyHghQ7xyT7Wcu41ZQ",
  "key16": "fpDhnRdDY84zEEGKb3EH5TC5YhRnmvm5wEu6xjA9BhUUairnFc4sSeybAd91kDUR3PK1GW5z9WMuie1os338Fye",
  "key17": "2p4rACdK2uWEBoejT7rxHqe7Bsuh6fD4g9doavThTQUs59h5MQ4pfNaURE3KiGJfjkdP7JTDWpuLMuyGFK7MBWhy",
  "key18": "23GiCxJVBnv8pUbN7H7jjRbnHC4sGmPwCrzzWuUN6abe43ZVTKUPhyNdv3taJqetaDJGi8Nngp7dKQf3vznvmtaE",
  "key19": "34jwU9AJkBeKGpQyVmwNQvW87tTowqmVBoadeFxLZn2oTkwDg3K9478TQQMZwwPbH7b2cUE6Kid4HVKbwEYggkuL",
  "key20": "4HhC3CeH61aNejdpAMUHwwo3eF2Up9KMaWKNhdVXT8VFh6zRutQuj719YW9myC34MJxrsmXkW7GyyE9SUfqYpKfk",
  "key21": "3bKicyJmgSrSDuHcEmbxkT5AgbnCx4pXB5HFuyPjYk2HD8rpbpqYUZ6e7DQy68f8sx2JvJB2cnVXevSHi8yTwQ7W",
  "key22": "mmuYEChMoLQGheziGTSQULWgR2bcFCisPpdib7szf4jWUTaeQVuyu8CbJ5BGYd9vTjRaA1QEkw9cZoyussPzZBW",
  "key23": "2vbLC5TKVWfnK4XqSJUjBwmfQmC9wGych7MQAh79LXmt3iZbmoZSvA2dPD1ksLuciUgnKnqwP4zPG6jbxKdYCyLK",
  "key24": "2KQ3pDrLNC2mcPmgjiYgGjid2F2iJgSQMv7TzU2HPKgVTwVpQeb1KZiV7KLi1ADJMoRLeBdKunmX1mtux7YGCNFx",
  "key25": "41vZYYoZmLxs5a7XmmnYQM1NRc2FUg1nSBm2aKFek1LyghRtVMpMuBerkYF9wvpoWJ2jEvQpwPg5sdoNPNCZSkt",
  "key26": "55Xxup5NJb4nFX5ciLNnBrnrA7PneEtyXjLxjtMJYqtikrXFRbm3xiBFXYprmeyD7PybTWf5hmW8BxFTFu3D4pcu",
  "key27": "5kcjuR7t8gKr8t7Tp9gU5pZqqRwcPdxdLjEhBDFakm8Soa2iAaNbkxCUx7uPaEuPDjQUK8VJ5h5QXDCnt7gVZkLc"
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
