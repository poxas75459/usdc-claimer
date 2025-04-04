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
    "5KhsSrgQ8idar2TBoi5Tj4xJ2ESTcWQjVo38NxqFAvgFHo9DE3TizyNzDNpbUhYy9y3D9vdjzADYGWPn9c64cSmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23bU4VGZxktj3airP1Tj9a7p2gveTE3rMHMDqdR7CkoJi1D9NdhpbhsJePFxZrDLbo8nzjAx6Pmd4qWMJgEwQ988",
  "key1": "4BZa1xPzdTEcpJE1SJWdr8dcJ4HnkNTCrJ3qfY3653LpK4tFAGQzxb8VdwPiFbCW5TpE9FqUyurppkwatuDHGcTK",
  "key2": "4RrLGexcRTYSKvqyZffYfA7m8TbVNc9mMcpQEYYXQoGBLuGYA3reYigSDR3L7P4iGDXkuNuifS36MNeLn8oainfh",
  "key3": "Twj9NyQaufBjT5ZAPkdCFQCdqyQwjXmzJVzWLCs32Lmod7FDxBj7MCf43822H3AiX2gsUKZt8eLY6gUuQSthwbS",
  "key4": "Lo999tkvCWXJCMrhV1ywmDYRDATCNkjvD7eZ4vRhcZsBHZKbBJYDZyo4k1KSc3BZtw4LMfWqLKRu4xKEknehR6R",
  "key5": "63Bdwcey1bXysgBo1XhAkUSfTCY6TrRbxUj2DLaAFsWMJZsHjv5tDiVm7yYaWi2X2x15TR9HBjBZoEecB5u6Ci1g",
  "key6": "5HHQBrkPqebDxsoYPDG72HhC2TkeM3v2o1CxAkx9quGHf2GMR7jDjUVSoVWDS2w8GC5dS7uvFo8hQVJFqhuik5qw",
  "key7": "3qbgoanJ4bFm7JvLvaTeggHMEYcbXGJfT5naA57mbJrCd1QmRrGh8PtM6NVMZsBjamREZiohkVmyAvdtahuwiF6m",
  "key8": "4CWrqjr74HY2xBRvpdrnkgDEc9X8XQ5v3xYCQseZfxB4nLs48YQ1S9YXSuuwvAy8nQ1DvpKti3ug3xQuJWqL3wri",
  "key9": "4FYizA177zSJk9RugtJjgPwLESks3MdA1LB3QxJG3hnttH4STubbSmXS1hiahkTEEogLzXQeEEtQ2MHadHKN9aVQ",
  "key10": "ipvdKwyKbLSvrKa2sw7MQyb4G8K89gQyMx2mQqpp2ydKubuRDw91vbb6r1zKTD1AcnjJsfancvmd3pyjsw1QNb4",
  "key11": "3baYJqe5etbyWnUeVFai6bTrtoPN9BtiyX2GeXA3bnRVBX55yMXSzoofQ9bCnQNegQ6vcFmmn7vbeU1U79owh9q7",
  "key12": "427xdCyXyRSNMpKB3Fb91kPSM1WUL5Z8jadWr4qF8yin91jAJ64GA7tFtijE9bBrbywXAPoHuhobo3pSRomLjJA9",
  "key13": "1sktuHXfK7rDzwC1gv1w7G1yGt3EbPtEA9SKTGB9keB23CYMFiQSDHeyNmuDg4b7DNUAYGjj2WvY3oznJwj6fZE",
  "key14": "XdZfk7MtHWihqYH33M47XPajWXvYE7rrFuDur1TiFrefqxB6aphtRsd9oQS58xD1k5b6PE3i4rtzyqm35RhQ621",
  "key15": "vFP58AfJi4qxAFhma5CyXxKt6Uwxxea5GA4K4taSCzfQPxeEpjnveKr67n4HK37XP5d8ZvLSzN6tiW1BNEEcQsm",
  "key16": "62RGDbPzNqkiBGfa22hxu2dfbPMqvUXFR74QNeCwsiZUrJSUsx8Wz8j9NR3TkKfyfvLcGZ3vo6W65yXwbmeQPWSj",
  "key17": "4a2M5SykgmujrUGrqGnXMRxYzexyaBhrRjeRJXF64PTm2E6Jr3vXjYnYMEgG72rP4fA7FB9wBH3kVjWLvze6rPTz",
  "key18": "6CJudEivSbDYAwTqiREiCdLJAcBzwPZgbQViA3GTL4EChTobEs4qDpnuF76LYeNYWoeVcy1KsoU751SnRrKE7Ai",
  "key19": "37Z1HczABu6LhRRtYRAxpL7SDVGZjqCXZgLUCMAMpKAdeS2ypVrMqiPhbw4mimZckykNwY4dAGRcFf4Ux2pKYpzH",
  "key20": "4kUVyAmt8ZJMH89Pj4rR3FZiNbqtpZzrrnXtBivKGL6YmdXSKxnWWv6rtuxDv3fEN3giFqE4QcyxovA1mUio9LJP",
  "key21": "2FfEopk1pGSqsiqpE37A6BzCzbegCGJUNrwJnHkLJUCt3wsD6hGYwjwZVLbg4uGWnBNNKr8oVAJr2SRtUpPkh4VK",
  "key22": "4zW4m9evJaFiP6VRLa8UWk8LbHuQQ5i1E98mCdciUzvczcdP1JoMLyNi1URkkh4bXBn4nNRLn4hJ1rMz59bCLtFp",
  "key23": "21LHHxWWhhgRURDNkt8oBvBPRCJ2vZWuRmmqY2VYN56cwuqKvuc9LRYEeE5st9HadmW55JRqyKvZTpTbK2bA1Agm",
  "key24": "2M7VR9BPFQg3NQnB9YLwfHknk9EhvDwHcypdi1MbzDXQymg5t5ANL13BbUXsob7adWKTQB6JLtKSwCYQ9xDrT5EJ"
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
