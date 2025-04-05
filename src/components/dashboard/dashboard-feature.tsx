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
    "3AtZykrZshsboXFAhxmVMpywgbSXWjTSkPEuhoc5enopiJQYaYqH8p9Hn7GCxRejU2ZNxATvZXbndaS2p4GAyCaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iPH6iFkHVhEJb36AV89FVRvFhCrKxPv2J9eqmsvnXsp3VxMgJD5KFs8PP9gWxMwYkawx1CCaCGCaLMTz4CF48Fi",
  "key1": "2BGVhFZmEk2GUTgXqDUn2TGz4VN4J69qc7S6Lon5dKHBesEeXYbzw9AFTvdPiVwYXwCtSK12P4fuaaf8nXE4aEe7",
  "key2": "2WhEeG5uNv2ur1tWncErWDYjno6ZvThisWtseMYfyWvNn12jpMGtyZ9GcxrXt5vkNDRrGqaEimfCbKM9RRqjG8F1",
  "key3": "4nunYJmLf9DMLenAraWPcUJALiiavm8Q3wizSUCTEk3M9pprXA6batWcCY7wEdtH1ijBcCVFd7yYWTWLr3cpfaud",
  "key4": "J8LkayEyUwneuD4F44mDVVxY6detPAD22tj9b35RV69A1KdSvzckADYwq11YAmr6VV84zjA5uBaj1LVgEk5srgb",
  "key5": "2xfyN7stXgY7dEZuARv4vpj88KVqWdP4rjJmfmqf26PmrP4Mn7bCxpPrAwJuiNWQzqWm7t7RLhSHKZygkLfRcckH",
  "key6": "5HiLghn2MPuVFmcnrJ6QYUwBp9PqpMeXARRg6HLdvDQNc8F861iLiigV2oQjkp5H96wMb7Bdcc4KbZZB6k3MTHQb",
  "key7": "XRPD3ssUAmzoF62RvZXgYQsvhm5f48t1GMr7dVNGYo645eaEPuxoFBWxm8f8ZQsQm6jS8pVT6SvGpYoZooWAoLu",
  "key8": "3ZTuhUqhMGRhDSsvzrX28knigRoMWJSWv4xJx7ookaRQW54NoQZGvnCZq4TNJPFpxb8z6iiT7W9gvn72CbEmEv6j",
  "key9": "2EHgonFbHEHqBtJLcau9z5RjmymLpqaH3ZMwkgU5ADteMQCqUcDkwJermYd34m6h5UTbcPXYE2HnwnDdqJZorCjZ",
  "key10": "2cthSuzV7HWo9ZxRdhYMwQGWsJAm2UXpiomZZmymMEEnQgxWrUuzNvYJjm1fUHrbmHpt86R7NwG3U5kJ4iEyYY7Y",
  "key11": "5i5SM5u2HLNa3icT3Ca3XZo5DjBq6b4CW6TEYoyDx5Hw555ipRdoK1UKrHJ6mv5yYYHcLvDZEgnhvn9qYMhsjW4k",
  "key12": "3DaAoBQkMbt7Apva3YKz7B8UtqT1m2Ro2PQvJB7t8A5LtKcygMSiuakRcRip1WKeeNmaJ8gR46XJEFwLWDYDbWq8",
  "key13": "RTWxjUYMsu81ENqjTM1c8Y6hgizjJwBRZNurNUBiYPYSq4tTzZMQhuUJVodCgw7tKc5ir8cUg3PMh5BucxLJwBT",
  "key14": "vx5fvQk6wVoN3zq23b4WYTGAaPZdpkb4G3r5ZcikYdgazsjVGyocVADjJjYYoSuQhy8vHiFHUN9Zay9ZqK4avrK",
  "key15": "5rZtrNZFXso3tFe1wgivBAPXEkUkAxaG2wEMi4bvCrNZPZogwGTPyg8eWpxdcNaXqP8C86mPW4tUgKaFWqDx7dWm",
  "key16": "4DEJ2VC71e9zvZPKPK3aEdkviUbHhE5PSuKHKTHyakiD3NMhfbzuwph6rHt34tvBiDnDQS8cGQ8NZDe8vYRJNZT3",
  "key17": "2PbGvsGejfhDDaeKToUAp8L4bGFzhCfMjNGKWPmua49pMcVDHgBGNRuVv8mpLqwCHCSipcvZT1g5G1kfGgAL1VTQ",
  "key18": "4FxU7zVk7nuQkcY8Ja6K7Y1DARTZDuyZ8d9fNEAD1hwWtwZsAdZZd9sbdNjPufE5e3TjeXKbnxNJwEvdTMhkAcHX",
  "key19": "vAVewtD8jt2ceKWwe1Ujd7BJi5MBwVga64Q8S1ij7VggKGtmhymVgU1QrAUjCtejp9oNLRPBqtsDhi82abhwFJF",
  "key20": "22BHNtRKehmefqGW45KDWdfsDNwu7jAJoYY5ULpKFZoiXk4ZQs5du27aQnJtU9JrPvScDnPAbzVaa4SzMS855PGD",
  "key21": "4WgAkQoJBDpeZWv6TuKCk7KqaKsA7u2b35cbS9r6VDaGA7AvyzreFdEtsjNCKTgN4Jjmd5dUaMLyyHYEXbDixww8",
  "key22": "2vHGDzqS97Luv3rPDPFyePxuiueUwzU21Y7mraRYjm8XQv2E7DHYzj5Sa6Cxu9qLz177Xg8sNoHszNzwB4GKPX5p",
  "key23": "2nMAP4mtd9Vt5eqgq4RjFFADTMMzET3xdESkbT5xrTP56x1xYjnZBMAd7WFuCEKyU9eZU5g72VgxZeC7nkbL9DDK",
  "key24": "5Q4gd8DJy6RkPJUeq5HtgK6d87nq2ejqfXfx2P3TuiicE7yDoe4Ei231ScysFTpHFPBJstTFmoGKBRFjfgZW1UfF",
  "key25": "3nz6sFGSMc7LWNjM2MfuoXF1DcCBH7s9vhKXVVdkAU28zfzQa14CBdKsUNcfHQCxKJ6CYCp7igMdkaJjGSutQk8g",
  "key26": "3Rr8dRjWCGcWSR4imFEdXNyA5CyiVSydnRxzL5PvqnLSQ8K7ykwmQvVhLHbEzqS85cawMduRJ11zD4igUtxmqYid",
  "key27": "4EHF25Sb7WVYFgnNJaKuyjGcaKd3WnVSeCUkBVyFj3iUKv8P3h6yj4jrDCKdcr7accnyrooPL74wiSsNGp5Fe7j7",
  "key28": "NzSvQ5u5qneasYw42fbqYmFJ58RjjCubwE3cQ4QfRGBTbV9nHspMTFYeBHpFj7rQwxmSKn67BPKB4ZWQRZHeW4Z",
  "key29": "44NCvpFRohdZJijcbUyfvaYGBv2kp1UrPqEm6ni5D4h18YbfkXCJ3FXrwKpPSrB4jrx3izbpvkModCnaNFLxWSU9",
  "key30": "4Zh9ZoaMQDTHwoBv2zKZnZSM4WN6RPkn3TuxXYa3n9ot9X4HeV8JhA3K85CAZ44CMU17wLeZSu6tX5ASrf58Pkx7",
  "key31": "2AARyxLfaQvNoFgHmocLPAjm1mWFQx8AZnaeuDowHwXygABGzFQVBYtvTKhbMafWTvt7BEvuJq2Tyz2zwdsrd2pw",
  "key32": "51gnYFJkAntAHYspUCwQhXnhQeZCcsvEK9BNzvbVw8oWYt7wR1hy1cR6fwTcxWZCFn7b7GNQX2GXfdumZwAkzhyn",
  "key33": "Nz4AEDkhQZPWR1henkCic54CmpsN3NkYZFn3hixRiENj9Au5ZzJwcvnEy6U2buBKQheEzumeF9h9vsX6wq6ZG2y",
  "key34": "hS7Q3KW8ssDv5i4tzzmLJ5kd5XdmCVFEwrF9hBDq8UCnrTu9Fg8fcqFi8UTwqx9KuTXGNvx9XZX7pnGRtvtwWsS",
  "key35": "2LCoAZFYLR3UzobyJpZEr1bBz8kSf3eACjaGekPPXEVLmfZjqKz2dAUqq6a1Mn7uew8LsEWfUYySdp7aLc9gg4iu",
  "key36": "5gaVnXoGq2HnJLmvNgcSs2WyKzj53Brc5UJq6qc7Xhse2VYjHpyE1D9bQg9AEo6kBo2A3zTTC6CVJzkBLiW3euhm",
  "key37": "KU2gkHjj169BcyCNBKPhmBrGYg3BZKK9wEGTtMarsKsJemRpP8wq5GgD6GRb6Gck1r2pb8EDZhj1418PUeWdY6c",
  "key38": "48Vh3gKVZJ7WzPs8UeMcZcHcFXnU2M9gHEWEHUnHkuXz7DqK6edMMvNugSo4SQULNB57SZEQTyrtcdp3D67CNmsB",
  "key39": "5ZLN4SLrNUvD1wMQRQaLXcULWibiLnMrudoixaEmvAqdBC3HLv5enLzXRetRmxSNhwjUT4a5mZuJYCAuGMPCTK7B",
  "key40": "Bd21o4XCE5hCiyGstHjSfEE3hNBG7SPoCAkdBBqLfzbRr69GJnDes6wgJJTAZMLqDQKqw25n9JixdbDv7L5yyKj",
  "key41": "4Y9VwG1yod1mm3n6HJ2QJokfSvKVMXCFuN42WExCVEM1VBwk6f3chQUb1DpgVmPHCFxBi2NGzp1k1QGjoxo8Mnz3",
  "key42": "4cBmpDcU7v3Y9z3r8jzNfPofuMAFt9cPNu8WByrKxkcvyJiU4UEBUEGMhksaU5ZP1FaFMT5hzHUYYCrnrQnYqbuQ",
  "key43": "4dNsrqBbATtnwE5SpzEA1q1jiPedzJsHxLPemiYksbVU2tKuwL5Mj3j321uAZ4UwNAiU5fGpVV32VQtE83PR7CnG",
  "key44": "3iLucMwU4g7tXyKGFym5hponrwdQDQ3Kapyb23hhGkLqfJh8rEm86WNBTNRqCXhpp3ug4UweYL3AByoapN9yBx8g",
  "key45": "4ZwgnpMhJutcj3JVRpzHB5yKCZSTyLsFgXGiP8jpP1y6AX4n2CNxZEj49UjV3Kgn3uBfRTgmn7eeKaX2TQkY7z8Q",
  "key46": "3EWbLYBTWcJWNg2V7FkaZ43wBCp3SDwnPk3VkR6RNcrwfd9Tfno5thFUbAV6AiEqCaa7o4WsE6UHgfsC2wW5qkBs",
  "key47": "649jeWfoiHijUcT9hJwvh1WdsWUYGda9Tja6Rr6xRy1QY2BcRWHaT7e1E62GoB1W2v8W1cPBBC3dBQSmdV9PQ8nf"
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
