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
    "251kANEKfzY93Fi43GPqGbSVCtxefqUXYkuKZf8VjjnDNTABq1SYWtY8QWmBsseAJb9DzmmJooR1gQTcANSCnwke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4niXKjAHU1PQWwfsuLwd1VF3jeXeRfAWgxcb385DEPbDj5nAeuQGdrghhgTZxYEhgr7yTcDiASyiGCtsFJB3hRfs",
  "key1": "2548LjAr8dUohRvi1DcseEQbwFVSMs8FwWbgh55ViHeDD1ofBfXdJVpvqQG3EJN5g2fgpAhgYnCoxhJfFzpZHzk5",
  "key2": "476sWCQ1zhYnPcV95VbDKjzb9ziuNMNgEknLULwstkbRmQySu1hGN2FzmUQvsfvhukZzVWFKZsjNd8JmZTYZnLrf",
  "key3": "5MJzzVD56G8pyrj56BNF5Sf2dEp5D3N3kKdQM74vmuMVgBGMRmfrfyh4YKpVHuGjGxqeyvUTJ7ZA7ovDHAR6GgNJ",
  "key4": "3K6j2Zyh3P35cMwYvVbyTH2BKpcVhPGf9btRdA3Ei9hRQ8UX8AyQg5N4Uoh9B9GvvHNZ8MnhnTvK6i7HQC5FxqAA",
  "key5": "2p57KRcARu31S6DkPAQTvXjmHdV1wkNP6owrnXR9TVcU56tJoBLY4XqsWJ35o9AVXuBD67KLaxFQ5DDkmTsd4L1W",
  "key6": "56D9zKkvxpFGH8uixcbksnRNnuufhrz2mDrCVMsGZZZGWpmHkSSKxZrubKkbpraeduAAsfdu87ZgHEJ8QozA7GNM",
  "key7": "5WhfTMgALwtrQWbPeEAKdoxryfaMZsEzCxUkYXWUVWaDV5S7t93WaHshqTDVDmaBYckeUBMjgQsr7N4kmf9wUiAJ",
  "key8": "s3L7nkDnqbegxG295YVVGvM6T4bjm7N3Cw4B54oCb4eAndd583hGX7JhBZakwb47ZQ8ggyAnWitj2cfKuxQQhNW",
  "key9": "353WJuSQRkmBLDN26Q7PgERzu2CGYMVm5uua8i6rfAvRKX2gqSRyx5hvBQDL12pSRd8mFmh4AyKuA7kCiDCnWiU2",
  "key10": "31nLm4ukL2gQg5TUDT5xji6HsY8Ubpe56P4MVJ7AWSxDa9SctymDA4KJ5vWgRCbTCxAqfLw397sFf2hfceoi92XH",
  "key11": "4cDsvB9uoW5G5U8DuCjQAmCFi6S3zKxbLATeUaMxHa9bpuLXYmRmS8681ayqcZEY64QX1dQpx18AyJpQygeBsrn8",
  "key12": "41QZBRsW5VPW5t14MeCPojKBj9fz7uwmnwfsWEWeAneShiWX7Gs1GxKCFNA4bBoYg2BYq6TbGRx6YueuZscDfJmk",
  "key13": "3YAC38jqDFJgCYT625L6EgQNKk5RD3ukRsQgcLKAsJdXCPcKwUhKHFRZYUnoDbyKbE37MakPSeHcM9q47sgSwMkD",
  "key14": "3zoiGgKNAT1R6LRsYSVwoyh3oPATiCEchSt5LBYYkKSixy8qcxEESRFUQC8eJAi2HHC1s8tyByZ71cmUu2TFhsVS",
  "key15": "43Y13CSrLPhLtHZq5MzntzucNXLrdDTg3iqFFEJXdWw9wSDDnDYpDSwb66hDQyQHxdAYCAczmNeEyHw2pVLstivK",
  "key16": "3qm1QF9xqpsEFyfB6G3iSx8E7UJuyf3PH3Ma6PARNfUfj6RKpmfJxrnwvt6GrKw279JgyQXiFRAFX3hhLi7n8q9N",
  "key17": "xgS7wvRi32FxeSin4mFZZsRbPc2UtcQDLEcDgYs5tzxx1Rrc8dXpFFMQcE75T1kd3ALq515EZKJigj9DwHVdQGz",
  "key18": "3aM7u7xRfcKswkC85tB58bSJsdLbC7D4erP5tw4KWA8ZcwzTxfDcxQT1cqLqzrBhk2ZxsySf5wfFa5MgGzEcWsEg",
  "key19": "3hKwLUgxrBGzzJn2Bu3jhn4XMFt2HaBoTt1bXjyAiW3n7b8Jz9AwHPpWmcDHRcGNcpvT87ZnEq9w4GRZMUmWJMYX",
  "key20": "2tYoiiJLzYJnjoR8EmEcEqqdtqDXx3z13cbjVhiRfxgCpTjR6P7a4a1gPZ2b5x3Rm2fmR3tqw9TSw57NXymfmW6x",
  "key21": "5zNcdSbvernePYwFEYPcqCzxcKiGNUPgggErqAUdw4aBYSLypFPWsWRkBXuKGoi7QtvP3i35Ru2uBdZftAPn5J7U",
  "key22": "5qnqJnJjK7up5RR1s35GSGGfm3U4EeifWz1CgZpVaRomnrrxnEAgJHToyUJjUSa7Mw1YppYxdnNGPuTm36RqQeQN",
  "key23": "2fe91Vvyg7wLmsW3g74yVou4mn13xhFpXYyt7u7F1Kx6xQ7nFNiBUmDYToARNUyjkkV7J9vNHdGuHTe5UaNGKWpZ",
  "key24": "tsZWw9csLPz76GsJ5K6VWxQEfwQpjUEBGpiq5gB2kLeTdrtvLSJ5Wf4fwjkqE3tsFrKEgcSkAxPFSVKpMxXcKBP",
  "key25": "3c5aLxSGAXHHn2sUxui8Wx1fioyN5xLGQdUKqnSRUaWM9sabUVfNos3beZDBaART9iXCvNFDh6Lh5Zgd97jabRRB",
  "key26": "2FNVRTbzUdqkKxbaFtxPiqXwLKruCg58GLBiwMkBGFgJHikz2kFKSKemqtBTTMWoGRZiJF2Cm1SnKYTLwmdkBMJP",
  "key27": "6Ku5yHURtmJqPV8sHkR1G27SS4BWcnLdBdnHgsd9bcNrcL59CKu51rYhsQ3tdpsB3oM1s1Vr3saCShdye6LubEa",
  "key28": "gJAdQo8iLJcpJQSnKSyMJcPYtXWjhwnhJV2U1KEWd4MJAYDaoGEiHF4b8ofStXdePhfmvf9k6UnfMJq555oYaKQ",
  "key29": "8ETxZHQsPYEydwPm3DQpjL1cGqfMJkGstZGA9Th2jnFHhDGNK9iZymqFy9n3b2mvcr3mmm4wc3B5yMwSoXDLPAB",
  "key30": "nJ78MGGm2S5posbfvQz8e8VdB868DKehczFtrRLiwZvcLJrNqfg1pp87AW135Lc1BFweapmjpGYSL3SDBaYqcfG",
  "key31": "39bzLBJZvgFEnkJbPNk1vH228YPN1vohmNuVZh3q2RJrkGs5GFvrdxux9QNCMbPRhrnXQdSVeWfXzCnX2Yxgfu7q",
  "key32": "4CtD1ewXdepmuZGrNVcBL3iv23REuMtnGPMvPkasmMXrU1nygRo9PwJZWVMXNTxN2wEHCzwh7bjNygndQrgmKbS9",
  "key33": "4fSgHDjF2XW5MEkit8f4pPv2fCR5XWb3oWrZVCiiJ888t8SkaB2LFsjC25mGRRCPxq6ZMk7MvwRPoX7nfcuTBx9N",
  "key34": "3RXiFqbb7sWWLGueVMYeusPqUyJ7dZktayktBu6tubSfg1Z6scNjU5C3qsXfnzfV6FQa4KmNcW6QszCgC22LLHxT",
  "key35": "3NJkMdE33UvKbdEPnZ1hWLmUPq46FvJ8DorEkMqkUxBhqLMpn5ezhezzcssfDh1Nc7GEga9gxDK8CpFE4M3hktYZ",
  "key36": "5tNTjwW8FMESMmCStZtmzLqDrVM5pirJgrtxFkD8jBbt8Ye6P4eLM8TEw1dihwjT6qRp8CCM3vsa8SrLDcNNGm3x",
  "key37": "243f4DT3WztB8CxBJzSNSfPgqUh7Ap3ZWq85tj7yP83EJee1JBmxi1Ft8dhZKzyWc76odgGvC9BsbMEatcZ5wxbs",
  "key38": "cMm3hVSCwUdDDEKKyg9xV8rU3VsGzuZHqAarprTJxLTC92fcQ6AS2aDbtf72hKjbrivqKQrzc45iimfUVKrSBzN",
  "key39": "35zLZNBpnBU7bzXxqELy3EPcW2jVdyAXegkxMQhQJiYAwtkFr9d8zM1icB2gSBtbpsE2aVhTpGdPR9Wajc55NVz4",
  "key40": "3SaaWDy2E2N1UTFgQSirw9fkXY7piJKJ18t9is4QK6PR2sYJWb7EpCJqmGGQEhvnHaEypCXjc9bHB7AAgRixbPwP",
  "key41": "5dEgp2DdVyzEsfFbVN6uanq4gKKMCDVgd8bH3S5vXrr64rNDbjWJdZDCGWuKorddRJ45TDK2ezwGa49ykmJZFRA2",
  "key42": "3STJDpGU3FY3KvPqSiL7VpFFSJyH4rkb1xV4QJc4d7FGwWjRBAavoZGsGQfwDAXorgSrPiwSzaB4tN3ZaqAdvqpW",
  "key43": "4tapC8kan9VkGefgTUAN9wnLhi386fDE37PPmGTirbNG2CuCouYpt5V3LimLzueeS7mUpdjXzFNFFCCoYAKdGeGX",
  "key44": "weLE6Hc9YLEbvCysw8qoJkH8tsmijHWB1phuQ1vGGk6KdYZyL8n9e4Vb8kLNLe5URdprX4ATEWJ4Xr355Ek4FRk"
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
