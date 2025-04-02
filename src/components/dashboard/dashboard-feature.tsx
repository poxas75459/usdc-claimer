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
    "3HA35v69G2KJEGTqdma4Zqy56Dc1zmg24VapAxT764w8s6M2ByknU3wpZSX24eGRSwgbu8FePz7igiKuqiD6CGef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wPSfPDYUNh4eYjvCE2zz7fZQVkMnbgqEKLZiw8rnu17DtJ4xNVi2Npkhcte6PF7kbZL3HUVsv46ciC2dAyxr7Pk",
  "key1": "uk8t9Y9AT3vijFgVjZz2YMz4uVG7tGVw2nPrXVWSKUg1siGQnJJzPALudP3vvyWtZEHJgkYHDwrg4thmz23gXvX",
  "key2": "P7Dzx5YjYJqbyH8Aa4G5P4T95XdsJCRZhmh1HeqMaySPA21hqg9eAQ4KSkQpaoFsPLc1zDcNhu9YEtCptMEkgxy",
  "key3": "2sf4qkcHFfh927ZFGyVkQZsDw6ybUYkbBRR6zduaxc1PGhAYHCcr7ugk4rK9pvELQyCtVGFEqSvLBGvGB7BWgib4",
  "key4": "kQ3XGEG12YPN3uX8jSwuFhXxAPiMGSt7oQ2khZrGH8fJq621ovyKtBt83eTAfXNYbnYrx2knx2TXRNPC4rS5WNJ",
  "key5": "2g3jFYqQLE9JkePirwkHSvte2NF7M6z6HiHcAKzVdSkwVzRQoWzCvmk71WFBDZ2wU67CrXsVSygwSVLRN9E5x6vS",
  "key6": "BZ4SFNnagtTGw9ZrR3zeMQ66jVr48C7HTGV9KdZ2hsfnS3bVibcaKS7Qqt6zQVzeGcmFu5jziTSARH85mkVUMxu",
  "key7": "3wDse1o3tENFEJmc4xqiXZGpSwLSgYurBFuZUnPtRoyrYPPLXBZnnJpPRPTa7mPJ695ukdJzNpSoDp8ijJMgRFxH",
  "key8": "5zGTz2aGKXCd9JDBsSR8e9t1d7cpbK5wvrkVKXhZmfCzjMSd8LcVoxX9qDWW9vegfbvgdyvn8qA83dH7z3TZykig",
  "key9": "3GWCaYHX3Jx8gNZuJZ5q1Q789u9HLWrzKihRXvqiYZuviF6CRauQiU9FxGz7HMLCqprQSkSNZCr8pVmbhVvP1Zmq",
  "key10": "yDpDXTDD4bGwFz3wk7u93Yg2dBXwQxV4mP7HEHwkdFhraC1Vv9wvQoDe8L96YWjHdgbvd7ULQJNLPnSrsQytrRe",
  "key11": "bvjaYvjooDLzJNQ8jjcqnUZsKzcfbrVEqmhTtZbvxb9c5EboqVUzewr5YBLCCuSLETxUsFbUPrLyFNqaoGhFp24",
  "key12": "5XB6mQiRLuh3hnmiPmNmURRmuaG9hTCiobRNLBqg37uEebpVoiV3rptMm2X994VLDa36aXhqs3FmkcVPnNW3Rjj6",
  "key13": "3f55sPU8mV7LfYMvMDemmQ46nUcVrWw1GEhSA5UE78LEaFvf6yHbd6vVr3utQnK4wAmYYrvcFU9KVrSzYzSbTTZt",
  "key14": "aX8BJbRktP6TerywGVRVxDsqqm8WXXtfvf7bSTV1FruRKNWLFCoGhV8iRpAF4Y7vm6tUugbDpzyTMaFAZhpGKNx",
  "key15": "5wpFUriiZA3aAT9zPkJp8BEVbBnRnC567zVFUkpyPfbgr7mh6Ebe7enG6XTD8FzHwrMmn65WRoXN6jAGTXjtxW4C",
  "key16": "5RA2pD5MNXjQ5Qj9arMJQUHhk7Z68xc2wHiZuxid2ufxW8hqybGAujqZ6t4ZEMX8x7fL1tTRU5FxmKCDBLZc7JGw",
  "key17": "3GkZc6gXe1tbuR4vGCLPsvyyfikLQBP53MuKLg2A6WN9LzYGMxMS4KdgvcbkAhqU1vyxiAdtYFbh4TrYjVFsdMQ9",
  "key18": "31UMsJe6FLV9B5HyPwWLHk5SZiWf1hZLGNbWAQceBCRM12x1aiDZH5a4gTLzwroSsnCw86mA4CysuDywudoAhBRT",
  "key19": "3xzYfwbr5beQ1pabbukHhnjdLMdarf4nyh7hp6Jc8yy97aKfNCTRx7BSHoiShBTjjBnLBbRdYKhbrY2Riu249ot",
  "key20": "4kv1CvZM13BuUy8A3tnfTRT6GS5XR4XW1LP9XTqSEAAR4qfZ21vFuVkJZJfo4SMA6X6c18VkNinapbDYYBSwiVsB",
  "key21": "28pVe87LBRbH1oLydn1g9pxGTbMwdJ4kNnprHjRqXrLuhDy4pp5xEgBdjaAMJDVTX5NU1kSgVhV4RTph2UEDctbv",
  "key22": "3MvKLZ26TPLVbJXi26C7kBJkyCVpptnuB2VZ3BAQiVZjvSiVLqrQyMcXRMKYd9S4USiv1Wj6aUTsmBznvT1Srr7k",
  "key23": "3oAKm5GyiENRGLRvZxn5eHxm6f4cSDh5CZW2zpsbDC1FkrC2HvDVPHoJFag8BBK3TaHb9ttn1PXKg7Ld7tX8yjAo",
  "key24": "3EwZFkzWi36TexU32sQVaT1wCnuQMMTMCL6drwrEtxG9ksjJeFJtddhZzUjT63bjz23JpRRmu9Ue2C7xmjbe1r2h",
  "key25": "3SWaoT1fm9JtXhbBq2MozzGLTBUhmJSrexcxNHChh1qFnxDKT7u19YMfq85TLGkPz81iVinV735Ncej6Cb7oEVvo",
  "key26": "2Gs7JmHPQYwKq9PtjQ21b7E8EkH7AoLN7LPV6jDewPfNthhHPv9sgJRUmAiKAsMiE2LSKGyfrAqrUZo8vHumtY1T",
  "key27": "3WsjiF9aquUq8Bdc2NjpWXSRH8KJqCtF7eVKBHCrf3qiytuz4JwDFtaSMaiARF8KhKGeykkKrBS7hdUGnbensgF4",
  "key28": "tfC9XexByRmDnk8nGMEPYV2CJRgkKp7FxChUEJb9j32uzz9MDhGUS5xjD7fkwHpTcvziHaLiEEtfnSX5d8hak8X",
  "key29": "2rbKGc5K4NxnSRMuQKdFqUFCNm3XnxtPuu5DLr37GP3jYK71nBhcmLFTbw7u8YaZHKtPLyngH1sY4YDC97fiTqH3",
  "key30": "5q9PXPW3RTofP5Sky72X9Nv7GL1aCm8NwsYYmgki2LEzNMjFJ3cNh34fnYJCwgovWS9khvhihfzTmMHGzMQJaYWH",
  "key31": "3XLTddia12UdMNwFFfgwsTQydgSx9B4L331gHS9sVv8oP8qRLMfMtt7dH1nru5JXvdoKjXRoFVYxGC62w4hdRAhP",
  "key32": "63KGfMCMbKKAM1JAtQyhvJ1JFLdSswdTjvzw8hZp1g9xhfL6MmrtH7sRiJvTjYiRAL43PPi96VcpunJM5hkY5sRU",
  "key33": "4GJFEjwLHfgzbDvrreskQEuy46qd3De2FkfagQw3LFD1L2xDEpF69kZb65xDX9VbB1VQFjPWzT8uVi8v9zAqJfdY",
  "key34": "2Tuin8hhXTdFmoAVcpHsULNNgYZ6GFA1n87JP5GSaGAqTofk8JJHJhgMGFVcebczaNRwWbJmibmbQUmL71BTw2ta",
  "key35": "2ArXZh7UQCBGDqFXoKr4hLrDBNwhersHUsNT7x5wALuLUmxNGpWb93bxpyoSsgKKaCyZhDLXpZpYe7hm2F1qEVVe",
  "key36": "3CwwY9VJnWCPtVepse2WvCuufmkVkRkWtDRm5Hpn2meZXLu13J8rGJjgy5HHaiuruBAw7M4tNmho3or7eYjZKfvv",
  "key37": "2yhy7RZwh8XzUS2rA6Jre23C3aQNrBGANHQXM7ZDomST6X23UoZinko8d47VMkyD2U4aKg5jx7sBnrN1gXpgfa1a",
  "key38": "2nfzayxSbAvncMAKcTHtY9YvS1YQmknVK8FMJWPrKkN59ruqYJPpJwYxb7yWC44PPLTxemUXNB3zSi2zkmTPKipe",
  "key39": "67RosJf7DMWSd7ukkk1QhvtW6Rgjd6MMKF5vf7LkuoYRM1v8nPdN4GWMPhYiyE68ZKTyemyqpBKF1se1DbsYTYUp",
  "key40": "368wPhrJfwBR21o4cb6hag88e25Pj4HG9HoaeQqFpeDvgwNxU6xxvtcbNCY6uc5BiceNhPZoNE913Yj6NAEdc8w2"
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
