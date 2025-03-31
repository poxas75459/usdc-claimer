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
    "4GrpQ1344zbBdVWocuYxejqKbMZqcwtCsBGkVd236Zsc35y7UVMF8q2xvoK13UfmLcQnRSnxkW4a3McwR3nTLBnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g1yqd8p6JzLDdGbAWX9eb7HBkRw4BTTpnchr5YSWkkGJqsbVVxuSnJD6Rg2wcuqrDDpKJ61f2jSbWrmM2oRAMYM",
  "key1": "5MPVYN3ARZhLBLZR9aeLnqNWdpsiFuERx6k1YeQdxYa4zPce8c5z9Pe7bLvjX7CV9tF31a7EV4TE3tq23nYY6ByK",
  "key2": "3csecmCzV4kLEPehh5sBC5XVbKgqAvsA1rVL33em29FnbvUNJW3CuY5C6AEm4rx1Cb36kdeBMqR3TFjPS1n4uskK",
  "key3": "rSHoSpnppQ66pt5hXF6JPfsRWUE1yw7VKZMPp9HYBHrn5eknZ27DKC2CWHtPmxwAF27enfTVJ6x6gtVpQ9iT4ot",
  "key4": "5GAo9f5fKdFsT8eBfmEm96D6wkQqe7ebQkh2i1UdsChydhYtG22SgK7stftWX5pRWRjFz65VL6cX8MNmVgrJpfcD",
  "key5": "3rVRE14vfj2MyQ8bQK4mcAcVF8727tKV3HSqCuQ39ETTxyeocWN9R9NTL8LUVcVgRorEpQtQ56N4LYmRwUGczNrC",
  "key6": "3MZnKe2mBJfCJaMpyEYc9ZugrpZyoLBUEWu3ByZ1KMzWGxZXvGttaqMhT3mFBgkkgsZWQFWb1SxGfEHQ6SWrq7ry",
  "key7": "5bk5nAgUFfVJ7CT1JXPrYfD8UfVhQequibiAXQpjvow1FFLCJmdYurAJq1K2mFCtQuREJz4WSKqcgUiRUtepzSRS",
  "key8": "eLPtvUG1favh57LwCbUevbxiPXJZotmaFB8phnApozFspBeve3jrPDp6njTA4RUZCD5z4QVc781BgvEcgVwV35u",
  "key9": "2rnmEvh1z44hpQbSsL8YwBRKumpFCtLhH5Dx1ad3Qzi7QYqJSDEPkyQJTRaGqxXDutrGXCfs1gDouHKB1ksr3Tef",
  "key10": "2HUXfswjsPJ545jhQTFacSzf2C5fR2JjkSVnHptNEnBxLk9QkeabjjrCQDWFNC341UrgpdrrY9s5riXJRanddwgP",
  "key11": "272mN7nEfzSBomXWAcHp3GoWiyB8PtpguwbpL5W7kcUyMWgPxzp4UERjHLQdZspsCMhhquek74eDnDxiNWWxhcqA",
  "key12": "2nQFVjV35dPMcmcCi6jyZiwFAPUq7Lb2rRanu1x5Jze2YnFa5uvha2zwtjxcnXJC4MtqP6UQ9skU2ZnhsyAAqKS6",
  "key13": "34nsFLZajDsNwHkLx4TJWJQGkr6oa8ccXRpaP4x8Emkq6KTvQYo7SmRJALtaFCQhMb1aKXqs3uCUBD8jjjXzdt9r",
  "key14": "2qzciBg2GnBrDVHZnNbJwxGTtxrUvr9akYjED5y8NrBRpPG7vhvou4NKaANMCP1di76F8zBd2kksPr5tt5vWVvH6",
  "key15": "589Sd4mJZ6ugNR4LnTcZK7dRjJL8V5XdVBpTXZVRYjd8AaL6EgcbmjKNZA4u5ja933juC46DtQhQEuhqtDVZHHsd",
  "key16": "2b9Tm4j7eQFL1SerV9ZvSh8hZLNXLEjnnCV8k4ytRaM7aHH8GR2r1oWLTocabVcyRkn47fH75ByeeGFupRUXE5Wd",
  "key17": "d4Ki7Bx3QpPbMP9uL27daczcWs6AbZkZx4PricfJFxcyELFWyjqZEicWPDnphXTE4Z3Ucrzwi4NKbvqq6vYe52r",
  "key18": "29CUrvNcWAZwe4pt9bGNj7yBZ3DLg5gXMDnYcgGrwS29VQsvZSdRXggwiK43X4CQxUdaAGp5a4QdDXwmwq6WoYp1",
  "key19": "VvDu7PHUMuLdm2sAbn6xNFkGhcqVFnnZ8PCtAgUZwGTZeK72DhidoawZX8ybKTTHVaKZkd483aPK1k5QPu1jTZU",
  "key20": "jWLis4tGeWDPpY9yAVhZp7SAp4dn6zXUpxBLP6DpmsAdYAfFjMwXTbD5z9KVZMRq1bvaVLUGT7nibT7hMdDUMTQ",
  "key21": "33zqpNRmRQNZsdk1YuG6vpjTZcYQkihTHHmQ8Ajp8cSAQfucmgsUFHzLtFmXiYZYpTSCD7FCiQ4LmtcCbMiM9E3a",
  "key22": "4EYiwgX6VorRpXmu5Uas25Z3oCzdhyCUFRoi1R2CMFsamKRhstqHj3csfUSazaT6bEuK5oWTh6fsr8RGFf9XEoQt",
  "key23": "21BvdGBxZaDb6Rj7xvU1sirYiUd1BDBj3j4jW1h4ehTpsw5JXuqG2A7gLDku8QYu4qngfhwaoes5DRfH7vymoyqR",
  "key24": "3ephx6GYphKfYFxHvsbdAzLPoRqJg1HmGrgtZ7NCwsnYHMv3E2kStuFHuEoqHdUQPCbZLWSGsxBUoHN7WR4UMXTA",
  "key25": "2c8j3juRCCVxAXQC4zqFPDNhm5wVTESpAFgKBJeZGU28vV37nvwhgaofhba1MP2Df3qfoNK3eM7kJkEyx95vn6pd",
  "key26": "5Q8aP4kBazBdEFt71HCmcM251tgmvmqjVLDgGDHnH6XeTdZ7Xm2W7bLg1k3PFPT4is7pxFtfuZSKo2RtqMVeC7tx",
  "key27": "5FUviXED5UqhdVN2fzFKqBetQGRzeEzq8efeFmqKjvNTYrxK6XgY1YocMXC2bPFVUNqtLVuTVzLTyqMiGU9yP1hL",
  "key28": "3TYCDT2Zw7jJhNsoEJcaMqXYxfkfrHMzUPswF5XoZ8fRHXyjJt79TYwQFBgUY6pnCRVS9FTxs476PScsUeqE46dJ",
  "key29": "28nMWStbLZPSJujP3Rj9fmXbptcdFXbHcW3VWmjsYMd7oqGR8q3NQoyuTLRzpHNNbc7wXcWiJtiTPVJpVyp6fazz",
  "key30": "4kxgALTppPG9uNpKYMSMnQZWUTfZiVH82EAuDK3ky92ReNNRCdq9Q57MyYMHQ884e6JKhmh2SLPEoeEFfvHVhbFb",
  "key31": "4RWJacdM2DPzvnbJmHcRfVn4ZsVJSs5oA2Q3cJJ9EpqZdqDHXjRhbCbs3bgWjQi6tJYnC3QKAqGJ65TeHbdBV9C",
  "key32": "4NrEqktQfnQo6ftdemjK8ZCFArAgC1AH8iNERLeSW49kGiSeuXhvyFY8ZDZvvpCvZqKfTFBiDLrFAGDjgn1cW6hQ",
  "key33": "3cRRsoXxNSpNVGE2WhzJ4KDNh5LjP6CuNkFMVctKfNX75MrueHYiKWzGFUoDa9nGFssKMSH8huRjLNX1WWckpzjg",
  "key34": "5hKo28DpWDYirWwWP91N8xG8F3v6N4SnkdrqJgFQGPhDWxKpBfPforaUSEz3Qm1vHw3A35HVBy9MLzbtF6MnMFfM",
  "key35": "32AYbTvetLAQ6MMY4wZjjuhG9gW7M4QDfNwiGgchhwn7LWRsuMg9TsoGRz1WzDYohBS8BsDyo3d1oKWHpMd35s93",
  "key36": "2yd6uAUqtPrmXUNvecsWhjvtF9oPFxMVvXgnzYquPLBFaRKNDBzyAru4jL4x6jKjHdCfg4ZBb5XMn8sVNbWQxEk6",
  "key37": "84hVwrRv9CoTJGfTZVNg36Vmh5QN7RXxiLYqGiK6Jr1PSY9G3werupGEHz6gkrZ65dKANWiZuGdYbb5BSyVktjy",
  "key38": "56e6WdMF2zgHDYxKXz7Q1nUnUsuYk5juQdejaDHZSaZK5svs3YfwkhsRzccZn2ZRRvX8Hskm5AoEXdoRaS8UzXky",
  "key39": "GrKAVBXTsELXSv8mWdUXdiCRhr9kfnt9PM3z58L7paGgwvJQ6YTcGMdZ2FB5zo6VdPyU48N8eVAgGBf9Rfm9vpp",
  "key40": "2GEDtcVyzmFLd9N9nxGtCT6stTfwEozcRt5hWg6X1akv2jzSpMqYFp8DunomPcAU5tz7qbRdtV7GWWUk7cNoWsqM",
  "key41": "LFApwwJmex9jTDpsyo5NtX3ptRdcM6znT4PEiQ8bWm48roXktJ3vLJTGjBZV7FszC2McLjCbn7VW45cuAGS12eN",
  "key42": "3LY4QufNGYRzoooK7Rdq1XJzmxTHpKV4VLVixyDfcPPuTWHYqQTgRcXT2BMEeux6FUQ2kc7wAkSoMxUQx8DKXcVt",
  "key43": "3Rrr38t1XTKcdTBQnuUPUhUSA4gUX4JEdBk4MxPEVN4NgLb6y7gZDntHgyys9jLd5N91wetG8rPsuLiHPvq6zU9m",
  "key44": "5ngAVGPCoZBSYd8gtRpe9hfAbwm6v9xWES5kCkz1TvdrrUmaXHim8h1mStZ6xvcaWYf7Fjb62qYcKfvN2GaFQQCt",
  "key45": "3bk4udufvKdRAY3hRZBN4Rw1KriRw8wgb85AoCbawSAVUD3ZwDFp2KSohCGR2KeRmY5trRRKgkTkp5x5h74gWWYQ",
  "key46": "3BDgj4fMc7mKk4noUpmAY8yXjn5mjDmzskZEaTsaTGn3aGF2sEUuNNNM5ULdqTfqZSLjLen8h3f3eEFK875hCCNy",
  "key47": "3us8i5Hoj3XStdFsdrQrmJmNghYAFSJcmkYnXozafLdaeeEyyxGbSHaQp2fm4rJRBdu8mKjSzEHWKUWSonckdWwy"
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
