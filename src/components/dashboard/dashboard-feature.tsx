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
    "5gq6rYHwafPKoPpAYrTeKs41Kegyd2wxVXiVqVNX26FefwBLvfSV159fvKrda3VAA2KigSZngRVabeZ5N9u6P1oJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wejYipTYyK4RDHKGHQj75auc9CNZJLAzpbvfGkJqZfmjfrL97xB5LZM4saXNBgANtkv222ivZRiMJr5yqYDEbCT",
  "key1": "4sR7XKSGGZVNuipkNkRT8Zmeq8FiD1cWv8zbo2LW1RYCztpRxx44QQF9Ae58ZRQy97uwoxqa1aM1pR26NZHGAU7P",
  "key2": "2z9viQbTUhE9mJYWzDKFvFjUf9wDocv1AcTQYXHzucdEJXCkTQ6GEdqhJTvMGTdm9pb4rDrCJvnFt3XrpoPQpp6M",
  "key3": "JzTgSfkTz7QW7hjkMCt5UJojTKmL4yjAqFEvbyejSaHAn3xQ8zEEdGSohSfuUjp39Hbn3agn23rVqMdJZQEwaGT",
  "key4": "2XYJcgPbyHdpuxQ6qjY9ABSLCnrSqYDbYwdgJtLQU39oWu18aVUT1BGDjYVuZUpCdeBV3cTUyW1KTqMbEipQVRtf",
  "key5": "4Dmfh9sy9xjF21UBtYJvQh8B9ePebaSb8AwMJYjoRfdCLjU5LSMPeZuDi9pzLUWnWZNq7NDr27Bm5h8RQyAJHr8S",
  "key6": "2DoVi6McRHPgBmDUKtvdk6Uk2epqvy8JHqDLHVaX4GCUGk69uS3smvxWx9KtbGUCpw5WNALucQQtfimTjWSZpMVh",
  "key7": "4DVtQKsfCUAAtUAKfo1VYFdopLA4Bi9UdeHN82Kcg4ztHSQuAHw4u6fydpmK7Q8dGRtsfzjPEcf3wjdWZh4t68v6",
  "key8": "43DDbJCaT5q5uFUeiN2iJavR7Ci7bWiDTuKaXf2FKTjZDU7U1LgyNZhACxQAfm4FEcM9gojDxBZC5oeBHgJdp3di",
  "key9": "3xb5yaqAktWTWSTdvtxz4EXUXCBSJStWmacp1YLmMWiAMEwSeTJw7Hi5URSsFNXqdYWS7aDjv9e5Jw5Qa6BozM4K",
  "key10": "2QKwVFbDa8rVQpjd4YAHAwpTfmy8qmKsg4HmVq5PmGS4bBZVGvPi1r64iZNbwcgevxVdTX7DrDJwF1aejuxwLTMC",
  "key11": "33eprYRcerwdpNbZNsRLDaeyo6oddbSCC4ZZA8Vbc1wENFZs6eB8eadNMYV8JbCDmzUUrvEnvc87Uf4hkHqzhzbU",
  "key12": "aiPgL81R8YFgcEod42mqGLCUkxyrQNKrJ7zuh2PQK2Wc5GY4SpPN1qMyD5pQ5MwWffx3WU6K2K5MbhmLoAHKFnA",
  "key13": "jWH3L4RScoSviquD4qGLAuL8A63yUwNFHKHFmoVDGo17wBejz7rGoRxeeBbCgdz1YHGJtEJL6Bru6UnMxtbxnG5",
  "key14": "3m9Z9MjEWeX2H6yiWBdaDcCbp52uFZVvC67wbSd1Fhxd1ZYkjrBWgfCMzSND5ygREvUnztwzHQT63ui4o7PCdyf8",
  "key15": "avztcLHydk4sjUNuArPQa5fR4KpqWqEyexHHFFHQfu6WRGWgnbpuXrC5F8yqiN31AJepnshuzavaKpNDYTZ8Yb1",
  "key16": "HzXt8fdYQGu1sYHwgRQVvQNt3XCyTV73sb1gvzHZnPZMEmw7XMVPuZgQUEyzpAwbMGxHsc8RkMUXLZmSakLtZDK",
  "key17": "3srNTjsbfsLNn6y1EANyxux37CryEAbYi3v4Mw2j4VqP3NNnzbTbB6pQqSkkD1MNHskpgtZnTe3prJdJbZEYxBkK",
  "key18": "83JdnmmQ1b6K9AcaLbzgVzMGK5rmvk8kVHdR5KohphMe37NEjWcTgUp4REDRjvWN73kMzfN1iqvnTHJNmzGXPY2",
  "key19": "2ucPB7hgW9uBns1WhrHNXXsBUWmHjxwf4otp5zTzBdMBXae7j194cUpT3YoAqJpKT2A36vyFWysEo2PGhskqyyaQ",
  "key20": "23YjyW21RGQHsos6JgyDy2PgEKt73ki17e6y3VwRiCbHCuFo1eYLtqh96fapoDzw3pRVWdnHeqYkuuoQBQf9kXKR",
  "key21": "4BfYMC2UuytA4YoHCkte2Vuo1Et7n6uk9Fywy7YH8XFyhVx5PYdGMA9jY9jq5tGsqx6dMUYcAXoLZRo1mmkzdsgE",
  "key22": "b343bw1DpCtq2uuQvmUu9QLmvowMmcgEfEASnbrdg2yjWwPif14gUrKFKoTtoLk7oBjfWSLqFXHSwn1v4hvC2Yf",
  "key23": "v5S2xoeCHwshDYXXBR6u14pyaKGBcJWy2V9DEiyRQHEF3bu7f88prUDh3TmNWzDF87Dbp638QZ7tE76UxyfcqBo",
  "key24": "2aDTbmXrcBaVpky4tLu2Gympj87VS4Vpu9wTURdG1xWnurRuDu3NwCiGQfYfQDSyDVKqndQ8627DMeaLCXL8u5Mj",
  "key25": "4icrdr2kHyER1PGQNAbyNrcSjmXqW2Ee5EZuz9pY1ffGA3dG77ns6ycF665NNxR5cWERKa7DXVryzaLVu1UuswMq",
  "key26": "2KC2ftPMiXmfy2cZTNk4CVH4fKYcKijaCfF6A46mZzFpwPSBSjEuUTYkNkwe7DChoxEFQmLZFqfBwSUYUTYhdChe",
  "key27": "4eunGLwAYS5b9kTPWnwc3X9gNckDHFQvVdkHxuyPd3wpzKM9Gx6bxZnADrh2bPU16ikAWM77mTxYef1aRNxj24Uz",
  "key28": "RVH416mwdkFBJKvYw5rNWEc1LeHDwwYam3dmyW9CswFuK1656sMpwTAzqVkwvZByL7mTAXFwsMrcVqX2ytgKzVu",
  "key29": "3SQqvXS3RDbHApfvNbs2QciycKUi2iQF37zu5PN7vJvaZzM5r6xJbcgEETAMeBK5Y729HX3i867k7yAgnJBnaysL",
  "key30": "3GyWETRrEEEFP95Z1QkzVEsdNznkU1ysVQn5i4t7EHyctG6U15r1k2bE8BNAbHvLxbCCsg9H6w6VFPxYX9EBUN7W",
  "key31": "4ZmQpFpmafDW1XcXYBUdqvP42DryaJpdNuSiyFU2vKWX7VWHHUzaUjoWbdtuHAPU3tAkNu8b8WC5JkCHtr1aZUrA",
  "key32": "JNdtQo9Mhzm6uttcKcVUMCDNLkQoc5PtAaynavyQGpPz6B34tCyxe6rEv5YZoGJKbh9VRhEXL5CtehZsWV7biof",
  "key33": "4payAQH8N2RY6RpCxLtFMbPQXHePMBdi4C6Dmsnc33jknsnLdQgs8KhhMUyataCzM4hVMXqoAMKuzj1vWkkh9gFv",
  "key34": "2BTUeML58is427zXkXx9tgyRGwqPxMhQoEPBMNUdbh5VLzvF5Rb3cqye399tDnaGufMgPCjAPPAfV6FWou8fNNSz",
  "key35": "2PvTemS94uUkXHsTUwyGwtZL6H9NMEXcN47xotKdx9LmwnioGYshibWs3ywRpMQ6tMaCGkPNU8TASkyjdHebhuNt",
  "key36": "DvC6LjuMv4axZejrqjfm7E4MgpMW3GSHPdZSVzRSpA1QyQS3PmPQjPnzZdKjbaVkL9Dq3bvvCYZDoif2GLcyNXP",
  "key37": "5uMkTBJZ8eq6WmWQrHqqbHcNAjyxZCqrBPXmTe6vyDnUtPxm23GFQbJyGyzKBJQiYQhfFdP9tNB2fkgTNyo8soNh",
  "key38": "28tzKKaAuTy9q9QpbWrAcY4HuV2pu2yHFgZ3SBnhwgGQe431ymxLxbpKcT9Dzd7jetHW4iX6qUnaBRqALvCGbwDW",
  "key39": "5utQKFesXL7aHmpR5maEVyT29wN5WA5FbNLmdMk2WBSRjuwHtj2fjyDmmTiYZ3XaTrnxcD24PWLZW4WEijFigMAp",
  "key40": "28n1kw8jogTSZ1AWL2QH3fUXGMYD8BSoYRxWgBD28kMeMNsfRuLr8Xz3Q7FBEtvVefKUVp1C3b8SmjLBvThJq8nA",
  "key41": "5XXTqvXmKbSRhPizhbD4y3ZCd5eNV47jyn9RozeVCPLDggykVEEqMjj2hqDyHd39ZvUgqSuSjwWdhQk9HCPAVfwa",
  "key42": "2tjYjnwBmrEQZQKBQMPUpjCVZHBsL6gaKJzWxLES1osRgpEbwnVC89hWXURVk2fii3GzywBZVdx2HdvGKDqB4FNY",
  "key43": "5iv9rELiqqKk3Mjn2WAe1WPMqw6R2rC6rwiCNaiiDanL89T9t1mXmVdQJocwLmbgXyeUU8NZ1sSMSCaRoJWmf764",
  "key44": "311zPtWczC6SNh2GL9nqq24YYiLkbUQMbZT735tTCyshkhc4T6gWCz6Bb47bH4kXt5iEuuWLFVohm6njk43k9no6",
  "key45": "4vJoqN238XHQ8zCHbgtCuVqPjjNzzgFHqrHuZw6zwthPtuGrB16wyrm2pTG8f9sF5XpwQq2coE6zB2ouEkXbTLkx",
  "key46": "4fnMaN9LYoYcAesnngTQF3QABLQmh5KJAds5yZ1HDWRdgMHuBrkjhihBrpKC1HboRf7xDkXMFF8Hwt1SsQFnUkkV",
  "key47": "3vFzFExxcvUUx3SUVqHdEtNN8jUg6DZjnK6Mxu4wDfonBuxpjoPnErEEcGoCStHCkS4UvH3Ax1KUstV9QjQtxuHc"
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
