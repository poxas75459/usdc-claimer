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
    "4xE6AwFF56UZKJ3ex7ppjVrPDxRb42RYqXYF4aNMDhFyxc3M7fWnF7TyjRAcwssr67aGhCymfFMV3aBkUz65vhdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4czuyNzitj6DPfiDeAV9dyp6p746YrCVs6qRMDA8rGaPaNDzpLLWmDRMaQcApMuz5GTG7VUQxMgMMRaiwi1RL6vH",
  "key1": "32TcXBSXUQM5HtiNid2fUQSX7mwsDTzagXajmDtzcf8wFWEo1MhZ84677X1PPvTQ9gNWqBu54BnfXo4GsJDtwv3H",
  "key2": "5b7i72FC4NJ8NpAaByhJFGeKCDFKLPs1xaUE1rDHJvah3Wd5iZRbsbQdVn2mhQExAFXdxeRnZ9hqvtCnRh2a3XAp",
  "key3": "5MQkFfCY3UUxksoqTc6iZroigbvt11Hngfk41EVcLAKnUZtft4rAmh13aKm7ytecP1Vq3e8zV7LVGv84g4dPZP82",
  "key4": "3CUip6273DF4NpFNHxbqaTzCS7hyWme5fWjo16kQj3JXJb86dNMgQ4jC9b1AZaZoFfRLWJMNuNUgeSTAB1n1RJp6",
  "key5": "vwNnBoqASEKvDPM9o34Y6augwDoGVqayKMbem41jJisvH8X2FMgZgkEvSsKWQgbZvdRfcw1dYwwGDGTvesN1qEV",
  "key6": "3BZP5D2HkH9Q9g7Vzqi6BtwRvvTYDX4oCLnthEzJ8YT18joaNfbSiJ7WEKH637ctv98TdJ13umhxR8EghX78BFum",
  "key7": "52j6KGHn9atG2NwPSCpZF8RvKZ4U4yx2GUgCvuSQDu68JbQ561Sm72cxmmXRMpBprkL7XisQZ6pB4TuKnoiL7wxx",
  "key8": "3zk61KKu2H3kLokHXWUCDGnGhzX9yrFW3FxSkuKbLwz8xw4YP1uZhgBi9dWitUNaAVcWcbms89d16sZFQvmXkopu",
  "key9": "3VPiTMBSqr9Ecg3VpPE6t5GWRqofxf1mfvig48VwLE4YTpZrnwKGAbfJPbGPjQGgEK82Y8KWWrzDFBa5yqzY4ssQ",
  "key10": "5wEgNk4i1hHUkGiiz14a6FhAxA9A6TpxR14f9bGFuvhgS1M4gTVJnHGaCxAwdT3aozDeS1zbPKSJdUzew5efaWHK",
  "key11": "NvVALE2UZ2KQ8Zs9hJoTqjmkiCmrrSyrLfkriPWh8tvBoAGb8UNfAewZLMKAHZQgTLA6ogxHLze4FRxJG1uVagK",
  "key12": "2Rn8y5FSu7D416ne3eAFPoqmWsjbk8FDinKEs2MUwa4mCMmpqjxeWhBvEiJqzNntRG8HCPBoQDi418XHW8fgpPbw",
  "key13": "665LtSUCJo96ZzjVtAcVSBPXEpn76HJRocQgTux4hBjpjU4RJiHbo4vTcEwLDc6Uc7QFpgSc64qRckFuWwJs8zbN",
  "key14": "4o8m4yAoAG3SX457CKK953vR6XKFHRQVBJaEHQu1KvFqRWkukUjTmRWpobX3R1CtatGQZkG4Xb9xa8friWt8zFNi",
  "key15": "5hDy2hUzxNhHgG3s2iyNepqN5E7Rvz2MDsxNqfRpM8jr6j166y123UU6MckHQV24FFV3zzTUvtWf8dEVSAraTC8T",
  "key16": "5Di6goc4qDd83UyoguUvEFUaNJiBg3itiDuXEhBBe8nmxy3a2Hr4Wqg7WegkGbyJVEqdvw3M6VNX3ZbXd8Kwo9Pw",
  "key17": "4dqHV5Kyr2bGBVJ34hMWaXuwvbmBCgZpfe4kVDttAQKEorGFAYB4LRPo5fnNS9JwwB65cCMSH1FUtBcZFTuPN5Ek",
  "key18": "35Y7QCYgjDy2Fqf5SQX38yV6GcETL4avM2c3m8D9RHw4ok6Tnjm1v8GihvvaoWiGT5wsQPGV6GXvV9Q2vLGieFqH",
  "key19": "2wGbmoQPd9yocH7zN1WzbVop2CvxV4mqK17Nes4NSW7s4fZJ3wqoQc5wRiLq2ST1X82EUGVH3XmE4XT9HwPRuEkk",
  "key20": "2VNm7iDYY1ym5BSdNCU7UR9a6dUtnTCaQ5wbk4fX6P4Wp34WYNBqPxHsZpqK44rY5Ke3tRNeQy958jDeke3yEXHm",
  "key21": "5cFAHVgzhTJqhgiD5H1uwS333D7kFnJunYTcb2i2bKDLB6HmartRr8rp293uSdhTH6X1P6XZsEyQT34n2eeGnZDa",
  "key22": "mA8fqKW99zagktZRVru679yz19z9J1VyuT9F6NuQ8iMabBjR5hSZa2Z2Vfcq6B6mDQfXvRK4RxH3rMzLdXz56KS",
  "key23": "5NaLz288CUAorJ5gqWwtPbwJQWnucKcAEtkf7sba9XSAtbTPBNm8k1GNuaVj7YXURsYRicDobgzHQE87Gq5kV6mF",
  "key24": "2orCsHs3suTbEJXENqFE9A2a9FusaiRLisNsqMZMQrsZRb6tBrAX5SfABoFZ8Y3Jv1LMjU8Th3cfeT6V12yLgqjg",
  "key25": "2exYpG828UvW7za9K2aSaUEL6d8btnNC8qqWZk8FSsGmEi1QjH4Mmg7qXk2kdXgSgcUDU1gzGYBESz2M9qA3kn2s",
  "key26": "2LCehFwG5oMfxQvvaZ7qpT52ddGfWf8nAC8JaBpvJ9WagFGBRxz91mzkX1pLQaX4sTjvDRvc8BkV14zf9uSjofD5",
  "key27": "4u6gziQ94gWFBaxT1f7EBypGJWPhoi3NtLJpaD7duSGHKbcPiLybJ1EiRc1sdcMq9WPo7UpDiWdV14iRWTmEz5wK",
  "key28": "329PHP7qbBqzjEvixSjvfvd2Sbvo7LsZ5HTMThh2YhUeSBcsBxVU66ijBZk65afNN8uQXbAxg3LUkZXK9my15B9a",
  "key29": "3UBEEiUUoR8VMCvNvmLuixWyczfAmZPysTmGXCyYhckYyeKdkr6vgoTrK1B8gQLWx8d5J4bquT2dCzj47zDyBGjg",
  "key30": "55uL8hc4UTnnHNPbhyVm8TGXkhNenHfRro8gG5Lr7rLCN2fA9VXMz9cpXtRoQ79MY2RYEHSW1kH3xLV2wrMqrbJG",
  "key31": "3zCAzzLxPToCFLh99BbGk4QjuP65H6PpjmNCk4Hn9Hu3RVCMxYh67V32VgwYjG7NYjWe58SKAakp1a7B88D79rr1",
  "key32": "ce6sZnx3hVw3kyLr9GDQHUbCXGc7TKXzB2uPjSXUjmV4K7jfbMZT7MQ9voS8xBbz4tPvvJbEsJcsG97ptoEcmdf",
  "key33": "7qnt8sthhWzJfpNH36Xfoe6b4ggVyBXBRDxpHY5CwHxfcnHziPv9Xe6XYoZ4EEcimipUCP61485JwmWmoEnKXmv",
  "key34": "4LHU6hg5JDsUCmYxKBhCpioXoLcMX713XfU3U6xJhT9unwzVJjUQFCpaGeRQKmPgfi5NQzYSq3P8hdkdr1hhhnnu"
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
