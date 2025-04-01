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
    "s4PKPKMAMmEQuntYP5D7CmThPVg9GHtf1UCz54LaHT65Ckdx352xQYM6WSBGPADzPT3uVrVvaBLNZVpbHPFoyYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ds3AqokY76sq3NfdbHu5FSz2VtajsWagAPNd3UM6fGZp9DHgXtQdfqTAf3WgATQvTeMbjx76gwRRDuwrtZxpBTy",
  "key1": "4gugnymxTcWB2b8D33SerM8PvskvPaNkyEhAUxady8qpbHQtSwKKUn6nm7MVjsMREoxnR5jY5mjWqyWKg6DNMS9i",
  "key2": "3PaYvT2KhH8QP2JUDtHae4Pvtrsy4QfwL1qMFu7jG1bvFtHcUvSG7PS1pst2VRuSsVBrZqrsrrcL3zK5MNK5ifhG",
  "key3": "2VzqD8gHAsctu1C9Pdyw6H6Pmft3kiMgmzn1T2UAV9XNziNTDAKQuztfGagvya42pjof29drezty3feBpoAsKgYp",
  "key4": "5SQAAnSZQek4eeaZMCTcKL2ijzbHVRvRhzTwPGbuR8ANKV8GtubSxuPgbs7G9RCtqP3g8tSKxtCrCZzq5CYALaFF",
  "key5": "5j9vgMjoBqnngrey1yZokjrULTKAC5tNua5oQfpmJxJ7Y12H3kJnRRQaDYavFAA86E4YZv4Ff7F6SNkNj3gx59ek",
  "key6": "2bVTJwzuTMBC12t7MQe3AByxAnQcCcpPqbcJHXVhBR3M8YbDByKgcXUaRUXeJKUfhnMpj5btpe1FbuTPbjhp4iJh",
  "key7": "AHBNtZNLAWB3T6s8QWnQn5NtZFJYzxgnCPYSfVWKfRffb3mL4fYKhWxRXDDDPS1NMNH23zncTGUJNXXWUhGJGKk",
  "key8": "2xesGA8ibeWBeaZ9KXoe5UhLsjKWuPtVjEKQoLNXih3zggkyzC1DKGSs9MF1n6nkXwS3pTEHGkZFmthAQgbAn8Tx",
  "key9": "3AMP6qpEQmP8ZD5F19SvGxFrp3KqPVDpZro6umodBy7cFgHqZbfGUvSBkipytwrq47hvDGQejPxFVvLToqSnErN8",
  "key10": "4g3rE2m38wqS2E7AmjiTuyvBfnLGBxBv7Q8FR5eUBBS41gDr1zxzRyBbrfL2Uz7wQmNPHgWwdsepCoZnJLVaoa5T",
  "key11": "4CsKQQX8m5uHGzaP8Ssnjw67Le6zYRQhPEbF8Zm3yCcVoowq2gPHcpq1WkNVGfJodAtFcPqPR4gM5dPZhYPoxaxr",
  "key12": "Jko8eV5XDmioxyrfDPFVJei8pHQMJyGngWU6NEi4e2otXZxzBWuWd9q1mwBLktE9L2ac9By4HeSLBqYu9GnvJXm",
  "key13": "39bFDmG39RTyxHipLr1xtvhvy6F3Z56pGxXPmRRgRVXr7rHXqDqGSEC8AzrBZmT9TK5zfB93SdhCehJX4G6PCvPz",
  "key14": "4pYCifwiQWobxbwVBBdeNHXeDMKggf5TTtPaZf2K6ynUmAp9WoqkHVvgQw2LtByoR6c7H7wCS63qoKg7PaxRtTqE",
  "key15": "AbvrDA8Tyjw3gpM5WC4idJ5pVtXbXLpFXkN7bZVxQJjZ4FAxfiW7n9RBpSS8ceLKdFtikQw9erMgcU5wSsRM33L",
  "key16": "3RfUKfTmezQJUKc4M6W6xgUkY4T1ymQdtPJahJGbE9m48wogFwjh1hkBrWiaiN6cLqrxSMbJNKJwx5kY8Peo8J7",
  "key17": "3HcsxMXQEg8EFutj5XNsVGWDrCsxzig8K2rE6yCvijWK5ReAc5KpUdDcDD2shQDTykFM18ZN6ZnfrmYszrk97cJq",
  "key18": "M6EvNb2LDjSGkSKbDQoxuqYzPuX3Uzc2wr255LLibi18MJgxYKWt87EP1JXHXaNu2JQmoXUnS9QThwSHqSQmw4m",
  "key19": "fLc8oJcsFti33XBQGYYWFzEXmYDsebNfans5F5ZRpa5W9UgqhQh2g96KYMsSPVrSeKdq8c2rACNBMrsqwE1vqAk",
  "key20": "2YQEKHoZWkGwtwNXArbxr7v3sXtDm6aqZpSACmZGKXBkowikXD7QyrbmLDitmGiAcKHNReM2gcU7ksa6eqgCojFp",
  "key21": "5hCVnkyRqbKeanPdCtukUBQB7NqjKVhRzN2fXYkDuK2dhN1MqcYUGDwjxmcHiQbM7Sv2BpAddW5VNVa8pN8WKCmu",
  "key22": "6t9hZCgotpbWdwikZjG5TGXMN8GncnbDruvx59xYqemyngyiQz3vSpFgruXm4DdqxhNLbSgBoYCcatYrAV9hUcz",
  "key23": "2oP4WWKgx7idFgTvG2qf3J6fy8pBUtqEU9fMWWdWLpjEWVFdYEjNPuHUZagqZLQUYyZ4HeKxzYghmHvwGFXjSMTU",
  "key24": "4GE2dQeE935PBp4M2kVNAUGT44E65auqDNdzn9VrMLLLfbhAVXixgZ7Nkyn1M29mwRUxQecsrk4TgTNp6fvucrJt",
  "key25": "3V7cZb7cxP19P6PZTGvfKzF5snZrSQky2BjFJ4MAEBdt3TdhqPsyjgM65BkBiMC7BXjodgsPARRUqWdp2dgbJCaN",
  "key26": "4GiBgMk7GSYRPCJWbc6HbAnD1BAaKxDmYu8SU1McXfmwWhyxniEJfHAHtkZWD1MnRw9MB9anBatAJFasrmQdzTyL",
  "key27": "2afmsKgK5fANTtgpqxxPAiaaee3VLasQ6ApERYQpuXZ23CF6B6WjH8hnPAt5X1XNfJ6y9NKPqrRibHEn7ZTsskgy",
  "key28": "2uhKpREyJaWZ53RmSJSsN6E7PJfAbzmbnLECrpSquaNYKQLaWoBAJbP3sYeJmnR1G1jTKnGmcnVVXsEEJqQo2DMF",
  "key29": "2hTxQMUoJZttq6RDyYyy8K8ot58ZzGRKsVEH4UHD64crNNaJrjCsrPrk8KESGoZkssfp3YUYcLfR6xtZsXu23WBE",
  "key30": "ZzdJ1VbdD5ynj7vR3CPWVYLDxePfvUjWiHSsvNgP3RJ9YwwhJNmAaZxSrqL4S8T9xoSn96nbtUVKYnZdf1TvDqr",
  "key31": "rhnch8r3ThtcpzLjWNcKnPAW9X2ZQFjsCWH7ks24Zf8MYF4ZRfXCwLGVgyEsiUeQCdTMBYVPNToakLU35d2FATq",
  "key32": "5ijh6W2YKvTGShyte9a23jctehV3mfjTjdbts3DpeX5D9w7hihaWhK3tzrDXuV8PWew5tuhipDFMUcFDBNZqzJdt",
  "key33": "5yyBu1TcWHbvksU4oMpGjpV8kCHh8eQ1dapJUoYqxyLieCpeQqThcLutAhi72KjxyEKAfQzkc2vsfLDjSDYnuAjt"
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
