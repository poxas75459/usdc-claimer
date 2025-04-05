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
    "5RemdTxjYvB9A6JFJctFkMzmZFjgKQmGT7C4usR3kPDdn1tXMrMMjF2dCs9gXdLyQWEUfzeJMow1psqPv499YikY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RS2ZmSGBJUqZWNJCFRfzEU282eyC3gxyYMyLSRrbCs7DfCgKa8ND8QUprWV1wkU6Tn78RwgsoDsfadxKwfNfjxE",
  "key1": "61i8XRPAko12qhirhykCEDukraJ3XoqoNTi2RN5RGFWWWGqfMvbx9rTup9GYq785joRX2sca9mWfNrfRgjx3v8dp",
  "key2": "PXrGSMV5EzCojMUxUC1YrRMCVqNXTvGkTMGdsAPtsrvnzEsTV7MgJR1ZJdDZVX2oxTrVjTcTZEXhSct5PsnzAZV",
  "key3": "4BEkdmEv5DeeeUjWYFSZA4MiyLztv9k8G2d56aF1UzBiuMjC6Mg1GhjFYoxcXNuX2symkBS44dcPwa7mFsrZRzFT",
  "key4": "2D6hwD6YxtY5RgiU8PMHuAMNypUs7AjYViexipDXZxcVYQMudriQjUMnxN6jsqUdV1MUcg3tSPYQTwg5S1Z4pShg",
  "key5": "3m24UiE5Y9zcDh8Dz1KWyyyoXc67Rm6Lh9ok2rWtbZecN5vg5vYmkLaKkPyNzGkP23diC2fzRhMsE8L6MP5T6euB",
  "key6": "3QEtg22Xyo2qpaoTuBbes1ZB6EaqB898jkWeUY9Ew5QWsHtbYnEKL6pmLzdrsDtC4FPqw2YcBhJE1FE7WPvjyA3P",
  "key7": "2A4fN9uMggTcnS4RbcwNWfuMjAN5xZhE5XX35m954QsqaV8qhuzWztv6Q4u8NgoQZr6zmaba4pbengCYfsbeBKjq",
  "key8": "3wMRyYsoB15TDc8ZWC8P8EE3ZkXEH3n9eJFRGvBABM5BQJ2tqcvDcX87pvJvBRoA4DvNTrHsTcW7MusNPRwABiXh",
  "key9": "2r6NgA6YG7s497b92ce8qmfgYuuuwUqENeVw1htX7dHCxkbfvSVZWvhvwkQN9iCubmz7Ni3dE8kMR4rw8dJPhxpy",
  "key10": "5FyD6GGDpbJjDv6gwgvWgyYADbE3Md2PrshbTtwxH44mx9C7A3o38fu1YRrDmvBoTyQxrx3fWL3BpskqLyaieiKd",
  "key11": "2YWzUs6KETNBtdqdaWUAsW8DZypAAHk7X2ba79YfujBHvztaCeCMBHVnP7VnWVVxgpuFNgGwVWA5RgK7Y818ra6q",
  "key12": "5F1pwASGXoNwzCV7SachuUoATaYhYMLyVd1f3FVprMiwhMtrSZ21oLjmxx9NRJq7o3iKBQa5GQuyvZoazqpBbm8p",
  "key13": "2DksybKr3BCnX5ghRBFW53rjs1xCYUttiStJLUsQgji5qKB8MxhVdtyZq7XYps7hy1sGRqrqqTf1N7Yvjhhfq5H6",
  "key14": "4K2UohKjbwzxj4m7wfJYUgMwuMcsdeJD3d7varekAChFvwhkLysZiXL59b9jSH2aD6QdaNUXynZCZJwLk6Byx6PK",
  "key15": "2asEuYREXuqir57a2zX6bmm97TwVHPai2bizZLWdddNtbDZRaxmAd9jusS9zQxSnkTuiaA28wWkXXdQqjQMPqQqf",
  "key16": "4sSHBftFJfWtde2J23p3wq6kd74BJSjSHgJABHWdhrr73mTb6PepGNAk8NwM5ZDbUEzFPFRDBvWJXBoU9w6kqMDJ",
  "key17": "4JVrRuxztuN6kSbiDzf3pmWpu9UGUEspy4qwjPQ3uZ3aJeWrgEgj3Hf9x1AeCUM8Le58ZYUCJoXxKcpsVLwTx1K9",
  "key18": "2zuQPSZm6cfTVsLsw2shHV8fH2FKsS8DPUKjJwPnW6AA7S6TpfGGjjAwPVeQnLtdWUFYEoBfDZYgFMPLvSJxKsow",
  "key19": "gasY6apSieDt8EsHZJ9hFWSd6JcSUkHXUSqR1h8BwSAZbFjfTHwakBZb1sR35AVJ7cgV3UyPvHzCFHp3buLXGWd",
  "key20": "2y4dqF1kZsN4gqLL4FWtFhPiesMBgBvUty2qXu8NEB8JMSp56EAMW9EE87WFRGSVH1WLtuPX3gdX4rzMVLpXJWop",
  "key21": "2HR4tUBtE6QQrVsiLr4woct8TNAB4xqzmE3Y5igw5Jxy5SgrmWytdtWXSu3moC4u1djYWEqWi3mot61jFsJoyBAN",
  "key22": "5R9VFogR7rYiCMwmoXVbLbFQpiZafNpUeDakV6FgGbjL2wyJWTL3XocQuYHPodRNMmNF1i4oyH3UxoxUYnb3TU6c",
  "key23": "KhvGFiKrHwrEo1bM6F7hETxFBGswMoioN1uVSqK4rgDu3aVYAyDuuMHJ5wRm5fPBwyoGnmKD2CGJ6BbDhrLNhKy",
  "key24": "4sDCCphDuUa2FWumybmtVWDH7C18XscMRJb7RGceZZDvpSQESMSxcS414uzN16WYAcBy6nNrkzubXrijtVFk65t5",
  "key25": "3Bu4g6TX6bSSBJK82TJ2EmjUj98mC5n7A1e3LsrPCUyh2CUV5bqyHBCCSD7xrCbBoPyPVKpAEb8NAiRA7oko8ASP"
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
