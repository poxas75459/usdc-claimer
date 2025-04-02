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
    "2pbQrockWS9wfHCvmymRwQovGM7JvzcCPGZeytbKRtHZ9bASGEocqCWnCo4mRrUfKMEwRhqBabvMW5XRhRq5nJCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iKtcjrNCAUmNhVyiLcdjWBgRtbL79kk4yiSoDpKX9CTaUR7KoorJEcAS3fcTbATA1HX9ivaampdFBxPWxwqtnFw",
  "key1": "4DWsgXrdDJoFMmgEk2WMaSCzZvizZvQVHatwpxr1Shs4pQMECZce5tpG6gTQwuGZPXcWahaJRxbKKAMESv6nhqeC",
  "key2": "4V5bg8TAts96BXrF7hzJaPhyvxV6kxewmmFFaZ1rHebUaUePLoz9t3gTELQV5f1qogndsCciDd9NCsRWfJgEbmeN",
  "key3": "uXsxpFxRNos3Xvf35NHYMAgxYwx8mHxEJG58y1TuDnhX6XUxqQBAy9GzjDHGtUzMkUxaF2dHHdEfQDC6hRNEccT",
  "key4": "5EW2XQbiTg4H4QdkYdiBh2Wk5XYp2yb7MjNH2L1pLAxD3r4LhAPepHtVKKznC7EdynNjfVskuAXEHHFbNaVC7pfu",
  "key5": "5SkxTSD9yCYCeQJXTe3bwYdJ4J6NHnZDw7Rn6ckb25smjVfwecvci5U5zjjiSnhf9fkBt4r8DXa6qjcVL2nLoEoP",
  "key6": "BzwCLsosBF5DScMGbpuB82xVnqWX9oG4rCnHHVQLgmHS7YCrwqYU2xcGA5vH3Kg8BZDru1gciUrKNZ8QRMvmi9d",
  "key7": "PSKT9ArLt5WExy8A9drzB922BMjggeMys4boBENdFzmXGR156NWm1uvDT7kS9f6Xg4gvTGHHMt6WXTBGDVaHHbe",
  "key8": "3beXm3cAeu2XDYtxjc7pUF4XUrxY24xXtiBzAv68eSNDixSKwDe2giDauxNWuCUYQumRYMiL5HJYLT1KEmxZQMed",
  "key9": "4r4sDnhdAEMwBoDewpGhSwE4LFZD9wrvZ3LUegG6VtRFFXtp8p4khFk5iwg9ntKpVpxFPxXkL6S542YBpQ6Vu34C",
  "key10": "3z72un5GTAxMQb97VM5YKj2iXsinhYEv3gNq58xUN27z9wPCnH8mHiid6gxuvSRPwpxCukk1LTzKodYrT22ZyuYv",
  "key11": "dFxjnDchAkH5DmNNE8gqKHMpSuT3pzHr6Ns19HR4LAkC7gR9sAZ6KyisqzTv4iLfLKpvJpjpqft6Tn365Ryvn9d",
  "key12": "jMrwh48H1WEfTgkyd9ZpzbVz463yWm8uPLra28nkB61ghmyvVbV5FJkG5tbqxmK7TAGJeBehmLntgxG8Y1vZVit",
  "key13": "5EeAjWGZJXDXyyiWUbRQHCztVLpHXs8sMqQ354zQPkjjrQymxe8Q2Eg7S11qfXD8RXuL1ba69tQSxXTCtyfUax4",
  "key14": "2TXa8W1xVUrjx6yrgKpgs9XXeqYsF1Sawpig4JcxgMbsrFTJox9mn3BDPeVv8MByd3WKQcB7WDTUm4iff3kyyioZ",
  "key15": "5hnxuBW9Lc151BnaBcioztqVjyCCVFGQzHaMpxfqyceDjtmPuc1yNn9KECzGFU7ybDdTAAFKMgf24igTdr8bbBr",
  "key16": "2ZEvMTUuJbbzg6ttGpa9C1Uc7RR7guraiD2MXF2qHzu7Tx3NodXnYp5HR4zQGnvzG9JvH2sEeackFP8jxjfTPJct",
  "key17": "4ANeA7T8xkzdoYsNQZrtrcpaK8144KdER9dWtnb6KmD2rtpqXUTNPZZXcp6mRjuSYEtrXGbv9ZvSARgzf8c7CVNM",
  "key18": "4UfHjhqC3ZaEN7YsjriTJ8uk62LKL2YHEqaoVK1FCnjn2ZaMzKZcipXUxME6WPwDMxiwXCB6m2xB6ohcPMzAygAP",
  "key19": "4c9EjTkQpn9jjsGnguYUW72qBk36HTerRhmbRP9zvjVQN6PFk2KMSENGo6qNWpcAq5HyMjDFDR7Tx6XGCUNx6d3V",
  "key20": "2tCoT2taeZXSeQgEUbpBErPUqSmVu9yhReprQbeX26CqtJZJA77oBWBAQdACLqwNPAjnz7baJsj2RLAeyQ4cPH9j",
  "key21": "2K7AK9JCxpiC5xEAH24P8RKZjTdRv5pgeW2PYK2AqaGUUv1PmtvXWtAvME4VLc3X4QoHpCiZ6UcNEi31pYtESzew",
  "key22": "28n41qDtKNnVMCb2M5R6TzGzh1bhnZ9dsCgsqT9CdH3e4CrFXGuRPd6Pggx1wogGT92ZLNT9JWrPckksq2LKft6h",
  "key23": "4s2VUPM2nJCDutphUf23tm3eTK19ZBHgkgQoWvUCjR7yWgGFcpFXndMEPfnkRNy6EYbrb96NwrvLZek2ZV3oaWYo",
  "key24": "wwpmdG16aSmmZ3KqxN9cKrkz7uGqwUfWwX37p6w6Kpf53aKTpnBvjHCbztLHrz8DVWoBfNiXXBKbA5Qtpzizm44",
  "key25": "uYf7dVcTn3hdhjfyHEtau2FJ8RvW5zYsQemGH5ryPDdYucU5Gxo5gdpYKFiPSErMHz4efsRAxZPEqMDLFxGeBKd",
  "key26": "2jn1UYEqizZnjgYrwd2T2oNNx2UopF8f4chKmx3KE3gzN7G1fDYqJJsA3j1Uip1fLbkBrou4vtLvgFWi22Aa2Qms",
  "key27": "2PseWAiSvUxqMuW3FuweqeY2Fgw4Dc5c1KpJDqrutxtDFZMkey8ciM3onADoWMLpN1cFaDM3ZeQHLz99AuTxsFgy"
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
