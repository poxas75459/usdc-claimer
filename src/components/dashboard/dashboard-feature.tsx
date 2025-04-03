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
    "2X66dL2kA4vCqy1BMqbcN4q2F4jBpWwb7NP5N4fW1TcL1bqZF9wtfM4oAZ51h5qKD5WT26X5bwHevNRsDXAH7Jo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PgVrHiaTkRnsfWMftZ5aGKvsypzhSDW865h59WN2jxvuDGcbEW1HWfwRt9enM4NLQD6r4FjybZez27n2HeRF8ug",
  "key1": "5AmspH1UP8ihCGJVsjVG7KqL3LgdheLSgXEsKiiuNuHTamjd8Z1oXqvSbbjmP5KoWz25YSQaK9hBmohfdVACAZm9",
  "key2": "2LrwWhaxpKbWTiCG9dAvdyU9uTnZGdT3XeGUpff9tqTTonPbyi5tHt6Y74hrUyoEJuWPSsdSPUy24g6W9bqY5R2p",
  "key3": "3FM6ZpwvBf3RiNGx4XNDGs3MNpCAF8vhz6icezfbodaG7vQnK55qgY3cdcepLGXp3VYJh3suuZ6NauyNNKTkVm1T",
  "key4": "55vKPC2oRbemaXv1ZVvwLEexVcuTpcbYZUdxXUGXfkXpuzWLwYtf8v3CL2RYW4o5o9ufVCtpp1XBJMgeVGCSb8C2",
  "key5": "2q6H4vJVu3ByehiWUTjmsz8D4CXcdsNJnXpEJnPR9o7vcvD2xXpGNP7mAhsZVMnNQK8PpJB6oGsxwLgvsbm27dzL",
  "key6": "2eiYedaPxiGWCBWcezq6fAbQCmisqBWtyJ9Rdn1MXpYzw4cvMPWYMyQTXgmEEWDnVKGGaAh1ncwaWso9HpwRBRjX",
  "key7": "5tNiEXG2G2TZBtoveeHMu2YgHMsuUd9poB5n39vVZazugLo4pH8PW6zz6vRCymbJJXFaxtZZor2nZVPirTJvjCwV",
  "key8": "3Ho1PMYgsWtLfaHrkX4h1tfJMAWESMabTsQdoJ5tSZ95c5AZVNVihTEUL2Mf7U38bXVV9yAazSP1ocZ4LjN6YFVp",
  "key9": "5LroTv2n9r3gMfAXZf3aKVh7DUHbq3vXhA1swKZd2CjszAm4fKb9ZTwo8ze3o4nVpGMTUvynbSAiesKsbZaNeXa4",
  "key10": "32NoFKbM692gsW4U6kPuZf5DDNBWh8fdg1zVeawE8Y8f6eVBMNfdfkT3CnpTgtPKsNLMKAAYr8eWegR8rwQKJWkH",
  "key11": "bmS8LdmaKCFYRZtSKCkpUpVbiA2FVN1Kn2NohpMDZ1Lxid6Cwqn9fr9QYkfzyC99aNj3g5gJa6x5gH9xy7fPDfu",
  "key12": "5kiikBp6D1PGYZMCgUXmu7Spgg43tnx5cuZTmPrjBrMDN79dsU1HTeXQkuvW8KF2zBh7VnofnrHKFqDhaqGxdHCa",
  "key13": "5apfbUaZM98Wh43LGsFqn3VwfTubd2jLy12u8UCXgZy4ZzYeVcKu8HbXub6aT8HjTCFU2KfwYvEibGvnGiWknXkS",
  "key14": "2KEL3FRizQPGgPPUKP63NbpuBeYqr85jxz7ZLpV3agoxX1qGiymEa1CwJnkvveAVkt366Bw3cg9nr7Kw1CndzFdb",
  "key15": "28Nx9jDtTEKVryXZNeXqC4BmYjXGrmXYnLUv1euwiJ13UHtdUY6fAeya2v6KYQxmNH2fBAcxmxgv3TKP3jDM4iJ9",
  "key16": "3qq6S3H4YP5WEJYSf4Zk778tusvn6S7eUXyFuNF9fjWMW77c1PNVdtc2pH2CzaBv1AWifZ2B5oTD16hArpyupKHA",
  "key17": "2h7n4nbP1oBchE5vm9cRmvJBNtnafxbro4Eb9nXSzvDWJaCCxdWTYZBZEaEVc8mJxANrevgQrBpa8Pfw3XbpyfQU",
  "key18": "WZaAag8BzuaeRPdKcyjtiUNwESir6K1QR6pzxRURfjRVuWXxFHKU1Eoif3adKfMZPoezXieUH2GSAJpusxybTHA",
  "key19": "5vnkMaMnUEYxyNitRefmKGNMiRUAGeF5MhhySynLABGjga6B9JQT6divXNKqyvwWdvFbqZ5FKZiSP6HaYA6wAAJm",
  "key20": "72HyY4uAfpCNabrHtxdYo9p1Pk4HaS34qfnkWGDDvtpucceRN4aoazUcoSizEL7UJPtYqUERJptZAxN2bXvDfjZ",
  "key21": "j1VCK4PsgnkWWSxRu7jExTENxgSNXC19acRr5KznZLjv5JZfQBx4wyt9teRpMi2BbpGNwQRQxRrivwj79UEuBy5",
  "key22": "3N1b9zyZ6TWVuEng8frwHzznFJ3gW9rxLNJxunPe2Xy9zuTXWbQ3TqSZ88sWWP3V9TQ8w6LqgeFjheX6iqhFdbBf",
  "key23": "5r9zYWDQVN9y2hTFZSPAVg7Ttn79stdpFDyNVjArKaFwDcHF99icP3WAnxukv2AHyn4Vv2tcdN7q3qogKxWGPmeo",
  "key24": "3EpwBNq3GmXdZZtPgeDSc3ejJuRdx4FxjDb5BtsmbspiXQdGhxik6D8sMYqptFkm1v6YqgYgxDYZJ8FEeRLrmP64",
  "key25": "3x5cwJ3FKp8ZvqWy9RpEY4fGany98biLu5ebeumW7rqrBT8WYEvH8QPsKRiJcsekdqT3P1kcmBLzhNGtN3z5sBJZ",
  "key26": "4hYzJDqBtT1Q6SbV2SNNQRQBv7R8w2CC4T5MwyqCNiam9GiscgpTebtXeteAcbvuTZKp1qKt3hr1WXaRchrrGxy2",
  "key27": "4W15zRqsFKGcebfXzoULkijojM5fJvGNyBXWLzcU1irYhY5FvsipzwyhsE8Dz7v4vuemwp1XUDQRHSi4QVkfdTyM",
  "key28": "2BW32w5YYpVrYgjriHrXECwDffPD8v8qmaZqfxfvBN8J6wb7C3WfvrsTBy7TAds5dDVvBygNotuhw284bda7U3uL",
  "key29": "LfrwwBXx9pyeuBbDNDwuan3Rt6pWiBK7aNSzBFFxVAT3Ft9Uco4gHZdLdPUhox5L7FDMunmXD8W8pK1ecbneFnZ",
  "key30": "3w32NXuN3MrW61HtqHtdsACVyVN7fUJxVwW9aubwEZJJeFAjSkKAfuziRzsAzcDrJuZBVcjeki5obneVEGwnQTDG",
  "key31": "4h6RtLA1jnXBbNX6TZTTLk5QoZxjYSog9Vqravi28aKh5mAQ5SUmPaG642pnjdQXrg3TWGvHBGxMRA2vbjH2qGBH",
  "key32": "4LZ6iA9KF9H6AhCnXmniCU1Pa3o46vhvBw2ncGKTuCXiF5PFEqh85Bhj9c4yAyeJkeuD6c3BvDJed4SwtioQYp1F",
  "key33": "kaEsfo6bmc2XpoBNtLEKm6ozNNMn3LQh1N562AT7DrGTXwH9QMVak1gkfLfLHWzRT1R2GF7UbXXFarXZ8aS6shd",
  "key34": "2CMhbhsy7PjvfoAtvM561Gzg21XaRRayaYu9EdQjzimkDhzKhEVmUpfbmsBGWEHKkP9B1LXVucdX7NcgGCmRC5cp",
  "key35": "43gHnS7eoerQRiQGeu2nxCjDBUU4Z1NjshGaMvJuSMSEggL84LiKx6eC9mNQp5m1coexANHgnoGnmALWkKnjGv1A"
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
