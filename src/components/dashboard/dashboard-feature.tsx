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
    "5aDRYJGQ58MX29ZSZUco36zbR7GGXKA8gfbtstbbDVnhMFfX74HjkRnCJNpWkEq4ngp62oZnmiBc7rym4s3q3664"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21GevvAmWiE3H1hhePy43f39uVR9auB3fpxR3WuStmaFvwJHXuF1zYxzHRp8JS9w1xCPfgsjAWB6qFV6uj8pmQTG",
  "key1": "mehcd6BEBfjg5mKCAUVoyG8tkt4u7c8zqavumZRCmGtGyayRMQ7p4DRWwHbVTLfeHzCWWGvTb4djQQGF48eLZW2",
  "key2": "52GFvX1PGurHUwiJA6iDDeC5BmJhFTdTtsYMucXxgJfE45n3RbwoDzz6M5JuFiWfqnFaC5bUiEfW9HsDUSiNL9qJ",
  "key3": "3gmErgvaut1ABdkHcADiZS38xJZ1te1hzavA6NbyvqcNqrXJemFaXMa9NhVcsnpbLvRx1Nmgnk6T28gqey2fWCDC",
  "key4": "2RwvzHnhzYdwdRozum5yhb6hdyjXXuP5SPZA2sPSYewLB6GcmSSGzsKdA1faF2SDjBGJ77rExje6yoVVq59JkNQv",
  "key5": "2FBBPcCm5UbL2Q5Q8iP527pt3SEMcsMVySSZubKXQFzzfQM23CqzsBRX2xRL42PeL87ESZu7hCS1wYVx3A1dD7tg",
  "key6": "q8Pr4nR1GbWFEeKscfrvTaXXC26SekatAx4xR64S83K44FAy7EmidHWZ1Z6cMGZSmGRhqSewA4YhZjoDdW4qw4N",
  "key7": "4otoaRFzx7SjRrX8d8j2Htc6w8NQwzKuTwmyqq8tBogYdDcbfYQZ23ABUJuECuwmDLzp2NBNv6DuWiEM8pXVD6EN",
  "key8": "mYSxBwikhVXcYCkGp9qdTd725sYhnuAzvLmN1wTLqvNfQUGnuubQrpAzrtfo1M55LTrC86EkxNVFCFCgr8v8c2U",
  "key9": "2aD96qCeFkLcHWCEpUKRfubXwic3hPxLLjukK9c4vGLSgcDyAj2MCAvvZ1Dx4us1BYB153pE6ntiNTH4Yq14kfGZ",
  "key10": "5SUDNtfUhYdRAHD7t8zkwnDyX2VcHKQUDSjRxnbKpca6ReLMxdPNNfWEtD5uZy49TdhS5L9vwunZJgHi5XYQ3UfW",
  "key11": "5wvsDqkz9Kxt8by4Ny4jXLigTgLfioFzErQVp64JchFLeQtXKtXDg9orS7Ux7kXq32FeyvYiBVgJBuoESVsYAnm5",
  "key12": "2AMDLSedYJwkmfcJiJTxt6jxGCTujWEyUgRJQEzjciKhsJbF6B91Y3H5mVNTCsuKEjbdVzTDCyCEkSGMYdqEMXB8",
  "key13": "63CnHgpx1dLKvvdW6A9zE5fg8m5BKyxJGkecCRPZobzLLjekY3kaFR6yNQSHWdeLLjcK43vCTMaDXC1XAKbUBsu6",
  "key14": "oY3f95qkQw9geM2vzLkVMvmLUpp9avbNTnJqMzAWrmsse5792jANVMEP9kE1iPzLLj2ztUSn3Xy2wK8mWGJ9AMX",
  "key15": "5zPE7Q5LWAofo2p529y9TvFaw7axC9qdghVNd9v6FBumhdW2jjnczKSKF59HTNELrm4S4SyQYrRjySDMhPUk2FfQ",
  "key16": "33yRniT9vbnkSJdNN3Hpa7yhY1gk3f4y8a9e56eJguRxT8m3YQSx8MJAc8T5Y96zzUSr7QjnTAivqCbda49ruwAN",
  "key17": "4hH9bVkq57JRRMn8Qpc8WP35H75UYbctGq96fdJJjUvxzpHsHeEGwJZfQqtY6grKujUdsYW4bGPoszxDPTbDLaPb",
  "key18": "4FhRskkF7yrkKTkVVHniKyH7MFKQ6fHvKmkegwzz7qPFpXRdBzGkSh1rRyChDgTgHwhcgEMvtzXrzjnZyBLPFVsM",
  "key19": "LsLH2QwxA12q9z7AGq736veNLaP1o3YbmLG7vNDRgmVRhkvBK5XtiiW6NKkyYzWvNBHvzL4mX2CuqrU14SGywGz",
  "key20": "2m11AoLRZAsQANAhGSYGUzrLNhnLgT4GdqidUrsa1hcm5UFddMKJ9k86zpvy8NjdWHFYoTisRX8XU2g2VgNALuwi",
  "key21": "2vF6USLqNAh6YqJ6rwWiW51FiJnx5XRRCzrLikTbfwoqEGekvkmfgx6hGv9bUWdFLA9SXVruVEUGkDq9Lf36ipZK",
  "key22": "66to5UmziCXgSwZp3w8HBB9j9dpuK2GJLb5t7qYd9U84s56iMo28ApTMP9CNtZbSswzpGbfEhVSoMjQD4MxDnPDS",
  "key23": "5wgJTPmzrE2afPkHqAyK33vRdDyzgP8YPRxoytcMEygdApcsXyBk5jGwP5qssSs9kJP71vowvPpBgMkJfdzDEvHf",
  "key24": "3DxnNWtVtkaoievywSbdfjAZzaHiYEioBTjFiEjfoHfv6Qe3Wn62unFJJzJZ9qTeFCyphmkpmfToZwF56VXngmyu"
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
