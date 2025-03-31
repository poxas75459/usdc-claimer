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
    "2rNBmWAi2KFZ4nFWoQp46JVubMZXXGqm9F4DQJXmnJz3uvM4x99NkEYVxXt7nxip4qQSq8RZEqZtzbdx9bVQGSas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y8E7NCva5KsT6rcQtA2sZmiuSMrwKLR1Feb1i7cSFrhXc4Kat3M8yak9DiXDvu7LrX5YeVJSuknmUUbVUrLUPGF",
  "key1": "2fXNRCqXtyXqyB1ZbBEMBKZGA96XgN8fQc8D7H9kW9Xj7YhZhf3i5kGvV9utgdrUA7qmvX7fr4T74DVkjxtoo9RP",
  "key2": "oJfCJ4gJVjWKA2yYAVPZ9kCJ792KnLrq4PgjxswUPVoPNyBEJ78aHwWK34mUPrqYzubUX5DST5yM6RtYNpQFGiZ",
  "key3": "4FsqaLaGjSMLbaasveXBoos3QCK2D6RK9mYUxWJe8UUMWTmZwPcGyvfud3Q89BWR8z4SKS5NUh1BsNivZePbkqXQ",
  "key4": "wmP363y91GZ81gHpXa4dQS6YEzquBWUBCujm4yoXpzCthPwP6UD2APZ1iF355LdXoR9aaHnkUPVP7p6Wd7rdqge",
  "key5": "4g4xJb1GAmfR9YxFv43w5ibhh9tnBPv8GHXme8X3dWqafr56tKDk4dayjwtzHk8SRziKvayZ3n8JNiPkjpgj3rXc",
  "key6": "35t7NAjowB5M9ovsvaZj6VVmH1zcQPdwz3x31is5Y7kQXHe8E9QRK61mwRjYgdz6YZCrjTrbwpof4k3wqwcqis1z",
  "key7": "4Q1Y2MsvwppxEBZFSj7KXw31Uaj4iziJQQobMXPsfPmDG5S9xZvjcEqPRcFKxByDphvypUH944CJHzEnutajzoAE",
  "key8": "5htwYFRqE9ghA597dDC2zF9mVVJrV4uqXdYVsMnDfaLTPSVV6ArZowMgjAVfPePhu9xjsKnPtoMRuNSde9EeTJn7",
  "key9": "2UFrsg5e7pd4GsyWMdQutZ3MdtzYmFHeVmkU5Je8H7PVCUPg9Xk5k58X5kijzDfem7YmZuoaprfPsR4D1FQVt5aH",
  "key10": "4aGNh5kJbs4EGVXsY8zbcQaV1wW3bz7JfCwfVicLiZ8F3RnnrP68xB1zC8DXdFPCcACoVuuFzipXiRsY2Q3UU67o",
  "key11": "2LNUhYps36BanR8i799y5NJ8upohnBHiBk12ENpVRKcrXWR9B42FUsH6PvF8ND7VXcMKhEjRYzC8BNLhzZbsAWoH",
  "key12": "4NVWgxRDPhyYUrpMZ86Cswg5NW8N6A9jKKHNDAB3fp4qbcXJoEdj4phfsJJnU1WxpEbQs8PDpUxYNTPEGotVtHci",
  "key13": "LPZygGWHh7KNtWYfZvYEeXibN3BSE55gtuCy32iMp33PPgeu2HdGxoon3ovU7Ngh5Q23vAFfXUimR1waQuZcwbd",
  "key14": "4j4wmJtN7GUworyFHvrN1pkxSG7g7Zz1tUfRsNfCYrJRPzY3DVjQQoG5Bc3En6Xk6F6k7FU1K958FCrqb99hd2Wn",
  "key15": "26PB3cLPKRRXx3gKFyBefqqdozP48BSSUxBNg3rzFVEihPZAJ6d9GfZRUKR8gdjJaFQ47X2XaCUv4XjC1Xin7pvB",
  "key16": "2yfDWtwfomkAZaTeUFsTPYQGM1vu3gEPGgYYQ4JUqs2Qnj7RafpRwv8jScgkKBWZSLeryUebHTp38RYqs886C4UJ",
  "key17": "2kvjF9gavcWr5ZgzCgTtsrebUxPLSFSuHpsnHBxd6L6uh8AWFxFHmeCCRLGSmarskmHRbKHbtyZ5DCeD3cESvMHo",
  "key18": "4B5GAfEWpX5uwrBwM2BYUEzvHCC5E3U9WnXnVTp2M9bXAhmaRhDdMLYrUXDrTkcDbKBoxdmqukZdMfHmd1cLsA7t",
  "key19": "5iNtmzbJGtwji8iBqsEL3hXC32CcZjA4BEjS15ixEE7SwpKg4CnbKzBwscAg4UPPgE77WAjYcutW3CDANef1wktJ",
  "key20": "3YuKH3Q9VaMjpc3cjtHu4zLxADH5SzPJ9ngoUxqczZZ9yn6wGjYEwhw3s5nUSnRcB7gMzgoQJssdeEh1gsegiyLr",
  "key21": "pk6VawPEPsiL93m58SJZoiYxshEUjfVqSS1EpR62TCVLCSi6Myngm1tAsxNdWb8whdqmf2tuk4oYKB3DJxdSpxT",
  "key22": "433qSz7XAfihfJ1Vwd6n8SbceLcHRVsENjoPG383wGd6FzPBYW2exa7KBBzj8Ekuj6gfU4iykf4YXq2Wzw1w6Y6R",
  "key23": "4r8gZKe98BRs8fVfrvNLWmiQTGYDuvY14zGJbgT6FYHuvDzzJjUPaweT1kKjJFCcdCDFdooPovUGDK8KidneXT1e",
  "key24": "4aE3ngtx1RF5JwJNubn354MPftHepyK4K78bmH4DBzx3BLJVpPhg69Rv5rxFnnNvfuVUHG62fUdHD4KEy6yveq6q",
  "key25": "3vPecmgD7GMSo5LXXC1LcdAiCesDd615XdCBKHWKo58fzCEFgrc22mQFSSTM9o9RyUivpr3GWJpay2pV7s6p59Bg",
  "key26": "RN2dq7ouXUd1TCQpdWy9DS4o9hqxEwAk7wXuVp1s1XMRyYjXqacm4hKDjEdtPcxz7S1mjH6g6L51Au4FztEiJxg",
  "key27": "juRFdyd6onTEkzDHmyWzoovHK6b7CaThWVZmDE5CUP8bjcEsGgXH8uegQVXvmbE6ZhmFrwVmRehAqKitdHwvy8K",
  "key28": "xH7Hyab21AodjQ1v1vqU4y6uJmef8MJJvH5mSE9eAP4t8uth8V3N1ssX437z5zMKqknUBmP9qgBaCLcvGsGtZ3K",
  "key29": "2NvN1H3vinrY59YpwTh1zaX1pkCnrbeJd5gVqv9wXZJpCjvjvH4RkwqXUUXyGBZwkajcFwBu671epMUVjSCFJ6tZ",
  "key30": "5cMsNUaWyNxGNB4QTmjW34NTqmziVGRa83ob46RSjR6nXVQhF1MbcfYHp3sThtYjUvxhPgPuFYyzMwdsMKVVRVwP",
  "key31": "3yrRvmsfa7kE3vbGMtoEtPfx67mpxjKRp5qeqjA88tCrakEbMD7GCz92gyZiTTHqqgiq3qLwdML4dsC7MT8ft4w7",
  "key32": "5KSExNxRZKcjcg3tLUNr8TA9U9MRUHdrkX9neyAaJmRtgDPtDvmRj9kDmubRJkibih3BXGNHvDo2orPvzxoyugqp",
  "key33": "2dhU3D7C4Chni7mx8VAYTwfpk9d92rMnVSy7hRuMCXm5qy22mJyEc5z8ZiW5zd1seCXFd5gLFzwVRytB6EGNiKv7",
  "key34": "4o7JsG3k2CfYYK1vsp4cPicskzPUkzDmeja8wwrWfvwYNwtQmkqoc3tfY1FWGeLb2Gv79GhwcDxiwCe767Pb1w6P",
  "key35": "2kkkDGJmkkgbY49goqjvVnRtP256h46upsthLwxCMP3U2EyMeaqFLAWABjempE61DK6u2uKNrjyc59FBVA1BfLkL",
  "key36": "n9Rfwyse5mQ8AN1PrgQGTC3yPHU8o14FBuHzXyLHqEFLCBqY3N9HEQdKbxxy6Mk2wKExhfiXXEp9YrEATzaf7Uv",
  "key37": "3mRfETLNG3mq7MYBNcp18BuJHUnmYxa14Rqsw2jhkDbhRg9mNgTwJJpHGcrJpqaogswED4a8kHRT6SPAxWrVLhJX",
  "key38": "TJvGKK1Le7fijWnDB5qNn1kuExTWKtpubc3gzcBhXt7QPS4yi1mNA8aVJPwj4pbSwrZFWCiURn3bh2zV9bPWP1R",
  "key39": "3PYmyxt7P2d4b5ToNxaivoLrrAYKaXaQ8qmPwhGPe53ChbAYgSpyi2Hbsa64eBL56kUERiRu6NmY5b4kDnaUeYR9",
  "key40": "4RaA7XrwjMCWunKKxwaVEdbvCTjQiZXNRkL6bkrPgBYrTuDk4Uy9HYQ3KBMUc6WkgpjeMiaLnufLDYBWhuUUEvFr",
  "key41": "5faNhc1i5ru1EtbyMJ4JGj4o6Cyn2bWdp8sjRpFqJfZH8CUX4rGPgGwBBfby7i11ecG5VE3BBgMS4wMzY3ZHxt6s",
  "key42": "5NPoAmz2fqVhL2saYFQqassaw8VcJegYwp58z71acBVg1ws9bM5FxgBhhA3AhJdiFCmNHKYyUCbCeeJ1uo2Uz3H5",
  "key43": "QYFfDPd2KrSLZKvfAWCFHWghLwnrv2RtBNeGm3Z6D3X22sRNh77h7EPcD6mHoVzX7VZG66FVkyXjeKCA95Ttzde",
  "key44": "4dXJUQbjSZDxh7VG3meDz1tzdJHAwt7VpcbQZon9azfzpGd3qB7ozUc6TTkwt5bBtvtu6rYJois5zWbyV4TnD7po",
  "key45": "39mbTCRAUv2nMRMWkvJJhAmGD9QZ8khPqoe3FDqX6vbicXbhKqeLMNGgFweTfceD3QUbhV2MtU7rhg5biZfv2XmN",
  "key46": "4wD1G9czTDr1Xd2Jg4z1RN27HJWBX2CM1HswqMyM4yjU8UUnKNDXNU96LHP56fMcoZW3kshZ6xrcsDJDEQhD8HH6",
  "key47": "53pAVY1UK93LULo2YGZdQttRaUePjyzyYqVCTx85ZWmjUrS36grE5GuAfr4sRdrQfw9PCNTy6FHoDUWJ9L9cEgFR",
  "key48": "QoTjyVPgrQ9AMrd3sxnbfWfsaRRPLWuxaXZdU9yoYVM96DuLh3aU44ZExhrPtpaM2UeATQiU4vBWf91QotcXCh4",
  "key49": "4is7WEKDwyDQCSkWSWyVPEfyoaDmy6mxfPMUfV3WvnLjrB5VumWRp8TXuBwM8JuXAKQ2BicBYTmEnzJCSAUXJU9s"
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
