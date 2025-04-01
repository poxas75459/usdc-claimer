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
    "8EY7GTJqrzxCtvv8FbMzR5PbX2jAFdHEN6RTVz7ap56JSAHf3sDzmJqBYbZ9Knm1BXZbTDRfecffYr7e6MMbDsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bS9DMwweJfT7rhayy4CmDMfwER7xL6XLqhTYpeyaBpiPA1vR17bYnr6AgHh7n4xqvoPjy5XdzyiLQvfVZAArSaD",
  "key1": "63XiargShSN8WDz5LY55RdCcWAQLX28grhQebrDDmwyEydNLhDrWuGPFJkijtPVdoJB4Cep8GPr2aK6xn5o1tDWH",
  "key2": "3vLVPKPWrdnfJZd9J353yDxX1ph9KTa52HtnTKkr89FKFMuK5iwC3wNrCmPYSGiKTJsiCf4mTkfc5YjxC39RwwNM",
  "key3": "5MomDfzbUqQMFhRg8Hn26RH931yWMLQNYywquZLnwoNqiUwFYp3YsuzgFFTBHYCwUZAudrKsumtSk1t33hejGzCs",
  "key4": "2ZKuJutf64vtCSectZoRcvvCWckmgxdfKcwByxF1a7ZvzByLt2PajU3Mu1XwrFh8j3sZ6oNEfQj5jeB8dACAovip",
  "key5": "4daFLU8bv5cMGmQsHAosYNxTG7wdoZTNJmBBrUcPxvajMEXxWNrXQAsZE7n3CHmYnTcvwEUfXHrRGsVDR5FUdPp1",
  "key6": "5ypnwv1wLGQC5UwZy2QAdXTpgdb3Wq3xxxayduCNcV9Mn1KgaTDcDvLcECokyZCpYMxorfEP9fr2gV76Yog6cewx",
  "key7": "kvi3Bm91nFkfsTrQhBX2tWBrPLbdFgVSu5VKdgoRg9CZKmYY7PtUoRnq8Q5jxcEWyCmPjWPynaGrkJ9b2ULZqPn",
  "key8": "213XEUnvENGw8cwSLMWN6PrGedsLVsCqBkQsdg2bjnQNYP1mPKtQ5icvqyJP23EX5XxRk3WmnYDTbmWtydLLD7CD",
  "key9": "rHvpkcmCK4nLo9cBiuhFWPVxA3soKvHCMWW4oKQv72M5ZPFKMDaoyE1XTDzu2Y5gw5F9eAgi9uw6mYzeau2YDmc",
  "key10": "7RkiztShBaoypWNR5sqtHub4iEPaNNQfXAGGoPHyvJjDzxky5QWdxTczY7GNYtUYwnE9d58cEsqj4yaRYnqB8Kt",
  "key11": "2N95ESHD8G5mcbMS6Mb1YQsfjnyre2qD7B6jG7UNDar3gFz3EMTiRyXM5iLNeujfFJxaNGfmas3ZxVMk4TahCN53",
  "key12": "5SjnKFcGDW24NadN8GcJ8c4WVkAaYHjKEEUHacnYFqfB8m4TL3gn8HETJaqRmVMG9DLxSiyoq8mPaGDtJMT6T5GX",
  "key13": "3mVAgxr9VYRzzn137bFiPA8sQsr8JY2HMsLoZDFzRzuMu2oHbXArAQ6ebx8R9frypgemv7TN6iNod5TbkmkQRCvi",
  "key14": "Fo17QTrfgfcnZUhUomWxjJP1Ui4nEq5fQ7rbLWMXyNmXNyHP3RXgezDboo12rt8BiDnnkrHjFrVBvwQKe2X3RYZ",
  "key15": "2eN1w8WHn4Qqhdna28rUyY27DByLQDnQBopLUcfPb8HW3opikxXdidf4AtkMbvMGVkCEyZL33QaiEVKwA2C61mrp",
  "key16": "5bhC7W2hLPXMsFdvnp4m1SZstyE3GmYzP7bFKyr1rNiJMAZpwsy23xjSq8ra4dx158Grv6DA1CuwHkDE3vr6ivK9",
  "key17": "3yaiDboioY8tHYcCv3RupVubc8jzDbs3HDyFjyrqeXU9ruKPzficXEASviXCVKoYJsFX2tkeSrGEntsaHkoPAceh",
  "key18": "3pntLh5M8fWgemoqfjHTGnh1kyYQbEVRe2P5H3fhkj61foGW45shYFvr2wtKfZTrtH7TdjBbFvWrT4CEucHVPXP9",
  "key19": "EJaRseMBEWvnrpvXthgf1uAocdcMw58YdFh5VTJJth9q3F2gkRWqxcYKLUW7XfoPXNwDtwDsj3eZxPTGyAiA723",
  "key20": "24gLFtZzS12DGBpaUizk1vgDqRRQqkBLKE5stdCrdqMf2qVuHjy1xScDvY3vxp4z2s4cjXbYM5cYcmtRsNN44Ber",
  "key21": "3b27pcAf5v9ivsKm7isEWDm11kJGRSrpWJ93Bva2CK5Ps6Bq16ux2p4CBKeWDrYWtSiKaKrjLBfArXp46Zm5fTmr",
  "key22": "5uvBfWQmecmLrdjGvM2vHsVU3pnQgCCS3LwdqC6Z3ZrntCZ2b4gH28vJZMvhDgkn72ng9M11RUHpLGxNrn8N2sPU",
  "key23": "3eFzTgXgJNqUJBHu6oQaC72jhKMkEBv4fCvjtnDR1Vdd19YjEDfvXHHmBsGWxCjanWWFiufDXMj36NjYwt8AtfXJ",
  "key24": "4qVCYkH7Rfxdpfs733zoatTF9DdnTksgVK1Xa96KrTd9ZpU4watBbyv3MzJuj88kDqUGDKMZrK1xygb3yqNCdE4Q",
  "key25": "5h9kiqVJS7449xKUhrFcoTtQJ2AYrvyvRJA9h8gmTfk1CQuGHxxvoPFxsyyLLYAsjcHWa5SYKYzeu5gbnXNBtNeD",
  "key26": "2o5M4c4a3TK1WhTv7gwV32Zfw9k9L7YLAX4mPgWRviCFAk8tSzFTa9eS5x8x7TLKnrzbQfsJXcGSQA73PGiQph4u",
  "key27": "5xnSjsYTQKiLDRZ5D4ztXrwNYNuXc29HkyH68MZLHaFJ3EeHpNFWKw8day7zG3jQXm6sXQ3PjPNd4MURfXJJyebd",
  "key28": "2cSVVe6GvwLGx1anxzkMrfYeYUbDG5ye1n88JGN2YsKTVrNDwF2oUiGwz5MiT79CRKBaafmEtMRfCrqAuPEs3nQk",
  "key29": "rctdLzwDQFtPWJeg17RRz9rBkWQa3uM73XjjYKutnM4PsXhBSsitJGy3469mDXjQqDW5NHCxjC3vuiSvANuWKik",
  "key30": "3T3vFhUuqejqYgWSH3DkfeGb433nRRy7GFq53LJeUDyfTSeDRMTkpDCheXwvcMQLJqbmhbPVTch6HPieUfZFJhCZ",
  "key31": "3MHzy7YQ9TDmEjXJbro5F1SFaucjDKaPxZKAjoAorW6i7Jkk3yynTH4oRuGTVkce2jnLfST55MF2cAkW3wyUMfub",
  "key32": "3wiKgAvpugYbnLAa3cNXYaXYrsw4B1JTaKkNLaCYkEBg7PMZYnumWyMfD3HrS8Ybq2P1TSGH9FZyHZJVgvAgp5df",
  "key33": "545Qf7mMTTN4ZX2UcEgVN1w8xD11NBmLk3ADKrcuS1syDKP7jZdifZsK2tYP4bWUvZEcicRri421JicoVtpS95iW",
  "key34": "5C6jGTG2Q6YzUTwxanSMNpNdDjuqVqV6uDpFjv2ACGwicVuuFWxk2MstTLM5HoujHR7LFbaVdn7SypD9nJvaTzSS",
  "key35": "3vnPWrWtb1m4kX7a9U4xuaxLhqiQdoU7ADBedWV4bjo6Ac7w19Y7j59rhp65q88mphjdP61VofFE8rvvJB4u3DoS"
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
