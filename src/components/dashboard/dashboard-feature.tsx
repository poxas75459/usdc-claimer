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
    "3ozWTWhqE2CJtzForDkyYVXqLVHQgbZVHXYPsrmsgpmddpiZYAMMNq4TAwBm1ieDSP6CBpAGEGNsf9yAvmgC1o5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Z3mUUKiXYhiGHVn6VUjamkNbhcM7z64isFFkUVZNuobxJ8d5v1ifG1RpaGyVjY5hQWjc7sw4awtWeLc4xbAzyA",
  "key1": "2nL9sNgqDfpAumRK5Yqa4SLSK3JvLyyMLQmWoC6Jy75gNCb8jCaRYGEr9QP7yJ1G4sT36GA53VNC51MEqKozSpDF",
  "key2": "3n28ZMhNhrXZrdsPaPFPU88C4KCdEvo19kYDkdAB7vGqt9WhU4XB2UgnGCMLEpyDsdJxD2fLyXParCRi96cSWs6H",
  "key3": "25gbPNqBsq7Rzhmc33W2rYrWgNbzTj4pWJ7VZmQWfVFLaveMCLbJLF2zKrZsXBT1YYFerVgb1cMyYgjoR8CB8e7u",
  "key4": "vaJENNtBjMXCseHbFucD7J9uhCrpRMPfzLeHEcBoA2x2ZYWbVpU8TLb8y1vQCSP49PbszPziBY678fVnbSZ7Knc",
  "key5": "4WZTNZy4GAXQeFeGNBV7M1LBHvdyPofHJKhiDJpqBijPY1DQ7ZEbLR9QMnXP9Q7TszMKEDGDTLDJCajYhFDrQk57",
  "key6": "3umFrwhGxx6U3AoxE7akEvkUHk3tpdTiaYwdfRaShzTtgVCvTjmAsnLZydBFQra2iok58hWmLoLq43fE1n8sroh",
  "key7": "242zYyStTvF3nvFs9e4AWo9rSvwjZJf6HJa7RvZ8vrQbzWdQdzM5QEEwJwz14DSWoankrYPBjzcfrgjsM7HxS8HT",
  "key8": "5sakabxnbTAydpPoQdRAdmHnqYqsHjbqmjN59vchi6crAFwWmCK7NAJbHbbb8BG9yVpBVRbjK4B3VAh1PLQLLKZb",
  "key9": "4fJGoWx2BLfSuBMqqKwYTkZ3yEBjMyJxCZK1M6DV6TuhjZhbte9g54HG8dDz5RpTxha6rGRGeEX1XBCkDUL7z2z3",
  "key10": "4qyR48QsCaFAz1aK2ZQNEWztxA4sdfsPJDw8NawGyeFuZLHStSpW8ciEM4C37uEcAyeAi4SUri7gCNp4dDMZvJQP",
  "key11": "3WKYt9Xc5PhJViGEXeSjpyKNaF4Be8LJvpF1chyM8ucMrkuVMWEMkYsFjqQ6E4z4tcdMg6V1ZPoGHzrBGpV3oXWU",
  "key12": "4MmF2rbnpXnKYMNymK3V81fnuUQuSmDvMsr5wEVihY4ZmgPrN4AdstMsQSz7jFVgZnTEDshDaXRmqU78cFokdcpt",
  "key13": "4a7eZuEXrEHrdx8Z5xDy8w29ad3g3TmSYoShcXubzHRDtFDhrFz5JnnsEQBvDhoupFJ6tyUHbvogrTSzfJ1Z9Ser",
  "key14": "4RBfjJs4NHqS38QLsHzy8fr8PyyzvCwEJpyAzgZKceBPPgnqLaAdd1ZexQvMnWFHCGdromZeU8smwg28AimhMj4e",
  "key15": "5MciUKewUPhGesWbmqoCgRdC7CnCyYfMtrCLiZXwDpDHRB1MWsVbm1aA7Qtd9MCSKeCcj1g34wVStp2XwPF5upy",
  "key16": "2LFuDBn6EFUjuFZhWgm2ReWvujpLDwJPfYFikwi3pFL99nc4p41QUk4NtBnfNchFMNfpsAnLjLTH7HtFg2QPG65p",
  "key17": "5p1gMK2qP8yTUqC5ud7vysUzhxLoSyzAxkPrEPNLFeJAfcGvNBMLHDrv3XGjypMqwyRLuvNGmSLR2VCVzNFKRjKJ",
  "key18": "4Bn3me58miPRgCgG4RFtSNGXMxTjKskoPtqoQq3A3jZdBBBFW5bUesw62FnwYni9zzeMLqgERT5jaUZc3mYdderg",
  "key19": "3p9veJFuMSoSe1Xg3RbCTjhAmRv7gCJWejxm5GY6SodKuCmmKBnc5jStKrKB7QvpKVaqrEFyjP7btiQDANdXwHhJ",
  "key20": "3P9YUYZpHrQL5bvoKaFtPMWkQhfu6DSwyNFSF3KWrx8XaiovxWYp3SiSKTa26cAGz98nFceqDqoRmj4PWf7kfNxK",
  "key21": "33Zd6pdiGDZsDDR3tRgkbVkJ7Y6tZnVT9GL1JobUtGerJfRwqWhMSTn1kUiXbk5hgDZCTsZUHAXDZBjwjtJj4TPh",
  "key22": "3v6sDbytmNZkbPL6FvhVPoeEh9HL5qWnAmjJw6HGSYkMRfQTdHSFVoXrrStQuLDchdhK7NXQ5PKU91pXisYwNaxS",
  "key23": "3AXPWNhw9PGP7NBKQmDac3zZgchHuobmedSKXfvwC6e6WS7BHYHHUMogqLLHJRUVBzMXSGhwfBLjdSP1zdW7fZLG",
  "key24": "5vRiBZrpTHBLai1RZew11rYx6oXrmiFowoX1Ws6pYGa4XzoPQjeAYsqhPour8TtSh68a8Pv6UUQeBf14hj8gFA6N",
  "key25": "25yvLQpdVvyNw5TJKpHHx2kKfJTcz5PN9CLBuy1R9Q6dj3CL3R2tSdSf3NU5nKMUGG7nDZNBci4uZaKqoSHopXir",
  "key26": "4LdxMwmnfn4zjnsNzo5NjEH42P2dCrEztnQZ96ABJPfiyWh2nqxjEX8C9DhZBLBc6MzNCW5pW4jVvB1Sw4F6DGGz",
  "key27": "4ggLZzmhvazcNM6r2C6jSMG4S77dE4JKyFybF2TEbzwdH5WLbcSbggDoL66xbhY4yXEpzXCyJzTjm1Emz82R5trx",
  "key28": "J4kRbYFwkdekfdR1RuHi9XzJZM6d2AXyJemyESBALNx2tEyky9EA37kaBM8RoRjmEWGB22YWnMK75AgPqAgYTuH",
  "key29": "3R77yK8bgZwTYpWAJsJo3HKyHxAUG4xtehadKHfuxFbUHAxAyWDzXiXum8kU6b3LkecxhnzHn35Zdr6vnaYXwX8S",
  "key30": "4mmwbLZqbb6wiE19E7iDpyveaDfuEQRJRCUsZX5mgGrTNLp3iB26ZyyPGeXCYcKb72RNPhB1E72zvAEGh5udVg89",
  "key31": "5C9VZppBTKi9kzjhEfjLdaNucVWYogWNwmbF5ee4jzHx2sbMFzXcVzaSno8dyNMQtahEihyLh2UbAT9f5Vd9Ggj4",
  "key32": "5igd5TbAAMocFUCD17DyN4n6rRrJzXeP9Aqo8nKx3DMP69BZ8g8TwPoKRzJdAVLpyBcpNDofMpayMENYn2FFA4pR",
  "key33": "644zFJxUzkZ8JN7CUTjXwKfB8nPnWb2y91Wa2ohvqfypXjZyYhi9AakXo4G1cdAiyr1spgFapePmpzp14krJVBsV",
  "key34": "65RKH9YYxSMRjd4WA51spo1BTDnKpjgD99ThsEDnC9CMLPvqR62KvaaVPbMH8eER75ufLckG1vZkWHqNQBMKdvFM",
  "key35": "2pg9N1KE5YgwKGwhmCzgwsAziM2nj7Q49iMh21W7Xk7kBM63DEGemZLRGqirwnREVgBvjX3ks72yRqML89JYwVt1",
  "key36": "4e58dP5GbH51zS8LdVz2557mnUhjmzrf2ZyXXfNnD5qCTMLfZsgYqaRa2Mcv7p4iC56ZRhxB3jQkdjtqvtttGtNs",
  "key37": "YNqpdzVZG6Ziqki5JuqgQjfVMV68MJ2pPmrw537WXvzNRbVwqkz1pRvB2aCff8ykJFjCcdKY2rVecKJEstWTQwC",
  "key38": "eJnkrdCbqhpoSr1jFvsjdVSP1ES8MRU74hrf8trv5QucHVHX6o23G2XbMyXZAzoygFRzsLdS7TeU98okDLkcY9z",
  "key39": "2F3QZeoySfKr8LiKHqxat45pkpMrj9bfQEBADBwBqB6ihayerVeD1V9VpofQDJPSQsyAb5U9B2crshSGjaubS9vp",
  "key40": "2Bs3xbXu8m7TxEL4K2stGHRrWP4Xs2FBcLrWRQjNkbQBF82uf3FqRX4rp7dhiTP9Pqizx1cFh42om2WriwbXBwG5",
  "key41": "4vUhqMX8LhbitQ5j4gu9GdQ5c8Ana4Xcq39PakZqV47B6FTu2bsaupwrxXcBqawos3SYEywpHKQu1gYLBCjA8qF1",
  "key42": "2Unjs3TvwRbpGxXrUQZjPzKqgmHpKEkHWNpxF2JqsoccKCoQ8vhj5GwWUiJB8Lz8cScrFhB5TLxpycq9rwRFZuoG",
  "key43": "4eMsCAvbvRqpCztt7w6EmxPrjuE154jjXLQxDoPANW91jqmnb1TqR1WFyz5HjAxiL2kBH2HEu3yLFx2SYMZsVFYF"
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
