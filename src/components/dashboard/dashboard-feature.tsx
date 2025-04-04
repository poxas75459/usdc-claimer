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
    "JedpkvKVHHpr5nwttjaNwcBvcxU5NmTrwSFbXjavb7anFh49TSyR6TxkUdJdEEbG2SvgWDydh1KWtwdnSk2Kiyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZSY8J2QcjsMEmtW3tLRmxnnW2mziTB37WNhtwL6WFgAsWBZ6D1B5uXNRHgVp7okJW4QfQhEpWRq8NFgj2wMT5jT",
  "key1": "2DeaA51GWrLJ82G9NCGQYgnrsHkuVqxZNxpGrpDWPQKjK71DmDULCcb4MLW6zJoeyvJu4BUJ7YrLrYystvdiqK5Y",
  "key2": "3zyHp84gkcFuhAv19kV8ZEtLWeU86GAsJE6zHuuufYstKk39oz3p8NwzMAFK4tDP6gNN1QEr27PNcYQDDyjUxdNM",
  "key3": "3Ds3wAoqaNFdt1HtbgLrEv5EAw7T8Mc9wHPixui7TLqXYFtLXBNxxevBQ3vytDey4SsTjnqy8nwKJghDJjcaAoMu",
  "key4": "4KCpw9zBXD5V3PokcswKF4fKW1WFfArL1iFmyXNro5SZEbjVcuzyM9eW9drsNBxnLE5XA7azXDssQAborJ62GmzT",
  "key5": "61JWRaVvXNNT42pzoZc7RemBHyGsEQfzASYeGo1RwFZyWMunHQ25EgZ8kg9rmUoHCjprz6ZCoU8ipb3aaJKPd2gM",
  "key6": "64SoLRqczAw9wVAEtMZdRRy2aquy38eR3TRMjkhgeM8VT9svKtrCCedxkYR5mfaqhtvZ47mXYTfieNzireeByke6",
  "key7": "23Rc8jD1RvM9sUgNoTHJkVSkxHx1cCC72wZYvyN7AXh8nbvrgGW9KjYYtbDzheuM2BcrMs1HtBSGyQL5vU3GuGzC",
  "key8": "3qR5CP2mLhEdoSNaCkVWK3YVYgvBUbYpHqCi32yXcFef4SJEbcSs8JZe1REvD7BLdo4dKHDWpVDFqwqFk9LsifAQ",
  "key9": "67AicGKVCDyqKJ4TEF8Zm9fv9nP6h3agj95R6eVuG5gycy7e6gKYt5TTxUh4ChEA7ju7qwsxEbYPtU2ARr9FnXHm",
  "key10": "28b1VPGSEQBsbbEZ1YC9rakVCmMGiWiqRYBYHisMUKwMHyz9J4kVtdbBcxappG2QVBD38RAYkb6gKBzut58TKLyE",
  "key11": "2LjtW3RjVd46xUmE7uN9vxRRWZHiZrBGfy1NyL3tidnVjYaum4Xz6yLy9i3Gpa6hiXCSs3yZYbw1MdkL6i6aM4Bf",
  "key12": "3XhBofyRCh19kdtE7LRgDBAXwajgjEZtPL228u2qB3fNAsovzJjdUH1EhCv1jQJ54o1nAKV3gKv4B4zoaCDxCoJ4",
  "key13": "63skWakgja3rSeVRsm9iFHgK7LnBz1EVKmsWbWcbb2SNVx3focyNjMirBeEaNKWtHs2XhSWKAg7t9urXY8rcd9ux",
  "key14": "5NxLe4v8qN3n7HQRFqR4ZHn3psMwAaDTz5qma4e4CPjq4e9cGUfAfTXtbRYoJNMD114QXFckiPkEbavpbXCeC9r5",
  "key15": "26N1gdvWrMwbBZCNWDcuhBG59TA7UA3n9ysyvm5wZwCVMwgW8M64yWZ2j8rmvLkwDHwjxoT7YA3rMnCpFxf4YWkA",
  "key16": "2rsdGxv32RESsbAQMhkC6CsQhdFCWVg36fHe7Dt4hARf6UGMKGfrVbg8XPfApYwS5sJwVs8jskJaV2HhnjUuv2vj",
  "key17": "5E2qJRiMJAjmM15ZYD7R3jG96rvCgRcbzgfY4iPojqm6ZintBzjVjgmuuqruUR5dCAAS1TYGBgnrabo9VfZ4Lkce",
  "key18": "2yFeSejmrmc7ABRKSrX5xQ3n71HYeykfN2UEF17zTTnVZfga9x6ATMZVwRYhxn7Yo8Fbcwx9Hksorhz233dwBtiH",
  "key19": "2YmAfpmpr3nodWx5Vi2TGrKtsat31bjavxZhfyihvCuSpccLZYQ1eXrBSHCSmMWQcLpsUdaUXrY7MfbKn9BjTCU1",
  "key20": "55EHSUVHKnGTUNKKWLqPjyP9hF8zKfomfHsyXvZEP139sNn5BEqE82ZJmKrnnY6AvgYtDoRez87ZNeDpVujiiXna",
  "key21": "4fFU75G2ThD8s58qppBgU7TRH94oNzfg61cMvxgPLpv7ci9LHyDDW2DnnJKahAfXdPezyaFXc31MpggbdmuNDUtD",
  "key22": "5jh9pBsES3D7Azf1mjEdZNeC6ki1t9BxmQUBE9DP5QdrzwXso2P7wK2zSXDKdQ9rCoSsX21nDVeHd4BGPitzCUbK",
  "key23": "4iygbv4du6dmpXvptzEbxo3jkkmGovuV7EPqkK71JXdtL4Fhyh3o38o22Vbe8YQ2xosfexizTT6fzx4v67LzTWSS",
  "key24": "L5Zp7f6WEGnjQAM4BXh24HDTqmTary18inHcvpTHyte8TUcmmj4NMVKTJYBXkCoyQRsC6tbkvAk2z6mkRurbqt8",
  "key25": "45DMPKgL1d2UUGH8rYvuJtLmsvnFmLDXZS6hLjJuq2s1oHtpY1r1Nrahs6GZjE9sXBmsvcTZHuStwJnmHh45zsKZ",
  "key26": "5iQZa7FEGJr7RiQ6UvbhJdc1TQhhy5vPF8QmLsefFdgJLtcLLQCbrxDGoosjvxv49dbvtaZxHuCCePbVyS3chrA4",
  "key27": "3ej4dbauuWUrehDQq1SE3S43AgQkTT7WK25eUUtpNH4Xq5m2D9dSwPpEHS3EyyDvGVpdYVeHXFxS8NYPkazAtD6E",
  "key28": "2mQ6R61SaMocGeupEedqoYY5Qbgkf6wM6ThHr8ipGfokg6EQhe5NPLXnc8HvDZgzvPVZ1Ln2v9bWVHusvcdRxPGZ",
  "key29": "2nAuKkL3MdWhMBCD4WTPKUxrUE82VVEy98NRXmPTL4HX1BHZnvezwsPYLRGSwUKoNCVZMne6oqTWZAdxaWMzv6Fv",
  "key30": "3zyz2cDuAxk7Gh1nYQ4CoRzrcyiRmV6eRariXJVPyUo6zKCGaHhx7LyvGJyV2eRsww5MfMxQNkqKLsjR35hSu4UG",
  "key31": "5WcRmK7TgNY6pBopYBdouP7J8d2RR1khdyXo24rfJP5CQx4kg3YdQLjYQazRLLP5MxS8z6bE29UdU7cTe9VrC2Cp",
  "key32": "3tS8giDd68KDViQShs3DcZ6wWkLVihQZAHyegVSDhyVVG2BFhY1RthevEyTVfHJFMqqFGVnsp3VvYHPJuRoZLPpk",
  "key33": "43KoVZfo9mp3nuJ7W5YpoPJkL9VreehzHALyX5pooJJyVFUZwXwdAJDqghb261aKrXMQZeR2JeYZKpoLF8TEimPv",
  "key34": "7kdEVsbH2tcja6eJZWxPTtvJ8sC6TbCbvPgsrZHgTYGFrxiwjbA1dsfmEMXVLn4PTYh1hoYHJh2rGqJZcU6u3kv",
  "key35": "3smi5Hfc7WNzC4tzDqH7zorkgW8M6UgN7GbYqRQWN1j4vLcnHSZRPyKRc744hXxaieVrtNsDFpMtynhcRgkWbURf",
  "key36": "3w4QENaWeGCiRGcUCb9VysxJWBkENDYT28ycmqahVRU6Bm2XhSnav4kp996bEeffDbYQGnm2fxjEyHr5dxGPyYkD",
  "key37": "4hb1SAfR52FMRqSKq4cX6Mpk6PRLpZ85f7tEMc8R8s8kK6cgGq7hEe5e2NCqQfG4s5HTWu4eu8SWyqX2hj9BjsEe",
  "key38": "3o3YhpaAygAvciK9pgPhbZanqkLbDSiEzyy4bfi7DP9ZGmdfa4J4eqzckmNwnbY1amtgjPTvFJSzXQGdWZGtY5rT",
  "key39": "3EjWoBRHkXR8VjKzgTWMBCRg4DTFtZvtT4waTeE1cBBFocQjqC3aiAzBpqewigAkJ1YkDi1yBzwMoadSjDcuCCN7",
  "key40": "4cQhaKWehRVkiE41MLm2x3dERyLzRGFBuHcSqhsQ1zSff2VbV36YLTRHArPgYzhvi3APthjPeBDCSR7t8haTmgv8",
  "key41": "MWAMicvWxB1sd9HVZndM6LZpBhcA8zbeKny6trJf8mfi6ksBxxSQnirMW1t51GxwapZLmeW6wLu8JhcvBCvJzAG",
  "key42": "5zej5erXArnMioGoeMghDE7XpVJxovkEFcR7nDwScb2yChC7dQaBR7LUT8fgxe1rdz2S3XtKJMXD4iNvViW5NJBZ"
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
