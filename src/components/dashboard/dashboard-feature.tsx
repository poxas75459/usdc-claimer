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
    "62L6rXV14Woo4LjGjdDSty6rxTJB5DLopBitAjTbyorVy7jdQQjhxh6Q2JjTcbyZ4KNmf6Yy7xB5ayDGdsYD7vYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VmBzpzn54aLQszyPmepNCsoQ9NNjSF33ux9Vcig7Wv2eg8974ZpQf9ZxPHqNcDKDedXg5EZUvZFBqaZJ9okhfY5",
  "key1": "2wmW6V3czCEB77eAYboKPFVFSzVBVby562ChYCmvs9396MaGnvsw9QEfJqPrnziN8A1svsLE1QcDZwRXjTdB6srQ",
  "key2": "5xwVyvo46EGt9paQTddmSbcfZBt7ZTBNZ2SZasHpoKz4z1EbCsfZjn37sBMfC9FmkBKAVddXHyTa8YKELd7W3bxk",
  "key3": "UqVSntazW9BhExfdVH4SyHCxtEW7Pvcf3zq7CQ1hpeex3whyEFSdrWxoZ4mzco2JGzDjQsc7WfTc1npuaD8d2AA",
  "key4": "2dP3ETXixmXTnsmxVSk6gqLGLmNN4a2CyK6VWe5BtnW3uKTr6pEbRsSB93UoAJDwktZbNzf6ShqP2zpzXEbzmp4a",
  "key5": "xXVR1iLaAAFmgYzrHbStyhuqGCME4aEdVKhf5KonWsqPFxBrB7AY6i3MTw9MgCjn8A9c41dgLedpyv4wPaVCSwu",
  "key6": "7Q5af7o727r2wLHL4QkGTBgAC7AiXQ1EUb3HDW4k2MniycZR64sXbxYdj4pQRQBjECndghzX56mej92Mf8NzoJS",
  "key7": "3EbXP5CGPJdDCicqhBb9FmwJoBGLBMFhi6cu94E8VDs5PHroWDMbULxtUpD65uhntC65aNuBWraDfs1ajRNfsUAM",
  "key8": "25sV1CWKFZwFGx6enCY64vdDSUQkUiANjnodHfvgUz9LCZjqTFSKGZv7Sn7tzbRSrHguFvpNpzA5yr3nyJFAFe6r",
  "key9": "2TUWHCXyf47sqqrkkF1FnQxepnbLWoCrv99fstxqQfxLa2aeN4YNPcG6QrAGVcJmVYJGkY4GpoYp4sGjuvDemvFx",
  "key10": "4qRQJQmq2g2SAUSzgZUP7Zpv21kLYZ86BKCvbCNfp6ajsuk5RBPn1HKVi5YWLQdkeX836F1hjdi59giYn32tdaEA",
  "key11": "49T1Q8UFCgjwfFzApAWyPUd3xtupStDdr6qA7pkwtr7SW3Gr4zGykCEWSk5vQfgLkTJ3tE1Q5SeR9u6RaoQh5p9q",
  "key12": "3ht1bFh89MYXX6wYQGLvQ81XKeQ1Q9g3AVicCvz6zyGzLSNLtxYMf9Ao57hwwBHE9rbvJZwTmrVVaoEsLinPqstz",
  "key13": "5NhycuBkLG6xDnPMPz1spbbtriTuGpmsaNUnJDSmBHVh6MBG7uFdsadiE7rXnLrVsqjKDnCNYTHUEae8KYcPqtos",
  "key14": "4CjKHzj6uhjJPsRR3iP4iqBzYSS7Rsd8irbijJFWeKFR21GaczMQPtjAdqSGqtJKEcLGf9uAdiVWA6CW2fH58EAN",
  "key15": "2HRghJgqJkLQCeTHHnnv9dJovXhkmmUBSRubr7Trho4eQEbXjxpV1FyrWAYxybrmuz6BoVYtuYFEh5aJTJ7XAeHa",
  "key16": "48rwCQh4kZ2ddedZuSJJfdRcP34PF8Hufx5ZaEpwqiGFLeZUbEp4eZRKvbEnQgHr7fDhFePn83yN5zcP22B3eip1",
  "key17": "2BBUKpnVQBUJY2ds8MWCAkZky5RKvCBLnmsWA22b4ey9HUUqZZ5w11TTK2XctdW9FFVGUxzrofeLes6HdRYqvr3F",
  "key18": "9J84rSvv73b7NDbAismcTdj63UoZXc3wb4kL8TYwijhmrCwkhc5GxMkf9C2yydp53Ew1izmGyxYEqkimDXcmMyL",
  "key19": "3r29BGV8Zq4M5cPtHcLuunwJDN8QP7bmL1QDrNqbJWiq8NhDodbGDAom73vexGW7iyJvrP4739GGEhm9nogGVu8B",
  "key20": "35RsUxsRwAktr6YEAGZLAqfF5sQmjXWA7Fo88tgmDH8NmA4UrPj8nrs7YNEFS8DFAnwJcXk4C746xToRyVEe3wmR",
  "key21": "4RN1Tz9fbs6bEFLcpyakicbcqscXd6YwotcvGU4nRtR8W2z1ifQnwdK3hv7mpEr352CRaFZzuaQM2g4zDyb1mFLR",
  "key22": "4RthBKFrUVnoBVRn3VaAd5bjcqcxTwh2XukWfRSwW3vRfoqb1dxSPHNAbDfT6nfboJDkjyycoA7XuZPL3VgTJcDK",
  "key23": "3rneJhPqnA3DTs4jtcoQwTRpJbEkkb4WL8UJeNbSzgptnYQNyaXGtJXqVWmJ3dPkSPV4LX9CaEaNbxZqPe6gDcN5",
  "key24": "3RxP4RjzYnRrzzVSFWPNbL99rQXaTuvh2TsdKo2t3yyKWXuSJN97wDUPt2UCdqDcc5iz4Vr5jVyJUQFkC13UokV7",
  "key25": "5GCXMVAVvmSsCyZXjfZFb4qcQkJGby7ENCFKf9fPiNN7SJkVnGuP56CTTCvjmzq7ELoEiLudRT4NxoLm5C9av6H9",
  "key26": "3sBEf3Ju9b8zppk6yZALRwe4KYmSx1SUGNEzfiNe5oqLqQCM65qmW1Gh4h7ydcQwjsL3kBSB5XWdBSv5K9JjGa6N",
  "key27": "57Dq1hD9jewQi9JsnZyppY3pxJG6SsPRWWaXKgEHFdjHQvAw6YMXa8TzHhKmSztnwZJyEzkmrrUCvpGPHaJtLGx6",
  "key28": "5ziYVQuduC19WG7HgfZMFCA8dk267HD1p3WpHV21dE8AQBkPTgDXMhs7P4YsZ8WfcFJmCdy7Sc9MzNxCzRmiWyC4",
  "key29": "2KiwsGSz8wxthtyBWiSPTzWo4vjgnhcZa174jbDEBmh7wYXrfhTzVH3BTZyf1zmyqaC3CuxerLruRxV84mFAVura",
  "key30": "4aeytZ45ApCxkP87PwwuxbYJRfXhw2CZbeUBhEJE4QKJr75e18ZFrmcDzxCpYaKZp9WU3LyiJixycQdkgApExdxk",
  "key31": "3f4aEH7bqpptdmoqUKg5VzjWLhU8KnyM1XNJZR1JCAR6NPdgiKyvATe3eej9wUbSvVws5TGAH5GztYQiJJgm2k33",
  "key32": "3MsaFDULvBWrMmHjonGGrkBmPsENoLWE2Ndx2zutnHA4C3E3o5B4JPJap2dtEZP2sLEiNw5i4FLaDcdxg2KbxpyH",
  "key33": "3HZSaFk8VA8edevSwn5j6TsoU2F4boEMu6pob2k8DvUDR4wHDBBvakescpcfDT5jJoPYU5js6X2rakk2zxKxJg6s",
  "key34": "4kCu15EeLhtQad7Aiu3yovNFir8ou7rgBaLfu5GoZ3JaVvfahyxF74VfqYUa2VX1rGtTTT4SkNk3kAFDEGnseuo5",
  "key35": "4mhreqqc3CAYirof4idddTPs8oiUtuUjTvMkwVnH5xQ8eTbgiVnCx9E1ERRpPGvg6pLW8ZY1U3vniiuWi2fWC2Lz",
  "key36": "2UUJWTvL1PDqSfdAwxMDPrrD6VrsRL8fGkUkvjs8aAN7Ka3uneupGEUaA67mMxxf81axBb928wL996WU9AaoSHWZ",
  "key37": "4MnZRtAXM8zindS5bJgfsxBN4TKS8DY8MtUbktetpxbG2EbtPseeu1jGMUAQ6Lpgewa52yvPWUxB4o6Cpcf1regu",
  "key38": "7MeXgNZVojb6MU7fNhpV6QdAgGaHVx6AGN2wxgZvsP6cWZpSn2GvQ9HhwQJNNnezNt3oXQMFYuBy6LcqZnhjoZD",
  "key39": "5f2jDAHo71yrSLutjtdDEw1FdUYZjoXZLJMmJRnMaRs8evBEfNY1Fe9hbf6ag5eR45KqTwQBpNdYiAAyBhdigg8A",
  "key40": "EX9bACHEw5ubhgEd7yjJ6mSD3KLg2aBmsaowTUsPxYFEes79Xut4ycdP3VDcaMzpZoL7Rfc3zJfwd4mkuwFt2WD",
  "key41": "HK7CguRueaFfEdqxGLZYs9E7qmSw7DLHmZJSUSgJTmLjRVUVpCA4sHNVxNSghWskmyyGFEhHPJHchJD15KX26KA",
  "key42": "66SDSaZjoT9D1YZL2kueKLVpWVJ7a6Pa2uAa8wJQW4vCTsd7RXitXN8ArrFTmCogzHpZLyeHZqxAqt2VzVX293Qw",
  "key43": "3185tWbVHfvhsExBABVNZW5yqpfk8w9KXA7g64YWpThJACmwG7CkxhXikLg6cSeikYtttR2eREQQ4cfqdtrn8AB3",
  "key44": "4QF1a8YfMnVHMvEjRzKujif5p5pkx7mQHePAAt3ShN8gn7QctRRwMcLU1cVwwKqp5vjHjfWTfCSx9QYaKELm3V79"
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
