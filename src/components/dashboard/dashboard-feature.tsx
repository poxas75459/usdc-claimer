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
    "3QDbBrZVq7q2UpzAQX5MLbSYJBxwt45MWBpL8Cxa12Xh9n9d8kHpUgiKMU93prThDSnapS94oBMiYucnrKPYjGd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4acqzbcGcKGFATCcxkL2iZLgPVkxj9HTGN3QqE5YUuc26c79zsA6HMTBTC9cAop4V5BpSvseAs19m7TUwHX4ppbP",
  "key1": "ZjpviBPeFHgGQsAD3KwMP9NhZuZ6gXn1qBJRFKba2B64UbEMcHGqD5KaFU5twWjazPBSjJnCk9CgnWbqTof8D68",
  "key2": "38xfARdBf5o9zewzPDqkwbEBpcQZXbgpq8bjxi22y8axpsdnwVctpdZuNU7GPS55pb2qzuCa7z5B3BS7xWT2LiQ3",
  "key3": "cE2uHNnSmyBaTjJsotB1gBMcxTw1FaGLJoFTKRGPhyKF1HsGuUn9s6Tc1cNBVYM71H6Wko3Ju3YfUG8gNeAhtfn",
  "key4": "G8piMhSp2cNSQU8XjNf6VSe436QFAYkqUh9LLkcgxw4YXKdxrvzWk1RBViYPJXCGAPsPXxGH9coYHnEZequ75Dt",
  "key5": "2yW7hkRZWYXkiVCcBdwchR1aJyj3dwBiPowEUdgDZHDthdhiALEg5m3NgVohKSuqLWcBL84EBzc6N5XeFmn4EpKo",
  "key6": "3G3SgUnR11w1QNXTJiYXnzbeoLn5jbcfpcmXotPdYaHayxtTn4gNtyS8W8tG3sYf8wdTFLsWhLEZ2PqCxJ8hxbUZ",
  "key7": "3e69Nh5LK9jynJP1VC4BS8mEiPd4q4uFPidqLx8LryNVnpg9UyB2XsmYnEoFjJsNhVM5T1oJra1WNYzNrSDs5Kyo",
  "key8": "38i4N2wgnqUrpkRcXt9jHUfnNd7FgQsf5opYrV9ewcdNMG7GXxNtzVXC5mgjLyBB989YFjHHiUfFYrGaVgmE2vxG",
  "key9": "BC5JPkby5BmAWsdk3xWrRx7wux2SwVg4eCvEtuhQ6vCR1e248CFjmHykjfpzJP9PyDzYU9JvSiPWAcjH45Psu1Q",
  "key10": "3n7KB2nbJ185nnLAdZ8s5D24S7YCDaMicUGAHCsgYNzjHMdJsmuU4VuAQVDwZApn1a8QTWjEy1KZrg7MBFwMnTJp",
  "key11": "51zYVfHfzY8Y1XJyBb4qMKymekKrUf2kGfXnxDPGRwWaNp5BRWtLDunEWtJCsipnEvdjBfpwEioYZQdxNKbxj4ih",
  "key12": "3A2Amo5PK4pZXD2Mdqv5w6r6RMqtZN4CZpFSnxfjaLW6xBtrbmngyBAfpNsY4SSmX6qYJtsBxYJZaciaL6dey6LF",
  "key13": "4cEtDpdCXKPRBy6RXzhGfpCZaH6HhmUYdTo39xq6mpraqpriCHFDTxvHZTNXgZ4Mes9v27W8y59ZcuePzDUq4tTa",
  "key14": "58cp6nrtcNPfBtMtSUZZC7xqfj2So3GU1h5ZsD6xT4wNTJXrJEpKJZQwZPXYP5YprSSzDmfF4tsaiXFJvmDFU7FJ",
  "key15": "3VgHyYnZmoyiA6DfUAfZaq4E8MP5Kh4yat4a7fBmotosyGRukcKkqaWBYEomcdEEZCTa57WEp6ohfJahzUyixtN1",
  "key16": "2vx39irT4cbNJgHkTsKSMwXgTrjz69wkfqRunHthLf8QoC2EVJyLqsH6QW7xDxgKq7fzc6vxck2orVXC5WDKH7q9",
  "key17": "5Lx3S1M1BkVmZY6exzPnhMEHeRrzPLRBq9d9V5uHBTi8ZxNmqPRMzuwUwUa3ufKnpANDkdWpDUf5qrNppAM3eRqL",
  "key18": "jwSsWT8BzySVCu3DXzi2boec23RACvTaSvzCuFwAfHUCZoe3a2jFiJ9EKBwkpkviTn6G291bxee89GrbgH9VFXs",
  "key19": "4yata3B8irq2QsCH21hPhSmF99w42X5mMgd7mu4vXTgMRCEs6BMXTg6Uiu5gd2kqZCc9s9JS8onYoaQZcsd3vrL7",
  "key20": "DqLcYJepRmrB8846DRr3J725i3zxEa1ZioNup7PNhuao7H77BURaGMKpvwX9tU5n9hJ2YLZ9FzcVWpeTG7daqsK",
  "key21": "37YxwH5BH3AdGyzarRr66NkogecYa3GhuWUCCpMdGiprNB3Bv6k2diM8uYZLT4XV1gUPD9mB3UerzXxYJoUT86Bn",
  "key22": "48fX5hGXsZZjj3maDLbow8va2ttex9nqnCM7hbhfFfG2xNGwHJtqr7PJCDWVZWA5o7wSCZ167BFvXr8ajBPG9yjj",
  "key23": "4j9NheVtSmk9Fb4Pn6NXMYJ5zsLvTQ2N5NqMu8gXR4XNQyNF7imyMayv2QJU3qFtci4P8wNf5DvGvufn1VdQQx5L",
  "key24": "3iG55nMZ444DNR3RsG8PUuEbwxeY1fhXotcK2TxD6fypUREeHZk8DRBquEWCxpfXRArv5CMQph8sSX1jFbUBe1d1",
  "key25": "5dAdkRU1se42PpYvcJSQwnwkTZZwx3rsFNXDEcfT89JR5ypUFBcsow4DUMLrf4nMdJ96BrEfBJDL8sKw2zGrKZbp",
  "key26": "5iHh195GBbYWbnKDo1BLSPGZwmgBMdK11cWkEFjKYYPukzBGHoFj1DPXaHr3KG5vtGZfR8XGmyXUJCK3UmWbwYux",
  "key27": "BdZ5X7QADEDzwhAGRJZRbovQ2kpCKDJpTqEaXvXY3mCicQeLzP67fzHZXeWqQcECcXx7UmjXyj9MAsV5roTa3Kp",
  "key28": "DUsyfQYm2Bbbr1ibPfvGPbh9yhKyLf3teY1Lo5sBQ3hxaApvkHA5LpNjMWYjSsHt94NSTRVT4sRrzLF1RbHeHUn",
  "key29": "3Wkzs236D3VbVJjeBZLaEMdmA2DQiBAeCvuA7VKhupm8D2pAKXUq2FWYx75npHHBhJPebKWVovYvxza3i6nBSHee",
  "key30": "5wc5Gg6T6BEzeUBcG8rwLX24yod5nS57iknapbmRR49FeRiiRqCmj476bDcdVBKweCD5GbBzfnZgtnyPwJTx3qUp",
  "key31": "4qiPQsNg8xcFhuct8x3obAe7RwgRe5Fqx7RSZbW4k9R7GeQoipWoW2cPMcoTRbeLeFRz8xWMezQNnPVTjca5YY7f",
  "key32": "4cTATqzto9NpxuSXCjzEjUJzJTaci5zfumZ8xVbc4Qh5qofBng5MosFvVWUkKj7PeRFxLXHg1AA1uQ5N7KQZF6VC",
  "key33": "9PHkoV4rNEZmmmphgeckXuBKW7r5Vh4QNrSjoDa4Dj2aCajo6NTUdaCMf4D8ygydAC5dncKh4yT3kXU8ZDRcmj7",
  "key34": "4J9NGHWx1yA1aFGodtMmGrNVjMmiwKgxw9QD9frNWLMtAE7PsAP7Kayv2QvJ4j3ayQDuGrTtJZ44pMwSfJ95x65C"
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
