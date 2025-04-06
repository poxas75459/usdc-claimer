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
    "55PzAD2oUMUMka87hWMm2ZdVqf6vCojfVPniJKEfK5BtvHxMYNZ3M7bNf5QnPesK7FptaM5YR4RXSCffPEjZ9ekt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JwppbsWRoUsC3WHsTK5qrSgpkGrjqLG1D889Ww5rD5yfCEPMq3xGF3uBxJvVTgM5NqDzcuzXuEfN1SJns7XhnC2",
  "key1": "2rBneUHcCJCcB8YsForXLoigG3H1Mx1ELoDDwrtLpsyne4ZaNRNpvbfv8uuzoKbZcmfVdDrgCkUKeWz6XrFKfDek",
  "key2": "2KPSoHH9kWHUa8Ho6rqJQjLxkhhWBJ36RpmYDFqZTFPk9k3oHp9u1vNjVVRWKQp9yVB1GHtgqF2FXAMDw5K5kheA",
  "key3": "4YNkZuRPei7xzXWS6zqNkgEA6BBM1B5EX2moN5WUnF4LudRgK1iy3BPFEc63FSUuK3KM34ZpEQQtAJCQF3ZEW1B1",
  "key4": "5SNWXTLfv4uK2PEMUPaLh8W2BqmBpoGgvStL3SU98TjXfeSKJ1pv6GA6bswvP4k8eT3Ys3UfHLVhtJwQPZqyz7ZP",
  "key5": "5SJHTtZHmDQwQefo4AM6se9Q86zPEts6LHKo4qS1yWgLq2McDaPzXLF4RCmRsx1ZmyKdufjDsozTynfEut48H4jY",
  "key6": "5RKT9FVsukyN6ijuvu7ReNBzFtmKHk5cW9Cx9gkLC6GzHjsJxj1tCjfGe36MACjtgY3FckkhLCAmuQC3WidWDkbG",
  "key7": "2uQFBBtWjbd4PRmgwEzNuaitVeHcfdi7YctY9oRQSu2PZiaqr6tHcQQKccRzLEdoWGgYGPEQ43SNTEjRwTLRw8Bj",
  "key8": "28si4XSQeXUhsnSraW94ssSo23gRzkSckdT7rag7Krrmo5RADD9PBKLN4cRe3FfXJTGbFm5H5yXBFkXJBBh2h9Q9",
  "key9": "2msBbjxJ8su3Jj7sZjXjMvsBsdPjBLY3ESDa4pDGyQTLPezQNSWe5bVYDhFYANQZDvLipjQtc1YAdimiVQNKsNuV",
  "key10": "3U4zaE9RKbWzxt5CjNT4eUFCaN7FqPMMJEmsFg2AWNn3WgkUf3NDJPJor97aE8TLALjKFmvNcnnzEGYAky76X61F",
  "key11": "593GZqY24Lz7GZSUNueYeNtKpnWu8Lvy3pVfk3sxqgafMrnyrSefBRmvVFP6jSf5DEZSYPmo7dxJdwztsv4WrUEe",
  "key12": "2S21jRmtucDY6KQQGLtvuyFrDRkS2iKuyNRsro366Herk9TxdYRhcyM17cGZS2eRHv461DmEXJDcaJK5UG7oWR1T",
  "key13": "nJaMXGS9bqeY4xHCYsHK9678GWzA8uYyHvLFW5CN8d3BgtYxwV4FSKY7Nt2Lm7imZA4haap6sFBSCDjYQYZVrzL",
  "key14": "4dF5Nfs86brCZtyBHkJU164k9SNkKEZVAUdh2U3mt5ZRq9xsMJwrcBmKnhs1NxgNEdoCYcGU7hE5JQMuS9LXttqD",
  "key15": "LToSWyxsZpkPsZb7QdE2nMxeRwxSnueJ5LbVLEkyKU8noETfFEEZLRc6C4rqY53iUKZKJyscwwpTUqYK1JEBC3F",
  "key16": "2nwMzWhJ4QVTgULT7gTECB7RvprSQHDiM5e6mepCeY8Hh6PuyQSSpdXeBr6jJchGcCCcpDhTocn9AwgrpARySWJg",
  "key17": "2Wmo9k6LQXBqBteD4WsRhRNbKdXBD4ENRDFZvEMpUZPzJCffSoZaC69zo88ocbUeCQq5Zsi92YKXHwx5LC6xFtYQ",
  "key18": "42iiFikfK47KKfausBKCBLEwWUAQtfCZ8h6KAXgGyHxC5sF1sJh9LJ9f5kk5SXBjS7NhALZNjGHVtvnt7R3mBPhn",
  "key19": "4oF62mvmc6HZaioUgNMLcNF1irtfWcvNdAnH8uAX5b8XSaBFdK1gbRzw9KVeo8Ng62XYDNkfQRAv5TDPxM9DuZ5c",
  "key20": "661Tmr5nA39usw5QViv9ZLTzjUPmTva53R6CGevVEmzTW4NmcPcbps58N11cn7TvphXUPvuqZuFzZQXEhJ3pfPMS",
  "key21": "3YpPmJwkjBRBQWTyB1K39djyAXU3JnLCLxBU2uDuKcBnzeXhaLZGpo2p1V76a7SZRVKuWkqusNU98c97y4gdSZtU",
  "key22": "4SKS2gTJcxeRWTcndFhDuGTytuCTrQQWRgsydbeJ1Geoui66jBPwU8wegnkKj25o54pft29tymfNk4KmPv7BqbQu",
  "key23": "3a7r7mgUJJu2dH5apu9A34CYU5mLtThUUgTs8y1soDDKrYzS4RXbfMgTFdgLeb7Nw5AL3Q4F8myo2Qrz7AZMtaF",
  "key24": "45LeYPbcYKbviNdcGuAtm2bgHUaMj46EaSFrWF6hj2xSyGZR9v1PZSkK66G4GPTA6U4hKQp9xFj8U1xJzVMmHtvh",
  "key25": "2g6AaKvooPt4Th6qBxCXaxXpAM16Xvbmgkh654JFTwimnBTQb2io1iND2XDpJbrUMYSCn78ZezwpbCqS6LpyosNq",
  "key26": "3JxJZ79wE2jV37FKEdEdvMDac11XCjX7wJgEUKcQ7dYUyEY1HbpbuaUWEvJnscGDWyDHGvbbCYMX3yRXmMb9xbPz",
  "key27": "2kopQov7ZgH7gec5mjrkF5zMZCjyko9m6fAveEhmQS7cFqX943n3qRGoSApWHecUwRb5Hd3eCYojakxLuderWGg4",
  "key28": "677CG3PjHMMA5E2TuSvN3xbYYe4iKc7d3ZP1ZAcdMFxKWv5Vmtv1KGd6niz3bCoJCshQFhBcz3mhuKT6KRQWF6wd",
  "key29": "8KSAEHYMs2Y4QZtveE9hS2URsKd5TrsjQ7tvZgxcX33Xb3Vhy1afZwVWc7bKcNygaiKN9dSTPeRWMVigh98M8KL",
  "key30": "4G2hqRcFSfcCffQft1MDfEkZDt8w3sc53Ug6kLT4TMVkuD7FUJjKNiE28kAnyPRdUg1StuMV7kMZjx7ZrWPvpq2Y",
  "key31": "4XtqQNjcNG9AQr2N7dqR27KQG5yKjLdqnpexbPomSyBMJEXn6t7BLSBFhwGyZApZiUFXK5qXzThdeBHNMJ6s5A1R",
  "key32": "5tY74qtM3sPxECdKaKJeZ7F85M38fk4osPy3hdX9NUT9gDY8JvLxg1VFwnk1Mr234uGqzFmE1ZetnUst1JJJXYBR"
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
