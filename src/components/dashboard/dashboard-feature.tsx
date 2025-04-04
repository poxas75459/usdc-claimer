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
    "23kqF8Qcuzdw8PDC4gXcrzurnj3CibVGdQiv77nFTg7kACos51XuecNrGqVxSWNCWsxtW3apNDmgkJTcaXwdL7eq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FCAuoQ74CkMMZgNjeKgEedjUe2zT6AtaCJ853vgoT96gY9TkjGMGEdiStFoJF1V4cXhYjsvwKVdN6NTZbfFjHy9",
  "key1": "3xGhfZTvaVntT4T6tzFA2oFCjLxqPTbojPevb7SgXabGJSKpZx1nJnN2hkHS3uhRLybXyU7d2f8yF2n7WifpiMPA",
  "key2": "5G2dyr8R9g2LC4qLzFxp3dVZu37CL33jvefrkSH19rfN5fUfFr9Spx8YSg1znhdxV29mxCjTeCB1vg6hMFcWy9T4",
  "key3": "4xntxLU2iZwiQ7nTtJaeV6ZEu1FnqJd4MyhYygNSXH88dAsa5FnJzqt3xiXHiSmkpnMEDMjmBv9NbxXjDDXXXDYF",
  "key4": "5ozK7NA6zbhzXS3hEAXioHdGcn2EKNCeyomJYeDFW499ZXBdS88u6D7VExjk6Ha41a5SeumZSnvhqyAn8YZ5eHcG",
  "key5": "CXwtnNrbWT9fWk8487pGq9opjPuZPmrpWGoDTbWyqSVWqBJwoxNQeNdEkihhxVfHNFN3UNzay165xRV1WR3MpDj",
  "key6": "2qmdcMpD7AfF6vHBhEAP7Wxq3RqDN69hG7j5JwsWxjcNC5QqZdThDJpxnAnauxokMufzZ6coAMEYCcbXFSHb24Zv",
  "key7": "3PCbCgs44JnS7FpscNTUU8Fjc6wE5QPQn7jfcqgQnE29m4u8EkjynEf6i4FsFRrNU4BovkNDNKir8naCChqKo8HL",
  "key8": "27VxJdDJMWwBgdJ9DjTnz1QWAd2bTJ2RapZg6asQE1feqDQ8dFHuybhvfsMKBCArBgHDdKteGVFZuUfhBe2qzyCf",
  "key9": "tFV1J8qpuDhUEeDPCm7goLTg6AoVgrSHLRud4EEPoM2DfdD48TBEYbx5RbL13viqucerQTxEZBinHQJKMpqq2eM",
  "key10": "4nZzWvWHHc1mFkQYwQimpRpGBCCXfwmCzWCMS1RYtBvXYse5mCtszmKxQdNbYBE35Tj5vRmcmqJHpYnpyya9w2Xt",
  "key11": "2ALnP9RBfWmfAQktpaPsAFcHfmf4JmsLxWddxvkjHvCmw4N4oFtFyw8YDJ26WBmt89PYThenahEJw9Zi6S35ALkn",
  "key12": "3ENtfUu6i2HcrgCJ5B3nTc3P7VmeT6jQWUoqpKSM38t36omQc4QqafhAMhiogg2Xkfmyz8ekNcf9b6txghEM3YnV",
  "key13": "2wgUZWTPhbo1UA7fsfpHfsKBXay5oMSX4eXmD1Ur5yB7Mo3Qs55BCWdYk6SSf5mwRmjaRNvYiXaH5jNpVUgieiDS",
  "key14": "4DCf4cjefXeV5gYwj4AbLRFNM5yLbdjga7hwEUsTFAxLWWBLjzNYHBiqcsPyGhXsg69qVXg498K2MGyNM21LrBVM",
  "key15": "5VKdJUCQ5tCF8Gq4M2vv7nKNUNDmeZf6Aa2TkNgaNhAGhvmoGCnEWdZB2bZhcMSJg4f2guKsmpeHsp3YCnuyELo6",
  "key16": "5onVDEcXQ472aHvoiMf5GpaB6EHBkcFJazxQEVsUH3gcgdoFiUrmBh4U3YoeZfpZ7GrLb8T3Hmx63fTtsYRjw56J",
  "key17": "5Qf5gziyHdZiEFYeRM91w8AiFnv4HptJDUX2CHLbc4q535bYkaBbSFNjstUucK3CRpPi28evJ9t3YgFrQ95tCup",
  "key18": "2QvL5eKjqTpEp3DMs3hUr4qqESbi1td2iMQn8taHmk2yZaSknDQQ3QnUXf24GmdZaKkJnSa7qBQvmnCRiorB3KHG",
  "key19": "631pn5ySNy6M432k2uNhwoBqxn2ho5KnZgqx4m6AhhPE68BYHx93A1rF7PEyn1rtJccoZ7eaQtVvaLhBs6QCarD3",
  "key20": "5F1Exfny6MQg4fpdp8rj7TgbveztRWmK3d8HGvSP1cEdY3VnBa5TJ1ABUNKKb7Z5qHssorGtGLGGHatiW37WpDQF",
  "key21": "45JJFcVFcjHX3tH4UbPK2qeRjvUwu7aACe5bupC8MG22KCe9qgq7Bc4R6ehqKNrhQpr71jDhnM8VVWttoM7WVN2B",
  "key22": "54xctkxS1Nmp4piftfR8ugugAiCmNigQALX9XtchCWjHo3TWUwWNri4CqMFNBppVwBfLExqHasnEczf4aKNg8EFt",
  "key23": "3KtzYTb3sVKGxYWK1FU2BfrHe6MdDM2cWjEgoCM1op99CCstPAStTsoHuEBtUZxKRdpL666tm5MXGYCaBmCZm1LB",
  "key24": "2N1eULWD2XNEWfygKdM41VmsVmW2bisvB3EAamRAvV1vxuc12qpsqTFTJ5yCvo1yX3NCRw1p52PfJS67z5yn8PYN",
  "key25": "4wrdKMZdcViQf38fSmbmKzFSi3qJZ28HnLj6jtoHerrhVUydGuKHskrHvUmkbNBq5q3fqdBTVmhB6zfjiUFhYRs3",
  "key26": "HUeQTZXQ7mbb8DpVwy8b3f61TBxvjVMfVdm6aPTJVHfKn9MVZhGpTDZjhYsxwdcVCKNLSvL5X6NCL1eKqQ3otoc",
  "key27": "5ZCCgozzsysqgNJNqfzzQiXnBwzdJjtJcHWPX8oDuxi1CKcr2pgHyPbpGa2aYo8421fwSowpGuW1r4oNHjiAek9y",
  "key28": "373Z1hgXohnCeWRwmZExK3sq56Q8N17VG6CUUiZbApUHAyKzmu7Q6z2xiwrCtJ4AdzkdtzDveZXcvn4UDZc7kwcf",
  "key29": "3Y1CxcFfA8yJxfxcV9rSVdLfxPLXKKppBqPVg9pJJoqWw2nVC7cBhGNcSfuChGf9gvTXVrbKFL889Cg19K68nJ8m",
  "key30": "kq3tcKEjzYjZqVQoKence86DJTCjDgGD8zvgvhi9tqHQqg4VWmMy45cxsNig3nCVGYrKKH9EYvsuRVFcjDxMHtP",
  "key31": "265mEybswtptginLTYLNVyosZyeaae2yRksTbDT85BprFgaeLBJay13MTQngwZaVypZHuo7ArnkEVnN1cXXyCTzW",
  "key32": "4euMAAYtBB7J5nKBQAjMEbzu9gPTyGF4cQfK8EXw5CRuWtDh3x7845qLcbkmkRqoNsp6b36VfJhp2fYJtHpGyRuN",
  "key33": "C7rcDkBS9icihbyZefdP9UBTajTzURNe2nn6nwPvAwdnNYetEXZViTrY1mEQaDzqsidDcmjeJNN9PSEMeJNCyoj",
  "key34": "uwHroHxj9ryiic5Rv2sMWrWeaMtvhKfD4VEasVHE7CXrUMJGFu4m1W93PpDrzHwrj3Pg2RERB5j8joEkxt3oaGt",
  "key35": "2QiPBbW3DQkzAjHwGniNsdXw5Fqtubu9EochKkoKuMgNQZMp9UKaQErLDCYpJm8NN5D3KMkpYBQxPWLhg6iVNfB7",
  "key36": "5FGnWRLiWwvcNpSerRbF3eHRHfsdNUQfEJNxBnGynXtjR3SbSeN9ZzRvZ6RhihUUr1LmCWxMZ7D1hj7FsRsUiW9e"
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
