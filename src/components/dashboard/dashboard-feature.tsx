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
    "2TkupxEWpM3up1eUnc6TNSrKntxbNidVx7bVsQK595wiQ5MBARJrPtenku1DJm1dPLL4Uy3c2qPTR5DiXgcUQiFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LKbeybJ56i6jKVH6DsRw53RG69CsWXrGiMNFxSrj8Xqco58EMopxLzTzCuoM3QDSFg3C19n9BYg1ev6E3N371V6",
  "key1": "4bFRc5dHwVUWYuJ7qeS2UrhnrPhsXsU94snVqYi27SGiDSL96ZM5a6vqzPBxKPf8pAS7b8dcpJcXa7LwoM4nAZmg",
  "key2": "5b7w6BdaU7fUfBRqY6b4pNaBojwxxLdLB3oscVdr4XHHABdcX5KKKbBgutuo3szJGWCnLGuMtWWGp87HwwrXxD1F",
  "key3": "mvySBFC3HGYtjve7oiK99tFMB92QYtNxpK4dHwfJD5B3CZGJbq2NFfvNW9TbKAxM7dVvW1QcZDamUfT83Q9rBG9",
  "key4": "rQBNYJ1EwdvoUHTN7G9WXg9Fv6gmYKtNUMpbB4A1zyzmdRsp6tTNHuoiV99r5DzeKs9sFRkAfTGuQyshQKdUPGJ",
  "key5": "5Jk5n2t4ZcxCxZmL9sohYjW4RLichGkpfqCZ5SRspvaX9U33Hv51Vko3W9MndTv31CeH6ZmmNBtGN6XLjf45EhMu",
  "key6": "52HT8mkBAjk6QnpgMzvFYUMMZjMWS2SwxRjcuiTnEgpN2EosyqoqKXijMvYkbmAbKjwtChSvkLuKYsQMiZt533Y",
  "key7": "4T6fVYhoMLsrhE1rrZvL85FaBegteqzcKmaBUtsV8yfZrTcgcXyZRMW6eVRxectKS9tiwyok8LX4ZkETCXRgUGvH",
  "key8": "57ADex1Q2vzU8LjqGDbJJRwiTafpnEhxhaoER8CRXupDL4TFmJrkS5J947rFfV4kvGCBKTtkoKAf47nY1qKQijoe",
  "key9": "3vVy8feTyELpY5anpVWmX1APoNvfh7VSbhBbCmmBxeK4v5i1BdSuneWxSkr8svxSycqD8bD6pRgMjGXQw38xzPgW",
  "key10": "3eLiKxNFPA7AYUZNJHMjU2fPKQCg6sEAgVBpFcBsAfcsg91q2WyexZxdvgRKGqLbv25gU2P4dqZKw8edJZEKxAh",
  "key11": "3JKDfMR2dd3aTDjeMWyuzLN6G74UdGLMTig1sxYveWBXeMVdE4Sn18HPhjNHb2Mza9cd8qARRFH4CfXmqvRWN2tr",
  "key12": "4hmtan5QUaadotFrBWnqskenHSNAzFmJJbqABaNXVEfZTrKTYuhqpzhxrERgH2GjFGv5XasJqwtvBjkUyEbTnnVn",
  "key13": "2d6mVHXvHvetAedzq6nZ8oNYmkapTPif37EDxPgqwBX65TFbf8gnccn1Bu2GtYJo8WH3bo5ZA32uSz8oYByUXZMg",
  "key14": "2KniKSJ87YdaEPurcnWUmkiqZDuz4dYQwmKwvKET3szixkJ92QUg3qVfoxjt1Q96n3AegVZR1XDNbP4Ghyt5mM8j",
  "key15": "44qPebCfYpBjEapXACucTt1bGy5NHdwaSXrqz1sPQ4eru3RVfYof4RppErTrhdNRJSPCdpYfMyDQ7qriQxiPe1Ct",
  "key16": "5fjkEQNANQAxAnASbRFBxW67RvpcYQ5YLGh7CTuVYtX9hKnVVT2xfWbqWnPrSeiAVDZVzGyQ2sgkHKYoPvv34Y75",
  "key17": "3vpS9K7UftFKXa6gqCrjEia1jhfZXKJNxtsKLaUzuhqTqZvjb8VrAQUbP2dHsKx2jpEgEgjbPp1sfPLaLJf1kXMW",
  "key18": "4RbLCHoxVWcJA8tgEZUNSfd6UJpKGZNo5Nh3uvpXpHEqDTkCYtjahV5xg3CVj8ucKSTnZcxcsxvz1zbnfkC25ybe",
  "key19": "358EqHgNrkYYsS6TKQRSkC84tMg3i8CzwAhagXTTeQmXewkgaq6izwao4JsMC3aDJAB7gpVYCqG9FkAv8zGTkkN9",
  "key20": "4Am9E8unZPyRBBFwb6kiLKbxpKRrDyukVPTv9bZB6nSgZcejQxC69YYLxNUZeN1MVWpVASVVRbCVzKfLLJfWDe3o",
  "key21": "5kSQ9KWYjy312ZdeFBvHtHL3NNk6wGuBrFuTAR5CX64nCETt3yccP5mb28mt2dBXnScneAeNswV1kPsvJmubiEkB",
  "key22": "6TL7HzGsPVANpGrJmS2EpFCfJu637q5NnLED1L9NiCkyon8gUDMPLEYkcnbzBg4CeVAtKAT5erAcc6yxCUZFZ7u",
  "key23": "3csExi2y4dYtAUCcDGa6AcVJxqQSyxpaSuQmfLMuBDFTF4BkWmTu9bFxD4boJERHzSV3GQBgai5UR18HVNSyyPu1",
  "key24": "386r1zaJZEow5jkSovLJ2kMybeyUs5fBHuVzBSgtiv5ZpkGCexEFyJggmduhB5Fr1j4TPA9cqFim9DuVaBCxgtFr",
  "key25": "4cATJJmWnH9mxpxpY89PUW9eRCDexn4EDdmgw2YeGLaDmr2SooaenrK8LAmeMLEXFBnkCXerhVTPk4bG2ZHTyqDk",
  "key26": "dKUczLiLmKf5KHJVsmxKtYaS9vHCBt8zEt7WmbADKxwRbcVfcd2ZEHFGThV12uFEpXEz7oYeNFnsjnEG5PKm8Dz",
  "key27": "4GGtTU1oEk7AnkciakHFyT35KyiZCUgEF4nfgjJK9J3wFCYnrEP9B7KCQdu5B4XS8uvJLPi1vN7vRphnWq92NYbG",
  "key28": "2fSn9k4Gf8PjyUBwhuY8Ra1Y7WAdutyWRbZqx1UvkA8EBA5SRwfNK8Rfdd24Un7stJw8EnGu2nyJ2ceDBE2qKvvf",
  "key29": "s2MYDXdVqRn4DgwFs9VHm4y34qKmfdHA7AQRSa9sSHt6F7R3etMucjxiQb69f8trpg5FVYZa8o8GqTH2v2SzbFR",
  "key30": "3Vog6nsacrHfiaRCap4rCUeFFzwRB7e7q5YnMP2SWrpSbaKJCDNfMjfzoUmaCYfzgqbcNANf6cFEbnx7Lg7wqVRW",
  "key31": "5KSFgEhnGvFH5ypjZFgWKUoBTAzGKR4wy58XZoTYE65depBQkAj2mA74iFZuz3XtuPQVLHZuyoiGXRhjufPwMYrC"
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
