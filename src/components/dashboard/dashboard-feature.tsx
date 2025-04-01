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
    "73MJfmxDoFWbguepaNznyeHnA3Rs9mL5vKGHCCwduyyBqJRnyiHXJAgR68QkgRcQg41RsepVyJ4WSEid82hApCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "459x3vCruwWicQRaSC1s6jn2CfoHdrASPGZYSd5sZcpCfZQdBwacUD7P5hfWBvVifnhAzGZ159pDQYbiXLybKTsg",
  "key1": "4PrRF5K18PqV1rv3vxiC1a2sH9nDdJ3yJUQwd65Y7xxMThS9g1fvjgudszN7P1vrSc8kTJJ5FcBedExxQayEoNXw",
  "key2": "47AyarL6LGEGUcz8xD8hHUSnut72VSqSXeDd8xummia8G35PLWC6yPoUoss3TQQh98spW6ci2wtU2YdEuBNUmSSn",
  "key3": "4PttnSmfAYoP3zERL8nVUQFeGHeUdVffnKEz4B9gSwJo12hrLENDyxiDcF7EZBKiLk9eh2y2jdDxbpSvFVfxyffu",
  "key4": "3MszovtryyUzMMyLbjzPv4w1mzrMwWEBgxWq4oiU2QqTkrb5Wf3Bhe2XeeQPtC14CisuedxyHGdKAVpTfU4J7bgX",
  "key5": "2YQjNMZzVHMFtZzbYdchiLTWN3aRDM72VWg1PggNLTyQqSQEr1ux2Qo5Ej29kpjjVTSXDeaZcwXD171e8bHkMCmV",
  "key6": "2BwdAvXCQiRvJCY9VEYD4DWx4VEpxUC481hqWtUr2rVy4tqvR3XafZqGopyVrAzKzoyZsXFJzmRmdmA8mVB3gasQ",
  "key7": "Hmexg2KxyRc88ZCuaNaLgtmZcZTSHFZnmj8BKpbK33iv9oFEwgF5Ftbszmzo5mDuaBDBvbUPim34VPybmCVBr3U",
  "key8": "gopcsWaf22mb5EBpNnYuERZEzFggHVbRf3wfPzWQUxQTsNKzeCEKo7kWwM726Kmxqfpd75tcEWT7yYCxYrF1ECS",
  "key9": "3PLJz8Ph1bfTQtN2WHddjSFjpZiqiFzghvmC5oBPY4jJq9rs4Qwr3fkfBLZFA4pd6nQNHPhZArTo3aV9SGStj3rx",
  "key10": "krKGdJ1Ka4BX6ZJidxEyBk1j7oSwzrwzAPJBHLQcVNgWhu9Hrx4DaobfQZJe97YLB2MFn4iodQoiu2EiLLZjcRu",
  "key11": "3nFi6sg9aENBavGaCLJTEWQ58iteE4enSYRYgm4oqPFMqg18eEdfdnMnr3BiPKyNPF5vV1VfLj4wKa7ZWL8wR4iX",
  "key12": "5fG6wAYVhsHufVn4zFFdmNSR5rht3BbjeH83gCKkyR2d3osC8VN7ZZZzv6ftismLxQsHMGX3xXairJr7gvFrJgsV",
  "key13": "5ekNaB1vXqDWoCoV9ZH9ufruiJ4brCyEcuGT9Pp3TKRtk353ADjfjQ1UuunYoJdVMkGao2XTSUqmAnt7bqQemJDz",
  "key14": "dqQ9Zv4AwijQm78HVnbT3HUv4v6cVDWPFmp35PLx5YxH1Xu1QRVbB8x3CdFURrW5vauubkrySus7yA8ufusAjcd",
  "key15": "41QnfE1PnE9ypwDRMdjnsZc82sXwEGQgjUPV9ijeBwXZMnxBWkFjfX4LN9L4anMzeTC7uagJvYu4B8ftHALjKode",
  "key16": "2LYeaJ7xY1KFezJqHcaowX2kfFvk59sTcBEY7jkFXHvnXxK8jtFdAHPzHuM1vYktgeMYBhrduWTM3okoo3CaC9Qk",
  "key17": "37qXQaM64VmSCsVMuQLMrgx3Ntjv9sAicmAEFWytUiFaPyrYsSFVyyLscuMxHoELmKCeCXpiVNKg4bYU74ZYw9Tc",
  "key18": "5Sm53naDrr5vEra9bCj31nN26T6eddN62KaMNa9bwes3ui46FUgkY2frQy9NVcpv3rfrbQgSbNuzpXx7wpzVZyV7",
  "key19": "84EkfrALG4WSjZZyQpW2Jy5wej7KYQ3YRKJxDZ8PLyLmK2FXfmmj8GfYKJsQugvum5hJz5DEoV3qmZMa5gWL1Ry",
  "key20": "5z81WgcWFcUdML2qcdL1RSN2EjpqhbSrmfhG7PJpzMJeSHNQSn4d4dVGpobMLuydc4MzvTDWTtKwuwSc4XzDcCC8",
  "key21": "86XTKGvq47QPYVkd3HzfE3fXZKBPTuuzZLKsNngqLYhgHbHd24b3iTsmx8vrLnHL37G4fBnTJMFZZvYcay8ERAk",
  "key22": "3CWoHhKFiAkqpBCiqyDMpv82RNWw3bozTsBna2a52WeZvgSo4PNb6F5goT8uNgvnsJ8TGkxPH5Pj3BK4hSwgM2Tx",
  "key23": "47MKP5sEEwqxQuKr46pu5FPzszdWyMGzgZVtg9HqictWQuoioQ9kHLnsJ7iLCBRS7gJFrhxAthPwLwJGPQvRHo8g",
  "key24": "33jwuTvhMXPZ15Z3iwvEUxdktFwrvzEGPLnN7e66u8mrnYsQsfGjXEzJZ2UVvjdpWS6qBKdhgNvnY5BhWxjapxcw",
  "key25": "3E29xahHRYREyQgbiSfFUVrUYQQ7z4H194185q6w259Vo1ZzUYh9HLa2Bs9YdmjE9WceLzqCufyRXNNy3B5K8fvd",
  "key26": "4BP7aB58EuTckytL7n2zY67G5sX2hg1byJLLH1LDNoxXWYHfHopgzQsUoVMjkUw8dQQ5Qbdex9R1eUizuhhTnXAP",
  "key27": "KJUFGwKHxGWzQkZVAVf3eFNFMBTAfCmkEu7992bXwpSBVduinSw51CL2gNXcKSREdyvaQRBuYEEBEhgHPAoz4nL",
  "key28": "5vY8cV6Vn1wG8g6NFivyaK8K6xFKqTbXSfJG4XXR25fGQDWcvwfyCr2LDUVVF28vZsum6Z7BfQy9qE588EiSwkMv",
  "key29": "3fkHJCA57MFRXa627HrfuKkCRS5z2bUpcrL3inouQJr7fgWqBj8UVWAQdoN3SsMeav4gCF8g3Bsm7jgNDMeioAjZ",
  "key30": "5x3PmT6kmHC6bMuYa4WM6pwNDVfNQNW7oxSbjDbAyBdq2aPc3SBA2wGtHdpFQ9CBj31kgL2AataS1Mj85HdXTXcK",
  "key31": "5GhQDy9ejvofgYhVJhP2J4CooAgaf6P7a8Ch9D8Locr9MRkXqNGvRHdpxYRqHdVwsDoddeeJ6XEc8G3MHdU95sHJ",
  "key32": "3KvUYfY9tEe9zAjp1EbjC6E1UyVNrPz6UwaNrrmD3iEF5GMV84DrwhFn9LnosQD329ptbXCNWrCKmFxB9inSQj2G",
  "key33": "eXzEZ5rs8zMrWzz1W8VU3pdR4FcgGfJ6ytNGVy1aPCrifKrhqSaeXTNJavc4AvSkwru7a1XA5nSR8SDbRtRXgm7",
  "key34": "2oJoMkUh8W3N8QEowfcDPzWMK9u58fcYzycc5mKXtwwhq42SZ1JoeM3hS7ppzLhsc2CWbPXcgMK1DYUSwE81MGFe",
  "key35": "YA8J2M7M15aeZrZXBKYDAMXizAEHLUCQM7ud254wzgBtDd6MZLyWbxFzV4ntxSnUrXNXDrQWZYJVw5CJ2FKSSAi",
  "key36": "5DuA9aALQx1Pa981mtmYtLRDU8yNierHde39xvjqbsmhBk9wC7QncAjdSKydSratiBNyW1j2PQ8cZHH7eH7r6iJk",
  "key37": "522gUyXXH79ARDgFcopncWGNK2i12KoBzj96GASpnbkuZkb4G2WFN6bdhR7heBqpkqX5GKmLMaYwKwgNwZnpz187",
  "key38": "3MV7FzA1hwuQ4kM19on97BVSCxbcNZ3Fgc4CLYb4jvjanTYfybHba29RgUG8vNn3tZyDuNiqeyNU31ASqKThWAci",
  "key39": "5fjpMHLYwRwtVdeZnPj5nbdqTZhaCxArzvzXFEhgieB7ymJeRNJQQii6fe4XpirhW3qjA1mdmgMdhFxN6FmvrBRH",
  "key40": "4gtjXQDevePoiJUa97Lswv6em8XwtYwiQC1TQrD4NKg9hZAUjeBXDa8HnEm43ZDbX2Pu2YrK7hvgtZf71YPdrGAy"
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
