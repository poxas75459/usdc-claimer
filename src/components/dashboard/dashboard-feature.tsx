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
    "565yeaTzB7vzZkz9C6yvFstBZSXMYzmCFZtKRPYyrwp1XUL5PyAmwzVha9kh67UfWTTaok34CJ67Vu2FsQMrnTha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47yxUAV6CGfLCcmi7EfiXuwv6EFrdPGZHFMN85Ruc6xNdMfef4Apbnx98BdBGKqsvuHG8XuYA4tBzinP8bw45qwb",
  "key1": "2WKiTUrPGuJ4yLRaSbK1noRQxgcRyaENELFpKJH8kKsep6PkrAN4GmBq54EXJgV5t2J4mXkqXbn72yjSZVa8eaec",
  "key2": "3dTRMBeDxCfd9boQqkv8MBrBP1hJ3XHGymPZq22aUHJEoeYYWYnLVFABng1QbSvqRuPPWoMYtbUWcGRznDRfQD9Z",
  "key3": "xjuVqyVf8NXyeD3966eN2WnVKckCdhaM5SsMHrZ7gLaA6fzoJM9hTqM4i8gfo5it9TEEyB4ZJ4fJ3cnd1n3ZvCc",
  "key4": "5JEiQf96Zz2TxdtGH5Ht47e6XRdZUEK4s3cyLqMQciz3QrnqrPQRUqt12Fam18iDJdT26PwuDCwv66gsrUiXC4sh",
  "key5": "DTYScxEm9BLwLCWbKpUhEfY95MrXFBZhRmD3wkfbcbjWhxthdi8FcA5Eej6BoqyBM2zggfnnhWBMKpABj4XpZzU",
  "key6": "33gpmimGKx9FyhtRsAGJ86BHXpYzcRQZikRnSjTeBcakLKm24bnqQoNamnxHBLXUSJoSK1zUaeKqJqggaMSU9nj8",
  "key7": "q64pSX8Y2JirhTAi9bDBnPuqHVSNJoLbe8oKwBLARGFFWAiAmVoEUUNkSssZ5mmxnAmLZGhNfcVFast5VUgE9fj",
  "key8": "2NRYUGLr2zorT5fvADJnJ5NgGuypAhLyMSLgvqe8Tfy48VyWaSpw2LcBtBzcWaa4nrJWzkqVmRSskwraSp7EMRaH",
  "key9": "2awucXfwVC2VWkLeXacetmXeBE8KGjbMwPsdSwBvH7CU21mf4EwG2ugFhLD2yAEHqTh8NpTdRQozxbmFZ128LXq5",
  "key10": "2Rq1fmxjEancqFaxoitEaQ5igjBHsAgoXLHaVpB6qqQt4ZDgLdwE2YycJws23igrU6JczSfbXG6x8cBYsQrXBzUd",
  "key11": "5VrVcNeTN4W177tfgbE58cTq9mE8NpN4RFBqhposQw2MFe5w9pZH2XzLU1tKxyBa4ReVHEfUnbcQrqNecZ5prs2L",
  "key12": "3oeBQ7ccMK6akbC7yexD2SVvffgwJ1oqHo6TH4LNEHUH5hH8FLkq3rDaUMdC9kZJzLNfoeRywNTNnUFXKb6Hzoeb",
  "key13": "NW5t3ukAdoAvj4qwfsdM5p6k4vvjirqXzYnVz1oB6R2cL7mTiv4VJaFc4qMqMGQqPQYqro9w4QwtmBupsWqdGfm",
  "key14": "4R4YaHWX3BcxStvjVaqJsNVkZWdc9Lfq8gLYkViH4Y8Eadjd8ixw72ct6TJaNSkdorx3MQua5fznmqGcbHTsC5ks",
  "key15": "33hGPaK54gh6NRR1TfbrcjrkAuUsWthoN8HRKdgHzYLNxm9RQ3rosxZSYxsUqQyKQu2XJbS77re75i5A46sgsAaG",
  "key16": "2bivzwL2kUtedFJoTAi76qwymDnVWoDRp4vt8J5XprxXidW5u3ysEj98HW7tWFErFndsCPDy8D99TWCSE8w8M7zT",
  "key17": "y2gbbhSPFGTzgScbEaZnmUAGu6NRGW3aZmYGrNxKZRkeGVkcsH7cMbBsNYDL2efqeGaFuopTx95x2zWnjLZHgmD",
  "key18": "rXSi1Q3gAZGRCnz2PeRk312ZSyHp9B8j5Uf4FLhtpaHFMm9nSNYQo7pYxres7ZAXxnHCGhNHVxUf68op2n4DJgN",
  "key19": "5SGx859rs91kffhojJoTgDbAcsPKb3P1ahFf2dwASrCZ1Mj7BQGJE6bQjjGcxppAiSk5CU3vH3xCqSJ7CWoKoEit",
  "key20": "513CYMPtHcWwy23wJ2ji4kGnQzA4AyeZu4VynXDY1oTC47MXSoDQePuY6VhgmF4Dd5QdiPSBfC16nv9LfbWpkAtU",
  "key21": "XDsCp6SXAc1huBncBuTLJcDQtuMBLhyLJKNfsgtkdfD8LWYumqUUgMQcYscXPBHBrHisds5tgiLdo1kCX7wXkgY",
  "key22": "5yi4maiSV7FyYDfwAw1sdYuWv5hrnMLy1ovpsthE1iFY9Fadoze6y5LTXFkQwZcDjUnyyyviWXGYZA1bjxAJtZ9m",
  "key23": "Z5zWZtWCNxpFXXPEr1B2zS2Z1MXpcUBgM9xNUJVib9PwbgkHLZFAZzTpj7QxT1BGPTxDGbfcNLB5WD6VxicuGRB",
  "key24": "5HfqCVhvQ1Z1xNYu5owFShbGRjYhi5JrdTxtLq9ghgodLDrFEQa3fYKWbh6M1pnscNBhB17jAZUzHmfYjZthjQHz",
  "key25": "55Z7zhn5vHjTREjCRrduo5sJ1mUZo7VW5psK2F71qp96awpJ4bLtuw4vNdZHJbbzc3Ej6mCT6MSwzhzPGe9VR2di",
  "key26": "3Us2gJ4rhqQd6u6sWBwiLp32rmwdsB8sSdJph6LVm4BnLKCpExU8fMjf7dBQ987JmeuJ5ir5m7tLGcTNzgu1MDvR",
  "key27": "45bJBtDXkufZkAkiqX42f5Dqc9mK9CVRpdDC65PfU6nunjFqPdHKSGju6DSCEqBZVsKoXzw2ZfSRsf7BqCjnV7vp",
  "key28": "EtbRWnokURikWy9EgpmuxWfv6oJESMsX75wXraxFFGdK86YDKMs6N5v6uRByx1tPbdCWxGDz784cxnQz2kzDmcB",
  "key29": "3KJryYRKofc9HAzshZXVdvyzyPYmEtrQxzeqGEqxXG57ixAk4x8YsAp7jRc2VFUqnMVrkGccJd6LbTXamPkpzR1V",
  "key30": "25WicYVfS3Y1tL2Q5PLU9DVmZVYMhUhr7Xaegv8itszfiamchudbZ6ma5woruUg5Sy2uQFVuUP8cFq3T58Qfd6FS",
  "key31": "22JSUyPyFuMTPieHDsfSBFLMM4CpX9jJv37h2hnWR9bzmorwkFmQB7qpCGdv5DNYD7J3daof1zif7BzM8RdSR9WU",
  "key32": "32g6hubpNP5g5b1RLSWmXwR7wShoshTEeHisQ3g5M6RH2WmxyDKpVPYWT4NwjAkopiCf6Pe4mygFSsShiYzZCPjk",
  "key33": "2Ft8S8xY5dJhiTFhouKUTuseAjzPp4oG7BLBCagiNhPDjCnppnQJHwpbxgSSAYtceS4znWQ8n2q6V8MbNXoGAdTa",
  "key34": "avgUgkz2Y3zZ6oUwyii66uvu8oorrgpgwPyBVQnzbnVhTnZrU22KCvrLjuKeBnmKJavmwCTmgXoWHRWSBpkbBX8",
  "key35": "5JnoNAzCF3acpy4GvrWTW1gvMK2eEepy4wVt7G1TnywDUtjW5c5ufYAtUWw2kFnSoTPcCyQTgLhQxot58G3Y6CBF",
  "key36": "kQFppcUdaprcDd3Z9cyKyQApcKnen57EsogkdxA7ZckYTy3PzTz5YqNni51oLJyZnohQ1q8ySUazcoHK9jKikac",
  "key37": "2eUaRx1rXYUq8nKoEFPRft2RDcCFEdm7Vmk3qCgiMDdsP6EJTk8mer5a75eqYQ2mWxQd2aCzw2Ln8mA38kxM7Vgx",
  "key38": "5FNoYWXFR7aVkK9wKkx2LTcKbEEEkNVAdmJvfa5jtsUyG5mNMYJC1kn8Kr7ezV2TWZqPJckFRh32HS2knn45hSbz",
  "key39": "3qJFusY1eL4jFAn4btJ22ubZFBKynyN7GHfbPQVR13t4vQw3GcLzoPEuM5Bg2aeQKiWc6JQJdqp5eSVxjpvwoLMD",
  "key40": "2F9Q28hEL1YCVMrybazQ5782pAQ5PXctZBPBkmg4F8o59uuwgdg8rYHirk6mkA5kRRBjtex9YRoK1CvtcB6sK3n8",
  "key41": "3DuGijXD6sAdSA8t7qsFT3E7mkUsNUCGx8m7nKth21jXMeDE2L7R1gLzyygnwACPuT4iRXxoQDtLsQVLEU1JgCbm",
  "key42": "QrbUpLmN1M4MrhjkRpPf52AFeKJkswiA9f3XCGoTiW1CtVoK13wCM6e1jbyy4WKKRbz2ULmyUrehCEsZLL6y7T8",
  "key43": "pMdRyBB1m9mEv3arJVJcQepMf2sHfMmtBr6gE1XGuRmqubzkWH37rHn5fAjDocwtL29knMNEvyi3wanVzK3GwR8",
  "key44": "2MuZYZdbUH8wWZvc5xYHjirNeiFaSAJbbY5cxd7zgmmrkSZrfXz6vEeh5MqTm8ycvvUB97xF5Wbn2QLYUSfUTYq6",
  "key45": "5hLSqbaBLpUk3ydrGyUQ1jfY69YSJHs6zbuJQf1JaFNHhfumMc3cFBfnwF4thXGNtFQSA7ntRBuoPyURjaxKLSsA",
  "key46": "344hdwbT49K1fRg9AxCH1VNeFHtJLFNWmCHk92DSrVLMF51Q1rwwtgfRryuwJ16s8sWLgwTfZ2oUGKungqzGQ9bt",
  "key47": "64nVv3QAgKu1AN1nMDNLsdNeydApeLwBe99ParZHACQWerS5ydDkHQGJSpBxjPMvMBk3nuxAvDoEijXv6wNiB93J",
  "key48": "2F2mvuHPAovaKXRD3pqzXZp244ccRTjFz2wPzkTde8RHZAfU7FKSFaTb9DavBYvs3QpVouzzWXdqvc5i41my9aQ9"
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
