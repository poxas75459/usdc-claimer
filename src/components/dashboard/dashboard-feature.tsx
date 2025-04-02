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
    "42wuW16TzGNvPVKDctBcxJKZrRqvFGUSaNdMpEWjqJYrYA8g8QMdC5dRU7BsuRrTusuKb7ggBf8qCRC9iJAmBms4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mgdKPh1GWreTJvUcYDRG57TRv7nKg9Yrj8NEJyU9QsRgKhQ1cZpqskZS7TcyEJgef4hZhoF2c2N8dN5eyeYH8RF",
  "key1": "2ZhsuRvnVAv8MGGDkQ9oqkcQgUMFCp59fCozgy3UFbXw8gxo3HK12TuvcFyHTk4XXxZikRVesQmjzz14Ujfnssmg",
  "key2": "5JLx6ByLbdnzoXQaojuByrj1PxUU338fRzPWLtniUzqhYa6rAMocTimYSisvT1Uomu54he6XtPcSjyqk2px1V6fG",
  "key3": "5JkDRfjc7wkWu6vhiitgM3CLfwSXB8a49ewv39yA2wDaNbyxq7m6MFyKkdR7HEmDsmuerfVcLCVeg8JscpDynGbe",
  "key4": "2RfrWgQWkfFhPgMUdKgBYh3ojonQK6GyR593ZUcrBzu53Skjarnsa4b1UQpBDCwWNha8iAaGwTXN4buv8SZZU4nm",
  "key5": "2VaLPxXkAN3n1sAj8fGFGsi657A5vBgcsxhnBeaEs4zVGb1QfiWweuP1cT92JnBZhWYGezmr5UbLvsHjDtKP7R5q",
  "key6": "5g9LZCPFLbNs3g2KQ4y65ufiFNRBBu6ixdRDHTWJ6PmmhzwbdAG2MBnjQvghVzkzbqP4hb4PrMrT96RUUCK5dqQt",
  "key7": "2cLh3QhRYqb6miLWsdMegWLJdu84ydgC8Twt4r5haWpFVTprdxcK1eaBSWPAE3p7aqcvExZGRBzXYrA35cWXa2cz",
  "key8": "4Upq3qi6PDH4FYizuzswgstPy9dm2w6GLpGLGF1nb8uhrtgzB7EvhMbf8HEYiFcuu62qRVurAmtCGzicHxH5DB3q",
  "key9": "3PhC6k7DUG1YMgi99FbsWgqNtpXd8uU3tM5L6QCT81b3fyiX7HK3eeYXA7qN61Hra8KuyYsLW7nxyx9VkJfMKDnX",
  "key10": "4EB4xqzNZc8wnpH271QSwDvZZjS4qEMkUSTXjmX4VZYc3Nngy5uhFVcVXpXhUpZix5CcpaGWZqcAGrrZYdmVbBSo",
  "key11": "2TPY4bdMbuxXbmrx8WWibKB3G85hdYUV27JxnexmeMuWjmK9fKkfs8Jw6sxhRZ1hs4pW9XJub81HS2hVvZDiPkTi",
  "key12": "uJ7Pq3g1AMFUHZFRxX9XhnyuWJ52CXqNFdDZNLKoeKMPX8W92AYNcboNZNgJxFawLgiFDnmDBkV3PN4yHaJZgj2",
  "key13": "3e1VFcZ4JaMQ39AmFXrea97QrXa2By82bxhtWq5ttobvwBgCWuuBoEBAyGjdX7quMwTyvHn6E5YYsyAqZGXfCCdX",
  "key14": "3ze8uqPydzHCRuQ36Guz3j3qhbgFfgR8WpmFSbNjQaRwozWtB277f2QTxbx1J9ADGguX9tib3DaMisKs1E2TGC2V",
  "key15": "3St4vbojh3Rr9Z1PSZNEaFbGRcJokkgLHwj52CYVZRQprfMD9wDJjytmM7cL57ir9g6qxSUELeXBL5H1TRKf3QpY",
  "key16": "2EQaaBs55ymchYAGzV9nX6xz7sSzU8bWiL7PXJE3j5sX9FysGCaRygGUhaEpEF6qpYrSMgg4qYkrESA4KovPWzFZ",
  "key17": "4PCZ83jkQsagB1kxVPmGYxujvjpCYYwCmwMsPBmmg69SdTFWf4Y4ZN7qDjdiHFW7tDoQ7vXBDd1jbQCsKTRSFdUf",
  "key18": "MH4mS9oV1emGkXD13QDhUkx3HVAgs5QSPBHAaRuMJVuFAzFyHFBThztaG7TrUhvRxnzdka3VVUuDkAbKLZswKvX",
  "key19": "4VLkC4P1GzRrZJnvgELNzkUXXLqsTJ4PuRf5Ws1FWowjCTVaUcoXDptkCYNd41xqznV883dUVDu7WS98sRmZn2do",
  "key20": "2v8TPzsfxEyYa8TbNHsQARPDsxtELeqtYfqthgWi4dEHuoyfS8fmtAwik2NoeKsXw4Vu57ufKnMJPf77wvR65VhZ",
  "key21": "3wB9du3Vgd6sNJ7yhiqQDR2etTLPYMoWoxv3T3L1kycJH3SwinTj6KmukeZMgebaNgAUpnyPt7EZE67hKDvjUZz",
  "key22": "qoGq5vSHjDcDRtBXsVNs4scfU6PevpFjBR9Myac2k1UZB3aze7iehqFM1mQeR8zTUMbaCE8eCnRoHUTNPKxGq5N",
  "key23": "3EnyAut6jYLDrN4QBcE798LEWLNR9VaUBtoBXJ1JGsbpmxi5iyaZ35zSn4XoQgx3vsPYsVAsJyftb7s9fRk3BWmn",
  "key24": "5rFYGZqwaiaCTq28DA2GTrWTkPq98YLUpQb9h65jcX8sBHJET54P9MgW1pERSdS63aDaQqNHeYjaEWQHPzJK5GEv",
  "key25": "pYtihDQ4p3GCx8eLeL94PzEjEZfkDQF47oHBZv7TiikQNx5N6dsHf9VZTcDdHnBQ6acU4o27rCwioarj8RS219a",
  "key26": "qBsy7qxcMc8WvSfT3oRt9kdeCtbE9MjY5iAr788XoAdSLrEQXCVUiq388ZPKRxxRvBWpnmTsCgMDeGXGLTaiHRc",
  "key27": "3NJKhUtHUMWmTqjruKEunqt1XpPT1QWcBjLchPrJ8GWzxxwjUNEVsnDH7fj5Ehaa5tMAPRZ1NGwYbYgiHgKsfEfv",
  "key28": "28McD9zsJZDG9woeKTG3gqFDUCjoL4CMva1vpLayGJB4bPsq4Ysc18qMjPS8T85dsrgQoRJQgnoDB1jwnCUpKwhB",
  "key29": "5xRTMM6CTNn2LvvCBfjWBW4R8bzLm9dULZcpzC67Cegx5CFqvECdqJt8rmWTx5vh3yx7YQRbh4FrznnZTBzHA6Qw",
  "key30": "N1i9PX3PBifkGhBni3SwA9kpAFUpVs5jkYHrDBvn1eqsqTYXGJ7u6ZE69yP8zWm6ZEhYcxsrJypx9gU6VwSPULM",
  "key31": "zMjj1iFPwRGVBFoHuzSWGFXyt4ynUTgKt2GQV7RKDBMzVyv2yWnvqzE3g3Gwagt55xc3iBU7bkBagFbustQbdYq",
  "key32": "6weagLcEGMtuxqQMokZx67nrqf4oh7jJ1XqtmPv2grT5NxUAdQwPyHfkwChR6HHZCNN3hZRVZTV16y5hm1Rpnns",
  "key33": "d4d4JrnLALgn42oHw7K8M3nrD7z5c8a9aUYoHZTHXqn7gXnUKHVqeH3BLwpxdWF97hegNS7HWxgDNojY8U5yWBH",
  "key34": "44D3Pug6jqV4YgQEPi11k7efFqnqPwGqowiVutJB7AchenHVAU6jKcU2j5QAGsigT7KWnyZeHg79Hn1sE3Y77Mjx",
  "key35": "5z7dHFqTQN8fbBymhuqjgXXrhWhedkS5VMPmhNoCqz1dq88zaWNhPpbzUVb6RDVm7gqGXMWtxZh14jJjyJPEpSST",
  "key36": "GSwNathNWw9TZEgP9PtfyZHuXR72MjFN4njy14pVVXJrrc7zEJDWYsHvGuP2nrSoaqJawdDebDZd7BjGMNURVeS",
  "key37": "Def6BsWeW9oLnZShGoBLigRnH3g9eJvSoFMy2c1H54ryoYzvcEk2KgcHnbY3RHc773FQuxBVV1Z8KHCnrrue1jN",
  "key38": "5sAwgYEnYG56Bac3aEcgyzaMkkcX4F8Y5LcyT1k3gE55JcDa91WZKKxfVfXoGsNwmnKoreCKZ5dMqDNmTTCyTfic",
  "key39": "nxBs2mTt9ei9CFTU2jeXU6voDZtvuF1ooJM94uuxsEiTSaKxqEDohb2atcGJy99EfJrQG8MEYKz1yYDKuCUC2h1",
  "key40": "29PSq2gp9BYXs6haNSkK9bdEq5gcJm7eMdgC36KGUFD99kjhv7B3r9g9eRpvYK6dEva4uv2ghiS7dWGYcKXws1fN",
  "key41": "3UpcyAoyo5Tap3hY2UFWkgnZeBPFQ36tRqhrsQYygXjsY47Fo3CxFVtuwMwH6nwWgFBuyv1BjSBUMaeUdjRNgAg5",
  "key42": "2c2KtuHZdVSvh4VcE4wJeCDdSNBRTC74kFm4QjafbYzTifdp94xq5kLAveCWXvqBL5h6ZRPrvwwZx8tmo59bKgxB"
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
