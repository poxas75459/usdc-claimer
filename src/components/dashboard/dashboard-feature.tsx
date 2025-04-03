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
    "4MzXMB5W9X2wS9PLnrijUFv9Rtw9Bhqmgo9L51U54GbKyfQ5HshpKmyat3f8PnACB3BxmbjFeQRg2x4YBYTSjPSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59cKVkN57eT81oRnjq7HA2syFRhEeqwairLXQMCthVX7zb2YWDFUvWTPmthAChD5kxtummEa8gmYkCiVGjmzT6HV",
  "key1": "4WPvCrJ5sHERbVmAt7wpHq6qYwGmjEmmHy4hfSLVJVz6VKgaybvpdikkTgVNV8fMyGNmdidGw8GHd74CJXDvhoPA",
  "key2": "5kyQn3ntk6nKsTGirM482vaHwwAjS2SFqAKCL77paDZAtkEWJ85TFw3FUAsQ2zBukCu6quJjoiPF3uk7xxoFNrPh",
  "key3": "3hWqmjeS2WDRpDMHBWWom6fa7LnFYALLQ4B342sL1K5EZtNHShozteRBsCHgvStDHR3qrmop4tnaVrGDddRrw3Dm",
  "key4": "5bKfmNp8bZpRaCh3jC3C12pR3XhHQVJvMYMVrj89YeZ7mfiRw8RUiJqox5YN3sMAxgZiHgJquukBo1ZAriqN7F3b",
  "key5": "VA8YHrM94Bg9wNt31s8A6w9LB7E1DxRM3JMMsVdrqZWMjea6AutNge3cdbAGAhkstY5ZvCDECDnRyvBP5KkNamg",
  "key6": "55sHHa8aYUWQP74MjygZMDG2ctvvHgfRavMiKANpHsGU7r5CzLodRPYHsYPeZg2tyy2r1yDAD8grFzqEATLL865T",
  "key7": "3Xxs4oFwUvRQSZFjeQdSm6x5SmpaqMdTWMJQnYhdwT7KYHDYzHmdFyZgYryNUBCfnbVALV3aESATxg9zm6zj2RsW",
  "key8": "4P33orHNbtVYzEsszfPrJjVfJFkYT8mxdgtv2di2Mkdw5epbWKogCL5o8oysMMXn9VHgDTuwjVc7CWnVBuncRgLT",
  "key9": "4SRQ8WHzWveAPXcVgAfQfw9otsNojiYhT6MAzfNznfbXzZwFsY3PARz5Ekon9QE6y97wpTp7G4L6u1F9CnmLBDo6",
  "key10": "2kwUPvuRXnR8SteiChFDnFhPvqyM9eSxajuu6XBqPP1meSSXzxR1vGtSBcCTMUwejdNqWd5m8ewpBH3jeZMh2pfU",
  "key11": "4k3EEUSvQavpaea8q8zsVF7gqxxPuPmGjDgAvpdFQdkyCw6iecGRK2drZ7kpaYj96RHxTY8KELShsJPbZJx9u2Ke",
  "key12": "3rWeremJEW8VW4b5crfUPb73TbmXhx83tpL5uAgoWo2DrgjH94uRyyFeT2ghxbCJ3ZcmQkLbw4ZnbyA7ZNQtKiu7",
  "key13": "5hYBuudcPNMEV8HZdee8GkR4YkMxhtpaPq21693HnvgtnjGXtMP2Skxvt8XjR4UkestXhHe9yfP7smZ76CpnhxCS",
  "key14": "2fvwxei5yfDKwhgt8z5ekvR4jg8ghwyeFHP7WXsm7d9sbjGka6Rs7N62f9RiJxjP4uCMmPnS1X3YTet5uAcP3LNx",
  "key15": "4vo5FDa11xnjygCkCGjMVjWi3puTYojizQB3rDuMGh9ustX6Hh7skb2zXG6VNa9P2iQ8r4wAmGpjCt1cTyqpWXSw",
  "key16": "3NQWiuXdSJHjkaPjMjQAB9UKtaGJjs4dRcYoTsJV5Ft3XficFQJaAm7YsYLTJwx5QqMzwvcZMnoqP3Q35uUJy6n4",
  "key17": "4C9DhnZvuPwiUznNTj25ezrkE1pzMDmkFXV31RV1vjhBarhxg4viXTYudZXRtDhmPhu2DEgFmnNaenyWzhror6oG",
  "key18": "pYK5B22E7KSwmHSV9AfuwoD9faDWjLL4nvYCSYN6guaBaDxydPJFhWkpyTh3w5UJJAagamqSbQyauq6jx3HHURM",
  "key19": "5diHr6VCWerw9WpGukDF399vd2C1nHMbC7L258inN9Q6637fw3kYKSRab3WaD2yqKZM4faysYd64nMQjUBnDz3tf",
  "key20": "2j6uRsuMCZCD2Yf76hKscwwAE7J7nPuiETvD55JZdCEQ6X1yDTQrKuuRd4rNkUbZDpE82bk5F5wXdiuVeiCB26Zz",
  "key21": "59Aid3VeeFPLrUQwyjCT23ZFoZCBzTEGkW16R9DnM5XX6xn6yGdP5Ax4wMHCYCee63zE6u6SsutN1LVVCQSZ858G",
  "key22": "5DchD9nEkrB2HUGcPmcBz5GQrLB2fsx1xpaSABq5uBaexcb2CVmWEHvGm6XmhTCrTUn82TzSEoLyQ43TkJKoaidU",
  "key23": "2N18cTJYV9cJCh9DujySogsdom8fP21NdVwN3JEJGqmQCb6wHMxDrHUM7z3gZDdzMNWJbQn43xNpgsgKSY5sGdP9",
  "key24": "37Z8RYNXmBgiPUmF8MJ76K5dPUj7VsJJpR3XsVHu3WYpMPFwZgpaFDypBFyfnwCRQvudZoU1j7t1aRswTyddTddz",
  "key25": "3SSj9KbeTmAt9qv8yuZxw5wwDYQw2MT1SDmBqKVbzDcJVWe83T9VVfqiPqfzPsuMPMQd3kkP3ftzQk6pUNUq95dC",
  "key26": "66y6kSid7tDJ11BntnDBioArACypLFDWNwmPozBB8BDJDDdLor3UAXTgjbxXFCKdaJeNUdXk5xK9ck9T9gyuXWfi",
  "key27": "3pe7rhVdDfUW9Fx2Wh51Szju2ZCHtzgNdBkEn4SMYArdNskFpTzpiGpP6U2rH4zzkEKCGFJF3nnAY1sfewAmduBB",
  "key28": "5C6fJYmfKKDosLCWPMLZ4mmC6XBLUyq5YPmP6TwckhzUAN8U6tizMpgUQf1z8Swhkjqf5uwNxrjRZBLxivpBNMp3",
  "key29": "5acdyvxp1xBqgfhEwHM171CNbKEhb55kt7uPGyXs4ZXsuJ7Dj7woxmT1HDZQRTuhQMPPLDC79NVbLmDBavUvk2Ex",
  "key30": "aLbc2a7pfWeq6v1EAR6RGsx1xvUjpRUGvxKYRWwnEJgXYwNMXGWvm7usdN3bNvZD28WWDDq6J3T59dxkYncMUU4",
  "key31": "412dU5Rnwt6sDpUm82sfXA8fX2ubLrV6A9V7CjXRtieUKq8mrYrZMxdXvCzLYpmpQTNhDtnSs7qQtX4GaMxwWZYG",
  "key32": "5sqcTW3dsSeQYyTtvEtDAPCNrqwN7rEGXLq7a9W5NeDDjfHxsGtykPWuzhRLndpGDUmf8Dzvj1KHgr3xGhNN9tho",
  "key33": "WDvyH8iaPrtNFYNkaFEzvY4a4uRSr63MZkUdotV7nfCNB31FgfbZf1YRFWHpVVX4nYd7cPYCb2GgjHnHgm2boi5",
  "key34": "2BK6g3KJ238A4jM31zG8TD8BTjKDPPFr1mG8L2owc7vpZVqgsCo1z1awgJzQ1N9oiZvYk1weHuTFzuPNTAiUHuVS",
  "key35": "dcsbKYdQPSJ1MFTBTyxBv3ApNgkrVKXW15FTzys6ZS4UxKpciF7osGXJSvMnnEiYkXDPDYXsmaqPbuPMpHgJ7rm",
  "key36": "3JoV9QWXmeBnLr7FtW4xMBLNFAPTVfuvaJ8M8jTgbanjbd3RBotWWpaNA9qTDe8W4y7ZvbzwpMDAu5KR7fCwhLj1",
  "key37": "3AWgnWCno73hvB6S9XHS7NM83F8WT33FngyVvyyRqUeSX2BMUsPgUHHZ7Kb8V3FbamFpqbegDq6NhLeykHg2y8Bn",
  "key38": "2vFNNaLgZvBy8z7kiLCazVrWq2rCoQTw5ht1ndTfpyEJL3Byy9mgK7Xu8BLVpdwUqsrXp6L1B7MjpTU3pmbUf4ST",
  "key39": "2wCmDoBAbA2DZrLwNm3ZXuZ938PoySX4BUgDH2rZtE8ab3fHqzoKVDMyTtmdrqVeKxZ5KPZG6VaUYrWHSY1wvhVK",
  "key40": "3v7PkfFLdSWAEKssK6DchtpbmPdCzK3F2BhcYg2mvdETsBYFn9TAtbmf46KVjSj1ptwTbZhkTVSGTZQdCTTMVCca"
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
