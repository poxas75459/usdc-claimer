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
    "HL24TKBFgwrW3rug9HXBs3dHCuftBxW5fu9JuiLZFE6ABfFkQSvXAsLeJHpJ6eWqNmCABj3dDyXKgCyAoHmev8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eMefoFHAw9DhHMbkCJXgf6zgDwFFydHTsqa74DqjXayqsAkCWmGwUwSzaNgkVZvfvAYYE55LpwXWn8Py7kUDHyr",
  "key1": "o2CyQKH8g3jBN7UVYtqiJu4QcHQWtKF7qyxY8s3ry3nfPXpCcryDvs5jJ6PBtd1GXFKiZXoPPjWctK9fNSsMgkN",
  "key2": "3jhPupEtVd55nHmiBqfZuMFLmocMvwcW3aZzT2FTdFGzqvR4QnurKBEnnYH9RSadSkSKontxCwTeFD6WiE9nn5Kv",
  "key3": "5qccYkE8aqESkKR8kPtyXghQeCrz6wwa1ZnFV5tr3VRPsXWK3Zp8iwHy1CGj63WXxn5JYiDamFgxwzjpELrqYNLH",
  "key4": "2Lhy9DRc8UmG6RJJ4LLnHemKfRY7GSxcym8jzPr7kWouTxkaqJ8FLXEQBgDj1jQu1zDfs5zEJL7PuFczTFsC3fsr",
  "key5": "5iv4xEDWRkFnB961y1AVdmrf4C5gc8EtpqhJmRbXQKEhdFP5sWb5eVHisBAxoXsyHarYLCBeBc2sC9UM4hZcpWwS",
  "key6": "5o1YxC6uDC7z85DEmU2JdacEDr7qUc2gTazLZgweWzTsoWBDtQX27irUYeL91jmDDg7EZ1e7SBMpv53A8sXekeYn",
  "key7": "8ggdk3mYsDhrCGtsaeUtrLvYYhZSUhHmGGZJZzBai3ytUp3CyusQnLbPWSLY2i9Fd14DS1oJHWYsRqVXTP86seV",
  "key8": "6tJKtpypw1a9WXUFsZ4BJzYvTA5Xcy3mJSHFUYQpear22ngQ5AYX3FMjGAevSTCna2HvmD3fvSsugj9gGBMRbMm",
  "key9": "52PH1MPQkdK8KXurkpgXwbrEJieCGyaopk9DpjsTTUMK4Y6CFt2eENrV79xu6jj6Qy8r9tywage71PW478Bqj3tB",
  "key10": "35bup4vqh1LjyLyrEc2bnXSLWX42aB2PLo7VybYtXS1D73m9vJcoWfdZ8hTYUTSAJWCFKzFxRZeXUFohaBNGFRLP",
  "key11": "2jiC29C1UNkBtoD33Jb5r4aXcnuRT73MMJyZDjoukMrLncJgByPywnhRreKSUh6Ue7Nbvtj6iMvuDdj9WYZarBWg",
  "key12": "5C6mHZ6xh2S1S9AFJjWEewY7LXpvxZXYokoc8EQM2PsXBwaC5BpmpbhknqUJyjQ82hcJkPcq1uqPjhWXsE6N78WL",
  "key13": "55wt1nMhrcn1GGj5J6TmK8xdB9AN4NGjBmvJLu1ferxLWiNqUTmyrbvzhaDPD2BC7en2GgQ9vXgnKihLiceMtDAD",
  "key14": "2yQqnB2shJWk9NbE6g7kuUmmyHWn5FbU7xWYEpfy9dtjnhVxc94SN58YTiouYkRPEmydPUS6ynvthCCsVe7qkV8W",
  "key15": "36XkuZjU7vNagVY67Pth4ZjxZ3WPruDLaY9r27z7sFVt8HwnnSiJpy61z2qKpYHg7ADLwXbKr9HKAf6M46HBpTGH",
  "key16": "41KfPeRtU4DscjUqJey3M1Uv9n3TU38QR4pLunWmKaaReVko2Z4xYFhV68m8Qjx8FKjVehCzKZVe68ZFSG14PbL5",
  "key17": "3bvKepkm9N52u15rgTRvbxeXz2nzE6U4sTGPf6FykRbwkqGtVpnSVV6V899CwFg4PUZyfVfMPPiHPFphp5gZ6pt4",
  "key18": "Sqx7UNU8t98YAcK3Vk35doXeBqc9zTn75wLjhnf7eRQjvVvrxEUEitdrtkz3ssyuzznUbsxnWnWvf9qc3FU8zDn",
  "key19": "3Z3bY7erVGDiU7kHBXv2usGLwbezaNG6X6eeCXs1D3jtPYnXqwtEUdgqjFiYBYozFsRQFnt66Vp7ivWzvYzBBLXr",
  "key20": "5rVVZMGwTomccadS7i4bmau6htBU899sEwD9nFTFbKm1cLAojwRKuSgdET4AV5Q6CYzCLEHHsNezENzCAKQGcBhk",
  "key21": "4jJbn3mAfgBx2P7EsKLNefPNZhcVmXsJx6TBZV8NDhmCEH6Y99uJuysAqji8xQ56he9hSbW1dTXRe22J8bqFzNSx",
  "key22": "5aAisR7KLUoLyjRRV1hrewmV4AvGwPerwLsvfJw1TjgkdusFTaFUTjgcrgkyGim3iQqgtcxuswhgp9PiJnutHwSZ",
  "key23": "3UytkWKwL6eULgKH77Lp44SRz8fd4HniYw15KLcqG2MS8iySKiQUgNianqYxPbbUKihzxCsoGF79BpmEh5LT4rLL",
  "key24": "A7mp1yCkooVapDGnuCXEEG8cNxKQZ9b5FhNddpsDRKzkpkmUHriikahLVKQapajruaFVdkaBBfhR2r2DFZggRDQ",
  "key25": "3xCgNGAwPsguaun32vTjDYBHpdjdUBtdZ1jvPumLgEshph1FoWj8ZoY55dSsEb35qUzDZxSHiAKrom8ksxWraTsC",
  "key26": "3pUy3DRDf1AXrTugpXYCYvAbmDGcuWLf7AcoffQXjhmUx6iVkT6UFVqWWzh1Pjqk6T6bvwi3dmaPXbTnwMxanWF5",
  "key27": "5D19WXFCsMozQGF7uL5Dormcb2qsxXnJHMKDKQjkFd2NJD1ZfgMcPihgc5bCuWr96hmdrxeGC6zdkTNJMCRywy5J",
  "key28": "eutqvUjLSXBNKNjfmudR6wqJeUNzP3USMTeRr7fLAp26q4i4Xd16DehJdupVV8kEeTLZ8LDGRi2pLaJAsCGy8So",
  "key29": "cJjoqFdguLq9vZGnzHat3F8D4VSwktE9cpED16F3PyLabRHb9iBsWQXGE9WHpBob5WnCtwyPrxmecjo8bBc3P1j",
  "key30": "5Vcx2ruknnio2ZGne2J5ir1SmJi2evN88ZYAGbZKfYZLrufL2MCNzS8a2xqvXZw4fqUU9ysemTUTgeb9JUrtgrpR",
  "key31": "2NbDkELff8tWJ4P41ty82gf7LJsXTfdcbGeH6rUoiTVjrGwDAzXXaRMtY6QowrshHNp99wnVVwXJxojXR4NXWzgt",
  "key32": "3RQX6xBvJRARaYLypfCubTzfAnnUqQyzS768o4JN1sbKuucGpw5MX7DP4cBAUjtx5RVuAgFw5xE96C8uDdTZBPy3",
  "key33": "39XNi7maw4nZftjc3N2A9B96YWkqhEzcjaaWE1yxRvy8P8UrBGKn5gTTLaqysyDV7Kd2QqDmmd8ZN1CwTtW6ankC",
  "key34": "5C22wnSrMhVT3ppvZc6cv8dExM4LTzfG3wdwNBc66MdaKwUrHvUq8duUcaxsVkK4hVMEnRuGXAkNtWGfgHVkgzQQ",
  "key35": "3ZzrXXXjoHbFELu3VUVL8dHJBmEQQHG8upXjBJrqnnTZPt4wFSq7mPGwFeAsKLvi1vhCjzRRfKNahqKEmBpq2rWg",
  "key36": "3CCme3kFPU9GYKWzdBbXvcL5EhTUmFteE2io2irrFDHmN8vygarNAK8yAR3BbGSZbEYCWjCSx5Ph54Yx1soV2TWY",
  "key37": "dVHV2WMA2GspZVCfDqnzV1uyHvMKvTCjm25y4f997LXyjg57jCkjTWLa6gDoas5WrfYTEW2JLCvapJQkN26DH5C",
  "key38": "4xx8jXG59zhfikD3YJ9asskdL1ZGjdUwgekU3BK3Y3Xaj1RobA5A2JoWXfwEPAbbxhnpVBsCCWMyB3AeSzFbfJiS",
  "key39": "4V46Z2dmrSs9uCLpzS3UTzMZnmKpPd3h2vJK3UgGmiMtXTCKXmQ64MYoHDUbuT95S4wtVzqajAizGg9v4vuXEsdk",
  "key40": "3qnXfh5wnBoUgiBmAA99N8zcJhcHbWg271yjWFUW5dmzpCKvpL9tFM7rE5FcEVWwakVJBpMqDUKqCXpBR38Vti2M",
  "key41": "8CRHcuazJ3bx9qYkAKTfX3wSa2cQ5Zmkn4E3NrkjAuEWDdcjfzrEeN9EW3rv4nerjEyAwudvHxcrwkt7HEV16DR",
  "key42": "fNhqU44RXC4LQL4DBXBodVU7rPQDnfMGRbUQVemAGGyyMqhpLPbos2tEjcnYRKCTtL8vXgocX91Xj5f5g2tG7e8",
  "key43": "2zX1ZNQ6hZQ1TGt2u2DTGdFHBPKrYhSFo9kMHUYRgni4yJy9JqXydnY5s8GD9dSHduvsEe7ADR7ThCZugo2LZyy2",
  "key44": "3LrM32bLhuhcQin5HGXVqz2BKNNgU8s5y287oLR2xP7d1juTiEXMpP2vmj9nZ4DuereFD9Sjc1CbgXMLBXW21KNE",
  "key45": "5kL99WCcC1T873p5ur2qjrVGq6jCcrkqdeRMEKKEmaCMRud5NW1VQPeXu6YzQjM6CRGUyP23tg4qkNUZW6Ke3NiG",
  "key46": "5arvLn1Z3JiALvUjSJX6xCeJaqYYQKEe9rcV6htsc9LEsyL85TdAxyXwHpvNXompcmoPWJcBk96BRyomeQshfuyJ",
  "key47": "2KLuJvF4a4qaWqnwHado6NDh6kUJAFy5YDYs1sm4hnrTWukQ5KDy3r8nENCMfYBBgHsEzPMWSdkRDNZpnGXcn9Ri"
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
