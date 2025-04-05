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
    "vXdDPFHEZcXYkRfBeL3wtg4UkEHgKxa5JCbhsNuBX1b4vvLoKsYQAMu4hfzWRT7k6VQj5s98FzkJHXqCyvrgWcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TYs8c2mGqgbx5RKmDCwAvv9m3Xex5sLdNCk7DFdbEcxdfqBP6UFTne9manbJv44CPeoJzq7cKb45d5AbpSxfawt",
  "key1": "3P3i6V1yrQ6yWHcM9tZj9xXpYmMNFZc2NgaE7bP6X63a5p4VL5oKmA72e9AtKTJVWQDx4QNnhPj7PddYMDDkfomT",
  "key2": "4VFLa5avaZsX6gS7Tp2j7PzYkYufeCo26FTtHjrTU1nEJnd5PQYeiJAMSdWVtSAP7jLgZx5FE7qcpM6x2HK4pSPK",
  "key3": "35woSBb7yqczxGNeQbaYJxdMbVK5qFzBxXYgcYhQQWVmhGePNxW2WMRpY9hfHyxGUMKRTm2kpMAzDVEfrJpKoemr",
  "key4": "42jYaV3NVMJmRY75LB6cqQwHLUW4yezyeGxQ1sGgTTxn5mfwp6SrWPbPWTVbk1tzuhzR3zSMvtkQsLud2euFcBYM",
  "key5": "632Co8fSAZT31FfCmFCJJEJbb2bhWc7qYrycPwyfPiWdCueRNxRKeTbNpJ1cQL2DAeUNtpW4MeRaQhhM4rjbXaPF",
  "key6": "24Vc7t7VEwuAXupDghjPv3ibC5LndSLTYuBxL8hNMtWb8XWkqJQJA8nJ9xfAZDCyx1Z56bWwXGRZwowwfcrqgG8S",
  "key7": "3NW1vs7fpW5PdiD5wyxPzJELQo6Sp5BfnU81NHietw72aKwQULFdBkgyr7BoA2K2z6oSyWZHLtYdTNKPPvzzwZxm",
  "key8": "392XT9X5qL97ZVgJKuJvbjda6nU81tqL5HMwUZMEaxpVTD4fnX9sDE2CoH1ftXGHnJQqpYKZf5JRtNpgUoeve1AZ",
  "key9": "4UAqvniiQ1YGWrfQ3otFjxsZnRRj2kbWC2zsxnf7AEJrwx3Agc1HyTUY3v8ufriD7AYBTZRE6BaTdSfduN4uynFV",
  "key10": "4bB4FJw4FThHS9YkWdmHEczABVTgZ8L1uvYApCHP34iePbyjkYNxT58C85fLjMczDACY2K8TKw5VCo29XNF6kPTj",
  "key11": "vvCYcaoMk1g788KKfyKWZU52BMcf2kGR6qqYoUYCdLNn5eJixqw6g6tuWTKuYaePJEQ5Rc7aBnLRbWyuoNzzFoJ",
  "key12": "2fqM82aaXimoMGgRV2CtvYjgQAoRG5fvJpo3dzfe6YWa5d3w3H2RCFBdvBhk8bCYA3UW1SqKLJXXgMSLjnDk6EoF",
  "key13": "aKBFemuzyxPmUXAbPwbSzpC2XhMLM3iu73xHNwv5y1rWpfam3LmzrRjyFqkMFDBtZYtMjihGptSxDdP44cVQPyX",
  "key14": "5A49AcCFjuB9YbtW6Qw51xsEuby6NBCbLnugRXcxVaHdyewX9v3Vs4V9EU5AGsbvZPuWVoakPSGbPDyeCQf85bHh",
  "key15": "6yjomAMr1CzYmSP6JYwqHrosBHpFNhPNjAWzXmSzTTdukydUpdhewFt6srw7riPkke2h65hNTCWz939LTmrrQB9",
  "key16": "3X33CrKG1YFJ2wjwmgzz89NR1CwyLGq4sN6xTin7qkENPzgJq1uKoqKgXRkVA82HyEGuF214Tz75yr89n4CFLfVR",
  "key17": "4xniaoeWqentCGByMqVuDhetjdDfBSJ9qsNGrh344LV7CoX9LscdRgaWnCTNA5CyZHukWX2JGXeDRhni9itoKBNg",
  "key18": "5ZNCVt6zF4e1RcdCd7NSjZNM86vCsx3rTdcC7en3NKt2axuExrBNk1H78Kp6V89ZWAVk8RM4xo5wkhRFaFT8UXXb",
  "key19": "4VyCz4dPZzZa2GRJAiLtUP6JLkG6NWs8s82RUrB7CFi2CYiXiUtDJKm6GBSHKPPjewnzMqBtU8fYxtsmbnSjirjh",
  "key20": "31AiEZYjywJ61xhFGMUaLM5ESvL916oJ38aAJrKrofy7TE84Zt6YZF68uW4oXJw6kE9dxQ3KwH8D78KkRHbj2jTY",
  "key21": "2Y5NsN2ghVB9GpvpH8EkrQUjzzvtLtJcbDKtbSQj1PwoUnnN2k1JKNnTdjKx2kaVU3WFmQH45WfTfAM4zkozEGrS",
  "key22": "5tXYS1oKnaKBMFsnv8nooKix55YDK96CYQg9JYP7F1hawxSSNtKZcMTUTnfShfXfhrqKvbEEji6g1rzxSdz6cGne",
  "key23": "3bJrcgUU7oF4jjYdQFtAjNyeRHesSTjML6x7giZT5s2TLopAhSqQDw588T5MyGrPD3hehKUJdbSFEhwANJL3tcvs",
  "key24": "57HkvmnFqHbDQpF2ghcNqxWR5ajswduJihV7N8fHgqPc17uLU1rgE4b7ezFCwXW8FRkB4KNqy12h7rgCHcq6nRpZ"
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
