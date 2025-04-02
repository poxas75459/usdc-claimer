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
    "3KXB4fRPZUGvUEH8DH61WX67AnF4zn9kbLPresvAQKRvKjKQHMs4GdQrhgpc2ZCaumbqSU7ZnHkSNBhtXiGKSg2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52BViMrzyGo1jY7c7zqDzWXrQaZf48waDDxjS1bf5W8EibsnTyVoFNtN4Tf8ZDuGHxtrrEmJyh7FC1n7S5d5aVMS",
  "key1": "s6o19t4o7enNpo8fwAN17e5EXb5gST44LFhBAB7Z8M4ssjWZ7WrCCvDmhm8ttNUL8HoMhKi5q3xbxZc111sgcUS",
  "key2": "34y915d8YGfsUHGusaLMHewzjuNEPsgXZUC9dcFZ2kbLHRPJSjYVWgxVrr7Qoo77wic9RAgUmSKot9ji4w5HTnHm",
  "key3": "5BDmv5hn2VqTzUGGWTqcE9g8DLTbv2BX3Ykmev7Yg4B9TsLs3hoNBv4ZyvS16A8rNoFDtwvSZ1AWMuRJC77mYhzz",
  "key4": "2rWAReBiZnSMizQ93Pk7CJs9vm3JRhL4AL7N4kiX3uz77Rjy7Z1qXnZEoEV8qXhLcbUrEPAgS6bPs6boqH9szGRz",
  "key5": "4MZK64jCYPtyC1JZybtEWdby921gWv745SJDCUGr6AZRsPckfh1U1UAt3eYsLtCNMSgj4gvk46sAhVYa771v8Bo7",
  "key6": "tebaPdD2kEmkoTBMKgN8mdJXBTN1XzMJxeG2ZQHuVGqu1WNJoJfgER5BAfwiXoEiuTgJjJhUfHBiWmvzRuXBrqn",
  "key7": "3ddmZyJbYVkV42ZHXXtoRLkQtoSDGiaX2Fx3Se7mG4TcfB3GzMXUJx9KbB1zxrPZKNpEQk4nfgGoi9uGuJxYwf9A",
  "key8": "4VV1i8kiGcQeZvdk9hucWA5BCQR8UmG2gLLhYNsDYnMjaUvX2t8XyZ7wmZoKoAWR54XTsTjs2TzF2XQjWwJ3xNmU",
  "key9": "47dRr7nnpEq6zrfw9mk4sYbJU9PmoQYgRbwRvvs4bAZDcPJDHTWZsg9v1U5BASQSNANjXc5QJMQTscjRu7B9yUPL",
  "key10": "3AoQDppB7zT8yR2r6C1L86cxp8kZpgtSx6wduBhdui5BxTigsZEYYWmKZ32PWXM1MQzeeLmKfjT3GD54mKHkaj6r",
  "key11": "4vq7tZ5J5FaWuncNPYbMV1b25WoWwY5SDSc96pZ36CMSvrk8CtmkhBv13rk4Z1XadmoJwFnddN1FvWipQSrpU6vu",
  "key12": "27H8544ydWaiK4YTRe3gSMdNafNtNVor38geQn7xBKDsKK456MU5WM6yuryJhFVvYeYNSdKqLD87ixUhUoW2a8JC",
  "key13": "3X7ua6ZLs3crLcE3RaEDdwKACgbJidWSDkTTqxuccL6tEWg5KSeDgxT9DNbbASGf4dvJpyi1t1BUN1gYXwGonosq",
  "key14": "HFTNTBrY1imy9JEphCNDWTqwgzZPEBn74GFkemvTeAaC8qa5phzubQTJNQoDfLgrTEfCrCxbX5S5AF2WFPoP3if",
  "key15": "62YCvMKC5L719Wn6cYGzR8m385YVg2UF5qK7q64iVDcE3aKrWbAJhB8jWRh2JV5zmKYWBw4FJU6EwxNSgzwhAQDN",
  "key16": "33UVn5jGn5GPDM6Eb4JrLBwmo8spe7xzapPwjyiYndAVEUPgPUts6zXbFcnq9TJ25tohjxquo5jfhMjLMakdCrM4",
  "key17": "4UdoDJSsbQBFusZ8H7pU7QfWzw8V6iXaejZL1YBMHoBRfUxmWfzbmnhtBTnw5zrX47CZ4NBBR89jjGqmX6tQ2oSU",
  "key18": "4tcKRT2UtoR3Xc2SqFRkTirMjf9ssSB4mTfbgjXfbyJxzDanWu7xteZrRxTGZECBV7UnTGMMmTjBzpdevZf7dZzp",
  "key19": "3xDJJDnxW8NZvTYhVbzAjsVKD6Tq4DZi317nCxNHABF2eo4ztSn9he8nwbT6uAx4FCJ66KQ4h7hjdzA5dnziJJdk",
  "key20": "2qzZ678n46fqNTnoNtk3xpTZsQJkeECuGuUwy1AXUCkBDUEt77uSMDSsZriaYmeJwuJfD5R4tNM2JXy38My7uZa7",
  "key21": "4kx8wYagfhoDvkieZD5rXiW6TVhbNY8wxH6WuEA3f9xGMhu6Cy3cwoJivzBWVcvmjk86ZivFxKyA58TE6XPLzyR3",
  "key22": "X3qdE4UmzvtTFDFCgCHzTBwHMs7yM4FetYu88qH1pBDTq7PE2fySEqkfLATGFZ59UGWXBvHEFrToGKAjTD7X7Hg",
  "key23": "47Zq5M2wTWpEgJato2XWM41dFcGAkaezTySqMHA6UNzPHPXxkc7qKoQNDrtujVtucWDqnPqGYAd8gFt3EcKWeXD2",
  "key24": "2q9mTsHe8DD7M4cer5uKN5CQ1dW5YrPeXQm29U6H7esJSaCp8reNHPfb4dPC2httgXAHnZLJa3q4scx21hdEx589",
  "key25": "3e36M8yyih3eganVe3Ud5kMPYcq1fAeyugtLndwvdstdCQbjNjv6Kxx9RwE28LaSTv1NE9nCMCpihsbLuK2XjWKn",
  "key26": "3eqHPwdrGGmvVFShiGKjsS4muRUevrzFW8xnFo6gzMABBYCvmPSwzaYyki4RzYHxZAUyLWdnm3a1W65zFugKyCjX",
  "key27": "46XztmPPUfDWtZcUPcAAEye2TgqdeW59ChNbzp1ZSAodR68vaX3w5K8jNjJzcjWeESizwKEqtEPN2gb1k84YaxG3",
  "key28": "2SfbrfuvKxKWjpwdwCTubPyGkhdyFarcVThLFYcaMPrQeg4Z9Pmx1S1LxrRKmQLPshfBWdMRs6w4nXU1jQPMTpqK",
  "key29": "2Hb7wcuSNVXFz2C4dxnjR24S7tkZYPX4DhePkjmaCLyvzpDD4372WQKWLZa8qcH7xcw4vd8jmFZrcLM4SxtbtRud",
  "key30": "2yfhVBsRv1c8uty4PU2KCj17SEUv8JL1w54S8JN3FKmBxCVxAau2im8J2T92Wt2d1CaABfBW1o29vbtYDcF4vwmE",
  "key31": "5gRUbnWNq2Prk3TmFH7ynAtW4jCZBbbaFJVvesp8K8LHHa2X9cxUq8croJ741wMKJemGoM4hWrBmCg8D1FAZBrx4",
  "key32": "59PCnpWy1FuGUUJESXS36WwCtatD8ivqncxz3vjaKkQ3mnnMuFqX4sPk3NTDWP3bec4ryUW7cHbGcjipn4nxNXg3",
  "key33": "3ErCdh4xzb9XjRCf1QTLoYbiShBENhMiBy33n7NDta6NcbMuBKHmtJZpFKFScuxvrgM1XGU6eWNsJr48DmFZCdH9",
  "key34": "4EE13Vv94J4AwLQWhyjbt8faaCfPEFj5uTy9uEJcU1qCFiDUyJ53m4fxWPYHUnJwb9HVJnDQJFuuTcmjG1Enjwc4",
  "key35": "4mKmqYQ4Reeo1aBLaGGJGGERDjRkaUcAqguGSwbyFs6Wr8UwmtDimMqHKxsQQth4HUYXFhQTRABfTBvBQLPm7vFK",
  "key36": "3t2brxXLhGBUBS98TqGSgw3MniTXcMwj57QwWz2FmWy4KuVUEUwdys2hnD5snYb8cHTMKb8S2iAgwC8xH8X7EEXy",
  "key37": "3798x8sZikHbwnyLzVoALPDLdHvEkLCsNmcU2zwzmo3Q84cQJcgp9WWzpwiV2rSSS4tKkVxekXu2VQ14LEUu4biG",
  "key38": "uwH7LxbuuGc5KiPZbjRD9KrnZiEYfH2NMzPtrUMRMs4EAoUWMymvJixRAYcxKxypAgDyFp5UXkhftM6gk9NrFmK",
  "key39": "2atqFLPpgL8s2LmjePaCpehEoA2dkAVmbQP1Q7ahr6tmiNCDZr59zHAWMnirePmehWuFnY5fFgRSTKwcsZDqJmEh",
  "key40": "5u9RYyYwK1qjKkxdjVYyKVWoBcNTEJivzMLKLKUiaqqT3811MmkXkATh72x5DQagfvi3fFEUa5xjwBAZDc2Zmw81",
  "key41": "BEbEfR2VG2fTULZa3ShP3LGRvGoUMtzjvVJyqjMENGmPfg4ygXmTXQxFhrpqDHVT4LhcHRRTzStphCLZMJwnzoo",
  "key42": "5TRxeaeiiyDmGvbwVYGoZsMEg2JPkyYox7aSNdjC6iNE7z6io6REoNsuSM24yq6m9KXFA2EXeSz41RugtXVcsAM1",
  "key43": "3tc6rJ3DACqY24yc1b9rTKv8Yg9SAtQDTdARmEZEJTUa93cxzGU51H861ToNnTj6UysGERXEAHEstyL4Vgd8kPuP",
  "key44": "ryYP7h9eGuQf1Mx11afKpjyW7eV8LLXYkdtmoQ631qyr7uTmrL1wYL3zVYNakCmi5psJQv9VQ16wTQGbS1UwTTz",
  "key45": "5doqcgGxJZ9w9KPJeZfqxszC7G7uZeWUHcpAdJr3YAEAvvgnjvXMcu5R9dAVditkebz7V9dKuW1eahGNHPWu6An3",
  "key46": "4F2TpiyUAScmgSJn3sv1J3rxDNXvd8MWkq678jL7XEXJZvWaR7tp1gudEiDzxLjdYgktceQNF1efHuy33HUye3rE",
  "key47": "2DUMVWCboZA7jz8Ju7KWFw1bSioaGuNfKNARD1HPFf51p5G33eyQgm87tYvpbXodcv88np6mNhCPMYvmRkjjf6yW"
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
