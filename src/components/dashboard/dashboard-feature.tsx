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
    "3g4GHVJoKAGL84K5Lm4ewEeXXGaWZPX2zdeJex2M94i8AErtesSVZYbvKijJgN4Ea5EBkfeqTibq4689fYcwtpUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MxbHD4E5cdpqfdn8o1iUhJzSnpMH6AzmBKfrWECBxzGAUAG3WojcSE4JAU5xjb5mYcE75WuWyrvxpmLpNHuGkjH",
  "key1": "4iKPdDibyp6kQyEMmrNF3pQvpfxWKUo6dxA96qTA4SdM7E3gcY9x6gZKTt17GhSJUQfvCDTUczTfKuMx8gbqE638",
  "key2": "345ZimLjvGJfdJTLhMDQxDPn1zVdcFHTuE8TH4yv3bHfVa8sRLsk6tyQcbnvzKGqhNFgZ7W7rjuEo3W8DAK2MfRX",
  "key3": "3gritHruXnRJsq37dDTFEE7qxkt1brjsHPwosgEVYsKEQbaDJzvN8fczugACikpsBXcdBygaXenZnFGMu3WqQCww",
  "key4": "2SK29kGQX4uPSL3SC4HugX4H88V7BYAG1JaDFr68rV6H7AkRCvX3u55bzCHHCebsgo91MvfZXU9gbR15tJKZaqL4",
  "key5": "2YwvG6kiGUHMMMcURNkL5hqWF5CuZvkvYbnjBZyuoMTkNRRoAqZNPmwXJkxxWf5K7gnvWPuPtDrPcCXLfLVAnkHa",
  "key6": "2G2gbE47sEbuJre1NgTsr8kHni2E7njVdUhBJ6KPSYMQEwmpAc4zvvrnv1E1gN5pHmRn672pSnvAgbASy2BrCCT3",
  "key7": "kiLYAfbnHF72sjRpXcoRR63hsMKkVDukGkcS1DL1dJcNt6E7iC1afvx8acDXjv5kS76ZMDE8AQriHwd1JtZGYri",
  "key8": "3i8ipQ7Yej4QaX7b3aGMQeKAF1E2Vh34zbRMKEifjVHv86ZkJ48ggVaUkC41h6LjP8tHsCcjL8r8KoicA8pEVjph",
  "key9": "3bCuB83tHY2BpYWfwNfLTdwot3VXBeHFtr2Mtvy7jdTe6JPaJtLSc4Feq8CThK2iyyteTNM45e8F5xzeiray4ND8",
  "key10": "2WtrcFXcDqucpFWwCBCiJQSTFuvxg8Cuthig9AePqNgDHM6eTzPAn8Y7ErGW1pdnWvdJ2XN1E75raZ9HmkpmTK78",
  "key11": "5DtZFGSQfz8kCPed3aY5QQR2agMithNai6yVSHMjpDYX7erhzmhdeaqWRmERpWEC6DLKxipTbay1soY49t346Ywc",
  "key12": "mn8Y5945SDYv39Syv5szoGijgwDM9HpCVp5iJ7PDCcFt1UzmGLfZcBCrRwHX8p8jxhzgFioEZdXb2AHwfAVoYxy",
  "key13": "4wMpAM8kqDsgBG9h3P4RWxs1ZoiHBYazBgaVhCuUriEzJNdHfJNp1zYPpKUVkrqaCjyPBWsrMqWWH6aTe3Q4Zsit",
  "key14": "3mw68GGGdw9CjiSKw6NG8tfVWhtHHXC7ULRR2KykesWciFjtbX8hgtjJxdtAoPgasybPzqUHoCSsUrNZQ5kg5tVx",
  "key15": "2CkNBmYepzfBa6dBXSouedcrzfaRM8qHzDYkXkWY5dzTAcqH9F3vn5xGpdDHhxhfWsopUWXvtyAmamJBmf8hLK3c",
  "key16": "5GtB8R1kZAuXuT4SxC8fwKvPm5ABnJi3HRb72BAhzXEXY16pZohfrudu6KZbeLxxfZpTKzVuiVH3pF3Bi55Yc8bn",
  "key17": "4wymY21N8p7tNUntmx41fqymDsajPuEhUbDsY5Qufuix4KVadWn2gp2MZ95qezmoEXJr3ih3axzatx9SNpjNCyFi",
  "key18": "2bRMmHNbjs7afYgJwUD7qmgcT2wovGoU6SrH7L8hvKFMfaMP6NyAv4jdj3YMXpTt1SsCPv49SMrQvhf47WLPcCH5",
  "key19": "3Ao95r5X3NsnCxnwPToQntqCxVDYYuMGYbUs71bvEv2Bacr9ycSAczLNY5FcdoQhQgRsLLVjVe7xSVRGXvK3ppHc",
  "key20": "4fsUcF7MV1ZS9SNbbbckvvYLVn7vQt4mi4Wd4B49D6SwdNcpZY2QkR8FFhLoLuScbdaByLUmZqDYEaBL8QJcD7hc",
  "key21": "4ss4ErcG9UJ4k9EhXCuAW2QRqrkCE7WfjiJ8tYFtNFTzsmdLea93Xc34rd3cx9ervjCWd1uxoamzkPSA2g3zJTmp",
  "key22": "4o4fsEvcd9soMeAXh4CPsyn2A68FUWS61zKsycSPwLoCauY4cFrofHUmqoPnrozEdd5K9Vh7jxQ6wLeyLa7Nd4eu",
  "key23": "2aWRhKS1uUNmCFoWvzVP7NS8Syyoh5USxi6m9oTFyFMHhmZXvDPQbuiaTusJaF4yJJpaRCK94ectk6LMMyaeVKkf",
  "key24": "4XwvwYqwoArg5GgFjS9SCQu8JrUvoRdUVwi6EpgEE6zcm7UixGevAWF8wDnPBYAYg57maG4ARzW2TMw6LMueomnb",
  "key25": "qWP69pt6x3tkDZDkcFM4d1jtY7q1DBaajQqaSHeYqUxaqqF3k32R8Qau1DvKDFsV6cAxUKPZusMM12K3HFoM6xX",
  "key26": "ek1c1aP1b7CqiTvBH2wtx7Wkokckezt63CwbapiFthvGbXb1pksSZ23w6LGYqpv9xQUqbhz3AaJ3wvHdy8qTzBT",
  "key27": "2idxzEiYuShy16Pa3KUuuL8tmX4doHyUKcd6F6n1huHjbGUEsEeCXAm4CcZQrbDabr1FPoa6ssc7EEeKFvdedSVn",
  "key28": "56RnWNrufijciXGsAfBWbqutFAoRFqkkdsSvo5kWrehY4wzvYSnW89GdRrinkuTCpFjraTKWJ624Nd44UwbBdiZ",
  "key29": "5NYUCxpEqvJgpdo56TKiS39d97n9G1odFr6gVUaY5iLr7CD2xrimxDCKEDpB8XkySexfNtmzESSgXTFMcQzT1WHr",
  "key30": "2musCPM1ysAwmRxYUCq7KXHXBwaa6U8wjW5cyyqp2MDjJn4KB6dJMhW2ugMnjHQxBwWYWfw7JF7WqdyGEaqJKGp1",
  "key31": "2DYrrfhdaaJMAtkfaoHhtL18kY5PJJjVdHg1BY6Z5gmTdAYbocyQkbUEoSKzxNX6pHX9o3ra5ndXPT8z2DSsS9Yu",
  "key32": "2wPWMhVhxh1eBXRVQtVQrCNmf4yoEpEVrr3vTfC5A2LLJr7BxVRdb3da2JydJHfMqxH2YNmHUyTpusCYn91GfKqv",
  "key33": "4j6pxDyPnrTUt7gm1zuNZqngNVhZFqomtKL6zksBEG5MBDze4f3B6hzwuJKRFFCVsShaZ86iLuAAAjfssuXNoLyA",
  "key34": "mpud43AsPfHzbV66HXk7Vi8gYKpaAyuo7LGtyZvXZ9XxpBqFzmGCtRVYfgsBH4w8PGMjqbhvSyNca4StXgbSzfg",
  "key35": "5UJoANqRt1PinC2P3STyKmKgX5V6VuDk3UY8QoALJqQSV3bSNbiGgkyeoZLvku8HKiDfrcrgrr5i75Ykx2oBzUVn",
  "key36": "WDrStpJk7aK4tkZhDS88NjDsiYNeMgYnYejwsofbr5ipGqRRvwHTSJ7441YYBHKfYArWUyFjNRDnVahfAAYo8jG",
  "key37": "3qt3N8dmPS7DxQri5fgy2vEPkgH7Nk4GRXz3tm7oQDGUTHquYp7iTgC8oov14g4dcBUoHKgJ9dXXq1xE7PosKivz",
  "key38": "4TVS8gtrNfcaKTAEwttdTipxmgzrKeMMttsk3uY6CxHZ3ZVuzxx4VnVKfPDtEMt4WXpT97Y69JustmeMk5S1KqQL",
  "key39": "3fHW3XEkuTvsaoi1LKurZgBRYs2FLuHCWmvJ364BqQL7gD5GJcrngwV7dfc7SPJLWRcRuDtoVCK4mrC4MuTrr2RB",
  "key40": "4dpR3aEfttj5T88u2BydsPteXPAhjqs8qwSpNHMVaLK1X2q5FEytGzw64U35bR1Gnrv3XbigqLzuhgCVRFSFtBbF"
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
