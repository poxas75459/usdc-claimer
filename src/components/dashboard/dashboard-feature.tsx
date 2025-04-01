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
    "5PGhF7FmYYJuQvrJ6P4svxVBwZou6Z77cXArFwFQvAaSc8V7UfFVudB13T4gAK5ihNCwoTTG4s2kRTgGS9v2gdfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xGGry7vH5xscchxnMqfPb8yHVTmv6L69ptufV9EuB8PSa3tBn98aHXengHMRg1a6Q2xZ9UdKa2u4VSdnp7kpEue",
  "key1": "2Zqoj7iknSUxm4zzxCHLsLsALycDeNx3ACRzL8ai3mBZHjRbdJpMZcuDYMc8f28nXwQ5j482mpo3uc9ned26MVVW",
  "key2": "5CCuTijiVdphhWSVTPfFJYyZ2ocjJiPUkucPuDbApVxjR1rqBhbQEbADdobLCHKya2Dp9RJFviPKau1pio8ex6kW",
  "key3": "3zwqxMb75FAxQKa7oCF9JJY7jM6aAfMT7nf3VWPiCm3Lj3dbyFAVLrAZ5myqHeR7b5YDdptV3h2xrEtHXKqqVZPJ",
  "key4": "646eoFdAGGcHSWXf7ZiEHBosgUhvNpYpHBbL5gSc2urc5ov54m6SWSEWndB9c6N3eRnxMh1wQu8FwWd28TjHv3A8",
  "key5": "4SLKpx7h7HgA1vCBx4FA8d315Rx8BMq4hSTmoiKEnc5LNJNnkL48L9rXMKFrCyGkJS7ZX3T3ABvGpf1wcjn3GbNH",
  "key6": "3sQtGXkwLn4kqJ3hGAHhbZUfQbJ3hw5mycPwb3GMDCiYYXZWJnrVGvPvaZBj57vh83q3DLZtzQm7t9JgEpo3WxBj",
  "key7": "2FERcDtYDWbD1yv9qfjRiidfmFSEFVDfyS2jiAZs6L5naqNxqnfkBwEW4bmPAGH8fkFDabNWJfJvYQrGAa58DG8C",
  "key8": "4E4pjWqSPSdCm67EVw4G9e5Wc1GNAhSYu7WsG42DkKVFZtvLVkf9L3Jqifq3qfpDMFytJtndeE2Dc9YARLfcp9X9",
  "key9": "DBvGwbVGeFAEiUzqEPEjHZcSQfzPK1nPaARc7oeo46nMVrCLGMw6AcCueiXLkvQL2sH2EAtPrwxT5XmC44WwUmh",
  "key10": "5t1CqPUieVgRLxWfkKuraMmaVJRDzsf1a9bRqcfS2wGN4ekirTDbdMC7mm9DPEg5w7A4aT7nRGU7Qo8piEMVPYw1",
  "key11": "3eHxjPrvKdHiAjMvh9d31b6mHuqC3Rjo4tWKHtJ6DHHaqTmnDZRi5F1GEZpeX36ssxbwci7oTdfDH2BLN1wAqQux",
  "key12": "56CwEMm6Lns2rjW5rhkRMoifpaSacUwrb63yX2Z6GpQj9CBqQQ4BEdCsyFQBXyzbjYCL6uUX3o9acAtcoGG6DCFW",
  "key13": "z7ArgvoRbKgbpZXAndEnqXW5cQuBWixGTaZKza7hmYfojbzBMy7jidMshiedydfPH2jxxDNqJx5iiqWygB9DU4B",
  "key14": "3gYBRrHe6Taqjvky4tgXiGCTZg1HXxJp2GmHDxVFR3DxXVhm9UEsYyZ5QZfCN928jxtHbNZdq43c1g5u2kckFdoL",
  "key15": "3dNotGsc4GfYPYy5XPq6SAdsBiW46t9huA8q2pAqU6TxTdLwMyKyxpPkBP5eMVPwJJq6rySSCFMKzNdSCrkxsore",
  "key16": "4baRpfHeFGUhbnyU8Jmz6kfcn1JPj7aqzPG1rwP7oSwRp93Y66FLGREYxXzG4NL6BLuwTgzu37koBZCNsnrapVpQ",
  "key17": "4Nrdh2eSjbE8QvNfYv8pHootso8DQP1VmF6u5xSAgdQaFhFcxciwoGR3BwZq9aqbgxsYSyvS45cUaT2DCCrJGg3Q",
  "key18": "2r5xfPhyYxQ8xYfNp4BaGHfN9BdAL7ePSMksarjCLfv8bzaqnjcb3j4EbtBicebWkVMVnYWJgYB6R1ZiHNg6pxBB",
  "key19": "3gAkcJqXh25ucYy3VHPhxAdygdyqBVGnYgqq45W3LrY6FxARGU4DpjupM8MRCGfU7Qhsc6PCL7qiJLjXQxASVwjP",
  "key20": "5LsKnCjHbnyskJojtSoVzEfxMWKxTqfDPcedm5oM28dn2SDv5D9yPksHuMUduqxyGGwkBKmXmEHtDYWSXcENDzwU",
  "key21": "2LJAzgFs4HJdq4TEHRnApVhThhyatZVCFbzbGtgfcfUL4cuyeHnR3FAdAHDwZWj7aRNCXDJEXAkDA4mrtd2gGKoB",
  "key22": "C47uBLHNFErDMXmgGpbq7PoEJ6iTrX5uSxh7woG54mgayA64UDNNf34xjJhWW6dwXowMsXYy7wMnRDP11gaFRyv",
  "key23": "2ynUW3dL5tq6czTnwcCn83HKycfPVFrxdi1bTMFAQpXzZFoaBS73fxPpemvyU3d6sNKC65p6qdaaaKJfbEvMG8No",
  "key24": "31KkTu3pKoXW9UPXPCdsyE36SpY2UpwfkFoVdjFcG5qPcaPGWCRatMWNZsQukpzxukKg3DfDBnLb4PsVZrMY9c5Y",
  "key25": "457EDXf6YgqXG5B6fWEwP4uK9FCNKeHyvdzkv5KeqmcA5ApDkx9iNnmuRGY5rnRujUxQfwZDnRjqgddUcjNWPjfd",
  "key26": "67VtjNdcGCu9GpnawrgcgoWAAtRxpiyRrEMBm7bFsfvgqmMnKEDjT7u5pK4h4XshDVygciBua5p6EX8kTZRmkNq5",
  "key27": "4SynjKAaMTsDnVToz7dHFbXwHhAAUwVbpvcARWWWBvnn5cU6Szief37YdCGNPp1PU7N2CsAWn9gBkDj9LanzBuYM",
  "key28": "2cWtX7S5AeB68HU31iLDCyQvuVwRiZMXW52qjQiD9tAQoWKAwJa5MCApywq6XTgJnRYdbm1X279rPnfpkAFBCzKS",
  "key29": "4TxtMWQLdqjkVsRhxtfeewAGt3AK5hnyVH6qMrqeGzcGYFWiZAv8B5zezS1bpBrw67foxJDr3Wi65YScQEGjyU4x",
  "key30": "9hf5w8vLzd4WWya2CWXnno519NkA1uwxBjzPNzs6QuShnZTvZPnnVF9PZxdvBPTGDZTmfW4n1t9Pw4Z7pPq4KMZ"
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
