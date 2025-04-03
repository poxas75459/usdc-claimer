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
    "3B6hQs3PDbqt75GCzxrowPDncRBCyeN5kBhMRrCrQGwYt8KTqX888LfLryhJtKF48NnJbCoRNQHULhyorWnoQNTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8mb3gEW1WE6FUAmfVVZidHbhRMPtbM4TfJkynjAdc8ShK9iLgXAXv8a3LXYVWLGxRrxocJGoMAcYAnRUFpHMPaA",
  "key1": "43oXUqBF1oFBu1EeS9DMjK7jWx1f5MGy65fNZZt8PARCCVQW79xeSgQVBXaepjB5rtf2pqXtPg8ARxJ1xe5tLdNF",
  "key2": "42t4uVFWHuAXZKP3Kdghx55fL35ssd4qfUL2hCEw6tVy8w4DLRrbrHCdkuByFm3tt6Mz9q541x3EcoEXzhyb1xMp",
  "key3": "26omDJF6TRzfa7HoL6EaMbpkczBTXQ2oVsgvnGPvbbWjzxDrDp6XRX195vwm9UyJp29G7LWq98oxbaknM2ccVFDB",
  "key4": "2kiDBEYbpqu8NrRzVrDuT4GBh9secPSb2vvtr1jFkf142ggHuufqqnr3gCwyKgsk5nt4MgaqevRS5c1hzLnFmihS",
  "key5": "3Nx9Tt1kWptCbZCaXo3MASsMoxXEYHYpqo7Yn3qQ3cCSeEpExgBXzc72dceQkxt2kRVyeDgjMfEuW6sszCtGoUxE",
  "key6": "34E9v1b8vXPfViYFBPWrEe3i82xMuXDrG7xXZa3QW3sjptRnmrfGDiMeXwgpdy93DWDSmLMbAYWaaJjRNT9ahYKb",
  "key7": "mmhDkcSfYfJD5sb5GzfUMHmVzWiF6jQMuKTQZ4YisW9ZZNAXSHPwPbZN5sgWySH5ZFMbsBrMDJ8ZmmW46MRvpMc",
  "key8": "5xudnH29kkKqKRNxNytFFD3yQUBHMTPeY6hKY1hax1CX4aHndzTWzgms4qXJEfr5Fhs7yrYXHYJhS4CDCwscPZbL",
  "key9": "5eQjuhksi5XgR6WMXbcfVd6MaAqG6UnYVCxmxsGhQnryou8UvkpZaDeXsUcPNZ9az4kNAW5tRjwkNctXTzXZogPh",
  "key10": "5yd54PhcgonexxQCsqPUpdsriAA4j4mNwVvzeGKcfvqm4QWmdYW2zWjMRvgnkqZQxbP91vBUuQFyNxVgAVkiYtje",
  "key11": "2ovYSC6wphHy4RDdMYBxrpLFZpYWDZt5dLVeWgmTTg3cPbNd3JYTRiUjeGBAkZktiagkQfReQkAjBfu5hvGQGm8y",
  "key12": "2thZGdbT9CiStKtDaE9cFab1Q5Ha7zt8QYMWLT3HPjGQsUDMjtLinFuQrDSsfMZWTzFDKo8DXN1ZwtkXN69XgiXR",
  "key13": "4rT4daj45TXZtxXQ4SuotkCa2dZViCf6bqw1ovxnS2AQxozNGaQL6A4rJG4tcKsjJ99w77tQkGjqx3n4ejy2ocQh",
  "key14": "3zHfmNKo4PG8AykXP1auaTCjWuGNZF9zXxSCyKSZ4q1iL9VCrDDx3qtZbB6WyiTAuMB1r2jNhA1QJcKCFKKSxqxi",
  "key15": "5WzjwUoSzcqEgCYonqAozxj6PENufJW3rLZWSXgNHYy7FZYSUubkEeXTE78xYL8DdtDpZRamLwvj5mVS5XauAJMX",
  "key16": "n88zqpfpTmjd1GoqDjXYkzgnUXPPc1AW3S9HhtjCwYzJau2VSUNqciX1KbBt97GiZvo9Dd4Azte7gRXQ8kJBCyp",
  "key17": "hxFmAd5u1zbW9YzFSmAjGvsCH4Qh7zFbRnVCQhAeTgMxuh9YRUWswL9WsTTEmWzYXNoBYrsjsb9F3tJ7p2eRajd",
  "key18": "4QnjkhMCf4UREWENZ9gPFquMpLuJrYk1tm5eTsg1End5ynzUUCzsTSpMT3aikGGrgMC6zcu1jbg88VHbKnHk8eki",
  "key19": "4v1Qf1bjidwhMw4Q6mWXMZZ5ebiP9Mj79i1GDCd7fALdz19ELCPaRQSQ6Si4kTy7CFiJj3PRd86dh69pSz7y6AXM",
  "key20": "2HhKFYqNm529jytCtrRxAytxovr434qTxsTLNh6sjfLsvK5UWkfVmCw5KjhTpuuqE1tUmvPB3cy22xSLjcTnjCj9",
  "key21": "ygQafqDNKTW5ayFCrU8GeSwnfsy5omzF9YBMa8c2BzkwmvezVYy13sbw4Jjnu4XXBtDL9JMxRW59woUn6vWYmc5",
  "key22": "5VYunp5ZByMmNKiRg9MwfM3XBhub3KtM9PPEhMA46mCbbNQZ26sM6bSbzx7i5YeQCfRr39ouLHity1at2JjH6z69",
  "key23": "344AuZ8H7eR47iK19McwZYrop1vBgYJ9DN25GxfAx1A89eHg6eGRo3mpra9K1fG22cZxz5xxQm1zzj3x9MVUdsRt",
  "key24": "5aFyujko86q52L7sbQDpKwdVkD2jx53LrF9APLHYX4wdNYT55XKBpBK374aBhZUJaqEFoeUVa1VAtnaf1w9ZGk72",
  "key25": "3c8NG9jPqTTkdgjZubgorYn29PZTrp1At5NQWNgumLk66mf2VvDEX7FVzSwHbrGzTetXRsHPWQxnbEwX4XmKH71E",
  "key26": "2s6CVRtk3ZWXUgQpEM4yQGrB99JEFv8BgFJ48CmvfrFHLL8XtUMU4f98a11NtSiEvJUwp2y2ZmxoGwyBuVTAdXhq",
  "key27": "4jaUzGVHG3et6jfxnyCzRhx69yWk4Ry1j5k3Vnuei457Gmoy6XaqcgTNTEQMGJZJ1Zmmsvu5J2Lv7WJ3myq2foii",
  "key28": "v81472etDDETEqAib9bNkPFkfhJnTRZhgkA9DiV8RswosKCHvYD1KaQ1S2W9TeJBzeXHdwPkFbE7Zg3MEu2XDLk",
  "key29": "3XQeqLe2FkqbSkn45DeV48uWDa8AQ6qfAku696PEwpUhEhTucKbd6D9yvG1nyV5C6DgETeXy8xE4DwNEQjxDJYT4",
  "key30": "3wQBprwUKYjxX7b8oAGvVfCpXdKmujLHev5SjWTSm9Ancsa56rKiMAUVSqXY5ryrgsfXnFZs3hmU5TdUYkt3aqVH",
  "key31": "2pKgv7A9DkqiKcRTHP7edzJJrySoeXxr25xxHxtE5H4WdANbhdFFeRTa1MpoeqQVCMD8mYcSg4Cqi51ibHRPkGjH",
  "key32": "5bWaV1mLVKpyxvQANF6h7TRWXJ6xVkKpNQZUVPHqRbrMt161b7DLsGwF4UBt3kp2T7SCXSS796v6hDoZgMFAZyU2",
  "key33": "9dQRXkViwS27QF5xFpYDuwBKrN8dmqqBUVMAtLPCsNd41psrEuL5YqPwFfyrvJTCN6Em8nghMmJ2PuXhkdT29NS",
  "key34": "4oWQDASZxG7bpfFygKDt9Q4acDbzWMwc4fvg9vwiegzyp5g73gW3X6Jb56ZQoj2Wz4gG59v4Xk6PxDyK9p1XJFxQ",
  "key35": "dKzoVJivbGKZUj6FhjzKkWiKEWNd1DY9TQEZMCGQDQnyqq1xxYcLbk3fTco8WzfAgJCo7fpmyRd9pkh7WjP4qgt",
  "key36": "9DjyYy5aBeBrAY1G7S687EZR3WwziGcatiahXEUTqhUeS6boSwt63DenrnTAFo3TPDGRpGF6SgWf3QymYDFMNTS",
  "key37": "3r96na4u3XDxM1bBAHjdN7iiNrNV5Ba3tQREDbfnMp57sQwK7tULwtWcrH2ZiLY1VrVGBSXBbirr7heqP8JKuMG3",
  "key38": "56SwhR9V7XryC5R3sjhiy7h7jU3nUMEubuDrdtDCgikUa7vZwja5yLGNKaAwkyU5jp2R8TtNkQRyQLygRVdn2A39"
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
