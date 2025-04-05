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
    "42birQpPyev6VWBXVnK2rfYNsr6oSZmgnatq8LctQT82d4mHQmWacMCxWRZCZnXGW8MinZHG2wffgUe5epte5CnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JFxnDMtw1Myp25PRCkyZoLJFyDYxmgVsbh2YdVn9PhQuDV9e3vkYYheABDLyDfF1N4kAcmfmayWuExqc2LiWRiT",
  "key1": "59TxEeSNohkaD1Hn1dKErvQU8zKxzqVZUH2YTob2bWWwU9juvGPfda38tycPP8KootQJDUD1PBZ66uPLdSpRikvE",
  "key2": "51TDRoECzWDKLrKVp1aTrq83Qbbt3nP25GpFJG28vpdJiTneCYGdsJyszBdUbAqBuct752aRhZNVBeFHKqVAbK4S",
  "key3": "4n8PW3WkNt9aSVvLBzXb4C68uCB7JELfzMrSjBKVPPtVw9tfGG8waMHq3pb2eLmTajo5h5btvqCBZBUXEydQTVqy",
  "key4": "3UGR145JYJsBoQc7fPd2WY7TsuTTefxqjwgceqv4rwVxi4HqghDLtUztdPPrCeWZVSzivMBgQzJ1BvPo9iqdBriZ",
  "key5": "28MH5XYPTSSmT3VzriZzHGjbd6owroJwugKeBexrJbin72Jb5sETFoC7wUuLuFkk1usiqAW2XRSrMRUTwT9Y5DN8",
  "key6": "5phjm2AN1wmRurbCeiex7y9NPYN6pcAdt6cxYJihuhzeKwV93SiCvLexaZrTa4EHGkt26ZE7GbGR3FqyA1CKBesM",
  "key7": "4bnhmnkRFcBR62JL8uvpa45UTtDZbh2cCu6P1EN2xP71iHsSPxR9kXH8W5iBfd4SJiKqZqyzbkVkm5zJuHcPUvvL",
  "key8": "2YG1TSYT1U6isLptyC6ztavg9uY41sedB4RY7aZsJtateF89J8qKJC8TPeiiEJUKjYAQX15JPPqQtYt6wsa9rSFg",
  "key9": "oGKVVPMrPXakNTj5Nir5UqmQVV2qiekN2LGxheqrtAtD35ZqmzC5gji12LRpYhFkx7Pue2EMtq7QPbN2QaFaSYx",
  "key10": "2WXawfQDKfoiL56TMExycFz2nLA79YK2xUdJSqdUSfkGEpCBNcP4wddMNYe9VUjoD14u5Hrdz6LWCqpNWgnTuu2",
  "key11": "exRxK1vy67Jfp5dhP385WDBCHjeVtWsn4w3TpPzNRxqBP4uALgdAqi5e2TzZ4WcXQ92cgMqUNmTtEeg5yQjoDX8",
  "key12": "64Hmc8zcidMaTQq5QZynw3Yibfj7wXRL4Zj6zF4waCfRaXLzDTMNDtvVTmAnr7xgyTDJDYDqc4yuWzCtoTj9SR56",
  "key13": "24BMLUiHEiXfHeoPcZV5gnE7haaPJh2sK4Wa4iW1DzjSqt4uedD8BJKRmPTPRzPt2A8uktjkYJ1yVUj83z9GDyg1",
  "key14": "5sSzTed9qpeNxNdSHQAjeXksg3ym7nZZf4wkUm5CDQjxPCEKFVfCfdJyNkwTSfbLMzDv3qApsDg4fgDL9eo8hvYk",
  "key15": "eBYqu7fqm1Rau8FW5chFpPyGi6gAThEQ4Un1roRpKzhNQBWzsdNe8zDKseFhNXtCwvEqENT81dCHYN1MVabgYZF",
  "key16": "5Ac9hEZvx6qxiJ6SgtkNJGCssMQDdum3Wrj256DST27311bBeVXiTSjBpWyASq347PMwruUqP5BfU2YaBuyTY171",
  "key17": "2F6EuwhALU84zynyg38tut35iK5m8p9eefS2mnFv47XXAdUki8WRxYecz1KxuTaTs9bAuQcTziQJPYArYqpmipaC",
  "key18": "scutT4QfB8KHr9koa6D1u45mMvCnyXEB9bvK27gdiqW9VKyVWQ61t5Pna8EZamVbwrTjGVYEXi9ay9uH8pXXvYB",
  "key19": "2JYmM9rM4uprFSpRzC2XdxrLnpQWFWHmmyZVGRomoSAZBB47aMj9oDNND5LQv2NFytb2kKgDWfT9b8PDyLW9Z38v",
  "key20": "32XfLEXZGu6vJHvsJAbkL3his3xXhivaMMkELfEsLQyRsuXnSTRDYrBUKMNDywscVN8f5psvKEHPJ66AQiboKFqG",
  "key21": "4y9fHw2YkDpjPW5nhpszA1XjBDdBSjcYyg4iXyhCj8DcniYXiP21KDayHRCC7D8oFePhZsPqTNxwyShTJ3kXS7L6",
  "key22": "513SPZFMcVZH7H6qLoyiky8L5USrjfUFprEE1M49fAYZzozcSHr1DJ6y6QJd48Nn5eGYofx2yXfbk9eyovnHRQHj",
  "key23": "2HhmVDHasFrzYnCktKeWcyFk9CmGpYBJSVBWNiJWPERmJT1s1reav8xhRczstyFThQWDoitNg5jhBeJaPWV6aBFL",
  "key24": "58uHme7nxUWFpwDMDvxZkAgxLAzQvQqimLTdpdRv4CbHkKgzBUSvyDJJSnxRv6ZZkcc2SPVzTsa1njibqrZVhPRZ",
  "key25": "51P3ndGpTWqmaDjQgvv2moyenUWvJYjseYfWPCdHwZ4Tp2gRiG5A6YmjNfHqb9uwhTGdwGp41ScBxWmkyN4rboQp",
  "key26": "5kGusEQdp8sh9aM22LNgTQ87oQb12JXQ917aE4MADti176hGUwgSM18HXGUNmT2yeL747AcW66iqqbDHyR89W2LM",
  "key27": "2PqtJ9xBCPftVnHB9JM3EW9vr7jpkTpShrMDw5KxRCo8yUwdhibvhj3Enbq6S4EXdayvg2MaPDwF2P3jFrWT8Meq",
  "key28": "bVdRVQ6pyFwxPdp2HaxLCMpErDCtVyWbmmfpPTpPpCGGuJHfAb2Uh42aUJJkY8m8mHBUfieZZDwaoi37tGjyh5D",
  "key29": "5URrbCxEcRVvenFMZAMF1RK9mySDuUpMgpRZix9J6axfZc6sgQmwsxAo3zSvtG8gZzSa9vXhtVL9UgkGWvoNFMLs",
  "key30": "XzkviczAPNGo5RVKrjCVdudVuT6qGUaFdbim31vSLxi7uVJyWCXS7YMGxcwMQYRBRmJWDze7KS56uiVYAgDcb5t",
  "key31": "4mSDGkvpMFXgHrA4hyEuMNgU2GRRWdZhQiKGEkV4CeLc173YqecGWVWQ7dxL8YkPLjMNd6LJ24i4wigv4Uw8DLJn",
  "key32": "4c4UpMiraSK1o5iNPPsnyYNModnSoPeUccEb1anufAcNrjMNS4wyEXU8E4uNNJZQFwhB48w8g5qNbyEEVWpjNvqK",
  "key33": "3r68YBWpNQnQydjdAzpzZnmWaL2jDqnYkjSfcZaGyZW1a591Z2ftQs8iFjm3TdVg2tEX1ch19n6qQPt9R9gWZpK4",
  "key34": "5k3NDSuRPDMcEJBxVxg9DdLjQBDf4JyybzkktzmcpUu4o7B4Hzr4grCx53idJbSVKNpeuPbxPHZKjvwqctVPpJMY",
  "key35": "4v9BGzhhz931bBPW3Uvbu6ZRY8U1Vcjk1YrKV8P3FzLeRKR6jErYFZXVy3PE8zgKRFcimmdpa9w3hv4EB2KzxJjT",
  "key36": "3NbN5NDv98D1fyvabWWkT2GiJ1Xz586fWCDxCcL94zNu4M7v8X9QQgWWSsWggun9a3HoAaQtkr5bcEmWJiaGrqSG",
  "key37": "3sEmsxBSiSzchmQRnHEwZQUq7G9SySpBXpMDYXjh5c1gjWLgXWwoFaKSVzKVF2cQ8JhCyBqeMcRC1C9kdZ7THsov",
  "key38": "28DunqTCKcyu4dcY1oEJz7mRMSjacpRjntswkFnbkRcCPxKStt87a73UQbM3wY52CTDsBg5fZyivYb4ahaBuQfzj",
  "key39": "pc9USTathRFNC4kwKg443mZfKQr6QPwAa6E9idbsYgeQgmgqy239fnCB9RzsiqrZLtYS8L3Ky5KBjnybMVrGJja",
  "key40": "25u3QQZD4ksLpV36DKhmFtDcZP7SQ7j9N4iWqkFKznzMhZPr9aDiFQCZ2MvYx1YDWvdP8VjBJjApCEzZXxSZopUw",
  "key41": "3rRFSsb997uWTnqisAvzFjVgBKQotFwHCzUQTevrseVSmGwaDnZT7DNCoJ6T4AtcpL9vWkPmusq9ooKaPLXGcA9q",
  "key42": "5Xn5a5zzyLWA4Gh1i7nxvTcb5xR5h9NiVdQdB6rnNfmPd1E4Jz2jTJwQjNjTP6Ksb42jdB2MtcgerZSJd4ot8Lyw",
  "key43": "2svJmbGmpmThVSpwD6ubcePiGJzmeUBJqSEmzu4sxELRSXCrt8MK8P6mbj9Ge5S7s7ouUjPRyXByKcygtr81V8MG",
  "key44": "33LfxiPhk1Z7mEYg9xmzCVUdtugq1HANVG6gQLccLxwPPpSenG7MgAeUPJ8nMPR4EVMahb6HdVbkhzXhAWxdpDck",
  "key45": "2ZhEe2Gi7prtxvCXSaawnbciPmXkEjqn8SkuhEACudKaUbX2WKkRMmMsP7PqcyiT2138Pb9x3wtn4148iWhktZFd",
  "key46": "FUwCc52SbD2zo7tu9BWhLzHTsQmvQNqRSwTyaCRWxX5s44VZj6eqjF4MxpJpW4vgWTcuM8bsjCf9vWZxahutVp6",
  "key47": "3kXsP7syF3W6xBX6ev2VYniN9BXUUexAPzDvvrwHK7Gt9YuCWTe7pWUgNh62K3gzs2GqwtLVeXyMD3mzyP3UcxcK",
  "key48": "2JnUNM6uzAPV1izESnA2zgZx6RxDRFL2yEuJvBBRzMLpLwt992RaNCTx9gHSfDwvkVXjvCSib1dVRmTPejisyQtS"
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
