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
    "3okTFS5UWgEev9ZxGxM2EobsmbCd24n3umWYcjacue2aP2DFH7PUiuDNucF45FFibbym8iHNgTXjk7bkiuH5EG3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zBR5Cr8vhD1FTYKRKQiebwrEN5WzVWShEciSLDWychrFU4oXShFYcwFBPk993qqEDDK9GtZ2X5urrToCTSEZSxV",
  "key1": "5TDLuoZrSC3ZAp8FJeAc2wkNmP6u7YMJne61JUs5TF945KRxDd2J5ub2jxfLHpFBmpSWeuBhekH853YwsvLsaqLC",
  "key2": "4N7hvAxoMqPi6uG7mopkcRffALvQLKr21FjwUDGunEPhx5eiT3BsvZBNqp92sXTpXDpQ8YpZk572eVpeCaYZ2eY5",
  "key3": "RQiEH7AHF7X1gxj9KuokKm6FzyTTkXHGsUy8yuiFyWaYz86j8z4samQFsjTCjpJjy3niELFck2bMqLQM2Ss3ZTJ",
  "key4": "3qFuC8ZLQD31k7yERmxzcJuZEXDKFsi3WpcinUBM1TMyddGmMxiFzo9DXg3CpuhwTQqkCzyao5mTtETRhR5g1gXt",
  "key5": "5haaJJmsuAWoNuFKferTpnfPdUEqHxJYfYDM2j3tyKGdCceVG6JaTt4Dem59NUr3Xh9oYL5DS1w4VDmsqcXfiXgp",
  "key6": "3mm8Hs9xWpsghXjAdpCCM318rDca6Jh6eNZybTYYevdhvoty9AuYB5wsz69tcbrJpq8Sqq364H6P7dieke4Jdb7G",
  "key7": "2WiTpBcsZAGDkLEe9vt6S7TchhSWhe8AnfGNGy5GhoRfFBTL8e5Y2v3PhAkVXdaDBsr2au4SktcETiQSmgYBULD",
  "key8": "2vMezSXzs3djSk3fRYZyTpeDcf4bCg83j7ph1QwgSbqvGQZHj5Csgysf9sKJyxP79waDQwPoyiqHRLx9cdVbthDM",
  "key9": "2sV6384hS3NMEwwkgdcxKRq3gVpk8eCptdJcy8LjSo3GxCvTvcRtmDLsT5b5XFH79yDJ1VebNujkejaGB7bNVVr7",
  "key10": "32m7sqtPopraWXQqp5tJUcqbPXXGEcprmEGkPvXszbqroJ5WrxckrCSFrf2DaPadsrJ8ZCGPyfUm9c9Zw6qdnbHe",
  "key11": "2cBTnWzVsE9vDj2HsA2wRen49qNfyjcBgbUHggmKsX1UCgXNRz7STiNqqCMSkzNRUG8hCNSTwmajm1z1fV13cCbK",
  "key12": "5D4A6dKVgQ6KMV5DTMS8wb8DwakyyzATaH74s4h7pPgqVSzs39QqnKjpW9ny9jhRF6xXfgC6qvTFf8EDXTR1m8hk",
  "key13": "5gCcRrFuJY4sREamx5LecvLFUgDnErzamHbkm4fvS4TwZHvDxtNJTzJwTdUPSTY6tNiJ9ukfdTJdWcAq7UCHmzFM",
  "key14": "3Cr3EuWumG85kVj2Pke2aaBt5nudMBA28xMatENtjVRvPvni6tMPKiYMfFRjh4d1GyNLUmaNhvXo6zQqoHzGKKLo",
  "key15": "4ihT89pgkQczt9MTNSDnVxHVATT1c4XRzBMUmJGKHqD8MPaX2YAf4JJ3Y3LXA88GpJw5vsn6hmb5WuZ9zFVTRZfM",
  "key16": "VXHtbf3MGzzX3tZd2d4KbwtNmTEd3Me57ntqe4X5T7CmND7iMhdJuAAibhotpyHeotKcXH7ewazLRhkjeXmGrKs",
  "key17": "28A2DvczEgmqNatXvgtDGvmNADBhqZgxFBD3fy2u7jAhLrabNshtkJC4LYeBm3Vss3zCjd4LEuKC8tMG5W8bCTfS",
  "key18": "2a9RxwsdqC4iPvuQiqXpw3BPQpwbVJKhUvhjV3WD5uTwUpoGPSQWmeYNe2U54vTYjMxXFg9BVc1agrTeRVuapsNB",
  "key19": "4F6Gus2BrBXqtkZi7tanaKhTVvSpKtgoyQXnnbu7vRyZ4AGnTNobe9HWjoCAL1xh2HmrDp2QepUF6XKANaCwFWVi",
  "key20": "3V4tabuuDQLPjjeawV23j7KXzRauanLStEsHMXzEqgHzDcfvsb3wEZso4WgdfxgKuUUBVfKLrTScD1tMAEu1GTSV",
  "key21": "5ARdACg4Z7NDNjAHpDV58VsynwA8YdxAntL9dbdBT1Z8LaXwTRKao4EzgxXLrYHgrBydUBtt98YQNbQy86PdgAVs",
  "key22": "52ohAHncYt3q1L2qUfTu7PEYTbpxL39Gy4GsDrXNG8iFyU5bmHmMP4cHHEvqo5oMS5F64rQBuLhBs48RPnYTb1qi",
  "key23": "2DNja44GRbff9N7dC8vW6P1kFTLVpvNP6F7KrFFg9cWiRscqdxJBMP9FvxrVZJtnBcG3Gto8xqzMTy4fwFNyWqxb",
  "key24": "4X1kKmDP13srNAwso9WD3ZnqBHUqWUSweEw8LSrob8yethvrvSxdMCazoZB9PMGP4BEaHaBNBww7A4wHfw6MPVUQ",
  "key25": "2bVJFF94YcDCVZKtGdXZxW8AVpx53EAgqSv7paR7vA6F6TCGMw76FhB63scdM2puNxsnECGJHbzXQHbLMMXbzN8f",
  "key26": "5FZSE3ddbS5LdwJB15Bxf3oFmKw69wvdKMLimd15TXRrVgeCDBvqv6eFCUKSk52Bed7ZVHcvtinuyssVsJTQzNuQ",
  "key27": "2AZFaJmHegK4wcn7DU5fmJfWsTCZGCHBLLpGZhfrWiWrDhVj9T1PKgPzN3eaqbzHSPBZeRX1sSCKT9vu148eK9dg",
  "key28": "dtXj2gFWc69B4XHdXXj1RoYjoasTCn9P6QeYM8PVz7z8ezpCuYNtknKw9x6sBMitPky8gzbBikpCthUTGigacui",
  "key29": "3ra9GZeWSQ7ChdpbHtWTh4sYpsURn1yfQtznnFDyq6Z6v71hDBL2xGVwREMSjmrT8LkRJs5vx5JGZTTYUws6pU2K",
  "key30": "5VQEGJqEC3oUjc9jHzdPWRG2tebtKjNVAyRWoxn8EEEy3g1yaHTJ8wJrqqDtrpUKjrgXqa1ANhNovG1ufYZ3ArCY",
  "key31": "bX9azsVzu59PrYzL6FkKjTGZxbJhCF52vcmd2SZUby7efCiZ5o2GBDFczwGM6TMRTFt2FCNEpvUXiJVhgUKFYxY",
  "key32": "2arC1qqThvPcfJrBGkFMLXZa9aDHLKg9WaHXD79629HVd2bh4ZDaFWzDxRyCKk8cvhDn14ZcJAQiujUUm37qm9uA",
  "key33": "25wmyeW9CRRgAnA2bfQN2CYHDJM5yJR27TNS5jzSJ3gPDa81PS6qGT1nCLoPXYdVi73wyuR4YThXAReX3gBuTsFU",
  "key34": "FcwU6bUT5ASUKza7ihAnJf8mUcLiW33TBLixzh6ZtyxV7ELaAp3NAhewXmEc14AUiEFq3ch1pcKfYTLwLza3bbb",
  "key35": "3XJpgmefcm6TqLJy2PYnywS8jxgFS33VgKnRCbVzpcqPaJUBnpY8HEm2vdCpWPYpqTPsnBdccDZvDRAfbSgEygsv",
  "key36": "APBpwMaUtKWmMPNY1wZ3tfLNjCJKwMyvZkCXB16mXXrZ9WM3pHxSiu4B2bZsSzP9ioGiL9jUn7CMfrcGvWHuVCh",
  "key37": "5Nqb67T5z8cLCMQFB5nBLdYR8xSBiyMcqS9jmEDsTcDnQzP7agaoFirLZh3ewCrWiqZbtULfXiSjrAWDMJvocH5Q",
  "key38": "4LAaor7UfevxFhNZ7NKLxVN3mfbZJxMNC5BrMW4z2LZDkdgyjVyWAFXcp5x6hvNDyuz9T4jajjp9b12FeghKJXoW"
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
