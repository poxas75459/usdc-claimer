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
    "4Lcg226NhvUqmZufVHEMw6f32Q5jMmyNAZ54eEA3w8vVWqxQ5KtUNU7ggDR68CQxnyzhETewQv3QnRciZB3QLKRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LpEAq6YC1pe28NQSoSB5mWXzsgfHHFWmyWWf7ViHJ1GCUGEpRj79tBBTwew2qQbWjnhVHxmHGf7P3PCCN1AMpXe",
  "key1": "4a3RdZXdoWXr5dh4G7XB3QzDvRE5AtDDQUGy3jSXvqHyPWkHP9r6rJ1jw38qfGKtPiSqB3Eziw4TacnDE9mrtKTf",
  "key2": "AicdYcuh2hcFuKsuVQVkEWomMfY8bRbWoSg5NNo9a1deHfcmQ7bDfATuFkeVSkte462VRw56UKmQ61zQ56xLqeC",
  "key3": "5zCqhpy6XtzW76MteErtgySTidn8w4Jti4wdE7ND7HoyS32wjyv4NGd8Uq12vTRN5y9Abb2dt9aQkLF28SMc73bA",
  "key4": "3k8cyjeiES5FarmiRtoZ1RquK5MjQu6MF76wUXkDoK6iBALzKi2qtDDjQnYzheRrL87qAkWAPsKXf8XKADDu9T8d",
  "key5": "586AgQ1yG7qbr66W2BcjtYezbigP8NSJSVHwwSpsE5486esPuFZuhDPdYBsmCjSVQU7Z2kTzgMjv17DhMMT4XbBc",
  "key6": "y2nWouqWfiQc3tuCNdsc2wsLkS1EbHGVWy1zevie24yt87PthD81NohXK2sHXRru9mSeV8cPAzB1Yh2AaSmhqkK",
  "key7": "2US8bgtf99BdD2Ac7arpdCqmRvVgTnTyPxtc3tyMgupN2BjhY2SVWqhhoG6Nfo4fEhESyZUUmX5vs3fEKvpHjXhh",
  "key8": "3oESmc4VMxucnJaDoH9xviqBDmxge1v2rZG1xEDu3NCGZhDeRs37gL8VhpqhCA7bZv8xZ2zhRH5eadHAEkhMvH3P",
  "key9": "2HHkm83byzNScdS2YPDQBW1EquVe5A6onEU4FuovzTbGAcNTpT4XzRNUGBC28UPR74kpXEyE6KJWxiuqQo5jrBpu",
  "key10": "4XC3YSp3Ku1zVYXjTQLePcfKwwLvNsV1pst71rjoaJeqY2m46rjR7GavrvGpYCuckoj787WSfJeAib9xSRnTSzvB",
  "key11": "31YVSPrLZumcJELMNtRxFmEUdZixZZ4NDhyNxa7A7FoQJMKVmrgbirazoi9G5Knd3RCFFCDUpWupuk27B9wGTiZn",
  "key12": "zAa1quCj5KND3vyDWwMJZa4aVPrKaTEw2VpJXtHNwAcWqFKCrPipqMBfhzdrQZN2G62nM2J61sjFsFsnd9GttVR",
  "key13": "4AnMxyRB236qKwVme8aHuUppRqerGAhCDCqAjgJGji7MeRBjMEnHJdrkRymWWiws9WjK3Sbj95KZzjSGKpWm3tvK",
  "key14": "4QomrszjBsAwRM1bv2UBdNs3PSSLx5sa7rTjmhmvaPRWcToieLoKB8j9j6P2yyQR5qVSnv9eNxufjVW1mtye9WEJ",
  "key15": "2Gw9EBthcBZMhs8caRdU6scTr7S3pQGLc8QjazBz5dCQZXbnMPzkYSyrjKsntxS5YZvLpego7KT2frHarpx2yfpy",
  "key16": "4uGpvvbzuoxdwZN6YpbpSdQwKq63EaNExheSVBns3vR2bbXzaYuPfPSfz7yqzPxrHtGHAgHpm9Ehikv6ZrqU7hS9",
  "key17": "3jiJeUoUQzoSZaUnXu9db2K7ejtQnSnTSw2nXkcTmt9AVKDgQCbyvDy1BPudj7drg7rWr4rSzGEyNZvhSZ7Qo47c",
  "key18": "42CJf1bHUpZcxcnQZgBXCc6fw9iWapnkdm2FJBDZinzJUixPHmCt29szsvTTcg7X7fnkQb2ABFpCzuLRHHghHGKr",
  "key19": "2xZ6hD6wQEgstnwdzzQbqa1uHZdpE3hFxEWsmXDPhiBsGJ9XzzBcSo3G9AEdxQypAXBypvQnnxsy9VMTh2BAFz1D",
  "key20": "5PxbT6ePpkNFTgibj23M4bmkaivSD4Rnao5w88iM4XwpMyt3WpDNVdVmARKKdJ5HQnZ2trHGanBer6bhimWKCJaY",
  "key21": "3x8f2F7hd7syEXw85NXWhkMgnwKgAwCPTaYE76aC6sABKNBNjy47d2jsQDJUpAUYM3ktY1BdejGAcd1LTnFexrpN",
  "key22": "YcypETr5gUtkS5QW59RyNu3Hm7wGqXspUVMZE4Q7uhTqiPb1FCUryPuT3A8KqjSPXn986W9mkPC3jgc6wQbDw7v",
  "key23": "3h6DdajsY7cM87NTgVg2dXwV185aQ8rxXNsRU5Bi4eG3iZnQLdFCwrsTnudWxuS9nnkruzxJsjuMatDCneWVJ1Z9",
  "key24": "3RUds9KwG9CE2RT2SEsBXRWehGoxqqRyHgGPD37jKYhXLoXtTz2QWDc9pZq9ETM3ZLMwWpc44F9SuomwUW6LAVa7",
  "key25": "V3Rw3wwTpwuzGvWza9LTSbc7KTYXpd31XShg8G18YCrpAvCvwvTZd1xe3TX6Qmr3V5ebdwXFY4rDPwjkPPv2jCE",
  "key26": "WLFS8VxYyjNcLuFV79MaU24vhwDtEfVUAgqBf5jcWxCDhycgLxs3eX2KtuQQ3KP6LTNGuF3L9M2xMeoNRBq5SXg",
  "key27": "2a5DeQfRpEJjThCtoRFqMTeCPTzJJyzwgYhK1DUKrBB317MHeh4ftaSxr2TfpBZrYtb5PByZdckmCgomTuAC6GMU",
  "key28": "4hLVXR7vzNFg4Z7d5iRHzEhfMBMoR38oKFGV5Xx98coPLiSqEwbVGkEP9qAY1bhbVqaririUJyN7W5aJnqsKeJQL",
  "key29": "vw98rPfVAZNGWziuy4gJgJcCmDbLDN4QPv4pNg6wVxg6oddLQMNoX8UZeMebpMuLCsgJk4dSL6oyacgLyyUuLuF",
  "key30": "44NeKasx36E5ByUGc6SQ2RoFyDqsuioWERQqmqmJYgNf3rTHcCJWonPLbN4k2XNe29mS65QAudGz2X56GnyUKJFv",
  "key31": "vKQioH4tBhxXn4GJ5wYQeaVhJa31t4W5KJPMXtsDbKv5AVASe52JiZe1xy4Yz4aa41AMw4FfnSpmChtXhRVyH5A",
  "key32": "2qJ2gQ4z9kWRg13QtJo1XtXiicHzF2ygjAH5q28ApQdNCoZDuxjaXEMkT7o7sLCoSPUfE4qETNt8PVKACTyrGqq",
  "key33": "6wKwzUvPQSDc36pn2WDw8zunPs7nGizyWrZbPB5Pxc7AQTFxP4XTGKB6yhJwZdfKBAbBJoRt51eYvjomCqmVq2t",
  "key34": "dCZHBr1ixm93hkoUexULSbzTdwBfcFgf7T4jMBToENt8SxMLZ68UgQDLb5tHYeXRRk2DHjz7w6aC35DYLZ94RoR",
  "key35": "5e9w987MXmz5kHvcq1LkBB6gcMft6nCZ2kt4zKjZAAp2HDJpfXKYxgTHCNo3SVm9vMgxswmjU95eumiK7c4FpbYk",
  "key36": "wk3gf87BHochL8A87XzD7Z4X7CR7yvSDZ9AbGyNY9zHyomugEg9kEh5zrHKAVwzU8yze73bXZu4Djb4XtVyg8gG",
  "key37": "47Ja9ANkDpEdPiccgq7n18EAeyawfsYXu9osJzJzeXLwXeCmfTSMkU5xU3jLxqHPKyQAJhikgcqcf7ASEoZaice7",
  "key38": "3H55AvHYj5rSXmqseQiuua9FEdNkwrWN7z2d6CQ2j83nngtE2UmfFp5Ao3JXKhR7eoFkVAnTmbd3wVmSe4iEDorP",
  "key39": "V1yZ1cZJCTRvVZCLCmwYhi3j66mUHU4tuDHLLJ8dYGpy4E3eyKyA8174vXoAmjJGxZNuGqDL8fMYaTSV4t3hjaN",
  "key40": "zbkVdAuwYdCjbTDezwHDRPD9U1WKBrczZUdoWiMXUenpJfbYgQgqE6xVMvXWK7TUqQc95DNvEb14XhPuxJTJU5v",
  "key41": "31A2FGEeKCLNW4x2C1jqt8ZvYz3MHAs9MKKX4PbcWCS497yAGahJiQmQZE5qmE1iQrK4QPcVpDfctdTmnLtK1Hqt"
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
