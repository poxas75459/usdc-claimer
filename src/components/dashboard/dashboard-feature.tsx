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
    "3MiS6TnjwEDuK5jZXW9hMzFW1ummQRoyNM9JZ1wtY8DxZWsLHgXpny2WntoDoMbSmxyUbGdaYimXGrFCASwjXj3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VaWD1g8k99Cyqf1CforMb8FFyFNoF5uoiEYfVn1YDthgawAqMtXSUawJXxg1A7gaRTvdZHuosixYpJM3G5rTgS7",
  "key1": "5mJaXyiVfi6xnZ65LJ4GUc9TWhMeoabQuEzVNgYmWZH8QW62P8zhH1idrFUUASc6xXZ4qtqrDpDMwnoaKJuyT2Av",
  "key2": "3BYDcT8jddMgpayaVQuRmPHKiviEDZxDRMETanG3p6Kc3kvBcyrpFkjvgy6HoWPDLJTQd3nsyPuw9f4JuftsfqED",
  "key3": "22wUAEBoseRuwwL9UqocJrUnx7HLJJui5ugsVDUWtmxShbHwKz7dEv6Fk3MariBL1Hzhs2hQoaecK8j2wU9i9GSE",
  "key4": "U5mDU5P5Sc1Jfkm4reezD546mWw9hAEWMjTTstQKWvLfkGz8S2nodEM3wgqTD4EP6Vzep8smhEJ5prwrEd8JmF1",
  "key5": "2p1j7EYbHtnyjAh6FEqU3aYTKdGfWqzCKrNrLGeFTjLh5ckr83NZ38DQFyHGBnaL4NHxt4VHXpdJHA8awB8pveWT",
  "key6": "FWMQjF4mhejCstxrrLAMd1SydbcDiMUFP66z97dS28aeGdSx4ks9tHeztpJNg3x4WR9t9YQNQ3M4jTCusrWu6BW",
  "key7": "KxxoodGSYtWsjaLdnBcWS2QmVz1mgk4kvQ1AmpyjsU7R8ixBfAzTUe3xXHBnEJTgjGUt4eVEmbbThZt3bkzx6rf",
  "key8": "erxFPc54Y4xqYz6xfuQUE3wwKjJuEWJem41JZw5EFMo1B1ro1iTEPrfnicC9ohuBprtHYmSwEatVzNhyJxXGXBL",
  "key9": "zD5BRDWBXQLYSnJSMo8GUGgSNS4hdQ7x9gr1P1eKqCWM2x3PoAmnv49VeistHURQxdLqyh2JwBwLCAWQGCdrBPB",
  "key10": "4wrUiQRSuY3VURKeZ3dbHVDLMA39qhyVEd5FxoPiSVmsjowF1JxpcrF8XHXQf847uCXctbu2MBqH6gGNj9vdbCAY",
  "key11": "u9NC3RU3BWEVe8NYvyGGqaWyeNo4XS5vVLAYC2LEG4VD8UMekZmQr5auxcWhgFVAqqahsq2R2xLZC4GiVHaA8aM",
  "key12": "3tbpTTp6dV3JLUNUZX2P75cevG2UeSiX4XmDyPQducScbdV9wY2qNBqKLeXx37dmBp6bfvE7HcsprQ6Cv5JQHgTF",
  "key13": "3pBbyrK1EkoceCTgp8LGnehXR7siYgSzdiCekrTri1HqYqontUCyedjxGP9UZRu3muJzzAbZaS428LJ2MwAjmQ3i",
  "key14": "4m8Nx1dCRu15Y7XHNDFDQe65qhmxDXmpcdVrTzLrowe2tqjmrUCubDjyuANp8soutrRGV4KQqxrxoKAzRWPn1s5L",
  "key15": "66hnvrvoyZyahhE6KYnQD7JU1nraUS6JJ4NxzDSCEuj9ekG8KobsA3AM5PiZp7f9U9Gvvr6jvRpbXWKeLJWQjjZD",
  "key16": "4EwG7LMmszLvg7AUzke8wFRYvPkk5ALApYTZJerxhGMfvxGxz6C45zWUVoXMrA8CHUxgHRGoDnTPY1cDvMHMtUAF",
  "key17": "BBX7tNY8oYbbCRPwLp1avz3K5AQxqFGFszH42h4KaNorNXEBHpw15sgmTjKrR87uByStCDujuZF4q4HhbhvwhKU",
  "key18": "52Dxy1HvPLBtGvKkbuUTnNosHZEscWaAvzmX2cVC8HhnrPzhSZwSkyWUTKX9ADPZshesPR7qrBHu1HVDT2jr7hBa",
  "key19": "4MPGCS3effBjrE3V9PXNRyuamG5h2SwhXWHMYHME2s65Ki8TLovNFi2n1JsYuCJoaJs3at1d9Rj5Z1AYJ5S2AWUB",
  "key20": "3baaxsW1Rxs47BYUcrBVM4Ag8wtrqBQqXkgHVqdeMTq4W7ZmpE8ZeYrfSyjxfB239Yidw2zbHFU6nuB7uA8c7E9K",
  "key21": "S6f86D32LKbRRHThvDfs4zoEaVsovKfJDFEctYv1qoWfboQffpztdFQXcK8in92x8xyxC1pmPJyTY1GTP1Hr6m5",
  "key22": "4mkWTCCYG45AfooDkKb2ydQymTMCZwxf3wrnYGCkK2nFHLrFRrJQazv2tF4jmySY8GvhutPdWBf7QfuT57B95niE",
  "key23": "4q3PFQT8d7NbaVSReAQf71xxPqcU4J2VyEQ34f23rGHLAmCkYmQHZtj3gSUsuZmnn2AmiYBrprUZDhAGwNVQsUMr",
  "key24": "3uc8QAfNBCvoxpJ9hyEgPWK9wVKPKNjPFAMMdqHrHenSREYpRvD6USX3xjVwcqNLwDQpW2sAawCSzk3zrf31LydV",
  "key25": "3nbRjss9XtQLJwcNWqMwUbY6WuZsbVK8fFWksWD7hLyaihXdh48ZZ6NCCaXw8SBhsZYNTzxUNiooVdofBnvtZXyw",
  "key26": "2waZiFbVuNmFJp9DNq8BtJooWM67Vj2m2ihhR8Mq4tZcUHovphEJruVxfiN7nRuYwhhgH87KRWsJcPHBNH46BAy3",
  "key27": "3GDrfvWGTrUDiQy4qHD5KAUQhpvJWGwywCqHBWXpuEdFjES6g3cW2KXq2s3VTjeVnukwYGq2a5GRoFFxXGptXvyo",
  "key28": "5fKkFjVKWffuHXyy5UGCGsw5vfQTL2PWZH38hesPiNnXxr8wr4iR7Ysk9bpQXkCyJBMEQv3seDBRcLsoKvNPK69f"
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
