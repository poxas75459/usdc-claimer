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
    "4zggcMvA9XQoQtp82qbTjcEVtSo7Z53HDAWSVZeKtiL9TRz8gGhnuKVJQYXJW7Ua4buxLeMgB6rhgcxfhgQsfCY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z1dQ94dEYVNTTPsCj4DvzntBNXfVuqhHDptYdTF39sVs78iAjxGLkVWiUa67GeQCzzaWuubmAHXrjSvip2xDuSj",
  "key1": "5XNVRdNmoFy1RpiZ4VZqk7oiuUin6vipJcTaFdzmTFjpLCocHUFuchs6u1ULrmWSydLJzDFZTw34XniRjndvyz3Y",
  "key2": "2cExoFtodPs19hi6tZ8zzQ1iAkX8JLaee9MK9mXwgikbLN4C3vwupgNSUtx8ee5sehMu4K5m5XzpSjryqpU8j1ng",
  "key3": "BoGP2wmmEe1hXxejhEZYw74FW1oUETVLJfMK1x5cpdveZjsuimfXu2UHXaB9hJXX1tUuWLuxi9DLXDoby2m7HQQ",
  "key4": "M9owv5RWuVbiBa5jJLcXm5TeZESzSrHxejV4eSZ1ZAgASgfGTX8nbBejdnapD9USRkGNar9at7pguwwxbwSjgtY",
  "key5": "42xZiZVu1LcVnHpvnLyeLYLa7vKvo3QgMzsBKSHmwqqphgHeQjgDXd1qA7RtzrYHsP9DVgV1Q23cAU6vUpS4USBK",
  "key6": "4BomuMyVevToRXULw2kSpdVfpowiSaRGF5DKf4xBpWoutFNfgau8BzDmXguRCRPpwPdSbPWR6kMxxcgD6uRxs35s",
  "key7": "4qbdNtW4PBrsiqCQyzzDB3gsisTknQ8mqBXRmiriWwDwjopYAgNdtucJ1nFs34NK9qiRoMBgfMspzFcKrqUK5Qge",
  "key8": "3bkWYp4yNBDciXMjk14HmhGmFmv1p6GZ7A8q6QqiT9zc4onpWJnEwMqzFbiprufHiyDE7UFBjhLxvA5HsLAoBhY5",
  "key9": "3e9ziEKYSejKYN2gtEMityxebMvogs6Tuu1wDVAs3CuxZmrQ48uDfyWCM73uAhnShfA4xHq9hWjZ49aLmBgRq1QK",
  "key10": "JwaGajT8XUxs1XuWWmGjR7Wmfy7K1MSqQ9j2XmgXMJWzDTesKX2j1B6QiLnuqXs5odp6yi5PGVxkopi6iukKrWF",
  "key11": "RSWFfSEJaxqoavDyzFmXd4iLD6a54wJmim8V2BvNFZPsXKNt9VJQnAd7EtEtYBGG79sUDxKo7fsL89VyXyqaGh2",
  "key12": "3Tu8xp3ifRTwzAYKbrqrC34qM36MPujJCwcAEBPpyzn2nWxLosJyy8eekF7XqcEE9uaa9aaSiBhzPrU9cxnAy7D",
  "key13": "47gYv4CnqEygs9mc2MRov5A3pemAeZXdqh9j6iRpvQquJBnwWq4SMKHFwEraEXiGnm1Ywm44XZdfMhDttTGrt9LZ",
  "key14": "QiouhdtF64mtK43jbJ9oh1hZWTHNKC5zDMpND3hxpT4eLRSUSGkWXiDeRpkFhmvgoHVno5KQ21usTPCNpBJVzJ5",
  "key15": "KtNc48pNbz8oTAYSB14Rc3KG9rSDVWrZ6kE5EPc7ee1mfArU6zVJNnGetks1jocnbVYNSRwcbvWj7wxh6SNMKQB",
  "key16": "YPwA4kGi3ZRU4PfM3Jq9bp3xLswGjHU9mVJJmdZZhpyewD1oJpUsLuoAcDThfGRyvo63WKFxpotTLHKkZHMnVF8",
  "key17": "5BoytMqMJLKnrmCxRf1fh4Qw5xhwMu5u1bNyDJSeKmn7T2TpfVL6JVzGS3Ju5gJFxVM67TtuL7mdxsFRYdXgFmKM",
  "key18": "2DGhcvb8RC1Ccr2yv5HipsKyKUhVhnne9Q2ctcCEarg3B3uCABpzALTvu6cCPs8N9Bwkpao268GMoARh9qygKSBE",
  "key19": "3t9U2w4TPu7p3vhHcXCxSu2sLGYLWMqHqijVJYeTz7He6pD2rFgm9cdREJoJ96p51p4AgCAzXGU2gb2qc2VLeCeH",
  "key20": "aYAcWeUFrCBUNjNnwGzoMaZeyU7xLmNpn7hGYQpjudBqLpiHrNpyULZHpESxakv8D5Be8xvuABd7wee3YRKwB95",
  "key21": "UpdedNsbXfM6VNsc43nGvoFeX5EvWDJD3myi3g15AevDG4x4xvGhb1aqqhcwvnKn2M3dV1wqxvkz1qNQd6XTUui",
  "key22": "3F3NSvF98feW4cy76DrSJEhJQ13niSL2tfJpWficPMXS6iJ18xERtPogezgAcinPiSRsEDfGJZMKboggeRbXSRs3",
  "key23": "2BcwpbCwoSBVf77724VGAV86oMkiqzHC3j8A7vtkQYUPpvg98VWrXQFCcLgggHrMuBJ8d8aT7ZxQVPpXZKLbd6et",
  "key24": "54eZ7yVkPynJfEY2S2tsCWxjhCdrdbYUkpsYLEg7FVxtni7U66mVgfURx1pLhrtyVRaQ883iUvfP8YrTZ6FPvFyr",
  "key25": "oRvmVxWtWBUB9oDaiWK6AqeAiMfMQ7YXF2gMam2PbEMyrTkZ2oehsVz6Ucze6YAvNsMK8rWouNWUQfPaLYgW35e",
  "key26": "4UExYNwxD6aYsU3kE5VmMLjvDXjiTzpUjp9rHjFbBKhgWupopJvk2uyTDAsLfEeSpP9mXvYNHZNCAaoqXJCqAUd",
  "key27": "5HZywUcyaeesbXLhSYCLfmvaxwCSehTUkZiS8vHvy6aiFXTzgxZa7pNxCmaJAXFuX8CPpSwszc38Yr1NCvvTWgVe",
  "key28": "3xwW9RF2GwwdJyYyc452riphoWU2iLcNEngqTtKSFDBHbk3DFdj2oCb849eTaKhQzyQomb2fgNdvNiZc7gKCYZCX",
  "key29": "3HWVb3Bv7BH5Kat5BsZtUgjFVJPmsFbzbhmXjhJCEw8HW4MV1K61JcLRcu6XdMuoV1VwNvzu1JAzkRpMWXzHY5yu",
  "key30": "2eKyuhuwnj9twEC9vaoeoYhPZpqTw6CV4wN7q7SGd4VUf5AnuKz7Yz7HMZGAuBaAutDA4WiSrpgpYfmSSzsFw6h7",
  "key31": "3Epq1oQGT1pxNNrPtSaEeT7veh6so4guj9wLicwhfMmekyq5AG2pnh6XD379QhdK7AEudqTBTHpdGLaoLLPn6U33",
  "key32": "3vwt6kvURMhPzuaBnZerhgBYNkh2JQF1V9NJpPUJB6GoH5GowpnLW7zF7A5sj8p2yuotsXpRpN2YpCvjVPqgob1K"
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
