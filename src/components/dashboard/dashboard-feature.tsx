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
    "2LLvzE3VeP3WW59m3STpgx5xQLwMuXB4MhbyGf5EziJhhN9TBqZpMPoZzEvknYpkJW2UMboCSUbm4gSeo6akirpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V3APLFBdjB5ahJCpuFm5FU77HXyNYADU55D2PvqNLEKaDd6iEiDdzo6Etx3c11ENV945gtiovbdr8FJzqEwe44b",
  "key1": "37paJZWb9BdBLWcr51gA2qexo9FUqq5VBKXvRzPq9iiVTT62v6cB74F9zMk4zb9hticjtfy1Up9oAXh5sW3CibCX",
  "key2": "3E8f9SJDuGc6jt4ht72FC5GUuLoFN6M82AoUwb9ZzcDy6CwoTGzGB2GGChCRcDMxGrg4Xs5JGiYqs7NuA6c2hHVu",
  "key3": "5XM3QtUoPzRpST3xpKeSjUQWdTLjegbq95gpA2eMm32fVu7U64qn9vCkotZSFPNiV5Zn8ZU1q6vyzThq5PZH78HF",
  "key4": "53MeAWieGexdWVRhApK4D5456PrR4BK8crm1WEDtz3Fvu97snrCDs1jceoPuTkuhh6L4sLBhPSFQNF2fViRrFkro",
  "key5": "QR3V27o8fYzX5KWcYYmMpdMH7SEgxxWPHUwgE7uYp6C9VKHLQvoUYDhupxHpmfvhNSSnhP3sbJxHGqV1Pko9hYe",
  "key6": "4SuSV2wg9MGc7PZtXDyyihefP6DNCaFGjxMDiPqsBQXLwUYuNNBHuk5XJSNGfg3ywofhS8qLcjVTDajindCd5CbC",
  "key7": "2Jjkpi9QkMpL8j7fsVQHwzT9G1FjFSnSudidzTkENe9YTCnKxNKxSGmYt2FiNM2zx9JJ9WWsZXrFgpEpA9w7PZPh",
  "key8": "64G42BPUSGtJmgdru39edmxf3wUcgVXi1fgdP7kTwN7v7P5167vdgJXFPAPtTL97WN12sq5rMV4ha7tX7yrnnTrG",
  "key9": "odcZaLBWzVe8mJJHXmJRUKgmCnyu7ibRPUrKvNCgnop6HU5UMfqfbiwR429UXoPQswbt3Vp66WMY69PGKVtUfSc",
  "key10": "3oxKR35kws2pJhRTbAoqvG2gJCi11pCpaU666tAWLB4rZa4Pn1EDSDsEjVS44UwpmuVB87mNSni2dQWcUb8r89sD",
  "key11": "2f83wEqDfQviAXBRtBJK34mmJCy5upvKbiGcsMRM5aqZSd2TAh3EB6nRJo86Tzoj7kqvUEK7PnduZQkA5Pbt7vz2",
  "key12": "2kNHKteBJ51EKBUuTWUqdmqXENTecUhSHXoYGZYKJkhQcAB8gi3rV2VfWCzH3Xync7gHYiTsEt9M9HXhEvY5a1Qx",
  "key13": "3puSQzccThy47NmFwJnsT8AWK8jG9xpJQHLaP2q1Z5Q8HHF3kf8MHhhHNRvD9LmtJ2kEQZWa93fACNDsVPGcVX2V",
  "key14": "2ZsSNnbsyqFrAiQ97M6oeJxWu1qjd4y5XaMVLBatvkQwdNWzPDX4EFiNgJ1FrV3tm8M5E7QjYvvtBdCEXN29gwz8",
  "key15": "5oYbRj1QF2ofwSycp77isa6D99FiDJjw4292ULHWKWdtvouCMcr8rcZJJDNKgFz26gGcRY11Jzf2DAfAPNzZknua",
  "key16": "5msnjsVeFi7RdyxA3dBMC34oZYpNkvqXzfEF1avZw2QYqyoDFqiC6uDfnL575RjRSmQwxmGV37yWawLXG7kfiKFG",
  "key17": "PMTxvjFYPtqafjkGuMtH4EXWUGSsotbHbYZjDT4FNZabqCcbbUZsmXgGStYZfMdiQbd2DYkHpikkAHjdusdQjAz",
  "key18": "5opujtBy56cYxtY4QB6fgn6tXgxsPeCPcLY9DEvsRP6Y4J5YyLpepwgMu36dSQPuopwTqF6X22b1GEzt5fsi9h6c",
  "key19": "ET7XSf3gvfLbQ2EU5eyph6JTXW26uXPKdNTEFBGKpypC6oiC4vDNBcotnPUVcGQ8ExyrXSuzJy7URqFAtijahQc",
  "key20": "4B4BAzwhHMm2HjidRtF9cgDfWtJmwuGau8ekd2qeiWpixNzpqL1CLXsmMer67Bn7i2KYYjvw86rjMRPUfrY4VSfi",
  "key21": "5mYMs7SmDf97fLWemFbYHhPD3dR8yYTF8EnJemBxoU4tKBqy3RYaLEkvAZtDQ75kMAZ84b8x3qkNYfDVTvuoKRKc",
  "key22": "2cBo7sS9NaaXSLNy2iptPEnxFocspdZoDLT5F2SYB7odmoAKeAhpgj8XGS3D65i8SFj2pcjzpXPqr7MnUQzAAfDu",
  "key23": "4EhC2PcBArh7Tk7RkG7kLV4U73FzaNynTJES9HyScCr9LLnCHMkxo48RFLancjTkp2m5Bo6wtRiUYCnNsvB9o1Yk",
  "key24": "gXgN4WGSkrBpWaoQKFa66NF4fzCxUr13xmAGMgQhzLShbdpJhFzLf9bqTPHXipugNscmUhn2Az6erW2RT296ewK",
  "key25": "4qro6bRzY9PDUvH3ipaTvt3VuTifUW6So65BiXnM5QN1GzhErBsi9FjCeirLM4nXtY6Pdh5SLvfDtx2WFXKQXmLJ"
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
