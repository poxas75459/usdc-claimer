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
    "LqjwrHvFQm3JKY4ZCeWzKYHjtjSZA1gNnX12XEDrbeaebc4WbasAJGmiLq7jz3c6aV1mm5Chh1YLCQvgVuhar81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AgG1RnEKUQfgd1xYYwkTZwSuiiXUVGBAKTTDnpxAAd335qaYFjiuKR19hDiWykLspfdziECSKxKsYLgV9zNYz3X",
  "key1": "4Eu4JvH4ZyNTvbyGCAA2yiaVBf3CodAubkrN73ToJwQezmuAu7oneKY2V5MyT322jEEfckwZRMg93jUzThauH7SC",
  "key2": "5pwpFa2r7x5DLcNsGZhfkHH76j9Gu1zW6s95f7EzA6UoCs2BL4K6Z6irBT39CYKTbBk8BKfWGhAkKyFLSkAyNGkj",
  "key3": "2R8wixR3Vskq44RTtC1XzyEcA4qgg3SWFVH5P6kAKov5JULKMw91Ko4BpG9ntjih61kaChdEqeUfc6pekvtw8fCr",
  "key4": "3D76iJvTBBe7KM3VTPfT1pA4aMbtVGoJpm3fwfZbgdCHq2CT7DNPZb36HCjHd2LnXWZAGeFTuQqYGXeqQSEk8yQi",
  "key5": "2nucYRt5piwLhXbs2ERNxrkuDp9sYCWnCPLnQwv9A1aK2TbF9Dha7wMYqcQMSARD2RaJWuJt738YmXkkE9y7fg22",
  "key6": "5EfQxQuHTeac5177AVizdYT76rbZysWddXZdvjAiBJaZXByb1g54JMoueakd6NsB4nL7FWfj7G4ek3nAJAaEhf8t",
  "key7": "eMC53wyz7j9bZMML6FCqQ3Np4KgQL8qewWzAPZfXmgP8ELCx7JFYqmGSG3ocC7j5HJF5d2kDyVmoN7w357poz8G",
  "key8": "5xZhDvxDAkRGQterVH9TagAyZWBkxRTEVS4XSCgei6JfsX43SJBv9q5k4UcoB4oT2KcRfE8BeTWguVXeCzxfUy5d",
  "key9": "g1BtycfirWq8SBaSqgXMYJ6dvxt1sR66fi7P1irJ59M13okSpXJwA9Bu88vXPip5EBgT6jfempU4s6CVZimqTpT",
  "key10": "5WsVAzeeQZHfz2CMNgvd2sUuwwP2UmSjLd1eA1WHSrgkLfbp86MUsiEfu5mySbRx3d1rkCKonm7FpC1Ut4tErvKf",
  "key11": "22UHLbKuB3JXS6NrFsgGHpMXHhCMwPtg4jUbX1axBCCYTbnevHVoEgnfG2dUmFdrosftuThquNkYnitf8uWmqutT",
  "key12": "2VCfTtxGqH5744fddWmZ85vDjDCqzfqYAWkMFkxKB5WcQUvTVJ5j6H5kKCeWoir5RTuSVL43cZuoNiBMwhiGF4JS",
  "key13": "5T7suZfbvRmqxvZ6xg3BUzFxFYEeecZLZd7bc7Li4G6GtXpJoeXxXYAtU1aij8obBqtjMvi5aA8J1gDiEyEhygn7",
  "key14": "5BjBzW514uRTRDv1XbyshotLXM9Fv3rxVvc8aeQJNArGT29WGYQ37hx3MgcQr9VG4cbyrRaVsXc4oseUcazdxQHx",
  "key15": "5GchpNCuWhou1XzkpjNvJgYUKdruXuYDAMw2WLLNVzSgGGsxeT8DCSo8baSFPeCDvDH9qfbu1XTM56XuRm6bM27m",
  "key16": "KfnGX1SWgA7GeERMtm7CexrRyqBLKDmy2ZHo8X3M3NVeNV5VoVKUcTcUAJtYNRYftyCStsifYvGKTdcXnodPezB",
  "key17": "dByGpAmbWRcmJE53ajY3MpkwC2CNqmH4aw5x2RCNa2JJfzTnd7SbGThMFTdTKj6Z2dh7tBZkrHFNAaKMVpCgpVx",
  "key18": "mtCqLk8zb9cXJC97Fd6ftmQhWivS5fu6BWayPjHgb8nPu4B5rwYmTC55RhTiKY4nLKmk3nZGFgHgcxTrU8EU6ka",
  "key19": "Qo8qWYTZX7FuwMZhCeTjbTYbh8kfzRmhz2DRPB5fRCQNDzixJi2iJrbNVhaLAuVpj1Snhy73BYRUDqeNHFqbcQ1",
  "key20": "bnLabK1CjrdrkRh66dzXM8Jx47aRQpoDxXna76NYXG9inhW43mwipQnycAQD2YHSqj2uZYBMpmfjL4qeWpuPUZv",
  "key21": "3R4zpw493ziBXnmp88fWbwLBkmZstoLqu5spBCqUmzzANpU543F6yLyfM1GrYUNRQPZbDz9hhNMStyKQ3m56t3xU",
  "key22": "fjXtvcWVecmdyuVJNYtGVWagtFNGyVB32VeAPi7DhUhTUiCVaaxbENcnio3iF7YhsmjxaRWi1NbxitBgZkkCUmN",
  "key23": "3BXho8o12aNhzuV2vyQyjNVutNjRxz4uDhotsaii6i1UMEenWMyu1CQdzebgvDfDeb29jEcEz7Dp7RetgTaFtjga",
  "key24": "4WebjDUfxcbQYU8xv4mgUtqtHvAxuHEKQE1KzLAuMSximorojEfn3BYppR2wzhjGWSSkPavKymH6wbUs959bdbtP",
  "key25": "5CzpY7NTKt5Q5zAzAQwiJeKQTnwzWtx9PTCqXkrzEWEb1BhzoHeqt9FwqV5kmUBU1yJvsUn1Qy53rNxo9dKQ2f7f",
  "key26": "58MNsyJg5FQkVP1nScxQ8Avrntr7irpPgCisYVZXsDj3Cu6kYBP3TwS99RLQoffiXN4UG8gNtGNTFk1tbJXxykVN",
  "key27": "5aq35RbURdak6hUR7HKaUjyhHiB3AsGpLrMqdrFGSKxxm7wqS5UcqxomFikSSut3JtK6MbiGoXHxoA6nJrJVWWUi",
  "key28": "3a48CXYPYtnAqH29HkrVrBqpX1cn1yNjXx6q43mAR5FeosfAvMaJqCQ1n7RMcAg98QPPege86a1QwoVPCQzpxd1D",
  "key29": "44DJ3bdipb1RREFxKxRQybSC47mN86uX45aREA99tCY4Yi8uQRt1V7P2rJUYMm67tpsaqAagj17tvZgpFrkTeU2o",
  "key30": "42373GF2h3gkwue4DATLirQGCDN5upQCrSm9zcaRaiYytbNd6cqo4QurEpNTy5px3ERaS7ncDkKFtMxsD2RgDsAZ",
  "key31": "5NLi2zXzCZHYyGcBP3UoxL5itc4foQ7eSktxxvB1EjwqdPZTwhS47mbd5is5wHEQapcEwiZ278w43PteCubjWrrb",
  "key32": "2EPn3D8mU76PVDjKdiu6NVYKCP7iWbPQwbrRusfPm5xJh9wLCgJmTQ12S5oGWywnwLgVRSz7VQnVTtNwM5mPRrtu",
  "key33": "36uj2xEpmoZfspF3KTBpDTgmvYkwhdkYg9XKk7oAWqDH9hhMQ26qxmuJxNvcKvMz15UrKZakboBm3EaYpxm2mxe3",
  "key34": "3sNDvoJzDPZqw6eGGcF41SapBAy2jEGjQMa6AHhUNzE3ZR64qT5YZyjU3k6iNH5eExF7sSZFe2pCX42VkrC2xgV5",
  "key35": "2TqjDDK2VTXEtrKnfQB9AnkqAVJTsK5CXHSR2udxEBtFJJ7WYBM6Y9wZd6mri8XEqg7APs3ReFk59cDcmk9zH593",
  "key36": "22cY1rPKMkYcsQYLvZbWMroKybwsGmfGVfftoUyjQgSHYgzNyQFE2pR2NqTL13o8JbXETKgmYwXKg1QgQ3sShZw8"
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
