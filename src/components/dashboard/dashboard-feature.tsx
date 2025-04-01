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
    "3pgDMvnKoKfZFC3RjBJj7eCSbRtM99USyGAUZctkD3kX5vw5So7pwrdEZwSHrpaoXY27vS4GTwsXUbpMVFbUDYaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qLbBCkVVWZDuQASBNBF63BQRb7CuJvBpChXKgJQDSz3xhMB85f3NftpFc8LnZsC63wMkSQgEky7uZ8TdFU4rsJy",
  "key1": "4L3mY4TbcuxAwwyyNQskqXFMM5LwpM3zpFpG9axm33dempeEGTvmXWK9o6WBz8pueD62wsGgMue1MgmyeBWwgaxp",
  "key2": "VCpCge1bDd8XeDPVfheigtPCsSGcrjxegULFvnNd4PzV1XpSUWjaZqgADAVPd4wv8qU4owRXobqncjBSG7pAyy2",
  "key3": "4MYfnBa6eJZLJp2cFqBrjqu1npnPan5aVh6BfRauBGGREenCCxcQ7tE5M2mjWJ3ow5c5hMhLxspbxbqk3X4rVUsb",
  "key4": "3EU383o798coKgx2iyH3Fu5wrb6Mi5z9eTiazJm4SvSYDYWKc5DkL9GTirF9Yffh8Wa3fWQaXiCtrb8f9Rx3bnQN",
  "key5": "4f3tKUAPWT4KMTfzrhFNcAyM47rT7apzzWuwMUMvZkzJ5D5CwWk4jPgmp6HbKYABh4oA4fVkbn14NLNL22yDfJsD",
  "key6": "TBKPXTcoXaPBtPsQz93ZsFdf2rn9rKbZA9Lgf8baJpCLrQRTDghWtrhAUhUuSuSieAgXYvCP1PeoF4gUPEETsDi",
  "key7": "4QFD5dfEFvnFiKsWEnJtigcodJpR8dQNjqbV66rDAnMfJ6NUVHYRip1CFQApCmSrj5iwGmE8Qx79W8Rgt7PsTNL1",
  "key8": "367djvpte3daQtwuxp6tyG4uWTVKWoC2nkS3VYyqa657t6sbBxCrxo9fDvSj8uUa1KQZTurnpj58FFraLojnyJqM",
  "key9": "2tN6KZynQYiasGSY8JhQff8codbwivfHDiFd1sw3E8fa8ZFm3QT9jBPzATXVf9DBTDgGLCss4uHLKaVttDhqnc7m",
  "key10": "4VTHyaEnLoES9yP2ENjQAsCY7S8FZs5C3yfKoZFnvyEgjQxRKqsdnGAmmujW8DoWHxf7GF2cg3JbUJaE1KEiAfe8",
  "key11": "U8pqkrhpCrNjhrgVXL4QtTtNs96PpC2m9gCGNh4xh48D2aQazJAZhHd1Q8XM4QwzWEh6VEf1wM3MmJUhqKnTymH",
  "key12": "5SJshsacUdEgeJDohpQZgunA72CwMQZ93a4gQ6pwqgAjs1jLFRLcbhyDt549DrnevpFQUwZYhLErPCLK53cGpEbq",
  "key13": "Du2Fquu7EAorNcZSoAjLwmZic9YVFuxhxGV3d5aHbvoNBmnj9xbpHASHapmyS9hLjQXnoAhVm3rh6h7TvxJ6xkF",
  "key14": "3AL5EAbGo1pFNogRFS9oSmLhfM3f3jKeg7WtuxJCDM8tquoqZZ3NiDwusr9argH7Y1oXzJkLE5BzeDCeWgstvBrj",
  "key15": "4mcZ7qq9RZzbNNM5GiWueNHTrAfdMURjTntM6cTrj3WNEiznQdWbm1Z7pY71UrJNxNG3ydF1YeSeHEYLwsRkZsv4",
  "key16": "2gTArYb1Vc7BaoHToAshMngU3kQmart4CSzugAZNvWxvEYK5curyDFSDnfSNe6KbXnfBqqY1bKwkNKb2rcybbwH",
  "key17": "4W4mxeSv1NUjhk78jkvq87xMJpVujHrEbaHyjWGntTcnHdihFH9tW2vGKTg4yGnCsT7J7u1KV58uJuwbR6RFZDPJ",
  "key18": "4knX1FxWp4Xq6bQTbSbPa8TzSrmWEqiMpzNHQbrojD1bxkRsjwG29qQoH1hVfzBY6tqSdGSF381HwtZFQDx6Hyfx",
  "key19": "5q2tKWkL63PCS7TvCUw52mytp9CpjCkCAmd8cu9rCKCsVJdv5trw5tzXhESVbar9L24c4VrSBayxqeNQnY8aNHWE",
  "key20": "4xUJEK6pt51r1AgSCG9bEdp4pkmshy6wuPLLn1B3GpTsQ3AtuZLkft7Vypja4gzYaT9P47dCRVUQa3ZAJWH24N3X",
  "key21": "4mWE77gmW1fRWYEvTEwWVEbkEKeZVRdbbsh9nmvvZr59bFVw8EeryZU8X1sTTjNS7qiN5X8Rjm85azhW98yeL38D",
  "key22": "9DgREwtfZbxkjSsv9cVo1gkzjidVBEnwTkDhfhMVeXLNTrcQddKmLdCEEaYfMRxc5rAwRiQhhsvtVcw6dsBE8FJ",
  "key23": "5Bvsp2YVjYLacasqhJpQrjGLHMbnES8LukqyXLBBWwE2GXK3M1wn83Y2qU2hktJRCC1eHHjmvq8Lfekd5mXfdvSk",
  "key24": "ZY9GZVfXJWxUpJwxHozD2NTXKw2MztuYKk2meKUzRDirzWVCUYJuGdGtjak1h2PGP9Xz1oHZhidLwuhT5djJAsK",
  "key25": "3P2QVEo3Wi3N3Jhv3cH6ZqxFipSp95oTqAGFEwSKVBXtsMFMCzqTfCMCcAGiHFNSGZPPJmE9591Qo8owtPsVVLPL",
  "key26": "4btnE5cxwxbfwwa2Pf1aPzim4YU1gFWSD99Ss4dz5rhDRRMCz2dm4ds3NS8ShBwJ8tXptvSD6siCMAkSTophXhJM",
  "key27": "589Fp2eFZvEAPeYKsPEo1soGGv4RdffjD1Eg2LXR6QrUe1w9Ni2CmYrWQ5wwsnRAZaVGRs8Jk96DjJsTpLQRvPe2",
  "key28": "4cjJ5jU7XsgawUF2LoaukCV3rJEE34uZHSrd9n9uxkoKN8siDh1DrLnUa4XVFYy96irCkMgM9V77cmTxJwP12FUr",
  "key29": "aFcsdEGsifQowfurpoxQV6j3zXhePEe6JpSrqJjutVnDf5LDVw56CMMxBBRHnptmTtMETt3MgT3v3QSFckJRZnP",
  "key30": "35uEQvMEjJuVZJyv8Tryzft7xqExXZaohRSA1o8Rwnibk8dM2QhUD1t9v2HYmxQ42qr5ef1e7XZg4o423qgxqpXF",
  "key31": "4oUShMKcXjsoPtdVhLYCpF5bzCS5ew2pd21jvvEw16vJRx4EhD9giS6TRHUYx9BGyd2aJRbTkgiq5XyAjuMBHqcW",
  "key32": "2A7S55FTeqybw5to1AUVWBdyW8CN54YbAdwumV7HBSKEWuLMjxqBVvMCpfiWuGAWqW6G4EcEMESuevx4nmqbWWMR",
  "key33": "nuhNHVNyCReMoVPoczFZ3TpdVt45wpcEYKA1WUXpuvSh1RrbQeK7GmnhtKEPZ7eAqUy5ekbm8D925tCRmcvXdax",
  "key34": "4FSWjCwoKv2pzxXHmTLRaHSDYjxgEsJxibiQxPBQUo9Q81QZviLGUN9fhA7xeeidYNJf8ZSqajd7WiVG9aB9ohHj",
  "key35": "qfZjyf2rRrTWGCiUzqEUG69hgaTqx5FbEsrrToT2Vp4SS1EcokjL7raV5iv25XdX7wRUhGjnNEbJvn7dMENFdsz",
  "key36": "38BT3bsv5MWD1rooJjre77TsVMZfsARDCER3xLaBRQd2uJv9rCwyybgkcHzw9j6Hma4DZaGghZj5b22fGWmHfuhx",
  "key37": "5BTLvP6q41c5CXWdWsgpgYpG8QgSqtPC5rCarwNhXwvDtC5vMwZyBgA3Wdybq545MZgmkvw5BmPwDzUXVhNMRf4u",
  "key38": "5kk4MVFeaKBxweiJEnWpbsuLqEcGKQUtBJRHBmNzb5bMUgMBZFN7bkfhH6xufnbZV7XvscLYLktymbCDY2eHzJnK",
  "key39": "5Tea14vJxa1oCvwi3peeri58jgXgmqnpzF331NZuG4UnH6wMs9kCn94vRWTj6XnMtAJxAWE7zTRPMA4W7u1SYhJh",
  "key40": "62eurHcNrwnhALh3TACT4xwW3pjMyBwNyrgj3qCufAyrxivVLAmiwxdVH7U9A58cWRzu9wQwrMetE4mmnzbgDqBo",
  "key41": "2GoWi2SwwjKyQvniKY9FGULBy6ccEbaQMxB7xfb1bjVTrSuausXDd6G5QS5a1KCVNnLcWgM52L5JP1hPX8oafmNQ",
  "key42": "2uT2gv6BRU1Kvn6dwZMyJSrapzDEdG95iGDhdfVABM6EpFN8srWMczTNyJHAMosDDnYcFFFzb3U5TPcxQ8kPdjg9",
  "key43": "t5t9yDqF2ic6W33YrNAULusMciKCPCtKNzkS2eDBnixR7opSo3UkCeEnLgT3c83TRuV5HsUY6yQo5f7v5jgnnba",
  "key44": "3zPT35cfyhaxiyQ4ZtbrBZfDVmnjwZfQCKEpxfe2HQCDZe1FoRx1WE8gquxfqpRqAMPh8kTzvDNAeocKxvPBur3W",
  "key45": "3nLC3SdERR4NoPubBTUyJy7zEkJi6oeHXqWc3Wz72sTn867KZszccVRWZm525k9HSxov6Casdey288yiCo3seeU4"
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
