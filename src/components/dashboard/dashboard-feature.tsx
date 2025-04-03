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
    "2Bm9kLUMCbp9DgPxHgwaWukePfQ2L58vRGA66E4kv7AaBAN9sTEgy2QGqN4iaeZtVM4tmjLcgvo2ubzuNuui591b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y5ZNfaVSCzMSsxX1LYDBq8vUTB2C6VCEeqjKKB1bXCK2hFqy14PBU8VqiqEbBdAJzSWACJpmQt38i1SsSdQ9rmL",
  "key1": "3PDAmZrSrBPDnbY8CRbdgoDmnHahtUTz1ELw1nWSohn9dfgvYE3z9KxPEwCdcVusnPbCKLTZuibFyPKxvfEj6f6d",
  "key2": "3v3Mw9S43FVUEUTcTHtT28vvUV15GNVa9f5XnCSbMffA97SoaBCtniUo2GEajUauZKm8wznVdj9nTb4eLUzRw9f5",
  "key3": "482Yp8VdEZQrcQTX5hErNX8QPfkqtdaPbcYsXxHT8GcMPPPGuQAtDhCowiKhrnHh3M6rRZpjk4mzXp6hkttY7qdh",
  "key4": "4vs9oEBCF6CLYF42LV7UNdyT7XyMuohknPBQFiCUmG3DUYiM3dz9c4cSUzqGPmcGMpwUZ12LQ92uYcQk6TKgTgWj",
  "key5": "KinVwvtZixi4fG83e142RgC7hTvScc4cSjpjBQ7zWnAbDXujy9k4hF2uHAQ2ghaWEwSWwYNcWEazWBMH5HwF9nm",
  "key6": "3yp2HzMSSnz2VgTyMd8ZDVJDeRHmhaa8fjjH5EtsgaXB1DDxW4wLUYm8SgboU4ahaC3RYrAgPmtcRRGpFT934j77",
  "key7": "QxDz7BL1eWp5L473f1oU9nKXewwEaMKXZhkCdPfsKxSv4e1enGGjHpf6QnzaGHVU4SV436qAbPvDttoj3PbqJpF",
  "key8": "48ZZvJayNH5sVWfXsxttSwHSAjUJQxA7xLdGc4Xxpq2Cg9HH45KDpDnGptc6NbJ1XWeHp3HBttwAW6wnSp4ihRuY",
  "key9": "puxD6JPLCVmX176MvxoDhCtYfhd4c7mdmMud2CxCtMMG76uN2cXbMwN94yFBRKjKdS7up2K2zGXkgkkHwqLVnFy",
  "key10": "2vWxiTPmTgCBCfHJVQBFnfk8kg1NZgiiWXM7Gse8qDikjkuWRDigsgSLUaNq31F9uT15vXFDDU5vGNCCakuULqVe",
  "key11": "3kSb54TEd7ncv2WrVLKdwKBq3Qivk8mgt2Aw67tq4X5QP8Ci3jmZwBDfpQdqk5wFrVciygxAGpAe4XeeWR68FXCP",
  "key12": "2JGEwEQuJS8BQDi629bMhzty4bmbd2ULrgy6h6a1tEVenSkyKRpFZxx78KyH6rhfjUq6Rb9y6j2CmfxLBjtpbecP",
  "key13": "4MoxFVgXKbk5Vctthn8iDBiXo8YSr5KDFNQ5fTzpMp4vYrKmLZT6SDtJJVAUo4tsqSPv8vjqCm9eBxVuXseGawL7",
  "key14": "5HS2635khV5RAz24NPtvqm43kRwd9Wwa6GH8UAub9Qif2UYsCAoGxJ1v71uLW8wd8QZqNCYb38LLxrxbcXAH4Urw",
  "key15": "2tdV8MYJxkxZFmMgW8osmujCRyLYFK5xiDCkiqUHaM5UpU6T1xCQ64gjcsJdAEkKGHnNRtBWubo4epceDuoxcRJK",
  "key16": "2Ff6sRim3k7DPHp2Db1tVAi8Q3iSUfDJUVFwWwYpN6KVgY8Sg6y81qjNYCJt2K92ky589ofvmSGw6mcUzPa3sj59",
  "key17": "2XMzuhv4ECfrhJBJRDbJnx2jvyzVEELpdg5v2KMa39ezhzpUoTFL1YtPDmGMREMTW4SKoa1vvtmiDpUYdMGHAh2a",
  "key18": "5BvndnoJEL5iKcjE6FHGfoJVPLBoewqdMZdHu4povNNRcRSUUT95cqm9boajUUyovnDAVktqDkcBYSZcUa6pZqTg",
  "key19": "3ZcXCYf8xfm2PmekDvkqs3f68JVmSEhVbi3RbXFq5akZ7RGwzDH1xVXmYbN7yaDR6YEqLrF6hyVLVowy9kF57d4H",
  "key20": "2BMVCv5GsCMdZiGRz37jw8JJDP7u5VmG4upGfpXfGEBR4zPRwtiBd7vCC893NBpqDYu9JrtAP3wWwMoD1R8u4sLC",
  "key21": "26YRPbgV3HeLv6KrC7NCw7ArGfReLuDRXSzNKWJNxBxHf1CpejcqT9qJv9nTUXtr8rLqdmKYJoq1fg2SbF6WC45p",
  "key22": "2Hn8FwwC9tvcQjnNhr3QTuFb3etp7mU9hQ3beqjpWa9Wox2gEbR86uQ5MLCYKaEApnibbwH48AQTm6KemX3NDS3L",
  "key23": "3q2D6mqrky7Krm4pTXUvpXK8Uee77DTQ8c6swKx5zDQXPZQTgjaFWN7MNpdycBJ5rQ9kdiw4TKc3HkvVadQbP6hQ",
  "key24": "3EUjofVaJMzaWAiKLbzXR145vhesXJPRCCDz7bHPDo7rJiNTY54wa4mcQHZ5RaXXt8hooxpzWqXcJrH8JuMKSoHa",
  "key25": "UPFR1KinxVPm5nwNYn4zJwFzU9TrmKv5fsZaELSPyNqd1aLfqZhDfGkJTJP4nLfZ3RnWt1XFwtoLBaYtkrPSARz",
  "key26": "5cxaYhSnWNNts3TL1yCvs4Wjwi5cYYvZLhuxKv9zc9gnemHBnU5S7Qigk1ntL1McnskvAYWPnWj548wqvk9rQ8eA",
  "key27": "2U4wWf6zmaN7YxH4bUuVDdUw8WW3wiVdTcgkcSWLVskvTquzpdKBdjeWff1V81YNkqmyE8MVMHw5pNYkKCn8aFyA",
  "key28": "tKPnwwaKQMLZEGpiMxbBx62CEdE9YiYH4wkhqN4ZPsvdSjaMadFfztBdtdtS2brRoPr7svcsHcaosg7enVjUzQi"
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
