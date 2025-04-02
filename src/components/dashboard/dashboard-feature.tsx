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
    "MxF5rp2G88HTYWivTYDX4zHQyfcWuhWE3EzhgQe1rGa5WvxCEWZxzVFwyGVU66JsHFdKF8xRFMyiwbKhmjUwjZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vMPVrM496QX2B2EufY2J7jGo3cHxhrNSRRWEkWPkpiWVhrEd87ZrCv4VRRXhZX3T4huvaooZtJfz6a3n9vQHJ4V",
  "key1": "416qKs6a1UqaM4qBoHbBWzYPqPQ3LarFSpUiyzdxQUzkBug6FNehVp6j9qJCgz8PwP1uDGKrs6uJr8H4qMcDYNzM",
  "key2": "5XZs8VQAXb43neKpHsPEmqDMacL8W6uw61xxshTjeoY1zBvLcKKJDUaReXWTdHzafBhM8EdqhSyfWz3WRajgUpW4",
  "key3": "2aYCTHv8ddJLmnPcwFsLYgUn3z7VS4YVXAH8Mx3cc5jdfJvngTH3xNmjC7WavdkMRP9J3zHLocjoSyDdxeEZ7NYp",
  "key4": "5YP7CR8Ftfd5cR2LqwyDZcNhVEuoJdM49woXfDh4My7GRom1Y7ERBupHvxzS5oa2CmntiGY3CLf3RiTd2X1JzQTA",
  "key5": "4U27kE1y4fAEL3y4eu3idJzjXqzb9mVKG75yfJr2kF9NfpJgLC9T2yL1UxK47G6EvmfppkeonRkedeKQxCsjYRhR",
  "key6": "42B2gaAXjnY1Jf7iuNv67Wt41DkeX6GAZyyb98Jt7TzAJ8fPLUqtdjcGjnFjrtC1R65xRKnj44pWGujqH4X9RtKs",
  "key7": "5vHTp4AFzwaJ8cNKPpXYRULJ4kjPpnNnz6zJm3gwnhpSCZBXNgKYn7LGL37DRYpSkrSLn88wG7RbA5Wpd6SergU6",
  "key8": "67awtHfuCwKCTs2n8vXDi2EaJJcrurUSfMQeD9cBdJfBBkNatJJZjhxaeaTAPmAmL5iU6Ko76vJpmpVJyhwnFJwz",
  "key9": "4gtXF2JpcT4Ttq2pqdQLqTQGwmN3XoPPjUMHuVcsifGqqsTxyQB73YeudntT2uz5oJrKaEKFS9DSkEkoLmq3u27R",
  "key10": "2S6kAC3a9Cm7WtVLsjErE8efgPywymBHbqTjx3mAHKsCvaGmrA45mf5Sn4Amw3jpJgktjecKAvXrMqGBdWS5hS6j",
  "key11": "2LzqQzd6NBa9sd2tSvGyf4fHRx6CdyERnikmWp9Tv8nYvL3LZworDNk7nKDxSrpbkdovdj74FMti2ixoQZuNMopk",
  "key12": "5pTR2Qwx7JhMFsrh5pu6W9XZdmtFGDrmtLvFMzFP2oFWPGDZb2KvycyEz2BKPsCYQb4zhQ33V3ArJRzUZ3jPYQYW",
  "key13": "5fdXvRDh7nVTiGryXvuip1T67tf3ZX6wEz2yhDJTT2HtYLHZDeGBw8tCQfkgiHsYgWPNzhKTqoX9SPxASNREGPvi",
  "key14": "2nimA58fmwQujNe7Toc7j6kaSmu16S6N1fAft3L76xSTEFmFuvZeEKqw1VdbrroTyNRW4HihbQSy5uahNjXsd7Xv",
  "key15": "51Ys7j1ruqBrbcFLuPQM9H9AAEpKjeFdHpRD9WSfbpoaTXnZnAXphPPFWiiCKViYNHLnp9Mi5BDmR4FQg9xQMhZc",
  "key16": "4pmxYzXRnwRBDGZuvMfBLM4euzR3V1wCeqGNH6ziM8fuzfgxodtyX81uPtvpuQGCPRW2wWEW6mrNehuW4oiBaPhp",
  "key17": "5U1NnTdHaBE8U1gpPzXvfa4rHPAo2EqeiV3AgSHpe9VYPbNV98VJXS7FcKsacQcsivZ1A7CqvTsbxBtEvtzaWgiA",
  "key18": "31c2jQQAorgErhN2y3PZEWvvBH9wWUvei2zT2Htjb3cNsjDakRLm96uckVKV95hGsL4Dgk9eTXgxDBooNSjYMHti",
  "key19": "hse4vftFRs7yA8HJBBvNAY4XzhA8cjYnHWa1XBpGr2UxJB9jH8LJAmShN4wT6982V4tJQ6Z7yu1mqo3voXoxfMg",
  "key20": "4kALVesUApPM2tbbiLPmZFL7xU2YxehrftNL7WXwwzB4RvVWdq6i4VuKWTA2GutkPfuegehxjzLygzHkpj55VAyF",
  "key21": "4EopETmhs2yxNczLaQNvdohd3fjzBgxepj2ori9cjJFTRSiC7s1axS2E11Lm9oKUT7TCWHWbaQTsiBRUjrPZcBeg",
  "key22": "2uNnmGp7EwrWNoxn24ZbBVzMnZAoekeSjthudFJdM6tVrAVYk5N3qA6yNbuQikCFhmSpdWe6PLkSujMNPZkPdTc",
  "key23": "MmrdvKGanymiyqdGSxiB3b4w6CLdcntt6a5ipff6HaeTwEpQtbf6BD4wPYZZhxPT2jEat4fkUfy9VXXSdb2FWPb",
  "key24": "4HPRik7Jt3KaLW5Rm6tg8jBPbmncmqt2Ax184JjYgnP7Bbccr7nixPgwWEfVZDZ1RknEKHPopwRCUJftYpGb7isf",
  "key25": "3pBA9SLAq1AAjnwMDdtGSAhb74nxaG7SUTbuLdjPxoaqvKJvkmb9cVSUVALU4juWDn6wGFZCwMeMgNkE7cQyMPuJ",
  "key26": "XkHtuwgsxyFJXDaRMNkricYAgS99pHVrYf9s3PKcfLUb3kAGAwk4xRKY2MZBDXZSEMakxJMghQGKyviUP2z6AMb"
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
