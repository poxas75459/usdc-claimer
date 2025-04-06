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
    "5uuMjXaCs793am67x5UeCa1KEA1JDjdHaXKZk3B7teP65W1gY5biGnDjRvAhM2G66eYtBhmcrWneyEasWPsDCnkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26HjGeWxfH3u1QnZDd2nkYGzP6GnqeHgSf1qT88r3JKKHudUW6RMisa6Rndk5AmUaZGAhx1LFCcjoEXynH9LMFt7",
  "key1": "43U2JecY5RcbCMoEtWUt8Ke9EU1b3LaHDythR31xKBdeZMGAXK25GaoJHML12coDa86sco3iu7XZdz1PpUgfiZgq",
  "key2": "4pf2zWBtkd827nft2GT5xggVwjnanbnAC8boAgjxVXMbddveASYigpwPMPQPJ6DXcfXFvJUGh5876oSeXrSGUtmq",
  "key3": "64khfQ6cD3GSKgokDZmm24s4z7QFW7jLRbEwLL4qiEeMnXLxk1WAhJRULszU1Q3f37UmisoeE2ZXnqd7uM9TbPad",
  "key4": "64LNCMwn7pGdWxB61KGxEANqcHiAKdEvGTPhzxCewQC9FiSHAdF3d79EV4D4B8EQxLS1RF6C4nwdoZFy7Qr3Y6xb",
  "key5": "2ReAoKBmsDPBhrvMUzo8PiVRgAjVHjenY4pK4qxWU5LmdBWFGpXng73pcSUGX8XNVn2tCH8McRdsJqMPYG8ERqWk",
  "key6": "2uVregJTa7je4cBRVZQzXtnLRuZEGauNLxuV1U8S8m78yu4xMW7uRtJoKZaHv8jSdSNJKxYBeAareZzgEVq8Lzp7",
  "key7": "64M4rk51iALprEFbQtSVUdm5ewycu2dcbdZVtWEQevyDPnQtaLpQyTvmGCZ6Ds3sKK1Vr667DUgosXL953xPTKTk",
  "key8": "UYHeqGavDg8XfJCgDbGZiZsbu4RkssiWQ9oF89ieoJiGAzPKTLht3zC94KegYAHGic35pPiP3EiYxuDHDG1YoXH",
  "key9": "5ZwsCnaUdEPnFsGMJwaSkmVgd2SYjCJLAKeHgEbqDTxBSwiX9kmp1HwzicSCe6RfkoAnDyEjo5e9bHaVqeGiu3cF",
  "key10": "3mWgLtyUTsyMSct35mVSCKBMCGNjLZoLMwHWiZ4mD9kQnfYsbRngzEow62HZMowLRGdRv9XDQhahr4qXvUYynra6",
  "key11": "4RBMp6sbQGb1oK7JBwJQpeqg6bfRK2z7dKJrgQbvCjDVBGFyzadQJxB2eCvQw2WNrQ2LXz5LWUN5bzxKWAkHrJxq",
  "key12": "2ZFoEGHFA1iBhPM35aDDLdSmHji54EgB5sRfV3ha3V2VUaDruyE2yH7iZnxDqwVZtsX1SdiMGv47YyGeREeMU8KG",
  "key13": "5v9zxGjyCg6NQFp7uaFGmkDj7QbZvUWjW4TSKkDyXb1BKVJMzy9Pcg3SKgfUtvzKR1LcuhP66CeJ4qbMEw1MYrJ4",
  "key14": "5t8uwcytaTFpFztP1mvnXPquWmBiL85mATkmnaT4vwvviV8GziGWwPVJp7GCDz3dT2HR16Wd7mJ6bkQotAmapEq6",
  "key15": "Pew4WRQ6tyCdN7rbrFrffo2MgjKkMyU3SMz23eYti3tzdH6Pd4yw5cooS3dKzoyG7qwAwFfWQj1t3ePpGMcjsvh",
  "key16": "5yubqjEDY5q6zmExKBfEi8qDcTbW4qPnjpBLjLgyybHMgiPE1NJWCTmuZtyMZLioqai1KGwzC8h2tyHkQQHzdPhx",
  "key17": "27HeDYC6emSsD2SBFt4K1TsVYfwxL8NEPw4Cu6fev6NpLmbvSQuEBMPjvGqzReRB88wS9vpAacpFoiwtj1BuXd9b",
  "key18": "2fPgxxtpLmKHKDkbHpmusQ5KM3iUBqb7mDCWj2KrE6fCyQwfuTQ7pVyvW4AwDosEcG9MfdSuVQhVxGV5jjWz4HFj",
  "key19": "5LnsMqEY7uTVzeC7LXwZaXCA4w5QJFaJhk8QPXcC3xisHtZm2KTsmS6gRcJF15hFSNj1Zsd1FtMBRBV6bKNBVeaG",
  "key20": "4ssDKYESADGX97woeWooBboVaSYNpUGS3RXVZZH7ymYkSfdwevSzb1swAHv7rXDWPTtjtuiDadbqDcwDrg2dcRxD",
  "key21": "4mYvKX3ioPUQiTz7jCTfECqfKvKggoipo1h1SBBWDU8MgdPxMBvQJuS7VPeNEL8kSDcCwzkHhBEHSuQQVKuUP25T",
  "key22": "5RjukVq5i9AV1DUiVwFnobC8UWLDajubeJwtPa3H9yv3QfJYpWT62rcTvrMAVM5BW1wWjyC37SG758zV7ouDMj9j",
  "key23": "46HL1g38Jqe9Ct2aJq5niXTUq1AxKmRzq3LNpQnoqwcPsB13hFFfGNwp94MgEhFRkYTNzWGUj3udmKCZWVnW1eTY",
  "key24": "2zuGFb993CXgLoizv5ZSwkm8ubRuy7DDdWTon66PJiQVgWMLCkL4neiH2RzHSB3UiGiqeja1A4SZcmSsioe6vzUS",
  "key25": "2nJr6xDs5kCmbuqVpwSbCmTEk5mgfUCPaZuvSarrZLGdxbNtP6odfbpCkDkatNRLLFsvDXKjCY6MSicr9d9UPaRj",
  "key26": "5sPAJDXgvRDqbKsbzY65aDYfLfQD8JnP3BvieymttVwRYKqWyi3Q53uy5wGvned8TLA3XfadvuQTcnjnEBTrDcwS",
  "key27": "b8kXeke3AvkHd8HcdSwrcf8uDFTHPNM4VieGo9jTF6XA2Cim81PJLgL6T53uGrvR4p4G95G43Aib3VksaKDM4KD",
  "key28": "eo1q9hWeFGqYPxBVt88tjg9ZeHiKeSoxvrjRbbyDZqAE1xNLm74yijuSh51FxZbPwjvLZzxZedZDT3vzgMQCxC2",
  "key29": "5s2SsgmyfQjJJT1rGFu1jjKuHCDYdzGNdzADkV65BzMLX6rQCcisppL3YHiid93BGFxotXRiJUBGChYNYmRnmoxd",
  "key30": "5WyLXRaDDHeQVP9fpuSo65vHvJnKxh7bsGHyGsinQivQPZ5CfxBYzTs671zCeBYJjUKKTUrc4t5Fttf5LcjdMgxu",
  "key31": "2jgz1hZvrTzQJBybHsUKseKakZpMm7CokHXp5rkKuUj3dwCTpFkQd8khJ4nuM6BJ1g62pZimTuopS4nErzUheK6x",
  "key32": "2wFJMSv3KjhLHsDtnWhPdEya1TFb8cJaKLdqTXLBZGqfHwMNhjri6uS17rbWXAVy6W2e7HGZSSCGwFL2ctwsLsTa",
  "key33": "Q6DDhQu7dT8XpWEY4rt64M2w21Zc5DV1zKP3Ehekc3ZBxDTJ5azdxdJeQ3eD679UEJ7da9MMZS7f94a8DwcRXKr",
  "key34": "4g5z9yTs3n35yZK8zbcVnRNHY8qAwn49gzVTpcWHE1vsVpftjaDv5noJwqLBjUrUQCu3hkcJBEMaAtoCYmz4yFuW",
  "key35": "37EcSsua87i3jEF7qXCQz5yy5aUXtWdVBemP4PiKkjUPdtBT7KU3DyjKztEHofqHLquTq4A3bUb1AWDmVyGuL9XD",
  "key36": "K6E8S52yRQnv9KovMzp5qqW9fxXfQibh6VtSsyDpYt5aKjRfa7eNUwctTPbN2dm1JaivkETH34EXJiw7vxxPVS1",
  "key37": "3XkMHknR37XvoL1CzPu4PTtfrQVkSiw5y1BjcNMHPkq5r7vK1JhZ4dPJeYY4ipjhPh1zWyc2dscE7y9Tj6C5rAnm",
  "key38": "4sYGyoQKPiLJsrZB9BnFAiEynD8j7p5hsQKr9poahq28DdLev7tmAhDsd4oGdZ5o3DUUpEDs7jixZHfZvNxWfeRw",
  "key39": "jn4LvwkJMH89Ln2HCUdmw4uUDfki1YFXY2iEQQa4zHy9TYxFdgLS8bVdBNZs7hn5CWvM2VNhkJnwYQnuUJsrpz6",
  "key40": "J6ze6jD2QkSmBXRvBH3Gn7NcGWsAZeVSD8FSh5xT5jAzF8KnvUJe7yrFgE1ZSYB4ec8eVqXjC9pqH2zimvs7c9b",
  "key41": "3m9SwFoD3U1kcYHwXvQ8x4Kvk7ga33QFF3XFXXbnVnUTfcdohMgx9r7vZpkX5Vh5AmgQwF67wqf89r4cxkXWAjgc"
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
