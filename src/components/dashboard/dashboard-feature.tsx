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
    "4gcU7Z6Ku33FXxhRP45vaw3fXaq18YTfZCWJA3YvWBQPkvdhu4j7m36bAAWB36srGpzesgaKZpwPFJJs9pBWLjC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46ZfTDt5vy1U7sTAwjQsa7RcDHfv9WB1gYuyK1gSex5fqHtRMFx4Has1ca6aQsMCyPU668FRJMXkHMaK4sWsRXEQ",
  "key1": "3Tt5qxBFq6uMjKqifpeDtNd2FcqbS7xN8Y7ceBxnhZKcBRPhbrvsgdhWs7azKUC5VJ6qegBu2Z9HGfwGi5BXbx7g",
  "key2": "5D3Lay8HzCyXNBLcdhTiF5sSW9nCx7giUQY3GvQwz3xuYH6gvanMMk6WeZJCv9CnUfJQc2iHLkj2dTfc17PLJDNW",
  "key3": "5wvRuwFYo7L1vAKuYbuMj8dv2Escw8Q9JQzA3CGSYQk67VU2nvm3wxTKMi2MYP4chTtJu7VPoiDvhG4nEHSmToxZ",
  "key4": "3sh6FmabswKjXK1Ef7yesHKEzCi7YEtk3AfchmBvhKDkeinjMBwGgphEuNKMaikWr9MpR4ihr7SLjJtieDpe6QFM",
  "key5": "5Nvm8Qw7DadkbibGaPygQ1trDbHFXCyJf4i4ohrCYRUZrRPLV1M5R1PEQrKX5w6KbUbDa3VoGZzhZvzZHmt1eTF",
  "key6": "3T1qP2CsD5PiLJN79qSHMDR61pgRiyEcEDEaS5QZpmJPd25FwGqZabpN39N2sUVYHHSTUi5mFxGc3rq4kZp4XvQW",
  "key7": "4W33BnqoZFxhVe5eDZabUMGZo12xdRN9SMDfVPmgUe49Hrz24cH9HKyGZjxQpiqEaCd5GLM28kjbkbf677Wwm51p",
  "key8": "3QiUwPjmFin4aJ42qRu9zCQsBQ6nj7UnEPNXwUKgwfXhXfUa7Yfuf2H8Kv8sW7PozWc44UC2XnuWuaWSgvrKAxw3",
  "key9": "2dBDr5oykRwHCGfsPH9pN6dQx5XhJFBfN9RtLA6EUBMa2XC7YiFwnM35oAEuqJJdRF2Lc7MqbZjidiRbTZGpnbmP",
  "key10": "CeQzQBfXFrLN3Q8ZbAwd7GuBKoaEyfgjaQdeRHHPTTbqqtEdh2SEHJffdZSoAq3wvDxF3ACvNFivA7Z4RJgcNms",
  "key11": "4Hg3phVFF8bRWwVYoZ7r2XUefXqiQJgx3RcGiKHFEc1VtSELpDowa3PopPTxdAGBchLvnzZZdJMDbdFgftBnfReF",
  "key12": "4NHZGrUHn5J8o8H4uzZz9CEsJqbt3gQ5KCqkvHM4XPnvD74NvNLRJyFnX4w6tfKKQ8oPwWT8CAf3o38dnLoJoACq",
  "key13": "2c9ZcZabR64tKZsp9KESKsk5KU1E95EQMn8x5KR1irg3HW9RSSBXee8qjCJ99xhUH9Yzwuv8gVo1usJp1PCgKRo",
  "key14": "pUE1BtD1htLZ2P2JQZSia4tpodqTFYBxsj3wHGNhwh74i8QJcTcZ14W2LogCbHbbgXiJuJNAC6QUtBKBYDmu7nH",
  "key15": "61drtPvPFu6GbEh8wEYCTxhboZrWw7k52MnfVWeHpEcB5rxSYfDkRcMEVZZQ8uRH4xjpzgta8W2Aob412wzfQirA",
  "key16": "5uzbx6iY5AUwTFhiqXr59QRCb1dD7qRXbb52aPAk3YLDJ1KZcP1WCSPrJpBny51j5cdD6ZNy2u2CaymeNJJXXQyr",
  "key17": "642RamgvkhF2kapFLHPfdpnWvzdJMu8kEavgfVzk36MCMHszcv2SRfLbJXdYG4iGNPg6ifUf2cTAQtfq1MvWpjK8",
  "key18": "5PoEKq42E9x98H9Fv2VEyJH4Ena1mEdiziMgrbuCLWvNWWruTL3xAe4vmNSHV3Uz2GpvvfXdV4Mro4estum6MxpD",
  "key19": "22TMBTCqQGKu15XxyVgAhmEwN8XJ9CmQKEijNXxzqw2wWPSgi3yc1UjEaW8qMaUX82M4fEHWGseFqJcxztEcp3Cg",
  "key20": "jt4Sxo6ByFCEGVTUzdT9wcZTsV1icUQk3e8pf3W3a2AtSfHPQKkSBygLSWuWhneBZFcgi3TLkNw1etRgY2RdhWP",
  "key21": "274JAcMnCYN19FzGLnkXZomzPDoEYStoT62ea2uVdiZvaVYh4dAmznPvHPYTAYEzMpgwbpYGEVs2CWCPZkGudWSe",
  "key22": "jjf4hVYpj65fr8ZRaRowU8p5xLwUmDGEbnyRiAm9U2JF1J9mjjZbgcHWXiB4xJDNFEBDx3BemzkSeNMbninckMF",
  "key23": "4xJY8N9j9Qz9FqKkVAnjczh1yvP8o5UT3ve1tgu4fRD6N71HNaDnEdYWMNBknZLEd6eHA3iv82BaoB33yHW2rjEu",
  "key24": "5ojdHqZfC9u8ifoXDdTs8cbhpiE2diipCwxjVoCGf7LR1EkX7iL3Ufn4Bnte3VXejhaduphDeHHnx4cAaHWA5Qs9",
  "key25": "2Rm6p4JsjJ5wXc7oPaAM5JzSXHGtiWJCENdvAoQUgqwy1efkLG245hpUgrvs8wKGHQd91RwHFjhrxqLro6uoeN6F"
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
