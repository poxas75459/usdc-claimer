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
    "4tMJ23dJkzcE88jCcDFvdGSWZ8aGcoeEgeiV2BSKn2G5eYxgNQiXDCd28e6JhMq8hvPaoDR9pAABj4xz1P3FyaEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QQ3LcPaciKsAZyVHYZGoFXasMD4kx56VLwP1KMbMJwjpQrTGMxT5ppvfroq4bCWNsfoGWyJfwbysm56bKSkdptj",
  "key1": "5LUL5jaCUnsvMYy3WExHhxaRrGyLNmUP4qUeyritvG3ZAGuewJcURikcw37fov8xXYZs4T8sHe5u21xNw4hw3svw",
  "key2": "upUExqDQFvb2L43Ma2GGmdnyhrEFhVsLEDWKzkEH6UJeNgYoiBKpc1LrKBF7WjXgm2W9s9HM6MfXyPJ8CWDmr3W",
  "key3": "4K2Q9M6Ms6ijVm6E7pHTxSQZBozHzbzoJwv4wXgFUcvQUuMKPYiGtQnp36vgTw9mTLWSn8wiJ8g1L1UdwadUv33R",
  "key4": "2DfTyN414C5q657SVaazD7RNBeWzhzNJXvig16Zyn2TXnKht8rKtF9JCj62ZkEy4vkNgfmavm2BFWTi8X7SxN2wq",
  "key5": "BzDoro6PN13wzc4o27eo2dfsiCZLHXEeYwL2CaXfknPcA9wbNXUxQMRoeQ4WgG2JecEGFk9qv9BPvB41crSnzhx",
  "key6": "2fpzXQK9jbkWLX8EhraJ4tKkm3HKY21qyH9X1QW8Kbp26eJxuna62teq1A45qU9tYC9ijGoSj79yJbJVTHikG8aQ",
  "key7": "4H7ppKEsNHi3b5wWztY8x8ELzFTwqKoQp5M1uRGkDUcktn84GWTsG5TvKiXbikwi8uAkWZzg1LdzpdWUio58tiNQ",
  "key8": "4LouXh19qxDB4msb4hhMFZUH9aaSWJbosGME32VpSgGbVebaKkzFGGCPu7Zyv4DbpbHiXeXMfKjBAThBHr7iz871",
  "key9": "5CeuqvQsvvUtRUy1wyDhwpvmrWJdcSTdmse3Q3hFDjwWXe4UxgdqMjGjcbwcNBXn6QPUWGtRmpQW21xHjnWfgLJc",
  "key10": "yjsRkGunz2AnKgyqPU2Rsp6ptRUeqtzWGF1suUiKRwm82yrD3DMYWvKNAN4RnL6YrH4gha5VF4nGGLE7KFCiQAL",
  "key11": "k9MDrSEnahQa2abK5kBa3WqPsMVkaUhLce28Dq768VAAbahbhdXCoYwoVn6dtm7ocE3SfgKEqwcFevsLBh6Ftj8",
  "key12": "qR2X1fTcMc3cKQ39ST5S3FQvehYKmGte3Lz8pk4PkNJsT7TpZKiKqKMY2stRWaMm39nJcyqfFTkL9ifYs3RMyga",
  "key13": "2YR4RTYyo6XWdvsaJdY3S8GF2Hp71h7NaNtiy4s3CDXrZCPxHipuGdaUKBnHeijkywqrsv4APDpLKYTx67u32U14",
  "key14": "5AKDkWdWMyBC9gGuCnvktWr1QALA9PP4sv2DaVQr5NbrZzfg1Dib9goiGJ8PLfcoZyt9CPMjL12zdWf8bmnEBkX9",
  "key15": "2EdpgunGAdXUJ3umNWcVoDDC2Lo7wW4o48RrCv9zCoqurwomSr4jkqPkeqzb6y6nCf6S3CbfLqAy5x7vqxxch9St",
  "key16": "2qrUxhPhF31h128N4sqH2gmEsXE8P7SSFDSnJH5xrEuGXYxd6DaWxCiC1PprY2dGb4aWj4vkaciZsGbxF8R4nif6",
  "key17": "3TJgmHEw4WfdBeHBkBoamNYyhmAvF9L85d3njUd561rSGT4BNycsdZJYXSfqcKRTbJWebgKVkxHKYNMwMT2qfJUA",
  "key18": "4pzda3y6iyLc64CZJp6XMzHK1EzFSu9Ki8ThtxqG6Hz1P8ZXzKTUJL8Qg36ozkZfCJcirECXD5B9jbFK9gWtBhC9",
  "key19": "4MAkpeopeLenZubUQMYVVLmuSkY5KDxbRej5ARLuUF1i8kgiB3ouKzcysgzjkCU2fvtmnd9Psdo7pce8etk4cGyv",
  "key20": "61q2CHCpvqVfpyH95m1y7k4qKkFMDUmTPEh3KTuswfqet1eSUy8F1SnyrL77hpbaJXoLHS1VV7XxwuU1jGd653td",
  "key21": "3sNbGhvA7gVmTGdSAJjT7ddK6qEgqNttyYycJYGNxPVwHSkPZuDMunUaa9xMDVcjGd7f4onM3ETXhm1Vd5Vnt2ue",
  "key22": "2j256ctcxGgv7L15XUwF2jq6Pm9ZHz9jHGm5hJdcj2hmwH7Cf2HEe2HvkRYC35PbgfP3U3475Nt4HkhBWfiw33KS",
  "key23": "tMmwAmndMuY8GUf7zRbrMb38TfGMVwFQZDwUwJT69wtSRDRDkFtGH82QwWeEo65kudgp6ki1rSsfeoQpwQwQyT2",
  "key24": "53JUp2hFrbEtSkhjZ8eFxFKPnsChr9HLfjHfxXw9fwMLnBmHwnE8Y49TTH1rGC9fMYv8ggChNBwNGU4c4FZkoq4w",
  "key25": "BsBWp5M2Ky3jjSbiuMKRJCyGFyjdfJJaCQG9FACTRoxYRGnq6U3A16z4ft5u5mD7simwior997cJzk3UZRPxRvb",
  "key26": "3qjH8WvRJZfdJPLxdtdjEGno2bGNwzdtytwjvAZJjSwpQJEUtxVfD21hVkFFwRczs9naMbBSJYKLvkgqdztSJNE1",
  "key27": "23N4tRnn8jrFocmj7PaUpry8wyEWXXN4j4RXbuwn7AEhG9KUqQgX1QGH4dqkfPZdXizrK3sSyJvjnwn8oHzD9fn1",
  "key28": "2yJikJ2ccyxUexisAeZUmGJbBiA34E4KEkMhLtU9EDX1dxqXiooHnkCrxXbYBoYkw2NhGGxjNW5BYzovzmgJ54GW",
  "key29": "22xQUcjeUKrkBoemaB1QxfADvPRHt672mRb1ppFEWNSpDPSXBxM3Qg9myixpuCMNQczFk2683GjZaaG6nWGET8SL",
  "key30": "ATyU4eF5nfrfHEcKuDdTg9yByEiHKxr1rDZgNWRfj5W2e2Hgegn2AQAW12BgjQxmpfksVZD7bibseCYYQtj1meF",
  "key31": "35XkfGqd8ReXB6nkZ4JctCsnvRo3gYcVYcJPnSoeCQh1P2KEzKA2bCkkpvW9CZskYSismSEbH1chZwmSLjKvEUsy",
  "key32": "5NnKR4ib3gYBqCuxCFcfimduwfCtfR4DVi7Lz6ueNnGMN1e3kQAm4GwMpjTamiHAzeThLvWoc6HhwigXHEVPwbTN",
  "key33": "58SKrifoELWSZnSTsQNzuYGwhDp6N6ZLtL4R1SJaENw4RkWt4HesLnBsy8xrs1NwkAHzj4g5hVGr1s48Rs5gALwa",
  "key34": "4SK6kDVEGmezK32Z9GAu9mVvaWmNmqhgZCUACHznDCndpdLc2w9e7TJe5rNiX5Gv1e9wvaXsAfu59gEB9XoKUrwA",
  "key35": "Eh7fCX1JiEVEtgDyGVjqFj2Qyz5XcdByQitxs9TiWN85FNXMgFpTtJut5wor41dJt4SVVDtpDS6TJRH26sihsXw",
  "key36": "2p4tqysFDjtbVc5PKBErmDP5Z2V585DF6bzWZiNuPYxkmGd36V9oJVriy9XhGrEW67DZwcT5bNxdy1D4qP21HnQA",
  "key37": "2WSszV6tXzUMwpK5koKf4Xmt6VooTXD9XY2GEct77Ycd5pMw3h8zQ5LA77xM3aK5ejDLr3LMiy3aRm3ubHyqx4yu",
  "key38": "5CPBFfJHjv4NeKpQYARB17dL3CjUD4p73LjwbJrg1V9D2jceN8pBPkQ5JDNUmyiASVuoq2ErCprPotHLiXshZdz",
  "key39": "31roiiKx9G8YakbGcLTya12mALPizWWBMwwkXkWgvQ8seFEweJDgVfJ2992zdBMM1Bzio6mBX6mYJiqHUkjL9VPu",
  "key40": "3ZKSoaaBTqhWhmV3J2zGZZ4qNczAXu7z6Jr7kaU8gYPWDMKjfD75dMvrPpASswBG4gpvw2VdTGgCTjDQTwBZQfCK",
  "key41": "3NP8NzozBBneQ1XtLzKdfQVUkUKCdN89AoUSfrvFvoZiCSL8BgADk1J4dVvttrXgFDGoYKbQQGK8K2TLcXgEkq16",
  "key42": "81yEsfvaR35fTyj1mWoS7dQwgx9NNpVyXEmfsq8gtHq5VSzKX1UszXghrcKHvhWaFT8omEZc2rXGJ8qYbdahuq9"
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
