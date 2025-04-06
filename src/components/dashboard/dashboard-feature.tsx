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
    "2qiV9ybyecbXDhxF59HdchEPETLCJYiMy2mnrfXGPnVNpuAR3PAZVMnTBsEVuxyWDtfJpwX2GbpocXgGj3f6HcKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rwCyWZAysKNm424xmfeCd8grLi4RrgCwswFSNeTgAZ64mwSwMViUkWcdo1D1GEokjxsNDA2Uoz4LRKBiaMte3NL",
  "key1": "39g3TPgmiPTc57CumKe9fxkac7BHdoSZJzRg1oYEPK7ePYU3zwGuvx5QsdoLB65oPLPRBp59LUPaGfjeSC5HzxjL",
  "key2": "42hC1A3FaaW8ejEmek1c3gBHmh7cYYkKJpG3YatJoE4EgfFRkvTrYNPd3Dhv3fRnssU3DcxqiYtJwocWGbtzvLXR",
  "key3": "cx98GkwkahdhSMyhtCPfVNcmNkA6aAwhHWamzPYB4ZjVpPXb7NXe3YG8e4sbNAGVrqdLU2cWN6XqCBNd16vEyo1",
  "key4": "MxWHVxgaMBj6YwPuzf8AmjQdb4mMNew6U3aChAm7Gdan7zMdGg9zro3UcUAPMiV933M1ErqnLBxq6xaE7jC7WxP",
  "key5": "3D8C6eWnpriq4g81CwsY6FiW2FsgRv4ckZmcRu7ouvYXexWgrqv6Aaeuzd5rhdAjz1j1GgLHKGNQ1MmZpx4vBmCq",
  "key6": "2sqsbX8NZtSosnS7LphJ1UoUEw9LT4pNcnkkSQzdN4xVfz75ZDw3PpWjYBYNy1DygVxEVFYh7oULcsqyLa1Sxnay",
  "key7": "y4tdBZ3g1Ze1xLXzPcSJyebP2KjoqJev3mWvLhqnpdJwDgGMvyZM8vRhKhDNqUMQnCo6saJVfwZr3cBjKetRfSa",
  "key8": "5X3ta1ELRrRxzW3REx6RvCHE3QHGSNheKPseqQK4F2BamT5RtPa71WsfrXDWhsf8VnTyUyy7iDcs7QA72s7QsWTN",
  "key9": "WpEDjPVza2yJnf821gG3Tmqt9m9p6t8a7DnJuSfnk6QoPmdKPn8h5t4pWJHdbHtgpYnVcKf3WsXn6a5ftg5r67F",
  "key10": "53LqzUk4wrQzwT1m7wdyGfoCtcZfFANumYjCJx2q2MKvhkW9rpxDr1b3Meg27zQG7fKRkGFdjmTwkZ9WNMgsL6Fk",
  "key11": "2m9J4rQHBiQoe4TFRRbvDeRPe3YV6vFjnHViN65D5UksJP6B4NrkDd6qpuvNRUWgJznR79yKbmDgkXF3jS2CrDhV",
  "key12": "FYjQrgJri5eC5zdtHNDB1ddp763kXNiUJtKFTBgnTxwC1e1KToy4okfo1GpJQkoLYAfca5zDYdUErk8dMonbQS6",
  "key13": "Lzq1g4Lts3SbZ3GLPnQm1TJHmYxAiTzCfbSaKDjPBQ2iTmbGKoJF2EUTGspMn38JgTFBg84fGttm7yMuDQWCLYs",
  "key14": "3ZDYWP7YHbfXdALDMcQ9G9n47kkncY1d25Fw4kK4yrjnQiaSrSC8nPerJ2UDY376JYC8oCNGV9GEU4WioR81ko24",
  "key15": "SXcLGehNpVWX1tZHjmFcNACJKCeDbfnW5tw5rm6GbdTQkAS6nhpjnvie88uRLAaDZR6q47qvWo6WTj83jzvgF6K",
  "key16": "2uAS3rt7ZfanFkaCBkEoog4w7D6Th4hNBedCdKTvi2vBNqFQSmDtaLrfzuT7wS1jbVDtKNLpT8A6w25ETUWU6nwx",
  "key17": "3EqPUE3iewF79Wmj1AReKnCzNKT4khyFqK75kqTsP6guG3epNwcqAc57shkWCMpUSz6hyQRGQqBNvFjE842uAqDm",
  "key18": "4RY5N3MqAjb7kqjZTjGLYNtcTTtKxChFpWP2eej4LbCsR8EExU11qxtvz37ek4Bf6q43UKJX9mRortPiMiqEqmv1",
  "key19": "5VKsG1KFupnPsCnWkm2vzgf4rKzPoNfEPgXeWC5QHzRAZt9783Nw5UYsERqY2gxNkjPnVFV1dQnhzbgHsnuQJYms",
  "key20": "3AtRZbA2oethPZqEuAXwETtxK4UCGSfaGYMKuba6vc2eKPX4956SgbwoeNRMif8tUAVX5W2R6m9HGu3x2hkvWGJi",
  "key21": "5gg2DKQKtqeYEtscc2aZpf1DqmPn5gsuP3494SuLfzQPcAPUgK32QBHEqEpD9JUPFaPfgWBjuX7m1BMKwmdgmvi9",
  "key22": "TFsqRbX2WVUvJpTF2ARaHesWDEuGbJ2MV8qA2f6jdDcL8sXvUYyWcbaQPzzmsy5UvAvXKCQN7Auu4XrAscyDxSa",
  "key23": "4NQk1tXiuJyCPEutxoDjUB2cAZ4NjtMx1KQsUmBTPo1rESeLvcDfLDxg3sUYxefW67gsCdG7JixLsYHWhVChvZJC",
  "key24": "2GFWFdsgD7LUc9jQKzTANpnuecLELwD2XB68QecDyvJ2AwGtkexSEWTSeq8oL4d6xir2hYaa45qZJskGZbKFvWJU"
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
