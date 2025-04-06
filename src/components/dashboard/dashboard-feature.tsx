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
    "3hyKaXqVXBt8KnE764NqmNHT1kNhuAVnM5qJZiacxDNf4bMbqkTdsizLigYNh7KDvwjzQnbXzCc8cJN4CXuTGJhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aJp6Cfcft7ChqvwyeqFdoyLdk7hDEtKcYPrcaHZ8SGxzBaps4M2PXzmxB9W1u9Luoti39HDUu2SxK2NLcQHcZ99",
  "key1": "4yUt2yD2P95Qm8PY9dmyZhuL52P1BgEWft1rim8hhfYHbjrnMbkAMgbL7FZMSHr4EB3TWPwtgLAsDXAUZoNeRYNY",
  "key2": "3JDxuGqjbdc6n46de2bAe8873DHuu2CK6Dqg8pymXp531L4iWFxp1tW6Y3Afd4U5mZ1KLy4ZzWvYAjVRRTLLgn5d",
  "key3": "5q26ktdAwNwgnGpRN7mkWWuKNEXXcqK4RUhJ3gkdwq7FeE2hrVnEj7bSGJ87SjJY8MYyz58HuBa9pshRFLwLeuab",
  "key4": "2xyoyX2ixYnRho1KnyTLDPuNGQhiGUJWJ8A1dNx8MuBBpJCx9PM7hdjqMKAoKwkmPzL1ZJrFeewFfjFELakwxkYs",
  "key5": "4gAh6WMaq63dPRaK9AKz62VaoEd4kNuY33E15e3GocpbvXD4STTsHJd2MUkrUg45jVs4yHDZQmZZhJy75ZwsTrec",
  "key6": "3yDn7A2A7QNksgej7sFX17oFa6UYSdVVevan9im65nc8w7Vvjfw5ZbDjouq1UshKKk3QqZy6ekqVBwT5nnDRBKGj",
  "key7": "67Jo2EyeDiCozimK3mykg1kvTXMZWcFr2bi1dPL46VCW1vnAFmPXayUb4dTTFFDhnjjzEmeNL3uoTVP49PFkzgAK",
  "key8": "2VaYVsi5HDNapQVgJvi3RdeR4VNtKqqyhqZjZLS5Jf9J8Gu39Uc644xatzrMZsFYYNLwkYbTLDrbrNLt68FaMYRN",
  "key9": "x4dwcfeQsvPuwqMs8cwDtH21FTrTp73avjj7Fvt4sM3nyyHpY7hVZE9uQA51AQ8UMEbt8WboRTM2nRSZyjxpVmZ",
  "key10": "f7MGZSTyuNo5FpBBTkrMUzjGVzMrtFPPHbUpW9B2V1yP318FqP7QYEYQwVmFN2EwtNVZbGfW2cHArSbdY43W5fH",
  "key11": "daGW5eHxmPWue5jK6Uh5xkfE9ack75UaeB64BbQkN6suvtNqZx5e2a2b43HUe6Lb8y1BGhiCPeFs4LhiDL2vW9q",
  "key12": "3iXisRqRfNfhb6Hu6QKiDveZxVmeL98BKy1nYo2nGn6KFhnPyYC2t5rG3Ve9eLZsvJejPRXcaNrbUD3iBZzNb5n8",
  "key13": "4tt9ZT94DaC9WuJwgT56v1c27MuGh4X26DtBmctJ4bPTsyXm8zbAeMfSnLFYbmmsjgjfuaPeammU84z6SSETckWH",
  "key14": "89ZbZ8KJP8NDno6PUC1g7mdFtv1UmdqrSKFZ86Z6YkbFatgvRF1FgWF3w4kCFsCg72KQcweNe9oZzyQxGRudRCg",
  "key15": "5XAsnYZ38TFtEHKwUXZenR8b53j4SERwqKiaQ7TZLeuiJa3AZzJAQbSW3QsqUGuHKwqd4VVum6oa8YQhYCQdWk1u",
  "key16": "46LwPKuQfUrU64g8gUhUPGtQ2V7BV1cNZcZHbYUjvRoANNbrQm1gwRQYQx4B6jwaemJXEXESVznGgYAwS1xu3oCZ",
  "key17": "UMKqGq8F1hX5kdAMGNpNpN4bZhTJcwL3j45NopsAuwwbZRe2Y1dBWgREzAUxStgmfYTgNtKcxRevd3C4xgkbhZm",
  "key18": "5YZGor8surKABDYExG4TFGbNju6CSs156HvmAhjQYGvDKEX6eiPygFRmx6vsuVe3B7wsas7GLMwFmthucLxVaiNH",
  "key19": "4Bf4iqeJfwMpRTjDRVq6mYK5cN54feQQEjpfdfou7nKAGUrUMmGeBf4HFRq7e6HcGsQNqXSH7KXoSsKZNVfudHA3",
  "key20": "X72iJyKmLEYVQayshaNSnXqCLCUDgLBHBdgVdUc2jq26kgqLuyuytRmM3yFUrHKwxvQ2BstVuPVAfuYcWZsi8Z4",
  "key21": "4SHVmNNLSaBH56CKXCJ9jatB1K5QPQKHzE9QfyXi3p3gK47MarLMb1LzsChwsYembb7nDosDRaF6jYQZNCmG2LHF",
  "key22": "aVWtPQxB1uD22N8ParVr5mr5Q2YednjMXD8RoPnMEB7NcQ8DzSDNPiJcGLnMyy8QXJzB3HUAk9kDYBXA4fYkUnY",
  "key23": "3oZy5t1im1d3G7PrLuE5U81vwf6rnuM3YxB4NSdTbT3TU23HfEKpWJGfsH5kk7ahoSvtVHo5k2aMzC7KN8oQRRUb",
  "key24": "ZAvvDatruxmKPaffSeR48ym1k93tJVK9UTKkTB44mBRVvnssXM3dEnzCv4dyF1cr329pmNZerHNHR5dfVSR7XFr",
  "key25": "3tfB1wto2F6HRegKRsrSwqCkhVTUAvyozQuwSJrDMhfgYtPwhHuCHvywPGkLyq7CdcP5jyxtZcfHAs3NqTScXQvX",
  "key26": "2onVMtfsvFHy4ocdtBL5m3FFmApa5Qs8H9uR1dhFwiDoXJRSZa7BTwDW1nND9FSeJkp9hjXa2v2tKM4ewokbuUJi",
  "key27": "3hWV1JoHfkG74sFjTzKug5e14XSUHFwmJqf8MBpxJgVihP1gyDgZSayh24CqydPSTyBrvvjFswPWwUt7MFAwM9gE",
  "key28": "2xhRVgbQMayNcof84h7Db4WZpj7cYD1A2VDbhuTd6GmDF5qsuQiHUj29ZfF94ucHrab11r8yKvyP9CRqjdZAp8iy",
  "key29": "22BHKdkp3miYRT8SVBG6n6qZrmEHni55gsuaAezPgZ9J8FVKomL4ZEDx2NMV58Jexmk4tzjaEDKPQRS5u8YdZA3B",
  "key30": "3EABmvwWHFWizKQdHhkTMZMe3sBXTS9Z56QFmPMyU3RrLsghWwzuihPvTGLNXR9EnopAFvrV1FDcWU795RY46cPV",
  "key31": "2eF4AusuXuBBQdNnKAksGDksgVcuzfPmajGpxECy2CBzhG6viQqPUwvsoCKkjmmkJD6qYH8Y6fRf69uZWVF7MybW",
  "key32": "64MuTYj4RAv7ch36tsjsE3gEn4V1CrNh32WdyL568VEcLeByqfzKWBLZz9yxVtHxrJyKF2qiAJbYTVmRHjBzFjqZ",
  "key33": "TmFUArc1LqVg5Tqiq31RPBDkZ9gadT7nC5yMkWGppNzvfoddBRSgYbUm7fm4diAAU6iMGCKg24rmLLvmpHMDCS3",
  "key34": "3u4yWXjLAsLw36assd7b1bwFe4veHiA7Z27G6KkuSLbA3N4KymryAjw4FurNSunpNDzJMWFEGjqGUuxgbAF2AAwN",
  "key35": "3HA2nkoAYoBj9TXQTYwms6u7YnSvHR5hLFQuB2cniunozpN1H9zcmowt6jMcMjFKvWKh7QqLtSZ1edhAPRTEqGzj",
  "key36": "647c7FasH3iRpGake4LUAwtGYyx3eMYbxA3qCDBJ138XRPJ9jPdMot8NPyZxwMm4r6RdLmMY5joRBrXp93p4vjNe",
  "key37": "B5mYwGgoWTDaY5nedajjsL6XqJbhVsJyXRgXKyXeecbZzh53v9ZhmkxzeXSzWi6cCpgz1zu5sGgsCAxERBmpffv",
  "key38": "2xP28L8dGhonaMEd7wnYasvzXZDjje6GH5FX6mthweCsXLLRo11ZafncJd2dXUM6zFEUFVrZL2p7m9ysdt1RrZ6m",
  "key39": "GbETTifgo3CY7HFE8VN3c7KQ1tdZPfNHfruNF8utmA997fQyFhPmW17jG4PRb7cKwvowZyMTUVMNHxQyDubExPa"
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
