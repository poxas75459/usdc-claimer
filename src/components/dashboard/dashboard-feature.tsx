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
    "9HYN5aDGzKsiFTzVRDw48SGdWmXkxfxLD363jgMNhYArkzcTqpkhgTo2Gx4vJdhYTFxo8FFeuSUxFRjFffxEZ98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vZpvR8bShVCFw62k3DTP4JxpyxPbQ2Ma4XeLL1zm6f8wiZjLanT9EfogsP2M4FPZkAdZ7VHkc26uoRkbdJZ2iup",
  "key1": "2UkWLGxfipVqSPUrFd9oeZRqrBAdKEDSFwDNU3gYjo6BEKjg8DQu9Yio1stGUhvzvY84bWqfwMdsPCtQawy3iJzs",
  "key2": "4pZz4FPsopeoM5qq9dPu6g3BccKR3GhAGAWV3BNG9ZFwg4xDEbeV5WPazo4G3V3C3seYzYbsbE1TEHicJBpzkpUu",
  "key3": "EN4jDFEzT2HAnanDuWkQkHUPXNMm6s7sWC3XTgsbwDHUeHfsnRqz7Snj8Crh2kdqZexhrpcmDUj6bVL9jMdjdm3",
  "key4": "4S6EZmL95gq7RiLJLBFc4MpRcGtEoPg9gFPRrXBGXpzDeHfqBnB1RnjrNxizktVa59v4jPS2mrBDunKpd4jJEvFt",
  "key5": "4MNNZzHTjTJ3NZAZYk25NZHASEGi3Ja1WRKHHqstSZWcbgquDkeTkf7gcefr9SE4ytquaFPySPtXaT8g3Mqi61UX",
  "key6": "5bzSebSeGwqkC869Pu7xHWnkTzuPvYBcnEVoJBcsRH3pyDHnDSSPPKWJP7enVqr2w6ms23z1oDWwHHs4tT9JQWsq",
  "key7": "3bQracArmi2nJjEqJWrKuCmfyNzALQdxXGxCMHwHf8dWYUVvgNHjZTpq63rb1MVR6bpbUn5kGunt995MtnWmEACL",
  "key8": "4cBgeGB7SKqTbSMZyX5B8zdcZe5qGqfK8vUopbXBmQgm24UX72YboVS3aS9DUJn9mygcn5F3TrWv9UDXq4SjcSvV",
  "key9": "4DWKA5A42GwQ2HYNRyyVD615ub9EkSfVnz4uLjGrs1oztUQZoP1xbdSwFyFEizdomCWXR6VvKBKWPGFnTDRDgohb",
  "key10": "33WxJ8Rf6Qg3wxYZ6tPCBjYyeEDJ1br84zF1MHVdgXw2KbbvWxrUVS2UjmAyDA4Zhuzx8en43cCnxBaJGvzTPajd",
  "key11": "2QKX3f9YWRxUyYcVWF2r8Ak5pfZG5XxozXhZG3cyucSj9tFDd4cRWHC2kKxsrhgLmmzYFXYBQSLgng65YQp7EzPd",
  "key12": "5gHohZFEtRnvhzSa2c9Kgf82NAfBZgQfed9kKmVsEoyqgb387PX32avTxGZosf14PE3faxYgJZvme8yZ27tMQJMX",
  "key13": "D2gqRBDAsHZRWEfuLCCHJcfbz2aweSpheACX8hHeSQQqyzNKfuPhN9sUsHuvLaERi6v8GnV3M83jgdediEo7STk",
  "key14": "5w9oz6yCej26NpqWXDPAxE6KiGn18oJK3PgERj2KtppTQQWPyXhGhCNNXgmHUmEyhChNFz5ZpitzNySMQvcbCqQd",
  "key15": "5ZZhJ1nqXbadqn4fDWzgDPb2F75L9mw8Cqj8XwbofZBoYkZ4LxKScrfsd9QRhK7i7UarqVCqrAwneJqxj2fg8Mga",
  "key16": "229A3hZCMyYvCniu9PAmc1aHJAkaCsH5ho4ftaE6ojWZdw3pGE4Z6ZZc49xrLevo82vAH4SjUZGKjopJ5dH1mMek",
  "key17": "4Pq5iwbvPSNgFbrRzCfbiWtg6hBPSpYFWRqpBrejFaFwr1UruC1uPcwbFvLiGjJ9KWi6otyLAW618LTXMwRXqsWw",
  "key18": "2b6tnj6qhJTUqqo4knu2H7rsys9LHUNpxd92ar4VE2U3FdQRkya1yCzsZGhQJym3EW4hpYhqp8ymW3hRjR8MZBXP",
  "key19": "5Tx4YnvzD7xvs6zAQmahMn17Key8FPp8ARy6xSJB9h8mnxNdswifgCdYCaGk6q8ZqpE1AAVZGbmpJ15nQbyKsnUK",
  "key20": "2jNTa1dKHXmdrdZ7Pp8f1eVgqsqKPjmwC16E9Qp9CYYBQ23ShN9Z1eyAjdDYvKky1GttH73YkyhT1UPe49swMbWk",
  "key21": "2Q6ALKVjV85Vd1tEYQkR5NshEupyQ674rmX8fyid5Ztxtk57GxhiPLnVQmk6HUDCYQ7imWb2ezpJsgzuAAPQBvgp",
  "key22": "2BzY2b1Bg4zZCWS9pBT7eb7VJGTm5skSJNSActgeHSxQyP2FCsWSdi5te7wiVuKBMUZFvX1eMNQTwstwsNak7esj",
  "key23": "4zX3S4y4sEXwk5agttZp2coKLt8nptQUXAXfgtp2xwK3mvo7b6EQagUKa9GGZuSYUMa4LDm97xkKPBjFCxRXa1f2",
  "key24": "3Z6t5xk3RQFzsFUkjLSD8Nyi4dKja8nU7G58gZTGTb5Je1g2B2pwq6NKh3V5e1JP57BJ4GPDertcyfGMhdKm5Nv2",
  "key25": "2N3okyGHJTjCp9CusMaMiZPMPU34v4j1vFm59KWPZfyHQ9iFqDmPjoJD9F7J1xSk4YqLRRCVLeTtGctUjuPrBRLd",
  "key26": "5yKEUqdehCGRGHJbe1yZtK9dxCFaCzCACWV7p56FX1Tjv7rUGvnTzBZWAGv8VWJGED2vCj7vVCXWtZk5tdGU2Dkj",
  "key27": "2zMYYEvML9EsnyekRBaF87jdxGpvXEhixxEgdumPeAd5qc1c57YgF4TLewtBncB4stydPDMmZax1dHz3jUeV8r3r",
  "key28": "57y2U9TfUQTDGHXLfQ1dUrFmUnfh5akBmkM8NWQnk2wyCfEgebT9hcajJcn8jjf51bwPQdeuSZnVptm1mbcDqecE",
  "key29": "2t1tTPEANzphFyNwThUEcbb9nfDRB4YyFFu13qVYLXZs1hqNDN6X7fzW2BdAwWJgXHR6UBw7YuuxoCVjVZnAZwiD",
  "key30": "5fyXrbuTYZb4C5HbGhpzYS7u7f7qTEwSBoensz3HCiyCXf2gsSZWzxn5duitNr7nSeAQSFpUE95f9jmYEghVdtF",
  "key31": "64E6XgC57WyYDu82rDhxtptGp7fJEGPRTLk78dyxEdUzBSoEDEjeovVNEqmB8HR4chbh2gDdsNHDZWepWNm3kVF9",
  "key32": "3WXfVYH6vGicNkGax5GNwBcGgs1e3WTa4FwsyC6BFcPAETFL3kJczBo7J7Ep2AuWcL7N7nqb34quGmaLGKstL2EH",
  "key33": "4ZoCUihEofRUMR8QKQyANipv9svjrQEpjzXeZT6Z69FiP7S3WgygkskGGzd7Q69j29MA7j7D1QwyTsGcheAK8KC1",
  "key34": "zG4cgGY69dL3yZmLGzXxkotfz7eKiSWZNtuFEun57RJwPzthH79Un9sCAUtJj9C61qnQhoJNLCNCZ61Ppq2WPRy",
  "key35": "28vLqJ6oyvfEd2pHumwMs1JMwsrgT3UcRnsuffmcXHMdEB1gafysH4TfdedAw1xJTjpDvk95HAdgQM87K52JvScB",
  "key36": "2sktdgMNVxwQjuRArthCPtYZKdqWTwFKJEdbqdxm2STiHiNuXfzp1bYhxju4MQYUCq9LMUTLhcWnQaEHF4AHMa9W",
  "key37": "5mAkwaAqbzhgC3TV4CkFGksQ2ypzYsLffx9XZsdWKFfEETfG4VZmzGLsBijoz3d1T9ncCThikCd49vgiNiXsrMTS",
  "key38": "2zq6tt2qHD3WdVJwjex4mGEPkEUSUY1QfRV3xy5ZS1SvQDirpNckAPeF728eg7fUnscQaxZsNLXjyQtQiLWrCCZH",
  "key39": "5Q9h2tkhCuGDsyYRA1RsQ7qmcJVey2VsoKxdR37MXeSh55FNDLxb4FY6dWq4MWxqhc6eVeesSvPbcYuW9D6FNRJd",
  "key40": "49opvWg93cSekZkdDcxhW7pEfb9jUo3vd2RH4LSRVKFkvd36Qo99cqcSd6WXHjiQ4nnHHuyUUMGnsARMf6E5naA",
  "key41": "2uvThUxhKeWa5YiS687oqfrnU2phYTjYEeKa5dANC893GQUwUGxjSy9fMREAnLA9WmpwyV4XGd64hk3j48VSn7NB",
  "key42": "VZTPC4yrPifSQHZCQYwmuNX615wZyRahyMQGRaRKnZmR2xRPHCsMK2DcEBuViV3YAx5pbubuEJNkitZUCkbGqRN",
  "key43": "3X2xZuscJfLULgGDsnizcg3idbGVLTCu34zDkjRhSJ4wXSn68qqvcC3XMkthvMZ3TEpAWm7xaW8ipUR9PjP5Nmu7",
  "key44": "231y9JEm6mTE1NsMiiS3JkFmLMgh9gDR3DvbZQ93AS6wbcB3NAEaJr2k26fEi8AeWaDXbcQzhpug3dYHPciySRgn",
  "key45": "5zNbBEX9VUxAeCPFJK5crFC6EBr9LUTswzPQqbj2MLTC1SEGFvCy1gmuT2sRW7YPpQiUDbfAoqJ1BTk4uFgNyzKb"
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
