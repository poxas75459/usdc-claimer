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
    "5nXdnWRKM3owJGtiX5kz2ZHhszJeKH2k3ZP5Gi6oxv9aqpWrD8iysuaba9gWTXEGkF78hsThzK2Nj3UWHx6ohXtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kCv4YcZejzgHmyvhxkQ6DPrXnz9uJ21kyPdSqPHKjEFCFMiFhdt4DLiF3x749ayrfi36owR5ocwSPuACL4yM78C",
  "key1": "5b1vbojzmqjnSw86JwEzNbjys6a4KnZLAfV8pDMm34KASEXSKThjV2pdcrfXLDbf31qJfJuMTBeuuqsac1uTsTk5",
  "key2": "4S7LBMdxwEmx17121AyEjx6cpnY55RpUfCJCJVBY6KrxhSnckfS1JXCYfAtfNZHaNk6KUT4CEwbaJc5wqazJEBNV",
  "key3": "ge4VV2iaB7j797gcZpzeDonH1qRM863S5cvf3Ns7q5DDeAXbixdDYjgHdGyAGwr4oaSbDywj21QgtA2HMgLW9p1",
  "key4": "3Jiz1dBYENPMukXFaKuUYrDHyGKDEpi5qhvX9giVZfsXxv8y56y4vXbL1hv3fCSPXUFrzhBan4MmWoppmkm8164B",
  "key5": "3DBXcBQhwmjZ317gxazkBRBDxm59BTA1gRWh9SemBGjsRpC3aEWvyoz6Aijyr9XTaVZWc1vhYcdCi8VahdPzr5rJ",
  "key6": "2tzprxvwtMUYw6SzCuUkjAH81TFiqPS72t8EU1CBSgcQSrV7kXcaHbkuF5PK3XTyjUPmshbpPV3MRYfKqmoNNmVT",
  "key7": "2soqEUUo7T4QZwh4YLXuEXGksQe2ryfdaxfYogsn5TXBHYwoJHfxaR3P2S9my8Ky1J6sufyCEAxPeqoSVXr2dwn3",
  "key8": "4ZdKh1Ytcr47fUJqtCpL54aQXYFdmyGb3Xmfnh3vjyyuK2y6HpQW9wWoBeasdSzH2vDMSYhxYsVvuqZ4fDWyhTes",
  "key9": "67jadSeEgVracefRT69hHkAucugndSLxeoTkJjVNRjqp7p1i4VxccNzVbgH41fZwBz78B8wYLKuEBhCZfudUYezv",
  "key10": "3NRYUm5KeFmYNpBZNucawLWWu3jQCsGWHMeyauPJM97oJQLvEdw2HhW5WnqsXbF2NH5RkVCbrQSitZBeMDM3XsZc",
  "key11": "3bDZSa7RaXD42Ltwd8hzPK6WaUy9pD3cdYVJtGpDwMcfQDcn3zAHhq6Ej8we1Qc7MqUHvHhR89iSP41uUXgRYjec",
  "key12": "3mMdQdUsxYqeRXxjJmQznuvLwz6Q4o9Nj6XpEgCvbH5ftv1Vnjpj8pW61HNz363E8obdrvFuwC5qwNe9yZkRQKrK",
  "key13": "5fPd2YRocGWpLKpvVq64ww87bQwbAjt7eZBX8RC4g881C4bNvuXomme42U89nEXdGb58zCdTZUC3i59kFsiS1d1b",
  "key14": "4P8DFJZ1JyBs4KuH6ybj3S7y2vX2T5eXHq1GaU2R93RzKiMWrpYHy1xko7icMstp5oLTeS2F2wwnjKmaX1kr8JEc",
  "key15": "4XM5tgGhfAWfdUdKAxTxGn2Vb8mWUhqtbnavthCHRPhETo95PyuQkten6YBWRqmzakBzLbNWsaDKhMbzPVJeDKjW",
  "key16": "51zdLZjF8j6nKFHFVT7r34hyTXhnasPJM5P1SML5ParJvDHFyQTDvC4y7XeKBnLPPMoV9bB9TWL2n14XFKM6pA1G",
  "key17": "4LwWbvHq9pmSSyXtQMFMuw7QZSAApw9Trp2ZtFWzGxJhSzQ9GPv8gNGsmGGM8yHweTCSKVwdSokLBRfoWGy5LNRS",
  "key18": "YranfpeYd3suFoJHCAj7bHqYoyo6qc7UdhcpmWjco8koKeW1aVJotGECZ6VBGTLophtR9vwJanzTapszHiEzqzY",
  "key19": "5JQstHiwGqC99o1Hc6mH5bvDNCjBEDq5738snYuqiXX1Z95JaxKyhakPfq9dVzVAVaBpPRjw711UJbD3fuhPp1xF",
  "key20": "2wpJNum6zCCiKVYByvPbERkJ3yXbiw6kpLKFsmKYt9Ri4AKsbecBghtC44CZJehrUvafR7LBbcArYLGLDads3n41",
  "key21": "4cDiQGSuEw3qCWBj9NsYYPmPK64agGnFbiBJc6nc35MDuGkfMpSDMTWNqss6XscsUoJM89qeYZsFwdbxXua7iF8Q",
  "key22": "4MUuuo7imqsPnLMqnCb6w2jV81sPW3oCfSFRf1c1irksgfHZpZserJwhk3WCQGNQHpVT3dtuk2ZrqgVpatdR5FLz",
  "key23": "FzzvQRmAo7gs5kzhtPrmAwgYNCh5xK9Lm76KKDV516hJipJE1Zg9hdjRB686HqA2m8AsnSbT3wgybtpxypxvbFw",
  "key24": "SLP1QQJunxdAAwD5uR8PanEYxfGqW16cwW8hwZ42xsMTWzB9eou6vkW1UTbhb4D5GXXgLQWGbGgh19NKD2nqaiW",
  "key25": "2u8CGsTJRqkYJL4SyfiJqnRo8GjxDRLKwrxjh2izKNCgRCwk9BSf71PJGhdNj6QL8spwgZTmpXyx7eWKBGcY6oeD",
  "key26": "5BLJKPVZ3ZhJX8nu94MCWTxJw4qdZMm1Z8mRnzJpQrhnHCNS87aDas8YswnjVfcjetjUaz9mTrHmgcXS5mVAXt5z",
  "key27": "4xFcysMgHtsDqNvyoSev2XZnkfxVTDrgY6Uh7Ucz5Pv5wddmnETwykGhAcfxP2tduT7UqdmKDQEYizLbootbo8kR",
  "key28": "4QNta2t6dYwbRxEanuh1oUnzrTeK92Hm7r166U9waQVZ8fUjeYTB1Av4DmALTSAPPCxvwGLSjrqLLBgcCNzABsxT",
  "key29": "Akiy9jxcSndMEgN47Geux1PE7qXc57EWowcq8tQztRyzgTvENVtbpHMc5uUnMTn4dXrMsWndf67h4PCoMKQbRb9",
  "key30": "5rvY5g4zbrmzDDDaupWdV81hJhnkhgGiWQHgm4jGJY3QdVVdGmG2N8HKj66cd36GNrpfhYcnXCDKL5hM1nmjPV2A"
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
