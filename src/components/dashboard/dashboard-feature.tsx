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
    "2PxnmAHPDM5u2xTbkPJTFLbewQW13p7tiDd2zFRLSmxpGngxneofd3y9UVncH1JuM9ripjHTfpxZReZAmKNvxLgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ircms5V315GkoLegkw9tiwYv7gyXhQJzDobTyZgXXNwFBKHN7ufKgL9A6XuiV822G1k3oQdCt7MGuHHwRL125Qd",
  "key1": "2GepJTL9bB7EZgPSYDx9dvL8bLs2LqBjDkb1PTKR2P6xLFjRfvkMFBCrCdNQZwh2goKbAFvZsyyM5Tq8Cu18tNQf",
  "key2": "mYfSBtukY5kohVZprG47L2vquVejEZxYqLwWcR93eLt6KC48D7uk9ZBtWAGFX6waagcKzFqMWiLbmetQCAYVGnM",
  "key3": "5xmerNpaT1TyftTfe63GGfnBeyf9Y6tvpDxRnjHitSoYNn6NdRrDKdSoEeiXCZM2SQ8xAF4DxEbyoAKgrDQeAMHk",
  "key4": "QNTToLTq57hhhHBnWZWunao63YicYu9dm3zSE9Y9GCNBUgXiaeVam7zwjWaB1QbS4xnfGK6vi4523mmTSyziUfd",
  "key5": "3meo8b1wZjzirwtHWesYzkaPfoLyHHGPRVScrFuPQT6aD1EmfnDs8Xfob8Zvnz2RAYFdwXFfCmewd4473VvVgZM4",
  "key6": "51Pf7HsyQYg8ypKuQ4U7G8euzKyNRqDJ6ASkDnbpUitv3j2jJiuFPRMzYyvGbnph48CSwwi2EkFWtfVuaGSAL9X7",
  "key7": "43TC99uZpoqdXbCvr215iuaqpnucTqdDV4GgMMgNJ5m7yujUg15LzTNDrUtLbch2ACR5b12YeZPYJSnZDKCSRUXv",
  "key8": "ULXkhnrCbQMemfSwy5gUaAuR89Wnak9MupgCPKG18UsfXGn6FXLah127nYTasmPJZ7yUkmoE5i17FLdKuPcAHuh",
  "key9": "2VtZBNLxPrrvtrbrnYPYFqHihHTiF3SDRmgYuS1qvmcEz1rChkoHB9asKmJu8k2QFiBXou4ckowogQYH7bzYBoU9",
  "key10": "3m7jB4h7pz3e1z7EedTDxXyukUP4v4QHLKmHPnfr4iF552iKFkGHCRemVDpCgbDppKaWJejAH9ZSAfhuNUjUGVMt",
  "key11": "u5kV8yDm5jD1m4paXyCqpm4t5jQHRhXpTFfnkkNVZtKKPASqsci4Pot1Ewyc2JLH19Cx1qLSfgdn2NX4Nbp8DB8",
  "key12": "5iuc85dowjoAQd2VpRnMCn6DQs97VFqw6iYMFcMCwmzR8gtgkfuPHAKmEtQvegz6mEJtM1q7cH3UWKHCxp6jsghK",
  "key13": "7haGid19HvJ4PmahTNvSGFbfAWH85cXizZnCS4ezSk3xHqb1uKHUfdaVKtj66eWs9Jimafx79quddbch3s7qaQD",
  "key14": "dYTRpBP5MKrSS3Ehen1brUnL4Z6p7a7igW8U3iCiWsZ4zYKBtSR1wMpQdDFfyJhuzbTFsxKu6Am5noTTpydbwdp",
  "key15": "3KukHdEjXHUcbhUssLADNyAQggN7eBTRk1AF2MBRWZ6ZEiCYP52dC9siqREMkLP4utapXXm8idMf4banFaAT7f91",
  "key16": "F3d5k5QJ9FrqPDdw9YAtrbRsbK121ai8CEBiKBs1kkDdZjAYBXWz75VBWtvFXMVXfjttcNZ1z312ePtqRCLypz7",
  "key17": "346aGeZm7LyM7dki6RXsUtEFeTCRswUTWuHJpYRA7mYk5sbJWCDGpHGSen6N63gjLA43HjvNnwdniD2VrwsdbM8E",
  "key18": "2xGLVgqpyv8uWA9gBW6y1qazZQBn6nFFjQSHuMzb9SzZxVxmNJw1s7aLAEesMxX4Xzoeh4D2SxwNFCYgw5AzDoWz",
  "key19": "3j7Xo2Chk92Xyjw55AU87t5brdWp9Uk6e4kKvabQx5LZYbJZYoDbeFcTQDdVZKJVmHhtNyHuM8WDQy2AFWPeNibP",
  "key20": "2o8AbPRpGfBTZ68kqwK2xbfLkpNZhp7tNBY7kS9xLiUS3xxCis2w7AJXmzggL8RmXwpp6nPdypE9ZtMMmVsst7QK",
  "key21": "4Q6qnkWtz2JKbJyrSQ98GLDNc17eSjHf51nf3tXTHPj1EpvdnwbFvV9ef4vHjQTnLQmd8YLeYGtU7qHjYydNqEjv",
  "key22": "CqSLsoiW57rs1v5K7KM7CJAX6s47LUzGyHcco5KoUtc8hjtEC1YHMS4GopSLz8PSJ4Ws6TLbocejVYWbvtW96s4",
  "key23": "5GkbUkb53LPrUhUcgSstkGjgzysjyKFdi36GPc8N1mVpDgharQ5mLVmJwPmNVwu3m9Ai3EAnQVu3FFuPiw26fruw",
  "key24": "5esdbX1LbYE7Ri8PX6o7fEbicvPxJ5eKrMQ9nv3HNAB5UGXdsSMXBuUVzTGuqY265PTDW58yhuxXzXvZDSpNppNZ",
  "key25": "29rgH3wWDAUBdqGHK6rXDxXz42SagT9RtpVmNaKurymPWCSzGVJmBKN5ufSxPftB6gPeDDGRkjWDoRM1Vor8TdSe",
  "key26": "4EEniYBXPCDP6Dr345v5XMpyy2auXHgUARj8urSCWd63vF3EMSWKUGR78wiPCTmbT3o6CUkmjLwjsgPJ4XPH7skb",
  "key27": "2ktcN9o1joDtZsk4jZBEBkiNHCaJoYBpGSTGoHPbZ89YbmkBCwUDA5EMDvdMMZ2tu6i86U2dtsUQxznPWnkvrR4L",
  "key28": "4KpaVqqG62YAR2NuRXVVVAYWUwMmY3dQeAjqSbUwb4E5Cy84zDvvNHTGwPfV6XEaxXRqxfeLwB3n5YcDEmvu6pUn",
  "key29": "3qt8ZmPZrMXtKXgRvM2C3g6ky39SynCYMsMKmbpHX2S3CyVs3ux5fyyHEzJG65uxZriF3czjFscBAuUoF88Fu3Lx",
  "key30": "QfiGpBVodHyPYvoVzEG3cwHA35iXreWjydcLSj4p4wRZNAYYxF8VVWkx5QrKsbJGzkt1gNJfYAdPEeN3RnT9qjW",
  "key31": "4R2osJeMMLb6yezrCwbxmPp72GAMDUECYF5DrsyWNQcdhPsYBExf3vY7DyhoavWRTwsuJ7UscxArwAiNED1ZFcHp",
  "key32": "46U4kRpgxcxiMrm5d5sko3NPLgkk8pgv4JgTHB3H4QHj8xxBGvVYsNGnUfuEY8hEVBcGARVf2Q9RzfGkSNi66GN9",
  "key33": "3gBExjYsAKAZyZnVhGmFXUGaw4BPmM2MxfkKoHs2svHYmShohFxZViLTELxgA9TGW4uLWAmk6bvv8UBfE8i637BP",
  "key34": "F1WYaU2jQsNzFbzoosSxtAcmhr98RSAaDfmjkTG1iHzb4864JkcAMc751kkX99z9L7arLgvsmeZhk7wnvddHu7P",
  "key35": "5ZdFPUGPuZWn17doeMdiWBQRbX3RiN1wUtpdGZ6m32v7KJ4pk883qzgB64g8A62vznUmXmA4tw6CNk3nYrnMNBqF",
  "key36": "5gW8mVmdWbg5DXtKmitd4uE3rHhA4x85jJZz12JQVFHkpg7jQgmpwcNfixbPzuHB4n9gFKUwdh6QPa7aH2xpXrE1",
  "key37": "vhb3wzPyUB5JdQUFLu9NwEwfPa1tV9zJGvZyZMwwPAvojK34J3b7HYj3z9kYptn3mxYNakxz9Q4DUABpkUY224t",
  "key38": "kHLgvxbapA54uKFgTw3ze4LhGW1m5y5QcPbXcFPVjW6A8sodTbQAZuCbdKw7S2sC1GbMb6GcibS7c9QdZoK1pdz",
  "key39": "2VVAXY1gmPHtmcncPRX1PDoMUuBxnimBsAnLAAs4FsmAuas9dMXH8Zwr24XzoqXjUnnBXq8sU7r7BNVaZ8L1nMkg",
  "key40": "2yn6jnJXKtpiUm8BUfUr3HwjBN3YCLuPnGcL3uTRcN2XL3UovjGWcrNNdGbs8mrQP7RuRgYTbFr7AaPDe1rVz53U",
  "key41": "5XVWKvaqBNaMqDxRiy8xgtgziGSsbAvtL3hi9Unut9Aezyte1JXH9JzyXDQAjtNBFuG4ryLG4zoTrRqPT78HkPoS"
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
