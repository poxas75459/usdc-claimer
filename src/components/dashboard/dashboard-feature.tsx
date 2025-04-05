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
    "aK2xkU2DZVknTgimvmaKN5Cgh35xTQv4Q7gywf6DEiE1KEnpVFT7Vn5y43WQmrdpnCso55MPurnKZ2rXJ4BLgPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U1tczABGLZ527KLmTWnXeB2AgUu2havTT2igeaXUpLNQUn6MWFnNVL3jdHS6jRbUD2jDi1W4pHvgLCMUKcSyEBX",
  "key1": "2BoeMUnFrpC9erapeV61L218j6sDQk3vHRtiaKoj4oNDCYqKRjzqULPV76XZeQs7aLWLfibpgx7C5d5eH8vC934n",
  "key2": "CoFFXQAWgrBk7zExaEeuxtqtnMuKWTtZsPtffc6W8DiRtwkdfraLz3UtS48QFPmTSGDHvAYNAgRV1SVJpcNFpUd",
  "key3": "3jhbmGfyrJLZKem1EkDH4aJ8KYzdgiyVYuyjFB5MGw2Cxg47Xt7dWU4BLoMFP65EA9zrLpHd8eZvnPMam3UnEEwJ",
  "key4": "49ZzTHJ8UDusZ7Bax6vJmxCwgC62QSiYDv8fAaGL7QnDufQADSusDhAV1J9ZwTySYEXoy6gu8RAtXNeb5LUcj21y",
  "key5": "9yW7TNya87XKvMkKcC4YwvZrqdGqUNo827bpbhSdg9aUaHyk55vzgPkVgvqH6fN3iUvZwLoRePMpsXe6xApbwi2",
  "key6": "3o1trPiMS7SWzfZj5fsFqub466eHscaqUViVDR5Lr3NYGWgJtQUMbprL74KGPL6xZnrAmvU5niGBzQEgSiy3MnSH",
  "key7": "45jZ9jsfFYinVMkhNQmDnpsunTm8XvNzqiNGS3aS69sVYd4Yct3bLW3frRLFvAkFCRetcZ3yaR3W4ngZvLENLMMs",
  "key8": "2Y93c6j5ZJdMjVJvWwpdAkHb7spFyFS9VUZ8wXrSgvcyvkaUJRg4epqQErZdwwDDDehWJSHthm8eRbKuSE26fE1d",
  "key9": "31Bp3FNtzLUkByUHBQq7mBBf8SrjJFQ73SxSCqP6HE8bu4xLhQgQ4h8kL5toJsZU9WijCVaC1GjbLj31FFGJ2Twc",
  "key10": "5wRsDsWqVUp5CocysRntaeEYxPBsk1tSTiNJjT4DEmgpMB8gtPGdi8WfneFUxZLwcVH3H7LCH4uD9kQ6WXQTdT7i",
  "key11": "2p8r8AETzx97KieiKRtucifSp55jFHb1JwQpbvJxKKzq3LnPQCeVR3QPD4sp7TL88pn8me4KfoSWZW7UFNkL6rVq",
  "key12": "5sjkzXqguGb6L1FKQuHGF9A6J5m47QrMLhndJj6VwkPFxk56cGdsHPYXNW14nturTPj4gvUaKNw8PRbrCzoCSApa",
  "key13": "35AND62gx1PkhAAsUKpFscBbNfUt676AnCKuQ2aV2XynbNo9oHj1zxZveADcTE2p1cK4Rqt9jwsCtNdM3yKKEbse",
  "key14": "3tjn9Mi61ws4mZBdHfjnctcncstVs5Y8GsSKVWLenZ19Rjm4aPWhBuLLrbeN9e5GymqX9Tt7vd5rTuyNgEHaxnoX",
  "key15": "2YoEVzXKAvuUDKBzqCkpTFpit786z9b3pMLaSJvmHiZoHuZUqMzCPct45DBYxgbPDq3EaJdo2uhsHPtdFBZdmBNy",
  "key16": "2X6ocbptL82kdEPLq2vtzGEXkQPMD8zc1B7msVzqLDyuF7YqGwRYFFTS2NC1G69MJxevcnSr225P2iN2LH4dW5qW",
  "key17": "8M3AmR44L3D39TB27R3VpHi1D6CGm6jk65bZmyMQfydihuzr89ggD8wWXuHh6iCgXheq9Mk142zquRZL2d5ftJE",
  "key18": "46rNrsb7q9qsGr4XuzmkCSBm3weLyNbhib6aPKiqwMwMiF3wi2ScAmK4pd4uQwFrxvVjzyirz5qjqFWyBQoFrotg",
  "key19": "2xhX4wPvxh3tqVLUQC3TPHH7G5CNCC9EJGKgZQuJz2EHWTs8aMr71AUCsu2fi4GJkqNENUD8Xh1Pk1y1Wjk1Ykpg",
  "key20": "4Nr2s71HXiLCHy66tg8JpyiFAx65xWKpjiHAJAyJsW8zXS3pz2aaYeAPk39LK9X9k8GZDKfd2a541Je74BeYf8Es",
  "key21": "2K9jMuox1Ywtkt1YCPdUcjFUMC93yyTJ49VAiTPmEadSafQRnK4MdC5GCPP7GnzxH8ZBt34btnbtW3wzJk5Xib3J",
  "key22": "4RHdLk2WzG9Z735MV9eXiBY44qMHYU8jzvnJpqzcQ7PX6aFmFtvXBJMYS4BQKDXCzwVJSQwdeZxrB9mStpECcRe6",
  "key23": "5JKRW48ob9PG8rBvKqHy3H2z2LGxLtHwkZus6Gp4RWuuDEqHHNd7uepUf7Hf7LxsfwCFES8EK4Exf5Nw3zcoTSNc",
  "key24": "VKg947tMWuBQSctNNPF8n8sDBZUtL2UDtDiYt5fZXkL4MYGNVxNwnkXLQpYA3JxdjNAU5z4B64MpbeUatYjvuYb",
  "key25": "4x1L9tB7cKpmCc4rsvX3n5DX2KBaAWbC1K4i9y6H5UGWjhjTyhdEz7VGwovCVde4xPMCp3W2y2i6RnYAdk8Licpt",
  "key26": "4DNTmdHSgrqE5E6ESdedKPUPHA3SCwG8VoQ4zNwiuKQCMpRMHXL8vrQg5rZFJYYrVQqdnj8c2htQgwEEfHhWPoFb",
  "key27": "368TPLaUmxXth9xFSa8gNq9zUXBJfX4pQLRu8cePpPzJadobAegKNgh55AL94NwyXW2Mi1dSwGLAFDrEEYqNozMS",
  "key28": "HoruqmbWx6n9zhnnADazMWdcW95wF6ChqjPRPwsBGUwiWiUjYw7KXVozwbPpU15TLeSaa9RzAfj6wpgpcUfoPwo",
  "key29": "4TgSe5YuQgtX3qD2owGF1Ae9j3J6bH5LiaVitgyfa8hmdB6jJ3o6yoFNALoXsK292pFD5uNiFq6u7PxiXTqZ6zj7",
  "key30": "2xVaEBDLNpXdzi1GZMFEYeiFcQwrtQATn7RY3byuZbHu8LF2P6JzbjA4UEtxybTYQKhnm7gd5hVcBmqq6mZNaPw8",
  "key31": "2ykYx7C6dkDB3boPfbmV4yuqhpVr71YKnVxoyvSuZd9bSdj8UyijXjhZKPSzTwTif3hTMYgrormFNRJUtBxUQi32",
  "key32": "52VQTfQynjt6mStVe5mCrnETHvog1Toi2gy17pWam4We76B3r2LLp9oB9yB2UH4jAYRvLQRELg9q4KAaG5RyzY8M",
  "key33": "3cY7y82CNfUFidUkfCovBQ6JdSRLjEzaVaN5nSuoJmHEr8EavQTHe4QXPz9by7PcQMCJn1smztoj9BU8BLeMXZdB",
  "key34": "MpBC4xqRVcdFZe8pXoSMdcAiDcH6AYsRBLjuCe7LxMQhFz4ykn18V3jLfGYHN2CwpFDybVn4GDv6Vsbx74muzyv",
  "key35": "3jwpdzCWg2niVYHNiMzouWpzHLMunVFYQy9sZzqeMb4QxQMbJkhQZ8UGZAqGCZ6KtsqtYFgdotVxf4xvk5cNN4EW",
  "key36": "5ct9Kv7BjjnJsZAML37cRyhh71dKM283KDfySuugc6BKUsazzUnhwkgCGeDvs19SusE8YoJKMFv9ZNNsmkU8FVDx",
  "key37": "2QHD4dz2vY53UeM1wP5x9auvpPNNTmRXHgFiSCBtKmkYDjkcF8MNhxcnUZooeBzKbTn9N6ft2AfVKUZybeTjRw6U",
  "key38": "5ecVHYcfWBeLPSSLjHwCL6R93Nui9VCxs4DZFRHvesAEP2CWs1AZW8MtLTDo6YqFNG4kXrMXkqV7vQPoVMKFUMg7",
  "key39": "47ugFSBBmB9PSGQX4atjqKTkSA2Dxx9htEZ1StLYHcozGCz345JLbfUXEeZtNghx7E5CqwoQStdMnakUihAqecuL"
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
