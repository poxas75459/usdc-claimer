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
    "65EpQfcBcqyDMr6J6caYGChFgPxYQh179WU8mygSQCDDxMY8rXJsuxeJnuPweJNVL7EqJJFjuGt3zEDQ7d1KG9bM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N5MKdzCJwYfWH8utrMwQvwR4DPUm1SjpZKCuT4X7UHsHZ5XAUQHUaLskTkTAEgdfFLdSePr8Be1qVCe4VHaStHB",
  "key1": "5iAyWGKpxME6sB2mhtXNBk6rB4mpG3XeWdXvdYwk9uK1mmS5tEgqDbVf9upRSZhPyXAgHrK842bmUqcs73VVY8gX",
  "key2": "5AhFqiCbULoDjHTc3G4UdUXpiMBXsSoGjeeFEC5BZe72zecU4mhq3sEmsxGuwiUt2RetWiSxHDt74fShDDLH3xD3",
  "key3": "4KtMEVGyLBbKETBmakEgBAtNiSYHE8thJ7sWCs8pjeTHUdf8N9dWgQ8RQhKaHBZbeDoYRXtJ8Z68dZ2B3HrGjqNU",
  "key4": "471s2qbCWH2jcHmLX27DsWtFgrF4uRtCAcCrPYmsiwE8mfrQsCwpyCgdq3T1rvB9vFrPvk9jD2cVn4K436uc6D3D",
  "key5": "3EkceSdLcdpMMGbSA1t48qJRGx4DSpeoKiAgHhfvzf2XQ1JBW9xo4CNCupKxqrmksuXcBHb7mXcyqhF9Qkv9puJz",
  "key6": "4JCrZ8qvUPsJgckkZKaAtTKZkrS6zCdkD2X145MdZya58cBZaiUg2RgFbmVJhiZfDLwA6W5g3jtDbtLibzxkaRoN",
  "key7": "2JUPQwdEcCuwREThZp1pe3JVjRPeuitLgeDECmJkX7F1qQ3XbTpZM5NjrYQDh65d2f9FtwwHFYmABgKojhppNvFc",
  "key8": "b6wTsghjNrumYpk54pGvmZSuPFecJpGWmAQaGGGnJ9EET5rM5UBesR15VwwwwWE6av88Ubc3M2bpztQNHv8v5wC",
  "key9": "2HMqBc7y8rZaGJNyveHMBFNqR3tA5wUPUVhgfiVov9ogbPBEzAEa6mSpmafPYB8F9eeTxK1WWsRaSft4g59BGs8h",
  "key10": "Jh8R9N9dYQuDW7Dq34ijQoj47UCcG2dnzGw26QdsTa2CGenZAZCgQ5aGftzyLNW6LrSj98wReznWvBkM5h5uty8",
  "key11": "28T58EGhuySQeTmQUKEAWfc73VPaCFYXmnzb83Vb9iwngkhdWQ1mPaFYcYRPKtNSCMckJG1JYAt9MVMRS8FKRT12",
  "key12": "5nHw2rFQFfpHE6ENR3hmWrzjdGMa8ZqQh4v9E942CQe63WZoufxsBEJPmQjLTZoV1NmhAVh6dfsadrXXHAd84t5e",
  "key13": "4Mn2yNs6ujegu9Cy1U6A4yJ3VRKKiShfZJCLH21YNr9M3g9prGQJq73bgN2BTN6PrKq31iC68pnZTXt8khZ8wbeL",
  "key14": "4veknXMbZWXm2GvgDDGyGPCgKaTterdVuuxvW2b6mtZTDkAsojMzLnfZ5SLnc5hbbzq9SiqWFJA4A9BW9hCxjrpS",
  "key15": "oikRuzbcoL8c63dbxmQzwkSB3fHZMQj3dDRxQwRinNS3dmpfddvqATxLMgE14i3VKCwdouJW78M3iqh3qotMJr8",
  "key16": "2gNg4cnLJV2HtyAE39nPhKc6jDvebiDgNzMSnxcofjzAT8TovJWzYeL2nc5exdj496cgeEXXGJ2gKa4JHdGs5itj",
  "key17": "MJGn6bp6xRuFz9QqGaTwvW49GJsJiSpqrLqZ4DN2u2uyU1C1yaRVH9vF7kHAxooZWunbAp4xSMcNpLSXXxsJz6M",
  "key18": "364Aoy1utec1DwhnyVwptXYqkvrLv1VBo1w5bGDF24YD8v2cwcR5udRQL9FuEfPzyfVo4kokSvhXCXEKGUytG3jd",
  "key19": "4sGXoXnYxGxU2vypa69jgufbTD26M6y2axEdS5qXCHCTAPkeZY5uaaJVfPEDTvzKVYBbUKrwY2GLrcLBQbyK9S7M",
  "key20": "4yUUhBTX2WKhBiTyLAcC8V2Bp7xdH6REz51otW24ThmqTaDSix5DiDpkvT1EZmJVwn3YASZczkDFh1pVSoHycLSW",
  "key21": "2MyYk6T9gtA9Ai78fUpR2MmA6f8eZMvc3muHttPA5JpJiNyo6rxdzfU37ZXLCriAvoDWW3ytDJYnmG4wDZQC4uCF",
  "key22": "4GHMvZrPCsjjQx9hGyK886TzfrWdsayzNNqGcCf4Y2YnSLrMZxvGmBFpAFXFKwwzdHXhiZjfjbY7LRs8wuTf3QA3",
  "key23": "627ZuXYpnPsjciKeyutMbka9kb3sp6Ey7BStoQxrgzUwN86U3Q7Pu4oAvGgKCXnxycj6bGfHPrJmPRJs6XPGaNgF",
  "key24": "URSxRY7M4YiAEqgowsGqSDArj3AsGrHr1VBHeTXtLtnMTgVBFrdN3sFw6N2B2EKaxwAVFMXGyRoZ4oa5sGig79v",
  "key25": "BtK1s5eCdewpFqWMLz2PX63mCWiAms2657v8hSsQxiee66BKR9CUfnuQmGeUPNp6FvUkB41DMmY5nLTooqjdXqa",
  "key26": "3VNwDBvKknjxJgPaeAGDEzErRJhwSMw9wBFEfZtgJDqoKrDvqHN6vXVsbooH6rsEDu3ivhfAuuoj655R7YXKKmPL",
  "key27": "3hNbnAAHCCz1qAiNQfckhTg56uP5widKALTnXL38cApSSXZA6jxp3ZsmFqKT9LQZxaUYRGdvSdMNteb1ee8SyZyU",
  "key28": "5nuejUwyduDA1R5K3REBfC5F7oVQzeMdazy463TdxRfqzE9266Sm2ApgfLx4sJzVN3CR4LrnPt9RmKd33iSED6JP",
  "key29": "2ygPD8UniUdU7KSkf42kjndo4bFt8RKzbeEaLu476BCdMXVQ9WNaPsAktmDVyeNq8aYUWe8WG15ALNKQhmJZxkFu",
  "key30": "3aE9C5PJfAHyZ1CdKcKtHXh7gaYgbG35oUwWWz4nULs9Yptk75mGs38zzpfPagsjVMaUaAeZvKine95Cwh8rBLhV",
  "key31": "387c5fKuWXHmUB8h8TzjcLPuLHjnv5tufbuAP6YJP5GHgG6E1ayCXUaECTr8NWnwWJdRuoHTdZEsVEmcAt8qmYgL",
  "key32": "5A5bfvf3yK8N4dqZRTgY3xjHEK2oabYvYRE72DHGDfS7Q6uFouYx6ADzA6YPhboeJq84XjWQfRG8YcvZzRc6WDs6",
  "key33": "2x81FJTzv8h6DJeGuhJVuSzxwoY1CkxqxXDe9XzKfZ6wSiaEpGcpauEAbXziaFpE3tT8tVSYUtgbMqYcepibMYix",
  "key34": "5aMtP1EL2YoVEMk3rr5gXzKs2Ejy1493WnFcCFDRfBTYRKKfUTXLMXGg3PMVF4RgxbAPgxXUUgwYEauaoBCAwhw7",
  "key35": "3janeN1h4zToMVz1SheYDYw96CFGRSEDpcnJNNeb7SXJijoPU2Z2R5oRywcBr6Sqpi3eKT1ZCq59h3Gu5i4io6wy",
  "key36": "2WXsBR8WZwFnZWcaPAXxHUDwvSkeudRqZ562iQYCgzqjXyUHwyg6pZxjMGbeyW2KZa15B9KcRJSEBYbysoWtgLTB",
  "key37": "kPp655BPDvv9mJB3rGtA2N6j9LMQzYEBhtLPXYBbHBE8jXc6wJb3uQv3TkumEzRpwB7b2xfrU7R2Cgim8hV93dj",
  "key38": "1MnfieqCgq5mbpcB6T3xgiHYxKm3hJ5DnvTjbqjPobMvKDWFTTsu54GrqGdXqtWG2FU7UNU7cVbPnAP41Zqhscz",
  "key39": "afBmuEFevvx7JbN3tnndd1HN9Q9Ss9yZUsMYWwtKy2JJT73Y1WdkYLPQRpzKDr2PTDRQAZ7W5pRabVcbu8uuRzg",
  "key40": "38CdhLrNbE71Po5jNp8fNaZJRQLm5ddCtepTLpLxrpxLjX6ksVxtFGJMJiLDYXdWJ9BXxuSCUQxbCRXWu8gQgVq8",
  "key41": "372BypDT26EuqBaCbrc4aHy2AaCj1coEL4JTQEcPnnZBQFTsSRYdNxSZu2ZtrveestAU4XeQnUQMGaZGWWMdVL36",
  "key42": "4jpZmG6gimG13aJYnysSbRFdJyGGYUYLT5D7m7mhTVd2SPgm8qG1qjqbDySPMaqy1gcLAtSMWovjAhkkWTqYPoST",
  "key43": "3cEYUPgwxTFoGrfmk584XvuA6EULqhvrKX2USYEWTYV5XdPxfVvtBSBBtL6deAVfrTzWxaa16gGfod4sqqhT7E67",
  "key44": "5pSCf7HXTRWdQ5E25osW44e2UsrvXjnuUF4dnJ33T621GnqNoWjGqXmLwyKxy6NobEGUmmzzbVLzZYpPwSckN9M6",
  "key45": "666s3ZrCHzQgvECNcCHqgRq6x6ceDMd84rmYQyaA5rwNiYoToh7MJ9DYvM4dTfuZcUD3hm8aa6CvPiAv3qHB3kSj",
  "key46": "2nL6cBtxDzorYRY2iweHZwUyWakRzptpM1xJZL3cN2qgtU1JDjpj2CYmk4gAJfaSX7pXz521iMZ8W4D12ZAzmgAb",
  "key47": "3ht7jZS4ZskqagGJsU9UuM7vPDrTfLJEy7LWDPEYAoEU6sbKYQYkohw2BCZMWQqg3p69tHyF3ZYGiVseM21TjSoS",
  "key48": "21LdCMvqmbhvYN5MTtt8jueMgcNHnQFhiWnCRaxvZWUtL6SXZiztKV5yx4KCAj5RwGk6ZbFL8vFs2GAYgs7nnt4o"
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
