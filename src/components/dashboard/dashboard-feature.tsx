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
    "xadutyFtQuRoT8zjkW55GbT5KutnRdHMvf3bCkA76R9fim4EuM2vR2CkgsCxKgE1rNGVpsvZRZFf98arax5oeNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51nnaL6ShKu1zdxZ5PqLDUpeNjfaMfoJFz4ApNjLXmZR2qyeU4vq9hRrcwvZFRrJT2eKnit8RsmSMcLraRGU9kc8",
  "key1": "34E3MkGsySjgKzZQkbnhu9x8DE4SN5npWAdFAFrKywXdgHeZpBU6JakiUudiCHGY8VTCBLfHHK1armr4SiDUmEUZ",
  "key2": "4onqM7yxrbRbiADvzdEWGN2HzxfN2KaEoRxVmsACzrwb6chAcotefVew5MSTfC8vQovZsB1iys5H4czuwkD8H9cG",
  "key3": "3itHc3r8DBFdcfSQw76NUL2L348kFEEeDjXoUNoVppa4Mw12NW8pfNTWawqJswZGJcLNy9k2DtHE3mRqjNWmEe63",
  "key4": "3VYGxMzhke2TMzbp9H8oBRCwi4PNSAQAv4pL3RwoDwLrnTHhg517Q39oERCsogs9jvhLySfTixTiHQkpBcWv2apH",
  "key5": "64kjZZH8C11H58R46WTyRvJMuw7P4QqoXHBTvZFtsfi5UZc5cy2vTD2o3jNMnkvGnAAs9bzzyuvRQKgzJDHrvz3D",
  "key6": "2Tz3V7gW9tT4rpAbmnL3bJWFYUEtJdCUCrGpw8Qj3k77nzvr4vDjL2McavNkEnWH98pJtTUpXjjUBvuii3pkogPX",
  "key7": "5DqUp4gpDaP9K4p9VA2gp7iNkw72AhBdyKGqLNdeZDJuTG7mdnMqsiv3AXodirS76SABSAh1d5xsRbwkZuorL3d9",
  "key8": "58yCW9Epy41J235wandAb7GRCaczzttFZ5kqU3hKfxvNdo9zWpbaqP9BW6GdiMiifdKM8cGq6i4rnTyp2YWk42oS",
  "key9": "eamMVmHhr1RbE2o6G2xYSp65Pq1i1DPJaj8R7jYtTzNuU2PtYgxboXy7mGKTh384Uq5LB8rmuUz51yXZBVfq6y1",
  "key10": "3kvBpGWABKYP7ojBkHupNWiMYLg9CDbtnkoBcQVafW6C2q8TA1pcmvBKqoyyNtjRJhHB21WpDLuw9Rmz8Due1zfm",
  "key11": "21mz4PgTFnFDLiDttHKed25tAqAPBaS61Kyurj7KW3ipNKoAB76xTL38gYSFxKqE9GE4nzADYYbSbiB6dvyZ29KD",
  "key12": "4sCQ6CzKvy8Tn23TpiFHLGypLCuwCvDcL8py4NjfpMrngBJc9db53zqtUiKm5VYpxcAM6yRGm55kYJCELqwUvdpB",
  "key13": "DRL9MXguFh45BXHf3vLtuJnwXHSbDDsVHPrWmFLeS9rmfKzNnQ4D56YPHySm8NRkPxphaa47ybx2ZtqEPQA9NW3",
  "key14": "4ZnaCUAWzEiwadPDouiXparLjxWe8ikxhXfsTBxhsqVHfvxBCditk1QGNrFrt8G8SzoUjHMFKpk7YfnT5M7yGruy",
  "key15": "2Zt4JA7ChmAs95jz3NBJ7yaVGyygnAMTZaVAyj7n9dxiacwU2DSsuqhXBHXy9NGCBfaLkeZZbkzjHDSYbJQqH3Fe",
  "key16": "3MkyhL2Cux7KTDG6GpP1m9QNJtQ9dn3nktCZtcQp9sjFxpZoCCwZ3kQKZs3LdKiqnHe28gpWvEPaGah8HStdQDB6",
  "key17": "5HpRkgo24Z9W4m4cinpFphEU5cLDWHTHeV8oRF6tJv4YLsh6ABnUoDD7tCMj3yz8haQnVKX9EyYx2tZqsBG12TCe",
  "key18": "83Wqkic71wmnARwVETFePQcSdHjrT3R7qPcqjqE415JAt3DEtaM71jS7h6YxdtCATZoqY3hwyHdcR3idD1L39qN",
  "key19": "2nLazBzxHvnP7jQDtTShaRdw1iDj9DRCFkC5pfrbCrTtGvqaivvQApvsVUtsbsF61avF5pHyfgoT9Z1Bww5CfaXS",
  "key20": "2KT2yTWGwCfddzXuKaz7EGyGGzXb9KhXx4dpcWDQhpoZkQZ8zEUjy1V3z6zWgsgRCovgyBvF3Qwk2do3KmKpzVs9",
  "key21": "5hJrS5vmrgBSaws8t2xq3D3AY58awyNzMG8Z8Efz3k8X5Xo4sct9H9dUDypMfeYuLrKWs79Aj3wRWXcsWt71FKEj",
  "key22": "3W3H1Rq98eZm4DnpMZcmRVkshvtCJ7gu5bwKAxW3MwsZU2GGnJeT2XATHomGeCZCabhug3q4NVUJfoN7ibRDYkLg",
  "key23": "2Ae6rhpQJXBkmC14F5vRFVLArJuytmb7PqrnVp2zdGVMfmWuaxmAEc565yuDtcK4zFXMoHLFeAnLNUsRkrPEK3Ms",
  "key24": "2tLVhBK8zeSnCS1XdKEbfXjyy5GFBFeqJfnQrD1fE87vGXHuFdQaTEvFt37zxaQSm3uC8DgxYQMzRXRAhkr6ttmy",
  "key25": "5PVeJw49Y4vhTe8cHHBuVkSKtUJFpQgBKKVuTph6eVRVQj2i4Sa92An4VJhMRZHAfwWwKgGsjA2CKhZuNhfTGz5L",
  "key26": "acoBmhXegTKN3uW8PYYsraaxXamXRYTBtXfA4qDENuzz8pLb3bo976h6NyheHFNNHX2uT5HWtxWgnmbXkU8rvbc",
  "key27": "4oKWTCAgaQNkkibUNAPjo8u6UrTDVNrU1d4CCG3krPsez5GgF3kP9vquFm2JRfG74n97wDswHcHhDsrX28ucmbmH",
  "key28": "2ZBSxQ1YNQKQGkUQ6vmLVD86wMXWVPp7eTgXdLyVpaFmb9EKkkS3pvfMx6x6DcGFuq86Yo86KzjvxpxPrvrroqiD",
  "key29": "3s9BwA7NQHchHQiqdEzi8dZ7t72x5wXATiT44JCNcnCbjjZ18o7vfisTLppg3iPUtXXdhvofVA6r5C9x6rSY2LCL",
  "key30": "5FJMqHG96dqpETRJaKGVEbdNcnp2YkFFu5KDRgTuzz2iEkKXLkhk5jQw1bvDxAWHZhMcYMVsrHa34Lrkysz6RBgE",
  "key31": "3cLSFeNLogtLRNWHus9em5hmnt5eM9kmDxrKacvPguTEw21FNqNEvnebZwSiP991ZfvnXbpn4N8wgMWucSupME1",
  "key32": "62WpBNJcwKfxznQjF6xidoF3gDPJeZMKsNvNvnkhq2C2TzJiRtCu9WT9joUcv8hSQ2U7Fn1CxxcHV46c22JUzJKA",
  "key33": "2LAewDcXFqqFQe6yuXANEz5BgYyjcvFTPJ6KECrCXzexiFrSRGkpQJyHbqonQTQ5s8peTxPxzHFXgXQQusqjfQqo",
  "key34": "2rDiHZQ8ZjuU6yeH4jPtiHbuK8YzKhXHKDq1nFoGwSyDNTCRPVDJUUds8Xi64FxypV51CN8RVB3cT1CrifyPa8RZ",
  "key35": "3Cij4McXRZLQ2rQAfUcutYwgjjG4W2xwE7EhMJ4DyBGrynrhXLGeZhAz3XgRVHcuJujamGAbcCcxRFQ3xpaNG84e",
  "key36": "2skVGW72tNjLVXYPDQHeo61KXrDXsExaj22NratgQ9Cho4wWSMCGS81di6Tj5m2zdXV5GUduscGvcHpQQprv7wPQ",
  "key37": "3ZuKtCDv48mZxXYLR2AEBvCWSNXURFFRTtHnRAa3Zbtv55MpR8nNvS4cpXrYidV2aVSLW2tfikeSyoi15y3SF262",
  "key38": "2HEzjDNySqJ8BGrL2L6DmUNsZSZfeWp4PVHKuL3vURZkWit5JqR3NV4ESYWaVLsvGVPWWkU3iPptLeCnkFAicEDC",
  "key39": "S7c8htwcVvDuJUYvfV6KxGEU2kkCpsrzf6Q5nf8QGzYhZGTkGnrrKKdV6aDhxwqqN7eocetjMwR1JixjjtMGn17",
  "key40": "5qGZ7ox1aKk8ffGhA9eqBtYw3rtGdXWDrabf2NzFG1KK3iriuWbJQ6HjarfCPPhsp6yrtgV5mejhr8H1vfy8DZLd",
  "key41": "5kJqA3gL8BCc2ZjauWBGQBC1WBAUqMxkLXLKAX2mUNzofVFJv2hSUNnZfx9ZxzGZcmoZcBbFPG1HUaULgFmRrF8p",
  "key42": "2uhs6fgx5oTQtMYCf8fcfN5rcjgmAN7KmKnidvxXcNYsAmTPwdbRqrBp7KSrLdGRBTEzuuWYXmKqwX2wxkPgKTt1",
  "key43": "47VKVCQFxg31jnyLme6tjzRB4Ug6A1aoBeyr6LiiaSq5osF9RuXtUpP8odjMNZSzv4nGqq7WwjzL62gdopSKzDXk",
  "key44": "3Ve73TY5PyKA6N3CS8mXiEs1yk3L3mXtvXcxCXFALBKjDUwYM5W7yFPd4QxRguGG1GBhDZm35ZsD4SzRFXDya814",
  "key45": "2X5woWtg7VRFpU8tHjyHJLmuJnf6rdL5W1o3Kz8EZJyq1B1bWoeBCf1xqGNcJM41BfC7P8gQ7AHrGE4YrbHNxmCx",
  "key46": "4q5m217agA5gcwTDQ4nVtf4pCQotqeJLZAo8V3E5V1mTptmBeWSpT7r4ugNvf1vgxFDYwrA1rzBRLVAYMsXHMPat",
  "key47": "451VaPVSnj1ptNYm2J5SeZpX9Xwoi4GQ1qb2A7huok2pmLt1hG92Lhoq2QPfSRzoXZLrYDorUqc7S3Xos5NUHjEx",
  "key48": "xyfVM7jC6W1kQVTSt8w4sqNmJixjZoYyLjUYAPUq1ZWmiNXnqazF4aX5FRJfJuwYNgauxfBsimr2c7iZifE2EwG",
  "key49": "6wr3wi4tbimnAAKJzxVxoaHruZrLBWpuKBXZDVD2SPoTey1pkyFGEFaWsn7nMuQwsq4B9BZsTMyrpHwM7faVTdW"
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
