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
    "Cpm1LAUYQZD4PvjFQuDZ5SuucWwSMGysbKxRcN5n644kgd9ZaxPrA3T5SkP122VxpV7TV7K8Fb6wzWuXD1drF2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b7xkReD1GDCuEaY6d6x6t2zWXHS4mpr8MQRMfdqGFVcn7jN3JWRfFND8Sdr6nU7C9dRqgCc9XVcxJFrrzikBVWz",
  "key1": "ABuvA13covAqtEBEemVRBebWWybANR8h4cyP4wkUASSnSXqJqYdhVVo2riNPJkHdrZ1M7FnGmjgsWcfDWmgz65h",
  "key2": "5J3b3RRAT9cGaULXhfXyCTCzv3DVoCxuPQMgkV6RWWrMB7Ei8EUE7W2Lkc7Cqr1UiGvahZCqFZqKqTG1jz6dnqyB",
  "key3": "4QQ35fjaq2bBhm4eQeQ99HxBvzpr9g5h12kPxLph7AWd3HwGjsazvpr36J1zX6zC8wV3wkPahrXodHJ3rfyyRiWr",
  "key4": "3WpJYToYqimekmvVwtZUwgiRRz33Equ9i21qG6414pJSTXcpioULdbiSJ5q7BahvzTWCBnZ2tHLsgPmQycY73qzp",
  "key5": "4koGaz6Xhf7FUDPgY96brWRTXqL6KyoJyvJCtCRvsd78e37v2iZv682xY8J5SMxkANeFT2XTM8edA7usV1mmBpeg",
  "key6": "2eGRxyTSQavHYHUi7FzW4zDZfgNC5rGbR9xGgZRdGJb1enNLckL9E5ntEMdTytgHG2dmP2R6P5jf1QiSYGbALjro",
  "key7": "5dhJZbmfQLz54nzDLs7ajWARxPsD8K9mKwccrYeXxcRkFJH3qEH6xLx3qaFqQWdU4idF9jEyx9Xf4zHaN6AUpq8q",
  "key8": "24MkKnRTAwsjAWfPjGj9STgUbu791JFoeDG4vn9T9BtzBBV9rV2BMJuErvLWeQ8mPVAyDkg3kmTQPwQsftE87ds9",
  "key9": "khacs7CKEiBwiYmYAnUF4r5Wpjbv6Gczu2WiEHqhpHVWzeoYqZoVBiNnQKVBEaVVXXpMvf9QsRfAUtxtEzcdLMb",
  "key10": "vew7zXJuV9fcZvTp9EW7W45MNpDqcjKF1rbBDmmbEN74c93niK7i2vh9AntpYLB5sZ2DEovaNFBMtdBKREUANPj",
  "key11": "LTCpZos5nM7QWetDybkYQakQQWoCC252x8uEJTZQZJSEYowrk5zpgtsR4tJXrauS1c68TujJ3aiY59fJWW4Hs3b",
  "key12": "56eX6rDQQua536FJXY7MmA97MeKouyYLnQB6PUZsC7VrM415E4AMMVcuh4KNgTFN4WCBhneeqe7oj29V25FF3iDt",
  "key13": "CJ5GoeYaYTThLLw9NSNjaxsK4bUkMB5bbKoBMMsvyTtNAgTNF43EjrP1JT5guiNWVLiSiyPFaQqzvYk6LYmm62w",
  "key14": "5QV96MNxUzF52t9wVsg48DMo2RUdWbSZvA59Hia2XAV2SkzcbkbpypmUSB8jbAfhRcWjWQHi9uVENtac2USTmUQY",
  "key15": "5LdUK8mxReZFXFFX2Yngt1fiajBkSbUYX9mw9kKCw26rxDY1UPfxzAncTZBxcDiXjzRXxYMCNjqdL6UEchDPvfco",
  "key16": "5gmsUENL7v33DQEjN2nWAymF617wYctXhguJtGps56aa5BfZFNvqthP2EvbRfusaTAVdMXJMhpR8f6EnNnz87Dme",
  "key17": "5qxbNEGU1DPJubxNdgRnz2Cxea6yGkUwox1P7sBQQ7aguMzWURzm49kAd6QXrh1CKoHToezW65PJpTrmjeZyTchy",
  "key18": "ZPLBBMJnNpg9Y8vz26LQS4BN7Z3K27XWwuJ7aVJE2grAnW2W5ukRWzmRHrDsmhM8FdW1K22N8eQjVT7vkKgoiQ4",
  "key19": "2Lum5Q37HUpwb9f5cuEbs8DuKMVM8XUHQYxY5U9MJva5nC6hMHeTM7cCgRzyJPzPmCJgRYxrh1fEsMZEa4FJhnFA",
  "key20": "5g91CPegjg4tueuQgYQHzcRKdkUqAqFGSRwPYFvoB1kokjbHnLz5BmyusSsxoz8f3kEqgqWBzW7CXQyurC1p72k1",
  "key21": "5s8XPVpQfvAKmynKAntET2wBVTHabkWd6YANwBEE3mMxkuE8etxfswRUE85F2b5BHncGF9mVVLL6UNZaLc7RvBQp",
  "key22": "4SG9HxiBBnffsHhwamswtygXg6yNC4PhSh3C8AMPaYSY6z5zY3eZxZYcBkFCQ69FF7TGGwdsNo2GDCzvVsdXd3UJ",
  "key23": "585C3S7CtarXeRt3X5KsP1PbS3292U2ngE8cJ3mBzTiqXaJUpRMHesNQftUNhgmFrp5LfF1qrMLkVhimJX8jPBkC",
  "key24": "5nq2HJzz3zW4YqgMJrvdrtjntpXGnqBWK92X47ArUTG1q3SnYoHbykbCCV9aWho6UANr3EpRQpYvFovhA57XA7qv",
  "key25": "2eJVVMEKjGphEkUVJk4meWwSoGT25vCJZrjCeBeP6C5yDemh6LXtkNL3iY2Wr85dbxyMzsRkL3hp8K3prR9tA231",
  "key26": "3NQVyiccmHYmqsRGm7utDgLBLzHBEVLL66F3tw4FqjuU2B7ESeYhES6PVkHgH2breehakTngYrRYCQbN6xksGaaK",
  "key27": "4unR6knS2491bDFtRvTnaajw6V6UjZkoNUGEPrr334FuheSkDV8iA6y9V8yPVEHUuZK9upEdHkhweMh8keRthFd2",
  "key28": "4uBsz4aR3uX5MqKepeRKFvg5VGSjNtDeKMtzuvg9kr3fSfrkBKZSfd1Vi7UGwpNfZXnNKJQTsTWDdyBp8AkJpqkD",
  "key29": "5y81RcQ2fE5McZF3E9DCHtehJB38JS1w1Y4N1cCLd4qKUf2mRTFtucidLUgjZCcfe5kMK43KACYZL6tfMbVT31Xj",
  "key30": "FzPAQKLYVrH9QbpHEK8KWbTaF2XPUsjWcRxWjrGBddVjS6wmQQrbZzUgv3Cxokj5ZEKB3TiUdBSSM3aL4cGoXDG",
  "key31": "5x1gAMWyBMGvf249SqcQaZtMNeUiwQ6qU76b29ksJnRyE15BBJJb3aA7BCWTNPr4MkYeLPdu49vwvPjvVfgaVQS8",
  "key32": "5Z5Bdtvk9JcDfQTpTjUKofy8rgQYin8qWGQnN1tB5uAJUHzZejtq7ijX4JBkjsSvB4oYznEWGtJWruK3QQ3jm3zQ",
  "key33": "5PiucXRktwAiymNP4rdb9wdR9YEq82V1sMdo7CwdbXj9gLhuwKTHNeJkw2NSy4P85RyXvGi5ja6TLo9f1CvnYmua",
  "key34": "36nh9fiYGhTR1YUQz5f9rF3Nqp5xcQFnywdmScViXjoWraBBUkv8WFDA8zzbWnNEHziPKUqZ1qte9cfNq4Cv57px",
  "key35": "53TEivh68maAvYEbqSStz3yvQQdu1XSCGuzyDLhxhodMuxUa1gosiGcwWL4RQypHJQcJjCrVMnwdmkooAWgxyt5a",
  "key36": "2W93sSGJbq2hTvgcujcQTyX6YJ9jcqbmyQQxzVacxzcttLgxX3NPrAi14GWEJ3rqc1gaYd56rwNG2kWposue3YsF",
  "key37": "Lxic6yBEtUqPyMZmh58gVpAiKMo8qJYuGAs7j23RtNDG1T8cEESbAsPYQqKYbo3NRTjGghU7MEhr2AnrpjmqATb",
  "key38": "3hYNGHKFp4rcyWMj4AYDGLX5LyGDUGPLGDkcnmoZPtwfjZfaDcArhgeWdbfdZxftLDT9SWjranSDrTVW8VReJkpb",
  "key39": "4NUg16HUiybGLbhbz6wYJNJD5q4jM3fBT1sRcoNVVusEJJkvUzBaoWkWNpCYaXBhHMd1S52yiYWd711Rp3jHpf6o",
  "key40": "4MWYxaWLtnFNEJSpMg8tjaigggVgE3YnZu5S1t52NXvWhJRCVwTmakbitngwvRF85HUxNZQjB6j3SBL3yj8xKVxL",
  "key41": "B1ggoY2FMeKH6GaTQag22Jf2h9iYmJtSAmxEmGpsmE1ekeqqFU28k7TdxAJEM5a2GeLU4Eps5jpFvLh5Y2VUMM1",
  "key42": "5DvpcHiGsnBGAxkLAURfwAXFWxmrDaWcvC1ZgsDffjL4rHwC6Br6akHgqBeBoHf5VsBRDkCw3wTkRYTWSFthZA8u",
  "key43": "4abNF3WhdDH1m53A6FeKs5cNMCGZGjnYqismoPfdTFLRGvL7YX8AfJejUVMhTuyPmSnmuxgWnHYyYkpc4WDQWxtV",
  "key44": "sv2cuQByFJSC3hurF2oc6XbH4bZH5zsWLEAcRUAy625u5udvtKTRftvAZ7t7RLfGuwCezYEadYfHc7ZEDr6B89e",
  "key45": "4RexdRCstusUVMDsivajzVphPXGcraNyVBCrmhcYo9EWQVnF2t57QWdfAPcrTZUTdcDWg2NJDjuhtsX5WJTU97oL"
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
