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
    "27hmLfP9HNpEN57dFCsLGuaM8QCYoQkXWLnPAuH2yPs8iurRj5rh3pnA81b9Wv2KZSVKzBcqoowxkzVvE8KiAVEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24bSs7b1NazBbnW91dXTsQ2uHjgQtE2mpP6Vou4gUnP9DhMJrvKEzvUpGrLd5N5U78TrJouUu38qBV4f81Xuraju",
  "key1": "4WLowx5SkvREEoQt5EVT67oFonFZhB5WTXRENMq3jgoJRcbscXPJf7goKjpSeMbb1E3nfQBH2DYW8semkwyimpMd",
  "key2": "3UcSMzy9keLi6nJdW2ZnrmVB1z9KH6rptDbwiu5vfJ6ohbVRzADVPCySKsaN39eMwH9MJBqhKBmBf4GY2G71XCB3",
  "key3": "3NUfAgJTctC4p7b2zkv3gcgdGV64WpudoQxkmSG1q9eKzPzm48maVthiTgRKLsBmZEWnEmoRD7M3J9ErB51y2WkD",
  "key4": "3dz49sbRLmRw61fGXi9oY4esGHYAbKhCimSKrnPyxmED8FKX9hf9ijrwpUbG7df8ge2SnTf7tiyZAj2MEQ3mFaRK",
  "key5": "5f1PEQjt9Sb3WfVKUh21m2u2HWN7kvucDJvw9WWZdnw5HZKzb6Y9T3CrjoxBNw4YT7wrWMo7nM96iYeA35yWwNy",
  "key6": "hGU3ULax4tpFezaFbFuv3opjHtPLQJHcsDpNahqAqLNhw94WxhDGr7oAp7hLHnU53FxtFhBsXsbJpoe8xt5AELV",
  "key7": "4KincJnisweyWugCokw3KASBQhKb7NKXmAD4AYprW9QTGW59MyQoNvQj1R6AKWV6u9uBKQXjG1wjPEoPiHyNZiJT",
  "key8": "5d5sjq1nNzFZQJdEf6txKz2DUNdosXvrEnS23y3x17e7MmrvcG6VwDMDxV5xBsxURtWabTUHYtmzj2s7Pn64gBXr",
  "key9": "2doxbihmyWzyhyMs5BQSFbLn81TzJe5hN2rUgqfdgL7LDNVbXWzXdGUoFZddypanVpktYaTD5JX3yJXiT1uzwd5C",
  "key10": "2TtnQaUpuuCidkyf1oeJriYmdNqFYyeb4yJT91k8gL6Eoz81k5TuF26yKAjRXa8Ts5PP2eXHbkmfvsn9FKKHzfJT",
  "key11": "34WcSgeeK2f9oUGHc5pGmczcZNEnKr8qV3b9MumiuhtPSXzBvEF1rz7XjZJQ6rwDAcuFjEd8LLuAt13DYz6weR3h",
  "key12": "439cmwty7pgkQ5ELdo1cEjF2Jt7jNBvbi6CuxcJfgw9XH6anC29TMy3XHXBW2ZtCeJU6u4FmZ5Q8wLE2srwz6q8C",
  "key13": "4s9hdgDG4NcN1c9wBJo4Cwy9a5eZD2vjfgD3L2n7XkakYXuCmpgJrvAvo3m1qf128QpvQXemFMyvs6bhkYh4CXNc",
  "key14": "4z3skcYdLeMQjSXRPL9edEZQCJeHP9uvER8tCQs4JXCT6YUQ12mj86i9cFG42QL67xSipcRcT4PSdKepxn6zGf7p",
  "key15": "3eF9Eqv3ai97hfm6dAxEWviDAMQ6KtaoHMXGr5ZWQaSJt2XqkJRfWgXPkjQC3i6T8a4uqCxdp8eeV39WPXgnwvMU",
  "key16": "zxZ4kWpBkR8fUv5i6kMWHAhAUyaW3jbbG5SoHehziXwVK38rAgo5VDfAdPyiwxSSKHiC5trFKUDPfWA2g3oY9FD",
  "key17": "5VDMnZ3pLQgfdsCGWY3zn3hVFJM4i5iy9rPxZNrhBUos5WJEYh8eQKoUCQRGYZG7oPvVddDXoMoj8QKTGpqUtKQJ",
  "key18": "3EsNn5kdN4wXT3tAU6E4rgHm8PnAzAY4ZqmuepkHVEG2BhwDTpi8swDJtNAsJh46dVcR7gwqJtpdviDzrNqiqutu",
  "key19": "vtkT6tw37Rb5E771788jbxtkD9EHExbBDwxbdVCAhyDptJJcUbx1Rp2MqH6XzA6XWpAzLLKPT9gnrB8yhHk37a6",
  "key20": "iXUYe9xd3sdfbirgAY9UtibBMFSqAVguyRMreJeoqsvea8PCT8KJZYVRTj9nUUtMBEcVwgAvv3JvHSrSTCPo37P",
  "key21": "39gJGqPU9NgsyvzHEs7CVumEhtB7TAuuAxiqLm4Q7pQGdiijGxHTej61teB5wV7xDLPRA34e3cBQozD2KKHrcvho",
  "key22": "35DJjVGw3AiMLMSto8hPzU2Qvb7gtHC2UtQNATttxBY9ukaNtiRbXvNA9LoA1Hw6kce1xG8UHsrxPXqxS6wp82NJ",
  "key23": "3SfHjzcaBJvYNvdDmTnfwBurjrGwVyN7mwBrSYyzCHxdvggVeyq2rgafiNQuxAPvvgJn4GJASzr6UZEh86qzxv3s",
  "key24": "2tXZ93BSP52oypp3V3CYkQ3XJhMDQNfttfjBqazejwBTVGwihYgCQUs1JhGxcKA24JqqPqbaDyejLrayvaHnQ1oK",
  "key25": "3M8Bf4wyzxckvwCkeMLnwi4s8Wse7VUqWBNNN5QiQWPSyRQrdir6ZtCmJ8aLK1KHx8rMqMyhFUcNZGw5PdvVDqmP",
  "key26": "2Yc6C9sg6EApRHwSXWhZBw8aFQnck1QJGs28RGe1ykCmELfce5HTVpPRLr4yRySGtaVz6WZiPEn5eTmihFwLegBW",
  "key27": "4GG8bLoUoX42EHBtYKpXRyfGRGnKagvsGC96tTftmqK9HzwFRF1xPoq21Jw1EBEvKFTZHXgiHT3u6XkghJw52xAF",
  "key28": "5aPzgPUTFEHf7cqXEwrdwbg54JA2Paemu23NfbewmDMBVkicmFWr8XUcuWTCUB3j96VggkzCki97c2R87AHVSkd8",
  "key29": "4eUqrzR32MmHbQoybHjp8RmRh3H4h38tVAm9nBJAYZQqbsXATqQjbHqkTLpzjcLzWsAhk5DwnoNn2MJhR6yZTgqT",
  "key30": "a1VS2sBXDvdYyZQrW8ocx1dcWk2K7Dx3HHtY4R5uYEop9Bs7EqL1qHsKJ8ckTZtwF9wxvqefdDee9YzLpbDiT4T",
  "key31": "HvUuqvuzHaH8PWDVwC4G15toTmakyfYEyWc8f6vHPPcZ8ktwAVrvRfWQjgsYozXhUkwEPi7Xqz75HexYZLQNRx8",
  "key32": "4JWxpQEWvXPDnjBDYTsXJDgtNWaEhojAVbV2fDxLFumZe9D9sNFWKuBQzejRsds9PqLNdhGyqtyZT365DcWGcdf5",
  "key33": "5uU6PXpUiK7Rpyt1FCs3J12xVXUUhv2eomtspodMavYNtdHCVLKmi9N36Am1Ea41QzZk3PYv3uUzUuqkWEZYCuPE",
  "key34": "27iryhqAs9DGpKXoRk2eXqiGzN9EFuC8d5jRd2GVXAUfMbykh2YdsM77dAM5n6tGUaS4b9mozJWyYK5JiuQSnAPv",
  "key35": "2jTNTmVgiXRfrDXyZ9ebfUQDNsahFnLvJmf1ppdjxknKgVw4TDUzQ28sogj8aDgRvK9ndVojSUMKAFmci9pGhAab",
  "key36": "4h8WuQR9bLkKBWUCtatgPePjE5WnuJGJhTh7z71vj4bR1p2aBKaWY6f1EBdiGHG5BPpKtmAu1Ux5bWhZ5yqa8P12",
  "key37": "2cZv99GMjMyaNkEhUyJJPNc8VDUFFbab7Tuzg2kLjcuofLkDqhi2YEbCWMEXW6YFdztRvCBqxxjwrG65EhZuvmdA",
  "key38": "3kYPih9Jz5yaHgPeGot7jJnNCgtp5rXrp3jk2tm6NE2pHN44yi6uXXhQTHDTSHPzA1Wv2gGPZVk3mnmqUPSceLCU",
  "key39": "4q7PULpJKaxrBi7XW3tJUbuBuXxQosfdH2ebsUykBXtYK4v9ycoCCKgs5wG4bC2JykSQpz7PJqe6Kp8wV9fLcWVj",
  "key40": "2kCgMjtiuP72cLHzAdxQ7AiEdMFe5ftniU8wpxm2RB1yqWWWsDUEghcqjZeiB8Etuj9GDEZXY9w19gbX9Z2sthdr"
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
