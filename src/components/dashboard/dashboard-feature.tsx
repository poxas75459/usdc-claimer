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
    "2c11i52tifjCHMDTocfqgA2t3Ti76inKVKbaS4CXGxMTECxBRwCS9KxNZaYg6U8MPJkZRDB57TAjKRnGnVyRq9HC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uMyW3sJtMHHsMiBn1KPsL8ZeNyPPC4BbV88qq1rgiPCWXXGPFAFHfBcV5w4grP3X6h9rF4nRbSy874vEPddBhbC",
  "key1": "2sddTeYyad9Fwe4Fz8ngCQXtdDvofSim8JpVWJmgqERvVoahvefDd9PEuxPbGSd6EHet95cbfHUjH6kRc8w5gT83",
  "key2": "8Z9CcHR55NxqRtAZTxKShmrbbGyffy4dEacSskE97Ldyry6ge8LxpAv2u4WKays7EPJbhxKVagBaeFmmkCLkfkF",
  "key3": "3dGRz34dj64WUniNsFkjGWytSsaqGm3F3K9hRZ6vSt9aBQMBE2RjX2xvrBpBg9WmA9gm7CYpNb5LbDvPTSwPQ6Ur",
  "key4": "2L6dYTXfGj716mgz9yhBXUqV6YrMPJcJAYsRoV8zjWRuvffkLiFFWTx894ANhih9S4Gw2Hjwhs28zdc3LH594QF6",
  "key5": "2reazhprr87ktf5PnbEPqiHz4twWz8CwF7gCQtVayMtVNB1DXzjh7zPtPHXJxi4ei7ECdgAqVRbZjZ8E3fYEcoJC",
  "key6": "5NwJZYsPygYpAzP6dh9ZdYuDbCyViKKvxmsUV5HctiBwvkaKzxaR7TQDJKiMkU2dudzKn8UdfYWBqbbpEUgcsvPC",
  "key7": "32e7wPvfmcybnLZs7JB1q9kYPb2WjUBMWJxr4sQVYHyMR4o5hWdoMfSKj6Vqq9sRwpa3ZRz5vqGqu9ui1ThWjTof",
  "key8": "5xk71acNp9kAZwmZH5Dgjz5jQ8CZuW8xTbN11AMgZhQba3mnHqNN2LB5UKrXHdubwBfBvn6HzBCNtwDycJMoyKPs",
  "key9": "K7jmU3M9w7v3HcN7Zv9TLYDvGndWX8HuWDy26YhkXSbV6p8bt5fBjfftBG5sJiAk4uTZKsfyqHmecXiTNWMq8FD",
  "key10": "5F3LAqnyqtTiyND5hh4rU5RT7BJgw28sG7Qhp6JSwvbhNy8SQXHESRJ6CDw2YNbJg9oUtkvw2EnVtp9wNvYckDxV",
  "key11": "59fDfsWmrxXacQXSNf6KzuKrtEsaqsLytjfnrz21LUeg9m25tEAgVkTG9sMAV7sHENKuneqWEyJSsDk2KyaePMdT",
  "key12": "7mK3XJVSYgSXJb8u2DtQt9nUSuv1ECCeb3vSWQNF3YR6A68mzWMKtkKgYZPyzFKpVuJ3nsxgtcqY2RuLZphGZ2q",
  "key13": "4vyKWY5C6gRMLuZT9jgtqrKxqF5oUijMZcafYSionvJmGiP65pPy4CXJncpABAYTdKn5AiFrTkdcZY7eVSGF1g1Y",
  "key14": "4g1VhCpugSqPhVzZu1Gmt6hXiaATuzNjdPk7K6XzpSWZvHemZx97ByfNqQSnpDnKd4dynvmGhR7KfaHqNL76dFGg",
  "key15": "5hUsT5JFMzpydGNuhspikDxmbDLKnZBcsFnzBnCatqtkdvjbYevdznc1wcqAYV217xLETXeKfzBUpHszUSrczYeY",
  "key16": "3otJ6d4UgxcTcwdrg2CgUa3Fqn8bn5C7L9rMhNY75YtQuqTtUQdYSQjRP8QorBn8boWsrcicUzXvJGrQLdR7rXzS",
  "key17": "2XPWsEyamY61mDm2PhM3cFUduxZHMdmYGoiNEEKuioqRKgnxgJp6uTufqxtxLPZo7HqHoMbyjBd5JZGYHwULPwXV",
  "key18": "3BuqZZ926iuyHHcg9qecLgtEvyDpPuF2bYHPo335K6iJaMro8VAQuogdi3qGpqznNh77X3Ey2v5MsDDKCZs1S4Ao",
  "key19": "4Piov66bnkQt58DYCD5ZzNFCmQJKbRnJb9dFv44igq455FrFjA6hUuJcJtuED1ZUbrYoogUjdcsgkuUJPACgyDTs",
  "key20": "2SzsewwuUGiJMgwT63ssf4hp4MCWW7mYHdbAmQQ7wiYiXneimPd8ubXEZ5KQzTv388vEHNGHeeb5QokJvKDNwB7h",
  "key21": "5GfAAEKzvdojiK2bDgLsg25X3Le4XZ4VLJ4G4LANW8MF35eQhqtbfJfW9Tk7TLTeCeKt1X4rFfxBnL62oL3GhXxC",
  "key22": "eM7bgZG9tU68tLzR7eRdYiWQJVdvWz8785vfmTZmZJYQB7LQNE5RV7Fb2q9LLMMbYHJEgbGRTBnCdWHG1jYGTc7",
  "key23": "5rqvdo4VYk72L7PrqdyCpL5imj6gti4mSXR3HU2AEUrFYXfvkSHednNCGT7xytHjfDF6bvnGEqxE29Ecd1pEtFkw",
  "key24": "4mcY8GWaTBZqzvpsSbxvdDgiisjhRYQjqre83QpisFDvD6dkpF6JV96E8NtDnUfdNBJ5uaSsiYCBBmiQBoMKMGSM",
  "key25": "2GNaLjumZVykxTMXPM3zzG6BZNdKbtZdut53hKdrdPJvLTU2iw6eBH1z8VySTqM4XrQiBqDUBYBbTFcjCh2DPaos",
  "key26": "EJAgx8yph85sWWMDcGMKpGUKNTq3yE4GR9CgaBk8YYThvyRLwRkyhQrRgbJXPMeTVFihtApvRXqXFQXTYutGvFm",
  "key27": "24LWRUX7UJRHNXJ8vMfrBvTHWMp22yRJ3Qq3nrNye7jM4GGYv1hipodkBP47Hoh7Ws5QWNMPtwcN3TisSo9WgwqP",
  "key28": "3FZNxtPzCYpShzhXF58saNkr1wLt7U794U5wbLbWTEeMip3A9bSxGViqWWg5iV6Crh82EkMocNk8gc34dG5ikSfr",
  "key29": "YvHZstUCK5ASNib2bQ9gy4Q2VCPkVijSpLEpXmBa82JuBMuMEim1A1CZK9PBUn9PJBUshUmBRb6yQHRkQ5VFb4N",
  "key30": "5s74FE4PMkx8zZnPiFHNfWqLsQGiRXRWjEYtXtiCLFuzHzagkKESZtBeLQCc9om1FNxa3qPnLJRzyriNVjgeDD61",
  "key31": "PEyeueuUtptkVRk3QBCzzuDic8vhKf2jByWhheq4m45zLbvCKxz42ARavBs5He574u3bjE62PcHTkGUvEK7BwT7",
  "key32": "4E5TMaahuKfaTZFUh5u1N6Tqci6jqFJD8P4fKHSLcPyJfHPeXtBLwLp26L9MdZknMa9JUpJpBHd5fGoJNBXFZ5kt",
  "key33": "3BXvAN47q7b4pLqRjsZGVYLFuxQBS4sBQpXTqYKSndw8z4g5cDSfsiWoLainHpTRcFVs6FPQ6YwLzJfBot26ZqnM",
  "key34": "3XtUDReToCoEkbxeoPeNW1Gj4JYbcBXUzG7fGpF8FJZmaPW3pxHHGojNeFEYu3nWtTDbq8KNnGSkGAtxdF1AS8a3",
  "key35": "9WkR6DkGZYKYGUVFDchxn339PfwuJ1Aj1zV4fvvEBqDXo5RmNfEHVtyPqYHJBGLgj9NTSyxnEFhCve42zSMmvCw",
  "key36": "PoZmFQ1Aj5dTpgi6SHJGg1TBVFGAKSR7BeBmEpPHmUFAwExM3WjuG38eu7B7TqSEW4Z9r8SojfYJoYv6awhnYa4",
  "key37": "4a11BeyDUDjtnjNHU9RWqEzHiAJvSCKe6Rk3aWmRfTpoJMFoU2TzNwGN5NWKYHDSUGu958fsw8t5hPUQqSWSH14J",
  "key38": "7TFvDo9xSz1YyprJ866Qf3yfy7B8U1AUsrxEBVizwm6fcpWYuqBB8PMbPzCfPDrGxULNRicjcKXYVPxicYDR66j",
  "key39": "5DFqXqWJQdj6F2yko5Pht9d5TUmLwqS7tCPhyHFMpKjDeUamEdn3wm3HzErshjViZ5WRdVLSnavgvioXN5JKsoYg",
  "key40": "4krYEykWkveXo56bwvHtUM2Fi2hphAuFjKmnJiz2QWR75QuSMWGPmdtkARdgFpHhGhqcjouo6RjmQzWoS9zFJvp7",
  "key41": "33BYRpydDpYVJJM2QGKYGpq8BmT4uNA2c8m4vrxkqqueckq82bDzCxjfqz2EU13qRYEvsHffXbeY4FoH6z9PiaR1",
  "key42": "GwKmNYEKkZjCo2QCHX5zUMsvzxBjSZ8dV1aYgqb8S59BwCShrxN5VULyS9u1AtTeiwqAKEr9ar92XkHDn7v1zop",
  "key43": "4JAmbPWSwjvevTTsHudSYuPufxJNUZfG6gC7g3GHepqSEtGLzDQPD3iEHiax5HW9insNzVq9BMDYYYMazw9QKecA"
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
