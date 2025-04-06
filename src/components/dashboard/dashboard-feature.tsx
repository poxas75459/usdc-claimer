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
    "v9a5tjfBK3PeRkJz9vMR7Jprzi5d9QAnE2eBDFZu843UycVNczCMqdMZSRAt6UB1Dyo2Q2PxDYzenwCubPghTMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jouarhex8VJ4rrAqZ879LZy1cGYcrUew4xoHVNtNuxnv7NNQj1qBFBh6aHWvWL73bu7KaitYcShrsUfio86XG5r",
  "key1": "35r5CNK4u9KgKptogeQoBWPqZDf61YeWjA2Lfz6PdNgja1xzzCiTf57hRvfnkM3a6H1qrsnH364CNidp99QwhA4p",
  "key2": "3nnuH2yLzqpcFcNGb7Zk2o8nNLPbYjsLpDJKSNkLLxZzmGu5APd1Zg8GkqmG8hYThanyrMzpV2tZrw7NssH1i5S6",
  "key3": "5nfmmEtuUWBuVrA9YbkmfpGVLUSoJBH5hW9rSrrvAkWgJjUDbCnPc8nGqX144iB7d5scJvAKwaWCwCzA8qAGa2kK",
  "key4": "5EjSEtkHHgzTMofEENuyftdjvmhKdY8b7jujQaQk8f71XeaJNziYbrj3rLHBEBxZ7ssMYnKoDL3cye9LJbR6eJQG",
  "key5": "5eHt3QJHptyUzXBJiSLkrRMJKLPTvRtAtzsdRaA3aRh81yooWbtdJYMjU14GLSUsi46okzsSJucdDb1oUokDwbpA",
  "key6": "124m5BNd5V5Ffw7kRyoq8yvvxDyUcxiband44okC9b25PvnCSYpi5pMXwKjAxa9RaoXfiMB8K6YPDnpQbmZ8D1Ng",
  "key7": "5y8dpUA12RLahMN2AGmP4P6dKaXokYPhmyxf8XVqRdWUMV3tNEqMSsU8W7xTcfnbYLcEkgyz9rCsNHVu9vhsRGJe",
  "key8": "5cjigrq8tY1QfJ1XGgV6hzJFH623CktrSLoXUfvKt1AP283LhkJGo3fRsUabxe1JEmtjz8Wu51tzfbGiMJnv3mbF",
  "key9": "4qzCpGMaKs9njcxhxMLHcL9MBkpjSvR77onDFJuM76jiSAJ1gJK6jH1YSn76xT4KwnRSBnu78WGqHswez75PxYiK",
  "key10": "4iKWJ9GJQohT2Ts36kcepN3TMsZmdpJ5u98ajogdi265nh7VY1dyBxP6P6ZU7LvfeNaqJk6mnnJC4CkngG9Xy2re",
  "key11": "pkFEqAzpFRMVfaw9CV5yuSmA8ZpSMdf6dHckNiHoKvDb6TxRWTybcRmdPfTVRfbJfDdcRsiYtsza8sYJJhx7uTW",
  "key12": "4tCH7HjReSEkWM71YXjtf8dcQQ9UX8cwrR9iVNWoDa7jJSzUwfdUw4hWPpE38mAUQ7PzTpDH1ARGx5yYPKhnHXRt",
  "key13": "4bEwtQcYuunLsmAW7bfbNnPwZgDkQCeN119n9Jq9zqaqqVWPD9WRVDLF6HLNorUiWTKYwewvPBfq9AxuDHukZB5c",
  "key14": "2gBf5J9aCVKkHuAhkPi2vnt5JY1DZRLoyXhyrJkTSqex1ULqphbVLDiRg9BWzHBSC2qjsZUhuPG8knkWkxyr9ytY",
  "key15": "WJ8XtNo3xrtc5Bu8yHnmjNaGPid1NyhXSv9zPbbAK9EXrvzn1AaZijUCLFB8trVoAq6Lnko3Uo8dBruM7Ay1KCW",
  "key16": "5bZwWSeDurF4Y9Wzn6EZvBGs7KoghvFY6oegKo2KAUUD5AxR5s3ryXduDbMKQ26qCWEfcJoC61GCHU8uYWkgenqk",
  "key17": "4YhFAU482Vcf9XjbrxsnZRSfV6nbGBikZ7sJPbEajuxXNdLUHyygyjJHjCKAr4vHzGv3wV2TxmFnjD1vLkxpNheS",
  "key18": "5GZ1HMgu45nG9MabCAhpE9eKqMffVNFxJYv2PsJtFrmTMYvBCYcg7ZSqRgC2vNX1TAvQJqtHchg5sh7iLUZBasXh",
  "key19": "TJ4VGTCZ8WNByzcpM2nR2ELX7vzhSd2rGumrw4HLEsyivzQRZKyqAdt9dn1bxDFcTA8NZFGwrYHb6Ez11BqVdTe",
  "key20": "YQy7hTwaHxM7zynjXkUHYXeqfG5yNYiGQ5P9LRRrhWzYriHRRZp2Ru32JafhNjALrV5pufVzuCsGcPMDyz931Pu",
  "key21": "4isVbjP4YmHngZqdPcESCwqNr8K8zhctTdsZ7kyHF8KCyQ6SBw4brcRckCyzUV7FKcfJxvu1kvgECpbsPjVSiwE5",
  "key22": "3vynHethntZ9PQCJTLeYxB8mEiMGAbBmmCVsfvj32QFV21dAW8xF9i9y4WoC177eVXX7YwhyKNbLAedo2u5qoTM9",
  "key23": "4goudc6DFm5yNysA3mtoqtXStPneRWdSotWq2NBmT3CHbWgE534Xkgen1sZcfXipLRy7BySGqvcLKxe73hsykkAm",
  "key24": "4UnhXSSCFUmJPDXrBubRpziAVsujhJ23JUvxMkejFtkJVUgDxsGz1oiArjBHhMr37bPnXoLo4QRo6obAhkqUE4r1",
  "key25": "Lf2xXVwbVEL65j7g4CN23Sr7m5Gz6nt55VSPAEeN85orZxEEXPsKn4zTVKa9Jid5H4xc6sN2no8acP3thyHkn4R",
  "key26": "3UtmYYGmfKvjezW2AUCTwXLV3hBdqK433LrCPbhNqnqmQ8FAFtM5yFhfqdB3s6tMmtRrVYqp2AdxixTJV4oiRbum",
  "key27": "2YN3cKvgrTYNSn6NvzUdjEF3yqyfWjc7uh3JeNfjpLSL8vM6vGRALoomdwJGgbc8maqvsHQwVpqTtSGC9mkGamZR",
  "key28": "3koRuLC9iM61XTJXHnMbWCE2yQ9uyFMLbrCWDnxtY34iXhnEZyeYzF6FEFJnzbNcztRETdM1Zm9SXPYxrH9xkuFX",
  "key29": "kwXhFw7RArYq8PiYHXWom5Jf2PSBNPiSEDEBxxDp4bXc1xvnz5t3y1X8uh7Mf4JRrUYZY95WsyByTjZTPSsUJkA",
  "key30": "2WNiz1bvRjTe2rMbwsyYqsrU12MKD81HXQ6xbMiqtBj5WY3sWxLdERjaAwVrZiwkthoifXn1tt6eYqYDbfnXiMkk",
  "key31": "3MTKGYFWXVyi1d3u3Hhn5Z49ebjhQw7Y7yMzf1gHGjr4mFTtcyzb9mAWgRpaf6tgXPFrdtv5Pw5dtaWHq75QBi3Z",
  "key32": "5hN4uekF6aYnhufAXhTdPtgNkJndH6fC59YFZmsKj7nCeeSksuNkEQ8vYYhGi6Z442h52Bj77oW67aPYhBGVwLPF",
  "key33": "Bn1fY626kqc7PbgeGRrVAVeFWsLEJamijuHSKNMfnzvjaZgvYe5UMDpr183oNKHAu87CbprJm7AuXPofFtrUMUQ",
  "key34": "2jejKKVjFUB945tXfM3zSsDRsALWRkrqLVLe1cBBzNHGhCMC6JSLELozDPR8EA8jBpMhLKCMw7PEqU1BAWFBPn4x",
  "key35": "4wudqjTWLYDdJ5GxziDkTUWj3tN5AtK7xNjZjd2hd3SvquCUSGZbP8vN5HQN6iUXPZaPScriDMkqu32462sda1MF",
  "key36": "UQAqc6GSfn3UPU91Ga3bXU5e8y3KkjEHeNqEsHh1M5biSYrVtWBvyDo7X1X72WqR25G5XYy7fKcscoVSKSKXkTW"
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
