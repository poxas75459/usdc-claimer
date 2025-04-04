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
    "4ho99ibEcmG8R9AtBbLR1ezn2SJ1PVyuWyyubKk2ps3Zxt7obmXRyAVhBCU3ov9Hn5ZFeY4SEAbQKaGeF8FBUxop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "677jCvSkD1tTHfu8SiKKRCxGTj4W3SuAx7bVcN8ecUj7d7bZ9ebQC4NAByyBkMa94vXxrGLLdWUGwYaiLnKoQKAk",
  "key1": "3D8RNaBs9m3RuRvSS7UJkod6onLkfrQb4uhJMDd6YERix2QWg4yBBa1WiwjdC1FdMwbnsF27aSAbBNAQSVqvgJuv",
  "key2": "64aCUkMW93EiWty5qMMKXBRN8osHFWgg8HfZyZkNiYmoNdea21QZrx2adpyV26XdkhywbEZAuhazKM11zdJVyGz6",
  "key3": "2ogDSBPMh7rC549wxqgZaQURbjwqnifA8hWyn6BS4tVtKabH5F5q7FQKADoSU3fmU5sSXZKJApLEV82F167SssVX",
  "key4": "ozd3dYaxCLRYpeMiuGYyf5djnYjXyJY6MpKQm5AT6E5cJnW2w89Dh4iexFAg9BcggcLb7w6SCMGG32NKX6xysMf",
  "key5": "Yozuxmuk9GzitfDJzfzwPWPtyULMy5c27emavxJL3N59ZswQGwJmXCQtiuMQWswGrqihnT5H8XigYaQph2wKsdN",
  "key6": "2fY3eJvTzLgeoRpZNiSXYK86MvjUfWjFPL5XLbJWBxz8wxpPuAZDaNhSoLJVa2Hj2p9zGQJf9chCFHTDeCPPTijs",
  "key7": "3FivxFgePae7yfJmWJbV4Xi3jnFjgbeiYjSmBPUcQL3UWMZ7ZpEHMNztcpBtUWPTvX62A4Fv1bvEQULvFugMK28c",
  "key8": "5TAiNhZ4w1CG5oeBe2H3vXKamKu6v85ukPXbsjLE9HABud8Rxz8abWEsrAnpvo6yTeddW6ziUYA1Bh8xDsmHt15z",
  "key9": "22S8SrExH6qkYWffxSNy9YXjg1irmTV1pfGbJivqddvBsxVLubUF8QW34g1o8yfpVNmniKWqQzP485k61Yz1MjQn",
  "key10": "WhqeAkVrTaDprXic1vhDyTqvADjS3o5urTVicg1ooitSQq6vLs32Qk5mdU1K2fiKzRTMbsosE43zVsUpXP2MW9m",
  "key11": "4uCRKtAuMMgJqZnKz6U5XMGeUbvmUimc4WjynCDo9g1fdsgZLDRZwjHGEuwHMm5V7m2cBipvwAyTdAV5K1BNJy1y",
  "key12": "3wnEwDS43E2kf27ru4JPpPefunMcrWC1ZWz5rHWo7YX3ayqDohw3azHgwF71VkFvsvQwLa27CJLXnUZmx6j4FEki",
  "key13": "5tS8jBHx7cEnkH3kjATq8RrCQYQFwP6GKF4kBMm55EfaLxGBLn1K9KNDGQXr9989z6x7sWgnfkLEUHjV4yiyxbam",
  "key14": "a82hREvkY4pLJ2jH54nCiU3tJagB8aLNHJiaHXPoaHWTUUiaRHsBNNd74tkk5BxR4Sa9J7QrFSYbp6eekicv2Dd",
  "key15": "5HViwB874aGCodwtvoEUrLLiYsrPgCZgXwZoyybDNpoucQfecDQ6QQYiMBtEG4UAQ6q7frHvGYMruqgvXhrpYP59",
  "key16": "5fPdkYBqc9V4TV7bukgxGa7XH72CkZ2S8tEYjh9W17egAzQ3VuSJa6EZ8EnYcyxoL1yurcZxEtSW45FJK7LvwX81",
  "key17": "4wCzDrLDuF7t297Zpa5XF2Vrhmha8vdTfZeZjdAwWFZEP3bhni2L3ZCP9TVJ5pKK5CnGUYv7buTxED1vnKmS7TE",
  "key18": "vSCfU45tnArXxqR2Nh31wdvqRmf6oNFrj8GWNfBfYAHvQc8Yc7GJMuYx82jZNwPRAp6VfBWbZ1T71GXBz7oSzwk",
  "key19": "5NbJQfYeZFVnb1HqAA43XZNm3oYEncXYAGDc8ToNDiWPgNRMbfxkNB1QHCotUKTwTUs6GyNGkCLMnM3bx6VUQhx7",
  "key20": "49tuaznrnwx9UqGDJJDndnC9onKyxzDybmTc7kYLropxq5CXJZCS14fWh9HUxQMpi5v6MYmh2L1NWwrFvy7fW9ED",
  "key21": "4WNMxTudo6HFC2XTCMoVJtuAFekGZ7iWQnmQ2ftHDhcZmcjy8eChLbAZWJBrybSkpPYJeN2irfv73aM3eV3X5Sjj",
  "key22": "4vmtZBXyCQzE1p64cFS3ovgP5q5jYEhAVp1nBzZW4u4hj5TzegXEA7HfM3Kj8WbSjAfX8NfNsYL2XgGniH4iP5ic",
  "key23": "2Cthd8xNA9GrGtFcQpqSWurdquinK3DDkjQMiageH6NW2k8TEscKp1fRsbbtYtVLg2p3tN37K17oGVzQvzzM6mUV",
  "key24": "27mbcXs9ZtAoM2gDa7CVjuNYGDYdzptMUs4Sj4yVTs24uenNVuUW4LQE4SJ6PGTX5pg8nrwvmpTpmLbhrs2M1QRp",
  "key25": "47du99hfVyCqVHKUe6cRaWVgDf3Ej4Msbio5AVXtWfqKBGgYYuCjkE5Nt3sHN8gs4RQEGrMe4igSPULpgRWm7MUs",
  "key26": "2a7JUvbDr6VajNQ4tBwiMJenwmdbecbwvdesQXhgb2TB3UYoLswHJPCaJ2HagQ84ZoQfbsVYpfFNZ9cg8a8ybgyz",
  "key27": "3QA4oWdvjGW5cJ4tPRLx1S9prjZTgdFcRNqa4n8c2vmKNVo5RUdqtrx21RuRK4FBjeuz41Zedc1Z7P2bk1tj7Mos",
  "key28": "5DsfPTzBn9pX1j3sgdkFqDCKBSeTMrgZoPTGSHghyPF3H9JBj2USjM7y2de4Pr6a56E1gyrxWb6wBXdtStCU9wPR",
  "key29": "61hsNV4jeNG5S1u1FJpqx9GZ5w5QAr4jkLJTSf8sCaP2YEGKBEejxjjEES5BeoK43J9imWwqrrfmp73SV2KbFY8k",
  "key30": "3NCZV5KDUynSRfcdNNnpVG6DZtfQ95SozKZboAYRktV9cknyJxEVvRiWwZxVam2NwRP6obSitbBaTtN7MMRnkjhu",
  "key31": "3CzomT1wD9nYWjrNS7re4PK1U37ZHDbPnCXA7KNBpk2T8NhXDtqJ8DA7ZkVsaZ5wb8kmxcRNx6XVjipdAS1Lx6qj",
  "key32": "4KiykA8X8FN5KfrVXZGHPNRi5wiV3gmbdWukSdwhSyKTjho5KjtzFB2taRfNNvWJLHz2ZWMx9qXh5eVGDWgUJnj1",
  "key33": "2tWRQS2bwFr9aXFB1FBxHs4ePPoHEXoSNVm9jNePqCapXSKQw7BAgoDmctVaVtMMkDwX1ehdr6cDuPR437njNGQh",
  "key34": "vJ4sXrd9KWWKa1wn6S4EDQzWuKMdPyExA3cvuNDoQPPXokrmcPYr4XNjeonZEWoG4rh3RF36cxtbWXH83usDVs7",
  "key35": "65opqzS5Ys7jDfSGT2KKSFkX1YytG35WuLnXTdYZGbo1kRUuMagcgGit8RuTf1zckDrxFzTgsUG2WG8t84cWvTo2",
  "key36": "3UwAUdRYbdrfKiemeibjaeNYmXiQKzwv58PGda3es8QeC1iyDJrkD2sLVcj8jRM8aPK3gKggqxmuXwu1pR2C9DZD",
  "key37": "33CfuZ6eFeDvUY3toVyWCKPTbgBMagAMc8yNG88uMytc31avFgbAVTyoherfLJRHdBWK8Sc5vB36xpMz7Z5NDDDK",
  "key38": "3oFY36naFuz8ZA5n23b4f5ZQNSkKgW92ttXCjSy79TjL8ScMK4QUjsefbnA55hMRqpV7GofZMabf2VLtXVERRXpz",
  "key39": "wnruRFa9nwHYtf1i5HqdEzMPVWPACeK7tyZbkjQLJJryh5P2NPQT4s9YMkQcPzSq9QjgDaRHx3gQ6YchfbkxaGS",
  "key40": "4WvNan7A6HmFUWAUFieBcVhZ5d3ufh6TtwGwpWpQGBFWf8ynb7vNoKN1KXJES2eidEKGWe1gXCXzEmidRvbdc4kA",
  "key41": "2ArxVgPBqf3yXgcwBgMT4hqpVzvzGH5HFLVYBX6uuYG53x1Z5Upc8bj22RsWhueFEQFLMQEKarhGiWvrUPiEDFtw",
  "key42": "24JmTSY4fSb8Nb2r5hNpSZC6prUgzRNRmYhzGBgsCWobnRf8ANj4moae7S27vx2nXJGDaZfW3ApRTCMLYwg2eYjV",
  "key43": "42ZK4EsCBGuzxetW8vz8XY6U9psL4kgAunnCMTCoBuNquH4cgACbrhGFobY6Q7TobXMyXjjmcsW7YgCEmnocxswk",
  "key44": "4NNXDPDDjgxWN3ihtAGpFqmaLV5HTeBrHqGGEAoKsfFuavv3kMmUvHdw9PgK7QZ1LFbeCjG2KehkmnkwsWjdK93t",
  "key45": "34ifRUDU64LRY1FFoWzccghPuBKtFkZTs3JSNppNv9d22T23mcDXmM1Tsg6FHRQn5RkzRhTTbrgndvjeCRzdoxk4",
  "key46": "4aJKXDxE9YpSBeXNNNwcZtfsRJwRuvXz1pee74FnRhQDbzenEQrnMNdejnoxSmsSg6zvNWBRm7Lzdkw8yTxy71k2",
  "key47": "5iFrqDHkf4ADpa9hD8nsWHoDJhous3gFBrypWQCBftdxPdoLQNeCodFwW3dzfLnEheQiqTGxgKejJnbrnZ6yu3em",
  "key48": "2RueEQ2dSSVv9Ku3q1idMAuZYFa8o1CUYoLJmVBSwcFvdfHeFD6Ym5SzgXJpsZxToqUVJiXwU1dVUjmPG63FyHU2",
  "key49": "ZL8uxhpf16xBoCKVXKXzHyLFEV7xqAkaeQ1j58z1BczAe4t4UJgwWGHDcfiSvMuuCDXcm8BLA2rMsHRZFimYF6v"
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
