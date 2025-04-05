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
    "qLCaF8kbmG47165LKsXhRh53zka8sjmfRgAVjQUMwvQQvJXRcCp8DuYe9exyhFZQQebjXvBDvZ5PpbDumdU5gAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o7B9x7iWUh74DKCcU6sN3gMcRxoB3BB16a8BeesPTUGDCw27yqqffuMNTurhZfNwLXXPiysDYU2uFu2ZKuop9e9",
  "key1": "5oqGfVv2jrn7FLZiMPuHE1LmtZahhGBNumEtmMksoGLYnUjhcSqi1prYsR1JiojBbT28FAPjaaQ8zXVNXPYtRcTr",
  "key2": "MZv8njmp6NoywDTfpecvhWfEbTqjuPifJwAjnn6nQtKpxENKK3dmjrPi9xy7vF9KurxQVpp6KDMLymyRJNv21ct",
  "key3": "2FRX9GbLhe4KbzYrWcTJmq1ZD8M8Kw34y6FEUxh82YG84MvRg39t9fnrzwCCpPdzv68owQ3T2mthPTCiQvWzpbs2",
  "key4": "w9C5g8cQhCtupxyQEZ5mkyhheq84gswveEMD8K3WeZLTh7KG9dMkZWwndMYDZQasnLm8UekkGpdRqQ5z655sHiU",
  "key5": "5edS6Ve1gXQNs93YdW5JVWBMpsE4psjuViATuqrnuczDZ1WEEr6pAVh9WaAuXGFfkSJGposP1mrvaAVSZwfuu4xt",
  "key6": "2eL3yjf3Gz7kEPJBXHh5enys2Ctf1pkaofqUytLgEPApwqHhU6qLRziqFzmse9TZR5cCDY5bMZbU6jUbH2poe83s",
  "key7": "2UseRmWA4Xbdsqg13GJ11XXNhSvLSedraMr196jPVSqmF475hJu6TdkFfbgPB3kHb216tcqnFPbk34gsFUeKVPJA",
  "key8": "T3AXN3Z8eDB1CFfMdbt1B53fKapyLXtD9iLMbFrWzSCEEaQoHzwtM4kRrfmVBWg1jaUjqy9YcboYtZV1ghbigcj",
  "key9": "2rY8xmizBUdJetFxTQX1wzA2t6z8QPcQmicrZS6jwF1JSZHGt6uPjVu2dhvun9tzTRcaFBFKpYJWPozR7mdEMTP8",
  "key10": "zBK3uVs3i1ymZz4cfof9KXPf5HGGE38RtBsG1ZfTZo5Xm8q7YQkYfjbYJxPPTstywA4bRdwHjtJKop29h7BwPr8",
  "key11": "TKvkN64Pa7iKeLsZVEdxACZRu1KcY4CwSCcAU69mVfkxAVytv8BZSzmHdKeLHbUk4tHtx9Zu3rgazN9mzHpEhgo",
  "key12": "46k6LuMB2yGcSh1dsTaNKoS2x7NEzUxexGg1W8NoAeCXQvyoAMMSWUptQMeTnXAoKLrLCS5peHzv8i1PksfRQoyH",
  "key13": "22QS1zfDycWztVCEEaozGJ19CQgf5kmPE8gwGPRYN4UCsPF13VnNypbXhLtreekFD3FKFd7p8zVkegD1iHQZQaPN",
  "key14": "5q6UvUFJTTh8EPkrADutw8wPsvCWESScLqikL4pB3VEFcU5ZermiT5fAxxcYH18AL596vCFQhsjev6Fp5xJYNJfb",
  "key15": "53dXD9RMrKfnGcLerK3wWwMyuUpVm9bepW9nGrx8scitkjMhMTHxXzruDdguTmKXg1rYQfqts53qo7fk2vHmu3m9",
  "key16": "3FnNRFRs8PYM1DC4G1r3CWZe56EwERLrE78MiUs7mDbUMvJXhpwW6qPhYbgBwKF9jjoPyN8TScNUn4duzkn4bq79",
  "key17": "3bdeTYwKNCUtL9kZpxhTA74ddt1a2vS4gMLmqBcuBDoTDVca2x5XyYF8Ex4gJS3PrpEYzdLxz1sH5vQsLvXVD3bC",
  "key18": "3J9m1DQZAq1wKuNF69t5ijsFe3YZAx85Q2xjJ9mEGM54G6W4ftZSwdXSfnwKBv9FSxRZpaW8iyv5vtETEeWP8edx",
  "key19": "53zh33iKXnwYT7cNRXtTp8EbV1hTBFsoSR2BUTJdrR8K5tjMw1tcQgrL7itBtHZmr3qsdLxVXRXwcMxRyzUDJgTP",
  "key20": "3YPxJySoP2oQFdQ4EJSTaawi4nD8qcH15j9Nz5kfRwQLChZ8U96rMKohZ9erLEB9iu3xFah5apKteZL6gPVT3VNN",
  "key21": "3cwvdM37n4WV2RktknhQM7jGyTdDgN1tmou6zo1fuRTcxDAqhJ6mRLxDtNVVAgv71BdfSyQZCGhEHRLDfA2ZvUs7",
  "key22": "d9FvT4Uj2tTYth4ZGtcCLydafSxuLtrDvGkAtdk1DwT8oFmmGWZsjxpg3tMtu4xS51zZE5mvb1FSWdbf1Kd4nSV",
  "key23": "3FknDZv8N6ihcTNKFVouxk7qGdhYpv6oaHjeLgyzarJYzrBpP2Aeo75uMKarK4sxHDb9N16q78bPfLfoxvbbMU5H",
  "key24": "uQ16xZbhdd5hYYveFz1ym2BzAG4yna1yhnRqxZ4k4aV32H8e7zPKDivawmp8pGQ7jCvzuXsvuQj5MwCoHtKpjby"
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
