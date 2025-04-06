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
    "32QqssNTgJVYpDoP9Yo6pUFhA61Huyd7t3K8JexKh8pgxHCVD5huDoRS5rK9di9GVmv9feq7gJvcxppQiyMnbdAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21NJrJr1rACGJt5qUoiAwJmoeDoKQ5jFT4UT4hsqM8X8p77hmDwdbvRGdWXosNLGmdZXVs9WWSKmeLpgHR4GMNFe",
  "key1": "3wPnz8wex9WSuB4krzaXcqu4rJ9AiZuo1smqDhL6bDnNBXy8Hyqg1n2BBkyZWJhkUXMmGQXDts5a9ahFYTrAmE5w",
  "key2": "3VG3nvvjgK2psisZ6bgfoHK4HnbbCWjgpPVK5dvN74631vRzDaA1n8TuVSa8xvFB1GL23rxiPU1XbVKuSQx8KTta",
  "key3": "hh3aBJjbyshDnPEW8UvB61X786Ne5hz6c4TzwbvPdCkcmevmuyFvfYtLru4i6g6h45LJE9CYVjZMk6rn7XbdRN7",
  "key4": "H5tK1R7P73j2bveNccD743bSXPhVSTDKJ84RLiAPcRosF196mThKNN6ApEdoVSx14i95KEFB1HZLwFkqtnua6am",
  "key5": "4UEkFDbQjz6SMkUotutUPg7wYGoDBVKFLJ6uZTDsL2WZYZMqMT1vo5FPZ7wogV8NvWPzekW6HGcDqP7nLLGvesgx",
  "key6": "3YdDZ5zQGDKor7Nxus8YPNVdrw2xkAKXRqWvtNfWQRrRrVGzptFA7iHPzGPXCuaYAbkHw9HkLPw2ZdsaappD7Y3G",
  "key7": "3rT9pDBWbCY1q3xMD5fXrod9eiqfYqcuTJSBSgCuwRHFNqKn2R6SV4sq9kbSenCB7UQuQJxKYJsA561dAwRh5cvY",
  "key8": "4ZtX9C4dtHsBVxR2vt5TGCTu7FPS26jysoZ9cWWUJc9KLFNsxn6bKBpDgDgi6gbMNU1wYJ35W7KLVFs4zWt7n5i4",
  "key9": "57FibxtjmJs6XjPjjWhfSxwquhRLxi23SknXFrz5fET1isMEzfQRVYEF4osLirmDCCedaVA5qerG93GfYXBpBkTu",
  "key10": "4QqgvfD3ou6ypJezXs9L4LMyF7muhSaGSbfRkxgqzR7t7f5JJ7LQsB6pDTcKy7UnM4nN8fYG937QDN5nJnQC1qcS",
  "key11": "5PMCQhT13EnMhW1R5S9QytzCpVzVsbdVZ3iC6UcRB6BbFfxFFp9i8QmputZmhHBmatApjdLbw91EUsGxHGZ3kZD3",
  "key12": "Y8NorHacB1mswd6tUBENHdeS5LfTvsoXAjVnoF1w4BHoDtAQxh9xqs2mcHJ638uCvkzBRKMfWSC95sYddD1oenE",
  "key13": "4QH23dJjbPKm8n8ZC8PGo3shrRUwx61jLcsidfdPow8owVvjUJLRN6yZvpeKZv2gsX4dM2RXZmtLx5J8k6YmCmuM",
  "key14": "58NdF6CvP8yGsuMqcv9N83KhB4qbu2vKpwf87VW2oBbSV8jWCPrDnMdLqVdysUJw7Nr87kyKfkoWuKsLDJFTeeWW",
  "key15": "BrwBxpTvaH5Vu19ZtooNGfBQrnWvaizpJY4DpWuaLcB99HEoL162KYCWzJitnvCc1g3bESC6DMpmx4tuTKoxbC5",
  "key16": "2FS6K4CSd5JxSiVM7bjaBPu73TaVmeaAXVAkoqF3yUXZwKX1kg3qoTf7n7JjU6smXrxAQQuJ1rRpXH4mJqV3pSG",
  "key17": "2mMZsSq2bTyyM8xHwaB6JD7EKLB9h5QqSHLAFx3AKsVtxnTqGDauiShmGAZStbx58Q5m4RjYVpm7TvPAxJRrRgp3",
  "key18": "7vghQVUmbNuz9itabuGVsSrVo4gEKvU8tbqey3bDFzr34CUwoJ8fFN9UhSUFpELX3rdaPz5KkWNMkkTTbp8oFjp",
  "key19": "2rEHPAn9RExiQ7pqGx8P31pDEeV77BHzYgUPBLPdFTSR5FHrGpRAezkiv3EkJnvANz4pcbCBoxM9SzP8P7oWKe53",
  "key20": "5JvLkwTH9ff26aZM65CCZnT8zBB8nM7grDdzmuDU8fUJztThmFoGY4WA8NTqz3ZTgCQZAMexvD9ZQkyJikHCb6py",
  "key21": "3yFuJpcwR2kyEU3AwAUZYiUCp9f8dWzRd5EpsTqbbRVHALWt2mEdEJjVKHtc2xEx2JxKUKWdqdmViSYAyvj3aKRj",
  "key22": "2o8G8ZGXridwSKnWxbE5yXW4upygWTPgvND2nHNh9v8jDBUQwZ2fQvuC5SjcDE1W3r4qGppKKaaR1TDfh2B165Hb",
  "key23": "3JvdL8TEyPefZYNR6pK3MzL9N2GQdSsXZc7QiRRCmbgVsq4K89YNYEqCRRnfT2QRfgH4yFj7wG7CcHc5mN2jbzsf",
  "key24": "4p6fLh3FsYr2N7kKvm5zbq2cByg9m7wSwzMMFoDPh6LEp2KkforoLehSAFe4E2MCYg8gizt2UPnoL44GJNWvoHkk",
  "key25": "3TW8cPJZcYw4uRbUqaX7Cxm9z9sX86pqDf2iPRxyXL7JL8eKgWDNcmcTgKdvQhNrrfcHYBJ7WJdVgj4SDJveAHN7",
  "key26": "3QEPAXwSHrMg6LvRe9mgEpTk4HTtBNHVoWBc3Jp1wB5eRTn7BLgMx9kjZxeoCRzn8C7aQqmjeVMr2zrMVkZsRTeC",
  "key27": "59ETwiazbSi6bhvZVAvY21g3PoZpEtENVj45vzWJ7UoiaDKSNxQCsKf48xZRchKaV1v5JjT4fFAw2k3bPbgStXft",
  "key28": "uM27nqHqcqTg6r7LkFsDVan83otGYKFS25mRVrnesCpBfjKHzyteNdKzrRdKv3nNcrzQTGVUHh188qdq9ruVVUv",
  "key29": "EPDYcx6nPLERXp63EoBLbfpX1c8FwCVPg7ssJj8ouP49eBcBxzBv8UdqoEGnC9BrTCSuSHk4HrdtYSa9Jb2EM6x",
  "key30": "5sqrYrGwib9Uadc9CQq6LZuVVF8XP1sNhJyTCiYAGk5rKxVMchdWFjGWZWhFgzo28k1eNqYaFyPowKBmmY6Kfj2t",
  "key31": "42XQuGRD2tsWuv8THwSRzLBp63y8pjdQhrLhpQQSMdy4zfpA8N9vxdigKnvT2dsZfh6kpXGZqvmQ414YPnQuGvk2",
  "key32": "3KpeNj7SmSiXc4ApvbhhpwAQMDD2viswNYerPeUqEYgouQGZ9njoWmHiWZTVLcQx1UHuhX5eRA8RH3sPYNmEEjNW",
  "key33": "2B3pJ4PCLmqoCRuJSa67PLNKC8qdBgHL5EwCRkFFgtLYAQS8EzaeZ8CWqeA6bjiM69E4nskZzbxbr6YvEzsKP9Tj",
  "key34": "5L9aEKk5fy4TQzNKT7hunyWLY1JdsiD3tXW39yUS43vyHWnz2aezCb7cGes2Qe4gQ5mawNbcd99fqjMBoLN6rYgY",
  "key35": "2TN7VoycRuQpUCBfbdat2YSd5w1mAWBuMobsjtqabQ13LrPPMhCM8UzJU5zZowhyCq2yRwU1zD2MAm2CLK4mWNZT",
  "key36": "5UdFHMeeodkxsVt4YQSf5Jtou1nzK6oEBqQUaDdKEV3ug49myACCvyKFRMu5YftecSCh7RbXqaaTEStE1tc1TBAG",
  "key37": "2yMqq2wE8QfxThRSmr1ejunLiDDJvnbnYiCBj36bs9tdYUE49SZuqxZpF4ZBtZ8khqrNoKgsLC89XLssed2wo9nD",
  "key38": "dpY3UTx2XgKuUYtEwHy6qStXsyKJsjExB2FvxXm2LHdgDnkBNvmBrMx4xCaemEbrDUiALU2hqxfrHhdnFwEvNzi",
  "key39": "4ZfJvqsfZetp44N7RDGPtbURadaYzfsS7JERVNP5ntLtSkAFoxJUnQdVwzi5BxUGM7wdiF4mhBrN7Gt2fKaSJ88m",
  "key40": "3ASSEXueyQz7PiWEGNDcti6AbC5tHb9Dnq1n5X4ryr25TrVKTZXGgtFg2fbG3tNUchpivuS8eoMYgLjJ9weqgNn3",
  "key41": "42tBr6ZdHUQowJz4tkDAEEoodbbhFMnPY99D68EkGfWa3LcCZkTH9dXjgv3oZbsTfemDmwinCQd2Ni4aPMAo64yB",
  "key42": "667JCPissFkpVyXHhh8WB97WJXBx7JxqEnVMky5Xmh9XCtevNnRDsioTSnEetxU9Tyytru6aPPVaZuE9KoyBD5Wk",
  "key43": "5uZQECBFfAiMkc4FP4iWLaCPyrZY6nUpZTgDfEGiQKLUC2FRb3bYfnL4HLasrHE2Kybc3QxPRspWKGethFMHAZvQ"
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
