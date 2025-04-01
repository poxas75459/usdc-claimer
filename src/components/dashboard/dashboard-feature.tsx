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
    "5oLEcScSSkDD4YfR9F8mkqZHuAqaT3s6WubMMcXv6KokAVCweLbP9ZjmC3k4nDHN5TqzthA5CQQnCJFdaNBFDCT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44nFrWHcBn6TeHKxzSrS2u4zARYigZ74Yvsc2eYfYCgVgMJEBYNTz8MYQJwsE6gAcvH9YqyTfAepw4nUqigJs3LS",
  "key1": "3U6qJxB2Pdkx3yx238jBJpaKiQayWTG7gk7GPAtrDaVFosyBsQwnnAXCR7jbdz7BveGkuPwLMBRCyAZFeD4gRWXz",
  "key2": "4SttykAoXmcvkYGaCZaimwM7ZgEZ58hcaUFAcdFfVjMFTBQQ7EMMvUDxwaWTzYc1tF85e19dNdtevKqAyDfjfL6i",
  "key3": "2cvmfoYpugsU5zVbnPNJDoaVfD3qYY5MkAGXRqVgRsHy4GNJNCxkLpk2ejaPbUYrvPPr46dgMmzGMtYTRxDLZQ4e",
  "key4": "5cMB4n4ZdBuZsWLWQXUECbf5dzqfUgXsES2pLvVcSYogEYZcMotChQTZo4QubKUioMmqfCQrWLdDwWC4z2UJu4ud",
  "key5": "3BRXpTrRtVP15ncQeESpzGW1cZAShtE2VqHXpZz7Kph7gr5euvDQyv6YqDxNXjbG5ejSoQa8sy45n81apFoAmxAb",
  "key6": "sKX5rM4nRJdc5CNZHetrowRFNfCgJzaS5c8snjr99L9kje4KrNbRDA6kAmMRz5iixRepPFYvpPCnwfi91r8eyX6",
  "key7": "5j3Pkmf18VS2odT4ECJQd2Y1aFojvuLLdmrUvAYV4giUoyK2L45BdRCpqMrMYHuwdRwUQznodVMsS5CujZigvfGE",
  "key8": "5sACcAqac81n2jyXoX6Z379YdLCsyV9mVa1nySFd7XThrATF2yVtV7tZFRERDT8ev6qxArJDYBzQ5FAnRATtMRVS",
  "key9": "2ZT6hoghoxKvHu8REjk883G3VAp7t8yPfC1nix73pDMUbDj5DeNqUjtVZUu7HsHVMkV9Yu5XLwWdxf2EToL33WNB",
  "key10": "2D4uKmsuZi7cZqkHfayTMrdvQcLNeMEFwrJFNuwHHPChhaGpfxvkQgFZxbREZCTAp5ZVfANNZ86gUWNEK8VtBxFR",
  "key11": "2nvn7vYHYTRSZbNuK1LKg24P8uqyE4SMPwacRQUHAo6rufAr7mvVKKdd8AvxbA4a4NuD5zFgMN15F8CwYWdQzesr",
  "key12": "NMruieeCqixAXbnux7KCq3cBZmNVfod6sTvdt7vF7PTRGjADvGpYmC6nym2G2z9ygVjBupGEPgwt4TmMeHdzdg4",
  "key13": "3KKzhbxJ3CfsETP9NDHBRq4hDCs3gDD54n4NgGCaU5mhqr1nXpCph43eX8Z5YesdLneH1LuRRfCL6ygtCFRWFgz5",
  "key14": "4Fu8WMMZTa4qQNDgpuuby9jJbSEfque5aJiAwRDYUkmqF4SvKNypvn36d8Yh5xrJCeLpvBQktor7MRpKSZ15RePp",
  "key15": "foJjrXseEJrq9JNh9PJ8y6UXb49A1TGnYybcD6QnnbjViHnQgwVSjK1rMdCZYDdtmEd397M9F1UZfsJR7irtveG",
  "key16": "2z35FD3waXBCwKTkx6DHxssycb8zZsHvmy8tZ9NEz92mFELBphW7cYEoTHQazbR1LYSg47RdDAc8TCdZorVJALGE",
  "key17": "314dnAqY4eUfcuARJ4jmGhX6mZnvsYJgY4dacNrqnvaFoc6ex9o8YbEq93kbXA8PrNMNnAEZtyWQB5hBx84DBycM",
  "key18": "5j4fT2ALRusu2ShD5hZZ2xphVKHRe187pUEU4rHXutoaJ4xjbm6vazCT5oEer3zFEkham4CfGoVmixSvRSoUtxxR",
  "key19": "67Fs1WCfwkvLfdSsGiLUyLrNBn4SVZitTbL1DSyzr4pYZxZ6nZWqLEvaaYkB1U5FuEh6iY1DWpcpE3vFHMkmF4wD",
  "key20": "U6Yy6wrFP61ovtgE1JPE3UYpEHGnXK9a1a54MhpMaqesK53WrHrVWyP3QaqANuBKSq6S5jmRqFn6RJ2uNLT9ywd",
  "key21": "3ruYz3Q2Vg6JcMXVN2eWqJ61HdzoP6FB2kdjiVBVMg6kK2Gy333LoqpAVTwrNNWZwnDnKqp8YAThAv8Qpc9uyhUy",
  "key22": "5LUn13k65VyLoXohGurHJ99WiHtshni5u1oK9cMCMGwWZsWnCvCHi4b62FxYnbRUanf2Ue1MyZXXrXXioSKkUKHZ",
  "key23": "9jkjNmNVoL9bkEaeToTiBBDA2j4K8UY8mYMyeAmzvgVxSX7tSf6AXQet4BbamXY57xJFKZyzVJisYLDRFfj1exw",
  "key24": "ghCLvvUna85NL7WX4vBngeP6z1rfJJ4jm38ftz8PF9djb8gu6riQj6zAZbLon9XC2FncaQtm9hszVNSUQk38WSA",
  "key25": "2fE1J8LLttbd1VMi11dYDvPLvk1bbrKZQNka1Xy81wFksbNwZ89Zw9XzzB7iKq8vCw8zCimFVbXFkHuLNCv6uoE7",
  "key26": "2dUDa1zavsceGijCkdPUqZgHaFJaWadfJUfA1Kb5g5A1ajWZJryMFa7fRPKA9MfD7EJs8mFcvvu235GQEkkDbHQc",
  "key27": "4Dku1nFqJhmGTD2He16rYoqU6U5Jh5BPNsZVD4t8tMDm72GeRixEKqgpHPw1abg8umtycqj2S72Wy3gFG4ceUjSt",
  "key28": "3TJTo4bAwvM6bYuM1o7rBcp5GVFCAutgJkateTiUV6xya9c2NrttPU6cTEUn3za5LcSe3J7Z2LstMpdMZmBYxqZo",
  "key29": "5TfzuipQeJUGzBtJqmonHDoDPvYua2Z4gSwsXD6QEH3NfqZcKMZyiWGHA3g5TnLerSkGoQ1CNiz8maBLMN4WXNJT",
  "key30": "hdL3sxjXxCoeDLsQdwYmr8MiMr7AoyB7VGCjhZiAWc4nWtdio3CBeisz8gKL4smMXUPwD1ZHpVWoMR7WZQp8VW6",
  "key31": "2SXJX3xzRPg4UyNYBmZ6RmkeJ5oak3S7UYSS1F2jP8EaZ22S9YAXNhQy6dLAyRkQFsf7UpWvaFr9ySefUWpigEN9",
  "key32": "3u74wHfVQFMJ5zmhbhDQ5rSc8JY7CCs6YFdNtnJsqnzzqdi69qLoamNnNv2dgk8QDp55kv1wSqy2BLroGJCzUcsJ",
  "key33": "57HhfxbFQFxAUs119K28Bf2955es2CLi7Vyrofg1WjKCpigdHyGL1xAwXLMAjn8LWQFfKuzemfAeqYY1Hh5qPybZ",
  "key34": "4MytRfzr1N9hBThbsHWLvYyGN9dPSgKmpu2w5rMyH836NXpZfkHjYpGRPpiF8WC3UHQ9JPAMaPeAWJNmbxfbpG9w",
  "key35": "4LN6wvYNBVuNxNVazoKK5Hp48YWoF7zcvQgxSjg3pgdFWK2Uz7brywpRhWwFxDEX3Bka9skX8mZ1usp7wMKop7We",
  "key36": "4AuqUaEjxpZ6qtqxJUABNQJu9hU9nPoXn3T5rdY4yYveKXpFG3LdPkh2i4Yb8NWizH5FBkHXdAiF82CwequPRifr",
  "key37": "5NrnGEZC8hn4giTcCvR1wXFmP2d9bWN31XedwTzHyyM1vowoPECBp43srMRMLRbTN4USxvcc4noCGpZHKAxtvWZJ",
  "key38": "499TwojtuSxqbVmM3EnjpypJwqqMyY6TAik7yyJoi47M2ronHbQMcAfdT9Fnj7wBuzysvnPxF3c3dNRGJfTksxHm",
  "key39": "297RmE8bCzFYF6qqJNmLBroLQLU72ebpPAjEdPb441sZvrkDn1qKQvP5LFEsQRegFzYkzhnb5h8PHik8d2Rb7A2G",
  "key40": "49GAKq1V8mY1LWJrFBjtkEv1Fv9vNmKoChLcUxRi7fehPzc945LTkootmtaZezbSgzscTpeF8cc13rXYBwAEQYGy",
  "key41": "38Fnz2PpoEmLLLWYYFeFz2W3orvefxXjgBMNMabjv8v9MFzCnJtRVdPJDZmZF8h93CRpiRhBjdWK2pncaifbfPBu",
  "key42": "cCqBhtq23csa6yZeLApuBCv7WgLTtZDR4rYDajrCEEPs3iByoHez6cnx79VD49GibtqgDVnGJsp5SP5xxatjgeM",
  "key43": "4hoUsYGGUWga7e8jBN6oNTbvg31ihaAWCXWxTbJ6di7dN1g5oqHFvERfR53a6fHq5sPJCZMCwAqt626DbGoDf9Tw",
  "key44": "NkdYNMBYT1mXtT9Mt8SseqDH3w3Wqt1RAhPDNLfLgVumotxQorT2nQpnLcXVmyWd16qkVrSUEYTDJFvyoAa49oH",
  "key45": "21KLGYkJDXQVFeG8X8ad6V3VtTjgpSdVwWV8B7GoqJprCiqtdharM8AJCewsttZUSt2gcFZ8yNyC54XFZqKM9Qnt",
  "key46": "2VKSShsNj25ZYPu3TwfjQwDBurYxi7AXFg6L1M46a6PYdK5WpMGCSTnubW2S9muoBPGrqDiUEMoNZM8eCepbfLCY",
  "key47": "31xFDW5Ze3pP4BMaY4c6pqMHvFpTmQwB9tS7LG1y3W5eE6qfVu84Gcn232oMH3VoSKJRox4JCTkDRVfAWqnyxCv9",
  "key48": "4wsCFpMZhXmBUZciMz2cbpgHeSPzTnRq7qD2zRXW3YpSsCjh6R3e5x7WaGqVHnRB6gxiczADBvNkzYYqMHUkqFvz",
  "key49": "2We5MVxM6JUqbKMdfVkLma4EywK3CnGFhHZemLSJf1XyYFoMG19tXTSyjs9HwQ6hifxVrYo3vpGGjrPNG6gcj2A9"
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
