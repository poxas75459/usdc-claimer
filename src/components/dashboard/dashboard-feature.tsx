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
    "5rcobtKXWdVhLQLs7vjFXmX4RMZhXvhDqXecS37j2iAJ6rt5wcdVkT985BgJHC7ELHRRAK6un1CADRj7jH4yhrH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rN9BnbCcGG1TCNfu5YvJLNiTVYDoFo9LkeWvqZky3w2XBiXFN6wgZ6cCyyr2TdPW1UWhnmFAuQSZiCDm8VeYBX",
  "key1": "2D7xaUrKZFxkaVJ4pTAAmmwUhBd2Zx66nGqqH8YuMEhVSKvfKro2dKUVsbBMZWXcFDTBcxCuKhXbg2VtVxQY44Ly",
  "key2": "QoYV7i6JTSyYufYcKm2CMppfb7JkfQ86KKQBPZ7eisJ92nAuCam5Wkt7HZSF7Ar1MuERXeJ5GDAtGsNNewe552t",
  "key3": "3bTYRCvR5etn4oYZcYM14hYLCzcpdZgKcnacJeiqnjKuSfUpr1BWCKrhERECoK3bjwxVgUYD58RGf9923RkFYQea",
  "key4": "Awe5hP9ydvSbHdqzJ3pXTHudk4zShyU72fph36jZkWRaeRZ5H4JMT1HZdQk2N3KjtVGhzTfes6F842Ek5E6P7uB",
  "key5": "4NUUp8o93a9iRgkE9dbexEwRbkRXFxdhTzxwwZunmE3uVVZpPnQLTQWtjFDX4zam53GCY2Ha4uSErgMZF6zAAbWw",
  "key6": "4rs8ysn7EYh14icLCDYSPnv1gmMCyTxxdPchCFGe8TMLkNn3qrtvGe5YEsiwTGaKyDdtBpEt3fKtz4A14cdrqPeV",
  "key7": "2kmZRdMktCTbWVYDF4EHSKbKJmXm37WhvV5XeWVqgBBXa1KAWvkUAJ2QAojBXeKWQLnHRCu2xyedtrPjq8BjB3an",
  "key8": "5VaGY9hhdr8myAoWfUQz5w9g2RLzAfHreFGnFoicQB1SKqwqJRkEH8zzTQDnJCRAp2w3iEP43tihi7tHkWKw2jSC",
  "key9": "5dShTg2pzA6B67vZzXo6UQWRTrX5PxNWbDhXzPXnPMMXdYKdUAz6WbCFMA3WxWpPdWZtbSLs5JFbCe65k3jdZtY7",
  "key10": "v4osDA9HX1Mo2rp58FRgfD9SWgzGwYvr6VyACd89q2VXijkuWHt3yLBLCPrMEM1xKRmbWkhqfqMgr3xs8zE7qBy",
  "key11": "4yGshcoErBE1DeNjG2efpWryAksPYLG3bEeuweBEW2hs3vVxbNprDkRgqCLQUzVbfhkLGi5QBAZRKKiXm692Hcbi",
  "key12": "32fy2CGm8R67gMoHUvosVLkxSPodxNfLBju3AuToNyRT1AzSq7xoMUPcxG454ZMtkEp9NtXLeYqSQmjTQG6z9La7",
  "key13": "4XzSVWMKjEgsQjeFC6iPvfh38QvhtnGR2TMWJVE19mapTb32Xq1L6KXac93vHcYUoDEgop4yrta9KpRnxDFJRegk",
  "key14": "4a65TBVJGv9kh56t6ShrPq3jt9Y6SYZJQNJH7mNVTjjbrdxLE3UTcfUhDCiv2sjQxQb31tZXpbMM6vgfSxSvTujv",
  "key15": "4gx5BDbXCq1T3iW1mYUVTde95EKh64tzfHngkxTRogb5EF4e8WGa588w5j6rKMEbTUvJ5BgWRoyCc6LHFVvwppiS",
  "key16": "3akbJS7rYAf6bKxqb7YUhKYgLUqUTSzpo2jUj9mc5BDGbFkEMZdfwUxyWKNghtPQp2p8VBxcgxFuN3zS6vqkohzB",
  "key17": "3TciNEMa7cxRxuuiX8ur9jkGyv2DJz3xZP6tj36AEANZC7VTf7H7qG97jC14zZ3DZVMVAhB7TeYHufTyfLjJ7CNf",
  "key18": "7C2SkybvfYECfGm3fWvEWrZfFxyB5MWFFP8WP4xA1vkknE6pHmNEHGCXtDWawidq7iknMUMNUdLdCWoMwkNTDJv",
  "key19": "5mERf6NhywRNQ7B3RnecFo5ciY9XCkZ26ASUUzzAn9ZeDvNY3rxVMWXWpznM3UV5M4zbcADGnytCurH2knkEH1ij",
  "key20": "2MpC4PJkmQ7yC79BnRhUvgjvGbqkZrWT6xEsn2njUdkNVtyXt52Bv2BGjejG1rNFaUVGyFzBbK6CzR3rs1i3zekL",
  "key21": "iYdmySVWmKQgH6MLmYCH3nQM2rkUjs65d6oVn32QwxuBvJH9KRQYiseL8fJ9padh4oj8rHTrUtNBKAq2E9ydoh6",
  "key22": "FP9cWY5K8jfDHmC7A2r7YLCbinBuPJtFAFbN4vKSpnkicN2qTWM6u8t63sNY1fxkErKJ9pH1VYB6WXZeq4piBtn",
  "key23": "4DnynJstN63YNcqYajJptwNb2smECkNp8JTjyGmwMPj5wkVFwHfFtfpLSJQKB3rF59FuVBsudYr9DQiYUK7VEFB2",
  "key24": "5MvukXUPXqPaabky97iRRFgnsWNM4jHVQHgoy5CpNXF8mQ4xSTm8M8cjBroaViaZa3aYdczkbGcTDDb5YfMpUqid",
  "key25": "39UAR6wrK6rLA9jBVWjwwHR6mCLHZCSAwgJUmkeAjQumqkRU1277QfeTAgimoXcfJP7mjkRsn2P1oHLPPVEezMAF",
  "key26": "9Gck4mbi6v8TZxxtaHnv2QVkG4hBdjuA4Jtxgf676tpRoQNsxF7RuLsYAKyaMewyHt29Rj84vSRbBZkbAS9STK8",
  "key27": "5XzUdozvZ9b1JAGKbh2EvfYCsAdepUUKRcnDHzq9pPeMN2iAxnQtv1VPx5mWr6Vm2mVcwwF8r1Daz5dPf83DD6c5",
  "key28": "4sVi9cNr6MbERNg994L7epdQovhZfR9tt88U88DFTjVy3W4j8NzZLBmibN9VDH6V44jZmLUqGT1DgM56mk5e1b8c",
  "key29": "5zQfbRjA87nDobnMpXTmBj7Z9xNifBg583UCeBJc6AfqgqTWKX9azUNCwPnNqgbFGp6EoKQy2m5fLchpHwc6VYwd",
  "key30": "5ykQ5ZGXwpHbj2rqSU8TECoYAcjtn2aiCcn4JfVK6Jhuf6oU3wGZz3mqiaS43jaW64wpGrmNSQqocTxSedTx4jsy",
  "key31": "jRCsQNkyDaPSU3ruW2cB8hVBDtqbV1JU9d149epx4SJQXCrLpvsR3VacsLMYSxV9KzeUKWYyaUn954qGnKesLrd",
  "key32": "raHhWmCPAcDYnQHBQcVwuJBs4UtonGdrjUd2GJDVioNgWSyuwDNahkWL2B4HznfyEHYYhpiHhNbYUvXmRSzeAHj",
  "key33": "2S4aGmCF8PpYLZdxswgAABR8wDNDSFSW7n31jvu9cfmrP4Uw6MKjMJ5KBdjddzHfTQVkgw1raNt2DCvso727ngVb",
  "key34": "2tGe4TW8j31uMZ2aHVWoPK17rrg1WtQXPrSRZQHyqGJCcQM17FYuo3TaqKVK7Kh4VXyLgd7PaBg3YEd2sC7oxpQ9",
  "key35": "5ipTDNVyzjpknEoAFxKgVwbjtHoe1j3fTQa89UYtUzbw2y6BZPdpkTHUQtBtaHkhGGMijXpAXDU3Ltem89hWBkma",
  "key36": "5NwiVQfARG64J2JfrDLfzSnRuJfjbuYi4PyV13WWFnyPkSN7FQuzxhjn4JyC5d4wPAegwgsbf6CXhkPnDaQA1GsA",
  "key37": "4hY16t9sdVgx7EgvfxnMx8tS9AdsVVGbH3siX3ZcRQHC8UiAcogjybhp5pbx1JjosS7RoYxwFeyheswfkSH8CAYC",
  "key38": "4d8RtJaFJYpkqDfG44eN3GFjGsWqiSVzH462jEMyjjx3Wdqj1CRMydcxzYNsxd3r6DRJcETQJjSAhWw3PhdchYNa",
  "key39": "mY9yhTNttKe6pk1Emq9orcWVyWmBFpt47xd8ZUZSBiAtapN8WSizsmr4Xacse7CgE5dt13E3haLdxptkqk6T2Xx",
  "key40": "4Cp83NJ7Lw23sKX47PDHPaNyi2q5NFgyDrpmpRpUB3AoFmmr68tK4v8XMKqReiqnDiFNpNePw4KY6ZWRYhXT1LAG",
  "key41": "9U5zDaGKa8v8rVoNH7v6V6a8bCox4EQaXQ7uctNDrRNjy8g8AEY2pMYVfFeZ78rZVzEkYUidLn47eTrPGGvKRbA",
  "key42": "4pGYM4VsQVvz57ZDXp1FWy5fHKpvjhMJzLcNeYteLzEtko3G2PzL9hSFx5cDSsMzQPDr5pGBpSUnMrDswNSDn2s3",
  "key43": "47oKSBHZ8i8Bi6mKHm2XTPFvaXhrCPenUSnxmMLZv8r5CstgeAkzMR1X2Q4qMJM6pK8ZR6bzSbJ6qdM8Edj8ySUt",
  "key44": "3YHAEPx6nKxjjiU4DH9jhaKcFs517ey8hJ5emZZkoN4UCgThNTcDLs8LTGAFutNbQqMojozCFshS4GWY4w8M5yqx",
  "key45": "2VEopVFBH9mENKjQ6TKKKRTnEBW26MwENbhamJzhM4hVYeyHNMNoz87qsbCidrsyzWLba4Yxem3c5QUTpgugbBY",
  "key46": "49oGHh63iEVDbdesMJvpFg3az1jHSHYFPwC2ZRVsTMPuGNGgkVeCYitPNQUVuKHHfi1PAFM3ypaqdsL2HpJ1B5aB",
  "key47": "5HCqjBzPGDEFV6Zjucz9oLujTGFa97iSUFnULQ1G69g7sLZR4sQWDZ4n8AmTw1rdeJMsMEGaj2Q6Vw4Jtx5Niqv5",
  "key48": "enLxsiGvAWFLzLEG4VGEX7we8qbuFePrvZzv9trpC93RjuC62HW9RMgG6YirVCUoGEEAAP5JqpVUwJhQvfY2Ssj"
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
