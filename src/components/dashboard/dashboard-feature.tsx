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
    "ztaSQxipHAJ6BjgEMs5BTMvAY6pyKy5owQ9fQPRqV7Ri8QZonJrdfbtiw1e8gksqtVDzZsTzbszF8AKgVrWxrpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iUmtM63T3ABwgs6VcdWFM3aQdtrR5c3omhVhU4zTYLBVDdYoCPTVqQ6Zh8ZADZjwtSo1gQfsyytHYXSPkWD4n5F",
  "key1": "T7yUA1EpW73jeNtiSxLCE934HPQoc2yZ8DU3gPsamPuzPrmW23HfaaFokn5ddM2UMPwdk5Xmk8cm4yV9AwuPjBG",
  "key2": "5r7Z6V63cWgHrLLe9btY6niax3z51vE2ASgbmjRq1haWaxFRciSaYnzu7gzkw9uTWnwDSwVz1cmGFjCih8EZoPuB",
  "key3": "254ea6UEfY4QYdA3AuDgc4kboPPQmYJ9BSQRHJweR8K1uFZKTW9VcFaszz71BV4vdkiuhiHh9tj8VERrGMipu6Zr",
  "key4": "6pU1juAeycitbicrFujrzNvhmUmyHdaee9tCwbM915TQFJeDm6DWv1VTcdKHtZ9eNwXNJuvuKACGn5BuubrSBXw",
  "key5": "LUP4XDcTsVTqEnegju9kYiPp87PsFFekA2osfyrt6KT2tRhSiyPabNQjJ1twCziBCPhwVvrh6rCqTR3guNcGvFz",
  "key6": "52mnHQS2z5xqHiZPjU41jNQpARNDLQEHwrSnMgm1ToaAfNQy848QDsYe8jF8HcRFhJuiMPnuRPgdutpyxpSc3AL1",
  "key7": "3y63QNRELqmSoLH6HokkmZn8VPunHqX3U5tPGJkWtLbFjDNBkuZXZxys4sA7qDzkF6GXhRvqD1yAsCwZVksJQ4bm",
  "key8": "2EvCKk4KLigLGP2FC2LRsG4agYSNTZaki3cLSHaxHUsK89umjAWNFiiZfH4MoMjC9p6zNruemsrnLRQqWZXkF6fp",
  "key9": "2truDoCUfWaQzqG7TGQC6F5apusN86rUatCgtUYoM3ANpgo5gPnDXWsTZ41xyqeraUmy2dBsaJRedJ5RyNksBxdW",
  "key10": "3W5qEsBFgdbkXJT489kRyy1KiBGLpAGcCNsjSgmLgqmQvQFTYd6dffsPGrhmUPWjhbSVB8vkNbvEKiXu8tAXV2vb",
  "key11": "3x5YpJjL7Jod5C3HagzjN2y3bW4i55fnuVmzH2KuJUZ5P3fXiQzNBtQSCfVy2rMm1EGRBQU6nUiKcLdWERYhjQ3t",
  "key12": "5bWxhMLXwuSXvMcrVho8JpQCWVMWdoY41gmRHMEVXzkGPcbgCG49AC8GYGrmaHWeEFYYcTAJGi4ZmJWAPWSEdxDb",
  "key13": "2yyYtaCASSP2ayDtJXddMt38W9Ko7Q6yfN7vC4BguptHfYM6inwGYJoRLpZDr8B31K2YkRTbzc8r2NhLz1HYStWj",
  "key14": "3BbwzyXFMDQnjPkZZQPZ4qTWDxEMSVsbYJw1VH1DzmktQWNBmT6wp7P3RQJHeFYmHcMJtog2DyP9fNuh5pM8ZZP8",
  "key15": "2qCc9zF9a7o4zRBKpWhQd88P7pWeBcfqoBNKr2u4WPsHAj42Ep8a6DM7aU3c7T4jXJyseEaeA3DbhuEA1PeUJ7wb",
  "key16": "4ctGmesceANDdkbrx2YZHkXaiJFgbUdr3v7yL3hysf7LeTLGMEXnUmvNL9qozaUsPxfUm3jKrqcD5jpZidUStwrU",
  "key17": "4XxJi57oTLu7zRswtwiAZyHp8WKM2UpgMM3tc8tFzJjRKJeadX32j3RBZ3g8jvrcCca3rYGnKnCAbix66rA9KNJT",
  "key18": "2hmySfwnb8rFiyxd1P98gKhfDG65VeBwLsEJmkJ4BPTHqH4LHcCPMV3JtuThHbqxtutiXBZL3f3t2ny19bH7YVHi",
  "key19": "4PTyZjDm7wo3wg9iACVZtuRXP5YZXSRnizxdWxbNbmVzzmBKMAhLqKRakyCHZnh2sw7UPLmN5TyZmtFKZLyVYL3H",
  "key20": "yL1D8dDX4VcVa927tACFJvT2LwLVauFKhS6fRjBkwQeG5yYF8puSwSXecQjUZQUpcR1m9fsGU8FeXpNtSXQWoZH",
  "key21": "31teHNGu77Yj6FhALWFY4XdFcTJNSGvtSZonRFhFnsZpH9yjA9hn7iLdgW1GyygmLMbQzdcwJb1Y4b82NxckMvM6",
  "key22": "5bjp331Ye36ke16NhkET2M24WwWURJMNWKphCEb4muWxJmnCgx3j1LmeTBGzU2gS4w8AMB7gd6hxWWxJXwbMRMyq",
  "key23": "47gtcgay7jciEnNZCCj4UMW5ZGm1rTiPUsP2nV2tecG2KcERNWC4aGYChDvmY6sYFu62pL6CxpCbde4KYHsCqdWH",
  "key24": "36RAV8uVYSNqGyZuq7szNL6iqYy7HEwisgopCxwNkDKuuv3nKhWJ25t59hTY7YNxHtJf6k7eygWGKW2JpUW7SnKp",
  "key25": "3uDtvEnUfaRD9P3oXLqxAviXGq5qBGFcprBYwEowMFBJwnLsVN1Hqm9noPVxsJ7283W2xmsrBg9XfYuuEUTdMYVy",
  "key26": "42RAq7sPyFbgxsDzjerUxonAejLVYSgwiEQgKZ6EoAMn2FKzdjd53ES2Do82bT3R8vQXudtKAy1hiGnmzEWxse1B",
  "key27": "21AVvDo7ozYwxr3AHkoumHCCXVAdZEFQq6qFAcp8p7YW7dg7CNUoTHsw9ZeNk8NSeQY6fZWSuMd1MejFjst3ama6",
  "key28": "5xCoS5JgRTwFi5Mc4PcSPGkEsxXLZ4882w6Y2d5Q5r2k83QnmJanduedv9bAErcZWrD1kSumuHPNL26E7BesJXSA",
  "key29": "3fGDN4LZfbCc8SCEMkX9xwb8oRCKmkKkLeGVVFr7CbbrHhv3e4htpWchKmwZtrh2SLbY3DW5p451fyZYeFzpd1r5",
  "key30": "nBWs3LPjrchchpqAbYBKqAa64USKnE1XuHNCRbbqoyfsi8AM4JSQzyJwmRrh4RN2Nkzphu45Hvv19bd4ezaHFEA",
  "key31": "3CSeQn4pB98FKXqn7fRFw9LwkK1UpQw6HaFTaF7wW8dRVR5ban7azxJyyDaJHjSBkGkcGhXnWkHt5fRGPsy6FzbA",
  "key32": "59ejM2YojSEhBtV2cKH6cYJVJuE4ZukviUPd6AFKVCh3f6VZLZwzy1E43GFaPBVjan3VHDZqeqnw2upXVxJFZsKh",
  "key33": "59CpQcAYXwEDMuBSXf2NPq3vye84KEnUbUA9dBxtqAdEAXFvsVtdJnycVwDzLuttUCpyEzeyKPdhTbq6wkTwbc9a",
  "key34": "4o5DUELpZJSAqzwrW9S2faFkrEYBawkbVCPmWs6GCBEtJCJuxzYtDwYGFyjKEVTqkAidwoJ47MwRdX6Y4ZDTx7Vb",
  "key35": "3oSR3mfpKkBT5MMMF5wCycCWj618eBDNDtvakuQYMDb5BAwTftEEgXiNzyZGbxzu2WtrMxwKmSf2J5hpKv9h8hyS",
  "key36": "46MJGHk8VYsbWxzZFDTSYdCL8CJUqv8h5yahKtyuX9rBnjZsZaQeFuoLHuwR9fBf41uja8PDUXESXiCLq22ZR11x",
  "key37": "4jzKMeBaeqXybQtBU3eiHj9dSp4Rs8Y6fbidNoFmi5QgdCxA1MfiGw5NjquoU6khHrFLZyTbyZGNEbdDeZZMU7Lo",
  "key38": "3kS784chNVWy3ocmfRU8vALhS95AhT37MATcdHPwF1xiqGX2F6M1Ao3y6vwdtGbgLBynRqZabMRWvxitVdgzZzb2",
  "key39": "3bViwA8Lq5WBUWmptouJJAEbpBuZbkKyLpwrtNScxuDS4aw4NhFDGd2Ybf2fq8pfXfNFDLAXyWC6BSNHK5dVTW4D",
  "key40": "2dsuU3hXRmM8UJiwrJkJu2Va6wy8ML2ZrS4kZSWGEEGxN5YpGzwpaVkJuXgj3NUu6QjrD9HofcyeBm8hUwzdnWsE",
  "key41": "5QtPDSNZUgCJ3aUr8A1KbsBCF8Lsho2kzDDsTksDeKTmubUGHPsfE3qTnCiJbiEHr8HHVx1RFx8ioeuUEBCEJX1B"
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
