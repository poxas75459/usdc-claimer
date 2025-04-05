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
    "4fMsZFmNcmfz1ogmPcCTpj47oz5edpo23GDW15k4ugw9HwYXrg8k51EzMMoK3qdLK7fSuLugMCMcZDMgzVNR1UDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dMkiXTCtwWoWab1Em8NLyfMKCfRXHYcECh9o66ruVXh8WEzV6cjvekbR5MSe52wJpkFkKLJL1a8yJtenevEHLCJ",
  "key1": "5wR7Lz9v13g8jzLKbTeCkRMidcmb8SHA4A4BCxLoMbcsAXgZuidHZTcrbqk1enPdnWayjmFfyMwTN9cAR6S24dbb",
  "key2": "54hDGYzPvPxfsFF92L6kmbm26onh7moSX2vc8v8PU96ePzrxNDHGr9qUQ4bsNjsutJJsTnuyDcuMa9WTzwjqqvoL",
  "key3": "Z1CYCSMaFQQ9rnJK7pBqQQvDKNWzDnm9JATqGdrtsnerrncAfd8wgoZ3En2uGpQsPCCd4cAYcboZZvRzrGyQvYm",
  "key4": "3VKUUzkMY8VpqnptskGbd9b7izabDSCeQuaQkac97cffRWhRfH5ya2aR5wkEj3Ly4SCEvVDEif4Q6pYJc31tnzsS",
  "key5": "5xiKZcod9QGzMk2NAVskvuGeJX8nEGX4LGUQPv994wsSaXH4iPntmQkmJPTmz83Mv4XJ8Kd7xgUiMkdDfbwQbcmK",
  "key6": "eWCVSjtspMrv3btVhqhWcYDyo5jJHnfBYofKJTzpcCT9RjT4KLB2qDjeXQDfzu3HNuHTfMSJDN2V2hSJ3NEHfKL",
  "key7": "5tsA7H24o4KS7jVFR8wWMbFMVMdn991hAZPKbNdkErPaSRPZCBiLdh82EUq75Y7xoYoLzV3pK4P6s27mxeY2QhFw",
  "key8": "4xj1tvLNzvYwGS3dQSq1zZvuQduZyQWQTmkd1CLAvxv3bqYt7sUBX726EpbNXGZ5fMvEViiA4meqKi9j7EXQCNUC",
  "key9": "2Ze4vWaBF2dYhKqYe9EFepFNo6WZpkyBHavXp5UNEmkCHdEpsbz4dGBUpqm1LFFB6LYh9NzBBFEUTshJ92YXGUEW",
  "key10": "s3UANYeuuBcrtwv7DbT3Pp6UPUAg7PW8Kk9pLvhyqdxR6c23CyJwUVpQVoAEFxhSU9rNNy2PQW1SXcKZ8FJB7JW",
  "key11": "r7jnLrUjV4z92URr3L7eidNL2u44JCrfP9PzjqEjowFNXp7GLmKVeWTjcbsbJG8o5mPzVncKP9WTUgDAiHciWZT",
  "key12": "3r5BTNCQYjdDXQqiAYTczPJrgrgvRJUHgjRL2ovhsdS6uMp7MApSszrVN8oXZ6Ynq7Mqhp1BLztZW7FMi9TtQhq6",
  "key13": "3Yca2uBuWs9aaQraVGW1dLEzv5yHRqdDvT9wcYSxz4NSVScg9gZCRcwuiDqLBVkTSkYK3D24h2m4EyoVbuNJAyB",
  "key14": "5EgGeew94CXfsy25pZ6YLiNjp5eh9iLqKba54Sjw7KVx4mghjFfFxbfDrpScDvCqt2259sesxxvExbffcnaW5YR8",
  "key15": "VSE67rwSiPp3BW38pifqHcNSG8KW1TowvSGVfJUPDBJuqgyJoGiX4mwtL1sZ82LxtFPDLwVQvYH9ipKGhduYHFv",
  "key16": "2Jhvv6XFXH39ioBPnHF7Qf2sqFHESQE5mXFTLeLwrz2Xc5JvF9bTB2Qo3DyZDuzFA767c4hQYeLUgh9apk5k5Rk2",
  "key17": "4zEr7CFhLaB3pTgyzJAb7tumxxyLjFXQhESJp8yFx5tEkJZRavWoRng4GK7Z1mzpqynuTjz7cjGUMJwNEAzBnCkB",
  "key18": "pK5s9MHCusX1ZfMGGRRciBoSNRHMBwi9NtL5DuDS31Qm6Wpd634XEezCB8782tikBnfSx4NjyZn34TedPfMUezE",
  "key19": "HT84atAxk9DykPBxF7qcAC3KvFdXrMp6BWmaGyNwJPBFoSZzES2QTs5YMfX4vnJAy8BpL2WxhnRFe8QXpxaHG1M",
  "key20": "4Yk9BxXSrvq3fuVvXrCKp7zUGJ3RB5EskkNdcrRVtqj7y1RDXeNHfecXrYFmwe4BdwyyspLP3Ew5Pk8DAzq8or7V",
  "key21": "5iybGcwybKnMDSNFdVuha1QfngW38ZhiDTmLxrfRhLbMWdwRGjaRRQsGKQkNSB39GyfWcnBhySin4HSEYe2kyJgc",
  "key22": "27XtJkirh9FTG1fyELFRUzUCk4EH5b3hzTAjudBLaYvgfUbwM6dYE9GKhAaHSNmTwsdbhedwKECv7QmLZpDbfFLo",
  "key23": "4DxAdUn1jr8EZMELBL5H9uXpj9MVVdjDveEDfsippo3fY35WNLLY8vPf3ds5wFZcmZWboZf1yogF2mTXmDtbQf4C",
  "key24": "4QXor8SQosBCXeX2duK16mTozCCCZzzbkpcEXiojYrmqgaur6dacQQFp7twBAZfkNZsZJSBHSyvQLRwjfv2Ci2cs",
  "key25": "62Qmn9ufEUizohJCteQrdDgMpmQyhSKjcpSUYLp9G6uM7YVpEov1fYGyLSbTqECFpzf7hnTMQ88n9JYjKGWvxNu8",
  "key26": "AVGBmc52MgXREEyMFYxcNdGRDEGmWvPLZ7GTQc17s8TFo8gwnnFDAptUNgso5KnfPQRyCEbk2cAXU4cLiETVk2K",
  "key27": "2zB1HmyjrLaBLo9Vj2W49KdxxdvUCvn36JYagLvFKBLRXWZeaEKTZqbSdjUoMpsizyL7unaJBmhK2cgBAmhTW3X6",
  "key28": "pZj7myhKrexNVEKzNvcX33B32wkciVka2RnD6HLAHCnoA3qHr9VJKdpT8TZVqtRof5Cp29q6H12Gunco9fGNkcy",
  "key29": "2guUMA4tgNLW4nZnQ1hZt23yYxcP4VhyShLjdm39uWSqeNT15jF6cbq8MnBBFmKSKh9uLERHNrb1n41yuwAUzc4x",
  "key30": "N23YXwoqbnbh7ULxGsmmiNMvKAQKfZFwgdRT6DbMnYhaiNoa1HbKU6sopts3tyTmrXEX3mLLDgXrtQ7iwQ55YKq",
  "key31": "4fjpSEkgjFhNdmq3Xg8cU7chubPDxGqen2H2pAQC9wpwM3gJwsuSLySj8qDYZKbExjecXa2KZCrXmHvgUMDrGBhW",
  "key32": "rhv7ugAo3mXLbmqmy4RQ8gMm4kAEDLL5KwZWRqvjx2wsJoyygH5bkyW9YVAh4zeTbqX2YUvHfbo697ZJ4iiGpMR",
  "key33": "5g9Ls37hA2wG6DphvhPn49Rf33BnGuCYbkcux3PtX4167WbjDah8tEpqTAa81AYSx8njs9WRDLsHvk2wAhRHQqBD",
  "key34": "4ocJHWGJchJipTbQS23GNiZVKCr7tK4WTcnGmQ3KKeknhBG9CvJ4t7H5McXhMRE1vJqowW2G2PRG6zZEbXrTrrFW",
  "key35": "tHXxtJoE31PZZUeiTYC3HEbP12Wzq5gaqCS3HH3JLkFn7imV7WvZ3aVG7sJZrLqu4Kj7NHpipDUBkTCbu1WMFnv",
  "key36": "2bZ8Cjxkfh6kripuc2anYFovph9hzNpcmQJuN4vD6Ej5vUZNGFHb95uGcYp9C72fAhgAATN9mPkS4tsQmwmWeGZh",
  "key37": "QQ69iMRASXBiH4F9uH7JfcJ48jByaYVitKqUJ4PX9cJcbsbqDx3NQaFqgEE7PQym4kPj5w36tNa2XrBhMWL3GgD",
  "key38": "2uLjE2ECB2c3vsRAmLJPnkB2nva9F5R1C89qrcfkNH33T7CLobDPfZCnifM3iEKD2EkhqA1LdcjCDEkVz1c3bWpe",
  "key39": "318dDW4coCNTdPJbGrA7rpAyadRpSKqTYV3Zigtu2vx6pzmo88KNbdhtMpcsvEjJYqbmLohxFkcAL7jmpDSBbZyF",
  "key40": "4LeZ51Ntv5BGHamkmCadmPK1CRTfLj9juEBS947wjiCu7gvfByWcB71fD448LCrta6XCFLYfxCPZxviHUACq2cvq"
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
