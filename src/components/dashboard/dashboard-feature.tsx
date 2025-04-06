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
    "6tJe4SGD1T8kxT4WnyWTQiFmL8PSbDf15ZyzJ1egwcqts7wyHpktuZJv7axVBCcVrsv2KgLEqmBM96HJpxyjrRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "217n9CgWeivEBNb9ifaKkaAUXqX5zXNBQZta8oMLWJJKGtwbX3pJtZG8r9DXQcynJx1zB25vBxqGu51QCBaAQ6uP",
  "key1": "3wTFQF7DU8iYvab5RYXpkvNAvfGiThEVunRKPvMJhyHNJiAs3LTWByBFFKKYYq35ynxjC4Jysva8HvyYeUz1GqFK",
  "key2": "4gggDi1inCpfp12KMfxV9hYs9NLEkuBy36ZqayzqGeiJ9MUcqhK3theE88SCmMHbVUYXbz2E8BXzUWCK5ScXu1MF",
  "key3": "3rPVKgJu7fghpmEU3jvSDeb8ZLiPNJWkCTDQQSBAehp1UDcfQFHVMxJrBpDCvwboedDpHPe9LYRVqE9AgpF6bdz2",
  "key4": "3tuBMqbU2YCwr9AxJftAyTiYJUhsTWdpSBJAfwepQkQTDWU6PRBECfQEbkqTdrsk4mfUaqbUVniBcPuE5NSkimCe",
  "key5": "3RZT3w1HgRCW8Qj7u6uC5MKWwiCuniG1HKj7Gpb4eVya8td31eR2PeYuNjcRMZTAEKKd7eagkuFEwSPqJJRM2dAg",
  "key6": "56MTQS63b5ZBbsnjQsHTBb6z8KWMaDg34CZQokRpqtMw8FmbMeAW48JWhLSm1LFLcEMxmyvsVCd49z89D1jvTVhr",
  "key7": "4K7N2yuLPHBctcBGsF5PxtvTiS4jYUS1XzyejLfJrW2x6AE8v3vGdPFxHzRcxBwDSvRnrFvkLH56ErXkesL4goTT",
  "key8": "5eVoftFn7vJZQq6nnwogyv8mfswBm7vEymf4aEd2tNZ47dh5u8bGbLVPHZj9rJwANNdqiJnv9zf9Bp2uRUTYfwpJ",
  "key9": "5Y1hHTQwkfXmdzxzWocH93dRbL6HARZ1P3FdJJq76vpzSZhMXUj2u3TYXqadkRAQK836yXbFsXwxswSur61P9MEQ",
  "key10": "jPTtWG62YbLE7gsmYBPe1R3dFhLMw1AkHw5zU94bpLaR2XgUwpnnMMRxKxnq7JaXVGqed6vNqjB4pCof1itD1fC",
  "key11": "2CuX1uAFPB4XPGtXZkjnGQCtbRgV1gxmLrwnaNxvYUu59QuUcaaXfqUCAPNYyZ6BkWb5KoWZb9k8BYBngrKfF3o8",
  "key12": "43Be5kDec7oN2U76mvei3GzD7mG5RyD1SA1XKPmuCYFqs71ZCCgP7V2UtSYxf8XrbNRehkvHK4HxXdVXj6356r3v",
  "key13": "oBNVUfU9KkSdRr5ooofFR8ov8vdUET5WHP9UV7fRJtxTU2r8C44wZzGDt4pZxvVZskjHHGshnczuAzaxhVPa8ra",
  "key14": "5PHtxr2V4RzkbLy72AEHNHZqBREZ9zZCAey1NJTwfFe1fdNhs79KXkfxbrb85KkWy3tQEqh6kDhFFyy7Eku3sqNv",
  "key15": "T5zQwZRitQVxfoehhUDkq3u2ZDFmic9CchgfS3M3BYfz8bX3t8kUVS7jVTRWFySorGSNRca3mMAgT9kvMaUBH8N",
  "key16": "3q4bEgkCWjNPcsNwSKTufTRp9eoxUGVXNbmwsub6892htZdhqMLqDrzB1nA4tLj1TRA4rDtoAhDbPMWAwwQCfyUV",
  "key17": "4NnDdzgSoRomWJPP8zuQWQQHmeLHqeFjcq2TVUdbjzeuoJmD7JtEjKcaF9yyst4sc3rHMesqVAggZXNM52Wbzeur",
  "key18": "66oMCRGheMaGBB7DmsqxdrEdj9vjcdcbCMAXp5dCwC6aZ16wmBQPop1gNR6jhBzdKw4NTH9UHPAkLDx1KDogZqMT",
  "key19": "4gnpHPdBHKphU4GqSFEqFBKsV8B8hwz3ngzo5jKdj7B1X679EQg79ahequyAv4xozjMcRmwLCJBS9y3byfmpatmZ",
  "key20": "5ko26DzwBwL1YL3YtRcNn2pqjPHDZXQtTQja9FyJnz947kWrt6vw8GGz5vjMAaQaL4Zvub4Pra9YpQBaRcnQKiyt",
  "key21": "2L9zvxFEQXSprw84VeXQxNBq2ESrcsCZ4fLP1kPafgn4MHfNJmumkHhd1XMuRgdB9TMdf7voqYFfDmELtDsEM4is",
  "key22": "4VjGBWYYD3TCwr1egXUHtrrcsaHvh5u3u7JE1S31DyJwbXcueuxJ38XJv1fWmgWJYE1RVqd6cq6kN64AD8qMQCCC",
  "key23": "5CQMcTtaYRraEPZpDjFLHwK4taqT7zUEukfSe1uzqPGjyDT6pMPvmA5dDmsiUPTX4EuFZeXQyg7jyKs4FiE91MUK",
  "key24": "JtLNFib8NYBZrZpi3DS583qSywAWtqKyHY8DYgNL2WLXEhrTqjr8Eyewjm7jzxjiirKjeiRoqhn7uzLP33jt42n",
  "key25": "5ESz7eYuwBNeHsLVbpQvv7gFeE7FHSLkemJht6bhJe28qho5ThF6vDrqLrZKchBoCajmVY5gExdToQekT6mPo1yx",
  "key26": "4cvHGdSx1omgMdautSPfNL1aFghMc8CA6V6zr86HnPKGKTwPin6LHBNZQ56uTZoy7NJNbuszWtyuEY2zpWmRb3d6",
  "key27": "4YZS3PgAFoLdNBvFegtSwtuxn6UjGM4pbNtXRspyX3eVWCJVBbojvNvvqKzLwsPSYkVidKVE2rStCctN6ujr3FK3",
  "key28": "4fQWQT74g5MPbh6esyYJ6qxWUnjRka8pxr2SqQz73aUKNHvJuhgAotBCrKBhA6WvrfgryTc4dDhENeg6Fw89X6tG",
  "key29": "38z7xERLL38BoLa8sKzm1jVonLy2KDQUeMxzd3XnpLdr4qAaV76V3EVc9ftD98vsvuo9ZgKbShNdMyQHZio4JsLb",
  "key30": "3BWUZHujg9NaxdC8w9odJoex8ChMPGyZLNzeFua9gLnKPcz9gbmJ6AHdCxWqs2bD5ngQotNCoPBCWst6vsq9EuLm",
  "key31": "3LpC4uVHnrsQickD7bAcMGmK6rh8DmHpAmy9UJ4vB5jHKs83eNGb5U3FbdqNkEh1MaqkzbWiTKDPsbAzyLUfGYy7",
  "key32": "2sRUFNWD4zUceik2Csf8xaHpJV8v8vCwGChY2geSsd8d3yX8fJLw8TQxdYLD2xCb5J6NvHYM52kj55E3uyXPPdt5",
  "key33": "2ZZ9G2DvGyNNJYKaPNpngaDrye2U2zgbrDP8xfgRbMHPoWrco7PKEXoa2cupEjvtwhHepRTt1ZxS7p5qwKnEgqQ4",
  "key34": "5xDLdRQ8RZKy3ZdRWJUNokG3gkXBMSGcqbb33UfBZg4i6mz8rvYZ1XjNS1DR63pwS43SDd5bgWxmdkCgh6NXdZpj",
  "key35": "cAGm4KE4n6d4iTMgNeEmArAHbp4uaHitVXwNSs9aiJH9Q6RGJPXZdjTYKCYT8rgZThAaQbXcxDTgcSbCfVJMJ7D",
  "key36": "4udsKDKJDzPZnkQ3jdsXHqrCv2BDDPq1Z63y3uJ1zMt6NrprThQNhVWEQQbuM5aawpaQGygQvaSyRs3o1EEeb88J",
  "key37": "4MLN5hnieN7ZBxtDsMZUrNfr3Co49bqENyDZikEEDdfFdxvzeMBwEFfh5Sy2DFcvwawRQroMvP4kPWhuASWfy3ki",
  "key38": "5CDgFDXFWcd11sNoArhYitTzqi39yPmgzWM7PPrjCke6cPFeQn9Qoeph5oeBBuznB7T3rWi6hqRHSB3sNEG75DB9",
  "key39": "2JrFkjWTcW3XBmngWxgfXTWcDTnwyk6XqTb73GLBR2TJrThfDaGnW5TDZSmgey3vgYNgHtb8WUgiekzPXTv4bF2m"
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
