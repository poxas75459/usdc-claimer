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
    "4PSHg3my7q8GbG9xE9z6mj6J2ugFusGtaLZyQmsgBhTmPUV2zTyH43ib6Zcy2LE9pSTxnp2bwAQe51zRXiXA5MvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kVWutmYwEWQohtm3MAiJBKdBfXrqL81Lg37EhNtsn5AgKQrGxB8dUZCrmjodfpCuVQ7z2VBWFMJnzGaFWEYZEPa",
  "key1": "5GqEHj4r2UMP3EtgjKVNQmFWBY7BcuToP27H2ZQ88HQFTaNV6STWn5z4LGPG7MvjdHjSLQyoQcZto9J3jpRSYZPa",
  "key2": "5fwV7nConxS6SEk3acMQboH6jsAa1ip1wdG3Nf69YEo6a49HLVDLbr3LJgaZeVA1GzFyr2FuvStMRVYUxwkMneNy",
  "key3": "M5BLCZg9uKQLAjodi1cPYXPsAV44fCBvZK1wRXywbQsyiFdWir2UboYovne7dsYVP7mUGs3Gtt5rosnsghmL3JT",
  "key4": "PGbcSnCA6s9V2g1qBTVDkkyY35ptGyHRaJKQvAAuezah8KUovzwgcuhCstQV1PxeqmRRBkmeTqxu8QSiyYq83Fm",
  "key5": "Kv1mk7kQccXhJEndoTMxuDbzems9mz45ey6Lmk49ye5eHH58fnYzGa9utcS9SD6R93Es8QBeX1KrZy2XcbSseUF",
  "key6": "JFqmft6SPE8VPzc96GXenLokLzWbU9cpfXwSqgPxeEMJYMPxVszX6coRy6zDs6rCEpFfNcqyXcErAcxoiWoKYRR",
  "key7": "24w3m3PhqkFSHXJGm6wxkkMvpEZSKLfmPeYNiLCHJFGcZcgENjwBSbZiLW1nBV8TMVcbJwqhAnbPsezpyFLBReuW",
  "key8": "BGt1kQJTNgv5EanMWiUfBXy5yyWJbBRCxSfsbuezmEprG1rZLxgej2WntXm3y9UYhX13oTsGgFth4YfoYJzAdE4",
  "key9": "2moftkyZKrCiR4eoX52h8vjCx7KaXaGsaTuYoDTukjMFsrcvf7opW1DVY16QEsz1gyfxEEbcgsPjVJjqDFdrneyD",
  "key10": "3qco2vAetB4rqdS2aR3FYiEQZ1bWqDQkVLVuTWA3WkgQ8HTSU8ivuEcg4v43qGzft8V1hq1ysdZzES5Sy8QX1SBx",
  "key11": "48MVAtfoDXzpRxr1rQiSXstpVUgP1SvowodMg7jgjeb5eJLFF6hRzJrkwV9ja1gec4DUksb4sBcFEVyhWJFDQJxA",
  "key12": "hbyardW6cx3EsvNQhMoCLSE8nfz9GgKyMQ1wg7VShBAubiofQVvRCRzN8qvwTdweXZvdVYeYG57f5ZToVbb5pZP",
  "key13": "3eJp1oZXZhtNrSkCzNnLUEyTGMBzZrcsx1e1FmE8w69WKSxPQbb5tuoUDoprqwcWvjwq6sRafoXfrGddta7X26ec",
  "key14": "21VNsKA7zhZQPUADeWjL3FMJHLpcBPCdrCJVAyzdccWfuWEhSjyyWokC2xyyDA7TnrdVN2edXegeDnWAeP1g87jq",
  "key15": "2ajArmMbKTKZhXXvn611FmncLq2DdPzxPKizQjJ6xAv9atsKUN85RLRFcWgK4FcdbRceyrSwoncTM8d8HbbzqJ9e",
  "key16": "nJZ6TYWAjfzxHRpjyG512u9oaLn91ZugfYNrQt5r9YUEmimF27ypwWnccL2zoMfRYfncbRB5nTBwjob66T8SN8r",
  "key17": "2fBo9V9gzss3SGvRaDXfw3NZSqEnsLNjCMMYDSRYmD74sbz2y5PaGMchxEi8kDJTmk9fpdupJt3T1wtMTFREbxf6",
  "key18": "3fncQvPQirmXd1A1xKapZNrKbNnDkut4QJtrRpkPHNpjvtx8smT6cvJAXiy6reiX7UhX2ehyLtkymyHjdGWubdoR",
  "key19": "5DtR2wZ3RMgv6FCYPfq9eUkWxcm1nQ6QGjNyRWkJZfHbwFtNjTELvKa6ZDhKpVGwWQbLucWMmbQU4XbV9SPaywgJ",
  "key20": "49d6tWqQPprFbXtWhSGvnkBAGinBn9Fw1XQ3k59HRNBe9b8DsvpgAHfahD374hm5FSDFvKz4q7yeUyDgLCgPoRcG",
  "key21": "5256qQvwnD5KdYJd4mwdPm8qeWdRfKrAg5Z78kjafKmPV4vitpR3r4TEingTt7QsTsqBUTRLVGgWH3s3w2otQEW",
  "key22": "3U8bnyQ8GSbhMuHBXvaSdbw7Jy6N8rNvtqUiN9c1aa3sKQJquW7qxGNggtJDyYVLn1eU2X4F16Kk5X6ziojrYHsP",
  "key23": "2mmhKtD2NfsKFhvohzcGr8A6cpXqFPZUyHyJXfEQrj121BGCdcSBfy3PeD3inmWg2CYGYfF7MFzwBxMApRgEt581",
  "key24": "4P7ZXhqURMWZTudGgkDs5jU4uNasQLsU8xactH2KPiz3Db7T7PVejGt3edbcpSNjrky52Xs47yzd36dTYUV8nqtD",
  "key25": "3K3Fzp7ngXdbwHziQZbQGYfrpED2SQ2bSmaHiAULhQYgfUKWR1zJnM3RhDKLbiS9CyYcB9j9jq1PfWsCEnPyTDti",
  "key26": "2szYzH7uCJbrPEg8B6QqGb98TcxYHatHg8HWef9PYHSuWmDRduvihiG2R685KLa7BfGk5odsymnurBPHssTiEK3o",
  "key27": "3s7EazdWq4M6jpAcAvyVVRng4in5yz8UNPmxKU5tqL7fr8XhhEt2gidTUoa3VVzGHtgU5Rycp3jf1ZTmbs3DoReS",
  "key28": "5vTgtC4WRQLvT6Bj7X6o4faLRDn5phx92wQtMNtFuDtYxhwPEc6S6ppWdoycgtGEMpWNogDkFsHbFecFhpnAjni7",
  "key29": "5NnzdERJrP7TsfqM3zqkA6kAYHhKUn8Gt5HEVeftEdJXeh79imj4a8eAHu12iN6h3KrihAZHAZ6v5uM6VwLdJk9W",
  "key30": "7cjFSAzGRJW8Radcick9GBkZG6gpzLUAFaXAWobB3RsAcdg7BT5jG5q6aiLNNLiEME3nU4mmFZD2XYzyStZiJMN",
  "key31": "3k5g4S1yNedtJNq7TZYvQd3zux6gKdhXH8sVQAWnsX9CgGqiiUsCssZNmpN4a5ysKZ1sUu2eUyY1hrkTYr6ZWUxt",
  "key32": "3vA6iz4RPJQMsRoVTqyhZo9vujuCxdz3k93M3hNnKBRLCEyU8JS6CRNUsixE7xy2vqUBErk5KDF41MEfCZ1Be9Bw",
  "key33": "2WaMTrX1bKjf8wiNZa2T4RDx5xDz65EtBEaaJFcE9kxY9Hy8L1g1gL6YKtFmT1eSe4QdMboYT9nA8EdLzxvRJmYG",
  "key34": "4J87PSfPKLuarvh4rzM2gdGj29E6uAoeCRX23aJ5oY5wMGcrhtozEnfGRAo85PFJ9SEzgb4T8MPyMK7hgZSDvNEC",
  "key35": "59kkfBsT4zZaXcU6jE8nhHX7irxyi9xs9WtmWHKWzJRUZWboaY24QUiqWGEvCdEr8RtjQeuGZ1gXk1FbACtBWNiZ",
  "key36": "4ZrfNDJ2z636rddFyMXrVfcfToDU3L1ynhoMBUZXkd3AXBaFHstQ5p1DqGZY5F3SFECtPVxELZPZYmgYmFUNJBoD",
  "key37": "gCcVWdmDurh6GjCKK5jDS7wBzgUyKYduvHkqBceHXqNFtQtAwHtmVkffpGwbKC9g7ymLof4suvFSF3vaVR3M8Bx",
  "key38": "34Tm9TU1Z5PhXRs6vmZ1WteACSqjXzsfdmTip7UPBixigxjTsQaCo5fXqzoH3gDY2Dexs66E1eBeh9SrGmY2Ce85",
  "key39": "62w4XHpxRTvdozVpBGc1sgaAZMBCjRiscj3uUzwoCHJqRaCokVuYk2SH9eSaAkWaLg1Y6YmPmS67LXYKd6q755PE",
  "key40": "4K4vcLp6QTurp8TaCRih4QgwYSUTH467ars8pbpBfKyY8BGRRPhB5VQsm3fmWkxKf1FHjoSHjQTTpiPd2tZfgpXs",
  "key41": "3dTwuvCiR7Q5ogm7XFVtLjnLs9GuzDANJ6G3h59djsEDvGhUyCRMgfbvxz31i95rC87qkzDoGZPAvddbmoqHTs7w",
  "key42": "tVctk5VwEqWjQfwCgQTXyAq1c95ufEmr4X51VVRzesk1FcrhSBE3jXMh7pb2GubvvbvQREUCGppJhUTdsZ6a8Xz",
  "key43": "5342pLiXgwqjCXcBsU9e5sCNUJ1chDGf73HjG9frjfv8VLRvEkAdkMWrHN4DDz89DgnxGwKn2V4DHBx1tFwomTq6",
  "key44": "4vzZMQih6EffQHue79Vp4h4RprPU3MZwhFfm8wn34GWTCJkjm6N5Fm6TPb553HKWEEQDXZH1zY5woekJJEdZU83w"
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
