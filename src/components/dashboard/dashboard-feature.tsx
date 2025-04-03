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
    "4AfhaaadfqvnRL38KEcy66LsD8qQrRXStobb4uKMvWtKTXvWjZ8cm7j9ujvExSuQgZE5xUeXub7s5d2bBNHg7Lea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54G6ZyeTTjNPTsfE8qnrMKHfZ5Upfu47HoTJazBrFFXfKA9N5yeUf856e7iS4rdSxahWotD5AhNxdFDnVtM2dJYn",
  "key1": "2aPfC9cCB6SNENQKPNgkUXAoNuZcgN6Hi6cjrdJxAE2EkwwATquVZ8UY5JBnc4si21iCtkAFJKAaM1CguZGJR5Af",
  "key2": "sps3csmuskCgJwjQz5W5VPHhrwix1S7WYeDxBBFowVZCRXeSX2jVijFPGPr4SsGRw94X2u7q2oVPUbZvDWdDqaR",
  "key3": "2z13vDZG5tYCn5ZzfwmiY8ds5ezhubS9em1wNTshkz5TT2d1B8ZFShahLuNxcUg35nnTzKKctJqPnrk7m3dzfzsV",
  "key4": "2pJyYbWLn617WgxjeYk5fPKTGYHgi4PG52yVyktSxa1foQX9shgVGXzBvNmkMyn5bpWfH7XPQkk2J6kYJHEzuJK6",
  "key5": "5eCg7ioonT7ZaNB9xSsNV8dh5t3eNCNt6DgvgyDpEN6NKjroSutbPVeNfVEYrhd3RrhPqwfbvfAdtaJSxVvvQmzS",
  "key6": "41M6tJekHjCeagr1kViZSon7LU3Hzzr2vBnRekDPmVdVs5Sb47qyQZHLKmvZLnP8P7JkQ3ppcRZBfW1oSPmBskjj",
  "key7": "BN1js1EFp7DsVaNXwkHBeHRDnLHPYBHY7oV6hPoMGxQwH3zLaN3jBafw2Fn3F4oBpzojpGY8Mz4mJrRAWkuD9rD",
  "key8": "3hhfofy6gVnMiKmHy1SqdJJA89F1ztfCeg5FfWXjvDHbeki6VpfwR9xy3VCpvUDCgrysC36K1hdLc9ZSaJM2VYRE",
  "key9": "5sgU6Mqr8pvgWzQiai4Uq3D6yRpHCTWQ3Cuiiy92DzpZTsv5sAiRRNagLks1aeTqvnWzdJg8H9DWRxXKNzz4KhfQ",
  "key10": "5yGjPHdHVSNfCqzPpZHUEBgJSsJiBYFwWqKkzayqjdDCMQCtHUN1HBpnE6ebpWAN6YaSyB1evxYVhaRp2PREMR4g",
  "key11": "RqgqBz9rJnG5tvZT3XXA99z9TH3xb6YLNMErnv3s8s5RyL5PA8czcr3uadeM8jtmnqZo3Ss5cFUocr4TDs6qNKr",
  "key12": "2kozgaBKU2HiPRHSztg1Epy5dsCPkFcqYLRXNZ3rjW6trZP4WqLYxZMitdyo9gJExWUycZMGqLy3qimtBFDFQhdv",
  "key13": "4zyzT5tLRqv86zBPPgkBAGxSfDjiRC8GdDm4iW6qnWKrcmZQgPNRcwknhJBJ2vDrLCpqcS5mvc9w7K17iWGmc7NT",
  "key14": "3KoEL4sDKGpifGHUWmwFhkrY37E7UVJrHaPzUPtnejQeD7npqfWGxQsoUzv96BzbJ9x8Fmhd3s6FwwqYewzT34CF",
  "key15": "3Jf5cUtkgA3JdCWA1Mmf9ah8Jzh1CK8JpwWjzE2eQRB8k8mPpyh4ir9Q3X53qT4e35aR6UaWa3oZPgTCy3AcbraS",
  "key16": "vdrEkDYkqzX7HegAshbpjZb7QzdiSMFDYRBQeXQjMBqcQiXG14jVPovmZJdKw3o5r4C7nUPuotYwcTZkfnzv9zZ",
  "key17": "yqPEiPDBXXjGoy4mb2GMHpMkEpSATyNT1iun2dfmbMRq3W7MAzjs23yteNDjjm7qEbSrr3PLEisCKSvS5gesFac",
  "key18": "2Hz7JASCXyRV3ag6GJPYWskCZgVqxMjnkSZnybyVd1dwDZn9wAqkxNZsFJZA2A1gRk1p177Phv9MQMv5T72K68HL",
  "key19": "54oda2XAC8Txc4agrg752CKvJyFkoVmX5B81F6oU18U1J75sCuYRHCxwRDExdcsM5y4rpUfY64JP2a6jo4SQmsNX",
  "key20": "5iJYaDuUPAQXcsn3mPSwRHr1RYZ6baiDnHw1izBhNDG3fBnzdEbyhixa5FpDw5JdTguakVKmbfG6PiwajCQbZxod",
  "key21": "onsLDeRUzL4rWQfiCRsu8RWgCoCL8mzuhK6vo9xejVmzhpDhY3s4eK1eeUnfYgeD3jBzNrxnomGzBw9JKorXWUy",
  "key22": "4RDu4isTywJrSWh57v9LqsGDatw8D6nCVCcfzZj27zFzU7wJvdjQ3UN9qw8fTeCembahSr7QEuiJBqfSbVByLhE3",
  "key23": "TTV3XdwGJhF2bWmWjbQi71E71RkfebUinvW7ggHMKQXzhcNcEoyfEd2GqydJoKWPpv4oWrYjPwVGg5egWP8fySJ",
  "key24": "3PfKpGtpuPGoMiKG6yjz3ZHk5uM5A4fw2yNXXiiE5rnJBeAx32LsN7i83N7dNyEdvKiqGu4FQy1JPJL4Ab2uV1Ld",
  "key25": "2a5bqPW2kY6Pojnuya78btTB3ANX26YyVWcmFcRcZnoYTfJa1FiHvMc73SZ3w5uc8TYuX5P9Uy3jstrPfqYqbQPq",
  "key26": "4XY8BA2YuHTe1RNTTugd25EyPBAvLt6N1H3dQ3XDutnbuTx1aXWeLKG6XGUkwGpczHtS8FLcz5UJ1Tn9UAEq8JmP",
  "key27": "5PEE8ztB3M6hohzi2jxfayfeMofsfnQQnJzGAy7anTgY66VB2DBnztbJdcQN6t8qFpFW8zFRvTHrVhhZ7Nytki6a",
  "key28": "4o8V6W1s4y9dWkAPZEyCeuW8jmsU7x9VD9bYVdhdHL6AQSSQUNJQA8i8DyJi38ukF5GLqkL1iD6F8T92F5eyxQfb",
  "key29": "XRnfbn5bdZ9ZTw7jdALFuF7oLrbXJsTkdYnrHKRqmVSH8WgYsnxQ7vnS7K5bcVSmspe6zGJ4wj4MUHwmubKS3Mi",
  "key30": "59ea8zRijLfLgDBi11CU4LQSb5EYmtdvmkPKjGAFvU6rKDmpzmFKtfmnTPwbUDSrfNnawwHZaJ9r4mpRSbD569Lj",
  "key31": "3UT43ho72YZjU25yoD4uetPvPxhsVBHx9ojWRCy8wt3YFsPWaWP38ncsyTfn6SgcVdHq1uUnSnvZSgFJvpCgPXPY",
  "key32": "xHAXrRnNfGFoM6fWYhnbYxmW8du4jCwK6P9eTm49Gq4U2Y12QqBN8UG3ZWx7jr4jYWtTDBko2FGJwQgCTEjoeMC",
  "key33": "QadFfShAVNMmf2TqRaaC9aTD48wMZXhXv7UeNGuct3ruAjHpacv9qz15PsLtNx6UTGxKprTmsjnznpePF3LeDeV",
  "key34": "GZXbWttX7ZSXtEBsFzvwwLn2nRx18ERYu19B8d4EnDi5DZUjZwk8Wjs8NRD73ytYXaVJo1VWSCMHJnZKJQti6cw"
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
