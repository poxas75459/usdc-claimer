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
    "4hz6Zy3oLKtvPj97hE4q9N8fdG4HZuVbG3sPbSW2R3UbCPV1DntdhNKVmowBmfo37yA7mVQ2v8u9YHquohUhPxDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kfKSvJXsNAcasoKKDCnWqpyQ6q5tLacNyzTDAGFZmh3LLitzrNwsgwHdXYHsg2jmKzRS5ybAxVLg6YUSkzWLFHZ",
  "key1": "3v9uN1LeRxSp445Kr4Bm9c9gQ3V5XMYZJDqxwGu7kU4Bqxcqow1mxQhrsXxeeGJhUdikJ5LDD4pPr2ZfJBawkQEu",
  "key2": "4TmL3Mj8kpPTQ7F7H8Kx5LhcBCevJ4qc6LBokxrdPHMcFwW5e1CR1LJbotPyWze1cZbRQ7iyuX3soHQ7cXgNvvmt",
  "key3": "5eGVv5Vff9Eft8LaheR1ioAL5SbY4jaC5S2SuE6s253y7h5FXB3dJxZUhH5KztrFJ6rnE99XMPfQz2pEBYxC32Dn",
  "key4": "2GZSekUsPUFkRhwtvfBhkSKNFzGZUg5EteYNKUhgcqbHd47NQ1y3bKxFCnLJvGimoR2XCt1VBUjnTkphYvm1R9r3",
  "key5": "5q6SFR5ELMPoibFwxiA9gV29tkooeMXWFGoEVhEPKAhzrQgsi6UH7okJHYGwjVMr1spdDX1Qc9UsiFXDSsT3gKn9",
  "key6": "3c2yknscfxEop2pbEmGkbCxNFtPmGzGSYNvxYAPX6A1PQcFpxK12oqBTobXw5aFi9un95J7dmtaruvmQxcc5KCiw",
  "key7": "4SzuSBG4x18gQ6pTeCD9geDTC6MSa4HLs1B3gcy1dZ11mXoFJw4piGaGfW4uS4iR551cfM5rwm78DhnQyBsiM2U",
  "key8": "vSJRwqbdRyWUF2tnbHfSvge5bgfhkS2qN9bgQ2QXbRKVwy8jKobcmgqRyqwtgxN7YLc3aMEATxzJvLyKAzvK7s8",
  "key9": "2kCK2bUt7fjonmRftRYnXm8hmwZXL2fgUQAb5bj9vZr2FGAszsaNUxHDwumF3avM9jDBDd4fqJMhRXTK8ZZHMSSS",
  "key10": "2ANypmcRemX1okrSSLHcvpD6aLjC4HX53LPK6YK6c3YvKBUCUB3j6Pf298RQwrcits482PT1SxNdAAxoLawEwD7",
  "key11": "3z9pEjLDi3a9vt2tNjZwJnSgxk5QGPGVqc84s89FQf8GSSK2aY4rfyAeJJ2orQZEi3JqUL53h7HWYTs2XQw7XU1K",
  "key12": "5xcAuR6BLjzqD9X71ANnMxfZ8mhmgHmgDkkUj4RZRthh649n4fUynKawgH26Dj42WDVYQhussdmbWiwAU3kYkrLW",
  "key13": "5L1dejywetwmNF5JxgHhUZuoHbKFDA68ikGsfqvHpbS79jAGG1LCoKs8w9SJPmLus8Ut5ciKEXYsKfk1Vy5ntSme",
  "key14": "kAHRc7SBzagWT8x6f4Ax1oJwkyBNWXWcpPBzEXBLZ3pbLhXNWy3sjoSphC8PJcLmqa5iYiajygWkQrzQAB8jo8B",
  "key15": "5cpLvjSEY8AEGWNWnCXFAcmgBkEv1zBmQ738BRWdgTxBTGpUQmwqbfUABfT5ce7gd1MnC6Lnm15YjQajm17KNNWW",
  "key16": "3LCSK3aBAhEn2SGYhqSs2qY1HL1okWUziAJLUc3geerWshQRzF9uGZE5u7dPk7dPKPrnJXMdi5N9s9tZUSimRDK1",
  "key17": "66WpXRBP1npwS542VDYSQxrfHP5fM6r4bhbzbJ9So1ExP4whjG5zCYDcMWHii9VWtkbbEuUd8k3RMN48dHACzqMX",
  "key18": "9chaDAsi329ZbPJEcWNRHZ2RK9HfQWwUoYZSNGTzFxEz13PAbBjahasMhYCYLGvgZftSyA39Z7Han7MczZy4cP6",
  "key19": "hqRodNU2Kq48gHSb9fMPSYHuW8GJoP4XZKxEmce2u45YmTsjUTkhdDMt17fB4mWqoWnC8agxgBVaTah4HcieKNE",
  "key20": "5YSbE8Pn2eJ2sGNJsRmwJGteSnTT6Hgz8onzBjDiAva35ib7r7S5833zYcE7vRZ5aZcmFFGjzZqZirvcSwiMprUm",
  "key21": "bkWMMRWoznfbZSb7F2HwumeDE28CuTLVt5FhnwnjnhKdLiyvL4EAwcF3ZWdszySXrD9oYMXgLTmyFXvECCjN5zB",
  "key22": "5eKMVyXqrEEY2p5ve9cfp41v6uZvGsA19PvFdUgdbHKinbsWMzjU14BpdUjzEDQvgWDHVY9o2b5yq4TwV8tGQFaC",
  "key23": "62yzDQ6h1dvtwzph9NeQhsZkhLsV2qBbiBzub6cmmDew4q3BXjSgTnzM9WktxJ6GC81W99P9U12HBWoQSazARcVi",
  "key24": "2HB11vS9aWj21QqgfGULEWCKLKnwz61ywhnvmwLD8nK6aXtQoZSL3MC3VS6ScQT54PCFN3e8bF32JdYHJ5Pecjy4",
  "key25": "5scrugGh3MSxMxFHM3jSK3uscmTPrfvckMezhWLDrc5vcg1NmwVEsuoMPRDkVsYTPhBxCEyGLiVg2kHrNh4HpgmE",
  "key26": "515dReob2fSDJEc1CgEcrFbqcjhDh25ggLGcAqvmB1cPzjxr8iba5Jbp1Uw3LZbXejpcu6MfMmQSDs2ozDDVkHPp",
  "key27": "2vB631M6XtdnQ1hKcUch2HqNpxkmR6HrwkvJssfbAZBsTzppq5t4Sp3y29BsNxz5kG9vYCJPxmPGK391cWsGKTWB",
  "key28": "G528uTFbgSbVjqTghdEgvnJ4GESHYUrDjpQo2FMqsZcoS7NuT1vfR3wZgreRvZSMDwtJKN9sZNz7WS23vdZPmnh",
  "key29": "gK4jubeS3okzsDtcrz1SWjZ2mwPsEMc2hWpgWiF4ewBCbmKoDvjnT2zYwT2wLDAiqtmTuPxE27fsxVB7sBTvfSa",
  "key30": "4SjjbbZHKNYixV2RmoqZbeb7gz9cG6QKs5PnVg82NnrvutKEmRZ6Qgx1DMg3r41wkNPauRFR5sbNijiw4HEaskop",
  "key31": "3asnKL8k5hupm9tHtDRnPvfNtEz64XM9dBD4E147C9B2E4xKBrvbnEZYQSaXZLAqcF6J5XwfJCSbvBKQecjjz2MP",
  "key32": "3CByjdLaeicoSHYbhi2s94H1f8V5mbAXJbZqVTh2S8KgqpVmcArULpFqwi3dswYAQrzNQzQsA4U71fB5sQVKp4Sc",
  "key33": "3aKqE9ne9yA3zxY2H641aSXeXxXZ1qck3nTWTgEUEY9GKEMXSRxALsxPdZy3xJondiomVpVABCd1XhmErqoDecR7",
  "key34": "4aWK4aW3FCgxhwsLpqqsoJJUJJqdyLfXh9TTafccLhWjLKBtZ4vRn4yt3dWmrd8xqrmfuSsrM3tFPrPCUxF1wPbr",
  "key35": "RHef7XU4AEGsvvfYBzmz3HLLj3gzwogHn3BaiMLy7t6XEhgZQ2koDbwEXZneRLnKurXVrBeNnmffBfs1cyfKacZ",
  "key36": "4Jqyk12vuBrMuVUUuKouVLvSFnw1UAtGGJFxi7tTVr46ZUFQrJa2yBbs7dN4vQKxK88Hefm1SXdTh4Rx442m4Mp9",
  "key37": "4ARB8CoW28h7bHVxHHYneCrPM3r8EtD8SuSfQNNdFjL3fsNCc4Kx3U2Doi2EMPq9Qs3Z2FHDH43ot12p6cqDittK",
  "key38": "2DVTwn6NYwFuvQvfjSqubaTm4ttcP4ARW3pSNyfqyQB3ojrFTvorPr1d2pDsmnbU5rWoMuuTLFsZuFPLQjiQLW1V",
  "key39": "4LLuhdWQTebx3rvPYW6QfvqY1HzpDjfVnRnKdJojhMMcJnweEtPpKJQ8XsCJcQkcqDyrA3B46GUZjYM8nCfGZtUT",
  "key40": "4C2UHPoQBks7hf6LYkKqbmxf4ENuwtjJr1XL2UnKY8z6XmEBDW1EJ87u2MbDyWyzsFaJLbysygXPQCGberaV6UPT",
  "key41": "4qNPRHBhoTZj3krRyDJvx3wjhkejeajXfNRN76688S7KxCspBEV4y4vJs9W4qY47b4GvnNL2GMaAfsQCkfk5B5Nt",
  "key42": "5tJmyPCGrUqquQjuuUEDBf21YjBRsDhPuqAKQBQBssYX8GCpJAUT2DEjYjE29qeCqvrSv5NVwcPuEtWRiTpw9nMP"
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
