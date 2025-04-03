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
    "7fiJVftVCCPNWmCBcJv4Em6WAcf7cLg4TmHKwuEuBfxxhU3BWqRAyL685QoEUw47zJPBsUxenCrzF2V1eoykeSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CsQMKHPgZborzKNbByyofnsCEp4umw2N5QStzZW2VU2FuRoExDTtkAAhtm6oVMftMgmZ9VYHQbEfEzjGXvrRMW3",
  "key1": "394zW9bKkcvtCZWUADZJP4enQJGZ6BWSWpY8i6GHKyzs2vFTbrr4x9z4Joc6heZkPusB4FwdTSivpj2nyC5u6RoL",
  "key2": "1wTZnTWpWNk29BFpjBhcEdW7qYWKdSoYkhHu8hwEPB1Ycju7NdvnnjjMx7Fd3x8aPqEV3gAtARLuhPUa5sqX4EZ",
  "key3": "46Et7dqu1kRdPVtDZ5t5xeX7x1m2LwJ7mYx3g9Nuw5hDwX2zKE62KpNnNnYMySY4BzTj4kSd2kjQfNbCzE2rMUeJ",
  "key4": "4RHrQFTK54P4wKQkP9pLtHhYdDGW7urYqj3FdatJSRueFTJmDJhSC2m1xbVEL98sYCSsT4Kd2j6Rzfw2UuMNR7dT",
  "key5": "4QNm4CbWFTSi8VWBnwtNqecMreDeoGu3AF5jdkT837nuzMyfiJWsbyJA4Gs2Vn54jN1wjyrGEnMbwQrEBKKQbGhp",
  "key6": "51CBcvHhxVeKRB4DoKe3iQTrX6aA5rUhRGCpLdgGnZZfhwqazZeQ8Pioo4pL5kcUVhC7VTHqd2Br7LbKrmCpSsiP",
  "key7": "7jdJJUrrNTJkKrwBuuTwuuXT59B79KZ96REzku1SXCDheM46nU4KEMoVS5BkzD8pSZFbHneMjNa9A2Rj9m9vohF",
  "key8": "3k3yJw11UaKCZjzpHUxsLb2ZEp53Lu71K8z9r3e6mY5ZvRY7BaZY43wEfpsjsWmjd5YqvYovAjQEyNE1MrW9hTQa",
  "key9": "4JjFGdwUDNkCYxbpxtkQFSgSMSffYzBZtmuR9dMNXkfR1AwNzPoqFsX1h465E52pbi3ntPQBoPmeZugoPXoffxDJ",
  "key10": "2t94dGvVoE9RYGWLx1FSCMcBtrQy3HKqBRRNyV45auLkjuomSjDyZsDh8vU8819sex86ttj46Tfwm4NhzV71g9mY",
  "key11": "648E74bQH8X3H6kpUcMnuntbqg3K9rv9HpbKTaxUKEapjh8Y7C5JTBw8HkFiWrji3bu7tbTWNaJu7QpYhCLQyDd7",
  "key12": "4uf1KZ5zbxaxdd6LaXKe7Exg3m7dMhph5ceEH6HhNaz9VFoZLtKM4FV6HZp7RGpAxmXGZQvrQzxY3XYtfBTgVUgA",
  "key13": "yB6YraKettc25ZQKcoCPSSN9ckNhhD5CMEjW1TQfnopcMVzNXoDsukyvin48LNNeXWgwibchdAPD3vgqkJdB5QJ",
  "key14": "2CDVD93wc1vaP4fMPz2aoeW8UkLTu6k4t4KS5SU9fThRwvtW7rRxpE6xK66hePCkhCJysRwGEFtZfxW1HFGX92RS",
  "key15": "2GHbiLKgNdTbCcprAvsBLNNBPJii58KDEFk9fcfeiopn4jykw4HMmquUaqqzruvr1T9c7jsrGq8X4KgPfJ1mWV3h",
  "key16": "4ufYR3KETsFHYqNviLSi4vVZYeVn6EDEbPsvuUz4LSYnMkEuQG29FgKrKpfSG2PJAwbkfM525QuLTF4kNHaofxPf",
  "key17": "41czJvANqMAmCPkCQACRhT914BHNtUbLE1EuAy3BJtsSjsyZGBoBqfe26qZdtUD9S1MsJjw3jEtaLjMk2mPwGutz",
  "key18": "3os74r8TYCQUdgCbV4z8DtRNtypuaWVjqJyZ7xQcwiu9wNPikbanQQUBuLwko3Ns8gBKeTe8vRfNFJXgmh1fdDsq",
  "key19": "61HZiE3HDEK1tYeutY9TLzUuzKJcqNMczacLb2HKbMTmKC81LaoEF4Mvj5ghmkG7npJgaLKUfLBs7JXhNcWk9oid",
  "key20": "3JjKj8QoD7F32LaoJ6hZ78gxdYtRpqgB8tPsTiRBTbR3NgTwgYWGxM4SAAQHwU4h3zxDDtJ2wWjXCBbxp2vgK8sA",
  "key21": "dihergsiQr2ZrDVws7EFn9Yd49CwBW4kg2Xo6oqUQKcCNwtAx8PaiowmPQ3ZBqr1J1PWqrH4ti7vQNhAjBEHMsR",
  "key22": "33Q4tVUWcmU5pbtRKBng8RxaAhgQe9Cfj9fHAHw8Z1ReHjb9LZW3Uvs5ZA3utjnaPPzmna1u7PNrDvgKeScE39R4",
  "key23": "YwynyHDWgLgZC9kdwrHvhBjDmpRgBinEa5wwhitG7VJVLtkCdBFGpUr7PNe2XfRiNXC1kefAw1qdU7DEpAexvTU",
  "key24": "5gUnFY5tT6oHLPFG4gMvA8r5d73GJRjWNBwMgbUxPWDSRoQ9fTrReF3TGLAQb684raJQqTtuh1Rw7AgbvSZFT9bB",
  "key25": "QoPJACG3CNhGS7FGmmZrpBkNG35DPTD4yx4f84WdkSWeLBwEA9cbNQ1qh9EaiiGbbfSgfoVqcVjP4RUAoUauGNx",
  "key26": "32bqzBcVdJrDBWGG1JYz7PRHQpKqEwBAworPf3GuST4iwxJCKQhPPhV2ux2TVrks7FZ1V5rdRMo9fzkjJSSGQHNB",
  "key27": "4intok66mrLegdFfVYwSeWxuJJFrZoL8C6foHFEDRmaYnscvGrWJaYnpFdXsouPkGzzxKNKPxsFBmHTYMuuWBkPW",
  "key28": "4gjyQ3Yqo32xHzgkJsx1RJUyroUeaWmP4fNDuMPaC4sw7KhsLgZCeFjDVneC9zJNWU33ATHseoyEaSGv5cFHxPmk",
  "key29": "2AW9DnBp6PCzCxeftzcGJvr1jqzcvYtu42wpt3FLhwysBBnTsrfCTXD5WHyNxcdygmbTdkUXqvWjmW2qLv5K9iis",
  "key30": "3gsQAQLKBDPQyYiqXd3NqkZtyu7PXgFYuEc6goXxE3EYsRMJN6tnMPDwswiJMtHRXtME6wKDgJWixq49MGwp6wFf",
  "key31": "2TWTQH5uMKnfkWURGijQ9ybYo5PEaqj7rqMEQeP8izeY92aDDv1f49Hjrc3wPF1RVbMJUxa79KDWc8aY7wMa6jdq",
  "key32": "t51yrKj13UeVW5jgHwoa2btEKjN4e2SFP4LFVw4LuWKdgACvEZD2jbSeqMAMVrLTtEg1xbpXAQur5nc7FeoN4xh",
  "key33": "4EQoNWkQYpuvazK3SDzLBLBUUzrtb5dPM7NAsPF3iS1rzzfUHVetJAwHa3RaM3thvdpkS7fN18Gkkn3E9AczkQz9",
  "key34": "4j8XU37Dna16apybdZ3GC1vtGZckCv3MLXnXKXHCAcNR2q3gEksxKtK8e6Qub4b2rhdCqrtLdXL7144hWqfZcEW6",
  "key35": "2euTLFrfUbT17Zhq39u38dbtJsFm5VroWykNBezNbyfyk99DqMSDxosp7me35Ekqysc8nL8zXNoZidbqXVTk163A",
  "key36": "2L4SMKWcMD2nkdJdFFhNaZSkWcVpkrmFQu9QZ6sfVPg6NrBKP95C2ozSHzzjKrCQpwUgDzT7uGY6L2rK6PU8YnAk",
  "key37": "3g5YRgrG8tDV9XL7UVyVzbKLky2UotHm9RwRtyCCRBRDKwptHNm5enQqLtiaV42LNVcVv5qVSQvgHY1uyRncVQPF",
  "key38": "UNQN5Cj39F42UJvLY8PfaSqs5Cp5X6fvM3iciMr2oJ6VDbGbgzqnYX2U1FwgywvMktrU51zBUwAi8wUy2XH9b1U",
  "key39": "5xGatBNJaf3JMuYyXbWwTLVG2NjF73Fznfx61eeskgqo6BW4ZjveSDBtCYq7q4iXxCk7YFn8zRrfX2adQvrxdjcw",
  "key40": "5fDEqHuajGDnYrqrpy6kkMZQaqoP3CU4CRtTkAb8QYUSKJtibXQj2pQrmBRyU79Ht5gms7ZeG7iromUNu67pSpz5",
  "key41": "4tNo9W8XXfmCUiBKNNhDX9uQ3ZgrmrzKmwLt1tfci7S8etCgctYNCujRYiatKeMrxWMUaiuSBpPVmneeocM2TYsb",
  "key42": "5mhtxmdeWU7CsJndXXyXFDug3YSGizmryHQNgz8wtfg4UURqXKxjUCUwwX8bbtQ5AojPDA4vwFTSNFGb1PsWajwm"
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
