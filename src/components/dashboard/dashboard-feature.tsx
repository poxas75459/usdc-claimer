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
    "5MaNiqW7w3JuudBqzK7t1VTEE3jmuqrmWPYrQ71EXEg9yrPHVzDLe6TW85i9VTEyQeDRmF6m6DekbtaedaUGHdzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jGT3mku5bLq7d33xbCUnaUSoWwreAXq5p4KUUYRr1XznkJQ4oTAnscTfFcwJ5WyxTkGW8kCuZ7YQD5Lcn48VNVL",
  "key1": "4iMwnXPcJPrvJSpF7P7Y1oQDo12gfZZjk4Su3i8J97CAad4HDnrdmGPSvGh46FaZrFSecoghD8ignHkZH5tH1Jfa",
  "key2": "66WW4iCVLxTa6wFNJbxTvAabokrHe1Ybw9Ytjhwgkon9X8oPx1QCSk5sPUAi3sF1omsjXSqLYJQ2pNKzReXPPjoe",
  "key3": "46ZmxoB53HmtWiaWMSF4m9VMswSBaK492rJzgwvoDhCVmmyLPSiRekKL4ayb45SNDdd13GBjA58fu3J1FxgEMmqE",
  "key4": "Fu9vENzNEyRY3p1Dm6eKT3q1ZiSftZ4x93ydAEucQwhwyLX2oZmZrQDnFq8ntNtCFybyCYzvca4K1ZP1fFriAAf",
  "key5": "581h5SGrxSuPPD1rwQaPqK619LnqH4wy9FSCbykYBfbfXsfaMaoTFE19iMTUvZBHiL7iHHiQRMzhtMQVk3q4HFYc",
  "key6": "3QmSA94rZ4TGuvpW7nRCPhceeo5S4w1snVUUqHVE5Wzbqw6SywjRSXFyi5UPCRMN58dCJNtmnMSynX6frz4EGVHQ",
  "key7": "MFVk2m7bHo8Yo8zgyEbTkVKvxfLNpGBF3YxErCmo8xRqGJSHdjfypvCaLgN13QervM83SELqH1nmCiyaQDsTVEe",
  "key8": "5viS4Yvqz2w9JQcjTJs8XNjuXCTFsEPjZ497wDcTYLsTfHg34RBhtdpV9i62m3R8Uo2qykCZJCBRd7dJkZFp8oxF",
  "key9": "2ucUWrrec2QH6DvUdFjgGq82NnTDkRhTaMK4Ppd4tCFthDY4V8VxdHVnEWehkYA3JDnfmgKN6MHAqJnMUFehvAqA",
  "key10": "3ZrTxMFr6pLb24cDZi2zwFjcjEr2ykQRc2iQaynHU2aRtA54FcsVAmb8PtHrxP9PecmTKUUe7MvTUfGjBDZxw1eN",
  "key11": "5Z9rpzXtkeLQU3rqkngTyduiAE97EnDQE8UbSsn7u4iMjRVpWxbQRuSVVgftyusYrkK3dLMKkQp6qpii3r6npC6h",
  "key12": "3qnCpRjWuFAQgi57k3p6zswVikaM18Tr6ZT3DxCfjZpoTy7jVaNcxfknt3pMqXEEeQ8AGiQ3dkV3ctJJgrodQCqD",
  "key13": "2zvKe7PU8QGScDaru8EcMEC1DA95cVoj2oSdpfe2Cuv1VZLvjmgFppouqrBxBCP5k21eZVNbCFJPTU2rf14HmZ1F",
  "key14": "5ipe4J93PEPpU828oGCMY7M1JtXBrcgNAkXnKd2g9UfLA3NNfKM2T2b7WF75Jn1YM37vyJu4WLqzsivfM6KTYgmi",
  "key15": "4JYyotyXncmQAPwYTctJhy4FHJv4dXfqWfkcSxF6wHomotp1GR7xHmax3sYY3VNJtWzfcCjBinmtA5gr9YuEqBwo",
  "key16": "3moprbJAMVp8iwG8DEwENDwXxwHA9Dx1s8WBowyjBGJfcpcBf9BTsrK3AyRL8tXEczdKrVz67GyYw18ZUmdNpVSX",
  "key17": "4iQ1nZ7xP7BjSpGDzTkSNhHjwzrW4ZXiYiuBLWgEjnfkGcwtE6LYAbHGZArcfhNn6V1nh3fofhr8PDEdTkfgAfvY",
  "key18": "4FoGEbzSVZmruUSHM5MPc9EgV2rJ5iDmjn9a9n63cuoYtfFU6ehTJVx35YEdpLM6xvp7e11XwNNfNiKMH1PHxGrd",
  "key19": "58de1vHfw1g1md8i6zTQEABEfaFs8jBxPgBNBx9Hny6a6FdEztJzSym1mWQhZ6y2VJnMM412FKfGDBA4TTuMDdbq",
  "key20": "3aQB1dwR35qwGHsHdnNA1XeiVK3vB5emEigSgmX91kSM7TpTaiBMk249YPJTZK4V9jmWn4e8cMjsfJy29mWqMb1K",
  "key21": "2HHwdC8ucSo1c3XwuTHrqkZ4ziu4mdxxJz6jYFZj2dP9snpvnHocjv1XmsduZSpGCLzcFKwtDvLuK4kDCoN89z72",
  "key22": "55JJ2a5Euihq3WrKCLmJ4Jg4J15Tt9xYBZ3wXNXdqZvGAqZJJjihKGhNJKQ7rHfygkv2wRuDtU3B85SPJh7QCk6u",
  "key23": "4PV6rx6wBWA8Yg54R8yMC8jAGb2Rdmim78KrpAcgL3Sr8weg61asetkx5uvRf9ziytjP6JwMFyNjpAQ66A81Vac",
  "key24": "5tXR6ZW2x8UzD4NoCAAz7AYbH78y3gGWFgp1ksePrZwmBH9HhhUsxahBLrVpby4GyQ4hCW3m8f5NKFjqDaoVw9WP",
  "key25": "5EuRoRvsFNDpUQZWiwJe2kx8s8A7Daayso16BP4xPw1Axd7PnXtLmc2SaUqVSuW43y6hLAcJfqpNV9xg5bVq8MsE",
  "key26": "54togYkMd9vhgFmqVkCJHkx5wvjLPXFFrtRAVHXKXKjioFCfu8ke31Y5fL74uS2nygYxYLDc71z8HvYrgaLCXrfR",
  "key27": "5VnicTNhJi8fSk35zfg5VLfYzpj1GPJZqgsXnsvBJGTsvWXZ8N61xyzewns9fUocAFKAQXq7vLAL8dAvsYPpvzAu",
  "key28": "3gYPZi1QueWA4x9dshas7xgMTqpGTWmwdRG5Gx55LqH3wn6vZga5PBW8HvY2YEvgmHA9ZjSbDr4LDfaRWe9nr2Gy"
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
