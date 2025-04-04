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
    "4zn1yw7TMAvvDHQ16N7oLFxgEh9NeGvwzDS2o6ZgJudng9MvCM7xsTEFJDbsJpBLG2TAXrmKT7ASCeSHaEhc8WMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ni55okFUNxRwZSVNYx8tzfUsEdv9BjiBTwMbhf3fn4TGbw5BmPdpaZzmvvs8S9EC4VASEBEEtkfs9wwLGqnG536",
  "key1": "64RRLsT48rAhw9oyJAH6FoK6g3KXRMFzMoCKtfeYz2XwySubNsUKCFcVx8hKF7GTLUETx1kQviKvVXht6EjsUcpH",
  "key2": "4RZdgruA5JvmHKptMDc1P2usLECZRX2iotzTpTD8yiEDkgpR2SJEqSdQZu7fhB5z5D6ETx9UsYKqMoKsq1cJ2jwm",
  "key3": "5QypuAGeYEYUZQgRHL7m5unficxqpeknnp6WEa35cZRWxCFPZkxbwPpPogA3TTcjMmfuSnE343vdpT19fEBfemsa",
  "key4": "5tQaL2Tv8Ne775dgSER5YUycowe8G3gJ7HxGSboVKC7Z2uKVqqRnNtKUZNfHoUG4WCCbyk2TMYKZHX2v1GvZzxFj",
  "key5": "yYfzCWdPBQE6yJWAmQD3j5PMajjNp4MJ4h2KF9xA1YYJWJez395wHe3f8UmJLuHPFSrHDSw2vgvpz9QC5ZZqaMb",
  "key6": "5uk4LgMoyJPsHVLqWtcRUpqHiw9ELfT1da252DgM1vjtq9UjBfx6aTXPcRBAfGqZERhHaNmdPSYfjvVSGfH7cUk6",
  "key7": "2sJDUHyVt5WSN2m8cWaZPG5sU4uG5h8sSHBtkKjSfJiPhFomxewMkFbYPDcUt2jWdPHhPdPZL54D95AvkMDY5B2B",
  "key8": "DjJHvVCxVsY9HYypMFozDNzPg3zwjmvNYQ4R1Vb28Cb3XMtLgD8ksXXSwa6q2ji2FWjFRikhpSA47FXeaZMZPGW",
  "key9": "5fq7KmqcC2x2aoPWWJ9dxchc32aFUHgYZo2zWU8XMFBdXuMmSyHubMFmhnoxnEN1BaVdxpJTkz1E1VGJVR8f32YK",
  "key10": "27CFit1GY5KdoxSozkoTB4aMA3fSVo2y75jAjhUzijLSya2sxfTdtKv92nt37UWyXgYo5mJH2SdmJ7NWnHGV9QJb",
  "key11": "3me3CqchqwkSmNc96KtiSzvEBUofXMC2QCgx4W1SxshsZqvY3LVGm3Fd4G3xB7qQxec4kDJtZ3TYP9rtHpAcWgAi",
  "key12": "5RgGLj9JfAYb5JCQ2UUhVHs1as29NLNN1Wp649bH89dF41ox2B4ZTDQrVf4KNuevGPgzdwGzU3YamwHWjfbzc1yp",
  "key13": "2aZPmTsnKNMcCTCbBQSLS3gx2LqoRhpBoP2gxn55WwGdEi5hsMpDF5izk1cB3XB98g4tmdK2YoDXYrGQqcH8Qq7P",
  "key14": "2KHK72dABQAgxRm9c5iYoZTyKorpXb3i92SKCmkGmkumLtFNBscYrkzhcTEDUto9VXUUY25ewz9Hca4Asy7xsnUv",
  "key15": "58mC36mpDYgoGS1RxdnKddLMFbtPMJDmMUo5aYdQ1HjhsLgSDjubUDWXWySgW9jLc7ENxzKuNKUYmsKFbtwLCqi",
  "key16": "5P7BKJHXWE8W4S9sZkpabCc1GJXbVuxsxMHo4qqQtSUyZ84cjGfWNx7mrG43CgcYt1E8aA54jytpjiWf4qySnMqM",
  "key17": "wYNfixcoWppoGuaiqA4De4LGx7a1UCtVKUejRiHV1wDThAy4cX3dUFfcgwdMraPNfyXpXkkExPNLmEM5MozrHx5",
  "key18": "2FXibKXFmSR46AXYbQVuSbMRAgVfuxNeZbrn6zBj8CanMJaabxaaG1S2mGtpFUdkW8RLgZNTX9VgeH3xBBD5vrf2",
  "key19": "P2qRmNoybcGLL7DUHkdRfnSLfNySQMWyeWhG7Fri7LKUe7b6sSQGGTbMqcAB7VimtpZ2FWSTGv2SsGJwHc7jUny",
  "key20": "62unqauTX9PiKnnLRbAm6v6RrxRB3pLRHt4ciiHyaFcM5tDnzKrASMaETwobgYfv9qz7Som8Sd44ehEBS39UFASA",
  "key21": "3ESDkgi8h7TJtw6cDb5CQnkDWzAwTZXWGGekYekrE4mtmajxEtZaPYinuvtqXhHegAA581vKeSCjRt4BThykqZgK",
  "key22": "fg3PqnuQpgG3hcu756VFbUg8QtWVQGiCykRQoZvgVQTrAyPYPxHYCsiAw8GJyk55h1X17cpZBp8u49Qc1KP42W1",
  "key23": "3CvLFyNYUv3TF7Cfv72U1Zq7GmQUHPjFkFv2ZbqiwVsJmADebiUBfuRz3F9KcyHrEzL5jggsokeQTUHWNcK2vhJZ",
  "key24": "2yX8Xuq7RXjQspYjNjfp8ubi5oXCMGfNEkKHrSn2QB9pkiXqcJiuN8BU74zjhNggLabkowVSP1mU5pXmgYTUsZuW",
  "key25": "4yqpTYu7cAuv21EQNeHYapdvvpE6zokqwpDrY72Vtv8HHRcw23oqYVaz8mckFCAQ8nBGfW37BaXPhh2ehJGC83Lb",
  "key26": "2idDjmkZpoWWrZ9pqeatR8WNJxr2mioWW5eFhUUfHVVwFceSe7Zc91dVB5qgEHMPAjSTaC3JuuMPbMby8okwhhWk",
  "key27": "4cXVYzdcHoLaE6a4E6mETi5pCigPGzKGVDxy6eCPTN7VozHBActdiP2R2NE5CA2AFZXiZafvbsWP7ewAMnwPFTif",
  "key28": "2vFMJS2ua2dsu5iE18RaNS5hL5fCCmzCvqc2WTzKdWqgQt92UPvfgwAm6raw7SHfzSmZwacd1PecdJRpzhnjvt9Q",
  "key29": "3Ph4yGo7rXAMWUKkyNd47LhMDDGHvHZ73aFwwVgL1tSMawAiXvx4d48UW2gehGkQsscg7WJGUmYBSMqctQfCzRZb",
  "key30": "4HF4XBXXgJMs4gLdSG22TdZfcYSSxjfqcexMUf5tqtMVF77WnEkDd2UEjHTptVooQGowTxtXxpsETjfxF4wJwbjY",
  "key31": "2y7CbtpvfZRHvA4tM7usEbnb8vsnR9QhtbCqaUevPfY8JKpQP19c33KfpadhkKUwsuxN8XWBTgJiVcqJ4RbrBvX",
  "key32": "3qFKc1tZ8qp1p8fGNZZaUvowwZS3u9ats8LZ4eK5x9Da5ZnsRfJiPkjh9Z5AM3rZAiyH1zhNPAWQhHMG9EFQFp75",
  "key33": "4NpqNpbMSH2DxdoAfYoTdNAsV47dB7jVsPtFjRvPfMWFAs2mtNdLD8afwPfNTc48A17FCkFXLK9qF9b6ZDMe8B5Q",
  "key34": "4JAfc3mMhpnoqZaDe17eFJ7dmnzaKaCta6FYX4hcPsQnbcxNUrH95MPvBs7zQuKtCsHs8vA9VB5ray491qkjAJMq"
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
