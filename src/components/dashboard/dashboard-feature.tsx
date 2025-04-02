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
    "4g1N9Wnqv5bFr9CKbUKhdN4fPJsdGrRb89ayDVt1mCyeGwh3SEFDym3ioRjcmGuywkc3zW3ggd7HttCGxsHAR8qH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38cTpCWoZMXdLCRknHkS1Ng9LHXTBkMr2GTEvKkrjYVNgX7Pqrnyx8EWAgNJW6w1FQ5XidyoTUJ8hxcGsaHkcvVW",
  "key1": "4oF8Weir8TAy7RKjfRsBDmXDK3CamuB9yq67VuKFTrpV3swX7CKuN2P2yQWYbAMEoc7yMA655PNQ7K79de6yXXzk",
  "key2": "HHsZztRXgyG1pWvQXsexdJq8FPzF7SGEopv9Vz4NzDm6NasEwBNaBJ2BKaPU8zPp1pifpatFfmosgEZNb3e9Pht",
  "key3": "4P6XMs19jkZeAW7AH4WZHqP7PQjLBMWACxjvP88LKgKPetVLuZNJePVPsem5PFWFcuUGZ8PA5V8cRr6XJukNUSPz",
  "key4": "3LNTrtT98PmutBih7bJhYfWBvYgNzJEENfEDAMA54ucdGHqq6nXHd4NoRrKLYbCP5xxeb1kSTjm7f6dTzYJm6w86",
  "key5": "2QbBLKKoJq4mNMmzrQ3my9SeEyTHV59Ti5uKUrfmLBfBBFugh2TQaNfdCooGVrxezArX1RvajVeqJVVzGJB699o3",
  "key6": "4CY1Dzy8mg3DnZUQs8Z2Uw7dK4fFvrHWWFKcnouf9PFAsJeob1fZfHgaFSa8kT749ShLvDf4rXsZeLJkdkPE5ksp",
  "key7": "3ioZ9sSi7DpNMx33tJCKwwqMsxTi2R6VmHnZzrkgfHfX1ci9a4LBJVumT15szeLpm9sxBhYbzFPAtATsfbBY7gfA",
  "key8": "Km57iWTJGpwiyA5Heue4dfN9UeUw3fyov5jxfNgL4D8BiYXJ2x2yCw18Ttp7sDPsDAxNN1sBWJxnkta44mUPfkS",
  "key9": "2v687F73pfAmuuLZBhRT8PAh7XDkYgTS4qL2pwdF5yZLkeBM6PVhMHFuWFjEcJzQy3f2pc4abfboFWhPSZDw93JV",
  "key10": "VMvYuspeUvGbh4s67Vmw2YYCMVVxMxhyeX4gwhvbop7UwdkjYzcUVyHcHLgErPDZSvo8ojgAJ5jobsRwRLjkMHU",
  "key11": "4ZtxsbEzigpDbg8uMwmq9oBrQrcSV3mJxByerDvn71Bsf8R7KfNoDjAZTNz46U2PvsmVifZCzK3CnLFVYKMhSTEB",
  "key12": "2539SXsScqEDw35HpiutHeZA9yEcMgoUGbU23SsKvuqeM36cFaKRaXHMCvtrBisZACawuTfvvKFjdPgksgRWj2LF",
  "key13": "wfKCzZfWsX3eZKCZJYjzmPhdJUuPSiKhuwyvje5N2pTJbmSyQKYdn8HFLKceUe6qnnTZm5GV2eY8NQXrvR6Zshi",
  "key14": "2vauerpbRb9WjyP1UcA842x3RGUHsaxG4jhbbfgEptvtQAgmhtPqj3t8snuRZHdCgJVzj6YDcj8ofZrNkbxuHCrk",
  "key15": "wATfprQixkBoKKqGoQPbkgBhqGUxtFHN195KwqxDA6Y3bio1TAjZgQg4DR3ooL4z5qUS8Am3PMTfhBnZMW53Vi6",
  "key16": "F2jsksr77bJ7tz312USiTL7qUsQKuhrcKeae3B4ms44Q6ziuH7wXrWh64nGbFBshRkgyJcoD7h4ocSfmREuW6aN",
  "key17": "tN7o3rb68uHHiAkymzCQqChYrg6i7PE1wHYCR5HJguGWrhUAnP1wfU7gsq17UgMFTh36tgu8CnEHLJ9iJU7Yw3M",
  "key18": "2hWzeKLTyBo7wHW25ALLsgYYE7tUExPMym75DdTpPsMoGnjAx3bQWTzGU2sybmWxooReCcNgHhSCpL2HGUzN4PHx",
  "key19": "2WCfsFyNWG12UK2XHA4BcQBY2mFKmV5EmhYbsGZAj6uB9gCKg92R76G1hLDKAZaVeet76ZmNvRBqq7aAAwg5UUJs",
  "key20": "5GN8twW3DQE93xtYouFxBjDhee5GdyhchbP6e73xKD16odM8amLGV1CJbA7EwtWPyb1PGERG5c27HQ6PK4P4riA4",
  "key21": "2LbZsgPLcSgNL6GMecvCuRo9QaHz1SpMoGHYsYxYiWPQdqThHQ9A82NUBB4W8vyqmtNZYz4ZjMoYCJWGjvL9MkhP",
  "key22": "48WLWYAHQ5QoHcjGRE5aDoKLX9eegfdWxustiNZ4Q6vL7FR3mf2hv6N8bWFXbUTMtnVeB1j2cWRszoXGPiDB4tdp",
  "key23": "3wCNciL2kfFzmW1eWBnop5RvXWcr1EjXKY7QXDJvzF2BLkNUXRwoUKdyXeFbeusEgonSpHLqvjS3u85StF8zK6SK",
  "key24": "3jsWsXkaviB8agM6C3TnN9pBaRFCimVoFbebWZ1cAHsK2RQJTtMvgV2fumbHgTyKXmcAXUEcA2v98RV1neMct5U1",
  "key25": "4Wsiat3QwXqCnWeHB28NX2Xw4w1Pydee5eQFHnrrtapxZMfnsmbdEWmNRScMcNLjC33esqKHgHBT6V9Z4LeFTn4z",
  "key26": "49XMut8L7WApKXYiN8vZacey91xRufBYnPAG6T97THunMJkdjrobQxTYLZJ8RGjK6Kh2SSLy8AY2cdt2RJ8qC1uG",
  "key27": "3Rh1jiXLYPs1Mm2fXwj39dAHiAxcTcp7TqEbAXiXNWR3UEgWiE84FSw2s8LzsKcSbG2eUGZAowqCrL2VkTiiEPWq",
  "key28": "4uMH9XJuEQ7MMojohhZDExNptYHX1hu2tuHiymzQt9qSQz32ZPsYumYLi8R26GLWjCbDEjJTXbdpYxTLD8NzW2Cn",
  "key29": "JrACKkBsStW6bwEcRdV285tNT9RuPcpKARFyLUDbgZiAqt8SCprYGkxKdaVVABTbzcfigDFFDBCQdF7SgjHEeS4",
  "key30": "2qh2r8ZPyiLNXXrmXuuhRs3TnVBiyWeF86tnSPgBC7LirDHiCMfjhy3PyvFKmqZUSrSArQrVyNP5gHGB7ft9SkHn",
  "key31": "5xCSe4WcfG6yfpKF1G1Y1n3uSeMZ83zFSMMok5gukwkW7WUtwdRpgAjGZpDqzVg4vvDqDEdonTK2oYg9fRJQf1Y6",
  "key32": "4awFAjq7LhR3aeyVCtgo1CyeSsrjYaZp9Eca7UKyksMLyf6gUEYTHvbS7u9mh6zfMZNMmae1q6mWLm3a6dHuQ21R",
  "key33": "3upw8Wcz4AcbdtqqvScyDF5U33RAwYjVmRq6WqtixmR33vdbexyF8sLsYEK6QhVM43QeAYtoUewYe6BgcSQXjGY4",
  "key34": "3aMiCnSkcqmdm6gAwSMMwGQnaQBWc7aViPw18MH61ECZSCyYhyVXy7FWWfmh5Ua5o4U2EB5pVX9QdwDpWRfAwXkN",
  "key35": "2t8beUHn9yVupPxEcdua1iXUzNNvMnrSwG1TB26N9EWZHnjBXRGrbTpLVvM1wKegTWYmxVZD7gLXyd3Ep4iqJc3T",
  "key36": "3m4MNyKrzsiutKS25dPEDKFBhCmnMf6oPd3h4TW6Qf28pwhsHHyvUt5X9kuq246hV7d1cRYUugLBkzaYcZAQEh6g",
  "key37": "3ebeNgnMsnp3Hj3xEkh5SgT2FWmZSGQTYnLgC1cxQnZjCdR5jg1DbP9t5okoJyjuBdwYhuBmH3RpNJtx8UJUBoFe"
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
