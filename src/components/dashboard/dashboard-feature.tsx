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
    "35DEEC758mbcRVosX1V9yWdX2fWAoqGzzLJrh1d34nzRRF8tEWSqkctu63H4jxsy7Cr1YpwpZEWWA6D36TsDCR2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61t4jnURwUF1DWzGwhZXJcezjZDCzhS7n2BjgpRCwCKXZxDQ6XHSKnvssKvB7CtsgpszskHQRGxxFa4TjKUVEqua",
  "key1": "59R8iKtRwdKyikHjm2Z8rDZicNRG6Z6MaTQFPA7j44LciEbUXyzpyXLe3ZQLdd6Wj8hjPZUWAvEoSwSoFoA57y5J",
  "key2": "3qxBr6BXtxSU3FVGv9ALQUHejcU5yRLZ3TnWGmL4LNL2CHzdcc4oiKG5YuEFEtZLv4fQ7i4vaGWbSx5wGr3u81cj",
  "key3": "48BvQjJhuvTRZwM8theZSWLu3R6fPbt53nis2R87C7H6bK6agQU6fnNw9vXMziqDfGqVqCJ7dqUqgxQtPq2Y1KuX",
  "key4": "3keXMPFxNZwSQZ2iqnX3Xm7CC8mtmi4qGKgrL6CbDUvxzWRc2rbAPUuPoJLZTidMaBjKQNxaBFT4jMnC4yKnKT9o",
  "key5": "J298DXu7xngLq2y6WJz4C4bXobXtUXEwwsh1nY9cLxcGohzSDqikCsptieocGT26rQVS1PRAbpH93G9JU7T16vu",
  "key6": "2Sz4c2p8m7mGFq6wMpNpRBH8bJiTVpEg1stS9TGGejZYavncr3v2jx8k5LensaJdybSh1o1Twdk73RY8aVu7mxM2",
  "key7": "65bc9oXG3hVQtP2VFU64fyuLNrZds5wqxcezbXNcgmVNpnWcJS7j1qpzfwKRM6biiyJ56QXvKrqaF8yYVeJEsSaY",
  "key8": "44dU7FUCguuY2jwyEnx1CzRdQJjc92WbyjYGcnmPmGXp3rCFmYjKZXdtCvvjnh69bPYBTdEowzoNdrJT996uXebu",
  "key9": "47BFyVbuGkNZqnzPefLW8rSjvCFnKBeYqtqCBmYmPxBUTAiE47KDryFMyhzTwvyroqg1GGG192C79jFmByLMSuj5",
  "key10": "qD1g2XRqp6Qy5bimiBiegFUBhfbJr2igsFsDgNnrwBaVYwAtHxrj1RZssZM68zSdmfNxJwuBrcUn8amUswZ8Wvr",
  "key11": "4G9zVdGwNfVPBMTFwKQqAL3tCh1XFMKgejEPnQGEXpfEqtZcUAZwW63Ud7acatUBSaobsS2pVwN1WeqZ3jG31mWX",
  "key12": "5AHPGciyZrrNyWowEMBXAUZzs99mrzfqFcmV6RNR8JUfwL3bQJHviEfJDqrk2c952f2fgYUPsBBbtGDtEbJ5vhqv",
  "key13": "4kQt4AkVjoHeEVRmXNbps5zNusonZBjsBmbqtPbnK8VsAX5U8L3W8X8ngD2yD6L3s91oBDUMf2CWiyFg6zapeXVV",
  "key14": "3aHfrnTLPFqKqNHvufhTW6fknzXDDVd9qDj5F652by7DwLrMsD9hLJiFPq9nhJrUkK9UT93uZZsZCC7Ypoxadcfm",
  "key15": "3mvkatqggPV7oeDnsuM17eV6WeY6YHkjdaeJVJK8Pop8GoMBuwW9LaeUt1aXgWKsiFXu627nTXJT8TvdkjbKquQU",
  "key16": "4Kz8DbMN1ruETuj3aV1EwDVZdcVfk9D4nr4inT68C92GGNnabDmDkAmXXCA9xuJ2v8y5UXWh8ojHrqYjRk8Jkrnh",
  "key17": "3UQrZQmKnWE1dnHsRhBwZ1zSXm9LkGTyv7GUibUW47D3L17QWNdwdzULSJbp8vqXXCDswNYJMCbaaje5fhbBSo6q",
  "key18": "3FpmpHJ9c41jQ1LxBtz9Ljj9HSxiTXF4VN5NRUyfSGCoyR5QtW4DKnzHBgkWrswqqgkteja8gvBaovUSkS846wEz",
  "key19": "4KNkSh77sXSvkcsGyqwiWhpsWnMLdG6QD9xLWBvsBDqoHbTTvXHW8aDgf5XHuDWRtdbr4pkAWZJ67HB3rD22Kv8g",
  "key20": "W48gp174x47NB56jsWTCVotykyK5mVsfoGyZMAVN3VXXV8tthFRSynyXbV6PptqzC9aE57MUpmBpF8KZhuRM5P5",
  "key21": "2YkVtLEUVqMXLeo2FTYJsrzaavkMZHyAfyKuBVkr8zgiC4wQ1sYvRPn9WjYRGq1t45Tnzij8ja1zZEL54qufDDtn",
  "key22": "4HRqaSkDPH2jsNWMndWLG1VNAuvApCNudBT3RDY3yr2c6WRLzbcpREbRXoPxH56MBoWfY5jLZeYLosF6F4gCehV1",
  "key23": "Qsr7qD7w2A3asnxa6sbPchvvuj3rBdALmQz9g1ucJVivqVLQoKzQduLwpgfKNFywfDFcVEVV8RJc5d8L7Ypcxzc",
  "key24": "4YTcmeQA9oQKiLfbSLNGryZR9Jprrv5RUuS5tUsgukrGNVU8Zca6QvhRBWJoASQLQmRQgWnKYZM6BvukVm6FTSwo"
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
