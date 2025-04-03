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
    "RG9gX9nuAgtxbMsNKwp883HX9ZMjcL2ttMt8wGeXdXi3qGWbThjeVyz4QKR7hXE4GMSKFQfFEhyd8RBxJiQuxNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TkNBm27xzGbLv2dSg1TNUXbEtkuw2zWZjq8gNPZvsddaWudqW2pYas8qveJS2ggGVnV6WuqvkrbFvtzbvcJpd5p",
  "key1": "5iRWXoMgrce45wuWoFGrTG1z9KHqq8cNiNLv4Zmz1pyB2KQapyax13LE7rFdRDiPHNxpu5GBHTcpmsLk356rN1Xm",
  "key2": "4CL9wEu7xwhxxoCofwYzamP7oKh8kbFnxZ5zF6hSiQ1oxaq5qkWVgMMdnaNtohoc8yiPLXUzm78YnfHPiVa2vJdi",
  "key3": "3dCnugR2bVp5N5RjeU2yW6tJ4yYGhreFwi7hb8uTS5tBFF24fj2N3o8sqkwE6Wc5Dw2m7n5qjkME2yMW4nSCiwCH",
  "key4": "2ayj16vjV6kxE2XBN6MNJwpL7h6MQet2dcMAcy3zDbhNiuvG2D5EMrYrGsYbN2qByBFnTfyNPNbNDAsPrGQaCiLd",
  "key5": "2cQwsCHNTj1CtFi1BmJr33MnnbDX1LLJyPPApGe8MgkNeNC7LiPKXgFsjbjLBbkdQmSfZsvNUgEwwNjTbLThy5nZ",
  "key6": "5DdToJVmnYRd2cVEgaMa9QevBr3zr31PU83kQA8NMBxC3To5tYt1pXhT9PgMbRcsUUijW8SjuNZ3Jvf2b35JMCZu",
  "key7": "5TdZvxLTHJvRQmZC5x14eKNVgcUR5dHNVevDaJZYWNq3o3AbTVZnYsPaVbYH61QPwAyCKGzWpSdVcJqsZbWHTng4",
  "key8": "5qEWLTrv1deSvDgwZKzc5WHMg6femwmt1tadQts9ESEnVpbeNN5PpacTuiSwypMQEahFnMG4xfKhYGTR94Mkg6iL",
  "key9": "3P2KaRGg9MVpMhUMf4aEMq7vnTaf2o3yYoCGrrHpMBfTKHb3b8MGd8BmixWnk49Mg7QsErY4simduFRiiH55dQZ",
  "key10": "4oNauc3yogrrwJZqRyQbNssUEfdYVuc5ogy9j7RDMQFNuUTn7e4eKYrrBPDNUxDJEqYiiFnQQKHMz1yGJx2DGm7w",
  "key11": "4EyNmBHkxHungX7UEA1Lm12BFfRBox5Zd9TnfSLgNtDG2ziDbNSj54sfpzwmpWLQbtrHwhcxBSYfihxW2CWJPsDd",
  "key12": "MkSHJRCnKTnLFBiX6BFAMkxkodMWQ6VpGHcneGwyPcbEHyeWfiY1M1kcPSMf1x5aXTYub1hkL5LTZZJVdnVdaVM",
  "key13": "5y8RXsSrSX4e4awFuiLdaHMLEKhd6RDTWmz1CUXgmT71ZhmYKP2vnMBHeFJF63j8Xmb5U4zq9tki2vhe8THifgKv",
  "key14": "NsH9nhp1WFUc2DNwf41Cmi2mQyjjgEkE6HWfqhgbbmsnMuEuqCZqXgK5Qs8hDz9J5JgD4dZmPyhnxNT334f7w8r",
  "key15": "56dEQucP9MkDE6n96Ytok5g6ZjE2ZMgfRqqeqK7LYHB3vCXxUEp95MWXK2KQyFYQgLB4kZdM2taFnyWvrC1xcnSJ",
  "key16": "4PZ8xuCD8jKeNqeNhZBifZyAcmg9yFt7LNJ5XymxB3cDosKXMVzSJv6oggxFGNuVAagqF8S2QqPkMDK6Kw5iqqaH",
  "key17": "UWD4nctDbQNRupJqYBY2qEhHsgmadhqoK8Ti2G3LrDLiornoJJZZ4J3xbJ66PNDgX5moB7eRmu9Ac2snpm7bBbq",
  "key18": "4dpubfBz7X4gzTMZB7a1iy2eqwaT3fS1oT5cPonLcaq1XBK8CVErbv43pFvsJVk3Nfzy3drEsf3x147EKyqUBDNk",
  "key19": "4ZzUwYEpn3XBDVaVLyF6HRiQF4di4rnN9bV2gYevg9TRyKQm5ZcoCo1djmtzqNBYrz316xTh1F3xRrni1uoMN4cd",
  "key20": "3oq1Y4ZNyBwoiLpccWDu97S2sCEm1tx9rBCAPrpjPFKKbF76V8LUmvmsdg2EnyWLcXnRAf7tuTJD84KXEWv9Cyco",
  "key21": "3oV4mC5UipV1wXsbDH26ww3M6mxN3BDvsUrTkDQiDQB6hpEZ43shCh5fPUqxKJjibrdRtEUoZ3kArZZGstEQi18n",
  "key22": "4Q87feYnGFQFvv15wLmTAHCdVt9tpL1dgEqN9r7rfPrpubxmi9NCF76xQeYgiXFvHMVfE9zzheksWgkXnYKcSBjp",
  "key23": "3EMecQqXFr6U1ynpZD2y6pVvSpesZH4X26K5S9jLVGxd3cfMswoyy5WyEiJgLmnQ7MUU7Rtv9Y2oFuH3yEjYyWMy",
  "key24": "5Eo7q2VsCWHLFez4JGJhCvqXsW5va8apAs24PNMT8XBypv6ZiUCkzmEDjTV6E71oLoAd57oMmv6aQqfMpjjWbNgn",
  "key25": "2tdfwsd7TGe8GttK9xrYiNfLkkDj6ZmYxrAbapwg9XjiPzHXWYPCa3u2W395msDmKX5gmwD6D9ELDaLQMxbk2dWv",
  "key26": "KgEbXW3f6rN9TMEzipiyEignvTZewJoe2sTRFDxjcHJuL6pcCWUik7LgWJLCTP3WGUB8V63vDu1Vk2jyQ4uZ7nq",
  "key27": "BX1Ys7J4rctpNva6BpXTzXhqfvtLRb1JTaW1e1cKex2tcuvStr944VxRVYX9CefZukaYgGPP7xoMojjCofiFgH9",
  "key28": "4Ukrhu64Kjw4f6SsDC65gA2X1ZirS9tCYpVqhXgVVxHRzACuChD5LeAcfEiucEunNbwjiUgFDEq7a9H5EJU9DR1M",
  "key29": "4cYSyib6n8Jgq1HWStLzjFcDE8g9xLM6SZCmRK5szoa7MXea5NSWxfyLYn3B8GzT7fMSa5WYKMFUUrmJnXYVGog",
  "key30": "4onCHZhjih9JRXKaKa9SKyDRqDk2dXrYu2o16MpEu5YHZiQf22ZHbQgsrQ6ErWv7aLZaKqPSdT5JWLfva8TgfwKC",
  "key31": "5warRtGmPfZBzHDfQ1ED6xDGcgXs8ghApbEp4ySDb7ax76DTbkYsVYHMi27LHid2ara75z33XfSByKwHxhoJEcnq",
  "key32": "445wLyqNLK49bm24YTbgZwp2Hm34Fggi93SLSkAqm9YmF5nzkdvYrzoN2skAA21FJVb9nXgrqX94mzH618Wuk45i",
  "key33": "38nymRiR8mafaB1RFyr5uix8sh8gjfE2XraqqFYc7RyMQVYTqdR3fgcT4PAcWd4ucsATfU6NZmR5gJmw2TURYboe",
  "key34": "2sCMyqGXsG8QBu5nhNuoF5bASa5aBj6TUKvUrCfAUx5Ps8L3x65a9WJ8oe9SJuCUTQR1dfqYqHJopCdijGCccwWM",
  "key35": "3LZSgyTNUZLuDFec7xpjMzMk3KfyPLMuXejHdqg8cw7x932mpMAxXiQoc196hnk8zowrwYgRcLqFK4nSH3ViXZCF",
  "key36": "5LkSAecSKRaJ2qsAhoB7c1pkTUmPhjUyXs5aNjrYMsK5d6eeVHLHPT5fNufquPY4LGz5jBPcwtjfgBhNLJfk6ogY",
  "key37": "5sBDpiwHmjmSG77kNa4SUgc34ARrBQX9BiT8X3ZP5zgRDh1Nh1yKUVEVoZWkPjRj8aji1PLUN51kqHMPEHGYk2Am",
  "key38": "65junrQKKcMbD7awQxc2yP2kETUQeno71kLVHcEs7y2VhiBT7gsjEEn2SuZbje7iGvLHiVpYpG8jDZPPVjmwSSvX",
  "key39": "4ocZ1qPRiL3Jo2x2FCstKZH4TSceFkUbYKDoQLMv4yKBE9Pf96WNCjFE413xW32GFK5Lxi4FEcTrwXGnUBjYchqe",
  "key40": "4bV5afkZBXE9QTup8ABHDsJZGg2MqbM7ksfmRiCC6MeNEjx7CHdSkemqwDAcyE1E8HBS4vtX8PABtnHaurzF4sXD"
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
