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
    "51o7pkGBE3mYt2miQxmDZHVuH1DguYHfNLXFvpjmLW4PdjakkeoKrfcVMq3qsGoo7Y7k5by5wsFyHF3SiLr7SdkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ngiCKGpSmWCvXQDKEAVT7ENi5dEXcNk1uhxym486zWhJW6b7BjPQYDesU4MVucpYmPUKC67VRjKYAopfiXsREjM",
  "key1": "iVfaccdFfBsiLdUAH3fMp9wqD5mEDC2giodr6DcDYG7Ty4jfiemJ1nrpi3QZZV986hzfLfzSy5Mw2ASgnj62AHb",
  "key2": "4sWS8HGUmqYFFmnkkjVMA2mN8vyyQLoJhvBKvBF5cHPg3wLUAqnKPzrT8ukeeUCJ3DcryRrJvajP8FXrwEBfqCpq",
  "key3": "4Hpj9UuHqbhQLeqg4wH1mszKjXZmqna5suBvBA57K4cea3UkxF8vqHdLtUkqtsGoFA94DTNusjxyDhEnV5GVy1Ap",
  "key4": "62zhcyjGn9JMgUQQi1Aq2H3Kfuz4So8WgMue7mTS5xtR1qwnxfK4ycFRCs9niKx7w2HgqfkvUM6j41kbTZqG2aZ7",
  "key5": "64UY6orfabXtYH8yKdtVKQy5Pdwvzig9VqY6PZiVsSoS2RyReWKsJL42jDRJkK2t9CiNBZ7T7w1Yj92EjnkQfPtT",
  "key6": "3Bb3gSQBE4o7EjBXhx3QxX2ncYg7FaCnfuthU3jU7YTzCtwSCgQVf2cJiP866BLHyRaoAz79mVW1J6wwNBW9QHAs",
  "key7": "JWcKDD25qRJhLjyUvvVYSt8QyyBxuAKryW4FsXYQhB1URPsynebd9VB5Kma3YMVbzwEAt7ALZpUTQkkHNoFZBEv",
  "key8": "34sqetAW7eRnbQnCA9Zaixs9casjt5kivoskw7wkWuTaapZMrzJEo3QdUVKHad1dm4bLtv2Fco8R74oYXcxcDruw",
  "key9": "4ubp31sARNqZisQsRicjxrziSp5Ci7jYALA6tTb7PyzeJdWZ7dbAhCy7cAGBHPtC6RjdppzpwahNagbcvD9M7Abb",
  "key10": "3WcNZri4KSPTH5u688gWLp5c8kuDjrQYeQw5cMz1XA283r1t71hrm2UC7aVY8AFjUDKAmR99BtL9CsjEn3idnTUA",
  "key11": "ng8gNbxSQDVez8gDxAHvEd3pgX8HVFBfeSwu6sQrAy991sUBREMUuKxez3jJeaocv19ZnLWw8m81GM8irgHXsmL",
  "key12": "3d2SVM1rqYxz7oLZYrbNKr27M7YFVDDqk5i6e18Tt4VFwZDUAy9B92Vg7CZ4upE7LhBxWN6CUsJw2F7t4o5y8nnj",
  "key13": "L3fRMx27w8TP6vYX6p4DFs4FJePVA6SYM4A572JXXKULizzt9QcWfeTerWSnpNB7yWDgcpU9ECsJaYM42pN2usQ",
  "key14": "iyvYkSgHMuasi9URTZqv77uyz1hgX1e8htV8UzxcCSGonWFZNYPwtcCM1kqpjX1dm1bgPBpg6n9NFi3cRq36MVk",
  "key15": "287ZQ92A2nELjjqpUuPNod77GNKDrNVeAqeaVFGz9o9Qc2DjH6dLiapYiWf6rtFnoAqCU5PBADxanmpwEdB4h7yv",
  "key16": "2y7pYtFEnxNBrrdB3gzjqhrbKPWj9JqNSHvFJGXY7vGQMQmbeGHH3vVzMPxkXfzgpy8yVxjEnfjz75fWKLGtckt6",
  "key17": "2ESdBNWAutHqhyBMpgDKqS1F42yLZEXb9BcuVNuh1G1J4uXuZPE3w5RMTvbCoc1zqmH8jrZHJagzR98vp4yHfKK",
  "key18": "4otPdN4JKG17wPocKhGSWntDQJX9oCuQcurAZ4kCnWa4YuDaNB5b9Tu8xNcbbikRkX6csh1TQUxNUJVzh3HLkMc2",
  "key19": "3i7Cj1h6hsnHYWSaAh5ZRfY2wBL61Di2WKVS2tckFJmu1tA4NmSjpavg6NMPb6jHmtwqjrRZNYL4YjaHWEj74HtS",
  "key20": "2TthcF3KnAFwRvHYJiFohbxVX3b7Sr7JLmKZj6XkSSWiLFGDWjQpe1RoW8M14oGzVRhLAnt7RQfnjrqHUkg7U463",
  "key21": "3tzMoNmHU7FyAbfhoFFHmR3niY4L3tWuykkG3Z8Z16ype84sChGGQQnisSyHrPUFkktvSYoXaL5UeoiKiVV7kC97",
  "key22": "4BRAnVaa8tDAjcN2mQkP84fUro56HvEVkxeuLmKfyarv2RAKEhc9VMuGEHLMzzd5qZ7B2R8qvFs3PAPmdpJJHWAq",
  "key23": "p9nnFYFAvB4bQoUye31M7nRXdKB6x3k8z9Y196VUM89LrAUPUfA7iRYEri658TGAYYBmSEam32Es8KUA72HdFoi",
  "key24": "4azrgtYJwtyg7DqjwA24c4MsutZ1gisKY2ATndykwCXMgjBBG11jUJkK85EPgeaxzx2CwAHCAmVjvvV5EUtJTXgs",
  "key25": "2GxAQjju99Mr2akSo1U6Pe5DhRDxcRXGcq3W1ffEGv9eod6fK13jmd34NWEAcfK3qWG3BcBt2dqCDSvjZSo1AAnn",
  "key26": "2UpxQFXs2mvj7E7FTLFuurnqgKPZ84ehx6dNFXy4sZMT44mFWsdJDe2UytwM44GrYLi6vbLDUEnXb4qcPr4icvXG",
  "key27": "2TWi14inT8jyNFjfTh6YvfcPBU8nNVUTawaWopAjR5pTkmq5MHaut2WTDoShk7ZHkr2YcFg3KnQqzWWPG4BaTQ8K",
  "key28": "2uP7KpC7xRtwsukSzYdtuiChfAgChkYKiEuFMt1RY1euC5wktEDDyAa4pkNFw4zCdvvFqiznzghj48kHKy3EvMht",
  "key29": "2pa3fjo45nBGGx7eRc21DEDXNH3HaEkXzDv1C61DjbxjYyVLo3GgcnddaKGCStcpiM8egEtbixGZCutPnodpqxxE",
  "key30": "3nwvxuXN8ToWBTSXoH61RJGqp1e8XcCKkyYmXFVgA3DtQpMRH7Qma4Fnmnms22pGkdnyLdCW6QuukZ8f9Ni5chq3",
  "key31": "2DAh7412s9FsuVhBGopSbUNdqJxPxCUt55dmBzcUWoBvonxqirfXxQZeoRz1GxGys5QTYPiUaXrAyfVeKYznepGh",
  "key32": "5DgjkPipjCBnM1xWSQDnFSFtp1HxFvGPKrDK8mnJwhXWhQ1kzJ7KCHdwEt4UeRuM6wJkE7xvPG2tdpn59a32aDQX",
  "key33": "CoXF5qFyjAtebrgPSU1h4DztYskVEcaTaeVz5yxHLzSH7WxpqDTTuxLsUxFHJJAACXa6HnsYthL2CXjzWZ72u8i",
  "key34": "2a6tRJfuWYq9dng3MyX2PaocssYa3f8MUf9S9Kh27ZS27yCWUrAshKKYHcxEVowz51mgjYY8MxRMspAPwWWAY4gA",
  "key35": "4EQQUaCZaLmzV5syfzZoJAYpqiG2Bzt66yGZ6gDoCwFYah39E6YgQHHWrm3nSdaewixLV1RLEQZEKp3SPaABqvy2",
  "key36": "2ZaK4wvesvBRyQBXoK8G9RcauZ2pY4nVjfvhtdz6h4feJVDmPGoDDVuQZHUEkVxMhVR6jvJ8YCkHFCkdBwYRyaSe",
  "key37": "TPQLi6ps4xXcweWCEdBKNiUN9r2P7eyLE7dSa6x9dFsGhzKanFEK7ev3T9XH4M1ZSHmQuLf8sagBsRCjxsAQbF9",
  "key38": "2R7DSNCiGCyeC2tiTq9Rus7UuYBBnejShiuRvJfavr8byLDUEZ94rQS5hWEtAjGYZYg3Yj73XKE2zBewnshKhmCa",
  "key39": "225YcuFzwHgeoTVYDaWa43ksaczbtqMrDmsgpcyd7PTUY68jpRtM6NRPr57mJmPQPw2L7yjomHpyDzp1zBmj1oSh",
  "key40": "34Gbztq7mUCZkZfw6qQyiXMzrwn7QW1u12HmRteNuy85u7jb4D44NTVTJxdGZ4JQkyMA3DRMwPVYDnb2yaRDSD8d",
  "key41": "XqwtTjdXuiUXBNS88qNg46oPkSerHWjXSqmC4XEKMoq4CAj9mBodNnbJ583tUEDoRohtSYjeiGKwFTMXzKMnvcP",
  "key42": "vuy3HcWLYTPC79AXsnhPhf6cAJQHa34o4hfnkdFhKPhYyJG9qc12Eu5vong1mkjTqRe8KgfBiMP7DbgpqA3a1cE",
  "key43": "2Gsq5nkxwKr6h2MbSwyjYU1i12V3cT9usoEvE7Za7RuAcECzdnLmkWTG4pBW9DJ2nwZc8xSD3VgxvnzfnxsSMKZd",
  "key44": "gXSrCoKobUvFdwbMuF3PWdQeBFuDmMm4Kc9s2U74qyTuKvUHWQ4vbjsk7NB7jf8FtschDmbjjnnHPDNhZyrTrUU",
  "key45": "3Q2mk3XNq9qtshpd9RZJjjmt6jfnoDC12LkvUrMXHBveoqCVpXUrq5n2M7TsEbD1Zx3h4Wygjdabt5Ri8phczWp1",
  "key46": "48KdLdRDHipWBEh2dcHUXaprYybvpTVUfqWpu247qZ9kKjeWd1dhaTBT5CiXJdYDHpb7Gob3rYDcTsTp5yVnEY41",
  "key47": "4k2brztLvti6ogmwWktdUgCukvVhsixRK8DoZi5jpQLQfqTUBWtJysF1SD5EGWsCs1pxtauot7TofNPqkTp4vmhr",
  "key48": "3KcZYActFhNERZ9jTbkr1a9S5Z3trC1w3Av2VdLGuFxSkuLvozbXRqBYfwF7RnUfB18789NreUjcHKgapqGHsAPs",
  "key49": "3g7pPFepsv4wwjm3ph49TdEF1dpNiYNxhMfnGxD7JKioYoGXUBHo9ZcWWUubE59qr1BntEuQ6Qjr4gY24ozbNgET"
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
