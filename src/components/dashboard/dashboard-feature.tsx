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
    "3UnuknwVHAqqN43YYYDqigPHn7eL4kxX2sbR2m1xyaRMNMzvb3AbRxQfTTUkXmNamExkjyfVsP36XcMB8752uCz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FEc4EbmWjGy943NKi89dudtnDp6J5phKmr1tCMKvmaQC7vaUFNDYuZ8xxaW4bDUiDtrWXpWC5KWrgTwuCtMze67",
  "key1": "JAapHqcf25jW8mdyxaPKZFyAVh4V7hGKHHnWzUbSETJZtCP35wBoPyQnJ3yveTE6kakXX9oTQ2BSRWL7g352z5f",
  "key2": "477aHH4cybPUbJVfceb1rGtANfQa8p9xgeAxPKdr6ACytCiKt23imwL5HxgNH4tvSr455WTUp1LDdHjjbKcU6dCt",
  "key3": "5Ee4N41NzhexLopEPVc6fo22HB2nFCFknzdxX7wEmZdPgTP6ySZd6DSnqP8Bqda56KuaAc8xjQPZhQM46Vb44NBn",
  "key4": "5V8v2GcxuyotaFULZLhKWu1LKLRM8XseFmS1TVGQTvTu5wi9QSJyR8g491NVcc8Wk9R32KR441ouXVonyJC9bDYv",
  "key5": "4h7iDZkQ7xu7Hah1LdKgazWN8QP9KwHiamNtUePqmj5JHxxrB1yDao5ErqDV2XPr15NBDLQKyvyndPaLb4B2p6tW",
  "key6": "5eMPVXxtrmFGrKp9hkLWR5fbbZNrhiFXYKo6U4Fu9zP1WcWg6LZSnUZqFpZUEud4Y1yxstBFhqKQjzUAnWmHu4JS",
  "key7": "HnzwaogC8dE2n9Kd99QuURJc9c1U3zg4sCQ3Kby3rJffpoqni2Q7hC3XtLu9qxqTqpAhKYhnz9fND2b6GEkr2Bt",
  "key8": "5vs5fuYUp4rDiETmZgWjfu2dfCahAA7yL9EffxxfhCnEtU8opVCovrwhauZyeHaEtzczKByDyEnZA4RFuorguy1M",
  "key9": "2Wowqv5t5sXQjXBturqKG7nygGMuTjHvzJmSxgknnMnJCrXywKfK8QJ7BAuZXhuSyUrnk7gVcqsnuSKyxrSPFUXx",
  "key10": "4ADkT5bNZPxkUa3euRxCWDUToXg6YCN8i5Lu9XHaRg61tW1UBqj5gFrb7PQXyAr5zUod86mTSUUd6CQaBRLQ2A9j",
  "key11": "2G1Wh3BaHY2dopgiEhVAMVHgkZ6BrP9zUsEKE1rJK8nnaqQTXn4KWEs3UQfQMkavoczARgRMmKBJNWFYfdi1gMHa",
  "key12": "61rP1W76JzHyQTYH4pTwgruToha7noLLqZt6vT6unVzTurb73dAhM5GEHtqaEbsRLTwBe7H8kAJHVhFEXUV7nVMt",
  "key13": "2BdksGQ7CkG2ND4nj8cYxLMUav5GuMx48K7FEiGCZF8Jg65v3sVofjuYVhZMujtJof56tBhJzF1v9xtZTDv9UacS",
  "key14": "9wZpv6Xh1q4tqxaWWFJGHnmPbAeCwMJ7FrjqQBTtdwZH8Df9ZWT9HrjMtCkgYuo3RkvvDMv3dN2wqNpcSJsCDqj",
  "key15": "5MjzG4oJLitt14nAcHriAiJJBtvWg74yHxbmzHvv1AhM5wJiDzXMpKpjdXrmVoFUD3EfgzKLecv2DoYqEGassKdU",
  "key16": "3MTFd4nLeF75jQKYGupcpu41C4jWTNTMDCXrMAzh952yo9WJn2hUjnXYDdsy6J8edd9gt5Btj8KPVbp8thKM1CW2",
  "key17": "43LPRxDd1Y5s4WMKhock1bn3TdxhoLrk1muqwBb8AacPN8taspeK1Hv8C1scpHtGyFX6DsMXvyPgRb5WZ6ubitCu",
  "key18": "4T1KtpiqFgBmhv3pUAgn88DMrPuVy5wthKmuKo1Hzdniubo8coBU9yP6aYwFwxPMNZNrh3Vj1zzCeiLs1hcCzRkJ",
  "key19": "5Ej31jg32fJtomueJxNktMTVRgCjax3jnrRetrBLqoBnqznm1Me5pXso5WTn1HCPKyQPkJkLhwHp4AGBjFezgrju",
  "key20": "3nV6wyTDDUvTWVZMNGtBTdA9xLQyHnnTuCtWgHoEGi1t5ULPwiDAdGGgS7WL8Sa5xzyksavLZkqEsGSWXR5h233s",
  "key21": "F5bxf1GyJ6VmFhBG1A8MmpfpMbREgunWYpKj5PmDBmDapJHKRCmXWZ9ZJPBmXdrzWS75c5n69hzxdn2qgjcGPb7",
  "key22": "3T6wrXYbyxW3Wn3fjJrmiJQsHBecVggT3gi2yRCjTzqZt6eW1DGUeowVUzuit8kNqTdR2Z8FB4KfiSoUbZ1zi4Ps",
  "key23": "3MPx9yQa22pcRQKTxg3uwF8j48vgr76d46Mda5WrMRS7owcx8QvJD1nJp7WZRXBQ34uyMDRkWtxLLKqA715Zbc8S",
  "key24": "5U5FTMBMqfaDgrG5r8HntDeUMrd1njRN2bRpb8TjgFQUcs76HgQTVsRhr6HLnScSXJHcCve7ciiwaD8D8CrdNgu9",
  "key25": "2jWANmGRXY2Xw7hLvhna3RJxQayWZFkC14ffQtc9oBopNemufzTXoq6N1KJmdSBgTEMRSZQ7KX1gs4j9vkrqjAng",
  "key26": "41FywUvmQM63AHzUM2EafyrFd56nTJDuBymQ75N86FSqJ57NsySKL2qmLRvinRuWpeujjHPpY547PtGbG7NNyc9e",
  "key27": "3yCkF7H1XMnu1iKqZmJQ7Wy8qL2hps3epzVj6jXNPk2uS2YqS5JcsUq2dqm42YTZbPw3RX7eN59cTV2gSraEwakn",
  "key28": "5U7Piykha1aAeh5ebDZ3ice56Lv7QdExdFfC4AicjfERMpVLEzsGfxsEn6mMRK8fPgE97FSsvDZitaDgV99dvPB7",
  "key29": "5AwNsx3zPkkgUQowMJecEFeiotASMK91PGVUqTdHx8TqR9oYUQqf1VN7xB99HrMzjZhoRuvFWhoL146n3sR8PqGn"
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
