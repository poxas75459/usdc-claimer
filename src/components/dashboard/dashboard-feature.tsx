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
    "47XeAffrXNJ1MdpH6rza7PzWqn17Tt69ErAVs8ppkYjunKUFNuPMc1c4rWtZBQgDaf7zttwb528tU5PQrxmEhLtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hwncx84ud4E4eXbHLUPoquaGEhsgTyHerKp9fwxhnKCBXp5PXQeyuUN3ZTL13uBi7ETzb2he7zcBzHvvyP3nzbX",
  "key1": "3zQudivQNWTS8bKy85uh4fMmWdxzkUu5agXd5HmEw5DFcdor64TZhMtDGSswECA6empFNp4HeqnmjZw4cbyLZ7pp",
  "key2": "3uwcEiVgULVxgphcK78nQcRH9327gG5eRxDUJThLiSQTAzKbswoQWDiXiSEan2PLGTBm6bhZrCDg1FmjRomMP4YQ",
  "key3": "5JhogfmKDBpx6M29SBR52zjrJRoMHqBFrXuWFUiZbDDqfRGXRwWj1Paq4946TBJYTo557SuhQcEXema14zv3BYtm",
  "key4": "5HUF12WjjiPxYrpPpTgfm77nwFaKDUHrL2HHjhfNZ8yB66owBRHzec27T7Rufsod59hW3QAKQ9vYkAr9vujBAuVg",
  "key5": "4BLc6yQnGobH3CBcCKfLT8Zkp1Bi8JX8jnJej9vEPSqugyfDKpLkPagQxrrgJ1wzs2zsNni2nwtjJ2Akr3ibFvmi",
  "key6": "3VpKGdzfjcK5RMpXRZYBrnpC1bwZMRzvpxBmVEQsYyg227rawRX3CRJerdihYYCR7kP4wuMZ8dtVt7Z7tJjUxwZs",
  "key7": "3HG2xCWuMTfYoFLNQuut5kBUwHeb9cMg4Mw9J4PrbxRoprsfHfKQTUELaRSryQb4SWsYjVGdbQyBCtMtcYQzqxgt",
  "key8": "PGMVNZRWrmBydtyaTATM2M9nTdzui1osR16MKqMi49Qatx9htYuojohuCt5fSxP7VdSxX1qyKZRExtaqXVhKv8k",
  "key9": "3GtEr8zBnNeg9txTjuhE4ayKJrZkUhGvd7i7GHvtxCDYUyCMYPukHcxS8PwrCyZuCZZ99bQGyUS2mYn1TWkEDfk3",
  "key10": "4kYh6FcHCdiM3wYxaKw5NmkePA1TNR6zrPoFp7AgDLhtb1u6rGXVGZNhpcu5JnMug9RRumSLgexooFyJj6cKMPLP",
  "key11": "2mpuSJXtHRN6E9Epfe4xETmfxzgKVifGpTFLDybKF6c3kmfwbbnWLp2MH4b567vo9Srbvzx4rxZ4A9JpZ7aAgMnR",
  "key12": "3rumvGNNwhG5rWmuroj1D1zXuuggcEpGbDLg3nYw3tzb6Ywb3WRVWrzyxy7i67d9aV1Ybwp9SGQe56j9Yt5Ssy1",
  "key13": "4N6zrmco6BGS68B9PsSeWRP6iD9AR4rpSujXxG1EiMSLk7Q4Hrs2E6fG228CN7PfHAewVVGPeCyybu2xnqiaX8Ls",
  "key14": "587MftLPYEpackHSfrRi1KjGijMPxwrJHZPVAueYBtqFP7B1sQfpdBznDA8bsE4TBexKcNFxcBFBDJTUtYaSqhq4",
  "key15": "kSwxvgXGZvefGXYqBKtZSzfW5Sf8w1P1AqJrL4JWSqqYwFeRGPkLkPdGL8BLvbzD5RPTNaJ9mbMQVYGd9MaDtni",
  "key16": "ZvihmAR8XUFj4NpPDrfNciXTDoTyP6o2FVTyNGVeczDPXqgw2ziESHKgkV7Ehmq8a5kn4pi3rMx1ZzA8c6frzaQ",
  "key17": "61jxPb9xFxayFSQK8QwvQpJpxHUSm54rBevhmuyp9buE6PQcdwh626bmt9cJJxd641hY6GzrrjFEs9Vub4fM7oNh",
  "key18": "5a1EVc86H9uMMHyTtKfcP5rohbhdZEg3X2pKpH9WaDokEQbdLHhkdiw3mRnPyn4tsNb99cM3peb66aDCEEd8Y9Do",
  "key19": "4hteekHGyg8ehq1xoJhRgftGERN9Z8jXUiTjeWHR6dR8kVhwKDoHqCicVPZx2XAnBnNUfGQFVXQKrdwgZWEyA5zq",
  "key20": "2NfnjdWyUb4PBC91RD66uHt9jDbkkNmfR2UDKhSCJye1WCKk2yC5bHSFF3jY3Y99EEr4EZEFUyYBqL44mYCZhu4C",
  "key21": "4tAAkuC1w3fRHAmVFxaeYVyKGJXQMvb1k7fkgnLJUrQRzybu1ztB6WXFL3NqS1Xi1ChMRYf2dAbyZ72tHDZYj479",
  "key22": "1QxpjqjxEL1LuXVT7q6c1sFm4XG8PUqUpAvjbNtfCCMrbFa8YTie3AYe3zFhwvoa4awr5AdQHxs5uYjxUnxUbLJ",
  "key23": "3yf1DK4wW5ULVAvhvyW8Q4cxAYLSsQLw49PTT3Zj8HPUPqL7m2V9A436jGQT63CCAwiwDbewLdUFaRZP3xjksKMz",
  "key24": "3TxvbiiZuBLTjKP4maUupdgqUzttzsuJSUVyKDYvA2jy5aRab1UZESeRaGQbZP9uJ97Qq8zKo7R5nh3mcWw1oybP",
  "key25": "3zdrFiL6uwhHPi4utNuds3XUAMCUvak7J4SiJ7WwwTKUTBmGePXWeE1ezR3YFfbD98wKVxS478A7qv4QgTXPiu25",
  "key26": "2TZRTZbFgiFetyKvkdoB3e9VH6SJpYAPqmHuSYuVBupjMFSvMw6PyMoLpsVw4yMhZ3Fb9Q3rUQAcDtHuFMJJvjCb",
  "key27": "5MSJebbiDBXoPbufghXCkxxbzd3qBbGk6ABGH5KmzhQn4Ya71XicsPoEyFjTWND5LVMNkZQxsSXcQYVUNtE8Cs1e",
  "key28": "3xniLtkWET4W1vZadoMmFhqv7DGUu7ybzHcY6rMLQFvc7MTAmNx9SPr2vfCUzARtXvbfCa7Pa2LBRvEmdAjZAqM",
  "key29": "4ZKHy1EHb4BqwhyiAFUss1rK6F6YD2EJSqT6UEgGLLcZytb6Pg5h62iXHiw1raMNRACpmdaBR3CA1Gayt1Pb3Yef",
  "key30": "4N4veUTMy8cN4SZfzV84aWVpYcq87iqkTxvaPXZjyeNm2bXPEtmJKMTwQzf6Aiw9wqLdRUidrpqgbnemZzvWjpGn",
  "key31": "5xWkMD5jbqKo4xTR5tptMgem3AmAyYuigLSuPJ8oLkcQeaGW4i1BQH88J1v1iTwUs9ZkvQ4Kc5eJoReQ84nz8gyi",
  "key32": "5UhTWhX6ZSHFR6ZdA6uCz4aUTjCiTmi3QbwPRh4cRLvX63DxvhJxKgVcjR3DfsS1VGp3uNDwnjk9cALVwmUWZF81",
  "key33": "FnPKBBMrD6acbivUsNuJQfa8LE9RdvyiwW3rFCNG3sXwFB15MZQi4zVYPR7ps2eqgndCnWTx6XFN1HKGMzrmYjd",
  "key34": "2GRfyFxu2xaDqoYAt8NQ77RMZWrEctKJxQGWQg98kqCeJPrxQjXSfKrjeEmdqs4GxFR7C1b6Qp3DcPhcJHFE6g1c",
  "key35": "57foLaXhbGZnv5sXGNHjmbaCq9hQbsZwLRjBnteHKBr4kibdUUY2pZvGrgJ6P6ExipXnufoM64sdSv8Bkq5oFCTB",
  "key36": "5NqtBDTw4hnd8qrQrXV2HVJP3XnLGytyBoJj45nVENb6Jtzk6XHBQACMZ1Ryg9VjnTNJFzPcyvWBSygEUwMbKLNs",
  "key37": "2y42dhJ91kpcqdRC1VuAmngJhaHaFbB49qmPyAj1m19j8UM1ZU778rnJ1TgiCCxHEw6syXkgJAWTGNazCothQQ2k",
  "key38": "3eXrNaNQ5U3sj2qFR9ibWfjpkDjWm1RCDSBbS3LyLiQdv9KRbUDy7DH1EpwmFkpaBmqiQsEGz67cQCQdb8S2F6mp",
  "key39": "41QEvwu6webhbGR5roN9F9p13eyyCkMw3eAL2GtQoxyQduE52A2SVXR5nkCRctmdCvS8msKjnSkA2bM2h1fjnDRU",
  "key40": "2vNR4cpTk4Hy1kNSzBpb9Fz42SRzNmCLgCkpsEjJqdef6tKKJuBznCtndZqT116yu999sau4VEDBQB37BR9PN67G",
  "key41": "4U6zeog9uUZQg6Pj9NxdAfgkeP25dpYoJLo18qDSGCgMbt8GBrCU8SHFgJER4x8Kwkv2G1XD6sGCZKV32CgtAbkc",
  "key42": "3ggoyD4VYKHCXoDfFxHwNE5R21tYfoRZVjsXPzrSwz5eLNscYEy23kwMMnbHpFhaBNp6Gryh6uM6YJj54qfj2tx",
  "key43": "zMfZpxEybE2H6eYLu1cgTDXdPzqNbDczx5YbN8DV8T3qzCXw7Bwa1JkuPsbXntT1WRxRmE9rtYCVS1bbSMGddix",
  "key44": "XCi2NxuUnsXFmoyE97Jw6yq4JELzm5B4iDQZxyP1zkqN6BWYnmY5yXe3uMFbLPeLU8G3Sz6waUKvEs7TH3MY65a"
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
