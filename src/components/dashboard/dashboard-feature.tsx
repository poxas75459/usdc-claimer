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
    "5ehbKfeMKBxec6tPy7TRpsqTEMAAAmxBzkBGU8ebfvU2T7CdWyEXSmJG9cZN29QdtkbcStdNSy2LKiAvLDXEWb32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LQ71BpGYTCpd9h68aJmVRt8j8ZXaWchhcFNWc3KnqG4o97nwVBhwyFxzAizixjK8khA2KTkArmfJYRQf8Mpn6NX",
  "key1": "41TWYBkk1kSpGYoXFGh3BovbPFWw8reJ9aEtoub6g6CpwTsPyWGBpfy2MxCNaqyBFn1gkEFNVCGGYvPQhZN5y5Fe",
  "key2": "2MwCyKLN24ZjXV6eEEFekG7YKDvjX3ibqkFxAPKsdSjpra2KqS87wMNJgAoixD2GsiapwecgdqEBcKvEis2SXrFq",
  "key3": "p5E8zKBDFv7fyrXb2eW2Qm75NKfFa8kGvkhQvhwPdL1f57nVDd1u2C3wsnzLdGYmuMdMh9hnfdGQ3fGx6UbEagu",
  "key4": "2fSUDanwELdVsnf1ibdukmqyggaMKcDeE4mdsCcPmJY2WsK8WFGJaknGmc7HEz5t8NU2NZm2FoscwSN4yvM9V6N9",
  "key5": "5n2RdtVhticq82rxzAgynjkpkLdzyvk2Jn1FDoyMmw88x9M3wqy7wMA9MhpuogrtMfLg8ehd3ohibbox5XzR8dPu",
  "key6": "5AqhUFTSJHVZUvbHnCQFwmnF3WcXx6rQw3TCswFNxfDtw8hHVtBz6nSjvr8eRjeRkPNQTrz5tzPBzjF3VjM1v2vU",
  "key7": "3X9fdeestAufp1eJ2HbqEpwenKuYwsgFAipsktGYQWnnsxjtdXuFyKQ7FSQNYC6xUXfXhh8uVF4GWQkyhEM7t6uQ",
  "key8": "5M2wLppuj6wmyzXVQGVCvKAgG2PHUPRyuPbuuEFjPcVVRWxcBiv3kRYAdmM4eWkdTa1Kx7FKyXpwWbff5YWWc1kx",
  "key9": "2zJAFjqHnMKNaqj5dNPnbNMShqjsPZtrRsnA6ayZphhEfCSQgKnByneBZ94NN7a3qV9S7D7BaVHxa1VVUX6ZWxaW",
  "key10": "iX8gE6vqKJuyHimRKbSQbB9dwA2uf3FbbuCS5zf2ZZ22XcbLRyhCPhhwRUhsFDAZ6bf37Vg1AwVzqYUg6wrkPCD",
  "key11": "4JSXhZrwpZBKvaf5rUaeGPBd5HxV5mDFuFwmD7sAVQZEMVLusTXLi2h8QFSQcUvRjcen4jsNXdNPzHiQWVYyRJP5",
  "key12": "5v1Avy4jAB6Rz1EkpcMrJRxZDFWN5m8ATYyLMK5ucBRDVLU3i3eCXeqMrQ62kMXHRskQNeTKphSjvqsBtEN3wgsh",
  "key13": "3CyFv2zaTgh3UevjQiHTUPakTtcFoSbdpT4XndpcfQ5uBwYMUJNeLvFCvf3yFur7uohG52G1KBjpu6hD5JnhfWBw",
  "key14": "4MErgdu9gHFr27Pvxd2gRYeLorMy4bfQEPygV8iyLQUhdH9ra1ANs4NwmZP8MQHHNexLFwgmLvtrUDBKDA5ajQe4",
  "key15": "4yPU9h9v1tjFRmWSWfVsXABkAdfyeC3odguMoCanDYkA4JU71Cy5uetbeCkvsBc1GNXCnfRXzNBsAvxMvH1AuR6D",
  "key16": "4Rw4b4w4WmGTAwQDciDzbjEJpNN7NxSYcANrb8u48yQkBuXJ7mpymoYzAgtK5twQmxLpoV1MHS7UaMdv8r5oCM2M",
  "key17": "pp1WJsKJZFsvRDuwzWaL5Q19xNweaVD8XWMNeAc9i4qgkhLjYo7KduWZtDu9yUoAEC4KUog9ThDkVXs7N9PdJ8m",
  "key18": "59oMKw6AcNT446Ssf8j6L8TQy6XESCd5NZ2YuNDvdsBdKLamaSgfmdztHg4TLEznBJWWnWfzkVCi7z98MNJd7B6v",
  "key19": "fUX7hpWdt79kWPPho7PMkU2Ygc78Kf7gxn54PyhRDW5dPPZRfbh96DQ8REeedo2e3GknoP2WcikNgFcgUsJfftQ",
  "key20": "HXJh82hhUazm3L7vGLMiriSC6WapoBMHaf26FA4VA4TKfPqMRW38EkdzEDMMHXgxUQGbAyCfUhiLmREweuzA7ZU",
  "key21": "5pByXrXM6EksMkruhivkQiDUQwJrpvDQWhgividZuAKLxAJfhmwLPL4C1JboB9n9sNSbpj4utae1xyixoDeV5jow",
  "key22": "4Y9L8p6rYWy2qrz1ZKcqJPy9UMaMqMAHcLEusAHJQ9rZBy8hRYhpQp1hghvhHRrw9aydy9bfYSBQU9XeVjuRmqry",
  "key23": "3HToBnujTGqmFcB7da2mgmwjVD479Wqep3zmp3Tx59M3YftNs11zMK53urdcSUcR8Bu1ju7Rcc2KdrNMFExq78zx",
  "key24": "2MFynEnWLTH5c4sAH7hdSYf5VepU3UzNDohHujK4f25V9NvfF2xFoXoeMbaDuQLddoqyHn8EM8HmZVDyqU4h5n1G",
  "key25": "2JjUQ4rGgicEWAkAxtR2ot5E8YuUyqBtW1gjCx4vpCyqVd5bnaizEEt25Y1EiKFSRZ3NWDvhzKb4R6GgLrHc6xeG",
  "key26": "5Ai6XpaUEVL6WVGj1AnCSnK7VJDbCzL61s8FiGeCj42zhqCZ5aDWhv3sPwtmspWQmarA82rgRjLviB2SC9bXAGah",
  "key27": "3tHQhPZFVhDXWaTFWgRPtPfDfDYQ3TM1ZJ3arz6ShCCwRtFhrgBf2RwPeiAnmU3Z2aN9mQdyGChpk8FkSA5hshzw",
  "key28": "2hYEeWmoX54wLpoeWxgoAno2cW43uLNjyQVagMsVsuD4Tau5DnMs2qv8t9KbhkFi23CDeUrg1b6gpDWCvuFPTSGM",
  "key29": "BhGg9e4MG85sU7kpcZ9T1h57BXeTnT9SBFu9uJkyuf5gcfpmYGvH5gvydc6ipi7UXvAVAaHnwfVYiqw5BsRXnGU",
  "key30": "4qeHV3D6LYjyvjgXox7XjurThxjvwinff2V9tkhmGDnqeJDv3o2TgUeRBHDGQ2yS2b6jYLyCYPMS4oKXD7VKPoz1",
  "key31": "61kVVxSuh63WNSGyPxKsmdQoP6HJAt9SriLAxAvt9RgzAkYUa263xSriMLUwyBHKctsPFRD3oPqTvY1iQ1rBtWKL"
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
