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
    "566Hsasz6pFvgxYg88pr83LWu5gUyEroVdcxCx5yoXsjgq19f28S4GWWoGPuXL18vHEPMsumnMYozZB52DfREvk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FohBBdgJTe4x53NcepWoKAizRe7jwAc5DDicHYvAvfJHZ2y65JTofjgxQ2oP2M9GW8Whc2YuV5V3PGygQXBogAc",
  "key1": "q7npxiM45gvhXWArDHF8fthnKYEGDGnu6N1DbcVaJyQmYtkgSZDU8WdchWoaRGLpMpXYqtgfWzZgeFPkmSGnj2i",
  "key2": "3rpeEpsWhcVFLTJGvZeyzTFmEh45nLZ2eoFk89p3ch4nbuG6bACbNVtCKTNweZUE5LwxzFiaCkiaoVA61YWJHoDh",
  "key3": "2C6cnyEbC8YN9w9L6cLyL1L9UuyzwbHPp41CCjreWe3uEUqXWGFQbBkZwjuAqaU2SeHN1dfFDTbb7DQwVXKeqppi",
  "key4": "5HdJLNq6sF6nBrvgUh6eN4JQsqZ46B8sn7tPdcUBNCFUgvVesSf98y11WARbKLJj88B6Ahn4dJAsD3Mf2Srbemo5",
  "key5": "9sYrgF9yPUBeELnTM15VWUUiDYJxumvyB2gdXcsxoSW9S79wMKrFJfaiZJeTHzoMUNCUd1AKjWCJHBrJtNsqRdW",
  "key6": "23h9D3tPh2tdjMVtCZaW9M47Sywrad9NyAPWbCAi9ToDpCMWtKSvywW8e2jbJAYktvXZK5WQNGg1iBTg53v9T8qF",
  "key7": "wtGiQ9LjpsGDttv48wNaVBgoL233a3ma6BKrKLZSWsmyivN6fqLHceMrdDRHHv3Kh6ctbRr6KiMcYb6W3SB4EgY",
  "key8": "2Wu4fmBCeiaFZ2Mbsqmsxm9ut1ttzexoF5urTH49fzB4SmdG4zbyyeMEez87ajUKaEAVh4bQu7yuUWTCwqBxUA8M",
  "key9": "2LEmpciP9UMy3x59MmgWsBSepZrTuqLmfMeUrp8GQfb9XYShXoJcYfBacp6g1kfWxLYPimfnfRV8uC4Q9UffpmYP",
  "key10": "2PQrbv7SetPH2KDecy7t8Fr2FArZUBa8G2KF1poF789V3sjL38g7r1SquHvXVtRKNY4TE4PYWsyEPQ355CceCNnk",
  "key11": "38zPkPeDa7ZbQshnqv7B8aotA1nPV8sip2aVvYaxr2HJDRi7PGNA8M3zoC8F8i6US6pn42Np2Qq4SvnXnQWjkUSc",
  "key12": "BnXVGcLeKP5ud1a4u6TFRRnMMHmYn8bzFenBtXZUgNSnCgtthLabiELLPFuoDFPZvwQXkiJtET3Jpu6uLAzBPiW",
  "key13": "2dyKESPGF2nozmSZAoNxdYB462qh2f2L9handEzyZisrbDU2x3FGXmb7gEksFJtmJcdWQXdNDspW5EKnr6v4vKZQ",
  "key14": "pu9LAf98EPWZQXvF1hAE8ddZENtVTgKB67Bb67GL5y4px9s99tb8EnoxUWnWvXHG2AJQEic852vtELyoQuX7feL",
  "key15": "57Bomt4GcgMsjvkrLb7NJ6Rzdx1bbqJsRSogj9t3qMMgvVd6uaJiDUAYjiC9RKXb6pSeisSQwwuUBvah26UqvFjQ",
  "key16": "37QyXNg1GvmgGSP26hBp4YNiqtBamgDs6VyfctVPLqrH6yctTAgrUUdMDSgRYTpFUAQ92grMMF4wqQhSw3zWq9Q",
  "key17": "39vjoNMzmhGiA9c5w8dtXdF49w43HuQUx7f85U9amQPqpu9DbQLM4bziJS1QRMxALuJJE9tTRNin3kGCqg9qdm4x",
  "key18": "ttHVUSiXUHWK1UkSZLxYQB8rHUdnQVBMf8Qk5nQwCfR76hNbJDd3tSfN16gMD7aNFHihGdMoEkQo8jNXRmsGVxN",
  "key19": "HR8GVVz41G82CjRF9mZeJuV5UsVRWBBcAmru6n9bzB5UK4XF1t3QnkhY7sRo2drS6LX4HuJdP31xxSyJruPfiSx",
  "key20": "2jRZ8GgbFcvescu5SGa3b16uRTPmrUATEkj9fNdVsaxWCGCZmetARhXh81HSgG5XAdpY9HpKecwFg9RKZwNtbgVG",
  "key21": "2F7xmrhCfpd5iWk6eKq72mQ1vKRKb4bzEpHZ9cVN5kuW8BBodAUtu3UvttA33u8a4ywzmsXNDM2NdSFMMCEvLDN6",
  "key22": "4faDqb1sJy1sP2DwFBXPgX9XgMUdjtDmd3918zxMdpfZxNEcRHc2ki3iynr97vjbhKCuAGGuMjAyxRB9enUtLMif",
  "key23": "5NVke7Nt3F6fKWwadqGygrKdJ5ZrEFdvMa6tdT4fpt8PeDWR1r2UEpdeYSuF4gEkeHctnvcEogsPZgXgMcEK4UEt",
  "key24": "4wSuHMN2raoZ72Nu93YGwhnCDYAaiMdPjBN8JL4zDxNsNziJEdLxBJLAT2CNvrWzF1RwvFd4z1WCukBUpqwT3DKB",
  "key25": "JDU6A3DVxzjH62XcJSGGkSV27Tjd2Azfi7DVnP5A6r52ppEDfjks2M8LdRrdq74Z5KoSaKWxtmrufZUjTM3reWQ",
  "key26": "5YNyfLAU7JZXWZ2WkCuw76tpSvwwUSo4EfmBxVEK9QaZJDxnn3m4r8JFro75d9tuH3ra7qCf4gSUMxdHvjwRMFjj",
  "key27": "2tWqUNZbjxS8PxngAb39CAQNiBPcHQy2cXMT7CNemW8Tihhdq2cpcvqhywDPWKxJP3zfc5WeAWhBtm4HyEP4uf58",
  "key28": "2A8xBKz6MEFJ67sTv6iSEkzHwKFgMRwRY5mH8q9VrTu9vQXhFdjiSqQu3Uti8ktD4hk6GxbAV915m4j3bih5gvxW",
  "key29": "5JDPCFv6gfbMMtuyFmnTUN5s7BknHrcdsGcUJMdULrSAURj5Ar4dUC4zW6EASzqHAXRGjN377yn799FYMXzMiJ1W",
  "key30": "2BjHA9ZvoyR5r8PvDU4VUXa4S7EbWjBmQoGxin2s5FZeKs18CDJuHyRs7zj4xDpByeyEjTi7hq1YCy3J7DNKptvZ",
  "key31": "5ogGHc4WNsPmTS1PCfj62JpbaikqXNZY8DdXdGbXyYTh98JttuDnTht5rYVL4KPPoYdwowJUPuXuSKUPU2w5oYkZ",
  "key32": "5QhRLWWvBVyMfBq32JB3MMamqiebYPFsanPfQEnNRapbddoJSLtDsPXwpbBxJkHre8v9WHSqKM6C2pGGgbjriDQc",
  "key33": "24qCNpfs5YdeUtg74dirnXm5EToCcUoiQ23T4spNGaHN8eKhHhY9MXmHrDihBkzJzUjMMxqkdq2fniG68VuRYSgE",
  "key34": "2es5quAVqmMSTgMonMN2yC79GCVdQf7MGpmsxeJ7rYX7iUThxh3Y9hCTYWqeNUAVqoyQKWhVme28FMzXJHbSkn8W",
  "key35": "5gawFNk5pGjntBRVMxkTqv6C4F6ok7d9v9GGnQtRK1mBvazawjKJdUA4ewbK9LViUVramwpT9wMxpuTcMeKq9QCq",
  "key36": "2TBmHbuSMRCnq2E1hQBSf1HpAqunxmP3ENEVg5YFyL5NCPU6Vh95BAASMva5TpwWPVWCDqcsE9rZ39Mc2MCC6bV6",
  "key37": "23aUB7TfAeXjJMaDJyVJRq1PPWBsm13zE5RZyqEs3zzKsAp34vQTnepANieG8BZYUhTU9AyNSUEyZDthX87vEGLX"
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
