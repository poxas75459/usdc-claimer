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
    "4dJ27QGT6HhD8iocC3WKpLG27NxmPJhAZxWqBwhZAp1GucnfqEnXenSqc5i2UztpqrJfip2zNb596vUiS6iSWFTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b4TsN8R5Nj9oDbQwtBVpoAFPPaD188JQmxgj3FkGi9wQUduvVDyPQR26aXvysNxovKcWDTrhapC1ra4ND5Lbt4y",
  "key1": "3VR58jm1h3Qsa4oDnj7msiEmL2Bs8sPjcb5BwarK9JBdv1KQr6BxyV8vzMx2xeX457Bs8L3ziHH9ao89yrt1fKTM",
  "key2": "FAbJ4DyWvXSVdutuXheEVnn5PSRCUFmxv7hbBY9wFXo3Vvu73wmaymTNpdx8XbGENfxQdze3XtgK3m19XBi5EgF",
  "key3": "2PreK9gSfXcWX9bA1GTpZGKih9SJbveNKMtY5XdH1EKAjQtbvDYqAqTm97dtHCqNfmyuipLrAAizhey3crtQwtCV",
  "key4": "2dRVnxEEz9BH3wbYjBZj61bzqiLn87ZPkeb5qGorYCc9FrNApHB7J7aAZeNoiBJFBDVQ8dFDnPSw9t1bBTPtY7a2",
  "key5": "4eMuA4Uw7PLY37bw41w8wKmrhnib3CqrU3zvwDwX1AKN4MN3GSrYMDjeJRSQ1E858BEFRURkq77qbWRLeCbGkdVU",
  "key6": "2w9nHek1NYLiVX99cWEaTPgNpHRGjxF9yEmNSwTWhHvLYmE9tVhpaggtFSBoEJmqppCY9ovSkmzMeTfQPHwoTggw",
  "key7": "5hSHWKKeCsAcuRGWULG6k5qAGSpMDDcroag1MGRhkXMtVuZzL8fZWL6b2rpcpWgeHjEG2NGxJr8wTw7wXRGcdqSW",
  "key8": "rRDqTp95pXo7Xic5zr7EkoPun8LHxXkwUCXAMjtExypgzUmvn5APVvu4MGdmmPPgYaoY77BoW1RJ9429YWCFySZ",
  "key9": "424ijNkKuWRcRYAJU9dTJHVzwiYwMg79caKpE9LytAonaXmWVxT9eVWfuFXEdCs21s8uX4uVnrMaodFRqNrx4VxT",
  "key10": "3LdS2hMLw1gJKaUVNYxi9dnCRhoH64BFSGndNLzvf1fUcDDHUt3zaHxfnV7Eym45ZxEJbybgVqAM5MGrmWiKK1Qs",
  "key11": "3tzCTM3CX9apvCkBahqWwsacQJBWbCFQKRg2aSBtNbgNVzTiRc8poFS2zNaZs75J23bZdMkffJzHMgNnVEbJcZS6",
  "key12": "3BcWGFPSQpA1veWQ5NFDt1YBW5huer1imzqEm5ohyT44y1g4iVK577Gqke91uEtTgysRetvgyamY1CLiG56rLHfq",
  "key13": "2ncWUiKs6GWfezUU1bVZJ2JtXdeuBwHA2XCQTooZmWJqPT7H1AiJJUkJ8gv8zdeXXFyJvaDXmeCtAkKg4wcVYEH9",
  "key14": "3JiUuVYhQfAhLMw5hn36tvKYyFRvN1yhghfcJGjj8JTLaXroLFmUPyYxcYVtQXUn5qWRCQTrsC4viicNpksNEmss",
  "key15": "endbQNn2xb3CmQ6p99jCLb94SHCyXWKjCdnh8DmpJ5HJxCiDysAQozV9GTy8uXBxkQ5Ks4EZRx4rNArKrMvoepw",
  "key16": "5ki7WPiNDn4AzgQLYoLd7ArkM9LyRfgzK8VHfHGFNcqfV4U5r4hWcjWVtfwJy2Ba6YbuXMoz5ZQKtN4BdgEHtm2e",
  "key17": "2dxhHTfe3fUQbMqK4bhgL4faSqRoiPSz6YNkRfnEjh4NS3HMtM7R8DQBHd7U9WehDP91AvRxY7jikzhPYHGRDxfz",
  "key18": "2rrWJTzHmK7JRaxcMBpnucbyfrCZMA1tEMXzsFEtdKQNMJ9JNBdpkarSgYtTuiWxaiFCMKSp4JH4f6e6rUWmSckc",
  "key19": "3u8pYDL2rUEKe3A1S3sUgCxmRKKyv7Ndmo1QQj2TJV2v747Suk8gf4F44EP3hjmLBAcQxXY49S5xWaHsWxX5HxFg",
  "key20": "2Rsfj13FioYodVpvXstSuFKfM9Rem7aXjKm2cgR7Yw7iK8kQPHNHucPUiHSSiU64WkX77XQoSpHir9kBBYgqUqaG",
  "key21": "5gXrwLgKBuA7BUy3dgRjbkzCxMjGAzqfq3phnztaF7ka2izEN5ePXm8E72CcmcG4pvWnjgfHu6MH6soo5CmaUMRK",
  "key22": "4qvPkBT3KKMBFQBHF5Rsy4FULkRvF1bryVooSCF3Gk36n6g8ehHkgeCWKdLWjBs99pbh1MYAQmkUaB43Lihm5LdF",
  "key23": "2APiqsDVzJFGdNURW7NsLN8qgeUMcJdR7bodm5SfR23g2Xz5A4NdxC4GC2oLgPpEnu3pK2Q3ojjZfaVM2aAP15Rj",
  "key24": "ZzHgNtzEhiZmMQPUBevJN4Yc9gNjjGEXqsdNsJK8FRy2sr73StCLUygPTd6BcND6YoxwWDF3xu86SNDFmL4vytQ",
  "key25": "xEVZG547Xt38iUsGVX1KAYbAZLEwqd1KMrUJnukUeJ7Hi5VWLpsjJS3dQBC8xzYu8ertiP7NGtjQEEpk6uuz8wa",
  "key26": "24ri5jZNC6vMJX8tpAwzq1sgypaRP4YjHpW152rZcbybd6Q3GXmSWmueU2ZuhpTHhhrQzfoLtfqvVCsYe6LtiUxX",
  "key27": "Z2J4KjmpobhCEGSD5HysM3Aj3YBeymZahLbuebQ88mNkvwUrG8gHNpy8xt2H8nQd4UDCYiGyiXENbdZRgmjNzAT",
  "key28": "3Ey65XWYFk8wL78b9ZNLHmKybRv9wdV9tQFY7VqFEFja58mFoVX62yjXf45qr6vkABLFHbY43bfJE6ALGSRQrs5t",
  "key29": "5nDDaW5xz67sKCY6h9JbHPckfBmzY6PrUPMGSNbUmBNRqmNSLFV8LdkWbBBXp5LoDJaFzXzGerz3Wxd5kq5iKW8g",
  "key30": "55grpGcHjiLRBPmk35t5PLVA5LqBDkHpmpctQ4jNX9xzBbSsF1cYAMBZuPWNtAi4Ex5jq5vYobKEQ1qWamHvBEFE",
  "key31": "HcFvbDMUwMN77FAEnJwgr1EZQxFWqbqqSxianyssXrPwc11XmqPE4r133Z7LDycSVSVPasbwmiDyGBFpLBQe96d",
  "key32": "5GXKvxHJP41gyyyMqoyWyYktisH9ty9q1afVVDXny4MTqZzbgGWB2KtUadHAv2yiTeNrbvr5n3Qjyizp59imToUA",
  "key33": "sh3XTvtx1Y5iPtkxw2RpsREqp64DaBZ63VpPfYriNRzMLYBVtP7VRDB67YrTbehYBLPPLyR4wbmce41xG1HhQob",
  "key34": "3R1T68quAK1DmGvgeEhpMz7XTn7VbYG3Dw5RFjUSsrJhCSnz4vCKYP3FeRQ4rEYHspSbtgsEzz11HpzQcFe2N2CH",
  "key35": "2gT9ESBatXBeVYMn2pLbUian6FjJrs5z2WputwSWhWgWitbnNCSZtB5xQJGTLuQoZ6Vja36pPiPguiaeNQTyszzM",
  "key36": "5NwkMaBjbq6QotEtaMmfpEL2qy511x4RBcVbPbZkBaCiwGgssuGbLWb7tTLmpuNMKK2KWxzc5bf22xE5jS77HF5V",
  "key37": "5vYdSfQNT2K7XzzaVN8xSittqqpPWj1C2vPphDb4TvTMkYj5wcTCtBKJL5yj7yECdmP38YoxbQdAJKkJm1BCpACF",
  "key38": "2WT3qgMPPkRpJGXyPfhsZn1GkfQD59Q5cAuWSXjPoZ53v4bV6cEVfTmVSX7nbmerfT9dCnXsc6FEKKAQCjwQf5X1",
  "key39": "4jQQr4Yf5jpEp2AfwbyJ3EYMVdushfgd9jQXfGGMorgsUfSVbEkTN9ARnvrDGyn63Na2jYACpwYHZWTW5rs2NNMa",
  "key40": "3GFThgE4xqXLsMw2JdV1dUYtR6sRdH8vi73U5xrixeEq6eM6ke2WaSkCeBW2taB129iXJYgmSWJ9CySH6Bx7oTWr"
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
