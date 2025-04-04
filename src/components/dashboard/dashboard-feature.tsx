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
    "2nMP6saXPCU9ymgA7AJuNc9HDmJ9FDKVFfNoWw1LZXyyFf7ZoPbmCVAAH79EPo3gB61yWH8ropf6oVyaHk833nbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QDDjWwrpYLReDMYgVAYmpK7jRa19YWffFHaviBkDrTxkFgfxErNs6dkXPabTNTxXVxfe7ope8qMYgku39SYN4a8",
  "key1": "3uJwgh3QkxQ5QiTcswPAVL3ybPkzDNEz9ZztBPzSpEQAdveGqXa2ZkKJcQp2UU8qiq6tGvKZLmwsrc9FSBM3U5sg",
  "key2": "uA6vg3fRkDFenvotzyLbz2yjGAQ96y6JS3DsQe2X1VCMEkbwHdFrvLSZRskqkMRUzw5kdD9owtVUUwihFhgrQc8",
  "key3": "4VpQpeRquharWcA8XDoup2uHZusHavMXmXtkW9nT6cADpEKFPYosTEGSyMy4biLBG4eKATEXpq9uGT2CiTcL1yze",
  "key4": "61RUo9y2rVG7mvp98arwb9pmqSYfdcLh9QKPdx9HZej8BwihsJMhcB5AkVXrhjesayXLy55f3tC7RMeqFgHYECQc",
  "key5": "2RiWBTHNAYTKdgYCKK5xKAMcJSd1zdp9oPYfQKM5CciSp4jNgQKhJ3NaynN4c28VHD9LCHMF43WZUXTUAo1wfjWx",
  "key6": "23SMMhDsSaJMCGLseJRQwxrmbJsSaaCcg1rkz1L5h89JTwVXCJL9rH8DwXbgxvw9P1PeFXvX2ELJQuvGX17FLZyg",
  "key7": "2p6bRMSGQQRFQAUEqi9K4aRiw6QwC8KaTK1vfzviu6XJWf91fNRKnSsnjYWM1bcR49vYrscAzQ15YEsmUETg5tBE",
  "key8": "25LHRHtSCYb6wm4gMDQ7Mj3uy2r4LfN2kJDVoQuGrzyx24yaJHanMzaHXvVLjeF9hjPo7Z9EWUBVAFUjkcikn8dH",
  "key9": "h3m1HeCw5zVER1w4EyyN29SChhHBrBVo1pGbtv94kR7iPhwjJ1dPXiLSYdQHQT9L1LTaSJtRrnaiA3q75x2FXqe",
  "key10": "21cfbrsWZU6SwEdVoQE763PVnfyQ7fYMMZakToP4Kz37PPi7WEiSW47GpZz5TzGUe5EC21YM4ANFdBVUKDFdp3ja",
  "key11": "3vAyHHTh37oiyEe2HeUEwJX7zW2h76rSv8x274SK3dnnLHqhsfntkjBHPhr8fJ91NXmS8JbuvfNu7MDXQWrrv6Nd",
  "key12": "3fapLiLMVsZA48sUQGcwCnWcMHpKekZa81cBCSj2BrHaXtndoWzUCX4HazdWX1KofvpotKYEdP1aBD1hQKg2AfTA",
  "key13": "2rn1zMudJsm93UkkMU89z3d2ysXPTMToPNTjNmdK6yyWQ69Bhuut3WTRiwWbjXS7qj2PTTBNBDmRUu2G5pyHA4in",
  "key14": "BpHNAQSs875h3fs9XvaLf8BsukGd8VLoQFZnVTEC6XgnAHZsWvPtCMqaT6omngDFLr7MJ3iueYNCUpJUvDumaqd",
  "key15": "54ND4Y8gQvx9KJ1HFcR7eheBa53Z19hJgiACFuxwTiX6JDEochKuaLfFNYYeumJELN5DqLh6bPTGMYK4RAKoJc3K",
  "key16": "2QTiQS8HrN7uTtYXeZ7eCQbXMW5zkWHWUgNYEpYU1Ys2BUpWfZQTwYgrQTuJx8AN5BqyrU5esHG8ATUG4rXoSd14",
  "key17": "4WmYQZdK1VAJ1ooaf9wWVGCk4qekh1wzQjsbU96ndYmPfB6d3RvAfHVd4gjZb42YM7A79hJ6LeH5WCNZDraZbNrD",
  "key18": "3DhJPbhFRQbkzCicmSqLuCD6TLGZXh1F93FosACw6JL4c5v22s2qJZeK8xoNjWbzzVasXJs8GKXYd2ZzZiwkcoEH",
  "key19": "2ESCfLWJQ7RDwT85KCtyic7dGYbptYKuhb3zYW6L3ub4B5ubzwuzN2t3qhMAmHVcLpHpc8ukNzkTbahd6vbfnLQj",
  "key20": "3KgF5hjx1nJrLb5UnGgyiZjfPs5ppVwenyHnQGtaBWoWFrCKc2WmnakLYZcMt74gGw4ZhFYxT2sRyf5xiYA5Tp4M",
  "key21": "3FKm1mrH1vhpz6jxKsfa624wmZoMAPV4Q1oKUoyKbzxdTq9gvAEfGeekHTmSQViKCcU8K9hsczvwPBYAt3hjQ8vm",
  "key22": "33jCUokY7DaZgCifp4QUeT6Q9i6C72AvbnciLptPVAu4pvnmQDmqUePcqeAAXVpNc8AcnzkwZMduq38MKHFxtPYk",
  "key23": "665FR5zdQNJoGdnSa4DkQ1iyXPrzbSYT8EZFMWGbBZnAzwy44XKq4faA7chVGxMjBM94xfcsoauWh44Lz8tTs5ST",
  "key24": "41Fpp5wLFEMnSmvVdg3av5GsUZZUBsoYLvPCwts8GMMeUfrjREMAoS6Ek8mcXcFA8LTqLujtE7jneBQMVWV75C4h",
  "key25": "2s9kfmQjXf6seh52grHhoBj4h6N11Ag5N128G1AJZv9iTf7xPteRDUQxCnn6s5MBo8edvvHEFBfob8QhLF5aLs1g",
  "key26": "2CtkWzsadZgLSNiNBYneds4aLsg7HCztHJ8BuxAc7Xa9LDmY42NbmoBm6oafLSJMehSH5pSHMHKByAbcgkgnQxpQ",
  "key27": "whZ83iMCmwjGrWzsqcuBzkYPQdcjinXGpfZksHUupohbnHJ8Yw6GLCyCuvANtW6nfDrzVxfQm62BB45YHxCChjJ",
  "key28": "5UB5xJwyGRUdnwnrBR8UbqQP1pfYUp4of1sUHrarR4k54wgCFCu3kKP9rTAjhQHbJ1hxBZa9fnnsnKqZdVyBpt3s",
  "key29": "3XCTesSVJkqF4ov7GjtS9wYv5SsAC6E6xF1c53QgcYpLxHpcg8LzgohxHqksrsQb41LmKH6idufJS2ViZQoai6Ty",
  "key30": "WxLSMv1HVHUJwyK6Gt6EnnnvsbdqdXxYfe34ALdTBrYAs9B21y6bybgazswci1t7Yd1SFYTvbcvA7MyCYfGiJ4Q",
  "key31": "3Z88sB4nRHVuwCvyuduyhKcDsbdk4JXevvN7j2sgNRVfvCn6r5mzAx7MZkaCtKTUJeVZ8wy7815weRzjzKYyKYw5",
  "key32": "3QTMTxmwKcKSpg5mDj1WSVPvCqaS1xQRkjokUM9XBrEoMEFnKNnzHskfBgyCoJ43Kq9W2JxzzqhC3fPn32Dxp8t7",
  "key33": "ij5dm9wt3A24CVWmhkg1Q5tEaXX7MfXn9CBqENep5ViRmob27Vp5oTSfMvb4JnUM6UnSdsv8tGt4MXdffQvma1W",
  "key34": "2m1bRAqwVfPJETPw3eLBuCX8jej3Gtz7UfNcENigkmx9PV4cNC5Gy8gQ1xb4Dafh5C8nWFGWjv8oTPynSmXG3Aqd",
  "key35": "21i3vAKyNwFQfYmnpzsJFciuVRk3hM7o47psv7iE94df8BNn2NkqMQxTjtu1tMpFzz735KzkA3nx1rG71MrR3sH5",
  "key36": "3vQiUmhEgPHA8qjh5oGgcuEHRtaXvQEi1PuH8WyJ793Mtz14MZEMX3p471qqC13VFtVxP9bBcNoeQHW3DcmJnKHV",
  "key37": "4kNrfMKh58Kqx79F7JRJ1BGQQTC4sXZKZQqUx3xT9DptxxGfRypUjDuHSH3cLnA23ZhzJPykAKkN6tqYUM5GCuQd",
  "key38": "4GPs2H6ZKbUFxJs9MoK3v1ftYRc7d3rMVFkkYb34ZeJYcBULfZfDkNPBnL26YGwcUKBrjJ2FDoLQegsm9N6xQUQo",
  "key39": "45BEVbtA5WcYAR69Vn5W3uFycPBsd9n9ieQz4nk36sYYkDLtrCkau9bNmuyDFpDycQnDGX4qXnRsb1nFVRQFqJSe",
  "key40": "5hppMGruQDR2UX3dbb9dNQzGzMuCEYtdHHmTnZzu7a4Bj7VjXDZsDKAeAhoQzPpwaha9BEuJMw6MjFSfPzJV38Me",
  "key41": "5J7S4u16W7TNG7t38RHudzRK5PgrLyAXY2Y8r8xe8AyzPBmhUq5tta2qZWRwiyA23GGjYex7TBSCA2Nfvf6ZTfaR",
  "key42": "3DkAamrsqbHyqfDyaAWkaNQm2bBntMewdPDwWk53r8x1nwBEyrQkZajDiXCHqePnVxRpaxQZvkjHtRJNhMKkhJhB",
  "key43": "3rufpnX1B8cbNmuq7wm4AhEm4Gfdv8bshVNosXSLwMKFKkTK3ouA8VG5mQn7hTUm7Fqcd2o8wnCx6FHPn3iYLmud",
  "key44": "2EMtzfYfQrdkdKd7xJx73d5HA9zuz2w2bPzHmvJjdSVXoavgqGmMJN37EpSarMHPv5gEukUbdAt2XGpNtTmibGn3",
  "key45": "4mnYL4jerktF7tsyn9Yjb1q2JYS4qGzjD66WdRiQzue3a5q9HZD76c3DYp3ha4EpuKsYK3Zv2c1QHBTaPwVtUUTx",
  "key46": "5ugAz3s2hwzyCvNnUbsNFJ3P6mBLH41991qk3x92JknS5qFb4UJukbDU3X6KsLNausE3HyhgP8sjjyy455xS1xd7",
  "key47": "2rpPZA21gMGhRMAJSQnYuSR8ZasQHPp7MCDe6Zr3b3nkuK845rhhJDwuHM47Z3YhbjB1WcnqMry9EjhPzB2EA21s"
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
