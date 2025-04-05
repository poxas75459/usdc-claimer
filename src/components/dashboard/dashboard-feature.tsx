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
    "2wxnE7CMbEQXA8ytTzLxm7xGviSyuCcNrjTnUv6zZzzeFQsztxkSyoyKKuF4w8K7XetwmCCbF29CUmWMMA4FKiNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MTS1WUogTvzryESCynHGsczHgJq8z7ERkjTLxcbjTvzrHznU7nnKimEt7TTkYLph9LDdDW6Tu7BtSUpWwed5r1r",
  "key1": "3XK48bhPQvCx8oxHLW9ECKXtGAY4gg6uZpcFe9BegdcaYEivQHxu7aEXMAjoTqxZ7yaZfXQ2aQVgV8Axknnmu4rr",
  "key2": "3EcVd7Fmj5dy3P71evoSTQZtGhWfHX94gAJrhNLWujBfu6xX5qXAEsFSFTgDXybLDcwm3ginmWVKDxWDSZRf86kt",
  "key3": "sU2R4wJ5MzPru8ooAQwXH8SVJCpQp4HLhfdnrRSWN22pLQZNzYMh7ZnTTb4v3VcQmE5FXRW9cCY3Vz7eAcoxXYA",
  "key4": "5DAS81LabSh69MfKFSkkUP1JoaDoiqwiUnMLGdQadkfigdEXMu7YaxNXxdtStoZWXeJ1j196Z4xHvr2A5toSz9Sm",
  "key5": "4SHDGzGYDCHLdM4V9a5wkDhUHQLgjbDmhk4MN2G7tj9J9ArY2knRARWvKvPmHRsmtSPPTguqkT1y26hmcNQ4ufZr",
  "key6": "4KqpCDuBWuUTxtb9aBLT53PM3qcUKd51r1wkNXnuDh5H5D7tVrSrQqimdWJ6DtiSRXD5c23uBexprKiruFnMURf8",
  "key7": "2vbkQcL5MC1KM2bu66sLhrFTnV61dUwabVSeGLZHForTcFgExsgYiQwLemdo1QEUc4shm5HHjrhnKfPQMUM82qYo",
  "key8": "5s4jh1faMBx9C7bfEAWQi7bKv4eUDeS6WRqivL19JfsRkftpq9k1qMgq3M32oSND5h7T8CkprnYcNBAwr2zsVDEZ",
  "key9": "3w6A47hcSGAu3YzBqEaHrK61Zd4gzchHXfpTgmsvdiPyMvVcTc8cvNwY4QbMGgxPz5jgsmwYkQCRsrUTYxQdgqat",
  "key10": "4b5xqynYtGaJi2TeNx1BbspCx2TsHN9PchgBda8z6jGgyoVPTDf5YJEqNdg9yvzFcXaBeECXkkWieVWxQGRh3s6F",
  "key11": "5dTawu3EhkvW3UHUZj1wPK1KYtdr2hyvPXWLob28mNjoDhkdT9o3QtuD4aLxQDb9JSaxfvekRJN9FRP33H4EZQUx",
  "key12": "4xoLWUH6eMSDrKAdNWUTZoSTwjwnHjjiN9MgJYn1dCtE6cnEKpj5NyLxP9wb4Qa9ZoSy8nMgMgG6J4WLPT5JJyuP",
  "key13": "4hA5tNCmdhd2ByYpEgJDVnXWqLJwqYupYXDr2gzJkgtsgWPdPBB3zBRJKUeAZsa6ExXBC2r5Ss746FPktFG4DZCQ",
  "key14": "2AqeSd3c6MUjFGfBTX6oVhdzyzuxc7YJNSsqLE6SjgcdsssnNwXimnN5HAo3ruUXjwjmstX59sXSCk3h7TnKMvuM",
  "key15": "4rguAduXnpkV24dDWUXaDYML2KzAP1gDXRiA6ka4U8Bm6LQZX28wM7bbpCnqGJbRgZ1gnWfsYvufu7Zb8zHU5JQy",
  "key16": "5qbSg1aFmzuuPXCmeYmAmCbTzn27Ex9d8fBy5Znt8YRP78Lh35sVyAhQi3RzDFX7GoVQEBrMC12FPFqVnLBruRa5",
  "key17": "2zvjnPC4MYWPzpKVzgrRY4aMEkCRPu2bx6jLMQDE9vSV755qVGUDTcubzVzMKwbBVQSrpVRDK8y7kFRnQxxwgtrL",
  "key18": "5AgXjwZgYZEv3NQCXKGRVQBQ9as2Y52qmp2itSfmrmhbdMQGqr2BYqqniJwYdBX8dradPAXgdRQ4kQXJQ7SRHHkY",
  "key19": "2BCt7ZuFgpzEK8MQdYgRNm4FZgFAkB1feAh288pFL4WoCPCGF1GgPFCmP2pSdMEais4vzL9s89j9XxrFj8QgQypP",
  "key20": "JoPXDfrBZpsvd8wG3guCLSH6rFnMc1PHFga1HSgAGqQ28N3jnX38K98aFEmRyWk6CQPKc58nYKAz46u6a6wBWKG",
  "key21": "3K7XHPokcTbfbvD5haozpwYm3KVXSpHEgoLGBjDCWB3wCh3kLzHSAvYxJpwYLoKSdCMPm64UNsvDoQNZC5YZvVn4",
  "key22": "MLcDNp3Suxua9FoHiUVSgcgedEVhUXScWBkYmZ2cAQgBSA9VcEKhQWSKSs6mKHEsa4LnANyjetHvgG3m7ZtbLmM",
  "key23": "s2EUxExtbaqxiV2zpFYDnR6U9VvH6xUXhdngsjUesyUP4ekvWeHA7dobzyJcUEiR82H1ytEw4oF2L2gzCN8fupk",
  "key24": "4paUTt6HmiivnPnT1ZAkCSa47yu7CADF3mH9YbmHvuNUCrzDr8CpM93h2efT2JR9huNnGskQMKncjBp8Kw1S3PTo",
  "key25": "5YL7KkPYhtzwC9qn1SsMj6G3NU1cSZeihyLsMTiLtssegP1gHT7B2MVJbaUwW2zRXxXHSorgdSi8HHm1zJRQwzFL",
  "key26": "5miQXGUeAERErBBhespJdhY9AvajnQuNJ9VCVWx5W9FknM7LuuVrpdzAos1J3qNDVYGxa2D1j64JgTJHnsWtWZFi",
  "key27": "3TYvJPjQaqr7GCeuddp46VVe4ZLGLF4TfMBRpHp89A3z2ReHUadFhk2EQkSG9pfKP8NyHdJT3VaiP2uoUs7YX6hW",
  "key28": "3JrfzrMFu22NVjS3fELiDTzo77yvXUfwTjbUZjZDLAGznjPb1A4xTKSYhNhTXurE73nyQCU17mWt4R2TiLMCteK4",
  "key29": "2Qeb8CuoryFaHAzxQHdDeuMJBBAUk8n2VMS9FNwaGTevrzaKuJinnBuhUzp287LV5CULUsgFvudmfPvAkBpSPqwu",
  "key30": "24BtcQ6DWXhzSWTUajfCkAMnmhQpA7apQBqDxUt8tGnRuVX157gMwSiuk3Ci54nV9UZDoSusAoSeFGPuwKbHyWQM",
  "key31": "2gtrQfgxAoFkL9R2JePqyvCQsBgkwYMYdqz4oKn6ArGmiSFFNJSYNNRicDkYB2jn7SeJe5W6LVWhrvNCJ4c7Bk8g",
  "key32": "67C713tzvJXZSEreqGEDLphWuMviKgyf59xLUbtWk4fcQXHqv1PPYfmCZHqon62fjJmLbDZfyWFsUtwUVm3rMzRA",
  "key33": "4xMwntjqhqQ2UfvM2vpQyLjM7S1KEjqAvtT6B1yMXNQLybt8D6bxfxauV3ZViB4L3KNFaqVPQEHVnGv5uhqoytxD",
  "key34": "aVRy7sjeUB9zssHh1MSFrA7g9Tju7mAHTFzhQwemcUctkT6A6QzzZBsXRr8fU48g9HENvL8ivrpQCyMXSsW1Bkp",
  "key35": "4AJXcRT8k8EG6tJq8TXLR1qPxozMDCG6qWZJhAk5UKBCUiDHPjBAWoDLx9xrNP2EizPJSqJHtUdkKaBooEGyBjK7",
  "key36": "2H48ADwZ7SvZNLZSC8be6jt7R9jznqjm7GuQXfv3uGD34UHJAWQAtc4vvomh1rkTV3XBHEGmTzMShyQikJCCWR6P",
  "key37": "23Fw8CUFHRtyLDrxD4RyT2Fiy46cqLceZnmYbn9ddS7qd5EN7TV3cnWewqwNySWbkswexxhKYWKi2wzyLheiQftk"
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
