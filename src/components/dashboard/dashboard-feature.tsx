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
    "2zVBN6rfB68dSAco6qYRScoD545iTJAJ3VDhLvgW5EUvLgapQzNPiiagox3QMZd4pawbKfwJr6KaHxk2eoCMnB8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AS7xAwYobP1PFyHUw8T66YxKA3UWMbs1qaxyBpgzUha6wgik6jZ7irdgdiuTTikaaNLJuNXBLsuwetPQ8a6dV78",
  "key1": "4sCrcTRfM91RnDYrBG8c2QmH4MQTq9TLs2rzPD7CcZQVXYszvmqxevhQZzhZ8b4FPBePtGJVuxxQwNJAoJwyNAYx",
  "key2": "5eTU6oeThE86tJtbz3ZooZyu9qgkvMDGjsR4UF2knvxog86VRLFot9yiAhxWfvNY3dKQCCyuLfhWgQPTBdM8xyNe",
  "key3": "3w4Y4vZgBE2BFLhaRucLopBmwCjrqFMTrknNfZFH13g9u1PGroW84casJb6xuiXmtA4YMKZFE4v6oAKEfvxBZ7BD",
  "key4": "32zCMSPPpr8NsefwjDndx1wuySE1dwFXpyTCKAZqUGMTUEUdx34vFisJaqBXMvhXXA3ABStKz4HDQwWRzTqjZesg",
  "key5": "2onuMN3Ucs1HAuD6WbYtLLzSgN5XXs8w7jWWW8UkL9az8VRArFMnn1TuyM8sjo2jwBH9RQnAbh3jLGYnX8gXLiJV",
  "key6": "5DdSiupz5tgtXjW87PJ6nVPGyqxUfQYSAmvG754jW4q1oBYudeoQA9AvtaBp1z69itYuZaaQU53kdWpoyxBKmR3T",
  "key7": "KpXATZ1tKwpNMUPseCkQgwSav8sziMaukdT6nMPVaHGpZ8VRiZzvD4GQVK6bEkPNduHvfQWhuHXieC4EhwgbMkw",
  "key8": "5RvCJqrXGhPHc1LwLZqgs5XC32u7tkYUYEp5ugrWd7kDmPEVHRLnmayLnxN6RB9NoKbus1yvbM6zwNQTPGEQ4ZwM",
  "key9": "YFysgx47rfezyydTW5akKzrdrhs4geeSkFQ89Uad9J48qTBFvUtVjGjBDqPCL4YkTbSJz5qWtZkG8dhQ2W8SoFc",
  "key10": "CDP6nyoj7qGMqyUnJAGKw2bp5zmUnTVPDexzjFP3cHUCgBWyDatQE7fYpghP5g8mDwwfVekxb9sopopuYgUuyuk",
  "key11": "2u8gGgzbNfg3LLHzxseGow3bVAjUMw2xKorPNgKWzgMbUh5Q5q96kxWTHxrrHAqiybXrrQ7i5Xybjuu8q3jv9PBX",
  "key12": "4bPmdJxvGWbKrNtzXo63iY8TACjX7fUrrxNEGNKduhFcWQrAB63zLGjhkSntXcni6o3rTR8X3mD52C63hTwDrUZJ",
  "key13": "377ZZZQypDJbBxCxw3zQzjDHtHePMsKVmpQqtovCtK4feuva1mbLPaSo2go9jrAwikZyZMyrGqKN9t4dj43Tvq3p",
  "key14": "4bPMKCXXHM8REpuJvicxfDen2iFrx9HSNg8DKGW5ip2jrGZQAjZAaDPa8svPsVoMgYipcSSz1WJd4yaFSwzJbCMj",
  "key15": "2JaL5DqNbxofKi6ipWvquwaUwSACcRwr2kzVyFwBiaFqmkaAuotwAhB6XcVsbPM1etvEunBWRWcwYY7xR8oPHdgK",
  "key16": "2BJ9wXBaSBRZM9d8owZX9j3eSS8Hd6j95P72KCBqDZ1gUieAkJ67ZLueCTqzATcqQbbGx2qd8AeRpSMpAf21RheW",
  "key17": "2CJHy5gNRCfTaoQbnuDZtui4fTHGFmfMWMDbXwsGPVdg4YBtGNJz2r4Q9PtCFtexKk9ZYqHSV9pgm9WBjXWJyVQ6",
  "key18": "5jR8yFmo8SEQ8pCfGCApYiKK8aQopwjo1yuegeSxedmLmjCsF99GtbiGTi3ahrUB5jR9a8b1FyrpDQWjLtUMsddZ",
  "key19": "5ZUZN7DR56hdTWq9BjoQCVBUh8zYR6ENXrgDYYJsdU9nRz7fkUiuuR8PsaeuUQhy4iBNpspAUnWmv2MxnUS6UnUb",
  "key20": "2oHoysQ5rB9BNswcwmAHBSExL4sdtyvVLFa68nAAidVyrQLoKEExhaoS8FhaWaCp4ATdBFh1bGpNK4GWDSq9yhUr",
  "key21": "4ypMFQMrtzrK9DQRNqB64oKcmdfczktXS8xPwdVS9No47Mws6mabTHwK6V1Kb2Udy3WVVoMWn7FHfSz5EHktZzi2",
  "key22": "3UeVtmAGVKVCSZfkriwUNg1pBSyJ43YQFBEcDdKxAWNoCkjh9pKVj8Qnv1d6qcdwhbZt1rhhzwGBhbpWCrwHjVUS",
  "key23": "3fQMKjsbBnoMY4DU3rQBM6YCF3XKE2mATaYTfcdLFLyKaXS9nwe4HjuSfmBW7Uhit2NuKh2YZGGUvbLf653VaRKN",
  "key24": "5QD196hSKHB5ACYr3rzWxjU7uaL8jbNqMTMAJi1Khu7i9QREqGQjhaTFNuhLwgvcPJZTYnEuQStmMvEimuumzocs",
  "key25": "tDCoN5yipnTMKXcmT2ZY7ED8Dk331cJ9VQYBSmxHxwLrpfy2HvAsstK6Y5Kfm4edQqTAA3Ur2JyyPCzka1BvfFv",
  "key26": "4L7Mv3WTgmBmbrhY6oY5biwNkWYGR8NcxLUY95nSSUThACMz59rzJVAUBEYFNGsYwmr5peHZBr8oFj8o7c8YvQKh",
  "key27": "jkTrw6jzVyMqcJh3CRWB6jB6RKhpRZYo7XmS4jb56WxETeuFJn8VnyP1tL1bF5HbYZH3Wkv3BVHdFvLgFje7k6U",
  "key28": "2M9QFn8tt1JWt3CePVuwcQz2TUdPTH5ZjPvynQiKwawowvrGwJykvc1Mru1PyTMkFRskbtvhLBRAJke1tkcC9uSe",
  "key29": "3zqrRzcVGeQyxCxQqo9Mb3amrNTGdy3UsnXaMNRwhU3AHHPs4V73ZPsWzBNqc488furrxqcr5zCFtWz7x4rEf4oo",
  "key30": "53SauSdoTsAMSnHbi29eXkPMkWE8Cfn2eLLdBHMtQxz3wh1sAmZpZJrMc7THBqqjwb9drqGZJysKJYiQzgwm8PFn",
  "key31": "7BzR2JvM8VSSN8LnL2Sjsyp2RjgE2TsPyEij9DzbU56coWRgURY82VjWgxtutDMLACsYtZognQ2hTir7iTuKqvn",
  "key32": "4vqbnQz5QBVWXUpNxx6z9HsTMwBkPb7msZGwXfSy48tM4ekiPs4gBwrvb77pjfC65KLQtzmuKiWFZAvyuFehtUYX",
  "key33": "3TazGR8zc3fkvWTqLY95TzP3gsPyDLhGLog28sb9GFGmDU7eC7wqnoiV4YrTA2iiAnGwSSVRJqt1tLTqwR9tgiCf"
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
