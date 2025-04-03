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
    "Lmjr4coMNE6f3yb5jsKWvjYK8DAZ2ttGwd9PMV7PzJB4E5K6ywC8nheHwgNiPGRrrkJWWAboomEAdJWcUT2U1gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3etmgVJsFoueHRxsMaxnnuduqQE7QAz8rzPi3eVhQxc6yNLdZZiF26J37csgASm7D1LvyEufZVXQFwu9dswURt5E",
  "key1": "62tUrivq5hDPC7dvv8PiwdWNtvNqpTi9rc1PXxivK1vAHNFscmuaQswoVkULTfaN1ridjasRF3DAL7WrFuf2qtt",
  "key2": "dc9jnv59X6qLWEcJXEjbFVvVAtxPeGqoRub5U3Q9xVpKPjcoer4bEbrp7Z2dofRrgtCqqansAAETZjjmbYgU7LW",
  "key3": "3nwXYV89NnHNmW5aoYSQFR9Z5bh5qvcMjA7HN5W8k6TcF1RuUqPTwqB2NhNjXC3nKhReEwTK9H2aPmiqYmsgBX1j",
  "key4": "4s2eR5R5w3gnWKomgNfcZYBD2LtpvwQBRx84pztwV7Djzgi8uFRbRiJJZuDRkqBFY9y7tWb6hHdK1vrfziEPg5KY",
  "key5": "2GVXxp4HG1oEyDnMySe7TRbnP7UNZXhBJt9sJrqn7QeTKQmEC36JXACSXkGq1U6zLuh7k1PeDEBCrtVvMgZ5n2Vb",
  "key6": "2V7tHZW1f3Q9VfwP3qMvcmeadJdkuR77cUdZbUBbgZjjt9zL48WmsizYjPbUVp3dg4WWDxB2FMy8AXSBjQYYsRpq",
  "key7": "drQYWwwKWYwHntFxpbCL3gXFoMugRWq45wz34oNeVwGXy7GqPC6P1HYtpqUPAT91WAVUmWTnUaokrCEJxG4TBzc",
  "key8": "26Ufqkbdv3ftpz6KZAjDw94TzwKLVQdRjpKJVscfmLgXmVv46Yg32FQiWJmnVxSmCTLVwzsVm5dwrYc3fQPPajxy",
  "key9": "2LEqnjjiqss6TqHSHQ6v4A4JRXL38AgQhxBi9iPDqUhhMZpHihkimMchArRNxtS5hbEsDyKDZpQHXae5iTXU2qr5",
  "key10": "2jBU2L5HQ5jjDttxYMe7XeneGLSv8Jg4QXyazD4CBtTMBC4W5LiounT9R7Z5oMeNVPHjyshcsVgWpuGuFx9RvqvN",
  "key11": "5qrkKQbtZM9qqeGhvgmA4KRTVVFTD2HWpXfJxSLWBksQRCA6seZbQ88QRX19xk3RrqvwMPn8XjPP7pv89EMmGte",
  "key12": "JJ8ZaEowNAAKowvK5qkwvZ2Sm2Gd9eHaPXb15W4CDcSQtYQAjg2i6tHo6Uz351wowP4sVhPQ1A8j5abvsvhxngm",
  "key13": "4Cw21qYwpaxSh4HVP64jxfJgk2T2FELnyWnYo9tQQFFqUPEoC6DjPd8YZay4xMMT6jb4HDS1VYDDFcGBSKMjMc6z",
  "key14": "5QChrQKKUpDuMmg1FqwxFT6eTFSJdFNF5ZjFBwKdbwzJxWwZeCe9UksSMxJvn3Mct9HcaKEJphjivKBweyPZg8Hj",
  "key15": "3cZ6wBkPZ7NvBYJKxA2wVaMnDvHZGbEDdVkRcZicayiofPSi98tJqN5m74KUNMjwMsJGpv5vRipeNwEohtMpdM1U",
  "key16": "4bQNw7jPPzamY5M4WJ8wkqs9xmCRPsGFsT9GvmFG49kXtzXPDLVMsvS2W72Hhe3LKn5TkMprkwpzR7j38CThLd21",
  "key17": "5o4KymZiRgKSwGfdmmY8sVYcx31KfzgKGn4fufBj3QXysWs9eUdUyhaNr5JsCzTwWy6xcL6dvmunFCBfB25jc15K",
  "key18": "5MNyfiRvwhxTKweLr57kTf9qtP73Je52ZStQvxqTvFdPofEcmdUbJD449kjQMdsWpyDqi7A3aD2PpjkKV853WR4U",
  "key19": "5RHnsczxoBXbc7kzHf5sDuweZJ667J88VeKZK1Sf8ikgxCa8Tm5sXbBFxxuz23QJJTY73vbcyLCMSR1tXNdHwr4i",
  "key20": "3wpDCJT8Km65vfdAwJ3fmWkRCHiy8GBp9XYypECZJqtdGgYomWYvQcBQbdNjYzT5gSx8ZiSFZM37usKswybEsGwi",
  "key21": "4As4hNbiLJ1MCgRQCeLvjkHMPay1ZzJg4vQBztZqFT92SjEYFezhMz6FqA94pDNiXeJgAHKEB7CpfTyw16RTQdgK",
  "key22": "3kbM3PfQQ22yCrVTnkpuyyab43d4evWZ2JTkqUgzGxeraVTJuY3QQZyevYnuAS734jY9y3haUxPpbS9FCHfpMWkW",
  "key23": "5Fpd1BzFvuiz9YvwPBKQLdRsBBoNWcQLeb23PYNDyesT7oe3sSbcdGeJRtyHqgcv43FZ1BTSjM3GTVfWf8NFKA1f",
  "key24": "gXzmCYMMcMFNECDySr1jToPWGDodepHiWmQmv2XLBBpitgoaUYBqmKRDdxgQ3KK1vFnkvs4c6Z3rjnkeQnWtCqX",
  "key25": "321CiAGeH44oBVaiDr8DaeGRGHKGcGqSuq4s9xn8bYjhAVzhzirzuJq3p3eV4hA1iA7qddCumr6wKQKy7c2CBKts",
  "key26": "5SbzL7PG5Ev3UvVrmfEwHnJQc2cXnvR89CDAijp79Jnt4Vnmx9m5p9NforAc2w7ooVoq1vk4sLBBNvxN563ieNhW"
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
