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
    "jPBEvPuabg3fqeAnhztHmZCEjNiRRE12HRrxuRxQx3bmZvpGngEtiDtc7mo5ZWaxZ8kHB46g93whGJTiBR8xtS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SAHUhM4M2sCvfXiVFZqQwfBXAr6uxQBpJ5QhgiJxt2Jn4SmTMNXE3BKvYxfdzvK98EP7gZmd4RAqTfx5uLWABng",
  "key1": "3NVfJBZ9ogcMHLJmsDzUT9uoheFKz7TdkntPyypVqHenuYGAWjodUbMEbNifQWesbxcTzb3UmQsTC2w5W4irucZy",
  "key2": "53Zr9C4c8QMtwgiZLKsRprX3mnUiDkktErkzsCU59nxVVm6xMdWpHadZXgFa7gxdZLK6QUmgiwJajbGjURHdnGht",
  "key3": "sPixhAJwry3qGW9qmeFoj9T58DurfRWREwrDSEYrAuXrimZAUdMnB1ju7Kh8EbwmxNFQ6vQxnafcvmrRvLogMEj",
  "key4": "2UqyZmPuUvey6ySAKmvs372zFeosFu7f6JNMDrs3s8VCpsRHD1gPn1E9wt5AQJM2g6tnCyVJjBEGWkE8BQTnJA3G",
  "key5": "2UeH1kb1ue6f4KvJkerDamiHfgVowYp9HyTNiDCpwsMJYLkf6YPPvzau6iqGtAhbpxbtywNqPjpoyGoJQEZUqrGE",
  "key6": "2XmTgn4H77fsFX8EMcd6oa8kAck6cmdJn83imEqU3yYLUDXNk8eR2CkpKXemNZuWWhd9TWqo5nLrpEyJhAcAgaXy",
  "key7": "5Jnh8njigUFxztCJNDKHLhcgrnF1nKywntiMtavYEig7naBDyvnDsuUHpf8WpJsN2zkzSM3wj51YWddmLQuR28rw",
  "key8": "46vzj6QSe7efiFUDe7n7MhPWZYy9KS5BAsiL4wPFrJvdMxh5aSWpJ7f5zffDcE4x4TWuMdDHNeNQZNgyEdM6Qhmv",
  "key9": "5yJ4LuSm6SyYDVQEzCr7Vzv2cZurKWkNvWwjJvR9133ARfMUvxMdf4LsrKLe6H8osHRttMQPFjD5WMJ93xss9Aji",
  "key10": "YGjr5vsYv6o8KiCAnPs18HBZ48MppLZVrGU8kG27ivLduNmZNz7fuKYhty6qy4JXtM7crwJyGi8kAePWX9LG8Lk",
  "key11": "2zpKPEkHQzJv4WtS9fcX9EpkMRLjmnGdhHBZrZ6Wj2NSg5WdNRZ5UFq6DGop9sqRJdNnMP1jxwsCsQVJ2hRashU6",
  "key12": "2ypq6c61f7ncrEEknrbBqsKssqWtJhfrtGmzeFYq2Spys7HF8HYZdsMGHSk6LgDRqXdZi3yBFuNmtJ41TmZJZtUx",
  "key13": "3F5jEK77pm7Ka7fU4tywM3mCMyyDjy4gCjhE647Ry5M929FaCNzWiDcaNkRuU5F4XQG4J2uykpyyJt91W35vPBLX",
  "key14": "xfAZMA94n5mHjqvksfNZxCwj4XE2JNbV7ZXHpM719VAA9bbbi2Snqxqpkea4uyMRFwRFwK9c68RA3VKtc2nARdW",
  "key15": "3NL8BSBncmisCGQ62SfNRhBULhHBdVXQMtH7d2o5GEJKF1nEU8U5CGQE8PKwv77u4yEC46yn8e6W5cei5N27cHuQ",
  "key16": "2BscgErmTKv6YhuHhmg39Ae9y2Y2BWX1WFqCyezuwy5wHnUvCGxXTKvhqYn3hyZRxCQtZ3Gtvw5ffQ8tmUhHGhfW",
  "key17": "53CVdJC1NaVAktvK512V3rZTe7PK8ucb6sa5UB7tRURva1ZiyTRLdTo2RAyAjQS5YB6ZKN3PLhAUetL6FkFYzvt7",
  "key18": "foUXFb22AC6w9tBPGGeFSgCWtJ3hB8CeX6a4ibnWVoZDQusLRumuXgWM36eRoiLANQv3KWRs8Jpq57Gr6MmtR3b",
  "key19": "37RHMgN8zZrzVhLw5AgTWCFMnrV9dBrsCtc7yfMLMQG71mxiWs3VU3v2ryzYX83XYEMgortx1vA37heYdJWg3FRC",
  "key20": "2PQ1Mxo3yiLNdiPUS9vbYpjKxqqjg4gL4bsyQqkYnu3FRFmMoRViT73L4vuWpkQcTDuSBbfw1Bu25QP7N5G8FgR",
  "key21": "3FerzuPXbzu91ySbbWB4ZGFDC3ktkKfDdpigxVpjLXDg2p7fUSzKYanVisoMPy4LzgAzm95aoVyF3BQvpKFNKCvv",
  "key22": "3wm53zQd5gRmBKCY35rgLct3S6jfWJNxeHX842APZBRyWidxdo2TBfRoRMqrfpTCAgrUt1CckFAU33L3zix6vvky",
  "key23": "4uVWNGsSSGqqguUfLMrNHAiMjtr4SugMrMKdQbtr2aAzQgfhX8CS1FHCTUxau9fqppUQpDme3QdLS357BjbqFVff",
  "key24": "auabkwP4VXW5xLJQd23wt3Yx5nfjLALnyKvH8HY8e5WYKtT23znoqKGRjR2JhNGAqbUNbEvHiv5EbLDC7m1bCoV",
  "key25": "44NNa6zxRTAneyTJDBibEHxXR1ew3dcq2BfCHhdpJdrXK6Umembar4FfnS9QVY36fsz4qQtGboa94PobynJ7zaeK",
  "key26": "5TnWqDq3BQ6ytx8cKCPKToPJVczR1Z2YsqgUhycnv5q3mdgjSr1Re2gs4tTEYr1dPMoKtvKYGbvgKUVdDYV3kJgA",
  "key27": "5CQG9CTpUpEPhA1PxxG8E1ZjwVwvoGLvAMjbavWGmyh2uMBoRW6KvCnGgSHFqtHwx9hnHGm7PLYudwPS1MFLM4BV",
  "key28": "3N59TDsWQQxgUMYaE6sGTtG3YLVzoojDHo87SjXCsvVxidHhpndsJGvg77c7pmfu2sP6XW77hBxJNSeQ1cL96SkS",
  "key29": "55W57tknXqRPKSQNHQ1MKs7Vd62UKHjcVXMMnvNBD67X6TztbmD4MQAHbYJKnCWmLana2a7XUQAv8TexMgiyyjci",
  "key30": "4dqg2bg5DjrgPjEb7k2dXH4H8YbSGPK8x36zq3Rb2Es4x16Nwf1A6JRQCGEZ12GcBfrUFqBo9j89mXS6dZLthDU8",
  "key31": "sb4rGTMEkmBArC9Sx6nTthUu2SLAFNKcMaXiSJ8TfjqjjZxRLc6kaVJrijZT5NhWxzR17Yoi4CjTgzYm1Z3LWPH",
  "key32": "3EmWbxSogbXGmC2P67pu2upnLhxqTrBfARf5gbG83k563UKdJKLT1DzBbhPXcPGUu2xDnULkMrCJpDuHZa1WFDDv",
  "key33": "2WLZWAEBCc2BCq7BWKitsFTjZcLDB9sqX9q4rsjLXM31QmkKgnkzgRRSggQx7EbwcC8CRiig6XiJEbYjPE25ErKX",
  "key34": "5A4Jex4gY1mG7QPbz2XiAHp2E7iqaBQK3cYpE6TjcDPuhrXet4RnuDREaBj9XFWq1XoDcSexPr2jg5JtmXv4Mbfc",
  "key35": "2sV4FRSXWws8jE7vaoaw4aR9wuaJurfbRCrjXCstwSr668kpngAKX3aLDWm7fkhVyz1gdvG5brpU1M5kTz4e8KbK",
  "key36": "3eA3NZwJ6BitQAnKqMsXA5uRe5FLhhEtarZaABtuAV1YUdB21m9EqSd5nxJ2525ndpukqwmLfmrfn22nbFeZLLZ3",
  "key37": "3TRYfmeaSPsq8Pxnd4KCbC5F9wWPaTvARPX7fs7S1hVTC1TMCiHU4qeoGEkzrMFmNEQh8yfZZNUABPLC1sF4ogRo",
  "key38": "3paVqqMsUfaiHKu1qPj9x6v7zneYBY2jbbPjLwNzLHHCzByq7VD15LsHcuVNc3pb7o49qDn2VvUngXSEtGhsBheF",
  "key39": "2JLiwYbDzbmLn4nTuBFGNwVMBEjVjRnfVkn1762CAXQ8JuD5moCHKmyHgLFvWJWeF22eb3CcfVBfpZfdH9MzAKJw",
  "key40": "2wqJXMJrjWvRpM4BwaiFn3DAGFkB9qcRNR7M1io8Z8vQMgQ7sHndpCiEZAiiXGtAzN8HCPnRHdzFmikenGCxMTZ4",
  "key41": "3gbEFGBFRqhkKBGbApVUCHgiN3knn6BKs9Qvk5VSY2PFurBKhykdH3cXBvnVTj9FWfexcag2tbbSUfpEJ1qeNjrj",
  "key42": "5eU6LcvvuShTPNiRzvLBxtVXEazaTPsfvD4xp53i4oX8k7DoLQ8yWrRTgbfZEetWjZk9Cb1arRojRafA6ovNWH5A",
  "key43": "27aTnB9crm2FCLmAmrizyFVdrrCkoz8RhsfPk3BgTk2kynKKBgfoWGEkt9zZZuPAH36k7tcHQnpZTkcs3B5P3k79",
  "key44": "2ULmC5ZSuYi67AAHA2bBmbP6Lqiym2hxQ5mw3M9kQtLJHVegyaKszcE7hfWZ7bUjusbGH5GAAmafnqiWLVeMXe2y",
  "key45": "3tsmwhvYdvRmTuXfnX3ejSpHWZVFb4Sb2qxpiFBSbxSJQ1AtFZ7s7BiyYaRFEsgxvKmCaXkw7bKanZM4jBSnf1aq",
  "key46": "5tFK9JsTajTbB2BZEvm61U4gYkL1x7NSUcz8yDATC86nWgDepamFbMkauFgxA8VR9L9NB6ES8oAfVxmYHWrGVD2x",
  "key47": "3YV5oGRaNX4HPQXt6Kx3nJacmwHgZek3np764JrGcRojmpawg7a2bmbB8Ywa69x38Nk7zuNDwr7MsJLn1uxP7pap"
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
