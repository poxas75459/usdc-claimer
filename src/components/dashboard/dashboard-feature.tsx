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
    "Q8i5Jx84bHketzzzvuj7i9eyjxHPeJJukieFX6cogRVn7ptK9vgigvaGL6GsQmo2rDMbGW18HopCMrAgtxknuZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "566cp9fKUJ9Jrxt5FkwDeyJqE9M7GMgqSyF9a283Kk9ag5XCrBcBwetsCtFVrh9PczrBN1mmHqNjnBqPbxf7rCLW",
  "key1": "3cwT5ZRLcJyHXwdeFtc6pp9HZTud5Paf9dz77pxwTNcnHgd5nsLDCVT8YXSeLvQ9LmSYBtvVdPYtY6jM3xpMYPCV",
  "key2": "3PmSZMsakQL7wRjpYGCX8t44Np44ELunUr7rbg2AuRz18uCk3DzyDfTKK4MBhw9TkA2Zb4C6EhjBasGemSkrmh8u",
  "key3": "5YzMR3M4mmPVjBevKNPv1b4EcFjudWnEkjgiKgXyuDmcvowNjvLfZ7RRhEpXoSsyhFeCeDyFpMNqZuo5x1gJsFuM",
  "key4": "3wLQWdecDm8mhUNeu7kLxrV34gDJHbHKVXbjGv8TnhU7v1n9GVDHmi8YfTCZG6BLXbtzM2M3CKWDNmLvWKko7i3L",
  "key5": "2PhcGYJ7QyEfUs611DXGebptArH2PwgQvACqEcjwxTnFBaUSFVaGEZ5LYyoxeueFrmGRymhJVebuecQYQmtPM6yi",
  "key6": "4DAgRP599U1VzdfUEMABMxq5GkrPqXe5Ejg3uHZYVuPua1KmbPdthyEiQELH2P9U7tEGv87hnsjpKdqMsKHFsFs9",
  "key7": "5PJ3WqwqcZnHsbhyHeCiSUqyCSFGsASNMjuESHjy6W2xn4na64rg8CUWhR2Pn5M2QSc5epM93Um36266pGCnwd6P",
  "key8": "3peGUGzHeDtKiCD3nMb7roJMR4ZGJBisaHCbiwmTr6joqfkEYpr16fpvqp17AkK6AjrN3bhwfR9EFr5AWMyJytA9",
  "key9": "4iCZvf3ZGYCWPVB7kNiTxxAjuVFjsi3pT5su7tdTvxr6JW9tye89Acs3PLLPuTWqVdV9yaiybngJm7YPosa44MX5",
  "key10": "vY8KBN364ffy7brZuCK9Vbzi5pgvUunCycjDHfWLBYNPkpcmKwHEAN1oHu82ynu2L4xcpCiQMVmRQqdxaYYfECn",
  "key11": "5TgQFJDX8rwwrjid4WgEUwd3cgxsDKDCgqZ7vwJ7Nj3Zd9yMvKpRBbeV8HcgefuUbycezjYaZqDragRynx9vSCoc",
  "key12": "2kWGmkf3reWpq2TWoCnQKMAGZCjpbWb8AzrXiQnRLu2DZRZDcUemWycjGPtu6Qxq7HmUsJDEZCTUEiYpQJ5eHeoS",
  "key13": "3R3nBa2tsNao33QBDdf3YtARF3UeWi2nhXYUJmbvjJc14rmsu6bTMonJZQNBeABpY7GpcqMpD5z3d1SHXEA4cipf",
  "key14": "4QNN8t3xtmWbbFm4878KHVKJ679dQXFbZcv46YkZpdRR4rdp986v4MJZDSmVJ4HvnHGMzQPzQwRDvxXWJC9h4EmD",
  "key15": "3sMBhRJVFueU3zDNwRTc5E4coYQ76ckbwR3KKk6yNVPCD9LqWy8zYimM4Vs1PuzuxoNiavYn5pbAonkePc13V4xu",
  "key16": "6495HZxYhLsYjDt7xfWQ677AXSVjMH61tznYQRWMn2ksC2venGwcGZ91eBsESC173DmDdjD3563akHsE646tg1yo",
  "key17": "2uFehtwCobaRJAGVFdfqU7TpZMEZMrRgL2mC5jYacuYzspVhieuVehRVPLXyWZ8jWyBwBNQUL9jejhrb4qE1hbnu",
  "key18": "4zD5L7G3EcLqRZB2rDazQUrkh2VFjNYBtGQMUf6WgaECgtPe84qKaT2KMWMbFFzCesK6TVAgcoV3wxHb9XqRGjfa",
  "key19": "5mNYngwnGuiF8WFbRVRkadxf8XX3Lvs3Fs5Q7ELm1dSPZ2rFU22bXYptL153tUzrAmhYJMSE1jAYj1WJsvcMevdF",
  "key20": "3xwQAsi4J1J528HNXKRDhjttUvKyDBzXSnzf9vvhcfqqygxdnMsZfLHWTzcC8ANu7BdHKnbRygdixKGNVhq3Dtuu",
  "key21": "GrexvjiKuvHPuQPrDq44JZUPey1A6cccKoT3uXmc6vz65fikRQFBCHCyHjWP8J19bkQUPbe7GrWAw7W3CZa8sBK",
  "key22": "62dpsRXAERoTsq4vWg1Lkoma82Fgdn5Z7EKCRvLaKc229XrYy9PfDFjVXZY5gpvQrpp1Bb2EK8sFPaXiBMNBTVQJ",
  "key23": "tpiL3KedDBDPQtgmjosWmLsAQ7d299W3sV7n4HG5DA83eQ8KiZPauYEVx2UiqfM1UUg5dA5Tn8QozAXxWH1dap8",
  "key24": "3ryrSxSbeesWR1mfM79HbgkGRnSnUzfCNP9TntBd2BtM6GXW78ujQFWGrzeWxkLj73LyFDF12on96iko3UgqbpTo",
  "key25": "4wbwoHb8HeELeFFFVMLFpMZcCNH1fV46xqPXRUtRCiT5dWSZMc5oTGjq4i7NyD3tPBLG89dTjmByVAgWDGrvDydT",
  "key26": "KzMjX6s3dw7YhJRfgvhQcsMWeB1pveQ4je8Czj4jYoTGGNVuUS9QNRTQ2A5JDsYgp66fG1ogbXT6WTYMrkpsF51",
  "key27": "zmpowwGsE8WoFzGNG4DmZvZRsyniLH7HRhMQPWMkeZTGf4rafQw4v3kUKY1iZoMLJCqxSkuYx6PkrFT84chHAD6"
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
