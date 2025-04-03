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
    "4FoGB5XBwJookiyNnGXrHDsfUUeSKjPSLkUkwbgPLqyC8uvnZqpYnQSjsWcjgrZZn9To63emxzbTwjtYgN3GV7nk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C2s4NLu3GEgtzZDRMFN9BGZ5mtNTXWdoFpEe3pSxQuNAQdhtJrSjisnU2GJPrRNqrkSbxXixLWGVYLv2D1WdEVF",
  "key1": "sgkbwqRdNinuqZciaj9k8T1CZyFaRcqfA1fGZtRY7J2bwJ2RSV3HiEF3BEBbHfezePTQm2BCjbARZrwuzg5DspH",
  "key2": "4hZ52mChLVA9P6sntsJhRZicYR1yxKUZpmueFeRybHToHQdFHDiLMLNU7GBeHKq84dE6HyJRGfJVhPjvcWHFLtGx",
  "key3": "59mFcFciy6Z88awHXrJWZUovu2uSrMEEewcFpLc4RBGk1PmMKLt3XAbnfK9x53wQJLWsyh1Pw761G5ZQ14E5mgtK",
  "key4": "dvtQvaVKLbUCw5t6NiJXTxSUM3CgTTQgaehhMWQTz7dZyk6ir2XnVUVnfTEEhz91kyQmzoQHja2XDs3fEVaqkHz",
  "key5": "57BGrkBMCjgaoZp3K37Hi8Lz58WaWazGEj3E7jVDNueBY1mnegEaLrFW1fu8kk38fDV8gh8dXuMeGffnxsSkzxh9",
  "key6": "oeoE5BepCRyzdaxSqLV3fy4oQHQ2SGrKWmq41xjqXFfMzyecruBzGuLoBbyxYcc6ppC1WzeoJREv85QE7pVkWWd",
  "key7": "3eyxjiorSCFPr8cpFJNVZA9dNUVurimoiF6epgkVdi3Ve8jkcvgn7pVZ7drWBdnhZMEMQTKct857TBRJA72jZpVw",
  "key8": "3rXq8fWK6ATzKo6LR4uDxfKsygN42i3nBGvjEmWjmdajDKJ2fk5RSRpNtEGbtypN9ahe8AB2Cq1HxDm5PU6dGexo",
  "key9": "5VkVBo2wPAdMukcKbhTD1sZmWcJWNDcu7rpU2ajA6e7f9e8dvhDM8PMPK3A5P6odKEuSrn3mW4sSjZbEqtH6RbAz",
  "key10": "2e1roLcHLSg2Lcz2hswxMtvU8x9CkxpHmRcjttGVb2Lqnpy4B6H8qDC2sNz36DPA2pH3Ld93wdgBANLpdRzorWRi",
  "key11": "5XAYUqgEokpGBjBEyPb4nJDQP3oZQnJRDWQTmxLP6ZsdcNF1ohUAGfhcRnSRwR9VnhVJo5BuiznTFajiKZ3ksLYj",
  "key12": "iFJLCMVd8GsKXhrJZmzkH72ftV2JPcBMLbFD5vayjFYovHUFrUwnrCHRCjFCZhpiHDzYDsaewpo6ZqjWf8k9pjD",
  "key13": "4VCT73uWdA3MiyfMHeJ3x21Kx7z8PY3SuEmx6uGKknb3WvJj8p9Qc1AXXKyZDYZPVAMMYa9SYEQdipAG4rqfFQmX",
  "key14": "2pfEAScWafBDigvWz1NboPZh3timrHH7MQkxbbditzeboXJZr96aAahxH2y3ymWioUnx8M4e1nkYcZbM7wcjzJT8",
  "key15": "3bYuGwoX6Fqu1y3q2qjVtAZLXLau2vsyEsDmobDbqHu4xMLhLqe6snrZ8kW5wTB1sFdv337TDg6QusPR3XicNjHj",
  "key16": "4APLSr1mtM1ssnAeJfdnLmJuBNVSNpxftzRGiqT3cWFnXUHTHvBpx76cqRfpNCqebpHDjB23o3RDyJh7n3tHX9pu",
  "key17": "2uExA5PfE9RbvcmGjAdiCysn2iwZmHxLsJirB5pMK9UBKH1jXTKvaCQBRRaoovZqoW39GVmigAARafL2y7aX26rY",
  "key18": "2cGuf6nwM6vNnDJfC3gFhpZkyYynysACQzM4PyzobyW88LsmpoLSottT9Tnko4BSUbVHX8xuzAGgMFmr7f9Ec65D",
  "key19": "5PyRQPAbQkERvrnk6yLzkTi2vtCz7kXzr76j6vXccjSdfxDcqZK6sh6GYATevNjkK3DUn2Vo88QiTPuvC36BhS9A",
  "key20": "4v6rZtMqk8EbYScmuEt7wEegvMAn2ot21MnVaBRtM3yqTaBvE4xiUpYVpTY5Ds2GLspN9L16gJSYJrqnUZ3fvuEM",
  "key21": "4NimCfEvYmmZ6JqsUptPeR4UnPTWFpEE6o4K7Z1nLwefzxY4EWBQ2vgTxUrHfdJhcSmfkQNA7gjeBwyyfsqocwx",
  "key22": "4wMHEW8fCXVCuXkLrL1UStRSdeeig9BMZXNJf8skfLWbzdtAg15gbd1Xe1nmVEZ3KwXymbRpybm9WB8HULNGKNpq",
  "key23": "5wKg2Q95yVELVNUA2VC1oK1LvBytGsUhP7RqkYcSRhMruRp6CvHN3NsdSkK7mUM2Adt3aoFcebNgiSqLdS25gdzr",
  "key24": "4qsNS7Jwqu5op1vTtxm2LAiwKcYKBLZSc1tcnNG8Dacy8mp5KY7uwqCLtAgvuaEU9owddSof7mPbXp2pTKsM13kY",
  "key25": "4utW8bTiJJbC3aLiUdxyWrqnhZkU9jkxjmot5j5GQAU9EfPaF4BtVDWJw84dHvAwMeGjfDrVuCNABWTR9aeRv1Uk",
  "key26": "2MrE4AKNUGZoQL9bbxxPSjPsy8suRqHcUE6cuWKJRrD4DzQB3bZUaNYkwJzykM1yvxZ5y6vdcr2bfKZ6jsNdWp5p",
  "key27": "4NYXfUoXc96r6VmVEzKLDrkVK4Y1oWngXZo1AB1f8JTQmiW6kbCAPPMJdxhrUjgdGKV6Goa6BVBGy4WumPdn18Lw",
  "key28": "4o7EgXoy83GycH8Md9QbhdaTkt2oqdgvecBGAv7dr7BEYrnax5cSpQNK945E6JpbCTft4QYwfAVo5dsfEQZxJpqx",
  "key29": "4S52eUxLDLck1eU5EXGPa7qVJF9jkoHGJTpTRFqDbuzGFZeLeYfh3jPe7HRQpTUUDrR2tsrjJxCtHe5FX6soGoG6",
  "key30": "2ik5DPUfc2xwYvmVLzX3qjRvHcwmAkg3R4KDmUSyQnNAXLcoeemLVmXsc7YczwVNr2LBj1YngJjbPNvsozFPuDWu",
  "key31": "4PdooAASrwjKj3ZuJmv5pG3uiv7fvuqjh5yXDqMEUb7crmc1rRyHhjFbdXurMsrw4bUUtGqkJMCXDkiuKRvToyeE",
  "key32": "3PrPa2rP7G8eS16mWEjvzEzv3oHiuHn4FughHHHi6HtF8dsAwD7CVf8uiTsRWyroBpYu6AZPnFRKSQmFx8XyzDXF",
  "key33": "3jzE8tfN6gwyQPGLfVmTsC16mRwnx42ZKLu9ef9Jhfura53NVSzLjE4eh6bRj5YrBDW4knhkaUeGe86jKCSNpHNA",
  "key34": "5W2UWy2r6okh7TskNVXunHqygEVPntRaEfZEWTdgyL7w5TeUQk9vFD6irv1gNQdQR4Dc5RqhExFcmtVmhdLrn2qv",
  "key35": "3m1ea2Qac5WHjqAzyecpoMxGWCjozK6jY1cFBMyFDE5NLqMUyrEuxb3eJByuywLTJFNahT1oD3aMTdcmLgSys7NR",
  "key36": "p6etbzRHzZdmexMvc3CiLNsyebse81BcVCXt43kypL3NbexKyE3pA1MNJj5hcY8KYmpsNgW5NBJnnuEEDrEYabP",
  "key37": "4PikvA33NoZWPx2PsNtH5AUnX8rMUoiKGJ2fD7RuJPw9mnL8QJ4WSpr9qM4y8V4tZDbrADQNEycjX7dJRdeZWQpj",
  "key38": "G3ztkT6zn7T4hyt4Lv4pkvFsbh1SttNQXkYZPdcAP23eVBKXZP7fxgnCaW3dEer9s1aDXUbb6bPpWaAL2hjyr4R",
  "key39": "dvMMGMPo3UjbC6tboGjf39qtD2LsTQLf5XCLgSWna5Z7mrqhV92qaW5Xd2sw9oUj1m8SMJyzzcHZxoGWaTCw5hQ",
  "key40": "3qhfoZ1CDE2GkUCWh3xNNMAwU95dB3HEQUeRJCXP4QjzK7DsVvkgM9UE9tSrGMbcpCmzr13Miitjt6QphzE8XKwr",
  "key41": "2p6YFDszCZXmPMAHooNK5dDJAWVJRj9SeY7NxWCYR6EgqW6KDrowv1zFDxka8PeM3ZKb1gW5bGxs7itWVb9Y9wUZ",
  "key42": "56VWvyS6KAsRoirhkVQEXRfo737uPfu6MXy93PjHsxKgr83xuubPZLXWquCo8sX9VaaZ7yfReTjpWefeDYhHHqaJ",
  "key43": "3C9b1b2bDt5LJHiCpLycgVqcG6NAc25i2LWr47iHTiW1mHAP6LE9jKrJkbiE1AEgXtZsU3nhXTVWyVTogXV1nB9e"
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
