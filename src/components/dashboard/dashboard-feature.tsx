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
    "2kyEqMBczM7JAoerxy9yjRrMEeE5qQjAJa3RBLXA9LEL7nXpV8C4nyK1JEQt2uaYT2e2fEPyAKkd29szPitCe9Ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oiqkp8b3A915xfJULwqrkzRaFjV7WoJvM8noSgy35AeWGqmRpnKM2wu2daCECoJmEHzjobFViveVTSs7Z58jbKa",
  "key1": "2zuAQ5fNd1o9ZYvjnBtCHcN6adcHX8W8GiJFk8s5Sy6vk2PXG8LgpqDiskBXEBdWRn5KrQNAJtpFGGKBhdQ9VqGR",
  "key2": "HBgrRBnNZEKCtotvNz5juzH8WuwuoQRRrHGRmuxAf3nFUZ4A2dLZryYVQZas1tYWzo83XzsNeddZ55qGKgPCEJc",
  "key3": "SyMJwdCJ69BPzqLcZsrBUoYqsCB2ehLUtEtpyHifPnQfHdZ4t6c4LydFnkL69Jh5X9Pd2aXmN3hodM7R2u4KXL6",
  "key4": "2wNdVa7tnC2MUaUPe3TbsHAytYPprNB7mkeoSekpAnoJPqNeELcn7ZrEUoWwPLpS2AWC1dimDfHj75CqGiC5Zq5e",
  "key5": "4KgGJWrm5Lqcx5ydEge45hnJ5Kkntd7rjYxLazEUTPyWsnDRuTtSHLVAghS84dpCCNcojjDVephxZtB5uDvCeSq6",
  "key6": "4KtP39CXzKasvrAD9fFTEYbCX2KPpVRg34kLiPKVi6LzoFKJFLfskQ6xUx63hJDzGrLtVURuYcpB2KifZxvwe6bg",
  "key7": "3ejpdsLXtzhG7Edo1KcvrQRf5DY258KWyYACTMd9iLC6u72KjXaEC5TyfJWMEAV3i14iTuwEL98AsqA3EXw8vrC4",
  "key8": "V4NE7iUKyUK8Dqz9GzkE1E8cCGaGskpAEfvDhpGG3QTRXSWruCHVAwsGS4tRD2XJjY6rEfxXb84wn8a7X3tiSiX",
  "key9": "4JPHyWAaEknVptMFEJxHM32Pz5BTfMpRUEM75VNPDQ2yQeXvtiFWh6Xt6fefgSE3NoXKPwg9EJwLphvrRACWJa2Y",
  "key10": "3idTY5NoCDK9NFGr4PB7EeFDcM8QumSsJmu3qfQPkEqTph2JhGe96hbMzKEkZH1wjD9ep9wvLQhy797cjo7F8SyG",
  "key11": "3xCqjGJeLRdFuMydLuQYKezb2ScXvUPLr6F4FU5vqqk1krzf84K9dTBjov4hxxjuB5G7LjtEhF42SgqUWnzndrJb",
  "key12": "4mehkLZAoFRYdMdWKqVuMc4fL63n62NrKpdtHarrSxBqWAAtRgQiSo3etfSUqxcDttgxbJGSpe6TVfST5wfGYyVf",
  "key13": "5MNQbyiFfXYqC3AKQYkDRp3YkrkhGrjaj8EMEoY9N5z86WtyaChh3JEtdVWdSmciNZDZNL4HuLVSDEDfhB3qFbuZ",
  "key14": "3j8cWaCqAa1ta9MSJqMw5PdeoVkfgox3TwJPLzp271p2bGJxxpEug4LkVRFZWDKPKtBFybnXwadz74SpWH462HXE",
  "key15": "3LLh26kSY4cNrvmSgEj9F5dw6uqLjmUDvhx5T73WmbMYDvrFG261sbGvFtqEnq21akuVdQDNHNESDYyEGsA5N33H",
  "key16": "52fFjGFkkN3oWtgoX2dxiC92cZzzZKC5RNzpRVegC4SSXKCgtzw9ZY1XRWt22MftHj98UExn9tX3SMPY3ZDDbBDU",
  "key17": "5sbKWPX3ckkNTWWYYoxFtWam37qeK6dYaERS2jpvAZakqBwDhc9JjKvSyrWcBXUpLmorRRJkRs6Na6N8WapjhLXQ",
  "key18": "5TxhQDEC63JbBYfenqJAdmCQi6p2aqwGoVSkiTvF5wHn2dD48YRPVzULc2MhTbu8TATic4K7Hf5BjUm5FmeoC3x5",
  "key19": "4t63FHPqXvZT1B4Gw4AUZTgPuS3NKYPYtKPkycUPqpXNLW3UHAP3wZVfbC4ZtHJCua7yJ6K6rpSdRxaRDW9V1bA9",
  "key20": "RL6JbRwZxpdRCkTyuzZk62k5jbz23k16sdyxrJFRBqMy6aeMKU8b6s8K2pLamdwCXDyY9KWosCmC3zf2M28osGV",
  "key21": "4PT4KCfbtfsDTpXBFUWw73Euu4fQQJLicymA4ZRpaeA8jZGfAXMALUC3cYxLArSvoo2SPw9KaPj9wo9d1aQ8YaXc",
  "key22": "5GYZbcaGZFCxMUfuVQfa8Lk2GtvQqAZm1i83iKVy4sn6KNgRuzmk9syNL7HUscSXG58mDczo6Ln2vY5CtUjE4FQV",
  "key23": "3cpMKnMrXJj67jrWDZQGBhM5LF4cMJ65cEH1rQo8qzYaddzDQc4FmZnRngw11Hqx7PJTPvnAWJiM41LFRQfy77MP",
  "key24": "5Si2bPbWKEMUByagmXeC34U8tX4mdiip8aDraPC8DZdn3zVYThZH6C1c7vsp9cm2Fw32kbSbLng7dALajELwcgDc",
  "key25": "5zhyS92iqgmj5ELaRjCHL4CwWyXAe1X9YjTF9J32cNcT9VkyduKuu3GZNthkHLvg3UCpUN2uWC8LkTXyjSgGkUVi",
  "key26": "446uu2qoS16h4LcBh7xJhaBYPnuodAUJSApz7agAvEWyQ639cfti3wz8LEZHaLSEvMr4n4ScdA29m251BHEKroUX"
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
