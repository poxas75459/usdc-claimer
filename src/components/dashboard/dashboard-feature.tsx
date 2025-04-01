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
    "3eZDW1UZ6hAuLDtL6jD772GCbXFfGJJhQcRt11rtRjUHBzNfeg7MeF8x4TDsKMSQCCKfSc65WkhUahsYvH8EQAiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22WHAHR34YaKq9PbwYoLAn2oBE3JkSkCacYMDne7z7YZkWH6UGsQBR6xG812PT7Vd21KtqC3Lqotf8Av2xYpwuR1",
  "key1": "46912vmmJ7GeSUz3fTGe3n5bSp6tsq5rzuVwfAVQyGccyEh9sScdSaYXPxKLf5JvtCrk5Cn5tTjqSfeso9FEjwcH",
  "key2": "4rvpCFXHHoyKUUGThuD2yUZq3xa2qb6SR2qHYGtq4rqnVVLtWDyteBBEGKb9bgBzhW2ko4eP4QKx3A3Uu2jnDdyD",
  "key3": "3G7zFe8thCXzaurY8PCKUGPWPFJErNtWSmy28arft42Ru6pdpkW727Ms7SNFAaWmvHB4H5CEUjpDmwdCkSQzhX1Y",
  "key4": "2e1Tp3keYCwNjKVVGP4ZBdwdJb9NGmnbTuotZmew1NzZZuyn4wjZQeEzc9J2pSZdxr8csPumNBAyKSVXZ8ASkXSp",
  "key5": "21GzA2Nds8o1GA6FxH6x7jikgMjbNGGMe3PpuWfFCXUhLGGDD25HetFhiUYjV9wFprCKo2xCxFnzRsn35sjhob6m",
  "key6": "2n6AEqs2U4fr9z8Hv8WAYsx8ckQ1iZ5LpJGxnwjxaG8Mp5v5kLRSzFAaED1fiuYNaCHUc6vtUFr8nonukHda4BX4",
  "key7": "32bzAp2FAX5cbrtiEmdSU9n5vhVahUA28eDGJG3iw86PTiAYR8RK3dgszyYxQapYGBgfuGZENoM31tuwZ2oZu7Qy",
  "key8": "4eHjuDxNpo5cQJ3oEtvNyyGsuVwiXH4Yk94jqxvtzd4rjUSSmfGKtuAzetLFLFtss6eMQMy71HG8bYurmWi5hk3P",
  "key9": "3YeGWHFSLjFGqCqTjo1Jm31XEkzybXCd7Ax5x6PvZWCpU8PXid7SqH8ufeDxgVPf6PxdwCfhBVfzf6oEMKyBr8C9",
  "key10": "7t2EW1SXPpVXJDwNNKZRPcNoLxth51AHnZHUVghnrPikFKV1TWnXoBtnxxMSQrpmVQeKkFqfBLXM1UwpEfWkZsM",
  "key11": "2To9VSHVQfZ7fDZTm3Wo1TseybZ21TiyN2A5sT4m7TbobUJfVQcef19XYquoH2vMmHbSrZn3psV1YaAkah3zGmLE",
  "key12": "3Zj7zJ4Tcr26LiJwtnb6ngAxbfCGqGEXup7NnHFuRi5si3J5pM12kNaFcwAULYnarL23nZcBD7DhkceNokbm5EE8",
  "key13": "3kQ1DJVPaYBK5tRXgEGh5PZWv7jWctTtDUfSDsuJEszX4dwbdGmVGvnY3Jv3vuz2T28rZHzTzLjG9NQJsmAsN4KX",
  "key14": "4MDsoQusq3ybnid2RvL9pcqupjEK1sYGtRehwgvwHhPVRDemJ3fpWpNDWLDYkDAqyUKjdDs1v4AAuVAhRh1f7aWi",
  "key15": "3xycs4nW3hEQxKQwY31jH7veH7YAnEUW5gm1yVVnjaWeodDGfJRB4Ag8oW28ejih81sMxeftdyDy26t8t2oPAm2M",
  "key16": "3w6BumJgNthDPyjjWkWSAzGQ9jU2eTwtWy2np2Q7tghvZHeFNpPLH5zTnksjuJgCHidGxMMaQvXNVhD5DPtQmAR",
  "key17": "3n1xjYCMkiyUFkxJMrJiKvnaf88B8YFEsajXsXVPb5PcehVG5pFGLzaRA95Lx1D8RhEEGD6uVEtMc6Rgt1f53UNf",
  "key18": "7HPaXphwLWZkZJTi53ZSdtmXuAPsoyoeFVWGaza8mQT7CtVYZ6cSCA8btBQkYGEmNwuerEDqGvLdBfseHc1hSCY",
  "key19": "3UYW2iJmn3Z5mkFY1F2vu1UcjXcFAt56aouZ58j3DjvKubqJ4S8vbHgCRvMweEUDKv2uRQhfaPLerEgBEofa2koJ",
  "key20": "4uKY198qC8heoA8AsjPGYqe7dcGRsWJA6aXrn7YUQrQoyCkoHSBEUv8bsLUwUqPPbrADeSNGpJzFycP6B5qfdS3U",
  "key21": "4MPWvvzBjN3BcNTpvoFNyUdJZA1WC5fDxDckLofDvYy3Nn4kDpFSs8h1K12scbwV5wYgQCfEZp8ejuyfV7guRz4t",
  "key22": "4cqfDxGpMvyTUtdCmxmzJGooeeqnwxpmW4GQ7PATu1vKaLTMKJtZxdBQoXE7YFo2NDLKZLhiCHV2ddNKuLKATCyG",
  "key23": "2uPbQq2thiWNsQAeqnSMG17v1MB6nCmP9iVKDYzzZW2dXLY3yhw8nqaMjGcNaw9tEYY5hf6cW7nF5dNDCCzvzJFp",
  "key24": "2TWmy2KLSR5VY4LYTvVk1q1TEdZYSAxsFFqjA1NmmPkY7uVZazXRMSETE7VsSzroM5HszU7SjbC2XkuzjGT9tWNu",
  "key25": "4KEiEA7gCFXdJBL3eocYx32LiRSeRSwzp63kK1oJFKfu3inP3Hs2PbmCgmxzWDSPRxPLNUnEP9pQyBuEDx6oxAWZ",
  "key26": "22WC1xoNakZGK5jduGuon5TicNR9kEtZwtT6BaYoSmq1xuB36Y8DFPKk8B4vq44uT3N59x9WiJwKez1gshkNAhuD",
  "key27": "4n3mUa8UAAB5BX8tD8j35ybBtGQXpQpEy6nRrsARG4Nwa8nCaos3q8bCVNEucLJoeEPXbBzT1UXzGMPz7FKDQyyM",
  "key28": "42iYoCJGVGbGPtHN1fS3Lfpxz4gNtdQpV9eorWdLyPJ3WbXWaRtiFkzxutAgxpnRrciTrMajtqmyK1Di4tXpWWhz",
  "key29": "5RvMhZuHBptejm28LFvwqyXn5eo7yBpjtUZind5DxvQ4bh29AXnam1p2bTysuM7Afad8ZKjA8HHGdpcAw8jw8ypd",
  "key30": "2HrsDMqGhrUVs1v3AisUk4y59jaoj1GVrBKjfFo2RH1761yEfyJQu5FdXeBb9BbPfQKTdwaLorRt7QGFqnRTBWtr",
  "key31": "2LU1V5YevFuzjGerQkkjXFRXJqh6mQumUohD27P8SFSRUbjZ5CKxfWut1hidhoJBDyExD4qhrR714r4FAWXy5CGr",
  "key32": "5Xd6sxzZfQjVqVM2F5gBUmdb1Zj2xiq5qUTL7BvgzDrL93utAVdMS9qHAxU9y7Jv4notqUJF7tSN6K2x5fJpQDFJ",
  "key33": "2zxFpsvmKmz1R3g1qcVPxhMrWCtuAGXP7BmTpVuvFFL7W1m67orFPiJrrJsRqiUKaopupPiii2jEGVMWF32aRZdW",
  "key34": "47tptfrhnCHHBG3Nz7GTFcFLqLoFW7XV8AV8mQLCUM7BHrNRYCKDVSBpotsPVjediC8XrWhBkntfzRsNQsQJN5fo",
  "key35": "4mxZfEevQ4X4UiaKeVutCczNfCABoPk4yU35UVNVRDVBnBkCGwzKP28LnV8E2C4k4TbknPgQXB7yhJ2zdzczrcFc",
  "key36": "2nXEPuDqyVEiWBzFjJhTcKvQpN7uDbpacjbLtpUutG4f9VPwkG7QHArNPgYQcMnxpBEFwFSPen58sLvn5cJrny2i",
  "key37": "sasXhEw7FLoxmK1Vg3Z3yyhX1M7BQbUMUvRdNPsqQ92YGL2LirFuvFbg25KkBsPBg7mxGtKdUgQYg5De7QzAj8z",
  "key38": "3XW1bhcn4VubTZEpFJteFeih8zYBbPDFBpK3SobNpAohntPwnWJ3miUSyPit6ZE6t4BB38jNSZK4BgNwPs6rRhqY",
  "key39": "42HYLrEdhMBUoa4FEUVFMRYvjuo7g6iTFUM35zrU3WHDpwzfNBR4SrabLkpocBAyRCfimyBebYW4K6i9UgSjDLth",
  "key40": "24V6jihFkmAWhifntGuFsXoTZiJkjgZCou9U73raLRDFWapAJn3jPpctm5tem1aW1Z1A368ARyeMnWSumWHvTPbi",
  "key41": "5bPjd66iUdwcQP6DoGPpsLt1Lvd4dN4dDkisRHs7DhjnTM9ooYTgptz1wRDH7QM1nAx2Pi5aeSPS7ZNBHwXF63BH"
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
