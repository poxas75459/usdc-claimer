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
    "23nzqSAUQd2S2knKsBjLQtWDRvotCw5t2Uh3fbw8kqr5ttgxgCgoKzxBcWuYRvvQDz2cwZKtMf1vSSGFaKQc8Mke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sB3G7DGZke7NEUx3yMBPJZi2LdbQmmS96JUnfETRWCAfBAwN4DKMn1G8XnzrF5zBsobsRyVfPSJwotFQbwtGaJC",
  "key1": "LRLfnLP8AvP6yLf5Dpkd3TBw2dc6SrQVoVWhrpn11EqZhv4xWoAUAFuWDaYT7ZxXA5FatYXqfngm1qZvZF54xih",
  "key2": "5N462yikiypma2st9SGP3crZWhqHu1a3J7cfTiw61TcAeAUBpier3UZueUCU1knNUvG9XhU9mS9yGFJyvm5UXeDf",
  "key3": "3tTcKAHPKHCMRwrAPZni6zP3aDvcxsfDrGYU9P9sENzzTQdGFFB61HtM99PMYTGo8cA9ZNeEB7aC91NUcuDtUgGx",
  "key4": "3QBGrpL1sEeCf3ncF8XMe5hg5XqPkqbvWDYQ5ZBwU2CMZ9zsSqujUAVgWAzS6EnNA1BU8Ho7LCApYa9AFV4i3ySJ",
  "key5": "2ru91irZEWEADG3SNy2zUM3gbAq1JpZnu18zpf7EKPmugjqz1vDwVpYaFvnjyWwBU1pRKNFiS2gGmVDPWEkc22PP",
  "key6": "3SatKDgv2Z6Gg9goHgDiWpo3vwXXY3xNA47XRRhksRiAa2ur5GmAzkQMXGCoPZ3ibStBaHfVyZGrGYKWuFXAwkZE",
  "key7": "45sFnefDJ2v589fZym8q6F5RKsBNV3d8NiH8uZYdgDxnVubXGoxvphPfZhHzYLrqu4wszu66doKmoacafuLUwc5Z",
  "key8": "3Evx8W4dJ2q9R7VThqFqamv24MmYEw4pCHbE5cBETYUAHt5Q9nATXx4G95ixj17yzpqQ6QqcvrNMGe8EMnKgSDNd",
  "key9": "31nDEXtnuo3JV4EB2XmETfaJHG4Yr9VJrRr6M71zTCTYpu5Rw5u8y7qibXoFtTB6bwHdfGbuiobzW4hpBUjr2eBb",
  "key10": "3cvuTD3ao8EA1XhxJTFvasCBvZVDMaK2WdtXvLeDyTQz7Rfkrdf6ANaxShsdMVt3gFY2EkESmh7pjmFBWwaWf24i",
  "key11": "3Use2nSsNU9jqjzQCdkHsujB6ayTwjCu9Ns7otxW4TZofubCjJHH38MnnhRuf5XMQEHc8PdD5Nps8we6SayK6rsa",
  "key12": "5B7NWDae3RD3TFSqPi3EUw4MkAkfikxTSjbahk5yyALuooNXWccpnKzAFgCeernb6kosk3Jp95QRpowxs5hB6PQ1",
  "key13": "4DRTUeU17y1Xwf2wL8FzN9AwkMMGQCZa3ZqTYg3pKfFn4dPw5nB81BibMqk7qcWiwrRhqqdvpMHrXJDUBoJSFLtu",
  "key14": "i8HauYXeFUFBY1aFScDvceGVmW4Z3XRvFtRFRg4NKhp1CsixA7gAZtKnKK2nDPrhbEur9384bAKMeW1eshCyPPh",
  "key15": "2QZDoWSZM221UTv9bXkTLF3QgC6gp4VJkYnhRZTVQct1mFa53oqrFHPJVHDDUwFnzyV57ii3JkCf1M77YwYBsB1X",
  "key16": "3QvA5RcEwnwBidwe6aefnxT7y3tEEG24ji9eJUfDV9pM7ZvnFsMe9E2Cb3o52vnmdE77nhWsC1cd2icLEjeu9v9w",
  "key17": "4oKmX2BYFAUX12umvrn3xsYaYgL3gjKKTkjKigDP9gpwmbKgD1jz1qAPePWUiKzTiFXEJyMZpPdF2xav4sgtez4m",
  "key18": "5ikp6yAgY27ydKZ1EqREaLcP8tDSEfjQmnVpV5nSTn5KAU24xJx1zJvYXrJcr8VKerkHyfgptknjimcUc29f4niV",
  "key19": "3xZWXiCtS9pRE1yjD1YCCMqZ6u9UUC1GbUJzHMcwoHijaARDTTX4ihXNN76SstpBw4uaSEU935yZE22iHczpvrWS",
  "key20": "5jA2utJUoPbqiDatcawkftexHZm2WS1qXcQuVYZ3XXqR6HonGLi822mMr71goHGaY6Ra4Pri9EeKUgQHaWwpmNBT",
  "key21": "PdK26MNfEWy5wW6SVjcP7wS2Z1fVWvqPsDtBBVvc6FZeB3P8zNHfofjzRpCoW7Jmo1AKJMqYGB1P2tpZbt1dtKG",
  "key22": "54ytAbiNMxtDcpcvvaw7VC22YqRD26ESUoVdrDnnwpAtsdHD7QJVXMY6bfYHPQwmzMa8YdA3b29hSj75YsRWjGDs",
  "key23": "3o5UWvukhLpgDcCnYvCFReVVinK4X3svJnTDj6d1tRP9wKwni5gQVL2vH8HNrTt4AmhtpSBgv4FqVYtBD38vr9od",
  "key24": "4iY37viPJSit8Wckz5vieSg9j8KWzMDT51KGTtUJAyszwTozfrmXRA1F2pGqW852E15XzLNQQpunUM51jAyqJZEk",
  "key25": "2SmerZNwYkcLcXfGNVhUVeqd4HHMBS4P34mhuRfkc9BDpypUXdL8AYEsttcqV2kLUbfJ9TrCF83e7oyqTgsw3oL1",
  "key26": "Em2FrGDGi9g9WmoVHzAMNPHAaQdvft4G5R66j85on12A9kB5ZzAXnpNRNfg4nroAK9dGvugacdaSK9toKTX1wtt",
  "key27": "L1a7EgUQPenqvBDkT7P7tjrSj5uiwBKLbkz6HkuJQ5JUWDqmDQ66W8tqBXoCaFAQ1gPVYCQZKpoRc59FQSu5uL2",
  "key28": "4vEpXAA1F52Qg3chZZQqBm6oMw19kMo8xqMj6npnzhWBTY2JyCYjq9FUVt2fUyhjP6Q6ox4HvKKVLVee4qto7L8H",
  "key29": "26GJoxGRr7iXGefXW9sWKa6xmnkUwscxQFoVgsxq89TDBALy5hHJ1voDbE9a5QZcjFtff9sqxVpFk9snRZCc9RJK",
  "key30": "2k3xJ4g7hSKk1A8XwpLbQyn4KdAy9JDpRBt89zf5Cn3u71jvmtri4KTjWD7gsuSwn7RTS7z9A2RL8bC7giy1CBpu",
  "key31": "26vxWcLBaAEbPfjsLS3UUASNoxkzE9g3tSKCpsSagM8xZAxcSVsHfkhrhRG2AKUpFvP1QXjxgTb89cR31T56gVhv",
  "key32": "5UqXZ81ydpbAMqymsXmxBpDADfM8YDvyFurTkw5go3prqeACjv4xsYKkNyKonhSbKH4a8L9c42PSmHqJPQ197STS",
  "key33": "kjG9E8BXoFEbrueXLwtRCKyMzmaYnrxehkJmF2esMjHPhu38H4GT2e2hft87oWJKBKCvHs9ndTxRDub3axxi7tz",
  "key34": "3zS29CrPzMTUTcKErmieS2LNLEWJxYW3cop942r3hqe3NB9wSmP8PHPzLRRyEJb7p2XLGkLVLBzwh5oY39Zu75fw",
  "key35": "4K9fc2YLgTLC4SVmbH8yUyWvKydvkb7DubQ5HLBv89QUuUXCbvea1ssFLLooS4raKenwuiB1WiUsZgpGodbDy32W"
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
