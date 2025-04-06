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
    "k38PfGnb3LrK7c84k49TZFg3GbbnLCXQRbVBLLTA35f8QP84UuBbL2LST9DS1X9y41dieB1GkHxemfiHkeQUD7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZH32zWruBbysm9BhxUytHrCdVT4BB2Jbozms8trPCpQqpuTjGRRdGU6DwG5ic4u7tigYQtEkfdEkxmemUtm4MHc",
  "key1": "4eCoSyNSRJyGQ1BkKnSGj6qeqmxJtUrz536wNxnpCrnhRrcLXEak1xwpQiUoTuY9LSLiVQWPvQD5cAZTKvoAAb3N",
  "key2": "2uGDa3jqfuSCUzh8vx3Q3Nw3NPanc4MAerBLcqgchpKkntT8gDigCL7wY34bGWA4xGgpQeXKry5byoqWVmYBi5jP",
  "key3": "24qapEbT1MbYmkREgdLSRh4Th6567BCnpKhWGpsu9Y8pniZFPHXUteHiL6nwfo2wjj6iLQFmTG1YAduLQLJ5SJTp",
  "key4": "5ZZVn3Gy552Bkx14ETfnsD9P9e1gJqSVbEtonD35EpgjSuC7tNCQkUM3n9d6hiHwMeRGNBWu65v2kP8fhmpWBW5R",
  "key5": "ij8wybBwxcAR7MBEGr4raECythtDHZ8KQFoWi7mjYrbiE61tk3JDowqAZUg15LcBFuUQz5KVpHpJfy3s1xTgRvb",
  "key6": "5bjJ4quSQk42YorfTdnGneWEm7TtzvWyT5qQYyREK9K9AFvzR6RZbMjwagijTnjz2w66JfrfuWD3pq3UcMicnjam",
  "key7": "k9c1112QZbbyA2t6Ux6aa8xiJg2vabY7H892tr8YsdAiRpD769Q4BXmKE2Fcmb1qK84FtjEGZRZe9E7uHsXtcwD",
  "key8": "3RPYEZggTcuB5c6eatY8vF14Cb8rii6cscbBnPCtwT965ExX9HW2oovy49Kh4jWekkNQVFZTckM5dwr4WwVyNekz",
  "key9": "RKQHxH4wpPtuA9AuTuTWD6fi8kVqSXgMuEMDEgAwQXNNN8Xshwc4yAmU6i8m7LBc9vdTyAhNjeQVcoQNdUk3LJM",
  "key10": "5BrT2fK65ayQsURbxp6vNJnsRYPR7zMET5hZC2eKjDahGhT2Q7gN6NAVTrG94CkbdYgRN56JRLrRLCgRyZFrMd8H",
  "key11": "5Tur2hBTAKwLbMrorhWBRfGUxagsoqErx5rGKwZcrf5cTzrvyM3badDBqAUJK19zm142yBWYQJyAxgteE2Zki9pP",
  "key12": "eAsNkT46ze3PzfZPabASidhkwwhTKVRn4EELP5vd7asXaqZnhvNzEuBJ37yFeZb8gpbqww7rwd7zyY2KEYjaD1E",
  "key13": "4bsLpe9CLBv218yj26QsKctTUKGiYc9E5SJBnf8kxk2ypCGpsrvrkHAjfawL7qz2Z3og4PSe4494oh4nFMpAAMFh",
  "key14": "4SAFaDTNj6xKMqKtPptpN7WXBryJ9ozs5SoHinYp7mMkM8XTuUedBm7yK295x3eQuQTNq3AgZ1X1Z1ipidA7Ume9",
  "key15": "59j3zePXc9zF5MgLn1w3qUKVNWh67yGNKKviRvHnjwmbmAgYFqy4RE3QQH2Y1iMdBgghf1iR5ZKKx4CZQchZV8nj",
  "key16": "3LH4rCtvykKSWgbB8dgga98isHfy48wbQdQfgixGLArWZxeZp7PZn7yc7v4puonfbebe78duaszvwK7NtwuLATby",
  "key17": "4V4eNW75oEHPaUFW8VFbpQaryJG4vcs1HqERsiEQVzWCkyj5zuR1pZYWuaNbinc81MAEErbdPwADeyPZQphk2JXg",
  "key18": "JD9q7sz66BKoKiVSXNMTPV5g5UwBWgFXAntdHcjFEX3snRixfaFcNGmRduVBRjtqmbodH2xTSRWYjJ53H9tC49K",
  "key19": "2jbYmaJm4g42K5iXeXsPcrYcMNqCG2bk4hqVmUoAstjUHaRZS6uHMUShxBJvvGVqfs8FMiLyFJCfT4SbYR5yeY8M",
  "key20": "3NaiA1T9BJoJd8jXyo5hCc4J23njuLc84Vpwxf4MgaDgtaWR8fcU45MLbshmUcbeBDiKh2Vvi7QsQGWNbdmvtkGD",
  "key21": "2bAuCMNX5Mn1b3aFixHQCrBMhqFCAvLJzxg29az1fiH7vkjusr99pWXWDrvUjMFFLYkrXA8j3uDPSmbdnnhhCzSX",
  "key22": "4mViWnGMBiGQswYwBvKMNFEosLdGPQ8ToxjVvQAMohHqnVHtutj8k9eeLhyFiyeGoEuXH9uF3344jPnzDe5rggmh",
  "key23": "2jD5AJMzMHV6MHLmscX3d9KntE6HGfBUUHKS74pfpxBWHJzWwgSnLfxNjQsBLwDjfUETUUVdw2sZpYffdEiGjyBW",
  "key24": "ABYQ9JtoLD2KHZJqyR8iwKxEUqUepB4K5d7GV2aBpduhdsvwnotYibb8ACRuwSjWDk3L1XzVixqJJW4B5egdCHf",
  "key25": "3KB9z2MqtKW1yRaYGKQ4Ti5jBKVnb9343uxtUraN3fYbGU4Wi9QvrUx8K4EyP4iUnATfL1R738kCwsBjpfJCxcp2",
  "key26": "8jcTbNV3SgDxeFd226WTZxKLejJ9J8GevRxcmduJpd2XN6ByuRJiXvDCPhmY6RhfaFEFFknpYD9g2jsLU79Y61C",
  "key27": "3zD9aM7CJiuSRGVR7HoVpBZcPFi3mAWpGjo2o1HWk5AiFTLwUFJZ8ghqhGybFGrWZAyKusCQW51LqRbzpyeGZtxB",
  "key28": "2yhsR6gLazJ7PV2nouvchC4mSNDtWXH2fimApojFQ35sHRpmphu5a54xLGpSyeZcaEZT8yYVSqHJi9Seev2RayVX",
  "key29": "4stYQw8pkGcSDyVXGKLXQ77BVmF3QvWfaYjwMVUvVEyNSBeLfTWw1waZ4ZR9QVbweHto93uhw9oEsUgqdJedBb3y",
  "key30": "3LBhjr3iRMnro5nQYsyywNbAZCVyD1TM9AJ58hG4S66ZQ5i1Dv6yRMUAS8kCxF6zF2fhB2DBgEicGNvH5PtiZQW8"
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
