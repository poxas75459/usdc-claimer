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
    "5rZuBXWnVcmb2eGw7dzbdNoMSKnJ4rsHi3jCny33HdKnoh2HZ62ZnhZzVUhDYUYJgRM3fqbra6U2G3gy98MTVzKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VufBKeoiPqBMZLY6tsYiWymR4c9XfKiRPwNWCwvVpc1FPuPCt6DRAWUQ2fTs6xHQTHueudFomuUkycyZTJbV5vh",
  "key1": "u88XfH6NsRASkxrgcHqmsEpuGTjptfGGALLAUbmmL6AFpMbidhDpxvnYe1REhyAUmk6Nutv5PNmWSsEo9ByTYjn",
  "key2": "59PGBKpQEQMXnCXQrk7h8XXd7wnhe7Hk2EUxpCjmzW9xmvYpCSHQufaqJ8ZtMV7N5DTgBiJDzgpXHKZEeB97c9u1",
  "key3": "53Ruo9z3VExsZHenULsg1CbBH6p6uMG5LHAf4NpxVPiELCs7j9NUtXuc4vW9LcuQcXatDR62qFW6vcbpZD4oiJHC",
  "key4": "3vjcAjHtNCSTHTBF7y3VHRMEjs5QHMHmM7DAuddpgBNDxr9XxnkbgnN3nZs5RSG4hmobXNEb99eW84K3nWgscjge",
  "key5": "3ama8zZKLisnEj3X3xdFFGm9MrJvzSBL6yoZEbp1oqH6onZZu46MwU3jCoKuSBPLGcg8bT3f7dNF4RUd1KYyZWzy",
  "key6": "3yMEArTkL83EswQ6EVRA4Padu7Wq82E9K9tiD1tk1q1E9GAmQioAfb41ZEbVutqGMDyjQVMD6J5feog78iB7AE3R",
  "key7": "4gKhTUfU7sLb5UABR9d7oAVUMkMQtt6cyFLxfCFkQFCuFsCjBrtXoLGWXHnuq2H3znz1Qa3zbAbk2NuhJDmyBJsR",
  "key8": "2yEe7ZceTmxqNjbmkonwMxyJF9htAQ9zMrFjkvhagLC3RL15BjQizdyQJXXuZw26FncSxUR4p2hMzL7qkYi4mWqj",
  "key9": "53rK6ZHvGmFG2q1zN7n8rJtpMP9v8GeVarGRiETdFqPZrUEgYmNk4y9raDRNper5HYugMwmXtTTqivLVox8zrmnv",
  "key10": "5veYr6FBanQSxoyGQf7jebKVgpcFUGRDEz2yiDkc3DXWtChNLy3ysouXqSdnPFHF7y5qFrJbRHjq7qLdvGEaC84V",
  "key11": "412SCKMgTSi3uW5Goaw3Wb2yiHbjjLgPGMwVS7titWocZcRqc1ULTvAca4Beofm1XHeS4r1MAs2BZ96vSWKZhGrc",
  "key12": "2zkFky1TMJb36wseu5cUF3q1EQX3eqXNhHYsyuGnFhByZ7QpyiFvet81rTaC9Vrh5isVw2L5gCqjyca8UWj9r8tH",
  "key13": "4GGsTPD2r6hrvJVgVfFzc47NHtHbePiCq6ZuDJ1k8m43BbCzV4QHHidGi5xFguLG7XWnDmJLCVFCdvj7rywUArSz",
  "key14": "3z341pdMxaxDC6EiPrQ8UXeApcWLeCTNToFcyaGAph1uWG2E5R3hbArcVe8BxEDwumCG7aQJDU9vFz9VYRZrJEN8",
  "key15": "bWqbFCwFNAQm1fsMjLHExVobuJs92Cismxt51ULmpmKNCwk84dqF9CKsUpgUkijhkH7x9BcAPtFj3vzfcGWf16Z",
  "key16": "3vpwCncYaHswrSbf4ugLUbViBPJ4WcEaRJ1zbuB8MYsh5QFbrqW2Qkjym3XJVPNp4XJXkpvppZuptccUHzVsyo8n",
  "key17": "3uhuUoXQKSJw7cw9SJXDLRq13FDJ34qJkiFoj7iqjxGbimpG3Wd5NaRDvzURNjxLunVqLzLRaZVUM69z2iCxMYpM",
  "key18": "2knfYRbz6yjP4F4LDjVxW29LenptgiySBgeT9VvxeX1ojcFQF42XYz1RqGiWr5vVsGSjZCQKSHm4HCnQZgkMbVpz",
  "key19": "2KCMe4Fj9Jkv9USeADaNU6K1iGrBXyT1uiqcrCPVBCGcQn5Pc967Sy8tDRP7KnLDxKF53C4NVhRBiDmBopaEXSSG",
  "key20": "4pMGxwrh1FvFFhKVCRiP6QSkSMDKfoVn4HzHFixTX8JhSEi6dsZGCbstH8UgvWJnNVTrWZk2anSkSUNgkDERLEtZ",
  "key21": "51sAX81uyXkPAujysceHA81UNcELXKkXP8CLmPVkjPvA9QBjMMMHFRPCvK2PRxpnyzrwG22WE7HoA7zZroWep67j",
  "key22": "2UFZJMiWtM6HhzCGrfVNSpmA6WAGmhwkXYzjyDbrgPpeivcDjEbGHYe3rkqFGyGAphiYzz8aDqPKAG8ypGBkS6cr",
  "key23": "2jzuqA3aMr8m6GJRjohbKB9ZCrzGm14AC14DvJuhgevJwMuGMqPBxJMche2ruFfHVbTsTX2xypkzQKb17UC1gPjf",
  "key24": "2teQb97oWms4JiEhZSwcc9rWT6PFri2QQ6bnrGWtMsjmfkuX7yNrUXkEVLZEzEtdD9NsR3N8TmFi6aRDCRjCkfiX",
  "key25": "571MAgLsYqUAgy2SexxiSnVbgP7hnSDdbCfrNsjaRimLy1nEBune1vFp8RTCQB7HYWfEQhqWM5SqQCXnTSVytDfd",
  "key26": "4FQAznfBw4yRcEL2pAyr9VUiPaoKfcpa69AZGcuKNKyoUmuKVvuEWg2s4coyoaTh5BKzYzdpLUcw7SWMnkoZpaiL",
  "key27": "5c3y4yHwZ6pNyHoFRGBwCMdsJic9PtqR2ohac3nrf4uNieFor95e68GENXS5L253s5HEXJJXzGTXzwmVb9g4JFqX",
  "key28": "5wCqydFDxaHGDfvRYXKdF7riCPHdzvYNyoYzy8BYUGzNSYhKnHUYxrX7hLTPPJt2HxbA53FEBAie8xxRjXK2an7e",
  "key29": "4VpCNMUpe6yWL4EsG6dki6bf5SwxyXoug7j2qbXJBdXbaHduhYK43HUtqcLCGibsdSViDhx4dttomYam5mFtLCfe",
  "key30": "4AXvaiYBzD6CGWNArTN1ZzASCGcCFDav8EqwKA9Km8ux9VLji3QumY3rL23iDTmsUMNPfEwMXgQRDP4KotnzigqB",
  "key31": "2ChvmRSFqMj2BBgZ6oCUr7ybNraXgydX8jfBhT5VLNRVvi7LLwuvmv3zHWyUMpwu6jbw1Lfh2pPjH1YCx5RYuqPY",
  "key32": "2qQX6Kg563jrc7Qas8Y8soUyYerYdUbrQim5G4YEzACXGvJTbp6pUSfGfWgw1vngeqAWuGPRdCgTy2QdRNPoBXhy",
  "key33": "4AFgiC55HgLAE6kuw4355PK2aAteozHaWDrUBE5bR4bsskRgVJevxZFoMa9nQFWqQxPrAkPHdYuKnp6Hrr2fk11B",
  "key34": "2uk55ULuUehveT8HHpSh1BmwkYgMfmYti7eJKW5MYZ5ZExZXfZ31mJSAiQocXpY65W9GYpTkmJrcKYwwXZ9UvJfM",
  "key35": "4iPS8pQB8HAuvRiXQLuHfLvdMbJr2P5mjxFEswkKWYUqYqvcARjgJMgcHqZ31Muz3d6grfw29eBYnWWzc9V924bC"
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
