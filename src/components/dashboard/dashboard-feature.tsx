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
    "22SJ1uXFPn28tLaHzHniU1dzpGFoqARhhynCNrwPtbSEyL6q1uaFZUS1YdYUNMmqiVH8ddS3o8dUxV9Uf9KHWa9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kHSQPSUENSXewaGdT5eXisj34wuyqniimm7V171SDZ3bmEakgxmJaLZZvRnBFDGTp1ha5oT73DXCSAbxqPNhqMh",
  "key1": "Dv6mVdv9ucGPDtpVfJ79wABYo5SwyT8T3t6yLDgTjxtYWFYzdbotXmjQKfDQXzbZKdPyDrZPAU8ZBR2FHv2esPK",
  "key2": "vSB5RHom43uv2MwBx5m3a8w3GCDbxcymdTEX2QowyvEDpC8Fq42yRApyogrMMb57dwfTrGSXqRezkiR81z3QrdF",
  "key3": "218JdH6XMg9T6Kkiek1QxvnstpKNqyrQK2eAzEYXstZabJfgUj3yqyPAAnvSmtgQNhqFHuitnYG568VmkqLQg7bz",
  "key4": "3TSWD894wJntfBNK3SjavrnGWawss7pU7Tuiqf6UDVTsk3ZsSZE6Rye6ofmkmhBGUTP9iX7bxYxMy3mXQuCwZg78",
  "key5": "3dqQJYcUbmLg9FEMbKtgn7ntZoRgfTV6uXyEbf2XAsQoJcX5imsT2xuBDdYJHB8sscwNsWr1nMMHPy9CbmWbxbyt",
  "key6": "5mkh5KyMZYRc4FBNKskPbVJdXNiTJ37dyR6YWD3ZN3UNDgUf6PUqbjztUdYo1r8SWJYjLh3YGNnf5rh8ihM18EvU",
  "key7": "4Mmbt2LVJuTLqqimqQmh7wiiCTvNueWeqkAZQmia7JJL5e5rhEvq9Ezu3CktvtjAYydVJQWGe8A6ahxsooNoy87c",
  "key8": "DbFKrDoNRFrsmZvw7Er21hbMzdaWP72ujQVk4xPvCZtKJsWrr6fjesC1RZPnadofGi2RFCmuWpUY1iJjxNqSjMR",
  "key9": "2Pm8981fMCLceuNDcMCzCBpQf925jTHZQa13s1gPvpzdocwzqdwfSJ5j4F162FsHUXVv71XqJbkHhpsnkqnUvcAe",
  "key10": "4iTwPybrDn6a7S8vjT167bECDF5mGGnzdDxY42YT6V5pHeNyvUzycDwKnYHC3Vny1rSMYmX1R5SeRvge4x6f4aSi",
  "key11": "RrsgEfXEAdiZY5fHaydE4SB812mzG7jxMZEt9mCwvsRsjck2jCJFhdF6w7WqrQZ8dB9k152RzmsFbkP1JRgZeT9",
  "key12": "2UC61SpDHbZsHuRZa1tvFKCK4zV7fqFBdPNs2h8s6eVFLFSp8Qg95LJ37efFycw5LrDgDxB7fAnAYmFs5ggodkFm",
  "key13": "4FH74PSbSYnAt7pXmXE9ZVxuGGnVHsV3Az6Td4LhkjGi7RtDDA5WKVsk9umM361asQpD3RfYmaCZXGxDKRBNExMa",
  "key14": "5g7pyouNqm9o4NbScPQHgDfkL6p57u4UYvM1SijfTD7Pynbp6cnLivQs6aFuuKH7q5nfsphrEkAqXaogPh6Ntjha",
  "key15": "2q5rErV4XGwYVnazkSVWavd3kok4dCtoy1Tmpzr2W1zirn3z2XneuD5JFC6MxEM3CpQQ7TujEQTrM9n9ZVhB2kGn",
  "key16": "5ZL2swFMGTP46cQcKwBRmjCvigfb9wzykdz2NyPLoYgZCcsMwxqid218ASXx2Q5cmuZckUnaH667Wd6Y71jb85BS",
  "key17": "2VqR8t8kCEDtgqYrrB4srxTDdogxxVTkRtZbrGJMQgJPHEjW7gBCypppBu38cex9rYFfmiGWALZf7M43fuPky4PF",
  "key18": "kmu1EY9xekZoTnvYMKZUUbJAprtidkeoHLM3d4XyywEZDku5F2UmUVoHCqTpjPVSKCFgPZa1Ws1qbdgkBanRJA2",
  "key19": "E7aw8WEgH6XudKseTYzQJhFrCG1tCkQtQWPzKPBmyKKSTMBES1XuNv4ec4oY8iezXaJUPWJ8iLtdMx2hU11vVFh",
  "key20": "33y6T3LtFT2cTwRCpjrZWRzwYWx8mj5Gp24MsWDhRp1ufYaqYQYoUqrj52Ap7V13v9CmnkqCDmAhsbPentJLtwue",
  "key21": "2gcq23kTqYwV2iFFS8T2HRZfhrnGY1yMPyfPEgQknZuEsJyoVSchXoHL6Tyz2RhuZiey8U9K6CozMoarqeqC48vJ",
  "key22": "5TV27cnWrAt6rK7Ma9jDyZJzvfHWeR1Gmj55UPAnzYuPKsNu5a8jH48UGRY49nSCJMxzdWuswkU7rAuk4FMmR4ZR",
  "key23": "6LX2J4eEJJvfbTgsLu3esYZF2p5GwfRPvsidqt8zyZE4nUNKTNHf2DSp573dx6cCRpjqFhZ3htvCyTD4Y1VsNN3",
  "key24": "RmhEDwtzsqzHDHwg8EVAQf7uMHjrq4rxZ4c2gq4kiTpYX5ah7uVEqGHADxUosTcAYDt612URzGBCGPibYMDZYuR",
  "key25": "4AFnJeLa4PuzRV153UX9HQ1rWCnAcZs2uiUkcjVU46qHX8wCWVCjbqSssCGZYaKRFHRHfXCGQ3QtWVvX4kru2af5",
  "key26": "5vnETySMtLcMEcu9Aw7KsozAuZEuYxEw8DS7uVuTFZrj1j5TwZJQRAykn594EuyTbvC3BxAjLxetXkx4VeMLZt6Q",
  "key27": "3fHTSTegQ7GTJo3fKQzEuDhgLuWCmzD3awuBLhiHG3JLrZdnAxrrKMgpR1xoBSSTcfBUDyudcjsbUjwbmqFR4EWp",
  "key28": "3oBpaBJ1KfYeK4EPyk1JQ2atRWcwPgJXCL6MeYhhMqNZSHfu1PX2nTQLC8d3QnCikbufoXPvGv4qVkfXYcvJFZ4k",
  "key29": "3WKwfzhpzj7Hbf5uD4kLB5r9VdVrk2TFb4DSYAM2v8K7DWFCkwFDffA22G7GDr3vTJxHBzT9Vy8U1o2t1ApkAitL",
  "key30": "3qiiD6qevmGJgxzpFtc2yCWznGK7gr6VSryqmWcp6sCbfCayhDBjJwUxGXULsnFuXdUYxgT4EJB7BaAt3ZmEjfqb",
  "key31": "29qRufNSbUpP3LwJHhT38JWKESPJhqN96tiMXocnQFT5KV29k8uawVUpdnoUszVkAwAZAKy1MwwXh9Hsp3Csz1ML",
  "key32": "55EpMy1rSphXh83k2CZSEQC8ZpD1HS6wrPNQjb2dFmQcGnszodtEdGyJJUwBzpfxFYPoecqFLZzxnhCLji2A85Gp",
  "key33": "2nVzZXJ5vQSrUcgZM5XrdGBtxHFcLc8QtBA9MDvUCxEdPcR5cKDVKFjHsXpUqjC6WAhef36TGDacRBYMfpQ2n5Si",
  "key34": "5DsyZjJDvYUuc3Bangx8osdQtUbYJvsckWTGXPf4LJFnVMWwkXfVEqa2KNB7pwDeyGDw5x6afzm3L1cmowHnaveZ",
  "key35": "5P96gQsVrwn2zYZbnEZmZBuiYDzo31PVLR5LBu3ixZt88EJCWTDdUyG6aqDE4rrH9v6EzkqRynSsKTy5KjWNMbmc",
  "key36": "skAbgT58S3htLaYzeDwMT8odxFPVM43eXHpBovFg5zPXEg9CEKsCF8qdUTeViYks62SCRZ4ZAfsLN1VD8wy92ge",
  "key37": "5Qhnt2fEXuaUJjLX4fER1m4pvdfeJyZLni14jJMJJ56A8Jp3di24WqCbpUFm2TB2eictkvPm8oPTgX9ZqAjxXs2s",
  "key38": "4yACiHavZgDTZdZX47UX86e6keuCxFwWN7nWiGdpGWdtCwLcxxCptPfsUYGAXw8dbWa5izRvor8GPvK5jxhB2Am8",
  "key39": "589LZJGfVtmxjBmDs2zryhid9uga4MFGNk5mfM1hHDmZBXyQCu8ZTJNE4MBEprHozbGPkKXtpqnmZH8ADfipRMCH",
  "key40": "33dkNRKX77NeCJBv3cHLxzuF6oy6z2nVPcE4CJYdadJPyzgkzscsYqyMkYJNgrYhA8fthYBF1ZR4syZUbFoSf1Y6",
  "key41": "66jCUVXnCH2sUHRJn68rMxaHWok61X1QodMYgzScSg8AaknEvqcZi4xEzxrcLVcF8dEDPc4UFJFcvQBN84M4DQYo",
  "key42": "35KJAFVE86m4E14wV1Uk8PbBQYeEv4M1hAV7bNBQSScpfC3NF5qyHt4eh5BX8DNMgqSmSbq5RoNNEKFWAxb7qkvX",
  "key43": "4vAij1MnSuinp1MTievLgD3Hy89617bMjmKLx3wtS2TBHvuGASw2ZoGvn7yRcNHvizix46F9AyPZigVqqT9GPYg5",
  "key44": "YZ99nZBuPAPZHfS33XkKswvn6VmruKP42B79ebeYMhHJCbx4pdU3McjhX3XHrJF7LDUytfvVTKgCKAytbnz3gaP",
  "key45": "DKmE2FjtF3MHJd7rnHFLwePL4MtRXEYZ6UGNFXusbNYhCpqmABRhqSmL7AAKgPrAZZ6uhqQq11s7SXCzG5sxdC6",
  "key46": "4E6tCzTn4Ad2EZu4zSssGCNKRBWc2xpemwvo2XGsmTuCozBGWyzTaDKhq9rVV4DgQFyXcGRq3SA1B1JqquBG9UGF",
  "key47": "4C7im4KUXbE6h2KTFxp6tQm9spwPRbXg3Rfi5sg22wSTqLqgYdXbAWbgZiHqFEPKozmM6YD384mAkZAfJAaVPFSm"
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
