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
    "4k3NeAWdzSLoJpnqKYkLqZ6WhWpLUgmBuCpxPJtKA9CWABaC81FCfJ4K5uC9wj1pPFnievvPurbj26E2LJdZQhDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X6kbHGWKtaq6uhKQNpiCS5ocYaemrK2CMQwSjDS5qJj3CZdpVGbLGYTjRQFWNjyjEAZKUtPvNdsGNJUwft6zn1R",
  "key1": "61f9nFLpcppQFxcWS45tsmk5GcjHWJVCaGgubPNHFmEhZbXTPjQVEF2x2DVVBoV4pQ3Kx8NQA7Ru4MCMSudk5qWQ",
  "key2": "3zYB6JX68CduN3xAzC3pmUiFqGq8xAXSo2JcSaBAULRT62JRBxaVusa8CRZCvDsVEuetidCx62nNFhAYereBZbTV",
  "key3": "2nw8XFb2uCQdHL4CftW2NhARQsgbNvxhb34KrAP2BgZM8DogFFZ67FCBHBssipFEX7VyD658QazTt27Chmbbbviw",
  "key4": "5VkGA8dosnR8WpHHL4MKXx2XZA7kKMibdbx9YAdm5gAL8Y8n1UMN8DtqrNtJuoghnSLZtCuhmBQhAZ9WgBQHMyDA",
  "key5": "2bJFHqeFjsy4cJewfsWxwW7z76y5yosxeeTGBEY8RsyRVoYGZN2ngN1AGGFDn6pQZQtcCmFNsn9harZVFwd4VEcR",
  "key6": "2woSrmc4TXvCJycne85bjhZM1NvG2SEgebxG2EpmNLTtmiZpX3ubeCRaDSt1pR8RSbeHEw7zx48ZrbLRrXYrFDeW",
  "key7": "5cgBXzmwydECRQbZ7yJKsVqkEPKRtvbZNJvfShoJQntaGR3hKwoAr1Fc71XBYLaiq4yahuq5j8yA1vRRJVyTYi1u",
  "key8": "2fcdBVADnccEakhULxu4ycMm92zBY6jhFAg1dsNMvvZ6jmDejaHfMwxp7sLnzirJmpKmWQggeawKsAKsbKVMVLQh",
  "key9": "pLTHAzZ1UnHMGrrspUHkCaMwrWUbvoTfaP8x8KLFmHPyJht247nixwQZQnpTScvFexARpAYDNPVzrrnaNDEKuRU",
  "key10": "tNt9atF64T2fhLtHPGAJY8pyHf2P3jRtGCEUBBgwMdBd57J8Bp3Bjm3vz6sKuEbcASzNxoEfMNvripdZuRMbafm",
  "key11": "9eTqRM6UxE23dWbpoTci3GeA8FwctAPcpwbjzt9dBbXGjaQD198LKWUFtKXBHMM6gHkYdVuSHc7a9XUAnspaxgB",
  "key12": "4ou272Adkg9JvEenjscrwPD2Qp3TKuBkQgq22AU4gpdjCunm7mSzPNvMdJYa3m2YufLfPKUJFdnK75gXF7vqNJpr",
  "key13": "4AZYbdJhFi8kaFdG5dSG6y44HPexGNS9X6WUKqLmc6c28XSc9DSfHJdwFmEqVsaQrXG8SGJi5Rbfk466PEF4qYKr",
  "key14": "ZWUEFXHj7yrsX2ytmyk6TeK6ZGecUds34ottQkiqxdSC7hTe5E5GZkFtwjEHsuU96XZHivJuwFy6JvVUZhgcjVm",
  "key15": "24KRj56MvgjB3REAwtW5rUKLmTXCSkey3ooGN6vJu7STp4BRNvhjcfQsTA3hX9KTEFarpbmsJpt7Z9rWbvEcVaFB",
  "key16": "5MDbM9bZ4SbgufCs6Na8xMhenrGm3Pvoyd3JTjzN2imRtdApsjw6qwPkYLrwjUSSfVnfH1CSC3TPZ9ACZ9daWFJm",
  "key17": "2GK1HUhCp4q94Y9h38XscLxcLfZMEo4bVwxYvS2LKhjjwv2cXZeHQNzQT8shAqX4GtC6jM4E7qZr5NZC5nhRSCXu",
  "key18": "4wE63XWprTTTxNCwRbHyvQcVAzHvnURsK6BmCnR2yvNNCnURRdD3xFKSEuJKgNEm6BHmhGHt3ykA29kiwFJ16YPW",
  "key19": "5C8WZusc7ruZSADbuVgUVeGxYdrVEsa1a3NTFU8Z7gunZWtZrh5HCzJgGGkPD36ikuMGp4GWc3anaqfsSWnhPnus",
  "key20": "5Ty8f3NL7Z1BbcsnXxEEoQGUR5FXtsWKPw8tzqyz9Sm3Kkx6kjULyKcKxzaEG93u2QBvKHUQdXs8nfytV9GLocez",
  "key21": "237zjkHhzQzzat5o6jtM9Um25rpYpXfzHXVcnBX6FfnH4K2tZysKAHhr4aQMnE8N9GKfw9HTiHEooSPSq8XCffLF",
  "key22": "C8gemGuG625KkKy4nLjE1ceB8fZntznvuBce29RErvzpveqbeWCBee8tamEnzLYuCwtnYxtKQmuPHrkwmxxh4Tg",
  "key23": "5KAKizDr4maM6j6EFMytgJKaagPwcJwwqeGYxD3i6PMMzqh8JnTopGA9oNZ8gYksSAmc5ZZ2REpXS4zNCzoe2xhn",
  "key24": "5dsg4MhCoHXR1PaAmhBYnnwKdhrMA1t7qdw7vAdAVyj6ZfMW1TjyP6CvfuGHNgEpG49jxzvX1JvP95TpcCH2nfPC",
  "key25": "46v6pcQfbp1EctAFeQQv5b2JT9v3xQaJaBufrnwDwggH6quENjxHzzUYQcy4Py8fsktsJapNdevBHsug2T4XU1oA",
  "key26": "4tvpv3f9F2wi9Qd4mUNo1sipFDLxdFmnRPtYQ3vM6x4oBLkvpMhLCJZxn8S2orFER2NaZbnhwjPqiJBtpWUeVbNW",
  "key27": "5M64TS16MpQxPeTeosc7mLzjnbRDv8ZaUzgdnFsqeWZQGqBMKiZY1CXtGWQtSpLY1i9P7wi9k6qPq66dXDV2NDVX",
  "key28": "5BWhyDc5UrhxSbAjv9wMjNMTP6KEjAbeG9M6AAzVcyE8G27h1cx5gchFL5AhkCCcAAMwbGN2fMHMW8yWKKfM21DA",
  "key29": "4d5YcCxzULv3BWfWgEaNJx1ou4LGDVE5W7Ziu8nkFGF9mDnYf23iFytRnYkrYVV8g8EHJZWwpk4KL6dFf8jJFXre",
  "key30": "2oUDGGs1iW5PS76rTjERTkGu3VbdhR52hdCpaD1R3wKTBKmPFQ3ebHzAJ4Dbtxp7yTLypHkfLEopDDNaFjEmnTyp",
  "key31": "5gMDaPH1HEmTeAWFt63eYHCHrp2rVfTm5PMG5wusp3ADrCJv6q2VWLpxFqqzgtgcSQHaQ8sobWH2Y3ivS3JNkzBQ",
  "key32": "4kJeRMZp9wgp6k6Zhb8ovxYkAFjBqCEcVZMSASHqEYmnWW936gpkTcGGZiMzeKiVNCPJhxjQbsKAdyhv3JXWnNDX"
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
