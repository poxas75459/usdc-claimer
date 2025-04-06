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
    "3cmm4zLVXtYN1ncnZ8j911DHPn6yUH2gTTjFRA1hjgycFjmmtSeoU5VoAa2vzSXqdATntZWjYe6ir9FVh17SX7Fc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dPQWhZ4myyX2sz46TEhMJ6CCR1Q6qb7qL6WuC6BQuqy37tyJ8iGzeZdBVtzGJyrEjvZFJPoGJ7AWv6cFzF9bV9x",
  "key1": "nrT5P4wkMCkEhxrMAEFfDkjKZn9kA3kuYWVm1QMSkqe2AwToBeyxvtf2pnJUJMAmuVzp4AHQFPr1H8umVxSBpHd",
  "key2": "u4F8W2bmPsgXFZRXW1CdGjF3rC4XoF6ZwEwNDZbvchqhrDw2z6EWgncK7XGfu81qiQXSW2CvTwmCEepf642nG5P",
  "key3": "Hrm15eDuipRYgdFpMS3L7ZfhLqGFPfkE5VXfW3hafoe2LA2qVZicz78AMS8oPMZQoxeLB6pKFBgoXbbKFBet2EH",
  "key4": "5avYZmmmbp9TXBajDAT9pCaNt3SM5DooYS6hM33Ewc7QMfKvuqGsY5GnV28BAL4qHGNFZYzzW8FrQFerMDw4NNBc",
  "key5": "5xU3nXFthacuPJ7c5zKPTaGMFdzMhCJy786gXM3fsAFRvMsdT51gzR3iZF9UQ2T7nzRKDAQGgRZh8phkmPr8KSms",
  "key6": "44ouejbzRpPMzr2bHuLu4uQdE54WfGU8V5SHNJbR4NcTnp7K9k8cwAdJz5Ka11Ttt12xYHFoLrWZg9Y1ESMKkEmz",
  "key7": "2JzTvKBhSrWtaPNrDa68Au4Eex3ueWJxeCd2J1UFXZYV1vLqdWaZe6oEqzrqvExgSU7K43TGtug1xtKVoewzHyza",
  "key8": "5NjQxrPBmwFH3NcoCaKk7N3rC1xGMF6ZASHgZRgbwpAw2WEHmqRjQzvYmW177fZ7JorWotXFnVEA6UAzdjpFaTzs",
  "key9": "37qrwpuDyE416y6KXZdqaPwhBNNrTVoT18FufD78ZY2MXkZQZY9QocoC9QkdVKTABqRrUha9vYX1JWWN7HSEBmss",
  "key10": "5vfHNbdQMgpQ3g1JPzjvTgvVy99UqrJ8DVDThARNuxdvreTawVJCrHr3xqbKqFVCyq7yLBdQ2yu9M6AAW5B6AqDU",
  "key11": "3occMEShVx4uB9TCRVCoPpvzpCg9nYvxSXBgZPfPg33YrcBGwwMS9HJaBxLhWoYYA5tuHKr3tZepCF28ZNhWPWoc",
  "key12": "3NUB1dj3THbkBSeTHX31Zr3T4MCS3c5r1pQEXemor6Bp4HgDmxFBU5Zh295wv5yP2C8jgXTENaLLGdVW7mDzVDzV",
  "key13": "34DFdGwsTmDhRaYrufZNjAv3sL1mPoqtsoQaQ5jYZHTgQf7weAenM6h5FRakzhzuttebcDSoL31f8zHC5SGR8LpL",
  "key14": "vFARRazDqcGLNFCq4HqNTMLThkpYx9bvNmorypgBGETrZzXKvJ8PhbME5W78fx5aQs39gThDUiUDieszrxGxym6",
  "key15": "TrH3CfbcWUYzcWsT6CLAXk35XYs8vWudtq5DHeUXRht9xoo2UTdMVNEUrCM6fsM8QH1oVi9xiSDw6AdFNsnmfhf",
  "key16": "5cS9kVfh8AgHUqaJsn5wqshhsBREUzYa2u2oBbvgNyHirowdSHGU1psnaNToRyeTavgPG9hKSWJkLaMsyziqDQna",
  "key17": "2KGuqoUeMeWj2rEAn1FbLqzbQvfgXbGeBzyUQbRsCFnhaJBwxgCiEHtrJQjqqQQqP91z7daVkJWtk6j9VWrQnhWC",
  "key18": "4Te8Zf4BCmZBe9LKh5RzJBw4bFqEsC9Z6taDDZzHwgcWjJpVY8QhF7eFL75YMkMcNn4K9Ybg3qS1WFn6bvsokV2r",
  "key19": "4X9LDuSxfYkpQxknMRg5vD2ESfEemXvQboYS2qY7rQfsTnii4ZZQvaiGJeWFPLWeVLCThhDJEKzNHU23DuHPkoDD",
  "key20": "2Dimf7BDXsqqWBVpkf8PLEcXZuyEWUEXbBJm9bQqo7Abe4F1hk7j44FP6nFSkatRFk15JEpmMNhi8VXHe2cBVueq",
  "key21": "G5wE87GJpBkurtBFVMULsJWqbXo8Ka5jkcboT6ig2CRWFJG8R2nVxGVWkMowF4vpUpSFrNog18YZK1VESnB8RBm",
  "key22": "63A1kSc7vmHMUZ5y5Hfv8CoWY8VXmR2N76FsbSqRT2uSmFKSehm9SCGsjoMpsdhGAvCNTLuAc5HLEmxiZwswiANw",
  "key23": "3yjM29nhpRvduLfJVuYkHKynVvnG5RhLpVJ8mxk1wfQXmTzLYaHb6fTD9UfcWuDbPbkWuLFNxveGp7oLkapxQhdB",
  "key24": "2iUWx3y1UEvnLffVtP8fWnQQC5Ytt3v3MuKRHWbwpX74WMmXo7XWQoQfVzk7URZFqVaDQM5d6DZvpBjgkUF77nDe",
  "key25": "3YsEhk24jDBBDCzYVz6kx73ZuYmEaDBSbQAvBiXiTBY6VrBNvuiQnXBqeaVpB6dA7B14WFtktEsUhW3z5ZyCQurj"
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
