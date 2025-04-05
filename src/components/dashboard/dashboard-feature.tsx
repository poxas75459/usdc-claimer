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
    "4PTXpbibeYtkpY3KDSM1RzADu54mF81gAkqKJ8sHLwkdsLjhwNs1EkM8Nd6Kb8gJei7AeEV3hLJ54Ncw4Qwdwj8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ESVYrVfcLvQxpF9t2y5TDgcpKAoxjCzWYS9VcCWrrXgEznDBZWJTrb4gAL7miotPmZXUsCkgbN94udLgbZ9BoMH",
  "key1": "HV9U97eqfVrKFKeoY17qt1JVfty4vG11xJbKEiQ5oSN1jWfcWyHypCKD9DuZ2iotWugitWSjyBsaRy7gMaRVHgo",
  "key2": "4hmcZPEvZiZaxx2oNrPjXQwuMgkvZsM3jJkPtK2nK73zZeGPk6mNgfUb34n2jmpZdHkrUYn1R722UVDqfHGFMSbM",
  "key3": "2TXMXYyuKbitvHK4RGxBxfA7gGiYyHFDkE8SYkRVtjpR7ao3xx5XAjybZ7sncctDNhKuRxfLre9XgpGVponmRgVs",
  "key4": "3rCLDAiix9SopkdifoWFViVmNp1Vo6EM5g4PtfY1WTb2LMhp8vMVyLJ1LMpQ3nMSdiXA53FxZDcSZ19Sd9CWNqqm",
  "key5": "37u7zsRWBZ4a9hJjupjvFcFSGCmMt62DtiQn4UmjK4deMCkqwtMhhVyTsARBfMHaBegU6fwXiyMq3ZAwGqGmwPsF",
  "key6": "3WWoeHK1xR7sNL3sYpPdTjwvBY9W5wxm6sQMWj7uR4US5vUFLaH4udbVkRYsgsBVX3ywJHVvJGE1oxprsHYxTLmN",
  "key7": "4myxpFJLuLYc4JbJLcicnu2Zo1La58kncDDwkxHokKiKraNxjkFg7fVyvjrLR4yEGDLTAm9kbVCvN97fXcRhjgu5",
  "key8": "4sprNAyBP6noUSViWp9dUuTRMGZcDqr3Cje69S8TeSrpDGYwyzJfS1vWYvTpmVTkTiZzm8em3UyNw7dwQu5H7SiC",
  "key9": "2VijMR9FSauUB2mErf56n9AQRf3oxrKMzCytjcfSrAw87zE781Rv2fBsixT14CTUmmrqLpWWxEXEEz8nyJ136XcZ",
  "key10": "4hMeHksj93ks6fuxvLHwviMXCWwjMnaEy9pQ5n9hj7da4xQxyxddXSM4jugMNbo3KPZj38Au2b9sWqfDVQWP94LX",
  "key11": "DgZ5QpgzN88Zysd38HJmY7mmHctMS6AFv5TMaZLBpimVe9Sw9hh1nDf9v4JmTyVAM8J8qiGiWEmRgN6ZNgFmCMz",
  "key12": "oZXJS9qADnvARfsgzaHNiwfsoJUyDtrBSMSQTMJSQqH2HD4RQPPBpyHKGPpGn1Z2WArhVDtTjcHS7PHmXz7C7L6",
  "key13": "53T8Roh7kbVTRaMqm6VdwMRiXTf6pYsJmMR5KrSNVvwckHYehsHZotpUpF4dZN7TFRTqYpaS2UCin459vrt2gpzV",
  "key14": "39kLGvvce37wtuEmtR36dGk12rtoCjvgCdQqQwTiujNGd3i9C5N3z5i9TqLkr7TzQgc1mRJmk47VR6NEZRyj2QcA",
  "key15": "ZSrSqf9Ef1toFpzGMFGFuF11yrkcC1V4qe8qT69R7c8J3Dgh6SF1Ke76jTG9wCZ8rVUbj5KCcQBnBD2M6aTr5Be",
  "key16": "tp6PFwQDDaSsjU5nkFHVFhQ3VKRMPujGoZ7cSPWASnhv6JpoJBx1e7p1bEBucTscY4K2q7V6htrTtYo4GDRCuoa",
  "key17": "vgaMEqoU39nVeoa7fHYtg7PHf2dBBdnUuXgRw76jwvW46us9YKLaPyx85CVf7jEyMyBmYQr6xCmks6TNhb6oekq",
  "key18": "iSbBRvqWKuJLykURZuRUh4rftMo25ehsXW6e2P5RcQ3WcE9PscTKVarDcYUNWfeCie3vWBwGzXBEdm6UoqLcEto",
  "key19": "47DoPxJ6EqbBtLD7pqLuJBUXYd3gqtrMa59CLuWWb8gf4A9svz1n7qdwFm2HyCq45XGTi9QYWk39C6v7EpBX9Psh",
  "key20": "3XS7Mfq4Ds2FzoeCe7HQpHKnKsxoZwsds3pYU1HySEVRSJRk4Y1KLJY18r7RhJa6MT6oqgDx5yihNst4YgX6uGUb",
  "key21": "5SSiZBoifPtfeabP3LTqh323EZH8wVgL3N1UPNy3okWKNZFKf3PCNULV9oG3YoTYwTb1aPsr9xbK6sJ4PoYS8Mfj",
  "key22": "Uip117M5fiRbV9RFeyuMyZUHAr5x3s6RYpp5zR8hryAdjnUZtSvv24KNusDySKm9m7koroWnvBfAKXcFupDgRAQ",
  "key23": "37EvNBZQM1LVK7dX3gujDcQs37jrneZN8jHxHdTDto6Tr3zdKjeAKeyYUnjKzYaRzFJUnyjgyYd8DUHwLaT8RTtZ",
  "key24": "2vxhstQxewcyWMzMBfm8fxfgS4GvshaTfh1BnPcZ38VZ5VBassSetFKhaiySReQNXCDwycNfwDAwMkEjcBa7KByY",
  "key25": "3sNbRKxWSLLmQQbTKoxpRDVxW7RRP12PFkcvshxwX7hDxoqyeqnUvKM8chM36dB452GQer2vHdVJHNzZADgVSocg",
  "key26": "3hib6ucnFzo9bvoBEp2VEWNHAmZFHW82aAqajXU3a3XkAWYvJ5kZydHKE525GQgB2XE87s7xpYZEqhp291bRGWnW",
  "key27": "8ghiKzpDPZn4R8vWht6b9TCRHRN7b1HCYTdGMqBwVpr8SXMWfZGKnapnVRPUDSBLwG5j9MgbXRLj4g7bXCpUo4s",
  "key28": "349dYXFmNHQLWa4shnMmN9Fsj9GtpBXbCwcu9UEQ4Mxn6MZigZEoL5UuoCdU3ZLuT43n8d2ivhqLiAR6ntYKw6wo",
  "key29": "bH6oSntTbuesrLTQyP1EM6pcZ2RCRZrF1oZUme54fVHxvCiAnbmAajYs42F5vc2RmXkExz2ox3ShWQWkHEKLPBt",
  "key30": "5N3uh4Xtbx5JkJZNhkbg21wjwsVA68e8HTdHKS3zqfCqfuP4Ec4jwtnpLkZCePiiPoy6yEBwGKP8dbiZGMjihMfr",
  "key31": "4u5a3xb1EdDHLjUgvtonJCkbgmjnmXYsXPbvduaoXpe23pmBbXFNatdTDdBWhk3cchLJNhwJmw6UTyYSRY6kY3TZ",
  "key32": "2sCGCqheCuqFubyWtYRsVt75BwrRzyE4Mgcx4qZnHCGaxpAp4NR6raybPQvurCfxocfS9UuCVEPXfkFoLBRkdSAo",
  "key33": "3yNtde5EqNZEV2w71HbRTsMk31m2QQDC79LXMgPzo3PAQ5Asxg4VxwahrnSCVxTYbmzgoE2LwhQAHhwveXSeJGVj",
  "key34": "58dUNrHYpAGtJatHxB66DuP4TCP7VThuq1CyvdigRN19BXBvz4T25gr9Be4EPkfwE4AVdyoALnU8WFKgHNJeksfd",
  "key35": "2xUv6HLybGzh5JUH1nWzn8hV7W5NXGScSmBTJ4ENryu5pMM6Sm1un5vgBjY3cf5d1nEq21T8KHzkYZvg7sGsYJuX",
  "key36": "32Bizsqi1d7eGEdJZdM9bAs2R7m5WUS88Wv9scC7VqhT2HAUFRGuxghBGZxxjqbSfvj22pEQo2B7MCYDWr8tcAkU"
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
