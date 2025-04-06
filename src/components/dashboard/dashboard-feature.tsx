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
    "3qVUuSEeib1oxD879bjXkWA48eLp2m9Z5EeD3A6dNzpHYqNrWDDChHrRoEC4SLVYJke7cu5UBV5E4wCL4PC84MSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DXH5FLMVFp85Wvrvgf9sDiGahSp1ziMXBm5xHKgQUUXdCRNJRiVvWET1E3X9PvjKfpZTpDraK6EDKW7dSkE5jmX",
  "key1": "2bMU5YrLDrxgnNGJLJtZRv4rbJbpy4p9ZVhjS14BSf4gKkgebKxhaN1CShnrMEKYpo1fUrVnyWXZzoSXxP7WZtbq",
  "key2": "5h3QBZHsm3CaRDoeU12cqp23mhqEASCkUxdoCEGWaHcsuuGgom7mpqqinHD5AsVvEziCNm8A3eR1M8UmDZN7RUc6",
  "key3": "3vMZNuT4Ln77ycXYKojbKiAUs6pDtRWi7VrGcCDxUo92nmTBmPGDMUPLpUAuvjfCKC2DuuJ6c1prTCTQeUJ8d34X",
  "key4": "kxPbjV8M754xvdBMtLf6xM6TRA5JShMDg9ssgBhxrz4cUQJYnZNHL3DdzcuwgMi8uPpN6zRoapa82x7D7tH4wwq",
  "key5": "SaxgvVtMtggjEPvXNMDvfiptihdJx5JCBv1hEGeZJqHVCDvo5HB3BPaUJHtEKcht1HkChGXcWLLnrbd5XY2VYre",
  "key6": "TRw82AaCB68Fvgrqg8rPa5nsp5FWL9UqZssPBrPKwrAd3nrWXqzsnE9TtyZsNy28sJ14ewGFMu35sdLomMP5EGA",
  "key7": "4WddXbQMV4hLtSxZXyKjLUJnoqrEi3SpyNq4ekvfT2fbSEproxNEP16JnhQEZdJoQj7kMVzytgvhjztMQmgRF5Kd",
  "key8": "2Pc7nhQ7d5VV4seUoXdUVwkLbZKHt6YRd7J6ByXAjb6u3cskBYvcKdEGb8Jnqj8QTjMnYZm8wf8XtaJvSfUXwibb",
  "key9": "2r3Hw7RALBUUTDYvFtsxYPxNFonUroUg29PAV375dpQi2NcvewtkGSWMveWnyj8asmu3fAfy1sXTuoiyunJzecED",
  "key10": "4owmtNEuRvVvMKmHur28JgkKyF4Q9HcD7xXuVU9RjwsPmMDWzrc29YdYdpUtSWh6ZXwPWRH68ysvZS3vmEs1zxpJ",
  "key11": "2XuBgH4n3czd2X1tRo9WfyvAN5SyWsrygDYH7KzErp6fqVJ7yqKY3FLNeYSz7CJ8zysaLyCu3d2J8rtWQTPEeAyA",
  "key12": "5FdQRJoBh1yGfYyZzRodReXLvLAGdu7yokPrwYwdmfBofVCUy4uNSTk9ADEGPXvcCfhMauUsQJij45SvQrb7hg2H",
  "key13": "44dH6mtp9SYjmkBLuQJcf1NNmUqaVMtHDp4kEk2PebkETycAhoxYDwdULBk6EVwwfkyruHorBMA3TpRDmBRJZZga",
  "key14": "2cm5EtkUZN4xuQbngPpCzXVXiTgKJRs1G6aA8QzdjQrbAsePGb7fx5hYtES3xSC3BGs7CrVFhvR9ciFHY4Ap2eCu",
  "key15": "2UpDLmxy9bfDSubjKJ6U2EXfUGJvJwK2ayYLX7PWBWDYazb7HrHSa6GXYqsp3j38KnWZXXnnQeZoLU5d74oNtPXE",
  "key16": "3UzY55Awhzoa6Gmuy7k2bjZgXdXJ1SQHZYcVzGGCeupCq3u4wgNBpNwSfQ5eY6NEt8KPzkeM7STjU1dyX91a6a35",
  "key17": "62nvHiuX4Zz7Dh2xcRr5zuzNQVGcM61185ysuKv3ihchZkfpeGbWFArzpcTpppaGcHNADmGkzH4fGUYNMKsh4cc",
  "key18": "4SvTGNffLa9veexBPyE1uN7mJw7SZnm3hYmHXGKG9KNxhpXXBiwMRXRAG6nZfMB9jffHAFK5fhb8UQkNDgFMtyYD",
  "key19": "416uCXth8BX1QkfnYXQTXXQrU2G11QGpa6T5JGVBWuNZJwmwJozYWWWCeintVRhejtTxH4tffgstHAARqghwyfJK",
  "key20": "2ySfSj6YEQ9KPM4ai1bmKgmweFSvmxwW7MAQRoUpA2a67zCW3QrVT26o5wQgZJQnEAm8WC14kAg6RAVnV7Q29NeU",
  "key21": "5k5hQ3chxnrav8sxPxx8dxkMioeyXu7ArCZWSS1EiR1zzgsX5iZsZZg6qU9vTBo6jixKkUhxkDm8hmTVqKtWwn3F",
  "key22": "5AjgG5pC1PjGSKgozhLpeMxTi54AwGtyJVeDSbG7WumQizFggmmY1PSSnJHVMoJZGUmqwHKLu9EWjS7EWrMe6NPP",
  "key23": "UtApudvP98mUpxUcaSfwUhgfVywuiV8hZR42J17h6EbzP22kjED5Q6243CwV57rAtVpjMufT3nmJ9ozkXexvaFH",
  "key24": "o5g4GVSvrzWopDqZLDnr5Xb2VGfL5QtjrZsSL5B7ZC8vqV8uWEEaQ2vYDypTRqUk7WuoXrPgjfcKPTDpn5QgHfi",
  "key25": "55jzpgybCRCRRNoKGrdS1KoDLyYU4ZYSmXshsk427oYtuJWCHttYEoLWv1s8ANF7wA2wNTTt8CnrCJmfAFiwRrUr",
  "key26": "2d45uh97QvVSeXw4QfTwwVPRpFkCqyM26o64t8t2bWQq5F8cakmsbRxARpCpDv96thwyfZPGppgSN8xWhxLwL9Sn",
  "key27": "4cuTNwWni3n2rGcceqvXvT9W35u8TjtAA9ktQSZgGeHMhXwq43JtFs8Q4fujCiARuShqkNMCdp6FcyqB14ifjsmS",
  "key28": "4uvYAgSwbBo8nVkTZaudUCosKG86JhnZgRGqRVHCTFggTAYzWwz6dDK4A27r7RnRi57wEe2EmnBjH7XyKqnuPadM",
  "key29": "3d6dMyQPDV3HmyuLKkkGyw5EyFuh43iyQhPHh5zosvzY5FwH9CQTDTqMUCxtKmxJUrrYQPQDzFWwVhm82yqHoF2",
  "key30": "5Zj1J8PAzzmh5qfzQ3jGLzDBEAujeEykakGQaFQdBwrczqZMKg1f2Sz5dMu5fauXAc6cA7UaqYSYenPwb3RjwZ1b",
  "key31": "2eSG5V76VLmYkaBPbG613azkU6VgDqpuCD3E55aARMwsm1u6QSFgPxWq5KsnaxBNfK1tr8b5SvvWP9z9UkgZHagv",
  "key32": "599exbqahReQdc3A8DLv3LB9CU94ndRYB7oVkiJHyBSvAp2yFUP5Q45jmYryXK6T742Qj6kB7SkU8jHwrs8D1c3L",
  "key33": "6rXfNmNbJStVRore6sDNRb84BgC1Lo3TXnFtr1rKpL2xG6QksGqE37No72C4bAkEE6CzrCjcSCLw6QP6d8LrZRX",
  "key34": "46BEoseoAyyo9FCKPipVzs4ciZFGwiEoBppespnJhXEGH5nFm7Biy5RS9R5Jfm7ib6HknoPe5JSFgdKfRssy5mJ5",
  "key35": "4w1FgEPExcX44rtUDNAtASj93wbJvMcrp4HVs3T3hWi6RSoJDaNT5fwHoyQSKQitFHWYFUTdZtHwyAUUriAR7Zgn",
  "key36": "2hbVtRtryakaT26eMED78u73bHZ67bJzCz6i3xhn2eHbsdrPrMaAh55k2QHWDK17mBaeNaUuYYBL7pnEQ1fgEHCK",
  "key37": "5AvrBAA19EY2QHYT4JnGeVx9WmAe6QdFPAgZ2coghCWDGfPcdwawX1oofkDEcGfKuFDh5umSYs9EgAKekAT7kLxn",
  "key38": "TjxXzXrA8jUvNBEX8HtSZSQcgABkUTFW2KYjbVWDQzewkak96NAMSBiZs5vvVVE9EWGyTMP2whw6UwcB8rpdFtT",
  "key39": "HZUxytWXfYwxyhnKo3reY5fVYkiuouqMN4pW5pHXu2iRZDJB98CTYMk6nVQjDCZm8GFGu6oZms6mdvLywB1TPdN",
  "key40": "54DpyUoDhuTdQVVzKaYvnMXNVq84sTxuMNoWTiiFnzkXdyUjZWyHgPYudJoMCg6CjVkekQ5TYkJB7Vfon7vqPRU9",
  "key41": "3y5aCJRbEJ1UAusBh13ae9AgKc1mzF3HYMhrmmRZ1fjr2UjgxAFzsXFep8o33BsJz3rB4PrPuwoexyjK7zyThYTo",
  "key42": "tbozvZSPxKCLSdisLABJtC8LLRr1VSnHjEQTMGcHHVAwpZjZvgDypbYC19i6kT6PAaMSUP93giNcAJJUbzGYpAU",
  "key43": "XiVfg4iEF88ZonpDjqRFRxDg5wAouRFbQJZwZkwv28zhvmhpFPP6WgNFEjuWmNuhFsF99Teoj5XcCEkktVxUEQZ",
  "key44": "5wDRQFJDa7WT818pK4Wev4Rfx93Qo3nCS4veQ6kia5ABZNwK2wecg2ijM5szT129sn1FmZnu4MoqbPqchLugWqbX",
  "key45": "5iPziBWFhwZRzcMr7uNTWkaJwzLvPqT7FJiNNX2ACkaGjcEX1J8ZGGwrhspDW4YRK4MRGXYPoPUZ4UhdBTRJ9qYz",
  "key46": "xm6HmidBgEAdibQYqb4hHNmvcUt2PgHsheRJJhMVAAW1xXggcyF3NXXUj7XrRo7hZcVXnCZFQ2gJwmpTKLqbUr7"
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
