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
    "3nDravCvvmx9Ha2YYiZPK95A3UCsNXXPAvM9MRoqZRDBsD4oKSuvjzP8ZoLa8Sop58Jhpt5giNNRSn7mxx5h74zF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HZ5cshyXec3vzYbakEuZaaEsbQdDRX8mbwx8upzeUjR5Fm38Qs7XukAHyUNsWtJgZNPiFLbovZutcE8BbAWSNkh",
  "key1": "gzahXbMNneBV5sJMLtrZU1ptm3sqsyFcM2ZwC6X8wch9iQgbJfSeH5TPp6Sz79MfyiHURH4swcbSop7ZsARvzKx",
  "key2": "4bat7A4Jn3WqPAoJHHA1KGKCmHFXPspNhmXUccfmp1biSndHH6jKwzfnqWZfq24CyEJaj8i9FV1Tyjv1DYtPFRN7",
  "key3": "6ysnXtgmdgsjwALcDUMUx99TFsrpPXpbeHKjjGwqV9xfCiYdoD3dmunFv8kFR9zayVxRTgjB5bFoQFTPhzP98JB",
  "key4": "P7j962zaTvTDdESrmejk1y8PxLFJomdGXKY3FT1vPfpKUEwt9F5ppDrjUkeLpwSdAVMzjjb23zU1byMKz7JAWqH",
  "key5": "YT9YDRtRPRRavq2G7nm7C1JtVvH6ecfCtQyHUWqYbH32JAAfaHjwv6NyoXLXUoMbBHdMpWj5Wnpwjv9SX3tDfk6",
  "key6": "4pHkfJvPHK1RaxHMxPwsozG6Bqyh3XSvWHBRhuoCmZ3iUj1A3iAYok7BJyb2VezggyjPv5w8FHVWcQLYon8c1VQ7",
  "key7": "THFoRXvJqxB7yEq6mkES7SparnNuksqgMyLd3Z1PT7MLQiNFGhHXphm5urA9tBqVTDdoo8g9jmiyhVLo1M49dQb",
  "key8": "4ScV2vu918LoGwUwDbGBxsCr2ucLUvZpyTYqeZhk87xrwTA9JP2MnxkZVX9NmrobcpcX6ckNnUdoUxg7ZcxUqV5t",
  "key9": "5tUvmXGTPs3WU4Soa53by5C4qcNsGT6Jj9qB95sxWViBJZvoCJcJ8Y3vwxjyj4m2vG8Ur3yEnAQhU1y5AH5iaogk",
  "key10": "4SRDJ3XuWS4EsEjWnCwZPZEbuWHmSJKPVCbA3gB9ZigEDnaJNZSDdscDmoWtEPZz8DbxgqFX54GEEDjAE5Gkoj9F",
  "key11": "3vio7yctfn9hDcTUSsyWDe1c3q5bWzmzLHwdXkFpfw45aakBWJTYtaGrTJLwNGmopE8zykPzHouh4EeVAna8kgeQ",
  "key12": "KjvR1LYKcUXnvrAyJfisCb85g6itVFRxhrRWb3kt9ogSHNUSvZA9zNdLHe4WCtoHUc1uH41w3LSwtxjix6RiLK7",
  "key13": "2KHBvELg6qFLNiQVFiHaEmNbrpda3E8xJ7ooy8wFVsLkDvmAUhWe9c9XmQfr9QkxE7ejC3NEXfonGK5WS7sFcLwG",
  "key14": "227MXnDxBJ8mnXdnyYQsYUVZBmKXxAQqjQHqf6Urjf1DgBEZ7kjnbtdxwEuwmAW4Jbr2P1iiPMSLzXTstbJcN5RQ",
  "key15": "3PrptxGxAiaeZKvhsSvbww5Pdh2fd1MgBZmRgUhWEx8ziiznoGeffewVZuyDjWMLdoFweoDVXiH41bKSJsNWoseR",
  "key16": "42hAGi37mt5NK1kxsyL3JLijN6N1hsqAdHZD3jgwz3RiAVrPE2bVQa36VCtdRLnu9CXstRtBei9zC3URQzvvnVDY",
  "key17": "4WMkUbcG5hbE7wVfkUtPX4yvRWwWsw7L5VEwza8wbu46buf8bSoiJEZ3PiFPHukCunN6adLvtgaKi56SKt6aH3bT",
  "key18": "nKSXMBQ7v5Xu8zQco8CFisVCNwA6iZKAXJptM8RZfs7Pdie93VkMMDgVKUZUR9nDbda5MFmFxqXjxkqNvBNNxVp",
  "key19": "2HiqKMXpBVcLkneJNwDfgMn7CUAbKXqDoJVmnnxLAgVeYFvjk8h6VLC4d3dabZEqqhKV7t5Zp7BbQKY8Kc38GEmZ",
  "key20": "3zb1dSCdmLoGTmxw3EL2GpqV8ne4yrpGdPANqe4ArAoPjjGA3qykqvsKKvuRrZ9KxpPjUL65H2BUzzkTCETPPHcr",
  "key21": "2wmeQ3o1H11QVPs5GG4aozZ3gKcqvNJzgVYBvYTXvkxfMzB5K7Ku6qvY4MfMyRzV8vDfNASFN8T4UvuECmqs99BE",
  "key22": "3iKqhuSNG63Sco8AMaMzZdK2ZAMQ7eUxE4fHved3ASJNKmybV45Pu2JvXB5oe8K3QiVyZtczV7eHD2xWnuDfHFeh",
  "key23": "5MRebLYemFHrc3YfVGyQUYmMiHneUHkq9XwYLfjN3iQumTQuCr27cuqMN2cA98L3Mak8dDEBjRz6i2YMdd2t36o2",
  "key24": "5LxxZNhjPzRexSmxt912a5qbP3G7XFQGRfSLxSVaiQCEAi2p2MGdp11sSjAM9WJQotNW8VPLeRP189qQL6etANdn",
  "key25": "36fF5m826GRhgsiLWaQGxSFkUTJB7CPPSikT9xp8qyJfMKjJRZ9DWRe6HX4Csow1zgWnyzADYZjvLerN19LKDXEB",
  "key26": "3N2xtUdYy9SiFEdLRsUz1uJui1wuuNScAvNC1NGEBbnti19KgZdCvYGcqHZ1rw3yjG7XAchsb5qdBMNLHj5NcYp7",
  "key27": "2AkowGY5wViXxKfHprk6n4XRtiZUVh9u5RjxKQ2UAyun3oGCUtn2kJkXFySKBx9inHuB1iBVoZMKRUipejuAYXzk",
  "key28": "44Mda9fAAmq3Zd4RCRsArrUUcNssJYSyuCZHMXno4ZSbaCMNubwRvtBtvAq2oDN9TyecQHD9gKUJUVHkTTorJD9D",
  "key29": "3d4KaTVN23jU7goBjYLFGkEeHfD77tUNtBsMxSPGu3PLbWcgPqSZVoinA7gdALghEkiP63z9Lii11tEFPJBgYLjm",
  "key30": "2f4JpdyYAcP3kcGZr3m9ZYhw7zjQVAyVHbg2VXkatEnrnsKCenoTAefekqFEXNePfvH8B7bC8UiLq26C71nmABnq",
  "key31": "2SFAM4uTExXGUtvtURQf3LdPyZY3GEkuPR2DyaoDuoxFVBz6RnUxA4ezD1RB41u6oAPKVNvVz7omtvxD4ARshJ3T"
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
