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
    "4yobnKVEvJ4pCHPWX5CpDpbXTCcp9ERqtRJmiWiwQWmj8AiT1RQto1TJHLgmq9JZnsic5qgWKt4DPDBcExEoTjtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wdHZx7ooVCZo9g8cVBvmgU842qudpbxuMUVUfWjfNarPh5sFjQ26DypuupQKp2heSfeBCuaHNaaX7LNt1EFFiKK",
  "key1": "4LBpSGAusjqoVEdh8ndvQ4wPCTaTVrL7hm3dukCuAifoxRKqAeMNQf3b5mouBAAbaLg3QzvZUh7qzu59wrRsgKLK",
  "key2": "2jD1eNExJi3ZhqTz1FyaXipUsSbYvcHwvwoBtXCFuKT72TCBNjJg78ypN88Y57ZhDcRTS4LTWBe5RF6v4esTpMPs",
  "key3": "3WSHnjmcAjDPFHZBRc4K93Tr3EYd7oe3FauDZb2kQyW6fn1StnMKZuBQYvRdkhuFYSNzzhMK1XDDjSoiW7fCvrd3",
  "key4": "3zENtgQZRZLqMc4b66BFXzyHGLAjawdEhmV8QBoPjXyzLamvQcnjUCTEYUMC2tdeaysQjDfCx2e7ijz64ZtzwL5v",
  "key5": "3PVNWFziufxp35U1zZXS6pA4jqdyqFycgFRUQvbFzM4oboeJDEQ1ySn5R9Qj7m71nkDXr8pvcKNVCrzBqbut95WN",
  "key6": "2d51wRqkXymGjNfkXs124HqBLNmFZCD6C34ySjARiZV6CwKGStpM6MgC3Lh2Nu9JwcxJnkbfHT6UWCnis2Zp9J5n",
  "key7": "3iunH8dWAqLj2XBaRyM6EJn84wDz6Bg8uN16d1MrH5Qrw2sfAU2W2B6x9kBSZ8SQ9hUYZ7Csp1UbKddS4uimQbAC",
  "key8": "3ymmJfhNtufdUVsqetA8sAxKPZnuYQc9arPxWzRLC3vRQFeNX2ns7juwacBKuPyicMrUMkswCB6N8yBkw9tQXw5h",
  "key9": "qQ24vEbndJ9E8cmMPB3D2CrX6v9K3mT6skH68aeoP4RiRK1QXXSbgkKBWP8ffrynTsknYD732sdHY9NyVfrNFJN",
  "key10": "3gbgsqjC88rg6kKHNy3GR7KXzaMr6WwktZwZqSB6tmd5MN1Z4SsfDtbrgx2UvBe3XBeneFCdG9q79omkQnoABjUt",
  "key11": "4xbuoTWH8exwMXAxga1WAv9g4zQGm2Kbfeu2UEyF9e88sKETvgtgSnwgR3QMzj7z48Kf8RhwRkF6RD1ztf3pdxtJ",
  "key12": "3BK1A6Lg3faKPtBhscpdXsPyGLjFdAYUW7MhtVMYumajGtkMQKKRg8A4CCxqf457sagH5Focyr67wkSvVPHhZCE3",
  "key13": "JPHj6bnpWbh8g6888Gq8s1HyrLCuHw1g4xgP6kHBmmhxALXvGbZivyCjzRgQpoKEsfbYQcdE7QumCAtRorQBN45",
  "key14": "3gdMMdGU8HbwRz82drqs8RnKJDUxe1z7XNwBRmXPWY2ttDa1TtAyK4iMTtB6N8KHs9bzUQQPwjW6fiLSexAebayd",
  "key15": "4xZdDi8GEiH4rRxc4ept2fzBKjvhXJNZ566k7WQPbj8zTS66msZaiXNpqn4oy7AKX15Phs17Jdf6ju3fCdnvzb7v",
  "key16": "2ECAW661vX6vQ4K1RawdrC4MPggxaQVcANg9G3qY5ikLQXkDML9CD4C4R1WXnpNWYRvb9cFXN4FKVQ6fAphpRCUq",
  "key17": "2D5nmhYCwQj6e765ZQGDzdbavvQTm3edtEAgmGdiz5XzffTr3TTJgDMDUhfYX85YyVaLTc5J6kMbhxpnhKGo4KeP",
  "key18": "iNAS4YXAMaUyD89yiHJtqB5LGq1TqMs5VhqqjCwyFG7hUBgEcaT1BfcKeWWynBFiyF3BawTHqkWXrjzps6HvgWD",
  "key19": "4nLWMSVLwDyJPZyyUBwyqi6JXqwM5yNEt2iphjhNtJRUnoiWnpoqywGPgMukJvvQkCFzxbhJVjjTDDNTpzsDbXMc",
  "key20": "4jcTuBtU5qaBjECK9y8qy92Wf9BpLFoeZADYyRVPwAnP1ud2pxVwzQWj985FFZWhP8twdupeGcWca3JMR5zf4Zjs",
  "key21": "2EGjbZVc82L7fb92taWd41oYGWs8EtXix3xkKKqfqu5KdkwyM6gRF1vS3oPkKrzcAgcnbVUjLm7RarLdDTBTEprb",
  "key22": "2pMfMvfLsxXehGwzCgGNstXk4a8t7ccwsb9GGRXouKFMC5Zo3xHthz9J59UUXRCgRF1Yw1nv2FDizaGxVpnvyMeB",
  "key23": "5a3Qcx9esXk7zaKyaSvxpngcHFXtZL59otpYcKLLcDjFCzPt7E3eh43fnrEo2myPfGv4ztWYSgtzDU3Z74hs1K9Z",
  "key24": "5c2AQ4goQMMGKEdNGtQVBFAJKvAaBHB68ggGfK9USQ1xkUia5kbSpbFUTLVG3g7Z1UPrXccm8jaPgecHnRGDRiA4",
  "key25": "AhDErYcGpsAegMfagqGLJUGsEaYXpFPVfPQ9J4UCHxwCE8pDdbMvxNpCaeY2X8vYVPsKDLoqP5523SCHUFHUqAG",
  "key26": "4uypqaCqAV1BxACCf4uojwvadR6MPdRLgDC8CVMa7jaiMKkrFoGBjHRsKy8p6h4LVwME4zWpdPUsihwaqAZ2UdWU",
  "key27": "2Y4i4mZLFLC7VX2fP9fk4pEFScyWSrvodLmoh7UAYhdnhmBrbQYvvsuMocPpTagMxzJHDaLsDwZS8oLb9s5B7X6f",
  "key28": "2hkp4no8vdTN36e3p2bPGAJv2er5QTaLVNiJbEKQ7XVhUdwak4iwXBRQpq6RNhbehmULT6CEqw68g1fnva9AbLnS",
  "key29": "4ZoCWuB5dCXVXxt2uXFK1sxM5zyRQkEFYuaQkGGzncFCujxzbenxx67PqnxkcZCRmd7mnyaHiCbCHDfbTq7VcxEc",
  "key30": "4p3QwMum8VxRTzNHbPepFRdcBvwrJcoJWw6TVFaMaT6m5NoLspXiLoL262iSZBfCQsr8N1D8iLUAh9cnZDs2mh16",
  "key31": "4oMxjeuaRrMmzxt6YyshbfDysXh6VSpHkgucvZxMgmuQbUwzESYPMQXiPwzRQA1oaEWwNpe5UBM2cNTsKT8ez1CQ",
  "key32": "3kCsYjr4grrMF8nkrcHYmodHnJ7dvDhbyP8hgdrdQBde2kiS9Y3fEGB6WxWwgqQ34XmWUSc7meop5hjzYZCd2JD2",
  "key33": "4KdbYrbrxThnTB9Qu2YiNBFHLDj1L5xkWuTh6DLc5vtZyqrSMbSjQKWgHHaHxKyaGZtWyMvrtyAMBgLeD2WNFGPx",
  "key34": "2x5QCfWiJGFwDpyJ8PqmcAz998aUZcJqhPN12q59s81V3zGviudqGRdNL1CZpHYyECTmx2Rit5YGkaz4puL1XpHU",
  "key35": "35bSaURFhk5xPnK2pyYKrAkRjd7jrvgKHxSPFgcZqxgWvXYcSeznNWNykGFYxmhsAvJgQY5We7r2yzJoHB8kS6in",
  "key36": "5iCDVYYdaqaRiFsqz5BSf7KuoFmCjNtSastXDHtxhYu94oPBYjum7gnm6aNNF32WzeSNR3eguvy5djXBJCQ5v41m",
  "key37": "3XR5EyoMwJ9EvxjUzq7mFZK9E3G13Xt7RMfn9GSrB4ZgXoRYV4w4Qs71ogUFW6W65urRq5M6MxjsLmRM8aCroq8a",
  "key38": "3TbQzTfNaUXUf9CLEgRB38hRPX81bQkkaexwkhKmWNhSZ2naEmhnHdxyaf7oW4acPtHo1mB9uCfMDR1oWBhRMH3P",
  "key39": "3DHfq96FBF7UJd1FgYc96AsXevc74qhcGNsZxocgnmg2bAdy28AQgZMmCC5HfHdzQLH3xjDN5DLTcoySCDBUuyKQ",
  "key40": "2oZRXGBoJGMX4VKpZnaGpg3xkbzy1fQfqHzp4rtHiGTD6qEcSn5pSfs2AgKQ7F825qBQkoxKrE4TqRmSjz1nxzdo"
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
