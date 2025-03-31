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
    "59UKjBtdqC2D2p1K6oC4GfXqc7DkiJVkfxKefmZpsedNyZaqnX4p6cx2SaRBmLKNvwryTycXrjydmp2mBYdhAWJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ayfL42sLqceiacuLwXZfa34Tacbw4hrKJWTVtCb8ryoVwbpeqN5SJ7iUp4riaHqnh3BJeGNKfUgjiuphzsTzv6S",
  "key1": "4Hgp4F21tfjmrUTEtbRevFsNK4s5FwSsW1C9uZuR8ALmCXm27GXkvj2dxjxvupfNtkHagXf75A3KVDFKNsWMgFU4",
  "key2": "566up5bQiFFdASKggzCMhFDYo4Bm2CNKAu878FgjR5tu87Nf3x7Jej592PREdHJxrcRPZ9mDKGQX8Z2afNRYrYtD",
  "key3": "5mwRkFT3assxmfrQuqqVPBtB4YZwp9RYF1qv5FpJB8bcyxe7WUqM9tsobJcR2fHpTYMbEzZhNLcvBmUpns6vQ5AQ",
  "key4": "5Tgbb3cary3VRTrPJEmTWRWpjcWBQQKQEWExFXXzj1Ajjihnfun6kG63YvdTnRgbGy5vW6sqSdZiRPmkgkBrSLNr",
  "key5": "2bXkzW9SQmHe7KpmxsYfXfz1gjXKmt9adsQiP43SyMZjYUySe7aU5uD4gPjYTqVntp3aMjXzpbVQNY4NfXDU2HVz",
  "key6": "2Q1WJeCeRySDcgHGKKeRYfQjbFt1F5HX5n3AtrozEQym4ZR3juhVTqBT57vLQ8vK4zTjnNKd9gcpKkBResSfB7o5",
  "key7": "Hq7H91XhoMitRAC3fFNWqNgvArJEW58uf9s4aoXJLXDkJsdCeRhahv8pTGobpMUj3YjPrDiuWubjoWoZWAYibkV",
  "key8": "3c5hJpBmCiHgL1gMZhWtYv6pwJjd6wta62QzFjXTNHdWy9pc5sVQQdLePryNRC2bC8qRdPD6SdxfQaSZjngxftTY",
  "key9": "QJje9DfVJcENVtQPU1GtR4YE4Mc4s8rksosHRgyW2F5HyWawc485XSLZE8WFjhd6zcHHDzHvpPK2wktUj5ZQnNm",
  "key10": "9wWRMDreuDW8eborxp78d11iCE7Gqp9D75f7gyjuMuL7Z4f1RdPAC1ecqpNhnG31iQLq2YzGFT13W8qbNaTSmaY",
  "key11": "erAewovGzpxy89AnBz7E7HX8iRAEHvKJo7kiN68Y2ZThV4NrcQsMB8y3R3yizBYFYE3QejLCxtUx42dQx5ovttU",
  "key12": "4CLQ33bEu8QxYnnikXRo6msVLMiPwbcgKf3ks7ZkQg7uth7Eg2oAfbqjJ8GzKV3Tpga8qL96zRUyUwd5qs7NVMr2",
  "key13": "3gkTogL2sjx8Y63C5GXQ4CnBxckM35V3Dy1XKbUNUyoQekwhVo5XSxuB1mVnUrcrNe9TN7GaRUvXxoKizX7mxMhW",
  "key14": "Ln5BMyj48bBjECnQbtjyM68qUaCZ7JpKwSSRFhuqWHkEXYzg9hgqwnJQF72aLqFRTLBMbtst9ZipmnwzARZukDV",
  "key15": "ihsRNcYXeb42MLWNZXoKeGa7Ew5gCk2t8PuTbSS8gYpRg6MWxT53XP9GQpjyQEmyhRQeqk5fJijLZbEoqYS1zyc",
  "key16": "48XF7cwmS2RcrewZHHhonNzDvdTVzoymneqiHwXLiWYCQYZWnZ8aUZLcXyUmVAL3YJEP6QuZFMhQsrjTrQnxodeB",
  "key17": "3R9ZvvqsdwYJQZAkMLNM8bz6Nbhq6Jkonz1BGjXsXd3fc1SfSu6xKzYQAPJf3K8QFwGSbAEkzrbRL35X8p3nkmw",
  "key18": "4mowKGJCpnReV4eeD4i78iSRPHiJrkTxvg2X8m7XzSBRuJ8PCDt8ED4EK811kCBiHqpfihym1TZSMsNugDgtWha2",
  "key19": "54dXPdbuB6R9oSA8o3A92WGud8gWQ4bPY1RJUn7ZixfbBXJzFCS2krMbVoSx7TL5AQK9jVmLyrXcLprVyJzUbDgH",
  "key20": "5ronZv8u8jawAAY3TKhCifX2yJ8dSXy4ywH9po5LEojPoQUKxWajx14GgsxyiirLgvf7UFmXFRY2bzzcif7n6eWR",
  "key21": "2TNLo1mCaW5YE5UBt9uHU1QMPux6uzXAq6t4uFbYVcXPqyd16JmQNEyaVA3qww2A73TuhHsY13UPhHK17CY1fdP",
  "key22": "5NvRc5jcoYqGHeh72wch6mj8PxhEFDYhn1NVxAYRRQagTm6G2SKfRfzjUTeVgGNTm7ckgZTcFJkMQmRwJbJr5fPB",
  "key23": "3KC5XbL4VCC1mnDSfmRmnkynwVkX91ear6arDmnVAStQJp5at5bRBVg9mhKdJ5Mhv8qYfa8gmmvVciAR9gARypbB",
  "key24": "3ZfUUZjJewuGYSXYpBeSPGcaaHvGYfCGRSczMK4gVyRKKDCPqX1nTyfRwaNfB8bF33DZGgH1nktWng2CAST7refG",
  "key25": "3NTyJnwNwUoxTdmu6jDurKTLzajYWuKTrCjsMZsC5pRVMqAdhbbK8qy2My54K4ff2fPqEzW2TYDyUHqPHeDEJ3Sz",
  "key26": "U3MhKpXed7R672JUmypmG9NWa4B9JZmvqb9Cwh8zj7AEFa5bgyKWuCrEg9wRjyPN3T5uw4C37Xb4EkhDRM14g4G",
  "key27": "5KNVsFcVrKJvYn7zHNpvHCHZXPXKYU7Ejtg8Rx3BJSCx6vf3Rjo3P6sxxTfQAV1tYZJ98UkPdadDSbTHXM3NcLdW",
  "key28": "36jREfnTjgEgZBHUiNKnKd8YdaNY9aEa7Hwz9P69WVrWXTKcVNPjR916qhvwHFgQ1QTLJetz7NQxuvou9ToEYbxU",
  "key29": "tNdWCbzzBKmohyvgX3WAMGSHied9JRq8bY1o38NiSLkR828Dw6uvwQMLZcAFjkx1Zi77v1C9XX43EWig52RmVPg",
  "key30": "Zxz6Xdmt9JJ1yDGRLf1s5eqDBjPw6rtrok1FRhugPf5TPv1W8wYkZ6yvjSTw1hDgrXKLJmPyFzMmSkZQf1Gs85B",
  "key31": "ynq3AasaeGNyMKd5LjAXjNrRdPQhBmCpdvxdTc7HMDXnDBGkN7BhJa2WGPPigiJFj5bnLQygQ2mXTgZtCMTtgnd",
  "key32": "5hSr2ybxiYBU8hXkHsiASnnWDUNcPJu1JpofPYqJ1JBjMqGsjaGaPhwNbTgsNdiJeJBbsjYBaN5BVgqDqqgvSLPC",
  "key33": "SaH97YWfy8D53kznfVcvbTvKyG5Dv73YdXEq4FydvUdhaPL9mHdoyxdGZ21Pmv1pWhewzbgHsGHhbsJoekaYk9G",
  "key34": "3m55xcyRYmVN6DRLzsSsUkh5kXZG31NysyiF3NxoUp5iVgqWDFoXmknHpHHUq7t12S8soiRBD8UG8aQboxS84Cy8",
  "key35": "dkpaDfwMyQM4GS2jar9wogbzQkXG5BqkpyUghcfU3ZLqKPx9TLHRuU1A5d6ouuPUu2MHe3od3UbNEej1kM6rdwa"
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
