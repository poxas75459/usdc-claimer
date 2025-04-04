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
    "3HykVnX9UHZkoyb1Ae6cVc6eyf9woRuuD66iVNz7Y9kR2ouRhw3a4KdhZBpu7m9vWxHhLdhMed2sq235LxbsRTZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TQnYuUHKCowETy1ewGFeJUSHGS5qpdaJ1U3sgZtMP9JH6QSvsjMphwEt8FLbwAGG88BjUMJSrP8k9qZfeevV5MK",
  "key1": "3JKjBvtWXzbCJyvVdFUKCJHzCdTb2GsX9QBsSw3g18h7MZwq3GzF2KSechFVruk1t69BHuQ39xezB1evyBCRyPD7",
  "key2": "29sNrGXM7S5Y9pGNd81aMUevvqpQWUv6Pv8UkzwjmjFGGK8VCbU8GKbZZTGbHkjHjFi3c9fq6iTKs9XUtCrfuCfS",
  "key3": "2U3TizgKKnqz28FVXAzPHq8rks7oVXKQ5XxEK7L4ureh1iJAG5n7in2M6AaeCU9sdLSaPWdTutn4g4rkYNKMWYiX",
  "key4": "4BupvGy5Zh3eJ9WAQiPRKJf13r9te3YiWj81shgBPnUeqjMmM8Mn1kDAjmnowFMAmsJy8i3Q3QkwYAj1iMUZ34N6",
  "key5": "2iikwTNk9q4bqvWxHNsr5knMRhDcTqjJy75ujvofBGeSW1FnPwhKADvnjFUGP4adodiRuP99ikSJehZ2Sk5HW5aA",
  "key6": "fDLX5npKzrFWmPSqjpibidsLnPrBL5Zv97RFNm5mBT6n8KFecwSeUuRxc8xnTutxgYCVY5dkvQjpgRvwgZjsLpu",
  "key7": "21boXg9R9zfKX2gwQNZH6361mBSr4CffMmMp8StQkEajyBCNyc3TYs8iXx5uNqiWUrZYxhqTWeYswRuBsY5BFoSa",
  "key8": "5XQyGYiV9x3oH9HeZtHZsCuqiDEwGEqbUc2L2Nyaqejf7CaegReinj5bsYpzhqyao62nPJvmA1sTMTp67Yb9Aedq",
  "key9": "3A96QpjbRcXmeQuRdKfxxGa5myiWqgtFmYsxcWyWg7usZBgxuFMSbZLwMYBNHXEEQPzfPfZyEv2r96JHgLr8tJLm",
  "key10": "5Mbv5DD6X6S9QEdhetyWKynHQWBV1HMqtg1AoQSYrmGTc4WTBVn19wRWyvZiHrk48ARBTZF7ae2gVAaMmZc5kHrm",
  "key11": "3DTmMe1a3sqva6AKoXXGC9GWGKca5Y4VqcyVbVd2ba8aR4zsuDFbZzu5oPYo7rCi9MQDSq4i6fQao8TpuqhpX5ce",
  "key12": "2MmWX2kWccK6Ptnfb9AcKMigw79n9Lk1vCbSTpBbduxUwjzjb2zkKnzxVTw66UVN8YzWXbN117WysNqTPhjWSTtD",
  "key13": "4BJt2YRtFLLCtUeonx986MBYzJ3JYgyGnUPM9xxWVKdWMGfFSe3HFFFFGpXtaHzenJMM8GytxKKSuL9pU1HkCSzm",
  "key14": "21TUfcaS2SKwJtvnhtcTkLwpFHUdSSiDLo2U8Cg7XcG9RFQu1Tekvh3hAqdx1unZPrhrKfrGoLMuFi2sSXRHWKrv",
  "key15": "1Ji94xDvtvxBvEV99U9X4RXfnGjJJEYvsCubKqfisdzQQQyKz5BhiRCbqunK75RfYm7o5hBRwDxS6hQTHnUw1Fu",
  "key16": "SqRLds152kCqYzE3cxMXxAQ2JMmutu52UbSPoTQNXon9zeQpWDkYeiFTm3URcHwap74rANW5tQm7uzLWxUWU1sF",
  "key17": "wt4pgrZmaTAS6QKbnewmVZvBTEcGUXi2h77juE27hoszbmX2AAaup86azHWJx8Cz7GQkVNwabTP6QqEUjenxToY",
  "key18": "4hvkg6QembYWhdqjarZCNwU1VqFaYbgEXppazb56DMjLJ2L1nohtgAmC8LhKsu7AtpxUQb77dvxZsxBqSo1LLAit",
  "key19": "5xUn2dureoy2eN8cKEXeVKSWV1Lr5nkixJhmRPyBueCkPUna92Dc37UxeTJtwjSoR3GZGtieHzG1oZ8V7YJP5SFo",
  "key20": "4TGHvXUgji5BDRspXUQ29FswpX51zmBWVuCxiYnX63BE9kpFjrpGHcoEqayhi5x5KNhSQZdq1vCtbqX1CNvHv55V",
  "key21": "3mERC3SCSQEubWbVFr6mozbk3WXvxo2SdDofzKg4fDfgTVK2eoMs6yNxMT7HLL7bniSdaCdMkjZNdyUYbn65rUpn",
  "key22": "2gqxsjSwMh7wNfJrdNi9jxLpNRZTN4FxKyeE4N1kZWnjtRy3ojA4awV9kSMDTN2iVSBzpEZCwsLFFdw3KT28oenJ",
  "key23": "5Ui7SXtc6UzAfN2GkJLVrNgUhoKRg4EyN6dtZzHQwrbpkxNj7XnNxAoA8abLDYzrLHaqGXe5D4XnoKMTYiPdGB1y",
  "key24": "5xmbCauQExWTtkmsLUR5Hz6FtZAL3WMU422pnRBcB16Q4wskUXCfjrbJ7Kansyuuet8Yp7XcPznDtt7kVToYgJmy",
  "key25": "2GuZgz4WrxJZoph28hiwio3vw4tmMsS2v17ADmpvMTRSXUx9CPuCrqKJLRaUKBZhuJqofeBKjkhjd2RUZMjpSCm1",
  "key26": "4iyMhark9rZjzeHtTwhMcsFMKjnZXLi7iDLsY3qVrkkmtkiQqznExcH83hhFWG8NaFiNPF5CbCBV9PqaeHaLjK4U",
  "key27": "MUujUMxMyQikExpCXHZCYjszrofABFLGm3HTXE9tcNQKLii3888dJJukeNW6wFNf1XaEeT3AV8rW9kkKBfMqAbX",
  "key28": "3BfvnDRbwbqgeHG9FsQDQBMAJx2uUJEWRXMErS8YstEHi27RjvUxkwVgWuFMgHc2KWGrQBpkVeU8LTYhr9NZ3mDA",
  "key29": "3nRBSjJyVT6m4t4QcxKvhsyno2BpFR5FpPDZrw6Px5ydUijd2NFR4PFHKEKoNA6HpDhDvuFZ5dutBSznesBopXNt",
  "key30": "4Q5iJY4aDZtqZvCLBHx84AkQeddd7H3Qc1xmLTGrFscoJEjcJAduLsHcEmtThWHsgxc97kJXNYv3WeZnbc1Jfhfh",
  "key31": "SGX7Z4Vz74WAFVVUQ1LnMHpngjWiCL1QWMonBverdKGYq5ZyYtp8MqR2ydzyHYJJcdSyaBNHuCy8SZaMwNUkbYY",
  "key32": "4W2XsXJQbLudgk2TJqcLsK5VjzdiM8Md7ycwir7FdaoRCLYUqdeBnt7qT2ZHdJmfhXkb35Lrw8SAjuSVsyGTkCE2",
  "key33": "wtj3Z3CUV5K7CfuYKhK77HXRctd78mf2hPWPtRr9MEHs8dir8nSrN6JQgjq5tYTVbhkNAZXtsKvfkcTk2LHn5K9",
  "key34": "4wi1JSfbumZ8HVmH9okfPVhPnsHVoxsDHeBf8ouhsDEHd6aZJNtfcMqu5snsEyMTpWTBu7LsJNejeyaa8oxuQPsQ",
  "key35": "4qo5ESprtP8y3emScRzAySeBGoDyXDZWrBqf9eBbMUDT84JJm1KHHH4ZLabFB65e1R1JzBLm3TwLdeLvYgZSfKP3",
  "key36": "4VMBtckLJHSKf4gxTEgLD2ncmDEk2nteNaFULtftofJjbVULDeaFXb8Yw99Yz3DZiUn4ERZ9reZauNo81qzaBK9x"
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
