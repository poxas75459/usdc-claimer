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
    "5yKNHAWveDxKC8oyFzosaSyhrVG2ivNVjKpppaiDP8oRk4jymkq3EzCNL9XWa1DeUvbG4wtaMS616UNAevi5xW5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x7y7jTn4D1M5MbZJSCxVSKm1BmuHPwzRXpFGofzkbysWphJeoMyceytg16Y6kjsyV9PuPhi6xnnrZ4phiWM5CJ3",
  "key1": "tq6VQKrLTcmDfRoESk18xWtdBhbxbdHbNR9qu5CLtVKmjP5o8ZHXhSgnCJc1NJodiGF21AVie1VJSm2oqp5VbQX",
  "key2": "4CubTH98xh2K1mtsKNMKtwTURqUguC42vNfxdSACMuLKYcAndPyC8XAURPj2kQswiWTVymaPj7Zr8gTdy4qVvD8n",
  "key3": "3SUePE6krXScLgLjsFJMEyZLXdyzYG8hYd8vrmZXRYngfwDxjBEib2WT7ZfBji7i3aXEfasLK7VZeRC5pQrpNcAg",
  "key4": "5uKrH1KMone1ayQcUr3TyxDbiVPZCQ35nqWTxqEZGWuiMESXXWRMeue78xXE8eAmW8ts6YTnaGWGZPYLDecwzFEo",
  "key5": "2LZggskZ4ZKZpbnFKKyHKAefxqcneTLGzhysjEeSgRUGX8QmgvzEDYGUaurP2s48idPqaZYbFaUHA8ihrgVCEHvc",
  "key6": "5vVPfTgERfYx6dAYmCALwukk2k7fEEvi4WJyf1gLizeCP8F5ziRgY9WYhG167wKWXAtYQzheYe7SrNaytjhtQYzq",
  "key7": "3LAS3psBR169fDh4A5mHSN6nXeNhaPJNtoywPSUZ5BpitAbPqjUKwVaceqEoNVZtNXujn6V9nQg2xd5UUzRUPCZc",
  "key8": "X5AZTtmumm6wni3D1FT6BjVHNbAEyqr2XsY78xhPKEGZ3f3fviepqMimWKLYHjU9vssKnY7sEB2Bv1ya7zrJxMY",
  "key9": "53fDyW4US5Q2huyzUV4xQLP4f2zHESUDhvqM5rW57WnRuyz7aD9N6FuUXdmDZXh5NLCt73msSFMEGeNCvfd6WwkU",
  "key10": "55pRgx2wPS1t1nHAU7nDwEdpSBiW49tyJL7TNzZ9MabbQRERUhDEiGwBnw7dxyp1WpA16LAQzEBr6QxmnNUSgDhU",
  "key11": "61Z742zxiAmwbTv7d9Kwdo89N823CfoU686YrGRqsd2XsV4jVx8XNM9uPfhFeXVSaGAhfhKphA2JzTvWEmp4MweR",
  "key12": "4woWUMjPxmHF32bzonjy7XpgwNGcFUSrNMTcFWX6dETTkzfKUkNRykrsdSsMZVVTpMbLHwXLfLhTrRDMLMMatbJe",
  "key13": "4P8sVXDpzgisvoAiK1LFS1nocoMe1572LA4Xm4yEwBtAzFqyghXRxYu45q9xP8x6J9WqairSvwJxdTK4VYkE4w9K",
  "key14": "5ktoi5iquNkeWJXvt1yuxVaLoePsrcwTE6E65XcJhXtfM41QbYb8H7rQWyLHvu4YCSZRB7VVBMxjVb5oaskqzcBQ",
  "key15": "5go34uemjqCWbTnvPCWeUr83DKHLbVVLvtnNN5AJ6dWpMDbz5fGzTB5sbPqrtseeQa9dJxkk4RfqCMoxQTgdeSCr",
  "key16": "5iVTQdT3GVpwkGo5M3hgHWGUYQNUN5Jon3D3gsW9VDgkLXCC9EX6Jz2TGw3f1WMxj2jaCrLpYtMBCrPHYZZsK6K4",
  "key17": "4ap6KiyQ5Y8ysrhzTdWongZ1iqjG1c8VZVZVrRggmQG1qbmQdRYxbvESgv3kWxhrK5dTi9tKRNuGwTyhWbLmejV7",
  "key18": "21CrvhGKxEm8EvwhrTXMFTqF7LmpsBpFciTF7NQ2iBgrHBamjPz8KURctoZ2LXY3pwTmTefB6qXUKJLsZ9aPJXtf",
  "key19": "4UyzziuFeHu1C2PixHSPzmSaghQQ8RQyby51xGwgwsB5yMJCFTto4K84gf9vs4V3vvUTzf5SmnheX4nfPMK6SWXs",
  "key20": "cUT5nH3BghTUP8UwxHw9nWR9QrmWtEgPntQ4jfwfkm8uyw15U5kFp9TKc1cjvdV7ikJPkrUeNytMfsop1a8a6VE",
  "key21": "2VvGLNQmXjkGixEFaJBTcCNfw2ueXRTQrdujWCc5cMsUBBFLyR6MGLBx8paf8SJEfBzQ99zbjStEgUoquxEeBMHQ",
  "key22": "5XCYJX3e5EqMPg9afFdBFpyBjCbAeWVf2Y47opiepbaixK8xHfpaNZhMUYNFkFPRpz5EB66LZKzobxVYqA7XBTFa",
  "key23": "4sRrqfZqzvYA1HBrnsVyXnZg2y4mEfDcduru3DhXyhJwEAGeq5a9tiSAX3yFcGQdDg7JVxWmFpHgdvTtqykzVZXV",
  "key24": "3EyZnSkchodfckcTyJidCvzvdapj78pkgfq2o8Q5UExQ7e9Vd4h85ptjgqKUVT8e4BwqiVtWyJ8Bdqne9EYzxy8B",
  "key25": "5dSAukzTX68B1G6HC85zjzYD8MKN546bwwm7SGbVLkoBbiDZMaUNPoTPEV58aFCwPjFxDrn2Y9gypBen4Cpm1E37",
  "key26": "454HueLfDfNq9R8yZyJwbBqTBCCQ69z314x97qrPn5e4LjuL83ApQtBeeGA1hSUiVR9ZSLpuHp5isZiR3zPqJFUy",
  "key27": "36eN43YxdziYXeyTy6ZMsFmTsKuMoUEjHHtZCNEAZNnoxoPcMdP2ZXqtygMmfn8cHBc6ryfy2enLnrcAZCRB98f4",
  "key28": "3ADJJcKM7FYVY3s9Pe6fNgNo8BHvc5s1DouJZwUyGxyNT8AXMQE2BhXAzz6iF6n3FHVTTqiNVG8hZDEBr1bkkLQW",
  "key29": "4RT6fG2W63dxu5M8P4ZfHnNPxermdZBunJmWxt1agBWFiXY95XncjiEfX6fT8LrmhbymrgrDoEb2UGMf1ZRYaL2d",
  "key30": "2NkqU3h2LQw63DdQdP71ixGw1rRNhb7j2A5uijcrkLMWBjGHnZNkZV8LBbW5R5uxMPzbPrk6k3cE449KvxJDNViH",
  "key31": "2oLnJVjJjwKgUNbBtpmvuQQhGsabXepHvFBuYiSzSmC7qsaKuLqwmXGh7UCMAExY61DDmUZFVXzQmc89FxQzaM1Z",
  "key32": "5VMQZ9Z855iM9Xi2UBoagWwqMpmTBzKmFiEibZyBGSvtuSWVD8KpqrAPtKM5dGP15SDFbad8W85cbNbvETmhZgQ1",
  "key33": "3GPPP9YX3YDy1tnVu3yGhmt3PLzXHG49wWQ5EiAPT3o3kBLiXQK88ZveVJE1BDKKWbVbWnJxE5XWmry1ntGgzXyE",
  "key34": "5SsWqdkFWJW23pJVPjCCjSqTdgnkXR2PBVhnPXndAXCS6ueLYLCvDnwih3uy5iZgtU6Cb5by4wU4yuTXxzEyGpsJ",
  "key35": "4p8qsqrFLtwd17R2ZGuzuSuGemaNBSt7tYEpafv8uuogEz33BLkekU3zgJWSF4Lug4fnvfdo7vkjHsF3eL2QChrB",
  "key36": "5tVmieFgbTZ1aSqNJmDYbuMAMh2UocdnDuKZ1scyUnu1QEDa7f3b7CuRAkux6T5iv56PA2LvDCy35SMiQgjMrixx",
  "key37": "5X1N34bR71ULwBdPq3sjDYkyzXqapyeAoApnDgjK1LKpbEkr1rw3VCTn5dUNxa3AdTfxbaV7zXXpMJXURAUfb1M8"
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
