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
    "5j8vyRoWhKtQbEex8DAncZMRSrEEzCfp5ZBK36Jrto5b9TTSRNWD1Yrw6WrNTm1zcAoHXjbAfqXLqtbdSSnzN87U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y9YqnPj2ozwbUNfBAhpche7qqjxaDTzdBeyjMGLBDqBtYSDhT1cZXHmQwVRyBpuokrkZJeuRGtheCRHhKp4kHQi",
  "key1": "4k1A9pcU94HPVsL4emSuAUYc9tB5iP6i615sszTm3r4ednn7pUcEdVKt3krXZbEV6gbpB5PXLMPB7wuGxF71QtFq",
  "key2": "ZgV837CGfbcF14dcMSPG9EhdzXUUd3isbsEmMCq74vaPgWH4J1ADvuL4ganJd218dpgZSEAYo3VvLJ4TZHAUX8g",
  "key3": "4f19ucFmhSGgWfCdVQjDp5H2CJqkzs7PHPthuASXuCuNdSZLanfHTcnDChqxNwaQ4bfkcnxW3XAbBUpvw7iJVADD",
  "key4": "4yzf5TYVyHjohB5mfiXvo14skoyzXVTz6fR3jGoxBbWg4Kzfj19sbJJ71BqMsZtMokdqMjLdYDyvsqWePg1ufvbW",
  "key5": "3mo2jwwHhGyojLum3tYfP8hTSwpnVVxPUFW9KxzXcs1CFtUj95LPYe1TBnJrKyFD7nps8BmHu1h8n7yncjk1DGKo",
  "key6": "2Z77gVEvv1CqeJ1t23GQzKLCSJk5WuYvaa71jS1SSfTP9ce5WjP33zJoWofLfiLtXDPJaQeBDLnArGpkY3RvNq8M",
  "key7": "3Nviz4aqhVXn2fkR5T44yYTurdAbwSK7onExL5K8v37XVuniFi8V1Y3Kiogz2EhpLrcjJ5uUZWZw1kNJA65Z9SvP",
  "key8": "SkruLXJZ614My9JdxTyszYJ2cZLPThmnXE7uhL87MYixyTmdMmuzrvTxedV1QsJFjjSBBp5aXE2Nc1P3cZbgZu1",
  "key9": "4vTuho4oFj8Z7NkiJMTRifgqpUPc1CHGcHikzay7HotaKRJaR2PNoCpiQ1CUpnaNjRwPfuPeQXgcC4dRs7BbiUSK",
  "key10": "3cWRF3fdC7rpZygwiXL4hHyoEKDWTgaP5DnVoMfuFsjKjVF2bZ58Ay9vXw1V1uA1AE7QmT89Wnn1xY5317a7igyJ",
  "key11": "3sh17v3pbTAr1RoSYsQHkKs4oGYGBSkv2cNXJEupr51yaebw911qg7JisRN16LPxjFgZexfsoqZdfrQkxWsgAPnf",
  "key12": "3DtnfYqdmPQVHzzajaugMQVWVXiBJosPMAabrdDafV7ndJdSLceWLcoQEjotzyxKQdwMFcpfJWyAk9EaGLrsXSsj",
  "key13": "cEDeTKobYRUbzxRUzVNspvDe8hoKd2tKREeGDomkLDAdcroDPpdcah67FWTpjbMd9UnQHEJmaoZnhF2XtKaTDwT",
  "key14": "5vLH9bEZJ9nSSbDFoqbZNHCMsfrcRgPgR9AdpTM9gVJAaxVLjQmCuLDAb9bXFrKzCrxWmBNJyRUNC4MADhoBzcae",
  "key15": "4cAA3to3RSWevgHiNWiTBVMNAo5htAAEnyaR1cc1YbYQz61uGizs8fXuALzWofVgBEWDGPSQYZvae8WddNXJHtwF",
  "key16": "5uAF3PQ57Sg6r3Ppo5pUcrSKcmDU2fNVizQ5jLQr6xMnm1bWXaPZMKN4PQwFkABQ4BoX5DRHPUnosBSGqFy87Bdc",
  "key17": "4j5iWVPf3d7hCanWVCC7XDCFANFBbD7hHcbf3ybn8nipe2so4qdu7qtCK8Uq9Qceedb4JTyi1Njsp4bff4cdGRk4",
  "key18": "64bv9LHFjRV1Kt7nMcSAQtQcNbA6Sx7uxy1UX1bYDdc7saY6FeMCuWV77cQxPNokeYjcMYmFWCdkRW4hAt9MEgVC",
  "key19": "2HPqocgycDMo1YZ6eWLGkDve7oLbvKXtAMdzuXgJxYX8MP3XtE8zbyDdaivQomTi1psoYNmyTHJmsLtZCCv5azVB",
  "key20": "ptbdRwabZX7oxsnKJrZVUnbp7YzUnF41mpU1tot8kJruRMwdzVHN92kU1YFzLfGEZbNcqNdag1upxBWvPCYHQY8",
  "key21": "62RGcaP3zMS8Ygd9JKpwGZZ6ehLnm5cB7KJ3qYoTSMKc5F5KvKUiLDg8J1YRW4gn7bRXyqNJdyttzt4duXNpmNpd",
  "key22": "4e48ke1MQRG6T4WCWfVnk6zA9L53fMmgggsctDoRZNFcKhj7UMcoFKnKNgE2xbKm3VHAgEkNy8pANLZxK6xepviJ",
  "key23": "5hfZSxopcBw35gFLqxMdoNmcpPFyjeREtFbpov7esnHJzQWxJn5kWKyqFkWSPdJ8kaQRcx35nMTCZWN6FVgHTgex",
  "key24": "3DhJSAp9EyaA2erF7eBM2U258QV89JRYqqNCxdNdy8yNpqknvErSTnUo71MWQWjNrvNuLpsAoScp13ZizUKcU7M1",
  "key25": "2ozDCcnpcLM3QiDEn4jszJroidxdnsZFygWWqdbZpDJHXRP3YRHfxyWiBZn1fHqcMyT1oD9ekUczUoh7cKf5VrNX",
  "key26": "5ffJQgxrq3D5FhHNhL6NUMoDrP416AQTxFZ55UAdDWUbJ9M4zLz4oXTJ7BeJtqbGHEfeDD52fCgNkbHMgkt6TybK",
  "key27": "4eeMUDzfRcvQtvZjFg9jQrFAQTRkQXw9vLSGMjcBVTnsLvDpdi5K2B94mKKHeGQZHkeY3zuer7XQ3SB9xTS2kLVi",
  "key28": "4JpaNzxu39H95pC5mgCyzcCa4jgamnEhhfw1GgBVVrsJjepJqBCyxiRkuVrzKRh1Zv9wR9hwbuwm782njXQtAyGj",
  "key29": "5vWbNfvWNagTkSvtzjRnoQZfWUFjyZ1GMxyLtty2JL9GYFmjjsHZxVhXjSW4Zf2V7HPwPgHALTdAfUPSZsxwPcJZ",
  "key30": "2v5Qyx4LHm8CFFxHi5T67U6ZeV7d5gCQUBC48RPBpThY6K1ocGhx1vo9vjKdtW1u2CDSMyc4LqyuqPYpBsh9nbRH",
  "key31": "5UNhADHJxkT36tS7Gs9CTnzhbkp9jBc2awakxoPp8XqcKjY8wGQEuPXCiGk13YZoym57qC9PY6XGzFY7VgCn5VBJ",
  "key32": "cfg4L61dJSZFdd2vaP7np6RLphRbgZbfDAiUD9DqfWD3z6CqYk73oE7xy7ncEToEL8ZWR26p8RSMBzpftGNr4e4",
  "key33": "3r4LhrECHK1tgoPjXLTavzNbtGAdFSmv7mfkj1oEYy9duPumvhYmYYmvKSDBgeTEZYohf6wRwgPCzjV93ebXE1jF",
  "key34": "mwdehJFSLxP1tY9i1fVSGhW5iWQWpnvpfWwFuXV6DrT8W7XRsL7NWpLg3ZEny87qmWjBnovtsm5Yd1SaQeMQRCH",
  "key35": "aAoJvFABg34g5zLuzjJHFkw8TbWFF2CuqKnzJZiZ33uf6VPKZKvrqix6yWdgyUGaMgigcZaw2Laa7Qn9KxBtzme",
  "key36": "3diK3KGmx2Kas4s6nMMkrCvCHTQJ8Jj2UYZDd7uMk8zRnyrnWm85ZkCqNdrjJfVeEefRDUUAij1j6LdY82tcBLrC",
  "key37": "4H7uZJw7C3mb7SuTZGzcK2qMH6YBiKaKKoFU1MadtsWri1rivnAQxtM5jwohruwt5BCHqvLiwhb35F9xHWwkHLXK",
  "key38": "65ndvZ4SpazB4opeXxe3bRp4NCKXtxT3LGR9m7Ab9kFbQurNDp2KVeEu8LD7zhae2jNDgBag53G4JL6cSbWrdkFk",
  "key39": "5WLmjR57jJzpuvPtDXBtZ8GRxo2882NXXPSaB2ZSWW1fAeUU6vjfjxZcq4d4UsJK4UD8aavTiVEdBVvQTeojLtB7",
  "key40": "5xninQJvDsFfuCQyHAdq1LebtMV7Y6XJCU4A6TavPYfVvNxo3fy2P2MPhYhqG7KSUbAAcbeXgUQxsaimGehzqqmN",
  "key41": "63fPjGHF842CWGPjtLnSY2kGC4os8VyTDo3tEmH9pdbpnC2Z2bvsQvkXnooPKjQrJS2zjP4RHt2DrLct1gRUk11i",
  "key42": "2ytVndExAxDFW2a7yxtxrx8j8rQkRgkBf1rJMYG1ojPMvaMHrJCUc2KmBGhA3sA2NivVsMDAPBJtKTDbQcgJAxoU",
  "key43": "9tjXo7Pr6K1QbbgoQXvKDg7LPDkE16YSBwBUsjm26SVbKrBpnjah6QM8pYGpkS3qWMWxut4Fsd9WLrVdKVwUq7N",
  "key44": "3fuUe4Wi8q9L7xLG2djEx4ABtL8j4dwcv1oxScx2iXRsPCLabcVRBK6yCvLtBfg1hxZAo5ngTcMZqPYsV9V9uVJQ",
  "key45": "3xrVr5kBG2P4bhCMqxcioro1gYKot5tqCCTymT8EaHZSLVZowG4RPFr6LbGVs6Hp78D7Bj5AEETbQpE3FcJj6ZyH",
  "key46": "32W2mrxxHDJZeVmUVAVWxoK3zs3XCRz6t4HNX9LbLDprXdSLMze6pKCmCra94xKhwhj2SUBif2HTVLiqEd2AGEy3",
  "key47": "5DNPEsu38bQcWGZqVZeAbtwZ4JWipac7NZSZBxKc7SdwaqYbYjSK1NHxs7uoBjw5VGS9ubnmmWCRjuZHGm2k9QB4"
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
