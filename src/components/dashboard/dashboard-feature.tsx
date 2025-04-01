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
    "2Fv9P6kEjizHMTzAuQxdN85L8kUiudUrppAiEML5PDb4EUyLmhnCfEvTQKj7XKgZMvrVdgvaPcDWiVFsj8T6Wx6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GC69yW1hHUFVCVbsvVC5rQYrtbGsiWPzuQaLz5C7tmRsXDrJtPhf3njFKhs6xeWAtvGii5T196DgvVnTkNAQ7T3",
  "key1": "cPcwG8SZqE9va2TCjoSKkNWvB1vGvbthr2SgX4nqR5poUgmRca2Fui2f8Kvu7we8Hbe66843yck4wphk6rrfX9e",
  "key2": "5y1WuGvjapm7hnWyypNCkvo24HrfRh38qheaNSs8Kaz9VVQqWDKboh2Mb4mHSX8kaRSh3757WzzAYnXjwT8mUfzv",
  "key3": "2gRFw2ko432HtPRUSqJuuhV3vheM3F1LXZQZDwY9FuHyafeC3eV7DJ6fy5pL95d4b9T64L28znVtfAffhmMArwcH",
  "key4": "64zTx1Rv9dYk3nEcDDdEsogypH4Bu9gw7Kn6oUZfkHVHK2QswudRahaEUAjAjVdrzDZ3Pm8Gmphka76eJ26k2ZLH",
  "key5": "2pWumDPes8AVrpyFsvjJvFah287EFX82XaWq9xmkvT3mN9VaKFi7edEMoQRYV6W8PyggQdRz9RGJ4WtkVVuLSzKs",
  "key6": "fPnJWHZ8ixS2JS2D4KEWEDCMr7tMZXF1PvXQhdd5RBeEUr7ERfWx7xqECWmiRjwk5UNk4AwJRQzDqiepdwCgEdZ",
  "key7": "3Uf9Bx8pikWxy9WJed9xqdYB6gkNfLYPyuZisogn5M6RmDTH5nuCH1mGLESE1pzroGEeX8evpLydBwupnkYb6aGa",
  "key8": "KFSgmPATnUoMpJMSANRfzUn7MKdjmEQKXGg94NTmxP76ACR4k85KxAScssdVhS6s7vBVkteWcXo7AnCeH75Za5X",
  "key9": "4yse8KCKFWCVB4NoZXMYqrHovHR7eaoUuiPxe761imp9eeg4P6rUiZWnKhsdSS2QX1uK9m4rDPyFrkToaWS664SJ",
  "key10": "3E7kRzvpQcPFojGpdz6r6niGQd68b13UUrvFEoppJjsQ1qLxUJHsTTg9XcB2zWqCFCU5J6DFGVbWcLV8xd9nh4MZ",
  "key11": "2wLydTgJieReMuqmwQVDo6N8U33JUFLd3bojqBt7ioisSVHMQiW3UVexFiR9kSFbo9r3DFCuwPa3RPLosSFqEeZ3",
  "key12": "4pfAsfS3t32NjrHYLrZKGoofcpWPBspdbvv5BFMxKNTGQpBaah43LtRykxNj3aBbm4WzQJnx224yN8sm1dJoKZxZ",
  "key13": "633A6N1C6HG8YRhpdBE9bJSE9ph1BtTe1h2ZiqQaS2TD2GBgx5q3Ps59sXUTA5K5vJpUa9JrF9G7o74FpU3saMCk",
  "key14": "4GnEqY5gZ3i1iT1cM6KguvmpKTD7edT6GQscyQv1hFJJiPVofjCwSTvGt1tcpmaTesfyJa9J7sBPjzubUVjPNCj2",
  "key15": "3A7sbSA2C5CyU8ihJcPNcytGn2dvd27q1rvink24Td44zeE9AW5byVWWrJUZrCY14W3CKfvZYq1qvM9KDxiKKcZ2",
  "key16": "3uffs5WptDC4nXwUoXDLc2xWPdBnK6NxbsZ4nKuvJEJt8Ct4ZbaqT4LGUrtCbcEqNuD8BTW1rUqDA6YFD96yTRhf",
  "key17": "3dFDq6ZVpscdWqSYPNJKdVf5xixNJbQZbGCVHnC5rbYKabCeMqgcVzdiT2rjGvYsDA6LHvkUX3ECvGzzzddt1MZ8",
  "key18": "2S8AGgaRK45rX4taYJPsj1dTK2DSTFo7NCRuZ48fMvARLsPP3T3WNmia7swNfnjKYfMcT9yotV7HNHNMNidsr4VC",
  "key19": "4X2Ghd5rpAWUJ65Nu8gtnAbpjXMfBuzKT1CENCRTYk4bhmGCmM9Wts65A4ANVFwjniZmMRif8PYUSZyAEbfitsGV",
  "key20": "5rAfZE2rhCb5Q57cT4TvDtHD5ciGiH2q8ZPKwqDEoYNxGdz68t9TquGNkpANzhu2M5YPLSYnJjfLPBYj6No54GR6",
  "key21": "3GFjoU8r7rF7SseV82YMhf5GWu9T2c9DBR6XhhPBcBBGmMnNmCxtTnyAuseSo6EjvcYduEHi2R3qz5FMqcRHKbdi",
  "key22": "2Dx6boDc2ZY2cqpPJBkSjgPVg3rYDdhPWjejT2uZJqU3EcLxajp1KSN8NCh7qDKraoUD9LejgB9Fc1vHQWfUNp6N",
  "key23": "5qZqicExNdzf6Re1UMwe6EAFRC11vzKz46MfSj4XprHXvfRtYHBcLYtFzjVcZ3JfiwAdu8KiP3kqzzrRdjbuTovK",
  "key24": "2SWvd9uz1EuWic7gh6vVkp6VBGDhD2ra2wxVz6eNqV3ftczxm6J4qNGehh6nVY8nZcpVnHURRUbmm1N3cyFqaqcD",
  "key25": "32qB23bgaLbD7d9YvGRCuXETojhtFBM6AtztMud2wqsdSsaikaeK2fm5W2EhqEvmGCP5ejTmWAoq1PVKjQBvpWcM"
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
