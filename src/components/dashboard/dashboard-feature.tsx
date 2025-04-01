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
    "LH2jtSgeERYgu46oviF3bFjXyDoZuq5K5wsgM9o8svp43nbUDH1hHf5wpN1huVVipVfnHg8ueS3XtWWR5La27NG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z9zf2S5M8pWGDQ24aAiqY8Lbn2eheg8tEF4byk4iuoDaSEB4NasqPh4zdwKBu2b7hivdZ8Hpn9oGmgcNvkZCCZT",
  "key1": "3ftv88Z1Ks9jo28saei6Ki5JNdK6fkbceSfE2ym3726AXrWBd2EgFFYeGiVuDgq6m7c1tnREHbyfvMT3N66yKFoG",
  "key2": "3gqRtiX9jpFEG9Nk2JnjBsPXzUJi4EtsbHspb7dNRPqK4NsUVMAJCVXJdy9VmBT5uHRiFLYcWHZMbXHLvRwNguCj",
  "key3": "5Mat5wYzGxL17wq4zTFS5hwnqMbKr8jUN3ZMqUhLXxLvnTQRyfNULJZXvcTNibJy2tbcBdhyhuo48UVeRGmpV8M9",
  "key4": "27Fezr8vrxYnLHW3HoyJMst5Zh1SRW3vvskeuYsJjuFKp23t3EjDmz2bnFXzJZXoNfawcyft9hBA8zjShBnXum3b",
  "key5": "5KX4vofkEk8Zh6dqTJZYJVfL52ZotNAhNqDBNa67EaWA6QbuHmBHd314EUf2HESSWfnXAzo47zrYdRNuq2sWzxPL",
  "key6": "2Ac7yc1wUjnX5MphS7hAt7vBziWu1ZzPwSmXPaHWnB9AoucvhPD3rY3F7tHRuywwXdebHEtwF1j6j5Kg32FiS2j6",
  "key7": "Cg7Zx1MR5fKFcEoumNz13x6Utchc5J5HmvxjJdV7mu6dUhcvqRiDdUyMyeNvtGfwHoBcBsQ31ixWp6axTSuUA9m",
  "key8": "2DWW4n4t7Y5nfHbLzgonq3Gw81Ze7dorB4A6wxjt5cspwwtq3rggfSWnQ4wPmDam7Atwc7Pt4cLdYviMJdgrjYUN",
  "key9": "5HMGn2uhQQnHm4RniwvphgLHsrtK6KSGsNG6auZF4Z9Cx7FbPQuvYtAhg5wTrfbDPNzBQwoTDW1dRgH553YWqtbV",
  "key10": "23UQi6trpVvqYx7yytJtpMX8cdSHDZKUdbEgNn4NnZeW7cRR6aL5canDBjHQmvE5sN6ns8dhxeKry6HkoyWPMBxA",
  "key11": "8pbHoyDSkfJykdwDhRJHGfKi5F3qYgsyZmkvzoDMfk3TXwsaEcAguYQWwaSuSEiYJxnG7SD468U6TbbpW6RhBpJ",
  "key12": "51jdMXipezudmzB7iqWjzn13ZU5aV1QRZQxvb82HHeQD1rP8jJrh3CGPBMjRWCNAywJqgHVJHnQLXdoQTi61qcCG",
  "key13": "4JToxwYLk3VvXezYrQ7qZS7tkXrFncuxh5Wqzd8HqTorWBwkymLFQdLcACT3gK3VaJakY9uqKqKk9Zd7gQ2kLKge",
  "key14": "2RECPLbrYYqYj81SKyVrpdzzjvwCwqzWPmtjdUY9kEU4R6erpUGiNMr6zcH2VyDypmmxCfRzMM4YjnaaBA2BYuBc",
  "key15": "2VZWbrwRKGYYa6Z2aKEWEUjdkLB3chZQ8JejnBvLC35Z3YcqhnpVSn2nobaSwMkUqVi2dRPH4ezCDTtp7J34zMJ5",
  "key16": "2iM69oV5M4nQRbEPt3qZbgjk26YdBQr2ngNJ9ypkGiDvQWLJHQKkxpj4MARcJtmokEGXPwAGSDA4X1WwRfr6hiRr",
  "key17": "4X3ufVxW917Xzp44yXCmgf6F1reao8SZeuGUCZm4eCL5KpLjaEvmjWkPMUPkvtCgdFkPzFFoniBhiQJtx51EYoee",
  "key18": "ihZihkzAucUH5EwHQhNySqY1XbBmKqrnxQzeEacG214qqy9akXgGiSVjpMrKutzL6ZKDRm3sqEXZ2DzpYbUPXRB",
  "key19": "344xtANjTN5nRhzUPzLsdPW9qKQyBRwk7h7pnJfCDBUdfSY2Uq2mtGNM72A9nmu8D6dRtLo16YkiCHzxhPHsA7KR",
  "key20": "4Axw15WD8Ge4bnZwoLti1P9VcsfYCSigo7NfkHVxXKcPpXUCqWaN8sAhQZi4VskDo22JUfGZnjfyHscWJ6jkCf4B",
  "key21": "31EmgPTqdTUrkte2N9c1GwanPoW2reV6AhypGLCMzPPh3Ly99MEbhaY4PXywmr7dLFoXFEaw21CpHRcFGcVhp8GC",
  "key22": "46UMZgsXrvbirnJNyhFD8k8trhRNSJukxvo3QHjCcvTRE4ykDWwZJGrfUz2J4qphZy7ukJMHXvMC8gp4qPDhqJyP",
  "key23": "3xU9TMV2VxHwTMm9kBycwjSTVzqLsJYmSFLGZhad1ArJDcjW5JyT1hST1K8VyiPZWpAk7DMXPqaVB6TcQTBqSNy1",
  "key24": "4Fkf6RYw7yqBK9eTp5Qi8S9rQsDfR6CwTyYNpgQJv9BekTrksSHcyG288RmGxxHS9w1ERF5KjbQ5Bsfj1QuAeQPz"
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
