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
    "3R9Km6bNZsHPbd5ZeGzPRacUA2QwtQJw6tKLzmACKbEcmtk4i9rAwGZkbbmRwdk9AF7f3MrhZV9fWGd72LovNgLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vBt5UKp9m91MsEX3wYftHUc9nQysqY3KGZqxWpop65Hw4p8X1XJarvCEgeBXNYF2JFcjL5jJehW8T3gQwPgzyvT",
  "key1": "2xQNJnvDLGVCkwpdUdCnnL8FWKnpSbCP82j88ikhGSLG2CKUWbxVAFUkhh38L95XuEBTgpShE13VacBCXrySJH6r",
  "key2": "2F1qUsmuudcgP4tHgybdqt1WEB8Get5GbBppMpkFTfJV9ASkn475chcrcJwrzPLmEDDHcAxwvkR5kqbm7xAQCwK5",
  "key3": "4TbG1piB7qTuvrFmNDFHNPDPzAdTthumLjbsj2uWreTvD16da3zwxd3ZwqmZjDDSs3nZ6b1vDikPeDyf7kTTZNkr",
  "key4": "29mroKhDZKmQRXrk7x5Ld9HgxZMTUHhBgLErmBu1cqtd2uh7T2bdjhAY7JKfb1xefuCVaGxciuymgd8EW44rfroG",
  "key5": "5MhAPWhQnd3bEVjp6kgyNrXGmG5EoXvUcrBpKB3jp5jVqWj4vohSEk3eMYSvmMaZbmXCPdYy8Nq9VRNCr9wdF63S",
  "key6": "359nc9PfX5TJZXdFk1cZZxpBJVywUXgoc142WqnhvJaNbhGxRgb4p1uTmEKpi7aFuDHknWasJBhm61R4Lnt5NNW5",
  "key7": "42TV7u5DiBZw6xSJeVXKJxZu397hcXdzDHaPmnRHLASW2ZRud8HsVVH6rechGPesoopGuTREdkRyGciQL3TSJtwD",
  "key8": "54uyr8hkvRyxwKWAd8NYSie24p6SvrUgKmE75BzZ61TQuFuAV6A4DKAq9coHfEruC4qptyYSdcohE8okxub1Yn41",
  "key9": "3FXzSuoQKftuXUxdVKk56eCGHsvKVjViw3hMdXhxgKvBJz1iEELUyXedBmLEbCtq6KCRfKekrPxMLCEyMc4DdEzD",
  "key10": "4i5c3AoKzVpiJQtFG3Et3VY4Fy89iG9hKj1FThEGE1Y7aTohKhhDSpJmURMwCT42V3PtmHziUG1KXqq6g7FNyE9C",
  "key11": "2eUuFEMSpteLTxVy5Mcvek5TnBKDWGrLpGbdUcWSrR8vjUwMJZVhbQyg38v7Mn9HHXunzPrrZvuhDbpFBP3eH4hW",
  "key12": "4w8hrZHYMQBvXB6Eyhz1SxH3AFQ9fzJWNnxb8fwfjgxdKPMPCwPNKK5AEovFgTu8nZvgABBJNi8nTctYfbWxqGQw",
  "key13": "2KKvWw9M4fK57b4hKVzg5SCywXFjWFCKZjZhFk1BBATrG9dcS9zxYNjHsx9ixJm2rsk1aQvTrBFw7qydUbKXjHi",
  "key14": "9HQu3v8bkA4nyGXsUXeKAx2AAndkf4Sf4F4YNzW9jfU2mX6CbenaLnqMKs3EwHBx9zVcdKYdfAd2hKfFRmTNfx1",
  "key15": "AR5LwapFYhL524wnQagWD2EZWxy1Hr1feVEWvpjYPUDQVSNtNigeqLfH1Xau4PrrzaqaxbThPZrzGdbG3P8K1im",
  "key16": "2YFoVubT3z14hrK6vSLVWhbTHzEEr2hFLcewgUtjKprGT2GDrRpG2H3DpVVZR2cvTcsM4W5oV539NDvvTFF66BzK",
  "key17": "GjeePPXHZW4MiCFYdGzQPETHBM3fFCf1m7DGRg5gYrue6rrXJAppmCPhR3Ww3s9KVqnM14tLg3VAjjZUWim1deX",
  "key18": "5Ni5Jhaq33zCgZ3fqHcV7pNcSE41hj9fapBGDgCrLuy1So76a69iPGzM15gsMfr1doBMH1tnBHoQoDkzCbt8YhhW",
  "key19": "3J5bbfMCYHmCrbtMyvpuLGa7aSq9PB2b5zivd6gktMRBTq6rVERMCb25jGg41TYMz28ocfzRSM9Y3Smg5uMD35j1",
  "key20": "2r1wn6yXXVw4N5xKXbFu5ayAuM3GVYq42rRCYVjsLVVd7oqoe3R9dkDojCvBmo12vEWiChLTVKi3BP7DmH35CzZp",
  "key21": "41xoh8HnTzLHUz3E7nhtNzhtYJLvzpppCCGeFJxxjHheQSpbfhpk5c4DxEieuszmsGniWvAN1pxFnMzwWtunMVG8",
  "key22": "2JUQQueM5c2tPXj5Dz8HcQXZbGvTEL4FPQfR6Eh4S8yNHzzjGsiYDhos9LDXDVqDmYspE4MRPpnyapYUyhGmYDgt",
  "key23": "5KjGxCPpFuQCXKh4kK2y3eh4sp62sdhb8LaVUteB4ARdeZW8P2zZzPpMKgv8vVB5K7YR1hdHA8xYzcjxLgkgv3yY",
  "key24": "2Fe5JJVJqE9pDoQtDqNp5mExeLQdwi7VnoZdSov9u75zT8LnAyxxTqgRe1Rk95aSpZtc4qWWyrUosEYKGttWPZa4",
  "key25": "24zDSu3UgWs5XAoyheGZkUDkRvBPs3M1uToAg5zAbVJ4nnPDJxebyLf5YyGvmVkLBTfrGGPJqTnqLmsud2pxEvws",
  "key26": "2SeR6UWgUvtNZ8dtMaGTs9VgVWy7me9djpkbEQB6VM7cbuqULLp1tquRc7qLWzWUtqitfMyhPbMneWMyaTRCeMQP",
  "key27": "w7zJLBNXRso84vbLMYYJawqDQFbECDz2ixB7ueZaFXsVGBg64JBTj2RoYT6duKBViPgMAjrqbJNP6kyjKqrHewD",
  "key28": "2T8UDGVxmFuu2QDKLakVUzD5Xz9da6psNQrSRSiBdwXvk69wmUACQ7vRFzfRiFWLdcAgihVPteVjD6XSZx8qVMCw",
  "key29": "382UKag5AhYWgbAZXsLpmZePMaQhc1xcBKG5cLo5pNVuiKxAZgd1BnDNUQe2qyNuYza4xS24yAVWmhmg97RgSX5",
  "key30": "3jKqYvRVjzmL2ZQwnwKKoqSDmBNrMwVUJdAbbRdnzh6CumUkT2Z9ox5DvMyEokuXUYbwpgTXhDNSQNSWqSnxyhjX",
  "key31": "4mkuFsBr4FsYqNtsgJkm39dyERNs4Z3zNZ5nC3JcaLtPSBaBo259SZUCzywNbgjoV8mBmzmANgdntyqBUwXi7oZ9",
  "key32": "4uorDNPhuzTuHzGS8vsNYNkyHiCyeTYkqgrfjAGm99h2JopGhv1unjbRTcHDqWE8y1XkL4WiLDZPF7PkgKpazVA",
  "key33": "hieXXoBBdhyoCfgXHcQYfjThCRhJ78xWDKAwvgq1ZaoEHxNjxq3LqFMy4kndgdz3t3FLSxhk8GJLa6M99wPRFbP",
  "key34": "3Cm1W1KjHSUcs8wPtiK7XMcNomMLU8hJx9StJ6ZpcKt36QmGD9ytFrK1R8iGQnjcR7f618qAca2PVDDTgb23bk1b",
  "key35": "537XSYYP1Lbji8FbugWCzeLKPa1wXePVtZsBipwPxm7Be7111V3Kixxh5NVMShYKX5pPAidfGstvkQb8UytmLWch",
  "key36": "JGEjp8hHg1uVX46zDqjBMTFA75uSRUaDbatrP4wFYJsp8SmNMhxMR6qka4E3DAgBdtSzdF8en8LoZz67e5TRchs",
  "key37": "39JaQCinQBM5vRgZMa5eqZ6MdHq3TpLzJEby4MMiqgkUwtih8jPaMnR2SKXUXosa3NW2Hzuoxqs6Mt4vPHbuzinS",
  "key38": "2azx1KJvQdgYaGDM3Y2LRAFG6NpSsANbV7eub9BJRVjQqKMs8ZTNW1JuVGDGw8QVWqAVNPveJjBQYhDrpdVzXZkT",
  "key39": "5BDX1MzuxEgM6H9RUd6u4fBeQQtEqJ23thdCv8frj6Tfmeg8jU5ESHYofz11w7yEZQeEteNtwhLiqit2Q8grhuXA",
  "key40": "3ViYPitWksbxnA1btRo9upS4JvaKjLKfdysaq8DkFHxZLcjrnBc49RM7MuBAmPRoYQaL5iyyMGcFrvGmjJ23EaF5",
  "key41": "43xqtxogwejekJByFjLzZhbDhQfQGJqBNNxGcXyKJxzqSE5Kmm24np35w3jzixbsqeF69sYsBdd7Rf2eCFS43sap",
  "key42": "4q2kDeEcvKZW5HZdxuXY9cAJSsobEYYRAvQyxVaB8VMgpWskANXRLpaefvsLuAKYjBhgPjC2Ag424FPtpog8vwMP",
  "key43": "22n8PX4Bu7E5PD3hwPBrxoCGbJPsUX3vSR4GGEtmmPYXAUAdWsTc1EUfGyK5ATt9sqbCPcvd4aNvnC74MLjxxZbr",
  "key44": "2Ey5V6DSfGJQnCHghmvvGTb5T1hdwHxQLRM5Hf5Vp3acg9Zcy8EQ4YBzJyunfizHkD17H5auqC2wu48DuZ3ZShVA",
  "key45": "4DVrgsYJv7CVCrB6qeTVdUc7nu8sDgfwc1L679WrsovWwh4XBVV7PyyDmyxhKuNNptejPgph4BnWt3KjDYcegVGQ",
  "key46": "V4f36VEZAKLm28gyfQZqheeEWnUYYeGMhypaK96cEncSVgc7KfVftyuoo9cGnTYTUKtiHLEW3MSvJw2XjcjF1zK",
  "key47": "4MW938zTvWvg3YHfEbCubHHGauM8cqHtVQFnEpHwqYwK91WjdgLm5xxh3Z7S5iYZWF7wAkn4DYpchX9VW13es3rU",
  "key48": "5yyz6xQW4TW9Gv7VEEcfXhX2JZVysncJ6LZ3kwWfrxsuhZ8yreXAH7ojgnpJyqg2iZrVx6Le5ixs6GDuJnmrfhuH"
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
