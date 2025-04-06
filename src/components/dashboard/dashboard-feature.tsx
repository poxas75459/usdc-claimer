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
    "35CWijbyG87R7ybwYThaeJF215HFF3Etk8YazDd4SzqfJyiNjqiU2hLBiuo6cszT1nb2RMiVGCCHYBiJnddaT3gG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NVvhuYzz62oo2CdUnL3RFGFJCSJsj9K8foGVRJDzQDAmTABjvSQpvC3TJvPmxi4K7EyWJQmStLDegrpgqWsK1nc",
  "key1": "4mMPGMq6ht1Shd5BUhqeFH7QH7FpJT5DjWsNNw6NmoJtMXk27nYWKEizauCpDsd2vWRwxYYbPfAr9vone5NWR1kK",
  "key2": "3sT8BQVbkYuqpeuCEpRUzzF3N3d7DKUALQfj2gLgxi5bxSrgGA3ufMQDhmSPF99rSA8UVfe1SmPMTeGfTA5HcPM5",
  "key3": "6eygakfRBqiM5prDk39Tn1zRRhqCRKUfSTpssqdTCd35n796AFZZYSmxS26L4xQHE6F9jZWqGY6GncctNuHW9aK",
  "key4": "3AXee7fciQgzcen8FwhYG2d9v1faVWHBxmKfke1A7kR66Jo46ExeZargKibM2LQvqjyKDiXDgaj5xtH4xzHsqudE",
  "key5": "22VzC8p1WwYNzSABBdX1L77CUBSaBa8xvVjUp5iZopNxW1g6tgaovm36u5bwiGgVkjiW9DiCA7tFMAunXEnKHcWR",
  "key6": "45LbsfLDx2dHpEMv1jkChaYhtHnDxcdyzme3qwC49QQr2cPM7TyAkbAZvAXjzDP7Hrs27ordf5tKsJVvdFrvmjua",
  "key7": "668seykd3FNxxWgK2g3G1BqW7J1a5hDMarDakBJdqhLVSsLFW2UYWziL4KsaYTUL6SVc1SzpXLJpZuWbEySpk3AW",
  "key8": "4g8ULBcf7sgSWtUmfC5hM2N59MsxUyTMDd6WpQn7PNMK8rijHC8dXuL1XNbMwYGJ2mbWXR1NNLHpzx6fChY177ex",
  "key9": "2ovLzEw8jw6Xez1oWDNLjzCCTx3HcBtfpLTBurL4bjGPrFdu8aEvQk4JLfkUoHYf34qUjL7ja89LRaiat5ub3zFN",
  "key10": "4MgAFMeYCSqS1Pgmj59r6yMMxRG2p2QU6xLj57vZUv1gXH5d92jnF1wXbHfhqUtsPACWh9JMFqRybaxBUz6o8CEi",
  "key11": "4gXzcvstuAHwUHyTg5WZjzuPdcG15Fc5LYMTAvD4z6NRCYcuMX4UHu42B9Vdud61CfuwTFU1PBMc2ZfkFarmLt5Q",
  "key12": "51PEoapwVQ2c5wFvirRaEK91b5hgJK32QXRimAK9rcpRMXGiw8kqtdZf5RY2gTb1KxPqJuE6vVxKGYfWp3j9Jhba",
  "key13": "5vZupnS4Z4NJRrvi8qMs514Qm23Yi9eajrfHP8cFvuB91V3WD3BnSg6qPiVrQ9ZYUCrrNqXpWv3ztUjCfPptPYzu",
  "key14": "4yzjKHJJJdfBvt8guUS5MSKhnNSA4V77o1hNkBMvAzRPBTy1DCXVVS7rKLiPfiBdfEyJGebj7h7kWNVHgFSQDBRw",
  "key15": "Fs8phDhxVNjmsNL9Pdrq8AGpRyCXjPCzDKVSV98pSUhjMwrQ9ch8QMGjBN825uXnj7A5d6JRajMkE9ga3KSoYZQ",
  "key16": "4BJQDfuYyv9JQJTnrbfZaA6saEuQfWybrCezWKmscYCLyEzW71obsWSgBBYyjRDUQ91nYcg3eZMLDHCF8EMwodkm",
  "key17": "5guzu4hKPv9o1Qa4ZEXz47MC5Hfwwzh3qP5mzV38LgSB53JrB5TJzH13MtK5WmXMdnVizJfcmg2UbL2uaXwY5gRD",
  "key18": "2udqr7qX6rJskux9FD1po17XK1jeA2of1JwRdbCakv1cPZ7JoMWxZ5ixnoM4EqhFcjdoLvygKAg6UTjA23dP9oNN",
  "key19": "3mRM42thjPNCGTGexwQLk1o932xnBrfB5bBd9PxeJNdwWH6dr3kBattwqCCm54Vm1K6dAv2UrxKrPnyv96XBTrr7",
  "key20": "5hjaEBR1YdNMux5bUunQuVn7NvS2Kdr6Xg9Gsyb6vMu5Mt35tPYx9Um6UPn6UyYvF5d9LXfogdtjofVYkHC42TDe",
  "key21": "4GevLHFj17tJ9Tq96aUhe6eZj9HZeaXi5o3s9md1mH2tgHUpzEjdVRjnhUfP6BEtJQh1LBwRGYkdXFCrrw8dTgUB",
  "key22": "32bbo1a7dH2KPWFnLZaFh5JoGSW5u8c4p2v22Pu4G5M41irq3ac9wB6Zs5VWpAktRLhj9E4SLuzbjrMamdeHoGfp",
  "key23": "2uvoAGA3cLnEtViwb3U1CFatP6Zdcwpbm14Ko1XE6gcPzwBnmJVMjMdMcycE7jqbaKyye7WAirWbKTbMbwRz55i6",
  "key24": "2LyU71G88cQnT3VjUiNCMTv8Kt6BbsBa2ro6sJozDZe7crXwkBxT2KXiC3Xvjsgy7ATcRUgB8XmMRqCGv89C4zoa",
  "key25": "5oqVkJNSPre12Zib9maD6mNdPEUEdzZXSfGdf5icYxYeyym4XaqkwhXZHvQTmNATBiqMRCWtzED9ohHcCpziHXyd",
  "key26": "Wsp4tJGGPmDjgjNQPqvev7YRRmFgHJM8gvv42VX6ebVEEzuQdN9vi4nAiRmAGD5S7Si3hkGyw3FSQMXS7cdfPGx",
  "key27": "31wnu4HMXxny7uJ36bsRCfW1cJq3qK1hWq6MyNgkqDPXja5FExjHVDosmoTWf6T9fDFZNryBiFyQ28XXKNhZtb71",
  "key28": "62ij3KQzpcB9ehKC7wzb5Rzvze8zaJn6Uh74JRghtRCbHAuPKCyAr1vhGm7Mo6kQxBSG4WNBgZgJKTpJ2UC5ABuX",
  "key29": "4BfwtXND779Wb798ncouNGq7As4J4ABc4axyQdV9hT1bDESCpr3bDKsC2TLkaXHRC7HjbvqAfK6Roq1wXRJWTD2m",
  "key30": "5NqSf3h6Ed6tjZNRou1g8EZf1AyMkNWNYdqfbKJeqNnCuPa4aBBiDFv49NKhQv6YR4KX9M5BmHMY6XLzZwBvWmtq",
  "key31": "3nKXTZPUP8Dtf3sCMj4cmkXqvi3yunMnNU1ACPc8MpKVjYndxaYd3vKHFT2qe3RZMYG43J7sjsFBsxes33zZdDK2",
  "key32": "3a4USHst66vZF1R2YhqCf8YY3WQuFETzkrQmEXocX5vEFAeJLdkjTHbuEZqnWqoJm325kw7ah1KYnimdRJS7f1LQ",
  "key33": "2hpNRgLcMbP9n51m67BKWgvC7GicK5Qqjrqa26b8fzAvMCgErp5uxQ2XZzZbJRwcarRDuxTv22vy82crDWke1oDM",
  "key34": "3xYiSTwfP2Z9bfhNDKcDJJvwwGAyUtxPySerCNgxjauLUc1SXwD5UdY5W22MBBfwAvLyYC5sLpbfRxtbNiNR4d9R",
  "key35": "5sNxxtom2CNNMterGFYpLKQPWJxaq9pYYxzVBwsb4XAtArH2htkVjqiYABGW2hd7UJ27ir81gC69EAEjQiV45Ene",
  "key36": "4NoyMzFiip2nyJq4gjgXw4ntbY6rtvqmbqzZtL9L3ExKCx7y9m3Gp3sZZu7qikp3fjUCA9WxAdKuV9fNZHGMVLL9",
  "key37": "38hCRRyphnnUi4h9bjmLy4YCU4ppK75BBX1tWvKk36DQkYr4QagN4ptzzpHbNxjWo7T32SX7HVnE5UXT6HvHApz1",
  "key38": "pHAnZpCpH3BymLCoo7C9Q8ykmZuh9Z2CoCSDNadmjz3YZJDMbfYQVdk4NUR9BDYQWg6GmqViYwDVd4eAWREktaU"
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
