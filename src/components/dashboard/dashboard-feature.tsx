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
    "4A2rZDcuHprkuGdedApD58MjZxmmjBvmuTuX4ADm7ifn9q2J93HBMSN7zCSHbYkt7JNG3h31P6LnqXA5iXwn6qB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cdyPmeb3VDajtsZowCMadGdjr3JmN6GSeBCDVqr8Ntpyjs6XVpf7V8Fbn8ZgaFauuFSauVtGDbXCWGZZn9ncPCf",
  "key1": "2WRtKeMygT3QTS3mezvyujP2W8wzocNtuKVUE4zk9ZaAroSRyEVtchzazdWFD1Mj5Qiqvz9pvZ36rR77zrPsgquR",
  "key2": "4oznhMFRXHyVhJyVPJpAbZU4FZJP67x82HUnbBbTJeQWccgPxdBAikGJZ6DmiJEcEnWRzoS2FWFe9rDjtRxm44SA",
  "key3": "3qjggozq8dmAhtfUqE3vtq6mS94kJ7DqZaeemrobvjhEnzRineBUkYU4UiDSLKCGaKevNhdhLhXEU5bHuLswA3x5",
  "key4": "4Ja6GYBqFSf4aXmkm9bMFVhXCL2kwsXiucdx3KjE2cihfpPM3nm75YRueaebZT1sazrTJS1LX4mJzvLsjYvcSq8M",
  "key5": "3pVH7j8GhSWfG8SaDT9ozQfRyo2ybWikkSpGxFxHs6YbyfL17y9Ava49a2csCtEgPUgjipR7sRLfihdMwfU4fjiQ",
  "key6": "2X6WxqMLch6BCaAYP31Y1nknQ4tbUbHkvaX3Jwxxt1Db83Egt2D1eUfi21AmhgXsWyMLBy2BgcNCoHRPTYC53XLZ",
  "key7": "2GXaKZaY1w2r1BrRycMbFNojfuyR9K3eQXnzhoXxpo7Pbj3AspwbVm1AVpyaWxPj46HQzEuxZA1kGz5a5TzaMwbV",
  "key8": "4zL9HLCK6PcqoYEZ2ZaTnxgC9SQZjrpDeZx4tQTke7Jntbdat9gbAgAEUQ5TktKzD8eihCHdf9X4oCL7JBhu9QHK",
  "key9": "5zjBzYt9kNCVXp45JqYXXs6krUq4kQMk3sfh7f35wTV2PrF5w3fqYoQEmsbvrWDHPuTFoerMR7mGzuDQcHSRVeVK",
  "key10": "5F9GbgMxJLjqorXqQV49pd3GgEWiwxH9C9LyJemANDsVX8U8Ek1NA7QyzomjPf8TUPzJn1HY3oZGKob15SSgCior",
  "key11": "4XAvGqbgqaX5oFWoXi6oCYwyCAu4Q2C8t8KmMEdV51BG8KtDxcNMZKK32EvB7uPTrJ4TE9Qsr2zua7eafEcHnLtg",
  "key12": "459NbtaJNNj2GVdM6cfA6uUC3S5KcvChjtejZcwBRWeJ4GqMC5icvmt3TARY1CCo6RoHaSDZbbQreo7vf8BqpvLZ",
  "key13": "2jQKQBkJzNaCbjuvYd38cF5d5zeW9BWCxf4Lc8g3ijKsMuepcbhHyurG5FDv8tcfzCs6Rpmyx5SyQBA8oYWXQ6FS",
  "key14": "251MbaQHdSqEuPi1CPbNuJSNjcEuaKLXt9mcLipoQ6XKDKx3sMBW2EwJsz9iA9xtF1RrjpsJM89tVYtYBBGjkBkA",
  "key15": "LemTaBu8SF4Vu6y5sxxNSho2xpote2rVeVUxfBHAKGyFvpFQkXoBAWvoM2vTedNcbRNpFecV66Cj8szUqVX7dhx",
  "key16": "3PFk1kL3R6T8Cz7YpphGtwd5BJbCs8ocFN3496w1x19GpZYTgDn9jJBUXGsxi1oGUUBtoFPvuY1zxLMqZ6AWbfBi",
  "key17": "SBeByStwSAapXidpPue9awKMGqeryE5ousttcbvyi6UjMYGr7dD26LrfbxrbTAswDSvAq8GQF3gHyDT2EwkM5Us",
  "key18": "8dSuhVNv6RfW2ckq5K1kZm5yjjguG9evWzLWxNLW44KHSuyTK6cKF9jKjYswvStvW4caQgZMQHTFuj745CHKZWY",
  "key19": "3m3UGxtTcco2odxUjxRqHHGuAVCPbZooeCPWoX6LYcRAF8WvoxTbWBTq1NnmbbQxB72eY2ddvkrPpkuQFSREk2DE",
  "key20": "DWqqbci8mVv7aExpbb6xLgEQd6n5V5URpHxmYSWPihBiq9UySgiZeGiyDqFsDWd3g2WHh4NM75TS75xRM4VmQnW",
  "key21": "43juZ145dkZUuLJhV96wBebbYsu9e18FY6hPA7BFuTUggNVZBatZmfYKcCTdKhRHTuJPVTXaAkk5oqKh6N8N18fX",
  "key22": "NqmHvQ83LYzEJseD3Nb91mdHGFWnW2vYjMNozzNf3nxhd5FBGP5ES3Hfwdw2BKJpqsdwfmwvhr7mHLdy2gonMfQ",
  "key23": "2QR5j1zr63riwSpQeGRd4GGN6kmteBKirDhFnTPQCs1yiqo1em1ScrZ6gJ8zVNBmDHUVyh4kitKJqsfaar3H5n9C",
  "key24": "4k2RkvRP3RP3zw6k4rBu85GHGNtif7LVdfaJyMDhN93VRe3ytMt76J5vjCafmtHt2pyUPBzWfM1UMBuN6122iKGN",
  "key25": "rJJyZ2is1JEuMCzaEZELLfpSxvK8AbTXZ9bU9HQFS4tTRrdpgxGTq4Roy1xu5zJPBwTRgqwnvExGobFjFxRWRBj"
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
