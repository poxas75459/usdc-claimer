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
    "5ANGyJpx1TE9LwSVKqb2Jxuv3hKj5JBTnYSpoUmxPHfxKagVYo1nB12w6L96jMQgiBiRv4RCrRjzxHhc9vQgryD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KXqFPUEjFHbidgZhd4KVzDnXE8j4dbFf8DemxWxS632cu7BSzZm1is5RuoDU6FF4LErqHKoHgF3GvvtHdGQbzAp",
  "key1": "4pZBUE8G6v5faYZXBkjcpZ3HYQtWHrR2RmfYWcyZ6jj1zQtPhBW1adPAywJ818B3PvEtXzqxCSXkJbCck9zLBfD7",
  "key2": "2ECGtyJN2TUgNZMrfMKuLeDPSMX4Lrnyma1WYY5YCfQJ2LG1BS1iNXmsDosp9gBdEPEhnZSj9S32V1szT2Me6Fc2",
  "key3": "3yKrA72CE2jo28RY5BRpJKbvj53CiWUAH4X2d8Ga8uh1L7duKPMnzDEuHFzVbjXipGp2i4wrBaqpt5nQbQofB3gi",
  "key4": "2XxXK9fTSA5itS39B9m2d81t4C3TLBvzLMF8ajiNdfjwc7xT3wmKRngLSAwa9g6M6hhmsorhjUE5L7vGQ7t3WTG7",
  "key5": "HtyrRrmdre2XFrMZZwm8KZG3PuG1pXgPmrdbn2ESaVB14XPgLtME5QpqWPzvG3hDdZ5xSMx7VH7d2W4X7bnR7GK",
  "key6": "3HCrF8AU15xWvSEjRdswp261AJBRNeoZK9PGtwV1ZQ2peA1ZWb15A262RZ7gNrjLwC6K5LFR55YxdpCWzR8xFYKx",
  "key7": "4guegBzBUzv6HAnsqJJva65mXQXv9NwLGWrRZ1zquWg9zyz4TBYPgD2JHWFH4qxQ8HTfj29qmV77URNUq28nsuqg",
  "key8": "NjHpR5rHE4APbfhCXPjkuFnsSPzWtiTBTmVwhWrwy3B7W53LGinPrxrnT5s4yRHkxugvqqhAbcwsRyvGBytUbjB",
  "key9": "5QfnVvDG4zoxcKoFbuX7wsJCWVmxn55WayELhJotP2kPvvFzbVaTbhWC6FHFTpfP7UfT5hGV4uQNmmm1F2Nk9nT",
  "key10": "3Nv1v7kFE1MFnyW2SS7tHmCQiNoTjU8GU2CKVEZkE9qK13noNUfsogsg3TxNxwhwz4BEqVhAYExRr1wynArL9E3K",
  "key11": "5UVEGWRnXcZoLon6HYDSm77R9RerJxAQ5DfscAySBiRUyk2oJiZrJQJmPaWiZ3P7uySLPDSVLDAuTs6CV6tQyiHD",
  "key12": "45swKxxZ7Mxx3UAFJ3KZGXApZf63MiLDbCsA3oyDZJvibJ2RMXHngt5sFhip5wT4LpGAzb7KQT79R6cch6HwoX43",
  "key13": "4cr1mJqsP1pF9mvWvmuVGkzLRft8q5SKH31PjN5BdbnfqTWNow31qa6bcet5RzKUUnYV7BrH4cFuUPQL3nxQiRCc",
  "key14": "4Ju1QCeLXraRcQ3zNnkwEAtnML72gYCbGTBYecUXnTabGEkK9i8XDcV9GzMahK7Rxu9qSpzPHtJfGH8fRqA8WVy3",
  "key15": "5GmuzTWCncfT1Myq2qX2xatjEvMkDbMU4m6keHKSKBVPY24HohgvoiVXw4srEzxSz8cnGVBHrjxqfTVpLwk7Czws",
  "key16": "2UTvuJR3K9vAkXBBDZ1jz1K6xxZNLghABmdwDimKasJ6W9gZHRvG1yyqpj259dp8PAwDVckGcMLbMxLMrrMe5Vfk",
  "key17": "34YHS863tcHmBv2zu39osPcmYVZAGCVaPRKqLhLgZoVV2x47Tceft9Sk5KeMPUvoumqApoiu4ogWyv1XC5TfpW2P",
  "key18": "2k1aEXy61bj6cdfLWaF683dCCgwcFWJTM62PkAW1jhtGePN2c8nAYtws5QhNA57XDgSJN1MRUTSYSmMboJToGiG6",
  "key19": "3b25hgVjgPBbvWxxNhv5TQgA4n61f4UAujnwdevmozSU2595No8JWGqxgsHVTx4TnYawBfTjNd6dXQT8t9WRFMEc",
  "key20": "4jtu2E3XR3AJisrd5DQbBxBLB2hvFqE5V9QBVn7LGrCGtXAL5wyKdxGaQqoiN5m2spjEFcfMCwv6oJLJxagByYLo",
  "key21": "2mqXMjFX3kMoDCBmegsPESiXtvpxG2VvoMoeKQ9LAE5Ybfs3FChVKicKFApzVeFkW3nGgdTAZagbSsy7KPMLX54x",
  "key22": "3yK6w2aSFdjFPiro8Qxb9eiWyJeGem26LHGWRkDZAwRi4Girgiz4WboGdgxAyvsQxdZuLY2tbvGaHPjoxPid8KfC",
  "key23": "3zrmehzkoEL4en3inpCz9jbUtoo2UKu8T2w2wKGSfc5pkABx2noFNtGRBhhUJ6FDYUfDKCNnVwKyFE9k9BgLUxL3",
  "key24": "GZoMh42asoRJHXYjtv2SfdHgQiGrB32yyr2HYxVESZ4ZwxnQcFuTk3cUXveWeRoL21vR2HgtywmxrZzUGudJDSH"
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
