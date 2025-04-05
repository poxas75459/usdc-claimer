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
    "5jthSNKtijGZPyzE2BPcHTDaguZdBjtJkL69qBkrPA2Aeugauf8gMheHySwRFd87kKGVJTwxibTR12RbPZa3vE6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YRz8cfhLHvyrR711oS3RcF7UUUR5MwcKCA2dhXJM8c5icAamaT8mYF6WMZodn6DoedRPuRUpAT3aqsueUx48KHQ",
  "key1": "zr2TTMnnXJ4bfMdAr3ELvmzCjLven1AryPSfQD3DqqNgUNdN2TpVTdVAZXHQYqVgDffnhxkeURJ9DaCVdn6DY7E",
  "key2": "4nChybuqZdEp1onM3o7eKnw3iffAz3NaEFgUxH7d35mxKY34UkN4LRj31YiL44DD5uURR6VFMX8JYtkXsSz6Qc6D",
  "key3": "4fT6kBLD8RDzouFXiHvqvNaJvbMYgKXtVHC52141YZUigQ4uHqaB6po5LAPzNZBXhnhZ32QZU2jUhPaWiSP9KsyN",
  "key4": "4BXtc38NhftQrZKMrfCCVVky2FTxhWVSHJpv2msHQBVD218eYQYYyDxTEDK7XcSsJKEjDvTkbBuALhYEqCRDPGMi",
  "key5": "cWdEHub7Fdi7FiT1priEWGYgaLSirKRKryjwH519NCjd2Bxp2z6DNLqLPYBHcZiCsKmeqJDKbZNhNGP9KJRBSaS",
  "key6": "2mjzu9zRRHw9dRzyU7pPA8r6FqGusRKt4gTbwj9ZRFYVXhrjj1FiijgiPvxYzcYvMV9DDyoTpLFHn6ikpD8i9KkX",
  "key7": "5zS9uZWBCfRNMUerSP9LJERbQeeiy7EXCuukbpQgdN8eDFgZfynmPBtTA8CiEL12b34syQewvGu9jREJfE1UUrcw",
  "key8": "P1NEaG8xk4BdoJLMVr2ogpabGoRjhMi4XWxQeVbVe7ZozSXx2bXGCMJJsGBpFhvZiioQdfE3afoLkeR4TgHizst",
  "key9": "2CRQDGzCy3mVaLnVrEaBsTkt6Ppo8Xbwv2jhJgYfNLoFWE9Xfw6EbvgPXZEnGVNHyCdQrTrFtnXjsxkZVhqVfo3F",
  "key10": "3Q4BueMuiZsVK9nyxi4r6oamLBYadPDfZYBXJsKBMzJPkBQh83HocdPS4TbPicUWiCpMVKRyLSk2ac7FPgZBncj9",
  "key11": "4ce3saMDpG89oRpTBFSfSt2xS9UyLXsL9fxv8sXAYVbU11urVx9dzs7N4NtcuxjMN69bHYwZkkeiRVRjKmQNyxtw",
  "key12": "yikMahtFhDUBqQ2MYsgpjJXjfkgvts9BMe8bCzg9q8fc7aRbALHq6nBfJ6GDiJdXjKuUAKe16euKxiTvnefwqbA",
  "key13": "2roqj3EukmeKhbPoUsQ6e6LKTEPsp7nHyN3Sjz2i8F4UJcyAH1a8Uwdzu5SMETkkyjXCJycu5rpfPhm5fG5kd227",
  "key14": "5Q5enUVDpErJ5n9NSEQhNqRrWXA5ks5YeHhN5p5RiV429A1w7KjBBa5NJT2676EB956F3Ppm9LTbEDELWCsjEwKg",
  "key15": "4e2MPJ4HLJgGNBUYLGQVNJMRmVzbnSyL5koymSp75jxBKu2Whnf7WZ8dtNHSZ5p5ZcoyM2Lee7sAXcLm6MDzst5B",
  "key16": "4dMiC9ETeAvhj1duitUgYRz1ewvUggSukkuPZvi4apguQ6BL47YxnLwt1d6xBtrHpjZSs99pqbS7ChQprGjv7JZA",
  "key17": "tC2y12HCmCMLC6hZtAfUpvh1mQoVv8nSZ3qQeM8CjM1hY3wFUCpP2aBsF3C9BjQP4X7Qt4NcLEttFZieQRBwF1x",
  "key18": "oDtEWbqTpuwzd925D9eWk1NXhMNbG7Xg96g9ECPT9aVkndybuJqr6c7E7V9MYb8nk4dHgu2AZaRc32Stafbx9Rr",
  "key19": "53MjhTY7szCpS8oJVAoAbUNhB7DHSUmyqN5mUo4qUHyMaUxcXaWe46VbpTXy9j4dMtXSmQdYWyTJPXEgG4p17dCX",
  "key20": "5U9okT8wDvmBPWrKhJjJn9Zkmuggn3GSK2iiKhi92xjTVryR2TDYNeJdMBFahWHTWky46XbaxDxZA5VDuPtxNfwU",
  "key21": "2wXsGpKi1mc6TAiqWkwKPTiCA89UwMWkQtpoMzVYAk55fxy9CRSLqpr55Ta6rieK7aknUhru2uE2CJdAf2GHv8SX",
  "key22": "2Uus4pXiozV8rVRwu8nLd21jmfWC7qfVUvrW7KLcTT9pcuUjn9mzmXqFcUH3eKkAr4ZFL2DTETDgAbHJZoRFriYn",
  "key23": "5KBQo1xz4gyZsoEXYRT4p51m28zu7dhYmo8Enw9MsAeV997Jt4M6bdTDAbGBPiiRwMTzSyHqnkPQGQhWGGFAPGeb",
  "key24": "5iA5HCxR44sAvWXbztQWVSqeXQTW3dDXGTxiyQ7NB1RTZRPXYrKYNiDcVqg41NiWZUSPSq2p9c6iLeunsAXUWuFE",
  "key25": "4SM5GRm22kLSkpmEbiGTYG8sa7fH1n9hDGQWsMoPgUhfbvcGzWFqV1VbXStNoHUABoga5rck5sCULGeu93reLbPA",
  "key26": "2riMWjA8FmjWJnEC1zN78cwFZg7QzL8VC3iwpDTvWHDMTtMRi1HcTjncWA2J4B4B3mosbQK3uwwJE8YRTnKe3GfK",
  "key27": "3fTF1RNByMsJid8udfyjRUMAHFcdwgcwBNLdzetHpxjX2M97BnkdYXWz6EX1VnZZLgCExUgqEiDRt45sa2i3bNc2",
  "key28": "5MCmn4Mv4EmPF8LKnuLSJ51fRzKPCPsXTTpQvdRRhbvpT3kQ9WLsAkPeZnAJU9Tibu1Eh4yLuHm1CPvYDGqnhk6Y",
  "key29": "UY2xeA78L6vBFhfMNMCdGm3outizNpMWWdNpbb6U35a4WeToyFcG5XsyqNL2Rf3M8szaSu9NQqYSTdDwHu2orSg",
  "key30": "3VudMbbMRqarhPijabDJNKNBHgxWHSa9fQvEVdbegd5K7iPmu9zBxFRZ1fpocYbhSbMnKJo1724sFd5bfZZTZdNG",
  "key31": "2nEGBuB4PxwRp5D9EfvQu7hNmi4GxiLMrnCL5i9MHA5Xy5GBAkwHEiSzLMpRCaBFLxN46zYfqJHqvYofcQ4BVApv",
  "key32": "2j4f57WX7dNUVY4aSZs8Yz3dMBmk8g7yWGcUZrAuqvHQrz3d5hndgoYHetNq2RPqycCdLxaBccrhNhsotBE4Le4Z",
  "key33": "HcRQPeoi2asXZshZ9vttPJYxZXoX8teN8KwubWJzQDNivvdPVb37nQNpGLpHxeB1zahCFv2daqbYPCR6MHwzann",
  "key34": "2JJX2emzG7Y5Pn9eWSiJnPmBcbqNmRVTHom6shRgf9W297qCL1Hv1BTaSSiVAdDdT5soNMUybjw8DLEVRuqrRXgM",
  "key35": "5Do7ynnYZKC51BwAUvZphmkzLQAAvyAKeaXD79oryh59LTgDZdM26Rp39yJ9SV1EoSwiS12bgjTJdB9hU4Em3hgx",
  "key36": "5dBPz7qw1CBiQJysDmiQsrLqrfEFtwZos7RoVQ8GePR9YAt7CL416Tnz5YX38EqznkvYtntseQ63EQK7MpgaqGqa",
  "key37": "3pcJ6y3dvPNhfX7BiD7poZDEErxpVw7hePUsrZinBgkG13BUr5oaAoJjdsbr1apAXcJckT7Ucn1dTcRTQDwZyWQS",
  "key38": "2DUTbN2Amw3g5kdfiFz2ku1v7CcZ623X8TRqeZvGcTWD1xCzQYNi87KAe3UAumcC1tUGhjK9vKQEhHAfYjxTcojP",
  "key39": "5sSxVTqbVfWcr5ZNR8TEvN8477PWRGkHsoK9JEkY7Va6DhvSe6daNhifotipJ2rCDc96kSUWL5ZcN5z7Ee3zMu8M",
  "key40": "58F5ux78tTkpMC57xJCEp7b959FHxyzVxeSpEbzwjTr72rFEp6cjaHvnDEgHkPwcvPq8aBAu3mD3iwNvjWDJ12PP",
  "key41": "2MosL588T3hmTVBFycaZ5H8HZCgSZrFzYLjmLJKCM9Vndyhhi1FZkSmmtBioXegfe5aYQTFDBxkMpDxTKMmYLT4v",
  "key42": "39CwRoenDLNFCQjHGwA6zenqNHV4Evhybk8fCb6bK2nWa8tQ4YFtYRuoHeoKhLajLAy94u8bhCtDGLh34vSBi2YX",
  "key43": "8wuENYchEEiA4hR5LM1pwHAX6nModpY3KGsRrR4vTTSrhRn9RXpYun2v6PUnXnEMBiJDzLik7DKVprb5q6tkBXk"
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
