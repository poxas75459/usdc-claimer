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
    "3WGj4GEYUjTzsNpnQykiL5j166HQ4SBgVkGtPBQxAuwZkL7Z8jJwrsrHEVNdjeHgTRcX48HYvnc7upDwbNDDBoEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B7wzPDZDB3VYAXqmBvuoKKMCqGJpQUctHqYL8fBTTv3KUwAx83aMG1S4oH56j6eDjWU7brWqM1PG4TkbyzjoCjF",
  "key1": "3xNUY4mwybmandgZfV4oHBgwBTWveCwKJDFgRZrhKq1EQEytRqJaqtNbCXPt8XfF4aTxsbnmCDBtxA9JE2EK2byL",
  "key2": "EFcNcygH3xpvGAwzx1jnSw2HzNj9Paw9XYoXZqPhSG1iq1ZfFPaaNC48DQLcqGALaLUS5FASh5rPHDoZufwFzC5",
  "key3": "3aDUBtxiMMYWR9h2vGTveXP5YDeKQyJAQW23UQ1quNjK5fHhBrHghyd6mJ6SwwLDx5GRsgXMF7oBL1z7doBpgtpt",
  "key4": "3sBvsmhCB9PUrnzq75P584qHm5EgWo565XBfqZCkgbRAh9nZQwQAQfjMoouvhz1bNSZJUrmVsGCoz6C9KTCGW8Vq",
  "key5": "3mefeEWDnmsSfApAbLQUWLYZfRdk1MZ4PqXgvZuJYSgqZVgAvc1jDbwAKUFqvrGSc9RvxtKN473REFTtjDk9acsN",
  "key6": "5zqUtHffh5PahWgXoWTgqCYURoHFSHwwJde9NsAUhNgQWnV4t24qxrJTRf4jgyVfxLBaQLd3rD2BPShCG132rSHV",
  "key7": "dmFw8ZXfNb5g7ipbLYim6wPuhbipu2P41Y3eavxLYxzwngvpQ3jyRnHoWCku1h4n25v4pU57Jzj715rHfixK11T",
  "key8": "3L7fY99rUHrhMWu7RpvXhxBRzH4AxjReyH2FZfXBRBhxBQTKf1h9wQivFotxgNBW3RFeyji8PeQhka9FpcBgqR6H",
  "key9": "3jbGdoGDjGgYTDSrjjh5Gm9Y2ctuYHUnF2s8d2ttR7uWnWYZSmJB3j5fHk9wGdYDZgSDEP8RXK151ks75jEE9zc3",
  "key10": "5r7f3EuYUNdAHrzoiyncbQZ9nHMMAeqJ8RJSw9Ztr3TQCd19wi8qZSrQ1pNvoCZuZxb9iUN9AfmRKkpeN2bYE2wn",
  "key11": "2vfX7yWQfk1xinF35esTYXS45yext5zSHacovrGA9RbpjmopXw4Kzne8RtyDfjitQVVxASxf3yFUPBLh2Zj4DWwQ",
  "key12": "2VcqjoD5PaTrxHpAWyFSmGwKRbc2fjUzRaYNnC2iLthJphpXs7ZcxbjajPeywHdzjexN7tM1TYvfZoBqvCLQtHmo",
  "key13": "XxHGgbk1rWqSHTooTC4tpVXFZLrbmkkrDiYqMk41cLDHVtHsSqwNuVqbLNWD6pwPG9tHnQcUDHAqFHdTEk7ExvG",
  "key14": "59QohEHvYri723CMawNM1xBheGQVkwznCS83drgAskNzer3QfYZiHqtudXUUnvYdFob9PfmUfwX3dbPHhGEepzbv",
  "key15": "cMyScWpWUvzTbKEtRN44XhgzPphrvryKJioEmGgzPtgivchdDebLcPVik4L4oky6Edg9nZb3YQC62zLx9YTcZ7g",
  "key16": "MCAfEyokzBmxUMAy3CA4bUCVvzwUUMPTnoxkpcDvpSufxceLaFywE7ChnoSHk1rUwxa3ZcSJFKT5nzi3Co5wZHh",
  "key17": "4V7obRFzjHrmTCTZrsWbkSk5J3d1bYFjWyAhCEJDhCj65QKzEEnTAgWUY8faknVFntf1V2Vp3Psgo8ShPw2RZ7Kc",
  "key18": "3QsJdJAY28YebV38Bh9TPsaytNbn9GMRUrzpnajtfgzdPa6Xq2cvon45ku7G62Go1xnBUeqPx8GBBzqztMAqKJ25",
  "key19": "5kpFowa2tuZPF1TpdkCvFvToVvqfxPMvCBLKsjHMY59YFbSU7dbRZr2BiSYhhviJF4FX3C1M524Q23y84PiF4Sej",
  "key20": "4oYhrA4tCGk78L3YwtwLrswi2TVVKkNHpJCvwWsuvcvLud9YqEBQKKpyZ1j5AwUoRzUyPHQJUTjcsVehACasz4vk",
  "key21": "48fgB3cHDYaVsKUpctsh5MSQnu7gqLxGF6FSQ3LNVWBajgjVN5apZ5P9GDFgRHYUEfVqDa5zuPnch8rjvM6ytj2u",
  "key22": "34v3L7FcEqM3w9adJN6ztkpGdpxK5VMwD2gcSbr7qVc4FKZQdVZjiDMTPBKtnQMuPPKwFz3j1nyrtptzy7D7Ab4h",
  "key23": "5pFBfdd5nDcDUc7koH5nk7BSwfeUakSoTRKmas1fEB1ZL6Zsp8mY7tmn6WcJ9Dzj4zQeTwK9vg3rJvzsVu2xtHSB",
  "key24": "32yztBoqnRrb158mqA8bAhV5XNAxTwkkoQ812kZJqyteSAyFBorGknSPG7ESCYrxgTZPfepUxVpg6QqWVsuMwyTY",
  "key25": "QLngu6CFTQ9PSkeVQjxp7VbWoJ9iWLRcSne1gKhC3n1kfwo74jJzh5FBN1DsRCt84GZHnwM8FMmX5hjDC1KwDkp",
  "key26": "4X6rEn9Q1HJWZoVdzoGMPmBiFgAG38WdFMqviMF8duQdeGAdR8ENfH4NBHnU3Q3vyw68R3CnLmJuWiJ3USJFFMNi",
  "key27": "5yphmpo979Cv5ENuEmv2Y472pnpjkZuFAgixjYchDhkKCNzFPkiUTDDRADD4L76QYthV9Q8D86ybpB6Zi58aoELh",
  "key28": "47576s7nJBtnP4Y2c1WbkV9SHP5QBojnWoq8h2eWQ9eUDWgsJ5yqwyDG9qE1onaq7wU2ynXe3KQs8ZFzPNVwHYBt",
  "key29": "5DC5ePx9tXsThgJw6UHjvAmwnZcpw7LF2KwgUp7EUSUes5hJX5zhAoKYSjjD76UgYstUT3s1QBcCFQtMPq7Xm381",
  "key30": "2pXxz8G42ENVyixHbHRv57Ssduc3b2ayzt3D4Km1J4quKqS9DNMn8i2gzDF25c4dH7wGpDr4L67VTNC1ZLJMptuA",
  "key31": "5QFZFGB1nPsiPsEy513cGYd2E3yuUeTaRWZiiTjHUB4yyD7Wm2Q8WCHe1tDjer11Et298Z1PRTwtFsWVpHgQgCfS",
  "key32": "LJW4ZKsGZg3YgcvYKaRNLCVRZB3TGzocRuFZGrvBkDt2KVqeNqxZb4tqsNFrawqtn2PWTXgFYfHKHWt5Zki9hCC"
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
