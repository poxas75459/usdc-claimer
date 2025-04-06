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
    "5KCn544kG2nUNHY6ri4M5cAQsVj5hc3iEH9FNFebxQqJgE43q6ETvsHLC4wWqV8NthStsK4eSAUv2iz597HLNw7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QdUYngL8xeazwugCTMxBnpjoZKYLUmsuLpdKNHkjyFadk4AphB1PVtBJe2G2LxBsdfZXV9cadAoAMH656UnAaAa",
  "key1": "57QSsDxsYAsgat3dGHUchr8hLkvtUop1EGZ4nVcYxaGmTcG63H7WxSfhhJ4Uk7PHuvEPa5snHDag33678QtSsPuT",
  "key2": "4SWAcMymKJSb3niz1vpSqgkWo6jgLgT3EcnVisDgKpB6mq9pFiUDPQzvm16bnwhcG7JvNnPLnwXQpvTGGCKVzgcK",
  "key3": "3XMFpqigi1KbfMmLgpFJNHwev2SjzECWRqkufhAZGNMFENDDJp1j8KiUvZnE7drfp5N8ypdhDKYZXszLfwnWoN7J",
  "key4": "VYCj7jBvz1wxh3eNDxp3AHAxfh2JpsjQ74yFKgemKQS2dECPU7amvEPy5Js3aSe5DMngFjfdLCJ1AhB5vAMpEJM",
  "key5": "51yPCUQ2u8LPLTzuyGw4bZU9QXut6RL9hYLKZgK98TQTv4A5B3R9L8oor23wAsAviHCn1ds22Czn7JUFJC1jbttc",
  "key6": "5Az92u1Cwcbyify5WmaprxiqsJihmVHZpo5zVR7S3iGMX7SFA7zqS8jpipydx476AAxiSQyfTjjK8JwsVuXcPHeq",
  "key7": "42qMoMtNM3HAGUUZCEYSGpVJLVWGnHSuJur1Fn8fkMGkSWS583Na2TNWzTzfbHU325NdJhetm1JdUuMBmMsVkm7k",
  "key8": "29ZLsfFWCMP45csuAucERNB6iqzxFKBMyVAR7cxy5r9R1XS6kweRhvaQZojz4V765p3hCV7kzk9FhkoRKNKocnwf",
  "key9": "hnR8xV26mDCy739zktfDFJmLYoyPEn9jVGxWNJ3X9vR3o182HS19sXaPupQLGpPPvTscXrHR9UTfm3bu3KFKjzP",
  "key10": "22FEsoiBCLnNgg8zAyA5ZuDigziXakwmCeLCvpWscHG6UKiQJBqsbQ65tLd7rUXbZ2oQYYLFZD9jmXc5qfbSWhmb",
  "key11": "5ERGxASCyyRYPHSuDGyytAY7VbUNJt9dcvhbg3VjygJRvoXFE4ewzrNsLYgwTDFNautedr5rpv8rb7FRmprxFKB",
  "key12": "2khrktEQ7h8BddUfFm9en1zNGGGcg88fZY3VSGcXt6QvfbwcVGk4VXKXmC289AzV7dLzn6TEWEPgh6Zvp6XboXLa",
  "key13": "5GB9MRcPjxHwVKriFpQ575aph3U3tyBENJM5efThURGbWmGWQuNwa8SpyrqFKm1BRqJNdyVJmYkNmqpXQJduySHQ",
  "key14": "4wZo5tQMRu8m1QuF6uVfGkJHBGrHtX1hAoZA6GaiX2t8LqrzrCMFiMQSqNivYAfFvrWcMs9XSbudA3wYSMg6DB2Z",
  "key15": "faqekV2rengSeojZcaJn9dc4cCn9gBPUs3x6kgxXK9NvmGeoG4AkMv5nNnEWvyBNrBesDGkb27arcnegFJ6GHuQ",
  "key16": "4wP9xg3Tr3mN8cZrbaXxJtu4vRHAjdpfScYZG6haEjMnPvsb8BMQqwg9dWQUjVTpnsw84E1Y77NmYNcnMcKFTDR6",
  "key17": "3E9EbqdNTBc1nHUWAM4HMC4mzr1H5AdnHVwyFBVzFFH5vW9yBuBNqLtZMrWbot8SWfw53mXoj8giZRu8qZ2UQo8Q",
  "key18": "5wzJMyjEBDPhDr2ktGzoCrsGa8Dw9q9Kr1XSgE7ZCrZd6xYZQwMvLMpuwSGbUkL8x87NtB8wLXkoVUsffoCY573Q",
  "key19": "8Dt32QjbtGoAkhL8C8JfxrfnChkKsPKnk2eHHRuChsjoD17EohySwPbJ3mJtx6rvfNrvnfueSA4VgnZKsc1D1qb",
  "key20": "pHzJTEhnoZs49Zbn8oi8WdWo81jfp7K8wg4kgcNXRmwymnqwZoT6DNqZeZ4SXxfh2p2T4cVE3T93voUtkJSiKZg",
  "key21": "5b27o3HNizBMts327a3XJMrkgsUiFtZDZBDRBaJa3NZiq7dPEVm7Uc4HRc1DTDy2YFRzAUebo1CJtizQxADmpdX5",
  "key22": "3n3nVWnve1YLFxvYwENpR7orVKmMqfPicURezjPvEPT7W19XE3q8NrD4auactmZMHbQCnw3Y5AAkUrgeUxYjbx6q",
  "key23": "4pnzNZq2er4Nnm9BSFm2t9ocSEyaezQzcW71cgRMqGZtGFcHSSktz5ACX5CyoUy4RLDxJbyeRxZgjGKEbqAfkmjK",
  "key24": "56KAW7b8vYP4TAUxek3atdpAbGETga2x54jYqdV8SvnnCSPkqqt89MV3sDayF2QxfERMtYGmj7rwL1stoscKkGFE",
  "key25": "5jhpVHypKcsR7VRA8VWqB3rKLQ4b3d9mF8qteDUhe7LuowYSEfXgzcbmn6ocrQhg9x9LXV4VYyKyc1QizmgA6RAq",
  "key26": "346F1ony1xKLHmn9DaJUvXvjb9DUSjggyEQwmtxA9aALGCQqRQMw2c2KPoqit2yDYwb8d8QEfiSsezNVAeVfxiGQ",
  "key27": "4FdMuNSWbbv5DvsUBR5W4QcHDsUNfUKE1diWYp43xtyjuXkSZobWqUaimamnqkoL2ySNTPbwqYHb1CKfxv8TSvuQ",
  "key28": "5N6eX4FViFEyY8L2UPvfYF3UwR3BC8J78TmPocDX6nonp6XmGt2PmHymxiqxrBmt8mmnWw7ktKkbbqXZhxTKTneK",
  "key29": "bRNrheH7j1UY5c9HjHXTP5iE8LZVPrWxTtMYSU1CWwcsVtNS6AKcobXmgTES4wB149TzMyRcNbmP8hFRVHNQwKi",
  "key30": "41XKRSaoP7Qu17Ad6irrRWVAMovcxLRqwSmaur8U2GRnAafJMfkA7dYtt1TesxTjFNqe5VRweW3pidrrNFgFeYE7",
  "key31": "tFbU9Qq9CLHnLfUDzgRaTNmEvisGfdEjQmWeWrZDXjRFqEWtiGJ7XhVfXvoetgwSm3bmzdqwYyVdbW9vtdBSkNX",
  "key32": "LYsBHPEZNiya4dUWGqzx8SvjerTGjeBpuLJnRXqDL8hJD5GmQdU7N219evQDmmkpUcXYaSxCaGQgLptrR62WunY",
  "key33": "zwbNL1xo9FUyQeK9cF22uPRynxctTzMDR78ghYXvhdj82Vz2rajk5yT7ubv2jSmnMeBhXkMKaLSWQEGCMFM2sFy",
  "key34": "5LJ5TBFBg119piaZzH5Q5mFArGfP1nJvWVNuqNghLDkNADwwPNjN1KaXno8UhjH6eUf3bB685zBZJeZrmyZqt9Y2",
  "key35": "5HCuTw28pWDRjUtt6qtfFCN2A8SbmCHV7PCuQq18UPFTVhAKkKdeKB83qksqioZPbkms7weT8thidAcJpHBDmb8Q",
  "key36": "24yGAyXkqzcempQykg2YjCvNjcbmyo33oa65qXMx2izFJy679sjQvjLFSgadzx2LgXAS5AcjMV3GUz219sG3jUV8",
  "key37": "5UCGK5vTjsb4XNZQCWgbKLCyFyJDexvT2TC6RzY3DQsxTyWSnMczaeitX54MY4wf8Ktuw4mSK2qthBNU1gft2Lsq",
  "key38": "3oguS28CXNutXC5Mhi2NSGeUMULQi1g3rPzeze4L8FV5dGXhUCx34eVaX1d3SzRLE14YCasVPCBZbpqvQo2zBwY3",
  "key39": "5StAsS7GGDkzBgL7yfcbb1HXN7yhoWQqsvYWzqyMQL7WW1XVxepdmdMS9XUskwCsuUhzTH4wGQjDh5m1QxuJPVqX",
  "key40": "FFFErgdyRLRVuiDTvgLBoNEvCPCEQLjEv4reP8CqF15v4P5jtSZPuAJ2BbYb9iwAsTEgsQZZu2QpoA99HB176DL"
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
