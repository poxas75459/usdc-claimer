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
    "5KxBNXa5wBxZohm2p1WdvcBBmDWoTbAb3UBCmQMirKJC51yrPtxDFV4koGdNzKcBhcexz9KQ4JZUQ6hqojgrBZCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49UQD3YKD5miALRCVc7ho4LFQCPkyT425CV53SxeFd2c95q1SwQPw74iVo5ELTp64fkKnTvDPgrPewUHQwCWfMUe",
  "key1": "27s1aQGpWEEaSuo41R2ytKAT9WQGKE7jNbj1FgedH3EPceNDWYyFi9vPEt3jXZEAeE9ZoW6QwmpaWMwTeWUgomYS",
  "key2": "4GVmstnaQzko4WJhM8vLFSrQVjSPqhkJ5cX2SKF6L1PiNQsfyYSawMXpiRKcJDpxWBqnwPk5spmCidwcgkxNfwko",
  "key3": "pYXoq8CgW1hpWRPT6EgTrRufmLDiaudsiMAoW6fr5T4Ha23SJump4uak5cLRDSxaMjLoocNRMJ38Uc5hQDEwGkV",
  "key4": "44SXwRC8cmcTWxGUy6YKzXaV6hRwv3kDN5qXMLTHP3sunbHxLBTpEZuTzaRhcUaLrnPYC2y374Ye6X2Z7DVNHXc4",
  "key5": "Qvkc8CPGdr6cyJa7w5fn7dga1iS9WvmvGcVWsLywXcUuYy5fHCrdF3GmnGuBMtMHbvQQYmnMhNezUi2FuP8ZJxq",
  "key6": "JZPRMWqqcHivz4JoK4np2tetZUacFTxDYVHz2CNvJCTpb4dGFBGJ9kq5hDX6BTngTRXJ9o8aVww91pR2jjosAxm",
  "key7": "2jfLMa8gXGUY4XebsC5L8xUGyZRvrDQSxai1k4R8SXjzbizRNXxi5Gzgh8oE2JcUxVaBgHvJyxtBxsXLSFnTJ5h5",
  "key8": "4SpfgP114CLg2M11i5S49MzNenE7R1ZpBd9WfEzLmDqn62gfp3sna1UVrQ9s6odoeFUBGcPSaCjAX6F4Af1sxoL9",
  "key9": "2qMi9dw91GaEHZoBpMHnHydFbsfjSFk98u1MjfMVAvnNVZv4xqyxC1DipxT3whu1UA69R2znFkSdY3K79Y2dvfGo",
  "key10": "31q6zVc5Cysot2XzGQqinxofAQZt8xpH7phRpznpfXeJfcaaEpZgU7KkVuQxeTx6MNnC492gPtWEnAiZQmCWwdB8",
  "key11": "5U9gRD9WtdMGqYuywgF4GkCYj1ewvUVhCjtjPk6nz9RBYGxVwgxWsALCNV8UJuhzgawVcxMD4FpXUBYMCdegzVWB",
  "key12": "4gynjLNGgPmN3s5akPK5p4EMxsqVfLLimNbBozELxqFhaHKZftJNfnJgaAZs8Lxd5K2Ztu6mpGmrqoVscSaSs4nT",
  "key13": "2wkf2Zieg1mNcYybHx8CvZba6oa8TD7xt6qmGKczqYkhaEjTRZZ8HuZMq9cnGP3MJzPE9Kb727utLX7jLozrPvFb",
  "key14": "4WawDWBMfNqJ9DSmaUXic6Gfq2Jaby3Y73pWetXfV2vgchzoZmoMmjVsVdU1YbfnKRVofZGdvtVC4yT1EFToySu7",
  "key15": "3NNKNJmvXxs4K1krwtdo5k7B4buTBRD3gfm4TKumn3dEAMjL6EoMziCLpWSanpHvEdoN8eKSx6PCtH4en5CcHzQe",
  "key16": "zNK4kUWso1d86Nx9CvaCgvCu7BW28LFyNgJGgjoKsmAZ1yqcfbC7xx1i41kDYpYWdcscAXY8sEW6f3oR2DGAu27",
  "key17": "4EJdqsGc2PzoCLxWdh3QaWtoMHVVGJcGkExMzr5KZWvqcEaxurQ2CpbmNLocQsZeREvwdp6Q8kg71Dm7eCC6GKb3",
  "key18": "2S4EvYVQkSWKTCdWW6Q1u7jTYi1bitrwA8pHcHKUpxaFYSV3NjPkxbi7Tx57UG3snehMiUTfRvyjv9Ad3gkKprCZ",
  "key19": "34gVSp2LvudheHkYpA8G9T81Tt1TggJBUbQm6VQvjgbUBPVDRc4DSwq3b48jymiwZc5zpi3BGwGwC3ZZ9YqfYgxz",
  "key20": "2riaBA1kEwc3sfi7KLsy4jNbENR3cDu2UvGu4hZ4qY8ix4rhv2PzKhDeLC88tMJnr7L13TxGQovTRzmDFfFBqVTM",
  "key21": "5URHJQnBKKzUWjxWXLHpDKnJ7aTDtMqEBFSmnmTg7Gr8DX3iKJs3EpRWRP6MNYxAps5yqaJywXDREpLBSTmpgAnL",
  "key22": "5y13x8SQFf5Ug1ma6ZkB3mkbucyBzjj7frmT33EgyP2UBgzmzKNF1AbK72FGVvaG38Hk64gNU7TtHqXwkMpqGBG6",
  "key23": "4caZFVGKanK5wfC6pZ7AiD6L6PgGYdB6Nf1M4w1cRTe1vMvW744oj4EdUsXt9RuctdeF46NEL497MqTwtdq14e9e",
  "key24": "5aRNfydfjL1FaBqdjqCPoPYCzbn93qdhFJfE86D2DhUH2oPNwsKfGzXNVxp1KkzhANwLQQdznrn8QroYfAiYrwqC"
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
