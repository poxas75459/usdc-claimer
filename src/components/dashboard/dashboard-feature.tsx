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
    "vLFQfo9QPFCnxDnehKkxdWmwXnDpZDUdCvVtWSwL8aP8JqDTM2Lx14WBUqQJ8QFthRs1jEk9vtNGnyQFfNegJA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PYy4jV93k9exNrs6thBJpk9CoBdKivZhb1CAye9C9d2r5mnZHJAarFMcp6MGUgoTcJxbmdbcQCZuuiirCbB9MKA",
  "key1": "5g24UBckW5qu2M4MKTtetokvd2fmg4Ukd6U9JoKcjQHbKRCsUWZYFiYV9CBhXacnaCGC9qcTKr9t7BkZPNruX13J",
  "key2": "2hGtfPah9jkctVPtbZnv7ucaG4om1BBYZVKKmapnzBvKWWfc9mfQyxgk1CDv5JfP2Vd6cWggeBUfYVPu7uWJoA6S",
  "key3": "5zJTxmXmZw267ntV2a2Dia6mnm4Ud1rq59GUZ1VoC4UMjJwSAczzb53DvkYUktruiKV8LawsUd74qgyGaFcx9sgd",
  "key4": "2n3aDJWChQHo995iEwAcJNGsQigW41zvnuh1exidUEgvzAkrNQpg7eaXiKViUMg5Eesgd1VPQDk3bCvi2T6ySbJK",
  "key5": "w4iDvn4kUVzKDtRs19n427vt9ygAPRjRhfBNznGXuPDAuinRzdmqV8eGE9ygj8Sf68ST4tYPVVCq7tAKPoYFpJU",
  "key6": "4zNNuUMd3wfw1aDCDHCzZonGvy7CNdgomZR6NKz85sUnrxDYUQzGj2twvxofjoBrjxr8seaaprxrLMjb9EpQuapg",
  "key7": "2SRYfBCctj7Bwak91ziiQaDU3LKXpeKNWbmFt833jDsjdDuZMZvYCrpswPQUdMQ6je4PggwdbEekqkun8t3pmanF",
  "key8": "3hyUA3o4LGC8NU9ZtsowrjcRkJJg5uq8Nxpk8WjKkTVrp7oufzLY63Br16n3uEspvA63xygfabxsbFUjPZPz6Vr",
  "key9": "3f6hFCntmZQSaYA5vUL17qA1JVGKevtSj3VxcshnBMUd6yXwEtePtsady2vdaaZpFNwb2wXWge8tDgyUwhUEzFAz",
  "key10": "2HPoPurT4pRWaRmYztQcxRAmsVum24i5P6BgbC8CiHewzpbqALw13TYgvX2pe5NVjjgAzDyiqaXqcnHby2EWGdkT",
  "key11": "5x8uWVz2aYkt8YDEoHpCunABRfqgZn7yRXG4RvZjd9CNRR9UbHaqCkEXMhKBX3bz7tdG438RWfY8RZ8bdMrYF7Hr",
  "key12": "4MMTt2z66cP91QTBUn59GV2mfu5EfajNeBQbk86ha1v7mAY9jC8XZKbP85YoSgtWZex4mP1XJBJz7hnTMb1Ywax6",
  "key13": "2Bcit8c9Nzz3f9LeKFJNpyAwgwzV7Svysd6PLy985ijSN6gtsLJEjvhHfvkw19mJVMKoPAEKhMXYi56WdANLqx93",
  "key14": "4LCH1rRJReDsDzCGg4gYU5eAGBHUzfzZbXC7a1rpWhjLuqF329abGX9evX1gABFaaRAGdhpGMVxih6f4MRYwUeTK",
  "key15": "34nnsbVcVaLLu86iPCrk3QgHGscwWS5K4gbvt8rcyt9fbGxAUZJLuRQ751dnQRLH3NMMwMn8eJsbSnjCLHj39kYY",
  "key16": "3drNoTmrosohcAw13aHGFp3LGHwRBaUddkDKTVBdqKu29xvdZyu5qRkRZLKy5MLFzDGddAqTYrkoDDcdo1jBoRdm",
  "key17": "dkbUUeFxyHgX5wcLxfE9YzNWKjV2pv9fsjgA7GQc6F7BuyZDh6KdaZystC4jHhC1e2pWJBNUVyqHCnnFN8E626u",
  "key18": "35tx2xwo5QjTBuWKn5JfJHesa8ttaUMgg2jzEpWMVd81FvK2Kt8R84c4oumLwQVNcbGKeZtvXjp1Y4vRjVCDuoij",
  "key19": "3NgqzMtS5wCXB596T73JioCV7ozkS154jpw8aN8ReYCM87smCg1W2ET1KBYAG5CZ3oK8q6YGGiUpGbkDCGnCYEfA",
  "key20": "3qwsrPjJG4Sx4Eg6SW2C9vB4CnkXz7Mmg1YWUPpx58NAHgk15cuTnVXeZMGRo5K7Lw8e127yxqKiyNJkggYFqt2g",
  "key21": "3vqqEG18waqzHEspDPCYVNzJkRAv6NX3foCyBBMkpbLtTZDJ9ao2SzsjikiAkPPoy67HvPBawFYxCrU7SbLgmZdW",
  "key22": "rv2ge7CdEsrLfR5Lo6nSpN1KAoF8Yjkt4ugMYoQKdGBnoT4VNUVGNwyaUD1BhSNHn9phqHBV7TmazqAQJSFwghy",
  "key23": "2fSSXbxaYdPCmWEjh8USS8Dt5TMZcxLbut7RVr6QfEdknZ2N2ff14CZ17yue1ffn3BeYbL72u1F2xrJA6h1dP5Na",
  "key24": "5GAvZxzyoNpG8wLDLodgka75ZHxFCkkvrH4xtXiVqcqsjxBEmuT7Epqo2K14LrpjpYBYKSntXw77NTkUAqohu9y6",
  "key25": "3ph6VtzS5HBVWVjHTQgy4BipemH7TkugocSurnaZy9DUay5KcSb67dT7RXjMcrBbv8X43XzaQunKggoBwboBXA94",
  "key26": "QmXqXX5HYFmWWyCN3Gq2bZZK3mH6TFwNHh1YeL96nfQcG2M3vA5uj8hvaj6aQxUkS5nufTXoc8LhnUKTaaPvwx3",
  "key27": "csnsU6RpmnpcQpnB7HK1FJXZkG7Pvyui8Navz6fQHuCFRYJNVknmmiBcA559PHdmhB2rMXYug5PV3Lj9JwwgpGn",
  "key28": "3FfJm466m7wMX4tyS1z2qcA5q6qzeQYTGVHU4He8UxV5GdW8P6X6LQvhirk6oRLrp6XH2FLdnyDpYETpVEVz8YgZ",
  "key29": "3AhfpcjQBPwjSVY5xE4wENz63UEAwgk26oxKb24U69rsUW4zXVwxzxAn9ac6j4guKFv3uxYuEWj2BRP82CRmKJVt",
  "key30": "wgxznfk9e3MbsgRF98Vb3G749H85ZfeHNwwqQdjVLebbJKfeZHvqZ9QkqiNdCDgK3n8c314g4XcGgXkBx1Yz9bm",
  "key31": "5tB3oSnvUgYGm22pv5HzduezVWdPwe1WSCdao3B6Zu8JXpntFChtgApnv6ta84o8qMS8Ez6NjpRZyAKmKuegPKWS",
  "key32": "2A88YncDUCTb3HkMsGNrJS4tSdXfT5ibjb4ukeVJmWdEo1ancFyXjmnM3Zop3pvC1zFSWXW818p4vDVktv6C1Ex6",
  "key33": "3AuLthLnwajvCZsTo8gqtPPpjuLebKWhjAxYcocTpTp1NhsrfDJfAFEKCEVsmVb7tgABbM2wwJYu4KzGPuXsCa5m",
  "key34": "RNdv2HaMEjbTwBnyX1wwGd2nVDmC54Ft8BjGwD841L1zPN8Z7HgmM5K7fvGEVqv1QbKRcTbcPKduus7dDeNsWr4",
  "key35": "26hqE76Cb4Swo9kXkmLqUGC3Fa2oxo3ADz662Uw6HVUbfpDt94JNfXorDoP9YZP1EDpNmR8V5ddeRQb9PLSiJQ71",
  "key36": "4YjEQEJMZboA9GqbnUgXN8hkMpDVUfC2Fyz9ZcJUMzNo9rD6DYsv9bS9kVj4y2AmpHPoDQJgQt3JYMCeR1iDVifP"
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
