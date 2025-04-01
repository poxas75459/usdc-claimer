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
    "2h7W91hhk3gW4HK1YkRwPk6a4N44vJWjVheunZqQ7z2M8SXXL1xqyyuv3yRQko1cSHXSg9BksQnAFjuiv1gGVoA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UJmiQ7w7PWKk1WXaWEC15ZjmiHeu3gQ9PygfHJPcdcHPEJkSNRSYLZzPys25YrUrHAc3hP7D7LF7K85M4kqJYUx",
  "key1": "65ijEGh4TVhqDrUQBzWpfAi3gvZpXhR7sNgbd2eMNWfntjnNqjpagAQJcQ2BL3vtEiqmF4Xyo3zCpcioT6ohzeHb",
  "key2": "2YSHP3vCmDZ2ZZzLquHX3Jheeg6dY2r9EcfNmZGYNAnxrwhZ7SYg8UWjwMMZiXkbuQUodRM7PP7GtbBLorRr5ZKd",
  "key3": "3zd8Dp1WJDaz5dzZsY9DZr8WqwuqofMrEaNUrjzhbWGntC76bmtBKxd3WZQtWB89WzfEjusdnqdtaonpoGTJjMQS",
  "key4": "3iXrSr21sgUF2hMyjPw9RSJJRCfJ2gwaipfKR4aXjWG9azuG6fjHjtPBnfmPK5DUid5cMP6tJA4wiC5AJtxM48dj",
  "key5": "2gzCYiVEW5fbQbHnZ4zJCWSDxFL1sPqbagwiTWfXEBfgogbWFTTMNnnJaVT4fFBQPSwmvp1vqg2FASyxuUwFb1YA",
  "key6": "56Q9GhUSrLHGWYgKkTnzebB7bXGk1HqrciGfXAHzkknw416yHzSRxbtVWbWyUqbxsUbgh1fTWF8jL7CByJsR2zJ",
  "key7": "56fwJdNDALCPf1JoFzp9kGpCKEPmNKpa9cZSqq4ySPMWaJUvyX9ZSLco6bHYay4wCw2FdrLcyknhVgHyZ7RvPVku",
  "key8": "4TSFEEVWm529NFuf332K57v9FVuzvg5LeM9i5hTGna2omNHpwmyXMBMrBiAqDfEAT4qDUpQW7fZdMDWf6z327Psr",
  "key9": "2VtzSyeSZMeRP4T7dPhn1sNBgby3CHop6dUg9a1UQs7EVj2rA2XwM37eZtWdBu7madWrAkDAZrpZ2Q7zx8XQMdyE",
  "key10": "AjuPreddAFEHtudUnXSn1uet4Gcq7ois37ZQmsGQAL45j9X9NuSsRcS68McgMdUMSTLSTiKVQRyW3nWYGNYVbcS",
  "key11": "35Tvj7T3hH9MzK4bCQvKSDBhNPx1giXwum5GhphX7aWj3b1yv4YaHXMUFecPzjarswhgrCeNZ8zSB434Chx8Vt3t",
  "key12": "3HBF78QVC2XSRoG5H3a95qVCdYdn5y6Aa6JkGpAJb4gKRKoFNRqoUALvP5AqdDZywn4juAcYahFXuwVLyNc2miqS",
  "key13": "429YwhyaJqDKPML8EvtXoeWWtvKT8yD5A34Veup2RpVKfgp6cGw2RXFvwhhGCvuUPKjnudZdGAseSU9NS2scT4Vg",
  "key14": "5VkaR8oProFRe27bPDNmJha3K4LHDfZh7Fxg26Lz91irRevM3GiuTJ7aR6yArnjyDYTZWfrbK3kC3aNBbfZhXLMY",
  "key15": "5A6Tp4TdG5o2PZocuFvTMaHyP4v7oUoQBfGzyNKn515ie2ga6pfQ5HvezdidCWb5Ca9BpqAP13bUtQKbvy5ih7GC",
  "key16": "Q47tJropvWnhd8qjkZcERiacactPeC3Q1YfcjCuG99X1yrZcYoARYc94jvtsF7bxforzYzveo2n3c6nonvmHC9X",
  "key17": "2aQrdJGFKskyGB6WD2r22PVo5rFGHGiVgsMxzisDNi29o3A9eC52jryobtE5B29F9BDy5M3fGJN91N6cCXbvYaBo",
  "key18": "4bS5nMAy4KHUEbNNqoqmjxgeBRtkhvawtnM2NAiANXosig8gLJ8Ke6NGA5ZjkzbBL4RnmsX3toCMQrZ9UtxDB1Sg",
  "key19": "45rFWMNC8pi9wE26GdPfiy36KkkSiP9Xvpf9Gr2X7xomniG9n6RkzgHMJNWmebMuLf8QNNrjop5EmrALASi6yJzR",
  "key20": "4kDkRh6mm7KwySTh6wMKGgJw62H4UYXcNMEpWMLd7XwD1AYcjMz9YKFfB3UTrHDGPimFCmUYkKD2jsyNKBZtgLus",
  "key21": "2owYTqxRoU759oEyhMvcETfMu59CVFms2A2yvNsT1txC7ebFPLFFb5bC3URBBwqAhKka5uKurhwzj8VXrb5B43cA",
  "key22": "5yJJpWyuALMxG53JWg4po4yXrLFsnhpuq4chNhDUwnmss2AmT8XTtjW6B73qTN4eWDAqNq5vEXcWAhwp5DqPwGvP",
  "key23": "3nPaQZtn9AkdSH5Gu2rWYFrH2WT2m7u2i7H98jGdoGHJLynzKK7gJWWrvaiFUUbFGmu5tY7USAnwD5SkWYAppc3o",
  "key24": "3XK37ZPHMumdYXd3GRQnTZYw8oHSZ9EncBKVq2GB7atmAy5BafLpiupDUSpgBN8GBnQN6qsLYkcxtoAT94weN8Yv",
  "key25": "28diZTHuJyF3ApjkKfcDxr6jHL7srWgTjdAqL3kNpQ3VsZmmZsNd6e75SG2odFig4cUq1jPYG7ZLBYKwiwSAKS5j",
  "key26": "4CCbTJdCrrW7VXHjARxaNodxwFMQfiHRs1XfMBrrEmdNAZP4wYZ4vUCn1DLVswjWbyqtoVB2LbRqTkuWxq1aVbuG",
  "key27": "WTtRST3W3R8JLeMmxpKPnrJS3jsTuCkfiV8pb6tHmHDkFTBkDevJtxhBH8VELEioRGgfZevhRDrU8F7yutD3ffD",
  "key28": "4h7z8jRvZjiSGYk9jJEma9P8rUasiVp7nwfbbcXjywn3fq7ceG5W3cmFNnUuYenNFowwG81443jZBeJ9V2r9HZ2C",
  "key29": "581tssn3ppXK7Hbn1g2XMNNfXEcg77Eu5fKCPQCu4qrHaF1H3xLLhow5wm2o2U3VvLAYoANZ6XVa27haBiXDtosL",
  "key30": "2A6K4ggsBA359oU9AxXkfSgfeyps6QA82ATrMAsqsxeDq7PLGDeCjcD9aJQF4bwmkMxuSC8e189BSwhyq1xBw7YJ",
  "key31": "2maRG49TXgEsB5fvyxc9WKwLs5aJ1gv7XewMctTGe7HRFMsouCAWjVkebfCsShv8rU2bGCAucBzTeRYGmtaT4euu",
  "key32": "5ivmLDRpVRLNb1xPeMz661Vj1Btgqquk9qvZiQvQXxzRjJXLwKZexu1i8PXrGRFC9jYKeh2u2xEu7Xdy8SzX6juu",
  "key33": "5mbwU5BTY8nfZ5shfCqTFzcpuQhj4PwgQtv4FaqaihBjeBTD9wFiyegvUFbMW7sWnUhEiUcdVVGy821j6amTYsaw",
  "key34": "iRZgLD2YxVsztPHkTkPitS6g72h3z6HPwW3MhUcDs5y5BcsYSxLWBREEYmKrbA1AoMUABxw5u33fK4qaqZBhk5V",
  "key35": "4TReifEBzYz8gzexT3b4Q3vFAdHUvj6wWRjeoZPmpWYRqUXooiyDTauGEvfxKrZNaxdkqV8tWY35mgMDZzpEypsT",
  "key36": "4mrvcZC3P34ZCgGZx2CLEHxceHnfhrLg9oPMfYWfbWP3pXPkYHgB7cmh2KrW3Z2kkmBMYRXPyUpYrK5HWabRmbP",
  "key37": "411oqTKJiUM85k4UGeFkRuM6r3ydP4jYLPkPL8NKinUCNXx5JMpHJuBqWZju3ptmvSBUhReAwmdudketNkHpDTsL",
  "key38": "fUPKVkVxLqi9S8NFFE2wpr52jgQy1pmFDSmdHGwpuApoiacyhkbpdbAuan8LnrB5De7b2CWSobGoioDwJQ55p4L",
  "key39": "5qG6jMsD87jpNocQcsTduYrD1xHLFkifNFhvYFQB7XYKkumH9psPWGLDJzseWGdBntu7PHqKLgSU1nse1zScAiv6",
  "key40": "4o725v8QPKJLfrrNBBUzSemsnyo8ezsJyqAPUP7CRqiZeSougRC2oB5tdkmjh88v3UxqDQwFAXequMVcWEaURzxx",
  "key41": "5C31XnTPaKjTAYaoiZWCTEGWdzWvfy3zD8YMbuNYsk7e9LFbD7yxQEk5ww59Uwj2TL389XhVMFUYynKzUhQugFH3",
  "key42": "54tvkV1GdYhL3uADByU3M2cUf1f2Xu8SUX4B6x7zro6FpzJXLWnCThdHimyMA6srSw3MgumpaqXaEwBZLMLE9Eid",
  "key43": "4fN3HAFbc9Aa9GCDyx4MhTgibkMzk9asDjsht4aFnzCHePuxqmCFCvUc2B9epcSKdbm7UAZk3Qean3SMaVWgPkmx",
  "key44": "2jsy75mwNitsXjDByhUvUpMuGRJ3RLHNzWdymi4H9GzAW411FZgdhzfS1KtnGEZuDBqQspKtKhpLAKAWKvo87qHz"
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
