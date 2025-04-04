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
    "2ZKSjfKhRpwoJmbsBRd7why6Zvc4Wm2PzCVmArPLemFxrARNBAR1xeGyb9g7RPVX1q485o7ZjqD9jZ2MM9GeM2ih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "639ntAfdFKMAxCHX9gwoh8QcvEyvRWyXEcooap1Mq9TXgBqFdbizbm2t6CEmivjtAsGVQG8cP6YmZESwRZvQLCeB",
  "key1": "3sHcAShcKnJzXJmPjtqdWnqpYirx8H4d5259D1ZBJd9qBv3qtYdN2hyawzBmP6Kngiop9meYzpooWrXwoLbBi5Jc",
  "key2": "5Rd278jzTvgPtc1Wi46W2QbyQrV5rhLw2TDi7WXzUDZaFzHNi1fEixexsjxH1vhhj8eSp1KqgEVWxMX48L91SEKJ",
  "key3": "4jbPVaVJZeEaHCLMZw46EnhvnZSNZQjguW9zozwQuCqtR8XPaN2KX2vkn7FEn4tFCx9yimgY7CKmXaCnUHqmxdxW",
  "key4": "54MPAfLm17JY91P4VgxcA8ym319WjussvfwSuWE654mPWTcfcuE7vkKcFps6WBG7qvJsvD2B5ooxbG8W1UavxXwM",
  "key5": "ZZSAFZHNoEKexZbfsgDPUpRi3AQmGAq99shtj97XKbaVQwepnnu6Fbe87DAzs3gzT3zWusQc8TK7nYMF7BfKVBs",
  "key6": "37e55LmnRzWXPsJTXp8aWsMo33Pph8icuxLT114JjH6enmkhaoQpuCF2YqQw7nyzrLJacBoaaMJ7C8wxpKFpkPxS",
  "key7": "bGqu5bfVUnBSCHhvEDLY3arTJqqeSwExkzHyKN1ES7AJaS5qDnxiNa3vNQqEHVfmkB52LwwFu3sCcUzE5n7bm5f",
  "key8": "EaY2ByBrRWvRq9tCCdfB8Ra5gZiww59womp1xZpmW7LdshJPhJdpb2MQAUWLtTdNAqh6phmagsMn77KKFXEiDgp",
  "key9": "4qu3gnuC9BvaqdctdmdS5oLJeMU8FQxhziqQxhePmegcx6BFQbk6VdMAN2W1fh3yChEegDAJyHZqB5H3M9BUVfYK",
  "key10": "3ce3eKwn5rfiLAEWHePFRdtjhGnqn2AN6urztAoRBULsaSnDnjvbwjKCt3e6egn8CofdZ5GN3ewHXNLrMhKUeG1L",
  "key11": "5gXfrue54hFavbDZd6f76pfUkyKi1tN6cFjBq3TyofzCVu9ScHrb3YSoqK6hihuCkJbWz1YkkSuCi8hRXdi32gT1",
  "key12": "3xiHtDztVqNaj1kiHfRhGVRnWMBLWXJzbXbD2QYwHysPwmCW4F4UkVQPxvFm5aGQMxSGwdvrATCo1cecqPEVbfxL",
  "key13": "2JMqDx35DpYq5ViULvcNu1E9Wzi3WpQtCBEtZkyCZHFzL5QY6tDLTgStECVbzHrN3tYMp17bn1tuqjJdfmatx8BS",
  "key14": "3WPF36rEHxJowSvCaJPYEbLuyMuMKkdRySAFNXBktk5HFUo8ENiTf4jfDzPQyHbCMzN4WNiqvuu8aKkLAVNUmkaY",
  "key15": "5DfgJn3CQetM27VWCZxbBAakAvJsoF8d7z59La6B8SLB7aHJJYAYwSjoe8BdS4s6BX3PJDQ3p6kDcetzcxxqqxW1",
  "key16": "5gTbgLNoUmxwAxDfiux8zssxrjHhkzt8N3ypDFjmLHb1wniBqrvtF814kXibrs9AwannhizEqoEmJyUgvZ2wudnB",
  "key17": "2CtdAWj3uh4iQiddoFcNCspDGLMQQJn7JzBNRWWhpEEk9m4Dju43TGWNGqeJZdThk7cRsgFZxRZZ6UN77EdL9ENV",
  "key18": "3gEcM1QX4cXUxV6LV5p39VS8grqCUjpd6hfCwjWxynBGdFoiechrXZHRr4cb6n4PJJ6PVw8B6ycoF3hxmdbtp85q",
  "key19": "5UCUzVr2k2QZJqJcwnYjkf2SCsTHe2CjuyXya7DjrqGhiSfeTHLtjLGKeC2SzRk4kEwfUX4g7Xb4qpsjkBVuFSeE",
  "key20": "4KYvcm1APnKsZq6XxwA25BLcEyvS6Dhme8d1SsWhqB1zB4tqYyMz18DPXHVQ6mSD3PECxh9bAVTyeb3DH25Kenss",
  "key21": "2F9SERR29XuwbRCEc3siJ1mmXL3SqM7n3Y9YdtYACZtJBsSeCeZMp149DPhmPZxdSubbz2eHHtarznWkUPaesJyf",
  "key22": "3ozvTWpFveE43qHDNyCRqm9gLpUhTNdAa5yReE98qE7y7yBL2HAtPQz2E3mFHeRBo6Vi1HWhQZZ94r41pDvH7S1f",
  "key23": "5ws79CanBhLCeQYP3uvQsPYfsD93M4gj28pBUtQaaRY8yNj4bsnEYm3xfayvNANkbUYKWbhmVq85X8NR1BnPRW67",
  "key24": "RgqsMtzoZFfS3MJCucHggdXNHKpHwybtie4Ja3qbxUjYiuT5C9bBbHzA5eUgGmpEee2L1dZbw99WJaU7zoKquyJ",
  "key25": "2dhBnLn4AHRHRwKeN1LfXJhuUXE3KUDTTHAaJfbD4oRepXRb88LfC9MtYxzHhvCEWhc65SG5NuKbvd8HtZwiU7Dv",
  "key26": "5CHRj1rxe434UdjpaBPbK1dyVCrEc2wEAN1Wo5xJ73cB1M9U3Zc4WvNcVsrn7hFEkGjRLCRE7yt5YdePFXXETi9X",
  "key27": "2eZxZayJYTSwJ22ZJ322hiiJmx4ccfnyQNxfZLjRaVnbVJJyM7dJEuRdYHRuPdXADHyCmMzhrxSVJ6uDRRQyCyxJ",
  "key28": "3Rj4sSMy9cV1Mtx815WGymR3czEvxkf7VMddF2KnnN8XR4GtLHcuC8gPejQLxqJ6xTNh7ytoARb4aPcxVQSpaX1V",
  "key29": "8s285e4hi1Dgpkttda6AK4jBWFFA3VAt37Yek2mD44soGXe3n2iaBF7pcdPkDiPQiGLEJ83atKCHBFtxb2nrHhf",
  "key30": "B4h8chAcUd8EcF2VT29rU5ekHCH5kp3jmetQ5K5BpcTrF7m9xZ555yRa5HdVswk5MuuZ4q7NZsK9yo7mCEoKyiB",
  "key31": "gSZeRXF6EUaLBsen2GtoY52W8AeTF6MbKywVu29k1Co8kRXShQ6gZQiRb3F2CUahbwBoE1FRPZ4Ub81Co4ZMzKx",
  "key32": "5hBVw4UY1ys88mL1Mdnwc2XGRWVjhDQZ1md9LoTzefobZ4q1f2fDYbfogScHTw7xeefqBWjvfUkDT9NX5JxhnAug",
  "key33": "4jDXmCxjxZPhzjRfhAyfj6Yqk95zYoG5YSYB44EdnQu8x5BkHaCP8spkbm8uoiq1fScu2YrcaHzDsZoKiPVLZShi",
  "key34": "w473R7oZ4NCQgAjwMAzJoahBdccVLsjej1kJeZ6PyufoiAkSjbF17AYyozTrbc4uxQj6pvLirydchovMuMCRwmj",
  "key35": "5y7ibx2cAdYRWrPg5nwjZDSJ1gdxy9rGFrrafstHMrecnBeWsts8a3YeQMBKE1roohsKrYEtGnM8gtERZbLbtM6T",
  "key36": "4eewkpUVnEBqesaj4XoUqfaLhTFa9Ug9KcSaQtB42ESJA1whFJyvDDkyc4HX4usVnMEX9zNJekM6VHyF1XDrRDQw",
  "key37": "44X8NovF6wtWDqxXdjag6BA31dJE7M6Pq6cXQ2Gj1umTG3wA7oeyXGVxYrnmNxbdm8oTkSsjf1P2HpTLQ8TBXFPQ",
  "key38": "2mi8UzpE2AT8Up2gL6sb4E2rnqPTRyiR7jZiSjBK6X2JG2FUAM8dB24xHYsKYzqS4E1mGR31Cc3n9i288wKMN8Yf",
  "key39": "2tBqijJSC6KCGik8Fx37yRaTxciLtp4ibw37SMUSDSjQK4x1E9RhkgoqvjVfPdLHsQpLDQi5DNHsKWpFGNcMQN65",
  "key40": "5rtpYkd1LQDkcL548Bf4xfw63pavddNMVNvNAseJjpZrAutWBDSeEDeeWkympRD5enGryUFJtSLhmB9dKUeAb4SL",
  "key41": "63tGh392s48MiXd9xtN4EjgrYHmTJMQw9dKHgYb97xTiMYxSoTHmYm6zodjLyvRD4Ec7zSa9Jip7M9CH42Ysvopk",
  "key42": "5LLRhYrmseX4zs8zxP5Q1gCzVbnmKr884HvbhxkLmeTjLfCsKLFN8tTytP9Z5W8uJQiMvHgQvpjnJo3Fsuv3UPuY",
  "key43": "2opPjHwC6DLbNuNnHaojMY5og267sSQNS2XsWhC1mLYNzhnAz7J2ftwRnqmqKRf6pYJRBAWVi59zy1uQBtNGqY2w"
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
