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
    "5urNXsF9WkgaykQsGxMMSMN2zuwawovBw8nLhvwgEPxpQBXNZaLCKhsk6V8oZdJKFLU8t4WxMzuR2KU6QatEcgDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n3dCyRHDkiLmiaRpMKCn6bAegQbvFf1jCUSxQwGdexN341Acrw6tDzKiyxrbZZT6rYCmnuyBxYvvLD2vhMidC8P",
  "key1": "542zgksij6Q1mad6iGEvAHaydGPrupcifGHz5zzDqSqfa2ZvDe7cD4XQyhg6H9w5Q7Lf2deH52izv8s3eDXkEviX",
  "key2": "2fcjt2pdqvBwTqVAbuZ6RWwEnJ66n8DUxssg9GLuzGRpfcKxRajEtw8ZfEFBC8qB46DPrkxnjXFbXFddXrC4Laoi",
  "key3": "5ughpdLjNTC752on8xjQwcYyNJCX4zgYuv2guDKvrJiEUSPJ4VVFa7ed8jpYqebAArCc9P2HrPDaeeGLUTESM9op",
  "key4": "3nfC45RMLhc64KjwkJdK9BLBAkPERB3raTgzcYXzFTx9iqZAe7MNPkTucrAUzDwRxPezUqXbt1EL8ogvEZeNpDXP",
  "key5": "5duMw3FQ2G3wqezBYxsFZJFsdMwm4xZbSciPmqrGGpuGrZuN7NEaThWnQHphWHpdv1rcmoZhX1ddCxteBa8Qyx4Y",
  "key6": "5aZdj9knsaXKbMaaWLqMz9WKnL87ZAMbUi8a35izsuJZc1QCtUcMBvzFVLncHDAfsvyeL8CpwE9VaRddPW6x5GKx",
  "key7": "331rCuChszmvRXGLnumuMLR3cgzGdG2FcitjRYDWWfmTqH7EgJuGbcdWxkBHaYkJhVkr5TBEYKrSwmyLwf49nCvj",
  "key8": "4YAKUYvbamwNHtozpTPd5dhBLNzPgVNBANryTxXTkknU49up2DYeFBW5FAsHLhCu8yVJPaBrD3DdbUEZsnR2DyMC",
  "key9": "5EC7TZH6nxFquky9S87WNcJJTxcKqW4cCizX1S5HJqRfvhWYT6CeSPzG7SXW2pv8PjA5PqnvcPkA7CiBfKB5w46D",
  "key10": "393onVXEP6CanaEykdqgr6m8g5QR1zjxdJBHASJ6vmwS6uqdeHdrHawYvAX66WvMAouJe6ZGyHYJHMmYHEofRsTy",
  "key11": "2J3rbdMVxT1M56M1dnj8mCxS3F5veac98iVzX63Ryk96bUxxdAvVpXtx61v22GzyGY6QtpgsYKfGHfmhbRyqJNoe",
  "key12": "5UFHumkbLQBvRkJDmWxew4JWL27X5FQNjpLLyE1HDMpwvaHfDumtaQ8kxVzFKLo3TZ4B3wU9CLn9RRMEkvAzmrcF",
  "key13": "5ayme1FzEpX2PbfCUx2sUwcyfgEUDTpKi6xnSknbqZFvViPa1E6Mp9xZ3jUn1nLxZEJi19hfgA3chnvXR5uvEmSJ",
  "key14": "5UxDEFTP1vUs4XswZwGobvhZA8wYGKKjKPP6FEVkFzgQC36JDMK8QH8g5MyG2R67HGGJN47jYdYH3TKcBEubp3en",
  "key15": "3BefyibBatNJF6QmVr526ChZWHu3RddEuZkf6Yx3nkid7GLw5G6tNUctAdb2XgP6WscUJgCdhbgGYEqoWvtuK2NL",
  "key16": "4wHQXr98v6PvSYsLzooaYJauiTWnBXS9MWk2QSQCNM3WtDDWt5bRRMbmvTRKRN6EWcXY4r8hifp5b8nUcMzxya2Q",
  "key17": "3EZpBEupTpLr7HAqkq6xBXpsBk8yQ2Ey3VovGY4NZzWCEiGLDb4b5Kizi58S7f2ULJnb2Aoa5bFMerZjYu75qS2j",
  "key18": "3QLAJTtKNEXgyYeZj7rhx8wwaRWogauXgZsgSQLNpJ864x9ndtBTgvfYu1MMMSNr9ERvB8SBeuWw5UyfVugRg5ys",
  "key19": "3iMvSj48JSckCtDSQDLoYRPZ1CRjoFAyZwzsH9HRCgHGPbsTVBFKpZQnJ9ZQiQjQRKHMykGXu23MD5HPVBwXTJZY",
  "key20": "4wgaMBMaKwx4KZcmmBDtmtGLTV8neYhJkXbpQrTBwBqGArcJQFt8dHd3K8aScFq4fpx8kuEGE92ow1APoWpECWGM",
  "key21": "49NFR65M5obcDt83nxxKcV2Gtu4QNxWPbuatCztFY5ikusWG2DNhDnDFHDTFZBtWWvLJo614iKgWqaFLVTdajrCM",
  "key22": "3odDZF82qkZnyeZafDXS1qbsSk7VKmcbD2siaq6VrVxdF5awr2heacj2z517Tcdfcfcp7jkiyjreqDPYVmUCHS5X",
  "key23": "EtWe6MVsQodTBTzJu7VpvpPCJCwPgQBWgaCzjC9cj7g5zoeyJYHQ8ismJGzeRoDp871SXh4DHFmhtxXCGLPZzdr",
  "key24": "3qUzfwigaBYPeBc86KPrJGA8GHnM9qZwZURUqtzsiuGxgxhgHtmKua5TpACBzkUQpcKUUappsmMVRvms5ZmmuLf5",
  "key25": "24XubLtdK6352HgrHjea3yQZmDtgdYpXBJ3yLyDidyCzKMVWr4fK5MNW3xxcpJqbnKstEjJqUHucxsQQdCwqxX5h",
  "key26": "4es9rhLtS56WrhUeURQT1GRmBHrzQ6FyHZ9DxzXF6wYmASc7TkepaNxX4iZySMLgpUDt2rL9hEAjXMEEzYkX6u6Y",
  "key27": "388em3RVV8T3tP552MNqo98DNwkfF8vmhXAt6DL1ywQjTMpYfU68RiVs9yZBBine7LRzmnS4nqL9PbmeXJw7NTpV",
  "key28": "4qziXAH3FGgnFjYcYqviTLRFbatSziyJwp9cyEnDckWJJABmAYucspQDadAUxSifxrHxcdeVqsHcTyQp2eCttMCy",
  "key29": "5mSLvsDMjquw53VSKe5e3qbXEYRs9yFxZjHyBVD2eBQvV6v49zUHHYvPnL3FroeMWWRjLvFyaHTDCacdLRVFjqQG",
  "key30": "4rExxznTVRATHWgeDz9DKR7KgcLNxvNEJE1iYSrL7Cp7infJYkrTv8BeVvcrhD7ayLy2T3nSGWxH7SN5ZEYQtfhV",
  "key31": "3jVhkQsgZtiBfFSM2UDYSShB29c97CsfqDjSL62wpGEvY2GT1VnVowwm2CydjpvLc2TvtpxeJErt67KTdVc82gqL",
  "key32": "4m75pMVZHxXbWBKmF3YsN5RUCTHy2iYFUrFjz1NhJEnUEqQDWvHBfk8LF1q9hoGfr3rsVmk6pjnyQeon6BLR7ULT",
  "key33": "2xNwrhF4h5nqnqFSRo1zsn4nLJUHhgmSUHxUKe6UWZbix3pFhnWzvMS7ZEzS9BaA3cBuMJuEds9d3XyQfzG6FcL5",
  "key34": "3xhmKWdGMmhgh8gZYt2bJkgrkh1c36iLgfaXyH15FKqtx2GoduDyd9iUNeUYrU28fYs7AMdkwweMHj5ekUiZedqi",
  "key35": "454gyfohv8uWTcLcRLhvpBNoZSiXHG6qT5itcaStNdJmcQWwC6b3VQ7TP9jjxSB9HU93SjuDbKAg89LsQjpCybWY",
  "key36": "4jP42kvYeU1Tx53DqiD8dyaBf6xCH2q8qgWqqcgYYLRSt6e9S4yi7KMnDVDC8x3ARmhBPGJPBqAeEEVQ29BopJJ2",
  "key37": "5eeCiFAjkVpPkcH5zfcahQHbUGEFyzV8xABSybivWAAx3rxGQnSnKrEiKmcootZmMsRvcrUVXL6Ysy5q1ZyQeSrL",
  "key38": "2vkntvbxffXLfF8J5NDtPAnHTQeiAnHCVFvz5uEWcaZNvQEUE4pycL2Vn57d92CSaBYaCEweRqDzo6XJMtc48DAG"
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
