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
    "45Loy49o1EAT8Fh5GYQi2EP7rEQBt5m2ZM4g8iy5W5ozkzEZu6vTtU4CoJ8kryPYKvbJ5rUcpdbHeGdC1WNK9jQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24wJ2mjm6MnWbwgLoboeoW9K46i56SWvsrzcGXrnK1nkVegfBoJ8t6JZNPun657x7GBi52a5acBE6SPg6hSFFbnq",
  "key1": "4Gbfacc7WTEpX6KpsRpCV2nS2kWV7JgQGGXcj75zikRPxZxk1xQ1rgMT1oeY7y2Tyx4cQuy3DWSTvHysMQuPCTcM",
  "key2": "4pWgoheJxgE8WkPhvFTg2mhfCKVb69J7tazphsW7GJ4cZz1n7tyEdSrsuTQyFjBaiFzjfbqScWD8Rmz8XfSJhchz",
  "key3": "33b4woEJGZQm6vCTnbCecV9w579gZRbDcTyJChzjSuApo1LA4Uxku6qwbSQbbF7bGG2gk3BwcauNXHtsQ4psQwjt",
  "key4": "2QreANrgrL7j3W6rS6GrK84hYx2FZ1vbXmmAWTUPvRLKkHpYzQj4kcKSTmwdqbaiUAdvZ4mE71LFsBKYqjb62MrC",
  "key5": "3cWf1BSxJ4LjF2MuWjNANzZMkvmKFBQzvWouEgBSYTTJUynutxdPoRs1LwNZzQ3yJbCxKszuRQEPYqVJiKWRyqwJ",
  "key6": "5AZaE4kL1UJkvDQfwuCqfFMr2tVHnFjdfgXgftmkkDze5G8udE6wjWDnimKuUCu1bSJtdeikbwiW2ggdpRquDPmg",
  "key7": "stzL21dmPCPX26WxyMeAzKJYdNSQXNDhdFKLW7t18Bj3zFozNySw9x39aNeSBKDvqqZ6kC3tEpG8p4j8HWKNHbZ",
  "key8": "5kESyoCbyyJhiWcNoZmuKJAKaRvZkJWPz6guMJfBTRzZmS6pq74hg45DmXprMEgMMupdMWu1dQjEuHVQwRg7WBoQ",
  "key9": "MREotpyboY65a3cEV9QkFHrh7SA7CWqhntTs7mmqH7hzqrck6i63E16KPJsPN3itcDznbDPsQQ31axzicjTkHer",
  "key10": "GPXmGoR8t8RAWbv84ySnFzceKAiHtRQbeBGzizvSL9x7Q7AkQSzH5EnvPiMhByQ38ugvPLkFnkbvzziRjNUQB3T",
  "key11": "4d3ZZ69fhPMAESsVLR7gidvE1fW8DBBak29yuCFtzMMSpJ2THMhDensbCV4HU273KuPoPEVKcyHQYb1mZvTUfREw",
  "key12": "3uSo6QgXugeJ9zeLeWGhGx66tUe4gbkPJBjzcCsSTLPG2FeyjnvRQnJYYen2cdsHek7qMqSjS3j1Uhonr68CXRYy",
  "key13": "3MM1gLdwKBHwFKtiwcT2FMG8qYqiMq4cPmsNSontGuLN97Yww6QcY6i9wiyWH3aF1VEy6Qwj4DCmXxisYrpsnwUv",
  "key14": "3qpQfT2rWrj3EM2B7E7F3ciCJR1ktJ5qUzHB8NwQA1H6BryXeox8BScDW1tJtGoMx4dfZtH9AMXLL6Mr2cUubcHQ",
  "key15": "5gZs5tV7bPYodX5spX73qeEfiGV4KPD1zta8s3N3YxjYCXnGjXFJ2zmTXirmtt8VmC8JcGE2npe7LrVvyTnkNWTv",
  "key16": "5WTj8N7kGPbBZQ2UbLND6Wvgv2hYvJgqgP3Z8UMxRCVFx9Jp6B1ojf2bxSmwZacgMN7WdCm1cEAZRENgsy51Reuv",
  "key17": "5p9DKFNqMiLduyvFjFL9h5UipV7tpGU11cPesCy8Tgd9JvsHM8nax7Z2mboz8WNVz3is1wey7Rmr2ezSgHvNw4qz",
  "key18": "dTgwoBRHoCZfU3PoTgwm42s9f8dHrMVhxsM8kcEdQD9ppuBJSrh1yjGYvneAPaRwMPqm6TungFLLA6csTNhUBrX",
  "key19": "4VvbetZRmm4CMK3euawbYsyYQzUxm7Cpsj8WbVKtHEvRoAFwwxq55twhLPocjyYJTs6ArAn5gPRgweSVtyHgsDw",
  "key20": "GnUD3bxpvtVStt3oRnHPffjx6UDvkBEpkM1ChGXLu1ztLxMgKioqUxAeMLQRwA6Fr5S7aaZ8KXbhCA78aKijaer",
  "key21": "4kK3zbtp3KHeQX7mPFNnsu6Xsn1vCoWNnx12gxRQJfgGiBFze6KXTxMXPB1XXAkn6WiGVkc1wFWhMsXgbAJsz2V9",
  "key22": "39HHruRNmq6SX9L32BTxHz1za2FaifFAGdFZWPRzRegqoo44vyy56DfTjSjcrzLGtA9a9xupKbGGXYg2eKm2njKh",
  "key23": "5mde8X8qhLBvKi8GWum1sw6fjZnNX3Hzu1sH2BduYCvGrbwzZhwKwvBiJuLHvipRzTCZQF5NRdXVTMDdzivWbKuW",
  "key24": "3P93avada41kk6uoMJw1wqiyviwiPYADqvA3U3ZSgoS6YhMkAuyysTYHz52JQjJcCCo5Bv8FdwnknpUM45uqqiCN",
  "key25": "6yWzApuQecysvJ3DdviPgCtqHi87ck21YLeKzyRwSw4RymJ7FhY2Ktm2kFYzjGYwUtA79J9qG1tjFT2pmoAjcur",
  "key26": "41SB6A91MMF6rxRANDBaCXdaiFNaU916Rs9QVre84guz7N2WnXU5ekAFEfYqj9Ve8YbALcrxJztH1ouabQMuttVD",
  "key27": "25PUG7iNQ6CuEUQRsLknstdztB2n6r1TjPh4qVBcxFsRdmkfTuS2mmTzmysA5Lb2j67JRy5dHYxN93uxhar6pfYs",
  "key28": "3nksvfPn1rpxLP5v8jVKW3obJFh5W2pmhTTTzz33ZWWHdS9AiZ5DRQQJbBKuspPMLt3CrLY2XZqNQs1zeyYis4XA",
  "key29": "5DQN7gy9pM2EVaE4Xch8taPchDSpnP1qk7C6cZXAb4yeaDDu8AgquCxDEZmi3YidaYF61uwx8F92PvZeg9JG1DTr",
  "key30": "2bGyU1nmrwb1iCquvBYt8jYPEi2ZDAx8euNSpC53TkhRmR84cgWDVyJy9XVYgNWjx6Kt4ULSvAgdxJE7oAm3Yvfz",
  "key31": "4Nk7jrCw7tuCUPtjwQjPgLquTGie2kcNsSP6p4q5UEZkh53ML3eW9hN9mT5aG8sro93woF1M5RpdSzXeZiSBGWj",
  "key32": "3UDGQTkPbnhJhjrn4WBL9QsCjzagHFnYLYHqdoPKMMvPawjUqGF9edBdAaX7iLf5z4hTL4FyPvyV981szozQJzbj",
  "key33": "7v3m5emjLm3mR1LJnu9qANc5QF3q64DK2qDyHe2HtRs22jWdfp5kKuxnVWEes5imaeFRATmW5c11PVVxuZEhJ1y",
  "key34": "44WkHRe6fjv32J6drvc2fNLsem7aPeir2K6knqLD8kZjcp6JjRYYjTor8pF81qKFAh7yo52Ff9aGvkW2erSG1RTM",
  "key35": "xcpgbTYdkXy5kDBAnw6zkoWxpFDRD7C8nPM3ZMBnNat5HwqN9uzCZVm8RTwBNmnyyzgmyAvcywrdkAWTDXjGNXq",
  "key36": "E8HYVB82FK1TWRWtF6SvezgyfGUktYcjFsygY4h17rJY5ooVGeGt9DgHyL913ModCokkb8wVYsQzPEBpXpgufw6",
  "key37": "4cFe8xASMUWnqZeyRXQVfsGPnZnTEsYbARhdKCuLn9N2jNHesKghhYSs1n2CVDUbNQ6dEeD5NkCvs9SFPa8FgbZi",
  "key38": "hqVQphwVKdA24x877hv9eVDiDk6we9WPgpfe2E1WFvUuyZV3nnkjSKVMagphcy64Yj1Cv16sbxcJA2yADru2qQE",
  "key39": "558agVbzBVLTq4A3y6Yk5q2JWhA2iqRc46vjYQqkPCobxW98MV8W7WhHdYA4kVYepXz26HuJ2xy75sPkZvHpBmGk",
  "key40": "4FA3f7cgiupNN279oNKR28qU7Yxu2pCFC2dqmkFn9P2cYzY8hhjaYBXjC3HMB8SnPVwDv5eUqKq71HqNwCZVBo5x",
  "key41": "3ZAfszBdjHNE6mK9YTLnxMtn5FnNFCGohe7RFDDdNzzSfyNs1y4xqrcXCUbjVaf4Qg3RvoDMW7WnE1w5Lx763XfQ",
  "key42": "fb6n9XiyyAXHgr3Xqsi3iXkr8FnQvfWN4158zqG59fVutEkfHULfhoTQJCjk5hTng6wyEgPLKDLA4LnRG8weWq6",
  "key43": "2Pz81KKShFZd6bVCmPbCKeNh8wHZ1NQgCqXJiwbh3G8puKgxzKRwm1GRNJHncVk68h9GiwpppYGivfmeZZJ3uHh1",
  "key44": "5839jDG6Sr4DC4YCjR3i9hKS7pnyboppRa9rubJq7xsHdUKseMWdJUUdEocVxH35yt2i8fWqr7PaDmrJeLP8jRBL",
  "key45": "5A6EFJt9k2pP4czAXUZF3GxR7JM5iquuCu1VhFJ88sZgwnKSyngnts9BJV51BXmMPz8hRaG7wCut5zRbUeQxNj8k",
  "key46": "2Loa5nsHGcSA57bsnLyqDHbFd7QWsXQyKk71e2QBaP3oExdVfzo1yJRPSru3HQcADtk3QCSdxdoku6JY1zh6LN8f",
  "key47": "2GGd22DzvPX1pKy65iHxAdyQtw9C62dygBr1CZuw8SRbZPdcKMkjon7NFiNzQeCD6r3Fw5QQ6T8TQuY4Z6xJfttE",
  "key48": "51rGvXkm1eE56F7nJTrg8c4w7CRrtXoBFnTAiFxFAa6oAjt432SNTrHeQUBnrpYZgzoEzn5ZGEVu7kbUGFuxGh4C",
  "key49": "wR8LP6gqSHUXAyTKzANuMdeEn4UpWiehPxNegMYG55pAdPVJBESuHPEYqu5DDySMdeiMK3moZVqApWDPThGKRMU"
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
