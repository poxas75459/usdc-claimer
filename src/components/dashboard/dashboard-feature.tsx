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
    "2zj28JV1aBg4gf2cXLnhNKSibQZ6A62u7bEGXfj2Wk9ncr55uRrw22CtsdTkQ4oX42rhuZKJ3RcNJujwdxEsJB4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zYC7KdkiiVGrAUN751T3B6F1s8Zjh9Lv147h5VRDeFJ6F4tDdmSsrJ12rW5kWucSnp94xCR6rp2y78uFtRKvxtZ",
  "key1": "2oTjwqJMkQ4hBqjrbF1iBZm9x3rETEcAKcHgkjffwpguL4hFpdy2MeY6QzrXkga2ZwwTe5P9Cm34YYtELJddACd8",
  "key2": "Tk6chuENuKtMuMXxfEv9pwnVVL6BACY5949roxALushoCH6HiNuYbPGs6TBMBMkdhWx4pgjncScnvqC4KK3mkYd",
  "key3": "5oM9YZQ8Hn1bCMPHo1bd1gGM6541AKviha9mu6Dv66nNPwJfzDdxiQLZja4AtpQmRnpYJkGrPinMBYVpo2Y7onBU",
  "key4": "5R2GtPWELw5w3gMRNXyTJUqRrDV3VnoD71nq5t71JJCGjzSEGU9F9ysjraHwZCgbCzup5kDQG1D7qemZqm1yyfHb",
  "key5": "CbEmhYUfxcL4s2drTFGdPbfU5kPQiBevRndqXPXo4mXmMgnJYEWFJRY3faJajSYpAvz6KHwF7D9Rr5vmUzSBWnu",
  "key6": "4Y4CRKuGewKuzQp4Am6dgyAs9NRSA6ptprJVyfmS2SsPHsyLJbfSGPG3hV2361b6maB4SJf7bpmFukMeurVtoGuD",
  "key7": "3b3sHwACdjD5Jz4S3fmohYUvHJcHQ1MjRy9cFU8diaR2vbptpc1QsJWTow273HH7wL1vAuSyyKCkkZ8R3AxUWRAj",
  "key8": "515AQsYkojoRFBcc69jis3sDhJwMVMKia1PNuLhkZQZ7zFPtRpkLvYmFVmkMMde8QBt7dkfbp3tcDcNwtJX1BZ5y",
  "key9": "FKFAj2NkQ3zoq7tcvJSEWXE42KdTHsKyG7yM384mUmPqREGZyWqK4viX1rJAvQvWK6uXLPN4TMhPzbzFm1i7N5b",
  "key10": "2SFXuiV57LAPaqdyPrsntmfCd5RUZKLKMaFN2VZarPpXQKKRVrBqBfVkvzsCYyf9oo8ggqpzxnkVEbWTBMd67R8w",
  "key11": "2A8ZNeZDzDpQagjEHKkgoKHK62uAJViWa8ZuM7jK2seyaGjgzMsbAvFTEBA9yYh6Zu6KMqJRrwXSWk9jM24p4Zcn",
  "key12": "3E6miApVLPSXyeAvhPTtdGmCzs8FELdiELBWw6uZF6Mn5W16mM8qKzh1p7sK1VugvaUWxc1fWoAh1feUvmnxuMCu",
  "key13": "54A1yfXgg5jbhTBs3UEUhWo4p862bpLdN8ay3T4DddrKqk7j4QK3oVcsYUDJgo6ZfV4awfpcUjAay3dUtKcJSzuZ",
  "key14": "2r5jmgrJxcCCJ1dEM8M2BNQ4aN5RRXt4JxD2f2EBHa3QTGxQ4wwbhiGu5i2heL2zG3WeegA3wSgwUc8toEFuLYPw",
  "key15": "3ir1b7mxLu1CQNibQbKewVPGJHiFA6YeYkRHfPogAoYjPbTUamtRMDFyrhfYiSj17qYPF58S66GMGGzZx2U5wd13",
  "key16": "2BrNXHaQGFZFxpyLyuQac6sbgbf8TbudUQ6EkJ61cv2tGR8znqBLse5szirthWRBiGfy5zddJTPDnRYzCeJ51qBM",
  "key17": "5tmLcKU6AtciZvY8nZwSaQVg57vAHdoaiEbzYJWDiJm6WqvzQx5oBVc1rKLNthiyJZpDYV21UXfVNTRtiVpqLjnU",
  "key18": "ihHNSMoGwwZMDZ2vofjg4wtFcVJFBrDm4UTZ2YJ1igpmHuYiBAbj4pEcJKrZaNmynijtcgd1ZotiaKDgeSDeSE4",
  "key19": "do46HoAZsyPYygp3cwTn1F7vaCprPnHgWZRM3LfHjsNr48KpRRMUq3GDqA572MbfT5yfiBSAczCogFviaJrH7j6",
  "key20": "32AYJdBkBCmwMCCQV8r5T8o3mNWECvrQviG7BLDhvgBUGJRM1vmqeHPxANKBoAxM6JWd5BXabx9i9r8G8uAhdsFC",
  "key21": "3JAVHDzBcDKuU1wMD5nQEWQsZVHLXsJ4LxR6dG62KdwSWgwEoyaMYyWVqQhfcbkPaXAWMUw8R3Ngj6CmasuW4mvY",
  "key22": "22ZF1GkmzknKWFDw2KMSgQKqveFzB4KynUrQ3pHfZ39CmfcEZEJ7qbH9gvWrBPixPPt8C1FnfxVYKWJhJ2PeNd6n",
  "key23": "2jUcGB15MAZEQzTn7zb6YLfTyzFAXKr74kP5dStSJfR8oX6nSWwtQB7RuesnqdTuk7zCLGqW7zHxFXa1CSX7qUcT",
  "key24": "39RhUq8vtm9stbRKR42dy8Lig2W9qPj1yRUrQev7pS2CJRaKcDnFpShrQwWyCRsgWuAwXRvvCDoRyRJjbYUEZwAR",
  "key25": "2WE2UyFhdg9EQDvEs6edPTFy9Y8NtUQwYyp7czxQ9k6HAiJs6iVXUohkPXZNFxvBxHkRmDghetBGTa694qp1sccx",
  "key26": "2Zth98LxuXSkANNLuvW3F4bBX88hqh94RBWuoM4MjQuYgbvi8rDPCyKf3Sm2wUd2xntjirPZcGdbuoeB3ED9kuDX",
  "key27": "59AMECLLbCjsoSv5Ydp5DrtKqJCUiFe9A67rx6nfjbJdewsAhgzSphdkxaGwdfFzGTr6XyjWLzVCkQZPE9HnPhte",
  "key28": "5VAE5zcnPUpgJH56x3djJXeo7woaUA1yHgW76oD7GmaQ4mi6JJZMA94F98eF5Kizo4pBdVZUkSjWDBefmAoCfD3r",
  "key29": "4Vfo9opG7F7Xj8F7c4pXhsXqEhtYAWx61U6KAazrgo4VJyAAi6cP68FCesvseUAjiLbm6cZTf8gRbXQnFdfsodzF",
  "key30": "3e42YFXDh1CgrfZU7Hp3rkBrSN3qMjd15WRa3haa5GZKiEnmsG5aEBBEY5JEvBKZ1ZipGPr5dKZZwKvEsACZ3cu9"
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
