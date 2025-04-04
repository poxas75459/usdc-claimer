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
    "2MnD1efXg7Lj1XErCqtkY6W9RrXjwFjQfYQ5ThNVnWbWn3ZLKt9gGk7GQTeEftG5BEnvwJiT7M3agAQFP45HKNXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TKywaDy3GiFCXJ9GNncqEomJKWW6mmuVaUhwmShcVHvEbKjfa7DU9HeFNS8xa5mGRF9PyeTU1RdYEpwQpiVaTHg",
  "key1": "JmX4kAJbG9aPwrUTdcTgGgNPHNeY3BsfguH22qbPcgRMxdyoBKJRpeufsXEum6K74shJdE8jzPk9pvsMrUvgh9n",
  "key2": "5P4SotNgr2AqYjJuBn4DKkPRtUUSqNAG8DrYaE65oenihukKUJUBxM1WLgDChkdPtYpukbYfokdTiUDxAsMEwgBc",
  "key3": "4dP2aUtv63QrB2C5aBYpcyTh7yt5cTNg4bQ2vnt62b31ZH8oajpUTZaKsdbjsRT4AnUSCeAPCBtnYDDLzmEUnJf4",
  "key4": "5ksCtc2VrYYUGB8B3JwmDv6Y5FDkZvQCfsEXU3twGpx5oLFJxWK1TPuixbmpVdXQLxp9KeCPgMbe7XRf6oyoGfsj",
  "key5": "57MmJ7RbZ6R9L73GXmx2Hs63YF1ktoz2hyUap7Jm2UrvHdCE8PXfrMo6N5eWfb9xyy4R5a3dmFmXe7G1jSGDi1YZ",
  "key6": "3TE4ZyUPAEsVB1TYCnpT5aN9SeicSzibFXXhTy6X6bZabpzdwmLFpgZrp2NDfvnBWh1zGYbvwPvjkYkWw3XQwnFC",
  "key7": "3Nm1xawCS9B4Wf71KAGEEKNGKga9BMQUe61HsRmRC7sdTPMX1gUMtPtjrzJwmjesLnVF8TGPefxrdcs1MLmjeLGo",
  "key8": "5ptTwYAaJevbSedgAxYCSvxVXmwwWnn9WTH947jReTubGCSPSJ2cgqnNuJYM8uMXmVDhvNUQuwqtBDw2yLJnSnui",
  "key9": "65iu9WATpbQ8FbwR1fGbDzuRAfW4A6MmuzmzD1CsvjFJSre5rSU8cVm9Tnqy28NcbWUkqU3D8oZwd4sBsf6p5aVo",
  "key10": "2yvSadLX6843xFyvXhpzLyPrcQRAsDh3NPjRFRd5z3JpEvtwM3RxbCDi3LpEnK4ktHY8n66SpbprC89kNyFg1rgo",
  "key11": "d4DBSKHCXWyt8pyo1XHYSu2D5wUgAbd6hPBfYCFi4WJfgCU3zX3f5xBERx831g3y38oi1NGHkdTRyJvqLPz9SvQ",
  "key12": "43fmKuCj6hZA5GgZKcaJFp1PRUMZ9q2vm5KToQ3dNkpU15iFKQjdyFisWoRgLjNpGhxJjCazKPWjvYqLMs9EiNf2",
  "key13": "39vrBHbzNohvgWx9TM7XF2Y56o9ak8LnmiGL4YjzcLY1GoLbxpHgR5HuNx4Ge6sakinery3R1nmKn2Tqad4mytxM",
  "key14": "2rhrodj9WBtu1iGuAfkvwCBKCmcCQDbaLWjSUwSe7vXmxCGQVMVKxvPvET6QbUjELQEdhp2U3bGzRPXVB6wLGASp",
  "key15": "3pdEDmaDEdGa5Xy99CfdgEgZYqBDpCKhFad3g7F9CcysFhw8T25EM46wAwSXR24EcGS5VZDS7YqqL3iviep5YW6Z",
  "key16": "4p1wtLxbHYqZUaC5axehficWvAqbKqsa6oFhXiZjr7tJ6mbPuBP7Thi7DjtUqdiVj3GgGVLTrkT8thLQBtpM8LVY",
  "key17": "5mbYtD1if6H7oeUesFN7Xbx2EzRKUPxbhj94tfTo81kEFEue3onaku4dB5udt9722WHJyVSneQrJNK2QKxix8Wpv",
  "key18": "3CyCfdn7ThJXdXEVT1CZq5HZSZH8exnQciJwLWHNx4FrKhKf6v9fq1gtQhDUjm4Bsi6AWspKsuZbGbJHcmZVUGCi",
  "key19": "TJ8fASguBGNERFxSspiQKjEWL1XtG7XV1KaPgsMZCb2UxnhsQf9XAzWr8mrKwYoKxp2y125xBLht6YaL7g77bUv",
  "key20": "H5uGY7PrHAW2hjiv3G9KJYxjEdf4KE8hdZBymiFDnHnSSVmCsNkNXJCDEE4afT8JCp75Xh9diXAUKz2fGt5zoJe",
  "key21": "61GFmi64NrwkMeP5B1WVWKDGZ7NGcuGVRBT9aQ7xxZdhWJxqzL4UGCR6S7fbkr93BckECvYuZdoAKHdjYmERUdhQ",
  "key22": "4NLMm5UHXf3BHzmoBpTZm7fiR7yTgLZqxW6ybFR1BJgnZzDqiK9eMDfPSqvwKnj14S2ictLBTHa6RmSiGXLC7BLt",
  "key23": "4wZKZRPrhWSfN7sJz8NPD88GmY5cV771eXFuLAC6TLZZoGYFkCxPLEY1iaE2ZTt5u9wrST4SgPfPvHfSS1FhN31X",
  "key24": "4m1Fb6b9yN9KJu57iU3AZcHHRKzuiVAwQtCDu6hDbzqSt3UPm6WtmZqdS1furZxhBynijxu5kU1RZsizc7nfgHmQ",
  "key25": "47j5fkDCudYmYFhWDmDvUSo629CoaS1nW3VNAdTBWGUADXggvrdyWYBuTNM6wYXMWWu5c45sGsrovBJNB57WyomH",
  "key26": "49RWL2Gch5ji8HuypmL8iNR4Huy84GBYhvJniWjf3erxUunaiTDqHpsQLL5Vynw1eLskmt6WuCBqRKQ7yhve1vLs",
  "key27": "4ePAfcwPRpLGpch5zX2WoeCSNeHNS1gpWVQe3N4JNcsezoLtdvxE1B7DupAg6mJaFFFUFyskxBjoM4TqqLDwr81r",
  "key28": "4Fe6CsM2nwg5iNcTwq1EcHpcpmMy1wgKky8aGpqFtkB1S9wgZWkWtm5Wnd4CrbB3wgB626MDLQwtR18KSc6tDLvY",
  "key29": "4XDoHK35shhbLWQBjg1LKCpGtvSnj69zBbotRepHhSXV9YY8wFwTdMCDofUa8nXZwvzv7YBSoKDdARkQ2iw1MYuS",
  "key30": "2g8PrA9EW1iXcNxvu3g1wwPiDFGbedYGb5GRH4xuZ9CKvtf2tvX6NNrUeRHnkMhPaJdWhCNk9Aq8yia8mKSybCD",
  "key31": "55a2ZV3fkVSqW5J92sSRx25tCWx79Xke18Ab1bgLs2fWJqorSXUqytZDhdakEwi9R1tQeBGv9EekUc877HCnVLWP",
  "key32": "2b9RYpGnixdyDB4fNsZxmS8RBEkfoP69WFf6bU6uWmiFvvbcGVhm5iF1uVoiYiWv5Zs38AirK3NJ8oMm9A6Dhjxs",
  "key33": "3kotecysF7tMLeUC74bLsZdVDeBGGN4RVFFKcR6BQyyZGX6GkQHH7YmtDjUv1yBk2ArgEgKHHJtPt96nezjiY9hV",
  "key34": "3PWiNEMhbtgdwyam7pbKUyTDpei4fxvbPvUFw5gPGxFzadPp7yrC8vCMayXgHCt4SR7VHnnGRyRoyB5aLvVVAP3W",
  "key35": "2BPKaikNy7uM8avsbkrxZcK7aHGHkf7ieZG2mBpfZ12zApuHQDAwVH6MLDoo9P4uBB1oFveqVpkbWGQNLVupKfpf",
  "key36": "5xQwxd14JhiS5ouSitv9z9SA8dtQeGkHP6GZaCYozKBD84nLu5nHerwUJsBLJiHnjJZ6b9xnoPCciGtNNttqDquo",
  "key37": "4doSuoGLZR82HaBZRgymDHU7tQ3jsze4KX9gQC9h2dSkr12Zvmhu8wzknYozFfCspnHx3vfUhEBbDpm9zhYcBMEM",
  "key38": "2im4fuxp2bHZiDs6jsBnoGaHKd6MW2PB4QoHiPDgLvKpbtoqWAm3zjvbEAaAoC8gqytxYi7XYtrSwhRSZvjwYd4D",
  "key39": "2TSAh4wkzT22Z24CN1sQFW9a7LFpJcrtXeNf7vzEHBmEhkyup9Mtu5MLdPiZ63AsvioPYPRFhhZ5AgZUcsCKJN3o",
  "key40": "3uZ822JRyW9JciKJAMqXeKkCKRpUJxzhkRkFbgRsM49aBnboXxYJDHfXu53xQ992HZywKU1MQBbkwynzZ7QRmS7T",
  "key41": "25wthKyjR7MKhpxAe7hB6wsFAfpZcgqLEz1pK1Zo4MCBiiXbCiG8CKk8WkonieyFcnyVNN6Q7nardeawjScq7YQi",
  "key42": "3tKe1RBffatN9J3vE3mDcjXVGXoRJqY4fv3nkZwgXvnRx7XyBXNvKxUSsd3p6UaEUTutKiZeb1mmyDooUGeTk213",
  "key43": "3Hn2HYvLrdavbPX3H3h1dCHrVS15yaqGK3kQUF2HB5yQsfnPv3fV7TnkxZ1e5ofjotQWnmTBv4duMsSpAPrcB1xN"
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
