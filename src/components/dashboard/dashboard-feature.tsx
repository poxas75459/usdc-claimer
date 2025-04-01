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
    "3DniKPoeEPNe2R8j3rFRyLfbfJgjPxgBCtPruXoQE8SeGSDj6BzDqPHq4ei5X11AKpna8eH8ZCwb5EWiGKGkjMEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TBbk326j5AM716bjVmUtEgK5sZfZT8RTJHUw5fhgc2fQUnm7gn2EsNb1akrG3sfLmrXr5v4becoByQnAm6Yv2Vx",
  "key1": "2yUY6aNmLDGer1LVvgpq18yJuRxRtvRxL8UyJXtwe6Mvf42ejs57gNrWP1CVMPaE4yiis6ukmtJYDKY5ohRNA26",
  "key2": "5utsWbC62V5n7er3BXQWkebdcKxn5ES2fLggM98zHGoSddoHjSrTzkkzUhFvEA5UoQvQZ7usNFRM5VU9ucd3fUwg",
  "key3": "3q554BiLYz2jLHzuDActXtYr2Hk1YGehdCKrCMFcU1dfFw2wCbAwxzgeStCho2WDJadHprNHvkH9hbcB35z5uWAY",
  "key4": "3L2RUhyngiHYyJDyqwg7R7MhWLvx4kpvg2fJsKFh42YP6MDiwpizuMQe5qPMG1JaHTqvC8npcmsr7PkCGtJDpw1J",
  "key5": "4JHmQU7uz8XAPpfZTN1zAb28RGvb91Vs8FXMjsqF1T2pnpnyzNCBgPJsAacT32u2WVQ22TWJdHbjWx76B7oQBrxw",
  "key6": "3g9NmzyUuvjqcLbK6WYwCvTwjHMYwzfiNJnMn2VejNbFqmME9rApmvEk9xeNa1BvuiDuTxX9CWqfeWVB2zS8B6eM",
  "key7": "5cEsznJQa2J9b6KDMidABngKB65nU27mtQogBb7PJb9wF6QNHSwFw7gH8S4GjeqcWE3g2kooG65jmqRAW5EvZX2i",
  "key8": "5zsexAawTPUY78b2Yv2nSDttprjhHzUGbQ4vUf6xuHPqFHVLERveX9qHX9QTGLxNV49oBtkgkKz766gypMsVya32",
  "key9": "4vcL34ibqLxDeUqetu2DTsPf9pSNpbFxgCFAUe8e4B4Fqew2u6R24itEgvCQ9kcKP6HTzF4XGrobKC2LFirEJQt3",
  "key10": "KLJb9wDG29186V9WzLEYe8vHipQPivKmKQ2qox9P2PNL6fzth4KA2Mg2BK4QsXhs8y9qRiBJRmP7twmvqiHBP1n",
  "key11": "3SVc8A9xN5QgFLK4t55HcYYP6PHgfGpumWM56LNZAojeaE3rss3a8VN8fcpK35exjaVfPkRKCMU97ULJYYsHt9yu",
  "key12": "5ZzeyVGRyJ9DNoM67xKRzspNfPsPEWth7xbiUJecoC2DLNTU3Pn5CYH6uNoiLN56vvwTbnxXunyDenxdLXSuLNi9",
  "key13": "4AmeLYqPWfrd7XcG4sjk89ykd798gqibRAPeq8BaixcTJCoGSSJu4hU1nQEhNrMDWhB9CiL5ZKQBeRGcyJhC3bX9",
  "key14": "Eit67jDw3AhxSynmKuaXDRgXTv6rdoAVsmpz4K35jHsLW2uBF5wtSuniufka7wH5z7TREq2Qsjn59fPgNQsPpDW",
  "key15": "3mZQMc1H2YutKVXHfCAna2Veg8snSyLAtYGW4aKeDbq377eBbL3ehKfmFbQKHzZSMcXD81S9bQ5bLWVP6JpCYowZ",
  "key16": "2jS5jRwRzvZtqy9R2XVACEpPL5aRLXTEGULoFz2oADTX8jYE1oeKHLbDqVhF4tfRDcpvicMd5LQH7eq9YVXamaeg",
  "key17": "4CLsgDVN5VW7wh7TpAKk2yJTPhoCqnNcgFHc4YsSV6tMTpZv3YgpKD9gNSGhP7PUcyqy1ic9dXKmC11EZ4ifZAQ",
  "key18": "kEyr1CscscnvfqXWmY6rbZs5F9K7eqgdd4HCBGAGPJyMY8v1NZjCXSAgJQpiQ1rxyfSMTGpPAqSHLNZBB5eL13p",
  "key19": "zKtY4HPXhuhCzJZ2mWL2FyJkb2YA5A5RdJ9tkLqLWfqqhHZeGUFBE3LbL5CGTaQPPAVwr4rmDvQM6dscrL6K4zj",
  "key20": "5VD7koVqwaREvCVoLg6jTjxiyvp9bfBsecASd7xRwGjqD43ko3Ajp4kZLVx8XWXT49WWo4MUftjy3abkACyVKLSy",
  "key21": "4bwkDMuW79Vz8LTniUgvMntxwK1HQzyRT5oj9WAP8uMJbemDJqUZTNFxQdKbR7aBhbz6ZQcatGweGcigS6W2ei7b",
  "key22": "m5PJToBpt59juHA91xNBkV8tiYgPDpv55Q2NC6xA7ZjVcmFc7frzBdkrUrQkgU7mjin7zATfqxTBt4pxZWicEhW",
  "key23": "KQA3Ln9n4x6b38KN2pge9hSDNkfQn4qiY1fcY7LXNWiP1BX7xbnks96nj1BTmJZJ9NLkqeZU2M4BDkfpCYpLtLc",
  "key24": "3UVUPcgbCsMyQts98YpM3GoXXv4AxjAhCndBgS2LVeWE8DvQseGbLXC5FbWn7cqTKXpR28R8RSCxz9NsShXKLMVi",
  "key25": "36NWuSCqiSXUfUCB49EP3CmfiWRdBBiwJavDEDmjNS1efmGtGiSSH2mp6znJ8ZjyLZq94y8GTnUUhh71nnUnFrmh"
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
