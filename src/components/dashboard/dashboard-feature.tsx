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
    "3hWxUgM4VXuEbnUQKJSEk5Jwy96PrvzEnfzhrUMvFqUkZrhKQw68FCi1YMdeS8iqyXbsPhZFPEnj46uVjQ3E9eXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2srLTbz1NpMuy1ZmoYp9TZ5WCKwMgGqdRmBWhr4sPvUs1kxsYUqDZkDhYNoJEtFA9TGkG311SHsEBbKKJJU9FQ9d",
  "key1": "3sVovHyQoBMvxeYRqDhf4ycjs9UR5fD8LkKXx11Wo6jY7AXs3yCfNMddRas2s1kVffGEhCmuGixResekfLuViD7A",
  "key2": "4Uu9PgndHcTfPhy14R8WfdhnqDRBkW35o6VJ16EstfgbwUhUUPTJg8aVxmPB881WUoiGe5NiPBN5DU2VPmMtETxp",
  "key3": "6qjWeqYHPVoKsj1BrLspo5q1UXMYxx4AHU5NTip3cAoZZj9LrbLcGQ4Zh1dR1gHeVSzEzNa3wtxVAWWPDrwJYtE",
  "key4": "5cTBfiR6MH6sDgAz26b1XcudoRFCz51E7LwMy3Sa1fJvs88gatYi6Eh3DUa4Gw8TPNSBKDZZvBNyS4FcCXfs7Jo2",
  "key5": "3rvcno9TieSZqiuodsPpo6rEf1J4a11yNSvSirbrV431CmdQcrkxNuQfmCWMnJy3r2MiZYAGLD7ST1tUf4RLwt2C",
  "key6": "2K8AWpArPc7rCssW1BfUpU9ooVPg3LHeHd49tRgTEcAjZj4mJxFqm13BG2cSVT1jKPw6Ms9x47oc9wA1kuQQs7oL",
  "key7": "3KXQHdrUUPtX2RcKrpxSELwhTyHDAzs7HEoU7856jkvmmVCEXvZNrqgrAgPhHpzPkZvi8jqVpudafJmqRvDw9xtz",
  "key8": "4gAHB4kf14PCw3ukRBrh6fEsVae135GqjhKSddjMg3hRB6jGjVNYhmLAaVMS7P2yLzhdpJbnHwQBTWBPhUhCcspD",
  "key9": "37E5XFdzGw3JQvr44VF7cK1hsspAmCDaRP2gB7q2qoWCoMbuMS4fERFjL9yD7YJLGLFa2Q1zhExPvKBebdL8qwzy",
  "key10": "2YWA7W1s318wUwGWPjzd275k61s1RAmcJcBLLqwb9Sci6LJuUN2f5Eo81WoPSAXRg1oKsqFLUPgF8VtKFeC3nsig",
  "key11": "2J4354qHi5yxQ85GSy27SHAD18dH1LU5JYqhxqig7Tq3gqSY7bWez1SkSkSCz7fxa9EdYxTs4QTycT9dgCZDLU2e",
  "key12": "5KzaGmdCdhTU3aCwamJ5KWiU4JkMMAcV7yMCZMtVwwy4otbDqGmqwX8uLuRyiTUWMibn9f7sV49SPfTbYKLLxmwx",
  "key13": "5Pp46U4rKGs4meiaLgZb3ZrnFkN1fdijF1v2D2q7Sq9J3twA4uvk2qJv4zkVa5RRm5a9BJd9jGaaMdQcsd8uqmpX",
  "key14": "66kYBZnRDrzVzoUtwKsXxeYQA5KY6mBTNFfmqKjS6o2fptir9HHMVYENqLrBE15yQzNyAuWqzjJTPP1CzJiRdnCn",
  "key15": "4RHnZx8AXroYfSrKk5nE5H2ay8jehAFDnN8sCarLehGGm63CCoZLVXyHdS8hfrUEN3giCeXuGKWdXuwdJKHb4BnW",
  "key16": "3NJnSSG93AR5bcezP8zHTZifj7iNHWTzTV2RwtGv8zhbRH7FWYJ1Tmgrgx4VxLCXWA722SePDxzqrujLkpdjYCJ2",
  "key17": "2Q78ygtWkXxCRtWPbq9gwhxPm7U6Q32r5ywvxzuVJRzHWryaqnHa83PfmgSvjuLmtyfm9or4D8S3DawuaV9isrqS",
  "key18": "4kk5MsqYBbQk6WsWipPcJq4FtmkSfWj2vsPVW67hyoZGywFh85rfCjGfiWSDRDTPLubDfVRuY6VJiyT4XT4pGoAT",
  "key19": "3cggBeJHJWAXerg5ypCrXRPsUmZnLWMXHAgXreE11m6a7JL6J2extFKZ3qzSjh1P4NA7XxQmy9WfD7qtLjorYq1S",
  "key20": "3sYpHxm6p7j95S6BkFt262QdyGS446BqXYqQgGjJDFvoYJFMwxcTHar2Si7rc2v3cTz2KGEwTScNaFLnHqhB2bP1",
  "key21": "4XjNm8SdstMcwNZPStD5AE8xwYRp2YJPCWaioyMLSvCQDR5UybBPBdJWcUXy7uwbR8MgNFWJfHYj1XpkVEi7rGi4",
  "key22": "2otN6vtGoahebBoXZRKnvhyQDwXh5cjjeakHnEG7QrA9Jt8j2BmAmXXopNUVTzw7hjAaRLbAhPC4ZCRmrhvqcYML",
  "key23": "2CT4HeeCFEm4mLnY8bgW5y2MtqqJQXUyVEs5XMbU4tHrKyDq7EFMCpX6hbVYx5ZrFDMKSFUPDhZF9fuNKN8ddNsQ",
  "key24": "5Jtr1gzgvPsV5CHznjxHnmbzdsfXGhLwg6MCA15Jf73VRtEtKChPrhdqvZ9kccV4e1ekxAdYqkqvxcpKEi346mrC",
  "key25": "2NAv3w7JC33SmDez617RzfsdyHtKQnFmAm5AQPVjBeB6ivohPCzqdDbb23U23ME5YAh9zK9x6GZxSCpvwRZerxy1",
  "key26": "5eqAR1tJDc5gK6xE51QkVMv7rg87nyopwjXshEN9aSfcvLoVc2xVEyjetwXCVnqGh4dzqXBYcrAt9Zn2NjSdmEY4",
  "key27": "cGkDwwqdP49TMNWcUkxYZDHLmVWTdcKvZhG6VKsjLTZsKpxdd2WL1ut5gfi9nKx9ZvYjHo3okWaySK6Gn2781fD",
  "key28": "FhwiKJAyRDvByfazTL28j6TvkQDhWZTADDQt74NveeQjUNv4oUd12jxHUYeKsntnqeHtiiYDewsCrKzcFJQSFoc",
  "key29": "p1vzGnPuEMZhHrAonbFZ7YrLhaH3AvJyTgyAdsMdyt9v6rRKkjMnco7JJkeXsbhZY3qnVr8Qx8N7y9WxyvxrfsR",
  "key30": "5tdUUJPEPtR7aPndy1FdHrs6w1iAAzJbYfNb5VBa9kgPXHK8z2LKTZkHpRVicvmMHkdXAsWAUPmeKXPBWK2vyEhq",
  "key31": "p2NYkj7gRWh5SYDyih8ytkRrbAbxNYtGgDoySmpswWyGBhZEPXkJBLGiSyYPUAiRegFs6zahgtp2hv3FCmk39bz",
  "key32": "pc3CXEhjFHmJxuwYGfRjs7N6gR5iqesMq6WQJgzM2Sdb6L3xKL5zfFEanngTSFTDnfHMrhzezWXXmM3ZZSGaJA5",
  "key33": "5TkgGT4UdD8pQ7741pxvTyz9VBh91CH2TfDQqM6uLBboVRJBLQW6f7oALR4PKyt8ebHWpkZvyk7wppAysNF2jkWj",
  "key34": "5Yy7jPwnY6Btu9wNuUmaN8UwqJwuppAJjCyQa2FcevEt8hnb56K5z7DTj1JqgyD3E4WmGk87zahejhQzLf2KRY29",
  "key35": "2tWNs34pUE5hQFL8rAjwtdp6u33b41cD1CHb3kGrVcB4xmyECeui2cTLqpProzXfEmgbWMg1dxdkiXDBdzWYTpNi",
  "key36": "2op29C7RqfEbKe2P38omLLHWfFPgmEjyWhDeb78uYEw1yVriTsWcsMWsrv3MHeMeaDgA5sLRNU4DmqgnGSgpXWjv",
  "key37": "oDtYkqGJprzNtTXqMJBxJsF3ekveHZ4MdyMeiM7sZy6PM9YMMCZ8rnKp8FmfCF4ec4vkhdjA8n3rxxLNn9mTrzq",
  "key38": "3Uw6kXj4ERY2wpthsLWLoRQwRPusGWREF987ojMx9HTVXScDU77R5zWRPFHpm8MbjGjDyS6vKuSUp1XTso6RyfSK",
  "key39": "4x4sKDw7RrGvtJ38cZwKB61EQuwPWhnJtCcqCjF8697PZG76TLTqCRDb8MENRnaHoC3LArdpgYGga5Hh5NuhT7Bb",
  "key40": "3mfvtEYCEfu8984mZEaNy8AD55XkL8QJKTtAs6K7BNXYyVQ6AwFBDZYKG8f5qTCuAfRKsWPtZmTJthYLrbraVqi3",
  "key41": "2pFRPytU2GSQZQNpZARvA2NUY7UhYCuEDqdn9b4ohMo1ioqoZnJtEReJndRSUtK1u4Nx3LzaQSRQeVPewVBvqy2w",
  "key42": "5qwKNApJGduxHT5rkUNVj56JdGvqyWDkuc2Bxt7xujMbtwfbUjrUGBUHMgGMoniwRuHGnQ9nxphMZYespHwLHUKu",
  "key43": "33nyb3UCAxkRHzprmGdES2sWhipnddcxuDP8AghTnQLn6RWgCAQpZuQa7bALJ9f3gBGz6tPFB5jLjasxrkdJ3kYT",
  "key44": "UDYgn6RQgZYeqMPVyUEsswAwJ2FierpMDmUc1E3twaTetfA3s1eHTNmiTac91nb4BGUbxkEsbQaCKC5yPCMpQLU",
  "key45": "2UHpXNgR22oiYSJ86exLh4A2ueCuk5JSn4RaaFLAZgjocTWFs7kdufUFiSs1dNfA4wPiyiYmKAtEcSQ6xm6cfYv8",
  "key46": "5nHyVi9RAn7Sjtt1HNe2amMzxDck6tUzPadaRFFZW1rSKBaXyh2C5mM5PjrXBqjSPu7SewUDm38LF6j4oKfnmvRc",
  "key47": "saEh3obUJ2838Qs7szLv1AUZETYjGJpJ7bXgzZbvc5KrB8TbmMEorVHkMyvEQpjpxATV4VfLvhKyLiuwMBfjUBH",
  "key48": "TvwncFywU2LkWMTvhPdBfaUdrVkKTUxym5zGhT3SwLcQZKu1ea6c7SmETP2Kp4BC5tnWQg6kRDuhMu1VKmbxKsh"
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
