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
    "3afcSeEeiN56WG1vLirt7a6KVfEUNdqBBr5b7QpD8cDU75qTHwpxBco6pSHaNTMUyFvgz35Uzp3gUXDKR1GnmKhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ppEJnnZmQBn8iaK2Zn8ccBAQ2GuueafC27a7WGAYMoAnU4GYwXhE9zqSyf44YYuz48LgB1kv6YwGDmwdsEZA9SB",
  "key1": "61GJE2f151eC1TL2BGNSyqMykFcUGW6auyU6CvY8oecXknCeSxDu5rqagHYvwEymanf2G3hbdWdywGnSURmGyuQo",
  "key2": "2gN9jJXLB4Yt8qTRgNe7LhrZ25TrEVoAysnQapta5MgoUe8we73P6NRsUwGFr5sxZuYzMdwSZZHgPFvT9h3DtVsc",
  "key3": "4FtQTxMAKAN3ddCGmWMDfv6eJczKy8shsiQSQVCed1B5o9jPdyKzYysDgqYaPugVK3NJCbt1XJK8EoEggBbTG77A",
  "key4": "Fsv6KXdEoeTivq3h9hnTTo42PaWey29X3Y8DVGGFmEVEVYfP8XjWHw3BZ3Qm7qhmBu1ghWosWGtfg3FDX3VMmY9",
  "key5": "3ZfrmzUFiMYLucuA5vQU37zwSHHk4u8yhzNFycHwdXMwxqmFgctPmRQckkYhAKDioCq9J1QqWJDsTWBWJt5YQLJ4",
  "key6": "rmKroCypHQYtGMZLx1nywV4fXPgYCd1Euegz8qbcHRUoa7WGqki9X1mmzbBzgsPqkA8J2HbMnkjaAjSfswQ3hip",
  "key7": "5YBe7utqH5ykss24mkoZBNf6J4KGPV1ua4esMRja3A9osjcBNp1XnWvgUaxZczwTkkB17D9ztRPWCrg51eDUY4pR",
  "key8": "3y88iS4EoCtVRSey2NbY2KL2zzyq4py4xSdD5MUtsQZs9djT9r3dbMCbMyLD89J2tXWv3gA1HAiiSb4tK1c6P7pp",
  "key9": "dZRN1FK8DkwAJm6R6zjyG9tPhjwqG2LdQE9mNoCGLVGEgN8kSLY3r6D71nskPaFRZw83hrsPqBvVi6kRSFCCx5z",
  "key10": "CcEtcGLKtnK2XZdQkhcSgzcC9rM4LfddnGBJx5gNQWmSUdSzj2gUrfWS5GXgYfGZEMWgDp4sjQwALpq17WgGBGo",
  "key11": "3Cr5whGLnaWdStGvxFqmgpfvWYGDHxxd8AnmZttoCWE2J9ChANQSL9gNH3h7f3sgLJnjUd33nmpVHiw9NdKRouRQ",
  "key12": "33vw5v9A4XEoX7Z9Kp5438JB8HY9ooxQaehWnTwHwrxKvjRT4JQe1VjJqXcpUKMXe3GtCUufnnr4n3m1TivGpUeL",
  "key13": "SZP7tX7ABLKqqdPrAvYq6iqGm59W1PWiMtjqsqMiEDzxWaTyHs51LjuMvj9VaUzJmyE7AXX2P99ASmKZmzHQXXm",
  "key14": "5KUFsNUfDrU7s2GxWsF6jF4u2nvt9ZJRQoqXSib5jQASgRFfe3NiTH51ngNsdgiZVCeSNEqcwF9Sq2JtNKZJ75kD",
  "key15": "3riVcbMjfxQXydYshr4dXG6bTu3i8LrczsKvVwCpda5ocmJkAWkGHrMQraaiFCnJvopzBHvL4DRy69xerrYMmrMi",
  "key16": "3fDUnsU7iWBGkYqeaYvabKktn3KARRA2vBfec6wbeJSReGcSZ7NXbiUAwXsJtv6CALprgKuaHBhtie73hvZy7Gme",
  "key17": "3EfQRy5Dp95upCMxKxBafevFW6fKRJWmFG8hMz4b3t3s8WBichA8Y7yi7FJ8yMzKx79QoSL7FCnCM9BQ9FzRmMn",
  "key18": "RpUqwC6WRRbFyNVkDkcsQADy8MUCvz3fHxRkYjvPhUGnccCLPWQnUMYczcddyw9tszyCSGDfTKyXMZCGaerrzF3",
  "key19": "3rA63a5NiG7Ls9sp4GKoQEDDV6hhPPnE5uJiqjEUJKNdcmiUcEGCB4Y3PxGBw89PbqNisz8BNyWxwiDeW5rpzTZ7",
  "key20": "v6JoaMzi8iMEL7MSv3TtmJVNst5KuDXx4YjpyUpKRE7oBtk4EKSsNiJXE19Y8EoZv5jy4ByDVu5YRCiputdqjfu",
  "key21": "5mQ9NM45HBwkCcokYAj4PYy5ceAkC9FYhL61qBj6dNjF8XVKUZN7xFzZ95d3iLuiCTu9JSkgJ8HRpqhc826P9gTE",
  "key22": "3zVkNJS9U2jMSNb81CXHqboEe418SGCCFnCVT4iAvpvS5wPJyDaiNVK4nhTuMSMUZZBiFWBPGoQxt2cLKA1ytsU3",
  "key23": "3Kku3BCGJDLu6xKFQQFgauCmkm6LuvCGiQiLApPAKiHVovZARZkZoPBaT6mjKyAzuZDwxTidHyiKySXgXB2zh7w4",
  "key24": "413SwSze33oQEgAMy9tgusjCSUNZZpDpnTYSu32NFxC6J2HQ15aP8C1EtWVEBkwm5SGFAgQJR9ADm9wqu89MKKck",
  "key25": "2MgqkauGuiviNMLSkz2BBb3mAzDVQC4u9d6rtBQjLt51NFz7UYUK1FNttdz1ujgBGkV1VFBGtXnmpiV2wCKVqhJQ",
  "key26": "G8TSaGMjmMf7DoRbdDBQ2YsSGmYiJHG2QoknsUYMRbm73oKqbxuTL8TipjES8T7mD9vDm6FdgXHFiZksT3TWE9X",
  "key27": "5zVvQs2Z7Q7NNX8DkAWFSWLEg58JnnGz5MCzsNQCRzvLKxavZU2sTobgKhEmKsB65Fe4dp9oBAMGhP7C9iuBXyxk",
  "key28": "5sFQiHzZRkv2az3qFXyNWi78vgkUeSwNcdjyMSHEAYzaNrnTYuk665vSwDfV5BKYqquD6SpNSfP15GUSVtKuQTEK",
  "key29": "LSoWufxTA1FQ8VwdtsyLvS5r7wm5FkgA3ud92dBudKdJgHZMFBkxRWQaMRUJehhEn96gtmJQNHtjvgn4ob5T5rt",
  "key30": "A7DKbpMgryC1W9SyTPJxYRAV4iJNN1Gs68sdbFEAMFLgvZKauZE2KLjCahQkoC4nAvkx6Vd1WPRVSVgiWNU1GWo",
  "key31": "2cU7dZw3xJX716VfBPkFQxdoNpe2BxQ3rZAbUdfWSnqR8yhG4uS77sjWncjSyBjtW1nFxFBzt1ZZhWTFcq7HbNte",
  "key32": "3PFiEVxxQ8sUmsHAKUz5kY3AdEyz9bY5Dc6svqHULVtsB22MKD9xaYWPsPkDRvy4sHVPm7s2KET5gfb8g3T1GMnf",
  "key33": "4oWgtQTtUffXouBLXBTdJZzCh115PXL4cUYSax7tp7dJmNeRihW5yd7not9a4qP1MTYQTJ9kb55n3q5sYRMwjfzH",
  "key34": "39kB4fBXN9XaBEEKgRjFayzW79Sb4UqnwTErqVsz7tZ3ahNq51xkfV9ZPnWSGVFiPJ1d8YEbkFfNAaVG4XxBosuf",
  "key35": "5renQAXwmvq9FRsoFUh2pher6pc5bXR7SDrL4P6rBSH4LzLFvpe381mNMmvXecv1kFMMbkTa72b8EEnmxiBjFJ5X",
  "key36": "4LB7x84HeytNZ6ZPQhSCKQ57adUU13aUvgGMCVBLWbtfkwnjRvJLHahKpmU1ncQZ6aser2TEqw1GLtWgi7cynS1E",
  "key37": "2T3gJ6qfkonVbVUBwnwMQLnQbFSewzvGeEKGJJDxfhKCm11qiydh6gJPyDdcFaE15CWngpHdgXdkVrRVEmHjVKjH",
  "key38": "f5x8fsUxESCZ53KspMu2GPjFYjkvssXP9S1evHjLwhYhgJcVTDFcuYaYVC7da1UVzdS4onpWo9czBxj8W1sUWon",
  "key39": "3qpUvuHSpVNFmEnNbYiNcEzgWeShtec4cZ7QycrA8BLf8HAEhK9kJVg3kkhxGDe89tqVxNnz8kLozo9q2mt2JF6X",
  "key40": "3FmDKimgNfXWUVq1TNeiGweowaMCrNQEWDWTv43AUseTAZKt9pP1GkVmDTUdU4gsYNEQc4CqXcspsinLS44FKjVT",
  "key41": "NTmqFthEFj3TMsrSJXL5jXNQiWfCdWDp9Gfzy5ZvnWbzyqCQUZm1FXxC9anjw5pQFMyBXqG1B1Fu9d3abu5RFAg",
  "key42": "4x3rYXkBa3tjbWuUQdVZGGZpbqM4xF55D1oMQQHzi86VwWfNrvMMTyv9isM2vPHzXiPZ4sCt696QmibUDzxvgby1",
  "key43": "8sGXhvohnZvnubgWu7DrdycpejYTbGAHBrtwDpu1fFeLXafHMgoqJ55LTpEHmEKBA6kaFc6ZPGSsDMYXJxCkfJH",
  "key44": "3BHJ7W78voDxNL3SN1KCDt3Q2XFy9w4gRhKAjYXHUayFMxCFn1gHfHVDbNoPxWn2J2LG6GgsTHDXUB9MUtK5tumR",
  "key45": "2UhUDXDKR6RpFeDVuGbL1ggMrwV494tKbHAHdARw4mL1mNHQdiLKrNMynPQavQLLNbUS5ARQVHS48suqCvBSKt1k",
  "key46": "1YL7CMHZV6JUNutbQTgcY3Mm6tczvZTCnHkYMt5GXU2Hh3YVtcUcQrKsV3ktBWgGdsodU55bcKihtGVoLw3Htno",
  "key47": "4WPzpY8J6ggXireXVbA3DHqWDzdP6s1H85M9WKJYH43EgEpPBQt9nRDNgPwXVpBZXmgFpcmjtVDXm6qrbEjSd7aC",
  "key48": "3RRsLK7auKRm29JfGfkpHvqn7DHd53mT4kXgxQmPdDqzfrG9igNNYoxD4Mwmi6KEkC53JXkMjPttyMRHuNkPa4R6"
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
