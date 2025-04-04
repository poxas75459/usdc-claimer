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
    "456M8qzBRYqieWFHL5roXRyax4SpB9jfsa9HRkBRsr2eBdj6Nei5SrbjPXE4k4y4ogmQnzEFpC5pjoLCsfc89ZMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rTXV4EKKcGrgS6SPP1Y5DnAweDnNSVyRdtg1gKBRbgADcoTAvmXCXZGPEyrgBpyvdRcFznuwGkAGMT6PXWC2SpH",
  "key1": "2EdkYKni5oECh6PwhRyudupxLbQVS6Dm3BYpwqZehmok7JGVAcY8koqaSi8tB3L5Y5RdbFqjbqfpwh4LS1GuUJ3m",
  "key2": "2gjNu3KdgEQcK9Ngge1HQN5nazD6fcY7jxaFMRWZbXUBLEmN91ZfxA4YS5KrgcbE76cndPnTpMQMDxgAMokVjQ6g",
  "key3": "2i4zdS2Pw9e4jQUpxG9VGTm2J3XN3FRQD4ddATPeR8MDsJumTzmT51Dj2zpgqmem4thn6cEtbjMzATiodMMgT38R",
  "key4": "5en7ntNAnzkdh7JwK18i91DZik5sSsyT1dbGxZRNfYZRPgv8mTVx7bVzrm5Kvx3VHVJCsLDH7zGxcjJLAmiiKzyq",
  "key5": "3enCpi51AiK7ZmUabXT5bTSwgJ1rypXyRxKnpfTi32NmjLjkBwy2YLPBMSnSJkawusjN67Ca9eBFt7PC6pmx593x",
  "key6": "5qsdSjTkUBy9XC6Hqd6LW5QseL2H6Jxy7uZ2uoLz7Pf8HcZXfU7nFNJrAfKAJgiz2Wgs4jzVierAKJoATfTu6sZa",
  "key7": "4g6vDMpB734Mg4GmbnMexadDEwmRCWv6BDGQrHRDQ6hcNR9HDDPAGgFBZ1BVwEcdWFV7VR6LrFEqmXVRstY59EhU",
  "key8": "2M1UQXNtvMM5rWZHNxFLKGapNjYwNGYF7qsqZEaJ9XBN4pTek1ZaoAhqKdCueysCDs7VZgNC4gbBxx3Xb57W17m5",
  "key9": "5iqAFJUax3jy5wGbNKqH1V4Yxk8cGSy4YRLX6gwK13HgAkyx1qvsXikdVYmn79D5mft8SawYHGHxDJJSdpWjrcyy",
  "key10": "3755vEwJRm1Ng7afsNCDDbcQjvZyN4HKgQroYbuk8ZKx7pRbYU8KQr3wcywWiuCgx5u8tWLPTncPXuHpv9qdisH8",
  "key11": "54s7GYWe4BSnHfu8AyKvda7udywVe4kTDaCCchhVPnmg2KRsK8RKYCrNi9iHjgYLY8wa9sVaBE71ZM9xegtwuvqh",
  "key12": "2ejWxbyyC7dGuAiLQePyDMfq5twAueWx8mXjwqjuvrSZqWUgwEwJQqbFE6asyWNYxXd2zF2TaVREQxmEFmB1q13J",
  "key13": "4e5Y9PwRuCiY7zqs8L7SASNk4K2GKARqjcvyBreUERZj8rTzLetbdJXUabWopPiJcCyyhTbFuCmqYgdtioaePEkQ",
  "key14": "24mbbfpJjjtdtwT1wkPRS7GSxUzcqNCaE7Yck3NGjRBdNK7V2BPXxhqxg1Sq9aVpjghPNkj9bmpV7yZTtcYCmSBy",
  "key15": "3dSb8YxzPFW58jmf39Afy86H9uhTQomwDLTMicsbXsQyBrERE9w2x2QgyizpicZMNYEznysFTveP211LwQPhgdbN",
  "key16": "47A5JmJFHVaMRAeD2sfquiEtBzp8fS2mLZvsUDYC72wxcuNCFVBCxNyXXU5ELdtsLGDYz1fxNzPBNYzBnJM2nDyb",
  "key17": "4M8zVV4hv93bvAxwk6o6zcKGsDwofjTRePMpBYibkx66UBgahpFDyk8B6xMU5Wui645S4ptstReG8PYoD86QmyER",
  "key18": "js2vtJg7doJwdpmREfwN7LGbqfM4AsBDtbVuept3hCSPWN5msmVvrME84xnuFvKqBDHkZtdcvwaYmYVo3jExJec",
  "key19": "5SvtaWVmLDaarTkvBa5ftnaHgdvmUAmFeiA3qFG2VcYkAqmyVFnAmxFdDDi9qdF3HuxLsiJnPkCm28jgcPdH4bib",
  "key20": "jMxhiY9nQCktNRi8XQA8LQKp8LULRmWw9zUnXpKvbY62Kyj7DdQ9x9n8mE9JFWRwtJYzhzXxjZfSLVfJiDp8RV2",
  "key21": "2rKqNaJcKjkfyCLR6KpDZqRmMjz7HaZ1gJMrqXrxyyGg9WGLZ7B8aBCwch2H2ZUsvFXny5wAADVXiigWi4T8YMr3",
  "key22": "sSsV8qdAwF2KcGavSwoayXBCT7Pycp5dGPbkTXSy27u652m49A7E3aN7Mm458RMwaegSkJMBrghP1R5TmB2BDw2",
  "key23": "4dCHEbVmhEzw1kZny8FXFp5sQBwe5Ck4JgfzZHdUdoRvSoxJJApcGpXdMbm5omaZar5xFRx2u8uG7Ge3KyVa9nqN",
  "key24": "4xfSz4HRFAz5xwe4CLAZt3ShU2KbfxXmphQ7ZXKW1kYW9tnTYqoGBboELzfjJwNB3sFxtRr7GAcqtaACvXnc9JqT",
  "key25": "2wTj1nf3uZeq1KVmFTtMTH999cEZyUdhPXMAdAHnDZAi4UwJn9yWVzPNEDmFd4w2LeVqpbSmHJutk5RtUjoTF1cH",
  "key26": "55bnYaa3ryChN6QYZupaJW3GhNbyWibdzAyim9XyFUh9eCPh7CVRKAMSQ4RhpNeRbPBfyPMxVS2HsVSq4qPbDsS8",
  "key27": "5uAJsi79mCuzSUtajVSoYZrvxPeeo8vKtS3eneokpoAwVkeSKhTiLwz81FDsFFRCmRheFahiQfmN7Uj7zoNa5t5u",
  "key28": "2BRv4vBn26eDXMbVo43WqixqisgW5WDmCdjnZTw4k91EUyZuncb4udqkynBXWoxX4xiXMZh7dU4ShsyzjDtq6H2z",
  "key29": "5JmaekjyDnakF326jQDjwLbs7HSdK5FgmpTq3CY16JHb5nuNgA1U4cUqVv9Pvv322gAvTvqvrPvDJLSN3qLqevso",
  "key30": "Yazebsu2JkunyFKPm4kMsKCmc2y1Yfbd1W7p2EiJL6BWEdTKW9P2d2cXhLizvRCgPYUhHL6caCN2z8mHj3QkJ4G",
  "key31": "57nYpCrttfrvuMCq1nozdeyn5xu5482HXXeqnzz14rFYdfC1aZmbtvPwAqfhc2i1pWjRpYLEAZohttLLeAhFHYQQ",
  "key32": "3AsVvCm9fF8m7shdDiRTakGFox4wpQJc3v7d4yPmnnn6kbTUEuXMf36ubsSpfAcWhLV2kkWQEfUkyuthFqX5omZt",
  "key33": "4wk1B53p4MsYKyPxm25iiSEVvt37XeZqai9S3qVvWcCjHn13CNYXJaoxe8bKGe3uigXCm5bRVg1THL7FKKcbWU6L",
  "key34": "9PHstq5VvNTX1TJhdmHVTMvbTn4V9wCFzFAGFoMVdjBtjT85TPQu4wuWJTu52NuNWp8XckCxLMKKW5i3XkNDypw",
  "key35": "5sJEnGSg6NYDsgzzwCDniD3KwPGqCwkiG2WEmoWiq5bet1rksHC3oPM5JaSAUHSKLJ7Hqx1qsuZcGemkZP8FZLeS"
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
