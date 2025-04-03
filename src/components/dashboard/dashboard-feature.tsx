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
    "2XwVkSjeBT3XvkcoDg37gCwGvAeX5AYeMMnbZP7rco623mbfcoDLu5M5jJrztuqbCNGn11EzxyVx2WszEQg7bGPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64inBb5j59ARpv8wrNi4ZaLdvGc6mpyJGWLEs6534abNd6hZW87kMtyaf8eZ6JmjNmGNUWaRkZ4Ld1fAhNqygqp1",
  "key1": "2EjJTGzTGu4K7HY5eohVfexgG7DuaDmRJro5PHrVS57rkd5v2TJcxHvuUZBJK5BeRqBtzQtfmRNUtPGGzYrfLshL",
  "key2": "44S3aQpCHMF3JcCvCAcsRBWwpm7baVs7pPDy7hUuzXwdmbx4xZP5SpTDPP8djSfPHNLdRy4Ewu2BGxJwwnnT8Yci",
  "key3": "3eK3LgduoixdC7XLMHNV7R9SjGGDLThUSQL7mr7ceqEz9UhN1S1TLERUqfV4af8WL9hFkwwxdxbudTkXkmYUtqai",
  "key4": "Pv933HmT5oPem4RHaqBbUGpcRKDP8mPrhQn3T1phv2nKKYbuoP4eDhRSpUUJGvSKjKFWrEuWVrybEsvjdcLNK8d",
  "key5": "2nSceurfbM5QdYRCgD5uyyiUrT6jmm987iaNdBDEHibJSVd7S2JghR1NmgbBSFA4Es3cpfb8XrhEvma1A4fe2N4V",
  "key6": "5J3ayJK7aJUtCbH5awojiVvGe57oCJiVLh6aXNNqtmnhRX43AypfdWGw3UA8GiADonwupqkTWPtooJYCts2mH23n",
  "key7": "2VJzMH1fHfLpjbszd8i6dessDpg2grLESnrGVx2KK1gsTGKDt7r1zSiPrW1GGw1YbEuGEnHTFWMQPZ3j6iPwaR5E",
  "key8": "5kgvFGtzAgqo7oCYdVkk5Ph1V8SSmfpv2NTWARx5AxJJA9SvFWhjgPBhvY4UqC6qhjaB4Tg4XshHNohfGbseF2L7",
  "key9": "2zG1xeHJpFNVeb2UyWufoiCvJ4Z6QFxSuz24vi77zupLFJj75XKM5HhgMJYigDe2DE9bgswrrAv9d3P4eEPs6CUn",
  "key10": "3NAoJXWdUn4PvzVADAxGYW6oqtPHHPiAqbiL2EgreKdAkVZCwwmxfZAjD3eHDEwUHdHb7FKw7kXBFTHzVKGvEEEw",
  "key11": "3ETLJ79BahCMzWa1bf5PSh9ccYdJhgkS9XSXGDQpyiKFosMpt4h7Jf85NPC5T2RmWbSjmPS8LrvFsSfhFrz6MzH5",
  "key12": "4D8Ut8SNpm9nUi4UxbiCJTpfE2QbjktFCHkrSnxEhe2J5kHE3cJX61PR6cDv4t8UdHfHpZndgA73LtwNHqRbVAFa",
  "key13": "24mkctMkf9dJ7NuHtCtyJZCsPvjmUsgDJ7hBLwkBbWPtcn19fXR9eirMTSLGBDPuZbnggr2at6y4kf8RDbNJ5RvV",
  "key14": "5sBtSRTTbagoomS7dNPs11vxoFRDAbm4UDFb5x7wnq5yNWuSbHvLqoEA8V9yC5czbU6oLWEkNZdoqT195dYMyKgy",
  "key15": "27vKV6CsYTjA6LtasgdsfVav31tZ8pPRc8RnK6UUGDfdt8CEB5KLajM9ip2EwCA3VC46euWKHqf2F7pX5noYi6Sy",
  "key16": "mjfxZa7FZc2enk6HSZh12LMEWhgUGiDWPLzm4JDr696dn3rWT6hGdqGLtBv6Qui1yJqM8mRviibB7hWaT58w43m",
  "key17": "3rLd8MLGLA4DyZSJrihcdgSkj53uAjkfQC94iTDWzVB7oHyvfK7Q9w7ekKxHwEh4UfQHpMQtk9G1vMmPWgttfUEf",
  "key18": "3fHD5CeYhGWMY55AnfxAb53B9DJ97MNjhYBR8JpsGC7dE2nRpbhRmwBY7yjyNrQWAsSR7wbVcPKY21aT8aR8SEmk",
  "key19": "5aubtK74unn4cHqz5KVdjfX7NRVnJzg6usKS4qvCYm93M2TrLerU4sz924nRbhEV1NbdRvsKDcSKAmWNNEiHAzt1",
  "key20": "5RPDPaEwNp9GWmCFTEMnPopqeHBo4ZLg1wJv9jTZht6jDycbR8UdKFtBYwpmkXTt3qzG7d4tdW9xMDUE3tzauaHH",
  "key21": "5774XgrRG32NjYtVaeH2eUhZjV4ZaZ89c4y4pXJfr6ygXmnA8P9RCjWBoiqdcj7uf8xsZSxJJpwssVDbz15v8g2W",
  "key22": "Gqh3LP13Q3YZesBKkyboe3Xxe1MtEUmDnZLDAfHmyEBaE54eQbefJ4RirzK7tk19rA19nTkvVo3N88G6ZY4VeiM",
  "key23": "3dGdc9UQuU9nZRE9tW3KBp3eCjvUWzLh5YFDGMpqwHs4tMQHQ29NHwrMLzFrJm4Es5GbE6Z9Y5tTh6TgPLLqjk7v",
  "key24": "3kfGnbCfDU48a2rhKuDpLbo1zPBVNHUHaXpfCAtMrfyvtEvSyetGfsFZf7bNzQQgJ5kzW6SKTFmvLqHw4ctzc3SR",
  "key25": "5vsJe5zoj8d2goMN7cyPwRX5VNVLBmvkoTdWNY8qa6hvaAXmMeeqY1KmCyBRTgBYN4AtzXVfy1jRbXKUFzDqooFx",
  "key26": "5rKDzLtXh7NfPuLTWZjtS9NCNysp3tk3NQSh5iz8Xk9N52VZSsmzdJhQLHv2iA3Xk7T6EvyCHrFiYsnkdZQJDCnx",
  "key27": "3ECyJLovxjq4xYwpzG2AzpHEXWssRdPxaoTJxrXNeYAhF32KGyrxGqxnQRgYRPcj5aTdteK1SnfWQvhQM9zkriwA",
  "key28": "64Arbi7xEk2RXvgZWrjvSswhEEpE44gvv64BdCRQM4Y1mS2BK22phfnF6vyXBZkTFCB7D6MXLg8prJ7h8Tv2P6Rd",
  "key29": "4n6q1e7kASaT9e798AZW79KGjwRUc5RVLPTsfGkh17Umux1wgqiWm9ZYMYDTippsvk5g16htCR1LHsnnsYSMu2qC",
  "key30": "5EVvRjmDM6wXR3kPSd1jH7VyUAEHLewNA2qk5T4jjKtbKMi68XhttjFtgrQBaoF1JCykbF3xJYkckXkC453SbL3v",
  "key31": "xVBWMJCqA6ZzivANdT3vHVybZfG9DPUs7KjhY5vevSioHm6SjLt6MQdXd3YbkehUASEb5mwoGBJDkuoG7jtPimZ",
  "key32": "3B4GpRAR67bViGGVwNSPkUTNkfP7UKetDQrVMgeennSV8z4irNfbkmf5TYUhC2SKtNnqQMft4htBFPdozmyGxLYw",
  "key33": "2jRvEVKYxFi7tZmaM1T2BxMXB1SYCbLL2Dx4ZY7Rg93wz7QpiMPgHnDyXSdheW3q5AnLfkvedhDU1fF9ivv6Qxne",
  "key34": "3kJhfbngDXJ16TCZPjkrufhnHs9tkZDd7kYo2jQgcvegVUdFxvzfKANwYfZnAWKxSUyicugd8aMT2AabGbFuim37",
  "key35": "5W1vXvAdWoh5LqCxCpAra87HzWJHZ2ULLRsPAMeEEoth19ggBGqpzKN1QWGVKfBBeSGRdtfB2Z9qWszbCmdJFE6j",
  "key36": "4nnErmFMPUs5fy1bJZjaYAhavSBRqZUGnBC5eLT5fK8tqrihLzVQU7TyBv73774xn24ztY63JKep16CQt7jxz7x5",
  "key37": "5kGSpqQ3EjrVw2Y5Ln8jNcBDG3ERryHx1qAHo2EUaNKq4bS4quRkC6jpxqAQHxJr4f5DXiJtXbAQdsCm9wVx6oBn",
  "key38": "3SZZj28mYZdZp7uir4mpps2sF4yb7Nhp3fTin2rPMwnQ1nkAQRfhB7Pk9hJpjaKBFJDE7Ax4TXxoGPSLojyG6FG8",
  "key39": "3pGw8RhMXqimLn5bnT1jm1ox9ZBU3SCwFCki7GtMbruZbtKHA4KDNTY1ntVM8SrhkdaQKgPLL2wwj6pr9Qg1QwnB",
  "key40": "2jUJxgmvY3f39x5kfgv1QrBHKL9yJVvqV6goK2e8obn8zWrMNf7sHGvSZTJXTGAyHBnRo3C1Sqzb47fV67rzZayy",
  "key41": "5ZMV5QoKoy7jBmr954yUhWqbehVVyfHVp7vLsJ88iXrhRgaFAEoRE1qngsZGcfhEtw8hnBPZVpDayNLD61ZNzmZT",
  "key42": "tuJ1kQwUgUVvv6URw2pasQH5NfiqYzQFerxcQFASe1dstCz91PWto8Jn6gUVVafRHUysW9yYkGm5GXLftmF4jvF",
  "key43": "2imDXZCzNE2pbABVpkdaRq3ktQ3CNydKzCEqvfWGVY67mP88yaBYRmwfyrtQSK2kHzJRKanV4wQDwjkbgZURkvov"
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
