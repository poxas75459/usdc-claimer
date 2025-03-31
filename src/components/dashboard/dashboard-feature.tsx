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
    "kby8YKG4wmrjgLy4wne2uWwLyVqcWgo2QFVkSUoyDTTGTVMu1AxZSsCXpTFK66svSbwkTHoDScDh8G4cjpP5uos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rt2QVaDpYHumE98WsXGgqpwYYFESDrP1gWy3XLYsn7QxmpQ53siAcTMTvgu2TrcCcJL8zjaweQ71RYV4LUo4vyP",
  "key1": "3dYurJundjfsnzzRLBzaZEQmXeado2xqSXAzFgMtgCrviCrxhDiAwUVGVLHFZo7qFCB8eHp5eTat6J8a3rz6p6EQ",
  "key2": "3TDrs3QFTEVLrDKc6Ajn22pjjfZFJskKnc9feRqsrcoGZyYGYZGUjC17dPavQnEZBeLwzEijAghTAuzxoTLgW4ZZ",
  "key3": "W5qry3dt2vtQD4EsMYb4hG7fgsdcZy4LaaTF2CAAvJZFt7snEiT3eC5aPLXdKSyKJetG2bJfqjGyA8qYZbWbDVo",
  "key4": "2CCy3U933Jy3pF86jQE9CtCeXda9JBBHd93oQyRKMzELhziTdm56X8QC83k7r7Mzo852aj3ceNFMnbY2EiqYeBoG",
  "key5": "44pHoigMnU4ZySce7pdSfi2givbfMB1sc8GLmmfGuUH8rfBJQv7fuxumRt8hr2NkXPni33xX7VKDL1ksSa79Gs6K",
  "key6": "524QawT7kURbLbgKbZeXZwFj7LbrmX7A7VoeNjM4m8xFcoGgBXmfBKnaY7mknU1nZcyc7YgnPFsRWa3rR4h8NZ2u",
  "key7": "CMcp2PWH3LtuMGL6Uram9gts6SJYnjgzoxt55ZpMcND3u7KzqYbL7A2HyUxh4gq3eEBQxe3GGWJQFkJNyPaGHZD",
  "key8": "3EXMyvafz7EQkLj6ZFUnoPubjGJKjhCGoKsmmUvBF8TpbqhmA6teaUigxdgqdch9JwCYsniTjPneQsdwkJyQVryJ",
  "key9": "4q3Vk4suhWuXNaGHq2wCNhn4jX8xRPVQs459ZqFJTCsAVpwXRkvcRS1vtNXSEcYCrb5sutznW6Gvy1pDm8sYBSY4",
  "key10": "386GSxpvL2QG2etPr4ddy5v4TY6GTBLqufpnr2DXbHLwPebcjwvudxg5wPYWYfkPSzK1W7yZ5xBxfXykymo4Dbw6",
  "key11": "4mEQHc3bauM91wCJT5wZk8mYJYibygZ8318XSdpKVTQW1PkKB6RCja1BBfHF287FUeztcr5ahBEgc5zToPm4NNtz",
  "key12": "5wq4RN8fxPi4PJ4XCBWq5vNKJ4nHgfM2SnBVGK3eiUCKfDZVa1zKaSwq8PVSoKq3hLLvZKFZBMqtyeHbv1Q9TuK6",
  "key13": "5Tcdzj4wnqHNBj1hcax5r3RGZ4QVZwHBko6Ey31SRDEWN7wxqKENuV9aMjv5WyTaJXHoMYQRqXraBS4kgCM72ULs",
  "key14": "TVu72EDsUFqvcufpk5RXbzisj2RPJ8npnnfmvVt1ddyFbRvkyZmicM9RugJz13g5yipbKfvFj8dFR3WsBoA6Sn9",
  "key15": "3MGohKy1nhrhbf7AWHAfAyBLMeAMqPNHfAxE9iJM1XJZLpX9RZBkzFHDTFQPZRCiTDsNHLZx9pybF2Xgch6QimDi",
  "key16": "8uf76Xh2G49ZMLzG2GMjwe8hVA1VvDTR8ZQ4CzHfqynnDpHy7vryC2CQpbUQ93ruWnJEAJeMi3ig3ayMj7FXeZL",
  "key17": "4iwCnfZXquwLAn4EjEsQNY5rBJXtHuAs6ViCuLypo2J8wxiA12n8KsjGsALNw9KRG54TniadKyzBfYDPPVAADdcs",
  "key18": "3aMgzYjcs61dEFKeajS9AUPepq5FR4dNH4PxMq2pbufE9tpEPWK8cNZLXoo3JKRUDfhQGz37u3gREkr18Dza8t2p",
  "key19": "4VNYqqej2GeS3fck5fa9eAcFp9k8kH3XqWTdkpWBQVcX85ZxU9HzHYYdnGceGrKzTCCf2sTWMc7SYHYaSxpicgpt",
  "key20": "T6dLaEwW49CQYPSX6UFMNcagXaNAvi27sNaCzYrBSG8mhSwfRSfSbXaTto3S7vwgx65xAdKRbhGtaEnzitDVZRG",
  "key21": "4RtfpZg8PDpcNPMNRqrgfSYw2FcMhLmwQScyPR2vSyCnmNeQPyUS8rDJVbjQJSWTiLHoGCSjspihTjiQZaGiAAUo",
  "key22": "4XTAoTV3b4ThB1BK9dc2oLzS8BvDQUPCmu98xuPiEa7gUpowhzwGRmEoghfuMBBTRVibSMTCa7jH5s2BarAjfoGH",
  "key23": "67XvSAKkoiAFtZmhB4z7hDKkSu4J7Wzno3Z98x8T4uoDYaNkTeanZ3Nqkn6uz7MZa3oqhyYnTcmeU2BWuuvxvBUN",
  "key24": "2ac2UxmiG7vnq3FBg4tYSrKYjajBCUVjqSFLjcXM2KiVGBHrxSkps7LkoS8fqUzeEoeTVqEVkrfJhdXyTNToh5DM",
  "key25": "42cc9Kk5cFdqvXsUV4Qc8NhmFJL49St1eZyPmSoGDq7sT2efWnBPkoHeUpB9KGWeCuLsowFcZShRDVpa8nVXYEM8",
  "key26": "oYaVDzsVjALvhMkedWPXKBii8ht7BFw38r1qbwMTa7pAzEGFpPDysTTrjetz8ppJiomzLmWy9NuqrcmoXFfQvVh",
  "key27": "2BPoDRXuh1eDReE6voXy7bGfSM9wQR3MCrUVeo5L7M57D5JVrz3yyNkCCq9BQcCUKacEQhydaNpXzAugP5vxwrWV",
  "key28": "4yEY7QXVnFTsEBbjeeLGMVww4eHVDhHGi9hvPJMWaysFh3DZ48wWzheQkgWzQvKXFSoDELJ5MeFGSMuD29iUobz9",
  "key29": "3xwG9zRjfX8moCGHWGdXQBRbJawQPGRkNFYNp67Ftf4obGQr7NhV9YAJjTCgARU7ascKTTJFRkQQLeLCQyutC9Dr",
  "key30": "2bvWVBswVL3UUZWLJcAwK6muy7WYMoLWMiKNfAngHG4RerzH6tPPZy8DF9xiNbsix6Md3ghoDyzKc3K7qMztFQkc",
  "key31": "4Wydr3jh9vG5hcv7Stkp57amZ2XpxJ6smDqBRP1vAGm7Tdc6U36bLA3Lj2zjT9YBNNgiZxht7FNsSympyYueGEaG",
  "key32": "HohJqDSHw5U1cnnXZGuMGJ2xxNY6d7HZ7PrM5ENPi6NM4jyeth9hyt4ktbvqmQBwQ6vcqpzD6jebYoANJYt4Bax",
  "key33": "ieuL865k4KPyBaCFU1a9CFTwxZyurgXg3Wi97rUDhUqh39xbWGTD4gvmFNhChk1BEVibJng7foS5okuKtdzkGs4",
  "key34": "3CKk3V7NPu8qqYee8RA72sF4MZeSC3thJzSpFkmYuSMqH6pZZ8bNrjjFr7zzCVTdMzZB1F8jg48dF78AnumSA9ja",
  "key35": "4ZADR94LfyaaDJ2L93qTRowCsvA7GLDy2C5TiyC9j8wAKr7me9QTGz4bkxVrZeRBqMTosePMGc9HmJnvfZZ9McwH",
  "key36": "4spwicWro25Hga3tjMvYEWxQaHDYiFrc8uzah68w8MuBGGPvuccnpTjD7muTK2tu6Pcx8qyXwBB24FxEaTeuXLVC",
  "key37": "XKzHPUfzMpVVjq8UpQue72uXdyhhFggAN8An8TzZa63hCEhBgXYHCvUH9YBNM7yiM5Yy4Y4PWrapxuRdZ7PZGh6",
  "key38": "4AVGqXMRfFovr1zqRCeJ6cW86PeY8ePTM2oxxvDdAjP6kgy3qx4fDNv4N3twYHt8M55fZY32eayBf1nejW3UEsdW"
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
