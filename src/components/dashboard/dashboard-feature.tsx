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
    "52uBLvCGRJQWpoQeY6L91WoWAL7XLarPLsSzPBgPQBK1LtrLtJxmipGuJyJo6tmMKoeM6bN7WMooih8ApZCv13CG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bq1RpDapqbVX8t1vbhwbPGnZiJ41QVuVhm5YdsgPHWUHhshLppAjqGredMTQRkM89VEHSe7UrXqoX2WxXxP1SN8",
  "key1": "Z1bsSs28VXiC1ba513zMpLZ3Ajb2CGk5XaZkv6yfDJNNhSZy22YjVAKZHL4bpWnZ1pfBpa8N4FYiH6gzqjwdN7o",
  "key2": "3qzd2vWFKg5dv9xF1Jx8Go2MjJSh2Nd8JaSg837oAJjA8XjHeTyGYY8iYaSpeVJwnDJLK7yrAHjk5WtLR4KqPHot",
  "key3": "55n391QkgjoxzPKy1XhZVeDFKGRXQwfNbgYMLxUxySprrKGZutguKLJH8d1gPQf39M3ZGS4LtohMhWVVxrCTaF9f",
  "key4": "3NVEbppvgcNV83QYSZ2Dt64FhHFqAx2miEzj6vBYbyXC1Cbinx2QRJrS2AwT34BPEAKaqmEkYWq7PP3RzXkT3DKg",
  "key5": "3crKgbX8Wf3aaoiqNb4pVm69WiuVwr6TXMXyERFtCnRokfxnzNYLRc5Sa4Kz2o1hPdwoqfXZGHALwCKzTaEKpgpg",
  "key6": "21ed24marvzYkGA6T3P2Px8rvgbqdGkQvFoWbunUaYHf3Sjz2C4217sTfEUHRV2g37oEJnxmujcK5ABndwY5MqUW",
  "key7": "37JGxCTpoqvu1mMGXo45tT3tXU8TnvCJBnHvAn2XyAj2fVaeZUfVXpxYCBH1m36gRFNb7kSYVf8m5Z4u1EC9SRR8",
  "key8": "sTPP5XNXNbZVrr1eDTNcyZ22twAcdgaJ7maQUh4Tttx2dLpzSpXvYtnydz8Z3Gbv3kXSC4RCj9fBgMp3ZeNYjiF",
  "key9": "2KpqTJZAcnz4zaMTP9gS24h1NbXfrafsnwa3qF8SEYMQ7AQ8TjvLXdTbxgLJXiP6Ws64YjNWaXkTL4WKfAkjviG3",
  "key10": "4iNmmYfd5Dh4Eeua9NyYs51EHGp4yxMLmrrxPWgGMxUBuKiwSDASrwAu394irPhMcsd2FqFdQZve4Y1zbS28J6JK",
  "key11": "1zhiemdBCP3SZoQ8LBBTJ1qspsBZ3MVNpiwXVHim9DpZDYPfWPUbnzMPLrSr6mbisqcNuv8u9HafeoamKWyucsS",
  "key12": "551PVoe2mHoUbksZfMGH3f1aPX1icVM4XgkHstY3VNnqtEx68w9fmvzcTRUYetkW8tiG5TrXMsDYd7QacEapYmG4",
  "key13": "5XnVfzNnQ7BzSrQ7BAb9Sq6Vy7tBnpSRb38sEDbmn1MVnWGjv2jtN69M8dxrBDdjEYzFEBEtBPYvggfhrGFqTZnu",
  "key14": "2KnqiaBRu8y81iwQ5UDLxHKL7kCkyjWDVUG4qHAgGDs5jfXf4tMXEJYSLpToBwXEyU5ZjssLFC8YanRWZcmtDGu",
  "key15": "65tijEmhku34aosT8iMRLg4PKtitZHUmPuaRNPSDQjzz5QKNGTms1we3p923q45jghsEaZdCjcWxC9WMvCLSeVHW",
  "key16": "4rXm6GXMuGtSzhWsTQ3yXPEn8bZGPPuNPY2HiNiVWzCdmcjgg3ztCKUaHipvURfH6MUQnK2suekRangcAFnZKMnE",
  "key17": "51AHUd5QSFwKXvvYK5yJ3ZqGHdrxEhSJ6GiYPS2YpVeDsZinmGm9U6csQ4Khpirb4WWa7ZEbD2xXB9PSweCYLicq",
  "key18": "3Yc2mVUdA2dyHqAdwxveadwSZhHAQvmtEw9Cu6Eq2SBKLx6no4b7Fmkza6JSBL7LVyZuPzfLdXh38zoKUY7mrwMd",
  "key19": "VCT5RsG7Hz2MuqirkpLcda5VhXUjtrJn5xxa2FtzFedSnyGCY9nKAc9k57U64WBvHZPNCTV3WXEBrefgGQ5mu42",
  "key20": "4AksGw4TbtLNRf1spaupA2JzaecscXVjnw1JCXri5v87U5bXnybvm4cfY6j2SBh5kSnyyDeNqYuYGmUAnN3v9zG",
  "key21": "3t6LATrHSMdByonU2pPbEepiwfMSGL95YwLrE9EP2acxmgZF1hXsmbmBFJDN5VPxpvh3kBobHuzGKcYruGGx4rCp",
  "key22": "3V5BR14z5VQcax2U5mGcpQpq5k2F2164AYzbsS2pwscuUqderi8jFac469YhfVuQDS3a5wCdXQVPDJDFsPUQFhTr",
  "key23": "4wcQuUjmKKNoM6cQ4zm11YLHFp4G2T3nwkGC6mG993Cuk6h5MHDxdEYdcov8nEL8jVEdCavJcpaJMX67PzZPUUXX",
  "key24": "BDGJmnr6KEJunHp4ykvUdhnPL9xUfYGnhKt2yKxEKeLcmF3n7p9uYcN48hu4xKuMqS29BGrYK3oi9gQ7M331UnZ",
  "key25": "3ChRLa8LwPHokuzpQGYXGFkPQSMpP17yJQwfUsd4H4ksA3snk6oau2uYPn3QxSRbyhjMbAfQMy17WwdVjCsdzcAx",
  "key26": "3u2KdcdmADgPfCNpzmJbeXmJXJymDvWhfKRzNySxuMBTSynX2BHv6js8BcGtf1TH7JQFSQvhmznVTAp6jpLFXZ99",
  "key27": "5owEzEVZn1SGXef4RKB6oCMwQdkDJQdhn2phxARMjQ2RXg1gA95ViN5hjyvjZPZW2TgcLsWK8yMusLjoH3nmCwVQ",
  "key28": "5My7MCZfPm66Jq4UfLCS1rNzXkgViUFqxfNjn2dYnzdhVtjbmdEGCRxxhN5EvCouTkoi1sBFNLKiivkMg4iVwwto",
  "key29": "2EK3CKazBiNsvw6pSFu9D4CWfjvm8BA8XgxL1AUAgNc8p2G2ht8Av7xx6YxAnMEXnnTTK12EfwdJ4nDoUQuEnZqn",
  "key30": "3frH2JU3CTCFHxxdQSxKDCA7gESBiqhx5pVeBjZ1PT3bXWjHag4f8mbGgWtzh372dXURTLRehEv1D3NE1PUESZFj",
  "key31": "tYV1yw3NgU3bCtiqiXqMmFgBWCSYMzzMszdfziiZhKoT1xe75dgjyD5XEZaKgr8ApvbrVMgmatzrqh9vzeQJtLi",
  "key32": "4afAvo2br1Qjg1gNd2KHgphugAKTnuFTG7KitJc6iZw4jmwkYwXkZqn2KJEbrkRTwNmJdcLJZteU39x56o1ngmeo",
  "key33": "3q4mo1t5KTwvfUBKNQuA32UgQziEnsHZNixUHkpQy7tG83M2kxwXRhUdsMuAduL1MF9etysCyyxMjT265gn3p1iF",
  "key34": "AJRjA682sVBthwKakyToEGichQTwvB1uHGoJEKuzkq8D4KXe7qteGVATk1wc55B6Q5C5mAkiAXzyidUqU2d2kSE",
  "key35": "56rHNJJPjSXMDZ4ajbf1sr1bRKAA92Ccs6VTtkYWFPiMbziuUtD3da7Dv7c1TZMFufx12EmUA1CrWbGrCapYEyPY",
  "key36": "5Ufzq4pPD3KZEz1y4HYxx6YYSLtCscG5MwG2UNU96MgD2u5yqwQydShEkib6qupC2dttsa91Zxmu3BZ54Ds7UzCm"
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
