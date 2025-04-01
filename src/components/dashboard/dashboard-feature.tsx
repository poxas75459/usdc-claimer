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
    "RNnp7o2rcsYH4GEKnV7MwCxCd8VZDmgFZ1ht7idrWbQsbue8RwEvUTNYKBUJKf1AcU4ecJtWwVUqFkiFntxY4b4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vj6xytEirASPyAirNpj1qa9nWKz2EmRriKicFTZ8vwybF5AhxPYZWKvbGAwhFLrACCP5Foyxz2VsPQLMLQ8nXU",
  "key1": "Q9tWxsGmY1Jw2SUjMA91qFUEk6Zrao6tnavocz8jkWdZ9udL3xFSjoxBKCWP1FoVAm6yX4Ku6JJ36WbbYw3P3bk",
  "key2": "2xRNRDNkevcag2LgFXQBPer6SgtwsG1jbsavAaSyzgLFnEjE6fvM89GhmYKvGxkLK3bRHsZ8dZvJWS4eJv22cd1P",
  "key3": "5AaxBCrkp5trDUDr8xGvxPVMGAVmo5JYCbpYUAWBgcE9mShVaEEY9dLCyT1NDuPtoUx4YXZdvQnDPtngJfeDGooB",
  "key4": "35wuwxccSwJ29YosMsKKq2Bxb2j4mBcpQdWgDofCASnhHgwFGhScv2PrX7oXbFsUXzd4y3LfPQSEtjSPnCCiC2n9",
  "key5": "3PorNAy4PsU9vMHMGaMXgJCvyDUPcNKWVc2udRahtFaRP8JkGHveZ8AN7tHuuNHCAXAXE9kYjeAyG6pauWWa51sK",
  "key6": "RdqySTMMNZQZRaNcvFHbjEQ33MSGAuAi2GUr9es8ib2pfADUs9jGqgBczX877jx6Ziy5HmSfRswUWDrtBghdeZA",
  "key7": "4Nru882rGHomuaE1U9o277zGphXBv1P1z5WktHyJLkhAjAyCtt3zvDRGt5LQ7xnvJMiN2LLRPn42ADUQkbkngyPi",
  "key8": "5EuCBas3teVAhAmLMeFp6i2ueFJWcdZdT98vc3VgswxkDXzoPSUZLnZFT1FSdbVAEb3F5Catyb8PTuxQY5muMSrX",
  "key9": "4kX2qUFa9aXAzuBnHUQeZrSyMw5FdLaggQermART1K3X13iRbXbxJyiEmA4gJSCy7eMWbXofh98u3V6dD5EJ529q",
  "key10": "64UsZFZvits3Qj89nYhvcERFHWFKyhP5A2xp9eJaLrjNKRyqPQbQmeMWJRx3w9PbJsfSkbQFuK68JKLNpXL75L3p",
  "key11": "4ENNHWVJycod5RxPMZDLqEbi1NdVzWUvVeM2TdMgFkz2KPPu7CZTHLRM3pNLffFJvneF5XtDogadEsBZN5KPfZtr",
  "key12": "31JtKdYHkZinygz2nRDkf2kfxYXvQn4srsUBPjdQdoFV6kjKGV2N1zfongsrjtFe8AaJ3XvZnbLFE9wxLVBCqFFi",
  "key13": "2Vk2YZyv9KqHDjZuBfw7JpqGPk9eZzrRHxp4yRpatgoXtngnxgCyR6ax4R3Hem3iZqkAZCELfLJzMCvp5DWUWJmB",
  "key14": "2kYwadJYmKuY5Yaijogz4v6L6m7LipcF5bvooNaWYRmnHYEGC1zco8JBeGESoHqkJCwc9KNCG96k1frRTSD4Gtim",
  "key15": "29HtZt9XdBByHz2cAot6xumyinxsQDcUMNLQhLEQ28U6aoB5Vio8hgGxi6MMe7sbf5sgzv8dphe7mbmY3YYkL6R3",
  "key16": "kAxpvvfMmZfKcZxvf4Mvugh8pzqiLEgvwQ2onvgcS2zG6apjv9MpsdXpV31e6ptYzAFDDmQyccN2FQEbCfweRX3",
  "key17": "xyZNLUgYLBLxrF3HUfMgRmaZnXshk4aYW9VFSJ1cFb2H19LNUu66zX3DeGEXAoTrGRFBjLpxtwBRZbdHNa5C6KM",
  "key18": "64eWa2qxucuY2erfUsbzJBtSmkqfa5Z4sF9vmaxazpArT9WrtWu1mcS5mnpT1z89JLT3DQjoF41TBtUcg1XNhq8C",
  "key19": "3y7hx2JstEUv9SmmwqqtW3yJ5Up4rjLcsLsD8ixJg9iRJC27cStrrFFYM44VG4czkcyUKJ2fugyWdpSmjSUDQg94",
  "key20": "2wMn9utbNtF4wF96Bk8iPL1ra9wf6LFrkhPm3rNsDy83LzURzpJNtVeAX6ZvmzAJrmUtyA8QSDeAcMYrbuXP11nv",
  "key21": "34J8jbxjViUNj2EFchThZbofGVA4BaPucindSQYn1EAUzbSNiDRucetv3fDmGaE3A8Ua1UJHCcXpx8XVCouSP4bN",
  "key22": "2b6Vab1DxGeyM89SpHT2eHCGdjHDkkptnBdnpd9MbFWvrdjxJFPAUUR4RMH7kPLnr19j5Yi2mxnRUwtYyJWuQWm5",
  "key23": "gsgXKbDGvE5BbAqd3N18s3yUm9T8CyFoQqo1vzyPgqiMRNERfZnKqLcphoj22BGJx3tc8mJMePnLy8TSVV56Am3",
  "key24": "3JFnGjLgjS5qPQu3AhpVnCHd4FbXh2XiKZByAJtJcrpayhpkybH9VFMUjahW3tdbCsn9esVeugTEV1ushiAiwRvZ",
  "key25": "5PHP5aESypMyZ9y5ivJhxcmZcHRTgKqVSszBm2QJc6rMvRysLgjUqjkm73Gn3PXB6TxqZYR11imTArsvaYxGsgMR",
  "key26": "2QoMVSfkajUU2HVe5Ujw6KwYrNBwriGtTKJAdyiupnfe6dQzoxcJJ194raDhiq49LJFH7gqwp2cgUyGUNCBmAnG8",
  "key27": "4niPLXTRjp3C191uEwT5gZjqDuziBALHvcigKEGkLVEMVyXWcie7KsfS7gnncmqFP6CMYwcGhM6XxXhP3MYV8hX7",
  "key28": "29hqGkRJBTt9PxrvGDFtKuS7hTWN5RLF3AQfqBqomFi41oDeNCAa3hFrzuXRKMry1RSiZRXSbsEXUggN8ZDRHAe2",
  "key29": "65P6kPfeakGqv55VFjZG8SPopV641991AEh4wFbRPjnjexacfcFQUu7AkYueeBvejzTnPzpXkTTwzzDuCjMzcsXw",
  "key30": "znZv76V4st5mqUNgdm11wzf7Uddo776RZZhu3NiA5sLzGpqjhQPHUgu6bu2xXMxtbtaxYx1G2TRgzvAW8NaXvDu",
  "key31": "3q1FrEAUHuBm39UzVSbRHzRnmGxDyDXnDWqYmZR1tAMyy7y18FABLW73SLc6n9RPju69PwniGFCuncbmr9ERAAKR",
  "key32": "23p8nLCbRyBtS1uEhpreGfJjXaUCvugyTo64E1EDWC34FEzCfu9HfS4ZMnSrfk7tyZoUpcc8SQRvTfnGcP9KHp2W",
  "key33": "5eRbfhGDkGyYe4v1zBmPoZr3Eg6rgCGkEPFcUKhbwnd9yR1c5DKNhRnGnEUM6zMPi2jaQCJKnRj8FyX35VDK5dJF",
  "key34": "2rLpZHTVEAzLzDvRJ4TatwbkpA1dqCCfZgf5Yn14Ha2rNdtFY8weNHVj8V4P35h9HfcCfdmcmjPXXPAExQuTcSoY",
  "key35": "5tV6XWziPRCsrumnvGa3TKVnYNmWR7tQKjH3jEqWNbgZoN668PBbsfzn61jmQaUYpBUqfaLAd8B4gKdEFvuoesEp",
  "key36": "rb66wXo6SZiVTeMDGPnmkmcYt3ZGW6RzdW4mNoCsJsA91KUzrpqNHvpBhUJpoeWYZvJJCgRP8TYqwrnkCphS1rK",
  "key37": "63mXTgeFHDCfb8ULFS9KggPgjAxYjLx6QoYhDBxiuVu5Tth62nmNz5WKEG99BuLBoJY823Rvq6c8eM7Zessyk8ZS",
  "key38": "2HfNuPYXhKbdYdzT8A5nu5pRaBFcGyEhHJohKo6WkNqXcSsW3GhRpngfmZEQNxsYWMBRUrMXVDP3xRcP1rLBPA1Z",
  "key39": "jKG59ePbrg3cYBaN3rGaCTo6yHV3rXa5GyCFmNf6G9a9btR43VSojoZpyVe772wjRD32ophTvmuQhURSSewqSdA",
  "key40": "3TjUAigtcmLnS2iiugScJpES7L6gfq95NVaqA89t6qvySdvYFVDaVQp7eKk39cjSFCaVnw53EpgDj4ku8tqtCUXx",
  "key41": "kwy2LcWBohe2xgdXmUBbRne5d73No4pAbK9Z5qdFLRufvP3giqU1iLgc6REU65hzEupD5crCn5f6eBgs51SR5XT",
  "key42": "2DTNxUQdV6pCgGQdhnqHJqNcCP3WLXqLpcmPprDbNYk83uK1PdqxNT2rrgp6mbkJYfYR4BZqdpzo7RMNXs1tf8a7",
  "key43": "2qMdVRMJK1K2vmfjNuLMfsuKqPug278i1syMdHfUyYMbhf33qhS7K7mpT7TnSTc28844M1r9rnwE7tE2ccfVSUdF",
  "key44": "61Zh1yyqExaZS6RXU8kMMSd9vgS2jgcR51i7MTiwsgEm8iDQi1G31LY8UFLP9eQQ75gQGxbkNw71k4Pvnko3mptF",
  "key45": "5REYGZTLibypkJTgPFWoWEoCRNJv8FiCHWA1H3n8A1LUfdhbfFndRQSnbNpFGWCTSHffzTYSXetuyreskaT8mS8A",
  "key46": "63bGBQYWWD5AU48KdYNHsZauwHQp2QRXDsjTu9iqSFyaGRrxKntdHef6NooSSNp6kHNYWB7LcRDNxxYXXwHFNpzx",
  "key47": "5YzG4gsD6KvUJdRW1VJUx3dMEJnVcSyYuq4m2QsY6R8wYN9BVwUSsvtPEZJrfi22uatsPoKNAJM5xKdNoqx3JsvQ"
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
