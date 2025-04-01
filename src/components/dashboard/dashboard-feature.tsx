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
    "27KVKDrwBFbZScJ3Dyz97J89ccKSTdvmfYz2HtwAMRtpS36anb5vo12BZ67sfqet9GVdSLqPD77hgB5xdUiEGijJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52qVmc4zVMgtw6RAcjD85Yg4fFF4xAheusu8SmNrCE9skZdeDVYq3KjEXPN1ksdCZJYard9WkYGXzFPxG1wXKHp9",
  "key1": "3hHKNQbRz5S6q6UD73xe3WfNZB5JVYw7ccEcaZUdULLi2WUBDucxVejAdRnoxZVuMfzCAjnPCmw7uNidsvwg8eDe",
  "key2": "rh8kayEXYaEu64FoSHai1AKsoewBsN6y3FLaNxpVYW8e2hp4uYdHHd3Haw2cRTLit4MbJHK3ykJK1PdGnNnX8nc",
  "key3": "oYBrHKmaYWFVaCYmTYLwhNw6d9QqWz6UZZYXAogjBSiwwqaAr7brxBFaHBg4HjV53n6f3SFCEiHeKrHQP5XJsL1",
  "key4": "4b7xFpYhVxYGmXAoZkafiePN1gxMCXWctpZvzaLQdwsbw8aFgJqSBvDLHF3mfEXf8zkvpbKTauVp9jpGzYsSfhK7",
  "key5": "3RwffD62C4EEtQS5EN2mzqQW8hUy3ycqSsYCoAxFPG7v8amqS8ysK69Td2LGEiTd3id695DgDtTBZNZ5uom4xitA",
  "key6": "5ZHbfAPqysgdMqxBdHqEkM9QDnvfM8cuAybYd2K4ew1KTgiH5R2fSJdnX6coNvYKVnoQhhd2EB8J6nGgRxr9jzkJ",
  "key7": "mhDkaZ8Qg2bAvQpg18pmJEHiVkpGacrr7UEmKoRzwcFQg2mdDvSur3bBgdMyBsYtihPwfLpmDdbLEUxgPreRN8q",
  "key8": "218JKrFfhKW3EDMsi3u1H9Dvm8Gn7ymjH1cFn9qSFdPrtcQw6KHJDuJa1sQ3Sq6D5GB3qNhLweo9kdrD6GHkPfeN",
  "key9": "2nZVSvug4HuBkDSAccAZDkZfgA5jXysk8Wq7wgg44g6VvaFD4zThv6U17nbsz9FgGH6a6EE6yiJKhGGEkdr9Khxp",
  "key10": "43rcpSgRqCt2MFvCPsJiKxVWEcdiHEDA5EppZrvJPLwTPuvPaPC3MWx8xiW9Ke1gdPFaFapB3t5vK3RCv6TgbUkP",
  "key11": "5LRbQtVLJcyxDgzRGcZPjHACsCx49EBJjhNvPXZfvK4775Cdwxfsezm8hoXyftmocafBd1oNQXcL4AgNecdSNpoH",
  "key12": "2S2YowkvB9ManyNcLUCYhV9Bj4U6DwvhwuDVp3Fu53aaevLEW11XgnpE72jFtHcmPxJCxTozehxryJJnkM5A39YB",
  "key13": "4WEfTkx9htMSzUkry4UXJ31VTwCHJNkajMq1R7Ruh4C6sbSsbfS7PrjGJ7rpfL4iat2MFmKK75fqhGxG8vBz6bJm",
  "key14": "55cdUZL2axtazb4g2LTRtUCp1DuSJA1e6jqeC2H9esW3u1rtQYUpAZoGPF6GmsKzD3PS9azA4RpQM3iyJkwCAmy1",
  "key15": "5PBoWzBnj6pDuaWkh6MdLJn9R8fitEfKYHMHhgQnMvFLmvZfYoofXNWq3d1r7KfP5WzuALHznnBZUc7dKHXBfbR7",
  "key16": "2HaWpXj7tbUniHB4QoaySUfwEykdu4qAEYDbqUyAYhygyZy1ffmrqSsKeymFqs1qP1NWDv5AFxWmVjNTK3HJitDN",
  "key17": "f6LsdASYjWUdRaXJJhFmWXXirqAhxFZzwgauNjyMbjJgAavnDvwNbzZup1QwebHkubP7YUSNTRW6HMDotTPbBU5",
  "key18": "yGE7eUrkgpAzfc7uVAE9JymHXsDED21311kuTyUmP9bSy16Gg2JAUhQ6XWj9MFZddcKa6S5TyX4c6qkhArbJH92",
  "key19": "5sRHK9bWEwTVja9n8Gdmtza6kjfppgmAqwpchCCFikckEhS8iNtiGgRiLsUraCuueTBQdHHf24fADqC1EJcGG97n",
  "key20": "32u56c9vrxQEM7By4t7VFKeKdRSus6fFBWW8e8wLc1AGxk2tAwNhJwdzAc3UiD9Pzbnf3mbnn5FpurwPGw9uV2KF",
  "key21": "E9vPMn8nuN5mR97WtnWx1faRYgRGzT9WKqn7VxUfVMRc9UAwiRYp2sm3hw25noQyC7h6P59nfAeMWhFAkL4C5HX",
  "key22": "4TJUF6XJA7MZqrdpR2YRQKCTy1XVaKmprdQfZVEcUKZXEAiEWaVeqcb4GVxy59i3ZL6BLLZaZ8QB9rjRryC5SPxu",
  "key23": "3WiQ9LJKCpvqAgodcF5SRpMLCv48MfqQ9UR5DJxbsXjLyjkvPGTMJuWbFTuXxepGXGQcivFaBoXMyWyphjXtkawT",
  "key24": "4QwxEueKrr8um5H6wm6XGBASUktUAaUN7HY7VtM2c5cahR7sdfewUgqRrQWKCRFNYgZynVFPt5eLz5c6oBuCfyPy",
  "key25": "4A5DqjSqTYjDTzQCi8zoboXHpKTQkywmxZgLHzMKx3HwWTc2HPb3yaHjRNYa8rWia6s5KGiffvE6tG1KkxP8nmLF",
  "key26": "2pSi17tdaPPaNx4VGhraBxQX4pyoNPr8ugC37qsoUPZ8SvYUvsskQbQZaAZpbDv1DLjvhetwUxEETdjP5UGW95UQ",
  "key27": "2JHrjeFUskp3EJrt7uQBWutgiJKQtt5fDWHYk6gMJR2EGpsfGiy6g81sJrpe1f4VUCzs4XB3KbMoyuxYVj2SF31b",
  "key28": "5po8jYqEyRtJFuwpjHchCV6DmDzkZLbucxwsFs57wwtQkD5znH2eRsWyEY3yPpwG9xQs2MhNhMWNFpLAKPcyA3hQ",
  "key29": "4ZBuoCFEXtHfkyjVYJfjkszYV4qD5hwKP7uSpGj9Hvmr9SZWzkczmfPoeEZ9kRC6Qumb4d7q1hAqpwDG2dbhUMAK",
  "key30": "33U8JMQrQdcTCMV56JkqELmavsLeE5FP18KwepSYwVy81HMPywamVWsbXxv9MFywHexXmnGZdf2NSyXSX4WxQdSg",
  "key31": "3Gqb1ErfzbpyfzuvgsK4dVEAy6eMXZ6A7wS5K6fvrTDUMAeguVRfNEAkHkBfNhRS9DRAVys8JZckKytY3hN8McNQ",
  "key32": "3mgRC4BJDUrufXd4hpQibwBjGnZ6J3eSizMUMm2gkgRAcG8yUcWSaaixFfPvS5nwgHNYz3ZTAStchfQd8BfKmvSc",
  "key33": "5q3kUtmp8LAf3ojABPjRt3iAFRQQMBPQpVTetnmNwUL9ySGXjUrNyNE75fF1KTfifwHpwnENwazPtbh5DUMciRC4",
  "key34": "4chtBsd37J9tH3M7nF7mm9Gim2KHS8hEYeN7AfGNfDfTrwtk676TjDuxtc8Uf2DBLmE2Grt8oM6rgNNySrcAG5Uy",
  "key35": "JSD2DmvaJfN1GDacVoY3DNGvbMHQ4T5D1U6C5Q5iejPTqAfqST8tmwLqdQQrnhJcomEZ7PgoP1TfzRG86PabaQr",
  "key36": "KravpNpWyiXWsgbXSZVQEHB5CEJQ9AfxNvTvY4xNSGpv4LW3RvvKoCceB1eugnebuiyaxvNWzR9Fd29jezhJqPS",
  "key37": "5ArkjsDTKmKs3tupFqFquaCbFJisUTBezWdfQ9hr5ZKQu8H6HGmnFoX1URTeEwNBd6oWGRWvyaj1HPsvXaHG8hhr",
  "key38": "2R2GCuLyGcUrYiLLR7WVBsbG8A4VZ3UaZcQsaeZMAiL4qF4M8hAK9qpBw6B597U4SQZ6FSoNM3tAzkt2pXZCBUAo",
  "key39": "5PZhKU7jBMrtrg5NtS3xPEwvo7tKVmtd5VrE8GeMAPKp7drUmJu1CuqkFLvG89D9CwxvccFdvxXa43FGTdfpkxLR",
  "key40": "2tKeUrQHs3QmaJVhtiRYWEkekDBhmdZ5WQi15WArbGnhMvn4YtTMa7KJYz76RtAdbCs9TPSt8JgyWZmtghmP5UiS",
  "key41": "323J4XpepKsyJEXuTifWEfHtJD9JCSUW6Kc5k96EUUNdu5FfbSMW7Bq9kvbKFFYMdL8zj7AjX6pb7H4BYYpzH5F3",
  "key42": "Bc7f1JKzj6RgPe9nY4agUhcr8rjgPGgnNmXmu9oCFtk4DmABSJDUrjpkzBYKBT9y8Dv8nrcNkmDRr9igrGfCyV8",
  "key43": "2AGfTHEs2CzXRk5w45MwKYo8BVDRHUpDAgvQoTkdBTN26r1iiGb95zXzJuPoDYYkpJT18QpEXjVjRpR3XHUgD1Nv"
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
