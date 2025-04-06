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
    "51vn7XSj1GrSXtXE5SXmeikWQsPiPN3pULT8GxWJ89psUSLnHpLx6aRh9wyDDagUVN4iD3qXv2z5UfY5MkJJZUcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c4ivPaheeFbp7ucL6RGf8EQAgRov8A6K2385VBkfb8oJcgUBVMCC23C4Q7cFij3gJbWKBMeqdVZqXyMAHMgqQEh",
  "key1": "KrLCa23iFY1uxMEW7j8TSRezqogAxwNzJN96RMhy8tiqHYN1Tqmhd16wr879wPg5fzgbPGaosF9yHBk8Gwp93Ht",
  "key2": "4wfPZTpM5Ceg2GcSuNXgYPXC81YfrX9QnTqn1xx9gDWLMzdZXBT8SWCxtwJHuh2ETYm9sPE94i82ZoNrxPMBWgra",
  "key3": "4T7Eo1HjQMZZLtAR89Nrz3RRc5rgyuVyGX8Rgcrt1W3oCYdokWf1Ce373ivxj9oAyB939L1EprnyWYq4FNYBr896",
  "key4": "4FFqXoTQUYGvzkJuU2ayjPSh3cRuApLrc1z5LCBvF5tAuqP3K5XHcXUwetRPgeMcewEeFovnjmveZamBnUajNius",
  "key5": "Zo3Z5AvuT7yki9e5DhgEvpcLVUp8AdzcBTbYwBop4ziLr4Ctm9NUDkKem11cgdHT3mzyRQf2cQmebnxNjjKTi2D",
  "key6": "4hsEi8dvRFUwtpjkJCQZjEbDhBQ4t342Q41Ya7zH1fbDkwEUZhZMGJUcwTrkPErFujz1EPkdBdikXkkD3zJkCUyL",
  "key7": "3fnHdvQpwKZh3fKbyZjeWeJJEUpgK2cMpHkN496YJ5Ko6tdKRhwQA8wSNAifPFQLqV4Sonhe1QAPjcZM7b1TohVg",
  "key8": "5dAKBKEgXFN962utNfG51HScqLavFqDib8jSkadprT4UJQvYiJEPk4GV5Wpq2DfTbjQZzXU4TUJWUM686JUMCN2C",
  "key9": "5spEP9YvpF9QnHcV1evXacoDMHqThJM2MHrbn1jABif9xNHzHz3256t9MftuZS3HRCc4DyvK1vPCfUDUZf9uUAy5",
  "key10": "3DVVQ6sC7SAEz3y4DxMuLKfTSXn7jSxkYvVTX9LDh6rx4nWuB6y9dqsmszu5yQ21gQUbkiMB9e25bgQkHZw36To5",
  "key11": "32mjFqCHEPaWwUUJ1jAvW7CtgKnR3oXMhsaPaw5C2iDCoS1eGArz7xmCNTmAx2DmCGsPrHgi3buGtEKfHYFt5hV3",
  "key12": "4P3BxeEimDNGWQHedchnf5ZHJTSv6yzGuWpzvh7t81Y7U6Ts3ixNSYQpFw7dh3ATLCPAt27P2GAW6fa3a2AoYuCS",
  "key13": "54p2U7S57UwmSA14xF72QfVo62q2BStEQZ8AVqFX1g7NKGS7bQjFbZkYPVZqm6vGPa5vfLXdufby2S8YVqCRqmKH",
  "key14": "3wkWRQ6ZsSwJML2WFvqSNQYzm93hiWMLBTZQMmDKCNDzCR4HVtSrcQ6o54DxunDV5RvRiN4CuB3h3rfqtUfQ5B46",
  "key15": "129TeYKbpgiCfcqC6cbEtjAJzXHuWPSxBadod4gWvCWPqTEYyCYAFZo5Z98qoPVFXvMpVnjEzvsdWnSRc3U4ki5Z",
  "key16": "4i9JUZshZUjvebH2N3PQVoqszwRhBz31yGAgWwSwRRf83gUt4dSXFD5eB7Qa69WeADKLZSzU5Bnh3eJiJYSL5ecK",
  "key17": "5M43JGQnxqPNBE4X5eJY63fnAVx3GdqnzJ2xEjxmKMVDofEYDzCBoi3ShYJAgrvjRMWTKAxhBcGfAGcQRfYFv3BD",
  "key18": "cHcTgzVHMfv1ZLyEKfWjAMedpfMsTJ7eCmHfT1Th1SsnTkfUKczgUTrP1aVWsM8kYjY4bUqGhebhiB5jQyeJDmG",
  "key19": "2Vx8imx7ZrTaebdgLMRsC4VbBoe5HKSNKncJKGSCvh8SgJUem1ZeJpFiqT2mhokjqGqDcB7ms3nDBegEudv9KkTG",
  "key20": "5Eb2B144KVf2CaFMFkx6qGeh3nyEPPnyS7Nd6fvWEUverbiUwdvFYfZE6ENTxLBRmKCfUHGi9ddVjGmnJbfTrqZJ",
  "key21": "3T1CxUgvrt2yFj7F4bX8QuPoR48mYDPz4jjz5Xoaa6mjCWwxHkZ5Yc4f2pwo2SWQSfkvqp71iH8DZKePw4JxWn2u",
  "key22": "3bjTRbtYiNxrPgdn351C7QCYt3x1ZaayvrZBB91sPAchwM2cnoBkQdnkAGMfMmcR1mHRSkQQhrVamG5UKaFQ1JDJ",
  "key23": "nVivgt2Cu89hs3pkjFNWCAM4DYDDhYAd8fLMDjcBVmAwGbdh6pxGYe9oRLSpK5o2QyRrTXsKbLXfnAkGnvgLjVe",
  "key24": "4arS8QFxN9jTYTNbCE7ruhVrevm7SB4UcR396jpDQqZGHrJ3pAFnn4EZ8vL8NqQsyCo5Yu5gHWgCJhUT99eaQpE2",
  "key25": "2XCJMM9XuPVhvTPkXnVU8cKCT7bE5y5jnpLiuR1AH5aoJJL9UDWatWMCBT9JhhPyKVg7myTUAA9iiDS5ABj3H98B"
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
