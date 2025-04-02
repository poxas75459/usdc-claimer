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
    "2XqkTC54bxiCu62mK9U9W8sfY6cqSDAW22EV4EVfWtJMAZ5CG2FjcK5yCkH71d7hmiqPWxrsHaXW5xpPDwnGfnG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mgQFSxEBKDpXo5DKwd14V5vfWc6CUmvRVxaVsdBCg5RcWSXkjREiyNusJah9kgULWGqJ1NkBHRZFjNBeC2F8iUP",
  "key1": "3H2GqiHtx8M3f8zmhg6Nziy83gHpYnCgbTft7b3eCYE8ALxyaPNQ45C4wSwEoxwJ7N6uBQNxGhicBumDDGZqUc5t",
  "key2": "3abeV96PKezrm7jj8EYzLJc8V711fK9dYBYjJWyrEgtXd8BNBKqrDHhZXjQ8obxxJWBq7zS4gzMFRd4UtAyhdpGi",
  "key3": "4CpgWjZUgVdSDDYQ3HtBqyoUzbyoguEi6BoGGiny4dz7egHC5i2pVFA7CmYhz1u3uapSweDEZFMcnv4swH7Ver6s",
  "key4": "2ws8QA95wFGioBE5DrWJxN2iFJBy4bH8GQFF2Aa7A6U8NQD7CNAWSJvDLRciRn6NhmeU2bwPFUwWohHEfLkXUMd9",
  "key5": "23FPXRB2Am3ZjGndeH5bN4XZRnjhoBNtzVTtAVy7RF8jydB1mDwQ1hYY6fM9SHUTNJvA3Y1hQHTkrHbSjFTVSYws",
  "key6": "2JojppMADnPFYqx6Vn4rogzaRVFgL8pCSmTdyrpg4z4Hk4iJm7CaNswRxnkgBtnRPPnKUdG9aLY5Q48eyUjgB9Ko",
  "key7": "3mVL856V76s231GnEMXrGLRrrHBNqVsUiyMrZPuJoeDpCT8Xp1YfLj9VB3BxtpFha93h3ctpcU6Vs6Y1msepRCEH",
  "key8": "WZW9w1s57RV8EJu1PuLhuLHePRSGQFbHrmBZqmr6Zi4e5xth3xdDrvzEhg3jMf5pr5nG9T5nE8SF7E92VGKik8u",
  "key9": "3Ray7PAnuDhQ72vsLGAuEP1XHs7qrasGftuAyvxNPzzscGi3fqsRMamkdTECiGKVaMdq2TAgkjA2cUsPogJKa7XQ",
  "key10": "32Bw3NyXExPnPmJYhcU8yizhZREABR3tkBTrpsXPRsHA9PFFC6ga9Ztn8ipash1CnfB4KTXXFAkbBJ12TLYep5QY",
  "key11": "5YwTARwbg16ApfaVDmsQZ7Bo34rCCcnHh29YQEKB9rE2k1XzDfgCQPkCGXSq4TwbmKQSWC2fN33i3x22hBBBV2mT",
  "key12": "2qA7bEMTU5wWutwRJsVQztD7ppaRSVYxvsbpKfRNECBAuSYjsLVhz11QcQxb3mFuV69B5GefXSt5wxsGbg8EK7Hj",
  "key13": "2C164urvo9PSBNcNupHLrP4HcZzwFnCs5E4oZzUj7v3efNQKoRY7h9q4UpECmvFH5meKnNB5CdopZVoxfQxczFE9",
  "key14": "2eMttFacWqQVM4NrAByfatUvS5MKmTHVCmydjzfUzJYkPyTcWcXc6pvwkXVnVopt3S3VfVF4cB5TJauBrVhJdypY",
  "key15": "2m2ecDsbeJVia8NuYK2g1tELYJ7tXe97GbuaZDvFzUyKorR1apBWD8ofFFuGHqhph1r71mSYRNZXvmBdmXSzkrgJ",
  "key16": "2Xydxcs5sqszvow6sk6RtbT9PWKtFB7S92tn274EpaV3qWEE9MN7twh26LmfmdzQh16UcVrKNPcLBqEkqkniyxda",
  "key17": "2raYmKyDB9gANFbC7rKf7AkyRrKjVCHgM1Rqx8MXLiJFPLabnAHZoEuLkHasd5bMM2kQSNsPeUKYs9hGvxJMist7",
  "key18": "36gZGceqNh7p9LFKi5V45uaj95WkDGHYj3SiPXAzvtoV7XnoacWWnM5pcKNqkR1pEnL2FD5dB83tTtYfSbfDFxeV",
  "key19": "4UWoKRoXkQANMnesJNoa35CutUPtJST9PSZX3AYtJMg3ZuhFYzYgUXH8xuGvopCx8r7pTntwCPGbUQ7wd2ufPr1L",
  "key20": "2zcac9aXWgniMbGUUUYuNsrnFJ1xKKCRTQw2WkaLMLfkk6Hy8nCXs55CFpHu2sPsXjPpJQvoaUbXNWGvSkdMKfeV",
  "key21": "5LRbgvVfcY4TDyXiAwpjfdkjTVsgz5DWaq2qsAYXgqPea15k2Qp8cqE6PrvgZhhFigDzS5zCiEhpDDN2G2mFEhEk",
  "key22": "2esqga4NAG3duejW49JG2mot8xrmiikZ7FvSTm37nSp9YZYDEq5QyRW2bWSy7UCYWtMWSTXF5QtmD5rmqNPVP39r",
  "key23": "4LxyWLgkc86DTMqhYMYuJvS2hEQy23bowjmLAC2nRBF95NgSaHkeqUufNe5eVDyGQDX877Qq6YY9P8pNKx4eNWrG",
  "key24": "tYBYRY2kt6eD8oRPXprA7KJpHZLkKD6BZMokr3LTp3DA455GSRcFPBYthgUESFPcLCju3z1DFNFks2NH9FWsXzv",
  "key25": "58SQ2U4Ci4XEFJ14KKDHSwNJb4o3Sr3wxACFBj5ifcwgfBHPFfazaShZ7fXsgUgk7CwVvaNURStP1MC6MJRLm8D2",
  "key26": "4ZGYkSD3fRQt3CEkeHqgBLFndtn4HTH3cEVwGu3YA8hTm3T4ov452F2fqqV7chG5wwxS7TriKHpXjc49zVGa2did",
  "key27": "4LoH5GTMFjjnxve3wZcYaF68dg7axcxRQ1uVAiZU3TXTHdQTpytM9s9Roz5SYJwHrKSt9YAFNL5YS6mDpDSbvZGn",
  "key28": "2Zh9LZnhv7DeRzBPoLncU26eGUDw26Un4E9y1BdrsYSYSugYXZzZG3hS1bn5bbffDV34EK7ggEYKjb3T74nV7Wjm",
  "key29": "64eFKwphRt9ZUvFFoJoeBR41ervdR7YtkyF3MF7u1aLrH4oCaHkAVrAoU53XLGjgmekZHxNCoXgk6RKCpHPGb5yK",
  "key30": "2mXFJGtEUxYSEynxgBpQuw3KQwJ8PXKt47vPdqh7K84ixkmimBTXzufLmrKmjQf94dC1iRAZcEyVrY8AMQsG2tE4",
  "key31": "3y6jd2QB4eje26AMratzXhPeXwGBsdBppPZx8FAAzgDV4hNgXtQzMRfExboB6xuQBRHUBsqJnxPZ4Hphwz35t7Fw",
  "key32": "3SWFFtEYVc4pa8u1mTqu1ouDKip11iukUUkvm6ewT3mYpuYTWdivqEzqAu6UFiBRRiju8sJdFxaAKxfdU4Z7JV8E",
  "key33": "2YHyJigJzF4HueVKCADLAa8xYWudw161oA4jz37q4TMrgtGqNUjCREVHLKVYVjKUzEAj3N1jVmpu1muWdSVoXic2",
  "key34": "6ejy3RzYpQPdErYvp4GnyqbEXrfZcBVknX482mLrWtAUEfQKuwnwmmEzjfftn229xkfPVXZb8t3aysgAkeHeFnq",
  "key35": "3BcUrrPAk7ExS8BeyxdpYdpJ2JAbv4B4GTXJmNTHUDPsXbdFzNzSEDRThBRLetnLydU5pVETtRU1Mis9YVg24WTk",
  "key36": "2sxfdY32b57DHFtFEFk1dw7fktTrygLtbf93XNNgeazbCNRbf3AfSvNiAFG3Y1TQymfUy1m22PnCa89MU2iEHWct"
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
