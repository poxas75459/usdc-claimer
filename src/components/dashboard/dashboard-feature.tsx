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
    "5o1AX34e9isZypoG1dXRw5Fob99KnDzXB9auSAhWYL4mftXKEXGgvdoYc7Jw4BJ6qGKxS5FTKDYTafSdrjUxp31P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49P4x2uAQVuia7yxPYPLYFMyJHkoQw5nEuLrbzJpBhzAAWD1pSvzgVHnqjpDfALir4xXX6tyLqoWUV4pmkPgwkyn",
  "key1": "5hXLcT5z54ERtqML9dSNeAvkUcaLEpk4U8hhSzkvj91dESwjSthnJc9tVy9CZAcTsvuV1ii32hFtGGT6ufxABu5c",
  "key2": "3MEwbXUcXgNCYsu6JGasgs1aijndrCgtEisKyVpdCneFpVbT47iVRqTQE5rNGdfaGzd3t5pWWGq44PTPVVsko54g",
  "key3": "63NYQcLHZ53dzhZdAPU9k4vqKcYvs24u654JZMvAXoHMfY7wZJM5co6Dx7r2xjU1ys9Rdn6pXMv5VPPY1tjxBB18",
  "key4": "2Merv3egi6F9ZA7kCyDd1AguCKLkp3XxziE7BHzdMX7yPHrG4z7GR89MSvbHEa3JXFTmjbPKqx3YbhoSxN9Pje2J",
  "key5": "4H46uoJfjYmbcLvyCjRP9cVdimKCMSJNJUcHLMyRbaydZYq3gZHBmpNFURhfHYTcLXnEUhdjTND4gF1C4ySnZLy9",
  "key6": "3t1d2KcChdEWaxQuSLEup2wZhbAaXZJkrvP9W4UCarZB7KGNST4s9nnYSjP42vJCPqY39AQSmKcwY7sEvEXAqdzs",
  "key7": "2hH4uKoUGZKSp3r7DboLxBStGUMftKmP2M18kqQb8bDKUPF4SA21ghSnVXXU2NumgEWRF46ZEaoLQRRtdLFoshYY",
  "key8": "3hwyE21sVjCnhUY7YRwsHPvaisd38ormoMQowxp8AgiFNJ2LimRJFoomY7WzUEQuWMjxqR7hvqk9m5kiCwaFwYgu",
  "key9": "62quqGD4ZQrZ2zFnDvr6MwnLFjkLacdDtgmixCSZSCCdCSDD6XPEXZ4An5Tj1yqvncibp8dxPkVsrPVnTpvxJmkm",
  "key10": "3FVCUPXf3njxvD1vR9vHY1JVviHpug1Hqb8Wo6EDkCETtpc56zs4YuK1x2GZLJMRyv4MVJ2bkPTiz6Fib6XwtYCu",
  "key11": "66rTRxsJXPef6ExXFazbGhrgJUuA9RivzDNciyPtFy46uzTyVim4t45TELTrR5FriyzMoWCNLHR2tEbFk8X5LFnF",
  "key12": "pvyLqoZmv1o1up31JG8Q8qmzS6fREJAbXn3euQBspaNNouh2n1mVBDicNCE6YicKp72GHfdyQ2TKnm5X4FZAfLB",
  "key13": "3veCFviEPBPhjtXkggRiLKi131qXxvAZ9GkA6achkHGirjAfLz4qYRf3Gr7vP6xF7ZvwaNMi1nwqY6AKZfjvsVTg",
  "key14": "5JgcTc8npffzGwakPz6dNxPcrZkr7qQHmEHrSsnQfPZakuzKV2uydXUJnY49K3NPoKjQZMzFktAu8evcmzPGgeLa",
  "key15": "2kkeaX6px5GrH9jKuwD4WYYpvNn5ZmQLfWkuxSsxs5D3rayZoeQgowRfRaKwV9zvftWyikCRgDkXTznDEgcC5Efw",
  "key16": "3dJvTgjUhvNS222G9bd2rf9zCD73BAvRZV37VCjXZzf7qG1Bk5d5VErW6W9HqMnNxbrU9unx9aAtvdCMT3Uue8xK",
  "key17": "2ciVx2erTAB63XD129KeFASrReBjn473eMNxW4haBaSV665qahxqCHckwR95zRnuAxTyMSFihehe1kLJ76RpVA3L",
  "key18": "619axcdrHK1vaZjhtTB24vA4YWHYCQoJ43vnkqLEwA5aQmKbij1WfErTAVcLA67zG6L7hJaHCuYDS5jxcmBaF4Gn",
  "key19": "aYG9PZuJvjoLDpwMoj4ESbyvFVooLmbB5kwcotzYqLQymYCruMNCm8JoaY5Tp8yPHfAN2rPkgaQ3CKVzzTAWRrr",
  "key20": "4cbAHvAbFqrYp1X6ysoMYvPuip4eK2AaEhU25tPWdxJHvTeAymsPTXfmMASBcU2HFb1Beo2UuNEoycbEZ4XYHsDm",
  "key21": "46guKPbD4XaTbQMUTAba6QzUoWQDobX1QjtTunRfBkgjNhmSDxZ85tPK4LHwQQ3wo7ZXfcHbJS2t16M8Ktk1k6b5",
  "key22": "2EQB2Mn7WgHHdrEZ5L7RJXkNPvDEB2LvPZycsMvbg4U3pR2VdgNgcHsvDt2QMaJTCeZvEgRjp6m9Q5fzbGcxubX2",
  "key23": "21fJATpnFtkAy7WnGeEx9dqQwntVeTzK2uYg8V5tPdFnLXEEYsdknveTVAwU6fJyQajtTU4pNHYniBWi3LNSZ1mN",
  "key24": "4BFFSah8kocH3kSQBA37PV4mePTL2MH5GPhiYToT3LRVV4PEsgBUe8gWLFeG5WuToQRUAUFUHHRFXB6XnfrQLAtD",
  "key25": "3yTUxWrQkemoFuNu8CKFozCkCE1uU9nWKJFqZn8NqMUzw6rYXcKprnYw4zkrfPoX2aEQAfcGiouL6UTavVQXCWcY",
  "key26": "4HDBdWK7cwNYzo9v6B9DWAsNqtVzWH7iZJM56xMAZywoTKQk4gTy2v4xP2qxn7eoKyR9PDPySCnjT9kkrmUrSjKB",
  "key27": "4C9b1EwsKB76r2vehb3ixRxLVYJ4J8YHyjhbKBtn7yTAM15FZDZW8kwWMa73aLKEjA67HSd4p61Vr7ZME3gGQHh9",
  "key28": "2vEocaGcsvqry1aJGktmuC3KdH5iyiuZPq4GnwSqfZmf4TjxwBdLhFVwPhZX97NdrBjKdvjT2keuXMQfZ2n2mk6u"
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
