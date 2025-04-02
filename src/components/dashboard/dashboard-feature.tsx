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
    "5YRezX1cJ1dCTbWBzf9NoitKqVmDBXfq7H5UQkmXTFZrRJR7seDbRjkdNqfy7cCAPQv1DsrmkHYsjPKs91sycCCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q9xLKYLjUmqm8mTGjnH4Qi1B2QERSUcgwv3Wd7vNNNPZn52X37zc1Fkp3hCtbDaxp9TCB5inEJuCiffRWmcDkut",
  "key1": "3uhmg2hNAH8SmWhPpMs5W8CpAVvpxtYWHGWS2UPe8f2fygnZNrw7z9UQZhUt5GMqWVG7xQHqHfJiy6yfxgdgPwkd",
  "key2": "cLjhMMhdMA1NHQ77qCBwQZEK6TAbp1mNhETbw7JVxHo6FhAanrB5WMQtWCAX4aEcrocVZnU8XuGZJ7nUfi1nTcA",
  "key3": "5BV6BhYqHuC4TPFvkw563WKivsveFVs593uo3KA7vRCknBf3m2FEu2YecpVDDA9mthoJeMfwZRqy6r9mK91iMLNa",
  "key4": "4HYWPpmonYHmuXnU4aZnAZe3R8BBFLtY25hQfUG1BNzggQS9DGVTXp1iLpux8CGJJmUqXuXruSsW4Ny5ewJ1fuzH",
  "key5": "JCvL1FH4HwSvTtbAQr8qD6tkwoPB6yJVXKyxkoDskAqQZiJPWf863xf8ab7yegmaZkCbr8XQhaQYNuoiWxipHCk",
  "key6": "25W2w79pauzDaScU8fn1XkJLMHyBhDc7pFRpES83h9fwNMMUxeB7WN5zzN35rFLLvG3X2ti9AS7u2LtApJEnTTv3",
  "key7": "49QqABAW6FFxbq2d1AaUimk7vJccBwXR1qFjdpseeLMYLwabvNKvMbZPG58UWCEKBbe6Nh736ZvpuMEv8PXHPPpu",
  "key8": "45hoDPSp2pTootXb6EdGxjzhqys7oqA4AfWad8Ygnx2CHG7UYFVYPEvZqcN8yoW8agjDejzjh2vVgeMF1jrURMHC",
  "key9": "v3HAaN9rftwggBYcR5fL5xZ5xe982VYFXEa7b5wFT7tuKdEiWBC3XdDM2eZWBi1rXDr1XTmicrTo8wBTrnq1XjZ",
  "key10": "2A6QWunCovTW72xM3PYnZwDHiSnRQwsNsZ8jbttrTT3TyNWcLy1eijDY9APKLJ5YUtNHCwfHWYSg9LFii2swHuTP",
  "key11": "4e1fmHgxF2vLaGzUdoaCnqWEaeXwCu2xYKQrsrmVBLnUy1S68RoFchVJ6RkthBWKRmVurc3JRLyX23T6mYjELRTS",
  "key12": "43r9Bit3h5XaBKEgTUpcjg7yBcf8BbGvZbKw33nHx5sftDmfSEJTSiPPb2RTFsZvfAE3SZCrmrCj1XfJjhPDpDSE",
  "key13": "2rtbvJiWneuAbBQ2Kr4T6NcBm1zQvo4srJiGrN99JtxwiXURxV8PLudyTwDAHGegYeKwoAvxYn6z1Bnq7nxpanpt",
  "key14": "4E53h1AWYCEmKXMdEVw3LYrk8Lf39S5tvBnzNzzpvWMHZ4rmHDedaeVwZeNJ7QJEi64B2GnjabEUSJGnZHkqtZDX",
  "key15": "2imbJTmtcqBBJkeF8Q1UbeaqwWSoZmztU8mhrz8K6uq3ahYkc58kzvZSP5r2zMyKVKCvALNS9VxmeSx8V3gGp2xw",
  "key16": "4XckdhdvhbdcNYihgwouYaZsC3VXTgA8KzangqjSbGz5cSdmwDvSEiNWpoTrS8Ueh6NwLpy4PzBt7F11hfQgLUVN",
  "key17": "zKToyHf16zc8BPdps3zD9zyQqEa9njJszzTXG2Ppgz1ci7hSAsUrSJbs6PvaRWR8exRYhRs1skKN5kx4ivRfZty",
  "key18": "21oj46dvcUCu7Purjo5ra9mS3yi7mJ54QuBEkw5Bi4Gza9SJqvYCJeN49p88eZXqC9q4f8vFuhC5iujh2CLZG1tw",
  "key19": "5C4RztmMcPEXDcdRajAAc8VE9padR8doQZPhh5peaux6L72d4pddH3JJ7Gwuq6QWYYEQE58GjB3xvhtJP2vh2JkF",
  "key20": "3BUdMN7whsQyhhBffvS8GJZM3eXaV7HzfGVLkV5LtbpuDzDGEMam8Wx5wrY71DhDBCysRfopS8HM1xnQcgXeEDpQ",
  "key21": "2xTKExUgBzh86MmpXAk7M6LzSXbJ1sxG9dgJVpnwD7F7DF4tTodnJSQRMYbEhdyLJe8YvhdxtrJYYC2uEnMGqvt1",
  "key22": "PKmysgMu8MRRPiScoUHLaULcZhjmDpRrd9yxHCp5BhETuY13d1TUppWh6KtA3CaEbeX7js8zeR6fUJvExrj4pEM",
  "key23": "4H8Z6h4imz5RPi6jXrTfWgkxv8MVv6gBG1MHqqB2EuzVS15yHx8W8U1FZi3EfsnYPZuZsqiXsCsg5BbqALzjh7Mw",
  "key24": "3YoSBoUaxqnhxwZX3Mm6ieNR65xyeoD4Cc18u2hVkKGdbFQcCo34b1LNswLXb8JW6D4BuBJ4S7fj1RBHWqNqrAUw",
  "key25": "5cG6CToPtB7e3K29B4bwWd6tyh23VU4cQvfVWuKXhvnnCLzU1x8F7377Ht2mty1UmtzBDfSdboXtJvvTbrTKJpkE",
  "key26": "5f7kLDeQPH7zHJxjQjKwG2rJL2aYqhR8WXi7kAFFY8SDHxDAaMZ5QZPZvGq26bbvNwZ1xptZ5es7k2ULQ42LxaYJ",
  "key27": "4nxFEPc2barwFnYehoK9qr2hc6N64j4R16oqiNjeJgqH8rLjfXeqJi2QCPgCLgfMkPx5i4igrEuusFkx8K9j6W1v",
  "key28": "5DhHCK4j3UEfbbybqzzW91Xv5hg7ntd2xMWu8tF1N7X96Zssb4BkSu28LyeCsAtb4cvLKYsGvGSoMnX5r9WjXU1B",
  "key29": "2s8ELW2zpkgiKMs1B4z6VZGmjfxcUjY2N9CtjnHfLsEhj5KhwVPAkfnf4aySnsFkvu4CLm4sbnWABrcm6SMNouVA"
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
