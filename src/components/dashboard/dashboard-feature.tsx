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
    "4ujj8u2uJQee7JSCd2RLhCLNFQLymejSyVbEX1XStsFHenvxbw6ikkgnLDYx8xYL3eKVopw7vMDjQP2m9SGERmtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54bDrQPVMb6YhAoqoFj2DgKa8MnQczFG3zLPtdDqX2QsMEzcpcK8mbx1py6Zm7CxsE9zu9ehe99HPPwkrRM5cULX",
  "key1": "44CXyLR5CYyNwNNs3EjbXGAXPu8R1i61YcUYxNTZvGig7YRM64r7HQ18ueqhZFJkrKcsUuagRtYKCZcgLJPDjrtj",
  "key2": "4exvoyCW9w16skTRMjiPbDdxFCttmtQDfb7phEnqpV6nVPb21kCHYXXDJXeiD1xLNdRwBbVTguM88BKYY5z9duxA",
  "key3": "RRohxY4js7SU1zBgMQCTLtzkeckkMWsLgkDGVEjpgqgLzrsvJu9ThprijewCxi42RB6vjijAacsxxJ4nvyzxwzy",
  "key4": "3DQws8mEXTfHXqBkmiY1EZCGwf2TWuPPhd6coBeCVBidhArHyonZVRwSbZqWrJ87YqwkFpbcg84sXaA3bAwJQQBG",
  "key5": "4nh4JutmYfH9otQ1QCSYmGTTNjfDEDqfQQugjDAs12CNx3Vn7XVJg3oHcVMkdycoarmcaCRLa9Hn5KAwpq34eLLB",
  "key6": "5yFDVbQYcCBm4BUkpPC29fhUQh5Laa48XPWukU1cS8MiVB8y6au75KtAZUqVMgTpRmp35LJ68n7oTzYzQByQSTAR",
  "key7": "3qKubCEQqpe7pLiSZG1UBYsr4hEhWNPbzAa1Q5wF2Wh8kRwjrD4eBPhk8FGnbAEyP9Mr3MEhphccP6uJdecpYR5k",
  "key8": "5q8WmCTfzE4ZweDcbUnnh6DNYVX539yR597LsJPu1gphwRTAtk9d1eWHoRGqME3pUoMbjKPUf8b7rGGnD1Zvhf2k",
  "key9": "3ztJfh3Me2GC5S2pxLJ5pVDsxDeTQb54b6ixJCrLmnXWHdkCpkDtifEwPxxey2s1fzgATM8A8hvHm5ZZT6VnfLoj",
  "key10": "qXSeFJK2gpZtq9EBrPPtSpLTQNUuK7wh3RicSZthH7en3pSZkt1xFu3qa1j9VFjZkCdshMofhPZAZmtvgvixzdG",
  "key11": "46nzX7LyPyxVaUMde95AS4uwxtoykdZ5hxbVXWgrKkR3qiC2aMzhqafJJvEqavErUQKybFozL2zYJEBsWcyCYQmW",
  "key12": "3zNMgqJYVR1Spmwuwjv9ZfvyRv6BBoHsN818bnqRBBqW9F6qZCGkurCRMM9VsV8iZdf94WQ5mw9V286qGh2woyRi",
  "key13": "3zspqhcsrPDduM2KJeTNbMRHWXBEBymReVJxmxrDR6nM1xVUXv58d6Nx1LxN8dPKmY18Nbz87cmoA5JhPZfkSsWc",
  "key14": "2r91E6ScghdBuPEFNp3rDmPh87yugKvhVQCxjEbKXNa4JwdFxndrraJ88RFgWm82wejhZAeicGWRfPUfnf7jScds",
  "key15": "7jir8VPE54aK4JZRgSCFoVzk8DAaG3qCk7JeoLx5quKbJZVC7wMLQNDUaDqTYqxrdMGZapHb6M7SBvj4He2FG9K",
  "key16": "ovQvzXNEMkGFNeQv9SpL39ohUMcpDbfmnaxvbhD5dwk5PRza6VHwxLdrunPBL6rTELk2cypR71vg5xoWXv8xQrY",
  "key17": "4ZxXhdrGkS2P54wEz6yMM3VA6hm32kequTV1fN5pM7gibhfAMQ28jvLgsuv4uc6BUMnYPtw6CU8FjvqXU4RJZAEu",
  "key18": "UTRw4c85cQRuimSJ5p15peYGjj2WoGHdA41UJzNbyo5SpUsCo5SeuhBTwqXm6e2YVtFW48vpj9YommrVfUWL5iq",
  "key19": "2xBvMVuMMTLHBiPrAtPCymuNXqQYgZgP4641enFCHKG7hbkjK3bMVpG7dZs9bUn12ManJEgpgsmj2WzC8NZjJgRf",
  "key20": "3X1uHFtQrpnnwq7ippwj4iKnWMew6QsnXVZjQbWTNceb6YB4VsXdLaLkcFrRmPn3yJoAGB8FGJyVB2cRu6v2g5UB",
  "key21": "eGfhrsDdBT9bVaNLAvnxdZsBQiQDzx71HiCZisYLuYS8qex6pY9PmxXnv5FgxVcZQL7MmLUdXVuRTDgzNRRAkFF",
  "key22": "2GyZRy4YvvRzcceMfjnmJQpGqTSYkFujtgTN7unuUS5nwYLeDGn78Er6NJfuVK5UNrWF3ov37bw4g24t3FuGM92p",
  "key23": "5LcUKZW5Pafr6PVx6Bm5eAstWEYtKariByuAkYHh3p3tkNxXiATxC5m5Qwx5SYx2Kc1kgned1dDwf94W1mgqMsFC",
  "key24": "3L8Rt9z9DLTMYwVdSiYwLNJtJSfApuihEzoWQjH8ZWDfLhrbsKyNnUdkReFv2BZNHHswvA1BUCEeC8XNLYpr5AXY",
  "key25": "3NYDJPvABbU9JHDZnLsE1eyYBfhXmBd7jnrzjL7cwUnrEKwnbyY1MELLhVYuBReiisDBrbaGBFK9KnSTW2D5KcV",
  "key26": "2KdWohAPUsUzYGAeGrBTmTBQ86fPqziN4asAUsE8DY7Vdbw39CEkdbhXtmDiLaDX5kBu5q8KYnvdpx9HLoQCdb8v",
  "key27": "65ycfadBoHSFNWXpT7H36MQ1DYK9Qa1rwTdtmqTVQd93akhLV4yF7iVuoYAwT6sJSz4KiCG88s3utbVx4qukJx7c",
  "key28": "4VSyX6ec23ki1WPqr7Nk3MArT2jVcgtDxgcFc2XRRpyBBd7gzK81ZqkJAMmBUk58GQKz394qALVSZ9LSKiJZe8bm",
  "key29": "388Z5oywUCPaBL3m3fttSGM9gVzQgCVgwx89dYzLgMxJcuLrfpa8cd9Lxs3YRRh7bxPH63Fswv4ZXU2YrkScyZiC",
  "key30": "fx4WZVF7xxhpXqJBcU275bv3xT7xz21Z3yr1DjU89oefhDag6Rs1iWyyNusLQLUNK421EavQSwk5NkM1KtHSf7v",
  "key31": "31SC5VAFuxPHFrZ74tCbL3v7qfwbaAwaP2WwhfRtRD4CMNmeZCvot5ZZZPANQCgNtajN4XkQzcVCX8mS4Ae64sBB",
  "key32": "26pYTSYHzLFsPzHaC7uwAXyDnPt195watLHvjbJ8QpdesK8Hj4N7y41tzYdR9w5vJ9pMppKXNVLFR7ARQ2643vfu",
  "key33": "xQuaCUoCyMTLbZomeSvh5V8Zp4HpaoN199tPZZ6xTcvZ87HVBqGorXBmucmQEm11yK1jDTCD3D5ZHjDCG2y2uhY",
  "key34": "5ftJshbUGiT9DHKSuLvuVJPxRVs4tAoy99RNd2jxCBB9rv1ggy83V2qt2ZbmzSwfAGAP4qLu6YZQWYi1kfvFFqYL",
  "key35": "o8hZ3fpri2gQzATq1SU1SWpkTqM19uLkUYGKUGbGHjFxrDMhtScbmtEX4uhkj4HxmCfSY9KCbvmj4pePmRJLZvm",
  "key36": "59BqrCwG4ZPRGbK3M4R6S83GDjF7L12XFbqid3gggRVpKm7Bv94Ya7PRMW3zoAbGJYuBVDTmRCwBPB9pRdEKAwsk",
  "key37": "2jnroG96NP8sK9R48JAegGzyiytbiVjYdTzS71odn4cYBDD37yg25vPY1KyY2cFjFbR2tDA3PF87tL1XsyGJzCvH",
  "key38": "YEUCWw8exmHbr2MHtDdkFcm7SqK9VbyWJbs1vVt7PeNoqvCif1nmVGrtWfXfn8PcySghkehPY6yN7U8vZggUb5n",
  "key39": "3fngDPNURXvvtQzxW3Ef5gC4Gk3vJh7mXrbMUpgtbH31q71G7FQtKvXU7UQqkd4D6UVgtnsdWWb8JQAuRX8PhJ15",
  "key40": "5manjNKLwkavAJ6Uq2pJXvUpyWpU6UxNfu2SgKGodSv3UHbL6xbgUyVb6A43QdH6oWSkLpUSoHVBCEErLTGTihSK",
  "key41": "vvZrUCeQTmxeB3kQgVzior3iLDp7cUVBuFjv8kzxxq9DQSKdQfDkUK6yJfcZLFWWV8uCcGK92m8YsqMiMoNPCzB",
  "key42": "32WRJyfZzgFFEtbziZu55sbikwd2Ghbxg2gqDUwqrgSxBAmBeEz5nfhAyVhgzJayXKaAv1qyq13xcfVs14kf8Tpu",
  "key43": "29VYQmy5fGkoWwtPFVUtRJGfRPCgG5bckqoyzERrr9CzF7qRPgwLgCHtY1HAsunTURGux33WtgdGm4keoYWBgqLY",
  "key44": "4rYUyQTDtbeP7G9kA9ZChm3pbw2TJRaCueM1ctqLa8w9eo5jeDC6Ecxn9S6hn4LfCnzz9y22Yn2jo8a9XJ8i3vSF",
  "key45": "5ru4sq7e2a2auyKrrKHrb92J6R7kiaB5KbN9KqNXgv25BZ38uhsDsuc9EqQSut5DSwM4inaaNnErdEWh5cjBjT5V",
  "key46": "58scdqhYyzEnJ7NuFTc3x7MTXgz2LtLB9o9KziDFy2QWJtwzq866KGC44jX9tQ2SkWAsteLCKP3jSBbxoNfKZX8C",
  "key47": "3dWvXZufZz6DowN3StGDHWGHApP538RoaGfsr8XYZjU2zd48PrexCrhqsGoJVRjDUzYK8m1URTmwUE6UbTeL4AHM"
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
