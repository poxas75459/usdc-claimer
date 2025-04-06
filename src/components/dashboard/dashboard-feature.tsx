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
    "4meaahbNHmAiLyhGPZydhkqc3bwGFF8iuNTGUyaLe2bqeWhJQc8D34ajFiZX3iufpTxBcMtc9N7GrVzaeimKMNS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xmx9ZvCsiUYiyNDqmmRHHKoSm5iDx2RwXk6ukwuwFpkdXbL86jeQvvo2axQNeJTWR7xFY4X84rC6F8q3gxCzdP6",
  "key1": "HprJKsr1AQYPRCY8pHdD94tkYn4D6STXeiAwEfXH32i5kvLu1eYiPhn21hnp8JyXw92CGj4Q7HFHqVMzMdZ9RzE",
  "key2": "4iHruVnayhz1C5BU5HAnmeGLhtBJWeQkz1rpibBJaWE2feYJLxUqRW2yNQissBJXNM5ZqEbDPrT6GPS49eGSZfHp",
  "key3": "3rF8rTzp2ZTfsmwH1NDHNj8GsEhQLV3C8Nr3SbjbjWo5RUFHVGKVKCj1yNMY8Ph5gR5ZqnsetEzoWHErRme8KUYm",
  "key4": "3ZaawfUXvvgQEyJjcTghCxLLKCXZXdfXXc7ivqBJi7239KhugAfEJYNYqk1Z1EbcNSfcsY598BNsYmSv5mL6mgfo",
  "key5": "HAoy9eiz5FJVu8EtPNvGG27LXirnik2pqYFEHFhgSLgbmEqoCiLtDagaw7XMcPk7gHwECogt4kRU2rkwyX3bUKX",
  "key6": "5tbxPcZZo33yK5cChSsPhk3JPrvxCnxVsfEkdhFaFCBdkf4SkFaDUREDsTDSUDU1HWW56Mp5dvbGCFVH1JR8yhXq",
  "key7": "4KucjqUYLEwHU4V6ufV78EcWaxzSpHG6FjZWiVbEXaGX4dT9SjSxc6vjuzGXhCUwkPaDrv8ZKv44FLT2RtCJCRt3",
  "key8": "iWDehwBYQWSYm58zmTq2PciwCWVupiEwhrpAByNZA3ysjF4Cr8sk2QQfNyN9fThdLeBRGJsD6RUXE7bwR6x8uwi",
  "key9": "3Lx9EARj2TAaMZkfBzZWnZd3AFHX1xoXUWaKeBjZPaWHEoMyHhCoGpRqSqbMEU8BwL3sLcmHQ3CD5cFXvML56dAU",
  "key10": "39fQHn1fsk2UbReyNLAxN8e88EMDAyPKAvQiohWUMfKu1nF1QLj2S7yfQ5NTuTSYCL8LrvKqgzG48sHgkqQACmN7",
  "key11": "62tgrDs9i7NFdowMx4Rb185pLKjxJx3U2nxmJgjCqeraZ5Ykbd2EhNaAiGLX2rdqGKmLyZbuyrsFrLHmPB8MAtj7",
  "key12": "3xDVhDmeCDaqLvZUteaACkoBKL5HMaaGeGrRWKnJoNfxxgCuT7T3RciiNrmyUjBZ652LHXrQjCaY67EkEyES9jD4",
  "key13": "4bo53UQs4F6xf4FerzVCfyePiMnDt5nZLMcu4a4CMeGTnVJ7fJaZY6yEB1ndzKjAkgR341zmaV3r25eB26wmJjs8",
  "key14": "XhKDdbmmFHQS4ZAgsnBPsz1LqhfWkNuHz9Qi8dXaVErvBwtiCHEmogqHjbiMn7oTMwzpgRsrPFs5dcympQSYGGs",
  "key15": "mRZcqE5isxJjf2WuMphoYoGJnWaFBqrhrwAgfph54AfukGrLRkVmxCygNuFfbaEZT8v8tA7V2cJ33WqcGk6zBQ3",
  "key16": "3PAuJeh26CWamdtbBgJ1nXjDqH6nrgtZ8P2JR1a3ih9bWicsSjQNkrRsurgEwADVL3g13ko23c18tXFDQLhr95qt",
  "key17": "5uiJUjsStn4p218SmurUR9mD5jNSC8y4HNBbW2KHN2Zwk19RjwCMPdxZ4cyzCvxHJtGytHkhP6KVWik34KBeuriT",
  "key18": "3sTNj1x3PiF91frkfQayLX7Dt5YzYAjzoGNpu2onMZUA4x6NPYa3Q1Cog1t4cUAnYWkcsgvWV6EEgkDgDqdMMbHJ",
  "key19": "2Zm9ooEuCeHK4kDWTyGUozuXTGQvX1nHMxyTwMvyQZKu647FrzgAojaj1hWF6nvXys4NNcm5Za2eeXU8SdzznYLU",
  "key20": "tpmVP8UWmuxs4B2miYawywH4p7BqHjTySFAfVLHCmhLH5mBYvBgJuU4sVNCxdDj11n8WnLuG9WWLEASpUewoUJX",
  "key21": "5VpmFxLe7ekC8DEqGU6JPPF6QESq3EEwxrkXeH76NZrqKtQpqpqMo5UZdh4VMG6Gqv7bfJsP4yG1GcEFDRBYHGoN",
  "key22": "3bEsooeQ1xkoZJ7G1GNUZ24SzNSNkH3PA3XZkg8pPjKtNfDHNJCw8LickvPUrsugiT9VuLCHh61s4XpGLFdS3HLe",
  "key23": "5tJJxNv2dvfYe2kiqenPWm1Sv81zLkpHfsHc67oxdpuFtmzSyQzz2awbL5t62Bnf3GNypLNFbsBoxZg3WZZWrjCi",
  "key24": "2vLAkST3VMd2JTSsFNrcTriKAYSCXhbwCRHrJqhC8ejBwNLRNzTQuVY5y9qkmwESSWw7bAW4GXZcuoPViAR94smt",
  "key25": "3V8jt7cCgQ89Nwt2WJxct6cKekhQsWJqwDsQUsSDesiu1kHiubmpsvrErAozTZu7YQfUyCvSemqJZGVMhYXonThn",
  "key26": "2MQhzvL5byD63SrYDXLdjYbEUBci6kvKajMSn2JSEf36e8DzwPnHoC1vd3hXcdwUJxUeYeAq7VAWG91khupq7sHc",
  "key27": "26DEt1uBgBcFtA1hu3FnFzkdndyB6jgR2kcnjiHMbDGmAJ4SnsX7DTtCRk9ni5tBBhiUwPzu9M2v2p3a3ih4sxPi",
  "key28": "53MNsQK7YVzcmMxptsMZqKyAT7A2BfSj6b5uYhVawi4SuXkWwKFTXa1iHHC5V2gUaipLN27WJ4psSewMbCYtbdDa",
  "key29": "3qbeZrTYyrXTjJi2VzVoB4waVdiFtdegwfqgPFo4t9ew8WMvsyEnQaJH1DPr3cimtMQWFRYg8X6fyviCY2CPJwEW",
  "key30": "3XdrUWGNLaZv6TzSEE8wLDZxqymvyZFzjq4sEGfqNwz3AtsB68xt35KYQvgurLDaxWDqAwtt1NyvokRiz9KJj3Mm",
  "key31": "4YJakckDkcNpvisq9pSK7fEvjGjwVoncdPVT148pXRPh1JxbnmaDRNqDgRTLtofkeBkoWbechS3EiYrbjr2vyhYX",
  "key32": "5rm8ry5D72ADRGVBjZRmtWxiWQoWWLbW5W6a5hNRSmUWdv2mBbuKAoL3A7zDu5KZrpmgxwQPDbegKdFWcKK79qRN",
  "key33": "5uW4ggzMrieTWRXcbYgi32v9fEHZfa2fQc2mopf4cFaszfntra8TCveRQKVrR3aYTkQJ49GhLJcsKhZBv11gDWPL",
  "key34": "5LinyvgiYwx2vsgvnNuyAjWxE6ZbiaAu8wVZSR2VTHmL8CCS6gNpGrCcZZyUcpDSWsH7n7C8SNNCauDQGxVvnXkH",
  "key35": "2PvFnTvRGXAhBfABfsWBFUXeihWVb6gQMLBFeaHjSTh6v8cDEHWR5Rno1tAdnoceZQA7VmCN2heCkk3KxLF6hUDr",
  "key36": "G2tPXtLT133JoGvVFEALjootVR8DiopdihSacH4VX9EofBP7YyUn8x5nbrjXc4njPCUwC1tuXEiXaNxTChVFxCa",
  "key37": "PJRk6rXGeQwyi48GhagFsw4WmjPP5UZ9SEDpUJLazk8QGSGUPLc4AD9Jx7GMf55zZXv2m1CdWBo6mw5P82oDbzW",
  "key38": "33XjCbC2LUQbzEnLNeXV7HE8uSkEe45KRbTSmeTGQehXXCvZxZoKKKA9F7NJdeeEVvMjic6XAbyyqBbDY2PiGPb",
  "key39": "4t6gCVWhUgnUBoed1fBpmxN2EJqHjkpMxFjNGdcshh9VF99mpkDmgvr9jhmuNy6jiuVsaQ8wrGUPUhiCQVCGHEwy",
  "key40": "2XkJr9T3d2kzB3vn6BwkWMzsYZZMFBLkcHysm2QJJCJo3CmKm9oEHsAj7UWcV2XQtq9t8UgdDBX5NLNeHyRhC5g1",
  "key41": "4rMqvkMYhyrja7bUASDyyxCGqbaE7AgxDuKE52H7RjaPFhQyn7nFRLEzSNVAywNeisoNzVeEWryWbrXQ29ZhhPem",
  "key42": "4JZ1dLrpP3qjTykWVp9h6RKfxWvFRiZdHFKhox2E6Cp8W7Qhr9dADZ6upbwzp5i9PjMY2p1qmaxVdhPJvNGFQuTA",
  "key43": "4b2H852DQDLNJvhrmkUNv1B3KQMttPSsFmVEYn9Lz815LkkuZn2nKg6q9bMDUgpqJGoZpPdhcxjojyUMXZrw88Vs",
  "key44": "2suAKWKVDfZGwxZj1HF2KE3ycWJrYTQyPD7maJXGVjGyEnCUoXF8h1fje4o642wfeDfNGJaREHAV1RUnYVpBvNVf"
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
