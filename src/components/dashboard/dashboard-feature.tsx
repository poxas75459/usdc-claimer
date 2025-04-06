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
    "4u81FEVKvbJFA2NnMmivqNHcSRwhe3K5NSC2h5ZyMEWXgXxHWK67KT4GYHEBbjwhR5vfew6pSxe5XQXAZ12casUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AinWNUMTGK8aXvisUSgvf39CmaumHBjQxEZaDePTkAN84dYNVPi9y6cgnCfegctR6B2gSVWjXRbH7BLwd6pcinX",
  "key1": "2345kSw7YVJTAft74XvS8uDsiGRYLKV16sNcWvwgfqdEkSgWVosEoMQ94W3fXC5y4qSQevczPSNVzCVWt257wMfx",
  "key2": "4TaB1GsStwX6KUoNhXTywq6iFEVNn7Dtc4SkSJTYph5E2X7XU5BdaXow18ehjdxpz5g9nWtMmKzVu1kLVwQSCFXy",
  "key3": "2zafzpGL2SrqYVvtf3aRghGJsZ74TtWDFNWLGQTQUBjvJ3nme5W49FKb6TYjmJLPYc6VTXkts1texqQVwaz6K9qb",
  "key4": "5iE9v94FLLb7o2qwDAU85M2hyztQtqxcGGkt1TuGA6HkeAaC5Ydzzn4hZPB1UmteG7BRzNKbifN6wphGqsn2kKQq",
  "key5": "4W1bVDmQKHnERmy19iQ4qf2sktBT9bR3htzd8sQ52YvBtJMhABUzeR1FbGVKAvLdt4Y4svnm5Wk53SnanVZXGeHS",
  "key6": "28qijXm57ZLJnWEuPd6HtfspxPFvh559AZkRkLUoQQBrUrNRHWj292Xa1CBWJDR1NZ6bj1uHjZQaRjUw7cXf52JT",
  "key7": "4RzQV7gFhM54DAq3rybHBdPq6Hyh5gbvpQUCmuPrjAiUeT3JT8xg2BZfMrNay7wtPomLmjVQVdqWBeBUkKW9tRR",
  "key8": "5u3ZZehSqUn7616o1Kp9GWEKQgRmp85yvDfZLUKpa4F5AuFv9aoHtk3SoaxYPC2v1M5FnoQb5nxwPAuwiSB1FQen",
  "key9": "4mtnBnyfdSjENT9eUKAi25cjxMx3RrVPs5LLdguxCZahwQksv5ZjCQuU775gDuJoHnG3f1XwSbue2BEjmKaZjfmb",
  "key10": "5Qc31pMAteKFgwJdkpmBSM2heTgpb9ZzE14vom7zCXJCGbpWGbJwywYysFanJu9YZ2CZwMCEMQuyvFqCgJnM6cXD",
  "key11": "2Qz4GBCxS7VoVAFDKWrqzsJp4pQZDpqobVxBufcbBNpFtJg43p9TFE8t9VyoSgyb4RetJKrdbA2VxTjm7xpksF3a",
  "key12": "3MMKsk4LxvEmyFdW3tziUfnGYNWhVQ16Jrwky1sN2RitC6o8QJXfx2mDz5NzWk7qccPpPb54RAinZvbCYPSLHPPu",
  "key13": "BNdCFATBCDVjRknC6UqMKam6qWByie7b1V9JwUwXNJAJq2oBUzd34CkNpuRDA8Ch3fbuLmgAxU1o5gFWKPSUJ67",
  "key14": "2kT6Y1ugufVsaqhfPCwtRsMp9GZ2YNPF3At1LeFmr5k3kjy7HkwwoQQ7cL43cx34KsN8y2CLo9v6NPLh7fueGAtB",
  "key15": "5eQ876h1QyeuNccbPu87QggBPp74vykuanwzvfAQwhQA3yjyWZnhuau7FEJRD7spUKjwNMk7g98DSCDmE3NzFfpx",
  "key16": "2CUT6Vt49Dq6xp8kRQpjDEzWWEEW83L9sDXXiCdm3qzwych6omAaW82t24JMWifQjyr5aFRkNJTs8BveGLAW2LSv",
  "key17": "GHNHkJA5xtiJGN1HAPzYiS37JNgYG5GZxNgVhDaBXZyGzejKcMkF3jn4wXZYjh7dCQeZm3AwL36mhc9PJFdFxJP",
  "key18": "2u7Du3XqZowbHBexf5RCemFDTAGeC8krgXvbCDdVjwt3wZYQsvNUcA2ufeeenPvnayLrHx9tyRstpkx7XcuzV6Um",
  "key19": "2Q5WnZMLHMtyUAtnBY5wvyvcJAX5qQVcQKQUyp83XuK6a1un6Gov7DeTAgpJTqRLxhCpPFfJf5uRVhaatG7rjtjQ",
  "key20": "wEETzvqHBGCjo3Rxmwm5NjkkBfHZxsLQHg5xCWxru1w35deuUaDQdn6KLPJ6Z2avawi3nC4XyQiDZQPVdfpwKNW",
  "key21": "5xgBbJcCRrUWrfiWMMaRtZATqtAg5k1BeHwZxVuFsin69D8LadMUFiP6dbx6yVk7XGB49eHYPSx7MJPrTPAVnZaQ",
  "key22": "2V7Q7jsNnRQFzstea3n5Y8umV7cLjymGVjyWgr2vgbgYws2AJfi2MebT38TArMNjUTZPnh18HbNNzPn2mGxWio6Y",
  "key23": "3DESr2WEQp7yQAETyzttV3Z2nqBTUBhn3cTrzid4XDhx5A5Byg55Lz5Z2C9fgC8JMGhZKBN4HnAedB2X32ZMF4kk",
  "key24": "2vqNCBjMaoZnJX7jJSFM2t1RYJu1keWkwHrfDhFdNcRxHen6C8Pkm8rMCEFxSCeqzVQQXBP8V6KdhPHSRKEaECwQ",
  "key25": "nBekvGeyDgGteD9g1sPMecum8KVXRmXury2a9F5KNSMZaM5KJidgxHS62du8sJaLy8gJdwzZC4Bu6agnCPXPbgc",
  "key26": "G87Psjpur22BtvGB3csv5M3mnRu5ymQFwbYbTr3Dm6bJBoF7cD9RjgznLqzHzRDAUr6iY7osqmK3r1KSZGFUn5Y",
  "key27": "28iu15eoWnjW7obvdbX26WW9MHnwydZwKxkUh4tZ7mNpbzmbqKde6pQbrj1tez9kX55YkTSwD3HCH9jrfvA8kZF5",
  "key28": "5N3gbmRLmS6p1M2g1WHfqu4LDRWoGem59BzUz8a3NscUK1ysrFaZJZqiwuKXTQb2EhQcsPKi9yuGzCVXbnJDGMWa",
  "key29": "5UkDraqCsLCeWc5vzXFyaPMbQupoEtJzTSLfd9ETF2PxkY6ZbZmS3iDEzFb7wqVY7dV3i1WSMHtjKhkhf3SHuka8",
  "key30": "3cyffQy3ciH23QEAXNeJegVvQCgvPa2ox3W3vsTAKZRJsJ9Gffzez2qZfotvPmqhCV13t626HNmNN8u75K7aLHrn",
  "key31": "Xj4H6XmhCLzch8M9smbCpt9z2kDi2uHjyPosYZkt8adpM579bqo5KhiRDQqrLjLumjCKnzUiod6C2zRK2imm9Hi",
  "key32": "44n111y8tiiumKPcVuj72EZCGjezhsiJW18phdTjBCJvSub44Zpz4W4K83shFG51FEYkiTv7n3VPvh35TfTBqMkE",
  "key33": "4i618MoACHWX6pTpEqe4kTjVQg4n8VwBnwsEGdnkdry1qsS55uV19fNn7weii6AN7rxVcxAsJ92xmDJoe2CGZBwq",
  "key34": "4MLViPB6EcAN8AoCwHhwBuiKmC8kMZmiFaM1c9apkaXn2DEHMbjZbLYayQi439X64gv89RJG2BFKv8pCNGS88rW5",
  "key35": "4pn9Lj1xM7m2QWhPgmmPgwT6gFWgap79kZ582yD4NnCrpKasHZLUyFNB77dzyN28Tje86fA19M6oGygENYxvAGQJ",
  "key36": "2C4SXdw2pmkJcShyrZkvo9VZteDi63iRP6QAKXmFaY833VT7VD8jAK3DsZYvN2puXmoGNRbmYTQBPkfGYTcxDacL",
  "key37": "2BTxqPnz8UrdZARhaSrkT28M9TQtd5F7WSPouXtcppMfQ7ficoo9qEkdsPs7t4JepV9x3K47KgjtNXHXdykz4dNi",
  "key38": "nq7TSrCf3m4t8FpDLE8uiMH48QFDEAX6SpmiVAXpy3Xzvy5GSTYWpTxb9b5repwsDDXutbHy7BEhpy1FkUsSBDN",
  "key39": "81Rzp9NNZGaWha7icbXDU2TnoK2gWDpY5Tj4bNnokxC14HLDdxVfynvuPtBkQaJ89pNW1D3dDrEjxrbDBJE4h8a",
  "key40": "3e8GnA6DfW1jkp5gwiGhsYy3gRekypM7LZXC2qWsFMbfLhSEVeBiz2x3j53qFdFi6vbPvA97QWUWAok1xZa562k9",
  "key41": "4PKW62Nhe7qaFaF9ARmoh1FFxJf6MDm9Akwv6vhAfvVWb3rfGkgAzburDmYci9A33mGkBgVQzgwksbVyhUZ8WrrN",
  "key42": "5yUT6PHMBBej1o3EZzasRDtouqUaaVszeKLKJh89BGdNLydwgrHYwHkVoRZRTy2oMdAb8M4L5Q25pcGmFfUzpVnP",
  "key43": "4hfRaQL2e16PZe82uwKoA6gHAw8Dy7D4siP9fT4zSxPpCK6ed5dQfEiboVf4EMrMbLiyCEd7KEVBZyiibVPUdFHG",
  "key44": "3ofSUWJd9ZNDVF11bTqvUd5m66b9Jf1cEZ7dMzST5BY2VgC95scsCwMcnUW6ukvAcXuY1iGaj1ga28EZvikHSkiR",
  "key45": "3f5zhfLLMD5bv7mTAJy5njdGGo3L2V3s5HAK15XQmWVrqPhucPm8mu6q6JThVevp3UMM6AX5AKU1X9GAtuSPLY42",
  "key46": "5Szyptg3NQptvMWwmtzRg5CcCkjXwvbpiKjFUndG5b6HqRDXAp9S8TPKAvXave2abqmS3tfQLRwFsiZEripZpDns"
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
