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
    "4vwwhWA14P89GLZJnoYiFqevjsGstcjBZPJomm5mLvQvFTecNVZP5qWmCb55JjUvdP6SN3oKPMcDrLK6N6Muym1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JSBVgxrZDRaNvioVQBfJ2jhsH43AXshnCV6fL7QE7LBptNJjYZbiTPg7Jkt7JPBVLkyCHho4rXSqyiP27R1UNHr",
  "key1": "5X22Za1uZnS9aPTCCVY2GXvxaKuurofRHgfS4VBsxeiPBeaT42SH4ffqrcCSWi6yEkRKhi8Ms3WfZ9jNe71ATeav",
  "key2": "4Kbqesqd8UoyWmGpb1ufvKk8JG8DSwDF9NtoqC4tm3FJZaam2Esc33W2TRGPojyK1zVnu2RrY7kzPx2JqEsMQEde",
  "key3": "4AKEzSnvoQBUfvMx34owfK2TULanVCNZ6FNEfXZRNBeiUPfJvwGmxUj75Sk7zqvcVY8eXdZgKsysgsh1iV1HBGDm",
  "key4": "3YNWxUeJQ8pLaCUnu963YbCaQTUCfXLCkP4SeyCbzvyJpgzV7z6Zu1EsNdo8mezB6s6HudU21NGXfZKG89cTtoPN",
  "key5": "UMoSx2uWqY7hDckaxgp9AqJX2qv25vHTRiBmhX5vETi3R7B2AyzvDkFzo9RKeGmyWr2jYzXdvdEBVEkq4NHVDF2",
  "key6": "3Pc4eEjgjXB7UshTEXR2R4ZQqUbHQm6hW3vKm37ikh8rnK8or4BVoqycW3muTv4A2jcxUAD4hCwQwUpwHazjYMky",
  "key7": "59vkmffeLFeReiAVgrZVrigaXB8rSjbg3oGyA5QkoKu4zMSKycxFFL2LN55HgbcVzDFSNcmVNhn17h1RXuDyhUw2",
  "key8": "3N6qBayV8sxeYvY5rJgHQ15fyTbMfkGMcMDNTBPtA3tUsJaA79SUGQwwyt7ieVqXzMciHH3PiaMEmNNJGyY5EPsK",
  "key9": "2oajQcmkrzfaA1hw7xyq7GP34CqMqv2bEvVso9QeHJRZyYmV9MqZZNQSvciXuncXQBjiSCAUZVp45wuZsujhr4Bi",
  "key10": "3onkhS4K1CV3uVV8n2HvcXjKdEtSmPp2LQigoQx1WXq9xcY5ET5kwCbMnrGCkoGQNGedFgcCLeYfNqy3Xnw4Tziz",
  "key11": "328vo1xJfoMcT6LvrTQyDXiR12FwjUEzQ8VEGYHMAc93ebwP9v3TfYfXUTvFHrMe1Vmuqvgsz653LFfK5JAL2Ma",
  "key12": "2roQwz9tyhftwJi1LhrKJ1e7RfjAwwkkEpD1bHcTXpd1toZgJbeJnyr4GnnV2RxuBn1SmvuezpQfLBskQcTXH7c8",
  "key13": "2cLKTzzyQ3tDaKGse5wUrt9rNLd3uFrvsg4VH5KfVR3BJLtdazEz2MJKEoA35K2RVVWajcZhkP2bu4HFTHPhmFMX",
  "key14": "4nagf4CBrU9CZAYFTcyt8yT92ajRneaZCr9JAss8pLBhrjoXXvJNADuHsqipAhhiiKteTtvhfKVUHQPT6tESVDwG",
  "key15": "21ouAdwJc3ZDd7cf5ZQV92xutzSy55b55fsXv8Fi9JnY7Vthj1qZT8WkQkRXb2gJDe9fu8eNWohfiGYQZPTUtqnY",
  "key16": "2122zS6Tab6BimQNR1T6eALnSjVubXdUfPM1ffBrULJuDkGk8KLT1ccXiUJhLtgiFwCwu9Y6JNSFn7w5yMJ8Boyj",
  "key17": "2VpT6APQZm9Gz7u874A9Dh3TqFU1DAaz4oXkpqyxV1RyuQTzjobgHdhuGnTPaUx1Mn7FwGZSyypT554z9HY7qdWo",
  "key18": "66D55jHRq2tPqWYuYRVMHWCY2YW7MqmiCLh98LypCH3Bmx5AEoTgF38sJFx48jPeuZV62ZJTSWtAnW3pgtU75zH2",
  "key19": "3Lc1LuNxov188c7JUWTQe1Qywc4dwaB9YkWPkyBoFZhwE3msRsapV4KTbxz2WYh6XDReiKkNe8rJbT6bWkPSbo9w",
  "key20": "4tURJ2MzQYaCeudBZaqfNTo2FULQe7kZ6XRGVTdXhXPu1ogUXQY4UyypcXXLrKJsErPY3rCqcDhNHfmHpRpue7FG",
  "key21": "2pkVwidCbVGtin3piQ7t5SsZja62Bzr45zSgYvNSaUUTgCtp61Udo4mu2W5Y2gHQGrW3zsGxBQ7HRsvFxUHUxcgG",
  "key22": "58y2XVTZbbN28KJANQnzqk7Kece2CdHA7YJ8jgy3DZJ3AxZ1q91UqXxcxCpqsdCaV9h9SmUoU3LyEzSmLeBRyRv3",
  "key23": "S1n8kQdLk9oQ6PGm2FSwKRgSBQKw2iAcGA85WLQhDibyze47CUkHexgWD1csecoS5GonF3CWvYY2yWSzueJGAcH",
  "key24": "NwkZ8gXoX6xqH8i4XRoSqhRbQDK3PY9rBPpRfTNPxQBKa4NX5832HkoGxnR8cTbtfBoLgWaBS3k8aWb8rsfqMYn",
  "key25": "52ESrmSnDujmaiZKXW1nWdi56hBdDQcDYnprQvfMDNhFKCLbS3DDZd6qR6PVBUvvZsu2UNhWoxPw8nX1uT7uYfRN",
  "key26": "4wrP5y47UfYTnD7uwU79QaGDturaLZzejMuKKNpwaDXseLDGTAyFS2juhFXfkAhND8tm9G9bqGXy48nBJxbBfxEP",
  "key27": "M8mUsdmeJ3AVgELC7cojAbh65u1YYNfELUoVrQaRJ5iTgaeS4G1ujuUrqZWz9L58wdLsxpfMo89b9d4EupfmAL2",
  "key28": "WowkETe5jciNcBHXnk5Y9prqRKqRKfWRkADGrK8UPRMnEkgBQLYpiNgW4eZZRwxfRSXmpKAjVT96c2EGNvZmpSs",
  "key29": "5szyNUUmLVcJLNoqg6ZVKb3JbBJG8JTd9XCKTC62CQvaQC2j68udyzLfHWMhkskYcABKnvH5QR6XEshbRUv8r8U1",
  "key30": "5Hg32gD8ekqxmCxBKUSJzYqpqbs8sdSwiquK2yCaziA48BEmijvyFwbVGhBUHE9kfh7GPefWbZEzac463PSKpBSN",
  "key31": "3dJHBkrcRtoEACAXv1PSYCHvLgmxVfutpXCHnVXSTMRbdb78pjkpmxtkykdyTgmQLb3G4Jkytpt3imr2bTCxMQTV",
  "key32": "2jgSU9CQ2E18Fsr5jYBt1TG3xSd9Fh73c5aDygCkKRq2Q7Gzty77zskdUxdfuBDW2gRCqCgLXxRsrbUuURpPCxGJ",
  "key33": "5Hk5ULDTTbCFBtNpizACc9WSYzhiqdYXS7N8UonWQ1HJawp5ohNXe4rkEQiLCPojNGjWsNM3dkLPDAyw8oGgQZs6"
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
