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
    "5QvfdEomCp88gMdnxQcStgeSKrtQQRCinx9mEcZ8sZCWMZUrjzVMt4iQR3LNtYonvxyKtzUieiG67BvBZhxoPPh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mKayZ64jnxBdEez8kDHBtRC3Vu39svnFfgTkd8GEzVSG6KjcXuJJi3BKoAza54NwHXF94nTXRJrJgqk4g3sWG1x",
  "key1": "4tXjiJSm5K83pKn9CG55hjxGFoMk7CqAPFGbFpdJSaVqv8i191hSY1LbGh1nXNSGzDdbT8HWvi5SZhbhFopum3Db",
  "key2": "GWTT36MQcLhBfbjqbGhcirKTBY2tUS5XwdLwQyFvi44UPnAZah3QPVD35sxJV9Z6q6eP8Xh43C65gpyRzKRi9Zj",
  "key3": "5bm3qhpkh33cB7ZgoD8D1g1oWoAEeUPcCJuaMVpPdUQS6SRLeUt8oguryuZhZ6hMD3gVoQmp1gUaeiuFme6a26G",
  "key4": "67XefM9MkK2M2p1borobHUhjiHTVrMRcNkRdYQvupykPyWwWchDdxWGiBGTfQQiTwX7LUVmACFmg32WAfCbXLCZG",
  "key5": "5dRYEPTM7cngWH63CpTVrv5P8YaYocUjTspp1Z7WvpApmWFLCNprrH65tXPwFNALUL9aa5Ck7esNCGGWhKv6Aqs6",
  "key6": "3oniozQJjZxabh3pjGaGE2FmTNdRcurXFYXzaVLkZuds48kB6MgyjcHFnGzMc6UxCcgJBQAUfQtQ7c6nravQj9K5",
  "key7": "5Z6wZDPeHehFKC3fj1YBrcWQZnAtxzeqFfaqHRXRnyrrMwqanEWFE5MjrvKLkRdt1HNoWHRSfPkc5uet3MMH9U2H",
  "key8": "3wz37Btq71MMurjUFBqqM452YRhcR4nF1KyQjwZyYAKu5g5NRbSYfvYUed5rywjgqFkxUgNLC7rwqWpGuF4PKpdX",
  "key9": "2J6UCaQ99mJkPJkrnWj5BEV4ixRpS9MqF9KCnQ2jNNvZH6jiAWUFxFNnYbY4icJbu9av22MsPmWzh17m5a15GUVS",
  "key10": "2heML1abPrbs8MKVtmWv3mwZAg7HrSCoHtJFq8nN8eDuvzru9rN2ncmWvS7WuCTkQewx9FsQS59DohafoGnrRTT9",
  "key11": "4SxJSUmjWfs5wYpKv4hrEXQXzBuWU2jVWB5VzUov5EmQTWwvTSxzykSzo4NPrfG1v52VQhBYLjmZ3k9LVS99hcwk",
  "key12": "27gMNU3PSwCRfuWaboFHVCwaPJUD7KxrNW6JtudNxoBDuTyJdvXu9rwxKy6jUKFSzVAbKFNvqE7Na75oeksPHKng",
  "key13": "5qXzGz5Uxxj7bXoEquFDCTzgXwrWnjB25PQuys1Z7WquKa3td6dJLsn5XFJJX6RaonK8dfFbXuAZVhWcmtU6vUYf",
  "key14": "2eD4HuAbAnpgyfPEaXcgjjMv7uzrXKrmXGqawJ83JXxVCoPE72Rm5je9kzXuacY55vEbc6CY2drxFVnnJNhiv3R6",
  "key15": "3oMLKErqCrpxTwfjRuEWyvBuTvmbANj6jFNogB5ubCqicS9AhpATvkobvXPFPnieqig6cBvKmG3VMviuRK2NUHg2",
  "key16": "2CpkFspqLwpSJeq5JsxAybZujm7MstXUMUqxAeTnPRnSgYtNLwVB7e8ec3HrS2VBMxjqWS19mFfSHTuqhJtytGV9",
  "key17": "3wxpn2e3W5xsj7vMmuSA8rZ74jpksQjkQFTMtK2ufNow9KdaZ2JH83k3PsD3RR54Fq8y4BLVCArnEHzQ6h8BL2NR",
  "key18": "2tEhRgKaxQd75hPE9wy4k1xogf7Eqw3jX1BezagCwD717AC14VAaCkFYu4Z1WdNZNa2J1U4tcU2iGM8ndgv4iekQ",
  "key19": "3nzvuxELmcyex4ufz9pL1GcaHY2G8A7kFDD5DdsVjzXSxg7vPbDinxq5VTQnmKYZCVWbbGZiCBuvrekRJKshfRw7",
  "key20": "5BN2rJ4KEFb7EQ6ooeuGfRKsSPm89TyzeQBknDNHvC85QmAQoTteRNJc4MJcP6gzHYuBjXgwvon39tu7fmKoxZEB",
  "key21": "3Zjq7T1Qavy4oVzKGLcpF17Qin9mc16RyDRSUQAs6S8hZjJsafiS6Y8ZcKCVonKEX21kUNCsGTo1KicUxk831aWR",
  "key22": "gKWPDKo1DFp57FL9AsbnPdwE2JSRDwWgnNpSJFFwAQkLB4WPUgDDvGgR2a1sUcLavexwt5keGx519m5ju99Uy7z",
  "key23": "3myVdCtRXcMwUdLK3qQg3bKU2z66a6twdCXLaWJWphe4YSysW16wt4cFjphrWWbsCB7CcoCQ9ymYfK3NaFy149iH",
  "key24": "2Hx9jw7VcC6UyrmVrTTqRn1Y5h6b2d861BGgYnJurjbQa6ryrGsourdyZWogoHb335PJSBrX57EDcAua9hq5a62o",
  "key25": "2QbAYyM6s6xS33WFkxVWwKvEBK8UW7N2EZDZprVf28rf4vryAxHVaNoSsDqsMBJ9abJAWeVVDQP5CgjkyHrUnSGj",
  "key26": "2YFG5LZs1mcoaCztArJML69pKZjyRFLcSTaccMWZ9QRtFWz3QVwgtmhinSmeMDQ99N5PHRAkRSnAiY7wvSsHWYQc",
  "key27": "5VyyUS6ZzSnRdWCF1wPVVrtug5WCQSJsQRhuP8LznN8CBy7xgxVPSGJpGZs4rffdj2asrKv6fSFxVZjUSTw1Rv1j",
  "key28": "RQk4jYMeVRDncvYYxCyEiVmDGpJDb3oj46Vc5mNwWYTwF9vmGWH8aUVU8NdDQvj3wvfPc3FUoVhd1PeYXpi6mY7",
  "key29": "2W8xEZmdQeet4bNrZ2oq6xMSYVv9eKoW19x2jJnF1knRuJRpVeLxxQJoEV9vG8xS4h1bmsaTLxhkDsDJ6bEBZSAb",
  "key30": "GQnr4bSVUdL2RFqkhTW5mE2GEVS2CeRHb7Ym6tF2AfoHitDFHTRJfdB2R8w9RnXk3mAEf3Jjri9pTpaAWGZUXcd",
  "key31": "5TqwXATFAQtCtWu54PPxjhPtyKCyGQjRrgm1ZJhgec6PuiTV54pH5EehioEqp5EiWkgvYGSP47bTZpNLZXswNoXk",
  "key32": "kGoSvKfj2pMgDUJUXKcgeF9UwovyrPdce8KPe5FS8zutLb3cgU1t5c5PgDtuSvvGLynTTKjt48qNkcagGEqNSX9",
  "key33": "21pBqobSST2ZFwdAWNXgwNDti5YoVnyJECPjPQgfEfrY2rfgR6KDBLojyMjZiBdjoLxGyTQvGUzpLoHKNebNGtVe",
  "key34": "4eitW8o5C61r6XemLtTYierY1r1nDdrYRuDWpsyhT1QTavnuSn7nz5ByppkFZKZF4JLcAZaMZ9nd2u7dGQ6y76js",
  "key35": "28t8aBo5EWaxAvcoAvdbvyDB1xBL4Qa4GA8yueFVC9ahLmowJHaNgjsE5Kj3asVo3fWXPZXmthoT9jdND4NYjQ5P",
  "key36": "qDTcMGonkS3X3nyJPRYXc7HrLaqEAfraSftmSNE4n5rN18GnM6qR5rtAMa2BumZmifRL7aYTRmQ5nDMCKcXXZsQ",
  "key37": "2zvvzhHUjD984JyA3qtXFbVs26abJqQHqJVU2XyLJentkqsbBcJ3dgUP3pCYotTDheveBpBv1i42pyoDBdHzCCWW",
  "key38": "582fy3b4JXKQoGJqozy4zPHtw3YH5NsTMoa2KFFeycsp5ZfVbrK9ziVj3wk4SiK5Fkt8mRqgMhTogZiZZojZG6Y7",
  "key39": "3XRQTbqV4WF13ZLVg2FDWSA7sWtSnJviD1G8CaNgdyFv7joT6hdJSU6ZrkjivArvLb4vEk4vVNi3nkuciGDQW9Q1",
  "key40": "4YhtJrMjfaSBQc7Hq2xSuqYs2dugnVo5xF7bw5rdDxYAioSNj1nSRGfXuf16f2deFXaLG7GAcictej4dFEmyzNAB",
  "key41": "2ygaZqyjVm7NYJW6XmUA5rcV26qiKacb5hCco5XNK7xJMKkzQQpTsts23DYrRRzQ5sj3W6iDwuF9ZQvceioqigP2",
  "key42": "BNBm9pAWjxYL7uLt8uNUmoB4fpcMAebQ5pmA9gt2oFXRn1Kan3BiTVsw8cdVKRM6A8otWB84QPg5ZVrg3FLjKaP",
  "key43": "5mEYqR2zFoRD2yUbxRnNoKuafK3QY5iNBVyEjnhqnj7TLSsAnFhazP5MASe4pZrAKDe4QYcPk9HQWgEhDJqcZVS5",
  "key44": "UXJibDXGVoA1qUrz79z2bZdqU8ovhWhpag56HciYg9jkCWb3WnD87qFtj8txp7enBQJMt8HkTCa5cV17eNc3dY4",
  "key45": "33hEVkzGT9UZjej9bTSHsW4KgX6fuoAQUDsDMxZfsJsNRLR7UrNteqqNneTYewQbaGfi5EZpAFtX8aZhcQ2cyGMT",
  "key46": "4pvr7DktKtdUo8tgb4iiE9dMpfwG7LfYPCKhDkyRvoNjwyjDpKnTL5tAjoBRu8rRRuYHPPQiCCWd4te9ywcvDY6r"
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
