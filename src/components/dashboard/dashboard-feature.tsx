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
    "2HtwGsSy8gTdoXtuHDYipgQjb28ibuZaGAYpzFghMp4JVLV8bmvv45hwjvD4eMc5omAuno2A7vdN7MdtDguVU2Bn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JjBHxkMiALJQCKFvTQjGP7tPNLCD2pPc1nTFMH3v2bdbjSXYkBophyV8jbC4yTiaFv41xJpa9HNfd8Z5s3HZcb3",
  "key1": "2Y9BmhhgFjP1hbNrrEJM3rPZCrGnhzpAdqWwskvqAFDBbqRcHNmqjHrRbm8kmcWX5d78Wf5LwTBNdx1zasWqh64L",
  "key2": "5zkxGaDxXbf6j4jM9DPT69czZCQQTdJyjJiVvirHyx8JBqq3PjcE7Rcuz59J56DjANYdANSsyYn4ezXNZRC12Z7u",
  "key3": "2aBQsFguQoreo5fU8jQXbvGi3NG5LZ4ec5hr2JrCyq6T4MT79TKamTj7UuFQtttkZe84PmVCGkGcnKZBA3Ycqvd1",
  "key4": "3UEzgv1KZH4cGEQK44TZ5ZxptvF5Lp5y5FhwF76z5UDvhdWWjcpG4odU41NyMibTskKUhVqWit1Xo2jAD9n7JHcA",
  "key5": "3SJx61TQPm6KrXe38DmZZQXJiktQJHUFDqNL7g3Fqix31JaX9VSJJmXW3uNC3zNuEPWowLEiVnxC57Gt2HSfsBoW",
  "key6": "KUjEfmgwf85UKBgooC7sFpyJthuHRXidBNryiiyFcA5xbcyuHXzvtRXCbZTfg1YJ1qtVmawbjgZNDxJfaknoxdF",
  "key7": "3JtVjFeXtRoXG6eTMkWQqBtzwveariC4zRJQW8S6j39rVjLF1dHQdwqqgqaRYwwcDVkPHLcxeYx23eL9ViZvHrTE",
  "key8": "3hx1HDK21urYYPruYzPQF9YosGtWQcXGUqjyh4n2VJTM48hAsy6vYdzDnLtN2GtGpqSZM2UR2hPXAc75gECt8QuR",
  "key9": "2f5SaANc5S2mGEXnX7HzDatcQrBD2SB1PKzP7JFfhA1EGBf5R4hZhjoqU4Fyooirg6vGwGfpeeeSTb7r4krVuCEw",
  "key10": "46xv6ZVq4bQaeB9e83Y6oGKWPNQGQPHdog5Q7aqHahGTHzsD4XjhF6ygvvvpi85EFZFAAXpGNaRNwCuvG2vdo9f5",
  "key11": "2TEbF8oPioKauJdh6WL27VDXuW2fD9PGZ2KLSYDznR8V2q9MyUsPSZEfxLBKPkEzoc2jmV3DRxDMNyF7aHhZEWKP",
  "key12": "4snd5nnrMUycyeYW5DNGXiP9qstnEZ75Zt8f1dFhUuNE7LYS5vYzWHKZbUaiTS3DAPbA4GsPTmZoUKpNXj4PStTd",
  "key13": "29426AnWBMZwZ6jrR9U6KQiKVr8EgRnaPMq8MWQWxQZ18oQpWNjGE4fChocdEpuR49gvozc6w9qWQ21irofm2tLf",
  "key14": "2gMdvY7Zvjx2kHcxonDty3ibopV1RkFX4if1sg3Agvs12P7L3pP6y84St37FYHMD9Ruj2xLvApQMVCGLSGWBh8Yq",
  "key15": "3fJJ61oGvZ67tgNceRVSZGeEctEAN9Wx6F9ruHeDpb6z8qBvd3SvXXNUhCr4wr8tGqDXQYEz5ghWKACQtwKRN7Fj",
  "key16": "55VtbCAKDmDBYXLkndmbywMToBHUCe9onHCm1ji1J7dpPzcGckGCYhR1B7E6Dg7HMrbwSrrpSmRqCEVJFu1Fhjkp",
  "key17": "2NbQDhyJNZVHGRAdjXZ5QTvFxDZdK4XhyJYa1cX81mFpNeK1YVqz7gKaoqk83E89VFzD6LcVKVzZ4Rdb6E2eNGyB",
  "key18": "wcNSeynfcK9DfLZGwE9Lcs5YXEwJkad53R2hB8kgXohS8QzUvLFbtcPDuxgaNQa8JpqxhEZeV1UULYp9fQZphmc",
  "key19": "QVvhRxqty1xrjnym7vh32GNJsGdTfPjzygKJYJobmVLnuc876ZCyg2KzVoKi7udsQ7fFRSHNMsxB9XDQzb2ojkb",
  "key20": "3c2iXe4hS6hBL1P1excgudML772nXR1eCJGJNhQ7mgT29GJroYyJxEvoMRTM64y5KgfgBwB6F7UZV9M6QtzKTF2j",
  "key21": "Xe3m63C5NqaoKjATM8iVVnkYtGda1RCXi8XiR4fnCfVRCPRPKXesWJV73GZsSx4ifsTmmUibTyzY4T23TiWG8ve",
  "key22": "29aezyfcJFwS3rBTiSupGRgYDaa6e4AXrypwxtUUDuMcxR8Cn3mnk3VpYbaEoSbQziR8pRU5zYVxhSrFqMetPB4i",
  "key23": "WZDQKbafxs3dQ28i5B2tsAFf4QL3B3KrXDwsAaewvVKJRxihNKYYzAJX7HCFb1jRuDsVZRr4MhMyeJVncrqRopz",
  "key24": "5omBfo6jSX2CUT1iH6xKDBP9y7scLfogec41c8MPTozNAqLVBfNbuKFWQcq9cfCYQRDTQFuA6yyyFYk7JEsEhB5M",
  "key25": "4bUrYG4rTPvrZdJdkRKzU1MCr8AhB42ay6DronvsdncJ5FbfKPJidhcZvwCPtM7mSfmmbVPnVwexqEsid8T6HrUU",
  "key26": "5jnwG76kYnHDGwPtbB1W5KRWaK2NncjLeMs295ec6ox3XKkfA8UjCiCQr7g5GidcVVc1d31Li3m7AvYo6zYZxiuL",
  "key27": "5JBrkAWSyL3qNCWS77sgK1e1f6oCdypc7uS5jiLGeFCLuqonggJQEDqUfuE9RFnsuoMELUiKDHdStEmM9j6UcEna",
  "key28": "27YVVNjPJnb72NML4MhCNj5Tq4pv51YCUumKPG8XBR1woendTrdSU7foiJhiPUPWeC5CNPNyfHCEEpkiDFP57fdx",
  "key29": "3phsW7zUSV62nMjqAqWQw3g7Ufe2m7vNNHY89VChDHPNKRXvenSpzMpY66ufmfP3htsW5tP5i4Ui9et9vXW2Cr6d",
  "key30": "2ksxNfrQ8qBUXzKsm31Jvqsuh3Hg6C9hU8PSVU7ZVg69SNwqhmMtkB1ieuxqtUGiFeDwFgPkqrS3w6jBvyfVUMhG"
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
