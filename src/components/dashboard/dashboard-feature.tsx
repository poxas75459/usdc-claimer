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
    "2xZ1c7Cw1UVLjGmfMCKG9tsP9hyBWyxUxcwRUkY1Aoa6R8LdyQqbGGQ8m38gUdFdo7rWREn7AZoxABZqrXckc5te"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ewpgxDEja9MR3nDa6ZYEKg6r3xReA7hc9tbtgxKDTxNnwpQPFZu9Po6dne9WGjvCaMLz3qgpC7s6hR4MSi7fzJo",
  "key1": "2nJQd1perJL5TnFRYGLogWEV5Tq7JV7ypehuy4wTrkztZdJrfxMNNZZwCvcpuPogN3z6TR3XnBAQ6iq1E92NvY6g",
  "key2": "3FY5dVP322LafXZndCiYZrj7YkHE5NbkoQE1mQYj8FihvLHFe56RyBDjU8SwvJc9dBZBjKu4CKzUcdjpKwVoXfHf",
  "key3": "4ZywqAGcCjpt3piXXKcdvSrbDHtjRKF6PgrEhRfQRY8nQSgAha2d3AeAHbUh1hZD52zPLmyuz7mbdGvdaKqtwwCN",
  "key4": "4XdybMHPxT8Nj8S38K8kBqQT62uF7TASr1tsixjhwtA7KDrv4zVwaEAMtBE5Lo1FGfcmSvcJzxqfWBcTSPA3rDR3",
  "key5": "3dDgysTDqVzNsXukKzDDKSKyDBTEr6p6Ak7LYk3ALqwyUPaEgVPpSLecLU3r32qEUVfc8VSzsAb55F31E2e5LTyo",
  "key6": "2DA47rr8s4wKEpcbPz2srSV1eJ8mQ7PBfQZfu2sNB8nyUAmTaiwRAUwD14ZtsrTScEcMUPnSLWdq9LNNuWpGvSWP",
  "key7": "iz8HHsTiMCaPfv5cJ1q5aEQTSkTY6mQFGv4frpBEJziwXJYFRrp1JoEkF9GPU35pK2bczYKSVDp882opJaaG1mF",
  "key8": "3PYjRsohmvdNizivwroDdhMHGtFDLLeoHBgZNatuUwjckAtZwhQNmrZJqiiTPr7wtLFeXqJLcGjUaEKtXqp3tJse",
  "key9": "31FuwtZhHnnrKWwNMST8LG63qVvju5JHRpjHNwLJBApTShR5i6YTy25QEB3qRcCwEcSsghJjWKPRm5VArhjjD9v2",
  "key10": "3P9gFxcaNLXJzfuoKoCTG6QA9331VdwSZHu58roVB9hqBekoJor3tvHDKQpw724GDAf8fMyk6Aosknq2Q6LducnG",
  "key11": "2EpC9D7cnFhhwqowS4wTUkaR3cJbEzmemrgRLy1j8zTbqmYS1fh3phKKmTP4SXH6LGxnrZ82NMboe1EHiz6QVesB",
  "key12": "Q6wFrweKaWnUUBcZrMt4C1ivn352BL95prqVmoZAeCRfwLd26YcUYpmaCRNwWMAGcrCBfH5LRc63otSYqrg7BhJ",
  "key13": "4TtHt7R2UruBJcDKehTQW42h8gkubeu584DLRNzoibRodteE1JcC7uvADSMnz7tADfJSADhfi4EumtbcvrGhvUyW",
  "key14": "4yKzx2zyNqZD4bZmMhwvWiikXwnu9FiUws47w2Vz2UFbngEYXbX27vE7fG5jy3XsjjCbKR9AQAXXd7FnrmPMDhW9",
  "key15": "3ntYxEHH9xMf25o1YQ9bmpVRBMWdvZzaqpwUPPHmTTWEsFVUaF1Gkih99MEFezMammCFcHaBxGQ1BYXMijDUFNMk",
  "key16": "pZs5gfzJB3NdCJ8GEUXi7z2U2bDcRssbnvowJr7KoM4pKHckLUZfyeCRbgxDbVHFLKtphVCKibbkmULt3GAxToX",
  "key17": "3EdPZ1XoXX166n6ypENi341ow7LxdLWwQD751hL9ouMRxzQoYgyVHsADQFomKFEung6qMJuTJG8KszW9aVZqwrqu",
  "key18": "3depnxYeSRVQ6AxDpP6vG36dWeec2dVZj5KHkB27wfsK64M1Tpn3sS2BRBo5tcJT8ZJZKNdJHQNKTAJYAz2Lp88v",
  "key19": "5ZQc5vsawnWJyxrVn5Q1JNbvgy8zffcnRhBqAKjxKzr5BmUmLvZxaJN1L2Gg6zt1akpzoAiTyHGDbnRwrrnBAswj",
  "key20": "44EtamXXEhizHVXxXJTbsWRAtYTWW8RcPZWUZKo1tGciPZWJ2zGpuPgnQvqM3RfQD9xrvE2kwsYf5SBZ1ftuY2kL",
  "key21": "4daFQTw1YWvhAo7N4USk2yYeTLDfjj6hi8z8Zrp6fwVjiN1ykfd4P9cvYcZeH3r92ZP2KEV1wz92bJGecyYs22b7",
  "key22": "4Ho2cyKo6sBag4GrCPhPLZBwYCirXT2mdYN7wbw6m4RdFr7gdejQvjFhUnqJ3DGFqnAXqRfvyGzRxubhZBpKxrzo",
  "key23": "3F3NDtffJTVwurx6u5Lrcqw7CpFC5AbhmWeqD8wMY71Eoh1npjjAQurc1ca9syetT7ANZSufVeQUVSkx7a65Twsd",
  "key24": "sWU9bqapKSMRvdmeHaqLLSbfMS3j4cP21n2WZxczcSGAagheR4YFeCqKwxdZXnDcWsdCM6dn6Bywodfw1Vmhbsg"
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
