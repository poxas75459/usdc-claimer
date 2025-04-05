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
    "4K1Yj4wpZ8CjYWH1bZRbL5fSwLQUtgsSbuE2Fgvcitui1N4ENcx4bs8g7Pc7rA2VqKY9zkKhW2msAhXPGQFKzH8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vZd7tY1NrCBeGJAR2c7A6HS1UkjpKgYzpGDpnMN9vSdicgsWoKXCfKaoW5pkoUGeiJYoDxgF2QkwZc6gQKSkGzC",
  "key1": "9xFrU5NQeCdWhzZZnVPGg8Z4ipeVikFLcMqPT3Sv5NmA8JAbcM7cuoLQEWALSbhsWFtrbAXaiLUAG83f65vz8mD",
  "key2": "4XXNruTNrBmbxFbCs4S9W7j5f76GLgptGJtfUaXwgireHQxsL8tNMpUx11LMy4QsyqXjydcVnde2TKcetb7hRvfh",
  "key3": "5bq26dMLcStLFQFTN4jWcvUUUcCvDA6EAVbscfbTWUzQNhBLMJWDDC3o3zA7zaWkWUpho65Mt2yq9aq7yQf7T5eS",
  "key4": "36YFnSmRpXS12fkzRuxRYuVHiVyPnhcuNb5NjAdyqq4pzWpFwQbCrLWu9P7Yp46yK4MfLEvX8RDXfeme4htywEFs",
  "key5": "4VJufX2mcGf7rQxtyhGYDWfPJL7k1addzCGKMMa5FSGPFi5ym6bEsKM1GCjcyJTuJKXqLbKUYyPmbCEX4Uz5W5ZS",
  "key6": "41bPATKsYpjGvH4MeEzeUsX3dfwsULaQiTdvGCyPNpZZRMs15p3HQ2bCnA7VJfxjXXvjvruhvDQSbjuKcmPjjgN1",
  "key7": "5w6HDxDZQNXgaRPk3zF5uyq2e8eyiiB3tkw5SJqsJ84J5BudFeLBpf85ncuJ9SERCvStmR82ZNvunBwxFCvBeany",
  "key8": "F8ufBvx9oai6RpGRzsde2MygkWvYYNRMgNX77Xrj313YQFvsANADfvYa9NtsNqGLahfwjJxzeXxn6k6RA8j7wdH",
  "key9": "48jkBkNHTCQqmmXfmaTvzGN1ASMUH7p1rkEQeNK8fm2r4AiZaBcRWPYmeju7vy2XSVrb3bmBATG1XVq1KfZva4X5",
  "key10": "2UkMDszmeJQ93kzXw2BMu8td8bQHk3YWBXZFJ61q5kubuARLG9cuXwxKvev92uF5pY9ZDAMbcXopgkEzYtayRqft",
  "key11": "3TZ7GNADtSLy5v4yBzf4DdXMYgmSTvgto2CJmWUv7aebiPLLSKdX3wuij7FxdNkabPiEVVYQSfAsovc1UyEqMdZ8",
  "key12": "2gykf7tcoxQL5ZE5TrYwjbPDh2ktNYTVkzd548H16oZXAXNcjzUmXCX9Rx6P8L5YkUiNiGRA241JD5zVP9hG1vQu",
  "key13": "23p9G3crqu3nGDyEaqimi52oTgzWWD8JfnC67oyHcyS6PBhvENUPA52MSyLn7G1kDDnMfKgLK7nj28F38cKSirzo",
  "key14": "4PQyfqrX5KnqoJUnaz5QNKC2vTFiJQafmPfGZJp43FydGr5pBFDzVJnBGCPcU2ACut51HPfr8DkzA9PjqevRthom",
  "key15": "3CTE1XifwXqYhz1EQnkbj3zWxUmGgub91BHX6YbaAKxPqTd2JfMhesry8iXZ5vYgBxPcCa5TdTYwhWVozLGBucR8",
  "key16": "4HZXYZ2teuth7AD5BqwbtiKvh8tirhuGnkymkEbLG3hr19divzcFabKtEFQKcG1C5HCFbe9kXrQv7wzccXNieE8",
  "key17": "2JAEk7HbvWgBWXwDNoLL3RTKh2DfBSGmcKM3WAPQZ7kWNRuh7HZcsDpRPaAHbTVCwKHVbGh1VAta4bYVBJ3jdYFx",
  "key18": "37ekfArYuJWru1bmLY5TotJbh7fcZeYoR91Zjjv4s1QREvUWpiMtgWtoiPEkYYRmxeShYUpAH4Hx486TNdPsgfCp",
  "key19": "4p6N4gW7SFjjyZY5RxLjPEbFBZCfRh7ZpACBT1mZS7iHyd81gakWCczC8JUMvoQewUvj9tdVWP2VmmAwfGa13GfR",
  "key20": "3W33dYiCCZMQdQSMeGwZfxMyMkzMBNtQF7eLRyQrT3uE4p2HNeuXPwn6wQwrcPHEEnhziKFhEJgkoNyUmjAEjucC",
  "key21": "MnGH7ApZ3dxvvQ6jFGjFvWjMhXZLUuHyw1VLwT9pLZZhBHwwXBfzBRiz4Gbm1jiDtrHQn8SBqv9VLEd5GLS2Dce",
  "key22": "2LKBssKLVBV31XrSRJo5PxGGKQpvha685Hm7DVLfYKaaBxcfH5hKjt617ArDVodjn46JkTE4fkeMFbEnSqBq2cyZ",
  "key23": "H8dAsHSTSBEtQSJK3fD54jf7PucXV78YfEkBkCbcLfAYEzMZxXoYseP5KG9DNV1tYXcWjNByRLL2x2hULZfai7t",
  "key24": "2fpbeta8ZfRtMGh3A7wRXKH4sm1zHwy8QHoPSCfUvKfcZEN6tgyhWgeMXe799hp8LQZC7e5GXywSVvsUHJaYvVnE",
  "key25": "5xn7NHp4aSoTpSAB7SYkVhrGfkiuZ4LCnjEeK4UgZEp18o5apLfJKTJU6xnjWJgx46bgxC4NU644jW76Jtq2mW6k",
  "key26": "2gYFTqyavn5GTMwkFR7Rwwj2xv6JP8U1JCx2j6amTcah8nFWUVLTG15YwMxaCiA8814sKcXrCAFwScfmu2wpbVjg",
  "key27": "2PdHHv5tajfQ6Wy1pZ8KY33qtzSMJmyP3GZmD4P29roCsWasm2jSQLzdu8vdXasSM7AmppUUpBLU8xjhceDN6AaE",
  "key28": "mCxoDE8M3BmzWaNGam6zANpEAJ93JKdkdM3FfXaLEr5g3W1yaSJrVeZJtqVts11SYz2HAPogDNgi4DFKiQ5tVm4",
  "key29": "32gYFTnVYribVwQ3Jf6vmV7hLVLPFtzqWNTgpgZr8NY28W88x4VgNmS1LSapnFeTrdWSndWLXiPBF2mxx9R72JAc",
  "key30": "46iXSANAbf93pfZLHAgXoVzbiBvM9GKhET4ERYaa85uvFgPohJgUF6i47KysVJ7KMvvBvkJyYAzFrE2eyPYAckkV",
  "key31": "1y2bi7K5hX6aTm8gbt71PqMHU2aSbZa6wVc3Q1rdaN45q8zN6JBvUiodyPmRoSZz2zq9zwQtXvqqAxRpuPji8N",
  "key32": "3pNdLxXWGEo3fWnMhvtP84BiWaQ6p5YnRQZguE9RD7RLhU1TELPGR5b7rHmhtVNPQPSpCCVQSbd5Es6Rx5CzvNhf"
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
