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
    "3DW3QsuQSYtqkzTwJ2xaMuAvRjBGqRcenfbARKkaYZk1HopbDP8WeqULFz63vV1KX2XoMf9fiz7dHP4yD4JboFH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B2vFYGq76sReNKFURzBTj4E4zpRGB25D1KWedRefv2SrpBrLUMKNu7ZLYGpqAcNtJDbGhpDmmc6wKsSBq814r3R",
  "key1": "3Z78XhfgdNMk8X7jU9ESiE5r41wijGYJhTZwzcgxVhzLpFnoTs8c4kwJ5pnuJYwXu92NM2NLM6wF3UMmdXNg2bmM",
  "key2": "451TgkPiZpR5txhjJzrweG9S7TJZvSLpx3SaGMPDckFczdK36WNfPKWvHevRytVTiMQzVVqsEXz3tyj1u9UJEcDA",
  "key3": "5LusK2DLvdjXPa97nMUujrhLmruL8gN8Nv8nryY6dtmikRFzYb33Pz5nBVyxkCe6XGLetH5TYkkUxecjRT2NYhKH",
  "key4": "54KkruAgfcci6j7cM36T55tKSaK6XfQF6ptAvMEfcdBjXP7AegVEtjdwiv3oAWpGiXRQseMtKf4cFrPoC768LyzS",
  "key5": "42F1BfXsxq3GLqwarDtC1iYrv4Xg9oAoeRyQz194AmBVnH3vC5inNk5nVngzG46nFgTYo9SGbxYU7Q9rtZkHRT6U",
  "key6": "5aPrRk8rYr1GiY16uCdWEKGFSV7MNGTKCnhoTuQtTZzj2Fa5ma8WtQtwo3Bei5w4TairNmuQ3mg6yYmZekhhU2wH",
  "key7": "3w4vrq6AeLm7Neoh6vbnJrqqmyLtzrpGiauxETdKqcQLA6df9rng1GuavWmVbX1XkBNxkrBPfWsp7D7SEUVdCT2i",
  "key8": "2XdmzP96sT9N3R1FMtBVg7VcATaRaxvfFiUX8VwXkgBtjb8eYkChy2qwmdZ7kKEoJ8sahH1pZH6XQzZ9aTkwa9Qm",
  "key9": "2G6c84wd4CBUbMg5kzkd1quM2wDv32tK5x4NFbHPiamYeebeuVprzcCuFKnnD3UiJZeb62R442rugVU37DbYAGpa",
  "key10": "4sZSVjGaPddCXN3vDfdPCw1d2SUZcosK4DbJJ4eS2yBfN6ViKQd5KgdBYp7cdzfMsXqVP82sb7bgGqynMXAVute2",
  "key11": "5hoHXR2zbkyz8muJyJpwGRJ28JWqcHQNBYTNhRTg7j4tSHK7so3ENsnkvwUMrrMdUTHGYH29fVifevRxg1k4QWC2",
  "key12": "5Xf2yABVopthJkauHNotEZyey5BE7BRPkQ5VgxSZPpDasCNYkVEdHco69YDBVcbDcgFG7Hdg2unYNStWm4dqRxfV",
  "key13": "5DdFycsVdnJ9mGYEFjh1q4JLrjUmporHdfbw2tKmp9AbzqPqybT6LpcJsbRR3LarZ5E5AMRf66nUnGaZ1bVKv9TJ",
  "key14": "5R3g2Expor4grt3iALwvy867edJXfUTHmimhgepsezgPQajjTBeWH7S88VGSUyEShTrW7ZZy14eaoCmdggzM5ut3",
  "key15": "3ksyFBkQk45sqfrXbSup1dM3Goa9sdEoEZ4DTbYgkmnET9vvMqC7RmowAQWTqwn4XeXNNenzsBCSWnsVKSrQkXY8",
  "key16": "4zURnuM48vUTgc2uCEqA1i5EzcrpEZnqtfxxJwG7YsiCx7X3NzqBMgwSWUoUBNKqoNE6eBhrhtyJ9e6ykRVRjxVV",
  "key17": "4CzuouF7bVAu3jW678wHXrXmDBPBhsfytA6j8woX7t9ZKtzgjuLRFPpNcgdMQfjKBMGWWd3TZpXJZHwQgevBH3gA",
  "key18": "b33r9MsYtb7y46SSZWxaxfATQJT6xcUAVYEqKUD7XqhkARM1auBgvDogpwpEv9mXVb19HjrkE2VTJewsAphNM2j",
  "key19": "7Lch5vt8FzjBSm5ndAP4MxXttA3dH1qQgeMx13Xy5RYxLbPQWWmCCvJnrnEzucjhE7u7QK2Vcca4sbyyFqZGcbB",
  "key20": "Xtgz2nGRLjgcgfeMaiLAyMu3VTSiR8dDy6K3LAn2p8EDGPZsReVUB8htJJzircx8RhheYaCez7JmZjzUpTYqW6C",
  "key21": "3ofiHMgzfYYB75959r9WpjVUpHZQyyzrvn4D6j6kbLQAsULEUdbi2c8LoAfRySdL1qPJW5fTfYu1WNb3A7Q46WvM",
  "key22": "CBDBxQCwrreRfstrYvrX8AZTDMq5uPdFaCxBzHfwMLgpxGiNA58Ab6sgLSipUUn2WdVXfGXvscZsqkzSxZLZJ77",
  "key23": "46wj5jxjy3ND7S2i4FXphatznS3L5obhiQykfAG6PVChFp3pxSbM8bAsKwUXZeidympqmpmsibRnTtUZKxfsdSzQ",
  "key24": "9Q4EHNLzjND1bisNpuL9GA8Y9FprDsww1jhSxaF24SPCvUmSg68FXcGvd4DgBMLMMttkESBjcQnaXTRbPkRp1ch",
  "key25": "4E96C2H2Tu1LeGwcUDRodUmrFQaYqLC9JzTRMHrVsrXYSRT1j3NpnEf9r2gYfrurGs5wv9V4rsRDWcgxUwmuu4gi",
  "key26": "4Ru9vLxY9nHwHACumyamZtDBYojKE4Xq5dNeZvVfNiPzpmMorX4yPdVLgES5zkXRgkPbCYP8G9xbjpjLksZjc21c",
  "key27": "aL6X6UegfNKJbeMnU7sHmLcbHEb5NBGKAbVXbkgrkZkS8CPUbKzDVNGaYHtuuXfyf95m48H8vMRhU5W2raEJyab",
  "key28": "4GqMA7mCvhWBCyUY2CtyowsZazoY9AFbqNLL3tf6qs1so4wf9cwkg2QRSoCk14b92KBbibRuWXURYPUTWXSFNPZ5",
  "key29": "5fCiEzvTC9aSFy5m1YArDf6FTXsavvaVfXUdvP7TFgnYvCN59ForhPS18KT3oDgcJigMeouX2FFcKjHyzRpJDE5r",
  "key30": "5UYjtHEmSKq5wwrm1kAuADpJvRou2297qwVqBHLLGLdnDwGMfDyxhac99CLWThwvWLGbe4hixTPm77DSa6AyaJoW",
  "key31": "2wVupZHxFzc7zy7XaArcoaQNusuSAc7aSeZBxAwgPz5VN5BSaHsTJNKVn3sknFJbk2jjrnLUdFujLLjVEkLFyGp2",
  "key32": "2sZGvf67imqQ591ERqqZXBiaSfHJB912cbFpSPMnaom6ab4U8tVC2GmaoTzwFCoMu2FQGgK5GLfKAYFNJTFg2y3X",
  "key33": "5NAzP1hsTdcyBkPCZHqtLuoYj7XoUuYniyEDdo6TrHypSdqSZMcQBFg4czr8JE2HeDYBtS1Hr2hTXz8DBZVJddFU",
  "key34": "5iWPaCxR6J6vMpZJQhy1Haq9AhjPnPQ13P6i4x8wFjXXN46KL8mUrmNKixBtJ6abQ58Ye3j7XNfJsbDHCGLmNR8t",
  "key35": "55MLboBqKvCy2BW8UBs96nALn7AWShQJ9CbX7uk8w1zFMMQoTUPkSKjQXUpiMQgfwYHJDvjCkaUNRbPFg8SJ13kK",
  "key36": "2Lfvod1rGxA3A5oU5Dph5br3FFb4VrhhHCDZcrfEB9nU3rv3RXj9Q5zrpBMKFox9M3Lo8Utap4pyGB5jmhFSL4yM",
  "key37": "2puzEw3KUocJb95WmTK2iMPR5Vr9QhQpcoNiVUW9KaRsgSzgTP7157Csh2fTCDKdUPaVGEjVvToUpW3g5D9QegUw",
  "key38": "5yksdUyqtnu2i2ZVtgkAc9cTCWSRkz5TkVuL4XvFePoAheo5Gn4qpzEr5Z6Lk4r7gjYyWsVPALofEExGDytsdZXY",
  "key39": "3fmzrQ4aL7Zop3iH1F2SfXKUfUD8r86haeP1STxmZykDH7TSKZFgnrr4GY2b3hpaWNiQPLjm4Howzz4koBFQHDHk",
  "key40": "EKTwYCcYV9wPs2SS6nUHyqfJ2Jb8wVo858erkdBaevCHZ3snZU4s4B1QXVx8hdMGr6xWDxWWzUdaYou485RE63U",
  "key41": "3aoS4dviNJ7scjhdoc4MRKBJvSXsqCvQy29qr6Ri9MXXmrMtHWWQWBAwDqEHaWcmT7EQiNtgRAEp47D6JJibjm96",
  "key42": "VL2RavWYKv96BFeQjoU6ys7nSbE7MXny3mqZ38xwAvbXM1N9rquLAWWamyF73qgTo2SfDnYBpbyR9raQuXWkFQV",
  "key43": "2tgDH1MS5VYdxpcfV3ZGntw9UrJYDNQqKtPL7kccpwnoHUWMbiVCQd3tAebBSPz9upg8M6xdQidoMsisJXVGeNBv",
  "key44": "5kAn7AofYfyBA2Zd1vRQANW1x4b8V1HBKeY1eDdaRYg17HKM1We3RvrLMVw5ruhKRLhwYs6Dhg4kSDbszfSzF4jS"
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
