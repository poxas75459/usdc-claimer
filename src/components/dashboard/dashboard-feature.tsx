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
    "2cLq5G7MHogJKB7YTdr89Ffnj55wfqp4F76CuPGyAEXNU8EbYaj37iDcUVR9ZMch1y37ea5jZbkbUdUZXdUCB6Ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QvqBQEfqSf7Ad3sDiZmhFdgFSJD9EiJfr89xLxxmvpU6Bts6E9C1mp4YLp4n7nNMRrUCH4tktzwkET9cB54Mfs8",
  "key1": "3Wp8GgLe1p5jrMrKLUMiuw74xaW8d2tQ6mYBv6drmWnhztu81pXkJeMhoBuMgfs6SAFB1q4BXjVT7dVHjcF72dN8",
  "key2": "51SRrqNWJ4JXb3QxArBtKD4Bk2njWaMqoXfnUkRZvGqHX78bU2SSKVjvgTQq4yJKvgJptGWbvPyXkSs51crfpzsY",
  "key3": "49Ji3tvx65XsfggmVqtRKPwZjsfpeoKZKwTeVTm1kUFQECqT4NE7VB4KFvCGKC8ELD6FodBVi1cP4nGLXfeuiHC4",
  "key4": "54a4PyWzKE8Jcr1ANm7TUNz5WvuGPN31YXyjWnVbpZ4ivAMyTsiVY5LspqwXWzF6fcNCXGue3943dV6MnM7dr3Jz",
  "key5": "43JhRZ9MTA5fxvE6UMx9fHuaEMoD7dN1stL2itcQyiAcaKWbQScTdhrtxY25jZNMwmgLuQwyNJ5EsVqsp4RDdnLk",
  "key6": "3LQTptcBdh51rDAmAj8FBZ2Ruuvf9hNwiDz2HE8SfxCivjDahFUCnZWzq9gGexcnmSBWx4jnqRFrEpkcBSWkRAw6",
  "key7": "VXmw8xM7se8jYKCU35hrKf4nMN7uHk3pyLRXGfbgdQCBLwEuQk4ty72mPc6ZkTs7aFNPXKFVAok6phjwFqkmDMu",
  "key8": "4Z8rGWPvsSFL5ssXvf7UQprRJrCVPyv2hzTUBWZzTq4uthaofPJSwSVBHruffbfiMVoi8CFp6YAHHv7TFndX9ZQg",
  "key9": "2CriQMyL45Eok9R7qpmbX7S2d5ciospwh8rkWzna3MCXKR3D95SVowzqpqPUezTFADTpqbLeVRjjmrxsdDhHXdPF",
  "key10": "5HP77gPB54agxuet531cibbarmRuK6YJonFfdHZuQrW76S9XebsjkDcmLhxrW868Uig62h4CayFetj2K2rNyM2LR",
  "key11": "4i8WCWP6eA4G36o527TAmXV2pL1sYQHdxQbAd1qs48hjmRxtvYMnRqjWFMM5HDEDLrqyeKzjAaHfzw7J3XEqjWjo",
  "key12": "2yXyWq8L9TqhwtCA7JZHPo5u9Vp8vnCeYsQ6ZZrCx1P1JM1d9fec9fwomxSVtsWd4Gqvws8fCz6Dwm6RajBeVG4T",
  "key13": "4fCjndd3gBB1FRNqT5GSxE7V53gR73Fiu61Xx1DGdK7mGcsVpZSwmxcEkxqzjRyna639FB1m4a9gWJ2NWnvuLnPn",
  "key14": "48rL9eQh4VsY8Bc3yGuqEksyYqhB2djt6aY99QoYEzM7HxNsHgN1pxcFirtwRsgPjPQs9GMtJARVRfTtiUS94CVH",
  "key15": "26AkALD9khcMBfqj7E2WRjMupxoWoD5BJd3k5zB5C6tQYVfbDUQEHNpce3UK4TdytfNhnCZaj1kQneEokHeT4wTh",
  "key16": "4B815f88tXxQssdA5bA3QJ9dTWgJCJ1PJyqnXoLntiVVrzikkbivhF1z8vrqJN2s8c1ec716tGmhrCRadwCXpSSW",
  "key17": "QaUK5ZvzCF4QTNYkAEazeBHqxnDM2oWJyKfKZJjoJgQ4aRjoGr6XsnfGEhMA48dWgRUA1ss2e8ZMcDv2YYCEEwv",
  "key18": "3gQdaFfRpVqCcNfakUSzQuDJa7zCRW49qWqno7vazjGVrQeemsLv8jRG4pMSDwTqHcrcVd7eKAKEc88tmnp3BfLv",
  "key19": "5WfsXb1Jw4AwLcXsAg7H4UBdjWBwnERmAYyEvNZ6nkY2LcwkbLGyugdfXD7TABykNpZa6XFq9yefquSvZkEo7ne7",
  "key20": "2z9Hy66dEVXr3FX6iJ5JPxu2kwqyaHjXgcTy6UgyxAPesuuCyWqzG8U1F4zcEbCkWtpPNbhNVTAN51DEecMwcwwt",
  "key21": "4U5ArzaKjrXxKmMmrTr6e8zCSikc6rfkcpQ1zTR6kVcktta7EgyNoY1RRsZyV1XY5K9boDjxySfuPMiHDUPPqVNT",
  "key22": "4kcBxCYZrZ53Wv7yiP1wwwk2HCZ5GhwxjnDdhvNfZZ9vKdWb2WYnQuT37PPgxt8BVZ2tJUejS1NUSSdC7CQE2R1s",
  "key23": "SAFT13F3TXpWnwdjhi91Qx8f7RbaVSCtgmLSkPez7rBZD88RZiHMNvpj8nDMcCUPNFRR5bVKQ8RG6kogz6UEZaj",
  "key24": "5suGsmC18TBzyebQgsn6oKEus1UWFQn8B22gcddMqf267h566NMMQeQBKt92P1opTWvVgBeEQe9TJmQtzELsKiXq",
  "key25": "2BphAdeECh4mZR7sh3iV1Dw2RV9G2GfATUJwLdbPpo4gudeEDTVMKtz6JVxkdJbKFJh8r8Y5pFvTS4dA9Ewksypm",
  "key26": "5M2LgSkQ8Hz6iKbSGtbA2iSpmbPt6kmt3ADWiTPobsjtiwmMeErrjyaDwVXNbxGzJq35jXdtuhgsVnKoyF5CbVEC",
  "key27": "EDtMrArUGusEGNeSGEkfbSNPu2F3vhHSPQjav7nYqQUmqt1emgtsgxEyWqbo5WXHnDLPkFkEwyfuzYFFC14Lahc",
  "key28": "64FSt6kwWygMSVGoc3FF3YowvPVdKeYTY33WktWsEwBTjaxXXfkyJ3Mtgn4fLgNKgbGiCdVCsm3CmBbaACkHk8XJ",
  "key29": "4SLPFRB2gBxHXrC2zhtJ4ZkC7efV8FZFP5kNqtYgJmCUjC87nEQXr5CzPAcq8q8dXbLMkSxrYc4U3UinZ3Wbgsmu",
  "key30": "5g63knn2A66yigMV7V9YBQpDj44BpPCkc6x2LUmUSShshwLNi3LFAqYc4Jz4WaNsrXXyL5wM1kka4vydQ3TUAazv",
  "key31": "3ruWnrHxzuxHAxgo6pkM1puX8DB7uX16VerrmdnGcZwhTnuL9RDMZDUjC8wAXoraepGAULeoaqNqbjdHDCyYbcHH",
  "key32": "2EtfvS85bgooiJrGCqVHGt7MpcwziT31VYfLayW8dqAckLDytTDC2U1BnR1okQo7vtG4EPBotqA7dxkp8yPhoM6"
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
