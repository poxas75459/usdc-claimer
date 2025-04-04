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
    "waWuS9BRXdnvaQ4n7bBBKhJisARD8JdxyLx1ZYKAxk3FE7eQatuUsrxRuyL3VxrXvEYyn9y4DnRpwYeiHYiHCDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hyRYxeFxUd7zPcbfXT7PsZbV1zzmaVuZXZNbZLc1yAnYnaMBFD31iQZUboUF3dFRWvznkuuqLX52GW28gXM8JhZ",
  "key1": "4FjKFWqmKdBXtBEC5dB5jYKvqbTURnLdWyYg3BHSXhAB8bqAcavCNMGaYLpxXqTMCVJFUtXgrvdsZnsGGALgcCjj",
  "key2": "3jB9eWdT9vx1Vb8hxcByVw8pkuWpEscgbX7iB3p2MnTK3GKg7vpwPWWUbhd8eiqyyJ5DZ8czA6NL4nmQSK6iuKDJ",
  "key3": "2g7sjWyAePwLhUqwVaYPSHyw3uLq6rtCyrPThGDtE4jgt2YJtdfRR9YnKWfoBHrFS6yZiVLmonYyXMypT6P5BCnN",
  "key4": "34jUgPpZchJSQYfoZ8mWMBqouaGLUhKAwDPurdxdErrJj5RmmYpUiiHS7PsXLmHrJHHFueaPtGZ2VL3Qw3KffLQr",
  "key5": "2uMqcTsK8ovnBTADQDrqNEuAHQyCDuzGNRHM2are9pF4oKMNc5KehwpQKuiRwiZAQJ3q9zks3HRtvQMMjb6TXRag",
  "key6": "2FGYzi7Kn6YyKxne7KrtMYZUVftph1x4v5Qs9CtKD4Tyb6toWknYyeFQj8f67MbURwzuWEZYmP2icF93wYwL3owd",
  "key7": "3TQeqDpZRwrj7fEDHrWhj9aqT8DzhW9STKJhgEU2SMbSEQeAnDwEG1hRuQZ7qm3s9rbrdGT3oXfx1oK5JhjjhFtF",
  "key8": "4f8sg3L4jtWa4EUXCGhTyBKckLBzpD65qo6XfwfyRTstEVpGX5JF9EcTAVN7VPNfkbHKyJyS4v6vfdbYZP29y9GC",
  "key9": "cwrbsD7LUGimBZuJmVz8czXfmokfMwffyEyrsKm4nASsz6jkprQ71N3MTUHdy8LJxC7BeKM8AD1aXF6sgXqG6Fu",
  "key10": "48GXR7BNnbF2751gFP7wwXmZ93JYqcQmjfZvSwVoWZqNavrpxMLFLTTRXRzvxtLZ3s14iDEJ5jdWU7iCPUBjXBT3",
  "key11": "3eyCmKUDXnywrmMHBL6cbpb3qJ7srvfYJPvpMopbsQk7FFSyNuy1weABv2TJUfZzy1mSxDFuJEMUjz41ShCZxr2E",
  "key12": "3eCFuavW1jXHzjwjsG3bmSRgDmjX2k8GS6nfv8C7ySo71XK7HBrnYpGC2RMH6dTGbnZQV8rswkgjbRpskKmugVkA",
  "key13": "67AJki2PihhXovev2iJbgxSqcx9zrKrDvKxJ6gWWH9fGdM7aqbAu5ea3B3DguZpbCuMcjCDeT6mUeBfED8dFdSY7",
  "key14": "3Vdzzb2JXXL1TRyd2dAjKFYrBSvDPQwKDehSXQ2YFte6WhghFhcPgCqoxx6gGjby5YRqBdf1D38iBZjyfdAxbrZr",
  "key15": "3pMk17615dEgtmA1vxae1AKshnjf1YUjKFV3cJU9CLwd8suF7NkyNg5ZiR7C1b3hKR1jFsREFniKDQZBNS7wz4aG",
  "key16": "2NYKf99pMqT1Ux4g5Y8EubGYBRpZSiJ2fco1tfDLstY464rXMyPu9Xv5vrnRjpkNNmhQPy1EwuFfeDjGHGfAfEj5",
  "key17": "5jX3WM6wqVPvXY4QraoYPvvQah8KdrWi7MizFwnhxSZF8VxXg2rLF5tSpRVNvGSGo4V4aTvEYWAkZfMwDgqb4c3C",
  "key18": "3VtrCmCCxjJiYVAx9XCpPZeZv73BxeZZPhSpbsbNXoNG2RmN4PjszAPEnttuo7ezdRDvtiEK9usrKY3BX7de2AtA",
  "key19": "5pmygcbCDRiTXGfNM5Q8kyLLdPsWhfqGu3w8yeDsjwAAGrq4diwc6AUwNQp7KGwp6hPfQG9jAoyq7X37vnHSe4Sj",
  "key20": "3T3NPEX91A9vTtcgT6CjGvQ8NsKCvjg8wXDgTr4Mgitpu1w2m8MwPjJTG7j7xYRVeiKHtEtwwuAashS8vJxnpDM5",
  "key21": "5Xe8FamHxpkpiVf6DHBDwDgP5g3XDTDe28Q74ZHaqi6vpRKKgzKsEZ2Vjh66zZAhAbA9sRnGbRdD7J2o37egq1oS",
  "key22": "3kkVj4yT6gazBiaiM3WUR439dGPGU7PSUEh8T6Pn1Px4LfHjLf4HysExBwmUzPUgCc6tAGJgorfpmmxGvPWMXpY4",
  "key23": "5p5tDVPfD5vZF7zpvrnGpkjNnd6KNDRmVnrSA2jFwL22qm9Hmww13bXNvLSMmNoGyGYVi1RmtYkzz68bpfVmHwuY",
  "key24": "56fxq48QDQ9snrTx8UH2maVhjjtJ3kovH9inh5sbeP18fy8yfGqjMcn7GwVAC2MbSRefFZziQSd1qKSFyYcToYTV",
  "key25": "5oHwfE3n9bUsr3Z6NMMsCLhK87VodL4jZ6iEC2pB9nQLbjbA2oDb137QMSuJaVTsFHFSjkfW5NuqMdmaKMzyM9s7",
  "key26": "PReaEPyKmDQWCpvKDdnLS9CLqcyUfLAsZG3cLNwMLa2VaNbkyf1kYC3c5NV3VGpT5ntd1nna2mQ6Mmwd3EcVXH5",
  "key27": "xn68kg6mEiVZK8oU3gx5KzYAcXwWAdV48CYz5vDbXgjSgn7jWZ8NV9E2rn1qJ25HeGLPoXbkXphRWP5Xqq8b9yK",
  "key28": "3MY56QAUy4HDWRrnnKtsWT1eXDv7h6V6No2Y4YxfToqbQwrmD6jtvZw9gEYWkzVQAh76djW6BCJWoKJq32EeeVuP"
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
