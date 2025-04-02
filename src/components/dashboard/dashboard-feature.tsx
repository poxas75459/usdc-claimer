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
    "2GkoXRnmQqtv4LMFUEEc63MDkiXQGng73VbRW1agwMUDA2B2hm7ikhysXqoZbRGBmJyg3tNk4bbsBWMn7mWTVRCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aFcAMRmhPbzBcMP4MrRLzzHHGqKqzi9p2dny1zgYbsVV32mCwu2vb9cEdwqA8p4MoX42eX1akh5c2G6fN4Y38uD",
  "key1": "b7RFpg3PgPykweJeqmsjwNehqvkTqmKqkrpPXiRS3KT4s29kQRdKHewAdYGm779fWXZWBBNrRfwzytyMBJpvBuF",
  "key2": "53oRP5zEXh3BRWN6r92Tc32FCgFuK8NkzNY1fZdjpJ5D7dkqAacbNP39RDU66xg9RtTVKDm7PJwgocsjo2DtjQNi",
  "key3": "TbS495R63qFZFNNhqmcbTDrSbrLvX7DtxvMrt7yEQTn3vDSTRZ5wDabo98LAJ1dN9aqG2DDjA2KVapMzhxnbZes",
  "key4": "Jpau58yjPtidMa4kF9qt6WmALd2wSRTVBQmESFu3yriqhyuzBSMdtJpY2wxPhN9nk8yWpa2uc4FF2sLZgqvspbg",
  "key5": "4QiP4AwkZZEErfaM7utP7TDPwa7V5XJMT5yeopfPPewNsUFBXDZHZLPYHxbBKwqPcVtJFwjxWsgh7qUcGL9qftxK",
  "key6": "2jQdF5noMYjNv9Nr5C3zbwrx4LxVc4ZsmHh8T9KXAgq12TvHjfTcESKT581qS33RK7LhDi5sVWwmSD6vKSts4cvJ",
  "key7": "4aah9S4uNpU2evijUP3AQRSkVevfF4j5dP3hP71TdSSTPxQ5GBSdFdwnXbtWHrrYZc1QXEiu2RXJNfmQBGBY9qLP",
  "key8": "41nDiryMES1mRoTrYsX8Nuw2n9qWc6r3RfwBPVVPpNJXkUkygGUQ5aWEu2Gn5zNA3EbDr94wZTa8pVSVXUWUaAc2",
  "key9": "3G66ffECprn5P7dvN3uuiEEDK3Az9Zkxrg9ZJAgnaoXaYBveTC5iYU6BtcKwF6oLLkW9Vj6XdewAqUL2j47KhjuQ",
  "key10": "2Cp85Lfdtwt1f9DaQALUsQ6hsNxit5yah3zLUarFP6RqUZxrLTxeSrNfNLPrs6Bq2MkD5cCsn5aykr3zTWmBwjuf",
  "key11": "36ZYPZ8YACo2nA63ZqMfMysbCaa733htf4YnAUVVe3pbz6Vnm5NoqY52s5uKj2K2mUykkvzkUQQzuG4TTTivfe21",
  "key12": "xhdt2j2pkAaSrD56rgb83pW4sCHW8dHyi36NNMXCkNSre1cziw1mBPVWsjs1N6rcmtjMSsNnJ6W4u1A6S5QNi3X",
  "key13": "528HC9Szx88SQwnpKuugyoEWUTiN7YdRDezWzD2gTf8nSKAYx9htMR6M2Tc1gzagfnyvoEhgCQygfkcQLDBmLfku",
  "key14": "4TpDed2E4shLRgLErwNmawq9iQuzmF77HorG4E8Tp65eWULcdechSWji9zEEvErZYXKprZG8sreSscX1Ed74CSu9",
  "key15": "4HLEzznaWFKQfpJKsAxuVtbY98XHhHk4EWhMR8Wksi4WyL6ho5KPNo6YQaJtpeSvnxtvcYGgXbv5g2Z8bikVvQau",
  "key16": "2kZuVGLXS1E9vjo5XZW3w7H2eBL5YvvXsbMrgkfFw57T5gcUKBYjCwy5Gcf1o8MwfhJ3hFs1m9cjETbHapRjuXVt",
  "key17": "2d6Hwf5Zc2AR8gZYzjmaZ6qrJcvfDQ4iV2P9wsjBjLdFJJy6k8XJQ6RUNt71HwFJTm1oZzwQFYsuEuYAe3gyEEvJ",
  "key18": "2P8mvWsn9JJxbN3ij1Ckmmd3kBbEDmfssw3ACUhUXUzq9mESHyeFrz2Ywboy136Ys7eGj5xawh3wU3C3zmMz4pLr",
  "key19": "4LBCfbDW3XvBTMa5CUC2eSLxf69dMW22rPqaVViquWTuwqBaHPbd9Cy9Vq4r587T8k3SNtmWsaWMA2nC8qLNE9MP",
  "key20": "5juDMJW66ScQRzajheuAoKEdg9snELMYMMaCJJyeqauNeamxJfjdCuL4K9R3Mk6fjWXqmoxgJCzSsE9YpzE2Y7oy",
  "key21": "NNSmnLzfvYEJgmCRJAPxHSBs2fiBasryEFDYQpacpgekHUNXpF18cTbENRdLGocdibnN28eSXpViNfNY16Uk47e",
  "key22": "66gG9KziiLaZxk3FpT4fUg1umv2bh5AQsLQFryGWG1w4f2rhtRcJjYtjuukdk2z6fDVBaDuGkGVrQQVWmFK9cnND",
  "key23": "tW4v75vu6gZuiz4A6yayeUYPjHSDKxBc3JMQkJRY6ocdSv9tFCbgvpuxFqf7TUNhmPZnh73RA1nKJnsRj8A3SZY",
  "key24": "sdivPe79VDaSicmVRR6RSwSmnXuC2qSF95wn1k7KLEJMXdGBnXf8o7F2MFoaxtwHa7WsDHeFqKxnAF6JGaNVu3t",
  "key25": "H5xUMFBj7jexZYVM3c4qkP8cmgQAUM3Bcx9E6Z5gpgzubPP9fcuZbPK1f4P5oGhPV9d7uyQXnXYTMHmbJm4vCSK",
  "key26": "2BZL59cxonVrmHqXhB3A7PHfi8rJ4sJkkBE54oGPHTwnpLHAFKPbwzC6cEcwekEoCCxq1EXo7d8G1XVBQxYxoEtD",
  "key27": "2xzZLwqK93KA3Vd3MPtcmgXSakvP87mBm8vxmupf11HpoATSwxEGAewFcJS98GxgPQ1hicXmRtcuc3N5aVB1nyKc",
  "key28": "DC15ZB3KVBfh9WGAgZJheQNno4wAN94Wo3VnTP4hFw3Zkk8CdUkEpdHNA7agu4B6qSBCcHnPVPdnWic47wqd6wb",
  "key29": "2RZkAZ8fBySnwMbQCNTm7UETsLQdfzundd4Z9C6TvJowWp4GnWcoRmkzBsqDw9BzXYsLMr6rgkdMDXUSrjVqLQav",
  "key30": "3jug9wutwyzsJJiKNvKEhSZcnHvGC9gag2m5msMgNq7tbjGQvQ5VoRae9MvGCVVHQZ2DqnRSc6cdvVhPpU4aT6nv",
  "key31": "26NfBuxKtpeFPHwhYcVLqDHAheNUtc5XyKdcZ6tCoHxKHrA3e6mu3i18eTApmNnvCaQRx6RqqcYMnDifyVWZrShT",
  "key32": "47A4ak8YLtjYsd35dTBp1P7aqPNKbvw3mkNjVZGAmtPzv6NDL4W5tu7DTGHvgn5F35HphibSahjCz6XbmLy6hvTY",
  "key33": "32bwFPKrPe8RZFjtAHzAt9LmyyzrttLYP45jpfWgReoHc8Y1EknyB6iBPfuhXHYVBL3mAwSvRWRyryXv317uUwYg",
  "key34": "35pnmxYx38YAec8vjPhw7LXbPNp95gtxPsrhvJSQGSEzcHYJYC8H1ddR6tw6LJxVgb41hnPaAgdMzzcZSaCrV1DR",
  "key35": "2j2fUGkJP2GpnED2iC72XUpiuJXjHKPamVVJ8RNuh88YiVjhAnDiJHr28cMCrsY3zDyBSa8KMc5FaCJ8dcx2w4t7",
  "key36": "5u7SiJYDoL5xsvjinf9Nzn3ooZhqkT1xEeevByrWV2EeNgaqrtZZ6A6atMVXDyDSNQScK9VAiMBJRQh2foXdbLTg"
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
