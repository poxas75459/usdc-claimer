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
    "4vwrb27DZnUS17pcj7B46oztpVHjukX7oTprAkR9i1rUyEjFXFQaFvfTxtYBxfHUEaqDVS5477B6FgJQf5w4439Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UmhQUKgnb7CKUHzykeuAWXvQrEgvNisccM3CWYhyPGzRWVn1zCJkWco5bgYExYNHKxKzGDvzmYhJcd9zdqmXSZE",
  "key1": "47id3d6LdPMRKEM1njnqdk7hXs1bhxCbxQNF5J8E8nzWXovG2t8gZjRwE7mfbsmxeq5LKBN4JuW9YiVSVwecnp37",
  "key2": "5kHvNBKXFFAS54n5Tk5wYxCqQ251qZMGhLgQKERv2zHLSAriX1qQvmTbvjVCpJsBHYjodiT9sRM9zfNfG2hpMwGM",
  "key3": "EeLQN6jB5j56cJnMdfbvb684TJFakdSdt2TNkJL9y6PL9GA86MPmFegBUawvaVqjYQw6U5v33JansPA4fV2EKSG",
  "key4": "5eGMGzwCmTG9i8Bqi5Mm8bnNrYzK1T9FRvjKyaKdzmxrhqw9Y4ZK9pcxKs7AG3RRqn1KZf3VjyPr3T5LouwJ4zcQ",
  "key5": "4V2Bu6W3QfWhEHSnZS99ctxm4dU6NS4bUxYs4ebsJkYfE1PQwrpHUe9egvZMU9BPtvvzMqLcjQ6B7dDMQf5proxE",
  "key6": "2GYbCrbFZzLe3qFh6Y3pqTP7vJ4BYkjtLbcTjzeDtpeFK4mu8PEjZwoLBYhTHat1MKYKYRU6KdcWFGrqVh1yHM4C",
  "key7": "oZiUKGfdXd7YasAkBhCgEqNmHX9ACed6V3qWDTB9kGXymMoqB2aKfxMCU3xNPibfSdthPhYz1FBGgqv32rNWJ5D",
  "key8": "2qfJVjvTAQv4bxZNan9zDKfFGwKrbMUQ22H8hq68mjRVaiW1u5iUAkSGSYy66icDby1GJWf5HsHPBRPVTwYu3RHY",
  "key9": "4pKtoQ14V8nriUdDU3CUQxWW1Pghf6VFqpzipnE5Xp4Bi71ZxPLvDwL2z9xR7j7bSi6ELpZcmC1v9Z2aUd5PXGgp",
  "key10": "58r1xj2bynpqKovi42EqBeek3yyj9LewmLgLH3xegY4iiBbyUNefZmhQfqmTijMqMuG49PQ5B5hVeEE2Bzg4y32j",
  "key11": "5aXmcngLYbar9JAaCCGwyZKJjAxmkZB25y7d22T2Dnm6DL3RMtc94xLNc9x1jZThmAHGSTYESQhU9gUPWrShv9Ys",
  "key12": "2hYbLyhbEJi2bYyuHagtVhd6aFXWgXqWqrNeH4ypbePNQMJgKhU83Z5YXLZ9zfusu86rDpJ4XP6Sp9MX8Q79iRyR",
  "key13": "2tCaJ6dxPEtfUSrKC73MT6EycxyEF16RoMQJP62CnaTXuwgWvKT88wbH86Yiumrsf5fFrtgoSvaQbUXtB7HUNMwP",
  "key14": "22Eyn1VpbPR91FDaX3qtmq3dajNQErt7sNH55EShTNrrYDeaAi2D9mJzbFFCbHcXfYtRtCfL8nye2V4jXqRcyyxr",
  "key15": "3zxRRjrfRVaP3VZZFJRXAcp1BZp3dpdxnhrwePiAD172o2EbASbRDu7CcKrWpvtzvjM7bnMA79Hnp5doJJaS2T7e",
  "key16": "2PXFLZ2US81noH4VogjpZpZds1W9emd452WX7TU9vxEsPgVySvV1EsYqRZnUW7hCrQA3D2MyRU8XQn7c7Sq73JVY",
  "key17": "5YTLWisJ7E5AvBGQGBVvZmgmP17F1dWBfyzF8FcD43Sz5ByVJDGD79w468Ut26PUWFT2rAoqxN3kH6HYuHNTRKBT",
  "key18": "4EnT8ixBVjb7y5EJZSX5ytcp6gBPKjrHayMfuvtuD97JdBnBvJdkKd8RsE3K1A825DxaBkfh4XLMQCznk4cMq2GM",
  "key19": "2H3zbijmgH29SFHPWnjp1WzNykw5jjMvitSBeGBzFGRa4G7R2qJMnAo2mWYAXYQuGcA9NaDFVgwcSoxx56inb36v",
  "key20": "5HKwyqGpe9pwjmys6s2UeZcmkm4QAuZURGBopBd8JYNnaYs3Mr7QkWYQYuC4LLndcYbmWisQrYjkvG9GAtL1JYcw",
  "key21": "4ALj1yoX1U2UYp3saAYFtmuuGLNnLxCcLbJnyXkGvkacrG7QiQUswRkPXA4Wk6r6bUWGoVbbEH1Q2kHUuf1szAE9",
  "key22": "49SpebWpKpRUt9TBnKFGcPzUXp5iuE94Zyx8Ki5GkSR6auXVaGQqUtGMczAQYnZkz1u2h6ye3Wdb3nqu1zE6tSu5",
  "key23": "46xigPpgArpyB37X1KuhsoaRsQ1cmni1idF6XBjN5SivNeUdY4UAb95inm7BQRFn8BNdyhig6KJxqVx1Gr4ywEMi",
  "key24": "3VrkBR8KXkvJaT8gwnsBbaev2aCzqX7Ph8e8Ve2eeizQXyQcsW4Xb5BSiWAg9hQoDDBLdnTy7mp7sB1DNRncLM9D",
  "key25": "KpQBAdDzMyFv5Ws5nw1DQcdAPVXHHWQQCCxLofgpDD5TmWMDvcreRu1FSTv8qSUGYkjqfc8MPZfKzETjBmqBhn5",
  "key26": "46heGZihj2MP2c9chp3SnkRxQds3T1MAwzaJJueLYVjbSDxaxknnZD4TvcER9DKFFJWctHXHT5h5f4i3xE4NGJpU",
  "key27": "44psSM9SkPHTJSQumkXjSBnrWrxhPjtWB38NkDBmUZfCk6DcJ4qB7u8LespuYx5eV1nX4pzxYhqTBJSH9A1PWQ7f",
  "key28": "57f6LxViEAjchMMK9zrog1FBQPgHCBvnpmHZopPcjB7xsjaBPxtuXqimrEdToCZJToCuqztziwWMnhHuKDK2Cu3c",
  "key29": "4vVcBxk6dH2rHhyKuLJ2KKMNq5y4wyRygmMxuvzfUiCidUYNiiAJPfu6JpWUyhnGw2jtePRKL95Wope1Wk4jqpqv",
  "key30": "2Qrz2Qvs5s4N1r7Q7zPUNcCdqtwkxDC7RFPJqBc5pYxHpuwwkCUgZYYyAGwMjK3k4CqFLxrVX8tT4MogEh92heAf",
  "key31": "yeoLR5gfJkjmCbYEUU3iP6ijjrUWpXhivu5dmM7rhmjoC61g3SKdsQvbjWCD8V8Tdu8wgnCSc6GwT1YgWPPqnFC",
  "key32": "5csBz7pE1guYZiQTfVhUr4r6f2uPvEY3HTwvFnQ1u2feTc6SU81rWPP9wcYgVrXsrZLL4TGmYK7pYjaBDDYKom1r",
  "key33": "AdS7xsAURcNQoL2RTq3TPgtvNZv3Cv58rCXsozooniXtoDgQCMCDKs5zbqGH3GPWtrmR5jAzjRu4grpSBb4VzTq",
  "key34": "2gowqKmQrAUfaeBvN5s5Yf6U9dv5FYeXC2p7wPiK2GqNgiJy3CN9EetkbjZft2gFjDrsFNdgr8ZJxW9iH7ca8w2S",
  "key35": "5kxxGB8EDemfuhjDqaAcYVJ4btZmBKAZi592TErmzZzR4E1CBuC9KUFRXZQEJ4GUsCJeE9UPmBENwtg1JswaSJcN",
  "key36": "3H9AZgJBBsp4Qs9KHbeVUPcnf1SHyqErAT7N2DB5WEji2Hd7Tdqz8q24Rn8oosBD8Zfd42NAoWpSyzYwqkr3D6XR",
  "key37": "36pqTUcdWWbEhwi2TJQXpM1SasRGhWcqWiM8Z9VFu8Hz41NqYP415YyqbsuXM52vWyVxnvDFbz4aXq8txydJX11o",
  "key38": "5mNksRBFXad27dNHj9gR4tsgRxfVhbV1QVRs5adzFBT8xLWdGm8WhAPZLzkM4eY3gqoM8pbcnAXWjcNkeaKozoGD",
  "key39": "5k62n8P41hMfX8xxVLv21SaamXnwrZkL6YUedHYb76j7ah4gLiGDK4wrdz2sY4rqDKiPk3BfXKQVD4ZJGjbwDtkG",
  "key40": "iZvRXpym4hgfPbrZGZQoqRmJrQsbWBF4ma8Z5jc6Q5TUUvAPfjMBeXQ3NbWL92GCVBoXqtzTAMjUMgMeiXZdwGG"
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
