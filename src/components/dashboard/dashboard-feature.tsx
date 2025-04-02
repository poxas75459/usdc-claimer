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
    "2ebKfHWLBxwywVjbj4v6jTJnCz2ckJVH96jV48HfGTJ8fQtoZHVTnJtAbFPXxVXcPCJXkYBTcQhqyM1WBYckh5Lp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nr4MLBwtrwvf4TCB41LkhzweigSnYJ1riWFYFTyUJPnmxYhhJywERrAtyEgCspHmqw8tZkmVm4w8fba5haC2LNt",
  "key1": "ahYKESFHtTsSt9xtY3nUTBHyvhZ7w6ojZHZzib91bFHS8rcRNJwtwRD9orM4TDf9nuCS2yPVoWbagphWeLGQLG9",
  "key2": "5e7zYQRY8eGfcwV7zb6bE4omJUVofBrDQYCpW97gyAY83PpYotwRS8YrHj1MaBVDwnoaMLwrUiKRcHZXByjWMX5P",
  "key3": "2HDuTo8stm1xcsiArB3oKdaczu3eYgHV1BdFNwPUuZNvmpUxsN9zeiWQQp7GemsTXAsqidNniqoZySYVr138Wuzg",
  "key4": "3eaJSPYzD2hwxUzwqW1n7xc7cYDG4ybnEPSvR614UtmsxJJ96NiQ3SM79S4TU751JoiSUci98wcGBWSv8rSQCAG",
  "key5": "kKdFfrAtCe7YobQM3DmHKa1Jaaox4PdeYNJoYFuqR7YLpi4FiKbhnJNP8tTRtdbTYLJRAKJ7ynnFKZsWEbedc9Y",
  "key6": "4VJ37GstSnjc3yjwGQzWaRWeZe1tSLc2FZHYcJV6RkXaRLPUeoZezQeCYbYNNTFTHZsyC3xxviom64KJwkzoAs7j",
  "key7": "3ZPaFG7zCUmwM17RiMWsf3Qaop7SYcana6DuJEQht1txnaG6kt2s5rfLPBJJ5biS7sZs7KmqDb8j1FnA2eip9J4S",
  "key8": "5kPRyWFK53nHBYpUP7sZhXpxyzCf7aqeNjVrZSKRWQN24chTvn8SKKPdHZmdJe4LrMnYaLcsJBrhTDj5Ya99NTK2",
  "key9": "4yZUqbLXBsJmAamdUm6bcgeyNH4ig1Wph8aefdqLArt2gALgFVcNxPsuusDuFVPEiE6mNzV4Pbm6LstJZMo3VryL",
  "key10": "2V4Hdm9bfbMvBCBRZLqJnTZmFqfXyGSLQawGyii7VKGomZPt7nmpvtdRADFJC9KJ6PuJYAYtFEDTgDfegvTyqm6k",
  "key11": "4sCrEySuxgjQqbgZzBM4GfzPYM6wmEVxks2LXTeSUpfhFAPP7EkKfQfuRj37qxbwHR8R5oJfvYyi4KbaC4qVGvDC",
  "key12": "4mae5ZA9CkyPAC6MioJVoxEMbGcY8jeGCwvjiaZQPsR6TAxDi8ueQXqFNqjK3wbnefCT458fj6cCNNqMDVj6hYHA",
  "key13": "jyKgGnu4Z9Qyu3G4v2iXjUPm4DX7pqPeyUwTZf1f82xLFNY9CCKo75k7ZQgZ5bagAv858yzFaiXSFfB2KrmMh9i",
  "key14": "5kqgQw7Eq3PtoMxon4KuUz7w7KLKcNKPfMRT6ET9J6KtnNQ86Gu99EjrP3NaZm5iq8u1QTg76LemiR83uxdFArvY",
  "key15": "4iGYU7WXJqxUu3NGpXNECcxNeqv7zPZdT3ubc1ThyNd1YUMdui2ZKims99NMC4c7qsPj8cbQJp6MEbTxtdoPetro",
  "key16": "3Y88Jur2qoAnkBgpKbixrsdqq4gmoZTVce1epAE9L3mwhykEhTgPbNvfszuu4jT5PBVJUCC7Xf1KXBMEDHrVwGDY",
  "key17": "37wWgHJUwXdJXfyFivHWABdMfjLRVmFuNJyaqMqMwqW2spB7R1GDCUbS7rQFHzxHQBGz6JPGjGH8parvRgxcWD5T",
  "key18": "2jVxS3de5VDqstZYpUeDUGpbrwW7pdkfstRjWguj8KcrWCE5D32DebQkPFodyRSauCckEgN1FJoNkBCSNz2ekGTB",
  "key19": "3T2LonfTqrnrPtHttS3tcEavfXif7to8ENsafhWzAdzZ4x5DnHDnwUviYLT5hwVzEsYLct4YEKUEspk4RYsuyun2",
  "key20": "5oECvpyBhvMAd3oRf9wzAwwrNaiVMeiL4xcBjVsFUmTKerxBmtgmca5T7RdiFr41JJ8A8eAefNj7s7WyXUmqVabG",
  "key21": "gsWDpwp38diCGwS99JV5wNEqjfPHGY3LSHTssPbExn5SLcYJQ6i3ZpPdNq5RPmEfy2oWSKLqQvtChPLq6Aek45z",
  "key22": "51ZgytUWXV1f2ExHscRKyWBDjmV7AXx93NSQr4Rr7B2Tc6mKKiiHDXQCzaFv1C7WuSbWbZDe6hX1vKXFdUUS1Yp5",
  "key23": "eDohzbZ8vgGz5hg9RKZCtDnVHjwdGFLSK8NJft6V8VtHiurYhv6atxzV2Dm6K3ndi4cCjKfobv6Pfw2ME1vBz25",
  "key24": "3Pdv93xme1cejQJmV8WGGkcWpRwRHDTbaJ2W6ELh6MNCTvaKSD3UzCEj216D6TbUTdnwMei6Uz4rV5Vd3MkadZzU",
  "key25": "28ot9Bv2YSgHAkL9HGjE6D2pszweu2Fq9vG5geG9jDAsKcamoSzHQR4oF6smBTq4smrtzuPwAgDmerjZYyhTDbF5",
  "key26": "3VsbMTw9tjDMRX2rNnYqeee2pARuwi7BxZqkFEvZXSCJNrYWf9XqM3iUWpDDsGQUWXLTbZKbap3kg1aoB8DeFrLD",
  "key27": "2DkVe33UzCzrzErR4Pe29KZfn8KmFmgLiJGmsQWn54XbFFvfr11FHw6RFJryF6Urxh9bjepvVfmYeEfvMssR59Xf",
  "key28": "4uE92thJQVK31DB6rU15NKxAWx8d7q1KiTCV39tTDnTAfqxdri4hv6cPDFMuQGJdNbErkmGPGxRghFESy2gCRnXC",
  "key29": "59xc5A2X6wSJsyQeq3PafJuxpu5ihyLjfuzmBXaQ7ptnmfGcgExNoX8APCeJWusMjUDja6DBV7FN3d2E3cz2yzrY",
  "key30": "3y1mC1SZqBDoVSgKvaN1ZeXpodWLvrY1Xn4zmXss3y7q6bw6DkYjiD52nEzvkoX2mjGV3Nr5hQiQK4uirubSohJh",
  "key31": "4J2SrXqMHcnYCjY1tVkU815KFLS3PMhSFGVqqpoM3BNwDDdUs6zeuKdCZ7GbwUrG1UmRXAdcaGZA8JVqr9nAdJH2",
  "key32": "ZVcdA6YGD15MYQ75RY6BGrCRCzSpqJ5AB12JJWbp6e1sC5kvFoi58jzwwH7ZYyyGPPNh51FQfvc8P6GgGbLRNV7",
  "key33": "5aGMasSFWtoQRj9VkXDTpgLfZPhb4cs2MRMbo5S7tDzeETN9gAEQu9C49JM3DD78pbfYLmuwztFucYfBbTigRWJX",
  "key34": "4LHfX2GhQz3xuJiRCiEoUrHCjRS3rhaJVwbvZxCLDgt1ifbg6y1vMZLd5THDMeRRQFcaYTDR5mZTQcaKVySaoNcb",
  "key35": "4edGMKbuLWNn1Tfb6CpNVKpg2QiNZ3yKUow3uHX5QCq9N4CbcrR1LuwZej7RPzuu2q3d2W31D5LdNvXVqo4dQaa6",
  "key36": "5X1e1rKgKytbBAg3hMKHB9pRds6ETAmvds9cnPZJGApYhf9iRy7zQXufYxiqv9Z8eZXvppBhy7QNpPCw2Ga2qPNK"
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
