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
    "2rttYt3F9a2NBSCGauJ3ZCywgZedBAADuvJwVQeqXUZ98TQGxDt5G1gv6pKLmr9T6VUpUnfViUuqHix3okiJS7r2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gF85aefCkgWsf818ZpkpozkowAwX2Ez5po6AgQjCkJosKsJzwWnZuWFGVXoy6Qmuh27q7gdd1vh9XfTYkMsFbVV",
  "key1": "2BR36a3jWvyGcrTFaaZnUhfCBEQbSVDyZa4KrCNxLR8DfNsTNguor5BSoR8tQAmARCXkLrvFX6EMVUDh7wkdPPoc",
  "key2": "3PdWoUWTzndvTZ5cd95GXUAiqSusRyie71mZNH7oa62nxhXMYz8YxMjqKxLpMoi2XaRfoSEm4cbBB6LYKZksHmm3",
  "key3": "3TNJjDWGVvmdU617eTMvDFh5dY7Be5atHo4DFyLKmuHTTWLowdgzcv9ZsYNLqMRUpVwpRo7LFntf6YBep1okbgu3",
  "key4": "XiiWwE8UKjxqzWE8gjs2nJDLANCaEDR4G1k7DY1isFyFJPnst7eyuoHtYxHKSYe9KgnUGL4X6rDp23wVWbPmwAp",
  "key5": "4bCk6ikFwSu9pMXn3eBu6FNbiVJopmkLsUh1yE5cXia74FHHyREMiwQYub51L6WoUciF4eyZgJRXAZ2VjLAswajJ",
  "key6": "m9YsUEFciVfKFenNfBbLA15EHL1kuZYyfxc3wvrvQL2zeypNSCwKjDKhaeL7j4R3aC1hgEVCNhYdhnTpzTMpdxm",
  "key7": "3YWt5QJQsoWanyDNonj4oSDM1cm7PRZsc4uwQRipz428fYSpE1GoDWnmgQKvWi74dyiAdmHfg7wh9vrMHy3tgCRR",
  "key8": "2fUECKeVfNYvWqHpno2iFdBi4UmT1WDGDcpRxUqFsx53URjwLzxPTtChEixUVS5NPFQE1mFuDDvvnaaTjuyE1TQf",
  "key9": "5BAxDhciNBbpC71VBnDxKVcAUk2ZABb7m7jkkJSdjhrDMLpUgK4wt5o9syusoiaWxAt34tnL4zsJxVfaAJAktwDM",
  "key10": "42Y1jDZ6t5iXkaLmkAa8sDdYKJRfG4tXe8kXNjFURTzqb5n8hSdvuC9SRj2fhHoacCMWKSt92dHcVmiZjueyYM5X",
  "key11": "4nM8S6tZpWqJwUXKhpcVhgS4ovgY73UvsjjUdDZ9LwLLCSi6WapJ76chqUB4hjHZLw2Ef5C82vG1sURBnk4RMziu",
  "key12": "x7MbXnPBzStrMPv7jGPMU6J7JFusuHGhducngvNiy9fMa7hr66yM8dzEeGajQPEeoT6nWAcPCpwEvVL34GE7YZe",
  "key13": "hAngDc8baWSs6HvHDSXA2h3dPQ4bTTWMjMk6wLEkvqR696gfYVg8qDDvEK8mY1GKbfuce4ZdcKP9XgbCQD7waYi",
  "key14": "RQ261vTpoHdbTi6JMriGKJJgUXnZxGJ7D2isd8KbPrHnTGuFJamLiVHBTtGe7iEGoox5MA16YxRRqi59y5ViHct",
  "key15": "4gng6BKMgi7dePsrgNve4KUZDDgw81aEDfjqKLqPFp9PfNnTBWetDAKmY1xfKjABUzLE1AKf1Zf64kBG9q5zxsyK",
  "key16": "2yUyxEfEGRZGJ2KUsCd4u93ctciLtmQAsAtRxLBCayGTrwL42zYEMJRUx8za5UDJ6PnjaHyWZFmL7ZbUhHN2StHW",
  "key17": "4UggVexhEDPBP92KTcEdrgBbMLqgwXAvrrECwYfjebL9mnMgHoEYwHhvUQmk7m9uYjkLn4nafAUCQVXFTp9CWXcJ",
  "key18": "4drxyaG7WRUbD9AT3giAvbX9d6RxapH8NyqwxfWBZqrsdpaxB55CfzusGJ9s1qispHgEZAP7nSZjjDBZy8Ls36B8",
  "key19": "3eWdYfjkqUtwMnm6qFruNv3khVnzAbVDswZdK3um2aJ4VAWpjb48naYumSmDUNau9nor8RMr5NEKX5jgxtmF2uUt",
  "key20": "3dwpekp4xk3xHqUpYqzYznxtd9uYrrLD11r8C7AY6RXJhRbAQLonc9BxreRMDUG52bE3XVL6euTwPziCLeyHgbiQ",
  "key21": "5vagTC4tRzRDSkmYTAQCjTjwoouoN6i3UmQkQD4WDrfwwh9H3akvMLM6gAZvX3dR414ZpCSrS7pRHPeM3ctJ2zxt",
  "key22": "5sJmdud92SxsYvYJdcKtFknaPzB341ToiytWPCSXyfN3omWbi46EJQyvSN6obpMfSmxbBcmdUDfrNHbhg3ERbqDg",
  "key23": "5GNt469ZmWSgFzEUghbo5SiGf2AxnsPBxb4P4cyBvbTrpqDSJQQtbwtavYTKfJ82ucMBijag5UmkY24tRHrHLv43",
  "key24": "3aAmbWZJ5m3xSJSMZSimvYH1GnEqUhEXa9XkMFyJWA23f6MufZgFTAPNMx7o7a3gUc1uGtRNQfFmBeXC4sZdW6Em",
  "key25": "5dMAd5reZUw3EdwkfDD4LZ3YF2VH5JQ7TUryqHnbZ9NFSrJAWsQNSLGiTDKbweC6AjFUtQ9podb3sSWGj5V27Hvx",
  "key26": "3977AuzRoJsYwpJCbmkCZkuxAPRMBfhdqbsWiozHc4kbzNfXMrzBxHpQmPhPWEVinUG7i2tXmcqZR1F2jGCF7oUD"
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
