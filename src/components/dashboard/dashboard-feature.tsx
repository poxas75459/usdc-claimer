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
    "3p7j1ickgJrXQz7smbJRacfe3EHN2gCxU1Hj69aysPdMWhNBfotvTSPi5jVRwj6YEb1BLcsSC5uThKexNrRKsQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HHz2grNv7QETPe9wtoYo7UEhY3AaqXH3L6P2iFRDVxn8ZGHtJgnJiXpTRMqcJus16piLdLhWQHoqTSgjALDuPMD",
  "key1": "5QSFfWaskZtyqZ2x2ewPp9RtiZEEJ5D9rgv2ACQrLpnHAEgqTB5b9gTeRYDVCJ5ekWb8pLGuHUALmjtrPZnPJjmw",
  "key2": "445jE2RvpthWEUrmRQ3mJmNBNjBX8DoKjqmmwpYsWzewNHdGUyoxCxmUpLAPTi7HR4xiogdUUPSE6Nm8SZDUR8cv",
  "key3": "4945Xj8kUVaFKEmURPszudNP1efMbATJBWZxcYuR5rGRFTzZYuqdocmjM8mYcnjaFYLnMSNwZ79fK4QJXfgT2iYe",
  "key4": "28hXkMDqa3HmLPmCZmLEcFp8Bzf2wvTZU2KrnXBd9XixGPevwEcMazLtB5omYCgcx6q4GGtNLCUcGRqkWQZUqmUM",
  "key5": "2ss9UPJ9VASUoZpKyMGhuXc85jreQWrefKZTd57qPNxacU6dLry2P6njee8wr6zdV8rUpHh5HJh1Xzz7u4TNjHV7",
  "key6": "4Fp5tUSjkUgMj4Mrga9rU3KagK9JDwfCxgCHeo8HWiBxmnuMNVLXmrxhujbYPUMpXcucDaAJT1MNzw8cJV5MR2u2",
  "key7": "5skEUAB6j54RQRWQzEVA61MFfdqGzSPvGhAyomb7Ei7HMZQqkwHnqqQvoYbfMNJRSVXX3LS5eVQ31kChY9RENQ7v",
  "key8": "4ruaLYrMmaCKudX2V9qHcxtmhec65WaofEr9bcMJ83twfgVeczxNfB1heTC1B8owwUPaVny8DcvVhMRRvynac4ZB",
  "key9": "5YbXVFvmyPBqTe4sTpzBrfHReYsNkzJ71De6GBPvVosZ4YwT3wQgT5R58bhoZxSunD5XgoJizCJFESEMRB79UnFt",
  "key10": "4pvoHiWYRm3mf5Qk7SNp9bG5RpnHaRBwKoFAaQ9SYBWQ6wa7sucH9NVE7bNg16oN11SYz1b5Fvyffi8Gc6hn7A2y",
  "key11": "3C2jsL2MVMLzgQ4VXDxsoNMUH1CdUhqnRJ1g4bR1x9WmHJzBwgJuUHB8kbDi3VMG2fWgKjX5GcmPK99zo6EEhvLK",
  "key12": "a6jekc9SutjXCKcxYkQHHw9uTtkdsjH8iJYQDFuYmw9G54pwPzNw1ocm1tEtLvhGf6UusXLCBamFk6urHTxKcoe",
  "key13": "qR7888BVPvRxiT6qxvtG6QQpjtyr6DBNE2HJSe9oEvfuce3NRtAU73ArRt1SnFY2B3QNrtarv7oRW3kGZoeWkka",
  "key14": "44J2KYsZHDnsHvZKLayLNxqqvMVRWt1ieWFAx7DnjEXmme7EA7rJ1jsYwAJKLcpP65nfwCtRLR8ssHtctuMSEgUv",
  "key15": "124ongkR4RQnGPQXWaBXGtU8szkCbhMoenc2z5b2m1NRuHcdxxXvXD7YKZb9Z8ysQ9AhgzAnCjDBunsafA1VGx5y",
  "key16": "3N6rnJGT4sThM55jB549o1gmwvXR68vCdDwf8tbE6DD67SkffSAt75fskXpokc1eqS7vRdkyabBLNP1F8Suhbbpn",
  "key17": "3V41zmdDYk8CCJrcXw7JUuejbHBv5Cv7rvHXDDC9k7mhEBrgr2Lt52tn9Gtu9582gRGGbz63qfEfrZkcNJ5EKpgB",
  "key18": "4CVYSJEGAi9gAe3Njp2iBU15skw7kc59HimjLRS1KhSyRKA6fSVB8efT3Vm34guixpYC9m641NeipUv6Kpj9ZjLy",
  "key19": "4pQdHpCbnvfndfA8posegkKqXkxWgQtVBjUYYpG5v2ugp1MwGwoct6jZxu3TBjqEErsZkvQUpRSSE1A1G8THpUGq",
  "key20": "5r9v8823KmxZAa7Y4wwkFfNJDpWzja4amDVumgiUwQYQZ19L7fhZ5Q28N7QdGwEvQF2QAbfSqKt7hHfTbxJG3g4V",
  "key21": "5y8qWy2Hp6DjrHzvnY28fa4dPK1L7qRtxYeRhRK8YBRegS7fPVmXPtBrtgsPu4LZL8HQPRx2v8HCU9Qua3tsTTNA",
  "key22": "4zpa23xEZ1d5e1ecV8YkHk6fbwiUEXGdpjvagbxYZC4hJWA12RVogyoJ6zWUWCb5CmcbAkKPGdAxNwvHRuWmPdjG",
  "key23": "2TTEbR55KaJU7sYNk2GDyjnziidCMQSqT3jzZh7ZczaVMH1QCuHhKX9CUX4kKxyAbH6aiKPnUjuEDwdAJdXkqPRX",
  "key24": "2yfTJcDEB5LaGbagHSaWDhuZoJLX4fDD7MbL7CUJ92BJo7uAV1RdU2Aafppm9M1sUQWdw5pYoGS1AZZ6LrSJ4vRP",
  "key25": "5ev4MhD6Wf938JT4xszh4kGTTXNXMNuyEoArMnV6jKbuE2NyLG8nLytE4HCFiJoRqoVoiQqL2jAZiG4dUnGFMADh",
  "key26": "VvoFoBZ5EXhafrHCbNT1zQY49kQh6zgAjroaAcCEazmvN8F5UpwYPe4MzbwHSzha7xypKF4La3cErBApoKvtje8",
  "key27": "4SUNJUPAhy1NZECbJDtSXTuVn3VzhPdvcCjTnt19zdkhp8dVSuPgkXwrG74Mwp2kYFqhWGUouKP2V3nBkpPuYUVW"
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
