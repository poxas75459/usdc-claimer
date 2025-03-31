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
    "5yHjNuC88E4rH47QowMzun4EQJrW5Aakohb7DAYgHHrFQeXYWqpPzkxfSHGRQFNV7icro55bKmXVRPcjdxu71kcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a3Q9u2vodwt1UfPsm66Us561vguSMvCpE2477mBm1qx1B8aLfoSQj1cd3xD1E2APF9RUWavmAaNS9ALLPc9NTYi",
  "key1": "ayPCvRCxqUopjVNgwezdhnRQTByV8bAC64kbrvMNic4iMAx9nZBM2iQszgR1uwyHbwzRi7gcw2uiUTGxHA2r7Uw",
  "key2": "2GfQ7gAxoKCCzXEWbxPZ3CvaUXuHBMPwagBHtb2ob2Kgptvks3TdiF2rSDc5pBUHi56MxZMB5KmLDuhH1CXsDahr",
  "key3": "55Hx6YVpwkjrJi9Auv37YjoKn2kwajqzJWi8va5GJKinvuuCfc2bEzCAjVk8JjULzGasMNe4JtHYfcqrHTnons5Z",
  "key4": "2RtxbXCHTFWkwxy1C3fk7GWyEm6ohpVsAJC99BnMfBty2giN4GrrapnnNxicjaEaVaW88S69QUhj6t2k6HYmd2rd",
  "key5": "455SeNz56eFqbBR67CXEK89aHN8CaCvGn6L6BVbiuPUQzMHBcE2YftqRq74XKTZNrYHcuLYLwGNnzyoxKFPmoXoF",
  "key6": "5By2EdvfsngtuRdRRVbRdGWt67ta8CeDWM5Kbxb3ocAUcTCRwPwi1cFtYpCDs1XHPF27XscQzHs26aPeq6j1me5a",
  "key7": "3z9cmMzGuWAFvTrUPxx3bNnoTJ6DKAQtNz6b7SLoCBmoQiy4AadpBMwzp6Cr6cK7H4zvji3NFGPtE32cqtPTGUgf",
  "key8": "48FCNSK49Vs1rfTXKcbU6qicTtujYYnis9Cjn2DMWiKAWCkpRxebc3J2486exz9NWAm7nXhbhDoDaAeBgWNVnxhu",
  "key9": "5okTsU69RkM8QVrRPk3NpMupad6SF7KYmPBwcioEMUp9f4MvnYS9MagU5S6dEP9giTVEu6K11Jo85r3EGoKvAQXi",
  "key10": "2D2bzzzJMJwVwDdUYPXNurGWdJnP7ncoZuotLC2drDSERe3NmWiKZwSixWq4VGrdgmGo815biNe1ikjRW4D2Fmge",
  "key11": "Q6aPHdSxXv4dtiLY9EpD3q2G9BFqLeicjqWGue3LH8nfdxWFeDrS46dWWKJFeytZ7uMFsWgMAET15LndF8arsrr",
  "key12": "2EoyMLG851uwboCK7u79PByR7pax9sAx2tsMFuiKj6HxP77WLds2XXDfkvmu3FzuiDzVuqrMz74CEhxYrqiExrn7",
  "key13": "2oNzCZuEDWpg3ayvffjJwbwngTjrkqJStZfpx87VjXp1uEwUFfXThdT9z5wVmyxiHF884k6ez32H5K4Urunz3xPY",
  "key14": "3GsAiqRipUKguEt76rPFZZ1Cuax6SnSzhcff65wyBqkukmaG7ypHtczgPngcZH5iBxQLZ1TRq3jNUoC4tnbLfed9",
  "key15": "51cVNFZhA9NMkFbdbK3ohC8EWzfSac6n2xCMdHyVkmiv4aVMSCAuTxFNiVvmQyfLYKg2GYHN7fgvn1nwxmt2ToMC",
  "key16": "45uLKsmSg4bp4xzWWMnZegrm7Z9hkQPKQHqj257Raw8M9wCxjTHXJUxRaqkZ4QJ4qcs7AqvwWFPpxwiunANcgeTH",
  "key17": "mGnxMpJHppBQG8vzGw8DHyrxxdeHMwqkvTobuFrgcuXswKk4kNL3BsbnWA5khTDaJnfZcgSBxyuTmDjDE3K716t",
  "key18": "CUzqEfPZ8ywZgthSPXMgRai1hd6SbXVS1cLMZD5d5ZA2bAvvFJHeXDk26PGhmZpijAJEKTiwQeJKG15AdccUw8i",
  "key19": "2AD83CagNETcmP3Dwh1K8NbQ7FXoNdmrLMjPBSdgRVgWnoXifjqRGqTK7YJHtKymcxYSPx4FTsht2CGxAwAHLLej",
  "key20": "462ahuPJAqZAoEETUSQCUrDrUmrT7qRPmo5u65n6HicLgQRLMxJTbjt1bpYEL23y1tCnjidS94BrFMrs3CAFE9ZE",
  "key21": "P9hfoNcJbv9jdrAAXXyXWqTtHKuihZZ2hMgQneSzi1bH5sehzCdQwN1hMxxJP47jJexP8GXBUjresW5UzJfZYGo",
  "key22": "5nGzXGdPgCYsryFiAmVXBiSpWs9FKxwK5sGpEgv64tkWzFcry6uPEmyTdtcpJzc3zktka3f2nNcYm9CZuJHL6bvM",
  "key23": "mL9SQq8GWrUXVyJFEikJkBP86drhmWmvmXEASDf9NU3WB71tXL82BFSFqLdmDLYj75DZCh78WryNcSdwCmHfyfN",
  "key24": "VVFCHetC4aZGUBKq6ui9zHgSPwzAP4k79Ysuim94MHyYcTGSRQuMzGVtUQjwyyrhUaGq8z8VHxgLbqnJXtWF8Su",
  "key25": "5gb4hXWPqUjBb4JYxFAueAR7zvivxBDKQFLSn16Bub3MPNJcjqMhzJy8YHr6NkU2r9Kduj6KPjpauVVVxccfhdmC",
  "key26": "1MGeuL3gwo35SyiY5NDVQsPm8tpdpUUrt5Nh8cJosnSciVmdSrpwSaBjakrk9XMPc3fVQNqsHB98W2AJYSFYxj3",
  "key27": "36gTojQcQFKwdoHtCt7sxKfLCf59T4wmjdMrCKDQ2PrV649TrQBBZvmxoFYPiTDkJocDFKdWZkvwMTDLNXTgJQGQ",
  "key28": "2kJGVr2wpHykrk6yUrj4RVf5z8Zmhhe2eykFzkxirNXaBmVjYj9uL2rfyJdTjdKy86xJd8sAf77HLUa1x71N5tnT",
  "key29": "noLJUJdJxYQutY1sAMWVXAQJffiLuyRbjs8L52diHF8KszchdLz6gBKnxVd3uV7yskMy1dXusemsLYVAWrQae5i",
  "key30": "3nP1f2gsMDbovRY3uwVZuXCffiSQguA67LBZcodZcna8wppnqCh4Xk4GrqKA2XsNRnvKJ6XnT9jEXefy5Hy8E5fA",
  "key31": "5dfQ8YMin9NJ7oQdfZh5e9CxS3s4sJutuMyS3gfrrZbxHFcmgpqhfwwu8ECY4ExwzpaFAgLCuCvRRKs8EyVDC3Pn",
  "key32": "271RABj4g4iTufTSJd2BfznGt1k3RgSw6y8f4Mee6HmQBYSMfWeiSk2Z6CRLySwhsX1tryJjLLiWe9fmJ5qNX4Gh",
  "key33": "2icTREhS34pBTqVFNiYWMx2dfozqSKEdQ9bHfr4yq9itm1ocSMUTbpqtpoxndSGE988rm3TMXmhtTtRVW6p5Aa1A",
  "key34": "mzxPbbztM6EW3RTE8fC4paz1i7DRXqjhn6EgCNbNyytd4CMQiRHoH7wmry33MyEn9QnNUWY9nVndXvSJ8W842M6",
  "key35": "4bjVBLUK2NzZJHiYkVHCtAGvEQNuCr1QjGCximdiLvv4cdpQaSoxbJojwrwAUqk9uCgq4v5ZvygYrKt8EoTdSmJa",
  "key36": "37RHonJhuu2o6Nr3VhF4njeJm2VmfTCFiJkphyVCPXJG7EEwJ2DjqU2VwDRxG2g43DGPqFyCUSq74Yhedpv321Wk",
  "key37": "3hAg2L4RZ8GjSo9VgyzixyygCcSTVoURcKr8vq5BzBZn6m54Pxn4CVei2duqvRcWaELjL1x14oPVmENCwEDC6MM6",
  "key38": "47hW8TgaUmVzNSGdPU82Uiwdp9BwpgXMMFD6eG1AZrEPqLUAnVMtRe7YB53DFRDnHxBPzBGd4kkscRsbsc3EtKvH",
  "key39": "2zyUTfsDSv37ocDZHGZu2D5wtMAA4LbaKCh2zEyoEt8gzKR57Wfx1p5kQvdgWe1DYdvbAY6pQ5z6vF2cND2s2eVv",
  "key40": "6Suc5cEpXKefupqRsiYpBRPhRF8Vn8Y1DvaeRY7PPZ678oZuu7bzGxz7PckGywNyhgXzfCr1amqeLF1shZ6s3pL"
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
