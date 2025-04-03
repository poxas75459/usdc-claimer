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
    "3am4WsTfBe89s5gKnC8VUecmFQ9Eq7EG6h8wPK6g7Uvnr3Wyv3vzX4ezzYg8Gb2FABA1yq3HUBnhpVdHyWrVu4Km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RiBezmCWsRLuxcLe1Cpn8cwmLdGpqVn5774Xq9bZuAoyfCL1hQdVCj8rBC2Yh9c4pcViDU8bZJgQUnNVgcjwYhS",
  "key1": "5aroHUzWypYxAnHtMNVboipnTjXxCxu6cpyQHZ9HrrL58EsUGHcumAGNo15JtagaL5PiEvkctxKAkw6GqCsPFGBC",
  "key2": "5kUtdk28Ao3n1RaCB8WpbQNbrNUPoJ5vThkW9WcfEBTP7DtCdVRYVk5L7Pp6xMdGeDtAmoXsfrEVAsZxTdKY6iMi",
  "key3": "4FQAk5LHoLCDW7wW9LbFp75gmyhZ5ZP1HZLu3HRn9ZryyaVkMQYfSbA15xxxgvz8QwdzsetQpxdcBXuX8vWydSke",
  "key4": "4vF1HVnmEhvEkb9DzzoNayYFpFgz3jTxPMMZNuvMqxnMS4cNcZ3rdUFBCJek1Qg1vpKoXzMGCSBBJ5jvVYKGQEB4",
  "key5": "5EbCNGZXEk7pTBRJjfwJDnr9BZmdG5RQoPWLhfwDXY32BvWBx6cD7VxUsvgKSh7tNqPaVgsMfyrt1QB8DrZT5cbz",
  "key6": "2dCBDG6XxR9TN4UhtCYCQi4sngh94F5W7Lb53kye4BmQXjZBgADurh8zuXJEx134wz2FQrmNPiQyyJ8JapbgbNZq",
  "key7": "vys6EgaoPCgwBewHksUP8ZeTMsoWgNE5WzpCk4ARQE5zbKG4n86rPa29WCLBAEwX6bVWhEyeNh8TPuK7bo6q2i3",
  "key8": "5ikzT4VvgeBiAyBGUhjTVzNJ8FQZx5sLLrGkGnfjn7fXHnS7RGrcgPXcmmhybunngwzgQRn9jZLZVR2swZXSV8LJ",
  "key9": "5hLA9i7ze1FN3ihynBp2zifasaujFjDf64QNnXRgYNPwQKKDVTTngaf8A3yhj8v3bVpZ4gmN99tUmAUaxod7WuKp",
  "key10": "5bNjW3m47gLkA3ynQ5C2rcQ1LHazPrf6Jmgy4TjpDu2kH2z6UUgxgYEJvufFkNhYK7krVc612YfhT3MDy4zfWSxv",
  "key11": "5XGiYpY3gDohouv3DWQEpavB2PeybUEDrFSfZBVhioPTbetTb18TJKWXR1kQSRhYRoBza2EsUNYxrhZyCXn5LRxJ",
  "key12": "3TZ25DtqC2jEjvykrMqKK5uaieZvhJjtSU3YV8fNNPVWd9b9PdGRd658TPw9W6SPVjzcr9EkihCbWEaZuGchkFQd",
  "key13": "Xy2vFYgkyfBadKq4uabpZ4Ah3BCXJuY2shFfyBgUx1fDa3ntLsGMWrKPa5yBYqaVzeHjji8JbBxWHG7VWYRi6jB",
  "key14": "3kQiBnxUnRiHwbcPohAXUR7ohNDt3kezUyJ4ZegQKwD6ozJVZy4Vdvra7Bx6k16Ni7UXvRBZnVDjhjJEUkc5nnd2",
  "key15": "pD1TbhBvZJyaNMJJtuLiZeZ7e3uc5cR1uFUsAxB91YhqPtVrEKrvypHxpdNJewh7erCRdwarxggMNMHt9h67Few",
  "key16": "2KBbPwkmwJ26VoxraB7eURUWPs1VQ6rwHPu28ogPsAmu5kDimAkwTkhtuHmGvFrpQudXqLrCKeQkCoTNZq8Dfpsr",
  "key17": "kYR6zhxuHYKM16iUepecyMU3P6bu628UmfjDo2BJWuEFQoPYigPu6MPc31scFQb23yyJq5zxTBbBtYnSkkQE4ci",
  "key18": "3XAPz6kHZEu3HQSuY3KUvHA1dbT6TYMDHXiivxZweFkzKgAzJac6Za9dASihjm5RdX7xoAFAjh7C8jnSTAkkAqJ1",
  "key19": "4Vheyf2MSvg4JjUF1K939f9ABbPDi5sLfnf3QnrMJ81qCQ4rtjGaRNXAbWPnTQUABZHsh9cn9EF3yiXj2Hranwxq",
  "key20": "2Zip78s9ZYz8cwmLxzySkGho5uvz997vmKcmEsZ18Rgct9h3zGBa2VV4AU8CQLFxRRJaE5NBJXzQa2GABhbTAAo8",
  "key21": "3MutDWPFRyLCNoThMtgkhBUMLyhVdEBF7bTULQ4qAVnrFRK7araYSYHcTmEuXdT31X5KfGsAt9RZxxyorFRpdADa",
  "key22": "67E9RDnHRYL6MvauyuNeC7BR7HvuCUtC1ZrGxtdZqUrnDS11U4RYr1ryr4s7Z6ogpUE84J9nh6iFqWuGsYsdNEPA",
  "key23": "63EbqbETezLr6icAfgCqqUhC5Kh3Y9VDFvevvgYzoXr3W2bbkjGksdP8GXeFy5gsyyL3zS3sVFFX23tT7CRBXJCc",
  "key24": "23tsZJNZPohCF5aDh1P2WzKsaKzji1qREaH24Evhw6JyaC4tafHZgdxLP2ic5n3k73H2orq1VgCJZvR9PJZpeS9p",
  "key25": "9B1rtgKYSd5k3exkapwxoj7qABQM22YdM2qeQR3pbRzXm9wi4gvSGmrb5zPUVWGPCAskVH2G8MfJichdsvtQN6g",
  "key26": "6KV7kioujq5mR6rEvtgbyXF34FJKYbjJh5QgYgLuPdbHkttLwYu3UNSzT2JgSc2WxsFQcyP1Pqw3WsucHbHyn2C",
  "key27": "5THeLG7MN4Vtk3oqCRGSrMe98yqHvuvnqS1GrnwEq2XH6jSDa441sQTCZNAcbwW1eVjZoJ7y9jq4KY2NyYA76wWn",
  "key28": "3aDrtoBgBhQeaTa2iCu8c1KNECE7Tttp4chaQMRrNmTSWcgEKWzRq6UWz7y8FRPwFPxc9zTv34Gyz5gj49ozrVfA",
  "key29": "2hmYPcTnTr3wi8DwBdg81JStLCcqBbrRLQhZTM1LqAdRb56yczcj7uGqC9iEWVxotF2ex1r3YiHABwGBYTCf24YM",
  "key30": "2LmNLsammMzCe2VDnmMZs1UpgfvcgeS861ngm6t7nDKUWRqS1Vwn7zE27A4MdEMEJz4xLLKcPAUUGZhduThWk4tF",
  "key31": "5JCczM7Ajeq4MChGpQ2kFkWgC6hce7cK8eSP4N72Kmyb67yH1dEtUfjTz7XrovPnE3uPx9ccNzVaju3iDjG3TpnH",
  "key32": "63vJ9nxFc8ZAWMEp84DztT9pZfeCNU1WfYWm7LaTy5vjLGpwRHEA3G9xybndwpio5vDR15u9QHUsF4cpRSHieFat"
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
