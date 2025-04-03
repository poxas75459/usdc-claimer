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
    "4c3qNSHuk7YKpUcAd2gm7Vy13iLxR5Q6o3rKdVZq2M8eTGjL4V7WAiHi7zPaSwaGCC8uYFcbncx4VML4wiNE4zc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t1s4wpXsaAFxGBSgDTtR6s7ZE7AcDrPbvhVrASGzv9Yb1qiRTCoac7ijSRFPAUDr3n2KUtcfAMBrpBEtTwcVHhK",
  "key1": "5ecDBNayubHZA3JUAB6Gos4R2WDx9ppysMA5CbJ1XtMJ8gQzuKU65G3zVqAw9qFwEZZGoE77jX3YVjZKSiJ4hJu2",
  "key2": "2nZho1TNtkyAnnJufAfyAWM7LcfV9KxDZmTYX61nYz1qvqQEnymFrk53HDsTHBimq9HHGSB8jCgsyqvxdVBE35Lw",
  "key3": "5ywN55A3hMoVbpYEybqnvfBzxiBg4CGCTU1wWBHEzbt9cpjPQ7XeK1iUjQGqM8PVZE2ip9JKiT9vCDULUd6qFPDZ",
  "key4": "LniatBe2AGrwuRkmHmdJ5WtSf3QVb3yXnfTG9FSHNmTk6d3c9LwFq79kdcSRTNRKo81NNtMBg9zvSNJnW6GwSDP",
  "key5": "4CzXznJeytZLFfnWUwHKpN36UMAKDEm6f8j8jQuxRiXzXB4vHJuNiKJgUAQwY1qr1SrAyD1DGf59RKJDSV6o4De6",
  "key6": "3zC7SDYoGAb4y1WLFT2f8XFtFv66qswmoP3PQvLUSouHeuNQFJk47UnkgbuhRQmwL94dGyntRwbM7pwZiE47ngpj",
  "key7": "5Bf9SLo6LY72VSfrADjNMJE8Xz4tR35BL8izXEr1ESPgbHKpHJVLMv9bPUSA5y4cqasJ6MKsov9CgZTV31ATw1p9",
  "key8": "5Keu5bVk6d1mXevatFNKbrXjJRYRvgFNpHAEFqTzNkeaAXbr93Es7g7ZnY4pzycmdZti2QEooTczHXyWfQ8ZtCQa",
  "key9": "4GJYTxuoTERdXcUQyYyK7Ue7J9hy8BRhFKn5sEvqFHLtJDwfVePUiZEhJmDPXxE1YEJYhMALc2f8QbLMpgMZTiQY",
  "key10": "3XgrrVYkWBSqTpxRxo6vCrxRq6nxygT2zQMD5HsXWouRz3pLHsu8YXHLKASR7SPqLBx2DuLbGtjjt8GDPy5TP69T",
  "key11": "caGbLGUe1Jjn6zXTrHkUQNSkyuQ1P4NqFBMQBWHaWLaXk8y3AGMfm7YHk1GPh2BryW4ShRYDJSgnzrXd3S8u3hC",
  "key12": "4TF4mBYjG3G6PUBBsfAjSMCpzi8XV3ShHMAsgSseTQZNJ8QM2Ro9VJFnL4DFwAqTofCnif64V7T4vNDuebmrZFSX",
  "key13": "dr8R6E9Zxm5x4YKnE8n6pXdgzNzjp11QQoQULRJwVaDVeYzEz32dRbhgTU2khcuhvyWdv1qRiY11ULcRVxk1Kgg",
  "key14": "37cNhPgQ2SqGSirfHnpWM8YFcH8LDQNdwpDK3q6cswHGiTNWKCkPEqfBpptPDiP1BLDdGZNT2aHaGbL8rHMUNC4d",
  "key15": "2tqb5uDMN7Hogtppm3DUpJqbqr9yDMW2V249bjkTWpVu3cp4pbWK6BKqu3QfQpHQBhyWUv8E9s2xXcrdbGL5iGZf",
  "key16": "4r3Qvp7WZrzZWtoeMCyoMreLXFpNTrWTj5oxEU3HzJHEppDvpgVytdXxp15U4T9RFhyui9ru6jXTQX5tM22Uh3KT",
  "key17": "5JwpZyRHrsmBcyu6f3LcroSigQ8dBuU6bStyg3zhKSLi6B4FGLz5rKLpatTGNSFC4hxGjT8jXJPRvACzUtKK1emz",
  "key18": "3ZsPQsKvdWJtPMf1yQ4WwGVci4nA4Lt5Q2ZVGCpSFvowceZUtvrATP9KMPumFavzAHAjwLx7Ru2Ggwid3dG3M9GD",
  "key19": "66iu8MhANZm2pQFmKaVLUoU2BwPqAVgzhNB2j5jswfENFV6osi2JfJPDqPGSYziZg2Z6Cgm75WTLDm9Gbp5S8eqx",
  "key20": "52asL4oq7SNHxfgwEQ6Ds61T3fXi7K9i9759L2iAjZHai5UowByQfFiTzmEEUZRFTEzPiiXDkKnj3755393Bupvc",
  "key21": "38BqppYh4F22QsPNCcdB1UNnDZ768HayeVUGHpLtbDSQJ31cqsUeBKpxqHt45ifdj8ssKmHgc4BXoXBfb2MrrcsN",
  "key22": "5h1JCnfXgZRXKgCoWybnk6KtrMA2WLg9c6DqrnBsfTYuzTtzVjt5kVgpZ46wfxAuHFZ5rGVWPxQT26XiUaygkaU1",
  "key23": "3vVPoMjFRYmWQAS7X6fL2YE3vGEWsr4s8niJctt2kbLPVCrrFcDtsjhG18LLDnmR6eYaQ9p13mheCRcD1F3RThVA",
  "key24": "zAMV7ydTTWCerWxxwJu3SZ9bgtgH2HUL9h5MGTg2zkEfQ5PXLvCsWnrkqxgYyMta81KnNcmPbdjLQNUZsdPXnec",
  "key25": "FVrEAFF59nYq5U9AwB1ea9DKrLRHw8nLE6786TJHyQmmGChV4Azorw1djYKoqpdbqczWzxv3ecbq6JUsCDSZs7p",
  "key26": "39ooUStEPE7J8W9ELynNjcAfYcZfUz8Sp4PU78CkAbhwTkTZ2mvhisap6PX9LdkDL66j8LoWPUieTVb1JuaVngFP",
  "key27": "4Wgt9iURat5DHUSrqwE6qeo6s28GqdgbB5ozDDtpwYruxi1QFozZRethRajgTvGbLvTnbqAgPyKFMAJxFvxqcJKT",
  "key28": "3vBqxu5sxJ4nJEuk6dtj4qLmpDgGDXq3EWyv6CTQdAKkdj66rK3o8LSnQcAcwmgPFTVPHps97BSPDPe8N7Not9wo",
  "key29": "3ei3uZ27bdPbhzCieqZfq7KFMneZSZntem3DdYz3vk8e4c9ardwToLoVhTSRFxuZRbH4UzSXhJV7c58zmwTVg1qU",
  "key30": "4Zr3kTerdAYBwTMPRXpSXLCwqu2HP4SaoHe9BPfiBobxyoABc5WftDQtEzRnS6ywG6PjRzpbhubvJ6VMcehydFee",
  "key31": "3k5vaEDe8qSTLAvr5T67azaWzNqSRFr8Z6iEF2fBKhaQgJn6ZRbBTkTgo4TG6TmFRrkewGq5dRt7eSaF3FPVPy5E",
  "key32": "4obwp69it5ABQ5rFZMay2NzhEZXcMkDZkP3NCz3SWY4KJHZYtJrU2DFV8LaEZbm2Da9xTMtzZemFqGkdiU7PGa61",
  "key33": "31UDHEeCzkD8L34CPLExVoamzxs3UKoLLTYfsZgizLjDBBzixXEP8GMYvxZ99Fe2BKcDP8xrfWQhZuVnR5puuitm",
  "key34": "4EvPuz9286Ng2RRVKPG9TsAPeLFGLKgYrMtgENxTrCKYvhKY6NtBC3p6MmEYTx2dgZYWzfdoNkJU5L3XJtkwB89d",
  "key35": "5C6MAy8Y9bnRkkusi7CyPXq5MCVu94At9RuAFWpveQY3Nn2hRvnSHQGUihEa1PSuyQfD4yHGd5m7HYmPa1Bf9nUc",
  "key36": "2gMEZPrLZqCMgM333jpkP3ncgwMHqTVCX6HUujEbDm3ZenMwQtVr7omfBFs2KYbqJcP8ScygDKNUmUc66D4vqs2q"
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
