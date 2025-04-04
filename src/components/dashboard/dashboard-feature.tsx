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
    "5xTLhDWkexnBTV6zusBDSaiixd37gkgVMzHVE5cRo7ms3rT9jVYjzqQuA66DAKMXx2upqDrrV6FZgjvYnqDseX7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42cKiUvATqjeSUSfRaGxUrtbTfGgUqFErSQuE7rS5xfCATJhSCqLY6jiafkduhQehsTCFCLZhVtoPyycC317nxWE",
  "key1": "5sm42doX5Hsuuw2d45k3M7QrTS9emYs7FZ18eSCMSGjB2ssPq5XK7ojUdtDgnQdbpwMUjSVtVAEdRJTnYYaPTYb",
  "key2": "41vkmQDaq84bnFYeG2tWeog3C49m9dyJ1WtLPUhCVEVPbLWAHGhCsrv1NuDiQMnn7wQcziTRyzASempwcHRv9cCz",
  "key3": "4dhS9fYsAmYgVc4Q5wUPNbenwG31NbJBpGQBAYUgDZudftDVd3yVUWrVFWBJwvE2LpaAqtdxKjj8pXDACaW5tSu4",
  "key4": "5traDsKLJ6fKbPcCGVWLeMKdZUstTq9VH7Wg8kc7jzKrSoAZGioHMqFRgxz9somEfBK3QK7X9DTwmz3kQjduVnkp",
  "key5": "4aM7L2nXr6PBNVTWfRPD9TYqoMUhrMuEaiiDCcDegLzBcRhi9nYc5MojHh783zCvXB6xn5WVS83w7QwEhBKnVeZs",
  "key6": "STr349cvZnHGj1kcnqAUUpDLeS5eAFrYZs6BQuf4zQ7LpruKAzSDcTHJRJ9rUv1XobqghJdFyiZ8rixPYwBVBr5",
  "key7": "5sT3NjebFhM1Nvb7PJyYsYuuR7HDL7HC4isZTk4W5s311XRmM94BL3KvwmYQrd4q7SRkYutqeDFcp2RdZssEhQF",
  "key8": "2V36LNbw7SkaeGPVx3PoNxYjemYJ8HsZbYKMtGZybNFoY4B8bMQt4YbGQmhh6JPtiX5soyZrUkaUFZk7c6vuVAnj",
  "key9": "3cykFXzQat3TBeveELMZdHAzvRrWDyDJhe1vHUJHWNZE9Xz7YhfBS7pt5gbKQSd4iws7AcnKoSJsU7dMuPpgKK77",
  "key10": "zfQE3i2DWViJkLKvhARXS9jSemkRGvF5uLbKMjLcqzpuUFC1HaMcT4JbUhLLC6qcmJLgg6x655eqewqY7T7TMuh",
  "key11": "5Ux7PzqAYP7BbWct8U6HyjCSDrfpyWQuzNbZsUWiDxQRG89tndhUxajeL9hpLBR1j96anmP25pxdoW4YVaoQQFio",
  "key12": "54qrpxqUKfFhuHm4KzroKk4Bg5gickY9ya5aPKacj7z5NgQEBECorbgdyRbWaGSzBSLbzbu94L55Qr8ynY2RDwCy",
  "key13": "5KGkurHxMJ5m8PmaLfzVBJoRq83RaN1BMGDL72X8brtoQRCmoTyoNtS3EAJW68QpeGueJQ4Cg94w12xGcR2thYwr",
  "key14": "5qKtpDoSttgMCGZbk7yJHkaghHZA6D1qmHPKutBXSk5A51WGK2xD25sLhKJg1jq6LWBQAurvWD1WV6frG17hQ5Qp",
  "key15": "2fdbjndRUMDqCwgFffUornSKV7CCr5W2FWAZ2PAtkvkw8VXGGW3V5wGqU83MB744T99wqUcoQbMgVgqFoiEuMGWG",
  "key16": "56W5URNLKsT1U5Sam59Vsd38EvWRPVg67iRrbUKyQp3MnvTPoBcJEEn8MjJtseDWD3NcRFrDSXpAorJGftnq36oE",
  "key17": "5pM1coiWiu1NisCLV9FLEUXcmE7icgFLXybcodjpPuHrRFR8mhtPngRwnupMXi2w4kh8Ve9qxEmxD28cwjT2Lm7x",
  "key18": "4gcYMuRS1zMreHJipMZRacB1JKxyBoKhf1fzSfFUxZHDNnXN5e2LjJNfUqfdf6U6FsNiBNsxAoFQK3ay6k6kaHVx",
  "key19": "2YfMddeVJyWeP5Fu7GWbQUBA1z5uSkRwbU3gNHPAfFHFDsUu1nFBVw4xy7HLYxA2NbgJxjxJJYCvyTq8EWgceyuT",
  "key20": "2LzAfL2smEaTSrY4EmyJgTwKWKgWBEgvtkmx31zjJRjED49TAnkiSfRTZTVGMaZsmQz1mxkBVePm4kgB4eWFifd1",
  "key21": "4rpczSNTS3oFdCSyXPD8JD5k4Jc8VSZ8uSWRfY7nyReMm1bNVnvf3YpmbQDqG3kLKkEBhyxwnsNV6eQNt3Hq8FKz",
  "key22": "2wgx4AoDS1NWzbkCiwWBPdLL5aca1kFteJMvsr3SzbWcYvxpygZipZT5SxkPnmSQ5PTDi9zqefRbZE7FmfkudpVY",
  "key23": "K5cySPC3tdQtWDpQC29nbZPgvrp5UfbPfXKVD3L1cmDriCmrmdoRHHBVthBpCcsX978HE6KRg7n64PzwGFdgtDQ",
  "key24": "5VcgmVScjYi8YD3VAUCi3L7XqAKKjGNHa2q3nAaB6UwDDe5rY3q5QotkxLV9PoZMPBJad6e9s1NhbNMjS8D74qaX",
  "key25": "4oE8bicvXcjWuMi3R6JW7VQSoJ9FunX852vU7HjJgPPAQmweW4ofQ5GFbfWS6nxoK8SyhWYR6TrrQ9PXtKnYS8HF",
  "key26": "3NTHGXT8TNNJS6G97QnFu6kbbukFM3yVMikAQ1366QShaa9sEgEagh6VLjpGAQHCuBRwXkZa1CjNJ2NwvjSVt5A3",
  "key27": "27NCeqDuqnFJdDwaAZXzFg5Qsa8gE6t4zzqAoykHqzJdsoTkvzenVaLGj96aaW7fRJbxwZsNC2AxShcFLLMXtKW2",
  "key28": "4y8Lq4Ey4cga1Vg5JbkR3sgCGSjDqvf7FbhJ7sWYYo6xhqT29a6ApAW6AjUCDQegn7VMzzjywyZrgKxjDXboNUKK",
  "key29": "22ng8LxBF1eMwzmw8EqY27JfX1xs51SfSgBvPS45zo5id5vfnjv6TKhqWB5pgznpV6mQDr7DByVW2tB9H9HctvYH",
  "key30": "5Tu5MDWYPi8uDo8H6PgnrTBVrETgQxuLrxifcfvPNs8Ckgz192fWYXonnPEM57YgjVBDKD6qo6fSYqiSHKbZmCJP",
  "key31": "3QxbNyyET4CvEcEFTGgzmWNof5Ctmi59nsL1fm2FjwbKYJNnbrtopRDDUKEwzwZAA9nwSfAayoDjxUGfT5GDm42F",
  "key32": "wajuzvnGsyDQfj28UZz8hDPpFPJqLULtQfXsEmTG2KhSwLus1aDUzysoZvmteASKGsMEi1bTLkuEcS1SVyzFtxV",
  "key33": "5LA6DwyUe3Ts2FaijKVRTVKYKVk1XHgHPn4N7NfGzdM3vEHpYMidkqjJyUh7eBSPzXExkZBeLL1HKSHVQuvg9TSL",
  "key34": "34tnqJCUrn8wjybVp8BKs78gX8NwJ444mdWfh2YYaAGMsq2uRVzXNpubQ6q45mp7waRmYKfzSwcbGtiRgpSRnZDN",
  "key35": "DJZSKHQAyxYnJhEcnE5Gkvzb6zhkvF6k41ftU2FamQEr2XHJDyn9EMDJ4btXjq3yYS9gNy4itSk3B1Y9LKwFje2",
  "key36": "45o5tE6LcoDBT6s1WBL5eEhPzPtVEp9u4Kk3WY72rmL9fAwmd3rRZDGDQfWDTjz6UYqyokq1fuVbDg5MpoFMuXt1",
  "key37": "61roXmCdffxPh793xPCcmXL2Y4n6RG77XxdkX8YCsXnEQVBxTxjAJasGKNydBSRVSKoon15Ljty7bvFvsWb8kJW6",
  "key38": "5tbsbkfAecsPjWGhGxR8XKDtGjfD6xyKpVt5tJyxB52hUHNFuHghLpQcSX9Wma7rwoqiN9H3QX4FKBaNRfjgwWF4",
  "key39": "4uJmn4E5YqV4f4rmnPdgSrWUFtCnnNqzLaTKj8DcTnA15C2TPe4z9xJuMAAiJpNDf9TcWCh5TEp8HnYhy2SVexLG",
  "key40": "244BEcBZ1Km6WrzF82AJnwN7jn3UWrBaou9pTXASZAZq9Sv12NXkodh2xNaAJMzkXnmkmU4dXkHumv4TZkBPkFYb",
  "key41": "3hfR49yTFJFSpYRvQERuUvSrC3GoXn31qAmKg5oQweH8ZcdWm2494BMHojS5dFv7P4Zya4bcGWZoNFD7vxb5EfkM",
  "key42": "2zsAc3WzZYhvYxTJSRfb8dTDwL4P39TWw65ZGjqyBpvkojhskksa36hHRF7PhSkKRLLX1LbrRGafUQNZLZJKfM6h",
  "key43": "5t1fqWZfa6h7uafSVnkqF6fN7rSGQneG6uDkcJxmy7sEnWBEnjJmbsPz5dg4hKfvu5QYvinuv2GFmM8sRK4pZzzL",
  "key44": "3aY81QXXyHXu1LjR1Akr2715UbLoC64nJWsPSAZpDPYo7Ew2wcjJb9HwDPhFBVDFkkpyXf4vswEnMyKoy4HTkF2Z",
  "key45": "4oiGwhR8HSxCyoonoMbBrYXAERBbgi4Uv976HVu4AG79nX6EF5iJ5iLX637e5V6WM2uaiuJo1zVuG7NDbuEKo3dx",
  "key46": "GLPoeF4kXM6jdGakKhbB5VRvdAY9VFUoUQzRoaTuntHHTJg3cPF3qS8BHeHoKLDqa8jvHn3jM8xj31FRQQoyENp"
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
