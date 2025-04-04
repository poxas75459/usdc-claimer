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
    "4JmkmCVfqUYRxEnLjrK3E3Z7CrFtTYBBXrpwaWkUdUJrELjpsu6tQ7JfnEdn64AQaSpoMrwx3zEwe3ydvJh6LsQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GcrRqWtpzNt7ei6TNktj9Mp6dB7k8NsFs5ZRAdgCvDxe2Y6j5Dh4j5yrDxysniwEgqijyPZiykNyBxGGR9JN9yf",
  "key1": "37Cinf3Z7Y6hUXLZbEBzxz9iJ1NbaJoqMvtrypJqWcDzPkExQLW2xfsFfbZP3P2tepjsfru9WvmUo6b1XsvCg8Xw",
  "key2": "3AraifyuaVmcH5giik4fjvbLuRHbjXf8CtpYMU53YP6vvG9BkWFDUDqAN7Fq1UrSUZPr4rJW941X17nBKBPePaGT",
  "key3": "2uj41ABBt4Ercomhn71BgyMwVwRavA34FRBuVNLSjziKMB3PUEDBsrmZeCCi3pVBXbFWP32LJLnt4j2YbTPUfG2j",
  "key4": "a5vD7TFX41UvbJSoYYwgReKra626W6de9yrkPqtnus6d7JA2DzBQkFjvKf1khKBKJYg74FvLiPYTqqRqgH9ieH9",
  "key5": "3BytyNXJHTmYy2b7UK6eR6b6FPVa9KVRenKMzc8yvwKzT8ZrUq3reBEAsVPb285Rdv1Fw86za9HGcwSXUqCmBqEu",
  "key6": "4rp3RKisw7TETp4PGgiqfBPLkYZX7XdQzmXNmeFAvabnRLCYZTuCn7rMyETuGZpgDQf1dvMs6dXQPirp2TPkEGt8",
  "key7": "FwdGj16uam1pXTpMS2x98Ce9teb8MU9vwRxsUxZZjjJgoqHnioRwUn6Spbc9jxkZaRYboRg1ZP9d2CWjHe6CAeH",
  "key8": "52PjqpudxVYj1D9rE41F8RKYD3W8Vj1NYHpS47YTSUHLjAisw1gotQV7bHosDcs2S1bsiUhzpSCUhCKxqFprpfKr",
  "key9": "4WAAeNKABbhtW1Yv3k1WjYNAjeAFAfApZTrupZd11kpXSyy3q8TVjeekawnnZQxoJwpenTYopWBHSPM13rx5skxJ",
  "key10": "ri1rTXXL1vsgyHVjhbT3Nhh4n6qHEw3oSaVmAMScgdGTJsRZNQBfXyNjojjwGKWMi5hgQutmf9znxd1nA23ZNED",
  "key11": "5DPvLzQjuHQZgZ6naSANceYsVF7oTgkSJZ5eFThjJzhMZDNXCYbNucw6viGzRBLjhLDc9EGKsJ2beR2Tw7ewZCo6",
  "key12": "4yiXt1kNpK74YH2gef1HuPHCMFCU2E3tXBezM2BSUUsk66YZoe7qVeaWcVXoFJX5gRs6NjFmzLLBU6vWVxCRuns5",
  "key13": "63a2jR3cPoZYAgPB6sF2r64qPviuLc99s18wYhuRJkKwLfgaezq8jhyF8qYH9rHyeyipy1XkRD6zx9tGXavTPTtB",
  "key14": "3byJVHiX5h1vmELXDgTdzXWDhGpHcZVhJm3oSpqBEREeJd8x4XV1x6bXzTbbZ2aYpnTr7wfJGsSPsYRmERMnUfY6",
  "key15": "5yjEhQgBGLPkACFwRFFdCJp4C9y6XTJ4dfXS1Zx9oactoa8LGSCtxDgfyaThzWQpvDWbpXmzVD5EhMFsaAR2NtAM",
  "key16": "4hyVx46YqLpq6K3QE7RyBetZnv3831EQuPS7D6RizFEU7uwALRLgDnnjoNBzSu3bdH8P6XwvrVSkjG9LD44Bgb2X",
  "key17": "3jpfum4MJFbFdhFbXbyeMt9ssPdn6YESV2U9p5PZPSCbrCX6a2iGevm16pV2y6d5BdXTaKPq25utJ3ybuQENSAqj",
  "key18": "3djuLMR6t3KJVMvLEaafhvHCNWGSZwbQRqV9ZyufDobQTcRZtMaE9rdC9RJ7skwhU6QTMorhHWXEKS629qVysXNs",
  "key19": "4MnD71xebFjHGvGBgCc46yNB36tvuwghuC2YoV3KjTPNa6TDmn9BQddBVwwHpNoTGMT7B7EonS6ncXvBFwet8yvZ",
  "key20": "3wWfyhRqMFQRdYJJ5xwbmHjN4A7gRbwKB9sc26UMiyut4HHpRTJjiCWUxaeCST9NjNwhVD2CTc79yWBTLDy2KSB7",
  "key21": "5Mbkq2j3HZG9vjMDWRziYZCPNgJSzxWa6i9j1iM41jdtEgCftXU35Yx9Q5KXB32zgiiZTV6uRYPaMfmCcyi2hEDW",
  "key22": "45PFa7ZcUR5bj9u6jG9qewLZWoJdqdrzRVwotjzKAteMK4oqpwyY9esw41MTRMEjtW8R3RYrtGTYuyxm4QuKxFF5",
  "key23": "4ESGCZPAZFJn9cp2bRrVVhzGCkN3PwuuRb95h8at81oRkNyuZDXLvX5iFaW5V7WpLRFjaRQ2434WyNW3eo6TPpUC",
  "key24": "4JdXzy36wrdNP3SjKSYTcJrYk222N9zeqzkq2qArJ8CcQK7GTyU1UYZ6shjakVD81C17goKLtqZ67NWgnXgJvkDf",
  "key25": "keJMaopZJ3E5ZAVvQMc7w2pw1UpWT6vzkZcHrpy62Vmz8zDnZuJxaLeaHRbK1WYWZfradtmFz6jhPnBmyBkmAWS",
  "key26": "2vuRZwntmL6GE5jKhLj1cmbZK1G6qBFAhADyLXLBzRLePrkaXw6z3BrU3HLNjWS4zSARcfkXMyR3QCMGqJNeWbEF",
  "key27": "niAA7EGUf4Qh8oWFWen5CxD7YPGAQWC5RN8P3gLNH8TYActMhL8Q86c1jEJbPY1Yn7ukutDgoxcuuTQfjhq8qYy",
  "key28": "5FSijVYy56oY4hhWbshAUyJT7P9SFeypBkYsJKr6DBiikqZNQ9rJtMzGBVvbmduFC5tP88MZCX2wi8oZuz4dcdHi",
  "key29": "4ZCm8UBtSWLK16HbCtgacQsh1z6auVgvcw3wjTfmrpAcQVM6fHkfGfY55GNNbDoY3fYnvcvwrihGSVZ3RSzTAmBo",
  "key30": "3iqWdZcTkmATYbWxYzMizQG4LNcmFbV961NeYEnodSHxvr6di4Wow3ckwF4uRkcV4EJjzijxFtHyEFHcrM5qdHLS",
  "key31": "4zj3fZ163bsxqsmpAkDv8dVdufZ3YA9vzq4RD43Pt96vC3SADdPEwKEXNqzLRxR7DhxHSYVTxLJZSsR9CeTPjCsJ",
  "key32": "2u7cRDRhwEw7Q7n4KCM58vVcS4FWZC7F2wUQ6EYCiaPN7yoBWd3XoP5vEuY7DhNjCaLfe2TxiqzqgpCTU5pDi8Nx",
  "key33": "3RiYB8SwEwRWb5WNooNbiqYXZWYG9W6QppNXixFZ5zDvdSpq34v4ujx6PmDjpnAVK1BozpNx1GD4wzVJeYhCNYHC",
  "key34": "5msvMznLLZRjJdwd2DJ4uMfHisgFHFRpWRoZWAW2r4nfrBttBSfmLa1k7VsfFPft8i2QzvPLLKuzipUHy3Q7WdET",
  "key35": "T7CwmoqAweLwkagzASX4xJ16BtPFWNtaCU4nx5ginw1VwbHeS4bpiSieMTAgUFzbiqeskC2Eht1sDnMfssAmY3f",
  "key36": "2URQy1G2PkPo1QVpTMXhYm2jEAgx2mNXMjq8UsT8G3d1em5TbKnetJE2KEfE9s6oZAHAqqo13Q8F3zNmQ9L3ebYh",
  "key37": "BtuKa1FXzyAPD3wbBqE8Co2ENNGnZ3968cAsMDShjabvh97uPJUJncP5ySgpZCsxZ4ti7Bx86BcKXPmJuRsGgfX",
  "key38": "31cQWGhVgBAonCDCKSAtP8ehtEq8rKKek72Ttb6SFX5YBZtfK7cwNq5dB3F4NC9EXSrD31QXjLAgsNWW6gjjg9PE",
  "key39": "5RUytGD5bE6sMpKyatTBZSmNLxQpFDjmHP4XvGahbRReBy57BsaBsoMV1etkNmx8bdgKSbbw7fkGMuYc9KewKwJi",
  "key40": "47ou7rYhvpqBqLNjhfCdPkUykfFXw6vSuXchLThmwceS5JDWqnetA7fDetVVcWZin4G7hjAvPXuS1MJXqnZRfbW8"
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
