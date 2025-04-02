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
    "5HWH7siTV84quj6Bnjmbbyge5qQR4DPomKYiynzLM3kMhcDLYrXwXQLvhkiemWMHWhS6ud8RFFjFAyhnXUzxoMdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bMEcF2Ni5jL9sQJeaqSyTXVggpj2MobuWiyoTCU2rwcHEg78hpeK2XnbcQ3CAWnFtvTwkBbRPoCg15FUUJepWoh",
  "key1": "54RHK1LWkVctqswFL8G75Vudw8GjQ7oLeRBqnLzTz4skqkAuvH8ZFg1n7irmDf8BEs4WAykSsx6VvbS45jKQiLUv",
  "key2": "4QxUbB7eSQvBxiozKVbzaHz5pEM6ETtXpzVDaFdEEyfExq824JTh3ohQBo5etYbLLsroTuJXdr3Yp5LyqMmERzah",
  "key3": "4WJzYNvLurVQnoEuTkcrD3AMVA5JH4PnmyjaQsK2dNipAb8CmSaDZQZzN7S4NgxcbqJ8QnufqYHsq31gaXZ82uB",
  "key4": "5WniEfsaro8rS3w2LZaBGJTk98nqJUW6HArh2hVZCSLQYPmSK1xLvgDAjMNHddhcYAp5GWegRqz2Nq6H6b3fQBNf",
  "key5": "3cYyZZZP1hKQyhJ8J4ecNjzCgvBDr5LWhEGE1hWxCg2i98tjDvfndU5H2mmmi5onC4bxAMcPZ3i5bDRNwWVDcGoS",
  "key6": "2FsxQ4XzgT7Ph1mE5if71Qf3itCGFNPVTxP2bFYA7xNcdJ7owVT3wM6KkRfPbUXFUeLn4XzfDnFiWa1g8zNUSeDN",
  "key7": "3m8QyDgvJRH2zGxifUPcvmLQt29uD6ENzcEKXjr6ETbvUF8WUNTy6AaAE2vaW3NA8XYPt6Px2JbCT8Qmm2VkNnMX",
  "key8": "5iowcSbFyj6akoUQFP4UMLErkMMu2H7krZYANAszmzT4oBuTEF4pDoyU5taKcb7hd8v3zH84wLd13PbXgRLCMxcD",
  "key9": "4vaFgNSXMnJvjMrkqeokEBZwYSwDsa9dstcL3JjWTYqza5pdRdmuN4GEQD2QMTg5U55fdgJJwUWr5XZXP7894kaG",
  "key10": "4QCNjYJRY46HVxxLqy6nAK1jsCTcEZ3Y5jC6ckcfCzU5YAzjWt1AJ3eCx3ULu5LQUvf67V38zAaC27hqDkEcpc6X",
  "key11": "2YntxtQLifU6MMrQrLuEAF6fQU7uJb7RzHQCKFYfpNidLxGnPDTwEWLi2bcYWxiYaxBb58YrGaVfdsAxdw5MZz9B",
  "key12": "2bptSv6E7mpWcSWy967j524wtBF12ytMT85zoTUBZu7GqrJsDufHKpZhLDE3tiHHNRwKfwuLtD3Xy7ZyQWRFL8uA",
  "key13": "4pt8MLVwLSg4xioDFyLndE8greYVP4hmRjVtQHLjKzYLmL8rKHeLJ5qUufZHburmm49Y8r21y3HVAQoJ6dcL5Way",
  "key14": "rx413rmMxr9aCwG4d9bD4G4vXBDVWP1b3NxZbVh5Qwskj2yiaBF9Mm1em584kzriww6rhxNJMKocabXCcx1PQGe",
  "key15": "y4wbcLo3qsS9bheyPeRPkVCy4CipMizcztmHTtwnQBi7V2qcqBkTmpRGLdySmVayqWKyzrCs1RV3C46AKyrcBEz",
  "key16": "V6YWtSBgRpJNi4QqH3pq9s9hsEgAkLD4dbxu7pAfUpmK7Ua7Z6JCBjfcwPGUvXDPESsQTXjTtmwc9d85BkNugwK",
  "key17": "28u3iM1iLUJJAsK4gCJujQbJ8w4e3aXhhQ5iaDKdMQcHM3icikVkjuHQLsFea3hgt2GyLXqgjCdtixhLzt1njPgg",
  "key18": "3UaHgKuFVZi8uiroZTeg8sPsn21tE5fqVgtyDFrW3mDhFQWWC7wRrYXBQsL1Lv4C4TNa5HcA2hNMr3s3RWPYnnGd",
  "key19": "5aTAjUEi856DJ3aGQbzFK99G8v9wDb1jTLdQSS6bXtGP8WXeHrknxnsUdSzTuFe9DQDmZP1SSXP2nBmWDxdTfqAV",
  "key20": "5izwv8GL9jQm7U5MyrQH16v2NFhuikHbjxEwGyGDzcMn5Yr2Y4vyR3Q3Xovcmu7pd7R5QGHVEDXX9f9dEDFVo62E",
  "key21": "565zz4uA58vPesCXsADK9CiAFNM4nEUvXisvLWLRxme4RCzC7U27otD4WWxwPvt2MEcTL8DMWuLtFAro9dVMVjaa",
  "key22": "14xnHLKCYCNUWZmrRPFEFXNYzErN8T1jH8oJULrVWxTWy6RdfPajzTS5f6Hnq2XFsizKaoXsBsugTMsXsisjBUH",
  "key23": "MBjM2vm8DQFqAnNJ79LCt32JZmq8cmbFZZ5b9MTooPczCQHCUEEiiEYgfPwrz7LLHzmXuZNyBKyqhG9rze7zqsj",
  "key24": "4J3TQfEpj6g2w5faYTqPWXzhsMgRaSgU6xnGjFRf9hM7Rk9yLnBNtaeWkmqpnKgEuMfN68ver8jCAx5Pp5PyRA68",
  "key25": "29VtepWsuPVgiSLHwcXi8k1TPQmy5btgQiwfqJRiXKptQSwwFEYgLyPo4HSixcGo4iNdi1SyRuhudwxgcVRnmK8p",
  "key26": "3E2q7QdtJoiiayfpXM9TqSwzoyjV5cGuL6aVrYgpBiK12RF6g8wty49BSHcE9xg93FgSco3YYSdGSNSCadfe87nF",
  "key27": "3AZWU6RqzzqaTZy3EczatqTQHdZNkis9ugN2KR3asu76fLZnqZxAV2hSvBVHPinj6J3AdvBfjfrXh9N9AANjp9yh",
  "key28": "oVSJv4yJu3camfn8GxLdW7o7k7YrNVSRVKQqB7SxCnDBBL7vVvbPNsLPdCeeAfYeFzpJNa3tynN5QJwNXTedDnx",
  "key29": "3iz7XS16SWyg3BHiyY9t8r3dZJXgvxVK7NVribxiEGcbcT79ErgitXHn7NFkXomFYGEzvQXZ9qrM73VzSTdRSwYT",
  "key30": "5shno2GibpzZnHyrRiW7RgsFt8ry1ChM3UCy5dUQeek9yj7qwDEz81dVFn2H7k2VCnWLThp4qyMmW6WLF86gKjuV",
  "key31": "4BdW88yTKMFupYCdLhPX1NRrGeET1B27mzcyQrHaTWLnkQ9JMovQcyxyxKxBtKMePqockxkdFuucNAtKTSAFQLAF",
  "key32": "32sSPPfMLoYhARkeuH4CgSCoRjxgjSg2E18dzjfX2idiBpUVPkq7NuSexVg5o3mtryohaLMbviHkEFMnY3CycWor"
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
