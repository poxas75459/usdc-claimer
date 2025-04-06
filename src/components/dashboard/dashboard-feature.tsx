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
    "4GRyqxXwjVjBeZfJu5i4nUnah8BQKJGRNFs4wCc9hyPqzE7oRSPxFgXVxyncQybhU2vZZKATgVz8SF8CiCpk1b1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Mx9BkWjXeM4CVsLZXXKvZKVKnoDfKBxpDESEPiSDjEbxryv8Uh8YQZhF7sCZx5PYPX5C9kxLyuHePxgJ3RPBP5",
  "key1": "2gzHsqNS84UqFfEmsQBcfkRRWW21DanMRt6BBn4w4yWmRBc2PTzkmSqDvKfjPRuqkan7UZRqFQZntA6HsfGNbSvH",
  "key2": "5DHRj8xauag88ux6Cx8aCnNf9M9VfSbCFw9vpAjVfhBeB1puQAJMmMv2D11bj15nV7ChyMGNiZXTtb7TU7HDMAe4",
  "key3": "4fEf8Ath9H7BBEQHor7dF4HiBfhQDstP2RRM2QYZf1pwSTLX79DKCxs1mK6szhzfD7rsswzDsiE9dPVSuHEVRzTC",
  "key4": "4yigdPbPEqerbUYJB4Z1FwDJkzmTcqnBTaP7PkM8LGQheShwaKSE1kQMXfVn9q2MNMXVSX51ecr1UD78vMAQUmVb",
  "key5": "66PJwGHx6YyXegVxcAJXqahPQhYQnwkzvYHY3duyiFSypF8Z8TvKAfwsiRNciZVZGiF8TiQDX6C8xUGAcPMbiaB6",
  "key6": "4k457mWn1LkRzsGpTZPWNsoQL3abfGPDhyyif3hARYSTYGdsiCZUz5Rz3YpRRdk4abdN4qvathmrs6i2SmeZAFpS",
  "key7": "36Hw115Cq97Gj3mEf51Z9s5fPyzbHPGBoEwNrJLahgDesJdd1JcQNgSFVRrfLWfSVtHgd9pStcM2dEYTVZc2nhzK",
  "key8": "4WG9knn3FBshRzjr1KGD9Dn5EoBi1y3M6JfHinj12iVrszxqfy1hB5qkPnvcsczANJAyH6FnsfJTYoJV4L5UaLaG",
  "key9": "BH41jGoeiVvEtjPgtWgrMWz7WiKQ73QqZfYUbsezHUcYY6rJz36iNSfxUPM68AHWcC6sofTsew5cAV8uubWVnxh",
  "key10": "1C2FZYVShGrTpHmCPKdpNZpnjL2k8scy2trj9GqbcAFuLmuWeV4vEspZwLe2gf8eFrJva5AozKdGPHFVBwTiYV4",
  "key11": "2m7Ynpz8L1WA7JQuSXzTQ7cGbdnjB6v6EZexJhDiLmRrkUD6Q62c9ZDBmGUJshU1fvRP8quUxNWXHRhgPpvripMK",
  "key12": "38m8irxNDwLh2pUy5WWcPn5v3WkxYzxTKP3eyFoxXmknXRo2LL26iJ1gMkZydfBBJhjCvCzvpHP1XCMtadaM5M5q",
  "key13": "4gWycGe9WdtbYttHERG6MjuAZpZT2afCZakweojP9Ech7r6HLZ8Dc9SJHAkqZHuNbhggER7s6Yh6FRXPpmPw7BKf",
  "key14": "5jfsL7F67Fo9y48CmTXqwVg6K711duhRdYaw6AoBcu8KGKD9HSXYc2thHmmheHQov7nUW68fEANgrKqymNWcXY85",
  "key15": "2HzRtmDWTffgAdeYgDYUHt2LftCMkEvYGvKimjFCYqdEABzMUs7U99uTmE53Uz49iM1Xfw4AiutPyy81oWCRZ38X",
  "key16": "3Kh2UvoPqHNYpsqejHhTxKD8HpP1DK6FLzNa9DXRQ4VJgAZjLAo5SrVpsGbaPFxSxVPEMiVY56xq8UUU2NvTQ6YM",
  "key17": "2bi9yn4irry7NAVwTdXAGZG5QBG5rhYxKni6PQPytcJJhGSYpj3MkrDxi7s3USoqTevAH8rBqYnx6aLkW9reUbTU",
  "key18": "3Mb3QQGyesqVLyjAh4XuwR4AWrn1btcArUKk5KZAVVARdRue8yADzHTpqZYNkKr4M6TofKSC3jCF8TotWkAfjHiA",
  "key19": "5RAd4yTFW6g9iJfsR5fZuEpSUuYkt7Js6427NQrEgbFA88CSVjKPPaKBH1u1LgjYZRTv88RVyiffEQnBFLfcezFm",
  "key20": "2RjDn2pAC1zbtPaZeS1AQ7YBu5SESFzPhrUDmoEsjHUQCw658VLdk2FLZ3G5LpCY8XuJcAqnZpuVJopQLnH2b67p",
  "key21": "1ZiPgtTbNAGf9oNcsW24dQqfPgsvDHrmkFL6EEuDcLGXiLbvv3VzB6LdPVVNwLwYSJgLTtWNozbNog3TVL73Etx",
  "key22": "4h8qGvWBj8mv4a7kFBZihmLsijdJyHZyTynL2mF4mZjvzVf6NheX5yXaSk7Gv91KVeoy2NirvNQX2dQMzqfpR4wS",
  "key23": "3Gdxp2VSVAiCvkd85rFxHdQrxJdgkC7Gm1eGj26PjGC7jd6AN27dNetyhataCiC69F4vGqKmjcGF24PSxkD4MCy3",
  "key24": "3svLuYVnLExGHi8qqC4F5mkw3N8Q273mt2KkYirgWnX9gTNtSSEZwkKw6JrEx6da4WDHsv5Kfrg4mZweYXteXA1Z",
  "key25": "5BA3V4XSLVDNCddNR4Eh1BcjvVggF4Sc4tnmbCnepBg18cNwbFhaYcdM2oqyYk6QBGHF5sYgJVCgCkT9nQKYGZwd",
  "key26": "3CXK7v8R5a8CLEhmBbMvviBCAi6rjCREcCaHRHxNipiYXcUjgspVADSuR1XcnTi322e9t4C4b7VGdChE2mNJYbhS",
  "key27": "5SuQiUa1xy5pUdsmMPjKryk2LfpvRtQGKvEpoad6AadkXWyNiynNgkf1RapGAjtAkf8fuX3vvPzUVArHESeJVAkc",
  "key28": "2bNEorVJriYyWr1xnBsPCGwQpB9A7yPLBsF9TcSBZ8oFhYG3ySUn4jNseyypJxAW944WpFD636pqhciqkZxJJcDj",
  "key29": "2VBoZGogTWGbTxMrGuWX6SvZ5eWSA6RRaQcCasbUcQLDePK5UTJsFC8ivmAeU9vkyKrEZHmcoJu4Hz1eJSrkX4TA",
  "key30": "2pfk1v2FE1TBU8pt3cY7VEDD4nJFvjxrt4AHiizR1CXryqARaHiu5r8gVJbbRpzhhvW7mXZertrWJm28rwSARvoJ",
  "key31": "3MPGiYVrWk2Jpx4YjmnMHXyfPdGY57qrM78pmpKJbCZuGVPiTZV3xsd92CfexUUhc9hS68fNivxzG9hzWRdqNtWE",
  "key32": "3VBzFiBFPJnkN25WRas2PDcvBmxS2rx77LxqphKBaYi6wJr8C4WWQs3YYceRoeomUvkgXRHgfrAQiU2PGZAcA466",
  "key33": "WdGZukja6sUrFpWJrstHQC3bdTLGyi6qvwvms2x497KyHBxjtGJ8ReyBTw5bsznca9xKc8ZKvdGQ9uebsdM6ro1",
  "key34": "RywsoLWxzP1GG6NFWQ6Z1caZFjJkFonYcVsESLWfTYoyPTHNJpD1rc8XjRN6KTMosh7rV9aewuDZ6cvwe86VfGS",
  "key35": "3imUVrs6g5zqTJmsRV6W85FubV67bXRLCG6sgptkqMXP7h8G9kb4YSoSnztLCQimNQnbBurRzJrL18AoyAHhHcfW",
  "key36": "5Uf3WxvDoF6ns62XQXZVoa3VEQRzJMKwha6SvWjh2neuKfMMwNxhM8Ayw1vXCXjSrqR7UFjq91Xi3YatjAFXLtpK",
  "key37": "26GkZ1cRFSskE144UM2mx1bepStpMY3esdcE64NEmWizws5G5tc9yoHzDetVgxyNsk5ikZv6b4A1j21Dmz2vAT2r",
  "key38": "3Y3Lid4J9FqSHhoQsLbXeiSCh9CaUR6U5m9YUFzB71V3QtorMAK5pJR6ZV9XJg6kyD8divVhTQK4KRZjGtJPq2gX",
  "key39": "5eaLaWEf5m4aJuzxo7hFMYgDyVUzHiaSUqTNCugMFZc3fa3ViB52AeMfdUGyx2r5c2p3KHBeCDw1wGabFPhuLWQA",
  "key40": "33zsseb2bX12RtveMR7SSuUzdj8Ts261L61GWwwscA62FenxKV7jr7DeRcTDnM2uMZ2baJYRJio29tVvdBHUk4sq",
  "key41": "2MWHNspQ5Sje8QRXoqnHx31RuRLJRprVR39KyBy1F6D5ozuQRjC1oD5ZaMFsaP3d7NWkEZez5DpFzGJUfGmCC29q",
  "key42": "2JCWqfQfwno27JtP8mzLUDG3z4PTXi9QNzrSZHQRdvp9riGvEDmPXFHDe7yYE7fjSpYGiv8hScTDMraUxaB8QbvQ",
  "key43": "x5LmSXdNxAGhvfKSiBovgjs53jtrUqG4XYHN4anJd9G898LdrLfHSKSAfYVJ16Ykwm26mLZcrVJRbUjgRdAihfg",
  "key44": "4oSkUZ38Rjy11j1vCC699f92Fjv17qjZW5EnDYxZNxH6C4bzArbPsE3sbMwnxyKWEUgT6y2YKPvNxX2rVnjQHxLC",
  "key45": "2HVnqdDXKF8ZXhyNBxiXZek3QhDPGDiY7xcUCT1CLdSNu2f6rhH9RkfkJxSQvfd33785vAi2JdVjH9eJnmGJajQv",
  "key46": "sorQti9uiwBUQimYY1eij5Ss8Tz6MtFbE1JxXsNDkhAsmdzSrinhPqB3tzL8JMF5CCw5MP4xsFs1zgZeKWM1Ev7",
  "key47": "2cYhnJs6TbPoPPyH8hDUykk4bosywX9n5k6MNQAebW5H9azZUTKzWFsKtArGynviCdYYPRqxnXkjXgwDSFiQ21BR",
  "key48": "2tzibgitfTrxv8xYySVcwMACYBS9DXNUYx9xN6DPo4SNm8tbTBULeyXWoXpUkc3uCggMzyFS4hbjseK9mtKkyZTx"
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
