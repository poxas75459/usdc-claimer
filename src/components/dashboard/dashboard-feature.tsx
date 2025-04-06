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
    "o1RGBXVyjCz8BRT2xhzSRy7ryiayqEeGHTViBd3GZZq9UV5CRReqAeEgVA4N9wz8rsjhL9iQAeas8i94K3C6keA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n1cAYuaQdQvxBpxgyJQkfogvZpb9iQSieaXf9U9ofjux5Rd5tp5rxBvWaZfJ4Qfqvq6ebuNPR1uGtC3dxFoGXPb",
  "key1": "29zBsgpHgCg4nuoqRbLesuGvkeRcrk1xoS9oQ7DjESuACg6bgajXgHeGA3aSr3RShJDkyaTYND5ZGHizhfyk5B3Y",
  "key2": "3P28ptKTWPjWNyS2xkidp7hmTYry69LAq9R5oLNnjJjipPkfN4JGp6sUMoQUr7MUMboeSJmoB7wVcdf3bxrhiqJn",
  "key3": "5dCUJQRfJTus9MWdVG8bMXRmLgGBEGa2DTvmwYJBduZZueY8vycJyLPPrSuL1GpLYsS39xuToBmbHKM3g1SwQHPm",
  "key4": "3K98JvEBbt8KuWV7tzxKdSTRntjRbzVP5H22hcL37MGXburJqEkVVFkA7yyWi9DQdvohrcikwp48AjoR7Gv31pGC",
  "key5": "2VXpUoktCDtVzNwBsQQN2cD9rLJhBQ1XRu9idEsgoR8V8aQfJBJGYxwmsmwD4wBVARMpEoA9mUGcKwq6WXbm4Nek",
  "key6": "5QBVHSDt6Bhd7dnE2xZ2qofrLDygm9tnFCghFPWwkkfYtD1oLtrX8agkSrpEqTaEAeSZh4FnYxsNdNhv1XEJJM94",
  "key7": "4FGwmXxSYWmmWrBmNZw26DmSqFNn6dTkUnq8BqK7KCBvvubDYPqE1kXbHU1kWoVHRXTdS6MrkEi2zeNRFxpiaAqX",
  "key8": "636XTXZVijNjQGNgg125fE1n379LYZDD2Yd5gMa2siaTJFiaLd7bAnvGbKXkVHxiCgbYWaheJHAEohqkVcZVQWrP",
  "key9": "2pUA9ysU79Zx9pmoySA3qfMAaLCrS4n8f2wWuWES2ih9zhDCfdcQanppqboJpqHPvZZsuFrSR3XPomRaacJWqwkz",
  "key10": "3uTcoPbHReffh9pq5BDhPXtTwG35f5TJk9GcaePsVyn1yMcwmpW6pkqwJjnX4f8nxLmhcvtKszrLkTnDZ6wWn7we",
  "key11": "ThXmAzibNHvvdqs1UZjMFFUEdV1UEoTYooxfeHKKZm88xPPxF4b78NW559JsyRpWRkPGrkJYZ6WiRYjC39BL3iM",
  "key12": "5HdEwrTYWAkFsBXG7f4btErf6xu2qTaefyabswDdHZ3hRkKLQvq4DZSAy4fnHSZD3a4B6YmiLqtH1aEaam6qJUxX",
  "key13": "5WAnGkaXd6uQuCR8hneXVWujpXJzvMwFxiFrscELKwazkjuW1qkNSKsqw1p2ACdaRucC7EenGwqxEXqqjZkNv4ZQ",
  "key14": "8sBbuXiHnXTMZWkXh4NTXHnNbpt1sSb7sPGkNTMw8AtSyYGtCYJE1YoYd3xNXzZTfxZrSPjnVc3XRj6JERudVug",
  "key15": "57BF5XmdKzeU6ETxpQotmRBefxwxW1VmCkdVveBW9Ab2ma7xB6c94NMwv5LnDYwUD13iYiky9GAk5kj7ro46wkdZ",
  "key16": "3pRP4njBNx56hebaRn48nPpSFxVTL31ZyrfCEyfwvDQMFAWhpv6uspcDvHTJr1RiH6vygjBL6Lj2vuhJ3W2Bwdcp",
  "key17": "3WR9YEeERSz2CkAVEzQ4SvgXeQkDAzfSFaJqn8po8SMtYJgY1wVhJPPQ1biWWZw4SkYE46ChiQc5ahK6sGjEu87C",
  "key18": "29modojSdbjMk4QqdfMxHn1S5hKVBdDpKw7f1uwFgKAgb2XHYXE4is4U3p6Cjrnu6oF9mEwJxr9E9HLQUedJgawV",
  "key19": "5aBwRKjPvzfG48g3tLQEim4m9MmshqynhE2t68k3c4C58MT9tvHDio4qSrY6g273J2RcFA6pAyDwRfEa2WzErEjb",
  "key20": "4Wii6UHBKyhbfoJDubgwTqc5kKPS56izWf3k5VBu6Hy4gmNeMWTzrNDcVdA3Gotxt7mH1vBQQu5ed6TSDTi5ofGB",
  "key21": "sYRZpWoCicvN6MmFuFS17CHCgP9K3ZsRf1Rke4YA5PNbDqBCBZ6ufaCCU9Huf3fXUPAvJ9SUsm2CQd29FNB3dW5",
  "key22": "2BjmZeh245JCBveymALAezunnXEMGfBjDhUSJakZVCreTkbQkRM3Ls1iBLstqd2ENC7yxQ86AfB1YE5u9zaiK6TT",
  "key23": "5Y5F47xLohDXEu7HKiz6RUJoafgLdsk6eBZ8dSfDGaRiYa8dE3g2dqVpKcVoW8kQCMJKUwXojTpV1riYDRKHAM2",
  "key24": "57ikva85EqLNFrWRWQJmNAnTdwYPZ2Et1fmjVrstiT1fZeKJBRU4jvoADxTkRXtg4JtNMSL64ytq99JQZ4VNvJ9P",
  "key25": "SWqCRQZHKcNGuk8iKXDZmXYQt7K7JALP9u5of3XVctLQu3EmvEJXiwctNWbodr8dto3TE2fWrtMeBCkJKqgQ73w",
  "key26": "2gRTAxYTYao3ndoaHUNk7CUhqsARxoTg7wpn5i47gY1srPkrDXHvTzh7mqoEu7j6mgx5C6QRHi3iEyMbuoiSRqjH",
  "key27": "3w7L6kBue6fgWJYhcsbcTrYMTK7b6vQdZJ5vMx2VW8d29Ghktx2Dx8HrcyRKk1i9XzMhhC3cU61JYWkEPBaTKhp6",
  "key28": "3SpC5tx5DKeU2sWH2rD5kLtbr2XeGHKKwR2uknVEFpHa1ZgMb6mQvSVGD2eZ5c3UccMCCSLE8SURgoQxW4SV5jGL",
  "key29": "4ZTrYwijh3H6y9JZDEfeUjLShtgqVGB9LHZJ8XNkQYvN2N8K4yYD9h44g8frcPcHe2PLG3KtsoVWCaegfkpBvkbG",
  "key30": "4A6jYqNbJ9kBALMgbFgZHVhNxs3fDDJpAvrUgo1FXnjuyiw3VEGsUNWKutcwAJxhA2zKTPHywLHKst1FHSX2KfNG",
  "key31": "3mn4sQJ6L4hguwkavBYLfhVU971mYW9CzTG2mEp3MAbxQDZQt4i2aRtWvdyfrxt6i34q2ZcN86MUPfvuzNi2xajR",
  "key32": "3vq47kGRh9x9jKN7sJt34sz9ndEKMeNP7x3o4cScDkiTkL2FwY4x3FjdwnF1gbWnQ1y2AhFSaJMP5MhciAvjppYp",
  "key33": "3StXxPgqKVqQDAamtpTYPVpjGJvnmFq9QqAtq3J3RQVdA5S1gUh6urtCMyMsWYEQiaevFQiEWdBDUD4W6DZ36UJj",
  "key34": "2jqZHkDG3PNbF2oz7ahdBgLJjdhLFMetmwB6SUy3FYgPigPsd9SNvKJe3LFBVb3RFUNB75zQNG296xEs7kkZVyy5",
  "key35": "3nkQ42Ha4QbNz9iKuaT42gf1Lya7M6mXJ4ctGLysiSzYm97ucgFutSjGgzFQX7EBKQYXjpCzHogeHcBmNpUgthxo",
  "key36": "3jTALznibvgWG8eGPudTeg8ZpnsZoHZ5Wezc4a9yg7PdXaX9hMaskbryjuaAetprsTDbmsFtqutZboxBAXf6ixG2",
  "key37": "2X4qsZRaXgahPE1FjERPdPJAx5wPFQobEkrmyfQuPCEDbpeEcTTziEkVmwQ4yAEvEx7G6fPipSdBNCjNBAQXUYgs",
  "key38": "5o6h1c6dxoGySAwxoigTganU6FnojRxXpMhUmsmnr2iYaCTZysJpicJZnswANA8fph6zSnYTMTDZv3GZ3ugXC1Mo",
  "key39": "4bd3BAKs1ZyvkKdUkZfX8YSVCB7CWgoPmqjWGwgkJVeCSrcsPDPWZy63aayJCEUmUvowyJxSW7dkAp9fkt6Uo67K",
  "key40": "4FNuomSABS3hZQMRwP8yvQxx9XTRM6w49GB8v7AEwkd2knf9NjndXFbMTUaAfcvbzT7u6ZSfhQrw2WgSXabyooUV",
  "key41": "5SPLBkBYuswJkdYBxfrUuibnFLH2SK6N5Z3x6JCMbsAYsZreWR2E8XenafAMhcf7t4EiwpTCJxTdgGx1xnPTviPF",
  "key42": "23gsj6HXGxvh7tW4FUMXdSkkh64rx3xR4qVfzBnFo4G1b1MrWu4EqXWfH4ZJxznJoMGorWMSiNtiSCoFZui5MrAT",
  "key43": "VnWcUVWMBGxWcbB2s2vghUP64Exy7ZZpncAajsmxsXWFpcZcfPiuEmcau2acPxEM7QtvQfUoRWzZwj7dvZipYtT",
  "key44": "2Q9bchN59FG2H4XREAMJFppcHQhsovsrRRZPEqgQQ3hquvcqaFRbmAQF8xUw2S12c4dyys5B6PU7cEzNDN7YXG2R"
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
