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
    "5kCR9Ma1U5tCBz7v8CuvjkbtXmEM18HZWPi6FRiJmqW7VSHTwg3ghaa9fnbmARGCbY99nSiQejsGdcoHr98Cz7NF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4brJD72YC4MxzQPPxNCShexNBKT4yY8LTf3uuCB7k98xmqWMS9FY2PS89AnYM6jVzcg23hBWpJZWzmqnPst1V8N1",
  "key1": "3yvjZT2pciaumHhSX9umdbPxTjZdwHJxT5gPEDDCWbmwf2bkBTRcotfRV4bdujmdy8RntvpGMXyMgA714vX4voSS",
  "key2": "4xt224tGiEVjmhmuHkozDuSikGUVcADCJYpE67YEuXBpfmdAxPq4c7ahP8V9PD5MbDDFFxGswhF6v89CpXDcgK14",
  "key3": "2hz2V4Ct4cGfYRrHCy68a9JExF5CSNw3Qm25mXgAYb3awa99EF7ZUuXhhEkhFL7SesNoQB7j9be4VmfV1pWjk6M1",
  "key4": "3hgfn2GApnaYfb53UTqjQ9GZdLQkaiZj39YBJpUJUWMY1Q2d2JZcTrzHU5M2Hi6CdKMPPyzT6MuPx2vPBtARdz1v",
  "key5": "3m8SSSgaLawD23WEYye8wp2XaaVAdbANBf44tKEfAmFY6QikEGdxmm9qBF8YKfYaX4QAraBQLtXz27dpbSfsXDSE",
  "key6": "3dK7r1oJfNyDARZsZVUhz6sQP9eheXGd7FW6rxskMa8LcH1zCL8F83EpdFWaMUwafxEfC4ATBbs8yegQ6esNmmUC",
  "key7": "27Kwr2aXCnj51zQfY4zJJPQaeNbZCtKLR8J9W75KawyjJZntQxg12MiSq4wLrX1kwg4TrQtQnbfac4egN5LRR5Uo",
  "key8": "2MHq9YoPFg849wyKYiCEfigUnqvDZioPQiJNGXWvC7dWxk3JzFuZoX5FoHumYRuB5MsBqaFHz2Ci5akRXgJqFj32",
  "key9": "51mSnQoPqfytnXrMDqGjvQ3UkYfxGLweSktra3f2Lge14g6AMVeJ38sk8N4GNCwTAgDasyvWnVBKLMWJKG6weS1f",
  "key10": "4zQcBY2VggyhShxL9UpB8Mewxb2gCG22zjLc8THriioMwV8VTsMqKdTanUhVySr68guGAEnj7cUXnNUnQTRprq5f",
  "key11": "4yh3AN6K2ArHHQ7fiEguurPNefAi5pY4bm5wgLNHMp41daJFYs9nXcCRwadQqviUUPg1E2hHPjBscb7cvroD13Hz",
  "key12": "2VfHeEx9QiC71Bi5c1iCDhro2R5tkDsMmHuSHDUQzziqrXCYu9AF1xfSEgZXs9axQDR1HpfvA7YrkYRZba2YVcsj",
  "key13": "2ZPyFwpJAw6nzBfMcwdnNAMwC7vxPDCLgxuUkEa7FkYT8ADsDnA89XQTsT4rbj2E1MTZPeutDkBCYR29uFxzLC4n",
  "key14": "4zfnVGYJuNwfEfnL9tpD5VV5U5P8tLqpwwKhgNW4QZuh4AFyfnSY2LsWLZWkKF38foL55WPsZvaj9zRstpsSHZrV",
  "key15": "28XfSZssNB4vhdtQHTL4wQKDZg6RZU71Edk8nNGXmzCg5hQ3azx6BsEHZcfAWLaya219FrbUvmJq1HfNJck6jmR5",
  "key16": "3xKAggY58gc9iyfA99GSUSLp2Z6nttgpmv32KJoyoEootYVjj7ea9fMbnco6iKZDsnX1xNscF2kQG3UcThBxgYHJ",
  "key17": "1xgYzRmPAw1FAHchZoYHcqUjkP71bWZ4Ygdyx4EA1gokE9Q9HBYLbjp1M7VLtdS6DgMpS9qtzdrE7UpM42EWNJZ",
  "key18": "3Aq87Ah2qZ9jEEumCZMoPhXnmf18s8LmEiDVEq2bb3SS5FqC1w2zAYJbHn2xZeJCE6zRXCQcF1fAhJathuR7rXCJ",
  "key19": "66augZY6Dr1FTAHqfZ3btUWRk9ZXRY1UWKCExoyTpPKL6t8rWewHaHj7N6C7ZiMfYuhN5RapPhnXGTa3C3CiJvdp",
  "key20": "4DxiKMraiP6VGCXmvi6yf8jYY6qJo9gePZrmeMu9sXaUMPUvEMt19W7LFZ7DxYXVrpEStJhz5XDmTzkRNi1wQgyd",
  "key21": "C4ccV1kbUUd1ZWhVJwaKJCyGuQkY47LfDh97nzJ4DH7ttMbVCXdGei3FqPjAWN5579c16fLnm5M7XbwZhoSCRUp",
  "key22": "5BNdmGXEsq7PBgM32iU1QPMHrqyfxRGCTqP7s95QBmmFGhbLK997A3wLtPdbhW7ZmpC2S21LPioVojv78cq6PV1N",
  "key23": "4VVZLjvu7EDCjUwqX5D4wB1srLgSspvnh6p2tiB9todYt2uGgwdnGByKMXSu3uw5dFYuYWCdeJYc58mr6Zeh9HYQ",
  "key24": "4pJ9ckAw4WdP6UoRuM4ZJi2Y4Wj164ZcwdPRSLXq9G2W6oA9p7H9psUBFe5gRTmbHHjVekiJeFxJMzWFyePUmZ9S",
  "key25": "64Y8hBaaMUpu2hWiUwvxVjRKFqTW8FUqLkjnmriJbdkthq9PEsojVHS9akQ5gCoaCTyp9GNu9yRfkedM7S582UWw",
  "key26": "4SeWzCWtfmLcVGiuei9Mwtz6AwiMYWeu5xGNCfifX7ZRgnLa4oAUEKT41SKQNnZ3us1wCRbw597wfushmotnVk4r",
  "key27": "3dD7RXHgfUVQbqqBd6uy5CHiM8saSmVanBGsWqU5sKbvtPaFtEeNZgnYFQGjmkqcrpqeosodBvo6ASK2LjLJ9t2p",
  "key28": "4D6HZMcFbuPV4CLZXnnoX78TdW8FfgtK3MDLvVnYCGTDLw8mi1i1APQ1eBCGauxT3mwMqDMsbqKUG3jyBpM8EWF8",
  "key29": "2aXfRmVhjJt4GQ2ZRtzA27bWjj2jW796yziFJmWV2pvXzc27hDVZYdmLCNxz4cugu7qYWQvZDCMa7VHyaahvfmRo",
  "key30": "8BXAgTHvCz2EoqU87AcheyQnZ3smAJD93AZBfUdN1CEPpSsFzZwLFtocsEwaYecGrjLtbBjNwyG5nzpWVGCfrKK",
  "key31": "2UQiS83qyy1tD5nEqdi2GzJgC6WdqeyQDm8fsN68z2Gh79vcjkUu9qmMHrYWxNTM8zpmpr1LuFHhJ9kd8bZKDUwf",
  "key32": "gDzC5vvi2KSdCzpUm2njLCLHhEa8PbmQbcNc52uJpdVGjqBwmAk7zeoik6Zioq1Lcu82ekuvXQQYfxE3HkZVyF8",
  "key33": "5cvnaszczAR59eKAFwFB3Amp6tHWdXGkifRrgQmyPeKW6um42bua22qmJUgeP14qQpJhPaXV6ruW1mP7GMbPrMqk",
  "key34": "2mkTFdEN814gMQ3ebzP7eNHmfTbGR9pdcqdsJZMdsGVqEQgSB1UMUzwuar26nGMXCNMphCBhgASnDWG9cYq7eaGU",
  "key35": "yjZfM74EEdJG7KDgoy4RBmxDtV2z727Z6kjb21jEbqwpaFJmSB3u9G1GFrgeezzZgr7FDNBt8zrNSFLeSykZqhJ",
  "key36": "2KdC9pjqq2P7opBSALvWw6mYZRN2uNCSmUdhczr7Lt6Yr9JBAWrdBybEadw3F5UZuMZmoArCYGArTYrVNMcMqY9z",
  "key37": "21GUqvw8ApnBWvcdEPKgjzPS6DnJL6nwfiqY4VhL7kXa27vHCB93DBtYnvi7q8VutNMP8ZJSHAp9qPDAxyAAH7tL",
  "key38": "37C1hZVEYHQRiNNbQzdvAoPAgTJHPEDGgVZji7jH5kHjGTjT3hGJJ7g45iBXQRysth6TSNJQzZWJL8tWnHM2P1K3",
  "key39": "3GCDfjrSnq2dqCSe2WRg4mHg9qeG9Kg9d99jaiFuinvPmza8K36K1BJdmBiWiNYdiST4vbraxRTo8KnjzeigeHZb",
  "key40": "3TQw7yfH9ocDPXZC6KGevRtXCdbiBpQmpxzckWLHbYc6x2dtNdB8DYgsnMtuu1HwRsbLoLhpowKB1nM5y58DFifg",
  "key41": "3LEWgAqcX8qN6cgExziDSKWNV8urv3FiFGFYti7Gd2pPNU2dyHNrYkkMfnxKaKJJUeyPcjncthFDnLdHRBVXiuRz",
  "key42": "4e7oz51kFZD1Mg9L1uNQmenLdkaeeoHvtaH8ovSRbdRMAQkFd95YJt9WigC6F11U6EuNznzRKRQHogLCTymUU3Ao",
  "key43": "4zWnk4rCGq8sX4WCAQtoEAkSYd47yWDW5Zvhf99L5iAEYdciXam1Jxs52Peqx5rQibCAWmd3aMNjwrHTzYE1SQdT",
  "key44": "585C5dpJ87v1RwHt83TNtLh6kHJsCXvQeBirvdHEcVrSwC2F5QsZtqeVcgHQkkaJaVWviP5Qo8gwWhQiRv5TABvM"
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
