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
    "4FvMjDbS2HGkRRn6RpbhYeMfDz79LHjCNB5vRQUgjFPehyj5ggRXGEuS4o9GrNULKrDX2M616vupAEU1ECsHuNq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ruzPpymKoPHrVHSVQQmjpFsE8PHHDfebsy5a5eWuYrhuoYsdfJT7WGmYCJp9Q5hQghJrLBkKckkMpU4yWSKogid",
  "key1": "1Ar4wHEWwS2AcEJ8gk96dVhVEJWBpzBheUny3mi1uftqVRknFTFn5cPXCfWBX6W8UXAMQhSTk4y8Cgu6EZ5boFj",
  "key2": "2qwAkUwu1aPXYzvqaxfcCwNorejJBVxqdHho3r5WZWFukvzAttTCarji5kutWitsLz8M1mUdhYbEQRfYA5KAHQFy",
  "key3": "4FQHsu7p562ThveaXwviiwYsLkhypaNkNrh3Kp8sU8wetT6dZnhwmeSnTRmcYmDAkXy4DZoEndTe7eVWjHYC2eyR",
  "key4": "V1mieMJLdp4V3TRYHD3Sp1Y5BdxZedcXjWbsDrn1cHJiUgQuYsUDD8hBBAEZVJm8muHKgyenM3NUAADZmyD8xdx",
  "key5": "eGwX19g5JhD92KP4Xm1f3DNwGsf2AQbCgRBypL9Dbhzn2vJ21yxGhKJ2ppeoLR9sjqKyAfvm3jEiqSDByg24LyZ",
  "key6": "2XS3QhWyQ9yi5iZXkDE6W4UTp5hFaRKMCrYPeLnmXs1wm67zBLDmoPgM6w7ZTKb5jdY3rGCcwtaCA4Lk61zsXptx",
  "key7": "ji17ni6VcASwQ7u7u7wqWLkmsDvMHwkMbFHSsEUKkL1jC5Nh3R5Crn9cUFX7r3NkTQT87tyLHQw8ZxVpbMHNG5d",
  "key8": "38zstLbRpo2bJvd9oEPDatpp1D6HCxa9ZKNbokccME1WKYCrJKsLQBBD9qzWwyDnvJqBoj863ahd4mXi5ZzudFNR",
  "key9": "4yGAqR66zmhGbwKxtZWegjyTZPCeDRptX4HuEPCAtNdDBxTmeEmjTVFRLGbMPM6yQxdMNn7ogYoSnjJBwZYhpGMc",
  "key10": "4u5zodvSGenHehDWpHd7uy8f8NZekfxZPs6ye9HkD3tCFgtrMNuRR9a3SSA6mWgMKxQuwZpKwbDNKfYUUKLsgMAW",
  "key11": "58i1sStNijYMBauNQXv27MG9KV5QJjfT8mAuHeU5ZPsU1xnWfR4VFVGVjDDhKEp2612FWek69xa1XD2tMzFtizDQ",
  "key12": "5V5sGCpWLjrr4996aAGXNoDPG2JyoMCJy7wUU7efZ72Bsiy1H9Wi9BGvJ9BEBSyRWyhjdUziHTMAXaVGoets3Fc",
  "key13": "3QHP6QAoFxy2uYqMTjb4rqwzCwtbTew5xmKjZRg1Ykndy8PhGDsNm883A54yCd5npAdRLRYwdeNMaN4prvQkCf6A",
  "key14": "5pSXUwLACC9MWvokyneMzd7EtQxKRDW9tJvdYKKkv1ApPfn9edT721CtyKkc7kYDFWdMyDRzuBhusdTZi9vTJBzg",
  "key15": "3GXwLFTDuRn6sgdSU4pgBtntyDtt8b86nW2L6tMmXyUXZwXA5bgrqozp2UunLDdZCpEvmVUSdzV2cCATaLAZmADC",
  "key16": "5hF4qBWe7eCMW8sfNF7YDrWfwSkWvtPrhutDrZtduivbiqiZenuEEqpe3xdH4u3m4P6rZj1KYs6axAz7EjacEMix",
  "key17": "29ga4Y3ncXqp37rgM5Yyfz2QWb98W3VoGiv3t4GHFZg9NcgbKLmNkDvrA3nCGYkTAyQmTv79fEBiw1aCpfNVaWRt",
  "key18": "5HDtb9tfNo1DdqhXWL4wm3phZsZ6tiDFNncrjk2aAoYbYGyCvvb6zpPX9HyaMnY1LWu6upoci53y3U8ofahvcfFp",
  "key19": "3pDm1AZ54DhSz37MMDh2ymoppmU6GbBJe8rR6iF55n1ofzmdj94HBUt4LEuoffT5TSYnG9RpYgpnkBtc93bLVA8t",
  "key20": "2NTm4tSTSm5TCwcFzdftmmR8nAqfd4QkNLtFjNXfvfPWkPSAPtAmeoJsEB72zPDyWTVzdyg86kCP6t7SBwwMbUuF",
  "key21": "2w5f79yCLGVhwwbDRFHyFadbNHwA4wgdT17eujkaRsfCAiU78BJjfVPQ2MuGAbx1ESMo1BNrQGKyioDXxGgw7ARC",
  "key22": "9LveErrxoDYvJJKhXFitPCiaJMAzbxaPWC6c44wT4JgSM5qmD14L2dmshapht2W1RbZUgtpgxg8HJDFePJ91SAU",
  "key23": "4Sz6AUfnfoUVA6vdueWbQDaYdQ62ngt9Lf9VUr5TLWgeLqyTLsAULM6pxJCM5D3XJMCkA1Jokn6ZYCMFcePBpzCn",
  "key24": "3NVeB5ScniyE8YTF5QiyEmYzUnaSR9qU8ikvbvuZCAwTL6PLHbRmqrymfUE3ZeCJBaHAVckZUYgAkJeL11jCSVyr",
  "key25": "5bJVPuDoN7XrhvtevpiRbCEAqCbQAosKn1tT2t2AWWeyqM4zw7iQHfgw3ZTdkB8hDiqVXsY86F4kyA2cKgW749t",
  "key26": "2ckuqBTcVhguMtRQzRC32gvHL7D58UFrhcvLDRTHnu5FfXJrqAgQbapKHTuRd5GJ2YVGrT9rGSyYbAaaSHPUntX7",
  "key27": "28mgNCNJQD2fzi3gG6oyB12pnL3h7UwGruZXgZbuBGKuw9zGxa5DY96UyLniUMpmcrLr3c2vKVXVoCbRjdNZdTFt",
  "key28": "5HESXiK2e6EGWMHF3p1pkrBCxq4hA8dDr3QPmBQSoMuhoiokjMiA4tzhj5BdkE5ie7AjKiTxdDyMLipZzbXqYD6U",
  "key29": "3hP6sQvoeBWAAUfQHfRwM5jXNZ45fHSLDtdsAgNY4E1YYYzxgGGRjLYQo5vgzzGDdApbVzHPQLxMV3RxDDMt3633",
  "key30": "5LK7dCDkg9ateo6Q4pVzFnGak8hzs5NtXvJ9WBmQ59jnZYjm3p2z9qo61UcUVonnBHdhp9aKh3fwMvWtg36Vtdb2",
  "key31": "2jWDsefTsJ7EzjSq2ngX3JnEW6sVf8X29scRKpYDWhALQYn1DQAaEJ8uvAd2yQ6AxqVi71nmf3SoPoMS8RXpYHBX",
  "key32": "CzH1Q8ewBVvsPQECnQZeWXHTFRoh9DiUW8GYXTwubSwUYUuvnZhTnot3Zz8ALTvvvGfwk5obc6brbsNjN24NPui"
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
