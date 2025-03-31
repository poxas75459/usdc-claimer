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
    "ftwdjWnne6o7axZVjemZ8dXKcWhYn151F7kMfneUUvaFsaa2nSQBxdS6EbJJoWhKoZUUFJzVZnpjMZFf5oPbbNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZnrugCJVGJzF6irzEHDbQNBHX7BB4jZ7yeZX1NK9EyZuvf5sYcZt8y4i7TFnqFdj5EPe55qu57uz8FEEQtb6FnJ",
  "key1": "LPaaZomTW21ResSszu1xQTKJ4D6dxE3RCz3tdJUTbvziXd7YWvHnh31VBFYsYJQia8QM38faLi1EM71BXZW68ko",
  "key2": "5KF4uQtt2B2vtvC34NJN5igpQTnSjfQmMX5KppR2LdmkkJzQQTuWoiTze7Hqx6DhupgaFG6NgVqXjoArh6EA7uJX",
  "key3": "3dvsazAJBXtrLrGkgQrowcKjrMKr66u3TfwtoaCH4ciXKg2cPAPqPEe1wZDPjEMByWzBHZuhpbXxsjknt99Rspzb",
  "key4": "3WDKMyxetSyYrbntEhg5qJcReffWkzV2BNvg6GTNZTXpmFUkHFrHT6L1NeTtP2QN6p2HegNWZx4Ab2QNFMqbVMFb",
  "key5": "tmuWFdiHBkSnpmTYcMqUZ1TTyt7nCRNq2koo5eHkUJM57RcV9iF9d76BZi1p3SLsNPNKUAEUvsR34kDa6fNJGvx",
  "key6": "56nexUo4gp4m2ophxKiyhK5cH1bjH4anpdaBjhqNQZNmHhuCPCmNhAa3BVvkj57idNxce4FHF4vSqsdjLsUM4uPo",
  "key7": "2xhNtopNAf2B8qNRB6Znew14UnrWnqMxQuwvudGTdooZYjUwTgsKkV3fUKgyKxdrywRztEHpa2eCTWUikfbcjrKH",
  "key8": "2VWMeWRWPasZQSnZEgo6wNvMYf445vM5nNA7myoATJqe69mYnCGLKAp337ah4jpVDJyv1vPCkW8BG37dbaRZJDN2",
  "key9": "5LqdLNybNfyNAeeESQA1KLq9zusT4wpN8v8z94kX6kwUzC3Ke4fHtJgeNSUdXZTHRtVATwDAvr2uX5xVdQJhcpWo",
  "key10": "384Lqeyi4U3qctqsyjSuRjKJ5x2BPZNN8gvVeC8vzsNyR3891DFt528Gg6CQSCxoS8mWg5x44SnWoihpmcqNNnX5",
  "key11": "8HdSQU7PM6WEaiCuuKb8Tc59fPuGd8Buik7AaQ3S1f5ThiuprnEeY8UWgm8ihupFdAaGcuhLrdRTThdJoFEYNrU",
  "key12": "254t4M7F9FToHPqWxaGspaxM34NKM9SJv222YoxvSVvxqtXAN7ZEqNLZEXh2pZvyriFT2YYWMLPPkS9byCZqFXsU",
  "key13": "5kGEr5AHVzJbYmgTURRw6ndp5VTXXPAtRMHu8Mai2k1PFEhdqaXS35gwZ7KQBaq6SN7PWn6Z8ywmQafFGLM7FLJU",
  "key14": "2CKWBdAnQ9ZSNmC5RtiENK9kZjty4yd3yWQt5gQfDZ8kTvMJg19LmCRiXfx5rSRzx4oiyLeCGPPndV5LYspS6SyC",
  "key15": "2qAcw7n3s6xAFFFZ5ToDwxHhxZqYfWCbJeikmHim1y64rhAzctt8h2P6ntvjJqeFqzSdNqsfAoaVqyTVnCakpHUo",
  "key16": "49c7efEsZVukvygqDXHaffAoJRbRRvospqWYbffzYHNVmetDRRNo4AnYxsAUvsLs1XrcJXbsTz9yyqH7zvUA9HRJ",
  "key17": "2LiXfSszPppDkXwUMM4Z2LRjwRzkzgPN8drnxFKMBh4Lcba7xcZR9sRrgwSvg5uub9mRzTPgxRFJr8VhjGYAUr8P",
  "key18": "2prK7fMQxU7St4VrQEQyNKFrF21uph6AZ2syV3iBt1y3A78jTruDiHofqudA1BPn88Ua4jJPQ3WGFPQVJaFvdVQG",
  "key19": "4pDpfUvamvRDiG5N23vNYLLHXNCYjVDHG9C4w73ab3o86wXSDf8oqZsVoDRwhamu2Brkdm1YD4T1nzjxVJXB6LzE",
  "key20": "5zpD8GcrX2X6zQGsfgfnqGADRxBYKDcuXED9i7w6y6Kt8Mn87J3oaL1S52u1XGXv5ehJJJc7K7GA4utYkDyUNQkF",
  "key21": "4UAg4sPWxcAesSzhugUh84oQ9mBtRVaDFJHBV2dYkivwnx3fD2WZTyHwUisf3saHC86ymkhPhCGYUVfWaFCSk1gC",
  "key22": "5LxRVB6j7vzAQEARbqGUGEVHNtjHUk5ZBFR5fS5XxY63z5K3aBgDsFTbpk8byv8qDGYXhQW8Zf6kETkmLhsn2Dy7",
  "key23": "3bRX4MNDqP6r3ZwJEmXKcCsxKFwEJASQzk6wGx6gjyNDBEBJxfhWHsLtYFrwsAMSrn7WK1SKkYW4RUzfpH4kqREQ",
  "key24": "XrEQhQCb7a8MGEQs45Ts6NYFmphLQFoYCAFnWf8gisDHLzddNPe6bb7kxGt3Fu452CUTxyobGW1gVbHK8dLdd1n",
  "key25": "67TxLqNRxMQgyAkmfkr6o5eF6q1PXyvS2yTV3MoRBNgsbUwvwNyDSQ6WE9fd3qxjeDEiR2rZd3qf5dwBRs5jBjmc",
  "key26": "5EXRM5Q2SHCDqyKcoSnE7R2sFo8JAFL4FGrJ1NepUsS9ZCp4FEth2eTDJ3MamttgRMxHUSXf146QdUAQkwgppWjH",
  "key27": "2B9Txkqa2uifNzfysqeW44YBRoMATeZZ1JA2J6kv9gwFVi8d6aQMmpS8QhLMjPyG4X1DfRRbwWDVMnM3j46F83Qe",
  "key28": "5EF8EaUiM11dbAhkKKDprm6hQz4fKoMNkK1v2FyQEb7J6ocRL9Fd5jJBEJLcWT2vpCbEFo6oaqdecibBPnZ7Wvku",
  "key29": "62ZNWjtjQYk7Psg7WEVeaNXGKsjWSeVoJnBUZTr3QioKTTMyWP7JkiBjT3sZNuncYJbygTcY1Heu7H55cCruDn9C",
  "key30": "3gVZtj5DS62r2aKT6N6CDcmm2Px9MvXaCprxURRonpUjP36whABy1gKNNuAc8vmYmqb3d9cD1RPJtnZYVi92Jsiu",
  "key31": "3cphGpTGULNqmjgLPyWbjEabUrLXZi1EP28dSrqoMvc4K5YaNHV4FvEfdxX8SBoRXpcuvteUygnkTF5QBkJJkBUG",
  "key32": "ZWaP1Y4mZoYErCn2j1Db9cP1x1DRYwuFPAa2BvGgh3euMxLTcipmd8KK57tEP2sr56bgeCLB215PqpEa2NmANVK",
  "key33": "2tEPuuoWsa1JxQUdDHnHmyhEmwDKHKcRiPJ7vHy8rJMNXWByjQknyXCFW5TrRmscTLfKLhRejfawrURKihRXXsRe",
  "key34": "62tPX2AAnVejcaMU4VNvt3yzHJuTr3rQyxHmvg5TwjwLsm2crzSmtmcGbCT7Y1hRiQPUgZMNs8HXn4owZubZFL9r",
  "key35": "5fXsBjwRrnvy3hHGuFo9t8397ptik8KpYXyg9w2aaRc6uJVBjwEap5ysPRyhMtbju57c2sokdG6vrEsbs1pdYubG",
  "key36": "3ZZkFvAtim8XUxyhZVgWqdPzGbmzYEDBLFF5Cj7tpPsAqtojBzLkEgDivHFtbXNMNeNozojkoHFAupBcLuFxPTk2",
  "key37": "4bBAfXgL6bX7Mgj2ewg5ogNEA4Z9TB95qAJ5QKzJ3HtPe4V7gAAo9QKQ5KdeUbMfJKHg5dKFTLvFkg7DfL4tN5iW",
  "key38": "V4beeQLLfKwDSb7wkHN89g9dZPBd79LCGuPT2zaACGmGaLvKV8d47bzqjcj3XgcR6cSMJrbsXZWqytgkVdqqUv8",
  "key39": "43QoZstUdrmeRh7L3XbCtToPUcH8BBpZWhdGUwCB9R2yr9X7AtxWo4PNNnSep8R7SduP3GEBsPLrE2BdYVAcCwBP",
  "key40": "5jqgw1bgwRueCWLYogY1S1VfF755hiEsz3etu5vioPJue7jyzFzhKEtGDp7SPkcZzTPaosD4TTdT3nh34vrXSAeW",
  "key41": "4gABJnMb63JXcADs8sZZiyr9KnToD6raJ8DAxSZ2AJhsUUHrA2L7Fo5iMDema4Pe1K5hzdWv149gRWthFEF1MDY4",
  "key42": "3s7z1uh7eSZyrmU3GXfMDoEr4MWZjm53LXD1cT13ZStbkggMLQsQLH5L7DNtNU8hfouRn3B6ZVq3uqvi5NxSvbCY",
  "key43": "3ZE8EaztwbSahADgCC2trxFJ4i1w9LjrTGJNcpQvYvQHVcF8GLzrZiWBPnZNkR5bsgWm1XYfFvVhoQE5dYBvrkSh",
  "key44": "u7M6eJJVrhdyyNnEJusege2W8EzZwt6sPz4NPNB64SkeWuPgDxYT2JXUuiBkFLWR2DA7Yd6JZq9PgAi26hNyhjC",
  "key45": "5V577JJSgAcCe5tD6QwUoJKebf3XyjKaA66Za2jocJHvwgHyfZfoxqyzBG159GFXQPQ4aDwwvFX6B8XBVTajWabf",
  "key46": "5TaLCS4L4hUj5GpkYEgP79rCYBnqxKN1fjLhpL44ubqxS9Nedfsp7VrjM6NcfnevoKApR27o4TtvUdGb3MYt8Kz7",
  "key47": "2BLoiqJvDnbo6DFbmAi2ZAmQ4yLS3Q4KyD46ADSNqqjCnxJswrzm1PdyatNn4KGJhuoE1C3AR1SkXk5nR7tL5twk"
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
