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
    "3Y3R4KPRK6DSTP7KsJ5NPDabivxc8hkNKkRFMJ9883dRbj9YQ5DoshtqcfwZum2T4QXUniwZbnDN13vnfadzoMUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zrasJ64yRauwnUVW2bmbsqUg3Xk51EAxZdv6TJVDmpQA1hXbdZHFQ6rMSWXMoGSppKwtyn9GTiY65WVVWiSZpdZ",
  "key1": "5ARxGBPbxgZsqanhRRa6ppoQxsNKCXDimNeJRzAmqsufJupj6hyTtCMYw9d98crGZ4VL9Ref3ZexGiWnaN26U1gC",
  "key2": "EMqEQPv52fmD4E3G1hdf91MCAGeQpTNE3J33uYURRgjufWLt6fToFLHLRBWYnEKtLjeN2MRnXmBKPBqb8aok4df",
  "key3": "2QVmr3hbGEWWTsbWMzBTuSekMRVDBMqYQtyQU6wdVqEb6zVAtWUiUCaJutki1GUiuNLUnN9UayzfYJ3u2yNmcvym",
  "key4": "5ViEA26MxqLjTteGR1Z3wbHcTqSd7g6M35TVTNg1fNJ34skPWPhWPGs4FX3uDHf4YVgPK8PpAM3MekVB3Gn9ctXx",
  "key5": "DJRnF9CkNYi47WnyPqWhbBiTPYsG87giJgqbexhuBV3mcEsgrZZ5B1NTgigB44BVCwNnZVM7xCUkLpiYNuDuxzv",
  "key6": "3vDKULhQdEWJXQkcGm4RVyoPnzZ5WS1jwueF8CJdkPCm6dCkEwpYV2Vs1BcnBiMo12yNjPjnrAjicYFYtDLxPY2w",
  "key7": "74ys5yEiyKbfZ5MLKs89Qr16MbYsWDsZpHREVUpqXvAPq2yFYR8KJR38jDvkPr75QQWKsgi2mDvryiRcw76CK9L",
  "key8": "nwATPatsBSGDEfQYZzJdUbZzmKtqTfd94Kaw3TtkwTynvqquShVRhhsAR6rhe4trK36HtQzofKWr9YFfxawb297",
  "key9": "wf5A788FA4gzebUML6PqMjc1vptaci2roz9ggwaVSPaQC9pZt76VGU5MWoQpXbCSL3qnNF97rAbXbg472rPrLZU",
  "key10": "4okWTg4EQRgi9quCKKyvS57qrxMdt8eKYZdBwE7vjfRRnirMsqcqRWVCanBGT8CBRZV8DuW58NRVSeNe29n4z6My",
  "key11": "vxMtF9FbPsjkP1ng651o7iGbKg5VZuVxphDQJ3BbYoYtnRi5wrAVMkUjyUEpbH34LSYhuUiHfyzNMzrMrcTJbkM",
  "key12": "2K9kKP6b7FQPFYJkRFpVWZNDvk7d1wkNcZk5xuo2SarxSoABpJb7Rf53LA1oYhxbAJNV3rfVzbqaStWxc9vq4DdZ",
  "key13": "2FM31BqS3it9drnHdarLYFqeiCDotQn6ugn5V9M1QTg7j3a7kTdYXMduMxddB9zG6fTMKXAffDCxh8CSkuGfGkcV",
  "key14": "5W8teB9J2DGKkdFeed6amxt951R6G6E92igMbfvH7ggrjHG3wJgMV3ymhzD79hEiaVX9g9d8K8YhUWJf9PChfrET",
  "key15": "VdXQueZ7s4GrqEvHseJguqPQ6dKM3TWZ2VwA7DJsn7Ab3ttUXff3Nsqw4UPhhSc7duPvtdW1YhJv8BwwqchSqy8",
  "key16": "g6FR6bHFp5HGv7sDyyzDHWhSTVPUjKUTyVCu6a2wMrju6NmEtks83zAwmy9hbXYSWZmxEznJ6btq3rEdPLt1LR8",
  "key17": "T61UzmjA9gv4U3KD4Q1CAwYWWit7H6GYRbS5tf3DVQztcnaNrwC8gB3P5uLft4G9hTrJoyfDEwRjqhD7FWxVhUL",
  "key18": "2vjnD4nACXavSnqjoPgjhTsS2JnKuUdTzhAnVTGZvU1bZcVgT2ZAGFByyZtim4UZyM93RE6KxSh5L5FwojtVPftZ",
  "key19": "66h6yGV6f9UBUdEdVydxcQbiv1x9TuNGGMS5hvsns7GK8xEp5xiuC1PEXx1pETVC7GKSEThqMToLR9J1kbZtWZF6",
  "key20": "4TWuFZgpMjtn4rMSu6XQQaqb1J7nwVbsJWfYXZfxmVTFGmu4LhanQG3okvuQgjdP9PUbJNRguJir6gobmSVGfFC9",
  "key21": "3eBWFSinMcsHEiSNc8RvzXPXZKWfGTDptaYWsYUzYE1p4HEgrtCjV2gUJvoX6Ahq9TkdVBtfdvKBHKF3Ce7oHRzL",
  "key22": "441YAcxHy2J5GUD2JzJf7GAJaTjNQ5iWZREqMrUw7n77d1brprbXYkLb9NPX31vxD5amWNzb9PtKHnM5bZGw33hy",
  "key23": "2KpgHpdDtJq2k58Sgn2qE4Lr3qCoyXWLSiFDCXa5vQGhUowage295pCP5m6Ah24DchX4enF4wCUKnAk1X7rUB1SY",
  "key24": "4RA7JKMJvHuCzgmjXLdG7vX2jPTfJRGVsS9y3q4mTzzSLLFDHS6KHHTSNKZVa5fiyiiagYnMg7w5dxywSq1xdzgC",
  "key25": "4DrMLV1HxrSkevTSFXAnyx8umVDy9GYvcjhfkjgEsfc5F4ePep2GWvv8ZZiBE1a4Z7PiAtNz2gUBTQVNoF9s5nEn"
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
