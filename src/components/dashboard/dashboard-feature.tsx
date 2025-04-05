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
    "3nJbVyK3bVTP2GEYDwNSeu21Vaqg59A6r98kJxX3BWtqaEhrXF6eFmqJxrJ9denJjDW2L5giYPBVv8hovKpHTuCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RXJWjmwFAQcmndutDMutNKdpoeoaTVVBTAPMrJqCyjTJHoFpFCu54Cqe7vgkxvQzZMCoa2qCnA6U4zQZYVFAbrw",
  "key1": "4N1jKw8CUAFMiHjqdUDjbTA5srrvqNUkrdqYhscHJNkBD17dfDZcUQWXKGybvyFz9Nbm73YP29JggBKSftdwTdaM",
  "key2": "37fjvGRCrTQe68TMZbQQ6TUtPvcL17jvqQeCfq8AXqjQVsBSVXgFCfbSrVwBntZbn6GjUnxdjL9ftjHiJSzwSdPz",
  "key3": "P7qnPXMi13YUCexQf2PweJBWEyS2JEehCMLVqxJG5uSYXy21xT4BUFuHLCmdp7Etaxos9x2Nm7ZiL35oLrHjdrv",
  "key4": "3FB5FWYNSszCQshVh9mmPatrDr5oU9e7rUrHfqP1zxS1KywsUsspVtfsR7f7e8hnLyVtMdoj5JWntoiuRTtQ5eoA",
  "key5": "2iyBxG5mPP54SurmYXctH1owgoGnDiJD6a7yvV7Y7MZjPSqBoKxSb38xURnvwn8X6xUyGk5H464MoWXZ84yABJtz",
  "key6": "3qUMUpkgA9BMpVQY7kcFx9MGhsAcBtECQqSXbJF4p9xW2xXS1bYAAFtJBdmhAgoyg4qifqbqxKGcUFjGBvM1Ttdx",
  "key7": "2ooUXrnJQa3Kxy7Uecp6dkDHfSMYBdQNtykSzkECCb1fnBjGz2JYFkLnRfkQHBRF2gRPWsBxnYkUxb4BCsnwyTbc",
  "key8": "3f95xXP1KHrjcTdfUvk88sjQrY7iasNzzeVa9Ek7yEZVrUQtkkXuzaiTzdtRjRHni3ScdJDygJEUJmcPCZjsCcmf",
  "key9": "BE26xdKrxStCbJ6DrxuCTxbbTwTcv1wdk8X6dNknPXrwyW7DZZqJ5pP4XVR8ediWBBNT5pjcubgJHQgetxGyBHM",
  "key10": "42hoUNiAchSk4d6hVV8vPTZAwBaoGpPcamiQxWdHGmq17PRzv7FMRa2iKfY9MeMEa4twHgbq3ovZPnL5AYUSnWfG",
  "key11": "42G9o4kwveoBLhjPtEKr7tMUThCBU9DU4HjgvMBWwVXTmTVkCvZoavakiFY1wsWYioQJxQNpBVzqzA9rSbLnScFc",
  "key12": "3AzoFz4d5KbQTQKBuP5gT8RDhYhJN7ykjzufr9uRKKfvhfgvRj5cgKoHhBepyThkjpNLDDszdwVUK3znfzFkY8hx",
  "key13": "5tyRg3D8nb69i7VZyikT5VvU4yeitL34V7MLMfEkkokBc3QaNsDEC9vtq8xaPX62VVj4ATHp43b6ZBFav44SyV1k",
  "key14": "6tWz4A5JQxCHmiu4KJjGmjWYQ7rgTywzeViXJYA4bfDKUVjoB5njGaRKyW9uxDwsQc637i4Gq9Yd5RrRafEEm8x",
  "key15": "2HjcF4BWS7pof6bL1Z43KMoXUjFaARQuS7jVrrbfD3FtTQ7SQdEZUzsqsACjBN1dvUnpdHMuhDsamQ5RBzcKM1EE",
  "key16": "46hKkMoigtFU5Jf7WBaCy1d6y7AN7LhcYsUjFAn1RDySvtDn363fr33wVmQmtP3UP2CgLwSPak6fsXsnDKyaD5NF",
  "key17": "5wC9Y1v7kTCoumT35LoVQNn5UAc97ViJj2BpWP7vSsgfHmco2CCT1pCCnZG7PuL85f54icB36w6XrdrG728XyPsA",
  "key18": "4WzNXeGj7CkuoRWqfYLBNW8t26sR3cAmzUdf4cGbkANBLWfoCnn4uHgmmTWZfYARi6dSxLZ84hpm7NRpZ7CUBujE",
  "key19": "26EEBozEyGeLnS4p9gm6fRpKKBnqMtgyNwD7swCLzErHdFKgUCHyhCk8vnYwySWHxUVWqiy62H15ipHxxz6KmuKx",
  "key20": "2qmAkLw1woVE3DUcoQgYZNHoocjxXKMx8hdDArVE2AEvASVG4wDury6BrjGpBUss1rc1zzizstTCu3SW9sHkYhwA",
  "key21": "3nsSJhEECsqpDUSXgoCvcEQ2gRCinhrTSRHmLSkpThpH51rXqCCRxd6vPDFVDcjkfYJGDZpqmLjWCVJ37VQWkLqU",
  "key22": "3ehyNk2U1cTRz4KMmsN7dAXByPv7qUVYg4or3DcDQ6kMRgm1nREKRTvS1pTuAHzoeRqH9VzbJK7xsFnpaetFhhHP",
  "key23": "5EemNyKp36u9Ydnv9cbFoT1ZEoytSFYpW7qZeqMLH8UcAQCnPB7VWoW9c661ptSU2KwK69rVnBvZEkgWmwvVSzTZ",
  "key24": "52Q6d5oNrNcJwkTgazZuF3dUTK1DRCQti2EvTczLtKfgXqmfJexv7FQtY6TtvTN8FMzBmp7THgKXrv3CnG5UNksy",
  "key25": "5rFCvU3gSvdceQ4RXoQqHRdjymseofFBYMKd6BjkkSJD8qAK9KcoGUXEYgk877ejiVATWzMWdfW1dbiwpLk85xcC",
  "key26": "ttcikhsfum1tga7wm7WkBFye36WU5rxPJ2cdMgvBhL2Y1WEc2n9Zcn6Hf4YREUc9bqn4TUnbZJqisdKMg7mV5Ha",
  "key27": "4Xbs2nLUq4W8wGX3mZJWjbwArTabaMeNJeQFtY5vKVPL4gFgsztRwXcN7jXQqTkmSFUxzqwxLr4EW6LKbWtXkjRB",
  "key28": "4eYj2TcLWbdrYsZqQE9ttuYusPUW6qSuQN3heABsf8geok3evyRAiziBqDwXGQYoAtBHvRL1g6BRJC1rb1wTQZM9",
  "key29": "3jWrJADa2RZbJcbojMvA8yesKDasnzXK66UT8pTmE3H5yEaQCnyoSczvgikwDQGVToRLRwLfXDVKVZqZNFGhSzhu",
  "key30": "rLodyEjXTYAofvYxCjNTQ2wfhmRN2GnfgnQ9NQENiUt6fSGdwBKHYBjWkdWAUyeK73bMXaQiYHPosLj1YvWiJHL",
  "key31": "2LbwQkTWDWr2pzu6NbibaR6Ckzn985dpXbGDiiDGrvagiLJj2e13Keihha6V92zs8vtTMnex7BtEEnmL3muZm2tH",
  "key32": "4Rxx2SKvn1V1h6wrW9k7QbGz4yDVekPHaxA53HYD3DVXQAF3ixLKuCYtZdZUcwHfBmCZMTsXf5AgBBdCEsT31sMG",
  "key33": "45LYKzfDdTDiRFpNX8ryVaq2YiThdQiQFN23PXk97gzwyVsJgH711VGC347d9FYV1fk6RJgmvgEc9aX7KWUuSS2a",
  "key34": "4Fvmh999cqpLcLzcpSMw7Lm3hASWey6SqwgE5WwAa84wMDTQUc7aCpfByVdzBxKsms3F4tVav6Y11tGf5UdFNMDM",
  "key35": "LeYHjWhaFuiMqNGpfnJL8mANzcvq51WryJb9QsAPLev6XCpG8yZHMGpTbRKj9sar645SWkBM6YCUgPKAs2CLB7q",
  "key36": "5YXuk59kwMWheKosDAMGhogUmC9ALUR2NSKEvWpSQu55vaREa4ocuurcs3BCfDH9niwsYA49VWeTBBwo5YMFQSE5",
  "key37": "4Mb2js283hLS8mrfCrPEzjZ9u81egw332XYbN8xwaGsGAhTUopszt9iXokdPE76Nxd3DrBo6NJ2xghT7wxYYt58i",
  "key38": "UbMt1gmzLnJJDVp59Tavtf7xd9gbTPTvcGBbFLsG4SpBj82UnXtzn7KLAJtZ5ZFqCE1vov7H4CLiBw1NC2xJZ5E",
  "key39": "4zcjCGN8TUsoCkNhgxbtSXJ2LeYv5M75yivNffEJ46RkQSbADp4zNRMGGaUUZaFUBuu8WyLWgNyZktK5w82V5Nna",
  "key40": "2H1tYX2uQQAJLDw8VMj8FLFXi6s67hM9udvEQKPJTtD78MqpW5S4cXdeMRiDHetxnyRKjBwA2fsMb48uVHa7u6A"
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
