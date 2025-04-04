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
    "2uqAbyPUkGBpDxFUtwdWhGGm123T1Pvcs2kTqMLNtv9MJcyzvo3SPmYhtSsab8cq9WdGyfRcrbYEYwMGWsBu4UjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q9EgbSSjEYtUeToVsBnHNcgbSeGH39SFLredph2zP7THMMRM5hoEUhv5qz5R9Ssg3CxAANqHog6CoMvfqcQ1VzT",
  "key1": "5s3CaE932hXk2Gvh3HvKLxyK4tsfoXPUQCHJTVU77UuFqsHCusc6PcnWZSqtnNSGWDDje88aR7zQfuxmutsZw31n",
  "key2": "5GJDCqVYaP62PsBLHbN1kcBmvHwJXuCnnmnteo4xemLkvKrNrWg7tx7BdXYvr1XBoV7QwPrftThBeuhKg1btSvHx",
  "key3": "2qvQ8UyhDN52ZQEP15527KUdtF8GsjG3REc6dcZ3TRMWVmfdZpLeYvyaHPKqZbBcaS8ggcR9CjZAvvG9cwVm8jXx",
  "key4": "43Ce6umeUE7N7Dmo4NS8sA3EXeTRMGACeR4cBdbTswE4hwth1mbPF8JhBjdG9YAjjcL7pA2CewtxFG4bAwtgcxos",
  "key5": "4d69kWGf4pwD21bdQ2EU8egPmhYcMWdvhPPxB3AXnFBtNfeeVyR71z4FibxMUMPF4t5FBySEy6xYS1GHX6FgDTwP",
  "key6": "2Gkz11HnWePbTR3uD2ERY9tJKFZwpFNEcWhQXKQqbjsYc3tshBfKMAZaAjN566FnkmBXCBX2eukfDrq3aX8z9qVk",
  "key7": "3fE7E7aZ6SsNYVBzVV17NZwZJ86A1abBs11ukkdKmZFJsF6KEzwmLHb8E1Q4N9q1d3Xs5Xrtk3Rr857eLrpoxm9R",
  "key8": "4TxGycUv3U7BE5zGirQ4AkaK7FqFAUvUUgYaCCieJzvNGBaLp5816y8sQxJu2NsiFovLd8cYLDg3E4AcikA9jYcX",
  "key9": "4dQxLs2x3KD859MuztPXQZk1FwYqthbuC16Botewkr447ubqiXjNhWFSjWHpiGX2W2SWnQ6csPxhKDLAGr1VFkks",
  "key10": "2qVDv9EQePFVmt3p9nMPwxnWxbQ7kmvVnfbG2HwMtT9mR8jcnYG1cKjz1APbXJDZvZBZk1McRgxReipocZPYnf5v",
  "key11": "2mEwcNKLjNBjcoR8MwM6yYjHgLjycZWz88yLLbqZ9N5ZEn1fAamvRCagJcwMxaBcoLbwwjapmNXW9Hb3fCzAx5Xq",
  "key12": "qCuGSvor8wTy6Th7dSfhDqyjfZi13mfPpVX6qYuiyk8fxk6eedCxUSs7XEUk241p2fkUZevDXgjoovnK57Qbupj",
  "key13": "3nuzkiCBXiSGsjGv8vNjSVfpNR7oF3CsoLMjiLehpyY2x4QZh17gTkWf4s1YdjTyJKYQzoqzH3teYwP3k7QnFUSB",
  "key14": "cCAg7AjJtP5PRbHzCvpdFpZawRUTQoSuxB8JXejonCsfBDfCLv91UrfFXncD8AvptLLG6DQMJrRqsEHYV1HfkWm",
  "key15": "3ndt4UEochyaKxa8kYNn4Dmw5PjSyV49ScRNcSF5abPLzgcC7W4SGxbBhLpcFMTsiH4t4hY6Lpg81kig656ionW",
  "key16": "2VpkpAgTQbs1TGpBirQeoTeGZ9851idSqmB6MpwKjJQ3BqqcfxoxvcKe4RqsDbEWtoKLB3m9mcpz7NLwFq6PK8DG",
  "key17": "75FrQfq2QokYNdXxqLCGVddukaz9xHB3JwQGi4iCBWwJDjaHRSoC3mD8gjAYWCh67f1QSJ8i2SknJN7uGJUj7La",
  "key18": "jgMARWewGY6obyjNeqcmHkRQmwahSFAzeNLhjAGMBTasE7kQ3zVC8otFD3Zu8oJLAhZFAoVnemr6frMMX1C3Sat",
  "key19": "5z5HVfXkGosQYBMtutgF4hDVSheqAmUGPrwoRvxp6U825iLSDP9xddKUZH9m5Ksx2Nf7BPYSb5KDjUiMe42xAzqK",
  "key20": "5jPPq5Zd37TSbtcZXNTQTmQtJam5bY8nZig5MckJ2YXR8BW1Q1iKTtFHXxJrcFAUiZpFobPCRzbvnkJXwSRdEZqZ",
  "key21": "4HHjiVs1FssUnPJNieB4RWqwGQcPmZTw6rAP5pA25rS1n7y5WehUNJHsvR9JxEucdhFZRsBDPETTiCLpfQSyq8se",
  "key22": "5cZ8ZMm3dtb2GCNQsXcNmjBanW9KKF4FueirkBoE9pK3rLUm483odu2pRP5X2wCbJxvHnH4i3sroiKfa9p4PXLud",
  "key23": "4xXWy8m3fdEESqSr1RJJGB1GQj1sKCxgQTHzi8hXCMqyR7h3ur2KukposTB5TBnnCw3MzumNJP5gbwhD2HbnEQZ4",
  "key24": "3x2Tryuuw7gFjaShFnbfBE747SXVCVoxQ7ooVjGcP5sCk6YGPWnobPG3KFr861piD6JoxCLLseh9GHrEbLGKmnCP"
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
