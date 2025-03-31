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
    "4wESmRBacXVzZ1bC5N1L97BZrYcXEfrRm6EvyArPYSQrygJ7EbEw159HwkvpdvYHDstCxME3MegYwgHAegbTfSMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dou1zgNg6VYLkNeM49q9vHhaChPfJrMNyhpw8g9gScL31PBiv1c7NiJkqk8Q2CQ9zi1cFsB1mYdDfpwNYVZrjYK",
  "key1": "4dyDzHvWr119CeUZ1nSeto1ezbnY9EBy7yQrFshds4c411hkvEFgZ23QNpnBLECQRgqxGTL3i6LR8xCym9vBZeZ6",
  "key2": "4Cp1Krq7wXPFZt6XDay4JTpVEWFh4gV4rgZzRMRRsPFSWJ2Rd7mpA4Wk9gP45BaMtpzDgZs6oJEdH5DwnsqsMQgh",
  "key3": "5xJvCJ6cFENtnV36bpxLD8jRHxKB4nq2QngiDn5LVt3XQ79runqW7e4szq3EUkenM3koCxP4aoKjefjBnxLaYkpH",
  "key4": "2yKqLCgXGvb7ZZ9VyJz6UGfYvZ3fgz3EWV4kA2vb9KYHcSbMWcUBHf79NCXhfLtwg5Niy6cajkXkJHNmDBe3dKds",
  "key5": "QWUE3krQP5qbmStYAkZ5r36m8Tvy9GhjxATgSxYcozpXaHD22DKysiXQwDSa2g1VCh1coSF6Jqucsvm2CJ615xF",
  "key6": "y5eFYWuK29qn9J3HnYyi2psPQvMgSTecQy6AvhAMenbwPDRTxqoTrS6dHN5cHHYczHjSJZkokB6Jp4ENu53EFRF",
  "key7": "3fR6nZCJgir9cnyARZVLaafH9amgMkmoF5FksQeU9z5jDCdGzBUsDMjBNnEMSWZycN3igEV2HPaxmo2hRNX7CWT",
  "key8": "YCT5jLQRJkxtUaPMYAKjnPTMPxQkUJbgpDkTURz2FuEmcjHYTqV8iJLiEiNG78Bs4raS4g1z8Jb8jq7ZBwzGGKc",
  "key9": "3QLHav6NN6he5M9NqY63xWwEddWfmeMnn8Yhvqbov62gKCzfuszGtLXGaK1NCqH1uzRCudH84qaY1dJkTUjN23pY",
  "key10": "49UvmeYwoA5YiQPJ41SXEYEfmbX6WDZYGt7xXjWwVpQ3mfCcbZHz7wFKNsDh5YTntiqLLu1MMkamUQphUVapDpqd",
  "key11": "4fnDdA3N8FBB9EqjzeCoKLPF1kaRqFsAxhLwszrt2xfJVnJLdccjF8Dt5D9Pxw3XEamXz2ENjnnUJCm8A3X3WRWd",
  "key12": "3gJGQgjRXJ4mnSyQBKar8NKwK2KEx7aFRPhPbKdJRwPpHHLmW8sv2f7uK7oN86kwgWm6YGruJowD9TMAsnstz4Sf",
  "key13": "66aU8fE6Gz5K8hrgn2chqbMJZJc3Cz1gxtvrRB1boA7UJoEc9Csq1kVPV15r5jyiYVxsax3M8oQDpgEcNHL1Mzma",
  "key14": "oiVk8zZwuSzJ4fxgCwmriWHewAfSsKEMZzJ6SWQrBHZN6BGvrUhRbVcq5KGZSGgtEdtW2GmPLTRqkKzsNNeYjkc",
  "key15": "2NTt481ouPvBpFAnFusBgnC2bga37rWT72Z6XGdmQ2ohHn8BUJnjqK2HMJ2CHqtEj8g2zDPryDkeSWVpURSPMYVg",
  "key16": "2fZLY8LonKzPmonmycSWd9RBW6oUfSaQkM587GTyNUMiSHYDQUQ3aJyutXquxuN6KYxuLBhB13NpHdWaTZKvwTpb",
  "key17": "22cJUqkPBBwNeeMNLrydfzrE6svQn6jhR1wRUEBjVqup3eXd1dBE4y2GtRq3v26wuKdYY7NbCS8KtRiN8VXYK816",
  "key18": "2gjWsEC4eHaPKTBRHLUmpdEehVMK7k8CQoi8aN4BjHrWjr6qsYsm7jjSTonBKWYQb1AJ12VvSRGoiVjMuVfTPUYj",
  "key19": "2PuPqR8K3Qj4S9gwPGYwaFyHcjr5ahkMxvdTd5vFTZ16v1GmXHHGoX9kVHJvn9igsJypwNBvzYM7iPdPmk8np66g",
  "key20": "2Q1VfaLdWiofkJqum86Na6fDsDCZ27CCjcHiEHpr1spF26ki6vxcg1Xcj5TjSJdUUqckAzsMjkZnKCycLhL6K8L2",
  "key21": "5kTYAnn9cPDxyXctGHA8J6GDmwrJVyrnvTfaupDJfqAiJqWpg7ovAv8xApjSvqnuuWZix8mDhfsn5Gi14YZXKfrt",
  "key22": "413SQ3ShbeknJzzpRdSQpMN4wPfAyxGbjxBjws1Nhv6WWtefrFiLCaTSu5tHZET1ZaGGRaPCbb9FLYzw6au1po75",
  "key23": "4jfAT7bPJ8PXDgmJ5VgV8NpUXMGPYvn61q2pfYpFddv1vcw4125P6SXAn5GoKQFQ1CvkrZvhvqmSBfSnGcTBsRxd",
  "key24": "3TQm1vD2KWzcpSMGSxbSDnpKq2KGcjruGAoNEfZwoPVtt29fPHthjFbki7ubkddZMvkjYJAyp1vzbUDE2twoyKqM",
  "key25": "227Y9KbjYkxo7UFUnTtuP7KEkHxeUqDq1CYPeoRx1C8bUcmsstK9pdJnVgSZH5K6G9Q4a3HBTFLZFbACJn8KTnGy",
  "key26": "3tbpqmkkybS1t6uWEBvE6zsghjCRfBcLA84jhVQDWmCGkSyubxqRctSGiDhQyeMM6aTepiKSMw2iwviNZ88pWBA5",
  "key27": "5EcSrNg8iR5FP1fEtkSrcphCVPSiRGXfRBT887B6P43yfh9koxVumd2e4yzig3u23bLQeHkMcznk8z16KQdwVfWc",
  "key28": "2t9HNzoNBdLiyb1wrjmtYhyjcNHVBwNdDtrdw3B3A8JhdMpB1cH7fWxNGHecWYXkko98W4MLZqmjkeSD1XY98p9m",
  "key29": "65wWLRE7NPyF2uZQUiNuzWDVLJDP4ZgKjEkfeeoyXhz2294uAygniyqKQVwaToJCrJNByhuQ9MFiRvgysbV9wzu1",
  "key30": "4ENNQyMQrMouQ5gCdix6XGA2CtZVjdw2xtCkRsfUcHEGJYbP8r53EPzeQhWjnpiS3WoFBDHL6gT3kGt1a55CZ9Fy",
  "key31": "3ba7j5qRpX6VzVdi4DPcYs2PcAr2sATpEmyJaqLtasgyehXuyfM6y2cDQ1sX8QfmAEWKY4gemgiAYy3RpPjEcTMS",
  "key32": "9SPjkBWYY8R4Yg9DufS1eaNvr3eEH3AVyoR3giomaNaU13CrZKXWjZ9Fv7GR1rQCb7YALJwyyWtAvYuM7S4AUBR",
  "key33": "41BNU7dHJywApddaiwnPFXNR57g17hUmM1EHsRZNfpA6vBvxuPzbXHLDhbW4MPMLkfDr4McHr7XxruZNMtXxwGku",
  "key34": "326HLgBCrnu2sdBDti6CU6iKgLikdMD1GhLhacEcS2mouKVbsorWXasUZjfyTCtMEWSBLUDJtfEvDQ9V9j3fEv1a",
  "key35": "mh6pP4W4i379paXh4PEPmTscFsSSD1Sd8gJc2MZtkPoRgsHYUpkc6zKcfmGE7ZUF56D5ntiys1WjTXKGM4PEMXu",
  "key36": "bT8YfaxZoP9aMr9K6HUn21Voptosi3npRbtGJJ6wsHf96wfbuYjoqfSoqhT6c3YskBxzAnTAmvGtDzJA5EFwnHB",
  "key37": "2FAESdimZDfXbj7VhAhqPcgSfsnUvrwd47RbtbC4wz2wUqUvMYcf4qDLjQKWCoKipvowGy7BcekZXNML1MygmxPJ",
  "key38": "2RguTpCNYhoYzP92QvYfhsgnbXmxmAdEKKRBqdp2m9joZzEpEYY3xQUr4KikEHaS6erjxCutHekaD3XJVFrPuCqo",
  "key39": "5o6Yn8CxCTXY8PcjTumBrNyyCpmAcKnB6PxaKV6da7mgthH8dPywT8513nF8wVARmKZoa36YLBYBScxfcgFYDj15",
  "key40": "3TE59i7kArwaDeY8yAsXfXcxUQg2kv4HoAsZqUbioN8afUinmSvTYhebZTBdsxqfC5dqktpXdo6z4VFVbuv1kjAN",
  "key41": "XvrLcV1V2wgeKDND4PUcrhywjQF44o4KKuWWtxaNJFTPzWa3XuajFxQC17Th8fiL7zyVXxMrA3wWj59iPUDxnBr",
  "key42": "3xUbVewyUVQ71b3sv6Sv2fxZJFoJUcujqUzhf4m9x9a5kRp3pUEutJJDak8VUyuwaPhToQ3GtnU7NsqZHZSbFj7d",
  "key43": "636PchKEtYef1WthbL16PrSeLWrECnrhJs59qZmxuVHH1EeUtBPhPVGbS91Kae67mf1jhDtU5wVPuz6tPdTKpCuw",
  "key44": "4xqj1uwv31pCjxsAxmcFff3g96Wg3YtMjGn7vutjLkLHNN2jkLqcbZxFXVZioSeS8YrgkphBjgTmEYuqzr6iwQxH",
  "key45": "5Lpf5TwvadkSyasWmXvbiVo7StLYy76geYRLMDXRc9uLB15aUyBCxBGgvDS4Y2yKxiCtbPffgZQUhQmGJTFEGwHX",
  "key46": "2oopFPn2XTHYd2ZwMEafadE9kH2Q1vKbnVcGAVwa3kA2KZwaASncLf7jyhELa7YmHjQ8n3iW2HEnDezZBb9SB2gh"
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
