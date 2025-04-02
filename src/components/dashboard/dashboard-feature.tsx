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
    "5BUKPM2ZB16qCEpdjBpNfMUMaCMqFeeSp6tDE6AaomRi1h57CbRQTkWpQ9p9PDoJrNzfXW6CRUUjfiQXi9dhHUqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w4ntLyRgrD6YnaUXvbQGVzxWXBBJDDShkEnLGor1TvMcL67i5X8wyqb9qqMTZBnrEyRWt2Hce9mnbuSwhamvibw",
  "key1": "3Hn72gThRzqmqxtqU5LRvq9LTY92oLAbFaGtm9VpsipNwRdYiECSKnwsusSQ553qR8S4PpWJgNqbrfvhr7E19t5p",
  "key2": "2j5qQXkXZ3GDHemCuxoEZVcus4myNF6u9WbTTj7HMSanoFf6E94a8s4q3WTonQJ27ieZUqx1Q9pf1m7xRm8obAVy",
  "key3": "t6eBfvsfcivxSAQoG9JWdDgEQ1ZTYXENwmNacD9jXE4a7aRRtrG4s3FWrXJVPRxrNF3qbpDutcSMdH9ywH6fzA5",
  "key4": "2itQtdbKohcqURna2QeLeVZJKFQypYM6KL7AvWFuyjQYrBZRMMexmafgUxw2dZAHqDWV9KRQHFLr6HgNNvuxQ1pT",
  "key5": "3MHv72g26FQrdYatrhwunQqFAE6AadJrtEqggXJbxBuMyLpYdBehYhVrLUTCEEEs9ABHBTsrtmf4dUB7sR6ChcHP",
  "key6": "41ZXsAYzfsJ1Kr7yT7BX1eUypvZPLLCtdnJ1uTv6uJA1g2Bow6KAsCeCPq9R9MR64XE3RzKwHtWvbh4mGkU8G1La",
  "key7": "5JoQosYLMTVv7sTKRSrG8KQ8wEXxeKxaY7RSdRcBMC1D7P6ucE36rqouQcsLREQkFxBeursAFJsGQZBHhAwfBTg7",
  "key8": "vZyNEYeRRswVSdvTXUaZFEHnrUmSyGGd7jUuaJoj7Uf83rTHaVKv2EvWpHLTJ6ZPbQK5TTVFSimgHAbUK3dFK3W",
  "key9": "UKGRCBk9kXjHe2dzZUZ4TcocgWok4bfwvvMbFtfFfXV9Q8ABas4KRhAXdzCMeWjcwx595TfWRStmfHTQbhDcyqv",
  "key10": "V99fFDqD7xUsQMcs3CT7ThLe4p4JPLKPgeiYZp1SScQnPzNe9zeF3c2cBkPscbfvihsi7hXnwJM9n24Bo7YTafz",
  "key11": "2Zj8LH7j4oTpRCjs2LKUADjXZ63U7VZN3VpuSee6TbsUbYhFBhwPjRMjrGH3bdDa1Trw31L12SsDpCYPShcjdpq6",
  "key12": "3JFuCRQziUHZT3ptRuurgbxFJjKNCKVheYQdkQmjGmT9i6CuC68AzFEQwoszxfxEgiG9MrB3b2hrmEcuFGCKrnDG",
  "key13": "2ncot5dNBbbGvNJdGBERm3qMBTkakfPcrpeXJsqSV2B2dL6sxpe1m9sssQJrZVTVmxLK4pji8NqS3NHjbJe3u7dT",
  "key14": "2pBKrmDbffBMZZPgQMTcDbTt9BoFiQDwfddmHdMh8jTfdkZhUirbCYcJ5qXkdfTk3sKMXLmz8GXVi62NCkqopbJg",
  "key15": "5jP2MCLf8py61Hhe6hdQaKTE35nNJZyMqzdW5FywT3BsqrTBunQczS3KP9B8Ektv2p5PLTvyEzHP3tH9i8P6Mm3r",
  "key16": "4hF582USUMn5x2Fq8iDrmbCJKzc5aCGBSRiwNbspjHX8NgYtNtbXKJvXxsuPdH8fpk3Gb5fkKC4FS2TPT5JuTyse",
  "key17": "4jHh9AVVS63hXbC5xxFYfyYCjBTCrYcian8BJV53ZSKnVzvaL6Sj5nGCT8ShSrC4pJKJ12pVkFakakVCG6zxfWs8",
  "key18": "2v9jKzFTXrGPrBaSHQ113rZYcPceAzbtWwYbBZEX9gjUfDQLKJcV7Q3z43Wqni4k6QHPV9x5HgiQeWGqtfcZkJRD",
  "key19": "2VhNssbjBiTEdeFU6LrgDQTRu9LixNG5TsgW6BRiCTNgURqnHRTEYh9KfyMH6poQN7uLYrLKixPssU1zgLVZbRCt",
  "key20": "PFSfr8MMhv1PidDy2U6P8jDJbZrvXS3X2HxQgnWYVSinZ43AQky3KS8uxxUescuei255e5f7Cw6g6sPLK77nR5V",
  "key21": "hP8j5j2cAAgVmApezCrsFjKcoV3pVissMMJLgg9jeRxKMyYzmPHSbvefti5hPZbsB7btu3EX6Nqe8fxpc9aajZw",
  "key22": "5rrVLGfGwyoyZVyBwz8TbZdKUZVUQjmXeNRVxxQnXtrekpxxYJutdGXfhmr45abKVsa986io5RNJJfqHSVfjuqi4",
  "key23": "368tVThem9hqQgSvhtGNXumjDzFBzQh7nuovoE9ocFNNK2aG3fGJZdgcGvbQ2LiBBs43aPxiKxWf6GZ5ZuoYfUZa",
  "key24": "4hdxn6gZXazrJdtzkB2ShrM1XRg5uj3V7KBdzAs2suvJ8AQAGV85wqCT8WVPHvYN31XWLFmcrcabn6abJrdVSdH",
  "key25": "BtiCeLbqecSLVtGtY4g9ZAfYTb4Mp5PJmW9anWHM9uUqBokJW2juhU9iNeK3Q1MVHw3pFkEGJdsNGUUC5d63xB5",
  "key26": "3QgcaB66BQGdSs9dhuUrHcc5Xf8QfGjXDH4RnNYWVXRztNo4Ss9mgxU4oHgm73hfRQJmXjBU8Wcn4t7qsapvz94V",
  "key27": "3yv5ui1B3vBexGRE6U7C3MZnKXwN7hq1zguV1Gtpv9RAWc7NxtZ3KwW9jVKwZ4Q4Mni3vXs5VrtgEHNhJP9Ngze2",
  "key28": "YRR9N921jLD86uHEUc7BoyePxbsJTz95ELcVdPTrjFefUseUv8d1sVCsuD4e8qshAiB1dvfrpea7CKqgoKDwKig",
  "key29": "4KvRZVb88GjX2M8jm8aXx7tmQ9J1bCcPNeurS2MuQdz73fKAJS3vM8ZZsGdUKWE3XtibGQtir1mfgb2Pm3QRw2nZ",
  "key30": "5TrerSt55wCf8epmwE8d7MLcEuAS9GEeJpW3qydNsTEHhFaatyUzPqXpRAmyALPDCTMW8HBjiUdBQr9vpyUfwn7a",
  "key31": "54JS7C8A9xALtQkWKMnczHcMcqga8Jny8guX4RHDoYvKezN2gKgd2YNsgtVkiAT2kbPh5sDJukjom5c6W541h7qj",
  "key32": "4HAz55xPn1EVGxQuinEDd9dyPFUvCKktMMEcoYwqjfrr6VQuypd72xsgjeRMwmBbgJ8QGuRhnVYMAxgKuza8goxK",
  "key33": "vC16bqoMHipMQZ9nqNVrpkpwYU2W9HnNLCNeqDZP4jgbzvLdfrk6fQvS6ZPnU8A9vThJrktBx2ZNxjton5c35Gb",
  "key34": "21qmgpoKbraGnkv52XDfh4uoYDzQsxRk27QSCWfbk9TupFtV3CQ2JqZs1cTip8NAYAsxAnpueCEZS6m4DFri4m7Q",
  "key35": "4v6pQj4amJX9bvRoHXB2JobSrVvhHzb57bcTTwogvGxDcrrNMwm3xw3f2gCrBCTR58L8qgDhDMmuY3JwMedaEFLW",
  "key36": "e4EeXXvVhFU5CarNpAcwUga1pUtc9gxuGaR51ZYtvSbXqtLtegGLgxjT58kj72oTnTx8UcSLgFC1zY3banMmRVt",
  "key37": "3eos78EuJypwLWY2dAEzsCFWMA4nSXUrBBpFeNZCc91anwL3yJ97XFCiemkBfeDCrWXN9KKXmb1RpKc1eCNk8E23",
  "key38": "4h71QzXaxpmYh2TxWB2ZxW73eQsjo33Rj9WvaNQN1XBZ9jmF8hLxkgPGCWJfeW4n7EcsWQfByZEtDsv7GN6iHN6B",
  "key39": "XCuAJWx5CoisBAaPExQA8953b4AZkQrD7LMRCMDUruZ7ddE2jCjTjntZ8ZmnZzmL4WtCDCgpkHPGgg2LEFpYkgD",
  "key40": "FBp8nRzT4XGUU2tYL2bdMeth5AYcKGixLeD2DGUwPVsBG6TiAQmNGvsiEHv45SxCTdV7ndrAxwMDLiHADZt82j8",
  "key41": "Dg4hVJ1qaA6vWDCkyaE5rrsF7k45bBkvG8qEstV3yfHQJ7u8aQtxPYphqQQfEawLCkHih6MmzcFyLPA8WE2Mtje",
  "key42": "22tnxvFnXxJPLELzHtx61DXu6Xs3RPZgYTfC7JgqcZktXGc27YD1H4TXmZ2KBaLa64Q5y62ds7So7XUqrzMfj2Dc",
  "key43": "3KjXFoSEyLifyGavFwfatfC6tLanx3PkTegesxsZ4AoTFZUtuxc8qSxVmMHKfMmeXMbLuZVh7W3MBd15e5azvegd",
  "key44": "iLsoMmDMWb8AmmayrQu75w4s5sCUo8MNtcLrSfoXcLwgR3W1K7UCYmwmL22EH1iDSGAvyhii9zvvwHBwVqixEK9",
  "key45": "ySods3q12GZE9BShjKGhcWp13NhTDzdUWbfF45dXAqiWQZPh35QhKnbtxYXXfXTCKrr79iJyBjjQWTsT6URX5Gg",
  "key46": "5AX6bWgvzdzDxPkhCGpQTfWvAtWuijXdzg9KBfgEBQH6pj38g9BQ6YeKiqsR1Y8Rup3UarPjUrymvjtnbS3DF7e8",
  "key47": "5jzhd1rHQYXFZjYREiBDYGehrPyTdE6QSs8vvXxMm4j5Nc9P4qtapM1UU7GqzU4LAfN5vak3TQE4ji1AjgaBh7HU",
  "key48": "5YnvspPTp5QXEvbjHVG1K9SvV8dQ7pi6o5x3Z4bKiZMudfKBL7BKjqcPwRku8eK7KF2v3W9SSVEhtpDZfrK3hn5q"
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
