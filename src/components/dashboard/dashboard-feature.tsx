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
    "2hWb2ZB4tHTUpAha4ZsvqfJULhCDZfkTsfMmdbdfLXcgUfbvvZxko61bzC9txor9fv4uExmz8Ys6yx9RYc3eRBB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BeWyuk3gwTsFiBvYXXpMzh9jNgRc9ZHMEQkBCAZXvF5fJ2Phcur66kLP7KwAa3NkzHAbDDXYhK9gE33AUcCaVW7",
  "key1": "65242tQCZz2BugZwuL7AhhtTNWXn5SuEgdxw1msTsMxVeXYUNACeZG3S27LxNL377YnUfQzFQ1wDzPsvEdvAu7y6",
  "key2": "5Y8Us74qXBev1UTRFL81iUc9QxgoJyPGU51yNe75kFQe6TPDGcM5kVdi5UvdPe2Kr7cWuAobeqawDkA5cX8J8EnH",
  "key3": "2xLE1nc8SfyTM8H4PAtZjhW9SfM4nTqMV27LLqwL7atQf8myqgXPxCD7VsTSp3XrqpiJTALV8tbxesG8G98FhTzv",
  "key4": "61vQaE4gEgNijyDGRYvNfrjGyr92NXKhYTjS2PFZJU229Xcaxv1dRQ9iCANsotAxDhRgkGbosRMuCydUAxdHD3zf",
  "key5": "4wWVXwwNjTA29HTLWxxNSHdZLkRXeByKn8FDFcaf69MJ8hNgN2uB8bj5jjd2goK9BxYTwkUEwiAMG1AezkidNNaH",
  "key6": "2JGe2Nt1he8rvMRjBxTunFARhzPnH6sAxsh7JB4qmtE6E4ZP3RES7GcBXeGWnGTGYGdK4He5vkir578GRcFXnWVv",
  "key7": "BUrSNwvHqmvsYjspT9e3ZASChtHWL4RFRrXWhwLf2GmjnbdsjtuibEJ4bkTHKvLthbQyRKofbK3NffHHdStk68B",
  "key8": "3Yvw9U14PXhWvoR7qXTeuwWabaRmQ9KWiBjdwmDZYSJ9f43ZMNvW6qnLwX68ZYZ1gLwncSERh9PtkWDxKbkPm2Ki",
  "key9": "91nwWDV6jJYtujT43Nw8i9RmJMBDhopy34JdyDuThvi7v1P2x7cRJ4jKwKAqNUujqvjsFuCW5AERb7onFyCAqTH",
  "key10": "5tm4AXZq1HihTtoVh3b1W8Huied9J47mmFqVDUi1E6WmUSn3ZgNUBeTGHQSghgdXb9DRXbVY9drxqAf29VUpSdTp",
  "key11": "Ssm4yLYLL6Vgm6MF3nu43he7MRXwaC9Q1cj13tA4vQwPWidMu7vG2oSSaUNBnBgPWJDqRfohsc4N9MEUoZyqsWL",
  "key12": "5QJ8oR6RpvKMpikB3mwTdwf8s3AZvkHTSZLecvn34MXbT73zHwsHNxRsUGwDenPL7vijbuV1iLoPtFHL4nHdwFCp",
  "key13": "2pWZkEre2jrp7DMjmXfBQ3JZxGvXveTYAABxYJ9W53XGwcC6thfLykpsTDynkNt88AQx2yFiqY7WS87tAWqdc1Bh",
  "key14": "5YzL3Szd43Z3L9gm193mKb8K26nLUWGj4rFP1Y2TFd7dEyfRebLSVQX9gob4SuKnLj6HCqcqvzn1aDHXMME9eBun",
  "key15": "KmnoNpjHt5Q1mARAKrFRVc8cL2T2WJa4dAtsR162ZkvgaVJ98m91MpT9oXKXp9QqcYFESYZ8QSjxcYCSAz9s7Gr",
  "key16": "65VuebYaoRJ8o75qXzpdPohS5PN4VCTdD7HJUV93wm8j6FbNwgY44Ma3QSj2AMmFm21K4wDUffzdJZWPsRVepNj5",
  "key17": "5wap9BXUx8pR89LxNr1MSMjy4kJtoAsk8MLsWz5cbpR3S4njtaxZU6esP7ckJCDMr8QRnmnUeBQNivVrjr22bRQM",
  "key18": "5cnDwByj2KxSzhDM3GRpr9UnH8CXp7AuNaABBZkC7aq6LsDoZskEk7MwbbNZtvWgs1HNHocRWcTmJQ6mpMCy1eMt",
  "key19": "2he7K8VhKbaVaDwvgHfNpVQa6ZdyKgoz4VUVn8UrYwm5ocGDbYAhk6Uqt8Xbeo47aWoKyyFUTWd5jxYBvRH4n4Y4",
  "key20": "4PTXPXG5xKnPZfksSTpySQ96KmiNEDoPat2SXU8UZp7qhWCzeU4Sr65fQYGtF7vHpHGF9v3FWnFAW8QB3gui4hYh",
  "key21": "Rmf2cDfSFJnaZf3rVYLXKy62XAGzxh5dHQAdcLpzhw7NtNANLh2ozJf1kys4di3swKKsLGfPtmJtKQvH6ubsXCN",
  "key22": "4va8MQHcRBVQZHgjMR4AoTkrSAdneG22bRAvP7UvdsC7f6KZQWFyaT9vjAiSJ6E5b78hEFb2CvRY8FcYBu19vSSR",
  "key23": "5i7oNQ9Wsgzn34RFX9R3CTgLTTrUM7KAgL6JYniYaHy7m5cwJkLoVjdyZymLBijXGBSSJp5tCHuEaxDQM1ki1HfH",
  "key24": "R9RAa3b9xA9S3vyy8mD2QW9TadpcJwAo5doReJfN4hGuyVXZyCwj1xr7dFjcEi2hr1RsLgGrzyoZjCuRCby9Xod",
  "key25": "4MVPex2G5HBTh1n7DqeyxKZ7ECi5zKqfavKN9ooqPuy1Y1gab9JgyMfNrCKCgHNoiW9URjtfsUcvFP4LQLix2RRS",
  "key26": "P56TqZHjtNfHq1braXAGdKr6FV3xnW7HzpczyE7Hesas7zJQuN1PReUbMpLRmdJQT56smr8p8dmBgKnDAtu2wZA",
  "key27": "4iCNjPjuxT1v9w8WZ4L8UpquFMsbNxZVQXxWeCiEd8XnVww4Y2hhhp4Fxn1UHP1RxL7fZ2FCNktxHyr2sGGGbxUs",
  "key28": "58QqQyGCqDAPy9JiPssiz9EFdRVv3Hdyi3YjkzrVHNhagmAUizGc3gTmYsYueLERSvC9Yq5wJKXjLLamTb2VgxSR",
  "key29": "3guBuHgDurvNjdKoFopUjCv4fem26y4NZPbNpHN5Euxca6jM6QZ3MjQFbVAF38YNAVBXnH2HmsacN6m7FDptEnxc",
  "key30": "3wbQJeWL9rreE9VXMDK7Ss46dN1Ka6UedWw9NaHu4NYC8uACkj7oeWPtNvrHyqDCkdnPPT7D2s9Tea2vDuwQ322y",
  "key31": "2QDZqxfGggV9sUfsRAxzSMAfADCUF595WjDAE6F7B7tdX5Ge81fbswFrJmrjQwkHcEveN9ogHp43riFZaJi6ipqb",
  "key32": "3Gdj5t7AKChQ8JYrd8vQRT4Sqiq89zaxpsnBS7jy7uSa4bmc53s8CP2gWLnSFN2FRVAe3hiKiAZE6D2hMeVQwxgS",
  "key33": "2e62oNKkwxktcab75BxyCPa9SckucQE6vagwqNB27eHxStiGf5rf6E3fknUfEPzsS1G5h3GHjsPmdCQ85C8knvYX",
  "key34": "3eKEpSQXRf761y1ZctJUX9PLexnPiepJ5q9Tt4zyNGQKJvpC9Up9Et3n5u5ZMet6N2NoAiyswT3SmNBGqWQquhUM",
  "key35": "LpWtVu9mFHKRdXxAxvDaME3K2Xxbtp6QD9YGhq8J5H9BwqMRStWaN6VtP6bHoSTGxKvBMCzZEwDUdDL1wKrwLMU",
  "key36": "97GzNrHSVuYmUEBPNDMqKhDvKvdaGmM3DgNrTLhwbeUh9erF1KA5fbxNdo5GvVehxBQr6SgCy7VVPrJbQbxvg6G"
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
