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
    "63oepdM97nCYDLpqWvj9hc2CkgyPJb6RpAkFCnLP6nwcYUL7xym8j3ijbi4wUnRGnP5A72W2ct8dv2fvCZ6szRt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34r6WfNAN17qFatgtejXo7khs7qpuKqH1R2NpEPrnYvSdRxdzbmuS28rnX86fWxgtzYx2WGX1b5geBRQsoimvyqp",
  "key1": "5tNHrKgsKvaUJLDmUpt1B1PiU6DoF6k5PmNYRBrNYDH4Kjh6y3Sq75gfKhHFf4PeGLA3kFAY6gp9nLnANv9oPVn1",
  "key2": "4e2JGpF6sANGFCqnKQKQjLtCkLzReZ56kzeVxqpGfkm5zkmYR8GFod7CJBLHN8nYSHvtH94kxwBoNLEA2AEzaE8U",
  "key3": "4gFr7Mp5JXHLJmrUFE7Sb2uB4S7goSLTUJpo6PGRMhptq6n82qjfm3gtQ3PfnLKYv8RMamGNPjjUeyzPHfpeuc5S",
  "key4": "rWzfPye7qL5v1J2YaQK3fMZgbLdJHfE1uNA1y4RUT9zbqwEEgoitEtDyTc2N5K2KEGywzkxtptqJbY1r4fqkbR4",
  "key5": "3LJaj4Bvkk4enh2zh51kUQbgEMsciksXrZzoMC1oRrnWYeeBuwfVhioHzZVf8CPAsacAdMQBKTYU5FxN4mDSXV6j",
  "key6": "5GKzGH9MjiXTVunCQ2pUsR7M3kdX6p1diouH4zQ8ZSZ8611FjZ6hxvvqwMerpAaZRpFHHdHhNsmpL6XJAYaS1KAE",
  "key7": "58oz19sS3uWDUB6vEYzyK2wdS7ncT6bDDTqz1TNSXq8NHosvTbHExEB7JwyLZ18vnFcaCGfXWWHGUhKANoFqhnFg",
  "key8": "622nCyRwxJ9K6tcMrzXR54SkaQqLfHGrTA7GRavrFKbfw9raiTJV1qhUtCL6aeor3MwYpdWqy8CFQa1MgDvnov88",
  "key9": "gwktMtCqhLoMahK34meiJujDphK9s6hQt3Nn1sVD5aCF3U2T68j6Ybu49D7gNnzJFmaH95gpXHsRBzGQiZGUnYb",
  "key10": "4y634vAiFQUQZLYsUVsSDYBkgH67uKXKKwtJoufLNBEu8RTojiDM8sGsnMFdXKHw3eMdUUq9JVJWrbb8nVkoDvri",
  "key11": "372xHq2UNdPidNMhhfU1sL3xYBcXaZeuzuot4bC9WM6MHSnbh6fbca42FkbEUWyZSu92jY3QrY9pmm1uqqLXDjdS",
  "key12": "2DzMd8JbfPEd1G3Jab8siyZE432geYN5eJZyQENxcJGbfjeThFZrR3BNbrBijjS1ybeJZh2ydHPLbHLuz7e8hf8D",
  "key13": "5HX7gvRsrd9Pj5uN6NXBBLkxeVqrjx5QDb9u7LiVt2WXXNjQF4zQorWHTWejML3eSxr1DQyGAS2XpovfsxCDMPQ4",
  "key14": "5gJ9dMFzPWqPvTM7Z4NiCmqzHRzbeBKJqbPMpjj9pBaWAA1CJ9GtzXBFMvDhjmoRZD1jUN1zAaZnJTPV79EVzyze",
  "key15": "5e9cM8bTjFMooN69AU7rYfKkVHCrYzZJBcRYGgb1EHFNNSgFw1Kk2HXLVNPxKgPC7rcjjjj8CuknZpcbjXfiFdqs",
  "key16": "66nKXWb2bNBMTXHPK6PvccVS4VkmNsqLcb3pmB9rVdnzde7zLMy3KWqw78dtUBhijFTDaQ86Pg3Zebxayzqm4CZJ",
  "key17": "uuZQtUpMtTXDttVtEhEQeDnXsXweqPvTwU4f3ES7jR5Jr3ARfUFJyoonJEZDsrYuveiFR1Q5kGxDCynfyAFPdeX",
  "key18": "2swEkFM1hvCHUucPpNGSmXnLssSt4Gh5t4TzTRuPc3HCkrHm4BH1pPDGQZWBLKMF1wWXmaty4UPZTJBPNvZScU4f",
  "key19": "4omZTsrfe9DeUAPfVEMD7ZZhXrRBu6tYUWcayG7No6Xqd3vuuDtRYACdGVCNScSQoMDJyfS2DX8StUkw5BPo74NV",
  "key20": "gtGe15hcCV2FSs8YYAoWJzA3CH1YxuUAi9qCV83KvVm6P1fko2as78ZHkHApeVzSVcSg6fwdA9xnMGgJocZMzfe",
  "key21": "5ftMhC9FfqTi1hsYR9SwhRDxpJNe8mKLXCXc6FDdrYnZPP77zFxfQt9yDsQ7erFyquFdvhqWGnFrBXBqzV38jqYs",
  "key22": "3MYSECitkMTtsPkSpCUHaQNjhLBPqutFpaeEFkFDdwLh4dhHe49sTTrPfAF7GiYEofa1VyU9MELeDpxGzkiXt4LT",
  "key23": "58F1ZN828kQXi3vCXBnFv7S18YrhQYLYNFwx5RzTvtjuZsgviQdf7aV43wq3jgXQuRs9bYaLi9EbhK3tuH33y89Z",
  "key24": "2bRrNymgT2iHWMsayTWJexfRbP9a8eKLSDCgcLS8R5zWRPkZmJwfcAAAMf9yLbH31i9PZ5UDCGqeyjLhUYYkKcv2",
  "key25": "3tYh4xA2JxnZQsEFKARKPQVbVGFmqx5Ewdo6MuFiT31aCTbYiXtFgRCdEdfnbnHq2frEy3moA9HqNisqS7WMUgoE",
  "key26": "RcJyUw3U3NMPu2FYRCtzUgq339ZpfMPa7tvBfw22oTxd58jCrqPLgwgP2p9pEnfEHpP4rXanQkjUHXfBk9avgvs",
  "key27": "3BQfQq5cYEkbsW3FnsGE2Cohe53imMUkpeGXrcXDQGHLMRe2Dn5YHmYQJRsk2yQySawToyhR2adDbLXodXeXpAub",
  "key28": "5thoFpHQYpXpaPRXUPY1zEdtGDCmMyaVVHiWs2QZg4o8yRLvjMwbxy6obrhDSijyxhSRUoMpfdPkeNcAhXMp2aGw",
  "key29": "3gXTQ2KTtirByUc5UipcvBSfBXNQ73jD52YkHt1PfiCpVRdee7BwZVizMNHefR1vCWhbxBF7v1FgWPu7n7eZKwhn",
  "key30": "3GeAXszp6Jnvw9xkiW3KniUY99NhT4PFTE8cnesh1A6ntHBMmmmEtfLT2etoZgZFig8gT3Y9ZrDSUc7ReTpKWXNF",
  "key31": "p3iEWKZ3gAKBDsCywZrJZoQHKhjvZZjuqWN4phZC73STNmeZAjgEBwQwDfBm2j1NheG1QMsRySHdzqCCnmHUTjR",
  "key32": "5dhb62jWEWZA2A2URXQWWVWjuZw2jpa8fWzoXuYvHh9xV5RhERsd3yF54etX6M3ceT8jVfCaVu66YVUvgm4qe7Py",
  "key33": "3s8PkmNnGSR2gsMXdmP4S2RDvEENUiXJAv2e44AMh8e6QTGXNWwvXw55uSfpwQ7agqFUXpds4mrjkpojHt7EBcVT",
  "key34": "3tDfP3cc4mBqf6LagFe7G83qLpYmF2WJuWh2VkL6RiNXFXhHCRswxz68qxrgBn2ZGy8SqN2AqjRGis61CcQZzSGF",
  "key35": "59m2WwfC7df9trmow3pcYyBi2aUrEeAdK29XCNgn6ZosFsAM3Z2xfR7iKrngL7494Qkg2r3s192Epd72w3YNP5AA",
  "key36": "59dqohBDirQfmXNZw1VTQzdaPr8eJhefZMwKysxeRNivXSnqHj6xm7yKiNQfS7W6UzXE1gGpqB7CE4HnP7dEyAjV",
  "key37": "4SRGUvRTyTAz4VepKV4DiDdLQwBThjWRy5deEEn53KuT6bfEZ9vsaGP4rYHgYz6Tdqh3CdszoXLxpYmcuCujnvYE",
  "key38": "4mEhJSzbQRfAeaTGW5scVmD3YHniuuTaB5qgsQDxDJjsKyN66sE2Suo3ZbeZGaNiQPzTrGrRNGS883UyqAvrNs5L",
  "key39": "4eANXUrKZQkYd6pyKpkX5vxFvFS5XBoMsoqDhSMFSpRNQF6Ci51UcFJEvyExWz1hZkZ1Bnd6zFyX4MkbNxLHtZUT",
  "key40": "EF8kt4BFuwEtf6k4QVZEmqVSDw2EHCUBBT3z3mh9qdvWQ7GxLQwqH56L3iVXCdrEy78ymQwVdk3Kp9dqx8gcg4N",
  "key41": "2JQwqn4AWs4KBQWNiRKCwhQBNQvWXjhpZJgEBBfDYRoo8s2KehTA8Zv6EHLnW9UpngZVJCp1ERCSPBhXydqGKvnM",
  "key42": "xX6rTwGX9AhSPWqWZPD14ZjXDwUkHFYM1BxhcJ7VpioEL6ZjozyGYTkVFyoWHUSxAN4bp1ib74sYPxHbNDdeVtW",
  "key43": "3p37ksLgvekUygzCibBtz8bL6FjDcqaqLDtLHYoZ1cdxXYS1x5tvMHaatmYZMjRJDnkgNvEkoWQoLHCbSgQGiojY",
  "key44": "41yEuFwmHuMVPzyXiQHmAJ56B5bwMXALYFCaw2FRhcUNLeCKpM4vtyp3wLrd99j8KPjWTc5Hx9ohtwfB1nGuppkP",
  "key45": "5ZK1HXZSj5MmVqky8ktGpv6PsZ8GU2wdkNwLc5btM7WmSogxWFYaVoYrM2yL98xhT5u1fNz2t9q36jdYH5tZtoaW",
  "key46": "5UvuVBwGbNHQFg7HJH33PgSJjC8i6PeFtGmxcyxuoSR2pB5ChphBmdiihu4DLNuyg9SGVo7w3JSHJxH1JLSR5w3r",
  "key47": "64XvosGDCrhxY17XdGRBfb6KYwTY4GemtBNJq4CqG8X9KP7qAMESZi6RhjuLSEh5FmmxM9sjNEFDWvAncEEiwqjA",
  "key48": "3aQ7c3iDt3p8fwdAi4x9H2hHXdfHEoeejkBPjHgw81f1dZEkrqoSJq3cx9DDFAjMwdnpn8wiDsswCRPBch1fu1VF",
  "key49": "RJZnw42wvzG3DeYpNKMrfX3yqeNC1qb5xfcCFsx7SQ6E6Y2NuJqhMshW3bU5ojWVnzFx4QtGi5aJYe4LdAk2qPw"
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
