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
    "3vhqe1THQqAVbLeJQSXe1UYGYHsPBodjFccUaAnSpWCvFxXkfjzGZHYUsbavqnongwVzmwCKiPFcidgQ9G7f9oz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KWxLntuG3wF7bB3Z6bpMUZpEY5dyNsXDbB9vxq4CkcZbTUW5jistu8u8HYtkJgFffcDfFpLSv9RGWu5KMp7RCes",
  "key1": "3hj2RkVNnxYMLVsokBoQSWaa5J6pVbppnvhba1qx15qvVGMqfgipj3PD2tMfJpbM5fmgewcVjB7VhqqFMPNgMigh",
  "key2": "R2pgbUbUQ7sQaWVPYRBCSF1VmPz9P9W3EKY5xSP41NSZMMeGCT3w5gAuN3bvbPp47oCKBUCteeYnGvwcfyAE2US",
  "key3": "4iLtqg4oUtxqdoQQciBcA96jPM9eY1Vim3RsfntWiayVVgfjTVp9ft8wcAt5PFFyJqhyJAf2b1yigdnxhBu7WP87",
  "key4": "4K9D9NaUz1XCZuCSsdAD41jGALCkyeosexWcBWfxUCusygcCsVrkgUjGV7gittEGCUD8egCeD6NN6WgUNCKFiB6R",
  "key5": "39h32YzWx7rs4BMnqg3oE7CYzeJRpSLAHPd61t2ZuPCW9S8qhBWMZzkTMiMdnJmuujmRkrmdckRQde9jQVJMAF16",
  "key6": "5AqhNcfDoC9cfQpYmiM5pC3F9kPpgE7iWDGT7c9hRy634gt3kyKdpLxRFuk53zJMWsM6ogx86dWXqQt6VCaUuJEm",
  "key7": "3MpLTLG9hsAzphjYFWwomPD9zbzmF1c5mhEapiAT7rurFt7CRwUoh6r4vo73oPov9BSK4LNEKX3tpjAEM5RBrLsK",
  "key8": "2SFwpXsfZeBteRZZ1r1y3kcyZrxVxHhcYB3MaMRF5n9foyWZsapHrgVQ2M86E7iNWdDw3PgoibbNF6X2eiE247DY",
  "key9": "4QLnWUT5VRfmKh94p5dhV735N24rTc13uwV5rxsGBZYUHxqAwCAVsga3yTY4yNRPJGsbdXxdEFH295qzUcdQTXAZ",
  "key10": "2xTU9wQu2oNLB1cWrnXii7xSZrf2FdR7cDLx2oRrJSU9BA9vVKDG6jrz5srosetiYcvVpzUJyQVWXXtSQWXpANEm",
  "key11": "3Furj7px5Q9tcvDi4Gj4Tv35fCGMfmtVw63FuWH5KtuErFFDS5LxDgXPL3pZPQ241qsuQ9pSKmG1nTbvXpjBk2xi",
  "key12": "qPv9JUY1c43csJpmG4NC2cURh7eUDyw9FWHfuHpcEseKLBwn5ShdtoKu2hpJji5XCJpNR4RuTdQnNFHhbHCdP9f",
  "key13": "2qJvrTbnjqcpumZzu5986EfLMcUkYAiDVYQPhsHPfvBM21e8kLrzZZHnaz1kGGeTvuXAUE5qssZ9s7Bv3rttFhAc",
  "key14": "3jvyoJtWYkAmnooKMTMXtCKMpfwRiECV4trnL5yTxjK2QGy24MZx3rxKWRW6JVk7vqtESgYFTpnP4steB8ML5pUf",
  "key15": "FEugp5qgsi2sRhhJ1Dp3sNNqifsDUQ2ErV6Y5tiEpgQdxZZ1WmJoqxVGRBEHjbAJfyK2hiKNvbAxqrkXmRvruyw",
  "key16": "gkviM1GGGjTsDyy2tZTSpgXcoCuqDs5rJ8FPjiFMDzTfzH95BMSvrtVU5GX7C9MixtFqKWX9kfkuzoNHgENBhtA",
  "key17": "2XxUCw5dh2JDGd8sopK6pxgNjri2f4RMcRv97tZKPQ3t1M2QuSjUkFRgDYAzG7UE3QxPf4mvcuj6xELWaxBRBG3K",
  "key18": "53BAm3saAHgfvGtXtNmw29TVgua3VAPqiptX5aV9jPxUWELD7qDsx1QcdckQxUYUEwBLb9RvpM6bTz6FzWxHuCrU",
  "key19": "4FmiCmMh1dq75Qfq8bZ1FkeV3hmhSSYSBw4QSDN3nVCKWBdYkWtBKc1MNm3r6WTAQW3gvMUBk2xHB8XxWQ9i4euh",
  "key20": "5J3MytcoF895T5Bo2NLHFkQzmSVPJak8LDmNnjoq5XEyNH9tox6yAe2B6AXxWDKSrUmyE7VzrDW6UbnVmPN8vwoJ",
  "key21": "2BNCxEhcdkKLjFr6Pd8nFVUDaQUodPkuVQvDzQvGzLESHGDcmbWoB8WJoe9XEQq8hXutgoigfzKqDnMmoqF82kDG",
  "key22": "3Sr21XbrhABz6xnHNHtNa4HhfHfGqFbjyxyG4Y76eBK4fhwgfw9ASCcywJKQs2SK5kyiE4yLAwTjyjKPx7LR1JPu",
  "key23": "5WysZ5WnFo2acwkiJSMK2BoJpikkU7yb3thBd7ai3YxkQ4QT9S5Ac4L7zxpPkrpBMEuQrWxGfHZJWLECZCkQLDj9",
  "key24": "21ZCX12VkUo89zgwqWjYiCpGhnVwQY8eJXFLy2mftSr5bED6GKMDKKGrszBuQmxNDdENwZHjvvrxdkJH8XQYz91P",
  "key25": "JCfKsshaZ4fojAKLMAX92v5eE2N6DrnnS6ZHspZZLqJiFSTjMh13FDK5VxqUWPQSJGXAetqtLdttaHEi6Jy2iDY",
  "key26": "2DtdYNrdVKo52Sk97sKS8qZQsz16GSoofmzyGgGvXaEhStLL68dUnLEungfWKvkpd7Jex6EJN3EsYkRrxhexvsko",
  "key27": "261s22hp6n3JNrnVLKyD63FLpoCQ8YFEhmXKboyJFjgWuLxAGxYb2pPd1xy4S4EVYeoa74Er84TrEN5Fw3rsdRTc"
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
