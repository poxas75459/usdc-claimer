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
    "5b6d8zCs3XpDWVmHEcZUC8KH7JLjp41bKY7H7Gz22gvf2o9TuN4PSBCbD25jJQ39em81iFQb9NWhtWfjzTu63Uy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oUGKsP5uWRKy4m8hXmqJYHVke6YNWZSsedaMy2e15NDnv3UhCixMzyZBJqoU9985844pZRQfs6w5LfXHJAkUSQA",
  "key1": "2CxKtB7x8krjkWriWPuJTnwvWST6XpoUYg7CMV3yRotwPCfDS62LtYu5uHXThRTzWeNkjepEBxN5zGVx3rbw7W1C",
  "key2": "3omrmt9agofZU59DEjMDztMc6ogMYBupMn88iCSHhL4ULBM6BeRZejdbaA8vnKnNnn8PViLrkPSrf6TCtHpZv3zS",
  "key3": "3ZiCGG9tCzNgWTZ8A9BuxNbefhdDCqavp5fNMQeuZzzfoKrVFTLpLJV9raGrG7mPnG3esFEUo4g4mSUHu1KRcuKK",
  "key4": "3sUWmBGqZo5LYmqDitywSSuZbzeFN5pgD16SPYFTk6MfWHBHKQxhxfSKoU9X6DFDLy2gqjZb8fvgRf1pMc8jf53L",
  "key5": "hPPBNxcZhRj1H1Q58J2v34hh3WxJdBRRmHt9NbNEdh4rb81zsc19fhz5uBhTkvPGruzf4Xr1RHfFSeqgNhLgffb",
  "key6": "2x2N2n333AGdMvR8Dm6DEGKG4rUi11sBTLVmY9WJUhktaHaRLYZstELCPPZoSGj5J8ZU8tmeMimMcfacA5SXb8nY",
  "key7": "2GEZSS9xxxUdVTHqhJiKXPCTfAeaWG6tPcJuJyj9Ntscy6XsfJsRQx6Abi1J7r4kFdeBFUQwBPzPCidRqb4GaY3V",
  "key8": "2KusxAvzyiWMZkzFgrzKerxFgKncqwRymEPwd5kk3hRyUAmUa3AmJTyeQ3rzV1p8vVu7FVL4gDeYtyYzAJsoZF4N",
  "key9": "659Vhro9CQJLUVkNCsE7QLtBqCDfQ3TDSVj251CREukMGYdegdmB7zspyccRL2ef9a4wmZfatQRMrFSBZjqEXJ1q",
  "key10": "4EEtWngeycEmKX9qmnZmzhf9aekjYYiJFpzGw3GJoy2WsSRmCzcmpZNtJidB3pFcbY8xg6K3XffUZeNzABRfgNJr",
  "key11": "2qXVXpAHHrkARDB2pXPaRkPu1Cr12kQGZad8kyHNvXaKZoxwEcYcdjqRdNu2EikMYRiGLum15rf7cuycH4oQvPDW",
  "key12": "4yGe7aRoStn4cpJY7TVjcZbXCQE1E6cyutXeNo2MXvUEJtruQBu9cAoNpFsp9nRXeNdUHEKd5RXCBZVDj8rEjKgA",
  "key13": "D2CsqK9q7SNnuMGjXG3YARo4YjHaDaxBSSgkKff8wq3H5ueyf5Zje9X8ZMfbgygyhPwDEwJtXLF83K3ZDc7dutW",
  "key14": "52x542dcFU5QnB2JLF1EG4u3DtVZrfDZ281xumPvmdMiVsDSkrsaypMMNtWDB7xEDcxePa6yhDSFNFPegt8mDJ9h",
  "key15": "2ZRBJU47agciiMQmh8kV4PjFE9RXCEdbZuJfRnY7EB9Wz3jNDyLtkpwq7n32Y5bJ3TzDbNvfCbDbm3znHGZ4yWF9",
  "key16": "eThu5dxhfJjkc1c9tqrNTXDzStvCwXbiGd6Cf6R8MHVgdSn9PqwBpCHnvxx8YmV5ajMEy8ePC2w4UuXQiVmU1P1",
  "key17": "3hAr28gUiBXv9Efdo9Aqn5jXqZ2bCSetHft5HfSG1Zq6uqtrvVXpmeKwHXtQ5ZGg39fM1xsKNuSACbR4KeqC1GYX",
  "key18": "3Z5n2FGGUzmdR9TtV6B3i7DFWWG8vCpmNrraebVg3YfhYV2pxgs2ALSYQX9NdgZSvdswbdsgJMPzoPynjCu8huWM",
  "key19": "3yq6vxvKoUpxY6hwhqRrSzYqjB3JaGvH8Z2VPtBjuEyJekepA929V4RkLr9puwMcCfse8yS1t8ac9fW9eiwNECfv",
  "key20": "34e9MuSfqtSKXkpvcfcerDMZNboPdN2HE53ZSEbBdtxVjrjmTPTdAef9ZfAcQukUzVPTS2Ho6y4YU1jGxgTk8UQV",
  "key21": "4cebEcwvL7j51Uj79JzY889BAySKVToEFLseF5YyhavSBx8raT94ZJSwqyTFrKDhnSxhg8CPEr1iFDwP6vM3EzHS",
  "key22": "3EJ8ThXKpRjKQCuXsYh7tTqxiViFWeKKrhoMc9Rxmjs8HVjBuDN3BTbgGWrDGX88zgBECiuU2EXKRsKk2MQytZG9",
  "key23": "4sJZiJ5J5xYhzeb4jChkuzuWt3WRvkPS4mT6CnYYNPeFGtjbm1kfjPGjJQGcfT9tN64XcMF3p8FcPitCPoC7PYJP",
  "key24": "rDSwwmpxZRWZDZ41dPiTDzs3EBLZouExohwJWDdJEaMxqMrNSjqdyWMAE3iTS2JJ21hsexc5QEg94pKE2ztutqz",
  "key25": "Gg7TDCRywqx7j85tizDXE8FKvPiB66nQKWfwbpkq7mDMRgALQzaroWj2K8SxHAkNKFhmPSTikSdSajXcqF7QDuQ"
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
