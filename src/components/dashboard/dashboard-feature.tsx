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
    "65ZJ1nUD9TTgSfyqBZpdGCgCYaWNcY2nv8EjHj57fjcEoud5fngDYotdxKvrhDBDoSLE1GsEYzunnXaL7w3yXW9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26az4w2kJE1oNnSMvbir5pxesvcSvhkxHo8Z9VwwvrK2Jx5NuAUdgLBPqVbFbhzNNcN4iNumhGua5bhDZtCmjsrj",
  "key1": "2f57yU9xoTtVJLqgXMmfLDnwav89Ko8RrnaaRgTUbdpocHHAhTDQZeDL9b8nVbNvyABnJjf3QQejb6CmRLiHJxL4",
  "key2": "8d9HwtcDWL7u6pQbdoNEFxkXVPtyPPgasTvvDHXyHUu6R4VoLbuSEosFvyXTQvM6f74qTvaSVbULXtYUiTuEUu1",
  "key3": "5iTy1GGjAWRA1amyx5mFSVutfjzY5hgUwUsiuw3Fh73oup8HNayV22TVYgVYK2bqGNqkZDLgPDoJWUYe5KPxAhfg",
  "key4": "62AHu6akL8jNQHuK3xuT9XMf1a1YA6fAA7m7jd1Ve8oMiBo3e7vkhe53nTxh4ZkTBAuGCPVU9mS1kF88RT723isq",
  "key5": "4zueeAZ2yt8Gzb5MH3CEBhQoDBioNetJj2YgzPSCwX6xA5GNLtKW7cKMMsfecu7ZVQdm3sijoZByPo8n8m8jxNd1",
  "key6": "CoxPk2nyDDhrkKZXtiu4ndK23bHzaW6eUTyb4AsphmJKZZqtaR67QVSXsLATi9vTbSfGqkmu54mP9WW5kYx5Lfk",
  "key7": "2sizqw4ukfjZUHb3iQEAz3KtnZ43BN6DpQmDTAaLCz2bizYNoKGpgtnbuXgNWtHdrKw6vTh3fA7fCNGEq7LX5rC2",
  "key8": "kU6Qjn3U5S71pfwRB1j1BsiDeAZp977vm4EgMwWvh2YwTLxnwauSZLbWtBE8AU7Dhj42uM2dMAk9ZAA7UEknM1F",
  "key9": "5AsqqFpXse3L8xagnafT5QJM5sa9CpQh5wz8PEfRjSiW69yc2RcwJyb78a7qbq6Q6xeLkK6LC8VNB5ARPEgDm1P8",
  "key10": "tdwmQom2vH2ADgooPPvMxbtxGkTzu9xTvsNtwpG4RjzcriTWFUVdc4w5r1Ew5Xcxc4Xq7XzcHi1xTM8NQx7ZkKM",
  "key11": "5wvgXx4QcQK26KdaVQEcroXY9ZnhMpXmAjvByPASoP7mS8UXgWo3zzALShbW7GNQBgat7XEasvUqQoSWWFyhgHHf",
  "key12": "5JiT8jG71ztEcUq18UQM2ngb44AbD6UqkhFkTisiQqo9P4R8vnoHYx3nSUaoZAGxhyV8U3RGYAMXarme6wGESHG8",
  "key13": "4jk95ZeWakRVTmocBscD8ACWw5qf62z8NMt8yR7C2ovssqaLVes6L3h4b475ne7DN8TLuTLmfTF7xEgWd6WM1tXx",
  "key14": "nvjEKENPy193pn9czCAtsKGhmygeAuRE1EYQVX7BX29NYHdMoBMCzcqQGwr5fL97hut98EtEm8mLrVthmP1qiL9",
  "key15": "3oAkms9dQSqE7D2dqjGaz9Bbcvg8FKjkqQbz2hoxfN32oLx265GcyHb6daytzm9bfBvGwvZs4ZhE844j9kDQtTJs",
  "key16": "2L5KojSAoeDxUAwhi1JubXfqBSH9q4AnDtuo53jLBj3pGmuVw4DnvcLww4g2rbj2XQHXHM3aeHe4KBZuUfzmXLto",
  "key17": "4iNKonSZfs8xgunrjLK4e4QDifkqtTxNEQ5Q9HWBF7iFWawPegmgdxr6Fm7ZKPFu69eSDGjiQ2jeDyPRDEdtdUjy",
  "key18": "PPzNi7wiKQTUs75SfkEDuaGRuGrdFdxmHNcjXTwEAYCmLcKhuAHMy9BYUQ4JT7HSzJQ4RDdQFiaJ71RMf2LrD3C",
  "key19": "Rr8E2Z8BabLxYpm67aXNJatnGU2fUV5UGmptQUDknxRZphPT8vrz9ZT2PaiCKzELxpMndw1mMHpdMiCtvW98mBo",
  "key20": "tHVmUo57tLzgdwSv2NhXuzppWVd8K5aFBPuWpYJgVSYhhjUECtnnE43WeRsXXmdaxdYSAb4KMUmM2n9Fn4viMmN",
  "key21": "4PxkmDxSYhzgZTPg7kExN5216nfJ9KYGvCkpr9GJ9KsdCzvtYJbngNJMdN4nY5B8vC5TKgL2MwbgyF4m1LQNQ9Lm",
  "key22": "3Yrzw9LcMHEPKFQDaJigZGfNbjbSisWX8B4wppMkd7qGk7FQ1axzL4jWuybKr7SizqX7nDUZ4YMS1Ep69DeWmYeP",
  "key23": "2Bv75ssZA41sPeGqSiQQKWFp7u1cWQCG2Tw25FvPTMRjKYk1cvZEKCzr6fgLjdNqYnS5F7wCriHLSAHELTpuqm6j",
  "key24": "5NHuWwtGW12yy3A7HM7iaYjdceX2rjYHjuZ6gZBpmnJ3hkuDTtr52h7yeygsgmmWiXH49LdvhFvdf2yj6qKvDH9Z",
  "key25": "2eZ8icqaQJVUtkariGesW5ChUYA1EXMspdY9mkQ5QWu5iu8ucJqckmiiWHJwzKbXmQ6YchgXSVDVsCTSojxKguzq",
  "key26": "5SBEoVexTPjxqyEY725HiRyegrgPNTvDxJKNxsFPBeujzsPEYt1LDUA9Qs9YF1A2KWZpF9UUTgRvPMhMr7Mbwo3m",
  "key27": "4r2k3LS5uwMnXymm99WSuAFaoiRzxwztmzi3RmNYWg9sqrdzrshu7RGTzrQKhd28LDH4mDjRJckU3rQjPsKsro7q",
  "key28": "2qbn2nyjiZd9sCBCV4tsE4jUGE9XTXbyw56p4YwuJCV3FiAU4PWuLirXSHvXnaveYz4C61yXz1cb4kvr5sk1wUpz",
  "key29": "4jc1W6UDnQdVG5pCB6ngvCfcsYN6VXCztkw27xnYjrC9NFU6Ai1gWkYsyY8ZEY25fFF9BPeXSPrmTymcrQACV2BH",
  "key30": "3ksmm5fqXXUSZGY6pa33dwyNeu5oZweSwXs4KpZUEbQUuDRi6W8yo1t9FsKg22os64uVjEwAv3pQsQqAu3SpYGH6",
  "key31": "moCRPHfR1nSrBDeZwTWPcGxTCazGNW3KMCmgsc6EbaUQtngwdrz7S3TCogk9wCcuzk4EUcAGr8WToRsVqDRay8M",
  "key32": "29AQQpBo34p71TU9wWwgeT55pV8TwxEoABUT4kvC14ep2RuKoD6LchwqQcYJjtSQ5QB9qiueU2epR6WJKmVMiEfJ",
  "key33": "eiQC3rzam3y97RDdWUJDbRqv4CTf5skAwAD2dwLyarfqvaiMENV8jCwwLmzdJ9Kvgzib3FyBC3n4YLdoJUzBXPv"
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
