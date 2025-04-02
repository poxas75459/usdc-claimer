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
    "2hRC74T6hsUutqkmSRxkr8gaoEG9eViR6iMRk4gGVKQLBasMQM3nZHRfMaWP5zsQvUAfiFHfL4qcXDgCuNxtcKnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "599KZS2JPqFS1GmLQ2Ynr399b9MGAL1NAFjdoyuuUP6HLfi9rXSy4rKk2aRpYyziGFgNkYpeG8BYKAe15D4eGHcG",
  "key1": "62tRRURNvjJNCGUE93Vz4nJE81ePWefwywrNS2Q2j56VcfAddF4m3WAUkuFVH34nAqUsNQewxQBPpriAtzqQH9oF",
  "key2": "3eaXAokE9sFHrB8MsHxDJaLtN4GvuLLFD8M9ZThySvDfurRrhm3Bnp3GD23uL4KCnQUJFHQaaKq3NMHznrWSEpp",
  "key3": "53J5hDeWjm1ST7KfQn4PLJ5GNrMrFQ6PbtQpksZptMpEMaDeAgWTGGA56PWkWHeqbAb2s2tFDgvLfo4TAjDEz1sS",
  "key4": "NeGozZsg1ZNtT57cTZ3P4uJTWAf5BybpZsetCartRPBkaJeTH83bP99G9ZcgBubd7aRyyMA4dsB5vRt4aVMtTQ5",
  "key5": "2kt4PEBpxDU5pRoCjj58b88Hcdc3vHuaAei1zdL5AbC5ambqpB9YxmnFjTtPfbdao3ykdjkcjskBXjd6h8ndgbVM",
  "key6": "4ysfKpAZ9ixkgBPXSrwGHwa1gzuUYaSTPVQYPTg4DTdSCscgD7pKkNvVCi2nByuBZ69ZLH2uMTmo6Yd1dVm9U9zW",
  "key7": "2wvS2KWeFBVn57VqTt1MKufdPYw2Po1iUk7HCpKbNXTQ2x9LKvy7PGdW1JyY7enoMgC4WsaPcttXytnCDQ87Jris",
  "key8": "268nPEts76y5XpWNB1Ad4NbrMaChoMXUGnGd5PWqm1fvkAZsUx7NjSF2PHD6FF8DCQZTsc8QcQY5K3xPbWDd5KpJ",
  "key9": "2BHkpTBd8cj3wtL11G9rUUNJ8PRxZEfToGnkeqqo3hGb1E37o2EV1RXoEPz6Vux6yKM7BEGAbt4JVRtb3YVa78TX",
  "key10": "3Zz9Hn6bgZgow4ydb47VkxDcPJLeQUQTzTigYK3e8FQhtEjB56q2k5D3wSERuBMnQGagsidU5k1ikT6TMfCBhCrG",
  "key11": "CRJucXF7AACX7XWhBJcchb79gzhq4jiqSHnPHzvZW3Njt9aK6Mfk9JHb8efxbxgqsK5nSzBzCwusaxJtmD2g2T6",
  "key12": "54tjVMDrX3XaBV8JxeMYV3r6HUjdgU1UKh38EtDUnXR5aczNzYnBkzZJf7scJzFQpqmAezvP57w8mhTGtgXouMC6",
  "key13": "5kAMrXMSuVPfTwL7sBuTuY64cX4ZsrUBQzoRq8DntE3woQciSJbs5gKJrkWzFCDiAc2nB6dWVsnBUMCqXeZYGp9v",
  "key14": "2kzvAvJnBKjLPfiDgLaYcR7kNj4PpcM7cZpjEXsfgs17X6yjKUPogkmtEJq4DZX4o3fBPK71ggrQvpwdRoREFDDP",
  "key15": "3jxgwyMfAbEH8smmEMEA5SSKH1qqUQwkmeJUNeEtdyHcMng5fUxLikpSJvrtEoYifXEUiUaCB8mRuXjheWpfwzhE",
  "key16": "3j4j3rBrVbkQEe5D16Csvj8Pb3cQS1a3Ea2e974S5eDPKkeArcYu7KWNgnHB1EMFD6zCnJhvbCzcVK6XAWHUjcZb",
  "key17": "3EZJnFwK3q8JM6FxcjeJZogU1moUSy8f7RWwm2ShS74qdYCsUw23tK4SGA8pm1NhzPxuY74X9eatvnhtux78Y83y",
  "key18": "3qYUkEgf7TknQjZenvJ8EuA88Nz5VWHZjK92vSxjGMrwuVVLXNMJC7Xxn7vgfuPw2B77XUALRtnzj8fsmG13bDnx",
  "key19": "5ZVywPEFqY3tdNYxmKBPL1VypKaXSkeiucdFpxw5DhbArQuLom2pYsynPSqNVpmfUwqWBks5tc2b7Q7i5uasps5z",
  "key20": "259ua8b3W9EtoJRwcXcy2xzJXxB8GwZP8cQEtvSFyb11XmEEDiJEi59CtHAFvzy5SrefAexXcoy5EaF21RduyeRH",
  "key21": "3Dz7gDAjGfF38Xbb66rATWztbDKgjypX83Zchdm19dwYS72BXtaC2kDKR8nwhBx3TCx4nZEztPKKwWLSe5VMcuwu",
  "key22": "65tthTEAEAq9AMCNczNGkqKAwK6TSSrAn4uwKzfH12kNyp4AWtjcLckvnPdbEhU1qvrST8sofmUtuMEwb4aKUBWc",
  "key23": "3qjvVP2f5vHkspiPZMdFJ8H6V3EsNPGx1QDc9qiQU4dURbgq5aYm65H2FCi2Z4rmTX9H4sjQitfGyKkgXJH9xu3A",
  "key24": "W21ao5zx315VjjnLGaC5Vw6BFXudS1BVnzrAVofWzmxo7mGwmc81mjwAdm3G2eAGcozvEG4oCnmT4uwkmaDuutt",
  "key25": "86urH3cLaxAmgmqkGTZgmt3arq5U3NZ5N9StGgzifhodWfjqciK4WokNY4cP5Nk2ENXG5UghwWu1FEM4pPd2h1V",
  "key26": "5tseuTYRxXwT65jFpfnMSVAE7JUX4nrFdHzidmNQBRusqafifSti1AXwXh8Davr5YdY85A3XB9iKDZewcM4JnNPt",
  "key27": "5sW4hNJJftZ3jU3QBsSycAM4Pork9YtxwQj18VsuNHETHn4y9V7v1QRwKshHooYHvJojA22U6sqtxD3C9D615t1L",
  "key28": "2F7aQJcxmYP5pLMiEJgQKktQjdSVdcNX3NqPntPk6EAqxTKixg3Sj13AHoSrkBE8csxK68QWttvLWv62P1iYh2To",
  "key29": "5JuDPMcpwmXVXVsU6MVkgeZdxUt98YC1WRqsrxJKPUYbVnKE88q9juHyZE1ULFkELcMXEAnERgKmVHHTcaHayF2q",
  "key30": "RdmQcsAVF2JPGX5HM9xcn67BDvATpZcSFfwawFx5xdEj44X5BUWe2DC4NzRM8kLUXTBp35vXozR9Qyfzm8jNH1D",
  "key31": "2WqFDbsaKB3NVfZSoaWtUeGCgKdPieB7iC8NBz1VNNs87McMXK7QnCpQmqaVDWaVcxNwgFi696BCWS5g81Svr14c",
  "key32": "43W7tFWsYfFb5CjNqY8BWV1XPncEeQfAxuBF6fcomvjs3qP8bZfaViE5VSFPeUpkjazzcw68bcXznU4HG4EDiDhM",
  "key33": "3gzoz7f6CD2W91434VcxDVgkUD5ZmRR97ehRm6cXLYixqHQf2knKfCbd5XED8FZ3JA24jHL75AFCUjRC6Zsh1UA4",
  "key34": "27PHE5vpNk68QPyJt9ZF1rSFrgLmwrMzXqkr86jXZhpjmCqT6mgyeGzUKChTgCiiMucK2YH79sxW8HFoVkvQxmiC",
  "key35": "25tvJET4q4tGyE7Kpj8zHK1A5BDVRaQ4hhBDunmGzRSrRtQGTYwNPKDj4TbTvSGauf8gpPnoz7Zj5PsCN5ybVMF4",
  "key36": "DhPxDsV4Ei5cDHJpXUUEPwRrsscZRGKhKi6Q5mGrC13Dt8DLCiHHQ4kcBFvxTovHW1CxPTtNPCBNbspnZKRFrLz",
  "key37": "5Kv819GSdpSvtQZQMcCz5A8byibowHuB52Dmqnk2ET5nRk7x2eNZGmWDrACuV2B5RJTz1LxrfqMQQEpAF9p9rvLg",
  "key38": "3Cxgn52ruL2CdAEnjJeQvFdGANxVJBZasvv5mUtHmeoVNzwEhjAL37RcJKnpqiBwkKTsovPZUNwYP5i8Eqa1GBP8",
  "key39": "58ERxHgWMFX5TquzF6S8zM3Sh677nUuWNf4UmNCWa8DcojNPCYKmnTcs9DqyJ9Jh7JoW9SxGLDXHc7ZCeZHRtjVt",
  "key40": "3sumsShuW2E4FRh3fYoa3q2cK5kPmjc9kM8XonjidLKtivMU8he8es45JBAJFdYr1mLRSkiTVJ22GPKD46XEZxdS",
  "key41": "3k36ZS7jXqqWV8BdgLog9LBEbB9RLvdCXNZPUjQPcuY6QDWKt7o5GMr48wL6Lf4ppWonS277Hg88XdFQWJ3wmKyK"
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
