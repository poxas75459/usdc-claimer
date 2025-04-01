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
    "3y3XCmmhxxoWYufi7JN5GQUrSwTkUZkGuh8Q7wbzotcA4ZxuzwuvtMQNSPDZYCtHxMrKsTxjdcxEvCks4Zf8QLkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yyv1uapJkycbZ3pfa5jGbMymwmar3do1DdZjt6rYXmNZEjt79g8CA1oegTiijsbMwox94tmvofyh7ZS4eYHBjvf",
  "key1": "56PfR3CfZy43bMdDTp4ryrdPae8JpRhS5auwsxmv7mpG7bT7Jbjt2HnPFshk5wtbs78kbQXzdExA8jcQF56qKE1P",
  "key2": "4n2k9bkPpFBnnwttJMLVo5eDFj8wZQhZJYpSAvymz4Qa8vUEbRtZFRYWDu8qmRffwc3TfDVizUBn9mrbRNRext4B",
  "key3": "nCr8US47pFBx52T3GfPiUsN27X6gaaqGaz4kcNbu8fRWFodVcCk4mGtG5uUUtBxEWRsq7unQ8LHqrn4Aq8WQNC4",
  "key4": "3eBfwmwSMzjnxBTCNegxZPUvQwW1yEJexfXKKJ59EfNBqAhAZXAVotxkymqxGkwk4uP1hmp8Q9JEbdG74Mo9oCg5",
  "key5": "2dbZhzCKTGsDbuvueYRYebFAzrqqdf8ByNyJCetWruvmMQUAXL4vzniBT6rRghby2vL66MZvhwH8mu1yZFGRPNFW",
  "key6": "4wZTmGBsFqmM3cik7EThPndXDZ3SGK5HNFzWLZxuQXagPPahdtzqfZMe3NsQi3r9iN2vWK7pvbn3yZipqDh2NN9s",
  "key7": "48kcrrSkasvFzUvyB3GUt2cEWggFRyfbUZyRUUzjLHxsYfYxV7Z3KPCSxkCZkzrBcSS4Wya5S37w6edGG77XcZsG",
  "key8": "37maqDAgCNdYTgbVVcF8ZxAuyS88jZui8kc1UdLyZDRYFss8NmnDNAejFhRvmLtjAh8HFBDCNS6hQV6DhrVdYgT1",
  "key9": "5ZuCoVVtAsghDh9zHE6sCNggnb97HjZ27sSL8pfeKdLa9uxFZZtAWZmtLKvjfifHwzSQVR386AH31VskigPxtonx",
  "key10": "3ndyJhr9FBZ1uhArj1LM4yFQVKu74zoJnHTdsuKGwxQuChStSs6FbrvLfzqPL8A1zATDsvbrcBZv3eqxd7qkn2gn",
  "key11": "64EaPrV2HZHVYp4U36VrAsEmTYofyqDzv76crsrzvHJLRF9iZ8G4CLe7Y3nVw8FBskJWo2ign9ufsceNsa566WG1",
  "key12": "4RUVqT7c3p2uaz4wxXTXrkD4JD9NEWiosDFUrJtfhLThPNG8nWvzYrYL6Mxx1oFmpfU9RXSWhREQqMfmXDoLV47x",
  "key13": "oA5mjh3hq2Yzo2YoUXLvtJndJGvJ1TfmjEGkBWpRmcr68tvAfwaTJvP41spjkWqWWmKKLbzdT4EHdGFD3u3cfLc",
  "key14": "5GEATkVDCamGKxYfprEMNSjEDQUvjomYAkxRQSa5fg96jPL5U3yUZKRhxHcrXvmCB9868RjJmZBqa32AX6RryW8i",
  "key15": "252v42i9hpnjdNr1gpRUciq4mrmuncyuXcxG75iBQEUtGGtjeecgCLDGYosWHRKribdPqAbtGaRvLf5CTvkm4BbL",
  "key16": "5ZqYHV61t9EhbQ4isSKBfkYCbSSNSyQubYtyu5fezB9Tr5LY4JYTH5Kw3e4RUCvNeNyX6GVbuN3VTRMc2rBB8MfR",
  "key17": "2gga7LjBWUZAwjtXbwX2b63U8jAUGK9pgsSvw5H4KTEycwmG661jEvbMW1J1j5NZBCkFLKfFUaFwLPC2RHWMWiEL",
  "key18": "621ceTeWsYjsoCaqWxnLd6zfB96A3C9EuPCVJxmK62jNmpwrAEpjbR6TaBH5JxnEUv6xwTBwzHsBEPM9b1DTyKir",
  "key19": "rxBHT3uLwm98dwX18VMJ5yuQ6TWLEwfRLaZQrgybf1uyashu7Ex3JFm4okCdkRAmYE7fi4KFyCKsceP57cHaBob",
  "key20": "2HBNEDJqF76o1MNed4B15tgSUfmqLZUjXMh97CJHzZtgds1Ydepgem2i6nvcqqaKiX2nHC6GFWx43yq7wTyK1scB",
  "key21": "3PBaDvTdgB23fcaZp4NBDx8825yvWGof9hvMufUEKHZmRA3vo1cuxNXkeuPQaM8ukZTdgMiqwsHudomHCarE6VPh",
  "key22": "3KH1TyRwYRPnvriP9MJ6w299J6PNAcgLhjEprpHMoKw1EroMRmRPP5crPUGYY4NqG6Ae5FXXxV5F3Yim13zWWgPA",
  "key23": "LsmzcivRXfCZvrgC3YGakHRZKx8ZMq3vBpWCuGtdajXJ6BS3FqPAPg4Q5wDTHtbUWFPoR6G6a94G3rCaAz1vJjw",
  "key24": "4ySEVzydr8KeUsedDmiXv2cH1kMCYS8PcUKKahgQTQhdsgzQ5YRjQE6vQoEEyvAK2xwRX4zSjMeGdxWP7zWVsDa9",
  "key25": "2NNihjEyJ3s1RWp45HVBcjfT3FAgQvWnnmBUoPHsTQ5Hhuejn34vUVAtv1T6degKZN844NeA6KyuddVPTGC7MBER",
  "key26": "AUQXjqnrbWYBtRSrejRZ9jZPQ6sR8KRot86kz1Q5MmQzARfeSxPxejGnshwGFj9eNoS4K31ZGy5foUdNNT97NXe",
  "key27": "2aTQKwiPYPESuQz9sHybmXbacuPLW5i5a7eSDFMpYAmddjVnLZZjpxEV1mnPeFeRK3j2poL893MfsEGZp92Sidw2",
  "key28": "27iqbpcVRGfcx373gJnh9pLYjXPi32YwiZLH3r3yg1iABMPfpWVSYWEtGJKuvf3obrRd3FTymv22Gg4aykUQ32bi",
  "key29": "26RrsyGMJTk9LwtrQn6h6auAGGmvnscC44amWs7MffLW6ThUEa8nCcvZnXoBJG4JTDo1oUZGF7KmVMBYV9CMj1UK",
  "key30": "foxGv8NeMLxD93c1SV84wcy3C8taiSdTGf8C2i2oiiTHpto9nDTiD8ZhpdKtGam4Sn2f7H91YZNHsE4xdTZBiTr",
  "key31": "2V1rPf22zoogPJnToing2f2sXMm7ePHY2XJyDMFsyxpzR9JTL6YnrhdRE2BahXgMJqq3fTRyuVxQKggWqonwccSA",
  "key32": "2H4ReFzbEy59eUR165ndbuki7T9ep2BEvC4kxvJq6rP11WH7ynfZ6Cy3f5xrSory82hhEKrULKu2oyDMnPDWmDZf",
  "key33": "55k3LpHNU2JweYYczXZRHUjRQBb3CZ7y9EcDeNk2FJTVLY4RgP7TnLw7LPggAUQPBe848fiZfEtyRTYoaoY4cgho",
  "key34": "5AA6GtPESehqtpAsYWrmFFyBNEPnZTTRXDwXUpbowvvxDHvgjxz39xcVvYtM8FFvaP9JuM2tLqpwNNkYBUAEvLno",
  "key35": "4RBjkdKGR8pPtbACzJ2e256MQD2XdQtctMJppu8J2t8LErxVihaMXqExfuuvahf8q7pCAFQbiTMd6Azk7e3wmxTh",
  "key36": "2Uq6GdqgZBGy2LGKhGPh6BjMrYH5DioxbzgSoYYAUZP1GMQupSgAKc157TA6WsdkUVnAKurcXfqKL2bkif2Pxire",
  "key37": "5pCjLipyL8VgY6NL9jEorLSV3yNdKXsxDq9MhmAMyKQBERaBWiruo6th1bB4niawf1SaR3qdqmH62Mm2magrGkCT",
  "key38": "8H7iwvcd9qFXNMscjZTff6nThRqoELih2hsjXEhhEvow1GMEn52i4r7QPuJ8Q5RJmCT56nYwbXQWKTiKF3gwmU2",
  "key39": "5pvk99Tn3NGPf89SBnqu7WxfEKgPNjxYtWHPyjc4mLkaAPsvXg1m28ZTL6uBrPzM9cQJMXtwPErXvW5ksfrKC5vJ",
  "key40": "41iqPqfJccY8BbXCDFTk6U8tfNd6o8P4pZuLrynNREVCoWPWFLdy45YaBVKTsLgtyQe5Fj3Z1J5Ee3niTwFTgat4",
  "key41": "4sEepWNYpTjVoAbuq5CmY5hdoS836ebmaAbuhxKJSLAUUiaAvfG8xxzRLUaq8MxuHipowZsKnFa9FEnjMaR1Hk81",
  "key42": "2UNUFttLqUUUq6GvKA5YiTmYYDmRjGCf9FKLjvmmsZjGEkqL4ffxN37j8Kb2duN82mCTX2otN4P1XcGs7p78ZRfW",
  "key43": "2uf9D6rAXZZbzJgyHGtZU9kSzrfGzakBAYLyr64GzrQz2quaeY9uniCJDdZ1MWTPQycJgbSn1MSNhbD51M2oqDxU",
  "key44": "8WJGyAPypxcWJ2Krs2Ktuzi3aoSsG4wbgPmQbwz2wKTnHMw5oxAx4DqX4Axcw6ycakiwn8xrLqVHf1wk5A3yyhu"
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
