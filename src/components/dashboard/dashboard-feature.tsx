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
    "MAWfPe9gnpPwTzaPo35eR55C8gNE76NSoD9dN4TSZJbQYKnoJi3piVdnCxTyszm35UzGPQX1CZdXX4Ktop7U5GR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mXgTcwEHWnMQnrPfEtnDewaZRt8Jr138n2G5TcBWg3oYME8YowDcKEvgS4U1niDq8K6CsSPGr7auAd5bk2h9PzN",
  "key1": "3Atbqwnv7znHL4aPDGX7ecmw2t1UqUoK3sgtqLuZDZkQFXrkf1pCnjz7v4em7yYKCTD79Be2P3JiMWBU9tBNJZ1i",
  "key2": "4PnBF2SPfVCmn2kmqUTeXKDhddPVMbNFtB6mDF8KnuUHEHxHPeQYNeKQ92f43mda9C8tJtf2QkvDCBNGgV3Cae3f",
  "key3": "2uW4nQpTSJn3X5VG577YjkqMuLngtqoo6Srfhnag17nT4BW8JJFYR196EThSMthVNiMfUnsfcdpfEJgYue5se4b2",
  "key4": "5EJSXGpcmwCoqRZ7kQZSZcTp5yYt5oR1aySVyR8KHsNNFhxHpPEiASFFYnZc2Pz8mFCCvZEruR3UXna1k7vfzoTc",
  "key5": "kNW1wd1YQcEtTttef2Gen1nCi88eTZo3Ji8QCnhRPxNaPqdMy18HUPftKjtX8fNZgua73ADo69wNu4vMo4gn2t2",
  "key6": "TTuu8rTjNbKfWR1RPNakYcPzN8NsTaGp1tBphPSZzbLHbn49QhjU9ATgTixFL7kU8rmoueUU7VYRigVSwSkAXFv",
  "key7": "2Vifyo3TPM8F3y42No79EqVWYLSrL26n7PhEGT2wRUxg1oK4vdCbEGC63juz3gzb7WNvjVV461KfNktvfY8nNGJ1",
  "key8": "29HuJDYsBrFhsBdQZMP1YpGNWTabzmhYfjiNJJQfSxxRCcouFCMehWiR5cRR4NdWqvChoA6suYhGTb1HhkxAv6Zt",
  "key9": "3pH3xcX7dEw6RKbpCNqMy62Wj3hKC8KNUrHt5NmojQrkNZ5LdP7FsHVeJ3y1axHSNXDiDJWyFADd1owHtLon99HQ",
  "key10": "3MTZKLJxEufbFkPr64V7bapzX7GMGtoZtzvTAiZWLCznM2JDvKj2am7gZNhKAgKQwqdZxKYTv8Qid4Hw2VkcRTss",
  "key11": "qjbtAiooXaxGd9tSuGoyCf5f4qNzb9bXr6VnVhztfUfMVAarSP58mW32EbRVtTcLKPxCbGXPSjMVTcQddadwXn9",
  "key12": "4sjU8wFo9TwhYF2TyCZd84PL2L9Dfi9iCZQzQuJCgUNGjv85WA1iZkSHiyiBnYKrBR7KiCBeyaaPGJizeTVtiMWu",
  "key13": "3X2fVd3inGGYfNxwUbu3m5Lct8Et9dVVJfzE8YY7hd9m1ZQYdSF7sxSNi8oRZ71oNQz5bHJXBz8g4kMuoR3Qi3zE",
  "key14": "4Yu7qWsa7MoaZ3v4vdvAVNgmZ5uuhXFTm2urvoL6wg9d3aJYYfGTF9dEPV2D247SSQ4W9KXuhCtfRGvbqSoayzNG",
  "key15": "3fowgh189smjAL9uRtvib2Q928kT1xRMaKKpyREr3vDsuHE3v8sWquL9KHMdvG8jt8QQVLbwLKHNgUvdY3LVYdvM",
  "key16": "524472q9A4QGWChdTHnrrgYSiveVAyZ6mJzpz2TgkpVXMeQxtZU5vujoMfVf4UVeq4kk5H145acsfm93tqvEF8tq",
  "key17": "5aLjEtb7ZRxNxZV5eNuFmS9G2MTZvjAdB1dugsbecPrRQK2hKVtCH4yBGrQeqG3BwrBNnwjygsQDuTLRMXxLyPQQ",
  "key18": "2qc3KR5YsXKbjLXJhSzXUMFdtP53iUTRYSgeetRLP6VDMV1JA3qv9tVCGNfzmrQq4wUcwsovGFDMk2eniqce1kfK",
  "key19": "E3RaYWj7QJemUrhkFVE3GguQ3uyYZB4oxNnYTMhM2Hd5QzDoLBrw8veP35wep1K4tKyyCeerefsiUZDthVjhGSL",
  "key20": "52q3gHvxJWFcd6hcmr1Ci1Qtyjy6gcuywc9EbSxF6bctVbub1XydwBoeofQ7cRj9u6iHgcZ3PjXEbCk5Twowr6EK",
  "key21": "CJ8S5jNWQ1nZAVKrZSfdzVbpHRwov9ggWqmLBPhUnrb1dWEuDKXemN4F9VKexdpyFE5x2jcdrtzmRh3MRhSZiLB",
  "key22": "3fuGtqFW7KarscKfo8RyKazFz4eQkLaZvdQj5EhdCePpiJ8B8T4QhzSeogmErfMu78WgwjiBsvfuDufKvSjnxvZt",
  "key23": "3nHBohhpQwX3tyyeb6UszdiiCLxTWPcPuJqugKq7K86icdr59tEVveCPJgUX1ooF4YwKeza5J7GkTEorF39ZbPKZ",
  "key24": "9Yv198SRYe9MArTzQnXiswspVkvrU6wHcouwkWpjFXzBF3Si4hvDYmRt6CKZ26XtmKfaiYuQpAkCHpprLXyrFcL",
  "key25": "pgVZS7ahyWuESgf2925cUe1HkVFXPAsjc18D2sQoafeeCRSHtjryheHZJuKKNEpuMzX4nybRD3UhNJwQrLGoAk7",
  "key26": "54FhFEzJLW5QrqxPEitdEAsEUEPrcnZYAEs3ryeipKJ8EGnuLiCcd1iE6i91DpRm2JsnNunjNJJeJ9vuqf6MLqgU",
  "key27": "2SuT1qMauSjhGKvnXMhQ193qyZLaFT9RG4zEbPGD57zRzMVqrjnzFTgBuTJa3fnU4mMpGD8sm2w322N2yeBxhvYe",
  "key28": "5BDtiTz63VGbNtBh83rpgMtZ7TwE6BUQjUzX2gcMs9BxHneQYNb8vTDD6UwRyQTaMeGn65R3j7B1nRcpnpQQB9wP",
  "key29": "gc37kvej5FCubrmotbrvHYZvBvwd5FCnFrH3D3BmQcrtZBDLQhNF1W6znzgAMFQNDMQkHTUro9MiEPDwM96ebFa",
  "key30": "22uALL3AFB7C8kjsuooGRHtbowqLr9QHDZCEDX1Zyi2m5KXSpGw54Lqb6Urg8pW3HnHd79bLvhASppA2eYHuMjjd",
  "key31": "2yQXNPhAL4oF6UhNX43PPnvyMkinzW3TdKTu9VpP2hJaziEpvXSEpfBt1wCWF3fy7ePpvZoWYTQ29fCpKoM4HNN6",
  "key32": "4tuEtxVaVQBggJaMAB6TKwgBhynepJDPD5Snbi324YBy456z2b34nkXnEKz3inzWeY3n2D1tE1o8FpFMDBR1SM4q",
  "key33": "3rRNck5KSSyD9RyyBym41Q4fqSRrRwiPQZTA8ZKvh9eZL1LadcgeNuoXB9M9Qv92c1DVQK2Sgb36aq9DV9XQXmj",
  "key34": "2kH2abdT3hCRTr2WwLSYkzDjAJPiBkpt9hnxotcUCaGnHkLGimQ8PPtWt1QMdCW7PcZafncDYRt77B5s3uDMf76R",
  "key35": "2JA2JLbUhZMCXGebEvNARJksH6ctq5LqR9DU1pJnMJEjxDt7uChVxDWfeDFrrfNrYzgQoH3cUftFXMvGS2GoMHaX",
  "key36": "2BLS7RaqAraJYFQguKGyJs3dJpiAoWaifYpFMUjkjSSVuU5RvxhzkAwvxkfYqKGVPBFyuR15ws4r2XGHCbWfUpbe",
  "key37": "4Pwykta9qVWLA5EqFtTNy3GrCdLk7CiCeeAd79Y36YzCKgJg2tJBQYNoTkGUtd6PkoAMb52PQTwqPcUf8hbc9pCN",
  "key38": "4AUKeRhQBbWnB7VyD5aUqGMDQUBgrLv1fDXr46PebU7E11z1hbPQCczaa3CLysxPVijSgDg2oMDyUi93322y7XNf",
  "key39": "2KgfhuE96hRCMmWGe2Ps9dAQWcWaWEvfT6DCJvmBRHZb9EcGGWESnYYnkQkwH4A6EgYhm3eyCbFyK3PgPQdDxoDY",
  "key40": "3VhEstDR7D16Vr3UzoCnKXktZ3scPDy1uvNS38YXsURs6J1eHBsd8YpytVExPYdd221z4fCBPrRDgpMMBn1L7Jui"
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
