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
    "43vtoH5XvWru6V6LDATxbcFEkyXrvKQqhM5XQh8X2AeL4SFHUdKZ58b1nNinGoLuf3bbsXu9dKYCFyKUWcCY1WTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RAZNiBPh2NWpZ6TdAf35byt7XDezDBgXbq6gWEeHULVrky2fT8Feg19S4NNv4psKJXycEWjBUm2JrL9Q6x1oMne",
  "key1": "5KA3UYg4AWTyfHzSb7exBbtghJqq2QLFvmQkPYYw5AiFLyFaDWcUR7QT45xe3No6xGRQCTAzywupEhvHKC3Zgzd",
  "key2": "2ugZ7o55kuD9M3sshPAXzCApiBuYm9ZMrmtnVY8Eby1q3Z8DY9qu84bu41Y94Lvxc7Vz9LLskfufNx4tJPGsvhZD",
  "key3": "3ovF3BN5bQ4VaHkB2PqaAWFGVYFENDCAfpwEr9ZUts88ny76cSm6rZee1LCkJACi8DMUBqdMnpsiu6RDqfuLHejZ",
  "key4": "SrtdPo5iXrRohwTgr8MBNM1FyyoevmbJGm43yhqJQjxJr6rTCBZ2ev7AsKcgvBpUQwSxY3Ztj6yjhG5tusjTMme",
  "key5": "49HRnjyRryEFaXnZdr3rfwEEphb2dGf9YLfZftQbZSo6QMMfjM4rCJ58E2j2xvGANpLRT2Ymbk9STjKJAKVeASDa",
  "key6": "4UzJGGTzB68J9WSJf7P4y17uafk9Dt3yRCbFZSFhw6euTdqEMTcQ7rVpjC8YTYa4wRBdZPewJa2VKh68qjpiR8Zi",
  "key7": "623P9o3BAfKphKHNL2cwjitYF1XoE74afTqQbr96hX9Hz9jBv7v97TEydNcHAERtUkhKkLKD97Cd8ctrpdcu5bLe",
  "key8": "5QuP4c9yXp1cvyeYLRAhXSfMRuEfwqH423ezKeUa8ARzrk3ma7U6WRCQDzbE33x9SyJcowYWTvpCdRRhPrcT9uha",
  "key9": "2fztTKF9QsbGeT4dHEkT1jZsanLXxaezahRy6Bj9uxRMAkGZE8aajV6v7mu1FYu3kvBYLJ1sT23rqErD6RRQSRvW",
  "key10": "5HFQkq3YXZvw2h87w67N73CHNH5QNcAmxSzzy77nxQSytvehyYnSx5egVnfqXcn25HqeTg6Zr8LYgwp4Lvg8QpBd",
  "key11": "2NaQp3RdNkBQ5Jpo67F35VZ9YaNgDx5LpxfUxefUdVXZEQ6qtH4XHu1VqaoAy3yZckTrfrmbw9rNDkdRu7u5t3bc",
  "key12": "5Cvsqhm3j5DkakdNKkAyupwrfrwC7omkCeEUrGuVWezPgpnnrB9qwYQKwvPdsCbwBGdBJDjZATaD1ZwiNL64yUnx",
  "key13": "U5MUT2W5R52oQ7GxG4yGrg9phgNGqxjQGLci9NVSdpv6QuiqUTeoRy5LkVqv27qNa1uuQKHf3uU6mNk6Z86pxMT",
  "key14": "TWYySM4h81KEVUVCfvYjkn5MT9DMFZfDnPkjhcJqCrCCNhDyFzDxCmwDPh8uZkh2nGyt8qmcq5hyPnKcbbXx4gc",
  "key15": "5NyEDyDzRhiV9W1FfkaCRn8k5Z9j8bCKXgYNBbtt8Zsid9qES93YBXZntf5q3Y5rkn7a21vPB8cb1nqP5igeCVqE",
  "key16": "2iWjGUefEHY5QqgBrGLiSy2k8Y2PZwdikek3T5ReHDiZ9zcmW3cJ9iaAjARuMzi4NWwLJgjFKk4drnHHRzB7kvHZ",
  "key17": "Lg3U3NSXGQWP3yu9qRwVhgju9iL6RUGACwYgVHaPkmKHd7d34D851U7iRdMDngRcfEHP24Rzr4WAYpsU3PycnBV",
  "key18": "3YLDZZoahxnGiJqu6PgreKhjVFVHPb1Dcmnrbbx7BL93g5gXL2KKm4YQW1AaQi1GSbrJXV96Ve7QNvML2hY68Dyt",
  "key19": "5nRdpyWdauxhY5FP9KYLvsfzw8xBgJRH9Pa74XN1qw7HhfoKJ94YVT45AucsXibs7ifvxEwHvzRrfdVJphDoAt3L",
  "key20": "3VHrwD44pgfVDbTWSW9kh98mCoBtzPZHLymd2tzXNR378n5CB9W4kBgX6EZ5jDMfK3NR9zUrF2b2S1DSDYfuH56i",
  "key21": "3QWBC9cxfDKV7RKUQFbDXcfhXLKwt1NPRf9JGn9TBXzpGn8GjPcQxttmEZ9opBvXtTzEpeFCy4yV6STbrVKpc5ai",
  "key22": "3P6A5WpKQG9dLSFTCcCKr9EFw1MppJCuAJUbCnPYPpLMnZS2pPwPxwmk43frEhFnguJ2gf2ZnZ5JdU5dYRwzjorS",
  "key23": "27HoHabqbD4r6ctHYf21uqnmaKpvfVzmwznPhL1B1DFiE8YoBfDt7758Q6Kxnr6ozEYJpySD7ccRybwouW7KxLt1",
  "key24": "3NtbcU3V8Vsh9UkxuJ3thMg5ct8uhQfTLKqvgcPbL4rm7zPNC8y8MsoJAXNqJHdi4ufj1c7oBezzyw2pfKWyGSgm",
  "key25": "38sa8HURohN411SF8jcaJdj7JxBt5tgiAymdGWf7EdXDv8YJwQxndJmEbZYDgNUyHkFiRKvpjmLbf9kL7JE73HZ7",
  "key26": "23cU9BXBHd3BCPtBbCh1zEGMQ2CGVu2vXHS6jvZjRBq9rwDmV9zANbsG69smhhi7o5Esi5Apr4EhYz5jpZLnRfnH",
  "key27": "21XXfTkxBf4vpTHRZrL2zuM4PkcQs3meoa53mQb5444qXPsP9NDbETijKRgEBVnCQTH5pfJRPrMZ9evEzFkYMi13",
  "key28": "5f336fuWdqWuTaJ2jt2XG3Q3JtJWXHTqrnHR5BhrDfSb5Smo9jtzZP9aa1UKzM5rU2WvZH8FTUqtPszfj6r1NJzW",
  "key29": "2sEWA5hrAkgpRhLPmYUu6sZaE4djm5ZDx8ZmKxraiYBXA6px7ynahkc6NPLrbkFbksGo6GU4dJrvN3KuQW3f11B",
  "key30": "5q6GSj9m5RErqHQUZZBX1GSgyTJEApbHSAaazy6E8SeH8b9VqD2vqvH8fpBUiWub6vbPe41EGq91qQ929BRnbEat",
  "key31": "4upfierNo1AoaFcYbggf2bYCVgLkdUSaTZHkXshJawgqY319oZBoeV2PonXRZSexC9HXPyU97FmeHRyGQCirA7gR",
  "key32": "5StReKTNobAnH6gFct4bmFK3tMNM9b2nPXwYHSGD6Lz8B11YthcRKgqboQ9k58LHounPzZW3QMvHEhYbxs8AZdRH",
  "key33": "37xRQvFJTVYrgBJ1BmAxjyDPos6bAYTENun95E13ahNNE1kzB8qjTN7XMCXEE868SKffZQWXNg5tz6UbRHwjNidF",
  "key34": "RaxmSPZtz7PX7w1buyWACsBywnvpY2QjGMDyjZqVy9tgandZ5VthHeTPP3gBNGXDzhReWBHb2KF4kH6voys7ejN",
  "key35": "54zTEpE9Fq12Vkto5bcHUA5F2VZkUtAgSMGbjhAWGcZcTxTggSiGUNHnhGBzge4dXusRne6y4spiKVwMpxxQ8S1D",
  "key36": "QWBWH2tGmxhXpm53vWBzT9fLmQxnj6xQcY3ShrR9zxfHVnEX4zDnCyHsgZ3E13TEMHFWkvaZyvxjTtmVk8pvFwM",
  "key37": "opb9TJniGZdkZ4DijmsjQtFgGGQVyQX1B44ZZYEydBqfmr9Lcg6ojnsezRuwhBopc7XFrQRVsVFMTazyzf2uBn4",
  "key38": "57BaRFLLvqgXEGcsyratwrpZFomaU33UQwECXzerL1ftNNQPfBxHKardaTgcTBUCB3gWuvcHHCMvzNN2B2S3QvT1",
  "key39": "3CPqhjqSNA9p951DTsPn6U61599nwFaxbQP8vJuSq6GeA1qVrJ8x1Tv5ULUZG1eBAMEopGUNNxjCeti6J5J47KpL",
  "key40": "KiFHKGZdcNfBthDR8k2yJfFSHxadTJqGSAL5CYDHdTz39DCskhVgJuTF6UKU9CeCWpBLpT3b5PXSKfrvKBgxfvE",
  "key41": "X8sgtDS8TQesh4exbAaZ3eZJPP2wuyb2BK92Ue2LpeCEmUekkQ8n2wfwGZgM87Hj2LkDSg1taGsWXWM7BdZ6dwE",
  "key42": "2kWQKJRNcpsr7Mys1nmz5WXnBi8zpPw4zF5MPV6NqfgGse5qUbo9cTcpJC6fGuaxLR5tFduswCJMuUcV7tVvVNJy",
  "key43": "3oMokMr8kNqyDUuokrGn93uBMsmvJyTcWA1WWFnTSPVyWDQ6a8KWBrmAH1DicJphvNmhYdLftsyZHw9x8oTvkpaF"
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
