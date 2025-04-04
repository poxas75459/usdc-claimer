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
    "2MjikaUfYcWd39diMHwFVPiFiHexxqgFeuPxn8z1VyTYMeX8tDeZtAEbzBQU2X47td7UsH8zdU6ruEj24P5PVAUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ArgGAbzCQrno4CMmd7eEu8dx8N1Ybit5JPVrjBhJ2GzHobVpYSZbKHTTfNGEv5QKrzM2ypiUr93w1P5MUeF6jX8",
  "key1": "KNMLh9ecGSjNmKznsQSDmjmbqmS4ZuGQmnbmgg62CioFLpQ3M47nqof8hZjiZFn4D7Q9HV7RkGDiYc7RkmJUm7x",
  "key2": "5Ck3kfUHrjiiodGP2qMjv17uKCp4oKmBwuukGkr3ZBVM1vhmnDZ72JHFHMgf85fRyPtRo1K9rvZ4QBfKvF6nqrd9",
  "key3": "3Ak71ssg11waA6dpDJL8hDdZtp8kVGZcpFovJwfr78befo9AeY7gZZkY537pwLWosvfXPTjSCmPyYfPm8tDuNmrq",
  "key4": "5mVtCzoDb68oTNot2q1bEJLVGJ3LTyPJuRgGfbo4emFjJ5kAVZAvv1nunbtPZNZEbLjPen4Rs5hp9sEkXQbfVLhu",
  "key5": "3jr3hacbe9GfqBSbYj27SdsMFsfEwgX6TuREAuakDk9WAM2QtegQ7HEU4fqQuMdeDx8TPQVTc7wz6AYASM4JaZ3U",
  "key6": "3ajkV8EH82TEvoW4FRSvAhdBgN5AqaqMtVvfLYhqEshoS6uzXjQS426oBTfx2MGUb7fMUv41NswVRQaJpJ5n66n5",
  "key7": "4iwqiWw86VPYRCdgKRpmN939SYMTwLXHrPgaekh8H9vqDPjt2pUPNAtB7BxYvHDmQpcGw6CiXRY5EvqQik9DiLZD",
  "key8": "39bibCHX5NZSbDhofmSQ6AabUghZKJc3kRWHsC1iYALkBaAYfVU91WhT8LnyP3kd9NMY4NCubHhpnXh8q9H2gQ5",
  "key9": "5VH7C2RnRmxfFW6RPqiPYjpvsXDTJQRuvshbsbrzAAxaxRwxfEAy9o3mQvFWZptiVPokZbBhQTJoixYyGAgyvidY",
  "key10": "3H9ZCVJb1JhpXGE29WnZTdWdHQDjbfMs354ZVvpnM5pMidP3FaXnjN3ooBtv8iTCkR6Hs8NnUNfxg6szfnH4hkHk",
  "key11": "39GtJm1iPEfVnecJXVWWs9QgY3MjDJF1sCNHrrFb8iHdx8gg2rhU2BLkwvTR1yvLhT5P85ioePNwT1APoJbZBzaN",
  "key12": "4McEq9iGW44Wjg3hpLXV99MWVCLpy1GPzPe9GSr48CR5GAGKMXEqxLTu94LbWanh8hks6MXe6Q1VccLphSLWPh6S",
  "key13": "ufmysMyqGfgZRjqfDKwaPiiyG6qgQo5aQvYmR7UuLufUdRiHLLurcuoHJVvzR2m3RCPJ6SuNanPpdxH4Ud2HCNQ",
  "key14": "5zvB1jdFVz4uEoQsbk99jDxi9KVcg8X2EjQCPc46xv1DiDUmt4bnqDd9531Scek99ABbhXqJHWy2Exx8ejyknCM7",
  "key15": "5qPkAmMQFVXbqPox2AjWjGfdBR1RKYqvN7cLX4F1C5cHTHB5CsyJVsFkzYRrzZP78aNzf6yAMYqbZWi2VK5Gy6L4",
  "key16": "5QR11vR5wze8CF2eWeqyZCtJKgHBbhXQbzsEMxWdFqN1SmbGreCUUEtuBBebqi7nt1rvSjLLKgdkuCS57tBrivqK",
  "key17": "LV9ivRsBFrdNFK3qyDD2sCTww3YQrj3VVRRjeDMNE68QXt8t9ACVmWnwSd6VkK2nwxpDuFvH4JhmGkMCjyFxk5E",
  "key18": "3TadJ52T5d58AASdVhxYvsAzXeRTD7wwAV9J5rPfXXVTbLceULZmJAM4LfLFeutGajb8QduxM2ie4uTE5dQVrZ66",
  "key19": "5a6KBZJNwsRcdWw9FKfMGRhFaYaVFBf6HdECM2RwdMaAJvFKmqrsMrtH7JXm3wPh9sFJUtFoQutK9arg4K8g1V4U",
  "key20": "6165zhfJn9QrNy6atusmTinrTajMQBQhqdzdXij1pEcN1QQ6sJ1rpzwtKjRC4e9speHJRW2mjZRhtYFyvAbVPBxX",
  "key21": "AESmXWmABne9kvAZhdgRzXHDrtjV2mKSjcuD3D7EKmS2LZfhLPMwXdZ6UhEkXgfhZbR42CqMseGzb6fGnUQzPci",
  "key22": "pkyavnexET1DperNrHxSRaDVKwLmNsmNYkidSRwuiqfGFcaWVCzhrQnpr6AaV9PodW46cEkZbkasFLMXjAzEPWn",
  "key23": "4QBtTWJ1kGTgPTafQYQZp2kvTLQMkB5PBr2oR4idJdgz8iXZoopY7pemAauGE6zYA9wsXTxn422nwJWDdi5F6zYe",
  "key24": "4UriR4tWRwv9UsjWciSqMYxboYcBzPMrVM1nVa4gLXXqFt9C423pq4nph2Y7wzRY9SaMaXYXFn45ZciAXvmKjuPr",
  "key25": "2hje2ayjdf1d2PG5KUDBunhvP6jYTG3TDv4PT3DMd6NynEWdmCE6qyvUfKCusqpG6Siq3sbaZ8dxTKyHxkU8UaAx",
  "key26": "3pqk9NzEuLkSTVV5wbTWg9AnJy3BkyDsuzapP3KqzktP9fJzaDqo3XxbEfvUHau5HVC3FtyqcDZYB3p8pcsMECU6",
  "key27": "5Vq2rPcgehZoNQXx2oYqYhKzbNmAnwLGJwoQfRKxWTfiGB5oD1cjs8p6J7KRMi5ZWPopEkEVaHTfuKQSpxyv3x7h",
  "key28": "4hneFvRyM5ShBztFCLka4L4aETv1AbduBBJcXzXP6PEpvBE5P2ym9m2y7UwNpoMYtwmwayQ79rknLoG2VuH2kjAw",
  "key29": "5M1cMRe2DdFMubS5NKEkKiwSAxhdiWet7Bv5aMS7H5C1oa5k8GPvqNbwjYemMngGGe1BRVPyL1dkNddUUZXSDxBN",
  "key30": "58HjtkL3Ja3iPWdEubvZtnrqwDvE2GcJ2FKSpAnVTFVxGeymP8hR6GQSoTv915b4sWWiRHJPeVEoVDMyr7agSUMy",
  "key31": "4UHUdfTSqk63DrbTniXNCJJC1VazKNAmvNwQderf5rL8g2vFz1qS6Y6uaUdhjXWRgY3NhBjTDeR7jSvKN8bn7xy9",
  "key32": "bLDqf9PPEGQ11TzGMDjWvfip5chtgxgmaxYxqJUTpZUobjB6ouLBSi4qHhbmdtTVYfeC2LQ7myTThJ55yZMzacZ",
  "key33": "58XCBKQtrmXst7MxHUNWFTtpUJzGYsM18zGLkH29ALeCb26KzhFHvBbGr9qUqtKdzmq4XfWh7K8rmPrcwMWVi9uF",
  "key34": "5R83Cjp2vot7tTra6DxWBofnDxgrQjhFg9jyvfz8Rjv6e4w9iyaeYtxdbBQHM2Tyh73FwccfL3rGi9ENyaMEhJfx",
  "key35": "Z9e8y5g3mELWK4BHf69v3rRr2uRdnWDHvyUCFTiTT2PZDMjNPLoBCLMcdMZd5hcF5TwojWadD9jQLAUbBMxygZN",
  "key36": "3aqzBc5a2F3vEWicVtZHmiMFyLaNFXnMj3GGHPAkGJC2iMDf575yJHQhKVGoAvTX3uRPKESda4AnWXcJfZZubHXT",
  "key37": "56yeEoC1RcS9vxLMwLZWhr3Q43Mmd5HgXJVZAKkrSYrf81dQ5HYnpNdukmRCZCcW1YEtFNnBVcCZdoV3y6Cm1FDm",
  "key38": "FQNVmLdHvX3vmPwJ63VWKGxaT4Cw5Tk6b8Jk91hc5cCeNSSFq9PaC2yyYgBdgVhvfwVnBRCt396ggE6k7xnCMt5",
  "key39": "5tY3Cub3djEgaakKSWYXXpU3NsynKCmzY37oP4ZMMBpw7s8TuRMmxx43tbQHarXnnGXrgHvnxrgLR6vmc5dWTLzK",
  "key40": "27UgDogTXaMJ4So7R4Jw7iTm1R6zGEmRh6bVSVvCNG3Awm9v9pBG8URsAS6KFrskqmyKKLXGBXrD84ugw9k9nGC8",
  "key41": "JmNncen8UCz3uu1V9WoYQqU8PwgG77zS1nFaoMxVfy6qGhfwuj98JR8zQg2YQxDZWPUQfgJGpxwYxSLB32FBiQi",
  "key42": "qoD557xZLE5qr7EaZ4DfPugbc31CAjUsALPNM9PAPFidEUyGUGUxRyRkCsXCXsRPsDMNDNcHAjTEDG9BC3P7cGv",
  "key43": "3C93nyb6XE8DNDsyAarw6hKUVbMMkdZvKcAmRLzbT42Sw5oMPaTuqBBb8JWFvxPf3eVuMquMZ52SDM9QiL3wRMQ4",
  "key44": "2aB4ieK5z7TZZL7GZVDC58v3TVBxmJSYdb9kGix8e5UNkGty1GvK1NDSLyNoyxr9xzx4KfkdfbLVBR14g3VUUtxj",
  "key45": "6rMLcKYDa9aBdHG58agmE1298NHAf3ZHg19Z1Z3SSCDfEDXzuspFE3Td8Lgv9kjLtY8kTFfnvgBBXFfDSPeVQ5B"
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
