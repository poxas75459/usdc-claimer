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
    "4Zz1irZAoqWm5uRGBtT83MT1CB45YKEhkQNuZUaPBgrRx5KLvz9p875Vcb9DPdLHeE6dRHYf9cVCnBgK6Kc4bxXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N14L26iEGvyvbdwzgBqXy4uFCwTCxKnsw9idEGD55ec9WRv6RXKgfmrfExpbCExdU8UJEkQXKrANJYzKKT8b1aC",
  "key1": "2RYEmdYUMwd39YFm436Ryk8i4qCqhxXSKwLg4X4awaw2TGMD39Dofe14eXfB2SGYUDnccYBVELQyiKDqX5rC1q3A",
  "key2": "4r9N9RHRCPrCW7W9SHfSuyAqtt9F9StEjnd3zcDm9dn9hKRfhzpm6aQnHDdmpy6i6L1foMmJny3zFAkGrwZquK8w",
  "key3": "9ag3EzkRspfhNx86d1Stiqnjbf8Ww3RJFpccFtuCgc6GVMWN3JLf7YT1BxtWtmWEwnjYSUAL75L4oawBW7J6oom",
  "key4": "65LYtLPMXm5sGUpow6Ktq7TrT7N1bqQnvKtwffS9uVPzkJfSVs5E6rAwx5qNXPYFrbu1viFoxi5UXNARpcv63RFj",
  "key5": "4WN6RpUkGQrjzWhjfCfwFKqALWDCGfro8XTdkfKRk8RRKqBEh5JWPZUJT8f1o777cZULsfZy1UrMW53bGLS2U8AB",
  "key6": "3db72PjS48Uu2TxfRY5J3iYMKNjvxnfeDgRkbEx4i9QtwGgHxLiEukbpGp66DZmfrTjUsRkimxxAPmdiP6MZuYZx",
  "key7": "2cUGyFcTQqMqzP6pNzMzUep4puzW3VwhDcVFZjaDGgoHsvXz62F6hzQYms4D7gycstybTiEojyk73bAWYonRYgQB",
  "key8": "5rpesMBi2j2trcGhHiHgQsHnP72mv534hsE4xJemMrjyLsfr8X9oYwhdsUb31sFMA4fwy2f1RoSNk1MQBYMTjGdD",
  "key9": "k6uqp4Vm7T7iUJkEC67AvWv1Q4LLKm9FqXVV7JEfs4YhGg23Mb3pvkZFp1ssqYrDnf2Cn7KEV1oAH3mDhAUB8Cm",
  "key10": "5gKov5LJVfcsnQk5RV9cB5Sd9JaJ792Yi6xEPTenwXdLpeSeTyB7hY2kKeUkY1y2bMSjabTnJuNCsGMKTWGpzLnP",
  "key11": "5h4rm1Rzf5satgaVGshkfYoqZ6RXT9nUwgEAvKQLZbx7UgtAccoM7DiJ5mDSJ3eziynSoRc1MX1EhQfR7jU6fsDa",
  "key12": "3CU7iCUo23bH23zAdZphRbpujePa11ijP5P7dJ3KjBvXmJG99ZmNv7VCzki3ThiRXP6Qnawd8KGF4QEgxG4EGFnM",
  "key13": "2YubQRddwSk5v7MnupRde3EPRHAWh9r3ZahFfZmDyY5k5xywALB1kjCNA7i8LZ2WX3AxR2XQiX8poUvbPLp7qMiQ",
  "key14": "4Tkbc5poRxpRRLKWpWLzwpGNobQYLoj6qieb48YakxBinD39DfREBgLEm49c1UWdmHLQn5KnmS7v6Lg8t6Cv4szY",
  "key15": "TN8gn3mH8idAKxsoB4gufM4jGhbPHCFx8MzPrgYJiD3E14Q29b1WPc3tFJEhMHqVXqygfNnEv3WsVdVTr9VvjrD",
  "key16": "3erCerVzTM48zPZBkJd5kVkFNdV3NCYAZ88CGzNQb1g74QR1Er4cVEot7tPgmbWg3jwDKfCnxUcyhWCV9X1Q8wDF",
  "key17": "3r6J7BqRHoU7QRP4kBNv3rmmNwjkDeBt6jG7CBp4NfACqMDSLsJLui4jtC5gx17dSUhaBvGcT8Cfc7UN7QLC4ain",
  "key18": "UgjCafMDqzaSDXbqba7amQ7D6ztnACtDtdqzaN5oKX1dLLZpFuhWByxq67XevK5HqQpqdvC1Sibb7Ca9sV269k2",
  "key19": "4iKgJDu9j2y12pbwEZT7vVT2TdAYpCPzPi7j6GB8bemXxkhtLdpx98PWfb21H3mABtVBwytQgwqG1pEBho6nn15b",
  "key20": "zUYgnkmYZJx2VVeQdJkaW7ZGee1GLEwRkNjPH814xQ3wEvESMW6wQnYJ54mFAWRr9ttjcwCUsHs1EryVRh92cKA",
  "key21": "5ZMrppK52SbUHFAmqE1sz4fyCAdBS2ZjqCfTf4nBVFpB9sX5txR5xTZvN3Nwy2hoEgXnA4FZKrC6z9Tb7dsUUGzH",
  "key22": "3vpqyKDyoamvuY8pH4513HXQ9fLvHBDjg4dersLDH4cLJcVSfHco3z4mpnbeYMaEhXv15oS3nkSYERjBAFMC9GLz",
  "key23": "3J1rm9AJNvBZcVTcnUETcLDeZVDgz3BM2yfjntAoGyM7o8PUKLyZB6gJEFNxxNVF4i6VDP3dgSVkFbqFY56vexbU",
  "key24": "smtwHXJ4Fo11FJWxsVKub8xbmN4pn9JHCa1Faf7brPZ1WgNYS6HxAUvanzvy84vJv1iWwTB1phHX89Yoc3Gagnv",
  "key25": "SUqgC62WGA4Sbk7PNSat4ohqQiS37AHy9uSMAp1rhEqtvVeuxx6Cc5sGPfcDvv6iJVuRbzsWZhx9JUf8XmBMc7B",
  "key26": "4GHvFVHbCirNim6CN1E4wUJLgV2VHzenLCT6DHubXWtbF9YeFiGBETHPcBVHG1KKc73St33i3pxiUNdFVnTp474i",
  "key27": "428DE8JZuGZ76BvKSFPbQsk92dDQokBnRk7y7TUw8oWjUDEMPyEnddwdPEGjv5A5y5cQ9fLc3fyDwKE88xTkqvcc",
  "key28": "Vrk3WHVBFEGCL86AQjddjcHQgoCFf2oacC6VMLtSktxLZxHLT3PNVwWr7daGswUX2pWYM4hfUGqBwPNP6Hy1otb",
  "key29": "JYJddyt8XsbWA37zmBK5SQwCfCkfmYW6LAdQv6dVM6AUTyfM9nEfQmkmsBBxSMkGMpuZT4bAnKxzQ1ofqzgBz2M",
  "key30": "3PiF4DtvD622q9seKu4NUXN8DGbyRXFp4QNvfPRxwPX3PDhLbyGSEvr8uzzwsTcjBvCPbXvyGR3fiAzGxtTVUhE4",
  "key31": "5GhYmVqVoYcLKtDPMdm3a2hHp95rLALwLEDJbEhGv99MvLziGhwSPsKwEwNavdKNK5VqBHnbaCJnsgASzgqHGofZ",
  "key32": "2iHDnAM4EahB1T2mentc6mrGgLHpPoYaHYASDTc13KH5eQs9gRaqCsUpEDjBMgcS2YiroRt4aUnWJikQhCj1rTh5",
  "key33": "3sVRpyHqaVuN9NzeH4vknrCDffNpgezXP8gMHEazoiYefQcArxEQEHQsrZgRLZbmKUBKh2Uc21Cq2TA4XjTkaEdB",
  "key34": "22QiNL6bogsBoQEm6cxPGqCFdCkBnANZJyHjfk6CDvM2M3e3LdE4Hs5nuA6yJM9jzjoWTLyxiABrZ95StxZkHVx8"
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
