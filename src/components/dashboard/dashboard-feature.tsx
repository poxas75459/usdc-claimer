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
    "5xCPJPbB8EknkFc9qhgkSeGN7AsHTt7L3gEC6C5yWM6vTqojjDih2hxLWzoZpnLYoDki5SqNykbUHerXhuuncnZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pY7HLxoZa2HQveqRocPj6ZVwKr9w3fFJuUuv8UyUFqbF7aecLWvoAzGGToUifAAYYYJ4CavYZLsMmNLvJyDwjT",
  "key1": "Kn2NZVPxxtB3jkVNmckYS94adbvQkBYZFdZ4pfMtqo19jcbnTKnoR4iVZiZTcwhfMN1TFZWRVHmx4FmiN4JpuAH",
  "key2": "5rcauScbgLuf1BrddxyqcosTvkQzyhPi1ctJCvwqZzFx6qmKrGyCFA1JiGLGZLrMHWiwq8AgCtLbWBPb1mMkMnz",
  "key3": "3RLPs2Y88a1FUHwvZvH5Wgk6EH1wb7acW1ii5oJLewMDPtgCMBkAjRZtLMm2TfoFdQ4uzyYK6b6qUeLt2pLpqdMw",
  "key4": "2Ldghpa7rhSDtq3PkNFwhFrvZcRaN2AXVjMGAUKqafQJQBa1HDKNHcqUeLr9Dc1gaEHHF1nNCP1rGjfgtvSg2cKH",
  "key5": "4o4REsyDSncLhnDEvcJtSLqFgfEHjJpnLEovg19Lz9Wgdqj5V3WsnMbfTf31rkwFpCioaGfa8eAp2bqV5Zx7RxJB",
  "key6": "ZDtDPi5rhRzvZimZYEx8ZN9bAqzr9UAZqVUufuiiML1vk2VnYa1SwyvbMbpwkVnKSps6fEvag82KxGcroLz2fNK",
  "key7": "2UYEZgou5RWmCRb3T6vvLUrwrwgxYg1W3ybdTF3ekEAWmaMgP5QuT18zcpJJ7RG6QF8hUhYqXJExR6NutWTcHgaM",
  "key8": "5LJkxY1PMWiERui5nubkPDfjSbpW7oPQhQ9W6HJt9tNGoyXgpdzYCmwutvyVd34K1sk2GAosUGKuH4tfFuGMXm5J",
  "key9": "3Nre14cd7UxPatPgNZm89Qxn8Zw9yPzKHz94eMyubYgRuHThoyZPUTNJDZAJWz3XvVazxiqr9CHqbAPKZRNnF8PA",
  "key10": "2dx3Twuw1cFQAkhyzSMcT4P1vhaf3jrmmKuq9UUuxy7Qnn8oq2rhwwBD1AC62miitVY93i4PCRK9wsCeox8btF9R",
  "key11": "4pQNjfN5ktFZGrMqivkg9BicHfCfE5j3uJmeZErf5rgp2GiuREZNg65j5dhiPRmG1UTZvnF8GrAbjMBJriHif8hV",
  "key12": "47ePcFxmJS3xwLCDVz4UiXjrbDb7ogghtizAWwPhsnTp7koR12gtC8i9pSj7EBmMCxUELrof7jGhZBn1q8StvjjG",
  "key13": "3NZJMmPjCqWCe64rAEek5EDeW45t4PzpWpBpPS7n3bKooJy7zumxsnaKZksCRPu3RsV75aiNax6sy3jY5BqdioDN",
  "key14": "3xLu5WvmcKXuKrv1PeY4yT75WisxhgNT4bpMcuNPBC3MF5n7aWJDrqhDX7rUL8t2w4pGK1tutJHYcduSiyA4xFbS",
  "key15": "2fxzUhN1tvkgXEskotHseKKuVY9LTd1TMbg5ohzKFjLCJXXPiq1HUVpGd3MXku3cF1haiSyrVxjfDC4UgA9i55jq",
  "key16": "27jtrzou6UPaUrQV1wrhRZ5C6P5omdSqvNQWWMHuMVmpfzL1fdCPCAQ9WSrF7cyZ19qHyHB3TnaN6CJCei83DUas",
  "key17": "4LpCDGuEe5H63oTQXS9K8XGdMaRqSHsAj4V1Jm6PbBLzqcnwGafMST2KCRiqxN8poNBVqPEAesD2uZkfatVRHj8e",
  "key18": "2t9Y28SaEkgeJDtq1NpBUU3tEyEjw5Hqe9BZpB4ioLFgV8YBBzZwcHsCT4s1otFA16SsScddwjQZCaaDAWnqT34m",
  "key19": "bwaPs1NcjkbFLCK4YQ3BGRR8xRjLrEpP4GuF5f7nNf9W7quqy2qwfucEuPeXrb7dhv1xkyt4TUNKmeWXmWkgzyZ",
  "key20": "4CCyVEHhbn9GqQeC5eteWfB9TbVk7B5f7hNDX8Do1vgrhyjjiJqFHQCanQd5j3VtPgWfBQRTmFa5utgeXnXbHmQh",
  "key21": "5ynqcC3wpXm13nFhPYZa8SM5pjev7AunuiW93YhZ5vtXWAFKR8i54Cgpg1t5JrjkKm16zdsYfLiLppkQ9F3gdxQe",
  "key22": "5sG2A1TxoHMq2Qs4Z8qDD3Fwd85hKBEPA7S7SKcxPM1MXpFdnBqdxg53SydUp4moGjfxNXUuyHdx7GWTQcTG1iXa",
  "key23": "3zpCqPSs2PNaZ3md3bPH97uiHFwB2qmVpRTfa2easTThU8RBHjDnf6XPkVzc7ZLNaYoK774DiJUuY1xwdQywX6Zo",
  "key24": "jNyRiUJEcwBrn9xAceHtJAzJeYSVK9c22YLBW5yPqA7aczTaSk2FgEDyXwoEegmR9U6zJ5hgRZnz4EX9kv9HMQG",
  "key25": "4dbmBcqyPgTxaLgjZwj7AHe7fEquMUXq6tb94tUXF5oUq8KVAUdCZAt22KkNpWHSxSPV1DNSNbqPBYBQJo9fLmBg",
  "key26": "5FdXfGWRzpxY6LpQkwHX1Xpv7msBWjX9BSFTL9KXM6M9TC1RqAsJNkzuEjFNaKkPPCDk48QbJfQpQWd3Fd7ewdY8",
  "key27": "67bvn9ursx87eqLkoDz4EjxWvZsXzMSxMuoLopTaW3KhHccHdpQnDwa9FZ2TEt8RwNBgwSyK6UNJoBrfCbSZdCxY",
  "key28": "2Uh1qCSyg5K2E27ho5jcWAeyDUzJnjEvKJ8aE4CytRzvu2CppwwNAC1yTsRYTq46DbJAVmZxGXo9ZGmVNoYjYuGs",
  "key29": "3FCnRTFQWfnKidHXwqR76TZYQhVgvhWbGbmvFajKGPrkrn1fgeiY79VyfVKHMyHnB6Ee1r8AQT4h7xLXC3E4Atns"
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
