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
    "64uzWtkFD5GyxEQRVzK4qNWwdoSYiZXnvuVjV3uC11Lrg97AgWcLkQN86jFSVnNWhe7hQttHYEb986e3cyojkw9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nt7EMBoMy81JpAjVxGo37BMjkij7KGa1KJhifwwbmLSP3rK2738jdjoy1H4yjcErkeu7XMDq2wM74aPfCkaJgec",
  "key1": "3f8MuAtvvCLrVy1pgL127NJ8Aa2fh57fuRcqY9FLmqFkXmP64ecJRu2bnKLdVxGVMhm4afjuRaDxKSQzXbGPg4e2",
  "key2": "5N4JWRPEAKGmj5kULrJjcY83VtgsUvkWhva14yPpGwPc5UnbsvaEnexF7N4P71FqQVqwQBp68EwXCW6GJdWLEc6d",
  "key3": "2m8i5cdR89Tx2pZfW6Xs9NXM1K2WZ7x3ZSdJ9DFxKY5x4kqoyMEAroo3CDV87Msa4pYnNBQHy262YqvNXKEFEu8p",
  "key4": "4Vfz6brXgc4W3tdxXKbCjWpEgMz7Cf2A1q7jCQGguT9m4dqfv7q9BBsx2HVqngK8KouGiZ8c7Sc9KpoQEwKaLf3g",
  "key5": "Te2pdY57tHVDcgLiFRY895yBpjVrsNrumpdtSBT65iAwzsVobMDVucueDnWEPbPbeYKsidHCxgA7becb5UFqdJY",
  "key6": "4RtowvnWGZKPz6C3r36pxpmZdKzb616tAxgZH1N6hyfThMwoKmabpsnWJvoMkdb6UYVFukoHUMyGjwxzhu6wUmiA",
  "key7": "3jkHKDXTyioMgbcXNmpYnx7Ee6AP19h3HPBW6aRc31JpKMmHFGMwfwJEuMV7ZpEFpHeRxm1ZYL8PAXeuazNXJPsR",
  "key8": "23j9KFGn3mzSoTC4iAP5nM16eNwxurzixJ5TnXtVi9jkmnWQz8N3HhoDTQFKiY8rx9CMUdYQ4acG5QTy616DwtNy",
  "key9": "LdvFG8a93VF7fVyDpx5Xynuvcu16LXJnV7xv8LJctzcwcg7RWHqmru6jCUTeRty67NJ9CZm4pVUjWe35hEo4k6p",
  "key10": "4fBwfcmDxG2GZw92s3tevNwF2BM6cPksPR2aMZW3atTiJ9KfAgdWaoXaNyEfs8tG4S9wDQKYUwwqXrecCJa7deXV",
  "key11": "385P1NPFwVyq7AiXqspHEfG1aQyMyPQyh64MFqsw6qv1gx13JR1ncm8XpyQEu3E5pzhgAfUMHkyndHC2jMH7SFaJ",
  "key12": "48SfXme8XPKiPg7fSC3VAhDwyw6CGasHTX6dt1P1jesz9yFgHJWzEgHqyQaqCxw1PtNV6hYUQmaBDh9JCTbaSH8q",
  "key13": "3T7SruGmT16KZ2aGWXb3Uc6FJ3c3YogwVtCwKsN6naqbHsCAypM3k93P87eR99SSUSTF1xtRnL1hrbdtfqdSnWjn",
  "key14": "3jrDYNSSsFtk4q2KrVSSK8p7qACgixjJERGn1eQBELyhQbM6KSZvWyZC4vjHT8UTz5xki7hB94oQpw36NddXvfRo",
  "key15": "2nwecNqmLLin4j1jR5UQzZju641kB5UBU7hJNjpBuFr7TNw7EVmiEHVvnLmyKkmXAEobTSX3mn53YPYCPwb6dS9e",
  "key16": "47AAZCDcEag3uqdyut68dkjHiNEz3Jx8GSyiAUfAzjmVd81GQ8zKFAzpNRQfwbtVLZG5Dr4kGUt3hJqf3oWXf4Wo",
  "key17": "HjskyxKbnPGJF8FXp89anfsZtXqm1vm2USgKyHDfGCfaHR27r6GPvojKS97K4hWJnZJRpfNzpftgh4zoeQPeDXj",
  "key18": "JTaz4cYUp9jwcNXSULShHJ89v8xkGqSJCtY7T53Gr4omQ7KAovWfZKmout1Uoa6jkCfAhfdZxpYPtSqNctfqFX2",
  "key19": "4WKVUECqyPPD8obxDFhqTm4ytUAX5ChuWbQFQWdf3mMTTiTyQDyM4B6T9it1XJDDb6Up6pK5tJs9UuMrVbh64bnP",
  "key20": "5LkCBWNW9LBJiMSHPkUiArV82wY8DPzNseo2bzYN7YaNhAR8oQPFHjpBW965pPwb6vtAKGixmzdEeyQmFJrfdcZ2",
  "key21": "f4qUK8aWnqgWUFWqX41ZeqAZ5fg9yHW386y1Ndvr4kz4yv8JMyzYGMF2DtFhGRQ1dmoMGaci6rQkJ6ZtC9seHq4",
  "key22": "3vemYzvyKmdFfu9qrBMFmgp7Xz8ynRB2H7X34eFoQRphh8CwYp5AQE6BotWBtBUQ5zRYiALCrTPbtYjomJpRHRT3",
  "key23": "5pi2jrV1kX9YCRZJRqHA5TraeLAuc45Hk6mYJvrNfvFXQF8wysRn1F9eJ8QAMiZ7bwnWPnCf4ipMKN7vtBdgoacJ",
  "key24": "3uLmuHxANd86U1pprVpydCP5jSuEdQv3zWqynbRy6uN9fXbjb4wRVxhmygYNKxMo7XgKGd92u1Nhg6vyxHGJzqmY",
  "key25": "5GnSfEWtFVKFCsY1PhmYmCwMC5aB9PAZpDuKD7NExvodHBr82fWXWfC8uPjq6b6mLyAnAnESepGuee7KecyFtD2V",
  "key26": "53Z6RErnAkEj85w44MYayNPotjj5ihpTKBk5MC8hAqea8QQMkRNq5mHxtqhvMMQdzA8DWgSYDkKm8BggfNZ8gxM6",
  "key27": "4csyBBGxFugKSzfbEvivpzekBkbiD4euJk8B3eAeWJ9doKsmzVQFhE5ZZJJC4YVCgoa6Pg2Yk6zytucLRw4nJRHB",
  "key28": "3FVvFVvKxsY8F37cc6tth9AZqNbXhcWxk8oVg2PzUwmQGX6Wk6fhSSA1dG41fgNT1gZeuK4Z1j7PN5gzVCZ3S23q",
  "key29": "3PV3uz4n3VT6NQQCwK8D2jNNLhZXTs3FxhyBpfm79teKMcSzxPbhaR6iH2wwde45Ntrd4zmGJkGthdBKcWYQbDPu",
  "key30": "3gZSoe2QDzFsfjsG65MkaMikKKMjm6VhQdVAivY4DGWR91Ui98Cv1AbkHeAZQAMEfjbTUpHdQNgYM3Pucd28sZJ",
  "key31": "3PxXY3KS4BpXnLYCXKD7FjinNNNeELFAG1Y7GJmw6ighgisCb6ZFBQnxMUVuC9eJxPKxsP3BLYjHSeyAuB3KghSs",
  "key32": "co3LheKznEhG1ziCyyXzwBFSszFVbjzs3ufgVqciT5p1h1Bbfc9tHoiD1vdZd2MvCMX5UL5Bkx5y1eFNMj6KeGS",
  "key33": "45b59Q6FhXWAGXBvBF9fQGk5eMdJAw5ruA6sDtHpKZRJC5yYvVqc1gaGZNsSknPMaS8GviZMoJajjevyzyR9QQPh",
  "key34": "2NWEjxdRB5HDpndx92DkBFDwPpZmouYkBLdYdiraUzxwWB81rwtYRBZj5VEv7zmD1TEHrLgvtrECyvECWhyNdJpa",
  "key35": "UPsJNTApyAckpsA6jcvoDpBLxtAxNNdEM775z3JRLD2GXZzGEP9p8aAFDGCqQFffYR7tzuhigaPmRn26EPUiC8X",
  "key36": "ZYPFGg9ad9s4kjEg6vQaEt8ebHZv9etd9emrP2oycFCsSHpPp7KDq5xK7eq42TieBWgRyy67DfVXk9Q1aGDG3z1",
  "key37": "4nvqi8Yyd3sdseUjb3WGWFTBZcQM7WeNmT67xsarYYG6v69zf4tNButbrkaVCNTctpQkQfQu6Mq99AoDHFXgDLZQ",
  "key38": "5o3dTguqd73nqsKyPtDKB6AzPHYv7jaFWC34EAUH4WnSa9nFC14MepjFzodeUL9ubX8dD2ZEXQi3bGFWzz2YMdhw",
  "key39": "5zty8WynZgfnKztGMg5ibqQa6k9wnkf9fnXvAJdLiAu6aTpBLe6c1eq6rSK5W1TzU8yzyAg56n8uA4KzDF3NFoPj",
  "key40": "x6rwcbaypT97WR7Aeq9DD419X2bCL8QYxBb1jvCfP5Xs8aRQNeW7b1faeAnkC75mFW1zfG2zUireVp9Bntomtz9",
  "key41": "2YT1cctUoHruFt21SPEkdJZs5dypYRVkysDEWw4dUcSWtBocYdhfeRxwu2ZATTkGrMisGggN7dBpGNsxi9qNhS6q",
  "key42": "2rMzbAkDsJ9HpTb4kyk95AkvF3N3ywbyaPNrGhGbfecJAKpbbYHxnzAADmE5HnBzCCaTx2LSTtabYNDtBXnV8v4t",
  "key43": "2LDCtu5fsqrgW92hnBkKUWRMBcvHvNVSiR4CsR9TnkGJ3VyYrEVRBzrSMo8EFHtbFe6RegJDKbxCJ1RZbVk7XUb7",
  "key44": "vCtxGHyfVXr9FGLh6VNzs9Js5LrAGZSdfZfATGyaFHjfQwtjdAs1baUdVCGfPATCzsJBj333nMBJfoEN19mHWie"
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
