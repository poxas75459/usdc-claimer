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
    "3CLMUMjkhLoGwVtVFt3b19czHW3SbSpG47fre5sV9Hpy7aEdhbsoSj7XEuN75M422avb19vQT5sf25GWWMVmV7gD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5atJPPV5ee7ofYqjWhckYfoWpodFLpA8heVsFKCNa57hY9GsKPJVvLLbQauR7HhZz5vL96Zh7hVrZoUKzTqHuKbb",
  "key1": "23wCtuEyYsM8G53qUgKYNCMGpbE8TqnLyxdUUu3pkLwhSKYjna7n1Ubg3vQJaK4ZE92TUFRLAqxG8M2c5AaBrmXF",
  "key2": "2K1g374ex56x1obYVARevUnixXXKWKTwXqRR4PVMzCNyjbYA54SM4xGc1FihY9Ps4BZdCPkTTEh3NGEpvVab7JR2",
  "key3": "5GUCLVxa8EAp6ugasxXs9vFVnEAbUnxMwxCeM6bDPLUsmxAdbxkLoYLpUrN8hMNaCXUDgjg5KAkZMexKnx6sXsQA",
  "key4": "2EHyZ1CSTPsce7uNcMdTjuDhHNpvAW6NSdTN91Fu9Gi7izT89wbh468zGoohqz8FAYn1TV7nSxD34KYfoXHB5dMh",
  "key5": "vvGkEBfex8ogWuS36pcFTSH5aJHoMCDnAF1pWLFW1roaZH2r5A3vmK7kygJzSwisCCNn6YkxFcUCprw561zZiZA",
  "key6": "2MgVYKH7kFsjPxyRyuTpbnsjWgXXjt6FqZj454y9SCfCSxjtmzB72RmQ9pT8CZK89DDfzEHMvV8UZjr11PhqJvmi",
  "key7": "4beGX3YBWgNhS75PAd8rAzWfav4iswco5XZai1u8fsi9KYrGztE15Vd4WX6f2JZ3G59fj9QvA5hhtUchWoNSNhBX",
  "key8": "3SJtY2TwUa5fWGvU2UZ26opfd4d5ZBqXqn4jHHAqk1LY5e6mjF5HAakt92P4qb4iM4M8KEVCQFUW3dsFDomZ1bqD",
  "key9": "3Yu1nMSzMELZfLdHF88NVKD74zJWmZYpFyHygn2vMH2RGrbmyDy5NRDzAuBumFJnQcZzQxftCHjcBUhJzpTFJ51G",
  "key10": "62q3dtMpHjocjukBcZwjjmMVZRiM3koJJE1ohqRAMk6dnvxPBSGay96trCDfzFJFaGpoNS9PMpBjjF8CULZrfzN9",
  "key11": "37WNw8bHs3VRWyDoZcGGz2f7SUtqN9A7DQPMcsKp89gzrottoT1RovGfR5eEf6A8Mkyw8M3dMMxFndTTbryNoBeY",
  "key12": "4UqtVUFiSyV1xTuVpx6q6AfTH5yEpJJCZGmNSBST2Ux81yKsk2z5Ft6hP1kkTeSsHZCmPKcsRwUVvXZNreChBdVZ",
  "key13": "624geQ3aGcyLMcStZja6aDfyyfbAqjbXUU2dUe5QBfjzXrQjjTAsj5zKk5Z63iTraaaLThBWEou9dhrr4fD9RZqw",
  "key14": "2gNdkLVBkHw326kiKjumzcVRZRDnBGUoJGrWRSqGWyNpEyGTSw5kX4Y9S3LSmD2WfAyh7FCJ4F7mvPutM8fp4DFL",
  "key15": "PHxgSyAfzuL1yze6tgfyZCTQ4vm26scM4A1u4cv96bR4DjwBaQgcsPrFKrFAhArpfHWrpkfKjALsdUzsfUsn39N",
  "key16": "356Pd9ybJKzufn5ACnDV1hcNH4fGUuSm23gFLpPiXeP4B4TJJeeEs9b3XdyiK4GskWb4KvMsR5wKSuKV3N1yyXzD",
  "key17": "4kEdLFBGVHihAJ7HF89koZXYRvx3PhQAy2uayh6n7TqNePAqZGGTVsuYKtsuRrXNNxtSyz1TByKZdzGeU9tdcuxQ",
  "key18": "2u7UdcBhSPYxJqjr28JDCrXsytLLbXkSdjKqJZvGPebWu1F3tNk4ZULfHuRz2osPr8E55DKTBKoJ2bxhx7h7izZA",
  "key19": "2vGZ7PE1pUShLqYXKjpPjzyAJx9pkceHRLujnrQH5MSYahjSwmSchHLSiPE5hmffjjeYcGyKrzcg1gcViv2eWw1k",
  "key20": "2vB1QYXnGSoa6hQiz7GmCyKLPZSZLz1ri7cHMuBjEnZaxLaW4snuLQzDvmCwHUn9EUzLiUChHQnsKXBGGruE155p",
  "key21": "5s9XN5S4LTNQgjZZcrTiGVuh9FAw6CTCsxAPRaLZbnJaHY2ajCM181qMev8J9CuwWXApi4UNAfcjPmo7NrCKcb2g",
  "key22": "5dyDmfx9DQiqeBZVPQkjTtA966xvULDAnf6Epkkvhqoq1AUzdVv1yd1A65kCYzSLJBMEhLuMFDLGUcXRZT9aEbHA",
  "key23": "2uVb9eScrC6Fn9risKgK5rThBVYB8S3XLvWFEN9vCn94hjJKPAqK87FgFjHabYHBa1rqBWNok8kAobNyhW769KQS",
  "key24": "2fmJuEPbyMFQkk2S7XTngsPDXY7gKChbhsxAcvsqEXaRuPBRMEy8cZWhXxBYmF1jjBXF91R87hrCUqDBTU3rZh8h",
  "key25": "3nJZckbEsbv3vUB4dkuW3zAcmnGhpQrGrspXkoL7aEMJ9c5cP37cx7X83aW7wx4Np44EX7KA7CE1fy8cmKPAAokZ",
  "key26": "23yrqAg3wkdapBHRmVvF1hcRtXYvodT1QjFgA8HFjodVQKjfVDbSJhxypGP7Pci4NwroXbXgu1g7LWBC2euwRNH3",
  "key27": "4TZ26BELLw9nNPp3gssu12yJ755b46ncZBA3HMsvvPhsjLsJSeBgBzJH2ZyjDWwfmHBhh3eZSpJpkeUTC1JWVjfh",
  "key28": "KXy6CQihd5NBjiRfX6YJHGJsDjZTQaPAMSWDruaJVLS3FgNs3wsQooP3fQwxZrbB5B3QkaMRF9Vwt1UWbDbNPwy",
  "key29": "3hHzCusrZY8ewrnLAjdBohkt5UuK7LWUfViwxiYJJRZfUcq1gG6rYVLZe3MYEWuXWcwEbhLbpXcvNroRt4Hvn9tp",
  "key30": "4LHmWB2KbUWzv1Ji1YiKDWjgff3zJAkUZY74AJPEbBkTC18eMDscKzxGiFxSWQkA6myed6gWL8yDqWDrVGYyRnJq",
  "key31": "59aPqZnrdNE2HW6Xp7N7Se4nqEbPwgKVjNQQm6HQPF7msam8PBoAszyNDpn4kUXrWxcFW7NwqwPRxdoeUo38RBCJ",
  "key32": "38GmUo5S1Dm8NRrtt7TWrDo1b4hKQRN1bnATACxphQopgY1KUTur4jmwYmpZwJKkDHkRNiKFhfJAVFk2dqmzBBCC",
  "key33": "tey9bDKasdZmRRjSEA5uUzBkgajivhFdipW1h1X6jJUnvQn1SUBWm5f39p7Qh6v1nJJUtK1i2tFfFqKSbygPi7W",
  "key34": "2vWK1zFfRZmWCBeMFkrEHNb1Uy8jSGn7kVjzzgGwCwyYPgzkgntaPHSMiqfQmwyrVneN8q2AyAeuqPKrgyjXGRX3",
  "key35": "5Wxz8euoQbc1sE5FRMjZvv3kWJtrrWprB88yXaxxRdUW37PvS8wEwgPEYEQW7Fg5YUEMQZ5pvVnLvMgzLYXUESiu",
  "key36": "3F1xc8yqNnRiimZx2Ha8uM5XoyMYce3Ge7cYVRi3op5VuXYVHCFszbLofUzDDu7ckoAh1Y8q6LTam35WWjY3ZWZG"
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
