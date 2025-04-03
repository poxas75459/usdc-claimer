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
    "58uQVEwEsioiKEaKSQjdznRPJs1h4RspLREuHmGLMFZ9q6oepPrSbSEFBxYUCmjY6XXbfxEP87z4iTSG146urvX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N3CzkLRbArhpKL43fnJyDre3bFBSDgxFN7XNMhXgiA4SAKXvw71qamjeNJahPWtpHt1yrmDKppLjt7bGXS2dzaw",
  "key1": "4duh6xYHykpAWmCAeGNKdrNSZQCYHSTawDkppHT232cyBhdqVN1uVcCK6RskdGZGhkNhZ97m255aBPxmhUHZKemq",
  "key2": "5DWd62E9UxGTv94cFzsmQdLhLPjbSEk9BNoiUqDJLDJULZFwvMEqSckCJhhKKNGaciAmAYwcjyMsEn2jnrK4gtf4",
  "key3": "ej49oKnC9ttFb5VLbwQtzX55WCM1xAgfGT2JD8s8JBVkvURQPWU29t3S5czJ5XnXfKiyVZB8m62LC561NEWJdXA",
  "key4": "3KnijA8Qs5Y7apSpeJrBjjUXmPJxnHRR4jv8UrtwfecojssR5ScXhjcTDBJKMVMB7rdANNsFLDKqAxwkZgec7BU6",
  "key5": "3PaxJzED5q6Vhtk2WjGL4fQNiDMNyYjC8sVsHXYz1z6iyf5vdTNaVGtdAXknZjkBWQnhenxFcyoFhs3GUJNzAkUB",
  "key6": "3FzWWHBmiTfh9dbgnsfWaATCFBAoarSbXRRftyk69D3ADe3vUsyGwN1c2UEhP2SCjGTRtiLVpgHfyukPfbH66Asz",
  "key7": "ewCxcy56gRYmKqaawqrDZTKwPKazaauJRWtmEpvaVYWZCMJvetGfwuSvnp8raxEf4kh1zdq1hqiJ6sSiC8MgEZr",
  "key8": "xS2b7oVBQMFHXk4QZcVxiNZRoF2Pb6Fo2sMMd8w6qDBUcQq8pe7sVXKQE63vq7McmEQDFAENh5e8qmevpKuXJj6",
  "key9": "2TLWm9HUef5eHqYAJGESoCpW7Jgps4e7MSCsGnXrxgqa2B4cdFzazW98QA7EZ53CfF7b5ifte8S3nSYzUeCPCFee",
  "key10": "3MZnBWR7kLeYL3KDqYwnJkssp9u55CFBGhw5CCF8ToYKWDbRjN6srmpA8Xsu18jLbghARbbhyumj4iyRurLjhmWw",
  "key11": "3YC46bTrbCzW38vBHMxUT8oBVaxADNjACUYtY8yRo7Rkk247nSrhAghC7yEnTVoxmNCpSmp7YoE3FFPFx2VxFih8",
  "key12": "4Y9XkQ5Rcv4rKjGqrWP4tQ2exHVH1c5jhmcVygM9ptRRwoB8nVP7TULyjf5T7F4xv7sgzGtzCZ8A9bHzqomzGhUD",
  "key13": "4qoMmTaavH6D66xSEVA88r8yKP4XsRHzNqQpmtGY6wx9JfQRcuJPrp1CaXJv1cKYPBs3XVeW3harW7RcfkUsBdBv",
  "key14": "AyHsFtLUYBQNy4d9h31uryePKGnFwv9s8v3bCrXyvgNhTeJK5ox1j7Yu3HcRqinXGyzDjXnSoW5bsUUEvTB6auK",
  "key15": "3rsH7Bg5Fuh7qRwBzbtBwPqLmkxkrTYLqMkqQj4pv16qfWmfpU7AjL8RH6nLdhwks7bDsAbatR4g85jNubWFNwAp",
  "key16": "2N7a3UHW62CcvVvarPpVGLahf9rvGTezxCTn21wEiBuTjPLW73Apkw6t6FyH1viCqmhmWHkabceBmXyLUVjnNuqH",
  "key17": "34zDejBxSKcv1STMoWCsdQcGMwGfP6crqDzLUdcJ4Swkc8zVmr1YoPjPurcvBJNtdXUvbsy78eVKZoptYMEysmQN",
  "key18": "4hMwc2PHH8ksj5tWWJmufr7N9bZFNVrg8u11yXuCEHPQST8dqFMmuBj8NZEMaqrQ2Svsr8zbUBTTsvscwTAiYdqb",
  "key19": "26h58kW1a3VBnrMzzAdea2MJsHAtLyN1D3Dm9Y2CSp8hH59LE71nFYu5BFSvw4gKkr94fzfwCk9VgzNgHBovxdcv",
  "key20": "2CqH8gVKyDT3vgtmYjJL8Ssrj3wZGjYNCjDtDxbxveczq3MajiduQNMMLy6avG5pgq6CUqcDdLPmYwjvY75N7vWr",
  "key21": "3nDaqNVr6SZHKvA6EX7RsqutwV3CfEinpDnirJXUThWdvsA9uc5TxvrQRSQENV3JeizHzgUBHA3eoAaLgfLqttoC",
  "key22": "4ekDngekSko6ueY1d9dQTar6epUGGV6SyPakX3GLg7jhB7hwq9fQ2HNTiYxfqfuQqTXRf9cCKuKhkkVGf3yx1BHu",
  "key23": "282VcQeyLUHa8FADxkc867kVJp8XXt6khombChkyx6toEGC3xLj8qADnS7jCskTHJq9jqg1uhz52tEn6ME59UGBY",
  "key24": "4JsapNNrFCuTGr927EWcP7STee7vbymr2gvYF5ujZ7yYxKx2PVQhmDX7vpnKy5kggrw5mDnNP4JsnzzsZtqMwjYq",
  "key25": "cAwG79GBV33Lkxj3swoZ4JBfbD21As8j4SrbymTiLgxJ6Z74Cz71cmDLmCYoUqJXmrzKgJoYAEiNp6L7VAL8CNg",
  "key26": "2WegiqU2Jh4t8RBAhc3qSGBQYTD933eXr5hsGUKFJ1rLyUHogXHRwocHQCHbeJg5xVixrhXWKq1RJ61D3rd8nBPd",
  "key27": "5ZZ5BaJXCMYDKqNB7U5iStU4DfPgRUfjjMAZHrQURJBR3SgLTz5jLkZCzXky3Fbc11W43CxTL9KoTBobS2t3jswK",
  "key28": "3jJGLoigeTfdr9kmTCxswVz4Ndxs3RnuutNnHXtyu73a7p9asQAuB8b1yEoaaPEmuBDAAbqcGSLxi4F7dR9bTo6c",
  "key29": "492SGxbzYjR4P1up5DafSJr8Ppdkv3HZ3ZdW8GG9bgjFYK1KjqhULw2ZTWwhWkG6kHQNZjoX7eVe9Wc5PQubPrhf",
  "key30": "3TVfmtzpNe3r3Sz9xDBnwcV5pim34joFKYtNumuQZtHjQzxec1FqgncRx8uoJARPEtrRhW6Sp93YVPm2rHdh2WzS",
  "key31": "257AzdBqgxjj7jGT411wdg6ENLVmaDwGLouVCAJpKVBDWoPo5PTJoGM7Aw37rQoig8sBELYVA3wWmjTDVh2PpPkH"
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
