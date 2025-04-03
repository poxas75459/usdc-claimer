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
    "3qYiyNEtwyT6fyp6zSmiuS6ifDWN9YBpSFzHcHFZCq5Zc3GSbNCjGq5h2ZKDD4Li1uuMdM8WaKABk5vcscDc88Qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MKtR9MufqQck1AB8BzVNJ9fpAczBemro6cU4HsQvBcQpXNRqj483jzodZVvDP8dUN5pD4rWv1ZLwi9k7StifZhJ",
  "key1": "2P2vJSEv3WrdPtpUwdFzGGNjaXAQ85mDLGf5H39Ax5QTg6F9VRYH2idKLp3nBwLTxtDgBHg8cP1anfEpDNgdXZZa",
  "key2": "YEHb4MW2ELfaLCJveHKpJaNfSGvXApLpkdXpc4Dcc124hLBnYxuyEXtttWbm2VBiA5Z68aPZJouAcWgocvgfrs3",
  "key3": "4tuMpTmB32qEGpcooxRVsoTTa4m3whLMB5SmnEZThmh27vh334DcuboM1rybSUNfc3sH6EH3RCGm6xaNoAko371N",
  "key4": "RGbMTTUVTmN2JTawposc1zB65KR24rHNcYWqnRTEKFWZY8LXmuiZiAEjufutpvwskp1Fq1KQ7yhHDbBQL1216wM",
  "key5": "4VeX2kmt7bP7XPvMkaTBUU6RtrJy1NoSNA3pBXgAGtV4Xin8ryvogSbdoQqBLxCvMiQBXFfh7VBj6nCgks6JRhH6",
  "key6": "4SfjDAEG53Z9mAPa1gpZzZ9qCrLPoQg5wMQXC8KtV3sxp6TVMpbSxMHcx1QE4iFHzWgHjjz3puiRjdtWzdscGSHc",
  "key7": "Q3mkgKaaHTzzmWdL26241wXHFVgHMej1wQShgQ4dQkrYPX43DHkwMuEBZP9qAnzYaf5Bhcz62ny2eR1KonXwBeU",
  "key8": "5cwMjduyfckU6nmZcFRhNQvcvxTJrPdsvjjyFwF9HkB3Bxo5RHov2J3MwBE2FG22ZoonGNoPw29bBEYqKTWKzTSx",
  "key9": "5baU8KRKsWnCaqQGx3Ex3iiBwhuFeSDvvJBDDsAe2LBGf91P5tLSBgt8xmb8TTJJXF3tiGd11WcfxHFo3jcDGCyv",
  "key10": "2c4eemXNpiYeLRBgWUzqEAjvAEH7rBpyqZbi2LtHhKQnNWervKDo6v193MYPqyQJxJKhxQVz5Ss7TAH4QKGz9SLC",
  "key11": "4J2q2wo3QcN9ysuUBL4mJyo9F6uuZwy6Uh4PF9MB66W9FTbeP87mLH573MPwSn25vWTxbfMYKBdKvxNDf3WnX1k7",
  "key12": "SUPGSgvfNWFUTDvgEFnEBrqK6AQygb2t67ES88Cw2PFRitKm6nvc1gKXGqfeBaCRpdnDe9vWxYnfrtgtdXTMpB7",
  "key13": "3TTUgre9z9PeFVxgBCRQQygRdaRvVq1E6EtuGGWoC2dNwpH9S6R3XZxKazYquwkNrQ947Df3ddZptYfWbYvu8NEd",
  "key14": "4Bvau4MXFdFX3sE49mwaG8e1e5ooTeMyjdiVAUeepAJLPNZ9ZhkCJV5PMDUw78d5Msi38mGQ8xCjKffJmwadi2oU",
  "key15": "38fFoHBA8obQcSuuJi7ycDSWwzF5WbAZCPeUsVCFw4QKiexn5qTnhM1yTRzrciB9bMK8SUvvTQ1wGWvVPgUeZKmY",
  "key16": "4UqkSF2pQbZU1Xv2Xa6JUa332cRtcvkQyoYWHN3uxKVvdmrb1JgSzrdYHsKnnwZ5XL7zVW3TgTNAR2FcShcNy1eH",
  "key17": "2ndJ5g7spuYBKHUMRSAFxu8KjAoUjegpExcmkrnmzm5ZP21bDAAAXrouE8ZikdbfPjMnmzPNCQNMYe2KqQYVsWgb",
  "key18": "3qrNjdb53CgvSeM6RTMzbHZ62QuNHEi5jBmbUJuyBt8Go5xDGaQU1sbu8mQchvrBXjGwR8jQU5eCUJyXszv9QPiQ",
  "key19": "47tR4dFiTacSPBguDrUTk7S93ro92dWQrpDnEp5T26zYcET1yC3D3fC1eQzA7naiYLFQQrRKsQ2JAa93LD4L9oUz",
  "key20": "2qNQSGcs8pUdKWEkQwLV3WnzXMAKRDZsEYmYdhVFCYgHfeh5MgNMRYwZRUVWseJsWzEebKwBZxG41EbtGsdMzpN5",
  "key21": "PLtX7Q322LJCsD8sCsCv4gwPXwZ2bgmHh6UCmmcingTtRg9BwvHn1Fv4CvAEXt1CjuLbgdLQNGnX9whdMy8TyaS",
  "key22": "5B1GCX8dmrV8SyCpMLJUbYoH5vGGZCWtikXA1dgNFVayjVYZPJf8C9UhxTio78fWjaJMLxaXxvhAAaQjRK5kABxX",
  "key23": "21TDPFwY631djdScQbV6aLD5wzqGUth5kFDMno24VpQL6YRi8rEvmNpBAaLPJpqp2oRX27biSsNa5swMvcYjewyD",
  "key24": "3humzCu28frPG9AE7KTgcSAqMn4pwz47HyvwaY7aE8qtfebpzd9tJckDqp4SDV9rGDJv1DZVXQ1uE1gqsGQTUmxk",
  "key25": "3Sih69SMJDbMiW2xj9QdYwbpMVhijMxvr6CVuQXFVvm9CAGHYNpAAcNtCnb2bRRKjEuz8F3qiSKcbXkjrD1T9vwk",
  "key26": "47NsYEWFsTu782WVsPuq6Nnk85tXRtGnxhAhDy561BdWqJmhzy68cW3TpNkAVyUK5p6jrYtt7jT3hyZ9WKQDrmAm",
  "key27": "2ELk1KtzrsxRVBZjk5hJ7bYKCxbjG3Vn3pQJCb4EQFkpnk3M3xq85JLCWSHd3LYf5uvf3TVKUSL9nMGJzBTc8x5x",
  "key28": "5EB5gUPRMCaWm2GdX3cu14h38Lp3xJB1AGBcm9AAcrpXuMGUzgKeao6viKPpcKEVPtfXbTVK4cj8RDPsJi2dToLD"
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
