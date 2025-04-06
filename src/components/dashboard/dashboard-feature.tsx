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
    "29Ev9giB4sD43d4NqoQiUtfZnDtzYpEmzYJHCdMGt4GQ6QthTmwJGfsSsfeFqYbwiCkL7mhVaQxSYRSUomBG9XEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ewMBAQz4poVUci1eDut2kddUb4P4VHSNpjvxegmkJ8cgHiLfFS3Ewa6CpcezXFLjnX5ofYh297nuFokZJb7ER95",
  "key1": "4dRVxeRH7F7a5ivEwEgqC1hnRASuXeqycYxV37p9V1GgPBrxKBgPWGC2XgU1F66D3Xzb3JCHwcJzwRJWbe4Lyyuj",
  "key2": "2Hed6shH8KfczCs5jJejQxRYXzy6DgSDzWKB6oukBeAFKPPHVFKXrQ5B2WSATLUtxNKm2u3dUF9S5mrH866DYf2d",
  "key3": "59pknT3NjGjoKYsVorPEhTGXM4WjgghsCzX99rXgiZ9fRVMuLjkb3Jiu8sqeccLi3JVUGCnTwxvfrUEPRSz7PnUA",
  "key4": "pbUoA2GfNnTCh7Ra9EKs3qFjULeFrmFv8S56mk5otYDn7KMFx9uuczguYYG7SDNKDLsuEqpuSMLX8y4gHkiTFFB",
  "key5": "bFbGKfUwB5peEtjgLD6exgiQSnVucBxttgFgU5Z1cCoYW4PBwuyYeK163p7gbnZ3eR6YtGVLZwKTZQHDZ28PZxU",
  "key6": "uZNpFD1cn1UvrsNGy5SQQdFZEEXigrs3z2dMWprpAzsRD87eodbgTRqNB7JGos2cRWZxpxBb1VP7raDWdJYUJXi",
  "key7": "2WDE7rs36JWK9MfnfVRqKeXvY2msTAX1dw8vreew2yBuBDFLM8R5r6WLWdYy4WDzKKXqMqX7YKGYAb45DnpnWsEN",
  "key8": "4rXxi3hAKaBB8TJ9pqTnnnrEXntBoiks2dpZKP7eu1kxqG6okXZt5Phvra3FCmV6PJRWEeCgWyi23DuTs2ESP1e9",
  "key9": "CtK7tmUmEYJkRYmt4K7uw9TdCVYvMEs4LPCgMukg22Y5iyJy93LDG8DQZm1V7VNWtZa4Zfr5DYPdaZgRpDLHWak",
  "key10": "4EvP7oJ51Ma94uT62XNvMwkz4MpTYjRfoQLGLixAngajMeiFhyXCVk8r9RqvwKZ57xEYaeEdRJwueJvy29DqBw56",
  "key11": "5zN1tKd6chjnJYCpF6YdkvFfbdThLQtoJih67XM5Ayw8puUaps6SBBwb8XHKF2W3Lzou3ZDEK12wwrXc6TnR6qDg",
  "key12": "5xYoZtBR3DrqTCavPCvTeHnAXQ7xA2ytNYEBSFM9nteEZ4ps7opofrmdp8Z7MC9o6NYnh4GNVDSK9sNAEEHsLavK",
  "key13": "zDYrxW1SyoGnD1i8EQwF33CypVDDeojyoAztB9QKWRdwxzB6iT5aborTdAYJuoP18TbtyoFCBuA7reS2QBiFzFh",
  "key14": "4RppUWMFcDP5Dmyz1QZXFuyALSMeiAcwuvxTEvCE7GGNd3AppPYmuFVHUapPTZzDxBDDbSqe7VkMhAw41E99FCQt",
  "key15": "55hdRXhBoZNFPvKc5GRMEBgUBxDKVSq7euW7JoWiGpMUHedz8QshniW52d4k8fRmH7t1NH2FunjcDN3DuNDUTw8P",
  "key16": "5dA5btDBg1zNjMFubUdJW7LPf7bY7ChQ9s12yQMNg7qgJQFaxM6nbW5S31uKiSER3A8rYmDamJygeLFYwcWEikFd",
  "key17": "2J9fG1pAqgB9DrxXV7NmXfvkmyQ5uuZf9xxyUrrVpFwfVKrKEys2qzAB3MgNxgnuUb9hyzgnHe4RSP7HRuds5UVE",
  "key18": "2t2cPjwR3qhDvJHreFQ88Rrb71nvpUicwch3N7DaCfFaHjvba2nYSBPEC85kQCFuqTy3hg8QSaiwaAPRUrFhU9aj",
  "key19": "4zuFmTwizXTPQ2tW74RfxF8mZNN2H5FYDFaCnAVDXgowFh3uWyFHS8Vg4cCnXLc2ubsgKncLcSsPjADuxh8xQuHN",
  "key20": "2tKDZ7LcAQsgSDVceQhDUdYR5JtuF8oZ8xS4mg2bEs1vizWDacVSQaj3AWNDuRKttW6WaEwGkZtLsLgyEBziS5vw",
  "key21": "49AZ76MNg4uLRJ1JBnVTmze7bMo581bJEJF3QSbiLXTjGTCMotVtYXhSNutverQC3Xo6piWFeFQXuLBdLGFYK2d",
  "key22": "3sNSuwL6whfdGvdTLK6GtDR6dHYtteCC3Mfx3Gp3mBpj2yCm4L84ReS5odyJtFc3mRSx9Pkw1PsXSX7dkqvWsVTZ",
  "key23": "5J22NUk8z522HndtUGeM4oJxPHjEqMMtqf3AA7yYCU7SKHFtUp6F82d1bR5CTwFTqpjDsnFVMGEppYkQwxUycyc4",
  "key24": "3iqv9C4QqnhcbJQnFQSvDmWcQ13ef5TsiWQ5YVGhYr25tYXu61VZXD1aEfFioqNRWuxcDKAjCNA3385JsqA8N2Vm",
  "key25": "3ndjLNX2dcqz7qJo5Se5Sd1rGwkqCo42RMS6AjtUCfTq6ouM9RRJykHNqZo9soMRbu96yjiTqLDoSLZceXfJvAPx",
  "key26": "WRXRuAnMXBnmrYzZ3uMjDo597BJ5naEcQoicuzCSBZoMngSuer3WvFrCnGc1gtNevKK6sRDyfZKkYJgP5BUv6pr",
  "key27": "34UFsQrmXRoCKfxrxj8FMhBjss2JzeWdUqxbLjP66dXJXdfHfmxbAnTtticTxpFGxfofwFbLSJAkB7B9zu5GovQu",
  "key28": "2wZJdfJGUvwGR3T8Qm9vdWhvHAszJgaAwQX4DComrwb1yBH4Sk8bp6ZxWnS8otZerGhQkd4AL7WAp6Mgrfp8DTir",
  "key29": "4iVALeAfU4y4y8vwKqyirV4HWA59x3X4RL4MPuTPBuGDnJfKKeHFVQimPUwC9WzqhRnx6w2MKrfoB93oeDsC2oSm",
  "key30": "4hWCTknBe6Ugn6p5qYrHJhyGQJC1tdEcsAKMZa6mwSv9uQoJxzEwSWYEbdabZaUA8VgGNmjNuCU3FmKitmc1Mh8M",
  "key31": "5ooJKv1j6ft2MUaDFqLTbqCtgBMjZ7LowWqYNahabh44Eu2Z8y52e91crJtnyPSJLhtfHPSf7HfrnisoXf3oWQEV",
  "key32": "JHWSG4hvdEcJFd6dEgRVRD5YwyuJdfy9S2KpEPaXe1QKtmTrachgsneuXNCYNDAByWGsvXBXL92ApjAahZxBXu7",
  "key33": "29bvp4SwHL78k3EY5SGEoCZPToygokxFB5Ey1xhQKzrVhV1ka8iAvjGh9rfM8KHwL1WvuWi4kqgSN13F8TL2kBAt",
  "key34": "32cK258RHXQWZym9e3DbPex58giVs7yFJN7AXq5qo88NWFF8KLqWjyAp59CFrEtZQkJcF8oCS7XgGL9NPyDtg1PK",
  "key35": "5CKqf4vHNcYUpv3E4S6ERtc9XUmrg9xMgqzsSm2y23KCCdVaSuv61qxHEc3fSZJSHQWDAAWtHmixn1ier6V4224x",
  "key36": "25JuX3VZKArH1mhWGCmwjPn21yuL14zA6uBvvPmYvRiscY3DacRWKv7UdLWVC9VWgXwHfVLUCfPj4JRuGCHFjHhy",
  "key37": "3DZCy4nZynZvMnajezFQB2zdSVAh6rbzAf3LCyUhhAGd49Zbiz1Bqkso6iEUxSw7q1ZNaBLDGnXDerE96aTiLVtv",
  "key38": "2ycUcNWxUCmsbD77PnKp1ns1BzWH2sCBTwv7urQaLghYfKu4b2SFwHvSJC3AW3GCwVzCGfcnT3zRXRmwMVffuRBy",
  "key39": "4mm2q3csAHvj8PkWwKVATt1jwn6LxF712mwwP52P8Vc2cU6kJ4P9JsDy38GSqEoyXbUi4DNbLkbiFDHQ1ARwtnbi",
  "key40": "4zd6Pm2c6CrkrNfmNbuLYsdtxKKNsUHW7AdPM6zsLJWgvraV86Q8Po2wWvtaGvEFCMswFz68wqTrisULKd2SVPSm",
  "key41": "5dDsJGLRP12b1bpxeFsXLqKR7SjwdZtRavh2DVU5UPPY9R6oQLCYJDHkyq9uWmmZunx5iv99PN5pqTBofGRSQa55",
  "key42": "4U9Ud4nZqZ4bwXK7UbTqmBB3HWGuFUJAX2snphHF2yeMmsdW4arQTvNxBAxCNC5NtW1hgUKQnmtJ7EAE3cEbwBeS"
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
