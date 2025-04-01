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
    "Z37i5oUKnK8b7zfHSn5c41JXTqunXvA2UYbUf1An1f8ce66sStPX1kspVhQWtnSUiC5QXxRdHNoRCjXMRtNH2Tz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KrkrDRtiptRSF55BPuhAgh6taFerCWWRXEXULCm2MyN9FbWkgnYfNtqzpdKX9MC7uobCPfQmFkxQtNS48EzDwPA",
  "key1": "5Q3jncAR9f3VQ3dDUKFXZs6tusQZ9Draov19mSyQ3jyifQ3EznXnr51efK5gdQ5hXXzJqF9a1esAhxHmn212HUAK",
  "key2": "K53K7YvnDuh1LnnXVR1Mn7X3FWSTS49GqFWUfHeVYdHs1mczEtJYjsoe24Wj1wcPDZTqEgwQS32FpHqn7gWvcxm",
  "key3": "vsY1Hh22fuYp7nfKBZeeh4rhG9znNRjdoW8ajBULfqKWttNLYzjkzLEf2xtXUuLYvddLW1RktZYcXXhLhf5MKab",
  "key4": "34XkMk5nBPKZrTM3asH2qFNSs44Vc2yFsVznWVwEp164mYwEgZpCKZGeWi4Ze4LZv3a6CVH6irecE1zucsmpHPVa",
  "key5": "4HfU1kcEbuz4z9bXfKtCeUDWK3JQeJ1SCG7jzAhMCDERwV2FopK4pYVec58RpHtEtbMMQxfCwPzaouY9w93hpMhs",
  "key6": "5Xx5WfxxKQxUVMs3ChYwUXbsAkkYezVijfw718CofbFK2MULa7zxBBVLNWWh2LeNLVCbaPNkJDiEL32RSn74AAot",
  "key7": "5ehGzVBBPYin7LSkQjghXKVpRSFpqwRvVecDcG2j5rpeb7wpLPQZUDr3LouBc1u56MsG1vzb68FcLKEYBZoD8UcV",
  "key8": "2UBdnqHhkk1VJiraRdFU2EM5WVrRjFbPxL71C1kAAvcfDZxifGcP6Fk8eXCH5pzWp5o1p22MFPNZ5mVGrbMh1D6g",
  "key9": "25dSQgaxwSqfdiiucaUJdyu9JwJZTqtCMjm6JmLjMqUJ26uj3x8Zfy3RQT3T4dSSa2zFZtHZqSNRrdZCbPum85Aw",
  "key10": "3n5czifgbqGiHgg5peCb2Tpr3tSSsjoGbv93Yx93E3rncmkrD6qVXDxwXt4xZUP2T1iKyrqLaPpmMRhWj3yZZFPJ",
  "key11": "5z7mkRyTT9uBadeBnKLiqWdLCtKnp3eEWsEygQPUEzwnTsbkFo2iyTes4zYA2tsZCHPodKLwmLhEMhmTucvNo6F1",
  "key12": "a9ukYhT5q8BRds3gRgvCTK3UJPWqAh48sC6vhNa1sTL4n38LhCJnwrEPkjwsJRsTsf21iTPc1WXDbiDPKH4W8U2",
  "key13": "37Pk98foZohfVmUJnHb867vojZ23G1mtBB2oqyHeT7CiPaHTQh1V2V2ipfPmC2b1Qg5zgqAtBk1R7vppPfM27FSN",
  "key14": "29VB8qiqxDogThWbVgirBN3GFwRYMDDxYDK52WF7L2R8mWuyMa27ohLLA74gStwtuoukF6Lq1Ch2BzF48sN6F493",
  "key15": "4wAmsaH7zMuDMXGoadS8RZMuRurH87YTzr6coJHfdm3tmQ1chSeE9b8Y5742qDD83gG3cnKxEK5L3bbD3QRvfwug",
  "key16": "n9xTZmts2eEnfXNw2nocWh4PhGFkEpzymMtMxpTebn3M5v1xp6UcyHVfJtccX6P28o3pyKjhRvDUtsfhmUVd7JL",
  "key17": "55WPBy7G5tgv9w3USXx8qrfGHqngkMGzf2WaWmWsE5cr2cKa1aeQhPnWgEqoKwFpAcdbgKfyvPScu7c3hpbN3GAv",
  "key18": "yRSFQvnsX8EYCZeULNAeqh7nCuHtqmfivSKUJQhZ9r6UqqGh93MdqmR7cgmBn9exL7mXTstiPwZSLaza9rtKpUq",
  "key19": "5NBh9ZyavyKV1SDc8K7nbgP5NYyFa33k9SNWSSybeGDswnCVfr7FYE2KdSZEL3CZbMzjA6V6AS7VVmZiQwV66V3y",
  "key20": "d2cqhDFHvWZqcntT4cSwUK5uq82Jphb59SfcZQRbc9Te9WtNXtYMvwHRJSt4f7dBqtPHiF1LVKLkEnBWY4a5TXh",
  "key21": "4vuAuu8rMPPFdipowpUj1nhD4PboeHKPf4YZ5o6RPoGNdDeLtZo19mnt9WyCXo7PEneFYXh2RxtW3wcYyY3bAnYi",
  "key22": "3HQBUY8JjoKW5rApxnqC4QFj7rfgw6aQfsr3nxqQQhBpt6vie2PHCfW58yk2qee6ZFtSAnjQvKzVSHMRhs4RHHPy",
  "key23": "4w9Z8A6XqXLAP9bERPT9EABWTtCyyZzKPLv62GhdcYnHjfR4HPajKs8LKwYuRNrgZ2rXHxN5Zz5Hi3yELVDf6drw",
  "key24": "3mU2mXTthrds3HP5AdcZ2y2EXHn8VTsK84VCYJTkQC1qnoXmjgx5Lz7juBDDdW7vfcZSXuVkoP2tSv5geatN2qMs",
  "key25": "VLkqMXx7ceskGCUmLXMrAiayt3v5MYTkReJwP19vgRYgS8b5BrCgjntyJx7PyV7BVhtf7fU9L9L8U1Bisqtb7Du",
  "key26": "5T6eWkWxtnu4gGXeHrQYfHXALhFoHiUQf6Z11EYkYzYpgbySYntjUT6ZSVCTVHJrAjXuuhhuSbK4fVMU7vWwwVn5",
  "key27": "27Ay9sNxMGMNyPpeixaCE5MSoWX6QDMEcxc4jwMxkBB5GK8rKP7w2xLnWTB435ma5SCBmgHd5nmjAFyveahBrawJ",
  "key28": "3guceWSzBkB4qwqJLzQaZAP4U8gD8e9S67Pg3svehjVYLmnPHM8JBDjEKVka7QabsyYdt8KHuAZTfuPJRdgeWRyQ",
  "key29": "42rDYjthLyfFA1ZPpfuh6xPd5sPrr592xHDXdGB7g22jzkQbgGa1YXViY68NHG4BZVAQ9m7MaLCx8BhRRbfzUiiW",
  "key30": "2vq1PsoDyNpk5KsYDD6xpQy2QEAUY5zPPQ5FLyZYa1VpSxn8pp5tRLokyHhYNmk5wN2rg5GrNstodQtrAEKF2XT1",
  "key31": "2u1qdcWGd46j72JZL1KKnWLdxU9QR62euLrjwzBJ3v71C5tKy2M1uzdQaeM4UB1MRXvvkuifuDhoHQcLm1Rci1BN",
  "key32": "3eXoqY2vuj11hMQa7ijX5uN8F6Ht1Zw8n4JNcHsYEBP8cmHKCzaWzWUqtq7ozrCR6PBHCs7ERyZ9QuHnS6bsTFFb",
  "key33": "3sEsRvidvpNNKGBbygevTWFmimVNUAQVvYxRQxFZwtuqvtQEmPdfpgv5aXYAS6eiLAxEe7G6BBRv5qHvQ3MNJBN4",
  "key34": "22pTE2GeAyDBMDUsRwiuzL9L3cW5zoR95TaHipHqd6p8AxHQshq5eLnXJxuJiFXXKU3VemWuzXJbt6WGxGpiGzGW",
  "key35": "WiBXHg1P1jip7W6C3JFyiUXL5chuCRQeQwDX3dVbieNpDbqeghUPqtPGXz363v9ArcHdmkD52Rmf61tiNhkvhxH",
  "key36": "3Aa7mdYfoDSRmWpYj3Zu8nxxAZRbmWcGpnbkVx6Hv9Yo9gz18oxFiWQhakAymfC7eVwj4fUtzW1PYsDVzTmUcSgt",
  "key37": "4eVYvJovu7GVR4TDc8pxXTGp59TuNCEoLdiGQjQNKEErB6xEBLve7rNc11ZK5b9s6TzzYfZ8CK9ExtXqTsRXpMNa",
  "key38": "37PEDhMuzTkFE7Vkavv6tNMx7ZifMpcvkoCHTV7PyNAhNfQZ5s6mFqyGhrx8pKA278StUaEHMqVsmF5xn1vk8SxA"
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
