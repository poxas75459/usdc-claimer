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
    "5WC13rQLhVvUdGNQC2d2DCvQRck4M7edp5ZxNkSS2Fx5YZuPX3RePkEadZuiFujhNKWPLWJo6ESnhRd7y5A4ccWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nzAvgr91CDrSh4NR1kjzQ3XDu9kdvD3iLvgVQRD4R2ziYQPZo3NDji8wGusLFy96fDGMvKxSoC16HH7rfdaaKWA",
  "key1": "2tyRVzFYZfwrmE8VzsrNtsjTu3iLCfwS3GiV3B4tHdD4G4cgCF5JWE841EMBEu3ukBnnsooNJ7oncYPUhec4tNng",
  "key2": "2WkFUmUmYBvVEoxwzE63tTVgj1kToHrk7imbHGcSHXFbqXGchNUhoafgVkscDixDXmUWU9MXxBBVFr8371ycRHme",
  "key3": "65q2S6Dx1yL27mTADnyRcLjqi8orzncgqJZEBpCcpAwB8kJucqBFfnnEf5GuNLwKsCvTe1rHrou87CcB3Zm9MjvV",
  "key4": "5mxTAFiLgXHDH888hNtvqDSncFykiBixS4UCZpdrG3ZM1b7ekyutuESaYjsuMkbvDQVbyaAEue9qK9Pcu7KXdSKa",
  "key5": "4deFyWi6J1Mf8degsBLiW2H4U5o5wPFk2CH2rtvn4SWWapyrKpvDpDr8XBsNmJAyNC1YE237HbzZm4ihDfk3SudZ",
  "key6": "4itb6Vjq4318xkJFmoDvHGe1pACBaAYADuAMYmsLxqM1FyX9X8RRdavtZwBTAmfYQVxbtsH16APAyg9NJMesJS6b",
  "key7": "Nyzqvu8niKSter3bQNsvEipAio5UfknVYm2S28P65D8yB1TVzzB7rfVShS4NRdnGueS7KkTgkRLEHrxUsdr4sYB",
  "key8": "4hLfKVvccU6C2bZyKACyFeVvjidZfZdqFsAduZqF7hxpwLrrLUyCRAV5t1H3LLVZ2bkwFKLkbK4atm2NP5cE1Vw1",
  "key9": "3L2mxaDuJyBYk5bmEnbALhhvU5WNJAde1szSwtAGSKqZqKCZL7Xnbh8B4g93Ne49NneHabdkcXSMvSaVYyrR2Aor",
  "key10": "5M5S6oSxbzXA8urnqtM5p9BZjc2VzgsFBzznzAJBJc3WqACbSAH4amkmFNDreX4LN5Xo4C8UgPHsqNWBLnRheiV7",
  "key11": "QBHCgL8oJbEfLgpUsjGfKypSxRkRZENvXUSQToQMkmE6kHiaQgQvRKWRvS2NSKixJoMZPG3A2uZ4EqXjAkWKPWy",
  "key12": "3fEeCRvokG2F2SkEsJ5EzUYySsgCseo5tQ8oCH8V4vcGGpxTQh2jJhRZ79eV3Y84hfbmAvSC8ENLcCnxXVTkq6EF",
  "key13": "54Fb3mvpWXFSt2tfdHKCdLAbEjoxbEdPFQKB3MU2R9mpaeW2q5oDvZf9E9vPpBz7JdMitg2BoMjG1zgmVv7ZKDmq",
  "key14": "itVBnaCzLCV45f1TgTpqPyKxgiWqt1QXCuo9X6ovWyzTpSZbypCrKWuiWthQczaCMhhmZJGWwivmdWAMj93e8jH",
  "key15": "23DAw7JGnvddNjWF2n6HpjgsjZkZQtoe8uoyWCfKHivhKeyMFuZKUeCpBVBkQmtYtSVPf1xs2RiF5md9L1rxhcu9",
  "key16": "sEaTzYDfEEPFwC6gn9zYpsHUFpq69FnYA4NDbqsZmQfJ7LRviNSYKvfFe6vn6N5cmrZpynr1sBXhcGy7BDnBRjR",
  "key17": "4z5fFLLEpcrEodv7KqEP6Bb977Lu23rUeuBmqSXKdCeqCXdykmJRjxXHuXwSedQ4xc65MNWKJy1r2UhEbNo44doU",
  "key18": "33CzJZc6s69dAS2vA1YVrLbmqcE2Xa8ArPMKQXgd3kBvmfh8xyfZ1QPuhwCNNumitnoUC7NB3b4MYYb6wrLPXFmi",
  "key19": "4P1XxT9BaSndp9fJvSdHQYxztEmBhUFuLBoaaPKFBFpEtPbtRDV8APBEkV4KbSaLv4NsPPFeQ1KLPwP5nwDrUJZ2",
  "key20": "4xwjwekWgcdL5iLZXsgheuBCnraVDX7di8SiWUKQFRA1vdYZEMPj3aZ63dwsiceRSmJhze2shuqpMs9FUxSwfpDc",
  "key21": "237KjYFkraCdz45awiW1ao8Eqkr3nSiZyHS2GcdPZC82zB2cuQTndTcPvmUKM9iu3v2zbUmDPRd8FthKuTsVAQuy",
  "key22": "2NZx4qmahPdWWiZS6P1mrC6VVgzvPeJY8xK9VtdmPuZ12Xb6sWJpgJnyUYWCfkuV4c4cfNkNp2ZnAd4Ce9HkxVzF",
  "key23": "5Q7MiS6gfsyRBo2nVp5ttPCVeMSa5XRmJFfsk9ysL51pH2k2C5FXMDtNoFys1zdtzMHSyZdaXpH2omvwNdjCmKDq",
  "key24": "e9iwkb4pAX8SHbb8CqR7XSFhn3yireUVjjk5Y7Ua3of94iQ87y46iq9roVhf7Sg3Nd3d4puHPrH3kyCajxUQGhm",
  "key25": "HoFVZMmdfYnM8P3FYZ2khQFMoEfbkMDnYdmokzZVmTy1vM862RWi9BLAZtJBQiHQJ9iSZoM21vHLB3CyuhveHUo",
  "key26": "35q2UX7fAqQfS8fYp5KrtDLyJeXu8CsY2d9XsoX34jDyiuq248vE3Fp4T5dqqj9DNLztiRLTkGNYzGFP4h3FmeDy"
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
