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
    "z3npEo6xYavzGFnr1HtCiEqWhFH5GKJo8ZYeDq74tYUa9ocw9XP1HZ1eTn7z9cBMcyPjKe28YKEUP7jWt8Wi9dQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kSNnBA5BnhigS8R8GaM1KEvbtfZeTGyX3Sn3juErqt9J1Dmi16D1yDiwHucCcjuuT5Drsevp2CAT8dbCFcqkc7x",
  "key1": "4fDTGH16j86MKjR6aP13th4a545MNNqj1xt1woTc4TPTiZShD1UyZooFkawvJVseSVY8WnJjYVkFTACc5BsF9vEB",
  "key2": "4kuyuPDwVbQVtE1R8D9i9dDzu7D4taC6387X9jJprnLgPa95MiiTJMbkiCoHwSLxnxhQobPqWfVSFbuwWYp11dfK",
  "key3": "4EJAmSwnnpBLqqDatxYeAY8anvd5WrsmApB1Vy9CzzW2tyVTkeZzWDpgWGmHAec7EqJiHVhi4jgD46xiEMmh1vmg",
  "key4": "2dpocyiWQKprAYUqXGbP1ozt8qGzLAQx3qjQFmVovepdsYYFvQyJvvoZoDzByxn375qByADMWpKfqk9Bpy9hpx3o",
  "key5": "2hiBibe5va8E1vzifWMXGr9H5jqabL8xGCAvXf14Atf2SUFJmmFuUzgCbrTqit6a17b4uyoNj5RVtTSpmu8XSCJy",
  "key6": "28aSaAFCpz1kNMboQ4TqPavF8BujS4QEiXUj1h3hgMyiAVj5rqbZLiGkUWvd4YGMSaVR3bhfABEtRSS3WuUUouSk",
  "key7": "65K3xgJYBEHZxKAjbUJjqCfPdsx4iHUsstVPWzqT2RWfiG4iR9CAr3wWQMhYijRUrUZtQA5C3nQ2wjhvyMjYcBMW",
  "key8": "frtmKKs1vqzbB3Wptm68U8tpKEfbWJtR6G3815eDBCLTx1mWH8MHPUPiuBb8iLcjjS6kznGHEK9ofU39dzUucz8",
  "key9": "3aLCY7EFauGiZ2JMXKHA8be6GSm4jW4xDtJnLe7PqM83iWViFqpwuXqTSL68ofptCYRnH4zxtbmbvAvKw6hxGrey",
  "key10": "1jCPqiWbkgvur4msyRDndQxEjNQ5TfYdpJdFqbkb23qRxMdei8YhrEvvWdsst7xBdSnNiWSdMgsNTEdUcndwN4J",
  "key11": "5bhDcxnUx7Ua3o9ShopVgx8FEAp1SsbjBhooJ6LTJPb8UP6796Fpt2TgT2gHvHH2EsWY69Bi3KJAUKaXPTXzcPzJ",
  "key12": "3JtXkpyAY9PwBqAAdZVG4iy1e3UAHqronrmGpZAfCTrhGght9c7zUXBZgrEcDqbJ3pc9ZE4Ra6gNEGRGn3qaxYzD",
  "key13": "4mu4XpmK3LnM943gQpogwEffMWbMSiPGo3FTrBdHZS3x2x1judFnLieP3LgjoYTFbaPaqJxjFZYDqu4M3mRKKsMa",
  "key14": "L3rJ2ENeVQ3LdtppXH7QYJ46pEypfqQtaf14bffs2uJtcS3Rh79vkiaLhFthPXDKKNV6XbXJJgkJh9NKrmGP6EQ",
  "key15": "3wN5WEfv5YtYCwMBQwUqQWKZG7j2UBT7BRk5W5ix7goeHFUaeEJ5NYEtQttCuqExBMcgVduMZ5DNgnrm4nMbyi9X",
  "key16": "3sFEPU847nXNenBfnup9EpKAcZpkQMwP8ZLsBFusXJEJJTokkbMooJrsNyPisVjpL3cU7NPfGkcw3137HGvh36Rh",
  "key17": "KF9YqFCvsqC5dfc8etLB3r2CQ28SEKUNKnYXCp4Ra3GibkaBz7GpXUc5v1mTPCA9cqGz4NfZRCBknv1LxQRW15z",
  "key18": "4FjoyctJAT77YWFonRrZkEYHkTAdUgkjc44QPFvRr4HE2UWLfXtCvFfejjjB5xhMwuc8XA3vN7BwP2K8cTPtGq5A",
  "key19": "3qedy4ngTVuY5brK6BgesK9KmYXVBKw1H7mhBuVDtyvLhqzKzTY7sVMSsUG6Zkk8fSYrNTGcgscxHC5cZ9TXZDeN",
  "key20": "nFiuYifb4NDVqvNEAtTzsMWJ51DUfCEtFAGhV9htgpzHbwdF9PACCZqApUWL9tST6xEk7P7MF3oPp2KRYpZ5GoJ",
  "key21": "2aF79inzXU9osWXYsHvJx2wwcHNzsFfPeVaLLos3XasSABLQ2rpuGNWM23Ct7aPZJkUJvUJ9nJWmeWgbVsmeQg81",
  "key22": "57aiCdT6fskj6tCFAuZj5AvsPsieNEi4Za95GvyFkdij7K9h3WRtpTa5XNCmrYB3DeHJ835BJXr3ZbyfFQAUa1m1",
  "key23": "2FZKMpeYaMbGyhZ9CF7YPoj12voJAAqZghShuXAWUw7SFf7kasFpWhpEvKKng9bBHM8HJm4gGWqc8Bo4AzN7tU6d",
  "key24": "2Ctc1kiWCSmtbmbDjPGdBrWo6guAiivMefnPGKgNKUneiwigBZTYkmtgo8usNFYcnpG2hnKxiBYBjVGK5XiLMx5R",
  "key25": "4YPc3WaZ9M3kU3H5iMnQVGMzeGpTMD8gJhURvXicLjX9wzxfdvNog1CW7sfVJ4hxGP5xR22iA9EoW4jTxhY8j64w",
  "key26": "2GFxUBcZdp9naUZ3rwvGoVDHUKG3aaP6cNGLznEKiMH6ja6AjpJ6Nn5u8JLhGYxKXegW3T71CmZNkDhU8EWrVeAy",
  "key27": "3KjM23xXuNbxiFSgK6DMQ9U2QpsA3aC32u7HzNKtWPaQJ2SAMuiVeBXXATkR5QZw8zcNKpjm9VDE4ERufbZeKnRk",
  "key28": "PyCb5RxFrCPzgyYMG2DSJu8eetZ8guWhRmPojodk8neDYV5AZgAX9QAujtEco35SKJiRGLq36G4C86EToXAULQL",
  "key29": "2EqyJynoq553Jp4SayMQxxExiK4jm3njwFUidMnEYiLD8n6ofSJwP9hBmc5CUFcy9pnP9ksXNVe35uaQUdbiKr5D",
  "key30": "25z9PP3p2upLfzq2LMrH4NRgcKvZZb4cqHMfUjZx9wQJzkf5zbnRe4faaEUHpJYiN6HS2Ba7Sq4yN4b6aMjkaNrB",
  "key31": "36GPf7Xdjq8W9Z54EdWNjzx252yhMjJAUcWu6vSK23GeU2BBDJth2wU1h73Jc21Yn8hBncGmJuaBhgdnPVXWqn6j",
  "key32": "5rW3rKr2tYte5KKuCxjNN5Zq1nuDoPM1Q1YViPaZJ8UXUPm3UUbFymfTHmu8XMoWK3xEQdU6vAwGENjTBYBYV3bx",
  "key33": "aiYojfRXSPyEnTCRqo1BygpzCk48h6vBtCAZ5i4cAzD5FPwytyfaALBtZRvzkGzpsth84MjgfvgP6BNCAo2QHus",
  "key34": "3BuNfNiVVSuNeK9FbxCPDyZL3stEgDzDQVJKDdNQPqYpev7ZL3TiENwkZhV5uH3yzPz7Ho6mnJ1WwzTKqf5mPcBH",
  "key35": "5D8QTthhufhqtoipuqSbAfAnF4dSRv4dQBfjAPvvjJRxYNTKAEC7LeiUESMRvYYX2kWGSiaKAAATNkkwMmDcrBTq",
  "key36": "2Qcrue1NMWSLRv7T6o5g4TyhqZjAGobRu68fpvGH3YracfFaBTSeuF4MCNNE7RxtE4aBgxVZsBVQ5BHXCsdgtDgR",
  "key37": "3t7wiqPzubYYZ5qnFDbvZYHbxTBZme9H2fkB7p5ALT8ti6ExhTpVbyWxfgpjtp47xTuGMGbxRcKXhYi1ev44p23t",
  "key38": "2bsrkbTARV8By6GcLrSXf6xFWS5X9T3ohHTus3MT9gs4ZJ8uLqAWNJ8Zc1kf1amezPMahDHVtxmvVhhRQLKGh1HJ",
  "key39": "391hHe4rJbEpfirHwo3qy38NgS3PcAv4jDd29G5DJL4LF3ktJmWoXFEybjyEkysvVpSmfSgjnPP8Dc41j9KhigUf",
  "key40": "48ewwNVBJXcRGcfJ84ifGnarCvBU7MfmGYZz7sp9cEUJauWATyxsGTdSaX6SUV7cuMMgq3YSKYzhek6nTSYAHLfh"
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
