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
    "2SYPHqriC1iFugzfzr6zeAWYgTdAn2prp9rk23jUiTPYLW4RzGQZXYjkcGKw48tRC4poL4BYzsW2rMH13d7jKpYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SQ7ikWEo5mHEqmNXUvAPsbPvstMcikUdQFZ6CYFzfVbuagBNyw2yKW2VCjPGEH8x7KMH1n4PfTxw8PDAVNB2Prr",
  "key1": "4q6vahbKRU3WPYuqzxnX7YSJopjhS8PrATT4UKfkY7cyexHRSFvznZLTjhW3wvd6RoUCXFGGZGaBPrrXSLtDWGGH",
  "key2": "2HspXUtPghXhTrzU9DWyDpWmqZG9vtvcLCyNsgjDhuozeknH9wQE5MuCwqYcha19eoUZdEuDhiiWocUtSfBsP61Z",
  "key3": "3B5LaNvJy47BqC4djjbGvXFA72upnQKd4VF3gfGqQs1WmdmPPU1rHycF3Tnw9cw2thwFjCzW7DqJkJs6vcoy8wso",
  "key4": "5dkhErMoHAfycyrN8Wi7SmMV9DbCHdoJtqh3cTeEQEteDV43cNdfzp7vqKrc9EdicAwXDnzpk9CvQuwFuGaYnScS",
  "key5": "2oXn8BpyizhcUQ1JuivbLcGWSA8pYpZndbk53BQVKgYXfWBCCgw27mxHdVB3hDPChqjPbiQnYrSqA7DNMpNHJxTD",
  "key6": "4XjzwtaVUU5wRfgjLA5tzFN9y5f2fxZM6JBrWa1sNejPwXByoY94frNwSDwX1XBgpa4j8bN9xzGGJDE2aMuL2nNZ",
  "key7": "3MiWLGByUWKQXvuZze7HN79vBpPt71iC9nqgsWeeg5Lcah2xxTcGKnTdnoKFUzytd3ZqUkqKsjHiUXbB4cpDkbtk",
  "key8": "3vTipT4w6rDEEgoBrLd9fKJ5xWHcGURhaHYWzQe4FsvuaVXYjRGCcrGPBE2iCeHxfjaHEoEWRDQkex7Hkd5zf9Zu",
  "key9": "3dhFVryMuCLdzZRwwhikSrLmeNBCfaTsRmk9Ey6wmygRiRFtJtixWHVqH6vVWJEGDtjvhks63oF26Yjgs9n5PVuS",
  "key10": "3nxoTHx1W5pUogZV6Dq7W59F3XCKcfpqWdw6eXPPU46yiyD7nuG6JRUChWkBcDFbyLkND8tCfVfg54ZTLfpbtdkj",
  "key11": "5MkWfkqzrzRUWXX2we9tcGTDbd5AmJJWq2tN5PEcfHLnLeVdmuvUcnc8KZE6RhmftvboPBPqYLoD84Xmx5AhZYn",
  "key12": "5SxAxvwhhfCcMHgFKT1WzTqC4fYB6n2gTirwAHvYTpghKyDG4dHpGhwE7JneZqayjcoE3YDArPFDTdvhdqFv8fbp",
  "key13": "3MxjZcsvK6rET16BmxEzakT9w9qnmGaQi352eMNnae4LyF7EJCxyD5UrYTZwqDZy8kPtPqUAsacKiQM6Pud96zt1",
  "key14": "3MquTUVMTJ8QMVEcuXSWq1wKyt5vvRfb8cioiyp2UbMbP5zurUWQ6HNRjLLnBptkQXt2DWNQHeiobzHyDd3Vapgk",
  "key15": "2vpcH7Dv3cL4ZL4SjynJUjKefgYX7E9zJnZ8JfeaMYXveghK6LF79hY9MN6JRxVd29njMi2pRVzqaoyDdM58eFMS",
  "key16": "5iubADgcbwxJoDz6p2n4he9UzNN7guwEKxaUCTWhAW9Npj4A9UaL6GatkeH3aVF5yWALv5cd5ub3yhZzwPDJVBx8",
  "key17": "37b1r4dLbFtNP4tFamGu6G55asnZTdNFU16iZ9K8CgS1K47WCWQQr9c3BUPghNGLPpDKisJ9Wem662PZXYCTgcue",
  "key18": "43B1NvZ9wgqTnsxGk1v4AhFLU4xK7Y3iyWWweY4tv5PmSJ8uLRt8nRUWGR213fH8LTBKiHEHQ76MnRHf2ippMjtB",
  "key19": "3YYfptXJfv4W7S8WZry5ypgYNnuaYqyvTMYQVan3Ldy7zEAPnRKQ6XgGgPBffRpxwkVu99sbziTmfrLEhL3WDdss",
  "key20": "23zuh4bguLoL359zgJQCQvwqdC3EScBMULagXnJMK44z2VRDNnJW1S3ghBnpGDs59mNmZfQCLdz7oRtpzHs28t6h",
  "key21": "2myMzwBtCAcYEYV7rgQYYgpBmi6WWmz3eRg1k6LWAMPP5SwwxenFioH5XZHkzs5bun2DmEbMH24f2NLxgEJEU4Zf",
  "key22": "2Y3fGV9TfLm54BZHBMtSSnL6fGmGXErt3tY4qJxHdFGfgxamp8Gj5nR6Eid7g1gzsgDtPjuMwZzv98EQAjJn5ZiF",
  "key23": "4BA9bZFoznduAouqrFqsxJKj4GeK9jBcbHPkETeEyQcrB1C93N4HUTHPMmLwcSUskanUaUqF8EvRCNEHx89xm7sW",
  "key24": "5A4rDs52iaXCN2nxhWnuNgT3KUAYsdseQmxgCKpVPQkYSVKF8uzZiSZpNA4ysxFtMdWhksTkjnfcWL9bDBYPm1jJ"
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
