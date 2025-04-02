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
    "5Sm3ieh7LU5CGXVPV2gawi7Di2kAjYHR9kFXV3ttoyecCVK7Fpe3PnEeS8BYQVBKg6vShvR26qaavfiUyQvQumMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ATxCXgJTZdioFqykG7Zypn8RxCboRw2sKR2koZdvQNHW32P3JpmTGczS1ZZpKKNQWAhbWsAcazWZZ8CMyNc63P",
  "key1": "3AbRsuCTb2z37tyLp3Enx2gHYvyR4DfQH4z8fhEaS5W4WBCpdWgZX9749bybMR7NKyLTAwnEGi2U7GKV5JgXCWVS",
  "key2": "52DLfSzLdNF66V196SnszF7e3CJohNfHiGBa9pvydL3PqAvuc2h4VDHhnD8mswnDcPCusjYhzMJy1ZcpoyjkFvNY",
  "key3": "5jr3csEZ75fYzjNUBabJFUzvjsonbSQ5RVbYaVXtezmwnnmvzEZMx4ZW8hRTrDSgXWQXgqVmagNAMtdcaBaRNAxP",
  "key4": "1pDmJFbxzDS3iAZm2dj94EV3NXnJ6PfTBQyuKyFmLZ4JU7Ji4WWDJSMf5umqa6vvLwN7UjQNz2wzo2pBrehrfVD",
  "key5": "2uEyEN7Cv3VrLYgozpCM9YKpZyVjuPU4z1M1ZsEKUS89BX2dabogD48ozzbCQyzRuf4UaHRF4wUNyiPtnwc1k7gh",
  "key6": "3udguYh9e9BD5VXVBTTnxpXSxRGccV1V9b5xPP8g5dKN6tTvfUSe6eBKcCra3nNMVVWY6ksF9pc2c4xsAznmsFGU",
  "key7": "3UyvoTsxdjLit2yLEM3w1Zkn1KJrsGiPoE7rFMoZd8L5dL8eGvibUnau39mMtiTVRo5H63p8LYgE4uY8jGqoCcKX",
  "key8": "2N6M77Xzt14ELKPapxf3UHLeuoq7m7BJus399wZgyKvAG7bzb2D3fBKK48y8DKqey4SWjEnTceFFnsyubdDSKaTH",
  "key9": "3tK1LsWNifAVadkWhyQEaB79MBVHpiz99rpPiU3GH8Wbuj1DawmGBAVHd1jvVNRhGJUmiSbEBWqjHYWVSaQLf5G9",
  "key10": "2uuLXxx7gEpq6gxjRkfspuCd4myU8psJWNR4HYjNRNGBAP2B81km7ZPj54k8EB63XaMZmcz9hkdAYYg9ByPWXHk5",
  "key11": "3eW1rkVPb9EopuB8b2SPDegQ1YeKTfmVtAjytXPVAJHRFJxQYnj4eHaSaWkc2ZTZrE6X9mHhcojBqxTLEDnTL1kV",
  "key12": "43KFcS267rQdvad8KDHxYfdWMbD3kMzQZ77wBxdYrRMjm7GeXhaVwBRWDt6K3EsWB7kzDmTibnhL9ofcVi2fLL6Y",
  "key13": "51w9bZznE6iFDiJyzooSoZc1e9JBjCiPsDoRiYBXK22NytA1sSsVdNMZjtT1Us6LFNkr8XWbvuM25XyKTW2nC2Rc",
  "key14": "51srCMu3La2bVSqAfUoRWCUAL3gbVsDvxmEbPv2sccy1fWgTRDd68z9JNwmAVadeSVMHiGduAKUzhq1nNrEh4umF",
  "key15": "5iwoDwFCx1BxJhi34nXZTJtaLLZwTiXUZcngSgyeWFmFknWpKLA3uYu4fqumSQV3TLzzTzczofd8p5PDVrpjqJsc",
  "key16": "2Pr1PboxRyKUUXz3kTLNtd6fB4tfkUBHuh7LaErvKSVrvtwMDDBkXCYwg9Rq3RTtdJFg3upzTZapMMQNeUvH4h7j",
  "key17": "2JqMcAhnd3fbrAA42Wk3UwaGW5KFPsdgtVcBtShLgsCckzhy3XXHDe5hzgU3gBj6k6JQAZ15fabGqdwZWDtZM8Vr",
  "key18": "HE5mQTy8UYuwF1p2i3zD8EEko7iY5VcJizdQS8QmCqNrXK2TVnhh2N8V2ytfTx8hH8mo2jrQeiw8zAZ1d1YmSaS",
  "key19": "5rpkpvLWeSS2SfQ1bMBotTighFAJLwswWoAiZYfKmUSwK5RqEmKJAxkuwmdH6NNo7toL3ZTPckCzFAmemgdYVRQU",
  "key20": "5qKSWsU2RFVQQCZMmWTHRWoRi5vDkJ6x2w2orN9AYeMVQAb9z5YyNbVCjXXst23TMR1hXUDaDn8JpY85Meuvs2c4",
  "key21": "44rsrwE7ZUXbYh9gnLbrEmRSFS3H4N8xzuTBjGXMKX7FW5me2czJkGHK9GNKphg7sB3uxkH6yKgjRPUJEqyUXGKy",
  "key22": "3MsmDEBUgHs1PBix1J8TXToGYVW1jmTggcSq2QviHjQRygrCBuUsszXh1F17jYMVcHNqNDznqyWuhwHG5uYN4dxU",
  "key23": "4e9DeU3jC499Vsr2XU7pVooSC97P1Z6HLvN1qKzxXBd4oX57UELAsNRXNdyb1E5FQJrb3F8t1tdPeahZnjmCnF58",
  "key24": "sUk4Rp1o2WWn8kYEL5T13tktGsBd7ZS37zqEgf6NRdDVf7vDcXFLUfGDMYTGew6tyQ3jTFCHgT1Yx4XbernGc1W",
  "key25": "5V2v74kerKnwrq1g9DeVm3Vt3UN6Pm19XJtmZypXKkRkPJyYjmT9KHo2sevEzJbGDvLBVMbxCKYuJnYXMzPiM4X",
  "key26": "3YqyaD1zLvPKoCdL9kqVJuGRAwKAGU71BXEMQh4aFs3oq4WB76UE4M38Q3KCrjhConaRnhSGuUfNGkpxPfq2nMLe",
  "key27": "2cLXtCPsgUt24H47Y4C3FrqGh6fwH3tnD4rn527MvihwzpSkbG8HrGZREZx9fjpyMZ1ErBrgesq4MBHSkB62SRqA",
  "key28": "4Xx1fgjymDXTG8tgoa2KDEnyHJxgksMio3FZGqRwFBc8dwXLBYETdwUaNyf7FCfsChNtwAgJVuD5f6kxoqyYMVXc",
  "key29": "3wrLGFs5tgaiKCJouTJnZHfMqwpdyQ16iDF132Pqpi7qdJobgkqWrbA9L5Sj2QyATVqHZ1RN68fbn3fm8cPw2M8H",
  "key30": "5czHp314gVw6wAtjVgoY82MTyBHBKGLMmx6bRArCFfmoaXGvNzeqpyrLPSAPi2DBDdFBQRWRDRJHyn4UyjjuPA9K",
  "key31": "4GFzZnCfUwSzWA1VEiMo1C1pu4t9aQ7yywqCuggxsTpkC2QhL5GwbhuzJMoAzMx8CHxH9GjbvHWLDsPTBcPGXXHD",
  "key32": "2PCb2aop64RK7YDWS5SqsPHfdc84Hp2G9wrUWbd5Q8E3L9AKAyEu6FmvJSoS8312M5dCoCqF6gin1YTxTSkejRYT",
  "key33": "2BNi9MGNEMxPqw8XSYaVNScA84hayqZpjDn5PU6phB18v2jDvU2wYE4GhN6Yw1ud4PHURnpbt1GLrQY2vq884b74"
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
