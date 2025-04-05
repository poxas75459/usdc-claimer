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
    "4LJy1J8n1Zs8Juhj7vrxpwS7CPJRDcLRzxdsj9fUwSw1SU3sCnbGdSWn9epjj3xcmR8BFsw4JmSULXaXyRp8iRv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m1fpwtXMPJM9VFotYds2fDG8i1nymqYv4NKfymxPT2wooUW8Xf9jk2jNf8yqtQ6uqhurcaLip6L93xMsfwFFVPH",
  "key1": "4P9YzZczeadNvx7GELBY98SSBGG5HyhpKTRpx7uXYiGMoh4QDgBXKz269euYvKB58yTsThF3iFbZGs7rUioV4DKM",
  "key2": "3dbwyGrdgPGDKR72YdAgoxff1fBzHdq7h4hdNT26B6hbo9TuSjMU8YYm1GDaFnUgSu9tpzizwGmjmLReoN7GS6tv",
  "key3": "5eHRWeSdsYVfCZ65veEw2Lv9WXNnzS6f3VUuYbQNLyxXzUWFz6i5rXLYi1nSRHQg1BtPojDzpLD9MgtU7zncNodc",
  "key4": "4ZQqN2Pecej2qqnA3qGHiUc2LWfHzz52JHXEJ4pvR35fkR9oKjMP1Rx4KLYFhDR64Uy3MbuvMK3SngTQ42YjazTz",
  "key5": "VpcwiYoZgUC2zRKJsYKTv63szFUMgSU2XL59FJNgBwrawWzYkCUQZhETKXjLn1WYwp4RjH9GWmy2Nbdgy4Bpt9K",
  "key6": "2DH4kYTtzoMWjn28RaB589hsZHGVLsataGYGbzrRiVchkT8WCHrHw1sPUEY7TArSve1zLWnUm9Yg7DPfdUKz4bmn",
  "key7": "roFzfCZ1cQuUXULivg9aTTZFeKQ6h2bX9pBbxdRVvfMVTWuiCdDGvAjuMLu3EX8R1HvpiFcjcKATdFqBTNSi8qp",
  "key8": "2z4gz3oUC1ZUzH6m4uaGkLgUDvrqG9G8BKH5SJC74tKAhyKDQPt9YiJRj6Sp1xFqSgCdkPWHAb457q6re2pfpU85",
  "key9": "4Cpm3hDBuayQrVaaM55MvMmQzic5fEGoXTm8KRe37km4sPuxQVhvNToMDH3QcJMY2ds1LmXSBVAT5VcSqA4qy2W3",
  "key10": "28gCbBcTEPwc9zT84WBZFDM9gupQvQUHrfEvjxDRNbvdh1J5YJjFc8ewm9xTB7WTRar1ES6ua8WYqzC6RvbVGNyd",
  "key11": "45TPEKepQ8eFD43V1oU5D4AXVesq1FXBszLm1xBmFbafH7WBG5Hdq9AFUGUw2eJgA9ymLwCNUJzjUdoXh3NTm9ZN",
  "key12": "2nUb2F659kVCLDjTYLxNNWsNPrNB9E1sM2evLA5PSSrGZAUrFfr831J1xaMvAN2xQyb8aFvyihqxj6KQH9tmK2sz",
  "key13": "65r5VrEQ6dqrxgG5upjNcqfkKD26Zmmz9fH67eUKLqdkSf2CmNqWYsfrDf4a8zZuWpajgyh3J7p8zCsHQSftfBxE",
  "key14": "4djGf6ZAjcR2kbMvqd3ZQy8rBSMfqXRH6piT9URMW41Eh5jbbWghh1KLSDzjVSk2XyG7Xw2W7kkTTj9BoRNETJYM",
  "key15": "52hzUJ6AVKB9VVZmEJ3BuWMxbwh1icqnhq9uzxjdCy2vyaeejXreYDs2MHtiAREUh7DeYy2hN6JCLyjNWjmVBbmd",
  "key16": "5RqnAGD1u7jZi9kNwoYQcwCAPAP3VbKUq1SSFdBAoUXghsjZmEmfk24MRezG3j4yi7QqPdTYC67HuyM6CtKz4v3S",
  "key17": "28uG9JbC2aUQyEPXCQarVFfPK7Uv5Skv9ubbrqE1KgEJbzKrvxRJqSG4yjAucnG2rZPJJF5BU9KwE1CPjqgUQmfh",
  "key18": "42Mh8DQ6SteCGZj9sBiFC8JzEEmVAvgNTWwvLXSk2ZeqFscDPJvb4e31F4vyNmzr7ppXiMhkZc2hYB7yYHYcrKeu",
  "key19": "4G1fNxqXQePMvMiMYi29CB4LhWhzjktj2Rra6y4AzcnzrxrRauQ5UNwa9NHcMWswhKDTMGpCDCWDfhUtGwUuZGzU",
  "key20": "XPxQZ3LxES221goXERq1Lu7ASypsUYJ5HriQJ1aQW6BtJLwvBNuxZkQ6VjGLsCiid46Sfm4T3SsNSHxizc8U2K3",
  "key21": "5HCjZcqD6sx9Y3y7eVPeb5wBq718em6LK4WPNBpfFqXwKfuFhnp5wgVaGs2SGGyQnH5xR2UTSs4agR37r7QWbvav",
  "key22": "3hXPL8o9NucdGqzwFsbxjfjobsxbzzY9R3CWK68WpJ4tB3K2pvbEdHMd15Qn19JU9rBJvrrFJyXZ2FEXQKd2LFmc",
  "key23": "oUDTymNBq3pLeWQYxu4k1HJCMtXDRjU5KMdS4czHLSCptJ92qatxujosJa4bUnkpTedqzUFzwDYXPjS1CnBAhTP",
  "key24": "3jGLeZc5kPVoENRDK2TN31irrhC9ij5abad7yFyzRvehM3QYBhRJadamKPG9sgTbhS1NEkbkdZfPk6yn7Yoow5iU",
  "key25": "2cBkACMPS1GYNnBqFLXHYXXRgKJS17hRKd6btgT2L8toirivSTQWmkkPMqFFkzevrZvNxhh4qL4sXeH57NZrngKd",
  "key26": "gYzw88RKyn1FNTKeHdj25FdwBdx6eYmyAxQLs63ZmhXZjasse3mETuNmnu5DsDzowoXqnb4qcQKeZNc9DWJkX5N",
  "key27": "4vgNRagfhsyCXiRFhCaLESUSX5Gf9dVYk6wdB5xQMQcxw5g3r3swvhpXsAXQLTcwkSzUv9r3xGQ3JJdyWzQngbyq",
  "key28": "2dxjx6P3YqjZVKDcnvANo31YZ1Ug5d2a6sVanV47pcAJKbcgXjU8D8exjLfs8hmgPAwGVaiBfF3HP9Cx8wVSrWTH",
  "key29": "4twtyyzY6N6bxGo8DPnyvHY2sY3ePzFw9LAZuCGv3W9FHyiQXrH9AiJd3hiktBWv23NfC9gVbi3XTDL5ge2eqgwF",
  "key30": "4oZjVoGuyjYRXE25JXaB4tdNtxUJ2puJ8FQcxUF9vU3VB37Pk5vMx4z5YBydaUen4ycPxUUrbUezVFg1N64Vb1U1",
  "key31": "5fFexffDZGoYjb4J4HnFwSjPquPkaMrQ5HcHb4tc5Mbi5CuZgH1QvgFTBX31jhENweMi5E66v7cxB14A1WdCSW4s",
  "key32": "49twnPh14UVhGKjzE9iahpJsk4H8gvUrC6MgpH8k3qNBtxCkrSBtAwkcLMFbXsPuQeD5sN1TWzmKuN2RvZNebvzf",
  "key33": "3zSDeUhQCE48UGZA99qXCVbzoZpQ9VQEkVzC3PcihrWCCyQE69yqtbNUYEF5KHVWfzkkUzYshHTrfVwCD8rdZNT1",
  "key34": "44tWoBgAJwGHpSpKogT2qVBjAfwS32CpaSZvcYBn97pek3bwJCX3NNEfy69s6MCYArn81GFY89DrSwunvkck3rir",
  "key35": "4y4663ky9Q3D8eRDErRb5rGahVQsciYKNrPzJpcY6r1ignbAaC7bpKWtqWcLeuBdP1zasAqj9y5MXQfsw21jwLVz",
  "key36": "4wYDHqgewPiZoFTG2TRpNM7h5JEVMMR4QT76AkVB72Xi3bkZJVFuVpRcWp2uWmRSghtCBSceLEqNJ5d6exCPMUy3",
  "key37": "3L1kvxMvXxPXdRApKTqUJX3qDLvApGf9Zt4doZKbDeRy5nCnFwhds7nNL6GfS7F7ARqTu36fUU2TZoXTBC48JjGu",
  "key38": "4PxszNzHMb6ZFZDstiqAL3aaw4o6wsaTe47DzamiBTUcTduzePdbUjRdGBy4wjPdya18sJyFMLUe9RY69kXpvEHu",
  "key39": "2RNyKsJgDG7tGRQzQgVmep8U1LVzbWdiE7N6X3HxyLw94uXYPLWW48w2gMjGebv4UXpycHd1SRDSb3eZJz34fm7i"
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
