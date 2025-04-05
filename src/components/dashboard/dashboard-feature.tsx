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
    "5gJxzheHnwQ6xBsLXSHRojhQVaXZsDzhtMVtxvpdVJF7YgYQM6hyYntEAdc4kUy9AKqLvVHFQnA5StiPjCzxhHhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EJDS4fzGiJ8Ld6DVb97d1nS3n6Fu8xquxwuGpkDnJbNbjd6M9GEwcubGggg8wg9YxRn59ojDLgN49aTbEiZ1qXd",
  "key1": "2jDKhy4SZ7YPYeFydwMx3rAQ5P1ZTAN9w9p1dcSgrvY7aK4Q59u777EsjPBP2RuEqvCHTnWUmA6nSvoFwWJPz6dN",
  "key2": "5GpVtFj1Re8b7ic4zuy1Lx6vNkRqgRGhSPuqqFUvesKuSiJJcJ5nbG2aWS4fTfLfda6GTCRCs5EPqh9pTyUzLUGs",
  "key3": "3GRLYpWJ8bKRxu6mBZgJYgprsTykGnDK6hYv4txa8bvH5eMjKmska92DGLDRF4nvuvqoWW3ka7umsGYd5HVUt2qu",
  "key4": "rmMuvqT5XU8WNZk2PKBXUhteL1PSCejwvHjCmV5SEP4Lz79YuosoH1W3wGCXYYDPZ42SGngAv2bAWEdALptFmTM",
  "key5": "T3icRA1pTwiY9CaQy6ciL6GKx3D6w6XmTYHrL3FcceTY5j61BR561DWdeGHWRUyJkcf1X448F8YhX5pD7c1G3jk",
  "key6": "5s3eV2rm2YXC2RHu5kLfAmQ1nHc5YWrskLsgzbyiYrGPghVqbbvKcuk3uqByxhKGEyfcZJzHkYMDib1H4iz11t77",
  "key7": "4A1AXGXzgHEJ1wrvRXBGU4fBVdoy5KkfkoJffcXMZUqAkXRTVzTMkvtepfr3q5XHFapD1GsVW4S2Y2WtV89BxpjA",
  "key8": "4KhyLzBTS8GSHyUx7v6vLJgv3rh2agDgT7h6s4tccs7BbQ1k3ej6NY65y5ztWnRoh2jfF93wYHdH2JrKukzv3gta",
  "key9": "5SKZgDhzz8Wt4EQzS9v1WhmVrwRGMts7j6gQB1ajztcsPxSpDiX7SY7hkazZxsCw8KJbCWJF5hsaifFzvNR1ZoRV",
  "key10": "5ThCUoxJEUYMYvdScK4BUPu5bPZY4qGm6WPKga9hjQDPGcBuGLgMsUmQAK2Y75HjobwMnXYbEtarmyiMky2PRxTx",
  "key11": "3JqzgPYTX1nRd4t7i176gQa4AiR9gr2foQVPqXYH7dojkTpsLH9AaAkXqdjPAow8HXqYcmoxoqcqeuFKJ6yg5GoK",
  "key12": "3YBspudehnGTTGHqXaBe6Ku3riREnZWiYHQbmgXgPgbynivsozfzcKcD5K9GVpjhBb4WhCVDodK3PtaPWumTCty2",
  "key13": "GnphVmC8rkdCC1i2tTnBfSb3baCqaSKagUX1iRNQHuEB3ZUvGoJbrUhs21zf7fJqEHEiHXE39KpzhaRZQkSUQzY",
  "key14": "31FoZdDLuEFrFyecZSSKPHFVQQ1GSpwo2QTtw9uR1oUP6FM6JWEN8GV9CUJY6RpJapj9a1RhrYDV81wk3e61v9Fj",
  "key15": "DJYL1G226dBDeLrrU2u5uEPtTrF7fAobPiQG6zh1HxEkdT7Xwge7hDmxbCAq15bxrx6KsN4w8yP2ry2tsBmNDGf",
  "key16": "4VdeJDQAUQX9hndDgZ9v5VBBtkCt95uJ6sj9nsmRSRhWT7YiTrTjryNhaFtXfx4LDj4SZt9yFkzEoK58czqp5RL",
  "key17": "3LUVEWxU69nEbKM44x3T5znKdUgLVXC1bz8nJyXnCtdMTyz5okd4KUQPDTbkWfFRKQLrgRkYNQaRbzoURWRwnZrC",
  "key18": "2tW2N7SYwpDWnqSYE27wZDtkFtj5hYZy8VjBoy7zQKk3gvZcC34Q4hCzNvA1MpvYGbx1E2UBcZYjkv8ZqkiYUD22",
  "key19": "5AFcbFedHEZaLgxr6pGNvjm6WFXaWJzowETjLGPGp5SXXcDmpFvrqmiqupWde8bqea8pD3JrsJMVxYRcZHS42jR5",
  "key20": "3WuTfxV9UEktj8fzUvv5FPVG6DLAaTRKSYXMmtZeFafkVEMidBNb7Cx4T3oy9M1RmbyEHQT9Dk7WD4mvXsLsaqmc",
  "key21": "4CTzawBiy4uKq9EHAiCdzvuLyxWPWw2Xaq5Eur2dzEJ6URKvKBdBc4tA6nMLo2t9PywBCMWKUVmAMDvQH1z9gZDZ",
  "key22": "4QF9zmVrAo4fJHQ3ijhYTMP6rviKYuJ5TMjqKtyntbyW2mj6qmBVf14WuxwdZ7wegvxpTeTsNVLbAEyBc1kiTbK5",
  "key23": "3R2NNghKFFY7HT2w1zjAW6xGmtE5CS54uCVvzv4yGoivyW8VHDoYpLzZc5ezemryJHqzohseGFtkqiNjEU7vuAeq",
  "key24": "4KCeSrgp4TNTWs5P9kbEd3ASaDx2KosdS4UQHAtQ1K8V3GFFQExhhXENMPHLgffj89fmwUBrsiBPv1bxXhf1GvbQ",
  "key25": "334TopjXv8rxfpE3thZi8UuXEvcroNWzbe62ggD1QBuSZRqMt1FDnBQMjPfuCWVywrcrS9J1CHTiYdtpNHDstoRX",
  "key26": "54gUvKPTajKXead5Zpqbu988FKukBTA7m4chZHxXa3eKCvk4mAT2Er6uXyizJiqr1cFQmPGor2mdpS48LHTTy5yD",
  "key27": "YVpMe8pYwS7AfPhh9x5jxnQqLE4pqs1MLcdqx6ziHZBGETa7F2Ya8mCec86a3VKAddyJu91gZTQn6YDX18QF8pL",
  "key28": "W67sVNk473mdFx8ArasFHK26Z2qLSRfiYPVvveJWWmRXiEhjY5rHdBb22Y5PQ2C3vax9JhQsDKBuSF4M35qBr4Y",
  "key29": "BEsPBiKg9ucjDhFqdBEg252nCtccuYThPVM38HmYEVEccYjwaKEbgrxDTRzEwKULu4ANDc41TbDyEMFbE7TCpXw",
  "key30": "4DvUH3ZH6aUPb7BjHLPA6hSVPRYFBTnT43p9BVe5zVXaAc1Y8QRKqwcGZ3LstL66qZUT3enw6A1UPyf6gKFYPCpU",
  "key31": "5gM7UDPQaFbiLpoBnWYduTWme8jrnpeTGn41jhqHPYBYJcSH5Yykd47Eq6ap7HDH4Q6AP2BV9TAKD768NXLv9cza",
  "key32": "3SRPjtJwLkcyVTmBEgXnvcX592QgxSxdfEdugYdtes7S8f59uymTZ3Ga25agD5ZPQDxL5M3owgfMqxPfpWGrjvCq",
  "key33": "4BVgdWerELMW8saypA8NpFon6irJmzxCuBCjo8Fv9KpXsUGq3B6LJvhDR9Ej6XLnNWNMuvmtFQFjfF4HMGQLXquQ",
  "key34": "EPvyofko2YW8mSsNZQhBTrchFPLr9gq3X3nnqkQvNfs2ZmRSgE1iUMKnLZC86dALKr7f7AJAdBFqw8drGv6R9jh",
  "key35": "3Fc9dGSqRFXKjFuyAbZ3eLta7mrB3ddg83H9RTJmbFdkbvT5B4S2cbnUGa5aogbtgfxw1dCwtsFdLZAU4LJ5orCk",
  "key36": "43ahTB5zQfLXXt8ntnVLVVNch2YKFnGr4tQUnyruLkTe9af5tQYgC1xNp1cQqqbhoCxeqATUPB7cShv7BPyixnzq",
  "key37": "4LSm7GueiTj6yo2AjrAwcwNQkKV3ADRobE61kKody9Zja9ibcYvfDjj7xJn8rzBphHFoKbmenm1BzUtPJvwea2xB",
  "key38": "2Q5GwSx7VCa1ByXkod1hPvVLJvzYLneX7RvPZSkra9LbjDaUQ8oHui2f6La468xJPkLonUehGptcwD8nuLVgrY5i",
  "key39": "3wUhaTm2GC2SxAe9xEmMDav2fpiXo6SkdoMRgiJeh4zMYA9kqf39Q4pQWd7Q2RpSthYUvpHNmEbSjmuuLxsgYdtH",
  "key40": "5TFpXkGSFgoPAa5VPT6xtT7ZmSLy4ue6vpMAEjeNNkeHg1XJtaFXjp4k56Yzu9Rtj3EnBWtqmNr2VnSTsLrQBGzq",
  "key41": "5sWzaEu46maeFfErjRiLd36VTNnfVHEkc3rg9hdkA3Zv9yaUCqtEXYtAUL4F3DZQDXYoDqynQpto8poiL5GEN3H",
  "key42": "EXrzPe2hexVFQdR3o9WUi2DdgdNR4ZPVHqayCrTmxmJEXFfFFGjDTZbJT9WbvyeExVagnyoiqcGZNdxaG6aNKKD",
  "key43": "5515ZMALDX46v8WjzgUnhSjtPuQNEtthcHrJLdQPYGJrneKeiioBPDhsgLdj3gu7mcZPtHuasSToKPrSd2SjTFTY",
  "key44": "48CEyvsHycQRxaoivaUAci6zWY3ofYptT7FJEApyL7MJxuiygoUaPb87KA4wTProUN2JsCujfGLWS6eYFDE4ahZP",
  "key45": "21h4v9c6a3mY8cfqeqpiKFDr4ArhwvBnfU1j6UVbDsePXxi7FD5RfptYHMboKYAM1dmJe3cniPGwWe8ykHvKngLw",
  "key46": "5BnNZuuB6H2kqLdscG7cMpdVqCbMyEJAkqtz5aMDJsubXs3xiWTM9XxAhnaQyTBU6oczMTrLUmBAiivEuPpKNnzF"
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
