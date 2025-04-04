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
    "2QA6UZjEKCLpzrXzFR2dKjD8XsFvBaXxn4msQ6Sx3AjVReWGQHzmAimLuYkRmSufu8rpSMpnP3bPEyB6Pdp8q57n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ajWJNpJJuBMG4HeJozk1eRo1U5bfmZbK4dzLRAKCfNs264kjCJ8VZcZNSXDaqBEWbsgpYyhiPwkHvo6CyWSstfd",
  "key1": "4fiWNJTZdS6MddH3uqJAb5QL8U7ZkvxByjErXzunUpkXjsXr4fhRKXBFvJaX4GJrTRxacZNnewHxMHGqkjjs7WoE",
  "key2": "QHQuC3mL6Exn4eUPTb5HqXoYK8h1PtFwsfM9mfTD8sMHUeodArvDniGCdiMzA6KuMWtXaJgWDkbnBvT6xpxPGo4",
  "key3": "2An29rdM1hyH35MTsSKfApnmxTfdVGSwwMif9yoTa41Py2DFNT66E3S3iGYCpRoCCLW8YfnzRwSLD6t6F1xNAMR9",
  "key4": "eaW1gCWbDjVmrHubsvKvrQALmjBeHmnWvx41o5ZzxiG3jLcxSxqnXufLXvZaQ85mychnkkFnNzrpiNeJWYY2SWm",
  "key5": "52JqtKH7d5gFkXf8tA1m4sjMJ3vv2B2huqcEBa6DVBXD7k7BmjhUP76oiALQ71QY8Jasorg2k8f8CDRSu1bzEWak",
  "key6": "67AaQz3SMBiQLY1zYWN6qVqaYf5knTtFm4m7TuCWsuuaLXueiUhXTqD8RUdF9p2F3FgayyeBBm6tfRgfufovB8hj",
  "key7": "3ToqSoU1xuXerGKXwTsSakcMWtHuKkH1cggoET4VQm8J9XA6J8kcsj9iga3QbRJkeVrQzgD1GLdPuBuAC2aapwwa",
  "key8": "4FUKVrrMV19wvHkN7poMGbk4EdTbx6ihEZ7XpKddKHLrDSNe2hVtBC8SRZskmMiWMvUUDncVJLodM423KificPsv",
  "key9": "5E2jN5cfjRZoNt6ZQrS6WeXT1o8AR7WWPoPq7kQPiSusMkPPZcjUNzYYFu84NNCGJfKRJUdzPj9Xmek7e8Rv2g2A",
  "key10": "414x6KfP9ddm1QrFYteABHQPwVM5yPHbBpLnFn6oM3wfMwXxdowte3rWbMVr58KnQckbjsW98g2rYiTxx3EP7Adk",
  "key11": "2ebbgskJWPrdRJU4B1PK4eWagfXBQHQ9umzXVC5MJDovsCZPpVEwEkCNmNHDg8CHFYV26NTTVEhW7jAYW1uf6y39",
  "key12": "4bCuE57S7jEGrtUqfJesNt4qVuQbTZoCacPDuW6dxMhVav8FY6xJWYXAWFwT9qi3XxfcGsxJC8yTa1K8SVpPTFkx",
  "key13": "4Xp1SMhAkeUokrZg2hUsCXYxoVWPsM5vER12L4XRLLWDzu1Bduu9vrdhE84phRr2BKByd1Fw5gWhDQTAk9tc9XJT",
  "key14": "2jeMQhRSCaLDxHRCQtJLitgr6JsUvKAa7trSmqTCiTFYwqhJQkDMtJ6hrupJgjZaaNz41b8YJ68v4ZwQomF8VZX4",
  "key15": "bTHkF2sTS1VMBuAwdcaJYRupzUvJjhS4bUoxmKBFymrUrJqucfmyFfbVkHTAXbc8iGpjgUU6PxeKnD1NPZtDtRm",
  "key16": "PGS3m2EswzjNR8oWBi5QYNs8jzsc8zSDyD92iLtDAbkYuUTzDvFrkBNYMELsziNcw82cxRdHxNR5EZXMMuC1NrT",
  "key17": "moVrRsfKiRF79hGmksNJRfi9cJa8RQcAXPUHTMr3B6EPhgjTj1532gcbJqUPM9JbgXvxdrd4KovZsFHjCrsY9b1",
  "key18": "66E7V34ziMrv9KkshYJrSHc8CtrPVkRpYVuG7XAZDDu6amk5kEPo3EKE1fNPhpJkqjZPP8xze3bFpkj4xCYqWcxx",
  "key19": "4wwvthEShX7qM5J5Mk5fxnJ8qhkbvS655t52t1csE3DnRAwYUjSWyhNSRM7P9Ej7zuouYuoi2QVVLirq7oTgDWy3",
  "key20": "LCRrqHqME7Q4EZxg7GpzBYreB5QhvUe5LxK9XeWBSwx6jrqvuwTsy18KT9GUPvu9SAUM9QEsZ7esKR2o3uhCEPZ",
  "key21": "4u3DBcW15V6GakguvVhYjXycTv6eyRrtEY2bXBE7WBFBAs52BwxNQAZrU5ZkT7aaeYsgW4Hp4ZZkNnunAQTgmqpV",
  "key22": "3ToiWHC8aTcsLoSqKudShvzp9ER26S2kXBkrCfRBXSZVAbMWToXSNgx9H2ptimMVRRy7Tx6xQggezixyaRbPqYcu",
  "key23": "hyspDGGw64FvNeyaJYWUgQSwBbjrUQxf8j6qRRppJ2H3q5VrvUhNiwZSLUKZYTCVsMSge1dLiysmWZfiXQz2aQu",
  "key24": "5eE2ctTRrPwZY1XvTBS8SEuhSbWE7xiW3qNf34xq9VEFoaVt7JvEC3xePEDEBHuWxTVrFAozhnwHAKAAMFPn5YNZ"
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
