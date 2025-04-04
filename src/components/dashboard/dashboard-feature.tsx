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
    "36u5Da2QwexAEHCjduouK4CZPQPWS2DtUq44H1NSRoc7fwDjFGv2n5Eh84cnT7anuVMoXJoNqXg43VQcp8jZTHUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MEPWiutHW9ibPUYBLDDZc3rysKgWCJh9h15u2eurxKk2nmjNKG7wSKyMvBzgPg3iqsDFpHryzbGh1bDr5s3tBEK",
  "key1": "4wUYfhjvxnjXdYh5nUQaa4xs8iMy8YCyLdyuPddyMFo4e7mAdzF6f5jrgSSuNYj48QYG7fw3e16xQBUZu2KrNGdf",
  "key2": "2QjGqqXmVQEP2wnsiNEx1BciYmpQbeKr7DcghZT65tyxXHANwXZC3BDvqjww6oT8Q9xn8aTgysYAJLZ8VnvJpazG",
  "key3": "3CV24Fz1sTVa4poeVGAVC9VFw5HgFNTpj5JwEDYNzkrJdZr3wnrdvnzbR76PvpEgF1PLN33wsyUH6ci4MbwdsXoY",
  "key4": "5hiTkHSMTpSnQyebuav1vEryDF2kyudeUNEgADdcJykxPNmCVthA33TTDqxYcXzDgR3JPYe8qASRvVuLuCSPB1Fn",
  "key5": "3YaiNTqfscHS6NnRWAx6eggsz2dGTNKQNgUrp1V226u3bRFcB5HYBeZmxz7ppFFqyyWmZHGPt6mNdYAZpafqaEfg",
  "key6": "3xVU2aDmMnHuorMF9SxzdirytfRHE4zhvFWoAr6kVJV7VNnkrEijJkF13Rqy7huGUfTgFbyYWZCTEvRgaKPTjWed",
  "key7": "2cgk2JyWfZNhaJ2Tpbodf72TsCFCGkSjMzbw2HxxuUBdFJn3944gzpgRgZtxjbPotMuThgxSWNcFi9cJNJiAAYQ7",
  "key8": "5geoMUWtquX4G3BogvE9ygZNLBquqYR5uA5fdnBbeKH6HA6TtUa9hHogoGqNocGfVfqtVRoGjgwYZG9XTESheixU",
  "key9": "4hA492qKGTfw4RZdE6CzXA7mKHq6CCD9BUTU8SdrbWAXsAuvcKZGBHyNaU6kAdtrpLqqDqgSVVdCttRLSK5jf3h7",
  "key10": "aF3HYAHpKgGkke3jNNUsUewyZFs5Uh57opFfPXsFV946CgM3q59kL3U2FmSWtTv2k9XaUufwQtApiywn9rEuPWU",
  "key11": "55EQ7xPJnJ53qTkBYDodLSBBKoLVtnUZciw7tnWJKRcpcV8Jpr5zhTWXonfKzy68q9qYtYe5mSoBbkePQWoHs8Tn",
  "key12": "jyAAKEiaDZLNgXZwUnJi3Sz6gPasP6WKmmiHiJiGHJQue1PNJyfhd3QMjoz2MLkyruPGnJy3XPo9NpEqRuJJ1RR",
  "key13": "2oNaH9gvCXWtwtxgm68ChEztdnyQEucFrR7SWu1cXqxeMXwphM6c1JjKSpjCuzeUiPzajvLJsx6La7amSKksMsDo",
  "key14": "5LwQdhbXv6PWiAaEMC1eeRTx54hjXsQsABbcwKvYuoy7vg2XA8QW9bLvpdHKuhASYk4xo2TdzsQ626nN5VvyW9Vo",
  "key15": "5EdDq1bJn8JPNZcMU3RjnkDs4gu1Mi5bv5LKyRXdLeNYhobDLActEsU2vuzzrkmxY2XKACt3T2Cmuorvy4mHy3zD",
  "key16": "2FT6r8GFqyFNX7rL2pLQBg2qmJdsC73aHC2suBiiDPTkX3PUcrAJ5LYicDqjhbgaxqmzYbH2ScKsatkszbwRa23z",
  "key17": "2rFKCgr6eagKmeVnFnH8WCtM5xoXKmpCeiDtTHUunbBGsR3uzyfAyyqPFgiGMNuZJ49gFHeDjDTUp1seHDZe86D1",
  "key18": "4Daa6XGcuD7imCNEGowGwp5W3NgBKRFQignRtUkXLPY2fKtacvJQW35suwyzGdfoS2axF1xsN6W62fwnNQnEwppb",
  "key19": "4BjkC2QKEsAaBcgQ2qQ9mWJGMEvSXq1ubmfzGxQaE5H6YV4cRu21Z9yKuaQ5eRsCwNoL69FcgbxvTURBnBNiSBAv",
  "key20": "5X87ZS29GLNMWXNmtE13rkGgfhLECnTbvXhjxqHyE5kDqSFEn8HyCek9YJTmuaj554sJWrR8FK9v36mu9qXXy4Aq",
  "key21": "3P4bDm9SbKMKrriTab5SiPDW2fS78uE2mPHWJDZ5nJhZnMFSGgpS7AUAyBnNmqgs2md2VLitHks3su581rvLWAHu",
  "key22": "3U7SyoYbv4Rvv21kX7csSuQKEeCYJYEcgZqJQMyHBg1FpcmkYKA3bnKu35teZfBDCK13czw4p2JCsU4UPmKysALD",
  "key23": "4np26vWeUue5jTY6yJKZu7UK8kSJnwMFTS4kPgyChmr2kPNiSaQLTYSUMgQN7eGUET2VnYfeZxBa3yX5ePHh4xdx",
  "key24": "529UDNkxL2oxA8czoZWBigdqY3DFv1926whrp8hWrYRXxzSp8VzpT5YmkJSZtJRrMVpM33CNPK8yEX6Vfw414cev",
  "key25": "jEGGXzkQ2uqD8QDdSF9Xev6Ce4QRTEEf5ygpJHuWhRrd92ZkVnecmucweGsppZDaVSn2Qg1nDji79nMSLVMyGXf",
  "key26": "2yUEsHtKWfpqTnk6uDqRT55v6JNvZmYvsuZZjZLYd9BWtKpTsLHJhNexL5ta8Y8vC76QxYxcVkEHbcmsGpdzFjsM",
  "key27": "3YgsfVa6G5KpJqsNE36YbJoLoyB6GQf89tQuqQbkAfduFpK7A29nAe2TVAC4R5x41p6SBoA55wUjebLdScdy5JkC",
  "key28": "2Z6yznYBzVzoHBywTWwPncuLitH1AUQfC6bGy9jSAGj1RFEVyj7ghAVuc9rH45Vho4TP554htyrMe8sWa2R9maQY",
  "key29": "3k1zhREvWCKzWNKMLz5TbTyeG61kKk8QQa4ee8yvhVCYZ3VRzevcZKzDDQABKTKLuyapoxmm4LhrbaiwYY2wtmK9",
  "key30": "4Md8V6fGgnCrPvzi9TM3VDNEhCoxtqSsSXnrwNQKrTLypcFS6pYAMX7fsXMbcm1NvNbtPuL4KhghfaWTaRJCZEhn",
  "key31": "4KBuWKBPTEYvQ8i48m52gEJUHCz8XBhk6Rdq4KWEUjh1zth1eM1jx4RnoSscMVVJ9QztwdnDstiXUgdiLLiPCjXL",
  "key32": "4yCN1nTKffrjonEmwTRdbeAuBY4YVXnK1RHXebwXX8ZskenhgT6ceBm6TFotgni8NnDedzUzLPph6XvdJAkY9m5e",
  "key33": "4zBrEWJXhwPG79yZBtnprQtoxTHkNWFFwSKsPuUVAv1sNcHWSyfKqoPNVb4NEbifbFe8ud86zSV3npm3SCbzgicP",
  "key34": "FYms4SLXTKv6Wma6QmDqM8KGw3pUWSArmBDKBLZnxCwNdtvEVTuaUGTLKSJ6GxVEtvocDbuBE58WtA8Wt8W3Fjm",
  "key35": "37svhkiraBSisSgjXq3DDQGs6qmSa8T8s2oziKntMFMJLqYcxcYZ6MFuRcHrMzWLasMtw3j2jTpJKSgg9F4DGvXe"
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
