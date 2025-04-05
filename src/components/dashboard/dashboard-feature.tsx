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
    "2hbXeXXM4mrgHx54R3juvgMK9CdQaki3GXEnPV5o5LrsHdCZVxxApP4DmgpuJ5tRQscpBmm4Q3XTkfpQe9eyRftT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p759i9gF21wLy9KsGXzCmwkt8gEdnHnecBThqNspitBJXSKXE62LeThCGvKM6r7pSXdJeQB5A9pGNSDTya53Lxo",
  "key1": "5Geb6upwKw6doaFbRyZ8Br5LZBNKxRAH5m5iY3XAMNoGqR7FwE7ggv9Y1CvMNBpnKwZjego7DEdiadzPbNFt4R77",
  "key2": "2fwEmCzQ5yWk1y6fk14xb3XwRnenoF8XUV9oBT7BGfE8xhBtwtdwENDy9bry6vufitLUaW8djsim8uuioDra5Qbv",
  "key3": "3XC72WuKuM5pXjbQhKoqGbHZ6VvQjvQV6i2TfaoiRaWgWVwzuCbjmWYsP6PUNn5n1dBCMzZw94awG6PGzmQkXANP",
  "key4": "52SG8hL7fzaizfiD4w8bhfjbFu3ZJbUFx4bZVLUmghnZ5bWxMtiKTdbZQv5mboVfaFNpvzkh2eXruXZ7J6jgVy3n",
  "key5": "3aa7StoBh5FGx8TD5H1JL9EeKAgqmG55PuXB4uvp9a8eofzriUrtsF7TbRguPZFXpogohTWHYRDFTuAVu5jN41zZ",
  "key6": "5RVQvdedVyzokwfhXwNkfY5Gyx9qSFsW72diA7BEmsQQ2bxcikHYqSQCc1CLeBad9VDhUu7rBPUs4BbsFAUyL8UG",
  "key7": "4fSVqoE7w6ePMBENufPfppMXomxhXjWKePNymQPnCM93t5UVRbnCFvSrPuYR16vjqvMT34DS8k54VUp5pDb668mF",
  "key8": "2Brv7piiKYJiJvf7T7EabuZcF7nKXa8jS8qfWjHrBH4JJikKFa1cfXAKqaPKgS4SZs5Cj9FP4b4BUeC1nGy7h48t",
  "key9": "2VUK2oRy3EWKzGuSCEanXgaKL4FSyZdUBKBTAiX7p1dapGhfu8MXmwX5Fyf5SMUHkPiZP2i39oaV7rifCogBSDmi",
  "key10": "4mt9GsHt4imnQov2B9HWJfvrSpQYVhrn5r5KZptqzvyT3aphQvBBYPUv9BEUqXQnajFsy7YMyzECUxtnDkHFaCJi",
  "key11": "5b6HKkSczqLX8cxqQicejcVY671oerjihDHdaVf9P5LgoEmrgUvUmyUPP7xjEa8ZTQ42suL8SAoG11PYKc9eM4Dg",
  "key12": "3TeUdUCSfRQu15UBkYcFWs6P99onBKvRP3xY3a11HVMMobF8uhUK8LiuFerGUddgNGustjdhxtpdYvWphmnhZ8jw",
  "key13": "3vdmyL2rz8kFgLW9HTQdipWcBbocbQMGgACRoPUDCx1W7b5zViikNtYuoihxWRqMzooDiiXA3bUaC2WjRMcsMD3w",
  "key14": "weRaNqcNuaZT6jPu6hs4LoJ3KkAHr3HTNRgFDExA1CCRReSS1AtBhnRMpio3PAu1TUE8LNQKL4DN8eCPc2nuU7W",
  "key15": "2D8xQDV82HTApdAwHxiC78zQgFpmWsvFdYdhBkb2aYRE51tUUc4VyCgy1xotxChAsEK2jxRGeAUZWS2xMhsVRAC6",
  "key16": "w8eBcCxMNHgxjSxDxNqx5BmpvWc77b3QuqxiLQCvxx6gt3h8s1b5Kcy2MnBeesz4zR26fiy67VYAuZt55YuTsi8",
  "key17": "27iuMgAyMrVjmRb2MyHUm98hpSqGxdqxbbeoekwpKpZashqLBgkqXwUqGqi4mf3F4xZVxcQW1vXmSJJQBsqgmKAn",
  "key18": "5cPnsX6pQXA2C7my9MHvxjtDemsHs24pHK76jiDQtWwX5AkjamXMkXL182Mnd41fBoi563K3hQktVVRnuSjNNtGH",
  "key19": "2KrsvXK7qHbxX3mixNFgZHTETzXrFmU2h9GJTjS82Uf2r62gm6xnTnVv74qnRy1DS8P2AJa8kMorBhmYvwFf16j9",
  "key20": "WKPggCAepvbu46z3SNGWPyzquRvPHVqEQhHo8Gzg7Vkff2MtaKPGSjRYnKQeVHvqr41hW6vBNhzKcvXks2Znjvn",
  "key21": "jWsdsK2GyLBaPsMYYXjZVfYEvVQuVY3e2pSoZ8tWQYrF23nusvHT17PdMzP6WfpTciUx6r8sFLFHz6byZhZzX2Z",
  "key22": "2ipN5pni8VdZ9QXfa7bMnfL61zAWMmxyyE3pUhAxWUS66Zg1iZxL8btGedYRpm4GfiaQ6KaghpiB2umawscUJw8d",
  "key23": "3sNu2aJJxkUxQbd7z5a43LM7M5eTYqQByMesjoizaM73u2wPC5CPP6PJ5GcUAkLe8rwbiru9cuJgbfeEXhE1vvpy",
  "key24": "272UtkSJ6y4YU73cUYpGr4ucSr3viPUrxoWR95pUQboJdtwDgSQeTM6LvFkvCDUJg14owaCKRMyg3EwAcjheQF6T",
  "key25": "5h7EGaiazjgXm6VS4yN6mhP1PTpH2CukUQJAtfHsS1Z5KsGM5U92mMVNPtC72M7UFuDDHDFTBeTMq5iGKfTFzdgf",
  "key26": "48aNz9PRs5MqjvnwEtean4vM9LF4Yrcs8DTk5qGoh4ahHNgtWjG3ZvrvYyVmsKMj7kx4NgTW8bCMFrShWWLpPDn2",
  "key27": "4aJXHDgeqyYnXUGN19XCpdsQ4cB3pgntWbJKWSuyc8KyMzwKLthkuACFhRnmSbxt8RZwpLJ5C5BYG5Fb83sNLHRe"
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
