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
    "qxDM2dPBhmXp8xXGP6NfPueCxMH4uUnDsjPhrMmPVCxqd7WMAn3vhnM6oLF4C6ASWgGtxat7TBU9kw81KLCAvQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ucHDhSxHKaksTiKHK9W1Xj1fUtmp5EcRwhFVRWAcytAcNjEybLV2QgTozhnxh4pDj3zrdKXrN6Kc5wQ3aFdGRT",
  "key1": "2EJaF7YQFz2AMtSzm3rUEBG8TWiovCEiiuxaJSuQPVDmMiaXZkv8kP4og66NYQuuPLeNMNQ4eDcaJef9BtxQQ6mn",
  "key2": "4k3uNE7n1XL5e8s8p9CwNmzQaUqV3UuAacX2twkoJF25CS8tr3GCysvP5dV5qn7XwUYCTAcQx6fgjz9eHmyvPyxe",
  "key3": "2sAHUpa14iUu8TPTdpizXwxEEwBUnaWF9k6ersyoanqw5kY67bZN1ktX6m34iWr24YAm72eBSgTUU73tVrT9y29T",
  "key4": "3cmxSYqgUiJ31jHVYL39V3j3SpiCme7r4zt2runGZTkoc9nZip4dJ4tRGnroDAxqKZrbDh2SiDmKJPADmUWc4QoY",
  "key5": "4E3mua7rTZRxspMNB9XroLs9kDfneNDSmFXdxkVvSAsmEtJoWZKKkNKRdKLa6pUWmdAEWJGys4ENSEBjTezA34jW",
  "key6": "2vMVjEMT45VPHPsQ3apkmSae5ouYxpD7aDJEa7EzoSCefPY3jK2cYt6f9uPxe77BxpVzLnx8zYi4P51HEREycZVb",
  "key7": "5X5B7pyzYGtErP6oXt3re7SdWm4mFDS4d3oLf3dPnXjofKmYF2LSrZsBxot4a8UGTuq5tDnDVmXf8mcFqw5q5ca4",
  "key8": "5P7Ys9Lt5r7cFEriR9ViESDCHSkQc4ENTMKCUf5jX4VPc9EXbBZk9dFa4TRZ3oB7hmdeCW12JZdZDWtWArxqkkM9",
  "key9": "4UU59q9Bz5Us9ctVCrG8fXGiNiyjfLo7HZbqDbxwWgz3iFQ6bnx74AXSWTCADmmzEorTUz3W65w8pNnugWsSbhtT",
  "key10": "2NuUUYCSnrsyXKedWBUGNH1mmM7nrQgEx1PP28kN2sjS6vWCkbELDyrLNDxYzC8LhdXNH92wDzhL3M98eoMe16B3",
  "key11": "2GgVduTSnjFEL7xXLZ3uxKdRz8G3PZrMuCMjtKnG45xQ1s8U28jq9Nyed98LYBLz3Z42P87bXhhdL7PpmNFMvfec",
  "key12": "471rcfYtZaBixNDHgw75b3yhMhidd9zNqRZ98NPp3f8MLwt9YXmvkPQpM5ekfhpnPw8wymrnhreBXfpgYbnHAN8E",
  "key13": "5bRyob82b674oedYGSErTzacQ7BQtozchFJCfD52zufsbfWtutHHijvezbLp1Enq2vd651tsqixGavSZxYNAVPep",
  "key14": "38wSWgrijbLg3dSSnbSoatqFoFcT9FAoP3CMCFeKCWCdPeE2Pj2BoXh1LM6FjC8JQnpLmSy4dkk3qBAGRTwWVo7M",
  "key15": "38mbmygGq5o9B89SEcds8n5JDziFiPzEjCdi8a9Zs6iSqCcjM5jGatbRD9zPqUDdFvaJ9HGpxysZcRxQjcSedicz",
  "key16": "RjovBbjSCy8ZG5xXh4aFz8Vs3t8hiBfJoi97HTqqsB35aKAVXrjd6yKdr6RnViUgyUMUencxqCudVjojC6WQKcy",
  "key17": "4amXfLtTCRyDSyzGyYBeoAbygwTqWbpprSBAhNxnQy55nNmVYCfQZmFboFodnJaQBzSCxmdJ6WZuLnG7SwZSncNS",
  "key18": "ru4T1ARDAiQjPEicXCqmDaaL5LS1XKJ6ARKpWhA3nCXYBVyChT2Q37demV11Wqo9me34QcZMBaAThUsEP9JFG37",
  "key19": "4Kb9NJzcDSSpLAdCDNAH4qSfKJTPGBNxv2LB2mi8r2kUBXBmnmjcxRGpCqPY6fp7NehQZ72tWyaKUYhppn54wXZm",
  "key20": "tVS1ZAuRL4sPbpvuyYpT3othj5f5BP9Li2YFFsKtwgyiRzVRPP5rLYfhMpmz3vDzBnRHJccPJ36Tz21jjPWMgmo",
  "key21": "5kVySHM7xLsWVDn1zTdavyQSVLNikYM3uiAMvfmTQHgPRrwSU2MuuyNaopVa7GqwTpSnE9gYAKK4oskyRgo1nUf1",
  "key22": "3Xp9SrtJKk2xTwPGc6xTg2MgnxCa1Z4p95kVfC2M2aTr5Qci2dsYz9ZV45LGh51M6qhShrrCnJDCA8hd3bziXXB9",
  "key23": "4ew5y1PxGTjNFZu8guFEMwTqz174x6WzmR2x8QZiPA2CU7j8c5cYrZVpH9R2rh5RdaVoisoCtYVZet5QxefoSwbx",
  "key24": "25ARb3J2oRVtuphKV5V7t6T34TjaWvEzRL36vAyfKnTdQqhuphajt6PDUzgysEgozGfy6bveobGvzXCYrj2YhwsY",
  "key25": "4yBaVSBQ66U3hGrMtEjdiq1JgCu7oj2HMzZq3nxeZq8KZi3613x3DXvLmUHWhYrckMydGPzL467rSfWuwPUUH25y",
  "key26": "4d4h2NCs925maRXfHN4BVLXCdDDdKhiCya5EJW2dMZGbF2ydr4vsNXKXxmcCiHTfNdvKbgt69d51HQSqxkg2TPYU",
  "key27": "5XcBfUJQqGmBtfACA4rULyuDpWXsQDhHScSEoFYRFbabvuA67HcPUgEWDnhRzKvSAVjwtddha65pnasrtWfWPPWm",
  "key28": "29mzDcY4N6oFGmYTG6rPJyAHaEpTTq1DPGXM3qh5Rj2vwHvcgveK3S95LWWmntBtRUnPPuYwQXhih6jgLMP1Peai",
  "key29": "5ciJ3uyCb5VtA5jvVQohLDGfWrUzSNfG6np6GRjEZ4YmH7yuPafKVHnDT3RvLqCfqesSTtkudWV5ommaN9aom7g6",
  "key30": "5KCsjAutzVSd73AcWAKnaMjNqq7qiedmiNveS2FMdhZsAmRfCXfRZr7LiFiaY2rieRqDBAAMWazeXYRDcLgmCBiZ",
  "key31": "3kouWLPJKvimhzUHza9KvUzSz8Nr5YjDVpUc7tu1Lap1FrPXnLwUpcNJpv7VRoXQ85PEswasNmrVGKJoADL9mobn",
  "key32": "64LGJjhWSj9eekWgkeL9wTFGV5yQKamXApQhERopyGoEkrmFxJndem6xf2z17oKCwC2QU99unqL6XY4ti5C7vvhD",
  "key33": "3btQhmfyYUDt32JN1iPvaHg2c11XBvJYixjvjZNWoz1DYT9xeLDsgNopbKFTWwKNiLh9qzNATjZT68vCo8JqhUYZ",
  "key34": "Adv4K1R3RqyeR76hCanHgHKVyiTy7BZDx272nci9VEu54WoiKb4cbsfgf4x73fJt1aYjjSZjyHD6XCv9k1ddfmX",
  "key35": "dVbKedthqBzCUHuinAbSKmjwpiJTw8veWSgQUx1rgCDQaLrUSgTf2xsfFgRqZa8VcKjhucQW8r2AJzFPDrFJy7h",
  "key36": "4P3u7dr4bjDfMWS2MVNeagFW9dWfMiREa1JarLGtT1tKiPUHdCqTtAPRRaBUc4ksZA3QSc32LwzcKZMtLZLxvYi4",
  "key37": "MjNQLAeNdnu1e1wa5vxvZNHEDFi6WjQh7pXnY8ynJM23e4Pz2tLSuME7r6u4vS1r238KSkZjiM9vs4jjjx8dXB8"
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
