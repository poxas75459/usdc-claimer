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
    "3GFQxzwWd9dM9qiEbc83ei7FHRUxTFsCdcJyj8BrVbh6b5fGxuh1qmsxgX5488FVqt7Zr8VG9PyKCECYWAf3hnWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HA5Xj7EfvBjMjnDPBrF6BZWSvDaP2Cp7SFaC4YQ3zrzqPsVo74tQEtBnPLDSN2UxBsXqAYRjzwpp3uyWBvqD87e",
  "key1": "3WX6Eh77EBjzaojTxo3z1CD5w3M5Z4PrDy4a6uskcNWAMj2ex29DUT8QC2hvNjYCmGgcV7sj3xG4Rw5Bt7g2tXoD",
  "key2": "47QMipnmbXhVSUgRUqJM1Aicjzf2poEp4uKjN87akq38T1rbNNAdHu37cHfbG9TFYYwj3JyAxpDvZMMr4kj1fgnk",
  "key3": "2Uz7orJdUGgK9FUF7pwAstyQsCztVpzaznihoeiszoCbiBtxxiiQN9Qx4nNjYLVDh3TUwQo85g1JZExkef63We3A",
  "key4": "zEVsYqWMAWAugdtpZCXg86kTZZDukSaWNWm32GvXgav3tQvp1EMhMGp2DveMB3jQkqxrvirBJLbDyCgsgDWHaJh",
  "key5": "3MbLsKfNMLeZosYiYtyL6Tj5brVhEmjQHdzEWT716FMDzrTozq3mVxeydCnm1DyEGWKcbHz3sTjFNUrNEVVHiTMZ",
  "key6": "5bLDHDJzyyBaXsMc3utMzoankPF9TqD8Jup3YG7UUkcFieopAVUS2VJa4eJ2SyHTZZAxHSNo3RJLE3nq2mVQdoFY",
  "key7": "DXh1XhJ24WQN1oSnmCW7g2SaKTPKzHoWCwVFsJz9Enf3SbgCshG5tDhjcYyMNUFDEdg6nnySdCiAbdSKnUtCyYA",
  "key8": "tTCoQLDtKXejJ4Rms5bEz7G3mPwVuguvQYe4vtvoXwPuLHCpxUiR1zuBGDph83TZbEsZk6BuznBp6SP5vYdA4mZ",
  "key9": "2PP9jxY2ws4pkLyfseShLih272SFzSBFCMBNwZpajtNQv8QUEca6Vg371pa3KPE5BZ89jGhYypaSdybAs5tY47Zh",
  "key10": "38x6mFydgYyF3hNABAkr8iWLDqDsr15dCDX33faqg75ydJkp61dwTyyrExjRsgGxk7qbkNCj9a5bYrPVq9xjWEPt",
  "key11": "2aks3TnuZe3KFy5cRtP3KtqChs2Yw9ynX6KyhyPtHqC7QNyCpbWv1WxwWCYpqg2LzMt5dSNene2Boypqf6Ewpbes",
  "key12": "21WYzgMwQ9VxnCVEYTTqhDzS4wdzfNBAKNyZW6zmbD4iVE4zWyuTiypKwM7EP5Jtj1cyhA4dszLwwSu6yZ9ZEfEE",
  "key13": "18tMRMEG9zsCormCZe7Sw8qs4g5yZS1ykrQFH6jjCjKmRrHxf2HD17zw2dnHmZbjGKKwMSkxQ2Rwntc7KWHfkrX",
  "key14": "FUa3CxyQuw1gW2qfNbbm2WyHN53iM1pjPdpFzv6RfNQ7qEAXbAF8H5FhbbUXqhrZEAJtUJBASvc4aRXKdqNyqu2",
  "key15": "4EPDcJJUNhgP4HDML7CvH36R8AVyeakhEzaPNnwzWeEmFi895VDDtMvf64X2PVZd5xbGYYRLTqk6dZqQ2RtKLRx5",
  "key16": "FczBN5kdRgLkxUMYoNJdjFr6LL6XG58a3pNPpU98HrB84SDXUgHE7MUD7NEn9iLbJpuZbag9CPqxYRVYEBMpSUB",
  "key17": "V2kpYcX5GL8mnSVcWbBUjyanYoZLxBMvDUhreJNSuRG8Pq4jCuyvbCJoYmpQzTpG4R32ZUn7xYUq8UhRnFAGZVQ",
  "key18": "4QgxLsg9NCxKnuAwKuJmBYtqdZVo7G8SJBvoKSeYribUMAb4XKfHiPPgYb5iUBZ2uWZwHfuV36UbsCh8s7ad19gr",
  "key19": "51DatSZxRaqaagyZp2nMrxDyH9vaQHBBk888zAGBH7rsDHGzRZzMFBbmmVbzsbjdaf7ZYrRd3hmJt7Vc2UozCKio",
  "key20": "2vkjnPrV2ZwfyLqcYP4DL4cdeJy6wD3noA9y4sWD8e9eNC7icTheuvVvU29JvijDWDezbpAiugWRBAgpy64QwAnm",
  "key21": "4petEaib6jLjR4mQJnYw1yv9Der3XgkfFVfjwde3fyc3otZ98sTeBSWCy7hmoE19KgKbk1mpYwF1KCiFViVbX9pU",
  "key22": "LEP2KdSYjpnmkuSZFbFBfsF6ddDfDA54nFpMjKF3Cm3KNKEXaa2oHzy4uB8D3qztAxy5uCYb1SrEX3sk3wCg5WK",
  "key23": "3yWCj9hYmH4kJoJ5Mjp3HRQetaF4VcfysQATCschSNaVYC5GTGgRPmQ2BFAXcnFo6rW4SVAF9vbui6jaRF9xhShJ",
  "key24": "4ibNAY8ZVJiDg6sEuuBt6fDvpxbbv7gdftNZ199DeSBXSz38a8GvRQ6SDGne3NRifUvYrTs8sLWTA7Q2ZDymcpKk",
  "key25": "AqTZt2AoTUZUDGMBNHfdspXVhRcgn4mUY1ygrz2tFZy2Qc5Ym1odLtp5cBwQUeGwnak8mMRR2TxaSyVzgSswxTw",
  "key26": "ZybiJkCRkL6uHXSkcqWA3tgxB6sCo4uhChhyfMwdpjL4AyatVx96pHudgBrXvW1rKVQcTiREdQAKfYaQm5VwQq2",
  "key27": "ZosKSuzpHEfmjz6o3DBfbp6pYNSuty63J4suHxXxCkXoVyjw3YL5VAxBLWA9zTi61q1avEXA4sBVLtwYsCxCtR3",
  "key28": "5W7k6kcPfGCdwGnUgA7U48HLHVCpXAGc9GaRQRcWgN7tYwXmVkniP92KekwGYYVySP7NnvmcT2qd1A545v8i6n8Y",
  "key29": "5kCS8b1HWEUSKtMVVMVQxsCD7P9mN7GwtR1V1bUKuXKvBzPrDUoduNuYKU9U4BMYKJRWFsNPUgy9EGdaPGtbi2pw",
  "key30": "4b2n1hkbQduvJxu1ivFwKYGfhSzGUM2gCtUGH2tq9KqKCdeb9CFJSpUARNTktgi4odKJvNwmN9rB4ChYXzfDNiy8",
  "key31": "3uj5ENeC3ySZeZ2aqfPFAKpk5KnohBBN7YHU8FwChRXPkpLC7PGxsi1ZYBWHasKoiKXWvQ4F75tTcuwkyXA5HFR5",
  "key32": "qwW3Q84UCEz9rh8xjeGFW4RHcuug55cV5GqyKvU7EUAJLGmtP3swpVGpQpQAV3dG2MsKZk2d5rCCtk34gVdaZCV"
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
