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
    "2uYHPZy7twNCWXnv4RsZ9KtgTwEJHdkPugJRvhwycutm4Q5sApWVBQY2CMGVqYS9kFFbFSP1z5NLKq7eNL2DJfUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34rGyd5oZC28esap8gi5ih5Me6ZdRm37rkH6QDk3R7Dv2iCr76YGNTopwWUpnPK2GYRMS5ZjaSLAX1Hxt6vvmEK3",
  "key1": "3kTG2t4GRUGSkH4X8iCDhH1G1pKxw9HfdowZWutTnws1r5KnEUWooE4jxVUYDH8x23Tq19SY2qxzpvuQ4najHyF2",
  "key2": "XSxCLCrCQaYb956iuXWPmvMxLH42J93snKKW2zSq9gRvXMKEous7TLSSZS1tZQuUa1FpptMFKgVFsAz17GnY78G",
  "key3": "4RVoCPbttZ5eajNfajADM6XbmKKmR1S9XvJKBwpKNFgn3rm46Gnurp75Vex5Qmu525co1hRHWtZEY8JNRWNZmsGX",
  "key4": "cfpgcJyr2wjY2mYwEJQKHdnEDYyuXr86qB6aRFnJrmX4imvruWCJb2qk64Dp3mc61UwBYv9mHbPayBYvdbrSmBF",
  "key5": "4tQ67kimpkwJ81C2yF1xWu3NeiU1rjpPzBckQTQnDTn5PQp3fxhvrUzLkp8pMKSFcxPJrDBUAWrZVCxof2NGWNbM",
  "key6": "iWH2vj5gyt78dziqWpaC2rPQ12gHQksyfBkMr3shVXwZJ9DgQEuA2NPL3RRnFwWJfmtrVpwfDAFrQ3YMzSW4uuN",
  "key7": "yY2g6VSNCo9Z64XXj3gEBVHAoNBuhLC3ba9rJZRayiPqpiAk4hgiuV7ckDwLjtYkXc2Vt9sJYarsfQo7evZnBUG",
  "key8": "4Je1DCJeBGBYwVjsxkzqHHUvHoNDmwbQBQsL1s7aLw3asTbrWMN4afxgPc2d4H6mAh5FMBrHgFEW3UCzZWqJzRT5",
  "key9": "Cv1hkFeu1N3CYBeuEGMrMmC2soVrzDRZnadrufb78Mp4H56khMrawvShkvTX1h5kFp87TG88zXvaJWrbDqE5sMe",
  "key10": "5GFFFHYzgCGdk2pQS6oDffBqfDaJRuKA5wm4jQ81CSGmi5y8fQ5T88EjrmpzeL12MhaqVU41XPxcZvqWkitHtY44",
  "key11": "2rRB1YeyabStDMmAbjwWEGwPwPYx7A3hApk79oBxrgnGSawprSFjJWnsfKh7VGtDYGC6cMHVreLJTLQhQmEpjcEs",
  "key12": "2JhwLDSHhdE3uYsfYAMNtnDij3xxETo77ywXX17s6MJ5N27uyP3SxZw9Ztq1yV1xhEUn9jDTjTvUS5SKRd4hYBBi",
  "key13": "dmmjsg2Fi9oRKUjQZpUq1sf4cqMWknJjeoESHZFu3aG59J9tWbnRnQCco3YykQ45aSoSapxy2FrUa642gNZry2m",
  "key14": "66JX7Y6civE85867KXQjwYMNFfLjG8r5u2Vq4hUBARNrNDzvewHYbHVDSznJJRCKDq1rNAnw819hkyZ2h48hF1Hi",
  "key15": "2mZxdv7RwUQYjNQP4Daxd3XgMbDZFvxcvPThmqs5oh2nEokYQgG3JDhKWrBWzPZMFG7w2t1yjdfYizKs5voLZTX8",
  "key16": "5XiHqbxw5HQshedgMqrnYDFoS4LpJp1djFs4dgNujFd4ukGQL7c9uDYnKxZQuYkysEVvzPa2KMY5xuFApTkxdnkz",
  "key17": "66mD5vp6kMUZrg7H4oEh5G15ozMeKaJtRKRcBbS3uobu1dXs41tCVSrU231HD7B4BXa2Ys2hz82gLL7Rf13ziy8a",
  "key18": "3V7foAydnmDhiDzYsXBffAnffMj2fsCzgWFu2y2JmxrtdQhh43ZvENZi5N6iKHSGiGQh41REqF5sRuRydr8ydoKX",
  "key19": "3QfJUd5U9ichjJXHGReswaK1VKH1BBRci4Wbd5TrZ2XQEFurSP9m1Kigh8F2igFJ6KCjYxX8va1Am3L9htJL6yBR",
  "key20": "3LWGh8CHjpzXNxZ5J5tvmKb2Re7tW5cTWjzQJRiZSTAP5EDxAMMMxrqVUmqNNevVm13UKssRsL45sNc478axLLvU",
  "key21": "48LeBu9GQisUSPRoqNE7mhzn5xG24XaY2kjF13XmDX4yYEwFFXdrPL1xxcr51bCxbfx4EnKHjFkwusK55ZyLUCK5",
  "key22": "ausWCLWt9v7Zx7gueXU35E7NYuZcYB6FLfhS7VFtqaPwhkFdgqrFXqt4wuixonAGQb36R64VtBYqRGcvdGagWK6",
  "key23": "5P4pYkHuvv5qijP6ysFHfrjVDDsww9PdrkeRKq3XP8N4W6GULBzMxSxmsPxC6zQsk8BHNj4bnuAX79QQrqxWAbyV",
  "key24": "3d9r2o8EwSb53tYhFcWFd2tmmLFd23PHhY6poMEKc4FxYeBMPq5i1DYzF5iP2KHGGK2HAvpA7fNmohxtkoqYSnur",
  "key25": "fVgoadPcTfbVanUcQrTbwUg6kPdQsZQFCYD9FdsN9rw4EBPQmu18x5DHWdcZuADmB6NCEKiUdgjPwMzvRNb3Yxf",
  "key26": "46W6mydXTg3qjNNzWE8zdobk1xBvgmaWDHaQeXwjRc7UG4m2du5azZxkkARmEYDM1Pw61G4JmnwRfwQnwtFgy63r",
  "key27": "59x1KCs2kqtaDwtQfJ6WRqCwfs9ykGGGFwXrLX8fyJUCJ5JCGsX16ZhZK7Sp5MaVoemmDc6taFUwAViw3PWjyQmR",
  "key28": "53C1FtxyUyhCmWaHZYPTNxVMyCtPw7ovDESxcB3T9CeHJ23CWsuff3maWQ869UNGCwbPwGaT4jdzKNxpi2MWcqZg",
  "key29": "4sUphWsgzkwZx9UBRj6vAMcYFW6s4zowHcTxMBwmzWLUQ1z7otwxKGPXCVqsdsaLucvWDEjaxMeyAxdq3yjyFXRa"
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
