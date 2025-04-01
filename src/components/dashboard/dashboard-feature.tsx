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
    "3uYrKCmJ6YAWKdiVH5Bbc2oMybdLbdHKSzfNZXgAYkT1XpGTR6JjW98xPYycFxs7fE7qjvSMn1uwHasX7vkTjxux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j2SZuMsAfuXGNQduBurDT1k9sZ99ouWJ8syh3eoFVgt5GLS7B7EpQ9cfhjfF5BZDi2QAYNU4wtpqvfEfgrPnuAs",
  "key1": "5CRi1pfdHj55DmtEd877tvmszxUCBwgbVF7hiHsddcNtqBwosMec6QSnAG7FKQC8TYiaBksJxZiFv33JWqkpmKFz",
  "key2": "5MtgHM5pjqSLBJ3Hk2cwGak1UNcfRXGN3NABmQCsGAYi1GEKHL1vgUt3pQtUtWfKWJC1rQw58tksidGLWs4sdPjD",
  "key3": "2cYkcAtMxC6xwqdQqBLgcYNiMLapWrYM4WgWD9eizw8FqJw8GAcK43pnBjb5huX7xyjSTp9NnLnqxZeFw26LaHe8",
  "key4": "3Rpbg6jmviX9fJUxYfhcH3oRscSArjsBdLW7bWR6RkLLGG94y9rEMeJ4hyueBpcqwgzu92JQzbnud7WshQHmhbjX",
  "key5": "3XJBmDnmNnhQr2FmVV6pGihJLP9Qxnzfb9GvP2E19zf76xfMP2bj2uYyyrnHbjEHr6VpmidHKjncXjfKTESa7Ujv",
  "key6": "5JLvu1VkAYKkkDi2w93VGGtKauWMMQ3M9LtfVAx1XU18FEX5QNGeZtmW8ARSULcTM2bKPwEfLdVVgzz6riw8ghcC",
  "key7": "3MfmTfgqi3RnGFLAPmHtrWcqzmrEX3MJB6C5gzbVv3x2Kch4G3NsXJbDakgDaqoTqUQmmbvTMdS5ZmtToA81k54Y",
  "key8": "3RuJEPC4rvciVVbNBDD6B4hTjdQVvNdhPt8TemkobbfGPoojm99sCV2E3YNkRGvJ6Suewmc6imhd4Rw7MBbtETRe",
  "key9": "ykpcpA7KXWShaARg1T5dWiD8ghTNGmTwpQW13JzM8b768pPHJFHbk6eM9qKFgcvyZhNZsN9hhRZcsbVsXtVytqD",
  "key10": "3GC3nPDSNTm6aJgsvsit6GkBQSywXAs8DC9KPZVWdmTr8cz2oNpDQxhFxJ4wGzEiNeEqaShDGA36Y8zzZNWBt1HJ",
  "key11": "47LC489VctmRahBjQPnwcJa6tBxWvZTibMkqvYNX2ac2AnAw5oM5ZW5xVB2Axg8tz1SFQfQYnGTprtL4w2rB1hiq",
  "key12": "4zQ4CZxnEW3MBJBiMY7CvqHqP9KSve5DvKDFVEwh2zt9GhJx3zka5g6Y2vFjfMjL6mv62mYyXKZgrtYWzWvT3dmo",
  "key13": "4TVTFMxKe6WhtJivXE5kjAUo1vfdhgDiG35ev3SXAwvTWZZ5LBgQhvibkEFRhz567Y9MCQmqY5akbwzQicSFG29Y",
  "key14": "5BgSuMxDMWGrmhCmuLa4syj3QW3zYjxxad5G9c4wmvfmWuwPkYPoa64nutJkFyCzycPtbD1dhTzTa711rMJfNVi2",
  "key15": "5ZcC4YMQMbwZmKEaJvBpetu3PFXC2777XFNhSyaGo8vL14ikFfyCk9PyCXzNjNudWjCbHPdTVwffpUmfjV8eijMs",
  "key16": "4onkqEuShcvDuuzuvLrvB2hAen2BZxdWrkXg7yjyEfA7rqYE4NuW9MJf1XoaDsc5tZtQjXokektAEvhmMUbgAdSK",
  "key17": "3nYgWL2JLaBFQCS6z6JuSrvgFaZrh5uEVTRiGTXo4CGFCqFEzAK5sqzwgRpw3SMSaD5MF1TVNSvenFq1DFuaxr7g",
  "key18": "t2pUzkaPdgyzMZXeAEpyQs6PEUfoTHfuYMr59jTkVMbVSQj6QpkSGnu1Tnj7FzNfC19HN2cVphfpS7BBiMNfWWd",
  "key19": "5WhXBj7wTJkzYwpYayk5Lp5EcSWFa24XLCHfzcYgh9Phy8ztPgVKmswMVzdqxSb4obAuTR41odo7nurdHqJyCFrE",
  "key20": "5dQGG4kL2tEFKSMxEZPow4zg2FQEZLrH4amTTSqaw9jrNB6udaWPue6qEtrUXinAKiHw4C3pxpJrEsF4aq6eZvYi",
  "key21": "3xkAx1pBEWD7Wfxu9LRoQ7oorpFzYWM8iZbuJVwEnwiptAyNzUAp4MQnZR9LQX6g2QZCpUA4DGpv1HUBdtv5UVTd",
  "key22": "RErBYAExG8yWtfjnoYTzMgj6nsmbjZnWPcLJSCPXoMg2jH6LwXf6hP9Vbw99mqKH8iU5hzZfvLTsVFpnRzcUHz6",
  "key23": "5SuoUVXhxDZQxgWY47QqhzuKiVQp34ro1QT3d8CUYXTfJsD9aZ6Nr9CbrNZJaLABWuB2nFpScQGNDkwX98ai2YME",
  "key24": "5Rg14UaJurDkCxbY5hBYASboZVCWZaDq3agcLGFz96pvonQGT5ey7KXoktV92h5swZhvQxa71gaiXQdSLqznfbdd",
  "key25": "3jR7EL79JmtBdFFjLqAKGmGtWe8zf2r78gbPuEbDb5b9GpH29wBtU8PeumfAs2oAAueLqnAPb85tmvCcDV5UssDR",
  "key26": "5MgRWc575PPM5LGAhMoQTsemmawWmyYZsxCATcFK4p5g3LVqKnmEQxPT116Sew78g75fYMTTJtqBKhL5cBqXrhmy",
  "key27": "56H6rNRzDasYueCLQvLF1tSmmdGJvg6xyF2j6vLz2fNTo12mGwwcYkzYSCA9hGpZ5E97w7LXd2buDBR58bP8ZLLa",
  "key28": "goHNMskis1Afk4rWQ9KSZcYrJAvBZpGvcNcfvGjofg5hZTtDYHW95wNfpehLRBbpFvCFHiynkW45mciWcpJwmki",
  "key29": "4kMrwaF7Zi34nAKc4d4qtTt5soUKNePbPuzj3S8rWLVsDNG2Xmh7uXaQrUeoWsXZ2HDnRHXycJC9bZZAHKLoUwM1",
  "key30": "Si2zRgVHFNv9FZXaxzKfDv4EBSiRyS66AubCiVNc9b1r62F7snd9kM7oboTfogvxUZyzt9iXyf5UVhnipU9SZbZ",
  "key31": "5zgjE9pP2u4NiFnujbrgaZZSeQKoHBMFEzafVt5T6pLU9pw21bw9EcAKPTuBJoPyRCSvbBeBHagPi8QUfv4nBHb8",
  "key32": "vwBa3DBo2SGfZqimzCYuKce4J8cnEQErj5Si2K8XVGnVq2jFZmG1NumJy5dNXzgeHtaB6xx4yPUagS7JmLmz5Zq",
  "key33": "5kszG4ZNQLmgVvQN2vTXxnWyyBnV1dH3ggoQp4YHZEY8G2nEbuKehoMPj46sQZgun8n5ziY6pbZAJX6vR7GPaQzC",
  "key34": "5WubXuJWSG6eFCDZWzDdyLL23hBwb6BbqdF96wqu9yYJYkAZFavNBAE8z2wnuDoafDDp3wRHaEp6n8MYynakDF9p",
  "key35": "5L1oEdtxcxaAr3ds33zMeGruFJ5gSctuwa3KtKhhbaPzgdvPMLMmCAMaQDGiubh2hqs9TQ7DDMNAcFzhYX7v2T3c",
  "key36": "S6uojLSE2WJ2CzgnvxvVYp5ujAxRT4XXQPJ3jU9qQk4at16jjgBin4KBySRCp8DC59RQ1fVr9snGFAHoP6oaUk9",
  "key37": "2zTNNXftVbGBs4aHZjr52t1h7Ux3MAphmuFkJYUEDwRXScFuRFxFkLGWhu71oRE1FEbf1cht298FEeVQXwTNziAH",
  "key38": "iYDvWv54rooTJayBStpPuaXJx9HWcunGputSfg6snABGxh862uCEhRaRdcRHL3AtzAgdTKC34HyLwaZFzqxu7zi",
  "key39": "4ZxRHz17ryV7VAZrLokn5odKi7bgGpPUjmqGSYMF3AdawAJM94mvztweBxWxLDGutiYVCZ8EnbRPqcaKvxQHzdVJ",
  "key40": "4x3zEf8USCXYvTfoxhaFhhammiBv5AxnvrHhY151HiwNfRgtptvHhe8SU712rzEBDiHhfi6NCT9wx5XB4gn748mG",
  "key41": "4LJTCiezEW8bvLtiZgWyNVVMoLabHU6sPbGMY5t9Usfd9qkhKNbG791b5z2YZD2ushXJN6WHcyWWBYZFb9sMGyrw",
  "key42": "5RU5p3d2jcVZqfry7YB94QTULjJQh6BYCqdus5sKAQvFawpCvXUfSRSPCpYK9ggtApGqXWNhz3edH8TWVtBZbYkJ"
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
