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
    "43TPhWGGy9tiPmNKiSP2k2BZxbHhuSP66W4ZDSbBpSDASefVRXFBrDAkKS1XeFddpekVuHqeXhmhotqLKvsY4W8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YuHk2HCdcNRQCLXzN3N41DomktpFRtS6E9is1geTFnC1RnBoPeJ9EzgMurV3XY6WjdPixQC54JtWwRxvS4LCyve",
  "key1": "5e92JB2KJuD2gDN8fG9fweGu4N1hSVVaMSAo8V6xo2Ck6wLzQ2oLRt3ZibgwhyzKHqtKGBrujCiPGpKEReNpjuEh",
  "key2": "5srcza4rkDN8GQkUH63SGn6shTwDmgf4yh8r5wnAFQjBoZBXot9Mvdx7XTQQr6Mis1wwPJHadHFn7Y3G9HZdZH1m",
  "key3": "2H7KoRvzwTYyNjUeqyzhMimeGzLyw77B3Vd2nbngGUnnDVpq9KWJd5iuwpgo1zEHf9hhFJZdG6k6vKqmnqyjjc7z",
  "key4": "2YR9xccNvD38y8o24p6P858GLTu8yn9Njo9QkJJnPXRGGEh4C3SKgQ6JqbScZ1pFUYCcEGK1QajrNhvf2FsiAEqH",
  "key5": "5oWe7F6tkUQ6Eie14icm7vTFet3ECEoiuZKX1LuH6xd1rWYf4PiNm1Wv1JYFpeqSAjH6YWCR5vrhuZTmfdGMguW7",
  "key6": "3fc938wotbf7cu4hejZsJ9gDxs1BpG3yiWHhAvWMMCLMENDMXJFgeCuwTUBoETqANrorJEx7e1rVXdgH3paH3FMK",
  "key7": "3CpwAqpENsjrSQoKMxj2PbHYzGkk62dYxohAVot5JgKVVX9XnKMgQoocwT21PhKoPHKTYbD72ja9VGZUo3WN9ykE",
  "key8": "2rewm8KWeJcnJjFGegncVm5L4hLCoEF7VJQ2gvivP7Ua1MUg5hgpvwMLpgoEgu2XxpPvfKNnsCNPwpWtUPGDt6Sp",
  "key9": "2xHTcd9CrcrBCUmL185V8jyjnX9Bvj9RkPjQH5QuxADmLtXx76Q8DLDdw88UweyxrX5W4TYw7nCGErNxFHjsp4xS",
  "key10": "h4bPY5wSs9kC6mNuUPoLXAwM1HEkxRiabVwHY8tkmamCSYxyQSGUSnhbMGM8yVeBEX1EVhQvqeVz4nZ7RVXJdDE",
  "key11": "2tDczxtzXgAfJ4QxuEmnfpPmHe81vdJfeXskDbX84WoMb3fFyCv59jadZ8MutMsxmPLh9VDY1L8NYdxqFNuKNBi9",
  "key12": "2oSRmWZZgX3mmanUxqPfkxWpqnirSd3pmVUXZbZxE68pcgDkAko474SEdEXv6xFL3698PiDCh1Dz8EZijY4MTeTk",
  "key13": "3DHk9jKHsig5CWKUbMcK9bFB5XrioLmcWmaHNkFtA8yW2WsMZAqSLWRR8evYHZJJafMdWU1rbQvpZqZmUceyyHte",
  "key14": "29RJ5ftcHxGSP6xWVyusJNZzZA9eCXkrGdykBiCkdvJ4B4nbFqbvBVtHjm7BdqJkZfchCoMFmv1dMcyk4exkcfmz",
  "key15": "63U8Cym6c5JXuRtGWJd1hnKU3nJWnU7BZWjGkNe8H7m5EBEHDjG31f7EuAod6jdgiBaYbJVjpcueQvcGGFKLLsKV",
  "key16": "646AyDrcZrYNYUXaBKA9NvY9tXxTCVvG5Yi8WpPFG1qVQi4gKZGvkJbKPJ798JkmZHxSSdFRRESWZSQZ2DarogrJ",
  "key17": "3agGLaSkzhNVVwt6gAR3G2KHL4asFHbMym4oDmg6YVoa6Gpsa8MmW3c4AvEWx7kuMPSwSwonK7XLDHQ9nhb2Cy2w",
  "key18": "3Qu4K4WP7qJw4gnG5JwjR2jwSKrDa6QGTeD1y4WoPzUJFd7Hsy8uhSN6JZbGPv2YoNNLRRvL2BvEjfB6YPzrxy5W",
  "key19": "4oU5cxkgm9DJ9FMreCHcMqzmcdXZ1qrSSTdiAPoF1wS2S2FFUT5rjavdL1btPuBsghgfjyLHMsM2K2YxmLAEhZy",
  "key20": "4imcao4wrinQiXwWgtgZRgtdGEaEdwktcoYyfjfbFzw916b7gAovqJzPEPXwSFk7oNFFbwQm1hFUTy4HmDcwp2R6",
  "key21": "34VCRCXvsvM3bg4vq3poQqYb9rSqZyni8GAVvzsLadRnvHrL3wXVZVzucESxidR2AsDTsV6UxRCptV2X8gjQNVzn",
  "key22": "5F29fs81iSFS49VrAbwN84TLE3qqQFZvtYVbKifT39NStc5DaKTotJvSt5WeTvqGCxsWUyjJajhvrfoxsCsoXDxy",
  "key23": "57pboaMQLo62ATNiKXVTxsnQFoR1hMqVBoUKqbvYkR4hB8kTdvnkfyk8S6yoUgVXXQqJ2ZdrqPR4VtHezW78HgXK",
  "key24": "4d5ArHevK4bYPtF1LxzSBZg8k5XyYVaa1uHsJDfUJCJTsHQn5gtHjmdEepUNZPg655eaPWh6GcFFAQb3Q8U9kPhx",
  "key25": "5Z7E9r8wsP6WJLHBAKsxeErUQeoJbfBomxFXVAo8S2htLhcy3Azm1zKoHqjBUgEBMKb5o4NVbdyPAzsbif1vdQH8",
  "key26": "7h4nVa6ds2uEB9YL9K3urWFE592oXJNDS8hDZUSLUYyZFSewwKgt22zoiszsGeW5k2dBqtzcneoZ5Z2rKEiqqpB",
  "key27": "2UqD5RQ1MduVos4MJ7B7B9tvEKa2tXFQH5ab65vbxwJ9yw4Ra293oD1Guf9VDaFJM4cyiHxWPasohNebgSUF6wyD",
  "key28": "52rBZWQLLfn7FYsSUfKPhprxHGHGgt7zZmMPXHqAho9LHUAKmtSQ91SQae2es3XFi2Jx4PQqTWbna3HT6XKTxD6d",
  "key29": "52hRckrED6qSKHTecWQ2GbbGwvmPujVn4H5pZ6Xa6ExDTJWMn9zYBTBnTydtQsUxstRuZC3BTmUsoFhuMw4cTwxD",
  "key30": "5DamVfWzkz62wUd4bqxCZbegwJWi3vSNBGfJZujc3wiwyGT4WDnmj5X4zYrQ1Wctn4BRsGpCnvUs33GhkfdCnkCG",
  "key31": "PWHNdZomFaN27PedYScftQybdynsaXGVSyE9hRd61SYuY8PqgUy82DBgcQGVYBFWHTUrbmEJ1uqp39nA3dHuwGa",
  "key32": "4kdSrzHgdLaUwQmYVBnkL9V9KDzApDbRhGbYBa3ZwB8xgXviAERGyP6QXy9kwqGbEkVptEyXieKL6GMKKRWTXvAe",
  "key33": "ks1jMQxZPLCrqCV4quXEBYAXjk8gLVXppwYgi7PCWXHPDGC4vNkBy8GFvgAgoXVFPik2D3AvahmiecinbyqT1nn",
  "key34": "5c1vHaD8R5JYcdiZyG1y9rbQuJEn8NWw5PPrtoazANw8EtMwcedaQKxTPTM12RgMKnRZA1h4w9XQnTQuKynzoHU3",
  "key35": "2w5W4sgtf6JYiPK44MNTWGD6R7ZqYbnUR3WEVKTMxZcJW3K1fSVbP8LxrvQBH35vgVz4ugChZUF7R6qp7zzsKaTB",
  "key36": "3ipe1TUbENEWMaStzZyKtCyTgRLxfgNebbn5xoVWf6inTEJt21v4ZhbTDdcYVoHkT5SNkhwTUL85e2UZddcJ44hh",
  "key37": "hvHf7rriFYHTfguobRW4G1qB9f2fgNcBm8rJrEsNwu19RrYA1Kk2TKDeM3eHc45YtHWpSreJaaYt4bbjxSaQAXP",
  "key38": "2oirBNfme8oTyRuLVt9sHYMQwVGpoYx8Q1FP4S8zxTKqSAidS9HjyMXuJfsBxhjPbXgtap5AqSdbiX2YCQcwqLVA",
  "key39": "4ZwVKMoqkwrHZawNjUA2Vt6XXdkYNuRfJ1pVCsK9btkqNqPXgCa3C2j1UCt2PYUVsAHsDok3Xb217z53LpMsSDyB"
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
