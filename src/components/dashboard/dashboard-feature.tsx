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
    "KrDSzPry6jQnZgkfd5LUSZ9AUhUZEFzWurTXxGKPhRK6ygxYCLDhLspdUnH8bkoXMDLvY3GoJzvGNb8bsJgsgyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22JJFguAFE5Xd6TMXxsqcuuVBiTgudKVaXRTVMg72eU3eUcJFBoTok6Ys1SoNid2Wm1kcYAC2n4KMaJnXygjMJXb",
  "key1": "3uoW4XXWDdNVmD37LtYSCfQReKitT83MuqChsNXJFdqcJPV3kPgyk1urbxD8uXsRjjRMjZWfda4dCh5mvQDPoYgF",
  "key2": "5WW4nVeMq31iMaBRjLGMRJ3hgCvV8pmA4hRnZxfD5QJjiN9pyQGJfYwWxFGRjwDMKKexJD7nXc28zrnPfP19QEYR",
  "key3": "53ssoY5M4HTkCnAPAZh6cFGx3nMCrCEtukWxrtPBQyWhw3gY3QF6gcFXpZYinaHhqb8bSXcPqHvJdjPQvrVb5Xy4",
  "key4": "gMiM1osyyYpedh8GqnAsC27S5oyrkEj8SJknwTekoo1cGiToVVzP8qJuLMxmNaXti3no8Aievcj1jdjK5noYxqc",
  "key5": "3vaQsmYvKASwsaZ5TsHJYL6MSuwwVndzFXSH2Jc7nKvxiC2cYz9786CXVp9vujAHaEdpYSTqpmpHqYZWBdyBAhkE",
  "key6": "62yYi694tJZGTQ6mZkUhGVZEeNy5vfGAE5cS8TZq6TciwqPWmnzzyZQSDNARQY2g2ESoBp2X8iNhwJmJme5rJyzV",
  "key7": "5ixQZxH5nCQWxstqv6VvojN6cu98ED4yhzFMZKH9cFsXG7u8PHdac5yaXjig1F8wczE3BsjFwjG1NKe9PVo3Sdqu",
  "key8": "5AkdAnWmAvM67sTu6t6zjTaKViymKECbEc1pRSMBnBpL2ALGyUvhCLC9GNDoyL7C7Cza1CvBSJw9C6FTNgP2g6tf",
  "key9": "23caRArmAicUnwpb9UPfhz3aiHr3Fzxjsf189Vk7ta2phXacZnktC7CQTDecL1UvqKDV47cgZ12sNjR3KWmW6HEh",
  "key10": "xPF3UAhR9RHYB3QuUtAXBos93YrkYXYaSBFKrsMKFuzUnsHdf7BFhQ9HLqBtBgF5BFb5TWjSr9fG9RGYMfHhWfT",
  "key11": "2KikxwhvC9axkVjVfSe337mPu1exs5Va55SNe11ftnwwyLcsUVB73pGEDyrXLaHkJvfYEggxQsu2tsm7fnqTRAGf",
  "key12": "4DkAwvqiJVTQuKEGADmoRSqCoSsbAPkQVrjSSkzTnqJp2ngqtNL5eCiCeZqq1Yxwe5FbQWPnC7yozP2hcvwisBQR",
  "key13": "3ouyuSpqZ9ruR96m249ABF2L54s8M5XbsRiwpQ8rLQsTdaSdQhCZZ3BfWLn6qDJ8RwT1Vm3CVQfBSVUL5QZz7aPm",
  "key14": "2asXGjxjNU6owxd7snxfLvKWN4SKSsn2So6D7aF4YvScLcnduUyFrC7pBR7QvxBNxBWQ5v8pH9oMWoeXq28beh6q",
  "key15": "36teaToTJqaDzGSaz637cVW6XXoREBAkp5LyK26Hbo7pVrYpFmLZQPKocJEVupjxUGPBUVo5njcNtReYuxeurXcq",
  "key16": "4oYrAvrew6VAzv9HHN7wZ737gBW1jzv6YmHP12pTYZ1FkUoGcbPtiu9D6SpKsTnPyerpYy5HszhhraLCLMbNzCeZ",
  "key17": "3wHdB69R2nqxrFCGpmbh1QTTH5QtgZFdoTknEec2poETnP7mjgeYzCZYLPL3cKXcu5fTRkp7XmLmrV85un4DrNjD",
  "key18": "S5D9d5tgMFgBwceaXrf8nhsrNZWyWBex8iCJvvNiXmtkKm4TibQqqYmbCWGD9jP3uLKc7vw67jhHp1eZiZtKhD4",
  "key19": "3uRF9EdMTSBrAEAq4cbo2nTCwHWuM3ng9M6WA5X3ZbyRvw1kyhP51SuKUrja4Y8jhFVhuGVWmYzqFk54GJcHteVm",
  "key20": "2Wa7BCbp6RT4KuuMrQzrACcrwszBqGG5uTWAjvm3gYXmjh7PqDMwqoFSC9BXoY6GY2V5JDRwgd53hQSsNMEmJPiG",
  "key21": "pX4CXNizibUog31xRjGb6pfy3yMKgFPAdV9oTrMTdJ7awkg7xXU6Lhe5zexZCy4awgZHdPUgdAj8ww7xM1CKr5y",
  "key22": "xvdStwyr6ghmuHuydPppPAtXtgYQZ2eT8b8mTUTZhMPpqJG2t8CucC85RUdFTuATTQn3bpqHaiNpvoaJebKzD9K",
  "key23": "33MkfUJGRiuw2sX6iCzZDbaj1hcYKzKuP5tzDYbTsfo3N4Q8hcJyws8HrbTr2pYmxsSu8ngzegEemFCUctfM1EKe",
  "key24": "SaXPFTNwKYyq6ZJqQD9UJHNhgYNeNHtkyM9D8e9aCFrE35CwvsCr92qvB3j9taqs52hoAvkkgYR2cXBh1N3au1P",
  "key25": "38yo4PTF9hnNyHY1wGacNMGPJ1vRyjpUJK5Ag1wbwQoVeiz778KXXXtspbU8UypM8UF3NqDi5PKm8HKGqtYTz1Dg",
  "key26": "4yy6KYSAXuL2peCXcPu9UphM5AtJCUxFHgj9cpjUjzhcC7LCC5MjiW7quYVSJYbhTwQLDi9JVPzoXxX96gtvobE2",
  "key27": "2mrZaBPFesrxqjytD3ZgVDtuAJAVXGvgt64GxC4i9mfKvjGvhPoqzKPKnfRRdzL4r7M8aJ6kknpHcrWpKLZ38AhN",
  "key28": "5BBCwAQTxC4thosRNQta2D4tNGar9iWRPwRYwYGL8RVV3T2mwBd5yiKche2sNzBXggXG12eVgpn2EWmHEdBJ4dx",
  "key29": "XM2wmKi8NNctZcaBdz6PKNnZPppK2r5ExxaLvmCup3eqAvoNMqYyu9u86Zy1PqYV2kyaTFx4iAfGJzTuVg7133T",
  "key30": "5vTcbaLts1LWFryNPw6ycAA1AcHKXG5Wg8642skTf5wsegW6poiUftv5VzBp7zyWddruMMz4MX38kv3rHt49RZQW",
  "key31": "2pHenUSmSwy9U2duW2GieAHNBfd7K52hULauL83kxmabMmvnfd69eHmU2tVpBAa5ZbscTb8xwFu88EsiiY66FdYA"
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
