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
    "2qnpsfvz2nK5fvEMeAha3P3to47DgQ4TrhX7U4FmPK5sFwY4vMqfxVSYVYFM47rp2X3EjjfJs4iJWxauqiZiZw5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "215KBMAqqnNYtQk5ZTVj5uVzLYT22qh9eAUQ2Gw3Xgyurc2u91vMp4YtcQA9mQVgrwjLrGCfema4kr1ub2S9kEtZ",
  "key1": "4fPh7yJx7Lvah4QAMzXfbVC6Uv33Nb6XYRYnVJZXmGTNnDQeQHjS34hVdYaG83uiQrBT3SitrzQSLpxoRsPrkBvP",
  "key2": "4jAEVspAXr2Fpr3d3Br77WuTLr4G8a5KCP7ocDnv6deuQrq2NbQc7oLHQTZNmyJUjFi7SwN5EtswbdWxHRGD9cte",
  "key3": "4N1cJEHonq5cLMKXX7Ln57G9cZezUSGs3GL9xvXYuT8ZJaLTqBeWJi1wSKvwC69hveZihWQWRxqQcJfSAihxkmzV",
  "key4": "2ZBcvXmFzbWzmauT6mhM8C3zUfmsAh5yL9n34QEipyHzeCCbvHyDmV82j5qeQiGGHNCGF4svqQDTnDhXvvmMSsM3",
  "key5": "3b2MpZHgTBxL2jrWYWucDeXR8kmacXKoTgQHUCyxzX8HBUFoazGvLuhrSLux9UdPBwWV6pXe2hZ3d9SUtZ6ZinRB",
  "key6": "FFVaztiZvwu98UuSALnAjckcLrtquHoaav65MSitNJsUBABERva9AeKiJjy4crKePVk45emN1qLHCv9CNVe3Q5F",
  "key7": "wUsykbKVRWw1hXyoRRzTe8N5MfHG3LUXz4TQrrxYgFmU3t7VdnMTqLDmtwE2V7S6Leo127p1r3bKv53UQgsMBMd",
  "key8": "122dKSTD6MtC2PWsY7Ue9JjgnaFMQpcBbioaXJD2v6npWDEwUqeEpWyx5UFLz4Fhf6JfK5YxjoQYf7TrrFjeFuDK",
  "key9": "4WjD1EMEJjEdpmqRc2Eqc6aXuM5Qjd8tzL3iSi9HLmLBNR7gG6iX8MMi3BGzAzJozCn3xvu7MgtDYyVSqVEjhcNh",
  "key10": "4K2sRxfKEQuxhDMRKaWV5utYdfEajAf7ZdM5hptHkotCenUdDVin6aNKcXnSoiPoPA1GW5CpejB9XVchytuFSr4m",
  "key11": "3PsxezuBR5jskmxan6owgwSFJNXfsE4jkZmPH2bcHGiNo4RFAXgdvcFBi5pMyM2hDYkYW2Qo3jkiGwWDwK657yYj",
  "key12": "54xg85pXHjEoX5BT2Cj5oqQeY6iKTNJhDZT7WKETYV6cmvAgPxBdpQNj22fk4W1uRQLVRVQR1kRTBefq3D11WFTd",
  "key13": "23cPm9Z1LXegj1DiPZWfcqzWm4F3ZC7PRaXiZJjAyBWVgnVrCfGp15hdiZukNBQ5yc4FSXzmKpb93STjicfbUj68",
  "key14": "3Gn8BQfQrjq2nuufbt2Y3RxuksSf4NuZWKrcqH2zsnkNvdSRdsHfYneQYXnFz9P4eLLAE53NNuGaj2shi7JajkiR",
  "key15": "wiACWHXmAPC5Tf6Qur9tUvNSTFsxTWHfRzQuexxkdSNvtwu7tkShNhnnq479XJt2BfEokC5rr7Gs1mtyRmBeFF7",
  "key16": "4VePqcivKvY8K5QPWGGhC2eZiyyvshzpnhn3b1a2tQWrM4gZ9gDW8DGWUTyJLMopjj4GJLhRfugZLUeqoDhedskw",
  "key17": "2UrRMpB2tDTJhf8bNyL5fg67DDBmFo6SVwzJmpG8XDFvUuLiPNs3Xq2tct4aGFQSSczjr4MgPZ93KU313LEPFan2",
  "key18": "6UWqmADky2GdHjYdJJgyuAD615qb5sgnhMJTdFro3hfKEGMe4SxjJmRDs5m9uBt1FwxTC24kWMf8MwGEaCbyXc7",
  "key19": "kS4DMBKncSKKxcrMLdpC7VZbqsrySHSqan5d3u2NTQ7vEwUYsYjcjoUmpEBo6xeS645TKLmhJYSys3svytgGczq",
  "key20": "5pDwDN9zrUSHVynq2ojcHeRuZkvxp5XdCHGRBqzEDQXaJVfYDz26UchLpPgLUrGK9em2mWr8twmCXpj8g7cNPaZT",
  "key21": "3c9ZwieN8oUMTq4wBFtYsqefAMTAbZGNPou7hctHahFay2ADZYcJCHKzSu7GihnWKD8WdUG3q4e2mWqrJZaw5gkh",
  "key22": "2qkmfDDi3mcaqkD3MTiD4gQ9N4Ckf45AhMmWrczW9iHVCAS9vCoT4CpetwWvEiWSftg7AUxKxaWKXxyQNkNuAnpy",
  "key23": "5mvjthfsJBkZC5Y2Mv6vp7Mm8S5jQwmxVXsTuJLXqa9cQmzsh9paNhrULJNySkcDFcurgoYMuv9cdhhYDLBHUCVo",
  "key24": "fwAL4D522pp7xVneTtQop5JiR5aygBNn1qkdgGocEeiUwaSjAMnZh2K223xWeQFueBBQ6h89K61MZqVFTbGzsPj",
  "key25": "bfVPvYqeC1rE9Ta96jKVNa7bcb1LrQ8iNgTyhKT9iEnUKBPSBt4SJqErYSur3k7QY5MVR9vzvFvMv16gzrb8oWL",
  "key26": "WQ2qNRc3tqB5ciaYswUMCzVNhPvJznV39xNAt8kwkxEpzJA35rLpTQ7P86sgUtRAnPRCuzTMjtRbmsLJnRWs3wX",
  "key27": "DPgVY9a822gfhu8Y4rMxdmF79bDHcR7YHqfzMwM9cBzKtBUsuUr8jcxv88Sub8Htcfj4MomniL7fRyunqXR1SVb",
  "key28": "4wcZJ7y1AJfgz9nRjJstL9zf21KibSA9nwP5vXYxzVbU34UbLiCv2FRemkGJZ4x7WXNT2LxvuaFTrVH3BWoAzQ99",
  "key29": "2cqB9uMVe7BbtbtGgMm5vo98qFXhTXkNKa6PY7X9KyHjH7NoPQ26gyN8vhhsUNmcCe5dQv953DZ7RLt6qrFMuX6h",
  "key30": "3DmMxcbSnYUbrhm34vgzJsxzV35oSZSNwCiPeQnFYBfNTu1DvtRP46nBR3Fmy4KNmRhsA8iD6Phd1Rw2SLMa2vke",
  "key31": "2YzUp1mV5mibVFYt3RAYkqmxDLePjjXBqTYeyMH9WSaqosghE2icHN7CkpDz1tJkajCbqAkbUCxCurHknN1AxPs9",
  "key32": "AqMDLQupyyeYdVwL1S6KFuybpMU7A7RhMHdBsqTUmEpn19WfNejUEHSzunPUhRKyGjiGKzRiDkmpxYra3D9VwTS",
  "key33": "3Wr8eeYvPc7dwNNjrTPtAC8u7Q7MaqzvVKnRWuNExwsvimvKHQbQ36NYusqaH3bijaUhMNmvvKFZcxVF6XSTak2K",
  "key34": "XRAgkhNSkQiNX6AB1MtVit9qBZwjSdwxu1Cw7jckVBoPzY7Vn27hrhsCbPi7go99HxeKsXgG7wuVwZiG3jxtYqg",
  "key35": "5nkELx8oBDb8jNyBJx5pRScFgN3DYeYXNxKbxnJUkCN45iaiwBMRaafrHkemBJYUQY9o4yjD7euV8csPLveWKCit",
  "key36": "3vhhYwEnkEi2sEXCAh9QqkkGj5HFQnBo7fbKvRbV9gK7VZRCQGJs2qJw6DU7xAKAcySN1g51WZ7pGAZatZPpftP6",
  "key37": "2WzzAtJywJkHgRMBirZ7XPyM1dt4qCsPaWz8311RakUBwmdq2cLcAoaksDA8evfqEub4FVxVaC6UzQS6reeV3x6",
  "key38": "4J7Tt1NAkBzmDjXzD2E3JhoXoF9VReXtxGKAZwpm7P1tu86weVeZPAVxueqkyXqu9JvSvffa9mvTxboDCTHSaUg1",
  "key39": "3XDar4PmNvo5rVQhEbtMBVu7zFUVJyr3i2RghVhQT3jmPtLgT8qpCSSNC4ewjPgmXgx9CeXhLSUS2gT9avk66GxH"
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
