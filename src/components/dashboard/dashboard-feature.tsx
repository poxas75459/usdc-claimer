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
    "2ExksbjWWxkinj8T5K9P1hgEXu7VJCVk4g8fSmcUniDnMcuBweAyRYEiUNEoaJ6QPER27wjdt6hvJvDoSrFVM5ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eUkq4vSVEg7QVzgvJZDRdjS6N1RRSUhwvi929oScWeya3e16ngAhcdxuVFQ2YqcJFh1WZFyiw2hXgdBbURy4PMz",
  "key1": "QbySacRpXaamnNvRzuNESKQb5RpoRGxHECBdJ1VvTBpvxFB9grCC71cUyar2tAXuipBjsTSfqmPg7jtC5Q2PhWx",
  "key2": "624tBytjDCtYVpuiawCTUaELqeWeSprpxbTJ5MUb3Xmy713QXzXMAQRmDCbksVir2yjQheR3Eq9Je1Kgjpo7Egg8",
  "key3": "4TmQZW3Dq8mGtZaZmqXQfbRhjy4FQcHFXspbc5qCNJuNebYB4byJGDusJCa8B7GiQ1hCm9y4g9mwcoASXRddLGSE",
  "key4": "3xnffJCoDVzPdRUaq6XkaZ468pCmSnqNG5ztceG2tKW4wM7eWXfo5VWafp2aSkeZVnFVwdqpQi6f7rvSK15jXNjn",
  "key5": "46ywk9ziyohfgXNa9xP2cGcGMi8mCttkFcHd2hdZsQCrMGkeAiwy4VqEZj9KhYHQGqHmuZXAu6NwvAJJQD1NW28R",
  "key6": "5eaHXnyAsweX9J1M43F8TCWALiKtM6fWmgzpsDmUT5xfkZpQg4b2qwC3wP8UxbfhEmK6AL8sgPYj3BwDEDnZzdfL",
  "key7": "4zk6KfFtoR2rRQLdTqwdUNhNGZmxAPLss6yc5rmMUhnRncDgRb8bhvsCvVToYidswPwpnifWV85cY3ozsmsRBkgp",
  "key8": "5Ka7nF8NSp8nbNKyTGE6jnCLe6wYEG7wqvRysMD6bPhbdkhT1MsNz2GvVgxV4FvgGrVwSBkj1xFD8Bcp6LH2KVcJ",
  "key9": "23cYqiwjJ3ZbZYLHni4qJ4CsE3qGXbrybxPwjer4eB2q3Trdqb6LeaBVtCPZysGgPUUXmxfqU3wvpGds9qwnUNb1",
  "key10": "5m5dnZnntc4QmcnPxkgrkB6ot6y1eG4pJMQHY4jyRRowHJHmEeDsxKdHsELpeihW5WVWitYEu39jmgSyQhsUmzbd",
  "key11": "2c1vkx624VngQ4SyxevgKJNJEFUuWtW1qYRyhtGTxvRFbrD768HGxL3VThn2rD1KZHfnr6TyDb2nLcyJHjjk1HXQ",
  "key12": "PGmJMXkKYPzqthGdkf5LVFxGEDH3oApnW7KsW3CRznD6HbVV3rRTugBTfvEsWopkb9Sgf7n4XKgQuAvBgjk9VT6",
  "key13": "5shvMEKLzsSZf5QGTLdTyE1v2XUJK1xVornUd72W6N6jQcynyEKShU2d8d45AfFvFL1VYXauSJcpJcHk3LguwAiF",
  "key14": "5svCZAS4SNtKma1aTPvvEissxRmQQ68ytePLXBcVwcxb3qDhtWuPPmThcQ7pB9aWNDSLRW1TsQ4ZLm6NUwbdZ7S7",
  "key15": "4ndvam5PzUdb77am1XRs4bE9dijPBW6hu2zoD8i36XG1V2kMPq1X3Bkii1uGsS6mNLEWhW3sKrLBzQyeMRNgAdMB",
  "key16": "2VJYbbZhbpcat2hAMRx9usiXbbHtAmynwH98y7jqfW2XVLaeVAzJgJ129K6DYnGxoZiCr6eBmretienveLrP8KXJ",
  "key17": "4rdbHpzyfKiDWiwXqAfXazxr5tCUQXk6XWQrsvXztQWLHUxH7u25LVBiQAvqR7dAtcdXnGfi7cAyJpDsJfkn1zFY",
  "key18": "972kyP5P2o2nDu5L1dE8r6xNTMYDnSTiATCa2ueFDVnpBaEsmMi1SN6p8DM2LU65ddPg37F1LQyBFvfNDge1DcR",
  "key19": "43bm5VTU6SXjSeLHiof6838PTMuUe2M2wUpN7ACkxB81SRrSF9D4BQNySdofrqfQ7VPEUujzMsw9Woc1LChr3jKZ",
  "key20": "5M3r8NyHsXGivRcrc4A6QLcGm9H6Nv9FHjdEoYp5ZoqKvuC7gGWBgwHxYZG2j2GPq3UGJ1iybWnXEM7rXDs5ndd8",
  "key21": "2whLugPxUrTD8YvGw6XUjmbppC4da4hwdWU4CvDo65vE2HBSPZcfXSRNuQEWMLbVTwWsEkBU9zdYftUqj9Prcd6f",
  "key22": "3m5qSkrtANkqf1eECZMxMWDPTEEV7ig7hgxD4GWbDj14mgXS3KMBooCXVJDBfyhoctb8VEkjnQeHzxAGbve6ZPbC",
  "key23": "SVAsV3gHwenNdhCv7Yro1fgS4xNcyoQ4k7iNEq2FzJHeGP5XPu4vZf2AYC31XcJA9Va8Bf7zf6AQfzBTCtRorWw",
  "key24": "27djHvhGHd1HtWGZeDEQHa2LjJH56TdbQuhhQ2NLBhvdP5fPQkAXLFUrVwaX5J4L8jrk8xncDax3hs85rNXPKmG2",
  "key25": "2k5K1vrPPddYgnQSSXUatwCz3xtCvX2XZJ2crAfWZadzP5K5hpyPkEKwmu1JM4PMBRub4S9SjXtuxiAowMX7kqFY",
  "key26": "2ugbFjeGGmBrUazfa2GA2ownzaTfKHYSXv7dPce5GbpuvNuqGWjL3BPs1uqHaxDunLFZavMUXUJ7FP7jMjc4XvRP",
  "key27": "qMDwGxs3DRAJUHBWt2nFHeCfG2SS5Q6BUyUnfbX2B6ACxzQdFSh6MYwi3JKkjNUGjFHR4CHNKeYfZWgEeRdd9Ak",
  "key28": "47gzDf1okV5YdbaqZUmsMb4s6j9eZUwXrkFduX6eM1WwHcWTajSJrJ1XDjiWa3ExVK3YN6VhN8S7hJm3GquJoSLe",
  "key29": "4nmwGA2mfC4YG6FWH9RpaHSKewwypbAkB1rSFXUJZvYNoUVqsPePwN4rgvpM4iJccGoqUitrmqP3YNa7tS85LtYx",
  "key30": "eLQ8G77wTMWvaxbtnx1wGkMDHkFeYtUPh8jjtJJz64U1WMWo2HgGWpr5y4Mf7vTNBX447V5mxBWTVe22RwHLY1W",
  "key31": "wC5EUVkw4SmxzqdKH9pZV2if7ajrfxk2Yc4fH7GJ8CfPCT2ZeVTr6HTsdcHeC79H6F47KaFiQw2n31WeAicTFmK",
  "key32": "4aFsNFKnSYMeNcsfZhRYL2dEu8rfz5D5Mgd1N3reSwkgRXVqCkD5bcqfSe5Xp6StftR364B37sNjwGpECdqzMoRQ",
  "key33": "2nF5uvq6pf5C5qn8xMMRUcemR5E1zzuuMTFPm7b6nRx8GwYbL1L3TZFuGHgRUx2nwxyjJr6yMhYgit45wUxWu8Xz",
  "key34": "2ZRcTgcDsQEogQJKjz2WEF7nSZpWoH36pgA6fHttpmPkZ22oqMBsd4k5PXJUJpmH8GJKjLsjCohV9V5gb72nEHpc",
  "key35": "5D4t79vapsPqLBJUaZiCdYYhX3CY6QL54GXeRFViFuR85NN4a8bxodcH5xBv3m1BVoLW6RffskC15zULbyvwMvmy",
  "key36": "3vwi17UnqnkBvy4RivB13VdJE3tMWSf9c33tcJH9ALZKMri3RAr4wVHAUboZqrSysSzR9WP7hhynbuUfgoEnjxmp",
  "key37": "5YdM49joLoNen7EP7UksbCUvCfJdiRdtG2EA5txzS1aNB7qF2M1nWsLLhB6LDcTwNcg4DXNzM2vCUsVhBFbqQZf3",
  "key38": "5x788apyz6axRuhuYx7wLovrfp5xqvv9jjggYrEuTX7dqRBHH7ETcE5azCrqhk2pJwuzT5y3TtmGkPMEBRNwUjcf",
  "key39": "36TjWLikTujbxBmvVqBJ89o4SdQ7qXLMVAX4fofLn8RMUYUBG2NRrnftFzCT2mUTjegPJKqjMzgShJ57W7JxYguL",
  "key40": "4oSYHDCumSrydbhjqkRHVpJxpV2dtm3nj4oQkB7ue2jgfBogsXHddrXzwL6TEu9XKi2nczvYtaJRJgi5nFkYqe4j",
  "key41": "a2o4rAFYJEyPjvsStDVnzVRpVmhfYR3uiK7TJQL8DUALEepR4VjMdSfzx1UBgGGgytyaXJjytXeUzMHekw1zbey",
  "key42": "5EJ1UwRJnRSpcfAN1Ju8N7jHvTqbwwLpwcJe6UbLNcTdMGP1RTakjC8quunbpdguyVLRVYRaZDTJf5c1g5PFGc6r",
  "key43": "35JbWa33GQRrRShqMZUvJtYyzpE6YedpRaZ4iEcxiL5x6rg5ud2FM8Px2Yg1yMgBbdG4JLAqdTmkKUfme2C1Wbbr",
  "key44": "2mhKjEAF5BFonS6o4UVdZurXKrnJsZgFbsgKLj8Re1yumGdCcTqVUbc6z22jZgbpBFE2wtDkpJDXJrx7592P1GTz",
  "key45": "4Qc2YGvtrB41HLqsiwmqKCMGKAtbwEZSuU99CijRs3B1K5Fu5SEZeVMcwQ1ByL8AgdoioyypnTbCJcdXSE3hqnCT"
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
