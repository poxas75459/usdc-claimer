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
    "YTbCKZFskJpRX3mnRvbq48iy72yiDWr7ErUE9Dzf4oD2czkvjwWTw7va6dv7yj7v1Kf5DuEfwKwJcNef3CDKM9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24oG1aqC9RjUz1TD57pjLo3KFTc7QVBzUfrTCgzz7zwGWbE4TH2ALRi63JWVNKcNm42ERHT6SkdooaRpGjmctBQX",
  "key1": "5HMEJcrsPHqAy5Zk1jnw1MSjtfzmrmpck43Qffp9yAGHaqQa6qquK8fGQ16Cd9aKUWJ92fXxU9U5cGU29JKVM2ET",
  "key2": "5Xnie7HFJ2evrRrr2EDUT2avHvagzLBcQgTtGRdCg4Sw5Qx48ngqJ7gNxFMTcV3YcP1XWdYA6WNDEuHDsLPABxjZ",
  "key3": "5phwb6vSKj9L2gg2QXUtV2677nQWQuadN5iVBzQdy7s1zQMKmU8Zock6iz8pcb1deyxBbp9m1TjzsNDzKerHY2vk",
  "key4": "MqCUqVUJeF6uXgzFfXxfrZqzpWJE4d86pB5DHpsx3Ku4uX7WrmGHtkSEQTjSL3G5Mbhd9ZPJpdeYQ6BQL313qeT",
  "key5": "wny2x2rFkgRb9ZrCN6ywavHbzxqSJBvyudpjWGgsSrgUDamqeCxxL9XVihn4p11vfn8PDTrv14trWPHV9nS9dqf",
  "key6": "3nPxRosFpbG6Ng27DJAF5tHbgP2oVSbdPcnDPwSXDtnedkzwquDNoS9UmombAKT69Rgvav5w8svHXLhokE8Wy15",
  "key7": "kDLcCves61jWL7qtucSGohYK9VnMDkRW9ULEMCWonJQmmDSid4xyPkhptZqSCmfzA3kzym9bC1kHgqeXE6jBTDi",
  "key8": "JJT4ASVKoVW12nrG8UdRx9Cu4EsZP16B3RLv1s76SkjNDNUT8tqsaWsYWjQFvH3RV9SHS68doKPCDga42Z6TnCi",
  "key9": "2ojQyWTbXkm41odiKzF3NBH1wLb679wkc943zfRtguwAVVo5CdCZx9BmWs7e2TaLXMjebfrQtMtNgbC8DfgHesJN",
  "key10": "3UjpgubUv3ifCPfUrU1jbA9tExVco8LAaKBcX8w8MjCdG6tutXmpbEPMauJ7HaGkeTR7cJwTWNR5wUPE864FY17D",
  "key11": "2csZbJEMnTr3YknK3GvBd35DG5m6sdwPUbtSCSzPPXKoNyP9XTHukpoKPjGXJrvK1E7oE6eEyHoKZmA26KVUjfXh",
  "key12": "28sRcN3o4VFuMtihqaxo9ayrzqceEcK8i6GrWonBqyvRyeoE2YFcnQvBCb1hbFpb8miqCLMuj3L29NYDvtpasJUC",
  "key13": "4GfVuCmszVTUDePNzKHdXgqiEovBoXbKTSkSXnTdTWi1XYSXhaAbbpLjvjJ5wHmUMfznypezRiZkCxD4T7EWu4hX",
  "key14": "5g5faBHXUUa4FQb8cyWcPoFur9QbTzuNBE44CP8Arn2FpYnzSj51wqE2szpp9X3mM2bXAAX7ZZveJxrtmRb67rFV",
  "key15": "3vGHXx8XikHs13g8XDUFNFNPq6xSSBL2LixqMMtALMxHkdXtHiVoBu2vZMX4xWsKTKjQgS3YXfy7Gk44TUyT7f3k",
  "key16": "27LDevWJCT3MdMJuCLeR1p6xoqvWUVNXTcpAF3QnD4PeC77VjNGPhDeTUJ4gpV1d5KmEWY4Kzten8sVFJLV193DK",
  "key17": "3f4LhPPE6YRTecgXLHy8vy3zz9jpHVFPNgouA6EW9LamvENvRJyW5nkRDbwS6ePzgvLk8ZrS9djRyeuxiJhFLSod",
  "key18": "2ugfSmywCJgUyEbp7z5mbcsj8SboGhy5tpYC1vJZePwhrWM5qaTSDzGxitwSi2B6b1dNhGqCqRF3pay7LfMLsoQ8",
  "key19": "2jF6J8FCeuG4t4tu8cRs8ku9rVTaAG5nMQumgeGf82eWiw6KYLmeFpcRQ4erPqwbV6df9G3UyHiBXWCaDYJMhWbv",
  "key20": "3Zwo83cu2uaGf3g7TMQKq8RbzLY59wXKZVmhuURwdQ5pyH4dJxNnBBHU5XZKW1tnM9Rgy7JDCkp7QLcG8uwpYBv2",
  "key21": "BbRsdNnnJXiJ44gLr8W3m7QcRmCSy5uwsuuy56CqaANNHvTpzhsrwp7yEqaE4bPhscAXYZxLkYqWdZZRdvF8fG5",
  "key22": "NBog3WAQuTTDQDmQKHvxdVMYqdsynGjramTvPExqEmAqDKPd6cfbDD5oyEyGcK8tsodkSYTiSztenUhLJNvBLdz",
  "key23": "4FKnbyNLHjh9B5vKAjVQj2WcBwVqazzr49zpk4zMemK3hd7MnYewrWZFA6YNvqiWQ5FPcW7zhh47ZVunuP5Yp89d",
  "key24": "25wiiGXdNTN7LVFDCHQCawFPhL2nGJtwL4ZpYTMkchCJoQJ5GE7rzA6j4MfSwsS6j8iCQmwCAt9MNzM6UrH8utHD"
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
