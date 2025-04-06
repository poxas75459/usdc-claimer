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
    "4sBbfsb4EqkR1dNH9LJP5SaBt3iV9xPa9kWRVS75uQwom7wYVhWE9pbjZzBrygLFsvrvuxu39u2iNAskwP645pNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hfJJAGXie3os9wLFJ3f5KwghymwF11ou7tX29SuLLGW93ZocR9QbnLcxXWWnkQiZBsya5qB39xFSmq7SzWPrWjE",
  "key1": "2JqNPfs3g9dGbjHbXNdXG7x5dykzXwjXqhfNhS7JKyusR8CY7FXP4mscsk1QBXapD4GLLQ3cCsGX3W848Ve5oUso",
  "key2": "4jFuW3cj93V5z1vPB4umEN3Q6ZK68U1K2tpEgn5JPVxgo91ekCKmQi34VmAsqZVysNw5hfakdXJfDTawJR7Ap8PA",
  "key3": "4JzZvpRFLcZSmp7FHMku25vpmsF9ZmKApFduXh3NpV9E7TuthWrW87Pm19cgVFdVQPx8dJcogd7DzNVrVCHehmg4",
  "key4": "5tfz72gsmNNBnSWyJMFAUBUTLEBDkYitjcJdTGC5H26g6S13Tg2EG5y4XgkZb5U47rx3axD3i5ztpDpZJ8RaRLNw",
  "key5": "5eQrXj6oT7ygZkm3S4pQH23igSTKMMPrP9u3sRvcyXXB27EpJVVbpMyK2LWhsRM84vZw72FWKbqqj7wiBhM5sdJA",
  "key6": "3De6DiQ6DZHi6YChReSV2BXjmsUzZaVZjcUHNR8s9r8UYi2kVjv6HBuJYAT9UMvzXQFAoLv8tN9jiJQdjoj8uNam",
  "key7": "3PKxfKkKq53Vt4TimuaoSM3ugYhBF9QEDQFYtHchTtA2pMmYwCQwSf8XU23FQRSDsK7ZDrtuHyZWMWV6Ec4KvYz9",
  "key8": "4FLANn7TYEQuCZpDY3jAJGxcyKJGMNx97zM28nBq1sDEv2BpsFEMV7MsRR1TQ9FipZiavV6GHBdNHtKyStDe2eY2",
  "key9": "2c2ULpPyvfkFx7Hzey8i62u5fYkwDZyzyRKafqRakxZNu9YZR3UuAourVVQLoNVm7Y3NZ2Y93GVn2iCF2JmzWRA",
  "key10": "QDLQhs7qmoUa7EpW8N1fJG3paiYZjRuTALjRe5mt9VEyEw23tTspd96bSaDW79BnMunXX6rtNGBMfMTAC5S7SQf",
  "key11": "56hBtGvzej4QfccTQm6dEihmyKNpo6acNuYaHZP96S8wAEwSMm9bdE6FB1iQbPPEfJwSFht79Dn1aKrYBTAXzz1G",
  "key12": "3SgFSzvZGmVq88YNg6bawz7fq5PS7VdPnuPwyiP2vTtn9Xogis2YKQr3oJaMe8V21g8ezqQLzqLnSE3otfFeQJ9R",
  "key13": "zK9xdGzPPmf49Yw2YMg59cLxrAsKYrz2M2tMh2a6RntP2xQU1nuKsFvhFjKg11SAqtWZhyvSp92AApHyoAw13i3",
  "key14": "3URSNa2sYHNhjYmZH7JMtGqBuUg6oyubhwUVYff6162PazydbQQYRTx3xnQnBFNFShP3dd7juDKHRcVVYDa4vUU5",
  "key15": "4Q62AiggLw2aTMcC3P9Up2Mv1w6L6FiAXNvL5sSK3Bn9LdSjqXnPkhwGzddgj9Evkz8EzJL1QTqwjtRm9BU6Db3m",
  "key16": "3TrkWSDaFczACikJRESSF9ra7MwLMxXji5HyfCLi1vHSiha1v6y64sPzjSsR86i3MnCuGHqK9RBmCXjWD6JYXS9w",
  "key17": "2Y7HRcCkchM6L4iTLRcqhKaHz4YfSovd64ZXcWzjPPvgqbJrXg357JxYMhb8RvQBM5SHBoAqQ7KDYpYDNHQnME1n",
  "key18": "49VZfjLAjTAwaWKwbBngAKDyDbe1JisDbZURMp6VrXCCUdMDZ59FCxwmDQ99W8AK41XgKVzq9tFy4fGZSR7pLA3F",
  "key19": "2rcWK9eRr8jz1ygiwJxzwLwBoLYxdkskUUxtaGoUAL15TBRCWm7pE2QZdtuMwCcKJpuzhbWBeU9TSYy7K3RYfmxN",
  "key20": "2mSHmvRoTXtWygdFKPGQRdtfaRWFxmvpgRCRQRNZxkeQ88CdiUKff9jZ51wqQs96cQ5SSTAW8ivURFsUqbwGni4",
  "key21": "59SKtSsT2bFKLRgw4WgqpFvJFmskmN77Pbr5d96Rovawu5Hj1MT3ePTDes8TJK6adu62EuuatUCZDmtcLM5E1VNH",
  "key22": "3WJMsyew1Pf6JWAqNh5ZpsxuFmTGMrc6KrpV9qdHuy8zCLjWMPzv7H2Lea9tLeVxjr1fJQpQKMdqmggG1BFKe1Uq",
  "key23": "299K2wmNo64Ss3kF9EXt4oDwkgXwv7WQYwieUyajB42DwSby4vspfzU9Eu7CuYwZdqaKqj4RQVtD1hghqNmdaGD5",
  "key24": "aBHB3rHbgMD96AYu22ymigbbrr52rnkgzX4HkM7kyiFpdE7BJBWkQeu21Y4SBciBZBAittRRWif5q9c3fUP2JRZ",
  "key25": "4UjoWzQSws43UVEQ6iJHjNE9EueeJnJ4aeRYrkX66xoNTEsWtpvzfKTfMgdpqCvkuTnZnmdZnVSPjo3ncSxVA5z3",
  "key26": "2bDoYmb6E1vquXZ4N3uuoRRWv1xiFxTVv4VoNGd1sDBEkWjvaonrQVFYpUecgXsLYLKtV6m6DmJLWxVxKGkU6Gxw",
  "key27": "2eKKR5EZQepg1JfKciD8qDkYQQGKYeF12QmDbpdRrHp15jQPjj45zSQxMUEpRrgWQTfyjS3vjuFh3Yj4H4J4DDM9",
  "key28": "5mhNU56X7rvmcpcqE4UksffgnpqJY4GLi7Gn2y49fZUFEV49uKZaFuXGUaQ5t1rC2zCUyU96P6p7sHKU8W7dfrn6",
  "key29": "3jZhc86bsfCUUZrJhSR4nEC3Tbb4GDXvktaU3DaZyzrTfTsTJyN9zv6p1b11cdpFFAjDnCuCk9capeZZ4hA3E6oN"
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
