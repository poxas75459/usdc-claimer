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
    "2Yzm47FcQsxvPPCKyQBtw4XeSBvUQF6AAHZNGTaHaGPQge4eXyM6VNGd5HYBHdqNgFtDJYCFnPeg1Z69uMdCoY8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2inxjzVQzihoUaUf3G5Df2egQqd9bAqLc9Uwse8AopbzvNNnS8v5hKfHAYQ6mH84dPvuovsoLjuifk4DAajG8orh",
  "key1": "AY75SZs8x8jEUHzzJ8kye7VK8oNSWfLjurqmjcNDwBpnXXh8Jwk4PC6fnmvEJRRc8mygQJCqyH8F9MeKnjxJZm3",
  "key2": "1bh1Tacd9JcZQ9HLztdVfNwxdiesyrAY1UBcW1KNYNwWpDG7TA1tKjwQHav2BjX5vGqytVLgoPT18TZN3kuiU7v",
  "key3": "VB4WpfKaFnnb9wzw597wSsaJJwwm2vUq9KERGePd1SV5bMnHpb3BcUo3orSgXo727k4XhpkX8BuK8caGq6v8WmW",
  "key4": "NCFMkRKfEevTrAVHTDpnMUdsAJXSWUDym8p39qhrojp4udQtsj8aRoGe32dVG1MyegDgWzBQ6esWCUDjGPP3azu",
  "key5": "4skpH8CJqYFNt2PaicNFsgzdGLGvvzugUFkBNeG1BqzRMwmqiUaqTzaPgmi8729GHEhEsFcQBRE4qR3ZBd7PNwk8",
  "key6": "Ca71QJAJtvCgiYRPahyD8aMdTDaMCPb2vyaSLcZV2EJWgqxPBmh5Gt6sxNFpfRtRNk3XqnBrwZprPp8gGaGejqB",
  "key7": "2EjhryCXSuuPmrUKgVxSwxCqbmgftt325e8iGr34fKzfZDMm4NPmYPKWagHdpFgrGM8QqCJHKWRM8sYtDy5idgbb",
  "key8": "4HN6jU64LY7rKXBn2sUAUJzdvoFGbT8ffG67hXSg8pKrwRD6YQePgNRPgJHBrNyzPqXnjmta1CYM83LgxRUfoznV",
  "key9": "U5bhdAz5nYne9G7RyQenvoSZxW4PA875musQueHMxkJz8GqcFYjDhh5FnBMZxK5LFmmYXRsvCsQdc8qDkqWLhuv",
  "key10": "h3bPFMDG6XjKbg1JKVTVzSWVPS5LCGREMg33a5MysJTaYb6PaK8BQrQEiExuaaqLZx8xJQ5J5vzo9KphcyHcd4M",
  "key11": "2LcPSBXTrmWwtDKVzns6geSSohpmQtVdf7MhLpTaA49utPtpuJrf94YjF6po7utXPot6CrVwGpeYfHhb9TSxFwT2",
  "key12": "22Jw2kawYYVHGWkpwG64RsGQFn2nqaUte3tsnYAxDs6amiqrw2TL4uBB5erLCswBuaWQXqvKhG4dxmrTaCX5mWt2",
  "key13": "23NZU6dfLQo7vCnBJQQBA7ksayoBfAyQgBVbFL37nmKATScSnq1B64kRELSjpMArxUWjiRhyz5z16w2WWLHnJPFY",
  "key14": "54RQnpFkhAerRDPWAbYukXjqZ4uaq5G6wdFmqs1s6PurEpd2RwPXDTmP3bZzvrqgS9MizDSUGthciHBsS8LiQZNH",
  "key15": "3vGs2ptq1ZzBPL6hJyyB3RTwrH4Xwq1KY1C2E2mwQQoEdfc6KB9c7f3Rstb9XZi9vHQkZPgM7BCUUgx4jAPsV52D",
  "key16": "2NdEJdbvXzDGK35QKaYVFNKb4JrtnsdRx9DmJFVzEsWpriT3CtJ6wea2vfs8BJXxncwSjXRyqeeZXzxLQuTgvz1S",
  "key17": "51j1Fe6q2DSwLB6XcPL6jj1epWi8PKimJY71NGHRiLCH2mG7bPwcX4RXdXDJgYbmcrbDjfSWaqWaB18xrgAqyX2M",
  "key18": "2ANJVjE48x6yKhhDCzWNAn8mWsCW9W5nTMcdVMyudMGjbp6nBkeujae6sNfRosiRFzpJNRhRLUhibrTq1bto9Bia",
  "key19": "3usTUiRNYtChsrHaDKGfmBgFQJawVTJNJoM8b5CMyi56kqq5tYPoDH32biG4fgyQZs7RA1uBJPW9y9Mr23DC4c7a",
  "key20": "5CBjn1dSoiu5TL6z5TAZhZhSbCyvQ7T78XfJGoKRWSCojy5ohnYWLpDvYgugR31baPgpymviQg3cEBFefmm4KcW5",
  "key21": "45rWqp9MVaoGdoNDMQFuSeQuZA9RPEo29aRsX1PKnsomf9N32kVvS61j2qSxBtd1dt4tWZwiRi6xDhsHpNDNiv4k",
  "key22": "34skcb5xYHEPyHLyNqE3zxqeHtstL1tXzfhnRjkQkfqZEEYVjHMRAXNb8yvwjqiMXQz9MWxuA8mCTLWGpBfUASST",
  "key23": "5z6at7yzsHLWFUCyLVe4ffeRg5kS9yVJJ1pa6gTFGTzG49E6PSSCDR8ZCM8cBeTLehn1x9uy58ctkTnykq87P5N9",
  "key24": "3caRyAUMAv6NzmjRR9rC3aVjqNBtRDKGfq58XNHzCGd6P4wZYCmCFQHMci2nVwi6w3gUigJZHbkSGwq7z8ovtCzZ",
  "key25": "2R81GazuCiraRy9ytLnowxy3AGHkkLHQ6HFjeTugfpX3Ziiwp8FJGK3TNAaMv9PSPoAwrKRhEzGm7voPVpqkBWRG",
  "key26": "536skADJviohQrrQtMABRDPpjNMM6TdSSj6jUWmXweaJpqyQyZQDdguzXjaa6hw1SoNGKU6osMaFSCdNubPwMznk",
  "key27": "25ty9xaxKzGAQRfFAVDiumCu3RNV7TZqPJSTk8dbKCyrnqvCN3u62DoBxDkXZT7hYvCUvgqC9D3QY9T13gUN8Szm",
  "key28": "4p4uQPoFP7FMGuMMHVoFZn6UK6oL6zaAQjjWtZdtqy9a6sr4sPx2WfwJ89ASgArax31KCpFb7aVb4dPuvAFdZzn7",
  "key29": "4ZurkPW5VQ5FX7pxmaoonxH5FG5SiuZvSALrqGV4JBsEEMDSMcbNN29Y8kZoHgfAtiRpa8SbxuVU7fF3G7SHTB6h",
  "key30": "2kE3VhX9VvL5Vbu2DCT9nxWsMW4twaqWLepmM1a2y7qzSi3ERKcZS41fJtGycoZHRBuo1nabxsGuFsxoH2FvFurZ",
  "key31": "4C1PzZPr9LNxPQbodT12BGks2A7kZZrzFPkvrQHxxx2hhEmKEGcqfMZHJ8AYCeJXQaSBtEjBsuSg3Mq8sF2CQz3Y",
  "key32": "2wibQmNXioVaPxY3jFjZBcCj4aUcZSVUANBLUDofUMHRpWwBZHuSBksZQWGxuHcj3AipZufZ2TyxKHTEr533Tgwo",
  "key33": "2cptQfbqZk97U2nLyTeYgg8aRGi2qVugvwfDC2WWpd4Zg8bQqtW1rDMLoJjixz1ESwmpupnD66uPgZP1ZRRvJQyD",
  "key34": "s8vJWCayRnJK3oaDbnP512niLxLK9eL7uV6yPrVLG1sB7txzQmJvV4JVaXSfLrgutrgFfdUdVRzeasdYBTu999C",
  "key35": "2FQKtQo2Maq6aXqmyg4SbhqrFrbdCjqkTW1T1oVkjqToE32FYj78DX1XzgYdDTa837gXvRaDLrfi2baprhMzw9S1",
  "key36": "5hN5RcmK7zK2kqZw3veYaWQ4nvW2BsUz1JiQop6o4H9HEhySmhjmUFKhuPMY9UCvb2o5bfX3b7ouNkp5q8FaZCK2"
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
