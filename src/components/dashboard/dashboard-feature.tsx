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
    "5XEuft9PLWbRQaxJuRTWt8Mg7sZDac5gKJ6tCYddHUvyV3T7yMjK8PFiFj25yoLN9eZ4Zb9j79ZvQBEor3a8NhJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ysqf1KBuQjKvcvm3zm8ERbUaVk4yDuoZhvoqhnSnvgZfbxefPdu7G764b3yrzCAQR1CBB87g9zo8vaCbr9oPga5",
  "key1": "4iyAiyGyCnK6GodSzY1b3VSf1apRpdof5CNBB14znM2P1KSyrdvHkZR7JymMKBqSXSinmAUZyXToan7xKG8vErD5",
  "key2": "2VySgBfm21PiNYa2YNKpqmwt8xpS4rKxPXrrUBevLVhix6w3HxCqDKJeYJYNLtcyH8uxCzbAeggTygQRut8oKb5v",
  "key3": "ra8JPHJnXU6zWGbsjBehZcQPzoHQBiyjbTrUhdeL31fbF3h8vw45H8YN1XBUgm3aBGxyrW7b6s3HymKw5LYRWG4",
  "key4": "5DZgFuNpEoju1b1CsbzdLhXyZmTBWALyQmZQYWk25BQX1cCJEipypsLJfqu8HzvzKidTMBvnjSJuqHTcy51heuNu",
  "key5": "4BjKFhXVa1UMgnfnyFdSajrjSxssQy1T8aPXFPa2375BWakRVvof7LXW8WG9B6nEoyGeA9w42dzNtKg4pMUvYkVg",
  "key6": "2s4YGGCAdZPvJCtrVjBNDmvKKgrMxyAivg8crFAHE4cGbf9zw1eJjKM2HgfavJa2CvYdN8wjUMyNwQipAKSY8vn1",
  "key7": "37MA3JacZmCrFVHfCdSEU57Cs7KEkSU63VWaQo6NpgzNyDw2Fp3mmR9AXNMfiTjJCjmymfGTVZJNTB7mi3bzekCA",
  "key8": "5BCd7BQpKrCMjUbMxnmA8siZn4GWYZVqsW9zv9VT5jrTAE6hAL21UZ1CZ3GJShYeGnuBrK1CtrdUT1pVGdxU2Q6k",
  "key9": "2WcGza9zwg8bZTmk9vqsSpZ6Yw7i3tqv7TvMQ3fj5wA6tFyJPyicPzctinpeFpuTqG6GLRWDa1NW7R9JpoZzcKST",
  "key10": "2EpqEzbEfYB4ZpMECte8akrF3c4gAsAMuNHL4QT9ZeX64MA7ypN14cdkRvQy1ja4fJTZQTqDQKmV6UsbkiXVks1K",
  "key11": "2QfQzMs4oJbYN4NH5dAgFZcPQEJc593ZgRaWsxJjBJyQSekhCiQnfJKT1KRLGC9dQvq5vzx8y6zQ7pQ1afRbv5gm",
  "key12": "5nSWJycgnraBPns2aPBj6WMvuZW48RGXGL7tjV2tKGv5oUx5Jby8Z9QkT1wqMhZaqjfsrQfvBQZ5zWRQC7WSXDv9",
  "key13": "4Lu9YV41RBm572ztGSRJDRT46jN4zKvUyCcCsdTwfPLDAEPfWsKrc6FjSPjHEZTjWdTC3xU5Ypz53HNQyumN4cJZ",
  "key14": "3wha6rSsQisxSsVP31rgjHLJ2ZZMDrxErs9a96HFaTMy2WfxKAqH7ejRazZEt8715rwDv4HoDHtLM2Fi56GQNvUi",
  "key15": "3GfhR2izSjkQyiQZCErBhFCmU91PRfn3SwPcMreYodYgVK6T1BuUuwW8HDxrR42pKpE1oJ58H4vCo6sqcqTvr3Hs",
  "key16": "5sqPCfccNoimNtKhRkVvcSczu1fwPA2pmSt4jVRayfnpyLyLfmjWkh6DnSh2Ypw3prYsgurx3JBECDWnoVCueVb2",
  "key17": "2X2N8SFkEdg8tr29eufynznAzPf97jFQ6rRFY5ShknWsdxcRSWLC9Q5ypXWFBY8skaxEwaPVzyjREDLbK3BNgw7q",
  "key18": "wQTFWprxAeVe3FFGgc8SRMLghj6xS6HYcqLkJidvDkQpTFqi2N7AGtEcTT2PkBxRr93b3nrBtDnrgBw4pftkP4h",
  "key19": "4Je6mWZ8Y7v4NpL5eL7vaaMJHbQMUi5u6xPwB82u7m9DitzmCxn2mP7vvfWqfkUUwSCnD7DDZjVAJNfpcZrZ3CMW",
  "key20": "5wZq9Dx3WzcRGg4baiyB5noAKT9fhhUGHwNQ4dGBXWv4c6ogHkaZdSG7mPvgLLgqGy6x66iErNA1FUJMQn5uST4p",
  "key21": "3jPd6yJP5k7UnTk2gqmscwyFNHhp5VnRgR3bGKedEjaBHRmfkuS65Q9K7b5Ei76iePSnHqLRT9rWHwdCEBdw5dsr",
  "key22": "44Je7zZeTqSafDg6CHjTx32vKTZU85CVmQRfBgwiZuMFQzkWESYAketcNFC958RbTzeykGcbFAbd6obZbfRj57YD",
  "key23": "5YmpwoTkQaT11Ba5dvYcGRemqgiKMsHPS9vPJXS7jfDxgdJTP7bVdKdg71VkScXBVfCPxuDiHCEm8cQ8Gxn3HgnU",
  "key24": "zVECrmE19cdvaon2ZsQXnUB8q7n55yTNx1fhyPQeMNAK4GvHzqqghih8u5pBpodzkzykDXbe4yeSsBJrnQNkBK5",
  "key25": "fMqUTgKzfpZ8YyG5qpze1yPzEyzF1TEcQd7p4vKLxbPBePq21hxc8e4xWf9b46s466Aboqu3gi9feuLZ9AjseKC",
  "key26": "tfRp7zSWm2t6GuDcTaPXfx3WD4naYDsPM3d4MieiuH3RHGHN8LM118zgv6fMDibk5KEjgMRdD8zgJzPw5C5Av7a",
  "key27": "5zMcSu54xZ3AjiJ4wxtMZEbKf1qeA1pTppzD4eVsNVuFjHmFCyVGdDXtoAnZemBiKc6UGuk345H2EpBLzpb2CBgQ",
  "key28": "CYfDgCCBTNAHURqcDtDTj4hxSBhkYLvE5xdhyfrrv5QRK3oWXeKptrwb5NzoFTcZ81qtigpHjbzwWtBoTc15f2B",
  "key29": "4sjSQHLuhkW2kF1TdvdgVwJP6L6rFFYXuQ7g5FAxQynTfzMMH3oviwKvqcAoRFa9mSNyqMqkhbHPYKQyxK4T5bfo",
  "key30": "4qfPA5qHi2d778HhY4M11rfBpfGGqZn2Zd932ZP8ZZZBvgpr9KfnHhys34u3AEjp8Nc5BnvTApGuxZzVDJ97vHDa",
  "key31": "3p53KMCgZgxK1XMCrisUGWxq9PAHL5DxMev4RmudDFD7HEbRApBQ4YbeozMAeUx2gxC1tz6NJ4Pg9E6WGJVMVVkS",
  "key32": "2yGnpxsG1eELddtmyPcm2ePST75y1Z9pmh5cGAfw2XG4W9akGWW7XUGQRzoxCNZnWvH4o2oAD3FqctYHJg74ycjv",
  "key33": "3ApkAYtB7xSca22QApLbkWbm3Jt6hnuvwYtHtLxkzXVug3kVUKYQtNCFNiN8LvSDdn43g2MnMTx4SqyEMYx3vc1r",
  "key34": "pytpBbJrJMorNE3nckompPYJaEqPhmqFkDBEkK3PUCuHMAF1xr3UUGoV5qD45qDmvx98yxQ8i4gjHwiT2gtZoXM",
  "key35": "3K7SofsLyXBy2Qme4F4sViFVJ6MShUxcwM9BznVaUR2xuvsX7GGa5HBjccReoCZ9kuPGHEnn4MLAcuYooWge5rZv",
  "key36": "5ZfvP5E52zY4QbdgciNUjgR6131MKnRAzVe2yaYFLmE2BYFt4mcX2dkGEPC5arBJxBwaULDeuPBNavMQtyexxrFw",
  "key37": "2XFMJMs3WGjUwK1KWn14Xsdv767rQrr5T8qMkb1zG9LC9zGB1pmZQPKD8jAkKbriqAydiGPW6P7fU129HT9h5SuX",
  "key38": "2bZgnEK3xowiuB1wsq3QXXP5Yvsdtyh6Kuk8CN87RwtNWu2CuPWwN9wxeb381XNc2XEWH96DvLZvAgEN84ViTVLf",
  "key39": "4YDUNrZsjoZ8gdy3NvG2xCvqesHBy2i3nj2CpeNeAxnHMdPPATqJARXYr7ZucpMtnvTTuSCk5CKaG9H3nnQywqC4",
  "key40": "4Khihzj84KFRofmGABcdmknCsCTBjbxis9TUmLdFE6qXue92eaYqLV46Vdj6HEefXabTNU2j51eywQRTFMHXiUU5",
  "key41": "5EqTG71iKufuSjwaXUmY6JZeQttqDoZcBSkEkZ8ZQF25trU6VYLQ5wCTh5Vra7g8wxsdSnXh8CbVn9dfevf57TmG",
  "key42": "5vDH21jaLmJaarCwFeGDWWdWhCs5jb1VwJw9P3jcRz5xgSshQ9ho3EtWbJUsNfbsowXxNFhY8byNvnDm4LWq4iab",
  "key43": "4ajwf6MkJDRj9GX9QUedAj2AbJkUSDTgWuZXA6CLE2UrqZpd8EJLJNwvpCCwHYzRDpfW4p9h5Z8TVcxRvpnYjir4",
  "key44": "2oWKykCMrfbhx92QWvVtRJHyNyDtzU3kUQqYEqCi4dw2zhk4JuFfkT2XHFffFax79BU6QMD1Qw9mGHCNeq44wbL9"
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
