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
    "3LszGQQziJeCasnE6UUkGC31Zy46a3Y8vQLSx7QoEsMkoxhdWVwiM3sVqJ16aPgQERk4YbvYvStBssn3GMqoziCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RcuMwWr8nSQB81T3kZopNnHJn74xFCypfmB8qrVrkEzrXApHzpp1ry2hTGqQUKj3Lj9BSBaCRngMFr8ir3tic6u",
  "key1": "2FtEuim8CGA4Sqm8zyWkyzJL8P65QcDTvt5TxpzzzDWRdgy2JpaZogp1Un6kuLA3gXGGq21m1E7BJkZd6THPQM14",
  "key2": "Nj3CZNphHMsDHSvi2WB2nxTTWgJ8gW7uTugmqK6kER3ztj1ahQr6gVjzhXu7X5mMrVTGtRzhmfFTxK59Q4EmJ1s",
  "key3": "uQbbrF6ymeye2QGZQ4pb9T9dSvyNoETB8vVvLkbTso3B3AcDMbJDhCP9T7dxGAfHDxVDWNN8SVBwXLMqYxMBRMe",
  "key4": "5z6P8EpXPadJgfzeiq2NGbMpwc9e2ypsv9S6A9aNH8chK47C4GZLBvRyNcAKzgP6J3TTC3hxMWrwFY3JgorZrago",
  "key5": "3PkdQ7PCNiCKWfEtKF5zfgFp4LwMnHByBVUZsqSLW5WhEPS9sW5FTtjiqQH2CBHY2UFBPQe1scMz7tW9w61xPNwL",
  "key6": "3GnZMjgNdQqYMSA94vw7m1LuTgBtxL9iVs3Wizjm9HqqeovXCEWntfMQyxE1GSywnuHgmiqV6engcQ9mkEL2kwBV",
  "key7": "4epzR63n49AG5tahXFzuopPg5hZCo5MyeUMZkmAp2y1nnuAU7sHve9yJP1ZzRrfY2pMS3UEtMqXzE3XSUfaD3zee",
  "key8": "5yj9cQ1XSfp24KqwtuR9L7QueJcWRKo9MsKYWBZkAejQVN83BP5cthvNHiQsYUAeMTCgmbGX4mh2gc98s5JKCbmb",
  "key9": "SZNhTaPxPpsg8dAqqtw5SrHoobuD3uUuJ73Q1nJZ1ykg4Z52vDTuDXAdRFvp41gG16Kw8igesBb8CGtUqA9zSxF",
  "key10": "4A7Ki29Tddj1UNtjowqsFuSY22soQhTTps76wxucrbdvBpju2PQ64UpugnuJfHvYrcmqgSg4SetoK7Bp7VVWyFXo",
  "key11": "3uv6DmJxEbs1avNjAVwmipWpC1d3xubJC8bWoJqXN5JcC4bbbXue64PbbFvVCeCvo3X37E2cYFWheiWd8Vh3crUd",
  "key12": "4gD6DYdr71k7whMoWgg1UUaedKWrx8RFSPuR9W6iCpjaKvVgXQ9W69BevWVMdW5YExrQmWpe6R8u1yRbwfbJpQqB",
  "key13": "49Yvgm4m8cY717KR3aK8oaz75ENH2oZvpzLX7KyRMrLTimf5RBtWfa6bHe6oJNNBkmgmwEuL6d1Qe738m7yY2LAT",
  "key14": "2c5RYLFcZrbGAfUULdqFyJgauJ8wejUeWwq3rssiGiDqy9yjVRxM938hPDrRyjFUtMFcgs83mxajP94Ls1qG68FH",
  "key15": "2oorkjTywhWkS1bQVzZLPWiVGRAA1efS7pe1MzTyEkgyq7VU2new2yyBozUfyPD1rnzz1ET4md7MDNN7gYYce1EA",
  "key16": "5iEfcmd4sdZWPvrthyk4o1xgXLb1Bp3FjdzvfJeVpW6xiNxNf2bPsxwumtAvg6raZAvKzA1TvGWGGnRC19Y5qQ4Y",
  "key17": "5zKs9tjCwspLgJRtT5eycnx1sD4PaGoUU68ev9um14gwLZhRbrHKyNJYcFrKUdesTyG76oLfZ3wCgKqr7H2Ukwjm",
  "key18": "2R1qqyUfTbX79BgbfX9SV8LLJFYZD7JhGNEsy2McBqP3ke6AVEvV7NTcjergPqktwC77UTYdW6SBV8x6NvzdVcLY",
  "key19": "86s7KNAVhgoYVgZrrS4qVk5R2ZeUZZoYSMY2XsLzJusAFwwZTjqwgYPe3nEtDWm6sszJWzvzr7uoWiPChkECdRA",
  "key20": "62QysVSAkwuGjTukG7ak8n5yQ9QjA3Gi4aAdWQitfjJdPrvNG2tVbyUXg9VJEy76qtPM5hJC121aZKo8vbeo2UKF",
  "key21": "3LTB8ab5HoX7jhyUh9UdjzyQTzg2HkDQn6DgC44byxHhkhGpPac1mEJJ67j9d9kFfp5bshabVMDFwEDpz24GAGpC",
  "key22": "229nD9Ns4fU9pUcMDSbt63NyvFWvA82DEip3uiYBfa4LmLPuG2wNHKwqYjySbNbjLQhRBH1wBYZfrdWVJfSUxXPX",
  "key23": "3WoK7ecKFp8bkL8tX8yuFEVFWXPWV9ek6jmkJMjhj5tiZG7xHY4TZaiW8bSiB1U1f9nZeFe84inqM98HQXDFNmv8",
  "key24": "xHXuSptT3DuZg8YYaQPoMJkpDHjxzLyHndUdFetQjvg1hsKwEL21yD7wBE5t6aGfXY9X9arC1tBuGqMEHrh4xfH",
  "key25": "4FPi6wygff5WNtw15C4DCzM57uePNRRgeBXmZu1vamwvPJ5DABD4ai4vNxF8Y81g8g4AjPVevrfJMiCsN7DTyQWx",
  "key26": "41mcWYCKguoJiRNwDu5muPRGkHKepBULYiqTVvBhV1QJ1gEhZykvZ4VSTv17Xt3ENpXa58LzzVKtZ3hpP41dcncv",
  "key27": "2o9qceiCA7fCRkuRSAA9tRGqrgHS2NmS91Gm7LHWZguEpfZaM23dPfJBMLFKyVqPbpaqftaKbDTWvMvgP6A8gNQb",
  "key28": "BNn9A1uWnZeKKHK12zoL24MyfEFC57JMz3fen2XEwUicHt7pQY6eFLNntkvcTe71EnL9UByJ1KuEqzKUfc9KRBE",
  "key29": "GJgnboLyqeaias2zVLvHhbYh7TLPsPeKhFPrkd9oigSmphbgmi9rERLHiCc4yYAcTfsptUdECXDoL4gtZ2Vs3q4",
  "key30": "3AqdzTBrue1N5DrCHAUhzJaETEiBehTtutmsXfC4tBy6yqQd2Zy9gzhv8sanCxtUXvEtbcY5ZP2MzKjXyRrN8JyF",
  "key31": "PTCsm6LXR2ZkdmecWtUN6e6SU1EBSyEwSiydhMvvymNPtySWkGt2c3CesQUUmirUiu2Zzgys3EugTkguouBmbJY",
  "key32": "2cryQHBpGxF3RAG2SyY5AmUwdQJckRE6ANX3miepkgrYS4NM3kpmPyyxvjKqUdA1MDx9y4gKXGprY2wpXXzdarDR",
  "key33": "jNAMwaHXLpWDVzby4w3ap742B8D94jMK4zS3fEz8K7GAvVoL2Ho7fuknRqPUAhRVZYteP3WkYQLyHRby3HncyXD",
  "key34": "58aNvcN6wFcahD67zGqdAt4nqziNGgqjGPxXV6xp8tHY9s3DNpw9gtiHjW8NLgSk16LpG3yPqooNXVvKi3kmpvnh",
  "key35": "2A98W2sZ5JLgXejPiT5kdzWtd1wzvF24jQuc9XbFXP83WQN8dxkv1ESYfssN4z2sAaYjqb1fwQVq7HXFeKoiTk4m"
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
