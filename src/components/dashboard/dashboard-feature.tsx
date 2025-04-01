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
    "3GxwvxRhMLP4UeNjoRZJPE7AhP2MR9xuTnpEhfHfAtxcRYwC8YZPjPRmRhRTVnZqTQvcGx1yUVyYMJm76LQ1UFv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UuhMHvADKo8giv2EDdmKu44pGkoevgNJKgVxpzJEJLH4VGXq9MxNArj39qDmh6F2xpp266VmxWMBqBwjmM1XFhH",
  "key1": "3TP6KjN9TQuYVvzetumbs8ovheehFS1oEBtCungufNXkgrbfjUJKxQrF7QHetz4qXyGQ4PCycoxALrZYp1ST1xut",
  "key2": "268SZuVAp7JSUkSaQTbyVBcA7PnvZDdGmZTM28PdVTG2a5XtyMk7Fgg5yrePiB1q9ktc8fuMSdW1MK1UdPwqoHd7",
  "key3": "5gGufrS8zx9JsstE5zvdCitA4Qpxk33UhZXek8KqFCNokLr8MFksFA1P3aiakWsmcdPCqeeoctnB43FhP5WFdce2",
  "key4": "kHwSgg9cyqjiTnpbnzouMMPjkswkTkzanpbLqEKuv4bkeKzAXrwEwjeD5X4U6XB49C6qETiStcqQe3YDpqEvUwM",
  "key5": "4tfE21u1gqyYB8wTvUAx53YrBQPHAKoqLEpo8PmScgMEJdKyeRcrJKDbz2vRXnEoFTQyS186Xvgdo2AUZDDBaQaJ",
  "key6": "4tJvJXNz6mG3eowkQvPqm3mtee72ZnUheShj43qYDBvrHFVaRNF7bccLpXuXcLyjPra69DUD9qNiSVwQ6K5DAymb",
  "key7": "3dsG5hBpJJa1FUp2VNo14jDNCirYGguypXTPsfhhCejDiP4iMK1U2s5Qh8V26kxiXPSEyUp2TNa12dVqCPGZ5xyv",
  "key8": "2D4zW9erkCFr58vAeAvtx1Kq3FsUXoa37BARfycsimyxyN7g4qFWNxsFiASUPVDE3pEMk1fSEEUEuWrgoF3zrnsh",
  "key9": "3GswGQUjSrVf6FhFQer56qgBpMrcZwhoWBVpALcD3pdQCPMUkDF19SQN5vcYEt5EH3CEx8X4sv7P2Z66jUecX6se",
  "key10": "624uiHysjMKw5D6o41TRZUhdgd1QgdeXQxXXeMTeCcxnZAnuVMcogZcPU8hwL3kqG2MSEBuKVWu533XoPyj9TU4E",
  "key11": "44u43vW5jCDqh59TW8oz8svb5Y4iDkeAvKPJjArBjf4hyDX7LPCHVMSeoDmP1ZEr7ZUsBrKMVJz4jLLeajvNjFJx",
  "key12": "2Ze1EvLQWf2jqd3mHja8ngNTAcrwzVqxsngfXnspmjNtCfYGjPs5te4JC3hj1NX6w7NXme8NdwEPW2kBbDregTkF",
  "key13": "1pLQaqXzodWj9J9W2rKWxuBe5xkPHzUZ2ZGoyv57yFeeaTgEP1cAT38L76KihM4BxTzoxGZFqw7N71rqz122bKc",
  "key14": "33NEStcG6fVuGCM7ESzUF4wqpPWXsaU2ZqNU71nsZWV95Fw5whPQa4sNcakdpTCzUQ5w5kwvxNryhYzQszJHz8fc",
  "key15": "2MuaSg268bPst4Ea28p6RFjVFAFTe2jkTWP6PeTxVxgpLgdDYvPfYnWMRMEXLVhmVmZP2MxxPUUH8jUTV7pBvzMP",
  "key16": "2Cg19rV7kYEUGBeDrpKftEHwUGSQ2aabtvaXwJfcymzfDMymKfgh5B9zuhio5iv6GUP93H2bJaCh3mecHoGoCiT5",
  "key17": "4brNj6bdWACi3fZo5c7phtFjJCgBMWJFuFMwMaN3J48FxXmD9YGJj4aVxtMyrgyg9RZX2c69hb2oKvSYaZRmfNW7",
  "key18": "3yaYqm2kiZ2VhWEoPr4svdisGUP71Z2EoGBbCdX44CLZdzDHMx9JVmURGiwnTBegQcNWH438tH9MwqLpY5SyU57y",
  "key19": "TuoZWkNKKNGZiKbLp9xzKHf17a636mQ1HmZ2B7eoTa9QzWfARyML9rTgpxY6xVNeBwpKN1KMKvQidX42fuGM3J2",
  "key20": "3QK7Hv6mfD1abiqzPh9sK58jPuRRcbfZ68ujYuU4CfdwC2tDnDjpkTjBQYDkcnzoZLDiCf67XaPdEU2crVAoBKtb",
  "key21": "2p4H9VNUJHU2D3isSs1U5ZmwYHGtKVGEDAZt9tW5vuraSE1zshuHKdRpGpVD4Nc6DrUt7v7iEsqKYeiTcca2H5KW",
  "key22": "4Di5A6UEUj2KW31MSgn7hm21gyG5ggSTFZ4RdYco2u6qSJkQi77o6DNfeC9nA7c9xe9sa3Z7cjerbqSxXqqjHjNm",
  "key23": "3QgUFmVRYHcn79V5hGxiVNpdhFD4Ke9LMAMaNvwRk7gKPkQLyj4DPt7HutTF2NkU8SEpsGzuVudsQKdnxUNKs6Hi",
  "key24": "5TDLfTPb7AFkN1ok5QqDBoieutoZsP5CKPYcVpNqtB3pVsZxBYRtE66YGjFAnr3P4pRXj3AdWNV1Uz7GcmrLo4Nc",
  "key25": "dmdtzD6hbTZzkcXmP9WcZFy1kMCZb7jabNWyX3z5j4HRpTnPX5TPPnWRhH9VJbFv1V6XF7cSedvDzWPXcW8B3KE"
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
