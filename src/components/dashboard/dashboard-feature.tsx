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
    "3GemoVFr6jerATqjvWvtFwmnAKAbmyQEHzPSzqb6yYZB6wrtesBgFmKrVSSdDeTxTBjQv2pagiH5axDV1dRoFzSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6bfrTmAkauCxEQxUxgAEeZpMfwWfPzC8BVuW61Q8VGB4zXUv3C1agVo2sRUGr6X4iXmLXKJUiVCYoZPMgxTuDk8",
  "key1": "32CgmdBAxG484YNtCFSqrkHgzknLq37UAZpYH6p6vGnn3q4v6d1kFweKGF4PZHCK2eoaUznKez4oFGxkcGKuFuQV",
  "key2": "gr8gybgrhn8Qk9uZXXmgUNfkvSr8VQUYddgDfTCaCcZkUvk9xGBfE2JHfFFQTXhJR2hLTtc6cpjyLWk4RnYKTXn",
  "key3": "jYJStLbNYrA8MU77WNTi9oBZJ5391GZnN9YRFxmjVmJFrcgEcN6vRvtPYfX9ako4eG5XsANfqtyhxjzCKGAtP4w",
  "key4": "5vYfAuEusJws64g5TvASLHk8NcPdC4YdwPUsz9rUR6ciJZ1NaFDuS6iuG5wUSW6gYkacDN5eyJhQjonC4TqSrMwF",
  "key5": "2rUcKSeHYiaVpTXNHavMigV5UD44B9TrdahePJAUxSCVNzHS7bNt6ogt7AfRi4kVuYbcGFXHKseDHUF8nNBhBWCJ",
  "key6": "4ZkJDDS24yWx5exhwhPJYqcRY27Zs4eN7y8hcJLrTmhc9UxhBqSefFNy9hEJSXzGmgU9Mhwv23wRSwzLmEEmHoha",
  "key7": "2uW2L65UEtwqJFS5LeupHuFW27o9vfC1H8VBeMmzTNyBL7Z6CSr6Xe5hZcngfkfTPgPY6fQgwfSfsrLWH4pFwtsA",
  "key8": "5c2grxWv7vsLrwkud7XUP2oT6W4n7joEnGzffnNZprAiy7bujBtDVuHE28YaWgPs49ZeMigmKb1ZRaNsPap16aKm",
  "key9": "eweVvcV2pgakXjFULHkz6613au52ivwZfdij2vjDTAJTnAxpbpLoUmJJPW1RC8wMRrPKwrbuMpkyyvpKAgkPhPT",
  "key10": "2GTZzVc1i6TmWCGJ9WAtQCZH1mFhaczGpbGEAByJALu2jxGtCtm9chGc457v7A9WMHr7sXNCWZNeoz5r8REbCD5X",
  "key11": "56239JfVqiZ65qU5nmPR5MojvWQcQ8hHo93NxWW8pANaNpMJZLaagHuLVE3PGxxsjLKZnajr6C5fSAJ4jpvhPjVP",
  "key12": "JZgwjmtJcRums5bvDT7Xp7E8rxemDvSv2vE2Gqn28LVmQgEWSJWs87phG4pkSCpz5TMCmednHQVjBt41p36jfCD",
  "key13": "5hrdvCT4VM3dtP5SEE9ka41wi9Amux6n5pK2sGDoP7keg5mCak8Dk7k2mP1QDf5Yri1fYpWEKxAMVHrGNm2Fno1d",
  "key14": "5rRwu8a2v9AjyBuEHftmfhLuFGScGA137QcfJayuVHoJ4uPCKt2q5Qv1ASP9sKvopjkzPop6mPcEyi3ixDSyaYZS",
  "key15": "5am2wNV1XFg26xUsti3zEmGcvuz8hgYqu6NM3ugdnNGCAnAsBH7Svi5Bo52hLHniZfAnKDjjueFZatCraJ2hrDFd",
  "key16": "4SRiqvJZKyDP7ha4MbJiywW2fgw5Nuw92zqDknQe6q3pjBQMTYRsvcnYv8uRVLvTDs8qrtG1eFUGL7dnumw2c4h3",
  "key17": "4Tf6FQnpg3auYUqDw9N7YBvCLimrwLxuuQV5anExf4vEr4XrEtLtbzAUjBCjWohfneEsg2vzCPjmqJprQzmgd7S",
  "key18": "48iUgC4DRpxWy5WGtaNfzoeXVCueuHRPzddvCKqPsNWDYi2EzSMwn12BjZC7qmn68XQR38ftwS5Dq4nNmPx3Lr5U",
  "key19": "2T9a8q4CRSbP67iKVgR4Cf7vfuPQnM5ieyQYsNaDweg5JPuULLVBjT3iB2X1iwkzYCemNoJ2Qz4iviMaWn9ZrQop",
  "key20": "2H3aefBgYEpg1aKopfmjzqU6Anb9RLRvhiEh6ugcz5sW6cpBX4dharRU2WjwQcZ5BJUTWj6UV8tVXt8TUVzUFJbg",
  "key21": "5Nfp1r28ieWMza6Pz9EE86cvGStGi7z3iiT6BUYvrj9UdXuwL7t1hfdEhFVMDabsgWCwb2JJYTsQDbWZRmvC5NMy",
  "key22": "65bVKai4jz6aAzEghFETTYktyG8DCGfPwL3TftbiSMr2SVMWrpHS3PXWCgdpVmU2rWcxieRBXcY2a31wYSfxFV1B",
  "key23": "2LAECWQTvcPyj5Nu8tfjQJVogkyZytfUzK5hGGYJ2uiN4Ao3B2KCWXFVX9afki149hoD1XBoHxHuiksUyPivmRo4",
  "key24": "22Gr5EW7beSv3CrQzCnA7NjyCUVgAc8NiJGBciENTZwqEEJui7qVv8fG2JC8fruGDKH9ptXhKsRdfZfnr1AvhvkN",
  "key25": "49XDvQZEG8pamHDuGCNW5WLsh4oa8gVjkkwuDrRJH2NGycF2M9HNSWVZhgVHVJHPeYteRJZJQSxeVKh47W4S6Tbr",
  "key26": "W9kDRLUrLZqnUxGgiHBTEh3VDzKXFPghfSrDSQMdrcNh5VGPsrp9cPiZtCjGMZPRLqKvMvaYijM43NaP43Ni22b",
  "key27": "RfApZvmvSiSast1hvDZN3etvp4BnHV15AQ5D9DVQJg3pRFGAAwZhtdg7DhPDttupTJKsCZoXvDBSp4ZE7mjqmMo",
  "key28": "2ACHpYSxtJmS6CePwkSZWJ8jGUk5a1WE89S8Ffe8pWrUszRnkcHxzohMxeZF4FsQPgHgHQ7FrmhZrwwNeRMvsf1S",
  "key29": "2VL2kq1EbD6PwrKxQKX3noKfFCTKKt6jFBmTSugBsaVmpWm6qPHcNgks2DaZuLt7EcXZMtFQuY7PnPKzGf2tNdZ6",
  "key30": "5boWkoZP3zHmHYSW1VLgGetSzgCz1QzCNtyX3HzDueBaym4kPM4HKWiGWjawavPDdxuRnbP4HfKmWMkMPVhisakA",
  "key31": "Wxdtf1WPDoMSeh2s6sM3m6TzH5PPbwDidRvdjUWPxkVprZwPXz558N6DRyFSeocDaw576ZtH97YMdn8UE9Qhcor",
  "key32": "4gTr7juMY9VTuXa9MiM1a7LGL6NvqFpdx6n5ebvgbvdSAFtaLAkzftQRNpDRtw96zTwYA6NB1uXLo93pWnDAAGF4",
  "key33": "24LDo1Ttzark8J5Z3m8RxAK9qNvqc6QMFmh5k983sFg9Lt3EWN7iXddiv6NYXU98WDcCNgVgiAUWWm8Vw7DSUfUr",
  "key34": "5NezAkfcsXzaRAuDVT32aTARqfGkb39Se6jRSFT5ir887uCGpPre1EcU57YGychndZFSrPjit2tB46GDiuawc7UE",
  "key35": "5nsPNvsScvvBQnQBkWpy5R1E6qpPA6rbG9iPKhU9B8PemhNaBrBCHK8HsoNCASP9u6itGc9bCSAxLNXrcN9Pp4K5",
  "key36": "5nEf7KFytv2aSXu7cnoR7JMNeP8YpuAz2cz73ymisi4BFef7hzQDCKEPMTgnzoHcbwZ7X91Dp8VAAP3VmhBtcrt1",
  "key37": "5cauzaftdhB6XembUqanmCnfgkNSXuFfRixoafXs28AMggX9QXR2speqh512TRd882YNS9k4MKnHZiwwgcnJ42J2",
  "key38": "3SHTfQzavHGhzK9w3qA6XX8kJm18Pz8TiHDwP6tED3LnkYwLnZfgRi1CKCrpz6gqLR5XLFVQD53DXBsci3BMf9AD"
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
