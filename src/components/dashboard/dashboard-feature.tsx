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
    "2kjWFdzmFNG29AzCVZJVjQiodP5tjn8s65jtBEE6rLs9EQAQkn35HqSmJT37SaDX4yxzzGuTUeBuVMCvNLdLD6iw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DR73qWPHZRKzcyP5rgr4KDPEKb6ZtZii8C7S3RaDwapvBzkX7W6f8pWCXgXozAVDgxzHSdBWc7hctnebWJbHQs8",
  "key1": "2UucGavLwhgG2mtxXGDVRk68rWkcEyipYJT73xVQoepDXCPKsRgcQMpK1Epcmm9rtuAN57oGeZVAdnebG94jBzRQ",
  "key2": "DsFDDKuuv7LGyfAzrtW1wsosiuBf2WPcEXpF3i7hCEM7ddPMM9EaDC3BdPRanNjGVX4M5TgcEsyZjK8RK9ipg1W",
  "key3": "5n19DTkxBu42hsAoFKfMsm8mfyGLTC13TybLxaxTTsLgNunPgEMUFzAFnrhMHbGjZgHNVQz1aVuDYVRxjJK5mtGH",
  "key4": "3uhqgeDS3x5B59XzcHqiZxBP8ScTfeEXAhRtsRtx6JCuLBNnMkPyMEzNX8AAfS2V2V5BHFCkBypjGRJKk9ZcUWuh",
  "key5": "4MPYAgoNNYpxJnzJaPCrYnCgZbxymSyVm3CJL1TLBgToQXU5jmtFwB59DxE6yLQ4Yte42M15DwhhSgJWXR2bm5TG",
  "key6": "4tp43P2pKeR4Z6vUc7LVW3ARnpk7T97jMVP2SutjwDDNqYoNMXvDfHQJPFLmXPQDkreiSad8Z7VgpXXyacZ4dtX3",
  "key7": "4cCKS3wSRV4TFAWh5m8SJQnYs6YBYCaAGm2sFgY7MdPaV2XaU2Vau9GJXKwS35BeeQDZLZuDBXgtXy6fDQkV3HHr",
  "key8": "2KAp3rNEfWifSrvw7TLzzhuyZiVJdaiZ6EJ2TWn3XpYScisvShNEUfVWZRN64ywwT8BeNx5317fAf1XwbKqsQczB",
  "key9": "3HYWMJvMoMYjiG6PJXw5D69JoZxQpK9T8g1KRwbuwyXa8Kq9GX8vhPddEuF56BjY9aZpPy5R9TuQhE3eNZVqKZ3o",
  "key10": "3jM48U4yUUUucBBQYkx76YspRC3f9uxLgxU4yQA61YXN2vBu7scZX69fLHRdAmEsUBKJ9L8FvBGScrzP842LJuq6",
  "key11": "3vWe7kvbkzvqmgDydg96SCwXWUfG46eVrDZZxRZ3pQq5t5WcaP6JuaDNgobF6CZCTVePvae55izQheVytXCnLPP1",
  "key12": "5Gger9DGvaVZ2bg92TqYKiNfgYKceXkSd1X8dwENuAaihtbJGEJVV5qggMdr9YN7hvdn8gojiHkKa4GwqohMbyc",
  "key13": "43UhKtHr4n2XaG1vcPfWUt2AQ9QWX47fTCJNUgsTe5aKNBsai8m3otU2ERjxpsHYj8HiMmiUMEqDgrjhiP3koa2m",
  "key14": "3zNCPG2i2Cv437WQjAXDYxEozRLkdracBhSZWF8BVy1TAWxpooWhoDCUQaqYYqHX7LgWfPRBxN9ZxA8Kpj8tQu7b",
  "key15": "FFH6rLDKFCn9DzfRnqrYbUzv1ej1Tghm1jiWbn3UXqXdxFwenA4ABBSngjDtiFon4BW5So15hC3jkkVML2sDn69",
  "key16": "z49yTSY7cvSADhw9YLzivfdSPx2amFDFyE9Q3xYP7u3vUN3ATEqEFM6PU1ekvayrrnwHppT1yvrE5BeEqoWYKCd",
  "key17": "9vfGutpRuj7bPyeEbw77rvcd88T24QndVQX4SjbZ3ejPw5ZNTLa17bJdHAj9AdxkHTZjoSfj557SXT7A5RKazit",
  "key18": "5x11CNu4hFaitVm8jgU5YZDjdxzc3e4GBEnef3jqzMvBkYLoMsTMZpcgnR86wBRFCt6F8AVaiKy6N1b6WVWRWxTX",
  "key19": "yFhVhJne9fRs4EfqnYJJ2Qzi42eCUGxa7bAX4gDS46rBaZPjshTb2H7jLr3CwSSDeijWkZa96mzgtHoTqrWEnfn",
  "key20": "4mCp5m8p7WNhQXJX6fWTvyUtwEYsb4KiQZMNTGp7ScxVPRHKkusUiz5GHc8jeAcrdfPTcVXRQwNSqjPUjEcNxBXi",
  "key21": "3ZpBBxDeU7MzTYXLatkFGxKF295JmXZPpYvSSNAV4FjknGzghasm63wAT5UdJ2nT9GUHKyB2ZUhq84UPd1zDhGsz",
  "key22": "4YhMc8tvQvHvL3QNdTmJHyRGcNV91qMHXstbTvJEoZ576LHBbuGV4ZEpVbNBeRBFCfFKLagWp51x3my2MRvicsGG",
  "key23": "27h8sZkJ8hrwVaA2CndJJ3bNTdUZYVdM5ynNMaQDyG9vPMaVik1GFApeVpB11ajNniRmfLtjiL2F7HP7wEG8yGz2",
  "key24": "3tjjSB6d1bag1eJaQQYBA9sQSe3u4DtqkVafetJS9cP1iVcCk6GdaQoxt6pDKzZQ3FutcSPDi1T8MUBHzQ491xLp",
  "key25": "5EJSWF1ScpKHwrV4MvJ5bTSZQ7NdKnMWC7sfTsrcd578WQv2uuWX5PnfYCPmkVcQbL7oiYntnJUzwu2zpMTvkWee"
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
