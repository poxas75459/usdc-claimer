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
    "4vJwVWLyoA4yzFFX4k34k8e4do4m7gsiUbYmGMLnqjyLDaGDBXA8cLyaKBNc5JgzsrjQh6nDBRmXKENELd6CmZjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ENwP7FgbDrWiadaUQvTFZ2mJJ912BLydHx8HxjbSW5snZyF5tnPY2L8qhhqUgr17LwEKGDFEVPTcXT73DAg5rw",
  "key1": "3KCKag1AYTyWhTfznhr9bVEi6XR2ViPQgn9T88wADGmHshen82nigRCPwzHqgiFyHp78SHG3UAxhmLisJvf3DXeU",
  "key2": "4Sfp2t31BNHXWWwxXVUBqv8pYv5ByBocThJ7tbn4ArEFFbdeXEAcviShEVh7Hvw93md3iecu8AEE8L2UgQTss5t6",
  "key3": "3vuZwi9pkaZebvNdfu2dKjaZhaAXCVaqgcdRiczej6W3LKAi5QAyMSkweco9rS1h4PgHdQyY9kZ2iRLcwRXgbScZ",
  "key4": "2mCBzzzrRbdb2CNovcAHwQ2bdSAk2jShq9RSmVusdBGYNmMYvJ8sK73u9BWuAMRQ88aoGw7aoYZV2sJz5ptyR53v",
  "key5": "WWDzL7VPh4QLx9pgs3NpP7Wski9Ua7vkJoo37cf2fhaoj24GoEoscq8EfxpcRTgJJwnvLSEURNprSmYwFTryPmD",
  "key6": "2pqMx13HsZG6XRBMKgWw9z5qx4f2faGUxaAHhQKzLesXv8GLN8pwPP9kwTXsUtqdYZWVgmBXKHe2hdjGGkUbKD6L",
  "key7": "nU7s34twjg8K1TFGDGMVonL1nvKbi8o8kMXgFqs8GQvNifpzs6FMY1tY1aY9yWmYDZVC4HeXzocTKQeEqT28cbe",
  "key8": "2CG1LffdziHTjLEhRMBzHCZDbCaiwjeiBmWy6acHh78tuA8Pn5Wy7d6GsjbLeJg9Y3yBFxv3SNBiPhohhkd7gGJ4",
  "key9": "2W8oNogUEfEbsgzK8BUdWdigumTmEstiHL97jZ26QmfDdADK7ezpN8tqKXf2rKGnbB8KSEEaSC1gyMS4qCjqi4va",
  "key10": "5vBgdKHXZkcMUaao39L7LYHj9mjzasopRALn2Cn9uFnciLm4jNHFsodBK76X3ESwtQcpVr8EK8EstmzZZevkWRqN",
  "key11": "4FYiBn61dbH17eHGXgoivpdTLjXgDdV5dcNLoYemtT3dYJMbUV53AHNDxp7kMNXnWBSjA5mHBPZSnSKGBWCvnZAz",
  "key12": "3R65UxQ8WqvwAm5K6fa415oCVKExekCxMb2kNC8Bd2MuVs1ZF8BSL3vHG9bgxRwYc9BAXSRBE16rfawmHKxDfUAQ",
  "key13": "3nZChvMJsiYCsau1LFFXJf9WE4fw2G5L3GfL2Nixam6tuYrXdzXNmy2uBBswW26fSuoHmANQaMuSrTqSRjGwNPBv",
  "key14": "3vTBcYnSm3AyVwYxYq3fd1tm4NEH7p4mWx4Jc8F29eCWasLQQa3FTVwBqJ8V1cRNTdhSc5opnNsj1BMBMApGuPh8",
  "key15": "59j5XfeqiQKP2TGcEDyKqKZ6jBFRa2wmPXWwiGcgwFqEb6ghzyhmqTTpwnuWpyAXpmLmbnP1x5az3GxQKMpHGskP",
  "key16": "4unRgsF44pzBzb63dkw5qFMktWNjbjZchRmfGTJWtFZ8kqt2BBVGoLBt4TXq2hijkUVDuRNnVwFJrcHwnWMTUtK1",
  "key17": "48jWMakAdjkBYTBHRcmXJPwLCpxQjNGyyYfRB93KgyvTY1NgskJcAYwaDRrdxxWxDVW1H6urt5qT7B9eA9wdCoaG",
  "key18": "33JrzEK6zyjXm7SRDQpCd5v87KHP8ZF6KKN9Tu51HdjzqkzkxFNTTZCs5euiuUwjYoCjAD5UGVroi6Cxbrz4wVde",
  "key19": "36LsNiwhN41HCXmVpdy2DX9JmsWyUEEP3EVmPffBSexCVodf3TT7pcTkG1SmbSE2c5ws1W6KXTBLnHtfC2uhMYPQ",
  "key20": "5tzHWREszpXrgVniQwac7hLrxhjh4WTCZX7axW3DLnPN3YV7mLuKxFThjvauHmYEZMr8wBdMF8yFhwAggbqgKCRm",
  "key21": "4H3Hwm3Fz6Lqqk94HVPRWxLyocRF8KYR4fTkgdf1BFGpKzT2WqBLad2B8zLwWmf6e33HkxKPcmTm68U73JiiusCJ",
  "key22": "2JfrUtJwekCSPJmJhfxnRajCJh8XLsX1B5x9YCNSpo51h2FNNqa5BjKNzVt2VaoBPg12X9X2mzp4duLMCFkQpqR3",
  "key23": "35Uqr67MjRshKp85uXE8YYxAzRBMB2385oDTa1aRwSAVBKiZzTEbfStsikbTa66KNNVz3ie55LWmLQr9tYXpWkXH",
  "key24": "3nsU22wGq25vtDTW21mxWCHfspTgVc2n4kqHqAXwkKnQp84N9v83tpw2pwLV6bnv6vhroRE72JPq7He3AFcW3anS",
  "key25": "49LCeFSMATS1vTtonRrCuw5gPxauHCA5DHMQv8FYoJqpbJLoWgnXD1CFhuaqwdtzxPhNpRXfSc56bsEKcDaDffUY",
  "key26": "MUQFf9skgwx6qWgzaX8x3MZNCvXFjw8hmjUrNntLuQXHcqpbxxNRiHwWkGn2smRetP8L8AX2gxFh1LpvwYraWd5",
  "key27": "3KgJi6BBbikzqwp8BYVYW9kNbKda5qbas1EBBBDAehwGBef46PSW8R3KYnUWY6BNLSm7EPgbqZo9oLFizMwB4qw",
  "key28": "28BDtxNqw7PHMsr6etLwfjThvUAH1rGtT7KycFqdiJDT59JrcoZdcSLRYiWpibjfo7WnsREVoUiyLefBBxD5B9xN",
  "key29": "5foPvMrkiukKuepUCGx8yH1jC1ASMm8cDqEfK3oLYXwFF2Qq1FxfCv2jn2A5xXDa5W8YqEYwnr9hjywMvajYoWGb",
  "key30": "5cKshda2J7ZUCC1UBD1ShBnsfg9DtJq8UVK6H7YEeQMT8bryykH4SXfjmPmnHMHGoWy66YoeuRCm1mgCDR2stDwj",
  "key31": "2a8gDRhAmLMPLAEqUfsVdHahBoHkS5TQCsSwCanVAybEj2HnxnbGpMhmDiBMttVDNrooyRds1R9wTR52v9RuXdYv",
  "key32": "58S8SxJJMKemTHmoTmgLYetsJtX4PdXDgx9NS3uAFxsQPUQZsPLZ38ckyuPtsEDhyE6hZzFEn5EWVk2aJhUYBxLP",
  "key33": "WG89MxCHeY5KHGZfe2ruk4B6JMxewM8JNgJiijR95yHnXtYE1U5VCjkMRuFgLXFgLT92WP8ybFMzXa9M1RWpAuv",
  "key34": "2bq6TQgnXwcxHJ8hJRLVyoBSzohcJCadzTHKkgN7QZuFbZuxWtY2z75ik9cDzeLAN1igyNQacRPXaiggLoEh2QLu",
  "key35": "2wePwszu3px8nPZyT5whsZ9FrhGigq7mugHf5bsJpAkd5ZqhbkPTLyTvuHNpQeYtDiCxuQMuXqgBhr4Zekg45XDf",
  "key36": "3mu6ykmBrECg8ZhbDtRXMPRQuLoYkbRRpjdaccNu531Tpdz9fGSWqLuT636XQcqHTKaXSdyBe37TEntn5sezPNdR",
  "key37": "2tgNviD64C2E5ntgGXPyLCYxeoWXqX1P9GXfv651EQsncvdZ1HYmjj1X6Zf5bYowZySNAX2YHQPNHfSMfX77voBm",
  "key38": "66Z7BLi8HEHukAz9WfJMBPGVwwWtGKozxCrq1LS7vvN4bh5srTUUfV35dqqSX4dKwd9VCVLHFSSHDHbKNoxsFsiT",
  "key39": "44uRMT33CyKDpzivChbSfAXke2ypv3NaBMKDBqFuui9f7nuo8z2uUxnkS3nn2sfckmmqNPMewwLJRZ8BcNPgGEze",
  "key40": "57TTSDdUTbw5X6x2pBomgaghGYPHDBX4P6BhX5DsRPwj7Bkx5iaZ21pPhRKT5XWhGuLZCkKubfMc37QAD277C9dM",
  "key41": "AWYCbGPmyfziFqsypyuonZxa6BSxwk4MH6davPBTSaCho6fbo4HFbMoxdKWas9zJHKcUTayJEyqWBioTF7FCE4C",
  "key42": "4w8XUg6Zou61CNQ3TVhginvTFmPkYT22XPhQQdi8kmDC98nfBM2AX1L3N68rXPUsXFpGchkyWgYpjw2YqRrufnL9",
  "key43": "58VZvw1xuJm5JkkTSmS2EQSFj9MciKpmWaTTZPqbmLRAFHzWK83HCAGtCkHgWWNfH6npR9LSeKCik5ZZx2zJeFmh",
  "key44": "57qcevJ6c97P4gQS4hCVte8iMxDtqGiK7oQPtQDg2LUE8TwHG25Esmfbb3TqCa7pARmTZhF3mv9QmsywgZzv6mFz",
  "key45": "48J9xDZMUf1TmFiuQYsBkmZDhdCuhNws15EnzsaDbjkVpNem78Adhd1hc7uubhhc8HkfkWrhBanWfvMjniMdUTec"
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
