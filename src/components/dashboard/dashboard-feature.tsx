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
    "3pEM4b2RHgwo8s7HQVThdqavMsosXisFd3UpWpJFHeGRCKH1aUY6HNKBEmPDZPihHtp8aReDEdD1Vo9nyXi2fawo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hkpAvN7ERwZ1D9Z5Zcy7c2B4ESmicXNryeVUi89bZfusqyUkP1rAWJUwQwSfbQ6ppJduxb6FsmYDBNECodyoajR",
  "key1": "4HJE6d6efVGPnZqkDpKbdjpm8iLmjkDuk8v2qrbzp1kP7Y72hbC7YQAtTik7M6jJfCWyYtXuE4JY7W5qq6YyQUEq",
  "key2": "3ETLL63oo2SajLQTxZhKbPCL1dDrehdUsjzpEBxCvNPQFndgXePfUCJipDNEUTGDyeWMhWdj7XVkZmzXZeSn4P9s",
  "key3": "5qESgVFSXUQeBMnH968qgqjKwjBEfuV91ymQcbC2RypWFXtAUJ6Tb9QspNrQPBqefj9Kay5ozdNMNAwWSgCCrkme",
  "key4": "2VmLRVosYHS9i8bxY35Q7STZjFVe4XpBJbTB6rvkaqx8jL99rKhLciT1SSx2aX7NqekrkiRseiLvc5HuYXEecaJB",
  "key5": "3JLNu1qwuszUhiKSjGdynNCZBLochc46itgNn4ug55Uu8K5FeLwdGsVt3UV5FsKBTpeuhDC8NmHbJDKpUgfeEdPQ",
  "key6": "wSmUZPFBHhQQLTYcWvx8QVUdub24FJAbEmmoB4115Aq5faMg1YjjqRXysryYjrsJwDrKQpqMzWSdRCiHE5yHiq2",
  "key7": "4Y9EgCAF63nofPdB2EyiqzAkjNqK8rkb6WZJtZW3RWLptcEBrfKpyLzNLis8h8dcxwpAuqGUhyjaUaSRAZ86iGTP",
  "key8": "5ENaKcYQVhJrr1AqwWtiRFRUPrhYSZMUaGvgN24b39qz5UDxZcSWQx2Vpq1zn73UdsHpozGVGxYDdKfrknwUtuwP",
  "key9": "5xm3RePydU1jeVJxMairW1PRHt2cv5Bs9HeVciGDPu7J52Gstws4RTGiHmUHUhzdhhb3HRb4DyRbZ5rQczT4DkyF",
  "key10": "47qu1HA56Bg59gV9otBZkUy1Y2wwKcdH8TqYrKK3r32rhMRPvDA882qqBBtgr2U54ZrztZRdGCM9Gn5QCBLtEQMF",
  "key11": "5SHY9jWDxgJBibbPLSH5E7pFAkZnQANn3XeoC2tSv2JCVGcCvoAscWWHjRD7EbEwupj3AYDN5moN4H3zky1caZWJ",
  "key12": "4wrCLh7mxSvvi6MMpQo99EjJTuwbJRNpSU4CQ68fRukWPN55DhYCjcBUtvRGG6aY9QS3K7To29cJMhV2VBy9nTYz",
  "key13": "5mHuHUUKVrdr2PCyGFYvET6f8uwUZsSqemNgE7TvpmAS9w48K5TSDgGMdSZKRsMYvnt5rjCK2Xh6H3QAUgMi7uSB",
  "key14": "3kKbqSRzN7AR3vfYUmuyxdm6CHAS9mJsi6TuQYV89Fxxra51CnSDosu7qPJTJgv73iQHzsXrnuLfpCM7hzUMfBM3",
  "key15": "2WMsjkRTop1PFE3Y2qBqR918w4rSskV2GF4MKKAUMy4UKeHheogasJ6E2wWszpuCdkE4Zu8JkbFjaTKwaxfaJJec",
  "key16": "cghUkuLKiTJPATb41CHL1pf4iQ37VzF5FMvFjSth6oDocVwZdxNTVXdHAehzi1fVWqe5Doe6Lib5EKpkaQ8WwwP",
  "key17": "3YdTLm5Nu2NLQ6Lqo1PhoDvsLMxvKMJKiPT3goY2CKLvm4Rf9qHtK7wsmeNhQhG9V63nmPaxNrS3tysD2Bc5wxTj",
  "key18": "3n7bKXMXGZtLqtuWiGuFNZUF1H1KKbQpgFzshaJm7pTUQ564Y5qQjbrUgufz8i6aGiBXjiFAYHUNzKCcWodmwKmA",
  "key19": "2VXU8robiLjNjLFojLBEMJSmvgjSByukbotp8RW9urKapPkauzGrcNTLo2grrFzX6nN6eRp8ddNBp6pm5gKg65NK",
  "key20": "3ZENZMKfcy9TZ4qaS6K1t5X12jzMzRereRmHYQef6jwNAE2yvWNA8WL5ZMK1zRxrkeEiFW62hXckKv3GSJZWafn6",
  "key21": "G1dSpkyGaqvmGb2cL3nNrEyVAYegMDwqAjLcUUk4dEphqGmZURAjnxgGvM5dpDjUdKsLvSvRoYy5goaKFjpDY6J",
  "key22": "5dfGqV5zikMZ4u1AAirBTQ2xR5i9UTtketbAkb5v92X4rfdrVcvQD3vdFpgdCowooejqQZaPhZdsg82qmRZSaoDo",
  "key23": "3kMSAGLTU73CS7K4H1YvEkejboMzZK8jPnWLQCi7PJcGAmmhVpjXUoxDMBJb9pKB7HhpiVe1749Gydn4M8QNB7JY",
  "key24": "4sFnTxk5ee76F5EsQyka1YVJQvs7RprvULX3XVJFz3n3wuUYuWEykBCyz5D32LBeXhaWRiYaFRqa7epgxUyUo7vU",
  "key25": "5Kg9P5UoQv7GjHtks44ayEnygyMCNFkuDaQfwT9ty8gbyAwXqbbPMVC3XZiESBtJn8GJALDrduhAxmSycNmAqw7w",
  "key26": "3yrLVvqcpHgohSZWfKubxQKhgYQzxAbcdkqTYvznhEgwxVH7MUM6EbeSRjJVNet39wwvSjJEv1mCTVa2nK2G8sp4",
  "key27": "49KMu6YxKGFccmAyFTkri1HARYYWRavh5BKPWFrCaFUGmaMrYfmRgHt5j552bNqdRuMUwZFCbFK6GB5RUD6sY8qR",
  "key28": "48YyFf1og2dYwTAcDf7mdFmmQP1vCGcw1pEVNxfpmDqdz78keoJ31t7gQWzwtmeQvkEUQXiu5p66N2Yb7E7MEW4a",
  "key29": "Y9k6N4rwgZphq8LFyG248znEXzZHjFDFwqM15XYy9EN6wVqg5i89c1ToWZt6SFqZNtsFbfQu2T6wWBLc1kNy8pn",
  "key30": "2edQCBdcT64Q9xpyjhy3WdNsDNJE9jGR7FzSmNKePQmcD13jpANihiH3Ca8hTLLBiVYTPVe9ewNLv9bQGoHYwBvP",
  "key31": "5QdkNNXwZZ28QwLXxjrkJqYgA4EsmX8EBU9GJMsBE4Q2459AbzXUt9313XB6kbF6HKuGFzFrXYy6hi25VttkBY1z",
  "key32": "41zmygtPmCRzaqZsnmAWWpWMNVaBBKsfmUhmM8DhptvziHgixPmohAZ8yShHQeEtZxRVcz9L6LetsmACe7MKMapG",
  "key33": "6178SRKP4rrMHna4NxkArgv8zDZAmxkFsakx7PHqDpknEmK94d3CmpGhsGFK3xoTpegDdcFuWaYVKpGVVNSzjtmQ",
  "key34": "5jJjzJ42oUwmKs9YnLM7eEd8KP4xxnjG9AysLpJryUZRS9GQbFLaND9BE94Ak75wRaeGozMpchhVPDwXfJmkqqSC",
  "key35": "43NNYoVVjAkfzBmRSg8FE6j7HLMLUe18wjPXkTTAMoCLdkR2DPCyHogUhDo7fnVNuaF8PVENxRZfEA65LoXZhg2R",
  "key36": "2H4P4tda3R1SMKwzcrjZB31RDqWAcqxHchE3UiWNxRCvbnAip8NvM6n72KZ5n2MKVBJFQEgPM5H4N8wrdrDXLk2q",
  "key37": "LJmMCa38R4LhPuhqjqDnmHPEXDYbdMjypY8HnqxvhKbxM7XKb3L2iGZVqVkrHiKBcUyaawxk2SaHd6GSRnePtqj",
  "key38": "4Rc9XKXnmMM2CdK6WwZtbv2peNpJJoVVk3V5tvS22vteuNKdpJRWwMJEcimVySzogVaFPCafUYVzi6NVXSiDnSuT",
  "key39": "3VXt2n9Bwj86aQ4ML3DwUABoWzbdee5TtedMyUbruyZapnERrCXHp8DaCgYt6kZGh9AjoGvLvXcUEzbuQCYggiuV",
  "key40": "oPjAEpU18ewHcBJdTqKfmd4sySmue8383yhsbiVMK7qD9BwtQSsZKMVzFTqreM6vzj3JFwKn7BNa3qeK5cja9wT",
  "key41": "3MrH32LP4ytkwPJuHBrKoAbHWvxV1hngPgrJZWVD2EbEuBwNeWR5KFbcummH36vsznUioeCoii7wPcbMnePd8aLD",
  "key42": "45zFgiU6KBgnhSenqkrDaiQVN3PyeKfxRv1bmSsJBvvDMFnQ2dERzDgap7mqTGmC9o4yu57bZQEWkdRN7WgXDRCn",
  "key43": "NPC4n6X9JNnRz622CMcNUSoyXM8EE6DLieQShN8aKDc52bWJA816HBT4XvFT8h39ep7MYnQWYKMawMd5MgCML1s",
  "key44": "Euv5bH9SewLCVtkDnSzHsmhC3REgZQ9udyoiUECQ5mPGRM7yJDXDBsxNkYP5FgXMT95Da2t91kyjE9K78xW9azd",
  "key45": "3LVq6R2mxG82Vmi6iXWQQ4YWRuzzF5VnVAYmRGbsqmwhjzkiQRLcQnkVREbLe3cbQtGjqjzxRdjyjzG2vcpz8pAn"
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
