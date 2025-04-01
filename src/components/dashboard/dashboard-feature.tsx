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
    "2oiHiRZntjL4rdu7qQEbUVkjAKAvoJh2efU5eUXcwBt3BMT3Y9Xzf9vywojp3GNTAVNxc6ivAd6xipxWvh3m7bFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v7xLWb57DGT7dqWmk1G4pVRxsNtFbuEig3S4fZ7ZsizygSX82dtdLhASfszoUMD3q15etCppoTX1Sc3PhP2XXZ1",
  "key1": "5Vz4gAsrCyoyMiL8Aobqr4ffATmcMbaWhiTQU8uAQXQ9Er7dAbCM2HdzUYktngTb8XoTesMZ26VaTGLgooTbwbYP",
  "key2": "4hnTHVNk3yGJyRQCQtqYDBMsiur1jBbDaVNYpagRh8CKzZUsjvrtTm5CM7xxBsnDRjMM3DBHApxE9V72knVv6JWk",
  "key3": "3t8DEKznCCcYiVjBWQCPbo3g6ZbFuET7FGZ358j32ZLXmXeEdazGxYXcqZgYD1kBHFMS8tCzgmtEpFKCifpFD9Lv",
  "key4": "3zBnZwGfw96q38zwJ9JPaZuG37gYTKxn9gALGogWJ4Q52LVgXGipfjWqJwr3BS4en6oukujxGivrDNCHdMmjJB7R",
  "key5": "5voaFvqXyx3iFS8JHEhu7ptSoFeR42gBKLKQ1r3zB1XnUtfcE5wXfvMx48W5Eoa5crSbPNe1qyEv1qcoCbf8goUx",
  "key6": "2b5cS3w6qQmaZ2k5BJQ9xvQv8HJzRDh9PsGUPs8dKHD4vAzRAnhVtZmPtUi4R6trYnpP3uUkkf2EKDqTGQ8vtQWu",
  "key7": "byuN1vWBj4SXDpriaWWAJpz46hWuF4b7yTLe5kCaqfbF94XEgjgQZieFXpHpoyxEJxVq6aABpd84Gp2GJbijTnQ",
  "key8": "Cb6fwmEeRB4PjkTenp9D5kvXhFTSueiDKZxVtJUjdhus3aX8npZkbe4VtWqDPKWBwAX1SjL8ygdaQTVkUtvxDAb",
  "key9": "5s4uC4X9Ufxq4kmxAiyFxcVSszArBPqafFsNtGTMejXA8WAgQbzHXbXeyJ6YysXuJ5VAdGbTLStLBzWFssG8XuR1",
  "key10": "JHJ978xDmrVkMSXMLrJjgp9Qry9TDvyHHirokqKjZsFPvgpGCBhDaBgKqg6a5EMZRvwBbjdHt3TQaHdKL4xGTYH",
  "key11": "3Canoq5iuMsc8Ew4g43YV49ydt8G8HB8LKMm6zVdLvg1QoQuGrPog14PW543QyMKhNHm17YxCjLsCBfXiLmbmEkV",
  "key12": "1n3xbKHFjuEeXkn25V46J5pkewQYDMVidodzefVsFrUSHun1nbKjwmhmwppGdvHU6PMQdB6XQcU4jsYSsgJsUdG",
  "key13": "3Xp9DjKmFSjtjG1rPhRnPpR1JCRcFz7gPp4uMHL4wYWzxnpArKxDeYApm3GmVtKADRmmk7URQHrG6qoib9epSVPc",
  "key14": "4xozVqhu13Tc2iLnnbHvXcyFtxA6hzgL3psXqeBwYqGBjbpGTsc3R5Ck9yrAwNdUG3sYziFTb1biCxE3ieVrxZmV",
  "key15": "2nQvW7jd28DJEpRzt29n6pF6TDLrsme2RfVy7un33Z1Kf8phMqUKnxpwosU9aPnBmsDni35oYSwmxerqzGzzZz3i",
  "key16": "2KfWkJrBsnembnPY3iw5PUH4ksgP1QzYqHcNtrT7yNLrXs5R38Mnf3F8r2HYrytjbCAHWSTq2eYzkETpXu8wxzfL",
  "key17": "5AadHVh4RmBRWe7Fhbto4xcf8NZzesuMYjaL8bkNrSorUmRDqVAPMpJ9SVcD2avwtZ7dgSYNz3f19ihisMS8a2bc",
  "key18": "2Bc7A3GijYNjSzQhC1wAF2VihJxCmSGTzssgvx7L8G9Mt7AsjyeJmNZFiLaCvyf4ji873D1FUU4WeCKSunByKasM",
  "key19": "2GxpdXgZikQspPpFVDauo2ZJjnP4oup1GA68JDZ94XAuoPhHVqBpnGUnwbhRkmaN6GmYkrAQ2G12sLSvMJPbGytd",
  "key20": "35RaJPceT2FrBvcj8ZVT1Xvpz126s7ECaNU1rh2CPJ6QRd14Kf9jP5WVFbkCxNDmHXNFpQZCvq9ffoA3XrgCN58T",
  "key21": "3xZ1pYdymxQG6X29K7M4jYG4oZ6KCmxJtmyYsG34QRjKK4AK7cP3nohpJDKH1UB9sChMKq3YCh4k3ZBHj4vHpuRa",
  "key22": "5DqMuLbbn7Qra2c2sQWw8dqNrqCRuziM8mEvVmBVBzBbZPbJ1V9THb7CAhGrenbC2nz79Wi8mSMr9i3VehEnnxZf",
  "key23": "3TEFdZejx6KwDDs8DG89EixB5zcvmiCVZzprbw8VWUPrVWmFVbGj3EYGWPNYFpGH3D7VXGut7fTjX6P5os9wXgf5",
  "key24": "5CUuZN8MM4JSyKQzKpU5H47cRkAHJu6HjKJbDERDKVh4Cg451Znq4HLJYgQER3Hvzvnp7XjiRW5W9C3VZtV3hYd4",
  "key25": "uUVFk7YTzdRaPNP3VUR2qmM1WnYKcWDvEXbNTnivspgYMWDRYFfEbT9Zha6zSceMcTt1JPg4QKnT7XmJcfa6jZA",
  "key26": "4rJ5XYWff8bEmy4kMTS6o6ALt8ZqgGWym8PuRZeAUvUgxQmSJiJd8XeYbtajUCtMWMKNJs52aKnAw7r77jYp7gjZ",
  "key27": "5qo3NAT2jcc45NvUHWHSQDa6md3GFTTZ3d3x8xtPSMbfbi17KXJv9tbkCkHcR54CviWe2xvfd9uuLWkPnSNFDdH3",
  "key28": "5BzFqdvCtgGZoh81Qzq8XWUKyaKMr5TUNnnybeupkPhRyY6P6EtWkdzdgN57m1EGZBWDqa1Azmeo3NVszomrLTNT",
  "key29": "2W3vat5rQABQqybQ74zc5rdFBCpMYKismzDQE4tkUgRmLg6xB956hybZGYgxZiFg9rv6sLg63HZHnLmy7p4Xvd9e",
  "key30": "3NGEqxu1DkTKQZi6HLKteThSNxfVrkbT9Mw83DwfjqCP3MrJUyr8xhpyQ5s4n8WMLiAMpFBGV3d4mKonqPCw8cTR",
  "key31": "26w64FUC2CM2jmgvSjwKxYJLxro3wjPovNsUnjeAJc22CRDr9sfQhox5kaj5YVhcbwAorAtuXpNfKGBPC7y35MUT",
  "key32": "2AXrXWAhhFQPbtg85vqXfh7xQMnocmBNYmGofh4RR78WczEJocsUHj9h8RdGgqejrUzVWJSMBfim2pRTznKDFxwy",
  "key33": "2G5AjiHxNtAP3aiwSEHhcF85dJTBH17RsidCwTwKdrQXr97qCjSdotnmQL9VBnPmzCo3HBVwGCgg9J529eXREhSC",
  "key34": "39wDtBKhyyiykg8C7if2gmh6NcsgNFeNrtsW3LTQEjFsLZZxufNYwV23s9N8LDh66aUJz1QBNKDMYHSKm2bdJP1n",
  "key35": "7zAr8hQ2yDdihz1VWwUpPB4zccn3S1KS52nVWiJ6FvtdZCrArXiSEjqwGaaz1jvySkuCDALY9vqoipgMkHWibrZ",
  "key36": "5CX6cWfuXRWeDB4W13P25bi2R6wRXjKj8ZREE8CAT8otogKX5M7CRK2JEpksa7KM2q3yttuvb5bx7YkYbgpcnn4e",
  "key37": "365j9QtfnPxQXu4BXM5XfooyMsJsDYzmjfroHoq8jmV6SWj7PdRFbvmmJup3vaErU9PcryA6sgZc1V63djuMJVgn"
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
