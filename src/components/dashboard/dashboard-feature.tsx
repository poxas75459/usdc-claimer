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
    "Z7P3SRAxL6CjUAtoavU1EKnK8VwB4Pu2rrn9Ma4PJy2eCyFbBFokyTFGjwxKJBcn8wvhe9GxBToLvZKgq6Rt88o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YMGKLVF39zc7MQXduZXdch7nJ8z29dpJ3bJDUfdyWDJpUfsfJvBBebYoqQ246RVCBGUEsTNGTCVF4y8LZZTdeVm",
  "key1": "3e1CYGpEq7pxfGVvQxB9KqDNezQtRd3JWnjkg9r5BQYLCGhZGHtxwkknxDfqabdvLiMw9r7fkHkqqoaDYMhKBdTX",
  "key2": "644qbAjS8vVfgiv4ZJW2oXTnULPiSkGh48tvNn823g9bNNArH2r7SzhgwQzYRMrwgsMk7gAkDbhRzPtRS3n8hxbB",
  "key3": "2uMQ23yXWijCC8iaFDZMCu7pAa8oYP5YE2S4AKL5WUfDJexPe8G2tfpz6FWzPRoRVR76wtHardvRaWYm8SLFZj5w",
  "key4": "2XJXD6sa5pHTvU8T5QHsmkKRqHbE9EWojv4Yhn1U4gGZbf4mUW9MspWvQtJ73FiTvDdMvbGzTrTKLP9mgHZaHvbF",
  "key5": "tPgKrwv4y2QsUr6dYCSRdCiRadonhmJaPmcuywr8XH7hpn1yrHG5FtbbV3mtghjqdSpE7zGkoASyugPky3H5WbW",
  "key6": "4wigbgmTNRNi5bjHAVjnrVUmC649o82WhD6xzrx3bQ5ySUxDQVrMv4yK7wNsApF9xa4GEVZkLRbUADrMTKuamcAW",
  "key7": "4EfZdrbrX28wzaiEykGVqzshDCrQDcRRgayzvxiEtWktojCcWUMLab9kY6wnVDFA1krQVvCbu9U9RniteipTnLs7",
  "key8": "4qFHyHsjwbNfwmxw1dx6t47M92CJg7Lqx7fwcHV9cmCDHub1dfhfrhpnW2wYRQymVgcTSZrMR6X7oZwqSSsPyVkf",
  "key9": "64PnMzT9NF8K7feQYfLPzjqhiYUsRryzSDRS5M7WudDaLewAqrrph3JysctDcYwBEAVdH1NPjTsGDwb8BhJSnAas",
  "key10": "42XLNenDwiEHEs8UX1fq8uqcvLvRNpbH7C4caNePPsvW7sYWicaVQMfcBY8pXNWG76cbmgkVqYw55MUaCfY8Uip4",
  "key11": "3nPfMkUcAB3YpYFNb2EVGwudjar78bTCfkMMSB69Qm7rMSXxXGsZEufXz6eVJHhVhgqw8KH6EpRQ8cFBTj86ke18",
  "key12": "2DiFDpxm5W71U7sfHCPfQwcjkNn5YK9odu5BDST5dP4xYYDxtR99mp6Jq4iuKZmJ7MRLvuypuNxmWQeuYaydDwsC",
  "key13": "2Hx6MrGrMvQ2L44G3k1XsRD1BPVqZijM45HYA45uAf7WoDptb36y8FmAXzVrEscautBPA7goPw2UegXyLDrBNxwz",
  "key14": "4DNETbjD6e4cAYvZf1XRhqs2XJrJrAphFkbSvmeuuY1b6pLMA1dNwRiCo3fjKxDdACfrzNn2VrU4rHWgnb84ozwn",
  "key15": "4APRmLXYSquY5dxr1wYCeHoQ8fJZGYCrRTXuCDzzorYbDKvdrTsmXkpyrmv3UYmKBUGgKH9g4eDNwvsP66dJ8sRG",
  "key16": "4twG789RgUbU8xvDChH2cEtaJMYxvnZxsfiVQoGEGuFfjQJwmXrNhsURBt4U6HXFqgXhZgm929UpYvjwN1a7AwNY",
  "key17": "61LSrfJUG7yK21Y5UfSyGrYw85F2g45fUpaUqW3cLuvmRXqWDxNbYnGcvAEqLiDGVjFFhUCd2ojFK8aRhTBA7Cv3",
  "key18": "3vyAtRt9LUbRBUCPBJ8rXFzkV9KCxSQj4GWPjLj9LGpMHSpWkPr3YpM6T59W2BUtaHBY8M1S34GDV94qeQdeTnxg",
  "key19": "5LrNFYp2UHvKSqSgVcZAoxnYJxgNCm51JYTwAbYbZN7FaDo2LWXyZ5bWPLWSCjC17hv2wgYT718HH9vbAt3CWaWE",
  "key20": "4Kgz3rdFTzE3ZBkiXotoEjCpehXw97TXyViogZc2xxJ2zYai2z6VVSKA9vZA3Z1eoeGVBUgRA7b5r69X6x9tTDTE",
  "key21": "3iBvgZHQEC5EwA4pZupDbbanXN9Z5Ex5BL44JaPruNy6fVSfBDSdLxLEUTuVw6o1HkqiMJ687Wur74khrqV3ibRm",
  "key22": "3EeL3x9BAKVzn2Cb4vMVYPWFTJnKCiay8X4v253Xit2mozWkA7z2QxdkxsnSTJTVydk9R3bHUhEY4w4d3v2a99xb",
  "key23": "2aDy3JSgrf1z2ebRFRwkpA6ojtenmU8qRBUExTPssGudMM3yQNCpa1PsKjAsmi3RujqbWxFFPcPvNq63ZtuTZEM7",
  "key24": "4aVDbTyDd3tmLBvuZTJb1SBzh6M7AxrYM3u9TpWTqFyutzJwnUokCsBeJYDNES9TLhNf8XuvZn1ahn8yhQNV1B6N",
  "key25": "wRjBuChWnDsSSFCDrTAZvwqqs9eJC2dQsBtDdiyWvk1NELCuqrqNhACT8zGFppMpPuNt68bAxoPFwW6zohsmep8",
  "key26": "3XwtyqrCY7egHt2otZhP3BPfGDdcAdBTdgZPhX39s9w6rcRqrJFLoBQkruzZjr7drWoGX72YTuuHPTSMU37EQzZd",
  "key27": "2ABFyauYvSPUCLc42UrmbLWTXfhCuY16JR9zhohF43xZfc8DNF7st9DvHFHVcPszkDcU4V83qG92t66gmKuXMeZt",
  "key28": "3h4U3mq5hrpM58cxiKJ7ctVPKPhbZxSkiX1EAusU7boZnFyWrSBrNvv6nD5EDH32G2wwfJdUvGddqczkdnwU2BxY",
  "key29": "3YmKwJmtmB8xm2ysiaagYMa4y6PWMXV1UGiLNKPuAWpegKTcac4wkFohEGT8RZJ7rtkdDyjEWUoNxTrNMQPqrzqs",
  "key30": "S1m9SqLmbtiYBS8QmyRBY5dsJqvvWhaKwyPDUF35j4VnTCYNrE1vyEewXcCq9p8czQeJk3ue4DbZUXmPNw9zy8F",
  "key31": "3gjz8tVaxjdkfnCRPmZ9WijuWmG26WDTgNKZC3i89ox2mNf77EJNguPB6wk27v2sk9AMFw4SgMeT9cKEqCXGRD8M",
  "key32": "3wx4fSuEnHbpSGAU9GHsFQpugyMEQ1oXfFw3THGfZKnPiYRWNnxyjkj73MZP7N2A2PHg7HsEpeq3cyNB49rEZhR7",
  "key33": "4CpHvenrnLqKmpnmG3gfX6aXAbT6R75mYNGAgNet4AS19DYEDkrtZr4XQ5cy8Nc3uw4UZGU6Fh7mWYuJCDMCnXmo",
  "key34": "36BuGR3YF9qVRzoHbjYrq9fJMEBjLLT4F862M6NdgSZ4j1gxJoGHYhg2Bqw77DDxC1sjoTzwnsCbtVYyKagMH8Vr",
  "key35": "35YJpdCycxeXcELqA7MFDewPbqaaMRieHdW4meUTt1JMu4s6vtDZjWsjRTX4JYAQaHU1jjkGuCVHfk5YSXkvsz9x",
  "key36": "f5yxgo7LYvLmgPx6XjunN1kgW36uxWEbTtJvAtUG1WdoTknDvjGiMCgLq6xgh8rX2sYCkK3i23KoSHefaJuZDng",
  "key37": "4BaGcpvYXRbFfwDWuYfvdEXn2z6zwoj63xUrYsVkPTXU3Wm8HhZJtJoXHQec8tg6zdwfXscz7AKk5w88x3WGZbZa",
  "key38": "5fym6jn8EFysxCz5Q6Uy4z2RvfGGeVB9wwExMG3k7bdcGoyFRzqYKVBGi9x8Qmyikh6XmcufCv5SbS5nrVnXejKM",
  "key39": "KgrWWA3hWY3esXFKCNzRMwEMJV4ZhqQjUHuidothZWtwm8QF5DzqrS4deTtb1JsymJU7jgftu4jdvhr37NHYXo1",
  "key40": "3CC9SXon3D5AQoBbWHaV4VXjdjx1yoX7nVWeReUs9piKTtQ7bbgnXy9qbxZetRsNUf9z5rn64YA1ywpTZPhvmXm3",
  "key41": "4DVtUkFdoiTeu6KiTZ3nJAyjoxN6tXUVfr2v5wRWxPb3n9cqCCgQa9pUR33hARgPF4G1MMfrXS11s8CPhqFz1Z63"
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
