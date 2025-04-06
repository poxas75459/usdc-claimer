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
    "5uxSS2KL1csansLrMS7VgvFQw3fg3PrNVdnrMum4YaBgoJXfqLnJF3uKYTHXRVLSurMU3LZULgxFdhMDyDamRpi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xy17pPjRpSZHtbMRbsZaBc7eMVMAEVfRLMmbFZ4V9XFxXygkrkdKbXXUhoFmSHuqSakGACRmr6SkwVMZwf8bUBs",
  "key1": "5kt7Kj8esrnNGBo9xjvt9sfswDm6iSkMufFB7JiV2VZsL3exv5vtrAJ7YN1ZPpAq4oMoRjT8NPnEBp3aqw1azNpR",
  "key2": "4WHftQkQK3uiArtKiPFjA1bSf5PMPDMjtFDC7HnQbxs1iX2NrZSptHDbGPoARUF8KVpZT5j7KEgpiaHFp4izTc5X",
  "key3": "2dAX4mXBZhLdJx4wsuH5X7YKn9bZUuzCBXdsxSJZNiPZFmj6ikLDU7d3Svu2RTrmwNhuho5MaFiuTQ6xY8cj6SC5",
  "key4": "49vushyf1DJdW5Wti9umughSrboxx9sKhKFZuYgFMBu4gC8gzVhU71GXsM3cZDUy3AP6amkK7UxW72XZSoEWHz4U",
  "key5": "5ef1gWxdU3Fspyx2Qd72KyMqCQrWZXv7hoTjQPA19kHuuAkoh7JVtkGWK8kHvUkmrUJMtURFPiBmP261qE6LbMe6",
  "key6": "2DT2QhdLU92PS9CTwqvhpFLGhE15Qh56eLcdkUtMEaQnAH2h7uZZ4rWTTZpDjevvuueE2amevADFG483dmqyScUb",
  "key7": "4bWMXhWt7aYuoVE8MfZTMNvHdRKE5G4sdrBYhAGRvaJvJgfu3MYZhhU5zZnRAbrBCMTxNyq5rHXX1d314njgcNwg",
  "key8": "5u8SYJDTia6ayWihRq9QJVimd75SPjugRuL5JXnW52BbJh61uAFdKJWj6ACEEKAG1kEdjEg9kqa7fUo2hVieBHKy",
  "key9": "EbcAYxinfMB5qsmnDaeaD2rVbBckGmMsAurN965QCcVuUadsymD6d5Vi5JuF1szFhUQtywZEecq7rHha9H23NGr",
  "key10": "4Lp9PTcYATPnnJwaeDcUYwZ6Q98ASNA9tN1jXHh6vPUPwsaL9QsJYB94spZsfzJ2rB5puh9t165TRckHRwU5tymp",
  "key11": "4gQhYpwPaNxtmVB94vFxUHMZVZfXp812mzPNAr46rTrLG1btVmKosSVeK1FGoMCLNHtfZDKLrWDJoMiJySF68iq6",
  "key12": "5mVBQtfSY1q7aDgSSB1Zra5x3PagdNKtBenF78XyGgnE11M328jmJM7eeeV7UrYAKd9gu81N8GFTscG5TA2XhGqA",
  "key13": "3sznPP1mU5JeT7Q2HmSJ6WF7NxAdr3PgDpk4hJCDxZWzMhsuJY9oAfM2URYGDMdeAsZ4GkXhTvpV7weJdZJg7GVA",
  "key14": "3H1KEaUppZp8kskkVzFxsXYRPs5jZ9hX6WnPvRzbww4Nu6AnzWS5kBopyFkHdjQikokZw61GA1h1LXbNRQw6MJuV",
  "key15": "5vAKwu8m1tzpAH215gux7Fkb8r3zZzXaJPUih9AgcBZFqcaJtNHJtsgk9CsaJQZaRf8KTfETJU9vaNEHubGhGAL8",
  "key16": "5JU1Q14ZQQRP6DfqnVDfafVw37R1Xv7Add3iHL9ySCHduEtnCRL4UqT8prZM8dLro5DqBNTuPFATSN2TAcuCXfhs",
  "key17": "zty1Ekpaxzsu9o1mnBPwfQVCwhH1818BMVetFMGg4BHCMdD8YRDYkCUvF9UgMKWum7zN1xq8frK4ypADnL33z5T",
  "key18": "3zhXshZ5igfd1uHDBeDyeiuHqzE9d12JqQJdLbfaYWZfBvCnnPn9NakMAk5bjgXK387k5LX6ETu8ZbaDCe73RTbo",
  "key19": "3yrJgBtLqpJugDvXDU3nJ7gCa87ou9AZEJWByc16ZYeszGxCF4MisYhAJDbhRcUDX5TrjSfy12eHUMXevoiDSD4E",
  "key20": "3H5tvTk9vi4sEcaNKzaiZ1uzQi84fv4bi3thkYGRfzK1WuViP8fFAW4jbYYwoAvL2EVmfByHcRvgiN9ihsY1xR1n",
  "key21": "Sh3ELSN6VnjtEqGHqZk2yEhUQwZ1epTTvmnDwn8eFeGAHjMPuCUJ9Nrnuk9qfbJWqcFnBGa9bSxaaxg1tnX9AuM",
  "key22": "64jPPEhP55opkDo1gmsjty5i6xdpav8Ks8uu8WSKV2DhdQqbLGpU5SCN3XmJXV1g7eoUK9aSnBnuQa7M6zgBAx4s",
  "key23": "JK8PTh7Udq58XDNB5UzSt9J2mTY7zvBXX29tYG3xrpgHViJgMsAYhtpcpZUz7qMLXLKS9WDjxV1kHVu3DGQDx3E",
  "key24": "5pEsxf7QUBw7sbqEfdszSt87L1dqHkLNZwrwyN9MkZvjL6HHMhE5AoLNNuW4QN5u2A8s1NeLmBWEV1p1sxGpVUcL",
  "key25": "5GHbuLGLb4GGxYokdhpr6oU98yCDZsQTs3Dxx2XRs7Qg4nSYZty15PafdtqmYLj8p6V6vzbSMrf5EK1Wuhsv45Hn",
  "key26": "2wHA2BEdXZU8EDfze8UyWYb4BzXGNhZhyAKtANzoa5rDYy7iM5qs1HxYmrMECPaosduV4bzuHP5YwGk4VErrEXXP",
  "key27": "8bYAsiCN8tsPuRP1DSKekdivR44yj6WFua2te2eGTi9FLVFVFyRiMxEeKU5bB4mWSVD8znxt2e3WQ3pzndwCMQc",
  "key28": "2jZKaYYmALU8iZpiFKMeZmYo8UNLMA5wCctbeKyUnTWcZtwLhUbDXtvhXXPc2XgcYRcruLsspDzWstDcL6aDrgfg",
  "key29": "2DGJLqRY9s7UYbCeiPEW2dneA1sf2QhUeGareikyq2eLYrKLgAghPx9B6XdXCE5SGNvP6ekT7cSa2gGDLD8TkEey",
  "key30": "2KeN5upe39FEq1JtcxxjuP2bw458cpQ9uiDdwhqGyCM8NRSGp3UaRutDAiAqdRMEaoqvSBwRC2nHFotxXRRrrQyL",
  "key31": "5KX6m2e6mTkBbSeibaMwecpy7wa1bvrS2qZRxEmwk95JqVAX1B2CFw88BzA8fLwePvm5w9AApQ2idKeFSck9JEUN",
  "key32": "3SCeUbUea2e53fX2zxQQiJXVoqahWuwjZTKxVTEJu5FAwz4u9KV6ThNmBCRscLPqeRFU4PaxnQ2dQxcJroNkTnyf",
  "key33": "GWG4zxp9RJDksfrhnMPKNFEmp1YNXc1FpPPRvcr48B86M26PohkJ2EHjydtaPAZgLk7c1kKWfKVWCNwESm1taGF",
  "key34": "2EqY2C11EJvWMsh8D8t1cTc2Xizz24xMbVkcDJDLsX5tiDe6rP2zSSLvFWxzPwPUwJich5safDYNDJn6AoQES7pi",
  "key35": "4w4yfQJU4xVkuAAf8csE4NYQPAPbnNdHgVwzkRd2JKnGUsbSUCxEo3HcwkHqHm8fPwiZjev7wdJjcqTXJJJuYqdU",
  "key36": "31jAVonTryBpVFDqaUUnBXWYe88CBJTBbR3pLqzynRK3KPKLQ3H2WW8VcMJ8ip6MN7WrywEyo9XLksRYyghXPQhi",
  "key37": "5qTTUoZLruc4tjJTf219vksJmtjHdHM42LosKLZR8VbVHE4ZXDGD5Fzwsyi4vo7tExaiswGzLhmeFMxScepVhEyA",
  "key38": "3hfD6ddGuppEPdCMvm6vpZ3VL9Dm9LmSxThqMqmMw9arZDsQNceGHGy2RGK6ukBq5dPTyiTuSSyH4wERdLHL3GYx"
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
