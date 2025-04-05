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
    "3Fb2FPjwP4EhAX4xkCXRhgEwHaC7oNv72jSxKKtHQ2FFQJpNuUtEvvvrYFFT4RSubYLhdABVARPaqpcbprd9YUZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qA1WmarA5ZX7NK9a4vNRnhEeyq4imepGrRxyyDhAuHgrzpPfTgRZBvawQbx3MuqMb3eBk8Wb5sCkTEmwAGmSFV9",
  "key1": "VCCZTEq9FvW1GkpTmJcF84z6wjHDsRGC5rEwRLjyFQrpNRJqte144mMdGSa6nzmVcwvvkvem4PWGYnFyAbFUHon",
  "key2": "3irbuCXDnHSjRo6obtE4r1QvzccnsZwjxgcijhS2zHj3psiK3NfhwYnf3CWQzNZLT7nF3UsStP6KU8BwTMWVdMJC",
  "key3": "KndU2a3smD93yNDThG6L5Z7Nk8X3LwDEN6ApVfV9c5H6nWZthfrhPVDGAd3m2teR3fxQQvJB6ej2nbP51293FpK",
  "key4": "3iKgQMz5PYn1ge8qJBfb4wPDpK2ME6bALB9yktX1ydgdHoV4fJkicMozRWNb55GdLmHuStfA7CENTcK9gik8JzvB",
  "key5": "3VbqUeGK88F78BKtXDvLNdUrGSjyCP49cSRXSFrpJsJxYeviZZTsiTenP7FHNypCDGBq5Tnf2pzsyzv8u7fHvM4E",
  "key6": "oWDStcYKdC3mioYQ1qPg2krTGSL5HsrHQkW2vmZmTRsqvojxg1bWiEGX9ch87ZhwvvqGSAoPoC3z9Jx1x3oDzTQ",
  "key7": "31MsHeT1cCC2v32wrJ2CvNW3NFRWcAhBkKV3bjczk94ZbSwEmESBHkVwL6D5w61iPvtPfD9JyAGFAh5e7i3fPmsQ",
  "key8": "66ZtJNQpw6gDQUbgne2eZhX92BocNy9SiERMAL7V5RCdsg4Rs4vPKARzQbaUJfiYjnfSd2jAF3MdT6sYtzkawQea",
  "key9": "4UKNK4i7J548vhKbp5HTY7pX7qGXZmeEvs19mDpJxUnNQ1xXopYZZdzrQyLze5qWAZUkUCHcYYHSpBSXXAfY5SWL",
  "key10": "5NVNuf9qgrGrBA4RWMjHZqb1UdPaxQJHAGYGjV1Wq6UAq6i82ciAo1mmT5LYezLYQShcjrvyndj1CYaMa19bmThn",
  "key11": "2Gzfo9w3aj1ZzYS8LXjedHjoJj8g5UCWHNUvQ41TYgovqGtVajnEk6Daw142kzN2RSh4FdRPm5QKceMS88Uof21R",
  "key12": "3RgpBBbfDAVj5rMKGoSeAEGkKQ4Yu9kzvzWqFeBpfFUSHi6GJkZgk4bwjfPzRVWnLBpv5uBip9VMYEHbo3VeAd54",
  "key13": "56q8qkhXXJHaYVVVtFBFqZUDu3f6mocxEAa4A175akNVcBTssWq6EMZoXCRxEWYpjbCZibH6Zas9ELcTwjoWpchV",
  "key14": "5XyoQXBp69yBMrtLuxRQK5Ap8RLiVf61kxTYSAWidR5rAwk3N4ai4V48aLP8mSTgb9x9bRyVGBsNXX9g6n4xV3C4",
  "key15": "ojvzfbw127Sc697GMqWiko5ibuASKU4gcgpxMYFMbwdcJTj9qnLtirYqXWCSW5gK84W2Ec4PBzMb24CykR49fHo",
  "key16": "2zfSmduTsv61pEVLCZeRdHVn4RccJTJLgTws4kAseCuw5UG9FatD3FFjznC3ubk3hUCUtAscyhi5iuYJJPExW9WF",
  "key17": "2zmjFBCVGa7EusA6hjMXQFx5gFwkMKyh1JqmWQBXAXJ1h9cCVVMK1sFNxGn8XkhXEJv5oKzKA87SsVVeUmFEDN2V",
  "key18": "3p7QE16vW7PgsEPKyBfBvZWzrgRrSX6YmpU7GRD3pW4aUS6XeUacVyFN6hUKZtQGgcxKfAi3tBNF9x8DAzTx5vuA",
  "key19": "577B3TqEEpkR2Ubq9GnrY6E6C1ZFsdwHXFCQUZNPoBP8swTvvQWFhjmo7ogv34zaYdgJQFAZLxHb8x3vhHXnyakT",
  "key20": "VMNtyGPXP5uGohqYKWfeTdGsPeHFhtwMfrLrhHqiRznMUNJLe8NZA13ex4SsvG4jus5dBxAH98shX7ZkV7imigH",
  "key21": "4qaC8Zk8Vux5oaFJ2zbm3XXtxmkSApZD7MKLCWsaaajgurBP8TaKjLhh3qi2qTenfwzZ2j8Dn3Ti1ZsbsQ2Leb9r",
  "key22": "63CbztQKitsMrN2twKgjtzPxhiBi2K9nb17fA8vtdaMxcDaZwjhKbgnDgwYDpmmMNbrWpSh4Tc94NxoKadGJAVF6",
  "key23": "3gHfjpqfaRXk3dFFzMX3tuRpEhcPxNTDxkW3zu3XgTg7JvBV8DP8Fv8EyFsCV9M8YxDLoyuZi27GJzLc6BTHNooq",
  "key24": "4ijYkJxCkwkvaDoWpa8CBnhrKZubT8Qdmp39MPSn1uaYJMUQhTUdiMoBUAoTDAVgK2Tb1wDcHYPW9i9gGip9T4nN",
  "key25": "2yGfj5htBVtQxnyHKUCFZugU52VzjjndMH9g2DeXtCE17vAFKq8NBi5LCQgYi82MEBB8FXYtP3dFC6QCrfxJrAoR",
  "key26": "rGbiGdgRK9iNxyVRtPo25sBQHShupjkeFdPYfmGVUz5jMMcVtbMQuAgJxp2nA86gYRoANu8BrWZccPRchbHxUQp",
  "key27": "TX1CUWppzrgwnhwnrD8vfp7aHubAN3sHYFpiuA8y6JTMsvUtK5Eeofdiyv62XGXp2roaF36faJHcqWPgTiCgUsR",
  "key28": "423j9GKYhPx7fNk7QPMNyj79nnecg13QcKKMMLyrSPQvJkkTFtaCjB9oThMqqhjCcZUM61WkwLoXdDvbW3LWS698",
  "key29": "4iDj5KnKfjyrL98RvqJTwdxSE7wrXxYSg2pLLjH5TKjMGB3MnpQ4X7FQmGs1me5biqMQFXERwr6DAV3aU6kPvL2Q",
  "key30": "5xwH93YKHa7TYDzLioqRnqVuuL7ngpvsuTXc56SAUC3aAsPpdJiuE3UCuQNZx8jvhe8mdk2bHSLbD7hwtRHDevm4",
  "key31": "3paJD3XbRzJAghxb6rrHRyJHdriGrxnux4wYo6kpFSNFy7FXp7dw3b6Gqb8h4Rk1EsZAHaTDjMg5Ta6hS1g9urqN",
  "key32": "3uUMnYMEdAAo5kgUCDVVTRAC3Ds8VeWfWHe8J316Dvi72Ueu1r3siWLPsnsxjNFWRRQCfaBzKCKmzT58frKKntkb",
  "key33": "4BL1d8S8V3SVd4vwUBDANu1eiJhkJoCdpYzroUndXvvvVh2EJQKExp4fUiRFJ2RNzfu5hMvE6XFU3Mi3xTT69BFv",
  "key34": "24PyBLgXRSxjvqiqzhWA9d5BuCz48DedWmFG6u3kbiRmadXAQRCbo6Q2R2CWSn6e9CjUNA1QXiio7MfGiSDa3rMy",
  "key35": "5PR2zA57M7m3ketf6AcWBzQ9BMThXWjKzxbCZL6A4HNhejpCq5Uvh7yf1PbFqKDQdYB5TmD65KicFNaTH6k7hVcr",
  "key36": "5xoGr2eeL7ooeMDPnQTJQDNg834AnyB2iC1AQRkbxtQtbkSSMk4QBgcwZ5fdvNvCwVxXZicWRq3mzW5MpvbGi3BG",
  "key37": "2QauH8MRK2tMybLt15ZvDVmkVJAoFNM5GstqtkeiLTNNe3NHMzZuym6KY2MNJQP6CCZJ4EcLpcheimV6bmEhPbrX",
  "key38": "uCUHPPczC5rMSmQfLVVqWBYZLLc72Ltw482ve7yh5qvvESiQuupVjhNTMpqvnTNE48AZ6EYQnNq8Kuo4wqkWSfe"
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
