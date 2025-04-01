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
    "3bBcXB9YUQFbE69DAKXFk1uJincpRimQY2v994aYr2ybnreQtmgSLfNcnUWo2WdiQQkVLYEnqtDxUhPFwsdAgryT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "511bn8NkvWSufHncLKwhiGoWZLekdn4tkAHS7wb8nEFjn1mKFcY7R8ZJiXAF7tKY8LqyGHmNfZpctgsRiBBwTiBZ",
  "key1": "2MyPCBYBJrdTWMKKZ4RqAc9Fp2bdNy5ibSeh9sCH7f7JTY7a9eaKRcVSwiMcC5V6pfTLDmX9jPYNaCm39MRJdxbW",
  "key2": "5vYBege6g6J7er5Q8RvgH23KPBqiczNcDCUasWAqSqjsmwYyVp4JrAmkNw4NEXjH9u7EG69uj6egTARja7QQdTYn",
  "key3": "4tRDVuSzNHZ6XKLg3erohgo5C4TbRMdWCR1qrYocvfztL6LR723t3PhctMwFyh5wx45W5kDqt8eysvmp8UdT1Mh2",
  "key4": "2HPHsRXDF2xV5Ukkpv4RkdYTo3fKPBR9UjFAZzpPZYDHNbfpWw3ZxhdSJrnJgqohGoH2eyebmnizpxuS8DsPgjGQ",
  "key5": "z4fS1drbt6QdVzkoQvPwebC2oSNcp6s8nhSkyZMZPYbrd4Zc84uufWXNSForXc74938Y6nTo96fVFNLnXACzD7B",
  "key6": "2DjVA41jjAFuYpPZ375c1rMSqfArVNSPEq81Qqpi25FgcFrbQvsCccNX2CQjnkuikcMcg8pdQsGTNZrwmrohkEi4",
  "key7": "5KzDvei3Jp7ZyDf4A4KLdrUrtsBAn59Wgei3T5z3SozjnLqp76vHXw3QdWtFHHy7eVXa9KKW7yszqGC4WRzMgiJp",
  "key8": "3erN39Rpos79urHyUmLAMvp2brYaZoH8iuQn391LJKARKdVXU3gfvuSevAqAhPnha2sexYZkAVFkP9TEevoZHuF",
  "key9": "4hMcZVh53Bg93KFhoz2Awyx1s7Ndrr3JHjGLM8jVZKvy7rMXYn4QbnnGygXyHRpgQ2KZEiTb9WkU4SVJTCyZinCD",
  "key10": "4Yr1ej4zUmcZ15fZwqR7cnpaN2BzdMNNfopoarZyJgq9MyYScY1jUDP25ABPe735Ta7YvniG4LoEnMTR21KGaDTa",
  "key11": "2Y6fvJ9SEQjE1N7HuP4N3z4JE6VQTk6KEPKNWrhc1WxEJgBNfqJLubA4UZDAf2bt3LeTSCcMFSJ5T4pfQu5jesGN",
  "key12": "2PRZaqpJwqGNdWi3kgUcFKqvc3ji14nphaWcFrP11rAhtLXqu9GMm6m3jm3pzDTNQLmNZQNSwmH7fJZYCLfMwaRc",
  "key13": "5j57wDRZ4eAyXmqgn5ZRsKo1gDVZsNZc4PrYAzDpnzxcbuTZhU9BgRDJMGmcBh2M37fqRs9eUf4KXWLP4Z9CMFkL",
  "key14": "2zmAfP8VfnooHW1gc6isecP18Yf2fwZBgPv2mPwej9ms8NiXBmQAjiQUWS2fyUTsFg8faqSPx7RidNpxE4YSuqeS",
  "key15": "5D38QwAa8sCpwkHmBwRb6jxrtmTNopgGwHw3QsTqP8sCjnet7f2E84U61FS8XaKZmQ1nWD5Usg6Y52Qbr6as2mrc",
  "key16": "2KQKPEPdsYWnJzRvpU4bZsj1px9g3zHDtYZwhxhQs268QnYnukHW845v4ov1MQNXdjcjXKNtWkWH1suZARWETPBf",
  "key17": "3PNshrkzco4KHUEHrFLZNoHTAeeHVyKvd3JBHDMaBBpWUt1QRPK2s4LPvgCadniMhg5LCLEWjNFPf1V9gh52DwpC",
  "key18": "45Z6KxRbXEtz9k8j2QGxJa99bVoAtXhLSHdo8uJ6skpkFPxFHGTXx6bQzai6YLcxhUeXKM3a14ytox9puw4hsBhk",
  "key19": "2gFhoyowZiiJtmPkBqueQUJGzYDxyhWVbD2Wwvkktbsbf4YYRQ1F8MgWp23sUSYq1mhf8vV7rLjxYepXoh5MM2nE",
  "key20": "3mwNwXetirKUpTLU9ezcT5z1ydow3N1Sbw8kacL4mKZcphEtrcJgLxaKco2DHEjZqT4kqV39qwhgZR3VpaMakjzp",
  "key21": "21sxXLi9Ug4Ye1xdySdw7DJVu1fRtZAKHCXMkmmBS8RVuvkRFWfjbAJrJs2hBcpos7nqFv1oCDCuFnZyp6CsMNv7",
  "key22": "5ayqprXqBySABg4xJSmMu1jcTgqcJTP1xP7Z8rkrVsScEuAjgVVAoz57ZNSd67Da2iEGcKFT3dwfYPC7bb2vG8Dt",
  "key23": "hfPYyJsfzae9EsrLHVmvuLQwNPtWRjJm1efgHuJYcpSPJ5jp6yVbYSgCgDjjeSBPkEWbaxyJjboNZ96z4tKAZZn",
  "key24": "4yvMbJBgD1hUfdpQfuRTEku2qYi6ckcR3TAoDSgaD7qrs5AG2nG93aj9jP8rkJLzVLjLfW1SiCU52NkGBh39XRnN",
  "key25": "51Sf8ASZtr7K1VyagwZQjTKBbPZ2P3py9VHRmeRMce1gENWKBjDSBQmCjxFj3WKS2sS4bzH7QiJ1iaBdpYj4z6g2",
  "key26": "4mftPv2PG4bP7ptsVgjM14AUWrwL2LYpDSTGEaa2rjHMf8ssXQsa8ivnsUabrFv8fmKLwRkd98uZbPMq37kZ3DHz",
  "key27": "5SxUiiYpMFkoPmb5v84z1ceqL3kR5Qp1uG3KPvagjADgn7QfHtfShuLEv95Fu7uRHojmr54UxWd1YaWgMhu83pfh",
  "key28": "2J15CVgWH6XtHEFs6wY2tat93E1nybSwPKuSJDeED9Gc5aLt4fNgEKPZtdUMTf8c4VSyMJtvAbJXsMqjCTPgMnUv",
  "key29": "3ZByt4RjxU8axmD8USZNKUm2uosEH2pCL3s7UnZmJqbgFuDSw67tTY8pUuW8NMhNqvctMAS2Mzc8h3i8562XXhXV",
  "key30": "4PNiTZ9eJ5VFJJ68ZtXY5qqZtXo7jDASMwiuZBwV4UhdtFdnvvHcEJ4FTBrTLYVHEKMiP54QZTK9iYCcS2bt6EUF",
  "key31": "6FwKFmbjzU1A4qLoSNh1pQMMU9dBAUu4Ky8QjDcypgqxrYx3MPy3SCGsPXYXZoFTT75pg16PFrrNqw39nG5HzaM",
  "key32": "52JriF2aY4rP9fakqi4cwBSZ9bBfzigExErCoYAxp8di6itw2QHwQ2zPgYMnrq95qjjkJq4i2zZjZMgcJcZD7Cs5",
  "key33": "2ujckn1wAAyFmqXqi7Wz42hqPwzakMZRz3miWaLNpuW6m3nLnun3Re3TK9hRvLke5K7TcBnzZxF6aZ7fF3CiSLmA",
  "key34": "3fuXcZoB4noCfK91ygJ3GA7zt9bD5z7qQ1hwC39rJKZBik6RBchHFvYficU4kqvMBLt3zrnKoRFtozjEiSVzpFAg",
  "key35": "61XspeCDS8mponVXyavvdyBnajHr1z94UBR8bBDiAhGtVSpGLxqMU7RcTmp47g1TDupZyDastCiJcvZi6meTU2dW",
  "key36": "56bUFpWhNcttVdemFvbEK8a9Ucv3uyei2bnzBwef2fnSTtN1RWuSHnsq3AxLE2ibMEafDKhsehsBdgw6P5FFHmUv",
  "key37": "3QP7d1f94Nk42Xban9TG6gk84HTpbRTV2eSwuZK9TkCGPXgJmHt6t6W3U73B4y4Ztx6mywbGRnQ7rQQoSTBbKGUF",
  "key38": "5VnVJjpHJVvKdKroiQAwq3wZh8GZpGKksuGSSB9aGwCCf9NWHpZXxgHmUdUXm1ouAzVFSecwGb6mt8mSPmgFdxFY",
  "key39": "4yuUTHf29Pr3BWjYPAVX7KBdjnH5jYhrRNxMKkvCjxbi7oFFbeGRDGucYPAEhaBL6CkVdSsXoiP2Sv1EZ5pm4JwA",
  "key40": "5fPj3xcXXUV8MBnkE8vw36xogsotGkcfF7F46ZpagYbb4LiLAeBpAT2LxQ5Uagb3KuikE3jiqpxy35TGfCUzcqPt",
  "key41": "5UNWbPmJ2nmV47ovfYxsL7pGcdKerpdpAEuchyZ9VW3YMmUaMbFJzoYK56134KwiXcMKBK5BUuqg4f3JqVkUJ5K1",
  "key42": "4vi3oH8TRxGMRVhfysDjhCzLMsNCpn5X5Y5TecEc2FvZgBzdKPgBqkTHuKGVMRKUCmvtzU2unXKCFUvkT9yQohyN",
  "key43": "2zM7iQqp7QfdP41hUKiU7Z5trsUpAZ9tLY16D5XJ3CNfskJvjNQVbaW1nGhCjpdZBLAQthCzZLy8f5aouX72xmZG",
  "key44": "2nhgsdHriJtZnvqM5jbkUTZRtb8ic7kbToVabVTnamn8dSb8vt5srz2vpRjHXsnuQ4WMciVYkPjvsv42yEUbi7GF",
  "key45": "3bFa5aB53BXTMYdxb65MTskeBbHuXhwL1Ghuue391QrMaphcXtvaSQVEc8mr2jzVmJDRAK7EchAmQTrseFviABtG",
  "key46": "4eDewZeDPie3fRdfFE2hN2UH9dvfP2Wj8qAr6Xwru1Sx55S4dYD3gXv448SM6nZX5VP2EQDa6jE3gPBYB7nKbeoR",
  "key47": "xrNENAXy61Y42eQ57rtYR6br63Jee69fscTjpzMSmZWruLR2RXEyv74M8eRN6dTSP5QQWNrkhQJuVcgwHMhKkgk"
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
