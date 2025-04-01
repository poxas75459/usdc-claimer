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
    "2PVsBX7HGYcpNS7ufyCw7YoPdPb9451Jne63st1ZdEP3c3kD3A2uQTw1v8uo1EgKFnKfYGxizXhK4LRHnQmQh1wV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f4nUYfzXwtsvCarLqF3Mq83EroxWbvAzKMqUTsuwZ1CosRzjQFZG6tBdkpGgYp9SMbZArAt2AWUm1pUBC8s7ybD",
  "key1": "2pWyfRWJZAq4BM3HMurH4RxyV1PPtnqBQPYRpgaf1oXV3GTbyHVmAnRunF4owUzyd69dAYJqGCo9rkkD7wu4uw7j",
  "key2": "2k73gzqS2EKS1g3ZwZp1QXXs54e9B9DUReV2tLHviYagV7mdCU1yiyM4axrkTQAYgDqBNpHPdJNQmKRYT9SmYXmp",
  "key3": "3UU2L4RZ4whbWb6ptrtdBddkzzJjke3zqjQ9Fe5uF4bo8EtXNc1w6Rjs6wVkDVRCYPvtUmb4qVVx23AwANe4jxif",
  "key4": "4jfPXYZ93kooUgZwhj5oC2PKS4DckJ25mWGziB373MLrufA3tvn6CtUnPUvnwa2PC6Hg7sQiECLx9NNTQU8YL1nQ",
  "key5": "28QngkXfYhwSbB3TwzJQTTjSv9rRf5wfgTBu5PiTskUhTDN8aHgJMDRVYpTE7azQ3QjVWP5jbV5XdHzwFhdi1rDk",
  "key6": "5efKMz19WnieM6eJBDyHZo2BnjeRvgm5CHN3JGAVAUJgVjYBFCS7K6buuDBwa5n87xYA1jEnKsKiXXub9hhgZz7w",
  "key7": "26vVQqYeLoBkpZSVyNUG1u4R61RW9jAYm7y4XhbEHrNAAYGrwMLJBe2uE3VgurBUMczxWN6TGEBg11phZDdc9PGz",
  "key8": "4mko29cQ43MmBAPMU1EeSDEe98YozgpZP7VRsZ9AzkW1SjyVir5bfMPPasJfYSMSFH675PdiNW1xjiqMWuZHPi9J",
  "key9": "5cY9BnM6jQE5L6RqWtmkDM4gmS1BjBgEyNr7JjwaqLy6efr7zWw58KgbqfhScgc8o7uezugWtEYU3yB9GeXSNyj6",
  "key10": "4k7mzbdjp3HNEEQBKVjHL8ehdcp69V37rWc9ySP9aoWNSBHQA8k8wfBafqWKzLqHJLrNAE4wjxidbbcyP8t76vbW",
  "key11": "UeHjs4w9oN1XZJrfdGpWg5ruJ63LeGCphwLhME4E6qRPATXCGwnKoo9Wu9VWN7is9nndBMATcvMqdwT6Yv5sLUc",
  "key12": "53xMsDRwqdPfWcceUe8zrTiTmVEd5EKMMCtfTdhboRLgVhWgrvLkR9BDxbkSYp5HbDwcddXq93y92Y5SAtYX8D8d",
  "key13": "d4XnUwwtBGNdoQ8sGKjuPSitzL3oAKsPG4VEdnqtfv4yv79d3jWMHLiLUKKb9gdiwiaPr4myF89VTrzDipTz2CF",
  "key14": "3yWs9dUUAex7w9xfg5taizE8AhziuwpJ9Us2snSdNsvbjXyRV3tLuSu2BMcWxGZPJKcHp1XcXaJm2FDuk1sT65jF",
  "key15": "WhbviSnzv2PBsaGVPFDzF4FPC5a4Prp6g6iySqHBrt323AK6tY96xL62nFVUnXEftu4pdKiGXaTZUYu4pKbAEq7",
  "key16": "2kAp31fQ3DLiHrQgLMSkb3xuCwL141yzGQpoSFUmnoLXSEe2eFCabUtQeX3fVEJG1AD1YfkACCYN9tHGTrXqC2Xo",
  "key17": "3MrpyNyWEJGd472gRZjNYjgknJaEDMUaGyMPWWVQcSLQ3GenEyUHbUUAv3S4M8DEgPmGumVoaQWy9AC5THGF38n9",
  "key18": "23h9VnhgcaPurNApWCbpe6dhf9FboiEjiLieQviWF5hbGQneDU47BxUbEmUhuZ7tkM4i2Sv6R4uqgfoN5Bqet523",
  "key19": "4qXDth31tBNnFXmphmsYUjxWsVRFq3LxUoCc2tCBZxH4cExkdG3CTA1uNdGi3eDeTcsSzNtATAxpaacmWJMDmHyn",
  "key20": "5TK8GCudMXneDfUAcSRMfWcJBoCKMddaeUhHB1XhVgFXTUjWrKnuumMMz4P5kasYgaCWZLa28m9zx8Xv9oRmv87q",
  "key21": "4FGQ2qvsnRbhB35JSR1WaGAqhtvpXhx5t36jnwF8ha8ACa7tc64Pg9SZSz4MoM5kWfphyXC75i8KPVoJVZTqPDvU",
  "key22": "2seXTf8wf2RwKHtMK5mfn9FyRKsvyXkcyj3rivUm3Yfgou2zneuqRFiYc9AQcfmraF48fYXgdXxc1HijfoXEQXQ1",
  "key23": "21TWseANG7juT5HChFCFHPXMijTjNQJ7Ketgvhgj5Q99Xd1K1yU17RXqfQJydRqe5A5VbTNDUiDGMZWWHRNUDgnd",
  "key24": "4eCU9DmcurqQcjbjSSKYdc4ve6VbEGjmfkLmnB3ap8JvCp393yu6NALoiYV9sxzMQ33HMjgJDnWG8iXAybuut3oi",
  "key25": "26EwBDvUGyspH87xkVj54euRwJ2yfViytFSRdoQRrpyRjcD4aYcimQ5tpHcdaXFAGz4CibJpuFzG2suEnXSBUtwU",
  "key26": "2Yj8e19JQxF5vZpL3aFLN9ZAmR2kFCkCSA9uJJ82QYZeFe3etPE5fM5MGkn3HiFv9Y33Hs3MQDkWxt5xA2DyA4yX",
  "key27": "4kxxSnHvwkdp5hxB1xBtMig1E2uGh64bRTHutfFcLTqawU8DucjPES6MJaScZarfPdrsnGiYabLStnoE5Msyw3FM",
  "key28": "5yYeym21p28LkjQSrgViJJdvRV2QPFYYAjesEnk1UWHdHQTYYV1YCMMmTLZc4NnCQmWDyyC4g35p1R8t7t2zB4t4",
  "key29": "b8x1gAWstLtNjU2VqGEuFrb5RBJgkzNBbAf1PK58hwF6Usoa7ELPiyBSV1tR1yYtqezDATUXmkSUpBy9T4gxoAF",
  "key30": "34X3xy6zGg8jXoMLRoQJY2ujNibeq2sCbtChL9MYFtC57CN4jSkvHq4ZeWJ2K2UnbDw8FSoBq1iDDHnQDPmT1QfV",
  "key31": "32u9xWM5HgpjnPrEUzMvhiTVgDHAZpzcUJV4XvddHmsTktXvxzEUyZkgvyEysHLDSYFN9NkCP8BfTreyuFNoGHsn",
  "key32": "3qWcSHxye1BN4DcLyhZWdazgYZTWYHhofo6EUKE2uVif6L2TYogHCqkv6CcN81kkpZdLtq7GziUqrVA1pEcdtoZY",
  "key33": "4xEyc752MmfoCVeSdeY9ioTUnZhp2Wr9Tv5ktbUE2CoAb5Sk7iRXsfqkv7Lt1fQfR3xwiGozKo6JR7TrCcG2uvxc",
  "key34": "2LLYPY4SWKHxv3rmZXKw82z6k83kMvPV1jeJXBEQjTqk2VynDmF2GFwyxbS43cBoKJXxKGGsJUYANqEu1yyn7YX",
  "key35": "2vBC8Cny6h9VjT7CBPgxDv6eGMuTArdjZ3QAM6Dr7igcENttH8RPT7uhszwsNeLUhhQtTKFkcpFB8rzhWLpnVEB2",
  "key36": "4yHWLdfdTpsnFwXGCPGrDbL3m25bFHrGTDsEA7XwpCyBvB4sXyYMWSKq5x5PtfPuDwxhtQ23zGTMbKtJj14yBEas",
  "key37": "4e3TBWQ8vd4sLhmr4mnb1jfe2oYwBfQx4VpQCvFpzxxkTXJQQ6ceixj5dVbGRmjBssgwvazewdBJg32ujW5JGTtx",
  "key38": "yzxhb4iRy5DLHXeMH9YYkN2oj8bTwBfrwT1UxnTQ82Y9KqSTtyvdCKL13eeMtSkssTajU7qZfyuN3MtMphsoyLk",
  "key39": "4LLLiRuAqxpXkNrXGJSDzutsjUHaKRLY77wbu3UB1bXWe2ScyRGtr9NU3cCZN6AfKQJ4PJvyvuCcFyDN4qshJLvw",
  "key40": "3updJn2sEZFDdQsaPtTmeginW7zDXc1YhLjXrVzA7CFguztajtGNgkjEgR5DyZCnXw5GtvV1bHbd2v6XFWHWE2Am",
  "key41": "chypJPeCXQWwdPUQ4LpRfAbZkFLXq1UwfRCnjiqgS6f4so2if9pxHGYNHNRMUraMxNppLC8enNFE7EqorRj5vDM",
  "key42": "4nUtNGnYDVQqLnttJbenNkJJLyHN9qGB1k4AwJPeEDTJ3Nag5sBX37o9LszfgDwxYXjobDAv8gpeCruTQm9D2HXt",
  "key43": "wS6Q4np1kTXjQVctAMSiReZVwv5i5GA8eJWUUutN75rv2wjA4b9VeEZAct39dGuwHAk54DswQETYrLvfsgHnAxA",
  "key44": "54JKpDbGRkPAJUVBaN4tW3WwtCQeZG8a4nfhR1M9aLGJRbjrehLYzwpYdx3HZy2i1qDsFD9atwM2G6L3WRfE3wPg",
  "key45": "5sAuro9GZcS1mMncC1vQmy5jL6hKRX2M4p78bKZfpZFPnogV68zMvX5mno5Gr9EpMmgYCkPnfL9XVBEwo4qc5RZX",
  "key46": "3coZh71ns1xpBVDvYnVXavCQQqTA24dDg3XdDbYMGQDB8poZ4Cg1WCbQknoeM8cCDKDYzyXmjRDVAcTyGxpe7Zo4",
  "key47": "pQvbXf4Cc2MJUok6kui6mkqkYM2zC4EyJyxSRw66u2pKAW1YdctLrTJXwqP5SStPDguEEZs6x5h8rgrtZNeBmQv",
  "key48": "3RbRQNn4yTjG9v9cEk7Q2MuyymSCH5VpzBVVddKGwybvxXa7zfhezD1UeKECALq4Ei8sBpnPPEk5ySFoK5CTmGsM",
  "key49": "53765JixxfZdJN67cP4usiTGq3Yquhv3PNMD47G7iSRQyjfQB51YdomPKXsbLJZPzTy7PNAAG6KJfnoSkYXDbcox"
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
