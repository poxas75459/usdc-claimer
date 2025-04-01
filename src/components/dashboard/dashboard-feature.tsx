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
    "3Mh2SmePRpSfUcjnHXA3fGZp63tNLWqoNGwoKa3UYZVVFMgd2NE4YwPkMKkXmLCPpjdgLnCSuoKYfDNEzXctX6Hr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xpzZQZgjGErpZbRKyXRyzkSFdLGM649zvzEfjNG47pW3qU2QgTRz5bgqrmHfytHBHrMnHpD3nYUTAUPGnDP3nCH",
  "key1": "ykoLBEsLrLaUJfDDAudmpmvn8GHwrumXZPj2nPYhsfDM6TwqSe3jrb9S1FcW9EWXH8vWngXmiZ4Hcsb9qnReRJ1",
  "key2": "45zRzqS36Y3TvLbxrHkMiN5FAMq66hxkZvq71hB7KEA2wEFpK4mMaGBSvvsfREyhPwuxaAFi9mqBink6x1WbRPTn",
  "key3": "41bYick2PE5kJ1h2Xw7RecQkWn1Ufd8rLcCtkjb8SCCoaJzm8PfiM83qn2DQ8ZLoVFQtTcbSkWmwxUbwGhcVgdZW",
  "key4": "58DidVxS87WLU1rRVySZwDkf8awXM3VHwvrq5tQz4TUveFHWFkHy6eejxfH8U9VGbYmP5w2kYQXHA43eZzvwMTnD",
  "key5": "65Smo69KeDVobrPU7Bg2MvpvLQQ21ryMjM22tANrDxz2MAqj4UicxnechzoWxsi61XryAGmuAY2acFXYuR9Go3sY",
  "key6": "4zZTNMe47MABowwUur8ccjBvUGX2VvhGX4dHhXJVF7FsXjpDEWDan5KfUzVhZPT4Bjv6vxjjj1Hjm2V9KzajVe64",
  "key7": "3ZojvgWasYTNeffZ1z8hnFLcsSgRtFzcbfSxuu5EAMQJ3p7nReXS8WQqASD582BTmttwtZYLE2SiDjBk4Q1c7ti4",
  "key8": "22CwPUZXgvQsiuyfHTJdd73zADrfMAgoNWttEewtBiYYhyFstPkjFPauSqE9Tw7y6kpCzzhgmMxqoZ1YDpgQMLE6",
  "key9": "bve2CeJuvqbEqCHgUy9qxHWZxuzkW3xfZpTJwd2naK7spQsxnUnafd8mNaezyt2QT8ZE74Dnw6RgtZzuMcmJYyx",
  "key10": "5N2oDk75VtRJZpE48rP2fL2w259exwRejGrp4c39J2vZ7t4MEKjWgMriw6oEz6kagdKnaK9i82VPvZ66yVdGtT8J",
  "key11": "2idXbnTh19bCRNEZUX7ZkbEWGzoVseNb8HCfheM73uRHaxu6j5wkRmD4pfqAEFEcJS4Edo4CUB3mu5wnSNVMsrFD",
  "key12": "5QyUoAomeWkP9k74YYwetkwzCpEx7qY21o5YvygySZ9A9KsuafELwKe79me9KrjC5bTigbLYExNGuEPdgEgxFKsd",
  "key13": "2L4pGzHNEEhBfzxBzYibBEiGbPkkJCD7jPC9dhbYBtaXbsTABxqieNPgfochHq3MfocCqhaDEqSD7onFiPK2z1H9",
  "key14": "3246rN3VqkYXWMzWJAEf9DhkC6zVZrzWsrZcybVhb9cABBK1msiBAdQSo39TBQRQxXNuNRTddxfuw65BW2Am63BQ",
  "key15": "2DJ7xhA6woWyNWLaGKTeYAjc6SBhghbKmw5rjczAXxjqMexC5e64xKKgbwGjt1mph71v5fSpwxVJAMKPz9K92aqq",
  "key16": "1MMafSEGQwcxo7DaFEZr7B2mP6DfzHYHnZfWqCozxxYijZQdAH1Pkb8y9mqF6NQmSCmL8p9aZmctxovzELg9ADX",
  "key17": "2F86BK7TGBzeNJn1KKubpdDpq2e2ZBU5wgMBfUwVovqkSZos688QkswADhgZ3EwWNn78YuFgJui24pUCoMtjvByP",
  "key18": "4zN9USwNHhewAPM7Y9inXa9MfDQ7ezVHFgW6QRjsAcEg4J7PXDwCCFFmQaosrhw8XTxxTbUTQM1WVYvwvYR54MXF",
  "key19": "2cRN1xk7dM94P8MkviNEHkvxQ8hNvkXvPkdusY7oUSpaFdDT2YzaYrTPvxLTm5e9dGvL3L4gQzugJ2kdGRQe45Yn",
  "key20": "2JSyZfCwhcjP4q8AS8j744RAZLEMAFFktnoUGge2srGfnVkrjNTPtgkpPbgRD4Zv61rgctSjH8ZHfbWF8H3AzKJd",
  "key21": "3nXmjgxvmrtM9eJy8cHwz3xPVnQxBg1Udka1D15Vju7jf6HV3HJQEjgvtH8RXFwZifsS1rg53GPvTAL5ojvMGjoh",
  "key22": "51pb4U6CZrUW8BN4osV7hmfnLrMTSfxo6MhY5oWGPJmjLfHWbtDaSZnG6Eb2DZQp7KR34ePSuzB7cvPUN3SHAKT6",
  "key23": "513soG7GXxFsEpQV8ceXsanaph4nVaZWdFDzLPwMYiBiuejtZ1YgZJbpTyYFiFpD1Zz8P8pS3NahoqRyGJAnJF5W",
  "key24": "eXucsfHZFm5zRmXzkVZnsmcbVjrFuEhHJTDMgoJixjpcHAGB32kHxdq6JgqPpU69PUxfx84Ajs55fw6jVWFtbpw",
  "key25": "2kfk48tshWSD98U1k2KC3sNAWBZ2bYzq6PMWbd8WMr9w4Rkp3dBN16T4bJTuWTJ8zDcBurW9DbfMytw8C5QWjGLy",
  "key26": "5vCc3k5znqG1zi8XtL8Afs4fWnSihJpkrnP7V9YaYmewFAp7HQxET8PFT3FKN2usNKEXyCJxGEpnX5656dXQE3cu"
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
