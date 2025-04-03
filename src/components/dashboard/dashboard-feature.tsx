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
    "5pPbMpeWQwwnjQQ2q2fdFinG8PBLmSit5DXKPD3vhMvnmbdQme6JNAuP5NgJjrPYhjbQp695oJ944JMqgQr1DMZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4biJmV8voQcr46C4nu2fXZ93R14U3NG2g44iPP9BSqUcedoEqVScYGyny4v9vUkUU1BrNropwNu3fA7vQ5y1m2jd",
  "key1": "3sVt2KST9g7BY9rw5inTsmX6a8fg2mE3z9KXzXQkNiMfRPGCmjbu6nujUUZn3x7xFXNapg1N5kL8kgBYqEdndunV",
  "key2": "2kEnKuF7F5mMumLBdRNrQRvNnXe4PDajMAmFYuv3Y3Eq5ZPeYuUnRWEJW8KChD4MmJHffV6GVzYRhMnv9sG8FvYU",
  "key3": "4yCfWzEqh1UJyZrz6xgMaULYrRVqwnxbZ6Pczp3b3bQ4M9KkwmeNTHZxh4hFEFtBbFBiSAVjEQRmfVMof25XyKsY",
  "key4": "58nuKCnYFUqY8raT9SDw4ApytD3ozqw2PDLMT1VBazNJsHJ2QX17xdib7PNharoVDgVjaKfZPwPpRqHyLKkrSDz6",
  "key5": "2DGQmRGkyAhYY66pRxwYrT3hgawq25DNqyQBpLgXez64Az7WW6syEny3sCgdDnzKGvjpsqsJBF1a7Dq8omtL7kYi",
  "key6": "51NyF1EP9Y1T5t36vti3hCDgwH7bfyZsMx9M2ZbjQh5wHuZ8X5CSnTe5779EF9vmaCzM97SHfKkZnGGP5KiwmxQC",
  "key7": "3iScPcYoBsKBy8sCXij5q5eqAuCxG2LApuJFAgbpP3PPhYWwvJUvxMVkoXuWkp8a1sLpbdSSoq7yYLU9AJJS5Zhv",
  "key8": "5awvbnrhpsJGjvo64dYmxQo8i9pn9DhBToxfA2w13vueKJEXdr8DAtPePmrQHC4h8W7iW89RCQzVgLpR45Hr51r6",
  "key9": "2AWt3Zy2pbd386zwVnsNVT3EFze1rYcLLW1291yh7ViRqPxKLJ1ai2fWHL7YTJm6X1YjJmiLzTRAnUpnNNU9hzjw",
  "key10": "3AC9zaa9y24LFgPsV29YZ3e38SZvNxtHMABXdkVTXSKhY5AWHbfKgmBK1nUuRRHVb8RWs77ereFRH7ac9C3HFmcN",
  "key11": "4NAcMfz4BMbSwMKe9k3J7CT2p5XyNHL3g26HbRxGdL1FtC5y27ygYAHHFEwy5fTKyY7VWRr2LuJqHHqqBk4tMutg",
  "key12": "vzYA1hHHBSEFajcQZDhvVv3farL2uPK1FiiEZmq2qJdcNKwEuhA9cysoxcV8ejWAEUfXhZMpnnMb2LvuuhnsB38",
  "key13": "4TSTNCrP7C6PNUY8tuGTzxYWsJXX8u6D5TnMF7jN9QnPY7rgF8Ai3BdfH4pPAcpJJQuHbjK9zJgemuVdcv3WBhwN",
  "key14": "39Ur9zrkcaStMCJsxZFivmCUF3FiQyzcRjtFif9sgoAS5unXREhKbBBPYFNJjm6yziUkQGGdcdfKTvLNrGm8ZTBK",
  "key15": "2SoHahFzyZMLyGz5XA77S94hnMWQTVy6VCM2jUHHqTKYSDAaPBPG7Qd8Y9cgQyXsYtbELAfnrTW6Lcxfs4u4A8bu",
  "key16": "64M6y4sdoyxKp7sPbkrFcc6DHsajyyZ9povJysYGy8pPVBY6cx34vMvzsNe5xQNC9bfDc62TGFzP5rQdCxkmdFmn",
  "key17": "5kC3QvewDdBjYDyFJTqPPExkrq1vH3wVDoDhQ29WaWxSfurBuA3a1xdkmydZECBydkmQFJy2fDvCBDQFkcMjmXPp",
  "key18": "ednJa9srev8i6YzecPYE6uHeQ5HheiJgZu1v75nmX8tq1PdSZc95t2idBL7zrhyAK53djejG4L21JrM4mvuypJz",
  "key19": "2cbYLmm1fp656uM5x5QmC4CDKAyr876d5sQQvU8rxHZ211MfmNFXhp4DC66uxQW6bs47DmTScQ7BDy4z6nVzLFba",
  "key20": "4NkbAcsws6KoKj84UdSDspTyhwbsPGaAVV2uKi6xsQgU3T4n3nJLBHE9damXkessjvZqNrXBJSVwAeYqPYdCNXfY",
  "key21": "57j416g7VJif4ySxisUyXNH85L7bCHL8dJhgSCJPU2jTsbv797gUwLT9hYN1rMcSWEwJQwrs8fBpFoCyp9tUA4qg",
  "key22": "2tzbRf86jH8YTGpXS9oR4Q4ud4Ek6scemjgLpfsBnCkZSqb6vNzkaetZcj1KYcTZd3rrVxAy7bVqsRntLV1UnG9x",
  "key23": "5m8tj9CWYwzx3t6m6Sy6k2VNmrTcPdrkEQXxYbB5khRK8WvSfBEvN3W8K7h2z3ZwmnVqdW5Rz1dXVKznP1aspaZi",
  "key24": "kDM4ffNtJ6JTASkqrRrGgRgE6w9DkaCAyf6GNHimS4ugpL7N433bRsJE3apsv6kYNn6pAHXDVe2i7TY9MUs9Hxy",
  "key25": "rMv8Y7iqmYfg6EYJMVUHwqeZULTexeHsuTDYNcv7pWtQmpFjMZfhyTRWVuMFshfUV2qB37H9tsYB2N8X9DRnWtY",
  "key26": "YbfD5M7ZaXZ31fPoKNF8tAy8zmygVkJ2xsAvPP76jxSU9rBs77X27NBuFLn4rLATAbapxa486hp1CLN1gYfVAKP",
  "key27": "41u7YLrnaM9k8oUGMMht8x9sK4bbnYMWKhXkcfsR7vsJK7hsi6bQyvanSfiEFcBGeg6Myn2AwxU9ZUSLV5GbXrEX",
  "key28": "42reaakVkcSEaqGVVFbazBkdQ1GViKDUX4bAGU9zg6VT3nQqES5dzTJNGK9dvxEoBZ11jcAFZVn8GvedvE3QJWfk"
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
