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
    "3pHaR1WEWNx1DzuyNPMSVRUSiHZvm7vEALYbFsEYZFV8raMn89RxxWdFT5rrqmKZ8pMBVuV5xLoYCT6VVyJyJnK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bPWNGunnsoa4SqcEmca9r1kD1D8Vb42JaehGcyFVoetpnwpiT6uZJYohPTroQiohC6MBBiZxFsM6JLKkfViSmtm",
  "key1": "2m31ADkDg4Ckmp8XfWfXJiqPqk6zHpszE63aeaXc92rRVpWmqHPJ8Eb3koxcfAhUf578sh36QimxD9x5NXMHqzus",
  "key2": "EwJmN1a8PRTLXKfjtRmQn3ZcCvxZTknwEojj9VGppfwWH8XTdJPJYTsrtAneYUbqavUakdD4WPKCj4eTp2EKQMa",
  "key3": "3yywiBXn9PZzahBaX3at7ZaphUQBH5VQAQ9yP5HJThgsPfEB9C2erStq7GymTHEzgoR8K6m1gKaw63VJXcG4oCAP",
  "key4": "5ikdnwGphME7WbNPzNW9WR4cqS5dLsuraJR1WYGf5Ea6sQHgg9fd4qCv6aB8AURvSBfNSYQqYscgvkXfpgJjvGEN",
  "key5": "4yQXg5GUkyywR4F4quGeebBPX98gMoKrBey82s1X8XsmZCQuKKWVLSi9SDLrtxcZwn9enecurGzyRfpXtagaYZuB",
  "key6": "3BwTgGvfQcLBJ9ntCJ35bre8AK8xP4AisP8hVXegrnTmd6brc3QTbWXkrcgDjk9uGz6JtPqe9cY9EkaX37zhmj9d",
  "key7": "4py364xabDJ39BH4g8ExWCUQPP6W8p2CEwTxGQ9cWtT4BwUaBKBPYEvK27fonj32iCexDqdhFo6tRNPkZd5dp9xS",
  "key8": "4jWY4v6K7ZvpECPiVQ7fHC6JiBi2nxQ7jo34NoZWGkLnMzUWtZMJNePKcy2MFGtSSjMzbEi24fKwVmGfkeZKyRxc",
  "key9": "PthXjomcKm9hFDmgoBzyxUFZtfTifEZ6YGC1EAoRjviVmr1XiqmyiPzCz5M1ZbyZfCGrGSADA5Gb9h5hneP3mpR",
  "key10": "LDVWw34h323pzEsA2eoCxo8Nfx9eGD17eN9wZXDqPe9dY15cc8CXix1t5NQb94xSnxopWwppLA4VLLsJqZY9ZwS",
  "key11": "2dEeTzhpAZHpHZKbUS8zjgthtBPrA9ySgfmLn2RFnfWg96TjoSfVZSGhcY58ekB4C2fa4UCWWCyHVZjCpYv5khWY",
  "key12": "J6TnGPegvxBRg77rmKc6oX8WAZoBK467VjZAtvmY7HXjzzVCCmj8bEjCfP5WREPdjCShyvGPnHKafe7Jkabj5Qq",
  "key13": "cN5Cvbq3UF5buVWB3SUEvf5rGmcQuCCaYJDhnboeszhXSZRzCNM8jFruan4BJXV6WcfYgWRSARhPCEBfuLxwqU5",
  "key14": "3bwiqhJRTEUjdtAWSD8qTboH7FHTAd4vD6zKT7pbRUN9Ai4rtEkTh4K499afHJGwBSzDYdGsDJb4gvLzRnu64Wag",
  "key15": "5GNQS38Frberz4i2nCe81xHAkPFc28DczL9EYAdiB8nCe64j9eKL7MFpktksQYuUqoS76FFM4uhHDJCuzmfhdEaT",
  "key16": "3TLKB54G9oMAuMLTNE7TDjBKtuk6MUYmd8jrhuGFLRySxhfSrLoB7fqRa3M57HfXfea2mz4aXgzqnaJKaNAghXgv",
  "key17": "3bFAdRNV62SEqUPE4jTUC4x9f8YuFoPj3sPe4b6yVjroxLF5RbDZu9eCosvcpi2cuZP9VbWzXX7d1gG7eFnHwDs8",
  "key18": "2SuEtiMzdXaS8XgMsKk4emBqTozF9P3EBsu1NQhg4c5x9mBrVesPxNnsFbcQQXPzFgGDCwEH4jzQaZ9Dffe8HJDu",
  "key19": "FGLjKuStBjex19gT5NqwoZzhgDY5soK5KeWpLckdsiBTecUtrrAt9BUgC3AdihtbFpRn3NV2bQTx6ZZjZsUch2v",
  "key20": "5Bh77chgiFS9L6yV6iS55SAkjDZdwpCnTdNp8C9SVfMLzVKyivGj87vYF7dPn9K5RZF1cZuaxNwz21S8j7se9QEs",
  "key21": "27xQKZVXwbiV8iCE6jqGNwtaQ9Bf2PNVqrm4ZUX1LJ6P9YK2kZTrnRinVDxjVkRsVKkennwtQ9qGwrxPCJErtttA",
  "key22": "4M8PFYGdUgHrYuGDrNs1V2zetKfMr6D8yAa4gNWv9dd1LRkkwNgaoTEHB4Q9fF8ANLtukhHzoFRj1N7NWPFgnHAw",
  "key23": "GHo1X2J7ope5zXhE8SP7Kxmmh9YwxJxRQsFkSfMV8tgTZ1ozQp4wjAmeik4hfgcQ6B2uQDth73758mWhbxCuGYg",
  "key24": "S21W6QVTmxFGkpSPLGaM5eHiTDpSdYZ1Vdr6Mt8NBpw5jqWxDsuTX2B56Puxhp5ejXrSetrKhzBYyxrZo3wnUY2",
  "key25": "35NUvpfDJKDj34GgM5LYveNefsZJLNPbzLqLoFbjA38i8BY7hQH5HQaYgwhoo9hH2W6Cxrz7bo79jSM3kQzQmmpw",
  "key26": "3WuFrVbKqcQdSM8rnk57w84iYVQzX8uZdji6NryhXazZdrqvAPpfrjroXFQg8VoM12Tnr8YFMvVLsrqCVWrCMzyu",
  "key27": "2Fdc1YDwrPFAKZYQxPistvf4E1Difp2GGgVC3cMXJnkYb79uVBS1pk38GjFYdLrDqyrfiRJecP1qmpiw3x9oyvwq",
  "key28": "411R4sAtACiCkXDEfDXzuQhQ6eaf28dYUXnqyC4mx4wj9rwxxmV4B4ZJccxLBxYpox8di4sUu4CkqanGVVvmdbyz",
  "key29": "42p5ATmjuzCnz79UwSpvn5Ajp6RSoiPkeVkvpwAtMFvR4qkPwjcwqwAVLTJtfHLmHgtVww5ELh75GQGTofA53sPH",
  "key30": "3Xrpw4FUzYWZYPaoojRSWXGMYJyPqh3GwZBcucPQuvow2vFxSYJva64YTJvqfmGnmrMufpMyGE5MBfP6Z7oqgAen",
  "key31": "2qKxcCuY6MhaTLgAsK5JC44MJiCLPAxpkNy3Y9z6pwrKah64Pbk4okyjyKSEweQiV9nNrmEB1d7cLtWRJiLxojsV",
  "key32": "3X5e2r4Gu5FaxcQ2KDA6SikRkQf4GE6YyypPzjDovMq138VWZeWPaAaCv7ZHMbmzTrRcrWZXkJoNWp9JNtPt9eto",
  "key33": "3SZ6Nv4TEeodFABnKyREbLv3qcJtcoCr8dpe7cBgJxKdX9c7UyMDEvt2kETQ2oxw8QxNt9pj4DwfHStHhBVq8utK",
  "key34": "4z2UQr91Ky1w18SDcyf1SKpPCxNogHjY83fU7Kun9He9hMvYiCmccrjyNA5qCx1oFHNtMnoTyQN4h4YrAxhHaG1B",
  "key35": "3hQEf4PLAaBSFMWeoBGXfKFJeCM1acfoZcKQzRjMWyf2mxvHxemhHPnLnk6iBzRyqqCZXLp8Tmr53gaKmzG5Jps1",
  "key36": "4DyvuVM378Rw5w4Jx1HSuP3aQ5HGwCJ7VQayjLWAJdxcoYXwqVtKnvf8u5V4ChxueL3qcz6n2QqETUCiwtsVTbBc",
  "key37": "2J92MiJvFvrxnYrd2cMvHiVQVuyRba35tvVZkhKde6i9hmR8VpupgRtJvtqXyR86si6aiqmMVdFLYVEHtZxEnaed",
  "key38": "3yVcgyLWDmmGk91VnTswaA9hQYoXiAddLn66rM8hG7DVxqHeLN1dRfNNjjHZvDKhNa2GjGfNXC5jSaDGGAJrGqpY",
  "key39": "4FSNamjqaZNVrs65tjcctWejvYhXQiYYbF4RguVmuoL5xGUvdjgpoPdcUUx5K9jAuNNapbV1X9yGckjNymKwx4uy",
  "key40": "5nydmxqEzvXA8iCxL46YRwvNtu78Rt1KzSMqwtcnRAN5cVvDiFCYw47S6AWLeiC2xQgMibxLLXCAaqymbVtg728V",
  "key41": "4gtsSKgbhPvuw1CE3Jyt8Levvih5z1QcQEHgMTqVg8GsjBVsadGBXFukH6kQQ3xS3P78RZThDSiLT4X3eLHe5Qi8"
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
