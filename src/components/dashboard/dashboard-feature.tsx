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
    "3Z67eyHZ98w4W4tVgBMjGDBLMGpAYDpF7PHwGZVAKA3e7ZP89cnPWLrRkrUQJSnEq16WEa5pRC3D58vuBmHUYaYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vcqQcek6EuM16APNGRkEfdWKQjHoMsFZNdFS75zkR52vdxR1DmwTtXv8RJuzMMsTZk8KYdoHrBPZxcZWX8Xa41U",
  "key1": "3hPervnF1P7mhP9i1PbnVbQTUuJM1we6M7odEEx9B3Ej33SdLgxCL9qe17uU9EqgEEjKRqVjuecX37pXg2QAsGpU",
  "key2": "5uonHGPfpYeHKZXC3S8yMcU29Seoztbkfg8pNmi1CYNu8LuwHAhGXD946Jf9Ec7VYvM3ZwE8y5MwsRoGECSmWENV",
  "key3": "5yo5ebYc4Wnk9NTCN4Dfj6Tp4hnHbgWvGUC3zq26HTrMnYmjXoFHWcguFeY2reutcgbG2xYpvy9mQaPNdzMLxgiU",
  "key4": "2SdNYH4p9F3tGDZz61nuuFL34JTpyBhp5m7BwADz9BrSD3ii5AeyaWcd5tGqESgkDVwoHbvQbENCz711kkGAGhBV",
  "key5": "4uLB56rjkqCEgn7aX5sasjHWmstCWJ6uWoNL2ztkAGoSh8hsxwRxxco3PXP5YfsFBr6ZdGynaTs6uBK1wygsKD49",
  "key6": "5qscwAqTLUjeRLgREdi2Ah7mi3gG5gZ3fa3aijXKBkMg3P9iNZfJv1ghUMryxnNghKNYCZQp72KjGnqijbhKfqyy",
  "key7": "5p4m2Ry5vqHmFX42Q7bdvCQbWhyUiEKNHxZeVbAzv3nC8UY238jCC2X9NYihBy2aemgB4atVYad9hDxL88JBDgXj",
  "key8": "8PAjfXz9AG2U5zFVyL71JgxCsXkpQqh96PiY9EgqrPQor89e39zEBMfMaLvnrjSmGkpu4U563QyJhjokpZSbiax",
  "key9": "2RWzfrpxAoZccuKu2Mzej4EH676BbfQyurgfF9DYMq8b2iyJnyrUVFs8rRgXNMPLMukq7ccg7u28QwhXceT8Asxt",
  "key10": "4nVyQPpcaQkFJRRVdX882PHaxJZvPGEhgKfsDDfaAXUxVHZGPBzb2kVi2fqwfQQMJPTHQAbcoxviYcTqdu3EnPzW",
  "key11": "mPkg5UrB5GFQSaMrSJpho1a8PmTuC2aauPTuc7bYvgDFi5sAYXmqv5yLg2uS9LDeFERLw9Ua6ZWbvEpaQUnzFAY",
  "key12": "hsjYWuK3zLoM7UoTABzhETdM2yFB9yvL8k9BEnSrQYZAfyAWPzTmpvQ8nhQMdNUfipseWS2qd4i2QhozLRKhYux",
  "key13": "5Fr64Z7nREHXgV4V4izPa1AfQrZSf66HQsnCkVReCuStKLqUqi5ryXMgPetTrmP47bPSNU3nMA5uXpjNp8ddoCy6",
  "key14": "3N4EMM7ei1XJCm1m96aqv3iQUz87gVRQBLuAecZAPCYcqFXE92fLXBFM1bTVuU9aWqVVxu1aCuU8nRCWKT4mjt35",
  "key15": "4qeZteyU5HRQ8cA2r32MTg4sgCHdzNUfaAiGTc5BBBNJhzDQmwfBYUhBspnaYL9Jiu8RgJHy4G1WnRDutCmD7zhJ",
  "key16": "2jerCq2epKue782QaNDeNRNQMCkmCNyjmp2MeCYx883m2WAAqX5RJVkAZubVe2ofLwX8AYQzabRdBP46iUkcbo1C",
  "key17": "4Umfv4eTFuXLgCjGePdoAjpcdXFaWKzgRggH3E9RbQCpkTeYo8khKqij2kUjYMZvK9J8Kjfz1FGQrHA1NmWSCGJ8",
  "key18": "5mMPThkwm5wrJTkPZDQcmfTEyG4vHNv1yz3pf3XJvcbLwSUQMncxeVPJasSow63mQGCQiFWMD3yES3fR2jZwwiyd",
  "key19": "2ktp8y8VrgbBHLenXL5KLKWtmsf5XrJxs9UQPPRmXpMXjsPAB8XbeykK8XHkFWANEtLf4Av8UgC2esnPaoiqVK8h",
  "key20": "3FywTipwwL7GPKVE8NQnhxbPbTruvGV7TD2BQ1FMe8rSeNSwu6xmEYjSfw8CNKoQ9aEQLSHyAmHd68nrRsUPYegZ",
  "key21": "4n8RpwiXjZdTaSTkFYrv7Tf1SV37YFnPx7tTUHB7KdCx6c3CLYJDMYVQba15rDng58zERXq715wNk8SHCyBtTPxL",
  "key22": "2mDN9EdmMAYYYkvaWMYrTiXp2UdYX9vz5yauycsEuUpVbPdjeTaH1eoXqMoL9DBqYS5fbZfWHgM5eo6zctb5qD6J",
  "key23": "3LBFCK8wKBPrYnn7f79saFq5jeQfc7bKwTUujdzBnUYqwQ9ebjqVMXaLroeeMh1S3UatiKi8rqYV74kdt4T1HUyh",
  "key24": "5XsKG8fUF4Y1A1fq5HNi5MLfaQqwSQdp68HPgL6HG2YwNXuG7Z5vkJ4rRas5vXPdBygPVayGhRqqs193AUAhF9r",
  "key25": "65a8wRk9RKCr1KdS8zqHypGZ53BU2rmh16eJUjUwLK4wNDbfSBnDk8JZQschxVGjbLCyczLTiiyi7pAdR92eBRQx",
  "key26": "4Yi5trGjPe843CeAWTfW3d1HBENMK4Ed3ZcLirRsq7EFQEWjkowGNrLHWj5qeUS1egJuj3V4Pn4Tq3YwSVVW1EWQ",
  "key27": "3PhpAwpR6ppWddtEDAjhMzTPPBqbA1JNUAKYsM3Hyyb88FTcTyfkwSymgQy5YVqcYkWhx4PUmN33cLe57XoDKXpy",
  "key28": "4gy84kEfSEgpYsV7NwbhzBr1HtRHVmvXZ72cTjn28PYneG2uZNnKJzA6NnP3GjLT8MM95F3KKryyXEibcy4rEbUS",
  "key29": "GXcUJx4LA4dGFtgbhPPd9WzUyDsBApbk7DT5oX4MTPTjoyoQ5LH7ekHqeaBBi3jsq9v1zk6NPznXS2KnZgWHWrf",
  "key30": "2htpCoFYENGTWxgp3tyPtaND5BndBYdKi6JsoYuKyUYcnWsVGzRXSJD4BxZoG221DoqBPugtdxffgH5wXPBiXzK3",
  "key31": "5gf4Bxf8c4f24XqiMgE2K8gPWD35PaobRBg1HxwWhMeG7NKWLxrNNkeEXHPk4ZeMTUjtC4Rva99E2xp1CSGNjtpZ",
  "key32": "22dU2TnMv21JBmt2eYypKBv5NgkU3STWRFt5zBktDwn8t9bSiE3CnewHy1gWyVKYLFB4xSLGVSwcC7EM1mT3cWPy",
  "key33": "kCx8KVarvbs5VgAVZFBfnWQPCc3bnfKTswGCsfxj4GgJWHfqevyCYXk2ZjUYGaJTro6CtC7HYRVZZNhkFnNbjhg",
  "key34": "3Yeh543RXZmq8WK5V6oNe1PSJw7JYSWVKWzRx3UTnnfw3t8Raw15GFFNMGnquCowCt7kstFV89mwKzqGig9XP6zs"
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
