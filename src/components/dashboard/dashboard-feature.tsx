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
    "2w1MakAyAxzU7hAE5FF3AZbAP5MHDqQ2Xgx59TzbemuhzurUzdBmphMekx8jjBvpCUMiMCJ2EiEE2fg6ABgMLW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jA72xMDZUePVHqwsjFQTePKsccqciU13mRa8bDeoSi64FDkHVLXHixcDBLbMZhs25m6QEvXzW1V3yRi4o8E5qn4",
  "key1": "3S6SncxH7oLuqxYnFMmqo4aK99MXsNM3yGYeB1sdoAazqNgzFtwHnLZy6DuQoaKUiJvY4x1g3sLh2V5WuNy7vN8c",
  "key2": "258grkZu18SVMBVPGoAzoCQMyWEc419Cisq9VyuPdN6Y2wV8Ak1rvwt6TkfJtqTC8WJWaUJFBe97xZuinxpYGNUo",
  "key3": "nNexSo1dfHspmXC7tsQQx6YJaB5qycZNhSQPh6hJKK1b4bVgAPjykfJETrEJAnxVgcsgQJuHP51Pbuu9wAJmRgL",
  "key4": "2D26EccYpJmqZeiAG3bZ9uTGm6zsZTSKjRXkYxiSGpnspLsDBJtzLYk1qr5NB5zdMqXGw2vFEZuS7j2uNLSfp3Eg",
  "key5": "3qFjVnWGhpGfcE94cxec5kuaC6nHG3zxDBhBx3YT3VmPotX4TDyToxtfihiENnecN99jL7hFcKNwj9EeNspC8YFw",
  "key6": "5yfmuiM24fZ7oejg2c3qQ3f7H81AoKABm4BkM29Yj3sZGUaf4ectFa1nhgKBJEQ8kBxYgd6FEhH4SDrz6rfvFVKa",
  "key7": "4ZyCXyszrk2KiLjdCDstXJfrMFGZRXDaJZBups71izCpQ8UGzX7oRQkN3ARB2kYE8yxWNCjKbbUpwsgUVm7tevLt",
  "key8": "5cb4fRb5ayMrvVccg1NwU2WSiAjGYy2aqHs9KbQd2mYPjju869QvTSK7WzTnKJDpkJA95BRw4L438YRuYmAc74aa",
  "key9": "5RULtmWyLtZVaw8RE14CsjUQPpakPbSTRQ8yS1f8Kyho1fuXJUXhSX3MdPZWkMgT9kGJytua7WusRrtEv8q3DtQ9",
  "key10": "42MpSvgWuMBbvy6vxTv5GztcGXpTcZdvt9zF9p3G3n89uUKqQWqvMUeSVpuY1BupW8vNFBq3yESLdYe1WsUNvoBT",
  "key11": "GErYoAQzUyLQm5jzTwMBU3S6vjeb7rwqVqiG6ZAyP6LfV3Uv9RjDsWjfhDxMWoqjGKzYbeWJLzWZN8TaQAUfbeZ",
  "key12": "NNMsuXeGCJHibSL2XvQbXLkt716rVUPFDVAZmZy2hW3HXZjWvJ7v1HRLwUHR5J3jfcpTeEQ4MvjtuHtXqEFTweT",
  "key13": "guo6ADZ6FmKiw199btYzjtwdFnTAmanxxxuEh66yyGhrb2o9xQJqqjw1m6wWQuDmBZDnoiRREJgN1RXwGZvDL1A",
  "key14": "2wkNmVJGynitibuLkZ8cvdVrMFsRvQZbf1sHfLczA8XiNEHV8i1Q2KdAJj77q8RojbuxKa9J6GzDtcFT2bjrpHkB",
  "key15": "5JWVyQSGZuoct3qwWyMz3H7Vgxd1cVwmdCtAF5hqbqQnEEmdUk5bPhrXRMEP1z5dFtT86i4JiVJkq69SdbHKoPS5",
  "key16": "3HbBu1vk6vhZbHrYjpjgmcR5yK5hN7KirKUBPxtKdAmFyGSLnCtChgNuHJnHiKB4Zx7HRutACMxUvhVemkiPxTzL",
  "key17": "5K78hNHcJF6RYsXSpyHScPVNa8h4Dh7oWfdYinWymmJmxbfbGN31CnP9L3ye1LGT5ahvpFrNznv1PwJbifeGVF45",
  "key18": "3VirPiPaDHxstyqHTUNvgUcwvSygHkEKQGXxGUnwhYNfywPbdTJnuA78pxAL1BRbVcAFKBF8FNQ4GvbyrWu7ZexW",
  "key19": "2EfLwEtuxjMaHvLkhZqwYmcDAwyBLJDYHdfkLtJAWKHgPRNcEEvyWF5y6VYboUDPokjgBuCZRkaS3G6NWsp9wqrU",
  "key20": "41NdHkVZfHGuGbis8Nh1wZhRrb76sn8gMqMJL8BAZcstVJwdmRqhqwTBaQeNzvkN1e7V4B4qGBE8eRSaDKGMpBy8",
  "key21": "3tCFKKrDP4StLzRcVFRrrDdoXVG46aQTMVikTejxyAPoYhNNUNRmfz6q2RWby9BEnbzv5i5gK4D79t7wMRStf3w1",
  "key22": "3BperwVKP94E5xAsg7tL6MpCM1wABNVE7GxRoEV64A79k5hZVFpNLZDDFVap99MGycZLQ9EArGCzjfaufdJ54FpT",
  "key23": "2ieFUBNTrKUXFwk98Nar8oix6YzFHGkD86ddoT6VGnZSEVzPrjbZkuEp84sxsfbPjzdyEJ4X5nd3dswuoqoQcgPx",
  "key24": "4rigmFjRou6esxVULEuYWxt7Xw9ZJX6cHtdpZ8wxNSSEpJqtCiPVNfx9XR6Cutt5aW3E9N8233x2rVCzQQHu8oUk",
  "key25": "3DF6Wsye8RuPB4eCZpbWsn2wgcaUduKT1qpfWtSBAmTB2EQqn1XYbBPMt2XCuph5xv87kS82RJL1T2rXFSyuVxB3",
  "key26": "2GVcFfh2T3w91go5WZ7hhTAkncnXc3X8DjBbnWQxb76xErdR9fnaGK4d1BNNyFMXqr6FntAzjyZqnKqjWSV7ZVX1",
  "key27": "3A2249smu43tWQmpJAbckX68WHKkwzcfcHXY9RHmpnpbFNedmQ5NdjmD23mKh8iNwgG9B46L4AayZgzbeiyZdurC",
  "key28": "5iDeCJjqTEsmVJ7vWDTiUBMRmQ2css8Tuy5K5zMtaqbqaQY5PkzDKP7Xzasruj8ZVS6PmPLcHyhQgZEFwKRUyWBe",
  "key29": "1VTXFhWoyS38b7iTp2LFn7wEwkmXhyJ6eBRy7DYduaNfP4SpVDfkrV6SZhJasHAC26U2ZF7Zk8eWNWykWEZ1i9B",
  "key30": "5E8zGNzMFg8ygLnvs9otv6ZCw7MNNdc8k3aYsznzLEavVRXtiMSmLdMGNmtmg1meQSxaspasngoVqBEKxsbRQu1K",
  "key31": "2zUbZXAo5Jhyr1yGyyraTje95vtmZvv9HGVWNujrhHJuA81vamERnh951JvQeAYhZB32K9kkCREEa3vAMoxnDyYY",
  "key32": "3dVvwuo68BrMcL4YyYGvZhyah4gbGRrzAousYDbdD15Y2wXeq2zhPWnFn2MxqDYva6sDNZhEZnj9yYGKuwt7ss37",
  "key33": "4UC3Xc2gpQfTvYmgTaPc9REXvt6FYgS3wEdDNLe5EQuiL83Hx8AaJX7QEYGYTxcU2fJvhb92gWAjUkWWL93ChWiN",
  "key34": "3gmQEQbDqqfmcj5FGYHgcxe7T3jBwJfdnNjLikRoBNacLJP44s1AKLVo4oahPs6uSFJbNGAu9RhRNfUsXEmro5i1"
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
