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
    "3MEFvbntkw4nRmpvsTJVNCC1TNWtxBebPra2voBq3HgtfjNh7uf1B1iYbpXsCopvdYMhsKehavEPqtRT3MTvrUHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iTAsya99ejSo1L2sq32JF5FToNn8hREQkM1qTjrBZxWoregU7f3XN28xXNFTTQSdnboCbpip1xr9T4vK7KGVuzK",
  "key1": "3ERCSuyAei5ueSn3XouWCv1Lgj39Lgo7QCGkD5nyPiLao6RVZrBEPZ1DuQkJhyLnKYbGrTqwj2vE6QNLz6AG3m6Z",
  "key2": "CQbAQVMqHfzEPLoC3J3D7K5wtLAMCq2q2KiKviShoZTjb7gUu5Pwgr4ZTtiuExpkXopiPynbQG93MVJbqPKEwWG",
  "key3": "4fxeeT9W1h5AJUzJ33SQB6tc7iWMfJsxAJwNp91ASChM8hxiUaxd7keCnWBiuANoefwhmQMEUBVHxgj95LxNrxMb",
  "key4": "PNDP6ewJXRZyArwoRckSEv3jcionjwmGxgthBpz59jpUP2LxK4X9AzKgqzS4B8kDz9c6N5J842uCcKBUEDmJBSF",
  "key5": "fYnw7U8oKo36itJr5gAnMaeJn6MyzkSWpctCAXWHZCADpvxoqxc4CBQwomuJALeb66X8mwUK2N9PDEdzhRzY7P1",
  "key6": "4s36ikYGEhUNEv4CZGj3zSmCGxnpeVtaGRXYWKLj7q5M1tbUUy4ngPPLEM3Pw3hBtQYUrny8TrV2AjV1sygJDwde",
  "key7": "25kpqdxSRkQ2stvZ2UraXuh6pRF5BMMV1rKtcSukiqvkqtwj5xYtVseAPvcDYV6jJRhZZfaaK2ddyeWDZkRE5QVQ",
  "key8": "4EFVZGr5xAenw4rZjKSR87YVJ3RWiDZVCtybdN7GMHjKrkuDGt9PsBr3x8j4D2GHJtgwFu4yQdgmLSA9LoSbxgrk",
  "key9": "44wq87RrSVHDSMi9LGkN4qpmkBsZ7WkC3uNo9TNB6aacV9Q2Q1beUkM38B6XRcYAYVGY2Se7scpZfQHtwyhHLXsu",
  "key10": "apwMTcVcio1XuVGF9g4nwYD3yMgBfHjCok9j8rFiK6hWKEvRQgFQP5BFuWYi4rywTBgxKHXNbYKC4cj8m1SL7ZK",
  "key11": "5BWXTEbhCwiJ7jdtZPcQTMm4AJ2VNs484Pt4mVgcUXsUTrHRZqywxUdGigz36ci2uHUmg8RisxpYRrfBX5C6ZAQb",
  "key12": "YgKpVDQaHKcFQiv5qF2C24hGB2eJBu69bkMAkiGyck5d6e1trkrZgQM1ZnYBYvcgWmyPmnDvYEtakCsGZ9v8QNr",
  "key13": "3MV7mDSR7DZ2XyM4Qk9pCZYDMQN49zFz1XQpp3xwfwqBkQaCqwB8rTBF29GAkaJYTJz5XdZY46rjZhY34XV6ymCg",
  "key14": "4hkxs132tUEL5QJbGcVyNQT6S8vz52P97cZxzNKzCNWR1fhFdfyX5tvnfv6iuEukD9BBMsCVvmhCcksWwhgJi2Fa",
  "key15": "2dW9zS3enAS9bPaDB96Sh2oUFwMw1SMNnKznYridGGcoYu7a9TTRPjdYwwV9DXb6DTY4qCtrc6WQbV2nbPVnTFV8",
  "key16": "65VSBWzPoyse1PRupCJxq3jaAMc6zxut4G1khEotavd2DyBEK47nmiYovpu1XaA1xDN5Acnx8nMLpwi2jq7Q67yq",
  "key17": "43a9ai6aLBSXvSMSQG9pKaVyRgJJPnYowNwE6j9hi7hYA3MgWN7UsP1b9hsEDFATskaq5eoWrUSNdcGNgGtTRs5b",
  "key18": "3ikYhQqMSnZ6q8BWLdsdsbNTYdjCEC81YDY9BBHQqxjWVPV6TEUHMwhUExWQA7rbfKHiNTCA5JXfuocsNoeqaWB7",
  "key19": "3oJp228yaXyRXFspKSoas2Hj1TuVuJgSYoExX4WySaVvHULSzVsyXPRU7b1yMCA7EKM2h5qYgjnZnz8LmDGKvpgb",
  "key20": "48sPYkZzvhSGiSsSVDycpMwt2W5v1T9qSkN2ZF39Ez21o14tFTdfpuLgWcc38wtKPYrmhRHkbPXkBaLRAqTXPTMp",
  "key21": "3gDMsKdJSad5qy7Uih8jQKVmFbJZMF4yDgANXAV5SE6cFpmN2E2Qkm9mu4mVXUZzQoCpHDVfMbN4BZKghRgGimHz",
  "key22": "4aQHEeP7W6nFYQRPQ5mZaE7EaccAUcTcN1d7hca3GCzmqidVmk6q4c4ZH77xPxQyUY1WGkRjLsY7deNZDKVfx7RP",
  "key23": "EBsHP1jKfbB5YKbQ6pqqg9woRPhEv3DNnHpgHo4q3wsJ9mqGH2ok3B8LJP2FnVmfAau4mpp81gyynXR2zG2gjqd",
  "key24": "3x3GZhaFP2TR5zg7QRSm1FARz8FwxF8B8R8LVw6XYK8pypGaXhpPUAvh8z6q6iBaqKvy3VB9w1Zu31wr3oUg9JhP",
  "key25": "3PFnhGqZFdBCwNseujGmv6KVACGcYDpFk7nDHaGcc4swWzJW42mYAxsadz6aw5GxG15LeEtxWSMLPjW1nMQKw1yB",
  "key26": "wovNgAFX5SWNnh2TFNQWgGpQeGSevUX637FwDgRWqwKKLNfmkzohTwbpwJF6qzf6qTCxNRt8FVJeyV26zxojAJb",
  "key27": "21C1D7qvw1y58DULfewx5XAXopn1rad4bJvVfmiw2CU6X6D5MJf9nLjFbn9dgUJZWHSMJqS97rnzmn8UYogxwyEU",
  "key28": "4uZbY1WRLakizqF31zTu2Lo6nY6gKovacDEDGMTtQwscs2R7GiEFg71ejMujpru17ZAdFH7dBAbFXYA9NmZoAMtK",
  "key29": "kS8WAe4Y9GJTTgzerhHmQPmSBsuxjHunGeCUYY2Z55vxYT2QqoXJ88Bqk4FijhCRvrY3m9LLLCmivL2puVTp8F4",
  "key30": "3MjDzcqZ6Dbef1yigTsDR1j1YcszMSBKju9M6af6MLTYBCggzj2xWqYw8yHHd9ydWHwCcBM6DPicXpnGZQ8q9KVF",
  "key31": "5yRdsjTcZmkyMWHCpPc2zZKMBWWwXv5KZ6RA4VDNCuCmKuQH3no4cq7r4wUNtTV3nQPbmcL77dzFzBL3CyK4TVQ5",
  "key32": "Nu1V9QrCb6sGkV9Ky8CeAqFX5SpbV63jMb8uZwjoTt2w48QHVCNDRgPYpSK3uLSZjAhAB74NbHGpJ2UT2ymuNEJ"
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
