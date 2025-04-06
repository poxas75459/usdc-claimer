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
    "pGMCtp8nu4wSZmu5FDRnLqfuydT3fhqvh1ZdfMPMzM1BSycchg1WrAhThqkKqFoNMjUoTj5CfhG5yQtNPgXyf1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6257fYQZBXF6YFQuedzdwso8qGtHdaBQFU7oSBHsuH5TnQpHuNvPAeZy3exDmx3ukPVMHkDBdRTaqpEAGL4CmNFT",
  "key1": "2XX3mJQVwu3RaY2JPunJGvHWUTJUEu6X1YohKGNCew647RTHK22L2myGAUHGmV5ZZmSVTRuiKpAPTWJSATSm4oeh",
  "key2": "3YUigm7HHpx8RSFDfNy4wdHVaP61fPppqmWQ6KydLLSuBBNLEps7r9rBiYsAzam4iGZnpiXtVQLFLaUu2K5CYbEn",
  "key3": "3Tj885uQbA7fScHmp7cP4St7CEsV1uG88rQTKVYJ6eK7ax3AZNfNQhFo2xud7KaLdGijwszNk9vpFPkyjvQtVACs",
  "key4": "5jNQfa21byHSLHZg9TQWMbaD1Jt3L7RSnv2jwQXicPMUFS2zRXYYQTqabBRBsUWbUBRZM5EZfyZWBYH84AwGEg2c",
  "key5": "4sL1UcDBbufyiiDKHN2an8QKLqH2ReSXPoXTn4sWVs2E797nkYNgAdA45AnpsiZ2JUgHwGoFjg52H2ryfcWB1LC7",
  "key6": "4zyPVt1tuJvbhk3HUk4hVuYX3vLrMziztKsxLbPAPJYHSAVcihjC7L5CccMBh5RJB67BarnX1HFgSptLhqbAtULr",
  "key7": "5pPv7v4v77yyc2oP6ehFBG14Ahzvp4FieBMbr9i2sEtm5ndfYq3MCuNUfVLVH4zSfJkrGhXWuXHM2SK217vm5WCz",
  "key8": "5o4RPAhGAdEC81yDo2CK5AkKtbRjFRikFoFWDbTrnByqALPcZNFPpUnzjMiMoonixNey4GdFUJWEDdTtvPURkxUt",
  "key9": "3cMjZ8aDqEtCM2rso4rtQuGrPbN7XiD9yePj4aJRyR7VyFbzXstAEFhgzSoK3CHjJb2CWKistmmW9o6fNmkcj2QU",
  "key10": "Peocjz6EmjLL4q3NNXYNwP1SnqMD8QDAsSVuJKQ2Gbxq2pnvRh9ZRP44PTD68rmFRaJYX3wif8vRg3YrvC3RZpX",
  "key11": "31FH1135KHrV4YTwUoc4m5NNUuT9rHTDPrhCpaKef3aeEgNhTayVV1MKcnstP8AkYCPJaefqbvEgaSA6JpooAX1Q",
  "key12": "5X62aJbTUgXMhmpCEsFSZKLUZ9iqAv5pHijSqQ8sSfGX4WZFE8VzoLBHhP2sCCg69ZAFykABZgKgveSFpNMx9GMY",
  "key13": "dEt736nLNufmWFA6z6Q6WM3VpNtpRLmqeuH6N1zGpDoNhwnrJKGTSnRVFFQ1dRhz7aVxMDxNzSXsGj2Sp2sgJUc",
  "key14": "269PBzM6sKBtHfajazFoDDYASPTN4BPNJCGKYgMLp2rB1BPcwfAbRmvoiCzuQ5yVudLzXsmVy1tAPeweBU5UvFdx",
  "key15": "5n78VhhQSwtxTsJTuX357KQmv8zmk7SwrSzdn25yNW2tR6CNZrNzvpTphUzbEfxJqweWxhaXphf1Yhqa16UUVxDW",
  "key16": "3pyFRg94VJ7eeuXV1ps2MQuKrT8bHBRVyAU8kG6Mar4siEH19qVzNjH47aoDfGLueVa8ABxsCeCpykhDEwNFnVwP",
  "key17": "26gwSJUzdrYtYZZ2H5mLP39b93ahCnsaPDeM3vRZo5e8er3w8b6Q9n2ZsoCQhByyVtmHZvch927kuTqZ71cS91K2",
  "key18": "tQGchpZQbQRgrXW2iPDSst76Ff6BNZp1vzvK35LyVpxS3oy9kahHyDuP8tVfJKb8JdyrUCFsfL7MQJ9fqNDdVKS",
  "key19": "2kn4UZJNtS7Wtvy9pMZdmqwaPgrp4u92iiuL2CatxPDtZxHLMtcJ2PxMQipWnJ73b8mf9JyywFVPVvB7xfjxCp4a",
  "key20": "486itCyceCbYwn9o4SVWrmRxjhqN2AQFq8HmnmEfgLFYiZthqfSHUr5pNJC15SszPsh4SmWTvdVMp8Pm42VeqRVq",
  "key21": "29emfpe9SpChncVDDtNpLCYK55Tqsu2rCrfrtC7D5fVKJEeik375NZo3idQtuRwqpohXonFZnp4sGKXPyDPpAEy1",
  "key22": "2NL2m3nY1wFgaHk5UFa982UZrkeeHe1noPhypLsaDygeGeE214d9QjTKHY2nNMBuw4EPSxKGZ9YqxbwhPpTMwSTG",
  "key23": "44GE8SQvvyGjoZxKrav8gp82YG8x46qBfc9zPpfBzxuV2Wnwc7BVd7HQeX8dhWY2BHuiD2m5rq3K79UHvAKpknGC",
  "key24": "2YSgA7dDq465kT4opx3swkot5fcJA5JDCFhQNYrEVy1cLffM243UovxQyXVVyy9FLD3mFuqkB6hWnKg4FNQvhXi6",
  "key25": "3xEAwpvAvb3PpEE973myYmciFr2Jw95P8qKCiPGyLq6zfc8Hieg7EaG96e7Gz711c3h7sU3dWSKSvJ14ffmiHxsa",
  "key26": "21Drgd5nww6eMZpqKNUPHxc5mkG4oiGnWCEWDvvFxT76qoqxpSQd3wypAcPuWdEgcpsshbBf4Ut1gM1Fct18RPTc",
  "key27": "4gWGBQXywiSwjTqnyFM6J5Z7ziRakfGzhGpTk2D139HZjvLVB83Ye27hYf6CTBuPFoXvCFu1iyAVTMSMUqQujGJa",
  "key28": "3Z5wz2QEG3BgwKugYjDigJwN4ibzP1P2ZYqgTQYe6rwaUiA9Mzfx4kBVU2PUShWuyB2S4hdeNUbjwVjHHRQfUiDw",
  "key29": "EGJ8cGQHrxH8QSHNKK5pbaCFAoxGnFaJzLEt9ZqXAgnUyVJAQvrYTw98v2ozB9h3or4ZQCvZuYU7RcyHrVJq7e8",
  "key30": "3yVkNTjz7VPhsRgoEZbLGwyriAHz1tuJVwXMUYDG3xYtTpFp7xstNvn91tYAUmMRC9grNnt71S5gkFhPcUM4rFay",
  "key31": "34Q8GUgWSKy9tg9JcMjGXYVzMaJfLjUYRjAsYASD8vaxpBRG2ZEQCf6vWD3gCwJ89Jpa6qqihoxBbGSLBUm7pbJR",
  "key32": "2U5VEpassJF37WX3ruRY8NyTuyjyUvmpdNihnxDsmQYtf3FqLYD5oTdKZevTv5FNJH5iYCqtJy2hvvANPFao6j6i",
  "key33": "24cQhnQ8J69he8vqcV1ru6qJfjzUihb1NUrHFiUrUZKNDwwM1Uc3Zgiz9A1adkb1uHB6uWw5SRmQxFDnoeM5nosy",
  "key34": "3HT33bpDvUkZ7scfKNw5eiNvhctkoKctvnBBbbyp33Nv1hVPxurkr7GyDnEAEfV3qjkKufYYsNrCAFVBEWUodhTS",
  "key35": "X1eo6yzryRPJAxpYe2mXEA1yt5ZPU7PM6uYaaTb3kQVQuwdK6AknAqwtV5FRJyv16BKXtGyceAqYJZLLyn1GCfE",
  "key36": "21r9jGcDPrRt7v1x12VdW4Sv59RMwRWQWjTHpP1TsijNq31hH91g8WJHRZt84JQKk6Kt5AZwhcbRhLsQYLBG6ek1",
  "key37": "zJvXs6Sy9VwJeEJQZQdGXvDz68iBAjTzEmJ1xdQPRh4AHLwrFMW65nL4mFc7uxiKVi91iYSq36EB3hsTiY6UnX7",
  "key38": "4UPstpXNRmMyieyoAqJrKfTwLAtv2yZHWMsK4Q3WC6a1qhZbQMvZTSE9UyFqkkExdi3r3yawDq8TNaeXtKEic6jp",
  "key39": "5G8UVsswJDmkifzNMDC2m9XT3DyEtGqBLdeEgpMpFxqARRpMyP3aqkkdCMyexvwSHV6TuJFaCA9jyo5ALcmFGb1",
  "key40": "bvtgHurE3CBizJtmuv2CLgR3cAh7S6va9g5b9WyTdVLdARNcMQgVuNPG8cLmYGFbfzzV7YS7gSUYf15vtEy6V6G",
  "key41": "4qQD1Wkbecv7nUDk73L48cTDtSZedRL2H4BhJocnQKh61fy8fZZoNdwFDVRbRKzvXYTnYHTw51AMWnPGNFDkoU7Y",
  "key42": "2cZZ9uKsY5jfxD8P1ufdZ7W2AMaJuJaCA4ScM3npERGbpWLeXNTCtkWnXZpCcgoN94qT4gdCYxCL3yVxs6ETQeSu",
  "key43": "4s7gFqXPCyqmotaqq1TYtzPrMga9gCH3ZyQoVCssxSk7mQfWYd13RJ8PtQLni4FE7YjtbSeJgtdGSs5ved6vNsVw",
  "key44": "5QWMcXq83U8ZbathBm3yCFLK7ZNSAB1NV4N54yLmN6wMRsHwKkZ86HGV2RCLPgqNUjsDqK1TA9cFajhYv2YqSq7b",
  "key45": "5fEnNZNndbZ2TQhKFwxAA28paDZPvTd6Su6d2EJaz65be1uajSpd548GiGsCZeSRKGmGaWwsCw261hypH2EQkB2L"
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
