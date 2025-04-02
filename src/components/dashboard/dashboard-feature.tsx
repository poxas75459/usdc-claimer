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
    "34z2XPyxcWq29YFwuySV99t23CgZTygJ6MwBUXq6bpiahGoT1XqiBxXoiyV92TvQZeZVWqsEB5XBBU49iuBbzZ2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24HPMDUTHB9tcau3Je5fJVSfYVzq3AB9jUYW71f2NpLvBFYhuh3FX74CiQZH3vvrn3Qnj3vwfSAVNSjwpJ5898YT",
  "key1": "2MFCZiuRvkfNGk4NTVAesL2nWYoHvAxmSUnsUo4cCzSN4rbuhaDBgvd4eCwjNApwQn6ooQDjhML7icw7hWwfzR6Z",
  "key2": "3hmfe1sv7kNRAZ5mxSojzqYHZrKfPKgZ3m3hkivNjxHEY6C5L28tJbhhWBuwoxU496KfBAUKUVcBEjVir6D1N5Z9",
  "key3": "3CjJ2nNQbJhf8e82uZCnP3cAYHQ24UFd7NGD7ZdExiz74RnJKn8txxpHzE8DzNS5PPo7imvkr6gjJgEyF264qATw",
  "key4": "Uc1kXoVf8xPXXPUww65YY2qgwjPujPqLdduCMbbywpGvaJnxMGJUyeU5Ct3R9pALYonqJQzvqUPs3YWGp5yBeay",
  "key5": "66boeDwF26YQXY9h6b6AJ4V41CRXiouukTFM4pkkKVfCbGwY1BMaQ6pGsRn9a4tMqdtxvub4bCZXjPsCK1MJX4wR",
  "key6": "CSQuPJGPLuKwLmYbxgdfagXm9Q8Krjg5Thwwdh9aUPXE67Kp496pmkHvMBVwHFoi7T9YxAyhTT4jW7iye53VLjU",
  "key7": "58sDUQSfrJuBRVa6VVnLsb6xCq2EeoEFqT9PPw3TkPdDAzvrPvZLG9XbXGy2f1Hc2rkf7tThnMbQjmmWeu1aBirK",
  "key8": "62d6wxb6TQWiD51uVzixxMH65mBabZzx42Ya2zWKKJWfZBTANghzGxc9TP1FqgEH1c8F97aUasKoeZosrbYw5C3e",
  "key9": "SVqPLxoagwyzX8Ff7KBy6ZEjn2hMx5uXsifzKv6rhH28ggPbgscnir6oWsbRntYwPKHLmRjsaYtiwtyX3bJrLdm",
  "key10": "4GPcVfXTZVJnMuNcbBzue6fS7Sj3Q2jUVwgt3PyV6HcvdbGvHGiSw9za1z5EBZw2v6iwbeMWSMZ3U8JHEjLg8r6p",
  "key11": "3wmujjn2SgD2wTN9L3tS2Ygn4qakTWXm4PmGSpH637PpNTC4WXJd6XLWy591TEwZrd1uGRhDmHwMnECEfnwkLWmu",
  "key12": "b9yaQocLGMdZr8Y8ugPrWJXZ4FFGaxQxtoxPtirUABXuTYH72jBGVXB6H9tE4MEys7FSCMAZUTtFAtp4yB9o6pk",
  "key13": "4muVmed2S3P9agXsaDbNS686G7WMhnDEjF2ks95dkdny3i55SJm63SQx6MKuWXxohy9fsrRmxyyTFm9CLhK7eVEc",
  "key14": "2irwtiWRRxCwgctUd33nyYrKedeNyRq9srqqwcozdtGnuod2FdExcMv4SjZzRveUhSkw1E63kmkUDDAVk9UyG7U4",
  "key15": "5PmuMV8PXPqjNWwdSCKwMsHn1vvUs6SnafK6wtUPQewprpL2DVdmJKMa2BapUyKsr7e1c4ybNgGs1wBmAHpv6ws5",
  "key16": "3arJoWiW18N3zZZ1kA1jPnL66QbXf8agbeaaE9LJtVNvcc8YkLvkbeFX4rfABGyTpHhYKzG71L5bLEYDnC2vFcie",
  "key17": "PxG3i7Cs1ZkLVT4ns9o8AwQBpeVnw3UsFNxLvNGxtxafzXRgzaN31YTTGeJ8ptLTiN6hdGF7mFzFnvBnqpSp7cu",
  "key18": "4u6A55rbk3iKJAwR1zwtXRVFvnbgCUeaNMC18f3U9vUoMZTDqNpUAPajqKuSdPvxSPAoexzc5adQxiazEXmfWJR4",
  "key19": "5ZNjRo5g3N2Yj4WiumYekVrjzxHd73DSsYurYCm1xFmNWG18aUuRsFUCU2NeDyC5ofNVgToKkVhPpsz3st7yS3X2",
  "key20": "8NCitanYcgfyYVp9Gwsvapo5veAX7hZ5YgV4kfUe7myw1Piw685Zetp47GmWYVhpS1ovo2rLJmFtthNn7U1hDDo",
  "key21": "4MP2awooss2JWps2UjVCkyCBqEXKV6s8bHH6AuNAbCcu7k5pSH53vRhQ7NqUoXX4NPYzZRtofkevAjCEL7NxMuiu",
  "key22": "2MhxDuvED1z4zX1XNGMyr9giSccTzyKSwY3cyQGoaGgbDe5y2siw4JDxjWnYgq2A8mrfQamncAqwfhR9sxNrUNpG",
  "key23": "4XMCdkEgrMh5tRkxbMX67zdUZL3RjnM4N6XSFCRpF7CfN8mGEHt1JNE7HvWZAHCnU2iBjo9uA89mWnFV1DxLmjpF",
  "key24": "2erJwjPzrRHDAZaLMgfp3wJ4BSZdH8zTobKorcrGKT3Vh1mKACxJq2xz247pSFoywN2h6Qe1NgHVc4Hzsne93Mie",
  "key25": "4UVkmqW3beRQpwKbHoPrJJvi3ta6XjLDDfxxAEQKc47PTSZCpqRh2K5y7Nnq1Y21bjRhcUEjr98gUbAVhkTVbzEN",
  "key26": "2H4K153424ZwytVjjvi68Z96vzUyj6CdAxgK7zcvDGBZehmMBpoXhpbhRNnBrTK9NawN6jmS8KetwHLHdLB4de2q",
  "key27": "5un4BkQnBsZ3edo7pejc9GHNH6uNDb3xzW8QXNVAgHgk1fyCUNCo7q9iUKNaSXdS8XWbCGraWgPSTUbYZWQtJCF7",
  "key28": "2et7u92RqQWnJp8vcpHWr2LqEFq1DgGSVEjwS7v8vFA9ZEfKQCeKtS7jxr4GcsAVB743qdeFFHJfnmpev3uVstxk",
  "key29": "2YNKWd2RXMoCgSiweHxC9oe1o8xRCdXvKH2qruex32pGKwf24HnmT14XeWteB2NHF9RAShF5srYHDYiZkCpJjCoW",
  "key30": "4Bq5odLsjNk5YXjB8y9Pq2uMjgrEJ2PCohfpTF3rARfgkaN7Hx7ikn4dwswHJ3PcNAfbuWMhwf6zuTJpKMpipshm",
  "key31": "4g4h3io8GMHuxbC5SRSL5epX7RcZkKmwDiCsf3SSXjzaqQ4TcjWMvBX5rwLa6VzeeGMc9F3H7TVyMEmKE76yKbcw",
  "key32": "M6rpnU4LZT4dxWux5ym7z39BRZjquTZCpF6QAXZZtyM2cui1HgHh5rjX3kutbwgV7QwWGyJYLJoXDQZPf8BQ6Yk",
  "key33": "2XJoKkP5uGxH48qoyko75uEsxKofZj9W6mL9TgWsW74mjk2NxwqFgER3xiYb2Rvm5TjTTyCUEX33QbDHxqq5JowA",
  "key34": "2wywH6pWTGfKkbqmSxjQFKeyAoWYmiDg19muEwqsumhKUhrbMkZrivrZAd78cGBUQEDggAa1ZMe9vFox3bjF631E",
  "key35": "3Ycqc1Dt3ftjVAfq7qpWrUGaBrkrz35ta39dALnKpoF6jAe9ocNGzyYeQVoBU5rvijtyRJvhG6mKDm2cmb3rWt4t",
  "key36": "53z1RKc9nZ16xsreJY5b5GZ3Xi4y3pWd8TyV1kTr3NTHsRygYN2qvhhwPFebc8Nmfo42DspDoRZMPTEGP9NypkKT",
  "key37": "3duVeSyN1Y2qPwfmZwsCNxXkRyke8gP24nphJvKeBV3SxysxCj8Xy8hRTShtzgS2kX6uijLYYcwTTDYu6cEGr5iD",
  "key38": "v2oX2et1KFdM5p3uK5ngY2a1rL7V5VrZ4wB7hELSSw8rFjyYP4MhPjQhx1Ph7FkPP9e9JETWsjudBHwGbp33DF6",
  "key39": "4VfoGP5sDbVvU8bmTdG6x8ycEXhSmgVBFiAsGid1xeKAx9ZPkcCEK1WNJ64J1Tr24Twvi5B9aVVBpRhBQkezswJJ"
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
