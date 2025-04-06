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
    "YZxJNzgM4YFGEQMa2jiNrNqTVGL657dwHdiTBx86PrQ1hiBGtEv8yv54hMju9UsgZN4rXC45taP6QWSpPfHacV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ctreShiATWqXD5tuQGjzsNvWFbyQdtHcQ5Nnues5Fqw8C7Q52Rxc1YHvcQwAmjaF22cGH7kTN2pf6pLMgVAdUe8",
  "key1": "5LQFqFzTT8KNyNfSVWizYTHix6Pnw6hnmfCQT8Wefg9RUBtZGgEiHBRVLuX28zLtG4uDSqKyxtEBc6VSXixGqzwK",
  "key2": "3uTbBPxV62NsoNBRUbj5jW7EHCNbbFMMRrmvYXCB3Nr1jsjM3xunwyLuV46dvj2u6cAJGp92RhmvGpW95yETmmzD",
  "key3": "44FADS6d2GS7LdGnaWWv3Bhh9AJB9kavaRPtvTaHGrCzcPXYt3m8TkXVpRihoui3iWvkPP1PUxqoftxKbf17KmTk",
  "key4": "77Q5qYcrWThyiw21teuFHEiLVSmmAeiHKzY66YpsgSmgmYcSibUkPgQMYopnqWzcF5Zt1cx6N1FSKbLN1i56cU2",
  "key5": "5DCAcBSfLSGwWzAvw3icKLP8zRAQHbpDyzNEHErVJ87A2wf8QEqtUyZf4XUKMTrCu3cbRrwRhYSbbUX9kQQt4g3L",
  "key6": "4xBFfekXXFqqVCcnbH9oPKUXUcHo3pJt4YnVMkbvok781jNJSw6iEHGssFXbvrW1Nz4towe5xpbfx5nHXumWNdHo",
  "key7": "4rUmEQuL5Csj1HFzpoFYhDBNkPPyFbhiHbUEfXqn2F3P45sy5eQNcpzJQY7yYxDjhGacZPFom1fGfaZM1PSYaJBB",
  "key8": "2qxPhAUg8Fj4DSC9wdU4yctYuotnoC75h43pWKRZ1CjTonV4i3PuYfeVTs2MrSJJHbXKW9McthcNRijpW6GvBJkv",
  "key9": "48NHX9dxCswq9C1TNSLm5ZmodPfA2sZ89EQm886WxGex1djhE3UbizvYny7VvKJuiHZZvzZrbnt6ARED7h1HFASZ",
  "key10": "4VahN9AvqkmChLjPxH7Fm8rM94AQDERtrGgcqNHcGpAangwEJqc26EFM7R4Ymq3nyE7FhXU2EmphxaNGMEPfzy9i",
  "key11": "4Y6vvH3BWGuhBzKDqEy89YhZY5twnvYAcyF5nozmC5FpXWjoHL4tHA2v8HytkuumRX9VjVLBgLehKw1DdhWncRX2",
  "key12": "pibpkV1s1Nou8LET1AxhH8WvQgcipUVQLgXuMG5JND4ZgGeH2RhrLpC9Rzim296LVKDYdRCH5MwsNjdhjMJ72KU",
  "key13": "cYm3kb2JMn7DHZdpPgt1Vg7KBUhx1HaQ5Gcq2ntLVCNK2UGKxXu4idrvGPVuQXf7p3FWUb9z3c1RkuDRnnUe5Wk",
  "key14": "3JkLW68W5R1L5zJgR8UYjcNMZCPo3rNiEQL9QSdmmeKQUu7YrXM8CgLq9tirQ1vdH3tDFxADEvvLcdcLnVsGCmcH",
  "key15": "5h7sMJ5bBdgMYqJxb9cPSNdn9E4qxox4v1LMwCsTqSNRuWnsH5mvB88CfF5nGwYFfz7mQkYuC3GjJcPGxvhfWtHa",
  "key16": "56YEPT6UypeDzofYxqLu7g8ypuYkXJhVAHdRZajnzLwYXf8z8pyhum1AP34EH4nthWvE4qAtHsTt5dnAnJMS5uCw",
  "key17": "3PpSVD7rxyLX9NH1TLCvUk8DMhsbYFAGSW2NS9vG5AezdDiLkgMTzDDYtxvEwEXtVCJTLDBBx3AopbfKd5j1Nfsd",
  "key18": "LYaPvxt1sCtAXEpDU6Uszb2MUF5U14CGMCqj3jM3o8ey5ePc4MwSWanWRNfdar5ou66Q2ZivBx6orhDiZeKmmf8",
  "key19": "3mNqs2Fu8niVViWGkFBGsMXnwDCyTHKmhtogY9hERLEC3yBHWTuAqgbFcihhx1okGvokCYBWaRT1cab7hKUiGHVc",
  "key20": "2NGbkvvZX5BBjhDZQ4s45eawFS2MzceqmkRraeZq8eobXMnCdZn5ULQdNfiPU2v1gJ7twKskaJQq1ffcauvRXd5R",
  "key21": "5zGXAPV2E9TnWoMhk9fF2ho8KoHchwpi9J6eHbSvRP1LscDvcpwii5mfKq7BSFhQLLjXYyfWX4f1Zw3pxb8wJQ8c",
  "key22": "y69D5bfoXnnarLyU6KodGVwnGZ2yT6cHJeAHH916c1gsZ8ESoQDVQ7dwAf3AgCwg6huacX4WSgrm3s56E7NGnVX",
  "key23": "3oGay3CJ6gs9RGnXrB2yqu3heQD3HqY1jiZnUTNAaX8mJNVs9XPVeXXpc7U2vqpejmYCzXEqPHPvhWvdZqff7UXX",
  "key24": "3nKJirJ1JMzuddbpSZ7P7t7gDNvGrZvrVsDEAiEgsyx1zbgqzrvfjZwYaUQTQfKbaoJKCG6yCAdpMJWf5SBAFrVD",
  "key25": "2fbPmi5kES94GVvNbM3LMkvw9XR752i8e4ANdAjRG9SnbJxqFd1uQ99W46AeunDCpsHTdUcJwWhNcXRYAqDzjYdR",
  "key26": "3Kqs8DFLx9bWZeeqPdZmDPPmesYsqFHjkUMFDFZNLpurUpnDh8dXmU1RXYNchiXUSAGAe3RwpS2Sfnv4goDJSjYS",
  "key27": "CTtKgJqQMwpntGQWUYAaPFHoN1SteAxYUM3MQjsRszuu8P4sVGovPHKD2aCRyP5JVbj69SZkq6xParSq9LtSEXa",
  "key28": "4t8r1jFtRaM44qrBMHScWFAzEv31roaXkdw62JxZsCfJJahcUBWiYvthn3YitgRqjc259NxWpJT81uK4SkvsJzto",
  "key29": "3TCNcENCDcz2e98TtBR8rTNuqh8SazCQr8PCwot5P7KRsc1UgrtkV4DdXMFTgZiaXs6vuredLLSucseaXAGMCYi8",
  "key30": "3jUkfG9hq8RFqPoQ54F8SiSNzwTqwp5B972rJRkiW6g7zWK1tWhYv8LGzacAo3MEboKyMw9ykuLTHT1LxwzgLwBd",
  "key31": "2G76JKCNZ1o3yjztrUD6JcPrCj3kjeQE3xaYsK8UgwaEJQmQ4G6BExVinkaHT6kLwd4WSf1SGd2bfxAcUn7Peqv6",
  "key32": "4k6da8KvhhzYe9J3swvuuj36n9jFp3enshfLWiLa44S5YBhTNgJJERZpXJtpGD4ES4Byk1H4eAwCWpKAKwEyzgWb",
  "key33": "xE6hQSpeyapgZKwQKT54g7hwXjWP9NXEnAj6eCy9ooGC9MjgqmvqCN78x2tsyHnLBy4fMYiyPwCksoxWPy5MVWg"
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
