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
    "5QtSrWpxT7aXfa4RUSH33NGJJB7qeocqsuzEVsjivqeYNUitQ9dFsrrNfZExgN4f4tMnXRmVYb94ryU4a6twaeFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a4hLY9XXFCgPna9u73a2iTDVeQf2x7qdcTjeAENJpZn6HqJvCwmjUcF39j1ruYM8i2BhFTaK6zqXp2TBff4nApb",
  "key1": "MqW6NxKM1TA97uRwMKSxvL2tcTGqwQCcBrAGtQ8Y3fNjYbEqx5Re3WZoRyqy14Lt3Mmksh8Vu6zHB1SWfDbM9LG",
  "key2": "33o4EsX5BhZyssGsX6s8qjGjpSyNCMShLm1yXhbPmivUPUGKUjMVynVEedCfBgwSZgiDUXUVajzvMhPqi8Xbnq3",
  "key3": "5tTaK5Vhs8PJzDxr97dRGc3Z1yPUuu6PVi1uMvHo1CfarL5kxo2N1DtUFTUfxK4DiSyNtM26tgUKVe6JYvdSUZMX",
  "key4": "4XwfJn65myW2B8AjdXcQNyey6hzZaHZWUqB5yFj3jRCfAanNqWhBsWNnKLoCR9iZTvtYYLPJ3TbfoABWX1Q4FmwE",
  "key5": "4Z2HaK6NBFDbAqr9arrScbm5QuHDdp7r76g5ZZrXsG9GsasjXdqVVBC4QTQ67poMXf5uUDe6Pu1fxs2frofMQVt4",
  "key6": "2wSJMBp72kDLjk7rKSYjKt2AzxNveMMZqQPLrS3D9ekwynrHQFqY9Xu7SH3LyZrvGY6yBS7iiMpxMw892EWubCo4",
  "key7": "4KMfEFFWknqHb9JPB837pnLt64So9Bxw9aXzcy5MPraeHtGogvWBJK9eqxRYBqmqa5qh2GfEt5wCSdsMgcQsXNMr",
  "key8": "4ToJWkgV9nowoyAPmm6tZPF6d7FVo6vvZwBmySR2CbHiSEeUSwSHbFqoLyacPvPth5nLR6SVfjKM4p7nGufoEqWv",
  "key9": "63spSKPwatErznCiAQdojVGiro8ywLwe4RYm43oqXiDkkPcSxvPxYHN2EjNUM2RjHLNrDcCexANYBhYQwmz4S1h7",
  "key10": "Wy9b5B1QPc7qNgjSJ5hH5PktU3NdkBDDDcrfQhiHXFMdshD2esukGmmwnGnhcziQ6DsnNa2fXKgx3xbriZ6yjqT",
  "key11": "4WXvtmmqkSfEmeexLYcSYafrzMnsokznMh1A55go5FoFH6ZCHXCrdvqe3LKxuYdoRcq99TqTLfXPRoQTeXL7MuBm",
  "key12": "4EFuyfxuZaGv6zP1Qz53NSs8AuSPYo9mEez8Vr1ZUkVayT5HQxm6oxCYtWSNsVF5nzH9bEcLaXyM3ncRWmnumhB3",
  "key13": "5xsKunmUpWhTJXtBgaqbzYM4PJ5irWRh7EnMhSM3yCaURaxpc4VExSPB7TGDLswvDKGqchxquBFHRdejcRRRPMqY",
  "key14": "3yh5vycwrjQnmUL5UjPLekou8eMt4r6JTMRysGU9r14N95kNEB1jJr4c56DYJiad6yzRUV1rAKaqVkgosQ9mReN",
  "key15": "TGpGPhjbA9rP2uHN8XtHJnXDVNskiAMGTTqeEVLndaLtad5hFtMRbapVyGGE3eUiNgVHfKZyXQTdHHeL57tyCZh",
  "key16": "3DQFXuYBHaWoXBa58xNsDRNxTmeke2qzRoqu1k3NyqUWEKth3RRj5e61EkKqJ6S1iP7zzgv3NB3yPcN48fDUr9UZ",
  "key17": "CuVQRRAxqcWtXDLsSN3ycQ9iSPN6FEbYT2AzzB4YWrbar2nBWLyrXJWKbjriAsGHFr5XpWh37HecY5kBE8FaUds",
  "key18": "63w8t5vk8tBwfyYxnmkFawMUnW6ZzJUY1SEM9YjYdznVCZH6qYs3N5XfGjv6NnBwk6VVSKHe5XHjKC7SZoX6Qapv",
  "key19": "3M7CXptfS3bKS8LmSK7nvpoK3vHkrhaVXEguKrpQc6Zh74fk6Z9pBxUXYA1wNgtSEh3wQKyEQp8WcecfaKEDo252",
  "key20": "3ECujHu4hXgVRpWBLUXjtyKn2VLBj76L8AMeeonoEP6tjSRf5xyEPyhxyoACWpki6XAjUv2ASSP5M7eMjt4q3BhA",
  "key21": "gVahP9vgP4qFWMht82hHzsS5a4p1tQjuCujsaTBztnL2RCeac675MJCuJaWYK6RWAUyMk4xNGFXHmr935EdkNLu",
  "key22": "3XbYAh8nZjRJccZWqj2UwdXGMnvmiKCDbzFE7mnkdLJ7i5FwVmwwjLQDPFsffhKjpsHXJxpbsWzCW9m7TigXLUsM",
  "key23": "341CDaZPdFcXPjPm9zuDdJLrHs9ZUo9XjdAZTRBJUvJgjk14pCGR4zeCCZ6mmfv6iPkt4u3wihsyHiEPfbyMA8sD",
  "key24": "5fgfCVQrcEwCs2q1rsv8pTaCwVBUxLABpTfP7XjxAsUJmvumJTGuidJG6FmVu4rjGY4FCHpsPEWvZZCJEReBxMJ2",
  "key25": "3XqRH2kbNh9mcJKum5xtzMSAZ2HGEWo3EGQUF2yrhor24HiGw54ogF4dD3N4wLd4nCjuFtYoVbNZZQjuNNLzAPEs",
  "key26": "3YGhfWfug2DLwJpZrzLphArgw4iVPfpkaGAHuWGtVFwFnUuXDw3xseyrBCLAELW7xc8FQ1sAQYrAiWtLRVseqULu",
  "key27": "33c3f5enQsUmZuGTZJMzjBrMuFboN3XTCUivoqC4Wj2c5fYhCPWf9o4QMiMiKPYxCkmAunbipanfVd81XhpEZjNY"
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
