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
    "55axhK7cXGvjqySAocVjErnPUHNsHBuUHi4qQc8kTTceCZ1b3eC4qsDSSFniSZPgEM39dX7AY8vxTmn7otLacpMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c3MBT5poao8k62xXXHw7xBoNBjaMCoHds3ZL6Eb8mECjkBVEASoWxTAjAZhwRVZ1EaTx97eirZpRwKD3GfJNjou",
  "key1": "63YtRENNMPdMp4kxTc4RGdX43SWHLvs4sPuAcp4MinyP6Jy2cDuDaKA8w8grivrXrZpqGxXkPbvXS4FBorJjzAax",
  "key2": "2pMNi5qJ2KNmNcf8ZDyRDy2Ldt5ofuTHLyGvAGSu38N5dXeaJgTYWqpGWDuDPJAuhVcRf7uVHLH6qdt5hVYcvvB6",
  "key3": "5UEApYB466VzKKJLDP54kDd5MQxvJ8zrhcWAfLmn1KHXoPYDnQx5PPZ49iPX7nDujQNC6diV92pMVMEev3xS9han",
  "key4": "23tfzHjTBA3WY5mctsASudMuahCgqJh4Hb8m48GCwcg8sW4icafkWoScKZEAMgp3AQLri3jhv8BqxxCkwdj9GFfi",
  "key5": "418LDY1mpdk7S9c5Mvaz7Dbfkk2wrmHFnUyeLMSi2HPz56V5vtvit7DLVjCAQphgZoH5xYL6ZDWX1JUCFVCQJKcF",
  "key6": "a82V1D4GrBdAVugUPFzHS9nJeVTp2wMko2R7ooSoqogE1HLWCKfMcQ1a2JwcLVZJMLyxx8Gb6zk4tARJzJjC5DR",
  "key7": "351GxfsXcqAQjQRwyJaSbrriuEw1dfzV8RttTXwwqkXiwiYGY4GcG1bLZirVAWJgB1iSbGQXc7Ms4njoPFtsfqBV",
  "key8": "2HM16eKnfkiFvxRaT7WqkyJqNR9nMCNPayz7EG8JVTmeaFF52fKMtBtLzWJvjA1xoaCo85avKAqtMmqrbsSP3Anf",
  "key9": "4FVpxRHnF72PGT96xzYQFGN9SrdjMsvLZHsNdZk2H911X6SsSEP3yka4r7f3Z6sCPxyPiQ74ZRAe3bno5gRKnBtU",
  "key10": "wFp6mkmGV8KR1YvkTvD9udswjJQ47kMavkZ2y6kQbQW2SQReoTWMBaUpPDcb17iDBpcp3rfAwMF3m2bUS9MHCo5",
  "key11": "2oomhTcceudTYSzV87dVUa6S5xhi27SSMjBVMjxP25sggCAuKwA7GKPUSPcTiuaE5UpJQDPZoi3mgk1eWCn6Q8zt",
  "key12": "4dLg7dmqqn2RvPKDSBZdt2riCD1Mx1rSV32qv2FVHUuoWfDBWtHAkmpMpee4jtxh4jaQ529HHaTuDujp316mwDoA",
  "key13": "2LXsMb7WGPgGaB7wQKQNGrkPa3M6TUj5p1iFENsuTB9anGgtCaF6iv75FQLM77PA9bx1qpXRzX3S2MPF86nNsDha",
  "key14": "VkaaGxssDhXYtoS7RGqPTBSrnNGZX7p2AuFtPVL2Dc3i3745mssVAtpR2MHQvJ5fh7Ra1sMQmEDJgjaH7idALHs",
  "key15": "2gyNHHXQuDEp7CpzZwTjwpGGnUctp9dqW97Q3VrUACEYm4HrBanCrD8tSuWxD4efkpN3WfS4ALS4TxjysGsZPz24",
  "key16": "ZPEgxXozzq7QhVqqxfMTiw8DTM8iDoWzDFGaUCXi5NcGV2VpMdTVM6Dx6c6poCEx9gtuRLTvuRQSci7mMf4v6H8",
  "key17": "5mnonV564MdcghfvjZfyCBmhKAtjKLdGjK97k1g1JPS37PbtioZSG4pbbUEgBYZL4xxfCMbbq6mgPFwEXQtg5bhk",
  "key18": "2hq7haJeTCrUAveoByGUcLY3hm9iY8KsaBaar4tRoDpw2i1Bf8qoTitA2cGYSgBNxYSBBuL7SKn8fErbVLk6m4go",
  "key19": "5wxuwmqQi1ftUueHWm6W6T7rcRtyubjLAbteu1u5CNGejGK5ZqEKwv3psJNABDjRu5UXFb39PAoyXWiBuZ9xFYUC",
  "key20": "5XVoz4wJm3UYjNaLvw2ZvFCaJSuW8mVj2ZwMXkaiKhdD47Ht1pu7KrG51GDnBuYJCqan2ykgXvwXPnvMB1Uyuovr",
  "key21": "ih89MCsvz69S1cRT4wwx9BxD8kbsxxPEHyH1SLZSJ8oMV2h2zy82AxecrR1ZRJu7irQk93NSE7r4g6n8FQmEzCC",
  "key22": "nHHMbsfAC8mTUVdUsGkrQagmH3uLMdF3U7dqggB5xPqENQt5zcS2wr9T6YKdei6dAMnxptxfdfyzLhUpsH3exFw",
  "key23": "VYouVbq5GPctn8Fe88UGRG8156TW56hdMDpSAArzrjqKJkh4gL4nsPvxQ4aoMuvWHGMvLFGhv3jRixWwcU2g7VX",
  "key24": "xQeHgxUQGKoX3YBcgMaaNg1wwZzqMPegArH49XpCdKbUnLHTHAYxjAtJG5gstoQmhiGixD1xCqbMV9oB2Ey1KK1",
  "key25": "4X3FFp3sPpHVDFpqadYe5fdivtsPSRYc3FmVVrq98tKP91qvnGNAUBzqQRX8f3v5vHNKfqGrFeyDqLJZ9GD9H4BH",
  "key26": "2F29dUnwuhsSEsCkk5XMNjfv89wkXpHXniKC8WgYzHuYpNmdR3xMWyf9QKN3ta8wxoin9vXwu4Lfmb8aMvcQ48xo",
  "key27": "puFtvmauoxmPV75rcE4vES2QSawamkVF5WTfxoqN3St3Y965tJVqgLpBKS2GqV8saptE6cNJTtdjUAvjTPbb69s",
  "key28": "3b5sXVBWdXD778wP2iXY8rbUxRZmaqXjgocJ16W58voDBTkiwqwdz954eatasZVaq9tYKDkdBdz8ztHG9By2Fm8B",
  "key29": "5ZV5xBp5YoSLW8XTkzjw19fvL2LdYAHQbaRq8xfgmMPsCSKR4iKnnPnt3HJjcPWFs7uuYTveByhvfwQzCJJYiWBf",
  "key30": "2tfbXFp9WC962D5ByETXf5Lst1FDD2to8vWTWinRZndk1y23XRr9w3HRRsvF2DNiFSDisf73omwdSERRseK5nZdx",
  "key31": "GicBnqJjvBw1w8yApoGujvkEYCnhR3RTd7SZAgoFfz5rqqfaDkebZGStVmafmQsYHQYLi6m1VHjXP5Sraya9oeh",
  "key32": "44LzDnuGXeb8ASxaJMUZgA3DYYn59U3K9CKieQQCuwsfYNYeRbjF3M1YQbv1RCdqK4zyjnc3hgvw4FvUh4eC4scF",
  "key33": "8ycjWZiioPytBsdkiJsG6wFHvCAyoeVDSdgRK6qBEA5g2jUnkkU1mu5u4odowPWcQrrZ6EdcKdrvy2a5UgyYTwg",
  "key34": "4KaQmVxXDabwP92QJVLonpn9V4sGhFEaPnm266HBKMQqsc6RjmVrwow7vbcgSGSRuUPTN7gbLHpFHnRvf2HW8PrG",
  "key35": "269mFMff3igYhe6uvWpZWfg9iELy9yVcKyqYrMk4PLL9KaV5VqLscmfxsn5Ku4XrRR1L3UnYzbaBxRHhnZgXyLfs",
  "key36": "5QgQAPFzu61W8ZJnE41T6r4shD5CLVD1HJWcF6WgHZYojvrwNoSJ779jX12oWWkPsqkMRKN44RSP4W7m2fypojvP",
  "key37": "5NxHgMhWgSJRpWZV4XKcQ8jMBzyUJ4p2kN9HuDT7sgcezfZYYE2wvqfmLFvNDRkhYTF18rC2tHiQ1Mjfyc3fcfWs",
  "key38": "m8mL116A3EpbwHBcZiBmb8RQ6kWrrkW3GXpMZczZpVuCrfUsxtazQiijXggS3aKKhosjNRsUEhS2p996uyT2dJJ",
  "key39": "re1UsYRhvoibphtGFMFEy6yMJYmLUFMrnFvVXzpDYUpFGvt7XB6nVRufLZDtcu4N3oV5GoN9niVvvXu9KHnaM3x",
  "key40": "35qJfXzyuWzE4sCwNqjAeSGBDNZ5aWbokck2ADj28bQZrTyydYkyeEAq2qzem2TYpk1EvLMB7G7Jnt8mLRaLzhoY",
  "key41": "2PFihQUyyrpcg6YfU1Vdtr4MFBrCxiXApVqr4VyZNoigvbPNuqdTgo7ZA2FwGDn1EbnFoaQwg2Ty63W7128vMRqn",
  "key42": "2jYkL4ADKNkDkbP2fKMw4ks2ffxsvAxMWottcB44zQ8TbrkjEunPMnSGwJufnWi6y6RPxcTiYR7ufQbtU48rYLQQ",
  "key43": "5wKG73AJpBqH4mu13rhprPRBzgpaZhcyobqbEaAdK1jghAWzbMwQ8aQJSBxt7cmawYBn3jm3JvyoLvMzZg9D56KH",
  "key44": "DisJhRi9ir1DjWAEDmZ8QUYrN4oGWm2zaSPVrprnhkmihtCYkELrWzVT3m8sPjPvyJfS1BQMADQU7RffvNgVFqJ",
  "key45": "5oHdnNqgJ62moetqWGzyF5ANsWRVRCe8tbWy1MLoW9fUTQ9eMTcBZAeo5LbK9xLVCfWw4BPENCL5oxzkEDPsSEfk",
  "key46": "5iYTGhJAiFCafapuhDjupxjiPPwgmcv5MFQT7TadLQV5BLhhow4dtP8aGqfoUNy8FRdykyMaTgcZJ5hQJ5Pp5ceJ",
  "key47": "3Bg4KdrbmjvPjPYqmpShK4k1AfA4VSc8YVRDV8KDUj9QM1kLVT3wa8vUaJ1FHP8XLskfXqCTRbKSxSbsd5A3SGVM",
  "key48": "41jDTw5iSdvSjnaEHusjZjHGji7VBFfmquN2SYg5MqzYpA9HnbkCtmuH3Fm5xUMJez8GnogNzhakKiVouZzRh2c6"
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
