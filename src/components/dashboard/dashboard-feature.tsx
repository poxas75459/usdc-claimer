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
    "2Vkq1LM6tqeqKFNrRttiZ8dcaag8bv32NWHpP9saCeUGUaLb834i9uJp44xCZyzBY9mUP2D6T9JuDrcRrmVxqzYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2paLdXEtsnc6deqvyjm7Pt4fiaFhfY5rV6e6vZ15prCvBwDaP1ubYSWmEFsfgEs4prx44owbMUPSD21gzwQcFEMv",
  "key1": "2F6dS4ZU9m4zRmtpJd1MYL5uJo1PseeESPo6VYbEKUUGDEaFx1kq7hVvimtSCFgZERmdKVjRMoQAVMhb1LTh2GjG",
  "key2": "vS9Gkyype6BAoLvFkDQntJ1bQA4t3Je7GAett2fMGJ1RNNeXPTevtW9JgR5zcQzyQFCc9CfbwED96NveaFwi5BC",
  "key3": "31v3XzKnaNYkCetAHrvUjDiAKY5DDsMJ47xx5Gop12wqbFUi74bmj2hmMi2MtNwvN5kr39zW59Tmbg2DgR77v775",
  "key4": "3GyHWBbSXB6DGnLTCRRXqCb4hwZvz6CHHF2EKLR2djGAo3SHVRcs6Ye8pqmJDAbzhzAERkXwLK6xYuENEFs11SXR",
  "key5": "2cF2e7sTbqBUwDnXrBYKpjv7yTL14ujjJcd1yqmyFr6U1oZLnYJRnVoAiShXzgh6d55AnKLY4auCqabuoNhqHsSa",
  "key6": "3TvocRxuzd5mE63U6pfeCyb8HWufhmA7fQfe5bvs4ZPga8TZ5KeT793TAxTNQhpfVcZyb1rx3HNgydocXMGecCMx",
  "key7": "47XRyMCkrZMVbjtzQLavYV16arUA8cLLfMkYpGAEg7nAhT4ZQqybihs5Fiyb7DWECutYtXrAy9iwavS9qwGMk2SR",
  "key8": "5A6G2FQUFqJGFcBh2sdiLwS5XvLQc42e6GsQ83Eqj4yd43t3L18zmPJaZikEMrf7YfBuEJYKLTviMfuvPV5KX4jt",
  "key9": "3YeyoKcujENorPkMdiQXPnk2MDirckZBnHNnk1a8eTr3yNjgbqbiio71PaLabAcQpnHPDptBBEQLgu84MX5FpgCZ",
  "key10": "5joUCMNtazPnX8HhKL6xtoY1XfDuzmBmEsxrdn9w6XknnJDY1BXPWV81YzyjAx8WEYCBrzMMEXGwRKNrou2HAmQF",
  "key11": "3vW5c272p4pXx7iNpz88SSPtUTXz4G4okK6LJuWym9b7V6Y3Dh3FcKZro9MTXBsJD8EdeGaGKp8vZ9bCwVeswNqD",
  "key12": "3MqS71LiY4YSH3E3mKxi6RmzCqVZDG2GG79ezXach23zjFNQpKxmVFe61Npf37jkC4TrbdiPK9gvySTabiaqzJkC",
  "key13": "5HpWVv9386G45jpjdWnhhqGE3wr8eMNBgqjnLm7gYVWQBSqffAjPpQ52ABMfCJNEBEiWTcR2Njkr1yJqnWF2F6qk",
  "key14": "5NxW9ioEcGfdfXJYmFXGYr4dq13asiP6Xn4i8G2JK6poFroQFTL51TJG3RABn9gYH57HBoCPmkgrXc6eE6EdsMLE",
  "key15": "5esoM73nXHdbgHy8YJgov8AFEed2hGGAuxXcUU1QtzRUpiUup12ysXZE5sfhNUcqM7juBVg9yz376gMWb9xwiTn7",
  "key16": "2YL5aEMAfGh23t1paQ4R4GaQwM7R4kjLmqGHHZXgex2SkoQ9YhUXK5ZBHEjinGFa5BguVcyjMHJVpuhevRoA1v19",
  "key17": "3ToGG9MJXjKkEhMSEg5YDU2KuveEcWzzQoaT3tXQpo5BxvwkzrHDZyk6xMY6sCfcASEeQaU5PL18CjjWeep5H9Ua",
  "key18": "5UtLHUCjYQ486XFfcRkzg4C5ixYxgqH9KH8EcH5tbQn6CBTVuk2beZwTcAAqLVR7b76AJcpLnBBnRSV2j8pLtUGw",
  "key19": "4P9xPYrZVhydDWovbJK72KDAmyHUnDdfLQhL8qgkTBcYnEM44FAj1y8bZwdNCivRawXD1S9zAg6VSvgaU28BJckv",
  "key20": "jMLpQtyheU7HZ8nTxz17eBdmNr5gQRB2bjBt2aNUi19fJQLh7aLYogAjVdK9fyhqTMjyZoRqDhPHjeMZWQxoBk6",
  "key21": "3dcdkzdoiM6xs1yKjrUMJ57p6PmvABSrrZdXusKQ2drNW7tynoFDSBWsbTknRXDsxRR5r2PtU6AxseYWqS43nxBT",
  "key22": "KmRUUjgV1DbFJCo6fNs2LYEgAQNFuKg5F2gdBGVxcW6CDegy98EThwizEbV1ezuaBEdgPCCwEqUoxWmH6Sgvk8Q",
  "key23": "3mWyx6sDn7HzpGfX8stGzAGMonuBgZkjxQtRHq5Qp5dCLy8kLp7zidBz3C4pV7CSh5oathWxi4djq6VENctNi4xN",
  "key24": "53VjLf99aeUyMcaoH16rBHLQwcTeaMFAyoaMuustfQjwCEj4CqV9oFRsx6wEMMTyytYyRLE23EvZK18SNpbVKne9"
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
