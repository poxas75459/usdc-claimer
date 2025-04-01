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
    "5BJgtU6sAtynH3tRpT75mzx4gDw24Z8VsMjX9YvRe8njaWurtD6yhdaRNE7psS7jLSyTRKPY85D8svDFF6NA1rFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QoKu8TcXUyYgMLjMtCJSKFxw5WDyY32LGe8oDCNd92RcLEpVsQ3XHFFs7CvxCU35JUUCXgkWMrTh8B6mFTRoJYz",
  "key1": "CYwB1LyBDzHQBsQqA53mJxCL2QB7LTS2BfUmmrXVwdNAYmbjjkJgDGcohjSV6ZYeKqY1fLzVLSWydX6iM7oTMmy",
  "key2": "4hrJs94DRXgFFiKjAQ2YRqVrqVq5CWxbGzMZCTaafXQMQf5KWMPKP5UGWT4QDUDmS7X5RVvdvGjhwa8xz1LHHaa2",
  "key3": "5nmjxyhxCPkcWzmXFC58YyeJACqNJjDAbxUQ2pJ2MacB9ypAexxheGz4iW7CneuMjMjyC3ZmVGRYyw2yXt1K3PAx",
  "key4": "ReFW4Zbq7SAMBJyrZMaDR57Jed5Y7miAbiZdVcGawPiRpiR4TnUDmo8HaXYUgNxAsyiD5pCfzHuLxExxvnEvVNL",
  "key5": "2a57ufdbQBWk4midUsyjm3fNQWkSSnxnMmAhhzLgTVUztcxFkpSrTd25RNBPF39JvrPZjTE3YZfRycWnDSKjGiUY",
  "key6": "4X2KNnXkhXbeddkp5csMQJEEuL3kqvdCafCNCg4KWuvpfVQnwRZkknKhw3ynZwoGtjUdqaC8DrffxE73tHCKMvV",
  "key7": "1dsrJRtErzKpfhHzJhifTNEFHcBdXagGou5CJHoK4BAVVA7rXkuoogD38NvsdHvoFqiW1hnMjfBTYKgGDWgAmme",
  "key8": "5SQHRLQfzAsexF6hn2zHaASZn9KyWrtmcPmcTL1sLFFP6MexdbDH6ZD3PjmFtSyzQDWdP5hy1KyFLnubWhyLxJx8",
  "key9": "4eizVycH2yefKwrkdfVHLjCtiVTmBWjRvu7UGPvrUkBJ17sNCpNUP676dgBTgkkQVbuFMYN59537WLJQCaxeVgaG",
  "key10": "29CLyHJbzKVXXBBpiTLZ8Gcgyp963kCDWE3mKNNqCpbMXKhoCbLPeuRBSeRJtYtAJbAvhY7M1j6vLEjpQeyztCMK",
  "key11": "5SsJ7jgaB8gUhgrFt8dypdP1MBkXVdSZ6P95LQiw5DQbP7i4V5vDhq1LnQYVCtJVhJ1DBFXfHga5gddDeDSbexzD",
  "key12": "2h6SeCXp454BpombCLLAe5HtMeUXvkWyxD7MG2e9d943KD1xYMDxkZDgRLm9qxPrYg2W31eyZcoc6m6PQS6eWB7r",
  "key13": "uE8iCHEAVUnrKAZibrk2deNHKCi5cRd3geYZiLs5CRQ14CSGTeGEd6Nwwz5FDEHDSmLX4fi8Kxb6KJXo3KpQhsL",
  "key14": "3n9QAz1eQgFZtHr25yckZpfN9nVU2QEDu4pQWuU9dbq7S1gJC9o1XMdZ4BfrdCoMzgaRNbxTfuA2mTY2zMRVLcMZ",
  "key15": "2i5GyUGmiEg5e65nf99YRRk5rPwgd93KnwJGR6QuNi7Cm9QgFfQBPg9PP5KH2dVnyNBdJkwQrsz1ACGd8YmDbVo2",
  "key16": "kBo6RBERgHsQpQSJUWgkGP63E3AfBkZsfgRXjxSpw519e31mKhEkhjbAdmGXZQJuGA6rZEKu6D9D9maS9TA3FAf",
  "key17": "2Fe3KveRLM5TRH3ypsBqewvH631RRuiv8WAmt4Ff2NxBK8L1uwGb71APGS8k7nXDcdedy7Q5PTvkVSsSr7NseBWf",
  "key18": "5q2VYpBuafkug44Dp8Q4ToXyU9xgw8Two56iBjCqtxcPf4irg3ndW4Eokbc5My2XUMQQA1ZVJcDyipnU57q86HC9",
  "key19": "5ZDXKP9mpiTCQDMipfe8TyqbGbdLxuf7FtrEoQfXzVcB9coFDRcZdyh3XL9uR8CV5kLvdeYP18kzkTm6PN7DUXNk",
  "key20": "49CeysLQgzifV5NKRdG3Hep8URK3wNLVo3U75NGbPvbhJDUQDHLdYEVYnUWBjaXsFebK2sfsGyonbcrA4rBSEqPR",
  "key21": "2SKha35ZuDKXRMfG6k1ypqGv3ipZMxhFu34fATWqB6tL6Vz1GpUwzQ8pnYzmUmGbtXrzs8qHRAf3Xc26hbxGSVLY",
  "key22": "9GU8ahaKG8GTxDs3zM6vAxJQJjK6pSHj5RfXAPMysSG8SxyosaDARmdxF7DhQ9e5PmbbgcHwbYWY9SWFbTHyPmh",
  "key23": "xA8hP7e7xeyQybe8woq9WDGWZbshv3ZgDURNe5Zn6zH3LjEfUeDeLWhu7gnHKKU3CoCwoFDQypHeERdbVoXL3n4",
  "key24": "27BezBhSjxtmbHd3vBsbx7HsoZtPwK7nycSLCgcLubMQgUHaC9uVrUAhqxB9MiWZmXpxVhei6RuxEHCX8Dgk92GR",
  "key25": "5S19JC6kNCfKu5d41xQf2G2A2me3yKCrqyHr4yHogTWHyqsWZmwDdRPgPaCMVBZHXnRpwQgknwNc25h8Spmo6Twg",
  "key26": "xdP72HpWaGrbpQrhhx3Z8WNbESXgKAnVHW7YP1VmMBpqcPT1iXSP2xEQHoS9qrHB8GTYHBFJPw1BnzzJgWiJW9J",
  "key27": "3iziyB5f8uwiB5DdbGknvwCYakCyXDJsHVAZsGmH1Bk8JZQKniCT5Lh45U77CmpJ35bNFF6bFmmYGin1HtwreH9U",
  "key28": "i4W39EsD9QgN8WRFqrdh4zNibuh5kCqJuVcmDrUbLo6TSyNAcz5fHRxqD8BJNFmPv1MrMs6jR7W6uXaonCJaqrs",
  "key29": "2VE6aakdFPJcUrCPdHhqgd6wmM56kv8VH6Ym85dshMVnS1iQmKfLsC1d1tTK4DqopYJantzPoGWvWWU2oZVcmQo7",
  "key30": "3pwA1qnc7fnAdAAvDhqdcpUPgq3AuX5CBeZ6CAHn1zhtnFhuekpU4z3MUTWuh2tZ5WFWCqXUT22mgyupcwVNKQt2",
  "key31": "4CiJuRgoNBWWoeZfL9pNvvraMXTxugn7g5C8YmsEVjDAWPUKGsnnpET1yKyQsvwKoSEF96iPcSh616nba6efxEh6",
  "key32": "3uSNyW8WY7RovN6upoBsswZJ91ivnvpTFMKQwTt8wHJWvMG2nrhN7Fqfct7HB8Kny6VLMq9dEGBXLgzXBMXv3WeW",
  "key33": "49Vh9MQiCdc9QDpfxEjHU2g92qE8121ZfgsMrmY9YtzA5AdWHGekqrfzNZzbgPqrv4iNT9A1xHsUhEK5b4mb23AZ",
  "key34": "iggEratqVgwXnLhQzYCuJbJ54Q9UXFGUyFMw1TNDV6qRkEzVDPHWthYeFHbWNyuN9uZCVpgRrSeSCxubT3Q87Ji",
  "key35": "56AVaXaMEzsXHbcoYupL44vsA9ZDK1y4oLcUgHhFyxdyUUCK7XkYJSp2hBF7QckKMyYPLefqUp1rnRdq7h2CYbdD",
  "key36": "3erLotbcrWNYmZJB1yK47UHkcShhTkLRKpyAdiZS8EB52uwfA4CL46MAPEeb1vHA2erEp9FiNAXLUrkpRRPENvEY",
  "key37": "2qCSdVfveSwH2qMpqxrJYdfqJzMv4o4tsYHboL9rKVRq3phHgs84AtvHfPoKwNfUpu95Y7SedciaCwgSDJc6LKPC",
  "key38": "3sn9mhwEc2RPc4WaKpGe4VfiERsP9TRgsv4RCBxqPTwmB2iYf1T2GHE91Ufn1u6W7wEkVaDDe3mnB4QZUXSiWX5",
  "key39": "3bpvhegooLphYZzcitDBcgL236416g72RodoUG26by6AA4cSGTjg97gei6VfzBDXwLRSqDzEdYE9VJAAN2svVjYG",
  "key40": "5tgrXjKcLDPPnk4je29xpWvVvZxhgbwsjXHcdKb71P83C5nq83ZnxKAxcF4BRL17eRT6PXhd67YF6QsjeX9Re1VE"
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
