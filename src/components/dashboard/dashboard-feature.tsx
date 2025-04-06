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
    "5W1jyyKKKcbnjFkiHyYC1nHVYJCdgXRDnpJewdz2r91xSihJcABQPKB4nMowo9CAXkTbBZK6CA4jbTFmPSMTH8FZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wPLeYwLtZh7YJr6QVYKTc33xeRSkQVnUUk2cJGsyWBCrsdYnvNe25RPnrJryPVTBcF5z1aqNGB8AVHM9xupnYE6",
  "key1": "5d5ACUK38xKMYGqDvUvHy7VYCCVhdHuxNnV9VCMXWT7b6x7BmpRRBGg6mPGd96RAtky8tUwSdwzqK9Kpf1azwKm3",
  "key2": "21fjwiir99W1e67sfrrGLyB6yqiD7TBv48BKmA5Mc5XBwcDZGVtcgHdByRKRYFEHpHojnyEBcN7cM8TsrbQkF84Y",
  "key3": "4AWqe3jSRpGqEYu7QrovyutkpWVaNFHBV2SiyQH9qTuD81vE1P2HHAmWJf1RuhQPpareBgXumzdmAEph3UmdyhhZ",
  "key4": "AwgraHKFVSQoYgVhhVTA6DByiZcMrkU1xqY9F1KZ2wwbLEXxDKfkqabeHdAmhxxiunMZCeXM5RVoz7nRQr2bA1E",
  "key5": "7XGjQNX2DpvyifZmibjXY2X8g5X9CaJWw4WfqxCjy7SBtx4KX8BfNum91Nj3v8rj9BvthhHHWdy3X4SA7MpUEdm",
  "key6": "24YPvd1LaA4Q9DsL62EEDZyWUsnwjZkPSWZaGN8NiLaBpSKGWqvV6qARkDKS64T3nk97j61hi6YxAWV6yTdmoLmv",
  "key7": "5XaG8kJqkzqtHRhcLF9nayo8JAw4KSPWS8vBDUMnqcMawLKF9xtuAsVbFjpx5oTWeXRXedhzw6DrMHWv2WBYbAra",
  "key8": "5XFVc4HYZre2QozXN4Yn7qpBMJ2o9nhrTVKG3M67zUuhwKtg1s9sCuHRov4jbrg9tgRckP35zJM2eY5o9p1Ex8Ma",
  "key9": "pG1ZWKHypHTEDgsh1ZWddBwpRJmPoDtnPeMRHtrxwBqZCdhj4gQAr4KpgdUxVRUKGkyuthRcsEHdtQUpK6zjHzq",
  "key10": "innSbtkc1t2zzuZj2F3kySYM1DPWWDFGS5GJLJaMQMhgu6QSaPjhv7UCAe7S1Ks5yMgHZhsXo4EJs6eh55AsAHZ",
  "key11": "pPnmbENGGgNEgkikVJBJNMeUJZnPVZ1iUqLVjjSgmRpotsnPyQuccBMZXoN7qdKtCwHSEbmAwyZg7tZhVHeKsbS",
  "key12": "29NdLWo4q1urmCUkEcYVLz6nVxf63mtriUB11Jxe5s4fViXgEDeLAKUbYrU3smVadTGWfNvXu29TCWReECM4dA3E",
  "key13": "42PXeBn3XXAqQ6VbeB1TnHon59ttm8dfwGPk5vHJsJv4ce5zZ96mZL69K5chXVSfv5o4nesB46B8kJVH3N5podYW",
  "key14": "3Gimar7sJX8rNwu2J2KuhXnSpBT4pHnVarJvBbMgZ6eat7XLYGk9pcLFkpJ9qng3C6aUdoG8oV4VCGVv4fESeUxi",
  "key15": "3x9ZQ4Nv2mKyYzJ3J2zPkh9Q8gYGAPDbZ8aos4APUqsPGS8QvxwUQiYpb154nGk31J5HD6E7ou1VLjgq6xM2Mphz",
  "key16": "43YSiYezAFmSeyLz1jrtWfSWwqLP6jU2W3HnvsXZFyB9aoXuKFYkmHaBzCMCXio2oDbHdRAikKskrLHUD3VzeHjs",
  "key17": "23FsgJN8tnBhvkhuPvJaWBRsZPQmEG7im7Hh9MkKnxAp4EUn3vYzD6LQE3NYehrzDfFZP1QEYLFwFJMFGLBerwv2",
  "key18": "3tm14GtNKtLVNeTD5dCUBjqPjY4pDXHxUT3G7jpQXjsE11uEszPi7NL2nHDdaykPA8Y2D5Swrp4mrbSbgpHVKM8L",
  "key19": "5bd8iBA1o2gAyrbkRStkntCgwEaVduHaQPTzKuz2xHxfv66DFGGX6uudceGvBZAm2Uy5Y92DSmY5uHvSVRPnYAkg",
  "key20": "5ZpMouR7pBhAjc7kH9C64GohNPMY9CYZmx7hMXQxvNgYFAcew2BRQrYwrycad62YzxhnmVPDmUAqC2CnDQQKx5VH",
  "key21": "4RfaGYAr3A5CZ7hAMFjUdAjadAoV6JPyuhGhsrbu8Zi9GxBSyVB8r6FHvNVsTnuZ7e5mYjUVurorzoeFeWyyzUHQ",
  "key22": "64YzSoLwoPXyNmiBreSyT3RP9CERqG96DzPFDe8CEb8WR9N7zwWfy2bBipXMyHvRhzqER1CifXcEcMjpPJjaWz8e",
  "key23": "29kMVKhNMq3xwvgcVTdUZ3N5Qff927ALnmiain7ycvcWyjg3948bGvde9GZzyoJ4TMh3HMtwhHnb2j1axoZJ1XWQ",
  "key24": "2Qwcgzhx5B74Qo75v9LRBbbx7cLqarivXxmg9vEyRd7d2F4hVbW79xSyCUC9iLzxSaFGfJPz6zHpzLiH3EG9erAW",
  "key25": "3otBdU6scXSmknE2m7W8YeHD4LtgfLYBWzbtuqsftxDMGySzgy1tzNCeFaLp6WTtNhn83iWCrnW3XrJWqqNHkxX4",
  "key26": "4i2j6XiHj9nPQPcL2ftL5ZaoMG9KR46mxx4HAQAtPDaaQYsniTtcnk4sYsejDnkE6e38cRtGacsMzde2neytcQkR",
  "key27": "4SzkfHmgJLyVCwcK9ELwarWnxc7B5AuVQssJVYPPpkYjBg6EoUacNF8UrAB6iK4znFai9YR9qQCWzfSemhJ8w6Wq",
  "key28": "4yjnqXacFXCDmQCLxC9zBv6DquszDKHEwr9d239QzLWYoStDcxdcwAVLv3QNMUB58KpioSnGBebSjCH99btNqboC",
  "key29": "4UQYzoEkvsi5uMCFB4Sy1DP3AAQzC21H95sJ13Byx7srqmKq2NcdEkEPM4m5kZmEYokQFA5Fvaqk5QfaUZg2HEXR",
  "key30": "QF75q264VpPPmNPJSD9ZpvzgJpVzxvJEULwnSEo25Y7m1b94jfUofH1r7GDaSLsUatQzZFiKGq9MrKdxcfc1E4c",
  "key31": "4mxVoYkYvNBjccU93wdG26r27Xbm19aHc88sYgyt5RpEhXEaPzCggxXCF1BExqjZQuUh1VHiPUEF5kHxmdL7iZZk"
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
