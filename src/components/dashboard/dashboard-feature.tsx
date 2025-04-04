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
    "9G5BQM9A7RErd4hHqmmtKVkBkiVJ6irRS3vPp4pVMNW9NK3Qb6bQoB4a4ZxVSjYaMKi6t7jJKPJNGnZRXsA57uF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "STkyVxAVgdoXkYbhDtPFqNHGC1NYdKctzM3huUMM4A2ff47tEr5otUhMS63DVK3jj2ocLdqR55mF4dwhr3GNpFe",
  "key1": "4VVFYaWwfsBwe3xNXzJrtQfiZ6PFWhMdTVgJ9h3rPGcoTMdn5Zikz1W5BLGsbTEC2K6CG59b5kd8AxoCfmnXV7tj",
  "key2": "2XhKhU4VhobrvNQFFbndhitQS9MQPgaYuXBYh3ZPoPyV2j3KRrG2bjkX1G7rnFD35cyvPB6Vnonnc8DGLSD7U9Ri",
  "key3": "WzKFZKzXZrjZtkmTi89PRdHjE6YRX8Ngnui2WtW4pxMPS6TyvoHEixdJ5D5rJ8GhPuiQRTmYbgF726ockaAm9Hd",
  "key4": "3bWZayY62t5SBV1KV3MDiB8YTVMPa1ddn68B4DC5a6MBLmQTazgiB1KftZfiqoSCexFxuRffnbJgzY39CnbSWcWr",
  "key5": "2drcpTjG3WcCbrxyB9p5FXkBYHhFqvyj2EXtXG1pmAsBkBeN3h35wYXDQJaXnrvyCcR9T17tzGy6XP3cgq9hvbGR",
  "key6": "3sHnCDBcXzpBez3hE85vhTwKnLERebs2xwH427nieho542FcEEunfGwfh2MHbnKE6nj13tonBPMYuMR9UJktfpfQ",
  "key7": "5YTvpexTZfYaw6GWeZkhJ8SY7jXwHsuhgvDPt6D1ixPCAkVy1cPX1DdKZBB2u9unSkKuAQGW8NSV6dNFZmx3U1Ay",
  "key8": "3qoXW7wfDYLxtwA1uUCKf7QfHj62G8GTTeMF2b8tFsbnoCwUf6h6skwfS1PHe5VaJ6B1nv3STLAc6pdmYfs9zsrK",
  "key9": "24gxSVDVkD27FNeNehDqbxqBQKcGzs9kYzhvyGs6cPpvgxJjvv3Q1zw5oJBHNapvCMvzzmHvri7jE2YeQyLaavJt",
  "key10": "3dEDmmpnrUqH3roZuhGieHoxrBx1Fcyp4ouPiaKuNHWuYu5XY3e4Ahj1GXMLuZ1SfSdQzxCc6DqEbs3mQh38x3wh",
  "key11": "5ec9ChC8VYFzsfBPxDfQmKM5Dsgz6yqNL3Ur3qwNfnPDs8RYJYTBZ8HxbHQGkeM2tUuqkvWc2fCNvEFaYM3NQWsC",
  "key12": "2Q3rPyKhj1SZDYugtD4AHLcjXSyRxdncqH37Cdbiy6YmWTjAqAQMtoNSbJzq86EroAw2g44faRFHNoxwx8riUFbG",
  "key13": "4CS7iuq6Zmxwh37vjqdBBBaoQXfARCMUNjTg6deXVfPVMmassPGJw8ySavkapLFwzxZqptDa9kAtv3HZngcsdBK",
  "key14": "5JQCEAN9jhBjgeL5Y6p9g2ozX85RkazQLjTRiV5o4j1nBz1XYfG231wbJ5U7qb2GysS7qdyQ1CndRJDXJm7hBweX",
  "key15": "5YDvS1JZgKAkTQqWStKgnfC5KTFqMCXCdiV77NxQnEHiXHcCzCZzY67F534f2cjdm5y4zotmc42xNc3AzkofVk3F",
  "key16": "3paZy56bc7Bp5y9pihoGyFjifLYRA7q9fMH7t6iBWr1yNjsUcPPg2FzTjFzpZiKdmr669NTCnEg86vKgS4hZjF9q",
  "key17": "3BpmH2Mo5CggKJDBeMPugC1YLm5Lr8Hidxw5Wv4DqMR4zrgJHggwvwx13gqPsTUUpqJY9CEYi5EYidtJUjk9b6gK",
  "key18": "zwUnKWZ36aqGUHLCfJNpTDhPTk2c2Xm1Dt6RfpsBdrpCjFAJDTwaccNJbtms4yV5GKayXpqD1ve9WNxmS4aSpBk",
  "key19": "3GRBhcq28EBQVyDRTpyJuSLE4v6YdHTLjBDzmG58b9vhSP3nN2gYCkCwVWyWkdJqr7xur7PSPVqao1pATvme49rN",
  "key20": "4nAK1A8wGLto36YgLNDAMqS5fq9yFaaHwRtu2vmU8W9hFV3HUtXHMRuzgx9rE4YPp93dqU9cBVSuC5SKTZoQSRYR",
  "key21": "2VS7rEL2P3yvUzXTdjBWVTfRUcrfGssxoXbPDNYSrRsNxYDaHS9x1JkxM6CzpR5trAh6vJGaPwygs47dhCUBSHsD",
  "key22": "2SZNLnjzYnRbJj9M3r5CXHtZgmHkMDCthK1KZquKrEa8QFjAEpSvyGXvXut7HymABE7XUYaGMtENEngL3ek9DqWX",
  "key23": "4Sb5KruRfhxEAxrmynJKvSUzs9MApy9e52cRajYTbTZu1C94V82gHchEy8xKwRyK8EZ94NEaM4vdn4dYoW5Qu5tL",
  "key24": "33hkhbPELmdmGjkxo2Z2ft99EcTW48eb7AfywHwwUP5gVotDosMZogCnwRJEzZQy8QJN34nmaAiLxUuhWCQCpT1m",
  "key25": "45tVe6R1CQETDB12QMaccLwrTbWfxsUG7YuRG81BgrT2f7f4MXHKhQSCHZArsaNWcQDBz4GrKEcZxPp3X6eiL1Fc",
  "key26": "54F35yhoXAKKZhAmLYTqj3wCkUXZwT7CPmH98W9uegTLuRFB9xt9tnFKiimrGMvqfTy3dR542ts3LGTU6z43fe7M",
  "key27": "269GGrVZ66izQtF8gC7GBqPpgyoSJxgc3spxbtgQeF65siaq6F4EzJCZBsuVc4R4c9Q93Jmev4eXSC7BFddiSHoj",
  "key28": "65gMSYa5R3yjsAzGc8mxgKhSMz6hHsTu7aWamLSvtUYChaUoViPyasmwuGrBKauzKBmArtYr7Trtwg9e3PU7a9Yj",
  "key29": "3xRhD8RWzA2dEKbYQ3crbeirguCsKCBW9bfUtDaKa42Bej2gJyu81Y2u6rzj7iAPsGvow1QNLNV99q2oiaZ4a6jo"
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
