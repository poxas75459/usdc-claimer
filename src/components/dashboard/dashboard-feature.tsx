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
    "2YAnp2AtR553eh3zYKW8nKgfZz31tRiQA27ubFBNuS7QJG7aLhKWR3Yu2rwdNHCN55Q5vfEHHHYuXxjYv4MrtLrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u9UfSy2huRHrbYpBGYrcSasieWXed7wecrTjd5x9W4QgwRkhvZkcX1kRG3WPqUymxN5zQAxgWSJMDjvddC4AvLJ",
  "key1": "pNPonkKrqAtGUQgCZGxyhNwuJPx5TJzaLkqmQ3idERt4b9Uz7vQ53Q7GcDGGybSfxYc8fG7hAzUCP16FHi8wPJU",
  "key2": "4YDeuZx4EBjqyMfxdYbyrpN1q2Jv2gePj6TZ7r8rKyVGTQc7w4io8WvmLzdT1QrEGXu5dFySTcX8SyLsFWs3jgvK",
  "key3": "3xN3auRqM2SgHuzq9hbUxxcXapjWAUU834UBwS48H4xHCAwyHaw47iAdW4qdRaZ7Xro7gNhxruBc5HeNwBNi6xfE",
  "key4": "3JMCyyFm1ZtZYegLrzdu8DGMXyjEbWvk3ckAoCaS9u2fq4XjY77DJC5TGYywLmi5qAB2RkbXvg735eAS1765a8NV",
  "key5": "oZuZsAKCCWHuze2oXKZCJuDRVfrw5GnYifrcTMjmbPyimsQJrrEXdELVpkvGt4W5Xpp2jxq48tfMoMmmMnfUYkr",
  "key6": "29RAKmFkVTGes1L6AaMevo27zNscGpgeiycJtEPsy3CatxEksjLEHVbzWSYainKtAw56qMoz9vE15z3ywoSJa6aZ",
  "key7": "3s3vrb5UxGxPjnRtFjhmVx31Ejy8LA8oFzsppFFAqDknRi3f6STphYTcKMi63iKxfPw9noJp1CEKzzEUQp3WVV5j",
  "key8": "4shmLMm6bZm5iCYKSA1zLDfskzdjEmBaUvMm7WvaDYdRXMwTdXHdBhQEEL97RQQMRr3RLzzQ48JLEtfb8cVaz6UA",
  "key9": "3KuLLbyppHogxdhf7ofR1KzE2QbTC7xU5XBXmoWfD2Q8PLDjEAtN2nGpwLFkYYVayk1Mi9fcCb8xcUQTg5HoFyAw",
  "key10": "5DEL58xeDfbyzaYRJzRQ2P8TfZoSnEWsPtotRBQJDB77ECwd4DaqusZM21QfrxrNiu53KPswofa2QkrQrUULVcXQ",
  "key11": "4QE3cBhVWR8B64F73wQyuzZeEte9tQYtirQGi4uHPqHRLnpVhGGdtv5gmunAiCV4Dz4akAKaYfZoGdoRHuFQPKNM",
  "key12": "5cwEHgmpggRuigZGwrSixhrKxXzEDL4KVR3cSq6Fbf8aWSv9ExKKocbWSvuPE5WMKGjaKLSXECC9CjU7rBbz936i",
  "key13": "2DH6dugsRuKqroTaMK1vLj4RTfQUYGVR1gh4dgdchuXg6DM2k7M9tqok38nMTQrvsJwaLvXJEj4g8GJbjogSi1Bc",
  "key14": "34ke44DqQGbze2jgpK2U6TBPiYdxU3TS6MUWTpPGH2dpHZHjv1QPwQP7PiBKcEc3JPang77j61y84PbqZ4Sn2673",
  "key15": "4jDEnBz7ovY357h1B1MEuBLpgxta8A4dBQRHRv42ZvC3uuR4sorvsL9157oXEqfNocWHLfWYGS7aXnauEefLN9Ny",
  "key16": "5hJesmX4iAFHf79fRc3tgUksQFQSknuvsu2ZmXZMCCRnaxaBpSJkgTgoFcAqhkabUvQ9WtKcvWTRL2bxyTWuPHnA",
  "key17": "2aCP9ThgoEZtUfKDTeVHESCjRfb7F4hkgS7BLKpHH615YuNCFNEPFskpnWvwTqJUcnsk1vL5o8TCgkHZ6hwyYhZk",
  "key18": "3XWcxAuKquAyZZJx5xEMjFsDHfJREspfJYczXCzTcukd9EiekH2va5BE9TKBzNkoLFWYESXYeHtQDoT8KDGX3K8Y",
  "key19": "m3y4fc7SXoNCc8TtFYkzdetjPZE3psSMDuyGCqjsJsZw15bRsE9ye9pj93KqbuL6AbdVb9Ng52Eh9Wj5ySHbEUx",
  "key20": "4tsifHy4ePAkkpC24WBSVyBj1eNorrwVr37LTMtoy4mfrfpVSwhr3eftJpuZnVnefof6q5DFKftCbD8ex9LBARMk",
  "key21": "28oW9DqJBsaPJYGa83pnYxpzYpJYKeCK1BwkEChXpGqcesoRfP3YFVdXKWRBLuHPGVngcqQDXL14dFeu4PfknY7n",
  "key22": "4e3HjdPoGxgKVWuCQGobwpZdaJbXRLuPoVeaw99KB4GENG2mk1nNXeUUwmiEemur42jDvw3o42noBGFMDdXY4eGu",
  "key23": "2WsebbdnGSTmYRmizfCnuYvRrauTg55ttgAjd7TSzeof5uKYXUbKPMexHAkNabc8iRiMxhkcbMTrFTrnJB5AVtgZ",
  "key24": "5UwEzkyjPWpATBVhr89yS5semrD2UBWNPeor4H78ZFbSoUdxA2FSjnZR31T2kyh9XWCbdSU2zv7UE1ThaKVqRUdx",
  "key25": "4y9CpjbWd13Tz3amMAH3d69i5RFdUC2uWkbM1Rv6nyeunjHTKkVwgtZdB6eWZQPnPB6VD5aCfThnjdacFHwYCfs6",
  "key26": "5xLXER1kgoJQG24gcY8bt8xe4HojiXq7g7X1Rp7L2G4ZSPgikRTr76U95m6uC1FZ7GJzVmtS481jvCrwPPnhzENJ"
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
