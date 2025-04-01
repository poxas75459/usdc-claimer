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
    "62t8J2cUCTxuMkTFHJuqMQ8UTwJ9kYY9eXhBkfF4Fy1AHJQ1kStHQ7XLpC1RaLYFP32Ufebatc7726uw4amjbVET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qiVmztJWu19n3NnJBvjfjeErAThhLXYhctqCAULrVMLWdezzeGgaNwuaKYHfYTkxj7kYnPvEHFbJJgtXm6UWPiz",
  "key1": "23mQNenbBzHimdgYVePsano2eHKes3dV1x1pEMWUk1SJ2smwdiRnfeXiHtfw4UqFcenYyuEU4VtMJAv9L1hmcZd2",
  "key2": "55Ju2umU1mwHBTTeUoUiMHXFiyhv7TphWS7sRy24XAMMCiu3eBQrwi74uAmee52JXgF7NBYuZRptCtsV3UcM5YNb",
  "key3": "25iaow9dNwZ5PeAoxygo92xHbbnXNc1hs4Hq4Amep8pXGqHPVUdztLsJDNKRwf9kgYP9de5ysDmwsiBX4f74gVhu",
  "key4": "2umQCyHdzfhm4d59BaSi77Ye8Zu3qzuhEjSNpKgEHewEe5AASci1VCs948Ewt6Nhj63iNRoBn5JaeTQTXtHufXg4",
  "key5": "NW4TvvMSSh497Pwr5cm4sh8FFCXJ2wahCUrfeaTjPEdSjHGtpUiL5DaEmVvknizAeHS3bhZBRpCEGitj9JFUJQa",
  "key6": "Ui5SEAkzT5rHiL9UVGFgymZNAZ5H2fNjC4WJypt2YkVkoCzURXLSkKgqibpZsccUtpqAdEhmiLcFEKGK3YWcGsV",
  "key7": "Hkv9ZdsFJ6sXXGC2T6hSz7iypD2QfBwX2qVeKwN4LY8fFLckMxbMiumCWBNEQ9MF3RryGiABNBmwU7SRSu9sLVy",
  "key8": "4BudpbS2Fac57Vywv3Nvc4hWGaWQhCBfEWDq39P2ioXG87gPXmB4ixnfAegy1PkJhNqKNabdDJmBCBKe2bjaLJDX",
  "key9": "3Lkg45f5i2FNe3auo8GLrNLseFsm4J3EAeWQ3BhFq6SyD4RjsreWZUsGaF5XLif3fWJ67FmpPHP9gU37KJHZpY8s",
  "key10": "5yFxjcnP7o9zuor7WFM3sev4eCL9UgTfHbGgR6oQ8Ft7J1UTiVrMGRyMHvk5LAR4rP6t4V373gUDYyW6qTD1g8Wq",
  "key11": "38bTbkvrh6WYPoruVdDrWzi68m3fXzpSeNkLC7voo7fxMAXCH5rHPeF5k3o8oHRzk7qaY2EUCD3wefWk86VxVhvg",
  "key12": "3sTE3XBGNJHpRRJ6p3Wz7sJgYUwXbjEJryVRbk4AjFc7dD2WHYuyx6PgKgtv43hy4fS5WkS7rei4gLQ7J6H7E5Vo",
  "key13": "2bRZmd7rAtPPJ5v7mbLxqrRPbq64yCQXKnAiwLn9t9aTEMrg1oftQ3MJijru9HhSft1997M65zLSXZb5QuqeACbA",
  "key14": "5JYKjPxAxF6QJDWyMHCymGkBsvkUTyeGBwvLC6LnQYF8dgtuz7Xd9UK5E2tBuZTbPe7qhziGW1SmfrqSarnSZ6mG",
  "key15": "4c4AQGVh5asx2mBmkEQwKDtJWqGNBZwAzG7m3jwF3igJxLsgUmQqYVMqESKrytp3HQ54SBJao6zg6Amp1fz4K45d",
  "key16": "3nhvwK6fDKG5SbziaoQwHFHfS7vkKoDnK9SEoBv87Nw7CaDo2pVFG9nSqZfyzCsysk8XojAnnyv8DPsW66EqKLmH",
  "key17": "4m6fY9Xyna2dkKKsccrVGuzTk2DFJcMbudNv6T7caWpA5MnGgsoUuRtYaAJZwobPXKhN1XYsTYgvPJ8Kgf46KuZE",
  "key18": "5hb5SqcRPXW9KQhWM5MbYVGd54dKuudJXfYYpCSLzk9irrpHhXXEzU1LxX3wmh1M5zNC75hCPAi77AniUsD3FUFp",
  "key19": "2r95Na24yVkwRpv3gtqDaukTXhE2hYczLM9ExMLyV8ZNsKra5Y2tdjNW6qjbLchLkqWw9egAggbGXFnrEqgPqQtT",
  "key20": "GV5ucisyFVFcWKrFwdkanTrNJ9buevhQLMWgGwSJ3nZsLS9bU3N1Y26PSMLvMTEeiFyGD5QxGXmkiigDLz8vxDA",
  "key21": "4dG8sbkpmy4Kkh5LBKXHSDF6FHXs1zDxjkKfMmLmygMHGCXr5cWvietg7auCib8DzZVAztJW1TawwtqpHzVAwLe7",
  "key22": "3aZ1mEeszQ4T8Jcx7JwLQS7YDDQpF9ejQUpUTjHQ7J33ebvhTzzM94o3JRNtx9mk98Rd6ZVEzvrSojVUYDE4h624",
  "key23": "5aakfmVvoDGKjDp7YsmU9bouNnXe1X4VLbxFXnbJgiLkJx7LukYCfxXgrJY5gfuf9iePUCu2p1FANwqtVPj9Lw84",
  "key24": "3Pjh6qjNJBqzsLvKuXkGRE2zVmfR15W63U1fK617vru3XdTuR7tjRMstK25tFyqmL5XNVv3P3Ry84qoube3sqipJ",
  "key25": "sJN2PBAbKNGBrp3zSW1euHk86HvT1yP8LV1rUX6xU6NxpzMwHd8JcoPezHZxGXtKkNvMPLL5WgHaKyVU1qtEgBZ",
  "key26": "5WxaJUeo8DK5bD4FLKGUGdBcGvRAc7KXREHoQa6ov9isj879vqFAiNyc8ph5T48dAxGx6uJyaQXvS9wEZGhdt3jD",
  "key27": "52UPgCXjiH7HBCtURmted4FysD3Wi9tYrFfqsvb8FCFicWJHhZQPCLivSLVeMNm1TdU9gxBrLjKbQDUCZPSD7KYx",
  "key28": "WAvnfNZHkHEPVZe7mWdsBc3dZWGrqYeHjsymkRAwarZE9L2p5RTd8Af4uJDTubptHmJvwFvhTTfnRokSm7MmKym",
  "key29": "aQd22TKqA6i8EXtVTP6S99pmGmHPQxheJ34MMzXuZrMc71m1N4AWze5P3xCkLSeSNX4Qk9eazQLsrMihGkVPgh8",
  "key30": "49B7PuB7dGDmsabg46wQTSTVanz5A4Jkq31mpvgD1k6gF3MNoq1yuMC9zdH5rrjkECY3seXEdSCEDfAK4Vfhanq6",
  "key31": "4zK2tCSVgEZ2SnZm3CgL7NHF3tbP2EaufuH4nC1hpdz3qtAGFZqQJSDr7EtUaEPSqqf6aXv215facpRTZ8bA8pfe",
  "key32": "51idxGBqNDNjY4kv3kD6GSnjAWU6im4mEoGiZqFi9UJF5B1TqTLdfAS5MR3xiA41YQfcmMQbV2rG379paF9yo5B6",
  "key33": "2zL8CxeL884HJNMPuXZR3kxdS9HWd44z2vkSZWShqr2ZFmUHNvyDLyuRhSBjGwzYtxKFBhvBbLyWZpg1tXur8sQN",
  "key34": "5ftknMt5b5FBuVtdHNbwmSWVvFxmnomuF7reHMiw64UVE3bui25HM2gAngjJruBgtKUofXSDRkrAM2a81K8Za7RS"
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
