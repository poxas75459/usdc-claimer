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
    "62NqYDuKjaUFHyQCwpdLhRP1LXJhLjktncSFbkUyjAnAnUBPq9unVDJdPEiQZSjGzMYEmmTioQxPEukJDKKyUoRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WaXcHdoJqSrG3U5FEvEAf5voeJZJmd4wfsc9A9rfu8CRQwDDKZQvJFs84pCxdyU8bheDbaPgsGZzZ8hqCDKz7E5",
  "key1": "2D6JFEYjriMwwXHYat322QCVWmytaykYynUgE6CMwnp4J5XYyH5UzzRrGdvrrhsChsaEDy1jLookJFDPyi1jWAHQ",
  "key2": "3kopmupjqfeGA2YNUUhT8XuhXZS1gMRrTozthEDGskQxpAq6UZYqbr9inGXoc5fei68jbt2jSPRzXXN7zK52Lm6c",
  "key3": "5CuZ4sm7rQB88k8F1QmKc7RHfbCwDWuwbYfPVakWPzvheUBEzo3iftuEf5s8i6VuMCsdciCyRotDR3Gk4ygb9dXt",
  "key4": "4EbpfayE8ewQ88CzbVk72AsLew7MW8gMeX7HAt2ZAo7XP1q7VdjxtBxu9gNw3LeoT9wAp45TgtejvDCrzBPt2hpQ",
  "key5": "5NikNPyvcka2q9o3bLXCTRtr9xjw2qWzbuGPzS6hgJ7P2SU45H6uUEgqXdQCE9EKTYyngr3uudrdNBNL9BRekza4",
  "key6": "W8LrEUYxWwrgySg54yafsjL2XDm69PFsLEwMTFjYKyKQAzERNEcxmwwvfpnT4BZpmFPmZaeEJSZvo3BriGe1yDL",
  "key7": "3HoezXu9nySbv333jj8A8qxbeZYKseADPNRHspEDpSGXbeYTBcSJdBQUSsqnmGp8SKUJMxpsgE6og5BfjmKJusVf",
  "key8": "3hFMrtdjKRpfqMJFzWuFpwXe8LRhKeeYd1p6VYEVkfYwvybWnoNNUiRaPUFJrfmnzq7JoaLzJUYfYBPB3FcksNLz",
  "key9": "451nj5UuG5EnWy7ZaTnTXxitJpWQyxQBVDtmiLDhn2hr7iKTakvgsrvMWf5rjSjcsVYRYwZkk6u9w7Mi9KUpQFad",
  "key10": "4KCmn8NMXuRPpgiLroaib7NKwTtk4JktsrdMM15wujt5Xf8D7PTFA5w12LGLgrxcStfTchjD5LFQx9h4KYHyVLR1",
  "key11": "P8LXJSBn1RZHgGvVMVErMaVTwVK6nEo2adsYJUZ4gTPe97DEZ244DjKAFRGQV9N8tijrDBrc4sizu5dcYJmV22j",
  "key12": "3h5c5eYg3BDi3Ty4fqWtSoRyeradF2TZ7J1zgC66fQ3yVvmRwa5HeTn2eFrX2hnv43iePpd1F5fZgmWRKJ3KzwCa",
  "key13": "42gSxPngeTHf1pCUKqJAATAz8AW53qXc2MjVXM9ZoDozrF2EMp8BAcw7NGb2HwBMbtGeGggiviGF6o7feLkzfW8e",
  "key14": "PEtojmrKfKKwEatJrCB3BUdPCpnkifNXZ2kNJdcJnbJE2WBWeQF1DvUvMCPSB75jc92STzVJFuGBsjCFcbjsjJ8",
  "key15": "2XVC2XK4TTty4dEwZY5nJYNqs3wsCBaxnHaHwSAG592unFMW6jC4pbuNk4Zh5o9JVr7e81f9LzWxnG8d6o2cqQUS",
  "key16": "TNK2E1PLKYCf7p4UVRwAtXp4TxrfXXMdjBy8qDuvdpCATEiLaQwHrjAnAm2GPvmy1H2J7CvkjKNwEnVac7zXUVW",
  "key17": "22JUbzpzPFh72Mfn4kmVr4Fhhq4vX7w33DHZbnFRYVLfdCzrFPqRcaEk6iz7X2uF9sPRjeeeLATEsGmRahBHJcEZ",
  "key18": "3E4re6HQBGB5ZS3eBLcjippZA9pbKGeMXiAxtEpFWD61v2NPoNpmXZDC4snL5eMTTrHLfLZxhcGn4mz5Xci4bZrW",
  "key19": "3zHh4t4UvMqdj5qfoTfeMyyEsjAdDW9MrRJDNxrbeMZZqr2JRM8uSmCQaxXg1NiEEazWWxBr7Gr2uvck1uCeRW7a",
  "key20": "466KU3A9vftHyUoEpgzHXVpMowjKka3JBhYhQc61qepkLvGHgejBorbVUyqgi2iB891yKuRMwUQgRnspsbnkJgWB",
  "key21": "3muvDRVQBS3BDiiCLCkaWfyymiRAvkMePdDnyVnXXEtQE6v1Q4mcUkLWQBXxr35fNLto4QVwAieLFHK2wzJMqRsb",
  "key22": "4F2JpwDrDysDBroXS6EQPdAp5AejFDzgsTaXjB8TK29xnBj3o4WN7tLKY9aG549ogoB5ktwANrB5aNbfs5omaioU",
  "key23": "XVcSnAgeUw1Vhb1k6shHwFsNoLucLPRoCqry3v3oG235wmFmzNTVJWFhyDLcJnukqgtpc1VZNWpWyzXjRcL4qEZ",
  "key24": "22edpcZ7Pzdqvhcxiqham5ebfoXA4Ytw8cetpyEbv3dsGEkssuHutJNGJBvCyTL4b2hdcVcxFbxkvaC6iWY2QjSs",
  "key25": "aBVpQ8m3gM2zS8yrWvZ7J3pAuaq68QNthCMhBjmwKk7kYFJrg14JQ1Fs3yr9hC1xt5dJ8r4ATPjRnkG3neNZkMP",
  "key26": "a3ARLbEYkkcn8wn76DQE9a763bzPk4HnphC1UPwg7Hg3DJQmrRxmKmY3v6cd4drBMnHdKD6SK1V5tJayuBaep4v",
  "key27": "m9xcF1n8Vufq4dKYx2s9CWTDBvzxXu3dEUkuZbinfRMFiWw6Fndoj664HUXZv6iH4nh4QjX6k8Rg2dLHkDSonC4",
  "key28": "3zKrEkgeQNxvvhcDw5Ej1cs3D6uUiLmixQb74DE3FMDZVKbjs9k31BBWaRQcsuytL5ccSEvxfSoE2wR7JMvMhs1J",
  "key29": "kD66VUwNX4GyzgQLzLsML8LD2jiecefzHqBGeBtDvpsUgfg99cB666LEcXCxF6jGwwZWPNNVAYjjPpnCnuKRHF3",
  "key30": "4wLuhdxTx7dMDh4yz8hinCmLwwxGcsGXviKdWHLYqAizk27sWSmkU4zdg1nNQPA6HjY6jjBYQCXAhGWdTSgiUwrp",
  "key31": "2ruhP2aYT7Ba9nUoCNUshqTCSkFuAR5qfWvQAafRQhdBDcGa9wjgYgsyYwoZg2NkccFRqHi13UooJP9FcxHsAnJv",
  "key32": "5B3bh4gX6GN5L9Db8Q4pN4kfhvUsbiiWAiwGMLV1W6WEmxUkREdyHmpEJTShUGdpN4cp9u3fCJRmnGhjPSvS42CX",
  "key33": "4mvUHVsRL9WHNiNGqWtQJ11rjCLCmn7eKTRZJ5ABhq7AM9FSYqbmq35cdwQpQgSLk3TwefZdKh5nmhTegaT39mwY",
  "key34": "dD5F2aRB4WTicapvk4nsa9TCbimiUFHYfrPw7vx4ooBKrkrtnSSeFEBFQWqLfi7orYQ5kE1GkbXAJq7RDSVFe8V",
  "key35": "4HmNF73PdrxGn1QeFKab7A9G8M8eEJf59YJRWeKCx4HGE1xdCtxe1ecjU1uK65iyHd3qax1PKegx5eywMXTzLDcE",
  "key36": "59A1g9w7bWGw3f4AARtbRdLdWGR9DynnYKMBXgZ6cpRx5y9dxpVvbr215W9Z3mPS4AikoE1pXF9tPbepJPgbhHZd",
  "key37": "6AfaDfBbrL4JGjDm438uE4181hKrCF49DF3nMZDYCgp9ZLfWmbPkN4KJ4RZ1HMSKBZsbVnVGFaeHVVbLqsEtkLA",
  "key38": "HgYBPPiWahHPCzKybTdCG9E2pKymLFTAnBfCqh4MMhdmT5N2g6z48zEJHdAjupty3YrzeMKtpjQjgPzPA92MGpm",
  "key39": "2gXaRohV1kqhtKBDkHdyaYFej2X8xSHVUPmjdyWxYwsc5CC36oGoAGfyfGHPmhMpcYjrbEzvGsKmf2iAHbs1x28H",
  "key40": "4bu3xofjhM14fSzhqucJH2n196aGJA5hoyhLyNeYoGEW6uhdAezL7c2wFBtM2FU2ZoCNW6QWtG2ua3t9d1BDLhcD",
  "key41": "5De69inVviebEduwCYKkb68AQwquwCcDYkisxis8HwRYNRnkmZSyV9R7WNVXs98PwwNQ92aXtQ24JGQrzGpR6jEm",
  "key42": "3gofeXhqGJ5XnpHamcx9cWwXJG4Rhp7QQgerEw7gNARjQS8LU56jvnk7hYbP24jtdxiCXXB76EAU8r2tBmSMPB2D",
  "key43": "2jcLTWa3MrJvSbmoYP85CG2kH56zRzwuZBTu7tknHBStTk2Xq1HpGTv81yHi53uxVzD1x8yqVpRxaruskEVPwacE",
  "key44": "4YAqawRAAkRHz2dEX1csUp4iMsgq8dRo1AUrzUR9fBh8irvg6JZyhos1SpxJSjyKhozA99TaenrLgfYZjfoY7kK9",
  "key45": "5JzcoJoxwPyNFYX4iVQgu18EisLwTsawobK8Lw7mxcFUQEzKYceRMKnN71HvEb5ujcUNg7RjZakVahszHAVV1yc7",
  "key46": "2hwH5wA4bWWefKR8fxr53Lskd1RBiRyk8JMBChvMebeY9vaa36diFsk1uzXQqTkUgsos9PtjNKg5bovhaQC4PUHD",
  "key47": "syoXGyyLggV7pRE2Vqeqo3fYge3Bfus6ZRaya9Wi5KcMw1VyZzUjTsXGQFHiqMRc1g4TnPFz1C1BmN9vRUdhBXY",
  "key48": "Qdwbxb5DN7h25aNbeeBhUUrVr7GSX7yz362RuQPwettFVBtz8AnE3Hk1haE7N476Tx4MUmeBQdZ9Kjw6G7E54Sq",
  "key49": "2vWyuJsDM1oBCsG4weSy4NZeezbb7gHKAGTyhP6jp6pkHXXHXq5AQjoMrvGLdkQUmatuLFWERJiUGqahTfDLWAPD"
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
