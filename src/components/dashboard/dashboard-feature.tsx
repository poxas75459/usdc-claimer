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
    "56UVzWMagFpsLNaof62YF9u5V8bbwaW8ppRDLU7fd4uCnrcdNGxBhNeBABdKNvaWdurdUAfrk49AsWjfnsS8VLty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aGndyDfr8jXfPKfnRp6KELotvBgDb8SFR9iBPc4GgRiMTiE1EVnNPFCLvg4kvpcXL19qbyF1ifSNZHVCon6PP8t",
  "key1": "29bzxKT2iZp4aCYauEvJDzpKBb8LDPMkcT7pRHUdo5V3Nsniiaf6CVtXFgEokPAZULQ5efccZnH5N47wFAmjrWYe",
  "key2": "3Wg1QYnKEoEbyPvu3gEWwv5REeWdLLuPZAp7cjCRbHxLSDGB7RTi3R1kHdrbFh3DVghbg1eG4UoHA9XwVyzXkwt",
  "key3": "5yQdNM3aHZAwGWkDMKtFKhcNhR75QHYKsHvDWPdkgnSxpF94za6fNRuj4iVZHqbFFMpS6ujqxoH7NWKDXc2W1Nd5",
  "key4": "4gMJhJi1ukEJQWC4EUnaVXKXZZHLhAdK44uxtpWAWpyxd8jz37vee8fCLhV3mVFMQ5XcAnQ9kSM2aoT2GJa99J9d",
  "key5": "4p4WsRxa2Sf6JFKtpNeQGdtfJDS9rceQoQyVAZXVs5VV1m2ut5VHABdYporJ46XsQzLXryinV5XcbFDUNgAjVpQj",
  "key6": "4wxgAW1maR8MCf5aLz5cShGRpNLQD5UYTGdaHXqhBYJ6y4im8Zg6wHZ3iKuGkHdnnJBddK9vkbHck6PnDtrVy4ef",
  "key7": "1W86i7YbyFtJBGVrTBsL5cjo6BMDzYLikxLXJbTUEBMLFE11CGaPq7B5WP57MaV1BHH8tKqjE7wxkyPNfbVRbxQ",
  "key8": "5HNJF87jzxKA6Yuq8Rc4Ucf77xXQ2PhnKwPXJqA9aGsFkUk4BHhY9JE7VWqdZ8CrAgd7fM2zQpau9Srwtsd479TE",
  "key9": "5sE2ZtiC8jBfxSKDZPt8VHRMmwkVTwYAe5zMxBeKbXomMdF9xNHjQ77qZ1qGZyQ35G6j68pDLn8TxDEg6s46nE8D",
  "key10": "3aorVLDndJQ8BCgJZnBDsvgMFsJVQ8mKZenuywFmTvYwtRMCaxYN246yLhLbiRCeZizzmePNanT6wYr8GSbRKxb9",
  "key11": "2ZdPH6BdZQ6jAVUCJTQPzRxXSgytjuQQAuUZY27MdRXWCbJw5LRdJ1P9eu6fDet16soXrhy7XaqeJJ5H8RoRUJ4n",
  "key12": "2AMEpod9vW4nrSWNVHaNXgKRMPnvRz4D3z8foCan9yTS7DkhnXTFvQow9ru1Y7tnxm9PRsEe4qst4j944vDY3ueY",
  "key13": "4sMy2cWceR3DeNVDaPkeVuGaFzsYLtoTd16hZePYEPmei45gVxkhMxuvYDWMxnuaLeCB4mGeo6Si62g8ooEuThT9",
  "key14": "4zTYFHEruYw4YbH6jzKymnPV5J1EVjmx9WT4x9RpfxCcCS2Rxw3Po769Jx95wdCB3E9qGfXtGuzRa5cEV8dKrxzh",
  "key15": "grBV2qhK4H5vTJSM5tBhQbgc4TPGAxNrF1HNJK21LE84CjbUr55S2ZX2HfDoBJDQf5E5Xw5tHEzMAL8LewQhvEY",
  "key16": "5VKepTGcXVMfCbuyHgTvTK6HJNTDHnWhPCMdUfdtKkev9bB2vomBU1EGfarb5Ks1WEdepZ3TjnhC4upGYfCC4bfS",
  "key17": "3SdoNxTynbMoZqPKTgnoikj9pXULxZ55QsteKZi24gVLQFX9TwRQoK81HJnQFj9p5qHc6xxis9BHpL7GJ6HbeXoP",
  "key18": "ScGY8Tc6d2jBTjHqJ9kJ8r3Q1bt5YPzSwAGygNPG6BSASkhTk4ohhjBaKtggdpWMyxZ8voNS5QoGGp9SYJqw7bT",
  "key19": "A2XMr8pJeo49ctLL5Ewn1ub5rc3ZaHhBVKxZamygQZUvzA4kJupkaYPXvsJzMFFD1fWKk8Hmt6YotJnSuc5m6jA",
  "key20": "4Cqysmpgo5oebDSubqhmsELpGPTGRRmszYcHRimzttYLBsvEjcQmatir7XYpiWgczmUTNX9TGAk8fmc7Git7xY52",
  "key21": "3YVHNYykm7t2J66Ngio1bMpP2Vy99gkNwaACKzJRMwL6JcrtrDm4QBdmGhGFKmgMHP7mMPKHpTVf8oemSVGNggbr",
  "key22": "5WKFRMBaQvyMWpY5KxSqp7gfjtdKNBJm1XPD1ufczXLzSkGJuZJ5F9iYqqEMpurjCs2ckSMG1Q959nSF2Jz1W93q",
  "key23": "12by5Pbswnvm4dPsD5nX4kuSfpfAraCE8QvLcafh9HDbKSJ9qyzbfuWUBo5RrMpruRK3Xp32gSUVMqBZHB1Ghei",
  "key24": "5jcfpvf6TqnaeA2bcUVen8w67ot9Jkg4b2XyymgPU7q8Y6vN5JzydBefAxgM63Rep7kcqgqMQCNzC4FxNDcBDuu2",
  "key25": "64GeUsWBXHZSjUde9GnjkEqSu5mg2FBRbDDxfWVCoq7AVZm7J76BF8zqkuh4G3inZxQEgKkgbXsjBcZKpcifcLZK",
  "key26": "5borEDaXxi5qceF5V4e4wJbMN47emw6TeUpBagAhw8NGRnHwEZWcVvZHAaiXKw4uvkjD3WEEvp3Lptc9cQFoHAFj",
  "key27": "4m7zfANtqnJzAcrBorDd27uK832YVbsN6XLHFp4vJfEwwd78aqCnxpGZTFmektpErzWUyVrbhpb5Z6djcuBHAwUN",
  "key28": "3CqfqtcAo37FbhudchfhAxeYxnR7uQTmff7npREz1ticaso88n6wpPZr2ukkK3TMc4sAT3LkVTn2522dsZahc5wD",
  "key29": "ZxEzPpwsKBUjSvax8cAzYavqg6gt7hBadrmVgYWi6bJEqfZ1J1K1x81dVKFy8u1UCfT8H8mKzxzjxHStuoyeEd5",
  "key30": "27a51i5RBmPBqndXDWjmrCijs6ded12hnnnupo41Vf5T3DuQktE48jpub2thBvYdW4seeowWf8d5NWkV8QtriyvM",
  "key31": "5iLj9fL7jrb9qb7cvQSmtR5kJeXQvULy5JGawkiHneUvuWsSJe9XKfv9bQvm9LW6czNCyXyB8DQVHsBLfD72QPi1",
  "key32": "4SdxwuwRDGTG9CJEvYhWjFH1mEntjR71d8grMrkBRWQrctvSQHJBoBN7TPYS5wmZeNSQN9dsRQdQaEjxJjjDeU2S",
  "key33": "5idc1EerexgbmVUhHq4NnAbe3fxkKTcmf66dCphuoPUFog5BxvJmvU1ZYPCp4Rp8BFknssyV86b9hP1wHu8bovcC",
  "key34": "4fEySDXxfh4vWRFmtpPLHxEPN2uvTEjweAJYAPPqN1tGxU7DCZdSKjXipAhr9j7WnBaVwQtMdrwEhWuxLBHZKySQ",
  "key35": "4uMootGn4CyiiULt5UhsP4u9ZeLqvP3KvWoTA3MZzN6mDnzVS5rdBo8XBocMsVAJrz5V5QYtstEVF9fEuEXLLffQ",
  "key36": "2ECT2zkXTxzWqVgbBJNJMMX42gA8fqc5PeK4kQpd7H9KMk9zJJSKim13vtuhTn2eRp62PnxKvAF4xBKDGFWMK4kW",
  "key37": "47qXFDxeUGjXupv3GFGDKKqiT5bKKnaSy3ZJbGJnzUS8G1Bas6uBDbUa29vfh2qLjNAcSZ3yQjaUbdsCqRLV9ff7",
  "key38": "5oE5U4SQCmYv5mjUs913mQF9WxGkuyFx8QFdgpwmhHa1JwqRrPUiVLuPZHFa4xGtfUKsX96hRj1wcfMn8Pv1CVuR",
  "key39": "56pbTRjg9KdmSpUrJkiEuWmKNd7UjxnpgWRGMZMdhSxCPCxcy8AHnGgNYXE79NLpPdgSqUVbdsVsqgwi8QasuQ3Z",
  "key40": "47dztojRu8DMHHqZztW82b5tZmgfTnKjqDUFx3z9siTNsUN8Vbh3VouTPBrR7jZcU962FhKJEn8FYvHMktQdBnnb",
  "key41": "3qnXgYpSnkkLjDdnAE3LSJLd9HGjAhmkmnPPyj2RoCKECLVPQCT2YCJwPAACq2eu9tvegh2NFbNaR6q9CMNXwf5m",
  "key42": "2gaGvUKNntQodK6uwZaHQu56KNcCatwVCTLRhZuUPKH5qp1Fhi561Zo6aLUqrwj64MDhFBh1fDDpjeGA3L8vuTip",
  "key43": "35hn2syGQrMjy7wrt9KSCJtK6QzxxUKkKA7Zg4HkQueu6TckqMPhAc1Scay1BamV7YJf3rXaScJ7Ks8Wkd7mh9TX",
  "key44": "FNNCDw8RxE3dVEFwga6eeGcVY5YvW9xZTnUm51dwDUNhenjdjkY6CqbXyMxsvk94Jj3wmqN1ZqZRRRv8Zf9BFyr",
  "key45": "2Arn6TJdkgTLNkktUzVX8rxdA3r4zDdHTcyGiHHFEuNe6VHfHNczfHujNHFksQUMSgn2uA94aNTsXggEPFbaHs2e",
  "key46": "51FofKiwYPEXNs6CZMnUPNp2oLYCCetu4YtxjwYLT4tW4ufQyNHgbsAUk14XXm6rSiJx5D4QsZDX6GfRzSaECaVX",
  "key47": "asyZbPq7s7KGWw3M5xtrenfjxV5dKkKSyDmxbxDvzB3xQR6sgTQNtv6f8kBQQmsGNqdpZhdgisHxp6onGM1EoCp"
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
