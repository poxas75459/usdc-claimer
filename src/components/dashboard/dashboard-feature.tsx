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
    "3seWB8FSppAcNCoUWBxnwDrAY7mFrMxYJfQzJypB7t6o7YE5dDM78ip8pn7hk7z7UgEQkBCZRxvPzxjAgYtV6Tv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p6Nvmqr2Nz7S38BWbXMSm5nDVNghnxG6Z9mPnt1RHWndhCqrRW1HFrxzwdND5JgTmQPcvfACgREvSVowvgGZAjK",
  "key1": "5QHQSZRcivYSeAcB7jDANSLd8NSQgYUseicyr5MuD6wS4c3mLHSShZsGpWDcCPiuNfbrhQ4ahGq6ZTT3QGtmKNGh",
  "key2": "4jhbE8MnzMBET7WStxp6LUYUk1sqxxjZ2LEVxw4EbfnFaNQn4TCYw4qsSXCKnzXPcu6K6sjXoaA2hCVSEWbWD3QA",
  "key3": "2iCtwuRiuC5PbQnvhXVrEN85XqgX78oSBydi7UFqSR9udYi4gf8aJq8qD69AuMrnzwAQkrXhzLsjHkf5SLxrLCog",
  "key4": "3WXzdQF2Zps7JT9PCLYSVibitpAmS6WtseaSdWrGuW6LMjTjhjNNyUwy4Mo37J7JQhuaH5egpwN5hFV9Tgj7Y5p1",
  "key5": "3YsT3qXES9vFfZmmXxWHrNbEcd5jC9KS7LJat2NxYziyZ8roDKDP6sa7Mv8un5VYTAB9gCmNp25H1Qmci2WZsn9w",
  "key6": "2t5xysuLVTuFCia1CJh19HaATuyN7p132CgMxe9a2v5aNqe6rNqvCbXNQB1NMpQrkYmEFovowApHC7rnAkTZzAYQ",
  "key7": "3r1YtSkf6nvXGebAEqZryfPtsqgtQoaUaGH5BsdLcGDTzqiuMqkwYwgZQpwFPtmZwAPWzHaUu6DZ8Up4dA7zxpAe",
  "key8": "bPcqbN86xxGsyeahWJ6cueZNw8qegKPrHcN6scJXFmc1inkGZntakreB6Y45mQ9x8dXgUqfcFU6GNqFWMrW6aXo",
  "key9": "5wXBNg11Z2WRgUQodfpzY6EZHkRTMQ6bqiHNx8VfkWUqWgfKTuJPjjscCcrYtpyCx2kZeqgZn1q1ZUtvyPQzMpBi",
  "key10": "253AvN7NWEBPFFj5YXW2vfNB4kDEBrLnuw46ZAh1VDsYC59zP74Rr8WFM5KHspjoab9p7v1ZbFbaicoYcS1WCRfk",
  "key11": "2cMrhdMCq7AErmhs4ZxFCZZ8Qb7VtS8P1B6Md11cAXJwMBRKfLEnJfrLEi4HDNjvtPFkRDXwrSvfRb7DoXbsum19",
  "key12": "2hLBX769romawUsvugqLGWBK3fEtviZtf17Uwwtv8hzWcme9n1wo92H7RgS2xAq2EypKfZdWpGbLtFCC8RXHKKY8",
  "key13": "95bF7zVEzPEh63nyLwn5NLMC236QxuwiQWUUJ5Yy8qmBLpEnscNdv97xsWa2FYqdSe8GahygCLHaTR9H46CpzSg",
  "key14": "5xzdRy3ZrQmWQXmnPLUyb27Xe6xZtBWbYcWqGsRyYWiKDKmKJvhR3dyatuYyjouaohMF71pLQG9jWZMDg8QsFvNg",
  "key15": "61tAcGfEwLw3CZeRdaWGtDD1TemBfVLqFKT2z148RRLWz5w8ate3zYwaHwXhNkJBpETNirzUkGGNW8V5F4WfkU3o",
  "key16": "29SnjjM29Kv6gTdiBfQkkAcyKhNuXzy4rpbjpms6guyyVySUAFuUcJBRs16VN61F8xRE8rdnu7Dww6eco9cyEofB",
  "key17": "2KCX3Mv4wUNDkJYDomTSWrxx68zX7R4L5uMH4gVb4JemM6bhjVywdmk4svkZMwcVMg3GAYG8VYHR3XzGtVydjTJv",
  "key18": "4TqFmsnQ8N7vs1EQYa59wksY8MeeV1s8JUvPvkxGvostCiTzP1BVWFhcUk62wfHtbPwtiyjH5rbnv1QQeUfAKwFV",
  "key19": "3FbCUjkypx9upPWxG1W7jg2k7oZwzW3bxoXANHW6HKhCNNjgSv7nKLTXPy8MSZNuKKonjwQKUeeFycbzKA3SdCr5",
  "key20": "5redQwwt93dSYUHXxQM5tXK9opDMVgVTxt48nSRz4nunaLAdYX1drRMSpMT8fGjGS8PNRsvtR8jqGWkyMHuMLU9n",
  "key21": "5zbRNFzzvLUYmnKx6dWd1byMJM4qqP5jF7fsy9tvY4DHN9ToPfwE9pSsGNLgif3Hd3sgsiDhdvA3ZT1YMRk1EvGi",
  "key22": "67qjSUEHJHdVf2E89hro1UiV7J4jWV4sd6gTjbCAYxn8gthXFrWrYt424BGL5uove3ZAjvGudtYUiQd46Q1GYYy8",
  "key23": "4rQTo99CwEQ1EFNBVwCDSq7Qh2EVHHfwj8XozxGtYzZQGtghUGARGsw6JEZQVpryEzc9R5qVF8CQ2cK7KahVbEfS",
  "key24": "q1Mg7W5f4pnoeGRyW26xm45vrfAaw7tFY1N42AhDghceELER4zZhzoExddrU1BiQcjxrRhLS7A7thye5YEW8BkX",
  "key25": "2M63LoTrrFLM3MDKJM8LN6kx3tSUwxFDdZs8qfN1R1m7apzdyWXZ8XrFQbL3pbFu7q9cHk7JgknTKtfSbUMxwJBi",
  "key26": "21XfcJ6aSXN6MUeyPqjnFNtaZ3dJDigN1QtbZs3JfTGici3paXeaS4tUmc5vLsMn4GzfQ6aQSXP99cWiovZ9UE7B",
  "key27": "3C9WbUwnNshYdJch2pVwy4KqCNuqkwDZgWGWYq92LL4q8qPP3PsUBWENeRXrW6NhywW5kq6K1c3rojriDeRVvL64",
  "key28": "4dqRk6DAwbmhcS2eGSqF4UC8k6RE2zZSMvQkWonDdDzPN1cqiMSjgskSaRKJYSe7F1AtWP7FeuDsF1KvXWBH6HTW",
  "key29": "2xBVqjkw3BUA2yzB6wLR7j2VAW75BsWtALC7raUCESsEVXhcKpMJdb1HJwhrQbidEcRxVkpLoTBot4LzXx1zZpPu",
  "key30": "8gXczju48UDnqA7fnEMhKYbrgKykrkBueTGz4kgwiuviBX4NhYCv2ycAeqvQgKwycFGrcbZoHDngTbZPkyRyHxC",
  "key31": "2D4LMAnwz4Dta3ii6MUKPGt8Vany31c6hv7W3UVwJ2NMfP916wYGEP8soUjema2Dcf1CTHXREkdSrhbMn6DovWgf",
  "key32": "HmoDUze5WnKFbFTyPGXk1gAHxomTQ7LanbYc7VSJoftUAMnwfLvpgU9sh2KbnkD8ujWSAtiXnr9FwjtByWxBJdW",
  "key33": "5Y1HHWSXk7PGfMpUwaeNDDrvKxrJWz8SX48PNhz8Rvwgn7zTtq6Avk6qxkmH7MhESfLtjn99qxfB3kbXZEk4oJCt",
  "key34": "2y8BJsRtRsnn77oPLcNo1zt7ra3fKshuhx4AG8etEgwbjuTuDoaSmXDfUtEMTwqXfekrSMihn7jShhCseWEK3iXK",
  "key35": "6S62Kv7nVedPgrjT9gWNKH7h55oKPMPZJSGwNddUg7nd6kNR77wCK2wU8HQxuWbeBfFHNStJcoCHMgasA39re4q",
  "key36": "63xmjapRAV5RM3Me4EXKBFqfxPWPvRjbXBGuppRUen1XVVvuUxuswjESxy8EmsdQjfVfqgaPrwAX7euDvsYd4jcs",
  "key37": "e2FgJWJd1CfLqLrgEbwJp9yK8gbxDNRpeRvHpv61LcKeMZ37yyCtLiRsk8XPHfsUj3VTfocPFUAtfweGY9GBAgJ",
  "key38": "5oAJxxt9SnopPJ3t37wTamLeehC1c8kVVGXUUEyDRNY21z43nZipm7QDRbci5dfdG23DEWgsjg9dAxxHfXg4eRGG",
  "key39": "2MgKJwzfPeqX2axgSFBCXYpiGuxCVcztdYYBDU4yMBTvkLAieCyX47JhX57GqLyNvYPD8XTktwA7uMgXRCMsJmgw",
  "key40": "3MZYRAKFrGJBnPAyb6dycLwtLd3V8h6pfnGizZsvzwPxHfLwrTsG5WzYArgvREJfs4TtsPQpQfaiHwJJjks1GG64",
  "key41": "VRfGcQKjB7Jqk5F2g3jmyFFd8aZEnH6d94agVXqFVabsc3zBFWauwQWhDkyojx1TY8CKvBFqiRfwNGKr3uimJra",
  "key42": "48yXFcn6WHdBBb25Qiz8Y6rUnDrwdxT2SD2AiNUfMVskUCKhkx2NpDbAUSuVPAURe7bv3sTgnx3tjFtce9CQqAKg",
  "key43": "2cFsKF1DrXaaf5cCdUYfxYxpWrruaCJ5h982QQcYYcKF2nuxrxE682ajqG8NNQBs4Boap96c73JTW7tNQH83nhNF",
  "key44": "3bisbRpPC8a9GhdVrbJNtEhAVuc8R6PN9aKbGqiRE44EvqP2yDi6GG4f1CQazPLL8gNrrwi7PcnCVTuhDSjPJZ6j"
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
