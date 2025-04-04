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
    "Gzcez6hjtp8HUvYSs7R9gPKX6HD7y7A6KC5s5oxEhxgDw1MxF8pVc1riuM4zgcUUq86p8dRYd9t2D6xZTHXEvuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "579byVxhkURt9R8J17MuiW2hUfuLpWYLT4XkgLjrNWDmhK4HgoeeTG3UHzKcDHzH1YVhvHusAPJ1GAj5u3Aruj8F",
  "key1": "SHMnDRBNuEGpLcjHUZNEsyZoG5gJDwXoBkEQQJZvj5HUADUjDxCNMWkrZ3B5dKQegKSWMzUaXifeHLHW6bC2hV6",
  "key2": "3GLhxP1Zah9Bj7ayvCUbhK3HKd7sGZ3dbCXXq6ACruVZRoYiJgLLXgw2ZKjv3MutEZSeVsEDayZTR6pyjbNqeTS8",
  "key3": "4Jo1ibUyhuZ4fTGsJt1y3zBrmwrtbKPaMCxvv7zAd4PjScR4pYxzgPChw87CT6RaFWAYdjhkBvabqHveQYSUgoCz",
  "key4": "4wCsSVTJQRVpJteoh524YWxzSKxZQ4mXF3679gVVbjRbsfWAzNgS8pADNSx3azqC29FFmaCzXfHMAYjDnYJrjf2m",
  "key5": "65jeoWF5YjJmuPtyKRtsgpNXt7XPAyfe93varyZs6JfQSXY5S4WbLkgDnftFYLtCWPH53YWBUPL6foqLqoTYn72z",
  "key6": "4RWLuN9GmWSP7LC338eZ4GJhRA8CGptPzCRr7QUe7QJG2tLbJZRGh5o5bs9zUbSJBt3Vt9GrzDEat5v1RcUhY29W",
  "key7": "5CfjpSM5kbECj1FATP4MjN4NNR3QYgtaE2PJnt44uX6AhpMMQEigckjN6uyz9pmjnLSctNiW65KRZdHMcmkh62z3",
  "key8": "3CK2CYsCTZa7xFtu8AToNzEmsCgy7N8FTC8xCLA9QEWSSLksC3556LvPAzTSd3pBaC2anN7h4e4i8uPXYxpR2UxQ",
  "key9": "5XnRXNoL9ynM7zuUCbqic9B5aVAM5Dd3J7BkdhJdma1uo6sYb5Ss2WWECCccYWetuY4URUb4Sitqbmd7AXffb3tb",
  "key10": "2gV7DtenG2q3SZi87HUDCQcsD99PE1Lt83tW8MXbDhAXCY5RyssseYxSbEubT9F4tszTUXGyHE6TEMjksaUChtEV",
  "key11": "44XX8iwbDTef7CCDeAS57YCuyTBSUYuckamaPiarDFtsvVzYLwQi2NbPCADQSxnecuKU9K5F5i91sEgqa3oGWis",
  "key12": "33y6LGdskirGuh7g728Jmpfu7NasvbuG7e98rofs1m5EEP9MA4eTAYfYK2ZpzR7gxtbyALoXoxzVwnERhnhqkqo5",
  "key13": "3QTAoVFGSHywxpy3AAi1GdpHnUFLYV5rbgAdSjLCW9T7QMkTrebYP7snBQnwy3wReRg8aCo6psWsCTj5jtEDF7LZ",
  "key14": "61kr9waBUCAh65pQymmf4MXAuN134WUktaGFabxhCVvDKxXgjdVqj9MsSYs9S17DHUPFbRggFH44ma2cdCKTF7uU",
  "key15": "2wPnFygTXNaWztLAhNV48i2uGhLLEGoxYdgeTT3atj6By5rpnCVyFYVSZspzoycK1sk6TVuEM5zgtDLWi3hdXrV6",
  "key16": "5bnexkF28MWJx7y53CbXSxmNRVPFfFenLW6N1mQCrGSfxAWMJxeAXRRiHajh7ufD6EC1Vkeyaat554p1zz4pEfXc",
  "key17": "5sUcVnN1f4Df598mHdN1V6csejoY83DzzHRCEqYL7kKiFobMXNH1rghMf8NPxvdHceAB2xiQHhmWBoXFCqMhfMCu",
  "key18": "5HqmkAouuBwNUwcAghkafmpwKKgQBqpPUapMAWu6dPEnuviHLY6Q9yt4s5cYp5NyR5Bv2BHnuLUUQn3awrkcmiZn",
  "key19": "CzKzbg3ciNWHytqCV2WJqbT4AoAJ2w5DWv8kYqNcgAbPRiRPFc8UMokrPs2sWc3mb6zbU6eeu6siYrFuPKYoWKs",
  "key20": "4YvC1PFGK52gFvUmUaah691UQxv36JRyTi6mTL8r5zaenBCBb4eaA6pdJcf1rKK74rgzTyJXBDPQq7qXejFvHjwA",
  "key21": "4dNYnYpydb8gcq2xL5PviddYEPqAWKbsDghjfewaz1WBRHRkKMyjZz7UFJaqvgMvrhrBjAETeuRMrk5fkN6UKF9o",
  "key22": "5mfbWeHTaozZqs7cQu7Rw6DExv3DcHKp7RyW7or5gd4NrPok7XbvckDt6tWuFZakdhwTG4QTjpoajS4uATH1JWVz",
  "key23": "4aRhnoRFxLHUzWwo5sKagCU2irhzZXUDgB3TSqG7TPmS7vyJhvzc5PB7LK5aqK5NpV47HmaCFhMpZxoxScy8XZE4",
  "key24": "Dy1PoWTPNJRWa13WznzE2ekbgmFJLkj3Vj9R5hS8VJBYuByBdSq7Jd3tmUXsfyS3tHMwMiWfXPbnFyCRex4aWzs",
  "key25": "39pAQAkDv5Key8qhQLmozpBEKY56BTYECDygJoVGZTdy6U43ANgJp2DadkqNCwTDQDH6sV5GrSWAorHVRt9PmFQu",
  "key26": "4CzgWpoVVRLb7ebAdsZfWMpZgjGyBidd1LMosL6UDxq1rJFT3J7NF1jZRxfg1KpkEJdrnhMDCEQcp6cNGDguVamD",
  "key27": "64s25wA6MFR3ovBn9iP77EFd9K3RoospWLnNuoxXyt4W8Ees3CEwsnDvrCufW5KAVPM92TyKU5TXmkZxaMkb1LP9",
  "key28": "67NVDoxmkuy8ZuseWsAxwEtrDB9xZ6bfzJ5eXpSx8rcAKdkxHEMJpDkSES9cmeSf56SGpN6AChPvEYqXLKPjgoWY",
  "key29": "5UdS3TP8V7htWoGVZ26VMBJwemb3yVuMPbVDZXdLThDEVqXXfBTVyykz961GHUEVVfqW2hNgivHL3vXypq9heTjT",
  "key30": "4isEurkCSBQeRsSVi7rsSbiwLSoHtkNP8pgHBrJaFZigztWmeqxAdacSPbR6TsjpqXU4YcQiB7EABD8ovD5rvEJV",
  "key31": "67fn8PvsdENoPgoX58xF7HkJVXbKrNeYuJcERYzMyyFKnaeh4yPRfbmfkDy2UNXxsfyDdJDNDRi9Jyd4Ca27v7XD",
  "key32": "62XjqNwgtGTFooiN5pCt3UTPQaUdCke92vdwYWtWiot5ghQkyTWWtZPFUZhpTHvaCBR7UazvwWj1rta6Yezty3mo",
  "key33": "36WW23AAjCmBL9ypJBKG2TnyBswgvyq5ncGREJ1nKQXdYHWZ1nkYxgsAT5KdZKfwANdzb3Gx4GnfFUJPjxkRwccP",
  "key34": "2Y5q5bqg7nU3zLA6n4pvWhHc5wQHEhDqyu7a2oKGV1YRxSvJLw8bxFpAGYPV7h5VrfVujQZWudWfjYcp7MFbPRys",
  "key35": "3TUTDMMhpicjAMGukACxpDVG79DpZg39TaugKciLUTXR69HpfLbv58QRs1EDhZ6n1Z7VWfi5g71c9djNwjtcpHny",
  "key36": "4b9UrNMjoXM4nw8FQTzvKxYNLm8ebjsuvSFYLsWnYRuvK4s3GYzjU3jPRrGEMM5GurPbx6znaKSXfiX7d5wA5rEb",
  "key37": "2x1GVSQ1rUUS3jLVraA4G6fig9XyRtkbpmtCv64APRP89UiBWcPP2A73dhAVScoxNBdAeKFwCRP9PMNJJPepAE2t",
  "key38": "RHfXtNNjB7NjrSqGjwgsKwmjTT7advS6hxKJrYf26L3EJtWcdaotvsJQF5YtyW1oeNE6F9xuWTp2yhMNBgePpUX"
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
