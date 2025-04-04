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
    "4mhvtCULVbg5zhgdKDrveda9dqMREB42h2LdAp33Q1LSndgXywMMHZEva3Fej2GtwwfBzhCu2XZmHwxG8cqmqFiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SwTuQXSRp3LhShyuGxZweWD7BrTAcn3wuU9y9abfeWAVuSGmwHU9HihEoJ1J2xVnjWy32p5Rx4w4fq6YtP1Zpti",
  "key1": "2WDQ49KHsdJB7uB2ZJX3caLAEyoV8RUVhQV7AazUFuMiWZLsKYgby8TDGMbgut54rnUg8Ud5xsMbbDn1GuN84Ztm",
  "key2": "3jR3QGcjsbXGvoYFukygu21f2BjfQy52gD88DuYkEHBv6CPcie8AxWx5EpkJcQvjxjK4CeS8BAEDyuDzQgBG3ZeJ",
  "key3": "5uzAAukQgqvmJAPaceJAEE9dpHHjDNvYAkC4h28jwAxPQnkyGieQskHsgDzccqcYNUh4on41XTV8Z1Qxin4ifjg9",
  "key4": "2qJAbVPhDHwfx4mPo3VxEqpUBjHwoJvatGXAYRHEet5zmhw28YvXJwM4WwQQPA8U4NnDSSXyoCD8B5Ti36UDZ5BE",
  "key5": "5hsnBP93e1Ugbzr6x4u6Lvjy8N1n8gzVZyr3TpH6Y3Z159fkgem8JinCsjfVYHKpnKS5ND9n3GgR75ACHetCdv6A",
  "key6": "5iXBx6NJwe1wjhyL7KLSZW69rgYxyC1Pz4BAVyUaHXzFB6iakPoScj7R7zBSimierqehpYNqEGSW7AkSP9EbQUPf",
  "key7": "2CQwp73TDBFRyZ6zXjvKJaHouZ5gGaRfk6eWg2w14QB2DVPXMg5BTjtWVL6BGPAbduAPLuwjr5ZQFaHKBxiKW3P8",
  "key8": "ycUQYGeuBTu3Eqt3vfDvMuJ4wbG37gYCpgLD7XqN2gHriqHMiRKzMeX98kARWdgiCWzYKJaV8Xm3KUTKrkxYRDQ",
  "key9": "3PAW1DZzUUBrpSmC9Cxf1sVkopUwKjQQp5YtoQqHxsGQyMDi4P9DAmzKHPKaELRRtBmyENZXxZprNFzCLcTVgpbP",
  "key10": "3FWetg39z7X161CM5BtuE8tEMCycg2B7Kv7WAqUMyCwZEDDbZ4cr2S6FFhyubJ6QF7tbhHg33mAggZJ1yLe378bx",
  "key11": "31td1FWsoFhhUv2LRvjXaHiztRrReR3MBgncu5ysaocHuRe6wyzfdNwZaF7F1XEV4h69gdkFb4jhLu9YTqREqugD",
  "key12": "4ThRwq5TQe8ig16m66vhsQ5Ry5tEuN2T82AA3iMqQxa2iZKxEc8NAbxeBbGZExazfs6H3x1uUmkjt8yczWJBkGcn",
  "key13": "59GQufYDYiasfg47MswVtxJ7wA2XTjgnVPTS9cB212Kx2FPHgaARTAJ4c7LFw8trwher6ckHr2NhDEPZT6n2iJEA",
  "key14": "JhN18Q9sGLuLF2mfGEtx6B8humN9JmDAz1vzRu21MxXqaNWNdF3SU99a5ffLWaPB5DvNHMnaWB6UzNNR9GaptPD",
  "key15": "4EtgNbKrAZhSGEey3ZZBgoD1zDVrADQLm8H5ooxJDSwkiXSj3CqgwnGEeRhzPYFYeB127KkNiZvWW4869nyYnFT7",
  "key16": "3Pow7JJoCqUQXDAJvXKfzBawFfKXJKpHikusMmmNQDysLwvXWoJcjjD8bBoHJrouGweX6c1nhZ7w6NNDh3YXdrso",
  "key17": "3rudEx4dRY9s8Kgm6LKScYDTvDJ2mgBRj5CoSmEMCgsDaPpNDr1rF2BWFqxGQ5QXFrdreZZLLP3sHc4b5v5H5tJQ",
  "key18": "5NZXxgvHTz2u1mW2T9UH3ZksA5MwWSm8vUpRbsAEBUerHtCJFT54HgbfQ4okpobr5mRCuZtPvDyS41NRBxi7RedL",
  "key19": "2VqmmJSd5uWxPePZcfrMbvMoB5hPgFUT3hMDC5vcNSPaFM9PA1xTSdg8f2GCurdQTJGZvAPVMw6QotJ6Vd3ykjmL",
  "key20": "4zQaVkJmVCpq9fECGBMDXEur9iHpYhCUkShYYLbFY6YhpUXeFWyBZydS4XSfN4gMpoWaGQtCu7ZJNLVtsKLvb4j2",
  "key21": "3mfk6P1zKDnmo7rdbh314asKLTUvNVccy7zpfaHEwqiVUkrX1UtxT2C63MZmgsU323oVbHcZeh2DBk76hugw8Gj4",
  "key22": "5XHvgvDuLVhyJ268APA3vzLkJvmTbpFxYGeo4ZEwv2VyqQWJrn3TM1cUBHUhxDAQ9AgbyPZErrJJxf8jwSzFxYtd",
  "key23": "42DqrYvajwjXCkD8zvv4DJccGuZiNS3M226P67rtei2fRFdwhih2y7c6feCwi6GgL36s4GQMxLFZCk1LuB7fBhgo",
  "key24": "5g6crbNkvWsiM6ZKvmPpisG6J9e7bK1qSz4vUTLeJUFMhsqckrNKzczc7WCxPc19ns3w748fg8Sf6UwbRUy19Jhk",
  "key25": "4kePJmYRhvNFAvRXXG6zFoPcKcwMiZRuigYp4PbTFp5WQVsu2vA6gcfwpLYCsuFjsSQpPQAdfahzFTjPv7Lgds9k",
  "key26": "35XVnswf2omqGwLtd9dxygnmoJUk8WY5WzkxNjc6y82M3baUG4BTfegbed4bEgQqic3p3wBXywuK34aAnnGRmKH9",
  "key27": "PFzkANjo2iiMDWze18i6mC6ywj24k19aDjaa9mfjBgiLV3soNCaPxwahZ11116wwNh75XgjtbH8Xq4qsTK9E8Ge",
  "key28": "54h8ew6xLAcRooAPisnTSg6PYmUqteyt6MeytmSeJHuqVVdhW8QBbkZnpAztYgyHNt2nkov9yBobj8WtzhtGRrr4",
  "key29": "afd9K6L11hHDBsXWAeRwExKFqv9ttzRLfuVcYsDry4cozh7X2bFpaZ22uNFCkH99vJpefQAkFzmaQnqxGusSeWa"
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
