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
    "GdbNQBZP9bGSGKja9Aa4cdS6gYb7ZcB9WPT4qjF66STW9gdkEHG32iutRAn2bxo1gbB5GJ8NrqpdPNTwSjjqHLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32JWcLqGPoJvSzT6oWSunAS5KYWiWiJCRzJ9CoJhz2Ce6szAfznLLrTJnm7dKqcyFCvFiupjbpbNs54afutn5MQY",
  "key1": "2RgWkRpfidUxCLZQKzNDjuVY2cKNfNswU1SXUmKEkCWfYxhvERWVF4WmemcfHeHx6PhgLeUZumwJjPBjD8MYxBR1",
  "key2": "NtPvdAMX75rtgWuGzJzqave4Yd9EQhj9tLQtcNhtmGEyKGZChqkR9rnH1wMrNW4V7Czu5jLfmNLz7mbK5HCvbyV",
  "key3": "4XtJj46yFtpqsRVaoygEn5KyDrdk32DPGK2XNt6qzZExyLoCMpNMBopWEn9FdypbKVYCDcL2LBPFhJmFsKB7bFPz",
  "key4": "JgqtsuvCDsjV32s2uw8rkDDSnqYD9GNwWhvVY8a7ycanUM1g1VntwGG9RchvYALGvfCxVbhKHpL9sLqyBPMK3Go",
  "key5": "2NeDjAJibmwDM4AJJ8aFVxuNypnbNZ9ufVvY1TwBf58KDBY43f99XNM2DpdK93uLSayne84nDt64gKRFPaRBq6Ad",
  "key6": "Qmam7FifxGBYYyn18LVfpujjQawpHdVdZYJAoQJiW3WkCUrUvF5VQG4bc7xSb8iCeEwEFDacxgU1podCXKqT52R",
  "key7": "2uxxGpYtUoPR5wpsteqa7bX1tXhzfy7G6KW3cxJtMteLdjyakJubLffJoaTFAZJ4uqntPN4pVLG5zeEBBU7M3arG",
  "key8": "29iR8gTZsF7eVfdueiJvLGB7mc62QiyGHZuwqGRjCm18ZDb2YtMghSRiQ3GoTdn73H39VmxCn27jiYgLUGbKTM2T",
  "key9": "2yuJ3bx6UncE4BptjjbSU1JwWwYH47GooEbp8A3EnHgYReiFmsZcVGHrT5sTE1WsqnNTEGEh4Hg7tNLbhSvk8qmN",
  "key10": "VwMaZwHWonCdx5xbtY4UDbqLbE9y3ehRoguJWzrFiCEQFSRo3APhFYBvNEUXsrphop8G26wapDefFHdVkRW3CPU",
  "key11": "53p6GYq2eHpAuTnCV35bXhhbQT2QDtsDC217udmNgzzX7K5pftL6gWbyZd6npb4j6SWybHtVfjdLfmJttshHcfso",
  "key12": "2pzjcJWpYZN3qv57TvGvajhV4936Faef8C7N27JVNZpQ7CZRmbVn5kNJqrbTXBfjerPY9dHQRQ7UaNGni9A8TWb6",
  "key13": "54upjAVdZjorF3EhNGVx42CWF2M62ziiUeEH2BHSEX4HWfByNKm8davuMBAhGY7JJhdtBQbJrvXqf4D5hWnvKEoi",
  "key14": "5gbibrRe5jcJfu4obEykxxSKvhgPg99fAHLGPhxYo8ZiB6ZcK8EdtoobSwDdVcFk6Nhj2neMz6biZc9vbgGzAgqn",
  "key15": "4pvzAqB6ijgZZAqsi91w1NbLdoaFY9qkRVNMqxTNtYZbQ6KysptJnvFGRhJ4NUPEj8DbJNhpWrpup1d1gfNDDPwM",
  "key16": "22SPREBZDzYUjrupNQjeJWgwdXku7d6f7aBZwN3uGrd7XgTbvih71AJn5w5FDXyCETFsZuqfjqgms2RaPjkHzjAV",
  "key17": "5tXirRSYuuoVEhC6JnBu6S3tSzQrXRatvLmrkKcp4fjc2CxDrqsQkyCdS6G7ZQreayPQCqakRq1Ddk1mBgv7jGwN",
  "key18": "3iUbp7iR5XimfS2abff4hXWrCE5brpq3JLjT4Fto8LgQbbicfLD2gWH8Zf6SEJyie8tG2uP2ZVXjCeyEMwygA7a8",
  "key19": "4TsarDUAT5RzHQZjYxY7rD4EqjFP6VDqLF2g4PH8qWU8WoPgPbhttZcZNAQ8k2UDm7wUADYZ2Z1XesJWsns36k2x",
  "key20": "5XuTPxnVvZD7XLnEfGZzeryjWbWNUdBvDv2HbHiU5meYuuSfFq2Cy6ZarMCuqFhEf96k16sHPbNRJq2Aq2nsHRPr",
  "key21": "5SeBporNvzK2xsfrm6djTiLj63qmMA3kEGmy71tD1bEKwG56zhLLRdo6M9y9i1rwEUsmyH1uCcw6KrobNyFckdkt",
  "key22": "8HaX7tLxnJoEuDCzvvCBNKDvoskwvgunfK7gBkMSqNCTYKxytH12f3ZpbtYy2CJrHSya7gnoXPkaoCmrGTxMoEp",
  "key23": "3AEJfDZtzaPxY4tcJanx5wUimc4fMRawiadxuGx7DfFVZtTYVryujoAGS5oszUMQYZVUTsWxGYNcCMmsnk4CPYiA",
  "key24": "2sDgnuWZeqALLaY7Ck4miGTydJg5hcgB9Svsnc6FrKo4sPpmJgmtGjnBzXW4hqYiihE2BMVWAUjC1Y73jdFGJSdz",
  "key25": "5cTKaU96XjCQWJDvUBn9vFpmyPDnSf4HyLK2TbPrMP161otrFLocE1F9VDMYVo2o3fnQBEdr8EV8bnep3cE4sD9P",
  "key26": "5nuUxS5ms1j7He5EAaoBvUno9dcXFmXT5bereLzXERwn6BWy86oeVANi6CUDEjygqZuTPg4TmuGJRMZNabazU9on",
  "key27": "2k3nr2rKvDRvaPuMY2pv2yNg2Dd58i7jZT7JjnB5KQdYnPoRFzddaTRsJXAdFQYDXHNPHowRE2GSsSABnXyjdDCB",
  "key28": "3HVELsdH4CMMZRaf1u249yaXhSnoBskxf23uru896Tm6cYxNKiukJYBWKYYxX9nwYXQLvDyoMD4UgD5tWncGYPae",
  "key29": "3oNPepajuYcefsL8gYWkzqq86Khqowko9d1cv1j3kg8BtkBBgZu4CKS89VUuTzCoaxUmUKFuUYsj6wLEaCzFcjo3",
  "key30": "45jkpaoZKJvZgmGPyyiMQNpmQhS1e2fgH1DjtJoZy5GpVY1pMKZQYmczMfw6eTJTLLYwsc6rP68ETrYvEtMPG3ZV",
  "key31": "3tjg8uVxKpCGpe3uftnpwNuTsaHRmJkTSHXapRvgJjC41RVMfuiFuR9YHJewN14jK67Edu9AEeoR1uDbNkegWbXg",
  "key32": "61EpJk73YTWAhafKnbyrdLHLHgDSuqwJipJn8yf6hW762rzTUuMSFkmMSgmdWdgAnre7PoxG9LTTzU7XtX98ezLu",
  "key33": "3CpRodGXx3EREBS2PWXHeg6vCyHxGbewpzZWPir7C65YgwQzNSXJHA9wEnvjEBcyxoJkN4e4vqD2DCBWVMJ2v5eC",
  "key34": "7EdPBSa8QVH352y2UvXYXTWepwkMqa92VVBHiH2kngobKD1YGdP8MPqxfQC9KbpyccgDczjGUxo3c7TYZpS5Z8w",
  "key35": "ZcQuUu381kx1F3qzx7JoMLtLWx1B2iWGNHczpXX6WrwVmPdrEeFipLHdguEcjJiRCxVQHYE3jQ6qsqB3jGPrir6",
  "key36": "2aVzd2kqEWihyjpULWLEfDhHr4JeUig5rKNKqhXM1vP9cUk57rYRL7RFnukQ3aNhtpAUN4MY562hEMB23cTRGjSd"
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
