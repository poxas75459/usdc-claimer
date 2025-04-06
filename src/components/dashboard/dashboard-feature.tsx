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
    "R9NvQtXQDEtLNuDrEr6LHvpz9rB2s9bWqDJ6a4NEiwhsbVBiBx9bs7ZUaaGx7std6FxKneXaxEn66kqmB9XMynq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BjfndN2VnbheboY6YaqVcFCp6UGzEGd4dtGPq6JzwuqwByPTYrkD91GGaJaCKLD18rSAHQyp7C8bjppgsJzGMHH",
  "key1": "3e5XNTHGeqYpKjVGaHbMJaRj58xr6tDTk5MDrdrpDDYDjS1kj38aisJtczVshZijysX92j9ebYvpcHvaqnXjV5KW",
  "key2": "3J1LmWeC9RwAPYsuc9UBspU9fuZdhNUXBuJ3iVMMe5Bnvxkx4fE9k25NPYuhGV4N9TCGC1p9sonfB3T4ZMZyoFKF",
  "key3": "2DkKSvkPtq8M2S6XTpHFrUznWUM55mH7cBp4smZGHARNm5gm93KasBRnDA4iZbZiWNcjMLDNBV9BUR8yVZcutCL5",
  "key4": "3hsEYkwVgEa9Q8umbLhwrgEDErW9ykdfpsQ9SLnXsHPz37qjbZcq482owZZN62kjLwJd7q6cNB9UKf7e9YNotb8q",
  "key5": "5BNhYpupQNt8tfthx74DREvFL6eSVtPgQBovJxd7QpKbGEyZZZJaKcUbwx95bBjJBffcF9dugwidUEN4mcHzfMQQ",
  "key6": "LWo9zW3Ft6Kevdp8X3t4jFWQZk3ZkUUn36VysmVNSTgWf3rEERm8p9Tb44BCgboQa9vYavWeiF18i5ouoz19fcp",
  "key7": "e9jXEqAMRD4MfeUHtP5gru6GkZ6GfHd7BxyZnvxw9DznRcwA1WeVkZNp2RVXocnyHSqrZW2KWzxJ3m5QFNseUmj",
  "key8": "31AZdb37mum6a8BNA2is6JkkJGkgcLibwFSYSEM5ikWzvPnP6abWn34rhnxUaaMPFQrXemkGemCw3G44waYHnjMg",
  "key9": "4DDk6eYug53AFZQbdqECPaYcDFzzpaFnUVw25zJ6kpWztRbVfp1yoGxRgQwB5DJ55g1r4ZK9GxDQiR6fq3DKazXq",
  "key10": "4nat5UJ5A9KPJPzwVyvj4dKDrHxahB7mcS4k5aigyVcztaUETps2T21NJS3dH63Cmt2P4DUJSukR77cfbncsYBkT",
  "key11": "3Gef9KGKrnBKzjCSRm35LLXTaBrFmJCbg8oZMwc4czdD2i27mUnnf6g5RzmKXsNbrgUFroznBK9mRpsdPSysYxTc",
  "key12": "76xNubG7cCmpQzVh8giKku52GTmvVAoECzxbjFVtTj6Stw3pxGX2kuT3JDAZeHEopVGTFjPkQJu5g5F6CMHzVqG",
  "key13": "2fARzR6WTbaG1YeVe1pMvPm8sLRsh2F9SRe8qfWFhksfvf2js9KzfJkD6P75TMi453458NFV62DyCvYWSN77Ej7m",
  "key14": "3VJV3T8ZviSSjn97qmw4VakTCVrVMfjsra95uYPBp2JNpQCxxD9LQRV12tAZJEFy5fjywk9sKdnGUXJnzTjctUa8",
  "key15": "EQDf2ubHgz1B4WcC7iWgDUbMedNCTRsaxsTLqnnWXvkrXKG5TLXWVQxfcEatD4C9c5dw57xW3pfjbjeoTuAhJHy",
  "key16": "5REAYqTJCH1TpvJFDZckjLMyvJpTD6NnVPNUeaJu3Rr4CBUnoStJMH88NXZA326VcJQAT76rZBm56tzfwoEiQkAJ",
  "key17": "52ugBpYA3runAUNBPdypCwW3HhKPrFvE7RiS7j7Bz4Y3EL6U4zpaKsc9fCQQMMBjYi7Zb1vjpsz7v11v5c2nmnVJ",
  "key18": "wM9rNHTRgAz8yMyU3AvcYAqA6tVXfMsCsQYbaoURLRPgEYtwYksyMtFy38PyGgxgS4WKEN2L1pJG1QRtwqaBV7o",
  "key19": "36g2tTuMcxAcAp2KcKwi6yHedvJsyhsHGEEaK3JxvKjWc9ehMeH18hESTfo4E1MrfwqeNKAcJd8WtzswJsHvhsTJ",
  "key20": "2cZgjg8HYMGwJ6S2ErohFjHJGCPzyK6XsEyR5eUHW8KqArBqPoNh4jx4fF4kWs38P2a6wVvT1cPSkLosLbecxtZB",
  "key21": "5Gm9FydXgEZhTFSLEDqQGm4jZu16rY5NqsDhU5JSD5oo7dNak4RkrmCkTdnNkj1TeN5D3y3bNE3xG4qmBLkLWnab",
  "key22": "5xuLBbGXgzatE3Qz9n5DCcc91MJH5RHnUmSJZRLB34Si2AwhFGZmTXkZW4Nj1yfb4jD7b3inNoqPeK2dMFmC6VLj",
  "key23": "3y3z3Rq62JjePM2jcw69jCb5G6UL9Gsz5p6H5VtHqGVb7M5EuR4xyfq3iyKQpWdLvve1CdhZeccWUdsxhRpXazYY",
  "key24": "2dxi6QfkAixfazngXe3rpgQhcqhbXc8j99sEK5pq1jGmXqrPkXEmv93zryMtk7gvmVVCdYWVDBo1BVjnQw62QLne",
  "key25": "2aoyrrDdu9r2AtH9aRtDx9m3rpopQyFJVxippXu1w4UTdis3RaN2mKTmQyH6tJwAgjgdhkzgCE36fTkfRTMTDK5c",
  "key26": "3ofsfZ4enbWVZHWwor5UVV5qBx8Mn3kJo6pjxZH9PhK9dur4rj9QCdqHwXtu9bpsh8YGYPEt26izWcMDGaCRMPD7",
  "key27": "2KioQBzb1NJLuqc8SAm8n9B2z8AdzLkWoBZB4BYC8XPUfVPZDePajQMgjY4k3kpC6ZufS1nwnS6kYA1gH1UNSMsU",
  "key28": "3sggYnQbF6ZxJv2Zt6Ni36EYrJkqRBcbF7urSbQybCYrQ4kV8Gcv5RHZdCusvtXQVY21Pzc1S8VWfgbHs1hbeuVY",
  "key29": "61HaS8FN2iwSVMnhC6NRMrwxzRHtduHPDarFMtts4byVp4eaXrBL3wfSRLPVErBkEZqRtP5Vr4XCsQ5W13ybm6kd",
  "key30": "d5fL4GgsBj3dkRKCjNAXUzTjf92v791KoRhchiUqjJrnAEziybLc2WgScdZp3m8P7ZMsBBCWECuvix7kRdbuG2p",
  "key31": "72F1A8uDj6t3eoRXsUok7Crg2SeJVduhmEkdGYoGpSp67dgQ8mrokV1JzotHoo81S4CXtBkoJtMFFuYJRMgvYhr",
  "key32": "4Y2gagURZMzXToKKCMyuxQCjuxEVzK33jvwgTs91XMo1m3XoLC5cfyDFgF1hYWBHpPrAwd88AxxgZf8r4HjydXfW",
  "key33": "onLhhc4tH9uSWcK1jjMJQb5t7VuHaYRNSQh4kkxCCgQ4i9DEaFTEY8heRcYmAZgFujUfVK7uc7hM8uEuc7oFBEh"
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
