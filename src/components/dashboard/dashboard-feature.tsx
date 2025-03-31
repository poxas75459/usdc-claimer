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
    "wvrL9A1nKBYVLd6MrrR24CDAauB29HVjW57hUptvhu2YATCsXwfRvXmacLZbph1MsiPCQtuUz9j9YU6wJFGdHZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XDH3DrD5Whf7pSuJuLuHSbbiZDtLqL8TqDUNEG4SEWNcX113R9R71Pe7aZDcudnnStd6iywK3MrRmAw5JrVBrZy",
  "key1": "2C79woTB6cz4M1JsHBPs9mQoRqh73YBrrsxZ97NVk2gtsUVrxF5udtCLhQrgZmSnEFby7DoX9JDPJcGdWcqVmAdD",
  "key2": "4PeN9APGK1RKHxTTjjFZ5XhK7K5jRc6ebqBBN7e2mkU35KTcr2gJpQLXBmUQm1QBxX26AKdFZF63j92UsyG8B5Zn",
  "key3": "43RdV7BCseKyXBzcfarbShJZXgaArUPjqhXKMLidUvwAze6hzz8AtN5CRNMChpSDyNuNz5UFWpo4GKrqQibnnBd",
  "key4": "5cEP6GsxxCWscsYiegAZNgmciTiUZaBWPP8CLiRKAdJYEAquePV5iAzLdSVTSVY82HBB1QN4gR37rTHxDgf4v6B3",
  "key5": "2i2SEvyK98QaxzE3RHMkfnqniEzGvBahPr1ru9JFXn31kFAYvDrXyfe1ToSKYCGVxZnHe2Zdrqb5s9vHqSyoaMmo",
  "key6": "82jbJu1DTtFy7qSNbRi4jjPMEJoz9Q1JYiVLKFm8sUVyfVVF8cuvi4LS2ohd5ihjJf3hXM3fvw2yLZU4773ydBQ",
  "key7": "zBPxHz8PbiQPnWUjiDSR1EafrAUAuavSHU83MtJ8u9sxaL9AFUm5nP81VUeLGw9Q739Latiz5pNyS68MCn1HM5X",
  "key8": "CwB5ukxn9kaGA3LhdrVvWHyn2hV5yD4qg3rTKp897t4Sv2qkKEHMJf5pw6KyhLT6TRut9nKhkvRSbdmVsQQZjEf",
  "key9": "2UAezsFvMzvDswychtQwZkwhefpB4mV2aeXdqRXDcErsP4k6fUwgqMMUijWhUXTCGmnJdWFYHP221awKdXDfSK5E",
  "key10": "2cgxLDLrpkrXUkJmdEXZJkWZRjn9XEsQ7NYjctUHabsppsxhBKzmroQJonGgiF21dnmLenxEBe6PxX4XJQ65R959",
  "key11": "2FQi3MsquDab72oWPsPLLfQJR4CA87UnhHzyEzRdsAx1HjgZyuYAmyKYZNwgpdiMB462MqmzfX76jfP2VGDzjEPL",
  "key12": "43mucGkj9nB7eVTfgUCgquowM82RHmHeMswXGvk1RZRgBZ8fJoALFU8DGxS4Az2R9keebkHEEiqhHA5NZk633Hfk",
  "key13": "5yen5u9QjBsq18ja5WpiytTdACWAgmPVaiBKAjM1jwZjNHK3oNFASHHkDcukypJzvMddPiw4vn6GSs8AWfFHhj3z",
  "key14": "5hWtq8mk7kzFKZfzrUbLUBm93yqyjkmxzfiKrjUrR1KFtBhiR1pYxMVnPt2jJfgxrUSL5eoiuY44JqsYTEd5p3XJ",
  "key15": "tbpvniDMFW5zx2DJFpGcnTfVMK4gJee9ox2mVzNVqXXCpEGRRtmKR7xLHbuAMZ6Vp31gxudqLvjbsbvvwWWcY3H",
  "key16": "4ey9T4HPJV1eNLxJqfshsFVcqQhy7tKEwgisqJ8fYGnjFmhFEfW5eAVKgmNdjAAofz74omsRoy5kaoXsX84jhd2y",
  "key17": "4Pzq6H4247jkCQf4p4oc1MP7Ry4Pif4Se5pvVhfSEQuG67FENAyAMjWDtaJ2ijEqUgwDcEYy4F2RDqWJDoa9EQaB",
  "key18": "2wG2ARf4Va52pmTMu7ZLJw58bFVX88aGL6Heaxb4cW6xPNyvxq2eRViUUu1FZCxPy9qpG6hcP9P7FstAax1YBTJU",
  "key19": "2vDsVLxFYtfkVCw3WnMwkEqq4cksD6hUZ3XEX12VmydueE1xk3gKzZVvSTxoFSKvPLfuttZ7ooeH9KfUv6wYUuFy",
  "key20": "5xbtaRWPvCuro41u4hQLwnauugKTWyF9j3vReeWm8yijuHcTiYh4wXrUM5tiMhQJYe4f42E6vocS648MRLHA1RSh",
  "key21": "abPjMyRWaCSAk5FCyedH3XEhcArifNMs7Yd9fxtUZCjS9zsTpQCUvJ5zM5TCNXG6qqbv64AzNnBHMRWPKQTWGkg",
  "key22": "4Tz6gEf9NmCfHx4B9tpzhQ2GZRsYmKR9sdj9SSoBqrcosJE6HuBGNfUDiZN5PQdQ5d15HS83ZWwH3McZyr2KZCFT",
  "key23": "MhA7bYfCGxzeJz5PdZZDQBTC3gwVSZy4ZWYzyCyCXmWMYjmEAEKvG3iY9o6isLEBfSZKsS8RUdkzk3L3URkwCo3",
  "key24": "4ugj5SiWqJJcpYjXP45ZFkkFDuULf77cF6idWXf7QvL6N2mMPujP8kFer3Ct75RYk6QnFVCkaUnpTxLnBMcdK4hP",
  "key25": "2Kyp7cLQDvNEAxnT3ZDE6RwtD1f6fUyUCsE67AzEwVgfNJJZ2YNdBsuqvBivGMZJ8zYJrVykYHaQ8uPe9mBzH1n4",
  "key26": "3gd1tzZ2tZYqb5gUPFzKc91yqkGBqV5tKesBSG8EU5W41TCQhKVsmY58PF5Rd48GoHjryZAjDjf3YEGxJqFVmWfE",
  "key27": "3QWVsHyUpsjpY1HMk2V3XGA6jS5v9t4cdB5D79UCTFZ4XKZwWZVrqxHTXyYsXqETBc4i6qBENL7jg17NAgUUSTv2",
  "key28": "kSdHbAds1jJMZiM97pqXyhfSdJE9RXFZts1Wp9hkZxCWXzJ3LFCejA6jb6ZhQVbQGZ5D6H2PBfEkjstC16fw5Kz",
  "key29": "24uv7cvvVRNe8R8RcMARCaeQXhY1vsDbPs5Qz4ucxYgm4XX3H5LmFcBYrjvjeJ6w27yNYG1YMAJEM8F1Dy7Htzw6",
  "key30": "328NPU3EpDjmDnmK1wCtVqHpJmf88GyiPGmpKUveTD25VvSX1RgJGM1vpmXEjb6zCrdqLYi6VkD4vshYSxHKBHEm",
  "key31": "2xNyPhMkp7oPJbpGYazK9eDcNdv1fygCtYFV2AZBNPCjkSdiV1kzV2nVjGgjndmuQKuUfEFyyT259t93W1Q7PG5V",
  "key32": "3CHYvK4XH9oUzqAdHc73Pd9FEWkCu47QzqBPn6uMajf7cyfCSQMg25pG8whi2QNLYfMN1aqfGELuzFrWPRBANCyy",
  "key33": "3yBc6hnwipjsgPk7JzhysqVhKA7znKp2JZNtt3YuRSnxjbA6YU5xYDPb83TFshiwD41WZ1G78XLSY1C2c14EwKW8"
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
