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
    "59C5x2euWcUfqQxy1CmaeSMfgm7HEMNPHvq1ftHEYTVJieZAw1K93AEwa3swRNALUKdn8KC5UrULtADmbAnrBzHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H1chWxMTyBYFzU2rkgR6BF91Zx3VjLBXycpbcgWCCUBpYgWMAn6J6Y881XGjcFaf7Ue4LW4rMkQCZWxXiADCG7Y",
  "key1": "5hADXW5pfhZqtrTwKxPgFM7oCAs7zhK7EkT5tjvp4QPLfCFuaNhL1CB8w2k9aiCggEJjffvHprhxh7wbUdSpTgM1",
  "key2": "3GaSUYES5YrCLa3JR5w6BmJyuCD6Z2zcLSB3QkM64N3ir4ZbuMwbGFNHU7vPmvvRoYmn5RN5SDwC7FZ47KNPo1PK",
  "key3": "5tbq6Ft8aECRejHhDCJzAhF5RNYRxTon8sFuciL5xtvfRqxuAU6TUmuMHj7LysLwrwSfZ3LM9ffABxDhxzyTnP84",
  "key4": "GFC6uq33xcYfizXMWGoYDRgsSsRbvuH1ZD29vjrNjm8c313AQ9bSRTommkNKbUREiSkUEGDbJQwbftx5nHHbJ4r",
  "key5": "23JiCcKet6XUzWpZ3g9RRKyNu6PjkC3otD9kcJieFMxDN7eR2ErXR2qyqryCUCRM7HAMceUKvtFv7BKrctyGvwB9",
  "key6": "3VxDioTKbBusgaQXnRLG3rdGac7W7XKeyRPbcn9LZJwiXUVpF1zExNw4EcFx42doZK63xJ2t7CB2hqs4Qg2BVQLn",
  "key7": "5jXYyXiQ5vvPRV38tm6KC3N2tHwMf5gweqBeHncpB9KLETmsRiL81E5uHHW9nxpEETzBRxXXjUqriz5EGKPRFQBz",
  "key8": "4h6Ppc9mNbixFQZaF7QrSL431AGoLZidvaZiZ4VMzKRipxGF5WY5mkVNjuJWmSfH9i4ZrgKynXGVZ2cCmTZLNavK",
  "key9": "3CrYkHHhK1XinuobkG3VEhBi5VkinD18unazHeB3X14m6EAntyajGP7hHSNiMERQ8zgmQLCqMyzQ1VuTf3pmsMb5",
  "key10": "JKhNrTQ14gKrV1VuRfWTTY33F8BT3SVG3Sgxx5yL2eUZLtkEFZMtUu7FG4m8YKEwTbQFMfbsUUWtqYC2hGa5Vwm",
  "key11": "5F1NJeTWbZtpS1gEF5Q7Bu6kuyvWwaXhi3guUESnYPnuy5WAnjC3KJBoqKc4xVv7rTfa7GxvNFsfKs7MvGbhsfZB",
  "key12": "Ky8S5RUZVCE95zJip8H3h3wW2UKY8drobBbmQerQUMPcinYehGaynC3oF6ym7PhBEe5Bc639uTJsSbjGHUZ7fCM",
  "key13": "2iVVYV9x1xwtStBebq8UUKMxyAzc19CNTBTd2JYx2VCLdGoBFoi1ufi4XgiC51kTbzfsZUp4TzgY7E5H2kknFnn4",
  "key14": "5EAnJ1fwvq4z9tXwiqRPuMRqb1jbbTbaNQU16vR25Bsf9PNy9ovHPHHLod55kZQthVPZaCfMSH7EZXsWC3iuheuh",
  "key15": "3BpjXQC5J1U8ZTaxVaRrZJvWRQA1Te6LdVzQiDyt9wtcyrxqzzWBdQ2eQSe8Lpwy2aU1Au9tST7oTkFR9KRqekvc",
  "key16": "2rmP9Yg3uEmD7uHqHFj6qvEJWN2wevaXqNz6n6wo64YEsSYz1RdT1AyGnihbNvJXCQj9mDCBGcbAjDpocFocSpAZ",
  "key17": "38rmL8kGoQMvNEFUhVU2oFPBiFAZ7yuzctddxdWVhpQ3GgrecAzGKjV5w9cAXBEUMiK3aj7cayDGJdRvchF6XM2J",
  "key18": "2Adqm4kvtkSQMPs5uSgaHiLBfBC5NSefBNw8iBB5KjurLhVtqasBYYix1iimsL6pJe4jNTnCqK6wqQ3gkZVu8RyP",
  "key19": "3VN3XPzxksggfMEqNiGtYfa3jzX5g3vWxLtMDMzHBuert2nXFyWnJnCzipf1q7vpNSgdQynyrPLWp1mNESTHUAqs",
  "key20": "QCKXtY3kn2wtJDkwbp5QGg8vVFFG1g2hoVdibn9vqoSaSUYXXX4GFgHyCdS6raFAcpCRwHpboGckRUDjSkg7wfM",
  "key21": "4QGs71BPbvpVzibMNJv2KgUuaQ9UQmmMY1BEN3PN7ZJaKoAGAeasn19GDHm96K8FutgnwxmVAoDR5ZjnUDJWoBXj",
  "key22": "37yMcBgYi9bVSB8omQRNjWSDP9LGF7RNwVxLMRJbXwyLx1coWHc9NHmVYdx6mKtKR475vkkoXGB1ntLd6dSMcRHf",
  "key23": "4RgV3yG3e4AxHGkJEatkBKWikVWTo4kEhm8yXzbz8sEM4Y1dg2qFTZdY7aAzXQrt9f8P9jizBkquW87hvikLMkKS",
  "key24": "x7HLiZQn3wuNPKG3GqJVS181oQfDojuibJtYMm8FgQgTquaRfovwL1pr1eVLHQk6YBCBM62jE8KT7Rses4fwsJ8",
  "key25": "44CA4Z6BKo7i3x93ECUkGMYmsFKZsBXJdPRw7VKQQXwURiCbeTYWtHz9Exfq6K1H7hpFftnnt44hmzT3XPqCGWx9",
  "key26": "bXUkE2mbai6E26SNbbB7vmANLdiQzGkuRGQDWg4RrKawLRtGkfNjbmB8RsnBz9RKd6S2uWpxqjJQb7GfDXUk6Vm",
  "key27": "4Jm1d5A8vAnnkEBtVXzu4iDYDTkWVmy1qK49kJihxLqJG7QmCmetWFVrxEfXnZDxzG2DZq8RoMHVqgd2yitR1RoM",
  "key28": "5mX7SDfhwx6esaiAmZqE3hqd46oZqA7dJbESUarF5BwMM2DWwgFXorTmRwXXBmfLMek1QhzHM6Dy4ohsv8zAjoP1",
  "key29": "2pTM4nbNiBw1Wfbzud1C1uGcU1UFG9sW1uEzkR5xrY6Tbrm5sZ6qCxf8dW8z6fjkqQmMuk7iCCKiE6PGGCKaWKMd",
  "key30": "4uMZYwzMxTK3sLcUWidzi79963oVb9fis5YnTQKVeD1Vk1ecEma9ZhVwkC1DvAkb386PukmTbMb6YCi2fkptq6Rq",
  "key31": "3BP8EhkNdTUK54ehPAwsHCGRxjab5imnJLdvRPAwBiGrhDLHAeh4W9yfutcg4EM67Fnue674ncJh18msxYPHndoz",
  "key32": "4Lxeb3cFpqbBCnpGJxr1D7AhHUD3jabgLspsFPP5oaM8WmDBDPVzNrjqH8DEfYKLfejuiMvC3tztnpDr5BaZrhmr",
  "key33": "7vmy5NXrH4DmRyfCDgnSbRvYPhYjCULi3wdT873827vGu1bKFKXJvcNJCTcsFirp8x9adA2CG8DH2n3Y8kCfmnF",
  "key34": "5xvy8KWaD3fgUktUZXen2WU1sdmG9sWFXv6LUWTr8rPBsdEWQeeNi8BdewqcLXsWQRP8r2mwtQTtDQRJRNybeAZD",
  "key35": "sZX2292XpQw3RZKrSLmdK3YJ3nwa9zNyDcL9bUnG24q7jELpxiZEafddCCZ2YVPL9ngzgSjuzBqvQKKmDWoxpP1",
  "key36": "W9RQadZrvZE7xHHBk4Envz7rHsy33CNT8mifzWuDdRVAzPhxpgMy1nXeU5poM7KfB5jnbr3G85AuEEfRrae8Rd2",
  "key37": "28RcWmVhKwKVw511Rt4qhtSTmgxxaKHkLtpn4sV13CcFwvNfvwRquuVfRoriERXeYUBQwsPw6TFiEQLvUJYJn3Nz",
  "key38": "46RoF5M2ir1hdPAzLFbBCgrDkcuwN4LSbDH4K8hmZptVDyK3ufSaUL7fku3VhpuEo27KrjnK5wus8wYMf5d9LEZy",
  "key39": "2B9uishryWMoEBJg1xaqPXvHe58vk9msi9r2NSgyWu4JYcFh7EXL1WFwXWwtA7jyp2o9p1Uryu7rFXa6WXd5dB7m",
  "key40": "3VFqCbLKJRKRBfNuDykqKRYsnB7FGxLHABriPd55Av37pq58EAwLCaYYqx98HZ7Yc8ZwrLuqnUfvL5uijf5Q3HTB",
  "key41": "haU59aopbpyQ1uXs3dbKcvxgvvCE4ephwdwFaE2PTHZaVQSm4zVAx35cSHS1MmijGncQEsf6cjR1UCREptFK6Ys",
  "key42": "42dcXYSVET3VAeHKw1w4JwxcQNL4fnTFxp3YsXxsmefJUrrGWo9ZLPN5s3KaqbXCCV2oebbtdv6VYyKT2wgEiBKK",
  "key43": "4fX5uEoJimvHMJTGxGVDAMPv5mTFCsSJRt2Y3E71z7DVZ4YMLvoUWvCLyN7AXbr1ujK5ZqSRNURQw6TXzoFMQQxJ",
  "key44": "4v16Kkuumx1iuFHW9yhK4YgPmENL6P3LqRKehXEkrC8QUfrniiMGddqpEnCw2646Nwv1ZirAVpQGmBgkdWHzfmZi",
  "key45": "633o5cWkutgr72NTtkuxJSKTs2scam9TJi86byxJG5eRz39E3aK4Mi5YwouKrbmtgNe4HoebCeFXRXjqq8CNyMgY",
  "key46": "2ByEV6Fvxbkco9ptzq4d1NvQKS4LuBNKRqz5Fqdb38iFm7oKsBjy1jKZKcn55TWyLNdXPA9ekz4wAZyojE5SEyuh",
  "key47": "35xxrs4jgoJysSJsz1urczTsETKdEojnp3Q3xQW3cYWXxShcNwsSqLKwt7sH2k8PenFNUqLJYDx15ZXFpURkBiAR",
  "key48": "5wfzYivVkdsQarUshkrCnyNpw4D7dkxq1mkE85TVw8Y41LBkJyffvXjxMGUjKbM8bVThyWgEfJaxTmuqdJGkVgix"
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
