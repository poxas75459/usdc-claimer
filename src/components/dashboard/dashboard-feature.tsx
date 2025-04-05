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
    "iufnVdgE5oTUUHbVuC8DzAXcivHAPswJK9tRLHgnrppc1z6bZ8r3SLbfy3zNtaQ1BLLfRQQTc4RHGYSecHoSLAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QHaWvvbe6CbdeZcQ8Tgmr9WdyMvyDb9xREf79xPJdZFcGs97RMYGKLcubh5Sh2bwuvEukHTHwBEmQxayUmAfGBp",
  "key1": "58CudFXskZoWJUM5Bk3sA2zHkQo2GEjRMWP4TaJgRoQBfueHxopqtCn68CfRMbKBUuZdj4eUNfzv8KrtMP28xJsR",
  "key2": "2c1CcmrWkg3iGY4hCSVVfmS7NbzVwFDjP87JYWEne2deNME6fMJdsyPPkSEp7cqmS3RxxibW8ZuctTyesMaqGsrk",
  "key3": "33rJTXFKWGER7dTkrTHxyjM12UbSQZejxf7jcoiJuaH67crEmix5YnScG6YTyeJNQnV9YdtSBdw4KeCA616H24gv",
  "key4": "2U9g6EaJBubEPEs3i7Y1191vvPid9KFJNjWnQ8tSpAfqGEaKF6TN7CEcJDSqiN9sGQNjtR99Tj44Toa8mz69Kaa5",
  "key5": "3WrM2Gy6wkkiW3L4EtmsC9FzBvfe83TA5henCcLdtRqig9hug4trJC6xUL3bCrKdkNERanumEZoCDWAosaLqJ7uB",
  "key6": "iZFhLd78deUU9MgLZvK5xf7MK82BUggkDuhNGiXEx7mMGCmLHaMHp5ydTcDdY7UZXWS3FHRjrtaJzpbymnHHKAQ",
  "key7": "2V6aWpUQzBnpPFdQRWKyeeDSe54aDEwV7HSe4T6UgtJPPWAH8h9XrXgPofRTcqmcFuJStdmsE5gBnEtHUgcApCzp",
  "key8": "3L82CGt1q1Hj5oP8UN4gZzqdHrgcS8ZzvwuWqGVWB7HaZVsEqTauE9AWyPi88j4qH1qQ2KTkLN9ieAfcirG1dyEE",
  "key9": "5qtwNJ1puPv2KJDY8Z8waiBivgMHQELDaP3WPcnuvXUaAaD8kESvctrjNUpXEx1Ds16ZM7ZXbgHkn8URDuyRrP1U",
  "key10": "3xJDDShNxhaw1n9Cnnh5w1vWKc1LsAH9xZUp9jnzYCaTfrbT35cs3HqvgEvGyiB8FrR2HSefqt2NoBXkbtCvcVBs",
  "key11": "3SCHhLZShMKnUwnK22sg1WiAP494y2fVK2zNQzutrxarKJ1FS9oBvjLo7LdCRvTdEL69G8Vq8yM4Q4SvNUAj9kwp",
  "key12": "2h5XhFgn31K2ai4v15NHP9boTx2CCL2nBW2XCT6754LdjHz8p1AiRAoWaCyyqaRxXMgey4n9DSSGTmStE4xQESXH",
  "key13": "3f2VTtR7zALyEsh1Gb9U9oezzqPU3EWjNYLXXZJaPNjTmkNsAPPU1sNsr7Y3kqxhEFxnYfoU6hUitL5e33wdwnnA",
  "key14": "5PRpYRuanEd46vPQ7rNgfVxk5QW4JbDhnWs4hDQ536DmSc6ZVnkPz5Fbp2gymwzYKT2dKEPdPyTisnMMRrfTd6xi",
  "key15": "58V9w82nbFWGatxqVa8ZVgaXZJNjE2uqJe2o3qYuz4EJZp9zcqdBYqcWTZfPB4Mxat4ziouPK3SzHahiEvBQxvNS",
  "key16": "2sMksXTcyd3BNgZkZEcx4weMGnze5fh9rjeuUDeSqdQhChPkFfrpomhx71C3hHd3eHf2exXYkbH6WtfqJGr1u9CR",
  "key17": "443UG4n53GBhxBMSZYff68q9WqqEhQWckuGdSxFemjWEUTVAqwV1CVcsehkCSYj7Y9MFYRTgeMiFc1ueQhjVV84c",
  "key18": "5bzSpF8Ndf7JxJjChtpBKqTsHWMe42rPBTZMW5mzfgSucstyuxZF3UiX61mjfX5z8KCUq4Yyk2Esv2nBW8WiB9vG",
  "key19": "2oWw4vz2V34oTWBSCPSPUBm6WbhAYWyS5A2SsMuWAKsjJ7HJf713EPZbW7FCqquq6KUHs4qhhttbdNE9HV3QFYAv",
  "key20": "3LNqU5NBh2pRj82Ub2CBsNcnjdNjqwAQVwR2xiSxFnqzNGS2hpeh1an1PiNitymVnMFzSDdEyU5W1J761eEmvLBH",
  "key21": "dU5YCKJ9VtYiHpuECEU83ESJZPN7PnvE1VAn3znz2Qp6ZZL2fmBUsrUa521YpJNPqwDKuEUVEhj281ntAUqEkcC",
  "key22": "coXKcQza9jtGF1exYo3Yab63Uu64MPV44eqkAjyWad9KBuLTwwaNt8zqdpm1qgZQmLxYwLBaYyxnVkYpSgWPXVN",
  "key23": "41MSzcW8HsjAVeRzUXFra2THZc9Ky4C9ALLRuCFhLogFZWpBMcxcr2Fx7VGBYHgn2MV9QaMcvnEnfRJBD2qDrPYL",
  "key24": "4y4YXdjFaXwAsRr624Vug1M8h9bickNmJjxznGM4djHvKk5zbUNE65aNboevduHt3AgJeEpq3jH9rDbJSbHUFozB",
  "key25": "4C41TCw5JDMZFvf6HGQEr4xz3dXAMrnKCJB2teSgAv2d96ehxx54xSLsjECXLNsK8mNUjc7Pn3eqWn7ea4oun3i6",
  "key26": "2W3KD1mZr5oRc5dyE3VdhySAMbFzMFc1iUDBqjmZcpKSRxx778eJXzc2Rk2srdmD2x8HWPJtXfhyPkPvwTfq6TQy",
  "key27": "3hTPGZyDfr6jAkBVLhEy9y4fLGDAVjf2TWoW5VMxdoFq2v21RYpqkVApEA44gQoU2r2QxE5x7XP3UPnAUtfjxGr4",
  "key28": "5UKKHca6j1S5aubDZXK4Lr4tMYdo8RpYAqetEXQfqUHFZyrsvtDxEE5hL3fUxHn4FGGEiXyprtJj4KZf2WQ9wjGG",
  "key29": "3TXGFVAyvMjUAdu27mFaYLCo8bktCH1EZTKbhcMxbYMqMvsupmyGqNLnFHkX1mPXHg8r5frvr5HSitAtQB7YVDYj",
  "key30": "3ivYH5ecZHqLtwLzatpCskJ2r18xDrSKSyenZiXePK9QNfa9utyhCJ9ESpsP8kjRFsUWvneDEkmcjp1dP5BcWrrS",
  "key31": "i5X5yU1Txg5U1jpTB7v6hTYKVDnS1j9r4mHC9tB755GxLKnn7UePr7khvogQfyhwvMJBepRtBUedKsJLVq3TA3d",
  "key32": "38YeYocQLWNggg5BbVJ2Jm94vVv1xPkSjtk6k6W4FthruCnSXxcAC2rJSxFXtVo3hJrTFwvSm57LWeVeeTbkDxYU",
  "key33": "3822m2NdAsf4GBTSghxmzrBLdDsEqdiosc9mWEUajbXnr9PZtpMHNiwWkot4RABQsajM7eVGwRLoi8kGwnAgn38w",
  "key34": "GWKkWiZFk9GauxPKTEUBv5wsAQACHQ5KEapVXjX9saHUnciBy1aRuFSCGYVRJ27g5eGmrftaGY2jn4iYSXneaYW",
  "key35": "Yd2PjQ1m5EziT1giXhHzJAxhX2Hqr2oxFXGEQC5SLwGn4LekMSqEQVVagnVUmnu2DnM2SsgveDWk4CRDEqUtVpN",
  "key36": "HR3yJaYuW4XNs2XxjdjdpSmwkegZbRAknMWh7GDP2HZcFeHdpbEChEXNDWAcw11cR78Jrtb5Sz89t3SS6y3Bntd",
  "key37": "2E65sCmnJAtyzWnuF9NcQmFbwdheaueKe16hS9T6EeMASkekF4xwuk57Y7jY7qEfFtG49WAeQMmYiEHG7M2cjRZW",
  "key38": "28Y7Rk2LWiK1b7jtZmKiiZnSiNi2kX2H2bNJ4fLLyVbMRAxGB4ZSpP9C3MmiqQUX7VXhEbDXvYrXLNEQ7PYGsapL",
  "key39": "uEeji8kYp8qpfqjpvGoQjwZyoGBY7hG9NspeDxYpT6FyqWUU9UYmDLA6JrLcDx9mNQM4Zr8vH3CEJjuBWo1i3kG",
  "key40": "3bQA2JQFMrcgY8DZyBKCeEY9z5Et1u3vPv2ifBHRdseJ8Rbk5WZRg3AWpXDG5aHyrVjjMwK1uqipyrBrd9uDfwak"
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
