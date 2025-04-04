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
    "2KVRtHUMc7Dzru1SiiegKCdPZrwAmqH9uu2K4fxWz5wU49u2u1E7AKpXdS3ZAdxnUK6fSqy94sMTTS8CSLC8QjaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QFyPsxfpVoCwVAMDfjhjUoUtBaWGKGx3T3vgoRRg9qQ45d94X9siZT31KJJXYXkERLajEZA35qDJttarUZGnCTr",
  "key1": "3Skpd22DH6VZNxuXT6RQSnoyKgNS6x65MLEvxAU6W2DnaoZNUpc4ZjAvmwFZBKttiabRW4A1Mk4ij64u6UUBRvii",
  "key2": "hSk2QPHsf4C3f1nChSdMrjKkWPjrPDMLbWHpmoVCeGbrCp5BBPfPMip3VXMrYyxqWyajweVVwtyhpH9f6VUDMJj",
  "key3": "4aRvAh46rsK9ZDJ6Zf4oJV3MmokJEbUsDHz4XL1eWM7fTWyS2wt7xyQAAKdTPLbeCEbVPc3Hy575U5kAePU3pLVG",
  "key4": "3BhGeFvskHZsjJ4Mbq2X99dn9JaR1iZX7CcsW4MKgB9ZNCcFjSmbeNsKeXSNBf5MXdaxhHTrRbNBiXBCJqVQqTm3",
  "key5": "4sj3sPSHNHxi7m28tXdmNsHuVse3zLE2pSmyxPea1t6oR5J5YMnKX174j8Lm5Z8urki8y1h9hRhranfnJ4kfLB7s",
  "key6": "2fDm2N8xmHJVSvrCTJNCqVL3RFaYvq9KJ2M6gAr1qYaBv16xsB4iY6DNmNpE43n9STZnbCoDiHMiEGjFAAf2hn3y",
  "key7": "591FMu1ezdMdnW1hXa1EmH6j85Vzeid4zVThpL4oxtYFHpXgcfeK679619GNfhdm7bbEVXQtCa7v1wpnjB7R7q6d",
  "key8": "3Rf9ZyBAebGKvgGioph94Z4xTEKQZaDTExrnadJh9x2zkvbpyf7iy9J92Rf7eQDbosadixScDW6ehuGWfKsxtW2j",
  "key9": "2JCyJHGfKYX3EAsVENLji37PxUtRQXzbUoTwU6fTiNj3XAAN6C38c8WG3TDwRcSNFQjMyEFwVM1Uq3yC2XGXku6i",
  "key10": "2SJ5G73gwst5sNf4xx1fC26c1DvzsQbxvLKCCxwj2keVRcT6JCnYCeghwmh6oQAaYP2FLiUKf7ih2szrxiWkANw",
  "key11": "636maAPHNu3hD7wSrxKTXZi9EXF6hPihXYFjafYRCJNo14W4eUgW8R6RtapgtSyBnHo2t9BK4qh7gAjq4VjcnWyX",
  "key12": "5JH9wUWcACUJobB1DvpaFe7zy4nm5kjhcAoxjS71QSzKRd4chbbwgLNR2YGmAJFP4g2oPxNt1uzG48mcFkRrJ3ax",
  "key13": "57RWcCXFXAvHzfkbswtGHaAewfZrwZrGGEWPYDSxmP3ZnyqwDnDaTPG6rHWneRsRKoMV3PRRV6sooZmzhZdHywoJ",
  "key14": "ZN4DPwTvEZUwfvuGNMKRKGPQtkhoacC1hjy24sWBRBgMQaYSD96QeJPF116VjNi67HCNXQHAwabkCJs4CU3TFiP",
  "key15": "4FYrLPwxx8edb6QsnYxyzV9dTH88ETRKbN2TYARzgtZRy4B3TJKFLAJZBk1eGt5Dv2BLfrsVHSvP5UUmdubrcc8g",
  "key16": "5GNaH3WvgWnk7teNT9eKJiGyj8ySiPtKZe2j1aGeBQcYJPKjBY3SKqveNguEvSY8WaieEMPCfxrLozKJUMeqxewt",
  "key17": "3hfHMjyHtYRbBeLzu5mTNCYEY6VeRD4Lu1b7w16MvuCntYP9EEW5HPRSxzeae1cLja9z5khbS95Avtgrgigwt5MJ",
  "key18": "5H1N22TsRahCurnDXm3tXiY1e2qkTN5H8pUxjyjwiB5zrdWbBiNQX7nP9VpC4kf5AbcJtq6zDHZUQQzjS2MPYQfE",
  "key19": "RBbJVV3thjbQVp2umcSuKMhG4N6orMZLFQ9SLDwR7zNPbWmvU9FbfwSWjtjPbXXmJWY4VYPQfVh9TtMMXLAw3qG",
  "key20": "4LVUDhLaB81u4U157dGSwcY6KoWQnsg7KhCWo2UESEoAkDj9btG2z4w4fLGVomnijYqzQoqJdzxx5DtuP8apXWRh",
  "key21": "4s17vGFLBArqGLMAytbnTMuavePEzYSFBc2564Jb7FiCDqo9rcMWKfsenyromet5UuvQ6xwCcDJekj9JgSK1Fsg9",
  "key22": "KEAdQUYfB8Q7xUCSSWL3EucYAvca7rk3GYCmG9Mh9RLgvNUHNRXyLoR2iq5YeB9wQzUn2aGXqk4NnSq5oQucRKj",
  "key23": "4Sajr68Zz1e4vfiN1RHoQLvDtYWgRxo5o9nPvkZS7fHPQzMhXb8R1eiXbYK9r9LCQRPBvDSJD8CMYuudzZmeg2sV",
  "key24": "4BGeYgiYjYYhHzeu7n5ApMWbPLgT2W9kUmhRGo4WxDV4Jrgpi5VWci9qdyDNRWiMYpD2pihdxsuQN5MYG9fkLQDX",
  "key25": "5qHdFPc1gSWbtMggx9qmcJuqPewD5BjhxeWtLksYQV8tLZVhzKzY3ovJUwvT11Fzazu7NH7xBLFZ7hbio8TyR9mP",
  "key26": "4NGifSPxeYTkaQPjy7PSZqNyQjnNXwVDWBV5Fn8zGf175yMgwcNQH6E9Chy4iNAWNMu4RJaL1WMoLBG6b9fkbXCJ",
  "key27": "67ZULpotFEEfPAn51MqUWo6MM67iEtxNWwJTWMDdjppgpFB2jH6avaaU7v9QYMjWPCueHB6nskrvvfBvxziYsMWw",
  "key28": "44EvuYzXs8VjoHcuX67Z3KBF8e8UgNaRK1bTnyMYST8WAkfXN1n4QRgrcXmmWTRHzxiCpBmux9GyX6kfe5qQj6sS",
  "key29": "5mUBgqzpwjqLYbyuSPxPjywXTpZec75DDaHbNw2sdi5ps1xxnkVxqJx4KdqiEJNar722QExn8u3H36i6T7BkuJwK",
  "key30": "36AUJRVDmwzZRMPbiJPEK1Ma5rPh4qKzaG7QP9DJx2FQaXT148RMdj1y9DK76Nd5bRuKEsWJBSkzqVPs3NWfsfb5",
  "key31": "5fmEnDTAXiauHVzyWD1arPHFotQb1HR9o9rG1ZYi3QG7XCffbkWhfK1BFaTf83WWGmAXsek27aHE4S3CGqW1NUCt",
  "key32": "bb1MoFLCc9aDDc6cfndFFxT1aLefcQqBbdiT1rwjhrRn3U1sYV8nsbMMnvCt9jvacN3ctQC93jPKSfYEFEZotx6",
  "key33": "3UD7eES2sKeXA2GfcT3aTKMPc93FLQr8ZijEk8cuW6syJhie5hGq4jxXCuBaKMuUJ2XU4Y4xB3ug1AQ4Rgosd7e4",
  "key34": "5YmxpTb5EfpizAKspyQdTcSRX6EdLUkJmqN3jZ7C8AfgCEtKonLpKEESPQ68evtxBtnpfrtd6htmmXBUedVrPxpK",
  "key35": "26N2UKTDCCxy4uXs7srFwgoAJhDVTcvY1mvF1GDwsn2LMuBQrz5eKLdweswXeuiTDP4EmkyMzHLjBBrE4xtqzcjZ",
  "key36": "26i9WauVq49UQ8PnqVQhDt4KcGyYp9hLHtRaZRsJobNkdSYDGZBSeCbTy9XzS7Tgtc4nPLx1L6QnCbhxUMKWTo9W",
  "key37": "2LkikreZxZYSvwFVDgfZ11VnaxrSc2Bviyr2vrJ9FbG3pKmunTbHdoYSpF3fdBdoMXV7ujupQu5FFGybZzULo9r6",
  "key38": "2hwvDHcSgLQbHiuCSAz5vN48AujiM1pz4GHb7zSaGNnshTpc1LrvU2p28VjdXxCJ4ftnCfGdHX2oVmBnZRGRhjjg",
  "key39": "4c6FuwYjs3ZTfTrpr5cqmEKFq6LrsgE6Qmguv41r5bEZ3qpDaLhyzs4EWnHzNNJiiNc6FdfkFg6aw72qpR2LRWU5",
  "key40": "4mGvBEo2856V6vvYtZpCQKQp16foKPzia9RLQ4vxSMfT4TcuKTCkMNkXPRqQWBvachZtxE7qjdThjMPwetfBjHjW",
  "key41": "3K6d1mxoUmDSrcDpzHW84cCg3yi4p3oPBZuCNLbvQNAh4LW8six6AZsn3ZR4zi8wfjumFPicEX2Pr91fXnHKMTXK",
  "key42": "gMBmchfnzibuymkTbschwcPPu3zVTASU4ub4nUZSEga1aEgSRYm4LwG6SUtgLusWgq8WU2qvt3NbSuu4hTZTxLS",
  "key43": "29x5hPr7ZhWqCePYCS6fDNY9Je2Ab4Z7dKt71n91Lam89DLTngiVVV9x8iSxa3P8h7BWKd8HPGACribdk13MToJc",
  "key44": "559PzKSV6Qc8V4ykCHCs9W2K4rJHR2dMEBuHjxwDvqRGSjTqQibnjVem3QXesbPwnRR1aKBC4bMiDwrWtavbrb73",
  "key45": "6A1K7mFyjDja1GJ8271uMVakU2TUye5Y8J6Yw1jzTLSaU5kybR2uT2FxEEsLFKeDztxTDXYuybW76j28rdG8tV5"
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
