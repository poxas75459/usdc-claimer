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
    "5qEwTq1kY37CbxqiaZwpeyxReHJyzQeFMyV8QUvf2nRWUcixiN1eUpTFpQMuphjM9HgircVTCoVgX4FEPnPW3gu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WfvFPGRztWzqevYb5szR9N4fLbPR1rrfPu4KxVqBRzXTGdPeUxMLA5MvVPRxV4pJnteNCg8dyWzDxLgPF6xqpkz",
  "key1": "5moUx9iXUeJr8CQMW3RLAGW65dh6ZgdeJXwonznCEsWtuP9Zzz7gXtbihWhcCPN9jcn3SdPBt44wkp56WMQLYpPo",
  "key2": "5CxAWXxUkdSx5LjWHAGm19Cx7wvYUUCY7T9KJdy6fXbL5SRi6mJXH24KZiVpL6AbYt7BfN6isJzHJsGZk9MXGWNZ",
  "key3": "4oezs5X7f8AZpeBMAzRCoeSNMjCDMEQivN4LwDzT1HfJ8CMC3rMrAgQWNbW3LcCg7eMtFdSxu4BewfE9zYCT9EsZ",
  "key4": "2JjFpdeWgUgRtrdbaqYJ1GTH9YUsWZeTMAtyzC8sQjrC8PLsWL8cSuvdXYdWRBtNeCoXhSzTMKW4maqGxR9LZ82J",
  "key5": "5j5L7epfoS6goMCpG6jh8Fvmq3FHGfdktVceLwsqoqmHKPc4Bf3CgfbEUNVotbWp5bTZmrcLiPt26v6saA6pDagF",
  "key6": "7nyGVpb3u76DdjrtdcSbsQ62Kvkqo9heu2BKD5pnJfuB6mxzuejHsr49knpTdJUU39t8XNFgRbXF4tHLpfn7dpG",
  "key7": "4Am3mWK3r32MHWmbEzCmL5P79c4ZKmNab35LpFHHux5y4fujGnEbdXf7JtptpxYwHZWc2EYH6oqgsFxdr8QoyqYi",
  "key8": "24YjF7UJPiPbyz9k5Myx8VV3MEpBeDg6Di2pB1CbRNLNemVVJVLTvBFz48dPzdqMyJeao4gjZTyzYBrQMGwJbHFk",
  "key9": "39dsiPq1s6JmJtxRXhmWTMaiJ7Y7oAor2scBboh2E8jkEgiyvukMGrjuFS5bFLyNjEdeoK4b7yfedRzDoLRsRNqP",
  "key10": "44P6Bert3n59cvtQCJLoMBtVYqPKFuUSyet8d69VgCJH1KXCTsi29nR2fCDQrCmhXhnLPiPnh92X71nCwqQRnzVw",
  "key11": "5LsF2JEJSf3NBCLQinfFy6wCF17aMsdKL2TfqB3GB6dVSeLmzQp2UmJUeVxXckF7pkx4z3fBF8EMKPhrd7ZR7E2C",
  "key12": "56FzfmVK3DA6nxqAkTnQfrCpCVWVfYjBJrFJSk6mH4DXL5C89NMvUa9ECNgcBYPNsdhNXmsVtMas4avRamSDBAMd",
  "key13": "oFeEcRDNvVhk7vrstSnEiYayAi3DRw9dNCFKDm2C2gNnY16CrQGT2KvuS8H5EQpbBNrkgbMoHh4aUud3rPukAbt",
  "key14": "43c3DNKEQNkaAxsgU5X2WVrUB9xA5ySnqRacxHpdnmGHorbbaECTrGBU8LwoNerZ56ssPnJ9N7baMxZThivjFdF",
  "key15": "2Rg3NGPuqu2zkoWofqjGRCkGrATBfo861FbaMKtg44T82YZuKdwMnuVaxsXrRZgKoaXC5Qb4UYxcUb8eqqNwKdFq",
  "key16": "2agXWaUPFT8T15qMwx4rCqKpF27kiRKWqcbaxFkYqWMkuU8PMkVJTMFXvsy91xSWZAKxPUvokmd78JcuxgpNBic6",
  "key17": "29c6PszWv8zvUtJNjJRuPRJgv5p1vsn6jPmLdVtfEn4kqWvaR2ihumkE1DYPgvqL5gogx5p5954CWWzwGXd7pS55",
  "key18": "zMB2c7cDdZXm9jkBhGVWTe5UHScqWtKAwfkpnhacvfhj8hbAv4T7JHaPHtaC4K6qRyf95nWBdbUfvMwtpURcsMd",
  "key19": "4uf21HB9cfdAwgD8X8haXgK7datgUuWgK9Fu8V4extjyvYSBQsDKFAfuozwGBSbmmc7oz6jvwMY7JadSD4Sm7WzB",
  "key20": "4sjbU6aYnzSzAp92NLPoLbwZKzG3oB68AcksnEWntCvSWy1sPsJZ9hJx6fo1ivFdNe1rwtvBedkZ7f2VJCk7xB8C",
  "key21": "3xUahFuFmmdUSaiCLf4B8PfS9p62C9cfgP46jtmfX97A1kyuZiGwWh2dW6XDXqtHM4D8vrh14N4CzkhtxCaVpWdd",
  "key22": "qFoGjKkG5bHHK8CfXaGa9p56nJV3rjEUHeUR57H4MdBdqvH4HLgp2K4RQQWXL6F5zMypcYGuSpjLUkEC3aZQqh8",
  "key23": "2FMsJq4XMx4fJP2VNWChNP5aUkJaaYJJsTeSmSmMevo75uMX4Z6qkeuWrJYSLovSKqb985mJLiG7X8WhhEvk7dGu",
  "key24": "3pvysNks7TYnRSw9qsLc7ynQF58fiqK5qvBDumvNBDFNU67RofNNSN5LgnFGT6oJLe5MhsLjZ4oKJKoc5vuaNpKS",
  "key25": "4xy89hTevQRLHavBLY7Weofhff6UZ83uFioab17W6hQqteFH5EZu54STDUHpvwdp7eBe7KSuhMnZxwjwynwz2Bt4",
  "key26": "78xVAJjW9DLSPfhuXjy57MMdXdk6HgnMhCA2RzRt4ZJfgbqN1qCvfJArtAy56E5NYpBRo6TnXEyp4M33QBLaTQh",
  "key27": "wSWBRHmv7kWTzpvYYo2neVfHUot7xYDhxvnUjYxpb8tM3EdReHeXNuyZ6SvY4Gnji4oaaQFB3kaCdhHiw1yUavB",
  "key28": "fGwXjood7A3F53sBibAdHYkNRHVji5MZRJAURzBfSSmJq7P7Vu8bhMc9J77tBeTcWQy2g1pscANf9Tu7An5Qwpf",
  "key29": "2NHhcjTaGgXGWKxxSBqcM38zBuEr6kAmMsgGKpBY8aHET8ts6eCwmsbM2rs5QpzDqJMjNuPGMfjnJT1QCg2UirEh",
  "key30": "cj8XbZCp41HjZuQ2QTj21cFaLh2z17psw31ARLBF9Dr18xS279LNgBrYCgida19yiYr7gQEPeA9NbTGboPYHoRF",
  "key31": "4Sv5R3F9rxeac59hLqK6jL7NyVQ98MowDskswgdkRvtsLz4cJAR8X7vAu6iggtiHG4QBdRD8RtJD3i1r5QyoLz7R",
  "key32": "4DFDj7TZ8YhrPUfVNxhBVVGqezpgcWy4WNvye5pwqkdVPcM4E9tVKzu53JSY1VKfnNTkMXYW5Zeq9erJRK4pL652",
  "key33": "4gUmXUQGgFgiFEWeTbuiRkHwsrpVVt7vsQETwib5RHk7FUxsguGS6zkqY96EWp3bsVNAcrW3ciqvRX4U1CYtpmRh",
  "key34": "32trcqXxoT6SsQJZYL7GQi2cuPoBF25Ju3GfSz7szKpz4BR4Fom6sVdXq3MjX4Dj915E4irrxXz6T7JT8cGvZcFR",
  "key35": "5c4x49TSz7sBWxyQBFFxLznVuGMfVQ24NSjnNhL6yBytjJBB5UwbzDPPaTcCC5evHkkP8zfumUdom7QhrvZDKamm",
  "key36": "4zKjY2zZuFtKfp5FHrVsehhk5WjMvVypCdaa29ZPoZF5EEVdED4XZ7uj9sixffhxQv7wZJaYEiMYjsnZMMbav3UL",
  "key37": "5bPdvBTbjqmkD2EDzFa6cCYveSM3omP7M7EFyxSW5e8U912bQQ6K5dJRshk3edw4uCjw2fBXfJJsFuztqdDnbyTs",
  "key38": "626Xn7xiYsMEsijbPtKdk2bTqREWUX2jb1dvnG5tArnrMWQ417R5PB2gbJVKEqeawdMeC2JXZyuVX98qtBRhatx",
  "key39": "61cQqfTr1tf51tCq9jBRq9Dfz1oP9CY4Wo8ckSNvu9JnUobMTV6z85LPtC6fuvg8uDtjZcLKreiuJAqJj8AjZYTS",
  "key40": "5fy8aHqq3GUPswe3oMPGRToCcK2WdBuW2dPQXxnDnwGQ6tB4usanAHizG1JLS1LKUUGQzTYMgGPLUR4Ey6fSaQRk",
  "key41": "5CFRe7qCjrAXssVS9ZosXLbZYEvf9vYJ3oYRuuHbRQenjGr8Rg2KzJ4YWnbkZZkDxB6w4UJy5D5kRQ55jMN2ayvg",
  "key42": "5HCcpfyJnhHSgYFff91ysXaXdYybsLyU1fcffiWrk8AFQahvdSh8U96QxP72uao4DzAPgQp9ySfgwoUMhTMxony3",
  "key43": "Bzg7RZggK4TXzB7mNPJaV5JQAXe7FZ5fC7BpPBPmpVgGL97Jmwrxj8Wx8PjhMi2Xe4SRpCfX1f5wuSiK77gyLDn",
  "key44": "5mSZQTutbXQG52BGe8z8Dr5k1gjtniMPy1a9k2xw8GFABTi8DgnQ9ndbihqKeRoLxRYbsgCP9iG46TdbmoE7v8vD",
  "key45": "4Nf7n3Eq5AwdPEzLegpBdw2qptejafY6caKjZHxA9kiwTDWvimKnaCzf3EodN8Ze8jFoHQmS1D1emhiaKKRybNE1",
  "key46": "2rpWixfxirSrBT1r9KgRg7FwCeJQEMzLp4RtsgiFZoYsoLfEBHwcJbaberUWi18Ed39cfToGLrsitkCzJ94EKbjc",
  "key47": "2uhFYs7fyZiRumamcCc3mX2o2A7JqW6yXJ2b6qvSChRepzcFPdA5BobkC1P7HoJuGbw8YrRBnZwSUaHdNA6n7tbs"
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
