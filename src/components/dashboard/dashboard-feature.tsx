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
    "4bznnksWX8DmCvkLYBF1ceJBU9W6WgQBsKBufMZizUGE6osbvFRAf6zDcvSWUA2VVK3ATFSJVtPh2rJ2qtyzzqAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MXQzaFpPP9rJa7ux9ASQaeKPGoNnGydPA3fbXnUih23UpN4caoeMq49G7aXbwnxEmfsyhVow1fADX4k93QoDF3F",
  "key1": "39RboBiJkusieBqR2ebTFQKaqe8LA27vmas6FWJgYywhyGAUciZYDWC7wtEsdLhfV6vKk84arfqTggxMfTPqwur1",
  "key2": "3v8etfy7nrGHSin2vK2FxLnGwBXcm58gjWhuMDdG7Q4wNR2xYrzYaSL4ynb5ENL2rbefWZisA1TJrfepKZKBs8CH",
  "key3": "2r2wVNhbYSFvXPBZswwabkMzxji3RnC8hz1xwcTZSBm1VAMoTSZDwruTsUbLEiucCG3vAZ6y9F4VbNj7k5BDAG5p",
  "key4": "2DgcUB1Tv16gQ6PeH5snaQj8bnydgG2dvcqLjZ1mqTva6QrEfZ8K7a9mgiyufTdaMoFuAxaDtNxsHqPJhVrrnBKH",
  "key5": "5B7rdVVXUjoXxAJAVooMsagfNm4hwjnPipecagEEXPKJqX429qoNPwXMLoQEbpQuZ2qfoFViJMRCMvKcDk6hhREE",
  "key6": "2jhSffqe9V59V14FpUiPUfaqa6B3yqZxXX971APMNW7cy1RJh6qwRPPkWb3NA794YRbvSmeRtm1dTfRAoYMqEkmQ",
  "key7": "56ErjA6yozozT6C9U8s9D7mq8XnsB5PBAPcgvNW9649Rpce4mH6k6axhJq577uUxJrtcRNuXhAsGo11CCHtpaG9a",
  "key8": "4PbGedREKcv5Lre66m3USx6pjdTHRN7FQB4cTapbFt1bnGS3s7Mc9TWPKc2SViLfngMwfkUiTmSphGhRLU8VFFsw",
  "key9": "3ZMDjx23UxY4TjAzoboM2uYBd6CKrwe1vsL8v21VQT9GJuDS6zcY6o4AVhxdGcX86xuEnT6CYmxwk6wMTku74mYf",
  "key10": "27AmMLdU1KVkUx8DQeFEbaZd8uHj4TzPgUSs9Topx4NmkL71Y4Ze4Dk8YXz9YT6y4MNreJjfFsyYK4FurAkq72MG",
  "key11": "4VGdszwktE7xbo7v2vQbVjsFuSJpwLppP7Mci7GncsbKgrDeVApGEVDVmFymPbeXFLyDqroN6oDbS5XtpRXLEKQ2",
  "key12": "7NffiUoUUs2ateGwyffhpZbgDYpHcRwg6xvMA3M7xskoLwYJAScL2kPyt2WcbZLx6P7PBcEDhvAmkY8kqMkW1w7",
  "key13": "48Sm13ExFjM4tVjBfJU47maW8DD4ikXeLm1TjR95zMuQKH9s4Zqx9nz9DoouFy9vJRE6TugKdTaThQfSfQNCNwqN",
  "key14": "62LoiHVPLW3SDNimvffo7TWfu8cGzDgeK1ucSNK9nJsqQnD5hxsnLzFNWBRo69VQgoYmYrZEhPB4aWaUsWfuCp7u",
  "key15": "5DNUJEFvxpwxYqPnfhs98rnKQoF94ajBReef56SJ39nzqxzo5sJAZNztD9n84wepZyxRUEteBppviKX6oKoYTEW",
  "key16": "5zQD4321Ln53GS2VbjraSEVR8WLPKwKUYvPkoPk6F6gKNFKcYQu9fR1Kw5vPpVtsH8o5Phfs51Ue4P3mitRQwNzM",
  "key17": "4oPfGagxdMeCGH9vnHDHXeg74opFvMrBAjDq86T6tgktfc1qSJX9QzRND9PdU4VyAANpSsxpCAXZyBLKy1R6cBos",
  "key18": "3SAiU9npq1o59vgFubkYQcbqtrfpRYsScL9pKAsuAoRzQJYew2xDv1pNEjCfyBLdp4qJastZ4fmFU1bD44JHoCTT",
  "key19": "Nqjrrxr22opu15NuoHBT9xjg4zR7egAL4vpD2Ue68PQWZzXWbPW7PQoiu5RBcFcUoPmYuvTDc5QMPMA3pTVAkQj",
  "key20": "382fJhckoLYMke91PTzvFd2Xu5hvyo7rG8U6pdUuwXjm1wn4LDV95eESVADusG6Xn71mq8aRnwDZ5n26hrmkgqjg",
  "key21": "5mZ2poDXkapVWE88ErUEVdH2dKNw4zJD6kn92U7ARUFdgku9uu6Z2XKY85x6q8842xKsYHZ5oxbHLitPPfjnbm1y",
  "key22": "47xV3nxDAfCnCPbbRGcjx55pLrBsKsGf8mBJ9XL7a9LXunQwVFvwZF3GNGX6JXk5EA2gY65Zq4zUWoyHyAZ1zxPg",
  "key23": "5thT15uDhvKpnCesJyJHaQgc5iqLFUT6ZqNmEgioiAbFhXJhdcVy8g7pm3UvScY64VErop7DYte9JZ74MfZ2LqCy",
  "key24": "5Fxpwrw6CHtZJxaDPS25kNbDBYnpqZfCB4WcBfH9avaH9UXjzZjwPGqT7nxk957Sy4JDGhAoQ6gRg6PY88hhHrAw",
  "key25": "22MZifP4sw6WuoxnN2LkD8bYDjz2r3SU3Y3n818bM795AaBQZvDLBannct7w1aSG4YAjYmKSEqenL2ApHZvEaJUr",
  "key26": "291BkbwMcmn4AdSeT3QCxYvzj2WBmmXm6rPccXVLNfAfZhE6f8dNX1svQ3pSvYEjzrCPu4BJKZh3zRZHdHU4vhtP",
  "key27": "HcFtxq6yotVVc3JHUgQ6YEwRxT72p6XrfiYjjhwqV2MQLWGt5EWvWLXVJMLbWCbfivzZXPS7CHLBh7JXQ89Df9G",
  "key28": "5Ld1ZCc9vVUBzxBDKm7jYJJb9WQ1KVKkPrjgctsMzzFSeFjUm37Su8VU2ENUPmVajQrbd7K6UxnSK4VymjzXCnUc",
  "key29": "5dHR8kz4AL5tquPPcpgV8usexM9FVKCw6PEwrsSGieEuwbjf8pYS6W3suwJrJEPTyH6xSsy9Dee6vMBJc8cR4Tnp",
  "key30": "2k7q59FLcbKRzLa3GRLfEP9iXe19jc3VRtaNmGszT59kjv4q7JYqeQJZfpxBhqi3VnJ2eFYxFVAYwJmTT5JuX5za",
  "key31": "4EKxn9DYLwa5DHDrkn4iNSJJybR8auPSpueLw4VVUjs7UXUhBC7G1aNx8NndkJGsFbCH2LBf2GQ9oUbUPYDTsYsJ",
  "key32": "vQgU6ESbCrceQ1vzEtsq94zaw8vyVj63Ek6CKdPgDqDcP3EmQPBjHPaCX8DowkJs6C3aPsd1S2zMzcm81ozX6mR",
  "key33": "2hWkXELTdRcXgCRXANAstYZ196cHQdVe6ix2dDBTtTsqRa3fySNqFS1iYsLp8nzfQzJxE6xsmuL6a5BdQMj6E4y9",
  "key34": "5H4tQhmXh55CBjcYdfRwR36pb1x41LCH2i4ujLDY5Vtj84LQYtFCfxe7QLUjvY85AadwYuqjVc4dvp53yCADXDDz"
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
