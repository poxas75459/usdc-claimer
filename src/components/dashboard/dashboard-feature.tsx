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
    "5usnpFYJ2cQmKiSspmE1jtbaoDZsQmaA1qGFP9jCPLWmDrhaL4f7gyMwSeTTMWvVnWddUJh9EHpqJ8mKdFY7W7SH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gmiw2SLdMxTBASL7P9Fknm97Zwt5Bad7DWoBweAixEfGRsEdMoHYPoKA24qmRdiMrENcHkuxs54LPdQLxSg4wVd",
  "key1": "5wu256zsJpV6m1cHcBZNEQAKpEf5uRjcfXRj12yAyikFdL7D7ekYwRpwzFmixbSnbD9tG8ymLXzbmWLaZmrUvPKL",
  "key2": "4Fiag49t623Bd92dNNCNTggqFjaUJnCwuBYZWpM7qeZMbGSCREPmetJRAETe6ZtUr6TmbmF6fCNJ7ygQUEQKG7he",
  "key3": "2wwJgdwSYmdkRBGXiKc3uXh1zDokuaZdEdMCkEkMdnbJnJbQPGcT8JyZJdN7F1yaP7vcuon2D6K1kmUPcwqGsLB8",
  "key4": "5AR9PjnhCjsMtbjFXHmSUUP2mgNrhDfuh8XbkS7Tsrx5jveW2tZtF1nAdgTzQqKmE6caWQNVKwiRDtW4A7hYv2ec",
  "key5": "3eEGaXYVDTmiuev4D6SoS281gjeY3KTiDRYgjhMJfrqtWv61bJ3wvjkNtMFRS89AXRHtF9f1DzqFaHMPAn5JusRJ",
  "key6": "4EJPkZStB71EGnCAveonxJ1GmXHxxLHs7RdX7PVsXqU8Peaw6gnXwcXpSgxdZquvF1A1W3v2RYZSGGgkToDMikDr",
  "key7": "4Nf8zHDWK2Zx8gQKG7WM58zivGUPfFApqRYnvzQhzUh4GNm5qzgEwDknB4nL15h67kapHgUYLTbQmcYBKrVEZw3K",
  "key8": "5yWJ1RZccrsupEX3d4WtSs6wWLgS8H4AeYYUVFRJ6dLTiK12rb8TiEzPJDgLGKWAEEa2xey4Ace3mmRWDoKhsUDY",
  "key9": "4uMA65VbQHZxYnLkkKaw1mbdNmCP5kcrZ2yMe8RgNqPJg9AUNGpvXAi41VyPzYoo2Q3juCMN9v4cXAQEmCxAbGrV",
  "key10": "5Lc1j45yHWasKgkUHhFQtT4HxRqducBTJaxUCMCYN6tP1VPYnrHoap3r1AsrvxJ5YdT7sLkpMcix9oYJ3PrJDJfg",
  "key11": "3KGuWzbwdoc4r23hZ8QAhYVzf769Z3B1c3nhWBZL7dkNdWFCt98EWTez5yccVnDGPz4ktxTHEMS9ZQmrWENEDXsr",
  "key12": "3eWFS4VzJTqnyW4rxVXnnTDDm3rnVpLYrikVPBnQQFdNSNkpBCuy8ao1B77ihkJsGZyeWP87P7U1KX2wubnafepY",
  "key13": "mdwvw7VhjMQZtgj6Pi9yGeAb7GvuidPPH8RNbRUo3yo9wnhSeYBHNu4XGqnh5vLEtYfLpsV27B8aJrtUbWT5eHh",
  "key14": "3Bq56fAT2s26uF5b8nYGWykE7QRC89BycgGdUxvoEXG3k286BKnRoJF4D4bH37re9uLqyuxhhu4H2AkMWVqKpLAE",
  "key15": "EAHP3CzmTSo2R1KAaDquE6h5QZp5Vvdep8YrUzhMznWxJ16yfEM9iy4iRCACotSufVa1gzVqagY8FreCT3Aq1DA",
  "key16": "5bkhDaK4hze7E9V3LYV6Wm9KnEqvTbcRditnQYjp3vvtVUhFCmbR4eSzZnXouUv7RXkoWXH7sctgPH2FEw8pgT9g",
  "key17": "2SCpompPX95ZBHgKRpCNMk5eWYjvWFaSPsCKz8ujZHVG3q3WetXbfU72KStjkDC3iGn4YYrCZc7v8CsxgDUgbQVu",
  "key18": "66yBJzNADTDGvFH2HN4EHDnCfgz8mLbjvRXAwHiE9drDkVnempUq6WU2DSuHFnt9Zxf4szj9pciqwEwQ1ABVyKbc",
  "key19": "61JXWFZZkYh5KfAbvP1ZyJQLGRioXQ9VDEArtYSJVXHVCzd2zVthHKEzaX8pLyma8cdmpy4PTVirZVjjuCJwimkk",
  "key20": "5k2kiuGqX9cSr5cuiy8DMWm6mRqTjCoYeLoZ8QUDjH4SAnP3ghxnof5zjngBMogguKNpzbQNoyimKGdHfEXeEZ4g",
  "key21": "P6P1DoJeGXixB8g6sqhkdB4dgTEiP7yKAmQSVV3DSAbpCaBMpJL61LThbtSCtbrZDmwrJaqggHboSWTWN5EUbs9",
  "key22": "5DTGN4YJKZHfQSLChWdK3EKEXed3Aw7ePYJUGwDw7GtqjrEVskuRj2MCSbp47qf2PWiZfhq9R3wtapEpEK6urT2c",
  "key23": "24cPvNQqpT5cpP2DPSAEf8yyLZiL2E5TfPLZL6Pw1gAGT1bNF5T18hLVbHbqgK4QttFcQ2VxRD4TsQtttY5K2QeU",
  "key24": "3WW5HpaskUUymFQot5fCSs9jJH6CkN5UFPi3z8xPkbzYChg6vaaL1CuebgzXeyRQxgPKMACD8UMRZUcrhYTgdmwp",
  "key25": "2tYsQDTXvy7FuMZxGJF5p2KtBJmH1DgYaGFr17b3piwUBZkSz76fNyAgu7ryCk4EJVSocdEi8vP15U93KBvngfPR",
  "key26": "4fFTsk8SQGjx2azeDYR6T77KTpAPpoaNB2E5fVNzoHu8zXk41hXr685EMGy89YGpcQZjv9aP1HKPsPbKFfLLLgpy",
  "key27": "GtKyf8pAbDFRMotMFJYW4uJoR3Uus2vJD7BQDpQY6mtjEHvMC2QVPhWJzeQ5Nc84bG5yjVsbGxvsapEYKyn3u3K",
  "key28": "2cWoNcoqAJ5B2NsWc7RfRjbJeJW3iTmHbJ7d7K9iGpbFtnEwMxe3HY9j7d2Y56G4SrskXwuXVGmD577ue9WvAkFM",
  "key29": "DE96HrtkrDUh97SgL6PEaVB6BfKtmfoEL5RTz9a1r2hiPZxMk2M7iTnVRQQ6HK1s82hfngvJexAYEGTVDBiJ2ng",
  "key30": "5npya9wp5RAh3NksACw4Gk2VCk13K2CmPsUkfUtP3jeN35gugAB6EGFxp7tu8DA9ZUa3c8zxYVWSpT1UEuYh99QX",
  "key31": "5Vs72Ej81UDXNUFnk2RhyZhhDo8mPnpCcxHEUbPbNzP4uSY7Trq4MCMvHvcGfVnSuiScfYWifZmJWSKEKVSE5x98",
  "key32": "4pqm1h9kb64EcNt1LzhpDNkPdSttvd7QttpdKALC16ou5zYtSzxFmagS2NgPHpZfxaAuwyPrWr4knUjTchnMPwDu",
  "key33": "5YyWJNc2EpYpsnXfxrU52vGXd5RW1cgPj9cHs1kPWjdmJdyd8twJoGYdYJS5ew3syB435DnqXZiV62h1m8muXVBi",
  "key34": "5rBZoZz9fRTTS1o16NYcbHoqMWh41kxGjLNjVdaZpfg2pWKvhGYVx1veepbPKegVC9q8eMVoxn1cR15TkWYKdatV",
  "key35": "4M9zCXXJJBzHAkh5YhS2c8zA5S38ZdU18Xz3m4CCuxWYt61qMraFRQvmgpigU2Nw9QtUBigy9XSxwVUY6rFTAjhZ",
  "key36": "bc3TaPG4AmXKU1fNsemarKUGDhzVLepWYt8XsM6zzuuhB4SDSUjiLYvs58mdujw8sKm7AFVZr6GhxvkbdepwNS7",
  "key37": "422LMZq9y4FZEj1o4SvNGCrKyWBwSbPPyzswDwUXNSXmwFW2VB64iMiFitCFXpZ8VUWdn9e1c7sDgzbhtkHWLeaf"
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
