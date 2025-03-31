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
    "2pS1y12x8rwwQzSXr11dCM2WbSwt8URp5wjuPmPx8JBgbWNinpNQ1LpeVC18moxY5bPg49eh27PReSGsRmcLhKEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u3eYbtgNsV3sdHdFB2fecn3ceH9nSrgNvgCdeioeBwURPrs1AhY3VipsEtBdNVZe9B4CXmD5abqet3ur4Mtsfus",
  "key1": "vSJw5AqYM4UtTiD5FDaNRZspNWo6LugfRxXVmAhC8nwcZDDP3yagAnZ6R66ecLHyiYWw2o2xgQnGF9j1Z3xrVN7",
  "key2": "5y5f1tbRsqvvrNN29v1SUrGX2vAXS7GjnBnJtnwNzfHS8SU7wW5ZTTt6gPAwiW4BYbvJnANYpanTQw87GNQwmx8a",
  "key3": "5h535nYuC9kxNmHmKizy3EgmySCNbgtjV5nyMWpvHPWSiYGZKDfxiosP8UWyTL7XeKHy6iycduGdfRVe3N2g3eUM",
  "key4": "t13Mp8JwU3ebw1BcT1FXNZV6r83kJ288jcnkWLSzV6pEjmegw1qUpQjeN3spTAsqQBETxTxJ24nBki6WVnq2FL5",
  "key5": "5uxgHV1LiJ4oCr6WpUaK84dPkJrXrQDMAB1sDyYtQSqnwKzyD12uFYAmsGfAPdYgT2jCdEYS1ReSsaPquxRhH3ko",
  "key6": "2thfM4h2gUKggLqDUQ29ScGnwFnBaMywtHqhFrB8N6HB4kqQJXh5PGuqYokPEgRsVtjjPaxE7TCjxSoqMyAFBjJL",
  "key7": "uCejJuLtafTYbRjhSLLedX9Z5VtaRvfLyB9fkAggHGmcm16frG36mGwHGbcHX2cbovXpn1MDrn2ZUZFa6Tee2Ko",
  "key8": "26bGZ5Wh7jfszyuSVpoatpaQ6FLf1khyh4Rin6MXL46zr6Kyh2huJ59HN5bvD32XXHAygwdFMdoD7TAktxGz5N5k",
  "key9": "4cP1dAchP4tKGeN5yEQn8VbwJqSqgMkuBCenWT6LPx7nnbgYry2hTJTT8NWrXTX5C7KFjn2qd4K5cXEr6roZzYjy",
  "key10": "2sRhx5dKs4jSxeBpK1hAfDaY7jG3hCWJFUQSKzu78pdzMyrKMaDFydWuoyioXysiMQjZCXUBd4PnbMCgdzV9mkzb",
  "key11": "5mWYm2TMvxhyP8FKrxRdrxV31LE5Mh6FkBptDCDwm6dMk66nL1gSdNsnw5bAp2apNvAfmvDgN94J3PAiPrxAon2D",
  "key12": "2EV6eLMDBzBU3J3y81q8oRxJyh2bJumSkYH5YMi8DhAoUiADsbvLzwB1y73ezXtRkTV2pAYWaivZ8bhHKNgRBFYH",
  "key13": "EN3iJeV2gmDAFQSRiiR9YQgu5x3YTBTqQTf7GV2ceCgNYysLGWyzWiam2ao5Jt1sBeNBcFxwXZiARqT6hmadBMd",
  "key14": "5KNrKZQU44xpGxvWFpwtpUepuZr1vBUzLLdcFr4he8SkHpkQ2MWVKv8NAAjY8KQcSMSjQiJXVqb7jWBTq2wc7DeL",
  "key15": "4ccbKahHDqfSt8AQC937KPVMuP4TKMauM5PGTMUDBH3AL6j4EGoMx2gZxfQUFbkXBu57nWCyeDLrgyn2aiPYaLej",
  "key16": "FdJJMT6BaH3ViTSaytFHCMMX5fZCLCCMwCWBFCV6HYreaR1yYeDh6mD7USsDx5Wj3AgMUzY85dqb6aK3ogSqukt",
  "key17": "2GPUgNapwHSMXAkaXwYngdoJHWHwJtMyWbXoBXmEySJQLq5fcqh7LcRVGAk5yALNwkFsF8YrXG5EEgk396cd5rh5",
  "key18": "3Wp2RHxeSLdvqeGTETEN6iduDyDNiYi531njgZJtadaaWYdV6Yx9pHVRTc78yZ2kAmsXehts4ha9rgaQBcaoWcQC",
  "key19": "2PwJeyW8kSnynywZFi1YbiTpku2gfwwCJwiHyNkvwMYEVJyeG7xR3QkBkiYZqBYbvD84rnnNox9ZWunpL2tJBYT",
  "key20": "YS7MSwW7bMeD9dQBa8RVU1RsZXQVWnvJFv7AEBDGWoLK49SMgZLGuqZ7LDinyjSeEvgQKHPSyCTwhorFWJRnXvj",
  "key21": "4kXU8ogPiQ3Rcdp29P481voatXVs2iWh6tEm4C11yKpYjJtNUu4HXMYZ7UrRDm5gBNhxJbt1N9dPhTyLusfLewVV",
  "key22": "3LnhBzh9AfkkG3pHmgn3NTz2EogM29oxKJptzrLpsAujEMVJSJ8VkHcmjE9jqaJ5MJp2SZfaxYEyb3Tn4WREAhUJ",
  "key23": "3NxVn8o3r9v3Tw9boBh5QXozMiHCmSjqNvGog1ss2zpGQMTTJ6aUN1mJx2vsj8ncy4rxGhNXMWQFH2PnPvPesHU1",
  "key24": "3TKJFRCgJvnqYdKqPtNvmKUziB9Ec8xaZmn7wJYWNVEH4hZdYQnkUr2Y59bBmktaKKE99N2vnuobxN8EXsXSuQwz",
  "key25": "5ZKEF8uDVLhUR7g8GmcWoTchZo6B4Mgxo3oCwV3Q6gQpjmLtEim7AwfxbFgo4mVU6CyJtEx4XyCwG9HqfpYyPkbv",
  "key26": "3D2nBNpPuQeqWbYASbAwhUJHKcYebRX3TFd9TpJWHC7PZgLfKfQe49i46iZBJct2z6qEj6wzW4gmuQUHkVt5gTYW",
  "key27": "3QZkRJRzDsnMFrwEH62mkjZEiNGQTd46EY2EjuzrXJ5sUkNHjuTjea4wLrCEyP5aMExgFM9ngaSJeFMLwzgVcPGk",
  "key28": "5pkVfixVbAGtQ3eYS1toMt1gsEhC9CSGLxuDNmCWuutYmiTH5RwWDh729ECNuD2VYSdWbvKUm9y6rYVyPAzZkjWp"
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
