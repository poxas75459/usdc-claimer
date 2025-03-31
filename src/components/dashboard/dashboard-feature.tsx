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
    "5qPQnUkzxBA2rJcQTsUuFC9n8rbXEvqdBKwjyvGUXkeDiGeYn5zE7L81ZJempZ69c6q3bkVQJpDKMfy97sw2sTky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gxnevZ1oejeC32gMxEGiM6Xv7DQSzVnwgqQGERtreSuKzzVWVFW9VtEHZ6WajDwZRCrRCuxTxkqc8gjppbeQwa2",
  "key1": "52EfKdaYUkpLi68qG9ED2D7NhmvH1EJvjpsvbteZdFgaf43E2PnxQFdftayvqz5AfYKYLuWKKdJ6hkc891Zhr1Zo",
  "key2": "4cLLFqkn3gdHzcbC57J8iLLqMjpZwMpvgBs9bEcUctW1rMav6AmN69mZJ8y5Dad2SQaXPPtFtqBnknbPDFZRqFAs",
  "key3": "5ryHaS19xy1brdxqLsNckFpvFHz5Q5m9HY61oBsoFMU13cMA3C8R64fuUwagWngW78cZR7aSsbEKQXpqwvwkyDGk",
  "key4": "3Pq6zQKsd9zKgbJyfeYWZpWBdi58RegZpXCMdo6jVi4wrmBqdYnC7M47ApRa6169sNp1GuZcvhRbKYjzBuQHdtuz",
  "key5": "5XrXGwPtCYp1aXpepfqSQhnRxFczZE2xzUQfXrHZdUhiPwrz6RXuKKbrJ46KuRg2qdzHJRfLwvsBmFUAxRKeLzcK",
  "key6": "2KGh5d7VsGfkvLthGCwRmMKQgM58ercPk7rxoiiH9g4Fe3DrvBdjxJRKN8NSUPZFCzriytJn6RxkSf4V6CzCH3Hk",
  "key7": "aYefhkZeX7Ay7NbnwSnuWtWCViYrtP56jCUgbBHrXePyDm4SToDhfMLMWaW5SYAU6c7o15Nk9D4fAfzbAMXSrEF",
  "key8": "5MLsZzsoa4gWSQDypVYjuAKChKqYbs7pYVk5NuWqrYzfUDPhTe8tWUrEf7ZSmKiwU8PsBUWbmZFk9t2uDxcSv5vs",
  "key9": "5teUdPSffwfJijqCe5SxVKyiatQM2XQfEgVLGZncWQpwM1KvX2q3M5b4JcyLE9tWfms2K6QH1tSBbZroNXnrEmxF",
  "key10": "5ufJdSHhDonRRj1eGFJ41VqagLmzByzqGtGmtrKPDBu9JGwU8LvKAFoVMwvh8yuE1CaZqka4xz122a7BjPncVSSB",
  "key11": "4F3ToDryfyaSDZVrYr5RQg44Ec9keNy6ktqH4Fhsif8tX42iym4jbyxQe6vjA8s34Qwru2R5PGpR5Vg39zChDq1d",
  "key12": "V1dF49CZuMYuG2g4QxuDX4kb9pgiTJW5VkLtF32U1tzdkVzoWXNaSVJL8wgZZHLqSmZ72Qkq4nX5gRsyQBf5ud8",
  "key13": "2P1tbxLzD8MMqs8h6orAuTQzfi2QSdrM3as836T8tVArtmBv4jY6rCGvbFjx3uDEWCfSGTq72whgehaRWcdph4At",
  "key14": "XE9gSGztX1wgvvjUGkk5SX46GoXwrQjbHqNQV1VbgAVEzWanWQvC357ZRGJydnnQ9AoXgTu59sjcHQweKmLEnkS",
  "key15": "ESDcXMaG3NB6mMHvSxgzxg49Rfeo94Jjsrdxp2dnpcS7SV3FTgkB6rWRF7gLQEPWdxB5iGFYMmxBAF3qCc4njC6",
  "key16": "8owr3APR2u2Rt2B5icY5QntszCTNu5pJmzUTgUaC1wPwA2Vq1JQ1KK2jQrFx94rgAeM9QhnDKZoDQdoNCAee22b",
  "key17": "4NkoKp61dUXeVTXYMNUPUpBfRuxz5uRhPaAoUDXFbsjUtkDJYkKZTr6haoETXfo24s5L4ZmxLMJq2Yvpc6qwL43m",
  "key18": "3x54m6L2NwugmoqCGzktsUuxVx5YduEZLBXPfscy8Ch4gbPFReUXP3K6nv77WaGNMrERTZp1tpy2hezGRKCjNAMD",
  "key19": "44MFBm7iZuceH9NAqVskXeNY8MuJYT3Q4Rv7Lk1GdkvzT4BteF1o1PjgbYKMHVEKoafGEA1JsJKHdfeuSUKxw9tE",
  "key20": "4MSrFMLdbfsQg7HVpH67LeV6dHdFDNpPQd17cW9fQpKmdBRok1rhDtHnRrSsKTyD4WB9xV6gpVrGhXdwaN8hzpsb",
  "key21": "4gfTeaZ1UTyqLDNFTFtMT19cUmHrEMQNNqG54nnPoCbzsuK5F7E9L5xfaERHZxNdPmY6z9UCKMvrEHuq9oedw9Md",
  "key22": "MUu8Qaig9kqgzmmVvLCpxFcLfhnAUvoCtqjeq4ddNQyREJD59yCx4yJ2nkdeCAPCwpsKtudjsu42sE51qSiw9qG",
  "key23": "3xfd382jPtcdBdHARa8VZg6NCKk6C3mQJ9DqrdgiKP4GEXHfDqmcp8PnxdVbi6iddv6t4wR9MtFGJTkmx9kKUzQ8",
  "key24": "3aVpeegQbnb11RugSabiCbJcmz5JL5wnp1m16GvcKhewmixWaii1x137KBKu2uEnrXz56AKsism66GWPL471dWRP",
  "key25": "42f9Bscm4mgUv8FqKhgJTbX3w8emBNsYizCeaKArTE3nHTfMpPCJysjHf4dyUEfxq2uAEo6qVgtEyozujw6K8BaT",
  "key26": "2b1Pf83YDN7YWgaG49KCJPqj4Fx3vdbCE8wXQ4secNEi6i7A8HsyYw42dRNWoFuPKPPi8LBecGKCkJC2Bg3Sw9xe",
  "key27": "ZnYsXLtgfXxpy2yoMfduHZt7HpnE3PLFiwC1CWyBkkLQhJFyUd7rjuCwVyiKaD2mSVfbAAoB2W6UEQE67hNqVyC",
  "key28": "4a7DiFVjLvdNAQrrjX3uMg9LxxqymiwtnZEiPKKBpNE4owBiixfdMoB75twNM57LAV8MV6AYr4MgLHoSxqtuZiYV",
  "key29": "3ib3QyTPbjF2w4GLEfqx26LUXjPrsfrPUSTzwhFZdtycp6DJcQKmBQVMYGgjGCyqt4d6KC61MJu5KyN7cP5fi6XU",
  "key30": "4uj2L6poezV6xJnhg9gE9DjQ8oNucvt2SPnD7qujiBw82Eeowpv96E5WfEyn3ByVFBCXCrfCGXWT1CS8EL7BKXhq",
  "key31": "2adutvKVXLDHFs6v7PoSsdAdnNhXM5i85UENLZEt2FjUkARdnZNvLQCqkBDMb9kxZ1oHNJtmAeXcMpKaRWSQe8bF",
  "key32": "3Lj1i4JWtW2TtBQhNKE7DFeE9zPLtawMSrFHdTFBssmMWLU7Z8PqU4RA2MEcFJwR8StihYRJ6fBtYNjU3W2vVbxh",
  "key33": "4TEwh3dvo5i5iH5SAftUqb7aJP6MVTo4HAn3X3fn3GEnrKsNb9fWLaEGiuGtJANjRZ6LQouuDSxUDKkvHAAskdnT",
  "key34": "2FPPjcNLX62cfbVt7FEYAJcqkss644JD613jdVqPGaHF8qjbr8mkaib3DUbX8im4TZjJtv3ef1gWJL5ofAYF2fwz",
  "key35": "5HbwzWFGrzHsU35Gz4oNxdrMLtrajBSRUwkDLF6tn2ZUhy4ik1o2n1kKjvKrzVGM1kNEBFGBxQCGoSd9A6xUTDWQ",
  "key36": "2LuQ3E3aoqV8651kn1faLLw6y4Q8oVXv4f7EH5Z7ULqMAPQJAYCgYH6Wfki6cBLr8eurpnjeknWsxZSpjC6jVJAn",
  "key37": "29CrvoJZhJHxhQGRQRjWw3sftymBJCAcKCn5fV35FHzD2C7ygW1BfRShx5vbU8hvn83T3drQDh7P6oyaAQPRnED8",
  "key38": "4VnQThhCmg9jVibvorSfwtY7tD3FB88PJaGiPJ9YuENegCdQ7dH4BPvFxwRRajo2GVbFKPZwLDUeJhtAioLPBRvv",
  "key39": "28aQv8RC7t5zZBvvpon9jdr7XU6TWod2D83CHCz89WRM9X5Jc2KsmWm3vvu5Tf6e3M8PdUUD3dudLrBdYn99Jw8H"
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
