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
    "85KsJjCd4pBancseN2GQqBVe15up6aDKrDnEHATQF98PZwTF8TJJSCL1VVZZGEBidjx3kz68E1AecwDU8FFJPxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MLhgoJejLmua9dDvbAYnuGw1WJXzvayzhVwUmTBwbpBezB1oRjSiSiJfJHod4rz9DLhiQBJPpWbTYqgF4YpPXfe",
  "key1": "KizqrHzbJWsXFKuSm72EnZgSR3htuVqeYPBCpXdUBA7AKMkkTyr4Lmcp5UoucdL1Agp9RmEgfe7Avf3s5qgyjTk",
  "key2": "3qH2K4FfNRwaCdknWhAoHzYnvHvSY5ngJSg8yXu5D4kWCZfTN1TQwZkLqDj3wLg2aKwvVWHrve8Q1TRLPB3cuPqo",
  "key3": "4eQNoRVjRRdRpgsJh41RygTAyUPRVZK46vmXfKBk6rAQFASs5XUpCLKD6147DAioscTvymn3kWfaWSMqFnGXwjZV",
  "key4": "52eCmgrTPCt2eQJcNe4yKgf5aVYbYSikyoJiwANZR7W6fxopwpfzWBoHi84Fd6yd3AoGzfdBarJbRhCbX3wz161C",
  "key5": "AaHP1qf7miQb9UvnNYz5xEd4EWvqn3rC5dMQnKW45TKuZcZEwH2vzLRauVDAuD2ryGXpbwHjMHzcHf8onYxjeta",
  "key6": "3bTcgLwtS9PF9vaDZyvKPp1RzQVFVkXWvmKLBdbnByps2ZBK7smcVMEWhxomT7VUmdhi1CvpJjC91UQhUQaJBCFo",
  "key7": "5kRzcaoPzvbB3eJ4qDQaBQKcG2grWYo4MLmJnV658isXaTa4Xf432Wsxw48W6GZDSzAXAjxofpR9wiWAxD1Bjs2i",
  "key8": "3gkQaJEfe6uL2QQB2vS95Kp2DGay1YARrcEXNU6U86kHf6XuzDjeboK3jfmaRj2eq76HXJmmQCg3gtpAuxPpY471",
  "key9": "2MnzQmYMSammLbtS9am4GqY7wTrGszghHVcJHBSERG3ELDtDeHzp7YvAz2H8VsFRujD9wXwrwwuTeUhtasU3hERC",
  "key10": "ksSEcFSMXbKbPT9vSyX3QKDf9EWSFbnQhnDorEKGs2WZuVQoqPSeUH5N2WLAikfdNiXtfVqEaXnTL62Eo7NUDry",
  "key11": "4S1LMPtX72ptd5hbPvWAF5J5Gatib9nndnNsGJNdSy5QumtdBEuaXekYw4FsnVfMVMj5ZHthhoWiCo928fqzYjdK",
  "key12": "21ST1fb8noKi8DvjY4KhHuJXLiTzBqM4u2Yds9VvvKpigpM4hQ2muUKXbsZbrBCAupVnBDppo2s5eFe6tQowLJik",
  "key13": "348GKh4SRWP32YtN75De4mJnV9zZKLbrqHHvzEP2sRW69BC8GTuk7wRe5qk6hTakdoq5QSoawtNfEBTTtVTN15M1",
  "key14": "Z7wdQBVHVB1HwEVXRzMk2JgzHZ6MfyvZWDnJc6VpnYxFpo15QqY7EKNNnUtRbZyemAZW6iS5Agbe8VMFxn8BnWx",
  "key15": "kgyMYZMMqCXCYoLmRuBWvpE1xarGwhmaZM8QrsW3zZLurx4tjGMbf3FpPZ16DXZrEn2sxRUkbt9U8uXHLDy1eiQ",
  "key16": "3pnTos43MJRLgjhLCu1X5viwGZuAy9r6d8ivbkdEeCQ2aKtQ8iookeP23sZ96adiRjQD8H6vprdeg6ud7KCD7bYW",
  "key17": "5TrJ35RfzX7EQe1fY8mqQcSoVqfTsMmR5zW6aELNCQNVAr9xcnkvqHQqURr2otHJL3Qysjq1uZbBhfgcKFhmzUfW",
  "key18": "5JPfv1mo1hn31u3uCYuFZAjxc9wfXyTHqMvPKPu3oagRU7a6Mam7Djfod7Njvufh92jkcDLkHpW8tycuPierRhwZ",
  "key19": "5LyPCxw2iyGjS3TkdmT2FrTTxrQegemHp98aGzNQtxPmmvurFLPByo71UBvch3vn2Y9qT3wvuez4Efbzk3QiJLBY",
  "key20": "2iegm8CQbbGoLXXi5YKsimiqVRF4FPDUQeTqbKUtdBTT6uG2PAPaNoYTVZKkMMJMVNmd2taNp6RC763Ermg5gYDU",
  "key21": "65iYA4byoksRs7cHRWZD1NCP9VAmqnqQYvfF21G9Ekq5Dr2voxBn4ftjwdQJ5zZLfwzavh8E1s7VH4ZwxoYoR98n",
  "key22": "2FxWTFa6nn5emFBYv54K3aXqJB21WU45ccZXzfWiSe21b1TCvGZkYPyQB1iMGtamxHWe8eceWZF6XdqzLVACPDCk",
  "key23": "2k7x6Gswb5UqFiBYnqWuVHCJUuCLJFcBiBCbVj22yDUHLa4hssoM5bv1kjk4qz8mHRiRJsHQmmZXKqytEDQQyyhE",
  "key24": "5tsCmK6w1RTjKxynoQ3zDZbBEu3ssC9VxqToKJt71RNDR5HoGbSkhsMHz7aLpUnpLekdwzvBZgWw4JhgdRmJThXm",
  "key25": "3u1EK1PEdAxKX7EndDCDU64tbjnVdMFDzP1tecEtn93swQ6CYueyMHJ9wYfYZbNTxhpCyxMHioa7D333WTSEuR6Z",
  "key26": "4CCx4LPY9ZqAMbb4EmFKtuSC4jcmYTXo9sfADxgRQTQiioJ12jhafW7si5bWvDt7iXaGTZEMZt4gHqHPL3Bb7B1j"
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
