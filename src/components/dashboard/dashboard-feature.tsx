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
    "3eKGXDz7XFXG2zPkJHnscbWV3b2SofpxoGJ7J7bfDt93LPCSK24VX3Cp5Z4XjRt5ZB8PGKjzVT8mzkgQ1dPbihqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29GUSykA4cFTXfMyEiaiZsMr7rk9a7uDbonBedEnQ1Sz9JctqKkcbi67qy5AMLwsnvWZ5wpLyyzBULurQVv3eEhv",
  "key1": "UXEXNFwPe9oHKNDukufE1o7iPLvhQHamSNZHfBt2MdtkJVdg3JLrQnAYaj7Mk9yTLay53gJvvbVh6oYkvorqkdj",
  "key2": "5Pi6EWu5WZmbFyAL77jLn9Y5MTFRbsaH7xR84XzXQPhwAPhZyWCiT8DrAja8REe5vNSc71Y77NchYhyMkzxchK3z",
  "key3": "4D7YeXQbEaLVSUTPF3snysJrFF9GPznr6DhWYmzYJfeKqdyqJDaYiTqMJfE6ZNMURgrqZDorHvjwrnbv6BV352gv",
  "key4": "4kD5nRBythFfvweskwYrip8m8ckS9wYioVEXNmYRhUJq2NsoZBHwoD25XnbqvG8a7FfNPtZgEe5T537M8pxQrHuM",
  "key5": "2Werfyw9iw1gYRTeAD1Xw4iTCgj1VurVx5H5zfPuBmaZrbD9MEb7tQ3bFWjUR6QCugWrUotvXT9i7k61oz6rs7ci",
  "key6": "pTANGrrWoNH9Kz6JM9hX1mJyp2hcfnZe6bDLR1GAhBLgi9uvLrPxnnnXRc3YMXzyd96fKyuisK7aABt85aGDSLU",
  "key7": "hyvVFyBmFp7xCLQR7cFk4Sg8RFNhSseaVKCfduSP4dbGcihNfoXHbsQBtawYDkvUVkEZK79C4GkcDMypq52okQs",
  "key8": "37ZE1Sn2iwp1ABqf6Pkzx7JALUTXfUjMWe7yxFLdiHSy6q5ZW18ELB7j7HH2DbqVVvVm915h8EoamXLGvMuw7Bkp",
  "key9": "3d7wnLoxoQjxHYwj8qfk5zYhoKti3FbdrA4uXN7EUwKg3vzCmFvLuCoxuTnCySTPJpwGWjd3XmDjYtWvB1oGzsfX",
  "key10": "5VorHstwdPJwYjakZZfZh8dSXr2NBhoufNVExRR8Vtd3D6jrUm33aKhtTvfvLU6AL3mcirLiwkJMPt8cwMqqC3N3",
  "key11": "2oPZZxpk2cKGcvpixpqdTqDXaaew1PU6R7X1srzN1pKTZLCCGb3DjgFttqhChEQKNouBAwqYy36unaBFnTYaPip2",
  "key12": "64XQVaJnh7fmb25m6Dp5EE6f6VVvfv4fkrnJY3gRRnw4bTDN31XGr7cogdskZBmYPBbJLW5Y5qRn7EPMKZ94ugUd",
  "key13": "n8u3toCw13KrCJr9hUP3S97tpo9tbP4ct8JjcKVydWexgEjnU3LFUQqHF6pWmFz1hdX7T4MfXRR3oi2TNhYHLNQ",
  "key14": "38XVe8H7U9w94c1Q2Ve9GkyASCL7YgHKmkH2hVqwMYBfqYxem155hGsoC7QKSqw9tYdP5mxABhhbu2K5n8YsDQks",
  "key15": "s4xxiccLNgyP14V9SWfksLJLtHVqsL6Pte4d86HswaPW8XuCuMCjvgzmh4XWDXHKg7DK8aLSiCSFkJVYHEiZPRk",
  "key16": "3KXLY9DDKTWF3K196ZKqH6fe5fQmx3PPYPUikyKE1WQVMXgjXxJB2NWYWcJkqbBGxnP523u4zTHHCrT9WF3F74Ai",
  "key17": "31DHLgVH2Xr7sce7mcLFcBrffV3AB7A5tmVsnRYQxzeSnFwt1YUn29gja8D72SJyPBcbLdER9NvSHpehVGVPGkqC",
  "key18": "3wT5WBjX1LKkg7dF4zEizprA6WoTsSS8mbA53dJbxRvg6L7KsSPi7AVeJL7yyBbRdAqEUGyKbyRrQeLprxFWDTg2",
  "key19": "4iGXAxSbPAD54WGTzCBF72FcViJu1DaygkUtLjZ3SuU48YATsxaCFmg2HptoyKeAcqf7FFcGeUHPuExwWd6Gno8W",
  "key20": "5zWfjGBfFQvhi2rpnWRsRjNJQSPFKMaggf68NYSndzwE3cJHfNSTh4455nFkC8FqAWMM7YuiZrGAG2SD9Np4QnpX",
  "key21": "3csvJBUbVQmXxa8zXD11B4xyYiEk26vshS447Qeu8HY6tu92y5KrWCTfnGTperV2TaajavG2ia3hKCFD8i2acK6J",
  "key22": "2TfjQ4pa9LHypLhaaPsWqrpayqhb4p6KJqbGTvay6M2BNfPvWsG58ydyDAvpmeZy4LoRRwrZ3GqpuqtjqYruzNMK",
  "key23": "126xDyKpggRMfdudn4fCvegDTGBux7PLKNko5bkXjcoBDEnVbCEvShwgjB8c8thdRQEGVQy3HJtH1ZufiMH6jU3j",
  "key24": "PeJbaJMCEG9TQ625VtQWn7yCHwHzupeoBsM6pLvGjC4bc5hz1uWGyBBkjqNZHQTCMhAEfNRPsHjZX1FXCNbs6SQ",
  "key25": "2GUArP1qiboHQHuxuDo8x35zFLTMFV3SeNGRCCNVJey4p4SBVzMAHdxgtu6q7EkqerDRuKD6EsBdHCnusss13NBg",
  "key26": "6AvCukQ7bPNkMSCwurSNN2eSWxjPS6PXKdrx3qys7JAwAFAkepqUHSpb5ZK2WtNRSqW68exMbxhUY3sAvLoWLtn",
  "key27": "3pkQmGWqwM7RN1r3cugcN8HygGm4DssSpgddgz9928LWNWM9u451A71xPRYKHhLtnkfeLcAAGbAVZeEusTgNcERy",
  "key28": "f9L6idzy7WVDBSrDm2s8C9QZoaWDoD9GhgXp7CJ7NVimK8K99c3ubNGuS42eC4sm6nbccyDGiw6zyJUukkrR2U1",
  "key29": "2qYPBimkwxtu9N5QN2d9cyMHfpbEw4XEFYKP3rUz5TZ3z8oBZSRWvhWQWiytuU9f1mF7aLAokh6GnoZdc7bXB3pF",
  "key30": "4fX6VrkzRanKd1Qosg7JmPwQXit3NMcDFxFY5VqFqsrpXb6jAKD8hrKWhrhBA6HRe7ZVG74bM7PdWGpqyvq1ej2u",
  "key31": "5SyQzyNi7qzwSqYeQjJvULdhVuAcqV1UnPVgpAsy6zpbKgLYERb1NcRetfFvAnHBTT6TD6LKoVsfP13vs8iGJhZW",
  "key32": "2WqVuTeWECMhLx8F4PeEgi331vpL8bqRqSGraHBMG8waFbmMtB5MQcbcvyfHNp45P8P8mR95K7xyQZaS6gwj8Bsn"
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
