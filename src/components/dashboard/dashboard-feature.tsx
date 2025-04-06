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
    "4GeJ5jZPwucUGksR5GWkuV2g9ktbvUoGXs7BWg8uePvXj57YpdZiWpuRmz73igXxKvppMCKgXijW8agY61oYyN6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K8GtUNHMz1z1FYt4i6rFdRWygVp8qe7EqT74YqpEYUHtqRegdKBCFWXnDMS2CzGX14PV3r897daPrpDNzB3cQSz",
  "key1": "5jjPbJq9PP713JTLAGzbyPifWWX1D1yUiooW4JyvwKPExCeucwjaz4oJQv5hFtcRSkxHddF2AvfZLaqXYZDgYwx6",
  "key2": "4ocTWaM67cdcT3gHMsecYhwGceZhuDphe8m6yMZvaGrQ7ahS1scuTdQcZ6ep4js7AGrgEtTakoK9qH4bj4c51qpS",
  "key3": "649jKznS7BaDGV7V17WWMeRnXyfXPru1Gngm689Ky4n1RsbSRe37DB75tWFV1ZCWgcJMU5eTEL7eFkW6zmkPVrzY",
  "key4": "2mXB5Loaih1Y726waJF2KhhMqrf3jjAKTQ15fB9UfB5HX9GqU1hKY7xAQXrKzxsxrf1phMwnPC1fDf8X7UUfZPkj",
  "key5": "4Bm2QgGqWi1mi7DCFZQzUoW2WxBN79ezb3RkxN8z9QNvLVPF2MFAgjQ2pUu9Mwpr1gULsLPjDPahDDendjaoz8ai",
  "key6": "2zCKKTdHD8ahvtcxWmF1CvCD2gJUV5i8tdA9qeCiNvWhA7eMqfVHWYFnakC3X673vZpa1xVMVgjsqdWFTniXJcGC",
  "key7": "564Duxopicp3yiZPYvtSTaWA6QAcYTNWPmxD2HL4exRxhaXcqQViHJQm8swNytmP7orU1cxqx4zFXH1xoPrFAQDy",
  "key8": "3YLN5pH7CrPM5t3Rqvco71LzdHBfWzumYpFBuRww7JMu4vjzNzhgjFoUQGtD8RsnBpAwHLXBo9yBKZstPJoUsRo1",
  "key9": "5L1vuyiBrVA6sGpcMmUoWFxS3C7G1jukXXNyd5RLUZjB2nAbCUQLEtZWqAETCVejukxvM5cENvYhW69uQ41eDbR8",
  "key10": "vDXXn6RqKjFAxN6bDUy2poRriLFpL2HdVGwDJBR2fLvVQhgyPcGFb5DLcX81nVWUhp7buS26oENfB7akTpv62XS",
  "key11": "2nAHo7HAzVuphUi4ZRGkvKznVuUQThgntvoUeKzFFFyBrww6R4hU2jTgaNN3zawA3TRkP71i8G59bucecPArfMLE",
  "key12": "4kQEBXQs15vkrGbKVoi486v7gkA3VXTuucUkbKoNJkNoLvtPLHUKz7g3f5fPNAAG4zDG4BKUULhrPELawcAtHUtg",
  "key13": "3vLXiTf6M38yiawYWBwzhjxvbFNQEhbGwY9eBLEyUu5MR9EnQajZnPFEXNNZif9ff7XSTuaVAiwDd1qvEeDx9D1Q",
  "key14": "3DCRP3RBY8E6kLyn5CRbppwbG6EFWvJHff19J8Eahqds1ueacoxWKybFB8deYG4bAd45GZVRnh1yvQ2HtF83Ugu5",
  "key15": "2Mh6VaPyvvWopneNsqnd1SQ74h2AsbQXfbigrKT1M1pZC61soiChmwYZfeYtMdANLo5SANnX8c2AUSAtU1XTnZnR",
  "key16": "2ztNNjF9SSnFnUZMHTqsSN7eu6tW9i69uGbfHS3EXshfWEMRcUQoHoSchrb2KMChRgSm7C14dFp4wDNMTFKMA4BA",
  "key17": "3mFDa7U7pHpWrHKKQCwpXXFvsuy1JxHLWtCcT5cygXtJvaXcbmmsT7QGC7xWVqME7DcZqgc3GUwStFVCCBASEoA9",
  "key18": "5KwvJ8LSd22vCcNoux497Zq7beWFsexTniefbgfS6AeNbi2hrP6J22wSYyTdAWhuzoJ1ncjADZdp3dgSkzULBsiv",
  "key19": "3V358XDhKQp199bML8A6UGxg7hiVJGKpt7hwagxuCPGaG1nzEyn4YdNvTUB7M3znbwRFGMkfAZ39GQHMrtsHSgpb",
  "key20": "3DcCLcKEos96jKAAobV8W52b7WXBdH2RoDwF96yfGA9rUaM6iGWoUoBSmpK7C68kPYV9TZ1PB7FKDbZVD7WSdUr9",
  "key21": "5AiyVdRg2yeyimqEEf6uffU8b6jGY7JpJvVVTRNPytt94R9GcmjVJ7FFEyFJGKtesHDggG9AhWqEU44LAoGod3fn",
  "key22": "2iDLy4BwPLdV1AEpaEnc5TcB6zgBb72krtDVZwL5KR9SXAhfqVCfdj3mpW6cXayyebkaxqT8HagTsaU1GBeKQLkW",
  "key23": "2NqJ2cjAiKnbRjAvkhCgpS4Ku2k61h8cGtYFHm9nmTHcZ56EM2v7KwyiUy9YCVL6AsZErKdhqHssfKt3LAaDwUM1",
  "key24": "4pbqF5N83yEgF6VUxZdMsknBuVQvRTGfWgMUMMeKCpL1g5b9o8AmwiGGWfvxsaWUbt6nr7mgVTP2Aa8fsVADuXNd",
  "key25": "2RDz4YHyVE2LarnM1HYVkXKCuCiojJFmrGkwYd2w5KymUfHaE9qpU5haDYYKkcjK8iTG784BZJu3nrzHqJj73uts",
  "key26": "2p62USaAjULLNscJJ1QUj5RSwUT7YNddesYHHrdnxm6BjgQVFbPX1EGFtaYE5yVUPWraVvb2RGoQxNMJ1YZ7eK8e",
  "key27": "4cXLt7otbyQbKrwbkG1Xiy2vMGT1Z5jt9YjTJP93zWeJRCToBYFmwm1q557jVG1uS6k1hpb1TDiPBC4VKkJtJKqo",
  "key28": "MHMYP8vrP3BL9p6KZ8XxVgjaRcaU4Skx3tE3vaszjmKg2PwchxjhwbbJj9P5vrnUhwf1aWVJ9HnfQJuMkpUZszb",
  "key29": "2V2T3itZMJ1ncrpqvKnDTVKF2qjRtPqyekrYhGb5XzhgyvbxwafogVRN4UkSz2LcFZmVRgJe8Zg5ACWxqtTNzs9E",
  "key30": "4HkjzYGq5tBMpNgT5TZewNJZS93XxaZ3aK3Vjmk9qoxDby1DVLmc7jShmhAuavLRiNCK5GZyqjuMqqbmET7fQwZD",
  "key31": "2WwdRB46g38Gvqk9WmcLvK7jg5C3J6veUHwKme4B4WjELvA2T6A1tquSiX28La91gqZB6f59njbtnSzTAe7HgqLA",
  "key32": "4bbvUaHXAERzXZS4X492SDRBasMCQ82aTLqpMX6DUTKPNpBxNCusLbj485TYk1H79Z34Ux7d9zY7k4pRcXJYp1Lp",
  "key33": "4ea5woc1Mf8cm3b4GuZTFN7NkvDdUvJCnRy9JBW9AL3FJXJZ1E5aEwA4mN53GEir3kR42XT9dzKaB3fhFH7vJJHj",
  "key34": "ZbT734hzAcu8ro3m9w6ep3C6ZReJvETsiDtDQNf3HduHMjgWoJYcvGLRMzcf78YBhaD9XdKRe3tGfbTgYXmPvPq",
  "key35": "4jbw9jYvDhGRBf8sySBaTucfXhW37CyYLM5jW6bC4FYcM83WeumSMuMjeDXTm74EhLpwfnKLjpCYgHmSiq5DQ4B7",
  "key36": "pAoA2F4jEDmXQbiFLe7NWmZD2gznqsoCrqCbacAxPr1SFPcCUQxjjoCa14dwyE8gz9BwKx8rYTovoqKnYXSYdQf",
  "key37": "ejrXbVk8AviZWfVSLZRqH52kRGGithK5CZpqbGUpGkHrJKpSuVL1QZNLKcyJ7UgGf6uuf92UuJmvTch2YNuLmR9",
  "key38": "2G3qonqmH6gZJPFgaCVRyeDRqQA5kiKuDR72x1f1bg2QMMC6CT6yxRSYa9Lkni8eYi6BU1P9WEYGRH8CFxEHUCsT",
  "key39": "5jADZe2UHuSh6XnBDduUwSHzYBJ6orU25rz8SeXrcnEj3CiztjykdcLw3MKJ5YLW2gPw471N5Aw2D54YbEzpDHku"
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
