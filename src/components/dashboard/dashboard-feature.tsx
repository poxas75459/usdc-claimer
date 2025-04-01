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
    "4bp1WT4ft5eKY8RBxyzQFkzU3B1f9EDFxDma9vQ6UxdRE4Hssg9cxpTNX9LAHPJnZoLv1mFToHnF2v4KFdg36cb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ACi4heiWc8buQ9SV2KTyDqFu2ZKoeEACXDeNjHbx8x6qj14ch4objA9Cn3MXdBwnPBaYgHsMTkBeRaU7fRzLw8d",
  "key1": "63E3LfCiaEDLtG38nLtgybdYuco1TekZmBA1RThG9dR99kG9RxtoDUnyadBxsBNXHi3BUSSFt6vUjW8Xoo4Fi9cM",
  "key2": "Dop3M7T36dMAFFUFENdAcBcxAP9KUPPhELCTpXQW7GmDstpPJfGA9oTtVGhPYoKHZ4GR78SNXg1y47niQKHkXrG",
  "key3": "3rSRQeLNgXfavm9mRmUhDtZY44iKzbnjZ2jBrfbgiepMTYV55ts1qmFt8qkQG84eVL7sfZSjEcmJGxGYq2Lxpsi6",
  "key4": "3EB6q1pC5bp3biYuw6y8514WSxZho1AdkLTVS1jZwojL3Xmfd5MufsCYNyDpbBMNycYqFT4dRAEkrXCxboU9YdVf",
  "key5": "5r69fCnvZtMvBHLNhFpcM3JNA8YBunZZejVwXwaA2WnPHfmpQh63YMTuDozgXNxSUE2j8dM1TiUJ8Bdo2JkhzHkq",
  "key6": "5nTQ8Yw8F6kuaUHdW3A3mGWV3aG4FSvNzfGi8Hv8kkynBqxZyng9Qj66T2vUGxy8jPz57YcLbzqYsr7d7DxZ9pcB",
  "key7": "4g7CZ1vxAxUweafazKH4abY9JXe7Lj8gFSZoY5HojQUeb8JfaW1bdcAhiXJwCGuUxB9i2WnSFUEw1s8di5dtLHDn",
  "key8": "5PXZmF7dUMjR5jTUPT4ZwSS7hhapvwXBfc8k1v1R72xocAABFDkJhr6MxQvXHZgqf7vqZjvNJsGSSeqzmEmrdnpA",
  "key9": "39yCCqgmYyLU2j1hGP6bgjNLv6dsCy2Za8RAkLn9LiEwDGKg868sjnG7nRG59cj4CQLzHmHzrqxKERPiuzXZ7tyq",
  "key10": "5v5WA4yDHftuYwiH6BwnWFsYMDQFy4CbCvyYfitnYLyskMaqUZFVkqzQQj4iQ1FcLVQZk6X162kHRufLzYFoeWiM",
  "key11": "3aC6pme9ZVMDmA3XWREjyRu6W4pRgBaxdr3hCEDk31nQPKHd5tYUTGRh1P5mKSfCdFsraXQLFdxRr28cfzMZswtm",
  "key12": "5MC98t75M6txsL3bQDRgCbzo8yotxBbxwMAjCsKwX2NYn12u33SxFjYUsdLB8WnZ8e2D69by2nQjHzkJ8jYXhiyT",
  "key13": "3r4KMCkicjkSwyLqubCBfN8dQc1X5TrEQXikqFZkeVLe8H6s7maQejw2vucQ3C2yocyM3QkaPCxM9heSEKonB7d",
  "key14": "5DKEGK2JZAM7r861GWynEcWzvvWUs3fYizaNRtPK7yes8UhfG34VuJ22NeK85kSrnbtBCoFkMWGVUEYowqEyupTX",
  "key15": "5pqMjsSpwtAMHbNgaf3ZutFWTsSddDZQ2JHgbZpKimXAeVpeAG7EqSRZWTXPE3HHnyoWjnLgWHBorXMvJZpotBCu",
  "key16": "5e2yXs1gna84Q4co7WuitWiDrmr4oXehmq9xNZ7V7XXMNcnjn1wbY3VB7dHL5dqsbzqHdUPPRD9LXGnzSzy1HMNd",
  "key17": "9rk1j7oDy6L4D7LER1qVChemHmcypaAGFjMPxyMMHoAxhvzu8HizK96x5c64AwPw7ipo7x7juYsk9gcqQrPETsW",
  "key18": "443M2SQmg8usvYCWbak4Ad2FRhsdCZN6XNd6Hx9YHCFouTAoX2LVewY6ZknfCdCFJW6itqJZan1Xtrk9AB6gQg5m",
  "key19": "44xtDbeTcddH264wD3ZLYWi6tUTrcqfUsU71QspYfr6TmXSYRTjfmHwtj1sah9szy5xo54Gzw73Yo6asZKE2YDPq",
  "key20": "3mctjq4QJt2GiMHxKJTHaxMuhQ2CNQb2MZzSTkhDZpihVEefBArKCBKL5fH6XBEPkyBWWZk3KS8w9ANzRJ4TGP4v",
  "key21": "gojPJseNsN9d2x3mNY96fxjgNT4Yr32yJjvc3T4dtsV4F69XdhLRCxvvJC8mooqTppfhp1bnbRPVeUiJqRaS467",
  "key22": "5RSB3gNXHrguLbrsfsV4ptnf5Htf871yVF9aJPcEdpUpc9zFT5w1nRiYjspiExMgR2t7NQcMgfuLQsSd7BJtLqq5",
  "key23": "2Ad74nhV2XbTQqxHcZ2qin4bg5JgwHim7JXc1wq1dwiaPMv8nEHqezBu7CHedXWFC8d4z5ohQmQjTKm2vEZWZ5JK",
  "key24": "55Rirvh58p316qswS3nAVeiot9ZV6kz9SSNxD9rH3bkk54TNzNPPs6Xuxf6qpuzuwFZvAKdCCFDvoU2efe87cDR5",
  "key25": "4i9e2kAVkhz31GgdXbMsW5AaANxuHMrBMK2MVjt8G3uwGEe4CcAtoPtdswCihJsZQymwuURfNLG5TZjcKPiNf29q",
  "key26": "RMRvQwi6i3d4KqCWe7dya3CVW1HrCL2FeK3g7mTBwUdF5Np1DpXJScwopeQxUerS9oSMBYBdCNtzkGjs4vk2t5t",
  "key27": "31zA9sg9qxnN6ry5ZYABRngWP1jyij7X685zefBVCAiynfPzyuPyjzYBuRCvXpPLcdeYuAKQ7tvb8btVJzxqtFYi"
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
