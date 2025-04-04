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
    "qHNQbjGBKF4xkFyQ1kudjARF5F2VZhwbXGWtSny9JcQ7S4rkLUTVSQ3Wta4iMJgJXbhi3opNE8kbakzFJDeHbXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FrFhJfP5bPEHepwzx5KHph3zjWR6NXrg81Fk6A38zArvTU68eR9gAykTn5VHbeZFhVuR78M5uNpon4CaEkVQidZ",
  "key1": "4DhpihrVSTnG9B7fxWaZ3DPYcHrvmiaueBvmhNvZyZsiThUGCSvhy9qyDVaRJ1jeRD9piG6wAb8ehd5aZh4FQkef",
  "key2": "4PRmJrKN2tdkwGFbTWpSmfWacZqhn8dcd9S4W1X1vuXCxPFouEPEiZQzhwzMNMKkVspcK7j1A7NNEaCHbzeaKDgE",
  "key3": "29yuVPAVMGQ5toMTrSb8KJ9Y59FEksVEzPcb5xJ6sMggxoXbw3W4TWtLMeYwbL6PTrcEB67MFqnf1m2ASZqBCMdC",
  "key4": "3QL7ZyhXLYH5FchEZ6ua7Yxm6CF5M479CCBnFCD3B75nzjxNyKj5CbQha4gqVXG7u9NXgiKXUJAjrQQzZe76PzTW",
  "key5": "4jtnjNk5zkshX74KoDL78kXSTTJPazrRFCq4GdFkcknuXn5ovZffYV55t1WWuqxUB3sj2pb8yxLi2PqWNbNFbhG",
  "key6": "38byZEy16QYH9piD21ahxYCyULz31Dnn3DDcTUP3sJPKbX42mCeeqNdAh19otZVNFa6RGQ5RUPpD7eQ3jbG8WEnV",
  "key7": "4ixCQLbLW5YeN9Nkm2Dw7QaWPHwyd2uj8DYQAmxjNkG7uKP8Pry8HUMnfY4nwuAyQhXHEkqQQbCL7veDSaPWXccA",
  "key8": "4Y5MbFyRowa2fhaqHvBUXHnHBtVeZj78453HTC4uvZcPkEERD4ym96wQssTLL3Hsf3aYrk8Dss2LN7LoTcLg3Jx8",
  "key9": "44MceeJwkdEqdxwpNLSHpoYLZbUmBitKSubFAs23yszMbnxbVEJC122rvzbNGKwgd5sKF56cXFxi78CBErkS49uo",
  "key10": "ozYk53PYHUeYnTgX2nti9PRCyNnRdzDdHdC9fpatGmcJBYA5ochQKChfdQWGFYK2STy65EvaCAbtmQXwQ3frqyU",
  "key11": "Xpx7Sd67CSdM2c1LtrTB2xtiWFwyi6jh7uJerrnavS6pi1eNHuz8hdfSg55VX5nUVFPQJzjrVW9fr7dAP1ijuCe",
  "key12": "3RzKJaBKi2WLs9TrzbYcju84Df4X58cN8jXdCDxzWrgNyxVECJLcbayniZSYZusD6vxoXpXrQmzrRG6pusZqaaiB",
  "key13": "2xUJ3AxbJgwsqNaSBxbQ453kF6rnsbTqeVAqqop8pN5u9AXbshbB7gKxnEsbNdkCXcZqucxvXpgFrM26XpcMuM6K",
  "key14": "rJg7m3uoaLQB8Y9qQQGQo7tjePJmvi874stPXXE4YB7DEQbBW49rJD5BLfXgYaWXLyjsFaGTFxfZGNaBDC7n72i",
  "key15": "4C2beud42hK1SoviuSFRT9x2i9kicFgBMD3DRHX2RSfK6VLGxymj1pDiqfatBQ2gEVsbPTfhesEnjwodvT7nxb1u",
  "key16": "5yNpBSHNGSJZN5koUMXhJxHfHvXMuZVpcrDvyUWHpQWaU6rFKWCy7yCdZDsjFPpGRR4nczeSQU1HMUPsawqnqywu",
  "key17": "4xwwuzt5cpFGLsshrPoKuXRsLJCmqQh6uCgt7prxq6fKsyB83rFrTY1zfLkH3ygvdtgRYpJMiXTPQdjihM42dEG3",
  "key18": "3mH44PR7urka6GAn2NbRUYFgVAj747MeCuYuef8L3cnmYC5a1tuqJMD8PFDNma7oqjnXJbumJNvknighC1XRe1KR",
  "key19": "5WyMXVBWmWxzp4hZgjaBgL4ckjzgAyJoqkmFwH1BCQGp9TuaGsQJCXgJdJY3bwZbzQWdCwEawFRbWJRgCZESFDEF",
  "key20": "5s2jnSdx6v9g2HbiJs5gXti7pcazzkpFw2NG6upenyi41t7mYM5NB5crCUUSfL4sk9pykTSeJwKzrfdMsX3UoDDR",
  "key21": "vuZyAjdtMqst2DrABTV5koXNoAYUPt4dmdt8FZP3LDTfiEFo7LbbdZ5FESGBWBzxfM2tnX61GnepZ2t2GKS5SK4",
  "key22": "5PfY998mAMMMWHnSTcxruuedVXqbRizfEmqtQ5sitCc51HokFf77cteeaWnzBmj2itX7kakN5TKxMtGjUKQhYKoN",
  "key23": "32pQJdYFTDo2rL9a6HqBhW5UW26iQKc5jayNgMGVxQmv4mv6FzodPCWyCRj9uk164ruEstthv7wPCccBjDCPvLXs",
  "key24": "2NSz1GkhLk2mnEkdz7XiK9xptUpC8hGAzw6T9XFPo9KFZDFQFkpANEEjGLBRc943Q6L61Jq4z8dDryvTP3ZyVro7",
  "key25": "4TMRKqg5iuf1zheBQCCNn4iAJ53VFXWxaLwuMyftvkWue7ZoK8toqMVFcKhiEb9M6oAxrSwvBHTgDpzd178u48gD",
  "key26": "4eRNCi1QpWp82jG2f9Fxtxh7kvYqzJPNfnjD3S6YhXjAVXVSrkDA9VDcm6M7Kg5uRmPHb2wGKpYZLGFShxH9jaGR",
  "key27": "3QJckBvzwX3MrWyb2g4sxEPxF16Jrx2Zkzm5FU9GpH9EZFFDeZAUxNbhQ2YMuVoG7H8coPi34w47vtdoAYpEsg1C",
  "key28": "4Ba2fY33ZSKwGQor76cVAeFQGEtRdDpGTNRKoeadzaVk775yPiDMKJ4vJYCqM1yaJ8VExPwjWAJiNRn8JLS8Gfq8",
  "key29": "2uMqVBwFeRRb1KarqKCQW9oinVBpE7yGAdoSTgvC7a47PwjyHvwv7SZBvL9BX2sGjzkG431p1fanuAh8Rm5BJsd1",
  "key30": "KAnmHdUUh12Fd2RW73zP8Cg5nBrtctQDLubeWLuJDL4QDTsMmjm8bKCmeRrUR1EJETYANdgYpfYV2D6VQuenNao",
  "key31": "5KwKmvJtgjNpUkenYxyaCUodCBjLtssKU6rJZUCpMx1t1EDFx5B5AmmQ2b4rZbfoXT4aJyEs9MRLUnEMpmmC236h",
  "key32": "34yjF7ksaCnDkAd3TQNqBVEAKMhawbCTNw4bBL8bhUPXyxQttSgMfNkB8N3CvqSZshvUXbDC2qGzt5YPzRMJxLf",
  "key33": "4Sk5cSyQBEGnvLidimy7BfFNsw6MxHJ9bpByxoAYcKpWRCi1gbDvMkZz6dnkNYXCjVCRAPbMeJCByFYxdSirMiue"
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
