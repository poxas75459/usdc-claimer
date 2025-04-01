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
    "5S8K5ue3jPtq6Soh6b647wP3JSYn9mfCuNAEzN47JKN13TL5DKATZsJPQxnHpeKHpaLPoKTzbLGV833qNyqeJvEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oduEBmgyiCBBB1xpzfkPkmSheug4EJQ5SBokzNEe8KZaHXAgLghoh3HLmkBacN54kB91QovsEy42cJiKTtsQe1E",
  "key1": "3HKGgDbyxMUdtb4CJ9t6oX8zLJ6ymcA5MZsMzaHvjuN3YCstQLbJTntUmn5bfj83P6kqC4Hu3gaRJmgioGgmpU3F",
  "key2": "2SNgNPqeVjUMwETB4uBRxSVrcFuSK4YrXDFFC7vFTa5id3dywW2XQkTCWYAmQ6wLzAkoTnZ6FBTUG5VT8qeirtYQ",
  "key3": "PSEvJpQoZSi5M1tw7g9cHh29niPzWXtsmCiuyPkkbqAV7QaWafhDvRvCrxUBxxwGqheFEbYXyhQr6fLtTgtakTs",
  "key4": "226SfnschYXW89MRKt5vwU2WWpcxE4wPGTdkEU1X8FsGwVaGQoAor9tBjKquiQGiHtmyKot55n7uviQVUoeDY5HR",
  "key5": "28TFgu3m8grkcL6ayKj63YN4SLAYEasEfAPbFb7ZX8CxPVt6z2VqmaH3RG3rTqz8ZE5RW52AD85imZiUHUtUfbU8",
  "key6": "5xiQDo1iyzbzpSZWHGCTHJbma1ExExRUxsfuhUAv7ex9CXszet6aSFS93UokxPBq3iPTqb3jXH9wpVAssdnE3G5r",
  "key7": "4Xn6dzryhY8Ris917e9bLah5FinkQ9VjmDLtdTB69aG2AWyQwzzECKoF3HMh1k1ZDzKzoqnmEvxPMTs3WiFVtm6p",
  "key8": "pMb4gbDVLWSUBeydUR3Bn3EobRTJyzmHQ3nnqcMcnE6ebeKie7DbTjrwub6p6t8DSq2NZiW85zsosZud8WgvAve",
  "key9": "ymqTBW8xLcve3mQxxN62KsZZLSQ8uvJg7sZCTp8xS67p8wzgytAhYCMGeaNLz2whrhapVJDgafuRMBiJ1pGZK5d",
  "key10": "5Mx8rHAAE5aE6gL5aczWLcR85fhp9CJZhRLDGLti9Sva2zy5A44mFRJ9UoBrxMfHAVa4dQqeazxaWDqYXMpRCNZy",
  "key11": "2RPKMDKhGKDFHdx5kFNm2i2WntKaQ18iUuoc8SPy3puVzHNkwLwca2vur6UuZTRQTZ7TyHQZg7icWHaEcahd5Bct",
  "key12": "DwrTKqJGPUsg5ZJJgKtY5XnVWQJXd9wBLchtBxNmYvvaUW2D5bAmnmGZwAE4nfCKuiRJMrPFDC6Lf4M21oL8eRu",
  "key13": "2CShArdUAKDkKfkJFRxpUphCi8VLkRz2M6fq5w1Emb5bmHiudxQjU5Qwd1gc5nuDCCGWwmZekkiGW2aYyiVBWctE",
  "key14": "3UGFsvon7NZMniEGoBfUV9pNPc2xycUAMjAQ5nMj1JhZ62ESWAwfnBetSYuEf2GNbtfJFzrPdznybpxcPs3bd4Tm",
  "key15": "24S8mGzFdocjc7BN9odpdhsccxbPXxRccTMCo8ctX7S9R46YQxC14xGch6j1j6uN3oiFGbNTKWarJ4dtGnohVMK1",
  "key16": "3EcdpG5UKGu4X51PgeGKLFXiYdwPLPSyEBZQGjtUQMGGeScPvzEW2RocbkWd2GqZB8UQpD8iHwrgamcAMZeD2i6Q",
  "key17": "RwcGUWWR3EDnkeno1NfN8hzPbDWv1g8aZTvUMdqE8dk4qPaRBnAuHpiKTnyH7oPzEVdCWahmdt5Nmo7eYGXTrkD",
  "key18": "3FX9RCTmDddvCeffk2EpsgwWGwFpTCC3V7GBwBNcCh9wWxLtp9mDFAzGuxLJV2Y84p2h6L8y88XphWDSVennv2ky",
  "key19": "4uigaJEoMoxukXR8JAiLNr3rViqZ7V7jSgh3K7ujywPNGfdWsU4xLSJsESM1zoVacxEH6GUBXi5aBD4SaJnqFfRS",
  "key20": "3VqCiBcHsqZCjEnQT41nsb7bAnri8v4c3aUC6EDm1shSJZ5K23hDjaa6s3LgrYLUB5CV1X6M522FY2SSnfL58bSN",
  "key21": "2tJpJ7t7Md125HTqkkZUTuZojnucfoaFQg6PS2ryj1ZSPRNLWoe2CvpFTawHYzTPr2ynA3QZC4KF9pxi44DohE3q",
  "key22": "DwPhw9L7bFxSVMfkoQXageLhNqqtkX9eQVTJpUxJ8H1rmRPDGt4rUKvRASXnQobkwT9jpMAzN3jRzr3MiSx3rXx",
  "key23": "JzBkRjoYkEXRS7KHLvEXToR295NyxXuJPnR7hzUWhxDndiHbqpjSdejGodfGJddMzJbygJkJYGsgLJgQ78rezvu",
  "key24": "QukTLEYa5z8U9D2tmkcLrSSbs3Wj2ZykfAUxVb4FrCLD29kCw5st8Q8c6wvRFnFfEfLg6sJbgya5FY5E4H5KZHA",
  "key25": "3wsTB4Pp1dGhidXQApgqUbAxhYYcdpniaMvpWEoNiTSt44fay2UCGQL2GWe71nZEsVbZVpuQMzdb2CbmzBDnsKWS",
  "key26": "3Cia5kq2NtseqFSj7WKdqkpAEXrA7ssYpAqiLkT3kxnG7suXkbDRncMQ5tRzpntcm3ydQE9p1AcM42wcmYvjyigP",
  "key27": "4JgzKiLjNXXE5CibGSWtiddtLfwk8kokKdBXYF6Q8M9sMWkjAH7UERJb1kJE6jiatWqYBKXkED77Gjv7USikrc5m",
  "key28": "64vo8yGnp1jhvCGHcD5FPoLDSbVkuuMt9DAmax4uCCue2YWBX9KsEUUgd6Y4ENS2GAJvqygjUS2Aqscj1VDbXC7y",
  "key29": "5FLEvnyvJ7j5ej1tU5zJcGjJB2Xxt6VN5SjpK3ECcqsa1bQAXLv7BWcnVG9tx8y9dk7cBKi4fAuMwm7X6uMPMBjk",
  "key30": "3u8aMYSEAEJnJYkfGRd9w3MygC9BFdHJ11j7SGwGPG6QxdexrAFUzLejxsKKJYrVKmp63XHWwgi4iWUfxyKHtfYc",
  "key31": "4KftbBNYuDvsJnHjMKenK2zgBPSPitPUfCry7nV9MRUG5SdzGH8tdsTsua6XAJe4hBiEiznfq9qBxBKzKgoUma38",
  "key32": "37PXUWeeNuBakJVMuDGhqqGRcMgcQgvFifrziSf1Rrrex5tr9UaxDfhUTZiyhAYc2L3jDkjLkNZZMuxKY6wLyBr4",
  "key33": "WmiooGtqwwcNAKPXXJLrRLi7CvE4e3Wray3wcgpeC8yZ94vd8ZHFF7azwXHCj3eiRzit2tjaFD12Yn8NNU3cuVm",
  "key34": "52QucirT6SwAMNj1vGyvjSu63Mg633WWCpcxv6ttqQ8NnNZs5hy95RXwFpyhi2B4HTxRVjfhHXMwyiWyR2DEWmBY",
  "key35": "45ykZveSj8ULKnavdQ6veKM3Yb6P3H1z9WJxwmjaWscoqouGZpUgEBXmUJrmF9BK5ZaBwZ76BAcPFndCX7BTTnnA",
  "key36": "3QSAcQkydNYdUvKu9PZw4Q3EoR7JUby4S9d6v3x8SdWddbzyPvy2Uu4bkeeeS2kjyUvgYagPEmRWW3Nf2ZCNTik4",
  "key37": "5inYxgBcjC1cwfJD6qAUjpadfqftVdxjKZ9RvWMp4Tp7ou3U5mdzXPxi2ZSLMT9gtvDDs7wUmobaZumKdo3buNiP"
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
