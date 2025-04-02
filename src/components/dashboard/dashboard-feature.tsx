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
    "5wqNzzFUMvqRkDhxFWPG5hd1iA5u8cjqfh2UWimTYoF4fzJmbbaJKYXjAugWhj74fnwfU4Z9bhiqHeWFwLHs69FD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PbzyeLzaFPurCarDkCaFcZGzupd8RjMygtea6tqWGYMrD2GEc3FgHG2Dxkp7maxgwq2r4cvu4Vngjyvidm9BB4A",
  "key1": "4BaNHy5dThuRde7Zb82mvMiABMdorrFSH4cCpTUCvtSCP9LSDFDcFNagWojkpKqxSyuvV5Pk8jzYt22xgNyDpNR",
  "key2": "PM18quQNXTQnwLYQwLGrJ8dNQw7kscCzGoqWCV3A7mwJZ3Hv3LnsuTDKCGmyjPbo3MXDFCP4JFK7Hqbjc5ifkPr",
  "key3": "2XggJ2fRQu2XAedwiE3aNEdyrYrFgy8SAPF981rvF237sLNHHwpkXGxoqgmDZujCcH5P9QqeUGZbEYJhBWTFLTYh",
  "key4": "4ZZBDvNkSdDhS8XSAPZ39VnbN3XhT7R9gv22BUUc34GGdwxvNv16vg1GqvFVvuvMPRd3qS1z1og9HMZdb98aHGFQ",
  "key5": "2LoEvSSnXb6VpJsf18GBikb4Z8Hi6JBLCAG4yzecPfDHYQCMxpypDFbjhcmVrxLcFoP4ix9iKrL5qLURnsSSuvSs",
  "key6": "2wMfSwcUMP9HFAZRJSmU8puUALdkjgSnUMoiVT9LBEU2rsyfJqXijEbWk3tm4gieJe7oDDxZTup5S9dBXo9n9wDc",
  "key7": "4d2oVEmHMjebwyb1GwyjhEa94YbWBrvodHNwudtcp6cHfpB5UXJbVFdxts4aWxoTLq4GPP4eYCoNV3ybu3kLRxX3",
  "key8": "2m6owybTW363KequHhFVYa4SiZ669qa1yjjVPEZYwjatedP34r1Vfj5uezJZaensctdpHdKVBZwNJj6HyZyp3zm8",
  "key9": "3zTwJb9dJnPKgcdQbAuAjwTmETkPxpSAx7khk5BczmWyX3jBBFT8byDWrftmN5uAk4mcbdy634XnHk12MrBaEBqg",
  "key10": "5eLrDKKbHgJ11LRJBT8NBg7XEMbJZbzKYSwEzXtkfZe86FuxZ7eoWNaAtkcEwiGtq4NmVooNXUc7hbmMSReDqEi9",
  "key11": "527JEjSiU5s3useKtvYJeh7VehekpEWpBoypwi7UVNn2XQHrerc4VKDvmARqVEfQxAFPjDxFUpBx6v61pZq38LAH",
  "key12": "4xZeqYcNtgAQnVckCjKT1Hxu62teVQz3y9XKZhrgNug1JV6pJM75dSdv4wx8HxGdFADnnZr54GSo5cPrbwbBNbUS",
  "key13": "5dig2ecyQAJffLCDnf3ukNNnpKK5qZArwtYjFQnJq9WoGm4ULPWdjUnVfrJNoqaWap4SGjW4oPQAhkAY91Yz3o59",
  "key14": "3AyRkMxSfBcfAQkmaNr3EexsTRKYapLnLDBAmm3zXczRYmAXxNqd9uCNmGFBnkWc6rMdER5Mwg61mwUkbKRbza4m",
  "key15": "4gZDir7kkbXAh5oYY1rrQAhQ2mHKAhFJA7hjuZzdkfLVHPrHtRgm4zmrWwrufM6FA2UsrDcbwyZrrNmH1E7TNjWT",
  "key16": "411wHXz2yoW1VVn6KqpG44cc24erdkD6Mrdz83kWW57ryxUy2qystnbLs3diADiDuNw6GKeRrCyg8hArhjS36LGC",
  "key17": "57XByts9xzv5gtF4jsxmAroCEtUQdY91rZ6cYz8Fqut7JbnwafQYLQ8ygQR6668PJTb4qTQsFr32RTieqt1VVKuf",
  "key18": "5FL18wg3BLX76tqXFsFdaAeC42N2hAddwcx5Bw3rzggR9Qj7KoFrPxXscG9bX6PxPp7T3sQzGcw9zUsh7ycLBajY",
  "key19": "4hoUEJWgRa82a1mnx49jxcXr8wRa8UPrDRGckRoMsLeg1C3raSQbpsCuWdbwj6W5BRhG7RVngDEytMKm73y6M6iJ",
  "key20": "2189PzAZJraTrEhXM9r6kJnNMihrai6mctVKnWeRNCGGjf8Q7VZWg6nk2UY2eLVhJE84cx249UURYeL9Z4GQxnQ5",
  "key21": "32hteQFEpVZ2zgo7hDsEpdU7YAkRrwhnLreBoTton9PEf8keKumRJsSHzzGJqeYx8pmrCyXBL9aydGG5sqjXj4Hg",
  "key22": "2tXCi9WU6gzS8GgvFn4nASH9vasnU7FS89TtWW2kjt9czLcr9wvJKPb1iZFNM8CEaUfRp7yWPeDEbbskVdvutz6R",
  "key23": "2Wkwq5iMr74vB9ryGvHjkF9FNhSRfUdvc3vcwGpWEHY1xjUZo7BbwJXxCWH5R3dDJWYUTgZPUJLcBWdiyjZSBjz",
  "key24": "5x9Y2icxn2ma5w3pJ821iY2Xg1EwqdG3Yr3SUKNDnifGPzFamrheywRtBfM5YMWExNhBVeikYVkN85bjjBkCj6TM",
  "key25": "2wfPsUfybNUTXUjQWWbPtntLTeQsZywdvbwYykUDqYAAszYvX1VVv9Qjsk9qtHtcu7LnJruDdXG7DTVBzAsN9P5a",
  "key26": "35kCBK5DbyPGBrmfvLdTDdDmAMDr1QYC35seQWi25NhgNwbZ1qro8yVXuZrzEkjc5HtWuYxyAuxVh6v4gQj374oY",
  "key27": "BHok6oKVJ3zteJjeUr4zURuBpbszMHbDezVaZYugXt4ryBxCy3jQxJfbQBMHQHNcaRok8Q4TPMWiwDUPKK3GHCk",
  "key28": "TWfbtfEegrUkTUmqFMEJ23VXxyZC3QDcoG1x5KENbVXYAFDhufvK5Sf8sbrawsucDWjEy2hmBRQmainmtA3oo5Y",
  "key29": "ctqd5LWEBLg9uF9zqALvCQboeruVL6rUmyr2xtHGwmHq472uShY28Z6LX17f3Xxy1FWbuxbUjgYQJgksjptxzRE",
  "key30": "4phr7ckF176xJ56fpzGNeGZvRZxyJkdgtPqaeUfwMaJk3DC4NGPDGuYjjySdaCvHN6NS4WVgMZ86LvKLi9SgxXiB",
  "key31": "5qWtKyEQesNpj3kDPGDi9Hvts5bCArRACUNrvVYNTD2jDZ2xPdiQG5SWb7cQsaFxmxERyqXog4xWV6Cs2pm99cuY",
  "key32": "oCJbZtZ6j9cVYKs3eYyxGCN7HnSpgzFHjK9Z6j4qtauQSWWuGV3pkgoCG6tABFR4EtxPVb9VMuUpU3yQgyYxAkE",
  "key33": "28U2WNvLcf6nVizh2YehVTh6oY44Nq1kU7gJvBb76eEU4iXbU6vRGMqPonpZiAknKSNaWncjc6wGBPj3LfAQDvGD",
  "key34": "sanzhRX57mJjJzp9hnRHD4izPUPNUxLaMBp4iJ6Jcb8kx7P6YuAvPhW6XJWwp7cJWdj4TEVgTsrWy2m7jvMrgUV",
  "key35": "51WbLeYXQ4U8ngitd33poEecGuz5bHDMrdMCVtUxCYdxPTpCfZ3bN5djmwLd2VC81QrsrtRzMxqZN7NaJqxsfc3C",
  "key36": "5VZQ6mDSB3pZ2S46UVigAVTbuLW3Kng8ZKZabQdmS7xpKP8YeDu53GHVj5W2ZQkpV3KPTspuFLLXTSyucAo4krQZ",
  "key37": "2Ad8jwLS8QSoacmSRkJNpqpMTXe2YERsm6LbK4k9HxLQVR6CvYakeBy6AY3Hjs8PMWyrNaerVdfNJ8dHcLr1ySGV",
  "key38": "3iE4xGWDsfa3QKvEeUWzTw3FYwkA3VdBLqow4PzyGaJQtxCaE7igAmBMAbbw6i98Wq9npVoWKMRc16rsPuQDoiuD"
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
