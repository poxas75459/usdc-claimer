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
    "4wmxKm4HyhWnMxEp15JJ15ftb2V41cCzUZuWukyWTXUbRQmkjbsQaGjzKrcbEf2Ui12GaazADEPtRdoQgK6aH1H8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3etEsbKhB54DPDFfSHqwqFPXnRUfesq63ny4rD5n6Favq4B2pm9RAwD1dmt8mYnsMvSQLoXNJqgxLsCxsDEDYgTA",
  "key1": "4gwyBKf8QD1Vann51sZnP6GGVZbmBfCzNkm99uAsVgQXLxZT21NmWZwRGN6FmPFX7iFKPZndnE8kugiczVtoPp7Q",
  "key2": "5U63ugs7DwUkFc9VVNPuJ7kQ2xomGuuHvPhmADdJwQxmYmejszRRggMYSUMAchjAXMBVAzJu2dYUB9rask4Gjn8W",
  "key3": "3uwKiPeSHhBXePRhinu5qkYM2VoZA4SYuJfNAPUJcgByfUgZd3tFTUmvUgXgSkwU97jHVv3e7Vfjh22LWgkaQFTR",
  "key4": "24ZyJn6zpf3AR8fHXB6gCv3jVP61KvKrw3JTNZna3TEcSM7DuLL7vXr7FgD9w6WWEfbWxFMmzRCYjEYqVb83cp72",
  "key5": "5BJtenW67FjpWXHgoMsW2gSwLb7BqUFMzkDKyUeKpjA5ZCY7ciFgg27tiAQ3NZ81VFvFmRvBjLH2SKB94k4Q2ToC",
  "key6": "4YfwXCmTnd4MR1j6gHpKAKnnLR6Ee9CZT9ZGmrUUiuk4UprAU2GiYVdrdD8Pw9Ff3fALWg3gkTa4Ht48suoeS95F",
  "key7": "2iFDfAicn7T6fi9ZsE2fDtk6HPFxdSakW2HKPGxsfCkHKtgw5Hmg9ydWBew13Tc2TDqbWX52ktk6dpUe8yqyojuh",
  "key8": "5hoNDg5WKLD7S6qwLHwye2oPryiEaUM8TEgEoW7Me5CQDKFFoSV1HeQwPQHM45oGz4eg6MjibEaMz81XRhdrnKu9",
  "key9": "4eRpkfQicULtfeHPa9vaTEUdB5czfn9xXNn5C14J8KxBsbhPvw8ySUMAaeRv7z9g2CosuSQaGgDm4wofktgJrBHT",
  "key10": "47YtW7GFNQGytLQ7h4KZWfX3bBQ7z1EnASeA3Li9RQmUZnriVHtb469DKf7xmqaEqPnZPQgNMzBsWR7KtzEdMVQ",
  "key11": "45YK4TFfxpW5Qpe2UPNCCmPLWaJDWcXERx6rnTLz9bAkxLCrA7yoaNGtxZ7FUrK7c4wHbZNqKYjs7JKHMbkp4Y4i",
  "key12": "4YzkoLb7YDvVNTw3BiMBTCTwmyHgrxExR5UBYSPpdfvZcwq1GUUKTHKjc8ejLLmAdegUWYuJzsvjnobQNAaJxzUG",
  "key13": "MMpWdq9SkVCz4uubYJfsafEjce7Fp1jQUesMH4LFnRR8jjNXHjXEWM6XZ1qRFhxc6bNcZorB96oEzRMSCv2982p",
  "key14": "4H88jmWbLPzbe7UugVFYMnyPfxkkMzRPXjxESrV4b6qoRGE1MiMXzmPuQv5AY2wFudrkz3mFNep3iXPuzUMvC6LS",
  "key15": "4rtLBLXbGTEaKJsrV9Wis714p1Abjxf9aU5DJx5iREN3fDeA2ApggMXNH4pdXbmReZuoFEdCJbgcw6dZ5sAZASz6",
  "key16": "67fReP2vhriSjAUqtdrZEUb352fGopWPKxVATC2GCjvofnkiWzbZJP8fHnrvP95nMSb2BvNy3YcEXVyPbtwxR3XG",
  "key17": "3TQLW8v52xC6GphoxPR4tcznUcWdF5QctPx8Zz9KyM8ccs7spYijKbUhMNZnXFDHzjzvRNijxVoTX3LTrX1t6JfC",
  "key18": "XcRDJ1LtKx2rSBxLg1UFgBhtpj8Uj5f3gJYEoPzJ5xT8wzdmJZseWkVLHUhuSkB7TnRuKrd4s46ocuzvdm8VXXD",
  "key19": "5fwRL1rdUhky6qZaCMXhBoccRNHJ3LLXNGmcEmLc4qiHCsrwP5mkThttttEZRyzE8SYX54aFBnAwF2rCmGvC5ZM5",
  "key20": "3a7pDhmgKP5SyR2EMYhEFkYKVfFWQamECYd5H3n51PJuGCdWFvBmRQuGSJoTrG9DS7e5j3cPqURzLHNUv8V9HGCu",
  "key21": "NdiGqdm119eho3eGtYhW5j69KxVy2M42LMxrTHiC91Jx2sTSrvvxB62sEHjrH3xcjgu6WnGq5JbrkgLw6gyyMzX",
  "key22": "34Pvi8V49cDyjXVmZWg8pyHXMMDuirqUDoZFp2aK8RMVrLKuXa14we5zLsfDkauUH1V9vRr2EsGtNLtmkiVi1pws",
  "key23": "48SViM5a1trh19wTP5kUGG6TE9KvXyfoPmbZhDyrCwP7DmTJr1X879hFJEa2Qx2NtuDxFNc6jAiHkahaWcx61twv",
  "key24": "5pdXEAdhSWNbor4FGt35bg8yXcdHwzeZEsoAp5ANgETqRsJkj1i3DXWFxmgBSWdFr9YXDRMhKtJGfpSCsmvdzbvN",
  "key25": "5QJW3S3DZCCfR5CPsjEzZZgD3ksQEmz22Zaph4ME1neZLxYkVUj7c39NU7GJgcmCS3UwHHJBhmRYNhJzfRiW4RZJ",
  "key26": "2TWD9MXd92i5d62CttKhdMAUdkE6uLF5JT7tmsqL7nSQzGojc6dsvhcrQrBgRyMTUcii6DkevRbx1gAWWCVvmDEw",
  "key27": "3kpBjSLFvh7Kt9rCtuCfj5dLdeTjzqtm4y4t8jgLrb7PkJweKvFTQiBkAmEXt8S7w2sjzNGw95Ndc277k3MtqmWA",
  "key28": "3rwjJkabdJonjL6QRWgVijxf6H29zAKr5gug23ynX9wVe5f2pAdyiyaD25W6tM2cVGUHjN85ScyaTaSKYzkvjk7X",
  "key29": "4HC91PGm5mwfXpDvGfVMGAa5ii2uR56p3vpVRHVpeAkPpWJraEh7qrnvbYXHHjnooU9dq4vU54E44XFkTGudvxkk",
  "key30": "4tEjdfMXuXF7g7GVYwTtaoNhifeRndoEu2N5ZwqLyKXBGtxWB19YiP1ovAejYyFmkvXjaTjqutKAm2EmvLNNdLKd",
  "key31": "5ggffQUcA12n8dF8WLHjzfN1yS3C6HQg2VG7KBXhyEwuEWmmKDkd2Jq3mGrErkupbPdzGYyvaGQ81sNxCXjnohvV",
  "key32": "5qtqmFzrGSZNCwkhU1xKUJsVg2w7DtAUGNoPzvWDSpQQe4GqJNbAUehLvAcTBdLKBvcNGUQ9Ubek7L3Nr4fJQVkn",
  "key33": "22PQSK5SdWXN3qXtRa879SjSHLNC96gaRnD8uN2XYcejd35o1jvw7dSMrbSTtaoBi34J8Cdi412FEB6NdGDe18PA",
  "key34": "3dwzTxC8NHj1mdimyLpRGijpkjmgmoT9dE28kH5SsvhDJ8WU7YiExZpDS729Ja4NPjx379JDghu5Wg5tSxVFM2Q5",
  "key35": "41gcyfiSmsDX212fJhAiHmR2gSKXTvVH4phjq6KmLfdWjS9ysVnEhWWUQX3K5XVceUhDi8gyYZaYn1aUyf1SRdzD",
  "key36": "2pJzAKznBhkWHkCzhMubTZw8u8CgrR5TqpexZd8cheDN9jzz5r1SZwec2Si49u9jYkW8R1F6di4hXiVvqn6tadei",
  "key37": "3m3LRbJaZGrktn8gb4sRinkzJ9WHFLaMLKDYXRWZD8AiZKyXc8UHs4GNzA4Ntd9cxzqHsjPEp7n5VydHmLVnfhV5",
  "key38": "2FVhB5W7H5ccxMJW4Hd8uCSUUq96qEgXZ1ZcA9tSNMFBZWdqdAqRP9o6YoYHf4A1NKirjWAdJPGUaJBiXGJTvY73",
  "key39": "2ytKgviHXobw2RZQy2RHn638VrtJnCLJtShVbcnPGbqDy8icS3fxXYFgE7hatSFzvHaGvKHhbDYPxMZQsZvbkzfE",
  "key40": "4pxjQPmD3ZE3neqAwDBHcHTWj5SbrzP6DYGs3e3bg2CuPYq7xG5SjpZQH7HEzMxuLFspxrsUPURnkQANg4b1wbfA",
  "key41": "4giBGcMb5hrMAJoSBfL3HPtca1GRZqLArJdSwin6mVMhUShDCxTARFQ7tjjkqtkXxvRtD7XUKTT5uizNydY6HjrX",
  "key42": "4q2mGChB6Yh6JNmuQTekVvQYcjkpEbVh3mAK9nfXH9DfVJqAzq4DDtTropb96Nv96mVqVSvUrLMHftqEwKE7xrhF",
  "key43": "5Wt1ZnpvcU6eLZWMcoZXNqzkEVzKhHzCLPPjVmnP8rPqoF4BwVrP8Ao1uWRzc7Dq1GftcRHxNZ1uAyuRxprjzJ8L",
  "key44": "3o9rN6t2Jw621RL5pTHeQw9dTN8F6FpQUNm5oXkmvGkSB813EwqpDnsxsB8yxcS2ovzhoqFPf6LveAWPhF3Vo51n",
  "key45": "1PxTiJCwN99aEk5cKwDPLfo7p4uy2Tsmc7X9XNnHnR6pDNhrZYUn8YYSkRnHPpdy4qVbZFp1B66K6RMPw2DSp74",
  "key46": "qqnysPcDV44Y5aeWh8JzmUAEVaMsvSPJn1DomLeSiABD84FWfRBxBQYAEEeNyxqbM6LFqnqNyL8qF8L5RJi1tnS",
  "key47": "4atUZVf5BCckXzR4fZjQ2XcBBovpt6BuraiEAaCZykjf3Gf3hAxb5TvFFyECTswMX3zRC6sv3qXmc6ziqT8RRKZx",
  "key48": "3WHvPQsDAcpjUUqrraFsmVkDhgpVfs75CFVhMxHwctw9y6pKaZPahDJJjgnvLzSpEDnqes3G2NPEAuznXFXthTvo"
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
