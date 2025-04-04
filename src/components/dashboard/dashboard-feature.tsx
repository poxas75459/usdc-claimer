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
    "DWzQbCRXr6Z7UmpTRmj17EzVBBuhJbTQFKL91DmockniN46tLcLf2JxDVsZrcweYj7oaYnLEoS6qZGgvgqAa8SE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eRc8vqBR77S7e8J3kHXKJfLahHJpcJwNzzsw2JeFyUA2eZPuGiJDhvH4y7Jd3iYKGJkJqSLQJxSMqoZLkN7oSYT",
  "key1": "2rNnhkcYvZVM6gdoRgXTD568KpoyynaQ9RhHy8SvSYEhRAnTWDu9xAmfKqDK3rWJxvMd2oZHNsMbxtBakKoMXKEn",
  "key2": "3AUMG2zjtvBTxV7rXFmegMrciRbo2w3VK3coXqgHSWZjUPuKVW9dY1JDi1rHgydx9hBdULX36aahyEX2PwLVWFz",
  "key3": "4Sjsy6uSgoh3o6wQWJVsBsgPeWNA92rtScv1gXWMfgCFqshe5juM5iXidm2cnejhWHP5nY8cz14Ft1sHmzTY9T6k",
  "key4": "3XqdXV3TemAViG3oSCpoVmJgErrs7ULd7CQK4TstpzYBagDh5iXu8WKr6XrpHWgRRF5S7pV35MfbVjveikBJq5Ba",
  "key5": "5VMu9HjfvsasFNq1bFpuCGwv9k3jWynk8P6hZFTPCwhQgjmsdvdPdAcG8q17xXT7a5p7rbWLCgFNRmyBkwwD7spQ",
  "key6": "agPP4EkWEkU3WMJoV5uZb6y56PhoABd3WCGk3ANjyJVwWNebdHhLEGvDkcY9cK3C668o1sZUxQG5x2HK1KrVtyw",
  "key7": "46W3tUMxujjvuhicKoWysnM7P9ae6GHvcLJpkMZJmnaAPC6Nrpmhr46dhHi5gbNKnz5c4RananTCPUPfvK1bgYQS",
  "key8": "GVnTTALPzWp87CqtWoCASxqretZ7HMYRuShXdTG1zB3T9t6WYnTXBpZwZbPiLtooMSZxX3x8wr2vvLJL1vQb2jD",
  "key9": "2B618HrWuRJhsZiotqbbStMVKySjGrXfs1aVhJxNJsH2vtKaeFTdn7vi8U9i92Jwno5xvWffgMSBkBfUEUJxgSWx",
  "key10": "2qcY4jT24SqV6hac3EZ4yk8hWkRkM9J3GsetacTXPQb8VTjpATqP5jkdNyaNQ2FDVJiXVTQqU1Q7Eudb7t7dbmAy",
  "key11": "28uHPmDbwcy5HW47rz9puhGCTvjsP5A9u5d7rQXhT2WphGDvdGpUTnrCYUoCrr1cNKdUAwNnoCEh8EGstCaipw8T",
  "key12": "3L3kruvLQmtkYFbSoSubop7X9vndYAfQF1UprCon7coJ7cAz9dizUedRmmnJEXE58FbmbqLo2P1PazrQEpDysJn7",
  "key13": "2tamkkMtYCRdiAiJqG2QFZMZLgPDrLy6gQ7emanYD2heAxyRyNw2e9ZC4mUVKu46fa7MXH1UoWrEStQQ5tSxZ67K",
  "key14": "51GzkCRJ66hbe2bGhr8tS3NjCR3QzfdqShmJ9zZfN26EYXRdJFKgyqh7GXm5xeSVBrLDXFC8wgpa1immcWAJmeaH",
  "key15": "ZZTJA3kmbjcmA2mNHH8V3FEyQ9WM9j8zKPu7fENtAaoUALZSKRDd5dMZDpqhW1nxePRRVBjsjpd4gVXbYJ3gruy",
  "key16": "SXcCNtp3M3yA5TNJrBnjuWgobuRJD67GYGyM7nrrCVKrjQxErrdaWQ9cL4S16vp7mkbQnM4mqbB42BGc7pscRqQ",
  "key17": "4WeidEbCTu4HasZFKAtEybAb9HWpjSHDNJAs1zrvW1PSY5ReSZCHMm1259TTgiwRzotpC7zw8JbjiNC6jwwMwVBM",
  "key18": "3xaufrqT1MDaDkNNR9fszfSCyKG11Kr8br14Ct82Eg4zzdakZ4HA8aWpkYY3LgfSTnkWchbc82acTn8pSSY7Cov8",
  "key19": "RERVW1KoBGkVFJjjxZU2JbK7kipAG9pqvSAFiiz9t1LjDa6sMyhYLaNdCLSfr6dVPFHTNXds4GaYCFFfcNYdTEr",
  "key20": "3GL2fRZdWBPz3W8KRVTLtWGDnqn5B6aa6Zztozjr5zZodrB8APdk4bCYWuuGsjWURdRAYqqjXsdKGWJiCqK22BvB",
  "key21": "63jaNNRBkWY9iYJyJbEtxcMfefpiB23WggbopjCWyZm3S5ryJwZWTDR7r23pAUnyiHsMEsunNeqJT6JmZwxwD4tk",
  "key22": "3g7dUhnmDHX2Ww7S1q9WrZa6VDKXS5CrwNTAcWk6WwPco9CP3vpA1VRtLsSC9EhZYZRsDJ4iKpAvpLtGfNaGQZS8",
  "key23": "2w6qT8tVesH2ebFy6Rk9grBSLFGnupWjuPr2vP4ubMLyZMWmxKATHg83VaQwJ9eJmRLgpE97miCGRLiSwncFeyk2",
  "key24": "3RJKd9YEcNZDaBVxWW3s1nBzYf71RUgT1f6hpvCNtwxhxCT8aUrpY81cvStoSTNGCdep19geipXxHzPxHbRQ1fAE",
  "key25": "38Tebeao17tvjoLVmzjyb1hy3FVLwAfvrmErgemfkrWoGuweDBZiRnbqpX9LMBp1amF4JtwU8jHqkraFtDXT5ViK",
  "key26": "3JthCTeFRbAi2Z4U8oeWPfprBDeg4G7M2G5e6gVjWnE7RXRNeCbCpQgJzu1NzUHbLHZPkYehoiDbFP3mwxu9Kkr9",
  "key27": "27ZgARrSCUnHpqxSadx6kPeCsGWp1YqNrLhYMxNRkcMij5cWQ956iM5WsE69dKSHUAm7kKLvHpGqASRjATEAZhEW",
  "key28": "2GEF4HUdAEx3yAUy4sgexVXrVC6Xc31F2X5pJBdXk7mVjzySAkkX3WecqBfgNzH3sSjoa4ZMVNavVRqwMtyBhNcR",
  "key29": "3V4sHzGLTv8uzzqknxjB2drVU7s8prZEkRt3QeLmQA76YRSPvpAYWX2UgmM3NRXqeb91pqz4TCVyWYEA7GbE5dqz",
  "key30": "5WixmUj1GUUszo8L6ZcXahHLNFujh1Ra6ZJmFbeMLEXa58RxFgoic4PcHEhdp2KFHZFcSKezskhXzAwx8cNJEoTE",
  "key31": "GaHgCkYXbLzaaYamPz37EemG9xVaRDwSvSPGomhvHCmEir7eBTXpw1ASP6wNCMzbDMqMqhh5PrwLvi6dMh9nbtN",
  "key32": "2RAgxHvni9R1KcoUSYs45N7yCpzNBzTDxpbEVHjWjQYtBrMm4GSHds5BwTVi3M35YRjFvcgk78Yp2REbNasi7zak"
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
