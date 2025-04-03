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
    "4HT3C9HPHcW79EeqimWXGc2TR3KGav3qCRQNePYgcF6N5MNZzdbe6aDAdd5GwkPMaJHX6BC2Citaas7mKc6s298B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pUTmd7KQUKAbt2vobM4aUXZ7KtK5KivgdqHfaLWkkNu61aD2SSD1yiozPhs2wHt6RXb36yMiGFPQorAiU4pPY3D",
  "key1": "2NEtpqvrn5vJ2inusUacRPq12oBQyMqkGcXQsYNeNBype6c8Uab96YQEagvLnzMNX2JP7TRZhCi5LWHJog6MvbpH",
  "key2": "3YFHJYmMaddiSbvU6mcAkbpazCwdRkZKLW419KsfwFrjieG6SyHcUZxehZHhkdQQ1JQ5VwF4YsAnAj4GeWgkfo3d",
  "key3": "47QWF6x3pew8M6AtxiWwREMaH4vAiB2oS6yVQ6H9jmRAYmDRAaMAxnbFJwTrSa9qTCVQesreUxZN2Gp6jcnGczos",
  "key4": "4YJVmPyXW4LeFxTxmNV84Rar4Uzo2QJd9u8jPAhKvZ78kCG6JujAaDoewzER2TGBjF78eTB4d4GaMRQeNFEMCbXN",
  "key5": "4Skk3Sc7fk8uvGc694t1oTUuxniirumxNUYT5Nd88P3Er1FWVFZvvAB4Z88NQtBYnsamUPeRevaGQrjBGr6P7R56",
  "key6": "4TpQnfedfm8NHb4ZkhMgiuoqpocr6KHcVhvUPdEPFhgSHUkoiZahyV5NG9hGym3ydWyMWeTaWPE1v6qCyLkBwKrv",
  "key7": "3z7EonLPoAjZ35cW34upJ5qotCN16v6VMzh9CMf1g97Mb6Uc7Xw5ssz5jRBDUFHngiUyqNFEVzqjxj95Q87JSAFA",
  "key8": "4hXxDEPkZZw2ZfKYvPzLq3VZxDesU7zRKSoVmazTd4sWmhGoLy4nJiXVwvsfpRrCXaAz3acVuULbqErqXDRQHwRK",
  "key9": "LNieJyE5xb3qoK4BcNTHwSAKUp9mncFKTy9Br4JTpE6iwZdumA5EXz5sVi7Rjjmcj3ggzdYf8skkPGch2vSJqLQ",
  "key10": "hzqiG18TQEeTM7i6dFdUESewN7ufDwqTBVUNnL7NjviJ3Fjn7gebH1EuzFqecagDqmTVFSsb83p4jd1h4Xc4tNY",
  "key11": "66NR9ppA26YstfqV5EppbSNqKpW4dANkLriQHJvhH4dJm3a6YcyASd5JeHNzLiBmjmCfLYZ68tC6aJBvGEeg8LdA",
  "key12": "2MzjMVsmg1x2pVqSjG4WjdvvscyxNDaWWWFMRchc5UUawTMFWpckRXeCG9xxRbWhKBYT9z1eU44VZY5M6L2Tg1e2",
  "key13": "2FnYh2JgEuQSDaXzVVuWdXmTWtNA4C2oKvnnPwtNmScKjA8RziuQg9RQx7CQk9Mw9ZYUAf59F3qUWbijc6oo83H4",
  "key14": "g3bfY62B5f7QdoQbAFABQXqwDLBWSE7i4b9yDjAo9N7XL7K6LBT7ZnLQG49bk51BrvEea6NfwsmFWkFjiG5hAS2",
  "key15": "5zG4gAKz4hbjuj2beh51Pg1sbj9L46p8rPsg3TQpptQ8eTVn9dK7JDniMZtRC1H3uqDEktAtG6kfybYGGHuShgyX",
  "key16": "GM5dGULvQKPxRQLDLXMT4HpeRY2NDU7TuyEM8DqUoDi6MHpehHf8hKT2TWodhFRSTfA4eoRbsCDKV18iLqiZyp2",
  "key17": "4DEj6yXijF53B1ctHdNkLgDScLmH1oUfhRN4a9wznmhWQPg2x7or4mCX6zwDuwTCwKPguirxhuKHpDyGiz75vNKn",
  "key18": "3BXsKUWen23iEYqLNNoXHGgoYWjpj2WwmE8uZvGsJRfPTusMTwzTnEQ6gUXhdYWPJVQyu9paQBcbuUj4hYTXorEm",
  "key19": "3V4HGDCnj26pkqb8B4kmGo3kiGdFgV7W3Qa7Gd87fXARCmyjzGdxw3pvkbHouKGsnfu9GMeAi6BssM6Z5qSdYvVP",
  "key20": "2EasiSJEv3a9ZyNdr6pgJY5X393E5zeqY3YXmwh7K5xWEU8kS2FVPjWEerSxCY6z4YrwpY8m9hi2TXT6TLbqMknV",
  "key21": "62miFS6q9bPCkr5nVK2V5diBtVqZ2p5WJJwDE2kCSGH9uDEp2gMhJkLqm6KsrYfDqzRZHnUwMhgEZQdk7VSeZhMK",
  "key22": "2QGvA5xrtaEyDydvzyYq94CjSgeP7YGzKA4CTBwNoYkhLAFLv2QaiHDixQxEEnb8UrBEc8KPT52gtuN9BoewAXHh",
  "key23": "26nkFktgpMroh1b4xB6UiwMzZDAGsUnGh3bcL5fCwqrTawWCLpaSP7BAuhxLGFvv3FsWYP1sxrKGcY8jF4QnmFJe",
  "key24": "29pkzH1cjyFB2wTbDuGSB47qyeEwnYAbbu9pwPjwyjzhLWMF3PtSafQajjkdRWtJYBZMjt2s75VNen33B3uHeGhk",
  "key25": "5zsXurKNyHEQT14hj4QRaLLa5Hs3d52x2Tc3bWLRa11QzcPV4o66MSxEAGGztbHYVYsPPTap9m3dvxpguBnTZ1BN",
  "key26": "5UB5v2SGEHWh2cF5UpE5Q169YrgT9o1no95r3amCvAeEos3LnZp8XZRjqX5ZhEkYqgZpYnHwTKMYGGzQuXXESFY7",
  "key27": "4bCXoS2nj7qACNkmtAmgYvNBsJCQLdMAruKbfMKLD891SJP6sGrS78tVLuJfB3gjssnaKYdWtzHSRUVa8WBEN2Ye",
  "key28": "4rZSiJhLbbD3NRgowgTgGVfA5P6ZDRw7mdLcLpAdz8nHAyfuBXQbaYA3YAygfdpFHKgDi2AmvUVGc7KW8FtR9XUf",
  "key29": "3mK1w2Cpp8WauJHZm8hdDWZkNbuusQWPLq8yMdWNpdXdHygUX6sPkV3wfhUhdfihh5orMfbHKP6a1SjyGKi4Wmug",
  "key30": "4q3ig2BP1eGkm3MnD3A49RxWPUnvgb5GQJzkCFp6Z29y2jLUoJhT68aWbby19yChShXFipjV2vU45qy4zwYnDuVu",
  "key31": "54hW3TkfMDuGzeskP8sf6HKjdGb28hbKigrYbtFjj6ZS153LLujheR6iKbbTBpuBVojCwX4v3UWg4Tc1RieYE9KM",
  "key32": "3BuUzi9PDrCKoqon1iDPTNBPq15hcCBq6xgkKDebsyd3B3ysfL38Cn2o1Nyqxvi2WqcsDG6Ket6Ufabvegjd3n7q",
  "key33": "4CxzPh4dZBAYH2PYZiNYYqwGCphpzVXc4XQtCZstpshKSLJhKts6MmpKHEU44fECCRansymS1PeUqzqcyZgLxy2R",
  "key34": "7YGp71SQZbmzEJPFuQ92ec7FaknpUTELQAELDfwPTu8Lqe2J4eZu2ZgK9nH5G1GN2Yi1AS9KuCEiAZPBM9Z6MHW",
  "key35": "29FM7x6pECEVaQyUQBmLkcjpUbBF2D3G4bNudp6J2Ti2b7Z38PuXTHEevp3TVZxTJ4YDp67Dmf3aaSmkwJSqubnd",
  "key36": "344Q97x3yn5egbNHhNCuZgdDcoiePnoUyP8RaQQMDsWpJ4daKQMEuFQRD9qDdz72zd2ToddDGzjMMmnbZmgEL5cd",
  "key37": "wyFR1brziF73KMdyLJFpotiUS9dTH5FMQyizqqzrnEuDMjM55c7DoZpixBfvKinK7ETymnYQy3gdBWdw44Bukfi"
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
