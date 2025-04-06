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
    "3fUzp3VjJorqx1SH7k2AqpS6pmMV5x1BNUbxe8mSQYZzZpvWsgH81kbjeM95Pd8N3VpiNi8kbpy2d5J3kG5QPcEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GnAoWFBCnjDSi4mn8CwReJ9pzQk5FAPU2NKJ3anC4bpzb7iTHRHKjuBqBvcgMHsUjaMZgPyEoAw3BKdef7ScUxG",
  "key1": "4MFnyBehkG11McV3BeV1KgnNdQBWgyL8wHaaZRgsfFrjLiKcXfxUkMVL3aYZ3cpbrZ36QMBgThfsjF9QyNs2NY4K",
  "key2": "2khpDNdqSYRKudFmKjgmGM6k4AntcrWGQygCWLqVXk7zN1f8MF5pms8wcUA8ARHRFSSmRffT4kdbyCUeieBdn2FP",
  "key3": "2HLHcCvk8V1bikzi57bogCVBGLPkgVNjdMMpqWsSsVDabVEYN2j81H2ydcb5hFdtVEYuL7rtP9oTTnvbKgttqy2t",
  "key4": "zoBUzGEserj6VuRKMD7YE3L127fcGgW2UoUyTEwsPCCmXX515VQ3TTkL6aEDVrfHyxQPnrP2Ypab7rRxfe6Es9K",
  "key5": "3WAYzSjTy2TYjBgS3oR5qF7A1gXuQJ97phVWepnoWXW4gPmMvcow9pSBLyeMXkQRpctExnCzgVxydCN4PY7CvBtq",
  "key6": "5Lf4AVe2nqBLpsZgH49fwL28jnZ9btV8yHm2C7MhFKs55Zs34XuzYN5eZN33gftJw15Q5dTZM8ku91Rqrscupd6G",
  "key7": "Qu7et4YwSQgdumBgqCghXuuxK1L1eeBqW3avdL9kXeQUKn2wDLAohXJicj2krsHhN9CccGbwnafsiJQusmP1nF4",
  "key8": "2bLYVZh9Z6THBzXmTfs3p1PJ6KL4WmJBcoZud5XmZoB6vg2g6RDbBgyyNgfMEHybzi3mwGuXJBkRNyeZ5xfH2s2c",
  "key9": "4ff64bSRNTaWNikLBPASJQVraZyfdwy7GaZqnYLskQRbceDnkYK8THJPLHXta1Xe9KX29g5ZJz6eoYMqA635STyo",
  "key10": "3UcvJqfPvDFYXoFaHnJ6KG1CkttMFCrUdsXr1Nn71EiRxbsHVtgsKk9X5Sr9GuFgsTsjux1iYG6E4nwp7JWhFcBm",
  "key11": "4EwRjqPhQWBtbduBzXBz5cpiH9aFYUq6evnQNz3pvhNTBccx4rWcSBM452WeQtSQDoVmodNxhCDpCLdN5RxKB37B",
  "key12": "5TYZy4Rp4LQCnriSciuvPxNPUMqbTyzpN9XnYC6CWaqjJtHdYu16eSP71ZHcfabV65DLKtji5tpFVaNuCo6LYpp",
  "key13": "274fBQHw98Bbgn9wmYDEYtDtYxWyDnG5Q671ZJCN5Qmn7uH86i4xdEy2mWeDyT3b1n8urNKpUNYbZ1Jd9shsFkmL",
  "key14": "McS2Wu5dA2BzoooiWuW5diXx3Ls7Pe1a88sxuzktKNTBeP9RoRGzqjETSVJHjiR2vAXHsh7Z95rFNTsqe4VQgBh",
  "key15": "63UQX9guYFM5rU98KVK54TJThutCzUUxqxSpaUv4AoD7SyU8qHewweYAcNG1kgVTeB4DX43mqZXbfGcGX2YNYNK2",
  "key16": "12748pCqAXzWDHSmkzDNhWJiCXSW7V72oW3HaFwkFYfqTE6NreJNi9FC6zDHetC9HrmHxDz7XWLd5hKmkRxYzvJp",
  "key17": "2FztmHrrFQYFdruPfo4YdKduW8wy4AN7MfxvEXJdbtNSgq9GEvigsy1zosh5mnf72T29GcREguPwgDHNxZ1QjZEn",
  "key18": "5ngft61epwcErXnoJX4oMeS659oFMMztJzS4H8HWZAcxiUZJFBpSMQfs2uX3miS5qJMKz8H53NX58bE7DMHHJ7SN",
  "key19": "wCS6pBLzSwovQPCGk86CCTDXZmckVSVQyW6sjH56joLBkk2reGuCNTruxDYELXhZibKMFBRQuqUDZurKL3abbba",
  "key20": "PAxovD4TjxVrScg2bh8Qx4MtnFY491NgwwdjfoBzT3Tdc2VhX72BCmSMr54CFjy67kX46D8DPFGg2mNtJCq5udK",
  "key21": "5nTVmh5Nb4zXDC6nz46AGz5csSqA7wM3w65G6TRsMkb1fWEczT6tbBKwrHdXKQqTiwSHf63tCRE89dcsgULpUURg",
  "key22": "2fA2N57N39jg5FUArukxc8PRnE2wzLHW3LdFRVzZ2JDNz9EEUrmnzru3bJ7HKqWqvv9V5BcECHuwq1vYpuvBgg54",
  "key23": "2zDCiXeTrzR1jd1yfGyCveX2LS5tyQZ5WomQY9oYR1pW1BHSY7KrrAqxnR2J6UDZL35eSK3z9VDUG4bjqoGnir3v",
  "key24": "4Nnann3McGv2M9Q9UszFvw1M8uTZ4G9SZttqiQzVafviFs9yiuYap1y65pcWRGVCzLjatGTxB72VSXWeprLcEAmQ",
  "key25": "3DqCXTc8VVHEBNJGiiQ9RBBkRXbMufPPi4ZQy9k8Sv5i51G1omAuVNByM7CyY9H9WBR9UAsDX6zCgCdSkpuATd7s",
  "key26": "3y6kMhX6t1RaGLc1x92WfJPtBCuQ9KP4nHi8aHChV3Vkw2XfBuntPUc6irv5YRmULVzHty98MUNrz7Mn9EwMzBcw",
  "key27": "4gccW5wgkkYSFrUxA2ADUeWZ54y6unu16hr9ZFPSWY5ygnSWcPJTN35BkJszzfZH1xG46kxCMoCjMHUd7kZQhD6S",
  "key28": "467695M4cbeaCUbGT95YQcSnmTtDfEH4XwRxbyiR39x91GKeBr4vfGsp6v1Gd26w2yUhPAtc2Bz6R9c2WKUXGkhU"
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
