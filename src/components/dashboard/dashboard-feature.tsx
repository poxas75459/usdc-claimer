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
    "3xKnoxfQB66dHaSMSCu9x1B87nsZtEQG9jkux7QofnLwhcxs2FN9GpoU99sm9Ri9gEysGTe9F5XybjUofYKtUoKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VMHjk5DftnmhENyyA5s3SBcZxN7BuTPyLo3BE3jb66dDCWh5gYps4y1LQFwBq4YoV3GY6nhrFN2nWrjrCH59P3p",
  "key1": "3PQEfcHHTJX6h7YLF4H8t7DsgXKj8rztCz2v3RVNVgGNKt6Ms9qV3aUMUhKm1HgHBgrZFFuzMBupry6euFWqm5FP",
  "key2": "31ApNxQBxYgp5oGPFtdWgNUwFQfF7S8NFixF8exzzqNJ2p8zUdY5U5TUihJjsMfa6mjdJ6QYbhQSEWmHtNREzYb",
  "key3": "3sbBg6BQ8C8Z8NCCHFUQQXZ84USFxUhVB9NHz5QHa9Rkm5jjmn8zxebRuzX1FBoiYrSFpnYKLiFVSaCAKUw1SqXb",
  "key4": "2K6PY5Zvz28WZVHtd9Sog3edX6qEtnxuNvnNZv6pCuhsVqV5MVs7rVtVgcPUzPpTsdfuQ2sngfZpbfyS4L8nj8tC",
  "key5": "59MYbAjhPihKLrLqJYveBAGHwRUB2KSDwDLZpYfyuFGKaqxGifQxt7QbtaBATBtLq5MLQRaNAnBzAS3M3wTP8TKs",
  "key6": "3nNM686uV67bh7CR8iFbV23oKY6gkJ6jLLB3DBDpcj9tHaxs2fqbdZgMAXVEUsyvERAwHuCRSAoGGfrKJXySfZq3",
  "key7": "4q2ZqoRTG9mGbPPDHHWACGaXvP4bqCwhSWSoctfUfQaf2TQSr9xKRL3jmTh8QZ6h5PZb85kjuMg3AsJZE2mRPsXV",
  "key8": "reJwTqhbEbvqV1nSRVQtZZ1ndmcWadakjCZHdDFg8zyJHZAdjpte8KaNM1p18dWMwkpoC9TeHKhJ3No4Lw6Bzgy",
  "key9": "3wpZxYGa9Nnjrs55ChaLBFvW6LuWYX6Lx6drCVxYpm6ScoguYySKdubdfuup5SUvvMCraKuwPGZhaq1awL4mCdx6",
  "key10": "312q8jD2ytrin8PmmnUse84uxpEPrkLvKs1RszF91fbCap3VCwL4hDzaKMRLJdwRB96fC19LFXLDGBstX5cvayJQ",
  "key11": "2CAjozXMyaaYztnb4uumfeoSCdvbi2FuzQTxKbwgkr9wdWbzD9fiByfCGiS7GL4bXuTN4JVaLYRaRkYPByun8PKh",
  "key12": "67ngFmkTKs2zbPHpreM8VufoznwvHqCgGpVtggh7ApJeZB1xuwJMsV8d9f6xigfGEJ8Vfn2oV6qfKxzTAHgpekb9",
  "key13": "CLiEkU4Z6EvPP87vVrLChZ6jazYf5aYi45KaysdCHaCTcjBh6vTx67cuNd1ykyXkBdHTnqy6ngWb8PKUkygsYy9",
  "key14": "3FSwEyyQ93kzjbJ3eB92uViEf27cDznSeHZ6eD6HYnKjjX29RAija2tNEC2MNEqB24B7h4ZYvB54G7miTfjhvtXA",
  "key15": "5SDaqrUpTjJ2gRThdkveX1LhB8ptJsCEwVKok1bD5nrKoNvhHWqrQSkBdE5W7ypSKhQ1ALSjTTtjK9jqpb5Xx1X7",
  "key16": "439WBmp8KPpfBXhYmsPEGDZWJsrftHtLp2qZbXxNfRg59avCETMtiFapg2e7LeJDpEpf3RNNtSdrsex9QqH1ncsL",
  "key17": "5R33cLoseJ5RxDpra1FnYV3L9hgm2Xbva7JaeB8iuF1cZZ3GS9Ks8N8zAwuJyp1ebxHnpffgjUmWqrWbRsQBsBFw",
  "key18": "4ce4bfLiK3ZxCGNow1vhgN4HezcdiiGjoLs4PhcXKwom5YbmZL4kgTKVPBfiAJDdwNHQWbt15taz3L8Bd56vFRNS",
  "key19": "3V8LRCvxgD7nArbZGxkPoF1pWux3xQcKhxsRpqbMKBpgEjJcs6oPBcPnKPVGkoBSKq6U5fEt5pF8uA4C5Yn3d3Rs",
  "key20": "5ZXbAih6k3gYxYdJJPnZ7sLKPjaWZZCVUWcZLmfy9xwpBNy4pChJ2B48YqYnSTMzfpiFmhxRBaku9eDGYeUn3C9t",
  "key21": "5AfTc4AfvDopAbAjRS45NMHnJtz8XL1NP9444BgY5FTBQr5e9qCeKFt3iy5v41UenZmhgU2Gwwz5PiT1m1Kv15bB",
  "key22": "4fyqGG67JnFTcSq4FhjP6ksTksV7rvKguJJNS7gSRmX8SFo54ngrpsoMvuhFVCtJfBTgKkyXkVJzhyXB9wTdvYQ5",
  "key23": "2Jo3NAdbmJUHa6Pfjv6VqT5Qp4DBBj3VceXB9Vg8KtHBL4Z4BKSTQ7cQPbZoRFWQuP7wqKZgjT5WxyEeazY9T267",
  "key24": "67LvYpcLRBAF8pxWtpEJQZ2VwjguE98ti4oVqpseRZZU5eqyBgBwFVhdvgjpVJ61cPLETTuAHFUf9oZuk19VM4LD",
  "key25": "RrjeNsg6cxQDeh6ViktQ4VSRUdUiu3jUQMRzcthVFw9B7mKkrAYrUZvizUYqV5tauJ9LcrAC6SXaiBiL4xiSrxd",
  "key26": "zejJ3jwA6zFg8FHf9U4BivPYMChdKCxaxfomRZ3NzYF4DJbrNvsYzAnTSNbhiyNbK4iNQ6HxdKUhCYrmZdWGrzL",
  "key27": "4hri9Z34o9TrLdfMCDyp8vGECMiaVoaMsLgJ1D6H76vLZwc4XU1hyXk9w2mHMaY9SUvHwaVE451hpMcuhNbqeNED"
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
