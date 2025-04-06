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
    "QhSoUWemBjK74PyTo9aWKigaQK9s32JxVE97pu5cr8wFm47Mvcy65wsj8yq1o5ypHdKnikQZGWLKQUKaAbYXWwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XFuyrXtKEZzMVvbbBtCdPNFspe29ZtYeYYQvAfcknAMWzj8wQSbKqSvzfXzUy7ZMf5xvhJ2n6YD4DSvFF1aWVwr",
  "key1": "5b1d5d7WmqtyKsAquQrr2PbcpES9SWaomMM4TAnZHB1X28dunvdt1qz33PPtxo7a6uo2N5ms3XfBVAeti4auVESp",
  "key2": "2RM9xa7iBx9W7qXZm7qEP2R8bJmci3v6sao3KedrTjK2HjxexpDnS3i3R9KivmfE2P7w8y85EHfgYUvt69HMjk3h",
  "key3": "WWd28PakmEErv2LEgaxYPhvfvQpYa58MEBtR18Ys7TaTFxxPfdY46GQtAM8yBnWXYb2jxrsXTEdjtSThNctWBfo",
  "key4": "3vH6FLBfB6T4MpKigfoDfAQcfDKPWH9CUsPju1FUD95jjM8iiqywwWz9CteUqia9VacFcdzPTKWg7Dcm1EpKgE8h",
  "key5": "3tUqCzvci6ix8KM8UZ4SQ5QJMDEwCuWnETgNpWKJh2bvDGMFREKBk8jsNe9BUXNBeYNdNsx73SsH5DD5SHNwvtxF",
  "key6": "55NExny85H5eT67c9kSbjMv8ciqTdL3zHAmDrM8GSbURGJzGJ83juFsarKdyEpHpXUL5tg512d1gHD1R6TNjiQLw",
  "key7": "434NyoKsB5eEPtxREYJA72BL1eX5KffBPMqYQ5RMBkGFtsghjERgQKp4KVDeUhfqKw6ieG2yiepSnwhE53k3DQuH",
  "key8": "WJ66br4QKVYo9KQ2omoDbCXDTeEUntzTUNdSCttvhS9gcdD7kSyr4ySHegE7BK8RKRKDE1KCCF5EYc85YJwxB2b",
  "key9": "3qYnS5uzFFvMemkMWk1nNWfAEvyMDtQbqcWHQgBQkZoXagvGLtErRsaz4ZZudDhomF7atdCvwFwTwTNKhLUYat5V",
  "key10": "4uqi5RHrWWiSsGmCr93JScPSTXACDwH69FG9X2DvqVUTescfjaVRWdcK4dfPLrxA3rMoW5mm8dwwzH8hi2RZr2rL",
  "key11": "5DrqMjrxAg9FyBzBCXaD4oPwUYPYAQLDPpWSqGnSBPcEoHWYGtQggjnjEcow8cLHjcd2Y7QJ9mJr1GaACQuhSQju",
  "key12": "3ZxJPWe6ZPs2jTWanXVALLQaHALZeoe5RheNTsf2m8MjQxa6rFwvnQkLi95syw7yCyUrPHkqFDr9nhxmkj28oTuM",
  "key13": "5hoMZqhPJyLppvxNy4VvZMDkx3RJXiBoZoC6nrmqiAaSfdXvUoWEomKZ5QV5w6LhuVegy933yjDaNhGpe6idBk6j",
  "key14": "3SR7zsLa9H3cnBNJaYJaTAGB2zMiARWeAiWi3yAZ7CHtT4J7DbVwWYEdAmbnNCJzhGgvZXKscjpDEPWCBRYX6AsA",
  "key15": "4wwiNZdm3vFTVucorS1F63ASMQGUNGP42J7FGfEr9ryHuXvPtUvV2Exq5VdBqGMTJgVwJ9E1iWRTRSbmczgp5Lxo",
  "key16": "3VgRd23hqAfsg7K8ixJSk5ZxUaHEAmnkdBWp3khD7jUxXrna27eNjLhq4NG99KYBwnXHjn6bcbXvpWpSy7kxy62H",
  "key17": "5rkT4tjgrqZn8AtEh5H9qjaTbFdWmB5qRbbCacPzYvuGANkn9hSwKD8e4d1GLLcyjvTqK3fRKU4uqESwBThe3ea8",
  "key18": "xtc6nbkA2gcLiiEn5KecYoXKFiWiKjdvLcRPB4wQUAGjnFaufSmjMzytD6HN6ttifiiS4XDhmhc9v2zb7JiEHiB",
  "key19": "5ZtPLddsuxEaYgC7RqnsjmG7dsZgfBWNDtmHTncGiJVrh3Jcmu3d7v8DdK12cGJD2bPwZxRr88VUpgpB7v98bKrc",
  "key20": "5hamyvJ6mg7L17KLMXgBj8RDk1HUu3BdL7BZhijwFaKzyjfUkmDq62hjmpih7htqiiAegjv2igqJQWQbz33WVhGU",
  "key21": "LmStcazJCb3sQmdDevwvy29rf6PiGXtdeyvjGXJPFkp5j7FRRuRvrzjjAmAXCSnzTjon7vWy9E3XW1zV7DABkMP",
  "key22": "2Wx42pct59ZyTQwB6yQP8oK1SP4vVseU4aYvZ4MF67E4XUytUG6sQFUMqq8ueLcNwZWUsnjEYRUfwAW4K8LwYwQY",
  "key23": "6rDM5fvujsmDuAJARD8x2ALucqAsgKRq31Nva2V5LroZw6xmAa6NbQcuX6TKE37ZzvMPiFYB8uo5kaWbRxjFsLy",
  "key24": "2meYZAbmonr4tP5d2jAPJt1kuoKdoRUCEMVJy8thbDuLZJBs7komjM7KDP9n7wpFhvTh93TTgANySrbAUnymB9u5",
  "key25": "56FJNWZAP9G7kPH5qPDBzvSBw4udRLAUs8qtQGde8Edck1s2ZV3k4Xp5Xa98o7AaSkuQxKkenAAzm2Asp48JjsSf",
  "key26": "2UaZAWpDj5Y5GCJoG7hZ9JVP11TddfWX2ZzNP1PRJ9ennAFba6syDL3mSnhqh2DTGjhQvUQju8oNKMtJFybUgiEK",
  "key27": "5mGjhn8ipXG5EEjqBuENomRTeBiaCnik6vwmVvNRo8qvomUp7hSHhRQ9SnkfaYyYFNc4Ki1b8YdshgkQz7qehriQ",
  "key28": "5YDbHcdN8Y7ka4uKzMahv3Ezy53CyMEDKTaf6BcRMyUzfZ5xnAvQUtqG5VD15z8QWspxAGTcjM5G9TBqK8eERAST",
  "key29": "4D2nubEjkBA55t2VAfzfUbhwidZXWHBQJsYPeCixsat2JBiEDkFYCQcYEAMLijgJAwEZmXBcH5g1UNhP1Tto2t9N",
  "key30": "4Bzc5Fo2gCKtn5n7HhTcs6e2XRkCaPMs1jQKRkrjXUBp4LZgmPpD9AtWWoLYz1ft8v1wcR1e7L5nC52h6maTdYgd",
  "key31": "upuYMmisme7YB1MQBfXYSEkQfPf7w1pbCzVVmoaEm6MXgvojpFLY17d3AM7DmoJTpev2r3h7afpoaFHdiyPUtxH",
  "key32": "5ywYSkUG9h5oXE8HGXzG7G2FcaTUpp9K9VRKwz15CVPk6tMBm1b8DhZSH5rhEVbcStob3LbYB43nyoE6aZW6art4",
  "key33": "5Y3A7XvB8UWDgcqgYr82nBAj21EivLGYBDdJ4Z9Qh4nC31zaE9AwQcKjhbM8cf5LfKYTko68f8ewTjdo3xNyL5Zc",
  "key34": "4Cjrmg3c81mRptrBXA3C4VRJW99L9yMZGFAUWSShDrM3toBW1MnsjuJoivGQ1zZ7rDrybgMsk5Eq9oaHukYs3E1e",
  "key35": "jdWeKSHsDh5XHmwozN94KTSyUDscdfs5yonnoU2qaDH5zPJHAsdAiGQs6LW8Q4c2APYhKtTLHRksc6HTz1eBXow",
  "key36": "5WHhEfSrzVuKq4njr1r6EGL9SX8f5n9MBRYA9VuXoVVpKJgQwD8PU9AtT9uvLGFkxBrDQdf3DjEfGSgVW3KnUgUH",
  "key37": "2jtDmhxDvbvGs9Qvk5FddhDW3BDbBvNJtrnQJ4mhLt9TP5MNZDF7gUm4asfrHHfjRRoBJ26qiZaNiTKF3U2taUgY",
  "key38": "eFQQLRqc9LNZcfu7MxbWkKvqt6edXo9yN516WFeLEyKyWgcdMY79d772Rzn6NBfYBcPcjHS588RdZ2MEuquEDEg",
  "key39": "Lrnmi4sTkVvVa6wRJ19yMoaWoemCHfTc9879gx4mRGfjRnhVedzpMaLaQdro33b7gH3SRUguX28NraTdb4aWBh2",
  "key40": "3PT41qR82Be4fxP2wzAWoBGaDZGf6KN2UTwmvS7iVBWDme9whsQ5ZD7mU55znBZk9Z5xLuxpuNkbawQ5HeJGndJK",
  "key41": "4RZxUTJGBunsfahnENUic8dqtwPdcCRUDos3Xt6JHuSs2FBfJL73gioFuQpTXKH2Eoa8hnnuxoZmWBibtztTSumP",
  "key42": "3C5Ve12pP4baseQ1mpaTG9TZ8QqJhN2jeShd3iqEit1g62kDHUUduedHBWzSqXjfxHUEKDTHtTQoxvP3Ro5feYKp",
  "key43": "4brJmMmo3TsqiLC9vPtCGqViPQ6bxtnFPjvBeWeRkuZYWr41pWDjuQwfxM9fD7GdDG5QbzFjyNT1pR8hq56wwM2H",
  "key44": "CKuvKMciVzkZFew3RDyARxAVYppXZBoTUjseC1ygZr9gVwMjgqfA7K86typa5k3HKDpMvSK3MHGWR4ys5Y34WTQ",
  "key45": "4k2YFzrXbwjFxwx9GGJHVxckGs8T8Aa2u97c5CUrXaVG8CMqXX84XDcp8AEPWQtkkp9YH6hBXsGjU16DmYFzHTKZ",
  "key46": "X3gr5CgtB9cghFvym9XsQJaGEQofnGUH4o33k6GD1GWJ8PueyaF9fmccZ1EJX7p5X1ay29MPgGwQFUDTuZ7G8k9"
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
