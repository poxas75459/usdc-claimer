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
    "2fqPLHCvVdegJBMva86r9mygHa91AhyTvuJrbcnxnxoztEXunQcguqdDLnY8WGXwzHGLwQXUFLcY3aKUSrKojYR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T74jaafy29p6x7CbqzZQzRDUYS4kD8CwNs6owVuFqwkcLqx92ZxQrfG9sLpM8gEwE3BBfNrrzFSfDf4p1YfmicB",
  "key1": "g9Gai4JWXpjx672H7kfyn1UFUaGurYc7JRAHaiipWpi4MLj83WcfpLcVXN4m6iCfdLMG2G4ZjVznh2P8dsMANuK",
  "key2": "2BC74YBaDzhBEXpT3zkSaHCpCn3ysV7X6HPyukRgDfueditAsDw7GcxbrRDp9wzaSmfnEqQN1WwhXTPrHHBdyMyn",
  "key3": "2At2abiJ3sqBy1u9MXcNdikJAeF6Se41uaBzmD66aJuorr7mpBfwxv4hY5keNfJrSUDm2qxDLhLWcUTgfdhTK4Ch",
  "key4": "3c2acPoGz9Duzmjbix1uH8ELdUJ57MsQNNi4LTJAFiWbxHm8ghQi8ucQJ3Scb2RcomGdNaGYVsKfM29x8w6CBGcn",
  "key5": "3SkmE5BXX1CFNUdUU1absztUiGGMUK5oDka7XUoA1tmQ15BMXqgLL6kJr4U59rZQAj4CKnsfmsnzwgwrx8nrAskG",
  "key6": "18DAG1Tzn1qNDG4F2v8ZHUQdER9f7WHYFdAfrQ6j9ifABTWv1CjS5LkP2cqEK9BS1gAnkNHJsEW9uHKathVXCYC",
  "key7": "2oEd99Eh58PsDLEX6DwtUY3UB7HsyFLR62iq7fqyG2d49WprRHQiKGVVjZ9gbM956et4sa7bSFcKjQ9F7HsvCnmd",
  "key8": "3DChjaBpbFvj5LARTWf1t6MZ9rWtG4cU6SxsFkihNik3bDkZxeN3m2fExfAyLwdZKgGZywmatf5Bsd8jVf55N3DV",
  "key9": "5hG6LEkj63J3LYDr5g6cwi5SLHq6NQu5A9fCJ7V3oVXerhLLaS37huD3aE7fBhgCsLntvJkS58FtdY6ZDoD4UpcB",
  "key10": "5tpPjMoCzgG8mxTP92iZ2pCezEbBEFQnbHaQkGw6pwrXYmsYFDa71bikCuCpt8xu5CxwtdQnuwYX77t7cGj2RryY",
  "key11": "3pxifwLoBBbCRP6AujBnswAiKLBqjfRmwHnZw3ufYdf2qb8GMdoCt76eFRgsdAohfuH6D9rDtgvdMNq4kCMDUHCt",
  "key12": "3jk4cM5wrCuJGGm3SBq9by8pxWt9XwWmkuMHGez7heanrFhoudjMuE9nFjHoTW4vE8o8GdAkLKueU7y4HScFJuho",
  "key13": "3XsaPd8129rCJvo86C34FCjStBhGGiFUBGd6CG2fTY84TJXwbiEXwYumywoGYjXmeRDpCbLDn8SxybqSyB67utVw",
  "key14": "27vPhBjycgLqhyDsXoZXNcF1yYSv1P59bqYHeN4gFGvqRXRT85CTA1ZkFHrMvdQZwnxinAUZMcZuNgr8GujLWT5T",
  "key15": "4MwzNLK2BbZJVR28JWZJW8LLfkF1DMSEZmHukH3QSKVrefQoigmaHv4gcvkVQXt1Mne7WQH5zptbfSqUAL9oUYjK",
  "key16": "2ozVza7VTfzB9x2oiG3XHmepyAMrfp4Ad7cXBHRcS3YoRWkoANaHa4jkLQJdQ1pSziEzVMupkCpqS4yGWACvUqAJ",
  "key17": "4aoEMUMwwYnsyh5LcUtvUjxvEuNB2RrzZQZkCNpV4bdHfhbHsQNNmWSQcAGYynBJouf6rvo5t8VdpirvXeV6y2j3",
  "key18": "4sy7d1zbDcn3LGxWCugzmvWc6S6zViEUN9WgnJP34LfCpDcYrK9vpeUnR8p3FmYoSbcX4v85GXHf8LgAfBzkDpc2",
  "key19": "8onBcZoPEhNbxZJTK1KiotHpj7dCjsEicvanzgBvnK7Bh1YfpfePkfvk7kTLmc8yrTukH8eedf515t2DZaKdvfC",
  "key20": "4vdUxMYRfjzS1syAha2CLfJgVWKZZAHynKQHDgfDwE3SswYVGtpkzenK22d3497Px4Xq1nBnN2WBYNTT4YuNtPD4",
  "key21": "ssF3fC2mN8YPoFiLFS5WBYTUCM4jz3w8wnHFezmTGk7c7WP1mhSFfP7snwomDAE25kYKPLUuTzJLpuQugacv5yM",
  "key22": "5WWyJqX2NisKUN1pNfUXSChNkL4q7MWRwZ1yqs4SsvLqr1o9ocPgX4DzSQ4UMAH2AzBDRE8yPFZLrrpGbmXNWf9U",
  "key23": "5caD2Ja79rAvUMcPyHN5nR7xiMs53A5AE8phRuwtic4wq14EWCVsDzuWT3CAu2Gd5nMWsCRRsEgHW4kJRTypLef6",
  "key24": "29teXRfZfNAfJ5QYoUo9rJ9H5G2NYpdH2W7EP7a3ct7TYdWWYHrcVjqUecYossn5EXvJvxehe9P3GsRiCUKEdVDs",
  "key25": "4N2K4FuS4sUizVv2tmQD3R8Z4bbUvr8RxzAaErsfoWkPWq9Q2FZDg3XG7qBSoVr899fRiC151WJzwDsauuiL7qCc",
  "key26": "2G72K3ZuVxwkWgSkq1J85GmrycGNxk58a9mu2Ki6RBLmy5JLaEHHBpMQe4XX7e8Ebq69GxGj4RxGKPMnaX15b4Da",
  "key27": "5a8421jLBgC4qVTj4E7KsuVKkkviL5R2vkj2N3PZMx3kUMmUmNk1o5HXhtkYNCAzJi4ptaZNGE1s9ZyqPwUeYW7W",
  "key28": "4fguBcBsymSAb6E7zLeWwVMbCfxAawUfQ7HtLkmV3qXcWyCcsbZNKZsuTs1ZtTke48MFVyruz2pXJ5uKMtErf8zn",
  "key29": "2xheAMJYew7wPcNBs7Qg6gXF9knSZpEFse9PxRUut2StTXkdaoMXnTJTFp62GTdj9tKq2a6fGPfewTAWj23PWNWV",
  "key30": "3HpDNt9Eb14uv6BQQXVFeHwWCtMQ9VrwM9CSS8mj4kPKhmBvt7N9nmByTKDxEZ3iXjcycGDhipggB4yVqD64zko",
  "key31": "2kpek3eP3BH7AZ2v4mYNxPr9mS6TREgBJuYC9x1KAKJYLoM77YfiTQTw81pKquqXHrxMLAburisvsdzVYUiCpoio",
  "key32": "Q6gkZ562CGnTCAk9hwJhQgjiDkmi2SVezDmW3fo6yizCdAes8Jd4iPEnDcGTfLpqaHSf2VcTB5YFevt62Ub6gSk",
  "key33": "3HmoJbCxX1xM42oB6jwgheJ4ysuJ87uzybeDXGk3PWBALN1GMC6n7xR9RJd1oV3GUm5nZQ4YZakfdzJhxd8fRd4b",
  "key34": "66xZN8YXHHHN9ag3WciLCtSUoBD1qSMTqEb6V5q9ajpLkFsFMRiNdWznoUWuN9NcGw2jBYGhZLyjRB4A5TDPNxG4",
  "key35": "3SBJHYLuhBAGQ5Fb4iGcf6Fewf7dxLpiRi1rUbRxb7rmtKavqyWw49eJ52x73jp5KTz2n89ZgBdpNP3fh5KrZwwN",
  "key36": "3mjdKgm76gXtpo3TasTrfFNL17EPHG2udZu5SoAtTyJydroXDGE1CsnqyYynX57sT6FTybme9EBnuPvQTKJdqKct",
  "key37": "2YaJtJk8PuMsho3KVhKCbGxF3487Zes23GFFvrdWyNsKkaeojSpNm9bzUqtTL7Asqqx5ENt9gY1FBzAAeYvjuVm2",
  "key38": "VT3NRk8UgrdKP9XmVtxCMMVaAmeCBpQeoVTymnVEpHkoiHPYAoi68wfwDh9npKvHdLcgEc6nJNMovg8ZDX4V8o2",
  "key39": "21qcpGyPhCKnHeFF9SmJ5PeHJDaJeafkX1hdALRS3kf4Uk5jP9zhrDLvoaVEBWGrHYWap5zJqEdUE3k3Ww1SPuTs",
  "key40": "WA1i653kdYwJquZs4KF9kZug1yzq4DFNoC1vwqgpMRbyBPC3eg39Cs98K7DnMp8BsANqV6Gf4b2bB6Uf9YGEZ8z",
  "key41": "EHxoFiXK3F77GqE5DUNvJS3B4Ee5aGp8BSnBUQApGXge6Vy9hr5Apz3gVT64yw95ou1QxVgNwdppErM8tK6jMhU",
  "key42": "2HYgNiRnhLUmzFzrUwK5BhDoa3TMC3S5fqDJcGVk1BTUujqZPj1HpnUfyrLU9DPf2LS1kJvidRtiLcLLVYsVogAv",
  "key43": "2KzihkuZNaENqWpVCqckcxquAQCwi1KYtC7wyzsxmyXG6NsJ71aJKiyE5c8WZzQmb4RX8vUmeUjDzmm7nWs83uHe",
  "key44": "Qio1G1gz9aN2UK7NvtUH8Nn9a8KWC7Y1RS4ayeFeComT3h24tWdF7Wx6mAMuHuGQQfY3ZP1JA5i9P8SBQT6RGkE",
  "key45": "3SXQSDy9FzpKGHUpJ72mCjtGCjF8E1n8dh82Su86m54eryKHJRbYrGGhAp4odeBDzoLYz4rpk896wkLfNAApUp16",
  "key46": "2hqGXCWNQsBiPifVTY7bYSDCDQhScvR7sZStVQ2YPBo8gJVBmU6MGdTXoGY37FJkhQK9niaxk577wVc49uZbBWDU",
  "key47": "2rBmQ1WAgpoBYCvwDrkpjSjxtSLaHX1BbAqt2WCm8kQEeX7hW8isozfZ3CqQVRn9mF4e7AALRJcU7cXyKf7Uncib",
  "key48": "KyZYP84TgNu1Snkjfo3ecsRvizgm2xsLzHwrJosmvzCpeZ4fzEe2Bwk9TryKMU4vKJPw1nHnq9mSX4HMbETygyp"
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
