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
    "46LY7JcvGocEbuy4HuLfAzRsFcJ3bEtGAGMbfnzZdWT7MmhtMUFvYkDeoPykYNk9Hcukk3PNBJN57oKXXhCNFbtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5giGEqpHi48FbrGadjQzH2SwaWNoHRJcPYjC18KbKWJYNbqVogLe1iw8zhCDS52jqTpniNaZ5GShHvau5K3CNwuV",
  "key1": "3FFH3dRpoVKGzsEywZ2LiXaDdWiznARHedVJKqS6Aug2CZpKYm4xbUXuSfqA4zQfg7wrFFDnQHUNBwkqj1ARTcKU",
  "key2": "M9BsroA9KirvvaNiP4gkyMq2iB2ztJAmi2teLdrzcJZVaChomzG1hBJcjA2TzFnLzutgUqDqXs3c9RQeqvuJNud",
  "key3": "5bcib4Ru2MNjmJT3nMZfnn7MidJKu8ero3a7qZLE9mS8EuJjnT7PfTkxUDM3ZbW6AtVmNnq7U6br8nqaQecKU2mw",
  "key4": "5wL5XQCQZFKph3TH3rQvfT1Tr4Grbw8MuMmrQ6pQMY3tUYzBDpt2RJiViyPo3X21umjXCc5R9sv9JcdKDzo4dDVK",
  "key5": "3BstEgq2XFbASUjvbZfZYb6ZRR65gjtVT38tk3da9R2yvj6Z4rGczCWuYzvYdnjTUGBuiwwPxpf7vk4wqQCEiQpG",
  "key6": "5AccZTKLxy8ZsWn7pPXfTEng52kPaVF9rAyeJhJnnfQKMXujH3Qy7FosxK9gUn4BAJnZctTDtjA6C1sgRgkoubyw",
  "key7": "5Kgcibap2pnKz2DyFtJRYjjdMq7K9MZnw5KCUGU2d2rRzHf6jA2aZ7eKTUbFFxjosYqMAN59SbXffvepqUQyyhmM",
  "key8": "67ZKTRumtKZRGowk3Z2Kkrd4p8TrUpjp8a1hiyAC19beL9EhsjdLEbuykhvHUfa66GoxXmoBLrXVUvKEKrM3Tv5W",
  "key9": "2H4tvn4pZkFhBn1v9oQ9NUqcmidczXvX3HbvhaQzkqHrYZ1VkRqwKNf3Uekic3MSW9E1LB1XKLWJctd5B6cJ5EkQ",
  "key10": "ZX2gob4t8dXKDs5yRRwoSbHSdfewUreibGWKZz5V37gYnh57uvfSBReRZwEzJhiXN2JWBPbJfJhyWAjrHrjVMuX",
  "key11": "2fB9C53MBEjSi1zXKYCKdQVWB7tzv1WWwkEHBLgQh3YefcXBbYhrPvNb9giT9TEP9BM4V86RuB7jLnknK2jaz583",
  "key12": "4fxnXxCB4KfugHhqwA8J6vNR52bWL6U8nVpBEkc3qzuoPBh3s2Fc9caNDrb2boZonAjLFtMCtXGcCZpTu4nJTRAk",
  "key13": "3FgkHD9De1Vu2mMHhEgJZUi4zaEUfNkUp5UJjMEcKWJix9FuTPVny1xQbwt8iEeUg9SuddVFjifDDumVLfLn9zkY",
  "key14": "G6dKev4cy722ebJ12WBSCiJcagsVwMgfDbR8Zs4CgM7cyKj6fD5T1TAhMHdLDvG5EuS6SqRCadhjoedf3VZiD6Z",
  "key15": "2hRMgeNXjR9xbagu7NtWGbgP18esREcy4yr6cFpT84cYcWyxLCiyzijHyoYvh2rzzFYJyyP8je9H3pCr7eaEL6Jh",
  "key16": "2d9FTGYsiALVibDqoqxokuYCVto3MDLKfzTHJNcdZTeTF7ZTBv8ZhYemiWiPNhgkQ9EjFmMTsJx5hfDD7tY8vbar",
  "key17": "3zwZuS15WLVvBCxPcHR69NortsHU1MWxgRa6pt8WMkLjbmc5QGAM2EqAwWpdbfw732UewqcpvTk6YErLBVG92Qei",
  "key18": "BYbFVMRXLJUU9YgCpPtAKcUenXeDvkURFBoiRijMeUrh3Pf4h12toyPoL4FSNHS22DpABhmyNJP7xxUyd2dA8uT",
  "key19": "yZQwSanJCZxZKBuiiXF134GXdd5hJnCnevFPLwzMGeUY3kXzdvTWqtvekhDer9jVKbRsDKprd5s82XyfG3Q1yjo",
  "key20": "2KQ6sxWPc5FNYhHCdefMR8ZyfcbVMMNmTNdzWW8USkTmvVhPcCyEcZ3N87YP7pW771wKZpYWSdtkn6RptpFCfWJb",
  "key21": "5W4Sn4drXNozddCpeu8BZznspzkiTgpEtctWtqYWquoEZFG2bbdHBjaoVvk4HF1rh5Xnf7JK2ryRHvUGWRQ1EkoW",
  "key22": "4jD8eJ6ruHcYZgHvga2PBmuoHuq9pU6SNkedSBaaX5H6SNBvrXTLTz5r5fqQFkc9XZqENwU4YP87agUgeeFVwZxT",
  "key23": "58SVXdXUx3DK2iLPR4Lqzyrs5zvDiiD7XDB2W7mfUQWPuCHp7TFWimrmhDnZdDpVXv9PPTCrprT9s6kyFT9jEi1k",
  "key24": "3jkStHZhmxzmBLoVGjb8sRwPpo69RHyzzvChbuHNZBJkVSVrHbJ8oTY13ApZeAHYD8G5AZFnPoqUmMzSYKK3jGAk",
  "key25": "Nf1z7FhuEHoyAN2Qqh1kXaMubFpgJt8UimwMVtvoDMpZDuKUMrNzbErNT97qR5zPizQ1pLv9p5GQpaFz7WdbDiH",
  "key26": "FfGZSz9eE5wx97jGYqUWQVsbGwf5pD6QnANiX7kLDncHfkaQb21NMPVq2LrZt9WP4p1Nya5S6u3Tbq3sbpgfpER",
  "key27": "3KwhvKZbWYFCRp641vPwh7eSW2feBjNiqyLkJW2SQUpvv7icdRUDNLaSRuqCxSSfmpaNyWMLkTXXVDHJdogkEieF",
  "key28": "jtZA78jFQevrwmiJjuFTyrnzU1G5AJNo5EEnEKft6tDRUdw3FhY9tyHXtTHmd6MLqtT3zV92tHHrvitPp6BHxFz",
  "key29": "5vZuyf16niNwT59T3sUc2Ak6ns7LpicvaY6sz885RhKXAg35NJeeSrn41Uth5yRSy6SVqT2CvjUmhKT8ARrMXKJR",
  "key30": "3ZCMMz291gRHJn3ugLHi8mBNSFfqddnx4GwyZYKyoa6fJKriCUAVwpU1D21e6Yf2pYFxUUwY1EUM492AkibLtbQY",
  "key31": "2K9hL881u8NayqcHKvkf3JCcjSHGqJhysnFHSyP2QPoWLAcHkPj4ynteHKenchFmnUhP1iHwJPFSczfgr4Wd7G7a",
  "key32": "2aNtCRCcyqGBdiDn6Mz1WfUKTTbnm888Y1KNx7pQ6tHwk8tkv6VNEcunJfuxeCFfgRUvyKPTTg6vFcJfZiGUgGtL",
  "key33": "5zovMdiwwaznwYjV3wGLZ59fUYnn1svehJjhRjhSFsxZ5dtMtterTsPqdE1z1yEuAzEitvNQGHKRrQ1PQ4CSpcao"
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
