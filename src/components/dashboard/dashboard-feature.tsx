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
    "2XmB3zpNsoYmbbSen6dHytXmQpREKoodDyibv1HikY5jfpnHzxrWCMsjSgJGhyymsPDQ1yVKTEMeUcw2jG3deuib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BhXqCh4dALnbi9BLaFMc7r4eRcQJFGRNPN9qPhe5XDppfr88CXJkN9BvJy56dKw4KF6VgLjRhaJia4KkHDtMMH3",
  "key1": "3hiEJi3SwA6WWPfnEW8pWZag2G1MCqmqYCxi9RLrWkdFaydHKTUJcY6o5j1KgoRPQuMKs667K3YFtyPnjoBDTZtG",
  "key2": "2nqoRq2mm3qnBZkAZj6zuTpSboM23mCAdkVdqDda6izNo22k5NA9hqyZJNnKxNysBwm4YqkGVV3viworbseLDW4s",
  "key3": "ZtzqqefmHfFJa8sKChEGUG28xkJ8oLCVNCXp7RgGCM9FDno5zaAfCcNsBp1CNiKDrhQUtV4wgfLoUQwDyYjPvtZ",
  "key4": "4mfyT6ch563VSjPLNcTR7NSj924B4vQ1C9ewFDNsvPD2n9KPRAha3LsJCZCAtDM4NvRFXbWwBoEHWYEogVbkPpEn",
  "key5": "3236htcLznXf228Svq8beSguJaZ4intDMLXMkeEbVSipViJcjpByTSuABpN6PzG7Tifk7fhXcdFP1GqYbEw7LyAN",
  "key6": "5Ma7WRj6Byi3AxYZM2NHuhSou76GVu69RsLjKoD2upBByVwPNHjnhnaRmhkSw4xMddG6mW587TFPzCGRD7jgYWJy",
  "key7": "5ujiYSBrJ8uK5Zv746bcbtt7vyt3wcgWXFwir9bxqqN7yXHJ8GvUnqYCnBK1omgdzqFR4Dre24yNSEa4bgh7kqtt",
  "key8": "5D2vo2P2h9ZwB2TAvRTQdX4wwA1AB7t4vNRXLYodGYN6gexE3s4TbP14gb28GNbShkn6EPevmP1EMkEKYkv3KWin",
  "key9": "3W9YMaXsfhY2oKBUMG8viG14rxm8xbq2p8HNue91sEMoSC6bg2uwSK8oAUcZfwGjtb1EWnF68CFRdWCgGVWH26qu",
  "key10": "vb6nzPeUn3CavY5G2xd16SUVuRhbzeVEcZdnEitdAmdhWPTBZ8sGWg3n1qq7VuWUGSEMUxYxwFGFkKPQk8B9KZm",
  "key11": "4v3j8urvqJGLfYEKuZq2zZAbruDAHfeHetaZzBj6jtgWambqyYsaR9eij8CHHmS63yqwu6cfCbcxWG11LwJKDTZk",
  "key12": "675XdgsWVXQrWNpSZyDqq7MvdKZpgDmwqh5ntc9envWXPjRXbhBUhHRHYLKHij5HDdGhjJRXpgxA7VjPXeNpiJEp",
  "key13": "B1fbcYit1hJss7VsbJAj5159phAghkc1jUDFjvtAGrmwcAPnNNi6P3XNHAMxkK9cx4SUsX9Xo44SbEKrJi13PhN",
  "key14": "43WYovYKwLsdg9KKuLKAdFMLZfEXmCvvEgXLFQn2z727WZJNgdoyo4XVzh8TEaEJvRDX9BwXCd5qf9qvFoXYRa6H",
  "key15": "2i4sgBeg6oNFmUJMSY4uiZKnHMa1W3JGsysMhNuHHNFbxBfZPrN85EWZPQGbdzLXBkXRpvzfYtp2Aiwg63YDKfLS",
  "key16": "5DCNhYbMQEWkDpFPxWeCeH2eXoCwS5uv2Nc9MEPLaxA2iNcsstFAKRe82M9zSw2AEpXQHH5wwhcY8dhKjYHogC8r",
  "key17": "pTKb15wJsxU1CTPXeHnCyMhc6pRpGKNjuTzhFsJzmzM3CkMNc1m7Zfk3m1uHppp587bEV5ytpiu3axQqmc2DXA3",
  "key18": "679JUb78q42vAWqc8EfepbNFQxAjQUCMv7uDKBJJacRnSUfQWaWVrdxMa4Ky194jspDw1AbPohudHGsa56HnyDxK",
  "key19": "4i6t9jWScuQWzQCuf3jzvnDbeMVpi4FNEtH1dn3EywpfyxJYjWYrWUHqfMBy7jJzXqGMrVGTehZVPyGxEdffMc6K",
  "key20": "2NxhJxa3ASKnqGdxAcRZn59ULyvg9FDwLVGb6TPiLeheFQcVUHy3r47NXhymTgUpbgqb1UhkLB1HEvgbbEXxvgMx",
  "key21": "3pQM7cooki2r7Bi5TY7zeKA1SrgKfA1McTy4Bsk73BuUSoeMfkutSki2Mmy6VirFdqanVMNvxYnpCM5he4wcYsD",
  "key22": "4cz1AFksNFTdTWsFD6GwZM3rXAUbGuyUkwPHHNViFabTKnYb9w24WL5AKUfJRUCKuX2XTffm6kuneXpUc5aRnZh5",
  "key23": "3FyUqvgkkkvkwWojWRsuW4PFXe5LfgVPzwFGg8Zm5jQCAKygzTsHr7NpvktKBE3XPhCUd5fu4iVgvTNeP42PgFB6",
  "key24": "26VLzJyZzYseD2GXXunVTX47x96zWiNuDa4gLdBcFcUqEE5E3DS335Q2T1CngiBYbCSkG6dz5f3NzcMW4o1f4Ye5",
  "key25": "5DQpbi6JdHXQFXkJj3hRc6MBWCA21dU5F4NuUdtuqvJRZceUpFDM1ye7u7WHEjZDnwFHN1ivbR6hSrvcDiC66b58",
  "key26": "wbWCHQVadRK377NW3uvbQ2J8uXfagMWaNhbS3wptapYSgyriZtXbH1w7dtBvQk88b6mutpf7DSkMWje1wAkwoPQ",
  "key27": "55SfQ4wA11TfxbtRJn3gRe2pG4Th8peR5CbgyjKBZRMDGPEkz9XadcugtueAx76VJQnxypdA6KZwNyV6v8MMLLGG",
  "key28": "3KzRC6anJw4RP9nBRoUVhUkDVpuZYtB8bSaAdNPaShSBCqGc6g435VNKFSer3edkVpTabktnwqUhXd2Xzeuk9SdC",
  "key29": "4gWLh281miBBPzfMVSYCLyD7FQjZeMYrDuiKHVjV4y8TWT3FrnK8tfyQwpTZSFPQBqu1g62mMoZVxLk1q8ccrrCS",
  "key30": "4n1dcoNP4AdGuS7uwoiKDVLkpB2wtUDvANU8cqnrXdrBHaXdWjavcZwWo1MqiyZJy6CcjVENrQsdQsGsKErPGvQn",
  "key31": "4LBFFvEc5Sfqppufx3z1xc5j8iRoQgaSedg3qrnSUnkWwMdmJwgABtrpwjBSKSuVdFgjaAvnPwFkVZRzCczngAM7",
  "key32": "4qYEZZkD6DoHp3mmgeXBvWC2gUYFKdbrR5qkhYfpQ3sgdLhVwudourH1SLpNK8XYA8auLrgj5FSj9p7fSBTD7o2",
  "key33": "3VjFueH9ySt4f8Lq2nBeifNfeqMTBUCUMLGYx2eFtEGXQeeVj2VSXNJbvE2fwyrYmhRCZiR13GpFFDKTVM6sG63K",
  "key34": "22wot8jMeiPKtSehM7upnVunwVWYiXtZ1edEQExV3o3EXjEUBxFNYrNF7kJcFFuA4WZkQwyzaLWczZUNGj6UESfj",
  "key35": "4DJNxdFqtgHAJP7SztmzEGy2rUkNfVskTiXxvNCjhNocdJ7ntn5JrsgJj1XTLHMF6qYwWCDHQ75bLCWEFWqcrUWY"
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
