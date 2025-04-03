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
    "TT7MbvAkqtnvgoMG1q2ihBYXxRTPLXFKsJ4UUvZsrzUY7UXsZiQ5F9EPeSFonj3ea42AavoGCnH6qM1rVUtVMBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PZP6GFfwoQWpJPTnXpkZRMZb7uuYqPasztQ54jty4ACA6vUjUANVci1BiXc8WrnHwEBDxANF1W6VVdVCroVrpsu",
  "key1": "3AcyDo6Tc1K9yo1NtMwNxwM3PJfPzX7YwMMLUTyBwXyYtCYpRdbeep3z7zTWFDfUx8LFKRpG9Vg6qJprV4XqqjLj",
  "key2": "o7duW93m2cRBEGE3SqYZwjfhQYsoeNni5hgaAVm5XxaQaCSsGvh8GYK5ccNVw81hGdXf4hnn85v3Yo6fSdbhxzZ",
  "key3": "2tJ1khmawvem67QJqt1P4LAnBitsYzfMRsQiGrzR56oLQBRjvEoijjBaM5F7D6EgppEAqVcK7txymhhACJcGh8mu",
  "key4": "26HbSg4jtuZRe2fghQgb6TcVp6KDFizyh9psDHm9AjBt7i3RpHKssTraXPU7GcVWdPms2wmyve4L8vdoCjc8btGR",
  "key5": "4nDTx5kwV18ZBs4BjDKmFn9SoZxJM4HQAJdKGfvpT5bRh5H23vM3MA3X3hdGekbq4hFhVcm2SDrccHKWAKP7pBxL",
  "key6": "38kED7ZrDKp6k7Amtv7Jed5X5snei4yBc4oW76oNsf41M8agUQ257qw1GRRe4nrnyERPc1PR4YrnysDZhQ3SHcrD",
  "key7": "4Tqj52skmTfgg8UxUtwsbEMqzjQJ3vC7W7w1HDdHeC2x7RNQzGTJQp2v7yXRwPT1PkuiLEUGgcthe4KYuqqgxBRL",
  "key8": "5ycAc18FqDyNDs4sfe8RWRJnHGHmyT72FLxVzutokK6mLTmeE4MgjfQkJ4s3E2LnmmWtEGz8LSvq4Sd8v1gBJPsu",
  "key9": "4Gf8P6MiN8a9dnhDHxCQQHuhJeVon259ThbaLzyDFmK45nJnVgL94yj5T4UCHrHUHDN2Lv8JBMm38J1dyKd3apeR",
  "key10": "4xuq9wncqsGSFepEkHBqFXdPDs4pfDC51Y9KMfqWb6kyVYXsGHL8mYFWrna3PmsZP4JMsCbeo8VGLYjqwn2Uvn4u",
  "key11": "43MTfRrvPB9rxpRU7BmZRM1QD7s1dyQi8sbcm8YQ75cyQ7oBRdMo9jmvooyPBzDbY5MY2SqJqpWNcpFv6PygfJig",
  "key12": "5HcFkRvDdrjWhNuv772u6befxYBHbv4d5SdZCsgbm4JRuQM9gMPGx4zF2iLUfNJuFwXty7hYn9Li2QkVSW68Tv3N",
  "key13": "EaJHqi2ymunrsBwqxbggqvVdndh9KM4T4ZTiKsmgYcGjb1FijZiq1cuSDTCvw8k25RseqECs6XNkaqhjLha97F5",
  "key14": "4DMsEtmEgaodppiHum5at2YSS4zEksLavqwykc8sQhJ8zDEHUCg7pK3TJgFMc34DEiKioQCTQxusJhveAwvULeM5",
  "key15": "4QoZaNy9HoARmszYk6J8QbcANbc3k88PYPMck16yj3dZnxdDc4QFCafbhUoaW2kyse6KZGXURDsDEE2SDxgYnzta",
  "key16": "YxREsq6D23Nq9dRwBWGNenPAL5tNYZsMYhBVytN2Eo9yCFdUaMLf6E6GLwehnGwseMuqnfN5f9DTnbtT93PAcjD",
  "key17": "4qdT92y7Yj4FRG9SDYotwDRdNdoiDdgU3ocLYr6SYGdvvyWJi3qTNUpwx4Ysci1vqoux5Mp66P9XPFsPFQ7xnJMZ",
  "key18": "4QRdMgqx2wS28NBJis2MWbchKqCB3KNrWntmLCVNGmR4uyj5N1f7JdYKK5c4Asa94kheH1ZtDTx8f2DfkpXBg5F6",
  "key19": "2CF8QV4WpeE1kSyLSU6Gq6PWFzgbDHNm1DYvucdEi6Gf8dvxkrCpbXGqtXEMUtjjmAosV2VMYdCXbMnEc8VNhiWU",
  "key20": "3cRZf7aJtJy2W8NLN1RnqspnNcCMQaaypaENRP2RqzfZPksNmMagYp8qGALJnZwEmx2g3quKs3KyoBpzqrCTn3us",
  "key21": "5j129puBDoZVEfC8r2zNp2ZQ7kdH9QnkTXZLJYcHhPrDXMAAh1oDtth6SFkjLeMx348RqGmy6Z16J9MqFXiUL7WJ",
  "key22": "4AyF6PGJkiRCzmharRFJN1jNeKbby7uB1raNNbAQfVb2WEVnwxcW1r6SegMzEnRwwL7MVLTBqFdF43wYQYKasNmr",
  "key23": "3w1jcPHqAK56RLbwnBoTiW9Q7M7GKqyaz4jJr28ySxLBjV8Xs6Q7WhAxg4kbWTS9iCRZyghYmm3oh5ffVue5bxEH",
  "key24": "5JJVtsMAoq1EYjCnYfk7eL2Mc4yTkgvHbeJQbf8EpfqBSmnn9BxQs5HvtDjRZHzswVemdmkG1MvEabv5TG47xr82",
  "key25": "3MTeArUBuiS77C9yRSDFjmUEvfNkhk1x7dNK8WawWG8UswmruDUEgxL41PbFi53kfA4zNtfR5qLpStRi5s1QJJF7",
  "key26": "2R7ohtRXpY1VUAF1D4ZTEgafDybZQvyjyVPy9Fh4oG7ZKienoqpb9KJfDU6LkiZwr7sQFE7JmYEoNyGbQmuKRGrg",
  "key27": "5foXEZL5sGRhG8C32Giww91QB1qd7FbvqFA2JWcqYyaei1XVvaacd2FxYay6Kw7mg4jVTR5yEPL7fa26mWmdXzzG",
  "key28": "4yjGxEvTqkwn7sXcA3RVYs7sEM8hD19ZBFoAjVc3VYfRFWQhcoyhMebcdXiyCxymcQRLq5Sw5ScoBZSfcUG13RVv",
  "key29": "54vHCJSBwWDX9odxfzVVEgvPdAgC6CfZ1K15WoGPQeXGZtwrf9aP4GrU1cqHt1ty3kzJwx6JJrcby6Mgxh3cTQqE",
  "key30": "5supikPBdMHc3XbsPRxskrwvftb5KcX3WPL2t74xb1Ksh9zrT6tEp8HHn3Mte4kKmiWUaWLftrJWHaJEjYVwEkAP",
  "key31": "3uwVibG4Sdr2994oeoNY6ECGbwC8DsUL8r3JmRNa1dLPYNaSRGWte4sMAQbs2TyahaJsmsHcQfctPpkPbMrRGqWC",
  "key32": "4Ko8dW9FaZPHL2UFShQnoQAPA3E6pJvhpkc3JsMGvZpSZxeBuWFhWQxG2r7dqDmV22fsbCNa7JzS5iBP5DQgfEPX",
  "key33": "3GfEk9d6BoKGVgh9Ps9PQsNPwHoagDwDQnLHXQiagYKyHfewR26N2HjRDNVWjqJZyDjyZm4VccJ5bAXwHQTbsk8N",
  "key34": "2tT9kkWWxWBWnaNMYc5Gx8m289sU6URw3sajCQnQDy3e4FSobnR19xkURYdc2bG6ZREhnit58LpFQKo4hYHswS6C",
  "key35": "2wdGnt1aETVpsnhHF5XvQCgPbKBk1qdbduGLQQNAtD8KZ37zci2CZ7VSbsdazToLC3KqsMXL4taR7xDvi4xwGmQr"
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
