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
    "63AJBhQzb7PUgQfjaWKLcpTySLWrykWMJAzVMJqMSqdwG9E88BpS1yAqj3fbtHM8HUK25vS2Vmj3iCrqWXDicbAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24FrHu6NrYFVdSb6DRvXzQu5vdZ3aWCt4BaLMostw41TxtZ6yZ62QAV5EYNsy4V3WU5HbWiSumXTbW3GYAGmiFTR",
  "key1": "4XGQ6bWUUGfp76mTDSwLjSkThBUCpSPzAG3yjAEqyDzeW1Sxm4RAg4PrJJkC1imADdm2NuYni7LEdLCHhERFVJGT",
  "key2": "3fYPuch53CYgFhHVy6eAtT6KAAgjFiKuJ6CYtGiZnEqAsBLJ669smSFbizUN5S6JyCNXH25ahg1s7qGRK8n8sRn2",
  "key3": "3mt3VBbZinCkP5gnLmtyeGC3So1fE2ULEnQqB4mgPvfKBwSSimp566J1wXNPemmERa8RtuRAArkZD3bt8npWY9ZH",
  "key4": "2J24P7vFJ5GULDw2DSeGP7QK4vueWAfRfMieFeF1JmSGwfXaFMKqbwpdDBuyERpNLFrQsso3hRkoRRD6Yo2gqMLt",
  "key5": "GQUeyThK5x2pvorDfQzwqukVJ2cNDQTxgsmGaSUowBZKDM3bnTg85f5ZwGaSwfnNQgXU1WbNBgtMijQXCXFfHxL",
  "key6": "5PCgW6wtFgUVxY3Rd2pJbJyNDzWzxvfQ7htR6k2GGsAKsGQEFe9MGccwtuR5q6icPgNbLDq3beezyu3XVgm7vNG8",
  "key7": "2J7Kp7sSdTSJTuXqiKNMVgQ5eQ6epsuZDpPJwt86q2KEYaeH7n5Hjuk7TLbLzYUWSahhffdeoR6fJZFoar2YpKM",
  "key8": "3a52sWqckPFZe5NukkyAn5w1sZSfLbuhohn7i6tbAgxxtTUFbs7V3EJUBF4S8oQv4uBt8UYM42nYHnp6bycYPF2v",
  "key9": "Xk3ReqdBc7mFFJG5eSGKEwEnW1qRrhnD2jytVymxXWaLAZUo5cv1p4nyDhXE5f46Zt2jK5zE7dgJ9XWXS2uDhju",
  "key10": "2AcJghr4XPuyha93YSCBXGAtZWbQQJJLF7GcNQPUNod88tCDwnZPQn99RhkKbVWXVnuinpCsfno2YGQgeZV837fW",
  "key11": "38rxXttQkCmqRBE6GQ2eKtPVgTQmtTQLqWGu7UkqX4deA5PBYjZZJTz2Tq7p9NekQ9NMGYtvUqYVDXeX6HWpLYxr",
  "key12": "aR3Nki8Eo1ckDJdW7N6ApMXMfyKthYRGUVz8tra7LzHVqnQsyazC5SXNJiedNWXhmSo1uf7YHxLjhrzJTunKSqD",
  "key13": "495N8zmyx6LikTfAwCUp4VEA49HcCF5dkaEbjeyi5vGFqC7bktM75fjiUfuo8oEoD8DaLWFuunRpiDyXehfsz4LV",
  "key14": "2SkfTo8BVp8zAZy9Uc1zyki63QEcuf2biEMMBWXV8KNJnRnhWM8avMcAu7nGbcfefnrZ9D9DBg2JbxdFbFHNsGA8",
  "key15": "4hrHLh93axZ4Ln4kZt342yK4BuTbW4vxDYgjNrZsByDbwVH2ng7zvAc9yqVrcsq1L9yLR9xv3mqaGBRM593ncsat",
  "key16": "2CgxtCjh7ae9jmpzDQmHaoY6RyYCY32ZZiNA9wz7sFEj2CL2MJ3oVbrp8nhkubVXzGkxQC5RArUNFmNW2ggB9sZE",
  "key17": "5E8SqS6vuozwMigCA37u5o71KnsAURPubjBXBdpoCZvMYhrEWgjJbHMUubADCXmVMMTedBQp2tHM85hgh3omnibK",
  "key18": "4ituzrJdzRGQUB4mFBj1Bj37SMN3fBj4WQsRYKMKGzAr9SgKNdenPUNmwoMXuEyxtgkmcX4hY33Ypj35WderPLYC",
  "key19": "3C4AfNodZCGCPGxo6EvPt3XBNYQrTVSmcqtgUmBWNsvtBt8SVf3W6mbPDGRJ1yRZ9REVFhfWn3DgiF83eUHAmoaC",
  "key20": "3uMdd2Xx62DW7t2PPz9HB6TimPKrZBezoWD1NPfTsmvMKMnqoFnFFheHaLAo3b3q5jGE56TxVrizQFKvMdCFg1e8",
  "key21": "3AH8Tp2vTZeT8pC91Th9UGN367K9caKAer5WmJjjwPWueNVfsaZ5tyB7n8jMJQ3aAp5GVUiKR1g3uHzmnPbzLF3B",
  "key22": "3XcdyL1iWepiQm29WB2X4K5bTF8w6ykEhA7WMgAinaEkm5xkeZWQwn8Cep1oQV3F45eVDFpFE7mCBBwrdEEfAfMq",
  "key23": "vmRtiTThq35PukQEGfwm9SeWQtnoVa5Uc7PKfJLwtuFsejwjED5ALh8hi4FyYVqFPPJDREjP4mXv9GiLTc9CN3t",
  "key24": "4vTernwBbfR6k6LyrDKt47EhGebU1Uw9tGgdbY3DwCjQFy9SkM7Y222AFBcGNL5nuzis6nFEgGPHp6usz9fpQGgj",
  "key25": "2m6qHTZqPB8ATpj4jvXgDatLfNNiufSNnT5ai19MP5aBKmauFETHEbHjYhPrYtT9JGrEBdVBSuBrejERPiEDU4LT",
  "key26": "RpuGLbvBiruzKZUc1yT2C16CMApj9baqtRf5WgmPbT9RUe8Fd3a45APFpkeBRAQ9J783ZxyfewTD3Huv9heCaQs",
  "key27": "7gexCwRfQZiyx7WqsRNCyDgKzaVk2u9MBPCtQzwaXxPjTxxYp5jgSBPjs17czNuNZxk2qViJVnEUFwnVtGdU5Df",
  "key28": "35XpSyTw3LpBQ4C8PneL4Mf3CpXA7erQXePY6iwwg9ak5sM4dFwpULfXCFYtZyuPgxBZJodPj9MCBdGBng6eSvEP",
  "key29": "5EWpsjT5PXrn2RJYgkUeWFP9mUXd9pR7AZY2qUGJS97tpWuxVgpesAXRV2ZP2R9B5nNb84fFg8k1JeJchDrMq52T",
  "key30": "qfshfEQkkQUE7Hc8Jpb2jQyXRKXmpD5UrHYGurDMn35eTE9CruVvP1rCbHFbnCe2waZXPkoAcXxtbyGYgZpzsCy",
  "key31": "4VkbrBYcM2rTJf9tvmvK2ojSu9oaC1r8BZFYp8eqrNkWccRAVwEFNvMyxj9fmXQjvBYNuKcsRjpkipV2yFyMtenL",
  "key32": "3RfFFXyUvt6TXRKzdemrgEkZQkBtxkcVKiGHKsBpRkS3oFARM7txjCCoH4Tf6BHuhMcmHS7vQtegZsDjarjK65rG",
  "key33": "VUTA4cRnXGMpKw95UuFZGZMK5Fw5EgsyfwjHreviKBZ9a64XrVceCTs6CbKjz6mzM7dadKufQwrWU76Bv8HHXgB",
  "key34": "49LU992b26hFzpggDokC9J1NhgbTMg6abY3SdM5SugR66KrXtuLuWuByXMLpx8pgynbKyfcDy3DtiQctC7CM7zps",
  "key35": "29yEr6J6RzX48ooRCoXn1Vh67QCyv3oZPCBCdDsHnNmcYz4nFrRPALywXFg3EVBmqXzPRFSrYMBCwDkYE1FvjvnW",
  "key36": "4bUvsh4RM4c1YYMazPFyRBUbSwNUweCX98g9JeusCpyJCFrU9BABXUP3tRAjEc7a5aoDzSAgnuYHszSAHZCWgHPH",
  "key37": "yNfWobAXkC5JAmNPHLAPEZkNsMcVGbmHnsCiwq7Q6pt8FP5sn8L2GUYoZa7tcE46geBKu53AKZMP2u3zxBU5BZ4",
  "key38": "JVDW8YD9fwY9sk24nXnDF84Dyt4cEasGBaZximfqRwHnuAaVwHm9fQ1QTc1XDXg7bpLZXDCzEM52E5mj9PvgDjb",
  "key39": "2XXXsc7aPYhNXqtxz9kEAo23JBcWsGce69XChXwQK7DsST6UYqRXpgJuEx298bWvdzZh779GLJvVw1renXJQLTzD",
  "key40": "37RAufUyTxR16z9wHEVjKKymYM5hWttQbvnqU1h9G1kUBbqdt678V4jXuMB3dNhq2T819jbTUFFMiEtnUDMD14vc",
  "key41": "5bZrUVAwhoNzEKeuGwh3uqN6w1Cs7zVEzixFnMtPmATp3jDXqGSnFtWzzboXNMs77rT5wTY1JyP4oHwKuwJkWr66",
  "key42": "2J9nirBZukRrgCpJswL4KpXq9WFZPscrJVNLyWsaCfovzqB4ssy5wfUXfUvLypcTDVuYCavZfbQNpLAeYeHdtm3f",
  "key43": "2mDsHG2j1q9meqMi7ToANwUzPD45tCzSDiY4DwqKevKkvHbUve8Yyqa3Z2WhhQcuSG29DyoJ7HYjd2ahVvvjYEZv",
  "key44": "XLTD2i5JALeMyLbH5uwLzxQLDTmzfK3o6668BDFqPvuG2p4gnhQuZYfVUPoPMRrJLbWLaC71DzvP8niP1Yi8TC1",
  "key45": "1SiAMdM9FphST2EuX41dt49g8NRmM8azWLyEnuFN4MdQroBghT23XKn37S1u7nCwCQtQXuWgcBcikaCqryy1UCV",
  "key46": "3Rwv6EmeAcLGmZq2CLx7RgjF48FnM9t7YJJYHX3vRYegdmRUyVekYp1jDtgDwFPHsU1h8rbr7fzGtntzf1UW4ccv",
  "key47": "2KdbHZLMn4s1vPQxVMe77zaPiD1NHeYJwqAFjqPrujaWKCJf4Lm8u6nSMKn1bpeRYsdYgw2MMTr7JrqWDKgQWoNf"
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
