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
    "2mmzTBZwCoyjAqx681ceWGTv4bboeW3VmmN3mWAA124xt4AAgdJhnbgx1sB8rSZNeneMk1MDyter4DSexcyv3pW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TcufQRwRZjrbRqk4G7qMitULVhv6qfsuj7mC5BibJScu5CRgUvXqhDGJrKaL1EKdQKMJCKuJPijGQYzdFNae9zf",
  "key1": "5zj8ozj4MkDhXbd1cCf65f8DNwYKdDF584wsfx17W6kJS1JsPvMnSLbDt3niEwdKvdePzdEu4g1EijA11ZHdTDbm",
  "key2": "2iQS8rfZkbdJTsKPM7jxshWByyaJX7U423E45HqdGnkukMoqwEkpc6FBnbvMQuMnx67xJn6UzzHpnGAzyxjaWau6",
  "key3": "5XynPJnv7GSUoT4P2pxLUXSh42HJ3SXcNgPei8VAqPBFiEzFi43KZZ1yEPJ45ZnXakHCLsMXwkQt3ugP5mQtMfWc",
  "key4": "5jzQCBuJv5rvWyLKpaTykurT2RQ4moWemtMXLs7ks8aGM6vXb5rNAhXu9AAgsEaPLK9oMAHc6f5JUfPF3erPnke4",
  "key5": "yrHUASWoFBii3JDJDgSJ1GDpFwDhVe71F1k9cQcoEypPyGW22kXZrFY8wzLPteo9QDkytgsB6pngFCR5qkovHYa",
  "key6": "XKK5ZULn2fn9tL6giaHAd6TLK6NnNf9HQkctRBGkeCaJB8desV6UgTy9uCoXpRKZDez6qor9sYKr4amAsTmFRLQ",
  "key7": "N2CW2KNhnrbsNDf83dKRzSFNY5nmaBx2ZJrvB6wTpnsVcvHrqKo8QT2KsJGhccyEkSaJdGKNtw5iSjAoW9deFkA",
  "key8": "5MRoWxyHeBxS5vzmqssJaQEVngMXnxJMkEY864EfmuvwjyxBVKXsTekzpEzZKGtyQrqsZWt5k6pFsxLtVcEf9hp5",
  "key9": "5eWtq5MFYdBiDegSMmHMnUMc2NWDq7N1Fw8vfUNGasMv9QeXh2wsBiM5WLL2qrA4cRWcinjdy5fYfGBDECFLHmGk",
  "key10": "5bk8vdmo2eaK737Zb2eB7gocJ5CgRqadm3uDfQKPs7k6YRp9BSy6RNejw3fxVA3baYf2YEj54pcMB8PjtbzTjVG4",
  "key11": "3p7rLmS4T3kEuzk51A6WjhLBbpfrUwaUoe48uELjCKD5YVQHfPRRo9VcPKaFu1WnmdJdNbpPMimGwuJC1VndL6EU",
  "key12": "4AREUS4oK4KdxXvfWHnRnXwXZXFmd1JYeFn6owJjjYQoXpbcq5bXrGHriWRhEUWiABUwGavDnBTF8LDpd6wHRwu2",
  "key13": "Xeo29Bfbcgm57eMp8rXEmDpSgqthAfsZN2vnTPE4tWDxrRCcLr5aj3yxLhnUpJAdX5AwZF67PBo4tMM3VANaqgJ",
  "key14": "4U9TQL77zPPpoNbNrVrkSCP7y3MtY5hFQbzVKheAqkFART9tvkYaEq2vUfeMmEH5NMRWBtZvyruBc3CpQz2VHPRJ",
  "key15": "369TEHBU8cijWa1xmraH372S42pomv6iqNagF78eoWL1pahrQfMeGUJHUwMD4t36ibTxxxUU7M88GrDayCf5ParM",
  "key16": "5yn8fPRoL7d2QXNFMcbzdaXauWcuSh2DTJoH2pkVqgjKNR2sQSpJNRZiNGFhxkW2r6rZn4huYvkLxYTpoReVgRrQ",
  "key17": "21yzpw5fQXt7HjsrPz2pveFvGxoRHvtRKexXJXVNVRxMV7pu9UWV3B46sEtdusXo3kFqrmE8cpdxXGgNHqWWaCY4",
  "key18": "2yaLckAKpMxcMoHkRT9ioa89GrGLDJdY2UKqmj9ovAWFmfYEWTPAoLSPTFTpmbpJtChLdj85TU5psvsP9MDkqnhV",
  "key19": "2hBghJYggy6RKktSJpQucKJLeHNcEWBd3ixw1tdfiGZHayiX6xiuhuxva7SXLW9XrNP1Q9bouU1DKKWi8LJFessB",
  "key20": "2guDVbgebHnYTyS6PgoEX4RbdRXTw8ryavcWqRYgEH5GncV3DHoE8JxEQUhHjCAseAEQ6XcX2yaxtQG5ryuRjAtu",
  "key21": "crjVS5czAt1EMXosfi5rg5wWpaY616w3461EJ9iJaLTZMGogeTn4GPAsPDdmS96vuS7vfxNY1dAVvzB6cRrHXCr",
  "key22": "2GXzqQBg5enshaKQhdBfcNGenMze9zJ8HovKD38ij7gzTjhnQcKRdgB5FSyB4Jfa6h7c87Xo9gZP9oFqKuxu6z43",
  "key23": "4VnV47Huo13xpjvj4nSDse6YnyMqcA9pcPPPTjTrkNrSaS6EeE4naaGnhxGeRV6FDxPoxwfXFaf6yeLudh5ekbGi",
  "key24": "5ymCJhDr5rWqscayQSPv4ZPbuM9g8ULNc9oKY3z4eYT5BPhyQnb5DBoLDwWHiNrnQP9Ki4tK8DPZuPS3HEtJGSRv",
  "key25": "5eJuWVAibbiHmyavA33VYkXvrtU4t5LmyW3Wq27tCqDN1aKQVsmsM7Sn8U3YSSFeTiAoR8BhpPWdjwSaugmJRjnQ",
  "key26": "5qTop5x2vD8p459By546TCtgqbuZPySXtDpjwBCTA9rNrGmbhGes2NDrbWKJaWLAftt5hyjRd6GjQYwvnkRQxYER",
  "key27": "3jbmMtdstjKzh1JVwn1V82XNvFhUVt1Kh2d345S9twCiWJJjJpsHe5zFMgcP3hVpQJgUemZTXrNEfyP6rQmZb7UU",
  "key28": "5xLGjj5iU1SwULdmCwi2XKay7yNmVZzELkVm9BqTAJhPzXLpvoSBoxq1skxLaYbcZv1kkKpag2WyFKtfz8NaVfGB",
  "key29": "2ScjNpr6312gkP2g6oHmwfgCB1oFCaPEzEhsey4AdybxZhftVYvxtLFeYnqdJ4T4Sdjcgb55xfQkGJvHzQqY3r6E",
  "key30": "EzW9jUs7Fck81oimn1Gj1aPHdhYU9HXhakE2VZnXyrkeZC6nRrju6R3Hvim5yWU667CAHKeV2nu1VBbx1Y46JJ9",
  "key31": "541DN7P8n8VyEu8kGHL5R9E3iMh4MyYDER4ZnCGV7o38zzbEHHEE5XMqdbaZPQuXxUxpjvraaMwnFwUXNp7ig2gs",
  "key32": "4oTGnLpXVnXXF8WBtMfs2Wdu9HUDCE8pfWWEvigTHri58N3wFiZ8UuvkXH6B99fBBWpPj2YZEy3cftjucMwe4hBn",
  "key33": "4Pzh8heCWAQarawfUiFzg2dsLJGgaCvdZDH8v6djoPWXPcVQAE2GfyBHTMj67mDkCMSSX4scUBYTXbhv5NKqhcyu",
  "key34": "41S86aGpKPb6mFogF8KC7VPRi2q1MZZVXP6BM1TddxAW83CFdYGUbh3q2ze4Zhc6VqFdYg6rf93PgnjbZ4hkLhpr",
  "key35": "5UqBkShDdAMwikaDfwpT4u6P9Fz3jS9QZEirt5eX5kF1WsdgjpLq4aqKoRKXeqkxjzo4RiSVYvzu5r5Ftq6zahQQ",
  "key36": "431Zw8p2jojXCfPTvTxsq9TSwSo5oybtotsMFGu83REK3J4qLmByuntsXSeMnN4bM1frpsdLFXNUixj4Pk5bzoUM",
  "key37": "2phB2gcPMn633Wq7mgSJkv8wT7aQMjHDgVKCA9A5rxq9J7hiQEABrHRatzZc1sse6J5GPoGZo2CmLURSE5DSRzP3",
  "key38": "4Fh8ZWjBqaZMABpWRDHbrobzvfmQN1ypeUWbViYwLKymCRYt2FaY2SxHx1Q476sWRXtoGsD5We6u5LSZiBWMpeAc",
  "key39": "3xpS5p8MDa27jpYhpbWBFt4ewwYUnDBMcdDjf46NjEiwsGTdcx1vFfjUWdfBBxWPiRjXyf89JCkRDmbbzoaGznYB",
  "key40": "FgPeSAUwbzrZf1R6fydnxQMTX1w4tUQ3cCLKLsRTb1coYV7g4kMRkbS6uXqNsq9tEYY5cDejr8XKdSnWzVs1Ju3",
  "key41": "5p94273fp8QtoACy8evarYUuamoTJuz6hskhm5QZnZSauY5kA2TdY31skmARBAaJAfg3cU7TVgkXrdSLESCjNT3e",
  "key42": "4WAwbAsnGJhZXbuePU4N3M7v1ohxbnecf1bPrXtnpp46igL4QhwZLxZPC1XGPc7f8u86FsbRzxZ7r7Vm1YN6HMia",
  "key43": "5k59w2pyBKQ257YBeyUoMMmkP8SxACFcWgXNpWYYmJdBnw6SFiESCMnwpvpj5m3Qf5kNCCWN7NR66JkpfxhKGwHP",
  "key44": "4GAd31BK3HKgig3jy6LYnG5AkmhQpQeof3mGXWAHgUPwDoFMXYEvaXhCEPgW11kEWRxpMwegPWBVuTiReBYWZzMJ"
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
