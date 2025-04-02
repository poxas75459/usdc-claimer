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
    "5nSzZek3diXxDQbotc42Qp4oA8qVN2CKQ4GXhQdFY82cmYYVac3QFsnpKsFWreE1EZHzrWLiwfPNBySKjESnMEeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ghsH8tQrntrHXznLmSSs3DGLFd4CP6sh1RMiBTxNj63mtyUdNkVqM6QRm6fWMAaazY6N9DX5W3UET5qGj7NfrU",
  "key1": "3TWRKeuzzVF9DSJvjxoNaxxudPTcAA7H2Fyp47GHnE5VZiJL74nuGGyPBivocUowr8cWpNjUvpyiRyfZS9GygYBH",
  "key2": "2dTfkXXwnvkRFQmCeeTKGvt5ZFzXfTvGUijQZno4dBRJ17U3yBBChCwTPAfXUyo53KEX49Mb2LJEh2n1uR2eWYtL",
  "key3": "3uPjQSXcbZ9V2xE9HmufMyhHogHtuQQPFQQkvo4kgaM44WKg2L3pfbyHfauDS4bLVzm3eYcnxLLiR2qz4QE84q9u",
  "key4": "3qMWDy5ZvozGxQdKi6fMekTSHW9cChxoqrrsDRgTxMVuEp1E7EZt9rB2CPQFXHyrbeQyHG5wVqKC7BpqzBREe4EH",
  "key5": "cnSLF2qjM2bexoj34VYr5RCz8ZW5bVjadzwWBZwErx5pWKE3jALt9vatE9GhDzWuron7AXF77sN7pf7GhuiHDuM",
  "key6": "2oF2zibcxDQHPu1w6Ah4EdTCWntpJwBnJdMsshkSpURFMbNZVKG4iSavHwcWhDYrcCSuipGevL3GooMd1ebER9bF",
  "key7": "WAqiqiPgr2gCY3V9T25Wm2VMtMCmfP16stW7Tzt8psp1N4aEE2HB6aedEFzk8zFSpbFBtfSux8S1552R7SfBCGm",
  "key8": "3AFMf23BgzpSCwrgREn96D9mYjzs6HG1eFsx1xGLdiJuTcQCb4CR1JKzRfGx86PqPAUyXRNMAWsWEs4czB64DUGQ",
  "key9": "2nPPRqiNiXaBuKxTNqLLpUFCSzr9bySzhUWbWJbCQvoBqWwpp4JmcWATYLpxamcK2N5xHEvKVb6oCTGxNf9gz53p",
  "key10": "Rz3nSq4C5Rj19W7vHr3SmysJJd3QdHsN7zsebvDER95cCNsEQpHwqUCgaxhW1KqqC7HetNhQYLHhHe5NF4gq2Fs",
  "key11": "3sjMJYuoeYDyXBTdTRr2M7Rz3FBiVCmXypdB4bvBu7VPzeZzUz7qdHcLMW5kSBEB1iQeF6kb7Sjvz4h7dGNoNadc",
  "key12": "5RLsRe315Euc3xP67wocAiFosGeVMVdQS2698WQhAcTBUQPEV9HsS1db6Qy7TRbzSx1CfvaEPhCLpj24w7rC8cdJ",
  "key13": "4QZ1Zr7LsDPtdyZYkZKHN5wED7RTQoEhNB8fYsPPvZfwWXbnos13mmKvyrFtPTJYbZP2Wi2C8JJBW4nGyDr3JLMe",
  "key14": "5ocU6jsarqLBimDCDyFT4GStmzXHf98Hmb3vuWLD8yMBFvTq2J37CdShgDj5aSYs6eZK8xShSDbumTEv5wsYtTFU",
  "key15": "2DSBPzHwLj5NdQr1fohKbSSYrUQSPP6knDxu1TanvQUCEmVRQCspkr4DPgMdHzgk5Cc9QLhNjKSCgvm4D1uT2S9A",
  "key16": "37hJUUeuKKPUCeAnTGmjTQV3G2sGGzdUXMk5Px8cdb6VbDXXU1dMDjong2pG9GexeR1PsvYeizRwZTqTYKywmWec",
  "key17": "5p8H3ChTBypG8hPWCjegD1fus6TbGn2DyuAJYPg7ow7egEbfRqaDHadZqLdcauB39Bqyoqhi8oFaDaxSHbYUAjdt",
  "key18": "3FkvVsqk4fsLj3cpNVGwuXiPMyVSMYnPdgeuYmkcFchhEYF9bNe5PgkAH3tKcuGwkPaVSkyHdAPJn2ReqBugNgA7",
  "key19": "JMz4RvGQS8p6ShWG9ffwmHaRBrguyXtaQ3yDRuh9YYY328DifD3LDMMVn4VfvtrrdPHayECZ93boJYqL9Y2AUnC",
  "key20": "5FHCczTq3G66hpHSrQ4v7Xr6uP2HkgkWNV8XQNKN7Vpi3RucyoLZnvhw3zyfszntHsgUzXZuovmJix9eJEt4xowi",
  "key21": "5YGQQ2ti4kWM2ZvrP7Te9fVFR7VGcW8uaWbKzqpg3f79hxMTcqjdKr3yN8a2bHSh3NKyFqXKnzdnrXMzTNQ5Puqd",
  "key22": "2YjKCVomwntdrDh5SQNvACfWXkwmtDLE7XWz48mbaGr3CiiGgaH3a5HZy737V6RY9X5Z4gJCrMMiAEehAEeZTUjU",
  "key23": "5w4mFhRE6f9K5NLHDWssrV33GqoAJxu9hnMwfX3izKx5LELJbDWkTCQVbWCAym3j1UMGBHVPWqtQKaunGR8xqnE9",
  "key24": "2VBUuGz8aTYVapeqC45fHxSe1WPb6PjBmeW8NZ236QGTWyHLXqJxRXsnq1ZxVqZrEUXTc4sj43bw3oPMGD9Jrb7n",
  "key25": "2iGXcTEEDsqMkcK921HJRxay9G6VNYQJQY5HQBAn9Ae3BbbXFovpkyTAR8NCy7DxuaPMffHh5vMMSkSws1AyREfc",
  "key26": "5kRxxTRc7fFX1DEg9uUwYs6eSWoybiqDf6oWGaDpboktuAvd9ERY3Hwiketpp6XTYaME3xi5mZqf4V1stwLNQ3yF"
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
