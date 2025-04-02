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
    "2mJFLrFaMagCh1fZ1T5g24r8JHAeM9K8PCQxxLUFufZNdAwvBbt2MED2vr38dHAK1yw8ebbgp65xnA1S7pppaXhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NRxtoJvt3GAwwkAvsfJew1fwjWgyaZuM3ecZy8fmtg9ZY8VE4oB7yszWPmn9L4PcGQjgZdjqyi9BDLntFfqeCKv",
  "key1": "VCustiZBQyvy2ek5eoFTma39wqScqhdUuwHuiioU3rzxUbwoEQtJjkzLd1urPqyiHK1NFufa4TjCfsbo4xTeCNq",
  "key2": "4GTweHfg5sCpvpUXx3L1aJiRwcPxQU4gnNUtL7PzxBGebMQ8kte1pyhhCc8DvndEJ86bz4u57PNV4JmMeKkbxmiV",
  "key3": "T3JQoobqThZZEaQubVwx9812VNzfcsG7v4wLr32sw7x2egHf2f1yA4jZ4bQemRng1USHW3CJcqtgHECHmdkiUwX",
  "key4": "5E5Cr7R7K4MHKu18Yv24cShKLrjyQ269NZrXpGuqw8qQxT8niZ68uuiW5XoWG4Q1fef4CkduzoRiGEHEgukpfjhL",
  "key5": "5Q4ZbLccRGbVX1x3XXAG8oKFffJHAtymrCBwHGJf7wE9WQX9S8xxL1N74NUuX9TpdTvzMCjh7pRnw6MerrfAJfzR",
  "key6": "5858zvkp84ouTAHsV7aad9tgmb5prMbFeF3PnkcDeA5RFoWHFSHTbdiMwqkXa4HXaEQmkNS3h7eStb6zjSkL2QaL",
  "key7": "54Ebm9kegtxaFueb8WgQSTjSz8QoUwdpZ5BwLGewu6iS6zaB2R7XSTabq5EKghZtGa5Apo4baGsZ4TeZvBMQE1To",
  "key8": "4TEJL3Y9Pbe3KJmA2AhM5EoyNruf1n5UXuns9cuDPcQAGJYvU9jpN1VGSpgS5uUcYqztPhZ5LgVwYaLA62n9aqqC",
  "key9": "2BEbi6HmsN2sR3gxxghtMgVj4zN85y2YPDxKKqs8vpFmkQGF1MEmecxMg54UjHkbqryVk9FeRBu6ZMfLpZ3DeLUs",
  "key10": "2deUhFQkyvD1sStD4ouduZvPFMowciYC7z13gnJ32fRm8qWgyxUt2cDB7cHQzDrC61VdEf6ejad66rJhizUpBCam",
  "key11": "3y6QZKKcj9U4W7LgbCvFBbko1WPSKcp9avNsrc4meaBJfsRmraoCDK3HmHotWBscUUZEiNYzN2iZhdv863QocueS",
  "key12": "YP7wRN3Z1Q9zha8mYnsRWs1Zgs6apkeuZUCPwfRGqX2hc1L2D91fH1S1VU8292VF7M4grWdX3b6rHx6n167c6uQ",
  "key13": "3ksAQZb7WxBEfaXT6p5556DZErVAsFnRP389Z7Bv3bYReodoYkpJ9W4o79VcjpDRNYywBkSHkn7d7fQwLB8sr5iT",
  "key14": "jM4anyGxRmAm1ZaSswe9y5jD4Xe2wS1djwHmGRKNaCHPNCMXHvBbbihkAVDPvgqYcvMsjMW6QQXP6dcjHxCv2rv",
  "key15": "5gEjB3DQdSj6Ba7bZZQGVABnCQuoS67WNcHiXM1wbhmoNxdBDimbzWe4cgD9mJMg9fhkMt4Ghv15kWea9NGMFXvz",
  "key16": "4mjR4xGMFG9Q38nb9DhkeMsWBQZzKLGzDLbVRgGEvSwnvp83fw3Cep2UEAtDq7ELCrf9Sgy6XnDWRveqansLbKwB",
  "key17": "5uGxVEM3CChUVfqTWfjRqWZ6ZtFxCoirUjXCHQgMNrrpR3C5pkevvPaVWWr4NYAQPkWUBft9TVAQK6bU22AHZ1kT",
  "key18": "G9eQ8BP8CB5ZaLj7viExmGcxq1LEBqARCUoruQxMJLzca4HDf6ikwoQp9GuxEJ7YhYVyeJuvXv6H4m27arWa7Wg",
  "key19": "5PaWJGPBWG5E7pUqEo44i2QneGEivSdEw2ZLE6Z3vNG6RNJjQ8gotsmCnkqmnUaR9YaDxuh5wY1jtq48cgeCWfKk",
  "key20": "57ghsoR4PcqZJUwjEoGcJA3G5L6Pinr1oejxbKpwzwRDncB23GgvpMWbPVMQyAiBd2qyBqbEzXFGwcRcNobWB9KY",
  "key21": "4k5ULJFTBHCmi9bHcavdZUPq1dJ8SuPXNCzu1m8eKedUsptib5qS8RNBKzvjs1KAKvfVdsBHd71e41eZabACrv22",
  "key22": "aBHaUqdKeb6fJ5D3bCmio4SFo4sWUKNsQb86bFDGpV14j445Cvhw5fKHs3KEKjvmoKSmc6HVqXsE62mRbMYasho",
  "key23": "3oYcDtj8yu1wBqefgPP4QXTzQ6qdYrzYfM5Husm2kLzRqTdy4ruHd4Xr3GSf9Vc7AJTRTW8Ug4s87EuTCz5zDWWX",
  "key24": "41LKtWLC2nC7aaAXNKiHwcnzTVkJjaijFaoEwWNakw1zKfCd8DwhncreDwzhaawueqSR4Nmb2jtjZks7wjZNmmrv",
  "key25": "2fYfbAnvu4N4eFYvhSR7xThotqrQt57SS5KTmBE59LxR1bcvNZ5pL1gQRcTVrsubtrhcthsPo4k6ZogURSBb9boY",
  "key26": "Z9cNpF8voiHgbMjhxb9XiasPtG46EDRS1NWfjfQrbhtehBhV7Cn4gWABkvfyD4Qt3DjUjGaiAarp2Wg25S2YPbd",
  "key27": "FAYKieVeiwXX56eBPhUXHAAKvkydF25HVZhtGiCuQH1U4bFJJZmfnEA1vFDquRYkNoXh1GEqVYVpJq9BQUBEFyK",
  "key28": "2KKaL8vEW4vzg1h5XdNqrpY4JqkW7gWXVsgVj4SJZDg1uRcqeaPtApYgnp8nWnn68nnJGQr4mz1mSKLN6UC6MFX9",
  "key29": "3PehRFMHrDETXmrRBWrdnReiGwrxYxBzF9fzxNn64ug57kSUztxdGsCC8eP84GDAnEM8JTsvkAJa1iX46KZRKRMM",
  "key30": "4W8Lo5noHc2xzT6VfarbeKiDSpkJMCYUbJA4YcTPpXkqYvmvFgFLPQCSsf4Esfgp34pBgPBrdQ1jtL1nyH1EzqPh",
  "key31": "FTBXJu1QzW5EAGChawi4z7D8ekwkR2vHQUvULdupwhGhofFYhjQFywWxcUQKXhLPtoLdTYh4FmsMhJCAzeW2TTx",
  "key32": "5x5P32VNXKjANDcVJURmwABNwPGHB43CzC6ZETA9Hu1wHxdLE6pntTyshskUWwoTKReqf8jWr8iWJyzsRLkp5fkz",
  "key33": "4FsntT3RujPN7m3dCRPqzcbbsu8xUQuFiJf7e5FTnPqic9c9Gcy1njRPGP3XCUVhRRPisZ1f38SyaQLsambmMMw8",
  "key34": "5M7bNHA2Ns6sbQjEkhTVhXqHP8Nok9Rp5BqPGsYRmWAAHyPZqkSdfEmW2iiXTfwBVv53wJwpLRzanCmX7WrScF5K",
  "key35": "31ZxEejQmanQPJzrZpMK39fjZGtvNo2V1cjhCcLoirARN5GL3HCu2YcPtNr5ijvX4F1TfVMn1mi5ZjvRVE3Ld86w",
  "key36": "5oDMFpywXsdiWC23JC5kWcokVYkh6vCYJ7daGf6GdxcuspQXQGGySXGRhKbfHF1yVR9GdrDHT739ebuXM6UBp4iZ",
  "key37": "Zojm6x1izdfnSVChX3kBdKxE6RR3SwMuU4Yiz3eRFZ14M1vDLcWt7hJgsWmexAteXfUAdJAMwdM1Nwf8CiRmhvq",
  "key38": "2B2He5DEsnVt41wKuZo9EwJS5PsGsLDwno5bQkip2dj6hAdgrTBNBQiBdPMYaqSoCrbFfaSsRaXs4YX8BLRM2jS6",
  "key39": "4LpGwJsMiJmua3PQhHFRrurfSf5s5x6redjTgoL8jPSNcMKct1FLe6dQWUMTywUjGjCz3odSmEzErproCDGG2Lpi",
  "key40": "64j3u4RwLjF71KiJM741ZjRxsfSKhVok7XLh9VXJAX2wympyjHFyJ4QT8pwXUa5mAh11r8K2e4ptQeWhJgRWNKTh",
  "key41": "555RTtyYJQg9JThRUgJF6rfERcqcAV2ZWdXLyQH3G41Li41w8JwDnhs49JhJ9tob3pAifegwZiXMR8FEQnpdg2E2"
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
