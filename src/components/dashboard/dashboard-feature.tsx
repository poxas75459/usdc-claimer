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
    "2GbSWXBmpCZwa4QbHKYrRGJS4E5ugk7ZQxYDSBQGK5inqj63Hy5SS6cCDLZCyYaCX49kWk3QjmSibrL6YLkTdp34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cufp32JKyFWVToUPpDP7wrETWZj9bhnPoCrMPDT6xtHCvvACPpwD4o88cCcdzeXn2Naeeee28ZWQLPx9stGZCKc",
  "key1": "4qT8a9pd92bBTnJ25c8eUvLrmbYmf7MubzWQJmRx91fWfXhnUna7TUv6ueR5Cs4zkRAkQs5qNsBSH82c1N1c3E1E",
  "key2": "5VF12seSigLh1Cwu744xZdkMoH3rfbZqHYn3s9u7JC2KcZhgY1esMQRkwuFmwxMrjPzwZbkvaNRsy3EetfGCpxMv",
  "key3": "4dTZrtnzJow2F16hhQNXyt7n4nEDDtHDvt26SNDFX8dAmJNtAEHtrxEyiN5yiPeZn6o64Ee6SLrjW4zny6GZ8t97",
  "key4": "QS3rhFek7pYakbrkJcDL3eLM11sMCKXgDBVKws8SLD28qEb3nrjHX9ZugJ5mvgytpHKUZTuABsWRrTY2k62bLMk",
  "key5": "nM2BVngpwj5ZsvXQE3hfqbs3dCxR5H7t65dRUWewGjy5cB844EnFZwSDtF5W2GqtCTwzZaTbxZSBC9cTboHgEJZ",
  "key6": "LTM5TwyY7ym8HbMgsJhXgjXCSRkjSMFnuU7nJLfKjChq8AYjAb5vvULNnMBfTLT22S921J5UVdQWCP7N3D2dEWr",
  "key7": "56G3UqNiU9QdJYhfmL9eNzZc4Hyn6BUYVRFABF6NaGFMpPsqei9XBujVsMYoN6KSQiw1ectu3qLKsd2gX3dK7i65",
  "key8": "3MNcwiPafX59DY3HcUDntoxLEiHb7Yf77VTRggqfd3k6jAsHR3WJtoZPjB7ftgVpx55tQGGB398pDMFqvTYs1Koi",
  "key9": "3b8oX8rFbmz1wAqNS8g7p2WgSSkvtKhBD6jHbsUCEA2nJEsf5Q1a9udSKmHaK7SGKn83iJp6TbWFMFJvu4jXBhoq",
  "key10": "5uXkRLHA31G6ZiNhEVLpMKSzvbYi6qLqJTqe5vLpJURHmPRmRCn34cyc9HPm8hck7yGRoF2BYpxsPbCfAfSBFNfq",
  "key11": "589kQATSzyCwKSfiiGu4jdJ9eRYrN5s197tdoL8soPDKNQv8fy3HsPLqPCVHEStKr2iFXEpihTAX8yxGtPoX5h9x",
  "key12": "45DcA8Epaqk5CEyvcqPfjisv1CcuKgbrA77ZBBmVcqDK1mK3c3bGnyWCZ51Mu4yvZbX2qCzgtySRbrDKafoQa6U3",
  "key13": "2P4GxrAbhpHSR1Uwqae31Ss5kb5ncvVcJ1Aghf34Fa2xLWPgN7ZHTrkVZjSJcNU447UWbAQ2hdSNyuAJfzZW92ZJ",
  "key14": "2QWoZzEGyHHtyaEEj32SjDCSLyFLDwwrFk1QdYVHRja8Mpeg7VDsUJsf7wHrVYa8AyCsSWq7RoZcpLaGchVbGtYy",
  "key15": "4oCsUXFgm5a4se6AmppFELSF6KQGB1khT1tnuaPALfSmqqhgZCeZgSauhP9mu5B1FMnatAMMdMRrkAp3CCvHHoqV",
  "key16": "3cmrGXFzVCk9d9LJjrcxG9WbFHej1QaHZFSeiZ6b3Vt8ZvnJMqTNkuB1xwphn7ZPivWMRJmoRfhEknwah9JbfbVS",
  "key17": "494LAEycqtGV233uLSQZDBNQsXDm7C4QLhgAGSX1UcgvDZ6bumGw4ZNEgiuSQ4d4iHT8zk3SqPHExkDqbbEkm1Ly",
  "key18": "4HtubKBkLPh1wUw8RbC96TBbgn257wWsh9AFk2nm35zFZugPCnU1tcaL4YCBDXFdr465iZVoPPZzZXiSXkzcaW4M",
  "key19": "2dXu1CNrsDjKPiyt3XRpvSeaBNzS2ocixFZMsStrWCvafeY5bpMkBX5VYYHPz7m1AmYWMPNfhmkXa75VWczKAHNB",
  "key20": "2v3LYMadAjKWQfdwiF3vazg1Um9CE6PeERtHwTL2jXpUKuhywkTCTQnZurSM6gRw19mSkn2MGCzuYtBZKquF4Vso",
  "key21": "PfrA1y2LrdnyK4xwht2oAgHQNZCMaAckTPRTKeGFJPXG1d6Cn7c8ybzNteTFFF5ytggVZHQbSi7Byqb7GNsv5zA",
  "key22": "2ATriGHLBD3RKa9gwxYniVY4KJ1zhYW8B3UdQnU6yoRNA7S83bX51DjD46abbHRW96YFu7EAGgRtKNxPGDRjQ1cw",
  "key23": "3NLXfuNdD2hRExUGTDzuCej3d7EP2eC2cC6PDnBJxXdk1sEYCtjBpEjzhrCyF4N6Ukk7To35TS3xu7XEuPVYmnXQ",
  "key24": "65PHo1wpDUwDdfpauHQjjUwmLoU4PY5vqde7WBuJLsqna8oGqqMdz9AVhehee1aJZNgJLoQtxdchCRR3h4dvCMXt",
  "key25": "3JgdM1WwoKGopBBrDsrJErYArSo3aLA7N5icyy7mYkCDgEBNhd2ZocT1zQRXBeQL3ti7TQYEpxBq6dofxUqmAidk",
  "key26": "ycU3kapeLRtnRgpW9p6JpEKpBxijPNqggJ66dxgQgriUuUkySE2TwYkBqfZTZey6Gfe6f3eau1e7oupgUyy8ixQ",
  "key27": "2FSdgRVn4Ebrac4dALBWKrCnYfxwyHYuW8iBNGodKor1vWeEEgRU78Bs18BuGfqP4qZRRruAFymCc1mSkLMqZoDW",
  "key28": "2sCwTpUjh2CENemiv2y3seYxjMUhqhCWUi5xeo9PsnfLujg7ZB8f7EQvcP2RthisjnR3EPKPgi7UcMkMRxcbA9T1"
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
