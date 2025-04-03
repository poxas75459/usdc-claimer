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
    "2kotwKcgdGoUDqrznYoCPqso9ZuwdETCPZvwMB3DTc1yrxiGyoGSuCMUA7DA9EUC8hX4gLiFaxTqtKRPMXR2WGY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38JQSRmcSU8paKjfT7JJFbavLe1ugYxnXUFekMYDtVU2dh82jezFBfA1VPa7UfySBa3mPRKTBRarhJutU1B5jwDg",
  "key1": "5AVtQRK7zhPfU1WX9ewCYoG7n7f3vPg2j9WC65oh6PsEYkjfv3yG4xtYjwTuDi52WCGtvpLL6UL8VcLQyRdMQPyk",
  "key2": "8ya9TiSTUGgqHVafokJwsaGkmuwqvW3roGqwGjcxnK59MZxrTxKZPhCFyfw1dHcNWmptngGiGJXqxQicsqX1mnJ",
  "key3": "2LFFyLXR2c54Z8XHfVs2BRygtHUjt3ZGTPY13xkHagevXJ4dRSsE53m6pbuygGgdJLor9KphXmfBuZ3w9k6qicP7",
  "key4": "3b1YmkHvozqt7BsZmQkBDLCRAsG3DYFcsqxC7Y9htmCYYnxWDUqjubMXiTxLMSAMe7i4CfRHZpDroqptVuuoSFyb",
  "key5": "2GMiqgvkiCNQiRupgnHL2FoP4nezbEBTJVwVSR1Q8N3eAy822K6GswgAZHdXJmhgCgb3c8MSWx7bUoEt9DDfGcbM",
  "key6": "w8gUmkJPwF7XTEywsnTGvVaiFzRwtgpyQS4Tec2pu1wnxtYE6beHBDzwzx92qRqhVgfXJKocyVe32ZpecCmc93V",
  "key7": "5jonq6mgqXfT96umSm2X5bY2LX7BtB2rnBms4VAPyfbbqPvHBUCLp4oQJ6AXjeRKF4FkwnmEUUX7eevM8PCm4RPh",
  "key8": "369b1R3yE4PEhKPBvd2F6AvfGBEXiHDa8ohhnYKQmc6AcdmMKznMVV6MouP8bCWCv2vH5TGUtsWeiCkuj7Z653pN",
  "key9": "5pcVHUp1WHnLXugqPYyK3SoFcJTmrGaKdkWLdjWdWpCoCuXmfbhdMMRc8USFvQmuGy2WKnjaGshNsJ1DF8pZM2Kb",
  "key10": "2n1AJTyWjYHDCugBcSMWQu5qWFu9RDX47CwukiQ5Wn5o8ybXAk5pSbdG6WSy5GwoH6aiRwRrAtNZrpQJuvaKpMfA",
  "key11": "5egvVZtCqBMTQJV2h63qbWo2BtLmmKa4kwFPgp1WAtYRLkygEuQJQwwxxUy5MNWJ929NksS9EhVdfUUGC3TpaGoK",
  "key12": "4L5emvVLFrUjpK29XFjv6y8T3sgbhfdW7SuNWLMJA3vCU3KrsZh7mBkCTvujvMza5X54E7yfyuDdYiJspKHbhstJ",
  "key13": "667ft38Y4McaWduuXWyV1VeWaY1GhCeWH8YSxKR2dLgjm9XAkk68ZHCjEt2VdTgAHvBboDVq2wmdNao2grv9hpWG",
  "key14": "26haJBJN9oHpt7AcLmyGQXxKNYu9K89RhjQ46p5FTyJ4G4ixjcwoPc6vrYBCShSvHoG1zqD6tzGii5EtJcwWGW1Y",
  "key15": "5pXFHfsuP5DUWMRBpGmqtp4czmdX7fGpBSuBhpmhi6RQsgBNDViQvegUsDJnG817xSoCfrHCMpzUoqCkwTXe2T4h",
  "key16": "3KMviHm3nkmFwkwyKG5SEa8iGAgBNfccC5dEBgmZLXrRiuonDKVxHAnYtZwuQ3UA1AcKhnmjzKwxFp5NvPWiXa45",
  "key17": "5sSfAjykXv6hwgodZU5bJiqC4HZwikuofZv9AyWt9DgnKCQw9M9oHfDD7DQtZ5bd5hFpopEjyVaLJ1qQVLYiFTrv",
  "key18": "4XmA1UPd8hcLcZouCYiNjWQ6wjVdvRRGEiEUrnzB6UkEopCEu1MxZifHjH6kb7TxCSZnva7boyBtcE8FgpDaCQjg",
  "key19": "3wed2KnYHwdDQturYn7eub7aaHk7ZyrS1kemD2aw7him3a1rkqZ7Z5yqtWNSv5ChT2VjP1mmtbPrKGZKYLYtWXmX",
  "key20": "Z5V9ZjfQccSCjnkq24q9312UWLJXSZVwqJ27NtZpcmsp2Cqbgkh6MzFuEZsqokeXa9zFGzXa4EyHWnZAcLqnv6B",
  "key21": "2xvGD7SX4odFwmGg6TuSDpEMdQoFidEVuApnLxtV3PUkGFxJLXbEvM34JaGh11VBHkyMpdYDW4oZD1wA5iXrXPSE",
  "key22": "3Ynb9Vjz8wAgHgGfTiMQzLuWvdTQJH3HeP3qUemQGQWL5xtWsZFEcJypMPQP96WPW9R8tGADJaYtKJheHNMzQCVC",
  "key23": "4TkUkJYaucwmXp5MmbRgjeennhEG99KNEQQt79vV6FbnLcJ56pMpMCBwgerysuoWS9EukrYaJZaV78uo6GS46Urp",
  "key24": "WSDWbSh837FWTpWZw48dAZ71JaVTgvfWAgZzi6GrVJjJxdY7uYFmoAYvNrDPCV4vA1yJcezTiRGSgr2b5y4xrBJ",
  "key25": "5nEcS2K8oSGUvipJFcE4cwCjJs77fE5Ng92Dk2oe3uf2CHP8MXGGhHaUGS2miyQYVPuAhpdzmBTrRfDhCuouuZYe",
  "key26": "guubf8FaB9njndh6KvTvQuKLnv8ZdKPVQ9VWnYnZBQt4cDd8VQ55d9STyP1FBTrebY7dTSMNAsHfSWKPWGjwwGc",
  "key27": "bwktPpdhabipyo2JmADVjDvYMV1BmCYxSg8g9jqummNn7jqV6Kcmfdx41TSXbaV7iPJ6NfHcrXAQk9UChkQnwwg",
  "key28": "4eyY2CfbeAYdcpvxZ1KCLzg5gBBjaHipJkf8tQTn9hqJxk45kh1CHGmw5sJXX9gjjbGgMs3BazZozYx3Fe4iDL39",
  "key29": "8RjXyTtsELnH2pJhtQJyFo3SGL6S8NkZ3iW6qRS82seFuae8kVsYvVA4ZFDCvwh6Pq2MedaKAzKNwMxpATM9Juu",
  "key30": "2zotvk619SXSYpbLwk4rDbnmhboyK97trqaUy358Cu444uMTMq6jVe7UUCLgZmiupjS6QNLtYY9v9r5qJmNimxVp",
  "key31": "5cAKDCijAMqVfCZtpbE83qLq4wijb4hPhZoPQrdpMHf4S3zVVZNJPtvgPexDqPNBKj64Mnopoyp7eidj5z9a42bn",
  "key32": "3VnVqDwwP84jUjBDhYB7gb5xeYmiFdVVboMGdU5Y9wDHVzE4ZhLXMba7TexJwhrfkknZUWpJVoveTxHskmUhYWPe",
  "key33": "jY1p1G8DR6oEcA5QteMU3bWN2pwYxPsFbZToWtt36wzPL5NHRcYR41ZPGQCAWdJiZw2mzMrzpqjJe7yStrEdrrB",
  "key34": "23tiL45JGApjpu18UmskW8oPWKJnnkrQKL3z9Z1BDvtpG9r8CcyzpGtJCcXPmYdNNJyeKXHfHvpXkMuMcAg6bz8T",
  "key35": "58rRF2QmbKjDFaQbAyKtb8uPBQgAHA3vUNF5hxaikYx1Mpvrg9f7XVjQZarKYj22iqLYbdUnubtfavC6F93F4rN7",
  "key36": "Z96idqCZCSQorvdM6pB86kPRV5uUTSpi6UHkcSYQZTCjBdH6FCbfcNqdwF5m1PKaS8BgnmghPxZWz1YgGqxR4EY",
  "key37": "8JbV7Vj7sGQZa6fHpp6rbjWggiP2fKHmbpGNcF3dkUyytyDAxnnipYmrcJLHLBYm3rbJdQtPn6KxxpdNic8nNWt",
  "key38": "4WJRB6X4Jd2rhst8RcoJBMwQbbeygYDsL9BwPavekcMe2kpfCjQvYT9pAgf41ftWuNGUuacmqLjimFRaCnwy7uyw",
  "key39": "3bGR8fRBM3hVciaM5W6WMMQXBUhsPjP2t6tkKacdaDF9EEKR6nt38cip1Bx7s9Kc4voghHHU9bLdpoWTSNRgjjUX"
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
