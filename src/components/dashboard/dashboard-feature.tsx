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
    "2FbJPmFJYJr7EBkTxahXJhYqYeb6WBKtZQhSoqLjn9JzVgeDaLCBGrJLPh4o5tpQMbVzkgCNhb4dD3bMjgxMVHKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22tYbwdcHEaPyCJskFkUikv6PGRgZAy9uxBUQ73jGX82mqie8FM4ezBkTozTU6EcdT67WdQoL7jUa3Xx54h7hVTz",
  "key1": "2AMndc7yTkxt94hwCHF4gqK9mMX5gRgmMkgK9E9YhhgVoH6DNrci8AUtpGL8pnGeey5TRJYcjzTcWp99ZpQguce4",
  "key2": "rqcf7cod9YNQhh4mdue6tGRRHKnN9s4moqmZ5aX6L49pct9CFC3e22CcNQakb24kHVeYsFbkUB3c7FisPsTcW8r",
  "key3": "3i7bp2obYy76HFub4ZpfmhjzYmv3eKx7DBSnFYhVJY467N2E6Wz7iz8F3rkn1grj5RGKSgeDTrrt1DFbuTjdHntE",
  "key4": "5dBX77ftrLJzspbU5atDwu4mSJbcDNdmsW1YwuCPbUwZE81Ad3Z6to4qMyZoGN6oT19SUL77rdtSzRN8ivi1HzMH",
  "key5": "2k5mEXw4J8gt9iWqQmcuX9TnLHGWQfeE2muAte292q5dbubMz9koVDMsKqeaUXviB1kNayDiXAKcRX9SJn2zcog6",
  "key6": "pRQcMmuD9MTezfo8X3KYkSNydtebSkvnt8PZxsh2nbjTD2g9QZP9AB8qikiWj8GRp2PWsUQEoTWS8QM3gB9yZU3",
  "key7": "36otqXGLRTdNvifXYpRcAJCYAxnf1KrUYF46PQ2XX3KyZomoKYPwUf868DSaYv4SZJFiG5NkVgZ7DgMMwhNiwxsw",
  "key8": "2MkYdbFGsBtHAAWbiL7G7Wmk8trqgvKzzHzuTxBPC9UdVwcZn5kEwTWc5Esh2fMHrFEo4bJSo7RwQ4CE1Gdr1Xxm",
  "key9": "h6ymmqQX85ZS91wgDAyH3iVs2eDWUMFoxf8yfkcvjaBRAAPuop4XM4uQ83wg3H4y6kE7UABSJaQuprKYC45Sint",
  "key10": "5z4GA4856gTyrAyqpMLipuTkqeNQAxeqkFksYcAULeqAjS8fTmnofVdPGSbXb1aAXgLBKRUJ6yhBCCjmbfXkGsVY",
  "key11": "49nvkoD5dtg5LKSoRzwoPaXmstLGuELJjkAoAVUH8R9L6VDXTXQXLMPUdkSmWmAdeDUJQzXYjJACH7XnRSifCKBH",
  "key12": "5PXn7nDWmRvvHPaWRrozxtCL8mtJUFuob2QQL3yYK5VyG8kMud9fcxDejsayMnpT1hJmgci7p8vQgMNxNnnfSji",
  "key13": "qFc3tLqmy77zWM9hbpzSCkugwK9raU5uWjVnkCmdCrpQhG3ouchfTxJsSeEAQV1saBqteCGVSpmgbqv5LxGMvH4",
  "key14": "5vvPnc37SQG3QmgbTnMjXSuDjkAKdFn9qC9Wg2qNzv9j3BZcopw3JuiZUkxELfx4prRsGqKWfGQYBVzkbCqXCMZr",
  "key15": "5YhG2CQ94VmeA6aqcvy8zYe53i6KnouzsLJBtTTttHbN3nMNyceT2yoNVVLpx59uh3fGm1SeFGLW2QetDybMGCB2",
  "key16": "2sFTcgok514ej44N5qeLeT3Vk7FxFoqfPabUW7mcESRCnCc2wq48gK49r8ogJMnWPM3LSvEtpJtJEMLQ3sBcza9r",
  "key17": "4Ln8ZN5Rj34x3tFyMDVzwtTw658Px4kF3fBqqZGoxuzrmuoV4VJoozmjGBnpA4Nu9rz2hisv5J5TdM6ZnbG77YnW",
  "key18": "48H7NvbC9ivT3ja9iVgadJKXvUMTtxpiMoVAdqSdCcLDzWuFWuQ2S8t7gcxZ4K3eBMHiuZM3mrDxh8iJsW1KymwJ",
  "key19": "5LTg5bGnZvkUwFeoZhNxgqRU3zgHL1CdZ3tzaqWjXU1M1StT1kjwZPuWmVhkBrwNNDc2qjHzkVC3UttTsidpr8X6",
  "key20": "2Epxi8CXWXbBptnLGAi45PSTsY3KMWtGMnLWjDQuD5swEAvWaceov1u5wNaEvt3gWm5DnUN9Bc7UzWB1F4G9r76d",
  "key21": "3g8yPh8Bn5DKskSHX5FZaCL8H71W6b4coubgrEGdunjrCH5mWPhjLsjFUSy2Z4B3EWc983CqSR4cjcSstcKQ7ZXY",
  "key22": "556esgXnBdNpcK2LTEAw4yBF96xLpR6Z3CqUR8t5aK52v1sXiCTx5P9ot4DiiZZxugT86p3v8qn99SyyVUioYYVn",
  "key23": "5v7cGNpWtGzoeeLQsMcJkJ6tEsLyaEU6PAigyJGRRNdphWdPT6RYjTbyiqce7mcHpZF4Psrbf5yN8nkkVvyaDChY",
  "key24": "qLQoawv775Xb9e4mdLkfAF9daFEEvB3Aj14qCpiS18CQA4oVas9hWeKQ55XDrSmMti1CMGkpAn2F582PfFwAZPH"
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
