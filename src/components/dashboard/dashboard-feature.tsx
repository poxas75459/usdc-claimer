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
    "2SwCRXb2finsXC8UggLa8CubdZJi5A64d4MTn96vtNJdQKJgzpQawztdGBxw5ZRD5QQynuoQZ9t3pKJzfa9FzCTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "trX6Ao14MeRLfCuj5S1SrEDQwiX89oMgdWQb17QktB8X4FRqEMv3LFFMnEFQhZ5m2rrYNWfu9h6uJZrhHdijBKM",
  "key1": "5Gd17YNqLNmN5SbvcAnT7QCYwhrHk6xZuEzXrjT86YVJrzQ7rAg3iJou8H4q4i43SGEugNw8V9U9JB6hqPP13u5v",
  "key2": "oLrDAjefycgvd8KfUvzmh9zYnDsDmT9SEHR1CzoedGXpqLNwXyzXX8XCMgjwCSNvVqPfFH9QTFjqyov4ymFcRay",
  "key3": "3FPKjjFGE27NaDo8iWfu5DdyjSnWtgF2Sk4EazxCy1p5jmdjVMzkFuejXSACTwiDi6cXfv6K6bXYJWpMUviFN5rc",
  "key4": "2L2nxEQXjqXnAQvUdRtLeDjNfxC5REnLHqetuYVn5mqCwGcUuTiYNnraQWn1cVcXnhJFPzc1uq3DrrzFN45ecHrP",
  "key5": "42eCigJLNsV8NjtNkryPvBEfX2axKz4rGcHvqJgaokRsLop3Kab6KD7gPQ6PazYPyeEDEgU9VCov1XX9km2jzago",
  "key6": "4sCxNbhKD6fxr1xCc1VigsHHgqRYb5PKGgxX2B1wo3PBsLLHs9rwRUeZmmi6Vnb2N6HUZveiBf8e1ZbEzJEKboR6",
  "key7": "2uh6vjwAeGzBNru7NjtCAc21FcE8Dq5YJzT9MrBi4EetsTKwG5agftCx4erR6bm1p2r8S611HGUBJxPsrU6s9Z8j",
  "key8": "3dyCsHS1Go7ioZQN5XXxA5yKgxFFHk3jG4jc5t2uUwTr2GRKsrCcJ8BQcF2qNs5nxvcSTeyXhb8q7ejpMhhHgntz",
  "key9": "G8dnXaYjVyH339TCAdeXfmst9wm2oxvrse4ko9PRi1Px83jmGZh6jbfajyrGs1XhBzYtkTaQzGv2KSwnLuTdPLq",
  "key10": "2hsNkve7D8oQWcECeGczaE2JCZQoKYeXFTLgu7oXv7R7dtdsw43u8esyfjCijBZ6f1pouBd1riLzpNZKKvxRddQ7",
  "key11": "2FCKVu6No9iMXHJ3M5QSVxFbiw3LkGZu9wwWV3uE7v9TcjCGE4ByLmLvPzXLnHqr6sLbg8m4x14MBpPV4Dmx74fF",
  "key12": "2MEMAD6t6JjzP21SSDYg4KFrkrcYnoJTgqSntuuu8RsZ973XJT23n47ifHvBZv1AquHE5YWYehjX1gjqdeLgKXqe",
  "key13": "5k3pFbFHF9znLyBkFupoy4raJBsefzc1WWa5GLAx5Y6umQksF1KQU8p7zndEJ1Um5d8CtSW9QPhhGQ8KAV9TwKje",
  "key14": "4CC1AzFJZvN7AS8FUrWiDufW22jVs1yuFDR4VjPvHjZSoAY67LB5ZUsvqam3SGW8vnER1nVTbiDS9CwPciDqdHyR",
  "key15": "5hFGzTszgDCmJwpEQ4PzGh7NWzB3DT1qexC3UPocGzSHruj7zu5UUvQDJFKJSqRZffyXoWtfyDy3WRHvRqdDZU6Y",
  "key16": "4nYfYQASnTt4Zh8ynvuLa6sCwfLMDjnKFXxFj1D34nFbUmiJcvhAsk93Hycn87AQXytczmzmuMeA52u6BSHTtCwH",
  "key17": "5pNcrNS3thNUASBP4QqRjkhnQrnwsXutT1Qcn9D67XKDbVQXSw4grVeYJBjCiKdMcFNZciisT6KBGwX2j8aMZRD8",
  "key18": "5vVDMAyPyVaQ4fRZnav1U1BmdFxeDZjvuWQrqUvLXVyR9fnPfekKCo5uCmZZC4n9uyoy1iGWUT4WnztPYXnKHbnq",
  "key19": "35hbmzyAoq2PUVkcBXYVUWE7FcsvoaCduHesWZaMSxFdght2WQxUnFaESDc2fiG2Te99H3FaQ1gLuZwdGDZ8utGy",
  "key20": "5SirE8Jrqaqdcc5uQrdWXEyzzdmuBH2cwTwEsVmT1HmnXttUu8zrU3hbuNfzHQWHwbxx7dUohzYaEai7iF9HCDWB",
  "key21": "3j9ycdkYTcBNyc8bWQN9VzsgzYacBGjNXdxZ1eDXoBxZpLZcmjZb4cY2o3hVQaabhB2GHvnYer5cx9MdmYXnZhQe",
  "key22": "3aZ3tq7Q4s6Bks9q4Qk3trAR57DMwterGmUMwvDNpfWeSKcfLheGsacgqgN8zYDqdTnj985zBpQgU5TPeyPZTfW6",
  "key23": "o1cpZXz4EPDncyFLSpz39uPushUtj7ELZWKZGTSaB9s73zE79MbrWzMCdc1v2mCVC5x1RJbDGdECdDSa9kQ7oic",
  "key24": "4MQMLLwAMRsJxswtATdCXo9XXv4drhtnFc4Sn5EDEzrzQuobBMG2MvEp4Ru461fgiajpgbrvCkQ5KCTu3fAN3gHk",
  "key25": "4HJXbjNVXwjCPsurYcnTcrF8PWmgUTGEDfWmZB8M2YpfRg3a5fcD8pCKTC485MMmngme1jb6CaMx3BdPGDfqeXk7",
  "key26": "4xhajntCCCn11572x7Vch9UjLj3GSaCMsaWaUtM3UXt36FL1pKTYybqVgNKgyGoWCTZHJoYNZQzD59YM2MQg3a73",
  "key27": "3Xr6BSKzSY2ZKGo9NgdWc5Us6Y2qJSLPNmDg5zP7dYyWLregmjdmhVYJ8KdgGuHmufWpiDimowwiHL9urByMTLzf",
  "key28": "4u1qG2KuokCimygQVLZSD5mpyPgFduQqAP7us7H2rEP6udmhV186BnEXGSxjzUXy8dEFMCvNo7Kfo6sYGVokrycE",
  "key29": "4C5o5wFCpnWzE22ASyZ4DT5j8nFaUTsb9rLvbRij6hwPRCAGppQibRxA7wz9x1hkLhBnf5Zzvo6mPMHrMegx8myx",
  "key30": "HT8z1WZtY9Fx2hqFZmehK3T7t7JoGNd8qtkiefAzHEwTW69PqM9Vn9JAQVQqBRpCSHiNRqWwk7KEKWaUvUpENuR",
  "key31": "3EBHUSwhEkbbqS5qvFZPFHX3S1drR8LD6NshFEFJu6DdLiiC2wPRoinTQFiH4cPTGfxByh7NMVhszmm8TKkhjfsf",
  "key32": "36xqqqXrq8KJDBR7kFeSBza17JgW1SSdkg3USjyjwwtiJca2TcKrNp1FCRn7EVoZ7RUeSpYensMkmmC7tmBMWV3u",
  "key33": "2QbrwoHiMPBahCCP7VfLcnpbWAb6nRudCumUaJtHKZYNuYzBmF3jtTaQ4ChWMNJZhmTfYo5zpGpVpGSvw2qjMmbg",
  "key34": "3b4PZ94U2P1hLfkL9nmDKvVdkAMQb3fuJZ94U3TqQUaGpfees49VFD39dKPCoXhQQVbmBR51jZ1GNthVdc3XdeVE",
  "key35": "3c2x6oBNrN44HmZFxy2angb6bLJGe6175eZU5zAuYmyipgu4eAiTFmFw1BRAbQMUtHp2JF2bd6cAU1gXRzXZh6CZ",
  "key36": "3JCPtGga7XuMk7SoVjp1Rj1E91haGW6YBTpRbrx6hPiDgz77TALsFXGQ4gMbBVAagxYcX46TrQePxfsVsoLHwrPv",
  "key37": "ddS6aiT4TPcHwU1dw2bgN8tbeamAr7A9phiN3qF3YDuiovVWSg3UPUEqcZ9YShnbpFsLXTbWPFcCFUSq6YKtYhY",
  "key38": "2t2b4N53DbPY4WcSgykqZ7Z921ngry5ZnhqF9uTBv7pwXuAFoJiUznjPovTfXuLf9p5YqCpUwdjep4QHRNmTakSB",
  "key39": "4QUnEyoDn4BDXHAYD5cXCNVsfXSH3v5zGWjRAfrLG44xGJjMXJnVGFWh5DDFowvwmDD5jgMKU64gCC8J43fVNx4Y",
  "key40": "XHenNPixhhckSSPSpHwhhQntTowq5SuJ1cHS49fvic8TxipytgXcxEurNub1wHBqq1SsCLFgwMqVg6C85icaEGp",
  "key41": "576nxiZrUsJMcxwGhMFaZn7AWGEqkfn5wiwFppwgt58UvZY4HJoxGdC3oaKMLVUAYNukfeM2ry6DjxcVc9BPFs7p",
  "key42": "31UnR1Bg1488p4qAjJvr3RmQdpVpaSkJY3dAKCaPApbHMLMJsBgRDGQVAfoZw3E671A14nFCXd1rnrberJHMuMaw",
  "key43": "29q3SSHVQ3SzM1PVcfJ86GyL96ajDVaznvpymhWqMhbRUMQHzkCsJQwfGQyXdybK9MmtL4kdM8mkXX3i71z8DABY"
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
