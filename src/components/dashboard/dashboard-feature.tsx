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
    "56DjS7BvQHwmacH3rK2bNwHdT7EE7extc2EMeUT6wZfN4tiJEPWiKYaSFMCMtbjVCP1ctaYaeMxvGUWyWCT2YdsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28tEXEUtCGXUxcN4kP3sXSagodGZwjDKrf3D486ajFReakTXEB2Lui5xchsoXoFYRfepfBToSCemtPQZxDuYwZsx",
  "key1": "MnXpumo7aNgGNDhmkyfhZjFNGrL97p71pzqiEsox6hJNLniyNM1kSnjzhpoPEAh8EDPPQQD9ZUN6JK2ZPUCP6WQ",
  "key2": "5W9sUCtpVn8SndhpQ4rPmtfJuHBnziLEZ79TYKmKL8pUcfbrVXBCZNqgVZUP74wCh8RdCcsiC3Pm8NvCrQLzAEi6",
  "key3": "5dijMF6LSuHqD5jif2GDVjGzH4J9LtzN1tQJjPZ7hSMZCC2oG4ejFv3g6fBPMDQqPvo2aE6rsEM1BmNaYHViCrZN",
  "key4": "3jZNCXYkBTFS8G1JHFuvo6wtMKQ1rDDAYr1B6RFZc1dbqdmBuE8ALP6FGSRFbD3adAHd13m8j5Wz1XEQkmxxiVPz",
  "key5": "2a25Q9KoGMu7eK62UMzUYQS3jx28JTqaddxh67kNMUzyx6GfQ6b2YjskafNJThnGggrr318bWWBGkivKcEzEnPp",
  "key6": "Qxh25mSWLH44LSDqeHKgwzpWiZbUhXYDrgFKwQBHnJrBE9neL6wwKjXN1NFCESQMULyWksDcBgWHc816GcMpC4u",
  "key7": "3R5etwYsTq1ETPyuqoh78mGbwiDQvfUNjJUUU8X67KbYZ3zsyDwVoBUTBvU4JcMxFEvmSYWD4WZgaHmGedcpbVBn",
  "key8": "45fvhdhnpaPTv8kSqyyG4Td3zuKuV4ejAKcFRysxnK8oz4NQvMUTFcLchp5xWhBFrnzH3LjM5Wx1Ugk6DECATKgz",
  "key9": "3SYY16ufzAPU9L6PBz8hg5drVRmTSkBiexmSRKhYNPyaeYf9kwyyYfUE9ie1yCkPBeDanQp3fVKT5hrh774yivAD",
  "key10": "4vjHUxM6kDZKZLMCc2VhdxwXa5X7bBnWmPJssiEGCmpqh6ggGouKoaBUt86bu6BNG8QRdVNwsiKgWQQeU6yggc6u",
  "key11": "533bmfFRMEyPuagDcPwQWRsDuUDkysN3dx4vESwxdZ7R3iNoxr6CjyL6MQifoYXrX8va9zoMwdraT6EtGkP7T9TF",
  "key12": "3oenGtRGVcBVecxWWbb5wRHvdGovMgGXrxTugMqW6zo5HdfyX8tLi2jAxiTGdZkYj4wGLviMwrAyZYXectUE3XZF",
  "key13": "3ZwZn87MygipVQi9iTMfvVuykso2GyqKeUNU17Yx9ATFwruk3p3j2rq2B1HkKNkSsErBomfXGZsagUGNBmVxQbv3",
  "key14": "2ZYWRa9r2ahiwJ2tkiDr6CN5zRCXnoxjs8Ny3mcg8V3vKv9CBMXaGrup44M7GM8b7yuUd5i3MTMiRj48GhcBLoVG",
  "key15": "3vkrD2R9dpesDQwD4djv4aFeAEAbVSSqh38PPim9oT7aMDFYW2i8FLGTmzFB3CpMXohyJVKQPzUGKoZqhfpC44Wu",
  "key16": "64zD4gouB3Zc8gXtiiEK7SbqS1YzkSvkDo1bqCqLotiRMwk4jA3tumdvgHmLdy81KvhHwV5TfsYTWydSjf66XRBk",
  "key17": "1eS6uwYintz6aDkAwz9aaujQ4UvN94BK7NcaVJr127cekjEL6P8gnSu12PLgeMeabaPpBdeGSJGrRCBtyjtmeKb",
  "key18": "W4KGTTsiS62pYo7Q3G1zM3xNNCgE2nKtk8G1Zi5HN9LN6pGssjUrEnL21EjpmChqJLnA433i2yCMSvcoJfepiJJ",
  "key19": "3Xf8TNmvqoSFDSkQRFFSH8mLvtQZupz9D41pqYHvetyjSmtcqyCKKbYLYdgJcBquA3xrJqtitXA7KYTXwYjydHCw",
  "key20": "5un9HG8wUur7QnRPjxqPEXzY6wQkpLuNW7zYA8dPk7He1DudjiAwyq6gipW3Cq7ZiidzSwTetU4YfNPCBgZjJbHA",
  "key21": "5in66eb5VpnowXpmUnxincsru3DJkLhF9hXUfMoDi7TYTNu5E63d3nytYxPZYxk5gLSosiVcVnGRjRsWMATapPMg",
  "key22": "24zVYNAGTAbHNF3B3SFnNCFUZhjRfRRZN5agTMmUcLpc7cPX3gqGNgbsRMtUQWKdUQxvZD8pScPEKvGtLHm2WCbR",
  "key23": "5CNgKQTWTMmTGCRbpoMQGUua9XdUUySbWe9RREoMa26earFEFhQygByAvndPFQaBD9oqmoMGWwtDDAULAGiMxNPo",
  "key24": "3aHGQsUzqZGZu5ghmLVfMc5nrGVe1WzR2fNUxjHTWvv7xrys72xdgU6kC2A4tm1yiD5iLxz3AESciugyamijfGwD",
  "key25": "29oUBMNmAHZDDRtdxWMi7e6etRUV4m8uGXSCHvvK3GqqAEDLQrQC7BR9ghhE2WSA7WPEyLJZC5eXhh2PFRHa1dNn",
  "key26": "MVeJ2ARVxydsT3f6fhuivtu6Hzp1uqTVFoYmkPX2xBKsEnfeB5oQLpsm1mnjRM9uZPheDj5h6pEr4Vp9vPYrbma",
  "key27": "hzwD7jGnyz2kicfpE4UX2SPUxxjTMSmZnnt5T42p1KR8BRTfHtWwnDeTyjN3G4XZ2B8B9JZL3597Hu4NbxJtrSi",
  "key28": "4jViqFR7sz38bx5eb6WWjUk4HrkDGSF8NhaHvGFurwQvdsP48EVYGaMma4HSikzKHEwM6eS414qpmQvdTjiKZfAD",
  "key29": "4fe2Gd5yXV1E7rutMmYTWCWr1yQLBpA6EcENgTT6DRiLazjCDhde6Ub8zxDozLAGWsZ35S3pkSa5rAfa9FC2kGeq",
  "key30": "3kAANWV9qyhDyyzqAoS76cinHL9EFVp2hGdGepBPSG3FUE5GL6LTe5bNJRX5o7zQqzevXGCkT54BL6ktfdYddFrv",
  "key31": "4Dd7qA9ZKeWE9SuxatySkNdTZopYVwiLKDdr9UMBdguQNc5dBy6MraL6C6T8R3ohfwKtvuRK2uoTypv3Hw7zH5Py",
  "key32": "2pWRq9vtRhvixEGJFFtB7rf4MpGQ4A1c3sVsfuM5dPvnk5RoMK5uq79B3cMucmytWGXMg7u8Z3yBuEqg2AiCE21d",
  "key33": "3MQTF9yoAQ62TaR7hwpqG5GyEc8HDq7AGnCmJp6y2yAxUjxmbuoWz5hS1kwFVmCZ1RXEBoQA3XFR73qWAkCvL7r2",
  "key34": "3LV9UkF7S8TVNVjSb4xgBGUJSW5LnPg8XS1cajEYaSqwBC22r4cEnzswF5f4u3TExTP6wKPnirwuiteBF9sxMFvz"
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
