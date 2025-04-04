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
    "7tkJoz3iF7hqqA9T8X9F99VbdKoFGxVg5yLTbrVs1LTxeU3K2At6iDRsdcWB4pm4wpuZvtu6w1Xmc8JS1YDmA7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xUi3T9yLu6vsPainRJUxDGZwMwjmhMhZs1JV2yQ9HLtdBEu6HcK3r19s7xwmbYtfEkUdQ3MVJ1d9RdTocVPVdfY",
  "key1": "axzdCjdMCCiNW4nSD7q6rFM98uTH2W2ndUXfuEHRULTRBsj8iFe44UadXGbj4A9hmKTnXMWttYYyFpCDVTh48vm",
  "key2": "3JLLqxv9TdWL935qUcQtc3BYwtVajSWGCL85HtFZgyT7DWtG7L7nLts8AnBzUZNNFqGyAiqUxYRWzFnfV9mvkb7e",
  "key3": "5zneFxTLRJRpsHVuDYKF3hpDF4EAvBUenyXLDcFRwdsy8bie8cussQdwdNFU9GGYw4GNX47yMn9YTpSLCCw3GGex",
  "key4": "5YaaXHB8H5obetmNdEDBzfMJHseRKtmMKGoNTGqnoijeQLabRHqyPwhgUEeF2rn6CWZGTKrFy2ipZndA98X6cPtB",
  "key5": "2WwCr6Ru1Ux64v8vAGw7Qn39awFn7vf4AzV3XV79BKiNTndZj9XWSMnkJSkL9PgxBEB8dSo11312QbParCLuHzn1",
  "key6": "246MtBt4Cwr4UL7vEbi6VxH5iSjioG2Yqzc52CRL1uyD57juf5amhG1SyDDX3CvozMJvP8TuXHrqBBjhatWMZR6w",
  "key7": "4jNfLGihePpukr6JLJ3AtCwkDfHz9kDxeJPsWYCiMCeAFdgcSHprxk9K7us7hsx9RgxvydBFif952NsUv9NKEa8k",
  "key8": "2p6mPwZZWH8KHNVz7cGC8862BcK3bU7TBPeSteJfGzWZLxVK3Mt23jjcLfToJAtYhSh5F2oTDCKShugUC6fXRdTs",
  "key9": "59Kb1HrJBGkSpqehFr3MdWDagRJaVeXWC7gDfza5efmwJXNjdZutXiAFcc3yD1ygHaRieuUGsENQE1ZdVaGgLhv1",
  "key10": "359Mpc6FgczhAhqh79f2YhpMN2xv7aGEH3EnAw9nrdTiZenREQKNBUSH9SCWeaBXRfnu8S4ePRBUgfpn7wKcPj4k",
  "key11": "3MXyvQHJU4LzTXC6SSoSsowAi5M4rjiUJapAytHuPuVq36Vri9unGfDiQXbdCknuGR9iFdvXHnLLa7MBwrewwSyo",
  "key12": "5sLjv28M6Tu8hY38yDRvz794Nfu57fAiYX9r9A9yrWWV3L7zZ2pNaqPkGurm1WfLiMdXpAoC4RGNE3aKGxwjJ1xj",
  "key13": "2oVqVMzP1MWD6GviKXYv8GBxKGadVBCSZsi6aicDDDfWCBvKC4V5vnntKbvxsR4exaxPfQQAHuUjnmwSsnM7c8zj",
  "key14": "JAscBSiSeUsUPk57pzitGN6K8JkUhEQECPa8gu327vGVFDVKvWg4QEw53osqY7BoNij1nJB2nzxiTDvCgTrHLZG",
  "key15": "3oRKGM85hR4pdUzxeNkuRWT4TFHo17eRzsPURKsiFmZUqAtfn6saNaJoJSviR9Zt4xt2SkM1VjJHhuvPYhcYVf6t",
  "key16": "5QyENXMrwqZrRwrHU1ukyi4ANJztkbQZeyMtrajn1TgVPomg3Y7ashKRYwJAUTTkgvrzimcdoWbq7cQbw7c965Mf",
  "key17": "HhA6p9XmBc4mJ5QshBsBj7oS42pCgv8QbMbJACth4K6TYSBAHHGScZ2rAqyRr51tTy1LVw6LUayiuDJdxXngBDJ",
  "key18": "42ExhXiQY7tJfqKJDE5mXiabERJzrL7zHykDEMfjhGQT1KfXfvkXH9eTsmEybCJst8DDogFZwL1ayUaukCNPiT2G",
  "key19": "zUFvy3WF3fiAxNZJQKHGAjvEQdM8ubhkpTFvstN9yHFe3UGDp8Ns4HZTSDNfsb6KZtDBn3cb9ARJtXyNxZYrHf8",
  "key20": "5ZU2vnt6bZEtQnf1FMkfW9gjk599JR8J3zQjxuhgTnd3MJgzvMBnFmKUjm9ZK26RxAjYZ4ywpcoMe9Jnu81HVpR7",
  "key21": "2SU9PPoMRY5eQ5FbWKUyEuoU7d6J43CKJgCWdHAdUPxbD6MYi1rNA7eoYWM21ykmAcbPDJTHWvuzDDJy4XARhs2V",
  "key22": "Pj9ufvih2PgT2nMNtpgMt5Jr32RFjACoSs6WkRedut2Tecc3eE4coHtbjFPSVy2VXw98iYMwsog5XaAguTkam7y",
  "key23": "3WhhXAbokAQpBsdJ99ad7Lp9pvioDfj4FngbyNLP889u2pgp6FwJKCseRDtkukgH6s4afHtfLZTUZAMGvgBUtWjK",
  "key24": "5DpZoS3pKDvKkK5p7BkhFf5NQgPxfQg5GxhxxgR17z7eJmw4pvY5d1EqyYzhBe1Dsae3WiGFtpp18xLmtdxZ3xnQ",
  "key25": "5F8a1FmgxPMwb48syb3eaoitBzvM47EJ5bDaSi9pddnHdKg3xC7hKeur1Ss5TXxxXtwkfgPDKWQdakFzizZ81nJC",
  "key26": "RrBKVHfCT5rPWUamv1msugpLDrjdRLwiHCdKdnhVcU5g9wuX6BmCoF92ZtTtve7DGFaNnd1uXhsKHvt9o6VQrt3",
  "key27": "4o428bQaYVQNoFKJ4Vd3pQfBckBNQLJuL7dN3LWbETCVuJptmqD8Zmm61UGjatWU99nPCkV9AsYi7izguoSdP27k",
  "key28": "5oGVa2xzFMGwJzBQyWQZjqY5kiLHzTCYjZEkJT1CZcbhUepaWc6zUKimuRpQVyhALkgYXHByxUFh9NEXmvPpktL3",
  "key29": "5YPEqVCguFdi7Tnu4xcbHzg712pexZmGz1XWY6oTksNrpNF2tRxEKXus3hRP2hnk3YtjYA8FhuXgmGVJ2246rTRN",
  "key30": "3NTLcQuL8wxPU9o2yvP1E2WYF6bKZMdr5dKfAWg1P9ccwDtcXuiKDDcP5TEcBzvvvKkeGat3FLS46gHYY7CxkMsR",
  "key31": "4csDggcNhkC4v3rzCVuHPqyvpqbnukMEYcXUEF7phSc5QxgWiZGogu4cZtRAVM742hZFKEW3r4MsiQArewBXBLfh",
  "key32": "2nBY9NCgvavxonYa6QU1CtKTywiAohxQmnoNEy3JaASKgQdD69mpj5vonXSD6w4ZSPCkjgXMGF81wAmCczBFi6Sh",
  "key33": "5xPQJZ1UHnSigne47h5Tbpsg5fbi6yZkx6bDqSkgPyCjo8YNDfiaWLGrh4Sfeyf3wDxJ792e1DNNHV4K6Zoce9KH",
  "key34": "Zgnxw6zHWQprG9rjMHApNCrRZthnVutip3gRQH5DqgCSjETLkrZrCci1vnZCUwCwpiLT4iwcBd5MGE5Z24x64CC"
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
