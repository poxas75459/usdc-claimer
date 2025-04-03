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
    "QFhYkPjFg2P8EGonazrh8YbCec2r5fRs1ma3qkpvX8v4tov9waBtsaiHKPnVRvyEeAzHU3gnnDSGoafymng6dK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A3XycyNaexoVbhRBNmStHZ4Qe1Po7ByUXR4CnCMVTDvNTPrutE99rfEnDMgmsHSWidzs1NHKRXrMjzmrqAn9sfF",
  "key1": "VDC51zMy6PAMeTMvMXqDLgsHfniGbhR9aoUmhWM9EMMh2T1WxeWbEwi1S2jy1g2HbpLiBxTv1YhX4S9T6vkJ1Ac",
  "key2": "5FaZg26UvYepr7kVaxxTDkNCnktDDSbK53i2Aqq6DfRL3ZbeKx9oWxjXUmYtjVwjFwxpj8243abU3PqMiDBQjnYt",
  "key3": "rUpSXj5MvJrL3WwR2JrgKEWfra8VB7LubMXqpS18iyJraTj27SB8LZvRLq19T9Kr4xCFgW6FeE1Xd5k56ENhH3T",
  "key4": "5yXgiA7u6uYer4Vx49oDYXxkT6BrC4zdLhvpDkKVw7R5rJvz7m432fd4ESiBnseLi2riXDEmoSK33BaGV77ckK1Q",
  "key5": "ztMsxGeLQ4CH9pD8EQfP1eoqPp2ei52KKyXThjRnKJfQmvEYWxjGw3CVwGVzeq4MYNvsXtpAb9jn5boa6HJm9hC",
  "key6": "5GsBSpPiSymPVDTvHqDAjLdAimYigKJQ3EYnk1fz7Z6tR5AHL12RVdT8Qhq2Z1N6t7FCZoqLFtTfUo7258TRKXjT",
  "key7": "4aPeQLazaMtHH1qNbMuhqQiMdohpVeo2PeEkb4E4nCXFrEVKCkqHfWpAbCKPrgAfr3xQ48tPx4tCuof3uAjoUgQ5",
  "key8": "5w8DqZ1cMC4aYFwD9yXbNbYzHTRkyJUPCoSBvs2jKNxzZYRy39ht99M1BMCoXBxEAjy3rfGoSg24dWNj4D5nmDMz",
  "key9": "2BdeJhXKpXgiStbK73Dfq36cGzaM6V2rYu1jMo6J9urnRqhbGPxaj5oRJANujYBicbEnNg8T75GfmbqFfj3vKwoB",
  "key10": "362nfprBgGaWGTVpT8X4ZtvCHg1VVTpmQbgzjpxASkZNA5rqkVGQDZnZE8Jnn4qNrRZCWRWL4HVQ6tt6urvnA3NW",
  "key11": "wDsxYf6Q8V1Lrn6jKyC7NarkjafXqS4MfLfin1X2FgbDpVyyycE741dgr5Ts8sKoKBx8ZYZJJQo8rZortaCYgu1",
  "key12": "5JwYh3tUksNo2nFf6VmTwmQCT2ZmrQ1knBzideTfyBXu6AaeuiqWrrkwDCXdTBUNzgXz32UgqvcjjPcboqHVYuva",
  "key13": "4mXQ8jpd34VVuL412EWs3Aj211yjcm6E5VZwWiyXhdVnbi7unPxXJdnp5CZHGgMPd1Q2YUSi2pmfNu8F3nt7uZmW",
  "key14": "4DpcppxUSbr1HL3uvPVzfZYa9GgSXJwtGRKunfjEquKf4r8exY395cv7Ew9sHG56kKP3fQNAwP3xs1etku8LSvy8",
  "key15": "NbmyH9rBVWkcb46iv1uUsKhdVe4vr8RKYX3kUyeEUJ8JFWs6qLkzJU4exYCjcJobYqimJrHN4zoY9BL2UgnuCMK",
  "key16": "8Lamcz5VPq2ARajid9ucxvxfCZA4vV1oDSxp8vJgdEdWfTwS9AAmyZZysskK6yS6H2HqsmRsyygR2HTTBA5bEsA",
  "key17": "4j4ouL3jBn9Qt2ghXLz19uFcsEy1M4sirGiarRQbJkEoABVptSpAtMdyrPkFSCc4TYFZsxjFK4efAxadkXG5bbPY",
  "key18": "5LVExLDdZzW2z3UTkcP37WhjyC7LSbDeYtaJXYvHiQRC4nZoVKxVTUkDf78ZowtptmuKYGL6QVZBXZPFFVdmixS5",
  "key19": "4HN4wv4PaF85zkroX8JiJFYTPAcz8oSdA7TD74MWVaPm8xaA4RcJ4JemTSESwSgqFsFzXvwvJ8o9hQH1NJYjQdDm",
  "key20": "5Qogu9jBnGE2S5e4okAAkGmaUTV2bZjSFvDvc1NyaLFdL5TQHTf8wa8yGsKtZY2yLBusbXrzqjNyoSEpfR8B4npk",
  "key21": "ALRUSRqMj9Wkk5R52NxZYhRZj2x6h85XmtsWYAJLmGEuqyZRNGkFkJtTWWMVjKiBmgeyRu9UQ8et3uAFG6wQepL",
  "key22": "5FM5GPC9gLyuEVd6Qu4iMv1KNCrjmviVwLSLUfCvQtTsNReXcBQ3iUmKxe3HtjfzEgKNtxUUqxFokRzVVGuo2eYT",
  "key23": "3uiCNKNp8EYmZeFAXRCZ78qCcwkqpA7rbnNfrEVg8dCZfxJBYAKTnmMruTsdmFrN99mnFiktNTJrdUuaFc5VopUJ",
  "key24": "24ybg3ocHhw9VCAeQtWeERPKykpXDzYAxS22FztWQ1GLHHiXFdFjP3Yw1VTY4LdXGenuQBLFqRhPEtMf33UgG6er",
  "key25": "3sEKGDodKzdZforPC3nWssMVPdTyarEYMJ8z5hhU99tMR4jfvZFT7LkVRgBtJ5svzPw8XDtMdkTvLRovQfSMerKA",
  "key26": "x87CNwix2g3Zkx2GJqdKeGhxtahUmWu5y9zJdmW66exUxo2M13f4N66JtEMfxVpxE8Nq5SzNaEmt7dQUZ8neVWY",
  "key27": "4AMmdzjQxaeUeBXkpyu9Bo4iJxMKCR3mST3H7NXG4vtbLUAaZYSwf1nyko9wUr6n37FGMRd5p41qj6pYsXZcCDmc",
  "key28": "4PyoPn5KYC6T6Pyitv5aiAKEcVox5U1Jn7hRT7GQEFPpXV5fPTZr2MWXFtxA62zuMY1TKRFCqApYjhhPeem57N7o",
  "key29": "5jhbgYFbW7auiHDkH3bHP9joUvfWfUiMCKT7Jpc3osdzcpAkvtabx5VkFHkPmmnpwSLqhQTN5BHYssf7k86hD6uP",
  "key30": "3NUAkbL1bpPLg4t4dCo8APXga2zdc2rsxP3LXXSrvzj7eLAyLNXMnEdyrE3VfbEbcBwG4uLhStJ1Pos8nVTLoKVs",
  "key31": "32F9ZLBd22caN3uyGsUaVq8joszQMsd8TFUKu2fFyBJMBnur6GxfiaVX24QNetyn3ASwQnVY8cmZ5GGhJzHtnkbf",
  "key32": "4xHLNgRmK9SxjnkxBs1ksXMYHt8zAPgq5egL1CYCpFaFfrgU9BDKAteDQsHi9EexvYm6akNPjMffkCW16d1SsfnF",
  "key33": "5H1vJWmq9iUxLc9vJEzTJhqeA2DbVjYN13T9Lbodwussaoj6wG1awmiWCKYWUBmQ1LpYrCuDiGRg2Xx6XyZQYYKR",
  "key34": "5dP1948Xwcf47ttvLEqhY33H8QvYsikr7H64ZAB9dMrqjBJDc9Mns2ssihYhLGbmBSFJ7ekPs9QKgCFYwagH66ff",
  "key35": "5zFer4kSnUDgMQcyYEkW8rgutyG6e4bAd4sY4tnRpfg7hmpDS7CoY14EyabwdV5AECd8EGnbtv7r85eMKZxcwffp",
  "key36": "9FWQ8gvjqGKM9qgM8VtRLJa4w2bSZigGy5dvxjNTCM9ny5VwiEdxg1p2ewNmpgfvm8xZvqNgA6oWC8Zc37aHGbe",
  "key37": "Y2UK2Jqk2ShpZGL9bmZv9zJj3FaUdwYciBSW2vSxPUiEdMxS1DxgdPERricL4ci9yKY1K1KzL8nbR2VMeABwtQB",
  "key38": "4s39H68H5msA5oq1gF7a4Ti8XWz9eqo36GZSSspiKxdJXtirbHS5d4kFBVdifQucJV55Ec1XbQhVP8VBqRrfpHTz",
  "key39": "3PdExfekMvEBNDsrNeFgt7tP9p8jiZfM7NzaaeDkatMBDp2BKfmWbTGRdRFxPbHWBypSXp5piyuCvsyDVvLsiaL6",
  "key40": "4djALsLRmgWFaEbmySePTuJp4RP5gKm3t6KnQbg6SqoDU1h6836cDKwfwLSLv5SFaeW7ifPbVj9e7p8uKfxKonvA",
  "key41": "5gzfXFUZJ6WHqV3jvvJDT6bcsdwy9YYpEvwDzASN4BHk5VGcW5PudH9szaAFNxzcTeiPvaiYTF1qpCLM4YLgDyeJ",
  "key42": "412LnJEenTJ4FwYmu5TFQjr4kG5WcQDdMbiZ45Q4ao63KSPEYoKqwMeMXihwdRtsNQntxMbKwu4Jz3YR52rSfNoT"
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
