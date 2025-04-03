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
    "2U83C8uv3Xu7YPZ6RcbZR8LaeTVZkZhitgjVYKAA3StqPPDXFEWTmrUkrKjMTqnd1JrbgNiW2qjqzw7rLSyVBw8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39PQ2tgJQzw35kwCZEsNkxXHViCg4ff654oLM9N33ZjtpjQTycCSbcQwTsdtkyf1ntMbwfAWsZUBuVVFZ4rLF6dq",
  "key1": "apD9RGxsdXd9Uz5REVojZJAgSkWyygYHvScF5ig48fzKyZ7im1LJ9m5PLCbRocCchGQrYvZVy3jAYqLos5mXbPa",
  "key2": "4mcZcQLHZjJfu36sZCfAUwj4T4ZWca1skfqFBhsrTKCTDUmYtyrPZKMsq98PdCDt5W241PRxhZN3zqghzSsVFmh3",
  "key3": "P54EYdH4RFodzP81RomVQKj54w3ECEfWsxJCHM1g1qn53VhwN53uF4m7ZyNtQF7Gv7u3eVo8VfRqGxkzLhx9bDj",
  "key4": "56ZJfUaVXjNSEyqgqWAnGFmXYwKdztxvFu9fYSeXMGzjENPL4d5adyZfEs5zbkCnJqJj4PLKwY3GP7HMaQfY9Fy6",
  "key5": "SCbVywwbNquxH44RGu5TCuWXQCt4BJQsZDqvvmJCs2PfCaxrXJvg9X77BGJSbqHWikRfADKeBZ3fiheSkTxi1Rw",
  "key6": "3dPUPVh5bq4mKesbYbfUp1bTE7UB79HU2cByTXUfb8C6LVW5XkD2BNxbyPMYRDRHfqJxETU9Ph9LhG3anphHmKtx",
  "key7": "3kwizpA6q8qVaLdNvRQRWbKtGg64JrwajgHTgf86EywKtLJaUhkYuFq7qwNW9FSFgNNnwSbBu7g7Z3fLyBKUhBdG",
  "key8": "4i6NWXPdGoPGGuPh2zreRC3mRaHySpNkPwh2URETYcN724sRaaNkB1agtKZo8FX7eKP5un4KzWZiuQ6A3dHGDppb",
  "key9": "Rrs81Dc6vEpHJUUJck5n7mrAZiz1RRmhH3Tf79SWy6mXjFcKshQjaN9Tzqat5uChWgHa1mnY9RkGWMrarw2YZAs",
  "key10": "2BxSbgD7njdMZMCa8cD8AaRT2JWK99TnvBVni4UfTDuLcwt3tbwDBnkZGuL9WjV1vQ9qRtGGdQSYd1YUhcFBbywg",
  "key11": "5hcJkrMfDQ8MQ6LwxdCQn9FtvFCiMTd2Jse6qbNBdCaekyCmTSixVr3oNtS9d5EpmcmwHKL2C1DYqHgJrG6UUoaq",
  "key12": "48BDzsgoEUUi8qcFKBvzjtoDugY2Z5SfWUtcrzuC8tFqVctFn1AGRRQHzheN7PP3zGvGWxHx5QDmwBz25uefy4gr",
  "key13": "5GLbDd1xHDP1RTMiDLrieMsRQnUCABWVvpUreXWcumw64QcHfFUTh5mfVd72FN12yHALBH2LbALRzy89NC1EQB5Q",
  "key14": "3PZtEbmNHmyuq1ic8qtjjnDy2GhEc7G4w3a6fnTX6JWDiWJJcSZLpd75oQDkshj6teq34DGRtPosEvCa7zN6PZho",
  "key15": "Sr814xfUmq8XaNSLKftyTxArZtUiHsXNoexXhYTxndX6phWdA8ueYLNe9xbK4tW7SZRHqMbnwLN6rJufzdzcXyU",
  "key16": "QicrVpxFJxRvDN2YVtgUAEPfKAoJfMzXJRBmrtREaRTDo8D3wJ99LSTHwCHMpL4tzNDv68C6zqP7Hyeerp7YuMf",
  "key17": "2LK4YuadXWrbAVkrgwMbqMoWVDaymiE7d9GCAwf6tSSuf1KcD7PSXsY79ZkScBN4414EwBLpGNmdMbqSHZUE222",
  "key18": "2eBe1a545YThMdb1HngZ6hMfVsoefB8iAYdrQzNM9bdpQW3TVXF7Z7EuRhi5th7kBjTxw9NnnxZnMJPfHYDr84hx",
  "key19": "5M3qhCf6Smwow1F7QP9khtxc5UhTkiJTVAmeLL5W7vbM91XkJaw3Ezk74vKCWQNtS2tMYKRdGrKnj1dujNnnqybm",
  "key20": "3xVV6FnbZYDb5LUDjGnHZ6PprCzbSNfnohzhoDpTD7anEq9X7VwMkkYu6dJspFoGHcVB5jBf2dEceG68wa9e9JDk",
  "key21": "5kqQ16FvZvrMjRyeRpoF2FS3YeuPM6Ktd4BZ55NEyJfAT7qm2MZBKAdH7jR8pDGy2yZXPtreCAPX2JBEeYEzggqK",
  "key22": "3pKXjuV5kDEDwdCJkMGznguH7gzzvEfoGQkrkhCfA2z6JgueQCJTxjjEWCPn2qME83ZDjC4TsmoADfftQ1YaayX1",
  "key23": "4GtMjMVNqsjLfaRNVy3UPcVhMFfR53WHScsvYrm5zTaWaf8xVFMsv5fytowppgRpDh7rTphmrrAiCuaL99BKsu7v",
  "key24": "DMhcnb6uWs2K3BSgfAkf2VzgSMLThDd5zS4oyf3bKp2eSBZw1urCyBcUY9seCcsUuwFSrzFXHAXoVkcDApew3is",
  "key25": "B3NJhzB7c2CmexraSu4FTdkg4WCGMPEaXnV8UbHK49CB64XpxgyQdhi7MWUr7Ls9amD8SfKWNxCyomoViJtfWHu",
  "key26": "5cQfmhLc5YSrWXP7szAYmGS9CVF3FTQjy9UCHxS9CzEysh1LR2Pm2ziY2BVMLsecEvTizpzwA3Eee3Y8LtqCfRzb",
  "key27": "5hfz1QduhJu2VLuNqwHZ8A988A5wVyhE8wWsL1RNLjn71jYX5rgCvz7kgP6CXMY9QUnP5mcuEbu8jqiYDVZA5BCp",
  "key28": "3MmBp8DUFi1M2Am5U8ZUnBhtKdRy9s3Vfkca5sFw9cfZhMCd8kNn5kugNAbYrAupFF3AgjxzyuRemPLRdwPK4RrT",
  "key29": "3a3tDMYehvrHVaZmK67Nu95cGWEbjQe8CwT9fqAaZgnQP23L6pMN9JkgwXHhyhEbFCdeYBnhHfAMqo9ZTyRvhFch"
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
