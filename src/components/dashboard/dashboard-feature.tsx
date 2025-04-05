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
    "5hXP7zbJfu1tLCQK9DruytRbBMZmrWbic8FdyENWkPmK8JzkLmfN5CVQZWAwPkPrx52xpQbLQTozA1TxxAWqnVjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UCqqcQV1wjMwKpe1uJTm8UbtJPrvoHwjvfPeoB1jKpsLDcJzynj9U4H4sRXnRiYeF6kSvbXrZFFMhm1PXLYX3pm",
  "key1": "MtpjC3wKAXBq9qB3xLMMdpfN79U32HFRaG3ert1827WCBh1b6sgzHNuvrByn5pbhbAvoQ92xTqEU5eALRsLfPDz",
  "key2": "5B2ZZ96BsApcDoYm4fhvoa3ng9yXX5nKogbcMtrFwJpGZoiLzkgL2o7Wt84rRApQ3fECFeFy9Rg1nsNUDhJEyEo8",
  "key3": "dJ7ox6hKxPqNYHuU6aG7s9RbX3g9iE6UEQusAx4chpZQwQxu66whqtbrQQKY9M6AdQpSsu449X2pQtoksvPeGsZ",
  "key4": "4GL3Ep3bUR6XA8KRu4ZxUie91zUukjARqR3at773aK2o7m5fnJgGhwUq6QVt6KJ7c6yUtSg23rARY5NNEnpEewfd",
  "key5": "3ojYArr2DdEGiTrhoePyn1d5DGkt168x7AxKc8q8ZccFL4AW3Zr3m1KPKLpMRGxq7acZj6aNxkszfDLt7ESawWVZ",
  "key6": "3CD3jLeXoybVUoR1DvVgV8FyRsTNnMx1PCZMvqSDtLxiDRWVyczbgypLX7wGBdUs9wChTWiR2Q41Hd5yjGjSSMH2",
  "key7": "2C7uL36zCntuMwyUU4xBiLUEDN36Jbz2LoeYqgyfbgutwfWx5jYfWNbyoQ3FjGv46SKA3sgLPseUtfoNiPebuXS2",
  "key8": "4awmVibDDfNCRbKuDRefQBPzAVmdhJiknXZjWianAjbtZg8jYBha436zCjssB96m7myh4kqhwf6cgrMDwXuHZkGn",
  "key9": "2qCeEWEybcBfCXvNqAE7NeP6R2mTU74DwtGCpzMa8UKjW7R3Y8mS85vMQjDth1pkdVkDp1SivKTh3Ly4TV962WAZ",
  "key10": "21wkfZfp8NBX15TocUhQi5uvP5JiZoLvegr7QxuSPyQymgmqo2H4kxt6KHhqv9CQGTzHVxE5M9acary8VvPJanv4",
  "key11": "wAJBxyH8MoAXtcajHPaMGW1t6v39fcGsTYWgzYum7ofzFVaTv1JbqFse6QpxsPDrZLEdFkATP9kikZR7fGS6WTa",
  "key12": "JgTmfsBQUQf1ornpeVW3zi8i66DBoAF35Jjgmsox3522ZpNYHBCBPLHYRXVYwCUK5arChPJ7xux95GjJ4mzmpbY",
  "key13": "2Q4kAQJuhgJS61os4fzfwBKeBbeBuSDNcZBmuxToMo3UgavJAMV1JEkDPsQDTvMNBL6Prxxm8WPkwTiNBpU5Bucc",
  "key14": "5XZAqRQamjeVh94xUpTgdAbq9LCnxgyw3rPG5f2xTG9ASWE3Bpo9UmPsBzPhiNLhsjGSE9Msa5iKE7euRBc9iYjb",
  "key15": "52iQfwnnVHdNJyiBx7TEbCRtmnfGXyPGvuTfKzaANXoT46sf5zRKYgor7gUeRQCSvBeo97r8zPvZbXh5uRLkEee5",
  "key16": "39emTZpi2mb5XLJvFbuhichtLySXnoubBuYaAHuj9wKnJnu3ABAg4zFDJhA582btMcff397Rggk7FHPEBbvMeunJ",
  "key17": "2SUEYZfEiMekdJan2AgZY9eQxtq2dydBj3X2ecZ12FSrs5XgrhATd8R15Ak9strpCWuQyiyg4obAuDJ7juWQhJCy",
  "key18": "2wuwZX8LAMib83frkJY3D9fFCjk7xfXXxGNv7Dg8k2G3aE3hSEeNpwhy6hCD9vXYpKUnk7uhvh64umRumom3vPb",
  "key19": "2GUorAM6jP8zryFy8XJCWQqhK4FSryN6uKU9NT9KHdJvrCdvGZ8ctxsN2CuYrEhYjZpQheun2oGJAh29grveDq54",
  "key20": "2VNPaGoeSu5dMiVgTNQvqvFRiGM1pT21ZfxXdfmVCQzaErxNDLQ1nL6DBXZeZuHG2Pr4aacFYNiN2yD34ex3a1Fs",
  "key21": "3CwYSFPmshXi77eSscd4puBXYne1wCFpqJV8gotUXopJs3qxf5XjgnJ3u8JRDpneBfRVwnovLkfVjqBg5UokNt2N",
  "key22": "3ezccgBdcGPXbZZqfjkmPUm73VkQ8VpuLyaXCMuUPXGSw9MVNKA7YMesoWLkvzWhh939B4BHU26hQxTq7uX695A5",
  "key23": "52XfhAAEMkQqV9Ai5CkvrsMokrQMgheQ5rUZVT8h7VPYNfa57uQCBCYyso9xwvkQjbqsu6xmPCCX6DpikcfWPcXn",
  "key24": "4RzLbVqSaGmUg5ME7kGhUpfd1dNEFYuizfEWWKvZy6xPUP2yodmWWqpz7wuRavqqQNexuotDzYtnNdZKk1DxjwpZ",
  "key25": "5tgH8BHQQErKteEQg8r44835hdhqBkysgXTbyA8sWJQRXpRjzt1Q5WPQopMLjjfni4KtfcgzQ56RqChJCzNWiwRH",
  "key26": "3fSTok24jzTjWaoMqjDQYYRQ7p74mJ1HprBiNPzVLaYRuTgTh2M5sMaGwNPDvDRFzxp2AZuaji6TqxvHmf1oyP4W",
  "key27": "VJo1njSKDfXDrUSiE6Fgvdeyd8nLiVeN2gKzefWbXS8DBijePccKsKYLZct4CQP8Qsk9JgPfSkJbiNa866kE8SH",
  "key28": "ZsFa6X9uYq6MjjJUV2u9tN3NBGB8kddYvMsgevJFTXzdpJ1hjULa9gWWZbnaCvjKAmMPEeE4dSrnJ8sZcsr43F9",
  "key29": "23pvfF9aUVE3KNcwqKyiVp9dsq3ws3PNFcCfAwA6WJRir7qC1pAP148R8ktiwoHvrtAdxLkNya4md4M8cCZvaqCV",
  "key30": "5hvyDfDyAXdrK5EDfsccFRYBM6Z9k8H5AUDYGgtSZYt5CM9a1tyEmSnU8AGUeQWijaKgQ8LyTEQ5LQYGJXkA42RR",
  "key31": "4GJNmuTWedZgJZ7Q4rM7UrTZZjXD83ZDeb4iAeMiSxypGXE89qjibb9Mh658Q9k82G6Qb526eL5p9KzdXe8RvDo",
  "key32": "5D9EsCp1TUgQJti8BKU61gUxW9G5cprqo7jTKpHADMkF3WGJAuiui8H5ALNJW9skv4uxBuJbHuX61CtfzUV9u7t9",
  "key33": "3e9h2fvgLm4cZYZ8HqccpYraTvWaYynCFSv8PY4KkvcUYrSuQpFrLXHTgA1yE8B77QghBrDb8BpDAgVES9nwTHdd",
  "key34": "3KDEc3xs8VNiR3YkmCmwu4sDGJ4H5T8F5jttePk55sna5hyD6DsmEmKB6k64UumzA6pua2neS9miyjagrGRkp6u9",
  "key35": "4ab2ff7ZwQWu2Nw9fTZ5gkrro8Beu7DPcFKTS6nNpYL72X8nQ1AESN7GjPDwMFez2BTXktYANAhp3dY44CYNpurh",
  "key36": "5s59Bpx7Takhj6FTGZGohQtr8hfn5oqo9uvhFrHvtRtuut3D134XyCzrYRFVDX56h1eAse2kyLVDrEYzZcr8hPX9",
  "key37": "76Hcf3K6kxt1N1XzLAnURqsZDjF5nkx3wqKJkjr7Kp8vHsVHRSsvBDAUZCFLVKb1WgzqhVjPa9G2eWJ9rtw7Q1u",
  "key38": "22fHsheux9dZBi6k6mqVy6eGk6Kpz3KFPF9AiLP2j1pyz4hF5VGXV4wG11s22gLMmcbc2Cib9ckJU6nu2riky8A8",
  "key39": "3egZ2MN3s5yhegRo7TfXnKb9wE77SpASFy3LJ4sJfvucPcK1D7uhrkxWxSZnqVBdKzFCWUZET4p6NL8iy44gtvKW",
  "key40": "4QXCnLgFtMGd8ckjUnfXCoqNtMGY1kVXrerNGJRJTFYwW4CH85nXPDZ889EqqPjuH3x48PjRsRyVbQZmoureG9cX",
  "key41": "4C5UDeE8ZX2k1Rx4zbQRLS5mngaFb5xnPDZppmza8pc8GSUDbssmu6x8cXXQoufHCiL5a4UWATtAjC7WFjcFiA1w",
  "key42": "3sjmufbQDD84GSsK6xus5FrGoPCGyxC8JF6Xmp3HipBpeSb3t4rPnw6teJEWPDVVrALaZwHtyyLcjLw3FXgRDPQJ",
  "key43": "3u1WoEjSMdmge4vqQkE8kTVLxVmjWa9uQNhELTcZLiW39CPpLUtR4VGG9ZxN7o2sSQhtNLH6tQqo5RYqf7DPj2bx",
  "key44": "BFP2ysJpUJcRT6LevyfLXtRPZgkCivUg4o32svNPbzwFrS16y6mvz7ibuVzo7BQ7vgY99QLd3JMYAWfGdmcfp7Z",
  "key45": "4tjYseki8gZcVYvUVrBM2XArgb1y7tx8raeMxPmk3EZFAWsHuLjdtpGakbqhvCnoLsHJFaCjhPATNhuVZXRvCL3n",
  "key46": "n9DPXyr5TJ68kt5ibgDgRPmQskwMfVB6dLRt11n37FArv8wajx1PBGA1aoZa3WNyiPkUHA6zK5pLmG6zPtB2g9M",
  "key47": "3zktGpqnePbuaE6X8rvb7UnpCQwr9GgJMs5skFmWCkJij2NJqSVCtGGumgowkoxvRCGUB8qxhTeKnotc4XJfaQVh"
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
