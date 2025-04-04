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
    "5FRK3SZPvYzqotvptbxZdUJJLg5uMiKUgfb2qFS1S6AtFgv3JQgCewmWC7Z4bYNAwG6iwU6L31gbg6UyuGTFv7db"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MeScNuQDnTi4czEVu81gdiKTMxfjQP4RJn6bVoBB9Zg4Xh96Ajx3qfqj1nmZaJEcz7HrT2LVCwjvT5F8c7ynnKs",
  "key1": "47V8vJBQQUPnUWe3UPXHRb9MbVBk7J8GCStJGxSqdLLHD72TZa3Wu7gL2wSBiNbUT6j3n4Kpvzzg4SZzj2C4VqVT",
  "key2": "FcS3ST1UM3RrxQxg7xCfF6rcaD1kpyQp4AFqLqgVvwq2eNAKqZ9wpxE8V8E7yiNh5HyjVNY7LZdzSPcsLmE3zx7",
  "key3": "5rCpEJskfchbXrnAexWKjBpKUyWtex85GGpadgz5joNkub2JeY9NZSRPdN7enP3Vnhg6GqvvRUDL6Sr8mzPdMY2Z",
  "key4": "2CxekAgfhWgmU7UQvK5DVhvLirnmKFCk94hvXbE8giZ3HZ89qXLWKoiTf1NMRSnNHERd4iyR7tA6Yv26XZCDhaGP",
  "key5": "4H42EDAZoM1PVP8jGKB1kZh8HGUi7ki1JfpJi1DYmZLPqi7TkSoiYKApPgUWTmDweUYA4o5DGKgmaVyKTeUwQKMb",
  "key6": "4Df9VrdzYLEnQdcvw55EJ69WdRzasW9UsjpSjdfExEMN8Ke5yewH8hPXYFMBHu98qG1SgS5YmgWsPMprYtZRLpwa",
  "key7": "3SJ2t84ifnfwuZTWmz7TeHDwN95tXGu6gRD77JLhvTemL85s7EWVZ5anyVZPa1haLrL1WawtCN7CcN4KjnWLodNX",
  "key8": "2t1TLg5XqZ3EVup7A62KXHG7hMagBA4SGqKBS3h79wR5MHcmGnNZGbcKd3sp9gKZnwdH3RNTK4jez3stQE11rYmz",
  "key9": "42vCfCE95m8fB8T41k4GrbaFAGEiYsyTi65MiqHuo5awxudRt7ySTgsyyFmAEML7czGwUUj6CXXBS9PFUbfRvGor",
  "key10": "4R3a6ohvx77uC3WnqEn3d2iHAfS4J96oha9YTyeyrqviVmM5z9KpiU9xLkVXuuqhz5bozKCR7jvNY8mTwZM2Ui3S",
  "key11": "65ti6T9i4G19hTc2rUT5TRdZVcsr6TQSLSZSiHacAGefqBrSoUTDsiEDt2RmKaDrKi7zW7THa9TLzZnFZmUaRGFr",
  "key12": "thqRwDnpsN2Wh3QHFRVudhRTj8fbzQap8vUyHmaK6MrKzChNTqDn289Xy4jWLAdLjjQQsqnvApmxAwKDhKUNdBc",
  "key13": "VUcMMsSRhX8htYvTC66utSnaW69VyNrJ7am6JovcCxUHDzj4ub1C1We73iwDq7hXYcUnvkg9vhCXpNZN7tLe2ZP",
  "key14": "xypt1h6ceqvcjzU47V4EQUSGyVdAFUkqTbr5Ynw7qmEeTXq6usaoKZNw762B3QVFe4fApwSmsrsDL37ZqebGrNU",
  "key15": "63fKqrbf8B2Am37K9P6MSzrCzW3KtZX71aqiwDgN34UXYBZu6ADQy5dSUYKthyur5gQk3PDtxFaZJ9bYc5ngLBYo",
  "key16": "3DxxES3xR3UKaMExNYizehBio9wpnJK4YVgzQD11EUNzwDcnwfbjT7Xr3b7F1cmikspN2Ppnq3oQDVFPiwDbdZCc",
  "key17": "2EzVGFhorP1G1nqXXSMem4dfnnuPMsthZkK6RbLCJP4jkQHQ39fR52qGBF9qL3W6jkpPEqh8dqz3Qf8MAewsdTLq",
  "key18": "qcwK12JSfKZ9TUxzK83FX3dsMxrHzM2vQUKGGJQL7x1P9v24XJrarzQUfuu8KnVKsTs6sNNL6U6v29xxFFL9cMt",
  "key19": "4szUfEhtsKMCWUajc5NTmc5kVWCitJWkG5mzw2oQKiMVhP7eSd1td6xCbZyw6t9CnwKRuNQaPppNtRtGc6eMSmw6",
  "key20": "4VRPRVqgfVPDMJSJiFTPxNvwKUK8U3qagJm6qEXYHiWG943MReH5SWHmUZnaUKjCPMVa3J6nmd7JT9qs6CgRNfZy",
  "key21": "29V7CBSigduLapQR3wTVMxJyHP672yvAiXfMFe7egkC8oHpozY3fP8JeCRdFgKx9fbDHtgQL285uEoPJ1A6fFiBG",
  "key22": "T7BHNERKhc7ZSTWKHmZAhN179ywcdgNuqD7Apeps7vMkKacNwqAPz3epjtFaE7hJL8rZjfanmg2WBHwQyu7uSGW",
  "key23": "kmavzA1EX55iDy1zyTdUVZBxhrRnLtaW7Cps1rLf92cxiumU8emRz691ZVKVM3GJQaDUHP6STP6BHxTfvRx1nrK",
  "key24": "41NVERiWvfFmMx9tFxfnjvGjwUZYdhXJnbN2BFLq3jvQKVH53tGpSEjhn4XZ6UtPcbVswGKVU7bQzRztCQ27ZXWx",
  "key25": "4oQKkmqynuk9oRr2yT9hzLwaLv8oxdova4fzv9qgz1oxSdidVvqYkciJDeRYZwUjqq1kxrz3pLp5z5tbFMM7zPbv",
  "key26": "36hW4JQJzvXyDeWYYkzEZ3EkrNjFsfiKPfohk2rYDQJ1RQzsHTCcWMP51ZXe3zpGuA6vaT6qW67dM8hLUQ6tVbsJ",
  "key27": "3iqqgp6E5kaNFmwc1ZjRtLFa64BTyHQifKxiYyw8BLaWVU8KyTtRNAH87E2hX7AEMkdq9Y5Y8ornHGLwXbzJ7Lp2",
  "key28": "2o6ctujkcbGFPBX5XmQxidxgHFJgdUEckCATJRTUsDJfwXmV7jFbRJNZAcd4fXGC5QNbRLGKvw1VcVszSRTHvEUf",
  "key29": "cXTmiwTHvUMmRyTusGpEaFzsaLoi7NrozgHdb7L441xpEuWAavPE7RqH7jSSnD39QEkS3tvroLpV9XfoXmzgSaZ",
  "key30": "25WVs23vKGQvM24U3jFEqqgg1zt5zHAARCY6Bxojyqjf6TSJYaFHpiuYBQUvijrWbAdTNq5MHLwFtuuv8RjYjDDD",
  "key31": "3Qu4VnC5DppBDVGfukYq67tsTJwuJNd6UYthUx5Hf53noEgyFH9N9WjBqiGAvdv8Jkp6fxfqu4UkyKqVsgw29JG8",
  "key32": "22PdV5XjKftNDyjoHkvPfwYmKiYZxy71URkNqwE2Zj9Cbyh7EHjVPsTPkfsCxwh638B88N4BbGxr1abwhRKUpimH",
  "key33": "4jNkDRNnQB8oLcwpzB8AnP3ej21NX7Cc2qiLVC7CPTzRQPLDcMJuYqi4mih3khdL83S2ZCM4KCgtydexEzwtQdtm",
  "key34": "4zwQKN3wFhugthqk2DmxprKFAKD8JL8oC8m59oBDTKSrVZyb5A9P7BYkH1NovdXj1jmxnKnJfvH9DshLUe6fzJwk",
  "key35": "3RzZ6yRCBVGUPwnukxiexKLsoKn9iC1pLpmYWnUBve9PYLhqxkv4oMf4jLs3yvqH6EjVhawHVkN9xTisPorWB9ML",
  "key36": "4EJrfAvPrs4d8eJDrRAmsb1y648LbPJvGj7ve99nvF9BUhieHkSjmGdwke5U13yY9fv5mibqR6x1HWP46jpuiSg6",
  "key37": "259qngvctd8MR1ysKKRB6BY7M9zMSvwyDfnmhXoEWpHLi8UdjGNqMT8ETDuMxQD8HwzaCSi3Zp5YASYtrNRL9DrY",
  "key38": "31krPUhLbnCWyUvc3G6FQuYeua4Yz9L7bV6FG2oR6LCo9AfAK7kPBWHvM5F25dSX6J7J6sutFhpPCdadKQaTdTzf",
  "key39": "5C9jiNxeNN76bcU26zHFxvP8F4bZQHNg5HrYvJEHgUn6rx8WvyHtsJ7dinNfUo5o8FgKpfT9SZ9DAYkHL5zh2nAq",
  "key40": "39anL7hYgXYCosNsDytzHEVb1ywQm9Yhsf7HK5V2nPEMXbGa3nCqziC7K7kXgzcegE3WXQQQhWF5NtjUNZUwrLZw",
  "key41": "3XANeEUrAL2LENTaqAKynFcoTQZHnsRuKYSjP7vDsMoTyNnqqmPcueGMtEmJAJr48zpwQ3ty4Huqa7w8hFqkH4wS",
  "key42": "42j5xk6K6z8731HCfxmJdVCyi3sgJFS9EeeNsYvEmHAjEAmu4Awa34bJThbx5K5yNmR4VvzNrH9G3r4nspDm9pEM",
  "key43": "4ANHh9v1q4gDAabubr9PgYZrhRrNcCSyacuUBGQH68Fp7pVZqYc6qGxXpP1aodEigJ54Qxc9a3UgoygGqjQkGQdS",
  "key44": "3oE25r5atzM6LofAvGyahB6r9VNLiaQh29MGsLynKCE4umuVkKA31Qtxqu5QVyWFpBCotwckoCjbC2j39wZw6nND",
  "key45": "rFvrDe3uHYG4svTDPMb8EU81Ec3EEbrTNAod5i1tTCxX1gFNSq4zBJVqDbkFBekpHLiX7QQjybvgxgTVa8DcGjL",
  "key46": "643Xq4FN2Co2ydmZoDZUtDvSum7wDa9DYzpbD6yCBHCjLJ2b9WoN1BLUitaDDgLNNHNuz1TUXrQ2PbmpNV99H3Tk",
  "key47": "4bV3sukWedXZk1zHbx69NMLVnHe7YUgBY8jHhBjnyoYWfDhbn5P7GTTFphJoj12mHMcYJd8EbnfALHG2KdLgtrGR",
  "key48": "hidjwwTuWZnV8Z1kZrmjfjKB39oCzh6BsvmFSCDDFeKz1EvTM86ZTjGQEomc1BFUrZxXG9Hh8h38fHMt1YwYctV"
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
