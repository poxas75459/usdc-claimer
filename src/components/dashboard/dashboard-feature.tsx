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
    "3izLw8yZ5G8zmuVMWd97Ppi4gjbFkEe6H3QD6BA77Ho9LwhbSgrjYBg9bgApqFfGvizH2BV7M2LTtwuZVHdm9zUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cfybsnUAsvv5p2CzouA74A1t9PfNMHc9aDTCBrxTygjYtW4dTS6k53Mv94yabs1mPwcmqk8eYy2xLBwZSqpCh4",
  "key1": "5HknLUb54KghYeFart9KPtsqWHn3478EtgKuSSE3zJ52adFgCgr6u95XQ3vR3WGNJgQ7MNJRx7KFj31KyadGFYqU",
  "key2": "34UGyswjW78DcK2KEGgVMvtqeY9H4BgJTJvT7jwwUGFyiTxPEJi3QFYFKuuWcKdSwGj7BV4J7ney2unTeAr3DghQ",
  "key3": "4vLy8ViXfTnME9NzLLqTVqoZne9SvreSQEjNpXfP1NKeeMhXFaHxey4ww4oveoK1TgKEnKyPyB93CW7AdojhkUaK",
  "key4": "5zauNnaHnf86XHka4C1bJBcbJ4XKu3F2rztwTwJFufDKG1Hp9uNYTan7ubQv6U3BhyxMd4FaS4XHuCadr8sV3igS",
  "key5": "5zezoTDdj52Upjf9DvWpt81BurufXsBT9JW8kLUWmpiYhYV9FTSDwoprbTgXQ25ueyuxWLmCNRWBfLcV71JAGCYg",
  "key6": "4J1k1937cLUwGoCM4jiuuWPMD21HRvPkfR6Kgxmpgd51EBbAjygZFzatVqp9KbQRsQCSyizmyYqkE52fzvVnmeD9",
  "key7": "5ySeCJ6BPuxJ2oNVoh4JvBLPE5i3BGdNEmS8vqHFxNcdHPAMYMVprCQUS3Hurrn6yrGmVymLmbgHjgrfPeRsu9Fk",
  "key8": "5ebgZY97czrKLsF46DYzFbnUVWZJtnqP5utqtaoNFoU2w5GCKa4FersV3MbTqegF38xX6KunygMMXw1yMwZ4dUrz",
  "key9": "63EknXa9quyNvHUFQR6ZSk4odFkDgnPhKy5qmqUkazo3rSqimdVj5P9k9dgLezLckGZactj3kwC3F67q7GCpXqi8",
  "key10": "2MaZ9syoG6i5CZf24mZmWaJa1CQuRvcjtsc377zNRP1bx6beVipdXtFCSbqMocCXJQkMDmqyGQ12AAfHrVgZDGry",
  "key11": "4NRqD3tm6ZDwLARh9M1ovNMW8BBBoPKNsSdLrtmoQhRzAj3cGwJDm747oq1Hyjwvo9emVH46dq2Sd9CaCLqJNJsQ",
  "key12": "2QtxXEVj3hHrzwGnNxjdRggysyHTTzCcgyubPyp5fEzTtRxQncyR96L7u9qQ9tb4kA6TvxQF6wN4nodJJVEgvsaa",
  "key13": "56kWyLnUpdJBTu6RNsCyA75kikuJGxR773tqq2yuiMSZvTJnmi2csze3xEZXBT2wW3bhWiHHbePYEi19T371kWLp",
  "key14": "TKad2Rqeg1wUoLuEnMP26xcGHNHy5kJmoZZ2ebyHeeMvMuFDHAk91fUfh6kXSvrXf6ZGVNfUb6yVM1CxVdoNcS7",
  "key15": "38NhVy7q3MqXeor9HLyahiC7HVxbJfAFAWYomeManJ6hf2bnLaGzeMRthfLi9KmvpbKyYPUFu8X728ktJBQx27N9",
  "key16": "2GWo1L6X3TDJj2eiHtDCwK8abong33FHR3JKy4kowRu5mqph8b1vtjjiWuQoeRz8mRaFbTdsYdtaC3bKUCNBVVXB",
  "key17": "2h8dra1eSig2hw3KAdzjVtfTtPn9bRQGprZcJNo2wede9QfYA6122tHhXYZifgHMAk3T5LodrMCGVysch9oWzWFM",
  "key18": "2Mdytz3RZWi6bFdZjazD4DkebBXcr1KXwKFDWiXHw6vbRyxgHkUHDCyEWm4MQDTkeQ3LkZsZ8ttaXxEi8QLKJkh4",
  "key19": "676nAmLEhAcFLXi4KBYx35tcoihMaNbLc5vvLpy2bYGpbkigNKEH951uPE8JtbckfA4DMbnUGZibxMoVdzB14Da7",
  "key20": "2gnykgvt1zruGEkeroThb4Au6oyhSeTpm2egMdUNtT51g1omZiZbjkDs6wyLZUeTtAStvEcwf6E2SRTEpEgtiMok",
  "key21": "3rJERFhUvoEY5q3taVAEuRAC85juDBUKcBMqA2ExQdtYiuwdw8L43qzQTrLRdyMKjxYr7tswngmchknhhVgTkeBH",
  "key22": "5mKaB7SL5dqHRP1Mc4HSoYPBZD9t8pDA5oLzMjRGegsXrshqT6M4Esczsem2JABoVTaQnQNpWWiSGEg6dugfTr2L",
  "key23": "5HfZHm3QivEg2R6VwUNsSnqLXqsew9a1nwXGem4yoHBFzxiskavrD9fepFGvtXLazgDARyEN6aw2DDfebLrge9sy",
  "key24": "3TSbwsea5dXvz1Hffju1xKmeegHMXA8WHQMj68BQnJzSw6YzyNRbHecaEs6JDT7evAzFLVgtFRJ87JppFTKYga9g"
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
