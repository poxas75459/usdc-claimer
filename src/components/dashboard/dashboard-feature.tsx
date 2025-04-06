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
    "3tuqkYp5vewfUUzdMvXpkUPcfJSDvoD9KFhZh6TYLPVDYzgT135Ra3bTUgxK7HEmzJompbwTBe4uePr99uQPTzhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6NtW1Cq9mzM3Dw7DZLraMnJjeM6KkY7MPoNkPc8C7s8pnQFwcpEnBiyzM3W8uS8PYj44pYVqorqeoTbwtvTCzgM",
  "key1": "LUy6RLBLHUsmFdKyhFFXgh8zHnUAZTAhj6sED758ec8Ypr38rzcAjUamTvhcT7NedMUDmV64hoU1LjbdDbBE4Gd",
  "key2": "4xWYjdxjBH77AvebD3PSsbtxUPqaSU86NHBrwwmWYMDER5LDocRkxRbWkm7VH3KehwMuz6XBKNoRXWnbCdQLyVNt",
  "key3": "3veg7E3TGBMdbn3hZ8mqM6qqqVfpkXFexXV9VTc6GJRxGqQsabWScLghUdnDwBUP4ifWbydcRbMELoGpBXbh87tA",
  "key4": "2W72TQEc3FzpoqGbKqR3skLE1bHvP18wR7uYvwmWTqvo83xLsBYzd5Atzsn88pwAy3Qi9kHTFuniLmFALrWSyR98",
  "key5": "9jDsbZMp9mJqQ1w3eRgMMwaq7Z8NvcE7dUkd3h9Tiv4rYnnzWK2tnmNWMryPiqzUYRmuPVte9zc17jctjvZPrkE",
  "key6": "4wPkmKk8baf4XynkbPgYPWgdAZf4n6UJ4fXeLLhPFrroZQ2apwheKpX466ksNwdx1whXMG2NMf2FNU8oq1H3RiWQ",
  "key7": "5MJNAW6P7swgNdoNJpNiwFzgvkh9iHGMVDKx4MZ7hHrLjYF1Mg5ojqF6GiDd1fG4kJDFcdeBjahtrvsbH8AxYieF",
  "key8": "2jk7ziznwtaz4QLPDkdk4QL92UHAqprYqxkTRiAuNEnFTBXB1WuEsU7Sfi1jzm4GLmUNnwvVtRePf3jTuNvz1ahN",
  "key9": "7z3siXknDca3WqRGbGGHRPuvdDzpdayiXUVYK5wQ6Um3dDdJNSmBD1KJY4b7unNKcz4YCBnqAaTeEACbdCBEq76",
  "key10": "5wDgrwesypRzd3KWPyPiiRvMSHLM26DY36YZSVdjJ5yASC2NWXJYuFWPLcjWTgTRVf9osywQXwGr3ijrNMvxeXWd",
  "key11": "21Kga79XNHeb429UKgK9An6P9J8cGBAeLPRhunu1Q4bSSjL4CFezGsPdTbjYoHUrj1Uu26mhgoXSnBUBGiw5UoxY",
  "key12": "5Vy8nV63Satx8sUTpVNy7vWnoGwbDBqcuxU1gbppKP4Scd2wUXxbEPbdDZzSfeQGF3C8wALAeDSC7yCDA6QoAnVw",
  "key13": "d33RFr4GcrVQgaLgoa2kaW5pScUtTtMb2uayxzreNLfSy79eaAhs6TwGtQGG7tcg88uRxSB3z7SWzzsyxv8kLAd",
  "key14": "5S1zgboCGKHspa9UGmzqbyaQ2XzAWwoLy8Wmo7c61B5ivbzXNWD5wPT1zazsb793H1ZNiu2K3CV63ejxyqnyiyRd",
  "key15": "5RPRZiqg1uJ2XXgwXef6Qq9hESUUSXPeQPvz5DPsTxifb6YBF6bs7MyomzpEjw2FiHQc1sMb8DqXaME49QZtg7xy",
  "key16": "RcHJTGTUGRiLaFMtrXGuniwGPDi9RhuwSZUkykoa1wC2eqyyxvD5bKmsWZC1khPU128pipnvD4e4WzU59dADT4B",
  "key17": "4nRLHM8k5PgrtdsDVX6HMVKP6355CPJFwyTrdN4RpjmosvZ7UHrF5or2Ar2dqUqdUhmN2jdSH9UChoiiRrM5mfh5",
  "key18": "2G4yZrzxkk6RttSs7i33JdjFdG8Nc9YpcUVPHbnrRbMKjWrmr36HMxk5ZVhkhgNM1dM8HkChZn4aNqe7f16GuazJ",
  "key19": "2hKcpeL37BVN6HczimM1xLbMN7MUA5XFFZKMFCrm3K94pp1dVCKmxBCCinvKtCRRCQfHoxE33BbCmbWBmgfpT9s1",
  "key20": "22vcuSQJr2bz2tzKcY9hWCTxmCiyfSMBb6a4yEiwdTT83pwSkw8vZ3cTZ9Jg35HXYvz3SaYgi9znS7P3txvgrLL4",
  "key21": "5upeDKeYXFwsXq4pUQme5pf1HQ1uFkYjcAYdjNjHQf6pttQmYw2yz2bcCpX92VKNszaQNccU3KmiyfzSkyxaAhF8",
  "key22": "4P8woKo1SMXiSt3nStBRTTf4HBuEq7Hgg42j2eYtrL2LYaG4azy8JRXNJ2ohxHaqb4sHCXKRBd9Gf8Aw9QQZ7gW4",
  "key23": "uBEAk8eCwzV2FfiNFHYTRNS31PqUjdz6PGWv3EEzjn8cHuJtnEVLNk4G6BU8wWQeWWPbxP7zTbSq7CdAq8txYn4",
  "key24": "3GSpBZ61VLz8nLY6pYKTdXx3ETRc74fi2bErBJfphketHMJTJR6NVZrenh2VWB8TJwkumS7KHayfGByZS7tXnsQL",
  "key25": "5WZiGxjtf6y3siLstSJgeG6FTwN3KuZrqHYvNZEF21B3jJQeVBemfC5hARp7JTzKR6uGQHPoJWZe5F47MpATnX9p",
  "key26": "4Yksw89M7Q35M5MC3hXVMR5CPwUq8PqC3S67Cdd6xTpmzrM3MgwxvhXrKGnPRurp6WNEZXiTUavPQqgbP9M2t1AS",
  "key27": "4m1y4rEhqPWzL1MHLg8Zf7nGA1LasRMmJEucwsVhBXJXoyJUC614tMcJYZbcbSE2MTVrDsp4cXFpC5VBcdHxRThp",
  "key28": "2g2RU9jeon5QC1qaTHXgy4Lrs8HtX84fJtn2otNTtTbyfuSfksV9s6bG2agZ3WN7M4qKQjqCK6kYx2rY2hxrjU4a",
  "key29": "5LrRPZ2C1FD3H5mkSCCTYxPQZWJESDZJjW512GZH8q3DaE6CAdK9eUGFnTb9RKEtzAUxhxh9gK6NhiCM4kwo1n1L",
  "key30": "4RcXscx58Kh4sXovrjo2HYd7o814rEB5NSrjoGnQoigYEHtRUhW9zLMWhRFYWSufnBGTKeDKgG3oToNVXPdfnfqV",
  "key31": "3bHeKQpFyB4g3iweCqr5pTocB9EqFNCB83VxtV6mzuveDJCJwYaZkYuRuF6BAD3w5TJMTWofReh8WM1DRmSLKbbC",
  "key32": "2sYHAGP7PmHmhNv4iY3H6txYwfNZgHVQitK2TNtSYJHnbRpp5h4eUr71tGbgUUyhqMkPPsqWP69VF7ac9B5RsDpR",
  "key33": "4rzTdZMwrCYuUKfRMdPRnqgFS9gKV7NQBboH9ucXJMNjEjBecCGATkzmX36f3zZjSGWVzXTeekZEU5EwwSpSJNBb"
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
