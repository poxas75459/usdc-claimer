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
    "5MsCM56BsRwpecrGvdkqS6v4xeuPL7KLcPBt2RzzEixPDENA4wzjHeVwgd3u424LLVT7DY5B7Uou8v8un8QysmM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "432qrHmBo7A8ev6zxTU4HhKANJpLgQrRwLZnSug6Fw71HKLqTU7Z2fqCvyCqegXbUX1poSx3VuLiE9ks4B7YZeMD",
  "key1": "3C6MDen5xEjDNeWbFfDiDNCBsbKNdqJdiYUkC1A5jjfKnpqkCFATQt3oN8yBkmqm996KTfPDwfwMea66jzrEU4uf",
  "key2": "kZotdZ9TYk8BGxeU2qPpSZ8NvuLLujpno7LWc34bJzMM69m6gxX9TEeQ7QXdhVPeDd6uwQqcAuesynr5oAppdT8",
  "key3": "2ZkyazBHPjhioue2dvyCZ6yrQ2XdyrcFhMDsSe5xXym43Coa9GA5Dp7iZKMNXi7gwhfdSdfrezeXNK12bSQNZNQR",
  "key4": "igQ4PsuGAEfB3ZXbTEaFeBDboahchxQ9JX2odUH8UyYTu9h8kyk5h9Xt3S3PGGiodCRnG5mYPjoSa2fCL9y2EWt",
  "key5": "53JvzZpJgc4qTr9fo2TG9Xp5PVgosPc8eSaYP9VixPcXA4Z7k3snLKD9Y2gurNSujZvmjKGU4s2XJDu3Qr9Wqs1p",
  "key6": "5gRdUcmvSsSGR25Y9KEBaBzrsKDM5RE7BGP6fsSoHtZoNRfGiWBXtWto8mdPRLqzjP7JiHeSzF2x9W7KPSSwtsGH",
  "key7": "3inrQaDM8kujzXM9RozXtvWoEgxNyEwa5K5WWT2YHjuchzDVRytAVKc6FuSi7sC35C2XT5YLv3EVG5VJBW4aDRmg",
  "key8": "2TCG4nx9qCmGNHQd1kwVB38SnNVrCPDXbPAeAgGDToL24vKvH17gLaysWJzK4VRYBPMG69LBZzUqX69ZSKG7fuPy",
  "key9": "3HC7i5zT5WL8kFCU6i1j7JnnEeQxYQoaVbcWNeA7qdZAC2A7sYE8vxKEwmCNJYqwiBCt1XEZUaiQMWQQvm3esxfY",
  "key10": "4pMvvNgcZf64YuREY7R7MUBdBg6VHdFwHNJqQM9nV93Kd3kS7RYtMa8oAsMk7duN5Rjhht6NTmz6NyC3Az2fHQuV",
  "key11": "2BwSu93NmAdm31mLdgwG2Who5g5Rar3KeXZQUfajXHsLA5aVtmJN9bT6EavNYDUox5HRoY8myK7vhWT1KrcNMiq9",
  "key12": "4Ztt9GbasnHSx7ATb69fxrC8vQVpqcoHkYeFoa4UJw4VniCUurhPPBPbGYGR5JBYdT7LsUDUYmVqtQazKKzXiGKT",
  "key13": "2Jzzr7bu3uxQqNRd8ah7Pfosgcxdif6HEuMVPhnKDQL6Gf3y7xJHiXARUi3hvNkThA9C8e572B2FerAFuRAKSQJ6",
  "key14": "BsptpFXvasB9LwTfWhPrxb9msV6Wys2vRzwFNbPXXio86NZRnbK7K7Z18gGLMzSVAM76KSe3WcHC45R6P3kUcSX",
  "key15": "4CFut4BvegS7VMUP2C5daEkvyeTe8R4Eq8PoRKhXPWjzpT2Mz1JgFKSL6nDzMvtX7wUC5jvu9GdcJZSYt3SncVSG",
  "key16": "3eaCXyuEuqx2WSEcPioVinXXSn2GzYjjiMKUZE187zHZTqfhXqiUXA3txDiMBs3ZKYyNdYtG2HnL5AoWBzf9jBUt",
  "key17": "4KZTJS2Dfioc5UjpvSyobsVCteQXQiRRH13wrkqRfbqjC2m8vwcvMaPzutDmUFWJ6mV9YrzDRRaSxmWqfZcKekta",
  "key18": "5JxGZzaSGfZwKxnLRmg87yEtKyBxkVJBwgrh5jfdLH7FYJLisDbdmYUCCdXwxqsmrFVgDwWbFuVX9eYijFm42xxw",
  "key19": "JpqSaiVgojfs3mK75jF5AW2CU53PtuNXqiSahszq4Yy1QYuYFeeMw1cbQ32Yj6PSko6TPUdh6iTPuYdwQtkN9m8",
  "key20": "eQKA2BsESqDEobAbpNFqFHekiior7ZG8gmDJ2upxtw6CdkJPybHXoQX5jNqPqC1rdy6RsVUvitfqgfN83sFvGC1",
  "key21": "2cdJDh5YxBkCjAzSSTEQM9vM6REbBpEeYVrB9tuqwbqypT87EQvPkRZVZFDUZebJnHh5QHqXAnCYYCBGH5ZiZKEo",
  "key22": "2A8AiTRWDyYh5HDgQMtwaf3k7dAYPwNuCc9eMvBFKUcYnxxqDbqtcyzQYVgtiKEyRpGcQDzkDUGYqVQi2qoxRux2",
  "key23": "36uCUdfdnB6PWhCTn6Z3eWTBVCzkcRy7rJZWd18iQH9ZUqLL8kT3ZtfVvgyCZPWSD9iQNs5CbL81iCVJGLz8rFKG",
  "key24": "27dNmiY5cZZJwYhMRp7koiJ2aiBDkXivGmQvqvchXbnm8EW15m8UBFdQPupquPJbVZ562tjkLaiTd5RnWsQ7zvLx",
  "key25": "4Uit5YPmPfNiTeHrebiVxwUmGqU5LLXJN1o96sv52NYrDzKwGWh27sscvjM3LbQGYuvK3PnSDCFwvToqKjqtKqeU",
  "key26": "3Kne6m4W5wBRQiDamNT9X2Dx7mvYxiyLopBTRGA63dAikYa6aJz2jfjWRvNbgLEsyR83QyTn21D9DoEDWA32hfkE",
  "key27": "4Uyqr9VjvQ29gyJQdE76Wbwe2zKS9g2p16KUfj2kx4JiGk9sAUuScd7bo5jb9RX9QLdGpJAY1uRmzD2iW73Afger",
  "key28": "4W3Uwgmg61r71mmLVUChUb6Q7sNQ8DbGbGTqXHe1GzgnPMhHi2VbvrhFPPDz2L64TDxhefaGTwqsh2uisz5kPBqi",
  "key29": "PB7NtQ8EWYNmNzUQLnw3fmWTgiKUERoXGBRv7UYPbvhc7gPr6qvNVnDMAxtiB755hzb4a1np6YXTsSJW5kGoixq",
  "key30": "5VqTUkBjUjJhgLoSmgQYDGFPZ77gfpK5rcw1z9yuXGyKQydQi4aHtNE3qDZpergvMAm6QuzmHwergY9RfLezNhw1",
  "key31": "EsiWmrfw6tnNhDSSh7W2r8cXP3L4ZfRociaBV2qRzdNCc9o5wrHhXkw7j4SZDcbBhKWdGAKR3SHq39wQ5BuBr8d",
  "key32": "5qPoY1Di4qcSDuLeYiYBNh2tEFEvLh2VV9YyVLiuMDC4FGcQ8nNGNAkAF1nJiLCFyNitQuGAB3dw86sWJU24BsUo",
  "key33": "izCa3dvVXETtDyE2gjwMjwyCTePkvtmDeTkRBjszZJ9s6XWNXaWMaSfzGu3UKuiWDoGE8FC5XbGth469LuhDkBR",
  "key34": "36vW9eroM1dNqAq1A9vpGDXrbCpACgfFRXiiiB1N2yW46k9HSHnM3KLcMqNFzZkKZKkCPJQ1cn2M92YN2e3R2NJg",
  "key35": "5g9aPDYfqhcBD4UXgisuWrUxVZgNwzS1HvmMJN9HS8ExZt2Xdpk9Vcgs76cnQjXjX5HAqpWSnibEnatR4dG8SCFx",
  "key36": "C4km6dRbhAyo6HWDf9a7wiGokDocEx1Fyhq2fSiyFNrjSz8JTKu6mu2opWHnrtLBL47UfozUKX5vHdPerTKBfu9",
  "key37": "4iBvVgNepRXfDVfMJMzaHiNyMZoiru3ms8tHGXypnFYRQqukxRLF7MHy8fCL1Y4EL8TvchpkFSrkM7DT3L8uR9iL"
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
