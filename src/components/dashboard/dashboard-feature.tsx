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
    "2E6SpzVwfF96vb1kHrUfsKjxAni5BzUpgVLYXksPnkcuPkEQFinzirNTowUExW8WhicSAP6AHAu24ArWEa2ZfTKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HP8AECpN1q4oR8NhtKWyjQyxPRDpw4Vsw4yJTaKFwTf6dSbMiKuKN97NtQRyys6BxpHXmnmY6Mi1KNfx9N4aVoj",
  "key1": "2LPkF2VVKh1T1yRteSHFKX3aZorJF1eBUnvhEoSsi2qmAGNMcRC8xhJuLvUByoDVAWyB7eiaXDHEYygZWAvmLWjU",
  "key2": "4VKjxUk5rGGoYw6VjxxSVkqX75Q3xf2jFuqeySPsimVwQK6VYK3ZzDDVmX78kQCw7otWAuiBHRpmvUPqvncDfXt4",
  "key3": "3xvs83gpKMLQRqQi97kSgFCBhLSRw3m4RgoqfVZLemKzHKe48BAstLzDmQ7MffZ7RHwJT2kzxrAhmUnXgFJnaNjA",
  "key4": "4t9tKYjJLrCA8N3UyyNwpEBNQfsemqHxqGVAS7w6ntXhk4wA2wqWTijLFAt9km7criReuoDyz9VvCU4o9MN7xeTq",
  "key5": "5m46reHqVjmdXHCc9ZUn7C7sPU9k5QoQNdxhMcXDEH5kHcdzaFPE7mtErs3Ds4SckzU7e1rrgtzhuwpagWJMkeU2",
  "key6": "vAKaqq9ku6XViN5QaeT3kXL2hxk3xcRWYEYS6ixrAAsQL87ahCFjyzLcZogwx7dek1Lf1Pf67hHwUXCMjjxaiTY",
  "key7": "b4vssQgFd8fRt47peYjMhQ5Ty5ESWVkj7Hokmn1UtebMaKL1RAwfivafzZkst6SVZTFot9WB3QLFGrDrUJSo7a6",
  "key8": "4EgdRGgyW2dAKWWiQEEZwPS2NRc1a1zs4RDBtihhXXPu7UkFRgMKu66iEJdDyGDoyNQ7pitn6jsMJMEkTsX4QCUi",
  "key9": "4gq7miHsX5cM8vVazD8Wt9d39PnA7UQPD6KwReU59iQzpW5u4wGa7e7xkUMBiWnjXe54ZU2F4EZhLbnmCZxFYuiG",
  "key10": "3r2ZuRKirXR3cgMpnpcNmXtZcWqJmMN39be2BoQNYvjiu7XK4nVgn3Bt1vMm8KbyyjkyqN8Z5VkzTYzbBQVoqxEU",
  "key11": "XCv5XackheDPFpjseBKDpq7aR5xyJvDobopJQ42tEGTX44vA5CSnH6JeehuFYMCfLcRYuQj1CXCXZ8k4h1hdsvv",
  "key12": "tnZusHZJYPQmbzoMD8ikMG4k8KG4Jqwb8tgxLzSTppWpf3UvpCJPDwHeK6iKyKnTu8XbhxPzZSM3VcrpoUK4qM7",
  "key13": "WGeuUwxu9G7oEEL31UYhpebW4bm8JFgbmjF8MiVXGhsFSJ8WUrmbzBuvHwQKbVaSi8DT5YPA86C8ArWmRHFkDwT",
  "key14": "4YmcTACQVmeTqqRFzrsZeDY7k5it8EYPyFsiKFoAy5QHbQ9U3Dvssyuh1TEAw93A5Ac1Rnwfw2Z9pJPRD7JUoE21",
  "key15": "4Zgd9hDm3PRMas3odPtzAVVZpgVMRyU9x1jciKst2Rfti6WAsyVSD8ALUBMVV9r6bpfnrCHa2v7h563F8n1LSzNc",
  "key16": "3SALEmVXu8dFc7imWnbNRjZ7jZHoxqbK46QF17mUx7Z3DAG4VNcmxMu9WzmX2QY3Cc9bccTrxMZHxuBgkUCpENVc",
  "key17": "23oF7H5xpVeRoMadyBzm7zLtfAwuf6HQnYZ1kox6Tg2UGoUz1sTc7R563YcZ5DK2PEVq1q8tx8DL7UMu6EEFes97",
  "key18": "BESDqxwxxiWvP7UVL3eTFtk9HdvbTPAjbVKoYc2tF6k3VwMVbK5JXin1p7HxQHJ1mPU7Cxuu2CAW45CVGKcjEv8",
  "key19": "DJsxyiFKbgfV4Ci3T7sfcNAaL1XqzCmSw7MJsCaV41rbTRiqRL2xJ36Wt6jzhEQQdx4884S1QoX43k1LSuAXGZx",
  "key20": "3zQufziYw37Ae5LSax9KFjfdNv3qpWc2KQcyt3ygic9bfoYja3CCeyFjgk3MC9Ub5bCUguWQU3xVg2Pz1FiNHTZy",
  "key21": "PMsCUfLxYY7uNeX6cx2WwdSPenEDFxLx31LDgeivGmftG1X3Ez9svCUoeLFL1QbavFCBiQT3t83mdzqdEJqWzKX",
  "key22": "3nKLdthrZNERKNnFvbeV7g8J24sL5djk7Hd7dew5mZN5NKgsH2u5qcmS3WqFFgLvLpqWcRcFDv4iPvc2QQzwp5Ww",
  "key23": "4VqbRFNrQwGosYL5hpoaVrk2MWr4Kp4CEabX9DwmfixLQyggw3UBxwvzZR7qvNSnoqDYQKhkmdMthnuy2kAHDuqd",
  "key24": "4GtCjFgxBYSDgmLfHwxucARp3vx3sJeptjfn8rLh3Z1gjTJKsDxsMyRmvvCxNwJARmXbVk3bxyFfPwnvuY85nesf",
  "key25": "41g6eV3EmpMoKbCGyoSir4xk4pFVu9oDtQNVngu5yokodtz2B5e1qYabskvy5m9bKA2Cz1F7h1yKBtjcr72CqLch",
  "key26": "2Mdgd1JJZ7kMQ2Cno2pM1J19gMTSK7VLbSTG7QT9NwGUFz8TFYMxSe8mY4QL2oFyUMg4n4o2eaUog1jjeYpEbGJ9",
  "key27": "29xg7Wyix4rAvE8imtagqGJF1ia2EPCyK8EY59nYiVCgxec2HX7g8RuqCA9HKYEwTRgb7qdGeaEqKoy4tBhfMTZt",
  "key28": "3sjUYJTymYv1xSU74sg8LhXhMBJHyvStKmShRftGUZEPy7fns2zMdcE66EnmvgLf5YBAVAJgsLeSJXeuYPFzR88H",
  "key29": "2YMSjdYHCSnP6b9w7Qp4C8VuU9vH4X5T2ueCjmZeu661w9KXwqpLCEveL1y7786htrqQGbNEUSWUwEyWbJpMtdjq",
  "key30": "61PqPqzKXXq4DGxHZ6aZ8LAcbhSZqaC2j9sqt392W82T1otYBoPGq758CHQ4ZFMktLGimaC79Fnrcn3iFTwWhq1C",
  "key31": "5hZEckfcgCF61yEDDyeRQaA4Ud8dUPbGwC11MJF6PGAnNSTN4R8uG17LBV9oBW37fTVpsX5MAcRACeKXYMvCZGyr",
  "key32": "5eVTRSak39TzQyGvsNr2XPQupQwAKGSA4RqSjTFjUpgfab1yFeMDoW8VHsc9KU1cfGY1rAh9xsT71RcMrestoHUS",
  "key33": "qm9ituJdTsVbL61QJqkgRoj69Tfp9CKzL54cFmJ3Qs91kQuLvMq7boHpn6RErP3HHZdry3M8xvAS6Xqh35BJGSK",
  "key34": "37qAHjKQbb86KpEfAH1KrpgYjaBg2GrDNpWNtwfMDjpoKtfQJRmwdbWDr8Yp6BPmPgNkAZEUL6uGPsHeXzsHp3D6",
  "key35": "3iJERDmGhNgHdaXBiLrwJnvXiu9NmcUhRdCjX7BC1AFLNjY3rxrEayf63mDLMowhuTkK5UyytZRn2xkwWo8dU6mi",
  "key36": "213KkbYLjwnKR78gheSCrGXhJgJAYUA3vfb7WtXhewPMXVs7kBFFmowPrkEauuNypQfBxexJuWCKo6ciqMWHqjTd",
  "key37": "4ZDK69oozwu1RgfDrjib1Co728uU1aFEfG1KyGDyEhyzum1qL6MN9Nx2xrqsmSwnkA2Hy36GxAnuUC3WTztDiQQZ"
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
