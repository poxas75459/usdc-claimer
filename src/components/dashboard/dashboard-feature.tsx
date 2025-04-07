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
    "5ckyQnrE7BuD3x9RvVwT3jpktRxxjcKG9NiE2XR3yFXGdCfX2FkhoN2AnDqSnHBesJysyJNACaYEA7eDsnRVgSrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vbUNuwjruDdarU8ZTbGU26h3sDnTzGxovEX3GD7nY66qvUDiAomvikqzKQ4a2v6ukpgL74cuGXe8NJWFL3QwrNo",
  "key1": "5cDbvMqsNyP3SGnJttrVocJhU5zDeLga2fBkVXQna8pY8rTujMAuyt7jpVJDeb2qE2yeBNF4qs3M9MGkvFehv9Mi",
  "key2": "4DyTgb1xCTB1Uu9aS11fWpa31mB2bv2AtWqJ4LFVjchECJEDorB8QRNeuJCLLSTWrTv7A5MPHZ4ec4tEn9xoH6AM",
  "key3": "Dd8TFCv6PpKRodng9UCUkFyrw94rdimUkYqmvPsgXMLT4sewf9e3Tm4f5zP1aUK7Gr8ZVYVqMaBACW748PgQmwD",
  "key4": "mrF6vv2nqDMpUHtuRC3YFfDvBLjSmNi7cNaa7EmGTzrqAgrjA2nua4appfptqg2LZ9n8hxpssh3NievxjxKooSN",
  "key5": "39wToh2HL6vsMnbw7gC4Hzwj31bMeAjjho9LKj9ugtz7E4EZD8dxX84rXSUdVhY1u3yQv3XbC1uQTXSbJk74i7hf",
  "key6": "42ezkerxjJAPdsfMApwWYEep1Vq6hd9jqEdyo9FRWv3o1K8G7R4mgnVVqWvpYo44HNGhQ7N2UMwgk6dK5ZHXBtyk",
  "key7": "5qNyU9svaoCfMqJhY1Nw2xruryBFyoPFLakFdsfoBHiXSDKZreYbdX655q3ZufvWQ8TSQDRiTvsYHqdjHaxLCkDp",
  "key8": "kpDZu4z1jKJYmNC5K7v3hgu44WdscM9ZCcTRDZdxAqA1VKgcvZjvSn2PpoDwogbHk9A333AZM5EUgvNFCKFxhhk",
  "key9": "5Bfz973rLUprsv39SEPSLnVnTEqpW4TTq28VmEPmCvAUAV1kXsdkDGp5DHPDjc4W8hony5kicCqHLbN8BBYgFnxz",
  "key10": "rRDrAjJQKNSqEk1mPdhQMbvxzqtGToeSxwHCPQMwfab83HEcrZYLnXYynhHW1x2LPDVQft8igbKGGudpV17J9t6",
  "key11": "2nkub77VbFU51eBY4tcniWGi9a7T97HcrStPkKnc6ue26xofQicV9VyQH7rZLF3QZGagND8gfc1EuSkPsVTvBHpx",
  "key12": "52SAG6CvCsgsF7SBEa8xZd6DWSVcvzqUiC9iKSuvw2o1rXMpqd9dewjNhSDEkgCJLmenbKtvW7HpyZMTG7qYFzCW",
  "key13": "HVFUgJEyTsZQ97v7tJL58mLzwJMWA4L1do3eLsDyJvpAdWBbsGmo7CDduyQjHPeSe3QXymRQmmcNiaz7YiaxBxi",
  "key14": "bSyWReWHM3AKN8HpJwr5DW9fME99xyJWoJ577VF6uAKbZQM83qVSPegjFypnNG5y8MUy6xB5bY4YDENjs5mWwsc",
  "key15": "2zxvvazvYqssAttyR5od6tEDdfm3EgazwHHKPPnoSgPChv6xF8dp1347iLtedYKKFCAd9WAJatgzjMmMJE2X9Mxw",
  "key16": "3P2qfjpXjKZJX42oyY8mcuMp1YLsGj78zhdJCJ1Ghj98sRGM7271zjSvnbSAuhTeRDcLvs7ZhkpjuyZUnNkSFhio",
  "key17": "s3oCJFRLpysouy6V4yEVc5VDJCKg6JJ56Dh28UhDgYWHCyb3gnqHQr5BVSQ1QZAJ3QckBtaSqQWQnswkHdwbnRL",
  "key18": "62GHRvqYaLGjdU25whFAE29kcjLeC3QQgT4nZtJ2jSeJrdqSF8jDQg8JFiqAhBCq17JZsxpcdkA2agb2waZz1ptd",
  "key19": "24JnnRQxDzJnMe4HT6jAHmCcZArPtko2zQkAgZJHoKAm8ej1vqBjPESUDAyQ8MEe3yCpEVA2H8Tooi9Pe75WAfYz",
  "key20": "3Zyyj1hcpuHnEchkiLw99xY7Q8XZ3QQMKDSqbSq6yrEyfb39H2jauLbjwyUGK5bBW8CQNigQo4Be5zLGDGovzyYS",
  "key21": "2EqUi6vHwZccgtzETHDeCTxByhj5df9FqecYjnYyttck6eTMoMfArZ9J6ezDRKxDBb5of4nMLxyiFwhxbeeDvZxv",
  "key22": "5BpsdXKZTmFt1hVCc13m5ZHfL9Zb8tykJ5BcwHFSn8pttCTDSer95NLEFVFGGDZiWLBPUpoGJzVj2zHSUt6uXayD",
  "key23": "4dWaiSC6Am1pQneDsuqwbkswA2NSGrKEC2223aAVcvKdhZSeNTjVSyQuHK3T57vY5eNRfGz3itFvtQGrb9FnNixt",
  "key24": "7mBWjGQNK4iCpENQWPgNjkNUf1haCuYTUdMHLmGJfzeVNuym5YkhZhUtSHnMYYw55coUuxxhxLZBsMJ4oxCFPEj",
  "key25": "A57gho54uvUzX9Eaic94ekkHnBqQCR5k6KP4yp1KXFjs6qVogv8qJwLWxkqGkHfxa5G6BtQcBCvHERHEhG5dmAd",
  "key26": "54HBXB3N4niUJ2LExdyxvWPzdauFs2FympgqRXswxQSaXhdj4yt2uvjcALdfEuMTo3qYjpyiWZ2tKoNtuTH33EAP",
  "key27": "ggzqJoeGcS9i8Vrpv1qryAudigEiVkP1cG3NuMksx8U6CNgtz6TU5W4vb38tbvkJ5NuGrcrrGQvRwj2gqmsFfUa",
  "key28": "34MaSGSrsgJ6g1PhTUNUqa5hc1NySTY9UJ9T829S2ZHpxczwapxEoW75a8BGotfa3yZ2UcSG7YVeWf1eQm8A5UhM",
  "key29": "91XTrwLVJ37YeXVym47ip1tnN1WToUM8wUyexrhYW8VRdS7jZKPjrgoSxz22MCMBFPXXDT6KntbdMBAYzwwUrDY",
  "key30": "MyqvJryBYj9dpdr9mGMZTgCdVZpaZB3afdgSLGQPgzhuy39Z16g3gVb9ijFBzf8gWokzW4iL3ifPP9huKf21s2o",
  "key31": "3MJG5cGGogJUb5VHSa97VcDoE963k8H5kxSdojMygPbBfqCmxLjuPjkBWdcRtDXsGWNcDzGrK5ZoDPVwaC7432iP",
  "key32": "48MkDLwXSybjZabH1VgiiTkZiYJYQsDzNyh1hRV5En5cZ26Evd6EbsGa2WQ8z4zoVMRgCDMRpoWa4SAhNJhNBBUb",
  "key33": "3xFeLUhzZHNvjRezRi4jqa3BusT2ZC1QH8ynCQn7oQ3ro2BjgmUhR9eY1j8DDsAx4iZ7ZKzdtrGeHuJa1rKnxr9e",
  "key34": "zQFGEM1i4i4RjXq1Vp5Waue9Pp1JpG5piNgAj5VY8DYAJo9A36rNvSq1J11rxWkqC9rsYf5ujAA2QJcD74Z1YCd",
  "key35": "3fKTuYbHwCAnnR8TjsghUZbgHK6dWR7PryDrGWyhPScPG7ZrvBj7TKjRCXGyGTTE4TQtXTwuLCCA7wYRoHFy4DYn",
  "key36": "Z7oxYnFPwALXEdnqZdkboQTsGcc86inLmrinwkaXPghim8KkTMUF9Zp8uroyoceaMG1Gur3kjE6wk6yiwFewiEj",
  "key37": "3ijsjUMKtH6AmxHutHJVUU5D2pmiS9HjAo9ZQpjaRvBmog5avrGG1EGp5cRyZo1CtE4LNgiQw31HLhjWLVg5dsBh",
  "key38": "2y3XvjYKjTjigXAcoiVGjdTdKMvvP3ENDgfwpsb3iYmXnsVreHLkfTiJSvEDT2wj6bJqVFVzL2JTnve7G47gNRXp",
  "key39": "32bH7fuCpdYswCShpmDDc9KSxUNKy5sz5F3qVGyxabjEatJDjDsNujfbEwqvdSZLfCgr2MSwvmPGVG3D7tjXCdLT",
  "key40": "KX4ytoeKFUJEbkV7VzifVbHzZnV5T2iQHY4XiNpnYt23Ug3eBg7UfQ8gehzhpiRXrmx2zjXuzY5cwsuwzExV8EW",
  "key41": "3SgSAQpej3RmxRTYB1yGas2GGMGyCc78xj7kB27wFncbXUM1hwdijkHJhtUSG5oKksvT6iJrzTBgZzwnCRSj8Geb",
  "key42": "5d9i5aLF3kbZ373eZNAugewifoPgbvwKhMpfKCauApz5jzG2UvuLUCvvAmE4P1ivssbGnsFHUqmeZHq6kf9BsNsn"
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
