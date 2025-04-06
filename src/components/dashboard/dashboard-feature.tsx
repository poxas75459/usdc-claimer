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
    "53G4vMtMP2uEz1cH9HBmcTXF4H3X6AMUnXh6jp82nK3C7rxVPuzAj4LY4H8mvzdnF8HhDibHtMonyMhP7PHoEaho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vam4pDBWaEMzHJR3gAUJa9FvMaBbbKMh8ag2ExrmsbtuV9KtLkaxrD6hVQpNEaLHoLvsZLVeAXxGsifJVRdi8EP",
  "key1": "89y4QUc8CJb5khefekYq8vomVjzSRiTp9TdUBxkyZcGJiAbPb4m1hpt8zvUV9Xn1W5ey1uR5Tpbc44L7EAj54oc",
  "key2": "2vcZ2C5gXetzYhETiEDix6cfLmkJMGxGKkcofZKjR3jTVnze9aPBmD9tATgKbWawHesyArpcqC6VUthKN8GWntQ8",
  "key3": "4spzgSgAUgBvRFZA3iw52gTM7H1McqMpyJjcfYDxZYYnWYQ4TK48QmBzhbSwaapf1kXynwRDJFAZ9DpCAHqzufx1",
  "key4": "3wvWZPrStoErT3bX7fxEDcrXQrghKkEeNdfyue5YYQMaEHdMDTVQLqv2vHswoagB4eMkHPr5ubKfbpKFW7n6Vv7f",
  "key5": "4W88d6phq9Zo3hLr7HC5PXqgFzEmFCdhN4w2VRCD74MGAYM2u56FHWQhrYfcVr6ugJtoaXGinLMWGH3jfWNQSpii",
  "key6": "28JRKvtBaYTBNLi3GUdd1wMxuaHnpGXJhBdTqCDwc2x9D4gxMgbheX4X17n1SFgFCHW8nk7WNYs2DrUr49R1Pw78",
  "key7": "5TKigHeXJrLhGa4nAtVTWWy7z5pCTUk3oLCLKBDvDZQpNZnBG3fPdjz1cRNSEmadg37bzG37qrGoxNMZgRdQN82J",
  "key8": "5wpTyYMF9i6MGe5xyjUd9cdH7pkEtWCKwEVB4GqcThSvvnu7hqLBe38WDPXYTMnsARQQahroT7QWiyVeYaSSKoBT",
  "key9": "5XKigwccbvw68vQdm4MU3HZrr3R9XBM6wMm5ixE8efCkLgepGyQL8NsXyYPCCWLzCbQwdzM2FJHgjr2Vjx9qkwri",
  "key10": "2xwNYUwt1DQ59EdJbkZKmKTewcF15KDxb327DTFctRabcPzC2MtmxGKmMkzYMP7ir2XhuK6stLkerx6C6Cea2mbm",
  "key11": "ZwgHtS9D6awPhAX9H8uex4jxCQWFAFtr5PdiBnjRP425wZYLSGy7ZGbDtYVS7ThYV5rSP1BQyMb5ZMcb4padLR6",
  "key12": "5nTeQnWrmDEZEuz9ZUByMtEKhei527cWm2WnZkozWzykuaauriWRZruCMVfBpRQtXtq3g2VVUj3wFjrQdm6iQnnf",
  "key13": "QN7QS5nBqCXYf3RLR2KzM2rkBthfzAujgWFrRMkRMrtWtHEX2UTUcPhCyqUHAkB8sfJWbeXb25zxZm38QwL27Ld",
  "key14": "YEe6MitNVWkty7fz8yGPYKWxgX9d81mWky43gif4QZB1m8BxVngxtZ6dJjP31fBnnnQQssctKdtDB7n815GHpmD",
  "key15": "477jt38WPnncxye2GGFGdbabE7FKWTsUNQ3JK55UGZUsJwWGKrsJvoidfYMdHU4AoW3KZyRc7YuF8sLgNS11Jzf1",
  "key16": "5KdxAQKwaTpxpt5nddqcanAKPrqzykPtSCbpB2EZ8HYDtdgi8siXayHpoui8VyABomF74HYqtsrigHZZ1Y4Qc5VA",
  "key17": "4UPZki73PWp2R8REVxL4UBrT5XeHzDjkgxiakdoi9m2ZnkiTmKeF5vXFevxV9kjTGDoyERznvc6fswkWiTTAwd14",
  "key18": "3obSsp3j23xAxpX9M8cu6EPSs7tQnMtkNnwf4UA39m17r8iBxq42bWjxSVsmbsLqVbgAPbfVHD9NiyVuXcTqJiVB",
  "key19": "2aChSY25uFZzxacK2WqgXnbgDhxJmkWRfx4rttDTkTmj6233Y8vn1o17rFj11UXQXiZB65qVozf2n13iy7iVodyd",
  "key20": "5Q94MWH6weFS3vXoywFQaVvNXMsZfisAJHcxRGcEwqcqE9e9o2CTqdsVfTaqDewKLD7oVTnY4FtpujiAFKewJ8Pq",
  "key21": "3fUw2SexXFkGBCwskRDXXN5nTfYmUWiCHdSWmunUXhHjibxmd5QTyoDsnegUnKLxg7NbCs5AgGV63RGmZiHQJcm9",
  "key22": "4upEJ5VXwk2HGYT8Hgqpmby47TiLJdJPzyPm35FFBRgxxJnzBmpH9Rnor6hHHUM39pbVPWmYGtj65mPqXjHkArfz",
  "key23": "5rUsgKBDztm8Hbbhtjzxo3obDD7oSDRpkZxpDu6uRdE982NaG3Ax4dHndWFzuazA9esxUZchyZvih8F8pU54T4Eq",
  "key24": "5cRdaVE2LaFc8JZ1Tf34yDSXzDtymjV14jEwrdRu6YXawtnnvTnTiP3ySrQGTPmzAoB7yXsuf43YvMAkcwtZiTjh",
  "key25": "mFYh8N1o92aMLr3J6AV5hrAXunk8fioKKcRvfZHa7UsWFbiPPq1NAY8Hk1qfhKXhmJ5rfo8ohHiVaJP5kER53oD",
  "key26": "4wkYaMaAUD84g9bXpYwAcaAmaCmhGyzTTEA9LjopRNwnLeDFeBUNBSSqB1yhRTwyQrFCRphPUmXajGAGquRhxRti",
  "key27": "3N11PrL8vbENUVbErHE7k6MXCLSVzTRRBzYCiH5ZLuEvfYUoBkTpWWpxVqhczKEKFCLYznXAaRjvmPKdWMXJE1Gv",
  "key28": "5AqNXwc5vpB4JZSjNsHw8Z7pP3gu7kWfezMp6RFVV6E9es8JicuRT5La7REPpBtkYJt9MCF1vbKyFADYbBdsvFLW",
  "key29": "3tEicbW2FteByFYz9cPUNfVmQ7gwecHcpmG58h465Sf7WDBHXh7u3UM8JJbRefbnqgscfFXoh6NuozXbX6ecvsaz",
  "key30": "5gvHNJuMBSwuEkfnnFHLGvgtDJ9w8wF9Mw1Y3o3xhsusiGSCtB466ofAZ9uBRomVYQNLw4od6ANnwHN53JtX8bU6",
  "key31": "4fwDhyDeqejd6kv3dheGyMHXxTMyrupxrte9EP4u6yoS4wpVyyueHoegJtnrPodUrqNRGBbCCUJ88Gx5D7m84srU",
  "key32": "5QsZzywTmVB36EUv8gV9Jx1pfc24CJmR9DcJMRvjxbBsdcAL3nwkoGmhhj15pm4dqXD3tmor6b8CUhHVS5b2EPx8",
  "key33": "5sCLrWfzuh2Qo8KzoZURMnKUaFevmP8M3uLoR6Z4Y3ac9F9D56kL4ccK1ijoqUVUh8ZuXxbnA2RsAHVdu8XCYHsF",
  "key34": "2838askGn2957x77epnA4iSQYNN4MxqsTNs973vKNdvRHqXhSJwT8cRiiowxnpPsabf8ZR1pDscoeQLoZTCBjLtp",
  "key35": "27aRmbFcWDEXRQGvtRYvjYbqSb6evZvy6mdV6ZfMVob4u9EfA2CmW7K12gxbB9ZfhgZ5w5E7Y7swvSc434VLTjoE",
  "key36": "jZj89WxXUhjfWKBGAWqWGDWXJ9ENwEjNCyDKkjv9PFTwsZZVaWqTEKSaPFBP197y1uxtimBFLGqi3DQuLRdcUdE",
  "key37": "2HKeTroA9BT6JA2osH2exTwkyHm2R5TDbiG5rp7j9kwPWEUiyd7z4QnH2mD9fmPuJqg1Fkm4u8HDEuG7uQs6eSNj",
  "key38": "3eV1UXoUWrn17wpRmwmE3wM4v4HeHMKjWjHKtwJWRnbkMnCJ9NYemy63nc6yU6DVRi7uCLq2WxWHVkPygof7mnHL",
  "key39": "wbDe8g4QFRpELjtZ8pnkqnSnA6bXfwDELAue2r4RSTzoBa6RK79BtGb2kFQ9yyXQKMJexoZz4qsvGDRzWSJGjaW",
  "key40": "6eBjbyDSD2RaJibkVVFYyW9zCw7Aj59PGozuDPE4psJbJTEBcZuZGMyCMXpUEwrH2TF5Zr8swjLxNxa1DWp8deN",
  "key41": "3yqwd3nyRQD8xRuvEcGQR5B3kRr5AQNNx6pPV4mM92e6B5r3PoxDoaDaYcK7aRxSqEjwqE5MzbNJdiydcuCEuJf1",
  "key42": "2zk2hYiuq24gWVRCkimzkeW3u6P7sUE32TJLd7SHmwucyrn9X541uFZBsv6kLjbjcWSFFFyoi9rbeExfBeTHBkbW",
  "key43": "3qswxGFBhAsV1JUVuFxMN7hyb1KnwjZ17o4YqvyjSVKUntjPdbPKAanJmtf3aUHheW1woU5hXuP48Bv8VapEAJkZ",
  "key44": "5sXA5GogkJ5uVeR7PLbrMtZLUny73fxkSjSTyB8xfcuBnDjoUxdEdmp8LtTGHBdjUXgCnX1f6pz9r84QJpQwEPft"
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
