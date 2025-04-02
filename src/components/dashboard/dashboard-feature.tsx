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
    "3cE4JuNsCMjSf72ceJ9Y34kgwgcEzo2xNLoap3CEX8JKgokY5gPsXnjMoCLeqtQyeZtP9RUAGMkHxKE8kR3g3qNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8514F9xVEHoj56tJQtTBQ5aFuRzMSWsyenmTsyk3Ez33ScyaZkoZgqedbYyZxFWHveydkbvEkENH9sAVirYMCHd",
  "key1": "441m8iMtBewT57ht5RSS372Lu8r8QquxJcWrttqReQHxPvHJr4LWar1P9wcsnBHaeU8qzTD2Qbd8qVHd7M4VGMk5",
  "key2": "3c18S5vpPgx7xctFdXDqSK3xq7LJ4zwJZttjmxkBTxT1qav5XPVqccn4km84QSP9m3pgdE923aKuZnypd59ijHwD",
  "key3": "4vAVTLZgDKpDopTSD9KrXxvRKozGu3qFPzWTBh3SJbhivUk1zwxCitxYMDkpKVb78sK3fv5tLQzXKtP4uSpbexmb",
  "key4": "2PwDK8LNXF5irQPABkm4HnSVxc9NEyHUcwojCyBrrt7XHUVaH4aenqqy8F3SisNJgmd6MuTmxowSi3CNfjq8NDvf",
  "key5": "3dzujtvrYt1fJyJkt1cKZ1ycyTXPUqBHSDdf39sU93oF6KZmzi21U3ztH5nJ3ot7RJW1ujf4XVvjmsZHFXFpvdXh",
  "key6": "33pEPUGwQ6578BYJygVpjoekqT9Zce1pdJ3fbpaG5KzbBzP41c7rwniFCPcJaaS3WgTVzgyUcTwxsZ3iuoDZjJk7",
  "key7": "9YwGokC5usfbgHQm9nxwYYKwU8RsT8tytDeXB4kmH4N8bgKok7QFVZLLvu4h9eePTUumTs1nhTpLrB7s2qWxhsE",
  "key8": "63soZLDXDZKdey5BM1DCb61KtbYaBaK7Fyx7pAfUdusUqJcFCiw3yXKWJELmnbXPwLNv1FrBGKuXswRbLKsMVsVx",
  "key9": "3zz2RWGb19jK1f2JkdaJaukVoT4oYnXAPmPsdJASgZ3sNMoQo99WhHX3uNc4Nq9LNZCvDt5LJe8efpHWeyguNcGm",
  "key10": "4SAVQKzCn5hFYoixnkDe5JXhS1QWziWgjyihVekjqscU9BGHacudecLBdQa4VUZ8jxpjCG2KL6MUpY1yApn6s2q6",
  "key11": "5wD9abMj4VXNXyTziM4EpgYHEqw5iL4655VWDedZhJcvxLWtTTYDzrgWca814P38suDaZY2kaTd3rQLxa2LE2R34",
  "key12": "2cEyiGRXUivzvPPj8pxsUaXFvEyQUzEZ1JG4V1sXzRP6UiVtpH8RvP4YmX5Z2UhT3HgM5HcUDsFscvEZM5yvj2BL",
  "key13": "57TUy7DTJapVEDCz8Fy8qpWQFhrhT4MzAHegHDyMc4u7i15kcA8tS6Cat2de2EnawpmbzhPe2G9XwCKvZtfnre5g",
  "key14": "35ULmhufJ4PZ9Dv7GU6bXqQF4NncqeygeoSLPvk1eQx91nUFzfvvN13nxSCCs2fEaQiG5P25wqTW6MEDNGqwD8ZA",
  "key15": "cSQ4zBJFuQr75fN7M96fpCbrbyLu3MQrgoRBGFxVDAZdSteqrfzJrnCPwna9pwGWUWY1rAWWmpK3aHidoJ2n6Ct",
  "key16": "5tcrh3gFs2wwfTuTKu8HRAp483p4BtLQtmWN125ViQkbCH3Ur7VcmVFbDeCtm3eUSjakFVP8ES6Ae1pdMsK3uPwW",
  "key17": "3yCMv6XLp9Y91eVJBSMK7wqdM8PKs26ZvbJgWjFkJWVj9DAfmEaR9mzuJBUqqNDDcNUTZY8NupzYMFhbKFm6Wm6L",
  "key18": "5YzibhjQXaJm5fhYb4urEMEVpuE8KfTnnTYGWUzooWqWy38KpNzz9xykhg5S9pMjmqCZitNWabJsTAGPKVmoF9A",
  "key19": "5bhsEkxgpLWKWvZocEuzbWgwVn4BWxmpmbYawPggMxNeN1ATJxNG3XABuxebhNXyUPdmibMfr28wLZxhrbh4Y8DB",
  "key20": "3DpmwmaXCPH9sXJ585PcrVDApZuFceXxhJBXefE5X9LbbJvDPj7h21LFw5caq7StWJop1ees2vHZZBvBHjM7VtD1",
  "key21": "4BuCD87kowXboPTNbSZQFPLBBDqjFRjSQHSCfB1491ostZLimo3iyZTkd8fV5EqUV8PNH23Nv9iVpLEymFRLnm8U",
  "key22": "5vrQAY4nsRdhvfYVywWy9DiHhY1Stbmr7jbicdM6VgLVTGGJzkSBHPConav1HHKGx6rYzurszuxWwSkMGf8LjnFJ",
  "key23": "3tM1Ek1o7LXCmozyuC8aEUYDDZvB15VctXbBhbMHQH7LBtS2gcKnT177pFswAx1fAMyWKnpwkzMea6DL9T335r2C",
  "key24": "4vraCKkR7NdzTCqgv55XiUd5LPK1mUNma26dps6mwhgst69Q4FFFLo2m4yyfFEJAduCJZDWKsQYDxrgqE42CsJ7c",
  "key25": "4Q9DPYLCyHqYcLDS6Wo4nJgdqz7YTLoTjHG8srJbAVBUbH2Sf6HqAabcSbyADv6aMFyV2kPsdvFGPwJVgkZ1VCgH",
  "key26": "2pLHLf8GD6PXQvYE4FW6nsCi7TEq55k8jSqzjgQ3Q6t9tgWXwcJwpVs8fvuX8bHtxF92u3AhFGAS9MBNwhJvjaqG",
  "key27": "259K2Myscw8ux5bonFTpDv2o6hK8f6869PDhRfWBQY8627NM8RoZQu2Cduf1YREjCWht9vJxopivxzJKFUFktuyd",
  "key28": "3BWXTJtg8ivZn285jz1ZWvWp1Lxo2NzjuaPWXyfXL7UVhFXKNpTz2Q7s1Sz47L6yUaKZE8zTVJm3w5KCvijohaGv",
  "key29": "3B9kTsy37jmS5WAsYAkqQPeDo4i7eSthUDNrHy5UbAMRBHnKafFTMhYwpNcqJVTfprBXEf1qWSwTutT45xogXQe5",
  "key30": "36gBqfoQb8beUDSYCjWvZuraf8Pyo4RBgvRxiHE1APxtev4hi9aDK2kLT9mWmZ67CcEBocxjMyRwQ8D2MCmzPAzS",
  "key31": "buy2eSqiHwy4ZMw9ftYxcvPPBh3ox1JkipfYmfpDRA1i3eEwRgmu7DCpk6o2TyH3rQJtnmWBSG7uEzE1CT3xG73",
  "key32": "29epJiqwPmCi2jPhm49MLibnyu8PqeoF4Ggehmk4zeNmPtLdeE1P47DgzRBtteFrrdKxugyTGaucZ1vptoMZqBtR",
  "key33": "48AqhfymwiM1pGpfT8zjxKUM6NUKb5tiZVK9nq8Je2eWifd9Z2ysPdb47DxDDCUaDFhqe6Vc8uvmmv6AgSYTLUP4",
  "key34": "35HcK4LmqkvbSejiXqvG6BkC6VnDTWB3jh6ZJo51jteB1RnBit6YkNeH8htuoiPpvPznBPVjmSPBKvWf7AmxPiyU",
  "key35": "R7aUNSaweRpBZ362yFPiCUrwV2KVac65FgmvEfzorASE2eNRKnNHNp8KR6TWbLpknRek9mSJbXu9UyqZbHUo127",
  "key36": "2XGLpfqorhHkGM7KXdRZdnJGxTRsPeSkZ2UsSkN8C1Vrr6hcNyfaneAiKrx1txMFJ27EdBWqQYMWNYpMTeJfqCWt"
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
