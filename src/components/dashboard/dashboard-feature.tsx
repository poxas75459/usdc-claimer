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
    "5Bv1U21qwL9hE82bLNierhVc21KvkqwJLGwqXPCBpkDQ2gfMykQq6gPhRM48JfUcoaaVDu8Ff3j2ZeEeNSioSgLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41uKRxFknQw9mpbUqVQw1xWNh5kitF88UEnpcR3DmCHe7fv4AggVMEwXxGosgxwzBhv2EXLZabuod5YS4RTDXnhj",
  "key1": "2dobW25BNLXEFW82GMKdaWQoEWav5wpwusQvXzWTZh9gaJGKRBFCa7oGZThNduk3UPU7A1UDnjnezEQnWwRoiwMx",
  "key2": "5yh5iUPQeeRQKypbGVnMqaj695QhMRv13XfDVajjNKXpzHr98xCkSD85uWSy4ECatfWYmrAXgtK6mRgJ9uXVevWs",
  "key3": "3SQjaQurH5BGH3mGb6aAQ4jPYzVg6yfBAXoNZYj7tSz7VSFU15QQdjV5jq555DF4vGxHDavAeFCncSuGGPwsrGb8",
  "key4": "4gZpuo7qrpa917BaWiFvkUVTh7jYHc1qAnyLiAU5DF5pt8GLjDWoVTS98mMA7LJwHqcRKWtUgQXQgvFNjR35fbXk",
  "key5": "5ZfrSGDsBodRBPGakczvHs4zUSNZUU5hunrxLDTkaKfFeou11FVRSUmDoWgkznuMB3jDyNhF82yXEyqV4x6jgYnd",
  "key6": "2adNmPxkBvnVgVZjk1QijL9ajWrSKJamLSkLiRX2B8XfVNtMs9QzyfyBQ4qkveKk5Lpd7kYSJutXJrGUbV9uh3sJ",
  "key7": "3rhbhpj8aE61xdcTzrj7Aw5ng7a7GpsMCKb28wdRHeY4JF2NP2uC5dhTB5sGwFZpbdSJQuVPF6ZoCSZqsf8YuC2z",
  "key8": "2mVsV9V8tctgKARjptYXnyvYYxLjY1HFEgpNwyzfurs6wiG9rVETkRUndYd1JcuqLWFKDq3twTMFSRPye188cs2W",
  "key9": "2NctK4c4Zo7Ku7PtyNgFtWBJQC8t3qUKJ5cQM3ZFZTPgiYiGyVNzgE28DebjyGeipP3fw8Ynr9WDsvyxZJsVjFeX",
  "key10": "4z5499dH2J6q5GnjWD7KfWwKsUp32v5m6UJyP7gBeWo3h9L3rTCKTQL3bT5u8WmLEw8XqKQ7QqcUphc6C3xernVC",
  "key11": "2FLhjgmWTQpTDYSeG12Es7qLu9zFxWLofjxvhuBeFbEwpMpgEh4PuyZu5xzQQnUiazrq9ZhS7z4AUcVLf6TiYF6N",
  "key12": "5NerCfbdLK4mzx8AkxZSCtdx8nCEQQyt39WhnjYNreRtiEHmKXn6H4XdQSnHZFXM3eHJF62vDeQP3tyP27wwjJ1w",
  "key13": "4JPt7Zi5j43YzUwsZHzrjmq42HSA8V38N1Eg7WaJGZZ6EHwqQunNM7TrFrHniYWw2njFj4WaZq1PetdmSwqBapM2",
  "key14": "2LkRKHT4q3XoMSkivF5jk2hGcsyk4eQpX2oPkr3TSmkEWkVQgtZ6kNpwe6irWj94mAcGvrDU3rzGpXsmzHEaRbUe",
  "key15": "2uug4LHnWeUJWP2L58ys7yZfgVBpPdii5Rh1qRLSfRe2wR6UyctHPL7AWgWYVR59ijkFcP1zhoo9VPRb8yjczojV",
  "key16": "4tdw1ZUAEUBceZoTA3SvZXMoazSg6haFsKGJBKVdCyvxECeAGnVDdM2Tr8KCyKnnfHR1p6hAQuQqjt6muDEBdGfL",
  "key17": "2SJaFnV3LDYd682kpx3rmtvJuNXsuQXzfNtS3dA8AAcVC8pFERZ2xgsLgJ2XkmQaeZmVQtMBiefqHtgeoksvNz2E",
  "key18": "53qasP8nV17QmvK68FKntpfFE4qvruWjNG6LKUqytVeVcGMQ8LDq7EEkn7Uw2UTkvH5ZcirHiCJspKr1TUNQzxDJ",
  "key19": "5CUWgc3QnUztTuAXWAX4MRkwBoonqJFYg4xpDU116cBivCxvMa6oy5gCSok38stxnRS39hBLfYHgaMczfvwZ1XW6",
  "key20": "5qRiiKoqPCLRhR21uUnxM2tmGwx1GSdKZnCp7Pdfe42As7xC6rw3dqZuXWVy1EnnRQJn3sC6ENnbizrnAL3p4vEQ",
  "key21": "4yv9ywLhWEbRDeYxXFziW6J1AyAKq7fP6FQsdDQTsbMGGeqrxh1LQPoLfrKkC2UbPorLbWKvYCeoVC46xiYvDYv7",
  "key22": "4ZNnSsbkjyQ2Xx1vhqr5NR3xuNezjBtWetTXZAUCAQL3UdLroAHz4cDqtEniWWuHtdinDSTUXorqg6zHhJZCuTne",
  "key23": "Cffe8dDoFfbpgczNzMEjYB6t3uDb1wGv3abUo2Xy4srWHqUSyDHztzX22oqv2mHEMqKVHKNqqzJbHDQ4a6fAWaf",
  "key24": "2jYSK5VxPUVCyaJMFUcXaxareBm7SmBqSKEtb7pXnqRE5Fap4STdTuEFLw8KCS1urbDVfThE81pc2N2VsQXcp4e5",
  "key25": "5eU85inrFm2XwkFmv4kpUWY4o7vkek5ygBSfpHK8S2Mhys2qc5HiGZmUgHgbJkFeuggMYxTctotuPXgZPmd7A1QX",
  "key26": "bwN88PuPYwmB9JZMgkMNUv2b83JekfA51KWBfGk5vbEpMhcfQFjgfeHgDkdRZbG21HnX17gAxW8DZXfBkcwe3in",
  "key27": "5L662Rghi4p2HhRMDpTwZVd2Sg3i9fK8jjNyXMmD8FM8NkfTtQLnXymNqKW5XvaaRHCeZfGpAf8wf7YsGmToWXxs",
  "key28": "zt9vTrSF1kZ4mFetkSgzDUGAwcfneY8GHNKF5fcjYrv6NnnVPdyraj9hrba7wLEjVtgyKd348gR5adikNXFKgDZ",
  "key29": "4xYysdAuUuev1hCeY1SYrB1b3jxjTxY5wMDnbUPNuL3KwRGQreyScFaRzTrrSa92wnM8Q7rzg4pa8yqsqZ6i1JzE",
  "key30": "3SrbMEeJsJi35E2p7QoT3cx33H2r6i2KSFJ6Y9k8r6VATHaLC4JqjwHKqN8swdLQNc6L8UAfsSDmfFHJL4qXb2jA",
  "key31": "3NWnFpBhwxEFnXaCXSoaAgNdhuUPLDD39B755B8d22Vzw1PQV2z4bUHHHV2cQuzeKzdvciY2kWBT4f8knWkbwagr",
  "key32": "3TwRSqxX1zoFZoGd6r6xy5Jkr5EvaYVqszggw9etBip2KLmatbjGxf5R2BSDNc4Ea37ZUjoJwy5KUwQDUyWo1u7X",
  "key33": "5AMD9i7Gwx5WSWGwwffvy16oNdnGg9SRz3YDQEZpkypp4Q8LDKfj9AJrY1tKt2icb7LAmv2ditTXSfYLyb29yeKr",
  "key34": "ZFfLbSf8pJPZa3Lktt4s2KW7AGTeMPSoyrRXzxFT8R2qmTRbbGM7eKDLg5ZpPxZwJrEV68wQ8UesVp5ji1p61Ug",
  "key35": "27JmE1ayAVsZ7dcYtynwY1jdzx2x9airjtqmeUS9sBctz3JC1NTLLtU122uReAMx394syxVDSGeD4rxyeHu5dQH2",
  "key36": "4Sm2djXAjYHjYeH9xdGMvkv8RPJo6jsddvcmQzX7myKW7shM9noMKhqTwDrNqS6Vk7uGMrioRvgzKNvLYkZPST6C",
  "key37": "23tfgd9EtVS1HCJ4QZ3JLay3eKrdXm75vQGRB2MstZow6Q67xgTodHR8RPbSh7sAzEhPYdCabKu16tRDkxVeu9PE",
  "key38": "5d8vFKHEHgqQiR8GsAN5EqFrnApsSoAyXSWJ2X2Led9u7ih8ei8vCxTYKu5f7bqJdpZj9QGbZm1RvbmhfbUgR3YZ",
  "key39": "5D6hYVReg96Ra9RB7Xbsfh2ztfsN5w5ZVrY3yED2CsPktMrHTfrGAz9ar4fAPh3XtY8mHV8bPzrCoxDpH9xJcQrr",
  "key40": "592sxz5mxf3C2XcpFRVuw8mYeKBN9Bqb6Gf81NKUmF8E5BcN3WUvwvnMF9Z8MrCoGQStk1h6N8waKcS7YhkGkUJ",
  "key41": "5xUWmC2kSSzAc4LU2iC6drhpvpip3fNzL8XGC6UreMxUZ8zwRkP1A2sXWETFuXbTCjfhgYpA3fjHqqjPnHBABcKS",
  "key42": "QybP2a9faEMbV9Vxw2VreoHedw5uz2jC8XKQTHL2kv2wXHS6iAGpsWvQTNEQVzeqQprZ4XNue5By5m6W5hLjnZU",
  "key43": "27iB5U9kQwPoXGQnTH8g4i7aSbuTpB961ddSffU86YfxceAomDRFM1WXq6padSNZGgc8Zby5BU6TWe5WQPGWv1Ey",
  "key44": "2mAMMJeR9Hw9zzpkpCrMGvs1zUTb4ucfACyYvhcSpNDLM4NHZyVgcc54TaCBeaqCeuY2TbGhKwHNrvR1F36rN4tY",
  "key45": "4rgvSgiCwncvTbjLvtNeiYzzubgbAxaBi6Xfz9yEsVzap2D5axKfmTtSGmWnJuyAyWpeYi1GyQ1DixY9VFAedQMS",
  "key46": "5xDw9BFTj3rgy6iLwQDH1FvjwmS9b7jkyPQQNsT1Rt2YzYZzF7V2tXmpmJMWPNPRVMFRNHgNDD1PJvJ6CLPtqiFp",
  "key47": "4grR2CVrSRk15Y9KSNgVK5y6Vpq6UWS9GuG49eP3qy3yX4A3J3G5pcapRiw7uckt4JkoKMKRh9FG2JsYwucXMykV",
  "key48": "3T4mPYFbzkzcmVbbBvsYX9whsHQTryAVN2uDq9bfZKNyrKcaxhhcZ7dQgrnRDEdiyqgj7xQns6Enjmui42PaFTPT",
  "key49": "Vy6uiZ1idQocNLvbQBfm6jia91HnnAeN57PXBpJfA4MPYY16DzLUTs1hdPPmzespXrtnFTR73oZ2TBTdHbsuMtq"
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
