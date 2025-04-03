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
    "5tmVqu3hrG1Hwzb5vC1G46bWpUjYuVQ3cWzpB4movnGPw4bmbbmHhVoPH6gJGESneMNjykj5Aw5E5Wumt28QM2Hi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65BLNExYVhzjqUZcLA97TfXbm76umzrdhoZn7ZVjWhJ6cxMDWW7PgrE891rc1VCsAff3JKcRnLhbRTnNGaVDqa7a",
  "key1": "4FdswrupcG6TqfPTRpJrWFKLqw5JqwdBEP1PB8yU8wEsYr18JisZUNAzUM6zR9bq49W5NKQ9ri37hMmCxdf2ZYZo",
  "key2": "5kK9Wmx9HeirKqLmLWEWz8NMBza3xy7HR3CYtGKxmsG5rK5NZ9ttfRYUGxpb3WjpqN1szVsEoEu7fz746MtmdBPz",
  "key3": "AdjKV2R8WDYWPjztQGByLdDT9387K1AMUsNohVmDcVoNUxY2qbRk5F8drUdZ3xF5V8CJeM8UnpBzGapgshNroXJ",
  "key4": "3kwG881NezubULSTcn6dEcrrYsX2pDsewZC8pjhYWJc5hwEC9JLKNUWhGeaFL4fgXSHzjtVnD1b519FDy1tpsAA2",
  "key5": "4WH435VWkftPFFhAWpb3QjwL5ccYDMGwBDiqdupfNcrnnZUYqWgJHGv1Gh14cTAfjEVtzZCphKXoXH7Me9U8tro9",
  "key6": "4Ls6X75jqYNaxrWKYVBrRPv6dh9EzgdPyyCDYu5iwFFk9NWGRWSP5xH6v96UMve5kTX9tXiSAdCMXFDSrhmbeXjo",
  "key7": "2comANuqHajKtD8xHq9JGndjnVCsWUXYnZBSiVrrbbWk1uFRS656i6CBF34PYgGa3mZdZjUmFmtNxf8zwAAv9JAW",
  "key8": "5nXHanLiMuJRSUhWYdapTXvgaM2exKMhSEHKN8wLYqm4vHgmynWdckYndeoyVcVqgBpku3vhHk6ufHVDRDMBGv1z",
  "key9": "5RupZm3rDYBYqmL8AgCnUzHnYgK5okBG6iHjAeygaC6R7dKVkrMH4QsQURWkgGiKWukKpCkYFqsTWeDGkYXpsjX9",
  "key10": "2spzfHG4qLmbEysV2LFCw4QbE1hYN4BNHQVeHBYpehVwSjzCpKedUYiUe5HegVgpJ8KupzGc8ogGmvBwZk72dJ75",
  "key11": "4azbnJWchCTMZKBA6ZshP7LKfCZTACCA7TzPXyiPNuKH6vEG7HEfqzhqxif6Rrr4ihjfhS6zM3bQt6oUmRfWTfZP",
  "key12": "5aFSY3YwGFi7hS13Z7w9we3Yo9oj9n6ak31aNP6wZjdsR84y6br7J3wj44NKEmpVUGVGLb8uqfcDVKFvqYN1hu1S",
  "key13": "4pj5X8ArTK3rHcBpVGF6Qza3gr3qTCiyrU4s21kDstS3Q44No9QVQAPWxPBZMWH3XTSNG8vnATyaizrTJA2BW1KL",
  "key14": "4fecwEHJSkgHoyb8ByFPQVGvyJMSWLb2s5Crg1Z2Dp7vMTEKH5s9MZjVPBiH2LnBNUyxfsdBYjiW8Nv17UWSVMxm",
  "key15": "4ktwTygFKaS56Pw4jN5rudRzKBXL9QXPqZ3QKDHe8RRH1Jn8bbXSPbpTWCEF2PiEyQPkrU7dhtLiz6ckfhzjHAFk",
  "key16": "4YQ28L1dNqT39xLXEoqK1KjN3PUep32zKXMp8iHQcRC14v7XCczY99yNP7ZupJ1JQQHYQESL17uLzTjNHdntQzW8",
  "key17": "3vvFL7px7g8HfGihNFedmJny1QNMQae5NhHLkRj9Tw2pJCJ7J77jPXMwefPb49PaiN2UCBRnUpShosYPofut1qui",
  "key18": "4BJc1wFQfQszxdYik59QNd9YUxZARJ8g2wyQfNnJJcWha3U3wRtyUNkda94znfdEWBvfsej4BQ795M9sLRquikWN",
  "key19": "2dFNqiZh3dEALeaEsRhtK2cPa3gmBx8ws8MNPUcBThB4twpXKghB1KfP5mfnK96eQTzxbKCLRPsUsKMGjGEHbSoP",
  "key20": "bE3wgrzwim2NmnymbzswK6hkLuUEotA2BonWL2XV2LMYTVw4fJbJTFuu5fsGLcKZvrNMux15ENj8qwUCbez24GX",
  "key21": "5hJ9HhqesbdChdkrQdRxaLgkPhSBSb9nBZDAGEP8Fs2jGohQ5cWwdJY8wU6f6iqPdu87vdTU2KHXFKzgGPBQAqpc",
  "key22": "V45bPBNJJ8Pdhacz1FftWGXpxt9AVwNMxEwf5dWnmWbh9jvQdCNatgmPGkqcamNoSAifVVJK7UdTwXvwgLuntSx",
  "key23": "2AfUihceezC7hcGz3PQsi34wCYbxs36vxBTwBbFSNh4qXgNSwRun7qLxRE76N1TMWiaH4cMkbUcKfs7XvyeQ4e71",
  "key24": "4bKXa2chzQa5o1PfWjFuSqFfthxm8XoBntcnQjbpVj18zZ893zjE6R8Sqmx9af9Vg7iZ5jcUFa2pZmghAYxdat52",
  "key25": "3hvTKo7iJvLGSCMgu6hcb5Ld72dVQ86gbPoQ395jbziHZTGHqEzseiAWy1phgXmqooG9znQUptooBqZejVGCtb37",
  "key26": "347kD3UXsz5f9FujrQA7HB9pgRuhLJXTA8TD8nB9U57oBToPh9zQJAho5awMfyKexdxDc2CCBmJMUEMymFMfssoY"
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
