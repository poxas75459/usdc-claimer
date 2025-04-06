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
    "5pMf4mHhr628KG6Xeih9x2GYYZUP77CDWdTkpyt3Amjhw2mzEzsqeNvnYYsgBtXdv7j3rcZcK1oG8qZqK586yx1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EFHWofWY3NyLvK4rXwboN4i2Eac5ohhmx8VUykesfF5zfAz3jsY41s8r9GCk5UkmpGwJW25o1fQJrZawb9TQ8ty",
  "key1": "5i1ziAW1cSFc2nr78HdWfrqW1R2X8uhY5KghTToUtsbKpgBu8knNwa9dyyPJYmSoqpfC9SmBj9St8W2dDoEXjJid",
  "key2": "661gMxwYT29vM8huc9kuBmwDvMzNZhPsY5qwHjg9oBpLykMCUdDyWwTKQozWXkMjErXk4bSaLbuahSnZ4chSyz1y",
  "key3": "5HcLjwknbfuQQgLD74Ds9inSQaVk29sq3Va1B4YdjV2c1LEAyUKssiUMT4Z5KHZvD4ogfwRf9NeH6AiL5zbiHVua",
  "key4": "4oKxMdD9jgC1oAMe3xN5VJUagAgUQ5zQx859QrPmwuyW1C9TtSU4GgqdefnMttvp6LxvjNDSioQwDFwUFYSJeJwr",
  "key5": "5t5w5SV4oskNsvjquPT3KeFrQo8UvzXUo3uSwq1Jsy9w27J73cauzU2MC86Pjt2EJifhGCca1UpPaC4qiSCdMPE4",
  "key6": "2mqY92ZmRBQUDSXdu9C6fBH8T4gG27nzJj4iZxZXpxgZAG2vh9iGf6jmayhiFUU1L5XY26phL1beWpTe8DQZuiUW",
  "key7": "2N6373Xm4AnRi33jaWGt1KZCQ61PRB9vJaQ72yoHSbBQ4Hjh1hG1nYi6tEVP9ixGyfuE8BqWEY7sRJBUXGSLjNcR",
  "key8": "53x3k3pG6Xevvocxfc71vgrcdvuWohgzuALu3P8EVZjqmrMKxN6MVk8VQgxRF5s3gWsaVdD4FGY4i22145fsbXdu",
  "key9": "4UTfGFZE2EoS6BnY8Ad5E35xpUxrW8GbgYpSey1KrUGij2FpNnJydEExGD8V32SmLPjAxVbBCa26S6FQnzp2NGsy",
  "key10": "66spKQnT4uQ4W9wpnXN1XSx4p7d3Jw8vTwiwLYeDEZvBhgYqg8RXXAa7oKYUrQBbG53kjwuVqcWFAAVgGHRoPdG7",
  "key11": "qfSe7UCpJCpd5yrWD8pBuzv5TiEGb11oLSxJCL4yC1QLxezyHdcRDeR1YxkZFXPmEeB2HLrvmKRsYjaNSdviauA",
  "key12": "WJ3XPW5AGrrqjqU8EBPcDhpe3yJFU3dHrrdCkkHxDrDMjrvq51Wf3SxqG735QpXRznmHi9w8FLdVQwa5T8EWhKj",
  "key13": "3Pa99R4EpMQr7hyFZBjmCvKT2u59Vvia5VyHYXL7c6VDT8wTiZ5kXq3kxgqjujFmmCHiHvtAoKfzM1MS6dGpENPg",
  "key14": "2tRYhaVTPopm593MdanXLfS8BvzwAh4iutYLNWgYwdKxDJroqVE9hDUahK2fCbAepGqt6BAVidiiKGXPHp1ggkPt",
  "key15": "2rfB9um5Z3TsBYrNc1B6X4EAGjBzaJSEZRvaTBux2BEqErTxdk5ooqVJWQKBxgW9z2tu3J5cvaj3nJax3pV9bFSx",
  "key16": "Lbo4R3suyb1f2zQGU4rCKM6Urgag2UThHnhTwDSwA96EPf2UUV6A3gavkarzPkggyxEfXZwmSYpdY6M4cDwcPUB",
  "key17": "5xxervNKQDXw3FtAXhbGcDuiHEM3B5nQz3hLJreKvw5zdqyLyqDgy41ovzAExG48T55dj6XV2UMMofLFABxKht6f",
  "key18": "4RzNCBUmqr7UZEhi9cA2G5S96HEFNrXnHRXEwRmbp6XbTJxu2wcMBaTd3i3ffS1wdYLNHfvFR2A24W1GGSx9vypk",
  "key19": "5YSaFEy6Phkmbqc4fv3hcKPScdpFwzGbJ5DCKfcwYHYcPz1uSUoLUo4mJh3L6dmro82RKTFxVHHBpjFGKpufJjDh",
  "key20": "3oXRy4L6nvuEyNFNgwTzcRQo8qVf8mMzP1XHE1NKTocSPG4QrUsQZPRZZb2zqZwUj6WAJt7tTBZS8ofF7HNtiyrw",
  "key21": "2JPRcxq4h8Afb3Pb4wAhrUP54e759eyy7pAfVsLpnkZ8k8RUNQ2dqPNqEcpzHcTnWqHDV8xmpt5YPbMUTNQhdrQC",
  "key22": "52DEAz1as2QERAddkyn6azm9DgZdcr5VTeCbLCWpyGsimxY38THTkvUWL6jZJogtT2FAG15St5bsfvXchCS62mgB",
  "key23": "4hpHHfViWxKUkyRahprg2tn1mmhEyFURDetDvWj5tD4ae4rtg2pTzpZx3ZaBfBRPzf7hj66LVBGhJpq4DAu2rvMX",
  "key24": "4qtQRe93UVXUhjiSBhkZLh8JXBmJLPv7XNf2TMgrdzq4bukk5uWWYH76ifDNareNRQc45x7zZXiPqjmeBTQb1G25",
  "key25": "5KhfWTamLuuXr6oX1egfFL6z2TWkkmDGoSQTLrXdLFYtMTv2TtAVPyvpLrTt8Mjr4wud7Aff83d7tMFNH73npygi",
  "key26": "ezbvMTV3BicukA4WoMbAYfYCEgyGAA3qRCQs6XYLdFnqpMUL4hrLQfCfBUPTWKJ5LmeiQxthL9LyVdJ74p2K4iL",
  "key27": "pYwWgEGrsa9GmLX8Yk1x7mPjcZzihXtfeQDCsg8g5PTp5mxNvD2U4SWg1VcEviGpRHBakW3cKMrA3547Q19TEfj",
  "key28": "t4NL7c9mUxiRPXC25A3AB6B6N55aMtmtaWYUkwyJBgrrf79p8BLb9XiKTKq2ACPM1obrAagwWuAJ7JJNCMzPrxA",
  "key29": "HsDhxtX9VXg1XDXpc3gAVHgh7jiZAtwnQyTXUtQeEQAauuWGn9b9SSoqftr8cRtZayCrx4DrbBcHdZMQo5hK8uf",
  "key30": "2idUhwyfpUWdipQVVvqF3DLkYrdVvku1SEuK6As2hGMcMweopbfHti5vTqWDvB7FC74AaztKkVfrPSBfNxktyh4z",
  "key31": "39phGVVJmaktYP87ofhnDw7mLHKG1KAZKQ1t3x4PhQhJiSX1ZncEG8o18kRmTh9GTtNK3DNPf1scP7AdPgtGQX2J",
  "key32": "5nQJzAmWKTppnvciZ5UBc1Zp4oMitp3Pr7tnfAAtWqvkLtQBP2svm2N12XUspsarBu32ophthxXcPtaBDdbNeBgj",
  "key33": "3wMeYetejTh6SbLNpM4fEQRUnxp1vDpCH7e4J81ayZw7Sz5h6ciiePJorYTQKqnQFzkMLmxHt8L6hXkf8ScqU5kE",
  "key34": "3UcB9DMkLo72HQ5As93hsGsUBZXqxXbEDzUS5ZGpSCw84V4RLujHts9azw76K4oj5vLF1b9CrJFgn7kiGgsTpYKn",
  "key35": "6XDGrGFziVnN1jYkN98oKbqbacbjh9wDNLghAs8qecZmmk2r7FTYmDFqNRgwiuPshxxAC37oL8DGtL632Y8p33v",
  "key36": "5xPvtf5PJBMkhPdahVs1F8PSghQyUCRaxdA4qYxKRbT5fFuAmgcbQzTqctC1W7HGtYjXWDaUE4xC4bWwk7uApS4Y",
  "key37": "4B78kD49z8bJwn1EEisbFrauNyDQLXobMzXAPWxSRakdxEu9LLtZ18X15vNX1MQywZh2pGq24er473mwoP8Rhbwy",
  "key38": "4QYg8UmMmMDVf9agjPfHBrCHbi1QeowfiD7nvxpwxMNNnG5qGL9iijAAJnJRVQnckP6LSZCfoJSq6RKx5izENHww",
  "key39": "2YJMAKYAr8GHjhBqPx9ZESceT7Yi2FjJiGJHRwydNjFLtZ8VkzX4tKhZr1WHguSoSjtt937eSNbL4Mrf2K5FsnH4",
  "key40": "2HBoGSkewWCwLJw4HZpwYLj18uBsdUUPRRvzRWoFtwpJKwTmZSXsCDX4EQkdzUgA8gXN5zRURmJ5mtfsN1YJTWWj",
  "key41": "QMbwXbSghYmrkBkV9RYYyEMDoWSnUTLEbtmexEyc433DRYuLQVLyf2pW28BA12xezCkkjQS3w4nm2kVVbiRyprb",
  "key42": "5HaA1qmdsohYkMYYZeEuUonm2hoaNFCuwyEyxXswXtV8Ksxuy7frUWsqxjFfxjcwHbWmKwgrEfsgUqXB35FX8YQ4",
  "key43": "5bhHQp9XbLTr8SgFzyYJbS9fzWA8mK6BNwXLsDDUhcDZ3vT91PVkDz9SZyRZgNxykMuMmwixtV2HuwHqm7ARv8jE"
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
