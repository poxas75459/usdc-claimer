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
    "3NdgGf9emGyV8UsfLXZS4XRS7iMMKux8n1rJTPEqimstLzsRVnbBi9AcL9v3xuXNQpfjgVXdbk8vmhzt4nibKxDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JjR8axTRGK5H6jfq6iuEK1L8d9eM11Qse8RM5MFoL4K7AGUiZKc93S48fuu3paWu7B7Hm97zcYoxzV9NtdkKG4U",
  "key1": "3tfoBeYopNzS8C7CPhuv2t7qVqGDfwPSjg5otvE7oF1nUmacd7bvoGwiog2yBsrswGYDK58j2DpBYrGioNUfXQ7S",
  "key2": "QC2ZLT2i3ZfuKSQZsorqafMTpwczzUY91z4Ahivzgtj3ty7vpivjhGQeCS6Fex98w8XaAmYuFH4CWjd9dhrtGuq",
  "key3": "5WgQBXVxxWoRRLPGKunyzxqta3ExBwcpr1ySLDG58U7jysCaPms78iBBJDgDJgijBTD7DmQgp21QmKmtdBDbT94g",
  "key4": "3b6nYi8Lq6xUmAZ99WMNa3Q6Tys8QYHY99sEz6286xdNDphhUM19QV1giC2PAXNBycMdUzBq3QZAVYpYoAQo2xEf",
  "key5": "4HEfkZ7foguy5oEnwCwSrHfZweDoDpC6i6xj4HCyxtMB9rmet1TfVYj5s2bCe4tzn1pTkY1AczgokMBAGLYhqhwj",
  "key6": "3h41nM1cW4P7iMTVtHHzHGNZXTw5jivM3NHmEXrXoHp9kxnQwdoqDJAFky5up6cVt2GQiV385F7NkPz3yJeR2C9F",
  "key7": "33LVhQowpbQqLHqySCoG9ysZptaCHzNZCkrPCtFeSd9qDcUx2a2YWqvywW6XZCq8yRY1Vnye1XYjQ1o5gSswPXsY",
  "key8": "3vrGv26WMZEG86k41gkL1jmD6e6ngVuJiRUxyztMbmMFESygRr4NRvX9ddUwXjbmJgSUMygL5A3ZMULJ69UPCW9u",
  "key9": "5Ms2cBZdMT2LDZRyh5EGd4caNbxyKFAYbEPtjwy2feqY3t6BeRVrcbqa5c8Q1vvL5zKKufhpzzpYK9v4Gjpm63Hy",
  "key10": "3vhbdMQFrt2C6sRXgu3YdtQZyopkxz1PuXmphRw1gWA4kDN3EH6jAiP8jk8Hdgkzo9YRRcDkYYSx7fdR8LJJyEjT",
  "key11": "2a9Va5cGJbKHY7AHuvQBKz6NQLs85WYnK45uDqGDoDeEe3nETK8yGWKvDPrD6FnCNeicWfo65xcs6WMmmfouz8Mc",
  "key12": "2hrhf4dcShcc5NPrc3yMSTgxL98WtCzvSyR2bHzPCGakiCL6EP4tjczCNcPwag5JNvH4HCiq5S7oQEcCqBXa8xap",
  "key13": "58jY8VvGtsFvkvUYNFtbxWjx5kKjaLZzUXFfiDicbjVnPEAiTmPyjCmyDfb8TrpiYW5RYPoyyzeifHAB8nd1x25S",
  "key14": "poDGgycJZB19MdneqXQbV1uHgfWDmG67ztomXcmnrXa3sqW23hHE2i4cR8ELQoVwzXt3vhKiwDkdTcpDkSDydUn",
  "key15": "2zXLmrpg3TYoRaz1JsNEddTkDSbzi1Y34Bhojh9f22LdBg1EfZucXapPczoC9HiiKmsX2Xzh2wUQvQ2iru4oSoAk",
  "key16": "3j5u4ErUVnEshqTBim8bz7tyiJLa21x1VdMtx61aiedpcuFqNd9y4CwKDP1FR5vw2C196NHxVa78Sob1oWzMJda6",
  "key17": "4XyE2i6TmdpHi27xWMi8S8R8Zb2hNmPx3hqf52Kjp8msBbBRyeSMYZ2mZ9ZHD25D3Dx8iTwr9AeKkSLUm297Gneo",
  "key18": "4ba8DNonECVSSznurAiQz8nCV511W9Yji1kezH61DNRjBeeCqkGW5VLbHVneH614NfUoMNJQq78RUfseDpaHhTLq",
  "key19": "5Yz6r8XUgUqMVgqFMPn6tpvTuXPnZnSnkchu6bUZDFNgRMRbs5nbjSPke2uAWckTmX1XJyV1XHMFLW3brBCpxJsS",
  "key20": "rYA4HxGX11nKFM88KtVnSwxECDLY6DAJktg41U4D4E7ChTqJ5216j2nApsy33DJcjgvKPBCDX2KWiBvJBNCDpyF",
  "key21": "3M44jHeGwX1ESjcPtFFssmziy7tkmccLGVMJ18QWHeN6v5Rw8zuDoN3QYjSLSQxfGViEgdQZQEk7FVEU93VerQxJ",
  "key22": "63oK1c8etra1tR7QUJ9coJqpKon6NMbgo7PPvHg3LhXU9qrWPKsWabMrFqa5CaG2sgSkDmRuxUkhnQWh5ssRYN6z",
  "key23": "XYKG8wJFigAiSjRBxmF1Lpuuqxn9smazaJxgb93e69D43JmSmd6xnk7UDst4QsGGpsyVkHayTHh5uhg3qCMJkX2",
  "key24": "5zZoWZV5Qd433SAFGtTjW5gNYRxCCgkWNWpKXfThHU4H7HjHdiVSbqc1XTZjLqt1irqoveZdwDghMYEtoBUaHMhB",
  "key25": "2E4A2Qtnds5v623desw7WvoxC5DvTQbjEuxyqtgMzncig7nWacPYpzEsPj6ia3vuAk9khiV7XtQyKhBrpqrmTtLm",
  "key26": "vzx6yRAmVJjUX4n2RC21ik9JEgBTjzAaqzT5ZJ2MxdwRGGhCtt8euGin9xJjTuvmqkHeNodgrG3sxP6SY3CyteQ",
  "key27": "43PhqzTRYztXU4vMbQMvoyz4uqWH24znqcU8y5JyXAykr2UVcs3omsFWEWBURzZ7Nif8xkZyfwcKyfaGVQR5nwTR",
  "key28": "2bsmbGtYbft3JWMiQ7r8gey5nejWT4Y8btLmudTT21ZVH6c7f4MgAYMWFiwq8SNCxBsTVptvgVAMNEQhEZ1VGevF",
  "key29": "UEvrJTa5y2cHRqu25SSrCSbMF3khshM9x23g5TJFkjjBK856655wYj9EpYdLiyGMdzT3Z64b7QBUmXbHyBj1viK",
  "key30": "2QNE2k7gGpVEDZqnD4WMsciQ3BwX3BtcrCZtxyL5Fp4hD3k2wGwPKcf4rJUuXQudUPDC5G3z4WdqN5TWx9qPcc8o",
  "key31": "3wdVYLs5sNz7iLHvTqpRUKRgy5H4SEynagiGmsM5qjNwRK3xx5NniofhvSBauAGKXd3RJbRA47666x3J3JkDW93h",
  "key32": "4MBYv96Hu6jxHxa3bFmg1m4NyAgeZyVGU3KmiVFv4ByxNEg1XZdb9uTz7tMdDqc1HxQFHDtEs9BAdeDdAp1DBzCW",
  "key33": "5B72QLNfzA7ANaih2jJKnW1Kwe9E3s7XEaAkmUAqXtuuAvhX5GmRuqMNjQ4hc3iev55gMinKhfuTVSmNUuXubcPy",
  "key34": "2gpMXhrVVWFaB5A7yPXQD4Dmw68CyxvkrQnpWSeppL9hUqRB1s4ghcVGYNHPHh4Qd3jBx4KCeKCz7oGiPNG9CbdY",
  "key35": "4PUZdcq1jeWP5CiY79FeYXjPhWoaoosXsxLPXx5rpE8fU5AtwR5ukJfGEeaZzXQ4BiAWFBRXUU5athaADbb7MP7Q",
  "key36": "ZcLYwfEvdw4JXJzEpeNY4cfiNPqfx1PEFCQHKJhQdb9NFWQ2KhiLkRdxQEKEcLnhta93SYpXvxXhG3NsFUM8HpR",
  "key37": "vDsSVLHChc3nmAufx6tXmsdvnX9iiC5BG447PeNvZyEoiESBb34qgupYtgVrVkPQpp2LC6V2uMLVvMRbVRQA3XM",
  "key38": "4n7V4TbrqhDuy7Ni2AN9LCW8cjD36qcjZLjaqoquEUEBXH6iH5tYgEsnTKBwoHmfFBXR139vEk1RX8oEZfaqyHRz",
  "key39": "YiHa1a7wJbXjYp5aNpE633ndaju6fyPFenEssMfxPMwzEsDYFNgi7gy65e2fLAgiFvx8TKT9iM2c2XxUyVnAT9K",
  "key40": "3a9YxZNz5XWPxf78GP145uhamDyA2gAwc1rKwWgMAJkwGAyadjgbhVoXdkicS9co1EJugYFWG3fy1U7dgaUdKT5H",
  "key41": "3HwnL9z6EMzmitK4h2Zx6Bza52vo9sh4AEsVjw3jKXhmFHjWp4r2T8yzwmCXt61SVTmzo9k7Ndcd3b5p8rcpAJ4c",
  "key42": "8vVkTdK9YvAyiQXT349WBZFs6EQfpMLJCs33wSypjEv1Ljr4XJEYd12pwy6f17yov6uc1Np6FN3X4vL7z6Doy3Q",
  "key43": "HiUFeweKesx5waBj3v6CfwxE9r5S5GmAsS5VnmHcYUbAnTKv7L5BGoSmUi1AaMbhahhjDS4LMGu1Jit4KF5b73o",
  "key44": "36ovEjZ3aw9tqHiZZiFk626ZY6MRUmA8xrRxLAVi2rxtgvkuu6he1PjQkB8oaaR4M8BZQZtxEXKXyipTkpByfMVf",
  "key45": "4mcokc4Gfy9VcJgsMJjAorXqXgiHe1omoUoR8LYcTZEESLA9z4pffjWUiSUPW4vZr56h7sL2521n2FfZuehZ4Tf",
  "key46": "4b4R7tWGKzEkLHHKfhR2Qw91X9pcvc2u2YKCAAnnCKeHJbUKx3iFb1Jc9SbhKkYSCgHPbeUzfz7fQmRPjRtyYMS4",
  "key47": "3D27YsUmgcn3pm6d7aVvX2JDGmEf9ZzEwEmukLfh64So3W6fNPrz76xoYECm54omFuTdufQV9cKGeoDXaF8kEFPk",
  "key48": "4PQ7xJm1J6uF7d6AJ4yZNTWMyheQq9KVMgdAM8u9Su8GurKphZHJ9sMV2f5MsRTrLYoBQ9R5C9j8JxjjuWLRAM2Y"
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
