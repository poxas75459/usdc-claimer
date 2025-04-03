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
    "F28PuXFYYn25Wniwc5NCJdJM3kkp6ukMejpm1bwQ5rBCUj6PcCXkrcZxGjgpVjb1WdBrsqZq1XMJYkh2X2s3HxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LGNoPYFy2L3RYTtAdmpbxkUVkQzKzBdMdnGBEHeAZo1RfE87rVM353gMqgZHsWmFiyqFBWS1cF4xbZ9tKiZKhWK",
  "key1": "5sMU3ZyuAVMkSZyUdnFnsYKFkovgKHDACVPPdK8uJduvkgGCaeBMrstBLdMFajVgGRXLprWPcDKPAj1BwgVev7Vs",
  "key2": "XQp8ZSpkXuK6hdGURfsAwduxNQ1j6uCMWfEpyo8Yf7mYczrZyKr78zFh2zBLNUaD7B459TvPFaLbr5kcqd95LdZ",
  "key3": "5eSPvZRuBu2jX3vWS8xc6rBYxptYP5gvV1MRvPBmDfcENziDBivB8P9ot46GK1Y3uPv98pdQsdaCespgK5GkSjuM",
  "key4": "3wgZDn3Ea8TNLXWNroiZkUvjwkrNgHtv9VCxJqRUnUBgktBUjPPyrNgYkk7JTNyQ4pgScbHNnaFFZ6GEC9wSvK7r",
  "key5": "3mC1EP6sC5STf7Dumu5ecEmxYj8P7RRQdCoJQdPnmnoTKVYy13ivgPBXFqadWwXPbM21Dv9jjeAKM6f8XZADmTA5",
  "key6": "3nCS5qaEMux46JnEYogSrsQf49rDdNipykKaJkrcwzupt3xB9dC8ChFW2vLjjtBN2GExhSEMQCZy9xN5XAQJpCPR",
  "key7": "3dSu1Wd2LZk6V4rHKkgHAuvXMtZdjJtRZwrxkhdDkK5Nkr6bzm4EDN8gya8PH4YsgucuWdpcYk2yAu1L31fBRctb",
  "key8": "2wtiS4GwxTVauLtDZWqE4uBTzymiHsYQCEgCn6rDRLUbcRfmTau9wJEupLe6HdGXsuqrjn6zzHSm7giHADMk31j6",
  "key9": "4NYZ3E7dNoAz9UerXHikqsTmZZYB19vX8bgH6Zs36aghVX3hhAuM8wBWT8mTWcXaY5r48TFzFYpMRhTEoJz9Xdow",
  "key10": "4UTVYBjafZfbV57siKQotq9SBLtpjtuftR2kFgzrdXDW6ZPLNGyDb38kMZBdeofaF6BhbqNNw2Y9YAuKn5BktvYm",
  "key11": "gdCgRFSALF575jh3Y8QAVVupuQerejbY9HFsfEy1R3CZeJwikGsYn5Ln1ZxBvBNN1bca8kPjEkg2ttT7b8wVGrF",
  "key12": "3YEJQJLwArnj5AD6mApME8pFDP1uhZtrFMUtCtjDJHTnABrJYFh5KXbsb7PYycg8xU1kzoxiKGChvLxFfnsgLTwq",
  "key13": "4E8yMjWW3TuaFih5quPCmAFYUhEspqgU6X4yvvM9dAnocTSWqHY36nN62PCSe97vHv3XuS21SGurNgxyeeiEVJMg",
  "key14": "3rwRsqV9E1tQC34oT683g4q95Wm2of5ULJit3dEhkQjpVZ1n8ZQcZBqMSmecK4eVHh9oXN6irhBMjX48J1gCeko9",
  "key15": "4NSbWpHMoxXjMuuA88tiRdUsa3p3BqTbaAvcyQufh72xtkVHXeHYAQDGEYRzDgXuucjoRGgvbHgAUoBbNUs3mpXR",
  "key16": "47CPJBxU5xfpCAKkSm5YWQUJzb68QTW28xZp9Rusx2RGd26JJtFV9oyZpbr1Kw5QNAVfL6aH3eTmrAH7H9pNs8TD",
  "key17": "R9vwTBwDjkEBXWc39YyfHTGyxvGz55Eyr7w6jKHb372MnAgStEcp4aBd43jpgRxa4CxUoSbZR7zUqMY1PqX47pF",
  "key18": "56VrMY4Ndq1J5j1aDNhK9UVkJ7H4uyWp7wYR3Vti4N9rSqj1Ahb66bv8eEW1fikaF3DXo3s7xstxTqVTp4DnRbG8",
  "key19": "SsV5BKxjgV3ups7HnDiZVHZntdccqxMatr9R8wX9NkazmUX45NJBKuKLMrYx5NRZZtiPDN2Hpm8EugQeEyouPsz",
  "key20": "4PxNvdUmKow2o5mh1gbMS6haV8Qwn3DJyxbvJEERGqJ3qNUAdsjyBSYCsBQY4ZDwbFC2b96eLRUyLVDjxmttn4pk",
  "key21": "4ZhHqMEpbvDcVBibWmcDS1wofw8dFx6hYRzBMULW6bkFtAcUMsJB5VC7BUUeiTaoqPpiWx4EwY5exYq2BzoUUbAi",
  "key22": "4MYHuNL7rNn6bCNEhBdEFthnRBdX8WFPJXe6fP1zpB24dR7g5czNYTw8HiiHdHVH99fHoNyLnjWRf9WK6KnvbBPf",
  "key23": "3qv2Z6FSFm2bAV88DJaajXsryugdkWUy2CXzk3mr9wzePuF8GA2dF5AhU9ZTpa8QMR9DnVkbZDT9NgbczSwjC211",
  "key24": "4aZCBW8fFL5ULy9hgFpBPDNjNUH1tvv9jeq7dJ5bHWYwhzEDaJ7mdC66iFAJDfCpY2QXk11ez3y21cVnp4sgTqkX",
  "key25": "3PxY8eza2q2jWPAdFDdwyZTqcMFsBvnjkF3ffob89Dgmv1QJmRpMEVTSyz2Q9RP5pA9PH6kgaRSfv658sdaE2BE3",
  "key26": "5ZUnZuzgWTA9z7mUkjJvWdEqc2gSidRVMveJPftGsWEGeSWMPNhZa86QmeDSK7kbj6HUVA1ViJ421TUMUoaEPSTg",
  "key27": "5YnfPEmoc5EcHwQ1woPcNJgMkopo7enGK3z4pAHgA8vnWQh6PLCJivzqnc9FAbuAjYfKvnbGPKTgeX1ftqfSYvnn",
  "key28": "4oS2Tr74Q3qEYPv4UnoAydAtYhPyPiDYz25rnPdLww3di4Au57Sh9yaGjd2PgjgTSJCbXUiSELztTWYwXgV6HPY3",
  "key29": "4zMByAZuLnGhv8wpiF5t6TvcrFaFeUoXqHyxTNh4Yu44vkgbLfvSdHVstdPWiNg6GavQYio3FF24eUsWDvkmeGCC",
  "key30": "2913QRP3wcbMokxQJuq7RCT5f8X6F6hnSraDtyy5ndzGzv8Qs2PkCDDTZJmnpBdHS9JcTfywUeYewLWtW3tnyWNG",
  "key31": "4uV7KBa2wnE82hvFSbYKoiTtnjMVTtKzZyxWyjRfgC8vhdDBHPBVgYF1gjUT47F4bvee5jB1tWxNVa5wmrrEQPNm",
  "key32": "2kzDLzJzUUfwrq1weSYtb9mMwz5mcfMbasuxTHsfkhQVUkVHuMTboFm1dViLGxHfZPa7fMXBMKqNjHwedz9d12YD",
  "key33": "2uDh4hKwFAnt933XtvNitpVWHDn9Xshu4tXZBpRqNesyp6tizjZ1XAkvUZ5WfyabH56DDPfSfDPmy1hMueHCGGEH",
  "key34": "47RYLDXCQfx9zxzjUUnzwtD4JRShCwx7Zw3MnXCY3NYena9ifKHvF5voLQ6jTFrtsADWHgGZTjXcsMtiYf9rS3YW",
  "key35": "5SUnnV7HcQKZaKz4XM8CexVUmyebgWh6s5G4jp2DoNnoe5sJoXXwE91SzaENLPCaEWV7fR7LC1SThghKKJrqvS5q",
  "key36": "2v39TVuCxyeGKwczJ2xDMNGGH8MUcB9XVrj9BnKTN1AzZ4k2qGSK3q9MMvxxroi6uzYJqjneKKeRo5tNDRaQGEi9",
  "key37": "3jvgAV5VsaTJuUrVUdinRNjc3gcUCkb2TTubTyyryL2CZYCqamKPSKs5u1Skr4tXcXTYqJVyh2c68JPArfKA5hzh",
  "key38": "3cN7WfgpbbSnHumQxZ3JoCm34wiDbVyAhYjooL7V7oFSX1X87M3ADQ3qjuDrwiM8LZeHNa65cZnayiFTWnchKtSg",
  "key39": "2c5RoABosxrVgBkRMdkbQFNzxsajaEzxnE34JQuZbU4T7ThuNkWRUaiUAZSxERYsJu4Pzz8QkHT3oiUjxXZ3fLfM"
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
