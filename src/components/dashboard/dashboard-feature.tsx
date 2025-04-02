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
    "QzPP2f6kE2keaC4rzWK4Z4xS93FViGc8a9g8ratiYo9bmtc3BfbNyC2unauzWMYsFDPdqae9gtMHHGA4RT2aYSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Txc3ND9sVHAwgtGGjrNKvhuekfnxDXqoXcRP1sJ9i919o4dyxqGcpyt6JiywXZfPaW38fAAkAUfaTQLLqHzQaq",
  "key1": "57QmmJ5VCGVwFApooasBoYTUgr8BsmQgbQRfemjkohigd8di3YjEypshXB6E97HEFd1uKWqAnx4q3exg2JbtQ9no",
  "key2": "5aW5chWDL3dCY6Ub9odpJXh2sjFVarRZZTyGMDWdoAMh5Xk44widkow8MAYviLfErNovGXU9mJRfw3sS5LE2JwG3",
  "key3": "3yL33o1VgjgDDzqNoTu9PWrGPVptrmRAbswBYfdqssPTTgMJkLEMKCA2HG3uaoZ48xTn5dpxR8p9Qb9G6gbw75zU",
  "key4": "42Mu1PB46TscMQ4CPTRMrLTEtVsyJMui2mDgDtRT5gnoEjgSFULaXAo7EoKniDacSsHPtjpagHZQiPswWoEdiwTy",
  "key5": "3c3d6h9Tzdzn2CUAoVMp6bCouXwTkSBA6jXwBHF9FhAbAqEoWBen5d74QRHsMRCoPR67mpFf6mo1LXWWVAEebeJp",
  "key6": "2x9sNf3nT3sktrQG3tvU1kYBN4Yqs6ttAFzCFi9LgXm6DAjcZyroHdxHDJGehfenWmvFnH2CFmoET8AJheb24pJC",
  "key7": "4MPNiVUXBNMB283FSNe9p7ZjQLyDcyyzz3srEmqrH2QadWurRWNGNMTjswZ2akUGyvGVSzVnAfDApzwfEiKQXi2E",
  "key8": "4sLAbkucBUsu2NmUFXBhssa4jXo8ZYNq4w24ZkerYP8ZetzE7No3yHxJo9SWn6z9b1sVgGL9Ru8NLWFieJmeWPLi",
  "key9": "2JwxRZyqyz4ra8GRRe8sdW449V5NwzrUv9u1VFiGgKVz5r8pYrPighM8URc3MYbzZseCRC3EpYM2u1WseDXsApwb",
  "key10": "31s3QFbmdvTvscH2xnrQCya2oWu4uki13rs2FP6wbSFqbVVGUGfVnXjhoLLMekkyMtWy1X2hNNN4wR9yief4paJ5",
  "key11": "mSHm8Qm4tPobphjD7UKxuRrxL3qENbxad4WVYxgGfMqEYA6dxPxhK3usfoN77krC5EFYyMBRHnLYyP2osgTyKqh",
  "key12": "4qT5sswL54FQT9NhPTmirqzmCtgUrUj6VfD67DMB2QgR7x3pr7HBD373ZBUDiSh1YTdqvbqydpNNz2Lrq6WpGLjg",
  "key13": "XTwoDc2v336ZAiUbbVj7BpLhuBV1CKwYMCBioPbxDZDn7UcnF3aPpGqxgfK2bhQz9Lths6D2t1zytFutUaS2hjL",
  "key14": "297Z2HFi2Y8GxhGZDeDwrA7hg231ML8RBX6sDSXjEGQwiSrCj3vwiQ3mzB2tMA5FFACVoB3th9nJBmytgvdxHHLb",
  "key15": "4qCBuCBbezpzotjd26EVo3ihebRbsSE6eyoY96SfEk7JuykNypp6aKXeoHni7L3KBx6mdsMDFwc2xfuxUSdD6WHB",
  "key16": "5vm6i7JFE7xWVBUEHytZnv8sA8zB8zNgVzeZ6MRxHsLZusgdu9J3apy7Pu6SgitwWiPEzovmvKSSpF3H4uNUpicU",
  "key17": "2KYsvUJswpRNAciamAuK9ZJhrUynwHWcj47iZ8vtaktn45iWR57F4fobYziXUkG8jphqeCAeNVtDY5ELxQkn8V31",
  "key18": "4M2aizeiEkxpwbRw9Fat7SGENqDx9xja7CfFPdRTcaXcDeqK8Xen4uLAaJ4zZd2D4FWMHWGp1VVNiRXno7YeQbAP",
  "key19": "2fvrDSxuurogHTiTtJRtMknHjuK5un5fxwkD8SvisLFxx7bUMb4sp6vF4LsdbWU5eEb28UWBDB992S3tkAkDjUAG",
  "key20": "5GpaadFtRgudt4ByKv4Vdu6g6ginBATLLMfyMsuJejLKDxuS1aZWsAivWNFQJx3f84Bjv2snmeuGmEcvbXgEo1wY",
  "key21": "2ZwoATfqdLipLvUnGyWqStvgUDmTpdk3R3QHu6HSM3bMHjXP5E9Wq3YfDWEPo7shHY7CjS7kXWrnAMbxoJ3NE91N",
  "key22": "5ezhxUZo4twr8VLe2oPwSSgxxNGKkXVsCYjkVNuDN9SzsvnhrbVN5DmkMEEwxtKGiB5YXrsNbF2kfYAH92GcHaup",
  "key23": "3yHDpo4Rdawppx8ikGuvHBaGiEBPLKSx7iXvWffh5gGmReBsxgdsvgxjz88iWEs2xdmGt8Q5iiDLdZdWDPo1RdmH",
  "key24": "32jgB8J4wPTS87si45Lc2XVScJwvpR2DDRg5VZi5noYw7VYq2obY2A8qeG2ssDfLj8a6udJ5gwDPe92aisiHLVo3",
  "key25": "3KJMTfqdZrKzEVcR9PiDq4hgTptnVa3BKA9gF22ZUqSXiQtYeqX4o5MEksYEasceQ8Yoqn7WAw3rq6wEiam2Wn2X"
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
