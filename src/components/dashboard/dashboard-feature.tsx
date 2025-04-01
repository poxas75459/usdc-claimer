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
    "55utyXimrfLn7bbjoWdbxfAuEYYqe4Us6JXiCuda8tHn74tfLJXZsLsNVdH4fZzUcFhnkQ6GtjXwr8hPYhrMDKaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A8jjKdxKMoH4tGRjW8wPWQYt42tGxNtistGdD8m912Q3DgnQENv69woXVqZUh5J3SsdmEw7qkV8X2RESHUcEjgt",
  "key1": "3F3Zphey3mMxbyKxybGiB3fYfhmCvd7wrsMEX8Zgg6Aqe72Js9LhssGLqq7FyFVY76rm8uSuyxbwZjui9BkXvEyK",
  "key2": "2U4d9Y8r43h5mD6sG6PNTS8fJLGdR7DeCdQcH8WjRSJq6pb7njQCGSoNdeCZMoRrYnAfEYievFhwjc3yFXyPWGnL",
  "key3": "2i2xdHoKiRvK9hwiGZYEbff77fRCyDm49UTC2tayYFDeF1hzGrmQ5c9hyp7FujFCA4pyT1M1HPZ8LyiX2QsqAXrF",
  "key4": "r5hWtjNvUgX5QDuNSVWFiL4t2a7rUPsMBT9HM3KyWFb2S5Z3Zb1BtVL3sicW4FdKHXDVDsnBgDWdWjn3Jdy559b",
  "key5": "2PmwJXYyj3ekNFUPQqmoEP69Q5zZpX2iKSy4oaTEjmTE2Nn49kxKtiiAKzFbppC1aFhME9srTjjgEnhvtyXyxUR7",
  "key6": "2eweVFvu5mh5Jo365fPRAkqy7T3JzaCiUXQwGPcoK8rNqSorAhnJhXkhQdNTcjSS3XbBthhuXoC9wzqdxEMmntoB",
  "key7": "4mMKwyM1PgrEVRkVPmL9mwm3yLGVo9oB8SNxevTRsAbX37sSAPZLY963HFihQfop1CDM2Z6DAY21hRUpfb4L7kzV",
  "key8": "5M7hgVtdZRJKuQmf4LmGEpoxNjsUUAs752HZmEaPMxhsCSXDLfJz6ScjxUxE4iRD7RgAgY9iEshRmKzP4VaoGmLz",
  "key9": "4Qq7VcCNFopqLSusTsbNP6cdSvSSYFEQbNbrRzpvtzbBJwJYGuJRHXopUkYG3LqdktA72ELhSVRa2dA78V3ZGiUi",
  "key10": "5tJVA2BBaD64hvmbNLQADakWrnyvUCNnpdwmWMykMWsBGaJy2NrpyBy1VUUiMuSZEhpnQmyRPnPpp176PPEa8eMD",
  "key11": "3p6XJxxTTu2d2cUiP7FtAMv8S9KLeDWJFEDVynfyEFEuDWfmfyeXQGWyieSTmAyJAM3PCBshzw7aPAwGi25eXX83",
  "key12": "2TSNzNTBAnLEtHGQ4EMawp5SVL25QPwjEJt8bLTVWjG3d6JsU4Phvk2u9b1Xmuvos5Hc4xxNvvTjMKjJXVM27bay",
  "key13": "Lon5zJG7pDWaJrUtVT6MQW8bgvFRY84wMDnapoKnVQqfkbRBmDKfvBTkB8cSfTZwDqqZryHjLN3roiLEiSeyYDQ",
  "key14": "3nZRtbpPhGuoU3s2VbefVT7SSqkGcbkmjgFHMpGzLMWGbqnPpZ2n7v4c5aCcgDeTsB7ojQYawxmETRjxWDcpW35t",
  "key15": "4UHvQBGQg6Xff4UFkmW5VBp2RNBQyiF3HTTmN7xc5JcTWbKVeeDq59LiLDrDRg2kCCVSc5UgmvzfKsRPPXnnFbER",
  "key16": "3wHnjVQ6EA6rrETjeGabpeZQ46bpkCBL7jt6BfwhnVGEdKQ3tsQeYT5vULuPqDmoCpwV6dvLETcePQMn2nBTRXtg",
  "key17": "4jXTAtjneGKEPwch5bx4ndEi1rbgSzBiSFcgdMibqJLdoJhyPPYdANCdosAd3pCKDXX4VDgnrJurBa8Utco9k6pv",
  "key18": "5beLN5iJLpmig9V8BhAAXVsXzmG9oEcZUGvYW1jim2BVinGU3eyMo7aJZdaZk3ns7WA5cetUAcEutU8m4gDpuhWx",
  "key19": "5NkGqBVMQ1LKCtVHz2k864rbYVAufkpCwQhhWfNggAZNb9CNiVryuDwUveaPERkD7TajnsTFHfxwwbkaHtasc5ey",
  "key20": "vBVv1YwEqXNgwyowEViVneR2Gjea6JQV7iP1wXhW4fCaBLtmxA3tVR5WLcKD9ACbCdWrzgVbJn92ouhfMzfcyNp",
  "key21": "5CJoLKmnNWWTMRrqhYKNs33p23BRz6if9NfVA8WnGTFeWm7n2xivUM8uzpLqdDCNX41UuNivBig7QYFi3Kbg8UwX",
  "key22": "H83vLN33VKNvT5N7zg5X3KdugcEyk3pQrAwyZSRo6aBz8YDneqBcJX2PA7xVAHxfVny1G5YSg7xxnEZQh5w8WLa",
  "key23": "4LTHkFKaFfctNFdrnmiajzcj8xM4AaDVW5b3JD3H4xVFi3Z69Bsyv2y4qwMTCQ7SHXmofFveAPmtxyfLZBY2FcqB",
  "key24": "T2ow2Gnmzbmf6C3SSLQykokoDm3YeafSq1QHp8xEP2g9hWnQamqgPQj6dPevRziCSoRNB19rBEJis5VYDCyy6KD",
  "key25": "4PNRTH67gttpKskpxHKZ2iZPrD72H3mx5G9MrwGbmkzudkmHUxjEGQUT2m4KHiH5neSSSxA8YGEqVeHgA573aise",
  "key26": "3a2DUYyYbcyAzztnqFKB1uTeL4B5yq4LZM699VvY4qPbiCjeSRTdjJPKcXxTLtrjFQ41EZtDZyxXKJs8gkdfoStn",
  "key27": "2fbEQmMTswothGoCZXcoiGZbzqzyXqdQLEjfur2rjAMyRaMHF7PmaXaKoCjrRDyX1wLTkH48pdaBqHbv4j1vE4w",
  "key28": "4i4PimXaV6rC2rPjPSGNWJG9pz3Vpj65bUwKbXeeH2joMyFqsH7Km4HaYDxNBFd2ts95Qw9nAusnBVQi6uUXUhGN",
  "key29": "5eFi97HFvVq7djHEomooWWsu6Jc9WAx5X51saV6Y3R85dyro5QJZoQnjMpTUVAAA2FV9o4mPQZYSrWBzyVfxEPEh",
  "key30": "4uxRD9CGVTAtK2VKctw52R9c3Seuvk1odqZK1hTnSYAmq1kwKP6wHjrVaxFaWLoKmX3sfrBwbRCBCscaut4Y8iMr",
  "key31": "2TeUbMLddwGc2zgzipUKUpcvxDXtxkVjc2H57AdSY1v45YxjUsr7xBavcK4tf9HZqa7Uy8o9StokJy8QBFnzefeD"
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
