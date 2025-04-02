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
    "491EN9Y9DQ5ouBM4mSKPNDWR1snV9UMChRUTsASewkoex5KiaobrkUdn5EASpfEHXy1jUMPbCSfz9xW75qAfYE7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kG2sb3rRcSZtnr74SxQWTJU3sdrrAwJiDafe9k8Qa6SsLrAbQ4LETL8foB2WVWKZW3xhLGBjAC1bQ8CQNgLTeym",
  "key1": "2KkTUxDufb56RK6o1XPXfUQ33YCJkCENX7B8HjCJxSrVQSiJb7TJTVsExqf6LH6tCJm2J6Z61GiTkSaJu9FsD9ut",
  "key2": "44Chh1wzsE7DRWGHnAcEVeb8CVngNiycv9VZWRhjoTGGKtAPZZoZeXGcSYE1HdLugzbV8T6a3o2hpUrhTStmfLyf",
  "key3": "5LGjujxUvUVZ9bh1PdDLk9ghULA9jpGYpZRyNP92gAmhp9H83x8k17Eo67tNxUJK2bFFS7v736FsnApgmbCBaAZb",
  "key4": "2rLFabzfXqiTk79Yd5zjXCXyqWHBzJS5QEyds2a3Fy3g4Fz72eGbtapRXVECAWceh6L834abirtVvunptKrc3ChF",
  "key5": "5jBxhWqk7ZjJq25T4BMdeAxoQwhSzUXp4JCpzx4vdk39rAapTCz4pXy8Zas4nBeBx9ztYn5VfadkvKR5hJ1Eun31",
  "key6": "5eTnNHCXirsrHSCZeAq2dFSJsB59YPBN1mL8NofxQSu7gGiXyw9VcfNZEtKpa6nuwAAcfyaVah3y8fascCEcnrsY",
  "key7": "2DhAGhdhnwbhxq1VCwQSR5VH3py34m1wEV2WzX5P1ib3zypnTUM3eGoavWj4hLanTUpwLDNSjBdFW66zg5wr5KUN",
  "key8": "36jMydbFCwdbqAPTZ4PhyDrqLyos4jxsM9AuUNFasJ3T7fKbEYBKQwPkFDpfGvcW1wSx11vmTVWaN7VZWwqADVhX",
  "key9": "4n6LPGcCjnJtbcJx9c5chcqcf2YSbJLiccZGnQgNka6WoJ2g2aCiVdpdNtXyg4NGPrCxq7VoszhLUU6kNGsPy3tZ",
  "key10": "4rPHQ5fh98Jqp43jkhKSNnck4ZfBo5u5BvkVVnvCnuofSbsBLzG2ybjN8vwcASwbwoDmqMbjC5dMRWpxHT6YLpct",
  "key11": "GQiRe6iebdzayBXaWkmKN2iQJd2xDjTK4bRBSWrDWpeFiXoNUwi19DW5ooq7V19PMTJ6X5vqJmDSggBCmW1K9u4",
  "key12": "3M3YGF63bxXBK8jJpkk8QpZ4PDzSQaxrpPSwMLheDdgM2hz9VifNnVeZkUa9xk3G6VjXyxi5UiJZ7rPeMX5fZWTn",
  "key13": "4qoLf776qVn8W4k97ikmv8U9Wz4fiFvMawubmKzRtx2BJmg28vFPK1nKNYgouoN8QNcqfXnKVJYJLezSdMSUzjFq",
  "key14": "3Sp3HDP2NaJoHGyuKmLRaMdiVAZ8z8No2t1MUtHUJ2NFXPPvSQRi66BrfxZsVqSJh5hCXQ4cj7DyS74717EztyTw",
  "key15": "LLX4VF7P9QWbfxrZMqtxziVGVmghHm55bApUybjsytT153MXv99pheU4C9Swd7MGvbNvNCDctNkqU16iQvXTFXV",
  "key16": "3XHTbGb62CH8KUD9nD1ubKj8UFopQxz84tuUMvfKm6nePRGJGRNsWz7txEE3u7uZBx7zHCW7XRTA5UviCjnXyTy5",
  "key17": "5BB8n8bc6DGNmuLrS3uZP3fsYsaPTCVfeWp2sESuN6913HRKcnb6VGipQg1svSLauXNqFQmbQi7oeGcZRvEeNP7R",
  "key18": "3hUcYYbqXAtsKC7LNeS8Rn9dM4ii7eEKcmySiSPsxRYxFT4LJeDcqQAyv1A5dbcsSmbwZCDQvCT5LZESDz6erBzr",
  "key19": "3ZgJGHTPkShNr9P4jqLpPs5XzYKJdw2BEC4QBNCKyBFvRPCB5MV1jfDvjrkv6x8VhqKPRv4P9HyQUBYBFMh3nNFb",
  "key20": "5vYFnXd7SoxUo6yDfuoZ16WPkipweobUFNYQybx8zxqfAzMcjV7mFYWmgRLrJgDpaAFT6Eott6G32JBuVVZhJVB5",
  "key21": "2EK5su2CrmSNLdqSjJAzQFFWSovbswFuwcr5yrkZaxEzaQLFNDfpn5HaCF9NGbNJ5Dp6Ddr5F948aPc4HCNw29N1",
  "key22": "2tayNRp6kZHPnJVBZx1Sh6iWkjUx3irVVWKpQrygoT93Yk12AWdRm9vJ8cwL5kiMHbHdVUTBcPRawEwEYLH9ch1k",
  "key23": "2cnZkdfAwXtkjbTsVK3BBVG4u9My2X8mLfosJdR1dPYcwQm2vmF2jJADCiqRS3ZRttbKg1jXjw7MXffKAd1ik7J6",
  "key24": "4wQoLar2hQA21n4dzk6JtA5fcpLVk8StXchS9rCrY9ByLPxpFjhLy7uKATUmLKznfjWaBwZo9fb436ndhfhn6eb8",
  "key25": "eiqRddStt3ZWwTAAvHYWh6rRffa2B5maW5TRs2PPCgCFSKhgWyiqbURbUkr5pDR8o9w8r3hXchxqocabz823i8B",
  "key26": "4edgBokJWeXarKfjhDoVdvSBzj5K26KuirsFFGJckPmCweKCk6ZHRDR4R7VLaA8u1K2Lq2uE8oWDgAkmXQWUTsjC",
  "key27": "2X2kQZ6xHECgNZs5LeCdaHgpfo8g6iZDBL46YAuMqZgUHkeDUVbEGRWqMtVKopCTbmczoxwraAWhY6ophVELZJxy",
  "key28": "5gq1ZexxXSKTjubr1gbt2xF7Y8K4jKPK2PvWyhVFvwq5E4wLSyYyBZHiaEfGw8TDY5MzyqpTShYbU1BodPJsypu9",
  "key29": "FJm6jX75QcYDYYNS9wFGZakrrZvbFxmr54rZGbDB1pXMXCasAP9afrXre1gJg8KKEuET99tknbAEivbWzCArhkd",
  "key30": "2Pk3MZDt8Cix2qkQuHuEuA6EFLj8fZsqgqnHuPv9fa1CCTGyWvFXBzeH7QSsfRj5FfBmnwKTcybyS4TvFtvgDoHM"
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
