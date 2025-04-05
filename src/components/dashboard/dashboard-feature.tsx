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
    "YmhwKsKxj4vKHVQ1ij2A14pN5DZ7QUScmSbYFjMBb4GxDsYD1eEHhoU2az87s3KrE5Uw6Z9B6C1vu53ZFyXGst4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FPbGF23qpLK3WNJTRhHTAQUcZrGejm9U8rnVoWoCaEdnYWcCsWGcMZ5Mv7WJRJCNdGskmHh2BLq4o2ae2LvXWUF",
  "key1": "4fMhmvxjT7xHRgjYrocQ2eoLtJt5b4KN1XKUwpUy9pdd67kMLS9wjeEB91kBeWKixgCmfEoZuAyRu5kpvuA7kyWP",
  "key2": "4iaXvtL8NJ3dC7VePACVq4uWu4F1SiLfD1e8ZuL4G56RSqA2gmgAvtVHedJqE1qvpdVXwUA8Lfc1Y7xHMYYv2JJV",
  "key3": "Kki5NdZTXTxdA4eA86aEXako3WpJr5pR91k3gkSrtg9N6Eneg2rbxsaZuJyTTh68LQ9qqsb9xSDM4gFW4ok46US",
  "key4": "5UgRdQJPZeyGk3n5GsqpFVCK63YHuEpwSLYDS9j18PgChjJot3e8EFqSmhMfx1BCqeZFgM6beWMvziNS8exbsZcU",
  "key5": "5KQyLQkqNXfKAHHpaAju4Hs4obHFGTqf5GSJHHRyTarnCm8TetyjrhCDMatRxC2YW4rZ2pqD8YBSzeFgmtygFv6M",
  "key6": "5TGZwiTpMdMBWgEj3cFEn7pdPvX3ouqqYAMj5ax9w5nVNAwqiMhPJ3Rr2umvG3FEXgc7gp3FYPEbdzfVkSL6qHks",
  "key7": "62QdUYeyLokQVeEiUGepn1pC1cSH5VsrsXCuJ2D5efrJikE3LRDHid28tL2HRUbvidwhYDCuPyMQ5S8s8S5HMbHP",
  "key8": "Rfew3z2QdqzEF28A36N2Qg3PZJA241QVSVQMPWb1SiWitJMDFGb4oowNzrgJDEtTnQbmy9t1i3QucaV5yhdVNX8",
  "key9": "2LShUDThckPXXmGj1NgUwTFPUmYeK4aphdwi8QY1hq1HBE2cJhoFJWLDq7b5oUxEfxrxYjeeYSTi3tLCGVGZcrjq",
  "key10": "5bR77TNDTF1udr979RusWNBGXTbFPPifJs7ZVpRSUbb9C6JF4AmXpHqgrhzLBzKBW5sJH3Lu7EFr3VVa3n4x3HQa",
  "key11": "4WfgS639PgLUMN6HErAViMFiy2BdTjaga7qDWhvCSgBaUqGPP19Ah2ZyQaZYvTYYMV9Z6DH3gGe3QWdHNCu3Yjsr",
  "key12": "26uj2ioBMLE6uUDoV3LxMsVQnWwvStBb9mbXznPrvB5S7fRC8N3KjDWzmBiu6J4bqBzSwpJUPWLXihZrRh9Y5RAL",
  "key13": "2q2dK26Tf1NUBD6xbG9EoeGjhZTgsLBTKFWEjwVABPfiuQCWqetVR9n8C1XTXtsL4T8iUEnD3r6hLyzuLKdHNhHJ",
  "key14": "jQaqfLJwoWxUTcD7aPaL18HHg4DKRr5WwFnEDQUdagbTFbircQArLJ6wkvBf5t1ToBYj2bBAZy8SwrdSq2veo6h",
  "key15": "d1yGXWAgzpp1jg8wNVtx66g7C4SHxBQwMB6L5qtzSVHPWWx2MLZ4JXpbJEaBbUNK29kZfJpUFqaaUnAA5795P23",
  "key16": "2JMrmjXQ3yWHAgSqszRwdb4j3Z8c2FXMtEFsNAxSnbhxda6732Q1jeSnTY6iq3mjG2hRt7AUpVLeK7YDS9xVUDfd",
  "key17": "4Unx6fYAKvGR9etNqGGnztP9fQJAp2rNLw4BnWRPBz8VtqAccYCZAU6yBA4ojpwBwQWbRfN9pgsQH2c7xdERSZ4c",
  "key18": "5imdggaoP5JckQkt3b92QtPkBmKWzrVZKcJq9X1djSFSkCb19vys8w2oejutB2YLbgRTZLbmk7BFxJA4bwiDnFgS",
  "key19": "ZPyZKaJk2BcSfQVdMRyewMeJtDG9VdvjV6RGyvw5ppwyNB4SkqdV4oVPmpNPdrMw3cPKjFjfvYhUgWyR1YWrJVE",
  "key20": "26ivFbmZfAoMQcT9wTyFyqifFqpNi4GTw8zZoC2j2JGEYkiPAVFx6nzwZGzizhEsiCMMdeovAbryCUhDuvUwCkw9",
  "key21": "4XUEZjFh6uovKcQS2TuGcMUmdWeZQEMQRMRCZnzeZjtSs2guLZSLDGzBk3t3xHL19wve26hLAMBoVvTK1nfoTWVs",
  "key22": "2gv2rTYh3tfTWmAc7BfXyS8Bi2dMGWzeuhzSXYYxVKHMMZwY9wWNGwtENsTPTpQjSsNE5DnUyhD5urQcBqnkGmUn",
  "key23": "64FrfdsKMKhUhEzqTtMKc8LaKXBTqEYHfhotEzyBUmAVBqEf8w3a1B1ViaXik6pF9xYAh5fCHYnbDp7PhDmRZdsv",
  "key24": "3egfjz9VsRyk1gkrciZ6t3hGqFacRQTuAE1K3AnYrrYeFB9qryogyxGMxWPVo5UgpdJu1V1ez82rUHJZqWhF8CLu",
  "key25": "5fvGxUkXjvuvwjd3DSJYzib2eVunhmnkbBUNhVDtmFXw5moAQNBWucu8z62z4yZQTV4xsCDr6YG9dkvpGXavUQAv",
  "key26": "4GbTw7yVQ6i7BmUbozyHswNpeg1Qeh9CPJxmAtdaTErk1NWnb1jC7DARSHEzcDmkg9ubaZcqGZc6X55YEtsE5Kha",
  "key27": "2G4atK3TXh9uPgK26DchFMywSUhuYVqtTHwRMfv4f5E2KhQ8nkRcb5wbfiqxYviArbRT4GJbMXCje2ScxqPssoDK",
  "key28": "4oaazWSYnPAwQ9i8oP3oHch3JjQzToaEFeZwAyCCCMJ5jFpnwa6cVbxQxjahfDXjXf882UQnRgpJySd6h3ABoeSe",
  "key29": "2BJzEmpK6ovLKCsQyjfWERLQ5wjyVksknLiU5NcVTRBW6Lzdu9mY5G7PHX7RAhqvKrGpKkbzG8dZ5Dt17PHVWQV5",
  "key30": "2DqHrW89RWjLwwVJaBAHntptLDPDvRCmYNM6zC4Fh9G757MbT31GzydhBSYQDskFsiUmPmnse2hXgAKvymd2DgPM",
  "key31": "3y5MYjvdTVtoLZun7jUFEG74pGY6HT3e9tTcPYwTSpMRdFrwyWebRSq83wydaxPPFbrSXAVV2oAHe5VVjhX9AiqA",
  "key32": "5tsFnqj4pv3umVSqZ9SC72MwjvaRRUg3Lnpd6cCt5Cnu6Gb3kDEWvsZKarvpQJCD9TYQMgY6KS1A6YvVhSUvouSq",
  "key33": "55XdYt6KBrD8RDRxXTGmFzPFnSF1yGPw2iqie4ksexGdPr1QHdkYjTWrzKqYUNFz1wVmV9yxErfDoXVXJL5v6TqJ",
  "key34": "5McwAzxNNAB59hhbWgMWu3E9FBHv8ABwcjUN9w2EoedTRvQqtWG4zXxJK6Wyv6DyoMkAfGFdML3ytNdncVAmqSbK",
  "key35": "5twDocRuMCc1oExJowb3xjGHUcXwierbpcBr73Hj4i2tQD5yDLCDMwXdyduy7AbWksLGQNiaxLru18Np6uwuUBgR",
  "key36": "52XTVowX1Hna6QnKexKLJx8bmcbf1RLffC72Z13htHryb1ZaG1EBLYYGVrkm7FY2ZssBCDo4P39rfe8fDhqkrSdh",
  "key37": "5JnUa78yq5pL35SUZDMUKeBmo2QKmytvxSXUNwvhUeUGpD8BCMy2uggNYpZuVJ2hPGpFZKbCKXKzuKefYAvXpGeA",
  "key38": "2ozmKQQ5R1M9emyRyYhLGqst6eiJwhdy7P76fVvfW5AUNS51ZRRrCsDRWabrdUxzxQMoQjf7h93gU1YgWKBa8EDj",
  "key39": "3FKuKdxjxva2ZRohk21S2AU1fT8x5nUndYD3Uhn4Vm6J82i1gUmdPKE5YNbxha5RRzw2ckzWQvcoopR3ivHUdhwR",
  "key40": "4fUHCLNatVso1UrxWpKKCeiUZTFHQ8LpzzfYbW1DiaRffaBdAuy7etxj8hcpvaNu4iXfMpHGSvTKs4fwM9TrBz2A",
  "key41": "57gjWR11FB96YBuNM7wa6Znf3rLa9dbD4e8A4PVLvGg7xMhJV8Z6G3PR3Fc78HH3vHzUEBiSqf1LsNPbkYHGkX98",
  "key42": "c99Rrgq7J2j1nZdZzRJiAcghqKKNHg3quXTpyrNf7VqKtc9Nd7aLy1dkbbKu8GQL1SmB8WtEY1AipWoscgkGc6P",
  "key43": "52gd1YYVRDS1agzwVm9guX6ftFzGTXCvticzNZXeA8Go5GRGEBGonzuMZDmjFnjzZX72djUKEgjQq79M1eVKRAM4",
  "key44": "4zghGd5YEvjR1f4t6nrqNzSq5eURtZcPWoApFjhyyESgWSCQR3NVCuwHxxPq71dq6Dg4cV3zYPfsDQa6srMwkD5c",
  "key45": "2Dk7wzxzEHGC8eh2E4e1v9ToEANWz17Nvfb9m3BFfkui8vd1pFTSiz1C58rHZovRBvXY5yyETB1nRmGCYGcXLcFq",
  "key46": "2merwaNguYrNoNkk6BEPjyKjkLZFcWfygEFcdjV6LsDpDVwg1YBYSa31bjePKmK49SXjA2f4wHbSTSVcnnxGY6kH",
  "key47": "3v3PLVMddoR92SoZpmJKxazXMb8i7Rcg9wkBmRg1iX8Qx5NM6xrtnNV65Qv3MrnYdwbeWBpwARw46aNTLz1nPG3a",
  "key48": "7TrRUrHt8ziQmayyMiE3zaLPaZ3MFwAUa8U7Pn1TF7438pupC3LhSKPgXzXHmECgYm5HNZo126r5XGFB5Ed2NvH"
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
