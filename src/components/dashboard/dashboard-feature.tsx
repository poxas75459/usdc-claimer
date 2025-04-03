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
    "5oP7BDWEnHkxKMT6rn9La1yLUUo6XKf9U9NkWrk7go85kQidk2f9SaXjbvqhWd1jPh6EZYCGWhB8aZ6zsVU5Aa7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZN91A1wWteTMNgVBcoSCrrT5Np8QWSR6fC8eaxjTT1VwMFZjp69Ebmk3196inw9kz5DFVxWwMvqxaLbThLmiYNF",
  "key1": "2bQkk664s3QJh7dBz54mQ6PvBrsKoHJSSuwoD3LDUhzqpyfKkHMa7oAX3a8qwynPZ7kpSTtEahQp5FWHcDrqXHm8",
  "key2": "5AfkqVLe3BgEJAxz5r8MQSzkAz6EfWFw9MaB1BAmxYQ8H7yxcpWMPDvJAe68CPutGNAHfY8WWPmzUhNbkGYLyHrT",
  "key3": "3sv3tzYaYbVy22sNxnUpyvx2wAqrpdWBg98R456i9vWGhyqDQcQCtjtoretVXG3YYsfJ4HFZi9zj9MenGSjTvkp1",
  "key4": "5bQ4W4hDrMqttBRVxUgYnJ1EEwfAdeaFoB2q8yrfc3YQiaVpCh9ZZsMxCABQEvPeaCB72TTrSXuUPQ2XgENedL9m",
  "key5": "2XsqbjrWpMj9Rm7gVvMxKSeF14CGchbMRjkn1RQV3VKCHEH1fLz2h3RTokW8BKpNGAWgDjC9u8jHfZBu23qJ8dfB",
  "key6": "52du7gSs2wZhzeVC6NoJcFpu8h1agf48N5294MbhCHRL7XtY1fWm1MkX8AR1ZZhxW1By1EmtB89ZKBaJZWeggwDh",
  "key7": "57WHWzvERpoxaD6iPFPSHFsywKzv8eNY9piG66NLnr6tFiPVzoEcz7Yq6K1A33SYBcvpVVoPneh3nToC4UtcckDF",
  "key8": "4wAVEkNeQ76FoF5PsHvqeXtGqPTAFN2wFsBroK6xjYwJsnRntGEQ7GEiVf1E5yydBwfxBBPXYegxEgpfz5Z74Q7Q",
  "key9": "4cgyAC8pnv1JC6i4gmehD1yhqzr9ZWr4LEHrnDijm2ZqwVhoX4gDcThpszGpjqwaqzdRV5jK5c7M8SJpmU5EjQth",
  "key10": "jiFrjschDf4mFoCaxd6rfX9LfWahWknYt8DBRxNBgmy7MDSwCGnNh2pF4zEffyLhu97ebvKB17GdKSDx79BXtcz",
  "key11": "2n7Fv26CSNYDLogKnskFYeP24ndr5LjKfub67VEa9PbSGaLKF2u8aiFt42tondPGHfH9yDjnJ52WUWT8peFoWhPu",
  "key12": "3cMDQujsTq9ChEf9kRsWuN4fDFWz8Nx97fTyigv9gQmZueR8PY2Xr67Cfak9iwSza6CqSGk1HrHK8V2W66X92ouk",
  "key13": "4t23aM22NEsnBHX4YMEJvM8V1MdiTooz5KbJAA9SeRFXK7Ux5ps4uH7HkUj7V67cspZUvFfzfrkfLJv1iivp6FJ7",
  "key14": "3GJt8Fr5wxkBrXmMKAPyhPv4Dqk4MaGw2CP639dhgJnnBTfpJVVpQ6nuKDmphJJes9CCmJT8cwuBisTtbnQBb2UV",
  "key15": "4uL2pH6s59rUK3SXxqkSFwmXuCHoZehXEHWBLrdD5DJgjVyCotqA18yVPuq1bWKe5Xr38PQzUBw5zvrnSmfTMNPW",
  "key16": "2xJDr6D6CWU3xRV2fJw7KAkZsY1nZY2gNGrQJqU7zruQiFoZJAWQ8sLfsdtrzxALzwoBTgZ2rTWpV8Df6VQMnE2f",
  "key17": "4DASWCGJRaP5BeNNc2wCe8muLZAzRX9q6SE8SGvaNfc69LSBNw4uL18iGpFBYE7ZJ7Q1jZSbcqmGNbBK8LBVAzc9",
  "key18": "5wsYMqvH3hUjbeLtFRP8rSRz2dttSYVYKD61NzfMmwd98uQAv538uHnz6WnfbaLEJDxM84c5er2UYs6zkY5skaKi",
  "key19": "2qLqnTL9JxTLDgJVFxYiaZde9zY2hoRZa83JBSZNzXchGEdCtFA6D8je5ezWkyFz8g7fXfYqgWh5Z3U4QY4Q1zpo",
  "key20": "3hw7R2E1kUj2ZDn1nSepaD6Um91D64ZYDDtrdspbN2vvTyBXEBzVCsppxXSMaK3p7DDwP3bVZWck5jLmg5dkHKGE",
  "key21": "RjidXnR6v8RxqitNr7qwFzgD48Aa9kCP3D3e5PTurjPP2NYvvJbGmxCihJeLfNeqQWv6d1TJFEbnfszH4p3oAGA",
  "key22": "4Hdigk97sv6LzT1nzcufGYc5M8gEEG8iFkXG3RokRV2ApjaQgWu5nDhoZXy4EVjsrqracroZAQkiLzoWBScodtHE",
  "key23": "2xuWVWBK6Vu19jzLoFZrngEjCBa1TiAMTggmygW2AmvrZvBMLDiujG2tjPLMjJgZqdrMMWt9zq1A6YXiT72YFo6s",
  "key24": "1zEDKKsyGv81DX8AD9BWZ6BbVVTi5MQ7EiQ4Ykwd2qr2TMgojdi3DhENvimBynCkfWaFAAEocritTrPYqLHJEaS",
  "key25": "2uWNZDbagje2mMiyuuc8TqtrYEvQxCqS3do5y41jsCKqpB2eQjJKXCxmaKugspFMP33WwU8Aa4CbLWmPdpjUPAPX"
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
