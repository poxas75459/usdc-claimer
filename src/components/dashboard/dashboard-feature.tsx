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
    "k2tWrx7C7XaT93NiycAxLvBSZzdXGnvaJExqtr8dTPXb39L3GYSv3LeDP8oK6ha882itRmMhmx3ct9STPPYcwqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28drkx9WHMgvcNoToUSmF5F3tDyisVszoVYi25gQ53P6MzWyKeDaecsww3mFhwrGohEkNtwSVWaGZ7bGJtQ2n9yP",
  "key1": "2Yk13eVDeaByGqTA3bpCCU3rmAT3nbXgpKpXWsJJh1DCnzxKWLxF2mWmVs2G6hwREoRftvCVzg7iF8ArAAvsFqWh",
  "key2": "5qbvmihpkWPw2Vx3XnVveBjGaG7MZapFbA6sggQC6jvw25X7kDLjRWVZedHuPdcGFJCef67CioNJ4wCmw7CjA5vV",
  "key3": "4LfNLk9BzopAeFhR35kV9Jm9dy1AannWiTFwB8UGYCgyAuA1hx97hmAbsYVLrBEwXtZLgH9UmctMG91AnvtTYPRN",
  "key4": "2vwVTv8P5hekcCpqVd3DmyQ5sB9DuFSNcSSuHD5k5SQs4C5GPnNZX6EuGSiaut2PBgk2oQPcVQ8bwFb24VwW1j7z",
  "key5": "2ptKSfh3SApfMo4q8sfrsPgaLac4kX8AspGx95AaixuK5dsF8Gnu39t48kQoo5vicFoK4xVjQMK1h4c31orrBev6",
  "key6": "2ZvZJn9UHcCwf52VJ79B15WEJJqxFDRsSB1CfpGtnxdp9ypi93aFn1ZXnmsHetxmhdagf5hn6gMcSQRjT9DZfmEn",
  "key7": "5cSksDTrobbw4K6YvBs2eo83zgS4uQVufrwhg1vqdHxp1nqHG8x4d3tLbMxZBGkJUQoSqoAGLXwHXqzTWuktwxHE",
  "key8": "B2R3a7iXyqjHP6GBzs2JRkSzt6SKM64FRxQUS6EYJQnReGSMHgtLPX7MppPAwQtrwPzHB5E2PRttsFdBRxqFzgi",
  "key9": "5pWKgaSMYY98fGQmxAmL5MRB3J4bf42w3p17V21PhzsdZ9FBdpBAEGtvum2C3DEtXoKxwRRjnytUgDyZTTAwk1JG",
  "key10": "5U4K6nYTQrFRowB7ivm4A5744jvDzCE4exxr7tPtCmqjtuf7YLjQXFzxCdzrapqX8NPc11BtPanDFktthjY14fqh",
  "key11": "3xU7k73ieBGXnmnSJf6uwNKaAADhBp4ZbmWC362qJCeT5cDCpnuDPtCeCu67pyk3FCTbaGNqA8PzZaBR6L4tehR2",
  "key12": "3ArpyczA3NbBryfiSZjq2dkcCVdAWNveRtbfc4Dz9MvpwLEcGk8ndfnifsjcAuhYK8Fecp6CvQV1bq3zXgUUVsmp",
  "key13": "2aqSEQt5zfFdXmLiKBg1nfCMxd3aZ9K9nT3KWbwH5zPWCYyJ5BWcpwBghroaenYLc6TgZcw9LCagdiQvjpWznrFW",
  "key14": "cz9SBLHQ5hMqfD55pRPXnqCHATthFSBdPW3AkoJVjyDK6iCPExgpgbcdKHUAAFFcoTFqiu3BH2PuEnCuTfWFudD",
  "key15": "TyiXApFR2DQPXn3szyjdx3fBCxJhaK3222VirBGSN5kzP4rfMZTZKKtWkidqLmkghP6S1k6SABejo5Uz4nk5iNW",
  "key16": "35cLChz7QBQ1uE7QsHFpUkR31zpunvN7yG7a9wgnEe1UkRG1HFosXDyR23yuhgJzaC3gZhJV9UX81kPeRnPPyHos",
  "key17": "QvFVMJd4S2cCERFscrybNSuy8438J93ze2XswH2CCN5t6ztw8RQ3MEHQv77F6KpLtyHDm1wU7ck862ibH9XESQo",
  "key18": "NvDashrbJLpwFSLTXTJXEuh1SKx6ENHfcJJg2r1jmzRTZcRCBJgrHGDxowPCjXWq4FWd3y8rUmQjeVeRTzAGJt3",
  "key19": "4GUL5uB8EJmsu3P4ySm2ZCHgKuGBLFifb1tRJRib2fNnLCYjb2eWbgpgfhCgmzDWnPhyazdMVCmvdwfaq1pRpqrp",
  "key20": "4e1iKe3skPuXyF8rk7g9idVECUPkordurPbSZ6crcNWDKx5yPfeWBkKXCGVeDGgsiK9n8EWx2M13fCQLz4Kdkuor",
  "key21": "42nRYPJhSZjgdndWojDmUsF5N1PKpK9wwWdw86kmRyTssdC66VLWzscMfvoZMbP7ZfMisQZ1nZm2L9Q1qRn2sFoM",
  "key22": "42TwRHg6MFxnw1yoe3FNwAvzUSXGLk3k2RVdTHQowrV8R93sM3nNff1QZqRdhK1KuF3cCgaksRNKJQ1ewCKj7kCj",
  "key23": "VbtSz6TxXNpBzbdHYYciTxAYHmVxcEA695V5qcUFJQfnk9LsdPwqMQsb2Nf1YY3BmHuqsQmM3QHYaRxh8nHdu5L",
  "key24": "5RbcX1ZjBUR1tpsNLyniwUUSKLqroUkrcwJLAy5nkjuLon5oNe4EvBp9R4ZrjECDWkd3N95XHtsoxnwBCkXPSfFL",
  "key25": "5VoeMaSZ9Uoz2W8dXYz1oZjTykKDuBrKqBhwH7493vZ7zSn1daobkjhYdxcQA8aXfg9cbxQDScYWUz5FKijmWkqq",
  "key26": "5hZL8SHnMf4KeHrV33ssmwHTm9UnqWNDmyyU9h9kY1U83jfXeZVEuAB8bb2DihnW7QiS3D2jF6f7Ji3bq6GuuKHH",
  "key27": "39UEyBMLEbJ5jdPTFDsdW4PbtvjiWkAixCzk2Hqo2N86ZW4knLTsfWjdhqGGarPnC62sFwPZxvPWk45SQzceXNKx",
  "key28": "3LPigXP9moHNoEFUeqBb7DdCQ5bE2mqqedwR3U7essbcT1u6L1WuJDzcobB9JJC29XCSkJjoea2jaYtKF2zCoe7k",
  "key29": "E3qmxdLRn4tgaCupXHrnobLABCyWUSyoQFzJC4EoUQrAE1VEr1pJ6iL1FtWounPEDFZSTkPjYXqxD8sGijZK7VN",
  "key30": "4dUNgcJ1aaTuvwAaF4XhzWgpBMSjRi9Yvki4oe9QUinSavhjggLGWM6wVim5Fb9hq6Gas92a5j2g6ioHacHap6D4",
  "key31": "2VtMsyyqrES6cyNNpVtyUwdkCQQJAj8jyfLdTooHbtPwSGrJ1ur757TKSqssfF2kxJb9FFU5xR9HhTBsu4JhG3BF"
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
