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
    "4nHHYYPBPJ4GEFpejyyNNjyGFL7fQdALh6LbrUWigTMFDEm69Amts4FqRBuY51JrDKkCAWiNgB7fsCKy9mTr7s4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yjAyj8idRWnbjtzxCzwYBdq89y93oXNpBge1c7pLGXV2BhfQrwGe8XFMcJggJ7SX1qpNtHfbpo46UBWT91kC1fw",
  "key1": "omnxiSaezM3kh5MsCdS3NR7gruAGm613eSSh6ym6sYYbJVhwbq36avuhshY93EgwGzabNC3VoCYbMbUQSLiYmnv",
  "key2": "ihqiLLZ2fNa9faUTRXfV3YmRhqhVgMHNWhEKn1aBzgbYELgkzmJ8gHYAEQWAvbwJeK97AeguJdHpeeAjCJUsLGA",
  "key3": "B9rC3rvHqA81YBgMqKK5oytdZkofGN9KmYtxEo81jMjy6s9mdnSs19fiSwcdHjfzS4rd2dyMCKT5qsz9UxYPJcw",
  "key4": "4Qq5VhzBTCZ6vZMFSwcohttGY651SBJUHdwVJpqThvy83nTtrQPwokdyX21TXMTN7B9CbAweMreLaqkr1sVFGvEm",
  "key5": "5vAakGHvZAyCr5XDovjN22BmmfXp8W7Z7bb8f2E5gbLjyd6RATwG6n3NrAzUJZ6w5GKMPBFTKixCtecYestbjRJm",
  "key6": "25WNC9WYpvGpoSa9dPgJt9y2to7DN7tYUBKXSVuw3TEpezHSP1vMxttvCdupKFfkmmswo9ssdWZvQCthPTafqY9T",
  "key7": "umPYRqjGzPStSYbmxU18WMEUrN1BTqdx9Kqmb9EgPoU4LSE15GzgwqRKRzobwGUZpGUqhYrNKSXrha8oDA8ai6n",
  "key8": "2RYtgd97XwmUMApK2s8yup43ggjA8simSTDRdLAmJaYpYUzh52yK9m1jywpiBzMVh67Ci5zKAqq6STspKyb2xLHE",
  "key9": "5BUL17REDXT7QcXJpNBfM2uEa9xHKfCNm1zsUaZsQXNFVKn8CLmd5AA6V9PVzqh4jFABhxQM6PKZtcCfaG6jAVMr",
  "key10": "2uFRVtRX5VbyCTfeGtDoKG72GUxfvuMSgM4fLXyHUgJEf1F49RJuRVAdkdLAVXFE3M9uFPa9YxJbMkNxRBY8Kk4P",
  "key11": "4TeuUTUTfjTZzX6AxnxeVLH9H4XSmf1LYSWFFRVJMg9NeYVkVZus5J3iV9NLAC7aBVKEZZkkF5TkQKZfrZAF6wZL",
  "key12": "5H375DPUVKYtKvMrRQP9ejRKNdRv9Ud5FevCWBby23oGCLrx4MnGVXL5AyXxkHunEqX1q2rANjWU2wiA6u6cnEBA",
  "key13": "56fDY8mpDqDLjXy3ejbsvuAgY8f8dZ1vve3oXSeQwqBHtoVEJgcXZ93FpwypLm6hvUZtyTwBZThQ1hrFPojzcPH9",
  "key14": "3fjyLQCrZdq7WiCZCUfi4Jb6i49sfVfYu382BzoR2oekaGu9uAGrEToqNGz46wc2fuM7H75cn4faz3jC9AiC5S8i",
  "key15": "3W7TpMS69NP4hmFBcYUjMuPHT5qedP4oGvdp1Pz4mzYdGhUuY38ixPzBJGbgWzoy9kYakoYgYNrLyBsPHZwNiH4z",
  "key16": "4v8xtK7x1LznjY7VAs6bTnFJYJge7HKQ1aUDsj413udrN8RaZoE1DE1mnrA3iHA4sLs2uwAV5LwDoLCHReakNT1W",
  "key17": "4jDs8z1wZ1dGUTgpdzbYUGfDXNcwTthcADSy7yKRAPkSynGb7ubJgpub1axiwRMdH9kNUZ9CKiDauhrdXchZCGE4",
  "key18": "2YuCvX3cFSBvF8VYVpUwVMjobatanHUergnJ4feSMriBCrKb4nynzL4VRZ2yLUWL2RB7vyeY8eNyPGAkhWDvzSPS",
  "key19": "fcsd87buxQriudWKpZaP75bk7fhAaUSEBHTjANTbHMQk4YvyotErymyfSzaGFDRnTJuhnTCQu6bHGxc4xfT2TmK",
  "key20": "4agDJT2mYwsQL2EW7jGCkNCjAoEhxxCjdfCcyEi83DTEpbNJDWJViXtjQn8dm5DPHgjyZEgLpbGsEFDdroSrjSxc",
  "key21": "2QhEEcjmqbcgACYFbtWecE5s9rW5VfiFjbiZkGkUu7ogYJbFurtgNHYudAG592DuJFxZxuoXmfRYDKEtQBD4B7fE",
  "key22": "5CCMDP5G2PBzNiCdYKywGDsDTfgfq2ksWqaD9N5Swe1aeeDmudQnpNF6XEuRZgxnGoeMyMtSkBRc86PoZj2GU6xQ",
  "key23": "3cw7LUSjzp96nWoenu1pkAH3BvUgNNUiJqAF5PipS7ZezyLYbdQaZK6mMYT5zcN2hpFEZtVqcLQu7ABCV1AwBqNT",
  "key24": "3KAKojqCPuqdtNJ3ssz7sG7btCBmCtGeKQE2qQB1JoeRX6FpzA98E9xFtGmQ8Mi3sCjVyZkoqBbpGum3XFr1zutC",
  "key25": "4425xNcRgidYkNGLCjSNd6kahiK3mGYZQMC4uEHwf1pdMJXMgvgx56VFFKWXEP31FDkkqkGC8na95wAuxFtCy1Bf",
  "key26": "2yoxNFy5rEJ1Xu3m32uCrKgEgxQ5VVhJuTPCFSEmpVKZTF65GbW8iiy2r7U9fHDxkmDkBwLy6x4nNHuFiKrqPNsm",
  "key27": "3CTUHs6esC2VsLzG5EPYnEZa9Qt51Ms7ZXFwwSKEFsNieNczZk1ZnLGmbfK5yYqVkgXZXep7pnWn8dxJzWqM8SCG",
  "key28": "5nafsfLE2DAivpKCJcJwWrdKSVYLHVKZnac5hkC6b6DnzicTJFq4asNEaXj71m6z9tsyQ7x3v8NSezLkgCow31JW",
  "key29": "2HLSHZyHCCiD7cdK1juZeU2y5KTJNwUSTsRsEjozwd6cfX1bhVdk9w3NA8e8QHDmpWrbKfEhcen558gh93i3jArN",
  "key30": "3MknT1MgPQhRk3L9CLSyzHbkewxyFdc5LzZYLfmTtbjYjv4TZNPQLk4bqHeoJwiQYhs5P75ExGNbNvQAGCTdNZoB",
  "key31": "TUGDg3qubtmp7c6s3uyCCRNTrNWPJVwm7oJbMCQPVsyPTxfSL7JQwAn4FwxAMheemPyWz172ZEfecyj9i5DeZH3",
  "key32": "2gyzrhxwekz5DXxuSTcQeWhJDSzEGxakLkWhqkVLodNszLBfSivHfFKPrU6eXRMdse8aCevQ6h9FvYu9hNJjtzT7",
  "key33": "3NbHfBieCP1mjDQLeMw5PZoRCQrnBk8VnD9jZsvb5afpLnVRDTWAgyYeueDumE5r5GeKNuX6SMGYGqXTGNKPQcoS",
  "key34": "415nVJSeJtvTn4z3aLm5BFuCQSajqVf9AHXr5zArjFmHGu88E7FCcE82JJJ45SCShZmbBJkWvZAUXsDDZrshXWHN"
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
