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
    "4tFmXTQw93qouQc2No1YW2YcvKQw2RCEjLUxRmfqZacmVGUjo6J3ooTPqpWF56de5Y1M7hkRrJFxK3A1PvmYGVdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hc6jS8WZ4y3peeaLmJCD9Rc7LwzFFrDxFg7cwomd9LYTgNfSgf6fyCQmyBdauKVj7o5oVrxDnSmqWagMVivT3JP",
  "key1": "Cg9RGVoVkvLxaPDub3EGXafuyJjwWJWKNKGYPjWp3Rr9mYohCDqXH5hwqpypb7JnNUSUVUoxyFhJHGYLqDr34aC",
  "key2": "5KCzGHU2RkBLrZg9EhTv1hTzp3Qh7nNtbTUnwqRYMT6cqGzqVGR5WX5qEs7ES1FW4srRXevp9QRHVDdPq3AskYPs",
  "key3": "6fXuMq4dTZrri7V6iUsdi2zQYasNeSTGjGeYgyHaKcP7ZC9bBmsmAsFbN4q6V2bcCCc2HPcVimvepkCdAiTVuv5",
  "key4": "5fT9ifHfz9VnP3yhEMmRVxunH5EZvV4haR3d6yndiynTS1AGjowyWVsQfoQtzNYCi9aMgKkB3gvdibnMirNmzwKu",
  "key5": "5ZrqivSHn1CE9m6c8TL8DCWaeRYcTJz3QJEC2qK1qvCKxPg7SS1phSvpVRqCJ9Xe1xGZMUg2xzVWks93avW84ZoP",
  "key6": "22hSbC5B7axrPVAWR8CV1S77aYnmZxxXEnmRRWmyMehDyRxffdoXa3sXeKdNGHTqwvoRA55vXnr8AQ7cEgffi9ny",
  "key7": "gutL1Mof46cV3HYVrxMVksyUxBufQSa4E6MPgnEakfW2DTmFRFjzxwzXYHqT1UvJESs6mrZ1vsfkVhtLnxPSS2D",
  "key8": "b4CGQjAkXbLjFc1CGgdRmMKvmftXqFGedH5hXhxUex2mmJGsmpaqjKMWKHNpfhBBzqmNPY9gJjhDDetMoYNLfCW",
  "key9": "4bfcEkxzMoeiJcZrxYM6qMAoVKjYpVgtamCTcLKJhKky1LVUWy6z1CTtRsWLSyGFECZ6pcRa4jbrvZhM7r7sp1uc",
  "key10": "3GnxHB6p6Tc87ttW6x5CvqoZiuUMAQVHu771JtGzk4mv6imvQELLEdFRyLCuMgdjYBKd4h88c9MqPQUdsquhxvqT",
  "key11": "5k4kEBCgpmqM7cbNbfqWaPPjMjinq2oU8amRGoUBk7fB8yQL1JDWTJ249k3HpWqUHfe5CEAR4xSeWt9yrPKuX33M",
  "key12": "2zDsGe6PuQRgKW5XM4mHz6DSkzhotFTgqe3xv5MGsdQRfXbe1DUAJDUhqRVDcHrE31UoGZ3MD2sbEp6QA7Jo14mK",
  "key13": "N1Qv18UmiGnw6iJwbM79AAQpMBcqaLBZyE2WZPWavMBGpDpNe8VnU2pT8WyjDMCTY9iUfr6TmJ4vHbeu6gXvxa4",
  "key14": "4roHmMQFnEXBQa89fpN3e2Y6RW7yaNxCsQHw21nz4CH6UZ7hK5B6KUKxQGZq853yULCqpiKqRwFeq47S7GT5Eqei",
  "key15": "3UPBPCY6DGk3WtkMUaXeAoEThpYdWpSh4haU7KJQT6BiWDha6Mra2239bxD4u8AsK9LT6u792n48u9U4GfsqjmFz",
  "key16": "6Shswux8n6QArzpBxqMf556zcssMsWzztKb9vumFcxM9LFX4sMfvh4eV3XKowFLhptxXPzqgb3GRbDzEwTLQrGp",
  "key17": "4p98MXRQN7zZPTKHLzNXgiu7fVjpdBe3dRn4XzMVGEQkmW4rMKXESLsYfcSfZ5DRLbdS7XgAhhHj7yUuGo3S2GSg",
  "key18": "2NrXppiDX6TQuudBX2T1HB44PtwYziDGzA5CB8VGkYAtuq6jR6h5DVbKN2PBRMx342hekB75YBgBsUbzJCsnfiS",
  "key19": "5ZEzypcockP9HRn1C6ruyvcJjZNCJjLdCCJbzja11Dr9vjCxNbn1zhwVpd8BbWHRxkRtgWaiYdYUT1ua4LGv9Cmw",
  "key20": "3BokJWUPEyeKom35pfA3tDxJ6EAAGXrTWB5jDgxQfNpjM2ouRzxmcQ11b6gEdWyoQg4PsoLu7Fh7Atnwz5GAzwHd",
  "key21": "3tttaRWNRPgr7TeD9uSQz9HsKcjcMqpSiTRcADAAywZc26Pkm1pPopS9wBydQf3zDQkk2cn7HKteV39p4EuNpUex",
  "key22": "4a6bneqcGnkMudS5JZXgrKRPw7SA6obDXxZZjAze9kVhjWaspzmRFF1WBvH6WngkMyXrehqWJwYpGcnXJKiDQFuN",
  "key23": "C1VGpPHLfkGmYgWBSwAxwphsQXkPGVK16jZmkZSEuWGYpSZfZU7Ldzz6dxBVFfabtHXYCMrV7ZBTLrRQs2MVQZj",
  "key24": "4bPNEraMYnfttbRJtSf97mH3LBWsYHTYb6qs8fvCPzTDNoQdnNTgcULmv26HTnWnFzcQ82d5JAD97wqSoS7HrZyz",
  "key25": "qjp2cHqBxrAJBnYQ9GB7j4eBdCZebGAyyiXs3rp9trTqoH6XABdsPQhtgdLzuVg6wocfBaFD9Q5Fq2KN7YNFNTp",
  "key26": "3YNqB7uRKq1bFVJ6r5kk263v9ZyqRgcDjESrt36gUQCifjuPGyEinDSGCE9xSnrrvWnTZfD3R3KhAmozPgAbDwJ8",
  "key27": "4SDrboFjRGttvmiAdJD1t5NroLr9WWPDFyEKNtYn1a7QB5HL4P8CLhHvoDMCwPSFYYD9bvT8Cwtz3VQtVz5EU7Hg",
  "key28": "2cRvvfFPBrPDDD2LkP62HBMWz3AVzzAaHhVa9pyQ1wz35f5sML7uXYcoJKiTCqrsfuXesf9FGn1fw5m1Tw16ojHa",
  "key29": "5W3hKmv5pfubDPSC65HFCuosjjwziT6T6bjbhfsGfcLpCv1diq9DsRP9avkbxsNrnuj1cfpHkCht5wNN52jSpYoM",
  "key30": "QwnoDmWQRwWuaJoh62Hd3ZKTognu1QKoSYmim9Luk5LV26hWm5yVPpxhBHXHuVqb7TL6i8zHN7YScLe62m29Txe",
  "key31": "2jE2qK6ahryzULryu7g6A7Bcx77z248JzXPoEQousvAMyroYvZFwihhqv5UzEfzmz7tMvpPSxyvmrvLerUcHt6DR",
  "key32": "2NzFk6kK194MwJxSuhVgpbFSVDFeKYKPd2oLEjLcJT3xtdeWtdM97dvVEZW2JTLvmKgLQVBWas4DjN6e41ojukCL",
  "key33": "4sG8j6qceNkpj7ZzxB5GodQnDBNR92WYxTW1kbGFLRfqCrTBiEucm9Dh6v4av2dRXvXZ6hSZKtAGVdGYggxZgEwV",
  "key34": "2qJiF2z2JiXCNtneVnMXGcgkdMGHfU77SsdDVcXvWncjbsaemcU5WeQbiHkHFTifKysE9XyKLRFwv4E2mznfXGSG",
  "key35": "4FuCcatirvb4ZRXgDqSEQAMZbZFWHetPs6HUMDi1CycjVcdiWyG6mNPXk8Cmi63mmyKn6mAhnLdtGkX6RxxxmiXd",
  "key36": "5CSp6bL6YjnUDTyHXR8tCrg6LCpJ1mmYUk55EnQKBA2dENaMwuR1WhANZ6C5Ndjet8XFrkrxoWWiAFHP87ru6vrt",
  "key37": "2NrQdbnJvf8q55KU8BLip5ZqWpDwhyxGDXFiUbHQCruVh6yJuMjFW35yGGqfmebTJqhz4JVWmd67ZLQHX9L6xw7e",
  "key38": "5Htw76aUsDQuUdYzMTedzBkkJ4u8u4b1SciP9UPBvUiNxcBK3ed2jANTTGQtAni7pPZ9x9VhqwMbRvoumZ1oNVyS"
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
