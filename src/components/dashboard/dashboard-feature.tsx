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
    "3wbbWMYWu44Nb6SN6xjFn5rYzVahHrz7dUqBdd6s1UsMv6RuQGxH286TKa9fqPECDJAWoeF1tcFLFdUsckjK4xrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xu18cjzKhsCwwaaVj99JVLVtVDewnAjHVNoGzWNFfY9ozMWDj5Z92x5bGi7DJwTBPxzH1ExPMqhCeWHCV9NUpEw",
  "key1": "2wJXeaiWPVmB56wVhEiFEi67StMDqrm59ZaDrBNSjD9Fa9r54Bk1ksubXKgAMjiPVMFrPdyQCtAGAvu39zKr1t2K",
  "key2": "3chwGxHuQqwwhBcapQuEiBcsL7gBv2Eauz7e4FKr2RvywhRCsQTcmSkppa8sg83GySaA2WqDAhUGUgVTjovK5SMi",
  "key3": "y956mwjL14WfPT5aGo3jZ86GUJAoKuZTb8hdKwbns71Y2kkCtAjS31nD9n1m4rQW3KTB5vVoQZGPsagfE6raRfN",
  "key4": "2MLAhzBx51ZNXKpFkVzvgDdppQJWASVeEBVbSyULVqfov3ApmztQ2EAUnUPWEeCcidY2gKcU6fSJb2N9uQLiFj4C",
  "key5": "65NGxU19YBzTLmVSPCY5D4Ru54E66cVguzWgLpmfk85BpnXsyxbd3XyhiZoX227YRXVKe1Z8J2Tuc2CrowbQrLjz",
  "key6": "4a6N7vbs7kHCNtJhj4pLR6GcaSsf71hWRMGSK2UmBdvA2C9cmSr1yj8hCLyNjYag3ghryjtJGEambamxZDRJ5cUx",
  "key7": "4htQZFnngdZwsPb8sL9DwAvnTkMtWUHk9BWk2jLVF6P3B6mhCeS1r4Js1BzWcGZfyMVi8swiHyqstjrdJHUzUSQm",
  "key8": "3KZU1UVHTcQ5PTFXcQB1HPtigQBgZD7W6CtwWNYzApN6DoD7VfGXo5pQiLbgnibeyRAmuBYk7uPEDRs11Whta4ja",
  "key9": "5NxYutyL25uKvNT9ExCjyt8iTsjzSFNYBZ4AZuRPYvhuzDD2PhySHF9bwixrXp7NbovF2M4HsUgNEakHb3p7MHCR",
  "key10": "2T4xoeksueA8f5KHTXU93Ngt8Erwbt4P1vxFnFozDcwE6N7HnvFrNes7P96QUe3M1SRjaycf3xxmj69Rk6DAokH3",
  "key11": "3Hd9oBhMzUcs38faZxXTk4drVw4TPz1EWM8Qwikuhc2R1WtXg64aYe6gLpsjmASPic9U8Hq2HyYQiMacCWWyKHtd",
  "key12": "62KL7CbK1r4g6nphrtHJU5jgEF3oErSRFhiSuXyDULhzugazxYHQwjS6DL2LNe4AyT9wNnXpNFgxqZRhTptWpzJB",
  "key13": "5XhsVJWuQ43LBNR6yUSZyhoqfixnhaPiFLwm5vyFV8pN2EXfmaKhttKcutUoaocapzD2Z3oAn22KQMyf5jxzVa2W",
  "key14": "5viyK8VHnT7HsnSrbSjCUP2j4q9D5i3yzkZ2gv8AuGyELWwANXh5hVJbgwR8b85SLRzNXND9b9ahjjEeUpxT9GqU",
  "key15": "22WnzUNCKDKWcQ9TaTnSj7cA82va5SxzktS3e29Yrutc7PUHAKvdkmL4GNTN8v7W5UsXzdSTtRkEQG6CQtNDw61N",
  "key16": "5JKk3TAFt2dZvMNEGvqyUpM5ZfJ5ng7b8D8Z2Q2Xk4qF7h6443vNenWsvRCR414q2GYqWwzbJApbSxTsaAkpVR6A",
  "key17": "MhvXmDPPXaZysv8tgFg7Cfi4R5xBKRd26KTzA7KFNfXUbbyMg4AkrA3YAxT5LTDWW9rWt1Aobpynm7X9YqHD3xS",
  "key18": "xkKj58WC6Z3JQKDz3k9CnRX4uXyaJxcMX95YDjFEdoCNxd6nqApbfL1fs38jbqFz9maJdmPqUuRZAuLzWhiC4pf",
  "key19": "37AJj3zsNhS5gHTSeDPYMDvPGE3DATmQrCSR3Qr7Hu8EixbhRvLwY13YSQDyq39Ash2UkQZCcmNBKGK7Q4XUZjMV",
  "key20": "2VYVCTYiirrsyP1BjT3jWtu744JVzW25NHrcak3AP19qoKa3joUVxr4UHZabzvdXVfa3ucok1LzbKVA2koBwYvJR",
  "key21": "HTYtHzAvErpQhRd9F2cSXsit1Td7Zznhp9B8dkkNixgNEkDUqKAtepSyMsodCKjicPPie1a7yBiMsq87wFoH4uK",
  "key22": "ytFHKbhnZRsg9FAM4RGZhRY4kjA84mxw2bPGEjbyoTdjLUDfURyivcXfNLAYvsHfDvPWLP9x5iudi14RrGv2YBE",
  "key23": "32Yx3HMz6XWd9CsaPd7it5KZVQHPtE8eBdogJhqF6vetYtA4tecKXFkwgDR7EUJfwp6341vVGGrHDi29e6nhLsFZ",
  "key24": "m2aHytMJGoVSEasfHkGeqZYBDZyU7RjPcCMaWiPWbhNJGAkpRnABqz84t3XqZSDdspGKw3wfbgd5d77jDAX3bsr",
  "key25": "2peKeptqdKEjrG72kSSfEvRUzE3vXLpDExVXsKi2MvSBMe4axXB2H8Jv3p5cbiqTNRXAcgbwBZi5B5qUcdf3xN5H",
  "key26": "3Y15Z1MLWWcpy6ckTenQu6SHNHkrt3R2a96SWQ4NYiJw4NVhPgpTT4PzjpTKNtXUzFg3j2NwpyDUdjSFWTD7fzz8"
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
