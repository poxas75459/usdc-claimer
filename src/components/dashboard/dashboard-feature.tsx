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
    "4Tz7W8pPJk7yBtEKD4gAnBzc1ggfAmJrhaPvzDroyFFyQYDTvSw6Ge9wAYvMKEjToW27KSHXVg7hy6G8fUa2A22q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JRny6qPJK8nqWiCYd3xUM3sHYMKZLxKcsY7zya6rxN3Sfnj6wzmMLXjm7NND7TCuXf1CdcYYUjt6c9q2u9sK6HH",
  "key1": "3iAzdXNmNeSB9ejtX12kwoPSUNxY48aoq9qrH6nKsKKvHjSyN34JzWG2HWHVPZGnqHv1pAx6HDc4iJsvayjXnsvR",
  "key2": "4zCMo2BY2kqWHsp7ZvG1AZu6NsR2DFQTc6wQpyoBFsHZGidebPnPbJPULGvMk5gDVvghYZN5ASH2wzdGRvGZS3q7",
  "key3": "29kB7Vvj43fUki5ZxGdWsmD4XXxPinDJjXjZtc2Nc5kUV1nWyuL6rVchwVsUqc3CDBgQiyAfu6P622C1FSztqzMx",
  "key4": "3wNmfM6oi73kAnzVX8iJueFJkkU9ZDFrsask6GtVm9nwk1q3Ns2hxwbFyne9WoC4dDHBS4u1dUNkTZG7FBiiHPjt",
  "key5": "2uJqg88qdtgDtHrzUx1zgJKTE51V2Xa8aQsYQnKsFCtCh92xj6UBJbT1vMdggnksUoH7EiY7akoBXczi5AxhhDVt",
  "key6": "3VLR6r7tCRBCgGj33ZVVCmXj7JZ4nZhVUDoNzx2Zom5FJiZSx5MELk2ToYyRgcr5qaEK6vgDKzikGAqfwfh5qip6",
  "key7": "3E5hmwLKG3EzeNoWoRfFgFAZjh3isKbn3gZUKauk6Az8yh2H4qJ1LcPJzgqznLPDWnSWqvJv5XFTsTvD3x9UGwbq",
  "key8": "445QdN7ucEDRB83dgSic1maTqacVP7H2FKpZFTry9jGu113o6cpaT59PxTqGEwcZcEzWMQdjaQwUwQXNoWhJxcG2",
  "key9": "5K5sV3Z2LJgrUsVqRjqK1f8bWTSvjmNdtCR6Rqf7WqUkaC9P5o3vb8Kc6824pmwhtxfSfdKH96T6yJb6hdUw8RZx",
  "key10": "2o9KZWMhRXyzUg74fEYNFL9ikXRAmzsK5zuddp4RvuekDSGHhHCd73u2X3BgorgAF1xkb68u5TY1BUPXSE66MXdd",
  "key11": "5kbN1ZU6e1HyGNhWamPaTjySsUCSmuV2pvRmRprEDtfDL1M7VxYsKrrq37K5BEEch8NV8jxKux4ebpTgkzXjb1FL",
  "key12": "5BgBKN7a7UeU2dmz5hVSXEbG6TEiyZcnT9Bj2CQ51QHBucnRe2aNSntm2Aqgw499XMVZExTczoyx39aRKLxf1fJt",
  "key13": "4yF7KnacpTTCwz1NZ2VdkBkFCszFVvLgnqyaYJvA21b2s9DjCZ7MGoCiHnmuCqgNLwAjpuQGrvdhRtxcE9btKUC3",
  "key14": "3RJupP2eH9raoeSYsKABof4QSRJYuPtnGWy3yakz3RiyuK551zfG6C529wPJgQBrLWRLH2mLK1MP3FdUTWMpuCZi",
  "key15": "5c1Mvf6NxnWXAMYKdTZwcYYbb6MWY35Mi3mNqAoPr2zxNTQRRkgFgNnaZtpWktncDL5nRerkahsyMMAGrL6tYmpB",
  "key16": "2EPavfQAWGeJJcyHzpNk59pp6Y5EP4NBJrA5jqNKoJmnYMRUHvfu4CUwSiEAKqEnhNZ8ta2F6VRG9M7Lwstokt81",
  "key17": "4bME9ccPA4UehcewWDs96ywSH3L3eC29PUU6VeYeunqAz9MG7HDaUF2ma8mmEUb3P93iDe8SGArETLkqtfRYLFQh",
  "key18": "LqroLZr1ABcXdkDUFo452Sn9jTeA5UzCD8hTj3XHTUBrVwU4vUqmwmvmij5MAzf3ip7bnEpUTp26BKfJn41oSVk",
  "key19": "5p8GV4rG6J3yY35Hi7MjDVTcxSTc4gmjNYBfjWtZBpz4Pg9hyxPigSrBgyYkDJYNZbv74ywiD93xJmwgHLRpuq59",
  "key20": "utMVgGqua7hhjvyAjbhTftYptg8RZ7Xjc1UY7YDx78pYiNQf642kd9HPs8JGuKc2kxC9jvgcFFosXHebzCd3M2x",
  "key21": "57qsVg1dFQ8Ys5vpYT6dqHUaaGvD57K8wpESmvFRde9woW6DtAkG35352G8VMvzEzWFacDKk18Pt9NKoeC8kfVrx",
  "key22": "123aVfRftyindByLxo2dB9CicMAoDCy61KNvKGgaWdHyvgYdEXztar9LFycvEDBpi75JYwQrbc4xWNc8N4HygKYt",
  "key23": "2h448EwCd21BaKQdforZBgx8zTfen2UpnuDgkwdUBnm2BtmA7mcTYFfjPqLVwusyKa9q8yrsu6nca7HghDtCKBCc",
  "key24": "5E3B9fZqkAZPYPxZT7F1UKUSUkDexQbxWiRyLhiCBj17842QY7QLJybwbQXTXZ7NmCUUXbTQYMFnRiMcwchuX8Sn",
  "key25": "3P5CcvwZri262CWMxENVzkA1FK7UuprMD35CZdTcfjMGf5cg7yXpSbBo3iw1ietW88N6eMvqmmMB4QezXSVQ2yPK",
  "key26": "4yYUbsdWydYgpjrnzZbxaWMeBSCSdyVeht46ZmjMFzaQ5C2Qk8cBsYccAefkwsbWV5sd84S4VwUTz1wFRb12S5P3",
  "key27": "2qJGKxtqPXrCVTvi7Zc8wPP3FDUtHD4zG1WXWGt4n3SycHta2YVjpgD2q2sesUsoUZadAssGEc7Dfqs8okCUnqiP",
  "key28": "3TyPMysuQKcLUyG1pcmvk26Wmsk2JeszM35oeSkRhRBQnSPP9Etg9X4djc3dhsPj2vgU5janaeZdyhovwGQW8LAE",
  "key29": "2T3XX5QWbZEpLqbHNBAU4WxEL9x2V2JYySKpNNZAxVDirb3RPxJsp6fwqgxKhV2aXPpNfcYZAnvFkKh2AFEboDVD",
  "key30": "2eNwCeZcscVEbrqD8atRScRUgjGPzG7pjbfunbcQPhUpdtPMfwUjAW5WhqY79P5JtLzKk4E9vxzq5BXYJUKdp42k",
  "key31": "2dG2NLDxFyU4jR181cPnNco2qWEXnxks8VDMtUpNWTdmvVPczFj7RcEN6HFfFkNn7KuaDiRCXxPwL2yx2EgHZVJy"
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
