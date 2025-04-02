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
    "4EUGPiKDYUGKcBPiZtr52uzphVtLn2TUQc7JjSsMXoPtCXYVSJSC835dJGH8GGhgPkkVqmtpaRmpjzWkENTYP12g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KMy1nxjF4jdfk7ZYnbewfuJ8HDXyF6xBGaNb9FqykGVhSmivKmDcVU2FWcpbdAxXKSh6L9qvGDoNE1gyJQeYyN6",
  "key1": "3gyoDB7tWSUutNfkujzQc4Jwp7CRbEYbeamv2jxX6D1f6zRQgFvPAVXZtrPMuVRvxnNssjQ8u9AATdXc1MXD3nza",
  "key2": "3KDNktheof7YMiyCCo4JCVkbxJiK79KknhyK6Z3YwGhxRo3yHVNj8Civf9UCWPrftwmaV4C2o4eyiTuiFhaJCywx",
  "key3": "5ow5m83h9qbJFnueJJVMY2HwxASMuPReuAbbSx4exrXrZti9FRRsjBdsmG88M2bX9TmT1tkftQmnNz3bMvBKseK5",
  "key4": "TA47NKpHjsUrLynupwrvCVNV5fqdZc4pUkAiSiwnMvYFHSM7qQkt2LNk1jYeXLe5oMc5sHScUKJehDcQrE7g3Cr",
  "key5": "4TGiVmdXWgRMhajuTfv1sXwCqSTi4CzekFxUVGtFDPxrCqeiLrK7s6D2g4KUCa6CPmspH7MrJoe4KUVx65PYE9pU",
  "key6": "4dCgA67vncmosPcZfR63qwT6jyioVmxiWNZuECN2imoQgbFR8BPyXu2qkrM5iDcKr8affRu1Vpku5yFECeNNyePS",
  "key7": "h8kMvdvh7TEtCGG2LPLftt7iwXbigpHsJ2rLg56YaQHtf7cP3shhCwh45S1YDZHDQkGJvN9y82K7vkouDtB4yXR",
  "key8": "3Ra2Sgqkxs7b9kuoC9vQy5rVmkXvf9gU21tn2z3psz9Dx2N2DfeXJbFM4nWgA61JeMcTazucno5xg9x7QtRp2kUG",
  "key9": "5w8ixwJXEG2ct2YT4op1cd3mJ2K6HNyrGpwJN3WPdsPHJVYG4qiL98pYFbJF99BUxhRnNA2ZJuzEeZ9sUopMJMsF",
  "key10": "4SM8ZXj981HZ97scG6W9G9e1avv6nJYaYHW7hvrLGGc3uiABK361f7HE2P5ip67c33TaicHBfu1QSiGx7PP5H5ig",
  "key11": "4f7yY4QiennVQykmLjtnjHLKG4AphTqkwK1TCjtPsyVTcaSMwPBkEVGaY5mNn4jhU7e2QTyUwj2ygt5VTjYKovnB",
  "key12": "2aiNvhc7mdFiERKon8tyXPqgrnroM7UMEsohZU2nH41vg5DZZzZF1U1DUaYiTGKHCdR23BkeHPcDc6op3j7KgM6D",
  "key13": "ATAehQW8hGGNt72TQHbM8SspzsQdTWZnQ2qkgE9JBHWgbEwEfKrdZVR9P5MTSMajS8XZW7wugd3kiAasqd3Xgd2",
  "key14": "3vXxM1GH3vM6xQ3omNhvo4CzurQhQutnGUVbELafUtEVxLfWF8RDyVr4HE6qxMZvx97heJA6VYDcE7kmHq1c8KF1",
  "key15": "3NA8nCvB3cQQtYao5pDAEkU14k9FVfizYwiAHPjm5NoWQo1twZoLeRtMkhgHy9rGhPXdW316faDCQqKK9TcJZ1NY",
  "key16": "3vr5aEwKBYeiSJXvcaknj1DTBoGYADg5gcpaykb6MbACsgY1eHbdPm5R58No3eXa1sa2kRN8rFq8PrRkdzVSmi5H",
  "key17": "5UKqX4sjPzHVGREwABt2gmYThWW7x2nV9kVCZ1aRJpdXk9xozdUXjGGEUXLkr1vXuJYCZnh1bfs8ZFUbBdUyruhq",
  "key18": "57XKMDnYNt9DN3rcfJsrppqGfL1HJ5cXH6SqAzq5WhX1og2wHGq48mFbmC1m7UowSzt3QmuvyKfRtYtZ6ba9k7AY",
  "key19": "4HAEW3z1CCJQ7ouyKYW3MFvAyPh7oz33pPuw1HgHtWV4q6DzHg3yPS9kZgW7F9o8VKfead8UZQincCAUfkLc7j6g",
  "key20": "2BnVpyN2wmbxC9MMZazERrx8K4tMv36PxUsPRVqZiumCt9MhigyeVcjZnFLTFVLfh1RWm3VRoFpqCnrENhxQWo8B",
  "key21": "dUzLqugwz11j6JfEjHyhgarsn6VsMFXEdXvJF289mTXA2tVM7awGPqt7WKwjPRgsTFnukSEErgXRhiePME78Kz9",
  "key22": "3TEhfoec5usoFhrqWbCPuVhU7qjGigSk6K4EWEvszN9FYGKAwDEBawYw9RpJJ6cSeDnDyJNDcZpnuKyC6d4VkizS",
  "key23": "3o6v9zzrHuNsujNCKA4kYm1nrWuvr1iCAiEoo2neHKWkdkzzu4JUqYpwQXQhnsjTxdS9JVLGpTYkahXU43Z89YnC",
  "key24": "2jboiVKjLPVEoEaZgrC2yyojseif5aZ6MyATTu3YrMLZMACMo5E9w2ZaDpzttgB1EtKxhniTgJkbGndMLaCo4Sk1",
  "key25": "3GwYCw2FoQFXSVsPpgghYK4Cq4DsT3MSkL8hvFatxPezW4JkFbJo938MD219MNRZVQJi1JxYhvGZRMwubyqneExy",
  "key26": "26YiosenykuvxN54i2ecMri4Et7GaE8QZ2vjLWvEGfwxeSpf3mz7oiuEShB8N6W4PBSv8dpufs3PtsKCyDpCGfot",
  "key27": "4aWWcpyNWDJ7btp44YibLE8JxPp68W7qyrPY2h1Mof3ZfW3zCroyKyXt4druVr4JPmFD6MtCGRMZKEJxiLELeGPU",
  "key28": "5xnCKwxggMjCfExymcnszMe6xv5Ehn9X8Jod1fDYYQLejbuLnXaX1HrmCf8ce93Htm4B8ugTSFxVkFkUhHD8jHZ7",
  "key29": "5Lky7jywWSMLqfWvpEChN5zNM98XEEAMP64DfKnevaMVQQEHycZnNDd6ve23WCqfGoKS1oCjGERTHeu7UmvJboH3",
  "key30": "27QNeUyaSWe2E1rrmG2vLAzpFYnq1NQHHqrocjsT7m8KboDQML4vGo3pWQ6jw5NT3JQp6Ecwdy5wJK7TLUYKmqqq",
  "key31": "2P8Yk5YR6iCUwRStiosHFgMtgDFvvthGfP4sRPgFLDaSxieuhDi1wP1q4Wz6iLsxcTaV28BKb15XTWbqaz1E6TEt",
  "key32": "3YXbYNa9qqfLm52ywt6FKUQkwDXHMNQT72x6fkNWZUXRVnX4Dz9H86CyL4uBEGxxNbeDZvZoP1VK12cr5RBtWfuw",
  "key33": "2SYv41vHdDpUnFgeh6gdewoGEakkWwo4c3neMrz2surcmMxpFBgdYkV8M5jU6iE5gZ5Uek6waARcD8kLoStppaeK",
  "key34": "3m3UQXVehVvEZoe2TdAoes72mKMEfYJy9Sjyn2cytDDysXWq3NAbihPQFZW3aZz7Ng4oPDsGJ8Sr38q4brgavVVy",
  "key35": "4Vcpq4ur367wSqfAfoYPTvjRsJcLp6CDDGhwaDTFd9ujzAGHqXtLnLRKV8rSJupJhtjptamfE1pXh45Pagw4KNJK",
  "key36": "QK1eian2Ja8T9j67oKmjDjBSNHSpLgfSvcNHKo8aZcv59PfrsMcDQfsdK7PoB1aMnqDqUGJ7fktxkwpoV17azmG",
  "key37": "38fPmq3Kq5nPP4ezTLN6p3KF6cKuRdReDdFR6RywQLHE1iYHCd6BRbQVc8EyxdpZBPHHsKMf4pKErByrmF1dghuo",
  "key38": "5PoM5ftr4QS2UqWFTw3bbw8TNDErWC28JWpvvsLvsH1J9Rw9UDLEPvWNQ9a3KPvz362kouxFWzqn45JcjkNjyrxT",
  "key39": "2bjV6jiAZFbZr6Sdii68fJD851eDbTfxkU9SULPsGi4sUTDXVRjBQJExyBYKsUZUFmxYRELDDMT7y3wYGogqo2fX",
  "key40": "4c9ueEcxCazDRbBxQYgCJT6LmH5VvGRe8trAQxJGMJYGW8HsC3Kfxjs1s9ZRhPBFnfQtSpbEkCgQJZ6etrdtdg8L"
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
