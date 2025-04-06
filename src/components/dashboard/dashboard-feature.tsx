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
    "5GeGv2vwKXnHZS3PvM5jpAKL3LXJiNr5UTAMXUQtKHxkwz2WJphpAxM4YTMryV1kv399ReV9mU417dVgx9BRp31C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jUAxAVookyrjgZRbqPi11xH1TZpwpehxkG7vzhZmgbaqQ8tyXyikR516NazEoWQdNdfkTnx6GHen22eB3KogESZ",
  "key1": "2e1GmFLRBTtxX2fvzMYb5zn7WtqRz7oDwsHUUC4t2Fu69cGH8v6R1rMaw3bTmKQCTseAddJmEp28o62QxnZABFaZ",
  "key2": "2sx55YrzqRPiqAVZgaV2qGHsGVbEPTQSrqGsFxcQZUhSrdh4bukn1P4RcstmQH4vTD3i2Ds5kzbCC8eXkh363QfE",
  "key3": "uc8wqAN35wL16mcHvyeWKji5QpZvktxYCE8fRoR37PnS9GpWeHfztYASYTE4Lie2UyyJvfrRitmn2URku2gGCiS",
  "key4": "2MhbLwuJb4mFxT1NM7mXwYrr4e6SQgQpAUNBq9yeivGzayK5FfyMCrEh7wgfXGoodrcDEfDkyqU8M29r2oyoyzvX",
  "key5": "AJyjSejDVGZ8zQBUpgpmMyRLRkfvvvzu2JJgPERARhfMv1nok5EBN2uD9q65YmmfVaRfAGnCvM9Z1ni4FMyabPT",
  "key6": "2m9o4LVmhwrJ6cxu9QTZ32kJCN5r7cASY5VFX1DY5cejTodXS2d1GGWTRguDDWQfT82bjEJpH2Jav3EDbSGdMBpq",
  "key7": "WetYzvdxVNfLGPXk1JYZwh3djjqn9xhxKzHcpa7aVwmQkoiBNXopHFaGg9howv5Akdcv5HbDe4tP8m9ULp4LwnP",
  "key8": "3FytALnb7izU1e7CSn1yXCVwdw5BYenm1TCDMES9bncdvZzdNXQyosSwVvkYdsAHg55yt8HRBLftoSBQmJm86LS1",
  "key9": "3SqfvuV5Yf7zVFCYu2po4injNy5Gxd6DfUcNZUTvezLq7a22GsDaZdyrBAkjbg6jmTqxwLWtetsZaPqd4QegBhvb",
  "key10": "4VEAruuC5m3ujRQV8JQbhk7BJ75trxe5nF4APdLtqHssLiWe8mrNzVqxmmeW9t9zowriaY2w2uxkNFSjWNQzNYSD",
  "key11": "4XhxEPEhau84svtxTX973gSjCyazUZD2mZ6kZti1pi4qPBTsNjRyNnuWFp7sx81PKAygz42JsgKwNST8hNbVCfDR",
  "key12": "4sq126b3dGhQYQrUxrtoVzCwUPxewZNKdyYWCSZyn2H35tveN6ydAsBNp3RqSPakdALtR5G9qDgaKHQo9RcZ9pLc",
  "key13": "525bNf8NXDymv8fogz2S1w2DDVqWN3RiVDKGzHJS5RtNNwcFF1AkJ2JvPCXRvSo7aNj8kC4NNHf8udma9soRd8ut",
  "key14": "2H1rZfE383XUAL8tqURLgCrX3eUHswHqudA1D3Z7TgCs8cvAmBHsKhhDNV5TTTMz1fSXU3TvbqZosMdMjQY9CeLQ",
  "key15": "2r7T1jywkWypUBPcQaXu31UZ2vUnbLV5Z5wAfjP5QWLHYdYyT7d2CAA1Vr8e8FaiWsbSEZUfFMbaWepedzUh119X",
  "key16": "4d7jBGAFLTy5TqjUJJjwzGdtiWqbDqX7GGvnSu3Sk22dPjpEZ5BnXpfJPd4qeYhNuXmDUvwYUU6USQGX5J9xq4xJ",
  "key17": "4gfdGWdjdunkYDi76XNTwxTR4d7fRsCn3WqVdkQoz8be89JGikapxM9ZapezYYZ2zn19URYU4TwCJmnmpLEbehW8",
  "key18": "ewPYfSR6k7Gg2J9DZhtaNPCayaBajb75Rzzf94KCQj6hK2DpsJFRTUU4TsNMZPsqcqQYVQdpGcxGViWk7ZcWv3u",
  "key19": "3Zz9t1RVejuYQMmVsrqhQeHraFPvpBrAtt2b2LE668gfGMHDwU6REYB3gcX6bt1Y2T2MMdoNfBLWPYkynE53MmAe",
  "key20": "4gkfvdKdcnCzMovUuyY3i5UM8BsyVzkLv5nHiEC59mF3GfixurrGYGKBWA2WFkmwPRk522xu4ZtT166bjaqmJWkS",
  "key21": "3AB3mAFywHpJiEmRhAZw9aP1sKzT3XfNnQG8NFLbemiohYni81ChjpwFLy3dfvbsuJ6MM4aRV4CDFsFMqf644ZuY",
  "key22": "dPnxFk955QATACsLK8HieCDh9X9otDCh9EFifRDZsCHDbsZCzeYBG6JEneLz1G2guTjeyxo3saV2PkZd6JjBPjZ",
  "key23": "4DGdRwGzLZjhHFu5csJV1eNCpxetCXcQrAjwu52FBxKpamFGUhbhZ6sMV9md6yv1H63CsjgfbZwjYtZdwdbCfieX",
  "key24": "yJMLTfYduGusrG3xfedFwnAf1d7xEoaoWfXzqAPRXbXK3HpSEBHTmASACY8Hw46BaoX5M9aEBoSnnB5dHYqKE38",
  "key25": "2DJsiC2dxfN8P9uzpPBbzVshXFTm3FN9dC5JJvQk4fsfQDQRGZiM9s5VUzFnZyMh2bFMNuhSeXHU1otrnyQLyB5H",
  "key26": "3BuY9Vm5dkgmgXbLPx4i7GiiTDKGvzfm8grxetDsrBF3wkQM5uLQoLMXX5NTMe5JC952y64PR1BQLRncxYeZGetw",
  "key27": "4BQZFkMcBZvhydTyuUVqyBbvAcJeMHu5rUC8BBEpAzoxDjnZhJm1kBYsotdEvtnpeDZnJe6jXtaRVLWbc1CjVZzD",
  "key28": "5DkHFCBnUqX44enPwrAdZ1UvHjiNyLmp7yjNg6DH5HP7KBeCapBroRAh3sgktgKyT29YhwSYG6wMkz8RxdwknAoH",
  "key29": "5A2DMwvdERKWovBFxjCpG4PEMm3pVgVKD47hFbYbKgnwV8XqqPDdnQox9bbMXZ8kZEhRKahvRzJCZGzLoePGWFag",
  "key30": "WTFszM158Dqy8GDKfMsf22LhqRzH38Zu5dhqRK3GQyLUf9EM6GKiCYKS4H3BUiafZfEX7tCXkh3bzDShvxQirr1",
  "key31": "4AuQxFQr5NRiVtaKubUPpGKcWS1eAoop83LSGM7PYwBEWSqStdARQHbRzZNT9T7qrjwzrXRpZWiLr8BcZZFvxDkm",
  "key32": "21NDqevJSgkhf2QTeuZf8goSL4LBFEfADhU1nPrKYV7qT3qpKhg6hBiFJofwK7TvAv6Vcif5Jp3CwGwdcFPrXb9o",
  "key33": "5tWek9D1LFNCaXs2xuKKWzCLcJKrC1oVHo2qjgibrUmSkdWfDzGowpmkohXNy2nkC5hWCozhBSnf7sPHVpWWpZjh",
  "key34": "ajAy6WeoBrBKDLz4hxr7ocLDGGsfAwA6WNcyV3xcotWNTKCNfEXETRxXvdtoeBsMtu8mmUn7PpYvwHjVF6ydK4J",
  "key35": "4MawwUvyWJAXew1h2Ayk6W7uYHvGazVKFsE2TYFcdJY17Ed2BuQDwjuQbHGjE2aJkRC5jSVjPt3F9cSGedR2ncGU",
  "key36": "4ohYPry9Rmr2LWb91faTTXsYKviK5dNARmBbZm6AwRaH3dE4T82ec5uy7nRzLNu8HGFrLX7oK3jg2H55wk9ANU2L",
  "key37": "3LT2sdGFaxiYoTyqsNFdvUf4mQnJzLroADR2AqNwWVg3o2NYUwHB4xzhLSBiQkRPrfzHBWHP3oS3AcxRfiSsj1g5",
  "key38": "4UvK9EwQMzgSv9nPxe51BXGthjXUecqsiJjRokUJa49vfr9tX3kCvZnBh5untfSb9Bm6efwo6BSgqeTwfNbPnsD5"
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
