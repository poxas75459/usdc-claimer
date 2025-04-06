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
    "4FdL6TY5m8b5LLj7sRXqYQyzP3cyZ4QkckeKhzbeGuym2heQPrBRgejGXHhyTs3gW7jVv2tRxsLz5gnm3s75xrbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jfyDnoXbhciz1kneCyyVtQJ867ddJkbyo7k9u1NAQ1LgdkCLEmExCGLzpR3DHTy8ZobzTF1wpTATCdbGBCTDix8",
  "key1": "2LnsrpQDG1pGto4dGYo8atVGeFNCpjaapGYfrbhWBNyvfhRo4jw6U1JTWX5HWrqSiuybWTPCWPk2fWMguu3rb7LB",
  "key2": "2VqsN5cQMwynUZG99LAik8AFFxedX1dsLwjpFbNvvdU75edEKjAJJywP3kewP9QDCiq3kaGzY4RvziBSbYiVJV6N",
  "key3": "AzqRJnYsMmeXQShA9cC7K5PGii7xCuiCTPxFRA5YKLoPBYb3P7Y9kD3ev4BamREpTau8qfzW7BNcJMvzjUSMK5v",
  "key4": "NWuMqmew71SCmuBJoJCDr2QbycAqi6o81zm94v1Ht23FAfDogqyKj5hBAA11nHUfBSuEYxHDKiGJpjHB5vAFmCh",
  "key5": "63i6FjYdaobsoS3S6jFTgk2wpwchZa34Ff2sg5vXsXDf2KpwmLx7hKww7o4RPiBHPk9bhhCQmN2oKWDBvfQ9LWkt",
  "key6": "4gRfZYTGXgCuKFWHA5JSszwzYC9xBoAbK4zbsDcc8Co3gyeNJi3ejpA6dBk7NrG5fkztphFyHt7aUDw2PNFbeJbZ",
  "key7": "RRkA9hHrhLjpZJv2CVJrk3BGqVjtMxy199Qi1dtqc15vH6mXAap5dqz7kPTYa3QNePuHDGjehcGhm48n2oZdkL7",
  "key8": "5reZd8RqpJ1YnAifEWbvJiRF8T9mPR2VFYg77fbbJ8WmR8Xg5MC9yfFBiJoYCfq1FyXFgwgDUvMh87UVFGWULvUk",
  "key9": "3a44AY8DBcMne3gdZqZ5aWeCfiTpHgysrnWUjez9kGAv9oYKsJM6HzKPKqtBhHvzMwRqgL3EDi3c4WW6exAG8dKo",
  "key10": "5ex2nourKGgwqPtE5GPC3Cstd8MwMSC8XZbneRHGHc2BS98qKHmaaBsTfeM99Rqzp8m1kuWTMqPWfDBHVV4Qt2Xj",
  "key11": "8NwgE5X67Qjwp1R2x25GBe5w1NwSuPhm2st3kQBWsCPfAxENB8hdWCXYBeozZdp4FLspyX9AiALGkpu1Lkw7ny5",
  "key12": "i8tfTGcVrEWUemRTtjNAgZAQitfLPb3E1UZQVh5acrwbYzVxsNb3nyhzSK2onv2PTj7oPmjfca5CTfbtBWAsZ86",
  "key13": "2j3mSDqKTkoeWLE9nMpNqnfgYTuerEBKz81QdvoXvuQQSeivPtLLJF7wB7ADfQziEDjGmaPJeUFWdXYwgU5KAek3",
  "key14": "31nvavNzxata4ShkDnC2PzTzDeXYmQgTbwMUqAkH92cPtvD7GDE6dRkkwgdak3obtY4rczQp8ruh7nrz51ZTX2zH",
  "key15": "5m2V9YMiKS1VQ5qfXKSLE8NkPSQcKfaRhKHKa5GLVkyZiS3TE4heYZaPz6kKZvcCEhksWbcenkourSQbfizmfqYb",
  "key16": "5y5Km1QZPPdDChVCf5XfWVcpK8ycnAKfbVGjBVHrSxcYFLAX8axRK5EiGBt3d3EVyRJHLbJBYNqZoS8R1D8pc5w9",
  "key17": "5EyJuxGC9BpMSDVBp2xnHhCqDgmNSUXbgbtmqp2H6hEpUU2PRvcfAuAJno25Xsq3NGV4uB9JLTmaeRUgmYtXVVxe",
  "key18": "2zNhoHnpCfQAikvV12bWaWwztx61CYhDR93ufNyQe3X5vy6Asu9hp2CUazDgEC996BSJk4VnoookRU9z9vUNHDGw",
  "key19": "NAJC2VLW7ofnkRBeMfcaKiQdvYE6kxrSVx5FtZe1m4gv8SyCTPotgVAKKghfR29vB11Uid83Q7X9RLcfkLuFG1X",
  "key20": "rJuov98RavvUFDvXu9QyWeZtMed7KTj6A3weZHi4F1U8oX9ptsdtmLVTtAprBbgyV5ec8rqwKoYA6g9NDjdgtZb",
  "key21": "67KX1RnCUoLY2eVAhAr9T61FLJtaFdmVGZhAfv6NvXiETY3tBuVfH5fKCKfNxEg6c3fx9okSR7FU5M7A7tz4kuFj",
  "key22": "5MmYsgHeif4om5A1tzCKv1oFT7eY3qEr5hUH7r5DyY9FUuC2mcwoiySJhAXySkeesvMm9BKWWzRofr5G6q18kCua",
  "key23": "4KopoPGYcG7oJFuLxaKpbaU5S635dGUKty9NScChcf2cxGwa5tmjCSRTJMrowhce3LwJDxTLJztbqn3Ssevd1PLN",
  "key24": "3vBQXNxnJ4U7NpEa3kAfmckkpCV9QNeQio87daNUsFXSeqxSNw7CAeoMMwSwHWsTVe3QG15vF9ChJqEbxbjQLpn9",
  "key25": "2Jg2wr4reUaZHUvg383pWXsw3VN6BiJLEyjDM7EyQujj7toiHTSzHtBNt6am9X21K6ADAQyLxddYi33oJm9wwKMw",
  "key26": "3QwqxZ2wkM1QbGZR6RV5jCo5jhLiYu6g2f1UsRdN514bgf2ZfwqLw4JM4d5paDCCYvQsusdwjrW6d1o5cfJrwbGn",
  "key27": "4aXaU9FGy7VGnykZbycV1QhrL8GiG8dS6Kmn88EjkfrmC3pHduFw9XPgtRE2PQZeFZ8E9aqhka7CKBXFGVbaDUEC",
  "key28": "1VnLgxFCbmaHDZqZAympXKnefXEbXYsXkeADDGRbJ6cQqQd83cLdidtvdo7txwmssqCQX32C8hPjKNCaAaszFQ1",
  "key29": "3vfscHDo5YAD28wWm48szERtbmz1Wq5ouVm9Syo5FRoYCqWH99WZ9EWPxPZobF8H4BDZXjXXFrQteYCFQYpREZJX",
  "key30": "65hCxAdHLKv3i1uvuQBn1ZUkLcSTbUqNvsvVhJKjoECiYdw39Z1v4y7tk7ZbgGhQRsKiHtffPh75RkbMsYVminEv",
  "key31": "k28T9w1hn9Nczn5ysFiPF4odFu75iPQv24baQLmfiRxyqaqqdJemAdh6zZg6PvoFVz3CJsWqi8LGEgqm1GT9idq",
  "key32": "Ey4T7u86wrvUGwY7nLhQfr3H37E2XXHuaooJ2djbPLiVUQHuBZG5D5Xk4fX7Nz2sm6FdZahSLm5zKjGKGAAe72r",
  "key33": "23konMMJ4oJTY2qdSBwbCFj9uaLPDhXEijKbk9WQaNhvhwPzDedQrHsdQbXPWkM9AGncsDRRgLi9Wv2DRZokdQXQ",
  "key34": "561H5DVJbRe59UdMPcVE9UU9Q2jJUZrq5KSEM5ezZYfE4ch9GZAdu5j4p7Zt8TvWUDyg4XunzU9HaVPwWKvNS5vt"
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
