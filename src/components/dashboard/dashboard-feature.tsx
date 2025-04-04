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
    "2hQmgaxEhM4wu1MxLSAZrFSreo4ST24rFwA4ymn11V8hhA7B7y5oGsMNFRj5vSNRSdwKobs5YasA9EFeqJAxzM2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45647kieGemp1L6xeDb2PkQQN4p3AJbDnw4kTK1ZZeH6br8aXo7X6RhVban3wThdjwMwCFHnvuUYTYEZcu5a6yUa",
  "key1": "61KkvQPLVt1jh7S9QAtzHgwkoEarXPFj3PmNP71QVMh6FGji2x5wJRyFTGka9YoSdbXvp2VQpwDr5T8QZX8NRvf9",
  "key2": "5qLUsdbLv8S1QmmRJvzuiunVZdgdToLezHo5fp9cP2e2mJUcizhSrmQ7xQNsnZLUxdmS81yzgQLDg6UDUqSDCPuJ",
  "key3": "bsXK6mD2k58ab5HjKsCqsb9AZNayePusNsN1JSWFaHcmJMPnCt4hPgw8jPXWv3ZCwdE8XbBVTKQVeBnGwq9otnU",
  "key4": "22aNNS41vSook7dZo7GH6rWfRDDuiETb3vU3TD5XznsVnyLHJPcdP2XNx81UpDRSW5FYaRXhQfa889FUHL2W2NGd",
  "key5": "5ejU53qc2QiFeCsiUG5LwCU1ni59ktGFna1shFRGCygjkaiENoXAzfRGb9xXHVZwmAt4FuwcippWFW4Ndza22P8s",
  "key6": "4oEfkPQ62tXm5Nmce6JtBYZBLUQQeJJ2B4M5yNwEpgk7MiEocZRRBXedvzyND7LWoAbv88fXcvZD5RdoXFz8VcT3",
  "key7": "2ghWF4weJbXMDvYcSz3grzp8B213uCw7eeXSwwmpxK5JpmmpMvzKPUzr4h6Gt3bsFpEo5swJnzr5d4fpPZSHnQLf",
  "key8": "FMVmijJgs298g36P13XWxrKvvky5PKz5zDyoHZFcsBCjjhK25skEGWtW63TfCuN4wvjeDm6DunarNPrhYRQ4qgr",
  "key9": "46jGKseqiq9G9CD73JM85hQrb1j9Gu7ThtW3HgquCiJkAB3JXbYSyMCktLBYT5ZWEqG9Edeo2rornaqk9JsmWW3R",
  "key10": "48TvSXXLM4LCC6JBnbDvUeo5FnWuZFvDQoN68bzu7eYZPkvXj4kZ1GtVYs2JS7qucArGK1s7GAC4bJUHU7Fm4Aez",
  "key11": "4tojTeRkkqURo5d3jBNPPJQTpqejW3MhWyNpLMQJPas7dfFsEhGwKmSnLacsEaaQKJyoQDEzskpsx3wDJ5J1h2Kz",
  "key12": "4XbmFwhk8PUuGNtbqY9Q6VL24LC13yjrNTjvXP42mSNP8MxE9KwVx9gmM16SLdYEvTbUfKqPeGS3xC5AXZDeGeQT",
  "key13": "2RNLtXzSKAKUxqabBF3U9AGWw8Pz3V3oRCHNGP84vFQioeFiGYvao3uFAQeLJZigrRgVdD5AQesM9UyAxC3no9tt",
  "key14": "2TctnYwxtMao2iYef19dDsgA18EcAaRDH9ZabpBzEacKYnWzDuStNLEwLRzwMoPnZjnd6YF85vQ8WrRKiBGN4cmz",
  "key15": "yW4tDfdghtaUMUXhY9Cm2DNpN2xXDN4gRioJbMcTYk5EmBub6Vqf8ubnRkh6myX3QogQvBgFvbCPaCftWL8Y3c2",
  "key16": "UkPsnLVke7A7roQZVeHGHgAzGsWaDgeddGrCi7NxogPU8rjALnRCSqz84Xwi7H77X4TxbQeKuMr9DznzJimuYog",
  "key17": "FqpvuUMDfbirD9BCJuKWrnVLvVpAoJaqJ37ZSQrK3GYXxnSDCFkB39wqS4HU4xpJEJgPXS2b98WHCQ3dGUhTCCv",
  "key18": "4mEYJEnk9PAKKwZKQMs8P6ZncrhfXpH9D9HFYKEBPhBdfWboNm19rTRxrrsWZKjVBBHZHjQSMh587WuJ9oPGAcq4",
  "key19": "4n8HP5g3CiENtadJeKqrM34Mfa83E35a1VLDFXygxG9Am9cLU1RZw9sqT5knSPhaSoCSwjzhYAe9ReYBa8weeMFJ",
  "key20": "3cfS8PCMaHNE1PymiNd1AEPVz5G2vUdDHAnGfN53jow6BFb9UWQE6nruhYNHYFi7vTobq8FsEAgFPqWRkKNGRFsj",
  "key21": "wd4Yxe2JBiN1suuTviAvqXqY5SVp5qb7rWSgCWwb52BYWRiVSUpFUh3xyuc2ZYF3dpR4NMqYngWW8UUS84k7ZWm",
  "key22": "3sFcYNkwXpEqq9ujoG4Y5UJ3GvszrDDAArj6mGXwbVaMh3Ve2NTZQtTp4Awn1rdkde2q9EpzsdMQk4cH55Wz4LVd",
  "key23": "22YPDuXgD3ELyS2raE8gPieBySubbbvUe1F4fFNSbPTEgKKoeYQDv3H3sEFTHjqCiXNVLCHSWkX2zthuBmHE9oas",
  "key24": "4zbyNMu5Vtc55XtBQhFB1BUvjGjGTUuy7CQfHyFsbdfmt3tv2tUDAKnts9pGdMn7n871GdYn3ZUS5jE1xm8kuMbt",
  "key25": "QrAa7Gh97tfGxFRuFBV1X5neUxZhxV6PDgJ4nuWtAXsDPdQL9WL3WR9zbdzjKYENpD9e164nUyUQLBTwtjquxr6",
  "key26": "gwDzceLrvuAwB2JaxAzKMsR3bYY1J3gWNWobwadckniuhVshafm3TFdd9HZzcBNgUxcUuYqwZJycWRSWqmKyPYK",
  "key27": "A38BiHV3rUXVj8xPqas4UJizkorXjN846DzjoEadzLKK4hctCu88omSJvJrVMbx3JqaDGw59SWoi6y1nWEyGLvi",
  "key28": "4yfNZLnPjdwnpbnxpeeZtXWL2gAcHGTTDSufpoY9uZ2RPHMWnrw8bKabBN4RnVgo87446bV6j3HmJHPNPay4jngD",
  "key29": "4uCq6sZJ5TGMMG59hDqb1xnhr6N3GbnKUzqDMtSsmQkSsbWJkb91by2Q216ak6dDhQEBeLQFua3urDUNqTeH2ZmY",
  "key30": "iG1MYvAZuvCkGdDcfigNEMgmB9BG26cekHsGtGkCZLSDpoBMwxJD41DBLS7aquxthMpwcHDFkL7P59BnV4AB7Ta",
  "key31": "AfEebjRSGjGhDkh9goXXvbqNCaZjVSxENkrVWb9t2eojjA2GBvvZG5pJ8cuiJF2uvTJTEAbjRZpMHwgBVtk517a",
  "key32": "2TEtfFspLpfHK2eEHfHzoDfmpAR8nrRLnQf3YTb2ozu1jWKG7w64c9hgZ8kBZ8QDXaEhKevEpsWDbP3YBEyQ2oUK",
  "key33": "3LbdwUp5fZK616QcxX7CfrdDtbB7wHJJRQFgNbm1hhKGwR2jYK2NM9CVEdpEyM8d7UUvWtWXzpH5CPdFX1NS6boz",
  "key34": "2tsL2hfnCqu9JQd9o42TiGdC7yJzuveJhXo9xod99nbsMzoWJ66W6tTvxZmW9bGqWNS6RLPEji9RYS6mmBuEcJww",
  "key35": "3yiEoThoB3R1DLbW4oTnt1ZonXL5CkoB4R18wmX6U1Pf9M4u9DX9ea3arP2tCfLXdPgQpF2oFWr5TWNgFkP2MoYY",
  "key36": "5Ax5cEXhmL9NKA1Y9m5ckhMVkob7XDb22tACPiUc3oXnhqw7C5zoSVKq7CutivK79cpeha8YFUaEeZLNQawnYpAD",
  "key37": "4NBcDUuDUBvZW4RGLj7ukUMAByhkRz4US6sJKQENGhg4ghCk1ps1RYca1CK3is9JKFpwPvkhLzXYutBAkA3qwzv6",
  "key38": "3yaP2XNaWXc8n5z7iC6r5Um8XAbG1CHirSCzEsHiWvWcAJ53q1PyVenLhbd64QTTQrYQxif1LDtM3cAdMwD9EhKR",
  "key39": "4AfoNQjVCmywRWgbgK4nQNbgywvB2GDJxsXg5pM8cRkrPgCFBKzZBk9fc8pRk6Nd56CAtBqDS6K6J6Vf9s8vt3km"
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
