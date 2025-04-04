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
    "63Mbqaudf3D5xrwLp7LEJCGQdStmUNejy9hPvqr5hMXQLcZdWRdJnRyJouRego1pvD9gdm4d7XZ6MCzV6WT1oS3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CbU2JyujU21ni4YEqxAmqvicXDYGaRFav8nRPP2PtiPMMjdP4kmXHmURHNedkuJfHGkwbPGsYCZctt8uvXq9kYs",
  "key1": "2XNUFNxY2VXZsYab32kWrGVisJkDBi4UnHoHUZLUos6nxQSWRDxMiU1jprtnTaHNY7ypu57jn6SZvYXayuhprJjx",
  "key2": "519er4f5Dg29FvV7uVrQLJFUnSVZ2BbgehiBWYdUZWF8JdAX62MaPjCcdsJq1BLF4aowVroK7zoWh5NgQbfCZLh6",
  "key3": "xJxnrfGMjUR8DQUq7vmffhmmhJqA14moSp7huH9TZcSxNjv5Yfd5mvaUmjgEamPzAyUHLUfva4RW6uLS29Md7TE",
  "key4": "5nL5YcqfDHy62RtXQx4jfSiSnacutWb4EAN9zJzhWyJqkZTNBFr9vF2CKmpiM4467B4ARcRU1MzK5iTjPMJaERSL",
  "key5": "zgKDXeijT3y8dv4JsCABngTpC3MY7J9QFoYgupatbEzR9epcewQppLkn6LTjN3R27GnBvziKyyqnzdQb8uPxStr",
  "key6": "46bRkFipNmXTeRSobNXfBFDzt1Xmj1S8Ce3z75GeYU19XAtF3peKjxZtja5WamtiEc4M227PaPca3NL6xLQFQJbq",
  "key7": "2oUZNnC1sV4svqhpX2t8FkWqZyWnYrnU9J2JHFzm8HK4z4ct7JDcuJxZASePxKvdNgrDhza3uG7rZDHMzWvUAHxB",
  "key8": "4VxpVhivSgCqLMPTEWMvrEUsUz6jDSruA5tYJxK4C4k1vzdAqWCFxXi2MqFNCqoe7zQHvRz565Xtencudf1qFGib",
  "key9": "2TL38FXXMPsSqBuadTKsqMjxPjnxbmF9ATkTJQzi1ZxHRmxmv1cgYW65xqPHPuYpXaiidGFA1V1UeKEqnJSAZtwv",
  "key10": "4mt85Eog1vGUEQ9iSmNUU8DbnAU4qTYiFhPEZVtD72VQK88bGkyGBCWbij56yU9w2RPVeP8kJEFGSxj6fk4YiAhE",
  "key11": "5G75cVwARBUuPar1NW5xQ4eSHj11WKdyd3s6SFezwFJbyxKWV77na6D7PQHP5PEHopPvfb6shwsjp53bdmTUtQ5m",
  "key12": "2LdFTRhJ9YJKxLSqXFLw5MC293furwZof1HZo4cBibNG1z8ZDguAPys6uxgSTu2T3xPJU2fq3fuVHpfWzbytRBGQ",
  "key13": "42dG3NiPdqGcURQfJTRFvYiqupT5tqaVinxSgLe8atQwo9QDa1CJQH4HE8TuwDmGR9L9HHyRFz5z2KDtjJepJ1F2",
  "key14": "5USaigu5FKcGzz4ie9M6RgtGWiYwo9Gs8WfAZrC1ve85aDA8vxGh2X8LZ8i17v3JmpprL2ghFNJsT342XiyaQN2T",
  "key15": "5LQezmFof8B2JWhWy5pXtEYQ58JzKKUPmGKic7U14aa4uuCfamASU8orSFaqukFSK6QsFqJqEqHt1YbAsBbDmzLu",
  "key16": "3h4Hwkrf7SCo3DQrx5P8jDXNGHSTy5oKXd9RkCXNat1SHrAvZdEXKk89GDkzncmcU1JPNS6w8QKiJtvpxTdTYDtA",
  "key17": "362jidd9n7BKFVaP3CTrRmPSRhVqpZ7TrtCYm1qtiK6Rsg9iRQ3yHJfPMjdzBtNhjaRR89iuAAN7KydjZdNSJZaX",
  "key18": "5vgUUJxpKmnoVg1iumL9gTLExj5H6eUMgsmPpbGJNjDctzSntEQabhaNWvu6Urp9xGFgh8Avg5ohkjHXR9BBotoH",
  "key19": "2iZoa5d8DHLcSpDcg58p7xr1L1jQrvbGfYrjczny4TjG6Tpra87UZFjJxzYCZtdRZvaw4sUiafx6kLMuXVFrnPE8",
  "key20": "2mRRgwEBuGomgSnzA5hcgDLLWyyWBwUDkZ5Wi9CiaNSmQYQRczfZNW5wg2vZ1SCv9kF3fbrG2vmXLfcLe5gVDKXC",
  "key21": "2RnkyCC6g79Jo4ZpPvsvADhZpKZouAfzg5Aga7Tf9NJ9QfQAWDRZ22atNzqw7Cp1G3JpijRzjJAreZUzqrbrXb3C",
  "key22": "W4DXR6VBFM46RRETMsfkS2bJ9sVj6fJkvuCgVaw9fRTQsTmgFQkPbNHfnWCHToPfMKhnv4HNApC8D74WnAYamRP",
  "key23": "5bNSTm2TST5BTj8dHYgRHv869jUdMW9bAWqx8dTZUxrLMSKRiEJnBPWVunh1e8ryZCS27dVWKeYxDJYkf2JdtnGt",
  "key24": "4nikwidhcZeegdzDwKzMS39z7XnJ2K7YjrhnBYCLTFKY6p9zT8j9ifRgCwRcot37v9shLxR23xKxxeB3DTKc5xaM",
  "key25": "2xVmxFoE98vEUAqYQm5ZbWnoaN3F8HzbaprbQEPGAFyMAfg4Kzo57ZGhQJnWVHRBneA5pSUFFv2HbBR82zEUmJaw",
  "key26": "5wRvudd1DVYVnNuaqmZkqWLe2aMujbCfzLLbgmfw7XdPAA7AF2828ZuMc9nqwygbZqTccUKNxseKycQqGSFP1z5F",
  "key27": "48XMtY7kYt68oxau1aE3YAjuZzjJ7QPoMPAqkCdUrGoNiXGRUGfLqHYWQQLy1cWodUdgmwhoJ6jeP1occYCFXWU9",
  "key28": "47WBs3rV6k5na1GGaqvdwo5caearCzjyyEMqJRfXPwxnNz4aHiZpuQqqege7UHaHQY1onHhqZigjWLwww4kiYWq4",
  "key29": "5kU1ob5N368FD2jYoZWwmYToBS7eQVrpMvrkqKLgymGhsZkPgefcwRkjFdzov5PtJ4ogTcuwW4j1xSRA1HyhedVv",
  "key30": "3K4X3p84q8s1G9fKsqVVLJaqh7o37FYG34JKXuY6MsrhThmvdP5yVfdSjbXtsHRMenLPDfKV7KgUnztcb44sDTd7",
  "key31": "61mL7CULPLgJobtJTqcrF4o8t16om3rSDZFNsf5M5b2sekkks85PUzva3yfVUzJrawqHZxtMPuxpnLzEPWLaF8zR",
  "key32": "4hUb8BeTswSFC5Yrk8HYGZiqJ5Gvox4ArEjpqxLWLYKhjzcM9gZmXfwpWWWb7BAvqBEr14uegHZekTXph3CKa1if",
  "key33": "5NYXjpYp4LPh744c7vD7Fh3gFibCj8h2kxAvdi1Cs49v14EsuKwKc3evh2i2eSd6RJ3V44qeAtgE4cZS98SgjSfY",
  "key34": "isbKCUx6mbdu8u6ANryuaThKfKCoBBca78Fdnwph4vchPwoeZNGa1yRP1hqCTXnpkZvCyi3ARuuQVRSuXcLenqg",
  "key35": "3r5Zv2Y3tzmaWPtNmfDDdT2eK2ttwHpHKz8dXK7dMRUUEygR81SpoU3aeB5Xu9bAdwbYGXBFmYaH5L6YVoKC6tF5",
  "key36": "2qPA5GT7htNjWt8uVn5VUPQoktQLmSdMBVUK3FBtzWJCiU7by2MaN4WvhQEXrDHSsSfiFBCdEjtpjU14LT6PFMvp",
  "key37": "eaJgNbckdzNoWbn7gWud8kqfhgW78Pqhr36JGcS7fVPco9AaUyuuoqW38Dg5mpu86NiumVKrDtrFwKqQcSWo1Vt",
  "key38": "58oBjWfosXX3wKARdhEMfh1NrzBuykWxwjKGFPAbNJUqoTBccC1sZ61QwgsYgHd31nQaZxRRaa9X55CzwuuLLuRx"
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
