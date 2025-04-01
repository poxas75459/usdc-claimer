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
    "4RrTckzK1o3As6izqT6j6LKWKeG7UZ4umqVbaNYEDCwTQr4nQrQgWJE3HRG6MgLj1SJqPCBDSA3mSz1Saq9c1Yk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jeEE5D4z3FYD2VPnwgvydVm2KhwmiMqrp1GBiFdHQXxNvphetEubXKcpYAFD76HaYaUarWNTSjLVrtakPvsQKLP",
  "key1": "4mArSEhQsYvLsuWLQPBkFiqbi32ToeMBJBmnxQ8hhGvvqq7gNCSu5rNBhycbVVgWJFrg2nU4fNxuZ99sZhzTfAYY",
  "key2": "UVBq2uKWkuG3ZYUYTp8KT8MnTqKkgaQuXxSUsP1zFCag4T4V8r6gXTybcNh5AQZVQxSNexDzs1JANhv5y5mzY4g",
  "key3": "2fB39RcjTb47yhJSnTkfc2CN8tcdc8BmZQqirK26Du8y2mtEufvWCzGoXeHKvu85c4oatvFNqAS63QmodsbnV2bL",
  "key4": "3VDfReTRKXoS6xoz7RTHV1yN1bP3a83MnSLiQUFc8wTjDBa6DoCrunjQ5cuJb7eiGGXQomNbXUoZo4TcoCsnWHQ5",
  "key5": "PrXJ2KgKhrUdAoGvyj2jtTiXyHYMNLxsk4YcnzJ2nbpB7fLYKs1bnK77kJKCY5iquzsc5VHJck67G1DXQtmsYdn",
  "key6": "2HR1xYvRPvgm3ypJp78ZNXNFmkAYofE8uNH37qBsfNvT1zgvT6wQwq1jaahxVxBZo6Qux726WZZpK1kK56WPR99Q",
  "key7": "2V2xc6GuqmVsmhGV8idjyro3KvNpgWaMz6htQps7CCH6MdQLcHmQ6Cy2DGmrEaJtuibX5UuNhno1fiq5CsAKDKNh",
  "key8": "5HimHqrmB6QRBhPKREcqfRnVcdKYptC7WvKtB3brrvnKismNSbEkQLz7EpiR5V6LqkPTvUrznZqETiSdwD5e5Loe",
  "key9": "5YbdrWX7b9ymB1qc3DB1U4ZqvpTTrLJcfSy8HZ7scgnunsqUTX47r98MFzyoXE8ZmA9QKJo3k3GHtpuwMsBpKtxz",
  "key10": "46cxrQtmd6ZFKuSyRntFV9FFHZ5L3wwTjVXHjDW5dSu2yUjMRUG1T9pHda4MJ18xkg7wPDneHj7yHqyGJ3avWAnm",
  "key11": "tH8ZHT2uikb6LrJTWQNpYEE45ski49X9tEE44qozXeNSqD4uC3ftV6ex3XJZ24zA28o5CFc9QycBNi3VAp9GFqq",
  "key12": "5WpMqQz9VHGpgXHagis8cAB8FZjY5tVJHFoeto3Sy6cszhyW7NEmwyiRuamW82SVrZkKpi9qQmhGPXkthusg6mDE",
  "key13": "3ZPK6PhpnGhhKKJEzjbgoJ1bCaPfd7SkwpAByqHiV1HYafxPkVUcnmXaecxjTxHpEqgLLfg8xt8Z8CknHsjKasiF",
  "key14": "5Dmn2bdUwJ4zEK5AuMovm7oFNKcJLHNSYEuPNW5Y2S3PXZ34XoQC22mV3v3KrxeY1LT3ELXGrCe1t6nTf4sSTgxH",
  "key15": "4ZtoPFhUzR8C7fJX3ooGMh5jvYYJW5Zbq3DPdQUf8aDcJzxB1o12nruQTGbETmaDNZvW9su6C68DDbeDrVkqKikZ",
  "key16": "4nPhx6uyZ5AmKvBfETRo4DCc1AZiDUc6dENB526NzKjNBgTuhURNsUr1wj7DA7Rmfka3sAtQnokpzJ9482CvAypf",
  "key17": "UcrZUdVfDgqdVxmu5aQyKM837VJhHw2XrMNrF2gHzmhqWH61XyaVMxEmUXUDpbK4PPRSBc7SK9h5oqSTEPUa54C",
  "key18": "GWasPXZWiyC5YYi3eezVxpKuoouM7mWfDvYSEw6abNz2vUkqyvAKhWqorcfZkZnm9qZgeMKFRC5uxG3vDntikrU",
  "key19": "2VaYpcHjbG5gTZHkfGxzXH2Z3UwSKnqHsvf2F5QXJb7UmofDoFbizLMWVQNhfbGpnr3BkXW1Lb57sXMdR28hZzUh",
  "key20": "3kwKPe22gCS61iXQmA4rGz9QuGEEbraMs5Cmj9WkqCM99YSJQ1UWvuXSHn4qndRr1AHCBLQ9xA31mknd4jp34ne1",
  "key21": "4C8qLLB8pCLXADGPNTL84EHmYUEZYaZ5WJK9WaNUTHDnNkcnRnKRJkJ6Y6Pm58gYan4GXrV5LHg738poq2CAVsZU",
  "key22": "2j2rEjd8FNSuQ6EoPyTMk7x6xCRXSzRJvPGsow3cQgie3YRuZokVYyq2pvu73hJusFTjXFGWTFm8JZJSjmDnHWLx",
  "key23": "4TcrvuErXJ3r5Hqqv2Q6hjCXr6mYHbcU8aF8r5zCpvhByPkvVHSW69dmjAQjkyVWGedvhqVZYk6Z8sfMAc8hqgj4",
  "key24": "64VyjWTKa4dNSkWvUfjZC7VK6A2FLbWUbH8hMXg5Lcw8SE6GwqpdLE1ycsH8WPKPzdmN4smazEcES66jZNyCmiRA",
  "key25": "5JgvF2k2YuGvchaaGNQuU6aVvPNMJp33bLs27KV1cnUBR4kvKo5oz7E9T3iHvmA9qSfSd1peiNM29GZaesXaSqqU",
  "key26": "4neshc9x7UaQK7WYzaGrxnLFq1SUyvE2212L3U2uu1c9biuK2QQA3KKHkmJAoWFscCoFdkiq6erhBmJABCeoWDMS",
  "key27": "629tUMyPsTzKXgixakFbUXBJYoFSmbB19Yj5oRgYYhkPSeWejEpho7EPcNJB77o3KZC8Kat6EdkkvnZBku1eiEap",
  "key28": "2X88HbBgqc1ywWNm25dKkCQN4eGthK6ANcSE5VRzRf2PRWm8ZoK75FaKX3GAFbYSbM3UQaSCcNSWK266XXPsXG91",
  "key29": "5Rc8yBjXSUrUDkhQ3BDYDbTjCtw3uaDJ9vAWDvxKRuTx8Nsc9k7SkBpxBqKHT2TtE8E2AZVfPebFUrFk3UfFJ9Tn",
  "key30": "3FVy1Hyd7yjkubc5MaVFL6oNVD7zBQkh5xhUkf93dtFoyZxVDa2WqJuPnkhJUt2XKPNXRx84FniEFcPNu7ybzM8G",
  "key31": "2DALSwahker64UJuDQMMQXnbnF18JETDu13JMn1BJysAGysndHcdXboLSp7oA4ipUNXxNncsnoGVT3BH7R47iDeG",
  "key32": "4B3swo8D9qUZnt1WDC6QrZiNUGRZMfaRjci84YUiRgkRANXi7GvYpENGMJPVbiHd3svkH7Aaecjjzpd7Zx3aVZBp",
  "key33": "3juDdAx18U9tmqvzobSzzfP2kEsCYcUNgU2F8nfRjeB8Qjqi4x1ZbKnJKPJ2bNQppv1Akid8NR3YxzgyJYQVL8Vv",
  "key34": "3266rEBfxnMVoNxkzLJCusPre329XTfHn9Z8rL8ncVLz8xffaz3y3Ng4k8HFRR5zjwKPm1hQX9e1YFJ7ZhUAGJEP",
  "key35": "F8uwUae1iSr82dAL1ZoLehMJQEeVxrg4VNoxppTjYnAyg4zZToRL1hp1F3MhEG52nzfj2q4CmE6kc2LkEeJwqpn",
  "key36": "43zjLpsdhWKzs7AkerAXV5nJhoJLmYMuKDfbQrrUXtzyMk3eezf4apu2f76oK58RvKoVe37TjPsB3VVG6DUL4jHk",
  "key37": "4t9sdSRgmxvTbBiQyh74FChZHrfte4gMabjnpcvU2LZB1VAY2cP7E4wpfMEDuAMHj5fyNMq5QdeYkZh1mBhKDCT2",
  "key38": "4W9HqWNGUYp2vrSojwqdvQMbNhF6RAFUxnR57tmaK43gshfKQe97UM9WSgo7KNjAQgFe7Pzm67sN81uvNscgCxrR",
  "key39": "3u22NwctAZNp6P4kg3djzHS7yecZ3G9GygtTaV18USgQvyeqfgY1EJ6GYYsiCupQy62zxm5LPNNbJZnXX9WSn4oj",
  "key40": "2RULPSFQm3zmVvRe5G9Gpo98K6UUJn8uGm9L9EC3inqSHKqiZStxdn1aJkqC3UcCbK3nB6APUJS3UFmpGcRqZCf2",
  "key41": "2DEc2QNrNgWQF5GW5VwPpN6sR3mBp24TMUU6UsL2tfm8XHoBvZAVk9K1YqiwSpsgaAG8exXY31GnsmPBYmyWKkjp",
  "key42": "5VNDQYn7VC4ATcZw2pWYbDbr3WHKKPdM1wkbQYadxW8Z74r2krhV3wL53AGnofomAEHRLgFuz8HxQkS7rirXzzkN",
  "key43": "5wJ7icYy728oMJBKGSzm3iALaKy9eA7NTDHHv9kH52nCJ2mMSdcahEJsvGMS7AVn5mBGfAfvxRCsev5GUZKBHipp",
  "key44": "2GdPGnasyuN8T9xhZES5HesXoG7z3z8BcN94fJuxGywae7vsSiFKzGUjTkuQ7QYz4jJTvAT43dJskiRumcA9Hxyq"
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
