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
    "3bxkjAbS8jXszAS7EYr8NWoDCXwatTCWf8XMZYU2C4GdRC9aG9VLamZPBmATRuwaqte1DqSySiTPX3sQZ8oN3UuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DGfrDNaf9SK3G8WqvAVevFAY6aRPFNG95wNe3uuKgYJNhLXQKzAnnp3fgYbXAYKeQFsB9Dxmf8wyzweFR1zCW78",
  "key1": "4nbkbEESrFjHYpNGRjvSjuaMcgkzwoUUYiuk43NMmJXwyXEuhL4gQYoTYUvd7aG2zvtNf9evRKnchesnZcs4uTjv",
  "key2": "3mZvyhkGLhaWy3bFbwkzJvroiuP1jzF7fkj6zP2svfFe779VsWRNcqtpuhUiWx2sMEKmKzn5ccrEz3vj2cyE4JLz",
  "key3": "5DW9qo1So5mp51c682WJEAx7ti8bFzHcALkV6SNRv7QCzJVz8XaQVdsxKhaQ58XMV6QJWvSex7cDfRT8uUBGAcwq",
  "key4": "3TR4Ug96i5fiFDqWuHkHXhJGPzi3v8mLw3TmiWfP6wwMxv6w17r1rmFcePsT8nJJCtkxEKfBgg2FXBAeg5jZCn2t",
  "key5": "3pLuUtJ6XHtNHQJJdCCtLhfWGxyvCgoDeaqsBtAjsdcMjU6QEU9mAKnSnCnv9LPqz24vsxPfzMAhHf4CgEfh32PP",
  "key6": "S33KwC9SPkx4XP2SLqKx2TJ66J4HDt1bBGGDoF9UVPd42tUxGVzA4fdzFVtiMngX8BeqTsJTC4kPy38mZrbxmoe",
  "key7": "as57ZnmzCCrujsoUewg7tYTvnp9g58cuedSxVsHz5wvUifi3zu3mmeqTATUVS6m8MBwQAXHwiQ4qDbULGwufgGp",
  "key8": "23BMDTZ5JBH9tBkCjwa8YZyfZSBGqbXLdm5AmeJwaio998PHFMPojGQEzfCJQNUmmW5W6L276isBTn4HELN5RQWo",
  "key9": "PK1y3GceYo8ghUXVse4hSRUKkpNL9bjRQFQtyRRjppGssJDTQztiJE8Q8HwAurkmN5VKC379jNdBgAaVAn7Jiqo",
  "key10": "hMLuip2ygXQ6iVG2WsREDN2uxgLaTsWDD1f4zuhV7Apts58Jc5pKEwJypv4UfLNTyHHJ2qvw8G4Qk9oaR9Npgqc",
  "key11": "SYa52cHAtQBSXA8RwY872qCsrgmT8iRiC66ZUzcU9CzMrhgi5YzupdXTVANXcVhxQSr1i95q2s4W9JNmAheQJ7i",
  "key12": "WvmQSuCXmqVMNgp32a82PYcbBR6QTDU5nkKVZDfbiY8SRjJ3CGyjiPcUcs6hsUrUkQuV1evfv62D54iPJVJapM7",
  "key13": "5HzHewoLK7E2M6zgFat8SKyfDJQnefu21bqpieCDDeZa5cbeeoogUjeLcypHS7L1D5mAPpeaFyVkjZAWFWY789Uw",
  "key14": "3ViLRo7TS29BX91gHVLQ8VHhjnbQ8o2o5SDGB9E4zSjrtUAtHPszWKTpwN1UhHDtMzxrsvEaSaFH94fGuYM3pwj7",
  "key15": "wQFsvsA9Te465kcxPqUpwmjZAi4rJxQcGK63zP2vScWku9BKMvyGwZBgdtX3nBa8cFRDajdrFggPxZ1fDaySvoq",
  "key16": "3WnFkfZzARQKV2y1dWsT2Miqb7iRgpPHu3ZB2wubPLchiNSo4c3WXKBDbcScXpxSMAKgSNWwKni98jizZpLaUesS",
  "key17": "2mddn1HaeQYPsUQCXWUYUdr59JMitSwzFTifae9UDP5d82cm2junL5ndm5GLvUWc4qskcsiEzDTxgDj2vFdZ8mgH",
  "key18": "2cyPhsKT1SMmKcSqCbDHfg4vFk6ap5cMXHMA7DkmDRzjXcNQZtWWeAb9km1uumf5DRAS62W8owyqucCHCyGZoQiR",
  "key19": "4mFPKvmeqcwADToeQxwuEbjgfGM5VLWu8BakUmwb5rw43PNrTFo2TgZnBAc3YJrJuLV6gydhAbtPuSPzy22JfBqH",
  "key20": "2NhxKPRE4A49vBJvv8sddNP5KzJUmQa594Vu6M158NLrxVwXJUeQX5V2HXyysif5v343uf1Yg8zuHTd78LvUenpF",
  "key21": "3Bgc7NXyDZarm1fNKohfrFTbYFSgsi4YdBATpT7EXfzcqpXYuYmSnhwMMH2qJn7Zyt4qYkm4VvuNeXgZAYsUcuBn",
  "key22": "5PZpikw2Eznw7fMYMcJk5vGU8hkTZjqjMjD1Hdpnmc5XnAU8bp9byfUJBgJoMmJAbNb462DsE4pwLVxSxJvndgkC",
  "key23": "1WSsnUGWTfsoPmc3LjjhdAoRqLuemEMRMwQLQReLhKUGohCJE1u5JUTQ1yzYnLSACLguFn3ZXsHFgKN2YhEBGMi",
  "key24": "4ZQ9LZFT3KwPhnnwfjCUyperM2siPjaTx7KCzttTC2XMeUbWNjYNYR7iJtkPR5Xt93mLk9Bo1N8MMZ2Nwvh1TRBt",
  "key25": "2Nk8BxocLwpRam21kGJ87GbSecLruNPjpJzJ4nXP4BLRreRSUQydwzvKwhUCMZCaeiKvg18rE8fnaCzohe7YDLst",
  "key26": "1xQnXSaZZQ6vNBkKg1uaMW4WtRucrZscPmBw6xYHyr28qfx6a837j9E48RH4KdWaymYk4whybFH7kTudqu7xVoj",
  "key27": "5ghzvEtU1xbM455iyh4d8nxhehz5bPKJtJS6Z8VQQKi6QHm94tPS9HdWZJm6CP5PMzSR8irXqSVSwxkuJFKxgEVY",
  "key28": "2ZmJncrDTuKW2r5yGFWA8hUqqVWYH4xn1q9habuuFSysBGRMz5A4MZSH7dseUrbUtEkMNTSWVzpAvyj2es9X6kG6",
  "key29": "5j29SG3QuyX6WKBmH7rbziHUh8WjcM4pnwpBMctGoHkKMvamfwxfqn3SyUHjJ44mwydDA8LP9u5kvZwDEZMuTbyg",
  "key30": "2ZS87PET3jsWs3CxeNw2yufn17q6bV6Es75odbE6D29DyoVsM8JmUAC5W3M3avKondeocTHcq8bsaHyWg6rQmHmA",
  "key31": "5S1V2PqNeSktCMsqvzaPdziFAZXkJEsyXTL7Z4BFV1eoDUJkvnqcs2K199sfCYEUfEH7MuN5pu4RwWpFbvStcQdc",
  "key32": "35Gjddse1PTT9McmYbhrF7RfphMBJzStVoMnybChH3faxCXLHev9Ueuk3sRiNKfjKDav9orRh1JEsYL6AvxJMRm6",
  "key33": "3aJWP58UnS8oJF7dvQdbsVQL6AZFrrbpUXKAoT9SF58ogxnb7jMJRkn6htW6PMNy1TmzYMpGZR5VG2zVgp5NRe8i",
  "key34": "52wfYTnpr88oeV6Jmo7yhQ8b9k211o1NixDk1LeHCanQbQ1AwUbScvsuLb8mfXjb3yZBtB38m7xU22p4hsmWkUtW",
  "key35": "54SgjaLRU8FubmWbZ2HT3n5veb3tvS1nP4U1gmgcmR8u5vfbMhLBXBq3WQU6p3AN1JjhNCf55Tn8VB2bvBBfkYwz",
  "key36": "4PZvJxGqZ1ekA8yyP8UJhbd7VXDSENGWjN3621nd5kBWLwkJuHBgXTMhD1K38nG7G5yas5TAyL2T4qxNbB1H1KBM",
  "key37": "iy18c6JYgKYCKwzDz9qvwrKTFm4MrBRWhUAPNMN2KzwEGnKrJZNC2mMv5jniyCKgN624448qdDZmHxxVsPcNU2S",
  "key38": "28PPKXa2F8hATLQBSSpcDic7nEFiJsobx1Cyy85c7Mm5Lec3piM4yhhQoFf77ktN6Q9DLLAWGRbsUSaoRoFFcDhb",
  "key39": "2W4rBSX34CpwsjRHbQr7abULKxoELY9UomENVSK3W7mcQ3oU1gV3eCRAKZnmR1NuxtkDsEwxf2cGx7ycgUgGBEjL",
  "key40": "ouNNvUqAKfYT8fXdJrTTtCTLxs8U23rNkWBaBxDTEw14Rrdb1PCcxTkNRZbPiBgZf4WsyPV4HUZY3vhpwxZQ9ug",
  "key41": "4YHHpTeDH6VtZSsHVk45oaetuhtowBp9Wx2FidcUS2J82rFGLQuFXmFjXW3kg7AtFV6gWNY7tvAkUv317GxfGpvp",
  "key42": "2yo2RpjTmv7Jwa5DNYt7PHr1cBjon8nP753ASTkLkrvFAt8f31chwYhZ7qeXFauX1gH1MgTEhxoFv2pRu4Dvu3UZ",
  "key43": "5RTKTVjsgqVD3G6pHgBhmGhr59bF8Y3NhEVgeykQ76zySR4ie3ZY1WDrQQEMhb2hcQyceRVcQrvN38bVFzwh2LgK",
  "key44": "3Cv27PiQkBPgFY32F1dQXKihCe93uWWPh7U9NMRxEYpeP8uH4qw2AZNtnU9Qe7jQWe7YoVEXgsfigD6n4tDEi7oN",
  "key45": "4RYezfncd2kTVb12AvWTTChb7X6Z6o4Zm8gNW3HL1nds5TFj3MUBLSTHXSbS3EAr48SLXu8SxHjmz2Q2Yz68KskY",
  "key46": "2cpEfDuaZ36WvECdvDXQyaLUfPEw6sZH5VqgQcHwnnmDXgSvnztUj7u2sjhRT8uw2YmFtDAje5w6C6LRvNHR1yFq"
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
