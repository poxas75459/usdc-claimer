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
    "3uqBVKYbKfkgDC4gb9zgNnwsVa4Lzr3ktYwxcrU1uDeAAGqdcD9bLSHkSGSktnB8jZRTAjjEmiup2saoE8JijPeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hx8VQGhG19xaY37wrW7f45eqqVCsw29vwWMPhaMDt5cmYtdeWPbn2P514rNZoNVZxu1tRTSGszPTegAuq7TAeWn",
  "key1": "5qtUJpFK5ku47EPzCUvwWUjcLUpVHJZ4pnBE8t6gFBskCQx8wRDFU5wY929wC7vWVcosfMbVaDkiPet2E9UuEHjR",
  "key2": "4wiapjiw8YoPCCdybgn8M4BpP2ngZZTHs9A7uLFJYNNPKfTMKxAJ3r5JFmVmrMqcNrynbpiFpjk7jfJgrNM628Tg",
  "key3": "dqnLvMsrypqmgqgZ8dGEgt2YRANLfLC2AiCJPzi4JUeMHWLkRN19S6GvQMY8V2L9EZM6phVxFBAL5QGL8fjRedN",
  "key4": "463HQa5um8iDVdJNuhwNzfe8koxMpPgCrjKoqe3v8pnNRpRDa1DXcFqtAx9cq3BAqUynh6wcd1aU4BW8sLjgv32o",
  "key5": "2mj4Xp1TzujDmftUHywXMdJ5cDm5iSJgfTRV8rS1c4UzE4dY9V3je1a3NFZHcgRcpRBpE8LPEAgQmMUmnyYW36Zw",
  "key6": "4hEha9ymykooGMDHEYPfEk4WtGLJLMKgpMgJXYCTrp7FttN39k3PaavG4F2ACo4NYFY9uRJhfsFhwCUbZ1Biw3Wb",
  "key7": "2s3Q5N62LxoFfWkfWi3JZbmrc7CLGE2nttv1Zh5rBY543Q2bW178ZGjNVaqkdiztswg33gYwxktV8HBghZQnB1Cu",
  "key8": "Qe1LPNW79D8FZfb2MWdiLSYy6nzJq9HoCEAkzYbfaVDoR7JQwgfypGaQW1hjDzQ7Knz6otkjvbxyviZih5asTsy",
  "key9": "4fjH8Wa3kPvN9yic1yGgYWV4ebDKNUoh3pTV4JsQ9fvk9WaSVmnQoWE2tuZUqse3DnANCiz7MYFSa1jNBcy1p1UN",
  "key10": "4HKz2b1panNRsMyyvAt81xH8UG62mTcTEfFQCVNywB2NMH3nUBUGD8apb9WyV17U7QcLHT9bwiSQRcjs9vXSCJh",
  "key11": "MC7CQJjSXnXNmSmTS8ZNZzUxDgNzvL8zjJ9wr3JWZCX8QzT8ow75TUkfGGE8KrPxXWdADp8tMrx4ykzvbiBzMvc",
  "key12": "4qPNuFfhrurDEE5swiJoQcSwHyGKJJCPDVRrkfYR16bRvSpvqqEhHCQ79ZgZS4wyQdhpTT3CaBkHpJ5D7Zud3tbF",
  "key13": "4A2gtjhS7FGxyXnBwPh6PGcpXDTezC3RUj2bWQdn1Fjno61VPyLKpsWAk7yQdbC6khfuzeJBLsH9edApLBx62gSC",
  "key14": "4S7fhtT6QPxGkPk4aTCDoS44veNwKwYJ4W7Cf22Mz1EHGTwLbSKgiwwxoZf4KyxT1y2RtkuvfRJcVsnKW9LnCWYp",
  "key15": "2Ur51s9oyZJNraW5AACPnLZEN7uyGCNBASPrzt6MhigineWYJrVrkov6fJGEy4HiZPd1efermLtfrUUt5wCUosZK",
  "key16": "xEMBo44conymhcLWNP6yxNzzJvtkQRkErr6DK2CLrtLCmd9qnWa3m1LyJqAeiR8byJhJnyWacG3vM6UjDpGpLmS",
  "key17": "5fdgV7Hit2wrgAxpNNL71ZsU7DF8KE9UhKVVWDCafoXvbFZE8aQE5sFhzxE8Y8hEukxN2z7mcX67LysCytR7rJGF",
  "key18": "4K9hUHsNCeBmB777qSFmwvfiAMGtn19cYm5mhovrb1GCqkUQWKn9NCA61DAdBsEsZcLdfijbokvesAEqVFfhcpR3",
  "key19": "2Kxviqt7Rzz6wKuVDw2tbbo3qSA1KQd6pY6EwyaF71S4t4SP7FMmWrinR3xj7WwHACL5518hpJDipk5ZwNy4J9Ex",
  "key20": "3yPWQAgiYBVJmYRvgtDw2ZRVXCQ29AvY4E8fsjr3ijs2AmqFRoJwNi7xpouJ7Qhkdhsx9QVVTvN1rV8X32AgBjAy",
  "key21": "jM9K8Ci1Y73Zvix9X9wzFvSKgUZbiGWMM4L6hJRWBYA7yFKCxF7HCpU2mVpLULrzJYmn33XCPcicUtuA9KzavRK",
  "key22": "5KAJZCBcP6PGgDZhRBcrwTaBNUHYWkhvvB8giaxppfpKNYWzeAQQg1gitfry9b31waSXzRiAY2tQcBLSu7wHYs2A",
  "key23": "4EQH57ECmHQ4Q7PXnSsxbnsD2mBgborXTQZmj2wcFBaMWWScAjNcxkHdGpDLUWaA4p1UX44bourK4CBE5Ln14yhL",
  "key24": "2Cu2SFECjSGRUYPeaJZBeqSFAMeASLmtyN6WDi9CdT1yJsW9Yq9NA87XX65d4xPRphMXVurQJs2EQ59ovaSjhe8E",
  "key25": "w2pf1T727xzNyEWMHHc4qrZnkjbHcXrR2CNiFCzedWA73H65fVpazCcjhiLQz7PEyhVq9UdXE69pnTsvChL6tfe",
  "key26": "LWNwqaTyvmc6Du788gGGWFbKYSWLAfFsrCtfjgYWk2RWrGcg2z1H5png4geysy3b31nBoBEXA9zXbnh4MKhhfeX",
  "key27": "3wBxiJ5dcr8UCLdVygW3eyhTa5SLr2jAMhnkhqh5YUAh3LySG3Ev2BzfJeQakwuM4eWhTScE1UEqGBgAB6HUm6Zh",
  "key28": "jr7fxviNxfYq8WwB6dNJps7F2j8iXMVsVAee9xuW6PapTdsMA3biadqhg1V5aaNWSghQfkEkH47JJpDB1mWWF3j",
  "key29": "CGpxujWrtxz22VMbvZGxu9q1b4hT7yhekWMMc9Vaq76R2iUXzPjdCW4iEEvS6UiJR9sxmEYQfjdCtEQJVGyxVjW",
  "key30": "mb3YRGgKnZkrmrzZ4TNk7c1UNeoVtKhzJwbPwdWUtJRrrs4wyuyBwoqw5uZdHZ4ZAbhVwgVJmSTkHtEiC6Md3M3",
  "key31": "znWcLwpLcRkNPbz12Z9JTpeXECFviYz7xJU7WmZpp2CYbgwafUuis7dzNHS7ChnwrFv65xqbpAGyNKaY28ysPsP",
  "key32": "2yprfWdyYPKSp8d7ohERgqiNRLMjqrX2SkRLz1k5pXfTXvvzG6SaKDwsVRPnezhFpdu51yFb8n8qDeSbEKHsa6eT",
  "key33": "5apRZDsywYA8oqWZU5XdqdE4P8VXTn76QjcK6yP1uchGkbBcRhtmt8umDz6APLAX5PuXQiATNAwcc58QmM9MxcAQ",
  "key34": "4MLSTgXoBQZgnupaNUoVse5iUaKKq95eTPpFoBcsL4uryPMgZ4NfiHQSHqBkPNjzH2z3fict7DnJ7SagbnEW3su2",
  "key35": "2AYRgRs7R3LWy9QY68ywhu5qjCa35siVqEcm5SjLiSX6jJygYu5QVJAq48MXE8koRkEyDDouN9WCzRKSgSYBhkn5",
  "key36": "4Bxdp2HbqC6HYr7aU9Daimfis16gPrfzGEtXNLLZuhVzcrwaiciR9HoSX8w2A9hPZ5wLA9W4uMMD3RFyK1wRaGTj",
  "key37": "4A1CyG3Gjm17pdcAkVMHbHdKvdBHYzcfMWfBsq4QCTMnJTSABsRVyHt5VMeXQ5jpB8VvbA3eGoEaNVoFssccgZhH",
  "key38": "4D7iYVE7UdhopiweNC5KWNpEeNsEJCFb39n4BahbBFUZkohrPdrbRS7HMEDMrqYGqBc1uDCuNyVcEpGvod2h4j2t",
  "key39": "5oJKsM92FfUUThnEookQLY7YbCCUVT5KmjdjuuGF6MjZf5L7wjKuoqZvB72vH9NE7qrKdi32H4qnjWtA6eeQ7j3E",
  "key40": "2PDqR6Lc9VNUUcjUjP21ZYiz3xRj89gZ9vKEYESqVy7C2vEtkUezXLR9vHkXrm2hojG17TF5dAWB7kJTCUReYMDY",
  "key41": "4pDfEVaWYqTPsoQq2EeZTRXFyschprV51fsF9J4aY67GqAYytyykYQvbH3AS2KqupnpQJviJFYEigxo6Sf7Aagwp",
  "key42": "zX28W68wKbBSbmVtiTWAt9bHgwhvhQJQrHGbTBPErFHzruah4X8cS6AMLFS8LCuqYFj7A48iq3u3XoFNDeYLruu",
  "key43": "4EgwKr4Q2KJ3MGxPWSU6r18bYA5nK82kuieNb3qHsMLDFDpQ4vQvcpHK8CdbkLcJ1iArEWhsVYjMu82R8qwhEKHc",
  "key44": "2jfFKRkknVGzMmhFdZzc2wzxuap2dGf3ENuk9UaWjmAw2Dv1mjpkWNixE1ytdjEAet2ENexUKMruiCLKj9kT1gXc",
  "key45": "3RyuGjUVhV4QKZgRKf2Ctoyv8JCKs8mah94d7rYbgLPd6ahXuyPQ5V6aAQvB9NQrhYHzzVvtYH8agpj1ZGFMRZea"
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
