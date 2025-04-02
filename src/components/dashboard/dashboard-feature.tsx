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
    "yRpkGgwTYirAiuKmHg9xyY1aXMaBbmyG6org522heJtDJfFAqef6hGqAqNB55N1XkDYGwzpjAj9pS8hGDkMMDEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oHufvi1T2tE3ydVeFiFmrsW3Mc8RgL5zrrwLyWvRqEi9BKm3VdsCYTCd8vojzDkJ64TJaLBQxaXJ1cJo1nL53gV",
  "key1": "62kuVssczG6UiVmtvhuhdB555zgXtQBGwh8nggJDC1HZRJ4yqUGmJcdFb7pCAbRQbAAkeR2w3UzBBSmEbT8wgxP9",
  "key2": "4L2hXgQxS3DwJfkKJEg8utwuPomnKzcHJYRJTYe9xqq9d1iNJ6daE8qzbRnkQeiCr2wkbsJrJPt4sEGv3PDUwrcV",
  "key3": "2iMwFoRnK3mTczKKEQLzForiwzbSZoqeDVkhrueeGgNUQ87CU6sxkdywvykf6f3WLJLFCsj2JbMgoMY7fQbfk6tA",
  "key4": "4FbrgCCin7SGLdcq7aJnG29qzibx3QYthNvrxWdksigoJaMxnknttQiWVHGp5zBSrkSwMQKtZMwBrJ1c6a8ZhLhk",
  "key5": "4uxxXjd9VQ6tBNtb7f7aEj96PDoNAW4DnzSDmXNMG824XaRgKj9Udiff3CzLDN61mmTvN5ShFAqA6EKrmBhnAAmk",
  "key6": "xa44KwWpHnVfkDLuCsc3u2BQvd42UUNER9V89cZATdSdcV3jPPSw4fGgKapipwK5bXnL4No548J2uErNmETj9L1",
  "key7": "3cy53XNW9iaJfnBmoqvtJYUxvaUTRsKbXjMyzQVefGP9bJWDmdHCDSiuxcvrvP879h5K68kBpZfbZHkF7bWpVzT9",
  "key8": "5yBD8kvUPfCvSttgdHG449zzbtE2D7vMhscZ9aV5byVtTN4VcbZTx3FASZMuYn3hySwkfHzyYjJ4iitFc2G83im8",
  "key9": "2eJWmFN6Bw8CTSazFjDXAUvdmc4Qm3aQfSvCFCpxtdrFDHrfvgZWPXrsP2tAtXoKNhz1fDJpwZk3pdugFTq2sW2T",
  "key10": "3wxSDLovxhwM8u4zCCwwpcRW114Ek1ve6ht82W6k57foQGeETqVYVgTTm9fuiRSdGKRAtxMsBiBc9MVqeZQ4dxh2",
  "key11": "nUD7vcEzH9iTHGiXbTQjLwqwUsTbmycSrMNB7qbp33WB4sBX6MZrBRRYnT2FNLjzcmtTer6s7XZX2ZHG1ph7Lij",
  "key12": "5UhopLWWaFu3ShfgJFJKT4YRbPsU5mQgULibsbkmo2RhpcLWwEFhcCeLFhiaa5SH6MoY9QRJ9hwgu82Ykjoaxogd",
  "key13": "5fsdQ71ttudtGAGWhfxwRqS1ihJZyEwice3BV4FnAB4KW4p8HJJGzM8783Xp5RszRFYdWq3w32ReMinLdw7Dsp8t",
  "key14": "4U3vw7a7t1moanye8zdCQ2LxxBsvzaRXC9ZA3gd5qaRWvrDpubeAp6f98A8GWd5Y4HcPHDKPDxbvjkDjyVAHYmSH",
  "key15": "3J4iws4uRiwmygGMisbHuFCZ6FoJqmJg43tAx3WwFhKCfhJDnBozaGFrevmnBRPNKCtzMHMcd9Ut9fSv57G1UGLS",
  "key16": "676JEtNx6Yf2TsGQDnZ5UEHWghy9UrLSMrLsebCNcbamiUZnz3pSf8vtn1H4qXFTR2EDZUNqYSXB7yyFpsfEQWQ1",
  "key17": "3jNrKj3UcMfAEJP9KXiLg3jDEWuwCDj1UYPXvM9ZBRZiogsnu2TSGBDeTLqr1EFwZHhMQXJDZvc2nYp4qevZRzFV",
  "key18": "2c7Bg9MoHKPDZuCuNtqsJUP4Q6ks2y8BWXUjEx7ss5TEhcEJtxFVBSjNDesafSR8gGgTt6UCxovuxx6pLkaWNq4T",
  "key19": "2sPwqHekxvQZrmURHr82CDGqFC7TrdVUrEAZjCbYGfr6VWTNZSB4BLFSquBioLUvtjRYVKrJxp7ckaay5h7WZDxV",
  "key20": "3XZZqrc9TgyiLpQKjVbcXENpLVDhKJ9iQWcEYrQLMGmvbxQEvCvfGxX4D1jhCoGV145KssUPasXyxm4g61AangjE",
  "key21": "4ykXtc7YVs1uibnp6pZpn8UQbVEw3ExkMh63mcVWsoBLnLrvrvfPUW1zZQw6nz4tC6JvbUdCtpkabJ54b1tnbsm1",
  "key22": "4ZRgGMJ74KQ5HLeKEcz4KqSDqczAA4Uogp4iN95seHasnG7nVVKbtAqFbMEfp6oeeFEs5xNSNED7y8TDQRyEE212",
  "key23": "c3fYvYuWi8DUcjqVXgVCafckUZwNSFHTe1v9CN1L9Kfm9bLgXqXV5xRQRA7nQWXkoWCo4ge1q6SYeHSJuqqGhmQ",
  "key24": "3qffvoB2ztSW9wtWjwsWoH8S6pZozJoxSBmKUzTeeLozBsEgC61rpy4BCUQ5ybE8cLRPog7x5tXao453UtYfKaah",
  "key25": "49Un7vH5eZH2ZLyirRwGDu6aNsnqwS9EGNqUCTNXu27Nxe1jNk9FgrdzYBL8KW1pKJLsSYfxt4yGcs7Ceb2A2yud"
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
