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
    "38QSZfPuZsBRV9NAPgLt2GqNoDQbwPcM7uXUzE4gKjBDMYvsZmBAmN7GpZqH2TpiF7q6PjjdhfvYaDQGdt2D9Mpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MdLbmJdrHWn1WqSyttcZNn65PTWTaCd6WAHq1qcLEgCKd9NY9Kvqdx21dPd6PZxewy9RT5bHaaHgdrCjhigRCXo",
  "key1": "2MmGg7LRQ1iUsd98A9FFnLGhA7mSFSwnWzvmTfoycLuNW8937e8bxUgB9xykjS2zS8eHnwhw8QKi5VRaqAcXzjBn",
  "key2": "4HpkuCGrW7w6MV2LbuFL6CBixd2C51qYXv2gAokqyE2sHmvoHSZQCCX8W7ZFnGSrXz9yE6fwmgaR4urbNeQTBD8j",
  "key3": "2GXVzawuxqTXvS2DtTHJR8JC2i3z2vgwhbLr4C289YFikHciniAhg9zCQ6ZfzRsCa1SqBriWJuNrZnie4ZdKTyUT",
  "key4": "5pkjb5c5uTNfZEAzGGD5qqwDbLyFgWemo3dQnRFgFCEZTD7abmRpm8yKa8G7qVpGugiGPN1zDRieYa3RrnkHjiCm",
  "key5": "2PfPoQcDVoq6oiXEfwhuhJWEKyw63NYd8r4EYjtjsU8C8qu2AE4ZFcFxVBXYPyjXad6Fxeuc77iGEBUq1TRmK7sf",
  "key6": "5mfLT9FnRuhc34RsVPzhQti8Xugdvji9aJQY6ND3oU1FU6T5o42J5VHGbqqPUjUTs4KB5xSK71XrHB3fGBhmemjm",
  "key7": "2VdQv2TVjRDP4UBAR6FvnCtS4bRUBR8MFRVZFWTxzjYxJzAZomXwFjdNZQH3xbnQer24mFDGa89sKhENx4pheC9m",
  "key8": "Qo9Xv9o5oTAirCTkNV2Cjbq729jgDYEXsL1tkNLbvrwGnw3iqL2nTN8W5EXBS58u7pSYwSwfaktFCVLyXMofFDV",
  "key9": "5UXSt2GrEDJdntpjtBwrDqS8eCN5LnaXiUwjEcwfCeJa1cgrUsj9E6tLBvN4ZBYNDqkaZvbXCVihmWGdq8fYU9oo",
  "key10": "P14dVYafWRYFDv1yv4RBNwvMCbGbiG3WRNBE8Zm689m7hE3V6NQVX3yaNBH68NG84qrVFEtZtFFR46fEogyPdJa",
  "key11": "64brzb4VCANUG88sGgZbuTkbG4DnvkHoVSYykLFowVnGb9ZENgTn5t7YFJfHwi7A5B8SA63gwaH6Dd34rWqoEbLZ",
  "key12": "RmPFfSaSRV9WjVvoFLtQSD6LwZHHo8Jwfg3ChSKs3VrYBN2xdwWUFykjn1N3wPgZUJTtATJuaes9cvznFNwpazJ",
  "key13": "3ancG4LKMCE7erUBX5aDabHX3jVut1Av2KiVCsYP8v4LTS3snHkDYTVqXNdsw3DHvcXiSjPVFbjEmdTezek23RFv",
  "key14": "5KaEau7JBRHxMn87fspy8K3FrCkB72qFCm5juwb9ps2RSz9zorHrtharg586SF7uYrtpSAordcjQkwb7ZSxfHech",
  "key15": "3G2qdCMM1nezbjytqqzd64fEF2cB1i3xBF87zUGWzJasA4G6Hn4BB9xyhHMaHSJ3STqYcgdBoKjweNae5zG7pY8P",
  "key16": "24aoFwxwQiPHGw7A6ssn3jjZa9UsWor8JzSs2co5vUH1Rrn6jbrgBKTXsjXmsrw2TQi26t4MuAdJzgA8AnDJtHdv",
  "key17": "jWc27xqwV6Q8pzKTJqXUdbGcWAUviXpeCU4RWoEgZET4t1wdSLsKEvsBBWQa1gFKVPFFLwhmSfeB7xcqtYCdy6y",
  "key18": "TF4sDJVUDfiKa3ayB3tFKFtvu87yvQjbNitTXceKBxYaZC7awFk4LVc4TvQL8nYK8hwgY7HedyupvPN4djZbKCM",
  "key19": "4FoJzXqazAqikaaG8LrKv1LJP7P3aCrR6i4zTsroxxrFk6BWTYR4CZFjYX6kX6iFhj8MTiQDxLPpVACXYARnEu8X",
  "key20": "3hN7sxHcW2NH34F8XvNjZDTEmmA2fbRNu6QFToEomUvqcN3HHFx3PbUBbJXHJTv6rtirr9nagZBA7Ef4kyYq6FXy",
  "key21": "4xafv2T9LvNi7uLqjYMdshv6SrmiMUNCTQmDUxk4oD3eaVVw9KM6zFTXji4KRisy836fRbLoUSM3TqrtDE4JmWK7",
  "key22": "66f9hg5jahek7Ld97nXLka1J5GazZ52ePvU1vtoQVdethW3CayzWFDxdVXRMXUARXrbr3zUwiSzqLDM9LXNfhufM",
  "key23": "2nbg87caqupJYwE8Psa7jhmHkzzGTo2iK6mWqsNtmupAUKW29zGFu1YzZoJRJmmHkLgShLhUzy6HPoiidoFSeTfy",
  "key24": "3AbaVmihk7qu9G9DAmNm31CnaAQwGpJq6hV8u99GNGWFNEmrS3ZZGXXCjFXRng57QuiT3nbfbRq1FyWeCtQpvED7",
  "key25": "pWFFti2Eii3gm659b5yEALeEUT3cmhteQQa4cMQNNAcHP9h5Qr8536wmP7SUQ9R7nPrTWjF3iqr2UxHGmqk7a3f",
  "key26": "K8F5NqRpT9S7C5C1d92hKLZ3KGk6YLtZaf3cytpTPa7RKKi78L3z7iV3Hd7VYBnkhHq5wZSPC1x9xjJA1d7Pkhq",
  "key27": "29bFz9P4vXn3PXfPHMwYDFtWvvgpENGG88UkTRbn24hgGctA1Q8z8tQfCKYPP46AmQsFm9ByoE7gXhZt2iTNKJz7",
  "key28": "3Nt4dNngBcz261143etqB38JRbkvsrYZGvizUXJ6nu7VdRb7YifUeRLrz9sZXCQbeHsS7tPHRazJeMza5ViQjLS5",
  "key29": "3JLhjxjkJbH6bJzZn5TzED6EHtoZFDQmyPmEbrXoB9amQVQjc2XMoF7CE5MpDTQS74ZLNEJk13e1fPFKaX6KahBN",
  "key30": "2hrNdnUUMiMveUxGXyfRh3bL3Fz4FB6SnBkYHXb7PiCk5v18xq5wJa6NXNGbCYbXVVqcDJAmRcueEcw4t7K8TGdJ",
  "key31": "CvZUCeCqeXRqeibW6EzRuEcqyVvsVVrtRFCbBtbs73tWtbEDD1Eb5wVwFg7Jvqqsyigv3FAvV4MP9kstFEj73n8",
  "key32": "3G1TdwTYdr81yTwRgkFzeQxnaVbqUPSCqSkgJHDG6Q7CzRzYGLyPZENG5zoau74q4pF3ftuBrVMAJo9E5BHZLtAL",
  "key33": "2PQMfgXXrU8Kp8w8nV5fwjMQJZrJ8DPfXrzBTo1TeE7k8J1KXWbieQp7cMPqY2xE8r14EKJKHFG5mEFE5MYBG7xc",
  "key34": "5cqG5F1EVkM5LuHkWWLdND6nt37hZqRsXxV3jfCtcwMtXBYvhxHt1qWRCeZ96WWV1Td5Kwdfk8dZkxTBuVt9rVPy",
  "key35": "2mpNCdStJ94KUS7sadkbaAjYvgcpeBWiPzrGaNggDFs5CRdyhMzrUQdHEdKdGsVDjK8BWCzgGYzYj62YMtfPs3my",
  "key36": "5S9BzwgRo7Ac2tyXbFxE5sZ7gMqMht7zNS9aiWJVJSJzUQtBMgLfDwoCNAHP3EESosFLbx4nRUpHxZHHtgu95q89",
  "key37": "5amyjwrcNnTLQTupMSqac4xAkXuu31JE8LLwEftXzSjneDtgL73Lt2KvD8SSVuKXQufmzrP1xqtyqRVzggNUWfgQ",
  "key38": "4bEqgrT3CoNpsjn9YwffYRPwebdwdW28FphdkPWm66DDjzCg4gKoJADFRW6MWAijqTz8767TgRg6Y2Zru6XewFt5",
  "key39": "aWF9ZSg9iNLJnGisN4pfJvdY6Hd8T8qC6gWF1nnSxPZrVDnvgkjaA3v8jci6r8MsjH7qDhizx8Skyy2XsTK8yuA",
  "key40": "tM8VPQzcfoyX8WSLbLbtPTq4i3Zg1rRCadv6sfwvFpn1KBqnJHS72aHrduoFcCTCu9NK6bFCQHtqd7pv9JKmRzy",
  "key41": "4YQ9pbiezB2zJT1jVV151HpqBj6CsRNWRTH8XravKdCvdyu7CTrBVPv85bK68Yn6oXDBvBscWwkj9tC6jtiz4sfU",
  "key42": "WAHmLMcaCbTc6k5xFpiuwV7HPw1Nj55FFKUxbSgZ92v6BBaiBhBqddt78DQXzGsxmd7Wqdw1iN6ayqZ9kuProiL"
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
