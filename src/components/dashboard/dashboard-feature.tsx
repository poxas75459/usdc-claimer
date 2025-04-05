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
    "5KoAxzqAxUemcWBvcDMh3FA4JnKY8oS8hZDwYK96icJ3W95SeLZt4EenuaaVgQsZ7SUM51KpFVUP7C29Rd9YKiqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jvso7jX2c3q1Z3doSwrNyyNPzruTf5YAen8uEC71X4ML42gwMfmCUdMAiA5iD8LpRjX66ACgpC4ZEMudjF4FbAQ",
  "key1": "5m1Zp4HmwCBZ6gh7MqvZXoKD4vxAe72q3tG7VoGSvRc2XgdLK1u3Zu84Uup7m5H4VwVzRi4oXk6NGsK6PczFBd3b",
  "key2": "4hte7jNeJsEwkwt8tNPUgy6Vdkgo7tM1u8AvAUyL45pytF17UBLun3bWUy4SCsKhy2jCEzjB2Ux3gEw9CBwWz8xC",
  "key3": "2foYyxocbZSDZmkKW769aC6tfvbgb2oSPkLgJn7UNTxAWVW4i6fdLAiqBXoBEeMQ2rav5JPWN5Uo2MuysyjsSzsS",
  "key4": "5EBmWNGqSsAgrP5wYPQLsycy7gin8nCBBwyuts2M9Rpfu3f3ffPUmcNEr5yFcp6QqZQDdUQ2TS39FsS6PyWrRMbW",
  "key5": "55wjThqYpvmmDuayTRv4n5aTRgzJBwoAqyAk22zMx6JYUcFcyxPP6WZvR8T9bLGTKwHaCX79QYiKMhZkK5yJ65zx",
  "key6": "upSX82TH4c9eXe7zmL5x5xjjCUYc6YWki3R7CS7s3ow31GtKiQshcehWKvAbcXnsvCXCJNCg15j6WZmSHf6hR1J",
  "key7": "T62xFpoCCPgvcA9ziahb8cWDFvJKwKuJmhTRzJ9TYxRcb7Sgex73PjgJqasKw1sw8aUN7RgFSAJBPjSp6WNWYzq",
  "key8": "2JAXFhyXQtTzCLKpG5TLortjvWd6hTYgVdNNhrx6XwYxqsis51iSLS7nZKrrJDSfbypd7p6wV3GrHgnehGJCKxhW",
  "key9": "Wc7Z41YB6ytWM6ufhUy3wrq8rvfPw31Z8MHJ9aM9dZNhPFqUpPocL634q67p4xNM7WkewjYmj1igv3Ygw3ZLYjF",
  "key10": "5iMStMFfYX3DEkvor2Rp4eNzZu5cfwxzW9Qjg7vbuKvotAiivJsYpjo9KuCdfNDE3ZSQLsPoW4r3EWq3ynE6KTdp",
  "key11": "25iq7uY4smzwF5t38WHUro2Z84wf8b8evDohtQu2XE1zuVQrxKKWuXQRjqeQaztF48jsCBw4EnirneUbmkDWRzZS",
  "key12": "KfmSZ3QX4eYWjcA1wVsyGEneN41aimycLQhXtcGW5oqtQk9jwdNSCfevCXPK5Jfctms49RA8toVuB9u8NQUZiD8",
  "key13": "zk8qhHcBx23BbfUYRNbyms8X3Fhg7JHkgCz2Vp1sMKYAtgNGEKa1SejkvGpTXVTsVgq9vi9M3WJJvKYChXY5gZ6",
  "key14": "5LLMvK6PLKs63bc7APMP5BdSTnKEZQkxuj53QvCSAcDCTyzwXUaaKMXDKKuqxah4wuDUVrDxPFfyGpbMBS8e2tF9",
  "key15": "5yvcSiRZ9S6PqZuNMNC1ZAZCSRPWaCruwpVqSVxa8Aojv96LScJ7Y3DT4TQDkdkMmMZRYCXDSdX2s3f4dKR4BQy",
  "key16": "3YSjBzX5pHVquvfkUmEq2nmVT4DpeCZkS2hi3xgfLLjB1S7CDEDz1tBuhHMy13f7wVSE173dbGx5WZtYtrrDvcJb",
  "key17": "5TvmKcYT4KkJG9QnJ1grJ9zEufzRJCbCfri4SWXJYx2twfBFPcLinmM3ukbSi6qhHUdGCQEjcpMY3CrSQNgNuAsf",
  "key18": "2rLnNezTFoduYx5dDXadPrE6uVG8atdj3xGXiLsay7DmFRgbVZ55UyPpfLPiLT28aXLeU4iAhvwvqzKnQCeq3ugr",
  "key19": "5HJzhhwCJZ3yo4sKmGV4HaxK38Exy8zg3Uu6DaBu28ds86QhmL6AQbbx7NftWkGJhKpuQqVEUJCNUYv82AxovB9i",
  "key20": "3DdRhwBor4WeDV3gEx6jie8EJnbynm2K5ShxyJw8p512wdAbyfMRPhZ8bppp9d7QtKJxyyJsrB5kW4f5TFEoM5wa",
  "key21": "2V1SXuZiZWRBJMXs142hZuwD3KLh8GzQ5VucrGHRo6MNQWqdfHjDPXXhnJz53bFc8oYs8kEbuYgEVXqi7xLELxmU",
  "key22": "237bp3NXNM1HsouFw4R5U57oHN5nmTTyUtmJeTMLa47jeCeMEDud6y3v5RZ4rt5qV6Hi9yr8FRNDfHn4ZkBT32K3",
  "key23": "3VuFwJjiJhXhcwCA1m5sxXqkQFcLHtyG1YJZ1HemfzQr7RrpTttQ7UrJmUaCJMUdq7ZwEcKAd8gSYm2czEyRmera",
  "key24": "5t8KKe9S6ou7pdguse5oDLBdqnSgNiKUKfvJCiV4TXULhrxBA7hJM4Y37Kjs5LFdLArvk5zUXrkhJpijJZDKUPfD"
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
