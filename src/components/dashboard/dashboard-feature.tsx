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
    "3b8Whs7BtTFMEVaamzdKtSC33kFmKLrXtb6ytfDp7jkDpHZa9Xu2LYLZoo5Z8TfqBbadqPK9szH2PrAmqZcFj5xK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L9RJqbFG2NB9Lq1YJK5z6j58s3fp1bh8hNbyUjs29ZpXqjRXMVKfr84osWxHQc3UbcSB83LS35C9vEFgY3vEC8s",
  "key1": "3FC28jcQY9XFxWtkiHhpC26aMwqq9ENUMkv4WRxYPGU38dgHFeviQQasfDzR7hjq7HGxZFubTAAvMqkNQsLvGKXW",
  "key2": "4Adp1i18TJgFqfpgUcZyBPANJtyPtSPAK5nGeTHGcKFuSLkr2pnUP5cAuUttweT4gKpqzDhJPSNe1FVCzWoBzH9M",
  "key3": "3JFEjRgcodxrjBpt41TZFoi8AEx5tETy6MjJWPu3SfpBDpU5KfGPmwAwFjpbfAKihqXuj4339Gd3SgG8Lrk95vde",
  "key4": "4FiJoZo4AjqjqBe51cpMePWBp59ruDn9Zs9xaWtGSHWbUwH7yE58Wmegv7mxod9ag4CUoPBBCNQdbBZwpxVE8UFm",
  "key5": "5FTcEYwgLLQ1MkuncjoFs89cF6wtyEbnZrHUmPuuc254wvdZJzn3shwueEBhKCpHEGjA39hXDZjufc61rrtUxrfY",
  "key6": "2JvrtU1sKHteagNqTJBpKweEULLBQjBjk3XeaKbSneAZbbT9dyGUxaTxncVz559e1N27jdY7v14oqgSLynEDpfAV",
  "key7": "5jNXDZAA41xPnB4WZThGvjjq248arbmQPCreRX7HVsrNPMr5ka7dA3jtDGrwHzdWmkLjAqY5DAwtemBXFUaLZzY5",
  "key8": "jXCtoDXWvoA75QUUto676ARepnRJ6kVAfkwgA5jNHzP3uRVE1MoS6T5sAiNJGgowCvmaazMDYcwAxDLVpEidovt",
  "key9": "3fP7RpKf8A2LShGKa47G5sWdcptKtnqEsVtp5sXPZ1P53wdLCdab31jr5V9gcZAJ29Ag26h6Jnm5B2oisBAQEYU4",
  "key10": "hiiPMUKCdWXzmTzRs9p258uuC2KEryhDEpeuv9C3iwmyWQRLydqFiSfdkA2BkwZLWAMftPL889duKv25A9rpzpn",
  "key11": "2ZHQJwneLEVZbtLtKokMK5P4Z3b1JcdiRrRvLmSLtbRpWbRpbSm5WtdXh8VSDPcAAsDagYq9tiKaJL7vY9DEBMF6",
  "key12": "4sqvwe86m7Qei12YHLHYpvVWbiTjDSsM69gh1AATUybphVfEM3LghxjsDJkob3EAh6bKyVK9eJnUnUMuSrW2KuQ8",
  "key13": "2WpLV82AAHNyMNnThJEgNapgn2SM3qmNgTZ7SbiTZR3Y7tXtBVVs8cWbxzn24mSVmRJfXWzdurzuQspnW3X538CA",
  "key14": "2xZ3PBXVUoKDMaRECX46gqkKuGzqCtTk2kCzK6BHqgG6q2AMCHHRqiBQEju6v9ZmdSRVkas9Zcs3ma4LfgFtEZUS",
  "key15": "46YwrQW21fon8mUiAT9vq8TV9C43uiFvrdpMTnpeBMhC3GDdTAwhVauEwtQALAp4yNVrqFQepWzv8u57F95DvYfZ",
  "key16": "35Dhe2cDwbRfp6yDKn2EHd8uGqcyaegBdb8TdESDAocgmL6LbYURSjT5d9MLmq2q56C4Wz8c68WH6CSut5ZSUrvs",
  "key17": "3ufLZVcoRBcCRmgNg4D7PzYNnvDABpCaBHuzEy2aphsRu9VyCYuApBbKdvA5eyEXdZriRrhGMuEs1gHMxdGNhdk3",
  "key18": "swuqWnBhHrzVH27jiDn6oKQvqvbAHsaRWs1218UNXzJMdh12qvnKtbWCWzTc9TMs7uUgSqhTDV8Q9cvax65Zqnw",
  "key19": "22vbVRwp6G8Udt7RWwXkp3wHpUd95LnBgGnJvLGPFxbVxBcMPQxhEfaRH5t4WGjQeMdSs4AhdwYZpPphxi8Pa7aA",
  "key20": "4StMGnEijQJXBKoVHkRRnqwHtb2cKCaJEanPqAZeN33Ahj5mJvAq5UmWSjGexvHXgvG91MS4H342nZV9NsgaVWtg",
  "key21": "3tyV145mrEuuWitzZGNi6UbRBhcUvrTedjVPi7fbCyKkqDsM3NhYn5FY9jp5GWYW2n3uzBwWpZa6EJyrDSmcqDVj",
  "key22": "3iNqhyMZFqdwDQXrx4dWsv3eP8atUctPV63gVteUKSFbpCsvXnNnHdUWFtEWrJRa1q8fkVWywcsoLiy6tBm2ZWwL",
  "key23": "4TPxY7sTUskLAXBSW9gkvzgRZkLvFFMB8a2HJ3Fp97ao3YFU6Ar2tgoXZrbTgjdfgwP45tgTot56KpNU4h7ioD2N",
  "key24": "53WKQKDGyQnW6SrmJPVmsP3dYsUPjP9h2C998mN4pWVgxmDTPjJRDLJHFj4RWFcHu3fgpJ8Vwroz9L9m5HSjCJEw",
  "key25": "56wZb6rH2KmbSumCHGc12qMD4wDx3vQp1EevB1YmBafEUcA7FJQGNQ1rNSjdJPrbzg3mk5PgiUW2Qox9sF6u68r5",
  "key26": "46FaoW2U5VCDN3cfT7i61Rsk4x6wut95L9d8JiQSefDtmGCKDZpUPa91TxXg3CARmuRq6DgFAqXR2CxBux5xuBuN",
  "key27": "5B95EwwXg2TQLE1whvNkSgmYPF52RjVbj6m9phU3ZfJiHTG8qVQdVRzxUB2mb45WbGQehtrS7LFhV6vSDqL3YHRs",
  "key28": "5TTArNg87iKMaFftPpYYqh4PUnFtMFyrHBF6d7odBHPNPfJvqyh5tzkxCXrvx6k2pHbjZzhjUr5HmSveADotHBAH",
  "key29": "pUtLjdwYXkfBCPFudnJNaduh4htEH5LbfxUiR9u1nxiRAVZVM79quiXvdKYzdgWfakRSgkYRjHAN89Q2vr2dtfm",
  "key30": "5aMbD7RoJ8XA2WFGLb7W6MhRq8Xf6DefCExsxza2LGeXt8wrUfNKdhnjhuAxwcjzSDos86QWbzJJNU9jCmKSq3X8",
  "key31": "4HgMb223yWyHS2sprKviYcvEyJ2pJ5B6xniLZwzVvFWT5u38drV7kwSBBfKrwbuGGTLT6qM5kwtxys62LsnakcKz",
  "key32": "2fMvbJCEPwoL66FtNwFP7eztsDonuEucCTkWwx1fzGjnLo7DqG8FRjqhoMHBwzEnwgwNkGuMYeQV5ULFY68b3kam",
  "key33": "4GPb9UsyvCvxZU87rVbHdrMx7pYnkm5VnsgSLEbbGGhnEPt9baY7wJoXHfVT6hvcvDTQYCzsmSE7MtTkhPX5GGD7",
  "key34": "3k2wDi7ifB1S6ZvwxvUTJW4zQkNpwM83fSNoGYkXpYPQLYLHRu4uj3i6QjcjWN9rkaLRRAUbNfkLFeS7AWkNrg6d",
  "key35": "3X4jJMfRTaHTyAhhcRATzZGhqN6n6B5niDfVcLJsZSvtEqX33HDyrbJnouWsDhyGoKL6QjqweLBGuu72t9yAw7zk",
  "key36": "3BrLEQEgwhwdU6vEvZuE4nBXsdefKjuPDH3ndcb9QsnCam3rsheQuqFGPc3ovFnUc6BraM3wC7MDFck9WqeUippk",
  "key37": "5r9KPfpu4SbB71BtnbkQezHfKkubBRNWJa9cBHR7kCyoqHkzZeswrgER1uDxhT6hNkHtF88tZVQ3LUXaidaQiaWD",
  "key38": "63Ss6jyNsFswPAUsLZyZzfH2pDKCokwk7FEqhzwhEKxsxk9qq3VDQthb2L2ZxR4zCj4JH8tuiEwD1PzEi1hmzRau",
  "key39": "4Mczch8K6MHsnJkvsNqrqYrfHrRJDSbeGyuACGPUfFCkB81BEEwxmdMVi6awRiss35CTMPWeF1E2bzA6j2wcdRXf",
  "key40": "5yTeB74LMxfhE18zEGLxEtG2irSPYuk2FD3UH3yzwaWqGQcxNJUj9ogHm829STJJW37f2cW1i2kxDcMJnCDYhiHw",
  "key41": "2Us6zhrkxyZjc4v52jHr6HNWgFQ2YarQtyNgicVf7WAM6qrgRvnkKNedJdtAB5kbqNy9SKeQn1A2XzzSJnqccHXC",
  "key42": "5C5bTxRzDL4uk6Doybcafo9j1Fxpfrja53tV6SGT4XXP4wawrUxL2FyqK116z3bKso4QVpqejUBpjjJqXESeTt6T",
  "key43": "3NXAZ3fuZLzuWYtfnFVtTzi7P9CEzFjfcALGzdeqQQVXb9CckXuqMAQcmoZHiBsQTCba1Rcg3abtLL1Q29z1Jptq",
  "key44": "5su5W5SpzB8NngztjJTGEqcpbbGCkbXAehvddSrDB5dY3mUpPxQiSEDeshxB4CJvJHpxbVT2Zea4LZCYJgpjpHp9"
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
