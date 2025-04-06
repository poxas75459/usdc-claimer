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
    "25ankhSzUQyXUEt1ax6TtKqPMm7X3HvZpE8Ho7vQZCvrkjyaeQi9N3THfj95NuZuS36w8LCWn5sKykHPfXobrj8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PSLiZVcrnC8Du6P74cfMdTDd3hHJhPWj5kPwgwPizgELHZM5H6J1q4Sg2np8iwpBWx4wRgKzyJMNemAfrSGhmVs",
  "key1": "53JTNoWxZjydXyZyt86UxS8DtZ7C35n5Lq5wSTyD17R2jvSpx9QND3T4fTGusbLHnccx7q3spMSXzneqfzngJUDS",
  "key2": "3j8tAi3WWoQu6ehHjJCduz4JEheZ53BoA4tjmqARxTgCFwPVPTfA9XJsh59pGjuiBtR7T9WzPZA78pEEJ6jEUQLd",
  "key3": "4Tso6rQeNSDoAvQxrRfMyeh5VqCCmge7YGNkRcpYdpDvHkHtzbETPCHQCjTq4EqKpCpPa9CgVP1MkKEWwxv1Krta",
  "key4": "3uRseeGRNyqGHFHy17e2NYaAwKUtj5FUCK7B7NtCsEx8nn5GNNFtV7emsfZAGjSCs1j4iG5cenixiYYi8vn8DsSf",
  "key5": "2KPJoEGkw4GRcJi63cRkjTsBsqZUpgBUqiNGHYWSUCJscTKYb7v9Ti3EGX6AZGTxGctRanHGwvRQ2JuxiVCP4oPK",
  "key6": "4VXY84XpyaiwCGBL6mCm5Q5NjUaY5HGkNdQUdNPMC3b44hPzSxuX3wnnVWeQUNKHMjnJnUsiU5HAShE7nJ9jPG7S",
  "key7": "2twspJUBL4S4z63nwQci3vAbyQGLNQ3YGQ9P2eNHHGPrRS4ugdyxegCei7xFtV3bcFVdJfYUHuRXKdFcvazJhfof",
  "key8": "3mQQoWNm3U8jyQF8wZGtENcM7kp4aF8YhTQC78rH6MDjDEtmvi9BZXSgdx7DmPJfZWEjFV6Kv77EX813qpiBBEsQ",
  "key9": "2MiyRxRbNWQSpFdMreoTKVsBm88FED2miU8kgsBagF266EG5h6d4e2SLuwT31dNCMJ8CVscMaTteNZwF7fdgFSTR",
  "key10": "46hDmirMirWtBCyKD2Yx5qLYBEK3XMXhNSbegkqq7RFSfEuAhfxeX1KcyrgW9BW8LyH3YGhuBwtzq9YghCxrZuWz",
  "key11": "nCj7PjPBYwFLGuzpowfTQQnfUpunV3HkzuusnCC31upRvh9S9vNEQ3bo4Vx1j6BHVXhdzfHRtsRoyPNLud5zzHR",
  "key12": "5gH7z19CYzavWxVAvutiAndDEmwj8eQTEEj9GZCyb4dHxtnhbzv7zZngac2TnPdKuBvWRwpHiSiaMujYGRnWVyks",
  "key13": "J2RUEA3LJMDNRqN9bg5VJWxSWMS6a54XkYguZo9kDwNf2kRzAeG97BJZXZ9m5E4bkQGF3wnbhTTMH4TfdBqRJzj",
  "key14": "3Lz7kxcEEiurDV9tmQPKqHtL8jdhBrTobJVnPCXnG5esMfoVoG4VAuTRmYR2DD9Uz4wxYuPPhb3vi6rriTnCkFHr",
  "key15": "2AVuBpYrPQboPvpWET3ejhk8n1vBYvTf3mPze1CG4ZZeNdyheUvqb2baw7Ho1CwhtAfREgULYDpGYdKpTAwARUkZ",
  "key16": "DcCBY3AVxNUWc3FWWckSVDAqjjSMxt9gW4gAVUGsYp2Wz8QVFtwoHBW1hnknKq3eeUnSqJ4KBwajXE85m5bbWkK",
  "key17": "59jobHREcqiEtLnFuKhrRqqTkQivz4xhzxFaudDg4BajfToDG7eCm8vaVCJMQoJatFWYHD4FsY51HCrT92m57CUi",
  "key18": "3DVbpygM44KCxmJTmQi9qPnA3auui3rmBCvkM8FSuuuJUninJbpu9jL7qoW7SzMkVFTd6CeH5TFdhd3F9kwCEXWq",
  "key19": "4axdFZ1U9xEMYta7HDbGTbvREPEKRyKRKTPxc9KL9NEegL74mmLv6uqWkGAN2PVYierkQXoKVLp3T2faqiFAxsX2",
  "key20": "H9CVpdmzFMUfXvpGz2LBYpNvRNXHqf6T7mxDJ6Rf6Rb5YTRhR7MXG9tkjgPdMArzAeXu5f2EhPG5zBcdSaMBDyU",
  "key21": "64ogz1bpxJPh2gTK4UQwH3MXNPDbxbu22siHk3ShP8qVjT6XkxcqwhrdhTA2qGBiynkdzu6bhLU6kMjkziRdwoVL",
  "key22": "2y1JNk5euZSoW21miCaTsABE4EfdiaAdxzwzyyi7arfoQNGWtzx2oZeUNBs5PofyBeVkrvuMsBShhycikcBMXBM7",
  "key23": "9xWcEPCSLiTbwdDaLudjRCumuCYtNm7iRE31tu1VNz9FijLposC1yYLkPS84DRSxiKd43sGotzY3EusuQxHMC3e",
  "key24": "43NdgZmwupPQb9e75ecYFr3F2HUmceDbKjb9HcpNNpFL6GGDuXpYSndMMX3MHB3CgNQzXuMHkHLGJ31eh3yDDtw6",
  "key25": "26bM8eBqSrxGXbCF2Ua5hTtYTnp3c2JcC45dqHmyp6SJErHZGTh1oFVSedKYpYoXqm3a2PhYP2JoZK7RrytC3Z6M",
  "key26": "61Y7HtufJMMZsCcgkSuQwewYVxgeZWrUEtRzdf1L9EMuToLwCmkwKZaUjhvTfR7EbkNWt3mB4fx1tJB1WYEfQW8d",
  "key27": "48nHbE519VZbm4kEGFDntWbXetcY9L6Ezm78Z2bfL8wHsD5qoM4H1bn864pjVsnn2KytcJ1nL43F88SiNDRKxhCZ",
  "key28": "5ah6MsGFaTkidW7nZiGHNckGijLVTucMgSDX2eqzcV8gJaEZ3w64sVqoNCnSCX8vsn82GerBSyR3iXthK73tRhJW",
  "key29": "2DVGugxMG1ZiWBe64F6TrF7uCdwS2bEdvU54fxwdiqCN1nSnnqmDaVAxYj92dh4k61J8bTJ7xiTgsBVycG1CULaD",
  "key30": "5umCSB7i4smLNczP2xhyMcQBzAy4mv4S5MDjYEAG92bdEgRpXUQqp95rbfksfua7dHunwJRTPUuzs3i8zWnz5V5m",
  "key31": "5u3jr7g1mEH9SWKcLP4SrPNd8xMhX5fgheQmKZSBphTn5joNYvn85Z5HwBRTKynVpinBnU12CBrVV1bKhdTbc3zM",
  "key32": "4a4k1FqUqdrgxHRNJhydm4z3wM7schZKaCxRpJQpPLC7DV9WkHsuWPbdnQLEZgVyE9nEkCAYXBeMq9WzqVgxk9mu",
  "key33": "5deo2KfTJrhyCQFfZukks4KNbY6J5DnpgH1a8fVkRBoaBsRuzwERpecaz5vSVSTkaKYUur9sSsxvkhizwLqV3kLN",
  "key34": "4SNXkmX4NGuN33kFxw1JYF2WVE4Kg5bDkNSvPbUiBP46AMZ26EvfMKcxZuDrtAM714WLpJSg2spfurp6MDrxdanS",
  "key35": "2EBPg4Cp22GvJchVEQMUCp1gB21Jj7KwUriKfhZXHLE2JbZesbwjPDy3X3NJQDJfnW95iAMgRX33wrBy8T1uhy48",
  "key36": "42XArRXLYXc2EEcsaVRg78AmGjXLinMAoZpSSEhuQT1uozdeUnHic1M4oaL5M2sBjgx2fVwhMrziGGXhp8jS6jdf"
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
