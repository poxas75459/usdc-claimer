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
    "4NK75VYdVbRMVNCJJwzPfDfkay1K7scGJUPukA529cxNqzasDTwoYtTW5yTRhKefpyBvLYoxg2UTx2JbASeP9T5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CZV2G5magPptHZCvsjYyLRmotQEkBXVvuGd5JiuhygaMejbuzczeXrXZ3kY4ynkizS9h1zmcHoMkC6YNEynwR6Q",
  "key1": "4y9bH3QPejAX8x5WhukKaT8YkK5u2DShKkBxY58HjA6z72JKjxMcnuD2isiCt2Ethx5jS6XHpsZuvEbwqU2UCZqz",
  "key2": "Z6V9qbyRs9GaVS8TYQQ5ebeqTyJyfJLtBRTXuopCKajsZMuYrtMzvDmGo8Ztg2nU5WhwXCvE7PM4xHfdLVFDZA9",
  "key3": "33iCwH359gBEYLPyqEbsYnPad8H4CZKEvXyr7dnVWKt5DR3h9UE3PCHRAWoA921DhTFn3f5HZ9U3fNvuFVrCtWAc",
  "key4": "45DDw5DVoHAPezhEvNfAbJc3FgynyqqhGsbQkuPkg7URDCb2yqbgHBxKXphDVMAD4Ah7KSK2hDh8thHsTb15GFZd",
  "key5": "2Lb3BsxmpQ873kgutwLVAooT3wW1QzkHENqiQNqyPDva2FE6P9KmpJxJqwVnG1fs2SypkLT6guxqMgQ92KFuYXPQ",
  "key6": "2FYMfmANV28ePTNBzUTxMypQCxVHMxa8ETdAUrejTbwqvRsVtg3TWKY3biRVdUx6NE4C8P1N99V4TAstXT6sNPMi",
  "key7": "rpts7xFDf92tVjSMd8nXW3hcU1ebb1gHxe7VsqnHHEsVFp2hfFPMQWnH5WazuTRigg9NsxtVXyCpfHP5RASU1EV",
  "key8": "7Jk2d8dwifc3qFqmLUoWGFUhs3XyYLfvoEgneUaTnT1E1r4LDVUaGLTbQuMEWBEuFb1SrZxjr4p7heVmi9kJP6K",
  "key9": "37TJiJbkMiEkGnWxPsTyUzTAV665fy6iGGRsbUae8HCaukJRPnvmgbb8B4as39NXH1qevtKLsQHtqeRZ5YgZjduv",
  "key10": "5WKAw97bza69Driu4brP9znbc94tWYEwDVJSMo5Q1ngFkgxRjBQwcAQKa4wHijHUMwuRoUwBvz9dEki72G48Pbka",
  "key11": "3ToqD4uTnbjHJfs1pd7qAqaJTRgP2VJhqLunCif5P1sSczwSEC2aTHqtjCyKXUGmm45anTciMpWpBfHzEH2cnxmz",
  "key12": "4wWD7N3Hc2Uh7SaNBQ8ESZLFvsLuP9MGf9Ao8NRDK4pWp13rdfAPxvSp7TGSuZiKvcTKp865SyHDtVYyTKwt7MQQ",
  "key13": "636uPHkBZCPfhLF3zofFW23UAPkjd95pFE1AZ1jtBPkvv8HZ7CDEgAi2QwncCgEFFDVA3iR7mb6qPkaDMKQBzcro",
  "key14": "5ska7vH4w1RaKQZc3VSL7TKnyAiftvRZUPr5CfKPrwSaRwAwG2UQrobcRDcVJanyigMzVjMq6S2ZQxcAtTWbV2aJ",
  "key15": "5BgewqkeZbkeJTeMRDqKNzivPVV59dogBHWKqDhqpWZCA7kxHrKe1ZLK5EmBVMmVyvGcDC1yXVkAnJfrvfpSZy4o",
  "key16": "2LbF2gqtppD5LyRBsnzWLj6zug2M1b55fj6y8uW9xx9zZ6JD1tatHzCL2KLmnzN6ttgF3RRAtPS2cgn6PKoNCS9a",
  "key17": "SBDyaUYw7sSLJB15m1KnR7vo54nLbwmNvMipwBmAUJSJ4QQTrKtuc67UvYrXTNcSyk5nDASuwxgw8gTZbbRaTGG",
  "key18": "3fisBb7GfqvY4xKzEZoYqsUZs14JDon1dLei22BYLCkShnGfbhW2eVsGS7c8yvDEjtBSocQwiWjyF4NnhmDJ8Ccg",
  "key19": "ouQKuG51zvciGRM2irqGfq5zKahY3sb21wugxCWK5TcYC3JZN1eaHVKBSgj5hbALEfC4cFVdBkkbqsank24zb7A",
  "key20": "5ZKYqQedq5jDKoYD8L5AJJqwoxbywyuyvyPzcf3TJkhfhMDP8L9XuCzUYhoKJ2DtMGVBZbfT5tmC9AUejE7NjNwT",
  "key21": "3yotJWy5C8NxDUnUY1WMK1YCWtgNdRpPHSWmZfwM7GDvy4m3Qo1UT2tLpuPVkWcTuqGNgCFoJgsvjZ9o7ymU5eQa",
  "key22": "499aALYyX1ikZDnGQCCLFaFtsHM3TwArZ3cYbX38FLZ4tE1LfmrcMJGaMHXgjL8vCezrGZMZn4fYffvja9biW3pG",
  "key23": "5vfh8FjVmDha7ozAZT9r2rj1s47NMVuxD8DNtHSiFA7y1DQhJvZb4HgjvamQASP8qaiFCPjZxrpBT7i2JEaZdjpf",
  "key24": "5F826TDpdYZFQMimifQRiN2KEUTf2gdWP4fL7CxgciWKKT9DAKa4m4oXfstthM7npKjRj8d7brkx42ihQQ6yYFau",
  "key25": "53WNrQiovPh9zcwYzFkcrmHCiHZ6eXqJHBCgGsTzdjpUy8Gn439wfRzTak8ZdxctjaD42vtx1CPbjqLvkTvbXur1",
  "key26": "5BH313CMW68kFLJRMTBsfksF9QGAbdJwvGRffcmbLp3C1YaHwaNnGcyjGCGjzR2drLVvpCGNorz4sdRzTSp4vFMt",
  "key27": "oWcPks32ph6KHGpn11pNdnX3G1x3n1naA71PG9zwN3yqunLnx4LyjqFa3LEznP7eBZhD4Y9JRjp2TTNUVtxRvMP",
  "key28": "c4Gi2VU28tLp4N9RQ4oLZkzo6UMw6khRxb3y9FsK3KcpWXHDzpAh9ERqEpFdjtLBf98v5ECQ6tFHh4BBpwijAHw",
  "key29": "5BeXBL56x67WuDADQuZ2AW6zbyYexkACHL1HGochthUe5hAZbrZ3Gm4g8VEMQdeXFfNy3zEYM4U9RFGABxHp2TdP",
  "key30": "3vFvzCSDMhY7DhKWcsrLkjuBCXEoQN3MLQ6Cit138wSuX8kof1236FdCBT1bYwUS6FuLpRpabfBnNHuLGzhidGrp",
  "key31": "ME8vyKjf17fkiELoPe4DBTUnr7VYZ6JxVBXEmr6Nsrt1eNze5SzpkdgijAzwPWcgnGMTJ2FnBjT84iyPg1iVEpb",
  "key32": "3PtsoaTMb6KWHXKbUvbJi1RLGaZYpWbLpLNqCz9gkLjWnWVTMMRwBKsLnaJKPfF9MmQ1eLMHzoWdNSQqRGXN25ZX",
  "key33": "3GK8RAZzswVm5eA5iFnJDnz7GCToR7FRdGCkmRpUYyd9gm5KTq87NdMugNnueB4azc4CaPxqHzr4dgof96MuWTJe",
  "key34": "4AhdR5wSLRFXBnQSuEBYRUXimt64bNGNEYV94DG1YKuSFjyKuWPvQFsXsnHwvxFa8QxJPt1V8cs1g1WHxAyT1eu5",
  "key35": "63fHVZSH7J9BBpXaotCsFa7Fz8BZ9ZiXYn1khMSnXNWUYdjfFcHxkmqWPWoFmwnFUmoPVCk5B1RLtqVfenfsLRfY",
  "key36": "5aDaWm1rzFXqWJ2D2ttHSNHNyy1NLr6qK3aRBfqUK3YjDd5b1jrZP6P3FW3A98TpYnXPgL4m2476G9tG1igLtPxn",
  "key37": "bS7JoZzSMDdJJoh1twXoy8aj97SeyTnE641ZQDsictFzsmgTEo1U1VVtqxfPuNrUMGNJ7HhhsdTgRiqsmgzjBzx",
  "key38": "29TWwF4GBGfiMkPHvnpKokiGGKNWPaWXwRXP4oYhMTXi4jtYjjYdaxFVYAgWjCvhpUMxCQH9AnpAWLT6TbTUxFiR",
  "key39": "8KJjXJBLYBzUsKwSg1Rtdy2SuxMHs9jfdfPZZ4mneybUsFaY6cA2ovwRgUGKQvU6TLNbyR4kJrtJnXZKwGsKm82",
  "key40": "5z4Ri3vXqR9xb18PZJuKYsPmcg4BmTjcuU5xAXZenYRPbquxXbmSoRe8uNMuAoAYyorvyiNxMWAsAXtjU1fojyra",
  "key41": "32aJjABNAvX8Dp5rwhXsUebWDm7qYAk5UupfS7uYuRdjU13i96KnvfiwxbSVM1kddzk91kJqZEyE4j7DqYSHerQ6"
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
