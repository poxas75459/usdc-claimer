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
    "3ZtxnGP3U8Kv7hPTnKcnQFsNGu7AZP7JEBHuF7mgMfoSmKntj8bG2taKLAXZZZJSSfbLvjFhej39mqWZa1XdT9NX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KnXUcUeji2fMtztKdHfvGGE1TLjn148YuZ335TxwmZVKWkenVw4ZLmLHcTLcgjDVuPNWKVBMjjvqDpRpB9YU719",
  "key1": "4xkuBaaQmae2m5rvS4oLfT3L9tCWoxh9KkuW9SSyXwKVbL3jR6sCBtefJDrz6M6HMVLA6NvmHckmVxHJqpZTHJN7",
  "key2": "4EQVFmGbBLPuPzRzgKsK1t6dahhQKYNCAwqvjSYYGoosXL38ZjZau3FwmpmGfBPCuTuFNmpGUbMGjPHZgWXyEWo2",
  "key3": "52RJsyg7cShtvuTofN1LYxb31FK6LGgt6nBVJbeTKAg8unW6sKzKEu5Xdy84VZS7He8k5JhaZzd5ep7ep6W4M5Yc",
  "key4": "2wMGHZUfpJd7AXNNy3yxkJqMQPJ413A7HLq3D1X5D3pKA3kxxCvbpaNNWLFsDn4ZCNc1TBds63fhixRBrgQtpR6G",
  "key5": "gdCq3pe9bkQxu6ZBHWxxnTZTCmMqam7P67A9qkBx8drVJuhQPZ32CTfSgQSLHkoY8jW1PLbGRT8j73j56V6SFkx",
  "key6": "G4dhT8j5PX8GzFotJQjdNDeP3zvgYAzBuz1JSQfAJSMt2ETUC1CC9uUijrAUz3zpUkF4X4jWX225cKzQC2VQj57",
  "key7": "3iCcPpk8gub88e1jL3zz7WmFNDzTud5TzJJFargmCEDJsYLMtKyjs98enNxQeANTL1uEkzEzSNfeiTppB6u1qAEc",
  "key8": "2ir5cQDBCRA6HD61PjmeFBp56fhx3fPSEibfiivQQaK6kZSdcywQbTGrL72UUpdGAAzZ7sW18CwMdLJtpBBSj2u8",
  "key9": "4HZ7xqdwPyhqisJTkGUrVPi5yFkPCW49EjkdGG7m7WZwHtzRxTJ2ScmqpfmSqHsuVpYwiAbNw3ukzEkbKqLom375",
  "key10": "2QYasLwRhTr8oTpUFg5a4h4nf1k5iMCkTUN2u7caeyAxB4gmmnDMo9j4MAKKiqE2XRxLhZug3XqWKigthCatgDRi",
  "key11": "3nYoLhhvwYzQMBRy8kX92HvS9tmnu47gB4pw6fKTRWsgCsd8o7HbvHV27S35VTQZwARVYAWBadpjaFkKfeMbsDB3",
  "key12": "3LtkxAQmVyrC6iura3AGjRpeknLnYdEvXGgySFjj9HgXTXhK2MNzbPkjmYjWxgMRuGobCv9ke8RLJ6TPWsDgw7vu",
  "key13": "5AarWD2HPQVpbGbaj5AFBDGM173jBZuTiRHXMej2viRRdmYJ8QpV8jjEKLwcjMRynktrMq4NgBjiF4JktN498vs4",
  "key14": "2rCwyTZ9wXqxfGvx7KkkfhNKyVizoFp6SgAVwwXURPkcTM1KUgi2ymNWcTA5jge5j1sjnoMWLeStyEu3VMF1EA3V",
  "key15": "4ttV2X8nRuKsHDB35LoRGymkjDATpaDuMYyqS8yHybcTWYJsqPk1A8XzypYqb44827QQEp5L2vMXxcVt2uMLXoVN",
  "key16": "3hvfgv8riVfharMmwjkkokEDBXi8bAZZkFfsETgnAYknxJLdxRksrMP5hTm8qmwfFQdokcQ8zcmfw5kUTdQbmwrM",
  "key17": "5YouaEWud9JqCyUGbrisaGnVD24bm4j5E86AjBtdgEqLsK7KP3UaACiED57Z8ugTmwUFkLintxgWcMPfUL1FqhoJ",
  "key18": "R2DaCXT13GhTxSSsDKhTeH9fgz44rKv47CQdpAPwdeKVRuZZSM4cP5z67cY5w68p8o36GoEUW2T6PkpuhDm7uDV",
  "key19": "cGsBXkQY3DobmsijErDTkWUXDtH6YLWSvQFaz81xFjm5TiJV8AWjGitgWyuSK6SDBbwokaGhricrqCH2TsBpEuq",
  "key20": "53SNYpmuejDNLkNhgT8hKZMWVBBu7Xmu416iPCWFNa9kdR5gUUkCVRb1DFr87X7soj4ZaXEC56DaSFWfvJGrcTtJ",
  "key21": "KYvvgAbYTopDPe4QGdP5Y9zGjf2L67sXZchLfK7xLC3ddMzPNvKGYeJethcyVydNGwpT3UbujFq3SjheX1KA4Fk",
  "key22": "4w2YggnUnQQpjHY1ezHcEGar12caXkbiSXdibJrYe3heuNrCCZ3fjugokvSy1MZ8x5x5yGSJBiYMVX4EYqDjtnPM",
  "key23": "2AEhADHi4DjZfFow8AoeH8NqdXiqHBqqVoqCnP2LtkNLT4QPNzMGxzRBgJqZfq77eYvMHAgcBjhNi12xgB2Bnuen",
  "key24": "41vH9JJMdJ3dNvG9WhdFMHKrvnSfvgZewsd7TRMFqYKfftZE6y6znSdj7SeHRmf9LgDyA2DxLeKFGEVQun37GnaP",
  "key25": "4uzxvUcMXhvadbysVhjnUS9sBAsY96dbWNgpKkcTDT46mcUXFmYUrSmqQ4gMwVHh57h9QZDnzPoaDvEE56MWs2gx",
  "key26": "3P4MTeHz7nbA32n3DMosXBaL5UJGXeyNBegpXNcMqaTkoKs3C213XB5iXzm69MUUhwErEKSHZN8EJEGRLJuXGT2L",
  "key27": "Y7adQuyzpVsxt7FTpaUGNFfPHjchytjqtcqrUxok3vDv7uLLLQks5g2uxCt6AxearAt5NMKK8qyiXHaAKSu3D5y"
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
