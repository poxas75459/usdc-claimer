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
    "4swLyuSRc22zMkUy72AEtPnMbWbV8XUCFcjaRj71vANDDyLtmB4CtThBQtMNUS9mh4rjBz4gHEikBNRK1EyoADa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BwquTj9J8xueLTJRzCN4WYpHrvAcprjxxph7TjWwXAJAZJT1BCj1DMShSMzMFFMKQNxwaS54kpEHNcgZWMLC6m8",
  "key1": "Z4Vs2nHkimJPRRcEek4XVhn13kEGbtJ3hDLhBkcgnjZ4PV6iE8Du6HNCYr2LJ3kFdsTe3196nUpQZawGuf7EEvu",
  "key2": "2YvKgH1nM48v9ZNtYBZzXf1Ezuuk8TQCUeivdaFoznxEaE4bcyWA7uyN1Bq3FuGTTzpap6sNTVmmVL8eviwqLFzd",
  "key3": "r7ekJq9wTPHRK7htmUDxL3JhkZqkQPgtMwwp4NKtHTpvhP2y4BqGpqKSRX3kHfv5mr5Qs6uGHEgf4t7mDKLDkfN",
  "key4": "3EcV4QTkQBHC1FpMxSH4Rp358ctsebx5RrYyt9cHDfvNjUj2QafsvVBYAnF818pBqf4hSnTvzUusmiuiNCz8NgN5",
  "key5": "3mSJbTG7HLqyeB4Tt3RPx7L9VrB7ztU7iRURiQDfaLLQRR42cUb3avJviTtwQb6w8woPHn9QtDz1NNz9e4XSCG5v",
  "key6": "5Xnr3DfYRx9sQwCbda3SqxrQuUEg3VWVaRRYLcdTm2jCcMmL5Mx5kkf4BGKA7ojk8BYYo74YSz5karCf7Jvc6chX",
  "key7": "3TioeaBqAegxXFyQvtmPEXyRHbc9iQUGq8gWX7H19sYU7B2QVukuT7E5h1cW9rJyyToQrAiB9fh14iT1fkehPePX",
  "key8": "hRbfczYyf2PFk6iuffrspEKJwjw6NQ2AfZ9RcpWdn7WA4f757mkv9goKmvMdYr7U8KUc1guAkEYv97ib6g6Tbup",
  "key9": "54qCa69mkayU3QGPGH33EBuKrMYRUdJULiVQ5VR8yD6VFNoCVkcYLmQwVmi3d2E9MEbkmbAmepfVjHuHEJ7kFdoB",
  "key10": "5VKsUFoqCPzqi1k2UArcbaEaRvwNsrENvzBwuGA9Nkc9f8Rf8UQryP9XVujeF7JHagt3dtEQEzd2xFH8xGLCvPMT",
  "key11": "3umVLqPAAqEnz2yUiFeqcpc5fTTkhm9WtS86ZMJA5yDRA62DsfTLX2gizqSbVgbErhRP1DyhhfXLMASwp7mAxWYg",
  "key12": "4Wwj2MbT2qTTtBhb7wrvc8waeMuzJdymyaBBhbwkEdC1fRgDLUXMvLjXS6M4Q3HMsMwidgJoDg6x5kmiCzgbxApo",
  "key13": "28mHSmjSjtB1CKa1Z3rDTjUZJe4Yc9cyGk2sqmDLD9eNgMw9ijQpNxJxJA54JmmwazYjNwrKvQBXLUW1WAt5wgH5",
  "key14": "3rzNkjAvdSVJiGjbBHB5XggAKcKkj2nijKUomfLvHk6rc5wLjeqtFn8DKGGkM23HBYpanTqagytFxAPr8BRebpze",
  "key15": "WQhTkcKCiV5XAp5CsPmN53tD1R9Habjwy6K3Q2hDD2Bde1L8Mur9VcytW7TPevXPMbPsWibuvp9sTFb8zgjxHsS",
  "key16": "67Z9DhBDEUR6nzKyfSrq8weRqDjShgziYRx8PHxA25nGWCmLEymjHGFygZrC7DW7XJV1KeXZwn7xqt9WHxnw2qsF",
  "key17": "5wamzC1BVKcRh76NEGUw6Ka4kjFUfdhgYfoEwF63KeE1w56zJysdNhbLBYjdrqToZNMMLDYaYBySi8Pwzx7hyesj",
  "key18": "1Xau3RbG5rKxEm1Tk7VdCpZN8tt5LnQd8MX9nxMq2H1gSQJnAeCS5WVed56aa1FATQhbNa9g9F79ECDQTDhLb5J",
  "key19": "4ihNLjC4cUtdyNk1j6nNgw5VqnKT9VzevqMBwwrBBCpGj4DPcGWVkS7Sd1eK61Qu6uNkAcX9GZq1xDHA9TretBCF",
  "key20": "5uCj2smicB2uXdM18JfDMomgX7gRyXrCpVgUDUTeL46ax7Hm7ZHfBnc1K5Edi7KNX8Uz4tZEwTxRb11XRdFpsPza",
  "key21": "31hHV9kaENVHwM4XJfpV2AbrbwaNcRWhS7Wx83T5CxGWQotcgzG8PNeRZKLdXk8juYC5NkAdrvNZpF1jA6djzGPH",
  "key22": "5u8N7LS3Jc95d7PUvqQvdoRZLczk6pE2Mh6yez1TcHhNnmzpAqoKsk5M5wCkpeYHXCz5TAStq7iw6sHUY8UBM3sj",
  "key23": "5T3rv8eX7qjEHcGGqnNxvDXqiJbEScqdDeibTYZhjMmyGgYeL6oGdcEWcjT4BHC53zGAWBwBJT9ZzmzKBNmiLU8",
  "key24": "4B65M1joQ3J92Y5tx87nM9YcEnSrfkWv4uiEAmeZUXyrqyoo3HromDrQV19r6UQyumr4w3xCF34yFmWLd3jtagfU",
  "key25": "49zGeMZVptGuED3U9ngdf924ZzHf1FfGyva8BaynTfweUaitPjRBuUPWJxbKUF5t8ohPBsB1jLwSaweSv7SGXaLx",
  "key26": "5GK3ogAuJytDRKogFyHiZrz2B2w4mkjG3HeTQtD2QPTaJKppb9ZQuK8WFjtMLz52WQak4dCNeoZyQdwDoG1dRmRa",
  "key27": "2Me7Kn4Cdde7CQ6yW7qSfd2ptbtcw7yuB875vmZRvWasaiUiRwfDG91nfZwxTooZt3Ufk3Wek2G4W9ERb1HqB84u",
  "key28": "4T5317H12qCmpSxXocZ4a3W76bfmMqMrT7qVVEgUNidbR9qRwfe1zFRkjpihdgTRwwHWVeEBYVVy3F1yhhCUBja6",
  "key29": "3puKVmEFcWmsG1wWXKrFh9hjGAC3HfEqLMBwSVJeGifaYmQHyhuPK968v9RYykUvptTFJ4pAJWnAyFAB2hM336c6",
  "key30": "3XvQvLmiJSkhfcJhvWskwysHMj1twkERBnL4XoenVzR4bjp6YCWiJ2LtJEnashUA6oV4Y4NMWEBmBmcccyqb1a2M",
  "key31": "2Vg6PcuP5Tygb48BYkRwoShxns4XkyzQfhZdg32QPGDeyiBi73Fr67MoCJJiHfzTyBB6RVk1KgcFoRZ11r7XB4VN",
  "key32": "JzDAzezav3hNxR15c7q1vtZRorFtfn2D9VRRReWFXmKhLnny7h45DVXi8F2q7UePCsYWL3i6oFxgbSdw3i3ixYC",
  "key33": "NqiUoCx8VfF5x6ng8tBezRnjSbgWMGM5E9A8tjoL4VHgpUBKiZB9BZhPEhQgBQ17KkRETyq5HcCgPVwaHx2TCFQ",
  "key34": "3DAxJH5Sx6m5ibgzNYXeMzMbqmXV3s1bVhF7favJXH6Uv65TDMH1xoDzuWg2WcPuF9MXVbsJJr8dLg9KgwX3bc6V",
  "key35": "4fBLvNSq7WPF1kW4gW8sbuvtKTszQ74aDzF4Ja26RuxsvwnbiEdH8N3rxrfUxg8c1fZZzW3HtrfqAxoA61HSYW7X",
  "key36": "5rsc5LfnirLEkBpRaaTYBWfv1wAjhxBce7UB4ueZzssEDgTV4KgpnFBKMYnMsFQSwdf86bqdzpnYRV2onS6NF5TL",
  "key37": "4aovDsDUPJR5cwMd3SmtFsww3naWJLeqjpvok41MLocLDPQsAiUhW8y35dj7kMJCAcNyjKtHpnUqdX2SukPVHvSe",
  "key38": "3MnCZ2ihf3qJVw6SMoumUiVeMV7sS9As3dXCcNEkPKRwwXkhSfAdyzBeXASr7gVCXkHdaDocL4BLsRVRxSYsikLZ",
  "key39": "4S4AbBSpvkosAKxivnfePSc6CvE1pTPFrViQd94k8Rpw2KSYKsiY5DTSpDias7cUWmcjatqGJy9gZLdM76pJYsTK",
  "key40": "3AQyiAqFHUdnmaq8mAs3H6Kg1MUakhmnUfrAtLEQaYcx3CKmgKWZDMfjpjazvH242xcJGNEFwwCAddWSHqvVfdn1"
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
