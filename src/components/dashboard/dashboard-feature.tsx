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
    "2mowzZdRoFsee178aEhZ2AcVxdjsEPqsjpmMeZJLrYYQT2tuMHMVXCPEt9b553wBfDNx36fLitAM3GUeib66Bjz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xFcry5rYa2yGTww6DjpU5S9LzTMQKdSGUMvazUGaePhUvdZsQ8hRJN9adhjJHgTpEfqppAqsh6oLjBVzp8Qa2nU",
  "key1": "2x5dndmtcZBxZn6kjfgDWxVpSwHdMcMaW6CoX8bcgzcrGFYymXJLzJkksuJGeF3rb5cM746SbbDgytKekKArnBo4",
  "key2": "npvHw9steD7sNgtjJqHixt72ghgSAHQz1pFXDxFJKnoVp158CU4CBpuVXztiKjd3CZQXGXYPWJ7YyVMbGU4HrGE",
  "key3": "GD1wccsNTU2xXsCpo5XSxcsQCuDWCb3gKXaqsruzoHPrgwBtbpiwQkMj8d27V2fMG1cN1d9s4XFQER61avUosVe",
  "key4": "nNnpU5T88AQLQaEjPJzv7AESq14FszQfKhFzDYMYr2GpZsirYVBanrpEM3PzUmpJ7hndXmES1MqpwMfax4SQG6P",
  "key5": "2jN4bVDBbBw1UywEP6YYHT9j6gC7RhUue1F6ei6zTz4JHNLmHRq9sXhrQAA9cCdtnSPJPgjpo65hrw1H6G4FFKyr",
  "key6": "296RinoiGKb6yUnGBeaeXcYtmujiFfsShZPVBrbjm4P9YyXnRMiw3B3VjV1UVDkTqna3X8N58DdAjVtucPJn8LAg",
  "key7": "3ecARE2VrRRfKM8Muu6HZ3maMsxtHQ73UauTUK8EewWdxBMD3drshfJmJZ64561e4t5Ug7XtW5hSSEfMz22SRx84",
  "key8": "532bNhc7cbJ9o6w968kMWvDuVotvV2L1VizUG7zW6TRrfCaXaQu2rNw7CY9zgfqPCyFeA23NTQC39pEFubKmSF5V",
  "key9": "4VRT8jox2j2NXhSFbickkuJGjACK13VCxnGxKGgL99RMdsjxXEaCuZHAcrCPoLQgYuYgg1zDdSbZdP5yDEfuCYTV",
  "key10": "3kFFoMvu9UPKp7bg3jjHJJhbXjhSefvzsztEdSXPggjPbxnQDQExB3EEMb9Dh1p4CaAJYs8wCJdKXAR9L9T8cgxd",
  "key11": "64vwPcyxNtB4TjQhRDDQdGTUWx2PJmMm9XRmbjjRJoBbDnuUt4LTyfuPr5GQAdoRjhV9ajK1Qu6hewkEEkpJsH3x",
  "key12": "4onJdoEe6GM1ygVS2ZkkSjtxPuLLVJJdpif9JQnpbcGeUj1f1vPGLSeQoT1feVECQZ1m64L1yf12XLvngoJmGWjf",
  "key13": "4mLqucE3oanPpcvMY2Vq2GexCQ1YmvwfncDuXRpQardZMH16UdxXaoNPbSQYMRZ7qKzpkrk8jTfkTzyuiydoezbb",
  "key14": "5MPiiAhnDszgWcxKcP3exuuE84RBh2Wvv4GxgvgxgPtJdtYpVmFo59Wd4kPpw4js4MwzjuSqwVrV13uACFFtx3n2",
  "key15": "3jk8TDgumaCSitTZr7rs5m9hu95S6P27jd7Y3HxvWUzExeXyPxhGJXZzG7s3oJ59AWS88ukexKooUJx13ensAYeo",
  "key16": "4nwt6dmWNBpDxNgYdoy41xHkQPHxZ6WLAH1NWoF2wUoxe2EEUm79wZpDetz1zSR7bGbyvnjsJgeeKJ8S6Y6JzUXF",
  "key17": "3XRudxMBkZ4rnP5D5Q5JRb3yqV6jrK6Y3XkmysnngwpW3aRsoBSAFKyjonczvi45mqm1JK8VubFSRjWod5WfGxL",
  "key18": "5pjYpjExjzazwAfnokH8PD1PuDCHJ5CGR6eySWaN4eCZNyWbUvuX73A1L3pERy8aXSTUvwTZhrjJ8rGJnHEiQbm6",
  "key19": "26ENEAWBNiQbMDReQAixPyCsyZbCrZwATuvNUGvqoE7zg1uzSVdJEr7z9iaYNuwSWNvFAx4juVYo6cBCfB8wgKxp",
  "key20": "55DX3ErPaPnRanj3UWT6by2nn8dBJa4BncAvM2HrA7GTh63aXeLB3CHSMQpB1o3G2NK1GdLNiLLhotSrepWnTTfJ",
  "key21": "5XWwDpNfxSWHTa7kShBYxm6f4MzsHQbNgPu9ejDy3s86mmb5P68onBRHbKig2WxTEVRNvWTZVQZrWAHWxLh8N83b",
  "key22": "3QEWRefU1KGPwLzsi82nuKvEMb9avwrnH5zUPB4H4SinYM4WExf2thwd8Qm6EV9GhtwVv5njsFNYVP5C4ihpoa5q",
  "key23": "2jgNHFPUWbm8LYfrUqx1mCy4cfqFhzAXjo2ZfgVQdFbdAkjhNzMKNSGtakxNEGWzVYbkBPGP8fxAPq9sogscpeJp",
  "key24": "2myrrbyWigURFAqsCFyFBzsUKtdsYSiz9WaAKstMvm5ar2No1wruqZB3RaRYXCmSrJQfTxyv9GjAiksXx5hpwF4f",
  "key25": "2MpTq7i752gJAk69a11QTEP7v5eXmWLtDJbZwDfek5QLFrYtTFKscMAQDpGyQYBw9Gc1DuHPVKLuoTq3HqsRMUqv",
  "key26": "5fwyMhdr8CBzdmqsbu571py2rDRmQyqvXen8yvHGrkYD5kZBSMzgD6o2EFNeUdJ42bJhgivYxLWvPw8KRPVebn7",
  "key27": "3rMAjBV94BNTY5sL6EPkwhPHHrj6XnAiWebkyvgCsoohrADXctBBYHL2tdyBQJtZq6F5R2wShVWEDK7HcqzgYb9B",
  "key28": "48PJqzW8qCkCfyqyUzxNLrkiDSkDcSP5UEM8f9UmWtd2gpjGxaqTFMcrxmp6hAb1xSknHsiLeZugPMw8LbnXuRpn",
  "key29": "3KKKTd7aaibFe6aSYp2W8KUpF9PhgjrCT6hjTcE8k5Pv4wj2CNx7c61TKSrjyziAmct82PHtTNDjqNBj7nqVkwZ5"
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
