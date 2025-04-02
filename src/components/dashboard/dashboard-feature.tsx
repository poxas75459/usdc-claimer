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
    "utcCyee5DjTdDwtShsoyAAQG7atjJ26K9atqXdMo2kpvY77XZHjSB8cZkjyqLG12Cy3HuWpcD4pfoG1pYdSnTzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63LqQ6ENqTfVTZ4x6KaYu2w9Jsz4AYWUeHpfMzrovU6SUetrwxZ9N6VJQT4Q2wCkmiDpxMEZgj162s2Q5UHqUNvJ",
  "key1": "5kKHnK3Ws7FJEbNfNoZC98NQiWDhPgDEDvoun5LtjBN6CNpy4EFxhcN9e6A8KxbcA6C4RAABY4erkwGKba5amcyV",
  "key2": "MpXbq1TpxYzGPVHSrbxXVQ249jQMKpLajTXHKf97EKqwdc4S3P38NzvbztJuxjhj7DSs1MCc4gMHaxUQdNdjz9e",
  "key3": "2TASLpAmbDH2muiUQ11JbxphH7MhZxUWFB9xXfB1bjszetKyPThStWLCnconcvjGF3TEcFiK6Q57jW4suBvZihXV",
  "key4": "5L3C6FShGbSWosutBdJV1zWAv8xbGxpz5exSm9fS9YpxJX5HzPe8wTseiUm4mSPEEU9Ta53f1GE2tmWXwZHq9uwW",
  "key5": "5mSAcYUJA57nabJTkm5vp6YzPGbHkiXZjtTHvpnUs2fiHH25NaqNHyx8thrLT1g6Mu5wYudpULCqTmHCZEHq5agS",
  "key6": "4HVfSSVLWP4wN3CtTwWw9PNjVbxcyCupq6RAkdTx25PciFptJTajWGTnVASsaADWDmMtvzzrVDQ5cyfdAncT4cRa",
  "key7": "3B6sjTgD2t74VZRUt8X4sAScG6HMWPCE1zcys915ZQXVR6sx3mhx3uERSgUJ5T1cvgXy7Rb6wGacA1EFKGTYmQwM",
  "key8": "43mDRTZzXZgboumYpUPUUtoC7smox9DU8fCAHfAcogx4FjL9WL4GWZQpsNjhKU5SdwLxaCFLEMuZbdbqT5xF9anF",
  "key9": "3HMAZfkaGK32WWZCDcgixR4pQFHmENjBAcPe5vuQEUVv7C6Bx6Vyt3Sr8e682VUFMSCRK9xhvMaZLew14St2LH8T",
  "key10": "2mZpomWhzVfHcFXMoRfFMQojLGepxzxPgitJvSdaV9QaaqDiBUZnsDdt2EKUwSvYaFXeSgq5NGQdZk7TEKCXgBrz",
  "key11": "4VztWPXjZ1pBeoyaDB9md7mdus7VM6VDjBbDeHC1GVY3mRiYC9qB4fBowUSZZFzUthffWPNAW7d7fyukAJ22oUuH",
  "key12": "47oUHgM7z3RhogbCKMp4P6PoXqEEVLAKhD2biRpWFeroY2ojUFPj425XFzqeRUwQMWziMBsKns8Qu1NvJBs7aDh7",
  "key13": "5s3Pi3XNHs2stYA39qZgS84PwTtXuYmAGUZaMhYrYKqBzjDrwYJ2CPDZejnvkwvmHnJ1s88jZmNYE6qprqYy8ek2",
  "key14": "2yaZ63mna25p371dhkRW5T7a6QqFmBuKgurLVifmoR9Evi2ha5LkLhdg7xLYQvKEnd8aStnMhUZEzkfKyk2C9eaE",
  "key15": "5kjHF1W3s2ep5uEkLm5154ybgofMbqWMAvFCqdg33gmf1FyXyVChLsUdKoJBLuuMRQpDfbt92nAyKvCpoC5xERab",
  "key16": "22ea6KTv5gDLByWYQETaC7SycppWrFGaZ5gRiRDzNc88Wceg8G9Ea7i3QiAC3svvSZMDhCvDwiqn23T5EfHnwoXD",
  "key17": "4WqKBMPwLjShCd5LrDwSw4M3pvCiAdLioMJZQDS4Fyk7NrPif9YKgEdGHEztv4fRVyph9aQPAsCYZv4q8zFKZdR8",
  "key18": "246Ap1cLNk4r12XMuNdKKnbNRTjbpRN5BthFY5NL2yCajphZ6mAJ8fQKjBuwzonMARqRVw92xeAJuNjhzwA2gFWS",
  "key19": "4PgLtkC4ipxVFfBJ1FB2ZEXrt8sugf6Ti3h4sDK2yVMea2V4BJpek1z89CbJ67hwLxKDY9gn6MCdwELjQzswcxCi",
  "key20": "4hgrjtvUYfCFJgGdNFKEpWStSb6fmPf8opxQgVH4xqvqGuu5niqmAdjoyHnUr1c3zQyHZ3AEkGw22c3cDiHpWVYe",
  "key21": "5HEXh7y5ANExmjzhpKV76LUoBp9NbYKbd5Q2fHpTk1Dc2mM3EMDQqgv6Yd3XseW33KxoBKErV1sG3iE1hQSU6PfZ",
  "key22": "8NkYyM8XQD8NkZVfnC1LgUUzbRSHvtUKpB6ApcpAwFnQo1c6Mvy8Pg6Lrabb7EPbFJGpL3HuCNUr1FcPDBCn98M",
  "key23": "3cG1s1Bt3SXFHUJ1emLN8kJJT6uE8atpNFcntQ52ioQvdfp8Tebsv6pwxebcSqjwcQHVEGuecfnXhyQZ9vHaiict",
  "key24": "2oq455z3dtGjFRh6PCFkjdMqACjJahUi2RYk21RgzSpW6t3Y8B5CqNndsjWazxcTDRrmw5aKaVvZaLHCArWdh1Cu",
  "key25": "5HDQJB7DW1NsYxaqcbXtWnfSEhgojgmSBmDquPgwdAG4ocsP1tyexXd1MHvRg5Xdam5Y58A84mVtVXt7aSpqacUN",
  "key26": "363Z4tPwmcbgqU7pDRnTUWbZh2us3PhUKXriV4CwYxdmLrbWaNsLUka1uHxiY8Pt6T8SgDNAk1a35zgmtppnWm2S",
  "key27": "THjogJz5fd6r492fp2KxqpFmUcurRFeZb2EjKBsXax69Zu1ytou1QQ1833k28KmjCwF4mo8tF5tySvvCbDuUept",
  "key28": "3TtkKgTtj8L2vECut4SdLimnSP5v6hpub6L6ANxKu9JvEZq2v9hWAXHSfHMZmkuPoRhLXCcTQLjpHRuhjC48MYio",
  "key29": "4FrGSvcVyUak6hp4tV5ne9QT5BDeBXVDkP6eWUMSWEZoJiofSq3xmELWmUkd5hvY9L1JbLryX86a6HnifN6QU5aB",
  "key30": "5xnyBXB2GJ9KzPvScLyLRF9TqzZarfy94BCXtFRo9srGsacnQLPPaq9rmbSaggXBhzVKBDayTN2FmqK3acAXuNHr",
  "key31": "47RJHBuU2Cvcc3rqe1Vuvem3YbN2fz4R9B7b8eUkbT24UFjhjntAMDyaia8BGhRvuowTzNTkGNxjK4vZSFWzMjRN",
  "key32": "ScEtEdTN8rmq41dXQdZVq5mQyqC4U7g9a8d82pE4z5gj4M5CLnm2c2FvDj1aP2Uam2zKK9dURtHqB2QYkoo2NxR",
  "key33": "4cuW8vTYQwe2HiPzzFQJN3Gzc19zSmezEFmLNTpAikca9PGo2ihWuTaXpQakcPNXZruuAWJobextQL94qTuo6RRp",
  "key34": "5AvG4kZ4jX9Q9o8wyqgc4nR9VyZXEJrRz8HQGtRN8RFzjiJgXsasbafXEAQeFMFse2j3BhVTkuuwXUGXXjEGJzuc",
  "key35": "2D2vgmPDtCfVY1h1dQoT5KMpG9AHYwFaRyCZNUrVZSxZWDBwqKtdVpf5EhHFH9iaMfXnVDmzexS2Evh66JbJNg1i",
  "key36": "5uKNhw4xf7Aen9Lf1Arfy74WkATbBPqk8Sx1FvojFXL1nyVEqbnUW4fFdHAn7xZ9Yx3gMPC5wWWQHWBVmByxj31M",
  "key37": "5WwwGqh5yxrDkcqLiXFkudsxduNLP5cAdBt7DFgstapjSd9tiFWTA4WtjWSjwzsHoSY265YW6DkGMHQzZMktPxQz",
  "key38": "5QbGa1xNXDtN6T1fxRoqbURQQ1iyrtMyngjcwuQy6aUTBTojircc3KCVtWkpCn5iRisUdg2zTLoTdhr4HTHAmu4G",
  "key39": "dG3zenv4c8cc4bfEDRRod9PpMWDsTHSFTpgCo3eFhEkG59JoKuihdsHEurynis4SnZgMUQShaCU3DssQ1UQ9w9Z",
  "key40": "49ZUtn8MCmrede21TazXa2WgXT4fuhZ8Nq5sq25yQBQiYADkSkcsGDTqWYTESPZ8CpBR63T1VghpayRVRDbAuHCb"
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
