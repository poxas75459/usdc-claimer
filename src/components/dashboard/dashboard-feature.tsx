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
    "vmHa9UU2bqT6ZyXVoAfjuhPuugcq7fm1JSbPYfq9XYQBPjcwwqwiF75YgXA5mVbi4ohiXQoJbkkfDueezDApy4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FADnyStDnEYAXaPwxWVv3dgxy6pkPpnTt3AZ4xPCNtmNwrcQrrdxCgqKx59sKUuewUKakmUYUbGdRuCreW9UBkQ",
  "key1": "379adNtA3utDpw5cyTLg87sW8CBLu5TNgJuBBZAu37ynbWsmYk1AmCAdGSxZ2itH6pvuKXJu9AmWs3Fnkd8kk9tQ",
  "key2": "4B2yJNGhp5U2Ew8Rcp4XCx9bjNTgF9pj4Po5iss8iNpU2ghvQET4oRvuzDpo8qudfxKFGzvwfpkzo2tAHrAbkLn1",
  "key3": "3T7XhARHSp5tbexMWwsjrJMQgvDUCKtRB3qjD1G9vzVoKKNcauwASoCn6kstyPydcfqJ24L81G7L2Yv2qDJBAxiX",
  "key4": "2wfT7KZym4giZa6M4dLPHSJo6uZeTqCdd17nNx39PfR68cKoxhsYWHXvFa6SojoqayZELK9stg5LcUzCkLmxEG7d",
  "key5": "4ZKKeejrGtFxB57nrN1tmTpWLn5bcvj5AULG6g34w3VGap3igC49ioqny9BUHLkCoocqDJaxzngmnDFuqUG8vbrV",
  "key6": "dv7yLcRrRm6RNDyzXtf5pfRaYhedveffffLzHqHZKFLQybj3zFEHWXH7bNyZXJB4JwdRJMX45doPLcUGwEZCNys",
  "key7": "3jX4Wqfs4VbGntQLEJmcBp4MuxsyvuGnKc56dkY3NUntSU94HKKXaLqRzPLKrtaSsYvFYyxhVvUCpfL5UwJBaUHF",
  "key8": "gxmRPn76NvpNvqUEKrXhTncpmQPHqnuXm3vbdEgZtjcMTzNGxovsPQKUenuK3Xkzdmyyjmz9obJ7ZVThHrds943",
  "key9": "3ot9Kwce49Jbzr1RJYj2zNBb4u8MAsJGLD19erKeoJCULa2cuLCvFLEJgFt4H1qkNtpKyx2SB9Gubf2rP8BBgamH",
  "key10": "e8nNc9SqZMK77ZVn2PWv2rZZYRCfBB6uYNhghnJAjmvATdAz9rpFZ7wDg6w5vH1J1DYiWEXhYfY9LmCkNWvmSEg",
  "key11": "5JNkq9hTQhNdppthynByQnrJuLZe5hWJFKJNsJjfJfC9egRvMDJbpeuhuSTEnA6CqC8Z1Z8gXkMKzzat2ys2sNtn",
  "key12": "5xV5ReMvmyCkf35vpqxNJzbKdvBwBxA9A7nKBfveZsnNvtSQLGaXiWnsPHMNhaKigRA5TwS27pkb5BUbeAi8mVeX",
  "key13": "4C9ohsF9G6DCPZamytnvTBNPDPfJFBBciCK36nQgt6NfoqoWYYZGTDfu9NDcerK7wNqJt9UsdKUH1bVAM4j4suuk",
  "key14": "4SqR1zB59BZQ5XB6FijmWednLwysMRNPhy1otQwBAj4rDPgshd3FKomRhKzn6py1dpd1dCJxbrr4mGKuP3WidVJQ",
  "key15": "3Lo2mARr5tubPXbf7eFeXrHDrHoACkZ4rACZqYrezvvugiVB1ghzDgWUzCZKViC2agwjKGxVae1mKbyNp4n6YnL5",
  "key16": "5uUQweLytNefWGPYPRvKyvyMRuffacUfHa6BTuyqiHXyrSiXThqHQJS57wt3vjfirN2mcib2DSQ1seDhRKNFoP8K",
  "key17": "3DnGMfFBb6TxTyr4TqHbhr5yWPNCuRCnC5FQgewoGcczfLcEADtpUKoVgeTrh5HsWEhtGRjNDWDKdXD8K2WESKQH",
  "key18": "56xWFuhyme4Gu1k65pv9ZvAwuesyC9C6Se6qkAMBjPMau2XKHvZY2rPgaVMxboagEwLVhwn5Qm27UC9qYeVfyXpb",
  "key19": "5Shg7APF4RAxSGogpUeEwzccwSEjPk4XrEQBSmbYaxKYkrV6Eyd4z2D7rmidZhxeRTrqapontRGCt7a7ofQPtCpc",
  "key20": "3Ft679JVDt3mgnwo7DMKCWdBS7cmeDUMbMiWzveChQNcFqNZsj8MmGv1hA262Hmat7qsFoBq4kP5LpVqmiMZ4viy",
  "key21": "4C3wPCNutLS5thLGSrXUccoyuiEHGuxvcNUqRn159Rwe3yVGvFyLmzepmbVuPfiPXYxCCDomHEd9XYr2AvMnHWhd",
  "key22": "4mpMxADTiRdX9yQqowrt4fh3kdKX7Xwkbg6hRioi45LqQjGV7FtosvQjv3cYXR6SaB7rS4FQoHxZT6xAdJ4SUUoF",
  "key23": "45u3fA8vevF8JikaeeHPdaUnVXwDtpVt959En397xLZttE8sGVfqkaqPLyPX6UG459P6uTXnbWAsEYcMqJX2fc6N",
  "key24": "25QMYV1nAtpj9gP7rzNizXAe4Ud6o2u3C9ah6p1Lp3RB61Gg3m1YkUf9vrpicRBY6oEYRQ7bH6DgpJ3L7XMkxyxQ",
  "key25": "3uQ8931DEdgKqJojN6TUdKyZCv8SDY6q3u4v29sc7Qeo1nv476yy79nuhSusn4U7jMp4xhUtURDo73nnhmoRWsKr",
  "key26": "2T4stT2wp2VBETN1DtRAmDJQgsMDAYLwq8kDubNcj7vHZgsxDzuxKbfm49CzbWGvyDniMgdJiZPD6DLywX1hQWfn",
  "key27": "53HMWTyczuRDzkFvwf6XeVsmabxyh4TEzp1NJuFJkw4HwySjdzuTZyFDcnoVuei5vL11tMaKrzo7xLcFuwvziEJn",
  "key28": "4na7VxsGA3RfBP3quRcX7fAHseL2AUxFHN1nNV3T9vftbA7YBJTdagNU8JmbdergJofkM4ZQKNvpTJyJ5KeTXM53",
  "key29": "5DQ6EU5yZZRsQTPpX6frWQvLtMMZg4LqSnTZNxMsyQ5EMvcfaJB525ZiqoWU2bUSzwk9uQ425QNMRnTKL2jVnEY5",
  "key30": "2JmQptUBmqyydycTkGZZzUKV25JyLqLa19yekdDAMHwUziZ46PQhfon5iWQGDg2XTwJQ4VJBuJWzURvNstHUCDi6",
  "key31": "4SW5aRsCvyrYmSgxWjy7ebUBpQEQ4szvHcC3W6fQssThfLi6x6JgCfKR7Bqwj92VwsonvWDWueTfhRg8pVwc9Gw7",
  "key32": "3vU28D7S5c28Xr3V65b34PEh9m8rVj9UVKn1Y4TewFeXmVMqZKv3z4NG2PruizpyYsm1BAGHD9v11fVrjb99sD9o",
  "key33": "3EB2gaRBtxBUAy2JTkKDVmZpLMkkXKidWai9QSk82PBxFAHXFR2GJhpmR7cvQiDiwptzSCsyTUYVNbeRwf6sNCx4",
  "key34": "4i72tqH2f5uAUtBnL3aLBgFcvKTXNXKC1eaRQcrXRfoUz88y1HyaXcKMSy9RhVPhZ7pcaK28HqyB74mT7Qmh41Gw",
  "key35": "22NKq4ZE76kxJB1HSQodwTRm26pwiiB96pEzYYzbqrZdFYMJDDEC1EHXuFjM9UoQHGu64e2ADxtsYFtqJFToxyn9",
  "key36": "24gDuKfgFTNvuWygDYpLeoR3tfRzYtz6WVrF9ReN2Cvz573uWyJx8RuKaqJ9vMEu5h6vm871TtFvHQb11sFfE6YQ",
  "key37": "3RMpviYbveEARydm8TGHXar3HUGXztYuXVJ5nuNv3pW7VQcRqAaWWAvmvk42iLFtZCcXLNuLnepKA7HLrQsSctNP",
  "key38": "3EbLdaZ2gkmbQTKntEqqMFQwGAxeN3XWTiTry9fUL25bLv9UNjsGQdsEwRgARQbvFuRJH38ZJZgfayKS8Tv33ZkX",
  "key39": "5GrzS7PcuqE9EJc6SWkMsriNbk5ahTqFVKDzv1RWDZjRgjzhdy6fTWb1qSXsY3gjrRgqobZgdBH1xR3VTe6NRYPo",
  "key40": "5kp15Sv9CMVXLYXd8GQZVKuq2sQkjw75ybkkQRJUYiARz7MJvK5Btzg8E8AHTk7XPnotpzNMWUUE4gJj7YxmoqZg",
  "key41": "X8gcBEQZCVg9Kc8sjsdiFsYT7nfGFXfr5PdwtcWmgicSeofBYEKpCBT9CRe8LrFj2bxKpaQjUhuxmKs958RHxKe",
  "key42": "2YT82jU6bdWW6WEKmG5MJEpRu4FZxinXhVzokpLCvJJEGnEukQNc2b96nrc35RVTf67irAHMcvFbpUAAZVdkh8K7"
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
