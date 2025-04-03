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
    "2Des2pfX41htyhGGcFXELBkLv8QMdb5dxdDG7Qa4q53xMSJqsCz7mjEhkuzmYroYQ9s7wVkbSqcZ5RzwD4drN8fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bg2BLgy7K5syL3R9zuMdqqcNm8DJf8abdJzQwoNE3kyTvTfSRaAfABQ4gRGEGZ53z4HAo4Ke8tRK5umgDWcduPr",
  "key1": "4kk7trAkLLD8tLUyAYHsxSf2vLqkrWmq3ocNHMcxYLu78scnDnpz3cHfGFCoVGnMCEdK2LeBbhTdiXrffwBxnqeb",
  "key2": "5JFx9EEowbHubCRsnGNsBEKgHGKPbiEscNSVTxNWuRbVPTr8MC2WAuWiQU3azwP6CRF8KdMjPaiXVuRN79oiCsXy",
  "key3": "566Lcd9fsmK15nUHqTnY3v75dLwzC4w2CVrpzYA9dv6DWvmzbmHeMsSnYBYUcNe4gPLLBDtJtT3ksmoq5PYK2kXt",
  "key4": "4aaDy2P3a15yjJ8NRiiDj1ihxzuYuwwWLUmnDBFvbupHrJQysExab7pQRjUeZxAgTYFitQdUMCC5n6Rc9Ygz1xRz",
  "key5": "vfnhrz4Prwty4acECnsiQw7vduL8xi6akp1Qit1NuymMyf2KZdx8E99aRbeST2C9yiPCpxA8nj2CcLir2UYuBRR",
  "key6": "3H3xgzEcqR6Jy4LEq66N85bQoyQ2es7qRFvRfqDjJ9Ar8tDfzmgkFQ2Tx1jPN4BvrEpAmpWQLS22B9T5drmWBPaA",
  "key7": "3dxUsEa81trQHQ2FcSMYMWjEtR3Z7RTJqMCAFkxNCekgATcnBDSnqFF3WYsL1PMf4KoL5NuZPGDZrWjqmDgt1RD5",
  "key8": "cKTbwSYY1WPbFyedTmoTG6xPFfQm9qoY6FSedBqp6zvqk7aHeoJDiKFJc9Q2DA9yH4uKYLcaAY6gpGp8BgKkZLQ",
  "key9": "5ErqZRLo3QhHyZrYYn7gj9fsCadFMXwWiof51aZg4qANqBsLaDMgQi9dWEMa9se2j8h3cYyUC88HSXuuwo1sMmx2",
  "key10": "3j9jegFLoj4QBRi2ZyMsCiUrM6Ja8ysYrRvkQPuGuPmSVUypNKcwX4wST9F7RmFWd1EihiU66tSSGKGugPXaFNoB",
  "key11": "3KM8BPdkHBPxyqSn3WHfd5CD9Cn9Cr5jEn2FdG539te2Sw78yvC1TABJgAtGd9Joi4g9cwfU2UEnap9bhvxV2zkb",
  "key12": "SaFDRPSgdabAQtemA1Zgg5gmXiNDLnHJhqhzCxMa6UHPN6mwzcauZzvUzu8mNtREzKdwsUFjrRwuGhmedPkgo5r",
  "key13": "2qcdVupzCogwzePJ4zTiSTjPoRmYmYiezaERjHzpVXuWsHqBxv4rKRqXFe99Xb47h2RAEKkkSfGTvYoqrmQYV2Uu",
  "key14": "2C1tEksMbiQKfNx5MSR3EMVvSWe7DCvz4qYhk1WUbVqh7K5BNANfsQMDL8nNdEZBSTwK5LBGub3zbBRXHeS3DsY9",
  "key15": "5YWzgtUTfFawR7PrGA2HnZWGGTv1pSt6zyH8FnJZ434K59pnKENa8zoTpfosAYX6WhkVipqEFh2adqcLf6jQQCrj",
  "key16": "rMKhfp2i2y79Acw3SXV5S8DQurFX92SGrFdJ5v8td9GFsonWjM8j7sKQzDyG3uKRC2M2m5jTXTyWLs2TYwkS2Ns",
  "key17": "5H7cxEg48p2Y3yu7qn2BSqFXzLLeLEYteHrbY4ep2JuC8kHd4PQx4sjxV8LK5pjYoGN5y2ixTsrqW5GDmY8ZQp8G",
  "key18": "2VqSzsLScxTHb9HaL9fxXzH9yK9Gnhk2aNvcW4mPhPUjuz5DraydhH58tNsk5uygiDxc21FDVfDoh8Ja3rsKPQFe",
  "key19": "BZbgm2jfa5EmNYQfFgTGhkCN23ijy94C58aAsre4sR9to45kt7ZFP1Ycx4p64RQH2hT8rWf16SZKUwnniVaKEQR",
  "key20": "v3oAfJEbrxoGbJhu6rAEu8FPw7xVrYAGQYQ3yaFQzSLrJXhKKtcXLvAc85q5FwmAPNzRUQuiS4MAAANWXyYVJtC",
  "key21": "3C9na7i9B2nsw8qoQytbCxrawZBrbTJZtxvA7nWXYuiLEXBH1XS2NpEFNrboBkp2EHAoVW95TcVFBd7iARwtk7e6",
  "key22": "2SiXZywris1MXZz2nx6ddyAR5WsDtYZSzsU5EdvBt7b7n7sFqE5oqd1LipBvUhEYt7amjwtSyvvybbp7iZJqEQVV",
  "key23": "pjM77C5k5EiZ4LHMwxidTfARh2xjki4hzFkEXMgV9SRLexmTNqpxwuvnWhawAFdAjBrvHyTYVLojnHEAKj1r3KM",
  "key24": "4NP1D6fgpZQkVvuDbMociAhCcBUtoi9np5YgkRkoSBJk24ZapVrgu2ET69Lt47YTmD83cmeMKaXuD3rZ619nLs6v",
  "key25": "5rUewyugST3dSFCsc8bZ91XH6NHt2KzabLkCmGNF4rhSq6Tepv3RMBD8xdheqzemyC5Pa5ScpjNEDGBGeVhYrJfd",
  "key26": "31NshFmaJdcneoP9NT7BNwQUDwrxjqCWzDHFBmmoEFuEF39eiRRDt1mXKwnbnibkf1GeR4EmzBWVbo7S43xCWFA7",
  "key27": "V7JAnzkuB2Az4be6Qa4ts4rNN9UzRPDmkMZsRqUcWas3a7kFBdWtrM7M1jzJkFzdBu9KVWwggmXiUW6vWcEspDA",
  "key28": "5uzP2WReew4Do4mBn411NFD1WbNt51QxymQrZU9yffsy8ww3FiBDNBrbUVQ2ZKQXED7KJEsMzbH226U4iH4vH5vY",
  "key29": "2p58XuZcc8Th5zoFmAQ1PGkaxP1Cd69FXHYNdHMfMKd6Lw8BFq67MQ3i7g2UPX8FQSUL9LnYmpGk3X15RTrD9SKN",
  "key30": "EAQsKaQ6KugohQf6hkBjCsbYnEi6eVo2tpLPPQFYSAbGNbJNog63kXWGsi2iPo2BJPqgJJ6WY1mHqwbsrzq2P7d",
  "key31": "2Rm4EnWdiFkTcpdatKTHF8y29JeBR32bU1skSzeqEychjySx449hw2vgjzFdVgHmnvXaZbopybqAoGwaKgZA1o8Y",
  "key32": "4L74BVmqWBoi2Q8ig8aByDFp3hLRzHtkzJcUU8jwb1QdjKgehzCPy8MzEgys6KCNEA5CkBjrUa8DFnmazEGnnrc9",
  "key33": "2efv3fZwcrKHe6gg4GxYaFtWYBssQ5VXTs2nft3FM7wXssK7GA4f11wSnxwQcy9SJ6VYS3yrPixrnfpg9bXAvfhz",
  "key34": "2nPXh7bTN3569MEWyBTHiQcX7JVKWDuBAiDm5AUqiCMUzw4tjDyNqYs8rhuP6zgrWAZfYL2owwsWS94vUuKGfsTz",
  "key35": "4ZTgG4C5ckoJMJvvajLPBCU66NrKz4T2aYkLcYLmeBmKvcNPQS14QYhKn2VBbTwNFiVSkaDKyeACkpHryR6qPBjs",
  "key36": "4L2xg8vc4zoCqAPXL2ywYQDvJKzAjjbKExaF51aMucCbPvwfiReguYAwy2kTE8QSSbS4vn7nUeYyjEhyvbxecc7c",
  "key37": "5m9kqat1CVg2Tu8k42DgxA2gTcJM7pcNFfZcmaZkbsWLRvGLwysNdsVdM7S1SKJwcYchGcwPW5aEgjjk93civCid",
  "key38": "47oSCqJnsMG2734X7eAReCrbodKN1e5vzq334dopqgP8EDt57z9WkABy9C6W5oxbthJmJrkw7qgr7mo5FNvg3f8G",
  "key39": "T1in45jZsWzh9vNHDb8iKaT4kCWaTCB1PD7AyoycE996JwqVpRzmFwFA6KuNDeAMCGV81rYi2fTyRSgYoybF1td",
  "key40": "56hB5pq1BkFR8KBrDz3Mkui7LXsUo5XhwgFDCTWrGMeTKbQR1V9NSnqXFVwniz7JawXEigqC1zTXCt28HfVTmydK",
  "key41": "4Xb8f7CwEyVMrX8F7SVnjaVxR3oEN4E9CKZhyJLyAto3phMdUm5Xciqo4KssmYvXqZPyoMrPQvfVbN84QKGRXo7R",
  "key42": "5PzgSEKxv4LMq3BXk11h8JRUo1cCGPfXvqKoZRNA2Bs6WjFd2hJyj8erZdEJAMxTpDHAjm5PxZsXa1GbdiUCQ2db",
  "key43": "23HznMCmeZzNwjovNpD2PhVXAakPfdwuZSUJpEgq8Dw8f6CMg4m3vQ7T1ytkDJXuUn8ro8WL3VrdQ2ZiNGjUerc6"
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
