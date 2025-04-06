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
    "3vcj9xFjKEMGJWnqehM8LbXpDbia21mQaS5F1X5QBMCLYDYQy47B5gqoDNxNowbz7rv513KuE91cGgiYsE4jYDbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VJZxaeWgj7CyajKH3fYUTqaafevFUEUHx3vtL7K8i5r9obbBqQsqjiL2Q2Pzb3SnubAgZunQpgJr5wzACF1gZwZ",
  "key1": "uFbvJKQFypGDFMJxybuTCQ7Cw1GcjFbJzu9G4tCaxbo7am1txPVkG4rPzwK77VNfZyT8FFVwkeVSf7C9RKLRtP4",
  "key2": "35fDRFYhLq68RcDvRHCLVqjto1HM9xwwCva8Mpugnu2o2gosRJKu1t2X15keG5mFHTqV1CSC4Nfu1jCrnReQtCxm",
  "key3": "5Xb44YTY2JnJpcxw58MjCWcdtK7CfMrLNgr3Mwt5TVsYrtEVFF9VRtazscoHpnZZdMtAvx9wMhKrWPP4LHZC9a6X",
  "key4": "gBQJnGeRZ5RvGbT46zpKa54LrE5WEdB6fE4yMZKt1S7fEqcLQU4JAFqmxJydgM2vf29pFZ8SHs2cUKupxwqkkJ1",
  "key5": "ZruzzGrjrnAjDBHksdofSJ9DaWQwc73PrCLQaE25xaeBB9qDf8FfLQzLjfcnVBB9PfogbFBtVTmgwbFUEZLShrY",
  "key6": "nekzysa8KNqxWSNtYrcUYvFGtjTCKzSP4CuAJ25t5Rwt3jDfr1SQFv7hckkuLmVN4Crrb8jgyXQ3RpS3ppEyrH6",
  "key7": "3pCQuRsRBs3kn4iGZNbd1d4HjJR9ExAzkPvcY4FTC1LS5nXZWydiHrHoorxtg6tSUnaCFuKEroNSY97v6mKHa1Pn",
  "key8": "2VouucHnkkV4Ukg5smhSR2Tw9WMCdxypJHP2pj4zpbo7RVMvUZhogSR86HT8DTfzGy3Cu7tETUf43EwTiJNqBF7X",
  "key9": "Ch9XDsufUf8injSyfZddQEfQ9j5k3dHS9TgzjTSKyXGWuJAKi8yGVZhV687hTyqRJbF4YcGgjWCZLpeNaxPpwSF",
  "key10": "3zKQK697C4DBopHGHyCVH5pPrd41cYAr4joKMqxkDaRa3KhXxdWjcSGFtFHL4ikJt4zghZEjThcaipeno3mADNtp",
  "key11": "dcYvDYPSCZswWHCdXQzCwdVywnc8fE98GRuNNdshMQPx3KHaNVq5bWMAFpf1nXFkQUcfhXHU6JhMVPquP2AfR1x",
  "key12": "5jcePAsXiFrjvm4bV2U1h4kbVytSu8v3TSF9f9uV7NYAGjw5dUVuAEwK9DpvVmqerHm6u4hh4MHmbHrCNcgcjyCx",
  "key13": "5CeuLhStFPkHwy2pBL1jazoF2t3xzbEPe2sFnoA4FYpnpSiQJYqUQia3rpWVbj8RYqFfcM8JdvTzCm9JB8WhESDp",
  "key14": "5WZvAmd3QN3tchoJ7nKmEAwh98n7mEkGxGKHhnWGrkfsQfHDztGhiQEyvU4yD4VzRuXdekZHmBBNCBYqV8vXfP2v",
  "key15": "nKp6fbk3KVQQwNumR7S69KfY3ePy8ZghgU1biG9vmBztoWj2D5aQ8zwv9m6sxrUUbDveTWeHtWFNr7sA6koqdhJ",
  "key16": "5wJJVvxskwLgwmyBVRXvx739DfCHE7Y61ynaFPKKSSsygeHsDEcDPAyLx8ukRTGSKzCeGrQuvLE9utttAc1d8TAo",
  "key17": "5Z8r59GNFWFjyVfSjrP3JDqwufzZu1AgZrtXY2geRM5TRbWLaTesK2AfzTpv58AHwF5BpAV5Km8vD7E9hS1twV9j",
  "key18": "rVyjkmDVTxrfHHkNistGFG8w1ms34mAtKoutq7YDCedKB8YqvYeUeQ9hTH8nPtTjenzWwy6DKFGHkBayoBESJyW",
  "key19": "uh9V9oMHrCEVSQYvKzAjksdpcn4rh2VP6AzMLKXZpZw9u3UAfaPFV1LLoF7hTnutFqJxFgPmtrQ97GVdMnAJK6Y",
  "key20": "2hytBqFnNQNQ3eJyhP2greaGaN786W9ZKfNPMc9D8UXXhZrs1SLAyKrTmjpHhiMhWRrtLNXTS7cmfoEw4DaAmnwX",
  "key21": "4kNCHwpCgLgAR1VmRnwt592hRxFLk9M9Y4EKdoNATaFScbutAxGwgBm4X6uMCj1sEPHWnWyc7bFMUJaj5qijSyuS",
  "key22": "67na8GirqwCCTyCwUxJR3savXb5rNwmZemfn4ngDLwCgAFpyNkHakQSDFdAwT4FSQXe5wewAPaphwehZm6TfCaMh",
  "key23": "kw54DytZr5gSE4rMoj7bPieHh8UKrDau2YSY4GP6ExUCiYurdtd7dqxgxeQiSujS5bcQRxaTCEg9CtGtYUwTrCd",
  "key24": "5gUUDX2ctQJokHEaRfpDyT3df8xTnqrvcNinSNZettMr7ZLwNkVBPg7fSXNNuWcMLKX8HHAUmfHErGb1S576fAe8",
  "key25": "2ax6kNWeuSAuN1AKn9nhkzQFSPD99h4FuvL3ajpDUcQM8pfPvU3GU2Lqv5cnkXgqLtkE1sRzAoPVMLqKHU4dHq9k",
  "key26": "3KcxWsH7WuCmWi8tCNQsuKa4fbVAUvUtWRZdFRJcKEFb5tLxrTMkJrBhXXxwiBopkHDpLfteDyBvdiFytvZGrmJQ",
  "key27": "3Zm24Dj7biThZdmcRKgfsT7FnHnKLmBhv5Req82NnHihdxsU43rr857BnejyqRzvmRmG5cDsoAUW7HSHRna76428",
  "key28": "4Ttj5VKPnmAHv4UL71Apq4z1CXLNWtEqmofEkbMPCjndnLWN1gYpXmbsmSi6RjEDtAXH9uaj7ZYSyQj2VN3gR2xs",
  "key29": "2n9J9NJ9xevspsaNXa2fQrvfDbDfvco5M95dq2Hh3bzaaai2V76fB8MVjq13PT7wtnLBmsyCb7cakbUpFQBFZiJx",
  "key30": "2eL9uLGx4EkmYPXmS4E52VGHrgH2VMkLQNYZVBE6y1zaZDRQ5SNnQTa5mz3EdopnR4rJXj3d48PsV8LWJhvgJJcx",
  "key31": "yf5ecrzDJh6EWTT1zKv1WsFG9W8opsALtSHKEKe99anKr43TivjjsxYnHqbjAyC76SudFGRGwYab91DeJdDQ1z3",
  "key32": "DFmm5nuAPv6dMd8BVbyKhqwTGvWWF9NNG4s5hjSsAKMSRJRTNurCDxFRJqsKg3Y3kmWZHFxugMRy3yKK4rNEZXX",
  "key33": "411Fx85VZo2GbqJ7mj49iCAgR7UKZL6afvPXY9DLTzy6N44vTAyzWTPU7DhWKaCLE4FL8vh2rxwWpLJExfeSKBqT",
  "key34": "dZNM3E4VCMSgdkfvTNbMpmKQhgaC5ZXq4R533LTJBmfuG3btmXQWGfXcCEr5rax7EAvY7QaMpg94ogMqMwH2po8",
  "key35": "5KFpWNxeTnGT68vw4tbE4KrHTBRdgsahUbL9EGrmDR1b3b7bCnPuc8uBgi4SmUoBiPQD8ATUHt5EoAEQ5n5LD2uq",
  "key36": "2KVqrpEk8v13SASrayZ6jJUB2KvrEzJbJzjVWgz9N5Kjc2KxxG1FFCGt63zw6V7yoKADpLAek8d6H9nQZRVZ4bb2",
  "key37": "oYhNcMJvgkGi5ozMGPxesmnNgxmJ5itkafiHUHAtBD67rAc7YjXLQxxsih6tZKZXE7w5cvLr7YztbFVoscJGYkF",
  "key38": "4EFDJ7UrUxvytTBKeJuB5pXbwXnEzzH82EJMnsGWFy8ueXq6nQCDBzBfAE3TGieSCsVs5gt3qR2MNJkyLcHRbApR",
  "key39": "4VZfB192jiLHxqQc2PrTrc5UQxn2tTSkPzm1ANiBKJTrJuAkrV8SNA7unVxJ5nJLhkH799gz77io2YPcsphwUTgV",
  "key40": "4yP3DHxgb8zRL4AEkxigGsbovbsh5NRT1iiLagbvK8XcY7tYrddbRWuU5TXt2yovbuZ9ZNbAoRqSLh32qh57z4bZ",
  "key41": "5Cf7asaiNxL8NpgTPTgNqffzgAHoy99Nb8gDJt9LMvZp1eULKzQ1oMShVPGCJFtjoxiCf2MKGMpRpHYTG9PxLdCW",
  "key42": "4T7rx9H5WmDeAJabDnS6Da3YEqoWG6EY98uhq4iuZPUbzW6ZeyFcx5DWVorGRJSVsgSwenUfPhPbLBsZvEKQaT24",
  "key43": "5AJ6c5dw7BG3L2DToaEEqWJfgJX16qkDTwvv3W6Sbkym62yXYVdBBb6yeAf8QTxhuxaAheZRorTVhgVxE5oKe6nH",
  "key44": "3u9Kxhz29T5b93UsKg4pT3VHphF6SXHTos2R5u1XHynSPk4UYsPT29HwzuFXSK322HXYUVTwcWhbDc9kW5WoDfXC",
  "key45": "3nswuKysvjFNmPQ2XC8tohgw8hsfC6UtZhjDWLynnADjikXemfXZf1fK5ApLoN3fD2QHiqC9pxbwfVZLWo5LPV8s"
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
