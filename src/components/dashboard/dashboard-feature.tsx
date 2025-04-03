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
    "3smBHJAn64U7ZQEd6nsFiP4yg27ySdSNWfK85N7kV6cKcwqkwpnGSFxE6FuQc4Bx2a1NLLe87zWkzQKYZiV35fw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qYeXU5mCTU5TrHKVhaF3PdXifY2p9fNi4VicV2R7KSvx87DE9Cj3GWDSx8pP3GE6DhuRH6spicY2Rjpim22AjCL",
  "key1": "2NdcBf5TqPAffPEzkoKiz5emq2Xb4dfypHyjZuyZf1oh9rwxcpSnJvccSNoV3PcjWTeosr1aRNWbD3VFEGa55BHV",
  "key2": "3H3vRm6B6pdipS4DZhUdXTcot4LqXQXcg6pBMKbANjjZ3zn6mnYj1RkKkQuziNnCz2cUu7PvainmJCiAYUFrFHBH",
  "key3": "4qwFM88NJs8Q7HqQmeLQL2TVt6P7W6RytUD7WERfobwocPdTRsUvPGRe3dPWXWr8ap91MZ6Fe8geXUoypr5gCT2X",
  "key4": "Cqx5EQF41sT4YB1TJUjQHb6SG6HWR7XnGdzV9NkMLiDwtT4C6ewyam7oEE6aH4BJ7hXFLhYqptdz4e1eZGvN2U2",
  "key5": "49fww9edUMzDKHM9cDXUSCZi8TeNUg944tFLQhngqqSkd3NMHRzNK93jW7JFdjRNJdqtU5HBapGBeXBYnxHeSjSr",
  "key6": "2xjD1kYfyEH3utjk4zrg5SeXBGMnmRBMyxYLT76xZHp47n4EZmCYy9j1Hh7n1D92sjRFbvUS7e8z1zpvXEU5aCct",
  "key7": "4MBjTnsH1teWAFzY6xZT2yQQ3XXcjQmM2Eap8vAHMVqdSoNECJDdcFtyGTzDZmnNkWrZmiX41ePbGc7xL4qygJa2",
  "key8": "wAG2ufjoxcwDpZq5HBj9mmWLXH5Nwoqs6M5FS6P8gzc9fRc6fghjrpe2KvT6Vgw64h2MfHAPRmYKWUyhSeQ84NS",
  "key9": "58wQ9rYcomJrffXsBcv2FSpqMmz8fBo2935RPtkice6izTWUStgRjCBYGbTMHrRik42aMU1mHgnbLvAfeuynggVL",
  "key10": "4gJo6sSwRJi5Dq3TrL37peXGa4b7UCpvLePBF83mekWWULvfDAxru7tZNXAmYmVY95Y7uGpEDCc2eZpDfPMboXgk",
  "key11": "TBkHYA4nfeQcKSipFB1yMWCRraD345e9ZqGRiUfExgLfsgmMwSeS2dvSCRihKMUmnBQQfGAADBgSXN9YoC3eDY6",
  "key12": "2cEbhjKecoNw9vE4JhAyWg3FQosqJb3c7oS6JQAHQpz36xb1PVjBehUnD6tjLYnR82GfyCzrPSiVSGq1Sk7j2Uk",
  "key13": "65YoMr7gekrb276UFKNFKrgw33QPpoKtaoFd1zfburraSjqEfkd9FYajCEvCwa9TWnRiYrAwdGBz4c21ceWHsMg1",
  "key14": "67D3MTrLTov83A9VCswXqhNQ1WK3b1GGzFHzxM7xBWA3mosGdbubV9t8YBs4w9AbZdUxumXcxc9A5VHCr6q6717H",
  "key15": "4Dd1eM9MaAFTMfQbWCwQcvzkNvo6rUCQGobDfUmbjDkzGZiXXUmBccu9iqvvt42K9gpUPzZpRCwZdft8RQUM9mYi",
  "key16": "51z8jFBGwN9uYzFDSZC9MvPnLFn3P3KHuvoxpfHQRpVoAuWYxrsJ7vuutdKU8AhcXbnDcGZdKDXL8EDKe9NZPBDp",
  "key17": "3DJjRHKJna37dJr27XeagK1FfZVHjW6H7UUJqrZusvd5VvbHt5AkheYwZZ8eKxcHaScF4X4i7FFfVPgWRfrwMPc3",
  "key18": "3wJEx8xn2H5p7ysJXcEoY9JdTPcDYMs8sq4SFnGm9AVu4jozfztrsDajNKrG2nJDKLkH428sNwYunFsT7EhV27Cb",
  "key19": "3gJNoLGpKn9TZfSXCnQoqjn62vE674CxMhFNZZY5fd2DegYJzvqaty2k92ArMWxZX72xeUiwh5HFK22wvAaZxbqs",
  "key20": "4Vvs8nz9B6rYDcCK5aBopMqy6sLFbaYwKqdazhbJWxJoMfCszztu9bwrN85woUMU4ujLkoftoZMU4h61h2kr4MjM",
  "key21": "49WfMtU3LE8kz4HuY1dwqQ66vELGPzN2SsA85KJhQb5Ai7bf5TftCRr3EHVFHGHXu6JMu7xPKXzRfeGQkLB7dJEG",
  "key22": "4yshNTrLqgg7GyHX7QtLj5VWkFdbtYV5T5wjmSZdpciTW6Lextvj2moGh5xbMU6QH5GQ58wPFZav1TW2GEQY8bhr",
  "key23": "44tS3rmTgRXeCnRLYQyRC4y8R1CBHoMSAJJUqk8ZE3Xfcu2VGaDEfFtiCCKdzmsy3CBHgEUBWibPbunZUnEhhbHy",
  "key24": "4axkXkXjh25CWp9trt9VQUy5oFacTuc388Kuxiy13potzeosMew1FnRXci9eRSBXzdhKAPp2WwuGLXMrEWz6MUnT",
  "key25": "ZVPGWXa7hXF9iWEohcprgE3NLYPLGJAGodaf1XY9djFzfQBvtivhSP1Q8Sq1r1bWLQv5Sk59wTWaFagxX1tUC8y",
  "key26": "8xwj4B1ChgnzyCjxHitpTwTVyxHUyV6RmBLnNJ1QQp1N22gmGTtstHFM5badTPoW2Lbn357LSbRmKSYy7etWpkL",
  "key27": "3SJefahLP34NmkWZPhcByojdjXp4ZAxdvWXxxPdyBRxqt6P6oJg73ubo4Qq51SbTU7AjkD6FzMNQbG9QRyBFvZLq",
  "key28": "2PcHQaq2Wkoxf43iCctGPzjVWMEXioinewo5ogzCy88ui9dGn3GAntpHxmAivUA7B5Xf9AHC3r482FSLKveR7uCk",
  "key29": "3Tm86YQ1neQVBtEtWFZdDZoNogT75Bs5kJrk8iAcp5pBa1qUbvpHKXnNUthGUoehVSSzgskwtPYTfsrn4AyUNjQb",
  "key30": "3KUuVgFBSnCZhHv9Y9BL8UdkwnhQ928N6dmkCxMZtRvZWNtAGsEYtz7ntG2fcenxyVGUcnqpwTpehL8fUiNJvKZT",
  "key31": "3XTsx4CZZt1uMPHUY4nhCJUAx2c7eevxkqD4yZ2DpziR7Py7FFLcQrHZrQPHm7Zz1PoxhmcrgdR385XP3HcRqRT4",
  "key32": "5bys8baADDJBmLj9uGEia5f71noMoxqvqhB2cP4udNbhxDqTJqBTNJzHvtDi1gRmx9XHym2dfmuKPXzhFSYaZ7Hw",
  "key33": "2SN5hgezdNi1cp8vzCUrtjBQDiJKGfyCMcHoU2M4D44UzCLKMbpxDMjhYpjCLPbL9VgQRnu87p1PDNj67FAKSFsW",
  "key34": "5aeWLNUNUGKuNH6WindzWTJnti4zM71E1aa2dEX9vNnJNTZHEaeQvYzaQ3xRZC6gGC9nbcG8n8XRdZ44VahnkMci",
  "key35": "4EXt1dJX7m4gRsiENHBUNLXZPMd3bdK1GuRJfSB6kKNV5YLPeqebSd9njVBbkrQikjxBm1v9pvafUpk9ing2EoAK",
  "key36": "dwhiWZ325EH8xkHGqNcVuww69gpwMsfjBUMY1aHVsV9ELdvhjbYAfqp2SpKvnRWpcUJMQrUCGAxgEvCqaVcVUMU",
  "key37": "2Ji3UH3C5htJvdpMMA1rUWns2XPuLWAEcLA42btvTgzszV3HY9kLNCrn5viKoeSivxMcShpmqF5A2zUY1mUq1FRP",
  "key38": "53HRXkc7coLZaV1fc8WtyMfZ2fmXFamuBn56pPHPcp55B42CwgB3aMnpYCTr3ZTWiY96jZxKbHvXQTnD58twQFxx",
  "key39": "pjAeQXqWqjsqNFjMg2VoWHt94vch5uw2byrPKs9mKhe1cuNjawS9eEgHGd2HL1stELKZPrENoc8dBL8DPKCqKzs",
  "key40": "46ktJhZseq1BiwK1d4Zb9tvqp9QCfNCdwu79nWhU6WkKhaioFLb4NGYDiNUc6LNy5G3fbJ1F6MLLoYFhmprnb68b",
  "key41": "MBCtEskvJ5zNh29u9hp8SnKAND2cfnjQPjTvrKG3jjR2RPWy12jG38fqCjFZx9U5Rok77dbfBxGteBwwWuf82RZ"
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
