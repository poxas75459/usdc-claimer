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
    "4Mb5K8Hb6wmWvCYuikJ73fmF64GC2KCgxdg7zTapJN7Jt7RthFqLhLFGH2Jz2ca4oeqaRgUG86Bbzxaqem3SLLaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HH8Qg1s1cpjbuhsQUYbkFdeJVdLF1FnNEVPngAGQ7Y494JwRtHQ5ZP2WpGgJvTKmnF3FmGKhUz6nmpP5BkpLv2G",
  "key1": "3SvFt9YaGx7QZ4YPnPSo8C1cBUR3hqQz72CCTyRQbNgF3in6T1inyHG9PtneRwUqhi357nx7MUNDZDaApRuD4CDH",
  "key2": "2A662YALo77VckpmRfSSqFk8wZxh9S8rkoempPbxt9bjs75vXxbHXQojekr2cQiyYCgog9pF6dtbQbgdtA8bVQpR",
  "key3": "5mM4PVyuhCAyp3q7YwwmtovTBCnUNiPsPQdu7MBHeWvES2U8zTrtzSb9yttHjZwFmgSFnJ5YB5QENuTNLzwDvnLk",
  "key4": "2g4r8G749woxj1or5GNQ5XFt9DXMAVpT9K7bMeg8vpK1QFD5uXUeb67qem5XycRCkah3gfrSbn7Z3sxyyqsQ6HDY",
  "key5": "NxZ2Kyt43ZfgPQ1NZwR7ZH7HR5nj9Xa8pM77hguV2x2XMPFCikXz3ouYddYWBoQJpHjufCnRHrTWgnAQrepk1Qi",
  "key6": "5Vhqd7iLUcKSANh7GN7mAAPB8NwN6ty7Gj6chS474NKAwLvEacsRi3f6K5aeBoxRzeMHdDYBJ54nJJWctqfxMUnN",
  "key7": "jgTLg1jiciYcUtcEG1cbNTHDUacDGiRaG2Asv1DKwTLWgcDtigsQkJ69ZDp9MbnTFQHkh9bkLsHhHehVSAu2p5D",
  "key8": "5oV8wwsjJQFRhRC1ViGpnkT7GU3znYQ6JFeap5wxWWbe9uCG3vt6JkNaDV7bT9ghn383b6PR9MSL2pmiwssQDWZ4",
  "key9": "21hq32BbptZYFsNRU74H2d1hcdsM2FVmEJEjC4Y9QVsJXC6zz4eT7UiyJDvo3v5TPhCUMFCPN8eRkWH7HrNfA8J5",
  "key10": "3fNcDTAnonUY27jctd38fSA9EKARUUiDPEc71oGh11NirBrdZCHQmrNhitPZozJFbMrs6Eh4hTMi4xxDskBqczN4",
  "key11": "5TnLvQN8hMaqfrT6C66nKZYwCNG1HeRKn1deNviJchvBLUJeiiYdTsYmqRM699U5P7PVwPw7yKtBvS1L8TgHFhZH",
  "key12": "5Sv5nSCsZ42HJikpzVzaeW6vp89eKQxfmnkx2HxoHFBRQFRCgvjeJm9vGHqU2cakpqP4b7fHCkcvzTUrsT6hGYnA",
  "key13": "5WezWw1493f9PzuPt3Ve5VX2cazSajCrSiTdyENRjHu3V3FdZPsS8ajYu4EqYPL88RjhDTU9QQTYDPJMvbjLmFuN",
  "key14": "4tsqe3xWbcdKrEAjWYV5wHCcP3y8tGvErYXZ7EfC4AFLKGdGorBrf4oyGh3wCTAJkq7PsnsgafUc6yS8E1ufa2qm",
  "key15": "3wpZUQhj9ZMBazCTewsTrMNzspSmoNCGtpfTWESgxtPGqrtvz6ZigMs4v535bCMtjZfYbHhTKycicVjs5TXiyJwL",
  "key16": "3DEP1g2tpqtKwRxM6wQrcZzmA6bikVBNF6aVMVmW2eMTBt9u1eaFYGRuXbeRWqvWi7g5p7VuwBGLD7CFPpWhhrMB",
  "key17": "3vNCq1m2XYnkpMVSrfjm5S9vwN6hi9gdosJH3f32jtiphBByjjpcUEUffSKLiUFkhSXZCnXveTJhvJPngkznwDKL",
  "key18": "41zufaTqpcmkmHHfYZeod2FpaFfzkZJoMNfufEWQWL9F6us9KrfsJC5ASrsgZ9kA756J1W8mJTZHYRNca8CeUuSE",
  "key19": "2AyUUf3jzgWYkS9CWGqAwb4r4E2LZ78Zf55rPNL3MrTMr88ejVDbEKqrWfREodA5qZ3Qabp4WPnpWZQ6bMx6TyRz",
  "key20": "5uGi58GKS56qCnSXVCc9yu1pMAQ9LFyT8wnSWVYgusLgPWRm7h98RnDb7AdLTfRN9t388ZN2mB2EHkZSdcJWVcb9",
  "key21": "3VFZ1vZqWiU5rF94sNY9HWoRLnBVLHKZrdPZu68LSL3mf1Fhk5wg9vHRaYY9dQfTfWpJLskvSh8ENqbJPWGbZF41",
  "key22": "5KzRbBS2kDQo7wJFtQiBhkdM9861E57m3yNZzxBFRKuc8mKBN7CkquUtrLfAEPr1uKN3cP1gQTpDzDKJoFXz1SDi",
  "key23": "3TNVtgXoEq94SD3tGYuzrSgy5D28S6CaBhiEPU58znQRdyzDN3vX5HEkcnMFhLdsQkPzfEeKJM9ruZw9aKJB3mjX",
  "key24": "TWDwSdwC1VKk425PGSLbgCwZYJELxGUdvMvT4Ukz1DxeCmyJrJ5VtZZmRpeBFmAQ84aSLGwETt2zK25TJiQ5adU",
  "key25": "2FCa4R6etRHmGN5G21eqsKiA5PsSC5p8CSkEShbCo59egYPkJ67NFy72Xx8Nfh8i7spM4pK1YLxpvAkxho2rpft9",
  "key26": "3eeFgaTEyLaA5dXK6AtY2ZtEZpMqMR3htYr1G9zAJPfAqH14MsVxrZq2zJpCW3UyVLK9XoYGBcXuGwm3oRDsxisV",
  "key27": "2USd9Kfsz7uxYMyU6Q5XKDrL4QPGWKLGkNDBJoMxAwZCig9wBw3ELrZbL9JL66AXhitkosgWkzDJNoCWA6uCbfb6",
  "key28": "5awJiswsCvradZRoAguxGbTRZ2Ct2SANi5Pi7RtratoVEhL9p8uhPaXziZ7v7DaLpXHuRrZ8iXBP9X9rmsPrvNSa"
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
