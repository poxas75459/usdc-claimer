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
    "2ffFBPCwwMpWZhSbiGzf3nM43gGV6gM9DkhyU1TJDbC3rpnvxzWyp9BjcRqnAoDer4pGfWW5kb38CZmxcCMpG75h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c9WRKgrw8H1uJdmiPCbe1LXcYYViBX267h6Ai16jUEUGqe3t9rQzR3J4VLzEK5fpuuYRPaNtJBty66NLDPWw9bB",
  "key1": "oZojhmTWS565NLwYPSqTrrG6Ty2h8hX5X4gHYnD3yPzLXiKUSNy3y3J2SjTSKvaQ1p6b7zRDL5RfMaMboJq5RRu",
  "key2": "3A476CNoUM3QkrnNkRRfa83pHWtxnSmJiYyeq2UQZ4vRWbETPVyYgHUYEXojuRPzSeCW1jix9Kw3my4kibGp7nXa",
  "key3": "3FpEaJyhWcohRRNR6hXnsGqnshW8gew6hdNkvih9aKRyBMdPmdBaYcx2CSgw4YQpsdXUJ3wMAc6w2Tec7h1gB4bH",
  "key4": "51WyrksWrZCmUpe7Nip1xwxArD1EEqxxz4wsR9f52J8Qw4VT9G4Jryyphfe3fT4cg67RExV3qkBc3tVrxjRabEfo",
  "key5": "5n17KDVuduvvML13W5B6v2H1ghS69vveMSzCzmRUqr5tr4ikMoTMeWnK4LEDY1FqbHLQJTKQ5X4dqQQxa4fzfr8J",
  "key6": "3GeEdyChLp5sJgrPa7oDLSGpVgH3f1KeM8Yom8w3GjgURcTc8ozegi27cz41S7R9gYirpFYw5nAaUSUVt68RC3Tp",
  "key7": "5s4BE5GRHDzURTnjfJqU9ZYTixZV7nrzJR5U5TFtnQf7XytCq6BukL1Nh6Lq4PaUN6NgHnEuTmt4ZbRnRuHBcDzk",
  "key8": "jYhuQvC7XYp5bHscxeeSHeJwcYA9wKAv6DA8fkdw5pBdXZiMtSzRszvcxDosu4jZYYS3h15D2uvBJ6nLi15EJjy",
  "key9": "5uSb363ozkaxYhrWW7yLy2ws7i9uGrxRNWuCr8x8L73cg6S52cLqPa7XG9sEji41GDn65nB2cowjPW5dmhNrHjjT",
  "key10": "3FvkZL9EQ9bHbWhvAyJDoKoq3T1dFrH32dNv8LQsdq2Zvuak89Ns383nvWCrLmX1yUAzi88w3V2SAk5tQYrJisbj",
  "key11": "4STJRSGPPBjpxbDkwJ9e84CuvCTWcqBbhTYY9y7DTL7WZkyFoDj5MzjBjagJWNQCmfSKXyHKRektkyzZTHjvGMJw",
  "key12": "5qsymRgcHh8Mktg8428wLUyBsdh4ammhcSV6mZTtfFR5wWDDuxeEpA4eLXTrKN45TkbYBLybYXwYFcXCxY4c9cGA",
  "key13": "jQoXWSuKn7FahqTEU761cCNpLbaKCxSqtY7xWZNJ6YFx5aSsHqtNzKweHJzrFQat7Hedssf27EoBfZmNZ6LWeZH",
  "key14": "4vhbigHXyVweXrY1FrvYhCUNESeubvELrsBbkevD7DXpp23TabBpN2yam4UXxy3c6hPV758hBJHxo5mJC8ZCeAat",
  "key15": "4GcmU6mNDWmv5YTmRdG7QcHdNPgBmTcurLdWxxQj86F4QuCfWvRjUaimMhNSZydphjac81RJ61h76XpFf3zsCW6R",
  "key16": "2NUdhBcVjKnK8Sezquix8xCprGJDTTq2gtbwg4Q3Bwfz3zoHA4z8M4Qm3RKY8tMFdVsKbuGhvWxLpG3es2Nhh6MZ",
  "key17": "aAYbA4V3M2MXeH684VrGcEKEao9H7o4JyagjPw3wkTeLS6FJJfVUrxS1vQM1eJCrAcctqSVnyWGVUErRNnjWbhH",
  "key18": "K4T7BxCQZegvQv2HWrn2sytmfHmSNdYkJULPLWmUWtYQGWRi9kUuC7P7kFU82nKmeFHmdrQhP6GXZYakPMQW6Pn",
  "key19": "Vva3eqd2MwPajyqdLNg5QMo81BvPEETNboTkGaYkWLC9vZKv6YtyQ3aPwPHCJamViK4g8VvdZxa1Eq7485eRSCy",
  "key20": "tdvQD64hToyNd4K5K3kw8rpNH1tbdGppDFrMuddXNjix1h86iCAzsvmQX4x3qTp8H593DyQyBjRMjxthB2B4MzA",
  "key21": "3Lw4ZvSgebSER9jTzQqPbhWWeKwcQAUTFiMbjmhuqA2WMLuEXLU5UN6aLUoPj39vSByVUhiHEWUYXGtA2UNcVQNv",
  "key22": "8SDyfUhgRsdK4ZJemq4AAb8gMBPqz7wbrq5Zgp5b4AGwDUAxzjhGQnu9WgEt1WiGg4wpfEFsimxtEL9u859drdo",
  "key23": "5XGt18hZtW8rxzcRjHuLkmu2TxiRPit21UjNLExREwi7nR2VcpsCjbp8t6PEamNFPa2o7bTSFiX6ttU5JtY7eL5G",
  "key24": "3sjmsMqmYi3kHeoztPofhA7jJPuUYchBafeEXAc5kgRxP7VUMPEbxyfLcUi9yGB8bYhnxnPGqZ4FQ9tTg8CusDJ5",
  "key25": "4uVJT1tP7ppZ6itm2qLDtK1fXZdzM5QXtz73dcRevzMtvsEyBE1GB3yE6Nyye8EXQmVnxw2eWugD3E47fvRmFtsJ",
  "key26": "4Pbt3PCCNsL7wceF6yHdpD81d61Fwc24niY8b7GMVnxfLo8GcShEav26sQXwpZ8C9XPkqPYcunWdT4GRwqBFhrqh",
  "key27": "4Y8ZxUWejmE9P2LZx4ESxCrJvBDc2NT5QfJZwdPDbmhUbS7BR1B2xR5PCYDdpsxCTb4R9f8ucWNbvRp1oqNifnF7",
  "key28": "hKqvWyMcwNms5ggGvHzpYGpUAdZuhUVeYmhNGYtjN9EboTTeZQYRNjNrT8jXoBhNynjS8EBK6ZLCv4h21Z4R8Fv",
  "key29": "5CmS9fyhrqXJ9QGXPc4aPu8CPzGaDP4KSnhR6jCEuTss2xxQpUmkDiYUbsQ3H5Zcmzq9TFhvhxr6sQLqSRnfekJb",
  "key30": "5ct6YrVqJPKpxqdsapn5XPwtQVeRNNzMa8k13BQmZdXTygxLaPNdU222hQSaHz2dxh45iMt7LE5SA6ExKnRXcwy5",
  "key31": "3gNXaC1QRQAZVrLQJqCsuGizLZjs7pv9GWe8vDwVa2MzH7CPSZ39dUBwL1V2vMKtPe8Xeu24CkjWumUU9FjhCNtm",
  "key32": "1ta3ujetPPtymaes1TwcixkpSS29MrxSQNCgdsEMRCAmVJNkPU6mKYA335NBFN14ZE8eFTMQ3vUiq3bcomMPEwL",
  "key33": "3j3wCy1QU54wifkDhotoESzd9hNsDXc54g6GGCurYqXXpNS7k967oasJFdLeaMdwXkt8wLuoDqGEbFapyzwLW82Z",
  "key34": "2LnC8pokQpSDCcEGLNfTRBTwLzKhaichezFpX3TRvFjdQnR5tsNuDcERengq4vmA192d2tn6oGWsD3RSFfBjUnvs",
  "key35": "2kMkXGsBeLr6mBm74yttb4FbDY5APLaneKAf7hJySw3b3U7o2NKgegHUKtyhnGEdvYq2dHT1RQ5LuF3AwLiNFDBP",
  "key36": "2MSG4wohXDyc7d7ydnb9ZRrLKsYKhVKFwbw61jSe6jKArisxHHTQ44dXaeW36U4fqRe8jDU6QdJBnnGCnENPSAfh",
  "key37": "2ta3hFBUQXmNTuER97oG7epXrzmwix9hvfPdu9zL8dMdHAeAArxtXj3gEPVD12rnPDom6GenAkbLAWFGLZoJNn1b"
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
