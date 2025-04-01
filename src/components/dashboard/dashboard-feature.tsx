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
    "39YvmpqmpPMnFdtjw4uiptDPCBh8GUXezGAwhqAwjg64n3PiSvJJmNDYuZefGnC97YAPyUesCYkaQJNmksCA6LwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZydK1K3XRfmkVcbRGK3YDPFL4RDDfQzipfZnkcswMBBVzsxDahzp3TiWCbrqg7RFYwxwFC9MYVBbAuNAZ15shHe",
  "key1": "5kui4RHfZcho1FhjHDnp2Pa88jyC6QEuPhsfTsUGDTtPxLLo1o1hgT7REDfwgt5EZjuMBS5463Tpa6kqKCLtWBK7",
  "key2": "3DGBSnH8mX6Mw4QhUib9ZJ8d1hUsXosHPV8kN7QChCJVFnAZEVYWaFvCYfAGbCBfcSDhCgvd12pm26evxHYH2ZbU",
  "key3": "fUifpwr5To6bG6RkAxhm6GLgqSam24YKJavzWa6BjB9o2Fz9GWDycPVzGH9tuXsvvbn9B4TZvCkojwUzdr1FAfi",
  "key4": "3CDSiNWfonFiXX57dyfvmLkSRCUBi1GfL8gmAtxLJBKJ12UJKKYRpxDa5vn3PgUSkazMsPKXuch6rLaG3HeZ73Yd",
  "key5": "UUK3YAojgUry3yMdSDLrbB9z1aTh4TGW89H1hmxHfFtbu4qJrjWuTprSYRY4W8n5csU4N2qqtRRkiNxEFHiSAkX",
  "key6": "5wKs9xNfN9U4xfjtUMNSqPFKrnS6fgXyM1ujqXk5ysM1RHcUs7fN4xezZfeGna9JgGyGrX6b3qGm9ojMKEU8WyaZ",
  "key7": "4bPUd922A4kuvvLN3rJLWu2DdABxxkibdeLegSfrFGJiXQYvqASFkdhmFgcDG6LsnoHvFoPnd1FeVFv4Vfaj9XNe",
  "key8": "5jGE55zZTVDELEErim8EDy1DRAL1YpEwfJUV7bCom51w3t1jto7HxJGhMdJKh2mAgvc1QwDNfKykjCsuk4DNfPvw",
  "key9": "5TzKoSMKn96EobCMFxh5223QCaAAvgM6LXjHZeePVS4zLuFPhSRqibU2jkwLR2K81qYVpJN8Ke3Nh34uxwbhbctn",
  "key10": "3dpHjDdMV8g1ta7PwPb9wZffoDVC7kq53ZxXkWoW9z7qFtgQj2AVWKnf8KjWauM4uUbMoKMbmWuniiXDwgADjME",
  "key11": "4wgvPhFHPJsgbgzwyM7FHVi2sgW4HvTBspRR1iNmPCMbF8Y93L7ntPASKCXrAaQMwJ8n7KmPRn2BZ6hnji1SughA",
  "key12": "3uxxWjEZsPSpiVsbs1hB4W4ss4dLx53777vbHHkyUNbQk7X9FJyPedV87WXHZpivKbnjs59Epp9q3DzDvsn7gQUH",
  "key13": "3mpzPGddJTo8EHf9EwkkFixnwNPer2JJmSXLdHReUqUuzjuG2cAxKa1bKburpjQorJ42Dv2PDKyei4baiXMo5UEo",
  "key14": "5GaS69mLTJ65ksXQPa5UmqvQg13mxrTLUqyVGM99bg5AF2WQCyyaKpo8QMMHByXQ7RCGiY77J7PsCg5JMzUL4bUg",
  "key15": "4MbiBQ7tKEg4ngCdpXBWaf342viGy9dS42UpEgKjDxsNuAJigYuxXyPpgbPWYHpozs9j3wCiAFJNxjkurG5CxMKc",
  "key16": "3Zqj5UpDjbBss6c1mRtxYVMBAytGUeo5gsL3idZP1r33YvYnb1gXEZmMZ43wjkTRwrwG87qsdZArQpc5GrX2LFES",
  "key17": "4k6DFbGjiBhdwKwrBjkmf3DznT2gCoJaBx3hoEDxoTX9cbWMCaNKimJoA2ZFoLq9BbsgJ3RaazFs68MqJx1bhXDe",
  "key18": "36LC7CiWvramx5pK6KanRRsdkFjEqVBdMkDtBK6bm4ndJghsDXpvuGfyXVZD8j9tZ929MgNrA2a5wsS6Yft5hJHn",
  "key19": "4VSAyMD3PmXEgmcnC1S981ve3dZCyQqC8rq1vvMUkBuASFroiCfL3ufv8qoLeBJXSnFqPx43ujhtTxwPLXZsUHfp",
  "key20": "zZWaQ4tYXP1L2hE3UmbndXVSWeaaHWZDVaWEeFxc8u3XrQptw3P22ZceCn7eL4mTdUXtgQSsMEvRufuJoBZXqqN",
  "key21": "4vb52TATS3pfX5CempyQw8zELmjTSmeyFRm1jAcp8cijBDfd1Jx8Kbgmv4nMMAJdbCt8vMx6UggS61GnxPE7yoFc",
  "key22": "bvXuXdcuEpsiZgfgYCPedh5N8bWZf6JTwsi51zTAv39z1HZLVDYKqGAbSEWAUfqULa4nEcRbAAf3VgYUVMw8UUc",
  "key23": "49zr7PoV1XwFLmtTrQUWe2hepDHqSgSrYS92jvRvbo8Axrv1HSsiD1teoeVYA2tNAXeCF2vxRVevveTt4Tb8EPvD",
  "key24": "44Wc3nAkc52ehgx99gpCLUrLkBqkqDcvmzm1xXcdmJTNX7Edc2i3fxnLRTpB3mdcTBogbSVJDukrpSsJsk6ZtZ4M",
  "key25": "S5d6VWcgUkjAGxU3pmgH2KJMBnATAxinshM6PWY4oQp34dj9PMGawSbXNLU14woN7JEQVXf7MunSMW3nHANeiF1",
  "key26": "paxXS9UkNmdaL7XNRnVqKqiff3RDFK1QoUr92FhCVCVW8xoCkr1ZURVfaUb8qJyvFtdoVoJNhPjVMahMCd7GBCz",
  "key27": "212j1PuZ3AeSebxMjK3q77fUpsSFnTJKjXajYBK2PFfJF7a5cWutDhUtLiJR7uio83ATQDkqhbZY5WvgEs9D92hd",
  "key28": "362T2JUQYWavbT64n9dMCVnYJ9vDKXWXvwWsoyoadL9CMswFkscTGhjYYnzA9J17fzdjX5XsDZg63G3QDL6DQbtt",
  "key29": "2dNT6XjQuqfiZ1q9AFmwkxryC3dJix5HrnqRPerRJekoqyGj3t6JkDs35J6JHqvUMoCBbyBMtMocwfpMvdThuSBu",
  "key30": "2qDCpCUZBnhavKFTERDx65GbEkFnDRSgvaZPS5JJUnXKuaHHBWWHBp46XMeXmxM1BbrtGK2ALF2pJH6mAcXA53fw",
  "key31": "4t3sXGeKwEi9p1BAa75UCAy7DZyZtrUxeMXDAXLqoyyTWQRthMCt6HariVFFgMvuRdgFq3gy3D3ZkosuFwMftwwK",
  "key32": "38PPBwFgNo4NshBAzidJt3cpTXyRT45rKsvms2fLeseyEKUwF3HvnQeagyvFsZXAntG5SsdQ8JAP4yxP2Cm43cLB",
  "key33": "2XQWCbiDKsuoWqGaAYwbrWVBbzkXFQPfeWQAtNZR9UULgiuoTTtg9UESxTjHDwHVRK76Rcd5U6HJyVjx2BBB7pkp",
  "key34": "369KSiMm5JSKHCBBqH28d9xydyfaXKZ14tvZeK5yH3xw4cJfy5SrKMvk6FbNb9yDF6s2pjiu1rqzhRSvbCSJ8J7K",
  "key35": "3m84jLqpdEHMzSR9hGWV3BeGjgz7cCmdJRt47rWEj1jK3eDrBiSqKKhnYbczi5yahSZpZLwF1QZKup5k5pMVvrG9",
  "key36": "2uHyJvj2kgCueJWbQB4aJr1YCYVhf7Rc3KEfATQtzZCTEDEWdqPy3nBFZiqgosYzn98hkkLrAM7DKHtg1kFmSQ4j",
  "key37": "4oEyFx978YXbyd8EqZTvfcvueCfTXwWDz2qaNw2BAb4hiTnjcR642uvNMkDiimzacf99tKAWY7khpq1TR11AswPg",
  "key38": "8aJNk3aAdgbBDPXDNmdKKaQKgDLmoJtFVMKch3xQmcHtyTMKVDHEWDk6WXF1iNy6mTkSFNq7rmEsbPxp4n7tScg",
  "key39": "4tE1Qg7CxvqWTut7g6g1GxU1AM9kgo4ND9VPi6JtcgtTC7VGdoYCofpYjQRAzfwrxoXCkExwN1YKJpNhHmo4v5Xo",
  "key40": "2G4fdCaSjWcZmPD3EFGUiitoXN34im5immR4ERCz2ejTUCukiVxc3aQWkAkVhfPxxsfHguSJuCstKYcKw9SQ5XMX",
  "key41": "gAxTfhRe8Lp1bzyeAJwSeTYr3xWthczgcDHeMg7r1CqPcsx9HvYxLegaiDexKpPGfuWZRRTC1JhN14hNy3jc43i",
  "key42": "5uDA7VXrbfEBbp63bZGtrk8wWVBywd95K3vHsmC3AMRWLpeZoDjSSVCPEpNeurohHbVLWModyTughK1BpyoosKst",
  "key43": "VKAbrRPpaHEHp1VYyuY5XWvBpGnG9MXBtkoi5A9taXqusTWKWN34NT7gTPkwMBRWDc4uHrWQ3gJtvrosgAPedo7",
  "key44": "4HmxBiduTnZzzSsWKmmPuHPLQXiQZjFZQ62N111YSnP88fq3WRp2LKkcLv9sxEhFKA2Whyj5aWoxf5xtpenuZL35",
  "key45": "4beTcxiogGJ19G196Nks9k6GXsQ8UFre1MQc9NGKNJ2TAeEHzpJ1kubaWyKzuzco4zSVuwEZrvW4jc6ZrH6sY481",
  "key46": "2NAgcYj37tmVXkcZdsHaHoV1PTM5vqg37vL3CgfS5pH7gVfA6QwV32dvYpf8rbhb2nJ7TabzoRkGWcDW5WXLQkDv",
  "key47": "3rJ5mcxdU7ZmM3Vm6Ys7zai4Bki7Aa39Pq817ScvSu7EdWhhbNUQsZHrZnEXqqhFAc6ZdAysN5KMfSrTxidjURuS",
  "key48": "3rwJTL1NqyJ749RxLhdLbMxjqVKQJNwpoFTUHjvTKF4j5b2ez6PPdFfhADgCfuGt2cnj7H1PBUFPKMMgL6s73vZk",
  "key49": "2wHz1d2QETrdvhEivHriwfpXggXV8arEmEey8ctqDs4QCem4HK4Hb159wjZceTQMYjPMbd7nyDZNbnvsyvKoobKW"
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
