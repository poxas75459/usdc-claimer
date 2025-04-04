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
    "5mL24WY22TQgv9Z2eJzyAcU3mnzFWW82U8MEDkNJXkQBhSiKJ1oPTrAwsbBJXfsf4WAg51TiRK35NZDvVMfg2x15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u7GMGqy4r5i5QxUw9WWghG1Jh4JddWcKhQRwQC6bKuzKw1j4DNoTmDtWoFjWJiDnxRD5vTkMqrtdLns9Hd4V9zs",
  "key1": "5DmwgrrArkE1RUBZcozKnGLReatdn6aPTBjAVxAEAtyhFS9gSDexW2avhtq7diV8yMYEjGmhZ6sSA2nnJZqpQi6P",
  "key2": "t7jZyHMT1ys2869zhpqqoLKDAnW2SMbXnBa5p5DX8xZ5YrTNyFAgLm41b5E4wS2Hnz6W6a7u81hctDXPGXyPXAp",
  "key3": "2wy6xGBPEQKKp4AVfLeYKJG8zikx5CcTqBbHq83rM2FgJCpdn6LmrZ9BN1Q3WLrryMgvEyw2aKZoJ9yJb29Z48E5",
  "key4": "6wfpW98Vi2a7nCm3HG8ivBt59SULYqp1ke8kLrV8xFfeHjiU2iXNfC7U22uecyDxhvDWiqrWvbrzgjTBE2N9Xnm",
  "key5": "5Se8whnmgiK9mHXz2vwGfejQ1fGqBdEghdqYSzM4hEY8rMZKHydvwVF7eCiUNaN8wFPe4wvAyHicGWb3miDEhG7Q",
  "key6": "5DuJzUY72VYsRKwKaW5J4Jw3qMYbBYkVRFHKjXGJjQgfg4YiyYt83n732Bxw7sxusEFfEmPUfPUSR7sbefrWcCuj",
  "key7": "SwZMjCLqEF1S3Rke3FruRRgpQWjoCv6pPcS8ZKcL6kbVQHcZoz6HQxpcfzJpNVNwoTZXAYGRQqNRPn16B7vMxw9",
  "key8": "4C3WEK2rcNGUHTs9GmmvhXZLeSmKAV1R8n88Sk571jbGH35KivqvKwZhtU4BSMaTPMw3T1yKYd9TBSqLPLxStP85",
  "key9": "45ShZoTGKhFVLJtg8q3txffPZxVps9TspqangAj2PxqBSaB4ySCwMRGS5i7onPhCL6GdEuarvqEM2ZY1A5WiUoGg",
  "key10": "5XbCcGnkdsbwokCZn2852yzQgJ7zJhk8KcYQiH8orMV4qL2ZgBcmT6wLc8fksxXiCzPWmXnyV2B1oAb4n9Sai58s",
  "key11": "3DPHaBy5QWd5rCYTZNgHGiichF5vc3uQppeE5RN2FiH2yjTac3UcM3y2rvgjoYBc3i1pAmRJeod23WyfZ8q1dcZE",
  "key12": "25qibG5o6iuT1tTip6wgpRvTtBXDiefFzSvd1WSD5SCsjL6s22m3TP2MzFJbvu2ZsDVmt19NmBBCowqrHj7891W6",
  "key13": "2XtTKHNyy5KhUygYtdgRWGwVTAEXQjSueGEEBabzLpkFhP5TentowQ6ZCdbxhypuwYL1E8F95KVefb96HVLtjoiM",
  "key14": "2V4pJ574hq7j2HDwHrdZSD4w6mscc1h9XBSQ7ejg8hceM4ogPwzyYBQ4VhpVJvRbxeB3xPqpyEH8R8GkQrH62SVJ",
  "key15": "59XmQkPSXLwgSa8vZkmYRuu8vPkFPNsBGPcLy21NYjiTpQBorXgA2yEdmkhJuEvYVYvedgrmGarGzqJa9EHpVZ2C",
  "key16": "CVyUy8GRh13j4eX793RfypNXuJY2mDDaSBgymAyQHsdVrGFakjSSceCCTt21hUed55xTFkN8TCPXyoeLqjFHhQk",
  "key17": "5zzvKbZnkkNT84o65AyU8hBcsYpUGipa3APW4WCjUiWQJJySNQoBMuGwJVjkiZReogaYP7strVB9d4J6s1mUARc",
  "key18": "5kMQiwY8rDDv28oqKVEoSU7g68DyNR59u5Jmn1w6FYiMh6qhXQrxUeWdTUPktevxeVcUapFkZ12KQsKvGvGYrhLA",
  "key19": "5wJb2wjnYiUCpSsMKCDWMwFU2BGsnC2W2M7QoDhPUGbhCUVggib1oe9S9WxRdi2FqmTyuMf4EcPuW4PEtBdekinj",
  "key20": "o8zeZQkefWi4waBmNmVnccNRinLoV9B6t9QJ9LGsdg9f1PVdAroFgEFWpm61ANiMVwcMfhdXrfQfnUBzZKL1yfi",
  "key21": "c38QP7GJdDfeQiuV68aDtnGGDtmeE1SAqw7KBHa6Bwe8mMM2F6dd3xmxLJAoRoRXjx2CvoFbzoYx4SUpL3VqKDZ",
  "key22": "3ZQt88qkxRzinH1789YR4ryf36aQDg6ZDmcpLR85jaiLeWgNyFGjmSCekEHmhPBpp9PocqE73ivohMf5qFCAPkGH",
  "key23": "bG2PoWgf9wwAgJU7tNhJbpiBQdQuAiA6nCHAbFe6zgPpduA8SA8v46vMnPE26gycDYG5YTg7PVg3kCSioSoDeje",
  "key24": "2Gc6iYdTgEAixYsirkUWXZ5cTQVnXvumfvuJqXBjQzdqeuAQpHNP7CEsP1gWzNykfArUsdJQ93cTCNJHrKFVaJ3b",
  "key25": "fbLvJ7jShdeVfiZvESQieQjSEFQKWJmFtDwaoUEjJjqUDC69svX8gqfApgnhzEVHrJsgKc3YTbvTNQsSuzuhzWv",
  "key26": "2CQhxSqBXHp37wPSFGQpjA1VGsEfXryQZirQJhRbDLqadLdeU4rboaQo39vF15F7e7s3TmmvCAQ13bTe8UrbWFs8",
  "key27": "ms1TJmsJGKuH6MQVUs2zwGmyb1ypCEBGnQs6tx3F99hwT6nsuc3MTJQhANDoLSeM63EArXUu1aVZH7nEEa9YeRe",
  "key28": "3DA9aCSpxYJideKsAR6mDv8eT8AWN4u9vxtqQiW8vc8ASocnbLzEPi8yT3vRFW7Bxs2WuUoRFcZyenJ5rxkAnmzm",
  "key29": "xtmcwrD58QBi8GhZ52kfzu4BFWBi3j16nVBeSn8SYU9mGFTfWEzYn82dSqASD7bJkfGbBViWASmWNi2E7qZ14sL",
  "key30": "361Wao5ZeTkVieBGWdKtMFEZradWNdk5TrcFCVRiaWqMQ9Np8xf6AAVgWbfiaKBswf5MZygLvHcX4HWETcTUHEjw",
  "key31": "5wC5oe1hS1X9vvMquc37YrSo6SxYWGbwHuWenMCEWLnc9C1qSjREXavHrJX1o6JPzWRAhYTiG45P1JCZfhmFJ8Fi",
  "key32": "5TMG3TmFToTqpppDm8YJCVcJ5osArazRPuPqWvUVu4RBCFi6HEJkp67vJSr7dB52dtWHYTrCJVe3uweoc7yD1Zdi",
  "key33": "33yeAVKVCztCaXTGr8L4wYVvBrkgBH6mxcGh8fjkHHMVMdkPKiu61n2Ekcn2ov1U9kY2mWx83LcuaSSqxAhAjE34",
  "key34": "2ddn97tjarm68Zw5SwEde1AXwW8suED8rxRvD46YQ52amiA5sK3BkrUBrCdic2uQnLu9uB2YEmLu7iNz3BjPgZ1",
  "key35": "qfikfPZhY5D3SSy9SWyDAAbCRvpLkxLiGiZi639iKpYa6RaHeBcRwKFodKqnNU8qaDXN7LsKXDgt4892d5nCVR5",
  "key36": "2GMuJUvBBmjxkfWtBgMWGMWxYTDMniofsUrGL1hDioHYgVmt5RTDxErMudcgQYxGV5VmxmYqF6iivMEnMwP87rQ9",
  "key37": "5avpjNieX1ptJFZU84P2hdUPmHn3VLLFGi6vLcj3KHn5Vq2qw6ZgtL1rz4M5skg79DfjwQKYjapsrojyx6ykg7PM",
  "key38": "5Tczp1pDz8hZrkJtBJogRi6BwFzw5Nrw5wACy3oLjD65VPJUyGVveipLNoyvWhXSFnUxqvonfA4xAP688yQRSTkY",
  "key39": "45meniAqTQb5BBtpFWoQVUkBDXMhoZ3aRHcFVtrMjvUTS7mcPc9bWBjoGXyipbhSKkx3h85saeNUs2pDobWGoNdT",
  "key40": "26BEDNYNHHRoY1UQQKCzjXGTamRXx5BkteiZuhTTq9b7rWZtA8QeafbthFjnBi4qvYMQs8bj4Z8exTsQbQJjqL34",
  "key41": "4io64urQPHgN2Qg7pcbG7C892NDg6LxjykhFg42YyUVmZBnYUdusp82m6zTSdMwFVATyqXUTWyMS6oQ7QrZsDPLz",
  "key42": "3mJhnVNvLh9Fgk8buxfMti63M5eRNWWaKgaCYEpEzbsJTqt5NFX9v1ZhW6qwoSAhVdDsB3K4u7sLHRHr7cjdnqXH",
  "key43": "2t9FEcHtv4bv8DXTWRKdbpRYxEJCdtcojRkDRnczDwyr75AfrEwLgAhRu7NbwmNBMRkKjaLK95Yqhg6uR2BqmMjH",
  "key44": "3nzVQGyFJaF4iYZJ51Qxq1b2SesHTbBRpCAmMaPL3gPTqMggygURo1G3EYPwYW3bSfhPgtSq278876SjkQXbUXpf",
  "key45": "36mJJhUSS1BLeRaMyAP6KyKLJ9PMwUxMDJeTVpkj7YZP9E93nvenag4dDbTduJRD4PcPD8PpCb1sbwS18H236yda",
  "key46": "2voCuhP8UjHek6xUa8TNtoPMxfAxoFqobQXiy9Ei7TtTC4U66xzjtdy31TP75Vib9qb4FH6yQ2hNFEKjcAKWtiVa",
  "key47": "4HaRQVh8Mf6pJLyhTNuZfw5dF1FcBKEzLaNiZpFzSmxnByKirDGmPyCcDFHCcw4MfjMwnqng8BRTtnu629z97PLK",
  "key48": "3yM5eFZ2Jmw1Vo9tH8FB2PGpR4q58UfLZadFEayEFeGWv9xoPHkSqr4D6AFzkSTxxRmRqzCX522PYmpQsjB6BmKB"
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
