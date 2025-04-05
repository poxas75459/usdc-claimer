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
    "4fAQdqJzP4uboVmdMYpe2Yv5WRXXB5M79fhFpcGH2RSNDyZ8MX6ExGZSzhRtVVCUajuG9T1CTt4EFER2AmESuvKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HEaPA8wSKCt9F3wjT3iYncTAgHQzUUnE5XS9viR1Zkq3KvfUwvegKAHiRtxUM38D1Q9uQNgbbrdqWDFbjo86KC6",
  "key1": "MkZ2oJKfZqLuVFJFxkP4HnaLkcmtH96RU3sUoAWSGMvxca5jrNmGK7nx3TdJc7ZY1G8FfDkdiQyTwHoeRjWZoHC",
  "key2": "2UCaoaBRf9EPn1jB4tUsFbkFFKQ96M89aiWq1cegd9v357LU7FExfCSc2c7osLnzQC9UwcKvax4SGAk23ihJVMvm",
  "key3": "67a26oiEiXTN7EdTsARxPiAZfSMu6KjPZzp9tfgU5y2hb1FFvgRstXfDVNKMZBpotR668tKp4GQkYpAupRVb1hro",
  "key4": "3kKy8AnABRTJ9d2hZ2VCYdxJP8hKnkw2LMqERE9eerTwEB9ofrKzTZEBsY4W24AZW3bmo4TjUNbJetpoWAGWH4Rb",
  "key5": "5Qm6mssk9nhdwFuPjGACDfs4ke4rdyAyaYGzY3JifCrmFhhHUy5hs1qh9uUuFiKubjk5WZQidS7aaN7ocqWH7HwT",
  "key6": "66tMobaPHvzjkwo1E5wx8keuTi45ve4MWhtYwfSispSwxZqjkkGbjSYLT1zF1xw5Sh1hmRfNqBoKxMr91LFQtLAC",
  "key7": "31dTnnahFXs99YUk1t3wHHyVmX7k4uVQGNhrVPsmHwi1DKP4RnPfaiQCGKv2MfPTtCAXZYWyaxCFGEcYmMgyS6m4",
  "key8": "3VVJ5KvUdr3H4GfuGnTioJditp8aiBVcM5pLcCLAVNSWjcNaAaNyKXWa6pxWBvE8NfHEDsUyDSqpXVQE7LCVqLtu",
  "key9": "3TSFKAgwG3SbQ1PuKRCfrQJPUJNUqusFzHtxLmnX7DBuoDLLd8v4LQ2j2dy6je3wZfh1jZPwPjDiWhWcj5tVKsUu",
  "key10": "3ZvvznHoiqCnKU7ytVajXax4CjBqtce8mv2VUTorY6VTJwSQpAKUpLqHyzpC81ujjMjXT4Ay3z2mqbGwGoZEiHhG",
  "key11": "4c7t23qUn8evvkqiHJDP8SVpif2pbGptWcLkUUTLax9ZgqUY2NEVpMsgQbjDJTJfAL8qLX4GkBigzmPE8ySGt5qp",
  "key12": "5dAvh3nNiCF5FNtXzF5KwPsEh3zayXDn39iAEkpjreT4qLn7LHVZD7R8HkMzPBonM9KCt7wu9vV8ig3dFXyDTDVG",
  "key13": "4Mw5MEiQ17mB5sBMKHtQEsvPkT5ZhfAjVh4eNWbqs2BJQSsEhsYFon749yREH4Ah25ESoncrCvKufPtw9gtdGr85",
  "key14": "b5K6r2ESWY3eoWUvfYnmcoUhjNPbfp8ZtkmnD45FhxdZTzFZvXacX7pj29tvsCrWrqGueQAqZKwR51t8yb1CN2b",
  "key15": "Gp7UJQ9AMyzQUYmDqdXSkRdgXuJqWB11repPW1HLx9nbrsYBjqoTGHE1iFBJ3NdmkKXt9F3wmB9dwUxWsV8k5uT",
  "key16": "34Eeogj3wcCVpUVxu8rywMW4vxhGukhKcSKiXMW874nK2PayMd1m1MKdH9Etx6ZG6LhLGh3r29v39NjuuSvenpU9",
  "key17": "4NPziHMdfq2VufhGK4kDzA1Ef4QK17TNYVBiCveRE5xxFw9TvpJKUbwh8prY4o3x9prcHeNuYfoSMYjP8wuWoQQJ",
  "key18": "3n92g16o4vdfyC1Zxjokma4CWnnnwSYAgcTn2sN8CUJXeLMesqx87ueCcedEn43PT9PuFbE7iqpQD3fY7zsD3W1a",
  "key19": "29E9FPNpLR6zoQJwi8gjaNjfkgy64m64R7Mr4bRHdjYW36QaA6nYZiARZBGEL3ZoDxmoWWf2u1XwVXTmsWENBvpY",
  "key20": "4nL6ATGhrYVc7Ajee2Hzt968jSNJmz8wVGQE52W9iZYqyxVaVEV98jsQM68kSDovDidTvPw3f9n1w57oovU2aqsQ",
  "key21": "5cz5kRQsE8fznDQy1Vhxsbuw1sVNxBfPZHJQ5FEySQhSvQNikw9j5qeXcfz8pbvkk6fJLqtqhhQQWZbBHyW3GDb8",
  "key22": "A481TP9bBz6QJ2KbqtwvUQQycGAGaz4cLD5UGEcejRJhnn6MX6zYoGsYSaiLjvdwqJ7TbKiX67ydS86BLcnRj9Q",
  "key23": "3sYp7YkTLqQKmxCbh8Zpic2JDtAfzQg6wehoE9caVdnzZ7gK4882HaXu1Bn8h93n8PMq4wu6DJqiJ2ymWUTYPAUM",
  "key24": "23KVrnaj4yxHRPMm2tJENw8qeDk5U2LbAzUhEdHZXGiw1giHEP3hi21twxAf25Qy61tc1cQDwMqGDqvkBUrLLkpM",
  "key25": "3fC9nfcPkvD93kK6F9efPotdHy2sgNuXRTCrFEvpwcg9LXs79DyswE5kR8JgCieDR55QS5RFNU7ntRsBgQRAFmHh",
  "key26": "pPVgiX1UGuzYDoBrjuvASuWrs16Ftd57ogbqBq7zeg3hjGgUqRo9k3Li1V3hrLKzwsigaxFiP466n97gWUYeogW",
  "key27": "2FLqVBucvgLSn53heiQN8GeMzzFEifCeHfcEcDBbiDia5Lrj4wS7CfsLToayBtLQC1qgVUBL9r6aA4H8gLe5H5Ht",
  "key28": "3CSWyQacPR4MRnr9EUhvtaQReG39bwh1gb3N39xheemZHoZ4bNMh3EQqvz7kEjGJt8ZR6MChtAXr8yf1enukUfdu",
  "key29": "5wUysEf7UfRtqq2ghzw49zZWBc98BUXjSCPcaRPJrHEniVUc6ncmAT9eygVhj2LTnnm6r7VWmuKkHr97mZxGmZBV",
  "key30": "191kFM5hdYG1Z8smJKjBDBbWarUHotJqpRWHKoayVaeZFZi68992jikKhN2qeZwGmRUTm49TcZ5Gvb5k3TXJtUW",
  "key31": "5MwmGYFckLdSHpXHvLZEXwiXkpCRZoQ2zMGsgvRE54LbfSuRqe1mAYuRe6KeR6Vta9sZ2tqJBZfbnGzEeuEQ1ykT",
  "key32": "4rcA3ji8HTBXm4PWHPMJ2LN8zBfE9gy1kLUMzACwaoZCRfu2zaVDJox2dJsMriFQGRA5uXKfYCy9j6DV8SLwpmM5",
  "key33": "4scWr9HnuMzSUuqw2qTQFmciB9njVb631eAKV9pzVoQMF84b1gCeHa5TZLHqY8eVFSykhyBmPvK3691SRFK7SAoE",
  "key34": "5QUZCGFbfy9BFf2WJw1bKwDSwdqbyTdR3ezR7uHsi5oJgJUSp1ZtAPsp8uouwVfhxySxwDnv6Ap3EYz8MLjGCa9W",
  "key35": "fmV1yzL9uus2j2qTT7SRpueYyyQgLU4MFhQ5exUjdxP3opCRib3iBMdqvngZMDMfTibzGzCJ5u1NpXzXafmgQvy",
  "key36": "3d2q9RfDmbiTbzkmP9fuLSta92NXoncYdnuw6DjeMxvjE9f2PZWUbyjujPQwvzUdmsFVB142Hah62NRXW2YNAXxS"
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
