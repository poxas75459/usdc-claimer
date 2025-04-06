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
    "hFS3oBqn14ebMkBTc7PXioVJpMM1fiyqBAGdKeSnubF9tqztzU5gutYtUxEkfJKCiyEGL649JYe5oPfUYyHSPiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rputHkjqpHefndhMRKrTYBTUbs2KCUSz9cek9GNmb9C9RpsxMs1Uo2QcKRpFDwYCZTAbntuXJydQvXh3xCTKX1y",
  "key1": "27Vp3MucTpTiM5wU2tsmqv7pX841pabncv1dREPSRVzFib9zXD14gLsDQ8hJgL2DUHidwpC5hdgnGczY6mQaDpFf",
  "key2": "24WQHQGJj6d9Gn7SqzokdC8ULwzaxLKen1KSdJUr7uvHc3oTfGcwdYeXtf6Qyq8AEktVbd7KbnMutQgd7MLuixZN",
  "key3": "3fxNwE94RQRAm293sVNwSBvjyqUJeGHoVFNV4oEtJhqTwzXmCzBXr1a3A1ETj3MbotZ8FCePrZfUMri6pPkmGzJx",
  "key4": "2zybKKqCuPEEp1E8WGCMmp4E9D7fcNP7hpLk2Sjfq7s1YCqpyc3HyyR3LKVBiENftv8EiM6AKZYpndr9Xn4YSkDL",
  "key5": "YYmp5EcnYhVv6z1YE9uoUPEWbgCVB59Tb3M3hnCfsX7NsK8P7ktDBXhVDZu8fjVC71LKCd6raaLnTT8wT5wg5BH",
  "key6": "2caPWwDJf8eBF4wtcMyp6Hgoqk3S7PahGo7GeVbxQGwFT1J2gRkCb6wiU1AZuLjmRRr24N84g7oQvQGDBh5Vai4c",
  "key7": "4JQCkAwLxQyC9VTzykcMvdLcLR8Xq3dz6TCnRRUYfGdkarZBHhTvRJ59xwbm6puqdiuwBHXftmXF3b91k7qAchG6",
  "key8": "4ZdHS2METmpabVp2gbEAnjA2UK6UHDQGMC8KsHPbAsYYo1jfYbja8S5wrpUa63YjYumYzAzQ4zDGLKA4iv3PnPj9",
  "key9": "5kVJvJEd4mp8wCh7nhog9b9aSNL84nd7xP59jZN2xfi6yqRotLPbi5VdQPRNnngEcwSW4Zii8Wg1bWGnzbehEPsn",
  "key10": "3xDEhdDynGpUCYJFGDjraos3vgzsrEqizWid7E1cGzNuLKNat4QYEGpkaS7tjJqeAjNpUNxc8bHFpcpcq2U9Ujqe",
  "key11": "5FZNoFWCq8dUfqZjkz3D5UHWAqcFejBGftt26n3GshnARNPSP6h1Ee12iEsCWpE9sBLN8C6oLiacmsK3Z74rjfq6",
  "key12": "2P4gbkxpZZN6HGU7HSgctAPZNZdxUon2qBvJo3KDtt6hxbTqGMFvMVPpXQRMpyCUTm5aFjkra7L98ueNzbCSS4en",
  "key13": "DBttLWxvhEnPVq5jA9VoETV74CjpGiDBj5zohAF3RRxuQTgzVG8AJKXfeGybUPheQuvqtwAkRox4vAFRAFp9Uer",
  "key14": "k52PCGZxQtRcVuztP5rWX26TDNrPRBEqqEjuTK2SLoEKvJHD9c6Kr32txarb9kJQkmNUpSqusjocd7oTpbdiUmg",
  "key15": "2JZMF1yuiq8LmaXScbHJrRuUSscMAT6yMtMFwgFGsjepiyWdTF76VzkbrCr4JLj3SoQWettboDhsGbGEvp7vVHSx",
  "key16": "3BAvyinS9zBMRXYED1GAhjUY32HJE83vrKNyhAE9A5RnBEMzxz7wA9QdfuexmuafZaaW4UNRMmi65oN8eAFyHvSR",
  "key17": "32Lj2va36RV1HGYKHpoJEzvmD72DJNjAAgKnJy2j4FbQyfmxWZsWBZncBWerfX21ttzoigkHGAgd3HFNrUmn9S2c",
  "key18": "24JohzaAp1WNNfxZvQj9QYu6XT4HpsR9Vivh9njk27YvzacQ8LXBriv5AuMeQcXWqqNvUHF9gjNTkY9XpNvsFShi",
  "key19": "22PiG4isEJVJ1aqWHjdKgF8JRqTg7MktgcZcNbGMYuXjopzWznLCGw6DjPyCieZALb5wy2Yg2w16K7aLY4KdP17t",
  "key20": "5dU5SEaSu7EQ4soeeqF3XmqGT4CPkcH6fmGt7YhC476rCkMavinQXhCci7brM5UgsTeNTnRB6HuvyqMeimLQEqSm",
  "key21": "66EzL6Ks7cgR17hPxkRBWMk2F72PTLrbv1tcxKqAWfRSfXH7dHKCKKwv1vMjgC5PfqNWYYCTR3jbx9agiE7nBR38",
  "key22": "2FYJSgL6jERvGX4gD1SaJydYKJR4JNjtFXMXEJmLQa3LGS3mPHnVUqhuZAyQCyC1Xff5Zr6brGqPzBvsr6RHDR5P",
  "key23": "NqRx6QDWpL2SK3jrjHiYvUW7HXonZC1DfHoqYhkhTa1F1rzzyjY7Mu489AbbgysnTqoXAQf7JpJqmnMdutDyUNF",
  "key24": "4SuGU8DU17AcZRxmpaMjVKK4vLXsNmJ4KxVp59CKFgi5jK9e6byYV8YsMnKhiprkKZtRofSk7h9mtoyB945QBCtJ",
  "key25": "2zVdztBawCjPGZtqZys3t6erv4448hkuatJ3PYh4Y476tAdUkBR5Uxv83hjyBT3qdnC9CgB15oZg4JRDY5DCbv7E",
  "key26": "iD1kQpDLxap1opivyp7rPQGTxRYokc2NYWz5B9epgmcA3KLJ6mgH3FjPEosVtLxs2uZapjoGEkpwt7atnopWooW",
  "key27": "33b58xUM2LdkkABUG4srLi7jFtnyAGRmxLKeNEme5vjrjDr556b6uLX3aBPAiwjgmQbQHhbzdAHvUeHaD9ADx4pF",
  "key28": "fXFTn4mgDrnawoe9uDyZoaeRJsYY2GVtxuWcNgPgV1MVdFdT312NkmzTrojJxrwzoWs6zqRXrHRwX4rBCSjxfd1",
  "key29": "67VMi34AiCCgtJddvdb4Q7GjKbto7uGkPxFBuPqYG8LvMD7UD9XGdatzZXSNrN9FjheEEVap3zn7iuUVofCZ9eRv",
  "key30": "5Nqv2WYn3Kex3eXKa3LzYXbr63mP8Nq1t7wsHu7bhaMmAfMkyD5drGEm8xeAPPUqNNLFAZ9pMcojDPD7N8JjVMv2",
  "key31": "2qPPosMWMRHF9ZDdXRLr7HbxdMMfKZhy2TxxbW19jDZQ9zb1nTo38BEFQN9u3U2daDXiZxcM6Tig1bMTzpiDWxA8",
  "key32": "aevEBeSJMQqX9aw631rRPQJoZZ86eBnDPRtjgkr7iHxtnEuAwDw2PrpL7Yp3EU1ZFhGBvjxr9CnFDDcywPwjUu4",
  "key33": "5919qGLG9RMgSuuurvbRCowrRNc3hxxgYhuykaCxeoCCBWSnLuETiWqYS7r6QutU6cxgtNP4q5rKvji5c1ncDD3k",
  "key34": "5nCCAMB65u5CuZxNp6BZRHT84P4Jhiju7dQNr5dkY7a9op9DsfGiGxazSuS4qJ4AQAQMjUV3EGHFpo9zncxfVYe8"
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
