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
    "2jW3xibkv7Aotf8SxACtbPGqKE1vyThf8opSJcggg7sRnMwCzPF2eXvBA7JiK1Pfj8QWGNtsaYW69UPKQLCW6aeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XwVSRGMAwt5YZDYtRwmRjpHgdA19Dg6BwdqTMsV3f2aA7mkzZXKtR9ZxyrV3ygGRY5jjkfRBwwk8jr3BHMi7sMY",
  "key1": "Sq999x8KDXePUY4SLJNJeMkWCwNeFKWuaQYEW6ni1iVGbz2sYgC1Q5atiDmZV9XbNJowMmZKKQuCDkhCMSaTjiq",
  "key2": "2wAu44MCdQ6h1mQBzZgeoR8YBouFdWRzuFbcaCFQQ1hQ3KcNqJHACFPnVcztZnGP5KbLFCytofQMRxbNERy8jTsb",
  "key3": "A4LR2bzrxKKoGbFtZure8u6Neh3pDvKRjW9yWsNVNFhCGxYKyHiFNFMz63VrFpYwBv2T5GjqBJwqptF9eGavfDC",
  "key4": "Dxc7NeBe35uaX41V4k3nmXUM8H51J3Zo7epVt9GUaEa5Gt5nu7NcNCwix9kBsCJLmtEqWr2undphCCUAFubdc7W",
  "key5": "2uhpTMQD9EGJgtdxSmKduHN2d4a3oYZAaGJgimMg5sVZkx7yEWedy9NzcARx4UwbB8m1H1m3M8aCMnDhEXenSV59",
  "key6": "5GpytezHem5xhknTbSYvE8tXbVF3TxyMGf5d3Lo9EmDsYKXNDtdzameABFAhHyT7tWPDKCiNiQVHwu9QPgJrFqKX",
  "key7": "4vjpc2yiKJbx5vYSXqKoFwJyn4JsutExJEbJzc9tm1AffVRXP6u6iASBvC9xrp4G2pN6xbQzBhefvkwQWZafJUsH",
  "key8": "2tAd1xAxK191CZ8k9hiwq5R3Vm8N84d8B5C8ffW3hJTFUohs8v79dEkq4bVRas1mP1xkB78u7WvXSLJfWKWeTQJR",
  "key9": "3zraJUG8jejRRPrXbmPu6d1nvTUFdZN2tpihgzP1dPaG5fP18rRD2ns4QjsmY7vFc7muj1G7A8geXXDVwW6HiUT",
  "key10": "3PEybAixCvKa5gEGo4kcTXPGxGuceThs8v7WbbNetNwLMSMWpE2fWfqJC4qn7c2NuyvNuo4ZFjYc4niDamCoR1T6",
  "key11": "tEtdiDQQns6zTUSUS7n8viKUr3skiaiFDr5akbLP4JvpZdE1ko2Zfx5gYTCwYpoGDvNZadaXRJQzcdfs2BBZnub",
  "key12": "2Z3KEeYCv7pYR2Ht7Z5UAscx5DGLddUmr4B7DnX88Mmqsj1hXz1G5TdnPMTZ7QzVjj8heGPuhimm87cbqx4DTcvk",
  "key13": "23C6duZgqEUcJVzTsK7Z5CzacP4Fh3dfZqF3BS3FaQxefCN5dtpPfA91YwQ7tSbAmN7xNaF7JuLbjBUMieMA1Kbc",
  "key14": "5CXJ5xoPmeWoMnerLZVK4gxaDHAgup9wFFG9t2Ykc1XLsCFqbpJuPVFmQehhten6VcT9WNLDd2zKcvYWXmFyAdEb",
  "key15": "nt2qp8XawoBpKuqWHFijAN85nGANYvLN1cQpsyDDY2oaTCnvzTp3JNVWsPRyL6zG94wbefgD2GBrpFx7cUtJUeN",
  "key16": "5bx7AMAs5T57k4WigQ9GgtNiSCM9yabrnAjghjZNc6c3eSFkkdqbcnuwK8F1V61NsYPwdKNUnzkbHpQqZuzRTAkH",
  "key17": "367iamdEQRu7SxKvGNeuHiB2fMHDqLTDTdQnJGXLBCtCHzKCnZxq1ZRDSEh2Y9CnGhrNrDEUswsmaHy2wxahhNcc",
  "key18": "32ZWof2KxokSY7gAn9ZterkqyP84N9HHN8BLfxjmjqcsjMg5yJMTCgcC263ZXV91999DfCwYofztfkJsvLyaainj",
  "key19": "4ZQNGcJSNyn3bujQayBJhjo1C58t7G9sfeeQPrNejj8w5D2gDXXTBCA4qheHf1J1R4Du6Z8N24yjv4ufZpSFetpN",
  "key20": "5LHdcPxfGbC36HZWYm2NXSLkddnnQdxAa9xpoJRqbJTUZB6hVaT2X7Bc1BVLGD5QYJeupmCabwoJforpBSW1cNS3",
  "key21": "3c2A5q7LLW9bUYmaK1HU9rzWuVjVkXxH6c2CZ3nKBLXwFuX9EsVFwS2WVydaXBvWHjXmXrYZqZsjze3KU2wf9dZo",
  "key22": "2NHf92YJmqhxtXgn1BDBe8fqbDMMjnzfrpmWcbkW39LUFyCcMnozLs7nRjv1FNTh94pnbaZ8QTrGndPS7TvspWqB",
  "key23": "5ae6b6pREutGXyxDADBmCcFwVmjB2ngoYKg2y9vTpNNdbCzBFXX1BBMj49y22b8LL1FmNgkKb16Wfx3Ez6LX5HdF",
  "key24": "4HYcrHF6eEC5VTYLTW9MWRTpMk2qQwEcn1y59WJ3qN2689TQtoE56CPAVn2mUsWgzAgqYqu4kSAzboTpJeejwePh",
  "key25": "Zt5rEyRFWL7edGJDej8og8fJccg2VaRJ5e6afFgseV7ikTbJm1DC5WJfs5FFMazZNqDweVxNoadrJZ8M2Z3oGPX",
  "key26": "5FTLHmzMZWFn4dAThTucudDwektJkMXMVgd94m1HbWCwXST5GAjxvZkSKodXAyVjnC8RDMVrpsVSbbmbTfhsrkXL",
  "key27": "3SkpXVDkpw1ZwJg6KdagPSCSsJ68bQGgN1ucNb7VpwZaLnYcmNWSVCtgCr1KkSpFvY9QB1NsETyNCedDFW61gWDq",
  "key28": "5DVoYscpk6YCTqR7qLX93X3tSWGr2W91eALj6iqoEeeQCZRCUwLtoEiBitGNwmyrG81iRtfV4g2Jm3GkLE8Jttgd",
  "key29": "418tM5mLXvvJjKHd5aKBsMEDeYQgk2TjGKY65NkDX2gxAqHL1o5HnncGXR3f4ksrGGfiZvCLv7Z4ogMpsmEhzmz1",
  "key30": "3XFPi2GVSRthBhckFFF17ig1AYMktUTZN5g7ytC2tFuU6R1PwKMdGudiGN8jNXs4e4SQNCKMuWw1RwPJnTzMMpsX"
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
