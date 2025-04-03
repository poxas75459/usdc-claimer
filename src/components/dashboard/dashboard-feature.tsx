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
    "4z4wLkeC7rxYkYXUSDVf6SeVgUqSkAdCxNiKRHYH71yEuFu2rJiHbA6bea1D8fBAKSBe4dKf3TNyVhejQHToyhD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VS2XHRKakvPbqkPym6Z4MPywkebnWMoC1Biuw5qY1JFS3kmbKHUrGT5N1Eg4xLftDxxfae4W4qwCLNVybgXZSor",
  "key1": "37AvL75AHhnYs3o4vsXdMJnCtgWUGejcwRcLjWnXTmMedzoxUAXdMJiX9imfzfxTMTqvVicB3jhHmwM3vPZpPuD9",
  "key2": "5NPfjHCfrYQSuErJ7HCSQBeEBFjgoGFkF8Bh1VM9mqoS17YQdSET5idPpkEXcaAfoSfyLeRdWKS8zVCj1zMwNoh9",
  "key3": "2LJyMgJAgqxFCoo5QpUoVSfcszYKdm8uWUb8f84JyQ9RvvKjDPq6FssB5LXDwG4nmVtAhMLgW8xyxBiRXDv9foDH",
  "key4": "4K4JwgcPKZ9fwUJhW4MN78UUopobmCYKamRHiuFS77By1nP8siRgoNfZQgXjEcwwrfWrgvFpkBYCwkbmgBt4KxaX",
  "key5": "3P9L61nRSGBkLbAFrpN5rKWL2PgKGvVVt511HRzzkjhy3C9ur8a52FxA6LMDKpenVEfCsyRNr8VzJMbnhLJr6nLy",
  "key6": "38m9GzM4ddmobPqXX3qGWJvweVcHzbqE13Sdp5nAFkZgm4mW7BjiKDZiPqLYEYi2jNdC3STgrCxtfRjimhMmg1PV",
  "key7": "2okuL1TBoFfxLo1ZKT3fPymMxnPbtVF8GX6cHpsjophzmEAAYJau6r8rBYA1iNTq6ihGF8XW4MQj6h4XZh2k9Ezp",
  "key8": "3Z1hnbQuVeTqo1qAcvtYX3jvPgpCJrzVfDrRjoFfux3wVz6mBzeF13YBJcn6Xu1Yi4PwCCeVjJQsMQ1S48yaZLjT",
  "key9": "36YsL8FoCmTpBcNdN3S4wQ55j4MaGPLjeUKjZMb2wTz38txhMMXpAUR779KDPz7EKyBeiubWJLPDQVLVdidcEiid",
  "key10": "5kTdSLUZYBtYrEp1meLNFyUBh4SxwYgkd7C2aud66GmSCRyX7E3PCch6UaNoC6qQGidHUhdPHEKfkYAc5opZouMg",
  "key11": "5F65xKfKVpBmYofJSYjAWuNHDwptNnGThMtZSiRJPN2eESGy9muMYsbKPhm67DjtgbM5FY925WMcLQwttBdqTmbw",
  "key12": "VE4X1YbYQR2qGyCrahtes6MLno4JxPcbCWoHtR2gh27ozVQmGmgjkbcLR8ff869GKQxbxr9p2QD3UzLUe1LTX4K",
  "key13": "5b37AugME6yG2CCCuMpGcgT76yfHmj9dB7WmRhnNH1DvGm6dWNAExfp9S1p8osCweLDmy9Syk2pRzdmNedLDvfPV",
  "key14": "4MgmBAAV1AmC5PtEB4LMf3Wu6L79twfChn55BzWEcr8gW33BN9YxhZoGEqAhBtvuC9BtYZVSRJ5tWRAJS2pY46cY",
  "key15": "5HZoe4JqxKE5tUucP5owF7mi8NHL4HVww7w8jYudxZBEC8duAj4s3beqhBAy6y9oj3QnUM87Fru1nAUvYGfEwXHP",
  "key16": "3V3yJ9F7iTEqkxzH5oq95QdWD2rvYbP6Jyg4MUVeqL7zY9UKptdWy7jv32DTDBBGLVLspUtJxE6vXP7YMSeRmDeo",
  "key17": "47R3MYaUgFqZtzJoX6poS9mo3YvjdoSWdDFiPRsLxgGF7W3pdjC2JWyjeTFA2nUTeFJzv2xtgjy9AFnvooKQHNGk",
  "key18": "hKo4bk2hp1by4EaU5TFqHc46RS1rEmQx7o7tsR2gyEZ122yywie4ns4bimcMbTbHxJoeNHgJXgT4Y4PyJuJkZjr",
  "key19": "45t5Wy4QJGXaqAARpBcdVksEXmfNnWzmbSoGFhLQueYvnF8HUSpXR6twncekuhRTTffwXg9kL3pCNaD5hsa2Wo3",
  "key20": "5H79SqKiS9HC22j3BBJuSqwKZi2XUoWmMQtBsRiSg5Wjd8SDpjZ2kfCeXDoNRDH9qHfgXYs5wYm42BLjuDMcwva",
  "key21": "2qS3J2Mw8bDrgaoPoHugYtbuwUd6vRUdYY7ZsvDvRKFPr8WXynJPhZenDZNzzkwJDVhjJipkqtRM8R1GQEVUGF59",
  "key22": "5LLL2KcPUKMzexfchj1FJYSbYrSyVTj3tpdStEggx1YVyaQvhVt1TZuZBKfRgev4K5GjNDTAUhbPryjVCqDcipML",
  "key23": "646Z8P9moNK2FU4qjpvHfibAQaw8gdieWVGWaEMgmuJqfqvZSUU6Yt7WKvyVyPRzpjuLyccqhBmJ6qfEGpWN5xj3",
  "key24": "5rduoDyohipJF9BgkpTd7fQTTk5rrqbw2Wp9E2r4sHLLwX52kxBHwyvnqecyK5a2a7NjwSSCnuR4ZeU6Scs4SbAX",
  "key25": "3ZZiFTD7MZWF5Zf27LvHo6SbzxburhVukhMorR4despsoZfXSDmzj1muUQ7QjnHCxS4NA6539teEhSdcHkEpusc8",
  "key26": "5hkGMMqpBdsiuMgSvS8vpJvJQ5iXiPErru2wcJEjTXRSPi6vRQMVZ1uWAJgPWYXqL8TCPsUzNvYRLtac9EhHf5XA",
  "key27": "3rZXub1HsJMVEPCuFdhFJ7pEyWd8QpMvxqL5wcdDTiyCxhDxWMF6qn7rTrGCo3wp6ZxgBX7d4vh32q7ZGqcoTeeR",
  "key28": "33Ybo929c7q4bZFQAPERpKME8MmvN87MrsEhnHa4Wwd73p76n3PSoS3wLsrhEnx9MuLtBoT5TdiiaLdMvyhuk9fC",
  "key29": "4LiG12wr7DbS7Ydn28SDMLU4xbp3z8xFjd8A8hFq5MKziC17irZ1afwFQtBnn7iAUjz3MAikgd7FR1juPYwFqe8U",
  "key30": "4vPqd5yGt8HLeMUbSpjBcyGEVkVconNkgkDcswNFAQYTdpmWEVD4NvBFHETVzaQbnP9ZW6zYBsdep4p3FZN2sg7j",
  "key31": "3CJuN7nt7NMDJsdDwAXWMoWigFfJuZisma9Zv6gQA6txb7DBhZ9BhpydB9vmuSxqp1MmTfR9sFhP195bq2seSTSy",
  "key32": "2rT5kp5uKvBnE2nNyENgyXwMgT4umByhHuigUFhX2w2SrmRq37VVsdHoXyP9H8MWvHWZ31h4sMjg6dKaByE5QYEr",
  "key33": "2w2k7uKJ88ZTQ3RuMCvpPsSfTLcuk7n1Rc1Et38BaXsVXwA57WAzUR5A8jpUv4Lw1U4zZo5VCkexhYfPc4mSY2gs",
  "key34": "2mUj597CUoGGsX1jtR43S1QZBSJ3s2aGAmrbgSC48MQpRfMVBFWkk8ZifFh51ZtE1wmpVdZ2j51FaX3wg6ot1VCh",
  "key35": "2EZ19jus4qagVPQiujM7zezxt8poekmkfRTxUDujRE4JpLcKzKDiYEQZmhg6Y8BAGfhcZSBQWixv7xgRgMjhA4sM",
  "key36": "8aARsorBn4jV3A7etp7uZn9394wAJyGfBY5EKxuDo3euV9b2f8E8rekGGdHAcCAingWEbquynDeUPVCNx3d3PgH",
  "key37": "5WtVzgbBRQw8hvuby7gNc4HyBK2U98Q8snGMnW8pZGE8yH5nDXrQhaBxFPyqp7QNqyhDq5cTgHP9dCzhtbYFdpnY",
  "key38": "42yL3HH2HSRW9ob7D8Agxb1MxXY9h4e5RbnnwMFSCKZ8LMybJvSjF2G9bAnfdyUZ6X8D48XAXWT7gDpy8P75ZZnY"
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
