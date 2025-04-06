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
    "3FehFRdLSvdvRdP3J5nD5dmWrBTV5mfw5oh2ronRHoVf2sJbFDWT8PTnZCiUDucVN2bMb41yhtYcUtQzNriABmv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LigW2Xqnq9eXciYmL9DbExZd4ni7zwQsxz87rWczobUxXGUMDXGyoP27DWDsAnunoEo8yYhfMdM9r8B4YgUvGrY",
  "key1": "5ZzwKLWnT52mRsYoGenKHoFVhY4wsGpYV3vF19qMMp93yaG8sbEDE9S7e1K5Fk6CprgkH9WVyjbCALidw1P4JWtC",
  "key2": "47DdZXm5EDGQ2JxsgfVWejmaKsvnFkrAv5xpz8McWPuUJmhpNajbgg1Ng2Kj4St4w9WkByPshS6detB3FJ6pU4uJ",
  "key3": "4PPr344czJLainAQ5yGRgHQoAEa5qPnDfGTLxGAnSLr1Lachn4WZjMNCFycqEwVwmHNEabWckJv9euQLsJFizUEe",
  "key4": "QDWjg5ExzfNvpdMXhUeZqtGoJgMpdfjSZQtfgTHNJPa1a9aEhDCvcwWLmHEAESmC57DX4XcQnWugh61KGZ1vdw8",
  "key5": "3gQrez49tuv7QwkDFQgURMNAeSwBUpgvu5cXwvdVgh3ctRduEhUG6bs2w8ptBsZKJE94WwST6gCUeYBZnpMa2GfX",
  "key6": "65w3kddAUEcuBF4WdrjuUBHVqhEUwsFPZt8g7SG7vi84xmoWPnueTVou3AyLdh198kZ6L7t1qgZsK9PCp3isgDVR",
  "key7": "57d8wbdnK1SGU2qVcexEZfDdB4BoBfvuoMEoyBForz7ryBiaoAkQVt5JF9PgTxDyPWpU6yRgFVCa3qopTE4WRaJV",
  "key8": "9Ey7TogxL98xLZFgFgLzsTNVJB2sqkjkgdiPfWqb47eenTWMiaQ2EBn4mdhaznk7AFMYSfKXQ7uTYhU7c3BQZxK",
  "key9": "3LfUchxFxMh2RRcHFP9YSvCrCcsRJey399RCvcyANgz2H37GnHkTXXwFyzG4psDw8b41GqqyLUPWpMyYT2JNAFVd",
  "key10": "R3K7rnjHo8N8RLtGPhyY7k89qp5rDXNotBu2kspU3GjAyogGNEYqaaByfFaF9Ry4Xgc5Euc3KJPQ1s5SdTRQALp",
  "key11": "5tSXZHsxth1ShZNDiuMfhe1Pgm9GUG5V97ATgKWbLcg8AwqLpaVUrkNWnR4i2niyRDwCvZZcYkNrzAZfg1DSika1",
  "key12": "4T1Wnu6xHc1j1EDao4843HyKd9tKPbopL6WiXt7x42StnnmhuGpCTPUfargZgJVag1X1jZju5Krp5dpNLJYbcrMQ",
  "key13": "3a6KvmzPJvmL93StG58wqGGBLzYYgfYGWCvaCBEaiogef3UGugHQLX2gov2JZ7dLhsA6eLuZXS8XL6RvUHhH7ZAY",
  "key14": "5BCcZt9YGLxpZCR1otyaMQ4PiRyxK9T42nU3ZnMd1G76JMkcFmtqUxjniDgazPgHFUfL94PWytJtH1ZkPqxuQMuQ",
  "key15": "33CHaadUxnfKKUZS3EiBhc6uGiUT6oVAXS8MtAaxR2hYtvvPghSoRiX35RsfZAeJhGZ6e6oRd9eTTmFMfsGqcqpn",
  "key16": "45QnbN5CEZhzRLFNGvvVn82g3vZkz13JktnioUXpeyoaHT3Shfmj2mLSJmtdRryJJFiNaXNcCSWRzE74nvV5g7R",
  "key17": "5iHa3uLvUrZm4bVuVRUnomgHCt3daKtZ4AdFoas6BnmkddtrPDNBAGPcdxa9PmAceVFEc8Xz5ZwMkcWMLwg6F26h",
  "key18": "3Q55jrx7y6nLfNXk7kJzktxvtYYEfJ1SitzRt7NjQ7MhexFbkPEkBZgAqZisgPQ9XErbQoKuXAF9mT2w5JiqSogZ",
  "key19": "22Uc5xYZXx4DjXbom2HyU1j7eAbCAYv4e2PA2UusT9stBE6MWk5r9v22gCsyBbbDaGMUXNo3RdrizKaxpPKNNfb9",
  "key20": "5NWrLdgZX3jwELaBuJ1kt8A4ER9tfWBz5T9HPwzBVv5wLw5wQpWiKysvBuU1gDB425tLHL8jLi48KJ9LufBmrka7",
  "key21": "4XwuyqwhSNbVK6h51TyA1fQNEfa9yELM91FavLJ5NBfQu8rZuoymoMTBRh9ujexrNPKiHHgXfp6MRDdfmctTpkAt",
  "key22": "3yVukqSVHb4fAbGfuab1ky4nDfFgXT9b8LpWrxiqMmgTwtjMvTE9eM92SLdGCMEnz8ZxaeE4KKKSfi8pteRDmNdB",
  "key23": "47p7uzJk8n1jUt6TvPgmTMQftjaaRrLz2jXahYyQqkjmK5NC8U42FCC9uiyTbuo4cbdQ6EvLJY48qMdyc1iKpLG5",
  "key24": "56niSD8dUCZ65uGtMuzGTUND8TGANb6A5aHLvBkVDkAygG98fxrih4R93DHirAnVUNWqY9PJp4fW3KZouyeruipM",
  "key25": "4uWwqwZxZwPLKYAnKbYYc5P7diVGJ9HZaNhZKQdUSffWfKSRJcaFwFgWi9A2u6eaFCzDVmsnstSa66e3rk3S8Vob",
  "key26": "3BXorcwVG1K6GYBZ4M64g5kcm8d6CU6itan1dHkrVYpF5BuiSRmE24RjpnkX7vP2gRo9UB1SVEpkMPL7HMWX2RrD"
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
