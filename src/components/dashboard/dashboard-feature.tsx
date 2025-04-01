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
    "4sxJDq9nbQ5krjrjUc9GFMHVWhB6crad51yTBv6qFpVibey5XAWfFyhNZBEhyFgrxRDJbkeqjCXXXPdLksViuZ4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wRnjHhM3yJPWF1rYgig6mdci9KKdJfnL2UE1Zkv2VpmQTTw77McceBCQwHoFDxukfUmx3BT9D5zUkAs6xnQwe9W",
  "key1": "3Hi2QZjMbQxxeGeib3yi9A5rMaabneaJ72iYFQ1ATBHshHGkk2czx8125NF7pfMLddrm3B1u7QciVn3vuN8Fr3i3",
  "key2": "2Lr5hvgJWtJkLNW2qD56rvm9x7UTbtW5UEHujJkZkrRf9NbRw5tDSSAZAACU7qCXMxfRoSXpz7EiXJDSHtkHvb8H",
  "key3": "46miW8WNW4PSvPfuktL3Av4MwkaEYdvWZdJMhMzEEvdFbmzjwcwrdZKrykPv3WhLq6NrXy4iv376RrhW9UheHPQf",
  "key4": "63UJxBQLV2kJj2rFcgNMWgPUoHSx451NyUBx7rfWcn6SaVHqjcuURvs4hPNWYhYAGnDKKkbQNzmjuWFLCYiaighU",
  "key5": "5xzrsm8mg72nAMGixEHBKPHpbgkLbEk4v89MjPHupoQGfeMj8En2tnaSa11Cy2JfDcmwtUZxRhboSSMJWyKZqazp",
  "key6": "2oMXqVvJ3hxtfjRFYj28goArqj7EGybf4vk7xNYESKo89FoXg3fv7VJjkkQ83kz2K1ekCb8bErGhoXt5opNpSmst",
  "key7": "2ie36A3LeoGPNZBnTkFmQX2XPXuyT3wTxirj641dqj2s56CufctJ1Jt6S5ibzRzZrEescVXUEctu7WxRHWVpxCVG",
  "key8": "5vdqjY4YtpZBLtKyqSVDcFj2yTm78ytcMeaJcdsxoBVY3nj7SUdfxyGmKmgEb86fr7ua4iLchkgV3hbxQbdaPED4",
  "key9": "4sdDeVfa5MZsq2N6pihChBdfweGriSVKrbBb7guZybSYAE8sfyX9CHKszcvZKjkTVYHxiE4oobUFYepDwEUnJuA8",
  "key10": "66dN9uwbfYjBLCV6QjzcHnhT8BFvChDpvx2rXpoCYU6Q6sPZ2Xycuu9PyYLDTYfFBQqEcNbHCpXwhdSBw7VwUGrD",
  "key11": "4skCezE7MJhqyU12M6YJvWW5iHYw2ZawvuT7KSxviY5RsajAtbmHZc4VDtJYSH7XLXmhasF2ysEpkpWJr8WyVnxJ",
  "key12": "3J7KcbpohTuRMXte1qzLzM6J8b1xTQkfU1gsMBu34FcPG9VaXfZmuLZkj4GTbBTaYRpa2HHQfHnw7EmHSNK4yWef",
  "key13": "3Sp2wddMJvNjedQ5TzTZQsJsa6KCfTENrhigxoWQUswMuoGvYGBAfYXWhtzse2fHSGBqn4dLnrFbzUAdywiaEGpR",
  "key14": "seLkzNWWURcNieV7a8hKaPZtTscVHbCgN3fZWXVq8st3RhmF7av4ufeBPHxeqk7cvr7wwawMFfiLeXN5LWV3UiC",
  "key15": "4SRDnfG6T7c7UUspUJ8soEirciZvQ1ZNQ6CPATXfmKcmZWGz8U8dgdis4uNvLv2RDY1gWaJaJz4SQiHFPBWzU35J",
  "key16": "54cpqiCAXa66sHvfqC99PpC9DmnTHgjHhDWhR3FQ9Fkgx3kquRqQEoVMJzGBHL4hmFBjP1Ck2KEu3GTzVKxvHr2P",
  "key17": "64zuziHaJCobfLDj3TH8qc37wB18tCLsASiaFAcJsqG5ur9MxRQGgs6Vkoe6kgYeoJkrhMwPxWA98QdBYYeZ4g62",
  "key18": "21wMP8So3ovmhTG215ZVdvmL746Nj2gsDePehNSKXMjMFjjujz3xfdxyLS6qxNxePEbrRUgFwZL6jVgvTKDE1cBK",
  "key19": "3emicBSXgEXYD1KhSVpmBTQQNjQsovxfJm5X9snZtmgFbjwvai12YpecG198RopkRVTv4YpfvH9AYEricv9zF389",
  "key20": "3RFpPD9AQ2d4iLfGgUN3bzYmrEXSh7bR6iXHKpXrAnqHpXzVqnryVfn2NhcNFV2oXK33FdpUn4H2RfYR4waGsDFa",
  "key21": "3EoqqPRUWK2BxfRc9LFLhXFyJMsdDqNnFFEnecqJCp23JbyZhSzDKv9goHzUyixYneD5CS7PRskj61GpZrzUs5m1",
  "key22": "5BNnVhQxd2ZqrH6a8p6mKDmcLks3xRGDLNVN8FPwxB3n5gMNCve7cB9xqN5mvFUTn7PhBye7kytFBjXaDo6qVqEb",
  "key23": "4UgDv6niSmRSq4S8Enxew5cFUneTBvRv2zkmd9vp6c8Fq7eFrDWNXFgQdGHVHfa2zQjekxRhnL38Be9jd9jTqtX3",
  "key24": "2Jo1po2E6D5xZ3yYZdVRx1qakDoRoJzkWwGjqYu6fraJqQLSQDT1AKkwiRizaxx7aZJ7QkBDPsmD1eF83EsJqhk4"
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
