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
    "yLyyWkgAMcxs6yskcWhtim6dYP6PotP7heaV1LQahUr9xkcyKmJ2ifAj4aPCmdaEBcMAxh721guMzRsdqjmJuFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ZD6yZEAgjY62Wq8KEJu87tUSNUVtDakbGd5aRnktNxBp1PKJigtC8y1YZEjALXf7Ddx7Y888xKsQnmkcKZd1H1",
  "key1": "2wR9N5cX6amgvgsP7jv547wJg6LwdSNcQhXHJNQt3dk3gaTijEfupLZatyvouMjEvjDUVksXKof37agDiFpzNhbT",
  "key2": "2CRvUSM3xu3TNMUJR7D3knuU75KZ6XcFQhVLnbsUPoHfku2tT5xbGusaU5SLKGaYGCgSo6NMZa5ijjV2zcsuSWtf",
  "key3": "2xNhwvdjhzzSutcEwUaCbLZtMzGpNUN9rKKrT7MwSeqKdrSMyeViyUU7VU5B7kmPJCGKdsnqdUjkc6jvSLYJpgBf",
  "key4": "5BVQCGRaSM5PEAwjP6ruE6YZNrnNuCP3b1copqDmvv8ya1aa49P4sfP4v654huBkVbHyXtU948vxzqMtdjXBMBAu",
  "key5": "5GveUzKHiohYJr5sBQdA8eNHPSYS5fuDxU5qDjEG9UQemgnaQ4nr65S5kTidMVV9UKWNhg3Y6tMVZEgUEWANnQBw",
  "key6": "4Uy5xfCe2WXoDCWrKPGJvX6e1e5ng2TAbxPzGV2xXcxiqDuuHBnDQeJfDSfhauqDeDeF87zco4Z82rcHAWUNCzhG",
  "key7": "21xMBfdLVLNW86GfVuabKYEwe5ruG1sdC15GEb84GPFdL6F9yMqZSEqqydLknu4YYKzmcSgZaegLAgLZfQDCuN1z",
  "key8": "2Cadao7w5u7rcQud1mJBfokjvQq3qr5XvdiVEPpMHevQEzLYx1uVAySw24jtRXv17Xw8KCvjonhjByY7fBZanmW5",
  "key9": "3FviVGY7izBiCRJApgwbNeSYjvJkkfaL5o6mW5KNzbRPiZivdwstf1TS26JYFicecCcvUGuGmi1LnjBBd5jb6JdL",
  "key10": "4tuYshEDp3HTamX5Pg99czpGVp2qKfNyfWVNCNGchJitwGxV4YZwdY7HoMEYBvAT7bWeXhSqGdfcKA5PjA9T6LQd",
  "key11": "3x5mgAb9kNNonf47XqT6MZ9rsTzAjGpWowYhRi2BXz9NmxuaPv5yPAzJKvQXWxKPy5Bfy8SvZgAJjyygr6BjzdyB",
  "key12": "4vVVfK3KW5nfZBSCarmBnZ42QNMvgypuhsHnCxTMzDLC92gm6gPJMeyLUtVAXFQXzKFrGNrxMPgGpsDu8xabsAJF",
  "key13": "4aA7PBkUPsvBTBUbwBWLB1SiLNrv2Y6J2atNRfGBB6iLAM7egMRuBpUh8vHqgfPMzY6P4FFtXNNLLoqnxnA4TjPr",
  "key14": "dmeRwdyqaXxjF8FfKH4E5zuEMaacgb6CGQLZxtEieGwkvEgBaBvCB74dzGYtEFyLgAvbqe1Y3FL2NbEaowbknsS",
  "key15": "4ZwkYTbErt2RBUoQW2wFGihEgKBjc1yBhqV8uENcDNsaEdehhBfFhMMsH7dSAbFZYy4Y2nrJmmFrpaaAZ2kaoxxs",
  "key16": "3kG1eUWRoXUn7TzqKEBc5nJS78owA4jM3BAHDMC59rmGzU9c668SM4GmsNadgyyZgRZyxSL7g4onyT1ouNQhrdfp",
  "key17": "DZDZYEyfbpggAddMNsRCPNdfx3qm7f3XpzMD1SmYrnjJvhnAocgy8Ns3ZJ6i41Bx2wHn7XhhpNWXL165W3kY8sx",
  "key18": "5Y5ZWTUTftZgbsV5t9AmG8LEaoUqt92KGRMDGKCEKFhD1sSWvawuf4H5Ucptir7hVoVg5PNhW4js6AeWd8qLVh2W",
  "key19": "2geDhf3uDoVr1L5XXufwmJ9MmZDWY1uhQCioP9pZKgkedxasYyiTpPZA91k5JNDNf3EM54gSqHazHXxahsLMjJV2",
  "key20": "5nJtCeWFHQAGwKdDafhMu9g69wM8BMXmSaJTfeRZYvep9LGDo36GVtTz6AvCC9VMhwt69xRzooAsXq4zhdDfA2B3",
  "key21": "3ewVNAiBfQskeJurt5o6suxmKu4e3WeCYJ3LFnWxiPRztn2V92EfHV8q3mS94fKkbg9ABbAxdmV9o7oQ5iAe643q",
  "key22": "t9Gbfpo2RAyVXMKDTBCxdft28kWZ78A7Qxb38Lq28KPsjqGrV97GZgBHrd9GkaqTHZJdddpisqLvS1XTJLoPUBt",
  "key23": "46CPH14bxYTWxi277yAQTP4nXJeBjz8jmFKAZu8FaeGNjX3itWDvq16PgqeEwmEqD9BmeAcUo427kg7gBNLBp98",
  "key24": "4grxusVtxyCBMCnniL6m8AEU1E87HwuvQm7Qxng5gEmJ5kWh1qgVKhgfWVTdobpnBifn9BV2zenYGiE2Ti7kmecb",
  "key25": "oy9EjgUxXT4Zzh6v8TJeLvvUe7tduA1zjHVY2ekjXuVsTdvXFGmrRte1rD7VNDrsoxppu2He7rGpFykTq4axtPw",
  "key26": "5DuGkvAAupAEBRPssyMt9famWRKGa4ti5GGgLRjJ4hX4HCvohtyZfBeQWPJzUALoJ1UyawpZgo1t4LknUE2V87Dn",
  "key27": "432jDj9B9wLQ1yh9N4LkWyqfPzkEaZP4qSfwrcP7xSRp8bcR6mFkxUHcHFqxsGKEJeoqDK4a55JtQTku6gkjEdkN",
  "key28": "5bMDFDFnUXeW5EFvpMV5wVwyDFPhM5B4M3VPjY1uKPzef73X6GGEr4FY9K5vQUpbxhFtEF44G1yaWLkhHSxod8MB",
  "key29": "2RLUkfqbAJBGubj7wo5V3w6csaJZruATkto3sHQaaedodvhRfNtd6JmHapdJRovyrPbCEtfXfqoWR8Dj8VUgqWDM",
  "key30": "5uqQagm64nxQrEBieYejojhr2LGrvvWfoMu3UoroWp9s4LhEiAuFHxmvkca2Gn8u1VmX9oUHyaGGH6U8uruS3opq",
  "key31": "UneeEtkCWBnx4zEBjhb1V9H79bWdVYbnfQDm3CHUN2k8Qo19zxedCdXeZKbnwhNFxtka9zrpsXrchyB1kheLyph",
  "key32": "mqzdQAMCnyttv4iNnvRgdpbTpNAkPnEyob3iiwqrswACG6oVVPXxrGgKapwQSz5SR42tyzGghxL1YCFstvNTbCG",
  "key33": "8zSL8UNYWZ9UHKYggtBNyBseiLtSiQCPaRVKFAfgMqtBVznrVcvCrGqaVihwJq1dBL9dH2vsiCSkf131sfjjZnJ",
  "key34": "4w9UBksLRhhdpq8sFMiL93vX4B9CqKmLcGQWrCdeBKVPfHXjJLrzCWfSXHJjnhxwCb3BDJhFwpTGwmYtiftmt7xF",
  "key35": "5rwrqjqwZB1rJ7YfAkvoHGLjfaM8ijVydiLofgYk9SWtrfdyHxvfFYTzM8ZQpBhT1TGVgie4d4PNen3cZiPGgjvF",
  "key36": "26NWnfoQbuYcFKAp1cK3zVLQuniJKqiD9PcSDaCSZ6dng5w1jDtBF639thwVaxUriEBbugmyY8e72mMawXgQ2Y9w"
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
