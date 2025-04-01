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
    "4r2d7QSfVL4x5CnjYSmLCzqVtnMMUQjeVPMEAVYiYUnmpT9bM5PB38qQwWhBakvkMx9QJfdsvKkNjg5GrqRJCSP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25dTVPfXH9BYSuRemjDtFvWiouicNkDUVDkjkMmckK8gjkjbbKFGwNy5AXPwCcnLvroajVrK3BY3e6N3gjGLmaYN",
  "key1": "jm4E3xjy5mdPu2beZT2F1oWTsgHSXzmRqjvHzbHjxVhoeFeKev59RVs66PNFCJEHPpTJVU7Mgpt1y7UzG35GH4F",
  "key2": "5A2io74S6AKkpLGsJ5HGVEimdwNk6tYLugP4Mncqj5K34iGAB97hYs1tXGLaiYAdop1axpN3v4F3avUk2cAXticE",
  "key3": "3hHKVAkVqt7pzyETVdFKCTKT3y9Jq2MEhWXvAZJ5Bj6Qo94Y3nhHXEj9ER7ZSebjWDNFSHqyo6yGUSLBERJ16Qhx",
  "key4": "3PCEXqeojCQtKs2dhYa625WkAn9zSr9PfnPSBz2Un2DpwkncuAVnMdSVtnibb6sNcN9EwMYr4PZoZ7S9ihUQG4B3",
  "key5": "4S8bhMipaXjcj6fHU843NmF9RNx3mdAZu6EtB3WX2G83Fo5qPxY7oxTWMq7CgNXzWymsSDxmnRtFf6JapL6uR7ju",
  "key6": "2DCnZ6dtUwsdtYMV56r8ez2cCYhXKReqRzwCkgW6ysR5zct84rJfzGi6nXaM7uqVcGEJUjXwGxTawHuekDbJD8P1",
  "key7": "22cxJ6xeJRiLj4hQTEiUvJajnf2Fn6RWeuX29xsixoDmnsaMpATdYkHGZcAgFnE7ZmTvygkmR1qFSCxjuCoKkUXn",
  "key8": "3qi4UYx6gXCQc1A6GqhEcEXeNd8wKEUmE22TcrB72HpSeuh4HHRfeJiB91AgFiC97RG2Mg4T74NGsEuVe3eMHwZv",
  "key9": "5HpYzeuyUpV1DKVZa4JpRNi2AiAVtWpj7s4GjHYmfZ2d7hkyw4GY8xdFedcWt2Ve4Z4o2VAVyaeAcpoxqDgstUJg",
  "key10": "3qk3zheNj6uY1KwuyME1ZgC7xASfd7Ls4wvQoEs23WRDocCym7zL1AJpCsR5Ui2vwyesgbbFrF3WEDSUFwjMXHRq",
  "key11": "355BFV9K9sXHLCqi6dAj5vTXtLoE9wNhiE9UBqkKs59anZzP4VUdkP6QgxCdj3Cf7RMFV64LibRunF1jqDQ6k7JJ",
  "key12": "Z6XVJe4GVJXeTpMA6WXftsmwEeZNVddda8F5M35wUj7hAQbdptsFDNMVrXQ6QRgvdeXDFe41V5V3RUwW3ghfbjn",
  "key13": "2No6tejXqYdKVVBmW4yBaRQvw3CGJkgcASxyrRchS8xeCcGnaoPryDpDag1TT1umwWxPonMA13Aj1EeTVZq9khcx",
  "key14": "boGoBBxQpVUaoCBstzgcfZrzxhQ9MGYKJmErhWAuuVfuqy4QfQRWEpEit3daxPvnx8MavuE6Po63eK2PpAYFfux",
  "key15": "38YTECe1USzEEL2zu2raPsm2xsqHdB7FAKWbmfT91A68ZjEACmPzM31P7uZo3uDhdWNDDZMXAvQAzmMtSyXUnbrL",
  "key16": "3eXeFk48myBMGsafr5oLx7JMWbMbJBj3uqBL2TEeq3j7s869pTaP2vsTc7ddC875vzy9i4J44PwWEgiS9rNiZVoa",
  "key17": "3AXRHhbvb5fxbPHd7Ko5ZY5ExjjNrYRBw4nhtWkjkZSZP5guuSj9Jduitw82YmYx5kmzrf9ziF8HTTFXv3cRKf3o",
  "key18": "JyuxNHjwfCHtBdcUsa7ZwRsbkkTzu7P7HZjAaWB4XT1Kt7YYQbdSAt6GBR8ff99uKLnhFwvdvnWG7fPJVQh3EPz",
  "key19": "3vqi9eL6u6VWujH96fkBKRpFD7rga5hXV85E2J5LPW2zU8CcK9ZehhyezfZVPXW9uppMuf2e3Kyb5G3wGQvBobw8",
  "key20": "2DC4nm1U77QM1yVaBqCkdNa8CTGgmNrg1Tq8LsbY4H9K2aS4fsnn6vKfLqsWxZ5aYQhJZvcBgFwfRWANoL8FQC3v",
  "key21": "4iJgNU4yNHdL21DxRDyTC6eANPexuMrogvnXgkpcKiJt3x2jEsb6L7i2FMGUqsYggFdHharc45e9E7bS21mE2TzQ",
  "key22": "2PkHYpvvMV7hQF4JmjpWUjqrxNwLBf5rezkGgEExwiP8qAimK6WRdtzv63QX8qqJyWkFvZ5xfg6kLX4CxfhXwCPk",
  "key23": "2WvVEx3zq9L4mpBdSALCJwJ3JyayoW13ovmXqxufSH1WSRqKb5pSdU1GwG6C5ZGjfJC8s5gGdn62riWs8vt1Eaj9",
  "key24": "3GpHgKm3HN9nmJAxqkkwzedPvg63agXPCWZqomEFZjQnnSVMeXoYbTPTNf7RZsVTjuT9Yne9oF5bT4aJwzLSxbAG",
  "key25": "312b2T6HYTi6e5X8eXkh5RJkcFhSuACybTfX7injWYrhUaGPPDuv9eazsAfe3fbcAkNAJYg8mCmZax2Lq5NgPar3",
  "key26": "3zmmCpVmbWS4dxsG9NbDqR2ba3kprCn4DvHak2j9Roq23nhPFCCdwMk6AzBZCR9ViRPrvTndrPMv8Un2goJoknXm",
  "key27": "58Zu8nMnxSnB2VCWnm1jbqwPGQEg49ASgvL3PeqxB4wMuBiDqLAPLi8fNsAoV9dE8Yx1zoRiYF3b8b2FQWSTrLzR",
  "key28": "372n7gf8tPZk6xgE6F2h51xyPS5xPWKz6Yrp95GEZrk8zsES3tWEesbsQCVkSPsdDVmTKzAz7LVmZebrZkHj575M",
  "key29": "fdRjn4A5YumAqvwJDKFo3Ld2q9x4jRNo4U3UX9Mk7kVz4pStVtBWR2LsDUeYXC2nLCmNfQrjkNbLkqgL7JWycJX",
  "key30": "2M17qCVfeRjWAu9rVru2ovmWCm4ZKbSvDNnDuD1DB7EjDvywPQHGL4RcbL6LYy8QtrT5Fj9F7cdtkPAyesEY2hrx",
  "key31": "2EZweDqfAr2PQorLQFYaYu7JimfEThNN8k195E3GQcwefw99m17LgNpQRerfmc8sKcrjHXDGLZu2uPSjeBf8jTVe",
  "key32": "binAeE9GSm4gz8bwSDFVePoqAgRUgAwpLiJWDSCiHnYbiwEeN3641dG8QkKpxtsym61h4D3NLJuZQuUnuC3pDoK",
  "key33": "5jWgtWJLqLZBaHuV4w6xTi38oevka4Jfk4ooPUxgaoukLLmdCTw7ioZ4219BqfyJWUo8gJ6mhW4zGqCfo3nd4wQY",
  "key34": "5tNoSmaj5nQfmXXUQ69mU2vvtHamfmqLE7w2fTuaB2ai7iJtkbqk3fXMZLNpXbqTg7Esez8uLkG5sWpg8awWkb9f",
  "key35": "4w11Rar3cpbpLtEjngqWPRQk5Xp31h3S6iiUCFZy5yz8mVBxs69rBVWydqyKDiHMfZSveen6r6vc1kmRDUD4SsnL",
  "key36": "5SBJJb6SMJkJs7BUAFgpfSXEedAfrqJ53QZ6SVy4nPFCpbWJwaSLzHxorVjcrkieq2KebiVH6DrwF9rdGruoDNtB",
  "key37": "jFmrk3j2CcuKgVodBPb3djga7nihQKbV8v5TDXhfLNbPeHvrYkTgT5FgcaYe1oGmjT2AMmdpxsLqfe94RwJ6sdG",
  "key38": "5gRuimcBPBgerMUE2YdZVz2EfYvspr31mCS6eoCpQrZD9tdn7ce1iyZ3zTzjiJy3FPyyBb6gaywaydyEeSqaC1Kk",
  "key39": "43oPupLWcuq48aeaEkTVXoAAk3ZmKt6J4dvgdjv8VRrngtpbGY2fZu2ayb9KshsWKqKBtsS26qVCNZ2u1TSsJpMC",
  "key40": "4HDvNwar2HvjavFCfpJy9iDj9satoVq7wZP7yQK2MggdQyUBh2muHPfsCLZqY48Jf23GJrMAuzY88SmVhWDjTY1"
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
