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
    "4cYbcaAwdBizVoLZ6BsERCXY3AQ2qF5WeFucHzEGwgzR11tawzvTggXwYy67ZCnhrx2KeNu1MTtVZawxjk3F7wrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k4Nd3acHoq2PS4bzc5sdWduGnxwYVUXDrjpozoYyAWCoBULk5T1DvpwB5e2RbEoyp2xw8n5D5Dj24e9wP3j6Ltc",
  "key1": "5bxtmVGVw4M2XUzP3h2ZFxghkYFWdtDgTqMBVJx1hdSWnB1uWTkbjGw6CMMAh56XAyTqMQncDRxVJJSCGtmFk9Qz",
  "key2": "4DaQ3H8FTvPKHEFt5iSyZ8GVTj1Zr5kaLUY2Fue4hqxx8rsphYBejNop1WD5FMGKan4SaYiGpRmZuNTwY9xm741a",
  "key3": "3ymGWdgv8PYyjXHjgwaFDU74TqRBbMkx1sXy2CzC26zFgb7uNmBmZgHuKxZe4FTbLQwQK2QVBAtsU16B1CbAfNx3",
  "key4": "3anSWnUxv5EDgap2e7TPmmXb5hsXkBJwhUx5hP464FjUTSsbixZ2wQKbLtndYZEHvEaiRPuFBGgWxJvY9rcopjf7",
  "key5": "3WF6ZEHwnarQMy4CnYM8CSWnwDhNBwowJi4EFrSAdwgYvaMSeV7TSdtZVHnaDDQRNo2fw65YpmHiJ8Eo8bm8yk1m",
  "key6": "2zGc7oD7k3QBviS2Ukie6Rc9JCGqCTe7UpiFW68J37RT5MwPTDJA14Hv1EjJe7MdPFWuhchRKzogjiZRTJMps9em",
  "key7": "59R85sKJnLVr16ZVhmiYvvpN9wrhf8xW5LS1Dj6Fi5D7rfnEWADBVtnNhcmznKs4G7QCe51TMnpnDrn8fcbQaN4t",
  "key8": "V7FZ6puahGqd8YDsMsbZN8KJynqdBN12svtvArJPQfX9XsefASLfWtJjSmeC8Y67oUXJJMFAkzg9wAjbJDstaks",
  "key9": "2mn7Ssa1oTZ3md7YG74efxb5beSqktNFZhE9hrGsU9bgCxD8YJ3z5dXSEqkd3wzjZvrjBjdNevQ8trVFfQK76Tk5",
  "key10": "25ZUp9rwzaYucMsTz2ePkR5ow6gBNmYm2AbfyWSwfdqP77dp5nkzKe3VPTnH4bj8QkAicbqEy59X3JTunmqiGsvJ",
  "key11": "BjBXasCGioxwxDkvvsWGHaRqXCe6GAswTyALwxBj52vTpgkHzaQ9c4yHp2W3H9qQSXHb4nWkaoZJAt5rjs3yPtA",
  "key12": "53mJUxKabaesVy7kyivAf75UUkczv93N4DvkYECgBQnEHQ5ifEkD3EKW6A1rtXTSyQjwuzXh9Axecz4PVdFFVuoC",
  "key13": "2BKsyFN1aGKUif6ztWhwV5NocCqGFof5LaDJ6mZkUuMZQdNAHfQmLeKeCkrvGq2j6XfhfGyFhgZiXDzgMVC67xPh",
  "key14": "4vbeNYAUXErwT7ThXy7vvVwPeNNsucRiiZzqc6fc7cnVJDTFos5idc5NSQtg5aemR6NkYapSRXiTSw7ntxFFjgwc",
  "key15": "sSYexrd8839SHxLtiExEQ3MA7eo6wCQDmziFb7t2qzqiKiXdFvnmqM5XPqhce5zxvmi6ewknZhxnDTB31VJtXga",
  "key16": "xxLSAVD2wdpA4pLeacCtLhH6zZc81guFbuRGGqYoxvqtWjqkvb4wLpzsi2bQYYq27A2C9y5mHQt9bkriu4Z1Mho",
  "key17": "2yUDNhqeY29jDDTQjQng1B9Puth59Uee5xHJGHaYFnwBxEmJwtbRUmBycKQQ4vtqm9uishUDiATfxQjJvR8oZUvU",
  "key18": "2Du2XDKv1CCUawkG5PG2bbNHg78EkPR41KUFD9e74eC1Tr6SEhJaBh6jofbtgGQaz3Ywi8ESgQLh6AxX86YtHMYE",
  "key19": "4tvNTDhDFHKSnZ3tRE1BeXQ1H3mz6bu61deDmktP7N999hmz3p2prKQw6sWtg2x1ATLtxzy5kVhX5itjD6uwqR2G",
  "key20": "4SJp2dqrDJSWRbmDx22XoZ8ky3srhuj2mZmxPPQhyjrJSiwTP8MeRwCDiyeiy1hiLLRdb54ZZPCQBbWiuJ7PcYex",
  "key21": "bjiypMf4yG5c4NjobAkmWwibA6wP6TynmVxXg4bj5nom11v5inoWRXHxwnwJvQLptafEVk97DVawmVipePjwB5f",
  "key22": "5uVxfsrJtGXGQs3aYgo5vXzjQmkdgjZJtvXAyBoMiGPRAZMg3ezXWVgTmGvCUWkmX5R9TipQGi5DPzMbbDQs41k1",
  "key23": "25jq6ksLTjrSeh2g3Y72oTL9htbMQyT7PpnkEM7ttJ5yB7QHe16RtP9g8z9EFQaJSeeS1kaGNPHETEQTv6dPwVh6",
  "key24": "5gDimJLSTFuirpJNqkE1KibfhZxUmVmhm8uFUb5NPMRz7g2haSxvVbc9Yn1J9rgkbeYG1QQN46dE78WwNtyfzRNx",
  "key25": "5L9tYaGG2e1MFrsPRMAr4YnQvpVyv7EWaHnNqHoikkUBQYhtBCGJ366sVEMzVmaW7vRMYFaSBSLWZYWU8HwoHuxB",
  "key26": "5P86pdy3KCepJoj6utnrZxJCjErqCyavp7ZbBgN5fh1TJBC2NZK7LEM2J89YY4x1V73fLipoum3G3G6KuqPrkxPj",
  "key27": "53f1RqffMrGnbuSPXCjVBa7mZxzWbD46KtA4Tm8nRRwqLF9ic3H2AM51UuNePVDfhM7rko8P9e87e2h14Y2qcpG",
  "key28": "2osSqib7LWy3yXDKXgyVyNfSykE5jVK4K3GQowGdU9Ti8f3aEYU371yf9idJDrELA1Mw3becHQMUtEwCSQ5rBnQm",
  "key29": "5Hyx1x6mY2fjpiuu5LU1Z3EYvGtKxNSbovKzKezmXptHvYNZJPqe87FTXamMfQNbKMQM4ue5nrj1kVZuefdBpnRh",
  "key30": "4q4RjshmRMsqj7rSgSXakVS5mC1h6KUqbZZiiBbfngVzMLNmnJxBk5ruiRziSz7gQexmUSwSwLYJadv9e2MXugFt",
  "key31": "2tBHaqdWf3yBy6USwKQkCdzKiewg2ZS3W3rcEgSnUTJ2WXWrZbuz5sGeJ3NuF6BZRRuv9eWZ7RjzjgZKCEgkDaDD",
  "key32": "5PGJ3kLZYAxAs44iQ8FbN43oUEBLAXYfa5xfX5MBghPzQSzPZqP2DNnwB9ohSv8QnZRGvqVorRazheqFkxqqcK1G",
  "key33": "5TLfKfowVcMAXgR4hw71Acva7rwJMeHFxtL4DCspj8ERNhFGihkMQfEAriqRjYwHo81ez1iq51d2vvzkKyhYsjGa"
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
