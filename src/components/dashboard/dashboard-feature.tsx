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
    "4WhBmi9b8guGxPapCX32hngWZTzWz5nN5KFpf45WHourEY9JFaW4hpsBPFGJjqacXuWVoc9YiyjLjr4SnPz1P8RK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WKbY7FyUmvNi3xEqiQ8KCq2bewkmmzZ1qsaxNiyKAADZLKXJ8EcLvofx55pXZvH2WzG5sP36pqA8rbRC9N9HMMP",
  "key1": "2de1GkWKSDw9o1S8NuVC2n5AY1njBceaTVVWjCHU7iRAEqxqdgEF24Pvg92Eh8uA38yTq3XcnxUsh4EA5saRK6SU",
  "key2": "5qyxbanYeftv1CECyFyNRQ4dkhPPd9oWeLDmoRij6K1kwNCJcQy7zbngkyV5fib19wGeRF1xc8Fqe1a6WAqNTTn6",
  "key3": "5bhNhxJQgxzFs4NcAjABDJ3szQVnWCTxkWPSHXX6Yg5LCZJGqfgGMAG6KGuH4zsLy7K2u7hprDQ2bUAt2xg28hNS",
  "key4": "2oEcvfhqSwzRGzCyCGH7KCYkgbytMo6VXxLAkzEKeBjX2edQnQMTc4hv32XJpgmPqJPNZwb7QRGoNpC6TZXdZ4ws",
  "key5": "4s98fM75KYW7C2VBrsXV21vQc3r8G2FLajzokex4i2DzRiSmUNXgPgQBtbd3nc4DoMz8DwUZM8vkGvaPH6ZLEoW6",
  "key6": "5YLLEG4Rvr8RZdEWQ8dBqbaJf6TjCCkdcSksYKyp6K3CTWXuvCTgUnFFgjjaow1HeNBeMovR66kQYCVesVRqP8wN",
  "key7": "TQ4ek9uiFPmUXHopk1UmdRJVGWefFZfxnBAqvjZ8emXgKiaDjmJL35cNuaLhmy89U6tzFkXzKEfeoaMxoXxDox3",
  "key8": "4XGm1Mo18ueAXyytTE5kqz6QfDwxRJxVNkZhJUabXie3TmKm1RKscMB8ML8Lw9tWEKwQ14mkqqBeHEpAcJJMXXRf",
  "key9": "4iDJGoaNmL2bhf9bcpXknUUKrurZRntGNfcBTgj32FBArWMAJPjdbvhX7yHfmdjyKpwBWHB8JCwYxY5cony2TCZ6",
  "key10": "21oz3z69iizJtMM8cZAXTbDPaPA1wep8fbkWoFjZmobg1HjPkBYFGC8V465AXPeFdiLd7kVNvpERhMxKxBxQxZhs",
  "key11": "66CFLE8Gcn9LJ5KocefJ6ghBLY69NHam3cFX35PUoEDEhpiXW1sCScMo9e1rk5ivQogBmvnf269J2jhhBPAiZBDM",
  "key12": "223884AQS3g3aDHVSc5s5YYuzmpB3sxmmvm2Ss8NhKTnyiSyHadNv5JDdVcWEj88ZLmiUrMJeuSzmrXZbvALj6HV",
  "key13": "3fg6Cje23BXrP3ev6yWCMnVKUoyz91dLND2tBgLwULesZ8WcGGvYdr37ZGgKJtVJurWsiwPebeGdMtNyTcQpixrW",
  "key14": "3wmjaNiYogV5gyKj2it8muNFCg2FN7Q2cBhsajifdG693wNxGCtk2zpXCpt8bAGtiuJaENhE4nwD7LU8u69Cnmv3",
  "key15": "UT9Jib4ehNw3wgXCKdKSszEZuBTVRrzWgKgpEfYF6PRz4xq4UuvPV6y1Ytwk7HvB4kFkR2c8aeeRvn3XbpYpV8j",
  "key16": "yiG2D8tnqZUvngeAabe6psqVCKwwct6zYkLT5naGPVSsyqz6FGkg3csCMEAEeAzq7PvJihqrSNSh6CFJQkhMr1z",
  "key17": "4Jr4F2yQ641r1MKDWoaFCFcxTFJZtEseT5RjHmDEfPxa4JXjaqenrMg3wsS72C6UyZrxTxFKfcqpfEooSyLLXWbT",
  "key18": "3LoVxHSQRutRWuf3PEL77NbTSR3sQs6VTiVgQtS1TdCvKkTJivtEk4ob3QjdEQ9H4iUpLGJ8mfjF88JK47xG5Phn",
  "key19": "547b2C39Pv8AP6HXW6zcGbphJ46Z3FC3nhmKnqMU2zgTqvVv9FYS5aoEiJ9ZHWaRpGiSfpsG9wsrK4ngPgfHd1ag",
  "key20": "4jrTAYUqsuN5i7LhhiDZn6Uj2VNg9Dhbqda1mmy8HC6bhT7uELeuBhpF3whJcsiKAMDQBYazyG1jUDaBt3WHCKAR",
  "key21": "4H8XEZfwdQryC7uEVqp8XRF7gxMcbYGAwTFg7XfGMQmcNbteFNouMiaDzdfhJkBDXPZUtNocfWdsVtz6ffi4hdcY",
  "key22": "5bX2Kaz5bvegfmvrw6iJL2Qwn65KBYWW88AgLYVoEJHMpdu2UGPDrg3SZnQd7opL4ZjDbrFScVZiauHqEqoyKZRy",
  "key23": "3U3TVCRGMY9zZdLRWUQaaeKAyh9zCT1JKtmo4Bq6FfFgMCBcmtcrDsFB1zaLsFgz2thtYYQjmUQEcsQhPDFxy1dA",
  "key24": "3QfV9SpuBym1AGexBk3UVbmtDpnSqFXT91qufLuKzjdM7gZJbG5z6LByouZX95uiPnFjF1dErtSrH1UW7QxnyhwC",
  "key25": "QqvNYbQRgC34BBt679csdC4tJC8wGVBGtrzeAT1GbaGq2BzuA5UBtKZKU6bXm2nNpd1FKeFic5ypHrp3j1Tcvnj",
  "key26": "3bhXR67zwQWPNzjZxmqjzYUdg58zwawkjSMcuwPjqxoKwyvujRnANiyd6dSjrJ1u2r6zuxP3Xax2KezG9qD7P3NW"
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
