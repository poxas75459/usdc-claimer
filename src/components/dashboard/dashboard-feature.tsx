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
    "5MvpyUkxuUdgDEwETkYg4MaTfsaTZMtD3jTjCsq5fzB5XKYQ2yDRfyHYE4ep7b1ZtvzF9bBhUwyLppUTFZiTxGGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pAbKjL6aSNV8FEwrFaqHAjzrsNSR1FWmFUvj73iWGjPtUpxd4K6JfwA4JBpZC5BynfKCEChu93MCzfD4FrXQHDg",
  "key1": "kZnsnn9wofw9NjLPZ4W3DZXTQDn5KaxZab9KxraDFQD1w9X6y1T2ngwJgrYdoEi6miSSDUcP5tDpCFTdgDx3bSF",
  "key2": "25sziobtNNK5U81xMFe8a3mxNQD6XsX327aA6GSzZS96C5cjyKJoPbL31BPViZpiemtZ3y1TSionfMhscCKe9km9",
  "key3": "2PX8Qv4XuaBH4QRWQmF9YrPUka3Xvhn1YREU1X6d33JpF9cqhv8x2VpfhSuqDpRtKjaunUnhy7QQ6r4n7vrLCuns",
  "key4": "5RxA521MF2KFd9yDPFL71NNcWty22h1kGTrjVWDJUb87dBe51bVEnfdyF7Nb5R3uZWa3RjbDSFWDCqhrC1tBcwfi",
  "key5": "4LCbKcEcjXmSqghSuZMFX4nS6553ADW98K8QBGqWzMcapJ3g4fSLzyGMvGQim3aJMzTnfMYacnso3A8wEUqbC5HX",
  "key6": "4qRRjQiqKaerTosrrtU7DgyzdstSitWH6z57x3Cc4mg9omY7bj2ciF2VcF3Yio9TBiSkbPWi97LcR7iGQQKDFwuR",
  "key7": "5kim5zgLLYzJufbvGEgSBgijUmoYccNRsES829zgLrmTsbwfohrn8YxvtzXmkjqWAeFgFcRp5FdCC8z8XHCb37UW",
  "key8": "5pSAHPJfCgBbZBJksdcwbj5CgmK9ZKeyLAdWidLxmCAF7A2Yra1VyiRuWWysBYnCQqUyTHrdL9Ay8JMqj2vzYgtB",
  "key9": "28bcFRTW9zo2Dz81amUCMfE62emavUJnopYwowWVvVDcURvTp2NBd2Rk7ijoeFgWoLizPa3D8KuDhwi8ppq3SXLi",
  "key10": "5eYf7jtGTc45FtTyUa5jNz8d2o9gJSMZBseGFCSRVCtuuH3hCAsYzkhPyXmmJYrpuvb4utBHFDgzh5A9CwFoxvXo",
  "key11": "61ssqnh5WJtU7RwAUMuQejYH8UqwfFjBaErqN497rqZHa1q9ULm6dPEBhrafSga5t9sGMkWXXABnqDLComJwBsze",
  "key12": "4JJGQwFB7jRT8PxRm2kSSG69gwxsVo7mWXsf1psARro9pL7UUEg8nfjubAq6tNGeCpCeynWS9ipNukmQ4FF9zwcs",
  "key13": "4s9uE1GWEf5oBH1YX4yoPyX67WL1v3wAVjCePxxuuoiizN2sgsMLhFfeQ61JXskgxy87HtDdT3gGn2x7A3McgoEH",
  "key14": "4pnhtAq3n7Hr47GS3EaQeiZgDkiYAbvzPeRaKBcmMijXvEcp8uJnyDGrfe8Ye6oczSuZHjXGi1wUDXWVZBbNpD21",
  "key15": "5DzokzPaSgSkn1XeMiypuQtVRycU7jMNEfzTmTKFKehNNo2qbaESVKvApeDscUjJfidwXrMY8cdWfgoxta7GzBiT",
  "key16": "2yJBmqPhp3gBjaZgRhKF1ia64XmLBaHeKiLWMeAptvpJNwzzQt9Ryivw5pt4S66MDj9dA2dpy3LNgTPWpFb1WBY4",
  "key17": "5hqYJ5z4U3bo5w8vt8q2PAKYnrDxrP7bqCGRUtj9HtW3kSQQFh7aju58EDNeRRkcZ5MdYEJZSaHS5WuSkKzVmCPh",
  "key18": "3ME9GeRMQLYZupU6Suiv8Sue6P9dvGmSr9NF57ByoxVRq1YY21DtMiDniDxKQjjHXqnTqoEq9GzXL1RbXpvpk3Ln",
  "key19": "4GkErqMDkEDp5GeGJ1m3wbRogEfgvQZnpyBBCdec93YhnuRKhap6G5ZC4i1eWHHvxfdHS97zzWgF68qQWK5zivx7",
  "key20": "641WYEFSHnmjCbgkKf8EHcSE7cuMVT98f7BzWFhcSbthCfojJxMPndeSa8833YWzvKHXEHqNcXdu7vPpmDooAxkT",
  "key21": "JaYhRJxc7KHee5WVs76TmruSkcLUZybTvdS6mWsAgScUEKGqGw7vbmFeNorz5BzT1DxQ4JxAsiuXN3BAbQzcweX",
  "key22": "5zMMApUy3UPv1NAYev5pqzTnL1V8xL8zjf48NxKPxNi7GTpk6h2dBquyGu2Wx99W9hxfNX7JjU8ch6zG8C18hqdP",
  "key23": "3WRjvCwHeJfz77vctNpFsLH6aiSGYYYRugDEcSpiF8RCht4HASAdxb1Fwpn392UXomSjbrdtmbCWdVe5bGM7ewAo",
  "key24": "g12wnmKLuf12CGsd4VsyfxAqvXRBddZcRt5W6RtGnirMazcbF8dNgFaq7JK3HQYnz4nhjDf6bFS5DEksspANwBH",
  "key25": "2UAXKejuQq4raX79BKz77KA22wNxuoxLmpwzpZeaQmJuDqg9hN7CeC8SawV78eEtBC6n9AgKU2VyG1f7Haqn8Wk9",
  "key26": "2m2EQmXPhFdbD46qeFZaXD3FoQxq8jDDux6zVgyX8DRLUcmPeA1ZJobSrvWhgusaCu3WmnPJmu79b7uZ7R42Txhd",
  "key27": "4GrBiGp45rkZxbqA3iwBbz9nak6ZYZdYDFKsNpiVvKi1SjAhiWPHiA3EFPs2ibwHZyFh2f2Ck5gUmiHnjKVNq6Yu",
  "key28": "3kNzKBQoKBijrGRnG9Tw2rduKND1g6L6ejKbdajFP8jDpzS3viD6o2DB343TNJYgGJTLYUtCMJFiBCzvf31Ln7va",
  "key29": "5foA1fZ5jRCnLqrkGDn7y1njVbfZrCZhcVTcrSpdt6BK1MHTjGiCq38wnKJyXKAW8seaXLeWztynGcH9LUFwLup4",
  "key30": "vLZJggzcLgdfLDtu7Qpn6HwwGyfhEa5jzxZwxn4dLiUHQjWGV4dxhY3ycvwLMCDUE5EETCPAQmfT8GnP37id9os",
  "key31": "4DoRYXKu25sBzH1xSZJoL5QFwmYMHPPHR2UDsmyb3aQepdPNpXntNFW7LbM5uXfT3tfKw2a1rYGDRU3vJNfBts6N",
  "key32": "5yQMZksCHorR4Xnf4JsdPW7MFmeWWA7nAyGUnKJZjCJjG4whCK9rirb8eSocNTU5KXmipRo3Z3XWdvfCG7zGCETJ"
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
