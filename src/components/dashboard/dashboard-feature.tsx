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
    "4Cutxh5V1HxYQ6H6fD1WVB1NP5cWJwGu9Qba4cEgr3A8afDHxVLZatqVEtKjFxWu2s8TdFdg8bNFGwX4MEcpwJwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sToEKrGmzHL7m5yD87bmybiZRJKVJBQrupmQ1UsvGEox1j45NwjmUwmTQz8feoNeDGzKLU9tixFaAgLQFHkFAQv",
  "key1": "2TgDMpJ3re69zD5HKgNwYNvGLWG5T9nirGuQ3GuBKnwnpaDKyDPUTuZ1AAwv14nCV8qVdwguT4ZroB6tnVfQXP97",
  "key2": "g5U51GzuncmUGGgYtdePWEtPG4vsts9svZ1MLynbJuStzqAaAyzv1McH8pqhnfq6Tunw2GDMbjw7QBa2xck7vfB",
  "key3": "4CMaSLepwXZ6uVtEpVvNa3YgAh9F34FCJeYoEd39mnqXH6h17CJDNBPK7ogBKKBxcG6MAPL2rqEsy5JNh7VspFMQ",
  "key4": "5SUoiMYLhPs9bg6NKhCkLac3sDj7e4CdcEZAhWVrUAwaPBmvb9LV2CAi3iuvKvdc1srm2NFoCHBomyQpZsvyFnfG",
  "key5": "2jZ2pcGwbvezJydNeqRWyXNZSWZMz9AKyzRhB7nG2khiMVWBQ6rRAHEF2cCDSucvRUqmQt4sbRVdC2deJNq6mHC5",
  "key6": "3hGpWW8uDcQKMnFhAfXbduwnNoBWZvDp1zKmLRQ7F3LPBd7sj5jEYZv74FkYN821pzghBr8E2HNCvHVW8a1pRKS2",
  "key7": "BpUCdAF84mw38NNzzt5uHuD7Haua1DaFy3uWkxA7o2PWquU18eoZQj6926PJhC6vnuHUaD8vRAcykBE4VUHF43k",
  "key8": "41Tt1JLmkUbmruV9M4rK2mSxpcL7h56TAX9SBbYpGMoNhPw9ZtcHLvqkMJ82vFq239oEZYXxTj1oyYryPrjnE3WE",
  "key9": "5RBtUoCC5MFsgMZ6WXuE5fnfKqDyEMU3hxVpx91Xc1Y6vPhh9RMrLGRepeXaGZEo7WW581NQnfrGE1zwJ61LT2NU",
  "key10": "2vcWiM9QqvbVtCRoZMgtzoveGWwWhPw84HeKTkDZDhLNBytxhL2axjFJe65po79YzTXySRHpeu4E7dd32o7SeT7o",
  "key11": "3yzTtJDssi2xWn1yNn1iFxFrziVCvoMatFVeSUXs7KkirHtK39yWQXvpBDPNypGnrGm4wVuoW38ZePDCA8haeunQ",
  "key12": "3Jyr6DWr1amZj1KUreeoANZYdsFYgtNu4ESkTHJ4rC4gXZoCGHToR6AJjTv1dEKnZF2RW26KjYZfFTc7zVgjRXWt",
  "key13": "3rv9oGnMPYaQvqLeDLnEEGSU4N42MDFe5HNVXASmEs9HrNjNFawJeCKRxwspVRJELrvQpYLaE7yh9g59cqwqKeWg",
  "key14": "61GtSSMXLaQKCtV59MC7xrZ7dq9pCwNkZVtzHjHLh12LmSgqyXERHRn25qLCh6t9Pt93oKnVTEhojP5WiWs78P8C",
  "key15": "kazvAJUkfp7a1honEAbXoPt5FNXaiQ7EowGzLZUb58jmAKKJDb88kMZBY1zcNd9ckKfPw32GA3Wn7strrYqRyRe",
  "key16": "3AvmJ5gVvH8EzjLL95tQfKZ85fZwL1PosY4p4VN8E77kJKZ1Qit7SZBLgXLAbwjW4tXKAUsEydPSNY7dwmZoPJr7",
  "key17": "3LyJWaU9sgtNKK8R1D2JgsAqt3Xi4aMStcjQJjfFBY82FMo8tSVYLBTam5hCsYq3dBeDVgmtsdmEuqpt47J4k73R",
  "key18": "5UJJcYenjCZgkfir8ANJmqbEbgqH7hE6qhfZMfEkwN4U1tXa5MeyBsnRvsachNDLgTCizsWdJkR92XiyEJEXvSuK",
  "key19": "3RUXGRtfhxSA8CgM31k9511YPu6qYvQMqT3HGWYTY8DecqtDXarLbGo9fRSZDKnXMkjVYu4C5vmRfgz14Rd3sUDF",
  "key20": "nYtSZHtrTxPSBaiWEobj3DFqn3yyhV8qGd8oNt4J8JDpHep7ycvLmDbARL9rQPoQpsztLat9aJfNciqUdfm7i2k",
  "key21": "e9wqUL4SLphdKRtJLDw4HfUUgKBsek9boPb3ouw5EvSG6PUQGaJyhuXEJ7wFSJBpto9fPR8zQFJNrxayPEbCiRU",
  "key22": "b7uo2zqinyfwmN8XMKKfHPpb2VbEmMbtnFacqkjLYR8j95q3p1GAJtahVCK1Rr7Pa245Yzwv8g6Bk3qK4pSN2WH",
  "key23": "2XdHguANeUjXKrPAiaQArg1nMH8453tG3Q7FDo3H4VrExn9TLj8KiRNcKSU9in8n7NCBwftoyNfCiGqW6QzZj4uz",
  "key24": "3FxmaRWz5U6H9hZu9XHZj4zXV7VeFNNbD1TUtEVqpHXp3Mfk9d943L442bdcFbHjYn7mivDgsY4Cs8PCrZ1UbRVP",
  "key25": "3ncwtEFQ3sprqUWPLvoJ2upgqWvqtZ7rftYXgYjV9JaBLughMqy4yv1rVLuPFjapNcqpehoyeiYVuDkKKoH4v1Ha",
  "key26": "5uLkuuG3F4YufnqiLdd9dzbnphPqXTLt5qCfzdtNwf5TscoifjLo4VPXHAhBhz6pCdYsThzGPrqi6tDKdBaY63Nv",
  "key27": "5nc86CZmFdP5Wg4HreDEAcvan93yPzTwro9hZvcDkf67mhDLNGe7KWW2VGHubw9a7hWkgdZTca8bLpmwJNt2DsRZ",
  "key28": "4DRt3VCLVAKEBm93c3v2rDAs8bVv42WL5A66DwwCYQ2oymEvxE7zadyxmxg5jX7gvgopT97EpimFVsoEP7n5rMea",
  "key29": "pnHskCm1kTYuR4LWZQmEx9bpbHbcjPrCaG9TwzWPoLzZsxdkQRefLZzSQghq1QKsF7eKMXbuw3vCM9FS6jpoEv6",
  "key30": "35258z7jScV9TKRZbWF4STMrskjE4eaQNM1Y3cjeaPvsTNB1U9braRLjCNttNHsMWoXU6LJusZc2dpRzCMKCvTvT",
  "key31": "5krMrxHaX7jJH4UXxz7iwKEoCxj1EwRrSzsp81tm73ZHPri44enMMW6KqKNqbtSf2j2ByYgPWZfca8KC6pkiUq1H",
  "key32": "2Ae3PniyNnXyZcZxoysL5hTxLg78ru9FhagoZaPcJe7E6vrcdhLLZEFJwfTekWf8t583JAundscAzJpLjpaBX2ob"
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
