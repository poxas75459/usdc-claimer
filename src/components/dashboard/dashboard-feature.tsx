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
    "Vjaxy5AKWpm5LLgVgKTACpKpPDqxqdBPPWf7EYi5soZqcStkyJr3CZcxmHdfZgP2roFzZsxeTgBy948marXz8u3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fs8HFdcvBsrb5DYuSfzegf6cuyF1iJAjxCRCpN67aXB6EuDJchNLqeJb4yHBNmrdKS9gMH2DMLWJLwN2dU8XKfG",
  "key1": "eDxwwNVEZV3SVTXhmZGcrwgmddoVWUfXhgPQAAna3EtGTTHz23pL1w5T74PAN2GDF17k9zhuUEXaNvtcg6EsSsB",
  "key2": "4FGxsbvjnSLS2NYnmSTSH8CJWBT5snZDF3i5dtZE5xNqrewwE88DZXHz3FdWo5RHofUM5aENHqAbSy3B3az3ks6b",
  "key3": "3ACd4rjeBVyUJn26gbdL4fAkmK5R8u4UH8HmVDxQoH85xqMQXZZZWeQmtBNLhJTKXa33CcH7BSpy8KGX8qDd4ico",
  "key4": "ZzfRY5XczL5iqasMv3NfK1EMhPpryU2E1VxU3WW24atPAAAF8HhySQt3M6i4Y3FGTpaoqWyLGvHkTwWqd4DaxUy",
  "key5": "5zwueDvNDKKfUGEXiuMZaDtoAmGus1GDWuq5Lm4Qzp9DXQ7gMgmHZYGNmyukdpEqgcYVhPuukJaqP11kmgQcrdee",
  "key6": "2LyQEtN5sLntdRG4K1mJ34ogs9Pqif4cZ1t5hADiWoahgxJeuAN8XegFC7wkLKd3PnwtngnkQGqLyC1GFADNVnBp",
  "key7": "2QNDqoBfWZid6ZmH1AuLvvmvQG7wwkc6Ro4hK3TPmdU9eQXac4d2QWTDqZNGtBkkeXNB7DvdHkTtgeSxZFrsb23T",
  "key8": "SYcrStMwKnPmb8neTRcaxjC6PZdpBFvtU4XQZYHNweqhLt7HGq1Yxx1WzowqbLCSsj7dv9YfVoCAkjhpSajuYkf",
  "key9": "ah2bMq2b127KFmMfAkfZBn8t9qKkqLe3j5HARqLqcdDqDt5XnhkDSuDfZraZAZFszHWMcEJHegSmmRVbmAjgGUk",
  "key10": "34HGicU1RRkPVfeJ9BJviiMUamzeN2aYdWxnSnjwprzzGhE6LjttSRwTCxTW6Z2qLN2CCyhoCERWSv77Y3234SA4",
  "key11": "4Wq3gzuVWj95nZknsnLv4jp62Ycf43bLhyYaTqqJ77znRmcRVgSacXPQW6b4eswjQsouoC6SJ5ysKwJif3p7HzT9",
  "key12": "2DtZyyn87kbSTCVCRfWgyaCQgUcEMAGYuwqMDJGnJ43xJCvD6u8MW7TjWcvuJ4r2Cc9Gy4CAisyeodFz9KVXNavp",
  "key13": "2BmkWsgkC9FuqVFxiYedn6EU6shGoA3BXwKkPAtARcy9UCDWnfe9pS5mT5mvUuh8XCqsriXKF5dSDVPHhRMzk9P6",
  "key14": "2FTusGwRZtaTZCbPMq2JSdxytx3isj78Ar2Dyn7zdKrX9c6e1HGyWU67Rd4deKYD3oa1LdCNr7sRgCup9nu18ak",
  "key15": "5KdXRvnEjJFzetfjTcQX5xP1EwgxSqZguu1KtZs3Ev8CaAGQBgkCabDgd2kT4h32KrQ3M4FZLudMAiaT7tLLKKhp",
  "key16": "5M7SFeMQAuyeREw7yNkC8pfotHPh2Zb7tPgDtpqJE1HERE4taMMdoNccNzEP4FUtURDzCyr5CNodtuCDg8rECj2i",
  "key17": "3hark8LWr5y3MnBAj326rYhF4fjDFtTXtzufwxZLSkvFSvda6QJySgj54NqAPZCBx314UMfJmdQ2QPo9VzfrcANa",
  "key18": "4dedHrNpsYCGaXYfD7riRwfAn7mkx8EKziz5dGaVQSgtEXU7j4j4NducS3WnoQSKzLsD9P2zYooYAABwtJemgmaM",
  "key19": "4u8iVK6UgtccyujQxHeZV5KWZEg3F9TFiuiKXWGZYDCDgXfxVkLVrMPfa9owCTW3YiGcCZewKWs4nicy2mcuycUS",
  "key20": "fYtfWszLV2qRJhKNzX51CGZPNSr5zYm1M7DiwSQiERoEHenMYHAWHL4aBh58eHGzLwHsPupqZmqyZKg93T5aP1u",
  "key21": "27vybMCZKrLeSSb2DQo6ijXiH6WCwepxVE8ida1uuGi3C56GDB2YdhW6foPT9Aei3gMYWi4sAqGWSo5Vemr9P7s5",
  "key22": "43YFtNS5Yzk1nKYw5JQRHKxY1RFxjkSahAft2edHPHSa4nTyYv6cs7AJdvp92RVwuezbX8TiUNHQSN1oQQnjXqdb",
  "key23": "3JBoCnRTgBvQAUyWYf22PfFVHLgsPjkm6EtjW3AhmvuCBu7XuzEM49n5GFD1NHYYgycMjLznXMQcSXnYnTtfzyAw",
  "key24": "5QEhCDpcCRfeoowV5aNW4Y6opoL4U45THqhrmBnxmWpmoKhYEAfZfSUecYwEoRHG98zyCc3JAtAfxfXuCe3G52ST",
  "key25": "D3dHCT2VYbBPhx2NvvRiKb2nhtXgnX5d4YzQGwbSM2WtvVfHob4vBLiSJXdCNrdqW3YHcnzZEoxnx271ATv3Tu2",
  "key26": "5y69bbi9gDdJQj45ovALssC45ptykqVAkpwyRkSYG8XfXXNcdhLDApkT9W1kFg1CX3twwyVL81fFVmEfnfuNy2pz",
  "key27": "5tNJNys9nzY7JwtnzTKev4Dn1T16zddXJidRbE9YWVh5T3MYPyGiqgQe9nLe8A9Wu1V5QYWN9bMnqLNLeamqXuMS",
  "key28": "3Lokzm68mQZBkYwaT71QHEHWoqEjexH1gbYMQHsh2vMcs9pPPA5aWrdJjUWwbcm1vAhBLGqXiEobAMiiY4vgqefs",
  "key29": "3Z9FwNbUYBGEe8sRLwJ1bMw7JfUTprph88VW1aojiUVWejxfFDssbiPEeUHE19SNDXgQpYDX2Y4HnCMWe619PGei",
  "key30": "646ufu2pFHggdtVQZ7VgWebBLkSSNn8XKsKHg1h5kPdzwARTEUjk2uFZBvHAfwxsdmHMJJ52JroEk546BLF9o9kS",
  "key31": "3YBXze5gSdwrQdevkGT4SzG8ggMmmQ9VB4Kb6kyS1LhLAYFoYDtZAheTS4c13ByfqddEeCtVkr9ZKXatEWMb4QQV",
  "key32": "ZitBEnDvpsBF8mkXgJstzY9AoT8cEsnRi335U1GF7pRu9LRP5ei84zyXS2nUjPk5kP17pdZGVwB3M72xDxtkYa3",
  "key33": "3JPEccxRjd87K4Qxunt8jMZun6DP23cUjpaP1xR89SCdNzC1LjGZaMZwtAZZCPRJLMSsQUrV8974pwwXxQkTwMeS",
  "key34": "rjeeFGp1PH3AxQ4QFXhNtSWcUYmvocym8kKiCM5iDFA9KWxajfF4eH9jhHyobrawrtYwhc9EcHmpwe364TgrSgw",
  "key35": "3hAoMk7e6qg5p37NGeyc5tYKNy1hricqL7QisYyvhcTDZxKPJYq1pN1D3NJacjsMf7CTvcFhMMgymUUC8VJzo96P",
  "key36": "v11rQJqRiTV42eJHskU3pfEUqVK4CaeTfDWjw53cZ3r2F8DWncM6LDpX19MY6KmgiN7WkxA7BRt7TT6eUcD6oRU",
  "key37": "37CExp58AxEBkXVVvhx4rVqdqnq7Rt7ShQwXBWhEprjNMy6WEJ6DFJWqZfa2Q89XnJWRF4LDkxK9beCFVQitLFqc",
  "key38": "3PwhithdLTxP8Z58wB2etAiLiLwFJKfQSmtDFfzpStfjY3weHZzFA2CKmACbs164vGSwayJo8YSmMJWqsvQH5RV"
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
