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
    "YxghZpzmUYXKzxfXuP6KbUbeJfHyqdTgRD7Lt8XX3RVp7MxV3tyQEoYbeD9jbAofrADTGVcVwySnMRDHsq1b6o5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y8iBKdheJouvCeWgWvBjiGgNFWbiVhkALREtcFDBv39e78o8Mr1uBzyVJobKtrSBEhrYDPXQqqkx7YnHcfKNNKN",
  "key1": "932NJkr12n6hJcyVYbHfsNnzHbze84wegAGXKeTrLjBsJZXn7sDcm7YdNrddjN3MqbcQX5Dfz4YjmdBDqtf7aDN",
  "key2": "52jsjMe3hrfccuV61L1cAUoFNWeYFtrNDiB9UJqZ6S9norDbCZUoXSH1KUHkx2C97sjappFoJwrPD5jxPDr55Jy",
  "key3": "3UA6SysBMKUdr4mSkXYhnoq5PnF43cUYKn2En2ov2rE8zeVwU4QS5qbTBjEiwD7EpnqhMAdjNbCsJNk58vhdX1iu",
  "key4": "5jYRqMYNLoHWSbK7KPdx2CvaTbCthHqooaUQD2eNmotNuL6D8JXi9YcdpqpnH2gJaqtt2EyJs3xxg2bqv9zVd18Q",
  "key5": "67VJqyfNRYkDduMR4kjfPCNo4T1UgqQg6w6EqVhV3MfKzM4CtB5JCh31C4C5txhXuEiLSZcNpgBkjJ7FJs2uUNgX",
  "key6": "5k9f7dnut7krBVZdQRmYhB2ypDnF13tzdnZrajtNriGfRz1d2942nfLk6FDdaWQe2DBDiE6X2WoXYHFYkkBrcEKi",
  "key7": "3QSmZRhXWYhA8CKm9ygzVbv3cKpGVp7YvhoozeVCXy2ANWaHQFrPXzpo1cEnhde3SgjeyCg33eAzMtmAZys4Pt7L",
  "key8": "YA8myxKpXvq2cqp4m83d17PK7rhceHkTRUTeTSRgokmYzvaWVcyaax9ihpzEDD9YtTbrzJAEWDALs4Fasch2Qun",
  "key9": "3xi9rjqYgPPN1UF9AS3R9YidTDGXU77M63rQH78T8VLGsjdEsjeEy6EWHRN36YmJi1Bd8LhG2w4WabdzusMCFTk5",
  "key10": "3EdRgDhtns3tvZptBMP67WYU6EFeXzaPYFwAeA7CnHi5SfhgcCN9nFkhzn66oX3TL9rcWtguN2G32XeLmA9hQeQC",
  "key11": "2g37JqzhzsN3DKkJrCuMBpSYG5jyyc51q3AmG3B2unLQHHedcPs7KAUD8gZCaGMgP9hYthNVPwe6JJEBoRQzMTau",
  "key12": "3WH98hPFwGszPY43kcjkbbFHsafPXYpbuG8KTKp237eLMeHFu6H8TrWckS3y5EjEVdjkKKfrQCLnQ16MtY9EHRLF",
  "key13": "4wMD7fdWggoqgxUufYRqY3GxtP8SakF8WVaPmx6ykVCSpittHS4GR4EcuJAoL8oVcpqrm8yg7GmfJx9aMByMtao3",
  "key14": "rUQX1wmyYR7ALcfGwHWEj7VXV21uUwvwQEhxSLW4FZwdabpiZjcw6mhFK3r4P5AkEAGTZz32BXyz8ueJ57Ms8TM",
  "key15": "Gqib3gDCHv5KEjZrLzqR5joLxsCZu1GYsL8TUiyCHipyhwNCwdfZUD4rLQcSEGdTyCQFyw4aieQGxkqwpq2vVF3",
  "key16": "24zbkJwQfeSaBxykYvbDcUGmVp6uD5SsiV22q9LsSFSX8RYCBxPHypptVpG4YefLJMgLqnjt88j8kM8PE5WbbefC",
  "key17": "191pvTHJ7q8GrHomYs5g6wwBN6WpQkzoX4s92BhnruqpRjPxpbyyMJmQ9HsDtXrEjAexkG5r8xj1zfutbz6GdGk",
  "key18": "G5dq5955aJZRP1caNnntgUrdBSucgFdJgPebSMyn3181qarG1X9JZoEX4zECN73oUbwfdLmxN1fAMQYwr5torVj",
  "key19": "5tGcL21FzsstsU9E9MzwdKZw2n9RXcyst1VLDtyhN7okj1icHmUKgb5dfndFsBWCmaXGtzQVi6eWRJsCuNpQia9T",
  "key20": "NXTVWpwzq8ngq6uHVCsvcuPUygPoQxQ2zUF1KSGagg333myPRyWXPXfkL4DNxQSBciMe1bLnCnWrWx8czYs68X3",
  "key21": "RCRteY1thYL3PANhF7rtdLpRHj9WoZumamDGXGD6cjFRpC3V8qBFc3X6Gaqce4ncWbWrQrsXNGvTapRwi1VCJfP",
  "key22": "5hRCbgFry3FGDgb6Pcwg7nGmCDY6nT3cubu7yFNybEkGH1HuK1MNATCNT5tPLnFYju2d17SxbDDczMECujVHfETV",
  "key23": "4sorVWfGcNGZd9UaxXaCTXtpMCi7pbhTiNMYaUtjWsb8XFmbmKzc2FsZF2mWqssKx3WdCNFpfkeysQeKxE1Tnbrf",
  "key24": "62mtPKniJFKYtuf9BtTBBrga7kiQyedsA6gaR3fUknT3fuUcJzPrukSRBKTEvihKtJnPvg8soFxLxtGNnZeDSo67",
  "key25": "5JKC32eB25nJ2tfy8oPLhTRLg96ZCQoQRukkWNun73W9wmes45n4QfjPg2NGKCFzG1vRu6Eq3sSnF6ZLTF12QwKF",
  "key26": "5oZzRVfc79BD3zhacGxCPcvxs7c4inCYvXk2Jkv5GQRipDKTQv4JnchJB28NdRRhvS2jA2Yre1ejHwBQ51LuWc6x",
  "key27": "2eWrgyjhRsDor2goYDwyj9U3fza6c5higebW3Dyy45w1qEg4uUWwaAWU8oZuDJMPpbFA25Hce5pJhN5T9XMxL8dN",
  "key28": "BQjskckzdsPb2REDf2wWp7tFYifyRsXy2K3Z7CxxnvrArAu9fTq6oy5Tj6nwNWtogCeismh3vKzA5XBsEPGftUv",
  "key29": "4AiNk8YJBFaJJTHYN3GoRRwus8PqExPeSeWdq1bQRnkoetbteHE3NHpsGeUqbt9SajyBJfYx8SWnF4qcM7zMK9b1",
  "key30": "21QHh2u626LJ7WiRV6WFgnSaNr7USjNZ2XzjsWDqSxQcHfp1dFVG3ar1kXBJbaGBrVgYx3YjceJaiWh8idHoqpJH",
  "key31": "53afnTxThg3kWgWXCgHb6Y1iJEKu8QVFyseryBQ5uHAU9rupU5xQMzHBZdVeEXxPciJorTpnQVCFiw12izoHfqUN",
  "key32": "4uU9QK8Mxxg1aRgjpbun5jx39EsL3RjCLtiTUzETUVgiPUjLTQDHAeNTrfmrdBQhTCafEBC4yQ97apvsTRiCWcLP",
  "key33": "VFjic6kRqf5KxEWyJ2CYqfDwh64VsjhcLfyrsJyvUMR2468TZ7tKfUVSaSduNNcAYkMvBpFVD9A1wZWKba9sPsK",
  "key34": "QAdvM2tMMMJVKmf64BjN3mwAoFtRiLxDTDTQkEwq3Ck3CABujacVfnMjjMnYfALigaGcfMNeiTdjrHCMQ2LnFde",
  "key35": "2HUtCCw1Q4SinQPxPvTPyPg4SGeFfpBX4qxDuCGJahAyFfxU31hNPTw33nGi7kJeg2p9o1p6G9thzGUUJnjypKnM",
  "key36": "3ZQXVPrSVuuSFLNFfrPMTraRbsh8zfL5i9aKKWcK1ZYhfojwRmiBew5Nat3G44tp9wTqYsKrEzfTUvZESnwet2iU",
  "key37": "5SzHBjx8ypNor4QjcW7UeQBgRbpW7ciqX3FiaLKuWm8WUkhRF87YfNUi1SQRXGAVmbKuX21XGc1q45AtHRF4uqnn",
  "key38": "5jmne5J8G86FcgDJLN5AGQRhtCE3PzzGheQNrT1jbRSvKR2jo7VYEyLbz5gGdgTuyGKvKJ7LGb9cFQc181aRoHAo",
  "key39": "4AHBg5jB9pHC2wKiHCugmMpbV4NfgKQMYqULYgTF49HkA3EWMMteKfkYWEZyKeCJLvuWDVVG8KoU5JNdMcci7p5C",
  "key40": "3hnxGqnTj6SqgophoX9yRxWtFmhFFdYjp3JMfcFvvN5B83nvR9Mt93iJhp3hhxBVqBvcm1rNketwGr2CjniqoMz"
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
