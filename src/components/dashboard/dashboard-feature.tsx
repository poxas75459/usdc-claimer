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
    "3NropqEw4mqTnVQwAXhYUuBJdJBQwXxWwKLV56dGb4SsDAw14n3VjwAK2Rj9juGzeqwc69d6ZTp7orb6vaHLmhNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vs99migo8iEMETXthdhg6jLWARBVwtWvEJyoiHZGoNucLadGJEeFqsrk5221Zq2LUBBSTtnQPk4c9EKP5MTBTU8",
  "key1": "2M5NZ4gia1YFAHeCdD2SphErC43cjAbJaWtdNdhWDBT2im4GPYmNsyAmqPd4DuU3ZwoXhj3qjNwJrmnLE1SxgCeX",
  "key2": "5B9fBv9mHvnh9mR2b1veuxQckv53y5Y63rfbtntvBxuEZbVxzdTcPEeKNAdiDkqHBnbqf8s3EV1dpXmSBTPr61VL",
  "key3": "3R3r8q1cPoFLGJXakXoFXTPaLENXdsbxsMAc1adgVddAkSBURxSk36gT59DN9rKHoJPArjGb9XobZqoJdwYfKyEa",
  "key4": "SEiH66MB6KoS3sSCSw4biDm2xmCdJZwGxaUkyFLuaQem4ACsbQMnjhsAchP8S5UCH8kz4y8j3295m77JZAfwQaH",
  "key5": "5HZiYMWrXYTDj83YSSLCT551fLK32iR6UNadeypJPyUedNsBitsUHKi8QD2ZjraxGhUXvyUQJqktaM7GAw4EpbiK",
  "key6": "75LziVnKc6FkBFd9ps7p6DN7BJFtFMU91wLZH2PV74NMZEGc6yHhHcpYZpGg6DqsQCpUSVgTvuwmAfvwibS7tH3",
  "key7": "e7NhjF9pBQw8c4YT9bgNSpfyobMqhrcNGGxmfZk3G7uYw1AheeeVEbcSBaMxVFCJp3BSRPPiYHHr7vRXwENdGBx",
  "key8": "qesQZkrbEXjMU4vTQgjpK5Fifh2Yy78JKZhK1UBrKJprZwGaBdKTu7zE2D5VZCr2HFuGJjw8dTiC5EKjJT68BuW",
  "key9": "3PchhYo7NLZVxawLEP4btj8iQbsgpfCeR1qxoAUDZMkE4B7kjQwGNjxFUmBAMCsBrSyfaoTdHQKjF6qUw76TVkKg",
  "key10": "2xsAvqUDVUsF9dWQGwbmBiYvQdF6V2gfF8h2oderdaSZZJ1iwMiX98WYCiwHW4hxRwTw5W7pqwcwHs6gwNjfmvQ9",
  "key11": "4VRpyshTm4XCExPBRZjVwqYyMJTfFmnnank2vwTdJcfTH6cS5cdUZ9QBeeBPnRwLGNvYs3VkAXaCTzFRMdgtto8s",
  "key12": "2LM75TPwTKtAdpVfYESHxzr61Kw1Dv4AgirRLkC2QpLKcoFrsvULotpKT9PweBLKJKzqy9E2ggvm2LotiWL3HBQp",
  "key13": "4znXEnJf4GCDXdMdnbF7MCdfyYvELfFqmr14NHD7Nwqv281gTh3ERkzJFvApB9yGJ2n1QCnWdahyCXbZCdz6tUEL",
  "key14": "42c9ywLVupwfXFsKZcpwUM2Yy2YtGfAgPcuz5J9ymhHXVQDU6GaYZnvfacEBFS6JF7PzbNW9NqTjFn4SUmAd9uUn",
  "key15": "5HPWhPzEWr9KpZDNx6KE4H7LhcbxifVkgYt88y1KsEae7sUiorN5pbfKRowkucNxEYctYFobdM3k5Gy5MQt8MErr",
  "key16": "4uQ2hVK7L94vPz63Q2wUXraj6txx8xEsniNqt6CH3JaJsUc3PJHTUeJPgemjoJ3mZxUH4Z9nNjTd1QMjgwUaBb9t",
  "key17": "5rNJpuJbvE6wg8NL6MErtRf6LtfX5kFkNgPwHMZsbVD8MaLr384JyweAYFpzupK5MhScJH8UtF7CoFLuk8RqDJGW",
  "key18": "3BKM1ecGtFU5so6JW6rS1XGvb6uv3aUH9BwQ1BPD1w5sK6KfnqdgzjbQTTw9CpsYHvKk5cmeqWdCgMmZGSemYzFr",
  "key19": "4SPPThpvNcH9Gn1oPX6kS93ubG6T6XyCWHoFfTvvfHkxSkb3RGewQdzPBYWGJBEaLcgyp3oX9Ys4XKGxDNa7LgXC",
  "key20": "4KaSSJq9Y9sK5BhENZAXDDz3fBrWNhunR46gBaq5VakGb9PDaJNwDZXPzKirtMVf4qFGhPYdu8qzuc4YYaXycMtZ",
  "key21": "3HWuMQmvFCBJndvN7UX6Qy2vFgPh2n7DyBHFoevvyftQtK61nBPmPBWWEnF9r6FoSjRaqAVYn6UnkcuvobXKdHFm",
  "key22": "2hupRg5iog7G7wSzk87kc4RQsF7viZWksh8TUgWvGdSXM1RJFXKi4Cvqi8pQ1ssSNKcg6weanvYYngobWButPztt",
  "key23": "5dgjgAkigw2ZVapf65XugkBd3GGiY2qzcAbTDWLG4gzdsvfy7o92yUbMMe1kz9o9kGr3PYR2cTH568YQfn4ZtEaB",
  "key24": "4pegbnPcstREsjYLssXCWZEeE8wHmbtQR4dy2LStFcB2N5GbzdibZk6gr6XuU29f6P5G8S2ypDrmMxZojYytSZBT",
  "key25": "22SswUVTNuFuvGpXcyPHDBL1mEY4KCFBmbVysbfyoAN2ruJwfVfmm8EtedBZCsjdDyACwHzL9fEtZYPntgc37eqo",
  "key26": "21kjzqMsazJtynTqyCL63LaMqwSYysSYs29juYcp4BfEKH3bJxZBKNzHXoruMUYM7enFJqiKtHzTerq6NoKVbDqi",
  "key27": "3q9E5wyUfgjPPC2AmE1tzdTLKLDe9EsD6xAKXYML9XXSbTGceEjvReGa5geT3zm8fRdV9HGd94fnrL1S68xc2Ufp",
  "key28": "5wrQbzU9y5Jj7WDq8syZg4EFidkQoQovTDFWsMhb4TQ6fAHJHGfU68rpPT4ArxmVPb6VJDpUvt8EvQNqzU2Z9UzK",
  "key29": "3rhsNpGMNX3QXrnvQKDcy6Ea3rty7xsXotinK96HTdFetvGWPEcnoaFDQMy3scwbyzUuFMkqXsj5xsfyFoy9pLiV",
  "key30": "2wMX9yQwAzF2F6grEdYBNWfjWLyf4fAjpBEeRmajNDb3p9VLpatUWxZ6R1abdo6N3kzu2tp7iLdozqdCoczTb7ys",
  "key31": "2M6R3M9TRPNEt594VCixCoBk1FCtQT4ahW97G9ARAKiSgm2tbBNEoYYbPmSbjQwGGgu9jjS27d65vkVzKVB35ATN",
  "key32": "ueSVoHSszXjYFyLqtzjq2T8LcG1AMiw573KMBdR4zTVPMNggSdjyg9Wh8G8XkdxM2j4yn9eiBbrYLWfkEpy45Ye",
  "key33": "27Edr9aF6pUPskUrpmr2CD6tPWhzYYTT35nUBuryuCM6z4gGNmJdXxXgyeLpgEMRejSUVsFmmVLQtG7Qu6LEKV8v",
  "key34": "4dtGxQ65zstyA9iJzTHa4xME9Q1YTkr1uwTQF8odB5RMY9YdqUmxpRikuBSMKpE16zLVjxDiKrVYseg8KktA3KsX",
  "key35": "2jWNf6n2KZ9iApgyRr6T1efDfMiwurw6CJf3PfKWCerd7ELug9Zer2g76RujBy3yVs1t3WzhQxQgGtKWG5Tok8HL"
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
